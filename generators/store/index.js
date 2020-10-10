module.exports = {
	description: 'mobx store模版', // 这里是对该plop的功能描述
	// 问题询问
	prompts: [
		{
			type: 'input', // 问题类型 此处为输入
			name: 'FILE_NAME', // actions 和 hbs 模板文件中可使用该变量
			message: '请输入文件名称', // 问题
			default: 'default', // 问题的默认答案
		},
		{
			type: 'input', // 问题类型 此处为输入
			name: 'FILE_DESC', // actions 和 hbs 模板文件中可使用该变量
			message: '请输入文件描述', // 问题
			default: 'default', // 问题的默认答案
		},
	],
	// 操作行为
	actions: [
		{
			type: 'add', // 操作类型，这里是添加文件
			path: '../src/store/{{camelCase FILE_NAME}}.ts', // 添加的文件的路径
			templateFile: './store/store.hbs', // 模板文件的路径
		},
	],
}
