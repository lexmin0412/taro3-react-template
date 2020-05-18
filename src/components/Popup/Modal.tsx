/**
  * 弹窗组件
  */

 import { ComponentType } from 'react'
 import Taro, { Component } from '@tarojs/taro'
 import { View } from '@tarojs/components'

 import './Modal.scss'

 /**
  * props属性
  */
 interface IProps {
   /**
    * 子元素
    */
   children?: any;
   /**
    * 内容区位置 center-居中 bottom-底部
    */
   positionType: 'center' | 'bottom'
   /**
    * 标题
    */
   title: string;
   /**
    * 弹窗是否可见
    */
   visible: boolean;
   /**
    * 关闭弹窗回调
    */
   handleClose: Function
 }

 /**
  * 组件内部属性
  */
 interface IState {
   /**
    * 内部控制弹窗展示变量
    */
   modalVisible: boolean;
 }

 interface Modal {
   props: IProps;
   state: IState;
 }

class Modal extends Component {

   static defaultProps: IProps = {
     positionType: 'bottom',
     title: '标题',
     visible: false,
     handleClose: () => {
       console.log('handleClose')
     }
   }

   // 监听props改变 设置state
   componentWillReceiveProps(nextProps) {
     console.log('prevProps', nextProps, this.props)
     this.setState({
       modalVisible: nextProps.visible
     })
     if (!nextProps.visible) {
       this.props.handleClose()
     }
   }

   handleClosebtnClick() {
     this.setState({
       modalVisible: false
     }, () => {
       this.props.handleClose()
     })
   }

   render () {
     const { positionType, children, title } = this.props
     const { modalVisible } = this.state
     return (
       modalVisible ?
         <View className="Modal-comp">
           <View className={`modal-comp-main ${positionType}`}>
             <View className="modal-comp-header">
               <View className="modal-comp-title">
                 {title}
               </View>
               <View className="modal-comp-close-btn"
                 onClick={this.handleClosebtnClick.bind(this)}
               >
                 关闭
             </View>
             </View>
             <View className="modal-comp-content">
               {children}
             </View>
           </View>
         </View>
         : null
     )
   }
 }

 export default Modal as ComponentType
