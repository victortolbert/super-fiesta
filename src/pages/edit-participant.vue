<template>
  <div id="edit-participant-page">
    <app-header />
    <app-nav />
    <main class="flex-1">
      Edit Participant
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/header'
import AppFooter from '@/components/layout/footer'

export default {
  name: 'EditParticipantPage',
  props: {
    programs: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
