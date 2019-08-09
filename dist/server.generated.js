module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__,
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode,
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key),
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '/dist/'; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './node_modules/webpack/buildin/module.js':
      /*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, "loaded", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, "id", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?',
        );

        /***/
      },

    /***/ './server/devBundle.js':
      /*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _webpack = __webpack_require__(/*! webpack */ "webpack");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware");\n\nvar _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);\n\nvar _webpackConfigClient = __webpack_require__(/*! ./../webpack.config.client.js */ "./webpack.config.client.js");\n\nvar _webpackConfigClient2 = _interopRequireDefault(_webpackConfigClient);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar compile = function compile(app) {\n  if (true) {\n    var compiler = (0, _webpack2.default)(_webpackConfigClient2.default);\n    var middleware = (0, _webpackDevMiddleware2.default)(compiler, {\n      publicPath: _webpackConfigClient2.default.output.publicPath\n    });\n    app.use(middleware);\n    app.use((0, _webpackHotMiddleware2.default)(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \'compile\', \'/Users/deepak/work/personal/node/mern-setup/server/devBundle.js\');\n  reactHotLoader.register(_default, \'default\', \'/Users/deepak/work/personal/node/mern-setup/server/devBundle.js\');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?',
        );

        /***/
      },

    /***/ './server/index.js':
      /*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          "/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongodb = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nvar _template = __webpack_require__(/*! ../template */ \"./template.js\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nvar _devBundle = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n\nvar _devBundle2 = _interopRequireDefault(_devBundle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar app = (0, _express2.default)();\nif (true) {\n  _devBundle2.default.compile(app);\n}\n\nvar CURRENT_WORKING_DIR = process.cwd();\napp.use('/dist', _express2.default.static(_path2.default.join(CURRENT_WORKING_DIR, 'dist')));\n\napp.get('/', function (req, res) {\n  res.status(200).send((0, _template2.default)());\n});\n\nvar port = process.env.PORT || 3000;\napp.listen(port, function onStart(err) {\n  if (err) {\n    console.log(err);\n  }\n  console.info('Server started on port %s.', port);\n});\n\ntry {\n  var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSetup';\n  _mongodb.MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {\n    if (err) {\n      return;\n    }\n    console.log(\"Connected successfully to mongodb server\");\n    db.close();\n  });\n} catch (e) {\n  console.log(e);\n}\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, 'app', '/Users/deepak/work/personal/node/mern-setup/server/index.js');\n  reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', '/Users/deepak/work/personal/node/mern-setup/server/index.js');\n  reactHotLoader.register(port, 'port', '/Users/deepak/work/personal/node/mern-setup/server/index.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/index.js?",
        );

        /***/
      },

    /***/ './template.js':
      /*!*********************!*\
  !*** ./template.js ***!
  \*********************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '/* WEBPACK VAR INJECTION */(function(module) {\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar template = function template() {\n  return "<!DOCTYPE html>\\n    <html lang=\\"en\\">\\n      <head>\\n        <meta charset=\\"utf-8\\">\\n        <title>MERN Setup</title>\\n      </head>\\n      <body>\\n        <div id=\\"root\\"></div>\\n        <script type=\\"text/javascript\\" src=\\"/dist/bundle.js\\"></script>\\n      </body>\\n    </html>";\n};\n\nmodule.exports = template;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(template, "template", "/Users/deepak/work/personal/node/mern-setup/template.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "react-hot-loader")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))\n\n//# sourceURL=webpack:///./template.js?',
        );

        /***/
      },

    /***/ './webpack.config.client.js':
      /*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          "/* WEBPACK VAR INJECTION */(function(module) {\n\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar CURRENT_WORKING_DIR = process.cwd();\n\nvar config = {\n  name: 'browser',\n  mode: 'development',\n  devtool: 'eval-source-map',\n  entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/index.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    }\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', '/Users/deepak/work/personal/node/mern-setup/webpack.config.client.js');\n  reactHotLoader.register(config, 'config', '/Users/deepak/work/personal/node/mern-setup/webpack.config.client.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?",
        );

        /***/
      },

    /***/ 0:
      /*!*******************************!*\
  !*** multi ./server/index.js ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          'module.exports = __webpack_require__(/*! /Users/deepak/work/personal/node/mern-setup/server/index.js */"./server/index.js");\n\n\n//# sourceURL=webpack:///multi_./server/index.js?',
        );

        /***/
      },

    /***/ express:
      /*!**************************!*\
  !*** external "express" ***!
  \**************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("express");\n\n//# sourceURL=webpack:///external_%22express%22?',
        );

        /***/
      },

    /***/ mongodb:
      /*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("mongodb");\n\n//# sourceURL=webpack:///external_%22mongodb%22?',
        );

        /***/
      },

    /***/ path:
      /*!***********************!*\
  !*** external "path" ***!
  \***********************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("path");\n\n//# sourceURL=webpack:///external_%22path%22?',
        );

        /***/
      },

    /***/ 'react-hot-loader':
      /*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("react-hot-loader");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?',
        );

        /***/
      },

    /***/ webpack:
      /*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("webpack");\n\n//# sourceURL=webpack:///external_%22webpack%22?',
        );

        /***/
      },

    /***/ 'webpack-dev-middleware':
      /*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("webpack-dev-middleware");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?',
        );

        /***/
      },

    /***/ 'webpack-hot-middleware':
      /*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("webpack-hot-middleware");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?',
        );

        /***/
      },

    /******/
  },
);
