const pages = require('./pages.js')
const subPackages = require('./subPackages.js')

export default {
	pages: pages,
	subPackages,
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#fff',
		navigationBarTitleText: 'WeChat',
		navigationBarTextStyle: 'black',
	},
}
