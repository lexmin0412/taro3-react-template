import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import MobileService from '~/services/apisJuhe/mobile.service'
import './index.scss'

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

type PageState = {
  testState: string;
  phoneNumber: string;  // 手机号
  mobileText: string;  // 手机号归属地展示文字
}

interface Index {
  props: PageStateProps;
  state: PageState;
}

@inject('counterStore')
@observer
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  state = {
    testState: '1212',
    phoneNumber: '',
    mobileText: '',
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact', this.props)
  }

  componentDidMount() {
    console.log('APP_CONF', APP_CONF)
  }

  componentWillUnmount() {}

  componentDidShow() { }

  componentDidHide() { }

  increment = () => {
    const { testState } = this.state
    this.setState({
      testState: `${this.state.testState}expand`
    })
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  // 手机号输入
  handleInput(type, e) {
    this.setState({
      phoneNumber: e.detail.value
    })
  }

  // 查询手机号归属地
  async queryMobile() {
    console.log('into handleSearchBtnclick')
    const { phoneNumber } = this.state
    let result = await MobileService.queryMobile({
      phoneNumber
    })
    const { data } = result
    this.setState({
      mobileText: `${data.province}${data.city}${data.company}`
    })
  }

  render() {
    const { counterStore: { counter } } = this.props
    const { testState, mobileText } = this.state
    return (
      <View className='index'>
        <Input onInput={this.handleInput.bind(this, 'mobile')} type="number" placeholder="请输入手机号" />
        <Button onClick={this.queryMobile.bind(this)}>查询手机号归属地</Button>
        <View>归属地：{mobileText}</View>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Button onClick={this.incrementAsync}>{testState}</Button>
        <Text>{counter}</Text>
      </View>
    )
  }
}

export default Index as ComponentType
