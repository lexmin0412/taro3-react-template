/**
  * 倒计时
  */

import Taro, { Component } from '@tarojs/taro'
import { View, Block } from '@tarojs/components'

import './Countdown.scss'

/**
 * props属性
 */
interface IProps {
  /**
   * 剩余时间 单位秒
   */
  leftTime: number;
  /**
   * 结束时间点的时间戳
   */
  endTime: number;
  /**
   * 是否将天数转成小时 true-不展示天数 false-单独展示天数
   */
  acmlDateToHours: boolean;
}

/**
 * 组件内部属性
 */
interface IState {
  /**
   * 展示时间 单位秒
   */
  displayTime: number;
  /**
   * 剩余天数
   */
  day: number;
  /**
   * 剩余小时
   */
  hour: number;
  /**
   * 剩余分钟
   */
  minute: number;
  /**
   * 剩余秒
   */
  second: number;
}

export default class Countdown extends Component<IProps, IState> {

  static defaultProps: IProps = {
    leftTime: 0,
    endTime: 0,
    acmlDateToHours: false,
  }

  interval: any;

  componentWillMount() {

    let displayTime = 0
    const { leftTime, endTime } = this.props
    if (leftTime) {
      displayTime = leftTime
    } else {
      displayTime = Math.floor((endTime - new Date().getTime()) / 1000)
    }

    let tempTime = this.calcTime(displayTime)
    this.setState({
      displayTime,
      day: tempTime.day,
      hour: tempTime.hour,
      minute: tempTime.minute,
      second: tempTime.second
    }, () => {
      this.startInterval()
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  startInterval() {
    this.interval = setInterval(() => {
      console.log('into interval', this.state.displayTime)
      const displayTime = this.calcTime(this.state.displayTime)
      this.setState({
        displayTime: this.state.displayTime - 1,
        day: displayTime.day,
        hour: displayTime.hour,
        minute: displayTime.minute,
        second: displayTime.second
      })
    }, 1000)
  }

  calcTime(seconds) {
    const { acmlDateToHours } = this.props
    let day = Math.floor(seconds / (60 * 60 * 24))
    let hour = Math.floor(seconds / (60 * 60)) - day * 24
    let minute = Math.floor(seconds / 60) - day * 24 * 60 - hour * 60
    let second =
      Math.floor(seconds) -
      day * 24 * 60 * 60 -
      hour * 60 * 60 -
      minute * 60
    return {
      day: day,
      hour: acmlDateToHours ? (day * 24 + hour) : hour,
      minute: minute,
      second: second
    }
  }

  render() {
    const { displayTime, day, hour, minute, second } = this.state
    const { acmlDateToHours } = this.props
    return (
      displayTime &&
      <View className="Countdown-comp">
        {
          !acmlDateToHours ?
          <Block>
          <View className="couter-item">
            {day > 9 ? day : `0${day}`}
          </View>
          <View className="couter-divider">
            天
          </View>
          </Block>
          :null
        }
        <View className="couter-item">
          {hour > 9 ? hour : `0${hour}`}
        </View>
        <View className="couter-divider">
          时
        </View>
        <View className="couter-item">
          {minute > 9 ? minute : `0${minute}`}
        </View>
        <View className="couter-divider">
          分
        </View>
        <View className="couter-item">
          {second > 9 ? second : `0${second}`}
        </View>
        <View className="couter-divider">
          秒
        </View>
      </View>
    )
  }
}
