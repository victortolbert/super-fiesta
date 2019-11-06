<template>
  <div class="parent-dashboard-accordion border rounded-lg shadow-md overflow-hidden">
    <BCollapse
      v-for="(item, index) in items"
      :key="index"
      :open="item.isOpen"
      class="card"
    >
      <div
        slot="trigger"
        slot-scope="props"
        class="flex justify-between py-4 px-4 md:px-8 shadow-none cursor-pointer"
      >
        <p class="text-2xl lg:text-3xl text-gray-800 font-semibold">
          <span class="title_selector">{{ item.title }}</span>
        </p>
        <a class="card-header-icon text-gray-800">
          <FontAwesomeIcon :icon="props.open ? 'chevron-up' : 'chevron-down'" />
        </a>
      </div>
      <component
        :is="item.name"
        :program="program"
      />
    </BCollapse>
  </div>
</template>

<script>
// import ProgramOverview from '@/components/ProgramOverview';
import SchoolGoalAndStats from '@/components/SchoolGoalAndStats';
import HowToGetPledges from '@/components/HowToGetPledges';
import StudentStarVideo from '@/components/StudentStarVideo';
import PledgeInfo from '@/components/PledgeInfo';
import BusinessLeaderboard from '@/components/BusinessLeaderboard';

export default {
  name: 'ParentDashboardAccordion',
  status: 'prototype',
  version: '1.0.0',
  components: {
    // ProgramOverview,
    SchoolGoalAndStats,
    HowToGetPledges,
    StudentStarVideo,
    PledgeInfo,
    BusinessLeaderboard,
  },
  props: {
    program: {
      type: Object,
      default: null,
    },
  },
  data () {
    return {
      items: [
        // {
        //   name: 'ProgramOverview',
        //   title: 'Program Overview',
        //   isOpen: this.isDesktop(),
        // },
        {
          name: 'SchoolGoalAndStats',
          title: 'School Goal and Stats',
          isOpen: this.isDesktop(),
        },
        {
          name: 'HowToGetPledges',
          title: 'How To Get Pledges',
          isOpen: this.isDesktop(),
        },
        {
          name: 'StudentStarVideo',
          title: this.studentStarVideoTitle(),
          isOpen: true,
        },
        {
          name: 'PledgeInfo',
          title: this.pledgeInfoTitle(),
          isOpen: this.isDesktop(),
        },
        {
          name: 'BusinessLeaderboard',
          title: 'Our Business Leaderboard',
          isOpen: this.isDesktop(),
        },
      ],
    };
  },
  methods: {
    pledgeInfoTitle () {
      let title = 'Pledges';
      if (this.pledgesCount()) {
        title += ' (' + this.pledgesCount() + ')';
      }
      return title;
    },
    pledgesCount () {
      return new Set(this.$store.state.participant.participants
        .map(participant => participant.participant_info.pledges.map(pledge => pledge.family_pledge_id || pledge.id))
        .flat(1)).size;
    },
    isDesktop () {
      return window.matchMedia('(min-width: 769px)').matches;
    },
    studentStarVideoTitle () {
      return this.$store.state.participant.participants
        .find(participant => participant.profile.image_name !== null)
        ? 'Share Student Star Video'
        : 'Create Student Star Video';
    },
  },
};
</script>
