"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[5634],{"./src/common/helpers/array.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ct:()=>flat,G:()=>arrayToObject,Kl:()=>findLastIndex,NV:()=>insertElementAtIndex,ey:()=>distinctBy,s:()=>take,z2:()=>notEmpty});const arrayToObject=(arr,keyF,valueF)=>{const ret={};return arr&&keyF?(arr.forEach(v=>{const k=keyF(v);ret[k]=valueF(v)}),ret):ret},flat=arr=>[].concat(...arr),take=(array,num)=>{const safeNum=Math.max(0,Math.min(num,array.length));return{part:array.slice(0,safeNum),rest:array.slice(safeNum)}},notEmpty=value=>null!=value&&!1!==value&&""!==value;function distinctBy(data,key,ignoreEmpty){if(!data||0===data.length)return data;const hashSet=new Set;return data.filter(x=>{let keyVal;return keyVal="string"==typeof key?x[key]:key(x),!(!keyVal&&ignoreEmpty)&&(!hashSet.has(keyVal)&&(hashSet.add(keyVal),!0))})}function findLastIndex(arr,predicate){for(let i=arr.length-1;i>=0;i--)if(predicate(arr[i],i,arr))return i;return-1}const insertElementAtIndex=(arr,element,index)=>[...arr.slice(0,index),element,...arr.slice(index)]},"./src/common/helpers/math.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cz:()=>toFixedDown,RM:()=>sumArray,gO:()=>rangePercentage});function sumArray(array){return array.reduce((a,b)=>a+b,0)}function toFixedDown(num,scale){if(!`${num}`.includes("e"))return+`${Math.round(`${num}e+${scale}`)}e-${scale}`;const arr=`${num}`.split("e");let sig="";return+arr[1]+scale>0&&(sig="+"),+`${Math.round(`${+arr[0]}e${sig}${+arr[1]+scale}`)}e-${scale}`}function rangePercentage({value,min,max}){const v=function clamp({value,min,max}){return value<min?min:value>max?max:value}({value,min,max}),r=(v-min)/(max-min);return isNaN(r)?0:r}},"./src/common/helpers/object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>copy,oh:()=>removeUndefValuesFromObject});const removeUndefValuesFromObject=orig=>{const ret={};return Object.entries(orig).forEach(([k,v])=>{null!=v&&(ret[k]=v)}),ret},copy=v=>JSON.parse(JSON.stringify(v))},"./src/ui/components/BarChart/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>BarChart});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),useTooltip=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/helpers/useTooltip.tsx")),common=__webpack_require__("./src/ui/styles/common.tsx"),styles=__webpack_require__("./src/ui/styles/index.ts");const Base=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 100%;
  cursor: default;
  position: relative;
`,Title=emotion_styled_browser_esm.A.div`
  position: absolute;
  left: 0.25rem;
`,Item=({data,className,onMouseMove,onMouseLeave,maxWidth,style})=>(0,jsx_runtime.jsxs)(Base,{className,onMouseMove,onMouseLeave,style,"data-type":"bcb-item",children:[(0,jsx_runtime.jsx)(Title,{style:{color:style.color,filter:(0,styles.W6)(style.backgroundColor),whiteSpace:"nowrap"},children:data.name}),data.values.map(v=>(0,jsx_runtime.jsx)("div",{"data-barchartitem-key":v.name,style:{height:"100%",width:v.value/maxWidth*100+"%",backgroundColor:v.colour},children:" "},v.name)),(0,jsx_runtime.jsx)("div",{style:{height:"100%",flexGrow:1,backgroundColor:"transparent"},children:" "})]});Item.__docgenInfo={description:"",methods:[],displayName:"Item",props:{data:{required:!0,tsType:{name:"IBarChartData"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onMouseMove:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLDivElement"}],raw:"MouseEventHandler<HTMLDivElement>"},description:""},onMouseLeave:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLDivElement"}],raw:"MouseEventHandler<HTMLDivElement>"},description:""},maxWidth:{required:!0,tsType:{name:"number"},description:""},style:{required:!0,tsType:{name:"IVarStyles"},description:""}}};var array=__webpack_require__("./src/common/helpers/array.ts"),math=__webpack_require__("./src/common/helpers/math.ts"),object=__webpack_require__("./src/common/helpers/object.ts");const getLegendItems=({data,selectedKey})=>{const min=.1*data.total,part=(0,array.s)(data.values.filter(r=>r.value>min),4).part,rest=(0,object.C)(data.values).filter(r=>!part.find(p=>p.name===r.name));if(selectedKey){const pi=part.findIndex(r=>r.name===selectedKey),ri=rest.findIndex(r=>r.name===selectedKey);-1===pi&&-1!==ri&&(part.push(rest[ri]),rest.splice(ri,1))}const restTotal=(0,math.RM)(rest.map(s=>s.value));return{part,rest,restTotal}},Legend_Base=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: column;
`,Bar=emotion_styled_browser_esm.A.div`
  width: 100%;
  height: 1rem;
  display: flex;
  flex-flow: row;
  position: relative;
  margin-bottom: 0.25rem;
`,Line=emotion_styled_browser_esm.A.div`
  position: absolute;
  top: calc(50% - 1px);
  height: 2px;
  left: 0;
  right: 0;
`,Numbers=emotion_styled_browser_esm.A.div`
  width: 100%;
  height: 1rem;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  z-index: 1;
`,Items=emotion_styled_browser_esm.A.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  position: relative;
  justify-content: space-between;
`,Legend_Item=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: row;
  position: relative;
  align-items: center;
  flex-basis: 25%;
`,Col=emotion_styled_browser_esm.A.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.25rem;
`,Legend=({data,maxWidth,style})=>{const items=[0];maxWidth>10&&(items.push(Math.floor(.25*maxWidth)),items.push(Math.floor(.5*maxWidth)),items.push(Math.floor(.75*maxWidth))),items.push(maxWidth);const keys=(0,array.ey)((0,array.Ct)(data.map(data=>getLegendItems({data}).part.map(v=>({colour:v.colour,name:v.name})))),s=>s.name).sort((a,b)=>a.name<b.name?-1:1);return(0,jsx_runtime.jsxs)(Legend_Base,{style,children:[(0,jsx_runtime.jsxs)(Bar,{children:[(0,jsx_runtime.jsx)(Line,{style:{background:style.backgroundColor,color:style.color}}),(0,jsx_runtime.jsx)(Numbers,{children:items.map(i=>(0,jsx_runtime.jsx)("span",{style:{backgroundColor:style.backgroundColor,color:style.color},children:i},i))})]}),keys.length>1&&(0,jsx_runtime.jsx)(Items,{children:keys.map(k=>(0,jsx_runtime.jsxs)(Legend_Item,{children:[(0,jsx_runtime.jsx)(Col,{style:{backgroundColor:k.colour}}),k.name]},k.name))})]})};Legend.__docgenInfo={description:"",methods:[],displayName:"Legend",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"IBarChartData"}],raw:"IBarChartData[]"},description:""},maxWidth:{required:!0,tsType:{name:"number"},description:""},style:{required:!0,tsType:{name:"IVarStyles"},description:""}}};const TooltipContent_Base=emotion_styled_browser_esm.A.div`
  padding: 0.5rem;
`,TooltipContent_Title=emotion_styled_browser_esm.A.div`
  font-weight: bold;
`,Row=emotion_styled_browser_esm.A.div`
  width: 100%;
  display: flex;
`,ItemTitle=emotion_styled_browser_esm.A.span`
  &[data-selected='true'] {
    font-weight: bold;
    text-decoration: underline;
  }
`,Total=emotion_styled_browser_esm.A.span`
  margin-left: auto;
  padding-left: 0.5rem;

  &[data-selected='true'] {
    font-weight: bold;
    text-decoration: underline;
  }
`,TooltipContent=({data,selectedKey,style})=>{const{part,rest,restTotal}=getLegendItems({data,selectedKey});return(0,jsx_runtime.jsxs)(TooltipContent_Base,{style:{...style,border:`solid 1px ${style.borderColor}`},children:[(0,jsx_runtime.jsx)(TooltipContent_Title,{children:data.name}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)("span",{children:"total"}),(0,jsx_runtime.jsx)(Total,{children:data.total})]}),part.map(v=>(0,jsx_runtime.jsxs)(Row,{style:{color:v.colour},children:[(0,jsx_runtime.jsx)(ItemTitle,{"data-selected":selectedKey===v.name,children:v.name}),(0,jsx_runtime.jsx)(Total,{"data-selected":selectedKey===v.name,children:v.value})]},v.name)),rest.length>0&&(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsxs)("span",{children:[rest.length," more"]}),(0,jsx_runtime.jsx)(Total,{children:restTotal})]})]})};TooltipContent.__docgenInfo={description:"",methods:[],displayName:"TooltipContent",props:{data:{required:!0,tsType:{name:"IBarChartData"},description:""},selectedKey:{required:!1,tsType:{name:"string"},description:""},style:{required:!0,tsType:{name:"IVarStyles"},description:""}}};const BarChartBase=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin-top: 0.5rem;
  position: relative;
`,ItemStyled=(0,emotion_styled_browser_esm.A)(Item)`
  margin-bottom: 0.75rem;
  height: auto;
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
  }
`,BarChart=({data:dataRaw,style:sRaw,className})=>{const style=(0,common.QS)(sRaw),UT=(0,useTooltip.f)(),maxWidth=Math.max(...dataRaw.map(a=>a.total));return(0,jsx_runtime.jsxs)(BarChartBase,{"data-type":"bcb",style,className,children:[(0,jsx_runtime.jsx)(UT.Comp,{pos:UT.pos,children:({data})=>(0,jsx_runtime.jsx)(TooltipContent,{...data,style})}),dataRaw.map(data=>(0,jsx_runtime.jsx)(ItemStyled,{style,data,maxWidth,onMouseLeave:()=>UT.setPos(void 0),onMouseMove:element=>{const selectedKey=document.elementFromPoint(element.pageX,element.pageY)?.getAttribute("data-barchartitem-key")??"";UT.setPos({element,parent:element.currentTarget.closest("[data-type='bcb']"),data:{selectedKey,data}})}},data.name)),(0,jsx_runtime.jsx)(Legend,{data:dataRaw,maxWidth,style})]})};BarChart.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"IBarChartData"}],raw:"IBarChartData[]"},description:""},style:{required:!1,tsType:{name:"Partial",elements:[{name:"IVarStyles"}],raw:"Partial<IVarStyles>"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/ui/helpers/useTooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>useTooltip});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom/index.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: absolute;
  z-index: 10;
`,Comp=({pos,children})=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_2__.createRef)(),[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();if((0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{if(!ref.current||size)return;const tooltipWidth=Math.max(ref.current.clientWidth,ref.current.scrollWidth),tooltipHeight=Math.max(ref.current.clientHeight,ref.current.scrollHeight);0!==tooltipHeight&&0!==tooltipWidth&&setSize({tooltipWidth,tooltipHeight})},[ref,size]),!pos)return null;let left,right,top,bottom;if(size){left=pos.x+5;const newRight=pos.parentWidth-pos.x+5;pos.x+5+size.tooltipWidth>pos.parentWidth&&(left=void 0,right=newRight),top=pos.y+5,top+size.tooltipHeight>pos.parentHeight&&(top=pos.hasParent?void 0:pos.parentHeight-size.tooltipHeight,bottom=pos.parentHeight-pos.y),right&&right+size.tooltipWidth>pos.parentWidth&&(pos.hasParent&&(right=void 0),left=0),bottom&&bottom+size.tooltipHeight>pos.parentHeight&&(pos.hasParent&&(bottom=void 0),top=0)}const Content=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{"data-type":"tooltip-content",ref,style:{left,right,top,bottom,...!pos.hasParent&&{position:"fixed"},...!size&&{zIndex:-1}},children:children(pos,size)}),e=document.querySelector(`#${pos.portalId}`);return!pos.hasParent&&e?(0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)(Content,e):Content},useTooltip=p=>{const portalId=p?.portalId||"ag-tooltip-portal",[pos,setPosRaw]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{if(document.querySelectorAll(`#${portalId}`).length>0)return;const d=document.createElement("div");return d.id=portalId,document.body.appendChild(d),()=>{try{document.querySelector(`#${portalId}`)?.remove()}catch(e){}}},[]);return{Comp,setPos:p=>{if(!p)return void setPosRaw(void 0);let parentTop=0,parentLeft=0,parentWidth=document.body.clientWidth,parentHeight=document.body.clientHeight,x=0,y=0;p.parent?(({top:parentTop,left:parentLeft,width:parentWidth,height:parentHeight}=p.parent.getBoundingClientRect()),x=p.element.pageX-parentLeft,y=p.element.pageY-parentTop):(parentWidth=window.innerWidth,parentHeight=window.innerHeight,x=p.element.clientX,y=p.element.clientY);const p2={cursor:p.element,data:p.data,parentWidth,parentHeight,x,y,hasParent:!!p.parent,portalId};setPosRaw(p2)},pos}}},"./src/ui/styles/colours.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M8:()=>colours,Ot:()=>getColourWheel});const colours={mainLight:"rgb(255,255,255)",lightest:"rgb(247,247,247)",darker:"rgb(0,0,0,0.1)",lighter:"rgb(234,234,234)",dark:"rgb(23,25,23)",charcoal:"rgb(50,50,50)",lightCharcoal:"rgb(154,154,154)",orangeRed:"#d65873",orange:"#e88070",yellow:"rgb(255,206,109)",lightBlue:"rgb(90,129,255)",lightGreen:"rgb(75,236,120)",lightGreen2:"rgb(14, 165, 0)",darkGreen:"#228B22",peach:"rgb(245,169,169)",purple:"rgb(173,121,255)",notificationBlue:"#4d76ff",notificationBlue2:"#002ab3",notificationBlue3:"rgb(230,238,246)",gradient:"---generated---"};var left,right;colours.gradient=(left=colours.orangeRed,right=colours.orange,`linear-gradient(to right, ${left}, ${right})`);const colourWheel=["rgb(11,132,165)","rgb(246,200,95)","rgb(111,78,124)","rgb(157,216,102)","rgb(202,71,47)","rgb(255,160,86)","rgb(141,221,208)"],getColourWheel=i=>colourWheel[i%colourWheel.length]},"./src/ui/styles/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dn:()=>NoTextSelect,QS:()=>getVarStyles,W6:()=>HardOutlineFilter,gu:()=>HardOutline,mG:()=>noDrag,tJ:()=>TextOverflowEllipsis,z9:()=>bounce});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_colours__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/styles/colours.ts");const HardOutline=(outlineColour="white",sizePx=1)=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH`\
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
`,raw=>({...raw,color:raw?.color??"var(--main-fg)",backgroundColor:raw?.backgroundColor??"var(--main-bg)",borderColor:raw?.borderColor??"var(--main-bg-mid)"}))},"./src/ui/styles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W6:()=>common.W6,BQ:()=>media.BQ,z9:()=>common.z9,M8:()=>colours.M8,Ot:()=>colours.Ot,UN:()=>media.UN});var colours=__webpack_require__("./src/ui/styles/colours.ts"),common=__webpack_require__("./src/ui/styles/common.tsx"),media=__webpack_require__("./src/ui/styles/media.ts"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");emotion_styled_browser_esm.A.div`
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
`},"./src/ui/styles/media.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BQ:()=>bigScreen,SO:()=>vSmallScreen,UN:()=>smallScreen,do:()=>bigScreenPx,kX:()=>smallScreenPx});const smallScreenPx=1024,bigScreenPx=2e3,vSmallScreen="(max-width: 500px)",smallScreen=`(max-width: ${smallScreenPx}px)`,bigScreen=`(min-width: ${smallScreenPx}px)`},"./stories/BarChart.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Primary2:()=>Primary2,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_src_ui_components_BarChart__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/components/BarChart/index.tsx"));const base={title:"UI/BarChart",component:_src_ui_components_BarChart__WEBPACK_IMPORTED_MODULE_2__.E},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_ui_components_BarChart__WEBPACK_IMPORTED_MODULE_2__.E,{...args})}),Primary=Template.bind({}),Primary2=Template.bind({});Primary.args={data:[{name:"REALLY LONG VALUE REALLY LONG VALUE REALLY LONG VALUE REALLY LONG VALUE REALLY LONG VALUE REALLY LONG VALUE REALLY LONG VALUE",total:16,values:[{colour:"red",name:"n1",value:3},{colour:"red",name:"n2",value:3},{colour:"red",name:"n3",value:3},{colour:"red",name:"n4",value:3},{colour:"red",name:"n5",value:1},{colour:"red",name:"n6",value:1},{colour:"red",name:"n7",value:1},{colour:"red",name:"n8",value:1}]}],style:{backgroundColor:"white",borderColor:"#ccc",color:"#111"}},Primary2.args={data:[{name:"n1",total:16,values:[{colour:"red",name:"n1",value:3},{colour:"red",name:"n2",value:3},{colour:"red",name:"n3",value:3},{colour:"red",name:"n4",value:3},{colour:"red",name:"n5",value:1},{colour:"red",name:"n6",value:1},{colour:"red",name:"n7",value:1},{colour:"red",name:"n8",value:1}]}],style:{backgroundColor:"black",borderColor:"#333",color:"white"}};const __WEBPACK_DEFAULT_EXPORT__=base,__namedExportsOrder=["Primary","Primary2"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <div>\n    <BarChart {...args} />\n  </div>",...Primary.parameters?.docs?.source}}},Primary2.parameters={...Primary2.parameters,docs:{...Primary2.parameters?.docs,source:{originalSource:"args => <div>\n    <BarChart {...args} />\n  </div>",...Primary2.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=BarChart-stories.4ff292f6.iframe.bundle.js.map