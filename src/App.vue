<template>
  <div>
    <router-link
      v-for="(navItem, i) in navItems"
      :key="i"
      class=""
      :to="navItem.path"
      v-text="navItem.name"
      active-class=""
      exact
    />
    <router-view :programs="$store.state.user.programs" />
    <quickview class="fixed z-40">
      Is active?
    </quickview>
  </div>
</template>

<script>
import authUser from '../public/authUser.json'
import Quickview from '@/components/shared/patterns/Quickview'

export default {
  name: 'App',
  components: {
    Quickview,
  },
  created () {
    this.$store.dispatch('initStore', authUser)
    // fetch('/users.json')
    //   .then(response => response.json())
    //   .then(users => (this.users = users))
  },
  data: () => ({
    isOpen: true,
    navItems: [
      {
        path: '/',
        name: 'Parent Dashboard',
      },
      {
        path: '/easy-emailer',
        name: 'Easy Emailer',
      },
      {
        path: '/edit-participant',
        name: 'Edit Participant',
      },
      {
        path: '/edit-profile',
        name: 'Edit Profile',
      },
    ],
  }),
}
</script>
