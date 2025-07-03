"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[8109],{"./src/ui/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_styles_colours__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/styles/colours.ts"));const ButtonBase=_emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH`
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
    background-color: ${_styles_colours__WEBPACK_IMPORTED_MODULE_3__.M8.darkGreen};
    &[data-invert='true'] {
      color: ${_styles_colours__WEBPACK_IMPORTED_MODULE_3__.M8.darkGreen};
      background-color: white;
      border: solid 1px ${_styles_colours__WEBPACK_IMPORTED_MODULE_3__.M8.darkGreen};
    }
  }

  &[data-theme='red'] {
    background-color: ${_styles_colours__WEBPACK_IMPORTED_MODULE_3__.M8.orangeRed};
    &[data-invert='true'] {
      color: ${_styles_colours__WEBPACK_IMPORTED_MODULE_3__.M8.orangeRed};
      background-color: white;
      border: solid 1px ${_styles_colours__WEBPACK_IMPORTED_MODULE_3__.M8.orangeRed};
    }
  }
`,BaseButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.button`
  ${ButtonBase}
`,BaseA=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.a`
  ${ButtonBase}
`,Button=props=>{const Component=props.href?BaseA:BaseButton;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{className:props.className,"data-invert":props.invert,"data-disabled":props.disabled??!1,role:"button",title:props.title||void 0,"data-theme":props.colourTheme??"green",...props,children:props.children})};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{title:{required:!1,tsType:{name:"string"},description:""},invert:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""},onKeyDown:{required:!1,tsType:{name:"KeyboardEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEventHandler<HTMLButtonElement>"},description:""},children:{required:!0,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},href:{required:!1,tsType:{name:"string"},description:""},colourTheme:{required:!1,tsType:{name:"union",raw:"'green' | 'red'",elements:[{name:"literal",value:"'green'"},{name:"literal",value:"'red'"}]},description:""}}}},"./src/ui/components/Close/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Close});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_helpers_dom__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/helpers/dom.ts"));const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
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
`,Close=p=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{...(0,_helpers_dom__WEBPACK_IMPORTED_MODULE_3__.r8)(p),className:p.className,onClick:e=>p.onClick?.(e)});Close.__docgenInfo={description:"",methods:[],displayName:"Close",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement, MouseEvent>",elements:[{name:"HTMLDivElement"},{name:"MouseEvent"}]},name:"ev"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/ui/components/FlexColumn/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>FlexColumn});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
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
`,FlexColumn=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{"data-nogrow":props.noGrow??!1,"data-center":props.center??!1,...props,children:props.children});FlexColumn.__docgenInfo={description:"",methods:[],displayName:"FlexColumn",props:{noGrow:{required:!1,tsType:{name:"boolean"},description:""},center:{required:!1,tsType:{name:"boolean"},description:""},noWrap:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},break:{required:!1,tsType:{name:"union",raw:"'small' | 'vsmall'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'vsmall'"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/ui/components/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Modal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom/index.js"),_helpers_dom__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/ui/helpers/dom.ts"),_helpers_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/helpers/useLockBodyScroll.ts"),_helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/ui/helpers/useOnClickOutside.ts"),_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/ui/styles/index.ts"),_Close__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/ui/components/Close/index.tsx");const FixedBackground=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
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
`,ModalBase=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
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
  ${(0,_styles__WEBPACK_IMPORTED_MODULE_6__.z9)("data-bounced")}
`,CloseStyled=(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  padding: 1rem;

  &:hover {
    background-color: #eee;
  }
`,(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_Close__WEBPACK_IMPORTED_MODULE_7__.b)`
  z-index: 1;
`),Modal=p=>{const{open,setOpen,children,position="left",topPosition="top",showCloseButton=!0,closeOnMoveMouseOutside=!1,className,closeOnClickOutside=!0,portalId:pidraw,style}=p;let portalId=pidraw;void 0===portalId&&(portalId="ag-modal-portal"),(0,_helpers_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_4__._)(p.open);const[portalElem,setPortalElem]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{if(null===portalId||document.querySelectorAll(`#${portalId}`).length>0)return;const d=document.createElement("div");return d.id=portalId,d.style.position="fixed",d.style.zIndex="10",document.body.appendChild(d),()=>{try{document.querySelector(`#${portalId}`)?.remove()}catch(e){}}},[]);const[bounced,setBounced]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),ref=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);if((0,_helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__.W)({disabled:!open,ref,moveMouseOutside:closeOnMoveMouseOutside},e=>{if(portalElem){if(Array.prototype.indexOf.call(portalElem.children,ref.current?.parentElement)+1!==portalElem.children.length)return}closeOnClickOutside&&open&&(setOpen(!1,e),setBounced(!1))}),(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{!bounced&&open&&setBounced(!0)},[open,bounced]),(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{void 0===portalElem&&portalId&&setPortalElem(document.getElementById(portalId))},[portalElem,portalId]),!open)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{});const Content=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FixedBackground,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ModalBase,{...(0,_helpers_dom__WEBPACK_IMPORTED_MODULE_8__.r8)(p),"data-bounced":bounced,"data-position":position,"data-topposition":topPosition,ref,className,style,children:[showCloseButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CloseStyled,{"data-type":"modal-close",onClick:e=>setOpen(!1,e)}),children]})});return portalId&&void 0===portalElem?null:portalId&&portalElem?(0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)(Content,portalElem):Content};Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},setOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(b: boolean, e: Event) => void",signature:{arguments:[{type:{name:"boolean"},name:"b"},{type:{name:"Event"},name:"e"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"}]},description:""},topPosition:{required:!1,tsType:{name:"union",raw:"'bottom' | 'top' | 'center'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"},{name:"literal",value:"'center'"}]},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:""},closeOnMoveMouseOutside:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closeOnClickOutside:{required:!1,tsType:{name:"boolean"},description:""},portalId:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:'if provided, will create inside this #id. default "ag-modal-portal". if null, wont use global id'},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/ui/components/Prompt/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>PromptModal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/components/Button/index.tsx"),_FlexColumn__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/components/FlexColumn/index.tsx"),_FlexRow__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/ui/components/FlexRow/index.tsx"),_Modal_Modal__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/ui/components/Modal/Modal.tsx"),_TextEdit__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/ui/components/TextEdit/index.tsx");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  width: 95vw;
  max-width: 30rem;
  height: 50vh;
  max-height: 15rem;
`,Content=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_FlexColumn__WEBPACK_IMPORTED_MODULE_4__.I)`
  padding: 1rem;
  height: calc(100% - 2rem);
  width: calc(100% - 2rem);
`,TopText=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  font-weight: bold;
  border-bottom: solid 1px #ccc;
  padding-bottom: 0.25rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,BottomText=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  padding-bottom: 0.25rem;
  font-size: 1.1rem;
`,Bottom=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_FlexRow__WEBPACK_IMPORTED_MODULE_5__.Y)`
  margin-top: auto;
  justify-content: flex-end;
  > button:first-of-type {
    margin-right: 1rem;
  }
`,PromptModal=({root,wrapper,res,bottomText,topText,okText="OK",cancelText="Cancel",defaultValue,placeholder,style})=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultValue||""),ret=v=>{try{res(v)}finally{try{root?.unmount(),wrapper?.remove()}catch(e){}}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Modal_Modal__WEBPACK_IMPORTED_MODULE_6__.a,{position:"center",topPosition:"center",open:!0,setOpen:()=>ret(void 0),showCloseButton:!1,closeOnClickOutside:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content,{style,children:[topText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TopText,{children:topText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BottomText,{children:bottomText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextEdit__WEBPACK_IMPORTED_MODULE_7__.mF,{defaultValue:text,onSubmit:(c,enter)=>{enter?ret(c):setText(c)},placeholder,defaultEditing:{focus:!0},singleLine:!0,noGrow:!0,allowUndo:!1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Bottom,{noGrow:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{onClick:()=>ret(text),children:okText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{invert:!0,onClick:()=>ret(void 0),children:cancelText})]})]})})})};PromptModal.__docgenInfo={description:"",methods:[],displayName:"PromptModal",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},res:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"v"}],return:{name:"void"}}},description:""},root:{required:!1,tsType:{name:"Root"},description:""},wrapper:{required:!1,tsType:{name:"HTMLDivElement"},description:""},topText:{required:!1,tsType:{name:"string"},description:""},bottomText:{required:!0,tsType:{name:"string"},description:""},okText:{required:!1,tsType:{name:"string"},description:"default 'OK'",defaultValue:{value:"'OK'",computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:'default "cancel"',defaultValue:{value:"'Cancel'",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/ui/helpers/useLockBodyScroll.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>useLockBodyScroll});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");function useLockBodyScroll(enabled){(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{let originalStyle;return enabled&&(originalStyle=window.getComputedStyle(document.body).overflow,document.body.style.overflow="hidden"),()=>{enabled&&(document.body.style.overflow=originalStyle||"")}},[enabled])}},"./src/ui/styles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W6:()=>common.W6,BQ:()=>media.BQ,z9:()=>common.z9,M8:()=>colours.M8,Ot:()=>colours.Ot,UN:()=>media.UN});var colours=__webpack_require__("./src/ui/styles/colours.ts"),common=__webpack_require__("./src/ui/styles/common.tsx"),media=__webpack_require__("./src/ui/styles/media.ts"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");emotion_styled_browser_esm.A.div`
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
`,emotion_styled_browser_esm.A.div`
  height: 0.5rem;
  width: 0.5rem;
`,emotion_styled_browser_esm.A.div`
  font-size: 1.4em;
  font-weight: bold;
`,emotion_styled_browser_esm.A.div`
  margin-bottom: 1rem;
`,emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: column;
  margin-left: auto;
  margin-right: auto;
  @media ${media.UN} {
    width: calc(100% - 2rem);
  }
`,emotion_styled_browser_esm.A.a`
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
`},"./src/ui/styles/media.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BQ:()=>bigScreen,SO:()=>vSmallScreen,UN:()=>smallScreen,do:()=>bigScreenPx,kX:()=>smallScreenPx});const smallScreenPx=1024,bigScreenPx=2e3,vSmallScreen="(max-width: 500px)",smallScreen=`(max-width: ${smallScreenPx}px)`,bigScreen=`(min-width: ${smallScreenPx}px)`},"./stories/Prompt/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Modal:()=>Modal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_src_ui_components_Prompt_Modal__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/components/Prompt/Modal.tsx"));const base={title:"UI/Prompt",component:_src_ui_components_Prompt_Modal__WEBPACK_IMPORTED_MODULE_2__.S},Modal=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_ui_components_Prompt_Modal__WEBPACK_IMPORTED_MODULE_2__.S,{...args})).bind({});Modal.args={bottomText:"bottom",topText:"top",res:v=>alert("res="+v),style:{backgroundColor:"grey",color:"teal"}};const __WEBPACK_DEFAULT_EXPORT__=base,__namedExportsOrder=["Modal"];Modal.parameters={...Modal.parameters,docs:{...Modal.parameters?.docs,source:{originalSource:"args => <PromptModal {...args} />",...Modal.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=Prompt-Modal-stories.bc34619a.iframe.bundle.js.map