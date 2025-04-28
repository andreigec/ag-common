"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[6482],{"./stories/FlexRow.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_src_ui_components_FlexRow__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/components/FlexRow/index.tsx"));const base={title:"UI/FlexRow",component:_src_ui_components_FlexRow__WEBPACK_IMPORTED_MODULE_2__.Y},Primary=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_ui_components_FlexRow__WEBPACK_IMPORTED_MODULE_2__.Y,{...args})).bind({});Primary.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"3"})]})};const __WEBPACK_DEFAULT_EXPORT__=base,__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <FlexRow {...args} />",...Primary.parameters?.docs?.source}}}},"./src/ui/components/FlexRow/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>FlexRow});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
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
`,FlexRow=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{"data-nowrap":props.noWrap??!1,"data-nogrow":props.noGrow??!1,"data-center":props.center??!1,...props,children:props.children});FlexRow.__docgenInfo={description:"",methods:[],displayName:"FlexRow",props:{noGrow:{required:!1,tsType:{name:"boolean"},description:""},center:{required:!1,tsType:{name:"boolean"},description:""},noWrap:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},break:{required:!1,tsType:{name:"union",raw:"'small' | 'vsmall'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'vsmall'"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}}}]);
//# sourceMappingURL=FlexRow-stories.f8c639f3.iframe.bundle.js.map