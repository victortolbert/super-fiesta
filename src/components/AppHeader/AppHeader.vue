<template>
  <div class="relative mb-16">
    <header class="app-header p-8 bg-blue-700 text-white bg-cover bg-center">
      <div class="max-w-4xl mx-auto flex items-center justify-between w-full">
        <slot>Default Slot</slot>
      </div>
    </header>
  </div>

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
      menuOpened: false,
    };
  },
};
</script>
