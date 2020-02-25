import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { ComponentClass } from 'react';

import Line from '~/components/Line'
import { IPageOwnProps, IPageState, IProps } from './index.itf'
import MobileService from '~/services/apisJuhe/mobile.service'
import WeatherService from '~/services/apisJuhe/weather.service'

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

	state = {
		phoneNumber: '',
		mobileText: '',
		weatherText: '',  // 天气预报文字
	}

  componentWillMount() { }

  componentDidMount() {

  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

	/**
	 * 查询手机号码归属地
	 */
	async queryMobile(phoneNumber: number|string) {
		let { data } = await MobileService.queryMobile({
			phoneNumber
		})
		this.setState({
			mobileText: `${data.province}${data.city}${data.company}`
		})
		console.log('查手机号归属地结果', data)
	}

	/**
	 * 手机号输入
	 */
	handleMobileInput = (e) => {
		this.setState({
			phoneNumber: e.detail.value
		})
	}

	/**
	 * 查询按钮点击
	 */
	handleSearchBtnClick = () => {
		console.log('into handleSearchBtnclick')
		const { phoneNumber } = this.state
		this.queryMobile(phoneNumber)
	}

	/**
	 * 查询天气预报
	 */
	async queryWeather() {
		WeatherService.queryWeather({
			city: '长沙'
		}).then((res)=>{
			console.log('长沙天气预报结果', res)
		}).catch(err=>{
			console.error('长沙天气预报结果', err)
		})
	}

  render() {
    const { exbitionData } = this.props.home
		const { loading } = this.props
		const { mobileText, phoneNumber, weatherText } = this.state
    console.log('exhibitionData', exbitionData, this.props)
    return (
      <View className='home-index-page'>
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
        <Line height={1} color="#ff4a4a" />

				<Text>查询手机号归属地</Text>
				<Input type="number" onInput={this.handleMobileInput.bind(this)} placeholder="请输入手机号" />
				<View onClick={this.handleSearchBtnClick.bind(this)}>点击查询</View>
				{
					mobileText &&
					<View>
						查询结果：手机号{phoneNumber}的归属地为{mobileText}
					</View>
				}
				<View onClick={this.queryWeather.bind(this)}>
					点击查询天气预报
				</View>
				<View>
					天气预报：{weatherText}
				</View>
      </View>
    )
  }
}

export default Index as ComponentClass<IPageOwnProps, IPageState>;
