/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black: rgb(29, 29, 29);\n    --white: rgb(250, 250, 250);\n    --grey: rgb(121, 121, 121);\n}\n\nhtml,\nbody {\n    font-size: 8px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    color: var(--black);\n    background: rgb(235, 235, 235);\n}\n\n#header-bar {\n    padding: 18px 20px;\n    color: var(--white);\n    background: rgb(75, 75, 75);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh2 {\n    margin: 0;\n    font-size: 3rem;\n}\n\n.nav-btn {\n    background: inherit;\n    border: none;\n    color: var(--white);\n}\n\n.nav-bar {\n    display: none;\n    background: rgb(219, 219, 219);\n    color:rgb(37, 37, 37);\n    font-size: 1.5rem;\n    box-shadow: 0px 1px 2px var(--grey);\n    /* prevent highlights */\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                        supported by Chrome, Edge, Opera and Firefox */\n}\n\n.wrapper {\n    padding: 15px;\n}\n\n.list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.selection {\n    padding: 7px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.selection i,\n.add-project-btn i {\n    margin-right: 10px;\n}\n\n.selection:hover {\n    background:rgb(204, 204, 204);\n}\n\n.selected {\n    background: rgb(204, 204, 204);\n    font-weight: bold;\n}\n\nh3 {\n    font-size: 1.9rem;\n}\n\n.add-project-btn {\n    display: none;\n}\n\n.content {\n    margin: 20px;\n}\n\n.tasks {\n    margin: 10px;\n}\n\n.task {\n    font-size: 1.3rem;\n    color: var(--black);\n    border: 1px solid var(--grey);\n    border-radius: 10px;\n    padding: 10px 15px;\n    margin-top: 15px;\n}\n\n.task:hover {\n    background: rgb(204, 204, 204);\n}\n\n.info-wrapper {\n    display: none;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.complete-icon {\n    width: 12px;\n    height: 12px;\n    border: 1px solid var(--grey);\n    border-radius: 50%;\n}\n\n.task-name {\n    width: 55%;\n}\n\n.side-icons-wrapper {\n    display: flex;\n    width: 30px;\n    justify-content: space-between;\n}\n\n.edit-icon,\n.delete-icon {\n    display: none;\n    color: var(--grey);\n}\n\n.edit-icon:hover {\n    color: var(--black);\n}\n\n.delete-icon:hover {\n    color: rgb(190, 39, 39);\n}\n\n.task:hover .edit-icon,\n.task:hover .delete-icon {\n    display: block;\n}\n\n.add-task-btn {\n    font-size: 1.5rem;\n    display: none;\n    text-align: center;\n}\n\n.task-edit-form {\n    display: none;\n    height: 50px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.edit-inputs {\n    display: flex;\n    width: 80%;\n    max-width: 600px;\n    justify-content: space-around;\n}\n\n.edit-task-title {\n    width: 50%;\n}\n\n.edit-task-due {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.confirm-edit-buttons {\n    width: 150px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.confirm-edit,\n.cancel-edit {\n    border: 1px solid var(--black);\n    border-radius: 5px;\n    background: inherit;\n}\n\n.confirm-edit:hover {\n    border: 1px solid rgba(149, 229, 149, 0.9);\n    background: rgba(149, 229, 149, 0.9);\n}\n\n.cancel-edit:hover {\n    border: 1px solid rgba(196, 94, 94, 0.9);\n    background: rgba(196, 94, 94, 0.9);\n}\n\n.project-form,\n.task-form {\n    display: none;\n}\n\n.display-flex {\n    display: flex;\n}\n\n.display {\n    display: block;\n}\n\n@media (min-width: 320px) {\n    html,\n    body {\n        font-size: 10px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;;IAEI,cAAc;IACd,yCAAyC;IACzC,SAAS;IACT,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,2BAA2B;IAC3B,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,iBAAiB;IACjB,mCAAmC;IACnC,uBAAuB;IACvB,2BAA2B,EAAE,eAAe;IAC5C,yBAAyB,EAAE,WAAW;IACtC,wBAAwB,EAAE,mBAAmB;IAC7C,sBAAsB,EAAE,4BAA4B;IACpD,qBAAqB,EAAE,2BAA2B;IAClD,iBAAiB,EAAE;sEAC+C;AACtE;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;AACjB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,WAAW;IACX,8BAA8B;AAClC;;AAEA;;IAEI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,UAAU;IACV,gBAAgB;IAChB,6BAA6B;AACjC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,6BAA6B;AACjC;;AAEA;;IAEI,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,0CAA0C;IAC1C,oCAAoC;AACxC;;AAEA;IACI,wCAAwC;IACxC,kCAAkC;AACtC;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI;;QAEI,eAAe;IACnB;AACJ","sourcesContent":[":root {\n    --black: rgb(29, 29, 29);\n    --white: rgb(250, 250, 250);\n    --grey: rgb(121, 121, 121);\n}\n\nhtml,\nbody {\n    font-size: 8px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    color: var(--black);\n    background: rgb(235, 235, 235);\n}\n\n#header-bar {\n    padding: 18px 20px;\n    color: var(--white);\n    background: rgb(75, 75, 75);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh2 {\n    margin: 0;\n    font-size: 3rem;\n}\n\n.nav-btn {\n    background: inherit;\n    border: none;\n    color: var(--white);\n}\n\n.nav-bar {\n    display: none;\n    background: rgb(219, 219, 219);\n    color:rgb(37, 37, 37);\n    font-size: 1.5rem;\n    box-shadow: 0px 1px 2px var(--grey);\n    /* prevent highlights */\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                        supported by Chrome, Edge, Opera and Firefox */\n}\n\n.wrapper {\n    padding: 15px;\n}\n\n.list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.selection {\n    padding: 7px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.selection i,\n.add-project-btn i {\n    margin-right: 10px;\n}\n\n.selection:hover {\n    background:rgb(204, 204, 204);\n}\n\n.selected {\n    background: rgb(204, 204, 204);\n    font-weight: bold;\n}\n\nh3 {\n    font-size: 1.9rem;\n}\n\n.add-project-btn {\n    display: none;\n}\n\n.content {\n    margin: 20px;\n}\n\n.tasks {\n    margin: 10px;\n}\n\n.task {\n    font-size: 1.3rem;\n    color: var(--black);\n    border: 1px solid var(--grey);\n    border-radius: 10px;\n    padding: 10px 15px;\n    margin-top: 15px;\n}\n\n.task:hover {\n    background: rgb(204, 204, 204);\n}\n\n.info-wrapper {\n    display: none;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.complete-icon {\n    width: 12px;\n    height: 12px;\n    border: 1px solid var(--grey);\n    border-radius: 50%;\n}\n\n.task-name {\n    width: 55%;\n}\n\n.side-icons-wrapper {\n    display: flex;\n    width: 30px;\n    justify-content: space-between;\n}\n\n.edit-icon,\n.delete-icon {\n    display: none;\n    color: var(--grey);\n}\n\n.edit-icon:hover {\n    color: var(--black);\n}\n\n.delete-icon:hover {\n    color: rgb(190, 39, 39);\n}\n\n.task:hover .edit-icon,\n.task:hover .delete-icon {\n    display: block;\n}\n\n.add-task-btn {\n    font-size: 1.5rem;\n    display: none;\n    text-align: center;\n}\n\n.task-edit-form {\n    display: none;\n    height: 50px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.edit-inputs {\n    display: flex;\n    width: 80%;\n    max-width: 600px;\n    justify-content: space-around;\n}\n\n.edit-task-title {\n    width: 50%;\n}\n\n.edit-task-due {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.confirm-edit-buttons {\n    width: 150px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.confirm-edit,\n.cancel-edit {\n    border: 1px solid var(--black);\n    border-radius: 5px;\n    background: inherit;\n}\n\n.confirm-edit:hover {\n    border: 1px solid rgba(149, 229, 149, 0.9);\n    background: rgba(149, 229, 149, 0.9);\n}\n\n.cancel-edit:hover {\n    border: 1px solid rgba(196, 94, 94, 0.9);\n    background: rgba(196, 94, 94, 0.9);\n}\n\n.project-form,\n.task-form {\n    display: none;\n}\n\n.display-flex {\n    display: flex;\n}\n\n.display {\n    display: block;\n}\n\n@media (min-width: 320px) {\n    html,\n    body {\n        font-size: 10px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");




//PAGE BEHAVIOUR
const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav-bar');
const projectForm = document.querySelector('.project-form');
const taskForm = document.querySelector('.task-form');
const addProjBtn = document.querySelector('.add-project-btn');
const addTaskBtn = document.querySelector('.add-task-btn');
const addProjBtnSubmit = document.querySelector('.project-submit-btn');
const addTaskBtnSubmit = document.querySelector('.task-submit-btn');
const projectBtnCancel = document.querySelector('.project-cancel-btn');
const taskBtnCancel = document.querySelector('.task-cancel-btn');
let listItems = document.querySelectorAll('.tab');
let childItems = document.querySelectorAll('.tab > *');

const pageFunctions = (() => {
    function dropdownMenu() {
        nav.classList.toggle('display');
    }

    function submitProjectForm() {
        //get title of project from form
        const title = document.querySelector('.project-form input').value;
        if (!title) {
            alert("Input required");
            return;
        }
        //add DOM elements
        addProjectLink(title);
        //create instance of project from factory
        _project_js__WEBPACK_IMPORTED_MODULE_0__.default.addNewProject(title);
        cancelForm(projectForm, addProjBtn);
    }

    function submitTaskForm() {
        //get title of task from form
        const title = document.querySelector('.task-form input').value;
        if (!title) {
            alert("Input required");
            return;
        }
        //add DOM elements
        addTaskCell(title);
        //create instance of task from factory
        _task_js__WEBPACK_IMPORTED_MODULE_1__.default.addNewTask(title);
        cancelForm(taskForm, addTaskBtn);
    }

    function selectLink(e) {
        let link = e.target
        //if selected any child elements, revert to parent element
        if (Array.from(childItems).includes(link)) {
            link = link.parentElement;
        }
    //check if any links are currently selected
    if (linkSelected()) {
            if (linkSelected() == link) {
                return;
            }
        linkSelected().classList.remove('selected');
    }
    link.classList.add('selected');
    }

    function linkSelected() {
        //initialise output as false
        let output = false;
        listItems.forEach(item => {
            if (item.classList.contains('selected')) {
                //if item found, change output to item
                output = item;
            }
        });
        return output;
    }

    //event listeners for navBtn and add project btn
    navBtn.addEventListener('click', dropdownMenu);
    //passes function to wait for event before calling toggleForms
    addProjBtn.addEventListener('click', () => toggleForm(projectForm, addProjBtn));
    addTaskBtn.addEventListener('click', () => toggleForm(taskForm, addTaskBtn));
    projectBtnCancel.addEventListener('click', () => cancelForm(projectForm, addProjBtn));
    taskBtnCancel.addEventListener('click', () => cancelForm(taskForm, addTaskBtn));
    addProjBtnSubmit.addEventListener('click', submitProjectForm);
    addTaskBtnSubmit.addEventListener('click', submitTaskForm);
    //event listener for clicks on project tabs
    listItems.forEach(item => item.addEventListener('click', selectLink));

    return {selectLink, linkSelected};
})();

function toggleForm(...args) {
    args.forEach(args => args.classList.toggle('display'));
}

function toggleFormFlex(...args) {
    args.forEach(args => args.classList.toggle('display-flex'));
}

function cancelForm(element1, element2) {
    element1.reset();
    toggleForm(element1, element2);
}

function formatDate(date) {
    return date
            .split('-')
            .reverse()
            .join('/');
}

const addProjectLink = (projectName) => {
    const projects = document.querySelector('.projects');

    //create new list element, set dataset link to project(count);
    const newLink = document.createElement('li');
    newLink.className = "selection project tab";
    newLink.dataset.link = projectName;
    //create icon
    const icon = document.createElement('i');
    icon.className = 'far fa-list-alt';
    //create default project name
    const projTitle = document.createElement('span');
    projTitle.className = 'project-title';
    projTitle.textContent = projectName;
    
    //append children to link
    newLink.appendChild(icon);
    newLink.appendChild(projTitle);

    //append link to project
    projects.appendChild(newLink);

    //add event listener and update list of  and list of child items
    listItems = document.querySelectorAll('.tab');
    childItems = document.querySelectorAll('.tab > *');

    newLink.addEventListener('click', pageFunctions.selectLink);
}

const addTaskCell = (taskName) => {
    function getDateToday() {
        const date = new Date();
        return formatDate(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
    }

    const tasks = document.querySelector('.tasks');
    //create div element to wrap both task info and edit info
    const newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.dataset.num = 0; //dataset num to identify task instance in project - taskList array
    
    //create div to hold all taskInfo in flexbox
    const taskInfo = document.createElement('div');
    taskInfo.className = 'info-wrapper display-flex';

    //create icon element - styled to circle - to reflect priority of task
    const completeIcon = document.createElement('div');
    completeIcon.className = 'complete-icon';

    //create span element for task title
    const taskTitle = document.createElement('span');
    taskTitle.className = 'task-name';
    taskTitle.textContent = taskName;

    //create div element to store date - to be changed upon edit
    //create edit form for this too, to select date
    const taskDue = document.createElement('div');
    taskDue.className = 'date';
    taskDue.textContent = getDateToday()

    //append edit and delete icons to right side of date div.
    const sideIconsWrapper = document.createElement('div');
    sideIconsWrapper.className = 'side-icons-wrapper'
    const editIcon = document.createElement('span');
    editIcon.className = 'edit-icon';
    editIcon.innerHTML = '<i class="far fa-edit"></i>';
    const deleteIcon = document.createElement('span');
    deleteIcon.className = 'delete-icon';
    deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>';
    sideIconsWrapper.appendChild(editIcon);
    sideIconsWrapper.appendChild(deleteIcon);

    //append elements to task div, then append task div to list div
    //MAIN TASK CELL
    taskInfo.appendChild(completeIcon);
    taskInfo.appendChild(taskTitle);
    taskInfo.appendChild(taskDue);
    taskInfo.appendChild(sideIconsWrapper);
    newTask.appendChild(taskInfo);

    //create task edit form
    const taskEditForm = document.createElement('form');
    taskEditForm.className = 'task-edit-form'; //to display flex
    //wrapper for input elements
    const editInputs = document.createElement('div');
    editInputs.className = 'edit-inputs';
    //input elements
    const editTitle = document.createElement('input');
    editTitle.className = 'edit-task-title';
    const editDate = document.createElement('input');
    editDate.className = 'edit-task-due';
    editDate.type = 'text';
    
    //button wrapper
    const confirmBtns = document.createElement('div');
    confirmBtns.className = 'confirm-edit-buttons';
    //buttons
    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'confirm-edit';
    confirmBtn.type = 'button';
    confirmBtn.textContent = 'Save';
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-edit';
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';

    //append to form element
    editInputs.appendChild(editTitle);
    editInputs.appendChild(editDate);
    confirmBtns.appendChild(confirmBtn);
    confirmBtns.appendChild(cancelBtn);
    taskEditForm.appendChild(editInputs);
    taskEditForm.appendChild(confirmBtns);


    //append task-edit-form to task element
    newTask.appendChild(taskEditForm);

    //add to DOM
    tasks.appendChild(newTask);

    //event listeners for side icons
    editIcon.addEventListener('click', () => editTask.displayEdit(newTask));
    deleteIcon.addEventListener('click', () => console.log('deleting this task'));

    //event listeners for edit form
    confirmBtn.addEventListener('click', () => editTask.submitEdit(newTask));
    cancelBtn.addEventListener('click', () => editTask.resetEdit(newTask));
    //eventListeners for formatting of date
    editDate.addEventListener('focus', (event) => {
        event.target.type = "date";
    });
    editDate.addEventListener('blur', (event) => {
        event.target.type = "text";
        if (!editDate.value) {
            editDate.value = getDateToday();
        } else {
            let date = editDate.value;
            editDate.value = formatDate(date);
        }
    });

    //icon.addEventListener('click', completeTask);
}

const editTask = (() => {
    function displayEdit(task) {
        //show edit form, display off for task info
        const taskInfo = task.querySelector('.info-wrapper');
        const taskForm = task.querySelector('.task-edit-form');
        const taskTitle = task.querySelector('.task-name');
        const taskDue = task.querySelector('.date');
        const editTitle = task.querySelector('.edit-task-title');
        const editDue = task.querySelector('.edit-task-due');

        editTitle.value = taskTitle.textContent;
        editDue.value = taskDue.textContent;
    
        toggleFormFlex(taskInfo, taskForm);
    }

    function resetEdit(task) {
        //reset form, toggle displayEdit
        task.querySelector('.task-edit-form').reset();

        displayEdit(task);
    }

    function submitEdit(task) {
        const taskTitle = task.querySelector('.task-name');
        const taskDue = task.querySelector('.date');
        const editedTitle = task.querySelector('.edit-task-title');
        const editedDue = task.querySelector('.edit-task-due');

        //change task title and date according to form
        taskTitle.textContent = editedTitle.value;
        taskDue.textContent = formatDate(editedDue.value);

        resetEdit(task);
    }

    return {displayEdit, resetEdit, submitEdit}
})();

const UI = {
    pageFunctions,
    addProjectLink,
    addTaskCell
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//FACTORY FUNCTION FOR PROJECTS
const CreateProject = (title) => {
    //initialise project array
    let taskList = [];

    //function to set title
    function setTitle(title) {
        this.title = title;
    };

    //adds tasks to current projectList
    function addTask(task) {
        taskList.push(task);
    };

    return {title, setTitle, taskList, addTask};
}

//ADD PROJECT
function addNewProject(projectName) {
    //create new instance of project
    const newProject = CreateProject(projectName);
    console.log(newProject);
}

const projectModule = {
    CreateProject,
    addNewProject
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectModule);

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getItems() {
    
}

//check if localStorage has items
function hasStorage() {
    return localStorage.getItem('default');
}

function addToStorage() {
    localStorage.setItem(project.title, JSON.stringify(project));
}

const storage = {
    hasStorage,
    addToStorage
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");


//FACTORY FUNCTION FOR TASKS
const CreateTask = (title, due, flag, project) => {
    //change title, flag or date
    function setTitle(title) {
        this.title = title;
    }

    function setDue(due) {
        this.due = due;
    }

    function setFlag(color) {
        this.flag = color;
    }

    return {title, due, flag, project, setTitle, setDue, setFlag};
};

function addNewTask(taskName) {
    //new instance from task factory
    const newTask = CreateTask(taskName);
    console.log(newTask);
    //add to current project page?
}

function addToProject(task) {
    _project_js__WEBPACK_IMPORTED_MODULE_0__.default.addTask(task);
    console.log(project.taskList);
}

const task = {
    addToProject,
    CreateTask,
    addNewTask
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task.js */ "./src/modules/task.js");
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");
/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/UI.js */ "./src/modules/UI.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELCtCQUErQixrQ0FBa0MsaUNBQWlDLEdBQUcsaUJBQWlCLHFCQUFxQixnREFBZ0QsZ0JBQWdCLDBCQUEwQixxQ0FBcUMsR0FBRyxpQkFBaUIseUJBQXlCLDBCQUEwQixrQ0FBa0Msb0JBQW9CLHFDQUFxQywwQkFBMEIsR0FBRyxRQUFRLGdCQUFnQixzQkFBc0IsR0FBRyxjQUFjLDBCQUEwQixtQkFBbUIsMEJBQTBCLEdBQUcsY0FBYyxvQkFBb0IscUNBQXFDLDRCQUE0Qix3QkFBd0IsMENBQTBDLGdFQUFnRSxpREFBaUQsNENBQTRDLGtEQUFrRCwwREFBMEQscURBQXFELCtHQUErRyxjQUFjLG9CQUFvQixHQUFHLFdBQVcsZ0JBQWdCLGlCQUFpQix1QkFBdUIsR0FBRyxnQkFBZ0IsbUJBQW1CLHlCQUF5QixvQkFBb0IsR0FBRyx1Q0FBdUMseUJBQXlCLEdBQUcsc0JBQXNCLG9DQUFvQyxHQUFHLGVBQWUscUNBQXFDLHdCQUF3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Z0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmlEO0FBQ047QUFDTTtBQUNWIiwiZmlsZSI6Ii4vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmxhY2s6IHJnYigyOSwgMjksIDI5KTtcXG4gICAgLS13aGl0ZTogcmdiKDI1MCwgMjUwLCAyNTApO1xcbiAgICAtLWdyZXk6IHJnYigxMjEsIDEyMSwgMTIxKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG59XFxuXFxuI2hlYWRlci1iYXIge1xcbiAgICBwYWRkaW5nOiAxOHB4IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3NSwgNzUsIDc1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjE5LCAyMTksIDIxOSk7XFxuICAgIGNvbG9yOnJnYigzNywgMzcsIDM3KTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHZhcigtLWdyZXkpO1xcbiAgICAvKiBwcmV2ZW50IGhpZ2hsaWdodHMgKi9cXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUsIEVkZ2UsIE9wZXJhIGFuZCBGaXJlZm94ICovXFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zZWxlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNlbGVjdGlvbiBpLFxcbi5hZGQtcHJvamVjdC1idG4gaSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnNlbGVjdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6cmdiKDIwNCwgMjA0LCAyMDQpO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS45cmVtO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxufVxcblxcbi5pbmZvLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZS1pY29uIHtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICAgIHdpZHRoOiA1NSU7XFxufVxcblxcbi5zaWRlLWljb25zLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZWRpdC1pY29uLFxcbi5kZWxldGUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLmVkaXQtaWNvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5kZWxldGUtaWNvbjpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMTkwLCAzOSwgMzkpO1xcbn1cXG5cXG4udGFzazpob3ZlciAuZWRpdC1pY29uLFxcbi50YXNrOmhvdmVyIC5kZWxldGUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZWRpdC1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5lZGl0LWlucHV0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZWRpdC10YXNrLXRpdGxlIHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmVkaXQtdGFzay1kdWUge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbmZpcm0tZWRpdC1idXR0b25zIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmNvbmZpcm0tZWRpdCxcXG4uY2FuY2VsLWVkaXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG59XFxuXFxuLmNvbmZpcm0tZWRpdDpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTQ5LCAyMjksIDE0OSwgMC45KTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNDksIDIyOSwgMTQ5LCAwLjkpO1xcbn1cXG5cXG4uY2FuY2VsLWVkaXQ6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5NiwgOTQsIDk0LCAwLjkpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgOTQsIDk0LCAwLjkpO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLFxcbi50YXNrLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZGlzcGxheS1mbGV4IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XFxuICAgIGh0bWwsXFxuICAgIGJvZHkge1xcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QseUNBQXlDO0lBQ3pDLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyx1QkFBdUI7SUFDdkIsMkJBQTJCLEVBQUUsZUFBZTtJQUM1Qyx5QkFBeUIsRUFBRSxXQUFXO0lBQ3RDLHdCQUF3QixFQUFFLG1CQUFtQjtJQUM3QyxzQkFBc0IsRUFBRSw0QkFBNEI7SUFDcEQscUJBQXFCLEVBQUUsMkJBQTJCO0lBQ2xELGlCQUFpQixFQUFFO3NFQUMrQztBQUN0RTs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsOEJBQThCO0FBQ2xDOztBQUVBOztJQUVJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBOztJQUVJLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxrQ0FBa0M7QUFDdEM7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7O1FBRUksZUFBZTtJQUNuQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1ibGFjazogcmdiKDI5LCAyOSwgMjkpO1xcbiAgICAtLXdoaXRlOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxuICAgIC0tZ3JleTogcmdiKDEyMSwgMTIxLCAxMjEpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbn1cXG5cXG4jaGVhZGVyLWJhciB7XFxuICAgIHBhZGRpbmc6IDE4cHggMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDc1LCA3NSwgNzUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMTksIDIxOSwgMjE5KTtcXG4gICAgY29sb3I6cmdiKDM3LCAzNywgMzcpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggdmFyKC0tZ3JleSk7XFxuICAgIC8qIHByZXZlbnQgaGlnaGxpZ2h0cyAqL1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXFxuICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSwgRWRnZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2VsZWN0aW9uIGksXFxuLmFkZC1wcm9qZWN0LWJ0biBpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uc2VsZWN0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjA0LCAyMDQsIDIwNCk7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjlyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLnRhc2tzIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG59XFxuXFxuLmluZm8td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlLWljb24ge1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFzay1uYW1lIHtcXG4gICAgd2lkdGg6IDU1JTtcXG59XFxuXFxuLnNpZGUtaWNvbnMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5lZGl0LWljb24sXFxuLmRlbGV0ZS1pY29uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4uZWRpdC1pY29uOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLmRlbGV0ZS1pY29uOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigxOTAsIDM5LCAzOSk7XFxufVxcblxcbi50YXNrOmhvdmVyIC5lZGl0LWljb24sXFxuLnRhc2s6aG92ZXIgLmRlbGV0ZS1pY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1lZGl0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmVkaXQtaW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5lZGl0LXRhc2stdGl0bGUge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZWRpdC10YXNrLWR1ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29uZmlybS1lZGl0LWJ1dHRvbnMge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uY29uZmlybS1lZGl0LFxcbi5jYW5jZWwtZWRpdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbn1cXG5cXG4uY29uZmlybS1lZGl0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNDksIDIyOSwgMTQ5LCAwLjkpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0OSwgMjI5LCAxNDksIDAuOSk7XFxufVxcblxcbi5jYW5jZWwtZWRpdDpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0sXFxuLnRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kaXNwbGF5LWZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcXG4gICAgaHRtbCxcXG4gICAgYm9keSB7XFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwcm9qZWN0TW9kdWxlIGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgdGFzayBmcm9tICcuL3Rhc2suanMnO1xuaW1wb3J0IHRhc2tNb2R1bGUgZnJvbSAnLi90YXNrLmpzJztcblxuLy9QQUdFIEJFSEFWSU9VUlxuY29uc3QgbmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1idG4nKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYmFyJyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgYWRkUHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1idG4nKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG5jb25zdCBhZGRQcm9qQnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc3VibWl0LWJ0bicpO1xuY29uc3QgYWRkVGFza0J0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXN1Ym1pdC1idG4nKTtcbmNvbnN0IHByb2plY3RCdG5DYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYW5jZWwtYnRuJyk7XG5jb25zdCB0YXNrQnRuQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY2FuY2VsLWJ0bicpO1xubGV0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbmxldCBjaGlsZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYiA+IConKTtcblxuY29uc3QgcGFnZUZ1bmN0aW9ucyA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gZHJvcGRvd25NZW51KCkge1xuICAgICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzcGxheScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1Ym1pdFByb2plY3RGb3JtKCkge1xuICAgICAgICAvL2dldCB0aXRsZSBvZiBwcm9qZWN0IGZyb20gZm9ybVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0gaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICAgICAgYWxlcnQoXCJJbnB1dCByZXF1aXJlZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL2FkZCBET00gZWxlbWVudHNcbiAgICAgICAgYWRkUHJvamVjdExpbmsodGl0bGUpO1xuICAgICAgICAvL2NyZWF0ZSBpbnN0YW5jZSBvZiBwcm9qZWN0IGZyb20gZmFjdG9yeVxuICAgICAgICBwcm9qZWN0TW9kdWxlLmFkZE5ld1Byb2plY3QodGl0bGUpO1xuICAgICAgICBjYW5jZWxGb3JtKHByb2plY3RGb3JtLCBhZGRQcm9qQnRuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJtaXRUYXNrRm9ybSgpIHtcbiAgICAgICAgLy9nZXQgdGl0bGUgb2YgdGFzayBmcm9tIGZvcm1cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtIGlucHV0JykudmFsdWU7XG4gICAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5wdXQgcmVxdWlyZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy9hZGQgRE9NIGVsZW1lbnRzXG4gICAgICAgIGFkZFRhc2tDZWxsKHRpdGxlKTtcbiAgICAgICAgLy9jcmVhdGUgaW5zdGFuY2Ugb2YgdGFzayBmcm9tIGZhY3RvcnlcbiAgICAgICAgdGFza01vZHVsZS5hZGROZXdUYXNrKHRpdGxlKTtcbiAgICAgICAgY2FuY2VsRm9ybSh0YXNrRm9ybSwgYWRkVGFza0J0bik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VsZWN0TGluayhlKSB7XG4gICAgICAgIGxldCBsaW5rID0gZS50YXJnZXRcbiAgICAgICAgLy9pZiBzZWxlY3RlZCBhbnkgY2hpbGQgZWxlbWVudHMsIHJldmVydCB0byBwYXJlbnQgZWxlbWVudFxuICAgICAgICBpZiAoQXJyYXkuZnJvbShjaGlsZEl0ZW1zKS5pbmNsdWRlcyhsaW5rKSkge1xuICAgICAgICAgICAgbGluayA9IGxpbmsucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgIC8vY2hlY2sgaWYgYW55IGxpbmtzIGFyZSBjdXJyZW50bHkgc2VsZWN0ZWRcbiAgICBpZiAobGlua1NlbGVjdGVkKCkpIHtcbiAgICAgICAgICAgIGlmIChsaW5rU2VsZWN0ZWQoKSA9PSBsaW5rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICBsaW5rU2VsZWN0ZWQoKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlua1NlbGVjdGVkKCkge1xuICAgICAgICAvL2luaXRpYWxpc2Ugb3V0cHV0IGFzIGZhbHNlXG4gICAgICAgIGxldCBvdXRwdXQgPSBmYWxzZTtcbiAgICAgICAgbGlzdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICAvL2lmIGl0ZW0gZm91bmQsIGNoYW5nZSBvdXRwdXQgdG8gaXRlbVxuICAgICAgICAgICAgICAgIG91dHB1dCA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cblxuICAgIC8vZXZlbnQgbGlzdGVuZXJzIGZvciBuYXZCdG4gYW5kIGFkZCBwcm9qZWN0IGJ0blxuICAgIG5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRyb3Bkb3duTWVudSk7XG4gICAgLy9wYXNzZXMgZnVuY3Rpb24gdG8gd2FpdCBmb3IgZXZlbnQgYmVmb3JlIGNhbGxpbmcgdG9nZ2xlRm9ybXNcbiAgICBhZGRQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlRm9ybShwcm9qZWN0Rm9ybSwgYWRkUHJvakJ0bikpO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVGb3JtKHRhc2tGb3JtLCBhZGRUYXNrQnRuKSk7XG4gICAgcHJvamVjdEJ0bkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhbmNlbEZvcm0ocHJvamVjdEZvcm0sIGFkZFByb2pCdG4pKTtcbiAgICB0YXNrQnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FuY2VsRm9ybSh0YXNrRm9ybSwgYWRkVGFza0J0bikpO1xuICAgIGFkZFByb2pCdG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRQcm9qZWN0Rm9ybSk7XG4gICAgYWRkVGFza0J0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFRhc2tGb3JtKTtcbiAgICAvL2V2ZW50IGxpc3RlbmVyIGZvciBjbGlja3Mgb24gcHJvamVjdCB0YWJzXG4gICAgbGlzdEl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0TGluaykpO1xuXG4gICAgcmV0dXJuIHtzZWxlY3RMaW5rLCBsaW5rU2VsZWN0ZWR9O1xufSkoKTtcblxuZnVuY3Rpb24gdG9nZ2xlRm9ybSguLi5hcmdzKSB7XG4gICAgYXJncy5mb3JFYWNoKGFyZ3MgPT4gYXJncy5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5JykpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVGb3JtRmxleCguLi5hcmdzKSB7XG4gICAgYXJncy5mb3JFYWNoKGFyZ3MgPT4gYXJncy5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5LWZsZXgnKSk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEZvcm0oZWxlbWVudDEsIGVsZW1lbnQyKSB7XG4gICAgZWxlbWVudDEucmVzZXQoKTtcbiAgICB0b2dnbGVGb3JtKGVsZW1lbnQxLCBlbGVtZW50Mik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlXG4gICAgICAgICAgICAuc3BsaXQoJy0nKVxuICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgLmpvaW4oJy8nKTtcbn1cblxuY29uc3QgYWRkUHJvamVjdExpbmsgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuXG4gICAgLy9jcmVhdGUgbmV3IGxpc3QgZWxlbWVudCwgc2V0IGRhdGFzZXQgbGluayB0byBwcm9qZWN0KGNvdW50KTtcbiAgICBjb25zdCBuZXdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBuZXdMaW5rLmNsYXNzTmFtZSA9IFwic2VsZWN0aW9uIHByb2plY3QgdGFiXCI7XG4gICAgbmV3TGluay5kYXRhc2V0LmxpbmsgPSBwcm9qZWN0TmFtZTtcbiAgICAvL2NyZWF0ZSBpY29uXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpY29uLmNsYXNzTmFtZSA9ICdmYXIgZmEtbGlzdC1hbHQnO1xuICAgIC8vY3JlYXRlIGRlZmF1bHQgcHJvamVjdCBuYW1lXG4gICAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByb2pUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdC10aXRsZSc7XG4gICAgcHJvalRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgXG4gICAgLy9hcHBlbmQgY2hpbGRyZW4gdG8gbGlua1xuICAgIG5ld0xpbmsuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgbmV3TGluay5hcHBlbmRDaGlsZChwcm9qVGl0bGUpO1xuXG4gICAgLy9hcHBlbmQgbGluayB0byBwcm9qZWN0XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3TGluayk7XG5cbiAgICAvL2FkZCBldmVudCBsaXN0ZW5lciBhbmQgdXBkYXRlIGxpc3Qgb2YgIGFuZCBsaXN0IG9mIGNoaWxkIGl0ZW1zXG4gICAgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuICAgIGNoaWxkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiID4gKicpO1xuXG4gICAgbmV3TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhZ2VGdW5jdGlvbnMuc2VsZWN0TGluayk7XG59XG5cbmNvbnN0IGFkZFRhc2tDZWxsID0gKHRhc2tOYW1lKSA9PiB7XG4gICAgZnVuY3Rpb24gZ2V0RGF0ZVRvZGF5KCkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgcmV0dXJuIGZvcm1hdERhdGUoYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke2RhdGUuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZS5nZXREYXRlKCl9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgICAvL2NyZWF0ZSBkaXYgZWxlbWVudCB0byB3cmFwIGJvdGggdGFzayBpbmZvIGFuZCBlZGl0IGluZm9cbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFzay5jbGFzc05hbWUgPSAndGFzayc7XG4gICAgbmV3VGFzay5kYXRhc2V0Lm51bSA9IDA7IC8vZGF0YXNldCBudW0gdG8gaWRlbnRpZnkgdGFzayBpbnN0YW5jZSBpbiBwcm9qZWN0IC0gdGFza0xpc3QgYXJyYXlcbiAgICBcbiAgICAvL2NyZWF0ZSBkaXYgdG8gaG9sZCBhbGwgdGFza0luZm8gaW4gZmxleGJveFxuICAgIGNvbnN0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0luZm8uY2xhc3NOYW1lID0gJ2luZm8td3JhcHBlciBkaXNwbGF5LWZsZXgnO1xuXG4gICAgLy9jcmVhdGUgaWNvbiBlbGVtZW50IC0gc3R5bGVkIHRvIGNpcmNsZSAtIHRvIHJlZmxlY3QgcHJpb3JpdHkgb2YgdGFza1xuICAgIGNvbnN0IGNvbXBsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbXBsZXRlSWNvbi5jbGFzc05hbWUgPSAnY29tcGxldGUtaWNvbic7XG5cbiAgICAvL2NyZWF0ZSBzcGFuIGVsZW1lbnQgZm9yIHRhc2sgdGl0bGVcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGFza1RpdGxlLmNsYXNzTmFtZSA9ICd0YXNrLW5hbWUnO1xuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tOYW1lO1xuXG4gICAgLy9jcmVhdGUgZGl2IGVsZW1lbnQgdG8gc3RvcmUgZGF0ZSAtIHRvIGJlIGNoYW5nZWQgdXBvbiBlZGl0XG4gICAgLy9jcmVhdGUgZWRpdCBmb3JtIGZvciB0aGlzIHRvbywgdG8gc2VsZWN0IGRhdGVcbiAgICBjb25zdCB0YXNrRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0R1ZS5jbGFzc05hbWUgPSAnZGF0ZSc7XG4gICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IGdldERhdGVUb2RheSgpXG5cbiAgICAvL2FwcGVuZCBlZGl0IGFuZCBkZWxldGUgaWNvbnMgdG8gcmlnaHQgc2lkZSBvZiBkYXRlIGRpdi5cbiAgICBjb25zdCBzaWRlSWNvbnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZUljb25zV3JhcHBlci5jbGFzc05hbWUgPSAnc2lkZS1pY29ucy13cmFwcGVyJ1xuICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGVkaXRJY29uLmNsYXNzTmFtZSA9ICdlZGl0LWljb24nO1xuICAgIGVkaXRJY29uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS1lZGl0XCI+PC9pPic7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTmFtZSA9ICdkZWxldGUtaWNvbic7XG4gICAgZGVsZXRlSWNvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0XCI+PC9pPic7XG4gICAgc2lkZUljb25zV3JhcHBlci5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgc2lkZUljb25zV3JhcHBlci5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgIC8vYXBwZW5kIGVsZW1lbnRzIHRvIHRhc2sgZGl2LCB0aGVuIGFwcGVuZCB0YXNrIGRpdiB0byBsaXN0IGRpdlxuICAgIC8vTUFJTiBUQVNLIENFTExcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChjb21wbGV0ZUljb24pO1xuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0R1ZSk7XG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQoc2lkZUljb25zV3JhcHBlcik7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XG5cbiAgICAvL2NyZWF0ZSB0YXNrIGVkaXQgZm9ybVxuICAgIGNvbnN0IHRhc2tFZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0YXNrRWRpdEZvcm0uY2xhc3NOYW1lID0gJ3Rhc2stZWRpdC1mb3JtJzsgLy90byBkaXNwbGF5IGZsZXhcbiAgICAvL3dyYXBwZXIgZm9yIGlucHV0IGVsZW1lbnRzXG4gICAgY29uc3QgZWRpdElucHV0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXRJbnB1dHMuY2xhc3NOYW1lID0gJ2VkaXQtaW5wdXRzJztcbiAgICAvL2lucHV0IGVsZW1lbnRzXG4gICAgY29uc3QgZWRpdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlZGl0VGl0bGUuY2xhc3NOYW1lID0gJ2VkaXQtdGFzay10aXRsZSc7XG4gICAgY29uc3QgZWRpdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVkaXREYXRlLmNsYXNzTmFtZSA9ICdlZGl0LXRhc2stZHVlJztcbiAgICBlZGl0RGF0ZS50eXBlID0gJ3RleHQnO1xuICAgIFxuICAgIC8vYnV0dG9uIHdyYXBwZXJcbiAgICBjb25zdCBjb25maXJtQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmZpcm1CdG5zLmNsYXNzTmFtZSA9ICdjb25maXJtLWVkaXQtYnV0dG9ucyc7XG4gICAgLy9idXR0b25zXG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbmZpcm1CdG4uY2xhc3NOYW1lID0gJ2NvbmZpcm0tZWRpdCc7XG4gICAgY29uZmlybUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gJ2NhbmNlbC1lZGl0JztcbiAgICBjYW5jZWxCdG4udHlwZSA9ICdidXR0b24nO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gICAgLy9hcHBlbmQgdG8gZm9ybSBlbGVtZW50XG4gICAgZWRpdElucHV0cy5hcHBlbmRDaGlsZChlZGl0VGl0bGUpO1xuICAgIGVkaXRJbnB1dHMuYXBwZW5kQ2hpbGQoZWRpdERhdGUpO1xuICAgIGNvbmZpcm1CdG5zLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuICAgIGNvbmZpcm1CdG5zLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gICAgdGFza0VkaXRGb3JtLmFwcGVuZENoaWxkKGVkaXRJbnB1dHMpO1xuICAgIHRhc2tFZGl0Rm9ybS5hcHBlbmRDaGlsZChjb25maXJtQnRucyk7XG5cblxuICAgIC8vYXBwZW5kIHRhc2stZWRpdC1mb3JtIHRvIHRhc2sgZWxlbWVudFxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza0VkaXRGb3JtKTtcblxuICAgIC8vYWRkIHRvIERPTVxuICAgIHRhc2tzLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lcnMgZm9yIHNpZGUgaWNvbnNcbiAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVkaXRUYXNrLmRpc3BsYXlFZGl0KG5ld1Rhc2spKTtcbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY29uc29sZS5sb2coJ2RlbGV0aW5nIHRoaXMgdGFzaycpKTtcblxuICAgIC8vZXZlbnQgbGlzdGVuZXJzIGZvciBlZGl0IGZvcm1cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZWRpdFRhc2suc3VibWl0RWRpdChuZXdUYXNrKSk7XG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZWRpdFRhc2sucmVzZXRFZGl0KG5ld1Rhc2spKTtcbiAgICAvL2V2ZW50TGlzdGVuZXJzIGZvciBmb3JtYXR0aW5nIG9mIGRhdGVcbiAgICBlZGl0RGF0ZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC50YXJnZXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIH0pO1xuICAgIGVkaXREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgaWYgKCFlZGl0RGF0ZS52YWx1ZSkge1xuICAgICAgICAgICAgZWRpdERhdGUudmFsdWUgPSBnZXREYXRlVG9kYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gZWRpdERhdGUudmFsdWU7XG4gICAgICAgICAgICBlZGl0RGF0ZS52YWx1ZSA9IGZvcm1hdERhdGUoZGF0ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbXBsZXRlVGFzayk7XG59XG5cbmNvbnN0IGVkaXRUYXNrID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBkaXNwbGF5RWRpdCh0YXNrKSB7XG4gICAgICAgIC8vc2hvdyBlZGl0IGZvcm0sIGRpc3BsYXkgb2ZmIGZvciB0YXNrIGluZm9cbiAgICAgICAgY29uc3QgdGFza0luZm8gPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXQtZm9ybScpO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKTtcbiAgICAgICAgY29uc3QgdGFza0R1ZSA9IHRhc2sucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbiAgICAgICAgY29uc3QgZWRpdFRpdGxlID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IGVkaXREdWUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZHVlJyk7XG5cbiAgICAgICAgZWRpdFRpdGxlLnZhbHVlID0gdGFza1RpdGxlLnRleHRDb250ZW50O1xuICAgICAgICBlZGl0RHVlLnZhbHVlID0gdGFza0R1ZS50ZXh0Q29udGVudDtcbiAgICBcbiAgICAgICAgdG9nZ2xlRm9ybUZsZXgodGFza0luZm8sIHRhc2tGb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldEVkaXQodGFzaykge1xuICAgICAgICAvL3Jlc2V0IGZvcm0sIHRvZ2dsZSBkaXNwbGF5RWRpdFxuICAgICAgICB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXQtZm9ybScpLnJlc2V0KCk7XG5cbiAgICAgICAgZGlzcGxheUVkaXQodGFzayk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VibWl0RWRpdCh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2sucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpO1xuICAgICAgICBjb25zdCB0YXNrRHVlID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuICAgICAgICBjb25zdCBlZGl0ZWRUaXRsZSA9IHRhc2sucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay10aXRsZScpO1xuICAgICAgICBjb25zdCBlZGl0ZWREdWUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZHVlJyk7XG5cbiAgICAgICAgLy9jaGFuZ2UgdGFzayB0aXRsZSBhbmQgZGF0ZSBhY2NvcmRpbmcgdG8gZm9ybVxuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBlZGl0ZWRUaXRsZS52YWx1ZTtcbiAgICAgICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUoZWRpdGVkRHVlLnZhbHVlKTtcblxuICAgICAgICByZXNldEVkaXQodGFzayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtkaXNwbGF5RWRpdCwgcmVzZXRFZGl0LCBzdWJtaXRFZGl0fVxufSkoKTtcblxuY29uc3QgVUkgPSB7XG4gICAgcGFnZUZ1bmN0aW9ucyxcbiAgICBhZGRQcm9qZWN0TGluayxcbiAgICBhZGRUYXNrQ2VsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7IiwiLy9GQUNUT1JZIEZVTkNUSU9OIEZPUiBQUk9KRUNUU1xuY29uc3QgQ3JlYXRlUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIC8vaW5pdGlhbGlzZSBwcm9qZWN0IGFycmF5XG4gICAgbGV0IHRhc2tMaXN0ID0gW107XG5cbiAgICAvL2Z1bmN0aW9uIHRvIHNldCB0aXRsZVxuICAgIGZ1bmN0aW9uIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9O1xuXG4gICAgLy9hZGRzIHRhc2tzIHRvIGN1cnJlbnQgcHJvamVjdExpc3RcbiAgICBmdW5jdGlvbiBhZGRUYXNrKHRhc2spIHtcbiAgICAgICAgdGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHt0aXRsZSwgc2V0VGl0bGUsIHRhc2tMaXN0LCBhZGRUYXNrfTtcbn1cblxuLy9BREQgUFJPSkVDVFxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIC8vY3JlYXRlIG5ldyBpbnN0YW5jZSBvZiBwcm9qZWN0XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IENyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xufVxuXG5jb25zdCBwcm9qZWN0TW9kdWxlID0ge1xuICAgIENyZWF0ZVByb2plY3QsXG4gICAgYWRkTmV3UHJvamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TW9kdWxlOyIsImZ1bmN0aW9uIGdldEl0ZW1zKCkge1xuICAgIFxufVxuXG4vL2NoZWNrIGlmIGxvY2FsU3RvcmFnZSBoYXMgaXRlbXNcbmZ1bmN0aW9uIGhhc1N0b3JhZ2UoKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkZWZhdWx0Jyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XG59XG5cbmNvbnN0IHN0b3JhZ2UgPSB7XG4gICAgaGFzU3RvcmFnZSxcbiAgICBhZGRUb1N0b3JhZ2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTsiLCJpbXBvcnQgcHJvamVjdE1vZHVsZSBmcm9tICcuL3Byb2plY3QuanMnO1xuXG4vL0ZBQ1RPUlkgRlVOQ1RJT04gRk9SIFRBU0tTXG5jb25zdCBDcmVhdGVUYXNrID0gKHRpdGxlLCBkdWUsIGZsYWcsIHByb2plY3QpID0+IHtcbiAgICAvL2NoYW5nZSB0aXRsZSwgZmxhZyBvciBkYXRlXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldER1ZShkdWUpIHtcbiAgICAgICAgdGhpcy5kdWUgPSBkdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RmxhZyhjb2xvcikge1xuICAgICAgICB0aGlzLmZsYWcgPSBjb2xvcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge3RpdGxlLCBkdWUsIGZsYWcsIHByb2plY3QsIHNldFRpdGxlLCBzZXREdWUsIHNldEZsYWd9O1xufTtcblxuZnVuY3Rpb24gYWRkTmV3VGFzayh0YXNrTmFtZSkge1xuICAgIC8vbmV3IGluc3RhbmNlIGZyb20gdGFzayBmYWN0b3J5XG4gICAgY29uc3QgbmV3VGFzayA9IENyZWF0ZVRhc2sodGFza05hbWUpO1xuICAgIGNvbnNvbGUubG9nKG5ld1Rhc2spO1xuICAgIC8vYWRkIHRvIGN1cnJlbnQgcHJvamVjdCBwYWdlP1xufVxuXG5mdW5jdGlvbiBhZGRUb1Byb2plY3QodGFzaykge1xuICAgIHByb2plY3RNb2R1bGUuYWRkVGFzayh0YXNrKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRhc2tMaXN0KTtcbn1cblxuY29uc3QgdGFzayA9IHtcbiAgICBhZGRUb1Byb2plY3QsXG4gICAgQ3JlYXRlVGFzayxcbiAgICBhZGROZXdUYXNrXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2s7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwcm9qZWN0TW9kdWxlIGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0LmpzJztcbmltcG9ydCB0YXNrTW9kdWxlIGZyb20gJy4vbW9kdWxlcy90YXNrLmpzJztcbmltcG9ydCBzdG9yYWdlTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9zdG9yYWdlLmpzJztcbmltcG9ydCBVSU1vZHVsZSBmcm9tICcuL21vZHVsZXMvVUkuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7Il0sInNvdXJjZVJvb3QiOiIifQ==