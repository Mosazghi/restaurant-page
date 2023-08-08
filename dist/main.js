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

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\nconst contactInfo = {\n  name: \"Mosazghi\",\n  github: \"https://github.com/Mosazghi\",\n};\n\nfunction Footer() {\n  const footer = document.createElement(\"footer\");\n\n  footer.classList.add(\n    \"bg-gray-900\",\n    \"opacity-50\",\n    \"text-white\",\n    \"p-4\",\n    \"w-full\",\n    \"min-h-full\"\n  );\n  footer.innerHTML = `\n    <p class='text-center'>Created by <a class='hover:underline' href=${contactInfo.github} target='_blank'>${contactInfo.name} </a></p>\n  `;\n\n  return footer;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\nconst nav = [\"Home\", \"Menu\", \"Contact\"];\n\nfunction Header() {\n  const header = document.createElement(\"header\");\n\n  header.classList.add(\n    \"bg-gray-900\",\n    \"opacity-90\",\n    \"text-white\",\n    \"p-4\",\n    \"w-full\",\n    \"flex\",\n    \"flex-col\",\n    \"justify-center\",\n    \"items-center\"\n  );\n\n  header.innerHTML = `\n  <h1 class=\"text-6xl text-center\">Veggie</h1>\n  <nav class=\"mt-5   text-white text-xl\"> ${nav\n    .map((el) => {\n      console.log;\n      return `<button class=\"nav-button p-5 cursor-pointer hover:underline transition-all duration-500 hover:-translate-y-2\">${el}</button>`;\n    })\n    .join(\"\")}</nav>\n  `;\n\n  return header;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/header.js?");

/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var _nav_contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav/contact.js */ \"./src/components/nav/contact.js\");\n/* harmony import */ var _nav_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/home.js */ \"./src/components/nav/home.js\");\n/* harmony import */ var _nav_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/menu.js */ \"./src/components/nav/menu.js\");\n// nav buttons\n\n\n\n\nfunction Main() {\n  const main = document.createElement(\"main\");\n  const navBtns = document.querySelectorAll(\".nav-button\");\n\n  main.classList.add(\n    \"bg-slate-500\",\n    \"transition-all\",\n    \"sm:opacity-70\",\n    \"opacity-90\",\n    \"text-white\",\n    \"p-8\",\n    \"my-0\",\n    \"sm:my-10\",\n    \"flex-1\",\n    \"sm:w-96\",\n    \"w-full\"\n  );\n\n  main.innerHTML = (0,_nav_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  navBtns.forEach((btn) => {\n    btn.addEventListener(\"click\", (e) => {\n      main.innerHTML = \"\";\n      switch (btn.innerText) {\n        case \"Home\":\n          main.innerHTML = (0,_nav_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n          break;\n        case \"Menu\":\n          main.innerHTML = (0,_nav_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n          break;\n        case \"Contact\":\n          main.innerHTML = (0,_nav_contact_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n          break;\n      }\n    });\n  });\n\n  return main;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/main.js?");

/***/ }),

/***/ "./src/components/nav/contact.js":
/*!***************************************!*\
  !*** ./src/components/nav/contact.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n  return `  <h2 class=\"text-2xl mb-3 font-bold\">Contact Us</h2> \n            <div class=\"flex flex-col flex-wrap gap-3 \">\n              <div class=\"p-2 bg-slate-700\">\n                <h3 class=\"text-xl mb-3\">Opening Hours</h3>\n                <p>Monday - Friday: 07:30 - 20:30</p>\n                <p>Saturday: 09:00 - 20:30</p>\n              </div> \n              <div class=\"bg-slate-700 p-2\"><h3 class=\"text-xl mb-3\">Address</h3><p>1234 Veggie Lane</p><p>San Francisco, CA</p>\n              </div>\n              <div class=\"bg-slate-700 p-2\"><h3 class=\"text-xl mb-3\">Phone</h3><p>(123) 456-7890</p></div>\n              <div class=\"bg-slate-700 p-2\"><h3 class=\"text-xl mb-3\">Email<p>Veggie@restaurant.com</p></h3> </div> \n              <div style=\"width: 100%\"><iframe width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed\"><a href=\"https://www.maps.ie/population/\">Population calculator map</a></iframe></div>\n            `;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/nav/contact.js?");

/***/ }),

/***/ "./src/components/nav/home.js":
/*!************************************!*\
  !*** ./src/components/nav/home.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _assets_bg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/bg.jpg */ \"./src/assets/bg.jpg\");\n\n\nfunction home() {\n  const img = document.createElement(\"img\");\n  img.classList.add(\"rounded-full\", \"shadow-lg\");\n  img.src = _assets_bg_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n  return `<h2 class=\"text-2xl mb-3 font-bold\">Welcome to Veggie Restaurant</h2> \n          <div class=\"space-y-5\">\n            <p>A restaurant where food and services will not disappoint you!</p>\n            <p>Our menu is 100% vegan and we have a wide variety of dishes.</p>\n            <p>Not interested in vegan? Grab some coffee!</p>\n            ${img.outerHTML}\n            <p>So what are you waiting for?! Order now!</p>\n          </div>\n          <div class=\"text-center mt-5\">\n          <h3 class=\"text-xl mb-3\">Opening Hours</h3>\n          <p>Monday - Friday: 07:30 - 20:30</p>\n          <p>Saturday: 09:00 - 20:30</p>\n          </div> \n          `;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/nav/home.js?");

/***/ }),

/***/ "./src/components/nav/menu.js":
/*!************************************!*\
  !*** ./src/components/nav/menu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _assets_bg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/bg.jpg */ \"./src/assets/bg.jpg\");\n\n\nfunction menu() {\n  const img = document.createElement(\"img\");\n  img.classList.add(\"rounded-full\", \"shadow-lg\", \"my-8\");\n  img.src = _assets_bg_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n  return `<h2 class=\"text-2xl mb-3 font-bold\">Our Menu</h2> \n          <div class=\"flex flex-col flex-wrap gap-3 \">\n            <div class=\"bg-slate-700 p-2\"><h3 class=\"text-xl mb-3\">Salad</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>$2</p></div>\n            <div class=\"bg-slate-700 p-2\"><h3 class=\"text-xl mb-3\">Salad</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>$2</p></div>\n            <div class=\"bg-slate-700 p-2\"><h3 class=\"text-xl mb-3\">Salad</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>$2</p></div>\n            <div class=\"bg-slate-700 p-2\"><h3 class=\"text-xl mb-3\">Salad</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>$2</p></div>\n            <div class=\"bg-slate-700 p-2\"><h3 class=\"text-xl mb-3\">Salad</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>$2</p></div>\n          </div>\n          `;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/nav/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/footer.js */ \"./src/components/footer.js\");\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header.js */ \"./src/components/header.js\");\n/* harmony import */ var _components_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main.js */ \"./src/components/main.js\");\n\n\n\n\nconst content = document.getElementById(\"content\");\n\ncontent.classList.add(\n  \"flex\",\n  \"flex-col\",\n  \"items-center\",\n  \"justify-center\",\n  \"min-h-screen\",\n  \"w-screen\"\n);\n\ncontent.appendChild((0,_components_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\ncontent.append((0,_components_main_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), (0,_components_footer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/assets/bg.jpg":
/*!***************************!*\
  !*** ./src/assets/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9bbbfecfd03350f5d352.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/bg.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;