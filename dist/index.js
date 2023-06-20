/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createElement(tag, options) {\n  var elem = document.createElement(tag);\n  Object.keys(options).forEach(function (key) {\n    elem[key] = options[key];\n  });\n  document.body.append(elem);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/helpers.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/js/helpers.js\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _js_register_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/register.js */ \"./src/js/register.js\");\n/* harmony import */ var _js_register_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_register_js__WEBPACK_IMPORTED_MODULE_2__);\n// import Img from '@/assets/images/img.jpeg';\n\n\n\n\n// createElement(\"div\", { textContent: \"text\", className: \"image\" });\n// let templateText = document.querySelector(\".template-text\");\n// templateText.textContent = \"template html\";\n\n// createElement(\"img\", { src: Img });\n\nvar newElement = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {\n  id: \"content\"\n  // innerHtml: `<p>1231 <span>kek</span></p>`,\n});\n// document.body.appendChild(newElement);\n\ndocument.getElementById('app').appendChild(newElement);\n// createElement('div', {className: 'anonim icon'});\n// document.body.insertAdjacentHTML(\n//   \"beforeend\",\n//   `<div class=\"icon\">\n//     <svg>\n//     <use xlink:href=\"#anonim\" />\n//     </svg>\n//     <button class=\"button\"> </button>\n// </div>`\n// // )\n// ;\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/index.js?");

/***/ }),

/***/ "./src/js/register.js":
/*!****************************!*\
  !*** ./src/js/register.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var requireAll = function requireAll(r) {\n  return r.keys().forEach(r);\n};\nvar requireContext = __webpack_require__(\"./src/assets/icons sync recursive \\\\.svg$\");\nrequireAll(requireContext);\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/register.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://dig-des-webpack/./src/scss/index.scss?");

/***/ }),

/***/ "./src/assets/icons sync recursive \\.svg$":
/*!***************************************!*\
  !*** ./src/assets/icons/ sync \.svg$ ***!
  \***************************************/
/***/ ((module) => {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = () => ([]);\nwebpackEmptyContext.resolve = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/assets/icons sync recursive \\\\.svg$\";\nmodule.exports = webpackEmptyContext;\n\n//# sourceURL=webpack://dig-des-webpack/./src/assets/icons/_sync_\\.svg$?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;