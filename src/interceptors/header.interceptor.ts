/**
 * 头部拦截器 处理请求头的配置
 */

export default function(chain) {
  console.log('enter header interceptor', chain)
  const requestParams = chain.requestParams
  const { header } = requestParams

  // 在这里配置请求头
  // header.osVersion = '4.7.0'

  requestParams.header = header

  return chain.proceed(requestParams)
}
