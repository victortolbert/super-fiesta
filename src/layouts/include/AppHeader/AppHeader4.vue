<template>
  <div>
    <header class="app-header text-blue-100 shadow">
      <!-- max-w-6xl py-8 px-8 lg:px-0 -->
      <div class="">
        <nav class="relative flex flex-wrap items-center justify-between max-w-6xl mx-auto p-8">
          <h1 class="text-2xl">
            <slot />
          </h1>
          <div class="">
            <button v-show="!isOpen" ref="openButton" @click="open" type="button" class="block text-blue-100 focus:outline-none focus:text-white" aria-label="Menu">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z" />
                <path d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z" />
                <path d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z" />
              </svg>
            </button>
            <button v-show="isOpen" ref="closeButton" @click="close" type="button" class="text-blue-100 focus:outline-none focus:text-white" aria-label="Close">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071Z" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <!-- Menu -->
      <div class="">
        <!-- Off-canvas menu -->
        <transition
          enter-class="translate-x-full"
          enter-active-class="ease-out transition-slow"
          enter-to-class="translate-x-0"
          leave-class="translate-x-0"
          leave-active-class="ease-in transition-medium"
          leave-to-class="translate-x-full"
          appear
        >
          <!-- z-10 fixed inset-y-0 right-0 max-w-xs w-full bg-white transition-transform overflow-hidden shadow-lg" style="top: 4rem; margin-top:-2px" -->
          <div
            v-show="isOpen"
            style="top: 6rem;"
            class="z-10 fixed inset-y-0 right-0 max-w-xs mt-1 w-full bg-white transition-transform overflow-y-auto shadow-lg"
          >
            <div class="relative z-10 bg-white">
              <div class="">
                <a href="#" class="block m-0 p-4 font-bold border-t-8 bg-gray-300 text-blue-500 border-blue-600">Thomas Jefferson Elementary Fun Run</a>
                <router-link
                  v-for="(navItem, i) in navItems"
                  :key="i"
                  class="block m-0 p-4 font-medium text-gray-500 border-b border-gray-300 hover:text-blue-700 hover:bg-gray-100"
                  :to="navItem.path"
                  active-class=""
                  exact
                  v-text="navItem.name"
                />
                <a href="#" class="block m-0 p-4 font-bold border-t-8 bg-gray-300 text-blue-500 border-blue-600">Middle School</a>
              </div>
            </div>
            <div class="relative bg-white">
              <div class="px-4 pt-4 pb-6">
                <a href="#" class="block font-medium text-gray-900 hover:text-gray-700">Log in</a>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    program: {
      type: Object,
      default: () => ({
        event_name: 'Default Program Event Name',
      }),
    },
  },
  data: function () {
    return {
      isOpen: false,
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
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (isOpen) {
          document.body.style.setProperty('overflow', 'hidden')
        } else {
          document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  methods: {
    open() {
      this.isOpen = true
      this.$nextTick(() => {
        this.$refs.closeButton.focus()
      })
    },
    close() {
      this.isOpen = false
      this.$nextTick(() => {
        this.$refs.openButton.focus()
      })
    },
  },
}
</script>

<style>
.app-header {
  background-image:
    linear-gradient(rgba(2, 127, 215, 0.9), rgba(2, 8, 138, 0.8)),
    url('/assets/img/header_bg.jpg')
}
</style>
