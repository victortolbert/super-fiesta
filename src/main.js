import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import WebFontLoader from '@/utilities/shared/webFontLoader' // eslint-disable-line no-unused-vars
import Meta from 'vue-meta'

// Design System: Auto importing components globally
import DesignSystem from '@/system'

// bootstrap app
import '@/plugins'
Vue.use(DesignSystem)
Vue.use(Meta)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
