<template>
  <div id="app-container" class="flex flex-col min-h-screen">
    <app-header class="p-8 bg-gray-200">
      <slot name="header">
          Page Header
        </slot>
    </app-header>

    <main class="flex-1">
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
