import baseConfig from './dev.config';
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
