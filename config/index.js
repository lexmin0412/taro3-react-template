const path = require('path')
const plugins = require('./plugins')

const config = {
	projectName: 'taro3-react-template',
	date: '2021-12-10',
	designWidth: 750,
	deviceRatio: {
		640: 2.34 / 2,
		750: 1,
		828: 1.81 / 2,
	},
	sourceRoot: 'src',
	outputRoot: 'dist',
	// 解析alias路径
	alias: {
		'@': path.resolve(__dirname, '..', 'src/_resources'),
	},
	plugins,
	defineConstants: {},
	copy: {
		patterns: [],
		options: {},
	},
	compiler: 'webpack5',
	framework: 'react',
	mini: {
		postcss: {
			pxtransform: {
				enable: true,
				config: {},
			},
			url: {
				enable: true,
				config: {
					limit: 1024, // 设定转换尺寸上限
				},
			},
			cssModules: {
				enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
				config: {
					namingPattern: 'module', // 转换模式，取值为 global/module
					generateScopedName: '[name]__[local]___[hash:base64:5]',
				},
			},
		},
	},
	h5: {
		publicPath: '/taro3-react-template',
		staticDirectory: 'static',
		router: {
			mode: 'browser', // 使用history模式
			basename: '',
		},
		postcss: {
			autoprefixer: {
				enable: true,
				config: {},
			},
			cssModules: {
				enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
				config: {
					namingPattern: 'module', // 转换模式，取值为 global/module
					generateScopedName: '[name]__[local]___[hash:base64:5]',
				},
			},
		},
	},
}

module.exports = function (merge) {
	// 如果是本地调试 则合并开发变量
	if (process.env.NODE_ENV === 'development') {
		return merge({}, config, require('./local'))
	}
	return config
}
