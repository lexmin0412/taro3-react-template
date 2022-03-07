/*! For license information please see 0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"135":function(e,t,r){"use strict";r.r(t),r.d(t,"View",(function(){return P})),r.d(t,"Icon",(function(){return k})),r.d(t,"Progress",(function(){return C})),r.d(t,"RichText",(function(){return N})),r.d(t,"Text",(function(){return S})),r.d(t,"Button",(function(){return I})),r.d(t,"Checkbox",(function(){return V})),r.d(t,"CheckboxGroup",(function(){return B})),r.d(t,"Editor",(function(){return H})),r.d(t,"Form",(function(){return M})),r.d(t,"Input",(function(){return T})),r.d(t,"Label",(function(){return D})),r.d(t,"Picker",(function(){return L})),r.d(t,"PickerView",(function(){return R})),r.d(t,"PickerViewColumn",(function(){return A})),r.d(t,"Radio",(function(){return F})),r.d(t,"RadioGroup",(function(){return X})),r.d(t,"Slider",(function(){return W})),r.d(t,"Switch",(function(){return K})),r.d(t,"CoverImage",(function(){return U})),r.d(t,"Textarea",(function(){return q})),r.d(t,"CoverView",(function(){return z})),r.d(t,"MovableArea",(function(){return G})),r.d(t,"MovableView",(function(){return J})),r.d(t,"ScrollView",(function(){return Y})),r.d(t,"Swiper",(function(){return Z})),r.d(t,"SwiperItem",(function(){return Q})),r.d(t,"FunctionalPageNavigator",(function(){return $})),r.d(t,"Navigator",(function(){return ee})),r.d(t,"Audio",(function(){return te})),r.d(t,"Camera",(function(){return re})),r.d(t,"Image",(function(){return ne})),r.d(t,"LivePlayer",(function(){return oe})),r.d(t,"Video",(function(){return ae})),r.d(t,"Map",(function(){return ce})),r.d(t,"Canvas",(function(){return ie})),r.d(t,"Ad",(function(){return ue})),r.d(t,"OfficialAccount",(function(){return se})),r.d(t,"OpenData",(function(){return le})),r.d(t,"WebView",(function(){return fe})),r.d(t,"NavigationBar",(function(){return de})),r.d(t,"Block",(function(){return pe})),r.d(t,"CustomWrapper",(function(){return me}));var n=r(7),o=r.n(n),a=r(16),c=r.n(a),i=r(32),u=r.n(i),s=r(19),l=r.n(s),f=r(27),d=r.n(f),p=r(28),m=r.n(p),v=r(136),h=r.n(v),y=r(138),b=r.n(y),g=r(140),w=r.n(g),x=r(24),O=r.n(x);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=w()(e);if(t){var o=w()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return b()(this,r)}}o.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,n,o){var a=e.ref.current,c=o[r],i=n?n[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&a.setAttribute(r,c),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(a.mpScrollTop=c);if("scrollLeft"===r)return void(a.mpScrollLeft=c);if("scrollIntoView"===r)return void(a.mpScrollIntoView=c)}if("function"==typeof c&&r.match(/^on[A-Z]/)){var u=r.substr(2).toLowerCase(),s=c;return"taro-scroll-view-core"===t&&"scroll"===u&&(s=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([u,s]),a.addEventListener(u,s)}return"string"==typeof c||"number"==typeof c?(a.setAttribute(r,c),void(a[r]=c)):"boolean"==typeof c?c?(a[r]=!0,a.setAttribute(r,c)):(a[r]=!1,a.removeAttribute(r)):void(a[r]=c)}if("string"==typeof c)return void a.setAttribute(r,c);if(!c)return void a.removeAttribute(r);if(n)if("string"==typeof i)a.style.cssText="";else for(var l in i)updateStyle(a,l,"");for(var f in c)updateStyle(a,f,c[f])}else a.className=n?function getClassName(e,t,r){var n=Array.from(e.classList),o=(t.className||t.class||"").split(" "),a=(r.className||r.class||"").split(" "),c=[];return n.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(t){return t!==e}))):-1===o.indexOf(e)&&c.push(e)})),(c=[].concat(O()(c),O()(a))).join(" ")}(a,n,o):c}var j=function reactifyWebComponent(e){var t=function(t){h()(Index,t);var r=_createSuper(Index);function Index(e){var t;return d()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(n.createRef)(),t}return m()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(n){"children"===n||"key"===n||n in r.props||updateProp(r,e,n,t,r.props)})),Object.keys(this.props).forEach((function(n){updateProp(r,e,n,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===l()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=u()(t,2),n=r[0],o=r[1];e.ref.current&&e.ref.current.removeEventListener(n,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,a={"ref":this.ref};return o&&(a.dangerouslySetInnerHTML=o),Object(n.createElement)(e,a,r)}}]),Index}(o.a.Component);return o.a.forwardRef((function(e,r){return o.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=j("taro-input-core"),E=(o.a.createElement,o.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),o.a.createElement(_,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),P=j("taro-view-core"),k=j("taro-icon-core"),C=j("taro-progress-core"),N=j("taro-rich-text-core"),S=j("taro-text-core"),I=j("taro-button-core"),V=j("taro-checkbox-core"),B=j("taro-checkbox-group-core"),H=j("taro-editor-core"),M=j("taro-form-core"),T=E,D=j("taro-label-core"),L=j("taro-picker-core"),R=j("taro-picker-view-core"),A=j("taro-picker-view-column-core"),F=j("taro-radio-core"),X=j("taro-radio-group-core"),W=j("taro-slider-core"),K=j("taro-switch-core"),U=j("taro-cover-image-core"),q=j("taro-textarea-core"),z=j("taro-cover-view-core"),G=j("taro-movable-area-core"),J=j("taro-movable-view-core"),Y=j("taro-scroll-view-core"),Z=j("taro-swiper-core"),Q=j("taro-swiper-item-core"),$=j("taro-functional-page-navigator-core"),ee=j("taro-navigator-core"),te=j("taro-audio-core"),re=j("taro-camera-core"),ne=j("taro-image-core"),oe=j("taro-live-player-core"),ae=j("taro-video-core"),ce=j("taro-map-core"),ie=j("taro-canvas-core"),ue=j("taro-ad-core"),se=j("taro-official-account-core"),le=j("taro-open-data-core"),fe=j("taro-web-view-core"),de=j("taro-navigation-bar-core"),pe=n.Fragment,me=j("taro-custom-wrapper-core")},"136":function(e,t,r){var n=r(137);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"137":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"138":function(e,t,r){var n=r(19).default,o=r(139);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"139":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"140":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"141":function(e,t,r){"use strict";r.d(t,"a",(function(){return NavigationHeader}));r(7);var n=r(135),o=r(53),a=(r(142),r(47));function NavigationHeader(e){var t=e.title,r=function useNavigationBarInfo(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={},r=e.menuButtonInfo||t,n=e.systemInfo||Object(o.b)(),a=n.statusBarHeight,c=40;return{"navigationBarHeight":a+(c=2*(r.top-n.statusBarHeight)+r.height),"navigationContentHeight":c,"menuButtonHeight":r.height,"navigationPaddding":n.windowWidth-r.right,"statusBarHeight":n.statusBarHeight,"menuButtonWidth":r.width}}(),c=r.statusBarHeight,i=r.navigationBarHeight,u=r.navigationContentHeight,s=r.navigationPaddding;return Object(a.jsxs)(n.View,{"className":"nav-header","style":{"height":i,"padding":"0 ".concat(s,"px")},"children":[Object(a.jsx)(n.View,{"className":"nav-header-status-placeholder","style":{"height":c}}),Object(a.jsx)(n.View,{"className":"nav-header-content","style":{"height":"".concat(u,"px")},"children":Object(a.jsx)(n.View,{"className":"nav-header-content-center","children":t||"页面标题"})})]})}},"142":function(e,t,r){},"144":function(e,t,r){var n,o,a,c,i=r(19).default;c=function(e,t,r,n){"use strict";function _interopDefaultLegacy(e){return e&&"object"===i(e)&&"default"in e?e:{"default":e}}var o=_interopDefaultLegacy(t),a=_interopDefaultLegacy(r),c=function __assign(){return(c=Object.assign||function __assign(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)c.push(n.value)}catch(e){o={"error":e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return c}var u=function createCommonjsModule(e,t,r){return e(r={"path":t,"exports":{},"require":function require(e,t){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&r.path)}},r.exports),r.exports}((function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var o=i(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var a=classNames.apply(null,n);a&&e.push(a)}else if("object"===o)for(var c in n)t.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()})),s=function XButton(e){var t,r=e.children,i=e.className,s=e.openType,l=e.loading,f=void 0!==l&&l,d=e.customStyle,p=void 0===d?{}:d,m=e.onClick,v=e.inline,h=void 0!==v&&v,y=e.size,b=void 0===y?"normal":y,g=e.disabled,w=void 0!==g&&g,x=e.round,O=void 0!==x&&x,j=e.hollow,_=void 0!==j&&j,E=e.customColor,P=o.default.getEnv()===o.default.ENV_TYPE.WEB?{}:{"openType":s,"loading":f},k=u("x-button",i,((t={})["x-button-"+b]=b,t["x-button-flex"]=h,t["x-button-round"]=O,t["x-button-hollow"]=_,t["x-button-disabled"]=w,t));return a.default.createElement(n.Button,c({"style":c(c({},function computedStyle(){return E?{"color":_?E:"#fff","backgroundColor":_?"#fff":E,"border":_?"1px solid "+E:0}:{"color":_?"#FF0036":"#fff","backgroundColor":_?"#fff":"#FF0036","border":_?"1px solid #FF0036":0}}()),p),"className":k},P,{"onClick":function handleClick(e){!w&&m&&m(e)}}),r)};e.XButton=s,e.XCheckbox=function XCheckbox(e){var t,r=e.prefixCls,o=void 0===r?"x-checkbox":r,i=e.className,s=e.checked,l=void 0!==s&&s,f=e.onChange,d=e.disabled,p=e.color,m=e.checkedColor,v=e.customStyle,h=u(o,i,"iconfont",((t={})[o+"-checked"]=l,t[o+"-disabled"]=d,t)),y=l?{"color":m}:{},b=c(c(c({},l?{}:{"color":p}),y),v);return a.default.createElement(n.View,{"className":h,"onClick":d?void 0:function handleClick(e){f&&f(e)},"style":b},l?a.default.createElement(n.Block,null,""):a.default.createElement(n.Block,null,""))},e.XImage=function XImage(e){var t=e.src,i=e.errImg,s=e.className,l=e.mode,f=void 0===l?"aspectFit":l,d=e.previewUrls,p=e.onClick,m=u(s,"x-image"),v=__read(r.useState(t),2),h=v[0],y=v[1],b={"mode":f};return a.default.createElement(n.Image,c({"src":h,"onError":function handleError(e){console.log("handleError",e),y(i||"https://img20.360buyimg.com/ling/jfs/t1/20876/36/12835/3043/5c9c2929Ed18cfb11/15b1c03ec830ab8e.png")}},b,{"onClick":function handleClick(e){d&&o.default.previewImage({"current":d[0],"urls":d}),p&&p(e)},"className":m}))},e.XLoadMore=function XLoadMore(e){var t=e.prefixCls,r=void 0===t?"x-load-more":t,o=e.hasMore,c=e.loadingText,i=e.loadedText,s=u(r,{});return a.default.createElement(n.View,{"className":s},o?function renderLoadingStatus(){return c||"正在加载更多..."}():function renderLoadedStatus(){return i||"—— 没有更多数据了 ——"}())},e.XModal=function XModal(e){var t,o=e.isOpen,c=e.onCancel,i=e.onConfirm,l=e.onClose,f=e.clickMaskToClose,d=e.headerTitle,p=e.showCancel,m=void 0===p||p,v=e.children,h=e.remindIcon,y=e.remindTitle,b=e.confirmText,g=e.cancelText,w=__read(r.useState(o),2),x=w[0],O=w[1];r.useEffect((function(){console.log("modal components useEffects",o),O(o)}),[o]);var j=u("x-modal",{"show":x}),_=u("x-modal-main",((t={})["padding-top-md"]=!d,t));return a.default.createElement(n.View,{"className":j},a.default.createElement(n.View,{"className":"x-modal-mask","onClick":f?function handleClose(){l&&l()}:void 0}),a.default.createElement(n.View,{"className":_},d&&a.default.createElement(n.View,{"className":"x-modal-main-header"},d),y?a.default.createElement(n.View,{"className":"x-modal-main-remind"},h&&a.default.createElement(n.Image,{"src":h,"className":"x-modal-main-remind-icon"}),a.default.createElement(n.View,{"className":"x-modal-main-remind-title"},y),v&&a.default.createElement(n.View,{"className":"x-modal-main-remind-text"},v)):a.default.createElement(n.View,{"className":"x-modal-main-content"},v),a.default.createElement(n.View,{"className":"x-modal-main-btns "+(m?"justify-between":"justify-center")},m&&a.default.createElement(s,{"inline":!0,"round":!0,"hollow":!0,"customColor":"#c3c3c3","onClick":function handleCancel(){c&&c()}},g||"取消"),a.default.createElement(s,{"inline":!0,"round":!0,"onClick":function handleConfirm(){i&&i()}},b||"确认"))))},Object.defineProperty(e,"__esModule",{"value":!0})},"object"===i(t)&&void 0!==e?c(t,r(30),r(7),r(135)):(o=[t,r(30),r(7),r(135)],void 0===(a="function"==typeof(n=c)?n.apply(t,o):n)||(e.exports=a))}}]);