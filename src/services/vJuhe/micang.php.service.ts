import BaseRequest from '~/utils/request'

class MicangPhpService extends BaseRequest {
  constructor() {
    super({
      hostKey: 'vJuhe'
    })
  }

  getExhibition(data): Promise<any> {
    return this.post({
      url: '/toutiao/index',
      data
    })
  }
}

export default new MicangPhpService() as MicangPhpService
