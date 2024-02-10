"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[4953],{"./src/ui/styles/colours.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PT:()=>getColourWheel,sW:()=>colours});const colours={mainLight:"rgb(255,255,255)",lightest:"rgb(247,247,247)",darker:"rgb(0,0,0,0.1)",lighter:"rgb(234,234,234)",dark:"rgb(23,25,23)",charcoal:"rgb(50,50,50)",lightCharcoal:"rgb(154,154,154)",orangeRed:"#d65873",orange:"#e88070",yellow:"rgb(255,206,109)",lightBlue:"rgb(90,129,255)",lightGreen:"rgb(75,236,120)",lightGreen2:"rgb(14, 165, 0)",darkGreen:"#228B22",peach:"rgb(245,169,169)",purple:"rgb(173,121,255)",notificationBlue:"#4d76ff",notificationBlue2:"#002ab3",notificationBlue3:"rgb(230,238,246)",gradient:"---generated---"};var left,right;colours.gradient=(left=colours.orangeRed,right=colours.orange,`linear-gradient(to right, ${left}, ${right})`);const colourWheel=["rgb(11,132,165)","rgb(246,200,95)","rgb(111,78,124)","rgb(157,216,102)","rgb(202,71,47)","rgb(255,160,86)","rgb(141,221,208)"],getColourWheel=i=>colourWheel[i%colourWheel.length]},"./src/ui/styles/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fe:()=>HardOutline,Jq:()=>noDrag,iI:()=>TextOverflowEllipsis,rl:()=>bounce,uV:()=>NoTextSelect});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.55_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.55_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_colours__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/styles/colours.ts");const HardOutline=(outlineColour="white",sizePx=1)=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.iv`\
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
`;try{HardOutline.displayName="HardOutline",HardOutline.__docgenInfo={description:"function that returns css that gives a text outline drop shadow.",displayName:"HardOutline",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#HardOutline"]={docgenInfo:HardOutline.__docgenInfo,name:"HardOutline",path:"src/ui/styles/common.tsx#HardOutline"})}catch(__react_docgen_typescript_loader_error){}try{NoTextSelect.displayName="NoTextSelect",NoTextSelect.__docgenInfo={description:"disable user text selection",displayName:"NoTextSelect",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#NoTextSelect"]={docgenInfo:NoTextSelect.__docgenInfo,name:"NoTextSelect",path:"src/ui/styles/common.tsx#NoTextSelect"})}catch(__react_docgen_typescript_loader_error){}try{TextOverflowEllipsis.displayName="TextOverflowEllipsis",TextOverflowEllipsis.__docgenInfo={description:"enable text overflow",displayName:"TextOverflowEllipsis",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#TextOverflowEllipsis"]={docgenInfo:TextOverflowEllipsis.__docgenInfo,name:"TextOverflowEllipsis",path:"src/ui/styles/common.tsx#TextOverflowEllipsis"})}catch(__react_docgen_typescript_loader_error){}try{noDrag.displayName="noDrag",noDrag.__docgenInfo={description:"stop dragging of element",displayName:"noDrag",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#noDrag"]={docgenInfo:noDrag.__docgenInfo,name:"noDrag",path:"src/ui/styles/common.tsx#noDrag"})}catch(__react_docgen_typescript_loader_error){}try{bounce.displayName="bounce",bounce.__docgenInfo={description:"apply bounce effect given a condition",displayName:"bounce",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#bounce"]={docgenInfo:bounce.__docgenInfo,name:"bounce",path:"src/ui/styles/common.tsx#bounce"})}catch(__react_docgen_typescript_loader_error){}try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/ui/styles/common.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/styles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F$:()=>media.F$,rl:()=>common.rl,sW:()=>colours.sW,PT:()=>colours.PT,xC:()=>media.xC});var colours=__webpack_require__("./src/ui/styles/colours.ts"),common=__webpack_require__("./src/ui/styles/common.tsx"),media=__webpack_require__("./src/ui/styles/media.ts"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.55_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");emotion_styled_browser_esm.Z.div`
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
`},"./src/ui/styles/media.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F$:()=>bigScreen,Zm:()=>bigScreenPx,aZ:()=>vSmallScreen,xC:()=>smallScreen,z4:()=>smallScreenPx});const smallScreenPx=1024,bigScreenPx=2e3,vSmallScreen="(max-width: 500px)",smallScreen=`(max-width: ${smallScreenPx}px)`,bigScreen=`(min-width: ${smallScreenPx}px)`}}]);
//# sourceMappingURL=TreeChart-single-stories.1bae3e77.iframe.bundle.js.map