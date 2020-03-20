const fs = require('fs')
let pages = require('./../../src/pages/routes')

pages.forEach((item,index)=>{
  pages[index] = `
      "${item}"`
})

pages = `    pages: [${pages}
    ],`

const initApp = () => {

  const appTemplate = fs.readFileSync('./build/plugins/app.js').toString().split("\n")
  console.log('读取app.js模版')

  const pageLine = appTemplate.findIndex((item)=>item.indexOf('pages: Routes')>-1)
  appTemplate[pageLine] = pages

  appTemplate.join('\n')

  if ( fs.existsSync('./src/app.tsx') ) {
    fs.unlinkSync('./src/app.tsx')
  }
  fs.writeFileSync('./src/app.tsx', appTemplate.join('\n'))
  console.log('app.tsx初始化成功')
}

module.exports = initApp
