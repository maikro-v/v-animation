(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/exampleDocs/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/app.vue":
/*!**************************!*\
  !*** ./examples/app.vue ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_vue_vue_type_template_id_88f7d72e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=88f7d72e& */ \"./examples/app.vue?vue&type=template&id=88f7d72e&\");\n/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ \"./examples/app.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _app_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue?vue&type=style&index=0&lang=scss& */ \"./examples/app.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _app_vue_vue_type_template_id_88f7d72e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _app_vue_vue_type_template_id_88f7d72e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"examples/app.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./examples/app.vue?");

/***/ }),

/***/ "./examples/app.vue?vue&type=script&lang=js&":
/*!***************************************************!*\
  !*** ./examples/app.vue?vue&type=script&lang=js& ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./examples/app.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./examples/app.vue?");

/***/ }),

/***/ "./examples/app.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************!*\
  !*** ./examples/app.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--8-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./examples/app.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./examples/app.vue?");

/***/ }),

/***/ "./examples/app.vue?vue&type=template&id=88f7d72e&":
/*!*********************************************************!*\
  !*** ./examples/app.vue?vue&type=template&id=88f7d72e& ***!
  \*********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7723f734_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_88f7d72e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7723f734-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=88f7d72e& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"7723f734-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./examples/app.vue?vue&type=template&id=88f7d72e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7723f734_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_88f7d72e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7723f734_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_88f7d72e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./examples/app.vue?");

/***/ }),

/***/ "./examples/assets/logo.png":
/*!**********************************!*\
  !*** ./examples/assets/logo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo.5284d12d.png\";\n\n//# sourceURL=webpack:///./examples/assets/logo.png?");

/***/ }),

/***/ "./examples/data/animationData.js":
/*!****************************************!*\
  !*** ./examples/data/animationData.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  name: 'bounce',\n  value: 'bounce'\n}, {\n  name: 'flash',\n  value: 'flash'\n}, {\n  name: 'pulse',\n  value: 'pulse'\n}, {\n  name: 'rubberBand',\n  value: 'rubberBand'\n}, {\n  name: 'shakeX',\n  value: 'shakeX'\n}, {\n  name: 'shakeY',\n  value: 'shakeY'\n}, {\n  name: 'headShake',\n  value: 'headShake'\n}, {\n  name: 'swing',\n  value: 'swing'\n}, {\n  name: 'tada',\n  value: 'tada'\n}, {\n  name: 'wobble',\n  value: 'wobble'\n}, {\n  name: 'jello',\n  value: 'jello'\n}, {\n  name: 'heartBeat',\n  value: 'heartBeat'\n}, {\n  name: 'backInDown',\n  value: 'backInDown'\n}, {\n  name: 'backInLeft',\n  value: 'backInLeft'\n}, {\n  name: 'backInRight',\n  value: 'backInRight'\n}, {\n  name: 'backInUp',\n  value: 'backInUp'\n}, {\n  name: 'backOutDown',\n  value: 'backOutDown'\n}, {\n  name: 'backOutLeft',\n  value: 'backOutLeft'\n}, {\n  name: 'backOutRight',\n  value: 'backOutRight'\n}, {\n  name: 'backOutUp',\n  value: 'backOutUp'\n}, {\n  name: 'bounceIn',\n  value: 'bounceIn'\n}, {\n  name: 'bounceInDown',\n  value: 'bounceInDown'\n}, {\n  name: 'bounceInLeft',\n  value: 'bounceInLeft'\n}, {\n  name: 'bounceInRight',\n  value: 'bounceInRight'\n}, {\n  name: 'bounceInUp',\n  value: 'bounceInUp'\n}, {\n  name: 'bounceOut',\n  value: 'bounceOut'\n}, {\n  name: 'bounceOutDown',\n  value: 'bounceOutDown'\n}, {\n  name: 'bounceOutLeft',\n  value: 'bounceOutLeft'\n}, {\n  name: 'bounceOutRight',\n  value: 'bounceOutRight'\n}, {\n  name: 'bounceOutUp',\n  value: 'bounceOutUp'\n}, {\n  name: 'fadeIn',\n  value: 'fadeIn'\n}, {\n  name: 'fadeInDown',\n  value: 'fadeInDown'\n}, {\n  name: 'fadeInDownBig',\n  value: 'fadeInDownBig'\n}, {\n  name: 'fadeInLeft',\n  value: 'fadeInLeft'\n}, {\n  name: 'fadeInLeftBig',\n  value: 'fadeInLeftBig'\n}, {\n  name: 'fadeInRight',\n  value: 'fadeInRight'\n}, {\n  name: 'fadeInRightBig',\n  value: 'fadeInRightBig'\n}, {\n  name: 'fadeInUp',\n  value: 'fadeInUp'\n}, {\n  name: 'fadeInUpBig',\n  value: 'fadeInUpBig'\n}, {\n  name: 'fadeInTopLeft',\n  value: 'fadeInTopLeft'\n}, {\n  name: 'fadeInTopRight',\n  value: 'fadeInTopRight'\n}, {\n  name: 'fadeInBottomLeft',\n  value: 'fadeInBottomLeft'\n}, {\n  name: 'fadeInBottomRight',\n  value: 'fadeInBottomRight'\n}, {\n  name: 'fadeOut',\n  value: 'fadeOut'\n}, {\n  name: 'fadeOutDown',\n  value: 'fadeOutDown'\n}, {\n  name: 'fadeOutDownBig',\n  value: 'fadeOutDownBig'\n}, {\n  name: 'fadeOutLeft',\n  value: 'fadeOutLeft'\n}, {\n  name: 'fadeOutLeftBig',\n  value: 'fadeOutLeftBig'\n}, {\n  name: 'fadeOutRight',\n  value: 'fadeOutRight'\n}, {\n  name: 'fadeOutRightBig',\n  value: 'fadeOutRightBig'\n}, {\n  name: 'fadeOutUp',\n  value: 'fadeOutUp'\n}, {\n  name: 'fadeOutUpBig',\n  value: 'fadeOutUpBig'\n}, {\n  name: 'fadeOutTopLeft',\n  value: 'fadeOutTopLeft'\n}, {\n  name: 'fadeOutTopRight',\n  value: 'fadeOutTopRight'\n}, {\n  name: 'fadeOutBottomRight',\n  value: 'fadeOutBottomRight'\n}, {\n  name: 'fadeOutBottomLeft',\n  value: 'fadeOutBottomLeft'\n}, {\n  name: 'flip',\n  value: 'flip'\n}, {\n  name: 'flipInX',\n  value: 'flipInX'\n}, {\n  name: 'flipInY',\n  value: 'flipInY'\n}, {\n  name: 'flipOutX',\n  value: 'flipOutX'\n}, {\n  name: 'flipOutY',\n  value: 'flipOutY'\n}, {\n  name: 'lightSpeedInRight',\n  value: 'lightSpeedInRight'\n}, {\n  name: 'lightSpeedInLeft',\n  value: 'lightSpeedInLeft'\n}, {\n  name: 'lightSpeedOutRight',\n  value: 'lightSpeedOutRight'\n}, {\n  name: 'lightSpeedOutLeft',\n  value: 'lightSpeedOutLeft'\n}, {\n  name: 'rotateIn',\n  value: 'rotateIn'\n}, {\n  name: 'rotateInDownLeft',\n  value: 'rotateInDownLeft'\n}, {\n  name: 'rotateInDownRight',\n  value: 'rotateInDownRight'\n}, {\n  name: 'rotateInUpLeft',\n  value: 'rotateInUpLeft'\n}, {\n  name: 'rotateInUpRight',\n  value: 'rotateInUpRight'\n}, {\n  name: 'rotateOut',\n  value: 'rotateOut'\n}, {\n  name: 'rotateOutDownLeft',\n  value: 'rotateOutDownLeft'\n}, {\n  name: 'rotateOutDownRight',\n  value: 'rotateOutDownRight'\n}, {\n  name: 'rotateOutUpLeft',\n  value: 'rotateOutUpLeft'\n}, {\n  name: 'rotateOutUpRight',\n  value: 'rotateOutUpRight'\n}, {\n  name: 'hinge',\n  value: 'hinge'\n}, {\n  name: 'jackInTheBox',\n  value: 'jackInTheBox'\n}, {\n  name: 'rollIn',\n  value: 'rollIn'\n}, {\n  name: 'rollOut',\n  value: 'rollOut'\n}, {\n  name: 'zoomIn',\n  value: 'zoomIn'\n}, {\n  name: 'zoomInDown',\n  value: 'zoomInDown'\n}, {\n  name: 'zoomInLeft',\n  value: 'zoomInLeft'\n}, {\n  name: 'zoomInRight',\n  value: 'zoomInRight'\n}, {\n  name: 'zoomInUp',\n  value: 'zoomInUp'\n}, {\n  name: 'zoomOut',\n  value: 'zoomOut'\n}, {\n  name: 'zoomOutDown',\n  value: 'zoomOutDown'\n}, {\n  name: 'zoomOutLeft',\n  value: 'zoomOutLeft'\n}, {\n  name: 'zoomOutRight',\n  value: 'zoomOutRight'\n}, {\n  name: 'zoomOutUp',\n  value: 'zoomOutUp'\n}, {\n  name: 'slideInDown',\n  value: 'slideInDown'\n}, {\n  name: 'slideInLeft',\n  value: 'slideInLeft'\n}, {\n  name: 'slideInRight',\n  value: 'slideInRight'\n}, {\n  name: 'slideInUp',\n  value: 'slideInUp'\n}, {\n  name: 'slideOutDown',\n  value: 'slideOutDown'\n}, {\n  name: 'slideOutLeft',\n  value: 'slideOutLeft'\n}, {\n  name: 'slideOutRight',\n  value: 'slideOutRight'\n}, {\n  name: 'slideOutUp',\n  value: 'slideOutUp'\n}]);\n\n//# sourceURL=webpack:///./examples/data/animationData.js?");

/***/ }),

/***/ "./examples/index.js":
/*!***************************!*\
  !*** ./examples/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_package_v_animation_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var D_package_v_animation_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_package_v_animation_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var D_package_v_animation_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var D_package_v_animation_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_package_v_animation_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var D_package_v_animation_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var D_package_v_animation_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_package_v_animation_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_package_v_animation_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var D_package_v_animation_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(D_package_v_animation_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _app_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.vue */ \"./examples/app.vue\");\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src */ \"./src/index.js\");\n/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! element-ui */ \"./node_modules/element-ui/lib/element-ui.common.js\");\n/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! element-ui/lib/theme-chalk/index.css */ \"./node_modules/element-ui/lib/theme-chalk/index.css\");\n/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use(_src__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use(element_ui__WEBPACK_IMPORTED_MODULE_7___default.a);\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].config.productionTip = false;\nnew vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n  render: function render(h) {\n    return h(_app_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  }\n}).$mount('#app');\n\n//# sourceURL=webpack:///./examples/index.js?");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./examples/app.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./examples/app.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.splice */ \"./node_modules/core-js/modules/es.array.splice.js\");\n/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var D_package_v_animation_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _data_animationData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/animationData */ \"./examples/data/animationData.js\");\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      forms: {\n        name: [],\n        duration: 1.4,\n        delay: 0,\n        count: 1,\n        infinite: false,\n        direction: 'normal' // normal 默认值。动画应该正常播放。 alternate 动画应该轮流反向播放。\n\n      },\n      playAnimation: [],\n      animationData: _data_animationData__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    };\n  },\n  computed: {\n    hasInfinite: function hasInfinite() {\n      console.log(this.forms.count === 'infinite');\n      return this.forms.count === 'infinite';\n    }\n  },\n  methods: {\n    handleCloseTag: function handleCloseTag(index) {\n      this.forms.name.splice(index, 1);\n    },\n    handleTypeChange: function handleTypeChange(row) {\n      var _this$playAnimation;\n\n      this.playAnimation = [];\n\n      (_this$playAnimation = this.playAnimation).push.apply(_this$playAnimation, Object(D_package_v_animation_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(row));\n\n      console.log(row);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./examples/app.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ \"./node_modules/core-js/modules/es.number.to-fixed.js\");\n/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var D_package_v_animation_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var D_package_v_animation_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _libs_tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../libs/tools */ \"./src/libs/tools.js\");\n\n\n\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'v-animation',\n  props: {\n    /*\r\n    * 动画名称或一个数组，列如：'bounce' | ['bounce'] | [ { name: 'bounce', duration: '2s' } ]\r\n    * */\n    name: {\n      type: [String, Array],\n      required: true\n    },\n\n    /*\r\n    * 动画时长\r\n    * */\n    duration: {\n      type: Number\n    },\n    delay: {\n      type: Number\n    },\n    count: {\n      type: Number\n    }\n  },\n  data: function data() {\n    return {\n      animationRef: \"animation-ref-\".concat((new Date().getTime() + Object(_libs_tools__WEBPACK_IMPORTED_MODULE_9__[\"randomNum\"])(0, 10000)).toFixed(0)),\n      animations: [] // 动画队列\n\n    };\n  },\n  computed: {\n    $animate: function $animate() {\n      return this.$refs[this.animationRef];\n    }\n  },\n  watch: {\n    name: {\n      handler: function handler(val) {\n        var _this$animations;\n\n        this.animations = [];\n\n        (_this$animations = this.animations).push.apply(_this$animations, Object(D_package_v_animation_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this.createQueue()));\n      },\n      immediate: true\n    },\n    animations: {\n      handler: function handler(val) {\n        var _this = this;\n\n        this.$nextTick(function () {\n          _this.runAllAnimation(val);\n        });\n      },\n      deep: true\n    }\n  },\n  methods: {\n    /**\r\n     * 执行动画\r\n     * @param el 播放动画的元素\r\n     * @param animation 动画选项\r\n     * @param animation.name 动画名称\r\n     * @param animation.duration 动画时长 单位：秒\r\n     * @return {Promise<void>}\r\n     */\n    runAnimation: function runAnimation(el) {\n      var animation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      return new Promise(function (resolve) {\n        el.style.animationName = animation.name; // 动画时长时间\n\n        if (animation.duration) el.style.animationDuration = \"\".concat(animation.duration, \"s\");\n        if (animation.delay) el.style.animationDelay = \"\".concat(animation.delay, \"s\");\n\n        var resolveFun = function resolveFun() {\n          el.removeEventListener('animationend', resolveFun, false);\n          el.addEventListener('animationcancel', resolveFun, false);\n          resolve();\n        };\n\n        el.addEventListener('animationend', resolveFun, false);\n      });\n    },\n\n    /**\r\n     * 播放所有动画\r\n     */\n    runAllAnimation: function runAllAnimation(animations) {\n      var _this2 = this;\n\n      return Object(D_package_v_animation_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var i, len;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                i = 0, len = animations.length;\n\n              case 1:\n                if (!(i < len)) {\n                  _context.next = 7;\n                  break;\n                }\n\n                _context.next = 4;\n                return _this2.runAnimation(_this2.$animate, animations[i]);\n\n              case 4:\n                i++;\n                _context.next = 1;\n                break;\n\n              case 7:\n                return _context.abrupt(\"return\", Promise.resolve());\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n\n    /**\r\n     * 创建动画队列\r\n     * @param animation 动画名称或一个数组，列如：'bounce' | ['bounce'] | [ { name: 'bounce', duration: '2s' } ]\r\n     * @returns {Array}\r\n     */\n    createQueue: function createQueue() {\n      var _this3 = this;\n\n      var animation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.name;\n      var arr = [];\n      var obj = {};\n\n      if (Object(_libs_tools__WEBPACK_IMPORTED_MODULE_9__[\"isString\"])(animation)) {\n        obj = Object.assign(this.createAnimationAttr(), {\n          name: animation\n        });\n        this.animationName.push(obj);\n      } else if (Object(_libs_tools__WEBPACK_IMPORTED_MODULE_9__[\"isArray\"])(animation)) {\n        animation.forEach(function (item) {\n          var obj = _this3.createAnimationAttr(); // 数组形式兼容传字符串和对象两种形式\n\n\n          if (Object(_libs_tools__WEBPACK_IMPORTED_MODULE_9__[\"isString\"])(item)) {\n            obj = Object.assign(obj, {\n              name: item\n            });\n          } else if (Object(_libs_tools__WEBPACK_IMPORTED_MODULE_9__[\"isObject\"])(item)) {\n            obj = Object.assign(obj, item);\n          }\n\n          arr.push(obj);\n        });\n      }\n\n      return arr;\n    },\n\n    /**\r\n     * 创建动画的属性\r\n     * @returns {Object}\r\n     */\n    createAnimationAttr: function createAnimationAttr() {\n      var obj = {};\n\n      if (this.duration) {\n        obj.duration = this.duration;\n      }\n\n      if (this.delay) {\n        obj.delay = this.delay;\n      }\n\n      return obj;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/index.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7723f734-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./examples/app.vue?vue&type=template&id=88f7d72e&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7723f734-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./examples/app.vue?vue&type=template&id=88f7d72e& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"app\" }, [\n    _c(\"div\", { staticClass: \"views\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"el\" },\n        [\n          _c(\n            \"v-animation\",\n            {\n              attrs: { name: _vm.playAnimation, duration: _vm.forms.duration }\n            },\n            [\n              _c(\"img\", {\n                staticClass: \"el__img\",\n                attrs: { alt: \"VAnimation\", src: __webpack_require__(/*! ./assets/logo.png */ \"./examples/assets/logo.png\") }\n              }),\n              _c(\"h1\", { staticClass: \"el__title\" }, [_vm._v(\"vAnimation\")])\n            ]\n          )\n        ],\n        1\n      )\n    ]),\n    _c(\n      \"div\",\n      { staticClass: \"suspend attr\" },\n      [\n        _c(\n          \"el-form\",\n          {\n            staticClass: \"side__form\",\n            attrs: {\n              model: _vm.forms,\n              \"label-position\": \"left\",\n              \"label-width\": \"80px\"\n            }\n          },\n          [\n            _c(\n              \"el-form-item\",\n              { attrs: { label: \"时间:\" } },\n              [\n                _c(\"el-slider\", {\n                  attrs: { min: 0, max: 10, step: 0.5 },\n                  model: {\n                    value: _vm.forms.duration,\n                    callback: function($$v) {\n                      _vm.$set(_vm.forms, \"duration\", $$v)\n                    },\n                    expression: \"forms.duration\"\n                  }\n                })\n              ],\n              1\n            ),\n            _c(\n              \"el-form-item\",\n              { attrs: { label: \"延迟:\" } },\n              [\n                _c(\"el-slider\", {\n                  attrs: { min: 0, max: 10, step: 0.5 },\n                  model: {\n                    value: _vm.forms.delay,\n                    callback: function($$v) {\n                      _vm.$set(_vm.forms, \"delay\", $$v)\n                    },\n                    expression: \"forms.delay\"\n                  }\n                })\n              ],\n              1\n            ),\n            _c(\"el-form-item\", { attrs: { label: \"次数:\" } }, [\n              _c(\"div\", { staticClass: \"count\" }, [\n                _c(\n                  \"span\",\n                  { staticClass: \"count__item\" },\n                  [\n                    _c(\n                      \"el-checkbox\",\n                      {\n                        attrs: { border: \"\", size: \"mini\" },\n                        model: {\n                          value: _vm.forms.infinite,\n                          callback: function($$v) {\n                            _vm.$set(_vm.forms, \"infinite\", $$v)\n                          },\n                          expression: \"forms.infinite\"\n                        }\n                      },\n                      [_vm._v(\" 无限播放 \")]\n                    )\n                  ],\n                  1\n                ),\n                _c(\n                  \"span\",\n                  {\n                    directives: [\n                      {\n                        name: \"show\",\n                        rawName: \"v-show\",\n                        value: !_vm.forms.infinite,\n                        expression: \"!forms.infinite\"\n                      }\n                    ],\n                    staticClass: \"count__item\"\n                  },\n                  [\n                    _c(\"el-input-number\", {\n                      staticStyle: { width: \"100%\" },\n                      attrs: { \"controls-position\": \"right\", size: \"mini\" },\n                      model: {\n                        value: _vm.forms.count,\n                        callback: function($$v) {\n                          _vm.$set(_vm.forms, \"count\", $$v)\n                        },\n                        expression: \"forms.count\"\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _c(\n              \"el-form-item\",\n              { attrs: { label: \"反向播放:\" } },\n              [\n                _c(\n                  \"el-radio-group\",\n                  {\n                    attrs: { size: \"mini\" },\n                    model: {\n                      value: _vm.forms.direction,\n                      callback: function($$v) {\n                        _vm.$set(_vm.forms, \"direction\", $$v)\n                      },\n                      expression: \"forms.direction\"\n                    }\n                  },\n                  [\n                    _c(\"el-radio-button\", { attrs: { label: \"normal\" } }, [\n                      _vm._v(\"正常播放\")\n                    ]),\n                    _c(\"el-radio-button\", { attrs: { label: \"alternate\" } }, [\n                      _vm._v(\"反向播放\")\n                    ])\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _c(\n      \"div\",\n      { staticClass: \"suspend type\" },\n      [\n        _c(\n          \"div\",\n          { staticClass: \"tag-wrap\" },\n          _vm._l(_vm.forms.name, function(item, index) {\n            return _c(\n              \"el-tag\",\n              {\n                key: index,\n                staticClass: \"tag\",\n                attrs: { size: \"small\", closable: \"\" },\n                on: {\n                  close: function($event) {\n                    return _vm.handleCloseTag(index)\n                  }\n                }\n              },\n              [_vm._v(\" \" + _vm._s(item) + \" \")]\n            )\n          }),\n          1\n        ),\n        _c(\n          \"el-checkbox-group\",\n          {\n            on: { change: _vm.handleTypeChange },\n            model: {\n              value: _vm.forms.name,\n              callback: function($$v) {\n                _vm.$set(_vm.forms, \"name\", $$v)\n              },\n              expression: \"forms.name\"\n            }\n          },\n          [\n            _c(\n              \"el-row\",\n              _vm._l(_vm.animationData, function(item, index) {\n                return _c(\n                  \"el-col\",\n                  { key: index, attrs: { span: 24 } },\n                  [\n                    _c(\"el-checkbox\", { attrs: { label: item.value } }, [\n                      _vm._v(\" \" + _vm._s(item.name) + \" \")\n                    ])\n                  ],\n                  1\n                )\n              }),\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./examples/app.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%227723f734-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7723f734-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/index.vue?vue&type=template&id=47323bf2&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7723f734-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/index.vue?vue&type=template&id=47323bf2&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { ref: _vm.animationRef, staticClass: \"animate__animated\" },\n    [_vm._t(\"default\")],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/index.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%227723f734-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./examples/app.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./examples/app.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n.app {\\n  width: 100vw;\\n  height: 100vh;\\n  display: flex;\\n  background: #eaeaea;\\n}\\n.views {\\n  position: relative;\\n  overflow: hidden;\\n  flex: 1;\\n  margin-right: 400px;\\n}\\n.el {\\n  width: 340px;\\n  display: block;\\n  margin: 180px auto 0;\\n}\\n.el__img {\\n    width: 100%;\\n    display: block;\\n}\\n.el__title {\\n    font-size: 50px;\\n    text-align: center;\\n    margin-top: 20px;\\n}\\n.suspend {\\n  position: fixed;\\n  background: white;\\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\\n  border-radius: 6px;\\n  padding: 10px;\\n}\\n.attr {\\n  width: 300px;\\n  right: 300px;\\n  top: 10px;\\n}\\n.type {\\n  width: 280px;\\n  right: 10px;\\n  top: 10px;\\n  bottom: 10px;\\n  overflow-y: auto;\\n  overflow-x: hidden;\\n}\\n.list {\\n  width: 100%;\\n  display: block;\\n}\\n.count {\\n  width: 100%;\\n}\\n.count__item {\\n    width: 50%;\\n    display: inline-block;\\n}\\n.tag {\\n  margin-right: 6px;\\n  margin-bottom: 6px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./examples/app.vue?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./examples/app.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./examples/app.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./examples/app.vue?vue&type=style&index=0&lang=scss&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"146a2f3e\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./examples/app.vue?./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/index.vue":
/*!**********************************!*\
  !*** ./src/components/index.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_47323bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=47323bf2&scoped=true& */ \"./src/components/index.vue?vue&type=template&id=47323bf2&scoped=true&\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ \"./src/components/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_47323bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_47323bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"47323bf2\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/index.vue?");

/***/ }),

/***/ "./src/components/index.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/index.vue?");

/***/ }),

/***/ "./src/components/index.vue?vue&type=template&id=47323bf2&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/components/index.vue?vue&type=template&id=47323bf2&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7723f734_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_47323bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7723f734-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=47323bf2&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"7723f734-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/index.vue?vue&type=template&id=47323bf2&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7723f734_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_47323bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7723f734_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_47323bf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/index.vue?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/index.vue */ \"./src/components/index.vue\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n_components_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].install = function (Vue) {\n  Vue.component(_components_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].name, _components_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n};\n/* istanbul ignore if */\n\n\nif (typeof window !== 'undefined' && window.Vue) {\n  _components_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].install(window.Vue);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_components_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/libs/tools.js":
/*!***************************!*\
  !*** ./src/libs/tools.js ***!
  \***************************/
/*! exports provided: randomNum, parseType, isString, isArray, isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomNum\", function() { return randomNum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseType\", function() { return parseType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n/**\r\n * 生成指定范围的随机数\r\n * @param min 最小数\r\n * @param max 最大数\r\n * @returns {number} 返回一个在最小数与最大数之间的随机数\r\n */\nfunction randomNum(min, max) {\n  return parseInt(Math.random() * (max - min + 1) + min);\n}\n/**\r\n * 变量类型解析\r\n * @param val 需要解析的值\r\n * @returns { string } 返回类型\r\n */\n\nfunction parseType(val) {\n  return Object.prototype.toString.call(val).slice(8, -1);\n}\n/**\r\n * 判断是否字符串类型\r\n * @param val\r\n * @returns {boolean}\r\n */\n\nfunction isString(val) {\n  if (val === undefined) {\n    return false;\n  }\n\n  return Object.prototype.toString.call(val).slice(8, -1) === 'String';\n}\n/**\r\n * 判断是否数组类型\r\n * @param val\r\n * @returns {boolean}\r\n */\n\nfunction isArray(val) {\n  if (val === undefined) {\n    return false;\n  }\n\n  return Object.prototype.toString.call(val).slice(8, -1) === 'Array';\n}\n/**\r\n * 判断是否对象类型\r\n * @param val\r\n * @returns {boolean}\r\n */\n\nfunction isObject(val) {\n  if (val === undefined) {\n    return false;\n  }\n\n  return Object.prototype.toString.call(val).slice(8, -1) === 'Object';\n}\n\n//# sourceURL=webpack:///./src/libs/tools.js?");

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./examples/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! D:\\package\\v-animation\\examples\\index.js */\"./examples/index.js\");\n\n\n//# sourceURL=webpack:///multi_./examples/index.js?");

/***/ })

/******/ });
});