"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[2696],{"./src/ui/components/Search/Inline.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>SearchInline});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_common_helpers_array__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/common/helpers/array.ts"),_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/styles/index.ts"),_SearchBox__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/components/Search/SearchBox.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-flow: column;\n  flex-grow: 1;\n  width: 100%;\n  height: calc(100% - 1rem);\n  @media "," {\n    height: calc(100% - 0.5rem);\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  width: calc(100% - 2rem);\n  margin: auto;\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n  max-height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n\n  flex-grow: 1;\n  &[data-hasitems='true'] {\n    padding-bottom: 0.5rem;\n  }\n  @media "," {\n    margin: 0;\n    width: calc(100% - 0.5rem);\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  width: 100%;\n  text-align: center;\n  width: fit-content;\n  text-decoration-color: currentcolor;\n  text-decoration: underline;\n\n  &[data-top='true'] {\n    padding-bottom: 0.5rem;\n  }\n  &[data-top='false'] {\n    padding-top: 0.5rem;\n  }\n"]);return _templateObject2=function _templateObject(){return data},data}var Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject(),_styles__WEBPACK_IMPORTED_MODULE_2__.UN),Content=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject1(),_styles__WEBPACK_IMPORTED_MODULE_2__.UN),RowCount=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject2()),SearchInline=function(p){var _p_rowCountOpt,_p_texts_totalItems,_p_texts,_p_rowCountOpt_display,_p_defaultValue,_p_maxDisplayItems=p.maxDisplayItems,maxDisplayItems=void 0===_p_maxDisplayItems?1e3:_p_maxDisplayItems,rowCountOptDisplay=null!==(_p_rowCountOpt_display=null===(_p_rowCountOpt=p.rowCountOpt)||void 0===_p_rowCountOpt?void 0:_p_rowCountOpt.display)&&void 0!==_p_rowCountOpt_display?_p_rowCountOpt_display:"bottom",_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null!==(_p_defaultValue=p.defaultValue)&&void 0!==_p_defaultValue?_p_defaultValue:""),2),searchText=_useState[0],setSearchText=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(p.textBoxRef,(function(){return{setValue:function(v){var _textBoxRef_current,_textBoxRef_current1;v!==(null===(_textBoxRef_current=textBoxRef.current)||void 0===_textBoxRef_current?void 0:_textBoxRef_current.getValue())&&(null===(_textBoxRef_current1=textBoxRef.current)||void 0===_textBoxRef_current1||_textBoxRef_current1.setValue(v),setSearchText(v))},focus:function(){var _textBoxRef_current;return null===(_textBoxRef_current=textBoxRef.current)||void 0===_textBoxRef_current?void 0:_textBoxRef_current.focus()},getValue:function(){var _textBoxRef_current;return null===(_textBoxRef_current=textBoxRef.current)||void 0===_textBoxRef_current?void 0:_textBoxRef_current.getValue()}}}));var _p_texts_totalItems1,textBoxRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),filteredItemsRaw=p.displayItems.filter((function(i){return p.willDisplayItem(searchText,i)})),filteredItems=(0,_common_helpers_array__WEBPACK_IMPORTED_MODULE_4__.s)(filteredItemsRaw,maxDisplayItems<0?filteredItemsRaw.length:maxDisplayItems).part,outdiff=filteredItems.length!==p.displayItems.length,showText=null!==(_p_texts_totalItems1=null===(_p_texts=p.texts)||void 0===_p_texts||null===(_p_texts_totalItems=_p_texts.totalItems)||void 0===_p_texts_totalItems?void 0:_p_texts_totalItems.call(_p_texts,filteredItems.length,p.displayItems.length))&&void 0!==_p_texts_totalItems1?_p_texts_totalItems1:"Showing ".concat(filteredItems.length," out of ").concat(p.displayItems.length," total\n  items");return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Base,{className:p.className},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SearchBox__WEBPACK_IMPORTED_MODULE_3__.G,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},p),{searchText,setSearchText:function(t){var _p_onSearchTextChange;setSearchText(t),null===(_p_onSearchTextChange=p.onSearchTextChange)||void 0===_p_onSearchTextChange||_p_onSearchTextChange.call(p,t)},textBoxRef})),react__WEBPACK_IMPORTED_MODULE_1__.createElement(Content,{"data-hasitems":!!filteredItems.length,"data-type":"content"},"top"===rowCountOptDisplay&&outdiff&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(RowCount,{"data-top":"true"},showText),filteredItems.map((function(item,index){return(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(p.renderItem({searchText,item,index}),{onClick:function(e){return foundItem=item,target=e.target,void(foundItem?null===(_p_onSelectItem1=p.onSelectItem)||void 0===_p_onSelectItem1||_p_onSelectItem1.call(p,{foundItem,searchText,target}):null===(_p_onSelectItem=p.onSelectItem)||void 0===_p_onSelectItem||_p_onSelectItem.call(p,void 0));var foundItem,target,_p_onSelectItem1,_p_onSelectItem}})})),"bottom"===rowCountOptDisplay&&outdiff&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(RowCount,{"data-top":"false"},showText)))};SearchInline.__docgenInfo={description:"",methods:[{name:"setValue",docblock:null,modifiers:[],params:[{name:"v",optional:!1,type:null}],returns:null},{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"getValue",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SearchInline",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},placeholderText:{required:!1,tsType:{name:"string"},description:""},renderItem:{required:!0,tsType:{name:"signature",type:"function",raw:"({\n  searchText,\n  item,\n  index,\n}: {\n  searchText: string;\n  item: T;\n  index: number;\n}) => JSX.Element",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{\n  searchText: string;\n  item: T;\n  index: number;\n}",signature:{properties:[{key:"searchText",value:{name:"string",required:!0}},{key:"item",value:{name:"T",required:!0}},{key:"index",value:{name:"number",required:!0}}]}},name:""}],return:{name:"JSX.Element"}}},description:"method run to render each filtered item\nwill inject onClick handler"},displayItems:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"all potential items"},willDisplayItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(searchText: string, item: T) => boolean",signature:{arguments:[{type:{name:"string"},name:"searchText"},{type:{name:"T"},name:"item"}],return:{name:"boolean"}}},description:"run to filter items by search text"},maxDisplayItems:{required:!1,tsType:{name:"number"},description:"how many search items to return at most. default 1000. if -1 will return all"},getKeyF:{required:!0,tsType:{name:"signature",type:"function",raw:"(i: T) => string",signature:{arguments:[{type:{name:"T"},name:"i"}],return:{name:"string"}}},description:"get unique render key"},className:{required:!1,tsType:{name:"string"},description:""},texts:{required:!1,tsType:{name:"signature",type:"object",raw:'{\n  /**\n   * default if not provided: "showing X out of Y total items"\n   */\n  totalItems?: (showing: number, outof: number) => string;\n}',signature:{properties:[{key:"totalItems",value:{name:"signature",type:"function",raw:"(showing: number, outof: number) => string",signature:{arguments:[{type:{name:"number"},name:"showing"},{type:{name:"number"},name:"outof"}],return:{name:"string"}},required:!1},description:'default if not provided: "showing X out of Y total items"'}]}},description:""},onSearchTextChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: string) => void",signature:{arguments:[{type:{name:"string"},name:"v"}],return:{name:"void"}}},description:""},onSelectItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(v: TSearchModalRes<T> | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"TSearchModalRes<T> | undefined",elements:[{name:"signature",type:"object",raw:"{\n  foundItem: T;\n  searchText: string;\n  target: EventTarget;\n}",signature:{properties:[{key:"foundItem",value:{name:"T",required:!0}},{key:"searchText",value:{name:"string",required:!0}},{key:"target",value:{name:"EventTarget",required:!0}}]}},{name:"undefined"}]},name:"v"}],return:{name:"void"}}},description:""},textBoxRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<IRefTextEdit>",elements:[{name:"IRefTextEdit"}]},description:""},rowCountOpt:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  /** if provided will change position of row count when some lines are hidden. default bottom */\n  display?: 'bottom' | 'top' | 'off';\n}",signature:{properties:[{key:"display",value:{name:"union",raw:"'bottom' | 'top' | 'off'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"},{name:"literal",value:"'off'"}],required:!1},description:"if provided will change position of row count when some lines are hidden. default bottom"}]}},description:""}}}},"./src/ui/components/Search/SearchBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>SearchBox});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_helpers_debounce__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ui/helpers/debounce.ts"),_helpers_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/ui/helpers/dom.ts"),_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ui/icons/index.tsx"),_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ui/styles/index.ts"),_TextEdit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/ui/components/TextEdit/index.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  padding: 1rem;\n  display: flex;\n  flex-flow: row;\n  justify-content: center;\n  align-items: center;\n  width: calc(100% - 2rem);\n  margin: auto;\n  position: relative;\n\n  @media "," {\n    padding: 0.5rem;\n    margin: 0;\n    width: calc(100% - 1rem);\n    max-height: calc(100% - 1rem);\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 0.5rem;\n  cursor: pointer;\n  margin-left: 0.5rem;\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  position: absolute;\n  right: 1rem;\n  @media "," {\n    right: 2rem;\n  }\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  padding: 0;\n  height: 2.5rem;\n  background-color: white;\n"]);return _templateObject3=function _templateObject(){return data},data}var Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject(),_styles__WEBPACK_IMPORTED_MODULE_4__.UN),MagnifyIcon=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject1()),CrossIconStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A)(_icons__WEBPACK_IMPORTED_MODULE_3__.CrossIcon)(_templateObject2(),_styles__WEBPACK_IMPORTED_MODULE_4__.BQ),TextEditStyled=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A)(_TextEdit__WEBPACK_IMPORTED_MODULE_5__.mF)(_templateObject3()),SearchBox=function(p){var ur=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(p.textBoxRef),cr=(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)(),textBoxRef=p.textBoxRef?ur:cr;return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){(null==textBoxRef?void 0:textBoxRef.current)&&textBoxRef.current.getValue()!==p.searchText&&(textBoxRef.current.setValue(p.searchText),p.setSearchText(p.searchText,!0))}),[p,textBoxRef]),react__WEBPACK_IMPORTED_MODULE_1__.createElement(Base,_object_spread({"data-type":"search",className:p.className},(0,_helpers_dom__WEBPACK_IMPORTED_MODULE_6__.r8)(p)),react__WEBPACK_IMPORTED_MODULE_1__.createElement(TextEditStyled,{ref:textBoxRef,defaultValue:p.searchText,placeholder:p.placeholderText,defaultEditing:_object_spread({focus:!0},p.defaultEditing),singleLine:!0,leftContent:react__WEBPACK_IMPORTED_MODULE_1__.createElement(MagnifyIcon,{onClick:function(){var _textBoxRef_current;return p.setSearchText((null==textBoxRef||null===(_textBoxRef_current=textBoxRef.current)||void 0===_textBoxRef_current?void 0:_textBoxRef_current.getValue())||"",!0)}},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Magnify,null)),allowUndo:!1,onClickOutsideWithNoValue:null,onSubmit:function(v,enterPressed){return(0,_helpers_debounce__WEBPACK_IMPORTED_MODULE_2__.s)((function(){p.setSearchText(v,enterPressed)}),{key:"pagesearch",time:200})}}),p.searchText&&react__WEBPACK_IMPORTED_MODULE_1__.createElement(CrossIconStyled,{onClick:function(){var _textBoxRef_current;null==textBoxRef||null===(_textBoxRef_current=textBoxRef.current)||void 0===_textBoxRef_current||_textBoxRef_current.setValue(""),p.setSearchText("",!0)}}))};SearchBox.__docgenInfo={description:"",methods:[],displayName:"SearchBox",props:{placeholderText:{required:!1,tsType:{name:"string"},description:""},searchText:{required:!0,tsType:{name:"string"},description:""},setSearchText:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string, enterPressed: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"val"},{type:{name:"boolean"},name:"enterPressed"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},textBoxRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<IRefTextEdit>",elements:[{name:"IRefTextEdit"}]},description:""},defaultEditing:{required:!1,tsType:{name:"signature",type:"object",raw:"{ focus?: boolean }",signature:{properties:[{key:"focus",value:{name:"boolean",required:!1}}]}},description:"if truthy will enable text edit mode by default. if focus is true, will also focus on open"}}}},"./src/ui/helpers/debounce.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>debounce});__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");var hashMap={};function debounce(callback,param){var key=param.key,time=param.time;clearTimeout(hashMap[key]),hashMap[key]=setTimeout((function(){delete hashMap[key],callback()}),time)}}}]);