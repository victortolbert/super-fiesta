<template>
  <div class="card bg-transparent shadow-none border-red-700">
    <div class="px-8 lg:px-0 pt-4 pb-8 md:mx-auto md:max-w-6xl">
      <div class="media">
        <div
          v-if="hasSchoolImage"
          class="self-center media-left"
        >
          <figure class="image is-64x64">
            <img
              :src="imgSrc"
              :alt="program.microsite.school_image_name"
              class="is-rounded w-24 h-24"
            >
          </figure>
        </div>
        <div class="media-content self-center">
          <h1 class="text-2xl font-semibold text-white">
            {{ program.event_name }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramHeader',
  status: 'prototype',
  release: '1.0.0',
  props: {
    program: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    hasSchoolImage() {
      return !!this.program.microsite.school_image_name
    },
    imgSrc() {
      // return `https://${this.$store.state.s3Bucket}.s3.amazonaws.com/program_logos/${this.program.microsite.school_image_name}`
      return `/v3-assets/dashboard/images/${this.program.microsite.school_image_name}`
    },
  },
  mounted() {
    // console.log(this.program)
  },
}
</script>
