<template>
  <div class="">
    <nav>
      <router-link
        v-for="(navItem, i) in navItems"
        :key="i"
        class="block w-full py-4 px-8 text-black hover:bg-blue-100"
        :to="navItem.path"
        v-text="navItem.name"
        active-class=""
        exact
      />
      <!-- Burger Toggle -->
      <div class="sm:hidden">
        <button
          type="button"
          class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          @click="isOpen = !isOpen"
        >
          <font-awesome-icon
              v-if="isOpen"
              :icon="['fal', 'times']"
              class="text-white"
          />
          <font-awesome-icon
              v-if="!isOpen"
              :icon="['far', 'bars']"
              class="text-white w-5"
          />
        </button>
      </div>
    </nav>
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="sm:block"
    >
      <div class="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <!-- <AppNavbarLinks /> -->
        <!-- <LocaleDropdown class="hidden sm:block sm:ml-2" /> -->
        <!-- <AccountDropdown class="hidden sm:block sm:ml-2" /> -->
        <!-- <ProfileDropdown class="hidden sm:block sm:ml-6" /> -->
      </div>
      <div class="px-4 py-5 border-t border-gray-800 sm:hidden">
        <div class="flex items-center">
          <!-- <img
            class="h-8 w-8 border-2 border-gray-600 rounded-full object-cover"
            :src="user.photo_url"
            alt="Your avatar"
          >
          <span class="ml-3 text-white font-semibold">{{ user.name }}</span> -->
        </div>
        <div class="mt-4">
          <!-- <RouterLink
            :to="{
              name: 'settings.profile'
            }"
            class="block text-gray-400 hover:text-white"
          >
            {{ $t('settings') }}
          </RouterLink>
          <RouterLink
            :to="{
              name: 'support'
            }"
            class="mt-2 block text-gray-400 hover:text-white"
          >
            {{ $t('support') }}
          </RouterLink> -->
          <a
            href="#"
            class="mt-2 block text-gray-400 hover:text-white"
            @click.prevent="logout"
          >Sign out</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'AppNavbar',
  data: () => ({
    isOpen: true,
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
  })
  // computed: {
  //   ...mapGetters({
  //     user: 'auth/user'
  //   })
  // },
  // methods: {
  //   async logout () {
  //     // Log out the user.
  //     await this.$store.dispatch('auth/logout')

  //     // Redirect to login.
  //     this.$router.push({ name: 'login' })
  //   }
  // }
}
</script>
