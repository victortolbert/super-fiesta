<template>
<div>
  <fetch-data url="/authUser.json">
    <dashboard-layout
      :programs="$store.state.user.programs"
      slot-scope="{ programs: programs }"
    >
      {{ programs }}
        <base-button ref="button">Button</base-button>
    </dashboard-layout>
    </fetch-data>
</div>

</template>

<script>
import DashboardLayout from '@/layouts/dashboard.vue'
import BaseButton from '@/components/shared/base/BaseButton'
import FetchData from '@/components/fetch-data.vue'

export default {
  name: 'ParentDashboardPage',
  components: { BaseButton, DashboardLayout, FetchData },
  mounted () {
    console.log(this)
    console.log(this.$el.getBoundingClientRect())
    this.$el.classList.add('bg-blue-800')
  }
}
</script>
