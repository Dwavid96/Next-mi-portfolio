"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Post = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(router.query.title);\n    const currentPost = _profile__WEBPACK_IMPORTED_MODULE_3__.posts.filter((post)=>post.title === router.query.title)[0];\n    log;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Post\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dwavi\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Next-porfolio\\\\pages\\\\post.js\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dwavi\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Next-porfolio\\\\pages\\\\post.js\",\n        lineNumber: 15,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QztBQUNMO0FBQ0o7QUFFaEMsTUFBTUcsT0FBTyxJQUFLOztJQUVkLE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QkksUUFBUUMsR0FBRyxDQUFDRixPQUFPRyxLQUFLLENBQUNDLEtBQUs7SUFFOUIsTUFBTUMsY0FBY1Asa0RBQVksQ0FBQ1MsQ0FBQUEsT0FBUUEsS0FBS0gsS0FBSyxLQUFLSixPQUFPRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUU7SUFDOUVGO0lBRUEscUJBQ0UsOERBQUNOLDBEQUFNQTtRQUFDWSxRQUFRLEtBQUs7a0JBQ25CLDRFQUFDQztzQkFBRzs7Ozs7Ozs7Ozs7QUFHWjtHQWRNVjs7UUFFYUYsa0RBQVNBOzs7S0FGdEJFO0FBaUJOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QuanM/MjU2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnR7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtwb3N0c30gZnJvbSAnLi4vcHJvZmlsZSdcclxuXHJcbmNvbnN0IFBvc3QgPSAoKSA9PntcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkudGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRQb3N0ID0gcG9zdHMuZmlsdGVyKHBvc3QgPT4gcG9zdC50aXRsZSA9PT0gcm91dGVyLnF1ZXJ5LnRpdGxlKVswXVxyXG4gICAgbG9nIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgZm9vdGVyPXtmYWxzZX0+XHJcbiAgICAgICAgPGgxPlBvc3Q8L2gxPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sIm5hbWVzIjpbIkxheW91dCIsInVzZVJvdXRlciIsInBvc3RzIiwiUG9zdCIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsInRpdGxlIiwiY3VycmVudFBvc3QiLCJmaWx0ZXIiLCJwb3N0IiwiZm9vdGVyIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post.js\n"));

/***/ })

});