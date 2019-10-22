<template>
  <header class="app-header">
    <!-- <SidebarToggles /> -->
    <!-- <PageHeader v-if="$route.meta.title">
      {{ $route.meta.title }}
    </PageHeader> -->
    <slot />
    <!-- <ProgramHeader :program="program" /> -->
  </header>
</template>

<script>
// import PageHeader from '@/components/PageHeader'
// import ProgramHeader from '@/components/ProgramHeader'
import SidebarToggles from '@/components/SidebarToggles'

export default {
  name: 'AppHeader',
  status: 'prototype',
  release: '1.0.0',
  components: {
    // PageHeader,
    // ProgramHeader,
    SidebarToggles,
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
