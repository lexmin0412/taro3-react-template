import BaseRequest from '~/utils/request'

class MobileService extends BaseRequest {
  constructor() {
    super({
      hostKey: 'APIS_JUHE'
    })
	}

	/**
	 * 查询手机号码归属地
	 */
  queryMobile(params: {
		phoneNumber: number|string
	}): Promise<any> {
    console.log('into service', params)
		const { phoneNumber } = params
    return this.get({
			url: `/mcang.php/Exhibition/getExhibitionBanner`,
			data: {}
    })
  }
}

export default new MobileService() as MobileService
