import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '../src/store'
import i18n from '../src/i18n'
import axios from 'axios'
import authUser from '../public/v3/api/auth/user2.json'

// bootstrap app
import '../src/plugins' // eslint-disable-line no-unused-vars
// import '../src/components'
import '../src/filters'
import '../src/mixins'
// import '../src/utilities'

Vue.use(VueI18n)

Vue.mixin({
  data() {
    return {
      colorDemo: 'blue',
      sizeDemo: 'large',
      sponsors: [
        {
          'program_id': 1,
          'business_name': 'Wolff, Williamson and Witting',
          'business_website': 'http://www.gibson.com/',
          'comment': 'Quo et perferendis suscipit modi accusantium.',
          'pledge_type_id': 2,
          'show_comment': 1,
          'laps': 0,
          'amount': '2.00',
          'total_est': '150.00',
          'hasPendingPayment': false,
          'online_pending_payments': [],
        },
      ],
    }
  },
  mounted () {
    this.$store.dispatch('initStore', authUser)
  },
})

Vue.prototype.$axios = axios

export default previewComponent => {
  // https://vuejs.org/v2/guide/render-function.html
  return {
    store,
    i18n,
    render(createElement) {
      return createElement(previewComponent)
    },
  }
}
// // config/styleguide.root.js
// import Vue from 'vue'
// import Vuex from 'vuex'
// import { state, mutations, getters } from './mutations'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   state,
//   getters,
//   mutations,
// })

// export default previewComponent => {
//   // https://vuejs.org/v2/guide/render-function.html
//   return {
//     store,
//     render(createElement) {
//       return createElement(previewComponent)
//     },
//   }
// }
