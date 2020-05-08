/**
 * 获取运行环境
 * TODO 导出时需要隐藏稀有变量和方法
 */

class GetEnv {
	/**
	 * 环境变量
	 */
  public ENV = process.env.TARO_ENV

	/**
	 * UA列表
	 */
  private USER_AGENT = {
    WEAPP: 'WEAPP',
    ALIPAY: 'ALIPAY',
    OTHERS: 'OTHERS',
  }

	/**
	 * 是否是微信h5
	 */
  isWechatH5 = () => {
    if (navigator) {
      const userAgent: any = navigator.userAgent.toLowerCase()
      return userAgent.match(/MicroMessenger/i) == 'micromessenger'
    }
    return false
  }

  isInWechatH5 = this.isWechatH5()

	/**
	 * TODO: 后续优化判断 抽离枚举
	 * 判断客户端运行环境 暂时只有h5 后续可扩展小程序/app等端
	 */
  getUserAgent = () => {
    console.log('process.env.VUE_APP_PLATFORM', process.env.VUE_APP_PLATFORM)
    if (process.env.VUE_APP_PLATFORM === 'mp-weixin') {
      return 'WEAPP'
    } else {
      if (navigator) {
        const userAgent: any = navigator.userAgent.toLowerCase()
        if (userAgent.match(/Alipay/i) == 'alipay') {
          return this.USER_AGENT.ALIPAY
        } else if (userAgent.match(/MicroMessenger/i) == 'micromessenger') {
          return this.USER_AGENT.WEAPP
        } else {
          return this.USER_AGENT.OTHERS
        }
      }
    }
  }
}

export default new GetEnv()
