<template>
  <div class="flex max-w-4xl mx-auto justify-between">
    <div>
      <span>{{ $t('event_info.event_date') }}</span> <b>{{ eventDate }}</b>
    </div>
    <div>
      <b>{{ daysRemaining }}</b> {{ $t('event_info.days_remaining') }}
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
      default: () => (new Date('2020-01-01')),
    },
  },
  computed: {
    eventDate () {
      return (this.funrunDate.getMonth() + 1) + '/' + this.funrunDate.getDate() + '/' + this.funrunDate.getFullYear();
    },
    daysRemaining () {
      return Math.floor((this.funrunDate - Date.now()) / (1000 * 60 * 60 * 24));
    },
  },
};
</script>
