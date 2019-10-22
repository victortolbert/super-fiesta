<template>
  <div :class="['pledge-info-card flip-card', {flipped: flipped}]">
    {{ pledgeSponsor.first_name }}
  </div>
</template>

<script>
import PledgeReminderModal from '@/components/PledgeReminderModal'

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
  data() {
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
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    showAllStatuses() {
      const statuses = this.pledges.map((pledge) => {
        return pledge.pledge_status_id
      })
      const statusSet = new Set(statuses)
      return statusSet.size > 1
    },
    pledgeSponsor() {
      console.log(this.$store.state.pledge.pledges[0][0][0].pledge_sponsor)
      return this.$store.state.pledge.pledges[0][0][0].pledge_sponsor
    },
    date() {
      const date = new Date(this.pledges[0].ts_entered)
      return this.lang.months[date.getMonth()] + ' ' + date.getDate()
    },
    pledgeTotal() {
      const totals = this.pledges.reduce(
        (totals, pledge) => {
          if (pledge.pledge_type_id === 1) {
            totals.low += pledge.amount * this.program.unit_range_low
            totals.high += pledge.amount * this.program.unit_range_high
          } else {
            totals.low += pledge.amount
            totals.high += pledge.amount
          }
          return totals
        },
        { low: 0, high: 0 }
      )
      let totalsString = totals.low
      if (totals.low !== totals.high) {
        totalsString += ' to $' + totals.high
      }
      return totalsString
    },
    isMissingPayment() {
      const unPaidPledge = this.pledges.find((pledge) => {
        return pledge.hasPendingPayment === false && pledge.payment_id === null
      })
      return unPaidPledge !== undefined
    },
  },
  methods: {
    remind(pledgeId) {
      this.showReminderEmailModal(pledgeId)
      this.gaEvent('Parent Dashboard', 'Pledges', 'Remind')
    },
    edit() {
      this.gaEvent('Parent Dashboard', 'Pledges', 'Edit')
    },
    viewComment() {
      this.flip()
      this.gaEvent('Parent Dashboard', 'Pledges', 'View Comments')
    },
    flip() {
      this.flipped = !this.flipped
    },
    showReminderEmailModal(pledgeId) {
      document.querySelector('body').classList.add('modal-is-open')

      this.$modal.open({
        parent: this,
        component: PledgeReminderModal,
        props: {
          pledgeId,
        },
        hasModalCard: true,
        canCancel: ['escape', 'outside'],
        onCancel: () => {
          document.querySelector('body').classList.remove('modal-is-open')
        },
      })
    },
    isLastPledge(pledge) {
      return pledge === this.pledges.slice(-1)[0]
    },
  },
}
</script>

<style lang="scss" scoped>
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
