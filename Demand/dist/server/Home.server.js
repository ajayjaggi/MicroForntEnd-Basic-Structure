exports.id = "Home";
exports.ids = ["Home"];
exports.modules = {

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
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


const Header = () => {
  console.log('inside header');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: "1em",
      margin: "1em",
      border: "1px solid black",
      backgroundColor: "#ccc"
    },
    onClick: () => {
      console.log("header click");
    }
  }, "Header from Demand");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/shared/home/index.js":
/*!**********************************!*\
  !*** ./src/shared/home/index.js ***!
  \**********************************/
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
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header */ "./src/components/header/index.js");


 // import './style.css'

const Home = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "container",
    to: "/messi"
  }, "Welcome to Home Page"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy8uL3NyYy9zaGFyZWQvaG9tZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJjb25zb2xlIiwibG9nIiwicGFkZGluZyIsIm1hcmdpbiIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsIkhvbWUiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDakJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQSxzQkFDSTtBQUNJLFNBQUssRUFBRTtBQUNIQyxhQUFPLEVBQUUsS0FETjtBQUVIQyxZQUFNLEVBQUUsS0FGTDtBQUdIQyxZQUFNLEVBQUUsaUJBSEw7QUFJSEMscUJBQWUsRUFBRTtBQUpkLEtBRFg7QUFPSSxXQUFPLEVBQUUsTUFBTTtBQUNYTCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0g7QUFUTCwwQkFESjtBQWVILENBakJEOztBQXFCQSxpRUFBZUYsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtDQUVBOztBQUVBLE1BQU1PLElBQUksR0FBS0MsS0FBRCxJQUFXO0FBQ3JCLHNCQUNJLHFGQUNJLDJEQUFDLHVEQUFELE9BREosZUFFSSwyREFBQyxrREFBRDtBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUE0QixNQUFFLEVBQUU7QUFBaEMsNEJBRkosQ0FESjtBQVNILENBVkQ7O0FBWUEsaUVBQWVELElBQWYsRSIsImZpbGUiOiJIb21lLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgaGVhZGVyJylcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxZW1cIixcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMWVtXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjY2NjXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVhZGVyIGNsaWNrXCIpXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICBIZWFkZXIgZnJvbSBEZW1hbmRcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuY29uc3QgSG9tZSA9ICAocHJvcHMpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHRvID0nL21lc3NpJz5cbiAgICAgICAgICAgICAgICBXZWxjb21lIHRvIEhvbWUgUGFnZVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=