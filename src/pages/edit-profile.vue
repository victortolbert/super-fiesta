<template>
  <div id="easy-emailer-page">
    <default-layout>
        Edit Profile
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/default'

export default {
  name: 'EditProfilePage',
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
