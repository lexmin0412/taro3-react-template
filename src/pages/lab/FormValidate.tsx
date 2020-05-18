/**
 * 表单验证测试
 */

import { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Button, Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import toast from '~/utils/toast'
import Meta from '~/utils/meta'

import './FormValidate.scss'

/**
 * 页面props
 */
type PageStateProps = {
  /**
   * 子元素
   */
  children?: any
}

/**
 * 页面state
 */
type PageState = {
  /**
   * 电话
   */
  phone: string
  /**
   * 地址
   */
  address: string
}

interface FormValidate {
  props: PageStateProps
  state: PageState
  FormValidator: any
}

@inject('counter')
@observer
class FormValidate extends Component {

  constructor(props) {
    super(props)
    Meta._setTitle('表单验证测试')
    this.state = {
      phone: '',
      address: ''
    }
  }

  // 监听mobx状态变化
  componentWillReact() {
    console.log('componentWillReact', this.props)
  }

  /**
   * 表单验证
   */
  handleValidate() {
    const funcs = this._validator.funcs
    const validResult = this._validator.validate({
      phone: [
        {
          errMsg: '请输入手机号',
          test: funcs.NOT_EMPTY
        },
        {
          errMsg: '请输入正确长度的手机号',
          test: val => val.length === 11
        },
      ],
      address: [
        {
          errMsg: '请输入地址',
          test: funcs.NOT_EMPTY
        }
      ]
    }, true, this.state)
    if (validResult.success) {
      toast.show('验证成功')
    } else {
      console.error('validResult', validResult)
    }
  }

  handleInput(type, e) {
    this.setState({
      [type]: e.detail.value
    })
  }

  render() {
    return (
      <View className='FormValidate-page'>
        <View>表单验证测试</View>
        <Button onClick={this.handleValidate.bind(this)}>验证</Button>
        <Input type='number' placeholder='请输入手机号' onInput={this.handleInput.bind(this, 'phone')} />
        <Input type='text' placeholder='请输入地址' onInput={this.handleInput.bind(this, 'address')} />
      </View>
    )
  }
}

export default FormValidate as ComponentType
