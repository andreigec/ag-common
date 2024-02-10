(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[681],{"./src/ui/components/Chevron/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>Chevron});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.55_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/ui/icons/ChevronRight.tsx")),_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/components/Icon/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.span`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`,IconStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z)(_Icon__WEBPACK_IMPORTED_MODULE_3__.J)`
  cursor: pointer;
  margin: 0;
  padding: 0;
`,Chevron=({width="1.2rem",className,colour="black",onToggle,point="right"})=>{let rotate=0;switch(point){case"down":rotate=90;break;case"left":rotate=180;break;case"up":rotate=270;break;case"right":rotate=0}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Base,{className,onClick:()=>onToggle?.(),onTouchStart:()=>onToggle?.(),onKeyDown:e=>"Enter"===e.key&&onToggle?.(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(IconStyled,{rotate,style:{width,height:width,fill:colour},children:_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_2__._})})};Chevron.displayName="Chevron";try{Chevron.displayName="Chevron",Chevron.__docgenInfo={description:"",displayName:"Chevron",props:{point:{defaultValue:{value:"right"},description:"default right",name:"point",required:!1,type:{name:"enum",value:[{value:'"up"'},{value:'"down"'},{value:'"left"'},{value:'"right"'}]}},colour:{defaultValue:{value:"black"},description:"",name:"colour",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:{value:"1.2rem"},description:"",name:"width",required:!1,type:{name:"string"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Chevron/index.tsx#Chevron"]={docgenInfo:Chevron.__docgenInfo,name:"Chevron",path:"src/ui/components/Chevron/index.tsx#Chevron"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/components/Sidebar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>Sidebar});var emotion_react_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.55_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.55_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");__webpack_require__("./src/common/helpers/log.ts"),__webpack_require__("./src/common/helpers/object.ts");__webpack_require__("./node_modules/.pnpm/node-cache@5.1.2/node_modules/node-cache/index.js"),__webpack_require__("./src/common/helpers/string/base64.ts"),__webpack_require__("./src/ui/helpers/cookie/get.ts"),__webpack_require__("./src/ui/helpers/cookie/raw.ts"),__webpack_require__("./src/ui/helpers/cookie/set.ts"),__webpack_require__("./src/ui/helpers/cookie/use.ts");__webpack_require__("./src/ui/helpers/useGranularHook.ts");const defaultState=(p,noSsr=!1)=>{const cachedData=noSsr?void 0:callOpenApiCachedRaw({...p,onlyCached:!0})?.data;return{data:void 0,datetime:0,loadcount:0,loading:!1,...cachedData&&{data:cachedData},loaded:!!cachedData}},useCallOpenApi=inConfig=>{const[resp,setResp]=useState(defaultState(inConfig)),[config,setConfig]=useState(inConfig);useGranularEffect((()=>{JSON.stringify({...config,headers:void 0,ssrCacheItems:void 0,overrideAuth:void 0})!==JSON.stringify({...inConfig,headers:void 0,ssrCacheItems:void 0,overrideAuth:void 0})&&(setConfig(inConfig),setResp({...defaultState(inConfig,!0),loading:!0}),callOpenApi(inConfig).then((r=>setResp((r2=>({...r2,...r,loading:!1}))))))}),[inConfig],[resp,setResp,config,setConfig]);const reFetch=useCallback((async()=>{const newdate=(new Date).getTime(),newresp=await callOpenApi(config);setResp((d=>{let newState={...d,loaded:!0,loading:!1};return newdate>d.datetime&&(newState={...newresp,loaded:!0,loading:!1,loadcount:d.loadcount+1,datetime:newdate}),JSON.stringify(d)!==JSON.stringify(newState)?newState:d}))}),[config]);useEffect((()=>{const{error,loaded,loading,loadcount}=resp;config.disabled||loaded||loading||error&&loadcount>2||(setResp((d=>({...d,loading:!0}))),reFetch())}),[config.disabled,reFetch,resp]);return{...resp,reFetch,setData:async p=>{await setOpenApiCacheRaw(config,void 0),setResp((x=>({...x,datetime:(new Date).getTime(),data:"function"==typeof p?p(x.data):p})))}}};try{useCallOpenApi.displayName="useCallOpenApi",useCallOpenApi.__docgenInfo={description:"hooks+cached call to callOpenApi",displayName:"useCallOpenApi",props:{func:{defaultValue:null,description:"",name:"func",required:!0,type:{name:"(f: TDefaultApi) => Promise<AxiosResponse<T, any>>"}},apiUrl:{defaultValue:null,description:"",name:"apiUrl",required:!0,type:{name:"string"}},overrideAuth:{defaultValue:null,description:"",name:"overrideAuth",required:!1,type:{name:"OverrideAuth"}},logout:{defaultValue:null,description:"",name:"logout",required:!0,type:{name:"() => void"}},refreshToken:{defaultValue:null,description:"",name:"refreshToken",required:!0,type:{name:"() => Promise<User | undefined>"}},newDefaultApi:{defaultValue:null,description:"",name:"newDefaultApi",required:!0,type:{name:"(config: any) => TDefaultApi"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},headers:{defaultValue:null,description:"",name:"headers",required:!1,type:{name:"Record<string, string | number>"}},cacheKey:{defaultValue:null,description:"",name:"cacheKey",required:!0,type:{name:"string"}},ssrCacheItems:{defaultValue:null,description:"will shortcut and return the appropriate axioswrapper data if cachekey is found",name:"ssrCacheItems",required:!1,type:{name:"CacheItems"}},cacheTtl:{defaultValue:null,description:"default ttl in seconds for cache - default 120s",name:"cacheTtl",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/helpers/callOpenApi/hook.tsx#useCallOpenApi"]={docgenInfo:useCallOpenApi.__docgenInfo,name:"useCallOpenApi",path:"src/ui/helpers/callOpenApi/hook.tsx#useCallOpenApi"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/ui/helpers/callOpenApi/types.ts"),__webpack_require__("./src/ui/helpers/cognito.ts"),__webpack_require__("./src/ui/helpers/debounce.ts"),__webpack_require__("./src/ui/helpers/jwt.tsx");"undefined"!=typeof window?react.useLayoutEffect:react.useEffect;var useOnClickOutside=__webpack_require__("./src/ui/helpers/useOnClickOutside.ts");__webpack_require__("./src/ui/helpers/useResize.ts");var Hamburger=__webpack_require__("./src/ui/icons/Hamburger.tsx"),common=__webpack_require__("./src/ui/styles/common.tsx"),media=__webpack_require__("./src/ui/styles/media.ts"),Chevron=__webpack_require__("./src/ui/components/Chevron/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const closedSidebarHover=emotion_react_browser_esm.iv`
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
`,Base=emotion_styled_browser_esm.Z.div`
  position: relative;
  transition: all 200ms;
  border-right: solid 1px #ccc;
  padding-left: 0.5rem;
  height: 100vh;

  ${common.uV};
  &:hover {
    [data-type='content-block'] {
      left: 1rem;
    }
  }

  &[data-open='true'] {
    width: fit-content;

    @media ${media.xC} {
      max-width: unset;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }
  &[data-open='false'] {
    ${closedSidebarHover};
  }

  :not([data-open]) {
    @media ${media.xC} {
      ${closedSidebarHover};
    }
    @media ${media.F$} {
      width: fit-content;
    }
  }
`,closedContentBlockOffScreen=emotion_react_browser_esm.iv`
  left: -100vw;
  transition: left 200ms;
  height: 100%;
`,ContentBlock=emotion_styled_browser_esm.Z.div`
  ${closedContentBlockOffScreen};
  &[data-open='false'] {
    position: absolute;
    top: 0;
    z-index: 1;
    width: fit-content;
  }

  :not([data-open]) {
    @media ${media.xC} {
      position: absolute;
      ${closedContentBlockOffScreen};
    }
  }
`,Content=emotion_styled_browser_esm.Z.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;

  &[data-open='false'] {
    filter: drop-shadow(1px 1px 0.5rem #555);
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
  }
`,HamburgerB=emotion_styled_browser_esm.Z.div`
  position: absolute;
  transition: all 200ms;
  z-index: 2;

  &[data-hide-on-big='true'] {
    @media ${media.F$} {
      display: none;
    }
  }

  &[data-open='false'] {
    top: 0.5rem;
    left: 0.25rem;
  }

  :not([data-open]) {
    @media ${media.F$} {
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
`,ChevronStyled=(0,emotion_styled_browser_esm.Z)(Chevron.T)`
  svg {
    fill: #555;
  }
`,Sidebar=({children,className,mode="defaultClosed"})=>{const ref=(0,react.useRef)(null),[open,setOpen]=(0,react.useState)("defaultClosed"!==mode&&null);return(0,useOnClickOutside.t)({ref},(()=>{!open||window.innerWidth>media.z4||setOpen(!1)})),(0,jsx_runtime.jsxs)(Base,{"data-type":"sidebar",className,"data-open":open,onClick:()=>!open&&setOpen(!0),"data-hover":!0,ref,children:[(0,jsx_runtime.jsx)(HamburgerB,{"data-hide-on-big":"fixedOpen"===mode,"data-open":open,onClick:e=>{e.stopPropagation(),setOpen(!open)},"data-hover":!0,children:open?(0,jsx_runtime.jsx)(ChevronStyled,{point:"left",width:"100%"}):(0,jsx_runtime.jsx)(Hamburger.p,{})}),(0,jsx_runtime.jsx)(ContentBlock,{"data-type":"content-block","data-open":open,children:(0,jsx_runtime.jsx)(Content,{"data-type":"content","data-open":open,onClick:e=>{e.stopPropagation()},children})})]})};Sidebar.displayName="Sidebar";try{Sidebar.displayName="Sidebar",Sidebar.__docgenInfo={description:"",displayName:"Sidebar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"defaultClosed"},description:"default:defaultClosed\ndefaultClosed: always closed by default.\nfixedOpen: always open on bigscreen. cant close if bigscreen",name:"mode",required:!1,type:{name:"enum",value:[{value:'"defaultClosed"'},{value:'"fixedOpen"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/Sidebar/index.tsx#Sidebar"]={docgenInfo:Sidebar.__docgenInfo,name:"Sidebar",path:"src/ui/components/Sidebar/index.tsx#Sidebar"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/helpers/callOpenApi/types.ts":()=>{},"./src/ui/helpers/cognito.ts":()=>{},"./src/ui/helpers/debounce.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>debounce});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const hashMap={};function debounce(callback,{key,time}){clearTimeout(hashMap[key]),hashMap[key]=setTimeout((()=>{delete hashMap[key],callback()}),time)}},"./src/ui/helpers/jwt.tsx":()=>{},"./src/ui/helpers/useGranularHook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>useGranularEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const useGranularEffect=(effect,primaryDeps,secondaryDeps)=>((hook,callback,primaryDeps,secondaryDeps)=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref.current&&primaryDeps.every(((w,i)=>Object.is(w,ref.current?.[i])))||(ref.current=[...primaryDeps,...secondaryDeps]),hook(callback,ref.current)})(react__WEBPACK_IMPORTED_MODULE_0__.useEffect,effect,primaryDeps,secondaryDeps)},"./src/ui/helpers/useResize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>useResize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_styles_media__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/styles/media.ts");function getWindowDimensions(){if("undefined"==typeof window)return;const width=window.innerWidth;return{width,height:window.innerHeight,smallScreen:width<=_styles_media__WEBPACK_IMPORTED_MODULE_1__.z4,bigScreen:width>_styles_media__WEBPACK_IMPORTED_MODULE_1__.z4,vBigScreen:width>_styles_media__WEBPACK_IMPORTED_MODULE_1__.Zm}}function useResize(){const[windowDimensions,setWindowDimensions]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getWindowDimensions());return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{function handleResize(){const wd=getWindowDimensions();JSON.stringify(windowDimensions)!==JSON.stringify(wd)&&setWindowDimensions(wd)}return window.addEventListener("resize",handleResize),handleResize(),()=>{window.removeEventListener("resize",handleResize)}}),[windowDimensions]),windowDimensions}},"./src/ui/icons/ChevronRight.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>ChevronRight});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const ChevronRight=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"})})},"./src/ui/icons/Hamburger.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>Hamburger});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Hamburger=({className})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32 ",xmlSpace:"preserve",className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z"})});Hamburger.displayName="Hamburger";try{Hamburger.displayName="Hamburger",Hamburger.__docgenInfo={description:"",displayName:"Hamburger",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/icons/Hamburger.tsx#Hamburger"]={docgenInfo:Hamburger.__docgenInfo,name:"Hamburger",path:"src/ui/icons/Hamburger.tsx#Hamburger"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/styles/media.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F$:()=>bigScreen,Zm:()=>bigScreenPx,aZ:()=>vSmallScreen,xC:()=>smallScreen,z4:()=>smallScreenPx});const smallScreenPx=1024,bigScreenPx=2e3,vSmallScreen="(max-width: 500px)",smallScreen=`(max-width: ${smallScreenPx}px)`,bigScreen=`(min-width: ${smallScreenPx}px)`}}]);
//# sourceMappingURL=681.f63d47a6.iframe.bundle.js.map