/**
 * taro toast封装简化
 */

import Taro from '@tarojs/taro'

class Toast {
	/**
	 * 展示加载动画
	 * @param title 加载文字
	 * @param mask 是否展示遮罩
	 */
	loading(title, mask = true) {
		Taro.showLoading({
			title,
			mask,
		})
	}

	/**
	 * 隐藏loading
	 */
	hideLoading() {
		Taro.hideLoading()
	}

	/**
	 * 弹出成功信息
	 * @param title 标题
	 */
	success(title: string) {
		Taro.showToast({
			title,
			mask: true,
			duration: 1800,
			icon: 'success',
		})
	}

	/**
	 * 弹出错误信息 无图标
	 */
	info(
		title,
		mask = true,
		icon: 'none' | 'success' | 'loading' = 'none',
		duration = 1800
	) {
		Taro.showToast({
			title,
			mask,
			duration,
			icon,
		})
	}

	/**
	 * 隐藏toast
	 */
	hide() {
		Taro.hideToast()
	}
}

export default new Toast() as Toast
