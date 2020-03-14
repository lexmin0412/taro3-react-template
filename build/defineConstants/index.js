const env = process.env.NODE_ENV

let baseConstants = {
  APP_CONF: {
    API_HOST: 'https://xx.com/',
    APPID: 'wx0b32dc740be4b1f5'
  },
  expand: 'index'
}

if ( env === 'pro' ) {
  baseConstants = { ...baseConstants, ...require('./dev') }
} else if ( env === 'uat' ) {
  baseConstants = { ...baseConstants, ...require('./uat') }
}  else if ( env === 'sit' ) {
  baseConstants = { ...baseConstants, ...require('./sit') }
}else {
  baseConstants = { ...baseConstants, ...require('./dev') }
}

console.log('环境变量配置：', baseConstants.APP_CONF)
console.log('接口HOST', baseConstants.APP_CONF.API_HOST)

module.exports = baseConstants
