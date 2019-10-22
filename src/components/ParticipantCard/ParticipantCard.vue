<template>
  <div class="participant-card max-w-5xl m-4">
    <div>
      <div class="media mb-2 lg:px-4 relative flex justify-between">
        <div class="media-left mr-2">
          <a class="focus:outline-none focus:shadow-outline overflow-hidden" :href="editProfileLink">
            <AvatarImage
              :alt="participant.first_name"
              :src="avatarSrc"
            />
          </a>
        </div>
        <div class="media-content self-center flex-1">
          <h2 class="text-xl">
            {{ participant.first_name }}
          </h2>
        </div>
        <div class="media-right self-start has-text-right text-right">
          <a
            :href="editProfileLink"
            class="text-sm text-gray-800"
          >
            {{ $t('participant_card.edit_profile_link') }}
          </a>
        </div>
      </div>
    </div>

    <section class="lg:px-4">
      <div
        class="mb-4"
        style="display: block"
      >
        <ProgressMeter
          :first-meter="totalPledged"
          :second-meter="totalPending"
          :goal="participant.profile.pledge_goal"
        />

        <div class="mt-2">
          <h3 class="font-bold flex items-center">
            <svg
              class="fill-current text-primary h-4 w-4 mr-1"
              viewBox="0 0 16 16"
            >
              <circle
                cx="8"
                cy="8"
                r="8"
              />
            </svg>
            <span>
              {{ $t('participant_card.total_pledged') }} ${{ totalPledged | currency }} {{ $t('participant_card.of') }} ${{ participant.profile.pledge_goal | currency }}
            </span>
          </h3>
          <h4 class="text-sm capitalize">
            {{ unit.modifier }} {{ unit.name }}
          </h4>
        </div>
        <div
          v-if="totalPending > 0"
          class="mt-2"
        >
          <h3 class="font-bold flex items-center">
            <svg
              class="fill-current text-tertiary h-4 w-4 mr-1"
              viewBox="0 0 16 16"
            >
              <circle
                cx="8"
                cy="8"
                r="8"
              />
            </svg>
            <span>
              {{ $t('participant_card.awaiting_confirmation') }} ${{ totalPending | currency }}
            </span>
          </h3>
          <h4 class="text-sm capitalize">
            {{ unit.modifier }} {{ unit.name }}
          </h4>
        </div>
      </div>
      <div
        :class="[ selected == participant.id ? '' : 'border-b lg:border-b-0' ]"
        class="text-center pb-4"
      >
        <button
          class="py-1 px-8 rounded-full bg-secondary text-blue-100 text-sm font-semibold focus:outline-none focus:shadow-outline focus:text-white"
          @click="$emit('toggle', participant.id)"
        >
          <span>{{ selected == participant.id ? $t('close') : $t('view') }} {{ $t('rewards') }}</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import AvatarImage from '@/components/AvatarImage'
import ProgressMeter from '@/components/ProgressMeter'

export default {
  name: 'ParticipantCard',
  status: 'prototype',
  release: '1.0.0',
  components: {
    AvatarImage,
    ProgressMeter,
  },
  props: {
    program: {
      type: Object,
      default: null,
    },
    participant: {
      type: Object,
      default: null,
    },
    unit: {
      type: Object,
      default: undefined,
    },
    unitFlatConversion: {
      type: Number,
      default: 0,
    },
    flatDonateOnly: {
      type: [Number, String],
      default: 0,
    },
    selected: {
      type: Number,
      default: 0,
    },
    group: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      pledgeStatuses: [
        {
          name: 'confirmed',
          id: 2,
        },
        {
          name: 'paid',
          id: 3,
        },
        {
          name: 'pending',
          id: 4,
        },
        {
          name: 'paymentScheduled',
          id: 8,
        },
      ],
    }
  },

  computed: {
    lang() {
      return this.$store.state.lang
    },
    avatarSrc() {
      return this.participant.profile.image_name == null ? '/v3-assets/dashboard/images/dashboard-avatar.svg' : this.avatarImgSrc
    },
    avatarImgSrc() {
      return this.$store.getters.avatarPath + this.participant.profile.image_name
    },
    editProfileLink() {
      return '/v3/tkdashboard/?redirect=' + encodeURI('auth/login/' + this.participant.fr_code + '/edit-personalize')
    },
    totalPending() {
      const statusNames = ['pending']
      const statusIds = this.pledgeStatuses.filter(status => statusNames.includes(status.name)).map(status => status.id)
      return this.getPledgeTotal(statusIds)
    },
    totalPledged() {
      const statusNames = ['confirmed', 'paid', 'paymentScheduled']
      const statusIds = this.pledgeStatuses.filter(status => statusNames.includes(status.name)).map(status => status.id)
      return this.getPledgeTotal(statusIds)
    },
    sumPledgesFlat() {
      const statusNames = ['pending', 'confirmed', 'paid', 'paymentScheduled']
      const statusIds = this.pledgeStatuses.filter(status => statusNames.includes(status.name)).map(status => status.id)
      return this.getPledgeTotalFlat(statusIds)
    },
  },

  methods: {
    getPledgeTotal(statusIds) {
      const flatTypeId = 3
      if (this.unitFlatConversion <= 0) {
        return 0
      }
      if (this.flatDonateOnly === '1') {
        return this.participant.participant_info.pledges
          .filter(pledge => statusIds.includes(pledge.pledge_status_id))
          .reduce((total, pledge) => total + pledge.amount, 0)
      }
      return this.participant.participant_info.pledges
        .filter(pledge => statusIds.includes(pledge.pledge_status_id))
        .map(pledge => pledge.pledge_type_id === flatTypeId ? pledge.amount / this.unitFlatConversion : pledge.amount)
        .reduce((total, pledge) => total + pledge, 0)
    },
    getPledgeTotalFlat(statusIds) {
      const flatTypeId = 3
      if (this.unitFlatConversion <= 0) {
        return 0
      }
      return this.participant.participant_info.pledges
        .filter(pledge => statusIds.includes(pledge.pledge_status_id))
        .map(pledge => pledge.pledge_type_id === flatTypeId ? pledge.amount : pledge.amount * this.unitFlatConversion)
        .reduce((total, pledge) => total + pledge, 0)
    },
  },
}
</script>
