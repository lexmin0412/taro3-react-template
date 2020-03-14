/**
 * 小程序相关工具类封装
 */
import Taro from "@tarojs/taro";
import { set as setGlobalData, get as getGlobalData } from './../global_data'

/**
 * 监控网络状态变化
 */
export const addNetworkListener = () => {
	Taro.onNetworkStatusChange(res => {
		console.error('网络状态改变', res)
		console.error('success', res.isConnected)
		console.error('type', res.networkType)
		if (res.networkType === 'none') {
			Taro.showModal({
				title: '互联网链接已断开, 请检查您的网络后重试',
				confirmText: '确定',
				confirmColor: '#576B95',
				showCancel: false,
				success: function (res) {
					if (res.confirm) {
					}
				}
			})
		}
	})
}

/**
 * 检查小程序版本更新
 */
export const checkUpdate = () => {
	if (process.env.TARO_ENV === "weapp") {
		const updateManager = Taro.getUpdateManager();
		updateManager.onUpdateReady(() => {
			Taro.showModal({
				title: "更新提示",
				content: "新版本已经准备好，是否重启应用？",
				success(res) {
					if (res.confirm) {
						// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
						updateManager.applyUpdate();
					}
				}
			});
		});
	}
};

/**
 * 保存系统信息
 */
export const saveSystemInfo = () => {
	const systemInfo = Taro.getSystemInfoSync()
	let menuBtnRect = Taro.getMenuButtonBoundingClientRect()
	console.error('systemInfo', systemInfo)
	console.error('menuBtnRect', menuBtnRect)

	// 胶囊信息获取失败兼容
	const safeArea = systemInfo.safeArea
	if ( !menuBtnRect ) {
		menuBtnRect = {
			height: systemInfo.statusBarHeight,
			top: safeArea && safeArea.top ? safeArea.top + 6 : 26,
		}
	}
	setGlobalData('statusBarHeight', systemInfo.statusBarHeight)
	setGlobalData('menuBtnRect', menuBtnRect)
};
