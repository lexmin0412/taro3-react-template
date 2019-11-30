import BaseRequest from '~/utils/request'

class MicangPhpService extends BaseRequest {
  constructor() {
    super({
      hostKey: 'php'
    })
  }

  getExhibition(data): Promise<any> {
    return this.post({
      url: '/mcang.php/Exhibition/getExhibition',
      data
    })
  }
}

export default new MicangPhpService() as MicangPhpService
