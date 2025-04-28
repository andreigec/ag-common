/*! For license information please see Toast-stories.33338f66.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[9408],{"./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AH:()=>css});var _jsx,JSX,_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@19.1.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),__webpack_require__("./node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js")),jsx=(__webpack_require__("./node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),function jsx(type,props){var args=arguments;if(null==props||!_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.h.call(props,"css"))return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(void 0,args);var argsLength=args.length,createElementArgArray=new Array(argsLength);createElementArgArray[0]=_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.E,createElementArgArray[1]=(0,_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.c)(type,props);for(var i=2;i<argsLength;i++)createElementArgArray[i]=args[i];return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null,createElementArgArray)});_jsx=jsx||(jsx={}),JSX||(JSX=_jsx.JSX||(_jsx.JSX={}));function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__.J)(args)}},"./stories/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dialog:()=>Dialog,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_src_ui_components_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/components/Icon/index.tsx"),_src_ui_components_Toast__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/components/Toast/index.tsx"),_src_ui_icons_Hamburger__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/icons/Hamburger.tsx");const ActionWrapper=()=>{const x=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_src_ui_components_Toast__WEBPACK_IMPORTED_MODULE_3__.$o);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{color:"white",backgroundColor:"black",height:"5rem",cursor:"pointer",fontSize:"2rem"},role:"button",tabIndex:-1,onKeyDown:()=>{},onClick:async()=>{await x.addToast("hey guys, long toasttt hereeeee",{appearance:"success",autoClose:null})},children:"click to open standard"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{color:"white",backgroundColor:"black",height:"5rem",cursor:"pointer",fontSize:"2rem",marginTop:"5rem"},role:"button",tabIndex:-1,onKeyDown:()=>{},onClick:async()=>{await x.addToastDetailed({title:"title",content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"hg content here"}),icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_ui_components_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{style:{fill:"white",width:"2rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_ui_icons_Hamburger__WEBPACK_IMPORTED_MODULE_4__.U,{})})},{appearance:"success",autoClose:null})},children:"click to open detailed"})]})},base={title:"UI/Toast",component:ActionWrapper},Dialog=(()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_ui_components_Toast__WEBPACK_IMPORTED_MODULE_3__.tE,{providerOptions:{style:{borderColor:"blue",backgroundColor:"black",color:"white"}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionWrapper,{})})})).bind({}),__WEBPACK_DEFAULT_EXPORT__=base,__namedExportsOrder=["Dialog"];Dialog.parameters={...Dialog.parameters,docs:{...Dialog.parameters?.docs,source:{originalSource:"() => <div>\n    <ToastProvider providerOptions={{\n    style: {\n      borderColor: 'blue',\n      backgroundColor: 'black',\n      color: 'white'\n    }\n  }}>\n      <ActionWrapper />\n    </ToastProvider>\n  </div>",...Dialog.parameters?.docs?.source}}}},"./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var reactIs=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent}},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")},"./src/common/helpers/object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>copy,oh:()=>removeUndefValuesFromObject});const removeUndefValuesFromObject=orig=>{const ret={};return Object.entries(orig).forEach((([k,v])=>{null!=v&&(ret[k]=v)})),ret},copy=v=>JSON.parse(JSON.stringify(v))},"./src/ui/components/FlexColumn/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>FlexColumn});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: relative;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  &[data-center='true'] {
    justify-content: center;
    align-items: center;
  }
  &[data-nogrow='true'] {
    flex-grow: 0;
    width: unset;
    height: unset;
  }
`,FlexColumn=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{"data-nogrow":props.noGrow??!1,"data-center":props.center??!1,...props,children:props.children});FlexColumn.__docgenInfo={description:"",methods:[],displayName:"FlexColumn",props:{noGrow:{required:!1,tsType:{name:"boolean"},description:""},center:{required:!1,tsType:{name:"boolean"},description:""},noWrap:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},break:{required:!1,tsType:{name:"union",raw:"'small' | 'vsmall'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'vsmall'"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/ui/components/FlexRow/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>FlexRow});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;

  &[data-nowrap='true'] {
    flex-flow: row;
  }

  &[data-nogrow='true'] {
    flex-grow: 0;
  }
  &[data-nogrow='false'] {
    width: 100%;
    height: 100%;
    flex-grow: 1;
  }

  &[data-center='true'] {
    justify-content: center;
    align-items: center;
  }
`,FlexRow=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{"data-nowrap":props.noWrap??!1,"data-nogrow":props.noGrow??!1,"data-center":props.center??!1,...props,children:props.children});FlexRow.__docgenInfo={description:"",methods:[],displayName:"FlexRow",props:{noGrow:{required:!1,tsType:{name:"boolean"},description:""},center:{required:!1,tsType:{name:"boolean"},description:""},noWrap:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},break:{required:!1,tsType:{name:"union",raw:"'small' | 'vsmall'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'vsmall'"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/ui/components/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_common_helpers_object__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/common/helpers/object.ts")),_styles_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/styles/common.tsx");const IconF=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.span`
  transition: all 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: inherit;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: unset;
  &[data-chnd='true'] {
    cursor: pointer;
    &:hover {
      filter: saturate(3);
    }
  }

  > svg {
    flex-grow: 1;
  }

  &[data-hasfill='true'] {
    fill: var(--fill);

    svg {
      fill: var(--fill);
    }

    linearGradient > *,
    radialGradient > * {
      stop-color: var(--fill) !important;
    }
  }

  &[data-hasoutline='true'] {
    ${(0,_styles_common__WEBPACK_IMPORTED_MODULE_3__.gu)("var(--outlinecolour)")}
  }

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    aspect-ratio: 1/1;
  }

  img {
    object-fit: contain;
  }
`,Icon=pr=>{const{className,children,disabled,onClick}=pr,CHND=pr.canHover&&!pr.disabled,style=(0,_common_helpers_object__WEBPACK_IMPORTED_MODULE_4__.oh)({...pr.style??{},"--fill":pr.style?.fill??null,width:pr.style?.width,height:pr.style?.height,padding:pr.style?.padding,margin:pr.style?.margin,transform:pr.rotate?`rotate(${pr.rotate||0}deg)`:null,filter:pr.disabled?"grayscale(1)":null,"--outlinecolour":pr.outline||null});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconF,{...pr,className,onClick:e=>!disabled&&onClick?.(e),style,"data-chnd":CHND,"data-hasoutline":pr.outline,"data-hasfill":!!pr.style?.fill,"data-type":"iconbox",children})};Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},outline:{required:!1,tsType:{name:"string"},description:""},rotate:{required:!1,tsType:{name:"number"},description:""},canHover:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLSpanElement, MouseEvent>",elements:[{name:"HTMLSpanElement"},{name:"MouseEvent"}]},name:"e"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},role:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},tabIndex:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"intersection",raw:"{\n  /** default 100% */\n  width?: string;\n  /** default 100% */\n  height?: string;\n  /** default 0 */\n  padding?: string;\n  /** default unset */\n  margin?: string;\n  /** pass fill down to svg */\n  fill?: string;\n} & CSSProperties",elements:[{name:"signature",type:"object",raw:"{\n  /** default 100% */\n  width?: string;\n  /** default 100% */\n  height?: string;\n  /** default 0 */\n  padding?: string;\n  /** default unset */\n  margin?: string;\n  /** pass fill down to svg */\n  fill?: string;\n}",signature:{properties:[{key:"width",value:{name:"string",required:!1},description:"default 100%"},{key:"height",value:{name:"string",required:!1},description:"default 100%"},{key:"padding",value:{name:"string",required:!1},description:"default 0"},{key:"margin",value:{name:"string",required:!1},description:"default unset"},{key:"fill",value:{name:"string",required:!1},description:"pass fill down to svg"}]}},{name:"CSSProperties"}]},description:""}}}},"./src/ui/components/ProgressBar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ProgressBar});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/styles/index.ts");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: relative;
  min-width: 5rem;
  width: 100%;
  height: 2rem;
  border-radius: 1rem;
  overflow: hidden;
`,Bar=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
`,Dot=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: absolute;
  top: calc(50% - 0.25rem);
  width: 0.5rem;
  height: 0.5rem;
  background-color: #aaa;
  z-index: 1;
  border-radius: 50%;
  &[data-invert='true'] {
    background-color: #333;
  }
`,ProgressBar=p=>{const{transitionToMs=200,frontColour=_styles__WEBPACK_IMPORTED_MODULE_3__.M8.notificationBlue,backColour="#eee",dotPercentages=[25,50,75]}=p,[barWidth,setBarWidth]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(p.min/p.max*100);return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{const newbw=p.min/p.max*100;barWidth!==newbw&&setBarWidth(newbw)}),[p.min,p.max]),(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{transitionToMs&&setBarWidth(p.max)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Base,{style:{backgroundColor:backColour},className:p.className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Bar,{style:{width:`${barWidth}%`,backgroundColor:frontColour,transition:`width ${transitionToMs}ms linear`}}),dotPercentages?.map((v=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Dot,{style:{left:`calc(${v}% - 0.25rem)`},"data-invert":v>barWidth},v)))]})};ProgressBar.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},frontColour:{required:!1,tsType:{name:"string"},description:"default #4d76ff"},backColour:{required:!1,tsType:{name:"string"},description:"default #eee"},dotPercentages:{required:!1,tsType:{name:"union",raw:"number[] | null",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"null"}]},description:"default 25,50,75"},className:{required:!1,tsType:{name:"string"},description:""},transitionToMs:{required:!1,tsType:{name:"number"},description:"if true, will transition to the end in X ms"}}}},"./src/ui/components/Toast/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$o:()=>ToastContext,tE:()=>ToastProvider});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");function random(max,seed){const rnd=(9301*(seed=seed??(new Date).getTime())+49297)%233280/233280;return Math.ceil(rnd*max)}var Warning=__webpack_require__("./src/ui/icons/Warning.tsx"),common=__webpack_require__("./src/ui/styles/common.tsx"),FlexColumn=__webpack_require__("./src/ui/components/FlexColumn/index.tsx"),FlexRow=__webpack_require__("./src/ui/components/FlexRow/index.tsx"),ProgressBar=__webpack_require__("./src/ui/components/ProgressBar/index.tsx");const Cross=()=>(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsxs)("linearGradient",{id:"a",x2:"0",y1:"47.37",y2:"-1.429",gradientUnits:"userSpaceOnUse",children:[(0,jsx_runtime.jsx)("stop",{stopColor:"#c52828"}),(0,jsx_runtime.jsx)("stop",{offset:"1",stopColor:"#ff5454"})]})}),(0,jsx_runtime.jsxs)("g",{style:{fillOpacity:1},transform:"translate(-58.37 .882) scale(.99999)",children:[(0,jsx_runtime.jsx)("circle",{cx:"82.37",cy:"23.12",r:"24",fill:"url(#a)",style:{fillOpacity:1,fill:"#d33"}}),(0,jsx_runtime.jsx)("path",{fill:"#fff",fillOpacity:".842",d:"m87.77 23.725 5.939-5.939c.377-.372.566-.835.566-1.373 0-.54-.189-.997-.566-1.374l-2.747-2.747a1.888 1.888 0 0 0-1.373-.564c-.539 0-.997.186-1.374.564l-5.939 5.939-5.939-5.939a1.889 1.889 0 0 0-1.374-.564c-.539 0-.997.186-1.374.564l-2.748 2.747a1.873 1.873 0 0 0-.566 1.374c0 .54.188.997.566 1.373l5.939 5.939-5.939 5.94a1.862 1.862 0 0 0-.566 1.373c0 .54.188.997.566 1.373l2.748 2.747c.377.378.835.564 1.374.564.539 0 .997-.186 1.374-.564l5.939-5.939 5.94 5.939c.377.378.835.564 1.374.564.539 0 .997-.186 1.373-.564l2.747-2.747c.377-.372.566-.835.566-1.373 0-.54-.188-.997-.566-1.373l-5.939-5.94",style:{fillOpacity:1,fill:"#fff"}})]})]});Cross.__docgenInfo={description:"",methods:[],displayName:"Cross"};const Tick=()=>(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",children:[(0,jsx_runtime.jsx)("circle",{cx:"32",cy:"32",r:"30",fill:"#fff"}),(0,jsx_runtime.jsx)("path",{fill:"#7cb342",d:"M32 2C15.431 2 2 15.432 2 32c0 16.568 13.432 30 30 30 16.568 0 30-13.432 30-30C62 15.432 48.568 2 32 2zm-6.975 48-.02-.02-.017.02L11 35.6l7.029-7.164 6.977 7.184 21-21.619L53 21.199 25.025 50z"})]});Tick.__docgenInfo={description:"",methods:[],displayName:"Tick"};const ToastContext=(0,react.createContext)({}),ToastContainerStyle=emotion_styled_browser_esm.A.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0.5rem;
  z-index: 10000;

  display: flex;
  flex-flow: column;
  align-items: flex-end;
  max-width: 50vw;
`,ToastStyle=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 0.5rem;
  position: relative;
  font-size: 1.2rem;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  border: solid 1px;
  border-radius: 6px;
`,CloseStyle=emotion_styled_browser_esm.A.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 0.5rem;
  height: 0.5rem;

  cursor: pointer;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1;
  &:hover {
    background-color: var(--bg);
  }
`,Icon=emotion_styled_browser_esm.A.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`,ProgressBarStyled=(0,emotion_styled_browser_esm.A)(ProgressBar.z)`
  height: 0.75rem;
  margin-top: 0.5rem;
`,Toast=({toast,close,style})=>{let closeMs;toast.options?.autoClose?closeMs=toast.options.autoClose:void 0===toast.options?.autoClose&&(closeMs="success"===toast.options?.appearance?5e3:1e4);let icon=(0,jsx_runtime.jsx)(Tick,{});switch(toast.options?.appearance){case"error":icon=(0,jsx_runtime.jsx)(Cross,{});break;case"warning":icon=(0,jsx_runtime.jsx)(Warning.N,{});break;case"success":default:icon=(0,jsx_runtime.jsx)(Tick,{});case void 0:}(0,react.useEffect)((()=>{if(!closeMs)return;const timeout=setTimeout((()=>close(toast.id)),closeMs);return()=>clearTimeout(timeout)}),[]);const closeStyle={color:style.color,"--bg":style.borderColor},toastStyle={...style,boxShadow:`hsl(from ${style.borderColor} h s 25%) 0px 7px 29px 0px`};return"standard"===toast.type?(0,jsx_runtime.jsxs)(ToastStyle,{style:toastStyle,children:[(0,jsx_runtime.jsx)(CloseStyle,{onClick:()=>close(toast.id),style:closeStyle,children:"×"}),(0,jsx_runtime.jsx)(Icon,{style:{fill:style.color},children:icon}),toast.message,void 0!==closeMs&&(0,jsx_runtime.jsx)(ProgressBarStyled,{max:100,min:0,dotPercentages:null,transitionToMs:closeMs})]}):(0,jsx_runtime.jsxs)(ToastStyle,{style:toastStyle,children:[(0,jsx_runtime.jsx)(CloseStyle,{onClick:()=>close(toast.id),style:closeStyle,children:"×"}),(0,jsx_runtime.jsxs)(FlexRow.Y,{noWrap:!0,center:!0,children:[void 0===toast.icon&&(0,jsx_runtime.jsx)(Icon,{children:icon}),toast.icon,(0,jsx_runtime.jsxs)(FlexColumn.I,{style:{marginLeft:null===toast.icon?"0":"0.5rem"},children:[(0,jsx_runtime.jsx)("b",{children:toast.title}),toast.content]})]}),void 0!==closeMs&&(0,jsx_runtime.jsx)(ProgressBarStyled,{max:100,min:0,dotPercentages:null,transitionToMs:closeMs})]})},ToastProvider=({children,providerOptions})=>{const[toasts,setToasts]=(0,react.useState)([]),addToast=(message,options)=>setToasts((currentToasts=>[...currentToasts.filter((ct=>"detailed"===ct.type||ct.message!==message||JSON.stringify(ct.options)!==JSON.stringify(options))),{id:random(1e4).toString(),message,options,type:"standard"}])),addToastDetailed=(p,options)=>setToasts((currentToasts=>[...currentToasts,{id:random(1e4).toString(),...p,options,type:"detailed"}])),close=id=>setToasts((currentToasts=>currentToasts.filter((toast=>toast.id!==id)))),contextValue=(0,react.useMemo)((()=>({addToast,addToastDetailed})),[]),style=(0,common.QS)(providerOptions?.style);return(0,jsx_runtime.jsxs)(ToastContext.Provider,{value:contextValue,children:[children,(0,jsx_runtime.jsx)(ToastContainerStyle,{children:toasts.map((toast=>(0,jsx_runtime.jsx)(Toast,{toast,close,style},toast.id)))})]})};Toast.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{toast:{required:!0,tsType:{name:"union",raw:"IToastStandard | IToastDetailed",elements:[{name:"IToastStandard"},{name:"IToastDetailed"}]},description:""},style:{required:!0,tsType:{name:"IVarStyles"},description:""},close:{required:!0,tsType:{name:"signature",type:"function",raw:"(s: string) => void",signature:{arguments:[{type:{name:"string"},name:"s"}],return:{name:"void"}}},description:""}}},ToastProvider.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},providerOptions:{required:!1,tsType:{name:"IToastProviderOptions"},description:""}}}},"./src/ui/icons/Hamburger.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Hamburger});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Hamburger=({className})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32 ",xmlSpace:"preserve",className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z"})});Hamburger.__docgenInfo={description:"",methods:[],displayName:"Hamburger",props:{className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/ui/icons/Warning.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Warning});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Warning=({style,className})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient",{id:"a",x2:"0",y1:"45.47",y2:"-.599",gradientTransform:"matrix(1.31117 0 0 1.30239 737.39 159.91)",gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{stopColor:"none"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop",{offset:"1",stopColor:"none"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill:style?.fill??"#ffc515",stroke:"url(#a)",strokeWidth:"4px",d:"m797.94 212.01-25.607-48c-.736-1.333-2.068-2.074-3.551-2.074s-2.822.889-3.569 2.222l-25.417 48c-.598 1.185-.605 2.815.132 4s1.921 1.778 3.404 1.778h51.02c1.483 0 2.821-.741 3.42-1.926.747-1.185.753-2.667.165-4",transform:"translate(-627.02 -130.8) scale(.85714)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fillOpacity:".75",stroke:"none",strokeWidth:".90168",d:"M31.996 24.239a1.93 1.93 0 0 0-1.926 1.92v11.559c0 1.06.855 1.92 1.926 1.92a1.929 1.929 0 0 0 1.925-1.92v-11.56c0-1.06-.853-1.92-1.925-1.92zm0 19.249c-1.064 0-1.926.86-1.926 1.925 0 1.064.86 1.925 1.926 1.925 1.064 0 1.925-.86 1.925-1.925a1.922 1.922 0 0 0-1.925-1.925z"})]});Warning.__docgenInfo={description:"",methods:[],displayName:"Warning",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"intersection",raw:"{\n  /** change the colour of the icon. default #ffc515 */\n  fill?: string;\n} & CSSProperties",elements:[{name:"signature",type:"object",raw:"{\n  /** change the colour of the icon. default #ffc515 */\n  fill?: string;\n}",signature:{properties:[{key:"fill",value:{name:"string",required:!1},description:"change the colour of the icon. default #ffc515"}]}},{name:"CSSProperties"}]},description:""}}}},"./src/ui/styles/colours.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M8:()=>colours,Ot:()=>getColourWheel});const colours={mainLight:"rgb(255,255,255)",lightest:"rgb(247,247,247)",darker:"rgb(0,0,0,0.1)",lighter:"rgb(234,234,234)",dark:"rgb(23,25,23)",charcoal:"rgb(50,50,50)",lightCharcoal:"rgb(154,154,154)",orangeRed:"#d65873",orange:"#e88070",yellow:"rgb(255,206,109)",lightBlue:"rgb(90,129,255)",lightGreen:"rgb(75,236,120)",lightGreen2:"rgb(14, 165, 0)",darkGreen:"#228B22",peach:"rgb(245,169,169)",purple:"rgb(173,121,255)",notificationBlue:"#4d76ff",notificationBlue2:"#002ab3",notificationBlue3:"rgb(230,238,246)",gradient:"---generated---"};var left,right;colours.gradient=(left=colours.orangeRed,right=colours.orange,`linear-gradient(to right, ${left}, ${right})`);const colourWheel=["rgb(11,132,165)","rgb(246,200,95)","rgb(111,78,124)","rgb(157,216,102)","rgb(202,71,47)","rgb(255,160,86)","rgb(141,221,208)"],getColourWheel=i=>colourWheel[i%colourWheel.length]},"./src/ui/styles/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dn:()=>NoTextSelect,QS:()=>getVarStyles,W6:()=>HardOutlineFilter,gu:()=>HardOutline,mG:()=>noDrag,tJ:()=>TextOverflowEllipsis,z9:()=>bounce});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_colours__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/styles/colours.ts");const HardOutline=(outlineColour="white",sizePx=1)=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH`\
filter: ${HardOutlineFilter(outlineColour,sizePx)};
`,HardOutlineFilter=(outlineColour="white",sizePx=1)=>{const px=`${sizePx}px`;return`drop-shadow(${px} ${px} 0px ${outlineColour})\n  drop-shadow(-${px} ${px} 0px ${outlineColour})\n  drop-shadow(${px} -${px} 0px ${outlineColour})\n  drop-shadow(-${px} -${px} 0px ${outlineColour})`},NoTextSelect=_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH`
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`,TextOverflowEllipsis=lines=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,noDrag={draggable:!1,onDragStart:e=>{e.preventDefault(),e.stopPropagation()},onTouchStart:e=>{e.preventDefault(),e.stopPropagation()}},bounce=bounceattr=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH`
  transition:
    opacity 0.2s ease,
    transform 0.2s cubic-bezier(0.02, 1.5, 0.74, 1.23);
  transform-origin: 50% 50%;
  transform: translateY(-5px);
  &[${bounceattr}='true'] {
    transform: translateY(0);
  }
`,getVarStyles=(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div`
  background-color: white;
  margin: 0.5rem;

  position: relative;
  border-radius: 0.5rem;
  max-width: 40rem;
  padding: 1rem;
  border: solid 2px ${_colours__WEBPACK_IMPORTED_MODULE_1__.M8.lighter};
`,raw=>({...raw,color:raw?.color??"var(--main-fg)",backgroundColor:raw?.backgroundColor??"var(--main-bg)",borderColor:raw?.borderColor??"var(--main-bg-mid)"}))},"./src/ui/styles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W6:()=>common.W6,BQ:()=>media.BQ,z9:()=>common.z9,M8:()=>colours.M8,Ot:()=>colours.Ot,UN:()=>media.UN});var colours=__webpack_require__("./src/ui/styles/colours.ts"),common=__webpack_require__("./src/ui/styles/common.tsx"),media=__webpack_require__("./src/ui/styles/media.ts"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");emotion_styled_browser_esm.A.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-flow: column;
  overflow: hidden;
  align-content: flex-start;
  align-items: flex-start;

  > h1,
  h2,
  > p {
    white-space: pre-wrap;
    font-size: 1.2rem;
  }
  h1,
  h2 {
    font-weight: normal;
    font-size: 2rem;
    flex-basis: 100%;
    margin: 0;
  }
`,emotion_styled_browser_esm.A.div`
  height: 0.5rem;
  width: 0.5rem;
`,emotion_styled_browser_esm.A.div`
  font-size: 1.4em;
  font-weight: bold;
`,emotion_styled_browser_esm.A.div`
  margin-bottom: 1rem;
`,emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: column;
  margin-left: auto;
  margin-right: auto;
  @media ${media.UN} {
    width: calc(100% - 2rem);
  }
`,emotion_styled_browser_esm.A.a`
  width: fit-content;
  color: rgb(125, 171, 255);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &[data-inline='true'] {
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;
  }
  &[data-inline='false'] {
    display: flex;
    margin: auto;
  }
`},"./src/ui/styles/media.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BQ:()=>bigScreen,SO:()=>vSmallScreen,UN:()=>smallScreen,do:()=>bigScreenPx,kX:()=>smallScreenPx});const smallScreenPx=1024,bigScreenPx=2e3,vSmallScreen="(max-width: 500px)",smallScreen=`(max-width: ${smallScreenPx}px)`,bigScreen=`(min-width: ${smallScreenPx}px)`}}]);
//# sourceMappingURL=Toast-stories.33338f66.iframe.bundle.js.map