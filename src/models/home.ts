import MicangPhpService from '~/services/php/micang.php.service'

export default {
	namespace: 'home',
	state: { exbitionData: {} },
	effects: {
		/**
		 * 获取用户信息【鉴权】app 交互
		 */
		*getExhibition({payload}, { call, put }) {
			const { code, data } = yield call(
				MicangPhpService.getExhibition.bind(MicangPhpService, payload)
			);
			console.log('model data', code, data);
			if (data) {
				yield put({
					type: 'saveExhibitionData',
					payload: {
						data
					}
				});
			}
		}
	},
	reducers: {
		// 保存数据
		saveExhibitionData(state, { payload }) {
			console.log('reducer payload', payload);
			const { data } = payload;
      return { ...state,
        exbitionData: data
      };
		}
	}
};
