!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){$(document).ready(function(){var e=$("#navbar"),t=$("[data-menu]"),n=$(".fa-times");t.on("click",function(t){t.preventDefault(),e.toggleClass("active")}),n.on("click",function(t){t.preventDefault(),e.toggleClass("active")});new Swiper(".swiper-product",{slidesPerView:5,spaceBetween:10,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1025:{slidesPerView:4,spaceBetween:20,simulateTouch:!0,autoplay:{delay:5e3}},769:{slidesPerView:3,spaceBetween:20,simulateTouch:!0,autoplay:{delay:5e3}},440:{slidesPerView:1,spaceBetween:20,simulateTouch:!0,autoplay:{delay:5e3}}}}),new Swiper(".swiper-work",{slidesPerView:3,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{769:{slidesPerView:2,spaceBetween:20,autoplay:{delay:5e3}},440:{slidesPerView:1,spaceBetween:20,autoplay:{delay:5e3}}}});var r=new Swiper(".gallery-thumbs",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0});new Swiper(".gallery-top",{spaceBetween:10,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:r}})})},function(e,t){}]);