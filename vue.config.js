const { isDev } = require('./config')
module.exports = {
  publicPath: isDev ? './' : '/v-animation/index/',
  pages: {
    index: {
      entry: './examples/index.js',
      template: './examples/index.html'
    }
  },
  outputDir: 'index'
}
