<template>
  <div>
    <!-- h-16 sm:h-20 md:h-24 lg:h-32  -->
    <header
      v-scroll="handleScroll"
      class="app-header text-blue-100 shadow fixed w-full px-6 bg-cover bg-center z-20"
    >
      <!-- max-w-6xl py-8 px-8 lg:px-0 -->

      <nav class="relative flex flex-wrap items-center h-full justify-between max-w-6xl mx-auto">
        <!-- text-xl sm:text-2xl md:text-3xl lg:text-4xl -->
        <h1 class="">
          <slot />
        </h1>
        <div class>
          <div id="dropdown" class="relative inline-block">
            <!-- <button @click="toggle" class="inline-flex items-center pl-6 pr-2 py-2 font-semibold text-blue-100 focus:outline-none focus:text-white">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z" />
                  <path d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z" />
                  <path d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z" />
                </svg>
            </button>-->
            <button
              v-show="!isOpen"
              ref="openButton"
              @click="toggle"
              type="button"
              class="block text-blue-100 focus:outline-none focus:text-white"
              aria-label="Menu"
            >
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"
                />
                <path
                  d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
                />
                <path
                  d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z"
                />
              </svg>
            </button>
            <button
              v-show="isOpen"
              ref="closeButton"
              @click="toggle"
              type="button"
              class="text-blue-100 focus:outline-none focus:text-white"
              aria-label="Close"
            >
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071Z"
                />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div class="hidden">
              <!-- overlay -->
              <transition
                enter-class="opacity-0"
                enter-active-class="ease-out transition-medium"
                enter-to-class="opacity-100"
                leave-class="opacity-100"
                leave-active-class="ease-out transition-medium"
                leave-to-class="opacity-0"
                appear
              >
                <div v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
                  <div @click="close" class="absolute inset-0 bg-black opacity-50" tabindex="-1" />
                </div>
              </transition>

              <transition
                enter-class="opacity-0 scale-90"
                enter-active-class="ease-out transition-fastest"
                enter-to-class="opacity-100 scale-100"
                leave-class="opacity-100 scale-100"
                leave-active-class="ease-in transition-fastest"
                leave-to-class="opacity-0 scale-90"
              >
                <div v-if="isOpen" class="z-50 absolute right-0 origin-top-right" style="top: 4rem">
                  <div class="w-64 text-left bg-white rounded-lg shadow-lg">
                    <div class="border-t-8 border-blue-600">
                      <div class="px-6 py-3 text-blue-600 font-bold leading-tight bg-gray-300">
                        <!-- {{ program.event_name }} -->
                        Thomas Jefferson Elementary Fun Fun
                      </div>
                      <!-- Links -->
                      <router-link
                        to="/dashboard"
                        active-class="is-active"
                        exact
                        class="block px-6 py-3 text-blue-800 leading-tight hover:bg-gray-200"
                      >Home</router-link>
                      <router-link
                        to="/easy-emailer"
                        active-class="is-active"
                        exact
                        class="block px-6 py-3 text-blue-800 leading-tight hover:bg-gray-200"
                      >Easy Emailer</router-link>
                      <a
                        href="#"
                        class="block px-6 py-3 text-blue-800 leading-tight hover:bg-gray-200"
                      >Finish Line</a>
                    </div>
                    <div class="border-t-8 border-blue-600">
                      <div
                        class="px-6 py-3 text-blue-600 font-bold leading-tight bg-gray-300"
                      >Simpson Middle School Fun Run</div>
                      <router-link
                        to="/dashboard"
                        active-class="is-active"
                        exact
                        class="block px-6 py-3 text-blue-800 leading-tight hover:bg-gray-200"
                      >Home</router-link>
                      <router-link
                        to="/easy-emailer"
                        active-class="is-active"
                        exact
                        class="block px-6 py-3 text-blue-800 leading-tight hover:bg-gray-200"
                      >Easy Emailer</router-link>
                      <a
                        href="#"
                        class="block px-6 py-3 text-blue-800 leading-tight hover:bg-gray-200"
                      >Finish Line</a>
                    </div>
                    <div class="border-t-8 border-blue-600">
                      <div
                        class="px-6 py-3 text-blue-600 font-bold leading-tight bg-gray-300"
                      >My Settings</div>
                      <a
                        href="#"
                        class="block px-6 py-3 text-blue-800 leading-tight hover:bg-gray-200"
                      >Admin Dashboard</a>
                      <a
                        href="#"
                        class="block px-6 py-3 text-blue-800 leading-tight hover:bg-gray-200"
                      >Register Student</a>
                      <a
                        href="#"
                        class="block px-6 py-3 text-blue-800 leading-tight hover:bg-gray-200"
                      >Register Teacher</a>
                      <a
                        href="#"
                        class="block px-6 py-3 text-blue-800 leading-tight hover:bg-gray-200"
                      >My Profile</a>
                      <a
                        href="#"
                        class="block px-6 py-3 text-blue-800 leading-tight hover:bg-gray-200"
                      >Help Center</a>
                      <a
                        href="#"
                        class="block px-6 py-3 text-blue-800 leading-tight hover:bg-gray-200"
                      >Logout</a>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>

          <!-- <button v-show="!isOpen" ref="openButton" @click="open" type="button" class="block text-blue-100 focus:outline-none focus:text-white" aria-label="Menu">
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
          </button>-->
        </div>
      </nav>

      <!-- Off-canvas Menu -->
      <div class="text-base">
        <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
          appear
        >
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
          <!-- z-10 fixed inset-y-0 right-0 max-w-xs w-full bg-white transition-transform overflow-hidden shadow-lg" style="top: 4rem; margin-top:-2px" -->
          <div
            v-show="isOpen"
            class="z-10 fixed inset-y-0 right-0 max-w-xs w-full bg-white transition-transform overflow-y-auto shadow-lg"
          >
            <div class="relative z-10 bg-white">
              <div
                v-for="(program, index) in $store.state.program.programs"
                :key="index"
                :class="program.microsite.microsite_color_theme.theme_name"
              >
                <a
                  :href="`#${program.event_name}`"
                  class="block m-0 p-4 font-bold border-t-8 bg-gray-300 text-blue-600 border-blue-600"
                >{{ program.event_name }}</a>
                <router-link
                  class="block m-0 p-4 font-medium text-gray-600 border-b border-gray-300 hover:text-blue-700 hover:bg-gray-100"
                  to="/dashboard"
                  active-class="is-active"
                  exact
                >Home</router-link>
              </div>
            </div>
            <div class="relative z-10 bg-white">
              <a
                href="#"
                class="block m-0 p-4 font-bold border-t-8 bg-gray-300 text-blue-600 border-blue-600"
              >My Settings</a>
              <a
                href="#"
                class="block m-0 p-4 font-medium text-gray-600 border-b border-gray-300 hover:text-blue-700 hover:bg-gray-100"
              >Register Student</a>
              <a
                href="#"
                class="block m-0 p-4 font-medium text-gray-600 border-b border-gray-300 hover:text-blue-700 hover:bg-gray-100"
              >Register Teacher</a>
              <a
                href="#"
                class="block m-0 p-4 font-medium text-gray-600 border-b border-gray-300 hover:text-blue-700 hover:bg-gray-100"
              >My Profile (titan)</a>
              <a
                href="#"
                class="block m-0 p-4 font-medium text-gray-600 border-b border-gray-300 hover:text-blue-700 hover:bg-gray-100"
              >Help Center</a>
              <a
                href="#"
                class="block m-0 p-4 font-medium text-gray-600 border-b border-gray-300 hover:text-blue-700 hover:bg-gray-100"
              >Logout</a>
              <router-link
                class="block m-0 p-4 font-medium text-gray-600 border-b border-gray-300 hover:text-blue-700 hover:bg-gray-100"
                to="/foo"
              >/foo</router-link>
              <router-link
                class="block m-0 p-4 font-medium text-gray-600 border-b border-gray-300 hover:text-blue-700 hover:bg-gray-100"
                to="/bar"
              >/bar</router-link>
              <router-link
                class="block m-0 p-4 font-medium text-gray-600 border-b border-gray-300 hover:text-blue-700 hover:bg-gray-100"
                to="/bar#anchor"
              >/bar#anchor</router-link>
              <router-link
                class="block m-0 p-4 font-medium text-gray-600 border-b border-gray-300 hover:text-blue-700 hover:bg-gray-100"
                to="/bar#anchor2"
              >/bar#anchor2</router-link>
            </div>
          </div>
        </transition>
      </div>
    </header>
  </div>
</template>

<script>
import Scroll from '@/directives/scroll'

export default {
  name: 'AppHeader4',
  directives: {
    Scroll,
  },
  props: {
    program: {
      type: Object,
      default: () => ({
        event_name: 'Default Program Event Name',
      }),
    },
  },
  data: () => ({
    isOpen: false,
    isDropdownOpen: false,
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
  }),
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (isOpen) {
          // Disable scrolling.
          document.ontouchmove = function(e) {
            e.preventDefault();
          };
          document.body.style.setProperty('overflow', 'hidden');
          document.documentElement.style.setProperty('overflow', 'hidden');
        } else {
          // Enable scrolling.
          document.ontouchmove = function(e) {
            return true;
          };
          document.body.style.removeProperty('overflow');
          document.documentElement.style.removeProperty('overflow', 'hidden');
        }
      },
    },
  },
  mounted() {
    // jQuery(function ($) {
    //   // Add 'shrink' class to site header on scrolling
    //   $(document).on('scroll', function () {
    //     if ($(window).width() > 800) {
    //       if ($(document).scrollTop() > 0) {
    //         $('.site-header').addClass('shrink')
    //       } else {
    //         $('.site-header').removeClass('shrink')
    //       }
    //     }
    //   })
    //   // Function to automatically add a top margin to the visible element below .site-header
    //   function addTopMargin () {
    //     var header_height = $('.site-header').outerHeight()
    //     $('.nav-primary').css('margin-top', header_height + 'px')
    //   }
    //   // http://stackoverflow.com/a/1974797/778809
    //   // Bind to the resize event of the window object
    //   $(window).on('resize', function () {
    //     if ($(window).width() > 800) {
    //       addTopMargin()
    //       // Invoke the resize event immediately
    //     }
    //   }).resize()
    // })
  },
  methods: {
    open() {
      this.isOpen = true;
      this.$nextTick(() => {
        this.$refs.closeButton.focus();
      });
    },
    close() {
      this.isOpen = false;
      this.$nextTick(() => {
        this.$refs.openButton.focus();
      });
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    handleScroll (evt, el) {
      if (window.scrollY > 50) {
        el.classList.add('shrink')
      } else {
        el.classList.remove('shrink')
      }
    },
  },
};
</script>

<style>
.app-header {
  /* transform: translateZ(0);
  perspective: 1000px;
  backface-visibility: hidden;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1); */
  @apply py-10 text-4xl;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(
      rgba(2, 127, 215, 0.9),
      rgba(2, 8, 138, 0.8)
    ),
    url("/assets/img/header_bg.jpg");
}
.is-active {
  @apply underline text-blue-600 font-bold;
}

.shrink {
  @apply py-4 text-2xl;
}

/* .site-header {
  min-height: 0;
}

@media only screen and (min-width: 801px) {
  .site-header .wrap {
    padding: 0;
  }

  .site-header {
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    padding: 2.5% 0;
  }
  .admin-bar .site-header {
    top: 32px;
  }

  .site-header.shrink {
    -webkit-box-shadow: 0 1px rgba(34, 34, 34, 0.1);
    -moz-box-shadow: 0 1px rgba(34, 34, 34, 0.1);
    box-shadow: 0 1px rgba(34, 34, 34, 0.1);
    padding: 0;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
} */
</style>
