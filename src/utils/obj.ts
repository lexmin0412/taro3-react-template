/**
 * 对象操作
 */

class Obj {
	/**
	 * 提取对象属性，返回新对象
	 * @param {object} obj 提取对象
	 * @param {Array} propArr 键值数组
	 */
  pickAttrFromObj = (obj: any, propArr: Array<any>) => {
    const newObj: any = {}
    propArr.forEach((item) => {
      newObj[item] = obj[item]
    })
    return newObj
  }
}

export default new Obj()
