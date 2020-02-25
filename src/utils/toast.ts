/**
 * taro toast封装简化
 * 由于默认的 loading 和 toast api 需要传入太多的配置参数 但在一个项目中绝大多数场景用到的配置都是相同的 这里参考 antd-m 的 toast api 来做封装处理
 */

import Taro from '@tarojs/taro'

class Toast {
  loading(title, mask = true) {
    Taro.showLoading({
      title,
      mask,
    })
  }

  hideLoading() {
    Taro.hideLoading()
	}

	/**
	 * 弹出错误 不展示icon
	 * @param errMsg 需要展示的错误信息
	 */
	error(errMsg: string) {
		Taro.showToast({
			title: errMsg,
			mask: true,
			icon: "none",
			duration: 1500
		});
	}

  show( title, mask = true, icon: 'none' | 'success' | 'loading' = 'none', duration = 1200 ) {
    Taro.showToast({
      title,
      mask,
      duration,
      icon
    })
  }

  hide() {
    Taro.hideToast()
  }
}

export default new Toast() as Toast
