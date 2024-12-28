"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[1646],{"./stories/TextWithButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultWithArgs:()=>DefaultWithArgs,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_src_ui_components_TextWithButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/TextWithButton/index.tsx"),base={title:"UI/TextWithButton",component:_src_ui_components_TextWithButton__WEBPACK_IMPORTED_MODULE_1__.G},Primary=function(args){return(0,_src_ui_components_TextWithButton__WEBPACK_IMPORTED_MODULE_1__.G)(args)}.bind({});Primary.args={onSubmit:function(c){return alert("sub="+c)},placeholder:"placeholder. will accept length > 3",submitText:"submit text",validateF:function(v){return v.length>3}};const __WEBPACK_DEFAULT_EXPORT__=base;var DefaultWithArgs=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Primary,Primary.args)};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => TextWithButton(args)",...Primary.parameters?.docs?.source}}},DefaultWithArgs.parameters={...DefaultWithArgs.parameters,docs:{...DefaultWithArgs.parameters?.docs,source:{originalSource:"() => <Primary {...(Primary.args as ITextWithButton)} />",...DefaultWithArgs.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","DefaultWithArgs"]},"./src/ui/components/TextWithButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>TextWithButton});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-flow: row;\n  max-height: 100%;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  flex-grow: 1;\n  border: solid 3px #ccc;\n  border-right: 0;\n  padding-left: 0.5rem;\n  border-radius: 0.5rem 0 0 0.5rem;\n  overflow: hidden;\n  font-size: 1.2rem;\n  &[data-valid='false'] {\n    border-color: indianred;\n  }\n  outline: 0;\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  padding: 2rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  border: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(136 119 227);\n  color: white;\n  font-weight: bold;\n  border-radius: 0 0.5rem 0.5rem 0;\n  overflow: hidden;\n  user-select: none;\n  cursor: pointer;\n  &[data-valid='false'] {\n    cursor: not-allowed;\n    border-color: indianred;\n    background-color: #ccc;\n  }\n"]);return _templateObject2=function _templateObject(){return data},data}var Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject()),Input=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.input(_templateObject1()),Button=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.button(_templateObject2()),TextWithButton=function(param){var _param_submitText=param.submitText,submitText=void 0===_param_submitText?"Submit":_param_submitText,placeholder=param.placeholder,validateF=param.validateF,onSubmit=param.onSubmit,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),2),value=_useState[0],setValue=_useState[1],valid=!validateF||validateF(value);return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Base,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(Input,{"data-type":"input","data-valid":valid,placeholder,value,onChange:function(s){return setValue(s.target.value)},onKeyDown:function(e){return"Enter"===e.key&&valid&&onSubmit(value)}}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(Button,{"data-type":"button","data-valid":valid,disabled:!valid,onClick:function(){return valid&&onSubmit(value)}},submitText))};TextWithButton.__docgenInfo={description:"",methods:[],displayName:"TextWithButton",props:{submitText:{required:!1,tsType:{name:"string"},description:'default "Submit"',defaultValue:{value:"'Submit'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},validateF:{required:!1,tsType:{name:"signature",type:"function",raw:"(s: string) => boolean",signature:{arguments:[{type:{name:"string"},name:"s"}],return:{name:"boolean"}}},description:"if provided will validate and block submission accordingly"},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(s: string) => void",signature:{arguments:[{type:{name:"string"},name:"s"}],return:{name:"void"}}},description:""}}}}}]);