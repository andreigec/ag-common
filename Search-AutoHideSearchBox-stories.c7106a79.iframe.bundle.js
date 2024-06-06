/*! For license information please see Search-AutoHideSearchBox-stories.c7106a79.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[8204,5254],{"./node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AH:()=>css});__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),__webpack_require__("./node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");var _emotion_serialize__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@emotion+serialize@1.1.4/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");__webpack_require__("./node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__.J)(args)}},"./stories/Search/AutoHideSearchBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoHideSearchBox:()=>AutoHideSearchBox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_src_ui_components_Search__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/Search/index.tsx"),base={title:"UI/Search",component:_src_ui_components_Search__WEBPACK_IMPORTED_MODULE_1__.R9},AutoHideSearchBox=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{backgroundColor:"#ccc"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ui_components_Search__WEBPACK_IMPORTED_MODULE_1__.R9,args))}.bind({});AutoHideSearchBox.args={searchText:"",setSearchText:function(st,enter){return alert("st=".concat(st," enter=").concat(enter))}};const __WEBPACK_DEFAULT_EXPORT__=base;AutoHideSearchBox.parameters={...AutoHideSearchBox.parameters,docs:{...AutoHideSearchBox.parameters?.docs,source:{originalSource:"args => <div style={{\n  backgroundColor: '#ccc'\n}}>\n    <Component {...args} />\n  </div>",...AutoHideSearchBox.parameters?.docs?.source}}};const __namedExportsOrder=["AutoHideSearchBox"]},"./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var reactIs=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent}},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")},"./src/common/helpers/log.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Yz:()=>debug,z3:()=>error,R8:()=>warn});var array=__webpack_require__("./src/common/helpers/array.ts");function redactString(str){var ret=str,repl="$1<redacted>$2";return ret=(ret=(ret=(ret=ret||"").replace(/(\b)grant_type.+?(\b)/gm,repl)).replace(/(\b)Bearer .+?(\b)/gm,repl)).replace(/(eyJ[\w-_.]*\.[\w-_.]*\.[\w-_.]*)/gim,"<redacted>")}var process=__webpack_require__("./node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var logShim,userLogLevel,GetLogLevel=function(l){return["TRACE","DEBUG","INFO","WARN","ERROR","FATAL"].findIndex((function(s){return s===l}))};function logprocess(type,args){var l,lu;userLogLevel||(l=process.env.LOG_LEVEL,lu=(null!=l?l:"INFO").toUpperCase(),-1!==GetLogLevel(lu)&&(userLogLevel=lu));var min=GetLogLevel(null!=userLogLevel?userLogLevel:"WARN");if(!(GetLogLevel(type)<min)){var datetime=(new Date).toLocaleTimeString("en-GB"),log=["[".concat(datetime,"]"),type].concat(_to_consumable_array(args.filter(array.z2).map((function(s){return function redactObject(ob){if("string"==typeof ob)return redactString(ob);if("object"==typeof ob)try{return JSON.parse(redactString(JSON.stringify(ob)))}catch(e){return ob}return ob}(s)}))));if(logShim)logShim.apply(void 0,_to_consumable_array(log));else switch(type){case"TRACE":var _console;(_console=console).trace.apply(_console,_to_consumable_array(log));break;case"DEBUG":var _console1;(_console1=console).debug.apply(_console1,_to_consumable_array(log));break;case"INFO":var _console2;(_console2=console).log.apply(_console2,_to_consumable_array(log));break;case"WARN":var _console3;(_console3=console).warn.apply(_console3,_to_consumable_array(log));break;case"ERROR":var _console4;(_console4=console).error.apply(_console4,_to_consumable_array(log));break;case"FATAL":var _console5;(_console5=console).error.apply(_console5,_to_consumable_array(log));break;default:var _console6;(_console6=console).log.apply(_console6,_to_consumable_array(log))}}}function printStackTrace(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var callstack=[],isCallstackPopulated=!1;try{throw new Error("Test")}catch(e){var er=e;if(er.stack){for(var lines=er.stack.split("\n"),i=0,len=lines.length;i<len;i+=1)callstack.push(" ".concat(lines[i]," "));callstack.shift(),isCallstackPopulated=!0}else if(window.opera&&er.message){for(var lines1=er.message.split("\n"),i1=0,len1=lines1.length;i1<len1;i1+=1)if(lines1[i1].match(/^\s*[A-Za-z0-9\-_$]+\(/)){var entry=lines1[i1];lines1[i1+1]&&(entry+=" at ".concat(lines1[i1+1]),i1+=1),callstack.push(entry)}callstack.shift(),isCallstackPopulated=!0}}if(!isCallstackPopulated)for(var currentFunction=args.callee.caller;currentFunction;){var _fn_substring,fn=currentFunction.toString(),fname=null!==(_fn_substring=fn.substring(fn.indexOf("function")+8,fn.indexOf("(")))&&void 0!==_fn_substring?_fn_substring:"anonymous";callstack.push(fname),currentFunction=currentFunction.caller}return callstack.join("\n")}var debug=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return logprocess("DEBUG",args)},warn=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return logprocess("WARN",args)},error=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];args.push(printStackTrace()),logprocess("ERROR",args)}},"./src/ui/components/Search/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R9:()=>AutoHideSearchBox});var emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),useGranularHook=__webpack_require__("./src/ui/helpers/useGranularHook.ts"),icons=__webpack_require__("./src/ui/icons/index.tsx"),styles=__webpack_require__("./src/ui/styles/index.ts"),SearchBox=__webpack_require__("./src/ui/components/Search/SearchBox.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  margin-left: 1rem;\n\n  @media "," {\n    width: 20rem;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  display: flex;\n  margin-right: 0.5rem;\n  > svg {\n    width: 1.2rem;\n    height: 1.2rem;\n    fill: white;\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  transition: width 200ms ease-in-out;\n\n  overflow: hidden;\n  padding: 0;\n  &[data-open='false'] {\n    width: 0;\n    padding: 0;\n  }\n  @media "," {\n    padding: 0;\n  }\n"]);return _templateObject2=function _templateObject(){return data},data}var Base=emotion_styled_browser_esm.A.div(_templateObject(),styles.BQ),Icon=emotion_styled_browser_esm.A.div(_templateObject1()),SearchBoxStyled=(0,emotion_styled_browser_esm.A)(SearchBox.G)(_templateObject2(),styles.UN),AutoHideSearchBox=function(p){var _useState=_sliced_to_array((0,react.useState)(!!p.searchText),2),open=_useState[0],setOpen=_useState[1],textEditRef=(0,react.createRef)();return(0,useGranularHook.T)((function(){var _p_onOpenToggle;!!p.searchText!==open&&(setOpen(!open),null===(_p_onOpenToggle=p.onOpenToggle)||void 0===_p_onOpenToggle||_p_onOpenToggle.call(p,!open))}),[p.searchText],[open]),react.createElement(Base,{className:p.className,"data-open":open},react.createElement(Icon,{style:{cursor:"pointer"},onClick:function(){var _p_onOpenToggle;open&&p.setSearchText("",!1),setOpen(!open),null===(_p_onOpenToggle=p.onOpenToggle)||void 0===_p_onOpenToggle||_p_onOpenToggle.call(p,!open),open||setTimeout((function(){var _textEditRef_current;return null===(_textEditRef_current=textEditRef.current)||void 0===_textEditRef_current?void 0:_textEditRef_current.focus()}),100)}},open&&react.createElement(icons.CrossIcon,null),!open&&react.createElement(icons.Magnify,{style:{fill:"white"}})),react.createElement(SearchBoxStyled,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({textBoxRef:textEditRef},p),{"data-open":open,setSearchText:function(val,enter){""===val&&enter?p.setSearchText(val,!1):p.setSearchText(val,enter)}})))};AutoHideSearchBox.__docgenInfo={description:"",methods:[],displayName:"AutoHideSearchBox",props:{searchText:{required:!0,tsType:{name:"string"},description:""},setSearchText:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string, enterPressed: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"val"},{type:{name:"boolean"},name:"enterPressed"}],return:{name:"void"}}},description:""},onOpenToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};__webpack_require__("./src/ui/components/Search/Dialog.tsx"),__webpack_require__("./src/ui/components/Search/Inline.tsx"),__webpack_require__("./src/ui/components/Search/Modal.tsx")},"./src/ui/helpers/useGranularHook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useGranularEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var useGranularEffect=function(effect,primaryDeps,secondaryDeps){return function(hook,callback,primaryDeps,secondaryDeps){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref.current&&primaryDeps.every((function(w,i){var _ref_current;return Object.is(w,null===(_ref_current=ref.current)||void 0===_ref_current?void 0:_ref_current[i])}))||(ref.current=_to_consumable_array(primaryDeps).concat(_to_consumable_array(secondaryDeps))),hook(callback,ref.current)}(react__WEBPACK_IMPORTED_MODULE_0__.useEffect,effect,primaryDeps,secondaryDeps)}},"./src/ui/styles/colours.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M8:()=>colours,Ot:()=>getColourWheel});var left,right,colours={mainLight:"rgb(255,255,255)",lightest:"rgb(247,247,247)",darker:"rgb(0,0,0,0.1)",lighter:"rgb(234,234,234)",dark:"rgb(23,25,23)",charcoal:"rgb(50,50,50)",lightCharcoal:"rgb(154,154,154)",orangeRed:"#d65873",orange:"#e88070",yellow:"rgb(255,206,109)",lightBlue:"rgb(90,129,255)",lightGreen:"rgb(75,236,120)",lightGreen2:"rgb(14, 165, 0)",darkGreen:"#228B22",peach:"rgb(245,169,169)",purple:"rgb(173,121,255)",notificationBlue:"#4d76ff",notificationBlue2:"#002ab3",notificationBlue3:"rgb(230,238,246)",gradient:"---generated---"};colours.gradient=(left=colours.orangeRed,right=colours.orange,"linear-gradient(to right, ".concat(left,", ").concat(right,")"));var colourWheel=["rgb(11,132,165)","rgb(246,200,95)","rgb(111,78,124)","rgb(157,216,102)","rgb(202,71,47)","rgb(255,160,86)","rgb(141,221,208)"],getColourWheel=function(i){return colourWheel[i%colourWheel.length]}},"./src/ui/styles/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dn:()=>NoTextSelect,QS:()=>getVarStyles,W6:()=>HardOutlineFilter,gu:()=>HardOutline,mG:()=>noDrag,tJ:()=>TextOverflowEllipsis,z9:()=>bounce});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_colours__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/styles/colours.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["filter: ",";\n"],["\\\nfilter: ",";\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  user-select: none; /* supported by Chrome and Opera */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  display: -webkit-box;\n  -webkit-line-clamp: ",";\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  transition:\n    opacity 0.2s ease,\n    transform 0.2s cubic-bezier(0.02, 1.5, 0.74, 1.23);\n  transform-origin: 50% 50%;\n  transform: translateY(-5px);\n  &[","='true'] {\n    transform: translateY(0);\n  }\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n  background-color: white;\n  margin: 0.5rem;\n\n  position: relative;\n  border-radius: 0.5rem;\n  max-width: 40rem;\n  padding: 1rem;\n  border: solid 2px ",";\n"]);return _templateObject4=function _templateObject(){return data},data}var HardOutline=function(){var outlineColour=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"white",sizePx=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),HardOutlineFilter(outlineColour,sizePx))},HardOutlineFilter=function(){var outlineColour=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"white",px="".concat(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,"px");return"drop-shadow(".concat(px," ").concat(px," 0px ").concat(outlineColour,")\n  drop-shadow(-").concat(px," ").concat(px," 0px ").concat(outlineColour,")\n  drop-shadow(").concat(px," -").concat(px," 0px ").concat(outlineColour,")\n  drop-shadow(-").concat(px," -").concat(px," 0px ").concat(outlineColour,")")},NoTextSelect=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject1()),TextOverflowEllipsis=function(lines){return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject2(),lines)},noDrag={draggable:!1,onDragStart:function(e){e.preventDefault(),e.stopPropagation()},onTouchStart:function(e){e.preventDefault(),e.stopPropagation()}},bounce=function(bounceattr){return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject3(),bounceattr)},getVarStyles=(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject4(),_colours__WEBPACK_IMPORTED_MODULE_1__.M8.lighter),function(raw){var _raw_color,_raw_backgroundColor,_raw_borderColor;return _object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},raw),{color:null!==(_raw_color=null==raw?void 0:raw.color)&&void 0!==_raw_color?_raw_color:"var(--main-fg)",backgroundColor:null!==(_raw_backgroundColor=null==raw?void 0:raw.backgroundColor)&&void 0!==_raw_backgroundColor?_raw_backgroundColor:"var(--main-bg)",borderColor:null!==(_raw_borderColor=null==raw?void 0:raw.borderColor)&&void 0!==_raw_borderColor?_raw_borderColor:"var(--main-bg-mid)"})})}}]);