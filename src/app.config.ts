export default {
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
			},
			{
				pagePath: 'user/index',
				text: '我的',
			},
		],
	},
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#fff',
		navigationBarTitleText: 'WeChat',
		navigationBarTextStyle: 'black',
	},
}
