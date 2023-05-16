const plugins = [
	'@tarojs/plugin-html'
]

if (process.env.TARO_ENV === 'weapp') {
	plugins.push('taro-plugin-compiler-optimization')
}
plugins.push('taro-plugin-dotenv') // 注入.env环境变量

module.exports = plugins
