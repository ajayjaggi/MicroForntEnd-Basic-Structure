/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./config/paths.js":
/*!*************************!*\
  !*** ./config/paths.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 17:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! fs */ "fs");

const appPath = fs.realpathSync(process.cwd());

const resolvePath = relativePath => path.resolve(appPath, relativePath);

const paths = {
  clientEntry: resolvePath('src/client'),
  serverEntry: resolvePath('src/server'),
  clientBuild: resolvePath('dist/client'),
  serverBuild: resolvePath('dist/server'),
  publicPath: '/static/',
  loadableServerStatsFile: resolvePath('dist/client/static/loadable-stats.json')
};
module.exports = {
  paths
};

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "./node_modules/express/index.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @loadable/server */ "./node_modules/@loadable/server/lib/index.js");
/* harmony import */ var _config_paths__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/paths */ "./config/paths.js");
/* harmony import */ var _config_paths__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config_paths__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ "./node_modules/body-parser/index.js");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middleware */ "./src/server/middleware.js");









 // const {clientCompiler, watchOptions} = require('../../scripts/start')
// // const webpackDevMiddleware = require('webpack-dev-middleware')
// const clientConfig = require('../../config/webpack/client')
// import middleware from './render'
// let fun  = async  (req,res) => {
//     const renderer = (await import("./render")).default;
//     return renderer(req,res)
// }

const app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default().json());
app.use(_config_paths__WEBPACK_IMPORTED_MODULE_6__.paths.publicPath, express__WEBPACK_IMPORTED_MODULE_1___default().static(path__WEBPACK_IMPORTED_MODULE_5___default().join(_config_paths__WEBPACK_IMPORTED_MODULE_6__.paths.clientBuild, _config_paths__WEBPACK_IMPORTED_MODULE_6__.paths.publicPath))); // app.use(webpackDevMiddleware(clientCompiler,{
//   publicPath: clientConfig.output.publicPath,
//     ...watchOptions
// }))
// app.use(fun)

const done = () => {
  app.listen(4006, () => {
    console.log(`Server is listening on port: 4006`);
  });
};

(0,_middleware__WEBPACK_IMPORTED_MODULE_7__.default)((express__WEBPACK_IMPORTED_MODULE_1___default()), app, done);

/***/ }),

/***/ "./src/server/middleware.js":
/*!**********************************!*\
  !*** ./src/server/middleware.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((express, app, done) => {
  const renderThunk = __webpack_require__(/*! ./serverEntry */ "./src/server/serverEntry.js").default;

  const serverRender = renderThunk();
  app.get("/*", serverRender);
  done();
});

/***/ }),

/***/ "./src/server/serverEntry.js":
/*!***********************************!*\
  !*** ./src/server/serverEntry.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.e, __webpack_require__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
// import rendered from './render'
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => async (req, res, next) => {
  const renderer = (await Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-router_esm_react-router_js"), __webpack_require__.e("src_server_render_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./render */ "./src/server/render.js"))).default;
  return renderer(req, res, next);
});

/***/ }),

/***/ "./node_modules/express/lib sync recursive":
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.o */
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => [];
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/express/lib sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "webpack/container/reference/demand":
/*!*********************************************************************************************!*\
  !*** external "/Users/ajay/Desktop/WebStrom/MicroFrontend/Demand/dist/server/container.js" ***!
  \*********************************************************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("/Users/ajay/Desktop/WebStrom/MicroFrontend/Demand/dist/server/container.js");;

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("buffer");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("net");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("querystring");;

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");;

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("tty");;

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module
/******/ 		__webpack_require__("./src/server/index.js");
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === "vendors-node_modules_loadable_server_lib_index_js-node_modules_express_index_js-node_modules_-ee7ccd") return "" + chunkId + ".js";
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".server.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	(() => {
/******/ 		var chunkMapping = {
/******/ 			"Dedicated": [
/******/ 				"webpack/container/remote/demand/Header"
/******/ 			]
/******/ 		};
/******/ 		var idToExternalAndNameMapping = {
/******/ 			"webpack/container/remote/demand/Header": [
/******/ 				"default",
/******/ 				"./Header",
/******/ 				"webpack/container/reference/demand"
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.remotes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					var getScope = __webpack_require__.R;
/******/ 					if(!getScope) getScope = [];
/******/ 					var data = idToExternalAndNameMapping[id];
/******/ 					if(getScope.indexOf(data) >= 0) return;
/******/ 					getScope.push(data);
/******/ 					if(data.p) return promises.push(data.p);
/******/ 					var onError = (error) => {
/******/ 						if(!error) error = new Error("Container missing");
/******/ 						if(typeof error.message === "string")
/******/ 							error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
/******/ 						__webpack_modules__[id] = () => {
/******/ 							throw error;
/******/ 						}
/******/ 						data.p = 0;
/******/ 					};
/******/ 					var handleFunction = (fn, arg1, arg2, d, next, first) => {
/******/ 						try {
/******/ 							var promise = fn(arg1, arg2);
/******/ 							if(promise && promise.then) {
/******/ 								var p = promise.then((result) => next(result, d), onError);
/******/ 								if(first) promises.push(data.p = p); else return p;
/******/ 							} else {
/******/ 								return next(promise, d, first);
/******/ 							}
/******/ 						} catch(error) {
/******/ 							onError(error);
/******/ 						}
/******/ 					}
/******/ 					var onExternal = (external, _, first) => external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError();
/******/ 					var onInitialized = (_, external, first) => handleFunction(external.get, data[1], getScope, 0, onFactory, first);
/******/ 					var onFactory = (factory) => {
/******/ 						data.p = 1;
/******/ 						__webpack_modules__[id] = (module) => {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => typeof console !== "undefined" && console.warn && console.warn(msg);;
/******/ 			var uniqueName = "webpack-basics";
/******/ 			var register = (name, version, factory) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || !activeVersion.loaded && uniqueName > activeVersion.from) versions[version] = { get: factory, from: uniqueName };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => warn("Initialization of sharing external failed: " + err);
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => module && module.init && module.init(__webpack_require__.S[name], initScope)
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult.catch(handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					initExternal("webpack/container/reference/demand");
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => initPromises[name] = 1);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e("vendors-node_modules_loadable_server_lib_index_js-node_modules_express_index_js-node_modules_-ee7ccd");
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 		
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy8uL2NvbmZpZy9wYXRocy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy8uL3NyYy9zZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3MvLi9zcmMvc2VydmVyL21pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3MvLi9zcmMvc2VydmVyL3NlcnZlckVudHJ5LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzLy4vbm9kZV9tb2R1bGVzL2V4cHJlc3MvbGlifHN5bmMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3MvZXh0ZXJuYWwgXCIvVXNlcnMvYWpheS9EZXNrdG9wL1dlYlN0cm9tL01pY3JvRnJvbnRlbmQvRGVtYW5kL2Rpc3Qvc2VydmVyL2NvbnRhaW5lci5qc1wiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwiYnVmZmVyXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3MvZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy9leHRlcm5hbCBcImV2ZW50c1wiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy9leHRlcm5hbCBcIm5ldFwiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwicXVlcnlzdHJpbmdcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy9leHRlcm5hbCBcInN0cmVhbVwiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwic3RyaW5nX2RlY29kZXJcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy9leHRlcm5hbCBcInR0eVwiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwidXJsXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3MvZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3MvZXh0ZXJuYWwgXCJ6bGliXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3Mvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL3dlYnBhY2svcnVudGltZS9yZW1vdGVzIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3Mvd2VicGFjay9ydW50aW1lL3NoYXJpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3Mvd2VicGFjay9ydW50aW1lL3N0YXJ0dXAgY2h1bmsgZGVwZW5kZW5jaWVzIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL3dlYnBhY2svcnVudGltZS9yZXF1aXJlIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3Mvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwiZnMiLCJhcHBQYXRoIiwicmVhbHBhdGhTeW5jIiwicHJvY2VzcyIsImN3ZCIsInJlc29sdmVQYXRoIiwicmVsYXRpdmVQYXRoIiwicmVzb2x2ZSIsInBhdGhzIiwiY2xpZW50RW50cnkiLCJzZXJ2ZXJFbnRyeSIsImNsaWVudEJ1aWxkIiwic2VydmVyQnVpbGQiLCJwdWJsaWNQYXRoIiwibG9hZGFibGVTZXJ2ZXJTdGF0c0ZpbGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsImJvZHlQYXJzZXIiLCJkb25lIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyIsImluaXRNaWRkbGV3YXJlIiwicmVuZGVyVGh1bmsiLCJzZXJ2ZXJSZW5kZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJuZXh0IiwicmVuZGVyZXIiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsa0JBQUQsQ0FBcEI7O0FBQ0EsTUFBTUMsRUFBRSxHQUFHRCxtQkFBTyxDQUFDLGNBQUQsQ0FBbEI7O0FBRUEsTUFBTUUsT0FBTyxHQUFHRCxFQUFFLENBQUNFLFlBQUgsQ0FBZ0JDLE9BQU8sQ0FBQ0MsR0FBUixFQUFoQixDQUFoQjs7QUFJQSxNQUFNQyxXQUFXLEdBQUlDLFlBQUQsSUFBa0JSLElBQUksQ0FBQ1MsT0FBTCxDQUFhTixPQUFiLEVBQXFCSyxZQUFyQixDQUF0Qzs7QUFFQSxNQUFNRSxLQUFLLEdBQUc7QUFDVkMsYUFBVyxFQUFFSixXQUFXLENBQUMsWUFBRCxDQURkO0FBRVZLLGFBQVcsRUFBRUwsV0FBVyxDQUFDLFlBQUQsQ0FGZDtBQUdWTSxhQUFXLEVBQUVOLFdBQVcsQ0FBQyxhQUFELENBSGQ7QUFJVk8sYUFBVyxFQUFFUCxXQUFXLENBQUMsYUFBRCxDQUpkO0FBS1ZRLFlBQVUsRUFBRSxVQUxG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dGgnKVxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbmNvbnN0IGFwcFBhdGggPSBmcy5yZWFscGF0aFN5bmMocHJvY2Vzcy5jd2QoKSlcblxuXG5cbmNvbnN0IHJlc29sdmVQYXRoID0gKHJlbGF0aXZlUGF0aCkgPT4gcGF0aC5yZXNvbHZlKGFwcFBhdGgscmVsYXRpdmVQYXRoKVxuXG5jb25zdCBwYXRocyA9IHtcbiAgICBjbGllbnRFbnRyeTogcmVzb2x2ZVBhdGgoJ3NyYy9jbGllbnQnKSxcbiAgICBzZXJ2ZXJFbnRyeTogcmVzb2x2ZVBhdGgoJ3NyYy9zZXJ2ZXInKSxcbiAgICBjbGllbnRCdWlsZDogcmVzb2x2ZVBhdGgoJ2Rpc3QvY2xpZW50JyksXG4gICAgc2VydmVyQnVpbGQ6IHJlc29sdmVQYXRoKCdkaXN0L3NlcnZlcicpLFxuICAgIHB1YmxpY1BhdGg6ICcvc3RhdGljLycsXG4gICAgbG9hZGFibGVTZXJ2ZXJTdGF0c0ZpbGU6IHJlc29sdmVQYXRoKCdkaXN0L2NsaWVudC9zdGF0aWMvbG9hZGFibGUtc3RhdHMuanNvbicpLFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBwYXRoc1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCB7IENodW5rRXh0cmFjdG9yIH0gZnJvbSAnQGxvYWRhYmxlL3NlcnZlcidcbmltcG9ydCB7cGF0aHN9IGZyb20gJy4uLy4uL2NvbmZpZy9wYXRocydcblxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NoYXJlZC9hcHAnXG5pbXBvcnQge1N0YXRpY1JvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgaW5pdE1pZGRsZXdhcmUgZnJvbSAnLi9taWRkbGV3YXJlJ1xuXG4vLyBjb25zdCB7Y2xpZW50Q29tcGlsZXIsIHdhdGNoT3B0aW9uc30gPSByZXF1aXJlKCcuLi8uLi9zY3JpcHRzL3N0YXJ0Jylcbi8vIC8vIGNvbnN0IHdlYnBhY2tEZXZNaWRkbGV3YXJlID0gcmVxdWlyZSgnd2VicGFjay1kZXYtbWlkZGxld2FyZScpXG4vLyBjb25zdCBjbGllbnRDb25maWcgPSByZXF1aXJlKCcuLi8uLi9jb25maWcvd2VicGFjay9jbGllbnQnKVxuXG4vLyBpbXBvcnQgbWlkZGxld2FyZSBmcm9tICcuL3JlbmRlcidcblxuXG4vLyBsZXQgZnVuICA9IGFzeW5jICAocmVxLHJlcykgPT4ge1xuLy8gICAgIGNvbnN0IHJlbmRlcmVyID0gKGF3YWl0IGltcG9ydChcIi4vcmVuZGVyXCIpKS5kZWZhdWx0O1xuLy8gICAgIHJldHVybiByZW5kZXJlcihyZXEscmVzKVxuLy8gfVxuXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxuYXBwLnVzZShwYXRocy5wdWJsaWNQYXRoLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4ocGF0aHMuY2xpZW50QnVpbGQsIHBhdGhzLnB1YmxpY1BhdGgpKSlcblxuLy8gYXBwLnVzZSh3ZWJwYWNrRGV2TWlkZGxld2FyZShjbGllbnRDb21waWxlcix7XG4vLyAgIHB1YmxpY1BhdGg6IGNsaWVudENvbmZpZy5vdXRwdXQucHVibGljUGF0aCxcbi8vICAgICAuLi53YXRjaE9wdGlvbnNcbi8vIH0pKVxuLy8gYXBwLnVzZShmdW4pXG5cbmNvbnN0IGRvbmUgPSAoKSA9PiB7XG4gICAgYXBwLmxpc3Rlbig0MDA2LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uIHBvcnQ6IDQwMDZgKTtcbiAgICB9KTtcbn07XG5cbmluaXRNaWRkbGV3YXJlKGV4cHJlc3MsIGFwcCwgZG9uZSk7XG5cblxuXG5cblxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IChleHByZXNzLCBhcHAsIGRvbmUpID0+IHtcbiAgICBjb25zdCByZW5kZXJUaHVuayA9IHJlcXVpcmUoXCIuL3NlcnZlckVudHJ5XCIpLmRlZmF1bHQ7XG5cbiAgICBjb25zdCBzZXJ2ZXJSZW5kZXIgPSByZW5kZXJUaHVuaygpO1xuICAgIGFwcC5nZXQoXCIvKlwiLCAoc2VydmVyUmVuZGVyICkpO1xuXG4gICAgZG9uZSgpO1xufTtcbiIsIlxuLy8gaW1wb3J0IHJlbmRlcmVkIGZyb20gJy4vcmVuZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBjb25zdCByZW5kZXJlciA9IChhd2FpdCBpbXBvcnQoXCIuL3JlbmRlclwiKSkuZGVmYXVsdDtcbiAgICByZXR1cm4gcmVuZGVyZXIocmVxLCByZXMsIG5leHQpO1xufVxuIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSAoKSA9PiBbXTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9leHByZXNzL2xpYiBzeW5jIHJlY3Vyc2l2ZVwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi9Vc2Vycy9hamF5L0Rlc2t0b3AvV2ViU3Ryb20vTWljcm9Gcm9udGVuZC9EZW1hbmQvZGlzdC9zZXJ2ZXIvY29udGFpbmVyLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJidWZmZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeXN0cmluZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyZWFtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJpbmdfZGVjb2RlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHR5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpsaWJcIik7OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gTG9hZCBlbnRyeSBtb2R1bGVcblx0X193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NlcnZlci9pbmRleC5qc1wiKTtcbn07XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzIGFuZCBzaWJsaW5nIGNodW5rcyBmb3IgdGhlIGVudHJ5cG9pbnRcbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBub3QgYmFzZWQgb24gdGVtcGxhdGVcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbG9hZGFibGVfc2VydmVyX2xpYl9pbmRleF9qcy1ub2RlX21vZHVsZXNfZXhwcmVzc19pbmRleF9qcy1ub2RlX21vZHVsZXNfLWVlN2NjZFwiKSByZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiO1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuc2VydmVyLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsInZhciBjaHVua01hcHBpbmcgPSB7XG5cdFwiRGVkaWNhdGVkXCI6IFtcblx0XHRcIndlYnBhY2svY29udGFpbmVyL3JlbW90ZS9kZW1hbmQvSGVhZGVyXCJcblx0XVxufTtcbnZhciBpZFRvRXh0ZXJuYWxBbmROYW1lTWFwcGluZyA9IHtcblx0XCJ3ZWJwYWNrL2NvbnRhaW5lci9yZW1vdGUvZGVtYW5kL0hlYWRlclwiOiBbXG5cdFx0XCJkZWZhdWx0XCIsXG5cdFx0XCIuL0hlYWRlclwiLFxuXHRcdFwid2VicGFjay9jb250YWluZXIvcmVmZXJlbmNlL2RlbWFuZFwiXG5cdF1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYucmVtb3RlcyA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY2h1bmtNYXBwaW5nLCBjaHVua0lkKSkge1xuXHRcdGNodW5rTWFwcGluZ1tjaHVua0lkXS5mb3JFYWNoKChpZCkgPT4ge1xuXHRcdFx0dmFyIGdldFNjb3BlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5SO1xuXHRcdFx0aWYoIWdldFNjb3BlKSBnZXRTY29wZSA9IFtdO1xuXHRcdFx0dmFyIGRhdGEgPSBpZFRvRXh0ZXJuYWxBbmROYW1lTWFwcGluZ1tpZF07XG5cdFx0XHRpZihnZXRTY29wZS5pbmRleE9mKGRhdGEpID49IDApIHJldHVybjtcblx0XHRcdGdldFNjb3BlLnB1c2goZGF0YSk7XG5cdFx0XHRpZihkYXRhLnApIHJldHVybiBwcm9taXNlcy5wdXNoKGRhdGEucCk7XG5cdFx0XHR2YXIgb25FcnJvciA9IChlcnJvcikgPT4ge1xuXHRcdFx0XHRpZighZXJyb3IpIGVycm9yID0gbmV3IEVycm9yKFwiQ29udGFpbmVyIG1pc3NpbmdcIik7XG5cdFx0XHRcdGlmKHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKVxuXHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgKz0gJ1xcbndoaWxlIGxvYWRpbmcgXCInICsgZGF0YVsxXSArICdcIiBmcm9tICcgKyBkYXRhWzJdO1xuXHRcdFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW2lkXSA9ICgpID0+IHtcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRkYXRhLnAgPSAwO1xuXHRcdFx0fTtcblx0XHRcdHZhciBoYW5kbGVGdW5jdGlvbiA9IChmbiwgYXJnMSwgYXJnMiwgZCwgbmV4dCwgZmlyc3QpID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IGZuKGFyZzEsIGFyZzIpO1xuXHRcdFx0XHRcdGlmKHByb21pc2UgJiYgcHJvbWlzZS50aGVuKSB7XG5cdFx0XHRcdFx0XHR2YXIgcCA9IHByb21pc2UudGhlbigocmVzdWx0KSA9PiBuZXh0KHJlc3VsdCwgZCksIG9uRXJyb3IpO1xuXHRcdFx0XHRcdFx0aWYoZmlyc3QpIHByb21pc2VzLnB1c2goZGF0YS5wID0gcCk7IGVsc2UgcmV0dXJuIHA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBuZXh0KHByb21pc2UsIGQsIGZpcnN0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2goZXJyb3IpIHtcblx0XHRcdFx0XHRvbkVycm9yKGVycm9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dmFyIG9uRXh0ZXJuYWwgPSAoZXh0ZXJuYWwsIF8sIGZpcnN0KSA9PiBleHRlcm5hbCA/IGhhbmRsZUZ1bmN0aW9uKF9fd2VicGFja19yZXF1aXJlX18uSSwgZGF0YVswXSwgMCwgZXh0ZXJuYWwsIG9uSW5pdGlhbGl6ZWQsIGZpcnN0KSA6IG9uRXJyb3IoKTtcblx0XHRcdHZhciBvbkluaXRpYWxpemVkID0gKF8sIGV4dGVybmFsLCBmaXJzdCkgPT4gaGFuZGxlRnVuY3Rpb24oZXh0ZXJuYWwuZ2V0LCBkYXRhWzFdLCBnZXRTY29wZSwgMCwgb25GYWN0b3J5LCBmaXJzdCk7XG5cdFx0XHR2YXIgb25GYWN0b3J5ID0gKGZhY3RvcnkpID0+IHtcblx0XHRcdFx0ZGF0YS5wID0gMTtcblx0XHRcdFx0X193ZWJwYWNrX21vZHVsZXNfX1tpZF0gPSAobW9kdWxlKSA9PiB7XG5cdFx0XHRcdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRoYW5kbGVGdW5jdGlvbihfX3dlYnBhY2tfcmVxdWlyZV9fLCBkYXRhWzJdLCAwLCAwLCBvbkV4dGVybmFsLCAxKTtcblx0XHR9KTtcblx0fVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uUyA9IHt9O1xudmFyIGluaXRQcm9taXNlcyA9IHt9O1xudmFyIGluaXRUb2tlbnMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uSSA9IChuYW1lLCBpbml0U2NvcGUpID0+IHtcblx0aWYoIWluaXRTY29wZSkgaW5pdFNjb3BlID0gW107XG5cdC8vIGhhbmRsaW5nIGNpcmN1bGFyIGluaXQgY2FsbHNcblx0dmFyIGluaXRUb2tlbiA9IGluaXRUb2tlbnNbbmFtZV07XG5cdGlmKCFpbml0VG9rZW4pIGluaXRUb2tlbiA9IGluaXRUb2tlbnNbbmFtZV0gPSB7fTtcblx0aWYoaW5pdFNjb3BlLmluZGV4T2YoaW5pdFRva2VuKSA+PSAwKSByZXR1cm47XG5cdGluaXRTY29wZS5wdXNoKGluaXRUb2tlbik7XG5cdC8vIG9ubHkgcnVucyBvbmNlXG5cdGlmKGluaXRQcm9taXNlc1tuYW1lXSkgcmV0dXJuIGluaXRQcm9taXNlc1tuYW1lXTtcblx0Ly8gY3JlYXRlcyBhIG5ldyBzaGFyZSBzY29wZSBpZiBuZWVkZWRcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhfX3dlYnBhY2tfcmVxdWlyZV9fLlMsIG5hbWUpKSBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV0gPSB7fTtcblx0Ly8gcnVucyBhbGwgaW5pdCBzbmlwcGV0cyBmcm9tIGFsbCBtb2R1bGVzIHJlYWNoYWJsZVxuXHR2YXIgc2NvcGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV07XG5cdHZhciB3YXJuID0gKG1zZykgPT4gdHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2Fybihtc2cpOztcblx0dmFyIHVuaXF1ZU5hbWUgPSBcIndlYnBhY2stYmFzaWNzXCI7XG5cdHZhciByZWdpc3RlciA9IChuYW1lLCB2ZXJzaW9uLCBmYWN0b3J5KSA9PiB7XG5cdFx0dmFyIHZlcnNpb25zID0gc2NvcGVbbmFtZV0gPSBzY29wZVtuYW1lXSB8fCB7fTtcblx0XHR2YXIgYWN0aXZlVmVyc2lvbiA9IHZlcnNpb25zW3ZlcnNpb25dO1xuXHRcdGlmKCFhY3RpdmVWZXJzaW9uIHx8ICFhY3RpdmVWZXJzaW9uLmxvYWRlZCAmJiB1bmlxdWVOYW1lID4gYWN0aXZlVmVyc2lvbi5mcm9tKSB2ZXJzaW9uc1t2ZXJzaW9uXSA9IHsgZ2V0OiBmYWN0b3J5LCBmcm9tOiB1bmlxdWVOYW1lIH07XG5cdH07XG5cdHZhciBpbml0RXh0ZXJuYWwgPSAoaWQpID0+IHtcblx0XHR2YXIgaGFuZGxlRXJyb3IgPSAoZXJyKSA9PiB3YXJuKFwiSW5pdGlhbGl6YXRpb24gb2Ygc2hhcmluZyBleHRlcm5hbCBmYWlsZWQ6IFwiICsgZXJyKTtcblx0XHR0cnkge1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHRcdFx0aWYoIW1vZHVsZSkgcmV0dXJuO1xuXHRcdFx0dmFyIGluaXRGbiA9IChtb2R1bGUpID0+IG1vZHVsZSAmJiBtb2R1bGUuaW5pdCAmJiBtb2R1bGUuaW5pdChfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV0sIGluaXRTY29wZSlcblx0XHRcdGlmKG1vZHVsZS50aGVuKSByZXR1cm4gcHJvbWlzZXMucHVzaChtb2R1bGUudGhlbihpbml0Rm4sIGhhbmRsZUVycm9yKSk7XG5cdFx0XHR2YXIgaW5pdFJlc3VsdCA9IGluaXRGbihtb2R1bGUpO1xuXHRcdFx0aWYoaW5pdFJlc3VsdCAmJiBpbml0UmVzdWx0LnRoZW4pIHJldHVybiBwcm9taXNlcy5wdXNoKGluaXRSZXN1bHQuY2F0Y2goaGFuZGxlRXJyb3IpKTtcblx0XHR9IGNhdGNoKGVycikgeyBoYW5kbGVFcnJvcihlcnIpOyB9XG5cdH1cblx0dmFyIHByb21pc2VzID0gW107XG5cdHN3aXRjaChuYW1lKSB7XG5cdFx0Y2FzZSBcImRlZmF1bHRcIjoge1xuXHRcdFx0aW5pdEV4dGVybmFsKFwid2VicGFjay9jb250YWluZXIvcmVmZXJlbmNlL2RlbWFuZFwiKTtcblx0XHR9XG5cdFx0YnJlYWs7XG5cdH1cblx0aWYoIXByb21pc2VzLmxlbmd0aCkgcmV0dXJuIGluaXRQcm9taXNlc1tuYW1lXSA9IDE7XG5cdHJldHVybiBpbml0UHJvbWlzZXNbbmFtZV0gPSBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiBpbml0UHJvbWlzZXNbbmFtZV0gPSAxKTtcbn07IiwidmFyIG5leHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLng7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2xvYWRhYmxlX3NlcnZlcl9saWJfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2V4cHJlc3NfaW5kZXhfanMtbm9kZV9tb2R1bGVzXy1lZTdjY2RcIik7XG5cdHJldHVybiBuZXh0KCk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMVwiIG1lYW5zIFwibG9hZGVkXCIsIG90aGVyd2lzZSBub3QgbG9hZGVkIHlldFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDFcbn07XG5cbnZhciBpbnN0YWxsQ2h1bmsgPSAoY2h1bmspID0+IHtcblx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHMsIHJ1bnRpbWUgPSBjaHVuay5ydW50aW1lO1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMTtcbn07XG5cbi8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYucmVxdWlyZSA9IGZ1bmN0aW9uKGNodW5rSWQsIHByb21pc2VzKSB7XG5cblx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG5cdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0aW5zdGFsbENodW5rKHJlcXVpcmUoXCIuL1wiICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpKSk7XG5cdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDE7XG5cdH1cbn07XG5cbi8vIG5vIGV4dGVybmFsIGluc3RhbGwgY2h1bmtcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsIi8vIG1vZHVsZSBmYWN0b3JpZXMgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHJ1biBzdGFydHVwXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9