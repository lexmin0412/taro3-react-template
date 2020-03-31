/**
 * 请求基类
 */

import Taro from '@tarojs/taro'
import Constants from '~/constants/index'
import urlInterceptor from '~/interceptors/url.interceptor'
import headerInterceptor from '~/interceptors/header.interceptor'
import paramInterceptor from '~/interceptors/param.interceptor'
import dataInterceptor from '~/interceptors/data.interceptor'
import delInterceptor from '~/interceptors/del.interceptor'

console.log('hostconfig', APP_CONF)

// 添加拦截器
const getInterceptors = () => {
  return [
    urlInterceptor,
    headerInterceptor,
    paramInterceptor,
    dataInterceptor,
    delInterceptor,
    Taro.interceptors.logInterceptor,
    Taro.interceptors.timeoutInterceptor
  ]
}
getInterceptors().forEach(interceptorItem=>Taro.addInterceptor(interceptorItem))

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
    showToast = true,
    jsonp = false,
    crossHeaderInterceptor = false,
    resType = 0
  }: IRequestConfig) {

    // 添加自定义请求头，用于host和header处理
    const hostKey = this.options ? this.options.hostKey : '';
    if ( !hostKey ) {
      throw "请指定service key";
    }
    const hostUrl = APP_CONF[hostKey]
    header[Constants.INTERCEPTOR_HEADER] = {
      hostKey,
			hostUrl,
      showToast,
      resType,
      crossHeaderInterceptor
		}

    return Taro.request({
      url,
      data,
      method,
      header,
      dataType,
      responseType,
      jsonp
    })
	}

	public get(payload: {
		url: string;
		data: any;
		showToast?: boolean;
		header?: any,
    resType?: 1 | 0,
    crossHeaderInterceptor?: boolean,
	}) {
		return this.request({
			method: 'GET',
			...payload,
		})
	}

  public post(payload: {
    url: string,
    data: any,
		showToast?: boolean;
		header?: any,
    resType?: 1 | 0,
    crossHeaderInterceptor?: boolean,
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
		header?: any,
    resType?: 1 | 0,
    crossHeaderInterceptor?: boolean,
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
		header?: any,
    resType?: 1 | 0,
    crossHeaderInterceptor?: boolean,
  }) {
    return this.request({
      method: 'DELETE',
      ...payload
    })
  }

  public jsonp(payload: {
    url: string,
    data: any,
		showToast?: boolean;
		header?: any,
    resType?: 1 | 0,
    crossHeaderInterceptor?: boolean,
  }) {
    return this.request({
      method: 'GET',
      jsonp: true,
      ...payload
    })
  }
}

export default BaseRequest
