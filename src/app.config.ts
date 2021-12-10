export default {
	pages: ['index/index'],
	subpackages: [
		{
			root: 'demo',
			pages: ['router/router', 'router/routerTarget'],
		},
		{
			root: 'default',
			pages: ['404'],
		},
	],
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#fff',
		navigationBarTitleText: 'WeChat',
		navigationBarTextStyle: 'black',
	},
}
