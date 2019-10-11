<template>
  <div id="app-container" class="flex flex-col">
    <app-header>
      <h1>Page Header</h1>
    </app-header>

    <main class="flex-1">
      <slot />
    </main>

    <app-footer>
      Default Footer
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
