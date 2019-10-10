<template>
  <div id="dashboard">
    <!-- <pre class="text-2xs">{{ $store.state.user }}</pre> -->
    <!-- <pre class="text-2xs">{{ $store.state.programs }}</pre> -->
    <pre class="text-2xs">{{ programs }}</pre>

  </div>
</template>

<script>
import users from '@/api/users.json'

export default {
  name: 'Dashboard',
  created () {
    this.$store.dispatch('initStore', users[0])
  },
  computed: {
    programs () {
      return this.$store.state.user.programs
    }
  }
}
</script>
