<template>
  <div class="relative mb-16">
    <!-- Desktop -->
    <header
      class="app-header hidden lg:flex bg-blue-600 text-white p-8 bg-cover bg-center items-center"
      style="min-height: 12rem"
    >
      <div class="max-w-6xl mx-auto flex items-center justify-between w-full">
        <MenuSidebarToggle v-model="menuOpened" />
        <div
          v-if="$route.meta.title"
          class="w-full ml-32"
        >
          <PageHeader>
            {{ $route.meta.title }}
          </PageHeader>
          <p
            v-if="$route.meta.title === 'Easy Emailer'"
            class="sub-header text-white text-2xl"
          >{{ program.event_name }}</p>
        </div>
        <ProgramHeader
          v-if="!$route.meta.title"
          :program="program"
        />
        <NotificationsSidebarToggle />
      </div>
    </header>

    <!-- Mobile -->
    <header
      class="app-header flex flex-col lg:hidden bg-blue text-white p-8 bg-cover bg-center items-start"
      style="min-height: 12rem"
    >
      <div class="max-w-4xl mx-auto flex items-center justify-between w-full mb-8">
        <MenuSidebarToggle v-model="menuOpened" />
        <NotificationsSidebarToggle />
      </div>
      <PageHeader v-if="$route.meta.title">
        {{ $route.meta.title }}
      </PageHeader>
      <ProgramHeader
        v-if="!$route.meta.title"
        :program="program"
      />
      <p
        v-if="$route.meta.title === 'Easy Emailer'"
        class="sub-header text-white text-2xl"
      >{{ program.event_name }}</p>
    </header>
    <EventInfo
      v-if="!$route.meta.title"
      :funrun-date="new Date(program.fun_run)"
      class="mt-4 mb-8 px-8 flex lg:hidden"
    />
  </div>

</template>

<script>
import PageHeader from '@/components/PageHeader';
import ProgramHeader from '@/components/ProgramHeader';
import NotificationsSidebarToggle from '@/components/NotificationsSidebarToggle';
import MenuSidebarToggle from '@/components/MenuSidebarToggle';
import EventInfo from '@/components/EventInfo';

export default {
  name: 'AppHeader5',
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
      default: () => ({
        event_name: 'Roosevelt Franklin Elementary School',
        fun_run: new Date(),
        microsite: {
          school_image_name: 'roosevelt-franklin-elementary.jpg',
        },
      }),
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

<style>
.app-header {
  background-image:
    linear-gradient(rgba(2, 127, 215, 0.9), rgba(2, 8, 138, 0.8)),
    url('/assets/img/header_bg.jpg')
}
.is-active {
  @apply underline text-blue-600 font-bold
}
</style>
