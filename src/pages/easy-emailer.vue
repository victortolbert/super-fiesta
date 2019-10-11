<template>
  <div id="easy-emailer-page">
    <default-layout>
        <template v-slot:header>
          <h1 class="text-2xl font-semibold">Easy Emailer</h1>
        </template>
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
