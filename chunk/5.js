(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"136":function(e,t,r){"use strict";r.r(t),r.d(t,"View",(function(){return S})),r.d(t,"Icon",(function(){return k})),r.d(t,"Progress",(function(){return E})),r.d(t,"RichText",(function(){return H})),r.d(t,"Text",(function(){return I})),r.d(t,"Button",(function(){return C})),r.d(t,"Checkbox",(function(){return R})),r.d(t,"CheckboxGroup",(function(){return B})),r.d(t,"Editor",(function(){return N})),r.d(t,"Form",(function(){return V})),r.d(t,"Input",(function(){return D})),r.d(t,"Label",(function(){return M})),r.d(t,"Picker",(function(){return A})),r.d(t,"PickerView",(function(){return T})),r.d(t,"PickerViewColumn",(function(){return L})),r.d(t,"Radio",(function(){return W})),r.d(t,"RadioGroup",(function(){return F})),r.d(t,"Slider",(function(){return K})),r.d(t,"Switch",(function(){return U})),r.d(t,"CoverImage",(function(){return G})),r.d(t,"Textarea",(function(){return J})),r.d(t,"CoverView",(function(){return z})),r.d(t,"MovableArea",(function(){return Z})),r.d(t,"MovableView",(function(){return q})),r.d(t,"ScrollView",(function(){return Q})),r.d(t,"Swiper",(function(){return X})),r.d(t,"SwiperItem",(function(){return Y})),r.d(t,"FunctionalPageNavigator",(function(){return $})),r.d(t,"Navigator",(function(){return ee})),r.d(t,"Audio",(function(){return te})),r.d(t,"Camera",(function(){return re})),r.d(t,"Image",(function(){return ne})),r.d(t,"LivePlayer",(function(){return oe})),r.d(t,"Video",(function(){return ce})),r.d(t,"Map",(function(){return ie})),r.d(t,"Canvas",(function(){return ae})),r.d(t,"Ad",(function(){return ue})),r.d(t,"OfficialAccount",(function(){return se})),r.d(t,"OpenData",(function(){return fe})),r.d(t,"WebView",(function(){return pe})),r.d(t,"NavigationBar",(function(){return de})),r.d(t,"Block",(function(){return le})),r.d(t,"CustomWrapper",(function(){return ve}));var n=r(7),o=r.n(n),c=r(18),i=r.n(c),a=r(33),u=r.n(a),s=r(21),f=r.n(s),p=r(28),d=r.n(p),l=r(29),v=r.n(l),h=r(137),y=r.n(h),b=r(139),g=r.n(b),w=r(141),O=r.n(w),m=r(25),x=r.n(m);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=O()(e);if(t){var o=O()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g()(this,r)}}o.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,n,o){var c=e.ref.current,i=o[r],a=n?n[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,i),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=i);if("scrollLeft"===r)return void(c.mpScrollLeft=i);if("scrollIntoView"===r)return void(c.mpScrollIntoView=i)}if("function"==typeof i&&r.match(/^on[A-Z]/)){var u=r.substr(2).toLowerCase(),s=i;return"taro-scroll-view-core"===t&&"scroll"===u&&(s=function fn(e){e instanceof CustomEvent&&i.apply(null,Array.from(arguments))}),e.eventHandlers.push([u,s]),c.addEventListener(u,s)}return"string"==typeof i||"number"==typeof i?(c.setAttribute(r,i),void(c[r]=i)):"boolean"==typeof i?i?(c[r]=!0,c.setAttribute(r,i)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=i)}if("string"==typeof i)return void c.setAttribute(r,i);if(!i)return void c.removeAttribute(r);if(n)if("string"==typeof a)c.style.cssText="";else for(var f in a)updateStyle(c,f,"");for(var p in i)updateStyle(c,p,i[p])}else c.className=n?function getClassName(e,t,r){var n=Array.from(e.classList),o=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),i=[];return n.forEach((function(e){c.indexOf(e)>-1?(i.push(e),c=c.filter((function(t){return t!==e}))):-1===o.indexOf(e)&&i.push(e)})),(i=[].concat(x()(i),x()(c))).join(" ")}(c,n,o):i}var j=function reactifyWebComponent(e){var t=function(t){y()(Index,t);var r=_createSuper(Index);function Index(e){var t;return d()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(n.createRef)(),t}return v()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(n){"children"===n||"key"===n||n in r.props||updateProp(r,e,n,t,r.props)})),Object.keys(this.props).forEach((function(n){updateProp(r,e,n,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===f()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=u()(t,2),n=r[0],o=r[1];e.ref.current&&e.ref.current.removeEventListener(n,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,c={"ref":this.ref};return o&&(c.dangerouslySetInnerHTML=o),Object(n.createElement)(e,c,r)}}]),Index}(o.a.Component);return o.a.forwardRef((function(e,r){return o.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=j("taro-input-core"),P=(o.a.createElement,o.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),o.a.createElement(_,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),S=j("taro-view-core"),k=j("taro-icon-core"),E=j("taro-progress-core"),H=j("taro-rich-text-core"),I=j("taro-text-core"),C=j("taro-button-core"),R=j("taro-checkbox-core"),B=j("taro-checkbox-group-core"),N=j("taro-editor-core"),V=j("taro-form-core"),D=P,M=j("taro-label-core"),A=j("taro-picker-core"),T=j("taro-picker-view-core"),L=j("taro-picker-view-column-core"),W=j("taro-radio-core"),F=j("taro-radio-group-core"),K=j("taro-slider-core"),U=j("taro-switch-core"),G=j("taro-cover-image-core"),J=j("taro-textarea-core"),z=j("taro-cover-view-core"),Z=j("taro-movable-area-core"),q=j("taro-movable-view-core"),Q=j("taro-scroll-view-core"),X=j("taro-swiper-core"),Y=j("taro-swiper-item-core"),$=j("taro-functional-page-navigator-core"),ee=j("taro-navigator-core"),te=j("taro-audio-core"),re=j("taro-camera-core"),ne=j("taro-image-core"),oe=j("taro-live-player-core"),ce=j("taro-video-core"),ie=j("taro-map-core"),ae=j("taro-canvas-core"),ue=j("taro-ad-core"),se=j("taro-official-account-core"),fe=j("taro-open-data-core"),pe=j("taro-web-view-core"),de=j("taro-navigation-bar-core"),le=n.Fragment,ve=j("taro-custom-wrapper-core")},"137":function(e,t,r){var n=r(138);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"138":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"139":function(e,t,r){var n=r(21).default,o=r(140);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"140":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"141":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"142":function(e,t,r){"use strict";r.d(t,"a",(function(){return NavigationHeader}));r(7);var n=r(136),o=r(54),c=(r(15),r(143),r(144),r(48));function NavigationHeader(e){var t=e.title,r=function useNavigationBarInfo(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={},r=e.menuButtonInfo||t,n=e.systemInfo||Object(o.f)(),c=n.statusBarHeight,i=40;return{"navigationBarHeight":c+(i=2*(r.top-n.statusBarHeight)+r.height),"navigationContentHeight":i,"menuButtonHeight":r.height,"navigationPaddding":n.windowWidth-r.right,"statusBarHeight":n.statusBarHeight,"menuButtonWidth":r.width}}(),i=r.statusBarHeight,a=r.navigationBarHeight,u=r.navigationContentHeight,s=r.navigationPaddding;return Object(c.jsxs)(n.View,{"className":"nav-header","style":{"height":a,"padding":"0 ".concat(s,"px")},"children":[Object(c.jsx)(n.View,{"className":"nav-header-status-placeholder","style":{"height":i}}),Object(c.jsx)(n.View,{"className":"nav-header-content","style":{"height":"".concat(u,"px")},"children":Object(c.jsx)(n.View,{"className":"nav-header-content-center","children":t||"页面标题"})})]})}},"143":function(e,t){e.exports={"custom":!0,"selectedColor":"#FF0000","list":[{"pagePath":"index/index","text":"首页","iconPath":"./_resources/assets/icons/home.png","selectedIconPath":"./_resources/assets/icons/home_selected.png"},{"pagePath":"user/index","text":"我的","iconPath":"./_resources/assets/icons/user.png","selectedIconPath":"./_resources/assets/icons/user_selected.png"}]}},"144":function(e,t,r){},"151":function(e,t,r){},"157":function(e,t,r){"use strict";r.r(t);r(7);var n=r(136),o=r(142),c=(r(151),r(48));t.default=function RouterTarget(){return Object(c.jsxs)(n.View,{"className":"demoRouter-routerTarget-page","children":[Object(c.jsx)(o.a,{"title":"路由目标页"}),Object(c.jsx)(n.View,{"children":"路由目标页面"})]})}}}]);