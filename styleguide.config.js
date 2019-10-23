const { join, resolve, dirname } = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  renderRootJsx: join(__dirname, 'config/styleguide.root.js'),
  // require: [path.join(__dirname, 'styleguide/global.requires.js')]
  // set your styleguidist configuration here
  title: 'Titan Style Guide',
  components: [
    'src/components/BusinessLeaderboard/*.vue',
    // 'src/components/EditProfileForm/*.vue',
    'src/components/EventInfo/*.vue',
    'src/components/HowToGetPledges/*.vue',
    'src/components/MenuSidebarToggle/*.vue',
    'src/components/PageHeader/*.vue',
    // 'src/components/ParentDashboardAccordion/*.vue',
    // 'src/components/ParentDashboardLayout/*.vue',
    // 'src/components/ParticipantCard/*.vue',
    // 'src/components/ParticipantGroup/*.vue',
    // 'src/components/ParticipantRewards/*.vue',
    // 'src/components/ParticipantRewardsCard/*.vue',
    // 'src/components/PhoneScriptModal/*.vue',
    'src/components/PledgeButton/*.vue',
    // 'src/components/PledgeInfo/*.vue',
    // 'src/components/PledgeInfoCard/*.vue',
    'src/components/PledgeMeter/*.vue',
    'src/components/PledgeReminderModal/*.vue',
    // 'src/components/PledgesByState/*.vue',
    // 'src/components/ProgramHeader/*.vue',
    // 'src/components/ProgramOverview/*.vue',
    // 'src/components/SaveSuccessModal/*.vue',
    // 'src/components/SchoolGoalAndStats/*.vue',
    'src/components/ShareButton/*.vue',
    // 'src/components/ShareButtons/*.vue',
    'src/components/SidebarToggles/*.vue',
    'src/components/SponsorProm/*.vue',
    // 'src/components/StudentStarVideo/*.vue',
    // 'src/components/StudentStarVideoCard/*.vue',
    'src/components/UsaMap/*.vue',
    // 'src/components/VideoIframe/*.vue',
    // 'src/components/VideoPlayer/*.vue',
    // 'src/components/Item.vue',
    'src/components/AvatarImage.vue',
    'src/components/BaseButton.vue',
    'src/components/BaseDropdown.vue',
    'src/components/BaseIcon.vue',
    // 'src/components/BaseSelect.vue',
    // 'src/components/ChangePasswordModal.vue',
    'src/components/ColorPalettes.vue',
    // 'src/components/Colors.vue',
    // 'src/components/EventCard.vue',
    'src/components/NavBar.vue',
    // 'src/components/Navigation.vue',
    // 'src/components/NotificationBar.vue',
    // 'src/components/NotificationContainer.vue',
    // 'src/components/ProgressBar.vue',
    'src/components/ProgressMeter.vue',
    'src/components/RingChart.vue',
  ],
  assetsDir: 'public/',
  copyCodeButton: true,
  exampleMode: 'collapse',
  usageMode: 'expand',
  verbose: true,
  version: '0.1.0',
  pagePerSection: true,
  ignore: [
    '**/*.spec.vue',
    '**/components/**/patterns/*.vue',
    '**/components/**/shared/*.vue',
    '**/components/Button.vue',
  ],
  defaultExample: true,
  require: ['./router-mock.js'],
  ribbon: {
    text: 'Back to examples',
    url: 'https://vue-styleguidist.github.io/Examples.html',
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css',
          integrity: 'your hash here',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href:
            'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css',
          integrity: 'your hash here',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  // theme: {
  //   color: {
  //     link: 'firebrick',
  //     linkHover: 'salmon',
  //   },
  //   fontFamily: {
  //     base: '"Operator Mono", "Source Sans Pro", "Comic Sans MS", "Comic Sans", cursive',
  //   },
  // },
  // styles: {
  //   Logo: {
  //     logo: {
  //       animation: 'blink ease-in-out 300ms infinite',
  //     },
  //     '@keyframes blink': {
  //       to: { opacity: 0 },
  //     },
  //   },
  // },
  webpackConfig: {
    // custom config goes here
    module: {
    },
    plugins: [],
    resolve: {
      symlinks: true,
    },
  },
}
