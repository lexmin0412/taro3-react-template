declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

declare namespace JSX {
	interface IntrinsicElements {
		'import': React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>
	}
}

// @ts-ignore
declare const process: {
	env: {
		TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq';
		/**
		 * local-本地 dev-开发 sit-测试 uat-预发 pro-生产
		 */
		NODE_ENV: 'local' | 'dev' | 'sit' | 'uat' | 'pro'
		[key: string]: any;
	}
}

/**
 * 环境变量配置
 */
declare const APP_CONF: {
	/**
	 * 接口HOST
	 */
	API_HOST: string
	/**
	 * 小程序 appid
	 */
	APPID: string
	/**
	 * 腾讯地图接口服务域名
	 */
	API_MAP_QQ: string
	/**
	 * 腾讯地图服务key
	 */
	KEY_MAP_QQ: string
	/**
	 * 当前项目域名
	 */
	APP_HOST: string
}

/**
 * 微信jssdk对象
 */
declare const wx: any

/**
 * 微信jsbridge
 */
declare const WeixinJSBridge: any
