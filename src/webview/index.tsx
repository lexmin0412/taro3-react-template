import { useRouter } from '@tarojs/taro'
import React from 'react'
import { WebView } from '@tarojs/components'
import toast from '@/utils/toast'

type WebviewParams = {
	src: string
}

const Index = (): JSX.Element => {
	const {
		params: { src },
	} = useRouter() as { params: WebviewParams }

	if (!src) {
		toast.info('src不能为空!')
	}

	return <WebView src={src} />
}

export default Index
