<template>
  <div :class="['pledge-info-card max-w-full flip-card', {flipped: flipped}]">
    <div class="flip-card-inner">
      <div
        class="flip-card-front h-full bg-white border border-b-2 shadow-md border-grey-light rounded-lg p-2 px-4"
      >
        <div class="flex items-center mb-2">
          <div class="w-1/2">
            <div class="leading-none">
              <span
                class="font-semibold text-lg"
              >{{ pledgeSponsor.first_name }} {{ pledgeSponsor.last_name }}</span>
              <br>
              <span class="text-xxs has-text-grey">{{ date }}</span>
            </div>
          </div>
          <div class="w-1/2 has-text-right">
            <div class="flex justify-end">
              <a
                v-if="pledges[0].comment"
                class="ml-2 flex flex-col items-center has-text-grey"
                @click.prevent="viewComment"
              >
                <FontAwesomeIcon :icon="['far', 'comment-alt-lines']" />
                <div class="text-xxs whitespace-no-wrap capitalize">{{ lang.view_comment }}</div>
              </a>
              <a
                v-if="isMissingPayment"
                class="ml-2 flex flex-col items-center has-text-grey"
                @click.prevent="remind(pledges[0].id)"
              >
                <FontAwesomeIcon :icon="['far', 'envelope']" />
                <div class="text-xxs capitalize">{{ lang.remind }}</div>
              </a>
              <a
                class="ml-6 flex flex-col items-center has-text-grey"
                @click.prevent="edit"
              >
                <FontAwesomeIcon :icon="['far', 'edit']" />
                <div class="text-xxs capitalize">{{ lang.edit }}</div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div
            v-for="pledge in pledges"
            :key="pledge.id"
            class="text-sm"
          >
            <div class="flex justify-between border-b-2">
              <div>{{ pledge.participant.first_name }}</div>
              <div>
                ${{ pledge.amount }}
                <span
                  v-if="pledge.pledge_type_id === 1"
                >{{ program.unit.modifier }} {{ program.unit.name }}</span>
              </div>
            </div>
            <div
              v-if="showAllStatuses || isLastPledge(pledge)"
              class="flex justify-between items-baseline"
            >
              <span
                :class="[statusClasses[pledge.pledge_status_id]]"
                class="capitalize font-bold"
              >{{ lang.statuses[pledge.pledge_status_id] }}</span>
              <div
                v-if="isLastPledge(pledge)"
                class="text-base capitalize"
              >
                {{ lang.total }}
                <span class="font-bold">${{ pledgeTotal }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flip-card-back flex flex-col align-middle bg-white border border-b-2 shadow-md border-grey-light rounded-lg p-2 px-4"
      >
        <div class="flex items-center mb-2">
          <div class="w-1/2">
            <div class="leading-none">
              <span
                class="font-semibold"
              >{{ pledgeSponsor.first_name }} {{ pledgeSponsor.last_name }}</span>
            </div>
          </div>
          <div class="w-1/2 has-text-right">
            <div class="flex justify-end">
              <a
                class="ml-6 flex flex-col items-center has-text-grey"
                @click.prevent="flip"
              >
                <FontAwesomeIcon :icon="['far', 'times']" />
              </a>
            </div>
          </div>
        </div>
        <p class="p-4 flex flex-1 items-center justify-center">
          <span class="text-center">“{{ pledges[0].comment }}”</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PledgeReminderModal from '@/components/element/PledgeReminderModal';

export default {
  props: {
    pledges: {
      type: Array,
      default: null,
    },
    program: {
      type: Object,
      default: null,
    },
  },
  data () {
    return {
      flipped: false,
      statusClasses: {
        1: 'text-green',
        2: '',
        3: 'text-green',
        4: 'text-orange',
        5: 'text-green',
        6: 'text-green',
        7: 'text-green',
        8: 'text-green',
      },
    };
  },
  computed: {
    lang () {
      return this.$store.state.lang;
    },
    showAllStatuses () {
      let statuses = this.pledges.map(pledge => {
        return pledge.pledge_status_id;
      });
      let statusSet = new Set(statuses);
      return statusSet.size > 1;
    },
    pledgeSponsor () {
      return this.pledges[0].pledge_sponsor;
    },
    date () {
      let date = new Date(this.pledges[0].ts_entered);
      return this.lang.months[date.getMonth()] + ' ' + date.getDate();
    },
    pledgeTotal () {
      let totals = this.pledges.reduce(
        (totals, pledge) => {
          if (pledge.pledge_type_id === 1) {
            totals.low += pledge.amount * this.program.unit_range_low;
            totals.high += pledge.amount * this.program.unit_range_high;
          } else {
            totals.low += pledge.amount;
            totals.high += pledge.amount;
          }
          return totals;
        },
        { low: 0, high: 0 },
      );
      let totalsString = totals.low;
      if (totals.low !== totals.high) {
        totalsString += ' to $' + totals.high;
      }
      return totalsString;
    },
    isMissingPayment () {
      let unPaidPledge = this.pledges.find((pledge) => {
        return pledge.hasPendingPayment === false && pledge.payment_id === null;
      });
      return unPaidPledge !== undefined;
    },
  },
  methods: {
    remind (pledgeId) {
      this.showReminderEmailModal(pledgeId);
      this.gaEvent('Parent Dashboard', 'Pledges', 'Remind');
    },
    edit () {
      this.gaEvent('Parent Dashboard', 'Pledges', 'Edit');
    },
    viewComment () {
      this.flip();
      this.gaEvent('Parent Dashboard', 'Pledges', 'View Comments');
    },
    flip () {
      this.flipped = !this.flipped;
    },
    showReminderEmailModal (pledgeId) {
      document.querySelector('body').classList.add('modal-is-open');

      this.$modal.open({
        parent: this,
        component: PledgeReminderModal,
        props: {
          'pledgeId': pledgeId,
        },
        hasModalCard: true,
        canCancel: ['escape', 'outside'],
        onCancel: () => {
          document.querySelector('body').classList.remove('modal-is-open');
        },
      });
    },
    isLastPledge (pledge) {
      return pledge === this.pledges.slice(-1)[0];
    },
  },
};
</script>

<style lang="scss" scoped>

.pledge-info-card {
    width: 24rem;
}

.flip-card {
    background-color: transparent;
    perspective: 1000px;

    .table th,
    .table td {
        padding: 0.25rem 0;
    }
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card.flipped .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front {
    position: relative;
    backface-visibility: hidden;
}

.flip-card-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.flip-card-back {
    transform: rotateY(180deg);
}
</style>
