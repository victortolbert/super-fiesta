<template>
    <a
        class="inline-block"
        @click.prevent="toggle"
        @keydown.space.prevent="toggle"
    >
        <FontAwesomeIcon
            v-if="show"
            :icon="['fal', 'times']"
            class="text-white"
        />
        <FontAwesomeIcon
            v-else
            :icon="['far', 'bars']"
            class="text-white w-5"
        />
    </a>
</template>

<script>
export default {
  name: 'ToggleNav',
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
  data: () => ({
    show: false,
    default: false,
  }),
  methods: {
    toggle () {
      this.show = !this.show
      this.$emit('toggle', !this.toggled)
      // $('.app-menu-sidebar').toggleClass('is-open')
    },
  },
}
</script>
