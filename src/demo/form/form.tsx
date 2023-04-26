import React, { useState } from 'react'
import { View, Button, Input } from '@tarojs/components'
import CustomNavigationHeader from '@/components/navigation_header'
import validator from '@/utils/validator'
import './form.scss'

export default function Form() {
	// 按照规范定义数据结构
	const [formValues, setFormValues] = useState({
		name: '',
		mobile: '',
	})

	// 按照规范定义规则
	const rules = {
		// 1. 自行实现规则
		name: [
			{
				test: value => !!value,
				errMsg: '姓名不能为空',
			},
		],
		// 2. 使用 validator.funcs
		age: [
			{
				test: validator.funcs._notEmpty,
				errMsg: '年龄不能为空',
			},
		],
		// 3. 使用 validator.rules
		mobile: [
			{
				test: validator.funcs._notEmpty,
				errMsg: '手机号不能为空',
			},
			validator.rules._isMobile,
		],
	}

	// 按照规范存储数据
	const handleChange = (fieldName: string, event) => {
		console.log('handleChange', fieldName, event)
		setFormValues({
			...formValues,
			[fieldName]: event.target.value,
		})
	}

	// 按照规范校验数据
	const handleSubmit = () => {
		console.log('formValues', formValues)
		// 使用 validator.validate 方法校验
		const validateRes = validator.validate(rules, true, formValues)
		console.log('validate', validateRes)
	}

	return (
		<View>
			<CustomNavigationHeader title="表单演示" />
			<View className="form-container">
				<View className="form-item">
					<View className="form-item-label">姓名</View>
					<View className="form-item-input">
						<Input
							type="text"
							placeholder="请输入姓名"
							onInput={event => handleChange('name', event)}
						/>
					</View>
				</View>
				<View className="form-item">
					<View className="form-item-label">年龄</View>
					<View className="form-item-input">
						<Input
							type="text"
							placeholder="请输入年龄"
							onInput={event => handleChange('age', event)}
						/>
					</View>
				</View>
				<View className="form-item">
					<View className="form-item-label">手机号</View>
					<View className="form-item-input">
						<Input
							type="text"
							placeholder="请输入手机号"
							onInput={event => handleChange('mobile', event)}
						/>
					</View>
				</View>
			</View>
			<Button onClick={handleSubmit}>提交</Button>
		</View>
	)
}
