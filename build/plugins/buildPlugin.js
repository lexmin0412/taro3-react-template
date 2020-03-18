const checkEnv = require('./checkEnv')
const getComponent = require('./getComponent')

class BuildPlugin {
  apply (builder) {
    builder.hooks.beforeBuild.tap('BuildPlugin', (config) => {
      // 在这里做一些打包之前的验证操作 可以获取到配置且可以修改

      // 获取所有组件生成文件名
      getComponent()

      // 检查环境变量
      checkEnv(config)
    })

    builder.hooks.afterBuild.tap('BuildPlugin', (stats) => {
      console.log('BuildPlugin afterBuild',stats)
    })
  }
}

module.exports = BuildPlugin
