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

import { ComponentType } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import BaseComponent from '~/components/BaseComponent/baseComponent'

import './${fileName}.scss'

/**
 * props属性
 */
interface IProps {
  /**
   * 子元素
   */
  children?: any;
}

/**
 * 组件内部属性
 */
interface IState {

}

interface ${wtils.transFirstLetterToUpper(fileName)} {
  props: IProps;
  state: IState;
}

class ${wtils.transFirstLetterToUpper(fileName)} extends BaseComponent {

  static defaultProps: IProps = {

  }

  render () {
    return (
      <View className="${fileName}-comp">
        ${desc}
      </View>
    )
  }
}

export default ${wtils.transFirstLetterToUpper(fileName)} as ComponentType`
}

module.exports = echoCompTpl
