<template>
  <div class="participant-card max-w-xl m-4">
    <div>
      <div class="media mb-2 lg:px-4 relative">
        <div class="media-left">
          <a @click="editParticipant(participant)">
            <AvatarImage
              :alt="participant.first_name"
              :src="avatarSrc"
            />
          </a>
        </div>
        <div class="media-content self-center">
          <h2 class="text-xl">
            {{ participant.first_name }}
          </h2>
        </div>
        <div class="media-right self-start has-text-right">
          <a
            class="text-sm has-text-grey"
            @click="editParticipant(participant)"
          >
            {{ lang.participant_card.edit_profile_link }}
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
              {{ lang.participant_card.total_pledged }} ${{ totalPledged | currency }} {{ lang.participant_card.of }} ${{ participant.profile.pledge_goal | currency }}
            </span>
          </h3>
          <h4
            v-if="!isFlat"
            class="text-sm capitalize"
          >
            {{ program.unit.modifier }} {{ program.unit.name }}
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
              {{ lang.participant_card.awaiting_confirmation }} ${{ totalPending | currency }}
            </span>
          </h3>
          <h4
            v-if="!isFlat"
            class="text-sm capitalize"
          >
            {{ program.unit.modifier }} {{ program.unit.name }}
          </h4>
        </div>
      </div>
      <div
        :class="[ selected == participant.id ? '' : 'border-b lg:border-b-0' ]"
        class="text-center pb-4"
      >
        <button
          class="button shadow is-secondary is-rounded is-small font-semibold px-2"
          @click="$emit('toggle', participant.id)"
        >
          <span>{{ selected == participant.id ? lang.close : lang.view }} {{ lang.rewards }}</span>
        </button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'ParticipantCard',
  status: 'prototype',
  release: '1.0.0',
  props: {
    program: {
      type: Object,
      default: () => ({
        program_pledge_setting: {
          flat_donate_only: 0,
        },
        unit: {
          per: null,
          modifier: null,
        },
        unit_flat_conversion: null,
      }),
    },
    participant: {
      type: Object,
      default: null,
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

  data () {
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
    };
  },

  computed: {
    lang () {
      return this.$store.state.lang;
    },
    avatarSrc () {
      return this.participant.profile.image_name == null ? '/v3-assets/dashboard/images/dashboard-avatar.svg' : this.avatarImgSrc;
    },
    avatarImgSrc () {
      return this.$store.getters.avatarPath + this.participant.profile.image_name;
    },
    editProfileLink () {
      return '/v3/tkdashboard/?redirect=' + encodeURI('auth/login/' + this.participant.fr_code + '/edit-personalize');
    },
    isFlat () {
      return this.program.program_pledge_setting.flat_donate_only === 1;
    },
    totalPending () {
      let statusNames = ['pending'];
      let statusIds = this.pledgeStatuses
        .filter(status => statusNames.includes(status.name))
        .map(status => status.id);
      return this.getPledgeTotal(statusIds);
    },
    totalPledged () {
      let statusNames = ['confirmed', 'paid', 'paymentScheduled'];
      let statusIds = this.pledgeStatuses
        .filter(status => statusNames.includes(status.name))
        .map(status => status.id);
      return parseFloat(this.getPledgeTotal(statusIds));
    },
  },

  methods: {
    getPledgeTotal (statusIds) {
      let flatTypeId = 3;
      if (this.program.unit_flat_conversion <= 0) {
        return 0;
      }
      if (this.program.program_pledge_setting.flat_donate_only === '1') {
        return this.participant.participant_info.pledges
          .filter(pledge => statusIds.includes(pledge.pledge_status_id))
          .reduce((total, pledge) => total + pledge.amount, 0);
      }
      return this.participant.participant_info.pledges
        .filter(pledge => statusIds.includes(pledge.pledge_status_id))
        .map(pledge => pledge.pledge_type_id === flatTypeId ? pledge.amount / this.program.unit_flat_conversion : pledge.amount)
        .reduce((total, pledge) => total + pledge, 0);
    },
    editParticipant (participant) {
      this.$router.push({
        name: 'edit-participant',
        params: {
          id: participant.id,
        },
      });
    },
  },
};
</script>
