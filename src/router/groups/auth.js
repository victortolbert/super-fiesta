export default [
  {
    name: 'signup',
    path: '/signup',
    component: () => import(/* webpackChunkName: "signup" */ '@/pages/auth/signup.vue'),
    meta: { guest: true },
  },
  {
    name: 'signin',
    path: '/signin',
    component: () => import(/* webpackChunkName: "signin" */ '@/pages/auth/signin.vue'),
    meta: { guest: true },
  },
  {
    name: 'forgot-password',
    path: '/forgot-password',
    component: () => import(/* webpackChunkName: "signin" */ '@/pages/auth/forgot-password.vue'),
    meta: { guest: true },
  },
  {
    name: 'reset-password',
    path: '/reset-password/:token/:email',
    component: () => import(/* webpackChunkName: "signin" */ '@/pages/auth/reset-password.vue'),
    meta: { guest: true },
  },
  {
    name: 'verify-email',
    path: '/verify-email',
    component: () => import(/* webpackChunkName: "signin" */ '@/pages/auth/verify-email.vue'),
    // meta: { guest: true }
  },
]
