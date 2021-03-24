import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import store from './store'
import Router from '~/utils/router'

import './app.scss'

class App extends Component {
	componentDidMount() {}

	componentDidShow() {}

	componentDidHide() {}

	componentDidCatchError() {}

	// 页面404处理
	onPageNotFound(object) {
		console.log('on page not found', object)
		Router.redirectTo({
			url: '/common/notFound',
		})
	}

	// this.props.children 就是要渲染的页面
	render() {
		return <Provider store={store}>{this.props.children}</Provider>
	}
}

export default App
