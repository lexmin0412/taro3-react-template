const config = {
	defineConstants: {
		TARO_API_BASE: JSON.stringify(
			process.env.TARO_ENV === 'weapp' ? 'https://m.test.xxx.cn/api' : '/api'
		), // h5本地调试时接口使用代理 指向需要请求的后端服务
	},
	h5: {
		devServer: {
			port: '9001',
			open: false,
			https: true,
			proxy: {
				'/api': {
					target: 'https://m.test.xxx.com',
					changeOrigin: true,
					ws: false,
					pathRewrite: {
						'^/api': ``,
					},
				},
			},
		},
	},
}

module.exports = config
