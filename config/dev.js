module.exports = {
  env: {
    NODE_ENV: '"dev"'
  },
  defineConstants: {
    APP_CONF: {
      API_HOST: '"/api/1.0"',
      APPID: '"wx0b32dc740be4b1f5"',
      APIS_JUHE: '"https://wldoperation.58wld.com"',
      API_MAP_QQ: '"https://apis.map.qq.com"',
      KEY_MAP_QQ: '"UQPBZ-RCU36-K2YS3-EMV6Y-JI6JJ-3WBUM"',
    }
  },
  h5: {
    devServer: {
      port: '10086',
      proxy: {
        '/api/1.0': {
          target: 'https://middle.test.ydjia.cn/businesses-gateway/customer/1.0',
          changeOrigin: true,
          ws: false,
          pathRewrite: {
            '^/api/1.0': ``
          }
        },
      },
    }
  }
}
