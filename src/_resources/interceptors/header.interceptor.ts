/**
 * 头部拦截器 处理请求头的配置
 */

export default function (chain) {
	const requestParams = chain.requestParams

	const { header } = requestParams

	requestParams.header = header

	return chain.proceed(requestParams)
}
