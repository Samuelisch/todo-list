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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black: rgb(29, 29, 29);\n    --white: rgb(250, 250, 250);\n    --grey: rgb(121, 121, 121);\n}\n\nhtml,\nbody {\n    font-size: 8px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    color: var(--black);\n    background: rgb(235, 235, 235);\n}\n\n#header-bar {\n    padding: 18px 20px;\n    color: var(--white);\n    background: rgb(75, 75, 75);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh2 {\n    margin: 0;\n    font-size: 3rem;\n}\n\n.nav-btn {\n    background: inherit;\n    border: none;\n    color: var(--white);\n}\n\n.nav-bar {\n    display: none;\n    background: rgb(219, 219, 219);\n    color:rgb(37, 37, 37);\n    font-size: 1.5rem;\n    box-shadow: 0px 1px 2px var(--grey);\n    /* prevent highlights */\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                        supported by Chrome, Edge, Opera and Firefox */\n}\n\n.wrapper {\n    padding: 15px;\n}\n\n.list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.selection {\n    padding: 7px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.selection i,\n.add-project-btn i {\n    margin-right: 10px;\n}\n\n.selection:hover {\n    background:rgb(204, 204, 204);\n}\n\n.selected {\n    background: rgb(204, 204, 204);\n    font-weight: bold;\n}\n\nh3 {\n    font-size: 1.9rem;\n}\n\n.add-project-btn {\n    display: none;\n}\n\n.project {\n    justify-content: space-between;\n}\n\n.tab > * {\n    pointer-events: none;\n}\n\n.project-delete {\n    pointer-events: all;\n}\n\n.project-delete {\n    display: none;\n}\n\n.project-delete:hover {\n    color:rgb(190, 39, 39);\n}\n\n.project:hover .project-delete {\n    display: block;\n}\n\n.content {\n    margin: 20px;\n}\n\n.tasks {\n    margin: 5px;\n}\n\n.task {\n    font-size: 1.3rem;\n    color: var(--black);\n    border: 1px solid var(--grey);\n    border-radius: 10px;\n    padding: 10px 10px;\n    margin-top: 15px;\n}\n\n.task:hover {\n    background: rgb(204, 204, 204);\n}\n\n.info-wrapper {\n    display: none;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.complete-icon {\n    width: 12px;\n    height: 12px;\n    border: 1px solid var(--grey);\n    border-radius: 50%;\n}\n\n.task-name {\n    width: 55%;\n    margin-left: 5px;\n}\n\n.side-icons-wrapper {\n    display: flex;\n    width: 30px;\n    justify-content: space-between;\n}\n\n.edit-icon,\n.delete-icon {\n    display: none;\n    color: var(--grey);\n}\n\n.edit-icon:hover {\n    color: var(--black);\n}\n\n.delete-icon:hover {\n    color: rgb(190, 39, 39);\n}\n\n.task:hover .edit-icon,\n.task:hover .delete-icon {\n    display: block;\n}\n\n.add-task-btn {\n    font-size: 1.5rem;\n    display: none;\n    text-align: center;\n}\n\n.task-edit-form {\n    display: none;\n    height: 50px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.edit-inputs {\n    display: flex;\n    width: 80%;\n    max-width: 600px;\n    justify-content: space-around;\n}\n\n.edit-task-title {\n    width: 50%;\n}\n\n.edit-task-due {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.confirm-edit-buttons {\n    width: 150px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.confirm-edit,\n.cancel-edit {\n    border: 1px solid var(--black);\n    border-radius: 5px;\n    background: inherit;\n}\n\n.confirm-edit:hover {\n    border: 1px solid rgba(149, 229, 149, 0.9);\n    background: rgba(149, 229, 149, 0.9);\n}\n\n.cancel-edit:hover {\n    border: 1px solid rgba(196, 94, 94, 0.9);\n    background: rgba(196, 94, 94, 0.9);\n}\n\n.project-form,\n.task-form {\n    display: none;\n}\n\n.display-flex {\n    display: flex;\n}\n\n.display {\n    display: block;\n}\n\n@media (min-width: 321px) {\n    html,\n    body {\n        font-size: 10px;\n    }\n\n    .tasks {\n        margin: 10px;\n    }\n}\n\n@media (min-width: 769px) {\n    header {\n        position: fixed;\n        width: 100vw;\n        z-index: 5;\n    }\n\n    .nav-btn {\n        display: none;\n    }\n\n    .nav-wrap {\n        width: 30%;\n        max-width: 400px;\n    }\n\n    .nav-bar {\n        z-index: 1;\n        display: flex;\n        position: fixed;\n        width: inherit;\n        max-width: inherit;\n        height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper {\n        width: 100%;\n        overflow-y: scroll;\n        -ms-overflow-style: none;  /* Internet Explorer 10+ */\n        scrollbar-width: none;  /* Firefox */\n    }\n\n    .wrapper::-webkit-scrollbar { \n        display: none;  /* Safari and Chrome */\n    }\n\n    .wrapper ul:first-child {\n        margin-top: 80px;\n    }\n    \n    .content-wrapper {\n        display: flex;\n    }\n\n    .main-wrapper {\n        width: 60%;\n        margin: 80px;\n        flex: 2;\n        max-width: 1000px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --black: rgb(29, 29, 29);\n    --white: rgb(250, 250, 250);\n    --grey: rgb(121, 121, 121);\n}\n\nhtml,\nbody {\n    font-size: 8px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    color: var(--black);\n    background: rgb(235, 235, 235);\n}\n\n#header-bar {\n    padding: 18px 20px;\n    color: var(--white);\n    background: rgb(75, 75, 75);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh2 {\n    margin: 0;\n    font-size: 3rem;\n}\n\n.nav-btn {\n    background: inherit;\n    border: none;\n    color: var(--white);\n}\n\n.nav-bar {\n    display: none;\n    background: rgb(219, 219, 219);\n    color:rgb(37, 37, 37);\n    font-size: 1.5rem;\n    box-shadow: 0px 1px 2px var(--grey);\n    /* prevent highlights */\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                        supported by Chrome, Edge, Opera and Firefox */\n}\n\n.wrapper {\n    padding: 15px;\n}\n\n.list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.selection {\n    padding: 7px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.selection i,\n.add-project-btn i {\n    margin-right: 10px;\n}\n\n.selection:hover {\n    background:rgb(204, 204, 204);\n}\n\n.selected {\n    background: rgb(204, 204, 204);\n    font-weight: bold;\n}\n\nh3 {\n    font-size: 1.9rem;\n}\n\n.add-project-btn {\n    display: none;\n}\n\n.project {\n    justify-content: space-between;\n}\n\n.tab > * {\n    pointer-events: none;\n}\n\n.project-delete {\n    pointer-events: all;\n}\n\n.project-delete {\n    display: none;\n}\n\n.project-delete:hover {\n    color:rgb(190, 39, 39);\n}\n\n.project:hover .project-delete {\n    display: block;\n}\n\n.content {\n    margin: 20px;\n}\n\n.tasks {\n    margin: 5px;\n}\n\n.task {\n    font-size: 1.3rem;\n    color: var(--black);\n    border: 1px solid var(--grey);\n    border-radius: 10px;\n    padding: 10px 10px;\n    margin-top: 15px;\n}\n\n.task:hover {\n    background: rgb(204, 204, 204);\n}\n\n.info-wrapper {\n    display: none;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.complete-icon {\n    width: 12px;\n    height: 12px;\n    border: 1px solid var(--grey);\n    border-radius: 50%;\n}\n\n.task-name {\n    width: 55%;\n    margin-left: 5px;\n}\n\n.side-icons-wrapper {\n    display: flex;\n    width: 30px;\n    justify-content: space-between;\n}\n\n.edit-icon,\n.delete-icon {\n    display: none;\n    color: var(--grey);\n}\n\n.edit-icon:hover {\n    color: var(--black);\n}\n\n.delete-icon:hover {\n    color: rgb(190, 39, 39);\n}\n\n.task:hover .edit-icon,\n.task:hover .delete-icon {\n    display: block;\n}\n\n.add-task-btn {\n    font-size: 1.5rem;\n    display: none;\n    text-align: center;\n}\n\n.task-edit-form {\n    display: none;\n    height: 50px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.edit-inputs {\n    display: flex;\n    width: 80%;\n    max-width: 600px;\n    justify-content: space-around;\n}\n\n.edit-task-title {\n    width: 50%;\n}\n\n.edit-task-due {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.confirm-edit-buttons {\n    width: 150px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.confirm-edit,\n.cancel-edit {\n    border: 1px solid var(--black);\n    border-radius: 5px;\n    background: inherit;\n}\n\n.confirm-edit:hover {\n    border: 1px solid rgba(149, 229, 149, 0.9);\n    background: rgba(149, 229, 149, 0.9);\n}\n\n.cancel-edit:hover {\n    border: 1px solid rgba(196, 94, 94, 0.9);\n    background: rgba(196, 94, 94, 0.9);\n}\n\n.project-form,\n.task-form {\n    display: none;\n}\n\n.display-flex {\n    display: flex;\n}\n\n.display {\n    display: block;\n}\n\n@media (min-width: 321px) {\n    html,\n    body {\n        font-size: 10px;\n    }\n\n    .tasks {\n        margin: 10px;\n    }\n}\n\n@media (min-width: 769px) {\n    header {\n        position: fixed;\n        width: 100vw;\n        z-index: 5;\n    }\n\n    .nav-btn {\n        display: none;\n    }\n\n    .nav-wrap {\n        width: 30%;\n        max-width: 400px;\n    }\n\n    .nav-bar {\n        z-index: 1;\n        display: flex;\n        position: fixed;\n        width: inherit;\n        max-width: inherit;\n        height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper {\n        width: 100%;\n        overflow-y: scroll;\n        -ms-overflow-style: none;  /* Internet Explorer 10+ */\n        scrollbar-width: none;  /* Firefox */\n    }\n\n    .wrapper::-webkit-scrollbar { \n        display: none;  /* Safari and Chrome */\n    }\n\n    .wrapper ul:first-child {\n        margin-top: 80px;\n    }\n    \n    .content-wrapper {\n        display: flex;\n    }\n\n    .main-wrapper {\n        width: 60%;\n        margin: 80px;\n        flex: 2;\n        max-width: 1000px;\n    }\n}"],"sourceRoot":""}]);
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
    getDateToday
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

function showTasksToday(date) {
    currentProjTasks = taskArray.filter(task => task.due == date);
    //show filtered array
    showCurrentTasks();
}

function showWeekTasks(dateRange) {
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

function deleteTask(num) {
    //split array into two, removing affecting element
    let firstHalfArray = taskArray.slice(0, num);
    let secondHalfArray = taskArray.slice(parseInt(num) + 1);
    //update dataNum of remaining tabs
    secondHalfArray.forEach(e => e.dataNum -= 1);
    
    //assign array back to original projArray
    let tempArray = firstHalfArray.concat(secondHalfArray);
    updateArray(tempArray);
}

function updateArray(arr) {
    taskArray = arr;
    saveArray();
    //reload all tasks to current project selected
    setCurrentTasks(_project_js__WEBPACK_IMPORTED_MODULE_0__.default.currentProjectSelected());
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
    showWeekTasks
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELCtCQUErQixrQ0FBa0MsaUNBQWlDLEdBQUcsaUJBQWlCLHFCQUFxQixnREFBZ0QsZ0JBQWdCLDBCQUEwQixxQ0FBcUMsR0FBRyxpQkFBaUIseUJBQXlCLDBCQUEwQixrQ0FBa0Msb0JBQW9CLHFDQUFxQywwQkFBMEIsR0FBRyxRQUFRLGdCQUFnQixzQkFBc0IsR0FBRyxjQUFjLDBCQUEwQixtQkFBbUIsMEJBQTBCLEdBQUcsY0FBYyxvQkFBb0IscUNBQXFDLDRCQUE0Qix3QkFBd0IsMENBQTBDLGdFQUFnRSxpREFBaUQsNENBQTRDLGtEQUFrRCwwREFBMEQscURBQXFELCtHQUErRyxjQUFjLG9CQUFvQixHQUFHLFdBQVcsZ0JBQWdCLGlCQUFpQix1QkFBdUIsR0FBRyxnQkFBZ0IsbUJBQW1CLHlCQUF5QixvQkFBb0IsR0FBRyx1Q0FBdUMseUJBQXlCLEdBQUcsc0JBQXNCLG9DQUFvQyxHQUFHLGVBQWUscUNBQXFDLHdCQUF3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O0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGlFQUE4QjtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFxQjtBQUN2QztBQUNBLDRCQUE0Qix1RUFBb0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVFQUFvQztBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRTs7Ozs7O1VDOUhuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05pRDtBQUNOO0FBQ007QUFDViIsImZpbGUiOiIuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJsYWNrOiByZ2IoMjksIDI5LCAyOSk7XFxuICAgIC0td2hpdGU6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG4gICAgLS1ncmV5OiByZ2IoMTIxLCAxMjEsIDEyMSk7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxufVxcblxcbiNoZWFkZXItYmFyIHtcXG4gICAgcGFkZGluZzogMThweCAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzUsIDc1LCA3NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIxOSwgMjE5LCAyMTkpO1xcbiAgICBjb2xvcjpyZ2IoMzcsIDM3LCAzNyk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCB2YXIoLS1ncmV5KTtcXG4gICAgLyogcHJldmVudCBoaWdobGlnaHRzICovXFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBFZGdlLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5saXN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zZWxlY3Rpb24gaSxcXG4uYWRkLXByb2plY3QtYnRuIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5zZWxlY3Rpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMDQsIDIwNCwgMjA0KTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuOXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFiID4gKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUge1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGU6aG92ZXIge1xcbiAgICBjb2xvcjpyZ2IoMTkwLCAzOSwgMzkpO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciAucHJvamVjdC1kZWxldGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG59XFxuXFxuLmluZm8td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlLWljb24ge1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFzay1uYW1lIHtcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLnNpZGUtaWNvbnMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5lZGl0LWljb24sXFxuLmRlbGV0ZS1pY29uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4uZWRpdC1pY29uOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLmRlbGV0ZS1pY29uOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigxOTAsIDM5LCAzOSk7XFxufVxcblxcbi50YXNrOmhvdmVyIC5lZGl0LWljb24sXFxuLnRhc2s6aG92ZXIgLmRlbGV0ZS1pY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1lZGl0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmVkaXQtaW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5lZGl0LXRhc2stdGl0bGUge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZWRpdC10YXNrLWR1ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29uZmlybS1lZGl0LWJ1dHRvbnMge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uY29uZmlybS1lZGl0LFxcbi5jYW5jZWwtZWRpdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbn1cXG5cXG4uY29uZmlybS1lZGl0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNDksIDIyOSwgMTQ5LCAwLjkpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0OSwgMjI5LCAxNDksIDAuOSk7XFxufVxcblxcbi5jYW5jZWwtZWRpdDpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0sXFxuLnRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kaXNwbGF5LWZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIxcHgpIHtcXG4gICAgaHRtbCxcXG4gICAgYm9keSB7XFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tzIHtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIHotaW5kZXg6IDU7XFxuICAgIH1cXG5cXG4gICAgLm5hdi1idG4ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAubmF2LXdyYXAge1xcbiAgICAgICAgd2lkdGg6IDMwJTtcXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIH1cXG5cXG4gICAgLm5hdi1iYXIge1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIC53cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXFxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXFxuICAgIH1cXG5cXG4gICAgLndyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXFxuICAgICAgICBkaXNwbGF5OiBub25lOyAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cXG4gICAgfVxcblxcbiAgICAud3JhcHBlciB1bDpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuY29udGVudC13cmFwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4td3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgbWFyZ2luOiA4MHB4O1xcbiAgICAgICAgZmxleDogMjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QseUNBQXlDO0lBQ3pDLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyx1QkFBdUI7SUFDdkIsMkJBQTJCLEVBQUUsZUFBZTtJQUM1Qyx5QkFBeUIsRUFBRSxXQUFXO0lBQ3RDLHdCQUF3QixFQUFFLG1CQUFtQjtJQUM3QyxzQkFBc0IsRUFBRSw0QkFBNEI7SUFDcEQscUJBQXFCLEVBQUUsMkJBQTJCO0lBQ2xELGlCQUFpQixFQUFFO3NFQUMrQztBQUN0RTs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUksOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLGtDQUFrQztBQUN0Qzs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTs7UUFFSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsWUFBWTtRQUNaLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGFBQWE7UUFDYixlQUFlO1FBQ2YsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQix3QkFBd0IsR0FBRywwQkFBMEI7UUFDckQscUJBQXFCLEdBQUcsWUFBWTtJQUN4Qzs7SUFFQTtRQUNJLGFBQWEsR0FBRyxzQkFBc0I7SUFDMUM7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixPQUFPO1FBQ1AsaUJBQWlCO0lBQ3JCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJsYWNrOiByZ2IoMjksIDI5LCAyOSk7XFxuICAgIC0td2hpdGU6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG4gICAgLS1ncmV5OiByZ2IoMTIxLCAxMjEsIDEyMSk7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxufVxcblxcbiNoZWFkZXItYmFyIHtcXG4gICAgcGFkZGluZzogMThweCAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzUsIDc1LCA3NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIxOSwgMjE5LCAyMTkpO1xcbiAgICBjb2xvcjpyZ2IoMzcsIDM3LCAzNyk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCB2YXIoLS1ncmV5KTtcXG4gICAgLyogcHJldmVudCBoaWdobGlnaHRzICovXFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBFZGdlLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5saXN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zZWxlY3Rpb24gaSxcXG4uYWRkLXByb2plY3QtYnRuIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5zZWxlY3Rpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMDQsIDIwNCwgMjA0KTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuOXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFiID4gKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUge1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGU6aG92ZXIge1xcbiAgICBjb2xvcjpyZ2IoMTkwLCAzOSwgMzkpO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciAucHJvamVjdC1kZWxldGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG59XFxuXFxuLmluZm8td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlLWljb24ge1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFzay1uYW1lIHtcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLnNpZGUtaWNvbnMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5lZGl0LWljb24sXFxuLmRlbGV0ZS1pY29uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4uZWRpdC1pY29uOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLmRlbGV0ZS1pY29uOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigxOTAsIDM5LCAzOSk7XFxufVxcblxcbi50YXNrOmhvdmVyIC5lZGl0LWljb24sXFxuLnRhc2s6aG92ZXIgLmRlbGV0ZS1pY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1lZGl0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmVkaXQtaW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5lZGl0LXRhc2stdGl0bGUge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZWRpdC10YXNrLWR1ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29uZmlybS1lZGl0LWJ1dHRvbnMge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uY29uZmlybS1lZGl0LFxcbi5jYW5jZWwtZWRpdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbn1cXG5cXG4uY29uZmlybS1lZGl0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNDksIDIyOSwgMTQ5LCAwLjkpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0OSwgMjI5LCAxNDksIDAuOSk7XFxufVxcblxcbi5jYW5jZWwtZWRpdDpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0sXFxuLnRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kaXNwbGF5LWZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIxcHgpIHtcXG4gICAgaHRtbCxcXG4gICAgYm9keSB7XFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tzIHtcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIHotaW5kZXg6IDU7XFxuICAgIH1cXG5cXG4gICAgLm5hdi1idG4ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAubmF2LXdyYXAge1xcbiAgICAgICAgd2lkdGg6IDMwJTtcXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIH1cXG5cXG4gICAgLm5hdi1iYXIge1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIC53cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXFxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXFxuICAgIH1cXG5cXG4gICAgLndyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXFxuICAgICAgICBkaXNwbGF5OiBub25lOyAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cXG4gICAgfVxcblxcbiAgICAud3JhcHBlciB1bDpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuY29udGVudC13cmFwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4td3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgbWFyZ2luOiA4MHB4O1xcbiAgICAgICAgZmxleDogMjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdGFza01vZHVsZSBmcm9tICcuL3Rhc2suanMnO1xuaW1wb3J0IHByb2plY3RNb2R1bGUgZnJvbSAnLi9wcm9qZWN0LmpzJztcblxuLy9QQUdFIEJFSEFWSU9VUlxuY29uc3QgbmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1idG4nKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYmFyJyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgYWRkUHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1idG4nKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG5jb25zdCBhZGRQcm9qQnRuU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc3VibWl0LWJ0bicpO1xuY29uc3QgYWRkVGFza0J0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXN1Ym1pdC1idG4nKTtcbmNvbnN0IHByb2plY3RCdG5DYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYW5jZWwtYnRuJyk7XG5jb25zdCB0YXNrQnRuQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY2FuY2VsLWJ0bicpO1xubGV0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbmNvbnN0IGRheVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXknKTtcbmNvbnN0IHdlZWtUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VlaycpO1xuXG5jb25zdCBwYWdlRnVuY3Rpb25zID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBkcm9wZG93bk1lbnUoKSB7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VibWl0UHJvamVjdEZvcm0oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vZ2V0IHRpdGxlIG9mIHByb2plY3QgZnJvbSBmb3JtXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybSBpbnB1dCcpLnZhbHVlO1xuICAgICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgICAgICBhbGVydChcIklucHV0IHJlcXVpcmVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9qZWN0TW9kdWxlLnByb2plY3RFeGlzdHModGl0bGUpKSB7XG4gICAgICAgICAgICBhbGVydChcIlByb2plY3QgYWxyZWFkeSBleGlzdHMhXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy9hZGQgRE9NIGVsZW1lbnRzXG4gICAgICAgIGFkZFByb2plY3RMaW5rKHRpdGxlKTtcbiAgICAgICAgLy9jcmVhdGUgaW5zdGFuY2Ugb2YgcHJvamVjdCBmcm9tIGZhY3RvcnlcbiAgICAgICAgcHJvamVjdE1vZHVsZS5hZGROZXdQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgY2FuY2VsRm9ybShwcm9qZWN0Rm9ybSwgYWRkUHJvakJ0bik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VibWl0VGFza0Zvcm0oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vZ2V0IHRpdGxlIG9mIHRhc2sgZnJvbSBmb3JtXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybSBpbnB1dCcpLnZhbHVlO1xuICAgICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgICAgICBhbGVydChcIklucHV0IHJlcXVpcmVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vYWRkIERPTSBlbGVtZW50c1xuICAgICAgICBhZGRUYXNrQ2VsbCh0aXRsZSk7XG4gICAgICAgIC8vY3JlYXRlIGluc3RhbmNlIG9mIHRhc2sgZnJvbSBmYWN0b3J5XG4gICAgICAgIHRhc2tNb2R1bGUuYWRkTmV3VGFzayh0aXRsZSk7XG4gICAgICAgIGNhbmNlbEZvcm0odGFza0Zvcm0sIGFkZFRhc2tCdG4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrTGluayhlKSB7XG4gICAgICAgIGxldCBsaW5rID0gZS50YXJnZXQ7XG4gICAgICAgIC8vY2hlY2sgaWYgc2FtZSBsaW5rIGFzIHNlbGVjdGVkXG4gICAgICAgIGlmIChzYW1lTGluayhsaW5rKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiBkYXkgb3Igd2VlayB0YWJzIHNlbGVjdGVkXG4gICAgICAgIGlmIChsaW5rID09IGRheVRhYiB8fCBsaW5rID09IHdlZWtUYWIpIHtcbiAgICAgICAgICAgIHJlbW92ZVByZXZpb3VzSGlnaGxpZ2h0KCk7XG4gICAgICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGlmIChsaW5rID09IGRheVRhYikge1xuICAgICAgICAgICAgICAgIHByb2plY3RNb2R1bGUuY2hhbmdlUHJvamVjdCgxKTtcbiAgICAgICAgICAgICAgICAvL2dldCB0YXNrcyB0aGF0IGNvaW5jaWRlIHdpdGggZGF0ZSB0b2RheVxuICAgICAgICAgICAgICAgIHRhc2tNb2R1bGUuc2hvd1Rhc2tzVG9kYXkoZ2V0RGF0ZVRvZGF5KCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TW9kdWxlLmNoYW5nZVByb2plY3QoMik7XG4gICAgICAgICAgICAgICAgLy9nZXQgdGFza3MgdGhhdCBjb2luY2lkZSB3aXRoIDcgZGF5cyBhaGVhZCwgaW5jbHVkaW5nIHRvZGF5XG4gICAgICAgICAgICAgICAgdGFza01vZHVsZS5zaG93V2Vla1Rhc2tzKGdldFdlZWsoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS10cmFzaC1hbHQnKSkge1xuICAgICAgICAgICAgLy9pZ25vcmUgZGVsZXRlIGJ1dHRvbiBlbGVtZW50XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0TGluayhsaW5rKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZWxlY3RMaW5rKGxpbmspIHtcbiAgICAgICAgcmVtb3ZlUHJldmlvdXNIaWdobGlnaHQoKTtcbiAgICAgICAgLy9zd2l0Y2ggdG8gc2VsZWN0ZWQgbGlua1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIC8vY2hhbmdlIHByb2plY3QgY3VyclByb2ogdG8gc2VsZWN0ZWQgbGluaydzIGRhdGFudW1cbiAgICAgICAgcHJvamVjdE1vZHVsZS5jaGFuZ2VQcm9qZWN0KGxpbmsuZGF0YXNldC5udW0pO1xuICAgICAgICAvL2NsZWFyIHByZXZpb3VzIGNvbnRlbnQgb2YgcHJvamVjdFxuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgLy91cGRhdGUgY29udGVudCB3aXRoIGN1cnJQcm9qJ3MgdGFza3NcbiAgICAgICAgdXBkYXRlQ29udGVudCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNhbWVMaW5rKGxpbmspIHtcbiAgICAgICAgcmV0dXJuIChsaW5rU2VsZWN0ZWQoKSA9PSBsaW5rKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaW5rU2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVQcmV2aW91c0hpZ2hsaWdodCgpIHtcbiAgICAgICAgY29uc3QgaGlnaGxpZ2h0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKTtcbiAgICAgICAgaWYgKCFoaWdobGlnaHRlZCkgcmV0dXJuO1xuICAgICAgICBoaWdobGlnaHRlZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIH1cblxuICAgIC8vZXZlbnQgbGlzdGVuZXJzIGZvciBuYXZCdG4gYW5kIGFkZCBwcm9qZWN0IGJ0blxuICAgIG5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRyb3Bkb3duTWVudSk7XG4gICAgLy9wYXNzZXMgZnVuY3Rpb24gdG8gd2FpdCBmb3IgZXZlbnQgYmVmb3JlIGNhbGxpbmcgdG9nZ2xlRm9ybXNcbiAgICBhZGRQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlRm9ybShwcm9qZWN0Rm9ybSwgYWRkUHJvakJ0bikpO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVGb3JtKHRhc2tGb3JtLCBhZGRUYXNrQnRuKSk7XG4gICAgcHJvamVjdEJ0bkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhbmNlbEZvcm0ocHJvamVjdEZvcm0sIGFkZFByb2pCdG4pKTtcbiAgICB0YXNrQnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FuY2VsRm9ybSh0YXNrRm9ybSwgYWRkVGFza0J0bikpO1xuICAgIGFkZFByb2pCdG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRQcm9qZWN0Rm9ybSk7XG4gICAgYWRkVGFza0J0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFRhc2tGb3JtKTtcbiAgICAvL2V2ZW50IGxpc3RlbmVyIGZvciBjbGlja3Mgb24gcHJvamVjdCB0YWJzXG4gICAgbGlzdEl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tMaW5rKSk7XG5cbiAgICByZXR1cm4ge2NoZWNrTGluaywgbGlua1NlbGVjdGVkfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICAgIHRhc2tzLmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb250ZW50KCkge1xuICAgIHRhc2tNb2R1bGUuc2V0Q3VycmVudFRhc2tzKHByb2plY3RNb2R1bGUuY3VycmVudFByb2plY3RTZWxlY3RlZCgpKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRm9ybSguLi5hcmdzKSB7XG4gICAgYXJncy5mb3JFYWNoKGFyZ3MgPT4gYXJncy5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5JykpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVGb3JtRmxleCguLi5hcmdzKSB7XG4gICAgYXJncy5mb3JFYWNoKGFyZ3MgPT4gYXJncy5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5LWZsZXgnKSk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEZvcm0oZWxlbWVudDEsIGVsZW1lbnQyKSB7XG4gICAgZWxlbWVudDEucmVzZXQoKTtcbiAgICB0b2dnbGVGb3JtKGVsZW1lbnQxLCBlbGVtZW50Mik7XG59XG5cbmZ1bmN0aW9uIGdldERhdGVUb2RheSgpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gZm9ybWF0RGF0ZShgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7ZmlsbFNpbmdsZU51bShkYXRlLmdldE1vbnRoKCkgKyAxKX0tJHtmaWxsU2luZ2xlTnVtKGRhdGUuZ2V0RGF0ZSgpKX1gKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2VlaygpIHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBkLnNldERhdGUoZC5nZXREYXRlKCkgKyBpKTtcbiAgICAgICAgcmVzdWx0LnB1c2goZm9ybWF0RGF0ZShgJHtkLmdldEZ1bGxZZWFyKCl9LSR7ZmlsbFNpbmdsZU51bShkLmdldE1vbnRoKCkgKyAxKX0tJHtmaWxsU2luZ2xlTnVtKGQuZ2V0RGF0ZSgpKX1gKSApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZmlsbFNpbmdsZU51bShudW0pIHtcbiAgICBpZiAobnVtIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGAwJHtudW19YFxuICAgIH1cbiAgICByZXR1cm4gbnVtO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZVxuICAgICAgICAgICAgLnNwbGl0KCctJylcbiAgICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAgIC5qb2luKCcvJyk7XG59XG5cbmNvbnN0IGFkZFByb2plY3RMaW5rID0gKHByb2plY3ROYW1lLCBkYXRhTnVtID0gcHJvamVjdE1vZHVsZS5udW1PZlByb2plY3RzKCkpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuXG4gICAgLy9jcmVhdGUgbmV3IGxpc3QgZWxlbWVudCwgc2V0IGRhdGFzZXQgbGluayB0byBwcm9qZWN0KGNvdW50KTtcbiAgICBjb25zdCBuZXdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBuZXdMaW5rLmNsYXNzTmFtZSA9IFwic2VsZWN0aW9uIHByb2plY3QgdGFiXCI7XG4gICAgbmV3TGluay5kYXRhc2V0Lm51bSA9IGRhdGFOdW07XG4gICAgLy9jcmVhdGUgaWNvblxuICAgIGNvbnN0IGxlZnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdFdyYXBwZXIuY2xhc3NOYW1lID0gJ3Byb2plY3QtaW5mbydcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGljb24uY2xhc3NOYW1lID0gJ2ZhciBmYS1saXN0LWFsdCc7XG4gICAgLy9jcmVhdGUgZGVmYXVsdCBwcm9qZWN0IG5hbWVcbiAgICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJvalRpdGxlLmNsYXNzTmFtZSA9ICdwcm9qZWN0LXRpdGxlJztcbiAgICBwcm9qVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAvL2NyZWF0ZSBkZWxldGUgYnV0dG9uIC0gdG8gYmUgc2hvd24gb25seSBvbiBob3ZlclxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWxldGVJY29uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHRcIj48L2k+J1xuICAgIGRlbGV0ZUljb24uY2xhc3NOYW1lID0gJ3Byb2plY3QtZGVsZXRlJztcbiAgICBcbiAgICAvL2FwcGVuZCBjaGlsZHJlbiB0byBsaW5rXG4gICAgbGVmdFdyYXBwZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgbGVmdFdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvalRpdGxlKTtcbiAgICBuZXdMaW5rLmFwcGVuZENoaWxkKGxlZnRXcmFwcGVyKTtcbiAgICBuZXdMaW5rLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gICAgLy9hcHBlbmQgbGluayB0byBwcm9qZWN0XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3TGluayk7XG5cbiAgICBuZXdMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFnZUZ1bmN0aW9ucy5jaGVja0xpbmspO1xuXG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRlbGV0ZVByb2plY3RMaW5rKG5ld0xpbmspKTtcbn1cblxuY29uc3QgcmVtb3ZlUHJvamVjdExpbmsgPSAobGlua1RvUmVtb3ZlLCBudW0pID0+IHtcbiAgICBsaW5rVG9SZW1vdmUucmVtb3ZlKCk7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgLy91cGRhdGUgcHJvamVjdEFycmF5XG4gICAgcHJvamVjdE1vZHVsZS5kZWxldGVQcm9qKG51bSk7XG59XG5cbmNvbnN0IHVwZGF0ZVByb2plY3ROdW1zPSAoZGF0YU51bSkgPT4ge1xuICAgIGNvbnN0IHJlbWFpbmluZ1Byb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW51bV1cIik7XG4gICAgLy9nZXQgYXJyYXkgZnJvbSByZW1haW5pbmcgcHJvamVjdCBub2Rlc1xuICAgIGxldCBwcm9qZWN0c0FyciA9IEFycmF5LmZyb20ocmVtYWluaW5nUHJvamVjdHMpO1xuICAgIC8vZmlsdGVyIGFycmF5IHRvIG9ubHkgaW5jbHVkZSBwcm9qZWN0cyBhZnRlciBkZWxldGVkIHByb2plY3RcbiAgICBsZXQgcHJvamVjdHNUb1VwZGF0ZSA9IHByb2plY3RzQXJyLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuZGF0YXNldC5udW0gPiBkYXRhTnVtKTtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzVG9VcGRhdGUpIHtcbiAgICAgICAgLy9pdGVyYXRlIHRocm91Z2ggZWFjaCBwcm9qZWN0XG4gICAgICAgIC8vdXBkYXRlIHRoZWlyIGRhdGEtbnVtXG4gICAgICAgIHByb2plY3QuZGF0YXNldC5udW0gLT0gMTtcbiAgICAgICAgLy91cGRhdGUgcHJvamVjdEFycmF5IGFuZCBzYXZlIHRvIGxvY2FsU3RvcmFnZVxuICAgIH1cbn1cblxuY29uc3QgZGVsZXRlUHJvamVjdExpbmsgPSAobGluaykgPT4ge1xuICAgIGNvbnN0IGRhdGFOdW0gPSBsaW5rLmRhdGFzZXQubnVtO1xuICAgIC8vcmVtb3ZlIGh0bWwgZWxlbWVudFxuICAgIHJlbW92ZVByb2plY3RMaW5rKGxpbmssIGRhdGFOdW0pO1xuICAgIHVwZGF0ZVByb2plY3ROdW1zKGRhdGFOdW0pO1xufVxuXG5jb25zdCBhZGRUYXNrQ2VsbCA9ICh0YXNrTmFtZSwgZHVlRGF0ZSwgY29tcGxldGVkLCBkYXRhTnVtID0gdGFza01vZHVsZS5udW1PZlRhc2tzKCkpID0+IHtcblxuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgLy9jcmVhdGUgZGl2IGVsZW1lbnQgdG8gd3JhcCBib3RoIHRhc2sgaW5mbyBhbmQgZWRpdCBpbmZvXG4gICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2suY2xhc3NOYW1lID0gJ3Rhc2snO1xuICAgIG5ld1Rhc2suZGF0YXNldC5udW0gPSBkYXRhTnVtOyAvL2RhdGFzZXQgbnVtIHRvIGlkZW50aWZ5IHRhc2sgaW5zdGFuY2UgaW4gcHJvamVjdCAtIHRhc2tMaXN0IGFycmF5XG4gICAgXG4gICAgLy9jcmVhdGUgZGl2IHRvIGhvbGQgYWxsIHRhc2tJbmZvIGluIGZsZXhib3hcbiAgICBjb25zdCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tJbmZvLmNsYXNzTmFtZSA9ICdpbmZvLXdyYXBwZXIgZGlzcGxheS1mbGV4JztcblxuICAgIC8vY3JlYXRlIGljb24gZWxlbWVudCAtIHN0eWxlZCB0byBjaXJjbGUgLSB0byByZWZsZWN0IHByaW9yaXR5IG9mIHRhc2tcbiAgICBjb25zdCBjb21wbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21wbGV0ZUljb24uY2xhc3NOYW1lID0gJ2NvbXBsZXRlLWljb24nO1xuXG4gICAgLy9jcmVhdGUgc3BhbiBlbGVtZW50IGZvciB0YXNrIHRpdGxlXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRhc2tUaXRsZS5jbGFzc05hbWUgPSAndGFzay1uYW1lJztcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrTmFtZTtcblxuICAgIC8vY3JlYXRlIGRpdiBlbGVtZW50IHRvIHN0b3JlIGRhdGUgLSB0byBiZSBjaGFuZ2VkIHVwb24gZWRpdFxuICAgIC8vY3JlYXRlIGVkaXQgZm9ybSBmb3IgdGhpcyB0b28sIHRvIHNlbGVjdCBkYXRlXG4gICAgY29uc3QgdGFza0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEdWUuY2xhc3NOYW1lID0gJ2RhdGUnO1xuICAgIHRhc2tEdWUudGV4dENvbnRlbnQgPSBkdWVEYXRlIHx8IGdldERhdGVUb2RheSgpXG5cbiAgICAvL2FwcGVuZCBlZGl0IGFuZCBkZWxldGUgaWNvbnMgdG8gcmlnaHQgc2lkZSBvZiBkYXRlIGRpdi5cbiAgICBjb25zdCBzaWRlSWNvbnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZUljb25zV3JhcHBlci5jbGFzc05hbWUgPSAnc2lkZS1pY29ucy13cmFwcGVyJ1xuICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGVkaXRJY29uLmNsYXNzTmFtZSA9ICdlZGl0LWljb24nO1xuICAgIGVkaXRJY29uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS1lZGl0XCI+PC9pPic7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTmFtZSA9ICdkZWxldGUtaWNvbic7XG4gICAgZGVsZXRlSWNvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0XCI+PC9pPic7XG4gICAgc2lkZUljb25zV3JhcHBlci5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgc2lkZUljb25zV3JhcHBlci5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgIC8vYXBwZW5kIGVsZW1lbnRzIHRvIHRhc2sgZGl2LCB0aGVuIGFwcGVuZCB0YXNrIGRpdiB0byBsaXN0IGRpdlxuICAgIC8vTUFJTiBUQVNLIENFTExcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChjb21wbGV0ZUljb24pO1xuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza0R1ZSk7XG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQoc2lkZUljb25zV3JhcHBlcik7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XG5cbiAgICAvL2NoZWNrIGlmIHRhc2sgaXMgY29tcGxldGUgYWNjb3JkaW5nIHRvIGlucHV0IHBhcmFtZXRlcnNcbiAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgIGVkaXRUYXNrLmNvbXBsZXRlVGFzayhuZXdUYXNrKTtcbiAgICB9XG5cbiAgICAvL2NyZWF0ZSB0YXNrIGVkaXQgZm9ybVxuICAgIGNvbnN0IHRhc2tFZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0YXNrRWRpdEZvcm0uY2xhc3NOYW1lID0gJ3Rhc2stZWRpdC1mb3JtJzsgLy90byBkaXNwbGF5IGZsZXhcbiAgICAvL3dyYXBwZXIgZm9yIGlucHV0IGVsZW1lbnRzXG4gICAgY29uc3QgZWRpdElucHV0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXRJbnB1dHMuY2xhc3NOYW1lID0gJ2VkaXQtaW5wdXRzJztcbiAgICAvL2lucHV0IGVsZW1lbnRzXG4gICAgY29uc3QgZWRpdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlZGl0VGl0bGUuY2xhc3NOYW1lID0gJ2VkaXQtdGFzay10aXRsZSc7XG4gICAgY29uc3QgZWRpdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVkaXREYXRlLmNsYXNzTmFtZSA9ICdlZGl0LXRhc2stZHVlJztcbiAgICBlZGl0RGF0ZS50eXBlID0gJ3RleHQnO1xuICAgIFxuICAgIC8vYnV0dG9uIHdyYXBwZXJcbiAgICBjb25zdCBjb25maXJtQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmZpcm1CdG5zLmNsYXNzTmFtZSA9ICdjb25maXJtLWVkaXQtYnV0dG9ucyc7XG4gICAgLy9idXR0b25zXG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbmZpcm1CdG4uY2xhc3NOYW1lID0gJ2NvbmZpcm0tZWRpdCc7XG4gICAgY29uZmlybUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gJ2NhbmNlbC1lZGl0JztcbiAgICBjYW5jZWxCdG4udHlwZSA9ICdidXR0b24nO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gICAgLy9hcHBlbmQgdG8gZm9ybSBlbGVtZW50XG4gICAgZWRpdElucHV0cy5hcHBlbmRDaGlsZChlZGl0VGl0bGUpO1xuICAgIGVkaXRJbnB1dHMuYXBwZW5kQ2hpbGQoZWRpdERhdGUpO1xuICAgIGNvbmZpcm1CdG5zLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuICAgIGNvbmZpcm1CdG5zLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gICAgdGFza0VkaXRGb3JtLmFwcGVuZENoaWxkKGVkaXRJbnB1dHMpO1xuICAgIHRhc2tFZGl0Rm9ybS5hcHBlbmRDaGlsZChjb25maXJtQnRucyk7XG5cbiAgICAvL2FwcGVuZCB0YXNrLWVkaXQtZm9ybSB0byB0YXNrIGVsZW1lbnRcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tFZGl0Rm9ybSk7XG5cbiAgICAvL2FkZCB0byBET01cbiAgICB0YXNrcy5hcHBlbmRDaGlsZChuZXdUYXNrKTtcblxuICAgIC8vZXZlbnQgbGlzdGVuZXIgZm9yIHRhc2sgY29tcGxldGlvblxuICAgIGNvbXBsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy9jaGFuZ2UgdGFzayBpbnN0YW5jZSBpbiB0YXNrTW9kdWxlXG4gICAgICAgIHRhc2tNb2R1bGUudG9nZ2xlQ29tcGxldGUobmV3VGFzay5kYXRhc2V0Lm51bSk7XG5cbiAgICAgICAgLy9jaGVjayBpZiB0YXNrIGNvbXBsZXRlZCBhbHJlYWR5XG4gICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWRpdFRhc2sudW5jb21wbGV0ZVRhc2sobmV3VGFzayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgZWRpdFRhc2suY29tcGxldGVUYXNrKG5ld1Rhc2spO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvL2V2ZW50IGxpc3RlbmVycyBmb3Igc2lkZSBpY29uc1xuICAgIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZWRpdFRhc2suZGlzcGxheUVkaXQobmV3VGFzaykpO1xuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlZGl0VGFzay5kZWxldGVUYXNrKG5ld1Rhc2spKTtcblxuICAgIC8vZXZlbnQgbGlzdGVuZXJzIGZvciBlZGl0IGZvcm1cbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZWRpdFRhc2suc3VibWl0RWRpdChuZXdUYXNrKSk7XG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZWRpdFRhc2sucmVzZXRFZGl0KG5ld1Rhc2spKTtcbiAgICAvL2V2ZW50TGlzdGVuZXJzIGZvciBmb3JtYXR0aW5nIG9mIGRhdGVcbiAgICBlZGl0RGF0ZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC50YXJnZXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIH0pO1xuICAgIGVkaXREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgaWYgKCFlZGl0RGF0ZS52YWx1ZSkge1xuICAgICAgICAgICAgZWRpdERhdGUudmFsdWUgPSBnZXREYXRlVG9kYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gZWRpdERhdGUudmFsdWU7XG4gICAgICAgICAgICBlZGl0RGF0ZS52YWx1ZSA9IGZvcm1hdERhdGUoZGF0ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuY29uc3QgZWRpdFRhc2sgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNvbXBsZXRlVGFzayh0YXNrKSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlSWNvbiA9IHRhc2sucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWljb24nKTtcbiAgICAgICAgY29tcGxldGVJY29uLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSg4MSwgMTkyLCA4MSwgMC4yNTMpJztcbiAgICAgICAgdGFzay5zdHlsZS5jb2xvciA9ICdyZ2IoMTUwLCAxNTAsIDE1MCknO1xuICAgICAgICB0YXNrLnN0eWxlLmJvcmRlckNvbG9yID0gJ3JnYigxNTAsIDE1MCwgMTUwKSc7XG4gICAgICAgIHRhc2suc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmNvbXBsZXRlVGFzayh0YXNrKSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlSWNvbiA9IHRhc2sucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWljb24nKTtcbiAgICAgICAgY29tcGxldGVJY29uLnN0eWxlLmJhY2tncm91bmQgPSAnaW5oZXJpdCc7XG4gICAgICAgIHRhc2suc3R5bGUuY29sb3IgPSAndmFyKC0tYmxhY2spJztcbiAgICAgICAgdGFzay5zdHlsZS5ib3JkZXJDb2xvciA9ICd2YXIoLS1ncmV5KSc7XG4gICAgICAgIHRhc2suc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUVkaXQodGFzaykge1xuICAgICAgICAvL3Nob3cgZWRpdCBmb3JtLCBkaXNwbGF5IG9mZiBmb3IgdGFzayBpbmZvXG4gICAgICAgIGNvbnN0IHRhc2tJbmZvID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuaW5mby13cmFwcGVyJyk7XG4gICAgICAgIGNvbnN0IHRhc2tGb3JtID0gdGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0LWZvcm0nKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gdGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEdWUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG4gICAgICAgIGNvbnN0IGVkaXRUaXRsZSA9IHRhc2sucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay10aXRsZScpO1xuICAgICAgICBjb25zdCBlZGl0RHVlID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWR1ZScpO1xuXG4gICAgICAgIGVkaXRUaXRsZS52YWx1ZSA9IHRhc2tUaXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgZWRpdER1ZS52YWx1ZSA9IHRhc2tEdWUudGV4dENvbnRlbnQ7XG4gICAgXG4gICAgICAgIHRvZ2dsZUZvcm1GbGV4KHRhc2tJbmZvLCB0YXNrRm9ybSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRFZGl0KHRhc2spIHtcbiAgICAgICAgLy9yZXNldCBmb3JtLCB0b2dnbGUgZGlzcGxheUVkaXRcbiAgICAgICAgdGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0LWZvcm0nKS5yZXNldCgpO1xuXG4gICAgICAgIGRpc3BsYXlFZGl0KHRhc2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1Ym1pdEVkaXQodGFzaykge1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKTtcbiAgICAgICAgY29uc3QgdGFza0R1ZSA9IHRhc2sucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbiAgICAgICAgY29uc3QgZWRpdGVkVGl0bGUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stdGl0bGUnKTtcbiAgICAgICAgY29uc3QgZWRpdGVkRHVlID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWR1ZScpO1xuXG4gICAgICAgIC8vdXBkYXRlIHRhc2sgaW5zdGFuY2UgaW4gdGFza01vZHVsZVxuICAgICAgICB0YXNrTW9kdWxlLnVwZGF0ZVRhc2tJbmZvKHRhc2suZGF0YXNldC5udW0sIGVkaXRlZFRpdGxlLnZhbHVlLCBlZGl0ZWREdWUudmFsdWUpO1xuXG4gICAgICAgIC8vY2hhbmdlIHRhc2sgdGl0bGUgYW5kIGRhdGUgYWNjb3JkaW5nIHRvIGZvcm1cbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gZWRpdGVkVGl0bGUudmFsdWU7XG4gICAgICAgIHRhc2tEdWUudGV4dENvbnRlbnQgPSBmb3JtYXREYXRlKGVkaXRlZER1ZS52YWx1ZSk7XG5cbiAgICAgICAgcmVzZXRFZGl0KHRhc2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFzaykge1xuICAgICAgICAvL2hhdmUgdG8gY2xlYXIgdGFza3MgYW5kIHJlY3JlYXRlIGFsbCBpbnN0YW5jZXMgYWdhaW4sIGFzIGRhdGFOdW0gaXMgc3ByZWFkIG91dFxuICAgICAgICBjbGVhclRhc2tzKCk7XG4gICAgICAgIC8vcmVtb3ZlIGluc3RhbmNlIGFuZCByZXNldCBsaXN0XG4gICAgICAgIHJlbW92ZVRhc2tJbnN0YW5jZSh0YXNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUYXNrSW5zdGFuY2UodGFzaykge1xuICAgICAgICAvL3JlbW92ZSBmcm9tIHRhc2sgYXJyYXlcbiAgICAgICAgdGFza01vZHVsZS5kZWxldGVUYXNrKHRhc2suZGF0YXNldC5udW0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyVGFza3MoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIHJldHVybiB7ZGlzcGxheUVkaXQsIHJlc2V0RWRpdCwgc3VibWl0RWRpdCwgY29tcGxldGVUYXNrLCB1bmNvbXBsZXRlVGFzaywgZGVsZXRlVGFza31cbn0pKCk7XG5cbmNvbnN0IFVJID0ge1xuICAgIGFkZFByb2plY3RMaW5rLFxuICAgIGFkZFRhc2tDZWxsLFxuICAgIGdldERhdGVUb2RheVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7IiwiaW1wb3J0IHN0b3JhZ2VNb2R1bGUgZnJvbSAnLi9zdG9yYWdlLmpzJ1xuaW1wb3J0IFVJTW9kdWxlIGZyb20gJy4vVUkuanMnXG5cbi8vRkFDVE9SWSBGVU5DVElPTiBGT1IgUFJPSkVDVFNcbmNvbnN0IENyZWF0ZVByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICAvL2luaXRpYWxpc2UgcHJvamVjdCBhcnJheVxuICAgIGxldCBkYXRhTnVtO1xuXG4gICAgLy9mdW5jdGlvbiB0byBzZXQgdGl0bGVcbiAgICBmdW5jdGlvbiBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldERhdGFOdW0obnVtKSB7XG4gICAgICAgIHRoaXMuZGF0YU51bSA9IG51bTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3RpdGxlLCBzZXRUaXRsZSwgZGF0YU51bSwgc2V0RGF0YU51bX07XG59XG5cbi8vaW5pdGlhbCBsb2FkIG9mIHdlYnBhZ2UgLSBcbmxldCBjdXJyUHJvajtcbmxldCBwcm9qQXJyYXkgPSBbXTtcblxuLy9jaGVjayBpZiBzdG9yYWdlIGhhcyBmaXJzdCBlbGVtZW50XG5pZiAoc3RvcmFnZU1vZHVsZS5oYXNQcm9qZWN0cygpKSB7XG4gICAgcHJvakFycmF5ID0gc3RvcmFnZU1vZHVsZS5nZXRQcm9qZWN0cygpO1xuICAgIGN1cnJQcm9qID0gcHJvakFycmF5WzBdO1xuICAgIC8vZ2V0IG1vcmUgaWYgc3RvcmFnZSBleGlzdHNcbiAgICBzaG93UHJvamVjdHMoKTtcbn0gZWxzZSB7IC8vZWxzZSBjcmVhdGUgb3duIHByb2plY3QgYW5kIHNhdmUgdG8gc3RvcmFnZVxuICAgIGN1cnJQcm9qID0gQ3JlYXRlUHJvamVjdCgnaW5ib3gnKTtcbiAgICBjdXJyUHJvai5zZXREYXRhTnVtKDApO1xuICAgIC8vc2F2ZSB0byBsb2NhbFN0b3JhZ2UgdW5kZXIgcHJvamVjdHNcbiAgICBhZGRUb0FycmF5KGN1cnJQcm9qKTtcblxuICAgIGNvbnN0IGRheVByb2ogPSBDcmVhdGVQcm9qZWN0KCd0b2RheScpO1xuICAgIGRheVByb2ouc2V0RGF0YU51bSgxKTtcbiAgICBhZGRUb0FycmF5KGRheVByb2opO1xuXG4gICAgY29uc3Qgd2Vla1Byb2ogPSBDcmVhdGVQcm9qZWN0KCd0aGlzIHdlZWsnKTtcbiAgICB3ZWVrUHJvai5zZXREYXRhTnVtKDIpO1xuICAgIGFkZFRvQXJyYXkod2Vla1Byb2opO1xufVxuXG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHsgLy9jaGVjayBpZiB0aGVyZSBhcmUgZXhpc3RpbmcgcHJvamVjdHMgaW4gc3RvcmFnZVxuICAgIGlmIChwcm9qQXJyYXkubGVuZ3RoID4gMykge1xuICAgICAgICBjb25zdCBsZW4gPSBwcm9qQXJyYXkubGVuZ3RoO1xuICAgICAgICAvL2dvIHRocm91Z2ggYWxsIHN0b3JlZCBwcm9qZWN0cyBhbmQgYWRkIHRoZW0gdG8gbGlua1xuICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJvaiA9IHByb2pBcnJheVtpXTtcbiAgICAgICAgICAgIFVJTW9kdWxlLmFkZFByb2plY3RMaW5rKHByb2oudGl0bGUsIHByb2ouZGF0YU51bSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2oobnVtKSB7XG4gICAgLy9zcGxpdCBhcnJheSBpbnRvIHR3bywgcmVtb3ZpbmcgYWZmZWN0aW5nIGVsZW1lbnRcbiAgICBsZXQgZmlyc3RIYWxmQXJyYXkgPSBwcm9qQXJyYXkuc2xpY2UoMCwgbnVtKTtcbiAgICBsZXQgc2Vjb25kSGFsZkFycmF5ID0gcHJvakFycmF5LnNsaWNlKHBhcnNlSW50KG51bSkgKyAxKTtcbiAgICAvL3VwZGF0ZSBkYXRhTnVtIG9mIHJlbWFpbmluZyB0YWJzXG4gICAgc2Vjb25kSGFsZkFycmF5LmZvckVhY2goZSA9PiBlLmRhdGFOdW0gLT0gMSk7XG4gICAgXG4gICAgLy9hc3NpZ24gYXJyYXkgYmFjayB0byBvcmlnaW5hbCBwcm9qQXJyYXlcbiAgICBsZXQgdGVtcEFycmF5ID0gZmlyc3RIYWxmQXJyYXkuY29uY2F0KHNlY29uZEhhbGZBcnJheSk7XG4gICAgdXBkYXRlQXJyYXkodGVtcEFycmF5KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQXJyYXkoYXJyKSB7XG4gICAgcHJvakFycmF5ID0gYXJyO1xuICAgIHNhdmVBcnJheSgpO1xufVxuXG5cbmZ1bmN0aW9uIGFkZFRvQXJyYXkocHJvaikge1xuICAgIHByb2pBcnJheS5wdXNoKHByb2opO1xuICAgIHNhdmVBcnJheSgpO1xufVxuXG5mdW5jdGlvbiBzYXZlQXJyYXkoKSB7XG4gICAgc3RvcmFnZU1vZHVsZS5hZGRQcm9qVG9TdG9yYWdlKHByb2pBcnJheSk7XG59XG5cbmZ1bmN0aW9uIGN1cnJlbnRQcm9qZWN0U2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIGN1cnJQcm9qO1xufVxuXG4vL3N3aXRjaCBwcm9qZWN0cyB0byBzZWxlY3RlZCBmcm9tIFVJXG5mdW5jdGlvbiBjaGFuZ2VQcm9qZWN0KGRhdGFOdW0pIHtcbiAgICBjdXJyUHJvaiA9IHByb2pBcnJheVtkYXRhTnVtXTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdEV4aXN0cyhwcm9qZWN0TmFtZSkge1xuICAgIHJldHVybiAocHJvakFycmF5Lm1hcChwcm9qZWN0ID0+IHByb2plY3QudGl0bGUpLmluY2x1ZGVzKHByb2plY3ROYW1lKSk7XG59XG5cbi8vQUREIFBST0pFQ1QgLyBzYXZlIHRvIHN0b3JhZ2VcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAvL2NyZWF0ZSBuZXcgaW5zdGFuY2Ugb2YgcHJvamVjdFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBDcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBuZXdQcm9qZWN0LmRhdGFOdW0gPSBwcm9qQXJyYXkubGVuZ3RoO1xuICAgIGFkZFRvQXJyYXkobmV3UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIG51bU9mUHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHByb2pBcnJheS5sZW5ndGhcbn1cblxuY29uc3QgcHJvamVjdE1vZHVsZSA9IHtcbiAgICBDcmVhdGVQcm9qZWN0LFxuICAgIGFkZE5ld1Byb2plY3QsXG4gICAgcHJvamVjdEV4aXN0cyxcbiAgICBjaGFuZ2VQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2osXG4gICAgbnVtT2ZQcm9qZWN0cyxcbiAgICBjdXJyZW50UHJvamVjdFNlbGVjdGVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNb2R1bGU7IiwiZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oMCkpO1xufVxuXG4vL2NoZWNrIGlmIGxvY2FsU3RvcmFnZSBoYXMgaXRlbXNcbmZ1bmN0aW9uIGhhc1Byb2plY3RzKCkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbMF07XG59XG5cbmZ1bmN0aW9uIGhhc1Rhc2tzKCkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbMV07XG59XG5cbmZ1bmN0aW9uIGFkZFByb2pUb1N0b3JhZ2UocHJvamVjdEFycmF5KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oMCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSk7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tzKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKDEpKTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvU3RvcmFnZSh0YXNrQXJyYXkpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgxLCBKU09OLnN0cmluZ2lmeSh0YXNrQXJyYXkpKTtcbn1cblxuY29uc3Qgc3RvcmFnZSA9IHtcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBoYXNQcm9qZWN0cyxcbiAgICBhZGRQcm9qVG9TdG9yYWdlLFxuICAgIGdldFRhc2tzLFxuICAgIGhhc1Rhc2tzLFxuICAgIGFkZFRhc2tUb1N0b3JhZ2UsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2U7IiwiaW1wb3J0IHByb2plY3RNb2R1bGUgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBzdG9yYWdlTW9kdWxlIGZyb20gJy4vc3RvcmFnZS5qcyc7XG5pbXBvcnQgVUlNb2R1bGUgZnJvbSAnLi9VSS5qcydcblxuLy9GQUNUT1JZIEZVTkNUSU9OIEZPUiBUQVNLU1xuY29uc3QgQ3JlYXRlVGFzayA9ICh0aXRsZSwgZHVlLCBjb21wbGV0ZWQpID0+IHtcbiAgICBsZXQgcHJvamVjdDtcbiAgICBsZXQgZGF0YU51bTtcbiAgICAvL2NoYW5nZSB0aXRsZSwgZmxhZyBvciBkYXRlXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldER1ZShkdWUpIHtcbiAgICAgICAgdGhpcy5kdWUgPSBkdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHt0aXRsZSwgZHVlLCBwcm9qZWN0LCBjb21wbGV0ZWQsIGRhdGFOdW0sIHNldFRpdGxlLCBzZXREdWV9O1xufTtcblxubGV0IHRhc2tBcnJheSA9IFtdO1xubGV0IGN1cnJlbnRQcm9qVGFza3MgPSBbXTtcblxuLy9jaGVjayBpZiBzdG9yYWdlIGhhcyB0YXNrc1xuaWYgKHN0b3JhZ2VNb2R1bGUuaGFzVGFza3MoKSkge1xuICAgIHRhc2tBcnJheSA9IHN0b3JhZ2VNb2R1bGUuZ2V0VGFza3MoKTtcbiAgICAvL2FkZCB0byBjdXJyUHJvakFyclxuICAgIHNldEN1cnJlbnRUYXNrcyhwcm9qZWN0TW9kdWxlLmN1cnJlbnRQcm9qZWN0U2VsZWN0ZWQoKSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlKG51bSkge1xuICAgIC8vc2V0IHRhc2sgY29tcGxldGVkIHRvIG9wcG9zaXRlIG9mIGl0c2VsZiwgaWRlbnRpZmllZCB3aXRoIGRhdGFOdW0gZnJvbSBVSU1vZHVsZVxuICAgIHRhc2tBcnJheVtudW1dLmNvbXBsZXRlZCA9ICF0YXNrQXJyYXlbbnVtXS5jb21wbGV0ZWQ7XG4gICAgc2F2ZUFycmF5KCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tJbmZvKG51bSwgbmV3VGl0bGUsIG5ld0R1ZSkge1xuICAgIGNvbnN0IHRhc2tUb0JlRWRpdGVkID0gdGFza0FycmF5W251bV07XG4gICAgdGFza1RvQmVFZGl0ZWQudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB0YXNrVG9CZUVkaXRlZC5kdWUgPSBuZXdEdWU7XG5cbiAgICBzYXZlQXJyYXkoKTtcbn1cblxuZnVuY3Rpb24gc2hvd1Rhc2tzVG9kYXkoZGF0ZSkge1xuICAgIGN1cnJlbnRQcm9qVGFza3MgPSB0YXNrQXJyYXkuZmlsdGVyKHRhc2sgPT4gdGFzay5kdWUgPT0gZGF0ZSk7XG4gICAgLy9zaG93IGZpbHRlcmVkIGFycmF5XG4gICAgc2hvd0N1cnJlbnRUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBzaG93V2Vla1Rhc2tzKGRhdGVSYW5nZSkge1xuICAgIGxldCB0b3RhbFRhc2tzID0gW107XG4gICAgZm9yIChsZXQgZGF0ZSBvZiBkYXRlUmFuZ2UpIHtcbiAgICAgICAgbGV0IGRheUFycmF5ID0gdGFza0FycmF5LmZpbHRlcih0YXNrID0+IHRhc2suZHVlID09IGRhdGUpO1xuICAgICAgICB0b3RhbFRhc2tzID0gdG90YWxUYXNrcy5jb25jYXQoZGF5QXJyYXkpO1xuICAgIH1cbiAgICBjdXJyZW50UHJvalRhc2tzID0gdG90YWxUYXNrcztcbiAgICBzaG93Q3VycmVudFRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRUYXNrcyhwcm9qZWN0KSB7XG4gICAgY3VycmVudFByb2pUYXNrcyA9IHRhc2tBcnJheS5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT0gcHJvamVjdC50aXRsZSk7XG4gICAgc2hvd0N1cnJlbnRUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBudW1PZlRhc2tzKCkge1xuICAgIHJldHVybiB0YXNrQXJyYXkubGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBzaG93Q3VycmVudFRhc2tzKCkge1xuICAgIGN1cnJlbnRQcm9qVGFza3MuZm9yRWFjaCh0YXNrID0+IFVJTW9kdWxlLmFkZFRhc2tDZWxsKHRhc2sudGl0bGUsIHRhc2suZHVlLCB0YXNrLmNvbXBsZXRlZCwgdGFzay5kYXRhTnVtKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvQXJyYXkodGFzaykge1xuICAgIHRhc2tBcnJheS5wdXNoKHRhc2spO1xuICAgIHNhdmVBcnJheSgpO1xufVxuXG5mdW5jdGlvbiBzYXZlQXJyYXkoKSB7XG4gICAgc3RvcmFnZU1vZHVsZS5hZGRUYXNrVG9TdG9yYWdlKHRhc2tBcnJheSk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2sodGFza05hbWUpIHtcbiAgICAvL25ldyBpbnN0YW5jZSBmcm9tIHRhc2sgZmFjdG9yeVxuICAgIGNvbnN0IG5ld1Rhc2sgPSBDcmVhdGVUYXNrKHRhc2tOYW1lKTtcbiAgICAvL3VwZGF0ZSBkYXRhTnVtXG4gICAgbmV3VGFzay5kYXRhTnVtID0gdGFza0FycmF5Lmxlbmd0aDtcbiAgICBuZXdUYXNrLmR1ZSA9IFVJTW9kdWxlLmdldERhdGVUb2RheSgpO1xuICAgIC8vdXBkYXRlIGxpbmtpbmcgcHJvamVjdFxuICAgIGNvbnN0IHByb2plY3RTZWxlY3RlZCA9IHByb2plY3RNb2R1bGUuY3VycmVudFByb2plY3RTZWxlY3RlZCgpO1xuICAgIG5ld1Rhc2sucHJvamVjdCA9IHByb2plY3RTZWxlY3RlZC50aXRsZTtcbiAgICAvL2FkZCB0byB0YXNrIGFycmF5XG4gICAgYWRkVG9BcnJheShuZXdUYXNrKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhudW0pIHtcbiAgICAvL3NwbGl0IGFycmF5IGludG8gdHdvLCByZW1vdmluZyBhZmZlY3RpbmcgZWxlbWVudFxuICAgIGxldCBmaXJzdEhhbGZBcnJheSA9IHRhc2tBcnJheS5zbGljZSgwLCBudW0pO1xuICAgIGxldCBzZWNvbmRIYWxmQXJyYXkgPSB0YXNrQXJyYXkuc2xpY2UocGFyc2VJbnQobnVtKSArIDEpO1xuICAgIC8vdXBkYXRlIGRhdGFOdW0gb2YgcmVtYWluaW5nIHRhYnNcbiAgICBzZWNvbmRIYWxmQXJyYXkuZm9yRWFjaChlID0+IGUuZGF0YU51bSAtPSAxKTtcbiAgICBcbiAgICAvL2Fzc2lnbiBhcnJheSBiYWNrIHRvIG9yaWdpbmFsIHByb2pBcnJheVxuICAgIGxldCB0ZW1wQXJyYXkgPSBmaXJzdEhhbGZBcnJheS5jb25jYXQoc2Vjb25kSGFsZkFycmF5KTtcbiAgICB1cGRhdGVBcnJheSh0ZW1wQXJyYXkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBcnJheShhcnIpIHtcbiAgICB0YXNrQXJyYXkgPSBhcnI7XG4gICAgc2F2ZUFycmF5KCk7XG4gICAgLy9yZWxvYWQgYWxsIHRhc2tzIHRvIGN1cnJlbnQgcHJvamVjdCBzZWxlY3RlZFxuICAgIHNldEN1cnJlbnRUYXNrcyhwcm9qZWN0TW9kdWxlLmN1cnJlbnRQcm9qZWN0U2VsZWN0ZWQoKSk7XG59XG5cbmNvbnN0IHRhc2sgPSB7XG4gICAgQ3JlYXRlVGFzayxcbiAgICBhZGROZXdUYXNrLFxuICAgIHNldEN1cnJlbnRUYXNrcyxcbiAgICBudW1PZlRhc2tzLFxuICAgIHRvZ2dsZUNvbXBsZXRlLFxuICAgIHVwZGF0ZVRhc2tJbmZvLFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgc2hvd1Rhc2tzVG9kYXksXG4gICAgc2hvd1dlZWtUYXNrc1xufVxuXG5leHBvcnQgZGVmYXVsdCB0YXNrOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc3RvcmFnZU1vZHVsZSBmcm9tICcuL21vZHVsZXMvc3RvcmFnZS5qcyc7XG5pbXBvcnQgdGFza01vZHVsZSBmcm9tICcuL21vZHVsZXMvdGFzay5qcyc7XG5pbXBvcnQgcHJvamVjdE1vZHVsZSBmcm9tICcuL21vZHVsZXMvcHJvamVjdC5qcyc7XG5pbXBvcnQgVUlNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1VJLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnOyJdLCJzb3VyY2VSb290IjoiIn0=