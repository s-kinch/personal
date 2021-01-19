webpackHotUpdate_N_E("pages/blog/[slug]",{

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/skinch/personal/components/head.js\",\n    _this = undefined;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Head = function Head(_ref) {\n  var children = _ref.children,\n      title = _ref.title;\n  var grid = \"\\n    +---+---+---+---+---+\\n    |\\xB9  |\\xB2  |\\xB3  |\\u2074  |\\u2075  | \\n    +---+---+---+---+---+\\n    |\\u2076  |   |   |   |   |\\n    +---+---+---+---+---+\\n    |\\u2077  |   |   |   |   |\\n    +---+---+---+---+---+\\n    |\\u2078  |   |   |   |   |\\n    +---+---+---+---+---+\\n    |\\u2079  |   |   |   |   |\\n    +---+---+---+---+---+\\n    \"; // const across = `\n  // ACROSS\n  // 1.\n  // 6.\n  // 7.\n  // 8.\n  // 9.\n  // `\n\n  var across = ['1. asdf', '6. asdf', '7. asdf', '8. asdf', '9. asdf']; // const down = `\n  // DOWN\n  // 1.\n  // 2.\n  // 3.\n  // 4.\n  // 5.\n  // `\n\n  var down = ['1. asdf', '2. asdf', '3. asdf', '4. asdf', '5. asdf'];\n  console.log(grid, across, down); // console.table({ across, down })\n\n  var clues = {\n    across: across,\n    down: down\n  };\n  console.table(clues); // window.PLAY = `\\nACROSS\\n2. garbage\\n\\nDOWN\\n3. trash\\n`\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(\"meta\", {\n    charSet: \"UTF-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1.0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    httpEquiv: \"x-ua-compatible\",\n    content: \"ie=edge\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }), __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }\n  }, title), children));\n};\n\n_c = Head;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Head);\n\nvar _c;\n\n$RefreshReg$(_c, \"Head\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkLmpzP2I1NzciXSwibmFtZXMiOlsiSGVhZCIsImNoaWxkcmVuIiwidGl0bGUiLCJncmlkIiwiYWNyb3NzIiwiZG93biIsImNvbnNvbGUiLCJsb2ciLCJjbHVlcyIsInRhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBeUI7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2xDLE1BQU1DLElBQUksNFZBQVYsQ0FEa0MsQ0FlbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixFQUFrQyxTQUFsQyxFQUE2QyxTQUE3QyxDQUFmLENBeEJrQyxDQTBCbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixFQUFrQyxTQUFsQyxFQUE2QyxTQUE3QyxDQUFiO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaLEVBQWtCQyxNQUFsQixFQUEwQkMsSUFBMUIsRUFyQ2tDLENBc0NsQzs7QUFDQSxNQUFNRyxLQUFLLEdBQUc7QUFBRUosVUFBTSxFQUFOQSxNQUFGO0FBQVVDLFFBQUksRUFBSkE7QUFBVixHQUFkO0FBQ0FDLFNBQU8sQ0FBQ0csS0FBUixDQUFjRCxLQUFkLEVBeENrQyxDQTBDbEM7O0FBRUEsU0FDSSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxXQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUNJLFFBQUksRUFBQyxVQURUO0FBRUksV0FBTyxFQUFDLHVDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQU1JO0FBQU0sYUFBUyxFQUFDLGlCQUFoQjtBQUFrQyxXQUFPLEVBQUMsU0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRTixLQUFSLENBUkosRUFVS0QsUUFWTCxDQURKLENBREo7QUFnQkgsQ0E1REQ7O0tBQU1ELEk7QUE4RFNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9oZWFkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgSGVhZCA9ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IGBcbiAgICArLS0tKy0tLSstLS0rLS0tKy0tLStcbiAgICB8wrkgIHzCsiAgfMKzICB84oG0ICB84oG1ICB8IFxuICAgICstLS0rLS0tKy0tLSstLS0rLS0tK1xuICAgIHzigbYgIHwgICB8ICAgfCAgIHwgICB8XG4gICAgKy0tLSstLS0rLS0tKy0tLSstLS0rXG4gICAgfOKBtyAgfCAgIHwgICB8ICAgfCAgIHxcbiAgICArLS0tKy0tLSstLS0rLS0tKy0tLStcbiAgICB84oG4ICB8ICAgfCAgIHwgICB8ICAgfFxuICAgICstLS0rLS0tKy0tLSstLS0rLS0tK1xuICAgIHzigbkgIHwgICB8ICAgfCAgIHwgICB8XG4gICAgKy0tLSstLS0rLS0tKy0tLSstLS0rXG4gICAgYFxuXG4gICAgLy8gY29uc3QgYWNyb3NzID0gYFxuICAgIC8vIEFDUk9TU1xuICAgIC8vIDEuXG4gICAgLy8gNi5cbiAgICAvLyA3LlxuICAgIC8vIDguXG4gICAgLy8gOS5cbiAgICAvLyBgXG5cbiAgICBjb25zdCBhY3Jvc3MgPSBbJzEuIGFzZGYnLCAnNi4gYXNkZicsICc3LiBhc2RmJywgJzguIGFzZGYnLCAnOS4gYXNkZiddXG5cbiAgICAvLyBjb25zdCBkb3duID0gYFxuICAgIC8vIERPV05cbiAgICAvLyAxLlxuICAgIC8vIDIuXG4gICAgLy8gMy5cbiAgICAvLyA0LlxuICAgIC8vIDUuXG4gICAgLy8gYFxuXG4gICAgY29uc3QgZG93biA9IFsnMS4gYXNkZicsICcyLiBhc2RmJywgJzMuIGFzZGYnLCAnNC4gYXNkZicsICc1LiBhc2RmJ11cblxuICAgIGNvbnNvbGUubG9nKGdyaWQsIGFjcm9zcywgZG93bilcbiAgICAvLyBjb25zb2xlLnRhYmxlKHsgYWNyb3NzLCBkb3duIH0pXG4gICAgY29uc3QgY2x1ZXMgPSB7IGFjcm9zcywgZG93biB9XG4gICAgY29uc29sZS50YWJsZShjbHVlcylcblxuICAgIC8vIHdpbmRvdy5QTEFZID0gYFxcbkFDUk9TU1xcbjIuIGdhcmJhZ2VcXG5cXG5ET1dOXFxuMy4gdHJhc2hcXG5gXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8TmV4dEhlYWQ+XG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJ4LXVhLWNvbXBhdGlibGVcIiBjb250ZW50PVwiaWU9ZWRnZVwiIC8+XG5cbiAgICAgICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L05leHRIZWFkPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/head.js\n");

/***/ })

})