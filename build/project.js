/**
 * 用于在taro之前根据环境生成不同的project.config.json
 */

const fs = require('fs')

console.log('构建环境标识', process.argv[2])

// 获取node project.js传过来的环境参数
const env = process.argv[2]
console.log('开始编译小程序project.config.json', env)

const appid = env === 'pro' ? require('./../build/defineConstants/pro').APP_CONF.APPID : require('./../build/defineConstants/index').APP_CONF.APPID
console.log('appid', appid)

const projectConfig = `
{
  "miniprogramRoot": "./dist",
  "projectname": "taro-template",
  "description": "taro2.0项目模板",
  "appid": "${appid}",
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
