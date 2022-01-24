/**
 * 404页面
 */

import React from 'react'
import { View } from '@tarojs/components'
import CustomNavigationHeader from '@/components/navigation_header'

import './404.scss'

const NotFound = (): JSX.Element => {
	return (
		<View className='common-notFound-page'>
			<CustomNavigationHeader title='404 Not Found' />
			<View>404页面</View>
		</View>
	)
}

export default NotFound
