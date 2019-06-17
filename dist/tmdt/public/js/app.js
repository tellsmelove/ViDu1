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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/tmdt/js/app.js":
/*!****************************!*\
  !*** ./src/tmdt/js/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var navbar = $('#navbar');
  var toggle = $('[data-menu]');
  var close = $('.close-menu');
  toggle.on('click', function (e) {
    e.preventDefault();
    $(navbar).toggleClass('active');
  });
  close.on('click', function (e) {
    e.preventDefault();
    $(navbar).toggleClass('active');
  });
  $('.user-type-item input').click(function () {
    $('.user_personal,.user_company').toggleClass('hidden');
  });
  var galleryThumbs = new Swiper('.gallery-thumbs-new', {
    spaceBetween: 10,
    slidesPerView: 1,
    simulateTouch: false,
    slidesPerColumn: 4,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });
  var galleryTop = new Swiper('.gallery-top-new', {
    spaceBetween: 10,
    autoplay: {
      delay: 5000
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
  var swiper = new Swiper('.swiper-sale', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev'
    },
    autoplay: {
      delay: 5000
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  });
});
var swiper = new Swiper('.swiper-main', {
  loop: true,
  height: 280,
  autoplay: {
    delay: 5000
  }
});
$(function () {
  $('.spinner .btn:first-of-type').on('click', function () {
    var btn = $(this);
    var input = btn.closest('.spinner').find('input');

    if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
      input.val(parseInt(input.val(), 10) + 1);
    } else {
      btn.next("disabled", true);
    }
  });
  $('.spinner .btn:last-of-type').on('click', function () {
    var btn = $(this);
    var input = btn.closest('.spinner').find('input');

    if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
      input.val(parseInt(input.val(), 10) - 1);
    } else {
      btn.prev("disabled", true);
    }
  });
});
$(document).on('click', '.number-spinner button', function (e) {
  e.preventDefault();
  var btn = $(this),
      oldValue = btn.closest('.number-spinner').find('input').val().trim(),
      newVal = 0;

  if (btn.attr('data-dir') == 'up') {
    newVal = parseInt(oldValue) + 1;
  } else {
    if (oldValue > 1) {
      newVal = parseInt(oldValue) - 1;
    } else {
      newVal = 1;
    }
  }

  btn.closest('.number-spinner').find('input').val(newVal);
});

/***/ }),

/***/ "./src/tmdt/sass/app.scss":
/*!********************************!*\
  !*** ./src/tmdt/sass/app.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./src/tmdt/js/app.js ./src/tmdt/sass/app.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/kimtrong/learning/projects/Projects1/src/tmdt/js/app.js */"./src/tmdt/js/app.js");
module.exports = __webpack_require__(/*! /home/kimtrong/learning/projects/Projects1/src/tmdt/sass/app.scss */"./src/tmdt/sass/app.scss");


/***/ })

/******/ });