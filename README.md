# taro3-react-template

基于 Taro3 + React 的开箱即用多端项目模板。

## 相关仓库

- [taro2-template](https://github.com/lexmin0412/taro2-template/tree/2.x) - 基于 Taro2 的项目模板。

## Repo Activity

![Repo Activity](https://repobeats.axiom.co/api/embed/e39e5816e00d2a9627dca894852446b7f7c83463.svg "Repobeats analytics image")

## 技术栈

- Taro
- React Hooks
- TypeScript
- NutUI
- SCSS

## 运行环境

- Node 16+
- Pnpm 8+

## 适配平台

- [x] H5
- [x] 微信小程序

由于部分平台的小程序注册门槛较高，如抖音、京东等平台均无法通过个人开发者身份注册，目前此模板只在 h5 / 微信小程序端经过验证。

## 开始

基于 [上述原因](#适配平台), 此模板只提供了 H5/微信小程序的调试/构建命令。

### 本地开发

#### 环境变量构建

在根目录新建 .env 文件，写入环境变量

```bash
TARO_API_BASE=/api
```

#### 启动调试

```shell
pnpm dev:h5 # h5
pnpm dev:weapp # 微信小程序
pnpm preview:weapp-local-watch # 启动小程序本地调试并打开微信开发者工具
```

### 构建产物

```shell
pnpm build:h5 # h5
pnpm build:weapp # 微信小程序
```

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

```bash
- .github  # Github 相关配置
- config  # Taro 配置
- generators  # Plop 模版配置
- src  #源码目录
  - custom-tab-bar  # 自定义 tabbar
  - default  # 缺省页面
  - demo  # 演示页面
  - index  # 首页
  - shared  # 公用代码
    - assets  # 静态资源
    - icons # 图标
    - components  # 公共组件
    - constants  # 常量
    - interceptors  # 拦截器
    - services  # 服务类
    - store  # 状态管理
    - styles  # 公共样式
    - utils  # 工具类
  - user  # 用户相关页面
  - webview  # webview 功能演示
- .editorConfig  # 编辑器编码风格配置
- .env  # 本地环境配置
- .eslintrc.js  # eslint 配置
- .gitignore  # git 忽略配置
- .markdownlint.yml  # markdownlint 配置
- .npmrc  # npm 相关配置
- .prettierignore  # prettier 忽略配置
- babel.config.js  # babel 配置文件
- commitlint.config.js  # commitlint 配置
- global.d.ts  # ts 全局类型声明
- package.json  # 你懂的
- pnpm-lock.yaml  # pnpm 依赖锁文件
- project.config.json  # 微信小程序配置
- README.md  # 项目说明文档
- tsconfig.json  # ts 配置
```

说明：与一般的项目结构划分不同，这里将所有静态资源、公用组件、状态管理等功能统一放到了 `src/shared` 目录下，而将页面目录直接平铺到了 src 目录，是出于以下原因：

- 在 src 下直接按照模块组织能够更直观地展示整个系统的业务组成及模块划分
- 没有规范限制页面文件一定要放在 `src/pages` 目录下，在遵循小程序规范设计配置文件的大前提下，它只会带来书写的负担
- 一个文件，它要么是全局共享，要么是专为某个页面（模块）服务，`{shared, xxx, yyy, zzz}` 的目录结构会促使我在新增一个文件时更加谨慎地考虑它的作用范围

当然，这纯属主观偏好，如果你想将页面文件放在 pages 目录下，那也无妨。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=lexmin0412/taro3-react-template&type=Timeline)](https://star-history.com/#lexmin0412/taro3-react-template&Timeline)
