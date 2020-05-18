/**
 * 底层基础组件，用于其他页面和组件继承
 */

import { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Button, Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import Meta from '~/utils/meta'
import { Card, TImage, Nodata, Paging, Modal, TButton, Countdown, TImageUploader, Tabs } from '~/components'

import './comp.scss'

/**
 * 页面props
 */
type PageStateProps = {
  /**
   * 子元素
   */
  children?: any
  counter: any
}

/**
 * 页面state
 */
type PageState = {
  type: string
  imageList: Array<string>
  hasMore: boolean
  showPaging: boolean
  modalVisible: boolean
  modalType: 'center' | 'bottom'
}

interface Comp {
  props: PageStateProps
  state: PageState
}

@inject('counter')
@observer
class Comp extends Component {

  constructor(props) {
    super(props)
    Meta._setTitle('底层基础组件，用于其他页面和组件继承')
    this.state = {
      type: 'image',
      imageList: [
        'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584433500&di=b0d1428f12e1cdea17f4d8e667298aad&src=http://cdn2.image.apk.gfan.com/asdf/PImages/2014/12/26/211610_2d6bc9db3-77eb-4d80-9330-cd5e95fa091f.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584537201012&di=50279a8b6a931992f1610cac5653c469&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf233e9732cb27eca8064388ffc.jpg',
        'https://ss0.bd2sdsdfsdtatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584433500&di=b0d1428f12e1cdea17f4d8e667298aad&src=http://cdn2.image.apk.gfan.com/asdf/PImages/2014/12/26/211610_2d6bc9db3-77eb-4d80-9330-cd5e95fa091f.png',
        'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584433500&di=b0d1428f12e1cdea17f4d8e667298aad&src=http://cdn2.image.apk.gfan.com/asdf/PImages/2014/12/26/211610_2d6bc9db3-77eb-4d80-9330-cd5e95fa091f.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584537201012&di=50279a8b6a931992f1610cac5653c469&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf233e9732cb27eca8064388ffc.jpg',
        'https://ss0.bd2sdsdfsdtatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584433500&di=b0d1428f12e1cdea17f4d8e667298aad&src=http://cdn2.image.apk.gfan.com/asdf/PImages/2014/12/26/211610_2d6bc9db3-77eb-4d80-9330-cd5e95fa091f.png',
        'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584433500&di=b0d1428f12e1cdea17f4d8e667298aad&src=http://cdn2.image.apk.gfan.com/asdf/PImages/2014/12/26/211610_2d6bc9db3-77eb-4d80-9330-cd5e95fa091f.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584537201012&di=50279a8b6a931992f1610cac5653c469&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf233e9732cb27eca8064388ffc.jpg',
        'https://ss0.bd2sdsdfsdtatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584433500&di=b0d1428f12e1cdea17f4d8e667298aad&src=http://cdn2.image.apk.gfan.com/asdf/PImages/2014/12/26/211610_2d6bc9db3-77eb-4d80-9330-cd5e95fa091f.png',
      ],
      hasMore: true,
      showPaging: true,
      modalVisible: false,
      modalType: 'center'
    }
  }

  // 监听mobx状态变化
  componentWillReact() {
    console.log('componentWillReact', this.props)
  }

  componentWillMount() {
    this.setState({
      type: this.$router.params.type
    })
  }

  onReachBottom() {
    console.log('reachBottom')
    const { showPaging } = this.state
    if (!showPaging) {
      this.setState({
        showPaging: true
      })
    }
    this.queryData()
  }

  queryData() {
    const { imageList } = this.state
    setTimeout(() => {
      if (imageList.length <= 20) {
        this.setState({
          imageList: this.state.imageList.concat(['https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584433500&di=b0d1428f12e1cdea17f4d8e667298aad&src=http://cdn2.image.apk.gfan.com/asdf/PImages/2014/12/26/211610_2d6bc9db3-77eb-4d80-9330-cd5e95fa091f.png',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584537201012&di=50279a8b6a931992f1610cac5653c469&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf233e9732cb27eca8064388ffc.jpg',
            'https://ss0.bd2sdsdfsdtatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584433500&di=b0d1428f12e1cdea17f4d8e667298aad&src=http://cdn2.image.apk.gfan.com/asdf/PImages/2014/12/26/211610_2d6bc9db3-77eb-4d80-9330-cd5e95fa091f.png'])
        })
      } else {
        this.setState({
          hasMore: false,
        })
      }
    }, 1000);
  }

  /**
   * 展示弹窗
   * @param type 类型
   */
  showModal(type) {
    this.setState({
      modalVisible: true,
      modalType: type
    })
  }

  /**
   * 图片数组变更回调
   */
  handleImgListChange(list) {
    console.log('comp page list', list)
    this.setState({
      imgList: list
    })
  }

  /**
   * 测试变表单验证方法
   */
  handleValidate() {
    const funcs = this._validator.funcs
    const validResult = this._validator.validate({
      phone: [
        {
          errMsg: '请输入手机号',
          test: funcs._notEmpty
        },
        {
          errMsg: '测试单字段多验证规则提示',
          test: val => val.length === 11
        },
      ],
      address: [
        {
          errMsg: '请输入地址',
          test: funcs._notEmpty
        }
      ]
    }, true, this.state)
    if (validResult.success) {
      this._toast.show('验证成功')
    } else {
      console.error('validResult', validResult)
    }
  }

  handleInput(type, e) {
    this.setState({
      [type]: e.detail.value
    })
  }

  // tab标签页切换
  handleTabChange(e) {
    console.log('handleTabChange', e)
  }

  render() {
    const { type, imageList, hasMore, modalVisible, modalType } = this.state
    return (
      <View className='comp-page'>
        <View className='comp-page-title'>组件演示</View>
        {
          type === 'image' &&
          <View className='demo-page-item'>
            图片组件
            {
              imageList.map((item, index) => {
                return (
                  <TImage src={item}
                    canPreview
                    previewConfig={{
                      urls: imageList,
                      current: index,
                    }}
                    width={150}
                    height={150}
                    showLoading
                  />
                )
              })
            }
          </View>
        }
        {
          type === 'card' || type === 'paging' &&
          <View className='demo-page-item'>
            卡片组件
            {
              imageList.map((item, index) => {
                return (
                  <Card customStyle={{
                    borderRadius: 20,
                    hSpace: 20,
                    vSpace: 20,
                    padding: 20
                  }}
                  >
                    卡片
                  </Card>
                )
              })
            }
          </View>
        }

        {
          type === 'default' &&
          <View className='demo-page-item'>
            缺省组件
            <Nodata />
          </View>
        }

        {
          type === 'paging' &&
          <View className='demo-page-item'>
            缺省组件
            <Paging hasMore={hasMore} showPaging />
          </View>
        }

        {
          type === 'modal' &&
          <View className='demo-page-item'>
            弹窗组件
            <Button onClick={this.showModal.bind(this, 'center')}>点击展示弹窗（居中弹窗）</Button>
            <Button onClick={this.showModal.bind(this, 'bottom')}>点击展示弹窗（底部弹窗）</Button>
            <Modal
              positionType={modalType}
              title='弹窗标题'
              visible={modalVisible}
            >
              <View>这是内容这是内容这是内容这是内
              容这是内容这是内容这是内容这是内容这是内容这是内容
              </View>
            </Modal>
          </View>
        }

        {
          type === 'button' &&
          <View className='demo-page-item'>
            按钮组件
            <TButton
              wrap={false}
              text='按钮文字'
              backgroundColor='#45aafa'
              width='80%'
              wrapperHeight={140}
            />
          </View>
        }

        {
          type === 'countdown' &&
          <View className='demo-page-item'>
            倒计时组件
            <Countdown
              // leftTime={500}
              endTime={1584720000000}
              acmlDateToHours={false}
            />
          </View>
        }

        {
          type === 'imgUploader' &&
          <View className='demo-page-item'>
            图片上传组件
            <TImageUploader
              defaultList={[
                'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584433500&di=b0d1428f12e1cdea17f4d8e667298aad&src=http://cdn2.image.apk.gfan.com/asdf/PImages/2014/12/26/211610_2d6bc9db3-77eb-4d80-9330-cd5e95fa091f.png',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584537201012&di=50279a8b6a931992f1610cac5653c469&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf233e9732cb27eca8064388ffc.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584537201012&di=50279a8b6a931992f1610cac5653c469&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fc75c10385343fbf233e9732cb27eca8064388ffc.jpg',
              ]}
              onChange={this.handleImgListChange.bind(this)}
            />
          </View>
        }

        {
          type === 'formValidate' &&
          <View className='demo-page-item'>
            表单验证演示
            <Button onClick={this.handleValidate.bind(this)}>验证</Button>
            <Input type='number' placeholder='请输入手机号' onInput={this.handleInput.bind(this, 'phone')} />
            <Input type='text' placeholder='请输入地址' onInput={this.handleInput.bind(this, 'address')} />
          </View>
        }

        {
          type === 'tabs' &&
          <View className='demo-page-item'>
            标签页组件演示
            <Tabs
              initTab={2}
              list={[
                {
                  text: '标签1',
                  id: 1
                },
                {
                  text: '标签2',
                  id: 2
                },
              ]}
              onChange={this.handleTabChange.bind(this)}
            />
          </View>
        }


        {/* <Button onClick={this.formValidate.bind(this)}>测试表单验证</Button> */}
        {/* <Button onClick={this.testToast}>toast测试</Button> */}
      </View>
    )
  }
}

export default Comp as ComponentType
