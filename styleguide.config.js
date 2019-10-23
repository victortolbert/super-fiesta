const { join, resolve, dirname } = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  renderRootJsx: join(__dirname, 'config/styleguide.root.js'),
  // require: [path.join(__dirname, 'styleguide/global.requires.js')]
  // set your styleguidist configuration here
  title: 'Titan Style Guide',
  components: [
    'src/components/BusinessLeaderboard/*.vue',
    'src/components/EventInfo/*.vue',
    'src/components/HowToGetPledges/*.vue',
  ],
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
