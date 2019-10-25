<template>
  <div class="bg-transparent flex items-center justify-center flex-1">
    <img
      v-if="hasSchoolImage"
      :src="imgSrc"
      :alt="program.microsite.school_image_name"
      class="is-rounded w-16 h-16 lg:w-24 lg:h-24 mb-0 mr-8"
    >
    <div class="text-white">
      <span class="text-xl sm:text-2xl lg:text-4xl font-medium leading-tight">
        {{ program.event_name }}
      </span>
      <EventInfo
        :funrun-date="new Date(program.fun_run)"
        class="hidden lg:flex"
      />
    </div>
  </div>
</template>

<script>
import EventInfo from '@/components/pattern/EventInfo';

export default {
  name: 'ProgramHeader',
  status: 'prototype',
  release: '1.0.0',
  components: {
    EventInfo,
  },
  props: {
    program: {
      type: Object,
      default: null,
    },
  },
  computed: {
    hasSchoolImage () {
      return !!this.program.microsite.school_image_name;
    },
    imgSrc () {
      return `https://${this.$store.state.s3Bucket}.s3.amazonaws.com/program_logos/${this.program.microsite.school_image_name}`;
    },
  },
};
</script>
