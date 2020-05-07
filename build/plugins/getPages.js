const fs = require('fs')
const chalk = require('chalk')

/**
 * 扫描pages文件夹生成routes.js 即app.tsx中的pages配置项
 */
const getPages = () => {
  return new Promise((resolve, reject)=>{
    console.log( chalk.yellow( '开始' ), '进入扫描页面插件' )

    if ( fs.existsSync('./src/pages/routes.js') ) {
      fs.unlinkSync('./src/pages/routes.js')
      console.log( `${chalk.redBright('删除')} 旧的${chalk.greenBright('pages/route.js')}` )
    }

    let indexLines = `/**
 * 路由文件 编译时自动生成，无需手动修改，但页面有增删改操作时需要重启项目
 */

const pages = [
  'pages/index/index',`
    const pages = []

    const outerDirs = fs.readdirSync("./src/pages");

    outerDirs.forEach((item,index)=>{

      const innerDir = fs.readdirSync(`./src/pages/${item}`)

      // 去除后缀名
      innerDir.forEach((inItem,inIndex)=>{
        const sliceRes = inItem.slice(0,inItem.indexOf('.'))
        // 去重
        if ( pages.indexOf(`pages/${item}/${sliceRes}`) === -1 ) {
          pages.push(`pages/${item}/${sliceRes}`)
        }
      })
    })

    pages.forEach((item,index)=>{
      if ( item !== 'pages/index/index' ) {
        indexLines = indexLines ? `${indexLines}
  '${item}',`
          :
          `'${item}',`
      }
    })

    indexLines = `${indexLines}
]

module.exports = pages`

    fs.writeFileSync('./src/pages/routes.js', indexLines)
    console.log( `${chalk.cyanBright( '创建 ')}pages/routes.js 成功
${
  chalk.dim( '结束 ' )
}页面扫描完成✅
`)
    resolve()
  })

}

module.exports = getPages
