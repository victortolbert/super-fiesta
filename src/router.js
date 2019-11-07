import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import store from '@/store'

Vue.use(Router)

const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = {
  template: `
    <div>
      bar
      <div style="height:500px"></div>
      <p id="anchor" style="height:500px">Anchor</p>
      <p id="anchor2">Anchor2</p>
    </div>
  `,
}

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash

      // specify offset of the element
      if (to.hash === '#anchor2') {
        position.offset = { y: 100 }
      }
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'home',
      props: true,
      meta: {
        scrollToTop: true,
      },
      component: () => import(/* webpackChunkName: "home" */ '@/pages/index.vue'),
    },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar, meta: { scrollToTop: true } },
    {
      path: '/item-list',
      name: 'item-list',
      component: () => import(/* webpackChunkName: "item-list" */ '@/pages/item-list.vue'),
    },
    {
      path: '/dashboard',
      name: 'parent-dashboard',
      props: true,
      component: () => import(/* webpackChunkName: "parent-dashboard" */ '@/pages/dashboard/index.vue'),
    },
    {
      path: '/dashboard/public',
      name: 'public-dashboard',
      props: true,
      component: () => import(/* webpackChunkName: "public-dashboard" */ '@/pages/dashboard/public.vue'),
    },
    {
      path: '/dashboard/teacher',
      name: 'teacher-dashboard',
      props: true,
      component: () => import(/* webpackChunkName: "teacher-dashboard" */ '@/pages/dashboard/teacher.vue'),
    },
    {
      path: '/easy-emailer',
      name: 'easy-emailer',
      component: () => import(/* webpackChunkName: "easy-emailer" */ '@/pages/easy-emailer.vue'),
    },
    {
      path: '/edit-participant',
      name: 'edit-participant',
      component: () => import(/* webpackChunkName: "edit-participant" */ '@/pages/edit-participant.vue'),
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: () => import(/* webpackChunkName: "inbox" */ '@/pages/inbox.vue'),
    },
    {
      path: '/event/list',
      name: 'event-list',
      component: () => import(/* webpackChunkName: "event-list" */ '@/pages/event-list.vue'),
      props: true,
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: () => import(/* webpackChunkName: "event-create" */ '@/pages/event-create.vue'),
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: () => import(/* webpackChunkName: "event-show" */ '@/pages/event-show.vue'),
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
      component: () => import(/* webpackChunkName: "not-found" */ '@/pages/not-found.vue'),
      props: true,
    },
    {
      path: '/split-panes',
      name: 'split-panes',
      component: () => import(/* webpackChunkName: "split-panes" */ '@/pages/split-panes.vue'),
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: () => import(/* webpackChunkName: "network-issue" */ '@/pages/network-issue.vue'),
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: () => import(/* webpackChunkName: "inbox" */ '@/pages/inbox.vue'),
    },
    {
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } },
    },
  ],
})
