webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/link-buttons.js":
/*!************************************!*\
  !*** ./components/link-buttons.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/links */ "./data/links.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");

var _jsxFileName = "/Users/skinch/personal/components/link-buttons.js";





var LinkButton = function LinkButton(_ref) {
  var text = _ref.text,
      url = _ref.url,
      fontAwesome = _ref.fontAwesome;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, fontAwesome ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: [_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["fab"], fontAwesome],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }) : text));
};

var LinkButtons = function LinkButtons() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, _data_links__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkButton, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: link.text
    }, link, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LinkButtons);

/***/ })

})
//# sourceMappingURL=index.js.4acef90ca4b26284bb28.hot-update.js.map