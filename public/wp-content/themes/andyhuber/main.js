!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=!1,t=!1,n=document.querySelector("#menu"),r=document.querySelector("#menu-trigger"),o=document.querySelector("header");r.addEventListener("click",(function(t){return function(t){t.preventDefault(),!1===e?(e=!0,n.classList.add("open"),r.classList.add("is-active")):(e=!1,n.classList.remove("open"),r.classList.remove("is-active"))}(t)})),document.addEventListener("scroll",(function(e){var n=window.scrollY;if(n>40&&!1===t)t=!0,o.classList.add("shrink");else{if(!(n<40&&!0===t))return;t=!1,o.classList.remove("shrink")}}))}))}]);