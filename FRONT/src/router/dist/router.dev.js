"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _TodoApp = _interopRequireDefault(require("@/components/TodoApp"));

var _LoginPage = _interopRequireDefault(require("@/views/LoginPage"));

var _RegisterPage = _interopRequireDefault(require("@/views/RegisterPage"));

var _HistoryPage = _interopRequireDefault(require("@/views/HistoryPage"));

var _TestPage = _interopRequireDefault(require("@/views/TestPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/addFiles',
  name: 'addFiles',
  component: _TodoApp["default"],
  meta: {
    requiresAuth: true
  }
}, {
  path: '/login',
  name: 'login',
  component: _LoginPage["default"]
}, {
  path: '/register',
  name: 'register',
  component: _RegisterPage["default"]
}, {
  path: '/history',
  name: 'history',
  component: _HistoryPage["default"],
  meta: {
    requiresAuth: true
  }
}, {
  path: '/test',
  name: 'test',
  component: _TestPage["default"]
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(),
  routes: routes
});
router.beforeEach(function (to, from, next) {
  if (to.matched.some(function (record) {
    return record.meta.requiresAuth;
  })) {
    if (localStorage.getItem('token')) {
      next();
      return;
    }

    next('/login');
  } else {
    next();
  }
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=router.dev.js.map
