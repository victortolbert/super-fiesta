<template>
  <div id="app-container" class="flex flex-col">
    <!-- page-header -->
    <header>Default Header (Easy Emailer, Edit Profile, Edit Participant)</header>
    <main class="flex-1">
      <router-view :programs="$store.state.user.programs" />
    </main>
    <footer>Default Footer</footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
