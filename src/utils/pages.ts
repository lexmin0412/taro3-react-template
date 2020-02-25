/**
 * 页面操作
 * 在项目中经常需要做一些页面的跳转操作
 * 但是有一些逻辑可能会经常更改 比如分包之后页面路径就会改变
 * 如果在跳转时调用的是统一的方法，那么当页面路径变化时只需要改变这个配置文件中的路径即可，便于维护
 */

import Taro from '@tarojs/taro'

class Pages {
	constructor() {}

	/**
	 * 获取页面路径
	 */
	getPage(type: 'home' | 'auth') {
		const pagesMap = {
			/**
			 * 首页
			 */
			home: 'pages/home/index',
			/**
			 * 授权
			 */
			auth: 'pages/auth/index'
		}
		return pagesMap[type]
	}

	/**
	 * 回到首页
	 */
	backToHome() {
		const homePage = this.getPage('home')
		Taro.switchTab({
			url: `/${homePage}`
		})
	}
}

export default new Pages()
