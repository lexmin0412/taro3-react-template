import Taro from '@tarojs/taro';
import { create } from 'dva-core';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger'

let app;
let store;
let dispatch;

/**
 * 创建dva APP
 * @param opt
 */
function createApp(opt) {
  // redux日志 仅开发环境打开
  opt.onAction = [createLogger()];
	// if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'uat') {
	// // if (process.env.NODE_ENV === 'development') {
	// 	const {createLogger} = require('redux-logger');
	// 	opt.onAction = [createLogger()];
	// }
	app = create(opt);
	app.use(createLoading({}));

	// 适配支付宝小程序
	if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
		// @ts-ignore
		global = {};
  }

  console.log('opt',opt)

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
