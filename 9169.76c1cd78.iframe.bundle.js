"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[9169],{"./src/common/helpers/object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>copy,oh:()=>removeUndefValuesFromObject});const removeUndefValuesFromObject=orig=>{const ret={};return Object.entries(orig).forEach((([k,v])=>{null!=v&&(ret[k]=v)})),ret},copy=v=>JSON.parse(JSON.stringify(v))},"./src/ui/components/DropdownList/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>DropdownList,s:()=>DropdownListDialog});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),dom=__webpack_require__("./src/ui/helpers/dom.ts"),useOnClickOutside=__webpack_require__("./src/ui/helpers/useOnClickOutside.ts"),colours=__webpack_require__("./src/ui/styles/colours.ts"),common=__webpack_require__("./src/ui/styles/common.tsx"),KebabDots=__webpack_require__("./src/ui/components/KebabDots/index.tsx");const Base=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: row;
  position: relative;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  flex-grow: 0;
  max-height: 100%;
`,DropItems=emotion_styled_browser_esm.A.div`
  flex-flow: column;
  z-index: 1;
  display: none;
  background-color: white;
  cursor: default;
  width: 100%;
  position: absolute;

  overflow-y: auto;
  &[data-open='true'] {
    display: flex;
  }
  ${(0,common.z9)("data-bounced")}
`,ListItemStyle=emotion_styled_browser_esm.A.div`
  font-weight: 500;
  padding-left: 0.5rem;
  flex-grow: 1;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &[data-default='false'] {
    &[data-selected='true'] {
      opacity: 1 !important;
      background-color: ${colours.M8.orangeRed} !important;
      cursor: default;
    }
    &[data-selected='false'] {
      &:hover {
        opacity: 0.9 !important;
        background-color: ${colours.M8.orange} !important;
      }
    }
  }

  &:nth-of-type(even) {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.2);
  }
`,ListItem=({render,onChange,selected,defaultV=!1})=>(0,jsx_runtime.jsx)(ListItemStyle,{"data-type":"ddl-item","data-selected":selected,"data-default":defaultV,onClick:e=>{selected||onChange?.(),e.preventDefault()},children:render});function DropdownList(p){const{shadow="#555",maxHeight="50vh"}=p,ref=(0,react.useRef)(null),[state,setState]=(0,react.useState)(p.value),[open,setOpen]=(0,react.useState)(p.open),[bounced,setBounced]=(0,react.useState)(!1);(0,useOnClickOutside.W)({disabled:!open,ref,moveMouseOutside:!1},(()=>{setOpen(!1),setBounced(!1),p.onClose?.()})),(0,react.useEffect)((()=>{const newv=p.value;JSON.stringify(newv)!==JSON.stringify(state)&&setState(newv)}),[p.value,state]);const[style,setStyle]=(0,react.useState)({});(0,react.useEffect)((()=>{const newStyle={minWidth:"calc(20ch + 2rem)",filter:`drop-shadow(1px 1px 0.5rem ${shadow})`,maxHeight,width:"fit-content"},minPx=(0,dom.mO)(12);(ref.current?.offsetLeft??0)<minPx?newStyle.left="0":newStyle.right="0";const b=ref.current?.getBoundingClientRect()??{bottom:0},ih="undefined"!=typeof window?window.innerHeight:0;b.bottom+50>ih?newStyle.bottom="1rem":newStyle.top="0",JSON.stringify(style)!==JSON.stringify(newStyle)&&setStyle(newStyle)}),[maxHeight,open,p.options,p.renderF,shadow,style]);const defaultRender=p.value?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:p.renderF(p.value,0)}):(0,jsx_runtime.jsx)(KebabDots.S,{}),openDisplay=p.children??(0,jsx_runtime.jsx)(ListItem,{selected:!0,render:defaultRender,defaultV:!p.value},defaultRender.key);return(0,react.useEffect)((()=>{!bounced&&open&&setBounced(!0)}),[bounced,open]),(0,jsx_runtime.jsxs)(Base,{className:p.className,ref,title:p.placeholder,onClick:e=>{e.stopPropagation(),e.preventDefault(),setOpen(!open),open&&p.onClose?.()},children:[(0,jsx_runtime.jsx)(DropItems,{"data-open":open,style,"data-bounced":bounced,children:open&&p.options.map(((s,i)=>(0,jsx_runtime.jsx)(ListItem,{render:p.renderF(s,i),onChange:()=>p.onChange(s,i),selected:s===state},"string"==typeof s?s:p.renderF(s,i).key)))}),openDisplay]})}DropdownList.__docgenInfo={description:"",methods:[],displayName:"DropdownList",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"all items that can be in dropdown"},value:{required:!1,tsType:{name:"T"},description:"selected item from options. closing will return undefined"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: T | undefined, index: number) => void",signature:{arguments:[{type:{name:"union",raw:"T | undefined",elements:[{name:"T"},{name:"undefined"}]},name:"v"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"will call on close/click outside"},placeholder:{required:!1,tsType:{name:"string"},description:"placeholder title for list"},className:{required:!1,tsType:{name:"string"},description:""},renderF:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: T, index: number) => JSX.Element",signature:{arguments:[{type:{name:"T"},name:"v"},{type:{name:"number"},name:"index"}],return:{name:"JSX.Element"}}},description:"function to render value"},shadow:{required:!1,tsType:{name:"string"},description:"colour of dropdown shadow. default #555"},maxHeight:{required:!1,tsType:{name:"string"},description:"max height of items list. default 50vh"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"if not provided, will default display value, then kebab dots"},open:{required:!1,tsType:{name:"boolean"},description:"default false"}}};var client=__webpack_require__("./node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom/client.js");const DropdownListDialog=async p=>new Promise((res=>{const id="ag-common-ddld";if(document.querySelectorAll("#"+id).length)return;const wrapper=document.body.appendChild(document.createElement("div"));wrapper.id=id,wrapper.style.position="absolute",wrapper.style.top=`${p.position.y}px`,wrapper.style.left=`${p.position.x}px`;const root=(0,client.createRoot)(wrapper);root.render((0,jsx_runtime.jsx)(DropdownList,{...p,open:!0,onClose:()=>{try{root.unmount(),wrapper.remove()}catch(e){}},onChange:(v,i)=>{try{root.unmount(),wrapper.remove()}catch(e){}res(v?[v,i]:void 0)},children:" "}))}))},"./src/ui/components/Icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_common_helpers_object__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/common/helpers/object.ts")),_styles_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/styles/common.tsx");const IconF=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.span`
  transition: all 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: inherit;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: unset;
  &[data-chnd='true'] {
    cursor: pointer;
    &:hover {
      filter: saturate(3);
    }
  }

  > svg {
    flex-grow: 1;
  }

  &[data-hasfill='true'] {
    fill: var(--fill);

    svg {
      fill: var(--fill);
    }

    linearGradient > *,
    radialGradient > * {
      stop-color: var(--fill) !important;
    }
  }

  &[data-hasoutline='true'] {
    ${(0,_styles_common__WEBPACK_IMPORTED_MODULE_3__.gu)("var(--outlinecolour)")}
  }

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    aspect-ratio: 1/1;
  }

  img {
    object-fit: contain;
  }
`,Icon=pr=>{const{className,children,disabled,onClick}=pr,CHND=pr.canHover&&!pr.disabled,style=(0,_common_helpers_object__WEBPACK_IMPORTED_MODULE_4__.oh)({...pr.style??{},"--fill":pr.style?.fill??null,width:pr.style?.width,height:pr.style?.height,padding:pr.style?.padding,margin:pr.style?.margin,transform:pr.rotate?`rotate(${pr.rotate||0}deg)`:null,filter:pr.disabled?"grayscale(1)":null,"--outlinecolour":pr.outline||null});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconF,{...pr,className,onClick:e=>!disabled&&onClick?.(e),style,"data-chnd":CHND,"data-hasoutline":pr.outline,"data-hasfill":!!pr.style?.fill,"data-type":"iconbox",children})};Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},outline:{required:!1,tsType:{name:"string"},description:""},rotate:{required:!1,tsType:{name:"number"},description:""},canHover:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLSpanElement, MouseEvent>",elements:[{name:"HTMLSpanElement"},{name:"MouseEvent"}]},name:"e"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},role:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},tabIndex:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"intersection",raw:"{\n  /** default 100% */\n  width?: string;\n  /** default 100% */\n  height?: string;\n  /** default 0 */\n  padding?: string;\n  /** default unset */\n  margin?: string;\n  /** pass fill down to svg */\n  fill?: string;\n} & CSSProperties",elements:[{name:"signature",type:"object",raw:"{\n  /** default 100% */\n  width?: string;\n  /** default 100% */\n  height?: string;\n  /** default 0 */\n  padding?: string;\n  /** default unset */\n  margin?: string;\n  /** pass fill down to svg */\n  fill?: string;\n}",signature:{properties:[{key:"width",value:{name:"string",required:!1},description:"default 100%"},{key:"height",value:{name:"string",required:!1},description:"default 100%"},{key:"padding",value:{name:"string",required:!1},description:"default 0"},{key:"margin",value:{name:"string",required:!1},description:"default unset"},{key:"fill",value:{name:"string",required:!1},description:"pass fill down to svg"}]}},{name:"CSSProperties"}]},description:""}}}},"./src/ui/components/KebabDots/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>KebabDots});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_icons_HorizontalDots__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/icons/HorizontalDots.tsx")),_Icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/components/Icon/index.tsx");const IconStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_Icon__WEBPACK_IMPORTED_MODULE_4__.I)`
  position: absolute;
`,KebabDots=({onClick})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconStyled,{style:{width:"2rem",height:"2rem"},onClick:()=>onClick?.(),"data-icon":"kebab",children:_icons_HorizontalDots__WEBPACK_IMPORTED_MODULE_3__.$});KebabDots.__docgenInfo={description:"",methods:[],displayName:"KebabDots",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""}}}}}]);
//# sourceMappingURL=9169.76c1cd78.iframe.bundle.js.map