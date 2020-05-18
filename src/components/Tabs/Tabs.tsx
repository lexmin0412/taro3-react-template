/**
  * tab标签页
  * TODO 底部边框要做平滑过渡动画
  */

import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

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
   * 初始选中的tab id
   */
  initTab: number;
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
  onChange: (e: any)=>void
}

/**
 * 组件内部属性
 */
interface IState {
  /**
   * 选中的tabId
   */
  curTab: number;
}

interface Tabs {
  props: IProps;
  state: IState;
}

class Tabs extends Component {

  constructor(props) {
    super(props)
    this.state = {
      curTab: 1,
    }
  }

  static defaultProps: IProps = {
    initTab: 1,
    list: [
      {
        text: '文字',
        id: 1
      }
    ],
    onChange: ()=>{}
  }

  componentWillMount() {
    if ( this.props.initTab ) {
      this.setState({
        curTab: this.props.initTab
      })
    }
  }

  /**
   * tab切换
   */
  handleTabItemClick(e) {
    console.log('e', e)
    this.setState({
      curTab: e.id
    })
    this.props.onChange && this.props.onChange(e)
  }

  render () {
    const { list } = this.props
    const { curTab } = this.state
    return (
      <View className="tabs-comp">
        {
          list.map((item,index)=>{
            return (
              <View className={`tabs-comp-item ${curTab === item.id ? 'selected' : ''}`}
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
