/**
 * 组件演示
 */

import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import { Card, TImage, Nodata } from '~/components'

import { PageStateProps, PageState } from './comp'
import './comp.scss'

interface Comp {
  props: PageStateProps;
  state: PageState;
}

@inject('counterStore')
@observer
class Comp extends Component {
  config: Config = {
    navigationBarTitleText: '组件演示'
  }

  // 监听mobx状态变化
  componentWillReact () {
    console.log('componentWillReact', this.props)
  }

  componentWillMount () {
    this.setState({
      type: this.$router.params.type
    })
  }

  render () {
    const { type } = this.state
    const imageList = ['https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584433500&di=b0d1428f12e1cdea17f4d8e667298aad&src=http://cdn2.image.apk.gfan.com/asdf/PImages/2014/12/26/211610_2d6bc9db3-77eb-4d80-9330-cd5e95fa091f.png',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584537201012&di=50279a8b6a931992f1610cac5653c469&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf233e9732cb27eca8064388ffc.jpg',
    'https://ss0.bd2sdsdfsdtatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584433500&di=b0d1428f12e1cdea17f4d8e667298aad&src=http://cdn2.image.apk.gfan.com/asdf/PImages/2014/12/26/211610_2d6bc9db3-77eb-4d80-9330-cd5e95fa091f.png']
    return (
      <View className='comp-page'>
        <View className="comp-page-title">组件演示</View>
        {
          type === 'image' &&
          <View className="demo-page-item">
            图片组件
            {
              imageList.map((item,index)=>{
                return (
                  <TImage src={item}
                    canPreview={true}
                    previewConfig={{
                      urls: imageList,
                      current: index,
                    }}
                    width={150}
                    height={150}
                    showLoading={true}
                  />
                )
              })
            }
          </View>
        }
        {
          type === 'card' &&
          <View className="demo-page-item">
            卡片组件
            {
              imageList.map((item,index)=>{
                return (
                  <Card customStyle={{
                    borderRadius: 20,
                    hSpace: 20,
                    vSpace: 20,
                    padding: 20
                  }}>
                    卡片
                  </Card>
                )
              })
            }
          </View>
        }

{
          type === 'default' &&
          <View className="demo-page-item">
            缺省组件
            <Nodata />
          </View>
        }
      </View>
    )
  }
}

export default Comp as ComponentType
