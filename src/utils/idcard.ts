/**
 * 身份证相关工具类
 */

class IDCard {
  constructor() { }

  /**
   * 分析身份证，计算年龄，性别
   * @param {string} identityCard 身份证号码
   * @param {string} isEncrypt 是否脱敏 脱敏则不校验格式
   */
  getIDCardInfo = (IDCard: string, isEncrypt?: string) => {
    console.log('idcard', IDCard)

    /**
     * 解析完成的信息对象
     */
    let msgObj = {
      /**
       * 是否合法
       */
      isValid: true,
      /**
       * 性别 1-男 0-女
       */
      sex: '1',
      /**
       * 年龄 number
       */
      age: 0,
      /**
       * 出生日期 格式 YYYY-MM-DD
       */
      birthday: ''
    }

    if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(IDCard) && !isEncrypt) {
      console.warn('into reg')
      msgObj.isValid = false
      return msgObj
    }

    const getCardInfos = (IDCard: string) => {
      const cardInfos = {
        yearBirth: '',
        monthBirth: '',
        dayBirth: ''
      }
      if (IDCard.length === 15) {
        cardInfos.yearBirth = `19${IDCard.substring(6, 8)}`
        cardInfos.monthBirth = IDCard.substring(8, 10)
        cardInfos.dayBirth = IDCard.substring(10, 12)
      } else {
        cardInfos.yearBirth = IDCard.substring(6, 10)
        cardInfos.monthBirth = IDCard.substring(10, 12)
        cardInfos.dayBirth = IDCard.substring(12, 14)
      }
      return cardInfos
    }

    // 获取用户身份证号码
    let userCard = IDCard

    // 获取性别
    if (parseInt(userCard.substr(userCard.length - 2, 1)) % 2 === 1) {
      msgObj.sex = '1'
    } else {
      msgObj.sex = '0'
    }
    // 获取出生年月日
    const cardInfos = getCardInfos(userCard)
    if (Number(cardInfos.yearBirth) < 1900 || Number(cardInfos.yearBirth) > new Date().getFullYear() || Number(cardInfos.monthBirth) > 12 || Number(cardInfos.dayBirth) > 31) {
      console.log('cardInfos.yearBirth < 1900', Number(cardInfos.yearBirth) < 1900)
      console.log('cardInfos.yearBirth > new Date().getFullYear()', Number(cardInfos.yearBirth) > new Date().getFullYear())
      console.log('cardInfos.monthBirth>12', Number(cardInfos.monthBirth) > 12)
      console.log('cardInfos.dayBirth>31', Number(cardInfos.dayBirth) > 31)
      msgObj.isValid = false
    }
    let yearBirth = cardInfos.yearBirth
    let monthBirth = cardInfos.monthBirth
    let dayBirth = cardInfos.dayBirth
    // 获取当前年月日并计算年龄
    let myDate = new Date()
    let monthNow = myDate.getMonth() + 1
    let dayNow = myDate.getDay()
    let age = myDate.getFullYear() - Number(yearBirth)
    if (monthNow < parseInt(monthBirth) || (monthNow === parseInt(monthBirth) && dayNow < parseInt(dayBirth))) {
      age--
    }
    // 得到年龄
    msgObj.age = age
    msgObj.birthday = `${yearBirth}-${monthBirth}-${dayBirth}`

    // 返回解析信息对象
    return msgObj
  }
}

export default new IDCard()
