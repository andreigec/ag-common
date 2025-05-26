"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[7135],{"./stories/Icons.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Icons_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");__webpack_require__("./src/ui/components/Accordion/index.tsx"),__webpack_require__("./src/ui/components/BarChart/index.tsx"),__webpack_require__("./src/ui/components/BorderGradient/index.tsx"),__webpack_require__("./src/ui/components/Button/index.tsx"),__webpack_require__("./src/ui/components/Chevron/index.tsx"),__webpack_require__("./src/ui/components/Close/index.tsx"),__webpack_require__("./src/ui/components/Confirm/index.tsx"),__webpack_require__("./src/ui/components/DarkMode/index.tsx"),__webpack_require__("./src/ui/components/DropdownList/index.tsx"),__webpack_require__("./src/ui/components/FlexColumn/index.tsx"),__webpack_require__("./src/ui/components/FlexRow/index.tsx");var Icon=__webpack_require__("./src/ui/components/Icon/index.tsx"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),media=__webpack_require__("./src/ui/styles/media.ts");emotion_styled_browser_esm.A.img`
  object-fit: contain;
  width: 100%;
  height: 100%;

  min-width: 5rem;
  min-height: 5rem;

  max-width: 100%;
  max-height: 100%;

  &[data-smalltop='true'] {
    @media ${media.UN} {
      order: -1;
    }
  }
  @media ${media.UN} {
    max-width: 50vw;
    max-height: 50vh;

    &[data-bigonly='true'] {
      display: none;
    }
    &[data-small='true'] {
      max-width: 25vw;
      max-height: 25vh;
    }
  }

  @media ${media.BQ} {
    max-width: 50vw;
    max-height: 50vh;
    &[data-smallonly='true'] {
      display: none;
    }
    &[data-small='true'] {
      max-width: 30vw;
      max-height: 30vh;
    }
  }
`;var debounce=__webpack_require__("./src/ui/helpers/debounce.ts"),dom=__webpack_require__("./src/ui/helpers/dom.ts");const InfiniteScroll_Base=emotion_styled_browser_esm.A.div`
  overflow-y: auto;
  height: 100%;
  width: 100%;
  &[data-no-scroll='true'] {
    overflow-y: initial;
  }
`,LoadMore=emotion_styled_browser_esm.A.div`
  cursor: pointer;
  text-decoration: underline;
`;(p=>{const{incrementNumber=10,scrollDisabled=!1}=p,ref=(0,react.createRef)(),[startIndex]=(0,react.useState)(p.startIndex??0),[endIndex,setEndIndex]=(0,react.useState)(startIndex+incrementNumber),[startScrollTop,setStartScrollTop]=(0,react.useState)(0);(0,react.useEffect)((()=>{setStartScrollTop(ref.current.scrollTop)}),[]);const sliced=p.children.slice(0,endIndex),lastDisplayIndex=Math.min(p.children.length,endIndex),renderResultsLine=p.renderResultsLine?.(lastDisplayIndex,p.children.length);return(0,jsx_runtime.jsxs)(InfiniteScroll_Base,{"data-no-scroll":scrollDisabled,ref,className:p.className,onScroll:e=>{if(scrollDisabled)return;const{scrollTop}=e.currentTarget;(e=>{const{scrollTop,clientHeight,scrollHeight}=e.currentTarget;scrollTop+clientHeight===scrollHeight&&setEndIndex(endIndex+incrementNumber)})(e),(0,debounce.s)((()=>{setStartScrollTop(scrollTop),p.onScroll?.({scrollTop,isDown:startScrollTop<scrollTop})}),{key:"in-scr",time:50})},...(0,dom.r8)(p),children:[sliced,renderResultsLine,lastDisplayIndex<p.children.length&&(0,jsx_runtime.jsx)(LoadMore,{onClick:()=>setEndIndex(endIndex+incrementNumber),children:"Load More?"})]})}).__docgenInfo={description:"",methods:[],displayName:"InfiniteScroll",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},startIndex:{required:!1,tsType:{name:"number"},description:""},onScroll:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: { scrollTop: number; isDown: boolean }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ scrollTop: number; isDown: boolean }",signature:{properties:[{key:"scrollTop",value:{name:"number",required:!0}},{key:"isDown",value:{name:"boolean",required:!0}}]}},name:"e"}],return:{name:"void"}}},description:""},incrementNumber:{required:!1,tsType:{name:"number"},description:"how many to initially show, and to add per scroll. default 10"},scrollDisabled:{required:!1,tsType:{name:"boolean"},description:"if true, can only scroll by button press. default false"},renderResultsLine:{required:!1,tsType:{name:"signature",type:"function",raw:"(min: number, max: number) => React.ReactNode",signature:{arguments:[{type:{name:"number"},name:"min"},{type:{name:"number"},name:"max"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"eg 'showing x of y results'"}}};__webpack_require__("./src/ui/components/KebabDots/index.tsx"),__webpack_require__("./src/ui/components/LineChart/index.tsx"),__webpack_require__("./src/ui/components/Loader/index.tsx"),__webpack_require__("./src/ui/components/Markdown/index.tsx"),__webpack_require__("./src/ui/components/MinSidebar/index.tsx"),__webpack_require__("./src/ui/components/Modal/index.tsx"),__webpack_require__("./src/ui/components/OpenApiCodeBlock/OpenApiCodeBlock.tsx"),__webpack_require__("./src/ui/components/PieChart/index.tsx"),__webpack_require__("./src/ui/components/ProgressBar/index.tsx"),__webpack_require__("./src/ui/components/Prompt/Dialog.tsx"),__webpack_require__("./src/ui/components/Prompt/Modal.tsx");emotion_styled_browser_esm.A.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  &:before {
    content: '';
    position: relative;
    display: block;
    width: 150%;
    height: 150%;
    aspect-ratio: 4/3;
    box-sizing: border-box;
    border-radius: 45px;
    background-color: var(--var-bg-col);
    animation: pulse-ring 1s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  }

  @keyframes pulse-ring {
    0% {
      transform: scale(0.33);
    }
    80%,
    100% {
      opacity: 0;
    }
  }

  @keyframes pulse-dot {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
`,emotion_styled_browser_esm.A.div`
  position: absolute;
  z-index: 1;
  background-color: var(--var-bg-col);
  border-radius: 15px;
  box-shadow: 0 0 8px var(--var-bg-col);
  min-width: 1rem;
  min-height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;__webpack_require__("./src/ui/components/RadioGroup/index.tsx");emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: row;
  flex-grow: 1;
  width: 100%;
  @media ${media.BQ} {
    &[data-nowrap='true'] {
      flex-flow: row;
    }
  }
  &[data-break='small'] {
    @media ${media.UN} {
      flex-flow: column;
    }
  }

  &[data-break='vsmall'] {
    @media ${media.SO} {
      flex-flow: column;
    }
  }

  &[data-center='true'] {
    justify-content: center;
    align-items: center;
  }
  &[data-nogrow='true'] {
    flex-grow: 0;
    width: auto;
  }
`;__webpack_require__("./src/ui/components/Search/index.tsx"),__webpack_require__("./src/ui/components/Sidebar/index.tsx"),__webpack_require__("./src/ui/components/SparkLine/index.tsx"),__webpack_require__("./src/ui/components/TabBar/index.tsx"),__webpack_require__("./src/ui/components/Table/index.tsx"),__webpack_require__("./src/ui/components/TextEdit/index.tsx"),__webpack_require__("./src/ui/components/TextWithButton/index.tsx"),__webpack_require__("./src/ui/components/TimelineChart/index.tsx"),__webpack_require__("./src/ui/components/Toast/index.tsx"),__webpack_require__("./src/ui/components/TreeChart/index.tsx"),__webpack_require__("./src/ui/components/UserImage/index.tsx");var icons=__webpack_require__("./src/ui/icons/index.tsx");const Primary=(()=>(0,jsx_runtime.jsx)("div",{children:Object.entries(icons).map((([name,value])=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexFlow:"row",alignItems:"center",backgroundColor:"#ccc"},children:[name,"-",(0,jsx_runtime.jsx)(Icon.I,{style:{width:"2rem",height:"2rem",fill:"red"},children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"object"==typeof value?value:value({style:{fill:"green"}})})})]},name)))})).bind({});Primary.args={};const Icons_stories={title:"UI/Icons"},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"() => <div>\n    {Object.entries(Icons).map(([name, value]) => <div style={{\n    display: 'flex',\n    flexFlow: 'row',\n    alignItems: 'center',\n    backgroundColor: '#ccc'\n  }} key={name}>\n        {name}-\n        <Icon style={{\n      width: '2rem',\n      height: '2rem',\n      fill: 'red'\n    }}>\n          <>\n            {typeof value === 'object' ? value : value({\n          style: {\n            fill: 'green'\n          }\n        })}\n          </>\n        </Icon>\n      </div>)}\n  </div>",...Primary.parameters?.docs?.source}}}},"./src/ui/components/Accordion/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>Accordion});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_Chevron__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/components/Chevron/index.tsx");const SBase=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div``,SSubTitle=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-right: 0.5rem;
`,SRollUpRow=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  cursor: pointer;
`,Accordion=({title,children,open,setOpen,chevronColour="white",className})=>{const[openSt,setOpenSt]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),controlled=void 0!==open;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SBase,{className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SRollUpRow,{onClick:()=>{setOpen?.(controlled?!open:!openSt),controlled||setOpenSt(!openSt)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SSubTitle,{children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Chevron__WEBPACK_IMPORTED_MODULE_3__.c,{point:openSt?"up":"down",colour:chevronColour})]}),(controlled?open:openSt)&&children]})};Accordion.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{children:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},title:{required:!0,tsType:{name:"string"},description:""},open:{required:!1,tsType:{name:"boolean"},description:"controlled component if provided"},setOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"called when openness changes"},chevronColour:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'white'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/ui/components/BarChart/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>BarChart});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),useTooltip=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/helpers/useTooltip.tsx")),common=__webpack_require__("./src/ui/styles/common.tsx"),styles=__webpack_require__("./src/ui/styles/index.ts");const Base=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 100%;
  cursor: default;
  position: relative;
`,Title=emotion_styled_browser_esm.A.div`
  position: absolute;
  left: 0.25rem;
`,Item=({data,className,onMouseMove,onMouseLeave,maxWidth,style})=>(0,jsx_runtime.jsxs)(Base,{className,onMouseMove,onMouseLeave,style,"data-type":"bcb-item",children:[(0,jsx_runtime.jsx)(Title,{style:{color:style.color,filter:(0,styles.W6)(style.backgroundColor)},children:data.name}),data.values.map((v=>(0,jsx_runtime.jsx)("div",{"data-barchartitem-key":v.name,style:{height:"100%",width:v.value/maxWidth*100+"%",backgroundColor:v.colour},children:" "},v.name))),(0,jsx_runtime.jsx)("div",{style:{height:"100%",flexGrow:1,backgroundColor:"transparent"},children:" "})]});Item.__docgenInfo={description:"",methods:[],displayName:"Item",props:{data:{required:!0,tsType:{name:"IBarChartData"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onMouseMove:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLDivElement"}],raw:"MouseEventHandler<HTMLDivElement>"},description:""},onMouseLeave:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLDivElement"}],raw:"MouseEventHandler<HTMLDivElement>"},description:""},maxWidth:{required:!0,tsType:{name:"number"},description:""},style:{required:!0,tsType:{name:"IVarStyles"},description:""}}};var array=__webpack_require__("./src/common/helpers/array.ts"),math=__webpack_require__("./src/common/helpers/math.ts"),object=__webpack_require__("./src/common/helpers/object.ts");const getLegendItems=({data,selectedKey})=>{const min=.1*data.total,part=(0,array.s)(data.values.filter((r=>r.value>min)),4).part,rest=(0,object.C)(data.values).filter((r=>!part.find((p=>p.name===r.name))));if(selectedKey){const pi=part.findIndex((r=>r.name===selectedKey)),ri=rest.findIndex((r=>r.name===selectedKey));-1===pi&&-1!==ri&&(part.push(rest[ri]),rest.splice(ri,1))}const restTotal=(0,math.RM)(rest.map((s=>s.value)));return{part,rest,restTotal}},Legend_Base=emotion_styled_browser_esm.A.div`
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
`,Legend=({data,maxWidth,style})=>{const items=[0];maxWidth>10&&(items.push(Math.floor(.25*maxWidth)),items.push(Math.floor(.5*maxWidth)),items.push(Math.floor(.75*maxWidth))),items.push(maxWidth);const keys=(0,array.ey)((0,array.Ct)(data.map((data=>getLegendItems({data}).part.map((v=>({colour:v.colour,name:v.name})))))),(s=>s.name)).sort(((a,b)=>a.name<b.name?-1:1));return(0,jsx_runtime.jsxs)(Legend_Base,{style,children:[(0,jsx_runtime.jsxs)(Bar,{children:[(0,jsx_runtime.jsx)(Line,{style:{background:style.backgroundColor,color:style.color}}),(0,jsx_runtime.jsx)(Numbers,{children:items.map((i=>(0,jsx_runtime.jsx)("span",{style:{backgroundColor:style.backgroundColor,color:style.color},children:i},i)))})]}),keys.length>1&&(0,jsx_runtime.jsx)(Items,{children:keys.map((k=>(0,jsx_runtime.jsxs)(Legend_Item,{children:[(0,jsx_runtime.jsx)(Col,{style:{backgroundColor:k.colour}}),k.name]},k.name)))})]})};Legend.__docgenInfo={description:"",methods:[],displayName:"Legend",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"IBarChartData"}],raw:"IBarChartData[]"},description:""},maxWidth:{required:!0,tsType:{name:"number"},description:""},style:{required:!0,tsType:{name:"IVarStyles"},description:""}}};const TooltipContent_Base=emotion_styled_browser_esm.A.div`
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
`,TooltipContent=({data,selectedKey,style})=>{const{part,rest,restTotal}=getLegendItems({data,selectedKey});return(0,jsx_runtime.jsxs)(TooltipContent_Base,{style:{...style,border:`solid 1px ${style.borderColor}`},children:[(0,jsx_runtime.jsx)(TooltipContent_Title,{children:data.name}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)("span",{children:"total"}),(0,jsx_runtime.jsx)(Total,{children:data.total})]}),part.map((v=>(0,jsx_runtime.jsxs)(Row,{style:{color:v.colour},children:[(0,jsx_runtime.jsx)(ItemTitle,{"data-selected":selectedKey===v.name,children:v.name}),(0,jsx_runtime.jsx)(Total,{"data-selected":selectedKey===v.name,children:v.value})]},v.name))),rest.length>0&&(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsxs)("span",{children:[rest.length," more"]}),(0,jsx_runtime.jsx)(Total,{children:restTotal})]})]})};TooltipContent.__docgenInfo={description:"",methods:[],displayName:"TooltipContent",props:{data:{required:!0,tsType:{name:"IBarChartData"},description:""},selectedKey:{required:!1,tsType:{name:"string"},description:""},style:{required:!0,tsType:{name:"IVarStyles"},description:""}}};const BarChartBase=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin-top: 0.5rem;
  position: relative;
`,ItemStyled=(0,emotion_styled_browser_esm.A)(Item)`
  margin-bottom: 0.75rem;
  height: auto;

  &:last-of-type {
    margin-bottom: 0;
  }
`,BarChart=({data:dataRaw,style:sRaw,className})=>{const style=(0,common.QS)(sRaw),UT=(0,useTooltip.f)(),maxWidth=Math.max(...dataRaw.map((a=>a.total)));return(0,jsx_runtime.jsxs)(BarChartBase,{"data-type":"bcb",style,className,children:[(0,jsx_runtime.jsx)(UT.Comp,{pos:UT.pos,children:({data})=>(0,jsx_runtime.jsx)(TooltipContent,{...data,style})}),dataRaw.map((data=>(0,jsx_runtime.jsx)(ItemStyled,{style,data,maxWidth,onMouseLeave:()=>UT.setPos(void 0),onMouseMove:element=>{const selectedKey=document.elementFromPoint(element.pageX,element.pageY)?.getAttribute("data-barchartitem-key")??"";UT.setPos({element,parent:element.currentTarget.closest("[data-type='bcb']"),data:{selectedKey,data}})}},data.name))),(0,jsx_runtime.jsx)(Legend,{data:dataRaw,maxWidth,style})]})};BarChart.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"IBarChartData"}],raw:"IBarChartData[]"},description:""},style:{required:!1,tsType:{name:"Partial",elements:[{name:"IVarStyles"}],raw:"Partial<IVarStyles>"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/ui/components/BorderGradient/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>BorderGradient});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_common_helpers_object__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/common/helpers/object.ts")),_styles_colours__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/styles/colours.ts");const BGcss=_emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH`
  max-height: calc(100% - 6px);
  display: flex;
  border: 0;
  padding: 3px;
  background-image:
    linear-gradient(white, white),
    linear-gradient(to bottom right, var(--left), var(--right));
  background-origin: border-box;
  background-clip: content-box, border-box;
  overflow: hidden;
  &[data-ccnd='true'] {
    &:hover {
      filter: saturate(3);
    }
  }
`,BGLink=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  ${BGcss};
`,BGALink=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.a`
  ${BGcss};
`,Padding=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-flow: column;
  border: 0;
  flex-grow: 1;
`,FeatureBoxFill=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(Padding)`
  background-image: linear-gradient(to bottom right, var(--left), var(--right));
  color: ${_styles_colours__WEBPACK_IMPORTED_MODULE_3__.M8.mainLight};
  flex-grow: 1;
`,BorderGradient=({left=_styles_colours__WEBPACK_IMPORTED_MODULE_3__.M8.orange,right=_styles_colours__WEBPACK_IMPORTED_MODULE_3__.M8.orangeRed,children,radius="2rem",fill=!1,padding="2rem",className,onClick,href,target,rel,noGrow=!1,disabled=!1,canClick=!1})=>{const CCND=canClick&&!disabled,style=(0,_common_helpers_object__WEBPACK_IMPORTED_MODULE_5__.oh)({flexGrow:noGrow?0:1,"--left":left,"--right":right,borderRadius:radius,filter:disabled?"grayscale(1)":null,cursor:CCND?"pointer":"default"}),props={onClick:e=>!disabled&&onClick&&onClick(e),className,href,target,rel,canClick:!!onClick||canClick,style,"data-ccnd":CCND},child=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[!fill&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Padding,{style:{padding},children}),fill&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FeatureBoxFill,{style:{padding},children})]});return href?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BGALink,{...props,children:child}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BGLink,{...props,children:child})};BorderGradient.__docgenInfo={description:"",methods:[],displayName:"BorderGradient",props:{canClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},noGrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},fill:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radius:{required:!1,tsType:{name:"string"},description:"default 2rem",defaultValue:{value:"'2rem'",computed:!1}},left:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#e88070'",computed:!1}},right:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#d65873'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},padding:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'2rem'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: IOnClick) => void",signature:{arguments:[{type:{name:"union",raw:"| React.MouseEvent<HTMLDivElement, MouseEvent>\n| React.MouseEvent<HTMLAnchorElement, MouseEvent>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement, MouseEvent>",elements:[{name:"HTMLDivElement"},{name:"MouseEvent"}]},{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement, MouseEvent>",elements:[{name:"HTMLAnchorElement"},{name:"MouseEvent"}]}]},name:"e"}],return:{name:"void"}}},description:""},href:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"string"},description:""},rel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./src/ui/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_styles_colours__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/ui/styles/colours.ts"));const ButtonBase=_emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  font-weight: bold;
  font-family: inherit;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  height: 3rem;
  line-height: 1rem;
  &:hover {
    filter: saturate(1.5);
  }
  padding-left: 1rem;
  padding-right: 1rem;
  color: white;

  &[data-disabled='true'] {
    cursor: default !important;
    background-color: #888 !important;
  }

  &[data-theme='green'] {
    background-color: ${_styles_colours__WEBPACK_IMPORTED_MODULE_3__.M8.darkGreen};
    &[data-invert='true'] {
      color: ${_styles_colours__WEBPACK_IMPORTED_MODULE_3__.M8.darkGreen};
      background-color: white;
      border: solid 1px ${_styles_colours__WEBPACK_IMPORTED_MODULE_3__.M8.darkGreen};
    }
  }

  &[data-theme='red'] {
    background-color: ${_styles_colours__WEBPACK_IMPORTED_MODULE_3__.M8.orangeRed};
    &[data-invert='true'] {
      color: ${_styles_colours__WEBPACK_IMPORTED_MODULE_3__.M8.orangeRed};
      background-color: white;
      border: solid 1px ${_styles_colours__WEBPACK_IMPORTED_MODULE_3__.M8.orangeRed};
    }
  }
`,BaseButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.button`
  ${ButtonBase}
`,BaseA=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.a`
  ${ButtonBase}
`,Button=props=>{const Component=props.href?BaseA:BaseButton;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{className:props.className,"data-invert":props.invert,"data-disabled":props.disabled??!1,role:"button",title:props.title||void 0,"data-theme":props.colourTheme??"green",...props,children:props.children})};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{title:{required:!1,tsType:{name:"string"},description:""},invert:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""},onKeyDown:{required:!1,tsType:{name:"KeyboardEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEventHandler<HTMLButtonElement>"},description:""},children:{required:!0,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},href:{required:!1,tsType:{name:"string"},description:""},colourTheme:{required:!1,tsType:{name:"union",raw:"'green' | 'red'",elements:[{name:"literal",value:"'green'"},{name:"literal",value:"'red'"}]},description:""}}}},"./src/ui/components/Confirm/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>ConfirmDialog,u:()=>ConfirmModal});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),client=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom/client.js")),log=__webpack_require__("./src/common/helpers/log.ts"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Button=__webpack_require__("./src/ui/components/Button/index.tsx"),FlexColumn=__webpack_require__("./src/ui/components/FlexColumn/index.tsx"),FlexRow=__webpack_require__("./src/ui/components/FlexRow/index.tsx"),Modal=__webpack_require__("./src/ui/components/Modal/Modal.tsx");const Base=emotion_styled_browser_esm.A.div`
  width: 95vw;
  max-width: 30rem;
  height: 50vh;
  max-height: 15rem;
`,Content=(0,emotion_styled_browser_esm.A)(FlexColumn.I)`
  padding: 1rem;
  height: calc(100% - 2rem);
  width: calc(100% - 2rem);
`,TopText=emotion_styled_browser_esm.A.div`
  font-weight: bold;
  border-bottom: solid 1px #ccc;
  padding-bottom: 0.25rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,BottomText=emotion_styled_browser_esm.A.div`
  padding-bottom: 0.25rem;
  font-size: 1.1rem;
`,Bottom=(0,emotion_styled_browser_esm.A)(FlexRow.Y)`
  margin-top: auto;
  justify-content: flex-end;
  > button:first-of-type {
    margin-right: 1rem;
  }
`,ConfirmModal=({onSubmit,bottomText,topText,okText="OK",cancelText="Cancel",style})=>(0,jsx_runtime.jsx)(Modal.a,{position:"center",topPosition:"center",open:!0,setOpen:()=>onSubmit(!1),showCloseButton:!1,closeOnClickOutside:!1,children:(0,jsx_runtime.jsx)(Base,{children:(0,jsx_runtime.jsxs)(Content,{style,children:[topText&&(0,jsx_runtime.jsx)(TopText,{children:topText}),(0,jsx_runtime.jsx)(BottomText,{children:bottomText}),(0,jsx_runtime.jsxs)(Bottom,{noGrow:!0,children:[(0,jsx_runtime.jsx)(Button.$,{onClick:()=>onSubmit(!0),children:okText}),(0,jsx_runtime.jsx)(Button.$,{invert:!0,onClick:()=>onSubmit(!1),children:cancelText})]})]})})});ConfirmModal.__docgenInfo={description:"",methods:[],displayName:"ConfirmModal",props:{onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"v"}],return:{name:"void"}}},description:""},topText:{required:!1,tsType:{name:"string"},description:"default (undefined)"},bottomText:{required:!0,tsType:{name:"string"},description:""},okText:{required:!1,tsType:{name:"string"},description:"default OK",defaultValue:{value:"'OK'",computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:"default Cancel",defaultValue:{value:"'Cancel'",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const ConfirmDialog=async({bottomText,topText,style})=>new Promise((res=>{if(0!==document.body.querySelectorAll("#ag-confirm-dialog").length)return(0,log.z3)("confirmDialog already open"),void res(!1);const wrapper=document.body.appendChild(document.createElement("div"));wrapper.id="ag-confirm-dialog";const root=(0,client.createRoot)(wrapper);root.render((0,jsx_runtime.jsx)(ConfirmModal,{bottomText,topText,onSubmit:v=>{try{res(v)}finally{try{root.unmount(),wrapper.remove()}catch(e){}}},style}))}))},"./src/ui/components/DarkMode/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{QQ:()=>DarkMode});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),use=__webpack_require__("./src/ui/helpers/cookie/use.ts"),icons=__webpack_require__("./src/ui/icons/index.tsx"),FlexColumn=__webpack_require__("./src/ui/components/FlexColumn/index.tsx"),Icon=__webpack_require__("./src/ui/components/Icon/index.tsx"),TDarkMode=function(TDarkMode){return TDarkMode[TDarkMode.dark=0]="dark",TDarkMode[TDarkMode.light=1]="light",TDarkMode[TDarkMode.system=2]="system",TDarkMode}({}),TDarkModeCalc=function(TDarkModeCalc){return TDarkModeCalc[TDarkModeCalc.dark=0]="dark",TDarkModeCalc[TDarkModeCalc.light=1]="light",TDarkModeCalc}({});const Base=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: row;
  &[data-mode='vert'] {
    flex-flow: column;
  }
  overflow: hidden;
  justify-content: space-between;
  border-radius: 2rem;
`,IconStyled=(0,emotion_styled_browser_esm.A)(Icon.I)`
  > svg {
    height: 60%;
  }
`,Label=(0,emotion_styled_browser_esm.A)(FlexColumn.I)`
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  &[data-selected='true'] {
    background-color: white;
    cursor: default;
  }
`,modes=[{mode:TDarkMode.dark,icon:icons.Moon},{mode:TDarkMode.system,icon:icons.Computer},{mode:TDarkMode.light,icon:icons.Sun}],DarkModeAux=({iconSize="2.5rem",className,mode,onSubmit,style,dm})=>{const[index,setIndex]=(0,react.useState)(modes.findIndex((d=>d.mode===dm.darkmode))),[fill,background]=((p,vert)=>{const deg=vert?"180deg":"90deg";switch(p){case TDarkMode.dark:{const d1="rgba(173,128,227,1)";return[d1,`linear-gradient(${deg}, ${d1} 0%, rgba(106,44,181,1) 76%)`]}case TDarkMode.light:{const l1="rgba(255,169,54,1)";return[l1,`linear-gradient(${deg}, ${l1} 0%, rgba(255,189,100,1) 76%)`]}case TDarkMode.system:return["green","green"]}})(modes[index].mode,"vert"===mode),twCalc=`calc(${iconSize} + ${iconSize} + ${iconSize} )`;return(0,jsx_runtime.jsx)(Base,{className,"data-mode":mode??"horiz",style:{...style,background,border:`solid 2px ${fill}`,width:twCalc,height:iconSize,..."vert"===mode&&{width:iconSize,height:twCalc}},children:modes.map(((v,i)=>{const selected=index===i;return(0,jsx_runtime.jsx)(Label,{"data-selected":selected,style:{width:iconSize,height:iconSize},onClick:()=>{index!==i&&(setIndex(i),(newDarkMode=>{let className="";newDarkMode===TDarkMode.dark?className+="dark-mode":newDarkMode===TDarkMode.light?className+="light-mode":className="";try{document.getElementsByTagName("html")[0].classList.remove("dark-mode"),document.getElementsByTagName("html")[0].classList.remove("light-mode"),className&&document.getElementsByTagName("html")[0].classList.add(className)}catch(e){}dm.setDarkmode(newDarkMode),onSubmit?.(newDarkMode)})(v.mode))},children:(0,jsx_runtime.jsx)(IconStyled,{children:v.icon({style:{fill:selected?fill:"white"}})})},i.toString())}))})},DarkMode=p=>{const dm=(({cookieDocument})=>{const[darkmode,setDarkmode]=(0,use.GH)({defaultValue:TDarkMode.system,name:"darkmode",cookieDocument,parse:v=>Number(v),stringify:v=>v.toString()});return{darkmode,setDarkmode,calcDarkMode:()=>{const isDarkMode=window.matchMedia("(prefers-color-scheme: dark)").matches;return darkmode===TDarkMode.system?isDarkMode?TDarkModeCalc.dark:TDarkModeCalc.light:darkmode===TDarkMode.dark?TDarkModeCalc.dark:TDarkModeCalc.light}}})({cookieDocument:p.cookieDocument});return DarkModeAux({...p,dm})};DarkModeAux.__docgenInfo={description:"shows darkmode toggle. Persists to cookie, and modifies html classList with either dark-mode or light-mode\nthis method has the darkmode passed in, so UseDarkMode can be used globally",methods:[],displayName:"DarkModeAux",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(p: TDarkMode) => void",signature:{arguments:[{type:{name:"TDarkMode"},name:"p"}],return:{name:"void"}}},description:""},mode:{required:!1,tsType:{name:"union",raw:"'vert' | 'horiz'",elements:[{name:"literal",value:"'vert'"},{name:"literal",value:"'horiz'"}]},description:"default horiz"},iconSize:{required:!1,tsType:{name:"string"},description:"default 2.5rem",defaultValue:{value:"'2.5rem'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},cookieDocument:{required:!0,tsType:{name:"string"},description:""},dm:{required:!0,tsType:{name:"IUseDarkMode"},description:""}}},DarkMode.__docgenInfo={description:"shows darkmode toggle. Persists to cookie, and modifies html classList with either dark-mode or light-mode",methods:[],displayName:"DarkMode",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(p: TDarkMode) => void",signature:{arguments:[{type:{name:"TDarkMode"},name:"p"}],return:{name:"void"}}},description:""},mode:{required:!1,tsType:{name:"union",raw:"'vert' | 'horiz'",elements:[{name:"literal",value:"'vert'"},{name:"literal",value:"'horiz'"}]},description:"default horiz"},iconSize:{required:!1,tsType:{name:"string"},description:"default 2.5rem"},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},cookieDocument:{required:!0,tsType:{name:"string"},description:""}}}},"./src/ui/components/FlexColumn/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>FlexColumn});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: relative;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  &[data-center='true'] {
    justify-content: center;
    align-items: center;
  }
  &[data-nogrow='true'] {
    flex-grow: 0;
    width: unset;
    height: unset;
  }
`,FlexColumn=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{"data-nogrow":props.noGrow??!1,"data-center":props.center??!1,...props,children:props.children});FlexColumn.__docgenInfo={description:"",methods:[],displayName:"FlexColumn",props:{noGrow:{required:!1,tsType:{name:"boolean"},description:""},center:{required:!1,tsType:{name:"boolean"},description:""},noWrap:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},break:{required:!1,tsType:{name:"union",raw:"'small' | 'vsmall'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'vsmall'"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/ui/components/Loader/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Loader});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  animation: spin 2s linear infinite;
  padding: 2px;
  overflow: hidden;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,LoadingBack=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: absolute;
  &[data-type='abs'] {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &[data-type='br'] {
    bottom: 1rem;
    right: 1rem;
    top: auto;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: transparent;
  opacity: 1;
  &[data-transparent='true'] {
    opacity: 0.1;
  }
  transition: opacity 5s;
`,Loader=({name,height="2rem",width="2rem",position="abs"})=>{const[trans,setTrans]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!0);return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{setTrans(!1)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LoadingBack,{"data-loading":name,"data-transparent":trans,"data-type":position,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{style:{height,width}})})};Loader.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{width:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"default 2rem",defaultValue:{value:"'2rem'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"default 2rem",defaultValue:{value:"'2rem'",computed:!1}},name:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:"'abs' | 'br'",elements:[{name:"literal",value:"'abs'"},{name:"literal",value:"'br'"}]},description:"position for loader. default full page takeover",defaultValue:{value:"'abs'",computed:!1}}}}},"./src/ui/components/Markdown/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Markdown});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),common=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/common/index.ts")),array=__webpack_require__("./src/common/helpers/array.ts");function trimSide(str,fromStart=!0,...params){const pstr=params.join("");if(!str)return str;const ret=str.replace(new RegExp(`[${pstr}]*$`,"g"),"");return fromStart?ret.replace(new RegExp(`^[${pstr}]*`,"g"),""):ret}const injectTable=({tableRows,preprocessText})=>(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsx)("tr",{children:tableRows[0].split("|").map((header=>header.trim())).map((header=>(0,jsx_runtime.jsx)("th",{children:preprocessText(header)},header)))})}),(0,jsx_runtime.jsx)("tbody",{children:tableRows.slice(2).map((row=>{const cells=row.split("|").map((cell=>cell.trim()));return(0,jsx_runtime.jsx)("tr",{children:cells.map((cell=>(0,jsx_runtime.jsx)("td",{children:preprocessText(cell)},cell)))},row)}))})]},(0,common.s5)(JSON.stringify(tableRows))),injectGroup=({output,pos,wrap})=>{const outputEndIndex=output.length,sum=[];for(let a=pos.outputIndex;a<=outputEndIndex;a+=1)sum.push(output[a]),delete output[a];return output=(0,array.NV)(output,wrap(sum),pos.outputIndex)};function renderMarkdown({markdown,preprocessText=s=>s}){const lines=markdown.split("\n");let ol,ul,output=[],tableRows=[],a=-1;do{a+=1;const line=lines[a]??"",la=line+a,star=/\*\*(.*?)\*\*/gim;if(line.match(star))output.push((0,jsx_runtime.jsx)("p",{dangerouslySetInnerHTML:{__html:line.replace(star,"<b>$1</b>").trim()}},la));else if(line.startsWith("|"))tableRows.push(line);else if(tableRows.length>0&&(output.push(injectTable({tableRows,preprocessText})),tableRows=[]),line.match(/^[0-9]+\./gim)?void 0===ol&&(ol={matchLine:line,outputIndex:output.length}):ol&&ol.matchLine!==line&&(output=injectGroup({output,pos:ol,wrap:i=>(0,jsx_runtime.jsx)("ol",{children:i},i[0].key)}),ol=void 0),line.startsWith("-")||line.startsWith("*")?void 0===ul&&(ul={matchLine:line,outputIndex:output.length}):ul&&ul.matchLine!==line&&(output=injectGroup({output,pos:ul,wrap:i=>(0,jsx_runtime.jsx)("ul",{children:i},i[0].key)}),ul=void 0),line.startsWith("#")){const level=line.match(/^#+/)?.[0]?.length??0,t=trimSide(line,!0,"#").trim();1===level?output.push((0,jsx_runtime.jsx)("h1",{children:preprocessText(t)},t)):2===level?output.push((0,jsx_runtime.jsx)("h2",{children:preprocessText(t)},t)):3===level?output.push((0,jsx_runtime.jsx)("h3",{children:preprocessText(t)},t)):4===level?output.push((0,jsx_runtime.jsx)("h4",{children:preprocessText(t)},t)):5===level?output.push((0,jsx_runtime.jsx)("h5",{children:preprocessText(t)},t)):level>=6&&output.push((0,jsx_runtime.jsx)("h6",{children:preprocessText(t)},t))}else if(line.startsWith("*")||line.startsWith("-")){const t=line.slice(2).trim();t.length>0&&output.push((0,jsx_runtime.jsx)("li",{children:preprocessText(t)},t))}else if(line.match(/^[0-9]+\./gim)){const t=line.slice(3).trim();t.length>0&&output.push((0,jsx_runtime.jsx)("li",{children:preprocessText(t)},t))}else line.length>0&&output.push((0,jsx_runtime.jsx)("p",{children:preprocessText(line)},la))}while(a<lines.length);return output}const Base=emotion_styled_browser_esm.A.div`
  > * {
    margin: 0;
    white-space: pre-wrap;
  }
  ul {
    display: grid;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  ul,
  table {
    margin-bottom: 1rem;
  }
`,Markdown=p=>(0,jsx_runtime.jsx)(Base,{className:p.className,children:renderMarkdown({preprocessText:p.preprocessText,markdown:p.markdown.trim()})});Markdown.__docgenInfo={description:"",methods:[],displayName:"Markdown",props:{markdown:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},preprocessText:{required:!1,tsType:{name:"signature",type:"function",raw:"(s: string) => string | JSX.Element",signature:{arguments:[{type:{name:"string"},name:"s"}],return:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]}}},description:"run after html is generated for markdown, but before applied"}}}},"./src/ui/components/MinSidebar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>MinSidebar});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/helpers/index.ts"),_styles_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/styles/common.tsx"),_styles_media__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/ui/styles/media.ts"),_Chevron__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/ui/components/Chevron/index.tsx"),_Icon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/ui/components/Icon/index.tsx");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: sticky;
  top: 0;
  border-right: solid 1px #ccc;
  height: 100%;
  ${_styles_common__WEBPACK_IMPORTED_MODULE_4__.Dn};
  width: fit-content;
`,Content=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  > div {
    flex-basis: 100%;
  }
`,OpenIcon=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_Icon__WEBPACK_IMPORTED_MODULE_6__.I)`
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  margin-left: auto;
`,ChevronStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_Chevron__WEBPACK_IMPORTED_MODULE_5__.c)`
  svg {
    fill: #555;
  }
`,MinSidebar=({chevronColour,children,className,style})=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1);return(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.Wr)({ref,disabled:()=>!open||window.innerWidth>_styles_media__WEBPACK_IMPORTED_MODULE_7__.kX},(()=>{setOpen(!1)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{style,"data-type":"sidebar",className,"data-open":open,onClick:()=>!open&&setOpen(!0),ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content,{"data-type":"content","data-open":open,onClick:e=>{e.stopPropagation()},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OpenIcon,{onClick:e=>{e.stopPropagation(),setOpen(!open)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ChevronStyled,{"data-open":open,point:open?"left":"right",width:"100%",colour:chevronColour??"white"})}),children({open})]})})};MinSidebar.__docgenInfo={description:"",methods:[],displayName:"MinSidebar",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:"({\n  open,\n}: {\n  /** can make sidebar contents smaller when open=false */\n  open: boolean;\n}) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{\n  /** can make sidebar contents smaller when open=false */\n  open: boolean;\n}",signature:{properties:[{key:"open",value:{name:"boolean",required:!0},description:"can make sidebar contents smaller when open=false"}]}},name:""}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},chevronColour:{required:!1,tsType:{name:"string"},description:"default white"},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/ui/components/Modal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aF:()=>Modal.a,yZ:()=>ModalDialog});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),client=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom/client.js")),Modal=__webpack_require__("./src/ui/components/Modal/Modal.tsx");const ModalDialog=async(content,opt)=>new Promise((res=>{const wrapper=document.body.appendChild(document.createElement("div")),root=(0,client.createRoot)(wrapper),onClose=()=>{try{root.unmount(),wrapper.remove()}catch(e){}};root.render((0,jsx_runtime.jsx)(Modal.a,{open:!0,setOpen:o=>{o||onClose(),res("ok")},topPosition:"center",position:"center",style:opt?.style,children:"function"!=typeof content?content:content({close:()=>{onClose()}})}))}))},"./src/ui/components/PieChart/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>PieChart});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  width: 100%;
  height: 100%;
`,PieChart=({data,className})=>{const total=data.reduce(((sum,{value})=>sum+value),0),radius=Math.min(500,500)/2;let cumulativeAngle=0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{viewBox:"0 0 500 500",children:data.map((({label,value,color})=>{const angle=value/total*360,startX=250+radius*Math.cos(cumulativeAngle*Math.PI/180),startY=250+radius*Math.sin(cumulativeAngle*Math.PI/180),endX=250+radius*Math.cos((cumulativeAngle+angle)*Math.PI/180),endY=250+radius*Math.sin((cumulativeAngle+angle)*Math.PI/180),largeArcFlag=angle>180?1:0,midAngle=cumulativeAngle+angle/2,midX=250+.75*radius*Math.cos(midAngle*Math.PI/180),midY=250+.75*radius*Math.sin(midAngle*Math.PI/180);return cumulativeAngle+=angle,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title",{children:`${label}: ${value}`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:`M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} L 250 250 Z`,fill:color}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{x:midX,y:midY,textAnchor:"middle",alignmentBaseline:"middle",stroke:"white",strokeWidth:"6px",children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{x:midX,y:midY,textAnchor:"middle",alignmentBaseline:"middle",fill:"black",children:label})]},label)}))})})};PieChart.__docgenInfo={description:"",methods:[],displayName:"PieChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"IPieChartData"}],raw:"IPieChartData[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/ui/components/ProgressBar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ProgressBar});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/styles/index.ts");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: relative;
  min-width: 5rem;
  width: 100%;
  height: 2rem;
  border-radius: 1rem;
  overflow: hidden;
`,Bar=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
`,Dot=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
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
`,ProgressBar=p=>{const{transitionToMs=200,frontColour=_styles__WEBPACK_IMPORTED_MODULE_3__.M8.notificationBlue,backColour="#eee",dotPercentages=[25,50,75]}=p,[barWidth,setBarWidth]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(p.min/p.max*100);return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{const newbw=p.min/p.max*100;barWidth!==newbw&&setBarWidth(newbw)}),[p.min,p.max]),(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{transitionToMs&&setBarWidth(p.max)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Base,{style:{backgroundColor:backColour},className:p.className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Bar,{style:{width:`${barWidth}%`,backgroundColor:frontColour,transition:`width ${transitionToMs}ms linear`}}),dotPercentages?.map((v=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Dot,{style:{left:`calc(${v}% - 0.25rem)`},"data-invert":v>barWidth},v)))]})};ProgressBar.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},frontColour:{required:!1,tsType:{name:"string"},description:"default #4d76ff"},backColour:{required:!1,tsType:{name:"string"},description:"default #eee"},dotPercentages:{required:!1,tsType:{name:"union",raw:"number[] | null",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"null"}]},description:"default 25,50,75"},className:{required:!1,tsType:{name:"string"},description:""},transitionToMs:{required:!1,tsType:{name:"number"},description:"if true, will transition to the end in X ms"}}}},"./src/ui/components/Prompt/Dialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>PromptDialog});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom/client.js")),_Modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/components/Prompt/Modal.tsx");const PromptDialog=async p=>new Promise((res=>{const wrapper=document.body.appendChild(document.createElement("div")),root=(0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(wrapper);root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_3__.S,{...p,res,root,wrapper}))}))},"./src/ui/components/Prompt/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>PromptModal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/components/Button/index.tsx"),_FlexColumn__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/components/FlexColumn/index.tsx"),_FlexRow__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/ui/components/FlexRow/index.tsx"),_Modal_Modal__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/ui/components/Modal/Modal.tsx"),_TextEdit__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/ui/components/TextEdit/index.tsx");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  width: 95vw;
  max-width: 30rem;
  height: 50vh;
  max-height: 15rem;
`,Content=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_FlexColumn__WEBPACK_IMPORTED_MODULE_4__.I)`
  padding: 1rem;
  height: calc(100% - 2rem);
  width: calc(100% - 2rem);
`,TopText=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  font-weight: bold;
  border-bottom: solid 1px #ccc;
  padding-bottom: 0.25rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,BottomText=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  padding-bottom: 0.25rem;
  font-size: 1.1rem;
`,Bottom=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_FlexRow__WEBPACK_IMPORTED_MODULE_5__.Y)`
  margin-top: auto;
  justify-content: flex-end;
  > button:first-of-type {
    margin-right: 1rem;
  }
`,PromptModal=({root,wrapper,res,bottomText,topText,okText="OK",cancelText="Cancel",defaultValue,placeholder,style})=>{const[text,setText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultValue||""),ret=v=>{try{res(v)}finally{try{root?.unmount(),wrapper?.remove()}catch(e){}}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Modal_Modal__WEBPACK_IMPORTED_MODULE_6__.a,{position:"center",topPosition:"center",open:!0,setOpen:()=>ret(void 0),showCloseButton:!1,closeOnClickOutside:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content,{style,children:[topText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TopText,{children:topText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BottomText,{children:bottomText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextEdit__WEBPACK_IMPORTED_MODULE_7__.mF,{defaultValue:text,onSubmit:(c,enter)=>{enter?ret(c):setText(c)},placeholder,defaultEditing:{focus:!0},singleLine:!0,noGrow:!0,allowUndo:!1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Bottom,{noGrow:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{onClick:()=>ret(text),children:okText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.$,{invert:!0,onClick:()=>ret(void 0),children:cancelText})]})]})})})};PromptModal.__docgenInfo={description:"",methods:[],displayName:"PromptModal",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},res:{required:!0,tsType:{name:"signature",type:"function",raw:"(v: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"v"}],return:{name:"void"}}},description:""},root:{required:!1,tsType:{name:"Root"},description:""},wrapper:{required:!1,tsType:{name:"HTMLDivElement"},description:""},topText:{required:!1,tsType:{name:"string"},description:""},bottomText:{required:!0,tsType:{name:"string"},description:""},okText:{required:!1,tsType:{name:"string"},description:"default 'OK'",defaultValue:{value:"'OK'",computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:'default "cancel"',defaultValue:{value:"'Cancel'",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/ui/components/RadioGroup/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>RadioGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  flex-flow: row;
  &[data-mode='vert'] {
    flex-flow: column;
  }
  overflow: hidden;
  justify-content: space-between;
`,Label=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.label`
  text-align: center;
  display: flex;
  align-items: center;

  &[data-selected='true'] {
    cursor: default;
  }
  &[data-selected='false'] {
    cursor: pointer;
  }
`,RadioGroup=p=>{const{renderLabel=x=>x.toString()}=p,[index,setIndex]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(p.defaultIndex);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{className:p.className,style:p.style,"data-mode":p.mode??"horiz",children:p.values.map(((v,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Label,{"data-selected":index===i,onClick:()=>{index!==i&&(setIndex(i),p.onSubmit(v,i))},children:renderLabel(v,index===i)},i.toString())))})};RadioGroup.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{renderLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(a: T, selected: boolean) => JSX.Element",signature:{arguments:[{type:{name:"T"},name:"a"},{type:{name:"boolean"},name:"selected"}],return:{name:"JSX.Element"}}},description:"can overload the render of the label. defaults to toString"},defaultIndex:{required:!0,tsType:{name:"number"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: T, index: number) => void",signature:{arguments:[{type:{name:"T"},name:"val"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},values:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},mode:{required:!1,tsType:{name:"union",raw:"'vert' | 'horiz'",elements:[{name:"literal",value:"'vert'"},{name:"literal",value:"'horiz'"}]},description:"default horiz"}}}},"./src/ui/components/Search/Dialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>SearchDialog});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom/client.js")),_common_helpers_log__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/common/helpers/log.ts"),_Modal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/components/Search/Modal.tsx");const SearchDialog=async p=>{const placeholderText=p.placeholderText||"";let originalStyle;return new Promise((res=>{if(0!==document.body.querySelectorAll("#ag-search-dialog").length)return(0,_common_helpers_log__WEBPACK_IMPORTED_MODULE_3__.z3)("searchDialog already open"),void res(void 0);const wrapper=document.body.appendChild(document.createElement("div"));wrapper.id="ag-search-dialog",void 0===originalStyle&&(originalStyle=window.getComputedStyle(document.body).overflow||"",document.body.style.overflow="hidden");const root=(0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(wrapper);root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_4__.s,{...p,placeholderText,onSelectItem:f=>{try{document.body.style.overflow=originalStyle||"",res(f)}finally{try{root.unmount(),wrapper.remove()}catch(e){}}}}))}))}},"./src/ui/components/Search/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R9:()=>AutoHideSearchBox});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),useGranularHook=__webpack_require__("./src/ui/helpers/useGranularHook.ts"),icons=__webpack_require__("./src/ui/icons/index.tsx"),styles=__webpack_require__("./src/ui/styles/index.ts"),SearchBox=__webpack_require__("./src/ui/components/Search/SearchBox.tsx");const Base=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-left: 1rem;

  @media ${styles.BQ} {
    width: 20rem;
  }
`,Icon=emotion_styled_browser_esm.A.div`
  display: flex;
  margin-right: 0.5rem;
  > svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: white;
  }
`,SearchBoxStyled=(0,emotion_styled_browser_esm.A)(SearchBox.G)`
  transition: width 200ms ease-in-out;

  overflow: hidden;
  padding: 0;
  &[data-open='false'] {
    width: 0;
    padding: 0;
  }
  @media ${styles.UN} {
    padding: 0;
  }
`,AutoHideSearchBox=p=>{const[open,setOpen]=(0,react.useState)(!!p.searchText),textEditRef=(0,react.createRef)();return(0,useGranularHook.T)((()=>{!!p.searchText!==open&&(setOpen(!open),p.onOpenToggle?.(!open))}),[p.searchText],[open]),(0,jsx_runtime.jsxs)(Base,{className:p.className,"data-open":open,children:[(0,jsx_runtime.jsxs)(Icon,{style:{cursor:"pointer"},onClick:()=>{open&&p.setSearchText("",!1),setOpen(!open),p.onOpenToggle?.(!open),open||setTimeout((()=>textEditRef.current?.focus()),100)},children:[open&&(0,jsx_runtime.jsx)(icons.CrossIcon,{}),!open&&(0,jsx_runtime.jsx)(icons.Magnify,{style:{fill:"white"}})]}),(0,jsx_runtime.jsx)(SearchBoxStyled,{textBoxRef:textEditRef,...p,"data-open":open,setSearchText:(val,enter)=>{""===val&&enter?p.setSearchText(val,!1):p.setSearchText(val,enter)}})]})};AutoHideSearchBox.__docgenInfo={description:"",methods:[],displayName:"AutoHideSearchBox",props:{searchText:{required:!0,tsType:{name:"string"},description:""},setSearchText:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string, enterPressed: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"val"},{type:{name:"boolean"},name:"enterPressed"}],return:{name:"void"}}},description:""},onOpenToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};__webpack_require__("./src/ui/components/Search/Dialog.tsx"),__webpack_require__("./src/ui/components/Search/Inline.tsx"),__webpack_require__("./src/ui/components/Search/Modal.tsx")},"./src/ui/components/Sidebar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Sidebar});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/helpers/index.ts"),_icons_Hamburger__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/icons/Hamburger.tsx"),_styles_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/ui/styles/common.tsx"),_styles_media__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/ui/styles/media.ts"),_Chevron__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/ui/components/Chevron/index.tsx");const closedSidebarHover=_emotion_react__WEBPACK_IMPORTED_MODULE_7__.AH`
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
`,Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: sticky;
  top: 0;
  transition: all 200ms;
  border-right: solid 1px #ccc;
  height: 100vh;
  z-index: 1;

  ${_styles_common__WEBPACK_IMPORTED_MODULE_5__.Dn};
  &:hover {
    [data-type='content-block'] {
      left: 1rem;
    }
  }

  &[data-open='true'] {
    width: fit-content;

    @media ${_styles_media__WEBPACK_IMPORTED_MODULE_8__.UN} {
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
    @media ${_styles_media__WEBPACK_IMPORTED_MODULE_8__.UN} {
      ${closedSidebarHover};
    }
    @media ${_styles_media__WEBPACK_IMPORTED_MODULE_8__.BQ} {
      width: fit-content;
    }
  }
`,closedContentBlockOffScreen=_emotion_react__WEBPACK_IMPORTED_MODULE_7__.AH`
  left: -100vw;
  transition: left 200ms;
  height: 100%;
`,ContentBlock=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  ${closedContentBlockOffScreen};
  &[data-open='false'] {
    position: absolute;
    top: 0;
    z-index: 1;
    width: fit-content;
  }

  :not([data-open]) {
    @media ${_styles_media__WEBPACK_IMPORTED_MODULE_8__.UN} {
      position: absolute;
      ${closedContentBlockOffScreen};
    }
  }
`,Content=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;

  &[data-open='false'] {
    filter: drop-shadow(1px 1px 0.5rem #555);
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
  }
`,HamburgerB=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: absolute;
  transition: all 200ms;
  z-index: 2;

  &[data-hide-on-big='true'] {
    @media ${_styles_media__WEBPACK_IMPORTED_MODULE_8__.BQ} {
      display: none;
    }
  }

  &[data-open='false'] {
    top: 0.5rem;
    left: 0.25rem;
  }

  :not([data-open]) {
    @media ${_styles_media__WEBPACK_IMPORTED_MODULE_8__.BQ} {
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
`,ChevronStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_Chevron__WEBPACK_IMPORTED_MODULE_6__.c)`
  svg {
    fill: #555;
  }
`,Sidebar=({children,className,mode="defaultClosed"})=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("defaultClosed"!==mode&&null);return(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.Wr)({ref,disabled:()=>!open||window.innerWidth>_styles_media__WEBPACK_IMPORTED_MODULE_8__.kX},(()=>{setOpen(!1)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Base,{"data-type":"sidebar",className,"data-open":open,onClick:()=>!open&&setOpen(!0),"data-hover":!0,ref,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HamburgerB,{"data-hide-on-big":"fixedOpen"===mode,"data-open":open,onClick:e=>{e.stopPropagation(),setOpen(!open)},"data-hover":!0,children:open?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ChevronStyled,{point:"left",width:"100%"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_Hamburger__WEBPACK_IMPORTED_MODULE_4__.U,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContentBlock,{"data-type":"content-block","data-open":open,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Content,{"data-type":"content","data-open":open,onClick:e=>{e.stopPropagation()},children})})]})};Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},mode:{required:!1,tsType:{name:"union",raw:"'defaultClosed' | 'fixedOpen'",elements:[{name:"literal",value:"'defaultClosed'"},{name:"literal",value:"'fixedOpen'"}]},description:"default:defaultClosed\ndefaultClosed: always closed by default.\nfixedOpen: always open on bigscreen. cant close if bigscreen",defaultValue:{value:"'defaultClosed'",computed:!1}}}}},"./src/ui/components/SparkLine/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>SparkLine});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_common_helpers_array__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/common/helpers/array.ts")),_common_helpers_math__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/common/helpers/math.ts");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  width: calc(100% - 1px);
  height: calc(100% - 1px);
  border: solid 1px #666;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
`,Points=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: relative;
  width: calc(100% - ${2}px);
  height: calc(100% - ${2}px);
  margin-left: ${2}px;
`,Point=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  position: absolute;
  width: ${2}px;
`,SparkLine=p=>{const{data:raw,pointColour="#4d76ff"}=p,xMin=Math.min(...raw.map((d=>d.x))),xMax=Math.max(...raw.map((d=>d.x))),yMin=Math.min(...raw.map((d=>d.y))),yMax=Math.max(...raw.map((d=>d.y))),data=(0,_common_helpers_array__WEBPACK_IMPORTED_MODULE_3__.ey)(raw.map((orig=>({x:100*(0,_common_helpers_math__WEBPACK_IMPORTED_MODULE_4__.gO)({value:orig.x,min:xMin,max:xMax}),y:100*(0,_common_helpers_math__WEBPACK_IMPORTED_MODULE_4__.gO)({value:orig.y,min:yMin,max:yMax}),orig}))),(s=>s.x));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{className:p.className,title:p.title,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Points,{children:data.map((pt=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Point,{title:p.pointTitleF?.(pt.orig)??"",style:{backgroundColor:pointColour,borderColor:pointColour,left:`calc(${pt.x}% - 2px)`,bottom:0,height:`calc(${pt.y}% + 2px)`}},pt.x+" "+pt.y)))})})};SparkLine.__docgenInfo={description:"",methods:[],displayName:"SparkLine",props:{pointColour:{required:!1,tsType:{name:"string"},description:"default #4d76ff"},className:{required:!1,tsType:{name:"string"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}}],raw:"TSparkLineData[]"},description:""},pointTitleF:{required:!1,tsType:{name:"signature",type:"function",raw:"(p: TSparkLineData) => string",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},name:"p"}],return:{name:"string"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""}}}},"./src/ui/components/TabBar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>TabBar});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/components/Icon/index.tsx");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  flex-flow: row;
  &[data-mode='vert'] {
    flex-flow: column;
  }
  overflow: hidden;
  justify-content: space-around;
  width: 100%;
  margin: auto;
`,Item=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  border-radius: 2rem;
  justify-content: center;
  height: calc(100% - 1rem);
  padding-left: 1rem;
  padding-right: 1rem;
  width: 10rem;
  &[data-selected='false'] {
    opacity: 0.8;
    cursor: pointer;
  }
`,IconStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A)(_Icon__WEBPACK_IMPORTED_MODULE_3__.I)`
  height: 1.5rem;
  max-height: 80%;
  max-width: fit-content;
`,Text=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  max-height: 50%;
  overflow: hidden;
`,TabBar=p=>{const{defaultSelectedIndex=0,theme:{back="#eee",frontSelected="#4d76ff",front="black"}}={...p,theme:p.theme??{}},[index,setIndex]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultSelectedIndex);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{className:p.className,style:p.style,children:p.items.map(((v,i)=>{const selected=index===i;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Item,{style:{backgroundColor:back,color:front,...selected&&{color:frontSelected},maxWidth:100/p.items.length+"%"},"data-selected":selected,onClick:()=>{index!==i&&(setIndex(i),p.onChangeIndex(i))},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconStyled,{style:{width:"50%"},children:v.icon({style:{...selected&&{fill:frontSelected}}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Text,{"data-type":"text",children:v.text})]},i.toString())}))})};TabBar.__docgenInfo={description:"",methods:[],displayName:"TabBar",props:{onChangeIndex:{required:!0,tsType:{name:"signature",type:"function",raw:"(i: number) => void",signature:{arguments:[{type:{name:"number"},name:"i"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},cookieDocument:{required:!0,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  text: string;\n  icon: (p: { style: { fill?: string } }) => JSX.Element;\n}",signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"icon",value:{name:"signature",type:"function",raw:"(p: { style: { fill?: string } }) => JSX.Element",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ style: { fill?: string } }",signature:{properties:[{key:"style",value:{name:"signature",type:"object",raw:"{ fill?: string }",signature:{properties:[{key:"fill",value:{name:"string",required:!1}}]},required:!0}}]}},name:"p"}],return:{name:"JSX.Element"}},required:!0}}]}}],raw:"{\n  text: string;\n  icon: (p: { style: { fill?: string } }) => JSX.Element;\n}[]"},description:""},theme:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  /** default black */\n  front?: string;\n  /** default blue */\n  frontSelected?: string;\n  /** default #eee */\n  back?: string;\n}",signature:{properties:[{key:"front",value:{name:"string",required:!1},description:"default black"},{key:"frontSelected",value:{name:"string",required:!1},description:"default blue"},{key:"back",value:{name:"string",required:!1},description:"default #eee"}]}},description:""},defaultSelectedIndex:{required:!1,tsType:{name:"number"},description:"default 0"}}}},"./src/ui/components/Table/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Table});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_common_helpers_groupBy__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),__webpack_require__("./src/common/helpers/groupBy.ts"));const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
`,TableRow=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  border: solid 1px #ccc;
  &[data-header='true'] {
    border-bottom: solid 1px #888;
  }
  &:not(:first-of-type) {
    border-top: 0;
  }
`,Group=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`,GroupTitle=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  font-size: 1.5rem;
`,GroupWrap=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`,Table=({children,className,headerRow})=>{const grouped=(0,_common_helpers_groupBy__WEBPACK_IMPORTED_MODULE_3__.Bg)(children,(s=>s.groupTitle));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{className,children:grouped.map((group=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(GroupWrap,{children:[group.key&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GroupTitle,{children:group.key},`gt${group.key}`),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Group,{children:[headerRow&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TableRow,{"data-header":"true",children:headerRow},`headrow${group.key}`),group.items.map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TableRow,{children:item.content},item.content.key)))]},`g${group.key}`)]},"gk"+group.key)))})};Table.__docgenInfo={description:"",methods:[],displayName:"Table",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ITableItem"}],raw:"ITableItem[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},headerRow:{required:!1,tsType:{name:"JSX.Element"},description:""}}}},"./src/ui/components/TextWithButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>TextWithButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  flex-flow: row;
  max-height: 100%;
`,Input=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.input`
  flex-grow: 1;
  border: solid 3px #ccc;
  border-right: 0;
  padding-left: 0.5rem;
  border-radius: 0.5rem 0 0 0.5rem;
  overflow: hidden;
  font-size: 1.2rem;
  &[data-valid='false'] {
    border-color: indianred;
  }
  outline: 0;
`,Button=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.button`
  padding: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(136 119 227);
  color: white;
  font-weight: bold;
  border-radius: 0 0.5rem 0.5rem 0;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  &[data-valid='false'] {
    cursor: not-allowed;
    border-color: indianred;
    background-color: #ccc;
  }
`,TextWithButton=({submitText="Submit",placeholder,validateF,onSubmit})=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),valid=!validateF||validateF(value);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Base,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Input,{"data-type":"input","data-valid":valid,placeholder,value,onChange:s=>setValue(s.target.value),onKeyDown:e=>"Enter"===e.key&&valid&&onSubmit(value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button,{"data-type":"button","data-valid":valid,disabled:!valid,onClick:()=>valid&&onSubmit(value),children:submitText})]})};TextWithButton.__docgenInfo={description:"",methods:[],displayName:"TextWithButton",props:{submitText:{required:!1,tsType:{name:"string"},description:'default "Submit"',defaultValue:{value:"'Submit'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},validateF:{required:!1,tsType:{name:"signature",type:"function",raw:"(s: string) => boolean",signature:{arguments:[{type:{name:"string"},name:"s"}],return:{name:"boolean"}}},description:"if provided will validate and block submission accordingly"},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(s: string) => void",signature:{arguments:[{type:{name:"string"},name:"s"}],return:{name:"void"}}},description:""}}}},"./src/ui/components/TimelineChart/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>TimelineChart});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  svg {
    overflow: initial;
  }
`,TimelineChart=({series,strokeWidth=3,className})=>{if(0===series.length)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{});const xValues=series.flatMap((s=>s.data.map((d=>d.x)))),yValues=series.flatMap((s=>s.data.map((d=>d.y)))),xMin=Math.min(...xValues),xMax=Math.max(...xValues),yMin=Math.min(...yValues),yMax=Math.max(...yValues),xScale=x=>Math.ceil((x-xMin)/(xMax-xMin)*600),yScale=y=>{let ret=Math.ceil((yMax-y)/(yMax-yMin)*200);return isNaN(ret)&&(ret=y),ret},getPathData=({data})=>data.sort(((a,b)=>a.x<b.x?-1:1)).map((({x,y})=>({xScaled:xScale(x),yScaled:yScale(y)}))).map((({xScaled,yScaled},i)=>0===i?`M${xScaled} ${yScaled}`:` L${xScaled} ${yScaled}`)).join("\n");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Base,{className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{viewBox:"0 -10 600 220",children:series.map((({color,data,label,key,onClick,title})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title",{children:title||label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:getPathData({color,data,label,key}),fill:"none",stroke:color,strokeWidth,onClick:()=>onClick?.(),style:{cursor:onClick?"pointer":"default"}}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{x:xScale(data[0]?.x)+2*strokeWidth,y:yScale(data[data.length-1]?.y),fontSize:"12",textAnchor:"middle",dominantBaseline:"middle",stroke:"white",strokeWidth:"3px",children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{x:xScale(data[0]?.x)+2*strokeWidth,y:yScale(data[data.length-1]?.y),fontSize:"12",textAnchor:"middle",dominantBaseline:"middle",fill:"black",children:label})]})]},key)))})})};TimelineChart.__docgenInfo={description:"",methods:[],displayName:"TimelineChart",props:{series:{required:!0,tsType:{name:"Array",elements:[{name:"ITimelineChartSeries"}],raw:"ITimelineChartSeries[]"},description:""},strokeWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/ui/components/Toast/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$o:()=>ToastContext,tE:()=>ToastProvider});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js");function random(max,seed){const rnd=(9301*(seed=seed??(new Date).getTime())+49297)%233280/233280;return Math.ceil(rnd*max)}var Warning=__webpack_require__("./src/ui/icons/Warning.tsx"),common=__webpack_require__("./src/ui/styles/common.tsx"),FlexColumn=__webpack_require__("./src/ui/components/FlexColumn/index.tsx"),FlexRow=__webpack_require__("./src/ui/components/FlexRow/index.tsx"),ProgressBar=__webpack_require__("./src/ui/components/ProgressBar/index.tsx");const Cross=()=>(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsxs)("linearGradient",{id:"a",x2:"0",y1:"47.37",y2:"-1.429",gradientUnits:"userSpaceOnUse",children:[(0,jsx_runtime.jsx)("stop",{stopColor:"#c52828"}),(0,jsx_runtime.jsx)("stop",{offset:"1",stopColor:"#ff5454"})]})}),(0,jsx_runtime.jsxs)("g",{style:{fillOpacity:1},transform:"translate(-58.37 .882) scale(.99999)",children:[(0,jsx_runtime.jsx)("circle",{cx:"82.37",cy:"23.12",r:"24",fill:"url(#a)",style:{fillOpacity:1,fill:"#d33"}}),(0,jsx_runtime.jsx)("path",{fill:"#fff",fillOpacity:".842",d:"m87.77 23.725 5.939-5.939c.377-.372.566-.835.566-1.373 0-.54-.189-.997-.566-1.374l-2.747-2.747a1.888 1.888 0 0 0-1.373-.564c-.539 0-.997.186-1.374.564l-5.939 5.939-5.939-5.939a1.889 1.889 0 0 0-1.374-.564c-.539 0-.997.186-1.374.564l-2.748 2.747a1.873 1.873 0 0 0-.566 1.374c0 .54.188.997.566 1.373l5.939 5.939-5.939 5.94a1.862 1.862 0 0 0-.566 1.373c0 .54.188.997.566 1.373l2.748 2.747c.377.378.835.564 1.374.564.539 0 .997-.186 1.374-.564l5.939-5.939 5.94 5.939c.377.378.835.564 1.374.564.539 0 .997-.186 1.373-.564l2.747-2.747c.377-.372.566-.835.566-1.373 0-.54-.188-.997-.566-1.373l-5.939-5.94",style:{fillOpacity:1,fill:"#fff"}})]})]});Cross.__docgenInfo={description:"",methods:[],displayName:"Cross"};const Tick=()=>(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",children:[(0,jsx_runtime.jsx)("circle",{cx:"32",cy:"32",r:"30",fill:"#fff"}),(0,jsx_runtime.jsx)("path",{fill:"#7cb342",d:"M32 2C15.431 2 2 15.432 2 32c0 16.568 13.432 30 30 30 16.568 0 30-13.432 30-30C62 15.432 48.568 2 32 2zm-6.975 48-.02-.02-.017.02L11 35.6l7.029-7.164 6.977 7.184 21-21.619L53 21.199 25.025 50z"})]});Tick.__docgenInfo={description:"",methods:[],displayName:"Tick"};const ToastContext=(0,react.createContext)({}),ToastContainerStyle=emotion_styled_browser_esm.A.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0.5rem;
  z-index: 10000;

  display: flex;
  flex-flow: column;
  align-items: flex-end;
  max-width: 50vw;
`,ToastStyle=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 0.5rem;
  position: relative;
  font-size: 1.2rem;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  border: solid 1px;
  border-radius: 6px;
`,CloseStyle=emotion_styled_browser_esm.A.span`
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
  z-index: 1;
  &:hover {
    background-color: var(--bg);
  }
`,Icon=emotion_styled_browser_esm.A.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`,ProgressBarStyled=(0,emotion_styled_browser_esm.A)(ProgressBar.z)`
  height: 0.75rem;
  margin-top: 0.5rem;
`,Toast=({toast,close,style})=>{let closeMs;toast.options?.autoClose?closeMs=toast.options.autoClose:void 0===toast.options?.autoClose&&(closeMs="success"===toast.options?.appearance?5e3:1e4);let icon=(0,jsx_runtime.jsx)(Tick,{});switch(toast.options?.appearance){case"error":icon=(0,jsx_runtime.jsx)(Cross,{});break;case"warning":icon=(0,jsx_runtime.jsx)(Warning.N,{});break;case"success":default:icon=(0,jsx_runtime.jsx)(Tick,{});case void 0:}(0,react.useEffect)((()=>{if(!closeMs)return;const timeout=setTimeout((()=>close(toast.id)),closeMs);return()=>clearTimeout(timeout)}),[]);const closeStyle={color:style.color,"--bg":style.borderColor},toastStyle={...style,boxShadow:`hsl(from ${style.borderColor} h s 25%) 0px 7px 29px 0px`};return"standard"===toast.type?(0,jsx_runtime.jsxs)(ToastStyle,{style:toastStyle,children:[(0,jsx_runtime.jsx)(CloseStyle,{onClick:()=>close(toast.id),style:closeStyle,children:"×"}),(0,jsx_runtime.jsx)(Icon,{style:{fill:style.color},children:icon}),toast.message,void 0!==closeMs&&(0,jsx_runtime.jsx)(ProgressBarStyled,{max:100,min:0,dotPercentages:null,transitionToMs:closeMs})]}):(0,jsx_runtime.jsxs)(ToastStyle,{style:toastStyle,children:[(0,jsx_runtime.jsx)(CloseStyle,{onClick:()=>close(toast.id),style:closeStyle,children:"×"}),(0,jsx_runtime.jsxs)(FlexRow.Y,{noWrap:!0,center:!0,children:[void 0===toast.icon&&(0,jsx_runtime.jsx)(Icon,{children:icon}),toast.icon,(0,jsx_runtime.jsxs)(FlexColumn.I,{style:{marginLeft:null===toast.icon?"0":"0.5rem"},children:[(0,jsx_runtime.jsx)("b",{children:toast.title}),toast.content]})]}),void 0!==closeMs&&(0,jsx_runtime.jsx)(ProgressBarStyled,{max:100,min:0,dotPercentages:null,transitionToMs:closeMs})]})},ToastProvider=({children,providerOptions})=>{const[toasts,setToasts]=(0,react.useState)([]),addToast=(message,options)=>setToasts((currentToasts=>[...currentToasts.filter((ct=>"detailed"===ct.type||ct.message!==message||JSON.stringify(ct.options)!==JSON.stringify(options))),{id:random(1e4).toString(),message,options,type:"standard"}])),addToastDetailed=(p,options)=>setToasts((currentToasts=>[...currentToasts,{id:random(1e4).toString(),...p,options,type:"detailed"}])),close=id=>setToasts((currentToasts=>currentToasts.filter((toast=>toast.id!==id)))),contextValue=(0,react.useMemo)((()=>({addToast,addToastDetailed})),[]),style=(0,common.QS)(providerOptions?.style);return(0,jsx_runtime.jsxs)(ToastContext.Provider,{value:contextValue,children:[children,(0,jsx_runtime.jsx)(ToastContainerStyle,{children:toasts.map((toast=>(0,jsx_runtime.jsx)(Toast,{toast,close,style},toast.id)))})]})};Toast.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{toast:{required:!0,tsType:{name:"union",raw:"IToastStandard | IToastDetailed",elements:[{name:"IToastStandard"},{name:"IToastDetailed"}]},description:""},style:{required:!0,tsType:{name:"IVarStyles"},description:""},close:{required:!0,tsType:{name:"signature",type:"function",raw:"(s: string) => void",signature:{arguments:[{type:{name:"string"},name:"s"}],return:{name:"void"}}},description:""}}},ToastProvider.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},providerOptions:{required:!1,tsType:{name:"IToastProviderOptions"},description:""}}}},"./src/ui/components/TreeChart/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>TreeChart});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),useResize=__webpack_require__("./src/ui/helpers/useResize.ts"),useTooltip=__webpack_require__("./src/ui/helpers/useTooltip.tsx"),styles=__webpack_require__("./src/ui/styles/index.ts"),common=__webpack_require__("./src/ui/styles/common.tsx");const Base=emotion_styled_browser_esm.A.div`
  padding: 0.5rem;
  border: solid 1px black;
  background-color: white;
  color: black;
`,Title=emotion_styled_browser_esm.A.div`
  font-weight: bold;
`,TooltipContent=({data,node,head})=>{let rows=[],n=node;for(;n;){rows=[data.titleFn?.({path:n.name,pathCount:n.size,fullCount:head.size})||`${n.name} (${n.size}/${head.size})`,...rows],n=n.parent}return(0,jsx_runtime.jsx)(Base,{children:(0,jsx_runtime.jsx)(Title,{children:rows.map(((r,i)=>(0,jsx_runtime.jsx)("div",{style:{marginLeft:2*i+"px"},children:r},r)))})})};TooltipContent.__docgenInfo={description:"",methods:[],displayName:"TooltipContent",props:{data:{required:!0,tsType:{name:"TreeNodeData"},description:""},node:{required:!0,tsType:{name:"TreeNodeOut"},description:""},head:{required:!0,tsType:{name:"TreeNodeOut"},description:""}}};const base_Base=emotion_styled_browser_esm.A.div`
  border: solid 1px #ccc;
  max-height: 100%;
  overflow-y: auto;
`,NodeChildren=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`,Node=emotion_styled_browser_esm.A.div`
  margin: 1px;
  padding: 2px;
  display: flex;
  flex-flow: column;
  height: min-content;
  overflow: hidden;
  &[data-leaf='true'] {
    width: 100%;
    height: 100%;
    min-height: 1rem;
    min-width: 1rem;
    max-width: 10rem;
    max-height: 10rem;
  }
`,base_Title=emotion_styled_browser_esm.A.div`
  color: white;
  word-break: break-all;
  ${(0,common.gu)("black")};
  ${(0,common.tJ)(1)};
  min-height: 1rem;
  line-height: 1rem;
`,Render=({n,depth,head,headDim,tnd,UT})=>{const children=Object.values(n.children),leaf=0===children.length,sizeMult=n.size/head.size,biggerDim=Math.max(headDim.width,headDim.height),nodeSize=Math.floor(biggerDim*sizeMult).toString();return(0,jsx_runtime.jsxs)(Node,{"data-treenode":!0,"data-leaf":leaf.toString(),style:{backgroundColor:(0,styles.Ot)(depth),...leaf&&nodeSize&&{width:nodeSize+"px",height:nodeSize+"px"}},"data-ch":n.children.length,"data-size":n.size,onMouseLeave:()=>UT.setPos(void 0),onMouseMove:element=>{UT.setPos({element,parent:null,data:{data:tnd,node:n,head}}),element.preventDefault(),element.stopPropagation()},children:[n.name&&(0,jsx_runtime.jsx)(base_Title,{children:n.name}),children.length>0&&(0,jsx_runtime.jsx)(NodeChildren,{"data-type":"nc",children:children.map((c=>Render({UT,n:c,depth:depth+1,head,headDim,tnd})))})]},n.name)},TreeChart=tnd=>{const UT=(0,useTooltip.f)(),head=(({tnd:{data,pathDelimiter}})=>{if(0===data.length)return{children:{},size:0,name:"",depth:0,parent:void 0};const dm={size:0,children:{},name:"",depth:0,parent:void 0};return data.forEach((line=>{const names=line.path.split(pathDelimiter||"/");let node=dm,a=0;do{if(node.size+=line.size,void 0===names[a])break;node.children[names[a]]||(node.children[names[a]]={children:{},size:0,name:names[a],depth:a,parent:node}),node=node.children[names[a]],a+=1}while(node)})),dm})({tnd}),pd=(0,useResize.s)(),[headDim,setHeadDim]=(0,react.useState)(),r=(0,react.useRef)(null);return(0,react.useEffect)((()=>{if(!r.current)return;const width=r.current.clientWidth,height=r.current.clientHeight||r.current.clientWidth;setHeadDim({width,height})}),[pd]),0===head.size?(0,jsx_runtime.jsx)("div",{}):(0,jsx_runtime.jsxs)(base_Base,{ref:r,className:tnd.className,style:tnd.style,children:[(0,jsx_runtime.jsx)(UT.Comp,{pos:UT.pos,children:({data})=>(0,jsx_runtime.jsx)(TooltipContent,{...data})}),headDim&&Render({UT,tnd,n:head,depth:0,head,headDim})]})};TreeChart.__docgenInfo={description:"",methods:[],displayName:"TreeChart",props:{className:{required:!1,tsType:{name:"string"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  path: string;\n  /** count of this path. default 1 */\n  size: number;\n}",signature:{properties:[{key:"path",value:{name:"string",required:!0}},{key:"size",value:{name:"number",required:!0},description:"count of this path. default 1"}]}}],raw:"{\n  path: string;\n  /** count of this path. default 1 */\n  size: number;\n}[]"},description:""},pathDelimiter:{required:!1,tsType:{name:"string"},description:"split paths by this delim. default= /"},titleFn:{required:!1,tsType:{name:"signature",type:"function",raw:"(p: {\n  path: string;\n  pathCount: number;\n  fullCount: number;\n}) => string",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{\n  path: string;\n  pathCount: number;\n  fullCount: number;\n}",signature:{properties:[{key:"path",value:{name:"string",required:!0}},{key:"pathCount",value:{name:"number",required:!0}},{key:"fullCount",value:{name:"number",required:!0}}]}},name:"p"}],return:{name:"string"}}},description:"get the hover title for the node. has sensible default"},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/ui/components/UserImage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>UserProfileImage,J:()=>UserImage});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.2_react@19.1.0__@types+react@19.1.2_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),_common_helpers_array__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/common/helpers/array.ts"),_icons_UserOutline__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/icons/UserOutline.tsx");const Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.div`
  border-radius: 50%;
  border: solid 1px white;
  overflow: hidden;
  position: relative;

  @keyframes color {
    0% {
      fill: #bbb;
    }
    50% {
      fill: #aaa;
    }
    100% {
      fill: #bbb;
    }
  }
  svg {
    transition: all 1s;
  }
  &[data-fail='0'] {
    svg {
      fill: white;
    }
  }
  &[data-fail='0.5'] {
    svg {
      animation-name: color;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }
  &[data-fail='1'] {
    svg {
      fill: #333;
    }
  }
`,Img=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.A.img`
  position: absolute;
  top: 0;
  left: 0;
`,UserImage=({image,className,title="user image",opt})=>{const[failed,setFailed]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{setFailed(.5)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Base,{className,title,"data-fail":failed,style:{width:opt?.width||"100%",height:opt?.height||"100%",maxWidth:"100%",maxHeight:"100%"},children:[_icons_UserOutline__WEBPACK_IMPORTED_MODULE_3__.g,1!==failed&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Img,{alt:"user",src:image,onError:()=>setFailed(1),onAbort:()=>setFailed(1),style:{width:"100%",height:"100%",objectFit:"cover"}})]})},UserProfileImage=({className,user,opt={width:"2.5rem",height:"2.5rem"}})=>{const image=user?.picture,titleA=[user?.fullname,user?.userId].filter(_common_helpers_array__WEBPACK_IMPORTED_MODULE_4__.z2),title=0===titleA.length?"":titleA.join(" - ");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UserImage,{image,title,className,opt})};UserImage.__docgenInfo={description:"",methods:[],displayName:"UserImage",props:{image:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:'default "user image"',defaultValue:{value:"'user image'",computed:!1}},opt:{required:!1,tsType:{name:"signature",type:"object",raw:"{ width?: string; height?: string }",signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"height",value:{name:"string",required:!1}}]}},description:""}}},UserProfileImage.__docgenInfo={description:"",methods:[],displayName:"UserProfileImage",props:{className:{required:!1,tsType:{name:"string"},description:""},user:{required:!1,tsType:{name:"signature",type:"object",raw:"{ picture: string; fullname: string; userId: string }",signature:{properties:[{key:"picture",value:{name:"string",required:!0}},{key:"fullname",value:{name:"string",required:!0}},{key:"userId",value:{name:"string",required:!0}}]}},description:""},opt:{required:!1,tsType:{name:"signature",type:"object",raw:"{ width?: string; height?: string }",signature:{properties:[{key:"width",value:{name:"string",required:!1}},{key:"height",value:{name:"string",required:!1}}]}},description:"100% if not provided. default 2.5rem",defaultValue:{value:"{ width: '2.5rem', height: '2.5rem' }",computed:!1}}}}}}]);
//# sourceMappingURL=Icons-stories.1e299aa6.iframe.bundle.js.map