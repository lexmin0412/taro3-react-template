/*! For license information please see 3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"132":function(e,t,r){"use strict";r.r(t),r.d(t,"View",(function(){return k})),r.d(t,"Icon",(function(){return P})),r.d(t,"Progress",(function(){return C})),r.d(t,"RichText",(function(){return S})),r.d(t,"Text",(function(){return N})),r.d(t,"Button",(function(){return I})),r.d(t,"Checkbox",(function(){return T})),r.d(t,"CheckboxGroup",(function(){return V})),r.d(t,"Editor",(function(){return M})),r.d(t,"Form",(function(){return D})),r.d(t,"Input",(function(){return A})),r.d(t,"Label",(function(){return L})),r.d(t,"Picker",(function(){return R})),r.d(t,"PickerView",(function(){return B})),r.d(t,"PickerViewColumn",(function(){return F})),r.d(t,"Radio",(function(){return X})),r.d(t,"RadioGroup",(function(){return H})),r.d(t,"Slider",(function(){return K})),r.d(t,"Switch",(function(){return W})),r.d(t,"CoverImage",(function(){return U})),r.d(t,"Textarea",(function(){return q})),r.d(t,"CoverView",(function(){return z})),r.d(t,"MovableArea",(function(){return G})),r.d(t,"MovableView",(function(){return J})),r.d(t,"ScrollView",(function(){return Y})),r.d(t,"Swiper",(function(){return Z})),r.d(t,"SwiperItem",(function(){return Q})),r.d(t,"FunctionalPageNavigator",(function(){return $})),r.d(t,"Navigator",(function(){return ee})),r.d(t,"Audio",(function(){return te})),r.d(t,"Camera",(function(){return re})),r.d(t,"Image",(function(){return oe})),r.d(t,"LivePlayer",(function(){return ne})),r.d(t,"Video",(function(){return ce})),r.d(t,"Map",(function(){return ae})),r.d(t,"Canvas",(function(){return ie})),r.d(t,"Ad",(function(){return ue})),r.d(t,"OfficialAccount",(function(){return le})),r.d(t,"OpenData",(function(){return se})),r.d(t,"WebView",(function(){return fe})),r.d(t,"NavigationBar",(function(){return de})),r.d(t,"Block",(function(){return pe})),r.d(t,"CustomWrapper",(function(){return me}));var o=r(7),n=r.n(o),c=r(16),a=r.n(c),i=r(31),u=r.n(i),l=r(19),s=r.n(l),f=r(26),d=r.n(f),p=r(27),m=r.n(p),v=r(133),y=r.n(v),b=r(135),h=r.n(b),w=r(137),x=r.n(w),g=r(23),O=r.n(g);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=x()(e);if(t){var n=x()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return h()(this,r)}}n.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var c=e.ref.current,a=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var u=r.substr(2).toLowerCase(),l=a;return"taro-scroll-view-core"===t&&"scroll"===u&&(l=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([u,l]),c.addEventListener(u,l)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(o)if("string"==typeof i)c.style.cssText="";else for(var s in i)updateStyle(c,s,"");for(var f in a)updateStyle(c,f,a[f])}else c.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return o.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&a.push(e)})),(a=[].concat(O()(a),O()(c))).join(" ")}(c,o,n):a}var _=function reactifyWebComponent(e){var t=function(t){y()(Index,t);var r=_createSuper(Index);function Index(e){var t;return d()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(o.createRef)(),t}return m()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===s()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=u()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,c={"ref":this.ref};return n&&(c.dangerouslySetInnerHTML=n),Object(o.createElement)(e,c,r)}}]),Index}(n.a.Component);return n.a.forwardRef((function(e,r){return n.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=_("taro-input-core"),E=(n.a.createElement,n.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),n.a.createElement(j,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),k=_("taro-view-core"),P=_("taro-icon-core"),C=_("taro-progress-core"),S=_("taro-rich-text-core"),N=_("taro-text-core"),I=_("taro-button-core"),T=_("taro-checkbox-core"),V=_("taro-checkbox-group-core"),M=_("taro-editor-core"),D=_("taro-form-core"),A=E,L=_("taro-label-core"),R=_("taro-picker-core"),B=_("taro-picker-view-core"),F=_("taro-picker-view-column-core"),X=_("taro-radio-core"),H=_("taro-radio-group-core"),K=_("taro-slider-core"),W=_("taro-switch-core"),U=_("taro-cover-image-core"),q=_("taro-textarea-core"),z=_("taro-cover-view-core"),G=_("taro-movable-area-core"),J=_("taro-movable-view-core"),Y=_("taro-scroll-view-core"),Z=_("taro-swiper-core"),Q=_("taro-swiper-item-core"),$=_("taro-functional-page-navigator-core"),ee=_("taro-navigator-core"),te=_("taro-audio-core"),re=_("taro-camera-core"),oe=_("taro-image-core"),ne=_("taro-live-player-core"),ce=_("taro-video-core"),ae=_("taro-map-core"),ie=_("taro-canvas-core"),ue=_("taro-ad-core"),le=_("taro-official-account-core"),se=_("taro-open-data-core"),fe=_("taro-web-view-core"),de=_("taro-navigation-bar-core"),pe=o.Fragment,me=_("taro-custom-wrapper-core")},"133":function(e,t,r){var o=r(134);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"134":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"135":function(e,t,r){var o=r(19).default,n=r(136);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"136":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"137":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"138":function(e,t,r){var o,n,c,a,i=r(19).default;a=function(e,t,r,o){"use strict";function _interopDefaultLegacy(e){return e&&"object"===i(e)&&"default"in e?e:{"default":e}}var n=_interopDefaultLegacy(t),c=_interopDefaultLegacy(r),a=function __assign(){return(a=Object.assign||function __assign(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,n,c=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=c.next()).done;)a.push(o.value)}catch(e){n={"error":e}}finally{try{o&&!o.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}return a}var u=function createCommonjsModule(e,t,r){return e(r={"path":t,"exports":{},"require":function require(e,t){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&r.path)}},r.exports),r.exports}((function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var n=i(o);if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var c=classNames.apply(null,o);c&&e.push(c)}else if("object"===n)for(var a in o)t.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()})),l=function XButton(e){var t,r=e.children,i=e.className,l=e.openType,s=e.loading,f=void 0!==s&&s,d=e.customStyle,p=void 0===d?{}:d,m=e.onClick,v=e.inline,y=void 0!==v&&v,b=e.size,h=void 0===b?"normal":b,w=e.disabled,x=void 0!==w&&w,g=e.round,O=void 0!==g&&g,_=e.hollow,j=void 0!==_&&_,E=e.customColor,k=n.default.getEnv()===n.default.ENV_TYPE.WEB?{}:{"openType":l,"loading":f},P=u("x-button",i,((t={})["x-button-"+h]=h,t["x-button-flex"]=y,t["x-button-round"]=O,t["x-button-hollow"]=j,t["x-button-disabled"]=x,t));return c.default.createElement(o.Button,a({"style":a(a({},function computedStyle(){return E?{"color":j?E:"#fff","backgroundColor":j?"#fff":E,"border":j?"1px solid "+E:0}:{"color":j?"#FF0036":"#fff","backgroundColor":j?"#fff":"#FF0036","border":j?"1px solid #FF0036":0}}()),p),"className":P},k,{"onClick":function handleClick(e){!x&&m&&m(e)}}),r)};e.XButton=l,e.XCheckbox=function XCheckbox(e){var t,r=e.prefixCls,n=void 0===r?"x-checkbox":r,i=e.className,l=e.checked,s=void 0!==l&&l,f=e.onChange,d=e.disabled,p=e.color,m=e.checkedColor,v=e.customStyle,y=u(n,i,"iconfont",((t={})[n+"-checked"]=s,t[n+"-disabled"]=d,t)),b=s?{"color":m}:{},h=a(a(a({},s?{}:{"color":p}),b),v);return c.default.createElement(o.View,{"className":y,"onClick":d?void 0:function handleClick(e){f&&f(e)},"style":h},s?c.default.createElement(o.Block,null,""):c.default.createElement(o.Block,null,""))},e.XImage=function XImage(e){var t=e.src,i=e.errImg,l=e.className,s=e.mode,f=void 0===s?"aspectFit":s,d=e.previewUrls,p=e.onClick,m=u(l,"x-image"),v=__read(r.useState(t),2),y=v[0],b=v[1],h={"mode":f};return c.default.createElement(o.Image,a({"src":y,"onError":function handleError(e){console.log("handleError",e),b(i||"https://img20.360buyimg.com/ling/jfs/t1/20876/36/12835/3043/5c9c2929Ed18cfb11/15b1c03ec830ab8e.png")}},h,{"onClick":function handleClick(e){d&&n.default.previewImage({"current":d[0],"urls":d}),p&&p(e)},"className":m}))},e.XLoadMore=function XLoadMore(e){var t=e.prefixCls,r=void 0===t?"x-load-more":t,n=e.hasMore,a=e.loadingText,i=e.loadedText,l=u(r,{});return c.default.createElement(o.View,{"className":l},n?function renderLoadingStatus(){return a||"正在加载更多..."}():function renderLoadedStatus(){return i||"—— 没有更多数据了 ——"}())},e.XModal=function XModal(e){var t,n=e.isOpen,a=e.onCancel,i=e.onConfirm,s=e.onClose,f=e.clickMaskToClose,d=e.headerTitle,p=e.showCancel,m=void 0===p||p,v=e.children,y=e.remindIcon,b=e.remindTitle,h=e.confirmText,w=e.cancelText,x=__read(r.useState(n),2),g=x[0],O=x[1];r.useEffect((function(){console.log("modal components useEffects",n),O(n)}),[n]);var _=u("x-modal",{"show":g}),j=u("x-modal-main",((t={})["padding-top-md"]=!d,t));return c.default.createElement(o.View,{"className":_},c.default.createElement(o.View,{"className":"x-modal-mask","onClick":f?function handleClose(){s&&s()}:void 0}),c.default.createElement(o.View,{"className":j},d&&c.default.createElement(o.View,{"className":"x-modal-main-header"},d),b?c.default.createElement(o.View,{"className":"x-modal-main-remind"},y&&c.default.createElement(o.Image,{"src":y,"className":"x-modal-main-remind-icon"}),c.default.createElement(o.View,{"className":"x-modal-main-remind-title"},b),v&&c.default.createElement(o.View,{"className":"x-modal-main-remind-text"},v)):c.default.createElement(o.View,{"className":"x-modal-main-content"},v),c.default.createElement(o.View,{"className":"x-modal-main-btns "+(m?"justify-between":"justify-center")},m&&c.default.createElement(l,{"inline":!0,"round":!0,"hollow":!0,"customColor":"#c3c3c3","onClick":function handleCancel(){a&&a()}},w||"取消"),c.default.createElement(l,{"inline":!0,"round":!0,"onClick":function handleConfirm(){i&&i()}},h||"确认"))))},Object.defineProperty(e,"__esModule",{"value":!0})},"object"===i(t)&&void 0!==e?a(t,r(29),r(7),r(132)):(n=[t,r(29),r(7),r(132)],void 0===(c="function"==typeof(o=a)?o.apply(t,n):o)||(e.exports=c))},"139":function(e,t,r){},"145":function(e,t,r){"use strict";r.r(t);var o=r(7),n=r(132),c=r(138),a=r(47),i=(r(139),r(46));t.default=function Index(){Object(o.useEffect)((function(){console.log("process.env","h5"),console.log("TARO_API_BASE","https://m.pro.xxx.com")}),[]);return Object(i.jsx)(n.View,{"className":"index","children":Object(i.jsx)(c.XButton,{"onClick":function onClick(){return function jumpToDemo(e){switch(e){case"router":a.a.navigateTo({"url":"/demo/router/router"})}}("router")},"children":"路由跳转"})})}}}]);