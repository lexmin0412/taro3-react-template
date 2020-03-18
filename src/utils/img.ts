import Taro from '@tarojs/taro'

class Img {
  constructor() {}

  /**
   * 图片url拼接
   */
  handleImgUrl(url: any): string {
    // 如果url不带https
    if (!(url.indexOf('http') > -1)) {
      url = `https://xxx.com/${url}`
    }
    return url
  }

  /**
   * 图片预览
   */
  public preview(param: {
    /**
     * 当前索引 0开始
     */
    current: number;
    /**
     * 图片列表
     */
    list: Array<string>;
  }) {
    Taro.navigateTo({
      // @ts-ignore
      url: `/pages/common/imgPreview?data=${encodeURIComponent(JSON.stringify(param))}`
    })
  }
}

export default new Img()
