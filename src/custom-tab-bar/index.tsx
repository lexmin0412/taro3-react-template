import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

const list = [
	{
		pagePath: '/index/index',
		text: '首页',
	},
	{
		pagePath: '/user/index',
		text: '我的',
	},
]

const app = Taro.getApp()

if (!app.globalData) {
	app.globalData = {
		currentTab: list[0].pagePath,
	}
}

const CustomTabBar = (): JSX.Element => {
	const handleSwtich = (item: any) => {
		console.log(item)
		Taro.switchTab({
			url: item.pagePath,
		})
		// 这里使用globalData的原因是每次switchTab之后都是一个新的实例，hooks会失效
		app.globalData.currentTab = item.pagePath
	}

	return (
		<View className='tabbar-container'>
			{list.map((item: any) => {
				return (
					<View
						onClick={() => handleSwtich(item)}
						key={item.pagePath}
						className={`tabbar-item ${
							item.pagePath === app.globalData.currentTab
								? 'tabbar-item-selected'
								: ''
						}`}
					>
						<View className='tabbar-item-text'>{item.text}</View>
					</View>
				)
			})}
		</View>
	)
}

export default CustomTabBar
