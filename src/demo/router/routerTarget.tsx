/**
 * 路由目标页面
 */

import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import './routerTarget.scss'

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

interface RouterTarget {
	props: PageProps
	state: PageState
}

@inject(({ store }) => ({
	app: store.app,
}))
@observer
class RouterTarget extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidShow() {}

	render() {
		return (
			<View className='demoRouter-routerTarget-page'>
				<View>路由目标页面</View>
			</View>
		)
	}
}

export default RouterTarget
