<template>
  <div class="mb-8 relative">
    <div class="relative rounded  overflow-hidden h-4">
      <span
        :class="{
          'bg-primary bg-green-500': false,
          'bg-secondary bg-blue-500': true
        }"
        class="absolute inline-block h-4"
        :style="`width: ${config.percentage}%`"
      />
    </div>
    <div class="relative">
      <span
        class="absolute inline-block text-sm font-bold mt-0 w-full"
        :style="`top: 50%; transform: translateX(calc(${config.percentage}% - 0.7em);`"
        v-text="config.percentage"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => ({
        percentage: 40,
        studentName: 'Silva',
        grade: '2nd Grade',
        displayText: '',
      }),
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
