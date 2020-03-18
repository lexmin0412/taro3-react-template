import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';

import defaultIcon from '~/assets/images/common/img_default_goods.png'
import './Nodata.scss'

/**
 * 组件需要的Props定义
 */
interface IProps {
	height?: number; // 高度
	icon?: string; // 颜色
	text?: string;  // 缺省文字
}

export default class Line extends Component<IProps> {

	render() {
		const { text, height, icon } = this.props
		return (
			<View className="nodata-comp" style={{height: height + 'px'}}>
				<Image className="no-data-icon" src={icon||defaultIcon}
				/>
				<Text className="no-data-text">{text||'暂无相关数据'}</Text>
			</View>
		);
	}
}
