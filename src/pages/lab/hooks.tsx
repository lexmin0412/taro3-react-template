import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './hooks.scss'

type PageStateProps = {
  counter: {
    counter: number
    increment: Function
    decrement: Function
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps
}

const Index = () => (
  <View className='index'>
    <Button onClick={this.increment}>设置</Button>
    <Button onClick={this.increment}>嘿嘿</Button>
  </View>
)


export default Index  as ComponentType
