<template>
  <div id="dashboard-layout">
    <div
      v-for="program in programs"
      :key="program.id"
      :class="program.microsite.microsite_color_theme.theme_name"
      class="flex flex-col min-h-screen"
    >
      <AppHeader
        :program="program"
        :index="program.id"
      >
        <div class="w-full">
          <h1 class="text-2xl font-semibold">
            {{ program.event_name }}
          </h1>
        </div>
      </AppHeader>

      <main class="flex-1 w-full max-w-6xl mx-auto">
        <ParentDashboardLayout
          :program="program"
        />
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
import AppHeader from '@/layouts/include/AppHeader'
import AppFooter from '@/layouts/include/AppFooter'
import ParentDashboardLayout from '@/components/ParentDashboardLayout'

export default {
  name: 'DashboardLayout',
  components: { AppFooter, AppHeader, ParentDashboardLayout },
  props: {
    programs: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>
