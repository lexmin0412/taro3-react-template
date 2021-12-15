declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.styl'

declare namespace JSX {
	interface IntrinsicElements {
		import: React.DetailedHTMLProps<
			React.EmbedHTMLAttributes<HTMLEmbedElement>,
			HTMLEmbedElement
		>
	}
}

// @ts-ignore
declare const process: {
	env: {
		TARO_ENV:
			| 'weapp'
			| 'swan'
			| 'alipay'
			| 'h5'
			| 'rn'
			| 'tt'
			| 'quickapp'
			| 'qq'
			| 'jd'
		/**
		 * 构建环境
		 */
		BUILD_ENV: 'local' | 'dev' | 'test' | 'uat' | 'pro'
		[key: string]: any
	}
}

/**
 * 接口baseurl
 */
declare const TARO_API_BASE: string

declare const wx: {
	[key: string]: any
}
