<template>
  <div id="app" class="">
    <!-- <AppNavbar /> -->
    <!-- if need to refresh token before doing requests, if token expired then tokenNeedToRefresh === true -->
    <div
      v-if="loggedIn && tokenExpired"
      class="flex justify-center items-center h-full"
    >
      <h1>Loading...</h1>
    </div>
    <RouterView v-else :programs="$store.state.user.programs" />
    <Quickview class="fixed z-40">
      Is active?
    </Quickview>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import authUser from '../public/v3/api/auth/user2.json'
// import AppNavbar from '@/layouts/include/AppNavbar'
import Quickview from '@/components/shared/patterns/Quickview'

export default {
  name: 'App',
  components: {
    // AppNavbar,
    Quickview,
  },
  data: () => ({
    isOpen: true,
  }),
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters('auth', ['loggedIn', 'tokenExpired']),
  },
  // async mounted () {
  //   await this.$store.dispatch('auth/init')
  // },
  created () {
    this.$store.dispatch('initStore', authUser)
    // fetch('/users.json')
    //   .then(response => response.json())
    //   .then(users => (this.users = users))
  },
}
</script>
<style>
:root {
  --color-primary: #2db564;    /* titan default */
  --color-secondary:#2e86de;   /* titan default */
  --color-secondary: #6c757d;  /* bootstrap default */

  --color-tertiary: #ed8936;   /* titan default */

  --color-success: #28a745;   /* bootstrap default */
  --color-danger: #dc3545;    /* bootstrap default */
  --color-warning: #ffc107;   /* bootstrap default */
  --color-info: #17a2b8;      /* bootstrap default */

  --color-light: #f8f9fa;     /* bootstrap default */
  --color-dark: #343a40;      /* bootstrap default */

  --color-modal-button: #d0021b;
  --color-facebook: #3B5998;
  --color-emailer: #00A6D9;
  --color-sms: #57AF7B;
  --color-copy: #00999E;
  --color-secondary-stroke: #7f8fa4;
  --color-text: #4a4a4a;
  --color-disable-gray: #efefef;
  --color-bg-tooltip: #eef2f7;
  --color-white: #f9fafc;
  --color-bg-white: #f9f9f9;

  --color-header-light: #027ed7;
  --color-header-dark: #02098a;

  /* Examples  */
  --color-bg-primary: #0252cc;
  --color-bg-secondary: #ffc402;
  --color-bg-default: #fff;
  --color-bg-inverse: #fff;

  --color-text-primary: #fff;
  --color-text-secondary: #755f17;
  --color-text-default: #444;
  --color-text-default-soft: #999;
  --color-text-inverse: #444;
  --color-text-inverse-soft: #999;

  --font-display: "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-body: "Helvetica Neue", Helvetica, Arial, sans-serif;

  --font-weight-normal: 400;
  --font-weight-display: 400;
  --font-weight-btn: 600;

  --rounded-btn: 0.25rem;
}

/*! purgecss start ignore */
.theme-dark_gray {
  --color-header-dark: #323232;
  --color-header-light: #5F5F5F;
}
.theme-light_gray {
  --color-header-dark: #9EA8B2;
  --color-header-light: #E0EFFF;
}

.theme-red {
  --color-header-dark: #B5151A;
  --color-header-light: #FF5459;
}
.theme-dark_red {
  --color-header-dark: #710807;
  --color-header-light: #E20F0D;
}
.theme-red_orange {
  --color-header-dark: #FF4523;
  --color-header-light: #FF8E79;
}

.theme-green {
  --color-header-dark: #027548;
  --color-header-light: #00B16C;
}
.theme-dark_green {
  --color-header-dark: #004422;
  --color-header-light: #038042;
}
.theme-light_green {
  --color-header-dark: #2ECC71;
  --color-header-light: #79FFB2;
}
.theme-blue {
  --color-header-dark: #3237A8;
  --color-header-light: #484FF8;
}
.theme-light_blue {
  --color-header-dark: #2FC2EF;
  --color-header-light: #B1EDFF;
}
.theme-light_orange {
  --color-header-dark: #EF852E;
  --color-header-light: #FFB477;
}
.theme-purple {
  --color-header-dark: #684F79;
  --color-header-light: #AA80C6;
}

/*! purgecss start ignore */
.theme-dark {
  --color-bg-primary: #c0b283;
  --color-bg-secondary: #dcd0c0;
  --color-bg-default: #f4f4f4;
  --color-bg-inverse: #373737;

  --color-text-primary: #fff;
  --color-text-secondary: #927e7e;
  --color-text-default: #373737;
  --color-text-default-soft: #6a6a6a;
  --color-text-inverse: #fff;
  --color-text-inverse-soft: #bbb;

  --font-display: Georgia, Times, "Times New Roman", serif;
  --font-body: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans",
    "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana,
    "Verdana Ref", sans-serif;

  --font-weight-normal: 400;
  --font-weight-display: 400;
  --font-weight-btn: 600;

  --rounded-btn: 0;
}
</style>
<style lang="scss" src="./assets/css/main.scss">
