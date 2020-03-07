import BaseRequest from '~/utils/request'

class MobileService extends BaseRequest {
  constructor() {
    super({
      hostKey: 'apisJuhe'
    })
	}

	/**
	 * 查询手机号码归属地
	 */
  queryMobile(params: {
		phoneNumber: number|string
	}): Promise<any> {
		const { phoneNumber } = params
    return this.get({
			url: `/mobile/get?phone=${phoneNumber}&key=01316ea1229f3e75d538fb346e290e4b`,
			data: {}
    })
  }
}

export default new MobileService() as MobileService
