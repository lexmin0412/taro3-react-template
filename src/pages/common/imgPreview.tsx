/**
 * 图片预览页面
 */

import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './imgPreview.scss'


/**
 * 页面props
 */
type PageStateProps = {

}

/**
 * 页面state
 */
type PageState = {
  current: number;
  list: Array<string>;
}

interface ImgPreview {
  props: PageStateProps;
  state: PageState;
}

@inject('counter')
@observer
class ImgPreview extends Component {
  config: Config = {
    navigationBarTitleText: '图片预览'
  }

  // 监听mobx状态变化
  componentWillReact () {
    console.log('componentWillReact', this.props)
  }

  componentWillMount () {
    document.title = '图片预览'
    const data = JSON.parse((decodeURIComponent(this.$router.params.data)))
    console.log('data', data)
    this.setState({
      list: data.list,
      current: data.current
    })
  }

  handleBackClick() {
    Taro.navigateBack()
  }

  handleSwiperClick(e) {
    this.setState({
      current: e.detail.current
    })
  }

  render () {
    const { current, list } = this.state
    return (
      list && list.length > 0 ?
      <View className='imgPreview-page'>
        <View className="img-preview-header">
          <View className="back" onClick={this.handleBackClick.bind(this)}>
            返回
          </View>
          <View className="title">{ current + 1 }/{ list.length }</View>
          <View className="right-actions"></View>
        </View>
        <Swiper
          className='img-preview-swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          current={current}
          onChange={this.handleSwiperClick.bind(this)}
        >
          {
            list && list.map((item,index)=>{
              return (
                <SwiperItem className="img-preview-swiper-item">
                  <Image src={item}
                    onClick={this.handleBackClick.bind(this)}
                    className="img-preview-ele"
                    mode="aspectFit"
                  />
                </SwiperItem>
              )
            })
          }
        </Swiper>
      </View>
      :
      null
    )
  }
}

export default ImgPreview as ComponentType
