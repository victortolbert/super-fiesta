<template>
  <div
    id="default-layout"
    class="flex flex-col min-h-screen"
  >
    <AppHeader class="bg-blue-700">
      <div class="w-full max-w-6xl mx-auto">
        <slot name="header">
          Page Header
        </slot>
      </div>
    </AppHeader>

    <main class="flex-1 w-full max-w-6xl mx-auto">
      <!-- <ParentDashboardLayout :program="program" /> -->
      <slot />
    </main>

    <AppFooter>
      <slot name="footer">
        Default Footer
      </slot>
    </AppFooter>
  </div>
</template>

<script>
import AppHeader from '@/layouts/include/AppHeader'
import AppFooter from '@/layouts/include/AppFooter'

export default {
  name: 'DefaultLayout',
  components: { AppHeader, AppFooter },
}
</script>
