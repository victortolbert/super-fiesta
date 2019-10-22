<template>
  <div class="text-white">
    <!-- Desktop -->
    <header class="app-header hidden lg:flex items-center justify-between h-32 p-4 bg-cover bg-center">
      <slot />
    </header>

    <!-- Mobile -->
    <header class="app-header lg:hidden flex flex-col items-start bg-cover bg-center">
      <slot />
    </header>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  status: 'prototype',
  release: '1.0.0',
  components: { },
  props: {
    program: {
      type: Object,
      default: null,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    menuOpened: false,
  }),
  computed: {
    programs() {
      return this.$store.state.user.programs
    },
  },
}
</script>

<style>
.app-header {
  background-image:
    linear-gradient(rgba(2, 127, 215, 0.9), rgba(2, 8, 138, 0.8)),
    url('/assets/img/header_bg.jpg')
}

</style>
