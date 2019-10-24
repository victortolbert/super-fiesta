<template>
  <div class="flex items-center justify-center p-8 sm:p-16 bg-blue-800 text-white sm:text-blue-800 sm:border sm:shadow-lg">
    <CorporateMatchThanks class="sm:bg-white sm:p-8 rounded-lg" />
  </div>
</template>

<script>
import CorporateMatchThanks from '@/components/patterns/CorporateMatchThanks'

export default {
  name: 'Home',
  components: {
    CorporateMatchThanks,
  },
}
</script>
