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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/main */ \"./src/scripts/main.js\");\n\n\n// import vevet from './scripts/config/vevet';\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_scripts_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n// vevet.pageLoad.onLoaded(() => {\n//   init();\n// });\n\n//# sourceURL=webpack://canvas_participle_system/./src/index.js?");

/***/ }),

/***/ "./src/scripts/Effect.js":
/*!*******************************!*\
  !*** ./src/scripts/Effect.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Particle */ \"./src/scripts/Particle.js\");\n\nclass Effect {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.width = this.canvas.width;\n    this.height = this.canvas.height;\n    this.particles = [];\n    this.numberOfParticles = 600;\n    this.createParticles();\n    this.mouse = {\n      radius: 100,\n      x: undefined,\n      y: undefined\n    };\n    window.addEventListener('mousemove', evt => {\n      this.mouse.x = evt.x;\n      this.mouse.y = evt.y;\n    });\n  }\n  createParticles() {\n    for (let i = 0; i < this.numberOfParticles; i += 1) {\n      this.particles.push(new _Particle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this));\n    }\n  }\n  handleParticles(context) {\n    this.connectsParticles(context);\n    this.particles.forEach(particle => {\n      particle.draw(context);\n      particle.update();\n    });\n  }\n  connectsParticles(context) {\n    const maxDistance = 100;\n    for (let a = 0; a < this.particles.length; a += 1) {\n      for (let b = a; b < this.particles.length; b += 1) {\n        const dx = this.particles[a].x - this.particles[b].x;\n        const dy = this.particles[a].y - this.particles[b].y;\n        const distance = Math.hypot(dx, dy);\n        if (distance < maxDistance) {\n          context.save();\n          const opacity = 1 - distance / maxDistance;\n          context.globalAlpha = opacity;\n          context.beginPath();\n          context.moveTo(this.particles[a].x, this.particles[a].y);\n          context.lineTo(this.particles[b].x, this.particles[b].y);\n          context.stroke();\n          context.restore();\n        }\n      }\n      const dx = this.mouse.x - this.particles[a].x;\n      const dy = this.mouse.y - this.particles[a].y;\n      const distance = Math.hypot(dx, dy);\n      if (distance < maxDistance) {\n        context.save();\n        const opacity = 1 - distance / maxDistance;\n        context.globalAlpha = opacity;\n        context.beginPath();\n        context.moveTo(this.mouse.x, this.mouse.y);\n        context.lineTo(this.particles[a].x, this.particles[a].y);\n        context.stroke();\n        context.restore();\n      }\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Effect);\n\n//# sourceURL=webpack://canvas_participle_system/./src/scripts/Effect.js?");

/***/ }),

/***/ "./src/scripts/Particle.js":
/*!*********************************!*\
  !*** ./src/scripts/Particle.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Particle {\n  constructor(effect) {\n    this.effect = effect;\n    this.radius = Math.random() * 10 + 4;\n    this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);\n    this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);\n    this.stepx = Math.random() * 1 - 0.5;\n    this.stepy = Math.random() * 1 - 0.5;\n    this.vx = 0;\n    this.vy = 0;\n    this.dx = 0;\n    this.dy = 0;\n    this.distance = 0;\n    this.friction = 0.06;\n    this.force = 0;\n    this.angle = 0;\n  }\n  draw(context) {\n    // context.fillStyle = `hsl(${this.x * 0.5}, 100%, 50%)`;\n    context.beginPath();\n    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n    context.fill();\n    // context.stroke();\n  }\n\n  update() {\n    this.dx = this.effect.mouse.x - this.x;\n    this.dy = this.effect.mouse.y - this.y;\n    this.distance = Math.hypot(this.dx, this.dy);\n    this.force = this.effect.mouse.radius / this.distance * 0.06;\n    if (this.x + this.effect.mouse.radius > this.effect.width || this.x < this.effect.mouse.radius || this.y + this.effect.mouse.radius > this.effect.height || this.y < this.effect.mouse.radius) {\n      this.vx = 0;\n      this.vy = 0;\n    } else if (this.distance < this.effect.mouse.radius) {\n      this.angle = Math.atan2(this.dy, this.dx);\n      this.vx += this.force * Math.cos(this.angle);\n      this.vy += this.force * Math.sin(this.angle);\n    } else {\n      this.vx = Math.max(0, this.vx - this.friction);\n      this.vy = Math.max(0, this.vy - this.friction);\n    }\n    this.x += this.vx + this.stepx;\n    if (this.x > this.effect.width - this.radius || this.x < this.radius) {\n      this.stepx *= -1;\n    }\n    this.y += this.vy + this.stepy;\n    if (this.y > this.effect.height - this.radius || this.y < this.radius) {\n      this.stepy *= -1;\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Particle);\n\n//# sourceURL=webpack://canvas_participle_system/./src/scripts/Particle.js?");

/***/ }),

/***/ "./src/scripts/animate.js":
/*!********************************!*\
  !*** ./src/scripts/animate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst animate = (effect, ctx, canvas) => {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  effect.handleParticles(ctx);\n  // effect.draw(ctx);\n  // effect.update();\n\n  requestAnimationFrame(() => {\n    animate(effect, ctx, canvas);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animate);\n\n//# sourceURL=webpack://canvas_participle_system/./src/scripts/animate.js?");

/***/ }),

/***/ "./src/scripts/createCanvas.js":
/*!*************************************!*\
  !*** ./src/scripts/createCanvas.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createCanvas = canvasDom => {\n  if (!canvasDom) {\n    return {\n      canvas: undefined,\n      ctx: undefined\n    };\n  }\n  const canvas = canvasDom;\n  const ctx = canvas.getContext('2d');\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  return {\n    canvas,\n    ctx\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCanvas);\n\n//# sourceURL=webpack://canvas_participle_system/./src/scripts/createCanvas.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Effect */ \"./src/scripts/Effect.js\");\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate */ \"./src/scripts/animate.js\");\n/* harmony import */ var _createCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createCanvas */ \"./src/scripts/createCanvas.js\");\n// import vevet from './config/vevet';\n\n\n\nconst init = () => {\n  const canvasArray = document.querySelectorAll('.canvas');\n  if (canvasArray.length !== 0) {\n    canvasArray.forEach(canvasDom => {\n      const {\n        canvas,\n        ctx\n      } = (0,_createCanvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(canvasDom);\n      if (!canvas || !ctx) {\n        return;\n      }\n      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);\n      gradient.addColorStop(0, 'white');\n      gradient.addColorStop(0.5, 'magenta');\n      gradient.addColorStop(1, 'blue');\n      ctx.fillStyle = gradient;\n      ctx.strokeStyle = 'white';\n      const effect = new _Effect__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n      // console.log(effect.particlesArray);\n\n      (0,_animate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(effect, ctx, canvas);\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack://canvas_participle_system/./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://canvas_participle_system/./src/styles/styles.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;