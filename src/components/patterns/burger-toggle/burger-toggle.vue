<template>
  <!-- Burger Toggle -->
  <div class="sm:hidden">
    <button
      type="button"
      class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
      @click="isOpen = !isOpen"
    >
      <font-awesome-icon
        v-if="isOpen"
        :icon="['fal', 'times']"
        class="text-white"
      />
      <font-awesome-icon
        v-if="!isOpen"
        :icon="['far', 'bars']"
        class="text-white w-5"
      />
    </button>
  </div>
</template>
