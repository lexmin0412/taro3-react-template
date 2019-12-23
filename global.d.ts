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

// @ts-ignore
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
