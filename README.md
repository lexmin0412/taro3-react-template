# taro3-react-template

基于 Taro3 + React 的开箱即用多端项目模版。

本项目还有基于 Taro 2.x 和 1.x 的版本，请点击以下链接前往：

- [基于 Taro1.x 的模版](https://github.com/lexmin0412/taro-template/tree/1.x)
- [基于 Taro2.x 的模版](https://github.com/lexmin0412/taro-template/tree/2.x)

## 技术栈

- Taro
- React Hooks
- TypeScript
- SCSS

## 支持特性

- 🏠 基于 Taro3
- 📦 支持 React
- 🐑 CSS 预处理器( SCSS )
- 🥣 完全使用 TypeScript 开发
- 🔛 企业级的 request 类及拦截器封装
- 👮 `eslint`+`stylelint`+`markdownlint`+`prettier`+`commitlint`+`editorConfig` 实现的全方位代码规范体系
- 🔥 自定义 tabbar
- 🌩️ 使用多核心及缓存提升编译速度
- 💰 更多特性持续迭代中...

## 目录结构

- .github github 相关配置
- config taro 配置
- generators plop 模版配置
- src
	- custom-tab-bar 自定义 tabbar
	- default 缺省页面
	- demo 演示页面
	- index 首页
	- shared 公用代码
	  - assets 静态资源
		  - icons 图标
		- components 公共组件
		- constants 常量
		- interceptors 拦截器
		- services 服务类
		- store 状态管理
		- styles 公共样式
		- utils 工具类
	- user 用户相关页面
	- webview webview 功能演示
- .editorConfig 编辑器编码风格配置
- .env 本地环境配置
- .eslintrc.js eslint配置
- .gitignore git忽略配置
- .markdownlint.yml markdownlint配置
- .npmrc npm相关配置
- .prettierignore prettier忽略配置
- babel.config.js babel配置文件
- commitlint.config.js commitlint配置
- global.d.ts ts全局类型声明
- package.json 你懂的
- pnpm-lock.yaml pnpm依赖锁文件
- project.config.json 微信小程序配置
- README.md 项目说明文档
- tsconfig.json ts配置

说明：与一般的项目结构划分不同，这里将所有静态资源、公用组件、状态管理等功能统一放到了 src/shared 目录下，而将页面目录直接平铺到了 src 目录，有以下原因：

- 没有规范限制页面文件一定要放在 src/pages 目录下，在我看来它只会带来书写的负担
- 一个文件，它要么是全局共享，要么是专为某个页面（模块）服务，`[shared, xxx, yyy, zzz]` 的形式会让我在书写一个模块时更容易识别到它是全局共享还是模块共享资源

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=lexmin0412/taro3-react-template&type=Timeline)](https://star-history.com/#lexmin0412/taro3-react-template&Timeline)
