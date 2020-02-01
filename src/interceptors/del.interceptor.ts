/**
 * 删除自定义请求头拦截器
 */

import { INTERCEPTOR_HEADER } from '~/constants/header'

export default function(chain) {
  console.log('enter del interceptor', chain)
  const requestParams = chain.requestParams
  const { header } = requestParams

  // 删除自定义请求头参数
  delete header[INTERCEPTOR_HEADER]
  requestParams.header = header

  return chain.proceed(requestParams)
}
