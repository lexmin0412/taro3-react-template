import BaseRequest from '~/utils/request'

class MicangPhpService extends BaseRequest {
  constructor() {
    super({
      hostKey: 'wldOperation'
    })
  }

  getExhibition(data): Promise<any> {
    return this.post({
      url: '/Exhibition/getExhibitionBanner',
      data
    })
  }
}

export default new MicangPhpService() as MicangPhpService
