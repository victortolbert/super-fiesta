<template>
  <div>
    <FetchData url="/authUser.json">
      <DashboardLayout
        slot-scope="{ programs: programs }"
        v-bind:programs="$store.state.user.programs"
      >
        {{ programs }}
        <BaseButton ref="button">
          Button
        </BaseButton>
        <AppButton ref="button">
          Button
        </AppButton>
      </DashboardLayout>
    </FetchData>
  </div>
</template>

<script>
import DashboardLayout from '@/layouts/dashboard.vue'
import AppButton from '@/components/AppButton'
import BaseButton from '@/components/shared/base/BaseButton'
import FetchData from '@/components/fetch-data.vue'

export default {
  name: 'ParentDashboardPage',
  components: { AppButton, BaseButton, DashboardLayout, FetchData },
  mounted () {
    // console.log(this)
    // console.log(this.$el.getBoundingClientRect())
    // this.$el.classList.add('bg-blue-800')
  },
}
</script>
