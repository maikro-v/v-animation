const { isDev } = require('./config')

module.exports = {
  publicPath: isDev ? './' : '/v-animation/',
  pages: {
    index: {
      entry: './examples/index.js',
      template: './examples/index.html'
    }
  },
  outputDir: 'demo'
}
