import React, { useEffect } from 'react'
import PageContainer from '@/components/page_container'
import { Button } from '@nutui/nutui-react-taro'
import Router from '@/utils/route'

import './index.scss'
import toast from '@/utils/toast'

const Index = (): JSX.Element => {
	useEffect(() => {
		try {
			console.log('已配置环境变量✅')
			console.log('process.env', process.env.TARO_ENV)
			console.log('TARO_API_BASE', process.env.TARO_API_BASE)
		} catch (error) {
			const msg = '读取环境变量异常，请先阅读 README.md, 配置环境变量后重新启动'
			console.error(msg)
			toast.info(msg)
		}
	}, [])

	/**
	 * 跳转demo页面
	 */
	const jumpToDemo = (demoType: 'router'|'form') => {
		let url = ''
		switch (demoType) {
			case 'router':
				url = '/demo/router/router';
				break
			case 'form':
				url = '/demo/form/form';
				break
			default:
				toast.info('不存在的 Demo 页面，请检查')
				return
		}
		Router.navigateTo({ url })
	}

	return (
		<PageContainer
			title="首页"
			containerClass="index"
		>
			<Button
				block
				size="large"
				type="primary"
				onClick={() => jumpToDemo('router')}
			>
				路由跳转
			</Button>
			<Button
				block
				size="large"
				type="primary"
				onClick={() => jumpToDemo('form')}
			>
				表单验证
			</Button>
		</PageContainer>
	)
}

export default Index
