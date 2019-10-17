import Vue from 'vue'
import lodash from 'lodash'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'
import WebFontLoader from '@/utilities/shared/webFontLoader' // eslint-disable-line no-unused-vars

// bootstrap app
import '@/plugins'
// import '@/components'
// import '@/filters'
// import '@/mixins'
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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
