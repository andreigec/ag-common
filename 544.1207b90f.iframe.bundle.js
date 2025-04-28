"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[544],{"./src/ui/components/Close/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Close});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_helpers_dom__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/helpers/dom.ts"));const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
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
`,Close=p=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{...(0,_helpers_dom__WEBPACK_IMPORTED_MODULE_3__.r8)(p),className:p.className,onClick:e=>p.onClick?.(e)});Close.__docgenInfo={description:"",methods:[],displayName:"Close",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement, MouseEvent>",elements:[{name:"HTMLDivElement"},{name:"MouseEvent"}]},name:"ev"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/ui/components/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Modal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom/index.js"),_helpers_dom__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/ui/helpers/dom.ts"),_helpers_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/helpers/useLockBodyScroll.ts"),_helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/ui/helpers/useOnClickOutside.ts"),_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/ui/styles/index.ts"),_Close__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/ui/components/Close/index.tsx");const FixedBackground=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
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
`),Modal=p=>{const{open,setOpen,children,position="left",topPosition="top",showCloseButton=!0,closeOnMoveMouseOutside=!1,className,closeOnClickOutside=!0,portalId:pidraw,style}=p;let portalId=pidraw;void 0===portalId&&(portalId="ag-modal-portal"),(0,_helpers_useLockBodyScroll__WEBPACK_IMPORTED_MODULE_4__._)(p.open);const[portalElem,setPortalElem]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{if(null===portalId||document.querySelectorAll(`#${portalId}`).length>0)return;const d=document.createElement("div");return d.id=portalId,d.style.position="fixed",d.style.zIndex="10",document.body.appendChild(d),()=>{try{document.querySelector(`#${portalId}`)?.remove()}catch(e){}}}),[]);const[bounced,setBounced]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),ref=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);if((0,_helpers_useOnClickOutside__WEBPACK_IMPORTED_MODULE_5__.W)({disabled:!open,ref,moveMouseOutside:closeOnMoveMouseOutside},(e=>{if(portalElem){if(Array.prototype.indexOf.call(portalElem.children,ref.current?.parentElement)+1!==portalElem.children.length)return}closeOnClickOutside&&open&&(setOpen(!1,e),setBounced(!1))})),(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{!bounced&&open&&setBounced(!0)}),[open,bounced]),(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{void 0===portalElem&&portalId&&setPortalElem(document.getElementById(portalId))}),[portalElem,portalId]),!open)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{});const Content=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FixedBackground,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ModalBase,{...(0,_helpers_dom__WEBPACK_IMPORTED_MODULE_8__.r8)(p),"data-bounced":bounced,"data-position":position,"data-topposition":topPosition,ref,className,style,children:[showCloseButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CloseStyled,{"data-type":"modal-close",onClick:e=>setOpen(!1,e)}),children]})});return portalId&&void 0===portalElem?null:portalId&&portalElem?(0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)(Content,portalElem):Content};Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},setOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(b: boolean, e: Event) => void",signature:{arguments:[{type:{name:"boolean"},name:"b"},{type:{name:"Event"},name:"e"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"}]},description:""},topPosition:{required:!1,tsType:{name:"union",raw:"'bottom' | 'top' | 'center'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"},{name:"literal",value:"'center'"}]},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:""},closeOnMoveMouseOutside:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},closeOnClickOutside:{required:!1,tsType:{name:"boolean"},description:""},portalId:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:'if provided, will create inside this #id. default "ag-modal-portal". if null, wont use global id'},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/ui/components/Search/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>SearchModal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_styles__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/styles/index.ts")),_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/components/Modal/Modal.tsx"),_Inline__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/ui/components/Search/Inline.tsx");const ModalStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__.a)`
  display: flex;
  flex-flow: column;
  top: 10rem;
  @media ${_styles__WEBPACK_IMPORTED_MODULE_3__.BQ} {
    width: 50vw;
    max-width: 60rem;
  }
  @media ${_styles__WEBPACK_IMPORTED_MODULE_3__.UN} {
    width: 100%;
    max-width: 95vw;
  }
`,SearchModal=p=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ModalStyled,{position:"center",topPosition:"center",open:!0,setOpen:()=>p.onSelectItem?.(void 0),showCloseButton:!1,closeOnClickOutside:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Inline__WEBPACK_IMPORTED_MODULE_5__.q,{...p})});SearchModal.__docgenInfo={description:"",methods:[],displayName:"SearchModal",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},placeholderText:{required:!1,tsType:{name:"string"},description:""},renderItem:{required:!0,tsType:{name:"signature",type:"function",raw:"({\n  searchText,\n  item,\n  index,\n}: {\n  searchText: string;\n  item: T;\n  index: number;\n}) => JSX.Element",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{\n  searchText: string;\n  item: T;\n  index: number;\n}",signature:{properties:[{key:"searchText",value:{name:"string",required:!0}},{key:"item",value:{name:"T",required:!0}},{key:"index",value:{name:"number",required:!0}}]}},name:""}],return:{name:"JSX.Element"}}},description:"method run to render each filtered item\nwill inject onClick handler"},displayItems:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"all potential items"},willDisplayItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(searchText: string, item: T) => boolean",signature:{arguments:[{type:{name:"string"},name:"searchText"},{type:{name:"T"},name:"item"}],return:{name:"boolean"}}},description:"run to filter items by search text"},maxDisplayItems:{required:!1,tsType:{name:"number"},description:"how many search items to return at most. default 1000. if -1 will return all"},getKeyF:{required:!0,tsType:{name:"signature",type:"function",raw:"(i: T) => string",signature:{arguments:[{type:{name:"T"},name:"i"}],return:{name:"string"}}},description:"get unique render key"},className:{required:!1,tsType:{name:"string"},description:""},texts:{required:!1,tsType:{name:"signature",type:"object",raw:'{\n  /**\n   * default if not provided: "showing X out of Y total items"\n   */\n  totalItems?: (showing: number, outof: number) => string;\n}',signature:{properties:[{key:"totalItems",value:{name:"signature",type:"function",raw:"(showing: number, outof: number) => string",signature:{arguments:[{type:{name:"number"},name:"showing"},{type:{name:"number"},name:"outof"}],return:{name:"string"}},required:!1},description:'default if not provided: "showing X out of Y total items"'}]}},description:""},onSearchTextChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},onSelectItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: TSearchModalRes<T> | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"TSearchModalRes<T> | undefined",elements:[{name:"signature",type:"object",raw:"{\n  foundItem: T;\n  searchText: string;\n  target: EventTarget;\n}",signature:{properties:[{key:"foundItem",value:{name:"T",required:!0}},{key:"searchText",value:{name:"string",required:!0}},{key:"target",value:{name:"EventTarget",required:!0}}]}},{name:"undefined"}]},name:"v"}],return:{name:"void"}}},description:""},textBoxRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<IRefTextEdit | null>",elements:[{name:"union",raw:"IRefTextEdit | null",elements:[{name:"IRefTextEdit"},{name:"null"}]}]},description:""},rowCountOpt:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  /** if provided will change position of row count when some lines are hidden. default bottom */\n  display?: 'bottom' | 'top' | 'off';\n}",signature:{properties:[{key:"display",value:{name:"union",raw:"'bottom' | 'top' | 'off'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"},{name:"literal",value:"'off'"}],required:!1},description:"if provided will change position of row count when some lines are hidden. default bottom"}]}},description:""}}}},"./src/ui/helpers/useLockBodyScroll.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>useLockBodyScroll});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");function useLockBodyScroll(enabled){(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{let originalStyle;return enabled&&(originalStyle=window.getComputedStyle(document.body).overflow,document.body.style.overflow="hidden"),()=>{enabled&&(document.body.style.overflow=originalStyle||"")}}),[enabled])}}}]);
//# sourceMappingURL=544.1207b90f.iframe.bundle.js.map