<template>
  <a
    :href="`/v3/tkdashboard/?redirect=auth/login/${fr_code}/view-participant/pledge`"
    class="w-64 rounded-full bg-green-600 hover:bg-green-500 hover:border-green-500 focus:outline-none focus:shadow-outline active:bg-green-700 text-center text-white py-1 text-xl px-10 font-semibold shadow-md"
  >
    <slot>Enter Pledge</slot>
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
      return 'FFFFFFF'
    },
  },
}
</script>

<style scoped>

</style>
