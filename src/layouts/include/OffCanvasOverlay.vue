<template>
  <div class="md:hidden">
    <!-- Off-canvas menu background overlay -->
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
      appear
    >
      <!-- Background Overlay -->
      <div v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
        <div @click="close" class="absolute inset-0 bg-black opacity-50" tabindex="-1" />
      </div>
    </transition>

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
      <div v-show="isOpen" class="z-10 fixed inset-y-0 right-0 max-w-xs w-full bg-white transition-transform overflow-y-auto">
        <div class="relative z-10 bg-white">
          <div :class="isOpen ? 'block' : 'hidden'" class="absolute top-0 right-0 pt-6 px-4">
            <button ref="closeButton" @click="close" type="button" class="text-blue-100 focus:outline-none focus:text-white" aria-label="Close">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071Z" />
              </svg>
            </button>
          </div>
          <div class="pb-6">
            <!-- <div class="p-4 bg-blue-900">
                  <svg class="h-12 mr-4" viewBox="0 0 227 269" fill="none" aria-hidden="true">
                    <title>Titan Logo</title>
                    <rect width="71.0523" height="15.9868" transform="matrix(-1 0 0 1 227 221.594)" fill="white" />
                    <rect x="105.323" width="13.7664" height="43.9636" fill="white" />
                    <rect x="105.323" y="212.268" width="13.7664" height="55.9537" fill="white" />
                    <rect x="91.5571" y="43.9636" width="42.1873" height="83.9305" fill="white" />
                    <rect x="79.123" y="127.894" width="68.8319" height="79.0456" fill="white" />
                    <path d="M91.5571 162.532L106.212 162.976V148.322H120.533V162.532H134.633V176.298V191.397H120.533V177.187H106.212V191.397H92.0012L91.5571 162.532Z" fill="#10306A" />
                    <rect x="0.0771484" y="221.594" width="69.276" height="15.9868" fill="white" />
                    <rect x="90.6689" y="205.607" width="43.0754" height="34.1939" fill="white" />
                    <path d="M125.307 206.94H142.043V221.15H157.28V249.571H125.307V206.94Z" fill="#DF2C39" />
                    <path d="M99.106 206.94H82.3698V221.15H67.1324V249.571H99.106V206.94Z" fill="#DF2C39" />
                    <rect x="0.0771484" y="167.417" width="15.9868" height="70.1641" fill="white" />
                    <rect x="0.0771484" y="167.417" width="15.9868" height="27.9768" fill="#DF2C39" />
                    <rect width="15.9868" height="70.1641" transform="matrix(-1 0 0 1 227 167.417)" fill="white" />
                    <rect width="15.9868" height="27.9768" transform="matrix(-1 0 0 1 227 167.417)" fill="#DF2C39" />
                    <rect x="163.941" y="124.785" width="15.9868" height="70.1641" fill="white" />
                    <rect x="163.941" y="124.785" width="15.9868" height="27.9768" fill="#DF2C39" />
                    <rect x="47.1494" y="124.785" width="15.9868" height="70.1641" fill="white" />
                    <rect x="47.1494" y="190.953" width="15.9868" height="15.9868" fill="#10306A" />
                    <rect x="63.1357" y="174.966" width="15.9868" height="15.9868" fill="#10306A" />
                    <rect x="163.941" y="190.953" width="15.9868" height="15.9868" fill="#10306A" />
                    <rect x="147.955" y="174.966" width="15.9868" height="15.9868" fill="#10306A" />
                    <rect x="47.1494" y="124.785" width="15.9868" height="27.9768" fill="#DF2C39" />
                    <rect x="63.1357" y="190.953" width="15.9868" height="15.9868" fill="white" />
                    <rect x="147.955" y="190.953" width="15.9868" height="15.9868" fill="white" />
                    <rect x="32.0503" y="206.94" width="50.1807" height="14.6545" fill="white" />
                    <rect x="142.182" y="206.94" width="51.5129" height="14.6545" fill="white" />
                  </svg>
                </div> -->
            <a href="#" class="block m-0 p-4 font-bold border-t-8 bg-gray-200 border-blue-500 text-blue-500">Thomas Jefferson Elementary Fun Run</a>
            <a href="#" class="block m-0 p-4 font-medium text-gray-900 border-b border-gray-300 hover:text-gray-700 hover:bg-gray-100">Home</a>
            <a href="#" class="block m-0 p-4 font-medium text-gray-900 border-b border-gray-300 hover:text-gray-700 hover:bg-gray-100">Easy Emailer</a>
            <a href="#" class="block m-0 p-4 font-medium text-gray-900 border-b border-gray-300 hover:text-gray-700 hover:bg-gray-100">Finish Line</a>

            <a href="#" class="block m-0 p-4 font-bold border-t-8 bg-gray-200 border-blue-500 text-blue-500">Simpson Middle School Fun Run</a>
            <a href="#" class="block m-0 p-4 font-medium text-gray-900 border-b border-gray-300 hover:text-gray-700 hover:bg-gray-100">Home</a>
            <a href="#" class="block m-0 p-4 font-medium text-gray-900 border-b border-gray-300 hover:text-gray-700 hover:bg-gray-100">Easy Emailer</a>

            <a href="#" class="block m-0 p-4 font-bold border-t-8 bg-gray-200 border-blue-500 text-blue-500">My Settings</a>
            <a href="#" class="block m-0 p-4 font-medium text-gray-900 border-b border-gray-300 hover:text-gray-700 hover:bg-gray-100">Admin Dashboard</a>
            <a href="#" class="block m-0 p-4 font-medium text-gray-900 border-b border-gray-300 hover:text-gray-700 hover:bg-gray-100">Register Student</a>
            <a href="#" class="block m-0 p-4 font-medium text-gray-900 border-b border-gray-300 hover:text-gray-700 hover:bg-gray-100">Register Teacher</a>
            <a href="#" class="block m-0 p-4 font-medium text-gray-900 border-b border-gray-300 hover:text-gray-700 hover:bg-gray-100">My Profile</a>
            <a href="#" class="block m-0 p-4 font-medium text-gray-900 border-b border-gray-300 hover:text-gray-700 hover:bg-gray-100">Help Center</a>
            <a href="#" class="block m-0 p-4 font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-100">Logout</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
