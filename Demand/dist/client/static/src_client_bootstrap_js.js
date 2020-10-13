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
  console.log('inside loadable');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy8uL3NyYy9jbGllbnQvYm9vdHN0cmFwLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFzaWNzLy4vc3JjL3NoYXJlZC9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYXNpY3MvLi9zcmMvc2hhcmVkL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJsb2FkYWJsZVJlYWR5IiwiY29uc29sZSIsImxvZyIsImh5ZHJhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQXBwIiwicm91dGVzIiwibWFwIiwicm91dGUiLCJpIiwiZXhhY3QiLCJrZXkiLCJwYXRoIiwiY29tcG9uZW50IiwiSG9tZSIsImxvYWRhYmxlIiwiRGVkaWNhdGVkIiwiaG9tZVJvdXRlIiwiZGVkaWNhdGVkUm91dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBQSxrRUFBYSxDQUFDLE1BQU07QUFDaEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FDLG9EQUFPLGVBQ0gsMkRBQUMsMkRBQUQscUJBQ0ksMkRBQUMsZ0RBQUQsT0FESixDQURHLEVBSUhDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUpHLENBQVA7QUFNSCxDQVJZLENBQWIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsR0FBRyxHQUFHLE1BQU07QUFDZCxzQkFDSSwyREFBQyxvREFBRCxRQUNLQyxnREFBTSxHQUFHQyxHQUFULENBQWEsQ0FBQ0MsS0FBRCxFQUFPQyxDQUFQLGtCQUNWLDJEQUFDLG1EQUFEO0FBQ0ksU0FBSyxFQUFFRCxLQUFLLENBQUNFLEtBRGpCO0FBRUksT0FBRyxFQUFFRixLQUFLLENBQUNHLEdBQU4sSUFBYUYsQ0FGdEI7QUFHSSxRQUFJLEVBQUVELEtBQUssQ0FBQ0ksSUFIaEI7QUFJSSxhQUFTLEVBQUVKLEtBQUssQ0FBQ0s7QUFKckIsSUFESCxDQURMLENBREo7QUFZSCxDQWJEOztBQWVBLGlFQUFlUixHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUVBLE1BQU1TLElBQUksR0FBR0MsNERBQVE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUEsZUFBQyxNQUFNLG9KQUFQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsaUNBQUM7QUFBRDs7QUFBQTtBQUFBOztBQUFBLEVBQXJCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRCw0REFBUTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxlQUFDLE1BQU0sd0tBQVA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxpQ0FBQztBQUFEOztBQUFBO0FBQUE7O0FBQUEsRUFBMUI7O0FBR0EsTUFBTUUsU0FBUyxHQUFJTCxJQUFELEtBQVc7QUFDekJBLE1BRHlCO0FBRXpCRixPQUFLLEVBQUUsSUFGa0I7QUFHekJHLFdBQVMsRUFBRUM7QUFIYyxDQUFYLENBQWxCOztBQU1BLE1BQU1JLGNBQWMsR0FBSU4sSUFBRCxLQUFXO0FBQzlCQSxNQUQ4QjtBQUU5QkYsT0FBSyxFQUFFLElBRnVCO0FBRzlCRyxXQUFTLEVBQUVHO0FBSG1CLENBQVgsQ0FBdkI7O0FBTUEsaUVBQWUsTUFBTSxDQUNqQkMsU0FBUyxDQUFDLEdBQUQsQ0FEUSxFQUVqQkMsY0FBYyxDQUFDLGlCQUFELENBRkcsQ0FBckIsRSIsImZpbGUiOiJzcmNfY2xpZW50X2Jvb3RzdHJhcF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7QnJvd3NlclJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxuaW1wb3J0IHsgaHlkcmF0ZSB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IGxvYWRhYmxlUmVhZHkgfSBmcm9tICdAbG9hZGFibGUvY29tcG9uZW50J1xuXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NoYXJlZC9hcHAnXG5cbmxvYWRhYmxlUmVhZHkoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgbG9hZGFibGUnKVxuICAgIGh5ZHJhdGUoXG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgICAgPEFwcC8+XG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj4sXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbiAgICApXG59KVxuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7U3dpdGNoLCBSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAge3JvdXRlcygpLm1hcCgocm91dGUsaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICBleGFjdD17cm91dGUuZXhhY3R9XG4gICAgICAgICAgICAgICAgICAgIGtleT17cm91dGUua2V5IHx8IGl9XG4gICAgICAgICAgICAgICAgICAgIHBhdGg9e3JvdXRlLnBhdGh9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17cm91dGUuY29tcG9uZW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbG9hZGFibGUgZnJvbSAnQGxvYWRhYmxlL2NvbXBvbmVudCdcblxuY29uc3QgSG9tZSA9IGxvYWRhYmxlKCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkhvbWVcIiAqLyAnLi9ob21lJykpXG5jb25zdCBEZWRpY2F0ZWQgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJEZWRpY2F0ZWRcIiAqLyAnLi9kZWRpY2F0ZWQnKSlcblxuXG5jb25zdCBob21lUm91dGUgPSAocGF0aCkgPT4gKHtcbiAgICBwYXRoLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogSG9tZVxufSlcblxuY29uc3QgZGVkaWNhdGVkUm91dGUgPSAocGF0aCkgPT4gKHtcbiAgICBwYXRoLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIGNvbXBvbmVudDogRGVkaWNhdGVkXG59KVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBbXG4gICAgaG9tZVJvdXRlKCcvJyksXG4gICAgZGVkaWNhdGVkUm91dGUoJy86cGxheWVyKG1lc3NpKScpXG5dIl0sInNvdXJjZVJvb3QiOiIifQ==