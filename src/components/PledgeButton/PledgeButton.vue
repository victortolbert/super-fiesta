<template>
  <a
    :href="`/v3/tkdashboard/?redirect=auth/login/${fr_code}/view-participant/pledge`"
    class="pledge-button button is-medium is-primary is-rounded is-fullwidth mb-4"
  >
    Enter Pledge
  </a>
</template>

<script>
export default {
  name: 'PledgeButton',
  status: 'prototype',
  release: '1.0.0',
  props: {
    participants: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    fr_code() {
      return this.participants.find(participant => participant.deleted !== 1).fr_code
    },
  },
}
</script>

<style scoped>

</style>
