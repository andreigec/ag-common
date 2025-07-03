/*! For license information please see Modal-Modal-stories.056067d5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[1926],{"./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AH:()=>css});var _jsx,JSX,_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@19.1.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),__webpack_require__("./node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js")),jsx=(__webpack_require__("./node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),function jsx(type,props){var args=arguments;if(null==props||!_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.h.call(props,"css"))return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(void 0,args);var argsLength=args.length,createElementArgArray=new Array(argsLength);createElementArgArray[0]=_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.E,createElementArgArray[1]=(0,_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.c)(type,props);for(var i=2;i<argsLength;i++)createElementArgArray[i]=args[i];return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null,createElementArgArray)});_jsx=jsx||(jsx={}),JSX||(JSX=_jsx.JSX||(_jsx.JSX={}));function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__.J)(args)}},"./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var reactIs=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent}},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")},"./src/common/helpers/array.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ct:()=>flat,G:()=>arrayToObject,Kl:()=>findLastIndex,NV:()=>insertElementAtIndex,ey:()=>distinctBy,s:()=>take,z2:()=>notEmpty});const arrayToObject=(arr,keyF,valueF)=>{const ret={};return arr&&keyF?(arr.forEach(v=>{const k=keyF(v);ret[k]=valueF(v)}),ret):ret},flat=arr=>[].concat(...arr),take=(array,num)=>{const safeNum=Math.max(0,Math.min(num,array.length));return{part:array.slice(0,safeNum),rest:array.slice(safeNum)}},notEmpty=value=>null!=value&&!1!==value&&""!==value;function distinctBy(data,key,ignoreEmpty){if(!data||0===data.length)return data;const hashSet=new Set;return data.filter(x=>{let keyVal;return keyVal="string"==typeof key?x[key]:key(x),!(!keyVal&&ignoreEmpty)&&(!hashSet.has(keyVal)&&(hashSet.add(keyVal),!0))})}function findLastIndex(arr,predicate){for(let i=arr.length-1;i>=0;i--)if(predicate(arr[i],i,arr))return i;return-1}const insertElementAtIndex=(arr,element,index)=>[...arr.slice(0,index),element,...arr.slice(index)]},"./src/ui/components/Close/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Close});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_helpers_dom__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/helpers/dom.ts"));const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: absolute;
  z-index: 1;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;
  background-color: white;
  top: 0;
  right: 0;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`,Close=p=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{...(0,_helpers_dom__WEBPACK_IMPORTED_MODULE_3__.r8)(p),className:p.className,onClick:e=>p.onClick?.(e)});Close.__docgenInfo={description:"",methods:[],displayName:"Close",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement, MouseEvent>",elements:[{name:"HTMLDivElement"},{name:"MouseEvent"}]},name:"ev"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/ui/components/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Modal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom/index.js"),_helpers_dom__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/ui/helpers/dom.ts"),_helpers_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/helpers/useLockBodyScroll.ts"),_helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/ui/helpers/useOnClickOutside.ts"),_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/ui/styles/index.ts"),_Close__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/ui/components/Close/index.tsx");const FixedBackground=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`,ModalBase=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  position: absolute;
  z-index: 1;
  background-color: white;
  border: solid 1px transparent;
  border-radius: 0.5rem;
  box-shadow:
    0 1px 10px 0 rgba(0, 0, 0, 0.6),
    0 2px 15px 0 rgba(0, 0, 0, 0.05);
  max-width: 95vw;
  max-height: 95vh;
  overflow: hidden;
  &[data-position='left'] {
    left: 0;
  }
  &[data-position='right'] {
    right: 0;
  }
  &[data-topposition='top'] {
    top: 0;
  }
  &[data-topposition='bottom'] {
    bottom: 0;
  }
  ${(0,_styles__WEBPACK_IMPORTED_MODULE_6__.z9)("data-bounced")}
`,CloseStyled=(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  padding: 1rem;

  &:hover {
    background-color: #eee;
  }
`,(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_Close__WEBPACK_IMPORTED_MODULE_7__.b)`
  z-index: 1;
`),Modal=p=>{const{open,setOpen,children,position="left",topPosition="top",showCloseButton=!0,closeOnMoveMouseOutside=!1,className,closeOnClickOutside=!0,portalId:pidraw,style}=p;let portalId=pidraw;void 0===portalId&&(portalId="ag-modal-portal"),(0,_helpers_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_4__._)(p.open);const[portalElem,setPortalElem]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{if(null===portalId||document.querySelectorAll(`#${portalId}`).length>0)return;const d=document.createElement("div");return d.id=portalId,d.style.position="fixed",d.style.zIndex="10",document.body.appendChild(d),()=>{try{document.querySelector(`#${portalId}`)?.remove()}catch(e){}}},[]);const[bounced,setBounced]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),ref=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);if((0,_helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__.W)({disabled:!open,ref,moveMouseOutside:closeOnMoveMouseOutside},e=>{if(portalElem){if(Array.prototype.indexOf.call(portalElem.children,ref.current?.parentElement)+1!==portalElem.children.length)return}closeOnClickOutside&&open&&(setOpen(!1,e),setBounced(!1))}),(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{!bounced&&open&&setBounced(!0)},[open,bounced]),(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{void 0===portalElem&&portalId&&setPortalElem(document.getElementById(portalId))},[portalElem,portalId]),!open)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{});const Content=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FixedBackground,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ModalBase,{...(0,_helpers_dom__WEBPACK_IMPORTED_MODULE_8__.r8)(p),"data-bounced":bounced,"data-position":position,"data-topposition":topPosition,ref,className,style,children:[showCloseButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CloseStyled,{"data-type":"modal-close",onClick:e=>setOpen(!1,e)}),children]})});return portalId&&void 0===portalElem?null:portalId&&portalElem?(0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)(Content,portalElem):Content};Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},setOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(b: boolean, e: Event) => void",signature:{arguments:[{type:{name:"boolean"},name:"b"},{type:{name:"Event"},name:"e"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"}]},description:""},topPosition:{required:!1,tsType:{name:"union",raw:"'bottom' | 'top' | 'center'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"},{name:"literal",value:"'center'"}]},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:""},closeOnMoveMouseOutside:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closeOnClickOutside:{required:!1,tsType:{name:"boolean"},description:""},portalId:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:'if provided, will create inside this #id. default "ag-modal-portal". if null, wont use global id'},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/ui/components/Modal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aF:()=>Modal.a,yZ:()=>ModalDialog});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),client=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom/client.js")),Modal=__webpack_require__("./src/ui/components/Modal/Modal.tsx");const ModalDialog=async(content,opt)=>new Promise(res=>{const wrapper=document.body.appendChild(document.createElement("div")),root=(0,client.createRoot)(wrapper),onClose=()=>{try{root.unmount(),wrapper.remove()}catch(e){}};root.render((0,jsx_runtime.jsx)(Modal.a,{open:!0,setOpen:o=>{o||onClose(),res("ok")},topPosition:"center",position:"center",style:opt?.style,children:"function"!=typeof content?content:content({close:()=>{onClose()}})}))})},"./src/ui/helpers/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mO:()=>convertRemToPixels,nO:()=>isRightClick,r8:()=>filterDataProps});var _common_helpers_array__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/helpers/array.ts");const convertRemToPixels=rem=>{let fontSize="16px";return"undefined"!=typeof window&&(fontSize=getComputedStyle(document.documentElement).fontSize),rem*parseFloat(fontSize)},filterDataProps=p=>{const x=Object.entries(p).filter(r=>r[0].startsWith("data-")).map(r=>r);return(0,_common_helpers_array__WEBPACK_IMPORTED_MODULE_0__.G)(x,s=>s[0],s=>s[1])},isRightClick=event=>{let isRightMB=!1;return"which"in event?isRightMB=3==event.which:"button"in event&&(isRightMB=2==event.button),isRightMB}},"./src/ui/helpers/useLockBodyScroll.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>useLockBodyScroll});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");function useLockBodyScroll(enabled){(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{let originalStyle;return enabled&&(originalStyle=window.getComputedStyle(document.body).overflow,document.body.style.overflow="hidden"),()=>{enabled&&(document.body.style.overflow=originalStyle||"")}},[enabled])}},"./src/ui/helpers/useOnClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>useOnClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/helpers/dom.ts");function useOnClickOutside(p,handler){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const listener=event=>{if(p.disabled&&"boolean"!=typeof p.disabled?p.disabled():p.disabled??!1)return;if((0,_dom__WEBPACK_IMPORTED_MODULE_1__.nO)(event))return;const el=p.ref.current;if(!el)return;let n=event.target,found=!1;for(;n;){if(n.isEqualNode(el)){found=!0;break}n=n.parentNode}found||handler(event)};return document.addEventListener("mousedown",listener),document.addEventListener("touchstart",listener),p.moveMouseOutside&&document.addEventListener("mousemove",listener),()=>{try{document.removeEventListener("mousedown",listener),document.removeEventListener("touchstart",listener),document.removeEventListener("mousemove",listener)}catch(e){}}},[p,handler])}},"./src/ui/styles/colours.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M8:()=>colours,Ot:()=>getColourWheel});const colours={mainLight:"rgb(255,255,255)",lightest:"rgb(247,247,247)",darker:"rgb(0,0,0,0.1)",lighter:"rgb(234,234,234)",dark:"rgb(23,25,23)",charcoal:"rgb(50,50,50)",lightCharcoal:"rgb(154,154,154)",orangeRed:"#d65873",orange:"#e88070",yellow:"rgb(255,206,109)",lightBlue:"rgb(90,129,255)",lightGreen:"rgb(75,236,120)",lightGreen2:"rgb(14, 165, 0)",darkGreen:"#228B22",peach:"rgb(245,169,169)",purple:"rgb(173,121,255)",notificationBlue:"#4d76ff",notificationBlue2:"#002ab3",notificationBlue3:"rgb(230,238,246)",gradient:"---generated---"};var left,right;colours.gradient=(left=colours.orangeRed,right=colours.orange,`linear-gradient(to right, ${left}, ${right})`);const colourWheel=["rgb(11,132,165)","rgb(246,200,95)","rgb(111,78,124)","rgb(157,216,102)","rgb(202,71,47)","rgb(255,160,86)","rgb(141,221,208)"],getColourWheel=i=>colourWheel[i%colourWheel.length]},"./src/ui/styles/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dn:()=>NoTextSelect,QS:()=>getVarStyles,W6:()=>HardOutlineFilter,gu:()=>HardOutline,mG:()=>noDrag,tJ:()=>TextOverflowEllipsis,z9:()=>bounce});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_colours__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/styles/colours.ts");const HardOutline=(outlineColour="white",sizePx=1)=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH`\
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
`,raw=>({...raw,color:raw?.color??"var(--main-fg)",backgroundColor:raw?.backgroundColor??"var(--main-bg)",borderColor:raw?.borderColor??"var(--main-bg-mid)"}))},"./src/ui/styles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W6:()=>common.W6,BQ:()=>media.BQ,z9:()=>common.z9,M8:()=>colours.M8,Ot:()=>colours.Ot,UN:()=>media.UN});var colours=__webpack_require__("./src/ui/styles/colours.ts"),common=__webpack_require__("./src/ui/styles/common.tsx"),media=__webpack_require__("./src/ui/styles/media.ts"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");emotion_styled_browser_esm.A.div`
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
`},"./src/ui/styles/media.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BQ:()=>bigScreen,SO:()=>vSmallScreen,UN:()=>smallScreen,do:()=>bigScreenPx,kX:()=>smallScreenPx});const smallScreenPx=1024,bigScreenPx=2e3,vSmallScreen="(max-width: 500px)",smallScreen=`(max-width: ${smallScreenPx}px)`,bigScreen=`(min-width: ${smallScreenPx}px)`},"./stories/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_src_ui_components_Modal__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/components/Modal/index.tsx"));const base={title:"UI/Modal",component:_src_ui_components_Modal__WEBPACK_IMPORTED_MODULE_2__.aF},Primary=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_ui_components_Modal__WEBPACK_IMPORTED_MODULE_2__.aF,{...args})).bind({});Primary.args={open:!0,position:"center",topPosition:"center",setOpen:()=>{},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:"5rem",height:"5rem"},children:"test"})};const __WEBPACK_DEFAULT_EXPORT__=base,__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Modal {...args} />",...Primary.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Modal-Modal-stories.056067d5.iframe.bundle.js.map