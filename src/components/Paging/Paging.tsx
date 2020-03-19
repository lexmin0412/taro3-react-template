/**
  * 分页组件
  */

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './Paging.scss'

/**
 * props属性
 */
interface IProps {
  /**
   * 是否还有更多数据
   */
  hasMore: boolean;
  /**
   * 是否展示分页提示
   */
  showPaging: boolean;
}

/**
 * 组件内部属性
 */
interface IState {

}

export default class Paging extends Component<IProps, IState> {

  static defaultProps: IProps = {
    hasMore: false,
    showPaging: false
  }

  render () {
    const { hasMore, showPaging } = this.props
    console.log('hasMore, showPaging', hasMore, showPaging)
    return (
      showPaging &&
      <View className="Paging-comp">
        {
          hasMore ?
          <View className="load-more">
          正在加载更多...
          </View>
          :
          <View className="load-finished">
          —— 我是有底线的 ——
          </View>
        }
      </View>
    )
  }
}
