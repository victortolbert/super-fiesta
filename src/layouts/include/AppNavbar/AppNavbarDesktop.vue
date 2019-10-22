<template>
  <div class="hidden md:block md:ml-10 md:flex md:items-baseline md:justify-between md:bg-transparent">
    <div class="lg:absolute inset-0 flex items-center justify-center">
      <a href="#" class="text-sm font-medium text-blue-100 hover:text-blue-700">Products</a>
      <a href="#" class="ml-10 text-sm font-medium text-blue-100 hover:text-blue-700">Marketplace</a>
      <a href="#" class="ml-10 text-sm font-medium text-blue-100 hover:text-blue-700">Partners</a>
      <a href="#" class="ml-10 text-sm font-medium text-blue-100 hover:text-blue-700">About</a>

      <router-link
        v-for="(navItem, i) in navItems"
        :key="i"
        class="ml-10 text-sm font-medium text-blue-100 hover:text-blue-700"
        :to="navItem.path"
        active-class=""
        exact
        v-text="navItem.name"
      />

    </div>
    <div class="ml-10 relative flex items-baseline">
      <a href="#" class="text-sm font-medium text-blue-100 hover:text-blue-700">Log in</a>
      <a href="#" class="ml-8 px-6 py-2 font-bold text-center text-sm rounded-full bg-green-500 text-green-100 hover:bg-gray-400 focus:outline-none focus:bg-gray-400">Pledge</a>
    </div>
  </div>
</template>
