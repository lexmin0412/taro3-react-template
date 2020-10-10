module.exports = {
	description: '组件模版', // 这里是对该plop的功能描述
	// 问题询问
	prompts: [
		{
			type: 'input', // 问题类型 此处为输入
			name: 'IS_SUB_PACKAGE', // actions 和 hbs 模板文件中可使用该变量
			message: '是否在分包中创建组件(Y/N)？', // 问题
			default: 'N', // 问题的默认答案
		},
		{
			type: 'input', // 问题类型 此处为输入
			name: 'DIR_NAME', // actions 和 hbs 模板文件中可使用该变量
			message: '请输入所在文件夹名称', // 问题
			default: 'DirName', // 问题的默认答案
		},
		{
			type: 'input', // 问题类型 此处为输入
			name: 'FILE_NAME', // actions 和 hbs 模板文件中可使用该变量
			message: '请输入组件名称', // 问题
			default: 'FileName', // 问题的默认答案
		},
		{
			type: 'input', // 问题类型 此处为输入
			name: 'FILE_DESC', // actions 和 hbs 模板文件中可使用该变量
			message: '请输入组件描述', // 问题
			default: 'FileDesc', // 问题的默认答案
		},
	],
	// 操作行为
	actions: function (data) {
		let actions = []

		// 区分是否分包
		if (data.IS_SUB_PACKAGE.toUpperCase() === 'Y') {
			actions = actions.concat([
				{
					type: 'add', // 操作类型，这里是添加文件
					path:
						'../src/{{pascalCase DIR_NAME}}/Components/{{pascalCase FILE_NAME}}.tsx', // 添加的文件的路径
					templateFile: './component/component.hbs', // 模板文件的路径
				},
				{
					type: 'add', // 操作类型，这里是添加文件
					path:
						'../src/{{pascalCase DIR_NAME}}/Components/{{pascalCase FILE_NAME}}.scss', // 添加的文件的路径
					templateFile: './component/scss.hbs', // 模板文件的路径
				},
			])
		} else {
			actions = actions.concat([
				{
					type: 'add', // 操作类型，这里是添加文件
					path:
						'../src/components/{{pascalCase DIR_NAME}}/{{pascalCase FILE_NAME}}.tsx', // 添加的文件的路径
					templateFile: './component/component.hbs', // 模板文件的路径
				},
				{
					type: 'add', // 操作类型，这里是添加文件
					path:
						'../src/components/{{pascalCase DIR_NAME}}/{{pascalCase FILE_NAME}}.scss', // 添加的文件的路径
					templateFile: './component/scss.hbs', // 模板文件的路径
				},
			])
		}

		return actions
	},
}
