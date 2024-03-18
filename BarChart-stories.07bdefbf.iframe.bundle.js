/*! For license information please see BarChart-stories.07bdefbf.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[1208],{"./node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{iv:()=>css});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");var _emotion_serialize__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@emotion+serialize@1.1.3/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");__webpack_require__("./node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__.O)(args)}},"./stories/BarChart.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Primary2:()=>Primary2,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _src_ui_components_BarChart__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/BarChart/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const base={title:"UI/BarChart",component:_src_ui_components_BarChart__WEBPACK_IMPORTED_MODULE_1__.BarChart},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_ui_components_BarChart__WEBPACK_IMPORTED_MODULE_1__.BarChart,{...args});Template.displayName="Template";const Primary=Template.bind({}),Primary2=Template.bind({});Primary.args={data:[{name:"n1",total:16,values:[{colour:"red",name:"n1",value:3},{colour:"red",name:"n2",value:3},{colour:"red",name:"n3",value:3},{colour:"red",name:"n4",value:3},{colour:"red",name:"n5",value:1},{colour:"red",name:"n6",value:1},{colour:"red",name:"n7",value:1},{colour:"red",name:"n8",value:1}]}],style:{backgroundColor:"white",borderColor:"#ccc",color:"#111"}},Primary2.args={data:[{name:"n1",total:16,values:[{colour:"red",name:"n1",value:3},{colour:"red",name:"n2",value:3},{colour:"red",name:"n3",value:3},{colour:"red",name:"n4",value:3},{colour:"red",name:"n5",value:1},{colour:"red",name:"n6",value:1},{colour:"red",name:"n7",value:1},{colour:"red",name:"n8",value:1}]}],style:{backgroundColor:"black",borderColor:"#333",color:"white"}};const __WEBPACK_DEFAULT_EXPORT__=base;Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...Primary.parameters?.docs?.source}}},Primary2.parameters={...Primary2.parameters,docs:{...Primary2.parameters?.docs,source:{originalSource:"args => <BarChart {...args} />",...Primary2.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Primary2"]},"./src/common/helpers/array.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$H:()=>flat,Dw:()=>notEmpty,FB:()=>arrayToObject,YK:()=>insertElementAtIndex,dP:()=>distinctBy,qn:()=>take,qr:()=>findLastIndex});const arrayToObject=(arr,keyF,valueF)=>{const ret={};return arr&&keyF?(arr.forEach((v=>{const k=keyF(v);ret[k]=valueF(v)})),ret):ret},flat=arr=>[].concat(...arr),take=(array,num)=>{const ret=JSON.parse(JSON.stringify(array));return{part:ret.slice(0,num),rest:ret.slice(num)}},notEmpty=value=>null!=value&&!1!==value&&""!==value;function distinctBy(data,key,ignoreEmpty){if(!data||0===data.length)return data;const hashSet=new Set;return data.filter((x=>{let keyVal;return keyVal="string"==typeof key?x[key]:key(x),!(!keyVal&&ignoreEmpty)&&(!hashSet.has(keyVal)&&(hashSet.add(keyVal),!0))}))}function findLastIndex(arr,predicate){for(let i=arr.length-1;i>=0;i--)if(predicate(arr[i],i,arr))return i;return-1}const insertElementAtIndex=(arr,element,index)=>[...arr.slice(0,index),element,...arr.slice(index)]},"./src/common/helpers/math.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P0:()=>sumArray,tb:()=>toFixedDown,vL:()=>rangePercentage});function sumArray(array){return array.reduce(((a,b)=>a+b),0)}function toFixedDown(num,scale){if(!`${num}`.includes("e"))return+`${Math.round(`${num}e+${scale}`)}e-${scale}`;const arr=`${num}`.split("e");let sig="";return+arr[1]+scale>0&&(sig="+"),+`${Math.round(`${+arr[0]}e${sig}${+arr[1]+scale}`)}e-${scale}`}function rangePercentage({value,min,max}){const v=function clamp({value,min,max}){return value<min?min:value>max?max:value}({value,min,max}),r=(v-min)/(max-min);return isNaN(r)?0:r}},"./src/ui/components/BarChart/Base.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>BarChart});var emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),useTooltip=(__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("./src/ui/helpers/useTooltip.tsx")),common=__webpack_require__("./src/ui/styles/common.tsx"),styles=__webpack_require__("./src/ui/styles/index.ts"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Base=emotion_styled_browser_esm.Z.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 100%;
  cursor: default;
  position: relative;
`,Title=emotion_styled_browser_esm.Z.div`
  position: absolute;
  left: 0.25rem;
`,Item=({data,className,onMouseMove,onMouseLeave,maxWidth,style})=>(0,jsx_runtime.jsxs)(Base,{className,onMouseMove,onMouseLeave,style,children:[(0,jsx_runtime.jsx)(Title,{style:{color:style.color,filter:(0,styles.wV)(style.backgroundColor)},children:data.name}),data.values.map((v=>(0,jsx_runtime.jsx)("div",{"data-barchartitem-key":v.name,style:{height:"100%",width:v.value/maxWidth*100+"%",backgroundColor:v.colour},children:" "},v.name))),(0,jsx_runtime.jsx)("div",{style:{height:"100%",flexGrow:1,backgroundColor:"transparent"},children:" "})]});Item.displayName="Item";try{Item.displayName="Item",Item.__docgenInfo={description:"",displayName:"Item",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"IBarChartData"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!0,type:{name:"IVarStyles"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/BarChart/Item.tsx#Item"]={docgenInfo:Item.__docgenInfo,name:"Item",path:"src/ui/components/BarChart/Item.tsx#Item"})}catch(__react_docgen_typescript_loader_error){}var array=__webpack_require__("./src/common/helpers/array.ts"),math=__webpack_require__("./src/common/helpers/math.ts");const getLegendItems=({data,selectedKey})=>{const min=.1*data.total,part=(0,array.qn)(data.values.filter((r=>r.value>min)),4).part,rest=JSON.parse(JSON.stringify(data.values)).filter((r=>!part.find((p=>p.name===r.name))));if(selectedKey){const pi=part.findIndex((r=>r.name===selectedKey)),ri=rest.findIndex((r=>r.name===selectedKey));-1===pi&&-1!==ri&&(part.push(rest[ri]),rest.splice(ri,1))}const restTotal=(0,math.P0)(rest.map((s=>s.value)));return{part,rest,restTotal}},Legend_Base=emotion_styled_browser_esm.Z.div`
  display: flex;
  flex-flow: column;
`,Bar=emotion_styled_browser_esm.Z.div`
  width: 100%;
  height: 1rem;
  display: flex;
  flex-flow: row;
  position: relative;
  margin-bottom: 0.25rem;
`,Line=emotion_styled_browser_esm.Z.div`
  position: absolute;
  top: calc(50% - 1px);
  height: 2px;
  left: 0;
  right: 0;
`,Numbers=emotion_styled_browser_esm.Z.div`
  width: 100%;
  height: 1rem;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  z-index: 1;
`,Items=emotion_styled_browser_esm.Z.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  position: relative;
  justify-content: space-between;
`,Legend_Item=emotion_styled_browser_esm.Z.div`
  display: flex;
  flex-flow: row;
  position: relative;
  align-items: center;
  flex-basis: 25%;
`,Col=emotion_styled_browser_esm.Z.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.25rem;
`,Legend=({data,maxWidth,style})=>{const items=[0];maxWidth>10&&(items.push(Math.floor(.25*maxWidth)),items.push(Math.floor(.5*maxWidth)),items.push(Math.floor(.75*maxWidth))),items.push(maxWidth);const keys=(0,array.dP)((0,array.$H)(data.map((data=>getLegendItems({data}).part.map((v=>({colour:v.colour,name:v.name})))))),(s=>s.name)).sort(((a,b)=>a.name<b.name?-1:1));return(0,jsx_runtime.jsxs)(Legend_Base,{style,children:[(0,jsx_runtime.jsxs)(Bar,{children:[(0,jsx_runtime.jsx)(Line,{style:{background:style.backgroundColor,color:style.color}}),(0,jsx_runtime.jsx)(Numbers,{children:items.map((i=>(0,jsx_runtime.jsx)("span",{style:{backgroundColor:style.backgroundColor,color:style.color},children:i},i)))})]}),keys.length>1&&(0,jsx_runtime.jsx)(Items,{children:keys.map((k=>(0,jsx_runtime.jsxs)(Legend_Item,{children:[(0,jsx_runtime.jsx)(Col,{style:{backgroundColor:k.colour}}),k.name]},k.name)))})]})};Legend.displayName="Legend";try{Legend.displayName="Legend",Legend.__docgenInfo={description:"",displayName:"Legend",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"IBarChartData[]"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!0,type:{name:"IVarStyles"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/BarChart/Legend.tsx#Legend"]={docgenInfo:Legend.__docgenInfo,name:"Legend",path:"src/ui/components/BarChart/Legend.tsx#Legend"})}catch(__react_docgen_typescript_loader_error){}const TooltipContent_Base=emotion_styled_browser_esm.Z.div`
  padding: 0.5rem;
`,TooltipContent_Title=emotion_styled_browser_esm.Z.div`
  font-weight: bold;
`,Row=emotion_styled_browser_esm.Z.div`
  width: 100%;
  display: flex;
`,ItemTitle=emotion_styled_browser_esm.Z.span`
  &[data-selected='true'] {
    font-weight: bold;
    text-decoration: underline;
  }
`,Total=emotion_styled_browser_esm.Z.span`
  margin-left: auto;
  padding-left: 0.5rem;

  &[data-selected='true'] {
    font-weight: bold;
    text-decoration: underline;
  }
`,TooltipContent=({data,selectedKey,style})=>{const{part,rest,restTotal}=getLegendItems({data,selectedKey});return(0,jsx_runtime.jsxs)(TooltipContent_Base,{style:{...style,border:`solid 1px ${style.borderColor}`},children:[(0,jsx_runtime.jsx)(TooltipContent_Title,{children:data.name}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)("span",{children:"total"}),(0,jsx_runtime.jsx)(Total,{children:data.total})]}),part.map((v=>(0,jsx_runtime.jsxs)(Row,{style:{color:v.colour},children:[(0,jsx_runtime.jsx)(ItemTitle,{"data-selected":selectedKey===v.name,children:v.name}),(0,jsx_runtime.jsx)(Total,{"data-selected":selectedKey===v.name,children:v.value})]},v.name))),rest.length>0&&(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsxs)("span",{children:[rest.length," more"]}),(0,jsx_runtime.jsx)(Total,{children:restTotal})]})]})};TooltipContent.displayName="TooltipContent";try{TooltipContent.displayName="TooltipContent",TooltipContent.__docgenInfo={description:"",displayName:"TooltipContent",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"IBarChartData"}},selectedKey:{defaultValue:null,description:"",name:"selectedKey",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!0,type:{name:"IVarStyles"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/BarChart/TooltipContent.tsx#TooltipContent"]={docgenInfo:TooltipContent.__docgenInfo,name:"TooltipContent",path:"src/ui/components/BarChart/TooltipContent.tsx#TooltipContent"})}catch(__react_docgen_typescript_loader_error){}const BarChartBase=emotion_styled_browser_esm.Z.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin-top: 0.5rem;
  position: relative;
`,ItemStyled=(0,emotion_styled_browser_esm.Z)(Item)`
  margin-bottom: 0.75rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`,BarChart=({data:dataRaw,style:sRaw})=>{const style=(0,common.eN)(sRaw),UT=(0,useTooltip.l)(),maxWidth=Math.max(...dataRaw.map((a=>a.total)));return(0,jsx_runtime.jsxs)(BarChartBase,{"data-type":"bcb",style,children:[(0,jsx_runtime.jsx)(UT.Comp,{pos:UT.pos,children:p=>(0,jsx_runtime.jsx)(TooltipContent,{...p,style})}),dataRaw.map((data=>(0,jsx_runtime.jsx)(ItemStyled,{style,data,maxWidth,onMouseLeave:()=>UT.setPos(void 0),onMouseMove:element=>{const selectedKey=document.elementFromPoint(element.pageX,element.pageY)?.getAttribute("data-barchartitem-key")??"";UT.setPos({element,parent:element.currentTarget.closest("[data-type='bcb']"),data:{selectedKey,data}})}},data.name))),(0,jsx_runtime.jsx)(Legend,{data:dataRaw,maxWidth,style})]})};BarChart.displayName="BarChart";try{BarChart.displayName="BarChart",BarChart.__docgenInfo={description:"",displayName:"BarChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"IBarChartData[]"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"Partial<IVarStyles>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/BarChart/Base.tsx#BarChart"]={docgenInfo:BarChart.__docgenInfo,name:"BarChart",path:"src/ui/components/BarChart/Base.tsx#BarChart"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/components/BarChart/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BarChart:()=>_Base__WEBPACK_IMPORTED_MODULE_0__.v});var _Base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/ui/components/BarChart/Base.tsx"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/BarChart/types.ts");__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_1__,"Icon")&&__webpack_require__.d(__webpack_exports__,{Icon:function(){return _types__WEBPACK_IMPORTED_MODULE_1__.Icon}});try{BarChart.displayName="BarChart",BarChart.__docgenInfo={description:"",displayName:"BarChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"IBarChartData[]"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"Partial<IVarStyles>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/BarChart/index.tsx#BarChart"]={docgenInfo:BarChart.__docgenInfo,name:"BarChart",path:"src/ui/components/BarChart/index.tsx#BarChart"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/components/BarChart/types.ts":()=>{},"./src/ui/helpers/useTooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>useTooltip});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  position: absolute;
  z-index: 2;
`,Comp=({pos,children})=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)(),[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();if((0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(size?.p??!ref.current)||setSize({p:{tooltipWidth:ref.current.clientWidth,tooltipHeight:ref.current.clientHeight}})}),[ref,size]),!pos)return null;let left,right,top,bottom;return size?.p&&(left=pos.x+5,pos.x+size.p.tooltipWidth>pos.parentWidth&&(left=void 0,right=pos.parentWidth-pos.x+5),top=pos.y+5,top+size.p.tooltipHeight>pos.parentHeight&&(top=void 0,bottom=pos.parentHeight-pos.y)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Base,{ref,style:{left,right,top,bottom,...!size?.p&&{zIndex:-1}},children:children(pos.data)})};Comp.displayName="Comp";const useTooltip=()=>{const pos=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();return{Comp,setPos:p=>{if(!p)return void pos[1](void 0);const{top:parentTop,left:parentLeft,width:parentWidth,height:parentHeight}=p.parent?.getBoundingClientRect()??{width:0,height:0},x=p.element.pageX-(parentLeft??0),y=p.element.pageY-(parentTop??0),p2={cursor:p.element,data:p.data,parentWidth,parentHeight,x,y};pos[1](p2)},pos:pos[0]}}},"./src/ui/styles/colours.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{PT:()=>getColourWheel,sW:()=>colours});const colours={mainLight:"rgb(255,255,255)",lightest:"rgb(247,247,247)",darker:"rgb(0,0,0,0.1)",lighter:"rgb(234,234,234)",dark:"rgb(23,25,23)",charcoal:"rgb(50,50,50)",lightCharcoal:"rgb(154,154,154)",orangeRed:"#d65873",orange:"#e88070",yellow:"rgb(255,206,109)",lightBlue:"rgb(90,129,255)",lightGreen:"rgb(75,236,120)",lightGreen2:"rgb(14, 165, 0)",darkGreen:"#228B22",peach:"rgb(245,169,169)",purple:"rgb(173,121,255)",notificationBlue:"#4d76ff",notificationBlue2:"#002ab3",notificationBlue3:"rgb(230,238,246)",gradient:"---generated---"};var left,right;colours.gradient=(left=colours.orangeRed,right=colours.orange,`linear-gradient(to right, ${left}, ${right})`);const colourWheel=["rgb(11,132,165)","rgb(246,200,95)","rgb(111,78,124)","rgb(157,216,102)","rgb(202,71,47)","rgb(255,160,86)","rgb(141,221,208)"],getColourWheel=i=>colourWheel[i%colourWheel.length]},"./src/ui/styles/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Fe:()=>HardOutline,Jq:()=>noDrag,eN:()=>getVarStyles,iI:()=>TextOverflowEllipsis,rl:()=>bounce,uV:()=>NoTextSelect,wV:()=>HardOutlineFilter});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_colours__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/styles/colours.ts");const HardOutline=(outlineColour="white",sizePx=1)=>_emotion_react__WEBPACK_IMPORTED_MODULE_2__.iv`\
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
`,getVarStyles=raw=>({...raw,color:raw?.color??"var(--main-fg)",backgroundColor:raw?.backgroundColor??"var(--main-bg)",borderColor:raw?.borderColor??"var(--main-bg-mid)"});try{HardOutline.displayName="HardOutline",HardOutline.__docgenInfo={description:"function that returns css that gives a text outline drop shadow.",displayName:"HardOutline",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#HardOutline"]={docgenInfo:HardOutline.__docgenInfo,name:"HardOutline",path:"src/ui/styles/common.tsx#HardOutline"})}catch(__react_docgen_typescript_loader_error){}try{NoTextSelect.displayName="NoTextSelect",NoTextSelect.__docgenInfo={description:"disable user text selection",displayName:"NoTextSelect",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#NoTextSelect"]={docgenInfo:NoTextSelect.__docgenInfo,name:"NoTextSelect",path:"src/ui/styles/common.tsx#NoTextSelect"})}catch(__react_docgen_typescript_loader_error){}try{TextOverflowEllipsis.displayName="TextOverflowEllipsis",TextOverflowEllipsis.__docgenInfo={description:"enable text overflow",displayName:"TextOverflowEllipsis",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#TextOverflowEllipsis"]={docgenInfo:TextOverflowEllipsis.__docgenInfo,name:"TextOverflowEllipsis",path:"src/ui/styles/common.tsx#TextOverflowEllipsis"})}catch(__react_docgen_typescript_loader_error){}try{noDrag.displayName="noDrag",noDrag.__docgenInfo={description:"stop dragging of element",displayName:"noDrag",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#noDrag"]={docgenInfo:noDrag.__docgenInfo,name:"noDrag",path:"src/ui/styles/common.tsx#noDrag"})}catch(__react_docgen_typescript_loader_error){}try{bounce.displayName="bounce",bounce.__docgenInfo={description:"apply bounce effect given a condition",displayName:"bounce",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#bounce"]={docgenInfo:bounce.__docgenInfo,name:"bounce",path:"src/ui/styles/common.tsx#bounce"})}catch(__react_docgen_typescript_loader_error){}try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/ui/styles/common.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}try{getVarStyles.displayName="getVarStyles",getVarStyles.__docgenInfo={description:"",displayName:"getVarStyles",props:{color:{defaultValue:null,description:"default var(--main-fg)\nThe **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `canvastext`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |\n@see https://developer.mozilla.org/docs/Web/CSS/color",name:"color",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"default var(--main-bg)\nThe **`background-color`** CSS property sets the background color of an element.\n\n**Syntax**: `<color>`\n\n**Initial value**: `transparent`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |\n@see https://developer.mozilla.org/docs/Web/CSS/background-color",name:"backgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"default var(--main-bg-mid)\nThe **`border-color`** shorthand CSS property sets the color of an element's border.\n\n**Syntax**: `<color>{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |\n@see https://developer.mozilla.org/docs/Web/CSS/border-color",name:"borderColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/styles/common.tsx#getVarStyles"]={docgenInfo:getVarStyles.__docgenInfo,name:"getVarStyles",path:"src/ui/styles/common.tsx#getVarStyles"})}catch(__react_docgen_typescript_loader_error){}},"./src/ui/styles/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{wV:()=>common.wV,F$:()=>media.F$,rl:()=>common.rl,sW:()=>colours.sW,PT:()=>colours.PT,xC:()=>media.xC});var colours=__webpack_require__("./src/ui/styles/colours.ts"),common=__webpack_require__("./src/ui/styles/common.tsx"),media=__webpack_require__("./src/ui/styles/media.ts"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");emotion_styled_browser_esm.Z.div`
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
`},"./src/ui/styles/media.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F$:()=>bigScreen,Zm:()=>bigScreenPx,aZ:()=>vSmallScreen,xC:()=>smallScreen,z4:()=>smallScreenPx});const smallScreenPx=1024,bigScreenPx=2e3,vSmallScreen="(max-width: 500px)",smallScreen=`(max-width: ${smallScreenPx}px)`,bigScreen=`(min-width: ${smallScreenPx}px)`},"./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var reactIs=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent}},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{"use strict";var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")}}]);
//# sourceMappingURL=BarChart-stories.07bdefbf.iframe.bundle.js.map