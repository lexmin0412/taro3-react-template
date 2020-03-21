const wtils = require('wtils')

/**
 * taro页面模版
 * @param {string} filename 文件名
 * @param {string} desc 文件描述
 */
const echoPageTemplate = (filename, desc) => {
  return `/**
 * ${desc||'页面描述'}
 */

import { ComponentType } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import BaseComponent from '~/components/BaseComponent/baseComponent'

import './${filename}.scss'

/**
 * 页面props
 */
type PageStateProps = {
  /**
   * 子元素
   */
  children?: any;
}

/**
 * 页面state
 */
type PageState = {

}

interface ${wtils.transFirstLetterToUpper(filename)} {
  props: PageStateProps;
  state: PageState;
}

@inject('counterStore')
@observer
class ${wtils.transFirstLetterToUpper(filename)} extends BaseComponent {

  constructor(props) {
    super(props)
    this.setTitle('${desc||'页面描述'}')
    this.state = {

    }
  }

  // 监听mobx状态变化
  componentWillReact () {
    console.log('componentWillReact', this.props)
  }

  render () {
    return (
      <View className='${filename}-page'>
        <View>${desc||'页面描述'}</View>
      </View>
    )
  }
}

export default ${wtils.transFirstLetterToUpper(filename)} as ComponentType
`;
}

module.exports = echoPageTemplate
