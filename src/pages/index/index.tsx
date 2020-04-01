import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtNoticebar, AtTag } from 'taro-ui'

import QQMapWSService from '~/services/qqMap/ws.service'
import LianouService from '~/services/hydee/lianou.service'
import Toast from '~/utils/toast'
import './index.scss'

type PageStateProps = {
  counter: {
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

@inject('counter')
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

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  increment = () => {
    const { testState } = this.state
    this.setState({
      testState: `${this.state.testState}expand`
    })
    const { counter } = this.props
    counter.increment()
  }

  decrement = () => {
    const { counter } = this.props
    counter.decrement()
  }

  incrementAsync = () => {
    const { counter } = this.props
    counter.incrementAsync()
  }

  // 手机号输入
  handleInput(type, e) {
    this.setState({
      phoneNumber: e.detail.value
    })
  }

  // // 查询手机号归属地
  // async queryMobile() {
  //   console.log('into handleSearchBtnclick')
  //   const { phoneNumber } = this.state
  //   let result = await MobileService.queryMobile({
  //     phoneNumber
  //   })
  //   const { data } = result
  //   this.setState({
  //     mobileText: `${data.province}${data.city}${data.company}`
  //   })
  // }

  async handleJSONPTest() {
    let result = await QQMapWSService.geocoder({
      location: `28.2532,112.87887`,
      get_poi: 0,
    })
    console.log('result', result)
  }

  async handleProxyText() {
    let result = await LianouService.queryDiseaseByDrugName({
      ComName: '阿莫西林胶囊'
    })
    console.log('result', result)
  }

  render() {
    const { counter: { counter } } = this.props
    const { testState, mobileText } = this.state
    return (
      <View className='index'>
        <AtNoticebar>这是 NoticeBar 通告栏</AtNoticebar>
        <AtTag size='small'>标签</AtTag>
        <Input onInput={this.handleInput.bind(this, 'mobile')} type="number" placeholder="请输入手机号" />
        {/* <Button onClick={this.queryMobile.bind(this)}>查询手机号归属地</Button> */}
        {/* <View>归属地：{mobileText}</View> */}
        <Button onClick={this.handleJSONPTest.bind(this)}
          className="button-jsonp"
        >
          jsonp 测试
        </Button>
        <Button onClick={this.handleProxyText.bind(this)}>
          本地代理 测试
        </Button>
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
