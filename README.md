# Taro 3.x 项目模板

一个可用于生产环境的基于 Taro3 的 React 框架多端项目模版。

本项目还有基于 Taro 2.x 和 1.x 的版本，请点击以下链接前往：

- [基于 Taro1.x 的模版](https://github.com/lexmin0412/taro-template/tree/1.x)
- [基于 Taro2.x 的模版](https://github.com/lexmin0412/taro-template/tree/2.x)

## 技术栈

- Taro
- React
- Mobx

## 功能列表

- 基础功能
  - [x] TypeScript
  - [x] Sass 支持, 基础公用文件
  - [x] 状态管理(mobx)
  - [ ] iconfont 支持
- 接口请求
  - [x] request 类
  - [x] 拦截器
    - [x] url 拦截器
    - [x] header 拦截器
    - [x] param 拦截器
    - [x] data 拦截器
  - [x] 开发环境本地代理（h5 端）
  - [ ] jsonp 支持（h5 端）
- 基础工具类
  - [x] toast 提示
  - [x] validator 表单验证类
  - [x] page.ts 页面工具类，实现获取页面路由、跳转等功能
- 工程化
  - [x] ts 文件路径 alias
  - [x] 通过 plop 插件一键生成模版文件（页面、组件、样式、服务类、mobx 状态管理）
  - [x] git hooks 实现代码提交前的检查
    - [x] eslint
    - [x] stylelint
    - [x] prettier
    - [x] commit lint
  - [ ] 接入 [Taro 项目自定义模板](https://taro-docs.jd.com/taro/docs/template)
  - [ ] 支持 Vue

## 优化

1. 如果 h5 端编译后体积过大，可以使用 webpack-bundle-analyzer 插件对打包体积进行分析。

```js
module.exports = {
	h5: {
		webpackChain(chain) {
			chain
				.plugin('analyzer')
				.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
		},
	},
}
```

在打包之后将会在浏览器中打开类似如下的页面，可以对文件占用体积分析，进行相关优化。

![webpack-bundle-analyzer](./docs/images/webpack-bundle-analyzer.png)
