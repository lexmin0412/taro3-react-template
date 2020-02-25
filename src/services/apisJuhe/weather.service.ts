import BaseRequest from '~/utils/request'

class WeatherService extends BaseRequest {
  constructor() {
    super({
      hostKey: 'apisJuhe'
    })
	}

	/**
	 * 查询天气预报
	 */
  queryWeather(params: {
		city: string
	}): Promise<any> {
		const { city } = params
    return this.get({
			url: `/simpleWeather/query?city=${encodeURIComponent('长沙')}&key=82f914d9fe22175b65665f4055eb3509`,
			data: params
    })
  }
}

export default new WeatherService() as WeatherService
