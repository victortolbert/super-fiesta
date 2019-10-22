<template>
  <BaseButton is-primary>
    <slot>Default Pledge Button Text</slot>
  </BaseButton>
</template>

<script>
import BaseButton from '@/components/shared/base/BaseButton'

export default {
  components: { BaseButton },
}
</script>
