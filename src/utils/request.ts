import Taro from '@tarojs/taro'
import { INTERCEPTOR_HEADER } from '~/constants/header'
import hostConfig from '~/config/index.config'
import headerInterceptor from '~/interceptors/header.interceptor'
import hostInterceptor from '~/interceptors/host.interceptor'
import delInterceptor from '~/interceptors/del.interceptor'
import dataInterceptor from '~/interceptors/data.interceptor'

console.log('hostconfig', hostConfig)

interface IOptions {
  hostKey: string;
  [key: string]: any;
}

class BaseRequest {
  public options: IOptions

  constructor(options) {
    console.log('options', options)
    this.options = options
  }

  public async request({
    url,
    data,
    method,
    header = { 'Content-Type': 'application/json' },
    dataType = 'json',
    responseType = 'text',
  }) {

    // 添加自定义请求头，用于host和header处理
    const hostKey = this.options ? this.options.hostKey : '';
    if ( !hostKey ) {
      throw "请指定service key";
    }
    const hostUrl = hostConfig[hostKey]
    if ( !hostUrl ) {
      throw `找不到 hostkey: ${hostKey} 对应的host 配置`;
    }
    header[INTERCEPTOR_HEADER] = {
      hostKey,
      hostUrl
    }

    // 添加拦截器
    Taro.addInterceptor(hostInterceptor)
    Taro.addInterceptor(headerInterceptor)
    Taro.addInterceptor(dataInterceptor)
    Taro.addInterceptor(delInterceptor)

    return Taro.request({
      url,
      data,
      method,
      header,
      dataType,
      responseType,
    })
  }

  public post({
    url,
    data
  }) {
    return this.request({
      method: 'POST',
      url,
      data
    })
  }
}

export default BaseRequest
