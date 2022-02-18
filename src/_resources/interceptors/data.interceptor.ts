/**
 * data拦截器 处理数据格式 接口错误等
 */

import Taro from '@tarojs/taro'
import { SUCC_LIST, LOGIN_FAILURE_LIST } from '@/constants/code'
import Toast from '@/utils/toast'
import Page from '@/utils/page'
import Constants from '@/constants/index'

export default function (chain) {
	console.log('enter data interceptor', chain)
	const requestParams = chain.requestParams
	const { header } = requestParams
	const { showToast, resType } = header[Constants.INTERCEPTOR_HEADER]
	return chain
		.proceed(requestParams)
		.then(res => {
			console.log('data拦截器接收到的数据', res)

			// 先判断状态码
			if (res.statusCode !== 200) {
				// 错误处理
				console.error(`接口异常: ${res.data.path}`, res.statusCode)
				if (showToast) {
					Toast.info('很抱歉，数据临时丢失，请耐心等待修复')
				}
				return Promise.resolve('很抱歉，数据临时丢失，请耐心等待修复')
			}

			const resultData = { ...res.data }

			// 状态码为200时的错误处理
			// 这里主要是兼容多后台返回结果格式不规范以及后台框架设计存在问题的情况
			// 1. 返回状态码200 但返回结果是空字符串 在浏览器调试工具中查看不到任何信息
			if (!resultData) {
				throw `返回数据为空：${resultData}`
			}

			console.log('into data handle', resultData)

			// 返回格式统一为 code data msg
			// 腾讯地图webservice接口返回格式统一
			if (resType === 1) {
				resultData.code = resultData.status
				resultData.msg = resultData.message
				resultData.data = resultData.result
			}

			// 2. 统一返回格式
			// code 返回编码 强转字符串
			// msg 错误信息字符串 一般用于前端错误展示
			// data 返回数据
			resultData.code = resultData.hasOwnProperty('code')
				? resultData.code.toString()
				: resultData.code

			console.error('resultData', resultData)

			// 3. 接口返回错误code时前端错误抛出
			// 4. 登录失效前端逻辑处理
			if (LOGIN_FAILURE_LIST.includes(resultData.code)) {
				console.error('into login failure')
				Taro.setStorageSync(
					Constants.LOGIN_FAILURE_TIMESTAMP,
					new Date().getTime()
				)
				Taro.removeStorageSync(Constants.MASK_TOKEN)
				Taro.showToast({
					title: resultData.msg,
					icon: 'none',
					duration: 800,
				})
				const curPages = Taro.getCurrentPages()
				console.error('taro.curPages', curPages)
				if (Page.getCurRoute() === Page.getRoutes().home) {
					setTimeout(() => {
						Taro.navigateTo({
							url: `/${Page.getRoutes().auth}?from=home`,
						})
					}, 800)
				} else {
					setTimeout(() => {
						Taro.navigateTo({
							url: `/${Page.getRoutes().auth}`,
						})
					}, 800)
				}
			} else if (!SUCC_LIST.includes(resultData.code) && showToast) {
				console.log('非登录失效的失败code', resultData)
				if (resultData.code === '50000') {
					Toast.info('系统开小差了')
				} else {
					Toast.info(resultData.msg)
				}
			}
			console.error('返回之前的resultData', resultData)
			return Promise.resolve(resultData)
		})
		.catch(err => {
			Taro.hideLoading()
			Toast.info('网络开小差了')
			return Promise.reject(err)
		})
}
