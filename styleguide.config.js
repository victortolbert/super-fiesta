module.exports = {
  // renderRootJsx: path.join(__dirname, 'config/styleguide.root.js')
  // require: [path.join(__dirname, 'styleguide/global.requires.js')]
  // set your styleguidist configuration here
  title: 'Titan Style Guide',
  components: 'src/components/**/*.vue',
  ignore: ['**/*.spec.vue', '**/components/Button.vue'],
  defaultExample: true,
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  theme: {
    color: {
      link: 'firebrick',
      linkHover: 'salmon',
    },
    fontFamily: {
      base: '"Operator Mono", "Source Sans Pro", "Comic Sans MS", "Comic Sans", cursive',
    },
  },
  styles: {
    Logo: {
      logo: {
        animation: 'blink ease-in-out 300ms infinite',
      },
      '@keyframes blink': {
        to: { opacity: 0 },
      },
    },
  },
  webpackConfig: {
    // custom config goes here
    resolve: {
      symlinks: true,
    },
  },
}
