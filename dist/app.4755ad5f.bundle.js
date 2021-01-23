/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Conditions.js":
/*!**************************************!*\
  !*** ./src/components/Conditions.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Conditions = props => {
  console.log(props);
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Conditions);

/***/ }),

/***/ "./src/components/DailyWeather.js":
/*!****************************************!*\
  !*** ./src/components/DailyWeather.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const DailyWeather = props => {
  console.log(props);
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (DailyWeather);

/***/ }),

/***/ "./src/components/HourlyWeather.js":
/*!*****************************************!*\
  !*** ./src/components/HourlyWeather.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const HourlyWeather = props => {
  console.log(props);
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (HourlyWeather);

/***/ }),

/***/ "./src/components/Location.js":
/*!************************************!*\
  !*** ./src/components/Location.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Location_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Location.scss */ "./src/components/styles/Location.scss");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);







const Location = ({
  location,
  weather
}) => {
  const postcode = location.postcode,
        state_code = location.state_code,
        town = location.town,
        country = location.country;
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentMeridian = hour >= 12 ? 'PM' : 'AM';
  const hr = hour > 12 ? hour - 12 : hour;
  const currentWeather = weather.current.weather[0].main;
  console.log(weather);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "location-address location-color",
      children: [town, ", ", state_code, " ", postcode]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "location-time location-color",
      children: [days[day], " ", hr || 12, ":00 ", currentMeridian]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "location-weather location-color",
      children: currentWeather
    })]
  });
};

Location.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    country: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    postcode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    state_code: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    town: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }),
  weather: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      weather: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
    })
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Location);

/***/ }),

/***/ "./src/components/Temperature.js":
/*!***************************************!*\
  !*** ./src/components/Temperature.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Temperature = props => {
  console.log(props);
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Temperature);

/***/ }),

/***/ "./src/components/WeatherIcon.js":
/*!***************************************!*\
  !*** ./src/components/WeatherIcon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



const WeatherIcon = ({
  type
}) => {
  // Didn't find documentation for possible types.
  const possibleWeathers = new Set(['clouds', 'clear', 'snow', 'rain']);
  let currentWeather = 'clear';

  if (possibleWeathers.has(type.toLowerCase())) {
    currentWeather = type.toLowerCase();
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
    src: `../assets/images/${currentWeather}`,
    alt: currentWeather
  });
};

WeatherIcon.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (WeatherIcon);

/***/ }),

/***/ "./src/components/WeatherWidget.js":
/*!*****************************************!*\
  !*** ./src/components/WeatherWidget.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_WeatherWidget_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/WeatherWidget.scss */ "./src/components/styles/WeatherWidget.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ */ "./src/components/index.js");







const WeatherWidget = ({
  location,
  weather
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
  className: "weather-widget",
  role: "region",
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(___WEBPACK_IMPORTED_MODULE_4__["Location"], {
    location: location,
    weather: weather
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(___WEBPACK_IMPORTED_MODULE_4__["WeatherIcon"], {
    type: weather.current.weather[0].main
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(___WEBPACK_IMPORTED_MODULE_4__["Temperature"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(___WEBPACK_IMPORTED_MODULE_4__["Conditions"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(___WEBPACK_IMPORTED_MODULE_4__["HourlyWeather"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(___WEBPACK_IMPORTED_MODULE_4__["DailyWeather"], {})]
});

WeatherWidget.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  weather: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      weather: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
    })
  })
};
/* harmony default export */ __webpack_exports__["default"] = (WeatherWidget);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: DailyWeather, HourlyWeather, Location, Conditions, Temperature, WeatherIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DailyWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DailyWeather */ "./src/components/DailyWeather.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DailyWeather", function() { return _DailyWeather__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _HourlyWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HourlyWeather */ "./src/components/HourlyWeather.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HourlyWeather", function() { return _HourlyWeather__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location */ "./src/components/Location.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return _Location__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Conditions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Conditions */ "./src/components/Conditions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Conditions", function() { return _Conditions__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Temperature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Temperature */ "./src/components/Temperature.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Temperature", function() { return _Temperature__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _WeatherIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WeatherIcon */ "./src/components/WeatherIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeatherIcon", function() { return _WeatherIcon__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./src/components/styles/Location.scss":
/*!*********************************************!*\
  !*** ./src/components/styles/Location.scss ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/styles/WeatherWidget.scss":
/*!**************************************************!*\
  !*** ./src/components/styles/WeatherWidget.scss ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/container/AppWrapper/AppWrapper.js":
/*!************************************************!*\
  !*** ./src/container/AppWrapper/AppWrapper.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_WeatherWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/WeatherWidget */ "./src/components/WeatherWidget.js");
/* harmony import */ var _services_geoLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/geoLocation */ "./src/services/geoLocation.js");
/* harmony import */ var _services_weather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/weather */ "./src/services/weather.js");







const AppWrapper = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
        _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
        currentCoordinates = _useState2[0],
        setCurrentCoordinates = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
        _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
        currentWeather = _useState4[0],
        setCurrentWeather = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
        _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
        currentLocation = _useState6[0],
        setCurrentLocation = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    Object(_services_geoLocation__WEBPACK_IMPORTED_MODULE_4__["getGeoLocation"])().then(location => ({
      lat: location.coords.latitude,
      long: location.coords.longitude
    })).then(location => setCurrentCoordinates(location));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (currentCoordinates) {
      Object(_services_geoLocation__WEBPACK_IMPORTED_MODULE_4__["geoCoding"])(currentCoordinates).then(location => {
        setCurrentLocation(location);
      });
    }
  }, [currentCoordinates]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (currentCoordinates) {
      Object(_services_weather__WEBPACK_IMPORTED_MODULE_5__["getCurrentWeather"])(currentCoordinates).then(weather => setCurrentWeather(weather));
    }
  }, [currentCoordinates]);

  if (!currentLocation || !currentWeather) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_WeatherWidget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    weather: currentWeather,
    location: currentLocation
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AppWrapper);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _container_AppWrapper_AppWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/AppWrapper/AppWrapper */ "./src/container/AppWrapper/AppWrapper.js");




/**
 * element in HTML document for React SPA
 * @type {ReactElement}
 */

const rootElement = document.getElementById('app');
/**
 * React SPA
 * @type {ReactElement}
 */

const rootComponent = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_container_AppWrapper_AppWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {});

Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])(rootComponent, rootElement);

/***/ }),

/***/ "./src/services/geoLocation.js":
/*!*************************************!*\
  !*** ./src/services/geoLocation.js ***!
  \*************************************/
/*! exports provided: getGeoLocation, geoCoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeoLocation", function() { return getGeoLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geoCoding", function() { return geoCoding; });
function getGeoLocation() {
  return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, {
    maximumAge: 60000,
    timeout: 5000,
    enableHighAccuracy: true
  }));
}
function geoCoding({
  lat,
  long
}) {
  if (!lat || !long) {
    return null;
  }

  const vendorURL = 'https://api.opencagedata.com/geocode/v1/json';
  const apiKey = '0264db5477fe4b1c9ee9ae23b3ec59e5';
  return fetch(`${vendorURL}?q=${lat},${long}&key=${apiKey}`).then(response => response.json()).then(({
    results: [result]
  }) => result.components);
}

/***/ }),

/***/ "./src/services/weather.js":
/*!*********************************!*\
  !*** ./src/services/weather.js ***!
  \*********************************/
/*! exports provided: getCurrentWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentWeather", function() { return getCurrentWeather; });
function getCurrentWeather({
  lat,
  long
}) {
  if (!lat || !long) {
    return null;
  }

  const vendorURL = 'https://api.openweathermap.org/data/2.5/onecall';
  const apiKey = '524589f12ff60e2a150e470595208862';
  return fetch(`${vendorURL}?lat=${lat}&lon=${long}&appid=${apiKey}`).then(response => response.json());
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vsharma/Desktop/delete/weather-app/src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=app.4755ad5f.bundle.js.map