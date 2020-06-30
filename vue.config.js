module.exports = {
  pages: {
    index: {
      entry: './examples/main.js',
      template: './examples/index.html'
    }
  },
  outputDir: './main',
  configureWebpack: {
    output: {
      libraryTarget: 'umd'
    }
  }
}
