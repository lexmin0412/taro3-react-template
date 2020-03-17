/**
 * scss文件模版
 * @param {string} pathname 文件名
 */
const echoScssTpl = (pathname, type) => {
  return `.${pathname}-${type} {
  width: 100vw;
}
`;
}

module.exports = echoScssTpl
