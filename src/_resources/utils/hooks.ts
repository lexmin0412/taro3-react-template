import Taro from '@tarojs/taro'
const tabbarConfig = require('./../../tabbar.config')

interface UseNavigationBarInfoPresets {
	menuButtonInfo: Taro.getMenuButtonBoundingClientRect.Rect
	systemInfo: Taro.getSystemInfoSync.Result
}

interface INavigationBarInfo {
	navigationBarHeight: number
	navigationContentHeight: number
	menuButtonHeight: number
	navigationPaddding: number
	menuButtonWidth: number
	statusBarHeight: number
}

/**
 * 获取导航栏相关信息
 */
export const useNavigationBarInfo = (
	presets: UseNavigationBarInfoPresets = {} as any
): INavigationBarInfo => {
	const systemMenuButtonInfo =
		process.env.TARO_ENV === 'weapp'
			? Taro.getMenuButtonBoundingClientRect()
			: {}
	const menuButtonInfo = presets.menuButtonInfo || systemMenuButtonInfo
	const systemInfo = presets.systemInfo || Taro.getSystemInfoSync()
	const { statusBarHeight } = systemInfo
	let navigationContentHeight = 40
	navigationContentHeight =
		(menuButtonInfo.top - systemInfo.statusBarHeight) * 2 +
		menuButtonInfo.height
	return {
		navigationBarHeight: statusBarHeight + navigationContentHeight,
		navigationContentHeight,
		menuButtonHeight: menuButtonInfo.height,
		navigationPaddding: systemInfo.windowWidth - menuButtonInfo.right,
		statusBarHeight: systemInfo.statusBarHeight,
		menuButtonWidth: menuButtonInfo.width,
	}
}

/**
 * 判断是否tabbar页面
 * @param route
 * @returns
 */
const isTabbar = (route: string) => {
	let validRoute = route.includes('?')
		? route.slice(0, route.indexOf('?'))
		: route

	if (process.env.TARO_ENV === 'h5') {
		validRoute = validRoute.slice(1)
	}

	const { list } = tabbarConfig

	return list.some(item => item.pagePath === validRoute)
}

/**
 * 获取当前页面信息
 */
export const usePageInfo = () => {
	const pages = Taro.getCurrentPages()
	const currentPage = pages[pages.length - 1]
	return {
		navigationBarTitleText: currentPage.config.navigationBarTitleText,
		route: currentPage.route,
		isTabbar: isTabbar(currentPage.route),
		stackLength: pages.length,
	}
}
