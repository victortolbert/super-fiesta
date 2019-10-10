<template>
  <dashboard-layout>
    <router-view />
  </dashboard-layout>
</template>

<script>
import DashboardLayout from '@/layouts/dashboard'

export default {
  name: 'Dash',
  components: {
    DashboardLayout
  }
}
</script>
