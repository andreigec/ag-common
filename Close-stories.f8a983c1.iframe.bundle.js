"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[8373],{"./stories/Close.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultWithArgs:()=>DefaultWithArgs,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_src_ui_components_Close__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/Close/index.tsx"),base={title:"UI/Close",component:_src_ui_components_Close__WEBPACK_IMPORTED_MODULE_1__.b},Primary=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{backgroundColor:"#333",position:"relative",width:"5rem",height:"5rem"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ui_components_Close__WEBPACK_IMPORTED_MODULE_1__.b,args))}.bind({});Primary.args={};const __WEBPACK_DEFAULT_EXPORT__=base;var DefaultWithArgs=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Primary,Primary.args)};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <div style={{\n  backgroundColor: '#333',\n  position: 'relative',\n  width: '5rem',\n  height: '5rem'\n}}>\n    <Close {...args} />\n  </div>",...Primary.parameters?.docs?.source}}},DefaultWithArgs.parameters={...DefaultWithArgs.parameters,docs:{...DefaultWithArgs.parameters?.docs,source:{originalSource:"() => <Primary {...(Primary.args as IClose)} />",...DefaultWithArgs.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","DefaultWithArgs"]},"./src/common/helpers/array.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _instance;__webpack_require__.d(__webpack_exports__,{Ct:()=>flat,G:()=>arrayToObject,Kl:()=>findLastIndex,NV:()=>insertElementAtIndex,ey:()=>distinctBy,s:()=>take,z2:()=>notEmpty});var arrayToObject=function(arr,keyF,valueF){var ret={};return arr&&keyF?(arr.forEach((function(v){var k=keyF(v);ret[k]=valueF(v)})),ret):ret},flat=function(arr){return(_instance=[]).concat.apply(_instance,_to_consumable_array(arr))},take=function(array,num){var safeNum=Math.max(0,Math.min(num,array.length));return{part:array.slice(0,safeNum),rest:array.slice(safeNum)}},notEmpty=function(value){return null!=value&&!1!==value&&""!==value};function distinctBy(data,key,ignoreEmpty){if(!data||0===data.length)return data;var hashSet=new Set;return data.filter((function(x){var keyVal;return!(!(keyVal="string"==typeof key?x[key]:key(x))&&ignoreEmpty)&&(!hashSet.has(keyVal)&&(hashSet.add(keyVal),!0))}))}function findLastIndex(arr,predicate){for(var i=arr.length-1;i>=0;i--)if(predicate(arr[i],i,arr))return i;return-1}var insertElementAtIndex=function(arr,element,index){return _to_consumable_array(arr.slice(0,index)).concat([element],_to_consumable_array(arr.slice(index)))}},"./src/ui/components/Close/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Close});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_helpers_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/helpers/dom.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  position: absolute;\n  z-index: 1;\n  width: 32px;\n  height: 32px;\n  opacity: 0.3;\n  cursor: pointer;\n  background-color: white;\n  top: 0;\n  right: 0;\n  &:hover {\n    opacity: 1;\n  }\n  &:before,\n  &:after {\n    position: absolute;\n    left: 15px;\n    content: ' ';\n    height: 33px;\n    width: 2px;\n    background-color: #333;\n  }\n  &:before {\n    transform: rotate(45deg);\n  }\n  &:after {\n    transform: rotate(-45deg);\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject()),Close=function(p){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Base,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},(0,_helpers_dom__WEBPACK_IMPORTED_MODULE_2__.r8)(p)),{className:p.className,onClick:function(e){var _p_onClick;return null===(_p_onClick=p.onClick)||void 0===_p_onClick?void 0:_p_onClick.call(p,e)}}))};Close.__docgenInfo={description:"",methods:[],displayName:"Close",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement, MouseEvent>",elements:[{name:"HTMLDivElement"},{name:"MouseEvent"}]},name:"ev"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/ui/helpers/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mO:()=>convertRemToPixels,nO:()=>isRightClick,r8:()=>filterDataProps});var _common_helpers_array__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/helpers/array.ts"),convertRemToPixels=function(rem){var fontSize="16px";return"undefined"!=typeof window&&(fontSize=getComputedStyle(document.documentElement).fontSize),rem*parseFloat(fontSize)},filterDataProps=function(p){var x=Object.entries(p).filter((function(r){return r[0].startsWith("data-")})).map((function(r){return r}));return(0,_common_helpers_array__WEBPACK_IMPORTED_MODULE_0__.G)(x,(function(s){return s[0]}),(function(s){return s[1]}))},isRightClick=function(event){var isRightMB=!1;return"which"in event?isRightMB=3==event.which:"button"in event&&(isRightMB=2==event.button),isRightMB}}}]);