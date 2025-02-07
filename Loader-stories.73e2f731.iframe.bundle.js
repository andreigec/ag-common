"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[7182],{"./stories/Loader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultWithArgs:()=>DefaultWithArgs,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js"),_src_ui_components_Loader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/Loader/index.tsx"),base={title:"UI/Loader",component:_src_ui_components_Loader__WEBPACK_IMPORTED_MODULE_1__.a},Primary=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{backgroundColor:"#ccc",position:"relative"}},"test content",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ui_components_Loader__WEBPACK_IMPORTED_MODULE_1__.a,args),"test content")}.bind({});Primary.args={name:"test loader",position:"br"};const __WEBPACK_DEFAULT_EXPORT__=base;var DefaultWithArgs=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Primary,Primary.args)};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <div style={{\n  backgroundColor: '#ccc',\n  position: 'relative'\n}}>\n    test content\n    <Loader {...args} />\n    test content\n  </div>",...Primary.parameters?.docs?.source}}},DefaultWithArgs.parameters={...DefaultWithArgs.parameters,docs:{...DefaultWithArgs.parameters?.docs,source:{originalSource:"() => <Primary {...Primary.args as ILoader} />",...DefaultWithArgs.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","DefaultWithArgs"]},"./src/ui/components/Loader/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Loader});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.0.8_react@19.0.0__@types+react@19.0.8_react@19.0.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  border: 16px solid #f3f3f3; /* Light grey */\n  border-top: 16px solid #3498db; /* Blue */\n  border-radius: 50%;\n  animation: spin 2s linear infinite;\n  padding: 2px;\n  overflow: hidden;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  position: absolute;\n  &[data-type='abs'] {\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n  &[data-type='br'] {\n    bottom: 1rem;\n    right: 1rem;\n    top: auto;\n  }\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 100;\n  background-color: transparent;\n  opacity: 1;\n  &[data-transparent='true'] {\n    opacity: 0.1;\n  }\n  transition: opacity 5s;\n"]);return _templateObject1=function _templateObject(){return data},data}var Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject()),LoadingBack=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject1()),Loader=function(param){var name=param.name,_param_height=param.height,height=void 0===_param_height?"2rem":_param_height,_param_width=param.width,width=void 0===_param_width?"2rem":_param_width,_param_position=param.position,position=void 0===_param_position?"abs":_param_position,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),2),trans=_useState[0],setTrans=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){setTrans(!1)}),[]),react__WEBPACK_IMPORTED_MODULE_1__.createElement(LoadingBack,{"data-loading":name,"data-transparent":trans,"data-type":position},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Base,{style:{height,width}}))};Loader.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{width:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"default 2rem",defaultValue:{value:"'2rem'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"default 2rem",defaultValue:{value:"'2rem'",computed:!1}},name:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:"'abs' | 'br'",elements:[{name:"literal",value:"'abs'"},{name:"literal",value:"'br'"}]},description:"position for loader. default full page takeover",defaultValue:{value:"'abs'",computed:!1}}}}}}]);