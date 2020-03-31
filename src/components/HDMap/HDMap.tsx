/**
  * 地图组件
  */

import { ComponentClass, Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Picker, Button } from '@tarojs/components'
import { AtModal, AtModalContent } from 'taro-ui'

import { BaseComponent, Modal } from '~/components'
import { loadScriptSync } from '~/utils/index'

import './../../../node_modules/taro-ui/dist/style/components/modal.scss'
import './HDMap.scss'

/**
 * props属性
 */
interface IProps {
  /**
   * 子元素
   */
  children?: any;
  /**
   * 地图类型
   */
  type?: 'normal' | 'webgl';
  /**
   * 地图容器id
   */
  mapContainerId: string;
  /**
   * 地图中心点
   */
  center: {
    /**
     * 纬度
     */
    latitude: number;
    /**
     * 经度
     */
    longitude: number;
  },
  markers: Array<{
    position: {
      latitude: number;
      longitude: number;
    }
    properties: any;
  }>
  onMarkerClick: ()=>void
}

/**
 * 组件内部属性
 */
interface IState {

}

interface CMap {
  props: IProps;
  state: IState;
}

class CMap extends BaseComponent {

  constructor(props) {
    super(props)
    this.state = {
      timeSel: '12:01',
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <View className="Map-comp">
      </View>
    )
  }
}

export default CMap as ComponentClass<IProps, IState>
