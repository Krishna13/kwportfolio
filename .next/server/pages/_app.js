(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(25);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(49);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var solid_esm = __webpack_require__(802);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/Header.js




 // function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }



function Example() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Popover, {
    className: "relative bg-white",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "max-w-7xl mx-auto px-7 sm:px-6 sticky",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex justify-start items-center lg:w-0 lg:flex-1",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: "#",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "sr-only",
              children: "Workflow"
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "h-8 w-auto sm:h-10",
              src: "/profile-pic.png",
              alt: ""
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-lg uppercase ml-2 sm:hidden",
            children: "Kaustubh Wankhede"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "-mr-2 -my-2 md:hidden",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Popover.Button, {
            className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "sr-only",
              children: "Open menu"
            }), /*#__PURE__*/jsx_runtime_.jsx(esm/* MenuIcon */.Oqj, {
              className: "h-6 w-6",
              "aria-hidden": "true"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Popover.Group, {
          as: "nav",
          className: "hidden md:flex space-x-10",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "text-base font-medium text-gray-500 hover:text-gray-900",
              children: "Home"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/#about",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "text-base font-medium text-gray-500 hover:text-gray-900",
              children: "About"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/#services",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "text-base font-medium text-gray-500 hover:text-gray-900",
              children: "Services"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/#pricing",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "text-base font-medium text-gray-500 hover:text-gray-900",
              children: "Pricing"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "hidden md:flex items-center justify-end md:flex-1 lg:w-0",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/#pricing",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600",
              children: "Get Started"
            })
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Transition, {
      as: external_react_.Fragment,
      enter: "duration-200 ease-out",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "duration-100 ease-in",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Popover.Panel, {
        focus: true,
        className: "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "pt-5 pb-6 px-5",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "h-8 w-auto",
                  src: "/profile-pic.png",
                  alt: "Workflow"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "-mr-2",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Popover.Button, {
                  className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "sr-only",
                    children: "Close menu"
                  }), /*#__PURE__*/jsx_runtime_.jsx(esm/* XIcon */.b0D, {
                    className: "h-6 w-6",
                    "aria-hidden": "true"
                  })]
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "mt-6",
              children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
                className: "grid gap-y-8"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "py-6 px-5 space-y-6",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "grid grid-cols-2 gap-y-4 gap-x-8",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "text-base font-medium text-gray-900 hover:text-gray-700",
                  children: "Home"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/#about",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "text-base font-medium text-gray-900 hover:text-gray-700",
                  children: "About"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/#services",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "text-base font-medium text-gray-900 hover:text-gray-700",
                  children: "Services"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/#pricing",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "text-base font-medium text-gray-900 hover:text-gray-700",
                  children: "Pricing"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/#pricing",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700",
                  children: "Get Started"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "mt-6 text-center text-base font-medium text-gray-500"
              })]
            })]
          })]
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/Footer.js



function Footer() {
  const year = new Date().getFullYear();
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "text-gray-600 body-font",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "max-w-7xl px-18 py-8 mx-auto flex items-center sm:flex-row flex-col",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "flex title-font font-medium items-center md:justify-start justify-center text-gray-900",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "ml-3 text-xl",
          children: "Kaustubh Wankhede"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4",
        children: ["\xA9 ", year, " Kaustubh Wankhede \u2014", /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://twitter.com/knyttneve",
          className: "text-gray-600 ml-1",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "Kwinfosys"
        })]
      })]
    })
  });
}

/* harmony default export */ const components_Footer = (Footer);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/profile-pic.png"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Example, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 25:
/***/ ((module) => {

"use strict";
module.exports = require("@headlessui/react");

/***/ }),

/***/ 325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [346,664], () => (__webpack_exec__(299)));
module.exports = __webpack_exports__;

})();