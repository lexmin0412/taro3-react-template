const chalk = require('chalk')
const checkEnv = require('./checkEnv')
const getComponent = require('./getComponent')
const getPages = require('./getPages')

class BuildPlugin {
  apply (builder) {
    builder.hooks.beforeBuild.tap('BuildPlugin', (config) => {
      // 在这里做一些打包之前的验证操作 可以获取到配置且可以修改

      console.log( chalk.keyword( 'orange' )( `
开始执行自定义插件逻辑, 环境标识：`, process.env.NODE_ENV, `
` ) )

      // 小程序中编译project.config.json文件
      if ( process.env.TARO_ENV === 'weapp' ) {
        require('./project')
      }

      // 扫描pages文件夹生成路由列表文件
      getPages().then(()=>{
        // 结合pages配置项初始化app.tsx
        require('./initApp')()
      })

      // 获取所有组件生成文件名
      getComponent()

      // 检查环境变量
      checkEnv(config)

    })

    builder.hooks.afterBuild.tap('BuildPlugin', (stats) => {
      // console.log('BuildPlugin afterBuild',stats)
    })
  }
}

module.exports = BuildPlugin
