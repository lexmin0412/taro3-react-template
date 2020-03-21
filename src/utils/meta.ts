import Taro from '@tarojs/taro'

class Meta {
  /**
   * 设置页面标题
   * @param title 标题文字
   */
  setTitle(title: string) {
    if ( process.env.TARO_ENV === 'h5' ) {
      document.title = title
    } else {
      Taro.setNavigationBarTitle({
        title
      })
    }
  }
}

export default new Meta()
