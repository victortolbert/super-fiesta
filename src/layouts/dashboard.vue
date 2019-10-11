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
        :index="program.id" class="p-8 bg-blue-800">
        <h1 class="text-2xl font-semibold">
          {{ program.event_name }}
        </h1>
      </app-header>
      <main class="flex-1 p-8">
        <!-- <ParentDashboardLayout :program="program" /> -->
      </main>
      <app-footer>
        Footer
      </app-footer>
    </div>
  </div>
</template>
<script>
import AppHeader from '@/components/layout/header'
import AppFooter from '@/components/layout/footer'

export default {
  name: 'AppDashboardLayout',
  props: ['programs'],
  components: { AppFooter, AppHeader }
}
</script>
