/**
 * 开启微信开发者工具预览小程序
 */
const automator = require('miniprogram-automator')
const fs = require('fs')

const currentWorkSpace = process.cwd()
const distDir = `${currentWorkSpace}/dist`

/**
 * 判断一个path是否是文件夹
 */
const isDirectory = path => {
	return fs.existsSync(path) && fs.lstatSync(path).isDirectory()
}

if (!isDirectory(distDir)) {
	fs.mkdirSync(distDir, {
		recursive: true,
	})
}

// 打开微信开发者工具
automator
	.launch({
		projectPath: distDir,
	})
	.then(() => {
		console.log('微信开发者工具已开启，可以开始调试')
		process.exit()
	})
