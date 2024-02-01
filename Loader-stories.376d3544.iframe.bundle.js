"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[7957],{"./stories/Loader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultWithArgs:()=>DefaultWithArgs,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _src_ui_components_Loader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/Loader/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const base={title:"UI/Loader",component:_src_ui_components_Loader__WEBPACK_IMPORTED_MODULE_1__.a},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{backgroundColor:"#ccc",position:"relative"},children:["test content",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_ui_components_Loader__WEBPACK_IMPORTED_MODULE_1__.a,{...args}),"test content"]});Template.displayName="Template";const Primary=Template.bind({});Primary.args={name:"test loader",position:"br"};const __WEBPACK_DEFAULT_EXPORT__=base,DefaultWithArgs=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Primary,{...Primary.args});DefaultWithArgs.displayName="DefaultWithArgs",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <div style={{\n  backgroundColor: '#ccc',\n  position: 'relative'\n}}>\n    test content\n    <Loader {...args} />\n    test content\n  </div>",...Primary.parameters?.docs?.source}}},DefaultWithArgs.parameters={...DefaultWithArgs.parameters,docs:{...DefaultWithArgs.parameters?.docs,source:{originalSource:"() => <Primary {...(Primary.args as ILoader)} />",...DefaultWithArgs.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","DefaultWithArgs"]},"./src/ui/components/Loader/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Loader});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.51_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
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
`,LoadingBack=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
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
`,Loader=({name,height="2rem",width="2rem",position="abs"})=>{const[trans,setTrans]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{setTrans(!1)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LoadingBack,{"data-loading":name,"data-transparent":trans,"data-type":position,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Base,{style:{height,width}})})};Loader.displayName="Loader";try{Loader.displayName="Loader",Loader.__docgenInfo={description:"",displayName:"Loader",props:{width:{defaultValue:{value:"2rem"},description:"default 2rem",name:"width",required:!1,type:{name:"string | null"}},height:{defaultValue:{value:"2rem"},description:"default 2rem",name:"height",required:!1,type:{name:"string | null"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},position:{defaultValue:{value:"abs"},description:"position for loader. default full page takeover",name:"position",required:!1,type:{name:"enum",value:[{value:'"abs"'},{value:'"br"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Loader/index.tsx#Loader"]={docgenInfo:Loader.__docgenInfo,name:"Loader",path:"src/ui/components/Loader/index.tsx#Loader"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Loader-stories.376d3544.iframe.bundle.js.map