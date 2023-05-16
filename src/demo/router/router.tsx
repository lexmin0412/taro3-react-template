/**
 * 路由跳转
 */

import React from 'react'
import { View } from '@tarojs/components'
import { Button } from '@nutui/nutui-react-taro'
import CustomNavigationHeader from '@/components/navigation_header'

import Router from '@/utils/route'

import './router.scss'

const RouterDemo = (): JSX.Element => {
	const handleRouterTest = (
		navType: 'navigateTo' | 'redirectTo' | 'relaunch' | 'navigateBack',
		validateType?: 'noUrl' | 'invalidUrl'
	) => {
		switch (validateType) {
			case 'noUrl':
				Router.navigateTo({
					url: '',
				})
				break
			case 'invalidUrl':
				Router.navigateTo({
					url: 'demo/router/routerTarget',
				})
				break
			default:
				break
		}
		switch (navType) {
			case 'redirectTo':
				Router.redirectTo({
					url: '/demo/router/routerTarget',
					query: {
						param1: 'value1',
						param2: 'value2',
					},
				})
				break
			case 'relaunch':
				Router.relaunch({
					url: '/demo/router/routerTarget',
					query: {
						param1: 'value1',
						param2: 'value2',
					},
				})
				break
			case 'navigateBack':
				Router.navigateBack()
				break
			default:
				Router.navigateTo({
					url: '/demo/router/routerTarget',
					query: {
						param1: 'value1',
						param2: 'value2',
					},
				})
				break
		}
	}

	return (
		<View className="demo-router-page">
			<CustomNavigationHeader title="路由演示" />
			<Button  size='large' type='primary' onClick={() => handleRouterTest('navigateTo')}>navigateTo</Button>
			<Button  size='large' type='primary' onClick={() => handleRouterTest('redirectTo')}>redirectTo</Button>
			<Button  size='large' type='primary' onClick={() => handleRouterTest('relaunch')}>relanuch</Button>
			<Button  size='large' type='primary' onClick={() => handleRouterTest('navigateBack')}>navigateBack</Button>
			<Button  size='large' type='primary' onClick={() => handleRouterTest('relaunch', 'noUrl')}>url校验</Button>
			<Button  size='large' type='primary' onClick={() => handleRouterTest('relaunch', 'invalidUrl')}>relaunch</Button>
		</View>
	)
}

export default RouterDemo
