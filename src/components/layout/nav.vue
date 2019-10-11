<template>
  <nav id="app-nav" class="flex items-center -mx-2">
    <router-link
      v-for="(navItem, i) in navItems"
      :key="i"
      class="inline-block mx-2 py-1 px-4 border border-gray-400 rounded shadow bg-white hover:bg-blue-200 hover:text-black"
      :to="navItem.path"
      v-text="navItem.name"
      active-class="bg-blue-400 text-white"
      exact
    />
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
  data () {
    return {
      navItems: [
        {
          path: '/',
          name: 'Parent Dashboard'
        },
        {
          path: '/easy-emailer',
          name: 'Easy Emailer'
        },
        {
          path: '/edit-participant',
          name: 'Edit Participant'
        },
        {
          path: '/edit-profile',
          name: 'Edit Profile'
        }
      ]
    }
  }
}
</script>
