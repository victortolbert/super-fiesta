import Vue from 'vue'
import lodash from 'lodash'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import ProgressBar from './components/ProgressBar'
import WebFontLoader from '@/utilities/shared/webFontLoader'

import 'nprogress/nprogress.css'

// bootstrap app
import '@/plugins' // eslint-disable-line no-unused-vars
// import '@/components'
import '@/filters'
import '@/mixins'
// import '@/utilities'

try {
  window.$ = window.jQuery = require('jquery')
} catch (e) {}

window._ = lodash
window.Vue = Vue
window.axios = axios
window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
}

let token = document.head.querySelector('meta[name="csrf-token"]')
if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
}

Vue.config.productionTip = false

const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount()
document.body.appendChild(bar.$el)

// const requireComponent = require.context(
//   './components',
//   false,
//   /Base[A-Z]\w+\.(vue|js)$/
// )

// requireComponent.keys().forEach(fileName => {
//   const componentConfig = requireComponent(fileName)

//   const componentName = upperFirst(
//     camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
//   )
//   Vue.component(componentName, componentConfig.default || componentConfig)
// })

Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
