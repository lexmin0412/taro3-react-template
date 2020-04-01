/**
  * tab标签页
  */

import { ComponentClass } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import { BaseComponent } from '~/components'

import './Tabs.scss'

/**
 * props属性
 */
interface IProps {
  /**
   * 子元素
   */
  children?: any;
  /**
   * tab数组
   */
  list: Array<{
    /**
     * 标签文字
     */
    text: string;
    /**
     * 标签id
     */
    id: number;
  }>
  /**
   * tab切换事件
   */
  onChange: ()=>void
}

/**
 * 组件内部属性
 */
interface IState {

}

interface Tabs {
  props: IProps;
  state: IState;
}

class Tabs extends BaseComponent {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  static defaultProps: IProps = {
    list: [
      {
        text: '文字',
        id: 1
      }
    ],
    onChange: ()=>{}
  }

  /**
   * tab切换
   */
  handleTabItemClick(e) {
    console.log('e', e)
    this.props.onChange && this.props.onChange()
  }

  render () {
    const { list } = this.props
    return (
      <View className="tabs-comp">
        tab标签页
        {
          list.map((item,index)=>{
            return (
              <View className="tabs-comp-item"
                onClick={this.handleTabItemClick.bind(this, item)}
              >
                {item.text}
              </View>
            )
          })
        }
      </View>
    )
  }
}

export default Tabs as ComponentClass<IProps, IState>
