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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black: rgb(29, 29, 29);\n    --white: rgb(250, 250, 250);\n    --grey: rgb(121, 121, 121);\n}\n\nhtml,\nbody {\n    font-size: 8px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    color: var(--black);\n    background: rgb(235, 235, 235);\n}\n\n#header-bar {\n    padding: 18px 20px;\n    color: var(--white);\n    background: rgb(75, 75, 75);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh2 {\n    margin: 0;\n    font-size: 3rem;\n}\n\n.nav-btn {\n    background: inherit;\n    border: none;\n    color: var(--white);\n}\n\n.nav-bar {\n    display: none;\n    background: rgb(219, 219, 219);\n    color:rgb(37, 37, 37);\n    font-size: 1.5rem;\n    box-shadow: 0px 1px 2px var(--grey);\n    /* prevent highlights */\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                        supported by Chrome, Edge, Opera and Firefox */\n}\n\n.wrapper {\n    padding: 15px;\n}\n\n.list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.selection {\n    padding: 7px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.selection i,\n.add-project-btn i {\n    margin-right: 10px;\n}\n\n.selection:hover {\n    background:rgb(204, 204, 204);\n}\n\n.selected {\n    background: rgb(204, 204, 204);\n    font-weight: bold;\n}\n\nh3 {\n    font-size: 1.9rem;\n}\n\n.add-project-btn {\n    display: none;\n}\n\n.project {\n    justify-content: space-between;\n}\n\n.tab > * {\n    pointer-events: none;\n}\n\n.project-delete {\n    pointer-events: all;\n}\n\n.project-delete {\n    display: none;\n}\n\n.project-delete:hover {\n    color:rgb(190, 39, 39);\n}\n\n.project:hover .project-delete {\n    display: block;\n}\n\n.content {\n    margin: 20px;\n}\n\n.tasks {\n    margin: 5px;\n}\n\n.task {\n    font-size: 1.3rem;\n    color: var(--black);\n    border: 1px solid var(--grey);\n    border-radius: 10px;\n    padding: 10px 10px;\n    margin-top: 15px;\n}\n\n.task:hover {\n    background: rgb(204, 204, 204);\n}\n\n.info-wrapper {\n    display: none;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.complete-icon {\n    width: 12px;\n    height: 12px;\n    border: 1px solid var(--grey);\n    border-radius: 50%;\n}\n\n.task-name {\n    width: 55%;\n    margin-left: 5px;\n}\n\n.side-icons-wrapper {\n    display: flex;\n    width: 30px;\n    justify-content: space-between;\n}\n\n.edit-icon,\n.delete-icon {\n    display: none;\n    color: var(--grey);\n}\n\n.edit-icon:hover {\n    color: var(--black);\n}\n\n.delete-icon:hover {\n    color: rgb(190, 39, 39);\n}\n\n.task:hover .edit-icon,\n.task:hover .delete-icon {\n    display: block;\n}\n\n.task-edit-form {\n    display: none;\n    height: 50px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.edit-inputs {\n    display: flex;\n    width: 80%;\n    max-width: 600px;\n    justify-content: space-around;\n}\n\n.edit-task-title {\n    width: 50%;\n}\n\n.edit-task-due {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.confirm-edit-buttons {\n    width: 150px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.confirm-edit,\n.cancel-edit {\n    border: 1px solid var(--black);\n    border-radius: 5px;\n    background: inherit;\n}\n\n.confirm-edit:hover {\n    border: 1px solid rgba(149, 229, 149, 0.9);\n    background: rgba(149, 229, 149, 0.9);\n}\n\n.cancel-edit:hover {\n    border: 1px solid rgba(196, 94, 94, 0.9);\n    background: rgba(196, 94, 94, 0.9);\n}\n\n.project-form,\n.task-form {\n    display: none;\n    font-size: 13px;\n}\n\n.task-form {\n    text-align: center;\n}\n\n.add-task-btn {\n    font-size: 1.5rem;\n    display: none;\n    text-align: center;\n}\n\n.form-input {\n    border-radius: 3px;\n    border: 1px solid var(--black);\n    padding: 4px 8px;\n}\n\n.form-btns {\n    display: inline-block;\n}\n\n.form-btns button {\n    padding: 3px;\n}\n\n.task-submit-btn:hover,\n.project-submit-btn:hover {\n    background:rgba(149, 229, 149, 0.9);\n    border: 2px solid rgba(149, 229, 149, 0.9);\n}\n\n.task-cancel-btn:hover,\n.project-cancel-btn:hover {\n    background:rgba(196, 94, 94, 0.9);\n    color:rgb(235, 235, 235);\n    border: 2px solid rgba(196, 94, 94, 0.9);\n}\n\n.display-flex {\n    display: flex;\n}\n\n.display {\n    display: block;\n}\n\n@media (min-width: 321px) {\n    html,\n    body {\n        font-size: 10px;\n    }\n\n    .tasks {\n        margin: 10px;\n    }\n}\n\n@media (min-width: 769px) {\n    header {\n        position: fixed;\n        width: 100vw;\n        z-index: 5;\n    }\n\n    .nav-btn {\n        display: none;\n    }\n\n    .nav-wrap {\n        width: 30%;\n        max-width: 400px;\n    }\n\n    .nav-bar {\n        z-index: 1;\n        display: flex;\n        position: fixed;\n        width: inherit;\n        max-width: inherit;\n        height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper {\n        width: 100%;\n        overflow-y: scroll;\n        -ms-overflow-style: none;  /* Internet Explorer 10+ */\n        scrollbar-width: none;  /* Firefox */\n    }\n\n    .wrapper::-webkit-scrollbar { \n        display: none;  /* Safari and Chrome */\n    }\n\n    .wrapper ul:first-child {\n        margin-top: 80px;\n    }\n    \n    .content-wrapper {\n        display: flex;\n    }\n\n    .main-wrapper {\n        width: 60%;\n        margin: 80px;\n        flex: 2;\n        max-width: 1000px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --black: rgb(29, 29, 29);\n    --white: rgb(250, 250, 250);\n    --grey: rgb(121, 121, 121);\n}\n\nhtml,\nbody {\n    font-size: 8px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    color: var(--black);\n    background: rgb(235, 235, 235);\n}\n\n#header-bar {\n    padding: 18px 20px;\n    color: var(--white);\n    background: rgb(75, 75, 75);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh2 {\n    margin: 0;\n    font-size: 3rem;\n}\n\n.nav-btn {\n    background: inherit;\n    border: none;\n    color: var(--white);\n}\n\n.nav-bar {\n    display: none;\n    background: rgb(219, 219, 219);\n    color:rgb(37, 37, 37);\n    font-size: 1.5rem;\n    box-shadow: 0px 1px 2px var(--grey);\n    /* prevent highlights */\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                        supported by Chrome, Edge, Opera and Firefox */\n}\n\n.wrapper {\n    padding: 15px;\n}\n\n.list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.selection {\n    padding: 7px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.selection i,\n.add-project-btn i {\n    margin-right: 10px;\n}\n\n.selection:hover {\n    background:rgb(204, 204, 204);\n}\n\n.selected {\n    background: rgb(204, 204, 204);\n    font-weight: bold;\n}\n\nh3 {\n    font-size: 1.9rem;\n}\n\n.add-project-btn {\n    display: none;\n}\n\n.project {\n    justify-content: space-between;\n}\n\n.tab > * {\n    pointer-events: none;\n}\n\n.project-delete {\n    pointer-events: all;\n}\n\n.project-delete {\n    display: none;\n}\n\n.project-delete:hover {\n    color:rgb(190, 39, 39);\n}\n\n.project:hover .project-delete {\n    display: block;\n}\n\n.content {\n    margin: 20px;\n}\n\n.tasks {\n    margin: 5px;\n}\n\n.task {\n    font-size: 1.3rem;\n    color: var(--black);\n    border: 1px solid var(--grey);\n    border-radius: 10px;\n    padding: 10px 10px;\n    margin-top: 15px;\n}\n\n.task:hover {\n    background: rgb(204, 204, 204);\n}\n\n.info-wrapper {\n    display: none;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.complete-icon {\n    width: 12px;\n    height: 12px;\n    border: 1px solid var(--grey);\n    border-radius: 50%;\n}\n\n.task-name {\n    width: 55%;\n    margin-left: 5px;\n}\n\n.side-icons-wrapper {\n    display: flex;\n    width: 30px;\n    justify-content: space-between;\n}\n\n.edit-icon,\n.delete-icon {\n    display: none;\n    color: var(--grey);\n}\n\n.edit-icon:hover {\n    color: var(--black);\n}\n\n.delete-icon:hover {\n    color: rgb(190, 39, 39);\n}\n\n.task:hover .edit-icon,\n.task:hover .delete-icon {\n    display: block;\n}\n\n.task-edit-form {\n    display: none;\n    height: 50px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.edit-inputs {\n    display: flex;\n    width: 80%;\n    max-width: 600px;\n    justify-content: space-around;\n}\n\n.edit-task-title {\n    width: 50%;\n}\n\n.edit-task-due {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.confirm-edit-buttons {\n    width: 150px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.confirm-edit,\n.cancel-edit {\n    border: 1px solid var(--black);\n    border-radius: 5px;\n    background: inherit;\n}\n\n.confirm-edit:hover {\n    border: 1px solid rgba(149, 229, 149, 0.9);\n    background: rgba(149, 229, 149, 0.9);\n}\n\n.cancel-edit:hover {\n    border: 1px solid rgba(196, 94, 94, 0.9);\n    background: rgba(196, 94, 94, 0.9);\n}\n\n.project-form,\n.task-form {\n    display: none;\n    font-size: 13px;\n}\n\n.task-form {\n    text-align: center;\n}\n\n.add-task-btn {\n    font-size: 1.5rem;\n    display: none;\n    text-align: center;\n}\n\n.form-input {\n    border-radius: 3px;\n    border: 1px solid var(--black);\n    padding: 4px 8px;\n}\n\n.form-btns {\n    display: inline-block;\n}\n\n.form-btns button {\n    padding: 3px;\n}\n\n.task-submit-btn:hover,\n.project-submit-btn:hover {\n    background:rgba(149, 229, 149, 0.9);\n    border: 2px solid rgba(149, 229, 149, 0.9);\n}\n\n.task-cancel-btn:hover,\n.project-cancel-btn:hover {\n    background:rgba(196, 94, 94, 0.9);\n    color:rgb(235, 235, 235);\n    border: 2px solid rgba(196, 94, 94, 0.9);\n}\n\n.display-flex {\n    display: flex;\n}\n\n.display {\n    display: block;\n}\n\n@media (min-width: 321px) {\n    html,\n    body {\n        font-size: 10px;\n    }\n\n    .tasks {\n        margin: 10px;\n    }\n}\n\n@media (min-width: 769px) {\n    header {\n        position: fixed;\n        width: 100vw;\n        z-index: 5;\n    }\n\n    .nav-btn {\n        display: none;\n    }\n\n    .nav-wrap {\n        width: 30%;\n        max-width: 400px;\n    }\n\n    .nav-bar {\n        z-index: 1;\n        display: flex;\n        position: fixed;\n        width: inherit;\n        max-width: inherit;\n        height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper {\n        width: 100%;\n        overflow-y: scroll;\n        -ms-overflow-style: none;  /* Internet Explorer 10+ */\n        scrollbar-width: none;  /* Firefox */\n    }\n\n    .wrapper::-webkit-scrollbar { \n        display: none;  /* Safari and Chrome */\n    }\n\n    .wrapper ul:first-child {\n        margin-top: 80px;\n    }\n    \n    .content-wrapper {\n        display: flex;\n    }\n\n    .main-wrapper {\n        width: 60%;\n        margin: 80px;\n        flex: 2;\n        max-width: 1000px;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");



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
const dayTab = document.querySelector('.day');
const weekTab = document.querySelector('.week');

const pageFunctions = (() => {
    function dropdownMenu() {
        nav.classList.toggle('display');
    }

    function submitProjectForm(e) {
        e.preventDefault();
        //get title of project from form
        const title = document.querySelector('.project-form input').value;
        if (!title) {
            alert("Input required");
            return;
        }
        if (_project_js__WEBPACK_IMPORTED_MODULE_1__.default.projectExists(title)) {
            alert("Project already exists!")
            return;
        }
        //add DOM elements
        addProjectLink(title);
        //create instance of project from factory
        _project_js__WEBPACK_IMPORTED_MODULE_1__.default.addNewProject(title);
        cancelForm(projectForm, addProjBtn);
    }

    function submitTaskForm(e) {
        e.preventDefault();
        //get title of task from form
        const title = document.querySelector('.task-form input').value;
        if (!title) {
            alert("Input required");
            return;
        }
        //add DOM elements
        addTaskCell(title);
        //create instance of task from factory
        _task_js__WEBPACK_IMPORTED_MODULE_0__.default.addNewTask(title);
        cancelForm(taskForm, addTaskBtn);
    }

    function checkLink(e) {
        let link = e.target;
        //check if same link as selected
        if (sameLink(link)) {
            return;
        }

        //if day or week tabs selected
        if (link == dayTab || link == weekTab) {
            removePreviousHighlight();
            clearContent();
            link.classList.add('selected');
            if (link == dayTab) {
                _project_js__WEBPACK_IMPORTED_MODULE_1__.default.changeProject(1);
                //get tasks that coincide with date today
                _task_js__WEBPACK_IMPORTED_MODULE_0__.default.showTasksToday(getDateToday());
            } else {
                _project_js__WEBPACK_IMPORTED_MODULE_1__.default.changeProject(2);
                //get tasks that coincide with 7 days ahead, including today
                _task_js__WEBPACK_IMPORTED_MODULE_0__.default.showWeekTasks(getWeek());
            }
            return;
        }
        if (link.classList.contains('fa-trash-alt')) {
            //ignore delete button element
            return;
        }
        selectLink(link);
    }

    function selectLink(link) {
        removePreviousHighlight();
        //switch to selected link
        link.classList.add('selected');
        //change project currProj to selected link's datanum
        _project_js__WEBPACK_IMPORTED_MODULE_1__.default.changeProject(link.dataset.num);
        //clear previous content of project
        clearContent();
        //update content with currProj's tasks
        updateContent();
    }

    function sameLink(link) {
        return (linkSelected() == link);
    }

    function linkSelected() {
        return document.querySelector('.selected');
    }

    function removePreviousHighlight() {
        const highlighted = document.querySelector('.selected');
        if (!highlighted) return;
        highlighted.classList.remove('selected');
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
    listItems.forEach(item => item.addEventListener('click', checkLink));

    return {checkLink, linkSelected};
})();

function clearContent() {
    const tasks = document.querySelector('.tasks');
    tasks.innerHTML = '';
}

function updateContent() {
    _task_js__WEBPACK_IMPORTED_MODULE_0__.default.setCurrentTasks(_project_js__WEBPACK_IMPORTED_MODULE_1__.default.currentProjectSelected());
}

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

function getDateToday() {
    const date = new Date();
    return formatDate(`${date.getFullYear()}-${fillSingleNum(date.getMonth() + 1)}-${fillSingleNum(date.getDate())}`);
}

function getWeek() {
    let result = [];
    for (let i = 0; i < 7; i++) {
        let d = new Date();
        d.setDate(d.getDate() + i);
        result.push(formatDate(`${d.getFullYear()}-${fillSingleNum(d.getMonth() + 1)}-${fillSingleNum(d.getDate())}`) )
    }

    return result;
}

function fillSingleNum(num) {
    if (num < 10) {
        return `0${num}`
    }
    return num;
}

function formatDate(date) {
    return date
            .split('-')
            .reverse()
            .join('/');
}

const addProjectLink = (projectName, dataNum = _project_js__WEBPACK_IMPORTED_MODULE_1__.default.numOfProjects()) => {
    const projects = document.querySelector('.projects');

    //create new list element, set dataset link to project(count);
    const newLink = document.createElement('li');
    newLink.className = "selection project tab";
    newLink.dataset.num = dataNum;
    //create icon
    const leftWrapper = document.createElement('div');
    leftWrapper.className = 'project-info'
    const icon = document.createElement('i');
    icon.className = 'far fa-list-alt';
    //create default project name
    const projTitle = document.createElement('span');
    projTitle.className = 'project-title';
    projTitle.textContent = projectName;
    //create delete button - to be shown only on hover
    const deleteIcon = document.createElement('div');
    deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>'
    deleteIcon.className = 'project-delete';
    
    //append children to link
    leftWrapper.appendChild(icon);
    leftWrapper.appendChild(projTitle);
    newLink.appendChild(leftWrapper);
    newLink.appendChild(deleteIcon);

    //append link to project
    projects.appendChild(newLink);

    newLink.addEventListener('click', pageFunctions.checkLink);

    deleteIcon.addEventListener('click', () => deleteProjectLink(newLink));
}

const removeProjectLink = (linkToRemove, num) => {
    linkToRemove.remove();
    clearContent();
    //update projectArray
    _project_js__WEBPACK_IMPORTED_MODULE_1__.default.deleteProj(num);
}

const updateProjectNums= (dataNum) => {
    const remainingProjects = document.querySelectorAll("[data-num]");
    //get array from remaining project nodes
    let projectsArr = Array.from(remainingProjects);
    //filter array to only include projects after deleted project
    let projectsToUpdate = projectsArr.filter(project => project.dataset.num > dataNum);
    for (let project of projectsToUpdate) {
        //iterate through each project
        //update their data-num
        project.dataset.num -= 1;
        //update projectArray and save to localStorage
    }
}

const deleteProjectLink = (link) => {
    const dataNum = link.dataset.num;
    //remove html element
    removeProjectLink(link, dataNum);
    updateProjectNums(dataNum);
}

const addTaskCell = (taskName, dueDate, completed, dataNum = _task_js__WEBPACK_IMPORTED_MODULE_0__.default.numOfTasks()) => {

    const tasks = document.querySelector('.tasks');
    //create div element to wrap both task info and edit info
    const newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.dataset.num = dataNum; //dataset num to identify task instance in project - taskList array
    
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
    taskDue.textContent = dueDate || getDateToday()

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

    //check if task is complete according to input parameters
    if (completed) {
        editTask.completeTask(newTask);
    }

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

    //event listener for task completion
    completeIcon.addEventListener('click', () => {
        //change task instance in taskModule
        _task_js__WEBPACK_IMPORTED_MODULE_0__.default.toggleComplete(newTask.dataset.num);

        //check if task completed already
        if (completed) {
            completed = false;
            editTask.uncompleteTask(newTask);
        } else {
            completed = true;
            editTask.completeTask(newTask);
        }
    });

    //event listeners for side icons
    editIcon.addEventListener('click', () => editTask.displayEdit(newTask));
    deleteIcon.addEventListener('click', () => editTask.deleteTask(newTask));

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
}

const editTask = (() => {
    function completeTask(task) {
        const completeIcon = task.querySelector('.complete-icon');
        completeIcon.style.background = 'rgba(81, 192, 81, 0.253)';
        task.style.color = 'rgb(150, 150, 150)';
        task.style.borderColor = 'rgb(150, 150, 150)';
        task.style.textDecoration = 'line-through';
    }

    function uncompleteTask(task) {
        const completeIcon = task.querySelector('.complete-icon');
        completeIcon.style.background = 'inherit';
        task.style.color = 'var(--black)';
        task.style.borderColor = 'var(--grey)';
        task.style.textDecoration = 'none';
    }

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

        //update task instance in taskModule
        _task_js__WEBPACK_IMPORTED_MODULE_0__.default.updateTaskInfo(task.dataset.num, editedTitle.value, editedDue.value);

        //change task title and date according to form
        taskTitle.textContent = editedTitle.value;
        taskDue.textContent = formatDate(editedDue.value);

        resetEdit(task);
    }

    function deleteTask(task) {
        //have to clear tasks and recreate all instances again, as dataNum is spread out
        clearTasks();
        //remove instance and reset list
        removeTaskInstance(task);
    }

    function removeTaskInstance(task) {
        //remove from task array
        _task_js__WEBPACK_IMPORTED_MODULE_0__.default.deleteTask(task.dataset.num);
    }

    function clearTasks() {
        document.querySelector('.tasks').innerHTML = '';
    }

    return {displayEdit, resetEdit, submitEdit, completeTask, uncompleteTask, deleteTask}
})();

const UI = {
    addProjectLink,
    addTaskCell,
    getDateToday,
    getWeek
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
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ "./src/modules/UI.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");




//FACTORY FUNCTION FOR PROJECTS
const CreateProject = (title) => {
    //initialise project array
    let dataNum;

    //function to set title
    function setTitle(title) {
        this.title = title;
    };

    function setDataNum(num) {
        this.dataNum = num;
    }

    return {title, setTitle, dataNum, setDataNum};
}

//initial load of webpage - 
let currProj;
let projArray = [];

//check if storage has first element
if (_storage_js__WEBPACK_IMPORTED_MODULE_0__.default.hasProjects()) {
    projArray = _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.getProjects();
    currProj = projArray[0];
    //get more if storage exists
    showProjects();
} else { //else create own project and save to storage
    currProj = CreateProject('inbox');
    currProj.setDataNum(0);
    //save to localStorage under projects
    addToArray(currProj);

    const dayProj = CreateProject('today');
    dayProj.setDataNum(1);
    addToArray(dayProj);

    const weekProj = CreateProject('this week');
    weekProj.setDataNum(2);
    addToArray(weekProj);
}


function showProjects() { //check if there are existing projects in storage
    if (projArray.length > 3) {
        const len = projArray.length;
        //go through all stored projects and add them to link
        for (let i = 3; i < len; i++) {
            let proj = projArray[i];
            _UI_js__WEBPACK_IMPORTED_MODULE_1__.default.addProjectLink(proj.title, proj.dataNum);
        }
    }
}

function deleteProj(num) {
    let project = projArray[num];
    //delete all tasks in project
    _task_js__WEBPACK_IMPORTED_MODULE_2__.default.deleteProjectTasks(project.title);
    //split array into two, removing affecting element
    let firstHalfArray = projArray.slice(0, num);
    let secondHalfArray = projArray.slice(parseInt(num) + 1);
    //update dataNum of remaining tabs
    secondHalfArray.forEach(e => e.dataNum -= 1);
    
    //assign array back to original projArray
    let tempArray = firstHalfArray.concat(secondHalfArray);
    updateArray(tempArray);
}

function updateArray(arr) {
    projArray = arr;
    saveArray();
}


function addToArray(proj) {
    projArray.push(proj);
    saveArray();
}

function saveArray() {
    _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.addProjToStorage(projArray);
}

function currentProjectSelected() {
    return currProj;
}

//switch projects to selected from UI
function changeProject(dataNum) {
    currProj = projArray[dataNum];
}

function projectExists(projectName) {
    return (projArray.map(project => project.title).includes(projectName));
}

//ADD PROJECT / save to storage
function addNewProject(projectName) {
    //create new instance of project
    const newProject = CreateProject(projectName);
    newProject.dataNum = projArray.length;
    addToArray(newProject);
}

function numOfProjects() {
    return projArray.length
}

const projectModule = {
    CreateProject,
    addNewProject,
    projectExists,
    changeProject,
    deleteProj,
    numOfProjects,
    currentProjectSelected
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
function getProjects() {
    return JSON.parse(localStorage.getItem(0));
}

//check if localStorage has items
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
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/modules/storage.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI.js */ "./src/modules/UI.js");




//FACTORY FUNCTION FOR TASKS
const CreateTask = (title, due, completed) => {
    let project;
    let dataNum;
    //change title, flag or date
    function setTitle(title) {
        this.title = title;
    }

    function setDue(due) {
        this.due = due;
    }

    return {title, due, project, completed, dataNum, setTitle, setDue};
};

let taskArray = [];
let currentProjTasks = [];

//check if storage has tasks
if (_storage_js__WEBPACK_IMPORTED_MODULE_1__.default.hasTasks()) {
    taskArray = _storage_js__WEBPACK_IMPORTED_MODULE_1__.default.getTasks();
    //add to currProjArr
    setCurrentTasks(_project_js__WEBPACK_IMPORTED_MODULE_0__.default.currentProjectSelected());
}

function toggleComplete(num) {
    //set task completed to opposite of itself, identified with dataNum from UIModule
    taskArray[num].completed = !taskArray[num].completed;
    saveArray();
}

function updateTaskInfo(num, newTitle, newDue) {
    const taskToBeEdited = taskArray[num];
    taskToBeEdited.title = newTitle;
    taskToBeEdited.due = newDue;

    saveArray();
}

function showTasksToday(date = _UI_js__WEBPACK_IMPORTED_MODULE_2__.default.getDateToday()) {
    currentProjTasks = taskArray.filter(task => task.due == date);
    //show filtered array
    showCurrentTasks();
}

function showWeekTasks(dateRange = _UI_js__WEBPACK_IMPORTED_MODULE_2__.default.getWeek()) {
    let totalTasks = [];
    for (let date of dateRange) {
        let dayArray = taskArray.filter(task => task.due == date);
        totalTasks = totalTasks.concat(dayArray);
    }
    currentProjTasks = totalTasks;
    showCurrentTasks();
}

function setCurrentTasks(project) {
    currentProjTasks = taskArray.filter(task => task.project == project.title);
    showCurrentTasks();
}

function numOfTasks() {
    return taskArray.length;
}

function showCurrentTasks() {
    currentProjTasks.forEach(task => _UI_js__WEBPACK_IMPORTED_MODULE_2__.default.addTaskCell(task.title, task.due, task.completed, task.dataNum));
}

function addToArray(task) {
    taskArray.push(task);
    saveArray();
}

function saveArray() {
    _storage_js__WEBPACK_IMPORTED_MODULE_1__.default.addTaskToStorage(taskArray);
}

function addNewTask(taskName) {
    //new instance from task factory
    const newTask = CreateTask(taskName);
    //update dataNum
    newTask.dataNum = taskArray.length;
    newTask.due = _UI_js__WEBPACK_IMPORTED_MODULE_2__.default.getDateToday();
    //update linking project
    const projectSelected = _project_js__WEBPACK_IMPORTED_MODULE_0__.default.currentProjectSelected();
    newTask.project = projectSelected.title;
    //add to task array
    addToArray(newTask);
}

function removeandUpdateArray(num) {
    //split array into two, removing affecting element
    let firstHalfArray = taskArray.slice(0, num);
    let secondHalfArray = taskArray.slice(parseInt(num) + 1);
    //update dataNum of remaining tabs
    secondHalfArray.forEach(e => e.dataNum -= 1);
    
    //assign array back to original projArray
    taskArray = firstHalfArray.concat(secondHalfArray);
    saveArray();
}

function deleteTask(num) {
    removeandUpdateArray(num);
    updateArray();
}

function updateArray() {
    //reload all tasks to current project selected
    if (_project_js__WEBPACK_IMPORTED_MODULE_0__.default.currentProjectSelected().title == 'today') {
        showTasksToday();
        return;
    }
    if (_project_js__WEBPACK_IMPORTED_MODULE_0__.default.currentProjectSelected().title == 'this week') {
        showWeekTasks();
        return;
    }
    setCurrentTasks(_project_js__WEBPACK_IMPORTED_MODULE_0__.default.currentProjectSelected());
}

function deleteProjectTasks(title) {
    taskArray.forEach(task => {
        if (task.project == title) {
            removeandUpdateArray(task.dataNum);
        }
    });
}

const task = {
    CreateTask,
    addNewTask,
    setCurrentTasks,
    numOfTasks,
    toggleComplete,
    updateTaskInfo,
    deleteTask,
    showTasksToday,
    showWeekTasks,
    deleteProjectTasks
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
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");
/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task.js */ "./src/modules/task.js");
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/UI.js */ "./src/modules/UI.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELCtCQUErQixrQ0FBa0MsaUNBQWlDLEdBQUcsaUJBQWlCLHFCQUFxQixnREFBZ0QsZ0JBQWdCLDBCQUEwQixxQ0FBcUMsR0FBRyxpQkFBaUIseUJBQXlCLDBCQUEwQixrQ0FBa0Msb0JBQW9CLHFDQUFxQywwQkFBMEIsR0FBRyxRQUFRLGdCQUFnQixzQkFBc0IsR0FBRyxjQUFjLDBCQUEwQixtQkFBbUIsMEJBQTBCLEdBQUcsY0FBYyxvQkFBb0IscUNBQXFDLDRCQUE0Qix3QkFBd0IsMENBQTBDLGdFQUFnRSxpREFBaUQsNENBQTRDLGtEQUFrRCwwREFBMEQscURBQXFELCtHQUErRyxjQUFjLG9CQUFvQixHQUFHLFdBQVcsZ0JBQWdCLGlCQUFpQix1QkFBdUIsR0FBRyxnQkFBZ0IsbUJBQW1CLHlCQUF5QixvQkFBb0IsR0FBRyx1Q0FBdUMseUJBQXlCLEdBQUcsc0JBQXNCLG9DQUFvQyxHQUFHLGVBQWUscUNBQXFDLHdCQUF3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NkQsd0RBQXFCOztBQUVsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUF5Qjs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDREQUF5Qjs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHdEQUFxQjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyY3dCO0FBQ1Y7QUFDSTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDREQUF5QjtBQUM3QixnQkFBZ0IsNERBQXlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTztBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0EsWUFBWSwwREFBdUI7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQTZCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpRUFBOEI7QUFDbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRTs7Ozs7Ozs7Ozs7Ozs7QUMzSDVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENtQjtBQUNBO0FBQ1g7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSx5REFBc0I7QUFDMUIsZ0JBQWdCLHlEQUFzQjtBQUN0QztBQUNBLG9CQUFvQix1RUFBb0M7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtCQUErQix3REFBcUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLG1EQUFnQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyx1REFBb0I7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGlFQUE4QjtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFxQjtBQUN2QztBQUNBLDRCQUE0Qix1RUFBb0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHVFQUFvQztBQUM1QztBQUNBO0FBQ0E7QUFDQSxRQUFRLHVFQUFvQztBQUM1QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUVBQW9DO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRTs7Ozs7O1VDbEpuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05pRDtBQUNOO0FBQ007QUFDViIsImZpbGUiOiIuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJsYWNrOiByZ2IoMjksIDI5LCAyOSk7XFxuICAgIC0td2hpdGU6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG4gICAgLS1ncmV5OiByZ2IoMTIxLCAxMjEsIDEyMSk7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxufVxcblxcbiNoZWFkZXItYmFyIHtcXG4gICAgcGFkZGluZzogMThweCAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzUsIDc1LCA3NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIxOSwgMjE5LCAyMTkpO1xcbiAgICBjb2xvcjpyZ2IoMzcsIDM3LCAzNyk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCB2YXIoLS1ncmV5KTtcXG4gICAgLyogcHJldmVudCBoaWdobGlnaHRzICovXFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBFZGdlLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5saXN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zZWxlY3Rpb24gaSxcXG4uYWRkLXByb2plY3QtYnRuIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5zZWxlY3Rpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMDQsIDIwNCwgMjA0KTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuOXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFiID4gKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUge1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGU6aG92ZXIge1xcbiAgICBjb2xvcjpyZ2IoMTkwLCAzOSwgMzkpO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciAucHJvamVjdC1kZWxldGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG59XFxuXFxuLmluZm8td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlLWljb24ge1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFzay1uYW1lIHtcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLnNpZGUtaWNvbnMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5lZGl0LWljb24sXFxuLmRlbGV0ZS1pY29uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4uZWRpdC1pY29uOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLmRlbGV0ZS1pY29uOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigxOTAsIDM5LCAzOSk7XFxufVxcblxcbi50YXNrOmhvdmVyIC5lZGl0LWljb24sXFxuLnRhc2s6aG92ZXIgLmRlbGV0ZS1pY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWVkaXQtZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZWRpdC1pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmVkaXQtdGFzay10aXRsZSB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5lZGl0LXRhc2stZHVlIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb25maXJtLWVkaXQtYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5jb25maXJtLWVkaXQsXFxuLmNhbmNlbC1lZGl0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxufVxcblxcbi5jb25maXJtLWVkaXQ6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0OSwgMjI5LCAxNDksIDAuOSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTQ5LCAyMjksIDE0OSwgMC45KTtcXG59XFxuXFxuLmNhbmNlbC1lZGl0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTYsIDk0LCA5NCwgMC45KTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDk0LCA5NCwgMC45KTtcXG59XFxuXFxuLnByb2plY3QtZm9ybSxcXG4udGFzay1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0taW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG59XFxuXFxuLmZvcm0tYnRucyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmZvcm0tYnRucyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi50YXNrLXN1Ym1pdC1idG46aG92ZXIsXFxuLnByb2plY3Qtc3VibWl0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgxNDksIDIyOSwgMTQ5LCAwLjkpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE0OSwgMjI5LCAxNDksIDAuOSk7XFxufVxcblxcbi50YXNrLWNhbmNlbC1idG46aG92ZXIsXFxuLnByb2plY3QtY2FuY2VsLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgxOTYsIDk0LCA5NCwgMC45KTtcXG4gICAgY29sb3I6cmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE5NiwgOTQsIDk0LCAwLjkpO1xcbn1cXG5cXG4uZGlzcGxheS1mbGV4IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMXB4KSB7XFxuICAgIGh0bWwsXFxuICAgIGJvZHkge1xcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC50YXNrcyB7XFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICAgIGhlYWRlciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICB6LWluZGV4OiA1O1xcbiAgICB9XFxuXFxuICAgIC5uYXYtYnRuIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm5hdi13cmFwIHtcXG4gICAgICAgIHdpZHRoOiAzMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5uYXYtYmFyIHtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgICAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAud3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xcbiAgICB9XFxuXFxuICAgIC53cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7IFxcbiAgICAgICAgZGlzcGxheTogbm9uZTsgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXFxuICAgIH1cXG5cXG4gICAgLndyYXBwZXIgdWw6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmNvbnRlbnQtd3JhcHBlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5tYWluLXdyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAgIG1hcmdpbjogODBweDtcXG4gICAgICAgIGZsZXg6IDI7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUI7O0FBRUE7O0lBRUksY0FBYztJQUNkLHlDQUF5QztJQUN6QyxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFD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QVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixhQUFhO1FBQ2IsZUFBZTtRQUNmLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsd0JBQXdCLEdBQUcsMEJBQTBCO1FBQ3JELHFCQUFxQixHQUFHLFlBQVk7SUFDeEM7O0lBRUE7UUFDSSxhQUFhLEdBQUcsc0JBQXNCO0lBQzFDOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1osT0FBTztRQUNQLGlCQUFpQjtJQUNyQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1ibGFjazogcmdiKDI5LCAyOSwgMjkpO1xcbiAgICAtLXdoaXRlOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxuICAgIC0tZ3JleTogcmdiKDEyMSwgMTIxLCAxMjEpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbn1cXG5cXG4jaGVhZGVyLWJhciB7XFxuICAgIHBhZGRpbmc6IDE4cHggMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDc1LCA3NSwgNzUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMTksIDIxOSwgMjE5KTtcXG4gICAgY29sb3I6cmdiKDM3LCAzNywgMzcpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggdmFyKC0tZ3JleSk7XFxuICAgIC8qIHByZXZlbnQgaGlnaGxpZ2h0cyAqL1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXFxuICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSwgRWRnZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2VsZWN0aW9uIGksXFxuLmFkZC1wcm9qZWN0LWJ0biBpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uc2VsZWN0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjA0LCAyMDQsIDIwNCk7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjlyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhYiA+ICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcXG4gICAgY29sb3I6cmdiKDE5MCwgMzksIDM5KTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgLnByb2plY3QtZGVsZXRlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxufVxcblxcbi5pbmZvLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZS1pY29uIHtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5zaWRlLWljb25zLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZWRpdC1pY29uLFxcbi5kZWxldGUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLmVkaXQtaWNvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5kZWxldGUtaWNvbjpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMTkwLCAzOSwgMzkpO1xcbn1cXG5cXG4udGFzazpob3ZlciAuZWRpdC1pY29uLFxcbi50YXNrOmhvdmVyIC5kZWxldGUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1lZGl0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmVkaXQtaW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5lZGl0LXRhc2stdGl0bGUge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZWRpdC10YXNrLWR1ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29uZmlybS1lZGl0LWJ1dHRvbnMge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uY29uZmlybS1lZGl0LFxcbi5jYW5jZWwtZWRpdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbn1cXG5cXG4uY29uZmlybS1lZGl0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNDksIDIyOSwgMTQ5LCAwLjkpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0OSwgMjI5LCAxNDksIDAuOSk7XFxufVxcblxcbi5jYW5jZWwtZWRpdDpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0sXFxuLnRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxufVxcblxcbi5mb3JtLWJ0bnMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5mb3JtLWJ0bnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4udGFzay1zdWJtaXQtYnRuOmhvdmVyLFxcbi5wcm9qZWN0LXN1Ym1pdC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMTQ5LCAyMjksIDE0OSwgMC45KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxNDksIDIyOSwgMTQ5LCAwLjkpO1xcbn1cXG5cXG4udGFzay1jYW5jZWwtYnRuOmhvdmVyLFxcbi5wcm9qZWN0LWNhbmNlbC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxuICAgIGNvbG9yOnJnYigyMzUsIDIzNSwgMjM1KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxOTYsIDk0LCA5NCwgMC45KTtcXG59XFxuXFxuLmRpc3BsYXktZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjFweCkge1xcbiAgICBodG1sLFxcbiAgICBib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgfVxcblxcbiAgICAudGFza3Mge1xcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xcbiAgICBoZWFkZXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgei1pbmRleDogNTtcXG4gICAgfVxcblxcbiAgICAubmF2LWJ0biB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtd3JhcCB7XFxuICAgICAgICB3aWR0aDogMzAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgfVxcblxcbiAgICAubmF2LWJhciB7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgLndyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cXG4gICAgfVxcblxcbiAgICAud3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7ICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xcbiAgICB9XFxuXFxuICAgIC53cmFwcGVyIHVsOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5jb250ZW50LXdyYXBwZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAubWFpbi13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICBtYXJnaW46IDgwcHg7XFxuICAgICAgICBmbGV4OiAyO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0YXNrTW9kdWxlIGZyb20gJy4vdGFzay5qcyc7XG5pbXBvcnQgcHJvamVjdE1vZHVsZSBmcm9tICcuL3Byb2plY3QuanMnO1xuXG4vL1BBR0UgQkVIQVZJT1VSXG5jb25zdCBuYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJ0bicpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1iYXInKTtcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG5jb25zdCBhZGRQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbmNvbnN0IGFkZFByb2pCdG5TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zdWJtaXQtYnRuJyk7XG5jb25zdCBhZGRUYXNrQnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stc3VibWl0LWJ0bicpO1xuY29uc3QgcHJvamVjdEJ0bkNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhbmNlbC1idG4nKTtcbmNvbnN0IHRhc2tCdG5DYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jYW5jZWwtYnRuJyk7XG5sZXQgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuY29uc3QgZGF5VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheScpO1xuY29uc3Qgd2Vla1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrJyk7XG5cbmNvbnN0IHBhZ2VGdW5jdGlvbnMgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGRyb3Bkb3duTWVudSgpIHtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2Rpc3BsYXknKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJtaXRQcm9qZWN0Rm9ybShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9nZXQgdGl0bGUgb2YgcHJvamVjdCBmcm9tIGZvcm1cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtIGlucHV0JykudmFsdWU7XG4gICAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5wdXQgcmVxdWlyZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2plY3RNb2R1bGUucHJvamVjdEV4aXN0cyh0aXRsZSkpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUHJvamVjdCBhbHJlYWR5IGV4aXN0cyFcIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL2FkZCBET00gZWxlbWVudHNcbiAgICAgICAgYWRkUHJvamVjdExpbmsodGl0bGUpO1xuICAgICAgICAvL2NyZWF0ZSBpbnN0YW5jZSBvZiBwcm9qZWN0IGZyb20gZmFjdG9yeVxuICAgICAgICBwcm9qZWN0TW9kdWxlLmFkZE5ld1Byb2plY3QodGl0bGUpO1xuICAgICAgICBjYW5jZWxGb3JtKHByb2plY3RGb3JtLCBhZGRQcm9qQnRuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJtaXRUYXNrRm9ybShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9nZXQgdGl0bGUgb2YgdGFzayBmcm9tIGZvcm1cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtIGlucHV0JykudmFsdWU7XG4gICAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5wdXQgcmVxdWlyZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy9hZGQgRE9NIGVsZW1lbnRzXG4gICAgICAgIGFkZFRhc2tDZWxsKHRpdGxlKTtcbiAgICAgICAgLy9jcmVhdGUgaW5zdGFuY2Ugb2YgdGFzayBmcm9tIGZhY3RvcnlcbiAgICAgICAgdGFza01vZHVsZS5hZGROZXdUYXNrKHRpdGxlKTtcbiAgICAgICAgY2FuY2VsRm9ybSh0YXNrRm9ybSwgYWRkVGFza0J0bik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tMaW5rKGUpIHtcbiAgICAgICAgbGV0IGxpbmsgPSBlLnRhcmdldDtcbiAgICAgICAgLy9jaGVjayBpZiBzYW1lIGxpbmsgYXMgc2VsZWN0ZWRcbiAgICAgICAgaWYgKHNhbWVMaW5rKGxpbmspKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIGRheSBvciB3ZWVrIHRhYnMgc2VsZWN0ZWRcbiAgICAgICAgaWYgKGxpbmsgPT0gZGF5VGFiIHx8IGxpbmsgPT0gd2Vla1RhYikge1xuICAgICAgICAgICAgcmVtb3ZlUHJldmlvdXNIaWdobGlnaHQoKTtcbiAgICAgICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgaWYgKGxpbmsgPT0gZGF5VGFiKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE1vZHVsZS5jaGFuZ2VQcm9qZWN0KDEpO1xuICAgICAgICAgICAgICAgIC8vZ2V0IHRhc2tzIHRoYXQgY29pbmNpZGUgd2l0aCBkYXRlIHRvZGF5XG4gICAgICAgICAgICAgICAgdGFza01vZHVsZS5zaG93VGFza3NUb2RheShnZXREYXRlVG9kYXkoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2plY3RNb2R1bGUuY2hhbmdlUHJvamVjdCgyKTtcbiAgICAgICAgICAgICAgICAvL2dldCB0YXNrcyB0aGF0IGNvaW5jaWRlIHdpdGggNyBkYXlzIGFoZWFkLCBpbmNsdWRpbmcgdG9kYXlcbiAgICAgICAgICAgICAgICB0YXNrTW9kdWxlLnNob3dXZWVrVGFza3MoZ2V0V2VlaygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXRyYXNoLWFsdCcpKSB7XG4gICAgICAgICAgICAvL2lnbm9yZSBkZWxldGUgYnV0dG9uIGVsZW1lbnRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RMaW5rKGxpbmspO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdExpbmsobGluaykge1xuICAgICAgICByZW1vdmVQcmV2aW91c0hpZ2hsaWdodCgpO1xuICAgICAgICAvL3N3aXRjaCB0byBzZWxlY3RlZCBsaW5rXG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgLy9jaGFuZ2UgcHJvamVjdCBjdXJyUHJvaiB0byBzZWxlY3RlZCBsaW5rJ3MgZGF0YW51bVxuICAgICAgICBwcm9qZWN0TW9kdWxlLmNoYW5nZVByb2plY3QobGluay5kYXRhc2V0Lm51bSk7XG4gICAgICAgIC8vY2xlYXIgcHJldmlvdXMgY29udGVudCBvZiBwcm9qZWN0XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICAvL3VwZGF0ZSBjb250ZW50IHdpdGggY3VyclByb2oncyB0YXNrc1xuICAgICAgICB1cGRhdGVDb250ZW50KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2FtZUxpbmsobGluaykge1xuICAgICAgICByZXR1cm4gKGxpbmtTZWxlY3RlZCgpID09IGxpbmspO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpbmtTZWxlY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVByZXZpb3VzSGlnaGxpZ2h0KCkge1xuICAgICAgICBjb25zdCBoaWdobGlnaHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuICAgICAgICBpZiAoIWhpZ2hsaWdodGVkKSByZXR1cm47XG4gICAgICAgIGhpZ2hsaWdodGVkLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgLy9ldmVudCBsaXN0ZW5lcnMgZm9yIG5hdkJ0biBhbmQgYWRkIHByb2plY3QgYnRuXG4gICAgbmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZHJvcGRvd25NZW51KTtcbiAgICAvL3Bhc3NlcyBmdW5jdGlvbiB0byB3YWl0IGZvciBldmVudCBiZWZvcmUgY2FsbGluZyB0b2dnbGVGb3Jtc1xuICAgIGFkZFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVGb3JtKHByb2plY3RGb3JtLCBhZGRQcm9qQnRuKSk7XG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZUZvcm0odGFza0Zvcm0sIGFkZFRhc2tCdG4pKTtcbiAgICBwcm9qZWN0QnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FuY2VsRm9ybShwcm9qZWN0Rm9ybSwgYWRkUHJvakJ0bikpO1xuICAgIHRhc2tCdG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYW5jZWxGb3JtKHRhc2tGb3JtLCBhZGRUYXNrQnRuKSk7XG4gICAgYWRkUHJvakJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFByb2plY3RGb3JtKTtcbiAgICBhZGRUYXNrQnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0VGFza0Zvcm0pO1xuICAgIC8vZXZlbnQgbGlzdGVuZXIgZm9yIGNsaWNrcyBvbiBwcm9qZWN0IHRhYnNcbiAgICBsaXN0SXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0xpbmspKTtcblxuICAgIHJldHVybiB7Y2hlY2tMaW5rLCBsaW5rU2VsZWN0ZWR9O1xufSkoKTtcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgdGFza3MuaW5uZXJIVE1MID0gJyc7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRlbnQoKSB7XG4gICAgdGFza01vZHVsZS5zZXRDdXJyZW50VGFza3MocHJvamVjdE1vZHVsZS5jdXJyZW50UHJvamVjdFNlbGVjdGVkKCkpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVGb3JtKC4uLmFyZ3MpIHtcbiAgICBhcmdzLmZvckVhY2goYXJncyA9PiBhcmdzLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc3BsYXknKSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUZvcm1GbGV4KC4uLmFyZ3MpIHtcbiAgICBhcmdzLmZvckVhY2goYXJncyA9PiBhcmdzLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc3BsYXktZmxleCcpKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsRm9ybShlbGVtZW50MSwgZWxlbWVudDIpIHtcbiAgICBlbGVtZW50MS5yZXNldCgpO1xuICAgIHRvZ2dsZUZvcm0oZWxlbWVudDEsIGVsZW1lbnQyKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZVRvZGF5KCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiBmb3JtYXREYXRlKGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtmaWxsU2luZ2xlTnVtKGRhdGUuZ2V0TW9udGgoKSArIDEpfS0ke2ZpbGxTaW5nbGVOdW0oZGF0ZS5nZXREYXRlKCkpfWApO1xufVxuXG5mdW5jdGlvbiBnZXRXZWVrKCkge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSArIGkpO1xuICAgICAgICByZXN1bHQucHVzaChmb3JtYXREYXRlKGAke2QuZ2V0RnVsbFllYXIoKX0tJHtmaWxsU2luZ2xlTnVtKGQuZ2V0TW9udGgoKSArIDEpfS0ke2ZpbGxTaW5nbGVOdW0oZC5nZXREYXRlKCkpfWApIClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmaWxsU2luZ2xlTnVtKG51bSkge1xuICAgIGlmIChudW0gPCAxMCkge1xuICAgICAgICByZXR1cm4gYDAke251bX1gXG4gICAgfVxuICAgIHJldHVybiBudW07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlXG4gICAgICAgICAgICAuc3BsaXQoJy0nKVxuICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgLmpvaW4oJy8nKTtcbn1cblxuY29uc3QgYWRkUHJvamVjdExpbmsgPSAocHJvamVjdE5hbWUsIGRhdGFOdW0gPSBwcm9qZWN0TW9kdWxlLm51bU9mUHJvamVjdHMoKSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5cbiAgICAvL2NyZWF0ZSBuZXcgbGlzdCBlbGVtZW50LCBzZXQgZGF0YXNldCBsaW5rIHRvIHByb2plY3QoY291bnQpO1xuICAgIGNvbnN0IG5ld0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG5ld0xpbmsuY2xhc3NOYW1lID0gXCJzZWxlY3Rpb24gcHJvamVjdCB0YWJcIjtcbiAgICBuZXdMaW5rLmRhdGFzZXQubnVtID0gZGF0YU51bTtcbiAgICAvL2NyZWF0ZSBpY29uXG4gICAgY29uc3QgbGVmdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0V3JhcHBlci5jbGFzc05hbWUgPSAncHJvamVjdC1pbmZvJ1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgaWNvbi5jbGFzc05hbWUgPSAnZmFyIGZhLWxpc3QtYWx0JztcbiAgICAvL2NyZWF0ZSBkZWZhdWx0IHByb2plY3QgbmFtZVxuICAgIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcm9qVGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3QtdGl0bGUnO1xuICAgIHByb2pUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIC8vY3JlYXRlIGRlbGV0ZSBidXR0b24gLSB0byBiZSBzaG93biBvbmx5IG9uIGhvdmVyXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlbGV0ZUljb24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdFwiPjwvaT4nXG4gICAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSAncHJvamVjdC1kZWxldGUnO1xuICAgIFxuICAgIC8vYXBwZW5kIGNoaWxkcmVuIHRvIGxpbmtcbiAgICBsZWZ0V3JhcHBlci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBsZWZ0V3JhcHBlci5hcHBlbmRDaGlsZChwcm9qVGl0bGUpO1xuICAgIG5ld0xpbmsuYXBwZW5kQ2hpbGQobGVmdFdyYXBwZXIpO1xuICAgIG5ld0xpbmsuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgICAvL2FwcGVuZCBsaW5rIHRvIHByb2plY3RcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChuZXdMaW5rKTtcblxuICAgIG5ld0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwYWdlRnVuY3Rpb25zLmNoZWNrTGluayk7XG5cbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGVsZXRlUHJvamVjdExpbmsobmV3TGluaykpO1xufVxuXG5jb25zdCByZW1vdmVQcm9qZWN0TGluayA9IChsaW5rVG9SZW1vdmUsIG51bSkgPT4ge1xuICAgIGxpbmtUb1JlbW92ZS5yZW1vdmUoKTtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAvL3VwZGF0ZSBwcm9qZWN0QXJyYXlcbiAgICBwcm9qZWN0TW9kdWxlLmRlbGV0ZVByb2oobnVtKTtcbn1cblxuY29uc3QgdXBkYXRlUHJvamVjdE51bXM9IChkYXRhTnVtKSA9PiB7XG4gICAgY29uc3QgcmVtYWluaW5nUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbnVtXVwiKTtcbiAgICAvL2dldCBhcnJheSBmcm9tIHJlbWFpbmluZyBwcm9qZWN0IG5vZGVzXG4gICAgbGV0IHByb2plY3RzQXJyID0gQXJyYXkuZnJvbShyZW1haW5pbmdQcm9qZWN0cyk7XG4gICAgLy9maWx0ZXIgYXJyYXkgdG8gb25seSBpbmNsdWRlIHByb2plY3RzIGFmdGVyIGRlbGV0ZWQgcHJvamVjdFxuICAgIGxldCBwcm9qZWN0c1RvVXBkYXRlID0gcHJvamVjdHNBcnIuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5kYXRhc2V0Lm51bSA+IGRhdGFOdW0pO1xuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHNUb1VwZGF0ZSkge1xuICAgICAgICAvL2l0ZXJhdGUgdGhyb3VnaCBlYWNoIHByb2plY3RcbiAgICAgICAgLy91cGRhdGUgdGhlaXIgZGF0YS1udW1cbiAgICAgICAgcHJvamVjdC5kYXRhc2V0Lm51bSAtPSAxO1xuICAgICAgICAvL3VwZGF0ZSBwcm9qZWN0QXJyYXkgYW5kIHNhdmUgdG8gbG9jYWxTdG9yYWdlXG4gICAgfVxufVxuXG5jb25zdCBkZWxldGVQcm9qZWN0TGluayA9IChsaW5rKSA9PiB7XG4gICAgY29uc3QgZGF0YU51bSA9IGxpbmsuZGF0YXNldC5udW07XG4gICAgLy9yZW1vdmUgaHRtbCBlbGVtZW50XG4gICAgcmVtb3ZlUHJvamVjdExpbmsobGluaywgZGF0YU51bSk7XG4gICAgdXBkYXRlUHJvamVjdE51bXMoZGF0YU51bSk7XG59XG5cbmNvbnN0IGFkZFRhc2tDZWxsID0gKHRhc2tOYW1lLCBkdWVEYXRlLCBjb21wbGV0ZWQsIGRhdGFOdW0gPSB0YXNrTW9kdWxlLm51bU9mVGFza3MoKSkgPT4ge1xuXG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgICAvL2NyZWF0ZSBkaXYgZWxlbWVudCB0byB3cmFwIGJvdGggdGFzayBpbmZvIGFuZCBlZGl0IGluZm9cbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFzay5jbGFzc05hbWUgPSAndGFzayc7XG4gICAgbmV3VGFzay5kYXRhc2V0Lm51bSA9IGRhdGFOdW07IC8vZGF0YXNldCBudW0gdG8gaWRlbnRpZnkgdGFzayBpbnN0YW5jZSBpbiBwcm9qZWN0IC0gdGFza0xpc3QgYXJyYXlcbiAgICBcbiAgICAvL2NyZWF0ZSBkaXYgdG8gaG9sZCBhbGwgdGFza0luZm8gaW4gZmxleGJveFxuICAgIGNvbnN0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0luZm8uY2xhc3NOYW1lID0gJ2luZm8td3JhcHBlciBkaXNwbGF5LWZsZXgnO1xuXG4gICAgLy9jcmVhdGUgaWNvbiBlbGVtZW50IC0gc3R5bGVkIHRvIGNpcmNsZSAtIHRvIHJlZmxlY3QgcHJpb3JpdHkgb2YgdGFza1xuICAgIGNvbnN0IGNvbXBsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbXBsZXRlSWNvbi5jbGFzc05hbWUgPSAnY29tcGxldGUtaWNvbic7XG5cbiAgICAvL2NyZWF0ZSBzcGFuIGVsZW1lbnQgZm9yIHRhc2sgdGl0bGVcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGFza1RpdGxlLmNsYXNzTmFtZSA9ICd0YXNrLW5hbWUnO1xuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tOYW1lO1xuXG4gICAgLy9jcmVhdGUgZGl2IGVsZW1lbnQgdG8gc3RvcmUgZGF0ZSAtIHRvIGJlIGNoYW5nZWQgdXBvbiBlZGl0XG4gICAgLy9jcmVhdGUgZWRpdCBmb3JtIGZvciB0aGlzIHRvbywgdG8gc2VsZWN0IGRhdGVcbiAgICBjb25zdCB0YXNrRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0R1ZS5jbGFzc05hbWUgPSAnZGF0ZSc7XG4gICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IGR1ZURhdGUgfHwgZ2V0RGF0ZVRvZGF5KClcblxuICAgIC8vYXBwZW5kIGVkaXQgYW5kIGRlbGV0ZSBpY29ucyB0byByaWdodCBzaWRlIG9mIGRhdGUgZGl2LlxuICAgIGNvbnN0IHNpZGVJY29uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlSWNvbnNXcmFwcGVyLmNsYXNzTmFtZSA9ICdzaWRlLWljb25zLXdyYXBwZXInXG4gICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWRpdEljb24uY2xhc3NOYW1lID0gJ2VkaXQtaWNvbic7XG4gICAgZWRpdEljb24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLWVkaXRcIj48L2k+JztcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NOYW1lID0gJ2RlbGV0ZS1pY29uJztcbiAgICBkZWxldGVJY29uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHRcIj48L2k+JztcbiAgICBzaWRlSWNvbnNXcmFwcGVyLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICBzaWRlSWNvbnNXcmFwcGVyLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gICAgLy9hcHBlbmQgZWxlbWVudHMgdG8gdGFzayBkaXYsIHRoZW4gYXBwZW5kIHRhc2sgZGl2IHRvIGxpc3QgZGl2XG4gICAgLy9NQUlOIFRBU0sgQ0VMTFxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKGNvbXBsZXRlSWNvbik7XG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrRHVlKTtcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChzaWRlSWNvbnNXcmFwcGVyKTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcblxuICAgIC8vY2hlY2sgaWYgdGFzayBpcyBjb21wbGV0ZSBhY2NvcmRpbmcgdG8gaW5wdXQgcGFyYW1ldGVyc1xuICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgZWRpdFRhc2suY29tcGxldGVUYXNrKG5ld1Rhc2spO1xuICAgIH1cblxuICAgIC8vY3JlYXRlIHRhc2sgZWRpdCBmb3JtXG4gICAgY29uc3QgdGFza0VkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRhc2tFZGl0Rm9ybS5jbGFzc05hbWUgPSAndGFzay1lZGl0LWZvcm0nOyAvL3RvIGRpc3BsYXkgZmxleFxuICAgIC8vd3JhcHBlciBmb3IgaW5wdXQgZWxlbWVudHNcbiAgICBjb25zdCBlZGl0SW5wdXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdElucHV0cy5jbGFzc05hbWUgPSAnZWRpdC1pbnB1dHMnO1xuICAgIC8vaW5wdXQgZWxlbWVudHNcbiAgICBjb25zdCBlZGl0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVkaXRUaXRsZS5jbGFzc05hbWUgPSAnZWRpdC10YXNrLXRpdGxlJztcbiAgICBjb25zdCBlZGl0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZWRpdERhdGUuY2xhc3NOYW1lID0gJ2VkaXQtdGFzay1kdWUnO1xuICAgIGVkaXREYXRlLnR5cGUgPSAndGV4dCc7XG4gICAgXG4gICAgLy9idXR0b24gd3JhcHBlclxuICAgIGNvbnN0IGNvbmZpcm1CdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uZmlybUJ0bnMuY2xhc3NOYW1lID0gJ2NvbmZpcm0tZWRpdC1idXR0b25zJztcbiAgICAvL2J1dHRvbnNcbiAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uZmlybUJ0bi5jbGFzc05hbWUgPSAnY29uZmlybS1lZGl0JztcbiAgICBjb25maXJtQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSAnY2FuY2VsLWVkaXQnO1xuICAgIGNhbmNlbEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cbiAgICAvL2FwcGVuZCB0byBmb3JtIGVsZW1lbnRcbiAgICBlZGl0SW5wdXRzLmFwcGVuZENoaWxkKGVkaXRUaXRsZSk7XG4gICAgZWRpdElucHV0cy5hcHBlbmRDaGlsZChlZGl0RGF0ZSk7XG4gICAgY29uZmlybUJ0bnMuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG4gICAgY29uZmlybUJ0bnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICB0YXNrRWRpdEZvcm0uYXBwZW5kQ2hpbGQoZWRpdElucHV0cyk7XG4gICAgdGFza0VkaXRGb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1CdG5zKTtcblxuICAgIC8vYXBwZW5kIHRhc2stZWRpdC1mb3JtIHRvIHRhc2sgZWxlbWVudFxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza0VkaXRGb3JtKTtcblxuICAgIC8vYWRkIHRvIERPTVxuICAgIHRhc2tzLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lciBmb3IgdGFzayBjb21wbGV0aW9uXG4gICAgY29tcGxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvL2NoYW5nZSB0YXNrIGluc3RhbmNlIGluIHRhc2tNb2R1bGVcbiAgICAgICAgdGFza01vZHVsZS50b2dnbGVDb21wbGV0ZShuZXdUYXNrLmRhdGFzZXQubnVtKTtcblxuICAgICAgICAvL2NoZWNrIGlmIHRhc2sgY29tcGxldGVkIGFscmVhZHlcbiAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICBlZGl0VGFzay51bmNvbXBsZXRlVGFzayhuZXdUYXNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICBlZGl0VGFzay5jb21wbGV0ZVRhc2sobmV3VGFzayk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vZXZlbnQgbGlzdGVuZXJzIGZvciBzaWRlIGljb25zXG4gICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlZGl0VGFzay5kaXNwbGF5RWRpdChuZXdUYXNrKSk7XG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVkaXRUYXNrLmRlbGV0ZVRhc2sobmV3VGFzaykpO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lcnMgZm9yIGVkaXQgZm9ybVxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlZGl0VGFzay5zdWJtaXRFZGl0KG5ld1Rhc2spKTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlZGl0VGFzay5yZXNldEVkaXQobmV3VGFzaykpO1xuICAgIC8vZXZlbnRMaXN0ZW5lcnMgZm9yIGZvcm1hdHRpbmcgb2YgZGF0ZVxuICAgIGVkaXREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnRhcmdldC50eXBlID0gXCJkYXRlXCI7XG4gICAgfSk7XG4gICAgZWRpdERhdGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC50YXJnZXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBpZiAoIWVkaXREYXRlLnZhbHVlKSB7XG4gICAgICAgICAgICBlZGl0RGF0ZS52YWx1ZSA9IGdldERhdGVUb2RheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBlZGl0RGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIGVkaXREYXRlLnZhbHVlID0gZm9ybWF0RGF0ZShkYXRlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5jb25zdCBlZGl0VGFzayA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY29tcGxldGVUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgY29tcGxldGVJY29uID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGUtaWNvbicpO1xuICAgICAgICBjb21wbGV0ZUljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDgxLCAxOTIsIDgxLCAwLjI1MyknO1xuICAgICAgICB0YXNrLnN0eWxlLmNvbG9yID0gJ3JnYigxNTAsIDE1MCwgMTUwKSc7XG4gICAgICAgIHRhc2suc3R5bGUuYm9yZGVyQ29sb3IgPSAncmdiKDE1MCwgMTUwLCAxNTApJztcbiAgICAgICAgdGFzay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuY29tcGxldGVUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgY29tcGxldGVJY29uID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGUtaWNvbicpO1xuICAgICAgICBjb21wbGV0ZUljb24uc3R5bGUuYmFja2dyb3VuZCA9ICdpbmhlcml0JztcbiAgICAgICAgdGFzay5zdHlsZS5jb2xvciA9ICd2YXIoLS1ibGFjayknO1xuICAgICAgICB0YXNrLnN0eWxlLmJvcmRlckNvbG9yID0gJ3ZhcigtLWdyZXkpJztcbiAgICAgICAgdGFzay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5RWRpdCh0YXNrKSB7XG4gICAgICAgIC8vc2hvdyBlZGl0IGZvcm0sIGRpc3BsYXkgb2ZmIGZvciB0YXNrIGluZm9cbiAgICAgICAgY29uc3QgdGFza0luZm8gPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXQtZm9ybScpO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKTtcbiAgICAgICAgY29uc3QgdGFza0R1ZSA9IHRhc2sucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbiAgICAgICAgY29uc3QgZWRpdFRpdGxlID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IGVkaXREdWUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZHVlJyk7XG5cbiAgICAgICAgZWRpdFRpdGxlLnZhbHVlID0gdGFza1RpdGxlLnRleHRDb250ZW50O1xuICAgICAgICBlZGl0RHVlLnZhbHVlID0gdGFza0R1ZS50ZXh0Q29udGVudDtcbiAgICBcbiAgICAgICAgdG9nZ2xlRm9ybUZsZXgodGFza0luZm8sIHRhc2tGb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldEVkaXQodGFzaykge1xuICAgICAgICAvL3Jlc2V0IGZvcm0sIHRvZ2dsZSBkaXNwbGF5RWRpdFxuICAgICAgICB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWVkaXQtZm9ybScpLnJlc2V0KCk7XG5cbiAgICAgICAgZGlzcGxheUVkaXQodGFzayk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VibWl0RWRpdCh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2sucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpO1xuICAgICAgICBjb25zdCB0YXNrRHVlID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuICAgICAgICBjb25zdCBlZGl0ZWRUaXRsZSA9IHRhc2sucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay10aXRsZScpO1xuICAgICAgICBjb25zdCBlZGl0ZWREdWUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZHVlJyk7XG5cbiAgICAgICAgLy91cGRhdGUgdGFzayBpbnN0YW5jZSBpbiB0YXNrTW9kdWxlXG4gICAgICAgIHRhc2tNb2R1bGUudXBkYXRlVGFza0luZm8odGFzay5kYXRhc2V0Lm51bSwgZWRpdGVkVGl0bGUudmFsdWUsIGVkaXRlZER1ZS52YWx1ZSk7XG5cbiAgICAgICAgLy9jaGFuZ2UgdGFzayB0aXRsZSBhbmQgZGF0ZSBhY2NvcmRpbmcgdG8gZm9ybVxuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBlZGl0ZWRUaXRsZS52YWx1ZTtcbiAgICAgICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUoZWRpdGVkRHVlLnZhbHVlKTtcblxuICAgICAgICByZXNldEVkaXQodGFzayk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrKSB7XG4gICAgICAgIC8vaGF2ZSB0byBjbGVhciB0YXNrcyBhbmQgcmVjcmVhdGUgYWxsIGluc3RhbmNlcyBhZ2FpbiwgYXMgZGF0YU51bSBpcyBzcHJlYWQgb3V0XG4gICAgICAgIGNsZWFyVGFza3MoKTtcbiAgICAgICAgLy9yZW1vdmUgaW5zdGFuY2UgYW5kIHJlc2V0IGxpc3RcbiAgICAgICAgcmVtb3ZlVGFza0luc3RhbmNlKHRhc2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2tJbnN0YW5jZSh0YXNrKSB7XG4gICAgICAgIC8vcmVtb3ZlIGZyb20gdGFzayBhcnJheVxuICAgICAgICB0YXNrTW9kdWxlLmRlbGV0ZVRhc2sodGFzay5kYXRhc2V0Lm51bSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJUYXNrcygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtkaXNwbGF5RWRpdCwgcmVzZXRFZGl0LCBzdWJtaXRFZGl0LCBjb21wbGV0ZVRhc2ssIHVuY29tcGxldGVUYXNrLCBkZWxldGVUYXNrfVxufSkoKTtcblxuY29uc3QgVUkgPSB7XG4gICAgYWRkUHJvamVjdExpbmssXG4gICAgYWRkVGFza0NlbGwsXG4gICAgZ2V0RGF0ZVRvZGF5LFxuICAgIGdldFdlZWtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVJOyIsImltcG9ydCBzdG9yYWdlTW9kdWxlIGZyb20gJy4vc3RvcmFnZS5qcyc7XG5pbXBvcnQgVUlNb2R1bGUgZnJvbSAnLi9VSS5qcyc7XG5pbXBvcnQgdGFza01vZHVsZSBmcm9tICcuL3Rhc2suanMnO1xuXG4vL0ZBQ1RPUlkgRlVOQ1RJT04gRk9SIFBST0pFQ1RTXG5jb25zdCBDcmVhdGVQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgLy9pbml0aWFsaXNlIHByb2plY3QgYXJyYXlcbiAgICBsZXQgZGF0YU51bTtcblxuICAgIC8vZnVuY3Rpb24gdG8gc2V0IHRpdGxlXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzZXREYXRhTnVtKG51bSkge1xuICAgICAgICB0aGlzLmRhdGFOdW0gPSBudW07XG4gICAgfVxuXG4gICAgcmV0dXJuIHt0aXRsZSwgc2V0VGl0bGUsIGRhdGFOdW0sIHNldERhdGFOdW19O1xufVxuXG4vL2luaXRpYWwgbG9hZCBvZiB3ZWJwYWdlIC0gXG5sZXQgY3VyclByb2o7XG5sZXQgcHJvakFycmF5ID0gW107XG5cbi8vY2hlY2sgaWYgc3RvcmFnZSBoYXMgZmlyc3QgZWxlbWVudFxuaWYgKHN0b3JhZ2VNb2R1bGUuaGFzUHJvamVjdHMoKSkge1xuICAgIHByb2pBcnJheSA9IHN0b3JhZ2VNb2R1bGUuZ2V0UHJvamVjdHMoKTtcbiAgICBjdXJyUHJvaiA9IHByb2pBcnJheVswXTtcbiAgICAvL2dldCBtb3JlIGlmIHN0b3JhZ2UgZXhpc3RzXG4gICAgc2hvd1Byb2plY3RzKCk7XG59IGVsc2UgeyAvL2Vsc2UgY3JlYXRlIG93biBwcm9qZWN0IGFuZCBzYXZlIHRvIHN0b3JhZ2VcbiAgICBjdXJyUHJvaiA9IENyZWF0ZVByb2plY3QoJ2luYm94Jyk7XG4gICAgY3VyclByb2ouc2V0RGF0YU51bSgwKTtcbiAgICAvL3NhdmUgdG8gbG9jYWxTdG9yYWdlIHVuZGVyIHByb2plY3RzXG4gICAgYWRkVG9BcnJheShjdXJyUHJvaik7XG5cbiAgICBjb25zdCBkYXlQcm9qID0gQ3JlYXRlUHJvamVjdCgndG9kYXknKTtcbiAgICBkYXlQcm9qLnNldERhdGFOdW0oMSk7XG4gICAgYWRkVG9BcnJheShkYXlQcm9qKTtcblxuICAgIGNvbnN0IHdlZWtQcm9qID0gQ3JlYXRlUHJvamVjdCgndGhpcyB3ZWVrJyk7XG4gICAgd2Vla1Byb2ouc2V0RGF0YU51bSgyKTtcbiAgICBhZGRUb0FycmF5KHdlZWtQcm9qKTtcbn1cblxuXG5mdW5jdGlvbiBzaG93UHJvamVjdHMoKSB7IC8vY2hlY2sgaWYgdGhlcmUgYXJlIGV4aXN0aW5nIHByb2plY3RzIGluIHN0b3JhZ2VcbiAgICBpZiAocHJvakFycmF5Lmxlbmd0aCA+IDMpIHtcbiAgICAgICAgY29uc3QgbGVuID0gcHJvakFycmF5Lmxlbmd0aDtcbiAgICAgICAgLy9nbyB0aHJvdWdoIGFsbCBzdG9yZWQgcHJvamVjdHMgYW5kIGFkZCB0aGVtIHRvIGxpbmtcbiAgICAgICAgZm9yIChsZXQgaSA9IDM7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IHByb2ogPSBwcm9qQXJyYXlbaV07XG4gICAgICAgICAgICBVSU1vZHVsZS5hZGRQcm9qZWN0TGluayhwcm9qLnRpdGxlLCBwcm9qLmRhdGFOdW0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qKG51bSkge1xuICAgIGxldCBwcm9qZWN0ID0gcHJvakFycmF5W251bV07XG4gICAgLy9kZWxldGUgYWxsIHRhc2tzIGluIHByb2plY3RcbiAgICB0YXNrTW9kdWxlLmRlbGV0ZVByb2plY3RUYXNrcyhwcm9qZWN0LnRpdGxlKTtcbiAgICAvL3NwbGl0IGFycmF5IGludG8gdHdvLCByZW1vdmluZyBhZmZlY3RpbmcgZWxlbWVudFxuICAgIGxldCBmaXJzdEhhbGZBcnJheSA9IHByb2pBcnJheS5zbGljZSgwLCBudW0pO1xuICAgIGxldCBzZWNvbmRIYWxmQXJyYXkgPSBwcm9qQXJyYXkuc2xpY2UocGFyc2VJbnQobnVtKSArIDEpO1xuICAgIC8vdXBkYXRlIGRhdGFOdW0gb2YgcmVtYWluaW5nIHRhYnNcbiAgICBzZWNvbmRIYWxmQXJyYXkuZm9yRWFjaChlID0+IGUuZGF0YU51bSAtPSAxKTtcbiAgICBcbiAgICAvL2Fzc2lnbiBhcnJheSBiYWNrIHRvIG9yaWdpbmFsIHByb2pBcnJheVxuICAgIGxldCB0ZW1wQXJyYXkgPSBmaXJzdEhhbGZBcnJheS5jb25jYXQoc2Vjb25kSGFsZkFycmF5KTtcbiAgICB1cGRhdGVBcnJheSh0ZW1wQXJyYXkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBcnJheShhcnIpIHtcbiAgICBwcm9qQXJyYXkgPSBhcnI7XG4gICAgc2F2ZUFycmF5KCk7XG59XG5cblxuZnVuY3Rpb24gYWRkVG9BcnJheShwcm9qKSB7XG4gICAgcHJvakFycmF5LnB1c2gocHJvaik7XG4gICAgc2F2ZUFycmF5KCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVBcnJheSgpIHtcbiAgICBzdG9yYWdlTW9kdWxlLmFkZFByb2pUb1N0b3JhZ2UocHJvakFycmF5KTtcbn1cblxuZnVuY3Rpb24gY3VycmVudFByb2plY3RTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gY3VyclByb2o7XG59XG5cbi8vc3dpdGNoIHByb2plY3RzIHRvIHNlbGVjdGVkIGZyb20gVUlcbmZ1bmN0aW9uIGNoYW5nZVByb2plY3QoZGF0YU51bSkge1xuICAgIGN1cnJQcm9qID0gcHJvakFycmF5W2RhdGFOdW1dO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0RXhpc3RzKHByb2plY3ROYW1lKSB7XG4gICAgcmV0dXJuIChwcm9qQXJyYXkubWFwKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSkuaW5jbHVkZXMocHJvamVjdE5hbWUpKTtcbn1cblxuLy9BREQgUFJPSkVDVCAvIHNhdmUgdG8gc3RvcmFnZVxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIC8vY3JlYXRlIG5ldyBpbnN0YW5jZSBvZiBwcm9qZWN0XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IENyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIG5ld1Byb2plY3QuZGF0YU51bSA9IHByb2pBcnJheS5sZW5ndGg7XG4gICAgYWRkVG9BcnJheShuZXdQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gbnVtT2ZQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gcHJvakFycmF5Lmxlbmd0aFxufVxuXG5jb25zdCBwcm9qZWN0TW9kdWxlID0ge1xuICAgIENyZWF0ZVByb2plY3QsXG4gICAgYWRkTmV3UHJvamVjdCxcbiAgICBwcm9qZWN0RXhpc3RzLFxuICAgIGNoYW5nZVByb2plY3QsXG4gICAgZGVsZXRlUHJvaixcbiAgICBudW1PZlByb2plY3RzLFxuICAgIGN1cnJlbnRQcm9qZWN0U2VsZWN0ZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1vZHVsZTsiLCJmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgwKSk7XG59XG5cbi8vY2hlY2sgaWYgbG9jYWxTdG9yYWdlIGhhcyBpdGVtc1xuZnVuY3Rpb24gaGFzUHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZVswXTtcbn1cblxuZnVuY3Rpb24gaGFzVGFza3MoKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZVsxXTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvalRvU3RvcmFnZShwcm9qZWN0QXJyYXkpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgwLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oMSkpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9TdG9yYWdlKHRhc2tBcnJheSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKDEsIEpTT04uc3RyaW5naWZ5KHRhc2tBcnJheSkpO1xufVxuXG5jb25zdCBzdG9yYWdlID0ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGhhc1Byb2plY3RzLFxuICAgIGFkZFByb2pUb1N0b3JhZ2UsXG4gICAgZ2V0VGFza3MsXG4gICAgaGFzVGFza3MsXG4gICAgYWRkVGFza1RvU3RvcmFnZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTsiLCJpbXBvcnQgcHJvamVjdE1vZHVsZSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHN0b3JhZ2VNb2R1bGUgZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCBVSU1vZHVsZSBmcm9tICcuL1VJLmpzJ1xuXG4vL0ZBQ1RPUlkgRlVOQ1RJT04gRk9SIFRBU0tTXG5jb25zdCBDcmVhdGVUYXNrID0gKHRpdGxlLCBkdWUsIGNvbXBsZXRlZCkgPT4ge1xuICAgIGxldCBwcm9qZWN0O1xuICAgIGxldCBkYXRhTnVtO1xuICAgIC8vY2hhbmdlIHRpdGxlLCBmbGFnIG9yIGRhdGVcbiAgICBmdW5jdGlvbiBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RHVlKGR1ZSkge1xuICAgICAgICB0aGlzLmR1ZSA9IGR1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3RpdGxlLCBkdWUsIHByb2plY3QsIGNvbXBsZXRlZCwgZGF0YU51bSwgc2V0VGl0bGUsIHNldER1ZX07XG59O1xuXG5sZXQgdGFza0FycmF5ID0gW107XG5sZXQgY3VycmVudFByb2pUYXNrcyA9IFtdO1xuXG4vL2NoZWNrIGlmIHN0b3JhZ2UgaGFzIHRhc2tzXG5pZiAoc3RvcmFnZU1vZHVsZS5oYXNUYXNrcygpKSB7XG4gICAgdGFza0FycmF5ID0gc3RvcmFnZU1vZHVsZS5nZXRUYXNrcygpO1xuICAgIC8vYWRkIHRvIGN1cnJQcm9qQXJyXG4gICAgc2V0Q3VycmVudFRhc2tzKHByb2plY3RNb2R1bGUuY3VycmVudFByb2plY3RTZWxlY3RlZCgpKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGUobnVtKSB7XG4gICAgLy9zZXQgdGFzayBjb21wbGV0ZWQgdG8gb3Bwb3NpdGUgb2YgaXRzZWxmLCBpZGVudGlmaWVkIHdpdGggZGF0YU51bSBmcm9tIFVJTW9kdWxlXG4gICAgdGFza0FycmF5W251bV0uY29tcGxldGVkID0gIXRhc2tBcnJheVtudW1dLmNvbXBsZXRlZDtcbiAgICBzYXZlQXJyYXkoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0luZm8obnVtLCBuZXdUaXRsZSwgbmV3RHVlKSB7XG4gICAgY29uc3QgdGFza1RvQmVFZGl0ZWQgPSB0YXNrQXJyYXlbbnVtXTtcbiAgICB0YXNrVG9CZUVkaXRlZC50aXRsZSA9IG5ld1RpdGxlO1xuICAgIHRhc2tUb0JlRWRpdGVkLmR1ZSA9IG5ld0R1ZTtcblxuICAgIHNhdmVBcnJheSgpO1xufVxuXG5mdW5jdGlvbiBzaG93VGFza3NUb2RheShkYXRlID0gVUlNb2R1bGUuZ2V0RGF0ZVRvZGF5KCkpIHtcbiAgICBjdXJyZW50UHJvalRhc2tzID0gdGFza0FycmF5LmZpbHRlcih0YXNrID0+IHRhc2suZHVlID09IGRhdGUpO1xuICAgIC8vc2hvdyBmaWx0ZXJlZCBhcnJheVxuICAgIHNob3dDdXJyZW50VGFza3MoKTtcbn1cblxuZnVuY3Rpb24gc2hvd1dlZWtUYXNrcyhkYXRlUmFuZ2UgPSBVSU1vZHVsZS5nZXRXZWVrKCkpIHtcbiAgICBsZXQgdG90YWxUYXNrcyA9IFtdO1xuICAgIGZvciAobGV0IGRhdGUgb2YgZGF0ZVJhbmdlKSB7XG4gICAgICAgIGxldCBkYXlBcnJheSA9IHRhc2tBcnJheS5maWx0ZXIodGFzayA9PiB0YXNrLmR1ZSA9PSBkYXRlKTtcbiAgICAgICAgdG90YWxUYXNrcyA9IHRvdGFsVGFza3MuY29uY2F0KGRheUFycmF5KTtcbiAgICB9XG4gICAgY3VycmVudFByb2pUYXNrcyA9IHRvdGFsVGFza3M7XG4gICAgc2hvd0N1cnJlbnRUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50VGFza3MocHJvamVjdCkge1xuICAgIGN1cnJlbnRQcm9qVGFza3MgPSB0YXNrQXJyYXkuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ID09IHByb2plY3QudGl0bGUpO1xuICAgIHNob3dDdXJyZW50VGFza3MoKTtcbn1cblxuZnVuY3Rpb24gbnVtT2ZUYXNrcygpIHtcbiAgICByZXR1cm4gdGFza0FycmF5Lmxlbmd0aDtcbn1cblxuZnVuY3Rpb24gc2hvd0N1cnJlbnRUYXNrcygpIHtcbiAgICBjdXJyZW50UHJvalRhc2tzLmZvckVhY2godGFzayA9PiBVSU1vZHVsZS5hZGRUYXNrQ2VsbCh0YXNrLnRpdGxlLCB0YXNrLmR1ZSwgdGFzay5jb21wbGV0ZWQsIHRhc2suZGF0YU51bSkpO1xufVxuXG5mdW5jdGlvbiBhZGRUb0FycmF5KHRhc2spIHtcbiAgICB0YXNrQXJyYXkucHVzaCh0YXNrKTtcbiAgICBzYXZlQXJyYXkoKTtcbn1cblxuZnVuY3Rpb24gc2F2ZUFycmF5KCkge1xuICAgIHN0b3JhZ2VNb2R1bGUuYWRkVGFza1RvU3RvcmFnZSh0YXNrQXJyYXkpO1xufVxuXG5mdW5jdGlvbiBhZGROZXdUYXNrKHRhc2tOYW1lKSB7XG4gICAgLy9uZXcgaW5zdGFuY2UgZnJvbSB0YXNrIGZhY3RvcnlcbiAgICBjb25zdCBuZXdUYXNrID0gQ3JlYXRlVGFzayh0YXNrTmFtZSk7XG4gICAgLy91cGRhdGUgZGF0YU51bVxuICAgIG5ld1Rhc2suZGF0YU51bSA9IHRhc2tBcnJheS5sZW5ndGg7XG4gICAgbmV3VGFzay5kdWUgPSBVSU1vZHVsZS5nZXREYXRlVG9kYXkoKTtcbiAgICAvL3VwZGF0ZSBsaW5raW5nIHByb2plY3RcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ZWQgPSBwcm9qZWN0TW9kdWxlLmN1cnJlbnRQcm9qZWN0U2VsZWN0ZWQoKTtcbiAgICBuZXdUYXNrLnByb2plY3QgPSBwcm9qZWN0U2VsZWN0ZWQudGl0bGU7XG4gICAgLy9hZGQgdG8gdGFzayBhcnJheVxuICAgIGFkZFRvQXJyYXkobmV3VGFzayk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZWFuZFVwZGF0ZUFycmF5KG51bSkge1xuICAgIC8vc3BsaXQgYXJyYXkgaW50byB0d28sIHJlbW92aW5nIGFmZmVjdGluZyBlbGVtZW50XG4gICAgbGV0IGZpcnN0SGFsZkFycmF5ID0gdGFza0FycmF5LnNsaWNlKDAsIG51bSk7XG4gICAgbGV0IHNlY29uZEhhbGZBcnJheSA9IHRhc2tBcnJheS5zbGljZShwYXJzZUludChudW0pICsgMSk7XG4gICAgLy91cGRhdGUgZGF0YU51bSBvZiByZW1haW5pbmcgdGFic1xuICAgIHNlY29uZEhhbGZBcnJheS5mb3JFYWNoKGUgPT4gZS5kYXRhTnVtIC09IDEpO1xuICAgIFxuICAgIC8vYXNzaWduIGFycmF5IGJhY2sgdG8gb3JpZ2luYWwgcHJvakFycmF5XG4gICAgdGFza0FycmF5ID0gZmlyc3RIYWxmQXJyYXkuY29uY2F0KHNlY29uZEhhbGZBcnJheSk7XG4gICAgc2F2ZUFycmF5KCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2sobnVtKSB7XG4gICAgcmVtb3ZlYW5kVXBkYXRlQXJyYXkobnVtKTtcbiAgICB1cGRhdGVBcnJheSgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBcnJheSgpIHtcbiAgICAvL3JlbG9hZCBhbGwgdGFza3MgdG8gY3VycmVudCBwcm9qZWN0IHNlbGVjdGVkXG4gICAgaWYgKHByb2plY3RNb2R1bGUuY3VycmVudFByb2plY3RTZWxlY3RlZCgpLnRpdGxlID09ICd0b2RheScpIHtcbiAgICAgICAgc2hvd1Rhc2tzVG9kYXkoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJvamVjdE1vZHVsZS5jdXJyZW50UHJvamVjdFNlbGVjdGVkKCkudGl0bGUgPT0gJ3RoaXMgd2VlaycpIHtcbiAgICAgICAgc2hvd1dlZWtUYXNrcygpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEN1cnJlbnRUYXNrcyhwcm9qZWN0TW9kdWxlLmN1cnJlbnRQcm9qZWN0U2VsZWN0ZWQoKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RUYXNrcyh0aXRsZSkge1xuICAgIHRhc2tBcnJheS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAodGFzay5wcm9qZWN0ID09IHRpdGxlKSB7XG4gICAgICAgICAgICByZW1vdmVhbmRVcGRhdGVBcnJheSh0YXNrLmRhdGFOdW0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmNvbnN0IHRhc2sgPSB7XG4gICAgQ3JlYXRlVGFzayxcbiAgICBhZGROZXdUYXNrLFxuICAgIHNldEN1cnJlbnRUYXNrcyxcbiAgICBudW1PZlRhc2tzLFxuICAgIHRvZ2dsZUNvbXBsZXRlLFxuICAgIHVwZGF0ZVRhc2tJbmZvLFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgc2hvd1Rhc2tzVG9kYXksXG4gICAgc2hvd1dlZWtUYXNrcyxcbiAgICBkZWxldGVQcm9qZWN0VGFza3Ncbn1cblxuZXhwb3J0IGRlZmF1bHQgdGFzazsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHN0b3JhZ2VNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL3N0b3JhZ2UuanMnO1xuaW1wb3J0IHRhc2tNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL3Rhc2suanMnO1xuaW1wb3J0IHByb2plY3RNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL3Byb2plY3QuanMnO1xuaW1wb3J0IFVJTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9VSS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJzsiXSwic291cmNlUm9vdCI6IiJ9