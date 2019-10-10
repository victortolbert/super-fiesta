<template>
  <div id="edit-profile-page">
    <app-header />
    <app-nav />
    <main class="flex-1">
      Edit Profile
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/header'
import AppFooter from '@/components/layout/footer'

export default {
  name: 'EasyEmailerPage',
  props: {
    programs: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
