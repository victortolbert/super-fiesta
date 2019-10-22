<template>
  <section class="participant-rewards">
    <Transition name="fade">
      <article
        v-if="show"
        class="py-8"
      >
        <a
          class="text-2xl text-black float-right"
          @click="toggleRewards(participant.id)"
        >
          <i class="fal fa-times" />
        </a>
        <h1 class="text-2xl font-bold">
          {{ lang.rewards }}
        </h1>
        <h2
          v-if="program.program_pledge_setting.flat_donate_only === '0'"
          class="mb-4"
        >
          ${{ program.unit_flat_conversion }} {{ lang.flat_donation }} = $1 {{ program.unit.modifier }} {{ program.unit.name }}
        </h2>

        <!-- Shown when greater than small, hidden when small -->
        <div class="hidden sm:flex flex-wrap lg:-mx-2">
          <ParticipantRewardsCard
            v-for="reward in rewards"
            :key="reward.id"
            :reward="reward"
            :program="program"
            :sum-pledges-flat="sumPledgesFlat"
          />
        </div>

        <!-- Shown when small, hidden when greater than small -->
        <div class="sm:hidden mb-4">
          <ParticipantRewardsCard
            v-for="reward in topRewards"
            :key="reward.id"
            :reward="reward"
            :program="program"
            :sum-pledges-flat="sumPledgesFlat"
          />

          <ParticipantRewardsCard
            v-for="reward in remainingRewards"
            :key="reward.id"
            :reward="reward"
            :program="program"
            :sum-pledges-flat="sumPledgesFlat"
            :class="[viewMore ? '' : 'hidden']"
          />
        </div>

        <div class="sm:hidden text-center">
          <a
            class="text-blue hover:text-blue-dark"
            @click="toggleViewMore"
          >
            {{ lang.view }} {{ viewMore ? lang.less : lang.more }}
          </a>
        </div>
      </article>
    </Transition>
  </section>
</template>

<script>
import ParticipantRewardsCard from '@/components/ParticipantRewardsCard';

export default {
  name: 'ParticipantRewards',
  status: 'prototype',
  release: '1.0.0',
  components: {
    ParticipantRewardsCard,
  },
  props: {
    sumPledgesFlat: {
      type: Number,
      default: 0,
    },
    program: {
      type: Object,
      default: null,
    },
    participant: {
      type: Object,
      default: null,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      viewMore: false,
    };
  },
  computed: {
    lang () {
      return this.$store.state.lang;
    },
    rewards () {
      let combinedPrizeObjects = this.getCombinedPrizeObjects();
      combinedPrizeObjects = this.filterPrizesForDisplay(combinedPrizeObjects);
      combinedPrizeObjects = this.sortPrizesForDisplay(combinedPrizeObjects);
      return combinedPrizeObjects;
    },
    topRewards () {
      return this.rewards.slice(0, 4);
    },
    remainingRewards () {
      return this.rewards.slice(4);
    },
  },
  methods: {
    sortPrizesForDisplay (combinedPrizeObjects) {
      return combinedPrizeObjects.sort((a, b) => {
        return a.prizeBound.display_amount - b.prizeBound.display_amount;
      });
    },
    filterPrizesForDisplay (combinedPrizeObjects) {
      return combinedPrizeObjects.filter(prizeBoundStudent => {
        let isNotActivityReward = prizeBoundStudent.prizeBound.activity_reward === null;
        let hasNoPeriod = prizeBoundStudent.prizeBound.starts_at === null &&
                    prizeBoundStudent.prizeBound.ends_at === null;
        let isNotQuantity = prizeBoundStudent.prizeBound.quantity === null;
        let isInPeriod = false;
        let isDisplayableStatus = true;
        let displayableStatuses = [
          'giveaway',
          'delivered',
          'pending',
        ];
        if (!hasNoPeriod) {
          isInPeriod = new Date(prizeBoundStudent.prizeBound.starts_at) < new Date() &&
                        new Date(prizeBoundStudent.prizeBound.ends_at) > new Date();
          isDisplayableStatus = displayableStatuses.includes(prizeBoundStudent.status);
        }

        return (isNotActivityReward && (hasNoPeriod || isInPeriod || isDisplayableStatus) && isNotQuantity);
      });
    },
    getCombinedPrizeObjects () {
      let prizeBoundStudents = this.participant.participant_info.prize_bound_students;
      let prizesBound = this.participant.participant_info.classroom.group.prizes_bound.reduce((prizesBound, prizeBound) => {
        prizesBound[prizeBound.prize_id] = prizeBound;
        return prizesBound;
      }, {});
      let prizes = this.participant.prizes.reduce((prizes, prize) => {
        prizes[prize.id] = prize;
        return prizes;
      }, {});
      return prizeBoundStudents.map(prizeBoundStudent => {
        prizeBoundStudent.prizeBound = prizesBound[prizeBoundStudent.prize_id];
        prizeBoundStudent.prize = prizes[prizeBoundStudent.prize_id];
        return prizeBoundStudent;
      });
    },
    toggleRewards (id) {
      this.$parent.toggleParticipant(id);
    },
    toggleViewMore () {
      if (this.viewMore) {
        this.viewMore = false;
        this.scrollTo();
      } else {
        this.viewMore = true;
      }
    },
    scrollTo () {
      setTimeout(() => {
        $('html, body').animate({
          scrollTop: 0,
        }, 300);
      }, 310);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-container:focus {
    outline: none;
}
.image {
    position: relative;
}

img {
    display: block;
    width: 100%;
    height: auto;
    &.is-variant {
        opacity: 1;
        transition: 0.5s ease;
        backface-visibility: hidden;
    }
}

.play-icon {
    transition: 0.5s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
</style>
