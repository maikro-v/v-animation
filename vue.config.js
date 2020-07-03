const nodeEnv = process.env.NODE_ENV
let outputDir = 'dist'
let publicPath = '/'
if (nodeEnv === 'examples') {
  outputDir = 'exampleDocs'
  publicPath = '/exampleDocs'
} else if (nodeEnv === 'ui') {
  outputDir = 'main'
}

module.exports = {
  publicPath,
  pages: {
    index: {
      entry: './examples/index.js',
      template: './examples/index.html'
    }
  },
  outputDir,
  configureWebpack: {
    output: {
      libraryTarget: 'umd'
    }
  }
}
