(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["src_client_bootstrap_js"],{

/***/ "./src/client/bootstrap.js":
/*!*********************************!*\
  !*** ./src/client/bootstrap.js ***!
  \*********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var _shared_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/app */ "./src/shared/app.js");





(0,_loadable_component__WEBPACK_IMPORTED_MODULE_2__.loadableReady)(() => {
  (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.hydrate)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_app__WEBPACK_IMPORTED_MODULE_4__.default, null)), document.getElementById('root'));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");


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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy8uL3NyYy9jbGllbnQvYm9vdHN0cmFwLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzLy4vc3JjL3NoYXJlZC9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3MvLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJsb2FkYWJsZVJlYWR5IiwiaHlkcmF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJBcHAiLCJyb3V0ZXMiLCJtYXAiLCJyb3V0ZSIsImkiLCJleGFjdCIsImtleSIsInBhdGgiLCJjb21wb25lbnQiLCJIb21lIiwibG9hZGFibGUiLCJEZWRpY2F0ZWQiLCJob21lUm91dGUiLCJkZWRpY2F0ZWRSb3V0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUFBLGtFQUFhLENBQUMsTUFBTTtBQUNoQkMsb0RBQU8sZUFDSCwyREFBQywyREFBRCxxQkFDSSwyREFBQyxnREFBRCxPQURKLENBREcsRUFJSEMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBSkcsQ0FBUDtBQU1ILENBUFksQ0FBYixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxHQUFHLEdBQUcsTUFBTTtBQUNkLHNCQUNJLDJEQUFDLG9EQUFELFFBQ0tDLGdEQUFNLEdBQUdDLEdBQVQsQ0FBYSxDQUFDQyxLQUFELEVBQU9DLENBQVAsa0JBQ1YsMkRBQUMsbURBQUQ7QUFDSSxTQUFLLEVBQUVELEtBQUssQ0FBQ0UsS0FEakI7QUFFSSxPQUFHLEVBQUVGLEtBQUssQ0FBQ0csR0FBTixJQUFhRixDQUZ0QjtBQUdJLFFBQUksRUFBRUQsS0FBSyxDQUFDSSxJQUhoQjtBQUlJLGFBQVMsRUFBRUosS0FBSyxDQUFDSztBQUpyQixJQURILENBREwsQ0FESjtBQVlILENBYkQ7O0FBZUEsaUVBQWVSLEdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBRUEsTUFBTVMsSUFBSSxHQUFHQyw0REFBUTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxlQUFDLE1BQU0sb0pBQVA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxpQ0FBQztBQUFEOztBQUFBO0FBQUE7O0FBQUEsRUFBckI7QUFDQSxNQUFNQyxTQUFTLEdBQUdELDREQUFRO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBLGVBQUMsTUFBTSx3S0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGlDQUFDO0FBQUQ7O0FBQUE7QUFBQTs7QUFBQSxFQUExQjs7QUFHQSxNQUFNRSxTQUFTLEdBQUlMLElBQUQsS0FBVztBQUN6QkEsTUFEeUI7QUFFekJGLE9BQUssRUFBRSxJQUZrQjtBQUd6QkcsV0FBUyxFQUFFQztBQUhjLENBQVgsQ0FBbEI7O0FBTUEsTUFBTUksY0FBYyxHQUFJTixJQUFELEtBQVc7QUFDOUJBLE1BRDhCO0FBRTlCRixPQUFLLEVBQUUsSUFGdUI7QUFHOUJHLFdBQVMsRUFBRUc7QUFIbUIsQ0FBWCxDQUF2Qjs7QUFNQSxpRUFBZSxNQUFNLENBQ2pCQyxTQUFTLENBQUMsR0FBRCxDQURRLEVBRWpCQyxjQUFjLENBQUMsaUJBQUQsQ0FGRyxDQUFyQixFIiwiZmlsZSI6InNyY19jbGllbnRfYm9vdHN0cmFwX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCcm93c2VyUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5pbXBvcnQgeyBoeWRyYXRlIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgbG9hZGFibGVSZWFkeSB9IGZyb20gJ0Bsb2FkYWJsZS9jb21wb25lbnQnXG5cbmltcG9ydCBBcHAgZnJvbSAnLi4vc2hhcmVkL2FwcCdcblxubG9hZGFibGVSZWFkeSgoKSA9PiB7XG4gICAgaHlkcmF0ZShcbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgICAgICA8QXBwLz5cbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPixcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuICAgIClcbn0pXG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtTd2l0Y2gsIFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcydcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICB7cm91dGVzKCkubWFwKChyb3V0ZSxpKSA9PiAoXG4gICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0PXtyb3V0ZS5leGFjdH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtyb3V0ZS5rZXkgfHwgaX1cbiAgICAgICAgICAgICAgICAgICAgcGF0aD17cm91dGUucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtyb3V0ZS5jb21wb25lbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1N3aXRjaD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBsb2FkYWJsZSBmcm9tICdAbG9hZGFibGUvY29tcG9uZW50J1xuXG5jb25zdCBIb21lID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiSG9tZVwiICovICcuL2hvbWUnKSlcbmNvbnN0IERlZGljYXRlZCA9IGxvYWRhYmxlKCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkRlZGljYXRlZFwiICovICcuL2RlZGljYXRlZCcpKVxuXG5cbmNvbnN0IGhvbWVSb3V0ZSA9IChwYXRoKSA9PiAoe1xuICAgIHBhdGgsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgY29tcG9uZW50OiBIb21lXG59KVxuXG5jb25zdCBkZWRpY2F0ZWRSb3V0ZSA9IChwYXRoKSA9PiAoe1xuICAgIHBhdGgsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgY29tcG9uZW50OiBEZWRpY2F0ZWRcbn0pXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IFtcbiAgICBob21lUm91dGUoJy8nKSxcbiAgICBkZWRpY2F0ZWRSb3V0ZSgnLzpwbGF5ZXIobWVzc2kpJylcbl0iXSwic291cmNlUm9vdCI6IiJ9