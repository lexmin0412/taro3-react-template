import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { ComponentClass } from 'react';
import Toast from '~/utils/toast'

import request from '~/utils/request'
import MicangPhpService from '~/services/php/micang.php.service'
import './index.scss'

/**
 * IPageStateProps
 */
interface IPageStateProps {
  home: {
    exbitionData: {

    }
  },
  loading: {
    global: boolean;
  };
}

/**
 * 定义dispatch
 */
interface IPageDispatchProps {
  dispatch: (arg0: any) => any;
}

/**
 * 界面属性定义
 */
interface IPageOwnProps { }

/**
 * 界面状态定义
 */
interface IPageState { }

/**
 * IProps
 */
type IProps = IPageStateProps & IPageDispatchProps & IPageOwnProps;

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
      </View>
    )
  }
}

export default Index as ComponentClass<IPageOwnProps, IPageState>;
