/*! For license information please see Accordion-stories.5049e09b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[1247],{"./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.0.8_react@19.0.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AH:()=>css});var _jsx,JSX,_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.0.8_react@19.0.0/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@19.0.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),__webpack_require__("./node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js")),jsx=(__webpack_require__("./node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),function jsx(type,props){var args=arguments;if(null==props||!_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.h.call(props,"css"))return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(void 0,args);var argsLength=args.length,createElementArgArray=new Array(argsLength);createElementArgArray[0]=_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.E,createElementArgArray[1]=(0,_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.c)(type,props);for(var i=2;i<argsLength;i++)createElementArgArray[i]=args[i];return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null,createElementArgArray)});_jsx=jsx||(jsx={}),JSX||(JSX=_jsx.JSX||(_jsx.JSX={}));function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__.J)(args)}},"./stories/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultWithArgs:()=>DefaultWithArgs,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),_src_ui_components_Accordion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/Accordion/index.tsx"),base={title:"UI/Accordion",component:_src_ui_components_Accordion__WEBPACK_IMPORTED_MODULE_1__.n},Primary=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ui_components_Accordion__WEBPACK_IMPORTED_MODULE_1__.n,args)}.bind({});Primary.args={title:"test title",chevronColour:"black",children:"content here"};const __WEBPACK_DEFAULT_EXPORT__=base;var DefaultWithArgs=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Primary,Primary.args)};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Accordion {...args} />",...Primary.parameters?.docs?.source}}},DefaultWithArgs.parameters={...DefaultWithArgs.parameters,docs:{...DefaultWithArgs.parameters?.docs,source:{originalSource:"() => <Primary {...Primary.args as IAccordion} />",...DefaultWithArgs.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","DefaultWithArgs"]},"./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var reactIs=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent}},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")},"./src/ui/components/Accordion/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>Accordion});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.0.8_react@19.0.0__@types+react@19.0.8_react@19.0.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),_Chevron__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/components/Chevron/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([""]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  font-size: 1rem;\n  font-weight: bold;\n  text-align: center;\n  margin-right: 0.5rem;\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  display: flex;\n  cursor: pointer;\n"]);return _templateObject2=function _templateObject(){return data},data}var SBase=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject()),SSubTitle=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject1()),SRollUpRow=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject2()),Accordion=function(param){var title=param.title,children=param.children,open=param.open,setOpen=param.setOpen,_param_chevronColour=param.chevronColour,chevronColour=void 0===_param_chevronColour?"white":_param_chevronColour,className=param.className,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),openSt=_useState[0],setOpenSt=_useState[1],controlled=void 0!==open;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(SBase,{className},react__WEBPACK_IMPORTED_MODULE_1__.createElement(SRollUpRow,{onClick:function(){null==setOpen||setOpen(controlled?!open:!openSt),controlled||setOpenSt(!openSt)}},react__WEBPACK_IMPORTED_MODULE_1__.createElement(SSubTitle,null,title),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Chevron__WEBPACK_IMPORTED_MODULE_2__.c,{point:openSt?"up":"down",colour:chevronColour})),(controlled?open:openSt)&&children)};Accordion.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{children:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},title:{required:!0,tsType:{name:"string"},description:""},open:{required:!1,tsType:{name:"boolean"},description:"controlled component if provided"},setOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"called when openness changes"},chevronColour:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'white'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/ui/components/Chevron/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Chevron});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.0.8_react@19.0.0__@types+react@19.0.8_react@19.0.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/icons/ChevronRight.tsx"),_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/components/Icon/index.tsx");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  font-size: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n"]);return _templateObject1=function _templateObject(){return data},data}var Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.span(_templateObject()),IconStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A)(_Icon__WEBPACK_IMPORTED_MODULE_3__.I)(_templateObject1()),Chevron=function(param){var _param_width=param.width,width=void 0===_param_width?"1.2rem":_param_width,className=param.className,_param_colour=param.colour,colour=void 0===_param_colour?"black":_param_colour,onToggle=param.onToggle,_param_point=param.point,rotate=0;switch(void 0===_param_point?"right":_param_point){case"down":rotate=90;break;case"left":rotate=180;break;case"up":rotate=270;break;case"right":rotate=0}return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Base,{className,onClick:function(){return null==onToggle?void 0:onToggle()},onTouchStart:function(){return null==onToggle?void 0:onToggle()},onKeyDown:function(e){return"Enter"===e.key&&(null==onToggle?void 0:onToggle())}},react__WEBPACK_IMPORTED_MODULE_1__.createElement(IconStyled,{rotate,style:{width,height:width,fill:colour}},_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_2__.c))};Chevron.__docgenInfo={description:"",methods:[],displayName:"Chevron",props:{point:{required:!1,tsType:{name:"union",raw:"'up' | 'down' | 'left' | 'right'",elements:[{name:"literal",value:"'up'"},{name:"literal",value:"'down'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"default right",defaultValue:{value:"'right'",computed:!1}},colour:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'black'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'1.2rem'",computed:!1}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/ui/icons/ChevronRight.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>ChevronRight});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),ChevronRight=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}))}}]);