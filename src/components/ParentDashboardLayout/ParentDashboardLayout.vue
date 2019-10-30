<template>
  <div class="mx-auto">
    <!-- Mobile (desktop hidden)-->
    <div class="m-2 mb-8 pb-4 lg:hidden border rounded-lg bg-white shadow-md">
      <div class="lg:flex flex-wrap">
        <div
          v-for="(participant, index) in participants"
          :key="index"
          class="lg:w-1/2"
        >
          <ParticipantCard
            :participant="participant"
            :program="program"
            :unit="program.unit"
            :unit-flat-conversion="program.unit_flat_conversion"
            :flat-donate-only="program.program_pledge_setting.flat_donate_only"
            :selected="selected"
            @toggle="toggleParticipant($event)"
          />
          <div class="px-4 lg:px-8">
            <ParticipantRewards
              :program="program"
              :participant="participant"
              :show="selected == participant.id"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <PledgeButton
          :participants="participants"
          class="inline-block"
        >
          Pay Pledges
        </PledgeButton>
      </div>
    </div>
    <!-- Desktop (mobile hidden)-->
    <div class="hidden lg:block my-8">
      <div
        v-for="(participantGroup, index) in participantGroups"
        :key="index"
        class="rounded-lg bg-white border shadow-md overflow-hidden mb-4"
      >
        <ParticipantGroup
          :program="program"
          :participant-group="participantGroup"
          :has-only-one-participant="participants.length === 1"
        />
      </div>
      <div class="mt-8 flex justify-center">
        <PledgeButton
          :participants="participants"
          class="inline-block"
        >
          Pay Pledges
        </PledgeButton>
      </div>
    </div>

    <!-- Shown on both Mobile and Desktop -->
    <div class="lg:border lg:rounded-lg lg:shadow-md lg:my-8 bg-white">
      <div class="text-center my-8 max-w-sm lg:max-w-lg mx-auto">
        <h2 class="text-xl font-semibold">
          {{ $t('share_pledge_page') }}
        </h2>
        <h3 class="mb-4">
          {{ $t('every_share_can') }}
        </h3>
        <ShareButtons
          :participants="participants"
          :program="program"
        />
      </div>
    </div>

    <ParentDashboardAccordion :program="program" />
    <SponsorPromo />
  </div>
</template>

<script>
import { chunk } from 'lodash'
import ParentDashboardAccordion from '@/components/ParentDashboardAccordion'
import ParticipantCard from '@/components/ParticipantCard'
import ParticipantGroup from '@/components/ParticipantGroup'
import PledgeButton from '@/components/PledgeButton'
import ShareButtons from '@/components/ShareButtons'
import SponsorPromo from '@/components/SponsorPromo'
import ParticipantRewards from '@/components/ParticipantRewards'

export default {
  name: 'ParentDashboardLayout',
  release: '1.0.0',
  components: {
    ParentDashboardAccordion,
    ParticipantCard,
    ParticipantGroup,
    ParticipantRewards,
    PledgeButton,
    ShareButtons,
    SponsorPromo,
  },
  props: {
    program: {
      type: Object,
      default: undefined,
    },
  },
  data() {
    return {
      selected: null,
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    participants() {
      return this.$store.state.participant.participants
    },
    participantGroups() {
      return chunk(this.$store.state.participant.participants, 2)
    },
  },
  methods: {
    toggleParticipant(id) {
      if (this.selected !== id) {
        this.selected = id
      } else {
        this.selected = null
      }
    },
  },
}
</script>
