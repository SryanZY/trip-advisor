const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8083,
    // host: '0.0.0.0',
    open: true
  },

  // 修改webpack的配置
  chainWebpack (config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
  }
}
