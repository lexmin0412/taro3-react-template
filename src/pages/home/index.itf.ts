/**
 * redux数据定义
 */
interface IPageStateProps {
  home: {
    exbitionData: {
      exhibition_list: Array<any>
    }
  },
  loading: {
    global: boolean;
  };
}

/**
 * 定义dispatch
 */
interface IPageDispatchProps {
  dispatch: (arg0: any) => any;
}

/**
 * 界面属性定义
 */
export interface IPageOwnProps { }

/**
 * 页面state定义
 */
export interface IPageState { }

/**
 * IProps
 */
export type IProps = IPageStateProps & IPageDispatchProps & IPageOwnProps;
