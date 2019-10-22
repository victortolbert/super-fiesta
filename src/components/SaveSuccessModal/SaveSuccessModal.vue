<template>
  <div class="m-4 rounded-xl overflow-hidden">
    <div
      :class="cardClasses"
      class="card"
    >
      <div
        class="card-content py-16 sm:px-32 text-white text-center"
      >
        <FontAwesomeIcon
          :icon="['fas', 'check']"
          size="3x"
        />
        <p
          v-if="title"
          class="font-bold text-xl"
          v-text="title"
        />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SaveSuccessModal',
  props: {
    type: {
      type: String,
      default: 'success',
    },
    duration: {
      type: Number,
      default: 1000,
    },
    title: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
  },
  computed: {
    cardClasses () {
      return {
        'bg-blue': this.type === 'success',
        'bg-red': this.type === 'error',
      };
    },
  },
  mounted () {
    this.blur();
    setTimeout(() => {
      this.close();
    }, this.duration);
  },
  methods: {
    close () {
      this.$emit('close');
      document.getElementById('app').style.filter = 'none';
      this.unBlur();
    },
    blur () {
      document.getElementById('app').style.filter = 'blur(4px)';
    },
    unBlur () {
      document.getElementById('app').style.filter = 'none';
    },
  },
};
</script>
