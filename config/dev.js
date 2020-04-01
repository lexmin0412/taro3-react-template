module.exports = {
  env: {
    NODE_ENV: '"dev"'
  },
  defineConstants: {
    APP_CONF: {
      API_HOST: '"/api/1.0"',
      APPID: '"wxaef7e1d2cd28134e"',
      API_MAP_QQ: '"https://apis.map.qq.com"',
      KEY_MAP_QQ: '"UQPBZ-RCU36-K2YS3-EMV6Y-JI6JJ-3WBUM"',
    }
  },
  h5: {
    devServer: {
      port: '9000',
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
