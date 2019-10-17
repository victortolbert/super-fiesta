<template>
  <div />
</template>

<script>
export default {
  name: 'AppNavbarLinks',
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
