"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/github",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Layout = (param)=>{\n    let { children , footer =true , dark =false  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            console.log(url);\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        router.events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done());\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dwavi\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Next-porfolio\\\\components\\\\Layout.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container py-4\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dwavi\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Next-porfolio\\\\components\\\\Layout.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            footer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-dark text-light text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"\\xa9 Ryan Ray Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dwavi\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Next-porfolio\\\\components\\\\Layout.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"2000 - \",\n                                new Date().getFullYear()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\dwavi\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Next-porfolio\\\\components\\\\Layout.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"All rights Reserverd\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dwavi\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Next-porfolio\\\\components\\\\Layout.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dwavi\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Next-porfolio\\\\components\\\\Layout.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dwavi\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Next-porfolio\\\\components\\\\Layout.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEI7QUFDSTtBQUNNO0FBQ047QUFDQTtBQUVsQyxNQUFNSyxTQUFTLFNBQThDO1FBQTdDLEVBQUVDLFNBQVEsRUFBRUMsUUFBUyxJQUFJLEdBQUVDLE1BQU8sS0FBSyxHQUFDOztJQUN0RCxNQUFNQyxTQUFTUCxzREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNUyxvQkFBb0IsQ0FBQ0MsTUFBUTtZQUNqQ0MsUUFBUUMsR0FBRyxDQUFDRjtZQUNaUixzREFBZTtRQUNqQjtRQUVBTSxPQUFPTSxNQUFNLENBQUNDLEVBQUUsQ0FBQyxvQkFBb0JOO1FBQ3JDRCxPQUFPTSxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUIsSUFBTWIscURBQWM7UUFFNUQsT0FBTyxJQUFNO1lBQ1hNLE9BQU9NLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLG9CQUFvQlI7UUFDeEM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNWLCtDQUFNQTs7Ozs7MEJBRVAsOERBQUNtQjtnQkFBS0MsV0FBVTswQkFBa0JkOzs7Ozs7WUFFakNDLHdCQUNDLDhEQUFDQTtnQkFBT2EsV0FBVTswQkFDaEIsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7O2dDQUFFO2dDQUFRLElBQUlDLE9BQU9DLFdBQVc7Ozs7Ozs7c0NBQ2pDLDhEQUFDRjtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1mO0dBbENNbEI7O1FBQ1dILGtEQUFTQTs7O0tBRHBCRztBQW9DTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIGZvb3RlciA9IHRydWUsIGRhcmsgPSBmYWxzZX0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgIH07XHJcblxyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciAvPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTRcIj57Y2hpbGRyZW59PC9tYWluPlxyXG5cclxuICAgICAge2Zvb3RlciAmJiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtbGlnaHQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNFwiPlxyXG4gICAgICAgICAgICA8aDE+JmNvcHk7IFJ5YW4gUmF5IFBvcnRmb2xpbzwvaDE+XHJcbiAgICAgICAgICAgIDxwPjIwMDAgLSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvcD5cclxuICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyBSZXNlcnZlcmQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJOUHJvZ3Jlc3MiLCJuUHJvZ3Jlc3MiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImZvb3RlciIsImRhcmsiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydCIsImV2ZW50cyIsIm9uIiwiZG9uZSIsIm9mZiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInAiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});