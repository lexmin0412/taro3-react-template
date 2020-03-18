const fs = require('fs')

const checkComponent = () => {
  console.log('检查组件')

  if ( fs.existsSync('./src/components/index.ts') ) {
    fs.unlinkSync('./src/components/index.ts')
    console.log('删除index.ts成功')
  }

  let indexLines = ``
  let Names = ``

  var outerDirs = fs.readdirSync("./src/components");
  console.log(outerDirs);

  outerDirs.forEach((item,index)=>{
    console.log('item', item)

    var innerDir = fs.readdirSync(`./src/components/${item}`)
    console.log('innerDir', innerDir)

    // 去除后缀名
    let newLines = []
    innerDir.forEach((inItem,inIndex)=>{
      const sliceRes = inItem.slice(0,inItem.indexOf('.'))
      if ( newLines.indexOf(sliceRes) === -1 ) {
        newLines.push(sliceRes)
        Names = Names ? `${Names}
  ${sliceRes},`
  :
  `${sliceRes},`
      }
    })

    newLines.forEach((inItem,inIndex)=>{
        indexLines = indexLines ? `${indexLines}
import ${inItem} from './${item}/${inItem}';`
:
`import ${inItem} from './${item}/${inItem}';`

    })
  })
  indexLines = `${indexLines}

export {
  ${Names}
}`

  fs.writeFileSync('./src/components/index.ts', indexLines)

}

module.exports = checkComponent
