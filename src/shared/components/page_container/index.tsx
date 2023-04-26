import React from 'react'
import { View } from '@tarojs/components'
import NavHeader from '../navigation_header'

type PageContainerProps = {
	title: string
	containerClass: string
	children: React.ReactNode
}

export const PageContainer = (props: PageContainerProps): JSX.Element => {
	const { title, containerClass, children } = props
	return (
		<View className={containerClass}>
			<NavHeader title={title} />
			{children}
		</View>
	)
}

export default PageContainer
