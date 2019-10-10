<template>
  <div id="parent-dashboard-page">
    <app-header />
    <app-nav />
    <main class="flex-1">
      TEACHER
      <pre class="text-2xs">
        {{ programs[0].name }}
      </pre>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/header'
import AppFooter from '@/components/layout/footer'

export default {
  name: 'TeacherDashboardPage',
  props: {
    programs: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
