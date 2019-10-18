import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      props: true,
      component: () => import(/* webpackChunkName: "home" */ './pages/index.vue'),
    },
    {
      path: '/dashboard',
      name: 'parent-dashboard',
      props: true,
      component: () => import(/* webpackChunkName: "parent-dashboard" */ './pages/dashboard/index.vue'),
    },
    {
      path: '/dashboard/public',
      name: 'public-dashboard',
      props: true,
      component: () => import(/* webpackChunkName: "public-dashboard" */ './pages/dashboard/public.vue'),
    },
    {
      path: '/dashboard/teacher',
      name: 'teacher-dashboard',
      props: true,
      component: () => import(/* webpackChunkName: "teacher-dashboard" */ './pages/dashboard/teacher.vue'),
    },
    {
      path: '/easy-emailer',
      name: 'easy-emailer',
      component: () => import(/* webpackChunkName: "easy-emailer" */ './pages/easy-emailer.vue'),
    },
    {
      path: '/edit-participant',
      name: 'edit-participant',
      component: () => import(/* webpackChunkName: "edit-participant" */ './pages/edit-participant.vue'),
    },
    {
      path: '/edit-profile',
      name: 'edit-profile',
      component: () => import(/* webpackChunkName: "edit-profile" */ './pages/edit-profile.vue'),
    },
    {
      path: '/item-list',
      name: 'item-list',
      component: () => import(/* webpackChunkName: "item-list" */ './pages/item-list.vue'),
    },
  ],
})
