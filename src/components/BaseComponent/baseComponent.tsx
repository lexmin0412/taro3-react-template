/**
 * 基础组件 用于给Taro组件绑定公用方法
 */

import { Component } from '@tarojs/taro'
import Meta from '~/utils/meta'

class BaseComponent extends Component {

  constructor(props) {
    super(props)
  }

  /**
   * 设置页面标题
   * @param title 标题文字
   */
  setTitle = Meta.setTitle
}

export default BaseComponent;
