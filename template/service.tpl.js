/**
 * service文件模版
 * @param {string} pathname 文件名
 */

const echoServiceTpl = (pathname) => {
	return `import BaseRequest from '~/utils/request';

class fileNameService extends BaseRequest {
  constructor() {
    super({
      hostKey: ''
    });
  }
  public getData(payload: any): Promise<any> {
    return this.post({
      url: '',
      data: payload
    });
  }
}

export default new fileNameService();`
}

module.exports = echoServiceTpl
