"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[2735],{"./stories/Close.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultWithArgs:()=>DefaultWithArgs,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _src_ui_components_Close__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/Close/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const base={title:"UI/Close",component:_src_ui_components_Close__WEBPACK_IMPORTED_MODULE_1__.x},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{backgroundColor:"#333",position:"relative",width:"5rem",height:"5rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_ui_components_Close__WEBPACK_IMPORTED_MODULE_1__.x,{...args})});Template.displayName="Template";const Primary=Template.bind({});Primary.args={};const __WEBPACK_DEFAULT_EXPORT__=base,DefaultWithArgs=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Primary,{...Primary.args});DefaultWithArgs.displayName="DefaultWithArgs",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <div style={{\n  backgroundColor: '#333',\n  position: 'relative',\n  width: '5rem',\n  height: '5rem'\n}}>\n    <Close {...args} />\n  </div>",...Primary.parameters?.docs?.source}}},DefaultWithArgs.parameters={...DefaultWithArgs.parameters,docs:{...DefaultWithArgs.parameters?.docs,source:{originalSource:"() => <Primary {...(Primary.args as IClose)} />",...DefaultWithArgs.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","DefaultWithArgs"]},"./src/common/helpers/array.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dw:()=>notEmpty,FB:()=>arrayToObject,dP:()=>distinctBy,qn:()=>take,qr:()=>findLastIndex});const arrayToObject=(arr,keyF,valueF)=>{const ret={};return arr&&keyF?(arr.forEach((v=>{const k=keyF(v);ret[k]=valueF(v)})),ret):ret},take=(array,num)=>{const ret=JSON.parse(JSON.stringify(array));return{part:ret.slice(0,num),rest:ret.slice(num)}};function notEmpty(value){return null!=value&&!1!==value}function distinctBy(data,key,ignoreEmpty){if(!data||0===data.length)return data;const hashSet=new Set;return data.filter((x=>{let keyVal;return keyVal="string"==typeof key?x[key]:key(x),!(!keyVal&&ignoreEmpty)&&(!hashSet.has(keyVal)&&(hashSet.add(keyVal),!0))}))}function findLastIndex(arr,predicate){for(let i=arr.length-1;i>=0;i--)if(predicate(arr[i],i,arr))return i;return-1}},"./src/ui/components/Close/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Close});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.57_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_helpers_dom__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/ui/helpers/dom.ts")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
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
`,Close=p=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Base,{...(0,_helpers_dom__WEBPACK_IMPORTED_MODULE_3__._E)(p),className:p.className,onClick:e=>p.onClick?.(e)});Close.displayName="Close";try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Close/index.tsx#Close"]={docgenInfo:Close.__docgenInfo,name:"Close",path:"src/ui/components/Close/index.tsx#Close"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/helpers/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H9:()=>convertRemToPixels,_E:()=>filterDataProps,dO:()=>isRightClick});var _common_helpers_array__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/helpers/array.ts");const convertRemToPixels=rem=>{let fontSize="16px";return"undefined"!=typeof window&&(fontSize=getComputedStyle(document.documentElement).fontSize),rem*parseFloat(fontSize)},filterDataProps=p=>{const x=Object.entries(p).filter((r=>r[0].startsWith("data-"))).map((r=>r));return(0,_common_helpers_array__WEBPACK_IMPORTED_MODULE_0__.FB)(x,(s=>s[0]),(s=>s[1]))},isRightClick=event=>{let isRightMB=!1;return"which"in event?isRightMB=3==event.which:"button"in event&&(isRightMB=2==event.button),isRightMB}}}]);
//# sourceMappingURL=Close-stories.e60e5d6c.iframe.bundle.js.map