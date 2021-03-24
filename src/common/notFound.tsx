/**
 * 404页面
 */

import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import './notFound.scss'

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

interface NotFound {
	props: PageProps
	state: PageState
}

@inject(({ store }) => ({
	app: store.app,
}))
@observer
class NotFound extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidShow() {}

	render() {
		return (
			<View className='common-notFound-page'>
				<View>404页面</View>
			</View>
		)
	}
}

export default NotFound
