/**
 * taro api封装简化
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

  show( title, mask = true, icon = 'none', duration = 1200 ) {
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
