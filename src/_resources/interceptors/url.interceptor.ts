/**
 * host拦截器 处理url拼接等
 */

import Constants from '@/constants/index'

export default function (chain) {
	const requestParams = chain.requestParams
	const { header, url } = requestParams

	// 如果传入url自带域名则不做处理 否则加上对应的域名
	if (!(url.startsWith('https://') || url.startsWith('http://'))) {
		requestParams.url = `${header[Constants.INTERCEPTOR_HEADER].hostUrl}${url}`
	}
	return chain.proceed(requestParams)
}
