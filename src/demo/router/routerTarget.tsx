/**
 * 路由目标页面
 */

import React from 'react'
import { View } from '@tarojs/components'
import CustomNavigationHeader from '@/components/navigation_header'

import './routerTarget.scss'

const RouterTarget = (): JSX.Element => {
	return (
		<View className='demoRouter-routerTarget-page'>
			<CustomNavigationHeader title='路由目标页' />
			<View>路由目标页面</View>
		</View>
	)
}

export default RouterTarget
