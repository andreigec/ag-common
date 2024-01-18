"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[5181],{"./stories/FlexRow.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _src_ui_components_FlexRow__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/FlexRow/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const base={title:"UI/FlexRow",component:_src_ui_components_FlexRow__WEBPACK_IMPORTED_MODULE_1__.g},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_ui_components_FlexRow__WEBPACK_IMPORTED_MODULE_1__.g,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:"1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:"2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:"3"})]})};const __WEBPACK_DEFAULT_EXPORT__=base;Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <FlexRow {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/ui/components/FlexRow/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>FlexRow});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.48_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
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
`,FlexRow=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Base,{"data-nowrap":props.noWrap??!1,"data-nogrow":props.noGrow??!1,"data-center":props.center??!1,...props,children:props.children});FlexRow.displayName="FlexRow";try{FlexRow.displayName="FlexRow",FlexRow.__docgenInfo={description:"",displayName:"FlexRow",props:{noGrow:{defaultValue:null,description:"",name:"noGrow",required:!1,type:{name:"boolean"}},center:{defaultValue:null,description:"",name:"center",required:!1,type:{name:"boolean"}},noWrap:{defaultValue:null,description:"",name:"noWrap",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},break:{defaultValue:null,description:"",name:"break",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"vsmall"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/FlexRow/index.tsx#FlexRow"]={docgenInfo:FlexRow.__docgenInfo,name:"FlexRow",path:"src/ui/components/FlexRow/index.tsx#FlexRow"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=FlexRow-stories.866ebbd7.iframe.bundle.js.map