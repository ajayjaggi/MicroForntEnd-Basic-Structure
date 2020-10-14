exports.id = "src_server_render_js";
exports.ids = ["src_server_render_js"];
exports.modules = {

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
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
/* harmony import */ var _shared_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/app */ "./src/shared/app.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);











const render = (req, res) => {
  const extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_3__.ChunkExtractor({
    statsFile: _config_paths__WEBPACK_IMPORTED_MODULE_6__.paths.loadableServerStatsFile,
    entrypoints: ['main']
  }); // console.log(extractor.collectChunks(
  //     <StaticRouter location={req.url}>
  //         <App/>
  //     </StaticRouter>
  // ))

  const appContainer = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)(extractor.collectChunks( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.StaticRouter, {
    location: req.url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_app__WEBPACK_IMPORTED_MODULE_8__.default, null))));
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
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/shared/app.js":
/*!***************************!*\
  !*** ./src/shared/app.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/shared/routes.js");




const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, (0,_routes__WEBPACK_IMPORTED_MODULE_2__.default)().map((route, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
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
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.m, __webpack_require__.e, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");

 // import Home from './home'
// import Dedicated from './dedicated'

const Home = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__.default)({
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
const Dedicated = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__.default)({
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
      return git __webpack_require__(id);
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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy8uL3NyYy9zZXJ2ZXIvcmVuZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzLy4vc3JjL3NoYXJlZC9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3MvLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJyZXEiLCJyZXMiLCJleHRyYWN0b3IiLCJDaHVua0V4dHJhY3RvciIsInN0YXRzRmlsZSIsInBhdGhzIiwiZW50cnlwb2ludHMiLCJhcHBDb250YWluZXIiLCJyZW5kZXJUb1N0cmluZyIsImNvbGxlY3RDaHVua3MiLCJ1cmwiLCJzZW5kIiwiZ2V0U3R5bGVUYWdzIiwiZ2V0U2NyaXB0VGFncyIsIkFwcCIsInJvdXRlcyIsIm1hcCIsInJvdXRlIiwiaSIsImV4YWN0Iiwia2V5IiwicGF0aCIsImNvbXBvbmVudCIsIkhvbWUiLCJsb2FkYWJsZSIsIkRlZGljYXRlZCIsImhvbWVSb3V0ZSIsImRlZGljYXRlZFJvdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQ0MsR0FBRCxFQUFLQyxHQUFMLEtBQWE7QUFFeEIsUUFBTUMsU0FBUyxHQUFHLElBQUlDLDREQUFKLENBQW1CO0FBQ2pDQyxhQUFTLEVBQUVDLHdFQURzQjtBQUVqQ0MsZUFBVyxFQUFFLENBQUMsTUFBRDtBQUZvQixHQUFuQixDQUFsQixDQUZ3QixDQU94QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFFBQU1DLFlBQVksR0FBR0MsZ0VBQWMsQ0FBQ04sU0FBUyxDQUFDTyxhQUFWLGVBQ2hDLGlEQUFDLDBEQUFEO0FBQWMsWUFBUSxFQUFFVCxHQUFHLENBQUNVO0FBQTVCLGtCQUNJLGlEQUFDLGdEQUFELE9BREosQ0FEZ0MsQ0FBRCxDQUFuQztBQU1BVCxLQUFHLENBQUNVLElBQUosQ0FDSzs7Ozs7OztjQU9LVCxTQUFTLENBQUNVLFlBQVYsRUFBeUI7Ozs7Y0FJekJWLFNBQVMsQ0FBQ1csYUFBVixFQUEwQjs7a0JBRXRCTixZQUFhOzs7O09BZDNCO0FBb0JILENBeENEOztBQTJDQSxpRUFBZVIsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNZSxHQUFHLEdBQUcsTUFBTTtBQUNkLHNCQUNJLGlEQUFDLG9EQUFELFFBQ0tDLGdEQUFNLEdBQUdDLEdBQVQsQ0FBYSxDQUFDQyxLQUFELEVBQU9DLENBQVAsa0JBQ1YsaURBQUMsbURBQUQ7QUFDSSxTQUFLLEVBQUVELEtBQUssQ0FBQ0UsS0FEakI7QUFFSSxPQUFHLEVBQUVGLEtBQUssQ0FBQ0csR0FBTixJQUFhRixDQUZ0QjtBQUdJLFFBQUksRUFBRUQsS0FBSyxDQUFDSSxJQUhoQjtBQUlJLGFBQVMsRUFBRUosS0FBSyxDQUFDSztBQUpyQixJQURILENBREwsQ0FESjtBQVlILENBYkQ7O0FBZUEsaUVBQWVSLEdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0NBRUE7QUFDQTs7QUFFQSxNQUFNUyxJQUFJLEdBQUdDLDREQUFRO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBLGVBQUMsTUFBTSxvSkFBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGlDQUFDO0FBQUQ7O0FBQUE7QUFBQTs7QUFBQSxFQUFyQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0QsNERBQVE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUEsZUFBRSxNQUFNLHdLQUFSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsaUNBQUM7QUFBRDs7QUFBQTtBQUFBOztBQUFBLEVBQTFCOztBQUdBLE1BQU1FLFNBQVMsR0FBSUwsSUFBRCxLQUFXO0FBQ3pCQSxNQUR5QjtBQUV6QkYsT0FBSyxFQUFFLElBRmtCO0FBR3pCRyxXQUFTLEVBQUVDO0FBSGMsQ0FBWCxDQUFsQjs7QUFNQSxNQUFNSSxjQUFjLEdBQUlOLElBQUQsS0FBVztBQUM5QkEsTUFEOEI7QUFFOUJGLE9BQUssRUFBRSxJQUZ1QjtBQUc5QkcsV0FBUyxFQUFFRztBQUhtQixDQUFYLENBQXZCOztBQU1BLGlFQUFlLE1BQU0sQ0FDakJDLFNBQVMsQ0FBQyxHQUFELENBRFEsRUFFakJDLGNBQWMsQ0FBQyxpQkFBRCxDQUZHLENBQXJCLEUiLCJmaWxlIjoic3JjX3NlcnZlcl9yZW5kZXJfanMuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCB7IENodW5rRXh0cmFjdG9yIH0gZnJvbSAnQGxvYWRhYmxlL3NlcnZlcidcbmltcG9ydCB7cGF0aHN9IGZyb20gJy4uLy4uL2NvbmZpZy9wYXRocydcblxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NoYXJlZC9hcHAnXG5pbXBvcnQge1N0YXRpY1JvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgRGVkaWNhdGVkIGZyb20gXCIuLi9zaGFyZWQvZGVkaWNhdGVkXCI7XG5cbmNvbnN0IHJlbmRlciA9IChyZXEscmVzKSA9PiB7XG5cbiAgICBjb25zdCBleHRyYWN0b3IgPSBuZXcgQ2h1bmtFeHRyYWN0b3Ioe1xuICAgICAgICBzdGF0c0ZpbGU6IHBhdGhzLmxvYWRhYmxlU2VydmVyU3RhdHNGaWxlLFxuICAgICAgICBlbnRyeXBvaW50czogWydtYWluJ11cbiAgICB9KVxuXG4gICAgLy8gY29uc29sZS5sb2coZXh0cmFjdG9yLmNvbGxlY3RDaHVua3MoXG4gICAgLy8gICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9PlxuICAgIC8vICAgICAgICAgPEFwcC8+XG4gICAgLy8gICAgIDwvU3RhdGljUm91dGVyPlxuICAgIC8vICkpXG5cblxuICAgIGNvbnN0IGFwcENvbnRhaW5lciA9IHJlbmRlclRvU3RyaW5nKGV4dHJhY3Rvci5jb2xsZWN0Q2h1bmtzKFxuICAgICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfT5cbiAgICAgICAgICAgIDxBcHAvPlxuICAgICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICApKVxuXG4gICAgcmVzLnNlbmQoXG4gICAgICAgIGBcbiAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICAgIDxodG1sPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgICAgICAgICBCYXNpYyBXZWJwYWNrIGFwcCAgICAgICAgICAgIFxuICAgICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgICAgICR7ZXh0cmFjdG9yLmdldFN0eWxlVGFncygpfVxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIFxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICR7ZXh0cmFjdG9yLmdldFNjcmlwdFRhZ3MoKX1cbiAgICAgICAgICAgIDxkaXYgaWQ9J3Jvb3QnPlxuICAgICAgICAgICAgICAgICR7YXBwQ29udGFpbmVyfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICAgIGBcbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtTd2l0Y2gsIFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcydcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICB7cm91dGVzKCkubWFwKChyb3V0ZSxpKSA9PiAoXG4gICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0PXtyb3V0ZS5leGFjdH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtyb3V0ZS5rZXkgfHwgaX1cbiAgICAgICAgICAgICAgICAgICAgcGF0aD17cm91dGUucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtyb3V0ZS5jb21wb25lbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1N3aXRjaD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBsb2FkYWJsZSBmcm9tICdAbG9hZGFibGUvY29tcG9uZW50J1xuLy8gaW1wb3J0IEhvbWUgZnJvbSAnLi9ob21lJ1xuLy8gaW1wb3J0IERlZGljYXRlZCBmcm9tICcuL2RlZGljYXRlZCdcblxuY29uc3QgSG9tZSA9IGxvYWRhYmxlKCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkhvbWVcIiAqLyAnLi9ob21lJykpXG5jb25zdCBEZWRpY2F0ZWQgPSBsb2FkYWJsZSggKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiRGVkaWNhdGVkXCIgKi8gJy4vZGVkaWNhdGVkJykpXG5cblxuY29uc3QgaG9tZVJvdXRlID0gKHBhdGgpID0+ICh7XG4gICAgcGF0aCxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IEhvbWVcbn0pXG5cbmNvbnN0IGRlZGljYXRlZFJvdXRlID0gKHBhdGgpID0+ICh7XG4gICAgcGF0aCxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IERlZGljYXRlZFxufSlcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gW1xuICAgIGhvbWVSb3V0ZSgnLycpLFxuICAgIGRlZGljYXRlZFJvdXRlKCcvOnBsYXllcihtZXNzaSknKVxuXSJdLCJzb3VyY2VSb290IjoiIn0=