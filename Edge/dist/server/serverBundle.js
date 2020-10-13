module.exports =
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
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @loadable/server */ "@loadable/server");
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_paths__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/paths */ "./config/paths.js");
/* harmony import */ var _config_paths__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_paths__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/app */ "./src/shared/app.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);








 // const {clientCompiler, watchOptions} = require('../../scripts/start')
// // const webpackDevMiddleware = require('webpack-dev-middleware')
// const clientConfig = require('../../config/webpack/client')

const app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default().json());
app.use(_config_paths__WEBPACK_IMPORTED_MODULE_7__.paths.publicPath, express__WEBPACK_IMPORTED_MODULE_1___default().static(path__WEBPACK_IMPORTED_MODULE_6___default().join(_config_paths__WEBPACK_IMPORTED_MODULE_7__.paths.clientBuild, _config_paths__WEBPACK_IMPORTED_MODULE_7__.paths.publicPath))); // app.use(webpackDevMiddleware(clientCompiler,{
//   publicPath: clientConfig.output.publicPath,
//     ...watchOptions
// }))

app.use((req, res) => {
  const extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_3__.ChunkExtractor({
    statsFile: _config_paths__WEBPACK_IMPORTED_MODULE_7__.paths.loadableServerStatsFile,
    entrypoints: ['main']
  }); // console.log(extractor.collectChunks(
  //     <StaticRouter location={req.url}>
  //         <App/>
  //     </StaticRouter>
  // ))

  const appContainer = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)(extractor.collectChunks( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.StaticRouter, {
    location: req.url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_app__WEBPACK_IMPORTED_MODULE_8__.default, null))));
  res.send(`
    <!DOCTYPE html>
      <html>
        <head>
            <title>
                   Basic Webpack app            
            </title>
            ${extractor.getStyleTags()}
        </head>
        
        <body>
            ${extractor.getScriptTags()}
            <div id='root'>
                ${appContainer}
            </div>
        </body>
      </html>
      `);
});
app.listen(process.env.PORT || 4006, () => {
  console.log('Server started');
});

/***/ }),

/***/ "./src/shared/app.js":
/*!***************************!*\
  !*** ./src/shared/app.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/shared/routes.js");




const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, (0,_routes__WEBPACK_IMPORTED_MODULE_2__.default)().map((route, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    exact: route.exact,
    key: route.key || i,
    path: route.path,
    component: route.component
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.m, __webpack_require__.e, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_1__);


const Home = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
  resolved: {},

  chunkName() {
    return "Home";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => __webpack_require__.e(/*! import() | Home */ "Home").then(__webpack_require__.bind(__webpack_require__, /*! ./home */ "./src/shared/home/index.js")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./home */ "./src/shared/home/index.js");
    }

    return eval('require.resolve')("./home");
  }

});
const Dedicated = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
  resolved: {},

  chunkName() {
    return "Dedicated";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => __webpack_require__.e(/*! import() | Dedicated */ "Dedicated").then(__webpack_require__.bind(__webpack_require__, /*! ./dedicated */ "./src/shared/dedicated/index.js")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./dedicated */ "./src/shared/dedicated/index.js");
    }

    return eval('require.resolve')("./dedicated");
  }

});

const homeRoute = path => ({
  path,
  exact: true,
  component: Home
});

const dedicatedRoute = path => ({
  path,
  exact: true,
  component: Dedicated
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => [homeRoute('/'), dedicatedRoute('/:player(messi)')]);

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("@loadable/component");;

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("@loadable/server");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("express");;

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "webpack/container/reference/demand":
/*!*****************************************************!*\
  !*** external "webpack/container/reference/demand" ***!
  \*****************************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("webpack/container/reference/demand");;

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
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
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/server/index.js");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy8uL2NvbmZpZy9wYXRocy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy8uL3NyYy9zZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3MvLi9zcmMvc2hhcmVkL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy8uL3NyYy9zaGFyZWQvcm91dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwiQGxvYWRhYmxlL3NlcnZlclwiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3MvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3MvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwid2VicGFjay9jb250YWluZXIvcmVmZXJlbmNlL2RlbWFuZFwiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3Mvd2VicGFjay9ydW50aW1lL3JlbW90ZXMgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy93ZWJwYWNrL3J1bnRpbWUvc2hhcmluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy93ZWJwYWNrL3J1bnRpbWUvcmVxdWlyZSBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJwYXRoIiwicmVxdWlyZSIsImZzIiwiYXBwUGF0aCIsInJlYWxwYXRoU3luYyIsInByb2Nlc3MiLCJjd2QiLCJyZXNvbHZlUGF0aCIsInJlbGF0aXZlUGF0aCIsInJlc29sdmUiLCJwYXRocyIsImNsaWVudEVudHJ5Iiwic2VydmVyRW50cnkiLCJjbGllbnRCdWlsZCIsInNlcnZlckJ1aWxkIiwicHVibGljUGF0aCIsImxvYWRhYmxlU2VydmVyU3RhdHNGaWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFwcCIsImV4cHJlc3MiLCJ1c2UiLCJib2R5UGFyc2VyIiwicmVxIiwicmVzIiwiZXh0cmFjdG9yIiwiQ2h1bmtFeHRyYWN0b3IiLCJzdGF0c0ZpbGUiLCJlbnRyeXBvaW50cyIsImFwcENvbnRhaW5lciIsInJlbmRlclRvU3RyaW5nIiwiY29sbGVjdENodW5rcyIsInVybCIsInNlbmQiLCJnZXRTdHlsZVRhZ3MiLCJnZXRTY3JpcHRUYWdzIiwibGlzdGVuIiwiZW52IiwiUE9SVCIsImNvbnNvbGUiLCJsb2ciLCJBcHAiLCJyb3V0ZXMiLCJtYXAiLCJyb3V0ZSIsImkiLCJleGFjdCIsImtleSIsImNvbXBvbmVudCIsIkhvbWUiLCJsb2FkYWJsZSIsIkRlZGljYXRlZCIsImhvbWVSb3V0ZSIsImRlZGljYXRlZFJvdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGtCQUFELENBQXBCOztBQUNBLE1BQU1DLEVBQUUsR0FBR0QsbUJBQU8sQ0FBQyxjQUFELENBQWxCOztBQUVBLE1BQU1FLE9BQU8sR0FBR0QsRUFBRSxDQUFDRSxZQUFILENBQWdCQyxPQUFPLENBQUNDLEdBQVIsRUFBaEIsQ0FBaEI7O0FBSUEsTUFBTUMsV0FBVyxHQUFJQyxZQUFELElBQWtCUixJQUFJLENBQUNTLE9BQUwsQ0FBYU4sT0FBYixFQUFxQkssWUFBckIsQ0FBdEM7O0FBRUEsTUFBTUUsS0FBSyxHQUFHO0FBQ1ZDLGFBQVcsRUFBRUosV0FBVyxDQUFDLFlBQUQsQ0FEZDtBQUVWSyxhQUFXLEVBQUVMLFdBQVcsQ0FBQyxZQUFELENBRmQ7QUFHVk0sYUFBVyxFQUFFTixXQUFXLENBQUMsYUFBRCxDQUhkO0FBSVZPLGFBQVcsRUFBRVAsV0FBVyxDQUFDLGFBQUQsQ0FKZDtBQUtWUSxZQUFVLEVBQUUsVUFMRjtBQU1WQyx5QkFBdUIsRUFBRVQsV0FBVyxDQUFDLHdDQUFEO0FBTjFCLENBQWQ7QUFTQVUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JSO0FBRGEsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNUyxHQUFHLEdBQUdDLDhDQUFPLEVBQW5CO0FBRUFELEdBQUcsQ0FBQ0UsR0FBSixD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QTtXQUNBO1dBQ0E7V0FDQSwwQ0FBMEM7V0FDMUMsTUFBTTtXQUNOO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0EsQzs7Ozs7V0N0REE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0dBQXNHO1dBQ3RHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRyxhQUFhLGtCQUFrQjtXQUNsQztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDM0NBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGVBQWUscUJBQXFCO1dBQ3BDO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsWUFBWTtXQUNaO1dBQ0EsR0FBRztXQUNIO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUEsa0I7Ozs7VUNuQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoic2VydmVyQnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbmNvbnN0IGFwcFBhdGggPSBmcy5yZWFscGF0aFN5bmMocHJvY2Vzcy5jd2QoKSlcblxuXG5cbmNvbnN0IHJlc29sdmVQYXRoID0gKHJlbGF0aXZlUGF0aCkgPT4gcGF0aC5yZXNvbHZlKGFwcFBhdGgscmVsYXRpdmVQYXRoKVxuXG5jb25zdCBwYXRocyA9IHtcbiAgICBjbGllbnRFbnRyeTogcmVzb2x2ZVBhdGgoJ3NyYy9jbGllbnQnKSxcbiAgICBzZXJ2ZXJFbnRyeTogcmVzb2x2ZVBhdGgoJ3NyYy9zZXJ2ZXInKSxcbiAgICBjbGllbnRCdWlsZDogcmVzb2x2ZVBhdGgoJ2Rpc3QvY2xpZW50JyksXG4gICAgc2VydmVyQnVpbGQ6IHJlc29sdmVQYXRoKCdkaXN0L3NlcnZlcicpLFxuICAgIHB1YmxpY1BhdGg6ICcvc3RhdGljLycsXG4gICAgbG9hZGFibGVTZXJ2ZXJTdGF0c0ZpbGU6IHJlc29sdmVQYXRoKCdkaXN0L2NsaWVudC9zdGF0aWMvbG9hZGFibGUtc3RhdHMuanNvbicpLFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBwYXRoc1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCB7IENodW5rRXh0cmFjdG9yIH0gZnJvbSAnQGxvYWRhYmxlL3NlcnZlcidcbmltcG9ydCB7cGF0aHN9IGZyb20gJy4uLy4uL2NvbmZpZy9wYXRocydcblxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NoYXJlZC9hcHAnXG5pbXBvcnQge1N0YXRpY1JvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbi8vIGNvbnN0IHtjbGllbnRDb21waWxlciwgd2F0Y2hPcHRpb25zfSA9IHJlcXVpcmUoJy4uLy4uL3NjcmlwdHMvc3RhcnQnKVxuLy8gLy8gY29uc3Qgd2VicGFja0Rldk1pZGRsZXdhcmUgPSByZXF1aXJlKCd3ZWJwYWNrLWRldi1taWRkbGV3YXJlJylcbi8vIGNvbnN0IGNsaWVudENvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL2NvbmZpZy93ZWJwYWNrL2NsaWVudCcpXG5cblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpXG5hcHAudXNlKHBhdGhzLnB1YmxpY1BhdGgsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihwYXRocy5jbGllbnRCdWlsZCwgcGF0aHMucHVibGljUGF0aCkpKVxuXG4vLyBhcHAudXNlKHdlYnBhY2tEZXZNaWRkbGV3YXJlKGNsaWVudENvbXBpbGVyLHtcbi8vICAgcHVibGljUGF0aDogY2xpZW50Q29uZmlnLm91dHB1dC5wdWJsaWNQYXRoLFxuLy8gICAgIC4uLndhdGNoT3B0aW9uc1xuLy8gfSkpXG5cbmFwcC51c2UoKHJlcSxyZXMpID0+IHtcblxuICAgIGNvbnN0IGV4dHJhY3RvciA9IG5ldyBDaHVua0V4dHJhY3Rvcih7XG4gICAgICAgc3RhdHNGaWxlOiBwYXRocy5sb2FkYWJsZVNlcnZlclN0YXRzRmlsZSxcbiAgICAgICAgZW50cnlwb2ludHM6IFsnbWFpbiddXG4gICAgfSlcblxuICAgIC8vIGNvbnNvbGUubG9nKGV4dHJhY3Rvci5jb2xsZWN0Q2h1bmtzKFxuICAgIC8vICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfT5cbiAgICAvLyAgICAgICAgIDxBcHAvPlxuICAgIC8vICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICAvLyApKVxuXG5cbiAgICBjb25zdCBhcHBDb250YWluZXIgPSByZW5kZXJUb1N0cmluZyhleHRyYWN0b3IuY29sbGVjdENodW5rcyhcbiAgICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0+XG4gICAgICAgICAgICA8QXBwLz5cbiAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgKSlcblxuICAgIHJlcy5zZW5kKFxuICAgIGBcbiAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICAgIDxodG1sPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgICAgICAgICBCYXNpYyBXZWJwYWNrIGFwcCAgICAgICAgICAgIFxuICAgICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgICAgICR7ZXh0cmFjdG9yLmdldFN0eWxlVGFncygpfVxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIFxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICR7ZXh0cmFjdG9yLmdldFNjcmlwdFRhZ3MoKX1cbiAgICAgICAgICAgIDxkaXYgaWQ9J3Jvb3QnPlxuICAgICAgICAgICAgICAgICR7YXBwQ29udGFpbmVyfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICAgIGBcbiAgICApXG59KVxuXG5cblxuXG5hcHAubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQgfHwgNDAwNiwoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1NlcnZlciBzdGFydGVkJylcbn0pXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1N3aXRjaCwgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIHtyb3V0ZXMoKS5tYXAoKHJvdXRlLGkpID0+IChcbiAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q9e3JvdXRlLmV4YWN0fVxuICAgICAgICAgICAgICAgICAgICBrZXk9e3JvdXRlLmtleSB8fCBpfVxuICAgICAgICAgICAgICAgICAgICBwYXRoPXtyb3V0ZS5wYXRofVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3JvdXRlLmNvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvU3dpdGNoPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGxvYWRhYmxlIGZyb20gJ0Bsb2FkYWJsZS9jb21wb25lbnQnXG5cbmNvbnN0IEhvbWUgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJIb21lXCIgKi8gJy4vaG9tZScpKVxuY29uc3QgRGVkaWNhdGVkID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiRGVkaWNhdGVkXCIgKi8gJy4vZGVkaWNhdGVkJykpXG5cblxuY29uc3QgaG9tZVJvdXRlID0gKHBhdGgpID0+ICh7XG4gICAgcGF0aCxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IEhvbWVcbn0pXG5cbmNvbnN0IGRlZGljYXRlZFJvdXRlID0gKHBhdGgpID0+ICh7XG4gICAgcGF0aCxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IERlZGljYXRlZFxufSlcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gW1xuICAgIGhvbWVSb3V0ZSgnLycpLFxuICAgIGRlZGljYXRlZFJvdXRlKCcvOnBsYXllcihtZXNzaSknKVxuXSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBsb2FkYWJsZS9jb21wb25lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBsb2FkYWJsZS9zZXJ2ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnBhY2svY29udGFpbmVyL3JlZmVyZW5jZS9kZW1hbmRcIik7OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuc2VydmVyLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIGNodW5rTWFwcGluZyA9IHtcblx0XCJEZWRpY2F0ZWRcIjogW1xuXHRcdFwid2VicGFjay9jb250YWluZXIvcmVtb3RlL2RlbWFuZC9IZWFkZXJcIlxuXHRdXG59O1xudmFyIGlkVG9FeHRlcm5hbEFuZE5hbWVNYXBwaW5nID0ge1xuXHRcIndlYnBhY2svY29udGFpbmVyL3JlbW90ZS9kZW1hbmQvSGVhZGVyXCI6IFtcblx0XHRcImRlZmF1bHRcIixcblx0XHRcIi4vSGVhZGVyXCIsXG5cdFx0XCJ3ZWJwYWNrL2NvbnRhaW5lci9yZWZlcmVuY2UvZGVtYW5kXCJcblx0XVxufTtcbl9fd2VicGFja19yZXF1aXJlX18uZi5yZW1vdGVzID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhjaHVua01hcHBpbmcsIGNodW5rSWQpKSB7XG5cdFx0Y2h1bmtNYXBwaW5nW2NodW5rSWRdLmZvckVhY2goKGlkKSA9PiB7XG5cdFx0XHR2YXIgZ2V0U2NvcGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLlI7XG5cdFx0XHRpZighZ2V0U2NvcGUpIGdldFNjb3BlID0gW107XG5cdFx0XHR2YXIgZGF0YSA9IGlkVG9FeHRlcm5hbEFuZE5hbWVNYXBwaW5nW2lkXTtcblx0XHRcdGlmKGdldFNjb3BlLmluZGV4T2YoZGF0YSkgPj0gMCkgcmV0dXJuO1xuXHRcdFx0Z2V0U2NvcGUucHVzaChkYXRhKTtcblx0XHRcdGlmKGRhdGEucCkgcmV0dXJuIHByb21pc2VzLnB1c2goZGF0YS5wKTtcblx0XHRcdHZhciBvbkVycm9yID0gKGVycm9yKSA9PiB7XG5cdFx0XHRcdGlmKCFlcnJvcikgZXJyb3IgPSBuZXcgRXJyb3IoXCJDb250YWluZXIgbWlzc2luZ1wiKTtcblx0XHRcdFx0aWYodHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSArPSAnXFxud2hpbGUgbG9hZGluZyBcIicgKyBkYXRhWzFdICsgJ1wiIGZyb20gJyArIGRhdGFbMl07XG5cdFx0XHRcdF9fd2VicGFja19tb2R1bGVzX19baWRdID0gKCkgPT4ge1xuXHRcdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRhdGEucCA9IDA7XG5cdFx0XHR9O1xuXHRcdFx0dmFyIGhhbmRsZUZ1bmN0aW9uID0gKGZuLCBhcmcxLCBhcmcyLCBkLCBuZXh0LCBmaXJzdCkgPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gZm4oYXJnMSwgYXJnMik7XG5cdFx0XHRcdFx0aWYocHJvbWlzZSAmJiBwcm9taXNlLnRoZW4pIHtcblx0XHRcdFx0XHRcdHZhciBwID0gcHJvbWlzZS50aGVuKChyZXN1bHQpID0+IG5leHQocmVzdWx0LCBkKSwgb25FcnJvcik7XG5cdFx0XHRcdFx0XHRpZihmaXJzdCkgcHJvbWlzZXMucHVzaChkYXRhLnAgPSBwKTsgZWxzZSByZXR1cm4gcDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG5leHQocHJvbWlzZSwgZCwgZmlyc3QpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaChlcnJvcikge1xuXHRcdFx0XHRcdG9uRXJyb3IoZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR2YXIgb25FeHRlcm5hbCA9IChleHRlcm5hbCwgXywgZmlyc3QpID0+IGV4dGVybmFsID8gaGFuZGxlRnVuY3Rpb24oX193ZWJwYWNrX3JlcXVpcmVfXy5JLCBkYXRhWzBdLCAwLCBleHRlcm5hbCwgb25Jbml0aWFsaXplZCwgZmlyc3QpIDogb25FcnJvcigpO1xuXHRcdFx0dmFyIG9uSW5pdGlhbGl6ZWQgPSAoXywgZXh0ZXJuYWwsIGZpcnN0KSA9PiBoYW5kbGVGdW5jdGlvbihleHRlcm5hbC5nZXQsIGRhdGFbMV0sIGdldFNjb3BlLCAwLCBvbkZhY3RvcnksIGZpcnN0KTtcblx0XHRcdHZhciBvbkZhY3RvcnkgPSAoZmFjdG9yeSkgPT4ge1xuXHRcdFx0XHRkYXRhLnAgPSAxO1xuXHRcdFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW2lkXSA9IChtb2R1bGUpID0+IHtcblx0XHRcdFx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGhhbmRsZUZ1bmN0aW9uKF9fd2VicGFja19yZXF1aXJlX18sIGRhdGFbMl0sIDAsIDAsIG9uRXh0ZXJuYWwsIDEpO1xuXHRcdH0pO1xuXHR9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5TID0ge307XG52YXIgaW5pdFByb21pc2VzID0ge307XG52YXIgaW5pdFRva2VucyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5JID0gKG5hbWUsIGluaXRTY29wZSkgPT4ge1xuXHRpZighaW5pdFNjb3BlKSBpbml0U2NvcGUgPSBbXTtcblx0Ly8gaGFuZGxpbmcgY2lyY3VsYXIgaW5pdCBjYWxsc1xuXHR2YXIgaW5pdFRva2VuID0gaW5pdFRva2Vuc1tuYW1lXTtcblx0aWYoIWluaXRUb2tlbikgaW5pdFRva2VuID0gaW5pdFRva2Vuc1tuYW1lXSA9IHt9O1xuXHRpZihpbml0U2NvcGUuaW5kZXhPZihpbml0VG9rZW4pID49IDApIHJldHVybjtcblx0aW5pdFNjb3BlLnB1c2goaW5pdFRva2VuKTtcblx0Ly8gb25seSBydW5zIG9uY2Vcblx0aWYoaW5pdFByb21pc2VzW25hbWVdKSByZXR1cm4gaW5pdFByb21pc2VzW25hbWVdO1xuXHQvLyBjcmVhdGVzIGEgbmV3IHNoYXJlIHNjb3BlIGlmIG5lZWRlZFxuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKF9fd2VicGFja19yZXF1aXJlX18uUywgbmFtZSkpIF9fd2VicGFja19yZXF1aXJlX18uU1tuYW1lXSA9IHt9O1xuXHQvLyBydW5zIGFsbCBpbml0IHNuaXBwZXRzIGZyb20gYWxsIG1vZHVsZXMgcmVhY2hhYmxlXG5cdHZhciBzY29wZSA9IF9fd2VicGFja19yZXF1aXJlX18uU1tuYW1lXTtcblx0dmFyIHdhcm4gPSAobXNnKSA9PiB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKG1zZyk7O1xuXHR2YXIgdW5pcXVlTmFtZSA9IFwid2VicGFjay1iYXNpY3NcIjtcblx0dmFyIHJlZ2lzdGVyID0gKG5hbWUsIHZlcnNpb24sIGZhY3RvcnkpID0+IHtcblx0XHR2YXIgdmVyc2lvbnMgPSBzY29wZVtuYW1lXSA9IHNjb3BlW25hbWVdIHx8IHt9O1xuXHRcdHZhciBhY3RpdmVWZXJzaW9uID0gdmVyc2lvbnNbdmVyc2lvbl07XG5cdFx0aWYoIWFjdGl2ZVZlcnNpb24gfHwgIWFjdGl2ZVZlcnNpb24ubG9hZGVkICYmIHVuaXF1ZU5hbWUgPiBhY3RpdmVWZXJzaW9uLmZyb20pIHZlcnNpb25zW3ZlcnNpb25dID0geyBnZXQ6IGZhY3RvcnksIGZyb206IHVuaXF1ZU5hbWUgfTtcblx0fTtcblx0dmFyIGluaXRFeHRlcm5hbCA9IChpZCkgPT4ge1xuXHRcdHZhciBoYW5kbGVFcnJvciA9IChlcnIpID0+IHdhcm4oXCJJbml0aWFsaXphdGlvbiBvZiBzaGFyaW5nIGV4dGVybmFsIGZhaWxlZDogXCIgKyBlcnIpO1xuXHRcdHRyeSB7XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdFx0XHRpZighbW9kdWxlKSByZXR1cm47XG5cdFx0XHR2YXIgaW5pdEZuID0gKG1vZHVsZSkgPT4gbW9kdWxlICYmIG1vZHVsZS5pbml0ICYmIG1vZHVsZS5pbml0KF9fd2VicGFja19yZXF1aXJlX18uU1tuYW1lXSwgaW5pdFNjb3BlKVxuXHRcdFx0aWYobW9kdWxlLnRoZW4pIHJldHVybiBwcm9taXNlcy5wdXNoKG1vZHVsZS50aGVuKGluaXRGbiwgaGFuZGxlRXJyb3IpKTtcblx0XHRcdHZhciBpbml0UmVzdWx0ID0gaW5pdEZuKG1vZHVsZSk7XG5cdFx0XHRpZihpbml0UmVzdWx0ICYmIGluaXRSZXN1bHQudGhlbikgcmV0dXJuIHByb21pc2VzLnB1c2goaW5pdFJlc3VsdC5jYXRjaChoYW5kbGVFcnJvcikpO1xuXHRcdH0gY2F0Y2goZXJyKSB7IGhhbmRsZUVycm9yKGVycik7IH1cblx0fVxuXHR2YXIgcHJvbWlzZXMgPSBbXTtcblx0c3dpdGNoKG5hbWUpIHtcblx0XHRjYXNlIFwiZGVmYXVsdFwiOiB7XG5cdFx0XHRpbml0RXh0ZXJuYWwoXCJ3ZWJwYWNrL2NvbnRhaW5lci9yZWZlcmVuY2UvZGVtYW5kXCIpO1xuXHRcdH1cblx0XHRicmVhaztcblx0fVxuXHRpZighcHJvbWlzZXMubGVuZ3RoKSByZXR1cm4gaW5pdFByb21pc2VzW25hbWVdID0gMTtcblx0cmV0dXJuIGluaXRQcm9taXNlc1tuYW1lXSA9IFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IGluaXRQcm9taXNlc1tuYW1lXSA9IDEpO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4vLyBcIjFcIiBtZWFucyBcImxvYWRlZFwiLCBvdGhlcndpc2Ugbm90IGxvYWRlZCB5ZXRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAxXG59O1xuXG52YXIgaW5zdGFsbENodW5rID0gKGNodW5rKSA9PiB7XG5cdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzLCBydW50aW1lID0gY2h1bmsucnVudGltZTtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDE7XG59O1xuXG4vLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLnJlcXVpcmUgPSBmdW5jdGlvbihjaHVua0lkLCBwcm9taXNlcykge1xuXG5cdC8vIFwiMVwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuXHRpZighaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdGluc3RhbGxDaHVuayhyZXF1aXJlKFwiLi9cIiArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKSkpO1xuXHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAxO1xuXHR9XG59O1xuXG4vLyBubyBleHRlcm5hbCBpbnN0YWxsIGNodW5rXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3QiLCIvLyBtb2R1bGUgZmFjdG9yaWVzIGFyZSB1c2VkIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2VydmVyL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==