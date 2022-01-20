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
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#fff',
		navigationBarTitleText: 'WeChat',
		navigationBarTextStyle: 'black',
	},
})
