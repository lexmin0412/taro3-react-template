/**
 * 头部拦截器 处理请求头的配置
 */

import Constants from '~/constants/index'

export default function(chain) {
  console.log('enter header interceptor', chain)
  const requestParams = chain.requestParams

  const { header } = requestParams

    requestParams.header = header

  return chain.proceed(requestParams)
}
