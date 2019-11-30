import { SUCC_LIST, LOGIN_FAILURE_LIST } from '~/constants/code'

export default function(chain) {
  console.log('enter data interceptor', chain)
  const requestParams = chain.requestParams
  return chain
    .proceed(requestParams)
    .then((res)=>{
      console.log('data interceptor res',res)

      // 先判断状态码
      if ( res.statusCode !== 200 ) {
        // 错误处理
        throw `状态码: ${res.statusCode}`;
      }

      let resultData = res.data

      // 状态码为200时的错误处理
      // 这里主要是兼容多后台返回结果格式不规范以及后台框架设计存在问题的情况
      // 1. 返回状态码200 但返回结果是空字符串 在浏览器调试工具中查看不到任何信息
      if ( !resultData ) {
        throw `返回数据为空：${resultData}`;
      }
      // 2. 统一返回格式
      // code 返回编码 强转字符串
      // msg 错误信息字符串 一般用于前端错误展示
      // data 返回数据
      resultData.code = resultData.code.toString()
      // 3. 接口返回错误code时前端错误抛出
      if ( !SUCC_LIST.includes(resultData.code) ) {
        Taro.showToast({
          icon: 'none',
          duration: 1200,
          title: `${resultData.code}:${resultData.msg}`,
          mask: true
        })
      }
      // 4. 登录失效前端逻辑处理
      if ( LOGIN_FAILURE_LIST.includes(resultData.code) ) {
        // 这里处理登录失效逻辑，如跳转登录页面
        return
      }

      return Promise.resolve(res.data)
    })
    .catch((err)=>{
      Taro.showToast({
        title: JSON.stringify(err),
        duration: 1200,
        mask: true,
        icon: 'none'
      })
      return Promise.reject(err)
    })
}
