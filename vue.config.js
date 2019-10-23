// "use strict"
const { resolve, dirname } = require('path')
const src = './src/'
const webpack = require('webpack')

module.exports = {
  // proxy API requests to Valet during development
  devServer: {
    // proxy: 'http://titan.test',
    proxy: 'http://localhost:8080',
  },
  // assetsDir: 'assets',

  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: '../public',

  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  indexPath: process.env.NODE_ENV === 'production'
    ? '../resources/views/index.blade.php'
    : 'index.html',

  chainWebpack: config => {
    // // See https://cli.vuejs.org/guide/css.html#automatic-imports
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    config.resolve.symlinks(false)

    types.forEach(type =>
      addStyleResource(
        config.module.rule('stylus').oneOf(type)
      )
    )

    // When using lerna and simlinks,
    // mode some modules that should be ignored are not
    // we add them here to avoid errors
    const vueBrowserCompilerPath = resolve(
      dirname(require.resolve('vue-inbrowser-compiler')),
      '../'
    )

    const eslintRule = config.module.rule('eslint')
    if (eslintRule) {
      const vsgPath = resolve(dirname(require.resolve('vue-styleguidist')), '../')

      eslintRule.exclude.add(vsgPath)
      eslintRule.exclude.add(vueBrowserCompilerPath)
    }

    const jsRule = config.module.rule('js')
    if (jsRule) {
      jsRule.exclude.add(vueBrowserCompilerPath)
    }
  },

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        API_BASE_URL: JSON.stringify('//base-url.test'),
      }),
    ],
    resolve: {
      alias: {
        // src folder alias
        '@': resolve(src),
        vue$: 'vue/dist/vue.esm.js',
      },
    },
  },

  runtimeCompiler: true,

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        resolve(__dirname, 'src/assets/css/shared/abstracts/*.scss'),
      ],
    },
  },
}

// See https://cli.vuejs.org/guide/css.html#automatic-imports
function addStyleResource (rule) {
  // console.log(rule)
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve(__dirname, src + 'styles/global/mixins.styl'), // or styles/global/mixins/*.styl
        resolve(__dirname, src + 'styles/global/variables.styl'),
        resolve(__dirname, src + 'styles/global/functions.styl'),
      ],
    })
}
