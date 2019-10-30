<template>
  <img
    :alt="alt"
    :src="src"
    class="w-16 h-16 shadow border rounded-full"
  >
</template>

<script>
export default {
  name: 'BaseAvatar',
  status: 'prototype',
  release: '1.0.0',
  props: {
    alt: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: 'avatar.svg',
    },
  },
}
</script>
