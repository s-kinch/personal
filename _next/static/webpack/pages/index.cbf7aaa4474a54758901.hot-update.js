webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @contentful/rich-text-types */ \"./node_modules/@contentful/rich-text-types/dist/rich-text-types.es5.js\");\n/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ \"./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js\");\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/Users/skinch/personal/components/Post.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar Bold = function Bold(_ref) {\n  var children = _ref.children;\n  return __jsx(\"span\", {\n    className: \"bold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 32\n    }\n  }, children);\n}; // const Text = ({ children }) => <p className=\"align-center\">{children}</p>\n\n\n_c = Bold;\n\nvar Post = function Post(_ref2) {\n  _s();\n\n  var _body$content, _renderNode, _puz$fields, _puz$fields$file;\n\n  var slug = _ref2.slug,\n      date = _ref2.date,\n      title = _ref2.title,\n      tags = _ref2.tags,\n      body = _ref2.body,\n      puz = _ref2.puz,\n      appletEmbed = _ref2.appletEmbed,\n      fold = _ref2.fold;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      puzzOpen = _useState[0],\n      setPuzzOpen = _useState[1];\n\n  var foldIndex = body === null || body === void 0 ? void 0 : (_body$content = body.content) === null || _body$content === void 0 ? void 0 : _body$content.findIndex(function (_ref3) {\n    var nodeType = _ref3.nodeType;\n    return nodeType === 'hr';\n  });\n  var options = {\n    renderMark: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__[\"MARKS\"].BOLD, function (text) {\n      return __jsx(Bold, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 37\n        }\n      }, text);\n    }),\n    renderNode: (_renderNode = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_renderNode, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__[\"BLOCKS\"].HR, function (node) {\n      // Don't show 'read more' if it's allll under the fold\n      return fold && foldIndex > 0 ? __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/blog/\".concat(slug),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 25\n        }\n      }, __jsx(\"a\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 29\n        }\n      }, \"read more\"))) : null;\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_renderNode, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__[\"BLOCKS\"].EMBEDDED_ASSET, function (node) {\n      var _node$data$target$fie = node.data.target.fields,\n          title = _node$data$target$fie.title,\n          description = _node$data$target$fie.description,\n          file = _node$data$target$fie.file;\n      var mimeType = file.contentType;\n      var mimeGroup = mimeType.split('/')[0];\n\n      switch (mimeGroup) {\n        case 'image':\n          return __jsx(\"img\", {\n            title: title || null,\n            alt: description || null,\n            src: file.url,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 29\n            }\n          });\n\n        case 'application':\n          return __jsx(\"a\", {\n            alt: description || null,\n            href: file.url,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 29\n            }\n          }, title || file.details.fileName);\n\n        default:\n          return __jsx(\"span\", {\n            style: {\n              backgroundColor: 'red',\n              color: 'white'\n            },\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 29\n            }\n          }, ' ', mimeType, \" embedded asset\", ' ');\n      }\n    }), _renderNode)\n  };\n  console.log({\n    body: body\n  });\n  return __jsx(\"div\", {\n    className: \"post\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, fold ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/blog/\".concat(slug),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 21\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 25\n    }\n  }, title)) : title), date && __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }\n  }, new Date(date).toLocaleDateString('en-US', {\n    weekday: 'long',\n    year: 'numeric',\n    month: 'long',\n    day: 'numeric'\n  }), tags && tags.map(function (tag, i) {\n    return __jsx(\"span\", {\n      className: \"tag\",\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 29\n      }\n    }, tag);\n  })), __jsx(\"div\", {\n    className: \"post-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }, Object(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__[\"documentToReactComponents\"])(fold ? _objectSpread(_objectSpread({}, body), {}, {\n    content: foldIndex > -1 ? body.content.slice(0, foldIndex + 1) : body.content\n  }) : body, options), __jsx(\"div\", {\n    className: \"puzzle-buttons\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 17\n    }\n  }, fold && appletEmbed && __jsx(\"button\", {\n    className: \"puzzbutton\",\n    onClick: function onClick() {\n      setPuzzOpen(!puzzOpen);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 25\n    }\n  }, puzzOpen ? 'close' : 'play'), (puz === null || puz === void 0 ? void 0 : (_puz$fields = puz.fields) === null || _puz$fields === void 0 ? void 0 : (_puz$fields$file = _puz$fields.file) === null || _puz$fields$file === void 0 ? void 0 : _puz$fields$file.url) && __jsx(\"a\", {\n    href: \"https:\".concat(puz.fields.file.url),\n    download: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 25\n    }\n  }, __jsx(\"button\", {\n    className: \"puzzbutton\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 29\n    }\n  }, \".puz\")), appletEmbed && __jsx(\"span\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"puzzleme \".concat(puzzOpen ? 'puzzOpen' : 'puzzClosed')\n  }, (!fold || puzzOpen) && {\n    dangerouslySetInnerHTML: {\n      __html: appletEmbed\n    }\n  }, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 25\n    }\n  })))));\n};\n\n_s(Post, \"bTAjS20bUW+lkDR6lHNDwJC2J28=\");\n\n_c2 = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Bold\");\n$RefreshReg$(_c2, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzP2I1MGUiXSwibmFtZXMiOlsiQm9sZCIsImNoaWxkcmVuIiwiUG9zdCIsInNsdWciLCJkYXRlIiwidGl0bGUiLCJ0YWdzIiwiYm9keSIsInB1eiIsImFwcGxldEVtYmVkIiwiZm9sZCIsInVzZVN0YXRlIiwicHV6ek9wZW4iLCJzZXRQdXp6T3BlbiIsImZvbGRJbmRleCIsImNvbnRlbnQiLCJmaW5kSW5kZXgiLCJub2RlVHlwZSIsIm9wdGlvbnMiLCJyZW5kZXJNYXJrIiwiTUFSS1MiLCJCT0xEIiwidGV4dCIsInJlbmRlck5vZGUiLCJCTE9DS1MiLCJIUiIsIm5vZGUiLCJFTUJFRERFRF9BU1NFVCIsImRhdGEiLCJ0YXJnZXQiLCJmaWVsZHMiLCJkZXNjcmlwdGlvbiIsImZpbGUiLCJtaW1lVHlwZSIsImNvbnRlbnRUeXBlIiwibWltZUdyb3VwIiwic3BsaXQiLCJ1cmwiLCJkZXRhaWxzIiwiZmlsZU5hbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsInllYXIiLCJtb250aCIsImRheSIsIm1hcCIsInRhZyIsImkiLCJkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzIiwic2xpY2UiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FBa0I7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QkEsUUFBeEIsQ0FBbEI7QUFBQSxDQUFiLEMsQ0FDQTs7O0tBRE1ELEk7O0FBR04sSUFBTUUsSUFBSSxHQUFH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ZW50cy9Qb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJMT0NLUywgTUFSS1MsIElOTElORVMgfSBmcm9tICdAY29udGVudGZ1bC9yaWNoLXRleHQtdHlwZXMnXG5pbXBvcnQgeyBkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzIH0gZnJvbSAnQGNvbnRlbnRmdWwvcmljaC10ZXh0LXJlYWN0LXJlbmRlcmVyJ1xuXG5jb25zdCBCb2xkID0gKHsgY2hpbGRyZW4gfSkgPT4gPHNwYW4gY2xhc3NOYW1lPVwiYm9sZFwiPntjaGlsZHJlbn08L3NwYW4+XG4vLyBjb25zdCBUZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4gPHAgY2xhc3NOYW1lPVwiYWxpZ24tY2VudGVyXCI+e2NoaWxkcmVufTwvcD5cblxuY29uc3QgUG9zdCA9ICh7IHNsdWcsIGRhdGUsIHRpdGxlLCB0YWdzLCBib2R5LCBwdXosIGFwcGxldEVtYmVkLCBmb2xkIH0pID0+IHtcbiAgICBjb25zdCBbcHV6ek9wZW4sIHNldFB1enpPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgZm9sZEluZGV4ID0gYm9keT8uY29udGVudD8uZmluZEluZGV4KFxuICAgICAgICAoeyBub2RlVHlwZSB9KSA9PiBub2RlVHlwZSA9PT0gJ2hyJ1xuICAgIClcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHJlbmRlck1hcms6IHtcbiAgICAgICAgICAgIFtNQVJLUy5CT0xEXTogKHRleHQpID0+IDxCb2xkPnt0ZXh0fTwvQm9sZD4sXG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlck5vZGU6IHtcbiAgICAgICAgICAgIFtCTE9DS1MuSFJdOiAobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHNob3cgJ3JlYWQgbW9yZScgaWYgaXQncyBhbGxsbCB1bmRlciB0aGUgZm9sZFxuICAgICAgICAgICAgICAgIHJldHVybiBmb2xkICYmIGZvbGRJbmRleCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nLyR7c2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5yZWFkIG1vcmU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtCTE9DS1MuRU1CRURERURfQVNTRVRdOiAobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBmaWxlIH0gPSBub2RlLmRhdGEudGFyZ2V0LmZpZWxkc1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbWVUeXBlID0gZmlsZS5jb250ZW50VHlwZVxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbWVHcm91cCA9IG1pbWVUeXBlLnNwbGl0KCcvJylbMF1cblxuICAgICAgICAgICAgICAgIHN3aXRjaCAobWltZUdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGUgfHwgbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtkZXNjcmlwdGlvbiB8fCBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZpbGUudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FwcGxpY2F0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgYWx0PXtkZXNjcmlwdGlvbiB8fCBudWxsfSBocmVmPXtmaWxlLnVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZSB8fCBmaWxlLmRldGFpbHMuZmlsZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21pbWVUeXBlfSBlbWJlZGRlZCBhc3NldHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coeyBib2R5IH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICB7Zm9sZCA/IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nLyR7c2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt0aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAge2RhdGUgJiYgKFxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICB7dGFncyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFncy5tYXAoKHRhZywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZ1wiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtYm9keVwiPlxuICAgICAgICAgICAgICAgIHtkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzKFxuICAgICAgICAgICAgICAgICAgICBmb2xkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRJbmRleCA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYm9keS5jb250ZW50LnNsaWNlKDAsIGZvbGRJbmRleCArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYm9keS5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGJvZHksXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHV6emxlLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAge2ZvbGQgJiYgYXBwbGV0RW1iZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB1enpidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHV6ek9wZW4oIXB1enpPcGVuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3B1enpPcGVuID8gJ2Nsb3NlJyA6ICdwbGF5J31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7cHV6Py5maWVsZHM/LmZpbGU/LnVybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6JHtwdXouZmllbGRzLmZpbGUudXJsfWB9IGRvd25sb2FkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHV6emJ1dHRvblwiPi5wdXo8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge2FwcGxldEVtYmVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHV6emxlbWUgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHV6ek9wZW4gPyAncHV6ek9wZW4nIDogJ3B1enpDbG9zZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLigoIWZvbGQgfHwgcHV6ek9wZW4pICYmIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogYXBwbGV0RW1iZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Post.js\n");

/***/ })

})