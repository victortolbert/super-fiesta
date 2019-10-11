<template>
  <router-view :programs="$store.state.user.programs" />
</template>

<script>
import authUser from '../public/authUser.json'

export default {
  name: 'App',
  created () {
    this.$store.dispatch('initStore', authUser)
    // fetch('/users.json')
    //   .then(response => response.json())
    //   .then(users => (this.users = users))
  }
}
</script>
