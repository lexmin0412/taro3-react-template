/**
 * 页面interface模版
 */

const echoInterfaceTpl = () => {
  return `
/**
 * 页面props
 */
export type PageStateProps = {
  counterStore: any;
}

/**
 * 页面state
 */
export type PageState = {

}`
}

module.exports = echoInterfaceTpl
