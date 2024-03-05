"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[8602],{"./stories/Sidebar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _src_ui_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/Sidebar/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const app={title:"UI/Sidebar",component:_src_ui_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__.Y},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{backgroundColor:"#333",height:"20rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_ui_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__.Y,{...args})});Template.displayName="Template";const Primary=Template.bind({});Primary.args={children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{backgroundColor:"#666"},children:"sidebar item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:"sidebar item2"})]}),mode:"fixedOpen"};const __WEBPACK_DEFAULT_EXPORT__=app;Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <div style={{\n  backgroundColor: '#333',\n  height: '20rem'\n}}>\n    <Sidebar {...args} />\n  </div>",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/common/helpers/array.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$H:()=>flat,Dw:()=>notEmpty,FB:()=>arrayToObject,YK:()=>insertElementAtIndex,dP:()=>distinctBy,qn:()=>take,qr:()=>findLastIndex});const arrayToObject=(arr,keyF,valueF)=>{const ret={};return arr&&keyF?(arr.forEach((v=>{const k=keyF(v);ret[k]=valueF(v)})),ret):ret},flat=arr=>[].concat(...arr),take=(array,num)=>{const ret=JSON.parse(JSON.stringify(array));return{part:ret.slice(0,num),rest:ret.slice(num)}};function notEmpty(value){return null!=value&&!1!==value}function distinctBy(data,key,ignoreEmpty){if(!data||0===data.length)return data;const hashSet=new Set;return data.filter((x=>{let keyVal;return keyVal="string"==typeof key?x[key]:key(x),!(!keyVal&&ignoreEmpty)&&(!hashSet.has(keyVal)&&(hashSet.add(keyVal),!0))}))}function findLastIndex(arr,predicate){for(let i=arr.length-1;i>=0;i--)if(predicate(arr[i],i,arr))return i;return-1}const insertElementAtIndex=(arr,element,index)=>[...arr.slice(0,index),element,...arr.slice(index)]},"./src/ui/components/Sidebar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Sidebar});var _emotion_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_helpers__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/helpers/index.ts"),_icons_Hamburger__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/icons/Hamburger.tsx"),_styles_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/styles/common.tsx"),_styles_media__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/ui/styles/media.ts"),_Chevron__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/ui/components/Chevron/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const closedSidebarHover=_emotion_react__WEBPACK_IMPORTED_MODULE_8__.iv`
  padding-left: 0.5rem;
  width: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover,
  &:hover [data-hover='true'] {
    background-color: #ccc;
  }
  &:hover {
    border-right: solid 1px #999;
  }
`,Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  position: sticky;
  top: 0;
  transition: all 200ms;
  border-right: solid 1px #ccc;
  height: 100vh;
  z-index: 1;

  ${_styles_common__WEBPACK_IMPORTED_MODULE_4__.uV};
  &:hover {
    [data-type='content-block'] {
      left: 1rem;
    }
  }

  &[data-open='true'] {
    width: fit-content;

    @media ${_styles_media__WEBPACK_IMPORTED_MODULE_5__.xC} {
      max-width: unset;
      position: fixed;
      top: 0;
      left: 0;
    }
  }
  &[data-open='false'] {
    ${closedSidebarHover};
  }

  :not([data-open]) {
    @media ${_styles_media__WEBPACK_IMPORTED_MODULE_5__.xC} {
      ${closedSidebarHover};
    }
    @media ${_styles_media__WEBPACK_IMPORTED_MODULE_5__.F$} {
      width: fit-content;
    }
  }
`,closedContentBlockOffScreen=_emotion_react__WEBPACK_IMPORTED_MODULE_8__.iv`
  left: -100vw;
  transition: left 200ms;
  height: 100%;
`,ContentBlock=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  ${closedContentBlockOffScreen};
  &[data-open='false'] {
    position: absolute;
    top: 0;
    z-index: 1;
    width: fit-content;
  }

  :not([data-open]) {
    @media ${_styles_media__WEBPACK_IMPORTED_MODULE_5__.xC} {
      position: absolute;
      ${closedContentBlockOffScreen};
    }
  }
`,Content=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;

  &[data-open='false'] {
    filter: drop-shadow(1px 1px 0.5rem #555);
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
  }
`,HamburgerB=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  position: absolute;
  transition: all 200ms;
  z-index: 2;

  &[data-hide-on-big='true'] {
    @media ${_styles_media__WEBPACK_IMPORTED_MODULE_5__.F$} {
      display: none;
    }
  }

  &[data-open='false'] {
    top: 0.5rem;
    left: 0.25rem;
  }

  :not([data-open]) {
    @media ${_styles_media__WEBPACK_IMPORTED_MODULE_5__.F$} {
      top: 0.5rem;
      right: -0.75rem;
    }
  }
  &[data-open='true'] {
    top: 0.5rem;
    right: -0.75rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.25rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
  border-radius: 50%;
  border: solid 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`,ChevronStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z)(_Chevron__WEBPACK_IMPORTED_MODULE_6__.T)`
  svg {
    fill: #555;
  }
`,Sidebar=({children,className,mode="defaultClosed"})=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("defaultClosed"!==mode&&null);return(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.useOnClickOutside)({ref},(()=>{!open||window.innerWidth>_styles_media__WEBPACK_IMPORTED_MODULE_5__.z4||setOpen(!1)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Base,{"data-type":"sidebar",className,"data-open":open,onClick:()=>!open&&setOpen(!0),"data-hover":!0,ref,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HamburgerB,{"data-hide-on-big":"fixedOpen"===mode,"data-open":open,onClick:e=>{e.stopPropagation(),setOpen(!open)},"data-hover":!0,children:open?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ChevronStyled,{point:"left",width:"100%"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons_Hamburger__WEBPACK_IMPORTED_MODULE_3__.p,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ContentBlock,{"data-type":"content-block","data-open":open,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Content,{"data-type":"content","data-open":open,onClick:e=>{e.stopPropagation()},children})})]})};Sidebar.displayName="Sidebar";try{Sidebar.displayName="Sidebar",Sidebar.__docgenInfo={description:"",displayName:"Sidebar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"defaultClosed"},description:"default:defaultClosed\ndefaultClosed: always closed by default.\nfixedOpen: always open on bigscreen. cant close if bigscreen",name:"mode",required:!1,type:{name:"enum",value:[{value:'"defaultClosed"'},{value:'"fixedOpen"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Sidebar/index.tsx#Sidebar"]={docgenInfo:Sidebar.__docgenInfo,name:"Sidebar",path:"src/ui/components/Sidebar/index.tsx#Sidebar"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/helpers/debounce.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>debounce});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const hashMap={};function debounce(callback,{key,time}){clearTimeout(hashMap[key]),hashMap[key]=setTimeout((()=>{delete hashMap[key],callback()}),time)}},"./src/ui/helpers/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H9:()=>convertRemToPixels,_E:()=>filterDataProps,dO:()=>isRightClick});var _common_helpers_array__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/helpers/array.ts");const convertRemToPixels=rem=>{let fontSize="16px";return"undefined"!=typeof window&&(fontSize=getComputedStyle(document.documentElement).fontSize),rem*parseFloat(fontSize)},filterDataProps=p=>{const x=Object.entries(p).filter((r=>r[0].startsWith("data-"))).map((r=>r));return(0,_common_helpers_array__WEBPACK_IMPORTED_MODULE_0__.FB)(x,(s=>s[0]),(s=>s[1]))},isRightClick=event=>{let isRightMB=!1;return"which"in event?isRightMB=3==event.which:"button"in event&&(isRightMB=2==event.button),isRightMB}},"./src/ui/helpers/useOnClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useOnClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/helpers/dom.ts");function useOnClickOutside(p,handler){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(p.disabled||"undefined"==typeof window)return()=>{};const listener=event=>{if((0,_dom__WEBPACK_IMPORTED_MODULE_1__.dO)(event))return;const el=p.ref?.current;el&&!el.contains(event?.target||null)&&handler(event)};return document.addEventListener("mousedown",listener),document.addEventListener("touchstart",listener),p.moveMouseOutside&&document.addEventListener("mousemove",listener),()=>{document.removeEventListener("mousedown",listener),document.removeEventListener("touchstart",listener),document.removeEventListener("mousemove",listener)}}),[p,handler])}},"./src/ui/icons/ChevronRight.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>ChevronRight});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ChevronRight=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"})})},"./src/ui/icons/Hamburger.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Hamburger});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Hamburger=({className})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32 ",xmlSpace:"preserve",className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z"})});Hamburger.displayName="Hamburger";try{Hamburger.displayName="Hamburger",Hamburger.__docgenInfo={description:"",displayName:"Hamburger",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/icons/Hamburger.tsx#Hamburger"]={docgenInfo:Hamburger.__docgenInfo,name:"Hamburger",path:"src/ui/icons/Hamburger.tsx#Hamburger"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/styles/colours.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PT:()=>getColourWheel,sW:()=>colours});const colours={mainLight:"rgb(255,255,255)",lightest:"rgb(247,247,247)",darker:"rgb(0,0,0,0.1)",lighter:"rgb(234,234,234)",dark:"rgb(23,25,23)",charcoal:"rgb(50,50,50)",lightCharcoal:"rgb(154,154,154)",orangeRed:"#d65873",orange:"#e88070",yellow:"rgb(255,206,109)",lightBlue:"rgb(90,129,255)",lightGreen:"rgb(75,236,120)",lightGreen2:"rgb(14, 165, 0)",darkGreen:"#228B22",peach:"rgb(245,169,169)",purple:"rgb(173,121,255)",notificationBlue:"#4d76ff",notificationBlue2:"#002ab3",notificationBlue3:"rgb(230,238,246)",gradient:"---generated---"};var left,right;colours.gradient=(left=colours.orangeRed,right=colours.orange,`linear-gradient(to right, ${left}, ${right})`);const colourWheel=["rgb(11,132,165)","rgb(246,200,95)","rgb(111,78,124)","rgb(157,216,102)","rgb(202,71,47)","rgb(255,160,86)","rgb(141,221,208)"],getColourWheel=i=>colourWheel[i%colourWheel.length]},"./src/ui/styles/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fe:()=>HardOutline,Jq:()=>noDrag,eN:()=>getVarStyles,iI:()=>TextOverflowEllipsis,rl:()=>bounce,uV:()=>NoTextSelect,wV:()=>HardOutlineFilter});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_colours__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/styles/colours.ts");const HardOutline=(outlineColour="white",sizePx=1)=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.iv`\
filter: ${HardOutlineFilter(outlineColour,sizePx)};
`,HardOutlineFilter=(outlineColour="white",sizePx=1)=>{const px=`${sizePx}px`;return`drop-shadow(${px} ${px} 0px ${outlineColour})\n  drop-shadow(-${px} ${px} 0px ${outlineColour})\n  drop-shadow(${px} -${px} 0px ${outlineColour})\n  drop-shadow(-${px} -${px} 0px ${outlineColour});`},NoTextSelect=_emotion_react__WEBPACK_IMPORTED_MODULE_2__.iv`
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`,TextOverflowEllipsis=lines=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.iv`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,noDrag={draggable:!1,onDragStart:e=>{e.preventDefault(),e.stopPropagation()},onTouchStart:e=>{e.preventDefault(),e.stopPropagation()}},bounce=bounceattr=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.iv`
  transition:
    opacity 0.2s ease,
    transform 0.2s cubic-bezier(0.02, 1.5, 0.74, 1.23);
  transform-origin: 50% 50%;
  transform: translateY(-5px);
  &[${bounceattr}='true'] {
    transform: translateY(0);
  }
`,Card=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  background-color: white;
  margin: 0.5rem;

  position: relative;
  border-radius: 0.5rem;
  max-width: 40rem;
  padding: 1rem;
  border: solid 2px ${_colours__WEBPACK_IMPORTED_MODULE_1__.sW.lighter};
`,getVarStyles=raw=>({...raw,color:raw?.color??"var(--main-fg)",backgroundColor:raw?.backgroundColor??"var(--main-bg)",borderColor:raw?.borderColor??"var(--main-bg-mid)"});try{HardOutline.displayName="HardOutline",HardOutline.__docgenInfo={description:"function that returns css that gives a text outline drop shadow.",displayName:"HardOutline",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#HardOutline"]={docgenInfo:HardOutline.__docgenInfo,name:"HardOutline",path:"src/ui/styles/common.tsx#HardOutline"})}catch(__react_docgen_typescript_loader_error){}try{NoTextSelect.displayName="NoTextSelect",NoTextSelect.__docgenInfo={description:"disable user text selection",displayName:"NoTextSelect",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#NoTextSelect"]={docgenInfo:NoTextSelect.__docgenInfo,name:"NoTextSelect",path:"src/ui/styles/common.tsx#NoTextSelect"})}catch(__react_docgen_typescript_loader_error){}try{TextOverflowEllipsis.displayName="TextOverflowEllipsis",TextOverflowEllipsis.__docgenInfo={description:"enable text overflow",displayName:"TextOverflowEllipsis",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#TextOverflowEllipsis"]={docgenInfo:TextOverflowEllipsis.__docgenInfo,name:"TextOverflowEllipsis",path:"src/ui/styles/common.tsx#TextOverflowEllipsis"})}catch(__react_docgen_typescript_loader_error){}try{noDrag.displayName="noDrag",noDrag.__docgenInfo={description:"stop dragging of element",displayName:"noDrag",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#noDrag"]={docgenInfo:noDrag.__docgenInfo,name:"noDrag",path:"src/ui/styles/common.tsx#noDrag"})}catch(__react_docgen_typescript_loader_error){}try{bounce.displayName="bounce",bounce.__docgenInfo={description:"apply bounce effect given a condition",displayName:"bounce",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#bounce"]={docgenInfo:bounce.__docgenInfo,name:"bounce",path:"src/ui/styles/common.tsx#bounce"})}catch(__react_docgen_typescript_loader_error){}try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/ui/styles/common.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}try{getVarStyles.displayName="getVarStyles",getVarStyles.__docgenInfo={description:"",displayName:"getVarStyles",props:{color:{defaultValue:null,description:"default var(--main-fg)\nThe **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `canvastext`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |\n@see https://developer.mozilla.org/docs/Web/CSS/color",name:"color",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"default var(--main-bg)\nThe **`background-color`** CSS property sets the background color of an element.\n\n**Syntax**: `<color>`\n\n**Initial value**: `transparent`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |\n@see https://developer.mozilla.org/docs/Web/CSS/background-color",name:"backgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"default var(--main-bg-mid)\nThe **`border-color`** shorthand CSS property sets the color of an element's border.\n\n**Syntax**: `<color>{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |\n@see https://developer.mozilla.org/docs/Web/CSS/border-color",name:"borderColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#getVarStyles"]={docgenInfo:getVarStyles.__docgenInfo,name:"getVarStyles",path:"src/ui/styles/common.tsx#getVarStyles"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/styles/media.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F$:()=>bigScreen,Zm:()=>bigScreenPx,aZ:()=>vSmallScreen,xC:()=>smallScreen,z4:()=>smallScreenPx});const smallScreenPx=1024,bigScreenPx=2e3,vSmallScreen="(max-width: 500px)",smallScreen=`(max-width: ${smallScreenPx}px)`,bigScreen=`(min-width: ${smallScreenPx}px)`}}]);
//# sourceMappingURL=Sidebar-stories.727f61e4.iframe.bundle.js.map