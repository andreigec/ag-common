/*! For license information please see Toast-stories.34b4f29d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[7294],{"./node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.53_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{iv:()=>css});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");var _emotion_serialize__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@emotion+serialize@1.1.3/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");__webpack_require__("./node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__.O)(args)}},"./stories/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dialog:()=>Dialog,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_src_ui_components_Toast__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/Toast/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ActionWrapper=a=>{const x=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_src_ui_components_Toast__WEBPACK_IMPORTED_MODULE_1__.ToastContext);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{color:"white",backgroundColor:"black",height:"5rem",width:"10rem",cursor:"pointer",fontSize:"2rem"},role:"button",tabIndex:-1,onKeyDown:()=>{},onClick:async()=>{await x.addToast(a.toast.message,a.toast.options)},children:"click to open"})};ActionWrapper.displayName="ActionWrapper";const base={title:"UI/Toast",component:ActionWrapper},TemplateModal=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_ui_components_Toast__WEBPACK_IMPORTED_MODULE_1__.ToastProvider,{providerOptions:args.container,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ActionWrapper,{...args})})});TemplateModal.displayName="TemplateModal";const Dialog=TemplateModal.bind({});Dialog.args={toast:{message:"hey guys, long toasttt hereeeee",options:{appearance:"success",autoClose:2e3}},container:{darkMode:!1}};const __WEBPACK_DEFAULT_EXPORT__=base;Dialog.parameters={...Dialog.parameters,docs:{...Dialog.parameters?.docs,source:{originalSource:"args => <div>\n    <ToastProvider providerOptions={args.container}>\n      <ActionWrapper {...args} />\n    </ToastProvider>\n  </div>",...Dialog.parameters?.docs?.source}}};const __namedExportsOrder=["Dialog"]},"./src/ui/components/ProgressBar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>ProgressBar});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.53_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/styles/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  position: relative;
  min-width: 5rem;
  width: 100%;
  height: 2rem;
  border-radius: 1rem;
  overflow: hidden;
`,Bar=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
`,Dot=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  position: absolute;
  top: calc(50% - 0.25rem);
  width: 0.5rem;
  height: 0.5rem;
  background-color: #aaa;
  z-index: 1;
  border-radius: 50%;
  &[data-invert='true'] {
    background-color: #333;
  }
`,ProgressBar=p=>{const{transitionToMs=200,frontColour=_styles__WEBPACK_IMPORTED_MODULE_2__.sW.notificationBlue,backColour="#eee",dotPercentages=[25,50,75]}=p,[barWidth,setBarWidth]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(p.min/p.max*100);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const newbw=p.min/p.max*100;barWidth!==newbw&&setBarWidth(newbw)}),[p.min,p.max]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{transitionToMs&&setBarWidth(p.max)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Base,{style:{backgroundColor:backColour},className:p.className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Bar,{style:{width:`${barWidth}%`,backgroundColor:frontColour,transition:`width ${transitionToMs}ms linear`}}),dotPercentages?.map((v=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Dot,{style:{left:`calc(${v}% - 0.25rem)`},"data-invert":v>barWidth},v)))]})};ProgressBar.displayName="ProgressBar";try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},frontColour:{defaultValue:null,description:"default #4d76ff",name:"frontColour",required:!1,type:{name:"string"}},backColour:{defaultValue:null,description:"default #eee",name:"backColour",required:!1,type:{name:"string"}},dotPercentages:{defaultValue:null,description:"default 25,50,75",name:"dotPercentages",required:!1,type:{name:"number[] | null"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},transitionToMs:{defaultValue:null,description:"if true, will transition to the end in X ms",name:"transitionToMs",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/ProgressBar/index.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"src/ui/components/ProgressBar/index.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/components/Toast/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ToastContext:()=>ToastContext,ToastProvider:()=>base_ToastProvider});var emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.53_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function random(max,seed){const rnd=(9301*(seed=seed??(new Date).getTime())+49297)%233280/233280;return Math.ceil(rnd*max)}var Warning=__webpack_require__("./src/ui/icons/Warning.tsx"),ProgressBar=__webpack_require__("./src/ui/components/ProgressBar/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Cross=()=>(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsxs)("linearGradient",{id:"a",x2:"0",y1:"47.37",y2:"-1.429",gradientUnits:"userSpaceOnUse",children:[(0,jsx_runtime.jsx)("stop",{stopColor:"#c52828"}),(0,jsx_runtime.jsx)("stop",{offset:"1",stopColor:"#ff5454"})]})}),(0,jsx_runtime.jsxs)("g",{style:{fillOpacity:1},transform:"translate(-58.37 .882) scale(.99999)",children:[(0,jsx_runtime.jsx)("circle",{cx:"82.37",cy:"23.12",r:"24",fill:"url(#a)",style:{fillOpacity:1,fill:"#d33"}}),(0,jsx_runtime.jsx)("path",{fill:"#fff",fillOpacity:".842",d:"m87.77 23.725 5.939-5.939c.377-.372.566-.835.566-1.373 0-.54-.189-.997-.566-1.374l-2.747-2.747a1.888 1.888 0 0 0-1.373-.564c-.539 0-.997.186-1.374.564l-5.939 5.939-5.939-5.939a1.889 1.889 0 0 0-1.374-.564c-.539 0-.997.186-1.374.564l-2.748 2.747a1.873 1.873 0 0 0-.566 1.374c0 .54.188.997.566 1.373l5.939 5.939-5.939 5.94a1.862 1.862 0 0 0-.566 1.373c0 .54.188.997.566 1.373l2.748 2.747c.377.378.835.564 1.374.564.539 0 .997-.186 1.374-.564l5.939-5.939 5.94 5.939c.377.378.835.564 1.374.564.539 0 .997-.186 1.373-.564l2.747-2.747c.377-.372.566-.835.566-1.373 0-.54-.188-.997-.566-1.373l-5.939-5.94",style:{fillOpacity:1,fill:"#fff"}})]})]});Cross.displayName="Cross";const Tick=()=>(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",children:[(0,jsx_runtime.jsx)("circle",{cx:"32",cy:"32",r:"30",fill:"#fff"}),(0,jsx_runtime.jsx)("path",{fill:"#7cb342",d:"M32 2C15.431 2 2 15.432 2 32c0 16.568 13.432 30 30 30 16.568 0 30-13.432 30-30C62 15.432 48.568 2 32 2zm-6.975 48-.02-.02-.017.02L11 35.6l7.029-7.164 6.977 7.184 21-21.619L53 21.199 25.025 50z"})]});Tick.displayName="Tick";const ToastContext=(0,react.createContext)({}),ToastContainerStyle=emotion_styled_browser_esm.Z.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0.5rem;
  z-index: 10000;
`,ToastStyle=emotion_styled_browser_esm.Z.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 0.5rem;
  position: relative;
  color: white;
  font-size: 1.2rem;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  &[data-dark='false'] {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
  }
`,CloseStyle=emotion_styled_browser_esm.Z.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 0.5rem;
  height: 0.5rem;

  cursor: pointer;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  &:hover {
    background-color: #333;
  }

  &[data-dark='false'] {
    color: #000;
    &:hover {
      background-color: #eee;
    }
  }
`,Icon=emotion_styled_browser_esm.Z.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`,ProgressBarStyled=(0,emotion_styled_browser_esm.Z)(ProgressBar.k)`
  height: 0.75rem;
  margin-top: 0.5rem;
`,base_Toast=({toast,close,providerOptions})=>{const darkMode=providerOptions?.darkMode??!1;let closeMs;toast.options?.autoClose?closeMs=toast.options?.autoClose:void 0===toast.options?.autoClose&&(closeMs="success"===toast?.options?.appearance?5e3:1e4);let icon=(0,jsx_runtime.jsx)(Tick,{});switch(toast?.options?.appearance){case"error":icon=(0,jsx_runtime.jsx)(Cross,{});break;case"warning":icon=(0,jsx_runtime.jsx)(Warning.v,{})}return(0,react.useEffect)((()=>{if(!closeMs)return;const timeout=setTimeout((()=>close(toast.id)),closeMs);return()=>clearTimeout(timeout)}),[]),(0,jsx_runtime.jsxs)(ToastStyle,{"data-dark":darkMode,children:[(0,jsx_runtime.jsx)(CloseStyle,{"data-dark":darkMode,onClick:()=>close(toast.id),children:"×"}),(0,jsx_runtime.jsx)(Icon,{children:icon}),toast.message,void 0!==closeMs&&(0,jsx_runtime.jsx)(ProgressBarStyled,{max:100,min:0,dotPercentages:null,transitionToMs:closeMs})]})};base_Toast.displayName="Toast";const base_ToastProvider=({children,providerOptions})=>{const[toasts,setToasts]=(0,react.useState)([]),addToast=(message,options)=>setToasts((currentToasts=>[...currentToasts.filter((ct=>ct.message!==message||JSON.stringify(ct.options)!==JSON.stringify(options))),{id:random(1e4).toString(),message,options}])),close=id=>setToasts((currentToasts=>currentToasts.filter((toast=>toast.id!==id)))),contextValue=(0,react.useMemo)((()=>({addToast})),[]);return(0,jsx_runtime.jsxs)(ToastContext.Provider,{value:contextValue,children:[children,(0,jsx_runtime.jsx)(ToastContainerStyle,{children:toasts.map((toast=>(0,jsx_runtime.jsx)(base_Toast,{toast,close,providerOptions:providerOptions??{}},toast.id)))})]})};base_ToastProvider.displayName="ToastProvider";try{base_Toast.displayName="Toast",base_Toast.__docgenInfo={description:"",displayName:"Toast",props:{toast:{defaultValue:null,description:"",name:"toast",required:!0,type:{name:"IToastInt"}},providerOptions:{defaultValue:null,description:"",name:"providerOptions",required:!0,type:{name:"IToastProviderOptions"}},close:{defaultValue:null,description:"",name:"close",required:!0,type:{name:"(s: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Toast/base.tsx#Toast"]={docgenInfo:base_Toast.__docgenInfo,name:"Toast",path:"src/ui/components/Toast/base.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}try{base_ToastProvider.displayName="ToastProvider",base_ToastProvider.__docgenInfo={description:"",displayName:"ToastProvider",props:{providerOptions:{defaultValue:null,description:"",name:"providerOptions",required:!1,type:{name:"IToastProviderOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Toast/base.tsx#ToastProvider"]={docgenInfo:base_ToastProvider.__docgenInfo,name:"ToastProvider",path:"src/ui/components/Toast/base.tsx#ToastProvider"})}catch(__react_docgen_typescript_loader_error){}try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{toast:{defaultValue:null,description:"",name:"toast",required:!0,type:{name:"IToastInt"}},providerOptions:{defaultValue:null,description:"",name:"providerOptions",required:!0,type:{name:"IToastProviderOptions"}},close:{defaultValue:null,description:"",name:"close",required:!0,type:{name:"(s: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Toast/index.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/ui/components/Toast/index.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}try{ToastProvider.displayName="ToastProvider",ToastProvider.__docgenInfo={description:"",displayName:"ToastProvider",props:{providerOptions:{defaultValue:null,description:"",name:"providerOptions",required:!1,type:{name:"IToastProviderOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Toast/index.tsx#ToastProvider"]={docgenInfo:ToastProvider.__docgenInfo,name:"ToastProvider",path:"src/ui/components/Toast/index.tsx#ToastProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/icons/Warning.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Warning});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Warning=({className})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("linearGradient",{id:"a",x2:"0",y1:"45.47",y2:"-.599",gradientTransform:"matrix(1.31117 0 0 1.30239 737.39 159.91)",gradientUnits:"userSpaceOnUse",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("stop",{stopColor:"#ffc515"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("stop",{offset:"1",stopColor:"#ffd55b"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fill:"none",stroke:"url(#a)",strokeWidth:"4px",d:"m797.94 212.01-25.607-48c-.736-1.333-2.068-2.074-3.551-2.074s-2.822.889-3.569 2.222l-25.417 48c-.598 1.185-.605 2.815.132 4s1.921 1.778 3.404 1.778h51.02c1.483 0 2.821-.741 3.42-1.926.747-1.185.753-2.667.165-4",transform:"translate(-627.02 -130.8) scale(.85714)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fillOpacity:".75",stroke:"#40330d",strokeWidth:".90168",d:"M31.996 24.239a1.93 1.93 0 0 0-1.926 1.92v11.559c0 1.06.855 1.92 1.926 1.92a1.929 1.929 0 0 0 1.925-1.92v-11.56c0-1.06-.853-1.92-1.925-1.92zm0 19.249c-1.064 0-1.926.86-1.926 1.925 0 1.064.86 1.925 1.926 1.925 1.064 0 1.925-.86 1.925-1.925a1.922 1.922 0 0 0-1.925-1.925z"})]});Warning.displayName="Warning";try{Warning.displayName="Warning",Warning.__docgenInfo={description:"",displayName:"Warning",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/icons/Warning.tsx#Warning"]={docgenInfo:Warning.__docgenInfo,name:"Warning",path:"src/ui/icons/Warning.tsx#Warning"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/styles/colours.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PT:()=>getColourWheel,sW:()=>colours});const colours={mainLight:"rgb(255,255,255)",lightest:"rgb(247,247,247)",darker:"rgb(0,0,0,0.1)",lighter:"rgb(234,234,234)",dark:"rgb(23,25,23)",charcoal:"rgb(50,50,50)",lightCharcoal:"rgb(154,154,154)",orangeRed:"#d65873",orange:"#e88070",yellow:"rgb(255,206,109)",lightBlue:"rgb(90,129,255)",lightGreen:"rgb(75,236,120)",lightGreen2:"rgb(14, 165, 0)",darkGreen:"#228B22",peach:"rgb(245,169,169)",purple:"rgb(173,121,255)",notificationBlue:"#4d76ff",notificationBlue2:"#002ab3",notificationBlue3:"rgb(230,238,246)",gradient:"---generated---"};var left,right;colours.gradient=(left=colours.orangeRed,right=colours.orange,`linear-gradient(to right, ${left}, ${right})`);const colourWheel=["rgb(11,132,165)","rgb(246,200,95)","rgb(111,78,124)","rgb(157,216,102)","rgb(202,71,47)","rgb(255,160,86)","rgb(141,221,208)"],getColourWheel=i=>colourWheel[i%colourWheel.length]},"./src/ui/styles/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fe:()=>HardOutline,Jq:()=>noDrag,iI:()=>TextOverflowEllipsis,rl:()=>bounce,uV:()=>NoTextSelect});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.53_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.53_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_colours__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/styles/colours.ts");const HardOutline=(outlineColour="white",sizePx=1)=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.iv`\
filter: ${HardOutlineFilter(outlineColour,sizePx)};
`,HardOutlineFilter=(outlineColour="white",sizePx=1)=>{const px=`${sizePx}px`;return`drop-shadow(${px} ${px} 0px ${outlineColour})\n  drop-shadow(-${px} ${px} 0px ${outlineColour})\n  drop-shadow(${px} -${px} 0px ${outlineColour})\n  drop-shadow(-${px} -${px} 0px ${outlineColour})`},NoTextSelect=_emotion_react__WEBPACK_IMPORTED_MODULE_2__.iv`
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
`;try{HardOutline.displayName="HardOutline",HardOutline.__docgenInfo={description:"function that returns css that gives a text outline drop shadow.",displayName:"HardOutline",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#HardOutline"]={docgenInfo:HardOutline.__docgenInfo,name:"HardOutline",path:"src/ui/styles/common.tsx#HardOutline"})}catch(__react_docgen_typescript_loader_error){}try{NoTextSelect.displayName="NoTextSelect",NoTextSelect.__docgenInfo={description:"disable user text selection",displayName:"NoTextSelect",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#NoTextSelect"]={docgenInfo:NoTextSelect.__docgenInfo,name:"NoTextSelect",path:"src/ui/styles/common.tsx#NoTextSelect"})}catch(__react_docgen_typescript_loader_error){}try{TextOverflowEllipsis.displayName="TextOverflowEllipsis",TextOverflowEllipsis.__docgenInfo={description:"enable text overflow",displayName:"TextOverflowEllipsis",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#TextOverflowEllipsis"]={docgenInfo:TextOverflowEllipsis.__docgenInfo,name:"TextOverflowEllipsis",path:"src/ui/styles/common.tsx#TextOverflowEllipsis"})}catch(__react_docgen_typescript_loader_error){}try{noDrag.displayName="noDrag",noDrag.__docgenInfo={description:"stop dragging of element",displayName:"noDrag",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#noDrag"]={docgenInfo:noDrag.__docgenInfo,name:"noDrag",path:"src/ui/styles/common.tsx#noDrag"})}catch(__react_docgen_typescript_loader_error){}try{bounce.displayName="bounce",bounce.__docgenInfo={description:"apply bounce effect given a condition",displayName:"bounce",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#bounce"]={docgenInfo:bounce.__docgenInfo,name:"bounce",path:"src/ui/styles/common.tsx#bounce"})}catch(__react_docgen_typescript_loader_error){}try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/ui/styles/common.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/styles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F$:()=>media.F$,rl:()=>common.rl,sW:()=>colours.sW,PT:()=>colours.PT,xC:()=>media.xC});var colours=__webpack_require__("./src/ui/styles/colours.ts"),common=__webpack_require__("./src/ui/styles/common.tsx"),media=__webpack_require__("./src/ui/styles/media.ts"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.53_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");emotion_styled_browser_esm.Z.div`
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
//# sourceMappingURL=Toast-stories.34b4f29d.iframe.bundle.js.map