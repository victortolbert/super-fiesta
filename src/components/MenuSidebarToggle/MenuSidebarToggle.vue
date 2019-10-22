<template>
  <a
    class="inline-block menu-sidebar-toggle"
    dusk="side-bar-toggle"
    @click.prevent="toggle"
    @keydown.space.prevent="toggle"
  >
    <FontAwesomeIcon
      v-if="show"
      :icon="['far', 'times']"
      class="fa-2x text-white"
      fixed-width
    />
    <FontAwesomeIcon
      v-else
      :icon="['far', 'bars']"
      class="fa-2x text-white"
      fixed-width
    />
  </a>
</template>

<script>
export default {
  name: 'MenuSidebarToggle',
  status: 'prototype',
  release: '1.0.0',
  model: {
    prop: 'toggled',
    event: 'toggle',
  },
  props: {
    toggled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
      this.$emit('toggle', !this.toggled)
      // $('.app-menu-sidebar').toggleClass('is-open')
    },
  },
}
</script>
