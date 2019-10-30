<template>
  <BaseButton>
    <slot>Default Pledge Button Text</slot>
  </BaseButton>
</template>

<script>
import BaseButton from '@/components/BaseButton'

export default {
  components: { BaseButton },
}
</script>
