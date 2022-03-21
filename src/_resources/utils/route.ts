import Taro, { getCurrentPages } from '@tarojs/taro'
const wtils = require('wtils')
const tabbarConfig = require('./../../tabbar.config')

/**
 * 路由配置对象
 */
interface IRoute {
	/**
	 * 页面路径
	 */
	url: string
	/**
	 * query参数
	 */
	query?: {
		[key: string]: any
	}
}

class Route {
	/**
	 * 返回上一页面
	 */
	navigateBack() {
		const curPages = getCurrentPages()
		if (curPages.length <= 1) {
			console.error('已无上层页面，无法返回')
			return
		}
		Taro.navigateBack()
	}

	/**
	 * 页面push
	 */
	navigateTo(params: IRoute) {
		this.jump({
			type: 'navigateTo',
			config: params,
		})
	}

	/**
	 * 重定向
	 */
	redirectTo(params: IRoute) {
		this.jump({
			type: 'redirectTo',
			config: params,
		})
	}

	/**
	 * 重定向
	 */
	relaunch(params: IRoute) {
		this.jump({
			type: 'relaunch',
			config: params,
		})
	}

	/**
	 * 切换tabbar
	 * @param params
	 */
	switchTab(params: IRoute) {
		this.jump({
			type: 'switchTab',
			config: params,
		})
	}

	/**
	 * 跳转页面
	 */
	jump(params: {
		type: 'navigateTo' | 'redirectTo' | 'relaunch' | 'switchTab'
		config: IRoute
	}) {
		const {
			type,
			config: { url, query },
		} = params

		// url校验
		if (!url) {
			throw new Error('jump方法参数校验失败：缺少url')
		}
		if (!url.startsWith('/')) {
			throw new Error('jump方法参数校验失败：url必须以“/”开头')
		}

		let suffix = ''
		if (query && Object.keys(query).length > 0) {
			suffix = wtils.transParams(JSON.stringify(query))
		}
		const finalUrl = `${url}${suffix}`
		switch (type) {
			case 'redirectTo':
				Taro.redirectTo({
					url: finalUrl,
				})
				break
			case 'relaunch':
				Taro.reLaunch({
					url: finalUrl,
				})
				break
			case 'switchTab':
				Taro.switchTab({
					url: finalUrl,
				})
			default:
				Taro.navigateTo({
					url: finalUrl,
				})
				break
		}
	}

	/**
	 * 获取当前路由
	 */
	getCurrentRoute() {
		const currentPages = getCurrentPages()
		console.log('当前页面', currentPages)

		return currentPages.length
			? currentPages[currentPages.length - 1].route
			: ''
	}

	/**
	 * 返回首页
	 */
	backToHome() {
		const tabBar = tabbarConfig
		if (tabBar.list && tabBar.list.length) {
			this.switchTab({
				url: `/${tabBar.list[0].pagePath}`,
			})
		}
	}
}

export default new Route()
