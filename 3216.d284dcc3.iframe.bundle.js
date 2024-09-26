"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[3216,1742],{"./src/common/helpers/array.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _instance;__webpack_require__.d(__webpack_exports__,{Ct:()=>flat,G:()=>arrayToObject,Kl:()=>findLastIndex,NV:()=>insertElementAtIndex,ey:()=>distinctBy,s:()=>take,z2:()=>notEmpty});var arrayToObject=function(arr,keyF,valueF){var ret={};return arr&&keyF?(arr.forEach((function(v){var k=keyF(v);ret[k]=valueF(v)})),ret):ret},flat=function(arr){return(_instance=[]).concat.apply(_instance,_to_consumable_array(arr))},take=function(array,num){var safeNum=Math.max(0,Math.min(num,array.length));return{part:array.slice(0,safeNum),rest:array.slice(safeNum)}},notEmpty=function(value){return null!=value&&!1!==value&&""!==value};function distinctBy(data,key,ignoreEmpty){if(!data||0===data.length)return data;var hashSet=new Set;return data.filter((function(x){var keyVal;return!(!(keyVal="string"==typeof key?x[key]:key(x))&&ignoreEmpty)&&(!hashSet.has(keyVal)&&(hashSet.add(keyVal),!0))}))}function findLastIndex(arr,predicate){for(var i=arr.length-1;i>=0;i--)if(predicate(arr[i],i,arr))return i;return-1}var insertElementAtIndex=function(arr,element,index){return _to_consumable_array(arr.slice(0,index)).concat([element],_to_consumable_array(arr.slice(index)))}},"./src/ui/components/FlexRow/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>FlexRow});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  position: relative;\n  display: flex;\n  flex-flow: row wrap;\n\n  &[data-nowrap='true'] {\n    flex-flow: row;\n  }\n\n  &[data-nogrow='true'] {\n    flex-grow: 0;\n  }\n  &[data-nogrow='false'] {\n    width: 100%;\n    height: 100%;\n    flex-grow: 1;\n  }\n\n  &[data-center='true'] {\n    justify-content: center;\n    align-items: center;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject()),FlexRow=function(props){var _props_noWrap,_props_noGrow,_props_center;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Base,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({"data-nowrap":null!==(_props_noWrap=props.noWrap)&&void 0!==_props_noWrap&&_props_noWrap,"data-nogrow":null!==(_props_noGrow=props.noGrow)&&void 0!==_props_noGrow&&_props_noGrow,"data-center":null!==(_props_center=props.center)&&void 0!==_props_center&&_props_center},props),props.children)};FlexRow.__docgenInfo={description:"",methods:[],displayName:"FlexRow",props:{noGrow:{required:!1,tsType:{name:"boolean"},description:""},center:{required:!1,tsType:{name:"boolean"},description:""},noWrap:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},break:{required:!1,tsType:{name:"union",raw:"'small' | 'vsmall'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'vsmall'"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/ui/components/TextEdit/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C0:()=>CheckboxEdit,mF:()=>TextEdit});var emotion_styled_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),useOnClickOutside=__webpack_require__("./src/ui/helpers/useOnClickOutside.ts"),Save=__webpack_require__("./src/ui/icons/Save.tsx"),Undo=__webpack_require__("./src/ui/icons/Undo.tsx"),common=__webpack_require__("./src/ui/styles/common.tsx"),FlexRow=__webpack_require__("./src/ui/components/FlexRow/index.tsx"),emotion_react_browser_esm=__webpack_require__("./node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colours=__webpack_require__("./src/ui/styles/colours.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  padding: 0.5rem;\n\n  display: flex;\n  position: relative;\n  align-items: center;\n  background-color: transparent;\n\n  justify-content: flex-start;\n  flex-grow: 1;\n  width: calc(100% - 1rem - 2px); //padding + border\n  border: solid 1px transparent;\n\n  &[data-pointer='true'] {\n    cursor: pointer;\n  }\n  &[data-nogrow='true'] {\n    flex-grow: 0;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  word-break: break-all;\n  font-size: inherit;\n  font-weight: inherit;\n  font-family: inherit;\n\n  &[data-type='checkbox'] {\n    cursor: pointer;\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  ",";\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  z-index: 1;\n  font-size: 1rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  position: absolute;\n  cursor: pointer;\n  svg {\n    fill: ",";\n  }\n"]);return _templateObject3=function _templateObject(){return data},data}var ValueBox=emotion_styled_browser_esm.A.div(_templateObject()),valueCss=(0,emotion_react_browser_esm.AH)(_templateObject1()),ValueInputCB=emotion_styled_browser_esm.A.input(_templateObject2(),valueCss),IconD=emotion_styled_browser_esm.A.div(_templateObject3(),colours.M8.notificationBlue),iconRight={right:"0"},iconLeft={right:"1.5rem"};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function CheckboxEdit_templateObject(){var data=function CheckboxEdit_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  position: absolute;\n  top: 0;\n  right: -2rem;\n"]);return CheckboxEdit_templateObject=function _templateObject(){return data},data}var Icons=(0,emotion_styled_browser_esm.A)(FlexRow.Y)(CheckboxEdit_templateObject()),CheckboxEdit=function(param){var defaultValue=param.defaultValue,onSubmit=param.onSubmit,_param_noGrow=param.noGrow,noGrow=void 0!==_param_noGrow&&_param_noGrow,_param_allowUndo=param.allowUndo,allowUndo=void 0!==_param_allowUndo&&_param_allowUndo,rightSpan=param.rightSpan,className=param.className,ref=(0,react.useRef)(null),_useState=_sliced_to_array((0,react.useState)(defaultValue),2),value=_useState[0],setValue=_useState[1];(0,react.useEffect)((function(){setValue(defaultValue)}),[defaultValue]);var valueChange=value!==defaultValue;return(0,useOnClickOutside.W)({ref,moveMouseOutside:!1},(function(){valueChange&&onSubmit(value)})),react.createElement(ValueBox,_object_spread_props(_object_spread({},common.mG),{className,style:{cursor:"pointer",width:"fit-content",flexGrow:0},ref,"data-nogrow":noGrow,onClick:function(e){allowUndo?setValue(!value):onSubmit(!value),e.stopPropagation()}}),react.createElement(ValueInputCB,{type:"checkbox","data-type":"checkbox",checked:value,onKeyDown:function(e){"Enter"===e.key&&value!==defaultValue&&onSubmit(value),e.stopPropagation()},onChange:function(e){allowUndo?setValue(!value):onSubmit(!value),e.stopPropagation()}}),allowUndo&&value!==defaultValue&&react.createElement(Icons,{center:!0},react.createElement(IconD,{style:iconLeft,onClick:function(e){value!==defaultValue&&onSubmit(value),e.stopPropagation()}},react.createElement(Save.e,null)),react.createElement(IconD,{style:_object_spread_props(_object_spread({},iconRight),{fill:"#134563"}),onClick:function(e){setValue(defaultValue),e.stopPropagation()}},react.createElement(Undo.V,null))),rightSpan||"")};CheckboxEdit.__docgenInfo={description:"",methods:[],displayName:"CheckboxEdit",props:{className:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!0,tsType:{name:"boolean"},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"val"}],return:{name:"void"}}},description:""},noGrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},allowUndo:{required:!1,tsType:{name:"boolean"},description:"if true, will add undo button after changes. if false, will submit after every keypress. default false",defaultValue:{value:"false",computed:!1}},rightSpan:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"display to right of CB"}}};var dom=__webpack_require__("./src/ui/helpers/dom.ts"),Pencil=__webpack_require__("./src/ui/icons/Pencil.tsx");function LengthBox_templateObject(){var data=function LengthBox_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  /* position: absolute;\n  bottom: 0.5rem;\n  right: 0.5rem; */\n"]);return LengthBox_templateObject=function _templateObject(){return data},data}var Base=emotion_styled_browser_esm.A.div(LengthBox_templateObject()),TextEditLengthBox=function(param){var min=param.min,max=param.max,color="black";return min/max>.55&&(color="indianred"),min===max&&(color="red"),react.createElement(Base,{style:{color}},min,"/",max)};function TextEdit_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TextEdit_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TextEdit_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){TextEdit_define_property(target,key,source[key])}))}return target}function TextEdit_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function TextEdit_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function TextEdit_sliced_to_array(arr,i){return function TextEdit_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function TextEdit_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function TextEdit_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return TextEdit_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TextEdit_array_like_to_array(o,minLen)}(arr,i)||function TextEdit_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function TextEdit_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function TextEdit_templateObject(){var data=TextEdit_tagged_template_literal(["\n  ",";\n  word-break: break-word;\n  flex-basis: calc(100% - 3rem);\n"]);return TextEdit_templateObject=function _templateObject(){return data},data}function TextEdit_templateObject1(){var data=TextEdit_tagged_template_literal(["\n  outline: none;\n  border: 0;\n  word-break: break-word;\n  ",";\n  resize: none;\n  overflow: hidden;\n  background-color: white;\n  color: black;\n  font-size: inherit;\n  font-weight: inherit;\n  font-family: inherit;\n  &::placeholder {\n    color: #bbb;\n  }\n"]);return TextEdit_templateObject1=function _templateObject(){return data},data}function TextEdit_templateObject2(){var data=TextEdit_tagged_template_literal(["\n  ","\n  &[data-editing='true'] {\n    min-height: 5rem;\n  }\n"]);return TextEdit_templateObject2=function _templateObject(){return data},data}function TextEdit_templateObject3(){var data=TextEdit_tagged_template_literal(["\n  ",";\n"]);return TextEdit_templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=TextEdit_tagged_template_literal(["\n  border: solid 1px #ccc;\n"]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=TextEdit_tagged_template_literal(["\n  display: flex;\n  flex-flow: row;\n  align-content: center;\n  &[data-singleline='false'] {\n    position: absolute;\n    bottom: 0.5rem;\n    right: 0.5rem;\n  }\n"]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=TextEdit_tagged_template_literal(["\n  width: 1.5rem;\n  display: flex;\n  cursor: pointer;\n  &:hover {\n    filter: saturate(3);\n  }\n"]);return _templateObject6=function _templateObject(){return data},data}TextEditLengthBox.__docgenInfo={description:"",methods:[],displayName:"TextEditLengthBox",props:{min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""}}};var ValueReadonly=emotion_styled_browser_esm.A.div(TextEdit_templateObject(),valueCss),basecss=(0,emotion_react_browser_esm.AH)(TextEdit_templateObject1(),valueCss),ValueTextArea=emotion_styled_browser_esm.A.textarea(TextEdit_templateObject2(),basecss),ValueTextBox=emotion_styled_browser_esm.A.input(TextEdit_templateObject3(),basecss),ValueBoxEdit=(0,emotion_styled_browser_esm.A)(ValueBox)(_templateObject4()),Right=emotion_styled_browser_esm.A.div(_templateObject5()),Icon=emotion_styled_browser_esm.A.div(_templateObject6()),TextEdit=(0,react.forwardRef)((function(p,ref){var _p_defaultValue=p.defaultValue,defaultValue=void 0===_p_defaultValue?"":_p_defaultValue,defaultEditing=p.defaultEditing,_p_disableEdit=p.disableEdit,disableEdit=void 0!==_p_disableEdit&&_p_disableEdit,_p_singleLine=p.singleLine,singleLine=void 0!==_p_singleLine&&_p_singleLine,_p_noGrow=p.noGrow,noGrow=void 0!==_p_noGrow&&_p_noGrow,_p_allowUndo=p.allowUndo,allowUndo=void 0===_p_allowUndo||_p_allowUndo,divRef=(0,react.useRef)(null),taref=(0,react.useRef)(null),_useState=TextEdit_sliced_to_array((0,react.useState)(defaultValue),2),value=_useState[0],setValue=_useState[1],_useState1=TextEdit_sliced_to_array((0,react.useState)(!!defaultEditing),2),editing=_useState1[0],setEditingRaw=_useState1[1],valueChange=value!==defaultValue;(0,react.useImperativeHandle)(ref,(function(){return{setValue:function(v){v!==value&&setValue(v)},focus:function(){var _taref_current;return null===(_taref_current=taref.current)||void 0===_taref_current?void 0:_taref_current.focus()},getValue:function(){var _taref_current;return null===(_taref_current=taref.current)||void 0===_taref_current?void 0:_taref_current.value}}})),(0,useOnClickOutside.W)({disabled:null===p.onClickOutsideWithNoValue||disableEdit,ref:divRef,moveMouseOutside:!1},(function(){valueChange?p.onSubmit(value,!1):(!disableEdit&&p.onClickOutsideWithNoValue&&p.onClickOutsideWithNoValue(),!disableEdit&&editing&&defaultEditing||editing&&setEditingRaw(!1))}));var _p_leftContent,setEditing=(0,react.useCallback)((function(b){setEditingRaw(b),p.onEditingChange&&p.onEditingChange(b)}),[p]);if((0,react.useEffect)((function(){(null==defaultEditing?void 0:defaultEditing.focus)&&taref.current&&taref.current.focus()}),[null==defaultEditing?void 0:defaultEditing.focus]),!editing||disableEdit)return react.createElement(ValueBox,TextEdit_object_spread(TextEdit_object_spread_props(TextEdit_object_spread({},common.mG),{className:p.className,"data-editing":"false",onClick:function(){var _p_onClickNotEditing;return null===(_p_onClickNotEditing=p.onClickNotEditing)||void 0===_p_onClickNotEditing?void 0:_p_onClickNotEditing.call(p)},"data-pointer":p.onClickNotEditing?"true":"false","data-nogrow":noGrow}),(0,dom.r8)(p)),null!==(_p_leftContent=p.leftContent)&&void 0!==_p_leftContent?_p_leftContent:null,react.createElement(ValueReadonly,{"data-type":"text"},value||react.createElement("span",{style:{color:"#ccc"}},p.placeholder)),react.createElement(Right,null,!disableEdit&&react.createElement(Icon,{style:iconRight,onClick:function(e){e.stopPropagation(),setEditing(!0)}},react.createElement(Pencil.g,null))));var _p_leftContent1,Comp=singleLine?ValueTextBox:ValueTextArea;return react.createElement(ValueBoxEdit,TextEdit_object_spread(TextEdit_object_spread_props(TextEdit_object_spread({},common.mG),{className:p.className,"data-editing":"true",ref,tabIndex:-1,"data-nogrow":noGrow}),(0,dom.r8)(p)),null!==(_p_leftContent1=p.leftContent)&&void 0!==_p_leftContent1?_p_leftContent1:null,react.createElement(Comp,{tabIndex:editing?0:void 0,"data-editing":"true","data-valuechange":valueChange.toString(),ref:taref,"data-type":"text",value,onChange:function(v){setValue(v.currentTarget.value),allowUndo||p.onSubmit(v.currentTarget.value,!1)},placeholder:p.placeholder,rows:singleLine?1:void 0,maxLength:p.maxLength,onKeyDown:function(e){var _p_onKeyDown;!1!==(null===(_p_onKeyDown=p.onKeyDown)||void 0===_p_onKeyDown?void 0:_p_onKeyDown.call(p,e))?singleLine&&e.code.endsWith("Enter")&&p.onSubmit(value,!0):e.preventDefault()}}),p.maxLength&&react.createElement(Right,{"data-singleline":singleLine},react.createElement(TextEditLengthBox,{min:value.length,max:p.maxLength})),allowUndo&&react.createElement(Right,null,valueChange&&react.createElement(Icon,{style:iconLeft,onClick:function(){return p.onSubmit(value,!1)}},react.createElement(Save.e,null)),(valueChange||editing!==!!defaultEditing)&&react.createElement(Icon,{style:TextEdit_object_spread_props(TextEdit_object_spread({},iconRight),{fill:"#134563"}),onClick:function(){setEditing(!!defaultEditing),setValue(defaultValue)}},react.createElement(Undo.V,null))))}));TextEdit.__docgenInfo={description:"",methods:[{name:"setValue",docblock:null,modifiers:[],params:[{name:"v",optional:!1,type:null}],returns:null},{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"getValue",docblock:null,modifiers:[],params:[],returns:null}],displayName:"TextEdit"}},"./src/ui/helpers/dom.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mO:()=>convertRemToPixels,nO:()=>isRightClick,r8:()=>filterDataProps});var _common_helpers_array__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/helpers/array.ts"),convertRemToPixels=function(rem){var fontSize="16px";return"undefined"!=typeof window&&(fontSize=getComputedStyle(document.documentElement).fontSize),rem*parseFloat(fontSize)},filterDataProps=function(p){var x=Object.entries(p).filter((function(r){return r[0].startsWith("data-")})).map((function(r){return r}));return(0,_common_helpers_array__WEBPACK_IMPORTED_MODULE_0__.G)(x,(function(s){return s[0]}),(function(s){return s[1]}))},isRightClick=function(event){var isRightMB=!1;return"which"in event?isRightMB=3==event.which:"button"in event&&(isRightMB=2==event.button),isRightMB}},"./src/ui/helpers/useOnClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>useOnClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/helpers/dom.ts");function useOnClickOutside(p,handler){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var listener=function(event){var _p_disabled;if(!(p.disabled&&"boolean"!=typeof p.disabled?p.disabled():null!==(_p_disabled=p.disabled)&&void 0!==_p_disabled&&_p_disabled)&&!(0,_dom__WEBPACK_IMPORTED_MODULE_1__.nO)(event)){var el=p.ref.current;if(el){for(var n=event.target,found=!1;n;){if(n.isEqualNode(el)){found=!0;break}n=n.parentNode}found||handler(event)}}};return document.addEventListener("mousedown",listener),document.addEventListener("touchstart",listener),p.moveMouseOutside&&document.addEventListener("mousemove",listener),function(){try{document.removeEventListener("mousedown",listener),document.removeEventListener("touchstart",listener),document.removeEventListener("mousemove",listener)}catch(e){}}}),[p,handler])}},"./src/ui/icons/Pencil.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Pencil});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),Pencil=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M9.6 40.4l2.5-9.9L27 15.6l7.4 7.4-14.9 14.9-9.9 2.5zm4.3-8.9l-1.5 6.1 6.1-1.5L31.6 23 27 18.4 13.9 31.5z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M17.8 37.3c-.6-2.5-2.6-4.5-5.1-5.1l.5-1.9c3.2.8 5.7 3.3 6.5 6.5l-1.9.5z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M29.298 19.287l1.414 1.414-13.01 13.02-1.414-1.412zM11 39l2.9-.7c-.3-1.1-1.1-1.9-2.2-2.2L11 39zM35 22.4L27.6 15l3-3 .5.1c3.6.5 6.4 3.3 6.9 6.9l.1.5-3.1 2.9zM30.4 15l4.6 4.6.9-.9c-.5-2.3-2.3-4.1-4.6-4.6l-.9.9z"}))};Pencil.__docgenInfo={description:"",methods:[],displayName:"Pencil"}},"./src/ui/icons/Save.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Save});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),Save=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M50 12c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zm0 72c-18.8 0-34-15.2-34-34s15.2-34 34-34 34 15.2 34 34-15.2 34-34 34zm22.9-46.9c-.8-.8-2-.8-2.8 0L44.6 62.7 33.9 52c-.8-.8-2.1-.8-2.8 0-.8.8-.8 2.1 0 2.8l12.1 12.1c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l26.9-27c.8-.8.8-2 0-2.8z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#00F",d:"M1644-1210V474H-140v-1684h1784m8-8H-148V482h1800v-1700z"}))};Save.__docgenInfo={description:"",methods:[],displayName:"Save"}},"./src/ui/icons/Undo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Undo});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),Undo=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M32.1 51.9c-7.8 0-14.9-4.6-18.1-11.6l2.6-1.2c2.8 6 8.9 9.9 15.5 9.9 9.4 0 17-7.6 17-17s-7.6-17-17-17C25 15 19 19.4 16.5 26.4l-2.7-1c2.9-8.1 10-13.3 18.3-13.3C43.1 12.1 52 21 52 32s-9 19.9-19.9 19.9"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M24.4 27.4H12V15.1h3.1v9.2h9.3v3.1"})))};Undo.__docgenInfo={description:"",methods:[],displayName:"Undo"}}}]);