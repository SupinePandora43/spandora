(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{24:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var o=n(0);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=a(e);if(t){var r=a(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(a,e);var t,n,r,s=l(a);function a(e){var t,n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),t=s.call(this,e),n=u(t),r=void 0,(o="voice")in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,window.onload=function(){var e,n,o=document.getElementById("butt"),r=document.getElementById("speech"),c=(document.getElementsByTagName("main")[0],document.getElementById("voices")),i=function(){var t=speechSynthesis.getVoices();c.innerHTML="",t.forEach((function(e){var t=document.createElement("option"),o="".concat(e.name," (").concat(e.lang,")");e.default&&(o+=" [default]",void 0===n&&(n=e,t.selected=!0)),n===e&&(t.selected=!0),t.textContent=o,c.appendChild(t)})),e=t};i(),console.log(e),void 0!==speechSynthesis.onvoiceschanged&&(speechSynthesis.onvoiceschanged=i),c.onchange=function(t){console.log(t);var o=c.selectedIndex;n=e[o]},o.onclick=function(){var e=r.value.trim();t.say(e)},console.log("loaded");var l=new window.webkitSpeechRecognition;l.continuous=!0,l.interimResults=!0,l.onstart=function(){console.log("onstart")},l.onerror=function(e){console.log("onerror")},l.onend=function(){console.log("onend")},l.onresult=function(e){console.log("onresult");for(var t="",n="",o=e.resultIndex;o<e.results.length;++o)e.results[o].isFinal?n+=e.results[o][0].transcript:t+=e.results[o][0].transcript;console.log(t),console.log(n),r.value=n},window.recognition=l,setTimeout((function(){l.lang=["ru-RU"],l.start()}),100)},t}return t=a,(n=[{key:"render",value:function(){return o.createElement("main",null,o.createElement("div",{className:"field"},o.createElement("label",{htmlFor:"speech"},"Type something"),o.createElement("input",{type:"text",name:"speech",id:"speech",required:!0})),o.createElement("div",{className:"field"},o.createElement("label",{htmlFor:"voices"},"Choose a voice"),o.createElement("select",{name:"voices",id:"voices"})),o.createElement("button",{id:"butt"},"Say it!"),o.createElement("p",null,"See how to build this application in this post on ",o.createElement("a",{href:"https://www.twilio.com/blog/speech-to-text-browser-web-speech-api"},"speech to text in the browser with the Web Speech API"),"."))}},{key:"say",value:function(e){var t=new SpeechSynthesisUtterance(e);t.voice=this.voice,t.addEventListener("start",(function(e){console.log("started speaking")})),t.addEventListener("end",(function(e){console.log("stopped speaking")})),speechSynthesis.speak(t)}}])&&c(t.prototype,n),r&&c(t,r),a}(o.Component)}}]);