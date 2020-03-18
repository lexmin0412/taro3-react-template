/**
  * 卡片组件
  */

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './Card.scss'

/**
 * props属性
 */
interface IProps {
  /**
   * 类名
   */
  className?: string;
  /**
   * 圆角 直接取设计图的px值即可
   */
  borderRadius?: number;
  /**
   * 内边距
   */
  padding?: number;
  /**
   * 与其他盒子的垂直方向外边距 即marginBottom或marginTop的值 因为同时设置会有margin合并 所以这里实际上只设置marginBottom一个值
   */
  vSpace?: number;
  /**
   * 与其他盒子的水平方向外边距 即marginLeft和marginRight的值
   */
  hSpace?: number;
  /**
   * 自定义样式
   */
  customStyle?: {
    /**
     * 圆角 直接取设计图的px值即可
     */
    borderRadius?: number;
    /**
     * 内边距
     */
    padding?: number;
    /**
     * 与其他盒子的垂直方向外边距 即marginBottom或marginTop的值 因为同时设置会有margin合并 所以这里实际上只设置marginBottom一个值
     */
    vSpace?: number;
    /**
     * 与其他盒子的水平方向外边距 即marginLeft和marginRight的值
     */
    hSpace?: number;
  }
}

/**
 * 组件内部属性
 */
interface IState {

}

export default class Card extends Component<IProps, IState> {

  static defaultProps: IProps = {
    className: '',
    borderRadius: 16,
    padding: 12,
    hSpace: 20,
    vSpace: 20,
    customStyle: {
      borderRadius: 16,
      padding: 12,
      hSpace: 20,
      vSpace: 20,
    },
  }

  render () {
    console.log('this.props', this.props)
    const { children, customStyle, className, borderRadius, padding, vSpace, hSpace } = this.props
    return (
      <View className={`Card-comp ${className||''}`}
        style={{
          borderRadius: customStyle.borderRadius ? Taro.pxTransform(customStyle.borderRadius):borderRadius,
          padding: customStyle.padding ? Taro.pxTransform(customStyle.padding):padding,
          margin: `0 ${Taro.pxTransform(customStyle.hSpace||hSpace)} ${Taro.pxTransform(customStyle.vSpace||vSpace)}`
        }}
      >
        {children}
      </View>
    )
  }
}
