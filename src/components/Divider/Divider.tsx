import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

/**
 * 组件需要的Props定义
 */
interface IProps {
	height?: number; // 高度
	color?: string; // 颜色
}

export default class Line extends Component<IProps> {

	render() {
		return (
			<View
				style={{
					background: this.props.color || '#F5F5F5',
					height: `${Taro.pxTransform(this.props.height || 10)}`
				}}
			/>
		);
	}
}
