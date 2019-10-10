<template>
  <nav id="app-nav">
    <router-link to="/">Parent Dashboard</router-link>
    <router-link to="/teacher">Teacher Dashboard</router-link>
    <router-link to="/easy-emailer">Easy Emailer</router-link>
    <router-link to="/edit-participant">Edit Participant</router-link>
    <router-link to="/edit-profile">Edit Profile</router-link>
    <router-link to="/user/foo">/user/foo</router-link>
    <router-link to="/user/foo/profile">/user/foo/profile</router-link>
    <router-link to="/user/foo/posts">/user/foo/posts</router-link>
  </nav>
</template>

<script>
export default {
  name: 'AppNav'
}
</script>
