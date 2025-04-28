/*! For license information please see Search-SearchBox-stories.72de8339.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[7151],{"./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AH:()=>css});var _jsx,JSX,_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@19.1.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),__webpack_require__("./node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js")),jsx=(__webpack_require__("./node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),function jsx(type,props){var args=arguments;if(null==props||!_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.h.call(props,"css"))return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(void 0,args);var argsLength=args.length,createElementArgArray=new Array(argsLength);createElementArgArray[0]=_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.E,createElementArgArray[1]=(0,_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.c)(type,props);for(var i=2;i<argsLength;i++)createElementArgArray[i]=args[i];return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null,createElementArgArray)});_jsx=jsx||(jsx={}),JSX||(JSX=_jsx.JSX||(_jsx.JSX={}));function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__.J)(args)}},"./stories/Search/SearchBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SearchBoxB:()=>SearchBoxB,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_src_ui_components_Search_SearchBox__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/components/Search/SearchBox.tsx"));const base={title:"UI/Search",component:_src_ui_components_Search_SearchBox__WEBPACK_IMPORTED_MODULE_2__.G},SearchBoxB=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_ui_components_Search_SearchBox__WEBPACK_IMPORTED_MODULE_2__.G,{...args})).bind({});SearchBoxB.args={searchText:"test",setSearchText:(st,enter)=>alert(`st=${st} enter=${enter}`)};const __WEBPACK_DEFAULT_EXPORT__=base,__namedExportsOrder=["SearchBoxB"];SearchBoxB.parameters={...SearchBoxB.parameters,docs:{...SearchBoxB.parameters?.docs,source:{originalSource:"args => <SearchBox {...args} />",...SearchBoxB.parameters?.docs?.source}}}},"./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var reactIs=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent}},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")},"./src/ui/components/Search/SearchBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>SearchBox});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_helpers_debounce__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/helpers/debounce.ts"),_helpers_dom__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/ui/helpers/dom.ts"),_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/icons/index.tsx"),_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/ui/styles/index.ts"),_TextEdit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/ui/components/TextEdit/index.tsx");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  padding: 1rem;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: calc(100% - 2rem);
  margin: auto;
  position: relative;

  @media ${_styles__WEBPACK_IMPORTED_MODULE_5__.UN} {
    padding: 0.5rem;
    margin: 0;
    width: calc(100% - 1rem);
    max-height: calc(100% - 1rem);
  }
`,MagnifyIcon=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  margin-left: 0.5rem;
`,CrossIconStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_icons__WEBPACK_IMPORTED_MODULE_4__.CrossIcon)`
  position: absolute;
  right: 1rem;
  @media ${_styles__WEBPACK_IMPORTED_MODULE_5__.BQ} {
    right: 2rem;
  }
`,TextEditStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_TextEdit__WEBPACK_IMPORTED_MODULE_6__.mF)`
  padding: 0;
  height: 2.5rem;
  background-color: white;
`,SearchBox=p=>{const ur=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(p.textBoxRef),cr=(0,react__WEBPACK_IMPORTED_MODULE_2__.createRef)(),textBoxRef=p.textBoxRef?ur:cr;return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{textBoxRef?.current&&textBoxRef.current.getValue()!==p.searchText&&(textBoxRef.current.setValue(p.searchText),p.setSearchText(p.searchText,!0))}),[p,textBoxRef]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Base,{"data-type":"search",className:p.className,...(0,_helpers_dom__WEBPACK_IMPORTED_MODULE_7__.r8)(p),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextEditStyled,{ref:textBoxRef,defaultValue:p.searchText,placeholder:p.placeholderText,defaultEditing:{focus:!0,...p.defaultEditing},singleLine:!0,leftContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MagnifyIcon,{onClick:()=>p.setSearchText(textBoxRef?.current?.getValue()||"",!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_4__.Magnify,{})}),allowUndo:!1,onClickOutsideWithNoValue:null,onSubmit:(v,enterPressed)=>(0,_helpers_debounce__WEBPACK_IMPORTED_MODULE_3__.s)((()=>{p.setSearchText(v,enterPressed)}),{key:"pagesearch",time:200})}),p.searchText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CrossIconStyled,{onClick:()=>{textBoxRef?.current?.setValue(""),p.setSearchText("",!0)}})]})};SearchBox.__docgenInfo={description:"",methods:[],displayName:"SearchBox",props:{placeholderText:{required:!1,tsType:{name:"string"},description:""},searchText:{required:!0,tsType:{name:"string"},description:""},setSearchText:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string, enterPressed: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"val"},{type:{name:"boolean"},name:"enterPressed"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},textBoxRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<IRefTextEdit | null>",elements:[{name:"union",raw:"IRefTextEdit | null",elements:[{name:"IRefTextEdit"},{name:"null"}]}]},description:""},defaultEditing:{required:!1,tsType:{name:"signature",type:"object",raw:"{ focus?: boolean }",signature:{properties:[{key:"focus",value:{name:"boolean",required:!1}}]}},description:"if truthy will enable text edit mode by default. if focus is true, will also focus on open"}}}},"./src/ui/helpers/debounce.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>debounce});__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const hashMap={};function debounce(callback,{key,time}){clearTimeout(hashMap[key]),hashMap[key]=setTimeout((()=>{delete hashMap[key],callback()}),time)}},"./src/ui/styles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W6:()=>common.W6,BQ:()=>media.BQ,z9:()=>common.z9,M8:()=>colours.M8,Ot:()=>colours.Ot,UN:()=>media.UN});var colours=__webpack_require__("./src/ui/styles/colours.ts"),common=__webpack_require__("./src/ui/styles/common.tsx"),media=__webpack_require__("./src/ui/styles/media.ts"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");emotion_styled_browser_esm.A.div`
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
//# sourceMappingURL=Search-SearchBox-stories.72de8339.iframe.bundle.js.map