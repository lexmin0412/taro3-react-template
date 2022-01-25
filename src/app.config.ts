export default defineAppConfig({
	entryPagePath: 'index/index',
	pages: ['index/index', 'user/index'],
	subpackages: [
		{
			root: 'default',
			pages: ['404'],
		},
		{
			root: 'demo',
			pages: ['router/router', 'router/routerTarget'],
		},
		{
			root: 'webview',
			pages: ['index'],
		},
	],
	tabBar: {
		custom: true,
		list: [
			{
				pagePath: 'index/index',
				text: '首页',
				iconPath: './_resources/assets/icons/home.png',
				selectedIconPath: './_resources/assets/icons/home_selected.png',
			},
			{
				pagePath: 'user/index',
				text: '我的',
				iconPath: './_resources/assets/icons/user.png',
				selectedIconPath: './_resources/assets/icons/user_selected.png',
			},
		],
	},
	window: {
		navigationStyle: 'custom',
	},
	// 页面切换动画
	animation: {
		duration: 196, // 动画切换时间，单位毫秒
		delay: 50, // 切换延迟时间，单位毫秒
	},
})
