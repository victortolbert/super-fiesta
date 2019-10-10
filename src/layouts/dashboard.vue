<template>
  <div id="app-container" class="flex flex-col">
    <!-- program-header -->
    <header>Dashboard Header</header>
    <main class="flex-1">
      <router-view :programs="$store.state.user.programs" />
    </main>
    <footer>Dashboar Footer</footer>
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout'
}
</script>
