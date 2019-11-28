# Taro项目模版

https://www.jianshu.com/p/71e209987c83

## 初始化

```sh
taro init taro-template
```

安装redux相关依赖

```bash
yarn add redux @tarojs/redux @tarojs/redux-h5 redux-thunk redux-logger
```

安装dva

```bash
yarn add dva-core dva-loading
```

- `dva-core`：封装 redux 和 redux-saga 的一个插件
- `dva-loading`：管理页面的 loading 状态

https://wldoperation.weilingdi.com/mcang.php/Exhibition/getExhibition

## 各模块完善

### 不同环境下的域名等配置

新建 src/config 文件夹

并在这个文件夹下新建以下文件 
- base.config.ts 书写默认配置 用于开发环境
- uat.config.ts 书写测试环境配置
- prod.config.ts 书写生产环境配置
- index.config.ts 根据环境变量判断使用对象合并 导出对应的配置

base.config.ts
```js
const config = {
  php: {
    url: 'https://wldoperation.58wld.com'
  },
  javaMapi: {
    url: 'https://mapi.58wld.com/weleadin-web-mapi'
  },
  md5: {
    key: '123456',
  },
  tDes: {
    key: 'jdjhdjkdkkdkdk'
  },
  bMap: {
    ak: 'y1pkfoj9chbELTmUzrjOKrGsSwgq7AjB',
  }
}

export default config
```

uat.config.ts
```ts
import { ProjectConfig } from './../interface/projectConfig.itf';

const config: ProjectConfig = {
  php: {
    url: 'https://wldoperation.58wld.com'
  },
  javaMapi: {
    url: 'https://mapi.58wld.com/weleadin-web-mapi'
  },
  md5: {
    key: '123456',
  },
  tDes: {
    key: 'jdjhdjkdkkdkdk'
  },
  bMap: {
    ak: 'y1pkfoj9chbELTmUzrjOKrGsSwgq7AjB',
  }
}

export default config

```

prod.config.ts
```ts
const config = {
  php: {
    url: 'https://wldoperation.weilingdi.com'
  },
  javaMapi: {
    url: 'https://mapi.weilingdi.com/weleadin-web-mapi'
  },
  md5: {
    key: 'normal',
  },
  tDes: {
    key: 'nomal-key'
  },
  bMap: {
    ak: 'y1pkfoj9chbELTmUzrjOKrGsSwgq7AjB',
  }
}

export default config

```

index.config.ts
```ts
import baseConfig from './base.config';
import uatConfig from './uat.config';
import prodConfig from './prod.config';

let config = {}

// 生产环境合并基础配置和生产配置
if ( process.env.NODE_ENV === 'production' ) {
  config = { ...baseConfig, ...prodConfig }
}
// 测试环境合并基础配置和测试配置
else if ( process.env.NODE_ENV === 'uat' ) {
  config = { ...baseConfig, ...uatConfig }
}
// 开发环境直接使用基础配置
else {
  config = baseConfig
}

export default config
```

### 请求配置

