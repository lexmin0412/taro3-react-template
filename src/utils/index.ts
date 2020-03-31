/**
 * 异步加载js
 * @param type 类型 qqMap-腾讯地图jsApi
 */
const loadScriptSync = (type: 'qqMap' | 'tMap', callback) => {

  const scripts = {
    qqMap: "https://map.qq.com/api/js?v=2.exp&key=QVLBZ-YUULR-OUMW7-WKXFD-4SUWS-UCBIH&referer=myapp&callback=init",
    tMap: 'https://map.qq.com/api/gljs?v=1.exp&key=QVLBZ-YUULR-OUMW7-WKXFD-4SUWS-UCBIH&referer=myapp&callback=init'
  }

  return new Promise((resolve, reject) => {
    const src = scripts[type]
    var check = document.querySelectorAll(`script[src="${src}"]`)
    if (check.length > 0) {
      check[0].addEventListener('load', function () {
        window.init = callback
        resolve()
      })
      return
    } else {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      if ( callback ) {
        window.init = callback
      }
      document.getElementsByTagName('head')[0].appendChild(script)
      script.onload = function () {
        resolve()
      }
    }
  })
}

export {
  loadScriptSync
}
