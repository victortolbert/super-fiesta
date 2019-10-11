<template>
  <div id="default-layout" class="flex flex-col min-h-screen">
      <app-header class="bg-blue-700">
        <div class="max-w-6xl w-full mx-auto border">
          <slot name="header">
            Page Header
          </slot>
        </div>
      </app-header>

      <main class="flex-1 max-w-6xl w-full mx-auto border">
        <!-- <ParentDashboardLayout :program="program" /> -->
        <slot />
      </main>

      <app-footer>
        <slot name="footer">
        Default Footer
      </slot>
      </app-footer>
    </div>
</template>

<script>
import AppHeader from '@/components/layout/header'
import AppFooter from '@/components/layout/footer'

export default {
  name: 'DefaultLayout',
  components: { AppHeader, AppFooter }
}
</script>
