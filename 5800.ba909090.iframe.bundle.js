"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[5800],{"./src/ui/components/LineChart/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>LineChart});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@types+react@19.1.8_react@19.1.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js"),array=__webpack_require__("./src/common/helpers/array.ts"),math=__webpack_require__("./src/common/helpers/math.ts"),useTooltip=__webpack_require__("./src/ui/helpers/useTooltip.tsx"),common=__webpack_require__("./src/ui/styles/common.tsx"),FlexRow=__webpack_require__("./src/ui/components/FlexRow/index.tsx"),helpers_date=__webpack_require__("./src/common/helpers/date.ts");function plural(word,count){return word&&count&&count>1&&!["s","g"].find(w=>word.endsWith(w))?`${word}s`:word}const getDMY=(date,opt)=>{const date1=(0,helpers_date.fi)(date,opt?.dayOffset??0),d=String(date1.getDate()).padStart(2,"0"),m=String(date1.getMonth()+1).padStart(2,"0"),y=date1.getFullYear();return opt?.short?`${y.toString().substring(2,4)}-${m}-${d}`:`${y}-${m}-${d}`},timeLegendTitle=s=>getDMY(new Date(s),{short:!0}),timeTooltipTitle=s=>{if(!s)return"";const dmy=getDMY(new Date(s));let diff="";const d=new Date;if(d.getTime()-Number(s)<0)diff="Today";else{const d1=((lowDate,highDate)=>{const d=(0,helpers_date.AC)(lowDate,highDate??new Date);if(isNaN(d.totalYears))return"";let ts=`${d.totalYears} ${plural("yr",d.totalYears)} ago `;return d.totalMinutes<60?ts=`${d.totalMinutes} ${plural("min",d.totalMinutes)} ago `:d.totalHours<24?ts=`${d.totalHours} ${plural("hr",d.totalHours)} ago `:d.totalDays<365&&(ts=`${d.totalDays} ${plural("day",d.totalDays)} ago `),ts})(new Date(Number(s)),d);diff=`(${d1})`}return`${dmy} ${diff}`},isToday=s=>{if(!s)return!1;return(new Date).getTime()-Number(s)<0};var object=__webpack_require__("./src/common/helpers/object.ts");const getLegendItems=p=>{let values=p.selectedXs?.map(a=>({colour:p.colours[a.name],name:a.name,y:a.y,x:a.x}))??[];(p.fixed||0===values.length)&&(values=(({data,colours})=>{const val={};data.forEach(d=>{val[d.name]?val[d.name].value+=d.y:val[d.name]={colour:colours[d.name],name:d.name,value:d.y}});const values=Object.values(val).sort((a,b)=>a.value<b.value?1:-1);return(0,array.s)(values,4).part.map(v=>({colour:v.colour,name:v.name,y:v.value,x:0}))})(p));const total=(0,math.RM)(values.map(a=>a.y)),min=.1*total;let part=values.sort((a,b)=>a.y<b.y?1:-1),rest=[];part.length>4&&(part=(0,array.s)(part.filter(r=>r.y>min),4).part,rest=(0,object.C)(values).filter(r=>!part.find(p=>p.name===r.name)));const restTotal=(0,math.RM)(rest.map(s=>s.y));return{part,rest,restTotal,total}};var src_common=__webpack_require__("./src/common/index.ts");const interpolate=raw=>{const points=[],xs=raw.map(r=>r.x),ys=raw.map(r=>r.y),xMin=Math.min(...xs),xMax=Math.max(...xs),yMin=Math.min(...ys),yMax=Math.max(...ys);let xTime=!0;return(0,src_common.Bg)(raw.sort((a,b)=>a.x<b.x?-1:1),a=>a.name).map(({items})=>{const p=items.map((p,i)=>{var d;xTime&&(d=p.x,!isNaN(Number(d))&&Number(d)<3456e5||"Invalid Date"===new Date(d).toString())&&(xTime=!1);return{x1:100*(0,math.gO)({value:0===i?p.x:items[i-1].x,min:xMin,max:xMax}),x2:100*(0,math.gO)({value:p.x,min:xMin,max:xMax}),y1:100*(0,math.gO)({value:0===i?p.y:items[i-1].y,min:yMin,max:yMax}),y2:100*(0,math.gO)({value:p.y,min:yMin,max:yMax}),name:p.name,origX:p.x,origY:p.y,isToday:isToday(p.x),isLast:i===items.length-1}});points.push(...(0,src_common.ey)(p,s=>JSON.stringify(s)))}),{points,xTime}};var styles=__webpack_require__("./src/ui/styles/index.ts");const Base=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`,Bar=emotion_styled_browser_esm.A.div`
  width: 100%;
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
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  z-index: 1;

  @media ${styles.UN} {
    [data-group='1'],
    [data-group='2'] {
      display: none;
    }
  }
`,Items=emotion_styled_browser_esm.A.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  position: relative;
  justify-content: space-between;
  margin-top: 0.5rem;
`,Item=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: row;
  position: relative;
  align-items: center;
  &:not(:first-of-type) {
    padding-left: 0.5rem;
  }
  &:not(:last-of-type) {
    padding-right: 0.5rem;
  }
`,Col=emotion_styled_browser_esm.A.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.25rem;
`,LegendX=({data,lt,tt,colours,style})=>{const legendItems=getLegendItems({data,colours,fixed:!0,lt,tt}).part,xs=data.map(a=>a.x),ys=data.map(a=>a.y),minX=Math.min(...xs),maxX=Math.max(...xs),maxY=Math.max(...ys),itemsRaw=[{v:minX,group:0}],gap=(maxX-minX)/8;if(gap>src_common.iO)for(let a=1;a<8;a+=1)itemsRaw.push({v:itemsRaw[a-1].v+gap,group:a%3+1});itemsRaw.push({v:maxX,group:0});const items=itemsRaw.map(d=>({v:lt(d.v),group:d.group})),ch=maxY.toString().length+1;return(0,jsx_runtime.jsxs)(Base,{style:{...style,marginLeft:"auto",width:`calc(100% - ${ch}ch)`},children:[(0,jsx_runtime.jsxs)(Bar,{children:[(0,jsx_runtime.jsx)(Line,{style:{backgroundColor:style.color}}),(0,jsx_runtime.jsx)(Numbers,{children:items.map((i,i2)=>(0,jsx_runtime.jsx)("span",{"data-group":i.group,style:{backgroundColor:style.backgroundColor},children:i.v},i.v+i2))})]}),legendItems.length>1&&(0,jsx_runtime.jsx)(Items,{children:legendItems.map(k=>(0,jsx_runtime.jsxs)(Item,{children:[(0,jsx_runtime.jsx)(Col,{style:{backgroundColor:k.colour}}),k.name]},k.name))})]})};LegendX.__docgenInfo={description:"",methods:[],displayName:"LegendX",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  x: number;\n  y: number;\n  name: string;\n}",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"ILineChartItemRaw[]"},description:""},colours:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},lt:{required:!0,tsType:{name:"signature",type:"function",raw:"(a: number) => string",signature:{arguments:[{type:{name:"number"},name:"a"}],return:{name:"string"}}},description:""},tt:{required:!0,tsType:{name:"signature",type:"function",raw:"(a: number) => string",signature:{arguments:[{type:{name:"number"},name:"a"}],return:{name:"string"}}},description:""},style:{required:!0,tsType:{name:"IVarStyles"},description:""}}};const LegendY_Base=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-flow: row;
  width: 100%;
`,LegendY_Numbers=emotion_styled_browser_esm.A.div`
  width: 100%;
  display: flex;
  flex-flow: column-reverse;
  justify-content: space-between;
  z-index: 1;
  > span {
    text-align: right;
  }
`,LegendY=({data,style})=>{const ys=data.map(a=>a.y),minY=Math.min(...ys),maxY=Math.max(...ys),items=[minY],gap=(maxY-minY)/3;for(let a=1;a<3;a+=1)items.push(Math.floor(items[a-1]+gap));items.push(maxY);const ch=maxY.toString().length,roundNumber=num=>{const rounded=Math.round(100*num)/100;return rounded%1==0?rounded.toString():rounded.toFixed(2).replace(/\.?0+$/,"")};return(0,jsx_runtime.jsx)(LegendY_Base,{style:{...style,maxWidth:`${ch}ch`,paddingRight:"1ch"},children:(0,jsx_runtime.jsx)(LegendY_Numbers,{children:items.map((i,i2)=>(0,jsx_runtime.jsx)("span",{style:{color:style.color,backgroundColor:style.backgroundColor},children:roundNumber(i)},i+i2))})})};LegendY.__docgenInfo={description:"",methods:[],displayName:"LegendY",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  x: number;\n  y: number;\n  name: string;\n}",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"ILineChartItemRaw[]"},description:""},style:{required:!0,tsType:{name:"IVarStyles"},description:""}}};const TooltipContent_Base=emotion_styled_browser_esm.A.div`
  padding: 0.5rem;
`,Title=emotion_styled_browser_esm.A.div`
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
`,TooltipContent=p=>{const name=p.tt(p.selectedXs?.[0].x??0),roundNumber=num=>{const rounded=Math.round(100*num)/100;return rounded%1==0?rounded.toString():rounded.toFixed(2).replace(/\.?0+$/,"")};return(0,jsx_runtime.jsxs)(TooltipContent_Base,{style:{...p.style,border:`solid 1px ${p.style.borderColor}`},children:[(0,jsx_runtime.jsx)(Title,{children:name}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)("span",{children:"total"}),(0,jsx_runtime.jsx)(Total,{children:roundNumber(p.legendItems.total)})]}),p.legendItems.part.map(v=>(0,jsx_runtime.jsxs)(Row,{style:{color:v.colour},children:[(0,jsx_runtime.jsx)(ItemTitle,{children:v.name}),(0,jsx_runtime.jsx)(Total,{children:roundNumber(v.y)})]},v.name+v.y)),p.legendItems.rest.length>0&&(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsxs)("span",{children:[p.legendItems.rest.length," more"]}),(0,jsx_runtime.jsx)(Total,{children:roundNumber(p.legendItems.restTotal)})]})]})};TooltipContent.__docgenInfo={description:"",methods:[],displayName:"TooltipContent",props:{selectedPoints:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  x: number;\n  y: number;\n}",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}}],raw:"{\n  x: number;\n  y: number;\n}[]"},description:""},selectedXs:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  x: number;\n  y: number;\n  name: string;\n}",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"ILineChartItemRaw[]"},description:""},tt:{required:!0,tsType:{name:"signature",type:"function",raw:"(a: number) => string",signature:{arguments:[{type:{name:"number"},name:"a"}],return:{name:"string"}}},description:""},lt:{required:!0,tsType:{name:"signature",type:"function",raw:"(a: number) => string",signature:{arguments:[{type:{name:"number"},name:"a"}],return:{name:"string"}}},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  x: number;\n  y: number;\n  name: string;\n}",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"ILineChartItemRaw[]"},description:""},colours:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},legendItems:{required:!0,tsType:{name:"ILegendItems"},description:""},style:{required:!0,tsType:{name:"IVarStyles"},description:""}}};const Base_Base=emotion_styled_browser_esm.A.div`
  padding: 0.5rem;
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
`,Svg=emotion_styled_browser_esm.A.svg`
  padding: 2px;
  width: calc(100% - 5px);
  height: calc(100% - 5px);

  @keyframes dash {
    to {
      stroke-dashoffset: 1000;
    }
  }
`,LineChart=p=>{const UT=(0,useTooltip.f)(),style=(0,common.QS)(p.style),{points,xTime}=interpolate(p.data);let tt=p.tooltipTitle;!tt&&xTime&&(tt=timeTooltipTitle),tt??=s=>s.toString();let lt=p.legendTitle;!lt&&xTime&&(lt=timeLegendTitle),lt??=s=>s.toString();const lt2=lt,tt2=tt,legendItems=getLegendItems({colours:p.colours,data:p.data,tt:tt2,lt:lt2,...UT.pos?.data,fixed:!1}),SvgC=(0,jsx_runtime.jsx)(Svg,{style:{borderLeft:`solid 1px ${style.borderColor}`,borderTop:`solid 1px ${style.borderColor}`},transform:"scale(-1,1) scale(-1,-1)",strokeWidth:"3px",fillOpacity:1,preserveAspectRatio:"none",onMouseMove:element=>{const parent=element.currentTarget.closest("[data-type='lcb']"),bb=parent?.getBoundingClientRect();if(!bb)return;const relativeX=100*(0,math.gO)({value:element.pageX,min:bb.left,max:bb.left+bb.width});let selectedPoints=points.filter(p=>relativeX>=p.x1&&relativeX<p.x2);if(0===selectedPoints.length){const sp1=points.map(p=>({...p,gap:Math.abs(p.x1-relativeX)})).sort((a,b)=>a.gap<b.gap?-1:1),mingap=sp1[0].gap;selectedPoints=sp1.filter(r=>r.gap===mingap)}const selectedXs=(0,array.ey)(p.data.filter(({x,y})=>selectedPoints.find(a=>a.origX===x&&a.origY===y)),s=>JSON.stringify(s));UT.setPos({element,parent,data:{selectedPoints:selectedPoints.map(a=>({x:a.origX,y:a.origY})),selectedXs}})},children:points.map(p2=>{const isSelected=p2.origX===UT.pos?.data.selectedXs?.[0]?.x;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(isSelected||p2.x1===p2.x2||p2.isLast)&&(0,jsx_runtime.jsx)("circle",{cx:`${p2.x2}%`,cy:`${p2.y2}%`,r:"8px",style:{zIndex:1},...p2.isToday&&p2.isLast&&!isSelected?{stroke:p.colours[p2.name],fill:"transparent"}:{fill:p.colours[p2.name]}}),p2.x1!==p2.x2&&(0,jsx_runtime.jsx)("line",{strokeOpacity:legendItems.part.find(f=>f.name===p2.name)?1:.3,x1:`${p2.x1}%`,x2:`${p2.x2}%`,y1:`${p2.y1}%`,y2:`${p2.y2}%`,style:{stroke:p.colours[p2.name],...p2.isToday&&{strokeDasharray:10,animation:"dash 50s linear reverse infinite"}}})]},JSON.stringify(p2))})});return(0,jsx_runtime.jsxs)(Base_Base,{className:p.className,"data-type":"lcb",onMouseLeave:()=>UT.setPos(void 0),style,children:[(0,jsx_runtime.jsx)(UT.Comp,{pos:UT.pos,children:p2=>(0,jsx_runtime.jsx)(TooltipContent,{...p2,colours:p.colours,data:p.data,lt:lt2,tt:tt2,legendItems,style})}),(0,jsx_runtime.jsxs)(FlexRow.Y,{noWrap:!0,children:[(0,jsx_runtime.jsx)(LegendY,{data:p.data,style}),SvgC]}),(0,jsx_runtime.jsx)(LegendX,{data:p.data,colours:p.colours,lt,tt,style})]})};LineChart.__docgenInfo={description:"",methods:[],displayName:"LineChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  x: number;\n  y: number;\n  name: string;\n}",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"ILineChartItemRaw[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},colours:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"name -> colour"},tooltipTitle:{required:!1,tsType:{name:"signature",type:"function",raw:"(a: number) => string",signature:{arguments:[{type:{name:"number"},name:"a"}],return:{name:"string"}}},description:""},legendTitle:{required:!1,tsType:{name:"signature",type:"function",raw:"(a: number) => string",signature:{arguments:[{type:{name:"number"},name:"a"}],return:{name:"string"}}},description:""},style:{required:!1,tsType:{name:"Partial",elements:[{name:"IVarStyles"}],raw:"Partial<IVarStyles>"},description:""}}}}}]);
//# sourceMappingURL=5800.ba909090.iframe.bundle.js.map