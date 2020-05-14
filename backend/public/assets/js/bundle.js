/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/UI.js":
/*!************************!*\
  !*** ./frontend/UI.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_BookService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/BookService */ \"./frontend/services/BookService.js\");\n/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! timeago.js */ \"./node_modules/timeago.js/esm/index.js\");\n\nconst bookService = new _services_BookService__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\n\nclass UI {\n  async renderBooks() {\n    const books = await bookService.getBooks();\n    const booksCardContainer = document.getElementById(\"books-cards\");\n    booksCardContainer.innerHTML = \"\";\n    books.forEach((book) => {\n      const div = document.createElement(\"div\");\n      div.className = \"animated fadeInRight\";\n      div.innerHTML = `\n      <div class=\"card m-2\">\n        <div class=\"row no-gutters\">\n            <div class=\"col-md-4\">\n                <img src=\"${book.imagePath}\" class=\"img-fluid\" alt=\"\">\n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"card-block px-2\">\n                    <h4 class=\"card-title\">${book.title}</h4>\n                    <p class=\"card-text\">${book.author}</p>\n                    <a href=\"#\" class=\"btn btn-danger delete\" _id=\"${\n                      book._id\n                    }\">X</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-footer w-100 text-muted\">\n          ${Object(timeago_js__WEBPACK_IMPORTED_MODULE_1__[\"format\"])(book.created_at)}\n        </div>\n      </div>\n      `;\n      booksCardContainer.appendChild(div);\n    });\n  }\n\n  async addANewBook(book) {\n    await bookService.postBook(book);\n    this.renderBooks();\n    this.clearBookForm();\n  }\n\n  clearBookForm() {\n    document.getElementById(\"book-form\").reset();\n    document.getElementById(\"title\").focus();\n  }\n\n  renderMessage(message, colorMessage, secondsToRemove) {\n    // Creating a div\n    const div = document.createElement(\"div\");\n    // Styling the div\n    div.className = `message ${colorMessage}`;\n    // Adding Text to the div\n    div.appendChild(document.createTextNode(message));\n    // Puting in the documnet\n    const container = document.querySelector(\".col-md-4\");\n    const bookForm = document.querySelector(\"#book-form\");\n    container.insertBefore(div, bookForm);\n    // Removing the div after some secconds\n    setTimeout(() => {\n      document.querySelector(\".message\").remove();\n    }, secondsToRemove);\n  }\n\n  async deleteBook(bookId) {\n    await bookService.deleteBook(bookId);\n    this.renderBooks();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UI);\n\n\n//# sourceURL=webpack:///./frontend/UI.js?");

/***/ }),

/***/ "./frontend/main.js":
/*!**************************!*\
  !*** ./frontend/main.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ \"./frontend/styles/app.css\");\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Book_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Book.js */ \"./frontend/models/Book.js\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI.js */ \"./frontend/UI.js\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const ui = new _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  ui.renderBooks();\n});\n\ndocument.getElementById(\"book-form\").addEventListener(\"submit\", function (e) {\n  const title = document.getElementById(\"title\").value;\n  const author = document.getElementById(\"author\").value;\n  const isbn = document.getElementById(\"isbn\").value;\n  const image = document.getElementById(\"image\").files;\n\n  const formData = new FormData();\n  formData.append(\"image\", image[0]);\n  formData.append(\"title\", title);\n  formData.append(\"author\", author);\n  formData.append(\"isbn\", isbn);\n\n  // Instatiating the UI\n  const ui = new _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n  // New Book Object\n  const book = new _models_Book_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, author, isbn);\n\n  // Validating User Input\n  if (title === \"\" || author === \"\" || isbn === \"\") {\n    ui.renderMessage(\"Please fill all the fields\", \"error\", 3000);\n  } else {\n    // Pass the new book to the UI\n    ui.addANewBook(formData);\n    ui.renderMessage(\"New Book Added Successfully\", \"success\", 2000);\n  }\n\n  e.preventDefault();\n});\n\ndocument.getElementById(\"books-cards\").addEventListener(\"click\", (e) => {\n  const ui = new _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  if (e.target.classList.contains(\"delete\")) {\n    ui.deleteBook(e.target.getAttribute(\"_id\"));\n    ui.renderMessage(\"Book Deleted Successfully\", \"success\", 3000);\n  }\n  e.preventDefault();\n});\n\n\n//# sourceURL=webpack:///./frontend/main.js?");

/***/ }),

/***/ "./frontend/models/Book.js":
/*!*********************************!*\
  !*** ./frontend/models/Book.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Book {\n  constructor(title, author, isbn) {\n    this.title = title;\n    this.author = author;\n    this.isbn = isbn;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\n\n\n//# sourceURL=webpack:///./frontend/models/Book.js?");

/***/ }),

/***/ "./frontend/services/BookService.js":
/*!******************************************!*\
  !*** ./frontend/services/BookService.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass BookService {\n\n    constructor() {\n        this.URI = `/api/books`;\n    }\n\n    async getBooks() {\n        const response = await fetch(this.URI);\n        const books = await response.json();\n        return books;\n    }\n\n    async postBook(book) {\n        const res = await fetch(this.URI, {\n            method: 'POST',\n            body: book\n        });\n        const data = await res.json();\n    }\n\n    async deleteBook(bookId) {\n        const res = await fetch(`${this.URI}/${bookId}`, {\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            method: 'Delete'\n        });\n        const data = await res.json();\n        console.log(data);\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookService);\n\n//# sourceURL=webpack:///./frontend/services/BookService.js?");

/***/ }),

/***/ "./frontend/styles/app.css":
/*!*********************************!*\
  !*** ./frontend/styles/app.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./frontend/styles/app.css?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/format.js":
/*!***********************************************!*\
  !*** ./node_modules/timeago.js/esm/format.js ***!
  \***********************************************/
/*! exports provided: format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"format\", function() { return format; });\n/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/date */ \"./node_modules/timeago.js/esm/utils/date.js\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register */ \"./node_modules/timeago.js/esm/register.js\");\n\n\n/**\n * format a TDate into string\n * @param date\n * @param locale\n * @param opts\n */\nvar format = function (date, locale, opts) {\n    // diff seconds\n    var sec = Object(_utils_date__WEBPACK_IMPORTED_MODULE_0__[\"diffSec\"])(date, opts && opts.relativeDate);\n    // format it with locale\n    return Object(_utils_date__WEBPACK_IMPORTED_MODULE_0__[\"formatDiff\"])(sec, Object(_register__WEBPACK_IMPORTED_MODULE_1__[\"getLocale\"])(locale));\n};\n//# sourceMappingURL=format.js.map\n\n//# sourceURL=webpack:///./node_modules/timeago.js/esm/format.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/timeago.js/esm/index.js ***!
  \**********************************************/
/*! exports provided: format, render, cancel, register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lang_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang/en_US */ \"./node_modules/timeago.js/esm/lang/en_US.js\");\n/* harmony import */ var _lang_zh_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang/zh_CN */ \"./node_modules/timeago.js/esm/lang/zh_CN.js\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ \"./node_modules/timeago.js/esm/register.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"register\", function() { return _register__WEBPACK_IMPORTED_MODULE_2__[\"register\"]; });\n\n/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./format */ \"./node_modules/timeago.js/esm/format.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"format\", function() { return _format__WEBPACK_IMPORTED_MODULE_3__[\"format\"]; });\n\n/* harmony import */ var _realtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./realtime */ \"./node_modules/timeago.js/esm/realtime.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _realtime__WEBPACK_IMPORTED_MODULE_4__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cancel\", function() { return _realtime__WEBPACK_IMPORTED_MODULE_4__[\"cancel\"]; });\n\n/**\n * Created by hustcc on 18/5/20.\n * Contract: i@hust.cc\n */\n\n\n\nObject(_register__WEBPACK_IMPORTED_MODULE_2__[\"register\"])('en_US', _lang_en_US__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nObject(_register__WEBPACK_IMPORTED_MODULE_2__[\"register\"])('zh_CN', _lang_zh_CN__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/timeago.js/esm/index.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/lang/en_US.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/lang/en_US.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar EN_US = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (diff, idx) {\n    if (idx === 0)\n        return ['just now', 'right now'];\n    var unit = EN_US[Math.floor(idx / 2)];\n    if (diff > 1)\n        unit += 's';\n    return [diff + \" \" + unit + \" ago\", \"in \" + diff + \" \" + unit];\n});\n//# sourceMappingURL=en_US.js.map\n\n//# sourceURL=webpack:///./node_modules/timeago.js/esm/lang/en_US.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/lang/zh_CN.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/lang/zh_CN.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ZH_CN = ['秒', '分钟', '小时', '天', '周', '个月', '年'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (diff, idx) {\n    if (idx === 0)\n        return ['刚刚', '片刻后'];\n    var unit = ZH_CN[~~(idx / 2)];\n    return [diff + \" \" + unit + \"\\u524D\", diff + \" \" + unit + \"\\u540E\"];\n});\n//# sourceMappingURL=zh_CN.js.map\n\n//# sourceURL=webpack:///./node_modules/timeago.js/esm/lang/zh_CN.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/realtime.js":
/*!*************************************************!*\
  !*** ./node_modules/timeago.js/esm/realtime.js ***!
  \*************************************************/
/*! exports provided: cancel, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cancel\", function() { return cancel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/dom */ \"./node_modules/timeago.js/esm/utils/dom.js\");\n/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/date */ \"./node_modules/timeago.js/esm/utils/date.js\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ \"./node_modules/timeago.js/esm/register.js\");\n\n\n\n// all realtime timer\nvar TIMER_POOL = {};\n/**\n * clear a timer from pool\n * @param tid\n */\nvar clear = function (tid) {\n    clearTimeout(tid);\n    delete TIMER_POOL[tid];\n};\n// run with timer(setTimeout)\nfunction run(node, date, localeFunc, opts) {\n    // clear the node's exist timer\n    clear(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__[\"getTimerId\"])(node));\n    var relativeDate = opts.relativeDate, minInterval = opts.minInterval;\n    // get diff seconds\n    var diff = Object(_utils_date__WEBPACK_IMPORTED_MODULE_1__[\"diffSec\"])(date, relativeDate);\n    // render\n    node.innerText = Object(_utils_date__WEBPACK_IMPORTED_MODULE_1__[\"formatDiff\"])(diff, localeFunc);\n    var tid = setTimeout(function () {\n        run(node, date, localeFunc, opts);\n    }, Math.min(Math.max(Object(_utils_date__WEBPACK_IMPORTED_MODULE_1__[\"nextInterval\"])(diff), minInterval || 1) * 1000, 0x7fffffff));\n    // there is no need to save node in object. Just save the key\n    TIMER_POOL[tid] = 0;\n    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__[\"setTimerId\"])(node, tid);\n}\n/**\n * cancel a timer or all timers\n * @param node - node hosting the time string\n */\nfunction cancel(node) {\n    // cancel one\n    if (node)\n        clear(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__[\"getTimerId\"])(node));\n    // cancel all\n    // @ts-ignore\n    else\n        Object.keys(TIMER_POOL).forEach(clear);\n}\n/**\n * render a dom realtime\n * @param nodes\n * @param locale\n * @param opts\n */\nfunction render(nodes, locale, opts) {\n    // by .length\n    // @ts-ignore\n    var nodeList = nodes.length ? nodes : [nodes];\n    nodeList.forEach(function (node) {\n        run(node, Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__[\"getDateAttribute\"])(node), Object(_register__WEBPACK_IMPORTED_MODULE_2__[\"getLocale\"])(locale), opts || {});\n    });\n    return nodeList;\n}\n//# sourceMappingURL=realtime.js.map\n\n//# sourceURL=webpack:///./node_modules/timeago.js/esm/realtime.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/register.js":
/*!*************************************************!*\
  !*** ./node_modules/timeago.js/esm/register.js ***!
  \*************************************************/
/*! exports provided: register, getLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"register\", function() { return register; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocale\", function() { return getLocale; });\n/**\n * Created by hustcc on 18/5/20.\n * Contract: i@hust.cc\n */\n/**\n * All supported locales\n */\nvar Locales = {};\n/**\n * register a locale\n * @param locale\n * @param func\n */\nvar register = function (locale, func) {\n    Locales[locale] = func;\n};\n/**\n * get a locale, default is en_US\n * @param locale\n * @returns {*}\n */\nvar getLocale = function (locale) {\n    return Locales[locale] || Locales['en_US'];\n};\n//# sourceMappingURL=register.js.map\n\n//# sourceURL=webpack:///./node_modules/timeago.js/esm/register.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/utils/date.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/utils/date.js ***!
  \***************************************************/
/*! exports provided: toDate, formatDiff, diffSec, nextInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toDate\", function() { return toDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDiff\", function() { return formatDiff; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"diffSec\", function() { return diffSec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextInterval\", function() { return nextInterval; });\n/**\n * Created by hustcc on 18/5/20.\n * Contract: i@hust.cc\n */\nvar SEC_ARRAY = [\n    60,\n    60,\n    24,\n    7,\n    365 / 7 / 12,\n    12,\n];\n/**\n * format Date / string / timestamp to timestamp\n * @param input\n * @returns {*}\n */\nfunction toDate(input) {\n    if (input instanceof Date)\n        return input;\n    // @ts-ignore\n    if (!isNaN(input) || /^\\d+$/.test(input))\n        return new Date(parseInt(input));\n    input = (input || '')\n        // @ts-ignore\n        .trim()\n        .replace(/\\.\\d+/, '') // remove milliseconds\n        .replace(/-/, '/')\n        .replace(/-/, '/')\n        .replace(/(\\d)T(\\d)/, '$1 $2')\n        .replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC\n        .replace(/([+-]\\d\\d):?(\\d\\d)/, ' $1$2'); // -04:00 -> -0400\n    return new Date(input);\n}\n/**\n * format the diff second to *** time ago, with setting locale\n * @param diff\n * @param localeFunc\n * @returns\n */\nfunction formatDiff(diff, localeFunc) {\n    /**\n     * if locale is not exist, use defaultLocale.\n     * if defaultLocale is not exist, use build-in `en`.\n     * be sure of no error when locale is not exist.\n     *\n     * If `time in`, then 1\n     * If `time ago`, then 0\n     */\n    var agoIn = diff < 0 ? 1 : 0;\n    /**\n     * Get absolute value of number (|diff| is non-negative) value of x\n     * |diff| = diff if diff is positive\n     * |diff| = -diff if diff is negative\n     * |0| = 0\n     */\n    diff = Math.abs(diff);\n    /**\n     * Time in seconds\n     */\n    var totalSec = diff;\n    /**\n     * Unit of time\n     */\n    var idx = 0;\n    for (; diff >= SEC_ARRAY[idx] && idx < SEC_ARRAY.length; idx++) {\n        diff /= SEC_ARRAY[idx];\n    }\n    /**\n     * Math.floor() is alternative of ~~\n     *\n     * The differences and bugs:\n     * Math.floor(3.7) -> 4 but ~~3.7 -> 3\n     * Math.floor(1559125440000.6) -> 1559125440000 but ~~1559125440000.6 -> 52311552\n     *\n     * More information about the performance of algebraic:\n     * https://www.youtube.com/watch?v=65-RbBwZQdU\n     */\n    diff = Math.floor(diff);\n    idx *= 2;\n    if (diff > (idx === 0 ? 9 : 1))\n        idx += 1;\n    return localeFunc(diff, idx, totalSec)[agoIn].replace('%s', diff.toString());\n}\n/**\n * calculate the diff second between date to be formatted an now date.\n * @param date\n * @param relativeDate\n * @returns {number}\n */\nfunction diffSec(date, relativeDate) {\n    var relDate = relativeDate ? toDate(relativeDate) : new Date();\n    return (+relDate - +toDate(date)) / 1000;\n}\n/**\n * nextInterval: calculate the next interval time.\n * - diff: the diff sec between now and date to be formatted.\n *\n * What's the meaning?\n * diff = 61 then return 59\n * diff = 3601 (an hour + 1 second), then return 3599\n * make the interval with high performance.\n **/\nfunction nextInterval(diff) {\n    var rst = 1, i = 0, d = Math.abs(diff);\n    for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {\n        diff /= SEC_ARRAY[i];\n        rst *= SEC_ARRAY[i];\n    }\n    d = d % rst;\n    d = d ? rst - d : rst;\n    return Math.ceil(d);\n}\n//# sourceMappingURL=date.js.map\n\n//# sourceURL=webpack:///./node_modules/timeago.js/esm/utils/date.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/utils/dom.js":
/*!**************************************************!*\
  !*** ./node_modules/timeago.js/esm/utils/dom.js ***!
  \**************************************************/
/*! exports provided: getDateAttribute, setTimerId, getTimerId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDateAttribute\", function() { return getDateAttribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTimerId\", function() { return setTimerId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTimerId\", function() { return getTimerId; });\nvar ATTR_TIMEAGO_TID = 'timeago-id';\n/**\n * get the datetime attribute, `datetime` are supported.\n * @param node\n * @returns {*}\n */\nfunction getDateAttribute(node) {\n    return node.getAttribute('datetime');\n}\n/**\n * set the node attribute, native DOM\n * @param node\n * @param timerId\n * @returns {*}\n */\nfunction setTimerId(node, timerId) {\n    // @ts-ignore\n    node.setAttribute(ATTR_TIMEAGO_TID, timerId);\n}\n/**\n * get the timer id\n * @param node\n */\nfunction getTimerId(node) {\n    return parseInt(node.getAttribute(ATTR_TIMEAGO_TID));\n}\n//# sourceMappingURL=dom.js.map\n\n//# sourceURL=webpack:///./node_modules/timeago.js/esm/utils/dom.js?");

/***/ })

/******/ });