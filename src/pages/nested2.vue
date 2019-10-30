<template>
  <div>
    <component :is="componentInstance" />
  </div>
</template>

<script>
// https://itnext.io/vue-a-pattern-for-idiomatic-performant-component-registration-you-might-not-know-about-9f3c091846f5
export default {
  props: {
    isCompany: { type: Boolean, default: false },
  },
  computed: {
    componentInstance () {
      const name = this.isCompany ? 'CompanyInfo' : 'UserInfo'
      return () => import(`./components/${name}`)
    },
  },
}
</script>
