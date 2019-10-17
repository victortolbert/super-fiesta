<template>
  <div class="text-white">
    <!-- Desktop -->
    <header class="hidden lg:flex items-center justify-between h-32 p-4 bg-cover bg-center">
      <slot />
    </header>

    <!-- Mobile -->
    <header class="lg:hidden flex flex-col items-start bg-cover bg-center">
      <slot />
    </header>

    <AppNavbar
      v-bind:program="program"
      class="hidden absolute h-full w-64 bg-white shadow-lg"
      style="top: 0; right: 0"
    />
  </div>
</template>

<script>
import AppNavbar from '@/layouts/include/AppNavbar'

export default {
  name: 'AppHeader',
  status: 'prototype',
  release: '1.0.0',
  components: {
    AppNavbar,
  },
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
}
</script>
