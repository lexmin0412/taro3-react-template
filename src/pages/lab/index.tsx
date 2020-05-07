import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtNoticebar, AtTag } from 'taro-ui'

import TImage from '~/components/TImage/TImage'
import QQMapWSService from '~/services/qqMap/ws.service'
import LianouService from '~/services/hydee/lianou.service'
import Toast from '~/utils/toast'
import './index.scss'

type PageStateProps = {
  counter: {
    counter: number
    increment: Function
    decrement: Function
    incrementAsync: Function
  }
}

type PageState = {
  testState: string
  phoneNumber: string  // 手机号
  mobileText: string  // 手机号归属地展示文字
}

interface Index {
  props: PageStateProps
  state: PageState
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

  async handleJSONPTest() {
    const result = await QQMapWSService.geocoder({
      location: `28.2532,112.87887`,
      get_poi: 0,
    })
    console.log('result', result)
  }

  async handleProxyText() {
    const result = await LianouService.queryDiseaseByDrugName({
      ComName: '阿莫西林胶囊'
    })
    console.log('result', result)
  }

  handleCustomRoute() {
    console.error('into handleCustomRoute')
    // Taro.switchTab({
    //   url: '/pages/index/index'
    // })
    Taro.switchTab({
      url: '/pages/lab/index'
    })
  }

  hanldeCompTest(type) {
    Taro.navigateTo({
      url: `/pages/lab/comp?type=${type}`
    })
  }

  handleFormValidate() {
    Taro.navigateTo({
      url: `/pages/lab/FormValidate`
    })
  }

  render() {
    return (
      <View className='index'>
        <AtNoticebar>taro-ui组件演示：通告栏</AtNoticebar>
        <AtTag size='small'>taro-ui组件演示：标签</AtTag>
        <Button onClick={this.handleJSONPTest.bind(this)}
          className='button-jsonp'
        >
          jsonp 演示
        </Button>
        <Button onClick={this.handleProxyText.bind(this)}>
          本地代理 演示
        </Button>
        <Button onClick={this.handleCustomRoute.bind(this)}>
          自定义路由 演示
        </Button>
        <Button onClick={this.handleCustomRoute.bind(this)}
          className='sass-test'
        >
          sass文件全局注册 演示
        </Button>
        <Button className='iconfont-test iconfont down'>
          iconfont 演示
          <Text>&#xe63d;</Text>
        </Button>
        <Button onClick={this.hanldeCompTest.bind(this, 'image')}>图片组件演示</Button>
        <Button onClick={this.hanldeCompTest.bind(this, 'card')}>卡片组件演示</Button>
        <Button onClick={this.hanldeCompTest.bind(this, 'default')}>缺省组件演示</Button>
        <Button onClick={this.hanldeCompTest.bind(this, 'paging')}>分页组件演示</Button>
        <Button onClick={this.hanldeCompTest.bind(this, 'modal')}>弹窗组件演示</Button>
        <Button onClick={this.hanldeCompTest.bind(this, 'button')}>按钮组件演示</Button>
        <Button onClick={this.hanldeCompTest.bind(this, 'countdown')}>倒计时组件演示</Button>
        <Button onClick={this.hanldeCompTest.bind(this, 'imgUploader')}>图片上传组件演示</Button>
        <Button onClick={this.hanldeCompTest.bind(this, 'formValidate')}>表单验证演示</Button>
        <Button onClick={this.hanldeCompTest.bind(this, 'tabs')}>tab标签页演示</Button>
      </View>
    )
  }
}

export default Index as ComponentType
