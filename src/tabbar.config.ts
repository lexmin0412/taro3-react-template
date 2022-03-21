const tabbarConfig = {
	custom: true,
	selectedColor: '#FF0000',
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
}

module.exports = tabbarConfig
