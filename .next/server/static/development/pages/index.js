module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/services/requests */ "./src/services/requests.js");
/* harmony import */ var _src_components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Logo */ "./src/components/Logo.jsx");
/* harmony import */ var _src_components_SubHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/SubHeader */ "./src/components/SubHeader.jsx");
/* harmony import */ var _src_components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Form */ "./src/components/Form.jsx");
/* harmony import */ var _src_components_ListVehicles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/ListVehicles */ "./src/components/ListVehicles.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Page({
  GetMakeCar,
  GetVehiclesPage1,
  GetVehiclesPage2,
  GetVehiclesPage3
}) {
  const {
    0: newVehicles,
    1: setNewVehicles
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: used,
    1: setUsed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: makeName,
    1: setMakeName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: modelName,
    1: setModelName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: modelId,
    1: setModelId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: model,
    1: setModel
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: versionId,
    1: setVersionId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: version,
    1: setVersion
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: versionSelected,
    1: setVersionSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: price,
    1: setPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: year,
    1: setYear
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: stateVehicles,
    1: setStateVehicles
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const allVehicles = [...GetVehiclesPage1, ...GetVehiclesPage2, ...GetVehiclesPage3];

  const readModel = async () => {
    const vehicleSelect = GetMakeCar.filter(vehicle => {
      return vehicle.ID == modelId;
    });
    const GetModelMake = await Object(_src_services_requests__WEBPACK_IMPORTED_MODULE_1__["ModelMake"])(modelId);
    setMakeName(vehicleSelect[0].Name);
    setModel(GetModelMake);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    readModel();
  }, [modelId]);

  const readVersion = async () => {
    let modelSelect = [];

    if (model) {
      modelSelect = model.filter(vehicle => {
        return vehicle.ID == versionId;
      });
    }

    const GetVersionModel = await Object(_src_services_requests__WEBPACK_IMPORTED_MODULE_1__["VersionModel"])(versionId);
    setModelName(modelSelect[0].Name);
    setVersion(GetVersionModel);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    readVersion();
  }, [versionId]);
  return __jsx("div", {
    className: "container"
  }, __jsx(_src_components_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_src_components_SubHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_src_components_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    newVehicles: newVehicles,
    used: used,
    GetMakeCar: GetMakeCar,
    model: model,
    version: version,
    price: price,
    allVehicles: allVehicles,
    makeName: makeName,
    modelName: modelName,
    year: year,
    versionSelected: versionSelected,
    setStateVehicles: setStateVehicles,
    setModelId: setModelId,
    setVersionId: setVersionId,
    setVersionSelected: setVersionSelected,
    setPrice: setPrice,
    setYear: setYear,
    setUsed: setUsed,
    setNewVehicles: setNewVehicles
  }), __jsx(_src_components_ListVehicles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    stateVehicles: stateVehicles
  }));
}

Page.getInitialProps = async () => {
  const GetMakeCar = await Object(_src_services_requests__WEBPACK_IMPORTED_MODULE_1__["MakeCar"])();
  const GetVehiclesPage1 = await Object(_src_services_requests__WEBPACK_IMPORTED_MODULE_1__["VehiclesPage1"])();
  const GetVehiclesPage2 = await Object(_src_services_requests__WEBPACK_IMPORTED_MODULE_1__["VehiclesPage2"])();
  const GetVehiclesPage3 = await Object(_src_services_requests__WEBPACK_IMPORTED_MODULE_1__["VehiclesPage3"])();
  return {
    GetMakeCar,
    GetVehiclesPage1,
    GetVehiclesPage2,
    GetVehiclesPage3
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/components/Form.jsx":
/*!*********************************!*\
  !*** ./src/components/Form.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Form({
  newVehicles,
  used,
  GetMakeCar,
  model,
  version,
  price,
  allVehicles,
  makeName,
  modelName,
  year,
  versionSelected,
  setStateVehicles,
  setModelId,
  setVersionId,
  setVersionSelected,
  setPrice,
  setYear,
  setUsed,
  setNewVehicles
}) {
  const valormaior = parseInt(price) + 19999;

  function searchVehicle() {
    let filtredVehicle = allVehicles;

    if (newVehicles) {
      filtredVehicle = allVehicles.filter(filtred => {
        return (makeName ? filtred.Make == makeName : []) && (modelName ? filtred.Model == modelName : []) && (year ? filtred.YearModel == year : []) && (versionSelected ? filtred.Version == versionSelected : []) && (price ? filtred.Price >= price : []) && (price ? parseInt(filtred.Price) <= valormaior : []) && filtred.KM == 0;
      });
    } else if (used) {
      filtredVehicle = allVehicles.filter(filtred => {
        return (makeName ? filtred.Make == makeName : []) && (modelName ? filtred.Model == modelName : []) && (year ? filtred.YearModel == year : []) && (versionSelected ? filtred.Version == versionSelected : []) && (price ? filtred.Price >= price : []) && (price ? parseInt(filtred.Price) <= valormaior : []) && filtred.KM != 0;
      });
    } else if (!newVehicles || !used) {
      filtredVehicle = allVehicles.filter(filtred => {
        return (makeName ? filtred.Make == makeName : []) && (modelName ? filtred.Model == modelName : []) && (year ? filtred.YearModel == year : []) && (versionSelected ? filtred.Version == versionSelected : []) && (price ? filtred.Price >= price : []) && (price ? parseInt(filtred.Price) <= valormaior : []);
      });
    }

    setStateVehicles(filtredVehicle);
  }

  return __jsx("form", null, __jsx("div", {
    className: "checkboxes"
  }, __jsx("div", {
    className: "checkboxes__box",
    onClick: () => {
      setNewVehicles(!newVehicles);
    }
  }, __jsx("input", {
    type: "checkbox",
    checked: newVehicles ? true : false
  }), __jsx("label", null, "Novos")), __jsx("div", {
    className: "checkboxes__box",
    onClick: () => {
      setUsed(!used);
    }
  }, __jsx("input", {
    type: "checkbox",
    checked: used ? true : false
  }), __jsx("label", null, "Usados"))), __jsx("div", {
    className: "inputs"
  }, __jsx("input", {
    className: "locale",
    name: "locale",
    placeholder: "Onde:"
  }), __jsx("select", {
    className: "distance",
    name: "distance"
  }, __jsx("option", null, "Raio:"), __jsx("option", null, "100Km"), __jsx("option", null, "200Km"), __jsx("option", null, "300Km")), __jsx("select", {
    className: "make",
    name: "make",
    onChange: e => {
      setModelId(e.target.value);
    }
  }, __jsx("option", null, "Marca: Todas"), GetMakeCar.map(make => {
    return __jsx("option", {
      value: make.ID,
      className: make.ID,
      key: make.ID
    }, make.Name);
  })), __jsx("select", {
    className: "model",
    name: "model",
    onChange: e => {
      setVersionId(e.target.value);
    }
  }, __jsx("option", null, "Modelo: Todas"), model && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, model.map(mode => {
    return __jsx("option", {
      value: mode.ID,
      key: mode.ID
    }, mode.Name);
  }))), __jsx("select", {
    className: "year",
    name: "year",
    onChange: e => {
      setYear(e.target.value);
    }
  }, __jsx("option", null, "Ano Desejado"), __jsx("option", {
    value: "2012"
  }, "2012"), __jsx("option", {
    value: "2013"
  }, "2013"), __jsx("option", {
    value: "2014"
  }, "2014"), __jsx("option", {
    value: "2015"
  }, "2015"), __jsx("option", {
    value: "2016"
  }, "2016"), __jsx("option", {
    value: "2017"
  }, "2017"), __jsx("option", {
    value: "2018"
  }, "2018"), __jsx("option", {
    value: "2019"
  }, "2019"), __jsx("option", {
    value: "2020"
  }, "2020")), __jsx("select", {
    className: "price",
    name: "price",
    onChange: e => {
      setPrice(e.target.value);
    }
  }, __jsx("option", null, "Faixa de Pre\xE7o"), __jsx("option", {
    value: "0"
  }, "De 0 \xE1 R$ 20.000"), __jsx("option", {
    value: "20000"
  }, "De R$ 20.000 \xE1 R$ 39.999"), __jsx("option", {
    value: "40000"
  }, "De R$ 40.000 \xE1 R$ 59.999"), __jsx("option", {
    value: "60000"
  }, "De R$ 60.000 \xE1 R$ 79.999"), __jsx("option", {
    value: "80000"
  }, "Mais de R$ 80.000")), __jsx("select", {
    className: "version",
    name: "version",
    onChange: e => {
      setVersionSelected(e.target.value);
    }
  }, __jsx("option", null, "Vers\xE3o: Todas"), version && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, version.map(versio => {
    return __jsx("option", {
      value: versio.Name,
      key: versio.ID
    }, versio.Name);
  })))), __jsx("div", {
    className: "buttons"
  }, __jsx("a", {
    className: "search-avanced"
  }, "> Busca Avan\xE7ada"), __jsx("div", null, __jsx("button", {
    className: "clear",
    onClick: e => {
      e.preventDefault();
      window.location.reload();
    }
  }, "Limpar Filtros"), __jsx("button", {
    className: "offers",
    onClick: e => {
      e.preventDefault();
      searchVehicle();
    }
  }, "Ver Ofertas"))));
}

/***/ }),

/***/ "./src/components/ListVehicles.jsx":
/*!*****************************************!*\
  !*** ./src/components/ListVehicles.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListVehicles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ListVehicles({
  stateVehicles
}) {
  return __jsx("div", {
    className: "boxes"
  }, stateVehicles.map(vehicle => {
    return __jsx("div", {
      className: "box"
    }, __jsx("div", {
      className: "cute-img"
    }, __jsx("img", {
      src: vehicle.Image
    })), __jsx("div", {
      className: "box__texts"
    }, __jsx("p", {
      className: "box__title"
    }, vehicle.Make, " ", vehicle.Model), __jsx("p", {
      className: "box_version"
    }, vehicle.Version), __jsx("p", {
      className: "box_price"
    }, " R$ ", vehicle.Price), __jsx("div", {
      className: "box_info"
    }, __jsx("p", null, vehicle.YearModel, "/ ", vehicle.YearFab), __jsx("p", null, vehicle.KM, " km"))));
  }));
}

/***/ }),

/***/ "./src/components/Logo.jsx":
/*!*********************************!*\
  !*** ./src/components/Logo.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Logo() {
  return __jsx("a", {
    href: "/"
  }, __jsx("img", {
    className: "logo",
    src: "/images/webmotors.svg",
    alt: "webmotors"
  }));
}

/***/ }),

/***/ "./src/components/SubHeader.jsx":
/*!**************************************!*\
  !*** ./src/components/SubHeader.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SubHeader() {
  return __jsx("div", {
    className: "sub-header"
  }, __jsx("div", {
    className: "options"
  }, __jsx("a", {
    className: "options__link selected"
  }, __jsx("img", {
    className: "icon",
    src: "/images/carro.svg",
    alt: "cars"
  }), __jsx("p", {
    className: "options__text"
  }, __jsx("small", null, "Comprar"), " Carros")), __jsx("a", {
    className: "options__link"
  }, __jsx("img", {
    className: "icon",
    src: "/images/motocicleta.svg",
    alt: "motocycle"
  }), __jsx("p", {
    className: "options__text"
  }, __jsx("small", null, "Comprar"), " Motos"))), __jsx("a", {
    className: "sale-car"
  }, "Vender meu carro"));
}

/***/ }),

/***/ "./src/helpers/fetch.js":
/*!******************************!*\
  !*** ./src/helpers/fetch.js ***!
  \******************************/
/*! exports provided: timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return timeout; });
function timeout(milliseconds, promise) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error("timeout"));
    }, milliseconds);
    promise.then(resolve, reject);
  });
}
;

/***/ }),

/***/ "./src/services/request.js":
/*!*********************************!*\
  !*** ./src/services/request.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/fetch */ "./src/helpers/fetch.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function request(uri, options = {}) {
  console.log(`Request on: ${uri}`);
  return Object(_helpers_fetch__WEBPACK_IMPORTED_MODULE_1__["timeout"])(options.timeout || 100000, isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(uri, _objectSpread({}, options, {
    headers: _objectSpread({}, options.headers)
  })).then(res => {
    if (!res.ok) throw res;
    return res;
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (request);

/***/ }),

/***/ "./src/services/requests.js":
/*!**********************************!*\
  !*** ./src/services/requests.js ***!
  \**********************************/
/*! exports provided: MakeCar, ModelMake, VersionModel, VehiclesPage1, VehiclesPage2, VehiclesPage3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeCar", function() { return MakeCar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelMake", function() { return ModelMake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionModel", function() { return VersionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesPage1", function() { return VehiclesPage1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesPage2", function() { return VehiclesPage2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesPage3", function() { return VehiclesPage3; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/services/request.js");

function MakeCar() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make`).then(res => res.json()).catch(err => {
    throw err;
  });
}
function ModelMake(MakeId) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${MakeId}`).then(res => res.json()).catch(err => {
    throw err;
  });
}
function VersionModel(MakeId) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${MakeId}`).then(res => res.json()).catch(err => {
    throw err;
  });
}
function VehiclesPage1() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1`).then(res => res.json()).catch(err => {
    throw err;
  });
}
function VehiclesPage2() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=2`).then(res => res.json()).catch(err => {
    throw err;
  });
}
function VehiclesPage3() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=3`).then(res => res.json()).catch(err => {
    throw err;
  });
}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Felipe Paulino\Documents\GitHub\Web-Motors\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map