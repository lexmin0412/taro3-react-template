/**
 * 个人中心页面
 */

import React from 'react'
import { View } from '@tarojs/components'
import CustomNavigationHeader from '@/components/navigation_header'

import './index.scss'

const UserIndex = (): JSX.Element => {
	return (
		<View className='user-index-page'>
			<CustomNavigationHeader title='个人中心' />
			<View className='user-index-content'>
				<View>个人中心页</View>
			</View>
		</View>
	)
}

export default UserIndex
