<template>
  <div id="app" class>
    <!-- <AppNavbar /> -->
    <!-- if need to refresh token before doing requests, if token expired then tokenNeedToRefresh === true -->
    <div v-if="loggedIn && tokenExpired" class="flex justify-center items-center h-full">
      <h1>Loading...</h1>
    </div>
    <RouterView v-else :programs="$store.state.user.programs" />
    <Quickview class="fixed z-40">
      Is active?
    </Quickview>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import authUser from '../public/v3/api/auth/user2.json';
// import AppNavbar from '@/layouts/include/AppNavbar'
import Quickview from '@/components/shared/patterns/Quickview';
// import 'victormono'

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
  created() {
    this.$store.dispatch('initStore', authUser);
    // fetch('/users.json')
    //   .then(response => response.json())
    //   .then(users => (this.users = users))
  },
};
</script>
<style lang="scss">
/*------------------------------------*\
    #DESIGN TOKENS
\*------------------------------------*/
:root {
  /**
   * First tier: brand definitions
   * 1) These variables define the brand. We're looking for
   *    generic delclarations like "brand-blue", "brand-purple", and
   *    so on. They should not imply usage.
   */
  --theme-1-font-family-primary: "Oswald", sans-serif;
  --theme-1-color-brand-pink: #fe366a;
  --theme-1-color-brand-pink-deep: #d71346;
  --theme-1-color-white: #fff;

  /**
   * Theme 2 Brand Definition
   * 1) In a real environment, these definitions would live
   *    in a separate file
   */
  --theme-2-font-family-primary: "Merriweather", serif;
  --theme-2-color-brand-green: #317c2f;
  --theme-2-color-white: #fff;
  --theme-2-color-gray-10: #e5e5e5;
  --theme-2-color-gray-50: #808080;

  /**
   * Second tier: global variables
   * 1) At this tier you can define global values, such as "primary
   *    color, secondary color, primary text color, action color,
   *    default spacing values, and so on. These values help map the
   *    brand variable definitions to actual utility. That said, these
   *    values should not include component-specific values like
   *    navigation-link-color. Those will be handled at the individual
   *    component level.
   */
  --theme-1-color-primary: var(--theme-1-color-brand-pink);
  --theme-1-color-primary-tone: var(--theme-1-color-brand-pink-deep);
  --theme-1-text-light: var(--theme-1-color-white);

  --color-primary: #2db564; /* titan default */
  --color-secondary: #2e86de; /* titan default */
  --color-secondary: #6c757d; /* bootstrap default */

  --color-tertiary: #ed8936; /* titan default */

  --color-success: #28a745; /* bootstrap default */
  --color-danger: #dc3545; /* bootstrap default */
  --color-warning: #ffc107; /* bootstrap default */
  --color-info: #17a2b8; /* bootstrap default */

  --color-light: #f8f9fa; /* bootstrap default */
  --color-dark: #343a40; /* bootstrap default */

  --color-modal-button: #d0021b;
  --color-facebook: #3b5998;
  --color-emailer: #00a6d9;
  --color-sms: #57af7b;
  --color-copy: #00999e;
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

/*------------------------------------*\
    #BUTTONS
\*------------------------------------*/

/**
 * Default variables
 * 1. These can be seen as the "vanilla" button styles for the design
 *    system. These define the necessary variables for each component,
 *    and applies a basic, "boring" aesthetic to it.
 */
:root {
  --button-background-color: #333;
  --button-text-color: #fff;
  --button-font-family: Helvetica, sans-serif;
  --button-font-size: 1rem;
  --button-font-weight: 400;
  --button-border-width: 1px;
  --button-border-style: solid;
  --button-border-color: #333;
  --button-border-radius: 0;
  --button-padding: 1rem 2rem;
  --button-text-transform: normal;
  --button-letter-spacing: initial;
  --button-icon-width: 1rem;
  --button-icon-height: 1rem;
  --button-icon-color: currentColor;
  --button-transition: all 0.1 ease-out;
}

/**
 * Theme 1 button styles
 * 1. Here we map the theme's second-tier global variables to the
 *    specific components.
 * 2. Worth noting in a production environment the :root variables
 *    would be updated rather than a theme-specific body class.
 */
.theme-1 {
  --button-background-color: var(--theme-1-color-primary);
  --button-border-color: var(--theme-1-color-primary);
  --button-text-color: var(--theme-1-text-light);
  --button-hover-background-color: var(--theme-1-color-primary-tone);
  --button-hover-text-color: var(--theme-1-text-light);
  --button-hover-border-color: var(--theme-1-color-primary-tone);
  --button-font-family: var(--theme-1-font-family-primary);
  --button-padding: 1.5rem;
  --button-letter-spacing: 1px;
  --button-transition: all 0.1 ease-out;
}

/**
 * Theme 2 Button styles
 */
.theme-2 {
  --button-background-color: var(--theme-2-color-white);
  --button-hover-background-color: var(--theme-2-color-brand-green);
  --button-text-color: var(--theme-2-color-gray-50);
  --button-hover-text-color: var(--theme-2-color-white);
  --button-border-color: var(--theme-2-color-gray-10);
  --button-font-family: var(--theme-2-font-family-primary);
  --button-font-size: 13px;
  --button-text-transform: capitalize;
  --button-padding: 15px 3rem;
}

/**
 * Theme 3
 * 1. Note: I'm not creating design tokens for each theme. Hopefully
 *    two themes (theme 1 and theme 2) are enough to demonstrate
 *    the concept.
 */
.theme-3 {
  --button-background-color: #0892d0;
  --button-hover-background-color: #0892d0;
  --button-text-color: #fff;
  --button-hover-text-color: #fff;
  --button-border-color: #ed1c24;
  --button-border-width: 0;
  --button-border-radius: 30px 0 30px 0;
  --button-box-shadow: 6px 6px 0 yellow;
  --button-font-family: "Crete Round", serif;
  --button-font-size: 18px;
  --button-font-weight: 300;
  --button-letter-spacing: 2px;
  --button-padding: 1rem 2rem;
  --button-text-transform: normal;
}

/**
 * Theme 4
 */
.theme-4 {
  --button-background-color: #f9f9f9;
  --button-hover-background-color: #f9f9f9;
  --button-border-color: #999;
  --button-font-family: "Saira Condensed", sans-serif;
  --button-font-size: 11px;
  --button-font-weight: 500;
  --button-padding: 20px 32px;
  --button-text-color: #333;
  --button-hover-text-color: #a60505;
  --button-text-transform: uppercase;
  --button-letter-spacing: 1.65px;
  --button-icon-width: 0.7rem;
  --button-icon-height: 0.7rem;
  --button-icon-color: #a60505;
}

/**
 * Theme 5
 */
.theme-5 {
  --button-background-color: transparent;
  --button-font-family: "Amatic SC", cursive;
  --button-font-size: 20px;
  --button-text-color: blue;
  --button-hover-text-color: #252525;
  --button-text-transform: uppercase;
  --button-box-shadow: inset 0 -5px 0 0 rgba(254, 148, 54, 0.7);
  --button-padding: 0 0 10px;
  --button-border-width: 0;
  --button-letter-spacing: 0.8px;
  --button-font-weight: 400;
  --button-icon-color: #fe9436;
}

/**
 * Button styles
 * 1. These are the actual CSS properties for the button component.
 *    The shared CSS declarations as written as normal CSS, but themeable
 *    values are expressed as variables.
 * 2. A button be marked up as a <button> or <a>
 */
.c-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  line-height: 1;
  text-decoration: none;
  font-family: var(--button-font-family);
  font-size: var(--button-font-size);
  font-weight: var(--button-font-weight);
  border-width: var(--button-border-width);
  border-style: var(--button-border-style);
  border-color: var(--button-border-color);
  border-radius: var(--button-border-radius);
  background-color: var(--button-background-color);
  color: var(--button-text-color);
  box-shadow: var(--button-box-shadow);
  padding: var(--button-padding);
  text-transform: var(--button-text-transform);
  letter-spacing: var(--button-letter-spacing);
  transition: var(--button-transition);
}

/**
 * Hover & Focus state for buttons
 */
.c-btn:hover,
.c-btn:focus {
  background: var(--button-hover-background-color);
  color: var(--button-hover-text-color);
  border-color: var(--button-hover-border-color);
}

/**
 * Block button variation
 * 1. Spans the full width of the container
 */
.c-btn--block {
  display: block;
  width: 100%;
}

/**
 * Large button variation
 * 1. Make the button bigger! These values would likely have
 *    variables applied to them in order for individual themes
 *    to control the size of the large button.
 */
.c-btn--large {
  font-size: 1.6rem;
  padding: 1.4rem 2rem;
}

/**
 * Small button variation
 */
.c-btn--small {
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
}

/*
 * Button icon
 * 1. SVG icon that lives inside a button
 * 2. Can either be before or after button text
 */
.c-btn__icon {
  display: block;
  width: var(--button-icon-width);
  height: var(--button-icon-height);
  fill: var(--button-icon-color);

  .c-btn:hover &,
  .c-btn:focus & {
    background: var(--button-icon-hover-background-color);
  }
}

/**
 * Button icon that appears after button text
 * 1. Create space between button text and icon
 */
.c-btn__text + .c-btn__icon {
  margin-left: 0.3rem; /* 1 */
}

/**
 * Button text that appears after button icon
 * 1. Create space between button text and icon
 */
.c-btn__icon + .c-btn__text {
  margin-left: 0.3rem; /* 1 */
}

/*! purgecss start ignore */
.theme-dark_gray {
  --color-header-dark: #323232;
  --color-header-light: #5f5f5f;
}
.theme-light_gray {
  --color-header-dark: #9ea8b2;
  --color-header-light: #e0efff;
}

.theme-red {
  --color-header-dark: #b5151a;
  --color-header-light: #ff5459;
}
.theme-dark_red {
  --color-header-dark: #710807;
  --color-header-light: #e20f0d;
}
.theme-red_orange {
  --color-header-dark: #ff4523;
  --color-header-light: #ff8e79;
}

.theme-green {
  --color-header-dark: #027548;
  --color-header-light: #00b16c;
}
.theme-dark_green {
  --color-header-dark: #004422;
  --color-header-light: #038042;
}
.theme-light_green {
  --color-header-dark: #2ecc71;
  --color-header-light: #79ffb2;
}
.theme-blue {
  --color-header-dark: #3237a8;
  --color-header-light: #484ff8;
}
.theme-light_blue {
  --color-header-dark: #2fc2ef;
  --color-header-light: #b1edff;
}
.theme-light_orange {
  --color-header-dark: #ef852e;
  --color-header-light: #ffb477;
}
.theme-purple {
  --color-header-dark: #684f79;
  --color-header-light: #aa80c6;
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
