<template>
  <div id="easy-emailer-page">
    <default-layout>
        Easy Emailer Page
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/default'

export default {
  name: 'EasyEmailerPage',
  props: {
    programs: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    DefaultLayout
  }
}
</script>
