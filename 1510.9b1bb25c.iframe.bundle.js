"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[1510],{"./src/common/helpers/array.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ct:()=>flat,G:()=>arrayToObject,Kl:()=>findLastIndex,NV:()=>insertElementAtIndex,ey:()=>distinctBy,s:()=>take,z2:()=>notEmpty});const arrayToObject=(arr,keyF,valueF)=>{const ret={};return arr&&keyF?(arr.forEach(v=>{const k=keyF(v);ret[k]=valueF(v)}),ret):ret},flat=arr=>[].concat(...arr),take=(array,num)=>{const safeNum=Math.max(0,Math.min(num,array.length));return{part:array.slice(0,safeNum),rest:array.slice(safeNum)}},notEmpty=value=>null!=value&&!1!==value&&""!==value;function distinctBy(data,key,ignoreEmpty){if(!data||0===data.length)return data;const hashSet=new Set;return data.filter(x=>{let keyVal;return keyVal="string"==typeof key?x[key]:key(x),!(!keyVal&&ignoreEmpty)&&(!hashSet.has(keyVal)&&(hashSet.add(keyVal),!0))})}function findLastIndex(arr,predicate){for(let i=arr.length-1;i>=0;i--)if(predicate(arr[i],i,arr))return i;return-1}const insertElementAtIndex=(arr,element,index)=>[...arr.slice(0,index),element,...arr.slice(index)]},"./src/ui/components/FlexRow/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>FlexRow});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;

  &[data-nowrap='true'] {
    flex-flow: row;
  }

  &[data-nogrow='true'] {
    flex-grow: 0;
  }
  &[data-nogrow='false'] {
    width: 100%;
    height: 100%;
    flex-grow: 1;
  }

  &[data-center='true'] {
    justify-content: center;
    align-items: center;
  }
`,FlexRow=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{"data-nowrap":props.noWrap??!1,"data-nogrow":props.noGrow??!1,"data-center":props.center??!1,...props,children:props.children});FlexRow.__docgenInfo={description:"",methods:[],displayName:"FlexRow",props:{noGrow:{required:!1,tsType:{name:"boolean"},description:""},center:{required:!1,tsType:{name:"boolean"},description:""},noWrap:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},break:{required:!1,tsType:{name:"union",raw:"'small' | 'vsmall'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'vsmall'"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/ui/components/TextEdit/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C0:()=>CheckboxEdit,mF:()=>TextEdit});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),useOnClickOutside=__webpack_require__("./src/ui/helpers/useOnClickOutside.ts"),Save=__webpack_require__("./src/ui/icons/Save.tsx"),Undo=__webpack_require__("./src/ui/icons/Undo.tsx"),common=__webpack_require__("./src/ui/styles/common.tsx"),FlexRow=__webpack_require__("./src/ui/components/FlexRow/index.tsx"),emotion_react_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colours=__webpack_require__("./src/ui/styles/colours.ts");const ValueBox=emotion_styled_browser_esm.A.div`
  padding: 0.5rem;

  display: flex;
  position: relative;
  align-items: center;
  background-color: transparent;

  justify-content: flex-start;
  flex-grow: 1;
  width: calc(100% - 1rem - 2px); //padding + border
  border: solid 1px transparent;

  &[data-pointer='true'] {
    cursor: pointer;
  }
  &[data-nogrow='true'] {
    flex-grow: 0;
  }
`,valueCss=emotion_react_browser_esm.AH`
  width: 100%;
  height: 100%;
  padding: 0;
  word-break: break-all;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;

  &[data-type='checkbox'] {
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  }
`,ValueInputCB=emotion_styled_browser_esm.A.input`
  ${valueCss};
`,IconD=emotion_styled_browser_esm.A.div`
  z-index: 1;
  font-size: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  cursor: pointer;
  svg {
    fill: ${colours.M8.notificationBlue};
  }
`,iconRight={right:"0"},iconLeft={right:"1.5rem"},Icons=(0,emotion_styled_browser_esm.A)(FlexRow.Y)`
  position: absolute;
  top: 0;
  right: -2rem;
`,CheckboxEdit=({defaultValue,onSubmit,noGrow=!1,allowUndo=!1,rightSpan,className})=>{const ref=(0,react.useRef)(null),[value,setValue]=(0,react.useState)(defaultValue);(0,react.useEffect)(()=>{setValue(defaultValue)},[defaultValue]);const valueChange=value!==defaultValue;return(0,useOnClickOutside.W)({ref,moveMouseOutside:!1},()=>{valueChange&&onSubmit(value)}),(0,jsx_runtime.jsxs)(ValueBox,{...common.mG,className,style:{cursor:"pointer",width:"fit-content",flexGrow:0},ref,"data-nogrow":noGrow,onClick:e=>{allowUndo?setValue(!value):onSubmit(!value),e.stopPropagation()},children:[(0,jsx_runtime.jsx)(ValueInputCB,{type:"checkbox","data-type":"checkbox",checked:value,onKeyDown:e=>{"Enter"===e.key&&value!==defaultValue&&onSubmit(value),e.stopPropagation()},onChange:e=>{allowUndo?setValue(!value):onSubmit(!value),e.stopPropagation()}}),allowUndo&&value!==defaultValue&&(0,jsx_runtime.jsxs)(Icons,{center:!0,children:[(0,jsx_runtime.jsx)(IconD,{style:iconLeft,onClick:e=>{value!==defaultValue&&onSubmit(value),e.stopPropagation()},children:(0,jsx_runtime.jsx)(Save.e,{})}),(0,jsx_runtime.jsx)(IconD,{style:{...iconRight,fill:"#134563"},onClick:e=>{setValue(defaultValue),e.stopPropagation()},children:(0,jsx_runtime.jsx)(Undo.V,{})})]}),rightSpan||""]})};CheckboxEdit.__docgenInfo={description:"",methods:[],displayName:"CheckboxEdit",props:{className:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!0,tsType:{name:"boolean"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"val"}],return:{name:"void"}}},description:""},noGrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},allowUndo:{required:!1,tsType:{name:"boolean"},description:"if true, will add undo button after changes. if false, will submit after every keypress. default false",defaultValue:{value:"false",computed:!1}},rightSpan:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"display to right of CB"}}};var dom=__webpack_require__("./src/ui/helpers/dom.ts"),Pencil=__webpack_require__("./src/ui/icons/Pencil.tsx");const Base=emotion_styled_browser_esm.A.div`
  /* position: absolute;
  bottom: 0.5rem;
  right: 0.5rem; */
`,TextEditLengthBox=({min,max})=>{let color="black";return min/max>.55&&(color="indianred"),min===max&&(color="red"),(0,jsx_runtime.jsxs)(Base,{style:{color},children:[min,"/",max]})};TextEditLengthBox.__docgenInfo={description:"",methods:[],displayName:"TextEditLengthBox",props:{min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""}}};const ValueReadonly=emotion_styled_browser_esm.A.div`
  ${valueCss};
  word-break: break-word;
  flex-basis: calc(100% - 3rem);
`,basecss=emotion_react_browser_esm.AH`
  outline: none;
  border: 0;
  word-break: break-word;
  ${valueCss};
  resize: none;
  overflow: hidden;
  background-color: white;
  color: black;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  &::placeholder {
    color: #bbb;
  }
`,ValueTextArea=emotion_styled_browser_esm.A.textarea`
  ${basecss}
  &[data-editing='true'] {
    min-height: 5rem;
  }
`,ValueTextBox=emotion_styled_browser_esm.A.input`
  ${basecss};
`,ValueBoxEdit=(0,emotion_styled_browser_esm.A)(ValueBox)`
  border: solid 1px #ccc;
`,Right=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: row;
  align-content: center;
  &[data-singleline='false'] {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
  }
`,Icon=emotion_styled_browser_esm.A.div`
  width: 1.5rem;
  display: flex;
  cursor: pointer;
  &:hover {
    filter: saturate(3);
  }
`,TextEdit=(0,react.forwardRef)((p,ref)=>{const{defaultValue="",defaultEditing,disableEdit=!1,singleLine=!1,noGrow=!1,allowUndo=!0}=p,divRef=(0,react.useRef)(null),taref=(0,react.useRef)(null),[value,setValue]=(0,react.useState)(defaultValue),[editing,setEditingRaw]=(0,react.useState)(!!defaultEditing),valueChange=value!==defaultValue;(0,react.useImperativeHandle)(ref,()=>({setValue:v=>{v!==value&&setValue(v)},focus:()=>taref.current?.focus(),getValue:()=>taref.current?.value})),(0,useOnClickOutside.W)({disabled:null===p.onClickOutsideWithNoValue||disableEdit,ref:divRef,moveMouseOutside:!1},()=>{valueChange?p.onSubmit(value,!1):(!disableEdit&&p.onClickOutsideWithNoValue&&p.onClickOutsideWithNoValue(),!disableEdit&&editing&&defaultEditing||editing&&setEditingRaw(!1))});const setEditing=(0,react.useCallback)(b=>{setEditingRaw(b),p.onEditingChange&&p.onEditingChange(b)},[p]);if((0,react.useEffect)(()=>{defaultEditing?.focus&&taref.current&&taref.current.focus()},[defaultEditing?.focus]),!editing||disableEdit)return(0,jsx_runtime.jsxs)(ValueBox,{...common.mG,className:p.className,"data-editing":"false",onClick:()=>p.onClickNotEditing?.(),"data-pointer":p.onClickNotEditing?"true":"false","data-nogrow":noGrow,...(0,dom.r8)(p),children:[p.leftContent??null,(0,jsx_runtime.jsx)(ValueReadonly,{"data-type":"text",children:value||(0,jsx_runtime.jsx)("span",{style:{color:"#ccc"},children:p.placeholder})}),(0,jsx_runtime.jsx)(Right,{children:!disableEdit&&(0,jsx_runtime.jsx)(Icon,{style:iconRight,onClick:e=>{e.stopPropagation(),setEditing(!0)},children:(0,jsx_runtime.jsx)(Pencil.g,{})})})]});const Comp=singleLine?ValueTextBox:ValueTextArea;return(0,jsx_runtime.jsxs)(ValueBoxEdit,{...common.mG,className:p.className,"data-editing":"true",ref,tabIndex:-1,"data-nogrow":noGrow,...(0,dom.r8)(p),children:[p.leftContent??null,(0,jsx_runtime.jsx)(Comp,{tabIndex:editing?0:void 0,"data-editing":"true","data-valuechange":valueChange.toString(),ref:taref,"data-type":"text",value,onChange:v=>{setValue(v.currentTarget.value),allowUndo||p.onSubmit(v.currentTarget.value,!1)},placeholder:p.placeholder,rows:singleLine?1:void 0,maxLength:p.maxLength,onKeyDown:e=>{!1!==p.onKeyDown?.(e)?singleLine&&e.code.endsWith("Enter")&&p.onSubmit(value,!0):e.preventDefault()}}),p.maxLength&&(0,jsx_runtime.jsx)(Right,{"data-singleline":singleLine,children:(0,jsx_runtime.jsx)(TextEditLengthBox,{min:value.length,max:p.maxLength})}),allowUndo&&(0,jsx_runtime.jsxs)(Right,{children:[valueChange&&(0,jsx_runtime.jsx)(Icon,{style:iconLeft,onClick:()=>p.onSubmit(value,!1),children:(0,jsx_runtime.jsx)(Save.e,{})}),(valueChange||editing!==!!defaultEditing)&&(0,jsx_runtime.jsx)(Icon,{style:{...iconRight,fill:"#134563"},onClick:()=>{setEditing(!!defaultEditing),setValue(defaultValue)},children:(0,jsx_runtime.jsx)(Undo.V,{})})]})]})});TextEdit.__docgenInfo={description:"",methods:[{name:"setValue",docblock:null,modifiers:[],params:[{name:"v",optional:!1,type:null}],returns:null},{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"getValue",docblock:null,modifiers:[],params:[],returns:null}],displayName:"TextEdit",props:{singleLine:{required:!1,tsType:{name:"boolean"},description:"forces single row input style. will also enable 'Enter' to auto submit"},className:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"default value of field. default empty"},defaultEditing:{required:!1,tsType:{name:"signature",type:"object",raw:"{ focus?: boolean }",signature:{properties:[{key:"focus",value:{name:"boolean",required:!1}}]}},description:"if truthy will enable text edit mode by default. if focus is true, will also focus on open"},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(\n  val: string,\n  /**\n   * if true, was passed by pressing Enter\n   */\n  enterPressed: boolean,\n) => void",signature:{arguments:[{type:{name:"string"},name:"val"},{type:{name:"boolean"},name:"enterPressed"}],return:{name:"void"}}},description:""},disableEdit:{required:!1,tsType:{name:"boolean"},description:"disable edit text functionality"},placeholder:{required:!1,tsType:{name:"string"},description:""},onEditingChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(editing: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"editing"}],return:{name:"void"}}},description:"when the user edits or unselects edit"},onClickOutsideWithNoValue:{required:!1,tsType:{name:"union",raw:"(() => void) | null",elements:[{name:"unknown"},{name:"null"}]},description:"if null will disable click outside"},onClickNotEditing:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},noGrow:{required:!1,tsType:{name:"boolean"},description:"if true, will not grow. default false"},attributes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}],raw:"Record<string, string | number | boolean>"},description:"will set these attributes directly on element. can put data-* here"},leftContent:{required:!1,tsType:{name:"JSX.Element"},description:"optional content at the left of the box"},allowUndo:{required:!1,tsType:{name:"boolean"},description:"if true, will add undo button after changes. if false, will submit after every keypress. default true"},maxLength:{required:!1,tsType:{name:"number"},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLTextAreaElement>) => boolean",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"boolean"}}},description:"if provided and return false, will cancel keydown"}}}},"./src/ui/helpers/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mO:()=>convertRemToPixels,nO:()=>isRightClick,r8:()=>filterDataProps});var _common_helpers_array__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/helpers/array.ts");const convertRemToPixels=rem=>{let fontSize="16px";return"undefined"!=typeof window&&(fontSize=getComputedStyle(document.documentElement).fontSize),rem*parseFloat(fontSize)},filterDataProps=p=>{const x=Object.entries(p).filter(r=>r[0].startsWith("data-")).map(r=>r);return(0,_common_helpers_array__WEBPACK_IMPORTED_MODULE_0__.G)(x,s=>s[0],s=>s[1])},isRightClick=event=>{let isRightMB=!1;return"which"in event?isRightMB=3==event.which:"button"in event&&(isRightMB=2==event.button),isRightMB}},"./src/ui/helpers/useOnClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>useOnClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/helpers/dom.ts");function useOnClickOutside(p,handler){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const listener=event=>{if(p.disabled&&"boolean"!=typeof p.disabled?p.disabled():p.disabled??!1)return;if((0,_dom__WEBPACK_IMPORTED_MODULE_1__.nO)(event))return;const el=p.ref.current;if(!el)return;let n=event.target,found=!1;for(;n;){if(n.isEqualNode(el)){found=!0;break}n=n.parentNode}found||handler(event)};return document.addEventListener("mousedown",listener),document.addEventListener("touchstart",listener),p.moveMouseOutside&&document.addEventListener("mousemove",listener),()=>{try{document.removeEventListener("mousedown",listener),document.removeEventListener("touchstart",listener),document.removeEventListener("mousemove",listener)}catch(e){}}},[p,handler])}},"./src/ui/icons/Pencil.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Pencil});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Pencil=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M9.6 40.4l2.5-9.9L27 15.6l7.4 7.4-14.9 14.9-9.9 2.5zm4.3-8.9l-1.5 6.1 6.1-1.5L31.6 23 27 18.4 13.9 31.5z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M17.8 37.3c-.6-2.5-2.6-4.5-5.1-5.1l.5-1.9c3.2.8 5.7 3.3 6.5 6.5l-1.9.5z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M29.298 19.287l1.414 1.414-13.01 13.02-1.414-1.412zM11 39l2.9-.7c-.3-1.1-1.1-1.9-2.2-2.2L11 39zM35 22.4L27.6 15l3-3 .5.1c3.6.5 6.4 3.3 6.9 6.9l.1.5-3.1 2.9zM30.4 15l4.6 4.6.9-.9c-.5-2.3-2.3-4.1-4.6-4.6l-.9.9z"})]});Pencil.__docgenInfo={description:"",methods:[],displayName:"Pencil"}},"./src/ui/icons/Save.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Save});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Save=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M50 12c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zm0 72c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34zm22.9-46.9c-.8-.8-2-.8-2.8 0L44.6 62.7 33.9 52c-.8-.8-2.1-.8-2.8 0-.8.8-.8 2.1 0 2.8l12.1 12.1c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l26.9-27c.8-.8.8-2 0-2.8z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill:"#00F",d:"M1644-1210V474H-140v-1684h1784m8-8H-148V482h1800v-1700z"})]});Save.__docgenInfo={description:"",methods:[],displayName:"Save"}},"./src/ui/icons/Undo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Undo});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Undo=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M32.1 51.9c-7.8 0-14.9-4.6-18.1-11.6l2.6-1.2c2.8 6 8.9 9.9 15.5 9.9 9.4 0 17-7.6 17-17s-7.6-17-17-17C25 15 19 19.4 16.5 26.4l-2.7-1c2.9-8.1 10-13.3 18.3-13.3C43.1 12.1 52 21 52 32s-9 19.9-19.9 19.9"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M24.4 27.4H12V15.1h3.1v9.2h9.3v3.1"})]})});Undo.__docgenInfo={description:"",methods:[],displayName:"Undo"}},"./src/ui/styles/colours.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M8:()=>colours,Ot:()=>getColourWheel});const colours={mainLight:"rgb(255,255,255)",lightest:"rgb(247,247,247)",darker:"rgb(0,0,0,0.1)",lighter:"rgb(234,234,234)",dark:"rgb(23,25,23)",charcoal:"rgb(50,50,50)",lightCharcoal:"rgb(154,154,154)",orangeRed:"#d65873",orange:"#e88070",yellow:"rgb(255,206,109)",lightBlue:"rgb(90,129,255)",lightGreen:"rgb(75,236,120)",lightGreen2:"rgb(14, 165, 0)",darkGreen:"#228B22",peach:"rgb(245,169,169)",purple:"rgb(173,121,255)",notificationBlue:"#4d76ff",notificationBlue2:"#002ab3",notificationBlue3:"rgb(230,238,246)",gradient:"---generated---"};var left,right;colours.gradient=(left=colours.orangeRed,right=colours.orange,`linear-gradient(to right, ${left}, ${right})`);const colourWheel=["rgb(11,132,165)","rgb(246,200,95)","rgb(111,78,124)","rgb(157,216,102)","rgb(202,71,47)","rgb(255,160,86)","rgb(141,221,208)"],getColourWheel=i=>colourWheel[i%colourWheel.length]},"./src/ui/styles/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dn:()=>NoTextSelect,QS:()=>getVarStyles,W6:()=>HardOutlineFilter,gu:()=>HardOutline,mG:()=>noDrag,tJ:()=>TextOverflowEllipsis,z9:()=>bounce});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_colours__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/styles/colours.ts");const HardOutline=(outlineColour="white",sizePx=1)=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH`\
filter: ${HardOutlineFilter(outlineColour,sizePx)};
`,HardOutlineFilter=(outlineColour="white",sizePx=1)=>{const px=`${sizePx}px`;return`drop-shadow(${px} ${px} 0px ${outlineColour})\n  drop-shadow(-${px} ${px} 0px ${outlineColour})\n  drop-shadow(${px} -${px} 0px ${outlineColour})\n  drop-shadow(-${px} -${px} 0px ${outlineColour})`},NoTextSelect=_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH`
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`,TextOverflowEllipsis=lines=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,noDrag={draggable:!1,onDragStart:e=>{e.preventDefault(),e.stopPropagation()},onTouchStart:e=>{e.preventDefault(),e.stopPropagation()}},bounce=bounceattr=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH`
  transition:
    opacity 0.2s ease,
    transform 0.2s cubic-bezier(0.02, 1.5, 0.74, 1.23);
  transform-origin: 50% 50%;
  transform: translateY(-5px);
  &[${bounceattr}='true'] {
    transform: translateY(0);
  }
`,getVarStyles=(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div`
  background-color: white;
  margin: 0.5rem;

  position: relative;
  border-radius: 0.5rem;
  max-width: 40rem;
  padding: 1rem;
  border: solid 2px ${_colours__WEBPACK_IMPORTED_MODULE_1__.M8.lighter};
`,raw=>({...raw,color:raw?.color??"var(--main-fg)",backgroundColor:raw?.backgroundColor??"var(--main-bg)",borderColor:raw?.borderColor??"var(--main-bg-mid)"}))}}]);
//# sourceMappingURL=1510.9b1bb25c.iframe.bundle.js.map