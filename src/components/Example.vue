<template>
  <div class="example">
    Example
  </div>
</template>

<script>
export default {
  name: 'Example',
}
</script>

<style lang="scss">
.example {
  --h: 60;
  --s: 100%;
  --l: 20%;
  --compliment: calc(var(--h) - 180);
  background: hsl(var(--h), var(--s), var(--l));
  border-top: 100px solid hsl(var(--compliment), var(--s), var(--l))
}
</style>
