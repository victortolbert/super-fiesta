import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'parent-dashboard',
      props: true,
      component: () => import(/* webpackChunkName: "parent-dashboard" */ './pages/index.vue')
    },
    {
      path: '/easy-emailer',
      name: 'easy-emailer',
      component: () => import(/* webpackChunkName: "easy-emailer" */ './pages/easy-emailer.vue')
    },
    {
      path: '/edit-participant',
      name: 'edit-participant',
      component: () => import(/* webpackChunkName: "edit-participant" */ './pages/edit-participant.vue')
    },
    {
      path: '/edit-profile',
      name: 'edit-profile',
      component: () => import(/* webpackChunkName: "edit-profile" */ './pages/edit-profile.vue')
    }

  ]
})
