const path = require('path')

const config = {
  projectName: 'taro_2_template',
  date: '2020-3-10',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  defineConstants: {},
  // 解析alias路径
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
    '~/styles': path.resolve(__dirname, '..', 'src/styles'),
    '~/utils': path.resolve(__dirname, '..', 'src/utils'),
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  babel: {
    sourceMap: true,
    presets: [
      ['env', {
        modules: false
      }]
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      ['transform-runtime', {
        "helpers": false,
        "polyfill": false,
        "regenerator": true,
        "moduleName": 'babel-runtime'
      }]
    ]
  },
  mini: {
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  let exportConfig = {}
  if (process.env.NODE_ENV === 'pro') {
    exportConfig = merge({}, config, require('./pro'))
  } else if ( process.env.NODE_ENV === 'sit' ) {
    exportConfig = merge({}, config, require('./sit'))
  } else if ( process.env.NODE_ENV === 'uat' ) {
    exportConfig = merge({}, config, require('./uat'))
  } else {
    exportConfig = merge({}, config, require('./dev'))
  }
  return exportConfig
}
