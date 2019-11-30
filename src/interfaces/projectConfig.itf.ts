/**
 * 域名
 */
interface IHostConfig {
  url: string;
}

/**
 * 加密
 */
interface IEncryptConfig {
  key: string;
}

/**
 * 地图配置
 */
interface IMapConfig {
  ak: string;
}

interface ProjectConfig {
  /**
   * php接口域名
   */
  php: IHostConfig;
  /**
   * java mapi接口域名
   */
  javaMapi: IHostConfig;
  /**
   * md5配置
   */
  md5: IEncryptConfig;
  /**
   * 3Des密钥
   */
  tDes: IEncryptConfig;
  /**
   * 百度地图私钥配置
   */
  bMap: IMapConfig;
}

export {
  ProjectConfig
}
