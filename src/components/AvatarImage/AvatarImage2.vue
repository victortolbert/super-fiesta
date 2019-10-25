<template>
  <img
    :alt="alt"
    :src="src"
    class="w-16 h-16 shadow border rounded-full"
    @click="emit"
  >
</template>

<script>
export default {
  name: 'AvatarImage',
  status: 'prototype',
  release: '1.0.0',
  props: {
    alt: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '/v3-assets/dashboard/images/dashboard-avatar.svg',
    },
    shouldEmit: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emit () {
      if (this.shouldEmit) {
        this.$emit('open');
      }
    },
  },
};
</script>
