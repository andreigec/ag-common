"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[8373],{"./src/common/helpers/array.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ct:()=>flat,G:()=>arrayToObject,Kl:()=>findLastIndex,NV:()=>insertElementAtIndex,ey:()=>distinctBy,s:()=>take,z2:()=>notEmpty});const arrayToObject=(arr,keyF,valueF)=>{const ret={};return arr&&keyF?(arr.forEach(v=>{const k=keyF(v);ret[k]=valueF(v)}),ret):ret},flat=arr=>[].concat(...arr),take=(array,num)=>{const safeNum=Math.max(0,Math.min(num,array.length));return{part:array.slice(0,safeNum),rest:array.slice(safeNum)}},notEmpty=value=>null!=value&&!1!==value&&""!==value;function distinctBy(data,key,ignoreEmpty){if(!data||0===data.length)return data;const hashSet=new Set;return data.filter(x=>{let keyVal;return keyVal="string"==typeof key?x[key]:key(x),!(!keyVal&&ignoreEmpty)&&(!hashSet.has(keyVal)&&(hashSet.add(keyVal),!0))})}function findLastIndex(arr,predicate){for(let i=arr.length-1;i>=0;i--)if(predicate(arr[i],i,arr))return i;return-1}const insertElementAtIndex=(arr,element,index)=>[...arr.slice(0,index),element,...arr.slice(index)]},"./src/ui/components/Close/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Close});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_helpers_dom__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/helpers/dom.ts"));const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
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
`,Close=p=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{...(0,_helpers_dom__WEBPACK_IMPORTED_MODULE_3__.r8)(p),className:p.className,onClick:e=>p.onClick?.(e)});Close.__docgenInfo={description:"",methods:[],displayName:"Close",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement, MouseEvent>",elements:[{name:"HTMLDivElement"},{name:"MouseEvent"}]},name:"ev"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/ui/helpers/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mO:()=>convertRemToPixels,nO:()=>isRightClick,r8:()=>filterDataProps});var _common_helpers_array__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/helpers/array.ts");const convertRemToPixels=rem=>{let fontSize="16px";return"undefined"!=typeof window&&(fontSize=getComputedStyle(document.documentElement).fontSize),rem*parseFloat(fontSize)},filterDataProps=p=>{const x=Object.entries(p).filter(r=>r[0].startsWith("data-")).map(r=>r);return(0,_common_helpers_array__WEBPACK_IMPORTED_MODULE_0__.G)(x,s=>s[0],s=>s[1])},isRightClick=event=>{let isRightMB=!1;return"which"in event?isRightMB=3==event.which:"button"in event&&(isRightMB=2==event.button),isRightMB}},"./stories/Close.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultWithArgs:()=>DefaultWithArgs,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_src_ui_components_Close__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/components/Close/index.tsx"));const base={title:"UI/Close",component:_src_ui_components_Close__WEBPACK_IMPORTED_MODULE_2__.b},Primary=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{backgroundColor:"#333",position:"relative",width:"5rem",height:"5rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_ui_components_Close__WEBPACK_IMPORTED_MODULE_2__.b,{...args})})).bind({});Primary.args={};const __WEBPACK_DEFAULT_EXPORT__=base,DefaultWithArgs=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Primary,{...Primary.args}),__namedExportsOrder=["Primary","DefaultWithArgs"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <div style={{\n  backgroundColor: '#333',\n  position: 'relative',\n  width: '5rem',\n  height: '5rem'\n}}>\n    <Close {...args} />\n  </div>",...Primary.parameters?.docs?.source}}},DefaultWithArgs.parameters={...DefaultWithArgs.parameters,docs:{...DefaultWithArgs.parameters?.docs,source:{originalSource:"() => <Primary {...Primary.args as IClose} />",...DefaultWithArgs.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Close-stories.7efcb9a2.iframe.bundle.js.map