<template>
  <header id="app-header">
    <app-nav />
    <slot />
  </header>
</template>

<script>
import AppNav from '@/components/layout/nav'

export default {
  name: 'AppHeader',
  components: { AppNav }
}
</script>
