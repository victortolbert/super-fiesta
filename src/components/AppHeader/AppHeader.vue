<template>
  <header class="app-header relative flex sm:h-24 md:h-32 lg:h-40 xl:h-48 mb-16 text-white bg-blue-700 bg-cover bg-center items-center">
    <div class="container flex items-center justify-between w-full mx-auto p-4 sm:p-6">
      <slot>
        Default Header
      </slot>
      <div class="flex">
        <button
          ref="openButton"
          type="button"
          class="inline-block text-white focus:outline-none focus:text-white"
          aria-label="Menu"
        >
          <FontAwesomeIcon
            :icon="['far', 'bars']"
            class="fa-2x text-white"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import ProgramHeader from '@/components/ProgramHeader';
import NotificationsSidebarToggle from '@/components/NotificationsSidebarToggle';
import MenuSidebarToggle from '@/components/MenuSidebarToggle';
import EventInfo from '@/components/EventInfo';

export default {
  name: 'AppHeader',
  status: 'prototype',
  release: '1.0.0',
  components: {
    PageHeader,
    ProgramHeader,
    NotificationsSidebarToggle,
    MenuSidebarToggle,
    EventInfo,
  },
  props: {
    program: {
      type: Object,
      default: null,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data () {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss">
$theme-header-light-color: #027ed7;
$theme-header-dark-color: #02098a;

.app-header {
  background-image: linear-gradient(
    180deg,
    rgba($theme-header-light-color, 0.8) -13.75%,
    rgba($theme-header-dark-color, 0.8) 114.33%
  ), url('/v3-assets/dashboard/images/header_bg.jpg')
}
</style>
