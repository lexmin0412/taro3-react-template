import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import request from '~/utils/request'
import MicangPhpService from '~/services/php/micang.php.service'
import './index.scss'

export default class Index extends Component {

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

  componentWillMount () { }

  componentDidMount () {
    // MicangPhpService.getExhibition().then((res)=>{
    //   console.log('res',res)
    // }).catch((err)=>{
    //   console.log('err',err)
    // })
    this.querysfds()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 直接在页面调用service
  async querysfds () {
    console.log('MicangPhpService.getExhibition',MicangPhpService.getExhibition)
    let result = await MicangPhpService.getExhibition({
      c_type: 1,
      pageindex: 1,
      pagesize: 10
    },)
    console.log('result',result)
  }

  // 在页面调用model
  // async querysfds () {
  //   console.log('MicangPhpService.getExhibition',MicangPhpService.getExhibition)
  //   let result = await MicangPhpService.getExhibition({
  //     c_type: 1,
  //     pageindex: 1,
  //     pagesize: 10
  //   },)
  //   console.log('result',result)
  // }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
