webpackJsonp([0],{

/***/ "+/tp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ssr support
const inBrowser = typeof window !== 'undefined'
/* harmony export (immutable) */ __webpack_exports__["a"] = inBrowser;

const ua = inBrowser && navigator.userAgent.toLowerCase()
/* unused harmony export ua */

const isWeChatDevTools = ua && /wechatdevtools/.test(ua)
/* harmony export (immutable) */ __webpack_exports__["c"] = isWeChatDevTools;

const isAndroid = ua && ua.indexOf('android') > 0
/* harmony export (immutable) */ __webpack_exports__["b"] = isAndroid;



/***/ }),

/***/ "+C+F":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var commonLoader = exports.commonLoader = function commonLoader(descriptions) {
  return descriptions;
};

var transformOriginMap = {};
var cacheTransformOriginLoader = exports.cacheTransformOriginLoader = function cacheTransformOriginLoader(descriptions, styles, id) {
  var returnDescriptions = descriptions;

  var transformOrigin = descriptions.transformOrigin;
  if (!transformOriginMap[id]) {
    transformOriginMap[id] = {};
  }

  if (transformOrigin) {
    transformOriginMap[id].transformOrigin = transformOrigin;
  }

  returnDescriptions.transformOrigin = transformOriginMap[id].transformOrigin;
  return returnDescriptions;
};

/***/ }),

/***/ "+Yku":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-popup",
    {
      staticClass: " cml-base cml-c-popup",
      attrs: { show: _vm.show, mask: _vm.mask }
    },
    [
      _c(
        "div",
        { staticClass: "toast-content  cml-base cml-view", attrs: {} },
        [
          _vm.needIcon
            ? _c("img", {
                staticClass: "toast-icon  cml-base cml-image",
                attrs: { src: _vm.typeImg }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "toast-text  cml-base cml-text", attrs: {} },
            [_vm._v(_vm._s(_vm.message))]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9ae83672", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "+gIU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_scroll_event__ = __webpack_require__("fpcZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_scroll_init__ = __webpack_require__("Z5Xs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_scroll_core__ = __webpack_require__("4bam");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_scroll_pulldown__ = __webpack_require__("j8uF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_scroll_pullup__ = __webpack_require__("Lwr/");






function CScroll(el, options) {
  this.wrapper = typeof el === 'string' ? document.querySelector(el) : el
  if (!this.wrapper) {
    warn('Can not resolve the wrapper DOM.')
  }
  this.scroller = this.wrapper.children[0]
  if (!this.scroller) {
    warn('The wrapper need at least one child element to be scroller.')
  }
  // cache style for better performance
  this.scrollerStyle = this.scroller.style

  this._init(el, options)
}

Object(__WEBPACK_IMPORTED_MODULE_1__src_scroll_init__["a" /* initMixin */])(CScroll)
Object(__WEBPACK_IMPORTED_MODULE_2__src_scroll_core__["a" /* coreMixin */])(CScroll)
Object(__WEBPACK_IMPORTED_MODULE_0__src_scroll_event__["a" /* eventMixin */])(CScroll)
Object(__WEBPACK_IMPORTED_MODULE_3__src_scroll_pulldown__["a" /* pullDownMixin */])(CScroll)
Object(__WEBPACK_IMPORTED_MODULE_4__src_scroll_pullup__["a" /* pullUpMixin */])(CScroll)


/* harmony default export */ __webpack_exports__["default"] = (CScroll);

/***/ }),

/***/ "+loL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("7B77");
var step = __webpack_require__("qcjd");
var Iterators = __webpack_require__("7unY");
var toIObject = __webpack_require__("dkPk");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("aPys")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "+yJo":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "/+/s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__("+/tp");


const DEFAULT_INTERVAL = 100 / 60

function noop() {
}

const requestAnimationFrame = (() => {
  if (!__WEBPACK_IMPORTED_MODULE_0__env__["a" /* inBrowser */]) {
    /* istanbul ignore if */
    return noop
  }
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    // if all else fails, use setTimeout
    function (callback) {
      return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2) // make interval as precise as possible.
    }
})()
/* harmony export (immutable) */ __webpack_exports__["b"] = requestAnimationFrame;


const cancelAnimationFrame = (() => {
  if (!__WEBPACK_IMPORTED_MODULE_0__env__["a" /* inBrowser */]) {
    /* istanbul ignore if */
    return noop
  }
  return window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.oCancelAnimationFrame ||
    function (id) {
      window.clearTimeout(id)
    }
})()
/* harmony export (immutable) */ __webpack_exports__["a"] = cancelAnimationFrame;


/***/ }),

/***/ "/1q5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__ = __webpack_require__("KNRy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c4981c2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__ = __webpack_require__("OYiq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("VC+R")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6c4981c2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c4981c2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c4981c2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_checkbox_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/chameleon-ui-builtin/components/checkbox/checkbox.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c4981c2", Component.options)
  } else {
    hotAPI.reload("data-v-6c4981c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "/F8r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__ = __webpack_require__("rouJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_9ae83672_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__ = __webpack_require__("+Yku");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("d/ib")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9ae83672"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_9ae83672_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_9ae83672_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-toast/c-toast.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9ae83672", Component.options)
  } else {
    hotAPI.reload("data-v-9ae83672", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "/VIj":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("StTd");
var isObject = __webpack_require__("OuXD");
var newPromiseCapability = __webpack_require__("bjfn");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "/YlL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/close_49a1751.png";

/***/ }),

/***/ "/b3d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml__ = __webpack_require__("saZo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_74469485_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml__ = __webpack_require__("p8En");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("IbWM")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-74469485"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_74469485_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_74469485_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_page_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/chameleon-ui-builtin/components/page/page.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74469485", Component.options)
  } else {
    hotAPI.reload("data-v-74469485", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "09Zy":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _common = __webpack_require__("Go0R");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'getWidth',
    value: function getWidth() {
      var _getViewportSize = (0, _common.getViewportSize)(),
          viewportWidth = _getViewportSize.viewportWidth;

      return viewportWidth;
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "0JVX":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+loL");
var global = __webpack_require__("tRKg");
var hide = __webpack_require__("SMww");
var Iterators = __webpack_require__("7unY");
var TO_STRING_TAG = __webpack_require__("hTSS")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "0Sf2":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _cTabItem = __webpack_require__("GTrZ");

var _cTabItem2 = _interopRequireDefault(_cTabItem);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CTabs = function CTabs() {
  (0, _classCallCheck3.default)(this, CTabs);
  this.props = {
    tabs: { //label labelStyle prefixIcon  suffixIcon
      type: Array,
      default: function _default() {
        return [];
      }
    },
    activeLabel: {
      type: String
    },
    //标识item子项的排列方向,默认横向排列
    inline: {
      type: Boolean,
      default: true
    },
    lineStyle: {
      type: String,
      default: ''
    },
    hasUnderline: {
      type: Boolean,
      default: true
    },
    activeLabelStyle: {
      // 这个在微信中可以
      type: String,
      default: "color:#FC9153;"
    },
    activeIconStyle: {
      // 这个在微信中可以
      type: String,
      default: ""
    }

  };
  this.data = {};
  this.computed = {
    tabLineStyle: function tabLineStyle() {
      var _this = this;

      if (!this.tabs.length) {
        return '';
      }
      var width = 750 / this.tabs.length; //line的总宽度；
      var foundIndex = this.tabs.findIndex(function (item, index, arr) {
        return _this.activeLabel === item.label;
      });
      var leftIndex = foundIndex == -1 ? 0 : foundIndex;

      var leftOffset = leftIndex * width;
      var style = ";width:" + width + "cpx;transform: translateX(" + leftOffset + "cpx);";
      return this.lineStyle + style;
    }
  };
  this.methods = {
    handleTabTap: function handleTabTap(e) {
      var label = e.detail.label;
      var activeIndex = this.tabs.findIndex(function (item) {
        return item.label === label;
      });

      this.$cmlEmit('tabclick', { label: label, activeIndex: activeIndex });
    }
  };
}; //
//
//
//
//
//
//
//
//
//
//

exports.default = new CTabs();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cTabItem: _cTabItem2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "0nXP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml__ = __webpack_require__("PVp0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_34bbd792_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml__ = __webpack_require__("keTG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("8FAV")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-34bbd792"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_34bbd792_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_34bbd792_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/COMP/c-radio-group/c-radio-group.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34bbd792", Component.options)
  } else {
    hotAPI.reload("data-v-34bbd792", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "1+/X":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPage = createPage;

var _index = __webpack_require__("lKwg");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPage(options) {
  return _index2.default.createPage(options);
}

/***/ }),

/***/ "17lI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml__ = __webpack_require__("LEQK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5747888b_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml__ = __webpack_require__("2991");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("iPwf")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5747888b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5747888b_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5747888b_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-picker/c-picker.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5747888b", Component.options)
  } else {
    hotAPI.reload("data-v-5747888b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "1HDH":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _index = __webpack_require__("h696");

var _index2 = __webpack_require__("1+/X");

var _index3 = __webpack_require__("HTWf");

var _index4 = __webpack_require__("axut");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({
  createApp: _index.createApp,
  createPage: _index2.createPage,
  createComponent: _index3.createComponent
}, _index5.default);

/***/ }),

/***/ "1IZ9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__ = __webpack_require__("f7pY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_31930a2b_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__ = __webpack_require__("hZ03");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("BIDT")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-31930a2b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_31930a2b_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_31930a2b_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_toast_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/COMP/c-toast/c-toast.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-31930a2b", Component.options)
  } else {
    hotAPI.reload("data-v-31930a2b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "1NSh":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _index = __webpack_require__("EYO0");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("VnQQ");

var _index4 = _interopRequireDefault(_index3);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("/b3d");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _scrollerWeb = __webpack_require__("nOyz");

var _scrollerWeb2 = _interopRequireDefault(_scrollerWeb);

var _routerConfig = __webpack_require__("oJVY");

var _routerConfig2 = _interopRequireDefault(_routerConfig);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _routerConfig2.default.routes; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var routeObj = {};
routes.forEach(function (route) {
  routeObj[route['name']] = route;
});

var Demo = function () {
  function Demo() {
    (0, _classCallCheck3.default)(this, Demo);
    this.data = {
      comList: [
      // {
      //   id: "view",
      //   name: "布局容器",
      //   open: false,
      //   pages: [
      //   ],
      //   src: require(`../../assets/images/component/kind/view.png`)
      // },
      {
        cid: "content",
        name: "基础内容",
        open: false,
        pages: [routeObj["c-toast"], routeObj["c-dialog"], routeObj["c-popup"], routeObj["c-tip"], routeObj["c-actionsheet"],
        // routeObj['c-tab'],
        routeObj["c-refresh"], routeObj["c-loading"]],
        src: __webpack_require__("8UP1")
      }, {
        cid: "form",
        name: "表单组件",
        open: false,
        pages: [routeObj["c-picker"], routeObj["c-picker-panel"], routeObj["c-picker-item"], routeObj["c-checkbox-group"], routeObj["c-radio-group"]],
        src: __webpack_require__("9fjd")
      }, {
        cid: "nav",
        name: "导航",
        open: false,
        pages: [routeObj["c-tab"]],
        src: __webpack_require__("BqFM")
      }],
      apiList: [{
        cid: "page",
        name: "界面",
        open: false,
        pages: [routeObj["cml.modal"], routeObj["cml.toast"]],
        src: __webpack_require__("83Hb")
      }],
      comLogoSrc: __webpack_require__("XYVL"),
      apiLogoSrc: __webpack_require__("8HQr"),
      tabList: [{
        title: "组件",
        selected: true,
        iconPath: __webpack_require__("bdpq"),
        selectedIconPath: __webpack_require__("hocU")
      }, {
        title: "接口",
        selected: false,
        iconPath: __webpack_require__("l9fT"),
        selectedIconPath: __webpack_require__("GZYD")
      }],
      activeTab: "component",
      arrowIcon: "https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png"
    };
    this.computed = {
      scrollerStyl: function scrollerStyl() {
        return this.winHeight ? "height: " + this.winHeight + "cpx;" : '';
      },
      computedStyle: function computedStyle() {
        var transVal = this.activeTab === "api" ? "-750" : "0";
        var styl = "transform: translateX(" + transVal + "cpx)";

        return styl;
      },
      bodyComputedStyl: function bodyComputedStyl() {
        var styl = "";

        // if (isWeex()) {
        //   styl = "top: 88cpx;";
        // }

        return styl;
      }
    };
    this.watch = {};
    this.methods = {
      kindToggle: function kindToggle(e) {
        var id = e.currentTarget.id;
        var list = this.activeTab === "component" ? this.comList : this.apiList;

        for (var i = 0, len = list.length; i < len; ++i) {
          if (list[i].cid == id) {
            list[i].open = !list[i].open;
          } else {
            list[i].open = false;
          }
        }
      },
      tabItemClick: function tabItemClick(e) {
        var tar = e.currentTarget;
        var dataset = tar.dataset;
        var index = parseInt(dataset.index);

        this.tabList[index].selected = true;
        this.tabList[(index + 1) % 2].selected = false;

        this.activeTab = index == 0 ? "component" : "api";

        // let transVal = this.activeTab === 'api' ? '-750' : '0'

        // if (isWeex() && animation && this.$refs['index-content-wrap']) {
        //   modal.toast({
        //     'message': `translateX(${transVal}cpx)`,
        //     'duration': 1
        //   });

        //   animation.transition(this.$refs['index-content-wrap'], {
        //     styles: {
        //       transform: `translateX(${transVal}cpx)`
        //     }
        //   }, () => {
        //     modal.toast({
        //       message: 'transition end'
        //     })
        //   });
        // }
      },
      routeTo: function routeTo(e) {
        var tar = e.currentTarget;
        var dataset = tar.dataset;
        var url = dataset.routeurl;
        var path = dataset.routepath;
        (0, _index4.default)({
          path: path
        });
      }
    };
  }

  (0, _createClass3.default)(Demo, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {
      var _this = this;

      (0, _index2.default)().then(function (info) {
        _this.winHeight = info.viewportHeight;
      });
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return Demo;
}();

exports.default = new Demo();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cmlBuildinPage: _pageWeb2.default, cmlBuildinScroller: _scrollerWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "1iTB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("Qz3K"), __esModule: true };

/***/ }),

/***/ "1mQb":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var provins = exports.provins = ["北京市", "天津市", "河北省", "山西省", "内蒙古", "辽宁省", "吉林省", "黑龙江省", "上海市", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西", "海南省", "重庆市", "四川省", "贵州省", "云南省", "西藏", "陕西省", "甘肃省", "青海", "宁夏", "新疆"];

/***/ }),

/***/ "1vfO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml__ = __webpack_require__("HpYw");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8fa75e62_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml__ = __webpack_require__("aVEu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("6i9T")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8fa75e62"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8fa75e62_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_8fa75e62_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/COMP/c-checkbox-group/c-checkbox-group.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8fa75e62", Component.options)
  } else {
    hotAPI.reload("data-v-8fa75e62", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "1yVu":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _web = __webpack_require__("en+i");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 定义模块的interface
var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'createApp',
    value: function createApp(options) {
      return new _web.App(options);
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "28ED":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "cml-btn  cml-base cml-view",
      style: _vm._cmlStyleProxy(_vm.mrBtnStyle, {
        rem: true,
        scale: 0.5,
        remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
        autoprefixOptions: {
          browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
          grid: false
        }
      }),
      attrs: { "data-evt-click": "" },
      on: {
        click: _vm.$stopOuterA,
        cml$tap: function($event) {
          $event.stopPropagation()
          _vm._cmlEventProxy($event, "onclick")
        }
      }
    },
    [
      _c(
        "span",
        {
          staticClass: "btn-text  cml-base cml-text",
          style: _vm._cmlStyleProxy(_vm.mrTextStyle, {
            rem: true,
            scale: 0.5,
            remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
            autoprefixOptions: {
              browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
              grid: false
            }
          }),
          attrs: {}
        },
        [_vm._v(_vm._s(_vm.text))]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-98542db6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "2991":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: " cml-base cml-view", attrs: { show: _vm.show } },
    [
      _c(
        "c-picker-panel",
        {
          staticClass: " cml-base cml-c-picker-panel",
          attrs: {
            show: _vm.show,
            height: _vm.height,
            "header-height": _vm.headerHeight,
            "cancel-btn-style": _vm.cancelBtnStyle,
            "confirm-btn-style": _vm.confirmBtnStyle,
            "data-evt-cancel": "",
            "data-evt-confirm": ""
          },
          on: {
            cancel: function($event) {
              _vm._cmlEventProxy($event, "cancel")
            },
            confirm: function($event) {
              _vm._cmlEventProxy($event, "confirm")
            }
          }
        },
        [
          _c("c-picker-item", {
            staticClass: " cml-base cml-c-picker-item",
            attrs: {
              "text-align": _vm.textAlign,
              height: _vm.dataScrollerHeight,
              data: _vm.data,
              "default-index": _vm.defaultIndex,
              "data-evt-selectchange": ""
            },
            on: {
              selectchange: function($event) {
                _vm._cmlEventProxy($event, "selectchange")
              }
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5747888b", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "2Jju":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "2dk6":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = request;

var _index = __webpack_require__("LOYP");

var moduleName = 'stream';
var methodName = 'fetch';

function request(params) {
  var url = params.url,
      headers = params.headers,
      body = params.body,
      method = params.method,
      cb = params.cb;


  var args = {
    url: url,
    method: method,
    headers: headers,
    type: 'text'

    // get不传body，for ios sdk
  };if (method.toLocaleLowerCase() != 'get') {
    args.body = body;
  }

  (0, _index.callNative)(moduleName, methodName, args, function (res) {
    /**
     * errno
     * data:
     *  status
     *  statusText
     *  data
     *  headers
     */
    var errno = res.errno,
        _res$data = res.data,
        data = _res$data === undefined ? '' : _res$data;

    if (errno == 0) {
      cb(data);
    }
  });
}

request.prototype.moduleName = moduleName;
request.prototype.methodName = methodName;

/***/ }),

/***/ "2m7E":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("/b3d");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _cHeader = __webpack_require__("h1kM");

var _cHeader2 = _interopRequireDefault(_cHeader);

var _cPickerItemWeb = __webpack_require__("5zlU");

var _cPickerItemWeb2 = _interopRequireDefault(_cPickerItemWeb);

var _data = __webpack_require__("Inpg");

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//

var CPickerItem = function () {
  function CPickerItem() {
    (0, _classCallCheck3.default)(this, CPickerItem);
    this.data = {
      provins: _data.provins,
      defaultIndex: 0,
      provinsIndex: 0
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      selectchange: function selectchange(e) {
        this.provinsIndex = this.defaultIndex = e.detail.index;
      }
    };
  }

  (0, _createClass3.default)(CPickerItem, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return CPickerItem;
}();

exports.default = new CPickerItem();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cHeader: _cHeader2.default, cPickerItem: _cPickerItemWeb2.default, cmlBuildinPage: _pageWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "2qtJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("HJFi"), __esModule: true };

/***/ }),

/***/ "35um":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("SMww");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "3MLk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3T2w":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _call = __webpack_require__("xjA6");

var _listen = __webpack_require__("ttS0");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'initChannel',
    value: function initChannel() {
      (0, _listen.init)();
    }
  }, {
    key: 'callNative',
    value: function callNative(module, method, args, callback) {
      _call.call.apply(undefined, ['invokeNativeMethod'].concat(Array.prototype.slice.call(arguments)));
    }
  }, {
    key: 'listenNative',
    value: function listenNative(module, method, callback) {
      _listen.listen.apply(undefined, arguments);
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "3USK":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("tRKg");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "3h3k":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("5FFm");
var $keys = __webpack_require__("YKc4");

__webpack_require__("WcAg")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "3hlP":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("bD0u");
__webpack_require__("WmdX");
__webpack_require__("Gfn8");
__webpack_require__("aSex");
module.exports = __webpack_require__("OzFA").Symbol;


/***/ }),

/***/ "46z+":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// options transform 基类
var BaseOptionsTransformer = function () {
  function BaseOptionsTransformer(config) {
    (0, _classCallCheck3.default)(this, BaseOptionsTransformer);

    this.type = config.type;
    this.options = config.options;
    this.injectMixins = config.injectMixins || [];
    this.builtinMixins = config.builtinMixins;
    this.hooks = config.hooks;
    this.hooksMap = config.hooksMap;
    this.platform = '';
  }

  (0, _createClass3.default)(BaseOptionsTransformer, [{
    key: 'getOptions',
    value: function getOptions() {
      return this.options;
    }
  }]);
  return BaseOptionsTransformer;
}();

exports.default = BaseOptionsTransformer;

/***/ }),

/***/ "49u2":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("w1p+");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "4Qds":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("SRKA");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

var _env = __webpack_require__("8d/N");

var _ua = __webpack_require__("R0Nl");

var _common = __webpack_require__("Ud/e");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'getSystemInfo',
    value: function getSystemInfo(cb) {
      var os = (0, _ua.isIos)() ? 'ios' : 'android';

      var _getViewportSize = (0, _common.getViewportSize)(),
          viewportWidth = _getViewportSize.viewportWidth,
          viewportHeight = _getViewportSize.viewportHeight;

      if ((0, _env.inSDK)()) {
        _cmlBridge2.default.getSystemInfo({}, function (res) {
          var errno = res.errno,
              data = res.data;

          if (errno == 0) {
            var _os = data.os,
                _viewportWidth = data.viewportWidth,
                _viewportHeight = data.viewportHeight,
                _extraParams = data.extraParams,
                extra = (0, _objectWithoutProperties3.default)(data, ['os', 'viewportWidth', 'viewportHeight', 'extraParams']);

            cb({
              os: _os,
              env: 'web',
              viewportWidth: _viewportWidth,
              viewportHeight: _viewportHeight,
              extraParams: (0, _extends3.default)({}, _extraParams, extra)
            });
          }
        });
      } else {
        cb({
          os: os,
          env: 'web',
          viewportWidth: viewportWidth,
          viewportHeight: viewportHeight,
          extraParams: {}
        });
      }
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "4XrH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("picker", {
    staticClass: " cml-base cml-picker",
    attrs: {
      data: _vm.data,
      "text-align": _vm.textAlign,
      "wraper-style": _vm.wraperStyle,
      "default-index": _vm.defaultIndex,
      "data-evt-selectchange": ""
    },
    on: { selectchange: _vm.weexSelectChange }
  })
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2db20583", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "4Ypl":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__("EK/L");

exports.default = {
  methods: {
    $stopOuterA: function $stopOuterA(e) {
      if (e && e.preventDefault && e.target) {
        if ((0, _component.insideA)(e.target)) {
          e.preventDefault();
        }
      }
    },
    $stopPropagation: function $stopPropagation(e) {
      if (e && e.stopPropagation) {
        e.stopPropagation();
      }
    }
  }
};

/***/ }),

/***/ "4bam":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = coreMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_dom__ = __webpack_require__("9Cgj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_ease__ = __webpack_require__("Rwfi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_momentum__ = __webpack_require__("SQbs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_raf__ = __webpack_require__("/+/s");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_lang__ = __webpack_require__("FkXn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_const__ = __webpack_require__("B3mp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_env__ = __webpack_require__("+/tp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_debug__ = __webpack_require__("axW8");









function coreMixin(CScroll) {
  CScroll.prototype._start = function (e) {
    let _eventType = __WEBPACK_IMPORTED_MODULE_0__util_dom__["e" /* eventType */][e.type]
    if (_eventType !== __WEBPACK_IMPORTED_MODULE_0__util_dom__["a" /* TOUCH_EVENT */]) {
      if (e.button !== 0) {
        return
      }
    }
    if (this.destroyed || (this.initiated && this.initiated !== _eventType)) {
      return
    }
    this.initiated = _eventType

    if (this.options.preventDefault && !Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["l" /* preventDefaultException */])(e.target, this.options.preventDefaultException)) {
      e.preventDefault()
    }
    if (this.options.stopPropagation) {
      e.stopPropagation()
    }

    this.moved = false
    this.distX = 0
    this.distY = 0
    this.directionX = 0
    this.directionY = 0
    this.movingDirectionX = 0
    this.movingDirectionY = 0
    this.directionLocked = 0

    this._transitionTime()
    this.startTime = Object(__WEBPACK_IMPORTED_MODULE_4__util_lang__["b" /* getNow */])()

    this.stop()

    let point = e.touches ? e.touches[0] : e

    this.startX = this.x
    this.startY = this.y
    this.absStartX = this.x
    this.absStartY = this.y
    this.pointX = point.pageX
    this.pointY = point.pageY

    this.trigger('beforeScrollStart')
  }

  CScroll.prototype._move = function (e) {
    if (this.destroyed || __WEBPACK_IMPORTED_MODULE_0__util_dom__["e" /* eventType */][e.type] !== this.initiated) {
      return
    }
    
    if (this.options.preventDefault) {
      e.preventDefault()
    }
    if (this.options.stopPropagation) {
      e.stopPropagation()
    }

    let point = e.touches ? e.touches[0] : e
    let deltaX = point.pageX - this.pointX
    let deltaY = point.pageY - this.pointY

    this.pointX = point.pageX
    this.pointY = point.pageY

    this.distX += deltaX
    this.distY += deltaY

    let absDistX = Math.abs(this.distX)
    let absDistY = Math.abs(this.distY)

    let timestamp = Object(__WEBPACK_IMPORTED_MODULE_4__util_lang__["b" /* getNow */])()

    // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
    if (timestamp - this.endTime > this.options.momentumLimitTime && (absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance)) {
      return
    }

    // If you are scrolling in one direction lock the other
    if (!this.directionLocked) {
      if (absDistX > absDistY + this.options.directionLockThreshold) {
        this.directionLocked = 'h' // lock horizontally
      } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
        this.directionLocked = 'v' // lock vertically
      } else {
        this.directionLocked = 'n' // no lock
      }
    }

    if (this.directionLocked === 'h') {
      if (this.options.eventPassthrough === 'vertical') {
        e.preventDefault()
      } else if (this.options.eventPassthrough === 'horizontal') {
        this.initiated = false
        return
      }
      deltaY = 0
    } else if (this.directionLocked === 'v') {
      if (this.options.eventPassthrough === 'horizontal') {
        e.preventDefault()
      } else if (this.options.eventPassthrough === 'vertical') {
        this.initiated = false
        return
      }
      deltaX = 0
    }

    deltaX = this.hasHorizontalScroll ? deltaX : 0
    deltaY = this.hasVerticalScroll ? deltaY : 0
    this.movingDirectionX = deltaX > 0 ? __WEBPACK_IMPORTED_MODULE_5__util_const__["c" /* DIRECTION_RIGHT */] : deltaX < 0 ? __WEBPACK_IMPORTED_MODULE_5__util_const__["b" /* DIRECTION_LEFT */] : 0
    this.movingDirectionY = deltaY > 0 ? __WEBPACK_IMPORTED_MODULE_5__util_const__["a" /* DIRECTION_DOWN */] : deltaY < 0 ? __WEBPACK_IMPORTED_MODULE_5__util_const__["d" /* DIRECTION_UP */] : 0

    let newX = this.x + deltaX
    let newY = this.y + deltaY

    let top = false
    let bottom = false
    let left = false
    let right = false
    // Slow down or stop if outside of the boundaries
    const bounce = this.options.bounce
    if (bounce !== false) {
      top = bounce.top === undefined ? true : bounce.top
      bottom = bounce.bottom === undefined ? true : bounce.bottom
      left = bounce.left === undefined ? true : bounce.left
      right = bounce.right === undefined ? true : bounce.right
    }
    if (newX > this.minScrollX || newX < this.maxScrollX) {
      if ((newX > this.minScrollX && left) || (newX < this.maxScrollX && right)) {
        newX = this.x + deltaX / 3
      } else {
        newX = newX > this.minScrollX ? this.minScrollX : this.maxScrollX
      }
    }
    if (newY > this.minScrollY || newY < this.maxScrollY) {
      if ((newY > this.minScrollY && top) || (newY < this.maxScrollY && bottom)) {
        newY = this.y + deltaY / 3
      } else {
        newY = newY > this.minScrollY ? this.minScrollY : this.maxScrollY
      }
    }

    if (!this.moved) {
      this.moved = true
      this.trigger('scrollStart')
    }

    this._translate(newX, newY)

    if (timestamp - this.startTime > this.options.momentumLimitTime) {
      this.startTime = timestamp
      this.startX = this.x
      this.startY = this.y

      if (this.options.probeType === __WEBPACK_IMPORTED_MODULE_5__util_const__["e" /* PROBE_DEBOUNCE */]) {
        this.trigger('scroll', {
          x: this.x,
          y: this.y
        })
      }
    }

    if (this.options.probeType > __WEBPACK_IMPORTED_MODULE_5__util_const__["e" /* PROBE_DEBOUNCE */]) {
      this.trigger('scroll', {
        x: this.x,
        y: this.y
      })
    }

    let scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop

    let pX = this.pointX - scrollLeft
    let pY = this.pointY - scrollTop

    if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance
    ) {
      this._end(e)
    }
  }

  CScroll.prototype._end = function (e) {
    if (this.destroyed || __WEBPACK_IMPORTED_MODULE_0__util_dom__["e" /* eventType */][e.type] !== this.initiated) {
      return
    }
    this.initiated = false

    if (this.options.preventDefault && !Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["l" /* preventDefaultException */])(e.target, this.options.preventDefaultException)) {
      e.preventDefault()
    }
    if (this.options.stopPropagation) {
      e.stopPropagation()
    }

    this.trigger('touchEnd', {
      x: this.x,
      y: this.y
    })

    this.isInTransition = false

    // ensures that the last position is rounded
    let newX = Math.round(this.x)
    let newY = Math.round(this.y)

    let deltaX = newX - this.absStartX
    let deltaY = newY - this.absStartY
    this.directionX = deltaX > 0 ? __WEBPACK_IMPORTED_MODULE_5__util_const__["c" /* DIRECTION_RIGHT */] : deltaX < 0 ? __WEBPACK_IMPORTED_MODULE_5__util_const__["b" /* DIRECTION_LEFT */] : 0
    this.directionY = deltaY > 0 ? __WEBPACK_IMPORTED_MODULE_5__util_const__["a" /* DIRECTION_DOWN */] : deltaY < 0 ? __WEBPACK_IMPORTED_MODULE_5__util_const__["d" /* DIRECTION_UP */] : 0

    // if configure pull down refresh, check it first
    if (this.options.pullDownRefresh && this._checkPullDown()) {
      return
    }

    // check if it is a click operation
    if (this._checkClick(e)) {
      this.trigger('scrollCancel')
      return
    }

    // reset if we are outside of the boundaries
    if (this.resetPosition(this.options.bounceTime, __WEBPACK_IMPORTED_MODULE_1__util_ease__["a" /* ease */].bounce)) {
      return
    }

    this._translate(newX, newY)

    this.endTime = Object(__WEBPACK_IMPORTED_MODULE_4__util_lang__["b" /* getNow */])()
    let duration = this.endTime - this.startTime
    let absDistX = Math.abs(newX - this.startX)
    let absDistY = Math.abs(newY - this.startY)

    let time = 0
    // start momentum animation if needed
    if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
      let top = false
      let bottom = false
      let left = false
      let right = false
      const bounce = this.options.bounce
      if (bounce !== false) {
        top = bounce.top === undefined ? true : bounce.top
        bottom = bounce.bottom === undefined ? true : bounce.bottom
        left = bounce.left === undefined ? true : bounce.left
        right = bounce.right === undefined ? true : bounce.right
      }
      const wrapperWidth = ((this.directionX === __WEBPACK_IMPORTED_MODULE_5__util_const__["c" /* DIRECTION_RIGHT */] && left) || (this.directionX === __WEBPACK_IMPORTED_MODULE_5__util_const__["b" /* DIRECTION_LEFT */] && right)) ? this.wrapperWidth : 0
      const wrapperHeight = ((this.directionY === __WEBPACK_IMPORTED_MODULE_5__util_const__["a" /* DIRECTION_DOWN */] && top) || (this.directionY === __WEBPACK_IMPORTED_MODULE_5__util_const__["d" /* DIRECTION_UP */] && bottom)) ? this.wrapperHeight : 0
      let momentumX = this.hasHorizontalScroll ? Object(__WEBPACK_IMPORTED_MODULE_2__util_momentum__["a" /* momentum */])(this.x, this.startX, duration, this.maxScrollX, this.minScrollX, wrapperWidth, this.options)
        : {destination: newX, duration: 0}
      let momentumY = this.hasVerticalScroll ? Object(__WEBPACK_IMPORTED_MODULE_2__util_momentum__["a" /* momentum */])(this.y, this.startY, duration, this.maxScrollY, this.minScrollY, wrapperHeight, this.options)
        : {destination: newY, duration: 0}
      newX = momentumX.destination
      newY = momentumY.destination
      time = Math.max(momentumX.duration, momentumY.duration)
      this.isInTransition = true
    }

    let easing = __WEBPACK_IMPORTED_MODULE_1__util_ease__["a" /* ease */].swipe

    if (newX !== this.x || newY !== this.y) {
      // change easing function when scroller goes out of the boundaries
      if (newX > this.minScrollX || newX < this.maxScrollX || newY > this.minScrollY || newY < this.maxScrollY) {
        easing = __WEBPACK_IMPORTED_MODULE_1__util_ease__["a" /* ease */].swipeBounce
      }
      this.scrollTo(newX, newY, time, easing)
      return
    }

    this.trigger('scrollEnd', {
      x: this.x,
      y: this.y
    })
  }

  CScroll.prototype._checkClick = function (e) {
    // when in the process of pulling down, it should not prevent click
    let preventClick = this.stopFromTransition && !this.pulling
    this.stopFromTransition = false

    // we scrolled less than 15 pixels
    if (!this.moved) {
      if (!preventClick) {
        const _dblclick = this.options.dblclick
        let dblclickTrigged = false
        if (_dblclick && this.lastClickTime) {
          const {delay = 300} = _dblclick
          if (Object(__WEBPACK_IMPORTED_MODULE_4__util_lang__["b" /* getNow */])() - this.lastClickTime < delay) {
            dblclickTrigged = true
            Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["d" /* dblclick */])(e)
          }
        }
        if (this.options.tap) {
          Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["o" /* tap */])(e, this.options.tap)
        }

        if (this.options.click && !Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["l" /* preventDefaultException */])(e.target, this.options.preventDefaultException)) {
          Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["c" /* click */])(e)
        }
        this.lastClickTime = dblclickTrigged ? null : Object(__WEBPACK_IMPORTED_MODULE_4__util_lang__["b" /* getNow */])()
        return true
      }
      return false
    }
    return false
  }

  CScroll.prototype._resize = function () {
    // fix a scroll problem under Android condition
    if (__WEBPACK_IMPORTED_MODULE_6__util_env__["b" /* isAndroid */]) {
      this.wrapper.scrollTop = 0
    }
    clearTimeout(this.resizeTimeout)
    this.resizeTimeout = setTimeout(() => {
      this.refresh()
    }, this.options.resizePolling)
  }

  CScroll.prototype._startProbe = function () {
    Object(__WEBPACK_IMPORTED_MODULE_3__util_raf__["a" /* cancelAnimationFrame */])(this.probeTimer)
    this.probeTimer = Object(__WEBPACK_IMPORTED_MODULE_3__util_raf__["b" /* requestAnimationFrame */])(probe)

    let me = this

    function probe() {
      let pos = me.getComputedPosition()
      me.trigger('scroll', pos)
      if (!me.isInTransition) {
        me.trigger('scrollEnd', pos)
        return
      }
      me.probeTimer = Object(__WEBPACK_IMPORTED_MODULE_3__util_raf__["b" /* requestAnimationFrame */])(probe)
    }
  }

  CScroll.prototype._transitionTime = function (time = 0) {
    this.scrollerStyle[__WEBPACK_IMPORTED_MODULE_0__util_dom__["n" /* style */].transitionDuration] = time + 'ms'
  }

  CScroll.prototype._transitionTimingFunction = function (easing) {
    this.scrollerStyle[__WEBPACK_IMPORTED_MODULE_0__util_dom__["n" /* style */].transitionTimingFunction] = easing
  }

  CScroll.prototype._transitionEnd = function (e) {
    if (e.target !== this.scroller || !this.isInTransition) {
      return
    }

    this._transitionTime()
    const needReset = !this.pulling || this.movingDirectionY === __WEBPACK_IMPORTED_MODULE_5__util_const__["d" /* DIRECTION_UP */]
    if (needReset && !this.resetPosition(this.options.bounceTime, __WEBPACK_IMPORTED_MODULE_1__util_ease__["a" /* ease */].bounce)) {
      this.isInTransition = false
      if (this.options.probeType !== __WEBPACK_IMPORTED_MODULE_5__util_const__["f" /* PROBE_REALTIME */]) {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        })
      }
    }
  }

  CScroll.prototype._translate = function (x, y) {
    Object(__WEBPACK_IMPORTED_MODULE_7__util_debug__["a" /* assert */])(!Object(__WEBPACK_IMPORTED_MODULE_4__util_lang__["c" /* isUndef */])(x) && !Object(__WEBPACK_IMPORTED_MODULE_4__util_lang__["c" /* isUndef */])(y), 'Translate x or y is null or undefined.')
    
    this.scrollerStyle[__WEBPACK_IMPORTED_MODULE_0__util_dom__["n" /* style */].transform] = `translate(${x}px,${y}px) scale(1)${this.translateZ}`

    this.x = x
    this.y = y
  }

  CScroll.prototype.scrollTo = function (x, y, time = 0, easing = __WEBPACK_IMPORTED_MODULE_1__util_ease__["a" /* ease */].bounce) {
    this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y)

    this._transitionTimingFunction(easing.style)
    this._transitionTime(time)
    this._translate(x, y)

    if (time && this.options.probeType === __WEBPACK_IMPORTED_MODULE_5__util_const__["f" /* PROBE_REALTIME */]) {
      this._startProbe()
    }

    if (!time && (x !== this.x || y !== this.y)) {
      this.trigger('scroll', {
        x,
        y
      })
      // force reflow to put everything in position
      this._reflow = document.body.offsetHeight
      if (!this.resetPosition(this.options.bounceTime, __WEBPACK_IMPORTED_MODULE_1__util_ease__["a" /* ease */].bounce)) {
        this.trigger('scrollEnd', {
          x,
          y
        })
      }
    }
  }

  CScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
    if (!el) {
      return
    }
    el = el.nodeType ? el : this.scroller.querySelector(el)

    let pos = Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["k" /* offset */])(el)
    pos.left -= this.wrapperOffset.left
    pos.top -= this.wrapperOffset.top

    // if offsetX/Y are true we center the element to the screen
    if (offsetX === true) {
      offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2)
    }
    if (offsetY === true) {
      offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2)
    }

    pos.left -= offsetX || 0
    pos.top -= offsetY || 0
    pos.left = pos.left > this.minScrollX ? this.minScrollX : pos.left < this.maxScrollX ? this.maxScrollX : pos.left
    pos.top = pos.top > this.minScrollY ? this.minScrollY : pos.top < this.maxScrollY ? this.maxScrollY : pos.top

    this.scrollTo(pos.left, pos.top, time, easing)
  }

  CScroll.prototype.resetPosition = function (time = 0, easeing = __WEBPACK_IMPORTED_MODULE_1__util_ease__["a" /* ease */].bounce) {
    let x = this.x
    let roundX = Math.round(x)
    if (!this.hasHorizontalScroll || roundX > this.minScrollX) {
      x = this.minScrollX
    } else if (roundX < this.maxScrollX) {
      x = this.maxScrollX
    }

    let y = this.y
    let roundY = Math.round(y)
    if (!this.hasVerticalScroll || roundY > this.minScrollY) {
      y = this.minScrollY
    } else if (roundY < this.maxScrollY) {
      y = this.maxScrollY
    }

    if (x === this.x && y === this.y) {
      return false
    }

    this.scrollTo(x, y, time, easeing)

    return true
  }

  CScroll.prototype.getComputedPosition = function () {
    let matrix = window.getComputedStyle(this.scroller, null)
    let x
    let y

    matrix = matrix[__WEBPACK_IMPORTED_MODULE_0__util_dom__["n" /* style */].transform].split(')')[0].split(', ')
    x = +(matrix[12] || matrix[4])
    y = +(matrix[13] || matrix[5])
    
    return {
      x,
      y
    }
  }

  CScroll.prototype.stop = function () {
    if (this.isInTransition) {
      this.isInTransition = false
      Object(__WEBPACK_IMPORTED_MODULE_3__util_raf__["a" /* cancelAnimationFrame */])(this.probeTimer)
      let pos = this.getComputedPosition()
      this._translate(pos.x, pos.y)
      this.trigger('scrollEnd', {
        x: this.x,
        y: this.y
      })
      this.stopFromTransition = true
    }
  }

  CScroll.prototype.destroy = function () {
    this.destroyed = true
    this.trigger('destroy')
    Object(__WEBPACK_IMPORTED_MODULE_3__util_raf__["a" /* cancelAnimationFrame */])(this.probeTimer)
    this._removeDOMEvents()
    // remove custom events
    this._events = {}
  }
}


/***/ }),

/***/ "4cvf":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4f6o":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inSDK = inSDK;
function inSDK() {
  var query = this.getQueryObjSync();
  return !!query.cml_sdk;
}

/***/ }),

/***/ "5BVc":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("WQ1V");
module.exports = __webpack_require__("OzFA").Object.getPrototypeOf;


/***/ }),

/***/ "5FFm":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("SQnF");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5LYv":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _pageWeb = __webpack_require__("/b3d");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _cHeader = __webpack_require__("h1kM");

var _cHeader2 = _interopRequireDefault(_cHeader);

var _cTab = __webpack_require__("c/0z");

var _cTab2 = _interopRequireDefault(_cTab);

var _cTabPane = __webpack_require__("6RdL");

var _cTabPane2 = _interopRequireDefault(_cTabPane);

var _cTabPaneItem = __webpack_require__("yLmy");

var _cTabPaneItem2 = _interopRequireDefault(_cTabPaneItem);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***
 * prefixStyle  suffixStyle 可以用来放置图标
*/
var CTab = function CTab() {
  (0, _classCallCheck3.default)(this, CTab);
  this.data = {
    headerTitle: 'c-tabs',
    headerDesc: 'c-tabs',
    tabsAlone: [{
      label: 'label11'
      // prefixStyle:"width:50cpx;height:20cpx;background-color:red;",
    }, {
      label: "label22"
      // suffixStyle:"width:50cpx;height:20cpx;background-color:red;"
    }, {
      label: 'label33'
    }],
    activeLabelAlone: 'label33',
    tabs: [{
      label: 'label1'
      // prefixStyle:"width:50cpx;height:20cpx;background-color:red"
    }, {
      label: "label2"
      // suffixStyle:"width:50cpx;height:20cpx;background-color:red"
    }, {
      label: 'label3'
      // labelStyle:"color:green"

    }],
    activeLabel: 'label3'
  };
  this.methods = {
    handleTabTap: function handleTabTap(e) {
      console.log(e);
      this.activeLabel = e.detail.label;
    },
    handleTabTapAlone: function handleTabTapAlone(e) {
      this.activeLabelAlone = e.detail.label;
    }
  };
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new CTab();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cHeader: _cHeader2.default, cTab: _cTab2.default, cTabPane: _cTabPane2.default, cTabPaneItem: _cTabPaneItem2.default, cmlBuildinPage: _pageWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "5Pfz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml__ = __webpack_require__("NmJD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_463fc893_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml__ = __webpack_require__("kTiR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("Zz8K")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-463fc893"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_463fc893_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_463fc893_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/COMP/c-tip/c-tip.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-463fc893", Component.options)
  } else {
    hotAPI.reload("data-v-463fc893", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "5zlU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_web_cml__ = __webpack_require__("6Exo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2db20583_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_web_cml__ = __webpack_require__("4XrH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("9kiM")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2db20583"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2db20583_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2db20583_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-picker-item/c-picker-item.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2db20583", Component.options)
  } else {
    hotAPI.reload("data-v-2db20583", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "62nc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/warn_da3ad45.png";

/***/ }),

/***/ "6ApJ":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var INDEX_CHANGE_NAME = exports.INDEX_CHANGE_NAME = 'INDEX_CHANGE_NAME';

/***/ }),

/***/ "6CMR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml__ = __webpack_require__("Zn8U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7888cc6a_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml__ = __webpack_require__("ObkB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("KvdW")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7888cc6a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7888cc6a_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7888cc6a_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-dialog/c-dialog.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7888cc6a", Component.options)
  } else {
    hotAPI.reload("data-v-7888cc6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "6E5I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("ON4Y"), __esModule: true };

/***/ }),

/***/ "6Exo":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _picker = __webpack_require__("zCSa");

var _picker2 = _interopRequireDefault(_picker);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CPickerItem = function () {
  function CPickerItem() {
    (0, _classCallCheck3.default)(this, CPickerItem);
    this.props = {
      data: {
        type: Array,
        default: ['']
      },
      defaultIndex: {
        type: Number,
        default: 0
      },
      height: {
        type: Number,
        default: 400
      },
      textAlign: {
        type: String,
        default: "center"
      }
    };
    this.data = {};
    this.computed = {
      wraperStyle: function wraperStyle() {
        var style = "height: " + this.height + "cpx";
        return style;
      }
    };
    this.watch = {};
    this.methods = {
      weexSelectChange: function weexSelectChange(e) {
        this.$cmlEmit("selectchange", {
          index: e.detail.index
        });
      }
    };
  }

  (0, _createClass3.default)(CPickerItem, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return CPickerItem;
}(); //
//
//
//
//

exports.default = new CPickerItem();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { picker: _picker2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "6RdL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_cml__ = __webpack_require__("YEVJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_b17bd8ea_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_cml__ = __webpack_require__("S6Er");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("QXSA")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b17bd8ea"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_b17bd8ea_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_b17bd8ea_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-tab-pane/c-tab-pane.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b17bd8ea", Component.options)
  } else {
    hotAPI.reload("data-v-b17bd8ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "6WKK":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var CRefresh = function () {
  function CRefresh() {
    (0, _classCallCheck3.default)(this, CRefresh);
    this.props = {
      display: {
        type: Boolean,
        default: false
      },
      // top上拉刷新，bottom下拉刷新
      direction: {
        type: String,
        default: 'top'
      },
      // 是否通过插槽自定义ui
      customUi: {
        type: Boolean,
        default: false
      }
    };
    this.computed = {
      triggerClass: function triggerClass() {
        if (this.display) return 'after-trigger';
        return 'before-trigger';
      }
    };
    this.watch = {
      display: function display(val) {
        if (!val) {
          this.refreshing = val;
          this.beforeRefreshing = true;
          this.showBeforeRefreshing = false;
          this.isRebounding = true;
          this.$parent.finishPull();
        }
      },
      refreshing: function refreshing(val) {
        if (val) {
          this.$cmlEmit('refresh', {
            value: true
          });
          this.$cmlEmit('refreshevent', {
            value: true
          });
        }
      }
    };
    this.data = {
      refreshing: false,
      beforeRefreshing: true,
      showBeforeRefreshing: false,
      icon: __webpack_require__("FFCV"),
      isRebounding: false
    };
    this.methods = {
      pullingDown: function pullingDown() {
        this.refreshing = true;
        this.beforeRefreshing = false;
      },
      pullingUp: function pullingUp() {
        this.refreshing = true;
        this.beforeRefreshing = true;
        this.showBeforeRefreshing = true;
      },
      toggleBeforeRefreshing: function toggleBeforeRefreshing(offsetY) {
        var _this = this;

        if (this.beforeRefreshing && offsetY > 10) {
          this.showBeforeRefreshing = true;
          // 防止未触发pulldown事件
          var timer = setTimeout(function () {
            _this.showBeforeRefreshing = false;
            clearTimeout(timer);
          }, 6000);
        }

        if (this.isRebounding) {
          this.showBeforeRefreshing = false;
        }
      }
    };
  }

  (0, _createClass3.default)(CRefresh, [{
    key: 'mounted',
    value: function mounted() {
      if (this.direction === 'top') {
        this.$parent._refresh = this;
      } else {
        this.$parent._loading = this;
      }
    }
  }]);
  return CRefresh;
}();

exports.default = new CRefresh();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "6i9T":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6mrG":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//


var Toast = function () {
        function Toast() {
                (0, _classCallCheck3.default)(this, Toast);
                this.data = {};
                this.computed = {};
                this.watch = {};
                this.methods = {};
        }

        (0, _createClass3.default)(Toast, [{
                key: 'beforeCreate',
                value: function beforeCreate() {}
        }, {
                key: 'created',
                value: function created() {}
        }, {
                key: 'beforeMount',
                value: function beforeMount() {}
        }, {
                key: 'mounted',
                value: function mounted() {}
        }, {
                key: 'beforeDestroy',
                value: function beforeDestroy() {}
        }, {
                key: 'destroyed',
                value: function destroyed() {}
        }]);
        return Toast;
}();

exports.default = new Toast();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "7B77":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "7Mo0":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("nWd7");
module.exports = __webpack_require__("OzFA").Object.assign;


/***/ }),

/***/ "7WrD":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("AiQY");
var hiddenKeys = __webpack_require__("pI9x").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "7ksP":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("YKc4");
var gOPS = __webpack_require__("SCZj");
var pIE = __webpack_require__("PGoE");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "7q9P":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//


var Modal = function () {
        function Modal() {
                (0, _classCallCheck3.default)(this, Modal);
                this.data = {};
                this.computed = {};
                this.watch = {};
                this.methods = {};
        }

        (0, _createClass3.default)(Modal, [{
                key: 'beforeCreate',
                value: function beforeCreate() {}
        }, {
                key: 'created',
                value: function created() {}
        }, {
                key: 'beforeMount',
                value: function beforeMount() {}
        }, {
                key: 'mounted',
                value: function mounted() {}
        }, {
                key: 'beforeDestroy',
                value: function beforeDestroy() {}
        }, {
                key: 'destroyed',
                value: function destroyed() {}
        }]);
        return Modal;
}();

exports.default = new Modal();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "7s0b":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("df4s");
var $Object = __webpack_require__("OzFA").Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),

/***/ "7unY":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "7vtH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/succ_1ecca56.png";

/***/ }),

/***/ "81UF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("RjZH"), __esModule: true };

/***/ }),

/***/ "83Hb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/page_7e6c522.png";

/***/ }),

/***/ "86qO":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("/b3d");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _cHeader = __webpack_require__("h1kM");

var _cHeader2 = _interopRequireDefault(_cHeader);

var _cPickerPanelWeb = __webpack_require__("LAdT");

var _cPickerPanelWeb2 = _interopRequireDefault(_cPickerPanelWeb);

var _cPickerItemWeb = __webpack_require__("5zlU");

var _cPickerItemWeb2 = _interopRequireDefault(_cPickerItemWeb);

var _data = __webpack_require__("1mQb");

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CPickerPanel = function () {
  function CPickerPanel() {
    (0, _classCallCheck3.default)(this, CPickerPanel);
    this.data = {
      provins: _data.provins,
      defaultIndex: 0,
      provinsIndex: 0,
      panelShow: false
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      selectchange: function selectchange(e) {
        this.provinsIndex = this.defaultIndex = e.detail.index;
      },
      showClick: function showClick() {
        this.panelShow = true;
      },
      cancel: function cancel() {
        this.panelShow = false;
      },
      confirm: function confirm() {
        this.panelShow = false;
      }
    };
  }

  (0, _createClass3.default)(CPickerPanel, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return CPickerPanel;
}(); //
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new CPickerPanel();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cHeader: _cHeader2.default, cPickerPanel: _cPickerPanelWeb2.default, cPickerItem: _cPickerItemWeb2.default, cmlBuildinPage: _pageWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "8ALk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("CzbJ"), __esModule: true };

/***/ }),

/***/ "8D69":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonBridge = __webpack_require__("oMZh");

var _chameleonBridge2 = _interopRequireDefault(_chameleonBridge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _chameleonBridge2.default;

/***/ }),

/***/ "8FAV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8HQr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo_0d40a73.png";

/***/ }),

/***/ "8NBu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8UP1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/content_615612b.png";

/***/ }),

/***/ "8W/S":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reload = reload;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml'; /**
                         * 重新加载weex页面
                         */

var methodName = 'reloadPage';

function reload() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /**
   * url
   */
  (0, _index.callNative)(moduleName, methodName, param, function () {});
}

reload.prototype.moduleName = moduleName;
reload.prototype.methodName = methodName;

/***/ }),

/***/ "8d/N":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inSDK = inSDK;

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 判断是在ChameleonSDK中
 * @returns {boolean}
 */
function inSDK() {
  return _cmlBridge2.default.inSDK();
}

/***/ }),

/***/ "9Cgj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = addEvent;
/* harmony export (immutable) */ __webpack_exports__["m"] = removeEvent;
/* harmony export (immutable) */ __webpack_exports__["k"] = offset;
/* unused harmony export offsetToBody */
/* harmony export (immutable) */ __webpack_exports__["f"] = getRect;
/* harmony export (immutable) */ __webpack_exports__["l"] = preventDefaultException;
/* harmony export (immutable) */ __webpack_exports__["o"] = tap;
/* harmony export (immutable) */ __webpack_exports__["c"] = click;
/* harmony export (immutable) */ __webpack_exports__["d"] = dblclick;
/* unused harmony export prepend */
/* unused harmony export before */
/* unused harmony export removeChild */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__("+/tp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang__ = __webpack_require__("FkXn");



let elementStyle = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* inBrowser */] && document.createElement('div').style

let vendor = (() => {
  if (!__WEBPACK_IMPORTED_MODULE_0__env__["a" /* inBrowser */]) {
    return false
  }
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    if (style === 'transitionEnd') {
      return 'transitionend'
    }
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

function addEvent(el, type, fn, capture) {
  el.addEventListener(type, fn, {passive: false, capture: !!capture})
}

function removeEvent(el, type, fn, capture) {
  el.removeEventListener(type, fn, {passive: false, capture: !!capture})
}

function offset(el) {
  let left = 0
  let top = 0

  while (el) {
    left -= el.offsetLeft
    top -= el.offsetTop
    el = el.offsetParent
  }

  return {
    left,
    top
  }
}

function offsetToBody(el) {
  let rect = el.getBoundingClientRect()

  return {
    left: -(rect.left + window.pageXOffset),
    top: -(rect.top + window.pageYOffset)
  }
}

const cssVendor = (vendor && vendor !== 'standard') ? '-' + vendor.toLowerCase() + '-' : ''
/* unused harmony export cssVendor */


let transform = prefixStyle('transform')
let transition = prefixStyle('transition')

const hasPerspective = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* inBrowser */] && prefixStyle('perspective') in elementStyle
/* harmony export (immutable) */ __webpack_exports__["g"] = hasPerspective;

// fix issue #361
const hasTouch = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* inBrowser */] && ('ontouchstart' in window || __WEBPACK_IMPORTED_MODULE_0__env__["c" /* isWeChatDevTools */])
/* harmony export (immutable) */ __webpack_exports__["h"] = hasTouch;

const hasTransform = transform !== false
/* harmony export (immutable) */ __webpack_exports__["i"] = hasTransform;

const hasTransition = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* inBrowser */] && transition in elementStyle
/* harmony export (immutable) */ __webpack_exports__["j"] = hasTransition;


const style = {
  transform,
  transition,
  transitionTimingFunction: prefixStyle('transitionTimingFunction'),
  transitionDuration: prefixStyle('transitionDuration'),
  transitionDelay: prefixStyle('transitionDelay'),
  transformOrigin: prefixStyle('transformOrigin'),
  transitionEnd: prefixStyle('transitionEnd')
}
/* harmony export (immutable) */ __webpack_exports__["n"] = style;


const TOUCH_EVENT = 1
/* harmony export (immutable) */ __webpack_exports__["a"] = TOUCH_EVENT;

const MOUSE_EVENT = 2
/* unused harmony export MOUSE_EVENT */


const eventType = {
  touchstart: TOUCH_EVENT,
  touchmove: TOUCH_EVENT,
  touchend: TOUCH_EVENT,

  mousedown: MOUSE_EVENT,
  mousemove: MOUSE_EVENT,
  mouseup: MOUSE_EVENT
}
/* harmony export (immutable) */ __webpack_exports__["e"] = eventType;


function getRect(el) {
  if (el instanceof window.SVGElement) {
    let rect = el.getBoundingClientRect()
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    }
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
  }
}

function preventDefaultException(el, exceptions) {
  for (let i in exceptions) {
    if (exceptions[i].test(el[i])) {
      return true
    }
  }
  return false
}

function tap(e, eventName) {
  let ev = document.createEvent('Event')
  ev.initEvent(eventName, true, true)
  ev.pageX = e.pageX
  ev.pageY = e.pageY
  e.target.dispatchEvent(ev)
}

function click(e, event = 'click') {
  let eventSource
  if (e.type === 'mouseup' || e.type === 'mousecancel') {
    eventSource = e
  } else if (e.type === 'touchend' || e.type === 'touchcancel') {
    eventSource = e.changedTouches[0]
  }
  let posSrc = {}
  if (eventSource) {
    posSrc.screenX = eventSource.screenX || 0
    posSrc.screenY = eventSource.screenY || 0
    posSrc.clientX = eventSource.clientX || 0
    posSrc.clientY = eventSource.clientY || 0
  }
  let ev
  const bubbles = true
  const cancelable = true
  if (typeof MouseEvent !== 'undefined') {
    try {
      ev = new MouseEvent(event, Object(__WEBPACK_IMPORTED_MODULE_1__lang__["a" /* extend */])({
        bubbles,
        cancelable
      }, posSrc))
    } catch (e) {
      createEvent()
    }
  } else {
    createEvent()
  }

  function createEvent() {
    ev = document.createEvent('Event')
    ev.initEvent(event, bubbles, cancelable)
    Object(__WEBPACK_IMPORTED_MODULE_1__lang__["a" /* extend */])(ev, posSrc)
  }

  // forwardedTouchEvent set to true in case of the conflict with fastclick
  ev.forwardedTouchEvent = true
  ev._constructed = true
  e.target.dispatchEvent(ev)
}

function dblclick(e) {
  click(e, 'dblclick')
}

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function before(el, target) {
  target.parentNode.insertBefore(el, target)
}

function removeChild(el, child) {
  el.removeChild(child)
}


/***/ }),

/***/ "9NjT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "c-tabs-root  cml-base cml-view", attrs: {} },
    [
      _c(
        "div",
        { staticClass: "c-tabs-wrap  cml-base cml-view", attrs: {} },
        _vm._l(_vm.tabs, function(item, index) {
          return _c("c-tab-item", {
            staticClass: "c-tabs-item  cml-base cml-c-tab-item",
            attrs: {
              tab: item,
              inline: _vm.inline,
              "active-label": _vm.activeLabel,
              "active-label-style": _vm.activeLabelStyle,
              "active-icon-style": _vm.activeIconStyle,
              "data-evt-tabclick": ""
            },
            on: {
              tabclick: function($event) {
                _vm._cmlEventProxy($event, "handleTabTap")
              }
            }
          })
        })
      ),
      _vm._v(" "),
      _vm.hasUnderline
        ? _c("div", {
            staticClass: "c-tabs-line-wrap  cml-base cml-view",
            style: _vm._cmlStyleProxy(_vm.tabLineStyle, {
              rem: true,
              scale: 0.5,
              remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
              autoprefixOptions: {
                browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                grid: false
              }
            }),
            attrs: {}
          })
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-96a95cba", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "9S/u":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _getPrototypeOf = __webpack_require__("F6Tz");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("SUxG");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Urzf");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseCtor2 = __webpack_require__("yVTO");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = __webpack_require__("wbAX");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _OptTransformer = __webpack_require__("njES");

var _OptTransformer2 = _interopRequireDefault(_OptTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = exports.App = function (_BaseCtor) {
  (0, _inherits3.default)(App, _BaseCtor);

  function App(options) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, options));

    _this.cmlType = 'web';

    _this.initOptTransformer(_OptTransformer2.default, {
      type: 'app',
      hooks: _lifecycle2.default.get('cml.hooks')
    });
    return _this;
  }

  return App;
}(_BaseCtor3.default);

/***/ }),

/***/ "9ZB8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("tRKg");
var core = __webpack_require__("OzFA");
var dP = __webpack_require__("isOg");
var DESCRIPTORS = __webpack_require__("yfK2");
var SPECIES = __webpack_require__("hTSS")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "9fjd":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/form_1d8d4bd.png";

/***/ }),

/***/ "9kiM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9xHU":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("S8KF");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _mutations;

var _mutationTypes = __webpack_require__("Zf4h");

var types = _interopRequireWildcard(_mutationTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.INDEX_REPLACE_STATE, function (state, newState) {
  // for(let key in newState) {
  //   state[key] = newState[key]
  // }
  state.index = newState;
}), (0, _defineProperty3.default)(_mutations, types.INDEX_CHANGE_NAME, function (state, name) {
  state.index.name = name;
}), (0, _defineProperty3.default)(_mutations, types.INDEX_CHANGE_AGE, function (state, age) {
  state.index.age = age;
}), _mutations);

exports.default = mutations;

/***/ }),

/***/ "9zL9":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0JVX");
__webpack_require__("YJhL");
module.exports = __webpack_require__("gkDN");


/***/ }),

/***/ "AJI0":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _web = __webpack_require__("en+i");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 定义模块的interface
var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'createComponent',
    value: function createComponent(options) {
      return new _web.Component(options);
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "AbV7":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheTransformStylesLoader = exports.commonLoader = exports.compositeStyles = exports.transformStyles = exports.isNumTypeStyles = exports.rotateStyles = undefined;

var _stringify = __webpack_require__("IZaB");

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rotateStyles = exports.rotateStyles = ['rotate', 'rotateX', 'retateY'];

var isNumTypeStyles = exports.isNumTypeStyles = ['width', 'height', 'translateX', 'translateY'];

var transformStyles = exports.transformStyles = ['translate', 'translateX', 'translateY', 'scale', 'scaleX', 'scaleY', 'rotate', 'rotateX', 'rotateY'];

var compositeStyles = exports.compositeStyles = ['translate', 'scale'];

var commonLoader = exports.commonLoader = function commonLoader(styles) {
  var returnStyles = {};

  (0, _keys2.default)(styles).forEach(function (key) {
    var value = styles[key];
    //
    if (value.length === 1) {
      returnStyles[key] = value[0];
    } else {
      if (compositeStyles.includes(key)) {
        returnStyles[key + 'X'] = value[0];
        returnStyles[key + 'Y'] = value[1];
        // returnStyles[`${key}Z`] = value[2];
      } else {
          // redLog(`${key}属性不支持传多个参数`);
        }
    }
  });
  return returnStyles;
};

// 缓存transform属性
var transformStylesMap = {};
var cacheTransformStylesLoader = exports.cacheTransformStylesLoader = function cacheTransformStylesLoader(styles, descriptions, id) {
  var returnStyles = {};

  if (!transformStylesMap[id]) {
    transformStylesMap[id] = {};
  }

  (0, _keys2.default)(styles).forEach(function (key) {
    var value = styles[key];

    if (transformStyles.includes(key)) {
      transformStylesMap[id][key] = value;
    }
    returnStyles[key] = value;
  });

  if ((0, _stringify2.default)(transformStylesMap[id]) !== '{}') {
    (0, _keys2.default)(transformStylesMap[id]).forEach(function (key) {
      var value = transformStylesMap[id][key];

      returnStyles[key] = value;
    });
  }

  return returnStyles;
};

/***/ }),

/***/ "AiQY":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("JAUT");
var toIObject = __webpack_require__("dkPk");
var arrayIndexOf = __webpack_require__("hIjT")(false);
var IE_PROTO = __webpack_require__("NTY1")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "B3mp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DIRECTION_UP = 1
/* harmony export (immutable) */ __webpack_exports__["d"] = DIRECTION_UP;

const DIRECTION_DOWN = -1
/* harmony export (immutable) */ __webpack_exports__["a"] = DIRECTION_DOWN;

const DIRECTION_LEFT = 1
/* harmony export (immutable) */ __webpack_exports__["b"] = DIRECTION_LEFT;

const DIRECTION_RIGHT = -1
/* harmony export (immutable) */ __webpack_exports__["c"] = DIRECTION_RIGHT;


const PROBE_DEBOUNCE = 1
/* harmony export (immutable) */ __webpack_exports__["e"] = PROBE_DEBOUNCE;

const PROBE_NORMAL = 2
/* unused harmony export PROBE_NORMAL */

const PROBE_REALTIME = 3
/* harmony export (immutable) */ __webpack_exports__["f"] = PROBE_REALTIME;



/***/ }),

/***/ "B9oY":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__("iXbp");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'getQueryObjSync',
    value: function getQueryObjSync() {
      return (0, _utils.queryParse)(location.href);
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "BIDT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BXzI":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("xCCz");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("yfK2"), 'Object', { defineProperty: __webpack_require__("isOg").f });


/***/ }),

/***/ "BqCL":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _listWeb = __webpack_require__("mzpi");

var _listWeb2 = _interopRequireDefault(_listWeb);

var _cPopup = __webpack_require__("H+3B");

var _cPopup2 = _interopRequireDefault(_cPopup);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var CActionsheet = function () {
  function CActionsheet() {
    (0, _classCallCheck3.default)(this, CActionsheet);
    this.props = {
      show: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: "标题"
      },
      cancelTxt: {
        type: String,
        default: "取消"
      },
      headerStyle: {
        type: String,
        default: ""
      },
      cancelStyle: {
        type: String,
        default: ""
      },
      contentStyle: {
        type: String,
        default: ""
      },
      activeStyle: {
        type: String,
        default: ""
      },
      list: {
        type: Array,
        default: []
      },
      pickerStyle: {
        type: Boolean,
        default: false
      },
      active: {
        type: Number,
        default: -1
      }
    };
    this.data = {};
    this.computed = {
      actionHeaderStyle: function actionHeaderStyle() {
        return this.headerStyle;
      },
      actionCancelStyle: function actionCancelStyle() {
        return this.cancelStyle;
      },
      actionContentStyle: function actionContentStyle() {
        return "height:" + this.list.length * 100 + "cpx";
      },
      textStyle: function textStyle() {
        return this.contentStyle;
      },
      activeTextStyle: function activeTextStyle() {
        return this.activeStyle;
      },
      listHeight: function listHeight() {
        return this.list.length * 100;
      }
    };
    this.watch = {};
    this.methods = {
      cancelclick: function cancelclick() {
        this.$cmlEmit("cancel");
      },
      itemClick: function itemClick(e) {
        this.$cmlEmit("select", {
          index: e.currentTarget.dataset.idx,
          value: e.currentTarget.dataset.value
        });
      },
      actiontap: function actiontap() {}
    };
  }

  (0, _createClass3.default)(CActionsheet, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return CActionsheet;
}();

exports.default = new CActionsheet();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPopup: _cPopup2.default, cmlBuildinList: _listWeb2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "BqFM":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/nav_29b98f6.png";

/***/ }),

/***/ "C+nZ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/warn_7953d27.png";

/***/ }),

/***/ "CHsc":
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__("fmLH");

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = module.exports = {};
var utils = __webpack_require__("TdLX");
_.eventProxyName = '_cmlEventProxy';
_.modelEventProxyName = '_cmlModelEventProxy'; // c-model  v-model的事件代理
_.inlineStatementEventProxy = '_cmlInlineStatementEventProxy'; // 内联语句的事件代理
_.eventEmitName = '$cmlEmit'; // 触发事件的方法
_.styleParseName = '$cmlStyle'; // 提供各端处理style属性的方法  weex中处理成对象，wx中处理成字符串，web中不处理
_.styleProxyName = '_cmlStyleProxy'; // 提供代理 weex和web端处理style
_.mergeStyleName = '$cmlMergeStyle';
_.animationProxy = '_animationCb';
_.weexClassProxy = '_weexClassProxy';
_.merge = function (target, fromObj) {
  (0, _keys2.default)(fromObj).forEach(function (key) {
    target[key] = fromObj[key];
  });
};

_.isType = function (obj, type) {
  return Object.prototype.toString.call(obj).slice(8, -1) === type;
};

_.mergeStyle = function () {
  // 可以接受字符串或者对象
  function styleToObj(str) {
    var obj = {};
    str.split(';').filter(function (item) {
      return !!item.trim();
    }).forEach(function (item) {
      var _utils$getStyleKeyVal = utils.getStyleKeyValue(item),
          key = _utils$getStyleKeyVal.key,
          value = _utils$getStyleKeyVal.value;

      key = key.replace(/\s+/, '');
      value = value.replace(/\s+/, '');
      obj[key] = value;
    });
    return obj;
  }
  var arr = [];

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (arg) {
    if (typeof arg === 'string') {
      arr.push(styleToObj(arg));
    } else if (Object.prototype.toString.call(arg) === '[object Object]') {
      arr.push(arg);
    }
  });
  var resultObj = _assign2.default.apply(Object, arr);

  var resultStr = '';
  (0, _keys2.default)(resultObj).forEach(function (key) {
    resultStr += key + ':' + resultObj[key] + ';';
  });
  return resultStr;
};
_.trim = function (value) {
  return value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
_.isReactive = function (value) {
  var reg = /(?:^'([^']*?)'$)/;
  return _.trim(value).match(reg);
};

/***/ }),

/***/ "CU9w":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("awtq");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "CgXw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "CqNQ":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "CzbJ":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0JVX");
__webpack_require__("YJhL");
module.exports = __webpack_require__("l4ty");


/***/ }),

/***/ "DAVl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "DKwb":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("isOg").f;
var has = __webpack_require__("JAUT");
var TAG = __webpack_require__("hTSS")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "Do8H":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = close;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml';
var methodName = 'closePage';

function close() {
  (0, _index.callNative)(moduleName, methodName, {}, function () {});
}

close.prototype.moduleName = moduleName;
close.prototype.methodName = methodName;

/***/ }),

/***/ "DyO6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("btUP"), __esModule: true };

/***/ }),

/***/ "E+yl":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "E3V9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/unselected_4e38c39.png";

/***/ }),

/***/ "EEl8":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__("lHTR");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.supportsPassive = supportsPassive;
exports.createEvent = createEvent;
exports.createBubblesEvent = createBubblesEvent;
exports.createCustomEvent = createCustomEvent;
exports.dispatchNativeEvent = dispatchNativeEvent;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extend(to) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (!args || args.length <= 0) {
    return to;
  }
  args.forEach(function (from) {
    if ((typeof from === 'undefined' ? 'undefined' : (0, _typeof3.default)(from)) !== 'object') {
      return;
    }
    for (var key in from) {
      to[key] = from[key];
    }
  });
  return to;
}

// if support passive event listeners. 支持的浏览器会优化滚动性能：https://segmentfault.com/a/1190000007913386
var _supportsPassive = false;
try {
  document.createElement('div').addEventListener('test', function (_) {}, {
    get passive() {
      _supportsPassive = true;
    }
  });
} catch (e) {
  // do nothing.
}
function supportsPassive() {
  return _supportsPassive;
}

/**
 * Create Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createEvent(target, type, props) {
  var event = new Event(type, { bubbles: false });

  extend(event, props);
  //  phantomjs don't support customer event
  if (window.navigator.userAgent.toLowerCase().indexOf('phantomjs') !== -1) {
    return event;
  }
  try {
    Object.defineProperty(event, 'target', {
      enumerable: true,
      value: target
    });
  } catch (err) {
    return extend({}, event, { target: target });
  }
  return event;
}

/**
 * Create a bubbable Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createBubblesEvent(target, type, props) {
  var event = new Event(type, { bubbles: true });
  extend(event, props);
  //  phantomjs don't support customer event
  if (window.navigator.userAgent.toLowerCase().indexOf('phantomjs') !== -1) {
    return event;
  }
  try {
    Object.defineProperty(event, 'target', {
      enumerable: true,
      value: target
    });
  } catch (err) {
    return extend({}, event, { target: target });
  }
  return event;
}

/**
 * Create Custom Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createCustomEvent(target, type, props) {
  // compatibility: http://caniuse.com/#search=customevent
  // const event = new CustomEvent(type)
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(type, false, true, {});
  // event.preventDefault()
  // event.stopPropagation()

  extend(event, props);

  // event.target is readonly
  try {
    Object.defineProperty(event, 'target', {
      enumerable: true,
      value: target || null
    });
  } catch (err) {
    return extend({}, event, { target: target || null });
  }

  return event;
}

/**
 * dispatch a event on a HTML element.
 * @param  {HTMLElement} elm
 * @param  {Event} type event name.
 * @param  {Object} data extra data.
 */
function dispatchNativeEvent(elm, type, data) {
  elm.dispatchEvent(createEvent(elm, type, data));
}

/***/ }),

/***/ "EJ14":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "EK/L":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insideA = insideA;
function insideA(el) {
  if (typeof el._insideA === 'boolean') {
    return el._insideA;
  }
  var parent = el.parentElement;
  var parents = [];
  var checkParents = function checkParents(inside) {
    for (var i = 0, l = parents.length; i < l; i++) {
      parents[i]._insideA = inside;
    }
  };
  var check = function check(inside) {
    el._insideA = inside;
    checkParents(inside);
    return inside;
  };
  while (parent && parent !== document.body) {
    if (parent.tagName.toLowerCase() === 'a') {
      return check(true);
    }
    if (typeof parent._insideA === 'boolean') {
      return check(parent._insideA);
    }
    parents.push(parent);
    parent = parent.parentElement;
  }
  return check(false);
}

/***/ }),

/***/ "ENOI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EYO0":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__("1iTB");

var _promise2 = _interopRequireDefault(_promise);

exports.default = getSystemInfo;

var _index = __webpack_require__("4Qds");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("z4ZC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSystemInfo() {
  return new _promise2.default(function (resolve, reject) {
    _index2.default.getSystemInfo(function (res) {
      res.extraParams = (0, _utils.tryJsonParse)(res.extraParams);
      // px2viewpx
      var pxRpxRate = 750 / res.viewportWidth;
      var viewportHeight = (res.viewportHeight * pxRpxRate).toFixed(3);
      var viewportWidth = (res.viewportWidth * pxRpxRate).toFixed(3);

      if (res.os) {
        resolve((0, _extends3.default)({}, res, {
          viewportHeight: viewportHeight,
          viewportWidth: viewportWidth
        }));
      } else {
        reject(res);
      }
    });
  });
}

/***/ }),

/***/ "F6Tz":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("5BVc"), __esModule: true };

/***/ }),

/***/ "FFCV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/loading_1f26c50.gif";

/***/ }),

/***/ "FTri":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FkXn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getNow;
/* harmony export (immutable) */ __webpack_exports__["a"] = extend;
/* harmony export (immutable) */ __webpack_exports__["c"] = isUndef;
/* unused harmony export getDistance */
function getNow() {
  return window.performance && window.performance.now ? (window.performance.now() + window.performance.timing.navigationStart) : +new Date()
}

function extend(target, ...rest) {
  for (let i = 0; i < rest.length; i++) {
    let source = rest[i]
    for (let key in source) {
      target[key] = source[key]
    }
  }
  return target
}

function isUndef(v) {
  return v === undefined || v === null
}

function getDistance(x, y) {
  return Math.sqrt(x * x + y * y)
}


/***/ }),

/***/ "G8qx":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
  value: true
});

var _instance = __webpack_require__("xfCQ");

var _instance2 = _interopRequireDefault(_instance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.global = window;
exports.default = global.chameleon = _instance2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("PvPp")))

/***/ }),

/***/ "GDCJ":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("7unY");
var ITERATOR = __webpack_require__("hTSS")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "GTLj":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("tRKg").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "GTrZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_item_cml__ = __webpack_require__("K3sJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_item_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_item_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_item_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_item_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_47f2caaa_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_item_cml__ = __webpack_require__("WGTs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("vdCN")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-47f2caaa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_item_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_47f2caaa_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_item_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_47f2caaa_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_item_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-tab-item/c-tab-item.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47f2caaa", Component.options)
  } else {
    hotAPI.reload("data-v-47f2caaa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "GZYD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon_API_HL_c803704.png";

/***/ }),

/***/ "Gfn8":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("vn5Q")('asyncIterator');


/***/ }),

/***/ "Gk/Z":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTitle = setTitle;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml';
var methodName = 'setTitle';

function setTitle(param) {
  (0, _index.callNative)(moduleName, methodName, param, function () {});
}

setTitle.prototype.moduleName = moduleName;
setTitle.prototype.methodName = methodName;

/***/ }),

/***/ "Go0R":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getViewportSize = getViewportSize;
function getViewportSize() {
  var viewportWidth = void 0;
  var viewportHeight = void 0;
  if (window.innerWidth) {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
  } else if (document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth) {
    viewportWidth = document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
    viewportHeight = document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
  }
  return {
    viewportWidth: viewportWidth,
    viewportHeight: viewportHeight
  };
}

/***/ }),

/***/ "Guy4":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("BXzI");
var $Object = __webpack_require__("OzFA").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "H+3B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__ = __webpack_require__("mvFN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_ede7a05e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__ = __webpack_require__("P586");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("cVFY")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ede7a05e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_ede7a05e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_ede7a05e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-popup/c-popup.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ede7a05e", Component.options)
  } else {
    hotAPI.reload("data-v-ede7a05e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "HJFi":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("TG55");
module.exports = __webpack_require__("OzFA").Object.entries;


/***/ }),

/***/ "HTWf":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = createComponent;

var _index = __webpack_require__("AJI0");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createComponent(options) {
  return _index2.default.createComponent(options);
}

/***/ }),

/***/ "HW6M":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ "HpYw":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _pageWeb = __webpack_require__("/b3d");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _cHeader = __webpack_require__("h1kM");

var _cHeader2 = _interopRequireDefault(_cHeader);

var _cCheckboxGroup = __webpack_require__("egZi");

var _cCheckboxGroup2 = _interopRequireDefault(_cCheckboxGroup);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CCheckbox = function CCheckbox() {
  (0, _classCallCheck3.default)(this, CCheckbox);
  this.data = {
    checkboxGroupOption1: [{
      checked: true,
      label: 'one',
      disabled: true
    }, {
      checked: false,
      label: 'two'
    }, {
      checked: false,
      label: 'three'
    }],
    selected1: 'one',
    checkboxGroupOption2: [{
      checked: true,
      label: 'one',
      disabled: true
    }, {
      checked: false,
      label: 'two'
    }, {
      checked: false,
      label: 'three'
    }],
    selected2: 'one',
    checkboxGroupOption3: [{
      checked: true,
      label: 'one',
      disabled: true
    }, {
      checked: false,
      label: 'two'
    }, {
      checked: false,
      label: 'three'
    }],
    selected3: 'one'
  };
  this.computed = {};
  this.watch = {};
  this.methods = {
    valueChange1: function valueChange1(e) {
      this.checkboxValue1 = e.detail.value;
    },
    groupChangeHandler1: function groupChangeHandler1(e) {
      this.checkboxGroupOption1 = e.detail.value;
      this.selected1 = e.detail.selected.join(', ');
    },
    groupChangeHandler2: function groupChangeHandler2(e) {
      this.checkboxGroupOption2 = e.detail.value;
      this.selected2 = e.detail.selected.join(', ');
    },
    groupChangeHandler3: function groupChangeHandler3(e) {
      this.checkboxGroupOption3 = e.detail.value;
      this.selected3 = e.detail.selected.join(', ');
    },
    valueChange2: function valueChange2(e) {
      this.checkboxValue2 = e.detail.value;
    }
  };
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new CCheckbox();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cHeader: _cHeader2.default, cCheckboxGroup: _cCheckboxGroup2.default, cmlBuildinPage: _pageWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "HtJK":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getViewportSize = getViewportSize;
function getViewportSize() {
  var viewportWidth = 0;
  var viewportHeight = 0;

  var documentElementClientWidth = document.documentElement && document.documentElement.clientWidth;
  var documentElementClientHeight = document.documentElement && document.documentElement.clientHeight;
  var bodyClientWidth = document.body && document.body.clientWidth;
  var bodyClientHeight = document.body && document.body.clientHeight;

  viewportWidth = window.innerWidth || documentElementClientWidth || bodyClientWidth;
  viewportHeight = window.innerHeight || documentElementClientHeight || bodyClientHeight;

  return {
    viewportWidth: viewportWidth,
    viewportHeight: viewportHeight
  };
}

/***/ }),

/***/ "IBFR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_cml__ = __webpack_require__("86qO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_695fd0cf_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_cml__ = __webpack_require__("qbsL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("VOAO")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-695fd0cf"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_695fd0cf_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_695fd0cf_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/COMP/c-picker-panel/c-picker-panel.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-695fd0cf", Component.options)
  } else {
    hotAPI.reload("data-v-695fd0cf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "IMan":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wex = __webpack_require__("JCgp");

var _wex2 = _interopRequireDefault(_wex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _wex2.default;

/***/ }),

/***/ "IYim":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = undefined;

var _getPrototypeOf = __webpack_require__("F6Tz");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("SUxG");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Urzf");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseCtor2 = __webpack_require__("yVTO");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = __webpack_require__("wbAX");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _OptTransformer = __webpack_require__("njES");

var _OptTransformer2 = _interopRequireDefault(_OptTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = exports.Page = function (_BaseCtor) {
  (0, _inherits3.default)(Page, _BaseCtor);

  function Page(options) {
    (0, _classCallCheck3.default)(this, Page);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call(this, options));

    _this.cmlType = 'web';

    _this.initOptTransformer(_OptTransformer2.default, {
      type: 'page',
      hooks: _lifecycle2.default.get('cml.hooks'),
      needAddHookMixin: true
    });
    return _this;
  }

  return Page;
}(_BaseCtor3.default);

/***/ }),

/***/ "IZaB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("KA7s"), __esModule: true };

/***/ }),

/***/ "IbWM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IcnI":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__("mUbh");

var _actions2 = _interopRequireDefault(_actions);

var _getters = __webpack_require__("UjVw");

var _getters2 = _interopRequireDefault(_getters);

var _state = __webpack_require__("lwq5");

var _state2 = _interopRequireDefault(_state);

var _mutations = __webpack_require__("ukYY");

var _mutations2 = _interopRequireDefault(_mutations);

var _chameleonStore = __webpack_require__("VWiq");

var _chameleonStore2 = _interopRequireDefault(_chameleonStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _chameleonStore2.default)({
  actions: _actions2.default,
  getters: _getters2.default,
  state: _state2.default,
  mutations: _mutations2.default
});

/***/ }),

/***/ "Ihxk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__("JTBa");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "ImXL":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("E+yl");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "ImyB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "refresh", staticClass: "refresh  cml-base cml-view", attrs: {} },
    [
      _vm.refreshing || _vm.showBeforeRefreshing
        ? [
            !_vm.customUi
              ? _c(
                  "div",
                  {
                    class: _vm.triggerClass + "  cml-base cml-view",
                    attrs: {}
                  },
                  [
                    _c("img", {
                      staticClass: "loading-icon  cml-base cml-image",
                      attrs: { src: _vm.icon }
                    })
                  ]
                )
              : _c(
                  "div",
                  {
                    class: _vm.triggerClass + "  cml-base cml-view",
                    attrs: {}
                  },
                  [_vm._t("default", null, {})],
                  2
                )
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2f6ef295", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "Inpg":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var provins = exports.provins = ["北京市", "天津市", "河北省", "山西省", "内蒙古", "辽宁省", "吉林省", "黑龙江省", "上海市", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西", "海南省", "重庆市", "四川省", "贵州省", "云南省", "西藏", "陕西省", "甘肃省", "青海", "宁夏", "新疆"];

/***/ }),

/***/ "IyGo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("8ALk");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("US/B");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "J6Fo":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//


var CTabPaneItem = function CTabPaneItem() {
  (0, _classCallCheck3.default)(this, CTabPaneItem);
  this.props = {};
  this.data = {};
  this.computed = {};
  this.watch = {};
  this.methods = {};
};

exports.default = new CTabPaneItem();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "JAUT":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "JCgp":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStore;

var _vuex = __webpack_require__("NYxO");

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vuex2.default);

function createStore() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var store = new (Function.prototype.bind.apply(_vuex2.default.Store, [null].concat(args)))();['mapGetters', 'mapMutations', 'mapActions', 'mapState'].forEach(function (key) {
    store[key] = _vuex2.default[key];
  });

  return store;
}

/***/ }),

/***/ "JGbf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/loading_1f26c50.gif";

/***/ }),

/***/ "JPzv":
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "JTBa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("NgqT"), __esModule: true };

/***/ }),

/***/ "Joqm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml__ = __webpack_require__("BqCL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3dc8254b_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml__ = __webpack_require__("U5MX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("dyqm")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3dc8254b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3dc8254b_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_3dc8254b_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-actionsheet/c-actionsheet.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3dc8254b", Component.options)
  } else {
    hotAPI.reload("data-v-3dc8254b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Jx0+":
/***/ (function(module, exports, __webpack_require__) {

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__("lHTR");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isInitialized = false;

// major events supported:
//   panstart
//   panmove
//   panend
//   swipe
//   longpress
// extra events supported:
//   dualtouchstart
//   dualtouch
//   dualtouchend
//   tap
//   doubletap
//   pressend

var doc = window.document;
var docEl = doc.documentElement;
var slice = Array.prototype.slice;
var gestures = {};
var lastTap = null;

/**
 * find the closest common ancestor
 * if there's no one, return null
 *
 * @param  {Element} el1 first element
 * @param  {Element} el2 second element
 * @return {Element}     common ancestor
 */
function getCommonAncestor(el1, el2) {
  var el = el1;
  while (el) {
    if (el.contains(el2) || el == el2) {
      return el;
    }
    el = el.parentNode;
  }
  return null;
}

/**
 * fire a HTMLEvent
 *
 * @param  {Element} element which element to fire a event on
 * @param  {string}  type    type of event
 * @param  {object}  extra   extra data for the event object
 */
function fireEvent(element, type, extra) {
  var event = doc.createEvent('HTMLEvents');
  event.initEvent(type, true, true);

  if ((typeof extra === 'undefined' ? 'undefined' : (0, _typeof3.default)(extra)) === 'object') {
    for (var p in extra) {
      event[p] = extra[p];
    }
  }

  /**
   * A flag to distinguish with other events with the same name generated
   * by another library in the same page.
   */
  event._for = 'cml';

  element.dispatchEvent(event);
}

/**
 * calc the transform
 * assume 4 points ABCD on the coordinate system
 * > rotate：angle rotating from AB to CD
 * > scale：scale ratio from AB to CD
 * > translate：translate shift from A to C
 *
 * @param  {number} x1 abscissa of A
 * @param  {number} y1 ordinate of A
 * @param  {number} x2 abscissa of B
 * @param  {number} y2 ordinate of B
 * @param  {number} x3 abscissa of C
 * @param  {number} y3 ordinate of C
 * @param  {number} x4 abscissa of D
 * @param  {number} y4 ordinate of D
 * @return {object}    transform object like
 *   {rotate, scale, translate[2], matrix[3][3]}
 */
function calc(x1, y1, x2, y2, x3, y3, x4, y4) {
  var rotate = Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y2 - y1, x2 - x1);
  var scale = Math.sqrt((Math.pow(y4 - y3, 2) + Math.pow(x4 - x3, 2)) / (Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2)));
  var translate = [x3 - scale * x1 * Math.cos(rotate) + scale * y1 * Math.sin(rotate), y3 - scale * y1 * Math.cos(rotate) - scale * x1 * Math.sin(rotate)];

  return {
    rotate: rotate,
    scale: scale,
    translate: translate,
    matrix: [[scale * Math.cos(rotate), -scale * Math.sin(rotate), translate[0]], [scale * Math.sin(rotate), scale * Math.cos(rotate), translate[1]], [0, 0, 1]]
  };
}

/**
 * take over the touchstart events. Add new touches to the gestures.
 * If there is no previous records, then bind touchmove, tochend
 * and touchcancel events.
 * new touches initialized with state 'tapping', and within 500 milliseconds
 * if the state is still tapping, then trigger gesture 'press'.
 * If there are two touche points, then the 'dualtouchstart' is triggerd. The
 * node of the touch gesture is their cloest common ancestor.
 *
 * @event
 * @param  {event} event
 */
function touchstartHandler(event) {
  if ((0, _keys2.default)(gestures).length === 0) {
    docEl.addEventListener('touchmove', touchmoveHandler, true);
    docEl.addEventListener('touchend', touchendHandler, true);
    docEl.addEventListener('touchcancel', touchcancelHandler, true);
  }

  // record every touch
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var touchRecord = {};

    for (var p in touch) {
      touchRecord[p] = touch[p];
    }

    var gesture = {
      startTouch: touchRecord,
      startTime: Date.now(),
      status: 'tapping',
      element: event.srcElement || event.target,
      pressingHandler: setTimeout(function (element, touch) {
        return function () {
          if (gesture.status === 'tapping') {
            gesture.status = 'pressing';

            fireEvent(element, 'longpress', {
              // add touch data for cml
              touch: touch,
              touches: event.touches,
              changedTouches: event.changedTouches,
              touchEvent: event
            });
          }

          clearTimeout(gesture.pressingHandler);
          gesture.pressingHandler = null;
        };
      }(event.srcElement || event.target, event.changedTouches[i]), 500)
    };
    gestures[touch.identifier] = gesture;
  }

  if ((0, _keys2.default)(gestures).length == 2) {
    var elements = [];

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchstart', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }
}

/**
 * take over touchmove events, and handle pan and dual related gestures.
 *
 * 1. traverse every touch point：
 * > if 'tapping' and the shift is over 10 pixles, then it's a 'panning'.
 * 2. if there are two touch points, then calc the tranform and trigger
 *   'dualtouch'.
 *
 * @event
 * @param  {event} event
 */
function touchmoveHandler(event) {
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var gesture = gestures[touch.identifier];

    if (!gesture) {
      return;
    }

    if (!gesture.lastTouch) {
      gesture.lastTouch = gesture.startTouch;
    }
    if (!gesture.lastTime) {
      gesture.lastTime = gesture.startTime;
    }
    if (!gesture.velocityX) {
      gesture.velocityX = 0;
    }
    if (!gesture.velocityY) {
      gesture.velocityY = 0;
    }
    if (!gesture.duration) {
      gesture.duration = 0;
    }

    var time = Date.now() - gesture.lastTime;
    var vx = (touch.clientX - gesture.lastTouch.clientX) / time;
    var vy = (touch.clientY - gesture.lastTouch.clientY) / time;

    var RECORD_DURATION = 70;
    if (time > RECORD_DURATION) {
      time = RECORD_DURATION;
    }
    if (gesture.duration + time > RECORD_DURATION) {
      gesture.duration = RECORD_DURATION - time;
    }

    gesture.velocityX = (gesture.velocityX * gesture.duration + vx * time) / (gesture.duration + time);
    gesture.velocityY = (gesture.velocityY * gesture.duration + vy * time) / (gesture.duration + time);
    gesture.duration += time;

    gesture.lastTouch = {};

    for (var p in touch) {
      gesture.lastTouch[p] = touch[p];
    }
    gesture.lastTime = Date.now();

    var displacementX = touch.clientX - gesture.startTouch.clientX;
    var displacementY = touch.clientY - gesture.startTouch.clientY;
    var distance = Math.sqrt(Math.pow(displacementX, 2) + Math.pow(displacementY, 2));
    var isVertical = !(Math.abs(displacementX) > Math.abs(displacementY));
    var direction = isVertical ? displacementY >= 0 ? 'down' : 'up' : displacementX >= 0 ? 'right' : 'left';

    // magic number 10: moving 10px means pan, not tap
    if ((gesture.status === 'tapping' || gesture.status === 'pressing') && distance > 10) {
      gesture.status = 'panning';
      gesture.isVertical = isVertical;
      gesture.direction = direction;

      fireEvent(gesture.element, 'panstart', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }

    if (gesture.status === 'panning') {
      gesture.panTime = Date.now();

      fireEvent(gesture.element, 'panmove', {
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }
  }

  if ((0, _keys2.default)(gestures).length == 2) {
    var position = [];
    var current = [];
    var elements = [];
    var transform;

    for (var i = 0; i < event.touches.length; i++) {
      var touch = event.touches[i];
      var gesture = gestures[touch.identifier];
      position.push([gesture.startTouch.clientX, gesture.startTouch.clientY]);
      current.push([touch.clientX, touch.clientY]);
    }

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    transform = calc(position[0][0], position[0][1], position[1][0], position[1][1], current[0][0], current[0][1], current[1][0], current[1][1]);
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouch', {
      transform: transform,
      touches: event.touches,
      touchEvent: event
    });
  }
}

/**
 * handle touchend event
 *
 * 1. if there are tow touch points, then trigger 'dualtouchend'如
 *
 * 2. traverse every touch piont：
 * > if tapping, then trigger 'tap'.
 * If there is a tap 300 milliseconds before, then it's a 'doubletap'.
 * > if padding, then decide to trigger 'panend' or 'swipe'
 * > if pressing, then trigger 'pressend'.
 *
 * 3. remove listeners.
 *
 * @event
 * @param  {event} event
 */
function touchendHandler(event) {

  if ((0, _keys2.default)(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue;
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'tapping') {
      gesture.timestamp = Date.now();
      // fire click, not tap.
      fireEvent(gesture.element, 'cml$tap', {
        touch: touch,
        touchEvent: event
      });

      if (lastTap && gesture.timestamp - lastTap.timestamp < 300) {
        fireEvent(gesture.element, 'doubletap', {
          touch: touch,
          touchEvent: event
        });
      }

      lastTap = gesture;
    }

    if (gesture.status === 'panning') {
      var now = Date.now();
      var duration = now - gesture.startTime;
      var displacementX = touch.clientX - gesture.startTouch.clientX;
      var displacementY = touch.clientY - gesture.startTouch.clientY;

      var velocity = Math.sqrt(gesture.velocityY * gesture.velocityY + gesture.velocityX * gesture.velocityX);
      var isSwipe = velocity > 0.5 && now - gesture.lastTime < 100;
      var extra = {
        duration: duration,
        isSwipe: isSwipe,
        velocityX: gesture.velocityX,
        velocityY: gesture.velocityY,
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: gesture.direction
      };

      fireEvent(gesture.element, 'panend', extra);
      if (isSwipe) {
        fireEvent(gesture.element, 'swipe', extra);
      }
    }

    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }

    delete gestures[id];
  }

  if ((0, _keys2.default)(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

/**
 * handle touchcancel
 *
 * 1. if there are two touch points, then trigger 'dualtouchend'
 *
 * 2. traverse everty touch point:
 * > if pannnig, then trigger 'panend'
 * > if pressing, then trigger 'pressend'
 *
 * 3. remove listeners
 *
 * @event
 * @param  {event} event
 */
function touchcancelHandler(event) {

  if ((0, _keys2.default)(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue;
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'panning') {
      fireEvent(gesture.element, 'panend', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event
      });
    }
    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }
    delete gestures[id];
  }

  if ((0, _keys2.default)(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, true);
    docEl.removeEventListener('touchend', touchendHandler, true);
    docEl.removeEventListener('touchcancel', touchcancelHandler, true);
  }
}

if (!isInitialized) {
  docEl.addEventListener('touchstart', touchstartHandler, true);
  isInitialized = true;
}

/***/ }),

/***/ "JxD5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "K3sJ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//


var CTabsItem = function CTabsItem() {
  (0, _classCallCheck3.default)(this, CTabsItem);
  this.props = {
    tab: { //label labelStyle prefixIcon  suffixIcon
      type: Object,
      default: function _default() {
        return {};
      }
    },
    inline: {
      type: Boolean,
      default: true
    },
    activeLabel: {
      type: String
    },
    activeLabelStyle: {
      // 这个在微信中可以
      type: String,
      default: "color:#FC9153"
    },
    activeIconStyle: {
      // 这个在微信中可以
      type: String,
      default: ""
    }
  };
  this.data = {
    defaultPrefixStyle: "font-size: 28cpx;\n        text-align: center;",
    defaultLabelStyle: "line-height: 88cpx;\n        font-size: 28cpx;\n        text-align: center;\n        height: 88cpx;\n        padding-left:5cpx;\n        padding-right:5cpx;\n        padding-top:5cpx;\n        padding-bottom:5cpx;",
    defaultSuffixStyle: "font-size: 28cpx;\n        text-align: center;"
  };
  this.computed = {
    cTabsItem: function cTabsItem() {
      return this.inline ? "c-tabs-item-row" : "c-tabs-item-column";
    },
    finalPrefix: function finalPrefix() {
      var activeIconStyle = this.isActive ? this.activeIconStyle : ';';
      return this.defaultPrefixStyle + (this.tab.prefixStyle || ';') + (activeIconStyle || ';');
    },
    finalLabel: function finalLabel() {
      var activeLabelStyle = this.isActive ? this.activeLabelStyle : ';';
      return this.defaultLabelStyle + (this.tab.labelStyle || ';') + activeLabelStyle;
    },
    finalSuffix: function finalSuffix() {
      var activeIconStyle = this.isActive ? this.activeIconStyle : ';';
      return this.defaultSuffixStyle + (this.tab.suffixStyle || ';') + (activeIconStyle || ';');
    },
    isActive: function isActive() {
      return this.activeLabel === this.tab.label;
    }
  };
  this.watch = {};
  this.methods = {
    handleTabTap: function handleTabTap() {
      this.$cmlEmit('tabclick', this.tab);
    }
  };
};

exports.default = new CTabsItem();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "K5yo":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
var state = {
    name: '李四',
    age: '18'
};

exports.default = state;

/***/ }),

/***/ "K88W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__ = __webpack_require__("lv5w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_08135535_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__ = __webpack_require__("rQou");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("ansc")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-08135535"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_08135535_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_08135535_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_popup_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/COMP/c-popup/c-popup.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08135535", Component.options)
  } else {
    hotAPI.reload("data-v-08135535", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "KA7s":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("OzFA");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "KNRy":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//


var Checkbox = function () {
  function Checkbox() {
    (0, _classCallCheck3.default)(this, Checkbox);
    this.props = {
      checked: {
        type: Boolean,
        default: false
      },
      label: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'left'
      },
      groupIndex: {
        type: Number,
        default: -1
      }
    };
    this.data = {
      checkedImg: __webpack_require__("RuVk"),
      uncheckImg: __webpack_require__("E3V9"),
      innerChecked: false
    };
    this.computed = {
      checkStyle: function checkStyle() {
        var style = '';
        if (this.disabled) {
          style += 'opacity:0.5;';
        }
        if (this.position == 'right') {
          style += 'position:absolute;right:0;margin-right:45cpx;';
        } else {
          style += 'margin-right:13cpx;';
        }
        return style;
      },
      checkImg: function checkImg() {
        return this.innerChecked ? this.checkedImg : this.uncheckImg;
      },
      checkClass: function checkClass() {
        if (this.disabled) {
          return 'cml-checkbox-disabled';
        }
        return this.innerChecked ? 'cml-checkbox-checked' : 'cml-checkbox-uncheck';
      }
    };
    this.watch = {
      checked: function checked(newChecked) {
        this.innerChecked = newChecked;
      }
    };
    this.methods = {
      changeCheck: function changeCheck() {
        if (this.disabled) return;
        this.innerChecked = !this.innerChecked;
        var value = {
          value: this.innerChecked
        };
        if (this.groupIndex !== -1) {
          value.index = this.groupIndex;
        }
        this.$cmlEmit('changeevent', value);
        this.$cmlEmit('change', value);
      }
    };
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'created',
    value: function created() {
      var checked = this.checked;

      this.innerChecked = checked;
    }
  }]);
  return Checkbox;
}();

exports.default = new Checkbox();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "KvLQ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQueryObjSync = getQueryObjSync;

var _index = __webpack_require__("B9oY");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getQueryObjSync() {
  return _index2.default.getQueryObjSync();
}

getQueryObjSync.prototype.moduleName = 'cml';
getQueryObjSync.prototype.methodName = 'getLaunchUrl';

/***/ }),

/***/ "KvdW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "LARG":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("EJ14");
var TAG = __webpack_require__("hTSS")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "LAdT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_web_cml__ = __webpack_require__("lTyt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b73cf5e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_web_cml__ = __webpack_require__("dz4j");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("kGrF")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5b73cf5e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b73cf5e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b73cf5e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_panel_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-picker-panel/c-picker-panel.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b73cf5e", Component.options)
  } else {
    hotAPI.reload("data-v-5b73cf5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "LEQK":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _cPickerPanelWeb = __webpack_require__("LAdT");

var _cPickerPanelWeb2 = _interopRequireDefault(_cPickerPanelWeb);

var _cPickerItemWeb = __webpack_require__("5zlU");

var _cPickerItemWeb2 = _interopRequireDefault(_cPickerItemWeb);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//

var CPicker = function () {
    function CPicker() {
        (0, _classCallCheck3.default)(this, CPicker);
        this.props = {
            show: {
                type: Boolean,
                default: false
            },
            height: {
                type: Number,
                default: 500
            },
            headerHeight: {
                type: Number,
                default: 100
            },
            textAlign: {
                type: String,
                default: "center"
            },
            dataScrollerHeight: {
                type: Number,
                default: 400
            },
            data: {
                type: Array,
                default: []
            },
            defaultIndex: {
                type: Number,
                default: 0
            },
            cancelBtnStyle: {
                type: String,
                default: ''
            },
            confirmBtnStyle: {
                type: String,
                default: ''
            }
        };
        this.data = {};
        this.computed = {};
        this.watch = {};
        this.methods = {
            cancel: function cancel() {
                this.$cmlEmit('cancel');
            },
            confirm: function confirm() {
                this.$cmlEmit('confirm');
            },
            selectchange: function selectchange(e) {
                this.$cmlEmit('selectchange', e.detail);
            }
        };
    }

    (0, _createClass3.default)(CPicker, [{
        key: "beforeCreate",
        value: function beforeCreate() {}
    }, {
        key: "created",
        value: function created() {}
    }, {
        key: "beforeMount",
        value: function beforeMount() {}
    }, {
        key: "mounted",
        value: function mounted() {}
    }, {
        key: "beforeDestroy",
        value: function beforeDestroy() {}
    }, {
        key: "destroyed",
        value: function destroyed() {}
    }]);
    return CPicker;
}();

exports.default = new CPicker();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPickerPanel: _cPickerPanelWeb2.default, cPickerItem: _cPickerItemWeb2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "LOYP":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callNative = callNative;
exports.listenNative = listenNative;

var _index = __webpack_require__("3T2w");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 初始化通道
_index2.default.initChannel();

function callNative(module, method, args, callback) {
  _index2.default.callNative.apply(_index2.default, arguments);
}

function listenNative(module, method, callback) {
  _index2.default.listenNative.apply(_index2.default, arguments);
}

/***/ }),

/***/ "LtGg":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _index = __webpack_require__("RoY7");

var _index2 = _interopRequireDefault(_index);

var _defineProperty2 = __webpack_require__("S8KF");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _cLoadingfunc = __webpack_require__("xLxh");

var _cLoadingfunc2 = _interopRequireDefault(_cLoadingfunc);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var CLoading = function () {
  function CLoading() {
    (0, _classCallCheck3.default)(this, CLoading);
    this.props = {
      tip: {
        type: String,
        default: 'loading...'
      },
      prefixCls: {
        type: String,
        default: 'cml-loading'
      },
      loading: {
        type: Boolean,
        default: true
      }
    };
    this.data = {
      icon: __webpack_require__("JGbf"),
      rectStyle: '',
      loadingWrapStyle: '',
      containerStyle: 'position: absolute; visibility: hidden',
      //由于获取位置信息在weex端为异步。so先隐藏
      loadingStyle: 'visibility: hidden'
    };
    this.watch = {
      loading: function loading() {
        var _this = this;

        setTimeout(function () {
          _cLoadingfunc2.default.move(_this);
        }, _cLoadingfunc2.default.scheduleTime);
      }
    };
    this.computed = {
      containerClassName: function containerClassName() {
        var prefixCls = this.prefixCls;
        return (0, _classnames2.default)((0, _defineProperty3.default)({}, prefixCls + '-container', true));
      },
      loadImgClassName: function loadImgClassName() {
        var prefixCls = this.prefixCls;
        return (0, _classnames2.default)((0, _defineProperty3.default)({}, prefixCls + '-default', true));
      },
      boxClassName: function boxClassName() {
        var prefixCls = this.prefixCls;
        var loading = this.loading;
        return (0, _classnames2.default)((0, _defineProperty3.default)({}, prefixCls + '-box', !!loading));
      },
      targetClassName: function targetClassName() {
        var prefixCls = this.prefixCls;
        return (0, _classnames2.default)((0, _defineProperty3.default)({}, prefixCls + '-target', true));
      },
      loadTextClassName: function loadTextClassName() {
        var prefixCls = this.prefixCls;
        return (0, _classnames2.default)((0, _defineProperty3.default)({}, prefixCls + '-text', true));
      },
      targetMaskClassName: function targetMaskClassName() {
        var prefixCls = this.prefixCls;
        return (0, _classnames2.default)((0, _defineProperty3.default)({}, prefixCls + '-target-mask', true));
      },
      loadingClassName: function loadingClassName() {
        var prefixCls = this.prefixCls;
        return (0, _classnames2.default)((0, _defineProperty3.default)({}, '' + prefixCls, true));
      },
      loadingWrapClassName: function loadingWrapClassName() {
        var prefixCls = this.prefixCls;
        return (0, _classnames2.default)((0, _defineProperty3.default)({}, prefixCls + '-wrap', true));
      }
    };
  }

  (0, _createClass3.default)(CLoading, [{
    key: 'mounted',
    value: function mounted() {
      var _this2 = this;

      setTimeout(function () {
        (0, _index2.default)(_this2.$refs.mask, _this2).then(function (res) {
          if (res.width > 0 && res.height > 0) {
            _this2.rectStyle = 'width:' + res.width + 'cpx; height: ' + res.height + 'cpx;';
            _this2.loadingWrapStyle = _this2.rectStyle;
            _this2.containerStyle = _this2.rectStyle + '; visibility: visible';
          } else {
            _cLoadingfunc2.default.loadingWrapStyle().then(function (res) {
              _this2.loadingWrapStyle = res;
            });
            _this2.containerStyle = 'position: absolute; visibility: visible; top: 0; left: 0';
          }
          _this2.loadingStyle = 'visibility: visible';

          _cLoadingfunc2.default.move(_this2);
        });
      }, _cLoadingfunc2.default.scheduleTime);
    }
  }]);
  return CLoading;
}();

exports.default = new CLoading();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "Lwr/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pullUpMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_const__ = __webpack_require__("B3mp");


function pullUpMixin(CScroll) {
  CScroll.prototype._initPullUp = function () {
    // must watch scroll in real time
    this.options.probeType = __WEBPACK_IMPORTED_MODULE_0__util_const__["f" /* PROBE_REALTIME */]

    this.pullupWatching = false
    this._watchPullUp()
  }

  CScroll.prototype._watchPullUp = function () {
    if (this.pullupWatching) {
      return
    }
    this.pullupWatching = true
    this.on('scroll', this._checkToEnd)
  }

  CScroll.prototype._checkToEnd = function (pos) {
    const {threshold = 0} = this.options.pullUpLoad
    if (this.movingDirectionY === __WEBPACK_IMPORTED_MODULE_0__util_const__["d" /* DIRECTION_UP */] && pos.y <= (this.maxScrollY + threshold)) {
      // reset pullupWatching status after scroll end.
      this.once('scrollEnd', () => {
        this.pullupWatching = false
      })
      this.trigger('pullingUp')
      this.off('scroll', this._checkToEnd)
    }
  }

  CScroll.prototype.finishPullUp = function () {
    if (this.pullupWatching) {
      this.once('scrollEnd', () => {
        this._watchPullUp()
      })
    } else {
      this._watchPullUp()
    }
  }

  CScroll.prototype.openPullUp = function (config = true) {
    this.options.pullUpLoad = config
    this._initPullUp()
  }

  CScroll.prototype.closePullUp = function () {
    this.options.pullUpLoad = false
    if (!this.pullupWatching) {
      return
    }
    this.pullupWatching = false
    this.off('scroll', this._checkToEnd)
  }
}


/***/ }),

/***/ "M8Ay":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _viewport = __webpack_require__("HtJK");

var idCnt = 0;

exports.default = {
  updated: function updated() {
    var el = this.$el;
    if (!el || el.nodeType !== 1) {
      return;
    }
    if (this._rootId) {
      if (el.className.indexOf('cml-root') <= -1) {
        el.classList.add('cml-root');
        el.classList.add('cml-flx');
        el.setAttribute('data-cml-root-id', this._rootId);
      }
    }

    var tagName = this.$options && this.$options._componentTag;
    var metaUp = chameleon._meta.updated;
    if (!metaUp[tagName]) {
      metaUp[tagName] = 0;
    }
    metaUp[tagName]++;
  },
  mounted: function mounted() {
    var tagName = this.$options && this.$options._componentTag;
    var el = this.$el;
    if (!el || el.nodeType !== 1) {
      return;
    }
    if (typeof chameleon._components[tagName] !== 'undefined') {
      chameleon._components[tagName]++;
    }
    var metaMt = chameleon._meta.mounted;
    if (!metaMt[tagName]) {
      metaMt[tagName] = 0;
    }
    metaMt[tagName]++;

    // when this is the root element of Vue instance.
    if (this === this.$root) {
      var rootId = 'cml-root-' + idCnt++;
      if (!chameleon._root) {
        chameleon._root = {};
      }
      chameleon._root[rootId] = this;
      this._rootId = rootId;
      if (el.nodeType !== 1) {
        return;
      }
      el.classList.add('cml-root');
      el.classList.add('cml-flx');
      el.setAttribute('data-cml-root-id', rootId);

      var _getViewportSize = (0, _viewport.getViewportSize)(),
          viewportHeight = _getViewportSize.viewportHeight;

      el.style.height = viewportHeight + 'px';
    }
  },
  destroyed: function destroyed() {
    var el = this.$el;
    if (!el || el.nodeType !== 1) {
      return;
    }

    if (this._rootId) {
      delete chameleon._root[this._rootId];
      delete this._rootId;
    }
    var tagName = this.$options && this.$options._componentTag;
    if (typeof chameleon._components[tagName] !== 'undefined') {
      chameleon._components[tagName]--;
    }
    var metaDs = chameleon._meta.destroyed;
    if (!metaDs[tagName]) {
      metaDs[tagName] = 0;
    }
    metaDs[tagName]++;
  },


  methods: {}
};

/***/ }),

/***/ "MPvF":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.str2obj = str2obj;
exports.cpx2px = cpx2px;
exports.pxTransform = pxTransform;
exports.cmlStyleTransfer = cmlStyleTransfer;
exports.getValBetweenMaxAndMin = getValBetweenMaxAndMin;
function str2obj(str) {
    var styleAry = str.split(';');
    var obj = {};
    styleAry.forEach(function (element) {
        var classObj = element.split(':');
        var className = String(classObj[0]).replace(/(^\s*)|(\s*)$/g, "");
        var classValue = String(classObj[1]).replace(/(^\s*)|(\s*)$/g, "");
        obj[className] = classValue;
    });
    return obj;
}
function cpx2px(cpx) {
    if (typeof cpx !== 'number') {
        console.error('Parameter must be a number');
        return;
    }
    var viewportWidth = window.innerWidth;
    var px = viewportWidth / 750 * cpx;
    return px;
}
function pxTransform(s) {
    if (!s) return '';
    if (/(-?\d*\.?\d*)cpx/ig.test(s)) {
        return s.replace(/(-?\d*\.?\d*)cpx/ig, function (matchs, $1) {
            return cpx2px(Number($1)) + 'px';
        });
    }
    return s;
}
function cmlStyleTransfer(str) {
    if (!str) return {};
    var styleAry = str.split(';');
    var obj = {};
    styleAry.forEach(function (element) {
        var classObj = element.split(':');
        var className = String(classObj[0]).replace(/(^\s*)|(\s*)$/g, "");
        if (className) {
            var classValue = pxTransform(String(classObj[1]).replace(/(^\s*)|(\s*)$/g, ""));
            obj[className] = classValue;
        }
    });
    return obj;
}

function getValBetweenMaxAndMin(value, maxValue, minValue) {
    if (isNaN(Number(value))) {
        return '';
    }
    if (isNaN(maxValue) || isNaN(minValue)) {
        return value;
    }
    if (maxValue != Infinity && maxValue <= Number(value)) {
        value = String(maxValue);
    }
    if (minValue != -Infinity && minValue >= Number(value)) {
        value = String(minValue);
    }
    return value;
}

/***/ }),

/***/ "Mg3C":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStorage = setStorage;
exports.getStorage = getStorage;
exports.removeStorage = removeStorage;

var _index = __webpack_require__("LOYP");

var moduleName = 'storage';
var methodSet = 'setStorage';
var methodGet = 'getStorage';
var methodRemove = 'removeStorage';

function setStorage(param, cb) {
  /**
   * key
   * value
   */
  (0, _index.callNative)(moduleName, methodSet, param, function (res) {
    /**
     * errno
     * msg
     * data
     */
    cb(res);
  });
}

setStorage.prototype.moduleName = moduleName;
setStorage.prototype.methodName = methodSet;

function getStorage(param, cb) {
  /**
   * key
   */
  (0, _index.callNative)(moduleName, methodGet, param, function (res) {
    /**
     * errno
     * msg
     * data
     */
    cb(res);
  });
}

getStorage.prototype.moduleName = moduleName;
getStorage.prototype.methodName = methodGet;

function removeStorage(param, cb) {
  /**
   * key
   */
  (0, _index.callNative)(moduleName, methodRemove, param, function (res) {
    /**
     * errno
     * msg
     * data
     */
    cb(res);
  });
}

removeStorage.prototype.moduleName = moduleName;
removeStorage.prototype.methodName = methodRemove;

/***/ }),

/***/ "MiwI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "MyKB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "cml-checkbox-group  cml-base cml-view",
      style: _vm._cmlStyleProxy(_vm.horizontalStyle, {
        rem: true,
        scale: 0.5,
        remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
        autoprefixOptions: {
          browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
          grid: false
        }
      }),
      attrs: {}
    },
    _vm._l(_vm.option, function(item, index) {
      return _c("cml-buildin-checkbox", {
        staticClass: " cml-base cml-checkbox",
        attrs: {
          "data-index": index,
          "data-uid": item.uid,
          checked: item.checked,
          label: item.label,
          "group-index": index,
          position: _vm.subPosition,
          disabled: item.disabled ? true : false,
          "data-evt-change": ""
        },
        on: {
          change: function($event) {
            $event.stopPropagation()
            _vm._cmlEventProxy($event, "valueChange")
          }
        }
      })
    })
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-56363c6b", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "N4q2":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("LARG");
var ITERATOR = __webpack_require__("hTSS")('iterator');
var Iterators = __webpack_require__("7unY");
module.exports = __webpack_require__("OzFA").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "NCAW":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _buttonWeb = __webpack_require__("laRC");

var _buttonWeb2 = _interopRequireDefault(_buttonWeb);

var _pageWeb = __webpack_require__("/b3d");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _cHeader = __webpack_require__("h1kM");

var _cHeader2 = _interopRequireDefault(_cHeader);

var _cLoading = __webpack_require__("tcHh");

var _cLoading2 = _interopRequireDefault(_cLoading);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var CLoading = function () {
        function CLoading() {
                (0, _classCallCheck3.default)(this, CLoading);
                this.data = {
                        loading: true
                };
                this.computed = {};
                this.watch = {};
                this.methods = {
                        changeLoading: function changeLoading() {
                                this.loading = !this.loading;
                        }
                };
        }

        (0, _createClass3.default)(CLoading, [{
                key: "beforeCreate",
                value: function beforeCreate() {}
        }, {
                key: "created",
                value: function created() {}
        }, {
                key: "beforeMount",
                value: function beforeMount() {}
        }, {
                key: "beforeDestroy",
                value: function beforeDestroy() {}
        }, {
                key: "destroyed",
                value: function destroyed() {}
        }]);
        return CLoading;
}();

exports.default = new CLoading();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cHeader: _cHeader2.default, cLoading: _cLoading2.default, cmlBuildinButton: _buttonWeb2.default, cmlBuildinPage: _pageWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "NIpK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue__ = __webpack_require__("nQTj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_053b33c2_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_scrollable_vue__ = __webpack_require__("zVv0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("k2OQ")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-053b33c2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_scrollable_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_053b33c2_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_scrollable_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_053b33c2_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_scrollable_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/chameleon-ui-builtin/assets/vue/scrollable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-053b33c2", Component.options)
  } else {
    hotAPI.reload("data-v-053b33c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "NIut":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _scrollable = __webpack_require__("NIpK");

var _scrollable2 = _interopRequireDefault(_scrollable);

var _utils = __webpack_require__("MPvF");

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//

var List = function List() {
  (0, _classCallCheck3.default)(this, List);
  this.props = {
    bottomOffset: {
      // 距底部/右边多远时（单位cpx），触发 scrollbottom 事件
      type: Number,
      default: 0
    },
    bounce: {
      type: Boolean,
      default: true
    },
    cstyle: {
      type: String,
      default: ''
    },
    toElement: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 0
    }
  };
  this.computed = {
    heightPx: function heightPx() {
      if (this.height >= 0) {
        return (0, _utils.cpx2px)(this.height);
      }
      return -1;
    }
  };
  this.methods = {
    scrollEvent: function scrollEvent(e) {
      this.$cmlEmit('onscroll', e);
      this.$cmlEmit('customscroll', e);
    },
    scrolltobottomEvent: function scrolltobottomEvent(e) {
      this.$cmlEmit('scrolltobottom', e);
    }
  };
};

exports.default = new List();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { scrollable: _scrollable2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "NJL6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("SMww");


/***/ }),

/***/ "NLtu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "cml-buildin-page",
    { staticClass: " cml-base cml-page", attrs: { title: "refresh演示" } },
    [
      _c("c-header", {
        staticClass: " cml-base cml-c-header",
        attrs: { title: "refresh" }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container  cml-base cml-view", attrs: {} },
        [
          _c(
            "cml-buildin-scroller",
            {
              staticClass: " cml-base cml-scroller",
              attrs: {
                "scroll-direction": _vm.scrollDirection,
                "bottom-offset": _vm.bottomOffset,
                height: -1,
                "data-evt-scrolltobottom": "",
                "data-evt-customscroll": ""
              },
              on: {
                scrolltobottom: function($event) {
                  _vm._cmlEventProxy($event, "onBottom")
                },
                customscroll: function($event) {
                  _vm._cmlEventProxy($event, "onScroll")
                }
              }
            },
            [
              _c("c-refresh", {
                staticClass: " cml-base cml-c-refresh",
                attrs: { display: _vm.topRefreshing, "data-evt-refresh": "" },
                on: {
                  refresh: function($event) {
                    $event.stopPropagation()
                    _vm._cmlEventProxy($event, "onrefreshUp")
                  }
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.panels, function(item, i) {
                return _c(
                  "div",
                  {
                    staticClass: "cell  cml-base cml-view",
                    attrs: { "data-idx": i, "data-evt-click": "" },
                    on: {
                      click: _vm.$stopOuterA,
                      cml$tap: function($event) {
                        $event.stopPropagation()
                        _vm._cmlEventProxy($event, "change")
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "panel  cml-base cml-view",
                        style: _vm._cmlStyleProxy(item.computedStyle, {
                          rem: true,
                          scale: 0.5,
                          remOptions: {
                            rootValue: { cpx: 75 },
                            minPixelValue: null
                          },
                          autoprefixOptions: {
                            browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                            grid: false
                          }
                        }),
                        attrs: {}
                      },
                      [
                        _c(
                          "span",
                          { staticClass: "text  cml-base cml-text", attrs: {} },
                          [_vm._v(_vm._s(item.label))]
                        )
                      ]
                    )
                  ]
                )
              }),
              _vm._v(" "),
              _vm.page >= _vm.sumPage
                ? _c(
                    "div",
                    {
                      staticClass: "no-more-text  cml-base cml-view",
                      attrs: {}
                    },
                    [
                      _c(
                        "span",
                        { staticClass: " cml-base cml-text", attrs: {} },
                        [_vm._v("没有更多了...")]
                      )
                    ]
                  )
                : _c(
                    "c-refresh",
                    {
                      staticClass: " cml-base cml-c-refresh",
                      attrs: {
                        display: _vm.bottomRefreshing,
                        direction: "bottom",
                        "custom-ui": true,
                        "data-evt-refresh": ""
                      },
                      on: {
                        refresh: function($event) {
                          $event.stopPropagation()
                          _vm._cmlEventProxy($event, "onrefreshDown")
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "loading-text  cml-base cml-view",
                          style: _vm._cmlStyleProxy(_vm.loadingTextStyle, {
                            rem: true,
                            scale: 0.5,
                            remOptions: {
                              rootValue: { cpx: 75 },
                              minPixelValue: null
                            },
                            autoprefixOptions: {
                              browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                              grid: false
                            }
                          }),
                          attrs: {}
                        },
                        [
                          _c(
                            "span",
                            { staticClass: " cml-base cml-text", attrs: {} },
                            [_vm._v("上拉刷新...")]
                          )
                        ]
                      )
                    ]
                  )
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-340e5a13", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "NTY1":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("p06J")('keys');
var uid = __webpack_require__("ucRq");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "NgqT":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("YJhL");
__webpack_require__("iC9F");
module.exports = __webpack_require__("OzFA").Array.from;


/***/ }),

/***/ "NmJD":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _buttonWeb = __webpack_require__("laRC");

var _buttonWeb2 = _interopRequireDefault(_buttonWeb);

var _pageWeb = __webpack_require__("/b3d");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _cHeader = __webpack_require__("h1kM");

var _cHeader2 = _interopRequireDefault(_cHeader);

var _cTip = __webpack_require__("vLra");

var _cTip2 = _interopRequireDefault(_cTip);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var CTip = function () {
  function CTip() {
    (0, _classCallCheck3.default)(this, CTip);
    this.data = {
      showtip1: false,
      showtip2: false,
      direction: "top"
    };
    this.computed = {
      tipStyle: function tipStyle() {
        var style = void 0;
        switch (this.direction) {
          case "top":
            style = "position:absolute;top:0;left: 260cpx;";
            break;
          case "bottom":
            style = "position:absolute;top:164cpx;left: 260cpx;";
            break;
          case "left":
            style = "position:absolute;left:-10cpx;top:93cpx;";
            break;
          case "right":
            style = "position:absolute;left:480cpx;top:93cpx;";
            break;
        }
        return style;
      }
    };
    this.watch = {};
    this.methods = {
      closeTip1: function closeTip1() {
        this.showtip1 = false;
      },
      showTip1: function showTip1() {
        this.showtip1 = true;
      },
      closeTip2: function closeTip2() {
        this.showtip2 = false;
      },
      showTip2: function showTip2() {
        this.direction = "top";
        this.showtip2 = true;
      },
      showTip2Top: function showTip2Top() {
        this.direction = "top";
        this.showtip2 = true;
      },
      showTip2Bottom: function showTip2Bottom() {
        this.direction = "bottom";
        this.showtip2 = true;
      },
      showTip2Left: function showTip2Left() {
        this.direction = "left";
        this.showtip2 = true;
      },
      showTip2Right: function showTip2Right() {
        this.direction = "right";
        this.showtip2 = true;
      }
    };
  }

  (0, _createClass3.default)(CTip, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return CTip;
}();

exports.default = new CTip();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cHeader: _cHeader2.default, cTip: _cTip2.default, cmlBuildinButton: _buttonWeb2.default, cmlBuildinPage: _pageWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "O5Hj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "cml-buildin-page",
    { staticClass: " cml-base cml-page", attrs: { title: "chameleon组件展示" } },
    [
      _c(
        "div",
        {
          staticClass: "titlebar  cml-base cml-view",
          attrs: { slot: "titlebar" },
          slot: "titlebar"
        },
        [
          _c(
            "span",
            { staticClass: "titlebar-text  cml-base cml-text", attrs: {} },
            [_vm._v("chameleon组件展示")]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "index-page  cml-base cml-view", attrs: {} }, [
        _c(
          "div",
          {
            staticClass: "index-body  cml-base cml-view",
            style: _vm._cmlStyleProxy(_vm.bodyComputedStyl, {
              rem: true,
              scale: 0.5,
              remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
              autoprefixOptions: {
                browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                grid: false
              }
            }),
            attrs: {}
          },
          [
            _c(
              "cml-buildin-scroller",
              {
                staticClass: " cml-base cml-scroller",
                attrs: { cstyle: _vm.scrollerStyl, height: -1 }
              },
              [
                _c(
                  "div",
                  {
                    ref: "index-content-wrap",
                    staticClass: "index-content-wrap  cml-base cml-view",
                    style: _vm._cmlStyleProxy(_vm.computedStyle, {
                      rem: true,
                      scale: 0.5,
                      remOptions: {
                        rootValue: { cpx: 75 },
                        minPixelValue: null
                      },
                      autoprefixOptions: {
                        browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                        grid: false
                      }
                    }),
                    attrs: {}
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "index-item-content  cml-base cml-view",
                        attrs: {}
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "index-hd  cml-base cml-view",
                            attrs: {}
                          },
                          [
                            _c("img", {
                              staticClass: "index-logo  cml-base cml-image",
                              attrs: { src: _vm.comLogoSrc }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "index-desc  cml-base cml-view",
                                attrs: {}
                              },
                              [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "index-desc-text  cml-base cml-text",
                                    attrs: {}
                                  },
                                  [
                                    _vm._v(
                                      "以下将展示chameleon自定义组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见chameleon开发文档。"
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "index-bd  cml-base cml-view",
                            attrs: {}
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "kind-list  cml-base cml-view",
                                attrs: {}
                              },
                              _vm._l(_vm.comList, function(item, i) {
                                return _c(
                                  "div",
                                  {
                                    staticClass: " cml-base cml-view",
                                    attrs: {}
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        class:
                                          (item.open
                                            ? "kind-list-item-show"
                                            : "kind-list-item") +
                                          "  cml-base cml-view",
                                        attrs: {}
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            class:
                                              (item.open
                                                ? "kind-list-item-hd-show"
                                                : "kind-list-item-hd") +
                                              "  cml-base cml-view",
                                            attrs: {
                                              id: item.cid,
                                              "data-evt-click": ""
                                            },
                                            on: {
                                              click: _vm.$stopOuterA,
                                              cml$tap: function($event) {
                                                $event.stopPropagation()
                                                _vm._cmlEventProxy(
                                                  $event,
                                                  "kindToggle"
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "kind-list-text  cml-base cml-view",
                                                attrs: {}
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      " cml-base cml-text",
                                                    attrs: {}
                                                  },
                                                  [_vm._v(_vm._s(item.name))]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("img", {
                                              staticClass:
                                                "kind-list-img  cml-base cml-image",
                                              attrs: { src: item.src }
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            class:
                                              (item.open
                                                ? "kind-list-item-bd-show"
                                                : "kind-list-item-bd") +
                                              "  cml-base cml-view",
                                            attrs: {}
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                class:
                                                  (item.open
                                                    ? "navigator-box-show"
                                                    : "navigator-box") +
                                                  "  cml-base cml-view",
                                                attrs: {}
                                              },
                                              _vm._l(item.pages, function(
                                                page,
                                                j
                                              ) {
                                                return _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      " cml-base cml-view",
                                                    attrs: {}
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "navigator  cml-base cml-view",
                                                        attrs: {
                                                          "data-routepath":
                                                            page.path,
                                                          "data-routeurl":
                                                            page.url,
                                                          "data-evt-click": ""
                                                        },
                                                        on: {
                                                          click:
                                                            _vm.$stopOuterA,
                                                          cml$tap: function(
                                                            $event
                                                          ) {
                                                            $event.stopPropagation()
                                                            _vm._cmlEventProxy(
                                                              $event,
                                                              "routeTo"
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "navigator-text  cml-base cml-view",
                                                            attrs: {}
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  " cml-base cml-text",
                                                                attrs: {}
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    page.name
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("img", {
                                                          staticClass:
                                                            "navigator-arrow  cml-base cml-image",
                                                          attrs: {
                                                            src: _vm.arrowIcon
                                                          }
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                )
                                              })
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              })
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "index-item-content  cml-base cml-view",
                        attrs: {}
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "index-hd  cml-base cml-view",
                            attrs: {}
                          },
                          [
                            _c("img", {
                              staticClass: "index-logo  cml-base cml-image",
                              attrs: { src: _vm.apiLogoSrc }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "index-desc  cml-base cml-view",
                                attrs: {}
                              },
                              [
                                _c(
                                  "span",
                                  {
                                    staticClass: " cml-base cml-text",
                                    attrs: {}
                                  },
                                  [
                                    _vm._v(
                                      "以下将演示chameleon接口能力，具体属性参数详见chameleon开发文档。"
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1bad7fbd", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "O6ww":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "OI+Q":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocationInfo = getLocationInfo;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml';
var methodName = 'getLocationInfo';

function getLocationInfo(param, cb) {
  (0, _index.callNative)(moduleName, methodName, param, function (res) {
    /**
     * lat:number
     * lng:number
     */
    cb(res);
  });
}

getLocationInfo.prototype.moduleName = moduleName;
getLocationInfo.prototype.methodName = methodName;

/***/ }),

/***/ "ON4Y":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("b6zB");
module.exports = __webpack_require__("OzFA").Object.setPrototypeOf;


/***/ }),

/***/ "ONZj":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = px2cpx;

var _getWidth = __webpack_require__("09Zy");

var _getWidth2 = _interopRequireDefault(_getWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function px2cpx(px) {

  if (typeof px !== 'number') {
    console.error('Parameter must be a number');
    return;
  }

  var viewportWidth = _getWidth2.default.getWidth();
  var cpx = +(750 / viewportWidth * px).toFixed(3);
  return cpx;
}

/***/ }),

/***/ "OSNL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("3hlP"), __esModule: true };

/***/ }),

/***/ "OYiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "cml-checkbox  cml-base cml-view", attrs: {} },
    [
      _c(
        "div",
        {
          staticClass: "cml-checkbox-wrap  cml-base cml-view",
          attrs: { "data-evt-click": "" },
          on: {
            click: _vm.$stopOuterA,
            cml$tap: function($event) {
              $event.stopPropagation()
              _vm._cmlEventProxy($event, "changeCheck")
            }
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "cml-checkbox-check  cml-base cml-view",
              style: _vm._cmlStyleProxy(_vm.checkStyle, {
                rem: true,
                scale: 0.5,
                remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                autoprefixOptions: {
                  browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                  grid: false
                }
              }),
              attrs: {}
            },
            [
              _c(
                "div",
                { class: _vm.checkClass + "  cml-base cml-view", attrs: {} },
                [
                  _c("img", {
                    staticClass: "inner-icon  cml-base cml-image",
                    attrs: { src: _vm.checkImg }
                  })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "cml-checkbox-label  cml-base cml-text", attrs: {} },
            [_vm._v(_vm._s(_vm.label))]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6c4981c2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "ObkB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-popup",
    {
      staticClass: " cml-base cml-c-popup",
      attrs: { show: _vm.show, mask: _vm.mask }
    },
    [
      _c(
        "div",
        { staticClass: "dialog-content  cml-base cml-view", attrs: {} },
        [
          _vm.showClose
            ? _c(
                "div",
                {
                  staticClass: "dialog-close  cml-base cml-view",
                  attrs: { "data-evt-click": "" },
                  on: {
                    click: _vm.$stopOuterA,
                    cml$tap: function($event) {
                      $event.stopPropagation()
                      _vm._cmlEventProxy($event, "closeTap")
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: " cml-base cml-image",
                    staticStyle: { width: "0.29333rem", height: "0.29333rem" },
                    attrs: { src: _vm.closeSrc }
                  })
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "icon-row  cml-base cml-view", attrs: {} }, [
            _vm.iconUrl
              ? _c("img", {
                  staticClass: "custom-icon  cml-base cml-image",
                  style: _vm._cmlStyleProxy(_vm.computedIconStyle, {
                    rem: true,
                    scale: 0.5,
                    remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                    autoprefixOptions: {
                      browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                      grid: false
                    }
                  }),
                  attrs: { src: _vm.iconUrl }
                })
              : _c(
                  "div",
                  { staticClass: "icon-bg  cml-base cml-view", attrs: {} },
                  [
                    _c("img", {
                      staticClass: "icon  cml-base cml-image",
                      attrs: { src: _vm.iconSrc }
                    })
                  ]
                )
          ]),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "title-row  cml-base cml-text", attrs: {} },
            [_vm._v(_vm._s(_vm.title))]
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "content-row  cml-base cml-text", attrs: {} },
            [_vm._v(_vm._s(_vm.content))]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "btn-row border-top-1px  cml-base cml-view",
              attrs: {}
            },
            [
              _vm.type !== "alert"
                ? [
                    _c(
                      "div",
                      {
                        staticClass:
                          "left-btn-wrap border-right-1px  cml-base cml-view",
                        attrs: { "data-evt-click": "" },
                        on: {
                          click: _vm.$stopOuterA,
                          cml$tap: function($event) {
                            $event.stopPropagation()
                            _vm._cmlEventProxy($event, "cancelTap")
                          }
                        }
                      },
                      [
                        _c(
                          "span",
                          {
                            staticClass: "cancel-text  cml-base cml-text",
                            attrs: {}
                          },
                          [_vm._v(_vm._s(_vm.cancelText))]
                        )
                      ]
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "btn-wrap  cml-base cml-view",
                  attrs: { "data-evt-click": "" },
                  on: {
                    click: _vm.$stopOuterA,
                    cml$tap: function($event) {
                      $event.stopPropagation()
                      _vm._cmlEventProxy($event, "confirmTap")
                    }
                  }
                },
                [
                  _c(
                    "span",
                    {
                      staticClass: "confirm-text  cml-base cml-text",
                      attrs: {}
                    },
                    [_vm._v(_vm._s(_vm.confirmText))]
                  )
                ]
              )
            ],
            2
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7888cc6a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "OuXD":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "Oyr4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("Vbob"), __esModule: true };

/***/ }),

/***/ "OzFA":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.2' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "P586":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show
    ? _c(
        "div",
        {
          staticClass: "c-popup  cml-base cml-view",
          style: _vm._cmlStyleProxy(_vm.containerStyle, {
            rem: true,
            scale: 0.5,
            remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
            autoprefixOptions: {
              browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
              grid: false
            }
          }),
          attrs: {}
        },
        [
          _c("div", {
            class: _vm.maskClass + "  cml-base cml-view",
            attrs: { "data-evt-click": "" },
            on: {
              click: _vm.$stopOuterA,
              cml$tap: function($event) {
                $event.stopPropagation()
                _vm._cmlEventProxy($event, "closeevent")
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "c-popup-content  cml-base cml-view",
              style: _vm._cmlStyleProxy(_vm.contentStyle, {
                rem: true,
                scale: 0.5,
                remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                autoprefixOptions: {
                  browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                  grid: false
                }
              }),
              attrs: { "data-evt-click": "" },
              on: {
                click: _vm.$stopOuterA,
                cml$tap: function($event) {
                  $event.stopPropagation()
                  _vm._cmlEventProxy($event, "contentTap")
                }
              }
            },
            [_vm._t("default", null, {})],
            2
          )
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ede7a05e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "PAoH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/loading_1f26c50.gif";

/***/ }),

/***/ "PGoE":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "PM4n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "cml-buildin-page",
    { staticClass: " cml-base cml-page", attrs: { title: "c-actionsheet演示" } },
    [
      _c("c-header", {
        staticClass: " cml-base cml-c-header",
        attrs: { title: "c-actionsheet" }
      }),
      _vm._v(" "),
      _c("cml-buildin-button", {
        staticClass: "btn  cml-base cml-button",
        attrs: { text: "ActionSheet", "data-evt-onclick": "" },
        on: {
          onclick: function($event) {
            _vm._cmlEventProxy($event, "showActionSheet")
          }
        }
      }),
      _vm._v(" "),
      _c("cml-buildin-button", {
        staticClass: "btn  cml-base cml-button",
        attrs: { text: "ActionSheet - active", "data-evt-onclick": "" },
        on: {
          onclick: function($event) {
            _vm._cmlEventProxy($event, "showActionSheetActive")
          }
        }
      }),
      _vm._v(" "),
      _c("cml-buildin-button", {
        staticClass: "btn  cml-base cml-button",
        attrs: { text: "ActionSheet - pickerStyle", "data-evt-onclick": "" },
        on: {
          onclick: function($event) {
            _vm._cmlEventProxy($event, "showActionSheetPicker")
          }
        }
      }),
      _vm._v(" "),
      _c("c-actionsheet", {
        staticClass: " cml-base cml-c-actionsheet",
        attrs: {
          show: _vm.actionShow,
          title: _vm.title,
          list: _vm.list,
          active: _vm.active,
          "cancel-txt": "取消",
          "picker-style": _vm.pickerStyle,
          "data-evt-cancel": "",
          "data-evt-select": ""
        },
        on: {
          cancel: function($event) {
            _vm._cmlEventProxy($event, "cancel")
          },
          select: function($event) {
            _vm._cmlEventProxy($event, "select")
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f52356a2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "PUNG":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/close_816a4e2.png";

/***/ }),

/***/ "PVp0":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("/b3d");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _cHeader = __webpack_require__("h1kM");

var _cHeader2 = _interopRequireDefault(_cHeader);

var _cRadioGroup = __webpack_require__("T3tf");

var _cRadioGroup2 = _interopRequireDefault(_cRadioGroup);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CRadio = function () {
  function CRadio() {
    (0, _classCallCheck3.default)(this, CRadio);
    this.data = {
      radioGroupOption1: [{
        checked: false,
        label: 'Option1'
      }, {
        checked: false,
        label: 'Option2'
      }, {
        checked: false,
        label: 'Option3',
        disabled: true
      }],
      radioSelect1: '',
      radioGroupOption2: [{
        checked: true,
        label: 'Option1'
      }, {
        checked: false,
        label: 'Option2'
      }, {
        checked: false,
        label: 'Option3',
        disabled: true
      }],
      radioSelect2: 'Option1',
      radioGroupOption3: [{
        checked: true,
        label: 'Option1'
      }, {
        checked: false,
        label: 'Option2'
      }, {
        checked: false,
        label: 'Option3',
        disabled: true
      }],
      radioSelect3: 'Option1'
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      groupChangeHandler1: function groupChangeHandler1(e) {
        this.radioSelect1 = this.radioGroupOption1[e.detail.index].label;
      },
      groupChangeHandler2: function groupChangeHandler2(e) {
        this.radioSelect2 = this.radioGroupOption2[e.detail.index].label;
      },
      groupChangeHandler3: function groupChangeHandler3(e) {
        this.radioSelect3 = this.radioGroupOption3[e.detail.index].label;
      }
    };
  }

  (0, _createClass3.default)(CRadio, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return CRadio;
}(); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new CRadio();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cHeader: _cHeader2.default, cRadioGroup: _cRadioGroup2.default, cmlBuildinPage: _pageWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "Pn5V":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyNames = __webpack_require__("xT8E");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

exports.copyProtoProperty = copyProtoProperty;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
/**
 * 原型上的方法放到对象上
 * @param  {Object} obj   待添加属性对象
 * @param  {Object} proto 差异方法
 * @return {Object}       修改后值
 */
function copyProtoProperty() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var EXPORT_OBJ = obj;
  var EXPORT_PROTO = EXPORT_OBJ.__proto__;

  if (EXPORT_PROTO.constructor !== Object) {
    (0, _getOwnPropertyNames2.default)(EXPORT_PROTO).forEach(function (key) {
      if (!/constructor|prototype|length/ig.test(key)) {
        // 原型上有自身没有的属性 放到自身上
        if (!EXPORT_OBJ.hasOwnProperty(key)) {
          EXPORT_OBJ[key] = EXPORT_PROTO[key];
        }
      }
    });
  }

  return EXPORT_OBJ;
}

/***/ }),

/***/ "Pta8":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("StTd");
var aFunction = __webpack_require__("w1p+");
var SPECIES = __webpack_require__("hTSS")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "Q4lj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scrollable",
    {
      staticClass: " cml-base cml-scrollable",
      attrs: {
        cstyle: _vm.cstyle,
        bottomOffset: _vm.bottomOffset,
        scrollDirection: _vm.scrollDirection,
        bounce: _vm.bounce,
        height: _vm.heightPx,
        width: _vm.widthPx,
        template: "scroller",
        scrollTop: _vm.scrollTopPx,
        scrollLeft: _vm.scrollLeftPx,
        "data-evt-onscroll": "",
        "data-evt-scrolltobottom": ""
      },
      on: { onscroll: _vm.scrollEvent, scrolltobottom: _vm.scrolltobottomEvent }
    },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ba8aae36", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "QRY2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/right_c8f477d.png";

/***/ }),

/***/ "QWPD":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = __webpack_require__("IZaB");

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _checkbox = __webpack_require__("/1q5");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkboxgroup = function () {
  function Checkboxgroup() {
    (0, _classCallCheck3.default)(this, Checkboxgroup);
    this.props = {
      option: {
        type: Array,
        default: []
      },
      position: {
        type: String,
        default: 'left'
      },
      horizontal: {
        type: Boolean,
        default: false
      }
    };
    this.data = {};
    this.computed = {
      horizontalStyle: function horizontalStyle() {
        if (this.horizontal) {
          return 'display:inline-flex;flex-direction:row;align-items:center;flex-wrap:wrap;flex:1;';
        }
        return '';
      },
      subPosition: function subPosition() {
        // 水平排列默认位置失效
        if (this.position === 'right' && !this.horizontal) {
          return 'right';
        }
        return 'left';
      }
    };
    this.watch = {};
    this.methods = {
      valueChange: function valueChange(e) {
        var groups = JSON.parse((0, _stringify2.default)(this.option));
        var value = groups[e.detail.index];
        value = {
          checked: e.detail.value,
          label: value.label,
          disabled: value.disabled
        };
        groups[e.detail.index] = value;
        var selected = [];
        groups.forEach(function (item) {
          if (item.checked) {
            selected.push(item.label);
          }
        });
        this.$cmlEmit('groupchange', {
          index: e.detail.index,
          value: groups,
          selected: selected
        });
      }
    };
  }

  (0, _createClass3.default)(Checkboxgroup, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {
      this.checkList = JSON.parse((0, _stringify2.default)(this.option));
    }
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);
  return Checkboxgroup;
}(); //
//
//
//
//
//
//
//

exports.default = new Checkboxgroup();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cmlBuildinCheckbox: _checkbox2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "QXSA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "QYOt":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.event = exports.base = undefined;

var _base = __webpack_require__("M8Ay");

var _base2 = _interopRequireDefault(_base);

var _event = __webpack_require__("4Ypl");

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.base = _base2.default;
exports.event = _event2.default;

/***/ }),

/***/ "Qr3T":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyNames = __webpack_require__("xT8E");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

exports.copyProtoProperty = copyProtoProperty;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 原型上的方法放到对象上
 * @param  {Object} obj   待添加属性对象
 * @param  {Object} proto 差异方法
 * @return {Object}       修改后值
 */
function copyProtoProperty() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var EXPORT_OBJ = obj;
  var EXPORT_PROTO = EXPORT_OBJ.__proto__;

  if (EXPORT_PROTO.constructor !== Object) {
    (0, _getOwnPropertyNames2.default)(EXPORT_PROTO).forEach(function (key) {
      if (!/constructor|prototype|length/ig.test(key)) {
        //原型上有自身没有的属性 放到自身上
        if (!EXPORT_OBJ.hasOwnProperty(key)) {
          EXPORT_OBJ[key] = EXPORT_PROTO[key];
        }
      }
    });
  }

  return EXPORT_OBJ;
}

/***/ }),

/***/ "Qz3K":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("WmdX");
__webpack_require__("YJhL");
__webpack_require__("0JVX");
__webpack_require__("kOO5");
__webpack_require__("WtzB");
__webpack_require__("myBf");
module.exports = __webpack_require__("OzFA").Promise;


/***/ }),

/***/ "R0Nl":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIos = isIos;
exports.isAndroid = isAndroid;
exports.compareVersion = compareVersion;
/**
 * 存放关于所处环境判断的方法
 */
var ua = window.navigator.userAgent;

/**
 * 判断是ios
 * @returns {boolean}
 */
function isIos() {
  return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

/**
 * 判断是安卓
 * @returns {boolean}
 */
function isAndroid() {
  return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
}

/**
 * 比较版本号
 * @param {String} v1 版本号1
 * @param {String} symb 比较符
 * @param {String} v2 版本号2
 */
function compareVersion(v1, symb, v2) {
  v1 = parseVersion(v1);
  v2 = parseVersion(v2);
  if (symb.indexOf('=') !== -1 && v1 === v2) {
    return true;
  }
  if (symb.indexOf('>') !== -1 && v1 > v2) {
    return true;
  }
  if (symb.indexOf('<') !== -1 && v1 < v2) {
    return true;
  }
  return false;
}

function parseVersion() {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  version = version.split('.');
  version.length = 4;

  var ret = [];
  version.forEach(function (n) {
    n = n * 1;
    if (n) {
      ret.push(n >= 10 ? n : '0' + n);
    } else {
      ret.push('00');
    }
  });
  return parseInt(ret.join(''), 10);
}

/***/ }),

/***/ "R2s1":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("EJ14");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "RA/h":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("StTd");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "RMKk":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSDKInfo = getSDKInfo;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml';
var methodName = 'getSDKInfo';

function getSDKInfo(param, cb) {
  (0, _index.callNative)(moduleName, methodName, param, cb);
}

getSDKInfo.prototype.moduleName = moduleName;
getSDKInfo.prototype.methodName = methodName;

/***/ }),

/***/ "RjZH":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("YJhL");
__webpack_require__("0JVX");
module.exports = __webpack_require__("ShPv").f('iterator');


/***/ }),

/***/ "RoY7":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__("1iTB");

var _promise2 = _interopRequireDefault(_promise);

exports.default = getRect;

var _index = __webpack_require__("jzoE");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("z4ZC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRect(ref, context, scrollerBox) {
  return new _promise2.default(function (resolve, reject) {
    var refObj = (0, _utils.getRefObj)(ref);
    refObj.context = context;
    refObj.scrollerBox = scrollerBox;
    _index2.default.getRect(refObj, function (res) {
      resolve(res);
    });
  });
}

/***/ }),

/***/ "RuVk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/selected_520dcc8.png";

/***/ }),

/***/ "RwSr":
/***/ (function(module, exports, __webpack_require__) {

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

var _app = __webpack_require__("v8KS");

var _app2 = _interopRequireDefault(_app);

var _index = __webpack_require__("IcnI");

var _index2 = _interopRequireDefault(_index);

var _$ROUTER = __webpack_require__("sufT");

var _$ROUTER2 = _interopRequireDefault(_$ROUTER);

var _routerConfig = __webpack_require__("oJVY");

var _routerConfig2 = _interopRequireDefault(_routerConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chameleonRuntime2.default.bootstrap({ app: _app2.default, store: _index2.default, router: _$ROUTER2.default, routerConfig: _routerConfig2.default });

/***/ }),

/***/ "Rwfi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ease = {
  // easeOutQuint
  swipe: {
    style: 'cubic-bezier(0.23, 1, 0.32, 1)',
    fn: function (t) {
      return 1 + (--t * t * t * t * t)
    }
  },
  // easeOutQuard
  swipeBounce: {
    style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    fn: function (t) {
      return t * (2 - t)
    }
  },
  // easeOutQuart
  bounce: {
    style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    fn: function (t) {
      return 1 - (--t * t * t * t)
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ease;



/***/ }),

/***/ "S6Er":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "pane-root  cml-base cml-view", attrs: {} }, [
    _c(
      "div",
      {
        staticClass: "pane-wrap  cml-base cml-view",
        style: _vm._cmlStyleProxy(_vm.paneWrap, {
          rem: true,
          scale: 0.5,
          remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
          autoprefixOptions: {
            browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
            grid: false
          }
        }),
        attrs: {}
      },
      [_vm._t("default", null, {})],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b17bd8ea", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "S8KF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("awtq");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "SCZj":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "SMww":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("isOg");
var createDesc = __webpack_require__("bYFs");
module.exports = __webpack_require__("yfK2") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "SQbs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = momentum;
function momentum(current, start, time, lowerMargin, upperMargin, wrapperSize, options) {
  let distance = current - start
  let speed = Math.abs(distance) / time

  let {deceleration, itemHeight, swipeBounceTime, wheel, swipeTime} = options
  let duration = swipeTime
  let rate = wheel ? 4 : 15

  let destination = current + speed / deceleration * (distance < 0 ? -1 : 1)

  if (wheel && itemHeight) {
    destination = Math.round(destination / itemHeight) * itemHeight
  }

  if (destination < lowerMargin) {
    destination = wrapperSize ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - (wrapperSize / rate * speed)) : lowerMargin
    duration = swipeBounceTime
  } else if (destination > upperMargin) {
    destination = wrapperSize ? Math.min(upperMargin + wrapperSize / 4, upperMargin + wrapperSize / rate * speed) : upperMargin
    duration = swipeBounceTime
  }

  return {
    destination: Math.round(destination),
    duration
  }
}


/***/ }),

/***/ "SQnF":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "SRKA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "SUxG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("lHTR");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "ShPv":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("hTSS");


/***/ }),

/***/ "StTd":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("OuXD");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "T3tf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml__ = __webpack_require__("ogOt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c408365a_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml__ = __webpack_require__("eRbF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("soxk")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c408365a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c408365a_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c408365a_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_radio_group_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-radio-group/c-radio-group.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c408365a", Component.options)
  } else {
    hotAPI.reload("data-v-c408365a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "T6Uw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "TG55":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("xCCz");
var $entries = __webpack_require__("ykF7")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "TMJ/":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("PGoE");
var createDesc = __webpack_require__("bYFs");
var toIObject = __webpack_require__("dkPk");
var toPrimitive = __webpack_require__("w7d5");
var has = __webpack_require__("JAUT");
var IE8_DOM_DEFINE = __webpack_require__("xrry");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("yfK2") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "TWKx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__ = __webpack_require__("ZaHq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_23e4a877_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__ = __webpack_require__("TtUT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("hCbn")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-23e4a877"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_23e4a877_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_23e4a877_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_radio_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/chameleon-ui-builtin/components/radio/radio.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23e4a877", Component.options)
  } else {
    hotAPI.reload("data-v-23e4a877", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "TdLX":
/***/ (function(module, exports) {

var _ = module.exports = {};

_.getStyleKeyValue = function (declaration) {
  var colonIndex = declaration.indexOf(':');
  var key = declaration.slice(0, colonIndex);
  var value = declaration.slice(colonIndex + 1);
  return {
    key: key, value: value
  };
};

/***/ }),

/***/ "TtUT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cml-radio  cml-base cml-view", attrs: {} }, [
    _c(
      "div",
      {
        staticClass: "cml-radio-wrap  cml-base cml-view",
        attrs: { "data-evt-click": "" },
        on: {
          click: _vm.$stopOuterA,
          cml$tap: function($event) {
            $event.stopPropagation()
            _vm._cmlEventProxy($event, "changeSelect")
          }
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "cml-radio-select  cml-base cml-view",
            style: _vm._cmlStyleProxy(_vm.radioStyle, {
              rem: true,
              scale: 0.5,
              remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
              autoprefixOptions: {
                browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                grid: false
              }
            }),
            attrs: {}
          },
          [
            _c("div", {
              class: _vm.radioClass + "  cml-base cml-view",
              attrs: {}
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "span",
          { staticClass: "cml-radio-label  cml-base cml-text", attrs: {} },
          [_vm._v(_vm._s(_vm.label))]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-23e4a877", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "Twpi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: " cml-base cml-view", attrs: {} }, [
    _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
      _vm._v("Modal")
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-12ac841e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "U5MX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-popup",
    {
      staticClass: " cml-base cml-c-popup",
      attrs: { show: _vm.show, position: "bottom", "data-evt-close": "" },
      on: {
        close: function($event) {
          _vm._cmlEventProxy($event, "cancelclick")
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "action-wrap  cml-base cml-view", attrs: {} },
        [
          _c(
            "div",
            { staticClass: "action-header  cml-base cml-view", attrs: {} },
            [
              _c(
                "span",
                {
                  staticClass: "action-header-text  cml-base cml-text",
                  style: _vm._cmlStyleProxy(_vm.actionHeaderStyle, {
                    rem: true,
                    scale: 0.5,
                    remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                    autoprefixOptions: {
                      browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                      grid: false
                    }
                  }),
                  attrs: {}
                },
                [_vm._v(_vm._s(_vm.title))]
              ),
              _vm._v(" "),
              _vm.pickerStyle
                ? _c(
                    "div",
                    {
                      staticClass: "cancel-wrap  cml-base cml-view",
                      attrs: { "data-evt-click": "" },
                      on: {
                        click: _vm.$stopOuterA,
                        cml$tap: function($event) {
                          $event.stopPropagation()
                          _vm._cmlEventProxy($event, "cancelclick")
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass: "cancel-text  cml-base cml-text",
                          style: _vm._cmlStyleProxy(_vm.actionCancelStyle, {
                            rem: true,
                            scale: 0.5,
                            remOptions: {
                              rootValue: { cpx: 75 },
                              minPixelValue: null
                            },
                            autoprefixOptions: {
                              browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                              grid: false
                            }
                          }),
                          attrs: {}
                        },
                        [_vm._v(_vm._s(_vm.cancelTxt))]
                      )
                    ]
                  )
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "action-content  cml-base cml-view",
              style: _vm._cmlStyleProxy(_vm.actionContentStyle, {
                rem: true,
                scale: 0.5,
                remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                autoprefixOptions: {
                  browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                  grid: false
                }
              }),
              attrs: {}
            },
            [
              _c(
                "cml-buildin-list",
                {
                  staticClass: "action-list  cml-base cml-list",
                  attrs: { height: _vm.listHeight }
                },
                _vm._l(_vm.list, function(item, i) {
                  return _c(
                    "div",
                    {
                      staticClass: "action-list-item  cml-base cml-cell",
                      attrs: {
                        "data-idx": i,
                        "data-value": item,
                        "data-evt-click": ""
                      },
                      on: {
                        click: _vm.$stopOuterA,
                        cml$tap: function($event) {
                          $event.stopPropagation()
                          _vm._cmlEventProxy($event, "itemClick")
                        }
                      }
                    },
                    [
                      i === _vm.active
                        ? _c(
                            "span",
                            {
                              staticClass: "text-active  cml-base cml-text",
                              style: _vm._cmlStyleProxy(_vm.activeTextStyle, {
                                rem: true,
                                scale: 0.5,
                                remOptions: {
                                  rootValue: { cpx: 75 },
                                  minPixelValue: null
                                },
                                autoprefixOptions: {
                                  browsers: [
                                    "> 0.1%",
                                    "ios >= 8",
                                    "not ie < 12"
                                  ],
                                  grid: false
                                }
                              }),
                              attrs: {}
                            },
                            [_vm._v(_vm._s(item))]
                          )
                        : _c(
                            "span",
                            {
                              staticClass: "text  cml-base cml-text",
                              style: _vm._cmlStyleProxy(_vm.textStyle, {
                                rem: true,
                                scale: 0.5,
                                remOptions: {
                                  rootValue: { cpx: 75 },
                                  minPixelValue: null
                                },
                                autoprefixOptions: {
                                  browsers: [
                                    "> 0.1%",
                                    "ios >= 8",
                                    "not ie < 12"
                                  ],
                                  grid: false
                                }
                              }),
                              attrs: {}
                            },
                            [_vm._v(_vm._s(item))]
                          )
                    ]
                  )
                })
              )
            ],
            1
          ),
          _vm._v(" "),
          !_vm.pickerStyle
            ? [
                _c("div", {
                  staticClass: "action-space  cml-base cml-view",
                  attrs: {}
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "cancel-btn  cml-base cml-text",
                    style: _vm._cmlStyleProxy(_vm.actionCancelStyle, {
                      rem: true,
                      scale: 0.5,
                      remOptions: {
                        rootValue: { cpx: 75 },
                        minPixelValue: null
                      },
                      autoprefixOptions: {
                        browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                        grid: false
                      }
                    }),
                    attrs: { "data-evt-click": "" },
                    on: {
                      click: _vm.$stopOuterA,
                      cml$tap: function($event) {
                        $event.stopPropagation()
                        _vm._cmlEventProxy($event, "cancelclick")
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.cancelTxt))]
                )
              ]
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3dc8254b", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "U79J":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var INDEX_DESC_NAME = exports.INDEX_DESC_NAME = 'INDEX_DESC_NAME';
var INDEX_DESC_AGE = exports.INDEX_DESC_AGE = 'INDEX_DESC_AGE';

/***/ }),

/***/ "UEK2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "UJIE":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var CTip = function CTip() {
  (0, _classCallCheck3.default)(this, CTip);
  this.props = {
    show: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: "top" //bottom, left, right
    },
    closeUrl: {
      type: String,
      default: __webpack_require__("/YlL")
    },
    offsetLeft: {
      type: Number,
      default: 0
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetRight: {
      type: Number,
      default: 0
    },
    offsetBottom: {
      type: Number,
      default: 0
    }
  };
  this.data = {
    iconMap: {
      left: __webpack_require__("WDXh"),
      right: __webpack_require__("QRY2"),
      top: __webpack_require__("gPXw"),
      bottom: __webpack_require__("o4Nx")
    }
  };
  this.computed = {
    angleImg: function angleImg() {
      return this.iconMap[this.direction];
    },
    tipStyle: function tipStyle() {
      var style = void 0;
      switch (this.direction) {
        case 'top':
          if (this.offsetLeft || this.offsetRight) {
            style = "padding-bottom: 16cpx;";
          } else {
            style = "flex-direction: column-reverse;";
          }
          break;
        case 'right':
          if (this.offsetTop || this.offsetBottom) {
            style = "padding-left: 16cpx;";
          } else {
            style = "flex-direction: row;";
          }
          break;
        case 'bottom':
          if (this.offsetLeft || this.offsetRight) {
            style = "padding-top: 16cpx;";
          } else {
            style = 'flex-direction: column;';
          }
          break;
        case 'left':
          if (this.offsetTop || this.offsetBottom) {
            style = "padding-right: 16cpx;";
          } else {
            style = 'flex-direction: row-reverse;';
          }
          break;
      }
      return style;
    },
    angleStyle: function angleStyle() {
      var style = void 0;
      switch (this.direction) {
        case 'top':
          if (this.offsetLeft || this.offsetRight) {
            style = "position: absolute; bottom: 0;width: 32cpx; height: 16cpx;";
            if (this.offsetLeft) {
              style = style + ("left:" + this.offsetLeft + "cpx;");
            }
            if (this.offsetRight) {
              style = style + ("right:" + this.offsetRight + "cpx;");
            }
          } else {
            style = "width: 32cpx; height: 16cpx;";
          }
          break;
        case 'right':
          if (this.offsetTop || this.offsetBottom) {
            style = "position: absolute; left: 0;width: 16cpx; height: 32cpx;";
            if (this.offsetTop) {
              style = style + ("top:" + this.offsetTop + "cpx;");
            }
            if (this.offsetBottom) {
              style = style + ("bottom:" + this.offsetBottom + "cpx;");
            }
          } else {
            style = "width: 16cpx; height: 32cpx;";
          }
          break;
        case 'bottom':
          if (this.offsetLeft || this.offsetRight) {
            style = "position: absolute; top: 0;width: 32cpx; height: 16cpx;";
            if (this.offsetLeft) {
              style = style + ("left:" + this.offsetLeft + "cpx;");
            }
            if (this.offsetRight) {
              style = style + ("right:" + this.offsetRight + "cpx;");
            }
          } else {
            style = "width: 32cpx; height: 16cpx;";
          }
          break;
        case 'left':
          if (this.offsetTop || this.offsetBottom) {
            style = "position: absolute; right: 0;width: 16cpx; height: 32cpx;";
            if (this.offsetTop) {
              style = style + ("top:" + this.offsetTop + "cpx;");
            }
            if (this.offsetBottom) {
              style = style + ("bottom:" + this.offsetBottom + "cpx;");
            }
          } else {
            style = "width: 16cpx; height: 32cpx;";
          }
          break;
      }
      return style;
    }
  };
  this.watch = {};
  this.methods = {
    closeTap: function closeTap() {
      this.$cmlEmit("close");
    }
  };
};

exports.default = new CTip();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "US/B":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("9zL9"), __esModule: true };

/***/ }),

/***/ "UTAz":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "Ud/e":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getViewportSize = getViewportSize;
function getViewportSize() {
  var viewportWidth = 0;
  var viewportHeight = 0;

  var documentElementClientWidth = document.documentElement && document.documentElement.clientWidth;
  var documentElementClientHeight = document.documentElement && document.documentElement.clientHeight;
  var bodyClientWidth = document.body && document.body.clientWidth;
  var bodyClientHeight = document.body && document.body.clientHeight;

  viewportWidth = window.innerWidth || documentElementClientWidth || bodyClientWidth;
  viewportHeight = window.innerHeight || documentElementClientHeight || bodyClientHeight;

  return {
    viewportWidth: viewportWidth,
    viewportHeight: viewportHeight
  };
}

/***/ }),

/***/ "UjVw":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _getters = __webpack_require__("pKUO");

var _getters2 = _interopRequireDefault(_getters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({}, _getters2.default);

/***/ }),

/***/ "Urzf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("6E5I");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("Oyr4");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("lHTR");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "VC+R":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VOAO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VWiq":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("mrKC");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _index2.default;

/***/ }),

/***/ "Vbob":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("gASe");
var $Object = __webpack_require__("OzFA").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "VnQQ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navigateTo;

var _index = __webpack_require__("p4KU");

var _index2 = _interopRequireDefault(_index);

var _utils = __webpack_require__("z4ZC");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function navigateTo(opt) {
  // 转换为字符串通过多态不支持object，需改
  var query = (0, _utils.queryStringify)(opt.query) || '';
  var path = opt.path || '';
  var url = opt.url || '';

  // 不能通过直接转换类型对opt.query重新赋值的操作, 否则会造成opt原始传入对象数据被篡改的问题
  _index2.default.navigateTo({
    path: path,
    url: url,
    query: query
  });
}

/***/ }),

/***/ "VqZ7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml__ = __webpack_require__("NCAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1364bed6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml__ = __webpack_require__("XX3V");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("iDk1")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1364bed6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1364bed6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1364bed6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/COMP/c-loading/c-loading.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1364bed6", Component.options)
  } else {
    hotAPI.reload("data-v-1364bed6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "WAkV":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("isOg");
var anObject = __webpack_require__("StTd");
var getKeys = __webpack_require__("YKc4");

module.exports = __webpack_require__("yfK2") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "WDXh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/left_0ac0eaf.png";

/***/ }),

/***/ "WGTs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: _vm.cTabsItem + "  cml-base cml-view",
      attrs: { "data-evt-click": "" },
      on: {
        click: _vm.$stopOuterA,
        cml$tap: function($event) {
          $event.stopPropagation()
          _vm._cmlEventProxy($event, "handleTabTap")
        }
      }
    },
    [
      _vm.tab.prefixStyle
        ? _c("div", {
            staticClass: " cml-base cml-view",
            style: _vm._cmlStyleProxy(_vm.finalPrefix, {
              rem: true,
              scale: 0.5,
              remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
              autoprefixOptions: {
                browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                grid: false
              }
            }),
            attrs: {}
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: " cml-base cml-text",
          style: _vm._cmlStyleProxy(_vm.finalLabel, {
            rem: true,
            scale: 0.5,
            remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
            autoprefixOptions: {
              browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
              grid: false
            }
          }),
          attrs: {}
        },
        [_vm._v(_vm._s(_vm.tab.label))]
      ),
      _vm._v(" "),
      _vm.tab.suffixStyle
        ? _c("div", {
            staticClass: " cml-base cml-view",
            style: _vm._cmlStyleProxy(_vm.finalSuffix, {
              rem: true,
              scale: 0.5,
              remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
              autoprefixOptions: {
                browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                grid: false
              }
            }),
            attrs: {}
          })
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-47f2caaa", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "WQ1V":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("5FFm");
var $getPrototypeOf = __webpack_require__("ryNh");

__webpack_require__("WcAg")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "WcAg":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("xCCz");
var core = __webpack_require__("OzFA");
var fails = __webpack_require__("lt2H");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "WgSU":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__("F6Tz");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("SUxG");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Urzf");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseOptionsTransformer = __webpack_require__("46z+");

var _BaseOptionsTransformer2 = _interopRequireDefault(_BaseOptionsTransformer);

var _type = __webpack_require__("lNMv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// web&&weex options transform 基类
var WexOptTransformer = function (_BaseOptionsTransform) {
  (0, _inherits3.default)(WexOptTransformer, _BaseOptionsTransform);

  function WexOptTransformer(config) {
    (0, _classCallCheck3.default)(this, WexOptTransformer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WexOptTransformer.__proto__ || (0, _getPrototypeOf2.default)(WexOptTransformer)).call(this, config));

    _this.needAddHookMixin = config.needAddHookMixin;
    return _this;
  }

  (0, _createClass3.default)(WexOptTransformer, [{
    key: 'init',
    value: function init() {
      this.transformData();
      this.needAddHookMixin && this.addHookMixin();
    }

    // 对象属性 `data` 的 映射

  }, {
    key: 'transformData',
    value: function transformData() {
      if (this.options['data']) {
        var _temp = this.options['data'];

        this.options['data'] = function () {
          return (0, _extends3.default)({}, _temp);
        };
      }
    }
  }, {
    key: 'addHookMixin',
    value: function addHookMixin() {
      var _this2 = this;

      if (!this.hooks || !this.hooks.length) return;

      var self = this;

      this.hooks.forEach(function (key) {
        var hook = _this2.options[key];
        hook && (_this2.options[key] = function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var result = void 0;

          if ((0, _type.type)(hook) === 'Function') {
            switch (key) {
              case 'beforeCreate':
                // 钩子函数参数mixin
                args = self.beforeCreateArgsMixin ? self.beforeCreateArgsMixin.apply(this, args) : args;
                break;
              default:
                break;
            }
            // 这里的 this 是指向运行时上下文的
            result = hook.apply(this, args);
          }

          return result;
        });
      });
    }
  }]);
  return WexOptTransformer;
}(_BaseOptionsTransformer2.default);

exports.default = WexOptTransformer;

/***/ }),

/***/ "Wh0r":
/***/ (function(module, exports, __webpack_require__) {

var _entries = __webpack_require__("2qtJ");

var _entries2 = _interopRequireDefault(_entries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = {};
module.exports = _;
// 将字符串中的 单引号变成 双引号；
_.singlequot2doublequot = function (value) {
  return value.replace(/['']/g, '"');
};
// 用于将css样式值中的重复样式去掉
_.uniqueStyle = function (content) {
  var uniqueStyleKeyValue = {};
  var splitStyleKeyValue = content.split(';').filter(function (item) {
    return !!item.trim();
  });
  splitStyleKeyValue.forEach(function (declaration) {
    var _$getStyleKeyValue = _.getStyleKeyValue(declaration),
        key = _$getStyleKeyValue.key,
        value = _$getStyleKeyValue.value;

    if (!key || !value) {
      throw new Error('please check if the style that you write is correct');
    }
    uniqueStyleKeyValue[key] = value;
  });
  return (0, _entries2.default)(uniqueStyleKeyValue).map(function (keyValue) {
    return keyValue.join(':');
  }).join(';');
};
// 用于删除css样式的注释； /*width:100px;*/ ==> ''
_.disappearCssComment = function (content) {
  var commentReg = /\/\*[\s\S]*?\*\//g;
  return content.replace(commentReg, function (match) {
    return '';
  });
};
_.getStyleKeyValue = function (declaration) {
  var colonIndex = declaration.indexOf(':');
  var key = declaration.slice(0, colonIndex).trim();
  var value = declaration.slice(colonIndex + 1).trim();
  return {
    key: key, value: value
  };
};

/***/ }),

/***/ "WmdX":
/***/ (function(module, exports) {



/***/ }),

/***/ "WtzB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("xCCz");
var core = __webpack_require__("OzFA");
var global = __webpack_require__("tRKg");
var speciesConstructor = __webpack_require__("Pta8");
var promiseResolve = __webpack_require__("/VIj");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "WwJq":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("StTd");
var dPs = __webpack_require__("WAkV");
var enumBugKeys = __webpack_require__("pI9x");
var IE_PROTO = __webpack_require__("NTY1")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("wUk3")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("GTLj").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "X5We":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'getComponentRect',
    value: function getComponentRect(param, cb) {}
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "X6gH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("fmLH");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "XIJY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml__ = __webpack_require__("rzuY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_311ae4ef_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml__ = __webpack_require__("iy6G");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("T6Uw")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-311ae4ef"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_311ae4ef_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_311ae4ef_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/COMP/c-picker/c-picker.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-311ae4ef", Component.options)
  } else {
    hotAPI.reload("data-v-311ae4ef", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "XX3V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "cml-buildin-page",
    { staticClass: " cml-base cml-page", attrs: { title: "c-loading演示" } },
    [
      _c(
        "div",
        { staticClass: " cml-base cml-view", attrs: {} },
        [
          _c("c-header", {
            staticClass: " cml-base cml-c-header",
            attrs: { title: "c-loading" }
          }),
          _vm._v(" "),
          _c(
            "c-loading",
            {
              staticClass: " cml-base cml-c-loading",
              attrs: { loading: _vm.loading }
            },
            [
              _c("div", {
                staticClass: "content  cml-base cml-view",
                attrs: {}
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "button-wrapper  cml-base cml-view", attrs: {} },
            [
              _c("cml-buildin-button", {
                staticClass: "button  cml-base cml-button",
                attrs: { text: "更改loading态", "data-evt-onclick": "" },
                on: {
                  onclick: function($event) {
                    _vm._cmlEventProxy($event, "changeLoading")
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1364bed6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "XYVL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo_d6e75ef.png";

/***/ }),

/***/ "XtqR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show
    ? _c(
        "div",
        {
          staticClass: "tip  cml-base cml-view",
          style: _vm._cmlStyleProxy(_vm.tipStyle, {
            rem: true,
            scale: 0.5,
            remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
            autoprefixOptions: {
              browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
              grid: false
            }
          }),
          attrs: {}
        },
        [
          _c("img", {
            staticClass: "tip-angle  cml-base cml-image",
            style: _vm._cmlStyleProxy(_vm.angleStyle, {
              rem: true,
              scale: 0.5,
              remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
              autoprefixOptions: {
                browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                grid: false
              }
            }),
            attrs: { src: _vm.angleImg }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "tip-wrap  cml-base cml-view", attrs: {} }, [
            _c(
              "div",
              {
                staticClass: "tip-close  cml-base cml-view",
                attrs: { "data-evt-click": "" },
                on: {
                  click: _vm.$stopOuterA,
                  cml$tap: function($event) {
                    $event.stopPropagation()
                    _vm._cmlEventProxy($event, "closeTap")
                  }
                }
              },
              [
                _c("img", {
                  staticClass: " cml-base cml-image",
                  staticStyle: { width: "0.32rem", height: "0.32rem" },
                  attrs: { src: _vm.closeUrl }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tip-content  cml-base cml-view", attrs: {} },
              [_vm._t("default", null, {})],
              2
            )
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2526512f", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "YEVJ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _cTabPaneItem = __webpack_require__("yLmy");

var _cTabPaneItem2 = _interopRequireDefault(_cTabPaneItem);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CTabPane = function CTabPane() {
  (0, _classCallCheck3.default)(this, CTabPane);
  this.props = {
    tabs: { //label labelStyle prefixIcon  suffixIcon
      type: Array,
      default: function _default() {
        return [];
      }
    },
    activeLabel: {
      type: [Number, String],
      required: true
    }

  };
  this.data = {};
  this.computed = {
    paneWrap: function paneWrap() {
      var _this = this;

      var width = this.tabs.length * 750; //总宽度；
      //findIndex找不到返回 -1

      var foundIndex = this.tabs.findIndex(function (item, index, arr) {
        return _this.activeLabel === item.label;
      });
      var leftIndex = foundIndex == -1 ? 0 : foundIndex;

      var leftOffset = leftIndex * 750;

      var style = "width:" + width + "cpx;transform: translateX(" + -leftOffset + "cpx)";
      return style;
    }
  };
}; //
//
//
//
//
//
//
//
//

exports.default = new CTabPane();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cTabItem: _cTabPaneItem2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "YJhL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("hP+v")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("aPys")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "YKc4":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("AiQY");
var enumBugKeys = __webpack_require__("pI9x");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "YL7v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: _vm.containerClassName + "  cml-base cml-view",
      style: _vm._cmlStyleProxy(_vm.containerStyle, {
        rem: true,
        scale: 0.5,
        remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
        autoprefixOptions: {
          browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
          grid: false
        }
      }),
      attrs: {}
    },
    [
      _c(
        "div",
        {
          ref: "mask",
          class: _vm.targetClassName + "  cml-base cml-view",
          attrs: {}
        },
        [_vm._t("default", null, {})],
        2
      ),
      _vm._v(" "),
      !!_vm.loading
        ? _c(
            "div",
            {
              class: _vm.boxClassName + "  cml-base cml-view",
              style: _vm._cmlStyleProxy(_vm.loadingWrapStyle, {
                rem: true,
                scale: 0.5,
                remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                autoprefixOptions: {
                  browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                  grid: false
                }
              }),
              attrs: {}
            },
            [
              _c("div", {
                class: _vm.targetMaskClassName + "  cml-base cml-view",
                style: _vm._cmlStyleProxy(_vm.rectStyle, {
                  rem: true,
                  scale: 0.5,
                  remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                  autoprefixOptions: {
                    browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                    grid: false
                  }
                }),
                attrs: {}
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  class: _vm.loadingWrapClassName + "  cml-base cml-view",
                  style: _vm._cmlStyleProxy(_vm.rectStyle, {
                    rem: true,
                    scale: 0.5,
                    remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                    autoprefixOptions: {
                      browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                      grid: false
                    }
                  }),
                  attrs: {}
                },
                [
                  _c(
                    "div",
                    {
                      class: _vm.loadingClassName + "  cml-base cml-view",
                      style: _vm._cmlStyleProxy(_vm.loadingStyle, {
                        rem: true,
                        scale: 0.5,
                        remOptions: {
                          rootValue: { cpx: 75 },
                          minPixelValue: null
                        },
                        autoprefixOptions: {
                          browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                          grid: false
                        }
                      }),
                      attrs: {}
                    },
                    [
                      _c("img", {
                        ref: "loading",
                        class: _vm.loadImgClassName + "  cml-base cml-image",
                        attrs: { src: _vm.icon }
                      }),
                      _vm._v(" "),
                      !!_vm.tip
                        ? _c(
                            "span",
                            {
                              class:
                                _vm.loadTextClassName + "  cml-base cml-text",
                              attrs: {}
                            },
                            [_vm._v(_vm._s(_vm.tip))]
                          )
                        : _vm._e()
                    ]
                  )
                ]
              )
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-43dfcd31", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "YOlC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml__ = __webpack_require__("5LYv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_54766df2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml__ = __webpack_require__("gLHY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("8NBu")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-54766df2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_54766df2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_54766df2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/COMP/c-tab/c-tab.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54766df2", Component.options)
  } else {
    hotAPI.reload("data-v-54766df2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "YUNu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YYvI":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "YaqC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Ytor":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("OuXD");
var anObject = __webpack_require__("StTd");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("49u2")(Function.call, __webpack_require__("TMJ/").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "Z5Xs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_dom__ = __webpack_require__("9Cgj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_lang__ = __webpack_require__("FkXn");



const DEFAULT_OPTIONS = {
  startX: 0,
  startY: 0,
  scrollX: false,
  scrollY: true,
  directionLockThreshold: 5,
  eventPassthrough: '',
  click: false,
  tap: false,
  /**
   * support any side
   * bounce: {
   *   top: true,
   *   bottom: true,
   *   left: true,
   *   right: true
   * }
   */
  bounce: true,
  bounceTime: 800,
  momentum: true,
  momentumLimitTime: 300,
  momentumLimitDistance: 15,
  swipeTime: 2500,
  swipeBounceTime: 500,
  deceleration: 0.0015,
  flickLimitTime: 200,
  flickLimitDistance: 100,
  resizePolling: 60,
  probeType: 0,
  preventDefault: true,
  preventDefaultException: {
    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
  },
  useTransition: true,
  useTransform: true,
  bindToWrapper: false,
  disableMouse: __WEBPACK_IMPORTED_MODULE_0__util_dom__["h" /* hasTouch */],
  disableTouch: !__WEBPACK_IMPORTED_MODULE_0__util_dom__["h" /* hasTouch */],
  observeDOM: true,
  autoBlur: true,
  /**
   * for pull down and refresh
   * pullDownRefresh: {
   *   threshold: 50,
   *   stop: 20
   * }
   */
  pullDownRefresh: false,
  /**
   * for pull up and load
   * pullUpLoad: {
   *   threshold: 50
   * }
   */
  pullUpLoad: false,
  stopPropagation: false,
  /**
   * for double click
   * dblclick: {
   *   delay: 300
   * }
   */
  dblclick: false
}

function initMixin(CScroll) {
  CScroll.prototype._init = function (el, options) {
    this._handleOptions(options)

    // init private custom events
    this._events = {}

    this.x = 0
    this.y = 0
    this.directionX = 0
    this.directionY = 0

    this._addDOMEvents()
    this._initExtFeatures()
    this._watchTransition()
    this._initDOMObserver()
    this._handleAutoBlur()
    this.refresh()

    this.scrollTo(this.options.startX, this.options.startY)
  }

  CScroll.prototype._handleOptions = function (options) {
    this.options = Object(__WEBPACK_IMPORTED_MODULE_1__util_lang__["a" /* extend */])({}, DEFAULT_OPTIONS, options)

    this.translateZ = __WEBPACK_IMPORTED_MODULE_0__util_dom__["g" /* hasPerspective */] ? ' translateZ(0)' : ''

    this.options.useTransition = this.options.useTransition && __WEBPACK_IMPORTED_MODULE_0__util_dom__["j" /* hasTransition */]
    this.options.useTransform = this.options.useTransform && __WEBPACK_IMPORTED_MODULE_0__util_dom__["i" /* hasTransform */]

    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX
    this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY

    // With eventPassthrough we also need lockDirection mechanism
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold

    if (this.options.tap === true) {
      this.options.tap = 'tap'
    }
  }

  CScroll.prototype._addDOMEvents = function () {
    let eventOperation = __WEBPACK_IMPORTED_MODULE_0__util_dom__["b" /* addEvent */]
    this._handleDOMEvents(eventOperation)
  }

  CScroll.prototype._removeDOMEvents = function () {
    let eventOperation = __WEBPACK_IMPORTED_MODULE_0__util_dom__["m" /* removeEvent */]
    this._handleDOMEvents(eventOperation)
  }

  CScroll.prototype._handleDOMEvents = function (eventOperation) {
    let target = this.options.bindToWrapper ? this.wrapper : window
    eventOperation(window, 'orientationchange', this)
    eventOperation(window, 'resize', this)

    if (this.options.click) {
      eventOperation(this.wrapper, 'click', this, true)
    }

    if (!this.options.disableMouse) {
      eventOperation(this.wrapper, 'mousedown', this)
      eventOperation(target, 'mousemove', this)
      eventOperation(target, 'mousecancel', this)
      eventOperation(target, 'mouseup', this)
    }

    if (__WEBPACK_IMPORTED_MODULE_0__util_dom__["h" /* hasTouch */] && !this.options.disableTouch) {
      eventOperation(this.wrapper, 'touchstart', this)
      eventOperation(target, 'touchmove', this)
      eventOperation(target, 'touchcancel', this)
      eventOperation(target, 'touchend', this)
    }

    eventOperation(this.scroller, __WEBPACK_IMPORTED_MODULE_0__util_dom__["n" /* style */].transitionEnd, this)
  }

  CScroll.prototype._initExtFeatures = function () {
    if (this.options.pullUpLoad) {
      this._initPullUp()
    }
    if (this.options.pullDownRefresh) {
      this._initPullDown()
    }
  }

  CScroll.prototype._watchTransition = function () {
    if (typeof Object.defineProperty !== 'function') {
      return
    }
    let me = this
    let isInTransition = false
    let key = this.useTransition ? 'isInTransition' : 'isAnimating'
    Object.defineProperty(this, key, {
      get() {
        return isInTransition
      },
      set(newVal) {
        isInTransition = newVal
        // fix issue #359
        let el = me.scroller.children.length ? me.scroller.children : [me.scroller]
        let pointerEvents = (isInTransition && !me.pulling) ? 'none' : 'auto'
        for (let i = 0; i < el.length; i++) {
          el[i].style.pointerEvents = pointerEvents
        }
      }
    })
  }

  CScroll.prototype._handleAutoBlur = function () {
    this.on('scrollStart', () => {
      let activeElement = document.activeElement
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        activeElement.blur()
      }
    })
  }

  CScroll.prototype._initDOMObserver = function () {
    if (typeof MutationObserver !== 'undefined') {
      let timer
      let observer = new MutationObserver((mutations) => {
        // don't do any refresh during the transition, or outside of the boundaries
        if (this._shouldNotRefresh()) {
          return
        }
        let immediateRefresh = false
        let deferredRefresh = false
        for (let i = 0; i < mutations.length; i++) {
          const mutation = mutations[i]
          if (mutation.type !== 'attributes') {
            immediateRefresh = true
            break
          } else {
            if (mutation.target !== this.scroller) {
              deferredRefresh = true
              break
            }
          }
        }
        if (immediateRefresh) {
          this.refresh()
        } else if (deferredRefresh) {
          // attributes changes too often
          clearTimeout(timer)
          timer = setTimeout(() => {
            if (!this._shouldNotRefresh()) {
              this.refresh()
            }
          }, 60)
        }
      })
      const config = {
        attributes: true,
        childList: true,
        subtree: true
      }
      observer.observe(this.scroller, config)

      this.on('destroy', () => {
        observer.disconnect()
      })
    } else {
      this._checkDOMUpdate()
    }
  }

  CScroll.prototype._shouldNotRefresh = function () {
    let outsideBoundaries = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY
    return this.isInTransition || this.stopFromTransition || outsideBoundaries
  }

  CScroll.prototype._checkDOMUpdate = function () {
    let scrollerRect = Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["f" /* getRect */])(this.scroller)
    let oldWidth = scrollerRect.width
    let oldHeight = scrollerRect.height

    function check() {
      if (this.destroyed) {
        return
      }
      scrollerRect = Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["f" /* getRect */])(this.scroller)
      let newWidth = scrollerRect.width
      let newHeight = scrollerRect.height

      if (oldWidth !== newWidth || oldHeight !== newHeight) {
        this.refresh()
      }
      oldWidth = newWidth
      oldHeight = newHeight

      next.call(this)
    }

    function next() {
      setTimeout(() => {
        check.call(this)
      }, 1000)
    }

    next.call(this)
  }

  CScroll.prototype.handleEvent = function (e) {
    switch (e.type) {
      case 'touchstart':
      case 'mousedown':
        this._start(e)
        break
      case 'touchmove':
      case 'mousemove':
        this._move(e)
        break
      case 'touchend':
      case 'mouseup':
      case 'touchcancel':
      case 'mousecancel':
        this._end(e)
        break
      case 'orientationchange':
      case 'resize':
        this._resize()
        break
      case 'transitionend':
      case 'webkitTransitionEnd':
      case 'oTransitionEnd':
      case 'MSTransitionEnd':
        this._transitionEnd(e)
        break
      case 'click':
        if (!e._constructed) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["l" /* preventDefaultException */])(e.target, this.options.preventDefaultException)) {
            e.preventDefault()
            e.stopPropagation()
          }
        }
        break
      case 'DOMMouseScroll':
      case 'mousewheel':
        this._onMouseWheel(e)
        break
    }
  }

  CScroll.prototype.refresh = function () {
    const isWrapperStatic = window.getComputedStyle(this.wrapper, null).position === 'static'
    let wrapperRect = Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["f" /* getRect */])(this.wrapper)
    this.wrapperWidth = wrapperRect.width
    this.wrapperHeight = wrapperRect.height

    let scrollerRect = Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["f" /* getRect */])(this.scroller)
    this.scrollerWidth = Math.round(scrollerRect.width)
    this.scrollerHeight = Math.round(scrollerRect.height)

    this.relativeX = scrollerRect.left
    this.relativeY = scrollerRect.top

    if (isWrapperStatic) {
      this.relativeX -= wrapperRect.left
      this.relativeY -= wrapperRect.top
    }

    this.minScrollX = 0
    this.minScrollY = 0

    this.maxScrollX = this.wrapperWidth - this.scrollerWidth
    this.maxScrollY = this.wrapperHeight - this.scrollerHeight

    if (this.maxScrollX < 0) {
      this.maxScrollX -= this.relativeX
      this.minScrollX = -this.relativeX
    }
    if (this.maxScrollY < 0) {
      this.maxScrollY -= this.relativeY
      this.minScrollY = -this.relativeY
    }

    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX
    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY

    if (!this.hasHorizontalScroll) {
      this.maxScrollX = this.minScrollX
      this.scrollerWidth = this.wrapperWidth
    }

    if (!this.hasVerticalScroll) {
      this.maxScrollY = this.minScrollY
      this.scrollerHeight = this.wrapperHeight
    }

    this.endTime = 0
    this.directionX = 0
    this.directionY = 0
    this.wrapperOffset = Object(__WEBPACK_IMPORTED_MODULE_0__util_dom__["k" /* offset */])(this.wrapper)

    this.trigger('refresh')

    this.resetPosition()
  }

}


/***/ }),

/***/ "ZWxH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: " cml-base cml-view", attrs: {} }, [
    _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
      _vm._v("Toast")
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7c1add92", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "ZaHq":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//


var Radio = function () {
  function Radio() {
    (0, _classCallCheck3.default)(this, Radio);
    this.props = {
      checked: {
        type: Boolean,
        default: false
      },
      label: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'left'
      },
      groupIndex: {
        type: Number,
        default: -1
      }
    };
    this.data = {
      innerChecked: false
    };
    this.computed = {
      radioStyle: function radioStyle() {
        var style = '';
        if (this.disabled) {
          style += 'opacity:0.5;';
        }
        if (this.position == 'right') {
          style += 'position:absolute;right:0;margin-right:45cpx;';
        } else {
          style += 'margin-right:13cpx;';
        }
        return style;
      },
      radioClass: function radioClass() {
        if (this.disabled) {
          return this.innerChecked ? 'cml-radio-selected-disabled' : 'cml-radio-unselect-disabled';
        }
        return this.innerChecked ? 'cml-radio-selected' : 'cml-radio-unselect';
      }
    };
    this.watch = {
      checked: function checked(val) {
        this.innerChecked = val;
      }
    };
    this.methods = {
      changeSelect: function changeSelect() {
        if (this.disabled) return;
        this.innerChecked = !this.innerChecked;
        var value = {
          value: this.innerChecked
        };
        if (this.groupIndex !== -1) {
          value.index = this.groupIndex;
        }
        this.$cmlEmit('change', value);
        this.$cmlEmit('changeevent', value);
      }
    };
  }

  (0, _createClass3.default)(Radio, [{
    key: 'mounted',
    value: function mounted() {
      this.innerChecked = this.checked;
    }
  }]);
  return Radio;
}();

exports.default = new Radio();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "Zf4h":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var INDEX_REPLACE_STATE = exports.INDEX_REPLACE_STATE = 'REPLACE_INDEX_STATE';
var INDEX_CHANGE_NAME = exports.INDEX_CHANGE_NAME = 'INDEX_CHANGE_NAME';
var INDEX_CHANGE_AGE = exports.INDEX_CHANGE_AGE = 'INDEX_CHANGE_AGE';

/***/ }),

/***/ "Zn8U":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _cPopup = __webpack_require__("H+3B");

var _cPopup2 = _interopRequireDefault(_cPopup);

var _style = __webpack_require__("lldI");

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var IconMap = {
  network: __webpack_require__("sr4X"),
  warn: __webpack_require__("C+nZ"),
  success: __webpack_require__("mLMk")
};

var CDialog = function () {
  function CDialog() {
    (0, _classCallCheck3.default)(this, CDialog);
    this.props = {
      show: {
        type: Boolean,
        default: false
      },
      mask: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "alert" //alert confirm
      },
      showClose: {
        type: Boolean,
        default: false
      },
      closeSrc: {
        type: String,
        default: __webpack_require__("PUNG")
      },
      cancelText: {
        type: String,
        default: "取消"
      },
      confirmText: {
        type: String,
        default: "确定"
      },
      iconType: {
        type: String,
        default: "warn" //warn  success
      },
      iconUrl: {
        type: String,
        default: "" //warn  success
      },
      iconStyle: {
        type: Object
      }
    };
    this.data = {
      defaultCloseIcon: __webpack_require__("PUNG")
    };
    this.computed = {
      iconSrc: function iconSrc() {
        return IconMap[this.iconType];
      },
      computedIconStyle: function computedIconStyle() {
        return (0, _style.obj2str)(this.iconStyle);
      }
    };
    this.watch = {};
    this.methods = {
      cancelTap: function cancelTap() {
        this.$cmlEmit("show", { value: false });
        this.$cmlEmit("cancel");
      },
      confirmTap: function confirmTap() {
        this.$cmlEmit("show", { value: false });
        this.$cmlEmit("confirm");
      },
      closeTap: function closeTap() {
        this.$cmlEmit("show", { value: false });
        this.$cmlEmit("close");
      }
    };
  }

  (0, _createClass3.default)(CDialog, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return CDialog;
}();

exports.default = new CDialog();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPopup: _cPopup2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "Zva/":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__("ifN7");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = void 0,
    routerConfig = void 0,
    app = void 0,
    store = void 0;

// 定义模块的interface

/* istanbul ignore next */
var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'bootstrap',
    value: function bootstrap() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      (0, _utils.validOptions)(options);

      options.createVM = options.createVM === false ? false : true;
      app = options.app;
      router = options.router;
      routerConfig = options.routerConfig;
      store = options.store;

      var vueOptions = {
        el: '#root',
        router: router,
        store: store,
        render: function render(h) {
          return h(app);
        }
      };

      if (options.createVM) {
        new Vue(vueOptions);
      }
    }
  }, {
    key: 'getInfo',
    value: function getInfo() {
      return {
        router: router,
        routerConfig: routerConfig
      };
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "Zz8K":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "aP3p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("isOg");
var createDesc = __webpack_require__("bYFs");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "aPys":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("YYvI");
var $export = __webpack_require__("xCCz");
var redefine = __webpack_require__("NJL6");
var hide = __webpack_require__("SMww");
var Iterators = __webpack_require__("7unY");
var $iterCreate = __webpack_require__("cU5V");
var setToStringTag = __webpack_require__("DKwb");
var getPrototypeOf = __webpack_require__("ryNh");
var ITERATOR = __webpack_require__("hTSS")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "aSex":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("vn5Q")('observable');


/***/ }),

/***/ "aVEu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "cml-buildin-page",
    { staticClass: " cml-base cml-page", attrs: { title: "checkbox group演示" } },
    [
      _c("c-header", {
        staticClass: " cml-base cml-c-header",
        attrs: { title: "checkbox" }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-checkbox-group", {
            staticClass: " cml-base cml-c-checkbox-group",
            attrs: {
              option: _vm.checkboxGroupOption1,
              "data-evt-groupchange": ""
            },
            on: {
              groupchange: function($event) {
                _vm._cmlEventProxy($event, "groupChangeHandler1")
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("selected value: " + _vm._s(_vm.selected1))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-checkbox-group", {
            staticClass: " cml-base cml-c-checkbox-group",
            attrs: {
              option: _vm.checkboxGroupOption2,
              position: "right",
              "data-evt-groupchange": ""
            },
            on: {
              groupchange: function($event) {
                _vm._cmlEventProxy($event, "groupChangeHandler2")
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("selected value: " + _vm._s(_vm.selected2))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-checkbox-group", {
            staticClass: " cml-base cml-c-checkbox-group",
            attrs: {
              option: _vm.checkboxGroupOption3,
              horizontal: true,
              "data-evt-groupchange": ""
            },
            on: {
              groupchange: function($event) {
                _vm._cmlEventProxy($event, "groupChangeHandler3")
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("selected value: " + _vm._s(_vm.selected3))
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8fa75e62", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "ab7A":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _buttonWeb = __webpack_require__("laRC");

var _buttonWeb2 = _interopRequireDefault(_buttonWeb);

var _pageWeb = __webpack_require__("/b3d");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _cHeader = __webpack_require__("h1kM");

var _cHeader2 = _interopRequireDefault(_cHeader);

var _cActionsheet = __webpack_require__("Joqm");

var _cActionsheet2 = _interopRequireDefault(_cActionsheet);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//

var CActionsheet = function () {
  function CActionsheet() {
    (0, _classCallCheck3.default)(this, CActionsheet);
    this.data = {
      actionShow: false,
      mask: true,
      list: ["高铁", "火车", "飞机", "打车", "地铁"],
      active: -1,
      title: "出行方式",
      pickerStyle: false
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      showActionSheet: function showActionSheet() {
        this.pickerStyle = false;
        this.actionShow = true;
      },
      showActionSheetActive: function showActionSheetActive() {
        this.pickerStyle = false;
        this.actionShow = true;
      },
      showActionSheetPicker: function showActionSheetPicker() {
        this.pickerStyle = true;
        this.actionShow = true;
      },
      cancel: function cancel() {
        this.actionShow = false;
        // cml.showToast({
        //   message: "Clicked 取消"
        // });
      },
      select: function select(e) {
        this.actionShow = false;
        this.active = +e.detail.index;
        // cml.showToast({
        //   message: "Clicked" + " " + e.detail.value
        // });
      }
    };
  }

  (0, _createClass3.default)(CActionsheet, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {
      this.active = 0;
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return CActionsheet;
}();

exports.default = new CActionsheet();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cHeader: _cHeader2.default, cActionsheet: _cActionsheet2.default, cmlBuildinButton: _buttonWeb2.default, cmlBuildinPage: _pageWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "acnc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "pane-item-root  cml-base cml-view", attrs: {} },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0911408e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "ak61":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLaunchUrl = getLaunchUrl;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml';
var methodName = 'getLaunchUrl';

function getLaunchUrl(param, cb) {
  (0, _index.callNative)(moduleName, methodName, param, cb);
}

getLaunchUrl.prototype.moduleName = moduleName;
getLaunchUrl.prototype.methodName = methodName;

/***/ }),

/***/ "amoi":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query2json = exports.json2query = undefined;

var _entries = __webpack_require__("2qtJ");

var _entries2 = _interopRequireDefault(_entries);

var _getIterator2 = __webpack_require__("US/B");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = __webpack_require__("IyGo");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = __webpack_require__("lHTR");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.isObject = isObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * url相关操作
 *
 * @module lib/url
 */

function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object';
}

/**
 * 把对象转换成key=val的url参数
 * @param obj
 * @param isEncode 是否进行encodeURIComponent 默认为true
 * @return {string}
 */
var json2query = exports.json2query = function json2query(obj, isEncode) {
  isEncode = isEncode !== false;
  var url = '';
  if (isObject(obj)) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)((0, _entries2.default)(obj)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref = _step.value;

        var _ref2 = (0, _slicedToArray3.default)(_ref, 2);

        var k = _ref2[0];
        var v = _ref2[1];

        var value = v !== undefined ? v : '';
        url += '&' + k + '=' + (isEncode ? encodeURIComponent(value) : value);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  return url ? url.substring(1) : '';
};

/**
 * 解析url参数
 * @example ?id=12345&a=b 或者 #id=12345&a=b
 * @return Object {id:12345,a:b}
 */
var query2json = exports.query2json = function query2json() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var reg = /[#?&][^#?&]+=[^#?&]+/g;
  var arr = url.match(reg);
  var obj = {};
  if (arr) {
    arr.forEach(function (item) {
      var tempArr = item.substring(1).split('=');
      var key = decodeURIComponent(tempArr[0]);
      var val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
};

exports.default = {
  json2query: json2query,
  query2json: query2json
};

/***/ }),

/***/ "annF":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__("Ihxk");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("/b3d");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _scrollerWeb = __webpack_require__("nOyz");

var _scrollerWeb2 = _interopRequireDefault(_scrollerWeb);

var _cHeader = __webpack_require__("h1kM");

var _cHeader2 = _interopRequireDefault(_cHeader);

var _cRefreshWeb = __webpack_require__("zXRo");

var _cRefreshWeb2 = _interopRequireDefault(_cRefreshWeb);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Refresh = function () {
  function Refresh() {
    (0, _classCallCheck3.default)(this, Refresh);
    this.data = {
      topRefreshing: false,
      bottomRefreshing: false,
      bottomOffset: 20,
      scrollDirection: 'vertical',
      panels: [],
      rows: [],
      sumPage: 4,
      page: 0,
      loadingTextStyle: ''
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      getPanels: function getPanels(direction) {
        if (this.page >= this.sumPage) return;
        var rows = this.randomfn();
        this.panels = direction == 1 ? [].concat((0, _toConsumableArray3.default)(this.panels), (0, _toConsumableArray3.default)(rows)) : [].concat((0, _toConsumableArray3.default)(rows), (0, _toConsumableArray3.default)(this.panels));
        this.page++;
      },
      onrefreshUp: function onrefreshUp(e) {
        var _this = this;

        this.topRefreshing = e.detail.value;
        setTimeout(function () {
          _this.getPanels(-1);
          _this.topRefreshing = false;
        }, 2000);
      },
      onrefreshDown: function onrefreshDown(e) {
        var _this2 = this;

        this.bottomRefreshing = e.detail.value;
        setTimeout(function () {
          _this2.getPanels(1);
          _this2.bottomRefreshing = false;
        }, 2000);
      },
      change: function change(e) {
        var target = e.currentTarget;
        var dataset = target.dataset;
        var i = dataset.idx;

        var item = this.panels[i];
        if (item) {
          item.height = item.height === 200 ? 400 : 200;
          item.width = item.width === 330 ? 730 : 330;
          item.computedStyle = "height:" + item.height + "cpx;width:" + item.width + "cpx;background-color:" + item.bgc + ";opacity:" + item.opacity;
        }
      },
      randomfn: function randomfn() {
        var ary = [];
        for (var i = 1; i <= 10; i++) {
          var item = { label: this.page * 10 + i, height: 200, width: 730, bgc: '#69BE96', opacity: 1 };
          item.computedStyle = "height:" + item.height + "cpx;width:" + item.width + "cpx;background-color:" + item.bgc + ";opacity:" + item.opacity;

          ary.push(item);
        }
        return ary;
      },
      onScroll: function onScroll(e) {
        var scrollTop = e.detail.scrollTop;
        if (scrollTop <= 0) {
          this.topRefreshing = true;
        }
      },
      onBottom: function onBottom(e) {
        if (this.bottomRefreshing || this.page >= this.sumPage) return;
        this.bottomRefreshing = true;
      }
    };
  }

  (0, _createClass3.default)(Refresh, [{
    key: "created",
    value: function created(res) {
      this.getPanels();
      this.loadingTextStyle = 'color:#999;font-size:36cpx;margin:30cpx 0;';
    }
  }]);
  return Refresh;
}();

exports.default = new Refresh();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cHeader: _cHeader2.default, cRefresh: _cRefreshWeb2.default, cmlBuildinPage: _pageWeb2.default, cmlBuildinScroller: _scrollerWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "ansc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "awtq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("Guy4"), __esModule: true };

/***/ }),

/***/ "axW8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export warn */
/* harmony export (immutable) */ __webpack_exports__["a"] = assert;
function warn(msg) {
  console.error(`[Scroll warn]: ${msg}`)
}

function assert(condition, msg) {
  if (!condition) {
    throw new Error(('[Scroll] ' + msg))
  }
}

/***/ }),

/***/ "axut":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("Zva/");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
exports.default = {
  bootstrap: function bootstrap() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _index2.default.bootstrap.call(_index2.default, options);
  },
  getInfo: _index2.default.getInfo

};

/***/ }),

/***/ "b6zB":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("xCCz");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("Ytor").set });


/***/ }),

/***/ "bD0u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("tRKg");
var has = __webpack_require__("JAUT");
var DESCRIPTORS = __webpack_require__("yfK2");
var $export = __webpack_require__("xCCz");
var redefine = __webpack_require__("NJL6");
var META = __webpack_require__("w3K7").KEY;
var $fails = __webpack_require__("lt2H");
var shared = __webpack_require__("p06J");
var setToStringTag = __webpack_require__("DKwb");
var uid = __webpack_require__("ucRq");
var wks = __webpack_require__("hTSS");
var wksExt = __webpack_require__("ShPv");
var wksDefine = __webpack_require__("vn5Q");
var enumKeys = __webpack_require__("7ksP");
var isArray = __webpack_require__("uj1z");
var anObject = __webpack_require__("StTd");
var isObject = __webpack_require__("OuXD");
var toIObject = __webpack_require__("dkPk");
var toPrimitive = __webpack_require__("w7d5");
var createDesc = __webpack_require__("bYFs");
var _create = __webpack_require__("WwJq");
var gOPNExt = __webpack_require__("suar");
var $GOPD = __webpack_require__("TMJ/");
var $DP = __webpack_require__("isOg");
var $keys = __webpack_require__("YKc4");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("7WrD").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("PGoE").f = $propertyIsEnumerable;
  __webpack_require__("SCZj").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("YYvI")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("SMww")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "bFEg":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = __webpack_require__("9S/u");

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _app.App;
  }
});

var _page = __webpack_require__("IYim");

Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _page.Page;
  }
});

var _component = __webpack_require__("ll/r");

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _component.Component;
  }
});

/***/ }),

/***/ "bGYz":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__("fmLH");

var _assign2 = _interopRequireDefault(_assign);

var _toConsumableArray2 = __webpack_require__("Ihxk");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

var _index = __webpack_require__("jVJD");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exportMiddleWare = _index2.default.exportMiddleWare,
    checkNumber = _index2.default.checkNumber,
    checkString = _index2.default.checkString;


var id = 0;

// 可用options
var STYLES = [{ key: 'width', type: 'number' }, { key: 'height', type: 'number' }, { key: 'opacity', type: 'number' }, { key: 'backgroundColor', type: 'string' }, // 16进制数值
{ key: 'translate', type: 'number' }, // web不支持
{ key: 'translateX', type: 'number' }, { key: 'translateY', type: 'number' }, { key: 'scale', type: 'number' }, // web不支持
{ key: 'scaleX', type: 'number' }, { key: 'scaleY', type: 'number' },
// {key:'skew', type: 'string'}, //weex不支持
// {key:'skewX', type: 'string'},
// {key:'skewY', type: 'string'},
// 暂时不支持校验，因为cml底层不支持校验多种类型
{ key: 'rotate', type: '' }, // web不支持,
{ key: 'rotateX', type: '' }, { key: 'rotateY', type: '' }, { key: 'transform', type: 'string' }];
// 可用descriptions
// const DESCRIPTIONS = [
//   'duration',
//   'timingFunction',
//   'delay',
//   'transformOrigin',
//   'cb'
// ];

var utils = {
  // 将styles的值 变为原型上的方法
  enhanceAnimationPrototype: function enhanceAnimationPrototype(target, styles) {
    var transformProps = Array.isArray(styles) ? styles : (0, _keys2.default)(styles);
    transformProps.forEach(function (item) {
      target[item.key] = function () {
        for (var _len = arguments.length, style = Array(_len), _key = 0; _key < _len; _key++) {
          style[_key] = arguments[_key];
        }

        // 校验类型
        if (item.type === 'number') {
          checkNumber(style[0]);
        } else if (item.type === 'string') {
          checkString(style[0]);
        }
        this.styles[item.key] = style;
        return this;
      };
    }, this);
  }
};

var createAnimationFactory = function createAnimationFactory() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var updateQueue = [];
  // let stashQueue = [];

  this.id = id;
  id = id + 1;

  this.descriptions = description;

  this.styles = {};

  // 判断用户是否使用export
  this.useExport = '0';

  this.enqueue = function (param) {
    updateQueue.push(param);
  };

  this["export"] = function () {
    this.useExport = '1';

    var result = exportMiddleWare({
      id: this.id,
      useExport: this.useExport,
      updateQueue: [].concat((0, _toConsumableArray3.default)(updateQueue))
    });
    // 清空
    updateQueue = [];
    this.useExport = '0';
    return result;
  };

  // 此操作与重新构建类重复
  // this.reset = function() {
  //   updateQueue = [];
  // }
  // 暂存
  // this.stash = function() {
  //   stashQueue = [...updateQueue];
  // };

  // this.stashExport = function() {
  //   this.useExport = '1';

  //   const result = exportMiddleWare({
  //     id: this.id,
  //     useExport: this.useExport,
  //     updateQueue: [...updateQueue]
  //   });
  //   // 清空
  //   this.useExport = '0';
  //   stashQueue = [];
  //   return result;
  // };
};

createAnimationFactory.prototype = {
  clear: function clear() {
    this.styles = {};
    this.descriptions = {};
    return this;
  },

  styles: function styles(_styles) {
    this.styles = (0, _assign2.default)({}, this.styles, _styles);
    return this;
  },

  step: function step(descriptions) {
    this.enqueue({
      styles: this.styles,
      descriptions: (0, _assign2.default)({ cb: function cb() {
          return false;
        }, duration: 400 }, this.descriptions, descriptions)
    });
    this.clear();
    return this;
  }
};

utils.enhanceAnimationPrototype(createAnimationFactory.prototype, STYLES);

exports.default = createAnimationFactory;

/***/ }),

/***/ "bYFs":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "bdWA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "bdpq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon_component_90086e8.png";

/***/ }),

/***/ "bjfn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("w1p+");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "btUP":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("3h3k");
module.exports = __webpack_require__("OzFA").Object.keys;


/***/ }),

/***/ "c/0z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml__ = __webpack_require__("0Sf2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_96a95cba_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml__ = __webpack_require__("9NjT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("YUNu")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-96a95cba"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_96a95cba_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_96a95cba_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-tab/c-tab.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-96a95cba", Component.options)
  } else {
    hotAPI.reload("data-v-96a95cba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "c0s4":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("jVJD");

var _index2 = _interopRequireDefault(_index);

var _createAnimationFactory = __webpack_require__("bGYz");

var _createAnimationFactory2 = _interopRequireDefault(_createAnimationFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.initAnimation();

exports.default = function (description) {
  return new _createAnimationFactory2.default(description);
};

/***/ }),

/***/ "cL84":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _component = __webpack_require__("EK/L");

var component = _interopRequireWildcard(_component);

var _event = __webpack_require__("EEl8");

var event = _interopRequireWildcard(_event);

var _viewport = __webpack_require__("HtJK");

var viewport = _interopRequireWildcard(_viewport);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({}, component, event, viewport);

/***/ }),

/***/ "cU5V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("WwJq");
var descriptor = __webpack_require__("bYFs");
var setToStringTag = __webpack_require__("DKwb");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("SMww")(IteratorPrototype, __webpack_require__("hTSS")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "cVFY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "caUD":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extendVue;

var _mixins = __webpack_require__("QYOt");

var _webMixins = __webpack_require__("p+oX");

var _webMixins2 = _interopRequireDefault(_webMixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extendVue(Vue) {

  // 自定义原生标签处理 覆盖Vue方法
  var htmlRegex = /^html:/i;
  Vue.config.isReservedTag = function (tag) {
    return htmlRegex.test(tag);
  };
  Vue.config.parsePlatformTagName = function (tag) {
    return tag.replace(htmlRegex, '');
  };

  function isCmlTag(tag) {
    return typeof chameleon._components[tag] !== 'undefined';
  }
  var oldGetTagNamespace = Vue.config.getTagNamespace;
  Vue.config.getTagNamespace = function (tag) {
    if (isCmlTag(tag)) {
      return;
    }
    return oldGetTagNamespace(tag);
  };

  Vue.mixin(_mixins.base);
  Vue.mixin(_mixins.event);

  Vue.mixin(_webMixins2.default.mixins);
}

/***/ }),

/***/ "d/ib":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dCBN":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rollbackWeb = rollbackWeb;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml';
var methodName = 'rollbackWeb';

function rollbackWeb() {
  (0, _index.callNative)(moduleName, methodName, {}, function () {});
}

rollbackWeb.prototype.moduleName = moduleName;
rollbackWeb.prototype.methodName = methodName;

/***/ }),

/***/ "df4s":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__("WcAg")('getOwnPropertyNames', function () {
  return __webpack_require__("suar").f;
});


/***/ }),

/***/ "dkPk":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("R2s1");
var defined = __webpack_require__("SQnF");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "dyqm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dz4j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show
    ? _c(
        "div",
        { staticClass: "picker-panel  cml-base cml-view", attrs: {} },
        [
          _c(
            "c-popup",
            {
              staticClass: " cml-base cml-c-popup",
              attrs: { mask: true, show: _vm.show }
            },
            [
              _c(
                "div",
                {
                  staticClass: "panel-wrap  cml-base cml-view",
                  style: _vm._cmlStyleProxy(_vm.wraperStyle, {
                    rem: true,
                    scale: 0.5,
                    remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                    autoprefixOptions: {
                      browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                      grid: false
                    }
                  }),
                  attrs: {}
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "panel-header  cml-base cml-view",
                      style: _vm._cmlStyleProxy(_vm.headerStyle, {
                        rem: true,
                        scale: 0.5,
                        remOptions: {
                          rootValue: { cpx: 75 },
                          minPixelValue: null
                        },
                        autoprefixOptions: {
                          browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                          grid: false
                        }
                      }),
                      attrs: {}
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "left-wrap  cml-base cml-view",
                          attrs: { "data-evt-click": "" },
                          on: {
                            click: _vm.$stopOuterA,
                            cml$tap: function($event) {
                              $event.stopPropagation()
                              _vm._cmlEventProxy($event, "cancelclick")
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticClass: "left-btn-text  cml-base cml-text",
                              style: _vm._cmlStyleProxy(_vm.computedCancelBtn, {
                                rem: true,
                                scale: 0.5,
                                remOptions: {
                                  rootValue: { cpx: 75 },
                                  minPixelValue: null
                                },
                                autoprefixOptions: {
                                  browsers: [
                                    "> 0.1%",
                                    "ios >= 8",
                                    "not ie < 12"
                                  ],
                                  grid: false
                                }
                              }),
                              attrs: {}
                            },
                            [_vm._v("取消")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "title  cml-base cml-view", attrs: {} },
                        [
                          _c(
                            "span",
                            { staticClass: " cml-base cml-text", attrs: {} },
                            [_vm._v(_vm._s(_vm.title))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "right-wrap  cml-base cml-view",
                          attrs: { "data-evt-click": "" },
                          on: {
                            click: _vm.$stopOuterA,
                            cml$tap: function($event) {
                              $event.stopPropagation()
                              _vm._cmlEventProxy($event, "confirmclick")
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticClass: "right-btn-text  cml-base cml-text",
                              style: _vm._cmlStyleProxy(
                                _vm.computedConfirmBtn,
                                {
                                  rem: true,
                                  scale: 0.5,
                                  remOptions: {
                                    rootValue: { cpx: 75 },
                                    minPixelValue: null
                                  },
                                  autoprefixOptions: {
                                    browsers: [
                                      "> 0.1%",
                                      "ios >= 8",
                                      "not ie < 12"
                                    ],
                                    grid: false
                                  }
                                }
                              ),
                              attrs: {}
                            },
                            [_vm._v("确定")]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._t("default", null, {})
                ],
                2
              )
            ]
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5b73cf5e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "eRbF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "cml-radio-group  cml-base cml-view",
      style: _vm._cmlStyleProxy(_vm.horizontalStyle, {
        rem: true,
        scale: 0.5,
        remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
        autoprefixOptions: {
          browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
          grid: false
        }
      }),
      attrs: {}
    },
    _vm._l(_vm.radioList, function(item, index) {
      return _c("cml-buildin-radio", {
        staticClass: " cml-base cml-radio",
        attrs: {
          "data-index": index,
          "data-uid": item.uid,
          checked: item.checked,
          label: item.label,
          "group-index": index,
          position: _vm.subPosition,
          disabled: item.disabled ? true : false,
          "data-evt-change": ""
        },
        on: {
          change: function($event) {
            $event.stopPropagation()
            _vm._cmlEventProxy($event, "valueChange")
          }
        }
      })
    })
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c408365a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "eXs3":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("49u2");
var invoke = __webpack_require__("O6ww");
var html = __webpack_require__("GTLj");
var cel = __webpack_require__("wUk3");
var global = __webpack_require__("tRKg");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("EJ14")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "eYJ0":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSystemInfo = getSystemInfo;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml';
var methodName = 'getSystemInfo';

function getSystemInfo(param, cb) {
  (0, _index.callNative)(moduleName, methodName, param, function (res) {
    /**
     * res.data
     * {
      "scale": 3,
      "deviceWidth": 1080,
      "deviceHeight": 2340,
      "os": "android",
      "extraParams": {
        "model": "PAFM00",
        "imei": "356416465466244",
        "netType": "WIFI"
      }
    }
     */
    // 兼容原始数据结构
    res.data.extraParams.os = res.data.os;

    var _res$data = res.data,
        deviceWidth = _res$data.deviceWidth,
        deviceHeight = _res$data.deviceHeight,
        scale = _res$data.scale;

    res.data.viewportWidth = deviceWidth / scale;
    res.data.viewportHeight = deviceHeight / scale;
    cb(res);
  });
}

getSystemInfo.prototype.moduleName = moduleName;
getSystemInfo.prototype.methodName = methodName;

/***/ }),

/***/ "egZi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml__ = __webpack_require__("QWPD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_56363c6b_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml__ = __webpack_require__("MyKB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("MiwI")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-56363c6b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_56363c6b_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_56363c6b_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_checkbox_group_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-checkbox-group/c-checkbox-group.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56363c6b", Component.options)
  } else {
    hotAPI.reload("data-v-56363c6b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "en+i":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.Page = exports.App = undefined;

var _instance = __webpack_require__("bFEg");

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _instance.App;
  }
});
Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _instance.Page;
  }
});
Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _instance.Component;
  }
});

var _render = __webpack_require__("k1x2");

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_render2.default.init(Vue);
// import './style'

/***/ }),

/***/ "f1jY":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _index = __webpack_require__("IcnI");

var _index2 = _interopRequireDefault(_index);

var _routerConfig = __webpack_require__("oJVY");

var _routerConfig2 = _interopRequireDefault(_routerConfig);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//


var App = function () {
        function App() {
                (0, _classCallCheck3.default)(this, App);
                this.data = {
                        store: _index2.default,
                        routerConfig: _routerConfig2.default
                };
        }

        (0, _createClass3.default)(App, [{
                key: 'created',
                value: function created(res) {}
        }]);
        return App;
}();

exports.default = new App();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createApp(exports.default).getOptions();

/***/ }),

/***/ "f7pY":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _buttonWeb = __webpack_require__("laRC");

var _buttonWeb2 = _interopRequireDefault(_buttonWeb);

var _pageWeb = __webpack_require__("/b3d");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _cHeader = __webpack_require__("h1kM");

var _cHeader2 = _interopRequireDefault(_cHeader);

var _cToast = __webpack_require__("/F8r");

var _cToast2 = _interopRequireDefault(_cToast);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var CToast = function () {
  function CToast() {
    (0, _classCallCheck3.default)(this, CToast);
    this.data = {
      show: false,
      message: "",
      type: "loading",
      mask: false,
      duration: 1000,
      needIcon: true
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      changeShow: function changeShow(e) {
        this.show = e.detail.value;
      },
      showLoading: function showLoading() {
        this.message = "loading";
        this.type = "loading";
        this.mask = false;
        this.duration = 1000;
        this.needIcon = true;
        this.show = true;
      },
      showMask: function showMask() {
        this.message = "mask toast";
        this.type = "loading";
        this.mask = true;
        this.duration = 1000;
        this.needIcon = true;
        this.show = true;
      },
      showSuccess: function showSuccess() {
        this.message = "success toast";
        this.type = "success";
        this.mask = true;
        this.duration = 1000;
        this.needIcon = true;
        this.show = true;
      },
      showWarn: function showWarn() {
        this.message = "warn toast";
        this.type = "warn";
        this.duration = 1000;
        this.mask = true;
        this.needIcon = true;
        this.show = true;
      },
      showWithout: function showWithout() {
        this.message = "toast without icon";
        this.duration = 1000;
        this.mask = false;
        this.needIcon = false;
        this.show = true;
      }
    };
  }

  (0, _createClass3.default)(CToast, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return CToast;
}();

exports.default = new CToast();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cHeader: _cHeader2.default, cToast: _cToast2.default, cmlBuildinButton: _buttonWeb2.default, cmlBuildinPage: _pageWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "fg1d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_toast_cml__ = __webpack_require__("6mrG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_toast_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_toast_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_toast_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_toast_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c1add92_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_toast_cml__ = __webpack_require__("ZWxH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("YaqC")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c1add92"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_toast_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c1add92_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_toast_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c1add92_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_toast_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/API/toast/toast.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c1add92", Component.options)
  } else {
    hotAPI.reload("data-v-7c1add92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "fjcn":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

var _type = __webpack_require__("rffR");

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function str2obj(str) {
  var styleArr = str.split(';');
  var style = {};
  styleArr.forEach(function (item) {
    var si = item.split(':');
    if (si.length === 2) {
      style[si[0]] = si[1];
    }
  });
  return style;
  // return String.keys(obj)
  //   .map(key => `${key}:${obj[key]}`)
  //   .join(";");
} //
//
//
//
//
//
//


function obj2str(obj) {
  return (0, _keys2.default)(obj).map(function (key) {
    return key + ':' + obj[key];
  }).join(";");
}

var Button = function Button() {
  (0, _classCallCheck3.default)(this, Button);
  this.props = {
    text: {
      type: String,
      default: "确认"
    },
    size: {
      type: String,
      default: "none"
    },
    type: {
      type: String,
      default: "blue"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: {
      type: String,
      default: ""
    },
    textStyle: {
      type: String,
      default: ""
    },
    disabledStyle: {
      type: String,
      default: ""
    },
    openType: {
      type: String,
      default: ""
    },
    lang: {
      type: String,
      default: "en"
    },
    sessionFrom: {
      type: String,
      default: ""
    },
    sendMessageTitle: {
      type: String,
      default: "当前标题"
    },
    sendMessagePath: {
      type: String,
      default: "当前分享路径"
    },
    sendMessageImg: {
      type: String,
      default: "截图"
    },
    showMessageCard: {
      type: Boolean,
      default: false
    },
    appParameter: {
      type: String,
      default: ""
    }
  };
  this.computed = {
    mrBtnStyle: function mrBtnStyle() {
      var type = this.type,
          disabled = this.disabled,
          btnStyle = this.btnStyle,
          size = this.size,
          disabledStyle = this.disabledStyle;

      var mrBtnStyle = (0, _extends3.default)({}, _type.STYLE_MAP[type], str2obj(btnStyle), _type.BUTTON_STYLE_MAP[size]);

      var disabledInStyle = { opacity: 0.2 };
      if (type === "white") {
        disabledInStyle = { "background-color": "rgba(0, 0, 0, 0.1)" };
      }

      var afterStyle = disabled ? (0, _extends3.default)({}, mrBtnStyle, disabledInStyle, str2obj(disabledStyle), {
        "border-width": 0
      }) : mrBtnStyle;

      return obj2str(afterStyle);
    },
    mrTextStyle: function mrTextStyle() {
      var type = this.type,
          disabled = this.disabled,
          textStyle = this.textStyle,
          size = this.size;

      var mrTextStyle = (0, _extends3.default)({}, _type.TEXT_STYLE_MAP[type], str2obj(textStyle), _type.TEXT_FONTSIZE_STYLE_MAP[size]);
      var afterStyle = disabled ? (0, _extends3.default)({}, mrTextStyle, { color: "#FFFFFF" }) : mrTextStyle;

      return obj2str(afterStyle);
    }
  };
  this.methods = {
    onclick: function onclick(e) {
      var type = this.type,
          disabled = this.disabled;

      if (disabled) return;
      this.$cmlEmit('onclick', {
        type: type,
        disabled: disabled
      });
    }
  };
};

exports.default = new Button();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "fmLH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("7Mo0"), __esModule: true };

/***/ }),

/***/ "fpcZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = eventMixin;
function eventMixin(CScroll) {
  CScroll.prototype.on = function (type, fn, context = this) {
    if (!this._events[type]) {
      this._events[type] = []
    }

    this._events[type].push([fn, context])
  }

  CScroll.prototype.once = function (type, fn, context = this) {
    function magic() {
      this.off(type, magic)

      fn.apply(context, arguments)
    }
    // To expose the corresponding function method in order to execute the off method
    magic.fn = fn

    this.on(type, magic)
  }

  CScroll.prototype.off = function (type, fn) {
    let _events = this._events[type]
    if (!_events) {
      return
    }

    let count = _events.length
    while (count--) {
      if (_events[count][0] === fn || (_events[count][0] && _events[count][0].fn === fn)) {
        _events[count][0] = undefined
      }
    }
  }

  CScroll.prototype.trigger = function (type) {
    let events = this._events[type]
    if (!events) {
      return
    }

    let len = events.length
    let eventsCopy = [...events]
    for (let i = 0; i < len; i++) {
      let event = eventsCopy[i]
      let [fn, context] = event
      if (fn) {
        fn.apply(context, [].slice.call(arguments, 1))
      }
    }
  }
}


/***/ }),

/***/ "g2Jc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gASe":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("xCCz");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("WwJq") });


/***/ }),

/***/ "gBu3":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _stringify = __webpack_require__("IZaB");

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__("lHTR");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*! VelocityJS.org (1.5.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function (a) {
  "use strict";
  function b(a) {
    var b = a.length,
        d = c.type(a);return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || "array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }if (!a.jQuery) {
    var c = function c(a, b) {
      return new c.fn.init(a, b);
    };c.isWindow = function (a) {
      return a && a === a.window;
    }, c.type = function (a) {
      return a ? "object" == (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) || "function" == typeof a ? e[g.call(a)] || "object" : typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a) : a + "";
    }, c.isArray = Array.isArray || function (a) {
      return "array" === c.type(a);
    }, c.isPlainObject = function (a) {
      var b;if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;try {
        if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (d) {
        return !1;
      }for (b in a) {}return b === undefined || f.call(a, b);
    }, c.each = function (a, c, d) {
      var e = 0,
          f = a.length,
          g = b(a);if (d) {
        if (g) for (; e < f && !1 !== c.apply(a[e], d); e++) {} else for (e in a) {
          if (a.hasOwnProperty(e) && !1 === c.apply(a[e], d)) break;
        }
      } else if (g) for (; e < f && !1 !== c.call(a[e], e, a[e]); e++) {} else for (e in a) {
        if (a.hasOwnProperty(e) && !1 === c.call(a[e], e, a[e])) break;
      }return a;
    }, c.data = function (a, b, e) {
      if (e === undefined) {
        var f = a[c.expando],
            g = f && d[f];if (b === undefined) return g;if (g && b in g) return g[b];
      } else if (b !== undefined) {
        var h = a[c.expando] || (a[c.expando] = ++c.uuid);return d[h] = d[h] || {}, d[h][b] = e, e;
      }
    }, c.removeData = function (a, b) {
      var e = a[c.expando],
          f = e && d[e];f && (b ? c.each(b, function (a, b) {
        delete f[b];
      }) : delete d[e]);
    }, c.extend = function () {
      var a,
          b,
          d,
          e,
          f,
          g,
          h = arguments[0] || {},
          i = 1,
          j = arguments.length,
          k = !1;for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != (typeof h === "undefined" ? "undefined" : (0, _typeof3.default)(h)) && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); i < j; i++) {
        if (f = arguments[i]) for (e in f) {
          f.hasOwnProperty(e) && (a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : d !== undefined && (h[e] = d)));
        }
      }return h;
    }, c.queue = function (a, d, e) {
      if (a) {
        d = (d || "fx") + "queue";var f = c.data(a, d);return e ? (!f || c.isArray(e) ? f = c.data(a, d, function (a, c) {
          var d = c || [];return a && (b(Object(a)) ? function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c;) {
              a[e++] = b[d++];
            }if (c !== c) for (; b[d] !== undefined;) {
              a[e++] = b[d++];
            }a.length = e;
          }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d;
        }(e)) : f.push(e), f) : f || [];
      }
    }, c.dequeue = function (a, b) {
      c.each(a.nodeType ? [a] : a, function (a, d) {
        b = b || "fx";var e = c.queue(d, b),
            f = e.shift();"inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function () {
          c.dequeue(d, b);
        }));
      });
    }, c.fn = c.prototype = { init: function init(a) {
        if (a.nodeType) return this[0] = a, this;throw new Error("Not a DOM node.");
      }, offset: function offset() {
        var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };return { top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) };
      }, position: function position() {
        var a = this[0],
            b = function (a) {
          for (var b = a.offsetParent; b && "html" !== b.nodeName.toLowerCase() && b.style && "static" === b.style.position.toLowerCase();) {
            b = b.offsetParent;
          }return b || document;
        }(a),
            d = this.offset(),
            e = /^(?:body|html)$/i.test(b.nodeName) ? { top: 0, left: 0 } : c(b).offset();return d.top -= parseFloat(a.style.marginTop) || 0, d.left -= parseFloat(a.style.marginLeft) || 0, b.style && (e.top += parseFloat(b.style.borderTopWidth) || 0, e.left += parseFloat(b.style.borderLeftWidth) || 0), { top: d.top - e.top, left: d.left - e.left };
      } };var d = {};c.expando = "velocity" + new Date().getTime(), c.uuid = 0;for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) {
      e["[object " + h[i] + "]"] = h[i].toLowerCase();
    }c.fn.init.prototype = c.fn, a.Velocity = { Utilities: c };
  }
}(window), function (a) {
  "use strict";
  "object" == ( false ? "undefined" : (0, _typeof3.default)(module)) && "object" == (0, _typeof3.default)(module.exports) ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : a();
}(function () {
  "use strict";
  return function (a, b, c, d) {
    function e(a) {
      for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
        var e = a[b];e && d.push(e);
      }return d;
    }function f(a) {
      return u.isWrapped(a) ? a = s.call(a) : u.isNode(a) && (a = [a]), a;
    }function g(a) {
      var b = o.data(a, "velocity");return null === b ? d : b;
    }function h(a, b) {
      var c = g(a);c && c.delayTimer && !c.delayPaused && (c.delayRemaining = c.delay - b + c.delayBegin, c.delayPaused = !0, clearTimeout(c.delayTimer.setTimeout));
    }function i(a, b) {
      var c = g(a);c && c.delayTimer && c.delayPaused && (c.delayPaused = !1, c.delayTimer.setTimeout = setTimeout(c.delayTimer.next, c.delayRemaining));
    }function j(a) {
      return function (b) {
        return Math.round(b * a) * (1 / a);
      };
    }function k(a, c, d, e) {
      function f(a, b) {
        return 1 - 3 * b + 3 * a;
      }function g(a, b) {
        return 3 * b - 6 * a;
      }function h(a) {
        return 3 * a;
      }function i(a, b, c) {
        return ((f(b, c) * a + g(b, c)) * a + h(b)) * a;
      }function j(a, b, c) {
        return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b);
      }function k(b, c) {
        for (var e = 0; e < p; ++e) {
          var f = j(c, a, d);if (0 === f) return c;c -= (i(c, a, d) - b) / f;
        }return c;
      }function l() {
        for (var b = 0; b < t; ++b) {
          x[b] = i(b * u, a, d);
        }
      }function m(b, c, e) {
        var f,
            g,
            h = 0;do {
          g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g;
        } while (Math.abs(f) > r && ++h < s);return g;
      }function n(b) {
        for (var c = 0, e = 1, f = t - 1; e !== f && x[e] <= b; ++e) {
          c += u;
        }--e;var g = (b - x[e]) / (x[e + 1] - x[e]),
            h = c + g * u,
            i = j(h, a, d);return i >= q ? k(b, h) : 0 === i ? h : m(b, c, c + u);
      }function o() {
        y = !0, a === c && d === e || l();
      }var p = 4,
          q = .001,
          r = 1e-7,
          s = 10,
          t = 11,
          u = 1 / (t - 1),
          v = "Float32Array" in b;if (4 !== arguments.length) return !1;for (var w = 0; w < 4; ++w) {
        if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
      }a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);var x = v ? new Float32Array(t) : new Array(t),
          y = !1,
          z = function z(b) {
        return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e);
      };z.getControlPoints = function () {
        return [{ x: a, y: c }, { x: d, y: e }];
      };var A = "generateBezier(" + [a, c, d, e] + ")";return z.toString = function () {
        return A;
      }, z;
    }function l(a, b) {
      var c = a;return u.isString(a) ? y.Easings[a] || (c = !1) : c = u.isArray(a) && 1 === a.length ? j.apply(null, a) : u.isArray(a) && 2 === a.length ? z.apply(null, a.concat([b])) : !(!u.isArray(a) || 4 !== a.length) && k.apply(null, a), !1 === c && (c = y.Easings[y.defaults.easing] ? y.defaults.easing : x), c;
    }function m(a) {
      if (a) {
        var b = y.timestamp && !0 !== a ? a : r.now(),
            c = y.State.calls.length;c > 1e4 && (y.State.calls = e(y.State.calls), c = y.State.calls.length);for (var f = 0; f < c; f++) {
          if (y.State.calls[f]) {
            var h = y.State.calls[f],
                i = h[0],
                j = h[2],
                k = h[3],
                l = !k,
                q = null,
                s = h[5],
                t = h[6];if (k || (k = y.State.calls[f][3] = b - 16), s) {
              if (!0 !== s.resume) continue;k = h[3] = Math.round(b - t - 16), h[5] = null;
            }t = h[6] = b - k;for (var v = Math.min(t / j.duration, 1), w = 0, x = i.length; w < x; w++) {
              var z = i[w],
                  B = z.element;if (g(B)) {
                var D = !1;if (j.display !== d && null !== j.display && "none" !== j.display) {
                  if ("flex" === j.display) {
                    var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];o.each(E, function (a, b) {
                      A.setPropertyValue(B, "display", b);
                    });
                  }A.setPropertyValue(B, "display", j.display);
                }j.visibility !== d && "hidden" !== j.visibility && A.setPropertyValue(B, "visibility", j.visibility);for (var F in z) {
                  if (z.hasOwnProperty(F) && "element" !== F) {
                    var G,
                        H = z[F],
                        I = u.isString(H.easing) ? y.Easings[H.easing] : H.easing;if (u.isString(H.pattern)) {
                      var J = 1 === v ? function (a, b, c) {
                        var d = H.endValue[b];return c ? Math.round(d) : d;
                      } : function (a, b, c) {
                        var d = H.startValue[b],
                            e = H.endValue[b] - d,
                            f = d + e * I(v, j, e);return c ? Math.round(f) : f;
                      };G = H.pattern.replace(/{(\d+)(!)?}/g, J);
                    } else if (1 === v) G = H.endValue;else {
                      var K = H.endValue - H.startValue;G = H.startValue + K * I(v, j, K);
                    }if (!l && G === H.currentValue) continue;if (H.currentValue = G, "tween" === F) q = G;else {
                      var L;if (A.Hooks.registered[F]) {
                        L = A.Hooks.getRoot(F);var M = g(B).rootPropertyValueCache[L];M && (H.rootPropertyValue = M);
                      }var N = A.setPropertyValue(B, F, H.currentValue + (p < 9 && 0 === parseFloat(G) ? "" : H.unitType), H.rootPropertyValue, H.scrollData);A.Hooks.registered[F] && (A.Normalizations.registered[L] ? g(B).rootPropertyValueCache[L] = A.Normalizations.registered[L]("extract", null, N[1]) : g(B).rootPropertyValueCache[L] = N[1]), "transform" === N[0] && (D = !0);
                    }
                  }
                }j.mobileHA && g(B).transformCache.translate3d === d && (g(B).transformCache.translate3d = "(0px, 0px, 0px)", D = !0), D && A.flushTransformCache(B);
              }
            }j.display !== d && "none" !== j.display && (y.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (y.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], v, Math.max(0, k + j.duration - b), k, q), 1 === v && n(f);
          }
        }
      }y.State.isTicking && C(m);
    }function n(a, b) {
      if (!y.State.calls[a]) return !1;for (var c = y.State.calls[a][0], e = y.State.calls[a][1], f = y.State.calls[a][2], h = y.State.calls[a][4], i = !1, j = 0, k = c.length; j < k; j++) {
        var l = c[j].element;b || f.loop || ("none" === f.display && A.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && A.setPropertyValue(l, "visibility", f.visibility));var m = g(l);if (!0 !== f.loop && (o.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(o.queue(l)[1])) && m) {
          m.isAnimating = !1, m.rootPropertyValueCache = {};var n = !1;o.each(A.Lists.transforms3D, function (a, b) {
            var c = /^scale/.test(b) ? 1 : 0,
                e = m.transformCache[b];m.transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete m.transformCache[b]);
          }), f.mobileHA && (n = !0, delete m.transformCache.translate3d), n && A.flushTransformCache(l), A.Values.removeClass(l, "velocity-animating");
        }if (!b && f.complete && !f.loop && j === k - 1) try {
          f.complete.call(e, e);
        } catch (r) {
          setTimeout(function () {
            throw r;
          }, 1);
        }h && !0 !== f.loop && h(e), m && !0 === f.loop && !b && (o.each(m.tweensContainer, function (a, b) {
          if (/^rotate/.test(a) && (parseFloat(b.startValue) - parseFloat(b.endValue)) % 360 == 0) {
            var c = b.startValue;b.startValue = b.endValue, b.endValue = c;
          }/^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100);
        }), y(l, "reverse", { loop: !0, delay: f.delay })), !1 !== f.queue && o.dequeue(l, f.queue);
      }y.State.calls[a] = !1;for (var p = 0, q = y.State.calls.length; p < q; p++) {
        if (!1 !== y.State.calls[p]) {
          i = !0;break;
        }
      }!1 === i && (y.State.isTicking = !1, delete y.State.calls, y.State.calls = []);
    }var o,
        p = function () {
      if (c.documentMode) return c.documentMode;for (var a = 7; a > 4; a--) {
        var b = c.createElement("div");if (b.innerHTML = "\x3c!--[if IE " + a + "]><span></span><![endif]--\x3e", b.getElementsByTagName("span").length) return b = null, a;
      }return d;
    }(),
        q = function () {
      var a = 0;return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function (b) {
        var c,
            d = new Date().getTime();return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function () {
          b(d + c);
        }, c);
      };
    }(),
        r = function () {
      var a = b.performance || {};if ("function" != typeof a.now) {
        var c = a.timing && a.timing.navigationStart ? a.timing.navigationStart : new Date().getTime();a.now = function () {
          return new Date().getTime() - c;
        };
      }return a;
    }(),
        s = function () {
      var a = Array.prototype.slice;try {
        return a.call(c.documentElement), a;
      } catch (b) {
        return function (b, c) {
          var d = this.length;if ("number" != typeof b && (b = 0), "number" != typeof c && (c = d), this.slice) return a.call(this, b, c);var e,
              f = [],
              g = b >= 0 ? b : Math.max(0, d + b),
              h = c < 0 ? d + c : Math.min(c, d),
              i = h - g;if (i > 0) if (f = new Array(i), this.charAt) for (e = 0; e < i; e++) {
            f[e] = this.charAt(g + e);
          } else for (e = 0; e < i; e++) {
            f[e] = this[g + e];
          }return f;
        };
      }
    }(),
        t = function t() {
      return Array.prototype.includes ? function (a, b) {
        return a.includes(b);
      } : Array.prototype.indexOf ? function (a, b) {
        return a.indexOf(b) >= 0;
      } : function (a, b) {
        for (var c = 0; c < a.length; c++) {
          if (a[c] === b) return !0;
        }return !1;
      };
    },
        u = { isNumber: function isNumber(a) {
        return "number" == typeof a;
      }, isString: function isString(a) {
        return "string" == typeof a;
      }, isArray: Array.isArray || function (a) {
        return "[object Array]" === Object.prototype.toString.call(a);
      }, isFunction: function isFunction(a) {
        return "[object Function]" === Object.prototype.toString.call(a);
      }, isNode: function isNode(a) {
        return a && a.nodeType;
      }, isWrapped: function isWrapped(a) {
        return a && a !== b && u.isNumber(a.length) && !u.isString(a) && !u.isFunction(a) && !u.isNode(a) && (0 === a.length || u.isNode(a[0]));
      }, isSVG: function isSVG(a) {
        return b.SVGElement && a instanceof b.SVGElement;
      }, isEmptyObject: function isEmptyObject(a) {
        for (var b in a) {
          if (a.hasOwnProperty(b)) return !1;
        }return !0;
      } },
        v = !1;if (a.fn && a.fn.jquery ? (o = a, v = !0) : o = b.Velocity.Utilities, p <= 8 && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if (p <= 7) return void (jQuery.fn.velocity = jQuery.fn.animate);var w = 400,
        x = "swing",
        y = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(b.navigator.userAgent), isAndroid: /Android/i.test(b.navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(b.navigator.userAgent), isChrome: b.chrome, isFirefox: /Firefox/i.test(b.navigator.userAgent), prefixElement: c.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [], delayedElements: { count: 0 } }, CSS: {}, Utilities: o, Redirects: {}, Easings: {}, Promise: b.Promise, defaults: { queue: "", duration: w, easing: x, begin: d, complete: d, progress: d, display: d, visibility: d, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0, promiseRejectEmpty: !0 }, init: function init(a) {
        o.data(a, "velocity", { isSVG: u.isSVG(a), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
      }, hook: null, mock: !1, version: { major: 1, minor: 5, patch: 2 }, debug: !1, timestamp: !0, pauseAll: function pauseAll(a) {
        var b = new Date().getTime();o.each(y.State.calls, function (b, c) {
          if (c) {
            if (a !== d && (c[2].queue !== a || !1 === c[2].queue)) return !0;c[5] = { resume: !1 };
          }
        }), o.each(y.State.delayedElements, function (a, c) {
          c && h(c, b);
        });
      }, resumeAll: function resumeAll(a) {
        var b = new Date().getTime();o.each(y.State.calls, function (b, c) {
          if (c) {
            if (a !== d && (c[2].queue !== a || !1 === c[2].queue)) return !0;c[5] && (c[5].resume = !0);
          }
        }), o.each(y.State.delayedElements, function (a, c) {
          c && i(c, b);
        });
      } };b.pageYOffset !== d ? (y.State.scrollAnchor = b, y.State.scrollPropertyLeft = "pageXOffset", y.State.scrollPropertyTop = "pageYOffset") : (y.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, y.State.scrollPropertyLeft = "scrollLeft", y.State.scrollPropertyTop = "scrollTop");var z = function () {
      function a(a) {
        return -a.tension * a.x - a.friction * a.v;
      }function b(b, c, d) {
        var e = { x: b.x + d.dx * c, v: b.v + d.dv * c, tension: b.tension, friction: b.friction };return { dx: e.v, dv: a(e) };
      }function c(c, d) {
        var e = { dx: c.v, dv: a(c) },
            f = b(c, .5 * d, e),
            g = b(c, .5 * d, f),
            h = b(c, d, g),
            i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
            j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);return c.x = c.x + i * d, c.v = c.v + j * d, c;
      }return function d(a, b, e) {
        var f,
            g,
            h,
            i = { x: -1, v: 0, tension: null, friction: null },
            j = [0],
            k = 0;for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * .016) : g = .016;;) {
          if (h = c(h || i, g), j.push(1 + h.x), k += 16, !(Math.abs(h.x) > 1e-4 && Math.abs(h.v) > 1e-4)) break;
        }return f ? function (a) {
          return j[a * (j.length - 1) | 0];
        } : k;
      };
    }();y.Easings = { linear: function linear(a) {
        return a;
      }, swing: function swing(a) {
        return .5 - Math.cos(a * Math.PI) / 2;
      }, spring: function spring(a) {
        return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a);
      } }, o.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (a, b) {
      y.Easings[b[0]] = k.apply(null, b[1]);
    });var A = y.CSS = { RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi }, Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"], units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"], colorNames: { aliceblue: "240,248,255", antiquewhite: "250,235,215", aquamarine: "127,255,212", aqua: "0,255,255", azure: "240,255,255", beige: "245,245,220", bisque: "255,228,196", black: "0,0,0", blanchedalmond: "255,235,205", blueviolet: "138,43,226", blue: "0,0,255", brown: "165,42,42", burlywood: "222,184,135", cadetblue: "95,158,160", chartreuse: "127,255,0", chocolate: "210,105,30", coral: "255,127,80", cornflowerblue: "100,149,237", cornsilk: "255,248,220", crimson: "220,20,60", cyan: "0,255,255", darkblue: "0,0,139", darkcyan: "0,139,139", darkgoldenrod: "184,134,11", darkgray: "169,169,169", darkgrey: "169,169,169", darkgreen: "0,100,0", darkkhaki: "189,183,107", darkmagenta: "139,0,139", darkolivegreen: "85,107,47", darkorange: "255,140,0", darkorchid: "153,50,204", darkred: "139,0,0", darksalmon: "233,150,122", darkseagreen: "143,188,143", darkslateblue: "72,61,139", darkslategray: "47,79,79", darkturquoise: "0,206,209", darkviolet: "148,0,211", deeppink: "255,20,147", deepskyblue: "0,191,255", dimgray: "105,105,105", dimgrey: "105,105,105", dodgerblue: "30,144,255", firebrick: "178,34,34", floralwhite: "255,250,240", forestgreen: "34,139,34", fuchsia: "255,0,255", gainsboro: "220,220,220", ghostwhite: "248,248,255", gold: "255,215,0", goldenrod: "218,165,32", gray: "128,128,128", grey: "128,128,128", greenyellow: "173,255,47", green: "0,128,0", honeydew: "240,255,240", hotpink: "255,105,180", indianred: "205,92,92", indigo: "75,0,130", ivory: "255,255,240", khaki: "240,230,140", lavenderblush: "255,240,245", lavender: "230,230,250", lawngreen: "124,252,0", lemonchiffon: "255,250,205", lightblue: "173,216,230", lightcoral: "240,128,128", lightcyan: "224,255,255", lightgoldenrodyellow: "250,250,210", lightgray: "211,211,211", lightgrey: "211,211,211", lightgreen: "144,238,144", lightpink: "255,182,193", lightsalmon: "255,160,122", lightseagreen: "32,178,170", lightskyblue: "135,206,250", lightslategray: "119,136,153", lightsteelblue: "176,196,222", lightyellow: "255,255,224", limegreen: "50,205,50", lime: "0,255,0", linen: "250,240,230", magenta: "255,0,255", maroon: "128,0,0", mediumaquamarine: "102,205,170", mediumblue: "0,0,205", mediumorchid: "186,85,211", mediumpurple: "147,112,219", mediumseagreen: "60,179,113", mediumslateblue: "123,104,238", mediumspringgreen: "0,250,154", mediumturquoise: "72,209,204", mediumvioletred: "199,21,133", midnightblue: "25,25,112", mintcream: "245,255,250", mistyrose: "255,228,225", moccasin: "255,228,181", navajowhite: "255,222,173", navy: "0,0,128", oldlace: "253,245,230", olivedrab: "107,142,35", olive: "128,128,0", orangered: "255,69,0", orange: "255,165,0", orchid: "218,112,214", palegoldenrod: "238,232,170", palegreen: "152,251,152", paleturquoise: "175,238,238", palevioletred: "219,112,147", papayawhip: "255,239,213", peachpuff: "255,218,185", peru: "205,133,63", pink: "255,192,203", plum: "221,160,221", powderblue: "176,224,230", purple: "128,0,128", red: "255,0,0", rosybrown: "188,143,143", royalblue: "65,105,225", saddlebrown: "139,69,19", salmon: "250,128,114", sandybrown: "244,164,96", seagreen: "46,139,87", seashell: "255,245,238", sienna: "160,82,45", silver: "192,192,192", skyblue: "135,206,235", slateblue: "106,90,205", slategray: "112,128,144", snow: "255,250,250", springgreen: "0,255,127", steelblue: "70,130,180", tan: "210,180,140", teal: "0,128,128", thistle: "216,191,216", tomato: "255,99,71", turquoise: "64,224,208", violet: "238,130,238", wheat: "245,222,179", whitesmoke: "245,245,245", white: "255,255,255", yellowgreen: "154,205,50", yellow: "255,255,0" } }, Hooks: { templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] }, registered: {}, register: function register() {
          for (var a = 0; a < A.Lists.colors.length; a++) {
            var b = "color" === A.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";A.Hooks.templates[A.Lists.colors[a]] = ["Red Green Blue Alpha", b];
          }var c, d, e;if (p) for (c in A.Hooks.templates) {
            if (A.Hooks.templates.hasOwnProperty(c)) {
              d = A.Hooks.templates[c], e = d[0].split(" ");var f = d[1].match(A.RegEx.valueSplit);"Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), A.Hooks.templates[c] = [e.join(" "), f.join(" ")]);
            }
          }for (c in A.Hooks.templates) {
            if (A.Hooks.templates.hasOwnProperty(c)) {
              d = A.Hooks.templates[c], e = d[0].split(" ");for (var g in e) {
                if (e.hasOwnProperty(g)) {
                  var h = c + e[g],
                      i = g;A.Hooks.registered[h] = [c, i];
                }
              }
            }
          }
        }, getRoot: function getRoot(a) {
          var b = A.Hooks.registered[a];return b ? b[0] : a;
        }, getUnit: function getUnit(a, b) {
          var c = (a.substr(b || 0, 5).match(/^[a-z%]+/) || [])[0] || "";return c && t(A.Lists.units, c) ? c : "";
        }, fixColors: function fixColors(a) {
          return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function (a, b, c) {
            return A.Lists.colorNames.hasOwnProperty(c) ? (b || "rgba(") + A.Lists.colorNames[c] + (b ? "" : ",1)") : b + c;
          });
        }, cleanRootPropertyValue: function cleanRootPropertyValue(a, b) {
          return A.RegEx.valueUnwrap.test(b) && (b = b.match(A.RegEx.valueUnwrap)[1]), A.Values.isCSSNullValue(b) && (b = A.Hooks.templates[a][1]), b;
        }, extractValue: function extractValue(a, b) {
          var c = A.Hooks.registered[a];if (c) {
            var d = c[0],
                e = c[1];return b = A.Hooks.cleanRootPropertyValue(d, b), b.toString().match(A.RegEx.valueSplit)[e];
          }return b;
        }, injectValue: function injectValue(a, b, c) {
          var d = A.Hooks.registered[a];if (d) {
            var e,
                f = d[0],
                g = d[1];return c = A.Hooks.cleanRootPropertyValue(f, c), e = c.toString().match(A.RegEx.valueSplit), e[g] = b, e.join(" ");
          }return c;
        } }, Normalizations: { registered: { clip: function clip(a, b, c) {
            switch (a) {case "name":
                return "clip";case "extract":
                var d;return A.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(A.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;case "inject":
                return "rect(" + c + ")";}
          }, blur: function blur(a, b, c) {
            switch (a) {case "name":
                return y.State.isFirefox ? "filter" : "-webkit-filter";case "extract":
                var d = parseFloat(c);if (!d && 0 !== d) {
                  var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d = e ? e[1] : 0;
                }return d;case "inject":
                return parseFloat(c) ? "blur(" + c + ")" : "none";}
          }, opacity: function opacity(a, b, c) {
            if (p <= 8) switch (a) {case "name":
                return "filter";case "extract":
                var d = c.toString().match(/alpha\(opacity=(.*)\)/i);return c = d ? d[1] / 100 : 1;case "inject":
                return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")";} else switch (a) {case "name":
                return "opacity";case "extract":case "inject":
                return c;}
          } }, register: function register() {
          function a(a, b, c) {
            if ("border-box" === A.getPropertyValue(b, "boxSizing").toString().toLowerCase() === (c || !1)) {
              var d,
                  e,
                  f = 0,
                  g = "width" === a ? ["Left", "Right"] : ["Top", "Bottom"],
                  h = ["padding" + g[0], "padding" + g[1], "border" + g[0] + "Width", "border" + g[1] + "Width"];for (d = 0; d < h.length; d++) {
                e = parseFloat(A.getPropertyValue(b, h[d])), isNaN(e) || (f += e);
              }return c ? -f : f;
            }return 0;
          }function b(b, c) {
            return function (d, e, f) {
              switch (d) {case "name":
                  return b;case "extract":
                  return parseFloat(f) + a(b, e, c);case "inject":
                  return parseFloat(f) - a(b, e, c) + "px";}
            };
          }p && !(p > 9) || y.State.isGingerbread || (A.Lists.transformsBase = A.Lists.transformsBase.concat(A.Lists.transforms3D));for (var c = 0; c < A.Lists.transformsBase.length; c++) {
            !function () {
              var a = A.Lists.transformsBase[c];A.Normalizations.registered[a] = function (b, c, e) {
                switch (b) {case "name":
                    return "transform";case "extract":
                    return g(c) === d || g(c).transformCache[a] === d ? /^scale/i.test(a) ? 1 : 0 : g(c).transformCache[a].replace(/[()]/g, "");case "inject":
                    var f = !1;switch (a.substr(0, a.length - 1)) {case "translate":
                        f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case "scal":case "scale":
                        y.State.isAndroid && g(c).transformCache[a] === d && e < 1 && (e = 1), f = !/(\d)$/i.test(e);break;case "skew":case "rotate":
                        f = !/(deg|\d)$/i.test(e);}return f || (g(c).transformCache[a] = "(" + e + ")"), g(c).transformCache[a];}
              };
            }();
          }for (var e = 0; e < A.Lists.colors.length; e++) {
            !function () {
              var a = A.Lists.colors[e];A.Normalizations.registered[a] = function (b, c, e) {
                switch (b) {case "name":
                    return a;case "extract":
                    var f;if (A.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;else {
                      var g,
                          h = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };/^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : A.RegEx.isHex.test(e) ? g = "rgb(" + A.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(A.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                    }return (!p || p > 8) && 3 === f.split(" ").length && (f += " 1"), f;case "inject":
                    return (/^rgb/.test(e) ? e : (p <= 8 ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (p <= 8 ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                    );}
              };
            }();
          }A.Normalizations.registered.innerWidth = b("width", !0), A.Normalizations.registered.innerHeight = b("height", !0), A.Normalizations.registered.outerWidth = b("width"), A.Normalizations.registered.outerHeight = b("height");
        } }, Names: { camelCase: function camelCase(a) {
          return a.replace(/-(\w)/g, function (a, b) {
            return b.toUpperCase();
          });
        }, SVGAttribute: function SVGAttribute(a) {
          var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return (p || y.State.isAndroid && !y.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a);
        }, prefixCheck: function prefixCheck(a) {
          if (y.State.prefixMatches[a]) return [y.State.prefixMatches[a], !0];for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; c < d; c++) {
            var e;if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function (a) {
              return a.toUpperCase();
            }), u.isString(y.State.prefixElement.style[e])) return y.State.prefixMatches[a] = e, [e, !0];
          }return [a, !1];
        } }, Values: { hexToRgb: function hexToRgb(a) {
          var b,
              c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a = a.replace(c, function (a, b, c, d) {
            return b + b + c + c + d + d;
          }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0];
        }, isCSSNullValue: function isCSSNullValue(a) {
          return !a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a);
        }, getUnitType: function getUnitType(a) {
          return (/^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
          );
        }, getDisplayType: function getDisplayType(a) {
          var b = a && a.tagName.toString().toLowerCase();return (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block"
          );
        }, addClass: function addClass(a, b) {
          if (a) if (a.classList) a.classList.add(b);else if (u.isString(a.className)) a.className += (a.className.length ? " " : "") + b;else {
            var c = a.getAttribute(p <= 7 ? "className" : "class") || "";a.setAttribute("class", c + (c ? " " : "") + b);
          }
        }, removeClass: function removeClass(a, b) {
          if (a) if (a.classList) a.classList.remove(b);else if (u.isString(a.className)) a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ");else {
            var c = a.getAttribute(p <= 7 ? "className" : "class") || "";a.setAttribute("class", c.replace(new RegExp("(^|s)" + b.split(" ").join("|") + "(s|$)", "gi"), " "));
          }
        } }, getPropertyValue: function getPropertyValue(a, c, e, f) {
        function h(a, c) {
          var e = 0;if (p <= 8) e = o.css(a, c);else {
            var i = !1;/^(width|height)$/.test(c) && 0 === A.getPropertyValue(a, "display") && (i = !0, A.setPropertyValue(a, "display", A.Values.getDisplayType(a)));var j = function j() {
              i && A.setPropertyValue(a, "display", "none");
            };if (!f) {
              if ("height" === c && "border-box" !== A.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                var k = a.offsetHeight - (parseFloat(A.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingBottom")) || 0);return j(), k;
              }if ("width" === c && "border-box" !== A.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                var l = a.offsetWidth - (parseFloat(A.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(A.getPropertyValue(a, "paddingRight")) || 0);return j(), l;
              }
            }var m;m = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), e = 9 === p && "filter" === c ? m.getPropertyValue(c) : m[c], "" !== e && null !== e || (e = a.style[c]), j();
          }if ("auto" === e && /^(top|right|bottom|left)$/i.test(c)) {
            var n = h(a, "position");("fixed" === n || "absolute" === n && /top|left/i.test(c)) && (e = o(a).position()[c] + "px");
          }return e;
        }var i;if (A.Hooks.registered[c]) {
          var j = c,
              k = A.Hooks.getRoot(j);e === d && (e = A.getPropertyValue(a, A.Names.prefixCheck(k)[0])), A.Normalizations.registered[k] && (e = A.Normalizations.registered[k]("extract", a, e)), i = A.Hooks.extractValue(j, e);
        } else if (A.Normalizations.registered[c]) {
          var l, m;l = A.Normalizations.registered[c]("name", a), "transform" !== l && (m = h(a, A.Names.prefixCheck(l)[0]), A.Values.isCSSNullValue(m) && A.Hooks.templates[c] && (m = A.Hooks.templates[c][1])), i = A.Normalizations.registered[c]("extract", a, m);
        }if (!/^[\d-]/.test(i)) {
          var n = g(a);if (n && n.isSVG && A.Names.SVGAttribute(c)) {
            if (/^(height|width)$/i.test(c)) try {
              i = a.getBBox()[c];
            } catch (q) {
              i = 0;
            } else i = a.getAttribute(c);
          } else i = h(a, A.Names.prefixCheck(c)[0]);
        }return A.Values.isCSSNullValue(i) && (i = 0), y.debug >= 2 && console.log("Get " + c + ": " + i), i;
      }, setPropertyValue: function setPropertyValue(a, c, d, e, f) {
        var h = c;if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);else if (A.Normalizations.registered[c] && "transform" === A.Normalizations.registered[c]("name", a)) A.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];else {
          if (A.Hooks.registered[c]) {
            var i = c,
                j = A.Hooks.getRoot(c);e = e || A.getPropertyValue(a, j), d = A.Hooks.injectValue(i, d, e), c = j;
          }if (A.Normalizations.registered[c] && (d = A.Normalizations.registered[c]("inject", a, d), c = A.Normalizations.registered[c]("name", a)), h = A.Names.prefixCheck(c)[0], p <= 8) try {
            a.style[h] = d;
          } catch (l) {
            y.debug && console.log("Browser does not support [" + d + "] for [" + h + "]");
          } else {
            var k = g(a);k && k.isSVG && A.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d;
          }y.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d);
        }return [h, d];
      }, flushTransformCache: function flushTransformCache(a) {
        var b = "",
            c = g(a);if ((p || y.State.isAndroid && !y.State.isChrome) && c && c.isSVG) {
          var d = function d(b) {
            return parseFloat(A.getPropertyValue(a, b));
          },
              e = { translate: [d("translateX"), d("translateY")], skewX: [d("skewX")], skewY: [d("skewY")], scale: 1 !== d("scale") ? [d("scale"), d("scale")] : [d("scaleX"), d("scaleY")], rotate: [d("rotateZ"), 0, 0] };o.each(g(a).transformCache, function (a) {
            /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), e[a] && (b += a + "(" + e[a].join(" ") + ") ", delete e[a]);
          });
        } else {
          var f, h;o.each(g(a).transformCache, function (c) {
            if (f = g(a).transformCache[c], "transformPerspective" === c) return h = f, !0;9 === p && "rotateZ" === c && (c = "rotate"), b += c + f + " ";
          }), h && (b = "perspective" + h + " " + b);
        }A.setPropertyValue(a, "transform", b);
      } };A.Hooks.register(), A.Normalizations.register(), y.hook = function (a, b, c) {
      var e;return a = f(a), o.each(a, function (a, f) {
        if (g(f) === d && y.init(f), c === d) e === d && (e = A.getPropertyValue(f, b));else {
          var h = A.setPropertyValue(f, b, c);"transform" === h[0] && y.CSS.flushTransformCache(f), e = h;
        }
      }), e;
    };var B = function B() {
      function a() {
        return k ? z.promise || null : p;
      }function e(a, e) {
        function f(f) {
          var k, n;if (i.begin && 0 === D) try {
            i.begin.call(r, r);
          } catch (V) {
            setTimeout(function () {
              throw V;
            }, 1);
          }if ("scroll" === G) {
            var p,
                q,
                w,
                x = /^x$/i.test(i.axis) ? "Left" : "Top",
                B = parseFloat(i.offset) || 0;i.container ? u.isWrapped(i.container) || u.isNode(i.container) ? (i.container = i.container[0] || i.container, p = i.container["scroll" + x], w = p + o(a).position()[x.toLowerCase()] + B) : i.container = null : (p = y.State.scrollAnchor[y.State["scrollProperty" + x]], q = y.State.scrollAnchor[y.State["scrollProperty" + ("Left" === x ? "Top" : "Left")]], w = o(a).offset()[x.toLowerCase()] + B), j = { scroll: { rootPropertyValue: !1, startValue: p, currentValue: p, endValue: w, unitType: "", easing: i.easing, scrollData: { container: i.container, direction: x, alternateValue: q } }, element: a }, y.debug && console.log("tweensContainer (scroll): ", j.scroll, a);
          } else if ("reverse" === G) {
            if (!(k = g(a))) return;if (!k.tweensContainer) return void o.dequeue(a, i.queue);"none" === k.opts.display && (k.opts.display = "auto"), "hidden" === k.opts.visibility && (k.opts.visibility = "visible"), k.opts.loop = !1, k.opts.begin = null, k.opts.complete = null, v.easing || delete i.easing, v.duration || delete i.duration, i = o.extend({}, k.opts, i), n = o.extend(!0, {}, k ? k.tweensContainer : null);for (var E in n) {
              if (n.hasOwnProperty(E) && "element" !== E) {
                var F = n[E].startValue;n[E].startValue = n[E].currentValue = n[E].endValue, n[E].endValue = F, u.isEmptyObject(v) || (n[E].easing = i.easing), y.debug && console.log("reverse tweensContainer (" + E + "): " + (0, _stringify2.default)(n[E]), a);
              }
            }j = n;
          } else if ("start" === G) {
            k = g(a), k && k.tweensContainer && !0 === k.isAnimating && (n = k.tweensContainer);var H = function H(e, f) {
              var g,
                  l = A.Hooks.getRoot(e),
                  m = !1,
                  p = f[0],
                  q = f[1],
                  r = f[2];if (!(k && k.isSVG || "tween" === l || !1 !== A.Names.prefixCheck(l)[1] || A.Normalizations.registered[l] !== d)) return void (y.debug && console.log("Skipping [" + l + "] due to a lack of browser support."));(i.display !== d && null !== i.display && "none" !== i.display || i.visibility !== d && "hidden" !== i.visibility) && /opacity|filter/.test(e) && !r && 0 !== p && (r = 0), i._cacheValues && n && n[e] ? (r === d && (r = n[e].endValue + n[e].unitType), m = k.rootPropertyValueCache[l]) : A.Hooks.registered[e] ? r === d ? (m = A.getPropertyValue(a, l), r = A.getPropertyValue(a, e, m)) : m = A.Hooks.templates[l][1] : r === d && (r = A.getPropertyValue(a, e));var s,
                  t,
                  v,
                  w = !1,
                  x = function x(a, b) {
                var c, d;return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (a) {
                  return c = a, "";
                }), c || (c = A.Values.getUnitType(a)), [d, c];
              };if (r !== p && u.isString(r) && u.isString(p)) {
                g = "";var z = 0,
                    B = 0,
                    C = [],
                    D = [],
                    E = 0,
                    F = 0,
                    G = 0;for (r = A.Hooks.fixColors(r), p = A.Hooks.fixColors(p); z < r.length && B < p.length;) {
                  var H = r[z],
                      I = p[B];if (/[\d\.-]/.test(H) && /[\d\.-]/.test(I)) {
                    for (var J = H, K = I, L = ".", N = "."; ++z < r.length;) {
                      if ((H = r[z]) === L) L = "..";else if (!/\d/.test(H)) break;J += H;
                    }for (; ++B < p.length;) {
                      if ((I = p[B]) === N) N = "..";else if (!/\d/.test(I)) break;K += I;
                    }var O = A.Hooks.getUnit(r, z),
                        P = A.Hooks.getUnit(p, B);if (z += O.length, B += P.length, O === P) J === K ? g += J + O : (g += "{" + C.length + (F ? "!" : "") + "}" + O, C.push(parseFloat(J)), D.push(parseFloat(K)));else {
                      var Q = parseFloat(J),
                          R = parseFloat(K);g += (E < 5 ? "calc" : "") + "(" + (Q ? "{" + C.length + (F ? "!" : "") + "}" : "0") + O + " + " + (R ? "{" + (C.length + (Q ? 1 : 0)) + (F ? "!" : "") + "}" : "0") + P + ")", Q && (C.push(Q), D.push(0)), R && (C.push(0), D.push(R));
                    }
                  } else {
                    if (H !== I) {
                      E = 0;break;
                    }g += H, z++, B++, 0 === E && "c" === H || 1 === E && "a" === H || 2 === E && "l" === H || 3 === E && "c" === H || E >= 4 && "(" === H ? E++ : (E && E < 5 || E >= 4 && ")" === H && --E < 5) && (E = 0), 0 === F && "r" === H || 1 === F && "g" === H || 2 === F && "b" === H || 3 === F && "a" === H || F >= 3 && "(" === H ? (3 === F && "a" === H && (G = 1), F++) : G && "," === H ? ++G > 3 && (F = G = 0) : (G && F < (G ? 5 : 4) || F >= (G ? 4 : 3) && ")" === H && --F < (G ? 5 : 4)) && (F = G = 0);
                  }
                }z === r.length && B === p.length || (y.debug && console.error('Trying to pattern match mis-matched strings ["' + p + '", "' + r + '"]'), g = d), g && (C.length ? (y.debug && console.log('Pattern found "' + g + '" -> ', C, D, "[" + r + "," + p + "]"), r = C, p = D, t = v = "") : g = d);
              }g || (s = x(e, r), r = s[0], v = s[1], s = x(e, p), p = s[0].replace(/^([+-\/*])=/, function (a, b) {
                return w = b, "";
              }), t = s[1], r = parseFloat(r) || 0, p = parseFloat(p) || 0, "%" === t && (/^(fontSize|lineHeight)$/.test(e) ? (p /= 100, t = "em") : /^scale/.test(e) ? (p /= 100, t = "") : /(Red|Green|Blue)$/i.test(e) && (p = p / 100 * 255, t = "")));if (/[\/*]/.test(w)) t = v;else if (v !== t && 0 !== r) if (0 === p) t = v;else {
                h = h || function () {
                  var d = { myParent: a.parentNode || c.body, position: A.getPropertyValue(a, "position"), fontSize: A.getPropertyValue(a, "fontSize") },
                      e = d.position === M.lastPosition && d.myParent === M.lastParent,
                      f = d.fontSize === M.lastFontSize;M.lastParent = d.myParent, M.lastPosition = d.position, M.lastFontSize = d.fontSize;var g = {};if (f && e) g.emToPx = M.lastEmToPx, g.percentToPxWidth = M.lastPercentToPxWidth, g.percentToPxHeight = M.lastPercentToPxHeight;else {
                    var h = k && k.isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");y.init(h), d.myParent.appendChild(h), o.each(["overflow", "overflowX", "overflowY"], function (a, b) {
                      y.CSS.setPropertyValue(h, b, "hidden");
                    }), y.CSS.setPropertyValue(h, "position", d.position), y.CSS.setPropertyValue(h, "fontSize", d.fontSize), y.CSS.setPropertyValue(h, "boxSizing", "content-box"), o.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (a, b) {
                      y.CSS.setPropertyValue(h, b, "100%");
                    }), y.CSS.setPropertyValue(h, "paddingLeft", "100em"), g.percentToPxWidth = M.lastPercentToPxWidth = (parseFloat(A.getPropertyValue(h, "width", null, !0)) || 1) / 100, g.percentToPxHeight = M.lastPercentToPxHeight = (parseFloat(A.getPropertyValue(h, "height", null, !0)) || 1) / 100, g.emToPx = M.lastEmToPx = (parseFloat(A.getPropertyValue(h, "paddingLeft")) || 1) / 100, d.myParent.removeChild(h);
                  }return null === M.remToPx && (M.remToPx = parseFloat(A.getPropertyValue(c.body, "fontSize")) || 16), null === M.vwToPx && (M.vwToPx = parseFloat(b.innerWidth) / 100, M.vhToPx = parseFloat(b.innerHeight) / 100), g.remToPx = M.remToPx, g.vwToPx = M.vwToPx, g.vhToPx = M.vhToPx, y.debug >= 1 && console.log("Unit ratios: " + (0, _stringify2.default)(g), a), g;
                }();var S = /margin|padding|left|right|width|text|word|letter/i.test(e) || /X$/.test(e) || "x" === e ? "x" : "y";switch (v) {case "%":
                    r *= "x" === S ? h.percentToPxWidth : h.percentToPxHeight;break;case "px":
                    break;default:
                    r *= h[v + "ToPx"];}switch (t) {case "%":
                    r *= 1 / ("x" === S ? h.percentToPxWidth : h.percentToPxHeight);break;case "px":
                    break;default:
                    r *= 1 / h[t + "ToPx"];}
              }switch (w) {case "+":
                  p = r + p;break;case "-":
                  p = r - p;break;case "*":
                  p *= r;break;case "/":
                  p = r / p;}j[e] = { rootPropertyValue: m, startValue: r, currentValue: r, endValue: p, unitType: t, easing: q }, g && (j[e].pattern = g), y.debug && console.log("tweensContainer (" + e + "): " + (0, _stringify2.default)(j[e]), a);
            };for (var I in s) {
              if (s.hasOwnProperty(I)) {
                var J = A.Names.camelCase(I),
                    K = function (b, c) {
                  var d, f, g;return u.isFunction(b) && (b = b.call(a, e, C)), u.isArray(b) ? (d = b[0], !u.isArray(b[1]) && /^[\d-]/.test(b[1]) || u.isFunction(b[1]) || A.RegEx.isHex.test(b[1]) ? g = b[1] : u.isString(b[1]) && !A.RegEx.isHex.test(b[1]) && y.Easings[b[1]] || u.isArray(b[1]) ? (f = c ? b[1] : l(b[1], i.duration), g = b[2]) : g = b[1] || b[2]) : d = b, c || (f = f || i.easing), u.isFunction(d) && (d = d.call(a, e, C)), u.isFunction(g) && (g = g.call(a, e, C)), [d || 0, f, g];
                }(s[I]);if (t(A.Lists.colors, J)) {
                  var L = K[0],
                      O = K[1],
                      P = K[2];if (A.RegEx.isHex.test(L)) {
                    for (var Q = ["Red", "Green", "Blue"], R = A.Values.hexToRgb(L), S = P ? A.Values.hexToRgb(P) : d, T = 0; T < Q.length; T++) {
                      var U = [R[T]];O && U.push(O), S !== d && U.push(S[T]), H(J + Q[T], U);
                    }continue;
                  }
                }H(J, K);
              }
            }j.element = a;
          }j.element && (A.Values.addClass(a, "velocity-animating"), N.push(j), k = g(a), k && ("" === i.queue && (k.tweensContainer = j, k.opts = i), k.isAnimating = !0), D === C - 1 ? (y.State.calls.push([N, r, i, null, z.resolver, null, 0]), !1 === y.State.isTicking && (y.State.isTicking = !0, m())) : D++);
        }var h,
            i = o.extend({}, y.defaults, v),
            j = {};switch (g(a) === d && y.init(a), parseFloat(i.delay) && !1 !== i.queue && o.queue(a, i.queue, function (b, c) {
          if (!0 === c) return !0;y.velocityQueueEntryFlag = !0;var d = y.State.delayedElements.count++;y.State.delayedElements[d] = a;var e = function (a) {
            return function () {
              y.State.delayedElements[a] = !1, b();
            };
          }(d);g(a).delayBegin = new Date().getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = { setTimeout: setTimeout(b, parseFloat(i.delay)), next: e };
        }), i.duration.toString().toLowerCase()) {case "fast":
            i.duration = 200;break;case "normal":
            i.duration = w;break;case "slow":
            i.duration = 600;break;default:
            i.duration = parseFloat(i.duration) || 1;}if (!1 !== y.mock && (!0 === y.mock ? i.duration = i.delay = 1 : (i.duration *= parseFloat(y.mock) || 1, i.delay *= parseFloat(y.mock) || 1)), i.easing = l(i.easing, i.duration), i.begin && !u.isFunction(i.begin) && (i.begin = null), i.progress && !u.isFunction(i.progress) && (i.progress = null), i.complete && !u.isFunction(i.complete) && (i.complete = null), i.display !== d && null !== i.display && (i.display = i.display.toString().toLowerCase(), "auto" === i.display && (i.display = y.CSS.Values.getDisplayType(a))), i.visibility !== d && null !== i.visibility && (i.visibility = i.visibility.toString().toLowerCase()), i.mobileHA = i.mobileHA && y.State.isMobile && !y.State.isGingerbread, !1 === i.queue) {
          if (i.delay) {
            var k = y.State.delayedElements.count++;y.State.delayedElements[k] = a;var n = function (a) {
              return function () {
                y.State.delayedElements[a] = !1, f();
              };
            }(k);g(a).delayBegin = new Date().getTime(), g(a).delay = parseFloat(i.delay), g(a).delayTimer = { setTimeout: setTimeout(f, parseFloat(i.delay)), next: n };
          } else f();
        } else o.queue(a, i.queue, function (a, b) {
          if (!0 === b) return z.promise && z.resolver(r), !0;y.velocityQueueEntryFlag = !0, f(a);
        });"" !== i.queue && "fx" !== i.queue || "inprogress" === o.queue(a)[0] || o.dequeue(a);
      }var j,
          k,
          p,
          q,
          r,
          s,
          v,
          x = arguments[0] && (arguments[0].p || o.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || u.isString(arguments[0].properties));u.isWrapped(this) ? (k = !1, q = 0, r = this, p = this) : (k = !0, q = 1, r = x ? arguments[0].elements || arguments[0].e : arguments[0]);var z = { promise: null, resolver: null, rejecter: null };if (k && y.Promise && (z.promise = new y.Promise(function (a, b) {
        z.resolver = a, z.rejecter = b;
      })), x ? (s = arguments[0].properties || arguments[0].p, v = arguments[0].options || arguments[0].o) : (s = arguments[q], v = arguments[q + 1]), !(r = f(r))) return void (z.promise && (s && v && !1 === v.promiseRejectEmpty ? z.resolver() : z.rejecter()));var C = r.length,
          D = 0;if (!/^(stop|finish|finishAll|pause|resume)$/i.test(s) && !o.isPlainObject(v)) {
        var E = q + 1;v = {};for (var F = E; F < arguments.length; F++) {
          u.isArray(arguments[F]) || !/^(fast|normal|slow)$/i.test(arguments[F]) && !/^\d/.test(arguments[F]) ? u.isString(arguments[F]) || u.isArray(arguments[F]) ? v.easing = arguments[F] : u.isFunction(arguments[F]) && (v.complete = arguments[F]) : v.duration = arguments[F];
        }
      }var G;switch (s) {case "scroll":
          G = "scroll";break;case "reverse":
          G = "reverse";break;case "pause":
          var H = new Date().getTime();return o.each(r, function (a, b) {
            h(b, H);
          }), o.each(y.State.calls, function (a, b) {
            var c = !1;b && o.each(b[1], function (a, e) {
              var f = v === d ? "" : v;return !0 !== f && b[2].queue !== f && (v !== d || !1 !== b[2].queue) || (o.each(r, function (a, d) {
                if (d === e) return b[5] = { resume: !1 }, c = !0, !1;
              }), !c && void 0);
            });
          }), a();case "resume":
          return o.each(r, function (a, b) {
            i(b, H);
          }), o.each(y.State.calls, function (a, b) {
            var c = !1;b && o.each(b[1], function (a, e) {
              var f = v === d ? "" : v;return !0 !== f && b[2].queue !== f && (v !== d || !1 !== b[2].queue) || !b[5] || (o.each(r, function (a, d) {
                if (d === e) return b[5].resume = !0, c = !0, !1;
              }), !c && void 0);
            });
          }), a();case "finish":case "finishAll":case "stop":
          o.each(r, function (a, b) {
            g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer), "finishAll" !== s || !0 !== v && !u.isString(v) || (o.each(o.queue(b, u.isString(v) ? v : ""), function (a, b) {
              u.isFunction(b) && b();
            }), o.queue(b, u.isString(v) ? v : "", []));
          });var I = [];return o.each(y.State.calls, function (a, b) {
            b && o.each(b[1], function (c, e) {
              var f = v === d ? "" : v;if (!0 !== f && b[2].queue !== f && (v !== d || !1 !== b[2].queue)) return !0;o.each(r, function (c, d) {
                if (d === e) if ((!0 === v || u.isString(v)) && (o.each(o.queue(d, u.isString(v) ? v : ""), function (a, b) {
                  u.isFunction(b) && b(null, !0);
                }), o.queue(d, u.isString(v) ? v : "", [])), "stop" === s) {
                  var h = g(d);h && h.tweensContainer && (!0 === f || "" === f) && o.each(h.tweensContainer, function (a, b) {
                    b.endValue = b.currentValue;
                  }), I.push(a);
                } else "finish" !== s && "finishAll" !== s || (b[2].duration = 1);
              });
            });
          }), "stop" === s && (o.each(I, function (a, b) {
            n(b, !0);
          }), z.promise && z.resolver(r)), a();default:
          if (!o.isPlainObject(s) || u.isEmptyObject(s)) {
            if (u.isString(s) && y.Redirects[s]) {
              j = o.extend({}, v);var J = j.duration,
                  K = j.delay || 0;return !0 === j.backwards && (r = o.extend(!0, [], r).reverse()), o.each(r, function (a, b) {
                parseFloat(j.stagger) ? j.delay = K + parseFloat(j.stagger) * a : u.isFunction(j.stagger) && (j.delay = K + j.stagger.call(b, a, C)), j.drag && (j.duration = parseFloat(J) || (/^(callout|transition)/.test(s) ? 1e3 : w), j.duration = Math.max(j.duration * (j.backwards ? 1 - a / C : (a + 1) / C), .75 * j.duration, 200)), y.Redirects[s].call(b, b, j || {}, a, C, r, z.promise ? z : d);
              }), a();
            }var L = "Velocity: First argument (" + s + ") was not a property map, a known action, or a registered redirect. Aborting.";return z.promise ? z.rejecter(new Error(L)) : b.console && console.log(L), a();
          }G = "start";}var M = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
          N = [];o.each(r, function (a, b) {
        u.isNode(b) && e(b, a);
      }), j = o.extend({}, y.defaults, v), j.loop = parseInt(j.loop, 10);var O = 2 * j.loop - 1;if (j.loop) for (var P = 0; P < O; P++) {
        var Q = { delay: j.delay, progress: j.progress };P === O - 1 && (Q.display = j.display, Q.visibility = j.visibility, Q.complete = j.complete), B(r, "reverse", Q);
      }return a();
    };y = o.extend(B, y), y.animate = B;var C = b.requestAnimationFrame || q;if (!y.State.isMobile && c.hidden !== d) {
      var D = function D() {
        c.hidden ? (C = function C(a) {
          return setTimeout(function () {
            a(!0);
          }, 16);
        }, m()) : C = b.requestAnimationFrame || q;
      };D(), c.addEventListener("visibilitychange", D);
    }return a.Velocity = y, a !== b && (a.fn.velocity = B, a.fn.velocity.defaults = y.defaults), o.each(["Down", "Up"], function (a, b) {
      y.Redirects["slide" + b] = function (a, c, e, f, g, h) {
        var i = o.extend({}, c),
            j = i.begin,
            k = i.complete,
            l = {},
            m = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" };i.display === d && (i.display = "Down" === b ? "inline" === y.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function () {
          0 === e && j && j.call(g, g);for (var c in m) {
            if (m.hasOwnProperty(c)) {
              l[c] = a.style[c];var d = A.getPropertyValue(a, c);m[c] = "Down" === b ? [d, 0] : [0, d];
            }
          }l.overflow = a.style.overflow, a.style.overflow = "hidden";
        }, i.complete = function () {
          for (var b in l) {
            l.hasOwnProperty(b) && (a.style[b] = l[b]);
          }e === f - 1 && (k && k.call(g, g), h && h.resolver(g));
        }, y(a, m, i);
      };
    }), o.each(["In", "Out"], function (a, b) {
      y.Redirects["fade" + b] = function (a, c, e, f, g, h) {
        var i = o.extend({}, c),
            j = i.complete,
            k = { opacity: "In" === b ? 1 : 0 };0 !== e && (i.begin = null), i.complete = e !== f - 1 ? null : function () {
          j && j.call(g, g), h && h.resolver(g);
        }, i.display === d && (i.display = "In" === b ? "auto" : "none"), y(this, k, i);
      };
    }), y;
  }(window.jQuery || window.Zepto || window, window, window ? window.document : undefined);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("JPzv")(module)))

/***/ }),

/***/ "gLHY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "cml-buildin-page",
    { staticClass: " cml-base cml-page", attrs: { title: "c-tab演示" } },
    [
      _c(
        "div",
        { staticClass: " cml-base cml-view", attrs: {} },
        [
          _c("c-header", {
            staticClass: " cml-base cml-c-header",
            attrs: { title: _vm.headerTitle, desc: _vm.headerDesc }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
            _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
              _vm._v("单tab案例")
            ])
          ]),
          _vm._v(" "),
          _c("c-tab", {
            staticClass: " cml-base cml-c-tab",
            attrs: {
              tabs: _vm.tabsAlone,
              "active-label": _vm.activeLabelAlone,
              "has-underline": false,
              inline: false,
              "data-evt-tabclick": ""
            },
            on: {
              tabclick: function($event) {
                _vm._cmlEventProxy($event, "handleTabTapAlone")
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
            _c("span", { staticClass: "title  cml-base cml-text", attrs: {} }, [
              _vm._v("tab+pane案例")
            ])
          ]),
          _vm._v(" "),
          _c("c-tab", {
            staticClass: " cml-base cml-c-tab",
            attrs: {
              tabs: _vm.tabs,
              "active-label": _vm.activeLabel,
              inline: false,
              "data-evt-tabclick": ""
            },
            on: {
              tabclick: function($event) {
                _vm._cmlEventProxy($event, "handleTabTap")
              }
            }
          }),
          _vm._v(" "),
          _c(
            "c-tab-pane",
            {
              staticClass: " cml-base cml-c-tab-pane",
              attrs: { tabs: _vm.tabs, "active-label": _vm.activeLabel }
            },
            [
              _c(
                "c-tab-pane-item",
                { staticClass: " cml-base cml-c-tab-pane-item", attrs: {} },
                [
                  _c(
                    "div",
                    { staticClass: "one  cml-base cml-view", attrs: {} },
                    [
                      _c(
                        "span",
                        { staticClass: " cml-base cml-text", attrs: {} },
                        [_vm._v("\n         1\n         ")]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "c-tab-pane-item",
                { staticClass: " cml-base cml-c-tab-pane-item", attrs: {} },
                [
                  _c(
                    "div",
                    { staticClass: "two  cml-base cml-view", attrs: {} },
                    [
                      _c(
                        "span",
                        { staticClass: " cml-base cml-text", attrs: {} },
                        [_vm._v("\n         2\n         ")]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "c-tab-pane-item",
                { staticClass: " cml-base cml-c-tab-pane-item", attrs: {} },
                [
                  _c(
                    "div",
                    { staticClass: "three  cml-base cml-view", attrs: {} },
                    [
                      _c(
                        "span",
                        { staticClass: " cml-base cml-text", attrs: {} },
                        [_vm._v("\n         3\n         ")]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "c-tab-pane-item",
                { staticClass: " cml-base cml-c-tab-pane-item", attrs: {} },
                [
                  _c("div", { staticClass: " cml-base cml-view", attrs: {} }, [
                    _c(
                      "span",
                      { staticClass: " cml-base cml-text", attrs: {} },
                      [_vm._v("\n         4\n         ")]
                    )
                  ])
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-54766df2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "gPXw":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/top_a17a0e7.png";

/***/ }),

/***/ "gkDN":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("StTd");
var get = __webpack_require__("N4q2");
module.exports = __webpack_require__("OzFA").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "gqlg":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("S8KF");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _index = __webpack_require__("c0s4");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var createAnimation = _index2.default;
var getIndex = function getIndex(list, item) {
  if (list && list.length < 1) {
    return 0;
  }
  var index1 = list.findIndex(function (v) {
    return v === item || v.name && v.name === item.name;
  });
  var index2 = list.indexOf(item);
  var index = Math.max(index1, index2);
  if (index < 0) {
    // throw new Error('list数组中不存在defaultValue');
    return 0;
  }
  return index;
};

exports.default = (0, _defineProperty3.default)({
  props: {
    data: {
      type: Array,
      default: []
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    wraperStyle: {
      type: String,
      default: ""
    },
    textAlign: {
      type: String,
      default: 'center'
    }
  },
  data: function data() {
    return {
      startY: 0,
      endY: 0,
      currentY: 0,
      itemHeight: 72,
      selectedIndex: 0,
      _defaultValue: null,
      _startTime: 0,
      animationData: createAnimation()
    };
  },
  computed: {
    pickerStyle: function pickerStyle() {
      return this.wraperStyle;
    },
    itemStyle: function itemStyle() {
      var style = "text-align: " + this.textAlign;
      return style;
    }
  },
  watch: {
    defaultIndex: function defaultIndex(newVal, oldVal) {
      this.selectedIndex = newVal;
    }
  },
  created: function created() {
    this.selectedIndex = this.defaultIndex;
  },
  mounted: function mounted() {
    this.initMove();
  },


  methods: {
    preventDefault: function preventDefault(e) {
      e.preventDefault && e.preventDefault();
      e.stopPropagation && e.stopPropagation();
    },
    initMove: function initMove() {
      this.currentY = 0;

      if (this.selectedIndex > 2) {
        this.currentY = -(this.selectedIndex - 2) * this.itemHeight;
      } else {
        this.currentY = (2 - this.selectedIndex) * this.itemHeight;
      }
      this.move(this.currentY, true);
    },
    getSelectedClass: function getSelectedClass(index) {
      if (this.selectedIndex === index) {
        return "picker-item-selected";
      }
      return "";
    },
    ontouchstart: function ontouchstart(e) {
      this.preventDefault(e);
      if (this.data.length <= 1) {
        return;
      }
      this.startY = e.changedTouches[0].screenY;
      this._startTime = new Date().getTime();
    },
    ontouchmove: function ontouchmove(e) {
      this.preventDefault(e);
      if (this.data.length <= 1) {
        return;
      }
      var pageY = e.changedTouches[0].screenY;
      var value = parseInt(pageY - this.startY);
      var y = this.currentY + value;
      this.move(y);
    },
    ontouchend: function ontouchend(e) {
      this.preventDefault(e);
      if (this.data.length <= 1) {
        return;
      }
      this.endY = e.changedTouches[0].screenY;
      // 实际滚动距离
      var v = parseInt(this.endY - this.startY);
      // 如果快速滑动，实际滑动距离放大5倍
      var endTime = new Date().getTime();
      if (endTime - this._startTime < 200) {
        v = v * 5;
      }
      var value = v % this.itemHeight;
      // 计算出每次拖动的36cpx整倍数
      this.currentY += v - value;

      // 正数y最大值
      var max1 = 2 * this.itemHeight;
      // 负数y最小值
      var max2 = (this.data.length - 3) * this.itemHeight;

      if (this.currentY > max1) {
        this.currentY = max1;
      } else if (this.currentY > 0 && this.currentY < max1) {
        this.currentY = this.currentY;
      } else if (this.currentY === max1) {
        this.currentY = this.currentY;
      } else if (Math.abs(this.currentY) > max2) {
        this.currentY = -max2;
      }

      this.countListIndex(this.currentY);
      this.move(this.currentY, true);
    },


    // 计算list数组索引
    countListIndex: function countListIndex(pageY) {
      var n = pageY / this.itemHeight;
      n = n > 0 ? 2 - n : Math.abs(n) + 2;
      this.setSelectedValue(n);
    },


    // set选中值
    setSelectedValue: function setSelectedValue(index) {
      var length = this.data.length;
      if (length === 0) {
        this.callback(null);
        return;
      }
      if (index < 0 || index > length - 1) {
        throw new Error("滑动取值索引数值出现错误" + index);
      }
      this.selectedIndex = index;

      this.callback(index);
    },


    // 回调wxChange
    callback: function callback(index) {
      this.$cmlEmit("selectchange", { index: index });
    },
    move: function move(y) {
      var hasAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var stepObj = hasAnimate ? {
        delay: 0,
        duration: 300,
        timingFunction: "ease-out"
      } : {
        delay: 0,
        duration: 0
      };
      this.animationData = createAnimation().translateY(y).step(stepObj).export();
    }
  }
}, "watch", {
  "data.list": function dataList() {
    this.selectedIndex = this.defaultIndex;
    this.initMove();
  }
});

/***/ }),

/***/ "h1kM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_header_cml__ = __webpack_require__("ntYf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_header_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_header_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_header_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_header_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6eba20d4_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_header_cml__ = __webpack_require__("iRGt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("JxD5")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6eba20d4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_header_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6eba20d4_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_header_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6eba20d4_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_header_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/components/c-header/c-header.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6eba20d4", Component.options)
  } else {
    hotAPI.reload("data-v-6eba20d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "h2Ex":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__("lHTR");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Config = function () {
  function Config(data) {
    (0, _classCallCheck3.default)(this, Config);

    this.data = data;
  }

  (0, _createClass3.default)(Config, [{
    key: 'get',
    value: function get() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var def = arguments[1];

      var result = this.data;
      path.split('.').forEach(function (key) {
        if (key && typeof result !== 'undefined') {
          result = result[key];
        }
      });
      if (typeof result !== 'undefined') {
        return result;
      } else {
        return def;
      }
    }
  }, {
    key: 'set',
    value: function set(path, value) {
      if (typeof value === 'undefined') {
        this.data = path;
      } else {
        path = String(path || '').trim();
        if (path) {
          var paths = path.split('.');
          var last = paths.pop();
          var data = this.data || {};
          paths.forEach(function (key) {
            var type = data[key];
            if ((typeof type === 'undefined' ? 'undefined' : (0, _typeof3.default)(type)) === 'object') {
              data = data[key];
            } else if (typeof type === 'undefined') {
              data = data[key] = {};
            } else {
              throw new Error('forbidden to set property[' + key + '] of [' + type + '] data');
            }
          });
          data[last] = value;
        }
      }
    }
  }]);
  return Config;
}();

exports.default = Config;

/***/ }),

/***/ "h696":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;

var _index = __webpack_require__("1yVu");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createApp(options) {
  return _index2.default.createApp(options);
}

/***/ }),

/***/ "hCbn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hDcu":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("49u2");
var call = __webpack_require__("RA/h");
var isArrayIter = __webpack_require__("GDCJ");
var anObject = __webpack_require__("StTd");
var toLength = __webpack_require__("ImXL");
var getIterFn = __webpack_require__("N4q2");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "hIjT":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("dkPk");
var toLength = __webpack_require__("ImXL");
var toAbsoluteIndex = __webpack_require__("vEog");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "hP+v":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("E+yl");
var defined = __webpack_require__("SQnF");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "hTSS":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("p06J")('wks');
var uid = __webpack_require__("ucRq");
var Symbol = __webpack_require__("tRKg").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "hZ03":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "cml-buildin-page",
    { staticClass: " cml-base cml-page", attrs: { title: "c-toast演示" } },
    [
      _c(
        "div",
        { staticClass: "container  cml-base cml-view", attrs: {} },
        [
          _c("c-header", {
            staticClass: " cml-base cml-c-header",
            attrs: { title: "c-toast" }
          }),
          _vm._v(" "),
          _c("c-toast", {
            staticClass: " cml-base cml-c-toast",
            attrs: {
              duration: _vm.duration,
              show: _vm.show,
              message: _vm.message,
              type: _vm.type,
              "need-icon": _vm.needIcon,
              mask: _vm.mask,
              "data-evt-show": ""
            },
            on: {
              show: function($event) {
                _vm._cmlEventProxy($event, "changeShow")
              }
            }
          }),
          _vm._v(" "),
          _c("cml-buildin-button", {
            staticClass: "btn  cml-base cml-button",
            attrs: { text: "loading toast", "data-evt-onclick": "" },
            on: {
              onclick: function($event) {
                _vm._cmlEventProxy($event, "showLoading")
              }
            }
          }),
          _vm._v(" "),
          _c("cml-buildin-button", {
            staticClass: "btn  cml-base cml-button",
            attrs: { text: "loading toast with mask", "data-evt-onclick": "" },
            on: {
              onclick: function($event) {
                _vm._cmlEventProxy($event, "showMask")
              }
            }
          }),
          _vm._v(" "),
          _c("cml-buildin-button", {
            staticClass: "btn  cml-base cml-button",
            attrs: { text: "success toast", "data-evt-onclick": "" },
            on: {
              onclick: function($event) {
                _vm._cmlEventProxy($event, "showSuccess")
              }
            }
          }),
          _vm._v(" "),
          _c("cml-buildin-button", {
            staticClass: "btn  cml-base cml-button",
            attrs: { text: "warn toast", "data-evt-onclick": "" },
            on: {
              onclick: function($event) {
                _vm._cmlEventProxy($event, "showWarn")
              }
            }
          }),
          _vm._v(" "),
          _c("cml-buildin-button", {
            staticClass: "btn  cml-base cml-button",
            attrs: { text: "toast without icon", "data-evt-onclick": "" },
            on: {
              onclick: function($event) {
                _vm._cmlEventProxy($event, "showWithout")
              }
            }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-31930a2b", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "hfQc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml__ = __webpack_require__("mUcI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4e213a2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml__ = __webpack_require__("zW9a");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("rXxO")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c4e213a2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4e213a2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4e213a2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_dialog_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/COMP/c-dialog/c-dialog.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c4e213a2", Component.options)
  } else {
    hotAPI.reload("data-v-c4e213a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "hocU":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon_component_HL_23be89c.png";

/***/ }),

/***/ "i0PX":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _cmlBridge = __webpack_require__("8D69");

var _cmlBridge2 = _interopRequireDefault(_cmlBridge);

var _env = __webpack_require__("8d/N");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'setTitle',
    value: function setTitle(title) {
      if ((0, _env.inSDK)()) {
        _cmlBridge2.default.setTitle({
          title: title
        });
      } else {
        document.title = title;
      }
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "iC9F":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("49u2");
var $export = __webpack_require__("xCCz");
var toObject = __webpack_require__("5FFm");
var call = __webpack_require__("RA/h");
var isArrayIter = __webpack_require__("GDCJ");
var toLength = __webpack_require__("ImXL");
var createProperty = __webpack_require__("aP3p");
var getIterFn = __webpack_require__("N4q2");

$export($export.S + $export.F * !__webpack_require__("p7Ns")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "iDk1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "iF9Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml__ = __webpack_require__("ab7A");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_f52356a2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml__ = __webpack_require__("PM4n");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("+yJo")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f52356a2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_f52356a2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_f52356a2_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_actionsheet_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/COMP/c-actionsheet/c-actionsheet.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f52356a2", Component.options)
  } else {
    hotAPI.reload("data-v-f52356a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "iFbe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "iM0j":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComponentRect = getComponentRect;

var _index = __webpack_require__("X5We");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleName = 'dom';
var methodName = 'getComponentRect';

function getComponentRect(module, method, args, callback) {
  _index2.default.getComponentRect.apply(_index2.default, arguments);
}

getComponentRect.prototype.moduleName = moduleName;
getComponentRect.prototype.methodName = methodName;

/***/ }),

/***/ "iPwf":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "iQpy":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.originLoader = exports.transformLoader = undefined;

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

var _util = __webpack_require__("uXFq");

var _utils = __webpack_require__("z4ZC");

var _common = __webpack_require__("AbV7");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transformLoader = exports.transformLoader = function transformLoader(styles, descriptions) {
  var returnStyles = {};
  (0, _keys2.default)(styles).forEach(function (key) {
    var value = styles[key];
    // 目前不支持转换，所以loader来做
    if (_common.isNumTypeStyles.includes(key)) {
      if ((0, _utils.isNum)(value)) {
        value = (0, _util.cpx2px)(value);
      } else {
        console.error('Parameter must be a number');
      }
    }

    if (_common.rotateStyles.includes(key) && typeof value === 'number') {
      value = value + 'deg';
    }
    if (key === 'rotate') {
      returnStyles.rotateZ = value;
    } else {
      returnStyles[key] = value;
    }
  });
  return returnStyles;
};

var originLoader = exports.originLoader = function originLoader(styles, descriptions) {
  var returnStyles = styles;
  var transformOrigin = descriptions.transformOrigin;
  delete descriptions.transformOrigin;

  if (transformOrigin) {
    var originArr = transformOrigin.split(' ');
    returnStyles.transformOriginX = originArr[0];
    returnStyles.transformOriginY = originArr[0];
  }

  return returnStyles;
};

/***/ }),

/***/ "iRGt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "page-head  cml-base cml-view", attrs: {} }, [
    _c(
      "div",
      { staticClass: "page-head-title  cml-base cml-view", attrs: {} },
      [
        _c(
          "span",
          { staticClass: "page-head-title-text  cml-base cml-text", attrs: {} },
          [_vm._v(_vm._s(_vm.title))]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "page-head-line  cml-base cml-view", attrs: {} }),
    _vm._v(" "),
    _vm.desc
      ? _c(
          "div",
          { staticClass: "page-head-desc  cml-base cml-view", attrs: {} },
          [
            _c(
              "span",
              {
                staticClass: "page-head-desc-text  cml-base cml-text",
                attrs: {}
              },
              [_vm._v(_vm._s(_vm.desc))]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6eba20d4", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "iSEW":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _web = __webpack_require__("IMan");

var _web2 = _interopRequireDefault(_web);

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 定义模块的interface
var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'createStore',
    value: function createStore(options) {
      return (0, _web2.default)(options);
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "iXbp":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__("SRKA");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

exports.isFn = isFn;
exports.isStr = isStr;
exports.isObj = isObj;
exports.isArray = isArray;
exports.isUndefined = isUndefined;
exports.isEmpty = isEmpty;
exports.noop = noop;
exports.parseQuery = parseQuery;
exports.queryStringify = queryStringify;
exports.queryParse = queryParse;
exports.isNeedApiPrefix = isNeedApiPrefix;
exports.addApiPrefix = addApiPrefix;
exports.tryJsonParse = tryJsonParse;
exports.getQueryParamsFromSearchStr = getQueryParamsFromSearchStr;
exports.getOpenObj = getOpenObj;
exports.getUrlWithConnector = getUrlWithConnector;
exports.compareVersion = compareVersion;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 基础js方法的封装
 *
 */
function typeEqual(obj, type) {
  return Object.prototype.toString.call(obj) === '[object ' + type + ']';
}

function isFn(obj) {
  return typeEqual(obj, 'Function');
}

function isStr(obj) {
  return typeEqual(obj, 'String');
}

function isObj(obj) {
  return typeEqual(obj, 'Object');
}

function isArray(obj) {
  return typeEqual(obj, 'Array');
}

function isUndefined(obj) {
  return typeEqual(obj, 'Undefined');
}

function isEmpty(obj) {
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

function noop() {}

function parseQuery(obj) {
  var str = '&';
  var keys = null;
  if (obj && (0, _keys2.default)(obj).length > 0) {
    keys = (0, _keys2.default)(obj);
    for (var i = 0; i < keys.length; i++) {
      var _key = keys[i];
      str += _key + '=' + encodeURIComponent(obj[_key]) + '&';
    }
  }
  return str;
}

function queryStringify(obj) {
  var str = '&';
  var keys = null;
  if (obj && (0, _keys2.default)(obj).length > 0) {
    keys = (0, _keys2.default)(obj);
    for (var i = 0; i < keys.length; i++) {
      var _key2 = keys[i];
      str += _key2 + '=' + encodeURIComponent(obj[_key2]) + '&';
    }
  }
  return str;
}

function queryParse(search) {
  search = search || '';
  var arr = search.split(/(\?|&)/);
  var parmsObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = keyValue[2];
    }
  }
  return parmsObj;
}

function isNeedApiPrefix(url) {
  return (/^\/[^/]/.test(url)
  );
}

function addApiPrefix(url) {
  if (process && process.env && "https://api.chameleon.com") {
    return "https://api.chameleon.com" + url;
  }
  return url;
}

function tryJsonParse(some) {
  // 这里eslint提示也先别删除\[\]
  if (isStr(some) && /[\{\[].*[\}\]]/.test(some)) {
    some = JSON.parse(some);
  }
  return some;
}

function getQueryParamsFromSearchStr(qs) {
  var search = qs;
  var arr = search.split(/(\?|&)/);
  var parmsObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = decodeURIComponent(keyValue[2]);
    }
  }
  return parmsObj;
}

/**
 * 获取处理后的各端打开的地址
 * @param {String} url url地址
 * @return {Object} objTreated 处理好的三端地址及对象
 */
function getOpenObj(url) {
  var webUrlWithoutQuery = url.split('?')[0];
  var queryObj = getQueryParamsFromSearchStr(url);
  var _queryObj$weixin_appi = queryObj.weixin_appid,
      weixin_appid = _queryObj$weixin_appi === undefined ? '' : _queryObj$weixin_appi,
      _queryObj$weixin_path = queryObj.weixin_path,
      weixin_path = _queryObj$weixin_path === undefined ? '' : _queryObj$weixin_path,
      _queryObj$weixin_envV = queryObj.weixin_envVersion,
      weixin_envVersion = _queryObj$weixin_envV === undefined ? '' : _queryObj$weixin_envV,
      _queryObj$weex_path = queryObj.weex_path,
      weex_path = _queryObj$weex_path === undefined ? '' : _queryObj$weex_path,
      _queryObj$wx_addr = queryObj.wx_addr,
      wx_addr = _queryObj$wx_addr === undefined ? '' : _queryObj$wx_addr,
      _queryObj$cml_addr = queryObj.cml_addr,
      cml_addr = _queryObj$cml_addr === undefined ? '' : _queryObj$cml_addr,
      extraData = (0, _objectWithoutProperties3.default)(queryObj, ['weixin_appid', 'weixin_path', 'weixin_envVersion', 'weex_path', 'wx_addr', 'cml_addr']);

  // weex 链接

  var weexUrl = '';
  if (cml_addr) {
    cml_addr = cml_addr + '?_cml_r=' + ~~(Math.random() * 1E5);
    cml_addr = encodeURIComponent(cml_addr);
    weexUrl = webUrlWithoutQuery + '?weex_path=' + weex_path + queryStringify(extraData) + '&cml_addr=' + cml_addr;
  }
  // 向下兼容
  if (wx_addr) {
    wx_addr = wx_addr + '?_cml_r=' + ~~(Math.random() * 1E5);
    wx_addr = encodeURIComponent(wx_addr);
    weexUrl = webUrlWithoutQuery + '?weex_path=' + weex_path + queryStringify(extraData) + '&wx_addr=' + wx_addr;
  }

  var objTreated = {
    weex: weexUrl,
    web: webUrlWithoutQuery + '?' + queryStringify(extraData),
    wx: {
      appId: weixin_appid,
      path: weixin_path,
      extraData: extraData,
      envVersion: weixin_envVersion
    }
  };
  return objTreated;
}

// 获得带正确连接符的url
function getUrlWithConnector(url) {
  var connector = url.includes('?') ? '&' : '?';
  return url + connector;
}

/**
 * 比较版本号
 * @param {String} v1 版本号1
 * @param {String} symb 比较符
 * @param {String} v2 版本号2
 */
function compareVersion(v1, symb, v2) {
  v1 = parseVersion(v1);
  v2 = parseVersion(v2);
  if (symb.indexOf('=') !== -1 && v1 === v2) {
    return true;
  }
  if (symb.indexOf('>') !== -1 && v1 > v2) {
    return true;
  }
  if (symb.indexOf('<') !== -1 && v1 < v2) {
    return true;
  }
  return false;
}

function parseVersion() {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  version = version.split('.');
  version.length = 4;
  var ret = [];
  version.forEach(function (n) {
    n = n * 1;
    if (n) {
      ret.push(n >= 10 ? n : '0' + n);
    } else {
      ret.push('00');
    }
  });
  return parseInt(ret.join(''), 10);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("uIsA")))

/***/ }),

/***/ "iaib":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BridgeGlobal = exports.BridgeGlobal = function () {
  var instance = void 0;
  function init() {
    return {
      listenCallbacks: {},
      callbackId: 0
    };
  }
  return {
    getInstance: function getInstance() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
}();

/***/ }),

/***/ "ifN7":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validOptions = validOptions;
function validOptions(options) {
  var validList = [{
    name: 'app',
    message: '\u8C03\u7528chameleon bootstrap\u65B9\u6CD5\u65F6\uFF0C\u8BF7\u4F20\u5165app'
  }, {
    name: 'store',
    message: '\u8C03\u7528chameleon bootstrap\u65B9\u6CD5\u65F6\uFF0C\u8BF7\u4F20\u5165store'
  }, {
    name: 'routerConfig',
    message: '\u8C03\u7528chameleon bootstrap\u65B9\u6CD5\u65F6\uFF0C\u8BF7\u4F20\u5165routerConfig'
  }, {
    name: 'router',
    message: '\u8C03\u7528chameleon bootstrap\u65B9\u6CD5\u65F6\uFF0C\u8BF7\u4F20\u5165router'
  }];

  validList.forEach(function (item) {
    if (!options[item.name]) {
      throw new Error(item.message);
    }
  });
}

/***/ }),

/***/ "irMx":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canIUse = canIUse;

var _index = __webpack_require__("LOYP");

var cModuleName = 'cml';
var cMethodName = 'canIUse';

function canIUse(_ref, cb) {
  var method = _ref.method;

  var moduleName = this[method] && this[method].prototype.moduleName;
  var methodName = this[method] && this[method].prototype.methodName;

  if (module && method) {
    (0, _index.callNative)(cModuleName, cMethodName, {
      module: moduleName,
      method: methodName
    }, cb);
  } else {
    this[method] ? cb(true) : cb(false);
  }
}

canIUse.prototype.moduleName = cModuleName;
canIUse.prototype.methodName = cMethodName;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("JPzv")(module)))

/***/ }),

/***/ "isOg":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("StTd");
var IE8_DOM_DEFINE = __webpack_require__("xrry");
var toPrimitive = __webpack_require__("w7d5");
var dP = Object.defineProperty;

exports.f = __webpack_require__("yfK2") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "iy6G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "cml-buildin-page",
    { staticClass: " cml-base cml-page", attrs: { title: "c-picker演示" } },
    [
      _c("c-header", {
        staticClass: " cml-base cml-c-header",
        attrs: { title: "c-picker" }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: " cml-base cml-view", attrs: {} },
        [
          _c(
            "span",
            {
              staticClass: "select-text  cml-base cml-text",
              attrs: { "data-evt-click": "" },
              on: {
                click: _vm.$stopOuterA,
                cml$tap: function($event) {
                  $event.stopPropagation()
                  _vm._cmlEventProxy($event, "showClick")
                }
              }
            },
            [_vm._v("点击选择：" + _vm._s(_vm.provins[_vm.provinsIndex]))]
          ),
          _vm._v(" "),
          _c("c-picker", {
            staticClass: " cml-base cml-c-picker",
            attrs: {
              show: _vm.pickerShow,
              height: 500,
              "header-height": 100,
              "text-align": "center",
              "data-scroller-height": 400,
              data: _vm.provins,
              "default-index": _vm.defaultIndex,
              "confirm-btn-style": "color:red",
              "cancel-btn-style": "color:red",
              "data-evt-cancel": "",
              "data-evt-confirm": "",
              "data-evt-selectchange": ""
            },
            on: {
              cancel: function($event) {
                _vm._cmlEventProxy($event, "cancel")
              },
              confirm: function($event) {
                _vm._cmlEventProxy($event, "confirm")
              },
              selectchange: function($event) {
                _vm._cmlEventProxy($event, "selectchange")
              }
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-311ae4ef", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "j8uF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pullDownMixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ease__ = __webpack_require__("Rwfi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_const__ = __webpack_require__("B3mp");



function pullDownMixin(CScroll) {
  CScroll.prototype._initPullDown = function () {
    // must watch scroll in real time
    this.options.probeType = __WEBPACK_IMPORTED_MODULE_1__util_const__["f" /* PROBE_REALTIME */]
  }

  CScroll.prototype._checkPullDown = function () {
    const {threshold = 90, stop = 40} = this.options.pullDownRefresh

    // check if a real pull down action
    if (this.directionY !== __WEBPACK_IMPORTED_MODULE_1__util_const__["a" /* DIRECTION_DOWN */] || this.y < threshold) {
      return false
    }

    if (!this.pulling) {
      this.pulling = true
      this.trigger('pullingDown')
    }
    this.scrollTo(this.x, stop, this.options.bounceTime, __WEBPACK_IMPORTED_MODULE_0__util_ease__["a" /* ease */].bounce)

    return this.pulling
  }

  CScroll.prototype.finishPullDown = function () {
    this.pulling = false
    this.resetPosition(this.options.bounceTime, __WEBPACK_IMPORTED_MODULE_0__util_ease__["a" /* ease */].bounce)
  }

  CScroll.prototype.openPullDown = function (config = true) {
    this.options.pullDownRefresh = config
    this._initPullDown()
  }

  CScroll.prototype.closePullDown = function () {
    this.options.pullDownRefresh = false
  }
}


/***/ }),

/***/ "jRCD":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClipBoardData = getClipBoardData;
exports.setClipBoardData = setClipBoardData;

var _index = __webpack_require__("LOYP");

var moduleName = 'clipboard';
var methodGet = 'getClipBoardData';
var methodSet = 'setClipBoardData';

function getClipBoardData() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cb = arguments[1];

  /**
   * params {}
   */
  (0, _index.callNative)(moduleName, methodGet, param, function (res) {
    /**
    * errno
    * msg
    * data
    */
    cb(res);
  });
}

getClipBoardData.prototype.moduleName = moduleName;
getClipBoardData.prototype.methodName = methodGet;

function setClipBoardData(_ref, cb) {
  var _ref$data = _ref.data,
      data = _ref$data === undefined ? '' : _ref$data;

  (0, _index.callNative)(moduleName, methodSet, {
    data: data
  }, function (res) {
    /**
    * errno
    * msg
    * data
    */
    cb(res);
  });
}

setClipBoardData.prototype.moduleName = moduleName;
setClipBoardData.prototype.methodName = methodSet;

/***/ }),

/***/ "jVJD":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _promise = __webpack_require__("1iTB");

var _promise2 = _interopRequireDefault(_promise);

var _velocityMin = __webpack_require__("gBu3");

var _velocityMin2 = _interopRequireDefault(_velocityMin);

var _common = __webpack_require__("AbV7");

var _web = __webpack_require__("iQpy");

var _common2 = __webpack_require__("+C+F");

var _util = __webpack_require__("uXFq");

var _util2 = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleLoaderQueue = [_common.commonLoader, _common.cacheTransformStylesLoader, _web.transformLoader, _web.originLoader];
var descriptionLoaderQueue = [_common2.commonLoader, _common2.cacheTransformOriginLoader];

// web端接口实现
var beginAnimation = function beginAnimation(elm, animationInfo) {
  if (animationInfo && animationInfo.useExport === '1') {
    var updateQueue = animationInfo.updateQueue;

    var len = updateQueue.length;
    var current = _promise2.default.resolve();

    var _loop = function _loop(i) {
      var info = updateQueue[i];
      current = current.then(function () {
        return (0, _velocityMin2.default)(elm, info.styles, info.descriptions).then(function () {
          info.descriptions.cb();
        });
      });
    };

    for (var i = 0; i < len; i++) {
      _loop(i);
    }
  }
};

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'initAnimation',
    value: function initAnimation() {
      Vue.directive('animation', {
        bind: function bind(elm, binding) {
          beginAnimation(elm, binding.value);
        },
        update: function update(elm, binding) {
          beginAnimation(elm, binding.value);
        }
      });
    }
  }, {
    key: 'checkNumber',
    value: function checkNumber(number) {}
  }, {
    key: 'checkString',
    value: function checkString(string) {}
  }, {
    key: 'checkObject',
    value: function checkObject(object) {}
  }, {
    key: 'getViewportWidth',
    value: function getViewportWidth() {
      var viewportWidth = void 0;
      if (window.innerWidth) {
        viewportWidth = window.innerWidth;
      } else if (document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth) {
        viewportWidth = document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
      }

      return viewportWidth;
    }
  }, {
    key: 'exportMiddleWare',
    value: function exportMiddleWare(param) {
      return {
        useExport: param.useExport,
        updateQueue: param.updateQueue.map(function (tick) {
          return {
            styles: (0, _util.stylePipe)(tick.styles, tick.descriptions, styleLoaderQueue, param.id),
            descriptions: (0, _util.descriptionPipe)(tick.descriptions, tick.styles, descriptionLoaderQueue, param.id)
          };
        })
      };
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util2.copyProtoProperty)(exports.default);

/***/ }),

/***/ "jzoE":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'getRect',
    value: function getRect(refObj, cb) {
      var dom = refObj.webDom;
      var domComputedStyle = window.getComputedStyle(dom);
      var domRect = dom.getBoundingClientRect();
      var scale = 750 / window.innerWidth;
      var rectObj = {
        width: parseFloat(domComputedStyle.width) * scale || 0,
        height: parseFloat(domComputedStyle.height) * scale || 0,
        top: domRect && domRect.top * scale || 0,
        left: domRect && domRect.left * scale || 0,
        right: domRect && domRect.right * scale || 0,
        bottom: domRect && domRect.bottom * scale || 0
      };
      cb(rectObj);
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "k1x2":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("Jx0+");

var _chameleon = __webpack_require__("G8qx");

var _chameleon2 = _interopRequireDefault(_chameleon);

var _extendVue = __webpack_require__("caUD");

var _extendVue2 = _interopRequireDefault(_extendVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _inited = false;

_chameleon2.default.init = function init(Vue) {
  if (_inited) {
    return;
  }
  _inited = true;
  _chameleon2.default._inited = true;

  (0, _extendVue2.default)(Vue);
};

if (global.Vue) {
  _chameleon2.default.init(global.Vue);
}

exports.default = _chameleon2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("PvPp")))

/***/ }),

/***/ "k2OQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kGrF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kHp8":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _scrollable = __webpack_require__("NIpK");

var _scrollable2 = _interopRequireDefault(_scrollable);

var _utils = __webpack_require__("MPvF");

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//

var Scroller = function Scroller() {
  (0, _classCallCheck3.default)(this, Scroller);
  this.props = {
    bottomOffset: {
      // 距底部/右边多远时（单位cpx），触发 scrollbottom 事件
      type: Number,
      default: 0
    },
    bounce: {
      type: Boolean,
      default: true
    },
    cstyle: {
      type: String,
      default: ''
    },
    scrollDirection: {
      // 可选为 horizontal 或者 vertical，默认值为 vertical 。定义滚动的方向。
      type: String,
      default: 'vertical'
    },
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    scrollLeft: {
      type: Number,
      default: 0
    }
  };
  this.computed = {
    heightPx: function heightPx() {
      if (this.height >= 0) {
        return (0, _utils.cpx2px)(this.height);
      }
      return -1;
    },
    widthPx: function widthPx() {
      if (this.width >= 0) {
        return (0, _utils.cpx2px)(this.width);
      }
      return -1;
    },
    scrollTopPx: function scrollTopPx() {
      return (0, _utils.cpx2px)(this.scrollTop);
    },
    scrollLeftPx: function scrollLeftPx() {
      return (0, _utils.cpx2px)(this.scrollLeft);
    }
  };
  this.methods = {
    scrollEvent: function scrollEvent(e) {
      this.$cmlEmit('onscroll', e);
      this.$cmlEmit('customscroll', e);
    },
    scrolltobottomEvent: function scrolltobottomEvent(e) {
      this.$cmlEmit('scrolltobottom', e);
    }
  };
};

exports.default = new Scroller();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { scrollable: _scrollable2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "kLjz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scrollable",
    {
      staticClass: " cml-base cml-scrollable",
      attrs: {
        cstyle: _vm.cstyle,
        bottomOffset: _vm.bottomOffset,
        toElement: _vm.toElement,
        bounce: _vm.bounce,
        height: _vm.heightPx,
        template: "list",
        "data-evt-onscroll": "",
        "data-evt-scrolltobottom": ""
      },
      on: { onscroll: _vm.scrollEvent, scrolltobottom: _vm.scrolltobottomEvent }
    },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5c48a5e5", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "kOO5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("YYvI");
var global = __webpack_require__("tRKg");
var ctx = __webpack_require__("49u2");
var classof = __webpack_require__("LARG");
var $export = __webpack_require__("xCCz");
var isObject = __webpack_require__("OuXD");
var aFunction = __webpack_require__("w1p+");
var anInstance = __webpack_require__("UTAz");
var forOf = __webpack_require__("hDcu");
var speciesConstructor = __webpack_require__("Pta8");
var task = __webpack_require__("eXs3").set;
var microtask = __webpack_require__("zDda")();
var newPromiseCapabilityModule = __webpack_require__("bjfn");
var perform = __webpack_require__("CqNQ");
var userAgent = __webpack_require__("3USK");
var promiseResolve = __webpack_require__("/VIj");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("hTSS")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("35um")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("DKwb")($Promise, PROMISE);
__webpack_require__("9ZB8")(PROMISE);
Wrapper = __webpack_require__("OzFA")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("p7Ns")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "kTiR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "cml-buildin-page",
    { staticClass: " cml-base cml-page", attrs: { title: "c-tip演示" } },
    [
      _c("c-header", {
        staticClass: " cml-base cml-c-header",
        attrs: { title: "c-tip" }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "tip-eg  cml-base cml-view", attrs: {} },
        [
          _c(
            "c-tip",
            {
              staticClass: " cml-base cml-c-tip",
              staticStyle: { position: "absolute", top: "0", left: "4rem" },
              attrs: {
                show: _vm.showtip1,
                direction: "top",
                "data-evt-close": ""
              },
              on: {
                close: function($event) {
                  _vm._cmlEventProxy($event, "closeTip1")
                }
              }
            },
            [
              _c(
                "span",
                {
                  staticClass: " cml-base cml-text",
                  staticStyle: { color: "#fff" },
                  attrs: {}
                },
                [_vm._v("Tip")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "tip-btn  cml-base cml-text",
              attrs: { "data-evt-click": "" },
              on: {
                click: _vm.$stopOuterA,
                cml$tap: function($event) {
                  $event.stopPropagation()
                  _vm._cmlEventProxy($event, "showTip1")
                }
              }
            },
            [_vm._v("Show tip")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "tip-eg  cml-base cml-view", attrs: {} },
        [
          _c(
            "c-tip",
            {
              staticClass: " cml-base cml-c-tip",
              style: _vm._cmlStyleProxy(_vm.tipStyle, {
                rem: true,
                scale: 0.5,
                remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                autoprefixOptions: {
                  browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                  grid: false
                }
              }),
              attrs: {
                show: _vm.showtip2,
                direction: _vm.direction,
                "data-evt-close": ""
              },
              on: {
                close: function($event) {
                  _vm._cmlEventProxy($event, "closeTip2")
                }
              }
            },
            [
              _c(
                "span",
                {
                  staticClass: " cml-base cml-text",
                  staticStyle: { color: "#fff" },
                  attrs: {}
                },
                [_vm._v("Awesome!")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "tip-btn  cml-base cml-text",
              attrs: { "data-evt-click": "" },
              on: {
                click: _vm.$stopOuterA,
                cml$tap: function($event) {
                  $event.stopPropagation()
                  _vm._cmlEventProxy($event, "showTip2")
                }
              }
            },
            [_vm._v("chameleon-ui")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("cml-buildin-button", {
        staticClass: "btn  cml-base cml-button",
        attrs: { text: "top", "data-evt-onclick": "" },
        on: {
          onclick: function($event) {
            _vm._cmlEventProxy($event, "showTip2Top")
          }
        }
      }),
      _vm._v(" "),
      _c("cml-buildin-button", {
        staticClass: "btn  cml-base cml-button",
        attrs: { text: "bottom", "data-evt-onclick": "" },
        on: {
          onclick: function($event) {
            _vm._cmlEventProxy($event, "showTip2Bottom")
          }
        }
      }),
      _vm._v(" "),
      _c("cml-buildin-button", {
        staticClass: "btn  cml-base cml-button",
        attrs: { text: "left", "data-evt-onclick": "" },
        on: {
          onclick: function($event) {
            _vm._cmlEventProxy($event, "showTip2Left")
          }
        }
      }),
      _vm._v(" "),
      _c("cml-buildin-button", {
        staticClass: "btn  cml-base cml-button",
        attrs: { text: "right", "data-evt-onclick": "" },
        on: {
          onclick: function($event) {
            _vm._cmlEventProxy($event, "showTip2Right")
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-463fc893", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "kdbS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "keTG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "cml-buildin-page",
    { staticClass: " cml-base cml-page", attrs: { title: "radio group演示" } },
    [
      _c("c-header", {
        staticClass: " cml-base cml-c-header",
        attrs: { title: "radio" }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-radio-group", {
            staticClass: " cml-base cml-c-radio-group",
            attrs: {
              option: _vm.radioGroupOption1,
              "data-evt-groupchange": ""
            },
            on: {
              groupchange: function($event) {
                _vm._cmlEventProxy($event, "groupChangeHandler1")
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("selected value: " + _vm._s(_vm.radioSelect1))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-radio-group", {
            staticClass: " cml-base cml-c-radio-group",
            attrs: {
              option: _vm.radioGroupOption2,
              position: "right",
              "data-evt-groupchange": ""
            },
            on: {
              groupchange: function($event) {
                _vm._cmlEventProxy($event, "groupChangeHandler2")
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("selected value: " + _vm._s(_vm.radioSelect2))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box  cml-base cml-view", attrs: {} },
        [
          _c("c-radio-group", {
            staticClass: " cml-base cml-c-radio-group",
            attrs: {
              option: _vm.radioGroupOption3,
              horizontal: true,
              "data-evt-groupchange": ""
            },
            on: {
              groupchange: function($event) {
                _vm._cmlEventProxy($event, "groupChangeHandler3")
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title  cml-base cml-view", attrs: {} }, [
        _c("span", { staticClass: " cml-base cml-text", attrs: {} }, [
          _vm._v("selected value: " + _vm._s(_vm.radioSelect3))
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-34bbd792", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "l4ty":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("LARG");
var ITERATOR = __webpack_require__("hTSS")('iterator');
var Iterators = __webpack_require__("7unY");
module.exports = __webpack_require__("OzFA").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "l9fT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon_API_145b82b.png";

/***/ }),

/***/ "lHTR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("81UF");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("OSNL");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "lKwg":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _web = __webpack_require__("en+i");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 定义模块的interface
var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'createPage',
    value: function createPage(options) {
      return new _web.Page(options);
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "lNMv":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = type;
function type(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}

/***/ }),

/***/ "lTyt":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _cPopup = __webpack_require__("H+3B");

var _cPopup2 = _interopRequireDefault(_cPopup);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CPickerPanel = function () {
  function CPickerPanel() {
    (0, _classCallCheck3.default)(this, CPickerPanel);
    this.props = {
      show: {
        type: Boolean,
        default: false
      },
      height: {
        type: Number,
        default: 500
      },
      title: {
        type: String,
        default: "请选择"
      },
      headerHeight: {
        type: Number,
        default: 100
      },
      cancelBtnStyle: {
        type: String,
        default: ''
      },
      confirmBtnStyle: {
        type: String,
        default: ''
      }
    };
    this.data = {};
    this.computed = {
      wraperStyle: function wraperStyle() {
        var style = "height: " + this.height + "cpx";
        return style;
      },
      headerStyle: function headerStyle() {
        var style = "height: " + this.headerHeight + "cpx";
        return style;
      },
      computedCancelBtn: function computedCancelBtn() {
        return this.cancelBtnStyle;
      },
      computedConfirmBtn: function computedConfirmBtn() {
        return this.confirmBtnStyle;
      }
    };
    this.watch = {};
    this.methods = {
      cancelclick: function cancelclick() {
        this.$cmlEmit("cancel");
      },
      confirmclick: function confirmclick() {
        this.$cmlEmit("confirm");
      }
    };
  }

  (0, _createClass3.default)(CPickerPanel, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return CPickerPanel;
}(); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = new CPickerPanel();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPopup: _cPopup2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "laRC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml__ = __webpack_require__("fjcn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_98542db6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml__ = __webpack_require__("28ED");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("bdWA")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-98542db6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_98542db6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_98542db6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_button_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/chameleon-ui-builtin/components/button/button.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-98542db6", Component.options)
  } else {
    hotAPI.reload("data-v-98542db6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ll/r":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _getPrototypeOf = __webpack_require__("F6Tz");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("SUxG");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Urzf");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseCtor2 = __webpack_require__("yVTO");

var _BaseCtor3 = _interopRequireDefault(_BaseCtor2);

var _lifecycle = __webpack_require__("wbAX");

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _OptTransformer = __webpack_require__("njES");

var _OptTransformer2 = _interopRequireDefault(_OptTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = exports.Component = function (_BaseCtor) {
  (0, _inherits3.default)(Component, _BaseCtor);

  function Component(options) {
    (0, _classCallCheck3.default)(this, Component);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Component.__proto__ || (0, _getPrototypeOf2.default)(Component)).call(this, options));

    _this.cmlType = 'web';

    _this.initOptTransformer(_OptTransformer2.default, {
      type: 'component',
      hooks: _lifecycle2.default.get('cml.hooks')
    });
    return _this;
  }

  return Component;
}(_BaseCtor3.default);

/***/ }),

/***/ "lldI":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

exports.obj2str = obj2str;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function obj2str(obj) {
  return (0, _keys2.default)(obj).map(function (key) {
    return key + ":" + obj[key];
  }).join(";");
}

/***/ }),

/***/ "lt2H":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "lulO":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("S8KF");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _promise = __webpack_require__("1iTB");

var _promise2 = _interopRequireDefault(_promise);

var _mutationTypes = __webpack_require__("Zf4h");

var mutationTypes = _interopRequireWildcard(_mutationTypes);

var _actionTypes = __webpack_require__("6ApJ");

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _defineProperty3.default)({}, actionTypes.INDEX_CHANGE_NAME, function (_ref) {
  var commit = _ref.commit,
      state = _ref.state;
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
      resolve('action名称' + new Date().getTime());
    }, 2000);
  }).then(function (res) {
    commit(mutationTypes.CHANGE_NAME, res);
  });
});

/***/ }),

/***/ "lv5w":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _buttonWeb = __webpack_require__("laRC");

var _buttonWeb2 = _interopRequireDefault(_buttonWeb);

var _pageWeb = __webpack_require__("/b3d");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _cHeader = __webpack_require__("h1kM");

var _cHeader2 = _interopRequireDefault(_cHeader);

var _cPopup = __webpack_require__("H+3B");

var _cPopup2 = _interopRequireDefault(_cPopup);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//

var CPopup = function () {
  function CPopup() {
    (0, _classCallCheck3.default)(this, CPopup);
    this.data = {
      mask: true,
      show: false,
      show2: false,
      position: '',
      pos: ['left', 'top', 'right', 'bottom', ''],
      posi: 0
    };
    this.computed = {
      contentStyle: function contentStyle() {
        var style = void 0;
        switch (this.position) {
          case 'left':
            style = 'width:200cpx;background:#fff;';
            break;
          case 'top':
            style = 'height:200cpx;background:#fff;';
            break;
          case 'right':
            style = 'width:200cpx;background:#fff;';
            break;
          case 'bottom':
            style = 'height:200cpx;background:#fff;';
            break;
          default:
            style = "display:block;width: 500cpx;height: 200cpx;background: #fff;";
            break;
        }
        return style;
      }
    };
    this.watch = {};
    this.methods = {
      showPopup: function showPopup() {
        this.show = true;
      },
      showPopup2: function showPopup2() {
        this.position = this.pos[this.posi++];
        this.posi = this.posi % 5;
        this.show2 = true;
      },
      closePopup: function closePopup() {
        this.show = false;
        this.show2 = false;
      }
    };
  }

  (0, _createClass3.default)(CPopup, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return CPopup;
}();

exports.default = new CPopup();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cHeader: _cHeader2.default, cPopup: _cPopup2.default, cmlBuildinButton: _buttonWeb2.default, cmlBuildinPage: _pageWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "lwq5":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _state = __webpack_require__("K5yo");

var _state2 = _interopRequireDefault(_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  index: _state2.default
};

exports.default = state;

/***/ }),

/***/ "mA8O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "wx-picker-wrapper",
      attrs: { "data-evt-touchstart": "" },
      on: {
        touchstart: function($event) {
          $event.stopPropagation()
          return _vm.preventDefault($event)
        }
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "wx-picker",
          style: _vm.pickerStyle,
          attrs: {
            "data-evt-touchstart": "",
            "data-evt-touchend": "",
            "data-evt-touchmove": ""
          },
          on: {
            touchstart: function($event) {
              $event.stopPropagation()
              return _vm.ontouchstart($event)
            },
            touchend: function($event) {
              $event.stopPropagation()
              return _vm.ontouchend($event)
            },
            touchmove: function($event) {
              $event.stopPropagation()
              return _vm.ontouchmove($event)
            }
          }
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "animation",
                  rawName: "v-animation",
                  value: _vm.animationData,
                  expression: "animationData"
                }
              ],
              ref: "wrapper",
              staticClass: "wrapper",
              attrs: {}
            },
            _vm._l(_vm.data, function(item, index) {
              return _c(
                "span",
                {
                  staticClass: "picker-item",
                  class: [_vm.getSelectedClass(index)],
                  style: _vm.itemStyle,
                  attrs: {}
                },
                [_vm._v(_vm._s(item))]
              )
            })
          ),
          _vm._v(" "),
          _c("span", { staticClass: "picker-top", attrs: {} }),
          _vm._v(" "),
          _c("span", { staticClass: "picker-center", attrs: {} }),
          _vm._v(" "),
          _c("span", { staticClass: "picker-bottom", attrs: {} })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f24e7d5a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "mLMk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/success_1674452.png";

/***/ }),

/***/ "mUbh":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _actions = __webpack_require__("lulO");

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({}, _actions2.default);

/***/ }),

/***/ "mUcI":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _buttonWeb = __webpack_require__("laRC");

var _buttonWeb2 = _interopRequireDefault(_buttonWeb);

var _pageWeb = __webpack_require__("/b3d");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _cHeader = __webpack_require__("h1kM");

var _cHeader2 = _interopRequireDefault(_cHeader);

var _cDialog = __webpack_require__("6CMR");

var _cDialog2 = _interopRequireDefault(_cDialog);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var CDialog = function () {
  function CDialog() {
    (0, _classCallCheck3.default)(this, CDialog);
    this.data = {
      show: false,
      mask: true,
      showClose: false,
      headerTitle: "c-dialog",
      headerDesc: "c-dialog",
      message: "",
      type: "alert",
      iconType: "warn",
      iconStyle: {
        width: "60cpx",
        height: "60cpx"
      },
      title: "我是标题",
      content: "我是内容",
      custom: false
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      changeShow: function changeShow(e) {
        this.show = e.detail.value;
      },
      showAlert: function showAlert() {
        this.type = "alert";
        this.title = "我是标题";
        this.content = "我是内容";
        this.iconType = "warn";
        this.showClose = false;
        this.show = true;
      },
      showConfirm: function showConfirm() {
        this.type = "confirm";
        this.title = "确定离开吗";
        this.content = "";
        this.iconType = "warn";
        this.showClose = false;
        this.show = true;
      },
      showCloseIcon: function showCloseIcon() {
        this.type = "alert";
        this.title = "我是标题";
        this.content = "我是内容";
        this.iconType = "warn";
        this.showClose = true;
        this.show = true;
      },
      showCustom: function showCustom() {
        var _this = this;

        this.custom = true;
        setTimeout(function () {
          _this.custom = false;
        }, 1000);
      },
      closeEvent: function closeEvent() {},
      confirmEvent: function confirmEvent() {},
      cancelEvent: function cancelEvent() {}
    };
  }

  (0, _createClass3.default)(CDialog, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return CDialog;
}();

exports.default = new CDialog();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cHeader: _cHeader2.default, cDialog: _cDialog2.default, cmlBuildinButton: _buttonWeb2.default, cmlBuildinPage: _pageWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "mrKC":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStore;

var _index = __webpack_require__("iSEW");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStore(options) {
  return _index2.default.createStore(options);
}

/***/ }),

/***/ "mvFN":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _index = __webpack_require__("c0s4");

var _index2 = _interopRequireDefault(_index);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//


var createAnimation = _index2.default;

var CPopup = function CPopup() {
  (0, _classCallCheck3.default)(this, CPopup);
  this.props = {
    mask: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  };
  this.data = {
    animationData: createAnimation()
  };
  this.computed = {
    maskClass: function maskClass() {
      return this.mask ? "has-mask" : "no-mask";
    },
    containerStyle: function containerStyle() {
      var s = '';

      if (this.center) {
        s += 'align-items:center;justify-content:center;';
      }

      return s;
    },
    contentStyle: function contentStyle() {
      var style = "position: absolute;left:0;right:0;top:0;bottom:0;";
      switch (this.position) {
        case 'top':
          style = style.replace('bottom:0;', 'display:flex;flex-direction:column;');
          break;
        case 'right':
          style = style.replace('left:0;', 'display:flex;flex-direction:row;');
          break;
        case 'bottom':
          style = style.replace('top:0;', 'display:flex;flex-direction:column;');
          break;
        case 'left':
          style = style.replace('right:0;', 'display:flex;flex-direction:row;');
          break;
        default:
          style = "position:relative;";
          break;
      }
      return style;
    }
  };
  this.watch = {
    // show(newV, oldV) {
    //   if (newV) {
    //     this.showMask()
    //   } else {
    //     this.hideMask()
    //   }
    // }
  };
  this.methods = {
    closeevent: function closeevent() {
      this.$cmlEmit("close");
    },
    contentTap: function contentTap() {},
    showMask: function showMask() {
      this.animationData = createAnimation().opacity(0.4).backgroundColor('#25262d').step({
        duration: 300,
        timingFunction: 'linear',
        delay: 0
      }).export();
    },
    hideMask: function hideMask() {
      this.animationData = createAnimation().opacity(0).step({
        duration: 300,
        timingFunction: 'linear',
        delay: 0
      }).export();
    }
  };
};

exports.default = new CPopup();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "myBf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("xCCz");
var newPromiseCapability = __webpack_require__("bjfn");
var perform = __webpack_require__("CqNQ");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "mzpi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml__ = __webpack_require__("NIut");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c48a5e5_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml__ = __webpack_require__("kLjz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("g2Jc")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5c48a5e5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c48a5e5_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c48a5e5_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_list_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/chameleon-ui-builtin/components/list/list.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c48a5e5", Component.options)
  } else {
    hotAPI.reload("data-v-5c48a5e5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "nHQd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app", attrs: {} }, [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5d879fa6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "nMgD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_modal_cml__ = __webpack_require__("7q9P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_modal_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_modal_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_modal_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_modal_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_12ac841e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_modal_cml__ = __webpack_require__("Twpi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("4cvf")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-12ac841e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_modal_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_12ac841e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_modal_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_12ac841e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_modal_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/API/modal/modal.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12ac841e", Component.options)
  } else {
    hotAPI.reload("data-v-12ac841e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "nOyz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml__ = __webpack_require__("kHp8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba8aae36_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml__ = __webpack_require__("Q4lj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("UEK2")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ba8aae36"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba8aae36_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba8aae36_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_scroller_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/chameleon-ui-builtin/components/scroller/scroller.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba8aae36", Component.options)
  } else {
    hotAPI.reload("data-v-ba8aae36", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "nQTj":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("ONZj");

var _index2 = _interopRequireDefault(_index);

var _chameleonScroll = __webpack_require__("+gIU");

var _chameleonScroll2 = _interopRequireDefault(_chameleonScroll);

var _utils = __webpack_require__("MPvF");

var _collectSlotRefs = __webpack_require__("t+t5");

var _collectSlotRefs2 = _interopRequireDefault(_collectSlotRefs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_collectSlotRefs2.default],
  props: {
    bottomOffset: {
      // 距底部/右边多远时（单位cpx），触发 scrollbottom 事件
      type: Number,
      default: 0
    },
    bounce: {
      type: Boolean,
      default: true
    },
    cstyle: {
      type: String,
      default: ''
    },
    scrollDirection: {
      // 可选为 horizontal 或者 vertical，默认值为 vertical 。定义滚动的方向。
      type: String,
      default: 'vertical'
    },
    // -1表示占用剩余高度或者宽度
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    toElement: {
      type: String,
      default: ''
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    scrollLeft: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      scroll: null,
      loadmoreReset: true,
      wrapperStyle: '',
      scrollOptions: {
        probeType: 3,
        // 上拉下拉是否回弹
        bounce: this.bounce
      }
    };
  },
  watch: {
    cstyle: function cstyle() {
      if (!this.hasSize) return;
      this.initWrapperStyle();
    },
    height: function height(val) {
      if (!val) return;
      this.sizeInitAndChange();
    },
    width: function width() {
      if (!val) return;
      this.sizeInitAndChange();
    },
    scrollTop: function scrollTop(val) {
      if (!this.scroll) return;
      this.scroll.scrollTo(0, -val, 1000);
    },
    scrollLeft: function scrollLeft(val) {
      if (!this.scroll) return;
      this.scroll.scrollTo(-val, 0, 1000);
    },
    toElement: function toElement(val) {
      this.collectSlotRefs(this.$slots.default);
      var el = this._slotRefs[val];
      if (Array.isArray(el) && el.length) {
        el = this._slotRefs[val][0];
      }
      if (el) {
        /**
          scrollToElement(el, time, offsetX, offsetY, easing)
          {DOM | String} el 滚动到的目标元素, 如果是字符串，则内部会尝试调用 querySelector 转换成 DOM 对象。
          {Number} time 滚动动画执行的时长（单位 ms）
          {Number | Boolean} offsetX 相对于目标元素的横轴偏移量，如果设置为 true，则滚到目标元素的中心位置
          {Number | Boolean} offsetY 相对于目标元素的纵轴偏移量，如果设置为 true，则滚到目标元素的中心位置
        **/
        this.scroll.scrollToElement(el, 1000, false, false);
      }
    }
  },
  computed: {
    hasSize: function hasSize() {
      return this.height > 0 || this.width > 0;
    },
    innerStyle: function innerStyle() {
      return this.scrollDirection === 'vertical' ? 'flex-direction:column;' : 'flex-direction:row;';
    }
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      if (_this.scrollDirection === 'vertical' && !_this.height) {
        console.error('纵向滚动必须传递高度属性');
        return;
      }
      if (_this.scrollDirection === 'horizontal' && !_this.width) {
        console.error('横向滚动必须传递宽度属性');
        return;
      }
      _this.sizeInitAndChange();
    }, 200);
  },

  methods: {
    initWraper: function initWraper() {
      this.wrapper = this.$refs["c-scroller"];
    },
    sizeInitAndChange: function sizeInitAndChange() {
      var _this2 = this;

      this.initWraper();
      this.initWrapperStyle();
      if (!this.scroll) {
        this.calculateInnerWidth();
        // 等待WrapperStyle渲染完成，否则maxScrollY计算有问题
        setTimeout(function () {
          _this2.initScroller();
        }, 0);
      }
    },

    // 用于input blur
    touchstartHandler: function touchstartHandler(e) {
      var target = e.target.tagName;
      var activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') && activeElement.tagName !== target) {
        activeElement.blur();
      }
    },
    onScrollHandler: function onScrollHandler() {
      var scroll = this.scroll;
      var startX = scroll.startX || 0;
      var startY = scroll.startY || 0;
      var detail = {
        deltaX: (0, _index2.default)(scroll.x - startX),
        deltaY: (0, _index2.default)(scroll.y - startY),
        scrollHeight: (0, _index2.default)(scroll.scrollerHeight),
        scrollLeft: (0, _index2.default)(Math.abs(scroll.x)),
        scrollTop: (0, _index2.default)(Math.abs(scroll.y)),
        scrollWidth: (0, _index2.default)(scroll.scrollerWidth)
      };
      this.$emit('onscroll', detail);
      this.$emit('customscroll', detail);
    },
    onBottomHandler: function onBottomHandler(detail) {
      this.$emit('scrolltobottom', {
        direction: 'bottom'
      });
    },
    resetLoadmore: function resetLoadmore() {
      this.loadmoreReset = true;
    },
    finishPull: function finishPull() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.scroll.finishPullUp();
        _this3.scroll.finishPullDown();
        var timer = setTimeout(function () {
          _this3.scroll && _this3.scroll.refresh();
          _this3._refresh.isRebounding = false;
          _this3._loading.isRebounding = false;
          clearTimeout(timer);
        }, 1000);
      });
    },
    initWrapperStyle: function initWrapperStyle() {
      if (!this.wrapper) return;
      var wrapper = this.wrapper;
      var style = '';
      if (this.scrollDirection === 'vertical') {
        style = this.height < 0 ? 'height:' + (window.innerHeight - wrapper.getBoundingClientRect().top) + 'px;' : 'height:' + this.height + 'px;';
      } else {
        style = this.width < 0 ? 'width:' + (window.innerWidth - wrapper.getBoundingClientRect().left) + 'px;' : 'width:' + this.width + 'px;';
      }
      var wrapperStyle = this.hasSize ? this.cstyle + style : style + this.cstyle;
      this.wrapperStyle = (0, _utils.cmlStyleTransfer)(wrapperStyle);
    },
    calculateInnerWidth: function calculateInnerWidth() {
      if (this.scrollDirection !== 'horizontal') return;
      // 仅横向滚动需要
      var inner = this.$refs.inner;
      var width = 0;
      if (inner.children && inner.children.length) {
        var lastChild = inner.children[inner.children.length - 1];
        var marginRight = document.defaultView.getComputedStyle(lastChild, null)['marginRight'];
        //  去掉px 转为数字
        marginRight = +marginRight.substring(0, marginRight.length - 2);
        width += lastChild.offsetLeft + lastChild.offsetWidth + marginRight;
      }
      // 设置子元素宽度
      inner.style.width = width + 'px';
    },
    initOptions: function initOptions() {
      if (this.scrollDirection !== 'vertical') {
        this.scrollOptions.scrollX = true;
        this.scrollOptions.eventPassthrough = 'vertical';
      }

      // 仅垂直方向可设置refresh loading
      if (this._refresh && this.scrollDirection === 'vertical') {
        this.scrollOptions.pullDownRefresh = {
          threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
          stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
        };
      }

      if (this._loading && this.scrollDirection === 'vertical') {
        this.scrollOptions.pullUpLoad = {
          threshold: 50
        };
      }
    },
    initScroller: function initScroller() {
      var _this4 = this;

      var wrapper = this.wrapper;
      var inner = this.$refs.inner;

      if (!wrapper || !inner) {
        return;
      }

      this.initOptions();
      this.scroll = new _chameleonScroll2.default(wrapper, this.scrollOptions);

      // 监听事件
      // 上拉
      if (this.scrollOptions.pullUpLoad) {
        this.scroll.on('pullingUp', function () {
          if (_this4._loading) {
            _this4._loading.pullingUp();
          }
        });
      }

      // 下拉
      if (this.scrollOptions.pullDownRefresh) {
        this.scroll.on('pullingDown', function () {
          // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
          _this4._refresh.pullingDown();
        });
      }

      this.scroll.on('scroll', function (pos) {
        _this4.onScrollHandler(pos);
        _this4._refresh && _this4._refresh.toggleBeforeRefreshing(pos.y);
      });

      this.scroll.on('scrollEnd', function () {
        // offset > 0 说明方向向bottom
        var offset = void 0,
            isReachedBottom = void 0;
        if (_this4.scrollDirection === 'vertical') {
          offset = _this4.scroll.startY - _this4.scroll.y;
          isReachedBottom = _this4.scroll.y <= _this4.scroll.maxScrollY + (0, _utils.cpx2px)(_this4.bottomOffset);
        } else {
          offset = _this4.scroll.startX - _this4.scroll.x;
          isReachedBottom = _this4.scroll.x <= _this4.scroll.maxScrollX + (0, _utils.cpx2px)(_this4.bottomOffset);
        }
        // 滚动到底部
        if (offset > 0 && _this4.loadmoreReset && isReachedBottom) {
          _this4.onBottomHandler();
        } else if (!isReachedBottom && !_this4.loadmoreReset) {
          _this4.resetLoadmore();
        }
      });

      this.scroll.on('beforeScrollStart', function () {
        _this4.scroll.refresh();
        _this4.calculateInnerWidth();
      });
    }
  }
}; //
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "nWd7":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("xCCz");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("t9mz") });


/***/ }),

/***/ "njES":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__("fmLH");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__("F6Tz");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("SUxG");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Urzf");

var _inherits3 = _interopRequireDefault(_inherits2);

var _WexOptTransformer2 = __webpack_require__("WgSU");

var _WexOptTransformer3 = _interopRequireDefault(_WexOptTransformer2);

var _url = __webpack_require__("amoi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptTransformer = function (_WexOptTransformer) {
  (0, _inherits3.default)(OptTransformer, _WexOptTransformer);

  function OptTransformer(config) {
    (0, _classCallCheck3.default)(this, OptTransformer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OptTransformer.__proto__ || (0, _getPrototypeOf2.default)(OptTransformer)).call(this, config));

    _this.init();
    return _this;
  }

  (0, _createClass3.default)(OptTransformer, [{
    key: 'beforeCreateArgsMixin',
    value: function beforeCreateArgsMixin() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args = args || [];

      var searchObj = (0, _url.query2json)(location.search);

      var hashObj = (0, _url.query2json)(location.hash);

      args[0] = (0, _assign2.default)({}, args[0], searchObj, hashObj);

      return args;
    }
  }]);
  return OptTransformer;
}(_WexOptTransformer3.default);

exports.default = OptTransformer;

/***/ }),

/***/ "ntYf":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//


var Header = function () {
  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    this.props = {
      title: {
        type: String,
        default: '标题'
      },
      desc: {
        type: String,
        default: ''
      }
    };
    this.data = {};
    this.computed = {};
    this.watch = {};
    this.methods = {};
  }

  (0, _createClass3.default)(Header, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {}
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);
  return Header;
}();

exports.default = new Header();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "o4Nx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/bottom_4f4eed1.png";

/***/ }),

/***/ "oGul":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Chameleon 默认module名
var moduleDefault = exports.moduleDefault = 'cml';

/***/ }),

/***/ "oJVY":
/***/ (function(module, exports) {

module.exports = {"mode":"hash","domain":"https://api.chameleon.com","routes":[{"url":"/","path":"/pages/index/index","name":"首页","mock":"index.php"},{"url":"/beatles/h5/index","path":"/pages/index/index","name":"首页","mock":"index.php"},{"name":"c-toast","url":"/pages/COMP/c-toast/c-toast","path":"/pages/COMP/c-toast/c-toast","mock":"index.php"},{"name":"c-dialog","url":"/pages/COMP/c-dialog/c-dialog","path":"/pages/COMP/c-dialog/c-dialog","mock":"index.php"},{"name":"c-popup","url":"/pages/COMP/c-popup/c-popup","path":"/pages/COMP/c-popup/c-popup","mock":"index.php"},{"name":"c-tip","url":"/pages/COMP/c-tip/c-tip","path":"/pages/COMP/c-tip/c-tip","mock":"index.php"},{"name":"c-loading","url":"/pages/COMP/c-loading/c-loading","path":"/pages/COMP/c-loading/c-loading","mock":"index.php"},{"name":"c-actionsheet","url":"/pages/COMP/c-actionsheet/c-actionsheet","path":"/pages/COMP/c-actionsheet/c-actionsheet","mock":"index.php"},{"name":"c-picker","url":"/pages/COMP/c-picker/c-picker","path":"/pages/COMP/c-picker/c-picker","mock":"index.php"},{"name":"c-picker-panel","url":"/pages/COMP/c-picker-panel/c-picker-panel","path":"/pages/COMP/c-picker-panel/c-picker-panel","mock":"index.php"},{"name":"c-picker-item","url":"/pages/COMP/c-picker-item/c-picker-item","path":"/pages/COMP/c-picker-item/c-picker-item","mock":"index.php"},{"name":"c-tab","url":"/pages/COMP/c-tab/c-tab","path":"/pages/COMP/c-tab/c-tab","mock":"index.php"},{"name":"c-checkbox-group","url":"/pages/COMP/c-checkbox-group/c-checkbox-group","path":"/pages/COMP/c-checkbox-group/c-checkbox-group","mock":"index.php"},{"name":"c-radio-group","url":"/pages/COMP/c-radio-group/c-radio-group","path":"/pages/COMP/c-radio-group/c-radio-group","mock":"index.php"},{"name":"c-refresh","url":"/pages/COMP/c-refresh/c-refresh","path":"/pages/COMP/c-refresh/c-refresh","mock":"index.php"},{"name":"cml.modal","url":"/pages/API/modal/modal","path":"/pages/API/modal/modal","mock":"index.php"},{"name":"cml.toast","url":"/pages/API/toast/toast","path":"/pages/API/toast/toast","mock":"index.php"}]}

/***/ }),

/***/ "oMZh":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _chooseImage = __webpack_require__("s0zd");

var chooseImage = _interopRequireWildcard(_chooseImage);

var _clipboard = __webpack_require__("jRCD");

var clipboard = _interopRequireWildcard(_clipboard);

var _close = __webpack_require__("Do8H");

var close = _interopRequireWildcard(_close);

var _location = __webpack_require__("OI+Q");

var location = _interopRequireWildcard(_location);

var _navigator = __webpack_require__("puJh");

var navigator = _interopRequireWildcard(_navigator);

var _openPage = __webpack_require__("z6Ez");

var openPage = _interopRequireWildcard(_openPage);

var _reload = __webpack_require__("8W/S");

var reload = _interopRequireWildcard(_reload);

var _request = __webpack_require__("2dk6");

var request = _interopRequireWildcard(_request);

var _rollbackWeb = __webpack_require__("dCBN");

var rollbackWeb = _interopRequireWildcard(_rollbackWeb);

var _socket = __webpack_require__("v56Z");

var socket = _interopRequireWildcard(_socket);

var _storage = __webpack_require__("Mg3C");

var storage = _interopRequireWildcard(_storage);

var _systemInfo = __webpack_require__("eYJ0");

var systemInfo = _interopRequireWildcard(_systemInfo);

var _canIUse = __webpack_require__("irMx");

var canIUse = _interopRequireWildcard(_canIUse);

var _getSDKInfo = __webpack_require__("RMKk");

var getSDKInfo = _interopRequireWildcard(_getSDKInfo);

var _title = __webpack_require__("Gk/Z");

var title = _interopRequireWildcard(_title);

var _index = __webpack_require__("KvLQ");

var query = _interopRequireWildcard(_index);

var _getLaunchUrl = __webpack_require__("ak61");

var getLaunchUrl = _interopRequireWildcard(_getLaunchUrl);

var _ui = __webpack_require__("oRcE");

var ui = _interopRequireWildcard(_ui);

var _inSDK = __webpack_require__("4f6o");

var inSDK = _interopRequireWildcard(_inSDK);

var _index2 = __webpack_require__("iM0j");

var getComponentRect = _interopRequireWildcard(_index2);

var _index3 = __webpack_require__("LOYP");

var core = _interopRequireWildcard(_index3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({}, chooseImage, clipboard, close, location, navigator, openPage, reload, request, rollbackWeb, socket, storage, systemInfo, canIUse, getSDKInfo, title, query, getLaunchUrl, getComponentRect, ui, inSDK, getComponentRect, core);

/***/ }),

/***/ "oRcE":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showToast = showToast;
exports.alert = alert;
exports.confirm = confirm;

var _index = __webpack_require__("LOYP");

var moduleName = 'modal';
var methodShowToast = 'showToast';
var methodAlert = 'alert';
var methodConfirm = 'confirm';

function showToast(param) {
  /**
   * message
   * duration(ms)
   */
  (0, _index.callNative)(moduleName, methodShowToast, param, function () {});
}

showToast.prototype.moduleName = moduleName;
showToast.prototype.methodName = methodShowToast;

function alert(param, successCallBack) {
  /**
   * message
   * confirmTitle
   */
  (0, _index.callNative)(moduleName, methodAlert, param, successCallBack);
}

alert.prototype.moduleName = moduleName;
alert.prototype.methodName = methodAlert;

function confirm(param, successCallBack, failCallBack) {
  /**
   * message
   * confirmTitle
   * cancelTitle
   */
  (0, _index.callNative)(moduleName, methodConfirm, param, successCallBack);
}

confirm.prototype.moduleName = moduleName;
confirm.prototype.methodName = methodConfirm;

/***/ }),

/***/ "oWqj":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__("IZaB");

var _stringify2 = _interopRequireDefault(_stringify);

exports.serializeProtocol = serializeProtocol;
exports.deserializeProtocol = deserializeProtocol;
exports.registerCallback = registerCallback;
exports.registerListen = registerListen;
exports.dispatchProtocol = dispatchProtocol;

var _global = __webpack_require__("iaib");

var _const = __webpack_require__("oGul");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function serializeProtocol(_ref) {
  var action = _ref.action,
      module = _ref.module,
      method = _ref.method,
      args = _ref.args,
      callbackId = _ref.callbackId;

  var param = encodeURIComponent((0, _stringify2.default)(args));
  var url = 'cml://channel?';
  url += 'module=' + module + '&';
  url += 'action=' + action + '&';
  url += 'method=' + method + '&';
  url += 'args=' + param + '&';
  url += 'callbackId=' + callbackId;
  return url;
}

function deserializeProtocol(ptcStr) {
  var ptcObj = {};
  var arr = ptcStr && ptcStr.split(/(\?|&)/);
  for (var i = 0; i < arr.length; i++) {
    if (~arr[i].indexOf('=')) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      ptcObj[keyValue[1]] = decodeURIComponent(keyValue[2]);
    }
  }

  // 获得所需的参数
  var action = ptcObj.action,
      module = ptcObj.module,
      method = ptcObj.method,
      args = ptcObj.args,
      callbackId = ptcObj.callbackId;


  try {
    args = JSON.parse(args);
  } catch (e) {}

  try {
    args.data = args.data ? decodeURIComponent(args.data) : '{}';
    args.data = JSON.parse(args.data);
  } catch (e) {}

  var listenName = module + '_' + method;

  return {
    action: action, module: module, method: method, args: args, callbackId: callbackId, listenName: listenName
  };
}

/**
 * 注册主动调用端上的回调监听
 * @param {Function} callback 回调方法体
 */
function registerCallback(module, method, callback) {
  var module = module || _const.moduleDefault;
  var instance = _global.BridgeGlobal.getInstance();
  var callbackId = module + '_' + method + '_callback_' + instance.callbackId;
  instance.listenCallbacks[callbackId] = callback;
  instance.callbackId++;
  return callbackId;
}

/**
 * 注册等待端上主动调用监听方法
 * @param {Function} callback 监听方法体
 */
function registerListen(module, method, callback) {
  var instance = _global.BridgeGlobal.getInstance();
  var module = module || _const.moduleDefault;
  var listenName = module + '_' + method;
  instance.listenCallbacks[listenName] = callback;
  return listenName;
}

/**
 * 处理通道协议
 * @param {string} protocol 协议
 */
function dispatchProtocol(protocol) {
  var _deserializeProtocol = deserializeProtocol(protocol),
      action = _deserializeProtocol.action,
      module = _deserializeProtocol.module,
      method = _deserializeProtocol.method,
      args = _deserializeProtocol.args,
      callbackId = _deserializeProtocol.callbackId,
      listenName = _deserializeProtocol.listenName;

  var instance = _global.BridgeGlobal.getInstance();

  if (action === 'callbackToJs') {
    instance.listenCallbacks[callbackId] && instance.listenCallbacks[callbackId](args);
  }

  if (action === 'invokeJsMethod') {
    instance.listenCallbacks[listenName] && instance.listenCallbacks[listenName](args);
  }
}

/***/ }),

/***/ "ogOt":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = __webpack_require__("IZaB");

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _radio = __webpack_require__("TWKx");

var _radio2 = _interopRequireDefault(_radio);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radiogroup = function () {
  function Radiogroup() {
    (0, _classCallCheck3.default)(this, Radiogroup);
    this.props = {
      option: {
        type: Array,
        default: []
      },
      position: {
        type: String,
        default: 'left'
      },
      horizontal: {
        type: Boolean,
        default: false
      }
    };
    this.data = {
      radioList: []
    };
    this.computed = {
      horizontalStyle: function horizontalStyle() {
        if (this.horizontal) {
          return 'display:inline-flex;flex-direction:row;align-items:center;flex-wrap:wrap;flex:1;';
        }
        return '';
      },
      subPosition: function subPosition() {
        // 水平排列默认位置失效
        if (this.position === 'right' && !this.horizontal) {
          return 'right';
        }
        return 'left';
      }
    };
    this.watch = {};
    this.methods = {
      valueChange: function valueChange(e) {
        this.radioList = this.radioList.map(function (item, index) {
          if (index == e.detail.index) {
            item.checked = true;
          } else {
            item.checked = false;
          }
          return item;
        });
        this.$cmlEmit('groupchange', {
          value: this.radioList,
          index: e.detail.index
        });
      }
    };
  }

  (0, _createClass3.default)(Radiogroup, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {
      this.radioList = JSON.parse((0, _stringify2.default)(this.option));
    }
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);
  return Radiogroup;
}(); //
//
//
//
//
//
//
//

exports.default = new Radiogroup();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cmlBuildinRadio: _radio2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "ozXa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "p+oX":
/***/ (function(module, exports, __webpack_require__) {

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("S8KF");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = __webpack_require__("Ihxk");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _methods;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var common = __webpack_require__("CHsc");
var webStyleHandle = __webpack_require__("r3pY");

var _ = module.exports = {};
common.merge(_, common);

_.mixins = {
  methods: (_methods = {}, (0, _defineProperty3.default)(_methods, _.inlineStatementEventProxy, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    args = args.reduce(function (result, arg) {
      if (arg instanceof Event) {
        result.push(getNewEvent(arg));
      } else {
        result.push(arg);
      }
      return result;
    }, []);
    var originFuncName = args[0];
    if (this[originFuncName] && _.isType(this[originFuncName], 'Function')) {
      this[originFuncName].apply(this, (0, _toConsumableArray3.default)(args.slice(1)));
    } else {
      console.log('can not find function ' + originFuncName);
    }
  }), (0, _defineProperty3.default)(_methods, _.modelEventProxyName, function (e, modelKey) {
    var newEvent = getNewEvent(e);
    this[modelKey] = newEvent.detail.value;
  }), (0, _defineProperty3.default)(_methods, _.eventProxyName, function (e, originFuncName) {
    //调用原始事件
    if (this[originFuncName] && _.isType(this[originFuncName], 'Function')) {
      //获取新的事件对象
      var newEvent = getNewEvent(e);
      this[originFuncName](newEvent);
    } else {
      console.log('can not find function  ' + originFuncName);
    }
  }), (0, _defineProperty3.default)(_methods, _.eventEmitName, function (eventKey, detail) {
    //传递的参数内容包装成detail参数
    this.$emit(eventKey, {
      type: eventKey,
      detail: detail,
      stopPropagation: function stopPropagation() {}
    });
    if (this['$__checkCmlEmit__']) {
      this['$__checkCmlEmit__'](eventKey, detail);
    }
  }), (0, _defineProperty3.default)(_methods, _.styleParseName, function (content) {
    //web端不需要处理直接返回
    var res = '';
    if (_.isType(content, 'String')) {
      res = content;
    } else if (_.isType(content, 'Object')) {
      (0, _keys2.default)(content).forEach(function (key) {
        res += key + ':' + content[key] + ';';
      });
    }
    return res;
  }), (0, _defineProperty3.default)(_methods, _.styleProxyName, function (content, options) {
    return webStyleHandle(content, options);
  }), (0, _defineProperty3.default)(_methods, _.mergeStyleName, function () {
    return _.mergeStyle.apply(_, arguments);
  }), _methods)
};

function getNewEvent(e) {
  var newEvent = {};
  var type = e.type,
      timeStamp = e.timeStamp,
      target = e.target,
      currentTarget = e.currentTarget,
      touches = e.touches,
      changedTouches = e.changedTouches,
      _e$detail = e.detail,
      detail = _e$detail === undefined ? {} : _e$detail;


  newEvent._originEvent = e;

  if (type) {
    type = type.replace(/^weex\$/, '');
    type = type === 'click' ? 'tap' : type;
    newEvent.type = type;
  }

  if (timeStamp) {
    newEvent.timeStamp = parseInt(timeStamp);
  }

  if (target) {
    newEvent.target = {
      id: target.id,
      // offsetLeft: target.offsetLeft,
      // offsetTop: target.offsetTop,
      dataset: target.dataset
    };
  }

  if (currentTarget) {
    newEvent.currentTarget = {
      id: currentTarget.id,
      // offsetLeft: currentTarget.offsetLeft,
      // offsetTop: currentTarget.offsetTop,
      dataset: currentTarget.dataset
    };
  }

  if (touches) {
    newEvent.touches = [];
    for (var i = 0; i < touches.length; i++) {
      var touch = touches[i];
      var ret = {};
      ret.identifier = touch.identifier;
      ret.pageX = parseInt(touch.pageX);
      ret.pageY = parseInt(touch.pageY);
      ret.clientX = parseInt(touch.clientX);
      ret.clientY = parseInt(touch.clientY);
      newEvent.touches.push(ret);
    }
  }

  if (changedTouches) {
    newEvent.changedTouches = [];
    for (var _i = 0; _i < changedTouches.length; _i++) {
      var _touch = changedTouches[_i];
      var _ret = {};
      _ret.identifier = _touch.identifier;
      _ret.pageX = parseInt(_touch.pageX);
      _ret.pageY = parseInt(_touch.pageY);
      _ret.clientX = parseInt(_touch.clientX);
      _ret.clientY = parseInt(_touch.clientY);
      newEvent.changedTouches.push(_ret);
    }
  }

  if (_.isType(detail, 'Object')) {
    newEvent.detail = detail;
  } else {
    newEvent.detail = {};
  }

  if (target) {
    newEvent.detail.value = target.value;
  }

  //特殊事件处理
  if (type === 'loadmore') {
    newEvent.detail.direction = 'bottom';
  }

  if (type === 'scroll') {
    newEvent.detail = (0, _extends3.default)({}, newEvent.detail, {
      scrollHeight: e.contentSize ? e.contentSize.height : 0,
      scrollWidth: e.contentSize ? e.contentSize.width : 0,
      scrollLeft: e.contentOffset ? Math.abs(e.contentOffset.x) : 0,
      scrollTop: e.contentOffset ? Math.abs(e.contentOffset.y) : 0, // 坐标轴变换
      deltaX: 0,
      deltaY: 0
    });
  }

  return newEvent;
}

/***/ }),

/***/ "p06J":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("OzFA");
var global = __webpack_require__("tRKg");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("YYvI") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "p4KU":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__("z4ZC");

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
  }

  (0, _createClass3.default)(Method, [{
    key: 'navigateTo',
    value: function navigateTo(opt) {
      var path = opt.path,
          query = opt.query;

      query = (0, _utils.queryParse)(query);

      var runtime = __webpack_require__("1HDH").default;

      var _runtime$getInfo = runtime.getInfo(),
          router = _runtime$getInfo.router,
          routerConfig = _runtime$getInfo.routerConfig;

      if (path && router) {
        var flag = false;

        var routes = routerConfig.routes;
        for (var i = 0; i < routes.length; i++) {
          var route = routes[i];
          if (path === route.path) {
            flag = true;
            router.push({
              path: route.url,
              query: query
            });
            break;
          }
        }
        if (!flag) {
          router.push({
            path: router.options.routes[0].path,
            query: query
          });
        }
      } else {
        router.push({
          path: router.options.routes[0].path,
          query: query
        });
      }
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "p7Ns":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("hTSS")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "p8En":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page  cml-base cml-view", attrs: {} },
    [_vm._t("default", null, {})],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-74469485", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "pI9x":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "pKUO":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("S8KF");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _types$INDEX_DESC_NAM;

var _getterTypes = __webpack_require__("U79J");

var types = _interopRequireWildcard(_getterTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_types$INDEX_DESC_NAM = {}, (0, _defineProperty3.default)(_types$INDEX_DESC_NAM, types.INDEX_DESC_NAME, function (state, getters) {
  return '\u6211\u53EB\uFF1A' + state.index.name + '\u3002';
}), (0, _defineProperty3.default)(_types$INDEX_DESC_NAM, types.INDEX_DESC_AGE, function (state, getters) {
  return '\u4ECA\u5E74\uFF1A' + state.index.age + ' \u5C81\u3002';
}), _types$INDEX_DESC_NAM);

/***/ }),

/***/ "puJh":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigateTo = navigateTo;
exports.redirectTo = redirectTo;
exports.navigateBack = navigateBack;
function navigateTo(opt) {
  var runtime = __webpack_require__("1HDH").default;

  var _runtime$getInfo = runtime.getInfo(),
      router = _runtime$getInfo.router,
      routerConfig = _runtime$getInfo.routerConfig;

  var path = opt.path,
      query = opt.query;


  if (path && router) {
    var flag = false;

    var routes = routerConfig.routes;
    for (var i = 0; i < routes.length; i++) {
      var route = routes[i];
      if (path === route.path) {
        flag = true;
        router.push({
          path: route.url,
          query: query
        });
        break;
      }
    }
    if (!flag) {
      router.push({
        path: router.options.routes[0].path,
        query: query
      });
    }
  } else {
    router.push({
      path: router.options.routes[0].path,
      query: query
    });
  }
}

function redirectTo(opt) {
  var runtime = __webpack_require__("1HDH").default;

  var _runtime$getInfo2 = runtime.getInfo(),
      router = _runtime$getInfo2.router;

  var path = opt.path,
      query = opt.query;


  router.replace({
    path: path,
    query: query
  });
}

function navigateBack(backPageNum) {
  var runtime = __webpack_require__("1HDH").default;

  var _runtime$getInfo3 = runtime.getInfo(),
      router = _runtime$getInfo3.router;

  router.go(backPageNum);
}

/***/ }),

/***/ "qThd":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

//根据配置生成路由
var options = {
  mode: "hash",
  routes: [{
    path: "/",
    name: "首页",
    component: __webpack_require__("w8mr").default
  }, {
    path: "/beatles/h5/index",
    name: "首页",
    component: __webpack_require__("w8mr").default
  }, {
    path: "/pages/COMP/c-toast/c-toast",
    name: "c-toast",
    component: __webpack_require__("1IZ9").default
  }, {
    path: "/pages/COMP/c-dialog/c-dialog",
    name: "c-dialog",
    component: __webpack_require__("hfQc").default
  }, {
    path: "/pages/COMP/c-popup/c-popup",
    name: "c-popup",
    component: __webpack_require__("K88W").default
  }, {
    path: "/pages/COMP/c-tip/c-tip",
    name: "c-tip",
    component: __webpack_require__("5Pfz").default
  }, {
    path: "/pages/COMP/c-loading/c-loading",
    name: "c-loading",
    component: __webpack_require__("VqZ7").default
  }, {
    path: "/pages/COMP/c-actionsheet/c-actionsheet",
    name: "c-actionsheet",
    component: __webpack_require__("iF9Z").default
  }, {
    path: "/pages/COMP/c-picker/c-picker",
    name: "c-picker",
    component: __webpack_require__("XIJY").default
  }, {
    path: "/pages/COMP/c-picker-panel/c-picker-panel",
    name: "c-picker-panel",
    component: __webpack_require__("IBFR").default
  }, {
    path: "/pages/COMP/c-picker-item/c-picker-item",
    name: "c-picker-item",
    component: __webpack_require__("x8kg").default
  }, {
    path: "/pages/COMP/c-tab/c-tab",
    name: "c-tab",
    component: __webpack_require__("YOlC").default
  }, {
    path: "/pages/COMP/c-checkbox-group/c-checkbox-group",
    name: "c-checkbox-group",
    component: __webpack_require__("1vfO").default
  }, {
    path: "/pages/COMP/c-radio-group/c-radio-group",
    name: "c-radio-group",
    component: __webpack_require__("0nXP").default
  }, {
    path: "/pages/COMP/c-refresh/c-refresh",
    name: "c-refresh",
    component: __webpack_require__("qoO8").default
  }, {
    path: "/pages/API/modal/modal",
    name: "cml.modal",
    component: __webpack_require__("nMgD").default
  }, {
    path: "/pages/API/toast/toast",
    name: "cml.toast",
    component: __webpack_require__("fg1d").default
  }]
};

exports.default = options;

/***/ }),

/***/ "qbsL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "cml-buildin-page",
    { staticClass: " cml-base cml-page", attrs: { title: "c-picker-panel演示" } },
    [
      _c("c-header", {
        staticClass: " cml-base cml-c-header",
        attrs: { title: "c-picker-panel" }
      }),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "select-text  cml-base cml-text",
          attrs: { "data-evt-click": "" },
          on: {
            click: _vm.$stopOuterA,
            cml$tap: function($event) {
              $event.stopPropagation()
              _vm._cmlEventProxy($event, "showClick")
            }
          }
        },
        [_vm._v("点击选择：" + _vm._s(_vm.provins[_vm.provinsIndex]))]
      ),
      _vm._v(" "),
      _c(
        "c-picker-panel",
        {
          staticClass: " cml-base cml-c-picker-panel",
          attrs: {
            show: _vm.panelShow,
            height: 500,
            "header-height": 100,
            "data-evt-cancel": "",
            "data-evt-confirm": ""
          },
          on: {
            cancel: function($event) {
              _vm._cmlEventProxy($event, "cancel")
            },
            confirm: function($event) {
              _vm._cmlEventProxy($event, "confirm")
            }
          }
        },
        [
          _c("c-picker-item", {
            staticClass: " cml-base cml-c-picker-item",
            attrs: {
              "text-align": "center",
              height: 400,
              data: _vm.provins,
              "default-index": _vm.defaultIndex,
              "data-evt-selectchange": ""
            },
            on: {
              selectchange: function($event) {
                _vm._cmlEventProxy($event, "selectchange")
              }
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-695fd0cf", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "qcjd":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "qoO8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_cml__ = __webpack_require__("annF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_340e5a13_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_cml__ = __webpack_require__("NLtu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("CgXw")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-340e5a13"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_340e5a13_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_340e5a13_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/COMP/c-refresh/c-refresh.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-340e5a13", Component.options)
  } else {
    hotAPI.reload("data-v-340e5a13", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "r3pY":
/***/ (function(module, exports, __webpack_require__) {

var _typeof2 = __webpack_require__("lHTR");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 提供编译时样式处理的方法 */
// 运行时不能使用postcss 体积过大

var utils = __webpack_require__("Wh0r");
module.exports = function (content, options) {
  if (typeof options === 'string') {
    options = JSON.parse(utils.singlequot2doublequot(options));
  }
  if (typeof content !== 'string') {
    throw new Error('expected the value of style is string but get ' + (typeof content === 'undefined' ? 'undefined' : (0, _typeof3.default)(content)));
  }
  content = utils.disappearCssComment(content);
  content = utils.uniqueStyle(content);
  return parse(content);
  function parse(style) {
    return style.split(';').filter(function (declaration) {
      return !!declaration.trim();
    }).map(function (declaration) {
      var _utils$getStyleKeyVal = utils.getStyleKeyValue(declaration),
          key = _utils$getStyleKeyVal.key,
          value = _utils$getStyleKeyVal.value;

      return {
        property: key,
        value: value
      };
    }).map(function (declaration) {
      declaration.value = handle(declaration.value, options);
      return declaration.property + ':' + declaration.value;
    }).join(';');
  }

  function handle(content, options) {
    var pxRegex = /(\d*\.?\d+)cpx/gi;
    var unitPrecision = 5;
    function toFixed(number, precision) {
      var multiplier = Math.pow(10, precision + 1);
      var wholeNumber = Math.floor(number * multiplier);
      return Math.round(wholeNumber / 10) * 10 / multiplier;
    }
    if (options.rem === true) {
      var base = options.remOptions.rootValue.cpx;
      return content.replace(pxRegex, function (m, $1) {
        return toFixed(parseFloat($1, 10) / base, unitPrecision) + 'rem';
      });
    } else {
      var scale = options.scale;
      return content.replace(pxRegex, function (m, $1) {
        return toFixed(parseFloat($1, 10) * scale, unitPrecision) + 'px';
      });
    }
  }
};

/***/ }),

/***/ "rQou":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "cml-buildin-page",
    { staticClass: " cml-base cml-page", attrs: { title: "c-popup演示" } },
    [
      _c("c-header", {
        staticClass: " cml-base cml-c-header",
        attrs: { title: "c-popup" }
      }),
      _vm._v(" "),
      _c("c-popup", {
        staticClass: " cml-base cml-c-popup",
        attrs: { show: _vm.show, mask: _vm.mask, "data-evt-close": "" },
        on: {
          close: function($event) {
            _vm._cmlEventProxy($event, "closePopup")
          }
        }
      }),
      _vm._v(" "),
      _c(
        "c-popup",
        {
          staticClass: " cml-base cml-c-popup",
          attrs: {
            show: _vm.show2,
            mask: _vm.mask,
            position: _vm.position,
            "data-evt-close": ""
          },
          on: {
            close: function($event) {
              _vm._cmlEventProxy($event, "closePopup")
            }
          }
        },
        [
          _c(
            "div",
            {
              staticClass: " cml-base cml-view",
              style: _vm._cmlStyleProxy(_vm.contentStyle, {
                rem: true,
                scale: 0.5,
                remOptions: { rootValue: { cpx: 75 }, minPixelValue: null },
                autoprefixOptions: {
                  browsers: ["> 0.1%", "ios >= 8", "not ie < 12"],
                  grid: false
                }
              }),
              attrs: {}
            },
            [
              _c(
                "span",
                {
                  staticClass: " cml-base cml-text",
                  staticStyle: { "font-size": "0.37333rem" },
                  attrs: {}
                },
                [_vm._v("content")]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("cml-buildin-button", {
        staticClass: "btn  cml-base cml-button",
        attrs: { text: "show popup", "data-evt-onclick": "" },
        on: {
          onclick: function($event) {
            _vm._cmlEventProxy($event, "showPopup")
          }
        }
      }),
      _vm._v(" "),
      _c("cml-buildin-button", {
        staticClass: "btn  cml-base cml-button",
        attrs: { text: "left/top/right/bottom/center", "data-evt-onclick": "" },
        on: {
          onclick: function($event) {
            _vm._cmlEventProxy($event, "showPopup2")
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-08135535", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "rXxO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rffR":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var STYLE_MAP = exports.STYLE_MAP = {
  red: {
    'background-color': '#db2a36'
  },
  orange: {
    'background-color': '#fc9153'
  },
  white: {
    'background-color': '#FFFFFF',
    'border-color': '#A5A5A5',
    'border-width': '1px'
  },
  blue: {
    'background-color': '#4a4c5b'
  },
  green: {
    'background-color': '#50a050'
  }
};

var TEXT_STYLE_MAP = exports.TEXT_STYLE_MAP = {
  red: {
    color: '#FFFFFF'
  },
  orange: {
    color: '#FFFFFF'
  },
  blue: {
    color: '#FFFFFF'
  },
  white: {
    color: '#3D3D3D'
  },
  green: {
    color: '#FFFFFF'
  }
};

var BUTTON_STYLE_MAP = exports.BUTTON_STYLE_MAP = {
  full: {
    width: '702cpx',
    height: '88cpx'
  },
  big: {
    width: '339cpx',
    height: '70cpx'
  },
  medium: {
    width: '218cpx',
    height: '60cpx'
  },
  small: {
    width: '157cpx',
    height: '44cpx'
  }
};

var TEXT_FONTSIZE_STYLE_MAP = exports.TEXT_FONTSIZE_STYLE_MAP = {
  full: {
    'font-size': '36cpx'
  },
  big: {
    'font-size': '32cpx'
  },
  medium: {
    'font-size': '28cpx'
  },
  small: {
    'font-size': '24cpx'
  }
};

/***/ }),

/***/ "rouJ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _cPopup = __webpack_require__("H+3B");

var _cPopup2 = _interopRequireDefault(_cPopup);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CToast = function () {
  function CToast() {
    (0, _classCallCheck3.default)(this, CToast);
    this.props = {
      type: {
        type: String,
        default: "loading"
      },
      message: {
        type: String,
        default: ""
      },
      duration: {
        type: Number,
        default: 3000
      },
      show: {
        type: Boolean,
        default: false
      },
      mask: {
        type: Boolean,
        default: false
      },
      needIcon: {
        type: Boolean,
        default: true
      }
    };
    this.data = {
      transitionStyle: "",
      IconMap: {
        loading: __webpack_require__("PAoH"),
        success: __webpack_require__("7vtH"),
        warn: __webpack_require__("62nc")
      }
    };
    this.computed = {
      typeImg: function typeImg() {
        return this.IconMap[this.type];
      },
      maskClass: function maskClass() {
        return this.mask ? "has-mask" : "no-mask";
      }
    };
    this.watch = {
      show: function show(n, o) {
        var _this = this;

        if (n) {
          setTimeout(function () {
            _this.$cmlEmit("show", { value: false });
          }, this.duration);
        }
      }
    };
    this.methods = {};
  }

  (0, _createClass3.default)(CToast, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return CToast;
}(); //
//
//
//
//
//
//
//
//
//

exports.default = new CToast();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cPopup: _cPopup2.default });


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "ryNh":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("JAUT");
var toObject = __webpack_require__("5FFm");
var IE_PROTO = __webpack_require__("NTY1")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "rzuY":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _pageWeb = __webpack_require__("/b3d");

var _pageWeb2 = _interopRequireDefault(_pageWeb);

var _cHeader = __webpack_require__("h1kM");

var _cHeader2 = _interopRequireDefault(_cHeader);

var _cPicker = __webpack_require__("17lI");

var _cPicker2 = _interopRequireDefault(_cPicker);

var _data = __webpack_require__("vHVa");

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//

var CPicker = function () {
  function CPicker() {
    (0, _classCallCheck3.default)(this, CPicker);
    this.data = {
      provins: _data.provins,
      defaultIndex: 0,
      provinsIndex: 0,
      pickerShow: false
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      selectchange: function selectchange(e) {
        this.provinsIndex = this.defaultIndex = e.detail.index;
      },
      showClick: function showClick() {
        this.pickerShow = true;
      },
      cancel: function cancel() {
        this.pickerShow = false;
      },
      confirm: function confirm() {
        this.pickerShow = false;
      }
    };
  }

  (0, _createClass3.default)(CPicker, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);
  return CPicker;
}();

exports.default = new CPicker();


exports.default.components = (0, _extends3.default)({}, exports.default.components, { cHeader: _cHeader2.default, cPicker: _cPicker2.default, cmlBuildinPage: _pageWeb2.default });


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "s0zd":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chooseImage = chooseImage;

var _index = __webpack_require__("LOYP");

var moduleName = 'cml';
var methodName = 'chooseImage';

function chooseImage(param, cb) {
  /**
   * type: camera/album/choice
   * cut: true/false
   * quality: 默认100 [0-100]
   * width: 0
   * height: 0
   */
  (0, _index.callNative)(moduleName, methodName, param, function (res) {
    if (res.errno == 0) {
      var base64 = 'data:image/' + res.data.type + ';base64,' + res.data.image;
      res.data.base64 = base64;
    } else {
      res.data = {
        type: '',
        image: '',
        base64: ''
      };
    }

    /**
    * errno: 0成功，1失败，2取消，3没权限
    * msg
    * data: {
    *   type,
    *   image,
    *   base64
    * }
    */
    cb(res);
  });
}

chooseImage.prototype.moduleName = moduleName;
chooseImage.prototype.methodName = methodName;

/***/ }),

/***/ "saZo":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _index = __webpack_require__("xp5m");

var _index2 = _interopRequireDefault(_index);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _chameleonRuntime = __webpack_require__("1HDH");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//


var CPage = function () {
  function CPage() {
    (0, _classCallCheck3.default)(this, CPage);
    this.props = {
      title: {
        required: true,
        type: String,
        default: ''
      }
    };
    this.watch = {
      title: function title(v) {
        this.setTitle(v);
      }
    };
    this.methods = {
      setTitle: function setTitle(v) {
        document.title = v;
        (0, _index2.default)(v);
      }
    };
  }

  (0, _createClass3.default)(CPage, [{
    key: 'created',
    value: function created() {
      this.setTitle(this.title);
    }
  }]);
  return CPage;
}();

exports.default = new CPage();


exports.default.components = (0, _extends3.default)({}, exports.default.components);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "soxk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sr4X":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/network_5ae2413.png";

/***/ }),

/***/ "suar":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("dkPk");
var gOPN = __webpack_require__("7WrD").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "sufT":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueRouter = __webpack_require__("5oF4");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _routerOptions = __webpack_require__("qThd");

var _routerOptions2 = _interopRequireDefault(_routerOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vueRouter2.default);

// 根据配置生成的路由options

/*global Vue*/


_routerOptions2.default.mode =  true ? _routerOptions2.default.mode : 'abstract';

var Router = new _vueRouter2.default(_routerOptions2.default);
exports.default = Router;

/***/ }),

/***/ "t+t5":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  methods: {
    collectSlotRefs: function collectSlotRefs() {
      var VNodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (!VNodes || !VNodes.length) return;

      var node = checkContext(VNodes);
      if (node) {
        this._slotRefs = node.context.$refs || {};
      } else {
        this._slotRefs = {};
      }

      function checkContext(vnodes) {
        var children = [];
        var node = null;
        for (var i = 0; i < vnodes.length; i++) {
          var vnode = vnodes[i];
          if (vnode.context) {
            return node = vnode;
          }

          if (vnode.children && vnode.children.length) {
            children = children.concat(vnode.children);
          }
        }
        if (children.length) {
          return checkContext(children);
        }
      }

      // const refs = this._slotRefs = {}

      // function getRefs(vnodes) {
      //   vnodes = vnodes.filter((vnode) => {
      //     if (vnode.children && vnode.children.length) {
      //       getRefs(vnode.children)
      //     }
      //     return vnode.data && vnode.data.ref
      //   })
      //   if (!vnodes.length) return
      //   vnodes.forEach(vnode => {
      //     const key = vnode.data.ref
      //     const ref = vnode.componentInstance || vnode.elm

      //     if (vnode.data.refInFor) {
      //       if (!Array.isArray(refs[key])) {
      //         refs[key] = [ref]
      //       } else if (refs[key].indexOf(ref) < 0) {
      //         refs[key].push(ref)
      //       }
      //     } else {
      //       refs[key] = ref
      //     }
      //   })
      // }
      // getRefs(VNodes)
    }
  }
};

/***/ }),

/***/ "t9mz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("YKc4");
var gOPS = __webpack_require__("SCZj");
var pIE = __webpack_require__("PGoE");
var toObject = __webpack_require__("5FFm");
var IObject = __webpack_require__("R2s1");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("lt2H")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "tRKg":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "tZhg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "tcHh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml__ = __webpack_require__("LtGg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_43dfcd31_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml__ = __webpack_require__("YL7v");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("ozXa")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-43dfcd31"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_43dfcd31_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_43dfcd31_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_loading_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-loading/c-loading.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43dfcd31", Component.options)
  } else {
    hotAPI.reload("data-v-43dfcd31", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ttS0":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.listen = listen;

var _common = __webpack_require__("oWqj");

/**
 * 注册监听通道
 */
function init() {
  window.cmlBridge = {};
  window.cmlBridge.channel = function (protocol) {
    (0, _common.dispatchProtocol)(protocol);
  };
}

/**
 * 注册主动监听
 * @param {String} module 
 * @param {String} method 
 * @param {Function} callback 
 */
function listen(module, method, callback) {
  _common.registerListen.apply(undefined, arguments);
}

/***/ }),

/***/ "uXFq":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cpx2px = exports.descriptionPipe = exports.stylePipe = undefined;

var _index = __webpack_require__("jVJD");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylePipe = exports.stylePipe = function stylePipe(styles, descriptions, quene) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var current = styles;
  quene.forEach(function (fuc) {
    current = fuc.apply(null, [current, descriptions].concat(args));
  });
  return current;
};

var descriptionPipe = exports.descriptionPipe = function descriptionPipe(descriptions, styles, quene) {
  for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  var current = descriptions;
  quene.forEach(function (fuc) {
    current = fuc.apply(null, [current, styles].concat(args));
  });
  return current;
};

var cpx2px = exports.cpx2px = function cpx2px(v) {
  return +(_index2.default.getViewportWidth() / 750 * v).toFixed(3);
};

exports.default = {};

/***/ }),

/***/ "ucRq":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "uj1z":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("EJ14");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "ukYY":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _mutations = __webpack_require__("9xHU");

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({}, _mutations2.default);

/***/ }),

/***/ "v56Z":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSocket = initSocket;

var _index = __webpack_require__("LOYP");

var moduleName = 'webSocket';
var methodName = 'WebSocket';

function initSocket(_ref) {
  var url = _ref.url;

  WebSocket.WebSocket(url);
  return WebSocket;
}

initSocket.prototype.moduleName = moduleName;
initSocket.prototype.methodName = methodName;

var WebSocket = {
  WebSocket: function WebSocket(url) {
    this._callAdapter(methodName, { url: url });
  },
  onopen: function onopen(cb) {
    this._listenAdapter('onopen', cb);
  },
  onmessage: function onmessage(cb) {
    this._listenAdapter('onmessage', cb);
  },
  onerror: function onerror(cb) {
    this._listenAdapter('onerror', cb);
  },
  onclose: function onclose(cb) {
    this._listenAdapter('onclose', cb);
  },
  send: function send() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this._callAdapter('send', data);
  },
  close: function close() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { code: 0, reason: 'close' };

    /**
     * code: 0
     * reason: string
     */
    this._callAdapter('close', param);
  },
  _callAdapter: function _callAdapter(key, param) {
    (0, _index.callNative)(moduleName, key, param, function () {});
  },
  _listenAdapter: function _listenAdapter(key, cb) {
    (0, _index.listenNative)(moduleName, key, cb);
  }
};

/***/ }),

/***/ "v8KS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml__ = __webpack_require__("f1jY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d879fa6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml__ = __webpack_require__("nHQd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("2Jju")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5d879fa6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d879fa6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d879fa6_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_app_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/app/app.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d879fa6", Component.options)
  } else {
    hotAPI.reload("data-v-5d879fa6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "vEog":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("E+yl");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "vHVa":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var provins = exports.provins = ["北京市", "天津市", "河北省", "山西省", "内蒙古", "辽宁省", "吉林省", "黑龙江省", "上海市", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西", "海南省", "重庆市", "四川省", "贵州省", "云南省", "西藏", "陕西省", "甘肃省", "青海", "宁夏", "新疆"];

/***/ }),

/***/ "vLra":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml__ = __webpack_require__("UJIE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2526512f_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml__ = __webpack_require__("XtqR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("iFbe")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2526512f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2526512f_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2526512f_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tip_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-tip/c-tip.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2526512f", Component.options)
  } else {
    hotAPI.reload("data-v-2526512f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "vdCN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vn5Q":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("tRKg");
var core = __webpack_require__("OzFA");
var LIBRARY = __webpack_require__("YYvI");
var wksExt = __webpack_require__("ShPv");
var defineProperty = __webpack_require__("isOg").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "w1p+":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "w3K7":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("ucRq")('meta');
var isObject = __webpack_require__("OuXD");
var has = __webpack_require__("JAUT");
var setDesc = __webpack_require__("isOg").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("lt2H")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "w7d5":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("OuXD");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "w8mr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml__ = __webpack_require__("1NSh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bad7fbd_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml__ = __webpack_require__("O5Hj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("x0dB")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1bad7fbd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bad7fbd_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bad7fbd_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_index_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1bad7fbd", Component.options)
  } else {
    hotAPI.reload("data-v-1bad7fbd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "wUk3":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("OuXD");
var document = __webpack_require__("tRKg").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "wbAX":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__("h2Ex");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LIFECYCLE = {
  web: {
    hooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed']
  },
  weex: {
    hooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed']
  },
  wx: {
    app: {
      hooks: ['onLaunch', 'onShow', 'onHide'],
      hooksMap: {
        'beforeCreate': 'onLaunch',
        'created': 'onLaunch',
        'beforeMount': 'onLaunch',
        'mounted': 'onShow',
        'beforeDestroy': 'onHide',
        'destroyed': 'onHide'
      },
      whitelist: ['onError', 'onPageNotFound']
    },
    page: {
      hooks: ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload'],
      hooksMap: {
        'beforeCreate': 'onLoad',
        'created': 'onLoad',
        'beforeMount': 'onShow',
        'mounted': 'onReady',
        'beforeDestroy': 'onUnload',
        'destroyed': 'onUnload'
      },
      whitelist: ['onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap']
    },
    component: {
      hooks: ['created', 'attached', 'ready', 'detached'],
      hooksMap: {
        'beforeCreate': 'created',
        'created': 'created',
        'beforeMount': 'attached',
        'mounted': 'ready',
        'beforeDestroy': 'detached',
        'destroyed': 'detached'
      },
      whitelist: ['moved']
    }
  },
  alipay: {
    app: {
      hooks: ['onLaunch', 'onShow', 'onHide'],
      hooksMap: {
        'beforeCreate': 'onLaunch',
        'created': 'onLaunch',
        'beforeMount': 'onLaunch',
        'mounted': 'onShow',
        'beforeDestroy': 'onHide',
        'destroyed': 'onHide'
      },
      whitelist: ['onError', 'onPageNotFound']
    },
    page: {
      hooks: ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload'],
      hooksMap: {
        'beforeCreate': 'onLoad',
        'created': 'onLoad',
        'beforeMount': 'onShow',
        'mounted': 'onReady',
        'beforeDestroy': 'onUnload',
        'destroyed': 'onUnload'
      },
      whitelist: ['onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onTitleClick']
    },
    component: {
      hooks: ['didMount', 'didUnmount'],
      hooksMap: {
        'beforeCreate': 'didMount',
        'created': 'didMount',
        'beforeMount': 'didMount',
        'mounted': 'didMount',
        'beforeDestroy': 'didUnmount',
        'destroyed': 'didUnmount'
      },
      whitelist: []
    }
  },
  baidu: {
    app: {
      hooks: ['onLaunch', 'onShow', 'onHide'],
      hooksMap: {
        'beforeCreate': 'onLaunch',
        'created': 'onLaunch',
        'beforeMount': 'onLaunch',
        'mounted': 'onShow',
        'beforeDestroy': 'onHide',
        'destroyed': 'onHide'
      },
      whitelist: ['onError', 'onPageNotFound']
    },
    page: {
      hooks: ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload'],
      hooksMap: {
        'beforeCreate': 'onLoad',
        'created': 'onLoad',
        'beforeMount': 'onShow',
        'mounted': 'onReady',
        'beforeDestroy': 'onUnload',
        'destroyed': 'onUnload'
      },
      whitelist: ['onForceReLaunch', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap']
    },
    component: {
      hooks: ['created', 'attached', 'ready', 'detached'],
      hooksMap: {
        'beforeCreate': 'created',
        'created': 'created',
        'beforeMount': 'created',
        'mounted': 'ready',
        'beforeDestroy': 'detached',
        'destroyed': 'detached'
      },
      whitelist: []
    }
  },
  cml: {
    hooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed']
  }
};

exports.default = new _config2.default(LIFECYCLE);

/***/ }),

/***/ "x0dB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "x8kg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_cml__ = __webpack_require__("2m7E");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac171ffe_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_cml__ = __webpack_require__("xnjG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("FTri")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ac171ffe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac171ffe_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac171ffe_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_picker_item_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/COMP/c-picker-item/c-picker-item.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ac171ffe", Component.options)
  } else {
    hotAPI.reload("data-v-ac171ffe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "xCCz":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("tRKg");
var core = __webpack_require__("OzFA");
var ctx = __webpack_require__("49u2");
var hide = __webpack_require__("SMww");
var has = __webpack_require__("JAUT");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "xLxh":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__("1iTB");

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _util = __webpack_require__("Pn5V");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Method = function () {
  function Method() {
    (0, _classCallCheck3.default)(this, Method);
    this.scheduleTime = 0;
  }

  (0, _createClass3.default)(Method, [{
    key: 'move',
    value: function move(context) {}
  }, {
    key: 'loadingWrapStyle',
    value: function loadingWrapStyle() {
      return _promise2.default.resolve('position: fixed; left: 0; right: 0; top: 0; bottom: 0; z-index: 998;');
    }
  }]);
  return Method;
}();

exports.default = new Method();

(0, _util.copyProtoProperty)(exports.default);

/***/ }),

/***/ "xT8E":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("7s0b"), __esModule: true };

/***/ }),

/***/ "xfCQ":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__("cL84");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chameleon = {
  config: {
    bundleUrl: location.href
  },

  utils: _utils2.default,
  mixins: {},
  _components: {
    button: 1,
    checkbox: 1,
    input: 1,
    list: 1,
    page: 1,
    radio: 1,
    richtext: 1,
    scroller: 1,
    switch: 1,
    textarea: 1,
    video: 1
  },
  _meta: {
    mounted: {},
    updated: {},
    destroyed: {},
    requiredModules: {},
    apiCalled: {},
    perf: {}
  }

};

exports.default = chameleon;

/***/ }),

/***/ "xjA6":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.call = call;

var _const = __webpack_require__("oGul");

var _common = __webpack_require__("oWqj");

/**
 * js调用客户端
 * @param {String} action 行为方式
 * @param {String} module 模块名
 * @param {String} method 方法名
 * @param {Array}  args   参数数组
 */
function call(action, module, method, args, callback) {
  var module = module || _const.moduleDefault;
  var callbackId = (0, _common.registerCallback)(module, method, callback);
  var url = (0, _common.serializeProtocol)({
    action: action,
    module: module,
    method: method,
    args: args,
    callbackId: callbackId
  });

  schemeJump(url);
}

function schemeJump(url) {
  var iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.style.display = 'none';
  document.documentElement.appendChild(iframe);
  setTimeout(function () {
    document.documentElement.removeChild(iframe);
  }, 0);
}

/***/ }),

/***/ "xnjG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "cml-buildin-page",
    { staticClass: " cml-base cml-page", attrs: { title: "c-picker-item演示" } },
    [
      _c("c-header", {
        staticClass: " cml-base cml-c-header",
        attrs: { title: "c-picker-item" }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "select-text  cml-base cml-text", attrs: {} }, [
        _vm._v("选择的值：" + _vm._s(_vm.provins[_vm.provinsIndex]))
      ]),
      _vm._v(" "),
      _c("c-picker-item", {
        staticClass: " cml-base cml-c-picker-item",
        attrs: {
          "text-align": "center",
          height: 400,
          data: _vm.provins,
          "default-index": _vm.defaultIndex,
          "data-evt-selectchange": ""
        },
        on: {
          selectchange: function($event) {
            _vm._cmlEventProxy($event, "selectchange")
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ac171ffe", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "xp5m":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setTitle;

var _index = __webpack_require__("i0PX");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setTitle() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _index2.default.setTitle(title);
}

/***/ }),

/***/ "xrry":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("yfK2") && !__webpack_require__("lt2H")(function () {
  return Object.defineProperty(__webpack_require__("wUk3")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "yLmy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_item_cml__ = __webpack_require__("J6Fo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_item_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_item_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_item_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_item_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0911408e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_item_cml__ = __webpack_require__("acnc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("tZhg")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0911408e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_item_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0911408e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_item_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_0911408e_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_tab_pane_item_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-tab-pane-item/c-tab-pane-item.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0911408e", Component.options)
  } else {
    hotAPI.reload("data-v-0911408e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "yVTO":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("X6gH");

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__("fmLH");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__("DAVl");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("CU9w");

var _createClass3 = _interopRequireDefault(_createClass2);

var _proto = __webpack_require__("Qr3T");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseCtor = function () {
  function BaseCtor(options) {
    (0, _classCallCheck3.default)(this, BaseCtor);

    // 拷贝原型链上属性
    (0, _proto.copyProtoProperty)(options);

    this.options = (0, _assign2.default)({}, options);
    this.originalOptions = options;
  }

  (0, _createClass3.default)(BaseCtor, [{
    key: 'initOptTransformer',
    value: function initOptTransformer(OptTransformer, config) {
      var optTransformer = new OptTransformer((0, _extends3.default)({
        options: this.options
      }, config));
      this.options = optTransformer.getOptions();
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      return this.options;
    }
  }]);
  return BaseCtor;
}();

exports.default = BaseCtor;

/***/ }),

/***/ "yfK2":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("lt2H")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ykF7":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("YKc4");
var toIObject = __webpack_require__("dkPk");
var isEnum = __webpack_require__("PGoE").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "z4ZC":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkValue = undefined;

var _objectWithoutProperties2 = __webpack_require__("SRKA");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _keys = __webpack_require__("DyO6");

var _keys2 = _interopRequireDefault(_keys);

exports.isFn = isFn;
exports.isStr = isStr;
exports.isNum = isNum;
exports.isObj = isObj;
exports.isArray = isArray;
exports.isUndefined = isUndefined;
exports.isEmpty = isEmpty;
exports.noop = noop;
exports.parseQuery = parseQuery;
exports.queryStringify = queryStringify;
exports.queryParse = queryParse;
exports.isNeedApiPrefix = isNeedApiPrefix;
exports.addApiPrefix = addApiPrefix;
exports.tryJsonParse = tryJsonParse;
exports.getQueryParamsFromUrl = getQueryParamsFromUrl;
exports.getOpenObj = getOpenObj;
exports.getUrlWithConnector = getUrlWithConnector;
exports.getRefObj = getRefObj;
exports.compareVersion = compareVersion;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 基础js方法的封装
 *
 */
function typeEqual(obj, type) {
  return Object.prototype.toString.call(obj) === '[object ' + type + ']';
}

function isFn(obj) {
  return typeEqual(obj, 'Function');
}

function isStr(obj) {
  return typeEqual(obj, 'String');
}

function isNum(obj) {
  return typeof obj === 'number';
}

function isObj(obj) {
  return typeEqual(obj, 'Object');
}

function isArray(obj) {
  return typeEqual(obj, 'Array');
}

function isUndefined(obj) {
  return typeEqual(obj, 'Undefined');
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

function noop() {}

function parseQuery(obj) {
  var str = '&';
  var keys = null;
  if (obj && (0, _keys2.default)(obj).length > 0) {
    keys = (0, _keys2.default)(obj);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      str += key + '=' + encodeURIComponent(obj[key]) + '&';
    }
  }
  return str;
}

function queryStringify(obj) {
  var str = '&';
  var keys = null;
  if (obj && (0, _keys2.default)(obj).length > 0) {
    keys = (0, _keys2.default)(obj);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      str += key + '=' + encodeURIComponent(obj[key]) + '&';
    }
  }
  return str;
}

function queryParse() {
  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var arr = search.split(/(\?|&)/);
  var parmsObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = keyValue[2];
    }
  }
  return parmsObj;
}

function isNeedApiPrefix(url) {
  return (/^\/[^/]/.test(url)
  );
}

function addApiPrefix(url) {
  if (true) {
    return "https://api.chameleon.com" + url;
  }
  return url;
}

function tryJsonParse(some) {
  // 这里eslint提示也先别删除\[\]
  if (isStr(some) && /[\{\[].*[\}\]]/.test(some)) {
    some = JSON.parse(some);
  }
  return some;
}

function getQueryParamsFromUrl(url) {
  var arr = url.split(/(\?|&)/);
  var parmsObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      var keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = decodeURIComponent(keyValue[2]);
    }
  }
  return parmsObj;
}

/**
 * 获取处理后的各端打开的地址
 * @param {String} url url地址
 * @return {Object} objTreated 处理好的三端地址及对象
 */
function getOpenObj(url) {
  var webUrlWithoutQuery = url.split('?')[0];
  var queryObj = getQueryParamsFromUrl(url);
  var _queryObj$weixin_appi = queryObj.weixin_appid,
      weixin_appid = _queryObj$weixin_appi === undefined ? '' : _queryObj$weixin_appi,
      _queryObj$weixin_path = queryObj.weixin_path,
      weixin_path = _queryObj$weixin_path === undefined ? '' : _queryObj$weixin_path,
      _queryObj$weixin_envV = queryObj.weixin_envVersion,
      weixin_envVersion = _queryObj$weixin_envV === undefined ? '' : _queryObj$weixin_envV,
      _queryObj$weex_path = queryObj.weex_path,
      weex_path = _queryObj$weex_path === undefined ? '' : _queryObj$weex_path,
      _queryObj$wx_addr = queryObj.wx_addr,
      wx_addr = _queryObj$wx_addr === undefined ? '' : _queryObj$wx_addr,
      extraData = (0, _objectWithoutProperties3.default)(queryObj, ['weixin_appid', 'weixin_path', 'weixin_envVersion', 'weex_path', 'wx_addr']);


  var objTreated = {
    weex: wx_addr ? webUrlWithoutQuery + '?weex_path=' + weex_path + queryStringify(extraData) + '&wx_addr=' + wx_addr : null,
    web: webUrlWithoutQuery + '?' + queryStringify(extraData),
    wx: {
      appId: weixin_appid,
      path: weixin_path,
      extraData: extraData,
      envVersion: weixin_envVersion
    }
  };
  return objTreated;
}

// 获得带正确连接符的url
function getUrlWithConnector(url) {
  var connector = url.includes('?') ? '&' : '?';
  return url + connector;
}

// 获取ref的通用对象
function getRefObj(ref) {
  var refObj = {
    webDom: '',
    id: '',
    weexRef: ''
  };
  if (false) {
    refObj.id = ref.id;
  } else if (false) {
    refObj.weexRef = ref;
  } else if (ref.$el) {
    refObj.webDom = ref.$el;
  } else {
    refObj.webDom = ref;
  }
  return refObj;
}

/**
 * 比较版本号
 * @param {String} v1 版本号1
 * @param {String} symb 比较符
 * @param {String} v2 版本号2
 */
function compareVersion(v1, symb, v2) {
  v1 = parseVersion(v1);
  v2 = parseVersion(v2);
  if (symb.indexOf('=') !== -1 && v1 === v2) {
    return true;
  }
  if (symb.indexOf('>') !== -1 && v1 > v2) {
    return true;
  }
  if (symb.indexOf('<') !== -1 && v1 < v2) {
    return true;
  }
  return false;
}

function parseVersion() {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  version = version.split('.');
  version.length = 4;
  var ret = [];
  version.forEach(function (n) {
    n = n * 1;
    if (n) {
      ret.push(n >= 10 ? n : '0' + n);
    } else {
      ret.push('00');
    }
  });
  return parseInt(ret.join(''), 10);
}

/**
 * 判断targetMap中的属性是否被checkMap的属性包含，不是则抛出错误
 * @param {Object || Array} checkMap 
 * @param {Object} targetMap 
 * @returns {Boolean}
 */
var checkValue = exports.checkValue = function checkValue(check, targetMap) {
  if (isObj(check) || isArray(check)) {
    var checkArray = isObj(check) ? (0, _keys2.default)(check) : check;
    (0, _keys2.default)(targetMap).forEach(function (key) {
      if (!checkArray.includes(key)) {
        throw Error(key + '\u503C\u4E0D\u5408\u6CD5\uFF0C\u8BF7\u68C0\u67E5\uFF01');
      }
    });
  } else {
    // redLog('请传入数组或对象')
    return false;
  }
  return true;
};

/***/ }),

/***/ "z6Ez":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.open = open;

var _index = __webpack_require__("LOYP");

var _utils = __webpack_require__("iXbp");

var moduleName = 'cml';
var methodName = 'openPage';

function open(param) {
  /**
   * param: url, commonPatchParams, extraOptions
   */
  var url = param.url;
  var commonPatchParams = param.commonPatchParams;
  var closeCurrent = param.extraOptions && param.extraOptions.closeCurrent || false;
  url = (0, _utils.getUrlWithConnector)(url) + (0, _utils.queryStringify)(commonPatchParams);
  var openObj = (0, _utils.getOpenObj)(url);
  var urlOpen = openObj.weex ? openObj.weex : openObj.web;

  (0, _index.callNative)(moduleName, methodName, {
    url: urlOpen,
    closeCurrent: closeCurrent
  }, function () {});
}

open.prototype.moduleName = moduleName;
open.prototype.methodName = methodName;

/***/ }),

/***/ "zCSa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__ = __webpack_require__("gqlg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_f24e7d5a_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__ = __webpack_require__("mA8O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("3MLk")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f24e7d5a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_f24e7d5a_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_f24e7d5a_hasScoped_true_optionsId_1_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-picker-item/com/picker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f24e7d5a", Component.options)
  } else {
    hotAPI.reload("data-v-f24e7d5a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "zDda":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("tRKg");
var macrotask = __webpack_require__("eXs3").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("EJ14")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "zVv0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "c-scroller",
      staticClass: "scroll-container",
      style: _vm.wrapperStyle,
      attrs: { "data-evt-touchstart": "" },
      on: {
        touchstart: function($event) {
          $event.stopPropagation()
          return _vm.touchstartHandler($event)
        }
      }
    },
    [
      _c(
        "div",
        { ref: "inner", style: _vm.innerStyle, attrs: {} },
        [_vm._t("default", null, {})],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-053b33c2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "zW9a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "cml-buildin-page",
    { staticClass: " cml-base cml-page", attrs: { title: "c-dialog演示" } },
    [
      _c(
        "div",
        { staticClass: "container  cml-base cml-view", attrs: {} },
        [
          _c("c-header", {
            staticClass: " cml-base cml-c-header",
            attrs: { title: "c-dialog" }
          }),
          _vm._v(" "),
          _c("c-dialog", {
            staticClass: " cml-base cml-c-dialog",
            attrs: {
              show: _vm.show,
              type: _vm.type,
              title: _vm.title,
              mask: _vm.mask,
              content: _vm.content,
              "show-close": _vm.showClose,
              "icon-type": _vm.iconType,
              "icon-style": _vm.iconStyle,
              "data-evt-show": "",
              "data-evt-close": "",
              "data-evt-confirm": "",
              "data-evt-cancel": ""
            },
            on: {
              show: function($event) {
                _vm._cmlEventProxy($event, "changeShow")
              },
              close: function($event) {
                _vm._cmlEventProxy($event, "closeEvent")
              },
              confirm: function($event) {
                _vm._cmlEventProxy($event, "confirmEvent")
              },
              cancel: function($event) {
                _vm._cmlEventProxy($event, "cancelEvent")
              }
            }
          }),
          _vm._v(" "),
          _c("cml-buildin-button", {
            staticClass: "btn  cml-base cml-button",
            attrs: { text: "alert dialog", "data-evt-onclick": "" },
            on: {
              onclick: function($event) {
                _vm._cmlEventProxy($event, "showAlert")
              }
            }
          }),
          _vm._v(" "),
          _c("cml-buildin-button", {
            staticClass: "btn  cml-base cml-button",
            attrs: { text: "confirm dialog", "data-evt-onclick": "" },
            on: {
              onclick: function($event) {
                _vm._cmlEventProxy($event, "showConfirm")
              }
            }
          }),
          _vm._v(" "),
          _c("cml-buildin-button", {
            staticClass: "btn  cml-base cml-button",
            attrs: { text: "show close dialog", "data-evt-onclick": "" },
            on: {
              onclick: function($event) {
                _vm._cmlEventProxy($event, "showCloseIcon")
              }
            }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c4e213a2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "zXRo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_web_cml__ = __webpack_require__("6WKK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_web_cml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_web_cml__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_web_cml__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_web_cml__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f6ef295_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_web_cml__ = __webpack_require__("ImyB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("kdbS");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__("ENOI")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2f6ef295"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_filename_Users_xuguodong_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_chameleon_js_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_script_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_web_cml___default.a,
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f6ef295_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_web_cml__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f6ef295_hasScoped_true_optionsId_0_buble_transforms_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_vue_loader_lib_selector_type_template_index_0_nvm_versions_node_v8_11_1_lib_node_modules_chameleon_tool_node_modules_chameleon_loader_src_index_js_ref_11_1_c_refresh_web_cml__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/c-refresh/c-refresh.web.cml"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f6ef295", Component.options)
  } else {
    hotAPI.reload("data-v-2f6ef295", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},["RwSr"]);