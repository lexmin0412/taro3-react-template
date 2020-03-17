class BuildPlugin {
  apply (builder) {
    builder.hooks.beforeBuild.tap('BuildPlugin', (config) => {
      // 在这里做一些打包之前的验证操作 可以获取到配置且可以修改

      // 验证环境变量是否完整
      console.log(`开始检查环境变量，环境标识：${config.env.NODE_ENV}`)
      const APP_CONF = config.defineConstants.APP_CONF
      const APP_CONF_ATTRS = [
        'API_HOST',
        'APPID',
        'APIS_JUHE',
        'API_MAP_QQ',
        'KEY_MAP_QQ'
      ]
      APP_CONF_ATTRS.forEach((item,index)=>{
        // 如果不存在则报错
        if ( !APP_CONF[item] ) {
          throw `缺少环境变量: ${item}`
        } else {
          console.log(`${item}: ${APP_CONF[item]}`)
        }
      })
      console.log('环境变量检查通过')
    })

    builder.hooks.afterBuild.tap('BuildPlugin', (stats) => {
      console.log('BuildPlugin afterBuild',stats)
    })
  }
}

module.exports = BuildPlugin
