"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[4962],{"./stories/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultWithArgs:()=>DefaultWithArgs,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _src_ui_components_Table__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/Table/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const base={title:"UI/Table",component:_src_ui_components_Table__WEBPACK_IMPORTED_MODULE_1__.i},Primary=(args=>(0,_src_ui_components_Table__WEBPACK_IMPORTED_MODULE_1__.i)(args)).bind({});Primary.args={children:[{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:"content"}),groupTitle:"group"},{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:"content1"}),groupTitle:"group1"},{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:"content2"}),groupTitle:"group1"}]};const __WEBPACK_DEFAULT_EXPORT__=base,DefaultWithArgs=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Primary,{...Primary.args});DefaultWithArgs.displayName="DefaultWithArgs",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => Table(args)",...Primary.parameters?.docs?.source}}},DefaultWithArgs.parameters={...DefaultWithArgs.parameters,docs:{...DefaultWithArgs.parameters?.docs,source:{originalSource:"() => <Primary {...(Primary.args as ITable)} />",...DefaultWithArgs.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","DefaultWithArgs"]},"./src/common/helpers/groupBy.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function groupByList(arr,getKey){const ret=[];return arr.forEach((item=>{const key=getKey(item),i=ret.find((r=>r.key===key));i?i.items.push(item):ret.push({key,items:[item]})})),ret}__webpack_require__.d(__webpack_exports__,{f1:()=>groupByList})},"./src/ui/components/Table/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Table});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_@types+react@18.2.67_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_common_helpers_groupBy__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/common/helpers/groupBy.ts")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
`,TableRow=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  display: flex;
  border: solid 1px #ccc;
  &[data-header='true'] {
    border-bottom: solid 1px #888;
  }
  &:not(:first-of-type) {
    border-top: 0;
  }
`,Group=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`,GroupTitle=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  font-size: 1.5rem;
`,GroupWrap=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`,Table=({children,className,headerRow})=>{const grouped=(0,_common_helpers_groupBy__WEBPACK_IMPORTED_MODULE_3__.f1)(children,(s=>s.groupTitle));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Base,{className,children:grouped.map((group=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(GroupWrap,{children:[group.key&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(GroupTitle,{children:group.key},`gt${group.key}`),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Group,{children:[headerRow&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TableRow,{"data-header":"true",children:headerRow},`headrow${group.key}`),group.items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TableRow,{children:item.content},item.content.key)))]},`g${group.key}`)]},"gk"+group.key)))})};Table.displayName="Table";try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerRow:{defaultValue:null,description:"",name:"headerRow",required:!1,type:{name:"Element"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Table/index.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/ui/components/Table/index.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Table-stories.74dbaaa9.iframe.bundle.js.map