module.exports = {
  env: {
    NODE_ENV: '"pro"'
  },
  defineConstants: {
    APP_CONF: {
      API_HOST: '"https://xx.com/"',
      APPID: '"wx0b32dc740be4b1f5"',
      APIS_JUHE: '"https://wldoperation.58wld.com"',
    }
  },
  mini: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
