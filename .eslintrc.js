module.exports = {
  extends: [ 'taro/react', 'plugin:@typescript-eslint/recommended' ],
	parser: '@typescript-eslint/parser',
	plugins: [ '@typescript-eslint' ],
	rules: {
		'arrow-parens': [ 'error', 'as-needed' ], // 箭头函数单参数时不使用括号 多参数时使用括号
		'object-curly-newline': [
			// 强制在花括号内使用一致的换行符
			'off',
			{
				minProperties: 2, // 属性数量超过2时强制使用换行符
			},
		],
		'object-property-newline': [
			// 强制将对象的属性放在不同的行上
			'off',
			{
				allowAllPropertiesOnSameLine: true, // // 禁止所有的属性都放在同一行
			},
		],

		'object-curly-spacing': [ 'error', 'always' ], // 要求大括号与内容间总是有空格
		'dot-location': [ 'error', 'property' ], // 强制在点号之后换行 object-跟随对象 property-跟随属性
		curly: 'error', // 强制所有控制语句使用一致的括号风格
		'import/no-commonjs': [ 'off' ], // 禁止commonjs写法 如module.exports
		complexity: [ 'off', 16 ], // 限制圈复杂度 阈值3 如if else if else语句最多嵌套三层 TODO: 需要放开
		'react/jsx-indent-props': 0, // 不验证jsx缩进
		'no-unused-vars': [
			// 不允许未使用的变量
			'warn',
			{
				varsIgnorePattern: 'Taro', // Taro框架要求在使用class组件的时候必须在文件中声明Taro 但是不是所有文件都会显式使用到 所以忽略
			},
		],
		'arrow-spacing': [
			// 要求箭头函数的箭头之前或之后有空格
			'error',
			{
				before: true,
				after: true,
			},
		],
		'prefer-arrow-callback': [ 'error' ], // 要求使用箭头函数作为回调
		'react/no-string-ref': 0, // 不允许字符串ref
		'react/jsx-filename-extension': [
			// 识别jsx的文件扩展名
			1,
			{
				extensions: [ '.js', '.jsx', '.tsx' ],
			},
		],
		'@typescript-eslint/no-unused-vars': [
			// 禁止未使用的变量
			'error',
			{
				varsIgnorePattern: 'Taro', // 忽略正则
			},
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'none',
					requireLast: false,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false,
				},
			},
		],
		'@typescript-eslint/explicit-function-return-type': [ 'off' ], // function和class的方法必须有明确的返回值
		'@typescript-eslint/no-empty-function': [ 'warn' ], // 禁止空函数体
		'@typescript-eslint/no-var-requires': 0, // 在import引用之外禁止require引用
		'import/first': 0, // import必须位于文件头部
		'@typescript-eslint/no-explicit-any': 0, // 禁止any声明
		'@typescript-eslint/interface-name-prefix': 0, // interface名必须以大写字母I开头
		'import/newline-after-import': 0, // import之后必须隔行
		'@typescript-eslint/camelcase': 0, // 变量必须使用驼峰命名
		'@typescript-eslint/no-this-alias': 0, // 禁止将this赋值给其他变量
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		useJSXTextNode: true,
		project: './tsconfig.json',
	},
}
