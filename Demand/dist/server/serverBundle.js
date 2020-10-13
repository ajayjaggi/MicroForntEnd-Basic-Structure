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
// let cleanFilename = typeof filename === 'object' && filename.name ? filename.name : filename
// Check if webpack version 4 or 5
// if ('jsonpFunction' in compiler.options.output) {
//     // Add a custom output.jsonpFunction: __LOADABLE_LOADED_CHUNKS__
//     compiler.options.output.jsonpFunction = '__LOADABLE_LOADED_CHUNKS__'
// } else {
//     // Add a custom output.chunkLoadingGlobal: __LOADABLE_LOADED_CHUNKS__
//     compiler.options.output.chunkLoadingGlobal = '__LOADABLE_LOADED_CHUNKS__'
// }

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
app.listen(process.env.PORT || 4005, () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy8uL2NvbmZpZy9wYXRocy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy8uL3NyYy9zZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3MvLi9zcmMvc2hhcmVkL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy8uL3NyYy9zaGFyZWQvcm91dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwiQGxvYWRhYmxlL3NlcnZlclwiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3MvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3MvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3Mvd2VicGFjay9ydW50aW1lL3NoYXJpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3Mvd2VicGFjay9ydW50aW1lL3JlcXVpcmUgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJmcyIsImFwcFBhdGgiLCJyZWFscGF0aFN5bmMiLCJwcm9jZXNzIiwiY3dkIiwicmVzb2x2ZVBhdGgiLCJyZWxhdGl2ZVBhdGgiLCJyZXNvbHZlIiwicGF0aHMiLCJjbGllbnRFbnRyeSIsInNlcnZlckVudHJ5IiwiY2xpZW50QnVpbGQiLCJzZXJ2ZXJCdWlsZCIsInB1YmxpY1BhdGgiLCJsb2FkYWJsZVNlcnZlclN0YXRzRmlsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcHAiLCJleHByZXNzIiwidXNlIiwiYm9keVBhcnNlciIsInJlcSIsInJlcyIsImV4dHJhY3RvciIsIkNodW5rRXh0cmFjdG9yIiwic3RhdHNGaWxlIiwiZW50cnlwb2ludHMiLCJhcHBDb250YWluZXIiLCJyZW5kZXJUb1N0cmluZyIsImNvbGxlY3RDaHVua3MiLCJ1cmwiLCJzZW5kIiwiZ2V0U3R5bGVUYWdzIiwiZ2V0U2NyaXB0VGFncyIsImxpc3RlbiIsImVudiIsIlBPUlQiLCJjb25zb2xlIiwibG9nIiwiQXBwIiwicm91dGVzIiwibWFwIiwicm91dGUiLCJpIiwiZXhhY3QiLCJrZXkiLCJjb21wb25lbnQiLCJIb21lIiwibG9hZGFibGUiLCJEZWRpY2F0ZWQiLCJob21lUm91dGUiLCJkZWRpY2F0ZWRSb3V0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFDQSxNQUFNQyxFQUFFLEdBQUdELG1CQUFPLENBQUMsY0FBRCxDQUFsQjs7QUFFQSxNQUFNRSxPQUFPLEdBQUdELEVBQUUsQ0FBQ0UsWUFBSCxDQUFnQkMsT0FBTyxDQUFDQyxHQUFSLEVBQWhCLENBQWhCOztBQUlBLE1BQU1DLFdBQVcsR0FBSUMsWUFBRCxJQUFrQlIsSUFBSSxDQUFDUyxPQUFMLENBQWFOLE9BQWIsRUFBcUJLLFlBQXJCLENBQXRDOztBQUVBLE1BQU1FLEtBQUssR0FBRztBQUNWQyxhQUFXLEVBQUVKLFdBQVcsQ0FBQyxZQUFELENBRGQ7QUFFVkssYUFBVyxFQUFFTCxXQUFXLENBQUMsWUFBRCxDQUZkO0FBR1ZNLGFBQVcsRUFBRU4sV0FBVyxDQUFDLGFBQUQsQ0FIZDtBQUlWTyxhQUFXLEVBQUVQLFdBQVcsQ0FBQyxhQUFELENBSmQ7QUFLVlEsWUFBVSxFQUFFLFVBTEY7QUFNVkMseUJBQXVCLEVBQUVULFdBQVcsQ0FBQyx3Q0FBRDtBQU4xQixDQUFkO0FBU0FVLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiUjtBQURhLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTVMsR0FBRyxHQUFHQyw4Q0FBTyxFQUFuQjtBQUVBRCxHQUFHLENBQUNFLEdBQUosQ0FBUUMsdURBQUEsRUFBUjtBQUNBSCxHQUFHLENBQUNFLEdBQUosQ0FBUVgsMkRBQVIsRUFBMEJVLHFEQUFBLENBQWVwQixnREFBQSxDQUFVVSw0REFBVixF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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGVBQWUscUJBQXFCO1dBQ3BDO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsWUFBWTtXQUNaO1dBQ0EsR0FBRztXQUNIO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUEsa0I7Ozs7VUNuQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoic2VydmVyQnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbmNvbnN0IGFwcFBhdGggPSBmcy5yZWFscGF0aFN5bmMocHJvY2Vzcy5jd2QoKSlcblxuXG5cbmNvbnN0IHJlc29sdmVQYXRoID0gKHJlbGF0aXZlUGF0aCkgPT4gcGF0aC5yZXNvbHZlKGFwcFBhdGgscmVsYXRpdmVQYXRoKVxuXG5jb25zdCBwYXRocyA9IHtcbiAgICBjbGllbnRFbnRyeTogcmVzb2x2ZVBhdGgoJ3NyYy9jbGllbnQnKSxcbiAgICBzZXJ2ZXJFbnRyeTogcmVzb2x2ZVBhdGgoJ3NyYy9zZXJ2ZXInKSxcbiAgICBjbGllbnRCdWlsZDogcmVzb2x2ZVBhdGgoJ2Rpc3QvY2xpZW50JyksXG4gICAgc2VydmVyQnVpbGQ6IHJlc29sdmVQYXRoKCdkaXN0L3NlcnZlcicpLFxuICAgIHB1YmxpY1BhdGg6ICcvc3RhdGljLycsXG4gICAgbG9hZGFibGVTZXJ2ZXJTdGF0c0ZpbGU6IHJlc29sdmVQYXRoKCdkaXN0L2NsaWVudC9zdGF0aWMvbG9hZGFibGUtc3RhdHMuanNvbicpLFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBwYXRoc1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCB7IENodW5rRXh0cmFjdG9yIH0gZnJvbSAnQGxvYWRhYmxlL3NlcnZlcidcbmltcG9ydCB7cGF0aHN9IGZyb20gJy4uLy4uL2NvbmZpZy9wYXRocydcblxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NoYXJlZC9hcHAnXG5pbXBvcnQge1N0YXRpY1JvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbi8vIGNvbnN0IHtjbGllbnRDb21waWxlciwgd2F0Y2hPcHRpb25zfSA9IHJlcXVpcmUoJy4uLy4uL3NjcmlwdHMvc3RhcnQnKVxuLy8gLy8gY29uc3Qgd2VicGFja0Rldk1pZGRsZXdhcmUgPSByZXF1aXJlKCd3ZWJwYWNrLWRldi1taWRkbGV3YXJlJylcbi8vIGNvbnN0IGNsaWVudENvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL2NvbmZpZy93ZWJwYWNrL2NsaWVudCcpXG4vLyBsZXQgY2xlYW5GaWxlbmFtZSA9IHR5cGVvZiBmaWxlbmFtZSA9PT0gJ29iamVjdCcgJiYgZmlsZW5hbWUubmFtZSA/IGZpbGVuYW1lLm5hbWUgOiBmaWxlbmFtZVxuLy8gQ2hlY2sgaWYgd2VicGFjayB2ZXJzaW9uIDQgb3IgNVxuLy8gaWYgKCdqc29ucEZ1bmN0aW9uJyBpbiBjb21waWxlci5vcHRpb25zLm91dHB1dCkge1xuLy8gICAgIC8vIEFkZCBhIGN1c3RvbSBvdXRwdXQuanNvbnBGdW5jdGlvbjogX19MT0FEQUJMRV9MT0FERURfQ0hVTktTX19cbi8vICAgICBjb21waWxlci5vcHRpb25zLm91dHB1dC5qc29ucEZ1bmN0aW9uID0gJ19fTE9BREFCTEVfTE9BREVEX0NIVU5LU19fJ1xuLy8gfSBlbHNlIHtcbi8vICAgICAvLyBBZGQgYSBjdXN0b20gb3V0cHV0LmNodW5rTG9hZGluZ0dsb2JhbDogX19MT0FEQUJMRV9MT0FERURfQ0hVTktTX19cbi8vICAgICBjb21waWxlci5vcHRpb25zLm91dHB1dC5jaHVua0xvYWRpbmdHbG9iYWwgPSAnX19MT0FEQUJMRV9MT0FERURfQ0hVTktTX18nXG4vLyB9XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxuYXBwLnVzZShwYXRocy5wdWJsaWNQYXRoLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4ocGF0aHMuY2xpZW50QnVpbGQsIHBhdGhzLnB1YmxpY1BhdGgpKSlcbi8vIGFwcC51c2Uod2VicGFja0Rldk1pZGRsZXdhcmUoY2xpZW50Q29tcGlsZXIse1xuLy8gICBwdWJsaWNQYXRoOiBjbGllbnRDb25maWcub3V0cHV0LnB1YmxpY1BhdGgsXG4vLyAgICAgLi4ud2F0Y2hPcHRpb25zXG4vLyB9KSlcblxuYXBwLnVzZSgocmVxLHJlcykgPT4ge1xuXG4gICAgY29uc3QgZXh0cmFjdG9yID0gbmV3IENodW5rRXh0cmFjdG9yKHtcbiAgICAgICBzdGF0c0ZpbGU6IHBhdGhzLmxvYWRhYmxlU2VydmVyU3RhdHNGaWxlLFxuICAgICAgICBlbnRyeXBvaW50czogWydtYWluJ11cbiAgICB9KVxuXG4gICAgLy8gY29uc29sZS5sb2coZXh0cmFjdG9yLmNvbGxlY3RDaHVua3MoXG4gICAgLy8gICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9PlxuICAgIC8vICAgICAgICAgPEFwcC8+XG4gICAgLy8gICAgIDwvU3RhdGljUm91dGVyPlxuICAgIC8vICkpXG5cblxuICAgIGNvbnN0IGFwcENvbnRhaW5lciA9IHJlbmRlclRvU3RyaW5nKGV4dHJhY3Rvci5jb2xsZWN0Q2h1bmtzKFxuICAgICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfT5cbiAgICAgICAgICAgIDxBcHAvPlxuICAgICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICApKVxuXG4gICAgcmVzLnNlbmQoXG4gICAgYFxuICAgIDwhRE9DVFlQRSBodG1sPlxuICAgICAgPGh0bWw+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAgICAgICAgIEJhc2ljIFdlYnBhY2sgYXBwICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICAgICAgJHtleHRyYWN0b3IuZ2V0U3R5bGVUYWdzKCl9XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgXG4gICAgICAgIDxib2R5PlxuICAgICAgICAgICAgJHtleHRyYWN0b3IuZ2V0U2NyaXB0VGFncygpfVxuICAgICAgICAgICAgPGRpdiBpZD0ncm9vdCc+XG4gICAgICAgICAgICAgICAgJHthcHBDb250YWluZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgICAgYFxuICAgIClcbn0pXG5cblxuXG5cbmFwcC5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCA0MDA1LCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnU2VydmVyIHN0YXJ0ZWQnKVxufSlcblxuXG5cblxuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7U3dpdGNoLCBSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAge3JvdXRlcygpLm1hcCgocm91dGUsaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICBleGFjdD17cm91dGUuZXhhY3R9XG4gICAgICAgICAgICAgICAgICAgIGtleT17cm91dGUua2V5IHx8IGl9XG4gICAgICAgICAgICAgICAgICAgIHBhdGg9e3JvdXRlLnBhdGh9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17cm91dGUuY29tcG9uZW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbG9hZGFibGUgZnJvbSAnQGxvYWRhYmxlL2NvbXBvbmVudCdcblxuY29uc3QgSG9tZSA9IGxvYWRhYmxlKCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkhvbWVcIiAqLyAnLi9ob21lJykpXG5jb25zdCBEZWRpY2F0ZWQgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJEZWRpY2F0ZWRcIiAqLyAnLi9kZWRpY2F0ZWQnKSlcblxuXG5jb25zdCBob21lUm91dGUgPSAocGF0aCkgPT4gKHtcbiAgICBwYXRoLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogSG9tZVxufSlcblxuY29uc3QgZGVkaWNhdGVkUm91dGUgPSAocGF0aCkgPT4gKHtcbiAgICBwYXRoLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogRGVkaWNhdGVkXG59KVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBbXG4gICAgaG9tZVJvdXRlKCcvJyksXG4gICAgZGVkaWNhdGVkUm91dGUoJy86cGxheWVyKG1lc3NpKScpXG5dIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGxvYWRhYmxlL3NlcnZlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5zZXJ2ZXIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLlMgPSB7fTtcbnZhciBpbml0UHJvbWlzZXMgPSB7fTtcbnZhciBpbml0VG9rZW5zID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLkkgPSAobmFtZSwgaW5pdFNjb3BlKSA9PiB7XG5cdGlmKCFpbml0U2NvcGUpIGluaXRTY29wZSA9IFtdO1xuXHQvLyBoYW5kbGluZyBjaXJjdWxhciBpbml0IGNhbGxzXG5cdHZhciBpbml0VG9rZW4gPSBpbml0VG9rZW5zW25hbWVdO1xuXHRpZighaW5pdFRva2VuKSBpbml0VG9rZW4gPSBpbml0VG9rZW5zW25hbWVdID0ge307XG5cdGlmKGluaXRTY29wZS5pbmRleE9mKGluaXRUb2tlbikgPj0gMCkgcmV0dXJuO1xuXHRpbml0U2NvcGUucHVzaChpbml0VG9rZW4pO1xuXHQvLyBvbmx5IHJ1bnMgb25jZVxuXHRpZihpbml0UHJvbWlzZXNbbmFtZV0pIHJldHVybiBpbml0UHJvbWlzZXNbbmFtZV07XG5cdC8vIGNyZWF0ZXMgYSBuZXcgc2hhcmUgc2NvcGUgaWYgbmVlZGVkXG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oX193ZWJwYWNrX3JlcXVpcmVfXy5TLCBuYW1lKSkgX193ZWJwYWNrX3JlcXVpcmVfXy5TW25hbWVdID0ge307XG5cdC8vIHJ1bnMgYWxsIGluaXQgc25pcHBldHMgZnJvbSBhbGwgbW9kdWxlcyByZWFjaGFibGVcblx0dmFyIHNjb3BlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5TW25hbWVdO1xuXHR2YXIgd2FybiA9IChtc2cpID0+IHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUud2FybiAmJiBjb25zb2xlLndhcm4obXNnKTs7XG5cdHZhciB1bmlxdWVOYW1lID0gXCJ3ZWJwYWNrLWJhc2ljc1wiO1xuXHR2YXIgcmVnaXN0ZXIgPSAobmFtZSwgdmVyc2lvbiwgZmFjdG9yeSkgPT4ge1xuXHRcdHZhciB2ZXJzaW9ucyA9IHNjb3BlW25hbWVdID0gc2NvcGVbbmFtZV0gfHwge307XG5cdFx0dmFyIGFjdGl2ZVZlcnNpb24gPSB2ZXJzaW9uc1t2ZXJzaW9uXTtcblx0XHRpZighYWN0aXZlVmVyc2lvbiB8fCAhYWN0aXZlVmVyc2lvbi5sb2FkZWQgJiYgdW5pcXVlTmFtZSA+IGFjdGl2ZVZlcnNpb24uZnJvbSkgdmVyc2lvbnNbdmVyc2lvbl0gPSB7IGdldDogZmFjdG9yeSwgZnJvbTogdW5pcXVlTmFtZSB9O1xuXHR9O1xuXHR2YXIgaW5pdEV4dGVybmFsID0gKGlkKSA9PiB7XG5cdFx0dmFyIGhhbmRsZUVycm9yID0gKGVycikgPT4gd2FybihcIkluaXRpYWxpemF0aW9uIG9mIHNoYXJpbmcgZXh0ZXJuYWwgZmFpbGVkOiBcIiArIGVycik7XG5cdFx0dHJ5IHtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0XHRcdGlmKCFtb2R1bGUpIHJldHVybjtcblx0XHRcdHZhciBpbml0Rm4gPSAobW9kdWxlKSA9PiBtb2R1bGUgJiYgbW9kdWxlLmluaXQgJiYgbW9kdWxlLmluaXQoX193ZWJwYWNrX3JlcXVpcmVfXy5TW25hbWVdLCBpbml0U2NvcGUpXG5cdFx0XHRpZihtb2R1bGUudGhlbikgcmV0dXJuIHByb21pc2VzLnB1c2gobW9kdWxlLnRoZW4oaW5pdEZuLCBoYW5kbGVFcnJvcikpO1xuXHRcdFx0dmFyIGluaXRSZXN1bHQgPSBpbml0Rm4obW9kdWxlKTtcblx0XHRcdGlmKGluaXRSZXN1bHQgJiYgaW5pdFJlc3VsdC50aGVuKSByZXR1cm4gcHJvbWlzZXMucHVzaChpbml0UmVzdWx0LmNhdGNoKGhhbmRsZUVycm9yKSk7XG5cdFx0fSBjYXRjaChlcnIpIHsgaGFuZGxlRXJyb3IoZXJyKTsgfVxuXHR9XG5cdHZhciBwcm9taXNlcyA9IFtdO1xuXHRzd2l0Y2gobmFtZSkge1xuXHR9XG5cdGlmKCFwcm9taXNlcy5sZW5ndGgpIHJldHVybiBpbml0UHJvbWlzZXNbbmFtZV0gPSAxO1xuXHRyZXR1cm4gaW5pdFByb21pc2VzW25hbWVdID0gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4gaW5pdFByb21pc2VzW25hbWVdID0gMSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMVwiIG1lYW5zIFwibG9hZGVkXCIsIG90aGVyd2lzZSBub3QgbG9hZGVkIHlldFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDFcbn07XG5cbnZhciBpbnN0YWxsQ2h1bmsgPSAoY2h1bmspID0+IHtcblx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHMsIHJ1bnRpbWUgPSBjaHVuay5ydW50aW1lO1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMTtcbn07XG5cbi8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYucmVxdWlyZSA9IGZ1bmN0aW9uKGNodW5rSWQsIHByb21pc2VzKSB7XG5cblx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG5cdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0aW5zdGFsbENodW5rKHJlcXVpcmUoXCIuL1wiICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpKSk7XG5cdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDE7XG5cdH1cbn07XG5cbi8vIG5vIGV4dGVybmFsIGluc3RhbGwgY2h1bmtcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsIi8vIG1vZHVsZSBmYWN0b3JpZXMgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zZXJ2ZXIvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9