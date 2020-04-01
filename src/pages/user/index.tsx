import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'

/**
 * 页面props
 */
type PageStateProps = {
  counter: any;
}

/**
 * 页面state
 */
type PageState = {

}

interface Index {
  props: PageStateProps;
  state: PageState;
}

@inject('counter')
@observer
class Index extends Component {
  config: Config = {
    navigationBarTitleText: '我的'
  }

  // 监听mobx状态变化
  componentWillReact () {
    console.log('componentWillReact', this.props)
  }

  componentDidMount () { }

  render () {
    const { counter: { counter } } = this.props
    return (
      <View className='index'>
        page
      </View>
    )
  }
}

export default Index  as ComponentType
