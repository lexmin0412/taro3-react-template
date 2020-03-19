/**
  * 按钮组件
  */

import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import './TButton.scss'

/**
 * props属性
 */
interface IProps {
  /**
   * 是否有外层包裹div
   */
  wrap: boolean;
  /**
   * 外层包裹盒子高度
   */
  wrapperHeight: number,
  /**
   * 按钮文字
   */
  text: string;
  /**
   * 背景颜色
   */
  backgroundColor: string;
  /**
   * 宽度 直接取设计图的px值
   */
  width: string;
  /**
   * 高度 直接取设计图的px值
   */
  height: number;
  /**
   * 圆角 直接取设计图的px值
   */
  borderRadius: number;
  /**
   * 文字颜色
   */
  color: string;
}

/**
 * 组件内部属性
 */
interface IState {

}

export default class TButton extends Component<IProps, IState> {

  static defaultProps: IProps = {
    wrap: true,
    wrapperHeight: 100,
    text: '按钮',
    backgroundColor: '#ff4a4a',
    width: '100%',
    height: 88,
    borderRadius: 44,
    color: '#fff'
  }

  render () {
    const {
      wrap, wrapperHeight, width,
      text, borderRadius, height, color, backgroundColor
    } = this.props
    const renderButton = () => {
      return (
        <Button className="TButton-comp-main"
          style={{
            borderRadius: Taro.pxTransform(borderRadius),
            width: width,
            height: Taro.pxTransform(height),
            color,
            backgroundColor
          }}
        >
          {text}
        </Button>
      )
    }
    return (
      wrap ?
      <View className="TButton-comp"
        style={{
          height: Taro.pxTransform(wrapperHeight)
        }}
      >
        {renderButton()}
      </View>
      :
      renderButton()
    )
  }
}
