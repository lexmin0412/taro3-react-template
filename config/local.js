const config = {
	h5: {
		devServer: {
			port: '9001',
			open: false,
			https: false,
			proxy: {
				'/api': {
					target: 'https://api.cellerchan.top',
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
