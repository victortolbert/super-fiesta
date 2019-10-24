<template>
  <div class="flex flex-col h-full">
    <nav class="navbar">
      <!-- Navbar Brand -->
      <a
        class="navbar-brand"
        href="#"
      >
        {{ appName }}
      </a>
      <!-- Navbar Toggler -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <!-- Navbar Menu -->
      <div
        id="navbar"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link
              to="/"
              class="nav-link"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
              class="nav-link"
            >
              About
            </router-link>
          </li>
        </ul>
        <form
          v-if="!loggedIn"
          class="form-inline"
        >
          <div class="field">
            <label for="inputEmail">
              Email:
            </label>
            <input
              v-validate="'required|' + $formValidator.rules.email"
              id="inputEmail"
              v-model="form.email"
              :error-messages="errors.collect('email')"
              :class="{
                'input': true,
                'border-red-700': errors.has('email')
              }"
              data-vv-name="email"
              type="email"
              class="input mx-2"
              placeholder="Enter email"
            >
          </div>
          <div class="field">
            <label for="inputPassword">
              Password:
            </label>
            <input
              v-validate="$formValidator.rules.password"
              id="inputPassword"
              v-model="form.password"
              :class="{
                'input': true,
                'border-red-700': errors.has('password')
              }"
              data-vv-name="password"
              type="password"
              class="input mx-2"
              placeholder="Password"
            >
          </div>
          <button
            type="submit"
            class="float-right py-1 px-4 rounded bg-blue-600"
            @click.prevent="submit"
          >
            <span v-if="loading">
              Loading...
            </span>
            <span v-else>
              Sign in
            </span>
          </button>

          <span class="ml-1">
            or
            <RouterLink :to="{ name: 'signup' }">Sign up</RouterLink>
          </span>
        </form>

        <template v-else>
          Hi, <b>{{ user.name }}</b>.

          <button
            class="float-right ml-2 py-1 px-4 rounded bg-blue-600 text-sm ml-2"
            @click="$router.push({ name: 'profile' })"
          >
            Profile
          </button>

          <button
            class="btn btn-secondary btn-sm float-right ml-2"
            @click="$actionWithLoading(logout, 'loadingLogout')"
          >
            <span v-if="loadingLogout">
              Loading...
            </span>
            <span v-else>
              Logout
            </span>
          </button>
        </template>
      </div>
    </nav>

    <VerifyEmailAlert />

    <div class="container flex items-center justify-center h-full pt-5">
      <Transition
        name="router"
        mode="out-in"
      >
        <RouterView />
      </Transition>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import VerifyEmailAlert from '@/components/layout/main/VerifyEmail.vue'

export default {
  name: 'MainLayout',
  components: { VerifyEmailAlert },
  data: () => ({
    appName: process.env.VUE_APP_TITLE,
    form: {
      email: 'test@test.com',
      password: 'password',
    },
    loading: false,
    loadingLogout: false,
  }),
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('auth', ['token', 'loggedIn']),
  },
  methods: {
    async submit () {
      await this.$actionWithLoading(this.signin, 'loading', this.form)

      // this.loading = true
      // try {
      //   await this.signin(this.form)
      // } finally {
      //   this.loading = false
      // }
    },
    ...mapActions('auth', ['signin', 'logout']),
  },
}
</script>
