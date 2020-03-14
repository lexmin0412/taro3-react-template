/**
 * 删除自定义请求头拦截器
 */

import Constants from '~/constants/index'

export default function(chain) {
  console.log('enter del interceptor', chain)
  const requestParams = chain.requestParams
  const { header } = requestParams

  // 删除自定义请求头参数
  delete header[Constants.INTERCEPTOR_HEADER]
  requestParams.header = header

  return chain.proceed(requestParams)
}
