exports.id = "Home";
exports.ids = ["Home"];
exports.modules = {

/***/ "./src/shared/home/index.js":
/*!**********************************!*\
  !*** ./src/shared/home/index.js ***!
  \**********************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

 // import './style.css'

const Home = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "container",
    to: "/messi"
  }, "Welcome to Home Page");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export BrowserRouter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export HashRouter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Link [provided] [no usage info] [missing usage info prevents renaming] */
/*! export MemoryRouter [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/react-router/esm/react-router.js .MemoryRouter */
/*! export NavLink [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Prompt [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/react-router/esm/react-router.js .Prompt */
/*! export Redirect [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/react-router/esm/react-router.js .Redirect */
/*! export Route [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/react-router/esm/react-router.js .Route */
/*! export Router [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/react-router/esm/react-router.js .Router */
/*! export StaticRouter [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/react-router/esm/react-router.js .StaticRouter */
/*! export Switch [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/react-router/esm/react-router.js .Switch */
/*! export __RouterContext [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/react-router/esm/react-router.js .__RouterContext */
/*! export generatePath [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/react-router/esm/react-router.js .generatePath */
/*! export matchPath [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/react-router/esm/react-router.js .matchPath */
/*! export withRouter [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/react-router/esm/react-router.js .withRouter */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.n, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryRouter": () => /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.MemoryRouter,
/* harmony export */   "Prompt": () => /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Prompt,
/* harmony export */   "Redirect": () => /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Redirect,
/* harmony export */   "Route": () => /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Route,
/* harmony export */   "Router": () => /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Router,
/* harmony export */   "StaticRouter": () => /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.StaticRouter,
/* harmony export */   "Switch": () => /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Switch,
/* harmony export */   "__RouterContext": () => /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.__RouterContext,
/* harmony export */   "generatePath": () => /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.generatePath,
/* harmony export */   "matchPath": () => /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchPath,
/* harmony export */   "withRouter": () => /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.withRouter,
/* harmony export */   "BrowserRouter": () => /* binding */ BrowserRouter,
/* harmony export */   "HashRouter": () => /* binding */ HashRouter,
/* harmony export */   "Link": () => /* binding */ Link,
/* harmony export */   "NavLink": () => /* binding */ NavLink
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__.default)(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_4__.createBrowserHistory)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (true) {
  BrowserRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    forceRefresh: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    keyLength: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
  };

  BrowserRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__.default)(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : 0;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__.default)(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_4__.createHashHistory)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (true) {
  HashRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    hashType: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__.default)(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : 0;
  };
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__.default)(Link, _React$Component);

  function Link() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Link.prototype;

  _proto.handleClick = function handleClick(event, history) {
    try {
      if (this.props.onClick) this.props.onClick(event);
    } catch (ex) {
      event.preventDefault();
      throw ex;
    }

    if (!event.defaultPrevented && // onClick prevented default
    event.button === 0 && ( // ignore everything but left clicks
    !this.props.target || this.props.target === "_self") && // let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
        event.preventDefault();
        var method = this.props.replace ? history.replace : history.push;
        method(this.props.to);
      }
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        innerRef = _this$props.innerRef,
        replace = _this$props.replace,
        to = _this$props.to,
        rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__.default)(_this$props, ["innerRef", "replace", "to"]); // eslint-disable-line no-unused-vars


    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.__RouterContext.Consumer, null, function (context) {
      !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__.default)(false, "You should not use <Link> outside a <Router>") : 0 : void 0;
      var location = typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_4__.createLocation)(to, null, null, context.location) : to;
      var href = location ? context.history.createHref(location) : "";
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.default)({}, rest, {
        onClick: function onClick(event) {
          return _this.handleClick(event, context.history);
        },
        href: href,
        ref: innerRef
      }));
    });
  };

  return Link;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (true) {
  var toType = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)]);
  var innerRefType = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    current: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any)
  })]);
  Link.propTypes = {
    innerRef: innerRefType,
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    replace: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    target: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    to: toType.isRequired
  };
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


function NavLink(_ref) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__.default)(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "strict", "style", "to"]);

  var path = typeof to === "object" ? to.pathname : to; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.__RouterContext.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__.default)(false, "You should not use <NavLink> outside a <Router>") : 0 : void 0;
    var pathToMatch = locationProp ? locationProp.pathname : context.location.pathname;
    var match = escapedPath ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.matchPath)(pathToMatch, {
      path: escapedPath,
      exact: exact,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, context.location) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.default)({}, styleProp, activeStyle) : styleProp;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.default)({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: to
    }, rest));
  });
}

if (true) {
  var ariaCurrentType = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["page", "step", "location", "date", "time", "true"]);
  NavLink.propTypes = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.default)({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    activeStyle: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    exact: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    isActive: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    strict: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    style: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  });
}




/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy8uL3NyYy9zaGFyZWQvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhc2ljcy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2VzbS9yZWFjdC1yb3V0ZXItZG9tLmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUtDLEtBQUQsSUFBVztBQUNyQixzQkFDSSxpREFBQyxrREFBRDtBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUE0QixNQUFFLEVBQUU7QUFBaEMsNEJBREo7QUFLSCxDQU5EOztBQVFBLGlFQUFlRCxJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JzRTtBQUM1QztBQUN3QztBQUNyQztBQUNxRDtBQUMvQztBQUNBO0FBQ3VCO0FBQzBDO0FBQzdEOztBQUV2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpRkFBYzs7QUFFaEI7QUFDQTs7QUFFQSx1RUFBdUUsYUFBYTtBQUNwRjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDZEQUFvQjtBQUN4QztBQUNBOztBQUVBOztBQUVBO0FBQ0EsV0FBVyxnREFBbUIsQ0FBQyxnREFBTTtBQUNyQztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLDRDQUFlOztBQUVqQixJQUFJLElBQXFDO0FBQ3pDO0FBQ0EsY0FBYywwREFBZ0I7QUFDOUIsY0FBYyx3REFBYztBQUM1QixrQkFBa0Isd0RBQWM7QUFDaEMseUJBQXlCLHdEQUFjO0FBQ3ZDLGVBQWUsMERBQWdCO0FBQy9COztBQUVBO0FBQ0EsSUFBSSxLQUFxQyxHQUFHLHFEQUFPLDRHQUE0RyxTQUFTLHNCQUFzQiwwQkFBMEIsT0FBTyxDQUFNO0FBQ3JPO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUZBQWM7O0FBRWhCO0FBQ0E7O0FBRUEsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwREFBaUI7QUFDckM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVcsZ0RBQW1CLENBQUMsZ0RBQU07QUFDckM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUMsQ0FBQyw0Q0FBZTs7QUFFakIsSUFBSSxJQUFxQztBQUN6QztBQUNBLGNBQWMsMERBQWdCO0FBQzlCLGNBQWMsd0RBQWM7QUFDNUIseUJBQXlCLHdEQUFjO0FBQ3ZDLGNBQWMsdURBQWU7QUFDN0I7O0FBRUE7QUFDQSxJQUFJLEtBQXFDLEdBQUcscURBQU8seUdBQXlHLFNBQVMsc0JBQXNCLHVCQUF1QixPQUFPLENBQU07QUFDL047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUZBQWM7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdHQUE2Qiw2Q0FBNkM7OztBQUd6RixXQUFXLGdEQUFtQixDQUFDLGtFQUF3QjtBQUN2RCxpQkFBaUIsS0FBcUMsR0FBRyx1REFBUywwREFBMEQsQ0FBZ0I7QUFDNUksOENBQThDLHVEQUFjO0FBQzVEO0FBQ0EsYUFBYSxnREFBbUIsTUFBTSwyRUFBUSxHQUFHO0FBQ2pEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDLENBQUMsNENBQWU7O0FBRWpCLElBQUksSUFBcUM7QUFDekMsZUFBZSwyREFBbUIsRUFBRSwwREFBZ0IsRUFBRSwwREFBZ0I7QUFDdEUscUJBQXFCLDJEQUFtQixFQUFFLDBEQUFnQixFQUFFLHdEQUFjLEVBQUUsdURBQWU7QUFDM0YsYUFBYSx1REFBYTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGFBQWEsd0RBQWM7QUFDM0IsYUFBYSx3REFBYztBQUMzQixZQUFZLDBEQUFnQjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMkUsYUFBYTtBQUN4RjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnR0FBNkI7O0FBRTFDLHVEQUF1RDs7QUFFdkQsdURBQXVEO0FBQ3ZELFNBQVMsZ0RBQW1CLENBQUMsa0VBQXdCO0FBQ3JELGVBQWUsS0FBcUMsR0FBRyx1REFBUyw2REFBNkQsQ0FBZ0I7QUFDN0k7QUFDQSw4QkFBOEIsdURBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwyQkFBMkIsMkVBQVEsR0FBRztBQUN0QyxXQUFXLGdEQUFtQixPQUFPLDJFQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDLHdCQUF3Qix1REFBZTtBQUN2QyxzQkFBc0IsMkVBQVEsR0FBRztBQUNqQztBQUNBLHFCQUFxQiwwREFBZ0I7QUFDckMsaUJBQWlCLDBEQUFnQjtBQUNqQyxlQUFlLDBEQUFnQjtBQUMvQixXQUFXLHdEQUFjO0FBQ3pCLGNBQWMsd0RBQWM7QUFDNUIsY0FBYywwREFBZ0I7QUFDOUIsWUFBWSx3REFBYztBQUMxQixXQUFXLDBEQUFnQjtBQUMzQixHQUFHO0FBQ0g7O0FBRW9EIiwiZmlsZSI6IkhvbWUuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmNvbnN0IEhvbWUgPSAgKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJjb250YWluZXJcIiB0byA9Jy9tZXNzaSc+XG4gICAgICAgICAgICBXZWxjb21lIHRvIEhvbWUgUGFnZVxuICAgICAgICA8L0xpbms+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgX19Sb3V0ZXJDb250ZXh0LCBtYXRjaFBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuZXhwb3J0ICogZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVIYXNoSGlzdG9yeSwgY3JlYXRlTG9jYXRpb24gfSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd0aW55LXdhcm5pbmcnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCc7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCB1c2VzIEhUTUw1IGhpc3RvcnkuXG4gKi9cblxudmFyIEJyb3dzZXJSb3V0ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQnJvd3NlclJvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQnJvd3NlclJvdXRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5oaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoX3RoaXMucHJvcHMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBCcm93c2VyUm91dGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgICAgaGlzdG9yeTogdGhpcy5oaXN0b3J5LFxuICAgICAgY2hpbGRyZW46IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQnJvd3NlclJvdXRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBCcm93c2VyUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgICBiYXNlbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgZm9yY2VSZWZyZXNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBrZXlMZW5ndGg6IFByb3BUeXBlcy5udW1iZXJcbiAgfTtcblxuICBCcm93c2VyUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPEJyb3dzZXJSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9YC5cIikgOiB2b2lkIDA7XG4gIH07XG59XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCB1c2VzIHdpbmRvdy5sb2NhdGlvbi5oYXNoLlxuICovXG5cbnZhciBIYXNoUm91dGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEhhc2hSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEhhc2hSb3V0ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuaGlzdG9yeSA9IGNyZWF0ZUhhc2hIaXN0b3J5KF90aGlzLnByb3BzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSGFzaFJvdXRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICAgIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEhhc2hSb3V0ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgSGFzaFJvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGdldFVzZXJDb25maXJtYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgIGhhc2hUeXBlOiBQcm9wVHlwZXMub25lT2YoW1wiaGFzaGJhbmdcIiwgXCJub3NsYXNoXCIsIFwic2xhc2hcIl0pXG4gIH07XG5cbiAgSGFzaFJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxIYXNoUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgSGFzaFJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpIDogdm9pZCAwO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcmVuZGVyaW5nIGEgaGlzdG9yeS1hd2FyZSA8YT4uXG4gKi9cblxuXG52YXIgTGluayA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShMaW5rLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBMaW5rKCkge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBMaW5rLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCwgaGlzdG9yeSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhyb3cgZXg7XG4gICAgfVxuXG4gICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkICYmIC8vIG9uQ2xpY2sgcHJldmVudGVkIGRlZmF1bHRcbiAgICBldmVudC5idXR0b24gPT09IDAgJiYgKCAvLyBpZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdCBjbGlja3NcbiAgICAhdGhpcy5wcm9wcy50YXJnZXQgfHwgdGhpcy5wcm9wcy50YXJnZXQgPT09IFwiX3NlbGZcIikgJiYgLy8gbGV0IGJyb3dzZXIgaGFuZGxlIFwidGFyZ2V0PV9ibGFua1wiIGV0Yy5cbiAgICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBpZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICAgICkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgbWV0aG9kID0gdGhpcy5wcm9wcy5yZXBsYWNlID8gaGlzdG9yeS5yZXBsYWNlIDogaGlzdG9yeS5wdXNoO1xuICAgICAgICBtZXRob2QodGhpcy5wcm9wcy50byk7XG4gICAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgcmVwbGFjZSA9IF90aGlzJHByb3BzLnJlcGxhY2UsXG4gICAgICAgIHRvID0gX3RoaXMkcHJvcHMudG8sXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiaW5uZXJSZWZcIiwgXCJyZXBsYWNlXCIsIFwidG9cIl0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9fUm91dGVyQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8TGluaz4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IGNyZWF0ZUxvY2F0aW9uKHRvLCBudWxsLCBudWxsLCBjb250ZXh0LmxvY2F0aW9uKSA6IHRvO1xuICAgICAgdmFyIGhyZWYgPSBsb2NhdGlvbiA/IGNvbnRleHQuaGlzdG9yeS5jcmVhdGVIcmVmKGxvY2F0aW9uKSA6IFwiXCI7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVDbGljayhldmVudCwgY29udGV4dC5oaXN0b3J5KTtcbiAgICAgICAgfSxcbiAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgcmVmOiBpbm5lclJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBMaW5rO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHZhciB0b1R5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSk7XG4gIHZhciBpbm5lclJlZlR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjdXJyZW50OiBQcm9wVHlwZXMuYW55XG4gIH0pXSk7XG4gIExpbmsucHJvcFR5cGVzID0ge1xuICAgIGlubmVyUmVmOiBpbm5lclJlZlR5cGUsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRvOiB0b1R5cGUuaXNSZXF1aXJlZFxuICB9O1xufVxuXG5mdW5jdGlvbiBqb2luQ2xhc3NuYW1lcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzbmFtZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgY2xhc3NuYW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc25hbWVzLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpO1xuICB9KS5qb2luKFwiIFwiKTtcbn1cbi8qKlxuICogQSA8TGluaz4gd3JhcHBlciB0aGF0IGtub3dzIGlmIGl0J3MgXCJhY3RpdmVcIiBvciBub3QuXG4gKi9cblxuXG5mdW5jdGlvbiBOYXZMaW5rKF9yZWYpIHtcbiAgdmFyIF9yZWYkYXJpYUN1cnJlbnQgPSBfcmVmW1wiYXJpYS1jdXJyZW50XCJdLFxuICAgICAgYXJpYUN1cnJlbnQgPSBfcmVmJGFyaWFDdXJyZW50ID09PSB2b2lkIDAgPyBcInBhZ2VcIiA6IF9yZWYkYXJpYUN1cnJlbnQsXG4gICAgICBfcmVmJGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3JlZiRhY3RpdmVDbGFzc05hbWUgPT09IHZvaWQgMCA/IFwiYWN0aXZlXCIgOiBfcmVmJGFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIGFjdGl2ZVN0eWxlID0gX3JlZi5hY3RpdmVTdHlsZSxcbiAgICAgIGNsYXNzTmFtZVByb3AgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGV4YWN0ID0gX3JlZi5leGFjdCxcbiAgICAgIGlzQWN0aXZlUHJvcCA9IF9yZWYuaXNBY3RpdmUsXG4gICAgICBsb2NhdGlvblByb3AgPSBfcmVmLmxvY2F0aW9uLFxuICAgICAgc3RyaWN0ID0gX3JlZi5zdHJpY3QsXG4gICAgICBzdHlsZVByb3AgPSBfcmVmLnN0eWxlLFxuICAgICAgdG8gPSBfcmVmLnRvLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImFyaWEtY3VycmVudFwiLCBcImFjdGl2ZUNsYXNzTmFtZVwiLCBcImFjdGl2ZVN0eWxlXCIsIFwiY2xhc3NOYW1lXCIsIFwiZXhhY3RcIiwgXCJpc0FjdGl2ZVwiLCBcImxvY2F0aW9uXCIsIFwic3RyaWN0XCIsIFwic3R5bGVcIiwgXCJ0b1wiXSk7XG5cbiAgdmFyIHBhdGggPSB0eXBlb2YgdG8gPT09IFwib2JqZWN0XCIgPyB0by5wYXRobmFtZSA6IHRvOyAvLyBSZWdleCB0YWtlbiBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAvYmxvYi9tYXN0ZXIvaW5kZXguanMjTDIwMlxuXG4gIHZhciBlc2NhcGVkUGF0aCA9IHBhdGggJiYgcGF0aC5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9fUm91dGVyQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAhY29udGV4dCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPE5hdkxpbms+IG91dHNpZGUgYSA8Um91dGVyPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgdmFyIHBhdGhUb01hdGNoID0gbG9jYXRpb25Qcm9wID8gbG9jYXRpb25Qcm9wLnBhdGhuYW1lIDogY29udGV4dC5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICB2YXIgbWF0Y2ggPSBlc2NhcGVkUGF0aCA/IG1hdGNoUGF0aChwYXRoVG9NYXRjaCwge1xuICAgICAgcGF0aDogZXNjYXBlZFBhdGgsXG4gICAgICBleGFjdDogZXhhY3QsXG4gICAgICBzdHJpY3Q6IHN0cmljdFxuICAgIH0pIDogbnVsbDtcbiAgICB2YXIgaXNBY3RpdmUgPSAhIShpc0FjdGl2ZVByb3AgPyBpc0FjdGl2ZVByb3AobWF0Y2gsIGNvbnRleHQubG9jYXRpb24pIDogbWF0Y2gpO1xuICAgIHZhciBjbGFzc05hbWUgPSBpc0FjdGl2ZSA/IGpvaW5DbGFzc25hbWVzKGNsYXNzTmFtZVByb3AsIGFjdGl2ZUNsYXNzTmFtZSkgOiBjbGFzc05hbWVQcm9wO1xuICAgIHZhciBzdHlsZSA9IGlzQWN0aXZlID8gX2V4dGVuZHMoe30sIHN0eWxlUHJvcCwgYWN0aXZlU3R5bGUpIDogc3R5bGVQcm9wO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIF9leHRlbmRzKHtcbiAgICAgIFwiYXJpYS1jdXJyZW50XCI6IGlzQWN0aXZlICYmIGFyaWFDdXJyZW50IHx8IG51bGwsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgIHRvOiB0b1xuICAgIH0sIHJlc3QpKTtcbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgdmFyIGFyaWFDdXJyZW50VHlwZSA9IFByb3BUeXBlcy5vbmVPZihbXCJwYWdlXCIsIFwic3RlcFwiLCBcImxvY2F0aW9uXCIsIFwiZGF0ZVwiLCBcInRpbWVcIiwgXCJ0cnVlXCJdKTtcbiAgTmF2TGluay5wcm9wVHlwZXMgPSBfZXh0ZW5kcyh7fSwgTGluay5wcm9wVHlwZXMsIHtcbiAgICBcImFyaWEtY3VycmVudFwiOiBhcmlhQ3VycmVudFR5cGUsXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleGFjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNBY3RpdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0cmljdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RcbiAgfSk7XG59XG5cbmV4cG9ydCB7IEJyb3dzZXJSb3V0ZXIsIEhhc2hSb3V0ZXIsIExpbmssIE5hdkxpbmsgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=