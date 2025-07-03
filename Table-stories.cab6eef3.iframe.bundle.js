"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[1897],{"./src/common/helpers/groupBy.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function groupByList(arr,getKey){const ret=[];return arr.forEach(item=>{const key=getKey(item),i=ret.find(r=>r.key===key);i?i.items.push(item):ret.push({key,items:[item]})}),ret}__webpack_require__.d(__webpack_exports__,{Bg:()=>groupByList})},"./src/ui/components/Table/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Table});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_common_helpers_groupBy__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/common/helpers/groupBy.ts"));const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
`,TableRow=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  border: solid 1px #ccc;
  &[data-header='true'] {
    border-bottom: solid 1px #888;
  }
  &:not(:first-of-type) {
    border-top: 0;
  }
`,Group=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`,GroupTitle=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  font-size: 1.5rem;
`,GroupWrap=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`,Table=({children,className,headerRow})=>{const grouped=(0,_common_helpers_groupBy__WEBPACK_IMPORTED_MODULE_3__.Bg)(children,s=>s.groupTitle);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{className,children:grouped.map(group=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(GroupWrap,{children:[group.key&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GroupTitle,{children:group.key},`gt${group.key}`),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Group,{children:[headerRow&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TableRow,{"data-header":"true",children:headerRow},`headrow${group.key}`),group.items.map(item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TableRow,{children:item.content},item.content.key))]},`g${group.key}`)]},"gk"+group.key))})};Table.__docgenInfo={description:"",methods:[],displayName:"Table",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ITableItem"}],raw:"ITableItem[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},headerRow:{required:!1,tsType:{name:"JSX.Element"},description:""}}}},"./stories/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultWithArgs:()=>DefaultWithArgs,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_src_ui_components_Table__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/components/Table/index.tsx"));const base={title:"UI/Table",component:_src_ui_components_Table__WEBPACK_IMPORTED_MODULE_2__.X},Primary=(args=>(0,_src_ui_components_Table__WEBPACK_IMPORTED_MODULE_2__.X)(args)).bind({});Primary.args={children:[{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"content"}),groupTitle:"group"},{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"content1"}),groupTitle:"group1"},{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"content2"}),groupTitle:"group1"}]};const __WEBPACK_DEFAULT_EXPORT__=base,DefaultWithArgs=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Primary,{...Primary.args}),__namedExportsOrder=["Primary","DefaultWithArgs"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => Table(args)",...Primary.parameters?.docs?.source}}},DefaultWithArgs.parameters={...DefaultWithArgs.parameters,docs:{...DefaultWithArgs.parameters?.docs,source:{originalSource:"() => <Primary {...Primary.args as ITable} />",...DefaultWithArgs.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Table-stories.cab6eef3.iframe.bundle.js.map