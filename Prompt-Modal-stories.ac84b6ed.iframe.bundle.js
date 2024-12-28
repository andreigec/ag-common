/*! For license information please see Prompt-Modal-stories.ac84b6ed.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[8109,5254],{"./node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AH:()=>css});__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),__webpack_require__("./node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");var _emotion_serialize__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@emotion+serialize@1.1.4/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");__webpack_require__("./node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__.J)(args)}},"./stories/Prompt/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Modal:()=>Modal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_src_ui_components_Prompt_Modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/Prompt/Modal.tsx"),base={title:"UI/Prompt",component:_src_ui_components_Prompt_Modal__WEBPACK_IMPORTED_MODULE_1__.S},Modal=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ui_components_Prompt_Modal__WEBPACK_IMPORTED_MODULE_1__.S,args)}.bind({});Modal.args={bottomText:"bottom",topText:"top",res:function(v){return alert("res="+v)},style:{backgroundColor:"grey",color:"teal"}};const __WEBPACK_DEFAULT_EXPORT__=base;Modal.parameters={...Modal.parameters,docs:{...Modal.parameters?.docs,source:{originalSource:"args => <PromptModal {...args} />",...Modal.parameters?.docs?.source}}};const __namedExportsOrder=["Modal"]},"./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var reactIs=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent}},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")},"./src/ui/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var _emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_styles_colours__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/styles/colours.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  font-weight: bold;\n  font-family: inherit;\n  font-size: 1.2rem;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  height: 3rem;\n  line-height: 1rem;\n  &:hover {\n    filter: saturate(1.5);\n  }\n  padding-left: 1rem;\n  padding-right: 1rem;\n  color: white;\n\n  &[data-disabled='true'] {\n    cursor: default !important;\n    background-color: #888 !important;\n  }\n\n  &[data-theme='green'] {\n    background-color: ",";\n    &[data-invert='true'] {\n      color: ",";\n      background-color: white;\n      border: solid 1px ",";\n    }\n  }\n\n  &[data-theme='red'] {\n    background-color: ",";\n    &[data-invert='true'] {\n      color: ",";\n      background-color: white;\n      border: solid 1px ",";\n    }\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  ","\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  ","\n"]);return _templateObject2=function _templateObject(){return data},data}var ButtonBase=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject(),_styles_colours__WEBPACK_IMPORTED_MODULE_2__.M8.darkGreen,_styles_colours__WEBPACK_IMPORTED_MODULE_2__.M8.darkGreen,_styles_colours__WEBPACK_IMPORTED_MODULE_2__.M8.darkGreen,_styles_colours__WEBPACK_IMPORTED_MODULE_2__.M8.orangeRed,_styles_colours__WEBPACK_IMPORTED_MODULE_2__.M8.orangeRed,_styles_colours__WEBPACK_IMPORTED_MODULE_2__.M8.orangeRed),BaseButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.button(_templateObject1(),ButtonBase),BaseA=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.a(_templateObject2(),ButtonBase),Button=function(props){var _props_disabled,_props_colourTheme,Component=props.href?BaseA:BaseButton;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({className:props.className,"data-invert":props.invert,"data-disabled":null!==(_props_disabled=props.disabled)&&void 0!==_props_disabled&&_props_disabled,role:"button",title:props.title||void 0,"data-theme":null!==(_props_colourTheme=props.colourTheme)&&void 0!==_props_colourTheme?_props_colourTheme:"green"},props),props.children)};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{title:{required:!1,tsType:{name:"string"},description:""},invert:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""},onKeyDown:{required:!1,tsType:{name:"KeyboardEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEventHandler<HTMLButtonElement>"},description:""},children:{required:!0,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},href:{required:!1,tsType:{name:"string"},description:""},colourTheme:{required:!1,tsType:{name:"union",raw:"'green' | 'red'",elements:[{name:"literal",value:"'green'"},{name:"literal",value:"'red'"}]},description:""}}}},"./src/ui/components/FlexColumn/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>FlexColumn});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  position: relative;\n  display: flex;\n  flex-flow: column;\n  flex-grow: 1;\n  width: 100%;\n  height: 100%;\n  &[data-center='true'] {\n    justify-content: center;\n    align-items: center;\n  }\n  &[data-nogrow='true'] {\n    flex-grow: 0;\n    width: unset;\n    height: unset;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject()),FlexColumn=function(props){var _props_noGrow,_props_center;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Base,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({"data-nogrow":null!==(_props_noGrow=props.noGrow)&&void 0!==_props_noGrow&&_props_noGrow,"data-center":null!==(_props_center=props.center)&&void 0!==_props_center&&_props_center},props),props.children)};FlexColumn.__docgenInfo={description:"",methods:[],displayName:"FlexColumn",props:{noGrow:{required:!1,tsType:{name:"boolean"},description:""},center:{required:!1,tsType:{name:"boolean"},description:""},noWrap:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},break:{required:!1,tsType:{name:"union",raw:"'small' | 'vsmall'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'vsmall'"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/ui/components/Prompt/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>PromptModal});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/components/Button/index.tsx"),_FlexColumn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/components/FlexColumn/index.tsx"),_FlexRow__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/components/FlexRow/index.tsx"),_Modal_Modal__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/ui/components/Modal/Modal.tsx"),_TextEdit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/ui/components/TextEdit/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  width: 95vw;\n  max-width: 30rem;\n  height: 50vh;\n  max-height: 15rem;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  padding: 1rem;\n  height: calc(100% - 2rem);\n  width: calc(100% - 2rem);\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  font-weight: bold;\n  border-bottom: solid 1px #ccc;\n  padding-bottom: 0.25rem;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  padding-bottom: 0.25rem;\n  font-size: 1.1rem;\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n  margin-top: auto;\n  justify-content: flex-end;\n  > button:first-of-type {\n    margin-right: 1rem;\n  }\n"]);return _templateObject4=function _templateObject(){return data},data}var Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject()),Content=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A)(_FlexColumn__WEBPACK_IMPORTED_MODULE_3__.I)(_templateObject1()),TopText=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject2()),BottomText=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject3()),Bottom=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A)(_FlexRow__WEBPACK_IMPORTED_MODULE_4__.Y)(_templateObject4()),PromptModal=function(param){var root=param.root,wrapper=param.wrapper,res=param.res,bottomText=param.bottomText,topText=param.topText,_param_okText=param.okText,okText=void 0===_param_okText?"OK":_param_okText,_param_cancelText=param.cancelText,cancelText=void 0===_param_cancelText?"Cancel":_param_cancelText,defaultValue=param.defaultValue,placeholder=param.placeholder,style=param.style,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue||""),2),text=_useState[0],setText=_useState[1],ret=function(v){try{res(v)}finally{try{null==root||root.unmount(),null==wrapper||wrapper.remove()}catch(e){}}};return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Modal_Modal__WEBPACK_IMPORTED_MODULE_5__.a,{position:"center",topPosition:"center",open:!0,setOpen:function(){return ret(void 0)},showCloseButton:!1,closeOnClickOutside:!1},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Base,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(Content,{style},topText&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(TopText,null,topText),react__WEBPACK_IMPORTED_MODULE_1__.createElement(BottomText,null,bottomText),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_TextEdit__WEBPACK_IMPORTED_MODULE_6__.mF,{defaultValue:text,onSubmit:function(c,enter){enter?ret(c):setText(c)},placeholder,defaultEditing:{focus:!0},singleLine:!0,noGrow:!0,allowUndo:!1}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(Bottom,{noGrow:!0},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.$,{onClick:function(){return ret(text)}},okText),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.$,{invert:!0,onClick:function(){return ret(void 0)}},cancelText)))))};PromptModal.__docgenInfo={description:"",methods:[],displayName:"PromptModal",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},res:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"v"}],return:{name:"void"}}},description:""},root:{required:!1,tsType:{name:"Root"},description:""},wrapper:{required:!1,tsType:{name:"HTMLDivElement"},description:""},topText:{required:!1,tsType:{name:"string"},description:""},bottomText:{required:!0,tsType:{name:"string"},description:""},okText:{required:!1,tsType:{name:"string"},description:"default 'OK'",defaultValue:{value:"'OK'",computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:'default "cancel"',defaultValue:{value:"'Cancel'",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/ui/styles/colours.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M8:()=>colours,Ot:()=>getColourWheel});var left,right,colours={mainLight:"rgb(255,255,255)",lightest:"rgb(247,247,247)",darker:"rgb(0,0,0,0.1)",lighter:"rgb(234,234,234)",dark:"rgb(23,25,23)",charcoal:"rgb(50,50,50)",lightCharcoal:"rgb(154,154,154)",orangeRed:"#d65873",orange:"#e88070",yellow:"rgb(255,206,109)",lightBlue:"rgb(90,129,255)",lightGreen:"rgb(75,236,120)",lightGreen2:"rgb(14, 165, 0)",darkGreen:"#228B22",peach:"rgb(245,169,169)",purple:"rgb(173,121,255)",notificationBlue:"#4d76ff",notificationBlue2:"#002ab3",notificationBlue3:"rgb(230,238,246)",gradient:"---generated---"};colours.gradient=(left=colours.orangeRed,right=colours.orange,"linear-gradient(to right, ".concat(left,", ").concat(right,")"));var colourWheel=["rgb(11,132,165)","rgb(246,200,95)","rgb(111,78,124)","rgb(157,216,102)","rgb(202,71,47)","rgb(255,160,86)","rgb(141,221,208)"],getColourWheel=function(i){return colourWheel[i%colourWheel.length]}},"./src/ui/styles/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dn:()=>NoTextSelect,QS:()=>getVarStyles,W6:()=>HardOutlineFilter,gu:()=>HardOutline,mG:()=>noDrag,tJ:()=>TextOverflowEllipsis,z9:()=>bounce});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_colours__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/styles/colours.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["filter: ",";\n"],["\\\nfilter: ",";\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  user-select: none; /* supported by Chrome and Opera */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  display: -webkit-box;\n  -webkit-line-clamp: ",";\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  transition:\n    opacity 0.2s ease,\n    transform 0.2s cubic-bezier(0.02, 1.5, 0.74, 1.23);\n  transform-origin: 50% 50%;\n  transform: translateY(-5px);\n  &[","='true'] {\n    transform: translateY(0);\n  }\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n  background-color: white;\n  margin: 0.5rem;\n\n  position: relative;\n  border-radius: 0.5rem;\n  max-width: 40rem;\n  padding: 1rem;\n  border: solid 2px ",";\n"]);return _templateObject4=function _templateObject(){return data},data}var HardOutline=function(){var outlineColour=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"white",sizePx=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),HardOutlineFilter(outlineColour,sizePx))},HardOutlineFilter=function(){var outlineColour=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"white",px="".concat(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,"px");return"drop-shadow(".concat(px," ").concat(px," 0px ").concat(outlineColour,")\n  drop-shadow(-").concat(px," ").concat(px," 0px ").concat(outlineColour,")\n  drop-shadow(").concat(px," -").concat(px," 0px ").concat(outlineColour,")\n  drop-shadow(-").concat(px," -").concat(px," 0px ").concat(outlineColour,")")},NoTextSelect=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject1()),TextOverflowEllipsis=function(lines){return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject2(),lines)},noDrag={draggable:!1,onDragStart:function(e){e.preventDefault(),e.stopPropagation()},onTouchStart:function(e){e.preventDefault(),e.stopPropagation()}},bounce=function(bounceattr){return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject3(),bounceattr)},getVarStyles=(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject4(),_colours__WEBPACK_IMPORTED_MODULE_1__.M8.lighter),function(raw){var _raw_color,_raw_backgroundColor,_raw_borderColor;return _object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},raw),{color:null!==(_raw_color=null==raw?void 0:raw.color)&&void 0!==_raw_color?_raw_color:"var(--main-fg)",backgroundColor:null!==(_raw_backgroundColor=null==raw?void 0:raw.backgroundColor)&&void 0!==_raw_backgroundColor?_raw_backgroundColor:"var(--main-bg)",borderColor:null!==(_raw_borderColor=null==raw?void 0:raw.borderColor)&&void 0!==_raw_borderColor?_raw_borderColor:"var(--main-bg-mid)"})})}}]);