import BaseRequest from '~/utils/request'

class QQMapWebService extends BaseRequest {
  constructor() {
    super({
      hostKey: 'API_MAP_QQ'
    })
  }

	/**
	 * 逆地址解析
	 */
  geocoder(payload: {
    /**
     * 位置信息 格式 <latidude>,<longitude>
     */
    location: string,
    /**
     * 是否获取poi列表
     */
    get_poi: 1 | 0,
  }): Promise<any> {
    if (process.env.TARO_ENV === 'h5') {
      return this.jsonp({
        url: '/ws/geocoder/v1',
        data: {
          ...payload,
          key: APP_CONF.KEY_MAP_QQ,
          output: 'jsonp',
          callback: 'jsonhandle1'
        },
        resType: 1,
      })
    } else {
      return this.post({
        url: '/ws/geocoder/v1',
        data: {
          ...payload,
          key: APP_CONF.KEY_MAP_QQ,
        },
        resType: 1,
      })
    }
  }
}

export default new QQMapWebService() as QQMapWebService
