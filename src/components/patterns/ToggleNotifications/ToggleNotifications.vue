<template>
  <a class="relative inline-block">
    <FontAwesomeLayers class="">
      <FontAwesomeIcon
        icon="bell"
        class="text-white"
      />
      <FontAwesomeLayersText
        class="bg-red-700 text-white rounded-full h-6 w-6 text-base font-bold"
        transform="down-4 right-8 shrink-2"
        v-bind:value="count"
      />
    </FontAwesomeLayers>
  </a>
</template>

<script>
export default {
  name: 'ToggleNotifications',
  status: 'prototype',
  release: '1.0.0',
  computed: {
    count () {
      return 42
    },
  },
}
</script>
