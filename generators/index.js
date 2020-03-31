// 引入各模块配置文件
const componentGenerrator = require('./component/index.js')
const pageGenerrator = require('./page/index.js')
const storeGenerrator = require('./store/index.js')
const serviceGenerrator = require('./service/index.js')

module.exports = plop => {
  // component 相关
  plop.setGenerator('component', componentGenerrator)
  // views 相关
  plop.setGenerator('page', pageGenerrator)
  // vuex 相关
  plop.setGenerator('mobx', storeGenerrator)
  // api 相关
  plop.setGenerator('service', serviceGenerrator)
}
