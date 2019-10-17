<template>
  <div class="flex -mx-2 mb-4">
    <div class="mx-2">
      <span>
        <!-- {{ $store.state.lang.event_info.event_date }} -->
      </span>
      <b>{{ eventDate }}</b>
    </div>
    <div class="mx-2">
      <b>{{ daysRemaining }}</b>
      <!-- {{ $store.state.lang.event_info.days_remaining }} -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventInfo',
  status: 'prototype',
  release: '1.0.0',
  props: {
    funrunDate: {
      type: Date,
      default: null,
    },
  },
  computed: {
    eventDate () {
      return (this.funrunDate.getMonth() + 1) + '/' + this.funrunDate.getDate() + '/' + this.funrunDate.getFullYear()
    },
    daysRemaining () {
      return Math.floor((this.funrunDate - Date.now()) / (1000 * 60 * 60 * 24))
    },
  },
}
</script>
