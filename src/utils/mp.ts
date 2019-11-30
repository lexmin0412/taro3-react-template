/**
 * 小程序相关工具类封装
 */
import Taro from '@tarojs/taro'

/**
 * 检查小程序版本更新
 */
export const checkUpdate = () => {
  if ( process.env.TARO_ENV === 'weapp' ) {
    const updateManager = Taro.getUpdateManager();
    updateManager.onUpdateReady(() => {
      Taro.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate();
          }
        }
      });
    });
  }
}
