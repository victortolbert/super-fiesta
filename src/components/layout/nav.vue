<template>
  <nav id="app-nav" class="flex items-center -mx-2">
    <router-link class="inline-block mx-2 py-1 px-4 border border-black" to="/">Parent Dashboard</router-link>
    <router-link class="inline-block mx-2 py-1 px-4 border border-black" to="/easy-emailer">Easy Emailer</router-link>
    <router-link class="inline-block mx-2 py-1 px-4 border border-black" to="/edit-participant">Edit Participant</router-link>
    <router-link class="inline-block mx-2 py-1 px-4 border border-black" to="/edit-profile">Edit Profile</router-link>
  </nav>
</template>

<script>
export default {
  name: 'AppNav'
}
</script>
