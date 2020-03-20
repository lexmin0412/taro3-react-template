import Taro from '@tarojs/taro'

class Pages {
  constructor() {}

  /**
   * 页面枚举
   */
  getRoutes() {
    return {
      /**
       * 首页
       */
      home: 'pages/index/index',
      /**
       * 授权页
       */
      auth: 'pages/auth/auth',
      /**
       * 个人中心页
       */
      user: 'pages/user/index'
    }
  }

	// 获取当前路由
	getCurRoute() {
		if ( process.env.TARO_ENV === 'weapp' ) {
			const curPages = Taro.getCurrentPages()
			return curPages[curPages.length-1].route
		} else {
			const location = window.location
			return location.pathname.slice(1)
		}
	}

	backToHome() {
		Taro.switchTab({
			url: '/pages/goods/list'
		})
	}
}

export default new Pages()
