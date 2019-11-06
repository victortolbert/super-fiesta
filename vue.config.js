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
    config.resolve.symlinks(false)

    // When using lerna and symlinks,
    // mode some modules that should be ignored are not
    // we add them here to avoid errors
    const vueBrowserCompilerPath = resolve(
      dirname(require.resolve('vue-inbrowser-compiler')),
      '../'
    )

    const eslintRule = config.module.rule('eslint')
    if (eslintRule) {
      eslintRule.exclude.add(vueBrowserCompilerPath)
    }

    const jsRule = config.module.rule('js')
    if (jsRule) {
      jsRule.exclude.add(vueBrowserCompilerPath)
    }
  },

  configureWebpack: {
    devtool: 'source-map',
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
