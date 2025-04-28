"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[2154],{"./src/ui/components/Search/Inline.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>SearchInline});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_common_helpers_array__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/common/helpers/array.ts"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/styles/index.ts"),_SearchBox__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/components/Search/SearchBox.tsx");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  width: 100%;
  height: calc(100% - 1rem);
  @media ${_styles__WEBPACK_IMPORTED_MODULE_3__.UN} {
    height: calc(100% - 0.5rem);
  }
`,Content=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  width: calc(100% - 2rem);
  margin: auto;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  flex-grow: 1;
  &[data-hasitems='true'] {
    padding-bottom: 0.5rem;
  }
  @media ${_styles__WEBPACK_IMPORTED_MODULE_3__.UN} {
    margin: 0;
    width: calc(100% - 0.5rem);
  }
`,RowCount=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  width: 100%;
  text-align: center;
  width: fit-content;
  text-decoration-color: currentcolor;
  text-decoration: underline;

  &[data-top='true'] {
    padding-bottom: 0.5rem;
  }
  &[data-top='false'] {
    padding-top: 0.5rem;
  }
`,SearchInline=p=>{const{maxDisplayItems=1e3}=p,rowCountOptDisplay=p.rowCountOpt?.display??"bottom",[searchText,setSearchText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(p.defaultValue??"");(0,react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle)(p.textBoxRef,(()=>({setValue:v=>{const value=textBoxRef.current?.getValue();v!==value&&(textBoxRef.current?.setValue(v),setSearchText(v))},focus:()=>textBoxRef.current?.focus(),getValue:()=>textBoxRef.current?.getValue()})));const textBoxRef=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),filteredItemsRaw=p.displayItems.filter((i=>p.willDisplayItem(searchText,i))),{part:filteredItems}=(0,_common_helpers_array__WEBPACK_IMPORTED_MODULE_5__.s)(filteredItemsRaw,maxDisplayItems<0?filteredItemsRaw.length:maxDisplayItems),outdiff=filteredItems.length!==p.displayItems.length,showText=p.texts?.totalItems?.(filteredItems.length,p.displayItems.length)??`Showing ${filteredItems.length} out of ${p.displayItems.length} total\n  items`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Base,{className:p.className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SearchBox__WEBPACK_IMPORTED_MODULE_4__.G,{...p,searchText,setSearchText:t=>{setSearchText(t),p.onSearchTextChange?.(t)},textBoxRef}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content,{"data-hasitems":!!filteredItems.length,"data-type":"content",children:["top"===rowCountOptDisplay&&outdiff&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RowCount,{"data-top":"true",children:showText}),filteredItems.map(((item,index)=>(0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(p.renderItem({searchText,item,index}),{onClick:e=>{return foundItem=item,target=e.target,void(foundItem?p.onSelectItem?.({foundItem,searchText,target}):p.onSelectItem?.(void 0));var foundItem,target}}))),"bottom"===rowCountOptDisplay&&outdiff&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RowCount,{"data-top":"false",children:showText})]})]})};SearchInline.__docgenInfo={description:"",methods:[{name:"setValue",docblock:null,modifiers:[],params:[{name:"v",optional:!1,type:null}],returns:null},{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"getValue",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SearchInline",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},placeholderText:{required:!1,tsType:{name:"string"},description:""},renderItem:{required:!0,tsType:{name:"signature",type:"function",raw:"({\n  searchText,\n  item,\n  index,\n}: {\n  searchText: string;\n  item: T;\n  index: number;\n}) => JSX.Element",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{\n  searchText: string;\n  item: T;\n  index: number;\n}",signature:{properties:[{key:"searchText",value:{name:"string",required:!0}},{key:"item",value:{name:"T",required:!0}},{key:"index",value:{name:"number",required:!0}}]}},name:""}],return:{name:"JSX.Element"}}},description:"method run to render each filtered item\nwill inject onClick handler"},displayItems:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"all potential items"},willDisplayItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(searchText: string, item: T) => boolean",signature:{arguments:[{type:{name:"string"},name:"searchText"},{type:{name:"T"},name:"item"}],return:{name:"boolean"}}},description:"run to filter items by search text"},maxDisplayItems:{required:!1,tsType:{name:"number"},description:"how many search items to return at most. default 1000. if -1 will return all"},getKeyF:{required:!0,tsType:{name:"signature",type:"function",raw:"(i: T) => string",signature:{arguments:[{type:{name:"T"},name:"i"}],return:{name:"string"}}},description:"get unique render key"},className:{required:!1,tsType:{name:"string"},description:""},texts:{required:!1,tsType:{name:"signature",type:"object",raw:'{\n  /**\n   * default if not provided: "showing X out of Y total items"\n   */\n  totalItems?: (showing: number, outof: number) => string;\n}',signature:{properties:[{key:"totalItems",value:{name:"signature",type:"function",raw:"(showing: number, outof: number) => string",signature:{arguments:[{type:{name:"number"},name:"showing"},{type:{name:"number"},name:"outof"}],return:{name:"string"}},required:!1},description:'default if not provided: "showing X out of Y total items"'}]}},description:""},onSearchTextChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},onSelectItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: TSearchModalRes<T> | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"TSearchModalRes<T> | undefined",elements:[{name:"signature",type:"object",raw:"{\n  foundItem: T;\n  searchText: string;\n  target: EventTarget;\n}",signature:{properties:[{key:"foundItem",value:{name:"T",required:!0}},{key:"searchText",value:{name:"string",required:!0}},{key:"target",value:{name:"EventTarget",required:!0}}]}},{name:"undefined"}]},name:"v"}],return:{name:"void"}}},description:""},textBoxRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<IRefTextEdit | null>",elements:[{name:"union",raw:"IRefTextEdit | null",elements:[{name:"IRefTextEdit"},{name:"null"}]}]},description:""},rowCountOpt:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  /** if provided will change position of row count when some lines are hidden. default bottom */\n  display?: 'bottom' | 'top' | 'off';\n}",signature:{properties:[{key:"display",value:{name:"union",raw:"'bottom' | 'top' | 'off'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"},{name:"literal",value:"'off'"}],required:!1},description:"if provided will change position of row count when some lines are hidden. default bottom"}]}},description:""}}}},"./src/ui/components/Search/SearchBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>SearchBox});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_helpers_debounce__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/helpers/debounce.ts"),_helpers_dom__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/ui/helpers/dom.ts"),_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/icons/index.tsx"),_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/ui/styles/index.ts"),_TextEdit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/ui/components/TextEdit/index.tsx");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  padding: 1rem;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: calc(100% - 2rem);
  margin: auto;
  position: relative;

  @media ${_styles__WEBPACK_IMPORTED_MODULE_5__.UN} {
    padding: 0.5rem;
    margin: 0;
    width: calc(100% - 1rem);
    max-height: calc(100% - 1rem);
  }
`,MagnifyIcon=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  margin-left: 0.5rem;
`,CrossIconStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_icons__WEBPACK_IMPORTED_MODULE_4__.CrossIcon)`
  position: absolute;
  right: 1rem;
  @media ${_styles__WEBPACK_IMPORTED_MODULE_5__.BQ} {
    right: 2rem;
  }
`,TextEditStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_TextEdit__WEBPACK_IMPORTED_MODULE_6__.mF)`
  padding: 0;
  height: 2.5rem;
  background-color: white;
`,SearchBox=p=>{const ur=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(p.textBoxRef),cr=(0,react__WEBPACK_IMPORTED_MODULE_2__.createRef)(),textBoxRef=p.textBoxRef?ur:cr;return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{textBoxRef?.current&&textBoxRef.current.getValue()!==p.searchText&&(textBoxRef.current.setValue(p.searchText),p.setSearchText(p.searchText,!0))}),[p,textBoxRef]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Base,{"data-type":"search",className:p.className,...(0,_helpers_dom__WEBPACK_IMPORTED_MODULE_7__.r8)(p),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextEditStyled,{ref:textBoxRef,defaultValue:p.searchText,placeholder:p.placeholderText,defaultEditing:{focus:!0,...p.defaultEditing},singleLine:!0,leftContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MagnifyIcon,{onClick:()=>p.setSearchText(textBoxRef?.current?.getValue()||"",!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_4__.Magnify,{})}),allowUndo:!1,onClickOutsideWithNoValue:null,onSubmit:(v,enterPressed)=>(0,_helpers_debounce__WEBPACK_IMPORTED_MODULE_3__.s)((()=>{p.setSearchText(v,enterPressed)}),{key:"pagesearch",time:200})}),p.searchText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CrossIconStyled,{onClick:()=>{textBoxRef?.current?.setValue(""),p.setSearchText("",!0)}})]})};SearchBox.__docgenInfo={description:"",methods:[],displayName:"SearchBox",props:{placeholderText:{required:!1,tsType:{name:"string"},description:""},searchText:{required:!0,tsType:{name:"string"},description:""},setSearchText:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string, enterPressed: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"val"},{type:{name:"boolean"},name:"enterPressed"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},textBoxRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<IRefTextEdit | null>",elements:[{name:"union",raw:"IRefTextEdit | null",elements:[{name:"IRefTextEdit"},{name:"null"}]}]},description:""},defaultEditing:{required:!1,tsType:{name:"signature",type:"object",raw:"{ focus?: boolean }",signature:{properties:[{key:"focus",value:{name:"boolean",required:!1}}]}},description:"if truthy will enable text edit mode by default. if focus is true, will also focus on open"}}}},"./src/ui/helpers/debounce.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>debounce});__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const hashMap={};function debounce(callback,{key,time}){clearTimeout(hashMap[key]),hashMap[key]=setTimeout((()=>{delete hashMap[key],callback()}),time)}},"./src/ui/styles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W6:()=>common.W6,BQ:()=>media.BQ,z9:()=>common.z9,M8:()=>colours.M8,Ot:()=>colours.Ot,UN:()=>media.UN});var colours=__webpack_require__("./src/ui/styles/colours.ts"),common=__webpack_require__("./src/ui/styles/common.tsx"),media=__webpack_require__("./src/ui/styles/media.ts"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");emotion_styled_browser_esm.A.div`
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
`},"./src/ui/styles/media.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BQ:()=>bigScreen,SO:()=>vSmallScreen,UN:()=>smallScreen,do:()=>bigScreenPx,kX:()=>smallScreenPx});const smallScreenPx=1024,bigScreenPx=2e3,vSmallScreen="(max-width: 500px)",smallScreen=`(max-width: ${smallScreenPx}px)`,bigScreen=`(min-width: ${smallScreenPx}px)`}}]);
//# sourceMappingURL=2154.9738e7aa.iframe.bundle.js.map