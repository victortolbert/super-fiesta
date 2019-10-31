<template>
  <div class="w-full">
    <button
      v-on="$listeners"
      v-bind="$attrs"
      class="
        leading-none
        block
        mx-auto
        max-w-xs
        border
        hover:shadow-lg
        focus:outline-none
        focus:shadow-outline
      "
      :class="[
        isFullWidth ? 'w-full' : 'px-8',
        isSmall ? 'text-sm font-medium py-2' : 'text-lg font-semibold py-4',
        classObject
      ]"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String,
      default: '',
    },
    isPrimary: {
      type: Boolean,
      default: false,
    },
    isSecondary: {
      type: Boolean,
      default: false,
    },
    isRounded: {
      type: Boolean,
      default: true,
    },
    isFullWidth: {
      type: Boolean,
      default: false,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classObject () {
      return {
        'text-sm': this.isSmall,
        'rounded-full': this.isRounded,
        'bg-green-600 hover:bg-green-700 text-green-100 hover:text-white': this.isPrimary,
        'bg-blue-600 hover:bg-blue-700 text-blue-100 hover:text-white': this.isSecondary,
      }
    },
  },
}
</script>

<style>
.button {
  /* display: inline-flex; */
  /* align-items: center; */
  /* justify-content: space-between; */
  /* height: 52px; */
  /* padding: 0 40px; */
  /* background: transparent; */
  /* border: none; */
  /* border-radius: 6px; */
  /* text-align: center; */
  /* font-weight: 600; */
  white-space: nowrap;
  transition: all 0.2s linear;
}
.button:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  /* box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}
.button:active {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.button:focus {
  outline: 0;
}
.button:disabled {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.button + .button {
  /* margin-left: 1em; */
}
.button.-fill-gradient {
  /* background: linear-gradient(to right, #16c0b0, #84cf6a); */
  color: #ffffff;
}
.button.-fill-gray {
  /* background: rgba(0, 0, 0, 0.5); */
  /* color: #ffffff; */
}
.button.-size-small {
  /* height: 32px; */
}
.button.-icon-right {
  /* text-align: left; */
  /* padding: 0 20px; */
}
.button.-icon-right > .icon {
  /* margin-left: 10px; */
}
.button.-icon-left {
  /* text-align: right; */
  /* padding: 0 20px; */
}
.button.-icon-left > .icon {
  /* margin-right: 10px; */
}
.button.-icon-center {
  /* padding: 0 20px; */
}
</style>
