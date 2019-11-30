# Taro + Dva + TypeScript 项目模板

## Build Setup

```zsh
git clone https://github.com/cathe-zhang/taro_template.git
cd taro_template
yarn
yarn dev:h5
```

## 项目结构

### 目录

```tree
├── dist                   编译结果目录
├── config                 编译配置目录
|   ├── dev.js             开发时配置
|   ├── index.js           默认配置
|   └── uat.js             测试打包配置
|   └── prod.js            生产打包配置
├── src                    源码目录
|   ├── asstes             静态资源存放
|   ├── components         常规组件文件夹
|   ├── config             配置存放文件夹
|   ├── constants          常量存放文件夹
|   ├── enums              枚举
|   ├── interceptors       taro接口拦截器
|   ├── interfaces         接口存放
|   ├── models             dva 的 model
|   ├── pages              页面文件夹
|   ├── services           服务类文件夹
|   ├── styles             项目通用样式
|   ├── utils              工具类存放文件夹
|   └── app.tsx            项目入口文件
└── package.json           项目依赖配置
└── tsconfig.json          ts编译配置文件
```

## 开发

### 新建页面

在 pages 文件夹下新建一个文件夹，作为一个模块

一个功能完备的页面至少包括以下三个文件：

- 页面
- 样式
- 接口定义




## 技术栈

- [taro](https://nervjs.github.io/taro/docs/README.html)
- [taro-ui](https://taro-ui.aotu.io/)
- [dvajs](https://dvajs.com/guide/)
- [typescript](https://www.tslang.cn/docs/handbook/basic-types.html)
- [scss](https://www.sass.hk/)

## 项目文档

- [更新日志](./CHANGELOG.md)
- [开发计划](./TODO.md)
- [项目搭建文档](./NOTE.md)
