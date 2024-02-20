"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[473],{"./stories/TextWithButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultWithArgs:()=>DefaultWithArgs,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _src_ui_components_TextWithButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/TextWithButton/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const base={title:"UI/TextWithButton",component:_src_ui_components_TextWithButton__WEBPACK_IMPORTED_MODULE_1__.k},Primary=(args=>(0,_src_ui_components_TextWithButton__WEBPACK_IMPORTED_MODULE_1__.k)(args)).bind({});Primary.args={onSubmit:c=>alert("sub="+c),placeholder:"placeholder. will accept length > 3",submitText:"submit text",validateF:v=>v.length>3};const __WEBPACK_DEFAULT_EXPORT__=base,DefaultWithArgs=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Primary,{...Primary.args});DefaultWithArgs.displayName="DefaultWithArgs",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => TextWithButton(args)",...Primary.parameters?.docs?.source}}},DefaultWithArgs.parameters={...DefaultWithArgs.parameters,docs:{...DefaultWithArgs.parameters?.docs,source:{originalSource:"() => <Primary {...(Primary.args as ITextWithButton)} />",...DefaultWithArgs.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","DefaultWithArgs"]},"./src/ui/components/TextWithButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>TextWithButton});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.57_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  display: flex;
  flex-flow: row;
  max-height: 100%;
`,Input=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.input`
  flex-grow: 1;
  border: solid 3px #ccc;
  border-right: 0;
  padding-left: 0.5rem;
  border-radius: 0.5rem 0 0 0.5rem;
  overflow: hidden;
  font-size: 1.2rem;
  &[data-valid='false'] {
    border-color: indianred;
  }
  outline: 0;
`,Button=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.button`
  padding: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(136 119 227);
  color: white;
  font-weight: bold;
  border-radius: 0 0.5rem 0.5rem 0;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  &[data-valid='false'] {
    cursor: not-allowed;
    border-color: indianred;
    background-color: #ccc;
  }
`,TextWithButton=({submitText="Submit",placeholder,validateF,onSubmit})=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),valid=!validateF||validateF(value);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Base,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Input,{"data-type":"input","data-valid":valid,placeholder,value,onChange:s=>setValue(s.target.value),onKeyDown:e=>"Enter"===e.key&&valid&&onSubmit(value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button,{"data-type":"button","data-valid":valid,disabled:!valid,onClick:()=>valid&&onSubmit(value),children:submitText})]})};TextWithButton.displayName="TextWithButton";try{TextWithButton.displayName="TextWithButton",TextWithButton.__docgenInfo={description:"",displayName:"TextWithButton",props:{submitText:{defaultValue:{value:"Submit"},description:'default "Submit"',name:"submitText",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},validateF:{defaultValue:null,description:"if provided will validate and block submission accordingly",name:"validateF",required:!1,type:{name:"((s: string) => boolean)"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(s: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/TextWithButton/index.tsx#TextWithButton"]={docgenInfo:TextWithButton.__docgenInfo,name:"TextWithButton",path:"src/ui/components/TextWithButton/index.tsx#TextWithButton"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=TextWithButton-stories.a7392f6b.iframe.bundle.js.map