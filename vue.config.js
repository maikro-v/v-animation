const nodeEnv = process.env.NODE_ENV
let outputDir = 'dist'
if (nodeEnv === 'examples') {
  outputDir = 'exampleDocs'
} else if (nodeEnv === 'ui') {
  outputDir = 'main'
}

module.exports = {
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
