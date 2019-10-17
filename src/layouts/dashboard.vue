<template>
  <div id="dashboard-layout">
    <div
      v-for="program in programs"
      v-bind:key="program.id"
      v-bind:class="program.microsite.microsite_color_theme.theme_name"
      class="flex flex-col min-h-screen"
    >
      <AppHeader
        v-bind:program="program"
        v-bind:index="program.id"
        class="bg-blue-700"
      >
        <div class="w-full max-w-6xl mx-auto">
          <h1 class="text-2xl font-semibold">
            {{ program.event_name }}
          </h1>
        </div>
      </AppHeader>

      <main class="flex-1 w-full max-w-6xl mx-auto">
        participant cards<br>
        pledge and share buttons<br>
        program overview<br>
        school goal and stats<br>
        business leaderboard<br>
        <!-- <parent-dashboard-layout :program="program" /> -->
        <slot />
      </main>

      <AppFooter>
        <slot name="footer">
          Footer
        </slot>
      </AppFooter>
      <!-- Portal Outlets (modals, shortcuts) -->
    </div>
  </div>
</template>

<script>
import AppHeader from '@/layouts/include/header'
import AppFooter from '@/layouts/include/footer'

export default {
  name: 'DashboardLayout',
  components: { AppFooter, AppHeader },
  props: {
    programs: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>
