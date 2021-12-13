export default {
	pages: ['index/index', 'demo/router/router'],
	subpackages: [
		{
			root: 'default',
			pages: ['404'],
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
				pagePath: 'demo/router/router',
				text: '路由演示',
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
