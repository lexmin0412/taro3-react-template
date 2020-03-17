/**
 * 命令逻辑处理文件
 */

const fs = require('fs');
const echoServiceTpl = require('./service.tpl')
const echoInterfaceTpl = require('./interface.tpl')
const echoPageTemplate = require('./page.tpl')
const echoScssTpl = require('./scss.tpl')
const echoModelTpl = require('./model.tpl')
const echoCompTpl = require('./component.tpl')

const typeArray = ['m', 's', 'p', 'c'];

const type = process.argv[2];
const pathname = process.argv[3];
const filename = process.argv[4]
const fileDesc = process.argv[5]  // 文件描述
console.log('参数解析：', process.argv);
console.log(`文件类型：${process.argv[2]}`);
console.log(`文件夹路径：${process.argv[3]}`);
console.log(`文件名：${process.argv[4]}`);
console.log(`文件描述：${process.argv[5]}`);
if ( process.argv[6] ) {
	console.log(`文件标题：${process.argv[6]}`);
}


// 根据传入的文件路径和文件名称生成模板字符串
const serviceTep = echoServiceTpl(filename)   // service模板
const itfTpl = echoInterfaceTpl(filename)     // interface模板
const indexTep = echoPageTemplate(filename, fileDesc)   // page模板
const scssTep = echoScssTpl(filename, type === 'p' ? 'page' : 'comp')         // scss模板
const modelTep = echoModelTpl(filename)       // model模板
const compTep = echoCompTpl(filename, fileDesc)  // component模版


// 文件生成规则
const fileCreateRule = {
	p: [
		{ suffix: 'tsx', template: indexTep, },
		{ suffix: 'scss', template: scssTep },
		{ suffix: 'ts', template: itfTpl }
	],
	m: [
		{ suffix: 'ts', template: modelTep }
	],
	s: [
		{ suffix: 'service.ts', template: serviceTep }
	],
	c: [
		{ suffix: 'tsx', template: compTep },
		{ suffix: 'scss', template: scssTep }
	],
}

// 当命令输入错误时弹出的tips
function exampleTips() {
	console.log('命令使用例子：');
	console.log('创建页面：yarn template p directoryPath fileName fileDesc');
	console.log('创建model：yarn template m directoryPath fileName fileDesc');
	console.log('创建service：yarn template s directoryPath fileName fileDesc');
	console.log('创建component：yarn template c directoryPath fileName fileDesc');
}

// 判断文件类型
if (!type || typeArray.indexOf(type) < 0) {
	console.log("操作类型只能是：['m', 's', 'p', 'c']");
	exampleTips();
	process.exit(0);
}

// 验证文件夹名称
if (!pathname) {
	console.log('文件夹名称不能为空！');
	exampleTips();
	process.exit(0);
}

const pathnameParentDivider = pathname.slice(0, pathname.indexOf('/')+1)
console.log('剪切后的父文件夹名称', pathname)

/**
 * 新建文件夹
 */
function mkDirSync(dirName) {
	console.log(`检测到缺少${dirName}文件夹, 正在创建...`);
	fs.mkdirSync(`./src/${dirName}`)
	console.log(`${dirName}文件夹创建成功`)
}

// 先判断 如果没有相应的容器文件夹 则先创建一个
console.log('父文件夹路径检测:');
if ( !fs.existsSync('./src/pages') && type === 'p' ) {
	mkDirSync('pages')
}
if ( !fs.existsSync('./src/store') && type === 'm' ) {
	mkDirSync('store')
}
if ( !fs.existsSync('./src/services') && type === 's' ) {
	mkDirSync('services')
}
if ( !fs.existsSync('./src/components') && type === 'c' ) {
	mkDirSync('components')
}

/**
 * 文件类型枚举
 */
const fileTypeEnum = {
	p: 'pages',
	m: 'store',
	s: 'services',
	c: 'components'
}

const fileType = fileTypeEnum[type]


/**
 * 根据文件类型返回需要生成的文件路径和文件名
 * @param {String} fileType 文件类型 page-页面 service-服务类 model-数据 component-组件
 * @return directoryPath
 */
const createFilePath = () => {
	const _fileRules = []  // 需要生成的文件名数组
	fileCreateRule[type].forEach(element => {
		_fileRules.push({
			_fileName: `./src/${fileType}/${pathname}/${filename}.${element.suffix}`,
			_fileTpl: element.template
		})
	});
	return {
		directoryPath: `./src/${fileType}/${pathname}`,
		filePaths: _fileRules
	}
}


/**
 * 根据传入的参数集创建文件
 * @param {String} fileType 创建文件
 */
function createFile( fileType ) {

	const _fileInfo = createFilePath()

	console.log('读取文件创建规则...', _fileInfo);


	const _isFileExisted = fs.existsSync(_fileInfo.filePaths[0])
	const _isDirectoryExsited = fs.existsSync(_fileInfo.directoryPath)

	// 验证文件是否已经存在
	if (_isFileExisted) {
		console.log(`${_fileInfo.filePaths[0]}, 该文件已经存在！！!`);
		process.exit(0);
	}

	// 如果文件夹不存在则创建文件夹
	if ( !_isDirectoryExsited ) {
		// 如果存在嵌套 先创建父文件夹
		if ( pathname.includes('/') ) {
			fs.mkdirSync(`./src/${fileType}s/${pathnameParentDivider}`)
		}
		// 创建文件的父文件夹
		fs.mkdirSync(_fileInfo.directoryPath);
	}

	// 创建文件
	_fileInfo.filePaths.forEach((element)=>{
		// 创建文件
		console.log(`创建${element._fileName}文件`);
		fs.writeFileSync(element._fileName, element._fileTpl)
	})
}

// 根据传入的参数创建文件
createFile(fileType)

console.log('文件创建成功！！！');
process.exit(0);
