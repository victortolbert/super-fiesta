import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import store from '@/store'

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
      path: '/item-list',
      name: 'item-list',
      component: () => import(/* webpackChunkName: "item-list" */ './pages/item-list.vue'),
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
      path: '/event/list',
      name: 'event-list',
      component: () => import(/* webpackChunkName: "event-list" */ './pages/event-list.vue'),
      props: true,
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: () => import(/* webpackChunkName: "event-create" */ './pages/event-create.vue'),
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: () => import(/* webpackChunkName: "event-show" */ './pages/event-show.vue'),
      props: true,
      beforeEnter (routeTo, routeFrom, next) {
        store
          .dispatch('event/fetchEvent', routeTo.params.id)
          .then(event => {
            routeTo.params.event = event
            next()
          })
          .catch(error => {
            if (error.response && error.response.status == 404) {
              next({ name: '404', params: { resource: 'event' } })
            } else {
              next({ name: 'network-issue' })
            }
          })
      },
    },
    {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "not-found" */ './pages/not-found.vue'),
      props: true,
    },
    {
      path: '/split-panes',
      name: 'split-panes',
      component: () => import(/* webpackChunkName: "split-panes" */ './pages/split-panes.vue'),
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: () => import(/* webpackChunkName: "network-issue" */ './pages/network-issue.vue'),
    },
    {
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } },
    },
  ],
})
