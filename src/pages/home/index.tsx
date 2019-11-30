import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { ComponentClass } from 'react';
import { WImage } from 'taro-cui'

import Line from '~/components/Line'
import Toast from '~/utils/toast'
import { IPageOwnProps, IPageState, IProps } from './index.itf'
import MicangPhpService from '~/services/php/micang.php.service'

import './index.scss'

/**
 * Index
 */
interface Index {
  props: IProps;
}

@connect(({ home, loading }) => {
  return { home, loading };
})
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

  componentWillMount() { }

  componentDidMount() {
    // MicangPhpService.getExhibition().then((res)=>{
    //   console.log('res',res)
    // }).catch((err)=>{
    //   console.log('err',err)
    // })
    this.queryExhibitionData()
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  // 直接在页面调用service
  // async queryExhibitionData () {
  //   console.log('MicangPhpService.getExhibition',MicangPhpService.getExhibition)
  //   let result = await MicangPhpService.getExhibition({
  //     c_type: 1,
  //     pageindex: 1,
  //     pagesize: 10
  //   },)
  //   console.log('result',result)
  // }

  // 在页面调用model
  async queryExhibitionData() {
    Toast.loading('加载中...')
    console.log('this.props', this.props)
    this.props.dispatch({
      type: 'home/getExhibition',
      payload: {
        c_type: 1,
        pageindex: 1,
        pagesize: 10
      }
    }).then((res)=>{
      console.log('res model from page',res)
      Toast.hideLoading()
    })
  }

  render() {
    const { exbitionData } = this.props.home
    const { loading } = this.props
    console.log('exhibitionData', exbitionData, this.props)
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        {
          loading.global ?
          <View>loading...</View>
          :
          exbitionData.exhibition_list && exbitionData.exhibition_list.map((item,index)=>{
            return (
              <View>{item.now_time_str}</View>
            )
          })
        }
        <Line height={1} color="#45aafa" />
        <WImage type="goods" src="https://xxx.weilingdi.com" />
      </View>
    )
  }
}

export default Index as ComponentClass<IPageOwnProps, IPageState>;
