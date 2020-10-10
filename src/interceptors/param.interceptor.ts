/**
 * 参数拦截器 必传参数验证等
 */

export default function (chain) {
	const requestParams = chain.requestParams
	const { data } = requestParams

	// 这里做接口入参相关的处理
	requestParams.data = data

	return chain.proceed(requestParams)
}
