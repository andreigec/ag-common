/*! For license information please see TextEdit-CheckboxEdit-stories.2f834805.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[3884,5254],{"./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.0.8_react@19.0.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AH:()=>css});var _jsx,JSX,_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.0.8_react@19.0.0/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@19.0.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),__webpack_require__("./node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js")),jsx=(__webpack_require__("./node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),function jsx(type,props){var args=arguments;if(null==props||!_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.h.call(props,"css"))return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(void 0,args);var argsLength=args.length,createElementArgArray=new Array(argsLength);createElementArgArray[0]=_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.E,createElementArgArray[1]=(0,_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.c)(type,props);for(var i=2;i<argsLength;i++)createElementArgArray[i]=args[i];return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null,createElementArgArray)});_jsx=jsx||(jsx={}),JSX||(JSX=_jsx.JSX||(_jsx.JSX={}));function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__.J)(args)}},"./stories/TextEdit/CheckboxEdit.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckboxEditF:()=>CheckboxEditF,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),_src_ui_components_TextEdit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/TextEdit/index.tsx"),base={title:"UI/TextEdit",component:_src_ui_components_TextEdit__WEBPACK_IMPORTED_MODULE_1__.C0},CheckboxEditF=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{backgroundColor:"white",padding:"0.5rem"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ui_components_TextEdit__WEBPACK_IMPORTED_MODULE_1__.C0,args))}.bind({});CheckboxEditF.args={defaultValue:!0,onSubmit:function(s){return alert("ret="+JSON.stringify(s,null,2))},rightSpan:react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{style:{color:"red"}},"hello")};const __WEBPACK_DEFAULT_EXPORT__=base;CheckboxEditF.parameters={...CheckboxEditF.parameters,docs:{...CheckboxEditF.parameters?.docs,source:{originalSource:"args => <div style={{\n  backgroundColor: 'white',\n  padding: '0.5rem'\n}}>\n    <CheckboxEdit {...args} />\n  </div>",...CheckboxEditF.parameters?.docs?.source}}};const __namedExportsOrder=["CheckboxEditF"]},"./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var reactIs=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent}},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")},"./src/ui/styles/colours.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M8:()=>colours,Ot:()=>getColourWheel});var left,right,colours={mainLight:"rgb(255,255,255)",lightest:"rgb(247,247,247)",darker:"rgb(0,0,0,0.1)",lighter:"rgb(234,234,234)",dark:"rgb(23,25,23)",charcoal:"rgb(50,50,50)",lightCharcoal:"rgb(154,154,154)",orangeRed:"#d65873",orange:"#e88070",yellow:"rgb(255,206,109)",lightBlue:"rgb(90,129,255)",lightGreen:"rgb(75,236,120)",lightGreen2:"rgb(14, 165, 0)",darkGreen:"#228B22",peach:"rgb(245,169,169)",purple:"rgb(173,121,255)",notificationBlue:"#4d76ff",notificationBlue2:"#002ab3",notificationBlue3:"rgb(230,238,246)",gradient:"---generated---"};colours.gradient=(left=colours.orangeRed,right=colours.orange,"linear-gradient(to right, ".concat(left,", ").concat(right,")"));var colourWheel=["rgb(11,132,165)","rgb(246,200,95)","rgb(111,78,124)","rgb(157,216,102)","rgb(202,71,47)","rgb(255,160,86)","rgb(141,221,208)"],getColourWheel=function(i){return colourWheel[i%colourWheel.length]}},"./src/ui/styles/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dn:()=>NoTextSelect,QS:()=>getVarStyles,W6:()=>HardOutlineFilter,gu:()=>HardOutline,mG:()=>noDrag,tJ:()=>TextOverflowEllipsis,z9:()=>bounce});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.0.8_react@19.0.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.0.8_react@19.0.0__@types+react@19.0.8_react@19.0.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_colours__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/styles/colours.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["filter: ",";\n"],["\\\nfilter: ",";\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  user-select: none; /* supported by Chrome and Opera */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  display: -webkit-box;\n  -webkit-line-clamp: ",";\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  transition:\n    opacity 0.2s ease,\n    transform 0.2s cubic-bezier(0.02, 1.5, 0.74, 1.23);\n  transform-origin: 50% 50%;\n  transform: translateY(-5px);\n  &[","='true'] {\n    transform: translateY(0);\n  }\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n  background-color: white;\n  margin: 0.5rem;\n\n  position: relative;\n  border-radius: 0.5rem;\n  max-width: 40rem;\n  padding: 1rem;\n  border: solid 2px ",";\n"]);return _templateObject4=function _templateObject(){return data},data}var HardOutline=function(){var outlineColour=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"white",sizePx=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),HardOutlineFilter(outlineColour,sizePx))},HardOutlineFilter=function(){var outlineColour=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"white",px="".concat(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,"px");return"drop-shadow(".concat(px," ").concat(px," 0px ").concat(outlineColour,")\n  drop-shadow(-").concat(px," ").concat(px," 0px ").concat(outlineColour,")\n  drop-shadow(").concat(px," -").concat(px," 0px ").concat(outlineColour,")\n  drop-shadow(-").concat(px," -").concat(px," 0px ").concat(outlineColour,")")},NoTextSelect=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject1()),TextOverflowEllipsis=function(lines){return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject2(),lines)},noDrag={draggable:!1,onDragStart:function(e){e.preventDefault(),e.stopPropagation()},onTouchStart:function(e){e.preventDefault(),e.stopPropagation()}},bounce=function(bounceattr){return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject3(),bounceattr)},getVarStyles=(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject4(),_colours__WEBPACK_IMPORTED_MODULE_1__.M8.lighter),function(raw){var _raw_color,_raw_backgroundColor,_raw_borderColor;return _object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},raw),{color:null!==(_raw_color=null==raw?void 0:raw.color)&&void 0!==_raw_color?_raw_color:"var(--main-fg)",backgroundColor:null!==(_raw_backgroundColor=null==raw?void 0:raw.backgroundColor)&&void 0!==_raw_backgroundColor?_raw_backgroundColor:"var(--main-bg)",borderColor:null!==(_raw_borderColor=null==raw?void 0:raw.borderColor)&&void 0!==_raw_borderColor?_raw_borderColor:"var(--main-bg-mid)"})})}}]);