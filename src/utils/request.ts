/**
 * 请求基类
 */

import Taro from '@tarojs/taro'
import Constants from '~/constants/index'
import headerInterceptor from '~/interceptors/header.interceptor'
import hostInterceptor from '~/interceptors/url.interceptor'
import delInterceptor from '~/interceptors/del.interceptor'
import dataInterceptor from '~/interceptors/data.interceptor'

console.log('hostconfig', APP_CONF)

// 添加拦截器
const interceptors = [
	hostInterceptor,
	headerInterceptor,
	dataInterceptor,
	delInterceptor,
	Taro.interceptors.logInterceptor,
	Taro.interceptors.timeoutInterceptor
]
interceptors.forEach(interceptorItem=>Taro.addInterceptor(interceptorItem))

interface IOptions {
  hostKey: string;
  [key: string]: any;
}

interface IRequestConfig {
	url: string;
	data?: any,
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
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
    header = {
			'Content-Type': 'application/json'
		},
    dataType = 'json',
		responseType = 'text',
		showToast = true
  }: IRequestConfig) {

    // 添加自定义请求头，用于host和header处理
    const hostKey = this.options ? this.options.hostKey : '';
    if ( !hostKey ) {
      throw "请指定service key";
    }
    const hostUrl = APP_CONF[hostKey]
    if ( !hostUrl ) {
      throw `找不到 hostkey: ${hostKey} 对应的host 配置`;
    }
    header[Constants.INTERCEPTOR_HEADER] = {
      hostKey,
			hostUrl,
			showToast
		}

    return Taro.request({
      url,
      data,
      method,
      header,
      dataType,
      responseType,
    })
	}

	public get(payload: {
		url: string;
		data: any;
		showToast?: boolean;
		header?: any
	}) {
		return this.request({
			method: 'GET',
			...payload
		})
	}

  public post(payload: {
    url: string,
    data: any,
		showToast?: boolean;
		header?: any
  }) {
    return this.request({
      method: 'POST',
      ...payload
    })
	}

	public put(payload: {
    url: string,
    data: any,
		showToast?: boolean;
		header?: any
  }) {
    return this.request({
      method: 'PUT',
      ...payload
    })
	}

	public delete(payload: {
    url: string,
    data: any,
		showToast?: boolean;
		header?: any
  }) {
    return this.request({
      method: 'DELETE',
      ...payload
    })
  }
}

export default BaseRequest
