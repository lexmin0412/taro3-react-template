
/**
 * model模版
 * @param {string} pathname 文件名
 */

const echoModelTpl = pathname => {
  return `import { observable } from 'mobx'

const counter = observable({
  counter: 0,
  counter() {
    this.counter++
  },
})
export default counter`;
}

module.exports = echoModelTpl
