<template>
  <div>
      <!-- Desktop -->
      <header
        id="app-header"
        class="hidden lg:flex bg-blue text-white bg-cover bg-center items-center"
      >
        <toggle-nav v-model="menuOpened" />
        <toggle-notifications />
        <slot />
      </header>

      <!-- Mobile -->
      <header
        id="app-header"
        class="flex flex-col lg:hidden bg-blue text-white bg-cover bg-center items-start"
      >
        <div class="max-w-4xl mx-auto flex items-center justify-between w-full">
          <!-- TODO Refactor to use BaseToggle -->
          <slot />
          <toggle-nav v-model="menuOpened" />
          <toggle-notifications />
        </div>
        <event-info
          :funrun-date="new Date(program.fun_run)"
          class="lg:hidden"
        />
    </header>
    <app-nav />
  </div>

</template>

<script>
import AppNav from '@/components/layout/nav'

// import HeaderDefault from '@/components/patterns/header-default'
// import HeaderProgram from '@/components/patterns/header-program'
import ToggleNav from '@/components/patterns/toggle-nav'
import ToggleNotifications from '@/components/patterns/toggle-notifications'
import EventInfo from '@/components/patterns/event-info'

export default {
  name: 'AppHeader',
  status: 'prototype',
  release: '1.0.0',
  components: {
    AppNav,
    ToggleNav,
    ToggleNotifications,
    EventInfo
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
