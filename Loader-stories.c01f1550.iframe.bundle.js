"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[7182],{"./stories/Loader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultWithArgs:()=>DefaultWithArgs,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_src_ui_components_Loader__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/components/Loader/index.tsx"));const base={title:"UI/Loader",component:_src_ui_components_Loader__WEBPACK_IMPORTED_MODULE_2__.a},Primary=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{backgroundColor:"#ccc",position:"relative"},children:["test content",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_ui_components_Loader__WEBPACK_IMPORTED_MODULE_2__.a,{...args}),"test content"]})).bind({});Primary.args={name:"test loader",position:"br"};const __WEBPACK_DEFAULT_EXPORT__=base,DefaultWithArgs=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Primary,{...Primary.args}),__namedExportsOrder=["Primary","DefaultWithArgs"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <div style={{\n  backgroundColor: '#ccc',\n  position: 'relative'\n}}>\n    test content\n    <Loader {...args} />\n    test content\n  </div>",...Primary.parameters?.docs?.source}}},DefaultWithArgs.parameters={...DefaultWithArgs.parameters,docs:{...DefaultWithArgs.parameters?.docs,source:{originalSource:"() => <Primary {...Primary.args as ILoader} />",...DefaultWithArgs.parameters?.docs?.source}}}},"./src/ui/components/Loader/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Loader});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  animation: spin 2s linear infinite;
  padding: 2px;
  overflow: hidden;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,LoadingBack=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: absolute;
  &[data-type='abs'] {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &[data-type='br'] {
    bottom: 1rem;
    right: 1rem;
    top: auto;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: transparent;
  opacity: 1;
  &[data-transparent='true'] {
    opacity: 0.1;
  }
  transition: opacity 5s;
`,Loader=({name,height="2rem",width="2rem",position="abs"})=>{const[trans,setTrans]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!0);return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{setTrans(!1)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LoadingBack,{"data-loading":name,"data-transparent":trans,"data-type":position,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{style:{height,width}})})};Loader.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{width:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"default 2rem",defaultValue:{value:"'2rem'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"default 2rem",defaultValue:{value:"'2rem'",computed:!1}},name:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:"'abs' | 'br'",elements:[{name:"literal",value:"'abs'"},{name:"literal",value:"'br'"}]},description:"position for loader. default full page takeover",defaultValue:{value:"'abs'",computed:!1}}}}}}]);
//# sourceMappingURL=Loader-stories.c01f1550.iframe.bundle.js.map