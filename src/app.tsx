import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'
import { checkUpdate } from '~/utils/mp'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

// h5非生产环境添加vconsole
if (process.env.TARO_ENV === 'h5' && process.env.NODE_ENV !== 'pro') {
	const VConsole = require('vconsole')
	new VConsole()
}

// mobx store
const store = {
  counterStore
}

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/lab/index',
      'pages/lab/hooks',
      'pages/lab/comp',
      'pages/user/index',
      'pages/common/imgPreview'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
			color: '#969BA0',
			selectedColor: '#333333',
			backgroundColor: '#ffffff',
      list: [
				{
					iconPath: 'assets/images/icon/icon_tabbar_goods_default.png',
					selectedIconPath:
						'assets/images/icon/icon_tabbar_goods_selected.png',
					pagePath: 'pages/index/index',
					text: '首页'
        },
        {
					iconPath: 'assets/images/icon/icon_tabbar_goods_default.png',
					selectedIconPath:
						'assets/images/icon/icon_tabbar_goods_selected.png',
					pagePath: 'pages/lab/index',
					text: '实验室'
        },
				{
					iconPath: 'assets/images/icon/icon_tabbar_goods_default.png',
					selectedIconPath:
						'assets/images/icon/icon_tabbar_goods_selected.png',
					pagePath: 'pages/user/index',
					text: '我的'
				},
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {
    // 检查更新
		checkUpdate()
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
