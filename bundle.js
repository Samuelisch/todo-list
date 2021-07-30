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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black: rgb(29, 29, 29);\n    --white: rgb(250, 250, 250);\n    --grey: rgb(121, 121, 121);\n}\n\nhtml,\nbody {\n    font-size: 8px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    color: var(--black);\n    background: rgb(235, 235, 235);\n}\n\n#header-bar {\n    padding: 18px 20px;\n    color: var(--white);\n    background: rgb(75, 75, 75);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh2 {\n    margin: 0;\n    font-size: 3rem;\n}\n\n.nav-btn {\n    background: inherit;\n    border: none;\n    color: var(--white);\n}\n\n.nav-bar {\n    display: none;\n    background: rgb(219, 219, 219);\n    color:rgb(37, 37, 37);\n    font-size: 1.5rem;\n    box-shadow: 0px 1px 2px var(--grey);\n    /* prevent highlights */\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                        supported by Chrome, Edge, Opera and Firefox */\n}\n\n.wrapper {\n    padding: 15px;\n}\n\n.list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.selection {\n    padding: 7px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.selection i,\n.add-project-btn i {\n    margin-right: 10px;\n}\n\n.selection:hover {\n    background:rgb(204, 204, 204);\n}\n\n.selected {\n    background: rgb(204, 204, 204);\n    font-weight: bold;\n}\n\nh3 {\n    font-size: 1.9rem;\n}\n\n.add-project-btn {\n    display: none;\n}\n\n.project {\n    justify-content: space-between;\n}\n\n.tab > * {\n    pointer-events: none;\n}\n\n.project-delete {\n    pointer-events: all;\n}\n\n.project-delete {\n    display: none;\n}\n\n.project-delete:hover {\n    color:rgb(190, 39, 39);\n}\n\n.project:hover .project-delete {\n    display: block;\n}\n\n.content {\n    margin: 20px;\n}\n\n.tasks {\n    margin: 5px;\n}\n\n.task {\n    font-size: 1.3rem;\n    color: var(--black);\n    border: 1px solid var(--grey);\n    border-radius: 10px;\n    padding: 10px 10px;\n    margin-top: 15px;\n}\n\n.task:hover {\n    background: rgb(204, 204, 204);\n}\n\n.info-wrapper {\n    display: none;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.complete-icon {\n    width: 12px;\n    height: 12px;\n    border: 1px solid var(--grey);\n    border-radius: 50%;\n}\n\n.task-name {\n    width: 55%;\n    margin-left: 5px;\n}\n\n.side-icons-wrapper {\n    display: flex;\n    width: 30px;\n    justify-content: space-between;\n}\n\n.edit-icon,\n.delete-icon {\n    display: none;\n    color: var(--grey);\n}\n\n.edit-icon:hover {\n    color: var(--black);\n}\n\n.delete-icon:hover {\n    color: rgb(190, 39, 39);\n}\n\n.task:hover .edit-icon,\n.task:hover .delete-icon {\n    display: block;\n}\n\n.task-edit-form {\n    display: none;\n    height: 50px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.edit-inputs {\n    display: flex;\n    width: 80%;\n    max-width: 600px;\n    justify-content: space-around;\n}\n\n.edit-task-title {\n    width: 50%;\n}\n\n.edit-task-due {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.confirm-edit-buttons {\n    width: 150px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.confirm-edit,\n.cancel-edit {\n    border: 1px solid var(--black);\n    border-radius: 5px;\n    background: inherit;\n}\n\n.confirm-edit:hover {\n    border: 1px solid rgba(149, 229, 149, 0.9);\n    background: rgba(149, 229, 149, 0.9);\n}\n\n.cancel-edit:hover {\n    border: 1px solid rgba(196, 94, 94, 0.9);\n    background: rgba(196, 94, 94, 0.9);\n}\n\n.project-form,\n.task-form {\n    display: none;\n    font-size: 13px;\n}\n\n.task-form {\n    text-align: center;\n}\n\n.add-task-btn {\n    font-size: 1.5rem;\n    display: none;\n    text-align: center;\n}\n\n.form-input {\n    border-radius: 3px;\n    border: 1px solid var(--black);\n    padding: 4px 8px;\n}\n\n.form-btns {\n    display: inline-block;\n}\n\n.form-btns button {\n    padding: 3px;\n}\n\n.task-submit-btn:hover,\n.project-submit-btn:hover {\n    background:rgba(149, 229, 149, 0.9);\n    border: 2px solid rgba(149, 229, 149, 0.9);\n}\n\n.task-cancel-btn:hover,\n.project-cancel-btn:hover {\n    background:rgba(196, 94, 94, 0.9);\n    color:rgb(235, 235, 235);\n    border: 2px solid rgba(196, 94, 94, 0.9);\n}\n\n.display-flex {\n    display: flex;\n}\n\n.display {\n    display: block;\n}\n\n@media (min-width: 321px) {\n    html,\n    body {\n        font-size: 10px;\n    }\n\n    .tasks {\n        margin: 10px;\n    }\n}\n\n@media (min-width: 769px) {\n    header {\n        position: fixed;\n        width: 100vw;\n        z-index: 5;\n    }\n\n    .nav-btn {\n        display: none;\n    }\n\n    .nav-wrap {\n        width: 30%;\n        max-width: 400px;\n    }\n\n    .nav-bar {\n        z-index: 1;\n        display: flex;\n        position: fixed;\n        width: inherit;\n        max-width: inherit;\n        height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper {\n        width: 100%;\n        overflow-y: scroll;\n        -ms-overflow-style: none;  /* Internet Explorer 10+ */\n        scrollbar-width: none;  /* Firefox */\n    }\n\n    .wrapper::-webkit-scrollbar { \n        display: none;  /* Safari and Chrome */\n    }\n\n    .wrapper ul:first-child {\n        margin-top: 80px;\n    }\n\n    .project-form {\n        margin-top: 10px;\n    }\n    \n    .content-wrapper {\n        display: flex;\n    }\n\n    .main-wrapper {\n        width: 60%;\n        margin: 80px;\n        flex: 2;\n        max-width: 1000px;\n    }\n}\n\n@media (max-width: 1030px) {\n    .project-form .form-btns {\n        margin-top: 10px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;;IAEI,cAAc;IACd,yCAAyC;IACzC,SAAS;IACT,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,2BAA2B;IAC3B,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,iBAAiB;IACjB,mCAAmC;IACnC,uBAAuB;IACvB,2BAA2B,EAAE,eAAe;IAC5C,yBAAyB,EAAE,WAAW;IACtC,wBAAwB,EAAE,mBAAmB;IAC7C,sBAAsB,EAAE,4BAA4B;IACpD,qBAAqB,EAAE,2BAA2B;IAClD,iBAAiB,EAAE;sEAC+C;AACtE;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;AACjB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,8BAA8B;AAClC;;AAEA;;IAEI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,UAAU;IACV,gBAAgB;IAChB,6BAA6B;AACjC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,6BAA6B;AACjC;;AAEA;;IAEI,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,0CAA0C;IAC1C,oCAAoC;AACxC;;AAEA;IACI,wCAAwC;IACxC,kCAAkC;AACtC;;AAEA;;IAEI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,mCAAmC;IACnC,0CAA0C;AAC9C;;AAEA;;IAEI,iCAAiC;IACjC,wBAAwB;IACxB,wCAAwC;AAC5C;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI;;QAEI,eAAe;IACnB;;IAEA;QACI,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,eAAe;QACf,YAAY;QACZ,UAAU;IACd;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,UAAU;QACV,gBAAgB;IACpB;;IAEA;QACI,UAAU;QACV,aAAa;QACb,eAAe;QACf,cAAc;QACd,kBAAkB;QAClB,aAAa;QACb,gBAAgB;IACpB;;IAEA;QACI,WAAW;QACX,kBAAkB;QAClB,wBAAwB,GAAG,0BAA0B;QACrD,qBAAqB,GAAG,YAAY;IACxC;;IAEA;QACI,aAAa,GAAG,sBAAsB;IAC1C;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,UAAU;QACV,YAAY;QACZ,OAAO;QACP,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,gBAAgB;IACpB;AACJ","sourcesContent":[":root {\n    --black: rgb(29, 29, 29);\n    --white: rgb(250, 250, 250);\n    --grey: rgb(121, 121, 121);\n}\n\nhtml,\nbody {\n    font-size: 8px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    color: var(--black);\n    background: rgb(235, 235, 235);\n}\n\n#header-bar {\n    padding: 18px 20px;\n    color: var(--white);\n    background: rgb(75, 75, 75);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh2 {\n    margin: 0;\n    font-size: 3rem;\n}\n\n.nav-btn {\n    background: inherit;\n    border: none;\n    color: var(--white);\n}\n\n.nav-bar {\n    display: none;\n    background: rgb(219, 219, 219);\n    color:rgb(37, 37, 37);\n    font-size: 1.5rem;\n    box-shadow: 0px 1px 2px var(--grey);\n    /* prevent highlights */\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                        supported by Chrome, Edge, Opera and Firefox */\n}\n\n.wrapper {\n    padding: 15px;\n}\n\n.list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.selection {\n    padding: 7px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.selection i,\n.add-project-btn i {\n    margin-right: 10px;\n}\n\n.selection:hover {\n    background:rgb(204, 204, 204);\n}\n\n.selected {\n    background: rgb(204, 204, 204);\n    font-weight: bold;\n}\n\nh3 {\n    font-size: 1.9rem;\n}\n\n.add-project-btn {\n    display: none;\n}\n\n.project {\n    justify-content: space-between;\n}\n\n.tab > * {\n    pointer-events: none;\n}\n\n.project-delete {\n    pointer-events: all;\n}\n\n.project-delete {\n    display: none;\n}\n\n.project-delete:hover {\n    color:rgb(190, 39, 39);\n}\n\n.project:hover .project-delete {\n    display: block;\n}\n\n.content {\n    margin: 20px;\n}\n\n.tasks {\n    margin: 5px;\n}\n\n.task {\n    font-size: 1.3rem;\n    color: var(--black);\n    border: 1px solid var(--grey);\n    border-radius: 10px;\n    padding: 10px 10px;\n    margin-top: 15px;\n}\n\n.task:hover {\n    background: rgb(204, 204, 204);\n}\n\n.info-wrapper {\n    display: none;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.complete-icon {\n    width: 12px;\n    height: 12px;\n    border: 1px solid var(--grey);\n    border-radius: 50%;\n}\n\n.task-name {\n    width: 55%;\n    margin-left: 5px;\n}\n\n.side-icons-wrapper {\n    display: flex;\n    width: 30px;\n    justify-content: space-between;\n}\n\n.edit-icon,\n.delete-icon {\n    display: none;\n    color: var(--grey);\n}\n\n.edit-icon:hover {\n    color: var(--black);\n}\n\n.delete-icon:hover {\n    color: rgb(190, 39, 39);\n}\n\n.task:hover .edit-icon,\n.task:hover .delete-icon {\n    display: block;\n}\n\n.task-edit-form {\n    display: none;\n    height: 50px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.edit-inputs {\n    display: flex;\n    width: 80%;\n    max-width: 600px;\n    justify-content: space-around;\n}\n\n.edit-task-title {\n    width: 50%;\n}\n\n.edit-task-due {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.confirm-edit-buttons {\n    width: 150px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.confirm-edit,\n.cancel-edit {\n    border: 1px solid var(--black);\n    border-radius: 5px;\n    background: inherit;\n}\n\n.confirm-edit:hover {\n    border: 1px solid rgba(149, 229, 149, 0.9);\n    background: rgba(149, 229, 149, 0.9);\n}\n\n.cancel-edit:hover {\n    border: 1px solid rgba(196, 94, 94, 0.9);\n    background: rgba(196, 94, 94, 0.9);\n}\n\n.project-form,\n.task-form {\n    display: none;\n    font-size: 13px;\n}\n\n.task-form {\n    text-align: center;\n}\n\n.add-task-btn {\n    font-size: 1.5rem;\n    display: none;\n    text-align: center;\n}\n\n.form-input {\n    border-radius: 3px;\n    border: 1px solid var(--black);\n    padding: 4px 8px;\n}\n\n.form-btns {\n    display: inline-block;\n}\n\n.form-btns button {\n    padding: 3px;\n}\n\n.task-submit-btn:hover,\n.project-submit-btn:hover {\n    background:rgba(149, 229, 149, 0.9);\n    border: 2px solid rgba(149, 229, 149, 0.9);\n}\n\n.task-cancel-btn:hover,\n.project-cancel-btn:hover {\n    background:rgba(196, 94, 94, 0.9);\n    color:rgb(235, 235, 235);\n    border: 2px solid rgba(196, 94, 94, 0.9);\n}\n\n.display-flex {\n    display: flex;\n}\n\n.display {\n    display: block;\n}\n\n@media (min-width: 321px) {\n    html,\n    body {\n        font-size: 10px;\n    }\n\n    .tasks {\n        margin: 10px;\n    }\n}\n\n@media (min-width: 769px) {\n    header {\n        position: fixed;\n        width: 100vw;\n        z-index: 5;\n    }\n\n    .nav-btn {\n        display: none;\n    }\n\n    .nav-wrap {\n        width: 30%;\n        max-width: 400px;\n    }\n\n    .nav-bar {\n        z-index: 1;\n        display: flex;\n        position: fixed;\n        width: inherit;\n        max-width: inherit;\n        height: 100vh;\n        overflow: hidden;\n    }\n\n    .wrapper {\n        width: 100%;\n        overflow-y: scroll;\n        -ms-overflow-style: none;  /* Internet Explorer 10+ */\n        scrollbar-width: none;  /* Firefox */\n    }\n\n    .wrapper::-webkit-scrollbar { \n        display: none;  /* Safari and Chrome */\n    }\n\n    .wrapper ul:first-child {\n        margin-top: 80px;\n    }\n\n    .project-form {\n        margin-top: 10px;\n    }\n    \n    .content-wrapper {\n        display: flex;\n    }\n\n    .main-wrapper {\n        width: 60%;\n        margin: 80px;\n        flex: 2;\n        max-width: 1000px;\n    }\n}\n\n@media (max-width: 1030px) {\n    .project-form .form-btns {\n        margin-top: 10px;\n    }\n}"],"sourceRoot":""}]);
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
            alert("Project already exists!");
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
        result.push(formatDate(`${d.getFullYear()}-${fillSingleNum(d.getMonth() + 1)}-${fillSingleNum(d.getDate())}`));
    }

    return result;
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

const addProjectLink = (projectName, dataNum = _project_js__WEBPACK_IMPORTED_MODULE_1__.default.numOfProjects()) => {
    const projects = document.querySelector('.projects');

    //create new list element, set dataset link to project(count);
    const newLink = document.createElement('li');
    newLink.className = "selection project tab";
    newLink.dataset.num = dataNum;
    //create icon
    const leftWrapper = document.createElement('div');
    leftWrapper.className = 'project-info';
    const icon = document.createElement('i');
    icon.className = 'far fa-list-alt';
    //create default project name
    const projTitle = document.createElement('span');
    projTitle.className = 'project-title';
    projTitle.textContent = projectName;
    //create delete button - to be shown only on hover
    const deleteIcon = document.createElement('div');
    deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>';
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
};

const removeProjectLink = (linkToRemove, num) => {
    linkToRemove.remove();
    clearContent();
    //update projectArray
    _project_js__WEBPACK_IMPORTED_MODULE_1__.default.deleteProj(num);
};

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
};

const deleteProjectLink = (link) => {
    const dataNum = link.dataset.num;
    //remove html element
    removeProjectLink(link, dataNum);
    updateProjectNums(dataNum);
};

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
    taskDue.textContent = dueDate || getDateToday();

    //append edit and delete icons to right side of date div.
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
};

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

    return {displayEdit, resetEdit, submitEdit, completeTask, uncompleteTask, deleteTask};
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
    }

    function setDataNum(num) {
        this.dataNum = num;
    }

    return {title, setTitle, dataNum, setDataNum};
};

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
    return projArray.length;
}

const projectModule = {
    CreateProject,
    addNewProject,
    projectExists,
    changeProject,
    deleteProj,
    numOfProjects,
    currentProjectSelected
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
        const dateSelected = date;
        let dayArray = taskArray.filter(task => task.due == dateSelected);
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
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");
/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task.js */ "./src/modules/task.js");
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/UI.js */ "./src/modules/UI.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELCtCQUErQixrQ0FBa0MsaUNBQWlDLEdBQUcsaUJBQWlCLHFCQUFxQixnREFBZ0QsZ0JBQWdCLDBCQUEwQixxQ0FBcUMsR0FBRyxpQkFBaUIseUJBQXlCLDBCQUEwQixrQ0FBa0Msb0JBQW9CLHFDQUFxQywwQkFBMEIsR0FBRyxRQUFRLGdCQUFnQixzQkFBc0IsR0FBRyxjQUFjLDBCQUEwQixtQkFBbUIsMEJBQTBCLEdBQUcsY0FBYyxvQkFBb0IscUNBQXFDLDRCQUE0Qix3QkFBd0IsMENBQTBDLGdFQUFnRSxpREFBaUQsNENBQTRDLGtEQUFrRCwwREFBMEQscURBQXFELCtHQUErRyxjQUFjLG9CQUFvQixHQUFHLFdBQVcsZ0JBQWdCLGlCQUFpQix1QkFBdUIsR0FBRyxnQkFBZ0IsbUJBQW1CLHlCQUF5QixvQkFBb0IsR0FBRyx1Q0FBdUMseUJBQXlCLEdBQUcsc0JBQXNCLG9DQUFvQyxHQUFHLGVBQWUscUNBQXFDLHdCQUF3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QUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLHlCQUF5Qix1QkFBdUIsT0FBTyxLQUFLLHNCQUFzQixPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUss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QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBd0I7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZEQUE2RCx3REFBcUI7O0FBRWxGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQXlCOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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RUFBb0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVFQUFvQztBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEU7Ozs7OztVQ25KbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOaUQ7QUFDTjtBQUNNO0FBQ1YiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1ibGFjazogcmdiKDI5LCAyOSwgMjkpO1xcbiAgICAtLXdoaXRlOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxuICAgIC0tZ3JleTogcmdiKDEyMSwgMTIxLCAxMjEpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbn1cXG5cXG4jaGVhZGVyLWJhciB7XFxuICAgIHBhZGRpbmc6IDE4cHggMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDc1LCA3NSwgNzUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMTksIDIxOSwgMjE5KTtcXG4gICAgY29sb3I6cmdiKDM3LCAzNywgMzcpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggdmFyKC0tZ3JleSk7XFxuICAgIC8qIHByZXZlbnQgaGlnaGxpZ2h0cyAqL1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXFxuICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSwgRWRnZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2VsZWN0aW9uIGksXFxuLmFkZC1wcm9qZWN0LWJ0biBpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uc2VsZWN0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjA0LCAyMDQsIDIwNCk7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjlyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhYiA+ICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcXG4gICAgY29sb3I6cmdiKDE5MCwgMzksIDM5KTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIgLnByb2plY3QtZGVsZXRlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxufVxcblxcbi5pbmZvLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZS1pY29uIHtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5zaWRlLWljb25zLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZWRpdC1pY29uLFxcbi5kZWxldGUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLmVkaXQtaWNvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5kZWxldGUtaWNvbjpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMTkwLCAzOSwgMzkpO1xcbn1cXG5cXG4udGFzazpob3ZlciAuZWRpdC1pY29uLFxcbi50YXNrOmhvdmVyIC5kZWxldGUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1lZGl0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmVkaXQtaW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5lZGl0LXRhc2stdGl0bGUge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZWRpdC10YXNrLWR1ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29uZmlybS1lZGl0LWJ1dHRvbnMge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uY29uZmlybS1lZGl0LFxcbi5jYW5jZWwtZWRpdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbn1cXG5cXG4uY29uZmlybS1lZGl0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNDksIDIyOSwgMTQ5LCAwLjkpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0OSwgMjI5LCAxNDksIDAuOSk7XFxufVxcblxcbi5jYW5jZWwtZWRpdDpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0sXFxuLnRhc2stZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICAgIHBhZGRpbmc6IDRweCA4cHg7XFxufVxcblxcbi5mb3JtLWJ0bnMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5mb3JtLWJ0bnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4udGFzay1zdWJtaXQtYnRuOmhvdmVyLFxcbi5wcm9qZWN0LXN1Ym1pdC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMTQ5LCAyMjksIDE0OSwgMC45KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxNDksIDIyOSwgMTQ5LCAwLjkpO1xcbn1cXG5cXG4udGFzay1jYW5jZWwtYnRuOmhvdmVyLFxcbi5wcm9qZWN0LWNhbmNlbC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMTk2LCA5NCwgOTQsIDAuOSk7XFxuICAgIGNvbG9yOnJnYigyMzUsIDIzNSwgMjM1KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxOTYsIDk0LCA5NCwgMC45KTtcXG59XFxuXFxuLmRpc3BsYXktZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjFweCkge1xcbiAgICBodG1sLFxcbiAgICBib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgfVxcblxcbiAgICAudGFza3Mge1xcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xcbiAgICBoZWFkZXIge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgei1pbmRleDogNTtcXG4gICAgfVxcblxcbiAgICAubmF2LWJ0biB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtd3JhcCB7XFxuICAgICAgICB3aWR0aDogMzAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgfVxcblxcbiAgICAubmF2LWJhciB7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgLndyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cXG4gICAgfVxcblxcbiAgICAud3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7ICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xcbiAgICB9XFxuXFxuICAgIC53cmFwcGVyIHVsOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZm9ybSB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuY29udGVudC13cmFwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4td3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgbWFyZ2luOiA4MHB4O1xcbiAgICAgICAgZmxleDogMjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcXG4gICAgLnByb2plY3QtZm9ybSAuZm9ybS1idG5zIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2Vi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QTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQywwQ0FBMEM7QUFDOUM7O0FBRUE7O0lBRUksaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4Qix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJOztRQUVJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osVUFBVTtJQUNkOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsYUFBYTtRQUNiLGVBQWU7UUFDZixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLHdCQUF3QixHQUFHLDBCQUEwQjtRQUNyRCxxQkFBcUIsR0FBRyxZQUFZO0lBQ3hDOztJQUVBO1FBQ0ksYUFBYSxHQUFHLHNCQUFzQjtJQUMxQzs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLE9BQU87UUFDUCxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJsYWNrOiByZ2IoMjksIDI5LCAyOSk7XFxuICAgIC0td2hpdGU6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG4gICAgLS1ncmV5OiByZ2IoMTIxLCAxMjEsIDEyMSk7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxufVxcblxcbiNoZWFkZXItYmFyIHtcXG4gICAgcGFkZGluZzogMThweCAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzUsIDc1LCA3NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIxOSwgMjE5LCAyMTkpO1xcbiAgICBjb2xvcjpyZ2IoMzcsIDM3LCAzNyk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCB2YXIoLS1ncmV5KTtcXG4gICAgLyogcHJldmVudCBoaWdobGlnaHRzICovXFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBFZGdlLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5saXN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zZWxlY3Rpb24gaSxcXG4uYWRkLXByb2plY3QtYnRuIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5zZWxlY3Rpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOnJnYigyMDQsIDIwNCwgMjA0KTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIwNCwgMjA0LCAyMDQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuOXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFiID4gKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUge1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGU6aG92ZXIge1xcbiAgICBjb2xvcjpyZ2IoMTkwLCAzOSwgMzkpO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciAucHJvamVjdC1kZWxldGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG59XFxuXFxuLmluZm8td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlLWljb24ge1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFzay1uYW1lIHtcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLnNpZGUtaWNvbnMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5lZGl0LWljb24sXFxuLmRlbGV0ZS1pY29uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4uZWRpdC1pY29uOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLmRlbGV0ZS1pY29uOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigxOTAsIDM5LCAzOSk7XFxufVxcblxcbi50YXNrOmhvdmVyIC5lZGl0LWljb24sXFxuLnRhc2s6aG92ZXIgLmRlbGV0ZS1pY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWVkaXQtZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZWRpdC1pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmVkaXQtdGFzay10aXRsZSB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5lZGl0LXRhc2stZHVlIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb25maXJtLWVkaXQtYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5jb25maXJtLWVkaXQsXFxuLmNhbmNlbC1lZGl0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxufVxcblxcbi5jb25maXJtLWVkaXQ6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0OSwgMjI5LCAxNDksIDAuOSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTQ5LCAyMjksIDE0OSwgMC45KTtcXG59XFxuXFxuLmNhbmNlbC1lZGl0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTYsIDk0LCA5NCwgMC45KTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDk0LCA5NCwgMC45KTtcXG59XFxuXFxuLnByb2plY3QtZm9ybSxcXG4udGFzay1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0taW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG59XFxuXFxuLmZvcm0tYnRucyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmZvcm0tYnRucyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi50YXNrLXN1Ym1pdC1idG46aG92ZXIsXFxuLnByb2plY3Qtc3VibWl0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgxNDksIDIyOSwgMTQ5LCAwLjkpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE0OSwgMjI5LCAxNDksIDAuOSk7XFxufVxcblxcbi50YXNrLWNhbmNlbC1idG46aG92ZXIsXFxuLnByb2plY3QtY2FuY2VsLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6cmdiYSgxOTYsIDk0LCA5NCwgMC45KTtcXG4gICAgY29sb3I6cmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE5NiwgOTQsIDk0LCAwLjkpO1xcbn1cXG5cXG4uZGlzcGxheS1mbGV4IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMXB4KSB7XFxuICAgIGh0bWwsXFxuICAgIGJvZHkge1xcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC50YXNrcyB7XFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICAgIGhlYWRlciB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICB6LWluZGV4OiA1O1xcbiAgICB9XFxuXFxuICAgIC5uYXYtYnRuIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm5hdi13cmFwIHtcXG4gICAgICAgIHdpZHRoOiAzMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5uYXYtYmFyIHtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgICAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAud3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xcbiAgICB9XFxuXFxuICAgIC53cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7IFxcbiAgICAgICAgZGlzcGxheTogbm9uZTsgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXFxuICAgIH1cXG5cXG4gICAgLndyYXBwZXIgdWw6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1mb3JtIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5jb250ZW50LXdyYXBwZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAubWFpbi13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICBtYXJnaW46IDgwcHg7XFxuICAgICAgICBmbGV4OiAyO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzBweCkge1xcbiAgICAucHJvamVjdC1mb3JtIC5mb3JtLWJ0bnMge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHRhc2tNb2R1bGUgZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCBwcm9qZWN0TW9kdWxlIGZyb20gJy4vcHJvamVjdC5qcyc7XG5cbi8vUEFHRSBCRUhBVklPVVJcbmNvbnN0IG5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYnRuJyk7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJhcicpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcbmNvbnN0IGFkZFByb2pCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuY29uc3QgYWRkUHJvakJ0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXN1Ym1pdC1idG4nKTtcbmNvbnN0IGFkZFRhc2tCdG5TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1zdWJtaXQtYnRuJyk7XG5jb25zdCBwcm9qZWN0QnRuQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2FuY2VsLWJ0bicpO1xuY29uc3QgdGFza0J0bkNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNhbmNlbC1idG4nKTtcbmxldCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG5jb25zdCBkYXlUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5Jyk7XG5jb25zdCB3ZWVrVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWsnKTtcblxuY29uc3QgcGFnZUZ1bmN0aW9ucyA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gZHJvcGRvd25NZW51KCkge1xuICAgICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzcGxheScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1Ym1pdFByb2plY3RGb3JtKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvL2dldCB0aXRsZSBvZiBwcm9qZWN0IGZyb20gZm9ybVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0gaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICAgICAgYWxlcnQoXCJJbnB1dCByZXF1aXJlZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvamVjdE1vZHVsZS5wcm9qZWN0RXhpc3RzKHRpdGxlKSkge1xuICAgICAgICAgICAgYWxlcnQoXCJQcm9qZWN0IGFscmVhZHkgZXhpc3RzIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL2FkZCBET00gZWxlbWVudHNcbiAgICAgICAgYWRkUHJvamVjdExpbmsodGl0bGUpO1xuICAgICAgICAvL2NyZWF0ZSBpbnN0YW5jZSBvZiBwcm9qZWN0IGZyb20gZmFjdG9yeVxuICAgICAgICBwcm9qZWN0TW9kdWxlLmFkZE5ld1Byb2plY3QodGl0bGUpO1xuICAgICAgICBjYW5jZWxGb3JtKHByb2plY3RGb3JtLCBhZGRQcm9qQnRuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJtaXRUYXNrRm9ybShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9nZXQgdGl0bGUgb2YgdGFzayBmcm9tIGZvcm1cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtIGlucHV0JykudmFsdWU7XG4gICAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5wdXQgcmVxdWlyZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy9hZGQgRE9NIGVsZW1lbnRzXG4gICAgICAgIGFkZFRhc2tDZWxsKHRpdGxlKTtcbiAgICAgICAgLy9jcmVhdGUgaW5zdGFuY2Ugb2YgdGFzayBmcm9tIGZhY3RvcnlcbiAgICAgICAgdGFza01vZHVsZS5hZGROZXdUYXNrKHRpdGxlKTtcbiAgICAgICAgY2FuY2VsRm9ybSh0YXNrRm9ybSwgYWRkVGFza0J0bik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tMaW5rKGUpIHtcbiAgICAgICAgbGV0IGxpbmsgPSBlLnRhcmdldDtcbiAgICAgICAgLy9jaGVjayBpZiBzYW1lIGxpbmsgYXMgc2VsZWN0ZWRcbiAgICAgICAgaWYgKHNhbWVMaW5rKGxpbmspKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIGRheSBvciB3ZWVrIHRhYnMgc2VsZWN0ZWRcbiAgICAgICAgaWYgKGxpbmsgPT0gZGF5VGFiIHx8IGxpbmsgPT0gd2Vla1RhYikge1xuICAgICAgICAgICAgcmVtb3ZlUHJldmlvdXNIaWdobGlnaHQoKTtcbiAgICAgICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgaWYgKGxpbmsgPT0gZGF5VGFiKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE1vZHVsZS5jaGFuZ2VQcm9qZWN0KDEpO1xuICAgICAgICAgICAgICAgIC8vZ2V0IHRhc2tzIHRoYXQgY29pbmNpZGUgd2l0aCBkYXRlIHRvZGF5XG4gICAgICAgICAgICAgICAgdGFza01vZHVsZS5zaG93VGFza3NUb2RheShnZXREYXRlVG9kYXkoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2plY3RNb2R1bGUuY2hhbmdlUHJvamVjdCgyKTtcbiAgICAgICAgICAgICAgICAvL2dldCB0YXNrcyB0aGF0IGNvaW5jaWRlIHdpdGggNyBkYXlzIGFoZWFkLCBpbmNsdWRpbmcgdG9kYXlcbiAgICAgICAgICAgICAgICB0YXNrTW9kdWxlLnNob3dXZWVrVGFza3MoZ2V0V2VlaygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXRyYXNoLWFsdCcpKSB7XG4gICAgICAgICAgICAvL2lnbm9yZSBkZWxldGUgYnV0dG9uIGVsZW1lbnRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RMaW5rKGxpbmspO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdExpbmsobGluaykge1xuICAgICAgICByZW1vdmVQcmV2aW91c0hpZ2hsaWdodCgpO1xuICAgICAgICAvL3N3aXRjaCB0byBzZWxlY3RlZCBsaW5rXG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgLy9jaGFuZ2UgcHJvamVjdCBjdXJyUHJvaiB0byBzZWxlY3RlZCBsaW5rJ3MgZGF0YW51bVxuICAgICAgICBwcm9qZWN0TW9kdWxlLmNoYW5nZVByb2plY3QobGluay5kYXRhc2V0Lm51bSk7XG4gICAgICAgIC8vY2xlYXIgcHJldmlvdXMgY29udGVudCBvZiBwcm9qZWN0XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICAvL3VwZGF0ZSBjb250ZW50IHdpdGggY3VyclByb2oncyB0YXNrc1xuICAgICAgICB1cGRhdGVDb250ZW50KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2FtZUxpbmsobGluaykge1xuICAgICAgICByZXR1cm4gKGxpbmtTZWxlY3RlZCgpID09IGxpbmspO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpbmtTZWxlY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVByZXZpb3VzSGlnaGxpZ2h0KCkge1xuICAgICAgICBjb25zdCBoaWdobGlnaHRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuICAgICAgICBpZiAoIWhpZ2hsaWdodGVkKSByZXR1cm47XG4gICAgICAgIGhpZ2hsaWdodGVkLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgLy9ldmVudCBsaXN0ZW5lcnMgZm9yIG5hdkJ0biBhbmQgYWRkIHByb2plY3QgYnRuXG4gICAgbmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZHJvcGRvd25NZW51KTtcbiAgICAvL3Bhc3NlcyBmdW5jdGlvbiB0byB3YWl0IGZvciBldmVudCBiZWZvcmUgY2FsbGluZyB0b2dnbGVGb3Jtc1xuICAgIGFkZFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVGb3JtKHByb2plY3RGb3JtLCBhZGRQcm9qQnRuKSk7XG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZUZvcm0odGFza0Zvcm0sIGFkZFRhc2tCdG4pKTtcbiAgICBwcm9qZWN0QnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FuY2VsRm9ybShwcm9qZWN0Rm9ybSwgYWRkUHJvakJ0bikpO1xuICAgIHRhc2tCdG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYW5jZWxGb3JtKHRhc2tGb3JtLCBhZGRUYXNrQnRuKSk7XG4gICAgYWRkUHJvakJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFByb2plY3RGb3JtKTtcbiAgICBhZGRUYXNrQnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0VGFza0Zvcm0pO1xuICAgIC8vZXZlbnQgbGlzdGVuZXIgZm9yIGNsaWNrcyBvbiBwcm9qZWN0IHRhYnNcbiAgICBsaXN0SXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0xpbmspKTtcblxuICAgIHJldHVybiB7Y2hlY2tMaW5rLCBsaW5rU2VsZWN0ZWR9O1xufSkoKTtcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgdGFza3MuaW5uZXJIVE1MID0gJyc7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRlbnQoKSB7XG4gICAgdGFza01vZHVsZS5zZXRDdXJyZW50VGFza3MocHJvamVjdE1vZHVsZS5jdXJyZW50UHJvamVjdFNlbGVjdGVkKCkpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVGb3JtKC4uLmFyZ3MpIHtcbiAgICBhcmdzLmZvckVhY2goYXJncyA9PiBhcmdzLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc3BsYXknKSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUZvcm1GbGV4KC4uLmFyZ3MpIHtcbiAgICBhcmdzLmZvckVhY2goYXJncyA9PiBhcmdzLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc3BsYXktZmxleCcpKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsRm9ybShlbGVtZW50MSwgZWxlbWVudDIpIHtcbiAgICBlbGVtZW50MS5yZXNldCgpO1xuICAgIHRvZ2dsZUZvcm0oZWxlbWVudDEsIGVsZW1lbnQyKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZVRvZGF5KCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiBmb3JtYXREYXRlKGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtmaWxsU2luZ2xlTnVtKGRhdGUuZ2V0TW9udGgoKSArIDEpfS0ke2ZpbGxTaW5nbGVOdW0oZGF0ZS5nZXREYXRlKCkpfWApO1xufVxuXG5mdW5jdGlvbiBnZXRXZWVrKCkge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSArIGkpO1xuICAgICAgICByZXN1bHQucHVzaChmb3JtYXREYXRlKGAke2QuZ2V0RnVsbFllYXIoKX0tJHtmaWxsU2luZ2xlTnVtKGQuZ2V0TW9udGgoKSArIDEpfS0ke2ZpbGxTaW5nbGVOdW0oZC5nZXREYXRlKCkpfWApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmaWxsU2luZ2xlTnVtKG51bSkge1xuICAgIGlmIChudW0gPCAxMCkge1xuICAgICAgICByZXR1cm4gYDAke251bX1gO1xuICAgIH1cbiAgICByZXR1cm4gbnVtO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZVxuICAgICAgICAgICAgLnNwbGl0KCctJylcbiAgICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAgIC5qb2luKCcvJyk7XG59XG5cbmNvbnN0IGFkZFByb2plY3RMaW5rID0gKHByb2plY3ROYW1lLCBkYXRhTnVtID0gcHJvamVjdE1vZHVsZS5udW1PZlByb2plY3RzKCkpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuXG4gICAgLy9jcmVhdGUgbmV3IGxpc3QgZWxlbWVudCwgc2V0IGRhdGFzZXQgbGluayB0byBwcm9qZWN0KGNvdW50KTtcbiAgICBjb25zdCBuZXdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBuZXdMaW5rLmNsYXNzTmFtZSA9IFwic2VsZWN0aW9uIHByb2plY3QgdGFiXCI7XG4gICAgbmV3TGluay5kYXRhc2V0Lm51bSA9IGRhdGFOdW07XG4gICAgLy9jcmVhdGUgaWNvblxuICAgIGNvbnN0IGxlZnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdFdyYXBwZXIuY2xhc3NOYW1lID0gJ3Byb2plY3QtaW5mbyc7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpY29uLmNsYXNzTmFtZSA9ICdmYXIgZmEtbGlzdC1hbHQnO1xuICAgIC8vY3JlYXRlIGRlZmF1bHQgcHJvamVjdCBuYW1lXG4gICAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByb2pUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdC10aXRsZSc7XG4gICAgcHJvalRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgLy9jcmVhdGUgZGVsZXRlIGJ1dHRvbiAtIHRvIGJlIHNob3duIG9ubHkgb24gaG92ZXJcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVsZXRlSWNvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0XCI+PC9pPic7XG4gICAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSAncHJvamVjdC1kZWxldGUnO1xuICAgIFxuICAgIC8vYXBwZW5kIGNoaWxkcmVuIHRvIGxpbmtcbiAgICBsZWZ0V3JhcHBlci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBsZWZ0V3JhcHBlci5hcHBlbmRDaGlsZChwcm9qVGl0bGUpO1xuICAgIG5ld0xpbmsuYXBwZW5kQ2hpbGQobGVmdFdyYXBwZXIpO1xuICAgIG5ld0xpbmsuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgICAvL2FwcGVuZCBsaW5rIHRvIHByb2plY3RcbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChuZXdMaW5rKTtcblxuICAgIG5ld0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwYWdlRnVuY3Rpb25zLmNoZWNrTGluayk7XG5cbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGVsZXRlUHJvamVjdExpbmsobmV3TGluaykpO1xufTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdExpbmsgPSAobGlua1RvUmVtb3ZlLCBudW0pID0+IHtcbiAgICBsaW5rVG9SZW1vdmUucmVtb3ZlKCk7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgLy91cGRhdGUgcHJvamVjdEFycmF5XG4gICAgcHJvamVjdE1vZHVsZS5kZWxldGVQcm9qKG51bSk7XG59O1xuXG5jb25zdCB1cGRhdGVQcm9qZWN0TnVtcz0gKGRhdGFOdW0pID0+IHtcbiAgICBjb25zdCByZW1haW5pbmdQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1udW1dXCIpO1xuICAgIC8vZ2V0IGFycmF5IGZyb20gcmVtYWluaW5nIHByb2plY3Qgbm9kZXNcbiAgICBsZXQgcHJvamVjdHNBcnIgPSBBcnJheS5mcm9tKHJlbWFpbmluZ1Byb2plY3RzKTtcbiAgICAvL2ZpbHRlciBhcnJheSB0byBvbmx5IGluY2x1ZGUgcHJvamVjdHMgYWZ0ZXIgZGVsZXRlZCBwcm9qZWN0XG4gICAgbGV0IHByb2plY3RzVG9VcGRhdGUgPSBwcm9qZWN0c0Fyci5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmRhdGFzZXQubnVtID4gZGF0YU51bSk7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0c1RvVXBkYXRlKSB7XG4gICAgICAgIC8vaXRlcmF0ZSB0aHJvdWdoIGVhY2ggcHJvamVjdFxuICAgICAgICAvL3VwZGF0ZSB0aGVpciBkYXRhLW51bVxuICAgICAgICBwcm9qZWN0LmRhdGFzZXQubnVtIC09IDE7XG4gICAgICAgIC8vdXBkYXRlIHByb2plY3RBcnJheSBhbmQgc2F2ZSB0byBsb2NhbFN0b3JhZ2VcbiAgICB9XG59O1xuXG5jb25zdCBkZWxldGVQcm9qZWN0TGluayA9IChsaW5rKSA9PiB7XG4gICAgY29uc3QgZGF0YU51bSA9IGxpbmsuZGF0YXNldC5udW07XG4gICAgLy9yZW1vdmUgaHRtbCBlbGVtZW50XG4gICAgcmVtb3ZlUHJvamVjdExpbmsobGluaywgZGF0YU51bSk7XG4gICAgdXBkYXRlUHJvamVjdE51bXMoZGF0YU51bSk7XG59O1xuXG5jb25zdCBhZGRUYXNrQ2VsbCA9ICh0YXNrTmFtZSwgZHVlRGF0ZSwgY29tcGxldGVkLCBkYXRhTnVtID0gdGFza01vZHVsZS5udW1PZlRhc2tzKCkpID0+IHtcblxuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgLy9jcmVhdGUgZGl2IGVsZW1lbnQgdG8gd3JhcCBib3RoIHRhc2sgaW5mbyBhbmQgZWRpdCBpbmZvXG4gICAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2suY2xhc3NOYW1lID0gJ3Rhc2snO1xuICAgIG5ld1Rhc2suZGF0YXNldC5udW0gPSBkYXRhTnVtOyAvL2RhdGFzZXQgbnVtIHRvIGlkZW50aWZ5IHRhc2sgaW5zdGFuY2UgaW4gcHJvamVjdCAtIHRhc2tMaXN0IGFycmF5XG4gICAgXG4gICAgLy9jcmVhdGUgZGl2IHRvIGhvbGQgYWxsIHRhc2tJbmZvIGluIGZsZXhib3hcbiAgICBjb25zdCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tJbmZvLmNsYXNzTmFtZSA9ICdpbmZvLXdyYXBwZXIgZGlzcGxheS1mbGV4JztcblxuICAgIC8vY3JlYXRlIGljb24gZWxlbWVudCAtIHN0eWxlZCB0byBjaXJjbGUgLSB0byByZWZsZWN0IHByaW9yaXR5IG9mIHRhc2tcbiAgICBjb25zdCBjb21wbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21wbGV0ZUljb24uY2xhc3NOYW1lID0gJ2NvbXBsZXRlLWljb24nO1xuXG4gICAgLy9jcmVhdGUgc3BhbiBlbGVtZW50IGZvciB0YXNrIHRpdGxlXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRhc2tUaXRsZS5jbGFzc05hbWUgPSAndGFzay1uYW1lJztcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrTmFtZTtcblxuICAgIC8vY3JlYXRlIGRpdiBlbGVtZW50IHRvIHN0b3JlIGRhdGUgLSB0byBiZSBjaGFuZ2VkIHVwb24gZWRpdFxuICAgIC8vY3JlYXRlIGVkaXQgZm9ybSBmb3IgdGhpcyB0b28sIHRvIHNlbGVjdCBkYXRlXG4gICAgY29uc3QgdGFza0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEdWUuY2xhc3NOYW1lID0gJ2RhdGUnO1xuICAgIHRhc2tEdWUudGV4dENvbnRlbnQgPSBkdWVEYXRlIHx8IGdldERhdGVUb2RheSgpO1xuXG4gICAgLy9hcHBlbmQgZWRpdCBhbmQgZGVsZXRlIGljb25zIHRvIHJpZ2h0IHNpZGUgb2YgZGF0ZSBkaXYuXG4gICAgY29uc3Qgc2lkZUljb25zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGVJY29uc1dyYXBwZXIuY2xhc3NOYW1lID0gJ3NpZGUtaWNvbnMtd3JhcHBlcic7XG4gICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWRpdEljb24uY2xhc3NOYW1lID0gJ2VkaXQtaWNvbic7XG4gICAgZWRpdEljb24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFyIGZhLWVkaXRcIj48L2k+JztcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NOYW1lID0gJ2RlbGV0ZS1pY29uJztcbiAgICBkZWxldGVJY29uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHRcIj48L2k+JztcbiAgICBzaWRlSWNvbnNXcmFwcGVyLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICBzaWRlSWNvbnNXcmFwcGVyLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gICAgLy9hcHBlbmQgZWxlbWVudHMgdG8gdGFzayBkaXYsIHRoZW4gYXBwZW5kIHRhc2sgZGl2IHRvIGxpc3QgZGl2XG4gICAgLy9NQUlOIFRBU0sgQ0VMTFxuICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKGNvbXBsZXRlSWNvbik7XG4gICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0YXNrRHVlKTtcbiAgICB0YXNrSW5mby5hcHBlbmRDaGlsZChzaWRlSWNvbnNXcmFwcGVyKTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcblxuICAgIC8vY2hlY2sgaWYgdGFzayBpcyBjb21wbGV0ZSBhY2NvcmRpbmcgdG8gaW5wdXQgcGFyYW1ldGVyc1xuICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgZWRpdFRhc2suY29tcGxldGVUYXNrKG5ld1Rhc2spO1xuICAgIH1cblxuICAgIC8vY3JlYXRlIHRhc2sgZWRpdCBmb3JtXG4gICAgY29uc3QgdGFza0VkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRhc2tFZGl0Rm9ybS5jbGFzc05hbWUgPSAndGFzay1lZGl0LWZvcm0nOyAvL3RvIGRpc3BsYXkgZmxleFxuICAgIC8vd3JhcHBlciBmb3IgaW5wdXQgZWxlbWVudHNcbiAgICBjb25zdCBlZGl0SW5wdXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdElucHV0cy5jbGFzc05hbWUgPSAnZWRpdC1pbnB1dHMnO1xuICAgIC8vaW5wdXQgZWxlbWVudHNcbiAgICBjb25zdCBlZGl0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVkaXRUaXRsZS5jbGFzc05hbWUgPSAnZWRpdC10YXNrLXRpdGxlJztcbiAgICBjb25zdCBlZGl0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZWRpdERhdGUuY2xhc3NOYW1lID0gJ2VkaXQtdGFzay1kdWUnO1xuICAgIGVkaXREYXRlLnR5cGUgPSAndGV4dCc7XG4gICAgXG4gICAgLy9idXR0b24gd3JhcHBlclxuICAgIGNvbnN0IGNvbmZpcm1CdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uZmlybUJ0bnMuY2xhc3NOYW1lID0gJ2NvbmZpcm0tZWRpdC1idXR0b25zJztcbiAgICAvL2J1dHRvbnNcbiAgICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uZmlybUJ0bi5jbGFzc05hbWUgPSAnY29uZmlybS1lZGl0JztcbiAgICBjb25maXJtQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSAnY2FuY2VsLWVkaXQnO1xuICAgIGNhbmNlbEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cbiAgICAvL2FwcGVuZCB0byBmb3JtIGVsZW1lbnRcbiAgICBlZGl0SW5wdXRzLmFwcGVuZENoaWxkKGVkaXRUaXRsZSk7XG4gICAgZWRpdElucHV0cy5hcHBlbmRDaGlsZChlZGl0RGF0ZSk7XG4gICAgY29uZmlybUJ0bnMuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG4gICAgY29uZmlybUJ0bnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICB0YXNrRWRpdEZvcm0uYXBwZW5kQ2hpbGQoZWRpdElucHV0cyk7XG4gICAgdGFza0VkaXRGb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1CdG5zKTtcblxuICAgIC8vYXBwZW5kIHRhc2stZWRpdC1mb3JtIHRvIHRhc2sgZWxlbWVudFxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQodGFza0VkaXRGb3JtKTtcblxuICAgIC8vYWRkIHRvIERPTVxuICAgIHRhc2tzLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lciBmb3IgdGFzayBjb21wbGV0aW9uXG4gICAgY29tcGxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvL2NoYW5nZSB0YXNrIGluc3RhbmNlIGluIHRhc2tNb2R1bGVcbiAgICAgICAgdGFza01vZHVsZS50b2dnbGVDb21wbGV0ZShuZXdUYXNrLmRhdGFzZXQubnVtKTtcblxuICAgICAgICAvL2NoZWNrIGlmIHRhc2sgY29tcGxldGVkIGFscmVhZHlcbiAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICBlZGl0VGFzay51bmNvbXBsZXRlVGFzayhuZXdUYXNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICBlZGl0VGFzay5jb21wbGV0ZVRhc2sobmV3VGFzayk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vZXZlbnQgbGlzdGVuZXJzIGZvciBzaWRlIGljb25zXG4gICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlZGl0VGFzay5kaXNwbGF5RWRpdChuZXdUYXNrKSk7XG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVkaXRUYXNrLmRlbGV0ZVRhc2sobmV3VGFzaykpO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lcnMgZm9yIGVkaXQgZm9ybVxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlZGl0VGFzay5zdWJtaXRFZGl0KG5ld1Rhc2spKTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlZGl0VGFzay5yZXNldEVkaXQobmV3VGFzaykpO1xuICAgIC8vZXZlbnRMaXN0ZW5lcnMgZm9yIGZvcm1hdHRpbmcgb2YgZGF0ZVxuICAgIGVkaXREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnRhcmdldC50eXBlID0gXCJkYXRlXCI7XG4gICAgfSk7XG4gICAgZWRpdERhdGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC50YXJnZXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBpZiAoIWVkaXREYXRlLnZhbHVlKSB7XG4gICAgICAgICAgICBlZGl0RGF0ZS52YWx1ZSA9IGdldERhdGVUb2RheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBlZGl0RGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIGVkaXREYXRlLnZhbHVlID0gZm9ybWF0RGF0ZShkYXRlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuY29uc3QgZWRpdFRhc2sgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNvbXBsZXRlVGFzayh0YXNrKSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlSWNvbiA9IHRhc2sucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWljb24nKTtcbiAgICAgICAgY29tcGxldGVJY29uLnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSg4MSwgMTkyLCA4MSwgMC4yNTMpJztcbiAgICAgICAgdGFzay5zdHlsZS5jb2xvciA9ICdyZ2IoMTUwLCAxNTAsIDE1MCknO1xuICAgICAgICB0YXNrLnN0eWxlLmJvcmRlckNvbG9yID0gJ3JnYigxNTAsIDE1MCwgMTUwKSc7XG4gICAgICAgIHRhc2suc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmNvbXBsZXRlVGFzayh0YXNrKSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlSWNvbiA9IHRhc2sucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWljb24nKTtcbiAgICAgICAgY29tcGxldGVJY29uLnN0eWxlLmJhY2tncm91bmQgPSAnaW5oZXJpdCc7XG4gICAgICAgIHRhc2suc3R5bGUuY29sb3IgPSAndmFyKC0tYmxhY2spJztcbiAgICAgICAgdGFzay5zdHlsZS5ib3JkZXJDb2xvciA9ICd2YXIoLS1ncmV5KSc7XG4gICAgICAgIHRhc2suc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUVkaXQodGFzaykge1xuICAgICAgICAvL3Nob3cgZWRpdCBmb3JtLCBkaXNwbGF5IG9mZiBmb3IgdGFzayBpbmZvXG4gICAgICAgIGNvbnN0IHRhc2tJbmZvID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuaW5mby13cmFwcGVyJyk7XG4gICAgICAgIGNvbnN0IHRhc2tGb3JtID0gdGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0LWZvcm0nKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gdGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEdWUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG4gICAgICAgIGNvbnN0IGVkaXRUaXRsZSA9IHRhc2sucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay10aXRsZScpO1xuICAgICAgICBjb25zdCBlZGl0RHVlID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWR1ZScpO1xuXG4gICAgICAgIGVkaXRUaXRsZS52YWx1ZSA9IHRhc2tUaXRsZS50ZXh0Q29udGVudDtcbiAgICAgICAgZWRpdER1ZS52YWx1ZSA9IHRhc2tEdWUudGV4dENvbnRlbnQ7XG4gICAgXG4gICAgICAgIHRvZ2dsZUZvcm1GbGV4KHRhc2tJbmZvLCB0YXNrRm9ybSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRFZGl0KHRhc2spIHtcbiAgICAgICAgLy9yZXNldCBmb3JtLCB0b2dnbGUgZGlzcGxheUVkaXRcbiAgICAgICAgdGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1lZGl0LWZvcm0nKS5yZXNldCgpO1xuXG4gICAgICAgIGRpc3BsYXlFZGl0KHRhc2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1Ym1pdEVkaXQodGFzaykge1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKTtcbiAgICAgICAgY29uc3QgdGFza0R1ZSA9IHRhc2sucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbiAgICAgICAgY29uc3QgZWRpdGVkVGl0bGUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stdGl0bGUnKTtcbiAgICAgICAgY29uc3QgZWRpdGVkRHVlID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWR1ZScpO1xuXG4gICAgICAgIC8vdXBkYXRlIHRhc2sgaW5zdGFuY2UgaW4gdGFza01vZHVsZVxuICAgICAgICB0YXNrTW9kdWxlLnVwZGF0ZVRhc2tJbmZvKHRhc2suZGF0YXNldC5udW0sIGVkaXRlZFRpdGxlLnZhbHVlLCBlZGl0ZWREdWUudmFsdWUpO1xuXG4gICAgICAgIC8vY2hhbmdlIHRhc2sgdGl0bGUgYW5kIGRhdGUgYWNjb3JkaW5nIHRvIGZvcm1cbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gZWRpdGVkVGl0bGUudmFsdWU7XG4gICAgICAgIHRhc2tEdWUudGV4dENvbnRlbnQgPSBmb3JtYXREYXRlKGVkaXRlZER1ZS52YWx1ZSk7XG5cbiAgICAgICAgcmVzZXRFZGl0KHRhc2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFzaykge1xuICAgICAgICAvL2hhdmUgdG8gY2xlYXIgdGFza3MgYW5kIHJlY3JlYXRlIGFsbCBpbnN0YW5jZXMgYWdhaW4sIGFzIGRhdGFOdW0gaXMgc3ByZWFkIG91dFxuICAgICAgICBjbGVhclRhc2tzKCk7XG4gICAgICAgIC8vcmVtb3ZlIGluc3RhbmNlIGFuZCByZXNldCBsaXN0XG4gICAgICAgIHJlbW92ZVRhc2tJbnN0YW5jZSh0YXNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUYXNrSW5zdGFuY2UodGFzaykge1xuICAgICAgICAvL3JlbW92ZSBmcm9tIHRhc2sgYXJyYXlcbiAgICAgICAgdGFza01vZHVsZS5kZWxldGVUYXNrKHRhc2suZGF0YXNldC5udW0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyVGFza3MoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIHJldHVybiB7ZGlzcGxheUVkaXQsIHJlc2V0RWRpdCwgc3VibWl0RWRpdCwgY29tcGxldGVUYXNrLCB1bmNvbXBsZXRlVGFzaywgZGVsZXRlVGFza307XG59KSgpO1xuXG5jb25zdCBVSSA9IHtcbiAgICBhZGRQcm9qZWN0TGluayxcbiAgICBhZGRUYXNrQ2VsbCxcbiAgICBnZXREYXRlVG9kYXksXG4gICAgZ2V0V2Vla1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7IiwiaW1wb3J0IHN0b3JhZ2VNb2R1bGUgZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCBVSU1vZHVsZSBmcm9tICcuL1VJLmpzJztcbmltcG9ydCB0YXNrTW9kdWxlIGZyb20gJy4vdGFzay5qcyc7XG5cbi8vRkFDVE9SWSBGVU5DVElPTiBGT1IgUFJPSkVDVFNcbmNvbnN0IENyZWF0ZVByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICAvL2luaXRpYWxpc2UgcHJvamVjdCBhcnJheVxuICAgIGxldCBkYXRhTnVtO1xuXG4gICAgLy9mdW5jdGlvbiB0byBzZXQgdGl0bGVcbiAgICBmdW5jdGlvbiBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RGF0YU51bShudW0pIHtcbiAgICAgICAgdGhpcy5kYXRhTnVtID0gbnVtO1xuICAgIH1cblxuICAgIHJldHVybiB7dGl0bGUsIHNldFRpdGxlLCBkYXRhTnVtLCBzZXREYXRhTnVtfTtcbn07XG5cbi8vaW5pdGlhbCBsb2FkIG9mIHdlYnBhZ2UgLSBcbmxldCBjdXJyUHJvajtcbmxldCBwcm9qQXJyYXkgPSBbXTtcblxuLy9jaGVjayBpZiBzdG9yYWdlIGhhcyBmaXJzdCBlbGVtZW50XG5pZiAoc3RvcmFnZU1vZHVsZS5oYXNQcm9qZWN0cygpKSB7XG4gICAgcHJvakFycmF5ID0gc3RvcmFnZU1vZHVsZS5nZXRQcm9qZWN0cygpO1xuICAgIGN1cnJQcm9qID0gcHJvakFycmF5WzBdO1xuICAgIC8vZ2V0IG1vcmUgaWYgc3RvcmFnZSBleGlzdHNcbiAgICBzaG93UHJvamVjdHMoKTtcbn0gZWxzZSB7IC8vZWxzZSBjcmVhdGUgb3duIHByb2plY3QgYW5kIHNhdmUgdG8gc3RvcmFnZVxuICAgIGN1cnJQcm9qID0gQ3JlYXRlUHJvamVjdCgnaW5ib3gnKTtcbiAgICBjdXJyUHJvai5zZXREYXRhTnVtKDApO1xuICAgIC8vc2F2ZSB0byBsb2NhbFN0b3JhZ2UgdW5kZXIgcHJvamVjdHNcbiAgICBhZGRUb0FycmF5KGN1cnJQcm9qKTtcblxuICAgIGNvbnN0IGRheVByb2ogPSBDcmVhdGVQcm9qZWN0KCd0b2RheScpO1xuICAgIGRheVByb2ouc2V0RGF0YU51bSgxKTtcbiAgICBhZGRUb0FycmF5KGRheVByb2opO1xuXG4gICAgY29uc3Qgd2Vla1Byb2ogPSBDcmVhdGVQcm9qZWN0KCd0aGlzIHdlZWsnKTtcbiAgICB3ZWVrUHJvai5zZXREYXRhTnVtKDIpO1xuICAgIGFkZFRvQXJyYXkod2Vla1Byb2opO1xufVxuXG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHsgLy9jaGVjayBpZiB0aGVyZSBhcmUgZXhpc3RpbmcgcHJvamVjdHMgaW4gc3RvcmFnZVxuICAgIGlmIChwcm9qQXJyYXkubGVuZ3RoID4gMykge1xuICAgICAgICBjb25zdCBsZW4gPSBwcm9qQXJyYXkubGVuZ3RoO1xuICAgICAgICAvL2dvIHRocm91Z2ggYWxsIHN0b3JlZCBwcm9qZWN0cyBhbmQgYWRkIHRoZW0gdG8gbGlua1xuICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJvaiA9IHByb2pBcnJheVtpXTtcbiAgICAgICAgICAgIFVJTW9kdWxlLmFkZFByb2plY3RMaW5rKHByb2oudGl0bGUsIHByb2ouZGF0YU51bSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2oobnVtKSB7XG4gICAgbGV0IHByb2plY3QgPSBwcm9qQXJyYXlbbnVtXTtcbiAgICAvL2RlbGV0ZSBhbGwgdGFza3MgaW4gcHJvamVjdFxuICAgIHRhc2tNb2R1bGUuZGVsZXRlUHJvamVjdFRhc2tzKHByb2plY3QudGl0bGUpO1xuICAgIC8vc3BsaXQgYXJyYXkgaW50byB0d28sIHJlbW92aW5nIGFmZmVjdGluZyBlbGVtZW50XG4gICAgbGV0IGZpcnN0SGFsZkFycmF5ID0gcHJvakFycmF5LnNsaWNlKDAsIG51bSk7XG4gICAgbGV0IHNlY29uZEhhbGZBcnJheSA9IHByb2pBcnJheS5zbGljZShwYXJzZUludChudW0pICsgMSk7XG4gICAgLy91cGRhdGUgZGF0YU51bSBvZiByZW1haW5pbmcgdGFic1xuICAgIHNlY29uZEhhbGZBcnJheS5mb3JFYWNoKGUgPT4gZS5kYXRhTnVtIC09IDEpO1xuICAgIFxuICAgIC8vYXNzaWduIGFycmF5IGJhY2sgdG8gb3JpZ2luYWwgcHJvakFycmF5XG4gICAgbGV0IHRlbXBBcnJheSA9IGZpcnN0SGFsZkFycmF5LmNvbmNhdChzZWNvbmRIYWxmQXJyYXkpO1xuICAgIHVwZGF0ZUFycmF5KHRlbXBBcnJheSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFycmF5KGFycikge1xuICAgIHByb2pBcnJheSA9IGFycjtcbiAgICBzYXZlQXJyYXkoKTtcbn1cblxuXG5mdW5jdGlvbiBhZGRUb0FycmF5KHByb2opIHtcbiAgICBwcm9qQXJyYXkucHVzaChwcm9qKTtcbiAgICBzYXZlQXJyYXkoKTtcbn1cblxuZnVuY3Rpb24gc2F2ZUFycmF5KCkge1xuICAgIHN0b3JhZ2VNb2R1bGUuYWRkUHJvalRvU3RvcmFnZShwcm9qQXJyYXkpO1xufVxuXG5mdW5jdGlvbiBjdXJyZW50UHJvamVjdFNlbGVjdGVkKCkge1xuICAgIHJldHVybiBjdXJyUHJvajtcbn1cblxuLy9zd2l0Y2ggcHJvamVjdHMgdG8gc2VsZWN0ZWQgZnJvbSBVSVxuZnVuY3Rpb24gY2hhbmdlUHJvamVjdChkYXRhTnVtKSB7XG4gICAgY3VyclByb2ogPSBwcm9qQXJyYXlbZGF0YU51bV07XG59XG5cbmZ1bmN0aW9uIHByb2plY3RFeGlzdHMocHJvamVjdE5hbWUpIHtcbiAgICByZXR1cm4gKHByb2pBcnJheS5tYXAocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlKS5pbmNsdWRlcyhwcm9qZWN0TmFtZSkpO1xufVxuXG4vL0FERCBQUk9KRUNUIC8gc2F2ZSB0byBzdG9yYWdlXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgLy9jcmVhdGUgbmV3IGluc3RhbmNlIG9mIHByb2plY3RcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gQ3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgbmV3UHJvamVjdC5kYXRhTnVtID0gcHJvakFycmF5Lmxlbmd0aDtcbiAgICBhZGRUb0FycmF5KG5ld1Byb2plY3QpO1xufVxuXG5mdW5jdGlvbiBudW1PZlByb2plY3RzKCkge1xuICAgIHJldHVybiBwcm9qQXJyYXkubGVuZ3RoO1xufVxuXG5jb25zdCBwcm9qZWN0TW9kdWxlID0ge1xuICAgIENyZWF0ZVByb2plY3QsXG4gICAgYWRkTmV3UHJvamVjdCxcbiAgICBwcm9qZWN0RXhpc3RzLFxuICAgIGNoYW5nZVByb2plY3QsXG4gICAgZGVsZXRlUHJvaixcbiAgICBudW1PZlByb2plY3RzLFxuICAgIGN1cnJlbnRQcm9qZWN0U2VsZWN0ZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNb2R1bGU7IiwiZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oMCkpO1xufVxuXG4vL2NoZWNrIGlmIGxvY2FsU3RvcmFnZSBoYXMgaXRlbXNcbmZ1bmN0aW9uIGhhc1Byb2plY3RzKCkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbMF07XG59XG5cbmZ1bmN0aW9uIGhhc1Rhc2tzKCkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbMV07XG59XG5cbmZ1bmN0aW9uIGFkZFByb2pUb1N0b3JhZ2UocHJvamVjdEFycmF5KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oMCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSk7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tzKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKDEpKTtcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvU3RvcmFnZSh0YXNrQXJyYXkpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgxLCBKU09OLnN0cmluZ2lmeSh0YXNrQXJyYXkpKTtcbn1cblxuY29uc3Qgc3RvcmFnZSA9IHtcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBoYXNQcm9qZWN0cyxcbiAgICBhZGRQcm9qVG9TdG9yYWdlLFxuICAgIGdldFRhc2tzLFxuICAgIGhhc1Rhc2tzLFxuICAgIGFkZFRhc2tUb1N0b3JhZ2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlOyIsImltcG9ydCBwcm9qZWN0TW9kdWxlIGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgc3RvcmFnZU1vZHVsZSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuaW1wb3J0IFVJTW9kdWxlIGZyb20gJy4vVUkuanMnO1xuXG4vL0ZBQ1RPUlkgRlVOQ1RJT04gRk9SIFRBU0tTXG5jb25zdCBDcmVhdGVUYXNrID0gKHRpdGxlLCBkdWUsIGNvbXBsZXRlZCkgPT4ge1xuICAgIGxldCBwcm9qZWN0O1xuICAgIGxldCBkYXRhTnVtO1xuICAgIC8vY2hhbmdlIHRpdGxlLCBmbGFnIG9yIGRhdGVcbiAgICBmdW5jdGlvbiBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RHVlKGR1ZSkge1xuICAgICAgICB0aGlzLmR1ZSA9IGR1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3RpdGxlLCBkdWUsIHByb2plY3QsIGNvbXBsZXRlZCwgZGF0YU51bSwgc2V0VGl0bGUsIHNldER1ZX07XG59O1xuXG5sZXQgdGFza0FycmF5ID0gW107XG5sZXQgY3VycmVudFByb2pUYXNrcyA9IFtdO1xuXG4vL2NoZWNrIGlmIHN0b3JhZ2UgaGFzIHRhc2tzXG5pZiAoc3RvcmFnZU1vZHVsZS5oYXNUYXNrcygpKSB7XG4gICAgdGFza0FycmF5ID0gc3RvcmFnZU1vZHVsZS5nZXRUYXNrcygpO1xuICAgIC8vYWRkIHRvIGN1cnJQcm9qQXJyXG4gICAgc2V0Q3VycmVudFRhc2tzKHByb2plY3RNb2R1bGUuY3VycmVudFByb2plY3RTZWxlY3RlZCgpKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGUobnVtKSB7XG4gICAgLy9zZXQgdGFzayBjb21wbGV0ZWQgdG8gb3Bwb3NpdGUgb2YgaXRzZWxmLCBpZGVudGlmaWVkIHdpdGggZGF0YU51bSBmcm9tIFVJTW9kdWxlXG4gICAgdGFza0FycmF5W251bV0uY29tcGxldGVkID0gIXRhc2tBcnJheVtudW1dLmNvbXBsZXRlZDtcbiAgICBzYXZlQXJyYXkoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0luZm8obnVtLCBuZXdUaXRsZSwgbmV3RHVlKSB7XG4gICAgY29uc3QgdGFza1RvQmVFZGl0ZWQgPSB0YXNrQXJyYXlbbnVtXTtcbiAgICB0YXNrVG9CZUVkaXRlZC50aXRsZSA9IG5ld1RpdGxlO1xuICAgIHRhc2tUb0JlRWRpdGVkLmR1ZSA9IG5ld0R1ZTtcblxuICAgIHNhdmVBcnJheSgpO1xufVxuXG5mdW5jdGlvbiBzaG93VGFza3NUb2RheShkYXRlID0gVUlNb2R1bGUuZ2V0RGF0ZVRvZGF5KCkpIHtcbiAgICBjdXJyZW50UHJvalRhc2tzID0gdGFza0FycmF5LmZpbHRlcih0YXNrID0+IHRhc2suZHVlID09IGRhdGUpO1xuICAgIC8vc2hvdyBmaWx0ZXJlZCBhcnJheVxuICAgIHNob3dDdXJyZW50VGFza3MoKTtcbn1cblxuZnVuY3Rpb24gc2hvd1dlZWtUYXNrcyhkYXRlUmFuZ2UgPSBVSU1vZHVsZS5nZXRXZWVrKCkpIHtcbiAgICBsZXQgdG90YWxUYXNrcyA9IFtdO1xuICAgIGZvciAobGV0IGRhdGUgb2YgZGF0ZVJhbmdlKSB7XG4gICAgICAgIGNvbnN0IGRhdGVTZWxlY3RlZCA9IGRhdGU7XG4gICAgICAgIGxldCBkYXlBcnJheSA9IHRhc2tBcnJheS5maWx0ZXIodGFzayA9PiB0YXNrLmR1ZSA9PSBkYXRlU2VsZWN0ZWQpO1xuICAgICAgICB0b3RhbFRhc2tzID0gdG90YWxUYXNrcy5jb25jYXQoZGF5QXJyYXkpO1xuICAgIH1cbiAgICBjdXJyZW50UHJvalRhc2tzID0gdG90YWxUYXNrcztcbiAgICBzaG93Q3VycmVudFRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRUYXNrcyhwcm9qZWN0KSB7XG4gICAgY3VycmVudFByb2pUYXNrcyA9IHRhc2tBcnJheS5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT0gcHJvamVjdC50aXRsZSk7XG4gICAgc2hvd0N1cnJlbnRUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBudW1PZlRhc2tzKCkge1xuICAgIHJldHVybiB0YXNrQXJyYXkubGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBzaG93Q3VycmVudFRhc2tzKCkge1xuICAgIGN1cnJlbnRQcm9qVGFza3MuZm9yRWFjaCh0YXNrID0+IFVJTW9kdWxlLmFkZFRhc2tDZWxsKHRhc2sudGl0bGUsIHRhc2suZHVlLCB0YXNrLmNvbXBsZXRlZCwgdGFzay5kYXRhTnVtKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvQXJyYXkodGFzaykge1xuICAgIHRhc2tBcnJheS5wdXNoKHRhc2spO1xuICAgIHNhdmVBcnJheSgpO1xufVxuXG5mdW5jdGlvbiBzYXZlQXJyYXkoKSB7XG4gICAgc3RvcmFnZU1vZHVsZS5hZGRUYXNrVG9TdG9yYWdlKHRhc2tBcnJheSk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Rhc2sodGFza05hbWUpIHtcbiAgICAvL25ldyBpbnN0YW5jZSBmcm9tIHRhc2sgZmFjdG9yeVxuICAgIGNvbnN0IG5ld1Rhc2sgPSBDcmVhdGVUYXNrKHRhc2tOYW1lKTtcbiAgICAvL3VwZGF0ZSBkYXRhTnVtXG4gICAgbmV3VGFzay5kYXRhTnVtID0gdGFza0FycmF5Lmxlbmd0aDtcbiAgICBuZXdUYXNrLmR1ZSA9IFVJTW9kdWxlLmdldERhdGVUb2RheSgpO1xuICAgIC8vdXBkYXRlIGxpbmtpbmcgcHJvamVjdFxuICAgIGNvbnN0IHByb2plY3RTZWxlY3RlZCA9IHByb2plY3RNb2R1bGUuY3VycmVudFByb2plY3RTZWxlY3RlZCgpO1xuICAgIG5ld1Rhc2sucHJvamVjdCA9IHByb2plY3RTZWxlY3RlZC50aXRsZTtcbiAgICAvL2FkZCB0byB0YXNrIGFycmF5XG4gICAgYWRkVG9BcnJheShuZXdUYXNrKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlYW5kVXBkYXRlQXJyYXkobnVtKSB7XG4gICAgLy9zcGxpdCBhcnJheSBpbnRvIHR3bywgcmVtb3ZpbmcgYWZmZWN0aW5nIGVsZW1lbnRcbiAgICBsZXQgZmlyc3RIYWxmQXJyYXkgPSB0YXNrQXJyYXkuc2xpY2UoMCwgbnVtKTtcbiAgICBsZXQgc2Vjb25kSGFsZkFycmF5ID0gdGFza0FycmF5LnNsaWNlKHBhcnNlSW50KG51bSkgKyAxKTtcbiAgICAvL3VwZGF0ZSBkYXRhTnVtIG9mIHJlbWFpbmluZyB0YWJzXG4gICAgc2Vjb25kSGFsZkFycmF5LmZvckVhY2goZSA9PiBlLmRhdGFOdW0gLT0gMSk7XG4gICAgXG4gICAgLy9hc3NpZ24gYXJyYXkgYmFjayB0byBvcmlnaW5hbCBwcm9qQXJyYXlcbiAgICB0YXNrQXJyYXkgPSBmaXJzdEhhbGZBcnJheS5jb25jYXQoc2Vjb25kSGFsZkFycmF5KTtcbiAgICBzYXZlQXJyYXkoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhudW0pIHtcbiAgICByZW1vdmVhbmRVcGRhdGVBcnJheShudW0pO1xuICAgIHVwZGF0ZUFycmF5KCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFycmF5KCkge1xuICAgIC8vcmVsb2FkIGFsbCB0YXNrcyB0byBjdXJyZW50IHByb2plY3Qgc2VsZWN0ZWRcbiAgICBpZiAocHJvamVjdE1vZHVsZS5jdXJyZW50UHJvamVjdFNlbGVjdGVkKCkudGl0bGUgPT0gJ3RvZGF5Jykge1xuICAgICAgICBzaG93VGFza3NUb2RheSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwcm9qZWN0TW9kdWxlLmN1cnJlbnRQcm9qZWN0U2VsZWN0ZWQoKS50aXRsZSA9PSAndGhpcyB3ZWVrJykge1xuICAgICAgICBzaG93V2Vla1Rhc2tzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0Q3VycmVudFRhc2tzKHByb2plY3RNb2R1bGUuY3VycmVudFByb2plY3RTZWxlY3RlZCgpKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdFRhc2tzKHRpdGxlKSB7XG4gICAgdGFza0FycmF5LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGlmICh0YXNrLnByb2plY3QgPT0gdGl0bGUpIHtcbiAgICAgICAgICAgIHJlbW92ZWFuZFVwZGF0ZUFycmF5KHRhc2suZGF0YU51bSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuY29uc3QgdGFzayA9IHtcbiAgICBDcmVhdGVUYXNrLFxuICAgIGFkZE5ld1Rhc2ssXG4gICAgc2V0Q3VycmVudFRhc2tzLFxuICAgIG51bU9mVGFza3MsXG4gICAgdG9nZ2xlQ29tcGxldGUsXG4gICAgdXBkYXRlVGFza0luZm8sXG4gICAgZGVsZXRlVGFzayxcbiAgICBzaG93VGFza3NUb2RheSxcbiAgICBzaG93V2Vla1Rhc2tzLFxuICAgIGRlbGV0ZVByb2plY3RUYXNrc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFzazsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHN0b3JhZ2VNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL3N0b3JhZ2UuanMnO1xuaW1wb3J0IHRhc2tNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL3Rhc2suanMnO1xuaW1wb3J0IHByb2plY3RNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL3Byb2plY3QuanMnO1xuaW1wb3J0IFVJTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9VSS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJzsiXSwic291cmNlUm9vdCI6IiJ9