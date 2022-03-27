/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/about.js":
/*!**************************!*\
  !*** ./modules/about.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"about\": () => (/* binding */ about)\n/* harmony export */ });\nconst about = () => {\n    const aboutBlock = document.querySelectorAll('.about-block')\n    const listItem = document.querySelectorAll('.about-li')\n\n    document.body.addEventListener('click', (e) => {\n        if (e.target.closest('.about-li') && e.target.getAttribute('data-category')) {\n            aboutBlock.forEach(item => {\n                item.classList.remove('about-block_active')\n                if (item.getAttribute('data-block') ===\n                    e.target.getAttribute('data-category')) {\n                    item.classList.add('about-block_active')\n                }\n            })\n            listItem.forEach(item => {\n                item.classList.remove('about-li_active')\n                if (item.getAttribute('data-category') ===\n                    e.target.getAttribute('data-category')) {\n                    item.classList.add('about-li_active')\n                }\n            })\n        }\n    })\n}\n\n//# sourceURL=webpack:///./modules/about.js?");

/***/ }),

/***/ "./modules/burger.js":
/*!***************************!*\
  !*** ./modules/burger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"burger\": () => (/* binding */ burger)\n/* harmony export */ });\nconst burger  = (burgerBtn, closeBtn, modal, activeClass) => {\n    const menuOpen = document.querySelector(`.${burgerBtn}`)\n    const menuClose = document.querySelector(`.${closeBtn}`)\n    const menu = document.querySelector(`.${modal}`)\n\n    menuOpen.addEventListener('click', () => {\n        menu.classList.add(`${activeClass}`)\n    })\n    menuClose.addEventListener('click', () => {\n        menu.classList.remove(`${activeClass}`)\n    })\n    menu.addEventListener('click', (e) => {\n        if (e.target.closest('li')) {\n            menu.classList.remove(`${activeClass}`)\n        }\n    })\n}\n\n//# sourceURL=webpack:///./modules/burger.js?");

/***/ }),

/***/ "./script/about.js":
/*!*************************!*\
  !*** ./script/about.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/burger */ \"./modules/burger.js\");\n/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/about */ \"./modules/about.js\");\n\n\n\n(0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__.burger)('header-mob__burger', 'about-header__close', 'about-header__menu', 'about-header__menu_active')\n;(0,_modules_about__WEBPACK_IMPORTED_MODULE_1__.about)()\n\n//# sourceURL=webpack:///./script/about.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./script/about.js");
/******/ 	
/******/ })()
;