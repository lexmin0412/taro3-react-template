# Taro项目模版搭建过程

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

## 各模块完善

### 完善文件结构

- assets
- components
- config
- constants
- enums
- interceptors
- interfaces
- models
- pages
- services
- utils

### 配置别名

在config/index.js中加入如下配置

```js
const config = {
  // 别名解析
  alias: {
    '~/': path.resolve(__dirname, '..', 'src/'),
    '~/assets': path.resolve(__dirname, '..', 'src/assets'),
    '~/components': path.resolve(__dirname, '..', 'src/components'),
    '~/config': path.resolve(__dirname, '..', 'src/config'),
    '~/constants': path.resolve(__dirname, '..', 'src/constants'),
    '~/enums': path.resolve(__dirname, '..', 'src/enums'),
    '~/interceptors': path.resolve(__dirname, '..', 'src/interceptors'),
    '~/interfaces': path.resolve(__dirname, '..', 'src/interfaces'),
    '~/models': path.resolve(__dirname, '..', 'src/models'),
    '~/pages': path.resolve(__dirname, '..', 'src/pages'),
    '~/services': path.resolve(__dirname, '..', 'src/services'),
    '~/utils': path.resolve(__dirname, '..', 'src/utils'),
  },
}
```

并在tsconfig.json中加入如下内容

注意：如果没有带*的配置 就

```json
{
  "compilerOptions": {
    "paths" : {
      "~/": ["src/"],
      "~/*": ["src/*"],
      "~/assets": ["src/assets/"],
      "~/assets/*": ["src/assets/*"],
      "~/components": ["src/components/"],
      "~/components/*": ["src/components/*"],
      "~/config": ["src/config/"],
      "~/config/*": ["src/config/*"],
      "~/constants": ["src/constants/"],
      "~/constants/*": ["src/constants/*"],
      "~/enums": ["src/enums/"],
      "~/enums/*": ["src/enums/*"],
      "~/interceptors": ["src/interceptors/"],
      "~/interceptors/*": ["src/interceptors/*"],
      "~/interfaces": ["src/interfaces/"],
      "~/interfaces/*": ["src/interfaces/*"],
      "~/models/": ["src/models/"],
      "~/models/*": ["src/models/*"],
      "~/pages/": ["src/pages/"],
      "~/pages/*": ["src/pages/*"],
      "~/services": ["src/services/"],
      "~/services/*": ["src/services/*"],
      "~/utils": ["src/utils/"],
      "~/utils/*": ["src/utils/*"],
    }
  }
}
```

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

### 定义全局变量

在 config/index.config.ts 中, 需要通过 Node 环境变量判断来区分使用的配置, 所以我们在根目录下的 `global.d.ts` 中需要定义全局对象 process

```ts
declare const process: {
  env: {
    /**
     * taro环境变量
     */
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq';
    /**
     * node环境变量
     */
    NODE_ENV: 'development' | 'uat' | 'production';
    /**
     * 扩展其他属性
     */
    [key: string]: any;
  }
}
```

### 配置dva

在 utils 中创建 dva.ts 文件：

```ts
import Taro from '@tarojs/taro';
import { create } from 'dva-core';
import createLoading from 'dva-loading';

let app;
let store;
let dispatch;

/**
 * 创建dva APP
 * @param opt
 */
function createApp(opt) {
  // redux日志 仅开发和测试环境打开
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'uat') {
    const {createLogger} = require('redux-logger');
    opt.onAction = [createLogger()];
  }
  app = create(opt);
  app.use(createLoading({}));
  
  // 适配支付宝小程序
  if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
    // @ts-ignore
    global = {};
  }
  
  // @ts-ignore
  if (!global.registered) opt.models.forEach(model => app.model(model));
  // @ts-ignore
  global.registered = true;
  
  app.start();
  
  store = app._store;
  app.getStore = () => store;
  
  dispatch = store.dispatch;
  
  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  }
};

```

### 拦截器配置

为什么需要拦截器？

在请求开始和结束之前做相关操作，解耦代码

在src下新建interceptors文件夹

一个大型项目至少需要以下的几个请求拦截器：

- host拦截器 用于根据不同的标识拼接不同的 url 前缀等
- 头部拦截器 用于进行请求头的配置
- 数据处理拦截器 用于数据格式的统一，接口错误的抛出等

host拦截器：
在interceptors文件夹下面新建host.interceptor.ts

```ts
import { INTERCEPTOR_HEADER } from '~/constants/header'

export default function(chain) {
  const requestParams = chain.requestParams
  const { header, url } = requestParams

  // 如果传入url自带域名则不做处理 否则加上对应的域名
  if ( !(url.startsWith('https://') || url.startsWith('http://')) ) {
    requestParams.url = `${header[INTERCEPTOR_HEADER].hostUrl.url}${url}`
  }
  return chain.proceed(requestParams)
}
```

在taro中使用async/awiat

```shell
yarn add @tarojs/async-await
```

app.js

```js
// src/app.js
import '@tarojs/async-await'
```
