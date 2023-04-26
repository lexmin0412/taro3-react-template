const tabbarConfig = require('./tabbar.config')

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
			pages: ['router/router', 'router/routerTarget', 'form/form'],
		},
		{
			root: 'webview',
			pages: ['index'],
		},
	],
	tabBar: tabbarConfig,
	window: {
		navigationStyle: 'custom',
	},
	// 页面切换动画
	animation: {
		duration: 196, // 动画切换时间，单位毫秒
		delay: 50, // 切换延迟时间，单位毫秒
	},
})
