import BaseRequest from '@/utils/request'
import { HOSTS } from '@/constants/index'

/**
 * 药品相关服务
 */
class DrugService extends BaseRequest {
	constructor() {
		super({
			hostKey: HOSTS.TARO_API_BASE,
		})
	}

	/**
	 * 根据药品获取疾病
	 */
	queryDiseaseByDrugName(payload: {
		ComName: string // 药品名称 多个药品用_隔开
	}) {
		return this.post({
			url: '/drug/queryDiseaseByDrug',
			data: payload,
		})
	}
}

export default new DrugService()
