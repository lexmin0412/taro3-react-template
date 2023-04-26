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
	 * 一个获取某项数据的 get 请求
	 */
	getSomething(payload: {
		paramName: string // 参数
	}) {
		return this.post({
			url: '/demo/getSomething',
			data: payload,
		})
	}
}

export default new DemoService()
