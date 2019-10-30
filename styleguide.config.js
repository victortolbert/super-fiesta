const packageConfig = require('./package.json')
const { join } = require('path')

module.exports = {
  title: 'Titan Frontier',
  version: packageConfig.version,
  // components: './src/components/**/*.vue',
  renderRootJsx: join(__dirname, './config/styleguide.root.js'),
  assetsDir: join(__dirname, './public'),
  ribbon: {
    text: 'Back to Docs',
    url: 'http://titan.victortolbert.com/',
  },
  usageMode: 'expand',
  exampleMode: 'expand',
  codeSplit: true,
  copyCodeButton: true,
  editorConfig: {
    theme: 'night',
  },
  pagePerSection: false,
  sections: [
    {
      name: 'Getting Started',
      content: './docs/readme.md',
      sectionDepth: 1,
      exampleMode: 'hide',
      usageMode: 'hide',
    },
    {
      name: 'Components',
      sections: [
        {
          name: 'Base',
          components: () => [
            './src/components/BaseAvatar/BaseAvatar.vue',
            './src/components/BaseButton/BaseButton.vue',
            './src/components/BaseIcon/BaseIcon.vue',
            './src/components/BaseInput/BaseInput.vue',
          ],
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
        },
        {
          name: 'Layout',
          components: () => [
            './src/components/AppHeader/AppHeader.vue',
            './src/components/AppNav/AppNav.vue',
            './src/components/AppFooter/AppFooter.vue',
          ],
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
        },
        {
          name: 'Other',
          components: () => [
            './src/components/Colors/Colors.vue',
            './src/components/Icons/Icons.vue',
            './src/components/LoadingOverlay/LoadingOverlay.vue',
            './src/components/UsaMap/UsaMap.vue',
          ],
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
        },
      ],
      sectionDepth: 0,
    },
    // {
    //   name: 'Base',
    //   content: './docs/components.md',
    //   components: './src/components/**/[A-Z]*.vue',
    //   exampleMode: 'expand',
    //   usageMode: 'expand',
    //   sectionDepth: 2
    // },
    {
      name: 'Downloads',
      content: './docs/downloads.md',
      exampleMode: 'hide',
      usageMode: 'hide',
      sectionDepth: 1,
    },
  ],
}
