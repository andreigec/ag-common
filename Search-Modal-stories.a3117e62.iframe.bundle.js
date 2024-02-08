"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[280],{"./stories/Search/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Modal:()=>Modal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _src_ui_components_Search_Modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/Search/Modal.tsx"),_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/Search/common.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const base={title:"UI/Search",component:_src_ui_components_Search_Modal__WEBPACK_IMPORTED_MODULE_1__.s},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_ui_components_Search_Modal__WEBPACK_IMPORTED_MODULE_1__.s,{...args});Template.displayName="Template";const Modal=Template.bind({});Modal.args={displayItems:_common__WEBPACK_IMPORTED_MODULE_2__.B,renderItem:st=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:st.item.toString()},st.item),willDisplayItem:(st,i)=>!st||i.includes(st),getKeyF:i=>i,onSelectItem:a=>alert("click="+a?.foundItem)};const __WEBPACK_DEFAULT_EXPORT__=base;Modal.parameters={...Modal.parameters,docs:{...Modal.parameters?.docs,source:{originalSource:"args => <SearchModal {...args} />",...Modal.parameters?.docs?.source}}};const __namedExportsOrder=["Modal"]},"./src/ui/components/Close/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Close});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.55_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_helpers_dom__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/ui/helpers/dom.ts")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
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
`,Close=p=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Base,{...(0,_helpers_dom__WEBPACK_IMPORTED_MODULE_3__._E)(p),className:p.className,onClick:e=>p.onClick?.(e)});Close.displayName="Close";try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Close/index.tsx#Close"]={docgenInfo:Close.__docgenInfo,name:"Close",path:"src/ui/components/Close/index.tsx#Close"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/components/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Modal});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.55_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/helpers/useOnClickOutside.ts"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/styles/index.ts"),_Close__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/components/Close/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const FixedBackground=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
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
  ${(0,_styles__WEBPACK_IMPORTED_MODULE_3__.rl)("data-bounced")}
`,ModalItem=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  display: flex;
  padding: 1rem;

  &:hover {
    background-color: #eee;
  }
`,CloseStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z)(_Close__WEBPACK_IMPORTED_MODULE_4__.x)`
  z-index: 1;
`,Modal=({open,setOpen,children,position="left",topPosition="top",showCloseButton=!0,closeOnMoveMouseOutside=!1,className,closeOnClickOutside=!0})=>{const[bounced,setBounced]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);return(0,_helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__.t)({disabled:!open,ref,moveMouseOutside:closeOnMoveMouseOutside},(()=>{closeOnClickOutside&&open&&(setOpen(!1),setBounced(!1))})),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{!bounced&&open&&setBounced(!0)}),[open,bounced]),open?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(FixedBackground,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ModalBase,{"data-bounced":bounced,"data-position":position,"data-topposition":topPosition,ref,className,children:[showCloseButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CloseStyled,{"data-type":"modal-close",onClick:()=>setOpen(!1)}),children]})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{})};Modal.displayName="Modal";try{ModalItem.displayName="ModalItem",ModalItem.__docgenInfo={description:"",displayName:"ModalItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Modal/Modal.tsx#ModalItem"]={docgenInfo:ModalItem.__docgenInfo,name:"ModalItem",path:"src/ui/components/Modal/Modal.tsx#ModalItem"})}catch(__react_docgen_typescript_loader_error){}try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"(b: boolean) => void"}},position:{defaultValue:{value:"left"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},topPosition:{defaultValue:{value:"top"},description:"",name:"topPosition",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"bottom"'},{value:'"top"'}]}},showCloseButton:{defaultValue:{value:"true"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}},closeOnMoveMouseOutside:{defaultValue:{value:"false"},description:"",name:"closeOnMoveMouseOutside",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},closeOnClickOutside:{defaultValue:{value:"true"},description:"",name:"closeOnClickOutside",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/ui/components/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/components/Search/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>SearchModal});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.55_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_styles__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/ui/styles/index.ts")),_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/components/Modal/Modal.tsx"),_Inline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/components/Search/Inline.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ModalStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z)(_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__.u)`
  display: flex;
  flex-flow: column;
  top: 10rem;
  @media ${_styles__WEBPACK_IMPORTED_MODULE_2__.F$} {
    width: 50vw;
    max-width: 60rem;
  }
  @media ${_styles__WEBPACK_IMPORTED_MODULE_2__.xC} {
    width: 100%;
    max-width: 95vw;
  }
`,SearchModal=p=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ModalStyled,{position:"center",topPosition:"center",open:!0,setOpen:()=>p?.onSelectItem?.(void 0),showCloseButton:!1,closeOnClickOutside:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Inline__WEBPACK_IMPORTED_MODULE_4__.f,{...p})});SearchModal.displayName="SearchModal";try{SearchModal.displayName="SearchModal",SearchModal.__docgenInfo={description:"",displayName:"SearchModal",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},placeholderText:{defaultValue:null,description:"",name:"placeholderText",required:!1,type:{name:"string"}},renderItem:{defaultValue:null,description:"method run to render each filtered item\nwill inject onClick handler",name:"renderItem",required:!0,type:{name:"({ searchText, item, index, }: { searchText: string; item: T; index: number; }) => Element"}},displayItems:{defaultValue:null,description:"all potential items",name:"displayItems",required:!0,type:{name:"T[]"}},willDisplayItem:{defaultValue:null,description:"run to filter items by search text",name:"willDisplayItem",required:!0,type:{name:"(searchText: string, item: T) => boolean"}},maxDisplayItems:{defaultValue:null,description:"how many search items to return at most. default 1000. if -1 will return all",name:"maxDisplayItems",required:!1,type:{name:"number"}},getKeyF:{defaultValue:null,description:"get unique render key",name:"getKeyF",required:!0,type:{name:"(i: T) => string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},texts:{defaultValue:null,description:"",name:"texts",required:!1,type:{name:"{ totalItems?: ((showing: number, outof: number) => string); }"}},onSearchTextChange:{defaultValue:null,description:"",name:"onSearchTextChange",required:!1,type:{name:"((v: string) => void)"}},onSelectItem:{defaultValue:null,description:"",name:"onSelectItem",required:!1,type:{name:"((v: TSearchModalRes<T>) => void)"}},textBoxRef:{defaultValue:null,description:"",name:"textBoxRef",required:!1,type:{name:"RefObject<IRefTextEdit>"}},rowCountOpt:{defaultValue:null,description:"",name:"rowCountOpt",required:!1,type:{name:'{ display?: "bottom" | "top" | "off"; }'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Search/Modal.tsx#SearchModal"]={docgenInfo:SearchModal.__docgenInfo,name:"SearchModal",path:"src/ui/components/Search/Modal.tsx#SearchModal"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Search-Modal-stories.a3117e62.iframe.bundle.js.map