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

    <app-navbar
      class="hidden absolute h-full w-64 h-full bg-white shadow-lg" :program="program"
      style="top: 0; right: 0"
    />
  </div>
</template>

<script>
import AppNavbar from '@/components/layout/navbar'

export default {
  name: 'AppHeader',
  status: 'prototype',
  release: '1.0.0',
  components: {
    AppNavbar
  },
  props: {
    program: {
      type: Object,
      default: null
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      menuOpened: false
    }
  }
}
</script>
