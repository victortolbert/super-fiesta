export default [
  {
    path: '/profile',
    // route level code-splitting
    // this generates a separate chunk (profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '@/pages/profile/current-user/profile.vue'),
    children: [
      {
        name: 'profile',
        path: '',
        component: () => import(/* webpackChunkName: "profile-main-info" */ '@/pages/profile/current-user/pages/main-info.vue'),
        meta: { auth: true },
      },
      {
        name: 'profile-change-password',
        path: '/change-password',
        component: () => import(/* webpackChunkName: "profile-change-password" */ '@/pages/profile/current-user/pages/change-password.vue'),
        meta: { auth: true },
      },
    ],
  },
]
