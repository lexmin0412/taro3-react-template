import React, { useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

interface RichTextRendererProps {
	/**
	 * 容器id 全局唯一
	 */
	id: string
	/**
	 * 需要渲染的字符串
	 */
	data: string
	/**
	 * 渲染类型，支持 markdown/html 默认html
	 */
	datatype?: 'markdown' | 'html'
	/**
	 * 图片点击事件
	 */
	onImageClick?: () => void
	/**
	 * 链接点击事件
	 */
	onLinkClick?: () => void
}

const RichTextRenderer: React.FC<RichTextRendererProps> = props => {
	const { id, data, onImageClick, onLinkClick } = props

	/**
	 * 给特殊元素绑定事件
	 * @param arr
	 */
	const addEventListeners = (arr: NodeListOf<any>) => {
		arr.forEach(item => {
			switch (item.h5tagName) {
				case 'img':
					item.addEventListener('tap', () => {
						if (onImageClick) {
							onImageClick(item.props.src)
						} else {
							Taro.previewImage({
								urls: [item.props.src],
							})
						}
					})
					break
				case 'a':
					item.addEventListener('tap', () => {
						if (onLinkClick) {
							onLinkClick(item.props.href)
						}
					})
				default:
					break
			}

			if (item.childNodes) {
				addEventListeners(item.childNodes)
			}
		})
	}

	useEffect(() => {
		const container = document.querySelector(`#${id}`)
		if (container && container.childNodes) {
			addEventListeners(container.childNodes)
		}
	}, [])

	return (
		<View
			id={id}
			dangerouslySetInnerHTML={{
				__html: data,
			}}
		/>
	)
}

export default RichTextRenderer
