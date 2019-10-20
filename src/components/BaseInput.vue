<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input v-bind:value="value" v-on:input="updateValue" v-bind="$attrs" v-on="listeners">
  </div>
</template>

<script>
import { formFieldMixin } from '../mixins/formFieldMixin'
export default {
  mixins: [formFieldMixin],
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      }
    },
  },
}
</script>
