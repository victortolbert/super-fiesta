import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import routes from './routes'
import store from '@/store'
import globalMiddleware from './middleware/global-middleware'

Vue.use(Router)

/**
 * Scroll Behavior
 *
 * @link https://router.vuejs.org/en/advanced/scroll-behavior.html
 *
 * @param  {Route} to
 * @param  {Route} from
 * @param  {Object|undefined} savedPosition
 * @return {Object}
 */
function scrollBehavior (to, from, savedPosition) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ x: 0, y: 0 })
    }, 190)
  })
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

sync(store, router)
globalMiddleware(router)

export default router
