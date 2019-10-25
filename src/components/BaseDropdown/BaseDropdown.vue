<template>
  <div class="bg-gray-200 p-8 text-right max-w-xs mx-auto" style="min-height: 480px;">
    <div id="dropdown" class="relative inline-block">
      <button @click="toggle" class="inline-flex items-center pl-6 pr-2 py-2 font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
        Account
        <svg class="ml-2 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" />
        </svg>
      </button>
      <transition
        enter-class="opacity-0 scale-90"
        enter-active-class="ease-out transition-fastest"
        enter-to-class="opacity-100 scale-100"
        leave-class="opacity-100 scale-100"
        leave-active-class="ease-in transition-fastest"
        leave-to-class="opacity-0 scale-90"
      >
        <!-- Replace "right-0 origin-top-right" with "left-0 origin-top-left" to left-align the dropdown -->
        <div v-if="isOpen" class="mt-2 absolute right-0 origin-top-right">
          <div class="w-64 text-left bg-white rounded-lg shadow-lg">
            <div class="flex items-center px-6 py-4">
              <img class="h-10 w-10 rounded-full flex-no-shrink" src="https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=200&h=200&q=80" alt="">
              <div class="ml-4">
                <p class="font-semibold text-gray-900 leading-none">
                  Margot Foster
                </p>
                <p><a href="#" class="text-sm text-gray-600 leading-none hover:underline">View Profile</a></p>
              </div>
            </div>
            <div class="border-t-2 border-gray-200 py-1">
              <a href="#" class="block px-6 py-3 leading-tight hover:bg-gray-200">Settings and Privacy</a>
              <a href="#" class="block px-6 py-3 leading-tight hover:bg-gray-200">Language</a>
            </div>
            <div class="border-t-2 border-gray-200 py-1">
              <a href="#" class="block px-6 py-3 leading-tight hover:bg-gray-200">Advertise</a>
              <a href="#" class="block px-6 py-3 leading-tight hover:bg-gray-200">Analytics</a>
            </div>
            <form class="border-t-2 border-gray-200 py-1" action="#" method="POST">
              <button class="block w-full px-6 py-3 text-left leading-tight hover:bg-gray-200">
                Sign out
              </button>
            </form>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseDropdown',
  data: () => ({
    isOpen: true,
  }),
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
