import BaseRequest from '~/utils/request'

/**
 * 莲藕相关服务
 */
class LianouService extends BaseRequest {

  constructor() {
    super({
      hostKey: 'API_HOST'
    })
  }

  /**
   * 根据药品获取疾病
   */
  queryDiseaseByDrugName(payload: {
    ComName: string;  // 药品名称 多个药品用_隔开
  }) {
    return this.post({
      url: '/store/queryCenterStore',
      data: {
        merCode: '666666'
      }
    })
  }
}

export default new LianouService()
