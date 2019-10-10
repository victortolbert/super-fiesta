import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './pages/dashboard/index.vue'
import ParentDashboard from './pages/dashboard/parent.vue'
import TeacherDashboard from './pages/dashboard/teacher.vue'

const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}

const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Dashboard,
      props: true,
      children: [
        {
          path: '',
          props: true,
          component: ParentDashboard
        },
        {
          path: 'teacher',
          props: true,
          component: TeacherDashboard
        }
      ]
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
    },
    { path: '/user/:id',
      component: User,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        { path: '', component: UserHome },

        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        { path: 'profile', component: UserProfile },

        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        { path: 'posts', component: UserPosts }
      ]
    }
  ]
})
