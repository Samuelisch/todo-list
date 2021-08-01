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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black: rgb(29, 29, 29);\n    --white: rgb(250, 250, 250);\n    --grey: rgb(121, 121, 121);\n}\n\nhtml,\nbody {\n    font-size: 8px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    color: var(--black);\n    background: rgb(235, 235, 235);\n}\n\n#header-bar {\n    padding: 18px 20px;\n    color: var(--white);\n    background: rgb(75, 75, 75);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh2 {\n    margin: 0;\n    font-size: 3rem;\n}\n\n.nav-btn {\n    background: inherit;\n    border: none;\n    color: var(--white);\n}\n\n.nav-bar {\n    display: none;\n    background: rgb(219, 219, 219);\n    color:rgb(37, 37, 37);\n    font-size: 1.5rem;\n    box-shadow: 0px 1px 2px var(--grey);\n    /* prevent highlights */\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                        supported by Chrome, Edge, Opera and Firefox */\n}\n\n.wrapper {\n    padding: 15px;\n}\n\n.list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.selection {\n    padding: 7px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.selection i,\n.add-project-btn i {\n    margin-right: 10px;\n}\n\n.selection:hover {\n    background:rgb(204, 204, 204);\n}\n\n.selected {\n    background: rgb(204, 204, 204);\n    font-weight: bold;\n}\n\nh3 {\n    font-size: 1.9rem;\n}\n\n.add-project-btn {\n    display: none;\n}\n\n.project {\n    justify-content: space-between;\n}\n\n.tab > * {\n    pointer-events: none;\n}\n\n.project-delete {\n    pointer-events: all;\n}\n\n.project-delete {\n    display: none;\n}\n\n.project-delete:hover {\n    color:rgb(190, 39, 39);\n}\n\n.project:hover .project-delete {\n    display: block;\n}\n\n.content {\n    margin: 20px;\n}\n\n.tasks {\n    margin: 5px;\n}\n\n.task {\n    font-size: 1.3rem;\n    color: var(--black);\n    border: 1px solid var(--grey);\n    border-radius: 10px;\n    padding: 10px 10px;\n    margin-top: 15px;\n}\n\n.task:hover {\n    background: rgb(204, 204, 204);\n}\n\n.info-wrapper {\n    display: none;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.complete-icon {\n    width: 12px;\n    height: 12px;\n    border: 1px solid var(--grey);\n    border-radius: 50%;\n}\n\n.task-name {\n    width: 55%;\n    margin-left: 5px;\n}\n\n.side-icons-wrapper {\n    display: flex;\n    width: 30px;\n    justify-content: space-between;\n}\n\n.edit-icon,\n.delete-icon {\n    display: none;\n    color: var(--grey);\n}\n\n.edit-icon:hover {\n    color: var(--black);\n}\n\n.delete-icon:hover {\n    color: rgb(190, 39, 39);\n}\n\n.task:hover .edit-icon,\n.task:hover .delete-icon {\n    display: block;\n}\n\n.task-edit-form {\n    display: none;\n    height: 50px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.edit-inputs {\n    display: flex;\n    width: 80%;\n    max-width: 600px;\n    justify-content: space-around;\n}\n\n.edit-task-title {\n    width: 50%;\n}\n\n.edit-task-due {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.confirm-edit-buttons {\n    width: 150px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.confirm-edit,\n.cancel-edit {\n    border: 1px solid var(--black);\n    border-radius: 5px;\n    background: inherit;\n}\n\n.confirm-edit:hover {\n    border: 1px solid rgba(149, 229, 149, 0.9);\n    background: rgba(149, 229, 149, 0.9);\n}\n\n.cancel-edit:hover {\n    border: 1px solid rgba(196, 94, 94, 0.9);\n    background: rgba(196, 94, 94, 0.9);\n}\n\n.project-form,\n.task-form {\n    display: none;\n    font-size: 13px;\n}\n\n.task-form {\n    text-align: center;\n}\n\n.add-task-btn {\n    font-size: 1.5rem;\n    display: none;\n    text-align: center;\n}\n\n.form-input {\n    border-radius: 3px;\n    border: 1px solid var(--black);\n    padding: 4px 8px;\n}\n\n.form-btns {\n    display: inline-block;\n}\n\n.form-btns button {\n    padding: 3px;\n}\n\n.task-submit-btn:hover,\n.project-submit-btn:hover {\n    background:rgba(149, 229, 149, 0.9);\n    border: 2px solid rgba(149, 229, 149, 0.9);\n}\n\n.task-cancel-btn:hover,\n.project-cancel-btn:hover {\n    background:rgba(196, 94, 94, 0.9);\n    color:rgb(235, 235, 235);\n    border: 2px solid rgba(196, 94, 94, 0.9);\n}\n\n.display-flex {\n    display: flex;\n}\n\n.display {\n    display: block;\n}\n\n@media (min-width: 321px) {\n    html,\n    body {\n        font-size: 10px;\n    }\n\n    .tasks {\n        margin: 10px;\n    }\n}\n\n@media (min-width: 769px) {\n    header {\n        position: fixed;\n        width: 100vw;\n        z-index: 5;\n    }\n\n    .nav-btn {\n        display: none;\n    }\n\n    .nav-wrap {\n        width: 30%;\n        max-width: 400px;\n    }\n\n    .nav-bar {\n        z-index: 1;\n        display: flex;\n        position: fixed;\n        width: inherit;\n        max-width: inherit;\n        height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper {\n        width: 100%;\n        overflow-y: scroll;\n        -ms-overflow-style: none;  /* Internet Explorer 10+ */\n        scrollbar-width: none;  /* Firefox */\n    }\n\n    .wrapper::-webkit-scrollbar { \n        display: none;  /* Safari and Chrome */\n    }\n\n    .wrapper ul:first-child {\n        margin-top: 80px;\n    }\n\n    .project-form {\n        margin-top: 10px;\n    }\n    \n    .content-wrapper {\n        display: flex;\n    }\n\n    .main-wrapper {\n        width: 60%;\n        margin: 80px;\n        flex: 2;\n        max-width: 1000px;\n    }\n}\n\n@media (max-width: 1030px) {\n    .project-form .form-btns {\n        margin-top: 10px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --black: rgb(29, 29, 29);\n    --white: rgb(250, 250, 250);\n    --grey: rgb(121, 121, 121);\n}\n\nhtml,\nbody {\n    font-size: 8px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    color: var(--black);\n    background: rgb(235, 235, 235);\n}\n\n#header-bar {\n    padding: 18px 20px;\n    color: var(--white);\n    background: rgb(75, 75, 75);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh2 {\n    margin: 0;\n    font-size: 3rem;\n}\n\n.nav-btn {\n    background: inherit;\n    border: none;\n    color: var(--white);\n}\n\n.nav-bar {\n    display: none;\n    background: rgb(219, 219, 219);\n    color:rgb(37, 37, 37);\n    font-size: 1.5rem;\n    box-shadow: 0px 1px 2px var(--grey);\n    /* prevent highlights */\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                        supported by Chrome, Edge, Opera and Firefox */\n}\n\n.wrapper {\n    padding: 15px;\n}\n\n.list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.selection {\n    padding: 7px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.selection i,\n.add-project-btn i {\n    margin-right: 10px;\n}\n\n.selection:hover {\n    background:rgb(204, 204, 204);\n}\n\n.selected {\n    background: rgb(204, 204, 204);\n    font-weight: bold;\n}\n\nh3 {\n    font-size: 1.9rem;\n}\n\n.add-project-btn {\n    display: none;\n}\n\n.project {\n    justify-content: space-between;\n}\n\n.tab > * {\n    pointer-events: none;\n}\n\n.project-delete {\n    pointer-events: all;\n}\n\n.project-delete {\n    display: none;\n}\n\n.project-delete:hover {\n    color:rgb(190, 39, 39);\n}\n\n.project:hover .project-delete {\n    display: block;\n}\n\n.content {\n    margin: 20px;\n}\n\n.tasks {\n    margin: 5px;\n}\n\n.task {\n    font-size: 1.3rem;\n    color: var(--black);\n    border: 1px solid var(--grey);\n    border-radius: 10px;\n    padding: 10px 10px;\n    margin-top: 15px;\n}\n\n.task:hover {\n    background: rgb(204, 204, 204);\n}\n\n.info-wrapper {\n    display: none;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.complete-icon {\n    width: 12px;\n    height: 12px;\n    border: 1px solid var(--grey);\n    border-radius: 50%;\n}\n\n.task-name {\n    width: 55%;\n    margin-left: 5px;\n}\n\n.side-icons-wrapper {\n    display: flex;\n    width: 30px;\n    justify-content: space-between;\n}\n\n.edit-icon,\n.delete-icon {\n    display: none;\n    color: var(--grey);\n}\n\n.edit-icon:hover {\n    color: var(--black);\n}\n\n.delete-icon:hover {\n    color: rgb(190, 39, 39);\n}\n\n.task:hover .edit-icon,\n.task:hover .delete-icon {\n    display: block;\n}\n\n.task-edit-form {\n    display: none;\n    height: 50px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.edit-inputs {\n    display: flex;\n    width: 80%;\n    max-width: 600px;\n    justify-content: space-around;\n}\n\n.edit-task-title {\n    width: 50%;\n}\n\n.edit-task-due {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.confirm-edit-buttons {\n    width: 150px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.confirm-edit,\n.cancel-edit {\n    border: 1px solid var(--black);\n    border-radius: 5px;\n    background: inherit;\n}\n\n.confirm-edit:hover {\n    border: 1px solid rgba(149, 229, 149, 0.9);\n    background: rgba(149, 229, 149, 0.9);\n}\n\n.cancel-edit:hover {\n    border: 1px solid rgba(196, 94, 94, 0.9);\n    background: rgba(196, 94, 94, 0.9);\n}\n\n.project-form,\n.task-form {\n    display: none;\n    font-size: 13px;\n}\n\n.task-form {\n    text-align: center;\n}\n\n.add-task-btn {\n    font-size: 1.5rem;\n    display: none;\n    text-align: center;\n}\n\n.form-input {\n    border-radius: 3px;\n    border: 1px solid var(--black);\n    padding: 4px 8px;\n}\n\n.form-btns {\n    display: inline-block;\n}\n\n.form-btns button {\n    padding: 3px;\n}\n\n.task-submit-btn:hover,\n.project-submit-btn:hover {\n    background:rgba(149, 229, 149, 0.9);\n    border: 2px solid rgba(149, 229, 149, 0.9);\n}\n\n.task-cancel-btn:hover,\n.project-cancel-btn:hover {\n    background:rgba(196, 94, 94, 0.9);\n    color:rgb(235, 235, 235);\n    border: 2px solid rgba(196, 94, 94, 0.9);\n}\n\n.display-flex {\n    display: flex;\n}\n\n.display {\n    display: block;\n}\n\n@media (min-width: 321px) {\n    html,\n    body {\n        font-size: 10px;\n    }\n\n    .tasks {\n        margin: 10px;\n    }\n}\n\n@media (min-width: 769px) {\n    header {\n        position: fixed;\n        width: 100vw;\n        z-index: 5;\n    }\n\n    .nav-btn {\n        display: none;\n    }\n\n    .nav-wrap {\n        width: 30%;\n        max-width: 400px;\n    }\n\n    .nav-bar {\n        z-index: 1;\n        display: flex;\n        position: fixed;\n        width: inherit;\n        max-width: inherit;\n        height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper {\n        width: 100%;\n        overflow-y: scroll;\n        -ms-overflow-style: none;  /* Internet Explorer 10+ */\n        scrollbar-width: none;  /* Firefox */\n    }\n\n    .wrapper::-webkit-scrollbar { \n        display: none;  /* Safari and Chrome */\n    }\n\n    .wrapper ul:first-child {\n        margin-top: 80px;\n    }\n\n    .project-form {\n        margin-top: 10px;\n    }\n    \n    .content-wrapper {\n        display: flex;\n    }\n\n    .main-wrapper {\n        width: 60%;\n        margin: 80px;\n        flex: 2;\n        max-width: 1000px;\n    }\n}\n\n@media (max-width: 1030px) {\n    .project-form .form-btns {\n        margin-top: 10px;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./src/modules/content.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* eslint-disable no-alert */
/* eslint-disable prefer-destructuring */





// PAGE BEHAVIOUR
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

(() => {
    function dropdownMenu() {
        nav.classList.toggle('display');
    }

    function submitProjectForm(e) {
        e.preventDefault();
        // get title of project from form
        const title = document.querySelector('.project-form input').value;
        if (!title) {
            alert('Input required');
            return;
        }
        if (_content__WEBPACK_IMPORTED_MODULE_0__.default.projectExists(title)) {
            alert('Project already exists!');
            return;
        }
        // add DOM elements
        _content__WEBPACK_IMPORTED_MODULE_0__.default.addProjectLink(title);
        // create new project instance
        _content__WEBPACK_IMPORTED_MODULE_0__.default.createNewProject(title);
        // cancel form display / reset
        _content__WEBPACK_IMPORTED_MODULE_0__.default.cancelForm(projectForm, addProjBtn);
    }

    function submitTaskForm(e) {
        e.preventDefault();
        // get title of task from form
        const title = document.querySelector('.task-form input').value;
        if (!title) {
            alert('Input required');
            return;
        }
        // add DOM elements
        _content__WEBPACK_IMPORTED_MODULE_0__.default.addTaskCell(title);
        // create new task instance
        _content__WEBPACK_IMPORTED_MODULE_0__.default.createNewTask(title);
        // cancel form display / reset
        _content__WEBPACK_IMPORTED_MODULE_0__.default.cancelForm(taskForm, addTaskBtn);
    }

    // event listeners for navBtn and add project btn
    navBtn.addEventListener('click', dropdownMenu);
    // passes function to wait for event before calling toggleForms
    addProjBtn.addEventListener('click', () => _content__WEBPACK_IMPORTED_MODULE_0__.default.toggleForm(projectForm, addProjBtn));
    addTaskBtn.addEventListener('click', () => _content__WEBPACK_IMPORTED_MODULE_0__.default.toggleForm(taskForm, addTaskBtn));
    projectBtnCancel.addEventListener('click', () => _content__WEBPACK_IMPORTED_MODULE_0__.default.cancelForm(projectForm, addProjBtn));
    taskBtnCancel.addEventListener('click', () => _content__WEBPACK_IMPORTED_MODULE_0__.default.cancelForm(taskForm, addTaskBtn));
    addProjBtnSubmit.addEventListener('click', submitProjectForm);
    addTaskBtnSubmit.addEventListener('click', submitTaskForm);
})();

function showProjects(arr) { // check if there are existing projects in storage
    const len = arr.length;
    // go through all stored projects and add them to link
    for (let i = 3; i < len; i += 1) {
        const proj = arr[i];
        // show project on initial load
        _content__WEBPACK_IMPORTED_MODULE_0__.default.addProjectLink(proj.title, proj.dataNum);
    }
}

// check if storage has first element
if (_storage__WEBPACK_IMPORTED_MODULE_3__.default.hasProjects()) {
    const projArr = _storage__WEBPACK_IMPORTED_MODULE_3__.default.getProjects();
    _project__WEBPACK_IMPORTED_MODULE_2__.default.setProjectArray(projArr);
    _project__WEBPACK_IMPORTED_MODULE_2__.default.setCurrentProject(projArr[0]);

    // check if more than default 3 projects in storage
    if (projArr.length > 3) {
        showProjects(projArr);
    }
} else {
    // else create own project and save to storage
    const proj = _project__WEBPACK_IMPORTED_MODULE_2__.default.CreateProject('inbox');
    proj.setDataNum(0);
    _project__WEBPACK_IMPORTED_MODULE_2__.default.setCurrentProject(proj);

    // save to localStorage under projects
    _project__WEBPACK_IMPORTED_MODULE_2__.default.addToArray(proj);

    // create project instances for other tabs - today and this week
    const dayProj = _project__WEBPACK_IMPORTED_MODULE_2__.default.CreateProject('today');
    dayProj.setDataNum(1);
    _project__WEBPACK_IMPORTED_MODULE_2__.default.addToArray(dayProj);

    const weekProj = _project__WEBPACK_IMPORTED_MODULE_2__.default.CreateProject('this week');
    weekProj.setDataNum(2);
    _project__WEBPACK_IMPORTED_MODULE_2__.default.addToArray(weekProj);
}

// check if storage has tasks
if (_storage__WEBPACK_IMPORTED_MODULE_3__.default.hasTasks()) {
    const project = _project__WEBPACK_IMPORTED_MODULE_2__.default.getCurrentProject();
    const taskArray = _storage__WEBPACK_IMPORTED_MODULE_3__.default.getTasks();
    _task__WEBPACK_IMPORTED_MODULE_1__.default.setTaskArray(taskArray);
    // add to currProjArr
    _content__WEBPACK_IMPORTED_MODULE_0__.default.setCurrentTasks(project);
}


/***/ }),

/***/ "./src/modules/content.js":
/*!********************************!*\
  !*** ./src/modules/content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");



const dayTab = document.querySelector('.day');
const weekTab = document.querySelector('.week');
const taskForm = document.querySelector('.task-form');
const listItems = document.querySelectorAll('.tab');

function toggleForm(...args) {
    args.forEach((argument) => argument.classList.toggle('display'));
}

function toggleFormFlex(...args) {
    args.forEach((argument) => argument.classList.toggle('display-flex'));
}

function completeTask(task) {
    const t = task;
    t.completed = true;
    const completeIcon = t.querySelector('.complete-icon');
    completeIcon.style.background = 'rgba(81, 192, 81, 0.253)';
    t.style.color = 'rgb(150, 150, 150)';
    t.style.borderColor = 'rgb(150, 150, 150)';
    t.style.textDecoration = 'line-through';
}

function uncompleteTask(task) {
    const t = task;
    t.completed = false;
    const completeIcon = t.querySelector('.complete-icon');
    completeIcon.style.background = 'inherit';
    t.style.color = 'var(--black)';
    t.style.borderColor = 'var(--grey)';
    t.style.textDecoration = 'none';
}

function displayEdit(task) {
    const t = task;
    // show edit form, display off for task info
    const taskInfo = t.querySelector('.info-wrapper');
    const taskTitle = t.querySelector('.task-name');
    const taskDue = t.querySelector('.date');
    const editTitle = t.querySelector('.edit-task-title');
    const editDue = t.querySelector('.edit-task-due');

    editTitle.value = taskTitle.textContent;
    editDue.value = taskDue.textContent;

    toggleFormFlex(taskInfo, taskForm);
}

function resetEdit(task) {
    const t = task;
    // reset form, toggle displayEdit
    t.querySelector('.task-edit-form').reset();

    displayEdit(t);
}

function submitEdit(task) {
    const t = task;
    const taskTitle = t.querySelector('.task-name');
    const taskDue = t.querySelector('.date');
    const editedTitle = t.querySelector('.edit-task-title');
    const editedDue = t.querySelector('.edit-task-due');

    // update task instance in taskModule
    _task__WEBPACK_IMPORTED_MODULE_0__.default.updateTaskInfo(t.dataset.num, editedTitle.value, editedDue.value);

    // change task title and date according to form
    taskTitle.textContent = editedTitle.value;
    taskDue.textContent = _task__WEBPACK_IMPORTED_MODULE_0__.default.formatDate(editedDue.value);

    resetEdit(task);
}

function showCurrentTasks(arr) {
    arr.forEach((task) => {
        // eslint-disable-next-line no-use-before-define
        addTaskCell(task.title, task.due, task.completed, task.dataNum);
    });
}

function setCurrentTasks(project) {
    const taskArray = _task__WEBPACK_IMPORTED_MODULE_0__.default.getTaskArray();
    const tasks = taskArray.filter((task) => task.project === project.title);
    _task__WEBPACK_IMPORTED_MODULE_0__.default.setCurrentProjTasks(tasks);
    showCurrentTasks(tasks);
}

function updateArray(project) {
    // reload all tasks to current project selected
    if (project.title === 'today') {
        showCurrentTasks(_task__WEBPACK_IMPORTED_MODULE_0__.default.getTasksToday());
        return;
    }
    if (project.title === 'this week') {
        showCurrentTasks(_task__WEBPACK_IMPORTED_MODULE_0__.default.getWeekTasks());
        return;
    }
    setCurrentTasks(project);
}

function removeTaskInstance(task) {
    // pass parameter to check if project is under 'today' or 'week'
    const project = _project__WEBPACK_IMPORTED_MODULE_1__.default.getCurrentProject();
    // remove from task array
    _task__WEBPACK_IMPORTED_MODULE_0__.default.deleteTask(task.dataset.num);
    // check project selected
    updateArray(project);
}

function clearTasks() {
    document.querySelector('.tasks').innerHTML = '';
}

function deleteTask(task) {
    // have to clear tasks and recreate all instances again, as dataNum is spread out
    clearTasks();
    // remove instance and reset list
    removeTaskInstance(task);
}

function createNewTask(taskName) {
    const project = _project__WEBPACK_IMPORTED_MODULE_1__.default.getCurrentProject();
    // create instance of task from factory
    _task__WEBPACK_IMPORTED_MODULE_0__.default.addNewTask(taskName, project);
}

function addTaskCell(taskName, dueDate, completed, dataNum) {
    const tasks = document.querySelector('.tasks');
    // create div element to wrap both task info and edit info
    const newTask = document.createElement('div');
    newTask.className = 'task';
    // dataset num to identify task instance in proj taskList array
    if (dataNum === undefined) {
        newTask.dataset.num = _task__WEBPACK_IMPORTED_MODULE_0__.default.numOfTasks();
    } else {
        newTask.dataset.num = dataNum;
    }

    // create div to hold all taskInfo in flexbox
    const taskInfo = document.createElement('div');
    taskInfo.className = 'info-wrapper display-flex';

    // create icon element - styled to circle - to reflect priority of task
    const completeIcon = document.createElement('div');
    completeIcon.className = 'complete-icon';

    // create span element for task title
    const taskTitle = document.createElement('span');
    taskTitle.className = 'task-name';
    taskTitle.textContent = taskName;

    // create div element to store date - to be changed upon edit
    // create edit form for this too, to select date
    const taskDue = document.createElement('div');
    taskDue.className = 'date';
    taskDue.textContent = dueDate || _task__WEBPACK_IMPORTED_MODULE_0__.default.getDateToday();

    // append edit and delete icons to right side of date div.
    const sideIconsWrapper = document.createElement('div');
    sideIconsWrapper.className = 'side-icons-wrapper';
    const editIcon = document.createElement('span');
    editIcon.className = 'edit-icon';
    editIcon.innerHTML = '<i class="far fa-edit"></i>';
    const deleteIcon = document.createElement('span');
    deleteIcon.className = 'delete-icon';
    deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>';
    sideIconsWrapper.appendChild(editIcon);
    sideIconsWrapper.appendChild(deleteIcon);

    // append elements to task div, then append task div to list div
    // MAIN TASK CELL
    taskInfo.appendChild(completeIcon);
    taskInfo.appendChild(taskTitle);
    taskInfo.appendChild(taskDue);
    taskInfo.appendChild(sideIconsWrapper);
    newTask.appendChild(taskInfo);

    // check if task is complete according to input parameters
    if (completed) {
        completeTask(newTask);
    }

    // create task edit form
    const taskEditForm = document.createElement('form');
    taskEditForm.className = 'task-edit-form'; // to display flex
    // wrapper for input elements
    const editInputs = document.createElement('div');
    editInputs.className = 'edit-inputs';
    // input elements
    const editTitle = document.createElement('input');
    editTitle.className = 'edit-task-title';
    const editDate = document.createElement('input');
    editDate.className = 'edit-task-due';
    editDate.type = 'text';

    // button wrapper
    const confirmBtns = document.createElement('div');
    confirmBtns.className = 'confirm-edit-buttons';
    // buttons
    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'confirm-edit';
    confirmBtn.type = 'button';
    confirmBtn.textContent = 'Save';
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-edit';
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';

    // append to form element
    editInputs.appendChild(editTitle);
    editInputs.appendChild(editDate);
    confirmBtns.appendChild(confirmBtn);
    confirmBtns.appendChild(cancelBtn);
    taskEditForm.appendChild(editInputs);
    taskEditForm.appendChild(confirmBtns);

    // append task-edit-form to task element
    newTask.appendChild(taskEditForm);

    // add to DOM
    tasks.appendChild(newTask);

    // event listener for task completion
    completeIcon.addEventListener('click', () => {
        // change task instance in taskModule
        _task__WEBPACK_IMPORTED_MODULE_0__.default.toggleComplete(newTask.dataset.num);

        // check if task completed already
        if (completed) {
            uncompleteTask(newTask);
        } else {
            completeTask(newTask);
        }
    });

    // event listeners for side icons
    editIcon.addEventListener('click', () => displayEdit(newTask));
    deleteIcon.addEventListener('click', () => deleteTask(newTask));

    // event listeners for edit form
    confirmBtn.addEventListener('click', () => submitEdit(newTask));
    cancelBtn.addEventListener('click', () => resetEdit(newTask));
    // eventListeners for formatting of date
    editDate.addEventListener('focus', (event) => {
        const e = event;
        e.target.type = 'date';
    });
    editDate.addEventListener('blur', (event) => {
        const e = event;
        e.target.type = 'text';
        if (!editDate.value) {
            editDate.value = _task__WEBPACK_IMPORTED_MODULE_0__.default.getDateToday();
        } else {
            const date = editDate.value;
            editDate.value = _task__WEBPACK_IMPORTED_MODULE_0__.default.formatDate(date);
        }
    });
}

function clearContent() {
    const tasks = document.querySelector('.tasks');
    tasks.innerHTML = '';
}

function updateContent() {
    setCurrentTasks(_project__WEBPACK_IMPORTED_MODULE_1__.default.getCurrentProject());
}

function linkSelected() {
    return document.querySelector('.selected');
}

function removePreviousHighlight() {
    const highlighted = document.querySelector('.selected');
    if (!highlighted) return;
    highlighted.classList.remove('selected');
}

function selectLink(link) {
    removePreviousHighlight();
    // switch to selected link
    link.classList.add('selected');
    // change project currProj to selected link's datanum
    _project__WEBPACK_IMPORTED_MODULE_1__.default.changeProject(link.dataset.num);
    // clear previous content of project
    clearContent();
    // update content with currProj's tasks
    updateContent();
}

function sameLink(link) {
    return (linkSelected() === link);
}

function checkLink(e) {
    const link = e.target;
    // check if same link as selected
    if (sameLink(link)) {
        return;
    }

    // if day or week tabs selected
    if (link === dayTab || link === weekTab) {
        removePreviousHighlight();
        clearContent();
        link.classList.add('selected');
        if (link === dayTab) {
            _project__WEBPACK_IMPORTED_MODULE_1__.default.changeProject(1);
            // get tasks that coincide with date today
            const tasks = _task__WEBPACK_IMPORTED_MODULE_0__.default.getTasksToday(_task__WEBPACK_IMPORTED_MODULE_0__.default.getDateToday());
            showCurrentTasks(tasks);
        } else {
            _project__WEBPACK_IMPORTED_MODULE_1__.default.changeProject(2);
            // get tasks that coincide with 7 days ahead, including today
            const tasks = _task__WEBPACK_IMPORTED_MODULE_0__.default.getWeekTasks(_task__WEBPACK_IMPORTED_MODULE_0__.default.getWeek());
            showCurrentTasks(tasks);
        }
        return;
    }
    if (link.classList.contains('fa-trash-alt')) {
        // ignore delete button element
        return;
    }
    selectLink(link);
}

function removeProjectLink(linkToRemove, num) {
    linkToRemove.remove();
    clearContent();
    // update projectArray
    _task__WEBPACK_IMPORTED_MODULE_0__.default.deleteProjectTasks(num);
    _project__WEBPACK_IMPORTED_MODULE_1__.default.deleteProj(num);
}

function updateProjectNums(dataNum) {
    const remainingProjects = document.querySelectorAll('[data-num]');
    // get array from remaining project nodes
    const projectsArr = Array.from(remainingProjects);
    // filter array to only include projects after deleted project
    const projectsToUpdate = projectsArr.filter((project) => project.dataset.num > dataNum);
    projectsToUpdate.forEach((project) => {
        const p = project;
        p.dataset.num -= 1;
    });
}

function deleteProjectLink(link) {
    const dataNum = link.dataset.num;
    // remove html element
    removeProjectLink(link, dataNum);
    updateProjectNums(dataNum);
}

function cancelForm(element1, element2) {
    element1.reset();
    toggleForm(element1, element2);
}

function projectExists(projectName) {
    const projArray = _project__WEBPACK_IMPORTED_MODULE_1__.default.getProjectArray();
    return (projArray.map((project) => project.title).includes(projectName));
}

function createNewProject(projectName) {
    _project__WEBPACK_IMPORTED_MODULE_1__.default.addNewProject(projectName);
}

function addProjectLink(projectName, dataNum) {
    const projects = document.querySelector('.projects');

    // create new list element, set dataset link to project(count);
    const newLink = document.createElement('li');
    newLink.className = 'selection project tab';
    if (dataNum === undefined) {
        newLink.dataset.num = _project__WEBPACK_IMPORTED_MODULE_1__.default.numOfProjects();
    } else {
        newLink.dataset.num = dataNum;
    }

    // create icon
    const leftWrapper = document.createElement('div');
    leftWrapper.className = 'project-info';
    const icon = document.createElement('i');
    icon.className = 'far fa-list-alt';
    // create default project name
    const projTitle = document.createElement('span');
    projTitle.className = 'project-title';
    projTitle.textContent = projectName;
    // create delete button - to be shown only on hover
    const deleteIcon = document.createElement('div');
    deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>';
    deleteIcon.className = 'project-delete';

    // append children to link
    leftWrapper.appendChild(icon);
    leftWrapper.appendChild(projTitle);
    newLink.appendChild(leftWrapper);
    newLink.appendChild(deleteIcon);

    // append link to project
    projects.appendChild(newLink);

    newLink.addEventListener('click', checkLink);
    deleteIcon.addEventListener('click', () => deleteProjectLink(newLink));
}

// event listener for clicks on project tabs
listItems.forEach((item) => item.addEventListener('click', checkLink));

const contentModule = {
    addTaskCell,
    addProjectLink,
    projectExists,
    cancelForm,
    createNewTask,
    createNewProject,
    toggleForm,
    toggleFormFlex,
    checkLink,
    setCurrentTasks,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentModule);


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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");

// FACTORY FUNCTION FOR PROJECTS
const CreateProject = (title) => {
    // initialise project array
    let dataNum;

    // function to set title
    function setTitle(t) {
        this.title = t;
    }

    function setDataNum(num) {
        this.dataNum = num;
    }

    return {
        title, setTitle, dataNum, setDataNum,
    };
};

// on initial load of webpage
let currProj;
let projArray = [];

function setCurrentProject(project) {
    currProj = project;
}

function setProjectArray(arr) {
    projArray = arr;
}

function getCurrentProject() {
    return currProj;
}

function getProjectArray() {
    return projArray;
}

function getProject(num) {
    return projArray[num];
}

function saveArray() {
    // save array to storage - update storage values
    _storage__WEBPACK_IMPORTED_MODULE_0__.default.addProjToStorage(projArray);
}

function updateArray(arr) {
    setProjectArray(arr);
    saveArray();
}

function addToArray(proj) {
    projArray.push(proj);
    updateArray(projArray);
}

// switch projects to selected from UI
function changeProject(dataNum) {
    currProj = projArray[dataNum];
}

function deleteProj(num) {
    // split array into two, removing affecting element
    const firstHalfArray = projArray.slice(0, num);
    const secondHalfArray = projArray.slice(parseInt(num, 10) + 1);
    // update dataNum of remaining tabs
    secondHalfArray.forEach((e) => {
        e.dataNum -= 1;
    });

    // assign array back to original projArray
    const tempArray = firstHalfArray.concat(secondHalfArray);
    updateArray(tempArray);
}

// ADD PROJECT / save to storage
function addNewProject(projectName) {
    // create new instance of project
    const newProject = CreateProject(projectName);
    newProject.dataNum = projArray.length;
    addToArray(newProject);
}

function numOfProjects() {
    return projArray.length;
}

const projectModule = {
    CreateProject,
    addNewProject,
    changeProject,
    numOfProjects,
    getCurrentProject,
    setCurrentProject,
    getProjectArray,
    setProjectArray,
    getProject,
    deleteProj,
    addToArray,
};

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
function getProjects() {
    return JSON.parse(localStorage.getItem(0));
}

// check if localStorage has items
function hasProjects() {
    return localStorage[0];
}

function hasTasks() {
    return localStorage[1];
}

function addProjToStorage(projectArray) {
    localStorage.setItem(0, JSON.stringify(projectArray));
}

function getTasks() {
    return JSON.parse(localStorage.getItem(1));
}

function addTaskToStorage(taskArray) {
    localStorage.setItem(1, JSON.stringify(taskArray));
}

const storage = {
    getProjects,
    hasProjects,
    addProjToStorage,
    getTasks,
    hasTasks,
    addTaskToStorage,
};

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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");


// FACTORY FUNCTION FOR TASKS
const CreateTask = (title, due, completed) => {
    let project;
    let dataNum;
    // change title, flag or date
    function setTitle(t) {
        this.title = t;
    }

    function setDue(date) {
        this.due = date;
    }

    return {
        title, due, project, completed, dataNum, setTitle, setDue,
    };
};

let taskArray = [];
let currentProjTasks = [];

function saveArray() {
    _storage__WEBPACK_IMPORTED_MODULE_0__.default.addTaskToStorage(taskArray);
}

function getTaskArray() {
    return taskArray;
}

function getCurrentProjTasks() {
    return currentProjTasks;
}

function setTaskArray(arr) {
    taskArray = arr;
}

function setCurrentProjTasks(arr) {
    currentProjTasks = arr;
}

function fillSingleNum(num) {
    if (num < 10) {
        return `0${num}`;
    }
    return num;
}

function formatDate(date) {
    return date
        .split('-')
        .reverse()
        .join('/');
}

function getDateToday() {
    const date = new Date();
    return formatDate(`${date.getFullYear()}-${fillSingleNum(date.getMonth() + 1)}-${fillSingleNum(date.getDate())}`);
}

function getWeek() {
    const result = [];
    for (let i = 0; i < 7; i += 1) {
        const d = new Date();
        d.setDate(d.getDate() + i);
        result.push(formatDate(`${d.getFullYear()}-${fillSingleNum(d.getMonth() + 1)}-${fillSingleNum(d.getDate())}`));
    }

    return result;
}

function toggleComplete(num) {
    // set task completed to opposite of itself, identified with dataNum from UI
    taskArray[num].completed = !taskArray[num].completed;
    saveArray();
}

function updateTaskInfo(num, newTitle, newDue) {
    const taskToBeEdited = taskArray[num];
    taskToBeEdited.title = newTitle;
    taskToBeEdited.due = newDue;

    saveArray();
}

function getTasksToday(date = getDateToday()) {
    currentProjTasks = taskArray.filter((task) => task.due === date);
    // show filtered array
    return currentProjTasks;
}

function getWeekTasks(dateRange = getWeek()) {
    let totalTasks = [];
    dateRange.forEach((date) => {
        const dateSelected = date;
        const dayArray = taskArray.filter((task) => task.due === dateSelected);
        totalTasks = totalTasks.concat(dayArray);
    });
    currentProjTasks = totalTasks;
    return currentProjTasks;
}

function numOfTasks() {
    return taskArray.length;
}

function addToArray(task) {
    taskArray.push(task);
    saveArray();
}

function addNewTask(taskName, project) {
    // new instance from task factory
    const newTask = CreateTask(taskName);
    // update dataNum
    newTask.dataNum = taskArray.length;
    newTask.due = getDateToday();
    // update linking project
    newTask.project = project.title;
    // add to task array
    addToArray(newTask);
}

function deleteTask(num) {
    // split array into two, removing affecting element
    const firstHalfArray = taskArray.slice(0, num);
    const secondHalfArray = taskArray.slice(parseInt(num, 10) + 1);
    // update dataNum of remaining tabs
    secondHalfArray.forEach((e) => {
        e.dataNum -= 1;
    });

    // assign array back to original projArray
    taskArray = firstHalfArray.concat(secondHalfArray);
    saveArray();
}

function deleteProjectTasks(num) {
    const projects = _storage__WEBPACK_IMPORTED_MODULE_0__.default.getProjects();
    const project = projects[num];
    const { title } = project;
    taskArray.forEach((task) => {
        if (task.project === title) {
            deleteTask(task.dataNum);
        }
    });
}

const task = {
    CreateTask,
    addNewTask,
    numOfTasks,
    toggleComplete,
    updateTaskInfo,
    deleteTask,
    getTasksToday,
    getWeekTasks,
    getCurrentProjTasks,
    getTaskArray,
    getDateToday,
    getWeek,
    formatDate,
    deleteProjectTasks,
    setTaskArray,
    setCurrentProjTasks,
};

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
/* harmony import */ var _modules_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/content */ "./src/modules/content.js");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/task */ "./src/modules/task.js");
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/storage */ "./src/modules/storage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* eslint-disable no-unused-vars */








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxpREFBaUQsK0JBQStCLGtDQUFrQyxpQ0FBaUMsR0FBRyxpQkFBaUIscUJBQXFCLGdEQUFnRCxnQkFBZ0IsMEJBQTBCLHFDQUFxQyxHQUFHLGlCQUFpQix5QkFBeUIsMEJBQTBCLGtDQUFrQyxvQkFBb0IscUNBQXFDLDBCQUEwQixHQUFHLFFBQVEsZ0JBQWdCLHNCQUFzQixHQUFHLGNBQWMsMEJBQTBCLG1CQUFtQiwwQkFBMEIsR0FBRyxjQUFjLG9CQUFvQixxQ0FBcUMsNEJBQTRCLHdCQUF3QiwwQ0FBMEMsZ0VBQWdFLGlEQUFpRCw0Q0FBNEMsa0RBQWtELDBEQUEwRCxxREFBcUQsK0dBQStHLGNBQWMsb0JBQW9CLEdBQUcsV0FBVyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixHQUFHLGdCQUFnQixtQkFBbUIseUJBQXlCLG9CQUFvQixHQUFHLHVDQUF1Qyx5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LFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVkseUJBQXlCLHVCQUF1QixPQUFPLEtBQUssc0JBQXNCLE9BQU8sS0FB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bkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ3pLcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDOEM7QUFDVjtBQUNVO0FBQ047QUFDTTs7QUFFekIiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1ibGFjazogcmdiKDI5LCAyOSwgMjkpO1xcbiAgICAtLXdoaXRlOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxuICAgIC0tZ3JleTogcmdiKDEyMSwgMTIxLCAxMjEpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbn1cXG5cXG4jaGVhZGVyLWJhciB7XFxuICAgIHBhZGRpbmc6IDE4cHggMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDc1LCA3NSwgNzUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMTksIDIxOSwgMjE5KTtcXG4gICAgY29sb3I6cmdiKDM3LCAzNywgMzcpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggdmFyKC0tZ3JleSk7XFxuICAgIC8qIHByZXZlbnQgaGlnaGxpZ2h0cyAqL1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXFxuICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSwgRWRnZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2VsZWN0aW9uIGksXFxuLmFkZC1wcm9qZWN0LWJ0biBpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uc2VsZWN0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjA0LCAyMDQsIDIwNCk7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjlyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhYiA+ICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcXG4gICAgY29sb3I6cmdiKDE5MCwgMzksIDM5KTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgLnByb2plY3QtZGVsZXRlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxufVxcblxcbi5pbmZvLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZS1pY29uIHtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5zaWRlLWljb25zLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZWRpdC1pY29uLFxcbi5kZWxldGUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLmVkaXQtaWNvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5kZWxldGUtaWNvbjpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMTkwLCAzOSwgMzkpO1xcbn1cXG5cXG4udGFzazpob3ZlciAuZWRpdC1pY29uLFxcbi50YXNrOmhvdmVyIC5kZWxldGUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1lZGl0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmVkaXQtaW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5lZGl0LXRhc2stdGl0bGUge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZWRpdC10YXNrLWR1ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29uZmlybS1lZGl0LWJ1dHRvbnMge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uY29uZmlybS1lZGl0LFxcbi5jYW5jZWwtZWRpdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbn1cXG5cXG4uY29uZmlybS1lZGl0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNDksIDIyOSwgMTQ5LCAwLjkpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0OSwgMjI5LCAxNDksIDAuOSk7XFxufVxcblxcbi5jYW5jZWwtZWRpdDpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0sXFxuLnRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxufVxcblxcbi5mb3JtLWJ0bnMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5mb3JtLWJ0bnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4udGFzay1zdWJtaXQtYnRuOmhvdmVyLFxcbi5wcm9qZWN0LXN1Ym1pdC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMTQ5LCAyMjksIDE0OSwgMC45KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxNDksIDIyOSwgMTQ5LCAwLjkpO1xcbn1cXG5cXG4udGFzay1jYW5jZWwtYnRuOmhvdmVyLFxcbi5wcm9qZWN0LWNhbmNlbC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxuICAgIGNvbG9yOnJnYigyMzUsIDIzNSwgMjM1KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxOTYsIDk0LCA5NCwgMC45KTtcXG59XFxuXFxuLmRpc3BsYXktZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjFweCkge1xcbiAgICBodG1sLFxcbiAgICBib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgfVxcblxcbiAgICAudGFza3Mge1xcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xcbiAgICBoZWFkZXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgei1pbmRleDogNTtcXG4gICAgfVxcblxcbiAgICAubmF2LWJ0biB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtd3JhcCB7XFxuICAgICAgICB3aWR0aDogMzAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgfVxcblxcbiAgICAubmF2LWJhciB7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgLndyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cXG4gICAgfVxcblxcbiAgICAud3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7ICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xcbiAgICB9XFxuXFxuICAgIC53cmFwcGVyIHVsOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZm9ybSB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuY29udGVudC13cmFwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4td3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgbWFyZ2luOiA4MHB4O1xcbiAgICAgICAgZmxleDogMjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcXG4gICAgLnByb2plY3QtZm9ybSAuZm9ybS1idG5zIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFj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QUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQywwQ0FBMEM7QUFDOUM7O0FBRUE7O0lBRUksaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4Qix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJOztRQUVJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osVUFBVTtJQUNkOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsYUFBYTtRQUNiLGVBQWU7UUFDZixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLHdCQUF3QixHQUFHLDBCQUEwQjtRQUNyRCxxQkFBcUIsR0FBRyxZQUFZO0lBQ3hDOztJQUVBO1FBQ0ksYUFBYSxHQUFHLHNCQUFzQjtJQUMxQzs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLE9BQU87UUFDUCxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJsYWNrOiByZ2IoMjksIDI5LCAyOSk7XFxuICAgIC0td2hpdGU6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG4gICAgLS1ncmV5OiByZ2IoMTIxLCAxMjEsIDEyMSk7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxufVxcblxcbiNoZWFkZXItYmFyIHtcXG4gICAgcGFkZGluZzogMThweCAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzUsIDc1LCA3NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIxOSwgMjE5LCAyMTkpO1xcbiAgICBjb2xvcjpyZ2IoMzcsIDM3LCAzNyk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCB2YXIoLS1ncmV5KTtcXG4gICAgLyogcHJldmVudCBoaWdobGlnaHRzICovXFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBFZGdlLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5saXN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zZWxlY3Rpb24gaSxcXG4uYWRkLXByb2plY3QtYnRuIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5zZWxlY3Rpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMDQsIDIwNCwgMjA0KTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuOXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFiID4gKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUge1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGU6aG92ZXIge1xcbiAgICBjb2xvcjpyZ2IoMTkwLCAzOSwgMzkpO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciAucHJvamVjdC1kZWxldGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG59XFxuXFxuLmluZm8td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlLWljb24ge1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFzay1uYW1lIHtcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLnNpZGUtaWNvbnMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5lZGl0LWljb24sXFxuLmRlbGV0ZS1pY29uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4uZWRpdC1pY29uOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLmRlbGV0ZS1pY29uOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigxOTAsIDM5LCAzOSk7XFxufVxcblxcbi50YXNrOmhvdmVyIC5lZGl0LWljb24sXFxuLnRhc2s6aG92ZXIgLmRlbGV0ZS1pY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWVkaXQtZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZWRpdC1pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmVkaXQtdGFzay10aXRsZSB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5lZGl0LXRhc2stZHVlIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb25maXJtLWVkaXQtYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5jb25maXJtLWVkaXQsXFxuLmNhbmNlbC1lZGl0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxufVxcblxcbi5jb25maXJtLWVkaXQ6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0OSwgMjI5LCAxNDksIDAuOSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTQ5LCAyMjksIDE0OSwgMC45KTtcXG59XFxuXFxuLmNhbmNlbC1lZGl0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTYsIDk0LCA5NCwgMC45KTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDk0LCA5NCwgMC45KTtcXG59XFxuXFxuLnByb2plY3QtZm9ybSxcXG4udGFzay1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0taW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG59XFxuXFxuLmZvcm0tYnRucyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmZvcm0tYnRucyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi50YXNrLXN1Ym1pdC1idG46aG92ZXIsXFxuLnByb2plY3Qtc3VibWl0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgxNDksIDIyOSwgMTQ5LCAwLjkpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE0OSwgMjI5LCAxNDksIDAuOSk7XFxufVxcblxcbi50YXNrLWNhbmNlbC1idG46aG92ZXIsXFxuLnByb2plY3QtY2FuY2VsLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgxOTYsIDk0LCA5NCwgMC45KTtcXG4gICAgY29sb3I6cmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE5NiwgOTQsIDk0LCAwLjkpO1xcbn1cXG5cXG4uZGlzcGxheS1mbGV4IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMXB4KSB7XFxuICAgIGh0bWwsXFxuICAgIGJvZHkge1xcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC50YXNrcyB7XFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICAgIGhlYWRlciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICB6LWluZGV4OiA1O1xcbiAgICB9XFxuXFxuICAgIC5uYXYtYnRuIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm5hdi13cmFwIHtcXG4gICAgICAgIHdpZHRoOiAzMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5uYXYtYmFyIHtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgICAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAud3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xcbiAgICB9XFxuXFxuICAgIC53cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7IFxcbiAgICAgICAgZGlzcGxheTogbm9uZTsgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXFxuICAgIH1cXG5cXG4gICAgLndyYXBwZXIgdWw6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1mb3JtIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5jb250ZW50LXdyYXBwZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAubWFpbi13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICBtYXJnaW46IDgwcHg7XFxuICAgICAgICBmbGV4OiAyO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzBweCkge1xcbiAgICAucHJvamVjdC1mb3JtIC5mb3JtLWJ0bnMge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1kZXN0cnVjdHVyaW5nICovXG5pbXBvcnQgY29udGVudE1vZHVsZSBmcm9tICcuL2NvbnRlbnQnO1xuaW1wb3J0IHRhc2tNb2R1bGUgZnJvbSAnLi90YXNrJztcbmltcG9ydCBwcm9qZWN0TW9kdWxlIGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgc3RvcmFnZU1vZHVsZSBmcm9tICcuL3N0b3JhZ2UnO1xuXG4vLyBQQUdFIEJFSEFWSU9VUlxuY29uc3QgbmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1idG4nKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYmFyJyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgYWRkUHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1idG4nKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG5jb25zdCBhZGRQcm9qQnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc3VibWl0LWJ0bicpO1xuY29uc3QgYWRkVGFza0J0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXN1Ym1pdC1idG4nKTtcbmNvbnN0IHByb2plY3RCdG5DYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYW5jZWwtYnRuJyk7XG5jb25zdCB0YXNrQnRuQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY2FuY2VsLWJ0bicpO1xuXG4oKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGRyb3Bkb3duTWVudSgpIHtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2Rpc3BsYXknKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJtaXRQcm9qZWN0Rm9ybShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gZ2V0IHRpdGxlIG9mIHByb2plY3QgZnJvbSBmb3JtXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybSBpbnB1dCcpLnZhbHVlO1xuICAgICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgICAgICBhbGVydCgnSW5wdXQgcmVxdWlyZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGVudE1vZHVsZS5wcm9qZWN0RXhpc3RzKHRpdGxlKSkge1xuICAgICAgICAgICAgYWxlcnQoJ1Byb2plY3QgYWxyZWFkeSBleGlzdHMhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIERPTSBlbGVtZW50c1xuICAgICAgICBjb250ZW50TW9kdWxlLmFkZFByb2plY3RMaW5rKHRpdGxlKTtcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBwcm9qZWN0IGluc3RhbmNlXG4gICAgICAgIGNvbnRlbnRNb2R1bGUuY3JlYXRlTmV3UHJvamVjdCh0aXRsZSk7XG4gICAgICAgIC8vIGNhbmNlbCBmb3JtIGRpc3BsYXkgLyByZXNldFxuICAgICAgICBjb250ZW50TW9kdWxlLmNhbmNlbEZvcm0ocHJvamVjdEZvcm0sIGFkZFByb2pCdG4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1Ym1pdFRhc2tGb3JtKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBnZXQgdGl0bGUgb2YgdGFzayBmcm9tIGZvcm1cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtIGlucHV0JykudmFsdWU7XG4gICAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdJbnB1dCByZXF1aXJlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCBET00gZWxlbWVudHNcbiAgICAgICAgY29udGVudE1vZHVsZS5hZGRUYXNrQ2VsbCh0aXRsZSk7XG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgdGFzayBpbnN0YW5jZVxuICAgICAgICBjb250ZW50TW9kdWxlLmNyZWF0ZU5ld1Rhc2sodGl0bGUpO1xuICAgICAgICAvLyBjYW5jZWwgZm9ybSBkaXNwbGF5IC8gcmVzZXRcbiAgICAgICAgY29udGVudE1vZHVsZS5jYW5jZWxGb3JtKHRhc2tGb3JtLCBhZGRUYXNrQnRuKTtcbiAgICB9XG5cbiAgICAvLyBldmVudCBsaXN0ZW5lcnMgZm9yIG5hdkJ0biBhbmQgYWRkIHByb2plY3QgYnRuXG4gICAgbmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZHJvcGRvd25NZW51KTtcbiAgICAvLyBwYXNzZXMgZnVuY3Rpb24gdG8gd2FpdCBmb3IgZXZlbnQgYmVmb3JlIGNhbGxpbmcgdG9nZ2xlRm9ybXNcbiAgICBhZGRQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY29udGVudE1vZHVsZS50b2dnbGVGb3JtKHByb2plY3RGb3JtLCBhZGRQcm9qQnRuKSk7XG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNvbnRlbnRNb2R1bGUudG9nZ2xlRm9ybSh0YXNrRm9ybSwgYWRkVGFza0J0bikpO1xuICAgIHByb2plY3RCdG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjb250ZW50TW9kdWxlLmNhbmNlbEZvcm0ocHJvamVjdEZvcm0sIGFkZFByb2pCdG4pKTtcbiAgICB0YXNrQnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY29udGVudE1vZHVsZS5jYW5jZWxGb3JtKHRhc2tGb3JtLCBhZGRUYXNrQnRuKSk7XG4gICAgYWRkUHJvakJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFByb2plY3RGb3JtKTtcbiAgICBhZGRUYXNrQnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0VGFza0Zvcm0pO1xufSkoKTtcblxuZnVuY3Rpb24gc2hvd1Byb2plY3RzKGFycikgeyAvLyBjaGVjayBpZiB0aGVyZSBhcmUgZXhpc3RpbmcgcHJvamVjdHMgaW4gc3RvcmFnZVxuICAgIGNvbnN0IGxlbiA9IGFyci5sZW5ndGg7XG4gICAgLy8gZ28gdGhyb3VnaCBhbGwgc3RvcmVkIHByb2plY3RzIGFuZCBhZGQgdGhlbSB0byBsaW5rXG4gICAgZm9yIChsZXQgaSA9IDM7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBwcm9qID0gYXJyW2ldO1xuICAgICAgICAvLyBzaG93IHByb2plY3Qgb24gaW5pdGlhbCBsb2FkXG4gICAgICAgIGNvbnRlbnRNb2R1bGUuYWRkUHJvamVjdExpbmsocHJvai50aXRsZSwgcHJvai5kYXRhTnVtKTtcbiAgICB9XG59XG5cbi8vIGNoZWNrIGlmIHN0b3JhZ2UgaGFzIGZpcnN0IGVsZW1lbnRcbmlmIChzdG9yYWdlTW9kdWxlLmhhc1Byb2plY3RzKCkpIHtcbiAgICBjb25zdCBwcm9qQXJyID0gc3RvcmFnZU1vZHVsZS5nZXRQcm9qZWN0cygpO1xuICAgIHByb2plY3RNb2R1bGUuc2V0UHJvamVjdEFycmF5KHByb2pBcnIpO1xuICAgIHByb2plY3RNb2R1bGUuc2V0Q3VycmVudFByb2plY3QocHJvakFyclswXSk7XG5cbiAgICAvLyBjaGVjayBpZiBtb3JlIHRoYW4gZGVmYXVsdCAzIHByb2plY3RzIGluIHN0b3JhZ2VcbiAgICBpZiAocHJvakFyci5sZW5ndGggPiAzKSB7XG4gICAgICAgIHNob3dQcm9qZWN0cyhwcm9qQXJyKTtcbiAgICB9XG59IGVsc2Uge1xuICAgIC8vIGVsc2UgY3JlYXRlIG93biBwcm9qZWN0IGFuZCBzYXZlIHRvIHN0b3JhZ2VcbiAgICBjb25zdCBwcm9qID0gcHJvamVjdE1vZHVsZS5DcmVhdGVQcm9qZWN0KCdpbmJveCcpO1xuICAgIHByb2ouc2V0RGF0YU51bSgwKTtcbiAgICBwcm9qZWN0TW9kdWxlLnNldEN1cnJlbnRQcm9qZWN0KHByb2opO1xuXG4gICAgLy8gc2F2ZSB0byBsb2NhbFN0b3JhZ2UgdW5kZXIgcHJvamVjdHNcbiAgICBwcm9qZWN0TW9kdWxlLmFkZFRvQXJyYXkocHJvaik7XG5cbiAgICAvLyBjcmVhdGUgcHJvamVjdCBpbnN0YW5jZXMgZm9yIG90aGVyIHRhYnMgLSB0b2RheSBhbmQgdGhpcyB3ZWVrXG4gICAgY29uc3QgZGF5UHJvaiA9IHByb2plY3RNb2R1bGUuQ3JlYXRlUHJvamVjdCgndG9kYXknKTtcbiAgICBkYXlQcm9qLnNldERhdGFOdW0oMSk7XG4gICAgcHJvamVjdE1vZHVsZS5hZGRUb0FycmF5KGRheVByb2opO1xuXG4gICAgY29uc3Qgd2Vla1Byb2ogPSBwcm9qZWN0TW9kdWxlLkNyZWF0ZVByb2plY3QoJ3RoaXMgd2VlaycpO1xuICAgIHdlZWtQcm9qLnNldERhdGFOdW0oMik7XG4gICAgcHJvamVjdE1vZHVsZS5hZGRUb0FycmF5KHdlZWtQcm9qKTtcbn1cblxuLy8gY2hlY2sgaWYgc3RvcmFnZSBoYXMgdGFza3NcbmlmIChzdG9yYWdlTW9kdWxlLmhhc1Rhc2tzKCkpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1vZHVsZS5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGNvbnN0IHRhc2tBcnJheSA9IHN0b3JhZ2VNb2R1bGUuZ2V0VGFza3MoKTtcbiAgICB0YXNrTW9kdWxlLnNldFRhc2tBcnJheSh0YXNrQXJyYXkpO1xuICAgIC8vIGFkZCB0byBjdXJyUHJvakFyclxuICAgIGNvbnRlbnRNb2R1bGUuc2V0Q3VycmVudFRhc2tzKHByb2plY3QpO1xufVxuIiwiaW1wb3J0IHRhc2tNb2R1bGUgZnJvbSAnLi90YXNrJztcbmltcG9ydCBwcm9qZWN0TW9kdWxlIGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IGRheVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXknKTtcbmNvbnN0IHdlZWtUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VlaycpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG5jb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG5cbmZ1bmN0aW9uIHRvZ2dsZUZvcm0oLi4uYXJncykge1xuICAgIGFyZ3MuZm9yRWFjaCgoYXJndW1lbnQpID0+IGFyZ3VtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2Rpc3BsYXknKSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUZvcm1GbGV4KC4uLmFyZ3MpIHtcbiAgICBhcmdzLmZvckVhY2goKGFyZ3VtZW50KSA9PiBhcmd1bWVudC5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5LWZsZXgnKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlVGFzayh0YXNrKSB7XG4gICAgY29uc3QgdCA9IHRhc2s7XG4gICAgdC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIGNvbnN0IGNvbXBsZXRlSWNvbiA9IHQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWljb24nKTtcbiAgICBjb21wbGV0ZUljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDgxLCAxOTIsIDgxLCAwLjI1MyknO1xuICAgIHQuc3R5bGUuY29sb3IgPSAncmdiKDE1MCwgMTUwLCAxNTApJztcbiAgICB0LnN0eWxlLmJvcmRlckNvbG9yID0gJ3JnYigxNTAsIDE1MCwgMTUwKSc7XG4gICAgdC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xufVxuXG5mdW5jdGlvbiB1bmNvbXBsZXRlVGFzayh0YXNrKSB7XG4gICAgY29uc3QgdCA9IHRhc2s7XG4gICAgdC5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBjb25zdCBjb21wbGV0ZUljb24gPSB0LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZS1pY29uJyk7XG4gICAgY29tcGxldGVJY29uLnN0eWxlLmJhY2tncm91bmQgPSAnaW5oZXJpdCc7XG4gICAgdC5zdHlsZS5jb2xvciA9ICd2YXIoLS1ibGFjayknO1xuICAgIHQuc3R5bGUuYm9yZGVyQ29sb3IgPSAndmFyKC0tZ3JleSknO1xuICAgIHQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFZGl0KHRhc2spIHtcbiAgICBjb25zdCB0ID0gdGFzaztcbiAgICAvLyBzaG93IGVkaXQgZm9ybSwgZGlzcGxheSBvZmYgZm9yIHRhc2sgaW5mb1xuICAgIGNvbnN0IHRhc2tJbmZvID0gdC5xdWVyeVNlbGVjdG9yKCcuaW5mby13cmFwcGVyJyk7XG4gICAgY29uc3QgdGFza1RpdGxlID0gdC5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJyk7XG4gICAgY29uc3QgdGFza0R1ZSA9IHQucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbiAgICBjb25zdCBlZGl0VGl0bGUgPSB0LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stdGl0bGUnKTtcbiAgICBjb25zdCBlZGl0RHVlID0gdC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWR1ZScpO1xuXG4gICAgZWRpdFRpdGxlLnZhbHVlID0gdGFza1RpdGxlLnRleHRDb250ZW50O1xuICAgIGVkaXREdWUudmFsdWUgPSB0YXNrRHVlLnRleHRDb250ZW50O1xuXG4gICAgdG9nZ2xlRm9ybUZsZXgodGFza0luZm8sIHRhc2tGb3JtKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRFZGl0KHRhc2spIHtcbiAgICBjb25zdCB0ID0gdGFzaztcbiAgICAvLyByZXNldCBmb3JtLCB0b2dnbGUgZGlzcGxheUVkaXRcbiAgICB0LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXQtZm9ybScpLnJlc2V0KCk7XG5cbiAgICBkaXNwbGF5RWRpdCh0KTtcbn1cblxuZnVuY3Rpb24gc3VibWl0RWRpdCh0YXNrKSB7XG4gICAgY29uc3QgdCA9IHRhc2s7XG4gICAgY29uc3QgdGFza1RpdGxlID0gdC5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJyk7XG4gICAgY29uc3QgdGFza0R1ZSA9IHQucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbiAgICBjb25zdCBlZGl0ZWRUaXRsZSA9IHQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay10aXRsZScpO1xuICAgIGNvbnN0IGVkaXRlZER1ZSA9IHQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1kdWUnKTtcblxuICAgIC8vIHVwZGF0ZSB0YXNrIGluc3RhbmNlIGluIHRhc2tNb2R1bGVcbiAgICB0YXNrTW9kdWxlLnVwZGF0ZVRhc2tJbmZvKHQuZGF0YXNldC5udW0sIGVkaXRlZFRpdGxlLnZhbHVlLCBlZGl0ZWREdWUudmFsdWUpO1xuXG4gICAgLy8gY2hhbmdlIHRhc2sgdGl0bGUgYW5kIGRhdGUgYWNjb3JkaW5nIHRvIGZvcm1cbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBlZGl0ZWRUaXRsZS52YWx1ZTtcbiAgICB0YXNrRHVlLnRleHRDb250ZW50ID0gdGFza01vZHVsZS5mb3JtYXREYXRlKGVkaXRlZER1ZS52YWx1ZSk7XG5cbiAgICByZXNldEVkaXQodGFzayk7XG59XG5cbmZ1bmN0aW9uIHNob3dDdXJyZW50VGFza3MoYXJyKSB7XG4gICAgYXJyLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgIGFkZFRhc2tDZWxsKHRhc2sudGl0bGUsIHRhc2suZHVlLCB0YXNrLmNvbXBsZXRlZCwgdGFzay5kYXRhTnVtKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudFRhc2tzKHByb2plY3QpIHtcbiAgICBjb25zdCB0YXNrQXJyYXkgPSB0YXNrTW9kdWxlLmdldFRhc2tBcnJheSgpO1xuICAgIGNvbnN0IHRhc2tzID0gdGFza0FycmF5LmZpbHRlcigodGFzaykgPT4gdGFzay5wcm9qZWN0ID09PSBwcm9qZWN0LnRpdGxlKTtcbiAgICB0YXNrTW9kdWxlLnNldEN1cnJlbnRQcm9qVGFza3ModGFza3MpO1xuICAgIHNob3dDdXJyZW50VGFza3ModGFza3MpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBcnJheShwcm9qZWN0KSB7XG4gICAgLy8gcmVsb2FkIGFsbCB0YXNrcyB0byBjdXJyZW50IHByb2plY3Qgc2VsZWN0ZWRcbiAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gJ3RvZGF5Jykge1xuICAgICAgICBzaG93Q3VycmVudFRhc2tzKHRhc2tNb2R1bGUuZ2V0VGFza3NUb2RheSgpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gJ3RoaXMgd2VlaycpIHtcbiAgICAgICAgc2hvd0N1cnJlbnRUYXNrcyh0YXNrTW9kdWxlLmdldFdlZWtUYXNrcygpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRDdXJyZW50VGFza3MocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tJbnN0YW5jZSh0YXNrKSB7XG4gICAgLy8gcGFzcyBwYXJhbWV0ZXIgdG8gY2hlY2sgaWYgcHJvamVjdCBpcyB1bmRlciAndG9kYXknIG9yICd3ZWVrJ1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TW9kdWxlLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgLy8gcmVtb3ZlIGZyb20gdGFzayBhcnJheVxuICAgIHRhc2tNb2R1bGUuZGVsZXRlVGFzayh0YXNrLmRhdGFzZXQubnVtKTtcbiAgICAvLyBjaGVjayBwcm9qZWN0IHNlbGVjdGVkXG4gICAgdXBkYXRlQXJyYXkocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuaW5uZXJIVE1MID0gJyc7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFzaykge1xuICAgIC8vIGhhdmUgdG8gY2xlYXIgdGFza3MgYW5kIHJlY3JlYXRlIGFsbCBpbnN0YW5jZXMgYWdhaW4sIGFzIGRhdGFOdW0gaXMgc3ByZWFkIG91dFxuICAgIGNsZWFyVGFza3MoKTtcbiAgICAvLyByZW1vdmUgaW5zdGFuY2UgYW5kIHJlc2V0IGxpc3RcbiAgICByZW1vdmVUYXNrSW5zdGFuY2UodGFzayk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2sodGFza05hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1vZHVsZS5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIC8vIGNyZWF0ZSBpbnN0YW5jZSBvZiB0YXNrIGZyb20gZmFjdG9yeVxuICAgIHRhc2tNb2R1bGUuYWRkTmV3VGFzayh0YXNrTmFtZSwgcHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tDZWxsKHRhc2tOYW1lLCBkdWVEYXRlLCBjb21wbGV0ZWQsIGRhdGFOdW0pIHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICAgIC8vIGNyZWF0ZSBkaXYgZWxlbWVudCB0byB3cmFwIGJvdGggdGFzayBpbmZvIGFuZCBlZGl0IGluZm9cbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFzay5jbGFzc05hbWUgPSAndGFzayc7XG4gICAgLy8gZGF0YXNldCBudW0gdG8gaWRlbnRpZnkgdGFzayBpbnN0YW5jZSBpbiBwcm9qIHRhc2tMaXN0IGFycmF5XG4gICAgaWYgKGRhdGFOdW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXdUYXNrLmRhdGFzZXQubnVtID0gdGFza01vZHVsZS5udW1PZlRhc2tzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3VGFzay5kYXRhc2V0Lm51bSA9IGRhdGFOdW07XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIGRpdiB0byBob2xkIGFsbCB0YXNrSW5mbyBpbiBmbGV4Ym94XG4gICAgY29uc3QgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrSW5mby5jbGFzc05hbWUgPSAnaW5mby13cmFwcGVyIGRpc3BsYXktZmxleCc7XG5cbiAgICAvLyBjcmVhdGUgaWNvbiBlbGVtZW50IC0gc3R5bGVkIHRvIGNpcmNsZSAtIHRvIHJlZmxlY3QgcHJpb3JpdHkgb2YgdGFza1xuICAgIGNvbnN0IGNvbXBsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbXBsZXRlSWNvbi5jbGFzc05hbWUgPSAnY29tcGxldGUtaWNvbic7XG5cbiAgICAvLyBjcmVhdGUgc3BhbiBlbGVtZW50IGZvciB0YXNrIHRpdGxlXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRhc2tUaXRsZS5jbGFzc05hbWUgPSAndGFzay1uYW1lJztcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrTmFtZTtcblxuICAgIC8vIGNyZWF0ZSBkaXYgZWxlbWVudCB0byBzdG9yZSBkYXRlIC0gdG8gYmUgY2hhbmdlZCB1cG9uIGVkaXRcbiAgICAvLyBjcmVhdGUgZWRpdCBmb3JtIGZvciB0aGlzIHRvbywgdG8gc2VsZWN0IGRhdGVcbiAgICBjb25zdCB0YXNrRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0R1ZS5jbGFzc05hbWUgPSAnZGF0ZSc7XG4gICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IGR1ZURhdGUgfHwgdGFza01vZHVsZS5nZXREYXRlVG9kYXkoKTtcblxuICAgIC8vIGFwcGVuZCBlZGl0IGFuZCBkZWxldGUgaWNvbnMgdG8gcmlnaHQgc2lkZSBvZiBkYXRlIGRpdi5cbiAgICBjb25zdCBzaWRlSWNvbnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZUljb25zV3JhcHBlci5jbGFzc05hbWUgPSAnc2lkZS1pY29ucy13cmFwcGVyJztcbiAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBlZGl0SWNvbi5jbGFzc05hbWUgPSAnZWRpdC1pY29uJztcbiAgICBlZGl0SWNvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtZWRpdFwiPjwvaT4nO1xuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSAnZGVsZXRlLWljb24nO1xuICAgIGRlbGV0ZUljb24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdFwiPjwvaT4nO1xuICAgIHNpZGVJY29uc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgIHNpZGVJY29uc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgICAvLyBhcHBlbmQgZWxlbWVudHMgdG8gdGFzayBkaXYsIHRoZW4gYXBwZW5kIHRhc2sgZGl2IHRvIGxpc3QgZGl2XG4gICAgLy8gTUFJTiBUQVNLIENFTExcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChjb21wbGV0ZUljb24pO1xuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0R1ZSk7XG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQoc2lkZUljb25zV3JhcHBlcik7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XG5cbiAgICAvLyBjaGVjayBpZiB0YXNrIGlzIGNvbXBsZXRlIGFjY29yZGluZyB0byBpbnB1dCBwYXJhbWV0ZXJzXG4gICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICBjb21wbGV0ZVRhc2sobmV3VGFzayk7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIHRhc2sgZWRpdCBmb3JtXG4gICAgY29uc3QgdGFza0VkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRhc2tFZGl0Rm9ybS5jbGFzc05hbWUgPSAndGFzay1lZGl0LWZvcm0nOyAvLyB0byBkaXNwbGF5IGZsZXhcbiAgICAvLyB3cmFwcGVyIGZvciBpbnB1dCBlbGVtZW50c1xuICAgIGNvbnN0IGVkaXRJbnB1dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0SW5wdXRzLmNsYXNzTmFtZSA9ICdlZGl0LWlucHV0cyc7XG4gICAgLy8gaW5wdXQgZWxlbWVudHNcbiAgICBjb25zdCBlZGl0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVkaXRUaXRsZS5jbGFzc05hbWUgPSAnZWRpdC10YXNrLXRpdGxlJztcbiAgICBjb25zdCBlZGl0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZWRpdERhdGUuY2xhc3NOYW1lID0gJ2VkaXQtdGFzay1kdWUnO1xuICAgIGVkaXREYXRlLnR5cGUgPSAndGV4dCc7XG5cbiAgICAvLyBidXR0b24gd3JhcHBlclxuICAgIGNvbnN0IGNvbmZpcm1CdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uZmlybUJ0bnMuY2xhc3NOYW1lID0gJ2NvbmZpcm0tZWRpdC1idXR0b25zJztcbiAgICAvLyBidXR0b25zXG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbmZpcm1CdG4uY2xhc3NOYW1lID0gJ2NvbmZpcm0tZWRpdCc7XG4gICAgY29uZmlybUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gJ2NhbmNlbC1lZGl0JztcbiAgICBjYW5jZWxCdG4udHlwZSA9ICdidXR0b24nO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gICAgLy8gYXBwZW5kIHRvIGZvcm0gZWxlbWVudFxuICAgIGVkaXRJbnB1dHMuYXBwZW5kQ2hpbGQoZWRpdFRpdGxlKTtcbiAgICBlZGl0SW5wdXRzLmFwcGVuZENoaWxkKGVkaXREYXRlKTtcbiAgICBjb25maXJtQnRucy5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcbiAgICBjb25maXJtQnRucy5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICAgIHRhc2tFZGl0Rm9ybS5hcHBlbmRDaGlsZChlZGl0SW5wdXRzKTtcbiAgICB0YXNrRWRpdEZvcm0uYXBwZW5kQ2hpbGQoY29uZmlybUJ0bnMpO1xuXG4gICAgLy8gYXBwZW5kIHRhc2stZWRpdC1mb3JtIHRvIHRhc2sgZWxlbWVudFxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza0VkaXRGb3JtKTtcblxuICAgIC8vIGFkZCB0byBET01cbiAgICB0YXNrcy5hcHBlbmRDaGlsZChuZXdUYXNrKTtcblxuICAgIC8vIGV2ZW50IGxpc3RlbmVyIGZvciB0YXNrIGNvbXBsZXRpb25cbiAgICBjb21wbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIGNoYW5nZSB0YXNrIGluc3RhbmNlIGluIHRhc2tNb2R1bGVcbiAgICAgICAgdGFza01vZHVsZS50b2dnbGVDb21wbGV0ZShuZXdUYXNrLmRhdGFzZXQubnVtKTtcblxuICAgICAgICAvLyBjaGVjayBpZiB0YXNrIGNvbXBsZXRlZCBhbHJlYWR5XG4gICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHVuY29tcGxldGVUYXNrKG5ld1Rhc2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcGxldGVUYXNrKG5ld1Rhc2spO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBldmVudCBsaXN0ZW5lcnMgZm9yIHNpZGUgaWNvbnNcbiAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BsYXlFZGl0KG5ld1Rhc2spKTtcbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGVsZXRlVGFzayhuZXdUYXNrKSk7XG5cbiAgICAvLyBldmVudCBsaXN0ZW5lcnMgZm9yIGVkaXQgZm9ybVxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzdWJtaXRFZGl0KG5ld1Rhc2spKTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZXNldEVkaXQobmV3VGFzaykpO1xuICAgIC8vIGV2ZW50TGlzdGVuZXJzIGZvciBmb3JtYXR0aW5nIG9mIGRhdGVcbiAgICBlZGl0RGF0ZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBlID0gZXZlbnQ7XG4gICAgICAgIGUudGFyZ2V0LnR5cGUgPSAnZGF0ZSc7XG4gICAgfSk7XG4gICAgZWRpdERhdGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBlID0gZXZlbnQ7XG4gICAgICAgIGUudGFyZ2V0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIGlmICghZWRpdERhdGUudmFsdWUpIHtcbiAgICAgICAgICAgIGVkaXREYXRlLnZhbHVlID0gdGFza01vZHVsZS5nZXREYXRlVG9kYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBlZGl0RGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIGVkaXREYXRlLnZhbHVlID0gdGFza01vZHVsZS5mb3JtYXREYXRlKGRhdGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICAgIHRhc2tzLmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb250ZW50KCkge1xuICAgIHNldEN1cnJlbnRUYXNrcyhwcm9qZWN0TW9kdWxlLmdldEN1cnJlbnRQcm9qZWN0KCkpO1xufVxuXG5mdW5jdGlvbiBsaW5rU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcmV2aW91c0hpZ2hsaWdodCgpIHtcbiAgICBjb25zdCBoaWdobGlnaHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuICAgIGlmICghaGlnaGxpZ2h0ZWQpIHJldHVybjtcbiAgICBoaWdobGlnaHRlZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RMaW5rKGxpbmspIHtcbiAgICByZW1vdmVQcmV2aW91c0hpZ2hsaWdodCgpO1xuICAgIC8vIHN3aXRjaCB0byBzZWxlY3RlZCBsaW5rXG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIC8vIGNoYW5nZSBwcm9qZWN0IGN1cnJQcm9qIHRvIHNlbGVjdGVkIGxpbmsncyBkYXRhbnVtXG4gICAgcHJvamVjdE1vZHVsZS5jaGFuZ2VQcm9qZWN0KGxpbmsuZGF0YXNldC5udW0pO1xuICAgIC8vIGNsZWFyIHByZXZpb3VzIGNvbnRlbnQgb2YgcHJvamVjdFxuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIC8vIHVwZGF0ZSBjb250ZW50IHdpdGggY3VyclByb2oncyB0YXNrc1xuICAgIHVwZGF0ZUNvbnRlbnQoKTtcbn1cblxuZnVuY3Rpb24gc2FtZUxpbmsobGluaykge1xuICAgIHJldHVybiAobGlua1NlbGVjdGVkKCkgPT09IGxpbmspO1xufVxuXG5mdW5jdGlvbiBjaGVja0xpbmsoZSkge1xuICAgIGNvbnN0IGxpbmsgPSBlLnRhcmdldDtcbiAgICAvLyBjaGVjayBpZiBzYW1lIGxpbmsgYXMgc2VsZWN0ZWRcbiAgICBpZiAoc2FtZUxpbmsobGluaykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIGRheSBvciB3ZWVrIHRhYnMgc2VsZWN0ZWRcbiAgICBpZiAobGluayA9PT0gZGF5VGFiIHx8IGxpbmsgPT09IHdlZWtUYWIpIHtcbiAgICAgICAgcmVtb3ZlUHJldmlvdXNIaWdobGlnaHQoKTtcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgaWYgKGxpbmsgPT09IGRheVRhYikge1xuICAgICAgICAgICAgcHJvamVjdE1vZHVsZS5jaGFuZ2VQcm9qZWN0KDEpO1xuICAgICAgICAgICAgLy8gZ2V0IHRhc2tzIHRoYXQgY29pbmNpZGUgd2l0aCBkYXRlIHRvZGF5XG4gICAgICAgICAgICBjb25zdCB0YXNrcyA9IHRhc2tNb2R1bGUuZ2V0VGFza3NUb2RheSh0YXNrTW9kdWxlLmdldERhdGVUb2RheSgpKTtcbiAgICAgICAgICAgIHNob3dDdXJyZW50VGFza3ModGFza3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdE1vZHVsZS5jaGFuZ2VQcm9qZWN0KDIpO1xuICAgICAgICAgICAgLy8gZ2V0IHRhc2tzIHRoYXQgY29pbmNpZGUgd2l0aCA3IGRheXMgYWhlYWQsIGluY2x1ZGluZyB0b2RheVxuICAgICAgICAgICAgY29uc3QgdGFza3MgPSB0YXNrTW9kdWxlLmdldFdlZWtUYXNrcyh0YXNrTW9kdWxlLmdldFdlZWsoKSk7XG4gICAgICAgICAgICBzaG93Q3VycmVudFRhc2tzKHRhc2tzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucygnZmEtdHJhc2gtYWx0JykpIHtcbiAgICAgICAgLy8gaWdub3JlIGRlbGV0ZSBidXR0b24gZWxlbWVudFxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHNlbGVjdExpbmsobGluayk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RMaW5rKGxpbmtUb1JlbW92ZSwgbnVtKSB7XG4gICAgbGlua1RvUmVtb3ZlLnJlbW92ZSgpO1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIC8vIHVwZGF0ZSBwcm9qZWN0QXJyYXlcbiAgICB0YXNrTW9kdWxlLmRlbGV0ZVByb2plY3RUYXNrcyhudW0pO1xuICAgIHByb2plY3RNb2R1bGUuZGVsZXRlUHJvaihudW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0TnVtcyhkYXRhTnVtKSB7XG4gICAgY29uc3QgcmVtYWluaW5nUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1udW1dJyk7XG4gICAgLy8gZ2V0IGFycmF5IGZyb20gcmVtYWluaW5nIHByb2plY3Qgbm9kZXNcbiAgICBjb25zdCBwcm9qZWN0c0FyciA9IEFycmF5LmZyb20ocmVtYWluaW5nUHJvamVjdHMpO1xuICAgIC8vIGZpbHRlciBhcnJheSB0byBvbmx5IGluY2x1ZGUgcHJvamVjdHMgYWZ0ZXIgZGVsZXRlZCBwcm9qZWN0XG4gICAgY29uc3QgcHJvamVjdHNUb1VwZGF0ZSA9IHByb2plY3RzQXJyLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5kYXRhc2V0Lm51bSA+IGRhdGFOdW0pO1xuICAgIHByb2plY3RzVG9VcGRhdGUuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBwID0gcHJvamVjdDtcbiAgICAgICAgcC5kYXRhc2V0Lm51bSAtPSAxO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0TGluayhsaW5rKSB7XG4gICAgY29uc3QgZGF0YU51bSA9IGxpbmsuZGF0YXNldC5udW07XG4gICAgLy8gcmVtb3ZlIGh0bWwgZWxlbWVudFxuICAgIHJlbW92ZVByb2plY3RMaW5rKGxpbmssIGRhdGFOdW0pO1xuICAgIHVwZGF0ZVByb2plY3ROdW1zKGRhdGFOdW0pO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxGb3JtKGVsZW1lbnQxLCBlbGVtZW50Mikge1xuICAgIGVsZW1lbnQxLnJlc2V0KCk7XG4gICAgdG9nZ2xlRm9ybShlbGVtZW50MSwgZWxlbWVudDIpO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0RXhpc3RzKHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvakFycmF5ID0gcHJvamVjdE1vZHVsZS5nZXRQcm9qZWN0QXJyYXkoKTtcbiAgICByZXR1cm4gKHByb2pBcnJheS5tYXAoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUpLmluY2x1ZGVzKHByb2plY3ROYW1lKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBwcm9qZWN0TW9kdWxlLmFkZE5ld1Byb2plY3QocHJvamVjdE5hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0TGluayhwcm9qZWN0TmFtZSwgZGF0YU51bSkge1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5cbiAgICAvLyBjcmVhdGUgbmV3IGxpc3QgZWxlbWVudCwgc2V0IGRhdGFzZXQgbGluayB0byBwcm9qZWN0KGNvdW50KTtcbiAgICBjb25zdCBuZXdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBuZXdMaW5rLmNsYXNzTmFtZSA9ICdzZWxlY3Rpb24gcHJvamVjdCB0YWInO1xuICAgIGlmIChkYXRhTnVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3TGluay5kYXRhc2V0Lm51bSA9IHByb2plY3RNb2R1bGUubnVtT2ZQcm9qZWN0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0xpbmsuZGF0YXNldC5udW0gPSBkYXRhTnVtO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBpY29uXG4gICAgY29uc3QgbGVmdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0V3JhcHBlci5jbGFzc05hbWUgPSAncHJvamVjdC1pbmZvJztcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGljb24uY2xhc3NOYW1lID0gJ2ZhciBmYS1saXN0LWFsdCc7XG4gICAgLy8gY3JlYXRlIGRlZmF1bHQgcHJvamVjdCBuYW1lXG4gICAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByb2pUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdC10aXRsZSc7XG4gICAgcHJvalRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgLy8gY3JlYXRlIGRlbGV0ZSBidXR0b24gLSB0byBiZSBzaG93biBvbmx5IG9uIGhvdmVyXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlbGV0ZUljb24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdFwiPjwvaT4nO1xuICAgIGRlbGV0ZUljb24uY2xhc3NOYW1lID0gJ3Byb2plY3QtZGVsZXRlJztcblxuICAgIC8vIGFwcGVuZCBjaGlsZHJlbiB0byBsaW5rXG4gICAgbGVmdFdyYXBwZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgbGVmdFdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvalRpdGxlKTtcbiAgICBuZXdMaW5rLmFwcGVuZENoaWxkKGxlZnRXcmFwcGVyKTtcbiAgICBuZXdMaW5rLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gICAgLy8gYXBwZW5kIGxpbmsgdG8gcHJvamVjdFxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKG5ld0xpbmspO1xuXG4gICAgbmV3TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrTGluayk7XG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRlbGV0ZVByb2plY3RMaW5rKG5ld0xpbmspKTtcbn1cblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIGNsaWNrcyBvbiBwcm9qZWN0IHRhYnNcbmxpc3RJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tMaW5rKSk7XG5cbmNvbnN0IGNvbnRlbnRNb2R1bGUgPSB7XG4gICAgYWRkVGFza0NlbGwsXG4gICAgYWRkUHJvamVjdExpbmssXG4gICAgcHJvamVjdEV4aXN0cyxcbiAgICBjYW5jZWxGb3JtLFxuICAgIGNyZWF0ZU5ld1Rhc2ssXG4gICAgY3JlYXRlTmV3UHJvamVjdCxcbiAgICB0b2dnbGVGb3JtLFxuICAgIHRvZ2dsZUZvcm1GbGV4LFxuICAgIGNoZWNrTGluayxcbiAgICBzZXRDdXJyZW50VGFza3MsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50TW9kdWxlO1xuIiwiaW1wb3J0IHN0b3JhZ2VNb2R1bGUgZnJvbSAnLi9zdG9yYWdlJztcbi8vIEZBQ1RPUlkgRlVOQ1RJT04gRk9SIFBST0pFQ1RTXG5jb25zdCBDcmVhdGVQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgLy8gaW5pdGlhbGlzZSBwcm9qZWN0IGFycmF5XG4gICAgbGV0IGRhdGFOdW07XG5cbiAgICAvLyBmdW5jdGlvbiB0byBzZXQgdGl0bGVcbiAgICBmdW5jdGlvbiBzZXRUaXRsZSh0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldERhdGFOdW0obnVtKSB7XG4gICAgICAgIHRoaXMuZGF0YU51bSA9IG51bTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSwgc2V0VGl0bGUsIGRhdGFOdW0sIHNldERhdGFOdW0sXG4gICAgfTtcbn07XG5cbi8vIG9uIGluaXRpYWwgbG9hZCBvZiB3ZWJwYWdlXG5sZXQgY3VyclByb2o7XG5sZXQgcHJvakFycmF5ID0gW107XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjdXJyUHJvaiA9IHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIHNldFByb2plY3RBcnJheShhcnIpIHtcbiAgICBwcm9qQXJyYXkgPSBhcnI7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgIHJldHVybiBjdXJyUHJvajtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdEFycmF5KCkge1xuICAgIHJldHVybiBwcm9qQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3QobnVtKSB7XG4gICAgcmV0dXJuIHByb2pBcnJheVtudW1dO1xufVxuXG5mdW5jdGlvbiBzYXZlQXJyYXkoKSB7XG4gICAgLy8gc2F2ZSBhcnJheSB0byBzdG9yYWdlIC0gdXBkYXRlIHN0b3JhZ2UgdmFsdWVzXG4gICAgc3RvcmFnZU1vZHVsZS5hZGRQcm9qVG9TdG9yYWdlKHByb2pBcnJheSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFycmF5KGFycikge1xuICAgIHNldFByb2plY3RBcnJheShhcnIpO1xuICAgIHNhdmVBcnJheSgpO1xufVxuXG5mdW5jdGlvbiBhZGRUb0FycmF5KHByb2opIHtcbiAgICBwcm9qQXJyYXkucHVzaChwcm9qKTtcbiAgICB1cGRhdGVBcnJheShwcm9qQXJyYXkpO1xufVxuXG4vLyBzd2l0Y2ggcHJvamVjdHMgdG8gc2VsZWN0ZWQgZnJvbSBVSVxuZnVuY3Rpb24gY2hhbmdlUHJvamVjdChkYXRhTnVtKSB7XG4gICAgY3VyclByb2ogPSBwcm9qQXJyYXlbZGF0YU51bV07XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2oobnVtKSB7XG4gICAgLy8gc3BsaXQgYXJyYXkgaW50byB0d28sIHJlbW92aW5nIGFmZmVjdGluZyBlbGVtZW50XG4gICAgY29uc3QgZmlyc3RIYWxmQXJyYXkgPSBwcm9qQXJyYXkuc2xpY2UoMCwgbnVtKTtcbiAgICBjb25zdCBzZWNvbmRIYWxmQXJyYXkgPSBwcm9qQXJyYXkuc2xpY2UocGFyc2VJbnQobnVtLCAxMCkgKyAxKTtcbiAgICAvLyB1cGRhdGUgZGF0YU51bSBvZiByZW1haW5pbmcgdGFic1xuICAgIHNlY29uZEhhbGZBcnJheS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUuZGF0YU51bSAtPSAxO1xuICAgIH0pO1xuXG4gICAgLy8gYXNzaWduIGFycmF5IGJhY2sgdG8gb3JpZ2luYWwgcHJvakFycmF5XG4gICAgY29uc3QgdGVtcEFycmF5ID0gZmlyc3RIYWxmQXJyYXkuY29uY2F0KHNlY29uZEhhbGZBcnJheSk7XG4gICAgdXBkYXRlQXJyYXkodGVtcEFycmF5KTtcbn1cblxuLy8gQUREIFBST0pFQ1QgLyBzYXZlIHRvIHN0b3JhZ2VcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAvLyBjcmVhdGUgbmV3IGluc3RhbmNlIG9mIHByb2plY3RcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gQ3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgbmV3UHJvamVjdC5kYXRhTnVtID0gcHJvakFycmF5Lmxlbmd0aDtcbiAgICBhZGRUb0FycmF5KG5ld1Byb2plY3QpO1xufVxuXG5mdW5jdGlvbiBudW1PZlByb2plY3RzKCkge1xuICAgIHJldHVybiBwcm9qQXJyYXkubGVuZ3RoO1xufVxuXG5jb25zdCBwcm9qZWN0TW9kdWxlID0ge1xuICAgIENyZWF0ZVByb2plY3QsXG4gICAgYWRkTmV3UHJvamVjdCxcbiAgICBjaGFuZ2VQcm9qZWN0LFxuICAgIG51bU9mUHJvamVjdHMsXG4gICAgZ2V0Q3VycmVudFByb2plY3QsXG4gICAgc2V0Q3VycmVudFByb2plY3QsXG4gICAgZ2V0UHJvamVjdEFycmF5LFxuICAgIHNldFByb2plY3RBcnJheSxcbiAgICBnZXRQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2osXG4gICAgYWRkVG9BcnJheSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNb2R1bGU7XG4iLCJmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgwKSk7XG59XG5cbi8vIGNoZWNrIGlmIGxvY2FsU3RvcmFnZSBoYXMgaXRlbXNcbmZ1bmN0aW9uIGhhc1Byb2plY3RzKCkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbMF07XG59XG5cbmZ1bmN0aW9uIGhhc1Rhc2tzKCkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbMV07XG59XG5cbmZ1bmN0aW9uIGFkZFByb2pUb1N0b3JhZ2UocHJvamVjdEFycmF5KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oMCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSk7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tzKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKDEpKTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvU3RvcmFnZSh0YXNrQXJyYXkpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgxLCBKU09OLnN0cmluZ2lmeSh0YXNrQXJyYXkpKTtcbn1cblxuY29uc3Qgc3RvcmFnZSA9IHtcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBoYXNQcm9qZWN0cyxcbiAgICBhZGRQcm9qVG9TdG9yYWdlLFxuICAgIGdldFRhc2tzLFxuICAgIGhhc1Rhc2tzLFxuICAgIGFkZFRhc2tUb1N0b3JhZ2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlO1xuIiwiaW1wb3J0IHN0b3JhZ2VNb2R1bGUgZnJvbSAnLi9zdG9yYWdlJztcblxuLy8gRkFDVE9SWSBGVU5DVElPTiBGT1IgVEFTS1NcbmNvbnN0IENyZWF0ZVRhc2sgPSAodGl0bGUsIGR1ZSwgY29tcGxldGVkKSA9PiB7XG4gICAgbGV0IHByb2plY3Q7XG4gICAgbGV0IGRhdGFOdW07XG4gICAgLy8gY2hhbmdlIHRpdGxlLCBmbGFnIG9yIGRhdGVcbiAgICBmdW5jdGlvbiBzZXRUaXRsZSh0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldER1ZShkYXRlKSB7XG4gICAgICAgIHRoaXMuZHVlID0gZGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSwgZHVlLCBwcm9qZWN0LCBjb21wbGV0ZWQsIGRhdGFOdW0sIHNldFRpdGxlLCBzZXREdWUsXG4gICAgfTtcbn07XG5cbmxldCB0YXNrQXJyYXkgPSBbXTtcbmxldCBjdXJyZW50UHJvalRhc2tzID0gW107XG5cbmZ1bmN0aW9uIHNhdmVBcnJheSgpIHtcbiAgICBzdG9yYWdlTW9kdWxlLmFkZFRhc2tUb1N0b3JhZ2UodGFza0FycmF5KTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFza0FycmF5KCkge1xuICAgIHJldHVybiB0YXNrQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qVGFza3MoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qVGFza3M7XG59XG5cbmZ1bmN0aW9uIHNldFRhc2tBcnJheShhcnIpIHtcbiAgICB0YXNrQXJyYXkgPSBhcnI7XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qVGFza3MoYXJyKSB7XG4gICAgY3VycmVudFByb2pUYXNrcyA9IGFycjtcbn1cblxuZnVuY3Rpb24gZmlsbFNpbmdsZU51bShudW0pIHtcbiAgICBpZiAobnVtIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGAwJHtudW19YDtcbiAgICB9XG4gICAgcmV0dXJuIG51bTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGVcbiAgICAgICAgLnNwbGl0KCctJylcbiAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAuam9pbignLycpO1xufVxuXG5mdW5jdGlvbiBnZXREYXRlVG9kYXkoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIGZvcm1hdERhdGUoYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke2ZpbGxTaW5nbGVOdW0oZGF0ZS5nZXRNb250aCgpICsgMSl9LSR7ZmlsbFNpbmdsZU51bShkYXRlLmdldERhdGUoKSl9YCk7XG59XG5cbmZ1bmN0aW9uIGdldFdlZWsoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSArIGkpO1xuICAgICAgICByZXN1bHQucHVzaChmb3JtYXREYXRlKGAke2QuZ2V0RnVsbFllYXIoKX0tJHtmaWxsU2luZ2xlTnVtKGQuZ2V0TW9udGgoKSArIDEpfS0ke2ZpbGxTaW5nbGVOdW0oZC5nZXREYXRlKCkpfWApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDb21wbGV0ZShudW0pIHtcbiAgICAvLyBzZXQgdGFzayBjb21wbGV0ZWQgdG8gb3Bwb3NpdGUgb2YgaXRzZWxmLCBpZGVudGlmaWVkIHdpdGggZGF0YU51bSBmcm9tIFVJXG4gICAgdGFza0FycmF5W251bV0uY29tcGxldGVkID0gIXRhc2tBcnJheVtudW1dLmNvbXBsZXRlZDtcbiAgICBzYXZlQXJyYXkoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0luZm8obnVtLCBuZXdUaXRsZSwgbmV3RHVlKSB7XG4gICAgY29uc3QgdGFza1RvQmVFZGl0ZWQgPSB0YXNrQXJyYXlbbnVtXTtcbiAgICB0YXNrVG9CZUVkaXRlZC50aXRsZSA9IG5ld1RpdGxlO1xuICAgIHRhc2tUb0JlRWRpdGVkLmR1ZSA9IG5ld0R1ZTtcblxuICAgIHNhdmVBcnJheSgpO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrc1RvZGF5KGRhdGUgPSBnZXREYXRlVG9kYXkoKSkge1xuICAgIGN1cnJlbnRQcm9qVGFza3MgPSB0YXNrQXJyYXkuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmR1ZSA9PT0gZGF0ZSk7XG4gICAgLy8gc2hvdyBmaWx0ZXJlZCBhcnJheVxuICAgIHJldHVybiBjdXJyZW50UHJvalRhc2tzO1xufVxuXG5mdW5jdGlvbiBnZXRXZWVrVGFza3MoZGF0ZVJhbmdlID0gZ2V0V2VlaygpKSB7XG4gICAgbGV0IHRvdGFsVGFza3MgPSBbXTtcbiAgICBkYXRlUmFuZ2UuZm9yRWFjaCgoZGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRlU2VsZWN0ZWQgPSBkYXRlO1xuICAgICAgICBjb25zdCBkYXlBcnJheSA9IHRhc2tBcnJheS5maWx0ZXIoKHRhc2spID0+IHRhc2suZHVlID09PSBkYXRlU2VsZWN0ZWQpO1xuICAgICAgICB0b3RhbFRhc2tzID0gdG90YWxUYXNrcy5jb25jYXQoZGF5QXJyYXkpO1xuICAgIH0pO1xuICAgIGN1cnJlbnRQcm9qVGFza3MgPSB0b3RhbFRhc2tzO1xuICAgIHJldHVybiBjdXJyZW50UHJvalRhc2tzO1xufVxuXG5mdW5jdGlvbiBudW1PZlRhc2tzKCkge1xuICAgIHJldHVybiB0YXNrQXJyYXkubGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBhZGRUb0FycmF5KHRhc2spIHtcbiAgICB0YXNrQXJyYXkucHVzaCh0YXNrKTtcbiAgICBzYXZlQXJyYXkoKTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3VGFzayh0YXNrTmFtZSwgcHJvamVjdCkge1xuICAgIC8vIG5ldyBpbnN0YW5jZSBmcm9tIHRhc2sgZmFjdG9yeVxuICAgIGNvbnN0IG5ld1Rhc2sgPSBDcmVhdGVUYXNrKHRhc2tOYW1lKTtcbiAgICAvLyB1cGRhdGUgZGF0YU51bVxuICAgIG5ld1Rhc2suZGF0YU51bSA9IHRhc2tBcnJheS5sZW5ndGg7XG4gICAgbmV3VGFzay5kdWUgPSBnZXREYXRlVG9kYXkoKTtcbiAgICAvLyB1cGRhdGUgbGlua2luZyBwcm9qZWN0XG4gICAgbmV3VGFzay5wcm9qZWN0ID0gcHJvamVjdC50aXRsZTtcbiAgICAvLyBhZGQgdG8gdGFzayBhcnJheVxuICAgIGFkZFRvQXJyYXkobmV3VGFzayk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2sobnVtKSB7XG4gICAgLy8gc3BsaXQgYXJyYXkgaW50byB0d28sIHJlbW92aW5nIGFmZmVjdGluZyBlbGVtZW50XG4gICAgY29uc3QgZmlyc3RIYWxmQXJyYXkgPSB0YXNrQXJyYXkuc2xpY2UoMCwgbnVtKTtcbiAgICBjb25zdCBzZWNvbmRIYWxmQXJyYXkgPSB0YXNrQXJyYXkuc2xpY2UocGFyc2VJbnQobnVtLCAxMCkgKyAxKTtcbiAgICAvLyB1cGRhdGUgZGF0YU51bSBvZiByZW1haW5pbmcgdGFic1xuICAgIHNlY29uZEhhbGZBcnJheS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUuZGF0YU51bSAtPSAxO1xuICAgIH0pO1xuXG4gICAgLy8gYXNzaWduIGFycmF5IGJhY2sgdG8gb3JpZ2luYWwgcHJvakFycmF5XG4gICAgdGFza0FycmF5ID0gZmlyc3RIYWxmQXJyYXkuY29uY2F0KHNlY29uZEhhbGZBcnJheSk7XG4gICAgc2F2ZUFycmF5KCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RUYXNrcyhudW0pIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHN0b3JhZ2VNb2R1bGUuZ2V0UHJvamVjdHMoKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbbnVtXTtcbiAgICBjb25zdCB7IHRpdGxlIH0gPSBwcm9qZWN0O1xuICAgIHRhc2tBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0YXNrLnByb2plY3QgPT09IHRpdGxlKSB7XG4gICAgICAgICAgICBkZWxldGVUYXNrKHRhc2suZGF0YU51bSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuY29uc3QgdGFzayA9IHtcbiAgICBDcmVhdGVUYXNrLFxuICAgIGFkZE5ld1Rhc2ssXG4gICAgbnVtT2ZUYXNrcyxcbiAgICB0b2dnbGVDb21wbGV0ZSxcbiAgICB1cGRhdGVUYXNrSW5mbyxcbiAgICBkZWxldGVUYXNrLFxuICAgIGdldFRhc2tzVG9kYXksXG4gICAgZ2V0V2Vla1Rhc2tzLFxuICAgIGdldEN1cnJlbnRQcm9qVGFza3MsXG4gICAgZ2V0VGFza0FycmF5LFxuICAgIGdldERhdGVUb2RheSxcbiAgICBnZXRXZWVrLFxuICAgIGZvcm1hdERhdGUsXG4gICAgZGVsZXRlUHJvamVjdFRhc2tzLFxuICAgIHNldFRhc2tBcnJheSxcbiAgICBzZXRDdXJyZW50UHJvalRhc2tzLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFzaztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IGNvbnRlbnRNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL2NvbnRlbnQnO1xuaW1wb3J0IFVJTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9VSSc7XG5pbXBvcnQgcHJvamVjdE1vZHVsZSBmcm9tICcuL21vZHVsZXMvcHJvamVjdCc7XG5pbXBvcnQgdGFza01vZHVsZSBmcm9tICcuL21vZHVsZXMvdGFzayc7XG5pbXBvcnQgc3RvcmFnZU1vZHVsZSBmcm9tICcuL21vZHVsZXMvc3RvcmFnZSc7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==