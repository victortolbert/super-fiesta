<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-200">
    <CorporateMatchThanks />
    <Colors />
    <HelloI18n />
  </div>
</template>

<script>
import CorporateMatchThanks from '@/components/patterns/CorporateMatchThanks'
import Colors from '@/components/Colors'
import HelloI18n from '@/components/HelloI18n'

export default {
  name: 'Home',
  components: {
    CorporateMatchThanks,
    Colors,
    HelloI18n,
  },
}
</script>
