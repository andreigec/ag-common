"use strict";(self.webpackChunkag_common=self.webpackChunkag_common||[]).push([[7249],{"./node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.18_react@18.3.1/node_modules/@mdx-js/react/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXProvider:()=>MDXProvider,useMDXComponents:()=>useMDXComponents});var react=__webpack_require__("./node_modules/.pnpm/react@19.0.0/node_modules/react/index.js");const emptyComponents={},MDXContext=react.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react.useContext(MDXContext);return react.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react.createElement(MDXContext.Provider,{value:allComponents},properties.children)}}}]);