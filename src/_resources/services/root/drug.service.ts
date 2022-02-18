import BaseRequest from '@/utils/request'
import { HOSTS } from '@/constants/index'

/**
 * 服务类示例
 */
class DemoService extends BaseRequest {
	constructor() {
		super({
			hostKey: HOSTS.TARO_API_BASE,
		})
	}

	/**
	 * 根据药品获取疾病
	 */
	queryDiseaseByDrugName(payload: {
		paramName: string // 参数
	}) {
		return this.post({
			url: '/demo/getSomethingInDemo',
			data: payload,
		})
	}
}

export default new DemoService()
