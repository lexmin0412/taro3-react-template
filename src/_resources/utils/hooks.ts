import Taro from '@tarojs/taro'

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
