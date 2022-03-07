import React, { useEffect } from 'react'
import PageContainer from '@/components/page_container'
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
		<PageContainer title='首页' containerClass='index'>
			<XButton onClick={() => jumpToDemo('router')}>路由跳转</XButton>
		</PageContainer>
	)
}

export default Index
