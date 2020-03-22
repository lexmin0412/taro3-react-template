import Toast from '~/utils/toast'
import IDCard from '~/utils/idcard'

/**
 * 表单验证类
 */
class FormValidator {
  constructor() { }

  /**
   * 验证函数列表
   */
  funcs = {
    /**
     * 非空验证
     */
    NOT_EMPTY: val => val,
    /**
     * 手机号验证
     */
    MOBILE: (value: any) => /^1[23456789]\d{9}$/.test(value),
    /**
     * 身份证合法验证
     */
    IDCARD: value => IDCard.getIDCardInfo(value).isValid
  }

  /**
   * 表单验证方法
   * @param rules 验证规则数组
   * @param showToast 是否弹出错误信息
   */
  validate(rules: {
    [key: string]: Array<{
      /**
       * 验证规则
       */
      test: Function;
      /**
       * 错误信息
       */
      errMsg: string;
    }>
  }, showToast: boolean, obj: any): {
    /**
     * 是否验证通过
     */
    success: boolean;
    /**
     * 错误信息
     */
    errMsg: string;
    /**
     * 获取到的表单数据对象 验证通过时返回
     */
    formData?: any;
  } {
    console.log('进入验证方法', rules)

    if (!obj) {
      console.error('请传入需要进行表单验证的对象')
      return {
        success: false,
        errMsg: `参数缺失，obj：${obj}`
      }
    }

    let returnObj = {
      success: true,
      errMsg: 'ok',
      formData: {}
    }
    for (const key in rules) {
      if (rules.hasOwnProperty(key)) {
        const element = rules[key];

        console.log('each item', element)

        let tempErrMsg = ''
        element.forEach((item,index)=>{
          if (item.test(obj[key])) {
            console.log('test success')
            returnObj.formData[key] = obj[key]
          } else {
            console.log('表单验证失败', item.errMsg)
            if (showToast) {
              Toast.error(item.errMsg)
            }
            tempErrMsg = item.errMsg
            throw new Error(item.errMsg);
          }
        })
        if ( tempErrMsg ) {
          return {
            success: false,
            errMsg: tempErrMsg
          }
        }
      }
    }
    console.log('test all success', returnObj)
    return returnObj
  }
}

export default new FormValidator()
