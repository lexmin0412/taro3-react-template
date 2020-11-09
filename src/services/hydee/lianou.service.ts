import BaseRequest from '~/utils/request'
import { HOSTS } from '~/constants/index'

/**
 * 莲藕相关服务
 */
class LianouService extends BaseRequest {
	constructor() {
		super({
			hostKey: HOSTS.API_BASE,
		})
	}

	/**
	 * 根据药品获取疾病
	 */
	queryDiseaseByDrugName(payload: {
		ComName: string // 药品名称 多个药品用_隔开
	}) {
		return this.post({
			url: '/store/queryCenterStore',
			data: {
				merCode: '666666',
				...payload,
			},
		})
	}
}

export default new LianouService()
