const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.export = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8083,
    // host: '0.0.0.0',
    open: true
  },
  chainWebpack (config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
  }
}
