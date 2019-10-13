<template>
<div>
  <base-button>Button</base-button>

  <fetch-data url="/authUser.json">
    <dashboard-layout
      :programs="$store.state.user.programs"
      slot-scope="{ programs: programs }"
    >
      {{ programs }}
    </dashboard-layout>
    </fetch-data>
</div>

</template>

<script>
import BaseButton from '@/components/shared/base/BaseButton'
import DashboardLayout from '@/layouts/dashboard.vue'
import FetchData from '@/components/fetch-data.vue'

export default {
  name: 'ParentDashboardPage',
  components: { BaseButton, DashboardLayout, FetchData }
}
</script>
