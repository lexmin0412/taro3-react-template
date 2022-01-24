import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import CustomNavHeader from '@/components/navigation_header'
import { XButton } from 'taro-x-ui'
import Router from '@/utils/route'

import './index.scss'

const Index = (): JSX.Element => {
	useEffect(() => {
		console.log('process.env', process.env.TARO_ENV)
		console.log('TARO_API_BASE', TARO_API_BASE)
	}, [])

	/**
	 * 跳转demo页面
	 */
	const jumpToDemo = (demoType: 'router') => {
		switch (demoType) {
			case 'router':
				Router.navigateTo({
					url: '/demo/router/router',
				})
				break

			default:
				break
		}
	}

	return (
		<View className='index'>
			<CustomNavHeader title='首页' />
			<XButton onClick={() => jumpToDemo('router')}>路由跳转</XButton>
		</View>
	)
}

export default Index
