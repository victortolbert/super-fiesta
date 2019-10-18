<template>
  <div>
    <AppNavbar />
    <router-link
      v-for="(navItem, i) in navItems"
      v-bind:key="i"
      class=""
      v-bind:to="navItem.path"
      active-class=""
      exact
      v-text="navItem.name"
    />
    <router-view v-bind:programs="$store.state.user.programs" />
    <Quickview class="fixed z-40">
      Is active?
    </Quickview>
  </div>
</template>

<script>
import authUser from '../public/authUser.json'
import AppNavbar from '@/layouts/include/AppNavbar'
import Quickview from '@/components/shared/patterns/Quickview'

export default {
  name: 'App',
  components: {
    AppNavbar,
    Quickview,
  },
  data: () => ({
    isOpen: true,
    navItems: [
      {
        path: '/',
        name: 'Home',
      },
      {
        path: '/dashboard',
        name: 'Parent Dashboard',
      },
      {
        path: '/dashboard/public',
        name: 'Public Dashboard',
      },
      {
        path: '/dashboard/teacher',
        name: 'Teacher Dashboard',
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
  created () {
    this.$store.dispatch('initStore', authUser)
    // fetch('/users.json')
    //   .then(response => response.json())
    //   .then(users => (this.users = users))
  },
}
</script>
