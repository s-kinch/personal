webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @contentful/rich-text-types */ \"./node_modules/@contentful/rich-text-types/dist/rich-text-types.es5.js\");\n/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ \"./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js\");\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/Users/skinch/personal/components/Post.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar Bold = function Bold(_ref) {\n  var children = _ref.children;\n  return __jsx(\"span\", {\n    className: \"bold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 32\n    }\n  }, children);\n};\n\n_c = Bold;\n\nvar Text = function Text(_ref2) {\n  var children = _ref2.children;\n  return __jsx(\"p\", {\n    className: \"align-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 32\n    }\n  }, children);\n};\n\n_c2 = Text;\n\nvar Post = function Post(_ref3) {\n  _s();\n\n  var _renderNode;\n\n  var slug = _ref3.slug,\n      date = _ref3.date,\n      title = _ref3.title,\n      tags = _ref3.tags,\n      body = _ref3.body,\n      puz = _ref3.puz,\n      fold = _ref3.fold;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      puzzOpen = _useState[0],\n      setPuzzOpen = _useState[1];\n\n  var options = {\n    renderMark: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__[\"MARKS\"].BOLD, function (text) {\n      return __jsx(Bold, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 37\n        }\n      }, text);\n    }),\n    renderNode: (_renderNode = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_renderNode, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__[\"INLINES\"].Text, function (node, children) {\n      return node;\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_renderNode, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__[\"BLOCKS\"].PARAGRAPH, function (node, children) {\n      return __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 21\n        }\n      }, children.map(function (c, i) {\n        var _puz$fields, _puz$fields$file;\n\n        console.log(c);\n        console.log(typeof c);\n        return __jsx(\"li\", {\n          key: i,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 33\n          }\n        }, typeof c, \": \", c);\n        return typeof c === 'string' && c.slice(0, 7) !== '<iframe' ? __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n          key: i,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 33\n          }\n        }, c) : __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n          key: i,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 33\n          }\n        }, fold && __jsx(\"button\", {\n          className: \"puzzbutton\",\n          onClick: function onClick() {\n            setPuzzOpen(!puzzOpen);\n          },\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 41\n          }\n        }, puzzOpen ? 'close' : 'play'), (puz === null || puz === void 0 ? void 0 : (_puz$fields = puz.fields) === null || _puz$fields === void 0 ? void 0 : (_puz$fields$file = _puz$fields.file) === null || _puz$fields$file === void 0 ? void 0 : _puz$fields$file.url) && __jsx(\"a\", {\n          href: \"https:\".concat(puz.fields.file.url),\n          download: true,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 41\n          }\n        }, __jsx(\"button\", {\n          className: \"puzzbutton\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 45\n          }\n        }, \".puz\")), __jsx(\"span\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n          className: \"puzzleme \".concat(puzzOpen ? 'puzzOpen' : 'puzzClosed')\n        }, (!fold || puzzOpen) && {\n          dangerouslySetInnerHTML: {\n            __html: c\n          }\n        }, {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 37\n          }\n        })));\n      }));\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_renderNode, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__[\"BLOCKS\"].EMBEDDED_ASSET, function (node) {\n      var _node$data$target$fie = node.data.target.fields,\n          title = _node$data$target$fie.title,\n          description = _node$data$target$fie.description,\n          file = _node$data$target$fie.file;\n      var mimeType = file.contentType;\n      var mimeGroup = mimeType.split('/')[0];\n\n      switch (mimeGroup) {\n        case 'image':\n          return __jsx(\"img\", {\n            title: title || null,\n            alt: description || null,\n            src: file.url,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 29\n            }\n          });\n\n        case 'application':\n          return __jsx(\"a\", {\n            alt: description || null,\n            href: file.url,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 29\n            }\n          }, title || file.details.fileName);\n\n        default:\n          return __jsx(\"span\", {\n            style: {\n              backgroundColor: 'red',\n              color: 'white'\n            },\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 29\n            }\n          }, ' ', mimeType, \" embedded asset\", ' ');\n      }\n    }), _renderNode)\n  };\n  return __jsx(\"div\", {\n    className: \"post\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  }, fold ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/blog/\".concat(slug),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 21\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 25\n    }\n  }, title)) : title), date && __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 17\n    }\n  }, new Date(date).toLocaleDateString('en-US', {\n    weekday: 'long',\n    year: 'numeric',\n    month: 'long',\n    day: 'numeric'\n  }), tags && tags.map(function (tag, i) {\n    return __jsx(\"span\", {\n      className: \"tag\",\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 29\n      }\n    }, tag);\n  })), __jsx(\"div\", {\n    className: \"post-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 13\n    }\n  }, Object(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__[\"documentToReactComponents\"])(body, options)));\n};\n\n_s(Post, \"bTAjS20bUW+lkDR6lHNDwJC2J28=\");\n\n_c3 = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Bold\");\n$RefreshReg$(_c2, \"Text\");\n$RefreshReg$(_c3, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzP2I1MGUiXSwibmFtZXMiOlsiQm9sZCIsImNoaWxkcmVuIiwiVGV4dCIsIlBvc3QiLCJzbHVnIiwiZGF0ZSIsInRpdGxlIiwidGFncyIsImJvZHkiLCJwdXoiLCJmb2xkIiwidXNlU3RhdGUiLCJwdXp6T3BlbiIsInNldFB1enpPcGVuIiwib3B0aW9ucyIsInJlbmRlck1hcmsiLCJNQVJLUyIsIkJPTEQiLCJ0ZXh0IiwicmVuZGVyTm9kZSIsIklOTElORVMiLCJub2RlIiwiQkxPQ0tTIiwiUEFSQUdSQVBIIiwibWFwIiwiYyIsImkiLCJjb25zb2xlIiwibG9nIiwic2xpY2UiLCJmaWVsZHMiLCJmaWxlIiwidXJsIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJFTUJFRERFRF9BU1NFVCIsImRhdGEiLCJ0YXJnZXQiLCJkZXNjcmlwdGlvbiIsIm1pbWVUeXBlIiwiY29udGVudFR5cGUiLCJtaW1lR3JvdXAiLCJzcGxpdCIsImRldGFpbHMiLCJmaWxlTmFtZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJ0YWciLCJkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FBa0I7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QkEsUUFBeEIsQ0FBbEI7QUFBQSxDQUFiOztLQUFNRCxJOztBQUNOLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBR0QsUUFBSCxTQUFHQSxRQUFIO0FBQUEs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QkosQ0FESjtBQWdDSCxDQXJJRDs7R0FBTVgsSTs7TUFBQUEsSTtBQXVJU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJMT0NLUywgTUFSS1MsIElOTElORVMgfSBmcm9tICdAY29udGVudGZ1bC9yaWNoLXRleHQtdHlwZXMnXG5pbXBvcnQgeyBkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzIH0gZnJvbSAnQGNvbnRlbnRmdWwvcmljaC10ZXh0LXJlYWN0LXJlbmRlcmVyJ1xuXG5jb25zdCBCb2xkID0gKHsgY2hpbGRyZW4gfSkgPT4gPHNwYW4gY2xhc3NOYW1lPVwiYm9sZFwiPntjaGlsZHJlbn08L3NwYW4+XG5jb25zdCBUZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4gPHAgY2xhc3NOYW1lPVwiYWxpZ24tY2VudGVyXCI+e2NoaWxkcmVufTwvcD5cblxuY29uc3QgUG9zdCA9ICh7IHNsdWcsIGRhdGUsIHRpdGxlLCB0YWdzLCBib2R5LCBwdXosIGZvbGQgfSkgPT4ge1xuICAgIGNvbnN0IFtwdXp6T3Blbiwgc2V0UHV6ek9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICByZW5kZXJNYXJrOiB7XG4gICAgICAgICAgICBbTUFSS1MuQk9MRF06ICh0ZXh0KSA9PiA8Qm9sZD57dGV4dH08L0JvbGQ+LFxuICAgICAgICAgICAgLy8gW01BUktTLl1cbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyTm9kZToge1xuICAgICAgICAgICAgW0lOTElORVMuVGV4dF06IChub2RlLCBjaGlsZHJlbikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW0JMT0NLUy5QQVJBR1JBUEhdOiAobm9kZSwgY2hpbGRyZW4pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbi5tYXAoKGMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBjfToge2N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYyA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5zbGljZSgwLCA3KSAhPT0gJzxpZnJhbWUnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT57Y308L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZvbGQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHV6emJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFB1enpPcGVuKCFwdXp6T3BlbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwdXp6T3BlbiA/ICdjbG9zZScgOiAncGxheSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3B1ej8uZmllbGRzPy5maWxlPy51cmwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczoke3B1ei5maWVsZHMuZmlsZS51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHV6emJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnB1elxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwdXp6bGVtZSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXp6T3BlbiA/ICdwdXp6T3BlbicgOiAncHV6ekNsb3NlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uKCghZm9sZCB8fCBwdXp6T3BlbikgJiYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbQkxPQ0tTLkVNQkVEREVEX0FTU0VUXTogKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZmlsZSB9ID0gbm9kZS5kYXRhLnRhcmdldC5maWVsZHNcbiAgICAgICAgICAgICAgICBjb25zdCBtaW1lVHlwZSA9IGZpbGUuY29udGVudFR5cGVcbiAgICAgICAgICAgICAgICBjb25zdCBtaW1lR3JvdXAgPSBtaW1lVHlwZS5zcGxpdCgnLycpWzBdXG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1pbWVHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlIHx8IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17ZGVzY3JpcHRpb24gfHwgbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmaWxlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhcHBsaWNhdGlvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGFsdD17ZGVzY3JpcHRpb24gfHwgbnVsbH0gaHJlZj17ZmlsZS51cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGUgfHwgZmlsZS5kZXRhaWxzLmZpbGVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttaW1lVHlwZX0gZW1iZWRkZWQgYXNzZXR7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiPlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgIHtmb2xkID8gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2cvJHtzbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICB7ZGF0ZSAmJiAoXG4gICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIHt0YWdzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzLm1hcCgodGFnLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1ib2R5XCI+XG4gICAgICAgICAgICAgICAge2RvY3VtZW50VG9SZWFjdENvbXBvbmVudHMoYm9keSwgb3B0aW9ucyl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Post.js\n");

/***/ })

})