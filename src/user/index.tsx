/**
 * 个人中心页面
 */

import React from 'react'
import { View } from '@tarojs/components'
import PageContainer from '@/components/page_container'

import './index.scss'

const UserIndex = (): JSX.Element => {
	return (
		<PageContainer title='个人中心' containerClass='user-index-page'>
			<View className='user-index-content'>
				I&apos;m Lexmin, a FrontEnd Engineer.
			</View>
		</PageContainer>
	)
}

export default UserIndex
