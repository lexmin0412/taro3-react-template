/**
 * 用于在项目打包之前根据环境生成不同的project.config.json
 */

const fs = require('fs')

console.log('准备生成project.config.json文件')

const appid = require(`./../../config/${process.env.NODE_ENV}`).defineConstants.APP_CONF.APPID
console.log('小程序appid', appid)

const projectConfig = `
{
  "miniprogramRoot": "./dist",
  "projectname": "taro-template",
  "description": "taro2.0项目模板",
  "appid": ${appid},
  "setting": {
    "urlCheck": true,
    "es6": false,
    "postcss": false,
    "minified": false
  },
	"compileType": "miniprogram",
	"condition": {
		"search": {
			"current": -1,
			"list": []
		},
		"conversation": {
			"current": -1,
			"list": []
		},
		"plugin": {
			"current": -1,
			"list": []
		},
		"game": {
			"list": []
		},
		"miniprogram": {
			"current": 2,
			"list": [
				{
					"id": -1,
					"name": "首页",
					"pathName": "pages/index/index",
					"query": "",
					"scene": null
				}
			]
		}
	}
}
`

fs.writeFileSync('./project.config.json', projectConfig)
console.log('写入project.config.json文件成功')
