<template>
  <fetch-data url="/authUser.json">
    <dashboard-layout
      :programs="$store.state.user.programs"
      slot-scope="{ programs: programs }"
    >
      {{ programs }}
    </dashboard-layout>
    </fetch-data>
</template>

<script>
import DashboardLayout from '@/layouts/dashboard.vue'
import FetchData from '@/components/fetch-data.vue'

export default {
  name: 'ParentDashboardPage',
  components: { DashboardLayout, FetchData }
}
</script>
