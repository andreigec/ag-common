/*! For license information please see Prompt-Modal-stories.8e5e6113.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[7341],{"./node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{iv:()=>css});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");var _emotion_serialize__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@emotion+serialize@1.1.3/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");__webpack_require__("./node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__.O)(args)}},"./stories/Prompt/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Modal:()=>Modal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _src_ui_components_Prompt_Modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/Prompt/Modal.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const base={title:"UI/Prompt",component:_src_ui_components_Prompt_Modal__WEBPACK_IMPORTED_MODULE_1__.w},TemplateModal=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_ui_components_Prompt_Modal__WEBPACK_IMPORTED_MODULE_1__.w,{...args});TemplateModal.displayName="TemplateModal";const Modal=TemplateModal.bind({});Modal.args={bottomText:"bottom",topText:"top",res:v=>alert("res="+v),style:{backgroundColor:"grey",color:"teal"}};const __WEBPACK_DEFAULT_EXPORT__=base;Modal.parameters={...Modal.parameters,docs:{...Modal.parameters?.docs,source:{originalSource:"args => <PromptModal {...args} />",...Modal.parameters?.docs?.source}}};const __namedExportsOrder=["Modal"]},"./src/ui/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var _emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_styles_colours__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/ui/styles/colours.ts")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ButtonBase=_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  font-weight: bold;
  font-family: inherit;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  height: 3rem;
  line-height: 1rem;
  &:hover {
    filter: saturate(1.5);
  }
  padding-left: 1rem;
  padding-right: 1rem;
  color: white;

  &[data-disabled='true'] {
    cursor: default !important;
    background-color: #888 !important;
  }

  &[data-theme='green'] {
    background-color: ${_styles_colours__WEBPACK_IMPORTED_MODULE_2__.sW.darkGreen};
    &[data-invert='true'] {
      color: ${_styles_colours__WEBPACK_IMPORTED_MODULE_2__.sW.darkGreen};
      background-color: white;
      border: solid 1px ${_styles_colours__WEBPACK_IMPORTED_MODULE_2__.sW.darkGreen};
    }
  }

  &[data-theme='red'] {
    background-color: ${_styles_colours__WEBPACK_IMPORTED_MODULE_2__.sW.orangeRed};
    &[data-invert='true'] {
      color: ${_styles_colours__WEBPACK_IMPORTED_MODULE_2__.sW.orangeRed};
      background-color: white;
      border: solid 1px ${_styles_colours__WEBPACK_IMPORTED_MODULE_2__.sW.orangeRed};
    }
  }
`,BaseButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.button`
  ${ButtonBase}
`,BaseA=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.a`
  ${ButtonBase}
`,Button=props=>{const Component=props.href?BaseA:BaseButton;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component,{className:props.className,"data-invert":props.invert,"data-disabled":props.disabled??!1,role:"button",title:props.title||void 0,"data-theme":props.colourTheme??"green",...props,children:props.children})};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},invert:{defaultValue:null,description:"",name:"invert",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLButtonElement>"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},colourTheme:{defaultValue:null,description:"",name:"colourTheme",required:!1,type:{name:"enum",value:[{value:'"green"'},{value:'"red"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/ui/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/components/Close/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Close});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_helpers_dom__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/ui/helpers/dom.ts")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
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
`,Close=p=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Base,{...(0,_helpers_dom__WEBPACK_IMPORTED_MODULE_3__._E)(p),className:p.className,onClick:e=>p.onClick?.(e)});Close.displayName="Close";try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Close/index.tsx#Close"]={docgenInfo:Close.__docgenInfo,name:"Close",path:"src/ui/components/Close/index.tsx#Close"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/components/FlexColumn/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>FlexColumn});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  position: relative;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  &[data-center='true'] {
    justify-content: center;
    align-items: center;
  }
  &[data-nogrow='true'] {
    flex-grow: 0;
    width: unset;
    height: unset;
  }
`,FlexColumn=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Base,{"data-nogrow":props.noGrow??!1,"data-center":props.center??!1,...props,children:props.children});FlexColumn.displayName="FlexColumn";try{FlexColumn.displayName="FlexColumn",FlexColumn.__docgenInfo={description:"",displayName:"FlexColumn",props:{noGrow:{defaultValue:null,description:"",name:"noGrow",required:!1,type:{name:"boolean"}},center:{defaultValue:null,description:"",name:"center",required:!1,type:{name:"boolean"}},noWrap:{defaultValue:null,description:"",name:"noWrap",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},break:{defaultValue:null,description:"",name:"break",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"vsmall"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/FlexColumn/index.tsx#FlexColumn"]={docgenInfo:FlexColumn.__docgenInfo,name:"FlexColumn",path:"src/ui/components/FlexColumn/index.tsx#FlexColumn"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/components/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Modal});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),_helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/helpers/useOnClickOutside.ts"),_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/styles/index.ts"),_Close__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/ui/components/Close/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const FixedBackground=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
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
`,ModalBase=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
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
  ${(0,_styles__WEBPACK_IMPORTED_MODULE_4__.rl)("data-bounced")}
`,ModalItem=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  display: flex;
  padding: 1rem;

  &:hover {
    background-color: #eee;
  }
`,CloseStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z)(_Close__WEBPACK_IMPORTED_MODULE_5__.x)`
  z-index: 1;
`,Modal=({open,setOpen,children,position="left",topPosition="top",showCloseButton=!0,closeOnMoveMouseOutside=!1,className,closeOnClickOutside=!0,portalId,style})=>{const[elem,setElem]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const originalStyle=window.getComputedStyle(document.body).overflow||"";return open&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=originalStyle}}),[open]);const[bounced,setBounced]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);if((0,_helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_3__.t)({disabled:!open,ref,moveMouseOutside:closeOnMoveMouseOutside},(()=>{closeOnClickOutside&&open&&(setOpen(!1),setBounced(!1))})),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{!bounced&&open&&setBounced(!0)}),[open,bounced]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{void 0===elem&&portalId&&setElem(document.getElementById(portalId))}),[elem,portalId]),!open)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{});const Content=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(FixedBackground,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ModalBase,{"data-bounced":bounced,"data-position":position,"data-topposition":topPosition,ref,className,style,children:[showCloseButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(CloseStyled,{"data-type":"modal-close",onClick:()=>setOpen(!1)}),children]})});return portalId&&void 0===elem?null:portalId&&elem?(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(Content,elem):Content};try{ModalItem.displayName="ModalItem",ModalItem.__docgenInfo={description:"",displayName:"ModalItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Modal/Modal.tsx#ModalItem"]={docgenInfo:ModalItem.__docgenInfo,name:"ModalItem",path:"src/ui/components/Modal/Modal.tsx#ModalItem"})}catch(__react_docgen_typescript_loader_error){}try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"(b: boolean) => void"}},position:{defaultValue:{value:"left"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},topPosition:{defaultValue:{value:"top"},description:"",name:"topPosition",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"bottom"'},{value:'"top"'}]}},showCloseButton:{defaultValue:{value:"true"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}},closeOnMoveMouseOutside:{defaultValue:{value:"false"},description:"",name:"closeOnMoveMouseOutside",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},closeOnClickOutside:{defaultValue:{value:"true"},description:"",name:"closeOnClickOutside",required:!1,type:{name:"boolean"}},portalId:{defaultValue:null,description:"if provided, will create inside this #id",name:"portalId",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"applied to modal inside fixed",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/ui/components/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/components/Prompt/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>PromptModal});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/components/Button/index.tsx"),_FlexColumn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/components/FlexColumn/index.tsx"),_FlexRow__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/components/FlexRow/index.tsx"),_Modal_Modal__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/ui/components/Modal/Modal.tsx"),_TextEdit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/ui/components/TextEdit/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  width: 95vw;
  max-width: 30rem;
  height: 50vh;
  max-height: 15rem;
`,Content=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z)(_FlexColumn__WEBPACK_IMPORTED_MODULE_3__.t)`
  padding: 1rem;
  height: calc(100% - 2rem);
  width: calc(100% - 2rem);
`,TopText=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  font-weight: bold;
  border-bottom: solid 1px #ccc;
  padding-bottom: 0.25rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,BottomText=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  padding-bottom: 0.25rem;
  font-size: 1.1rem;
`,Bottom=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z)(_FlexRow__WEBPACK_IMPORTED_MODULE_4__.g)`
  margin-top: auto;
  justify-content: flex-end;
  > button:first-of-type {
    margin-right: 1rem;
  }
`,PromptModal=({root,wrapper,res,bottomText,topText,okText="OK",cancelText="Cancel",defaultValue,placeholder,style})=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue||""),ret=v=>{try{res(v)}finally{root?.unmount(),wrapper?.remove()}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Modal_Modal__WEBPACK_IMPORTED_MODULE_5__.u,{position:"center",topPosition:"center",open:!0,setOpen:()=>ret(void 0),showCloseButton:!1,closeOnClickOutside:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Base,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Content,{style,children:[topText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TopText,{children:topText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(BottomText,{children:bottomText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_TextEdit__WEBPACK_IMPORTED_MODULE_6__.TextEdit,{defaultValue:text,onSubmit:(c,enter)=>{enter?ret(c):setText(c)},placeholder,defaultEditing:{focus:!0},singleLine:!0,noGrow:!0,allowUndo:!1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Bottom,{noGrow:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.z,{onClick:()=>ret(text),children:okText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.z,{invert:!0,onClick:()=>ret(void 0),children:cancelText})]})]})})})};PromptModal.displayName="PromptModal";try{PromptModal.displayName="PromptModal",PromptModal.__docgenInfo={description:"",displayName:"PromptModal",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},res:{defaultValue:null,description:"",name:"res",required:!0,type:{name:"(v: string | undefined) => void"}},root:{defaultValue:null,description:"",name:"root",required:!1,type:{name:"Root"}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!1,type:{name:"HTMLDivElement"}},topText:{defaultValue:null,description:"",name:"topText",required:!1,type:{name:"string"}},bottomText:{defaultValue:null,description:"",name:"bottomText",required:!0,type:{name:"string"}},okText:{defaultValue:{value:"OK"},description:"default 'OK'",name:"okText",required:!1,type:{name:"string"}},cancelText:{defaultValue:{value:"Cancel"},description:'default "cancel"',name:"cancelText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Prompt/Modal.tsx#PromptModal"]={docgenInfo:PromptModal.__docgenInfo,name:"PromptModal",path:"src/ui/components/Prompt/Modal.tsx#PromptModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/styles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{wV:()=>common.wV,F$:()=>media.F$,rl:()=>common.rl,sW:()=>colours.sW,PT:()=>colours.PT,xC:()=>media.xC});var colours=__webpack_require__("./src/ui/styles/colours.ts"),common=__webpack_require__("./src/ui/styles/common.tsx"),media=__webpack_require__("./src/ui/styles/media.ts"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");emotion_styled_browser_esm.Z.div`
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
`,emotion_styled_browser_esm.Z.div`
  height: 0.5rem;
  width: 0.5rem;
`,emotion_styled_browser_esm.Z.div`
  font-size: 1.4em;
  font-weight: bold;
`,emotion_styled_browser_esm.Z.div`
  margin-bottom: 1rem;
`,emotion_styled_browser_esm.Z.div`
  display: flex;
  flex-flow: column;
  margin-left: auto;
  margin-right: auto;
  @media ${media.xC} {
    width: calc(100% - 2rem);
  }
`,emotion_styled_browser_esm.Z.a`
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
`},"./src/ui/styles/media.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F$:()=>bigScreen,Zm:()=>bigScreenPx,aZ:()=>vSmallScreen,xC:()=>smallScreen,z4:()=>smallScreenPx});const smallScreenPx=1024,bigScreenPx=2e3,vSmallScreen="(max-width: 500px)",smallScreen=`(max-width: ${smallScreenPx}px)`,bigScreen=`(min-width: ${smallScreenPx}px)`},"./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var reactIs=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent}},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")}}]);
//# sourceMappingURL=Prompt-Modal-stories.8e5e6113.iframe.bundle.js.map