"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[mediaType]",{

/***/ "./UI/GenreNav.js":
/*!************************!*\
  !*** ./UI/GenreNav.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GenreNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction GenreNav(param) {\n    let { genresData , featuredData , mediaType , genre_id  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(mediaType);\n    console.log(genresData);\n    console.log(featuredData);\n    function findGenre(e) {\n        let correctGenre;\n        // console.log(e.target.innerText)\n        return genresData.genres.find((genre)=>{\n            correctGenre = genre.name === e.target.innerText;\n            return;\n        });\n        // genresData.filter(item => {\n        //   console.log(item.genre.name === correctGenre)\n        //   item.genre.name === correctGenre\n        // })\n        console.log(correctGenre);\n    }\n    setTimeout(()=>{\n        setActive(true);\n    }, 50);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"genre-nav  \".concat(active ? \"active\" : \"\", \" flex mt-[120px] mb-[50px] px-[25px] justify-center flex-wrap\"),\n        children: genresData.genres.map((genres)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    onClick: findGenre,\n                    href: \"/\",\n                    className: \"\".concat(router.pathname === \"/\" ? \"active\" : \"\", \" \"),\n                    children: genres.name\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, this)\n            }, genres.id, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(GenreNav, \"c8LLMscGuM1hB5tKl6q8aVkKW9A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = GenreNav;\nvar _c;\n$RefreshReg$(_c, \"GenreNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9HZW5yZU5hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNZO0FBQ2I7QUFDSztBQUlsQixTQUFTSSxTQUFTLEtBQStDO1FBQS9DLEVBQUNDLFdBQVUsRUFBRUMsYUFBWSxFQUFFQyxVQUFTLEVBQUVDLFNBQVEsRUFBQyxHQUEvQzs7SUFDakMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1RLFNBQVNWLHNEQUFTQTtJQUMxQlcsUUFBUUMsSUFBSU47SUFDWkssUUFBUUMsSUFBSVI7SUFDWk8sUUFBUUMsSUFBSVA7SUFFWixTQUFTUSxVQUFVQyxDQUFDO1FBQ2xCLElBQUlDO1FBQ0osa0NBQWtDO1FBRWxDLE9BQU9YLFdBQVdZLE9BQU9DLEtBQUtDLENBQUFBO1lBQzVCSCxlQUFlRyxNQUFNQyxTQUFTTCxFQUFFTSxPQUFPQztZQUN2QztRQUNGO1FBRUEsOEJBQThCO1FBQzlCLGtEQUFrRDtRQUNsRCxxQ0FBcUM7UUFDckMsS0FBSztRQUNQVixRQUFRQyxJQUFJRztJQUNaO0lBRUVPLFdBQVc7UUFDVGIsVUFBVTtJQUNaLEdBQUU7SUFFRixxQkFDRSw4REFBQ2M7UUFBR0MsV0FBVyxjQUFxQyxPQUF2QmhCLFNBQVMsV0FBVyxJQUFHO2tCQUNsREosV0FBV1ksT0FBT1MsSUFBSVQsQ0FBQUE7WUFDcEIscUJBQ0ksOERBQUNVOzBCQUNELDRFQUFDM0Isa0RBQUlBO29CQUFFNEIsU0FBV2Q7b0JBQVdlLE1BQU87b0JBQUlKLFdBQVcsR0FBMkMsT0FBeENkLE9BQU9tQixhQUFhLE1BQU0sV0FBVyxJQUFHOzhCQUMzRmIsT0FBT0c7Ozs7OztlQUZDSCxPQUFPYzs7Ozs7UUFPMUI7Ozs7OztBQUdKO0dBekN3QjNCOztRQUVQSCxrREFBU0E7OztLQUZGRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9VSS9HZW5yZU5hdi5qcz84OTNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciwgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbnJlTmF2KHtnZW5yZXNEYXRhLCBmZWF0dXJlZERhdGEsIG1lZGlhVHlwZSwgZ2VucmVfaWR9KSB7XG5jb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc29sZS5sb2cobWVkaWFUeXBlKVxuY29uc29sZS5sb2coZ2VucmVzRGF0YSlcbmNvbnNvbGUubG9nKGZlYXR1cmVkRGF0YSlcblxuZnVuY3Rpb24gZmluZEdlbnJlKGUpe1xuICBsZXQgY29ycmVjdEdlbnJlXG4gIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlubmVyVGV4dClcblxuICByZXR1cm4gZ2VucmVzRGF0YS5nZW5yZXMuZmluZChnZW5yZSA9PiB7XG4gICAgY29ycmVjdEdlbnJlID0gZ2VucmUubmFtZSA9PT0gZS50YXJnZXQuaW5uZXJUZXh0XG4gICAgcmV0dXJuIFxuICB9KVxuXG4gIC8vIGdlbnJlc0RhdGEuZmlsdGVyKGl0ZW0gPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKGl0ZW0uZ2VucmUubmFtZSA9PT0gY29ycmVjdEdlbnJlKVxuICAvLyAgIGl0ZW0uZ2VucmUubmFtZSA9PT0gY29ycmVjdEdlbnJlXG4gIC8vIH0pXG5jb25zb2xlLmxvZyhjb3JyZWN0R2VucmUpXG59XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2V0QWN0aXZlKHRydWUpXG4gIH0sNTApXG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtgZ2VucmUtbmF2ICAke2FjdGl2ZSA/IFwiYWN0aXZlXCIgOiAnJ30gZmxleCBtdC1bMTIwcHhdIG1iLVs1MHB4XSBweC1bMjVweF0ganVzdGlmeS1jZW50ZXIgZmxleC13cmFwYH0+XG4gICAgeyBnZW5yZXNEYXRhLmdlbnJlcy5tYXAoZ2VucmVzID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXkgPSB7Z2VucmVzLmlkfT5cbiAgICAgICAgICAgIDxMaW5rICBvbkNsaWNrID0ge2ZpbmRHZW5yZX0gaHJlZj17YC9gfSBjbGFzc05hbWU9e2Ake3JvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBcImFjdGl2ZVwiIDogXCJcIn0gYH0+XG4gICAgICAgICAgICAgIHtnZW5yZXMubmFtZX1cbiAgICAgICAgICAgICAgey8qICR7bWVkaWFUeXBlfS9nZW5yZS8ke2dlbnJlX2lkfSAqL31cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApXG4gICAgfSl9XG4gICAgPC91bD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiZ3NhcCIsInVzZVN0YXRlIiwiR2VucmVOYXYiLCJnZW5yZXNEYXRhIiwiZmVhdHVyZWREYXRhIiwibWVkaWFUeXBlIiwiZ2VucmVfaWQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiZmluZEdlbnJlIiwiZSIsImNvcnJlY3RHZW5yZSIsImdlbnJlcyIsImZpbmQiLCJnZW5yZSIsIm5hbWUiLCJ0YXJnZXQiLCJpbm5lclRleHQiLCJzZXRUaW1lb3V0IiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJsaSIsIm9uQ2xpY2siLCJocmVmIiwicGF0aG5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./UI/GenreNav.js\n"));

/***/ })

});