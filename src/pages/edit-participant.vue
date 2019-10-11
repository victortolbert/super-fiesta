<template>
  <div id="easy-emailer-page">
    <default-layout>
        <template v-slot:header>
          <h1 class="text-2xl font-semibold">Edit Participant</h1>
        </template>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/default'

export default {
  name: 'EditParticipantPage',
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
