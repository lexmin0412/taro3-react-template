export default {
	pages: ['pages/index/index'],
	subpackages: [
		{
			root: 'demo',
			pages: ['router/router', 'router/routerTarget'],
		},
	],
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#fff',
		navigationBarTitleText: 'WeChat',
		navigationBarTextStyle: 'black',
	},
}
