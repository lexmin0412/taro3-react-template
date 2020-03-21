/**
  * 图片上传组件
  */

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import TImage from './TImage'

import './TImageUploader.scss'
import Toast from '~/utils/toast'

/**
 * props属性
 */
interface IProps {
  /**
   * 初始化的图片列表 一般用于重新提交
   */
  defaultList: Array<string>;
  /**
   * 监听图片列表改变 上传或删除时触发
   */
  onChange: Function;
  /**
   * 最大限制数量
   */
  limitNum: number;
}

/**
 * 组件内部属性
 */
interface IState {
  /**
   * 组件展示的图片列表
   */
  imageList: Array<string>;
  /**
   * 是否展示添加图片按钮
   */
  showUploader: boolean;
}

export default class TImageUploader extends Component<IProps, IState> {

  static defaultProps = {
    defaultList: [],
    onChange: () => { },
    limitNum: 3,
    showUploader: true
  }

  componentWillMount() {
    this.setState({
      imageList: this.props.defaultList
    })
  }

  componentWillUpdate(nextProps, nextState) {
    // 监听imageList改变 向外抛出事件
    if (this.state.imageList.length !== nextState.imageList.length) {
      this.props.onChange(nextState.imageList)
    }
  }

  /**
   * 上传按钮点击
   */
  handleUploaderBtnClick() {
    console.log('handleUploaderBtnClick')

    const self = this

    Taro.chooseImage({
      count: 1,
      sizeType: ['compressed', 'original'],
      sourceType: ['album', 'camera', 'environment', 'user'],
      success: function (res) {
        console.log('res', res)
        if (res.tempFilePaths && res.tempFilePaths.length > 0) {
          Toast.loading('正在上传...')

          // 这里模拟上传接口
          setTimeout(() => {
            Toast.hideLoading()
            if ( true ) {
              self.setState({
                imageList: [...self.state.imageList, ...res.tempFilePaths],
              })
            } else {
              Toast.error('上传失败, 请重试')
            }
          }, 1200);
        }
      },
      fail: function (err) {
        console.log('err', err)
      },
      complete: function() {
        console.log('complete')
      }
    })
  }

  /**
   * 删除按钮点击
   */
  handleDelBtnClick(index) {
    console.log('handleDelBtnClick')
    const imageList = [...this.state.imageList]
    imageList.splice(index, 1)
    this.setState({
      imageList
    })
  }

  render() {
    const { imageList, showUploader } = this.state
    const { limitNum } = this.props
    return (
      <View className="TImageUploader-comp">
        {
          imageList && imageList.length > 0 ?
            <View className="timage-uploader-comp-list">
              {
                imageList.map((item, index) => {
                  return (
                    <View className="timage-uoloader-comp-list-item">
                      <TImage src={item} previewConfig={{
                        urls: imageList,
                        current: index
                      }}
                        showLoading={true}
                      />
                      <View className="timage-uoloader-comp-list-item-del-btn"
                        onClick={this.handleDelBtnClick.bind(this, index)}
                      >
                        删除
                    </View>
                    </View>
                  )
                })
              }
            </View>
            : null
        }
        {
          imageList.length < limitNum &&
          <View className="timage-uploader-comp-uploader"
            onClick={this.handleUploaderBtnClick.bind(this)}
          >
            添加图片
          </View>
        }
      </View>
    )
  }
}
