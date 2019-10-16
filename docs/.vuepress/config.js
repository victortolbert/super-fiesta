module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true,
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // use more markdown-it plugins!
      // md.use(require('markdown-it-xxx'))
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}
