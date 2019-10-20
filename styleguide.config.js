const path = require('path')
const vueLoader = require('vue-loader')

module.exports = {
  renderRootJsx: path.join(__dirname, 'config/styleguide.root.js'),
  // require: [path.join(__dirname, 'styleguide/global.requires.js')]
  // set your styleguidist configuration here
  title: 'Titan Style Guide',
  components: 'src/components/**/EventInfo.vue',
  ignore: ['**/*.spec.vue', '**/components/Button.vue'],
  defaultExample: true,
  require: ['./router-mock.js'],
  ribbon: {
    text: 'Back to examples',
    url: 'https://vue-styleguidist.github.io/Examples.html',
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
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [new vueLoader.VueLoaderPlugin()],
    resolve: {
      symlinks: true,
    },
  },
}
