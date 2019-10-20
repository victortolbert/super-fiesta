import store from '../src/store'

export default previewComponent => {
  // https://vuejs.org/v2/guide/render-function.html
  return {
    store,
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
