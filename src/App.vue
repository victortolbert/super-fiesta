<template>
    <div id="app">
      <RouterView :programs="$store.state.user.programs" />
      <app-promo />
    </div>
</template>

<script>
import users from '@/api/users.json'
import AppPromo from '@/components/layout/promo'

export default {
  name: 'App',
  components: { AppPromo },
  created () {
    this.$store.dispatch('initStore', users[0])
  }
}
</script>
