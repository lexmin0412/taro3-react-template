const path = require('path')

const config = {
  projectName: 'taro3-react-template',
  date: '2020-10-5',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
	// 解析alias路径
	alias: {
		'~/': path.resolve(__dirname, '..', 'src/'),
		'~/assets': path.resolve(__dirname, '..', 'src/assets'),
		'~/components': path.resolve(__dirname, '..', 'src/components'),
		'~/constants': path.resolve(__dirname, '..', 'src/constants'),
		'~/enums': path.resolve(__dirname, '..', 'src/enums'),
		'~/interceptors': path.resolve(__dirname, '..', 'src/interceptors'),
		'~/interfaces': path.resolve(__dirname, '..', 'src/interfaces'),
		'~/pages': path.resolve(__dirname, '..', 'src/pages'),
		'~/services': path.resolve(__dirname, '..', 'src/services'),
		'~/store': path.resolve(__dirname, '..', 'src/store'),
		'~/styles': path.resolve(__dirname, '..', 'src/styles'),
		'~/utils': path.resolve(__dirname, '..', 'src/utils'),
	},
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
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

console.log('构建环境变量', process.env.BUILD_ENV)

module.exports = function (merge) {
	// 根据cross-env传递的不同环境变量合并不同环境的配置
  if (process.env.BUILD_ENV === 'local') {
    return merge({}, config, require('./local'))
	}
	if (process.env.BUILD_ENV === 'dev') {
    return merge({}, config, require('./dev'))
	}
	if (process.env.BUILD_ENV === 'test') {
    return merge({}, config, require('./test'))
	}
	if (process.env.BUILD_ENV === 'uat') {
    return merge({}, config, require('./uat'))
  }
  return merge({}, config, require('./pro'))
}
