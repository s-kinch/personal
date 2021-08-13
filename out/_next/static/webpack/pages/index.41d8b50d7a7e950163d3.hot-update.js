webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @contentful/rich-text-types */ \"./node_modules/@contentful/rich-text-types/dist/rich-text-types.es5.js\");\n/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ \"./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js\");\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/Users/skinch/personal/components/Post.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar Bold = function Bold(_ref) {\n  var children = _ref.children;\n  return __jsx(\"span\", {\n    className: \"bold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 32\n    }\n  }, children);\n}; // const Text = ({ children }) => <p className=\"align-center\">{children}</p>\n\n\n_c = Bold;\n\nvar Post = function Post(_ref2) {\n  _s();\n\n  var _renderNode, _body$content, _puz$fields, _puz$fields$file;\n\n  var slug = _ref2.slug,\n      date = _ref2.date,\n      title = _ref2.title,\n      tags = _ref2.tags,\n      body = _ref2.body,\n      puz = _ref2.puz,\n      appletEmbed = _ref2.appletEmbed,\n      fold = _ref2.fold;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      puzzOpen = _useState[0],\n      setPuzzOpen = _useState[1];\n\n  var options = {\n    renderMark: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__[\"MARKS\"].BOLD, function (text) {\n      return __jsx(Bold, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 37\n        }\n      }, text);\n    }),\n    renderNode: (_renderNode = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_renderNode, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__[\"BLOCKS\"].HR, function (node) {\n      return fold ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/blog/\".concat(slug),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 21\n        }\n      }, __jsx(\"a\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 25\n        }\n      }, \"read more\")) : null;\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_renderNode, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__[\"BLOCKS\"].EMBEDDED_ASSET, function (node) {\n      var _node$data$target$fie = node.data.target.fields,\n          title = _node$data$target$fie.title,\n          description = _node$data$target$fie.description,\n          file = _node$data$target$fie.file;\n      var mimeType = file.contentType;\n      var mimeGroup = mimeType.split('/')[0];\n\n      switch (mimeGroup) {\n        case 'image':\n          return __jsx(\"img\", {\n            title: title || null,\n            alt: description || null,\n            src: file.url,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 29\n            }\n          });\n\n        case 'application':\n          return __jsx(\"a\", {\n            alt: description || null,\n            href: file.url,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 29\n            }\n          }, title || file.details.fileName);\n\n        default:\n          return __jsx(\"span\", {\n            style: {\n              backgroundColor: 'red',\n              color: 'white'\n            },\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 29\n            }\n          }, ' ', mimeType, \" embedded asset\", ' ');\n      }\n    }), _renderNode)\n  };\n  console.log({\n    body: body\n  });\n  var foldIndex = body === null || body === void 0 ? void 0 : (_body$content = body.content) === null || _body$content === void 0 ? void 0 : _body$content.findIndex(function (node) {\n    return nodeType === 'hr';\n  });\n  return __jsx(\"div\", {\n    className: \"post\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }, fold ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/blog/\".concat(slug),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 21\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 25\n    }\n  }, title)) : title), date && __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 17\n    }\n  }, new Date(date).toLocaleDateString('en-US', {\n    weekday: 'long',\n    year: 'numeric',\n    month: 'long',\n    day: 'numeric'\n  }), tags && tags.map(function (tag, i) {\n    return __jsx(\"span\", {\n      className: \"tag\",\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 29\n      }\n    }, tag);\n  })), __jsx(\"div\", {\n    className: \"post-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  }, Object(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__[\"documentToReactComponents\"])(fold ? _objectSpread(_objectSpread({}, body), {}, {\n    content: foldIndex > -1 ? body.content.slice(0, foldIndex) : body.content\n  }) : body, options), __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 17\n    }\n  }, fold && appletEmbed && __jsx(\"button\", {\n    className: \"puzzbutton\",\n    onClick: function onClick() {\n      setPuzzOpen(!puzzOpen);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 25\n    }\n  }, puzzOpen ? 'close' : 'play'), (puz === null || puz === void 0 ? void 0 : (_puz$fields = puz.fields) === null || _puz$fields === void 0 ? void 0 : (_puz$fields$file = _puz$fields.file) === null || _puz$fields$file === void 0 ? void 0 : _puz$fields$file.url) && __jsx(\"a\", {\n    href: \"https:\".concat(puz.fields.file.url),\n    download: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 25\n    }\n  }, __jsx(\"button\", {\n    className: \"puzzbutton\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 29\n    }\n  }, \".puz\")), appletEmbed && __jsx(\"span\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"puzzleme \".concat(puzzOpen ? 'puzzOpen' : 'puzzClosed')\n  }, (!fold || puzzOpen) && {\n    dangerouslySetInnerHTML: {\n      __html: appletEmbed\n    }\n  }, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 25\n    }\n  })))));\n};\n\n_s(Post, \"bTAjS20bUW+lkDR6lHNDwJC2J28=\");\n\n_c2 = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Bold\");\n$RefreshReg$(_c2, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzP2I1MGUiXSwibmFtZXMiOlsiQm9sZCIsImNoaWxkcmVuIiwiUG9zdCIsInNsdWciLCJkYXRlIiwidGl0bGUiLCJ0YWdzIiwiYm9keSIsInB1eiIsImFwcGxldEVtYmVkIiwiZm9sZCIsInVzZVN0YXRlIiwicHV6ek9wZW4iLCJzZXRQdXp6T3BlbiIsIm9wdGlvbnMiLCJyZW5kZXJNYXJrIiwiTUFSS1MiLCJCT0xEIiwidGV4dCIsInJlbmRlck5vZGUiLCJCTE9DS1MiLCJIUiIsIm5vZGUiLCJFTUJFRERFRF9BU1NFVCIsImRhdGEiLCJ0YXJnZXQiLCJmaWVsZHMiLCJkZXNjcmlwdGlvbiIsImZpbGUiLCJtaW1lVHlwZSIsImNvbnRlbnRUeXBlIiwibWltZUdyb3VwIiwic3BsaXQiLCJ1cmwiLCJkZXRhaWxzIiwiZmlsZU5hbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImNvbnNvbGUiLCJsb2ciLCJmb2xkSW5kZXgiLCJjb250ZW50IiwiZmluZEluZGV4Iiwibm9kZVR5cGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsInllYXIiLCJtb250aCIsImRheSIsIm1hcCIsInRhZyIsImkiLCJkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzIiwic2xpY2UiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FBa0I7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QkEsUUFBeEIsQ0FBbEI7QUFBQSxDQUFiLEMsQ0FDQTs7O0tBRE1ELEk7O0FBR04sSUFBTUUsSUFBSSxHQUFH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T0FWc0IsQ0FEOUIsRUFhSSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0osSUFBSSxJQUFJRCxXQUFSLElBQ0c7QUFDSSxhQUFTLEVBQUMsWUFEZDtBQUVJLFdBQU8sRUFBRSxtQkFBTTtBQUNYSSxpQkFBVyxDQUFDLENBQUNELFFBQUYsQ0FBWDtBQUNILEtBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1LQSxRQUFRLEdBQUcsT0FBSCxHQUFhLE1BTjFCLENBRlIsRUFXSyxDQUFBSixHQUFHLFNBQUgsSUFBQUEsR0FBRyxXQUFILDJCQUFBQSxHQUFHLENBQUVrQixNQUFMLGdGQUFhRSxJQUFiLHNFQUFtQkssR0FBbkIsS0FDRztBQUFHLFFBQUksa0JBQVd6QixHQUFHLENBQUNrQixNQUFKLENBQVdFLElBQVgsQ0FBZ0JLLEdBQTNCLENBQVA7QUFBeUMsWUFBUSxNQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxhQUFTLEVBQUMsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLENBWlIsRUFnQkt4QixXQUFXLElBQ1I7QUFDSSxhQUFTLHFCQUNMRyxRQUFRLEdBQUcsVUFBSCxHQUFnQixZQURuQjtBQURiLEtBSVMsQ0FBQyxDQUFDRixJQUFELElBQVNFLFFBQVYsS0FBdUI7QUFDeEIyQywyQkFBdUIsRUFBRTtBQUNyQkMsWUFBTSxFQUFFL0M7QUFEYTtBQURELEdBSmhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FqQlIsQ0FiSixDQTFCSixDQURKO0FBd0VILENBaElEOztHQUFNUCxJOztNQUFBQSxJO0FBa0lTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQkxPQ0tTLCBNQVJLUywgSU5MSU5FUyB9IGZyb20gJ0Bjb250ZW50ZnVsL3JpY2gtdGV4dC10eXBlcydcbmltcG9ydCB7IGRvY3VtZW50VG9SZWFjdENvbXBvbmVudHMgfSBmcm9tICdAY29udGVudGZ1bC9yaWNoLXRleHQtcmVhY3QtcmVuZGVyZXInXG5cbmNvbnN0IEJvbGQgPSAoeyBjaGlsZHJlbiB9KSA9PiA8c3BhbiBjbGFzc05hbWU9XCJib2xkXCI+e2NoaWxkcmVufTwvc3Bhbj5cbi8vIGNvbnN0IFRleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiA8cCBjbGFzc05hbWU9XCJhbGlnbi1jZW50ZXJcIj57Y2hpbGRyZW59PC9wPlxuXG5jb25zdCBQb3N0ID0gKHsgc2x1ZywgZGF0ZSwgdGl0bGUsIHRhZ3MsIGJvZHksIHB1eiwgYXBwbGV0RW1iZWQsIGZvbGQgfSkgPT4ge1xuICAgIGNvbnN0IFtwdXp6T3Blbiwgc2V0UHV6ek9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICByZW5kZXJNYXJrOiB7XG4gICAgICAgICAgICBbTUFSS1MuQk9MRF06ICh0ZXh0KSA9PiA8Qm9sZD57dGV4dH08L0JvbGQ+LFxuICAgICAgICB9LFxuICAgICAgICByZW5kZXJOb2RlOiB7XG4gICAgICAgICAgICBbQkxPQ0tTLkhSXTogKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sZCA/IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nLyR7c2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnJlYWQgbW9yZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW0JMT0NLUy5FTUJFRERFRF9BU1NFVF06IChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGZpbGUgfSA9IG5vZGUuZGF0YS50YXJnZXQuZmllbGRzXG4gICAgICAgICAgICAgICAgY29uc3QgbWltZVR5cGUgPSBmaWxlLmNvbnRlbnRUeXBlXG4gICAgICAgICAgICAgICAgY29uc3QgbWltZUdyb3VwID0gbWltZVR5cGUuc3BsaXQoJy8nKVswXVxuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChtaW1lR3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZSB8fCBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Rlc2NyaXB0aW9uIHx8IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZmlsZS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXBwbGljYXRpb24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBhbHQ9e2Rlc2NyaXB0aW9uIHx8IG51bGx9IGhyZWY9e2ZpbGUudXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlIHx8IGZpbGUuZGV0YWlscy5maWxlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWltZVR5cGV9IGVtYmVkZGVkIGFzc2V0eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyh7IGJvZHkgfSlcblxuICAgIGNvbnN0IGZvbGRJbmRleCA9IGJvZHk/LmNvbnRlbnQ/LmZpbmRJbmRleCgobm9kZSkgPT4gbm9kZVR5cGUgPT09ICdocicpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICB7Zm9sZCA/IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nLyR7c2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt0aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAge2RhdGUgJiYgKFxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICB7dGFncyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFncy5tYXAoKHRhZywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZ1wiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtYm9keVwiPlxuICAgICAgICAgICAgICAgIHtkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzKFxuICAgICAgICAgICAgICAgICAgICBmb2xkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRJbmRleCA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYm9keS5jb250ZW50LnNsaWNlKDAsIGZvbGRJbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBib2R5LmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogYm9keSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICB7Zm9sZCAmJiBhcHBsZXRFbWJlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHV6emJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQdXp6T3BlbighcHV6ek9wZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHV6ek9wZW4gPyAnY2xvc2UnIDogJ3BsYXknfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtwdXo/LmZpZWxkcz8uZmlsZT8udXJsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczoke3B1ei5maWVsZHMuZmlsZS51cmx9YH0gZG93bmxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwdXp6YnV0dG9uXCI+LnB1ejwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7YXBwbGV0RW1iZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwdXp6bGVtZSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXp6T3BlbiA/ICdwdXp6T3BlbicgOiAncHV6ekNsb3NlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uKCghZm9sZCB8fCBwdXp6T3BlbikgJiYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBhcHBsZXRFbWJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Post.js\n");

/***/ })

})