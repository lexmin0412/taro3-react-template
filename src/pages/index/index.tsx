import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { XButton } from 'taro-x-ui'

import toast from '~/utils/toast'
import Router from '~/utils/router'
import DrugService from '~/services/root/drug.service'

import './index.scss'

type PageStateProps = {
	app: {
		counter: number
		increment: Function
		decrement: Function
		incrementAsync: Function
	}
}

interface Index {
	props: PageStateProps
}

@inject(({ store }) => ({
	app: store.app,
}))
@observer
class Index extends Component {
	componentWillMount() {}

	componentDidMount() {
		console.log('process.env.APP_CONF', APP_CONF)
		// this.queryData()
		// this.asyncQueryData()
	}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	/**
	 * request请求测试
	 */
	queryData() {
		toast.loading('')
		DrugService.queryDiseaseByDrugName({
			ComName: '阿莫西林',
		})
			.then(res => {
				console.log('res', res)
			})
			.catch(err => {
				console.error('err', err)
			})
		setTimeout(() => {
			toast.info('请求成功')
		}, 2000)
	}

	/**
	 * async/await测试
	 */
	async asyncQueryData() {
		const result = await DrugService.queryDiseaseByDrugName({
			ComName: '阿莫西林',
		})
		console.log('页面async/await 请求结果', result)
	}

	increment = () => {
		const { app } = this.props
		app.increment()
	}

	decrement = () => {
		const { app } = this.props
		app.decrement()
	}

	incrementAsync = () => {
		const { app } = this.props
		app.incrementAsync()
	}

	/**
	 * 跳转demo页面
	 */
	jumpToDemo(demoType: 'router') {
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

	render() {
		const {
			app: { counter },
		} = this.props
		return (
			<View className='index'>
				<Button onClick={this.increment}>+</Button>
				<Button onClick={this.decrement}>-</Button>
				<Button onClick={this.incrementAsync}>Add Async1111</Button>
				<Text className='test'>{counter}</Text>
				<XButton onClick={this.jumpToDemo.bind(this, 'router')}>
					路由跳转
				</XButton>
			</View>
		)
	}
}

export default Index
