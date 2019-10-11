<template>
  <div id="easy-emailer-page">
    <default-layout>
        Edit Participant
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
