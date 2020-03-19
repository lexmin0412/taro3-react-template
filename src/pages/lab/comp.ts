
/**
 * 页面props
 */
export type PageStateProps = {
  counterStore: any;
}

/**
 * 页面state
 */
export type PageState = {
  type: string;
  imageList: Array<string>;
  hasMore: boolean;
  showPaging: boolean;
}
