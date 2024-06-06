"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[1664],{"./stories/FlexColumn.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),_src_ui_components_FlexColumn__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ui/components/FlexColumn/index.tsx"),base={title:"UI/FlexColumn",component:_src_ui_components_FlexColumn__WEBPACK_IMPORTED_MODULE_1__.I},Primary=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_ui_components_FlexColumn__WEBPACK_IMPORTED_MODULE_1__.I,args)}.bind({});Primary.args={children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"3"))};const __WEBPACK_DEFAULT_EXPORT__=base;Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <FlexColumn {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/ui/components/FlexColumn/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>FlexColumn});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _templateObject(){var data=function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  position: relative;\n  display: flex;\n  flex-flow: column;\n  flex-grow: 1;\n  width: 100%;\n  height: 100%;\n  &[data-center='true'] {\n    justify-content: center;\n    align-items: center;\n  }\n  &[data-nogrow='true'] {\n    flex-grow: 0;\n    width: unset;\n    height: unset;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var Base=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div(_templateObject()),FlexColumn=function(props){var _props_noGrow,_props_center;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Base,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({"data-nogrow":null!==(_props_noGrow=props.noGrow)&&void 0!==_props_noGrow&&_props_noGrow,"data-center":null!==(_props_center=props.center)&&void 0!==_props_center&&_props_center},props),props.children)};FlexColumn.__docgenInfo={description:"",methods:[],displayName:"FlexColumn",props:{noGrow:{required:!1,tsType:{name:"boolean"},description:""},center:{required:!1,tsType:{name:"boolean"},description:""},noWrap:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},break:{required:!1,tsType:{name:"union",raw:"'small' | 'vsmall'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'vsmall'"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}}}]);