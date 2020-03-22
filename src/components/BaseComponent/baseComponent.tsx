/**
 * 基础组件 用于给Taro组件绑定公用方法
 */

import { Component } from '@tarojs/taro'
import Meta from '~/utils/meta'
import FormValidator from '~/utils/validator'
import Toast from '~/utils/toast'

class BaseComponent extends Component {

  constructor(props) {
    super(props)
  }

  /**
   * 设置页面标题
   * @param title 标题文字
   */
  _setTitle = Meta.setTitle;

  /**
   * 表单验证器
   */
  _validator = FormValidator;

  /**
   * toast
   */
  _toast = Toast
}

export default BaseComponent;
