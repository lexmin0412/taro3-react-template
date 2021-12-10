/**
 * 404页面
 */

import React from 'react'
import { View } from '@tarojs/components'

import './404.scss'

const NotFound = (): JSX.Element => {
	return (
		<View className='common-notFound-page'>
			<View>404页面</View>
		</View>
	)
}

export default NotFound
