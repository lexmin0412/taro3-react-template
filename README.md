# Taro + Dva + TypeScript + Scss 项目模板

## Build Setup

```zsh
# 获取模版
git clone https://github.com/cathe-zhang/taro_template.git
# 进入项目文件夹
cd taro_template
# 安装依赖
yarn
# 本地浏览器运行
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

  ```tsx
  // pages/home/index
  import Taro, { Component, Config } from '@tarojs/taro'
  import { View, Text } from '@tarojs/components'
  import { connect } from '@tarojs/redux'
  import { ComponentClass } from 'react';

  import { IPageOwnProps, IPageState, IProps } from './index.itf'
  import Line from '~/components/Line'
  import Toast from '~/utils/toast'

  import './index.scss'

  interface Index {
    props: IProps;
  }

  @connect(({ home, loading }) => {
    return { home, loading };
  })
  class Index extends Component {

    config: Config = {
      // 设置页面标题
      navigationBarTitleText: '首页'
    }

    componentDidMount() {
      this.queryExhibitionData()
    }

    // 调用dva action请求数据
    async queryExhibitionData() {
      Toast.loading('加载中...')
      console.log('this.props', this.props)
      this.props.dispatch({
        type: 'home/getExhibition',
        payload: {
          c_type: 1,
          pageindex: 1,
          pagesize: 10
        }
      }).then((res)=>{
        console.log('res model from page',res)
        Toast.hideLoading()
      })
    }

    render() {
      const { exbitionData } = this.props.home
      const { loading } = this.props
      return (
        <View className='home-index-page'>
          <Text>Hello world!</Text>
          {
            loading.global ?
            <View>loading...</View>
            :
            exbitionData.exhibition_list && exbitionData.exhibition_list.map((item,index)=>{
              return (
                <View>{item.now_time_str}</View>
              )
            })
          }
          <Line height={1} color="#45aafa" />
        </View>
      )
    }
  }

  export default Index as ComponentClass<IPageOwnProps, IPageState>;
  ```

  #### 静态资源导入规范

  一个页面文件导入模块时应该按照如下规范：

  1. 先导入第三方模块，如第三方UI库等
  2. 再导入项目内部模块，如组件、工具类等
  3. 导入静态文件，图片在前，其他资源次之，样式文件最后

  示例：

  ```tsx
  // 导入第三方库
  import Taro, { Component, Config } from '@tarojs/taro'
  import { View, Text } from '@tarojs/components'
  import { connect } from '@tarojs/redux'
  import { ComponentClass } from 'react';

  // 导入项目内部模块
  import { IPageOwnProps, IPageState, IProps } from './index.itf'
  import Line from '~/components/Line'
  import Toast from '~/utils/toast'

  // 导入静态文件和样式
  import './index.scss'
  ```

  #### 样式类名命名规范

  - 页面容器应以模块-文件名-容器类型命名，如 home-index-page, line-component 等

- 样式

```scss
// pages/home/index.scss
@import './../../styles/base.scss';

.index-page {
  background: $theme-color;
}
```

- 接口定义

```ts
// pages/home/index.itf.ts
/**
 * redux数据定义
 */
interface IPageStateProps {
  home: {
    exbitionData: {
      exhibition_list: Array<any>
    }
  },
  loading: {
    global: boolean;
  };
}

/**
 * 定义dispatch
 */
interface IPageDispatchProps {
  dispatch: (arg0: any) => any;
}

/**
 * 界面属性定义
 */
export interface IPageOwnProps { }

/**
 * 页面state定义
 */
export interface IPageState { }

/**
 * IProps
 */
export type IProps = IPageStateProps & IPageDispatchProps & IPageOwnProps;
```

### 请求数据

在页面中请求数据，需要先做一个判断：当前这个接口的数据需不需要跨页面共享，如果不需要，那么就没有必要经过dva，直接调用 service 即可；反之则需要定义 model , 在页面上发起 action, 走 dva 的流程。

#### 创建 service

service, 也就是我们的服务模块，用于统一存放后端接口定义，供页面调用。

**`service` 文件设计规范**

由于同一个接口被不同页面调用调用的可能性非常高，服务模块的结构需要依照后端接口来设计，如同时拥有 java 和 php 两个后端，那么 service 模块就要分成两个大的模块，大的模块下面再根据接口模块划分来划分小的 service 文件。

如一个接口路径为 `https://xxx.normal.com/web-mapi/account/queryBalanceAccount`, 用途是查询用户账户余额，那么这个接口在 service 模块的结构就应该表现为：

首先后台分为两个大的模块，下一层是后台的项目，最后根据后台接口模块命名一个 `xxx.service.ts`, xxx 是后台的模块名称。只要一个接口是在后台接口项目中的这个子模块，那么在前端就应该定义在相应的 service 文件下。

上面的示例接口设计结构如下：

```bash
├── services        服务根文件夹
|   ├── java        java
|       ├── web-mapi
|           ├── account.service.ts
|   ├── php         php
```

#### 直接调用 service 获取数据

```tsx
import MicangPhpService from '~/services/php/micang.php.service'

class Index extends Component {

  state = {}

  componentDidMount() {
    this.queryExhibitionData()
  }
  
  // 直接调用service
  async queryExhibitionData () {
    let result = await MicangPhpService.getExhibition({
      c_type: 1,
      pageindex: 1,
      pagesize: 10
    },)
    if ( +result.code === 0 ) {
      this.setState({
        exbitionData: result.data
      })
    }
  }

  render() {
    const { exbitionData } = this.state
    return (
      <View className='home-index-page'>
        {
          exbitionData.exhibition_list && exbitionData.exhibition_list.map((item,index)=>{
            return (
              <View>{item.now_time_str}</View>
            )
          })
        }
      </View>
    )
  }
}
```

#### 通过 dva 获取数据

##### 1. 定义 model

在 src/models 下新建文件:

```ts
// models/home.ts
import MicangPhpService from '~/services/php/micang.php.service'

export default {
  namespace: 'home',
  state: { exbitionData: {} },
  effects: {
    /**
     * 获取会场数据
     */
    *getExhibition({payload}, { call, put }) {
      const { code, data } = yield call(
        MicangPhpService.getExhibition.bind(MicangPhpService, payload)
      );
      if (data) {
        yield put({
          type: 'saveExhibitionData',
          payload: {
            data
          }
        });
      }
    }
  },
  reducers: {
    // 保存数据到redux
    saveExhibitionData(state, { payload }) {
      const { data } = payload;
      return { ...state,
        exbitionData: data
      };
    }
  }
};
```

##### 2. 在页面上发起 action

```tsx
// pages/home/index.tsx
import { connect } from '@tarojs/redux'

@connect(({ home }) => {
  return { home };
})
class Index extends Component {

  componentDidMount() {
    this.queryExhibitionData()
  }

  // 调用dva action请求数据
  queryExhibitionData () {
    this.props.dispatch({
      type: 'home/getExhibition',
      payload: {
        c_type: 1,
        pageindex: 1,
        pagesize: 10
      }
    })
  }

  render() {
    const { exbitionData } = this.props.home
    return (
      <View className='home-index-page'>
        {
          exbitionData.exhibition_list && exbitionData.exhibition_list.map((item,index)=>{
            return (
              <View>{item.now_time_str}</View>
            )
          })
        }
      </View>
    )
  }
}
```

### 使用组件

在业务开发的过程中，我们常需要复用一些相同的结构，如商品轮播图，订单item等，如果每个页面都复制粘贴一遍，不仅不美观，更难以维护，这时候就需要开发组件了。

组件分为展示型组件和容器型组件。展示型组件只需要接收父组件传递的属性并渲染页面，容器型组件则会涉及到数据处理等复杂的逻辑，难以重用，所以平常我们开发的一般都是展示型的组件。

#### 1. 定义组件

组件和页面不一样，我们不需要关心在整个应用层面的不同组件的逻辑关系，只需关注组件本身，所以不像 pages 目录下的文件结构，我们直接在 components 目录下新建文件即可。

最简单的组件，如一条分割线，组件代码如下：

```tsx
// components/Line.tsx
import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

/**
 * 组件需要的Props定义
 */
interface IProps {
  height?: number; // 高度
  color?: string; // 颜色
}

export default class Line extends Component<IProps> {

  render() {
    return (
      <View
        style={{
          background: this.props.color || '#F5F5F5',
          height: `${Taro.pxTransform(this.props.height || 10)}`
        }}
      />
    );
  }
}
```

如果需要定义样式，在同级文件夹下新建 scss 文件并引入即可。

#### 2. 在页面中引用

```tsx
import Line from '~/components/Line'

class Index extends Component {

  render() {
    return (
      <View className='index-page'>
        <Text>Hello world!</Text>
        <Line height={1} color="#45aafa" />
      </View>
    )
  }
}
```

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
