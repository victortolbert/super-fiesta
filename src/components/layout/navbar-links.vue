<template>
  <div>

  </div>
</template>

<script>
export default {
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
