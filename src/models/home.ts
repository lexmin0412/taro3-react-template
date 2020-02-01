import MicangPhpService from '~/services/vJuhe/micang.php.service'

export default {
	namespace: 'home',
	state: { exbitionData: {} },
	effects: {
		/**
		 * 获取用户信息【鉴权】app 交互
		 */
		*getExhibition({payload}, { call, put }) {
			const { data } = yield call(
				MicangPhpService.getExhibition.bind(MicangPhpService, payload)
			);
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
		// 保存数据到redux
		saveExhibitionData(state, { payload }) {
			const { data } = payload;
      return { ...state,
        exbitionData: data
      };
		}
	}
};
