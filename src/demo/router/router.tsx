/**
 * 路由跳转
 */

import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { XButton } from 'taro-x-ui'

import Router from '~/utils/router'

import './router.scss'

/**
 * 页面 props
 */
type PageProps = {
	app: any
}

/**
 * 页面 state
 */
type PageState = {}

interface Router {
	props: PageProps
	state: PageState
}

@inject(({ store }) => ({
	app: store.app,
}))
@observer
class RouterDemo extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidShow() {}

	handleRouterTest(
		navType: 'navigateTo' | 'redirectTo' | 'relaunch' | 'navigateBack',
		validateType: 'noUrl' | 'invalidUrl'
	) {
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

	render() {
		return (
			<View className='demo-router-page'>
				<XButton onClick={this.handleRouterTest.bind(this, 'navigateTo')}>
					navigateTo
				</XButton>
				<XButton onClick={this.handleRouterTest.bind(this, 'redirectTo')}>
					redirectTo
				</XButton>
				<XButton onClick={this.handleRouterTest.bind(this, 'relanuch')}>
					relanuch
				</XButton>
				<XButton onClick={this.handleRouterTest.bind(this, 'navigateBack')}>
					navigateBack
				</XButton>
				<XButton
					onClick={this.handleRouterTest.bind(this, 'relanuch', 'noUrl')}
				>
					url校验
				</XButton>
				<XButton
					onClick={this.handleRouterTest.bind(this, 'relanuch', 'invalidUrl')}
				>
					relanuch
				</XButton>
			</View>
		)
	}
}

export default RouterDemo
