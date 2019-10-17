<template>
  <div id="easy-emailer-page">
    <DefaultLayout>
      <template v-slot:header>
        <h1 class="text-2xl font-semibold">
          Easy Emailer
        </h1>
      </template>
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/default'

export default {
  name: 'EasyEmailerPage',
  components: {
    DefaultLayout,
  },
  props: {
    programs: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>
