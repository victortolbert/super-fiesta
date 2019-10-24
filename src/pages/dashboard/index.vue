<template>
  <div>
    <div
      v-for="(program, index) in $store.state.program.programs"
      :key="index"
      :class="program.microsite.microsite_color_theme.theme_name"
      class="flex flex-col min-h-screen"
    >
      <AppHeader class="mb-8">
        <a :name="program.event_name" />
        {{ program.event_name }}
      </AppHeader>
      <main class="flex-1 w-full max-w-6xl mx-auto">
        <ParentDashboardLayout
          :program="program"
        />
      </main>
      <AppFooter />
    </div>
    <!-- slot-scope="{ programs: programs }" -->
    <!-- <pre>{{ programs }}</pre> -->
    <!-- <DashboardLayout :programs="$store.state.program.programs" /> -->
  </div>
</template>

<script>
// import DashboardLayout from '@/layouts/dashboard2.vue'
import AppHeader from '@/layouts/include/AppHeader/AppHeader4.vue'
import AppFooter from '@/layouts/include/AppFooter'
import ParentDashboardLayout from '@/components/ParentDashboardLayout'

// import AppButton from '@/components/AppButton'
// import BaseButton from '@/components/shared/base/BaseButton'

export default {
  name: 'ParentDashboardPage',
  components: {
    // AppButton,
    AppHeader,
    AppFooter,
    ParentDashboardLayout,
    // BaseButton,
    // DashboardLayout,
  },
  mounted () {
    // console.log(this)
    // console.log(this.$el.getBoundingClientRect())
    // this.$el.classList.add('bg-blue-800')
  },
}
</script>
