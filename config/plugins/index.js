const plugins = []

if (process.env.TARO_ENV === 'weapp') {
	plugins.push('taro-plugin-compiler-optimization')
}

module.exports = plugins
