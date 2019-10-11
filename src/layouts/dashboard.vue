<template>
  <div id="dashboard-layout">
    <div
      v-for="program in programs"
      :key="program.id"
      class="flex flex-col min-h-screen"
      :class="program.microsite.microsite_color_theme.theme_name"
    >
      <app-header
        :program="program"
        :index="program.id" class="bg-blue-700"
      >
        <div class="max-w-6xl w-full mx-auto border">
          <h1 class="text-2xl font-semibold">
            {{ program.event_name }}
          </h1>
        </div>

      </app-header>

      <main class="flex-1 max-w-6xl w-full mx-auto border">
        participant cards<br>
        pledge and share buttons<br>
        program overview<br>
        school goal and stats<br>
        business leaderboard<br>
        <!-- <parent-dashboard-layout :program="program" /> -->
        <slot />
      </main>

      <app-footer>
        <slot name="footer">
          Footer
        </slot>
      </app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/header'
import AppFooter from '@/components/layout/footer'

export default {
  name: 'DashboardLayout',
  props: ['programs'],
  components: { AppFooter, AppHeader },
}
</script>
