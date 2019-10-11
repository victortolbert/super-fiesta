<template>
  <header id="app-header">
    <div class="flex items-center justify-between">
      <slot />
      <app-nav />
    </div>
  </header>
</template>

<script>
import AppNav from '@/components/layout/nav'

export default {
  name: 'AppHeader',
  components: { AppNav }
}
</script>
