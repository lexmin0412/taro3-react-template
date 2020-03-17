const wtils = require('wtils')

/**
 * taro组件模版
 * @param {string} fileName 文件名
 * @param {string} desc 文件描述
 */



const echoCompTpl = (fileName, desc) => {
  return `/**
  * ${desc}
  */

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './${fileName}.scss'

/**
 * props属性
 */
interface IProps {

}

/**
 * 组件内部属性
 */
interface IState {

}

export default class ${wtils.transFirstLetterToUpper(fileName)} extends Component<IProps, IState> {

  render () {
    return (
      <View className="${fileName}-comp">
        ${desc}
      </View>
    )
  }
}`
}

module.exports = echoCompTpl
