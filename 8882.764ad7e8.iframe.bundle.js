"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[8882],{"./src/common/helpers/groupBy.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function groupByList(arr,getKey){const ret=[];return arr.forEach((item=>{const key=getKey(item),i=ret.find((r=>r.key===key));i?i.items.push(item):ret.push({key,items:[item]})})),ret}__webpack_require__.d(__webpack_exports__,{f1:()=>groupByList})},"./src/common/helpers/math.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P0:()=>sumArray,tb:()=>toFixedDown,vL:()=>rangePercentage});function sumArray(array){return array.reduce(((a,b)=>a+b),0)}function toFixedDown(num,scale){if(!`${num}`.includes("e"))return+`${Math.round(`${num}e+${scale}`)}e-${scale}`;const arr=`${num}`.split("e");let sig="";return+arr[1]+scale>0&&(sig="+"),+`${Math.round(`${+arr[0]}e${sig}${+arr[1]+scale}`)}e-${scale}`}function rangePercentage({value,min,max}){const v=function clamp({value,min,max}){return value<min?min:value>max?max:value}({value,min,max});return(v-min)/(max-min)}},"./src/ui/components/LineChart/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{LineChart:()=>Base_LineChart});var emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_@types+react@18.2.60_react@18.2.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),array=__webpack_require__("./src/common/helpers/array.ts");__webpack_require__("./node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js"),__webpack_require__("./src/common/helpers/string/base64.ts");__webpack_require__("./src/common/helpers/log.ts");var groupBy=__webpack_require__("./src/common/helpers/groupBy.ts");var math=__webpack_require__("./src/common/helpers/math.ts"),useTooltip=__webpack_require__("./src/ui/helpers/useTooltip.tsx");function plural(word,count){return word&&count&&count>1&&!["s","g"].find((w=>word.endsWith(w)))?`${word}s`:word}const dateDiffToString=(lowDate,highDate)=>{if(!lowDate)return"";const d=((lowDate,highDate)=>{const ticksSince=(highDate??new Date).getTime()-lowDate.getTime(),totalMinutes=(0,math.tb)(ticksSince/1e3/60,0),totalHours=(0,math.tb)(totalMinutes/60,0),totalDays=(0,math.tb)(totalHours/24,0);return{totalMinutes,totalHours,totalDays,totalYears:(0,math.tb)(totalDays/365,0)}})(lowDate,highDate??new Date);if(isNaN(d.totalYears))return"";let ts=`${d.totalYears} ${plural("yr",d.totalYears)} ago `;return d.totalMinutes<60?ts=`${d.totalMinutes} ${plural("min",d.totalMinutes)} ago `:d.totalHours<24?ts=`${d.totalHours} ${plural("hr",d.totalHours)} ago `:d.totalDays<365&&(ts=`${d.totalDays} ${plural("day",d.totalDays)} ago `),ts},getDMY=(date,opt)=>{const date1=((dIn,count)=>{const d=new Date(dIn);return d.setDate(d.getDate()+count),d})(date,opt?.dayOffset??0),d=String(date1.getDate()).padStart(2,"0"),m=String(date1.getMonth()+1).padStart(2,"0"),y=date1.getFullYear();return opt?.short?`${y.toString().substring(2,4)}-${m}-${d}`:`${y}-${m}-${d}`},timeLegendTitle=s=>getDMY(new Date(s),{short:!0}),timeTooltipTitle=s=>{if(!s)return"";const dmy=getDMY(new Date(s));let diff="";const d=new Date;if(d.getTime()-Number(s)<0)diff="Today";else{diff=`(${dateDiffToString(new Date(Number(s)),d)})`}return`${dmy} ${diff}`},interpolate=raw=>{const points=[],xs=raw.map((r=>r.x)),ys=raw.map((r=>r.y)),xMin=Math.min(...xs),xMax=Math.max(...xs),yMin=Math.min(...ys),yMax=Math.max(...ys);let xTime=!0;return(0,groupBy.f1)(raw.sort(((a,b)=>a.x<b.x?-1:1)),(a=>a.name)).map((({items})=>{const p=items.map(((p,i)=>{var d;xTime&&(d=p.x,!isNaN(Number(d))&&Number(d)<3456e5||"Invalid Date"===new Date(d).toString())&&(xTime=!1);return{x1:100*(0,math.vL)({value:0===i?p.x:items[i-1].x,min:xMin,max:xMax}),x2:100*(0,math.vL)({value:p.x,min:xMin,max:xMax}),y1:100*(0,math.vL)({value:0===i?p.y:items[i-1].y,min:yMin,max:yMax}),y2:100*(0,math.vL)({value:p.y,min:yMin,max:yMax}),name:p.name,origX:p.x,origY:p.y}}));points.push(...(0,array.dP)(p,(s=>JSON.stringify(s))))})),{points,xTime}},getLegendItems=({data})=>{const min=.1*data.total;let part=data.values.sort(((a,b)=>a.value<b.value?1:-1)),rest=[];part.length>4&&(part=(0,array.qn)(part.filter((r=>r.value>min)),4).part,rest=JSON.parse(JSON.stringify(data.values)).filter((r=>!part.find((p=>p.name===r.name)))));const restTotal=(0,math.P0)(rest.map((s=>s.value)));return{part,rest,restTotal}};try{getLegendItems.displayName="getLegendItems",getLegendItems.__docgenInfo={description:"",displayName:"getLegendItems",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ total: number; values: { value: number; colour: string; name: string; }[]; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/LineChart/getLegendItems.tsx#getLegendItems"]={docgenInfo:getLegendItems.__docgenInfo,name:"getLegendItems",path:"src/ui/components/LineChart/getLegendItems.tsx#getLegendItems"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Base=emotion_styled_browser_esm.Z.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`,Bar=emotion_styled_browser_esm.Z.div`
  width: 100%;
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
  background-color: var(--main-fg);
`,Numbers=emotion_styled_browser_esm.Z.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  z-index: 1;
  > span {
    background-color: var(--main-bg);
  }
`,Items=emotion_styled_browser_esm.Z.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  position: relative;
  justify-content: space-between;
`,Item=emotion_styled_browser_esm.Z.div`
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
`,Legend=p=>{const total=(0,math.P0)(p.data.map((a=>a.y))),val={};p.data.forEach((d=>{val[d.name]?val[d.name].value+=d.y:val[d.name]={colour:p.colours[d.name],name:d.name,value:d.y}}));const values=Object.values(val),keys=getLegendItems({data:{total,values}}).part.map((v=>({colour:v.colour,name:v.name}))),xs=p.data.map((a=>a.x)),minX=Math.min(...xs),maxX=Math.max(...xs),itemsRaw=[minX],gap=(maxX-minX)/10;if(gap>1)for(let a=1;a<9;a+=1)itemsRaw.push(itemsRaw[a-1]+gap);itemsRaw.push(maxX);const items=itemsRaw.map((d=>p.legendTitle?.(d)??d));return(0,jsx_runtime.jsxs)(Base,{children:[(0,jsx_runtime.jsxs)(Bar,{children:[(0,jsx_runtime.jsx)(Line,{}),(0,jsx_runtime.jsx)(Numbers,{children:items.map((i=>(0,jsx_runtime.jsx)("span",{children:i},i)))})]}),keys.length>1&&(0,jsx_runtime.jsx)(Items,{children:keys.map((k=>(0,jsx_runtime.jsxs)(Item,{children:[(0,jsx_runtime.jsx)(Col,{style:{backgroundColor:k.colour}}),k.name]},k.name)))})]})};Legend.displayName="Legend";try{Legend.displayName="Legend",Legend.__docgenInfo={description:"",displayName:"Legend",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ILineChartItemRaw[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},colours:{defaultValue:null,description:"name -> colour",name:"colours",required:!0,type:{name:"Record<string, string>"}},tooltipTitle:{defaultValue:null,description:"",name:"tooltipTitle",required:!1,type:{name:"((a: number) => string)"}},legendTitle:{defaultValue:null,description:"",name:"legendTitle",required:!1,type:{name:"((a: number) => string)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/LineChart/Legend.tsx#Legend"]={docgenInfo:Legend.__docgenInfo,name:"Legend",path:"src/ui/components/LineChart/Legend.tsx#Legend"})}catch(__react_docgen_typescript_loader_error){}const TooltipContent_Base=emotion_styled_browser_esm.Z.div`
  background-color: var(--main-bg);
  border: solid 1px var(--main-bg-mid);
  padding: 0.5rem;
`,Title=emotion_styled_browser_esm.Z.div`
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
`,TooltipContent=p=>{const data={name:p.name,total:(0,math.P0)(p.values.map((a=>a.value))),values:p.values},{part,rest,restTotal}=getLegendItems({data});return(0,jsx_runtime.jsxs)(TooltipContent_Base,{children:[(0,jsx_runtime.jsx)(Title,{children:data.name}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)("span",{children:"total"}),(0,jsx_runtime.jsx)(Total,{children:data.total})]}),part.map((v=>(0,jsx_runtime.jsxs)(Row,{style:{color:v.colour},children:[(0,jsx_runtime.jsx)(ItemTitle,{children:v.name}),(0,jsx_runtime.jsx)(Total,{children:v.value})]},v.name+v.value))),rest.length>0&&(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsxs)("span",{children:[rest.length," more"]}),(0,jsx_runtime.jsx)(Total,{children:restTotal})]})]})};TooltipContent.displayName="TooltipContent";try{TooltipContent.displayName="TooltipContent",TooltipContent.__docgenInfo={description:"",displayName:"TooltipContent",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},x:{defaultValue:null,description:"",name:"x",required:!1,type:{name:"number"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"{ name: string; value: number; colour: string; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/LineChart/TooltipContent.tsx#TooltipContent"]={docgenInfo:TooltipContent.__docgenInfo,name:"TooltipContent",path:"src/ui/components/LineChart/TooltipContent.tsx#TooltipContent"})}catch(__react_docgen_typescript_loader_error){}const Base_Base=emotion_styled_browser_esm.Z.div`
  width: calc(100% - 1px);
  height: calc(100% - 1px);
  padding: 0.5rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
`,Base_LineChart=p=>{const UT=(0,useTooltip.l)(),{points,xTime}=interpolate(p.data);let tt=p.tooltipTitle;!tt&&xTime&&(tt=timeTooltipTitle),tt||(tt=s=>s.toString());let lt=p.legendTitle;return!lt&&xTime&&(lt=timeLegendTitle),lt||(lt=s=>s.toString()),(0,jsx_runtime.jsxs)(Base_Base,{className:p.className,"data-type":"lcb",onMouseLeave:()=>UT.setPos(void 0),children:[(0,jsx_runtime.jsx)(UT.Comp,{pos:UT.pos,children:p=>(0,jsx_runtime.jsx)(TooltipContent,{...p})}),(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 100 100",transform:"scale(-1,1) scale(-1,-1)",width:"100%",height:"100%",strokeWidth:"0.3%",fillOpacity:1,preserveAspectRatio:"none",onMouseMove:element=>{const parent=element.currentTarget.closest("[data-type='lcb']"),bb=parent?.getBoundingClientRect();if(!bb)return;const relativeX=100*(0,math.vL)({value:element.pageX,min:bb.left,max:bb.left+bb.width}),selectedPoints=points.filter((p=>relativeX>=p.x1&&relativeX<p.x2)).map((a=>({x:a.origX,y:a.origY}))),selectedXs=(0,array.dP)(p.data.filter((({x,y})=>selectedPoints.find((a=>a.x===x&&a.y===y)))),(s=>JSON.stringify(s))),td={name:tt?.(selectedXs?.[0].x)??"",total:1,values:selectedXs.map((a=>({colour:p.colours[a.name],name:a.name,value:a.y}))),x:selectedXs?.[0].x};UT.setPos({element,parent,data:td})},children:points.map((p2=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[p2.origX===UT.pos?.data.x&&(0,jsx_runtime.jsx)("circle",{cx:p2.x2,cy:p2.y2,r:1,fill:p.colours[p2.name]}),(0,jsx_runtime.jsx)("line",{strokeOpacity:1,x1:p2.x1,x2:p2.x2,y1:p2.y1,y2:p2.y2,style:{stroke:p.colours[p2.name]}})]},JSON.stringify(p2))))}),(0,jsx_runtime.jsx)(Legend,{colours:p.colours,data:p.data,tooltipTitle:tt,legendTitle:lt})]})};Base_LineChart.displayName="LineChart";try{Base_LineChart.displayName="LineChart",Base_LineChart.__docgenInfo={description:"",displayName:"LineChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ILineChartItemRaw[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},colours:{defaultValue:null,description:"name -> colour",name:"colours",required:!0,type:{name:"Record<string, string>"}},tooltipTitle:{defaultValue:null,description:"",name:"tooltipTitle",required:!1,type:{name:"((a: number) => string)"}},legendTitle:{defaultValue:null,description:"",name:"legendTitle",required:!1,type:{name:"((a: number) => string)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/LineChart/Base.tsx#LineChart"]={docgenInfo:Base_LineChart.__docgenInfo,name:"LineChart",path:"src/ui/components/LineChart/Base.tsx#LineChart"})}catch(__react_docgen_typescript_loader_error){}try{LineChart.displayName="LineChart",LineChart.__docgenInfo={description:"",displayName:"LineChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ILineChartItemRaw[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},colours:{defaultValue:null,description:"name -> colour",name:"colours",required:!0,type:{name:"Record<string, string>"}},tooltipTitle:{defaultValue:null,description:"",name:"tooltipTitle",required:!1,type:{name:"((a: number) => string)"}},legendTitle:{defaultValue:null,description:"",name:"legendTitle",required:!1,type:{name:"((a: number) => string)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/components/LineChart/index.tsx#LineChart"]={docgenInfo:LineChart.__docgenInfo,name:"LineChart",path:"src/ui/components/LineChart/index.tsx#LineChart"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=8882.764ad7e8.iframe.bundle.js.map