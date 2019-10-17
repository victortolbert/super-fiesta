<template>
  <!-- Burger Toggle -->
  <div class="sm:hidden">
    <button
      type="button"
      class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
      v-on:click="isOpen = !isOpen"
    >
      <font-awesome-icon
        v-if="isOpen"
        v-bind:icon="['fal', 'times']"
        class="text-white"
      />
      <font-awesome-icon
        v-if="!isOpen"
        v-bind:icon="['far', 'bars']"
        class="text-white w-5"
      />
    </button>
  </div>
</template>
<script>
export default {
  name: 'BurgerToggle',
}
</script>
