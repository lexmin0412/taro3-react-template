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
    /**
     * TARO环境变量
     */
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq';
    /**
		 * node环境变量
		 */
    NODE_ENV: 'dev' | 'sit' | 'uat' | 'pro';
    /**
     * 其他扩展属性
     */
    [key: string]: any;
  }
}

/**
 * NODE环境变量 dev-开发 sit-测试 uat-预发 pro-生产
 */
declare const NODE_ENV: 'dev' | 'sit' | 'uat' | 'pro'

/**
 * 环境变量配置
 */
declare const APP_CONF: {
  /**
   * 接口HOST
   */
  API_HOST: string;
  /**
   * 图片oss域名
   */
  IMG_OSS_PREFIX: string;
  /**
   * 腾讯地图接口服务域名
   */
  API_MAP_QQ: '"https://apis.map.qq.com"',
  /**
   * 腾讯地图服务key
   */
  KEY_MAP_QQ: '"E6HBZ-A72WD-XM74M-PA3OE-DA3EK-FKFYO"',
}
