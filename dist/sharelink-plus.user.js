// ==UserScript==
// @name         网盘批量分享工具(支持蓝奏云,115网盘,123网盘,百度网盘,夸克网盘,阿里云盘,天翼网盘,迅雷网盘,中国移动网盘,UC网盘)
// @namespace    dreamlove
// @version      3.0.1
// @author       superBiuBiu
// @description  网盘文件批量分享,目前支持蓝奏云,115网盘,123网盘,百度网盘,夸克网盘,阿里云盘,天翼网盘,迅雷网盘,中国移动网盘,UC网盘~
// @iconURL      https://www.google.com/s2/favicons?domain=dreamlove.top
// @supportURL   https://github.com/superBiuBiuMan/sharelink/
// @match        https://pan.xunlei.com/**
// @match        https://drive.uc.cn/**
// @match        https://pan.baidu.com/disk/main*
// @match        https://pan.baidu.com/disk/synchronization*
// @match        https://cloud.189.cn/**
// @match        https://pan.quark.cn/**
// @match        https://www.aliyundrive.com/**
// @match        https://www.alipan.com/**
// @match        https://yun.139.com/**
// @match        https://115.com/**
// @match        https://lanzou.com/u
// @match        https://www.lanzou.com/u
// @match        https://www.lanzou.com/account.php
// @match        https://up.woozooo.com/u
// @match        https://up.woozooo.com/mydisk.php
// @match        https://pc.woozooo.com/u
// @match        https://pc.woozooo.com/mydisk.php
// @match        https://lanzou.com/**
// @match        https://www.lanzou.com/**
// @match        https://pan.lanzou.com/**
// @require      https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.mini.min.js
// @connect      webapi.115.com
// @connect      drive-pc.quark.cn
// @connect      api-pan.xunlei.com
// @connect      api.aliyundrive.com
// @connect      pc-api.uc.cn
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-body
// ==/UserScript==

(e=>{if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const t=document.createElement("style");t.textContent=e,document.head.append(t)})(' @charset "UTF-8";*,:before,:after{box-sizing:border-box;border-color:currentColor;border-style:solid;border-width:0}#app{width:100%;height:100%}html{box-sizing:border-box;width:100%;height:100%;line-height:1.5;-moz-tab-size:4;tab-size:4;text-size-adjust:100%}body{width:100%;height:100%;margin:0;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\u5FAE\u8F6F\u96C5\u9ED1,Arial,sans-serif;line-height:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizelegibility}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-collapse:collapse;border-color:inherit}button,input,optgroup,select,textarea{padding:0;margin:0;font-family:inherit;font-size:100%;line-height:inherit;color:inherit}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}::-webkit-file-upload-button{font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{padding:0;margin:0}legend{padding:0}ol,ul,menu{padding:0;margin:0;list-style:none}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,video{max-width:100%;height:auto}[hidden]{display:none}.dark{color-scheme:dark}label{font-weight:700}*,*:before,*:after{box-sizing:inherit}a:focus,a:active{outline:none}a,a:focus,a:hover{color:inherit;text-decoration:none;cursor:pointer}div:focus{outline:none}.clearfix:after{display:block;height:0;clear:both;font-size:0;visibility:hidden;content:" "} ');

(function (React, ReactDOM__default, XLSX) {
  'use strict';

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);
  const ReactDOM__default__namespace = /*#__PURE__*/_interopNamespaceDefault(ReactDOM__default);
  const XLSX__namespace = /*#__PURE__*/_interopNamespaceDefault(XLSX);

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
  var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactJsxRuntime_production_min;
  function requireReactJsxRuntime_production_min() {
    if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
    hasRequiredReactJsxRuntime_production_min = 1;
    var f = React, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    reactJsxRuntime_production_min.Fragment = l;
    reactJsxRuntime_production_min.jsx = q;
    reactJsxRuntime_production_min.jsxs = q;
    return reactJsxRuntime_production_min;
  }
  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    {
      jsxRuntime.exports = requireReactJsxRuntime_production_min();
    }
    return jsxRuntime.exports;
  }
  var jsxRuntimeExports = requireJsxRuntime();
  var client = {};
  var hasRequiredClient;
  function requireClient() {
    if (hasRequiredClient) return client;
    hasRequiredClient = 1;
    var m = ReactDOM__default;
    {
      client.createRoot = m.createRoot;
      client.hydrateRoot = m.hydrateRoot;
    }
    return client;
  }
  var clientExports = requireClient();
  const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(clientExports);
  const BaseCloudInfo = React.createContext({
    name: "1",
    type: "2"
  });
  const useBaseCloudInfo = () => {
    return React.useContext(BaseCloudInfo);
  };
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  function resolveProps(defaultProps2, props) {
    const output = {
      ...props
    };
    for (const key2 in defaultProps2) {
      if (Object.prototype.hasOwnProperty.call(defaultProps2, key2)) {
        const propName = key2;
        if (propName === "components" || propName === "slots") {
          output[propName] = {
            ...defaultProps2[propName],
            ...output[propName]
          };
        } else if (propName === "componentsProps" || propName === "slotProps") {
          const defaultSlotProps = defaultProps2[propName];
          const slotProps = props[propName];
          if (!slotProps) {
            output[propName] = defaultSlotProps || {};
          } else if (!defaultSlotProps) {
            output[propName] = slotProps;
          } else {
            output[propName] = {
              ...slotProps
            };
            for (const slotKey in defaultSlotProps) {
              if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
                const slotPropName = slotKey;
                output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
              }
            }
          }
        } else if (output[propName] === void 0) {
          output[propName] = defaultProps2[propName];
        }
      }
    }
    return output;
  }
  function composeClasses(slots, getUtilityClass, classes = void 0) {
    const output = {};
    for (const slotName in slots) {
      const slot = slots[slotName];
      let buffer = "";
      let start2 = true;
      for (let i = 0; i < slot.length; i += 1) {
        const value = slot[i];
        if (value) {
          buffer += (start2 === true ? "" : " ") + getUtilityClass(value);
          start2 = false;
          if (classes && classes[value]) {
            buffer += " " + classes[value];
          }
        }
      }
      output[slotName] = buffer;
    }
    return output;
  }
  function formatMuiErrorMessage(code, ...args) {
    const url = new URL(`https://mui.com/production-error/?code=${code}`);
    args.forEach((arg2) => url.searchParams.append("args[]", arg2));
    return `Minified MUI error #${code}; visit ${url} for the full message.`;
  }
  function clamp(val, min2 = Number.MIN_SAFE_INTEGER, max2 = Number.MAX_SAFE_INTEGER) {
    return Math.max(min2, Math.min(val, max2));
  }
  function clampWrapper(value, min2 = 0, max2 = 1) {
    return clamp(value, min2, max2);
  }
  function hexToRgb(color2) {
    color2 = color2.slice(1);
    const re = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g");
    let colors = color2.match(re);
    if (colors && colors[0].length === 1) {
      colors = colors.map((n) => n + n);
    }
    return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3;
  }).join(", ")})` : "";
  }
  function decomposeColor(color2) {
    if (color2.type) {
      return color2;
    }
    if (color2.charAt(0) === "#") {
      return decomposeColor(hexToRgb(color2));
    }
    const marker = color2.indexOf("(");
    const type = color2.substring(0, marker);
    if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(type)) {
      throw new Error(formatMuiErrorMessage(9, color2));
    }
    let values2 = color2.substring(marker + 1, color2.length - 1);
    let colorSpace;
    if (type === "color") {
      values2 = values2.split(" ");
      colorSpace = values2.shift();
      if (values2.length === 4 && values2[3].charAt(0) === "/") {
        values2[3] = values2[3].slice(1);
      }
      if (!["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(colorSpace)) {
        throw new Error(formatMuiErrorMessage(10, colorSpace));
      }
    } else {
      values2 = values2.split(",");
    }
    values2 = values2.map((value) => parseFloat(value));
    return {
      type,
      values: values2,
      colorSpace
    };
  }
  const colorChannel = (color2) => {
    const decomposedColor = decomposeColor(color2);
    return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.includes("hsl") && idx !== 0 ? `${val}%` : val).join(" ");
  };
  const private_safeColorChannel = (color2, warning) => {
    try {
      return colorChannel(color2);
    } catch (error) {
      return color2;
    }
  };
  function recomposeColor(color2) {
    const {
      type,
      colorSpace
    } = color2;
    let {
      values: values2
    } = color2;
    if (type.includes("rgb")) {
      values2 = values2.map((n, i) => i < 3 ? parseInt(n, 10) : n);
    } else if (type.includes("hsl")) {
      values2[1] = `${values2[1]}%`;
      values2[2] = `${values2[2]}%`;
    }
    if (type.includes("color")) {
      values2 = `${colorSpace} ${values2.join(" ")}`;
    } else {
      values2 = `${values2.join(", ")}`;
    }
    return `${type}(${values2})`;
  }
  function hslToRgb(color2) {
    color2 = decomposeColor(color2);
    const {
      values: values2
    } = color2;
    const h = values2[0];
    const s = values2[1] / 100;
    const l = values2[2] / 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    let type = "rgb";
    const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
    if (color2.type === "hsla") {
      type += "a";
      rgb.push(values2[3]);
    }
    return recomposeColor({
      type,
      values: rgb
    });
  }
  function getLuminance(color2) {
    color2 = decomposeColor(color2);
    let rgb = color2.type === "hsl" || color2.type === "hsla" ? decomposeColor(hslToRgb(color2)).values : color2.values;
    rgb = rgb.map((val) => {
      if (color2.type !== "color") {
        val /= 255;
      }
      return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    });
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  }
  function getContrastRatio(foreground, background) {
    const lumA = getLuminance(foreground);
    const lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  }
  function alpha(color2, value) {
    color2 = decomposeColor(color2);
    value = clampWrapper(value);
    if (color2.type === "rgb" || color2.type === "hsl") {
      color2.type += "a";
    }
    if (color2.type === "color") {
      color2.values[3] = `/${value}`;
    } else {
      color2.values[3] = value;
    }
    return recomposeColor(color2);
  }
  function private_safeAlpha(color2, value, warning) {
    try {
      return alpha(color2, value);
    } catch (error) {
      return color2;
    }
  }
  function darken(color2, coefficient) {
    color2 = decomposeColor(color2);
    coefficient = clampWrapper(coefficient);
    if (color2.type.includes("hsl")) {
      color2.values[2] *= 1 - coefficient;
    } else if (color2.type.includes("rgb") || color2.type.includes("color")) {
      for (let i = 0; i < 3; i += 1) {
        color2.values[i] *= 1 - coefficient;
      }
    }
    return recomposeColor(color2);
  }
  function private_safeDarken(color2, coefficient, warning) {
    try {
      return darken(color2, coefficient);
    } catch (error) {
      return color2;
    }
  }
  function lighten(color2, coefficient) {
    color2 = decomposeColor(color2);
    coefficient = clampWrapper(coefficient);
    if (color2.type.includes("hsl")) {
      color2.values[2] += (100 - color2.values[2]) * coefficient;
    } else if (color2.type.includes("rgb")) {
      for (let i = 0; i < 3; i += 1) {
        color2.values[i] += (255 - color2.values[i]) * coefficient;
      }
    } else if (color2.type.includes("color")) {
      for (let i = 0; i < 3; i += 1) {
        color2.values[i] += (1 - color2.values[i]) * coefficient;
      }
    }
    return recomposeColor(color2);
  }
  function private_safeLighten(color2, coefficient, warning) {
    try {
      return lighten(color2, coefficient);
    } catch (error) {
      return color2;
    }
  }
  function emphasize(color2, coefficient = 0.15) {
    return getLuminance(color2) > 0.5 ? darken(color2, coefficient) : lighten(color2, coefficient);
  }
  function private_safeEmphasize(color2, coefficient, warning) {
    try {
      return emphasize(color2, coefficient);
    } catch (error) {
      return color2;
    }
  }
  var reactIs$1 = { exports: {} };
  var reactIs_production = {};
  /**
   * @license React
   * react-is.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactIs_production;
  function requireReactIs_production() {
    if (hasRequiredReactIs_production) return reactIs_production;
    hasRequiredReactIs_production = 1;
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
    function typeOf2(object) {
      if ("object" === typeof object && null !== object) {
        var $$typeof = object.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            switch (object = object.type, object) {
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
              case REACT_SUSPENSE_LIST_TYPE:
              case REACT_VIEW_TRANSITION_TYPE:
                return object;
              default:
                switch (object = object && object.$$typeof, object) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                    return object;
                  case REACT_CONSUMER_TYPE:
                    return object;
                  default:
                    return $$typeof;
                }
            }
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
    }
    reactIs_production.ContextConsumer = REACT_CONSUMER_TYPE;
    reactIs_production.ContextProvider = REACT_CONTEXT_TYPE;
    reactIs_production.Element = REACT_ELEMENT_TYPE;
    reactIs_production.ForwardRef = REACT_FORWARD_REF_TYPE;
    reactIs_production.Fragment = REACT_FRAGMENT_TYPE;
    reactIs_production.Lazy = REACT_LAZY_TYPE;
    reactIs_production.Memo = REACT_MEMO_TYPE;
    reactIs_production.Portal = REACT_PORTAL_TYPE;
    reactIs_production.Profiler = REACT_PROFILER_TYPE;
    reactIs_production.StrictMode = REACT_STRICT_MODE_TYPE;
    reactIs_production.Suspense = REACT_SUSPENSE_TYPE;
    reactIs_production.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
    reactIs_production.isContextConsumer = function(object) {
      return typeOf2(object) === REACT_CONSUMER_TYPE;
    };
    reactIs_production.isContextProvider = function(object) {
      return typeOf2(object) === REACT_CONTEXT_TYPE;
    };
    reactIs_production.isElement = function(object) {
      return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    };
    reactIs_production.isForwardRef = function(object) {
      return typeOf2(object) === REACT_FORWARD_REF_TYPE;
    };
    reactIs_production.isFragment = function(object) {
      return typeOf2(object) === REACT_FRAGMENT_TYPE;
    };
    reactIs_production.isLazy = function(object) {
      return typeOf2(object) === REACT_LAZY_TYPE;
    };
    reactIs_production.isMemo = function(object) {
      return typeOf2(object) === REACT_MEMO_TYPE;
    };
    reactIs_production.isPortal = function(object) {
      return typeOf2(object) === REACT_PORTAL_TYPE;
    };
    reactIs_production.isProfiler = function(object) {
      return typeOf2(object) === REACT_PROFILER_TYPE;
    };
    reactIs_production.isStrictMode = function(object) {
      return typeOf2(object) === REACT_STRICT_MODE_TYPE;
    };
    reactIs_production.isSuspense = function(object) {
      return typeOf2(object) === REACT_SUSPENSE_TYPE;
    };
    reactIs_production.isSuspenseList = function(object) {
      return typeOf2(object) === REACT_SUSPENSE_LIST_TYPE;
    };
    reactIs_production.isValidElementType = function(type) {
      return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? true : false;
    };
    reactIs_production.typeOf = typeOf2;
    return reactIs_production;
  }
  var hasRequiredReactIs$1;
  function requireReactIs$1() {
    if (hasRequiredReactIs$1) return reactIs$1.exports;
    hasRequiredReactIs$1 = 1;
    {
      reactIs$1.exports = /* @__PURE__ */ requireReactIs_production();
    }
    return reactIs$1.exports;
  }
  var reactIsExports = /* @__PURE__ */ requireReactIs$1();
  function isPlainObject$1(item) {
    if (typeof item !== "object" || item === null) {
      return false;
    }
    const prototype = Object.getPrototypeOf(item);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
  }
  function deepClone$1(source) {
    if (/* @__PURE__ */ React__namespace.isValidElement(source) || reactIsExports.isValidElementType(source) || !isPlainObject$1(source)) {
      return source;
    }
    const output = {};
    Object.keys(source).forEach((key2) => {
      output[key2] = deepClone$1(source[key2]);
    });
    return output;
  }
  function deepmerge(target, source, options = {
    clone: true
  }) {
    const output = options.clone ? {
      ...target
    } : target;
    if (isPlainObject$1(target) && isPlainObject$1(source)) {
      Object.keys(source).forEach((key2) => {
        if (/* @__PURE__ */ React__namespace.isValidElement(source[key2]) || reactIsExports.isValidElementType(source[key2])) {
          output[key2] = source[key2];
        } else if (isPlainObject$1(source[key2]) && // Avoid prototype pollution
        Object.prototype.hasOwnProperty.call(target, key2) && isPlainObject$1(target[key2])) {
          output[key2] = deepmerge(target[key2], source[key2], options);
        } else if (options.clone) {
          output[key2] = isPlainObject$1(source[key2]) ? deepClone$1(source[key2]) : source[key2];
        } else {
          output[key2] = source[key2];
        }
      });
    }
    return output;
  }
  function capitalize(string) {
    if (typeof string !== "string") {
      throw new Error(formatMuiErrorMessage(7));
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function createChainedFunction(...funcs) {
    return funcs.reduce((acc, func) => {
      if (func == null) {
        return acc;
      }
      return function chainedFunction(...args) {
        acc.apply(this, args);
        func.apply(this, args);
      };
    }, () => {
    });
  }
  function debounce$1(func, wait = 166) {
    let timeout;
    function debounced(...args) {
      const later = () => {
        func.apply(this, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    }
    debounced.clear = () => {
      clearTimeout(timeout);
    };
    return debounced;
  }
  function isMuiElement(element, muiNames) {
    var _a, _b, _c;
    return /* @__PURE__ */ React__namespace.isValidElement(element) && muiNames.indexOf(
      // For server components `muiName` is avaialble in element.type._payload.value.muiName
      // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
      // eslint-disable-next-line no-underscore-dangle
      element.type.muiName ?? ((_c = (_b = (_a = element.type) == null ? void 0 : _a._payload) == null ? void 0 : _b.value) == null ? void 0 : _c.muiName)
    ) !== -1;
  }
  function ownerDocument(node2) {
    return node2 && node2.ownerDocument || document;
  }
  function ownerWindow(node2) {
    const doc = ownerDocument(node2);
    return doc.defaultView || window;
  }
  function setRef(ref, value) {
    if (typeof ref === "function") {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  }
  const useEnhancedEffect = typeof window !== "undefined" ? React__namespace.useLayoutEffect : React__namespace.useEffect;
  let globalId = 0;
  function useGlobalId(idOverride) {
    const [defaultId, setDefaultId] = React__namespace.useState(idOverride);
    const id = idOverride || defaultId;
    React__namespace.useEffect(() => {
      if (defaultId == null) {
        globalId += 1;
        setDefaultId(`mui-${globalId}`);
      }
    }, [defaultId]);
    return id;
  }
  const safeReact = {
    ...React__namespace
  };
  const maybeReactUseId = safeReact.useId;
  function useId(idOverride) {
    if (maybeReactUseId !== void 0) {
      const reactId = maybeReactUseId();
      return idOverride ?? reactId;
    }
    return useGlobalId(idOverride);
  }
  function useControlled({
    controlled,
    default: defaultProp,
    name,
    state = "value"
  }) {
    const {
      current: isControlled
    } = React__namespace.useRef(controlled !== void 0);
    const [valueState, setValue] = React__namespace.useState(defaultProp);
    const value = isControlled ? controlled : valueState;
    const setValueIfUncontrolled = React__namespace.useCallback((newValue) => {
      if (!isControlled) {
        setValue(newValue);
      }
    }, []);
    return [value, setValueIfUncontrolled];
  }
  function useEventCallback(fn2) {
    const ref = React__namespace.useRef(fn2);
    useEnhancedEffect(() => {
      ref.current = fn2;
    });
    return React__namespace.useRef((...args) => (
      // @ts-expect-error hide `this`
      (0, ref.current)(...args)
    )).current;
  }
  function useForkRef(...refs) {
    const cleanupRef = React__namespace.useRef(void 0);
    const refEffect = React__namespace.useCallback((instance) => {
      const cleanups = refs.map((ref) => {
        if (ref == null) {
          return null;
        }
        if (typeof ref === "function") {
          const refCallback = ref;
          const refCleanup = refCallback(instance);
          return typeof refCleanup === "function" ? refCleanup : () => {
            refCallback(null);
          };
        }
        ref.current = instance;
        return () => {
          ref.current = null;
        };
      });
      return () => {
        cleanups.forEach((refCleanup) => refCleanup == null ? void 0 : refCleanup());
      };
    }, refs);
    return React__namespace.useMemo(() => {
      if (refs.every((ref) => ref == null)) {
        return null;
      }
      return (value) => {
        if (cleanupRef.current) {
          cleanupRef.current();
          cleanupRef.current = void 0;
        }
        if (value != null) {
          cleanupRef.current = refEffect(value);
        }
      };
    }, refs);
  }
  const UNINITIALIZED = {};
  function useLazyRef(init, initArg) {
    const ref = React__namespace.useRef(UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
      ref.current = init(initArg);
    }
    return ref;
  }
  const EMPTY = [];
  function useOnMount(fn2) {
    React__namespace.useEffect(fn2, EMPTY);
  }
  class Timeout {
    constructor() {
      __publicField(this, "currentId", null);
      __publicField(this, "clear", () => {
        if (this.currentId !== null) {
          clearTimeout(this.currentId);
          this.currentId = null;
        }
      });
      __publicField(this, "disposeEffect", () => {
        return this.clear;
      });
    }
    static create() {
      return new Timeout();
    }
    /**
     * Executes `fn` after `delay`, clearing any previously scheduled call.
     */
    start(delay, fn2) {
      this.clear();
      this.currentId = setTimeout(() => {
        this.currentId = null;
        fn2();
      }, delay);
    }
  }
  function useTimeout() {
    const timeout = useLazyRef(Timeout.create).current;
    useOnMount(timeout.disposeEffect);
    return timeout;
  }
  function isFocusVisible(element) {
    try {
      return element.matches(":focus-visible");
    } catch (error) {
    }
    return false;
  }
  function getScrollbarSize(win = window) {
    const documentWidth = win.document.documentElement.clientWidth;
    return win.innerWidth - documentWidth;
  }
  const usePreviousProps = (value) => {
    const ref = React__namespace.useRef({});
    React__namespace.useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };
  const defaultGenerator = (componentName) => componentName;
  const createClassNameGenerator = () => {
    let generate = defaultGenerator;
    return {
      configure(generator) {
        generate = generator;
      },
      generate(componentName) {
        return generate(componentName);
      },
      reset() {
        generate = defaultGenerator;
      }
    };
  };
  const ClassNameGenerator = createClassNameGenerator();
  const globalStateClasses = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected"
  };
  function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
    const globalStateClass = globalStateClasses[slot];
    return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`;
  }
  function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
    const result = {};
    slots.forEach((slot) => {
      result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
    });
    return result;
  }
  function isHostComponent$1(element) {
    return typeof element === "string";
  }
  function appendOwnerState(elementType, otherProps, ownerState) {
    if (elementType === void 0 || isHostComponent$1(elementType)) {
      return otherProps;
    }
    return {
      ...otherProps,
      ownerState: {
        ...otherProps.ownerState,
        ...ownerState
      }
    };
  }
  function extractEventHandlers(object, excludeKeys = []) {
    if (object === void 0) {
      return {};
    }
    const result = {};
    Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
      result[prop] = object[prop];
    });
    return result;
  }
  function omitEventHandlers(object) {
    if (object === void 0) {
      return {};
    }
    const result = {};
    Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
      result[prop] = object[prop];
    });
    return result;
  }
  function mergeSlotProps$1(parameters) {
    const {
      getSlotProps,
      additionalProps,
      externalSlotProps,
      externalForwardedProps,
      className
    } = parameters;
    if (!getSlotProps) {
      const joinedClasses2 = clsx(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
      const mergedStyle2 = {
        ...additionalProps == null ? void 0 : additionalProps.style,
        ...externalForwardedProps == null ? void 0 : externalForwardedProps.style,
        ...externalSlotProps == null ? void 0 : externalSlotProps.style
      };
      const props2 = {
        ...additionalProps,
        ...externalForwardedProps,
        ...externalSlotProps
      };
      if (joinedClasses2.length > 0) {
        props2.className = joinedClasses2;
      }
      if (Object.keys(mergedStyle2).length > 0) {
        props2.style = mergedStyle2;
      }
      return {
        props: props2,
        internalRef: void 0
      };
    }
    const eventHandlers = extractEventHandlers({
      ...externalForwardedProps,
      ...externalSlotProps
    });
    const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
    const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
    const internalSlotProps = getSlotProps(eventHandlers);
    const joinedClasses = clsx(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle = {
      ...internalSlotProps == null ? void 0 : internalSlotProps.style,
      ...additionalProps == null ? void 0 : additionalProps.style,
      ...externalForwardedProps == null ? void 0 : externalForwardedProps.style,
      ...externalSlotProps == null ? void 0 : externalSlotProps.style
    };
    const props = {
      ...internalSlotProps,
      ...additionalProps,
      ...otherPropsWithoutEventHandlers,
      ...componentsPropsWithoutEventHandlers
    };
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: internalSlotProps.ref
    };
  }
  function resolveComponentProps(componentProps, ownerState, slotState) {
    if (typeof componentProps === "function") {
      return componentProps(ownerState, slotState);
    }
    return componentProps;
  }
  function useSlotProps(parameters) {
    var _a;
    const {
      elementType,
      externalSlotProps,
      ownerState,
      skipResolvingSlotProps = false,
      ...other
    } = parameters;
    const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
    const {
      props: mergedProps,
      internalRef
    } = mergeSlotProps$1({
      ...other,
      externalSlotProps: resolvedComponentsProps
    });
    const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_a = parameters.additionalProps) == null ? void 0 : _a.ref);
    const props = appendOwnerState(elementType, {
      ...mergedProps,
      ref
    }, ownerState);
    return props;
  }
  function getReactElementRef(element) {
    var _a;
    if (parseInt(React__namespace.version, 10) >= 19) {
      return ((_a = element == null ? void 0 : element.props) == null ? void 0 : _a.ref) || null;
    }
    return (element == null ? void 0 : element.ref) || null;
  }
  function merge(acc, item) {
    if (!item) {
      return acc;
    }
    return deepmerge(acc, item, {
      clone: false
      // No need to clone deep, it's way faster.
    });
  }
  function sortContainerQueries(theme, css2) {
    if (!theme.containerQueries) {
      return css2;
    }
    const sorted = Object.keys(css2).filter((key2) => key2.startsWith("@container")).sort((a, b) => {
      var _a, _b;
      const regex = /min-width:\s*([0-9.]+)/;
      return +(((_a = a.match(regex)) == null ? void 0 : _a[1]) || 0) - +(((_b = b.match(regex)) == null ? void 0 : _b[1]) || 0);
    });
    if (!sorted.length) {
      return css2;
    }
    return sorted.reduce((acc, key2) => {
      const value = css2[key2];
      delete acc[key2];
      acc[key2] = value;
      return acc;
    }, {
      ...css2
    });
  }
  function isCqShorthand(breakpointKeys, value) {
    return value === "@" || value.startsWith("@") && (breakpointKeys.some((key2) => value.startsWith(`@${key2}`)) || !!value.match(/^@\d/));
  }
  function getContainerQuery(theme, shorthand) {
    const matches = shorthand.match(/^@([^/]+)?\/?(.+)?$/);
    if (!matches) {
      return null;
    }
    const [, containerQuery, containerName] = matches;
    const value = Number.isNaN(+containerQuery) ? containerQuery || 0 : +containerQuery;
    return theme.containerQueries(containerName).up(value);
  }
  function cssContainerQueries(themeInput) {
    const toContainerQuery = (mediaQuery, name) => mediaQuery.replace("@media", name ? `@container ${name}` : "@container");
    function attachCq(node22, name) {
      node22.up = (...args) => toContainerQuery(themeInput.breakpoints.up(...args), name);
      node22.down = (...args) => toContainerQuery(themeInput.breakpoints.down(...args), name);
      node22.between = (...args) => toContainerQuery(themeInput.breakpoints.between(...args), name);
      node22.only = (...args) => toContainerQuery(themeInput.breakpoints.only(...args), name);
      node22.not = (...args) => {
        const result = toContainerQuery(themeInput.breakpoints.not(...args), name);
        if (result.includes("not all and")) {
          return result.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or");
        }
        return result;
      };
    }
    const node2 = {};
    const containerQueries = (name) => {
      attachCq(node2, name);
      return node2;
    };
    attachCq(containerQueries);
    return {
      ...themeInput,
      containerQueries
    };
  }
  const values$1 = {
    xs: 0,
    // phone
    sm: 600,
    // tablet
    md: 900,
    // small laptop
    lg: 1200,
    // desktop
    xl: 1536
    // large screen
  };
  const defaultBreakpoints = {
    // Sorted ASC by size. That's important.
    // It can't be configured as it's used statically for propTypes.
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (key2) => `@media (min-width:${values$1[key2]}px)`
  };
  const defaultContainerQueries = {
    containerQueries: (containerName) => ({
      up: (key2) => {
        let result = typeof key2 === "number" ? key2 : values$1[key2] || key2;
        if (typeof result === "number") {
          result = `${result}px`;
        }
        return containerName ? `@container ${containerName} (min-width:${result})` : `@container (min-width:${result})`;
      }
    })
  };
  function handleBreakpoints(props, propValue, styleFromPropValue) {
    const theme = props.theme || {};
    if (Array.isArray(propValue)) {
      const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
      return propValue.reduce((acc, item, index) => {
        acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
        return acc;
      }, {});
    }
    if (typeof propValue === "object") {
      const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
      return Object.keys(propValue).reduce((acc, breakpoint) => {
        if (isCqShorthand(themeBreakpoints.keys, breakpoint)) {
          const containerKey = getContainerQuery(theme.containerQueries ? theme : defaultContainerQueries, breakpoint);
          if (containerKey) {
            acc[containerKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
          }
        } else if (Object.keys(themeBreakpoints.values || values$1).includes(breakpoint)) {
          const mediaKey = themeBreakpoints.up(breakpoint);
          acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
        } else {
          const cssKey = breakpoint;
          acc[cssKey] = propValue[cssKey];
        }
        return acc;
      }, {});
    }
    const output = styleFromPropValue(propValue);
    return output;
  }
  function createEmptyBreakpointObject(breakpointsInput = {}) {
    var _a;
    const breakpointsInOrder = (_a = breakpointsInput.keys) == null ? void 0 : _a.reduce((acc, key2) => {
      const breakpointStyleKey = breakpointsInput.up(key2);
      acc[breakpointStyleKey] = {};
      return acc;
    }, {});
    return breakpointsInOrder || {};
  }
  function removeUnusedBreakpoints(breakpointKeys, style2) {
    return breakpointKeys.reduce((acc, key2) => {
      const breakpointOutput = acc[key2];
      const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
      if (isBreakpointUnused) {
        delete acc[key2];
      }
      return acc;
    }, style2);
  }
  function getPath(obj, path, checkVars = true) {
    if (!path || typeof path !== "string") {
      return null;
    }
    if (obj && obj.vars && checkVars) {
      const val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
      if (val != null) {
        return val;
      }
    }
    return path.split(".").reduce((acc, item) => {
      if (acc && acc[item] != null) {
        return acc[item];
      }
      return null;
    }, obj);
  }
  function getStyleValue$1(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
    let value;
    if (typeof themeMapping === "function") {
      value = themeMapping(propValueFinal);
    } else if (Array.isArray(themeMapping)) {
      value = themeMapping[propValueFinal] || userValue;
    } else {
      value = getPath(themeMapping, propValueFinal) || userValue;
    }
    if (transform) {
      value = transform(value, userValue, themeMapping);
    }
    return value;
  }
  function style$1(options) {
    const {
      prop,
      cssProperty = options.prop,
      themeKey,
      transform
    } = options;
    const fn2 = (props) => {
      if (props[prop] == null) {
        return null;
      }
      const propValue = props[prop];
      const theme = props.theme;
      const themeMapping = getPath(theme, themeKey) || {};
      const styleFromPropValue = (propValueFinal) => {
        let value = getStyleValue$1(themeMapping, transform, propValueFinal);
        if (propValueFinal === value && typeof propValueFinal === "string") {
          value = getStyleValue$1(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
        }
        if (cssProperty === false) {
          return value;
        }
        return {
          [cssProperty]: value
        };
      };
      return handleBreakpoints(props, propValue, styleFromPropValue);
    };
    fn2.propTypes = {};
    fn2.filterProps = [prop];
    return fn2;
  }
  function memoize$1(fn2) {
    const cache = {};
    return (arg2) => {
      if (cache[arg2] === void 0) {
        cache[arg2] = fn2(arg2);
      }
      return cache[arg2];
    };
  }
  const properties = {
    m: "margin",
    p: "padding"
  };
  const directions = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"]
  };
  const aliases = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  };
  const getCssProperties = memoize$1((prop) => {
    if (prop.length > 2) {
      if (aliases[prop]) {
        prop = aliases[prop];
      } else {
        return [prop];
      }
    }
    const [a, b] = prop.split("");
    const property = properties[a];
    const direction = directions[b] || "";
    return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
  });
  const marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
  const paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
  [...marginKeys, ...paddingKeys];
  function createUnaryUnit(theme, themeKey, defaultValue, propName) {
    const themeSpacing = getPath(theme, themeKey, true) ?? defaultValue;
    if (typeof themeSpacing === "number" || typeof themeSpacing === "string") {
      return (val) => {
        if (typeof val === "string") {
          return val;
        }
        if (typeof themeSpacing === "string") {
          if (themeSpacing.startsWith("var(") && val === 0) {
            return 0;
          }
          if (themeSpacing.startsWith("var(") && val === 1) {
            return themeSpacing;
          }
          return `calc(${val} * ${themeSpacing})`;
        }
        return themeSpacing * val;
      };
    }
    if (Array.isArray(themeSpacing)) {
      return (val) => {
        if (typeof val === "string") {
          return val;
        }
        const abs2 = Math.abs(val);
        const transformed = themeSpacing[abs2];
        if (val >= 0) {
          return transformed;
        }
        if (typeof transformed === "number") {
          return -transformed;
        }
        if (typeof transformed === "string" && transformed.startsWith("var(")) {
          return `calc(-1 * ${transformed})`;
        }
        return `-${transformed}`;
      };
    }
    if (typeof themeSpacing === "function") {
      return themeSpacing;
    }
    return () => void 0;
  }
  function createUnarySpacing(theme) {
    return createUnaryUnit(theme, "spacing", 8);
  }
  function getValue(transformer, propValue) {
    if (typeof propValue === "string" || propValue == null) {
      return propValue;
    }
    return transformer(propValue);
  }
  function getStyleFromPropValue(cssProperties, transformer) {
    return (propValue) => cssProperties.reduce((acc, cssProperty) => {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  }
  function resolveCssProperty(props, keys, prop, transformer) {
    if (!keys.includes(prop)) {
      return null;
    }
    const cssProperties = getCssProperties(prop);
    const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    const propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }
  function style(props, keys) {
    const transformer = createUnarySpacing(props.theme);
    return Object.keys(props).map((prop) => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
  }
  function margin(props) {
    return style(props, marginKeys);
  }
  margin.propTypes = {};
  margin.filterProps = marginKeys;
  function padding(props) {
    return style(props, paddingKeys);
  }
  padding.propTypes = {};
  padding.filterProps = paddingKeys;
  function compose(...styles2) {
    const handlers = styles2.reduce((acc, style2) => {
      style2.filterProps.forEach((prop) => {
        acc[prop] = style2;
      });
      return acc;
    }, {});
    const fn2 = (props) => {
      return Object.keys(props).reduce((acc, prop) => {
        if (handlers[prop]) {
          return merge(acc, handlers[prop](props));
        }
        return acc;
      }, {});
    };
    fn2.propTypes = {};
    fn2.filterProps = styles2.reduce((acc, style2) => acc.concat(style2.filterProps), []);
    return fn2;
  }
  function borderTransform(value) {
    if (typeof value !== "number") {
      return value;
    }
    return `${value}px solid`;
  }
  function createBorderStyle(prop, transform) {
    return style$1({
      prop,
      themeKey: "borders",
      transform
    });
  }
  const border = createBorderStyle("border", borderTransform);
  const borderTop = createBorderStyle("borderTop", borderTransform);
  const borderRight = createBorderStyle("borderRight", borderTransform);
  const borderBottom = createBorderStyle("borderBottom", borderTransform);
  const borderLeft = createBorderStyle("borderLeft", borderTransform);
  const borderColor = createBorderStyle("borderColor");
  const borderTopColor = createBorderStyle("borderTopColor");
  const borderRightColor = createBorderStyle("borderRightColor");
  const borderBottomColor = createBorderStyle("borderBottomColor");
  const borderLeftColor = createBorderStyle("borderLeftColor");
  const outline = createBorderStyle("outline", borderTransform);
  const outlineColor = createBorderStyle("outlineColor");
  const borderRadius = (props) => {
    if (props.borderRadius !== void 0 && props.borderRadius !== null) {
      const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4);
      const styleFromPropValue = (propValue) => ({
        borderRadius: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
    }
    return null;
  };
  borderRadius.propTypes = {};
  borderRadius.filterProps = ["borderRadius"];
  compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);
  const gap = (props) => {
    if (props.gap !== void 0 && props.gap !== null) {
      const transformer = createUnaryUnit(props.theme, "spacing", 8);
      const styleFromPropValue = (propValue) => ({
        gap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.gap, styleFromPropValue);
    }
    return null;
  };
  gap.propTypes = {};
  gap.filterProps = ["gap"];
  const columnGap = (props) => {
    if (props.columnGap !== void 0 && props.columnGap !== null) {
      const transformer = createUnaryUnit(props.theme, "spacing", 8);
      const styleFromPropValue = (propValue) => ({
        columnGap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.columnGap, styleFromPropValue);
    }
    return null;
  };
  columnGap.propTypes = {};
  columnGap.filterProps = ["columnGap"];
  const rowGap = (props) => {
    if (props.rowGap !== void 0 && props.rowGap !== null) {
      const transformer = createUnaryUnit(props.theme, "spacing", 8);
      const styleFromPropValue = (propValue) => ({
        rowGap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.rowGap, styleFromPropValue);
    }
    return null;
  };
  rowGap.propTypes = {};
  rowGap.filterProps = ["rowGap"];
  const gridColumn = style$1({
    prop: "gridColumn"
  });
  const gridRow = style$1({
    prop: "gridRow"
  });
  const gridAutoFlow = style$1({
    prop: "gridAutoFlow"
  });
  const gridAutoColumns = style$1({
    prop: "gridAutoColumns"
  });
  const gridAutoRows = style$1({
    prop: "gridAutoRows"
  });
  const gridTemplateColumns = style$1({
    prop: "gridTemplateColumns"
  });
  const gridTemplateRows = style$1({
    prop: "gridTemplateRows"
  });
  const gridTemplateAreas = style$1({
    prop: "gridTemplateAreas"
  });
  const gridArea = style$1({
    prop: "gridArea"
  });
  compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
  function paletteTransform(value, userValue) {
    if (userValue === "grey") {
      return userValue;
    }
    return value;
  }
  const color = style$1({
    prop: "color",
    themeKey: "palette",
    transform: paletteTransform
  });
  const bgcolor = style$1({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: paletteTransform
  });
  const backgroundColor = style$1({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: paletteTransform
  });
  compose(color, bgcolor, backgroundColor);
  function sizingTransform(value) {
    return value <= 1 && value !== 0 ? `${value * 100}%` : value;
  }
  const width = style$1({
    prop: "width",
    transform: sizingTransform
  });
  const maxWidth = (props) => {
    if (props.maxWidth !== void 0 && props.maxWidth !== null) {
      const styleFromPropValue = (propValue) => {
        var _a, _b, _c, _d, _e;
        const breakpoint = ((_c = (_b = (_a = props.theme) == null ? void 0 : _a.breakpoints) == null ? void 0 : _b.values) == null ? void 0 : _c[propValue]) || values$1[propValue];
        if (!breakpoint) {
          return {
            maxWidth: sizingTransform(propValue)
          };
        }
        if (((_e = (_d = props.theme) == null ? void 0 : _d.breakpoints) == null ? void 0 : _e.unit) !== "px") {
          return {
            maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
          };
        }
        return {
          maxWidth: breakpoint
        };
      };
      return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
    }
    return null;
  };
  maxWidth.filterProps = ["maxWidth"];
  const minWidth = style$1({
    prop: "minWidth",
    transform: sizingTransform
  });
  const height = style$1({
    prop: "height",
    transform: sizingTransform
  });
  const maxHeight = style$1({
    prop: "maxHeight",
    transform: sizingTransform
  });
  const minHeight = style$1({
    prop: "minHeight",
    transform: sizingTransform
  });
  style$1({
    prop: "size",
    cssProperty: "width",
    transform: sizingTransform
  });
  style$1({
    prop: "size",
    cssProperty: "height",
    transform: sizingTransform
  });
  const boxSizing = style$1({
    prop: "boxSizing"
  });
  compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
  const defaultSxConfig = {
    // borders
    border: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderTop: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderRight: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderBottom: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderLeft: {
      themeKey: "borders",
      transform: borderTransform
    },
    borderColor: {
      themeKey: "palette"
    },
    borderTopColor: {
      themeKey: "palette"
    },
    borderRightColor: {
      themeKey: "palette"
    },
    borderBottomColor: {
      themeKey: "palette"
    },
    borderLeftColor: {
      themeKey: "palette"
    },
    outline: {
      themeKey: "borders",
      transform: borderTransform
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: borderRadius
    },
    // palette
    color: {
      themeKey: "palette",
      transform: paletteTransform
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: paletteTransform
    },
    backgroundColor: {
      themeKey: "palette",
      transform: paletteTransform
    },
    // spacing
    p: {
      style: padding
    },
    pt: {
      style: padding
    },
    pr: {
      style: padding
    },
    pb: {
      style: padding
    },
    pl: {
      style: padding
    },
    px: {
      style: padding
    },
    py: {
      style: padding
    },
    padding: {
      style: padding
    },
    paddingTop: {
      style: padding
    },
    paddingRight: {
      style: padding
    },
    paddingBottom: {
      style: padding
    },
    paddingLeft: {
      style: padding
    },
    paddingX: {
      style: padding
    },
    paddingY: {
      style: padding
    },
    paddingInline: {
      style: padding
    },
    paddingInlineStart: {
      style: padding
    },
    paddingInlineEnd: {
      style: padding
    },
    paddingBlock: {
      style: padding
    },
    paddingBlockStart: {
      style: padding
    },
    paddingBlockEnd: {
      style: padding
    },
    m: {
      style: margin
    },
    mt: {
      style: margin
    },
    mr: {
      style: margin
    },
    mb: {
      style: margin
    },
    ml: {
      style: margin
    },
    mx: {
      style: margin
    },
    my: {
      style: margin
    },
    margin: {
      style: margin
    },
    marginTop: {
      style: margin
    },
    marginRight: {
      style: margin
    },
    marginBottom: {
      style: margin
    },
    marginLeft: {
      style: margin
    },
    marginX: {
      style: margin
    },
    marginY: {
      style: margin
    },
    marginInline: {
      style: margin
    },
    marginInlineStart: {
      style: margin
    },
    marginInlineEnd: {
      style: margin
    },
    marginBlock: {
      style: margin
    },
    marginBlockStart: {
      style: margin
    },
    marginBlockEnd: {
      style: margin
    },
    // display
    displayPrint: {
      cssProperty: false,
      transform: (value) => ({
        "@media print": {
          display: value
        }
      })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    // flexbox
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    // grid
    gap: {
      style: gap
    },
    rowGap: {
      style: rowGap
    },
    columnGap: {
      style: columnGap
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    // positions
    position: {},
    zIndex: {
      themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    // shadows
    boxShadow: {
      themeKey: "shadows"
    },
    // sizing
    width: {
      transform: sizingTransform
    },
    maxWidth: {
      style: maxWidth
    },
    minWidth: {
      transform: sizingTransform
    },
    height: {
      transform: sizingTransform
    },
    maxHeight: {
      transform: sizingTransform
    },
    minHeight: {
      transform: sizingTransform
    },
    boxSizing: {},
    // typography
    font: {
      themeKey: "font"
    },
    fontFamily: {
      themeKey: "typography"
    },
    fontSize: {
      themeKey: "typography"
    },
    fontStyle: {
      themeKey: "typography"
    },
    fontWeight: {
      themeKey: "typography"
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
      cssProperty: false,
      themeKey: "typography"
    }
  };
  function objectsHaveSameKeys(...objects) {
    const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
    const union = new Set(allKeys);
    return objects.every((object) => union.size === Object.keys(object).length);
  }
  function callIfFn(maybeFn, arg2) {
    return typeof maybeFn === "function" ? maybeFn(arg2) : maybeFn;
  }
  function unstable_createStyleFunctionSx() {
    function getThemeValue(prop, val, theme, config2) {
      const props = {
        [prop]: val,
        theme
      };
      const options = config2[prop];
      if (!options) {
        return {
          [prop]: val
        };
      }
      const {
        cssProperty = prop,
        themeKey,
        transform,
        style: style2
      } = options;
      if (val == null) {
        return null;
      }
      if (themeKey === "typography" && val === "inherit") {
        return {
          [prop]: val
        };
      }
      const themeMapping = getPath(theme, themeKey) || {};
      if (style2) {
        return style2(props);
      }
      const styleFromPropValue = (propValueFinal) => {
        let value = getStyleValue$1(themeMapping, transform, propValueFinal);
        if (propValueFinal === value && typeof propValueFinal === "string") {
          value = getStyleValue$1(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
        }
        if (cssProperty === false) {
          return value;
        }
        return {
          [cssProperty]: value
        };
      };
      return handleBreakpoints(props, val, styleFromPropValue);
    }
    function styleFunctionSx2(props) {
      const {
        sx,
        theme = {}
      } = props || {};
      if (!sx) {
        return null;
      }
      const config2 = theme.unstable_sxConfig ?? defaultSxConfig;
      function traverse(sxInput) {
        let sxObject = sxInput;
        if (typeof sxInput === "function") {
          sxObject = sxInput(theme);
        } else if (typeof sxInput !== "object") {
          return sxInput;
        }
        if (!sxObject) {
          return null;
        }
        const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
        const breakpointsKeys = Object.keys(emptyBreakpoints);
        let css2 = emptyBreakpoints;
        Object.keys(sxObject).forEach((styleKey) => {
          const value = callIfFn(sxObject[styleKey], theme);
          if (value !== null && value !== void 0) {
            if (typeof value === "object") {
              if (config2[styleKey]) {
                css2 = merge(css2, getThemeValue(styleKey, value, theme, config2));
              } else {
                const breakpointsValues = handleBreakpoints({
                  theme
                }, value, (x) => ({
                  [styleKey]: x
                }));
                if (objectsHaveSameKeys(breakpointsValues, value)) {
                  css2[styleKey] = styleFunctionSx2({
                    sx: value,
                    theme
                  });
                } else {
                  css2 = merge(css2, breakpointsValues);
                }
              }
            } else {
              css2 = merge(css2, getThemeValue(styleKey, value, theme, config2));
            }
          }
        });
        return sortContainerQueries(theme, removeUnusedBreakpoints(breakpointsKeys, css2));
      }
      return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
    }
    return styleFunctionSx2;
  }
  const styleFunctionSx = unstable_createStyleFunctionSx();
  styleFunctionSx.filterProps = ["sx"];
  const splitProps = (props) => {
    var _a;
    const result = {
      systemProps: {},
      otherProps: {}
    };
    const config2 = ((_a = props == null ? void 0 : props.theme) == null ? void 0 : _a.unstable_sxConfig) ?? defaultSxConfig;
    Object.keys(props).forEach((prop) => {
      if (config2[prop]) {
        result.systemProps[prop] = props[prop];
      } else {
        result.otherProps[prop] = props[prop];
      }
    });
    return result;
  };
  function extendSxProp$1(props) {
    const {
      sx: inSx,
      ...other
    } = props;
    const {
      systemProps,
      otherProps
    } = splitProps(other);
    let finalSx;
    if (Array.isArray(inSx)) {
      finalSx = [systemProps, ...inSx];
    } else if (typeof inSx === "function") {
      finalSx = (...args) => {
        const result = inSx(...args);
        if (!isPlainObject$1(result)) {
          return systemProps;
        }
        return {
          ...systemProps,
          ...result
        };
      };
    } else {
      finalSx = {
        ...systemProps,
        ...inSx
      };
    }
    return {
      ...otherProps,
      sx: finalSx
    };
  }
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  function sheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    }
    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
    return void 0;
  }
  function createStyleElement(options) {
    var tag = document.createElement("style");
    tag.setAttribute("data-emotion", options.key);
    if (options.nonce !== void 0) {
      tag.setAttribute("nonce", options.nonce);
    }
    tag.appendChild(document.createTextNode(""));
    tag.setAttribute("data-s", "");
    return tag;
  }
  var StyleSheet = /* @__PURE__ */ function() {
    function StyleSheet2(options) {
      var _this = this;
      this._insertTag = function(tag) {
        var before;
        if (_this.tags.length === 0) {
          if (_this.insertionPoint) {
            before = _this.insertionPoint.nextSibling;
          } else if (_this.prepend) {
            before = _this.container.firstChild;
          } else {
            before = _this.before;
          }
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }
        _this.container.insertBefore(tag, before);
        _this.tags.push(tag);
      };
      this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce;
      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.insertionPoint = options.insertionPoint;
      this.before = null;
    }
    var _proto = StyleSheet2.prototype;
    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
      if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }
      var tag = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);
        try {
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e) {
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }
      this.ctr++;
    };
    _proto.flush = function flush() {
      this.tags.forEach(function(tag) {
        var _tag$parentNode;
        return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };
    return StyleSheet2;
  }();
  var MS = "-ms-";
  var MOZ = "-moz-";
  var WEBKIT = "-webkit-";
  var COMMENT = "comm";
  var RULESET = "rule";
  var DECLARATION = "decl";
  var IMPORT = "@import";
  var KEYFRAMES = "@keyframes";
  var LAYER = "@layer";
  var abs = Math.abs;
  var from = String.fromCharCode;
  var assign = Object.assign;
  function hash$2(value, length2) {
    return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
  }
  function trim(value) {
    return value.trim();
  }
  function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
  }
  function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
  }
  function indexof(value, search) {
    return value.indexOf(search);
  }
  function charat(value, index) {
    return value.charCodeAt(index) | 0;
  }
  function substr(value, begin, end2) {
    return value.slice(begin, end2);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array) {
    return array.push(value), value;
  }
  function combine(array, callback) {
    return array.map(callback).join("");
  }
  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = "";
  function node(value, root, parent, type, props, children, length2) {
    return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
  }
  function copy$1(root, props) {
    return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10)
      column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10)
      column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice(begin, end2) {
    return substr(characters, begin, end2);
  }
  function token(type) {
    switch (type) {
      // \0 \t \n \r \s whitespace token
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      // ! + , / > @ ~ isolate token
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      // ; { } breakpoint token
      case 59:
      case 123:
      case 125:
        return 4;
      // : accompanied token
      case 58:
        return 3;
      // " ' ( [ opening delimit token
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      // ) ] closing delimit token
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type) {
    return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
  }
  function whitespace(type) {
    while (character = peek())
      if (character < 33)
        next();
      else
        break;
    return token(type) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index, count2) {
    while (--count2 && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
        break;
    return slice(index, caret() + (count2 < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type) {
    while (next())
      switch (character) {
        // ] ) " '
        case type:
          return position;
        // " '
        case 34:
        case 39:
          if (type !== 34 && type !== 39)
            delimiter(character);
          break;
        // (
        case 40:
          if (type === 41)
            delimiter(type);
          break;
        // \
        case 92:
          next();
          break;
      }
    return position;
  }
  function commenter(type, index) {
    while (next())
      if (type + character === 47 + 10)
        break;
      else if (type + character === 42 + 42 && peek() === 47)
        break;
    return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
  }
  function identifier(index) {
    while (!token(peek()))
      next();
    return slice(index, position);
  }
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset2 = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type = "";
    var props = rules;
    var children = rulesets;
    var reference2 = rule;
    var characters2 = type;
    while (scanning)
      switch (previous = character2, character2 = next()) {
        // (
        case 40:
          if (previous != 108 && charat(characters2, length2 - 1) == 58) {
            if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
              ampersand = -1;
            break;
          }
        // " ' [
        case 34:
        case 39:
        case 91:
          characters2 += delimit(character2);
          break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace(previous);
          break;
        // \
        case 92:
          characters2 += escaping(caret() - 1, 7);
          continue;
        // /
        case 47:
          switch (peek()) {
            case 42:
            case 47:
              append(comment(commenter(next(), caret()), root, parent), declarations);
              break;
            default:
              characters2 += "/";
          }
          break;
        // {
        case 123 * variable:
          points[index++] = strlen(characters2) * ampersand;
        // } ; \0
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            // \0 }
            case 0:
            case 125:
              scanning = 0;
            // ;
            case 59 + offset2:
              if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
              if (property > 0 && strlen(characters2) - length2)
                append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
              break;
            // @ ;
            case 59:
              characters2 += ";";
            // { rule/at-rule
            default:
              append(reference2 = ruleset(characters2, root, parent, index, offset2, rules, points, type, props = [], children = [], length2), rulesets);
              if (character2 === 123)
                if (offset2 === 0)
                  parse(characters2, root, reference2, reference2, props, rulesets, length2, points, children);
                else
                  switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                    // d l m s
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      parse(value, reference2, reference2, rule && append(ruleset(value, reference2, reference2, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                      break;
                    default:
                      parse(characters2, reference2, reference2, reference2, [""], children, 0, points, children);
                  }
          }
          index = offset2 = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
          break;
        // :
        case 58:
          length2 = 1 + strlen(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev() == 125)
              continue;
          }
          switch (characters2 += from(character2), character2 * variable) {
            // &
            case 38:
              ampersand = offset2 > 0 ? 1 : (characters2 += "\f", -1);
              break;
            // ,
            case 44:
              points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
              break;
            // @
            case 64:
              if (peek() === 45)
                characters2 += delimit(next());
              atrule = peek(), offset2 = length2 = strlen(type = characters2 += identifier(caret())), character2++;
              break;
            // -
            case 45:
              if (previous === 45 && strlen(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset(value, root, parent, index, offset2, rules, points, type, props, children, length2) {
    var post = offset2 - 1;
    var rule = offset2 === 0 ? rules : [""];
    var size = sizeof(rule);
    for (var i = 0, j = 0, k = 0; i < index; ++i)
      for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
        if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
          props[k++] = z;
    return node(value, root, parent, offset2 === 0 ? RULESET : type, props, children, length2);
  }
  function comment(value, root, parent) {
    return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
  }
  function declaration(value, root, parent, length2) {
    return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
  }
  function serialize(children, callback) {
    var output = "";
    var length2 = sizeof(children);
    for (var i = 0; i < length2; i++)
      output += callback(children[i], i, children, callback) || "";
    return output;
  }
  function stringify(element, index, children, callback) {
    switch (element.type) {
      case LAYER:
        if (element.children.length) break;
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize(element.children, callback) + "}";
      case RULESET:
        element.value = element.props.join(",");
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }
  function middleware(collection) {
    var length2 = sizeof(collection);
    return function(element, index, children, callback) {
      var output = "";
      for (var i = 0; i < length2; i++)
        output += collection[i](element, index, children, callback) || "";
      return output;
    };
  }
  function rulesheet(callback) {
    return function(element) {
      if (!element.root) {
        if (element = element.return)
          callback(element);
      }
    };
  }
  function memoize(fn2) {
    var cache = /* @__PURE__ */ Object.create(null);
    return function(arg2) {
      if (cache[arg2] === void 0) cache[arg2] = fn2(arg2);
      return cache[arg2];
    };
  }
  var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
    var previous = 0;
    var character2 = 0;
    while (true) {
      previous = character2;
      character2 = peek();
      if (previous === 38 && character2 === 12) {
        points[index] = 1;
      }
      if (token(character2)) {
        break;
      }
      next();
    }
    return slice(begin, position);
  };
  var toRules = function toRules2(parsed, points) {
    var index = -1;
    var character2 = 44;
    do {
      switch (token(character2)) {
        case 0:
          if (character2 === 38 && peek() === 12) {
            points[index] = 1;
          }
          parsed[index] += identifierWithPointTracking(position - 1, points, index);
          break;
        case 2:
          parsed[index] += delimit(character2);
          break;
        case 4:
          if (character2 === 44) {
            parsed[++index] = peek() === 58 ? "&\f" : "";
            points[index] = parsed[index].length;
            break;
          }
        // fallthrough
        default:
          parsed[index] += from(character2);
      }
    } while (character2 = next());
    return parsed;
  };
  var getRules = function getRules2(value, points) {
    return dealloc(toRules(alloc(value), points));
  };
  var fixedElements = /* @__PURE__ */ new WeakMap();
  var compat = function compat2(element) {
    if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
      return;
    }
    var value = element.value;
    var parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while (parent.type !== "rule") {
      parent = parent.parent;
      if (!parent) return;
    }
    if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
      return;
    }
    if (isImplicitRule) {
      return;
    }
    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;
    for (var i = 0, k = 0; i < rules.length; i++) {
      for (var j = 0; j < parentRules.length; j++, k++) {
        element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  };
  var removeLabel = function removeLabel2(element) {
    if (element.type === "decl") {
      var value = element.value;
      if (
        // charcode for l
        value.charCodeAt(0) === 108 && // charcode for b
        value.charCodeAt(2) === 98
      ) {
        element["return"] = "";
        element.value = "";
      }
    }
  };
  function prefix(value, length2) {
    switch (hash$2(value, length2)) {
      // color-adjust
      case 5103:
        return WEBKIT + "print-" + value + value;
      // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      // appearance, user-select, transform, hyphens, text-size-adjust
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      // flex, flex-direction
      case 6828:
      case 4268:
        return WEBKIT + value + MS + value + value;
      // order
      case 6165:
        return WEBKIT + value + MS + "flex-" + value + value;
      // align-items
      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
      // align-self
      case 5443:
        return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
      // align-content
      case 4675:
        return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
      // flex-shrink
      case 5548:
        return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
      // flex-basis
      case 5292:
        return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
      // flex-grow
      case 6060:
        return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
      // transition
      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
      // cursor
      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
      // background, background-image
      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
      // justify-content
      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
      // (margin|padding)-inline-(start|end)
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
      // (min|max)?(width|height|inline-size|block-size)
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (strlen(value) - 1 - length2 > 6) switch (charat(value, length2 + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (charat(value, length2 + 4) !== 45) break;
          // (f)ill-available, (f)it-content
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          // (s)tretch
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
        break;
      // position: sticky
      case 4949:
        if (charat(value, length2 + 1) !== 115) break;
      // display: (flex|inline-flex)
      case 6444:
        switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
          // stic(k)y
          case 107:
            return replace(value, ":", ":" + WEBKIT) + value;
          // (inline-)?fl(e)x
          case 101:
            return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        }
        break;
      // writing-mode
      case 5936:
        switch (charat(value, length2 + 11)) {
          // vertical-l(r)
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
          // vertical-r(l)
          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
          // horizontal(-)tb
          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
        }
        return WEBKIT + value + MS + value + value;
    }
    return value;
  }
  var prefixer = function prefixer2(element, index, children, callback) {
    if (element.length > -1) {
      if (!element["return"]) switch (element.type) {
        case DECLARATION:
          element["return"] = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy$1(element, {
            value: replace(element.value, "@", "@" + WEBKIT)
          })], callback);
        case RULESET:
          if (element.length) return combine(element.props, function(value) {
            switch (match(value, /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                return serialize([copy$1(element, {
                  props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                })], callback);
              // :placeholder
              case "::placeholder":
                return serialize([copy$1(element, {
                  props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                }), copy$1(element, {
                  props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                }), copy$1(element, {
                  props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                })], callback);
            }
            return "";
          });
      }
    }
  };
  var defaultStylisPlugins = [prefixer];
  var createCache = function createCache2(options) {
    var key2 = options.key;
    if (key2 === "css") {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(ssrStyles, function(node2) {
        var dataEmotionAttribute = node2.getAttribute("data-emotion");
        if (dataEmotionAttribute.indexOf(" ") === -1) {
          return;
        }
        document.head.appendChild(node2);
        node2.setAttribute("data-s", "");
      });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    var inserted = {};
    var container;
    var nodesToHydrate = [];
    {
      container = options.container || document.head;
      Array.prototype.forEach.call(
        // this means we will ignore elements which don't have a space in them which
        // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
        document.querySelectorAll('style[data-emotion^="' + key2 + ' "]'),
        function(node2) {
          var attrib = node2.getAttribute("data-emotion").split(" ");
          for (var i = 1; i < attrib.length; i++) {
            inserted[attrib[i]] = true;
          }
          nodesToHydrate.push(node2);
        }
      );
    }
    var _insert;
    var omnipresentPlugins = [compat, removeLabel];
    {
      var currentSheet;
      var finalizingPlugins = [stringify, rulesheet(function(rule) {
        currentSheet.insert(rule);
      })];
      var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
      var stylis = function stylis2(styles2) {
        return serialize(compile(styles2), serializer);
      };
      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;
        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    }
    var cache = {
      key: key2,
      sheet: new StyleSheet({
        key: key2,
        container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
        insertionPoint: options.insertionPoint
      }),
      nonce: options.nonce,
      inserted,
      registered: {},
      insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
  };
  var reactIs = { exports: {} };
  var reactIs_production_min = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactIs_production_min;
  function requireReactIs_production_min() {
    if (hasRequiredReactIs_production_min) return reactIs_production_min;
    hasRequiredReactIs_production_min = 1;
    var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r2 = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
    function z(a) {
      if ("object" === typeof a && null !== a) {
        var u = a.$$typeof;
        switch (u) {
          case c:
            switch (a = a.type, a) {
              case l:
              case m:
              case e:
              case g:
              case f:
              case p:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case n:
                  case t:
                  case r2:
                  case h:
                    return a;
                  default:
                    return u;
                }
            }
          case d:
            return u;
        }
      }
    }
    function A(a) {
      return z(a) === m;
    }
    reactIs_production_min.AsyncMode = l;
    reactIs_production_min.ConcurrentMode = m;
    reactIs_production_min.ContextConsumer = k;
    reactIs_production_min.ContextProvider = h;
    reactIs_production_min.Element = c;
    reactIs_production_min.ForwardRef = n;
    reactIs_production_min.Fragment = e;
    reactIs_production_min.Lazy = t;
    reactIs_production_min.Memo = r2;
    reactIs_production_min.Portal = d;
    reactIs_production_min.Profiler = g;
    reactIs_production_min.StrictMode = f;
    reactIs_production_min.Suspense = p;
    reactIs_production_min.isAsyncMode = function(a) {
      return A(a) || z(a) === l;
    };
    reactIs_production_min.isConcurrentMode = A;
    reactIs_production_min.isContextConsumer = function(a) {
      return z(a) === k;
    };
    reactIs_production_min.isContextProvider = function(a) {
      return z(a) === h;
    };
    reactIs_production_min.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === c;
    };
    reactIs_production_min.isForwardRef = function(a) {
      return z(a) === n;
    };
    reactIs_production_min.isFragment = function(a) {
      return z(a) === e;
    };
    reactIs_production_min.isLazy = function(a) {
      return z(a) === t;
    };
    reactIs_production_min.isMemo = function(a) {
      return z(a) === r2;
    };
    reactIs_production_min.isPortal = function(a) {
      return z(a) === d;
    };
    reactIs_production_min.isProfiler = function(a) {
      return z(a) === g;
    };
    reactIs_production_min.isStrictMode = function(a) {
      return z(a) === f;
    };
    reactIs_production_min.isSuspense = function(a) {
      return z(a) === p;
    };
    reactIs_production_min.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r2 || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
    };
    reactIs_production_min.typeOf = z;
    return reactIs_production_min;
  }
  var hasRequiredReactIs;
  function requireReactIs() {
    if (hasRequiredReactIs) return reactIs.exports;
    hasRequiredReactIs = 1;
    {
      reactIs.exports = requireReactIs_production_min();
    }
    return reactIs.exports;
  }
  var hoistNonReactStatics_cjs;
  var hasRequiredHoistNonReactStatics_cjs;
  function requireHoistNonReactStatics_cjs() {
    if (hasRequiredHoistNonReactStatics_cjs) return hoistNonReactStatics_cjs;
    hasRequiredHoistNonReactStatics_cjs = 1;
    var reactIs2 = requireReactIs();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs2.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs2.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs2.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key2 = keys[i];
          if (!KNOWN_STATICS[key2] && !(blacklist && blacklist[key2]) && !(sourceStatics && sourceStatics[key2]) && !(targetStatics && targetStatics[key2])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key2);
            try {
              defineProperty(targetComponent, key2, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    hoistNonReactStatics_cjs = hoistNonReactStatics;
    return hoistNonReactStatics_cjs;
  }
  requireHoistNonReactStatics_cjs();
  var isBrowser = true;
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = "";
    classNames.split(" ").forEach(function(className) {
      if (registered[className] !== void 0) {
        registeredStyles.push(registered[className] + ";");
      } else if (className) {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var registerStyles = function registerStyles2(cache, serialized, isStringTag2) {
    var className = cache.key + "-" + serialized.name;
    if (
      // we only need to add the styles to the registered cache if the
      // class name could be used further down
      // the tree but if it's a string tag, we know it won't
      // so we don't have to add it to registered cache.
      // this improves memory usage since we can avoid storing the whole style string
      (isStringTag2 === false || // we need to always store it if we're in compat mode and
      // in node since emotion-server relies on whether a style is in
      // the registered cache to know whether a style is global or not
      // also, note that this check will be dead code eliminated in the browser
      isBrowser === false) && cache.registered[className] === void 0
    ) {
      cache.registered[className] = serialized.styles;
    }
  };
  var insertStyles = function insertStyles2(cache, serialized, isStringTag2) {
    registerStyles(cache, serialized, isStringTag2);
    var className = cache.key + "-" + serialized.name;
    if (cache.inserted[serialized.name] === void 0) {
      var current = serialized;
      do {
        cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
        current = current.next;
      } while (current !== void 0);
    }
  };
  function murmur2(str) {
    var h = 0;
    var k, i = 0, len2 = str.length;
    for (; len2 >= 4; ++i, len2 -= 4) {
      k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
      k = /* Math.imul(k, m): */
      (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
      k ^= /* k >>> r: */
      k >>> 24;
      h = /* Math.imul(k, m): */
      (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    switch (len2) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 255) << 16;
      case 2:
        h ^= (str.charCodeAt(i + 1) & 255) << 8;
      case 1:
        h ^= str.charCodeAt(i) & 255;
        h = /* Math.imul(h, m): */
        (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }
  var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };
  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
  var isCustomProperty = function isCustomProperty2(property) {
    return property.charCodeAt(1) === 45;
  };
  var isProcessableValue = function isProcessableValue2(value) {
    return value != null && typeof value !== "boolean";
  };
  var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
  });
  var processStyleValue = function processStyleValue2(key2, value) {
    switch (key2) {
      case "animation":
      case "animationName": {
        if (typeof value === "string") {
          return value.replace(animationRegex, function(match2, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
    }
    if (unitlessKeys[key2] !== 1 && !isCustomProperty(key2) && typeof value === "number" && value !== 0) {
      return value + "px";
    }
    return value;
  };
  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return "";
    }
    var componentSelector = interpolation;
    if (componentSelector.__emotion_styles !== void 0) {
      return componentSelector;
    }
    switch (typeof interpolation) {
      case "boolean": {
        return "";
      }
      case "object": {
        var keyframes2 = interpolation;
        if (keyframes2.anim === 1) {
          cursor = {
            name: keyframes2.name,
            styles: keyframes2.styles,
            next: cursor
          };
          return keyframes2.name;
        }
        var serializedStyles = interpolation;
        if (serializedStyles.styles !== void 0) {
          var next2 = serializedStyles.next;
          if (next2 !== void 0) {
            while (next2 !== void 0) {
              cursor = {
                name: next2.name,
                styles: next2.styles,
                next: cursor
              };
              next2 = next2.next;
            }
          }
          var styles2 = serializedStyles.styles + ";";
          return styles2;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
      case "function": {
        if (mergedProps !== void 0) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }
        break;
      }
    }
    var asString = interpolation;
    if (registered == null) {
      return asString;
    }
    var cached = registered[asString];
    return cached !== void 0 ? cached : asString;
  }
  function createStringFromObject(mergedProps, registered, obj) {
    var string = "";
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      }
    } else {
      for (var key2 in obj) {
        var value = obj[key2];
        if (typeof value !== "object") {
          var asString = value;
          if (registered != null && registered[asString] !== void 0) {
            string += key2 + "{" + registered[asString] + "}";
          } else if (isProcessableValue(asString)) {
            string += processStyleName(key2) + ":" + processStyleValue(key2, asString) + ";";
          }
        } else {
          if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(key2) + ":" + processStyleValue(key2, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);
            switch (key2) {
              case "animation":
              case "animationName": {
                string += processStyleName(key2) + ":" + interpolated + ";";
                break;
              }
              default: {
                string += key2 + "{" + interpolated + "}";
              }
            }
          }
        }
      }
    }
    return string;
  }
  var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
  var cursor;
  function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
      return args[0];
    }
    var stringMode = true;
    var styles2 = "";
    cursor = void 0;
    var strings = args[0];
    if (strings == null || strings.raw === void 0) {
      stringMode = false;
      styles2 += handleInterpolation(mergedProps, registered, strings);
    } else {
      var asTemplateStringsArr = strings;
      styles2 += asTemplateStringsArr[0];
    }
    for (var i = 1; i < args.length; i++) {
      styles2 += handleInterpolation(mergedProps, registered, args[i]);
      if (stringMode) {
        var templateStringsArr = strings;
        styles2 += templateStringsArr[i];
      }
    }
    labelPattern.lastIndex = 0;
    var identifierName = "";
    var match2;
    while ((match2 = labelPattern.exec(styles2)) !== null) {
      identifierName += "-" + match2[1];
    }
    var name = murmur2(styles2) + identifierName;
    return {
      name,
      styles: styles2,
      next: cursor
    };
  }
  var syncFallback = function syncFallback2(create) {
    return create();
  };
  var useInsertionEffect = React__namespace["useInsertionEffect"] ? React__namespace["useInsertionEffect"] : false;
  var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
  var useInsertionEffectWithLayoutFallback = useInsertionEffect || React__namespace.useLayoutEffect;
  var EmotionCacheContext = /* @__PURE__ */ React__namespace.createContext(
    // we're doing this to avoid preconstruct's dead code elimination in this one case
    // because this module is primarily intended for the browser and node
    // but it's also required in react native and similar environments sometimes
    // and we could have a special build just for that
    // but this is much easier and the native packages
    // might use a different theme context in the future anyway
    typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
      key: "css"
    }) : null
  );
  var CacheProvider = EmotionCacheContext.Provider;
  var withEmotionCache = function withEmotionCache2(func) {
    return /* @__PURE__ */ React.forwardRef(function(props, ref) {
      var cache = React.useContext(EmotionCacheContext);
      return func(props, cache, ref);
    });
  };
  var ThemeContext$1 = /* @__PURE__ */ React__namespace.createContext({});
  var hasOwn = {}.hasOwnProperty;
  var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
  var createEmotionProps = function createEmotionProps2(type, props) {
    var newProps = {};
    for (var _key in props) {
      if (hasOwn.call(props, _key)) {
        newProps[_key] = props[_key];
      }
    }
    newProps[typePropName] = type;
    return newProps;
  };
  var Insertion$1 = function Insertion(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag2 = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag2);
    useInsertionEffectAlwaysWithSyncFallback(function() {
      return insertStyles(cache, serialized, isStringTag2);
    });
    return null;
  };
  var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
    var cssProp = props.css;
    if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
      cssProp = cache.registered[cssProp];
    }
    var WrappedComponent = props[typePropName];
    var registeredStyles = [cssProp];
    var className = "";
    if (typeof props.className === "string") {
      className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
      className = props.className + " ";
    }
    var serialized = serializeStyles(registeredStyles, void 0, React__namespace.useContext(ThemeContext$1));
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for (var _key2 in props) {
      if (hasOwn.call(props, _key2) && _key2 !== "css" && _key2 !== typePropName && true) {
        newProps[_key2] = props[_key2];
      }
    }
    newProps.className = className;
    if (ref) {
      newProps.ref = ref;
    }
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(Insertion$1, {
      cache,
      serialized,
      isStringTag: typeof WrappedComponent === "string"
    }), /* @__PURE__ */ React__namespace.createElement(WrappedComponent, newProps));
  });
  var Emotion$1 = Emotion;
  var jsx = function jsx2(type, props) {
    var args = arguments;
    if (props == null || !hasOwn.call(props, "css")) {
      return React__namespace.createElement.apply(void 0, args);
    }
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = Emotion$1;
    createElementArgArray[1] = createEmotionProps(type, props);
    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }
    return React__namespace.createElement.apply(null, createElementArgArray);
  };
  (function(_jsx) {
    var JSX;
    /* @__PURE__ */ (function(_JSX) {
    })(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
  })(jsx || (jsx = {}));
  var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
    var styles2 = props.styles;
    var serialized = serializeStyles([styles2], void 0, React__namespace.useContext(ThemeContext$1));
    var sheetRef = React__namespace.useRef();
    useInsertionEffectWithLayoutFallback(function() {
      var key2 = cache.key + "-global";
      var sheet = new cache.sheet.constructor({
        key: key2,
        nonce: cache.sheet.nonce,
        container: cache.sheet.container,
        speedy: cache.sheet.isSpeedy
      });
      var rehydrating = false;
      var node2 = document.querySelector('style[data-emotion="' + key2 + " " + serialized.name + '"]');
      if (cache.sheet.tags.length) {
        sheet.before = cache.sheet.tags[0];
      }
      if (node2 !== null) {
        rehydrating = true;
        node2.setAttribute("data-emotion", key2);
        sheet.hydrate([node2]);
      }
      sheetRef.current = [sheet, rehydrating];
      return function() {
        sheet.flush();
      };
    }, [cache]);
    useInsertionEffectWithLayoutFallback(function() {
      var sheetRefCurrent = sheetRef.current;
      var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
      if (rehydrating) {
        sheetRefCurrent[1] = false;
        return;
      }
      if (serialized.next !== void 0) {
        insertStyles(cache, serialized.next, true);
      }
      if (sheet.tags.length) {
        var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
        sheet.before = element;
        sheet.flush();
      }
      cache.insert("", serialized, sheet, false);
    }, [cache, serialized.name]);
    return null;
  });
  function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return serializeStyles(args);
  }
  function keyframes() {
    var insertable = css.apply(void 0, arguments);
    var name = "animation-" + insertable.name;
    return {
      name,
      styles: "@keyframes " + name + "{" + insertable.styles + "}",
      anim: 1,
      toString: function toString() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  }
  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
  var isPropValid = /* @__PURE__ */ memoize(
    function(prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    }
    /* Z+1 */
  );
  var testOmitPropsOnStringTag = isPropValid;
  var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key2) {
    return key2 !== "theme";
  };
  var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
    return typeof tag === "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
  };
  var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
    var shouldForwardProp2;
    if (options) {
      var optionsShouldForwardProp = options.shouldForwardProp;
      shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
        return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
      } : optionsShouldForwardProp;
    }
    if (typeof shouldForwardProp2 !== "function" && isReal) {
      shouldForwardProp2 = tag.__emotion_forwardProp;
    }
    return shouldForwardProp2;
  };
  var Insertion2 = function Insertion3(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag2 = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag2);
    useInsertionEffectAlwaysWithSyncFallback(function() {
      return insertStyles(cache, serialized, isStringTag2);
    });
    return null;
  };
  var createStyled$1 = function createStyled(tag, options) {
    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    var identifierName;
    var targetClassName;
    if (options !== void 0) {
      identifierName = options.label;
      targetClassName = options.target;
    }
    var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
    var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp("as");
    return function() {
      var args = arguments;
      var styles2 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
      if (identifierName !== void 0) {
        styles2.push("label:" + identifierName + ";");
      }
      if (args[0] == null || args[0].raw === void 0) {
        styles2.push.apply(styles2, args);
      } else {
        var templateStringsArr = args[0];
        styles2.push(templateStringsArr[0]);
        var len2 = args.length;
        var i = 1;
        for (; i < len2; i++) {
          styles2.push(args[i], templateStringsArr[i]);
        }
      }
      var Styled = withEmotionCache(function(props, cache, ref) {
        var FinalTag = shouldUseAs && props.as || baseTag;
        var className = "";
        var classInterpolations = [];
        var mergedProps = props;
        if (props.theme == null) {
          mergedProps = {};
          for (var key2 in props) {
            mergedProps[key2] = props[key2];
          }
          mergedProps.theme = React__namespace.useContext(ThemeContext$1);
        }
        if (typeof props.className === "string") {
          className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }
        var serialized = serializeStyles(styles2.concat(classInterpolations), cache.registered, mergedProps);
        className += cache.key + "-" + serialized.name;
        if (targetClassName !== void 0) {
          className += " " + targetClassName;
        }
        var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
        var newProps = {};
        for (var _key in props) {
          if (shouldUseAs && _key === "as") continue;
          if (finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }
        newProps.className = className;
        if (ref) {
          newProps.ref = ref;
        }
        return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(Insertion2, {
          cache,
          serialized,
          isStringTag: typeof FinalTag === "string"
        }), /* @__PURE__ */ React__namespace.createElement(FinalTag, newProps));
      });
      Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
      Styled.defaultProps = tag.defaultProps;
      Styled.__emotion_real = Styled;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_styles = styles2;
      Styled.__emotion_forwardProp = shouldForwardProp2;
      Object.defineProperty(Styled, "toString", {
        value: function value() {
          return "." + targetClassName;
        }
      });
      Styled.withComponent = function(nextTag, nextOptions) {
        var newStyled2 = createStyled(nextTag, _extends({}, options, nextOptions, {
          shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
        }));
        return newStyled2.apply(void 0, styles2);
      };
      return Styled;
    };
  };
  var tags = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    // SVG
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan"
  ];
  var newStyled = createStyled$1.bind(null);
  tags.forEach(function(tagName) {
    newStyled[tagName] = newStyled(tagName);
  });
  function isEmpty$2(obj) {
    return obj === void 0 || obj === null || Object.keys(obj).length === 0;
  }
  function GlobalStyles$2(props) {
    const {
      styles: styles2,
      defaultTheme: defaultTheme2 = {}
    } = props;
    const globalStyles = typeof styles2 === "function" ? (themeInput) => styles2(isEmpty$2(themeInput) ? defaultTheme2 : themeInput) : styles2;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Global, {
      styles: globalStyles
    });
  }
  function styled$1(tag, options) {
    const stylesFactory = newStyled(tag, options);
    return stylesFactory;
  }
  function internal_mutateStyles(tag, processor) {
    if (Array.isArray(tag.__emotion_styles)) {
      tag.__emotion_styles = processor(tag.__emotion_styles);
    }
  }
  const wrapper = [];
  function internal_serializeStyles(styles2) {
    wrapper[0] = styles2;
    return serializeStyles(wrapper);
  }
  const sortBreakpointsValues = (values2) => {
    const breakpointsAsArray = Object.keys(values2).map((key2) => ({
      key: key2,
      val: values2[key2]
    })) || [];
    breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
    return breakpointsAsArray.reduce((acc, obj) => {
      return {
        ...acc,
        [obj.key]: obj.val
      };
    }, {});
  };
  function createBreakpoints(breakpoints) {
    const {
      // The breakpoint **start** at this value.
      // For instance with the first breakpoint xs: [xs, sm).
      values: values2 = {
        xs: 0,
        // phone
        sm: 600,
        // tablet
        md: 900,
        // small laptop
        lg: 1200,
        // desktop
        xl: 1536
        // large screen
      },
      unit = "px",
      step = 5,
      ...other
    } = breakpoints;
    const sortedValues = sortBreakpointsValues(values2);
    const keys = Object.keys(sortedValues);
    function up(key2) {
      const value = typeof values2[key2] === "number" ? values2[key2] : key2;
      return `@media (min-width:${value}${unit})`;
    }
    function down(key2) {
      const value = typeof values2[key2] === "number" ? values2[key2] : key2;
      return `@media (max-width:${value - step / 100}${unit})`;
    }
    function between(start2, end2) {
      const endIndex = keys.indexOf(end2);
      return `@media (min-width:${typeof values2[start2] === "number" ? values2[start2] : start2}${unit}) and (max-width:${(endIndex !== -1 && typeof values2[keys[endIndex]] === "number" ? values2[keys[endIndex]] : end2) - step / 100}${unit})`;
    }
    function only(key2) {
      if (keys.indexOf(key2) + 1 < keys.length) {
        return between(key2, keys[keys.indexOf(key2) + 1]);
      }
      return up(key2);
    }
    function not(key2) {
      const keyIndex = keys.indexOf(key2);
      if (keyIndex === 0) {
        return up(keys[1]);
      }
      if (keyIndex === keys.length - 1) {
        return down(keys[keyIndex]);
      }
      return between(key2, keys[keys.indexOf(key2) + 1]).replace("@media", "@media not all and");
    }
    return {
      keys,
      values: sortedValues,
      up,
      down,
      between,
      only,
      not,
      unit,
      ...other
    };
  }
  const shape = {
    borderRadius: 4
  };
  function createSpacing(spacingInput = 8, transform = createUnarySpacing({
    spacing: spacingInput
  })) {
    if (spacingInput.mui) {
      return spacingInput;
    }
    const spacing = (...argsInput) => {
      const args = argsInput.length === 0 ? [1] : argsInput;
      return args.map((argument) => {
        const output = transform(argument);
        return typeof output === "number" ? `${output}px` : output;
      }).join(" ");
    };
    spacing.mui = true;
    return spacing;
  }
  function applyStyles$2(key2, styles2) {
    var _a;
    const theme = this;
    if (theme.vars) {
      if (!((_a = theme.colorSchemes) == null ? void 0 : _a[key2]) || typeof theme.getColorSchemeSelector !== "function") {
        return {};
      }
      let selector = theme.getColorSchemeSelector(key2);
      if (selector === "&") {
        return styles2;
      }
      if (selector.includes("data-") || selector.includes(".")) {
        selector = `*:where(${selector.replace(/\s*&$/, "")}) &`;
      }
      return {
        [selector]: styles2
      };
    }
    if (theme.palette.mode === key2) {
      return styles2;
    }
    return {};
  }
  function createTheme$1(options = {}, ...args) {
    const {
      breakpoints: breakpointsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      shape: shapeInput = {},
      ...other
    } = options;
    const breakpoints = createBreakpoints(breakpointsInput);
    const spacing = createSpacing(spacingInput);
    let muiTheme = deepmerge({
      breakpoints,
      direction: "ltr",
      components: {},
      // Inject component definitions.
      palette: {
        mode: "light",
        ...paletteInput
      },
      spacing,
      shape: {
        ...shape,
        ...shapeInput
      }
    }, other);
    muiTheme = cssContainerQueries(muiTheme);
    muiTheme.applyStyles = applyStyles$2;
    muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
    muiTheme.unstable_sxConfig = {
      ...defaultSxConfig,
      ...other == null ? void 0 : other.unstable_sxConfig
    };
    muiTheme.unstable_sx = function sx(props) {
      return styleFunctionSx({
        sx: props,
        theme: this
      });
    };
    return muiTheme;
  }
  function isObjectEmpty$2(obj) {
    return Object.keys(obj).length === 0;
  }
  function useTheme$3(defaultTheme2 = null) {
    const contextTheme = React__namespace.useContext(ThemeContext$1);
    return !contextTheme || isObjectEmpty$2(contextTheme) ? defaultTheme2 : contextTheme;
  }
  const systemDefaultTheme$1 = createTheme$1();
  function useTheme$2(defaultTheme2 = systemDefaultTheme$1) {
    return useTheme$3(defaultTheme2);
  }
  function GlobalStyles$1({
    styles: styles2,
    themeId,
    defaultTheme: defaultTheme2 = {}
  }) {
    const upperTheme = useTheme$2(defaultTheme2);
    const globalStyles = typeof styles2 === "function" ? styles2(themeId ? upperTheme[themeId] || upperTheme : upperTheme) : styles2;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles$2, {
      styles: globalStyles
    });
  }
  function createBox(options = {}) {
    const {
      themeId,
      defaultTheme: defaultTheme2,
      defaultClassName = "MuiBox-root",
      generateClassName
    } = options;
    const BoxRoot = styled$1("div", {
      shouldForwardProp: (prop) => prop !== "theme" && prop !== "sx" && prop !== "as"
    })(styleFunctionSx);
    const Box2 = /* @__PURE__ */ React__namespace.forwardRef(function Box3(inProps, ref) {
      const theme = useTheme$2(defaultTheme2);
      const {
        className,
        component = "div",
        ...other
      } = extendSxProp$1(inProps);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BoxRoot, {
        as: component,
        ref,
        className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
        theme: themeId ? theme[themeId] || theme : theme,
        ...other
      });
    });
    return Box2;
  }
  function preprocessStyles(input) {
    const {
      variants,
      ...style2
    } = input;
    const result = {
      variants,
      style: internal_serializeStyles(style2),
      isProcessed: true
    };
    if (result.style === style2) {
      return result;
    }
    if (variants) {
      variants.forEach((variant) => {
        if (typeof variant.style !== "function") {
          variant.style = internal_serializeStyles(variant.style);
        }
      });
    }
    return result;
  }
  const systemDefaultTheme = createTheme$1();
  function shouldForwardProp(prop) {
    return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
  }
  function defaultOverridesResolver(slot) {
    if (!slot) {
      return null;
    }
    return (_props, styles2) => styles2[slot];
  }
  function attachTheme(props, themeId, defaultTheme2) {
    props.theme = isObjectEmpty$1(props.theme) ? defaultTheme2 : props.theme[themeId] || props.theme;
  }
  function processStyle(props, style2) {
    const resolvedStyle = typeof style2 === "function" ? style2(props) : style2;
    if (Array.isArray(resolvedStyle)) {
      return resolvedStyle.flatMap((subStyle) => processStyle(props, subStyle));
    }
    if (Array.isArray(resolvedStyle == null ? void 0 : resolvedStyle.variants)) {
      let rootStyle;
      if (resolvedStyle.isProcessed) {
        rootStyle = resolvedStyle.style;
      } else {
        const {
          variants,
          ...otherStyles
        } = resolvedStyle;
        rootStyle = otherStyles;
      }
      return processStyleVariants(props, resolvedStyle.variants, [rootStyle]);
    }
    if (resolvedStyle == null ? void 0 : resolvedStyle.isProcessed) {
      return resolvedStyle.style;
    }
    return resolvedStyle;
  }
  function processStyleVariants(props, variants, results = []) {
    var _a;
    let mergedState;
    variantLoop: for (let i = 0; i < variants.length; i += 1) {
      const variant = variants[i];
      if (typeof variant.props === "function") {
        mergedState ?? (mergedState = {
          ...props,
          ...props.ownerState,
          ownerState: props.ownerState
        });
        if (!variant.props(mergedState)) {
          continue;
        }
      } else {
        for (const key2 in variant.props) {
          if (props[key2] !== variant.props[key2] && ((_a = props.ownerState) == null ? void 0 : _a[key2]) !== variant.props[key2]) {
            continue variantLoop;
          }
        }
      }
      if (typeof variant.style === "function") {
        mergedState ?? (mergedState = {
          ...props,
          ...props.ownerState,
          ownerState: props.ownerState
        });
        results.push(variant.style(mergedState));
      } else {
        results.push(variant.style);
      }
    }
    return results;
  }
  function createStyled2(input = {}) {
    const {
      themeId,
      defaultTheme: defaultTheme2 = systemDefaultTheme,
      rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
      slotShouldForwardProp: slotShouldForwardProp2 = shouldForwardProp
    } = input;
    function styleAttachTheme(props) {
      attachTheme(props, themeId, defaultTheme2);
    }
    const styled2 = (tag, inputOptions = {}) => {
      internal_mutateStyles(tag, (styles2) => styles2.filter((style2) => style2 !== styleFunctionSx));
      const {
        name: componentName,
        slot: componentSlot,
        skipVariantsResolver: inputSkipVariantsResolver,
        skipSx: inputSkipSx,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver: overridesResolver2 = defaultOverridesResolver(lowercaseFirstLetter(componentSlot)),
        ...options
      } = inputOptions;
      const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : (
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false
      );
      const skipSx = inputSkipSx || false;
      let shouldForwardPropOption = shouldForwardProp;
      if (componentSlot === "Root" || componentSlot === "root") {
        shouldForwardPropOption = rootShouldForwardProp2;
      } else if (componentSlot) {
        shouldForwardPropOption = slotShouldForwardProp2;
      } else if (isStringTag(tag)) {
        shouldForwardPropOption = void 0;
      }
      const defaultStyledResolver = styled$1(tag, {
        shouldForwardProp: shouldForwardPropOption,
        label: generateStyledLabel(),
        ...options
      });
      const transformStyle = (style2) => {
        if (typeof style2 === "function" && style2.__emotion_real !== style2) {
          return function styleFunctionProcessor(props) {
            return processStyle(props, style2);
          };
        }
        if (isPlainObject$1(style2)) {
          const serialized = preprocessStyles(style2);
          if (!serialized.variants) {
            return serialized.style;
          }
          return function styleObjectProcessor(props) {
            return processStyle(props, serialized);
          };
        }
        return style2;
      };
      const muiStyledResolver = (...expressionsInput) => {
        const expressionsHead = [];
        const expressionsBody = expressionsInput.map(transformStyle);
        const expressionsTail = [];
        expressionsHead.push(styleAttachTheme);
        if (componentName && overridesResolver2) {
          expressionsTail.push(function styleThemeOverrides(props) {
            var _a, _b;
            const theme = props.theme;
            const styleOverrides = (_b = (_a = theme.components) == null ? void 0 : _a[componentName]) == null ? void 0 : _b.styleOverrides;
            if (!styleOverrides) {
              return null;
            }
            const resolvedStyleOverrides = {};
            for (const slotKey in styleOverrides) {
              resolvedStyleOverrides[slotKey] = processStyle(props, styleOverrides[slotKey]);
            }
            return overridesResolver2(props, resolvedStyleOverrides);
          });
        }
        if (componentName && !skipVariantsResolver) {
          expressionsTail.push(function styleThemeVariants(props) {
            var _a, _b;
            const theme = props.theme;
            const themeVariants = (_b = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a[componentName]) == null ? void 0 : _b.variants;
            if (!themeVariants) {
              return null;
            }
            return processStyleVariants(props, themeVariants);
          });
        }
        if (!skipSx) {
          expressionsTail.push(styleFunctionSx);
        }
        if (Array.isArray(expressionsBody[0])) {
          const inputStrings = expressionsBody.shift();
          const placeholdersHead = new Array(expressionsHead.length).fill("");
          const placeholdersTail = new Array(expressionsTail.length).fill("");
          let outputStrings;
          {
            outputStrings = [...placeholdersHead, ...inputStrings, ...placeholdersTail];
            outputStrings.raw = [...placeholdersHead, ...inputStrings.raw, ...placeholdersTail];
          }
          expressionsHead.unshift(outputStrings);
        }
        const expressions = [...expressionsHead, ...expressionsBody, ...expressionsTail];
        const Component = defaultStyledResolver(...expressions);
        if (tag.muiName) {
          Component.muiName = tag.muiName;
        }
        return Component;
      };
      if (defaultStyledResolver.withConfig) {
        muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
      }
      return muiStyledResolver;
    };
    return styled2;
  }
  function generateStyledLabel(componentName, componentSlot) {
    let label;
    return label;
  }
  function isObjectEmpty$1(object) {
    for (const _ in object) {
      return false;
    }
    return true;
  }
  function isStringTag(tag) {
    return typeof tag === "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96;
  }
  function lowercaseFirstLetter(string) {
    if (!string) {
      return string;
    }
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
  const ThemeContext = /* @__PURE__ */ React__namespace.createContext(null);
  function useTheme$1() {
    const theme = React__namespace.useContext(ThemeContext);
    return theme;
  }
  const hasSymbol = typeof Symbol === "function" && Symbol.for;
  const nested = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";
  function mergeOuterLocalTheme(outerTheme, localTheme) {
    if (typeof localTheme === "function") {
      const mergedTheme = localTheme(outerTheme);
      return mergedTheme;
    }
    return {
      ...outerTheme,
      ...localTheme
    };
  }
  function ThemeProvider$2(props) {
    const {
      children,
      theme: localTheme
    } = props;
    const outerTheme = useTheme$1();
    const theme = React__namespace.useMemo(() => {
      const output = outerTheme === null ? {
        ...localTheme
      } : mergeOuterLocalTheme(outerTheme, localTheme);
      if (output != null) {
        output[nested] = outerTheme !== null;
      }
      return output;
    }, [localTheme, outerTheme]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, {
      value: theme,
      children
    });
  }
  const RtlContext = /* @__PURE__ */ React__namespace.createContext();
  function RtlProvider({
    value,
    ...props
  }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RtlContext.Provider, {
      value: value ?? true,
      ...props
    });
  }
  const useRtl = () => {
    const value = React__namespace.useContext(RtlContext);
    return value ?? false;
  };
  const PropsContext = /* @__PURE__ */ React__namespace.createContext(void 0);
  function DefaultPropsProvider({
    value,
    children
  }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PropsContext.Provider, {
      value,
      children
    });
  }
  function getThemeProps(params) {
    const {
      theme,
      name,
      props
    } = params;
    if (!theme || !theme.components || !theme.components[name]) {
      return props;
    }
    const config2 = theme.components[name];
    if (config2.defaultProps) {
      return resolveProps(config2.defaultProps, props);
    }
    if (!config2.styleOverrides && !config2.variants) {
      return resolveProps(config2, props);
    }
    return props;
  }
  function useDefaultProps$1({
    props,
    name
  }) {
    const ctx = React__namespace.useContext(PropsContext);
    return getThemeProps({
      props,
      name,
      theme: {
        components: ctx
      }
    });
  }
  const EMPTY_THEME = {};
  function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
    return React__namespace.useMemo(() => {
      const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
      if (typeof localTheme === "function") {
        const mergedTheme = localTheme(resolvedTheme);
        const result = themeId ? {
          ...upperTheme,
          [themeId]: mergedTheme
        } : mergedTheme;
        if (isPrivate) {
          return () => result;
        }
        return result;
      }
      return themeId ? {
        ...upperTheme,
        [themeId]: localTheme
      } : {
        ...upperTheme,
        ...localTheme
      };
    }, [themeId, upperTheme, localTheme, isPrivate]);
  }
  function ThemeProvider$1(props) {
    const {
      children,
      theme: localTheme,
      themeId
    } = props;
    const upperTheme = useTheme$3(EMPTY_THEME);
    const upperPrivateTheme = useTheme$1() || EMPTY_THEME;
    const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
    const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
    const rtlValue = (themeId ? engineTheme[themeId] : engineTheme).direction === "rtl";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider$2, {
      theme: privateTheme,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext$1.Provider, {
        value: engineTheme,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(RtlProvider, {
          value: rtlValue,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultPropsProvider, {
            value: themeId ? engineTheme[themeId].components : engineTheme.components,
            children
          })
        })
      })
    });
  }
  const arg = {
    theme: void 0
  };
  function unstable_memoTheme(styleFn) {
    let lastValue;
    let lastTheme;
    return function styleMemoized(props) {
      let value = lastValue;
      if (value === void 0 || props.theme !== lastTheme) {
        arg.theme = props.theme;
        value = preprocessStyles(styleFn(arg));
        lastValue = value;
        lastTheme = props.theme;
      }
      return value;
    };
  }
  const DEFAULT_MODE_STORAGE_KEY = "mode";
  const DEFAULT_COLOR_SCHEME_STORAGE_KEY = "color-scheme";
  const DEFAULT_ATTRIBUTE = "data-color-scheme";
  function InitColorSchemeScript(options) {
    const {
      defaultMode = "system",
      defaultLightColorScheme = "light",
      defaultDarkColorScheme = "dark",
      modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
      colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
      attribute: initialAttribute = DEFAULT_ATTRIBUTE,
      colorSchemeNode = "document.documentElement",
      nonce
    } = options || {};
    let setter = "";
    let attribute = initialAttribute;
    if (initialAttribute === "class") {
      attribute = ".%s";
    }
    if (initialAttribute === "data") {
      attribute = "[data-%s]";
    }
    if (attribute.startsWith(".")) {
      const selector = attribute.substring(1);
      setter += `${colorSchemeNode}.classList.remove('${selector}'.replace('%s', light), '${selector}'.replace('%s', dark));
      ${colorSchemeNode}.classList.add('${selector}'.replace('%s', colorScheme));`;
    }
    const matches = attribute.match(/\[([^\]]+)\]/);
    if (matches) {
      const [attr, value] = matches[1].split("=");
      if (!value) {
        setter += `${colorSchemeNode}.removeAttribute('${attr}'.replace('%s', light));
      ${colorSchemeNode}.removeAttribute('${attr}'.replace('%s', dark));`;
      }
      setter += `
      ${colorSchemeNode}.setAttribute('${attr}'.replace('%s', colorScheme), ${value ? `${value}.replace('%s', colorScheme)` : '""'});`;
    } else {
      setter += `${colorSchemeNode}.setAttribute('${attribute}', colorScheme);`;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("script", {
      suppressHydrationWarning: true,
      nonce: typeof window === "undefined" ? nonce : "",
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${modeStorageKey}') || '${defaultMode}';
  const dark = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
  const light = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${setter}
  }
} catch(e){}})();`
      }
    }, "mui-color-scheme-init");
  }
  function noop$4() {
  }
  const localStorageManager = ({
    key: key2,
    storageWindow
  }) => {
    if (!storageWindow && typeof window !== "undefined") {
      storageWindow = window;
    }
    return {
      get(defaultValue) {
        if (typeof window === "undefined") {
          return void 0;
        }
        if (!storageWindow) {
          return defaultValue;
        }
        let value;
        try {
          value = storageWindow.localStorage.getItem(key2);
        } catch {
        }
        return value || defaultValue;
      },
      set: (value) => {
        if (storageWindow) {
          try {
            storageWindow.localStorage.setItem(key2, value);
          } catch {
          }
        }
      },
      subscribe: (handler) => {
        if (!storageWindow) {
          return noop$4;
        }
        const listener = (event) => {
          const value = event.newValue;
          if (event.key === key2) {
            handler(value);
          }
        };
        storageWindow.addEventListener("storage", listener);
        return () => {
          storageWindow.removeEventListener("storage", listener);
        };
      }
    };
  };
  function noop$3() {
  }
  function getSystemMode(mode) {
    if (typeof window !== "undefined" && typeof window.matchMedia === "function" && mode === "system") {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      if (mql.matches) {
        return "dark";
      }
      return "light";
    }
    return void 0;
  }
  function processState(state, callback) {
    if (state.mode === "light" || state.mode === "system" && state.systemMode === "light") {
      return callback("light");
    }
    if (state.mode === "dark" || state.mode === "system" && state.systemMode === "dark") {
      return callback("dark");
    }
    return void 0;
  }
  function getColorScheme(state) {
    return processState(state, (mode) => {
      if (mode === "light") {
        return state.lightColorScheme;
      }
      if (mode === "dark") {
        return state.darkColorScheme;
      }
      return void 0;
    });
  }
  function useCurrentColorScheme(options) {
    const {
      defaultMode = "light",
      defaultLightColorScheme,
      defaultDarkColorScheme,
      supportedColorSchemes = [],
      modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
      colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
      storageWindow = typeof window === "undefined" ? void 0 : window,
      storageManager = localStorageManager,
      noSsr = false
    } = options;
    const joinedColorSchemes = supportedColorSchemes.join(",");
    const isMultiSchemes = supportedColorSchemes.length > 1;
    const modeStorage = React__namespace.useMemo(() => storageManager == null ? void 0 : storageManager({
      key: modeStorageKey,
      storageWindow
    }), [storageManager, modeStorageKey, storageWindow]);
    const lightStorage = React__namespace.useMemo(() => storageManager == null ? void 0 : storageManager({
      key: `${colorSchemeStorageKey}-light`,
      storageWindow
    }), [storageManager, colorSchemeStorageKey, storageWindow]);
    const darkStorage = React__namespace.useMemo(() => storageManager == null ? void 0 : storageManager({
      key: `${colorSchemeStorageKey}-dark`,
      storageWindow
    }), [storageManager, colorSchemeStorageKey, storageWindow]);
    const [state, setState] = React__namespace.useState(() => {
      const initialMode = (modeStorage == null ? void 0 : modeStorage.get(defaultMode)) || defaultMode;
      const lightColorScheme = (lightStorage == null ? void 0 : lightStorage.get(defaultLightColorScheme)) || defaultLightColorScheme;
      const darkColorScheme = (darkStorage == null ? void 0 : darkStorage.get(defaultDarkColorScheme)) || defaultDarkColorScheme;
      return {
        mode: initialMode,
        systemMode: getSystemMode(initialMode),
        lightColorScheme,
        darkColorScheme
      };
    });
    const [isClient, setIsClient] = React__namespace.useState(noSsr || !isMultiSchemes);
    React__namespace.useEffect(() => {
      setIsClient(true);
    }, []);
    const colorScheme = getColorScheme(state);
    const setMode = React__namespace.useCallback((mode) => {
      setState((currentState) => {
        if (mode === currentState.mode) {
          return currentState;
        }
        const newMode = mode ?? defaultMode;
        modeStorage == null ? void 0 : modeStorage.set(newMode);
        return {
          ...currentState,
          mode: newMode,
          systemMode: getSystemMode(newMode)
        };
      });
    }, [modeStorage, defaultMode]);
    const setColorScheme = React__namespace.useCallback((value) => {
      if (!value) {
        setState((currentState) => {
          lightStorage == null ? void 0 : lightStorage.set(defaultLightColorScheme);
          darkStorage == null ? void 0 : darkStorage.set(defaultDarkColorScheme);
          return {
            ...currentState,
            lightColorScheme: defaultLightColorScheme,
            darkColorScheme: defaultDarkColorScheme
          };
        });
      } else if (typeof value === "string") {
        if (value && !joinedColorSchemes.includes(value)) {
          console.error(`\`${value}\` does not exist in \`theme.colorSchemes\`.`);
        } else {
          setState((currentState) => {
            const newState = {
              ...currentState
            };
            processState(currentState, (mode) => {
              if (mode === "light") {
                lightStorage == null ? void 0 : lightStorage.set(value);
                newState.lightColorScheme = value;
              }
              if (mode === "dark") {
                darkStorage == null ? void 0 : darkStorage.set(value);
                newState.darkColorScheme = value;
              }
            });
            return newState;
          });
        }
      } else {
        setState((currentState) => {
          const newState = {
            ...currentState
          };
          const newLightColorScheme = value.light === null ? defaultLightColorScheme : value.light;
          const newDarkColorScheme = value.dark === null ? defaultDarkColorScheme : value.dark;
          if (newLightColorScheme) {
            if (!joinedColorSchemes.includes(newLightColorScheme)) {
              console.error(`\`${newLightColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
            } else {
              newState.lightColorScheme = newLightColorScheme;
              lightStorage == null ? void 0 : lightStorage.set(newLightColorScheme);
            }
          }
          if (newDarkColorScheme) {
            if (!joinedColorSchemes.includes(newDarkColorScheme)) {
              console.error(`\`${newDarkColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
            } else {
              newState.darkColorScheme = newDarkColorScheme;
              darkStorage == null ? void 0 : darkStorage.set(newDarkColorScheme);
            }
          }
          return newState;
        });
      }
    }, [joinedColorSchemes, lightStorage, darkStorage, defaultLightColorScheme, defaultDarkColorScheme]);
    const handleMediaQuery = React__namespace.useCallback((event) => {
      if (state.mode === "system") {
        setState((currentState) => {
          const systemMode = (event == null ? void 0 : event.matches) ? "dark" : "light";
          if (currentState.systemMode === systemMode) {
            return currentState;
          }
          return {
            ...currentState,
            systemMode
          };
        });
      }
    }, [state.mode]);
    const mediaListener = React__namespace.useRef(handleMediaQuery);
    mediaListener.current = handleMediaQuery;
    React__namespace.useEffect(() => {
      if (typeof window.matchMedia !== "function" || !isMultiSchemes) {
        return void 0;
      }
      const handler = (...args) => mediaListener.current(...args);
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      media.addListener(handler);
      handler(media);
      return () => {
        media.removeListener(handler);
      };
    }, [isMultiSchemes]);
    React__namespace.useEffect(() => {
      if (isMultiSchemes) {
        const unsubscribeMode = (modeStorage == null ? void 0 : modeStorage.subscribe((value) => {
          if (!value || ["light", "dark", "system"].includes(value)) {
            setMode(value || defaultMode);
          }
        })) || noop$3;
        const unsubscribeLight = (lightStorage == null ? void 0 : lightStorage.subscribe((value) => {
          if (!value || joinedColorSchemes.match(value)) {
            setColorScheme({
              light: value
            });
          }
        })) || noop$3;
        const unsubscribeDark = (darkStorage == null ? void 0 : darkStorage.subscribe((value) => {
          if (!value || joinedColorSchemes.match(value)) {
            setColorScheme({
              dark: value
            });
          }
        })) || noop$3;
        return () => {
          unsubscribeMode();
          unsubscribeLight();
          unsubscribeDark();
        };
      }
      return void 0;
    }, [setColorScheme, setMode, joinedColorSchemes, defaultMode, storageWindow, isMultiSchemes, modeStorage, lightStorage, darkStorage]);
    return {
      ...state,
      mode: isClient ? state.mode : void 0,
      systemMode: isClient ? state.systemMode : void 0,
      colorScheme: isClient ? colorScheme : void 0,
      setMode,
      setColorScheme
    };
  }
  const DISABLE_CSS_TRANSITION = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  function createCssVarsProvider(options) {
    const {
      themeId,
      /**
       * This `theme` object needs to follow a certain structure to
       * be used correctly by the finel `CssVarsProvider`. It should have a
       * `colorSchemes` key with the light and dark (and any other) palette.
       * It should also ideally have a vars object created using `prepareCssVars`.
       */
      theme: defaultTheme2 = {},
      modeStorageKey: defaultModeStorageKey = DEFAULT_MODE_STORAGE_KEY,
      colorSchemeStorageKey: defaultColorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
      disableTransitionOnChange: designSystemTransitionOnChange = false,
      defaultColorScheme,
      resolveTheme
    } = options;
    const defaultContext = {
      allColorSchemes: [],
      colorScheme: void 0,
      darkColorScheme: void 0,
      lightColorScheme: void 0,
      mode: void 0,
      setColorScheme: () => {
      },
      setMode: () => {
      },
      systemMode: void 0
    };
    const ColorSchemeContext = /* @__PURE__ */ React__namespace.createContext(void 0);
    const useColorScheme = () => React__namespace.useContext(ColorSchemeContext) || defaultContext;
    const defaultColorSchemes = {};
    const defaultComponents = {};
    function CssVarsProvider2(props) {
      var _a, _b, _c, _d;
      const {
        children,
        theme: themeProp,
        modeStorageKey = defaultModeStorageKey,
        colorSchemeStorageKey = defaultColorSchemeStorageKey,
        disableTransitionOnChange = designSystemTransitionOnChange,
        storageManager,
        storageWindow = typeof window === "undefined" ? void 0 : window,
        documentNode = typeof document === "undefined" ? void 0 : document,
        colorSchemeNode = typeof document === "undefined" ? void 0 : document.documentElement,
        disableNestedContext = false,
        disableStyleSheetGeneration = false,
        defaultMode: initialMode = "system",
        forceThemeRerender = false,
        noSsr
      } = props;
      const hasMounted = React__namespace.useRef(false);
      const upperTheme = useTheme$1();
      const ctx = React__namespace.useContext(ColorSchemeContext);
      const nested2 = !!ctx && !disableNestedContext;
      const initialTheme = React__namespace.useMemo(() => {
        if (themeProp) {
          return themeProp;
        }
        return typeof defaultTheme2 === "function" ? defaultTheme2() : defaultTheme2;
      }, [themeProp]);
      const scopedTheme = initialTheme[themeId];
      const restThemeProp = scopedTheme || initialTheme;
      const {
        colorSchemes = defaultColorSchemes,
        components = defaultComponents,
        cssVarPrefix
      } = restThemeProp;
      const joinedColorSchemes = Object.keys(colorSchemes).filter((k) => !!colorSchemes[k]).join(",");
      const allColorSchemes = React__namespace.useMemo(() => joinedColorSchemes.split(","), [joinedColorSchemes]);
      const defaultLightColorScheme2 = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.light;
      const defaultDarkColorScheme2 = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.dark;
      const defaultMode = colorSchemes[defaultLightColorScheme2] && colorSchemes[defaultDarkColorScheme2] ? initialMode : ((_b = (_a = colorSchemes[restThemeProp.defaultColorScheme]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode) || ((_c = restThemeProp.palette) == null ? void 0 : _c.mode);
      const {
        mode: stateMode,
        setMode,
        systemMode,
        lightColorScheme,
        darkColorScheme,
        colorScheme: stateColorScheme,
        setColorScheme
      } = useCurrentColorScheme({
        supportedColorSchemes: allColorSchemes,
        defaultLightColorScheme: defaultLightColorScheme2,
        defaultDarkColorScheme: defaultDarkColorScheme2,
        modeStorageKey,
        colorSchemeStorageKey,
        defaultMode,
        storageManager,
        storageWindow,
        noSsr
      });
      let mode = stateMode;
      let colorScheme = stateColorScheme;
      if (nested2) {
        mode = ctx.mode;
        colorScheme = ctx.colorScheme;
      }
      let calculatedColorScheme = colorScheme || restThemeProp.defaultColorScheme;
      if (restThemeProp.vars && !forceThemeRerender) {
        calculatedColorScheme = restThemeProp.defaultColorScheme;
      }
      const memoTheme2 = React__namespace.useMemo(() => {
        var _a2;
        const themeVars = ((_a2 = restThemeProp.generateThemeVars) == null ? void 0 : _a2.call(restThemeProp)) || restThemeProp.vars;
        const theme = {
          ...restThemeProp,
          components,
          colorSchemes,
          cssVarPrefix,
          vars: themeVars
        };
        if (typeof theme.generateSpacing === "function") {
          theme.spacing = theme.generateSpacing();
        }
        if (calculatedColorScheme) {
          const scheme = colorSchemes[calculatedColorScheme];
          if (scheme && typeof scheme === "object") {
            Object.keys(scheme).forEach((schemeKey) => {
              if (scheme[schemeKey] && typeof scheme[schemeKey] === "object") {
                theme[schemeKey] = {
                  ...theme[schemeKey],
                  ...scheme[schemeKey]
                };
              } else {
                theme[schemeKey] = scheme[schemeKey];
              }
            });
          }
        }
        return resolveTheme ? resolveTheme(theme) : theme;
      }, [restThemeProp, calculatedColorScheme, components, colorSchemes, cssVarPrefix]);
      const colorSchemeSelector = restThemeProp.colorSchemeSelector;
      useEnhancedEffect(() => {
        if (colorScheme && colorSchemeNode && colorSchemeSelector && colorSchemeSelector !== "media") {
          const selector = colorSchemeSelector;
          let rule = colorSchemeSelector;
          if (selector === "class") {
            rule = `.%s`;
          }
          if (selector === "data") {
            rule = `[data-%s]`;
          }
          if ((selector == null ? void 0 : selector.startsWith("data-")) && !selector.includes("%s")) {
            rule = `[${selector}="%s"]`;
          }
          if (rule.startsWith(".")) {
            colorSchemeNode.classList.remove(...allColorSchemes.map((scheme) => rule.substring(1).replace("%s", scheme)));
            colorSchemeNode.classList.add(rule.substring(1).replace("%s", colorScheme));
          } else {
            const matches = rule.replace("%s", colorScheme).match(/\[([^\]]+)\]/);
            if (matches) {
              const [attr, value] = matches[1].split("=");
              if (!value) {
                allColorSchemes.forEach((scheme) => {
                  colorSchemeNode.removeAttribute(attr.replace(colorScheme, scheme));
                });
              }
              colorSchemeNode.setAttribute(attr, value ? value.replace(/"|'/g, "") : "");
            } else {
              colorSchemeNode.setAttribute(rule, colorScheme);
            }
          }
        }
      }, [colorScheme, colorSchemeSelector, colorSchemeNode, allColorSchemes]);
      React__namespace.useEffect(() => {
        let timer2;
        if (disableTransitionOnChange && hasMounted.current && documentNode) {
          const css2 = documentNode.createElement("style");
          css2.appendChild(documentNode.createTextNode(DISABLE_CSS_TRANSITION));
          documentNode.head.appendChild(css2);
          (() => window.getComputedStyle(documentNode.body))();
          timer2 = setTimeout(() => {
            documentNode.head.removeChild(css2);
          }, 1);
        }
        return () => {
          clearTimeout(timer2);
        };
      }, [colorScheme, disableTransitionOnChange, documentNode]);
      React__namespace.useEffect(() => {
        hasMounted.current = true;
        return () => {
          hasMounted.current = false;
        };
      }, []);
      const contextValue = React__namespace.useMemo(() => ({
        allColorSchemes,
        colorScheme,
        darkColorScheme,
        lightColorScheme,
        mode,
        setColorScheme,
        setMode,
        systemMode
      }), [allColorSchemes, colorScheme, darkColorScheme, lightColorScheme, mode, setColorScheme, setMode, systemMode, memoTheme2.colorSchemeSelector]);
      let shouldGenerateStyleSheet = true;
      if (disableStyleSheetGeneration || restThemeProp.cssVariables === false || nested2 && (upperTheme == null ? void 0 : upperTheme.cssVarPrefix) === cssVarPrefix) {
        shouldGenerateStyleSheet = false;
      }
      const element = /* @__PURE__ */ jsxRuntimeExports.jsxs(React__namespace.Fragment, {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider$1, {
          themeId: scopedTheme ? themeId : void 0,
          theme: memoTheme2,
          children
        }), shouldGenerateStyleSheet && /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles$2, {
          styles: ((_d = memoTheme2.generateStyleSheets) == null ? void 0 : _d.call(memoTheme2)) || []
        })]
      });
      if (nested2) {
        return element;
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ColorSchemeContext.Provider, {
        value: contextValue,
        children: element
      });
    }
    const defaultLightColorScheme = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.light;
    const defaultDarkColorScheme = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.dark;
    const getInitColorSchemeScript = (params) => InitColorSchemeScript({
      colorSchemeStorageKey: defaultColorSchemeStorageKey,
      defaultLightColorScheme,
      defaultDarkColorScheme,
      modeStorageKey: defaultModeStorageKey,
      ...params
    });
    return {
      CssVarsProvider: CssVarsProvider2,
      useColorScheme,
      getInitColorSchemeScript
    };
  }
  function createGetCssVar$1(prefix2 = "") {
    function appendVar(...vars) {
      if (!vars.length) {
        return "";
      }
      const value = vars[0];
      if (typeof value === "string" && !value.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)) {
        return `, var(--${prefix2 ? `${prefix2}-` : ""}${value}${appendVar(...vars.slice(1))})`;
      }
      return `, ${value}`;
    }
    const getCssVar = (field, ...fallbacks) => {
      return `var(--${prefix2 ? `${prefix2}-` : ""}${field}${appendVar(...fallbacks)})`;
    };
    return getCssVar;
  }
  const assignNestedKeys = (obj, keys, value, arrayKeys = []) => {
    let temp = obj;
    keys.forEach((k, index) => {
      if (index === keys.length - 1) {
        if (Array.isArray(temp)) {
          temp[Number(k)] = value;
        } else if (temp && typeof temp === "object") {
          temp[k] = value;
        }
      } else if (temp && typeof temp === "object") {
        if (!temp[k]) {
          temp[k] = arrayKeys.includes(k) ? [] : {};
        }
        temp = temp[k];
      }
    });
  };
  const walkObjectDeep = (obj, callback, shouldSkipPaths) => {
    function recurse(object, parentKeys = [], arrayKeys = []) {
      Object.entries(object).forEach(([key2, value]) => {
        if (!shouldSkipPaths || shouldSkipPaths && !shouldSkipPaths([...parentKeys, key2])) {
          if (value !== void 0 && value !== null) {
            if (typeof value === "object" && Object.keys(value).length > 0) {
              recurse(value, [...parentKeys, key2], Array.isArray(value) ? [...arrayKeys, key2] : arrayKeys);
            } else {
              callback([...parentKeys, key2], value, arrayKeys);
            }
          }
        }
      });
    }
    recurse(obj);
  };
  const getCssValue = (keys, value) => {
    if (typeof value === "number") {
      if (["lineHeight", "fontWeight", "opacity", "zIndex"].some((prop) => keys.includes(prop))) {
        return value;
      }
      const lastKey = keys[keys.length - 1];
      if (lastKey.toLowerCase().includes("opacity")) {
        return value;
      }
      return `${value}px`;
    }
    return value;
  };
  function cssVarsParser(theme, options) {
    const {
      prefix: prefix2,
      shouldSkipGeneratingVar: shouldSkipGeneratingVar2
    } = options || {};
    const css2 = {};
    const vars = {};
    const varsWithDefaults = {};
    walkObjectDeep(
      theme,
      (keys, value, arrayKeys) => {
        if (typeof value === "string" || typeof value === "number") {
          if (!shouldSkipGeneratingVar2 || !shouldSkipGeneratingVar2(keys, value)) {
            const cssVar = `--${prefix2 ? `${prefix2}-` : ""}${keys.join("-")}`;
            const resolvedValue = getCssValue(keys, value);
            Object.assign(css2, {
              [cssVar]: resolvedValue
            });
            assignNestedKeys(vars, keys, `var(${cssVar})`, arrayKeys);
            assignNestedKeys(varsWithDefaults, keys, `var(${cssVar}, ${resolvedValue})`, arrayKeys);
          }
        }
      },
      (keys) => keys[0] === "vars"
      // skip 'vars/*' paths
    );
    return {
      css: css2,
      vars,
      varsWithDefaults
    };
  }
  function prepareCssVars(theme, parserConfig = {}) {
    const {
      getSelector = defaultGetSelector2,
      disableCssColorScheme,
      colorSchemeSelector: selector
    } = parserConfig;
    const {
      colorSchemes = {},
      components,
      defaultColorScheme = "light",
      ...otherTheme
    } = theme;
    const {
      vars: rootVars,
      css: rootCss,
      varsWithDefaults: rootVarsWithDefaults
    } = cssVarsParser(otherTheme, parserConfig);
    let themeVars = rootVarsWithDefaults;
    const colorSchemesMap = {};
    const {
      [defaultColorScheme]: defaultScheme,
      ...otherColorSchemes
    } = colorSchemes;
    Object.entries(otherColorSchemes || {}).forEach(([key2, scheme]) => {
      const {
        vars,
        css: css2,
        varsWithDefaults
      } = cssVarsParser(scheme, parserConfig);
      themeVars = deepmerge(themeVars, varsWithDefaults);
      colorSchemesMap[key2] = {
        css: css2,
        vars
      };
    });
    if (defaultScheme) {
      const {
        css: css2,
        vars,
        varsWithDefaults
      } = cssVarsParser(defaultScheme, parserConfig);
      themeVars = deepmerge(themeVars, varsWithDefaults);
      colorSchemesMap[defaultColorScheme] = {
        css: css2,
        vars
      };
    }
    function defaultGetSelector2(colorScheme, cssObject) {
      var _a, _b;
      let rule = selector;
      if (selector === "class") {
        rule = ".%s";
      }
      if (selector === "data") {
        rule = "[data-%s]";
      }
      if ((selector == null ? void 0 : selector.startsWith("data-")) && !selector.includes("%s")) {
        rule = `[${selector}="%s"]`;
      }
      if (colorScheme) {
        if (rule === "media") {
          if (theme.defaultColorScheme === colorScheme) {
            return ":root";
          }
          const mode = ((_b = (_a = colorSchemes[colorScheme]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode) || colorScheme;
          return {
            [`@media (prefers-color-scheme: ${mode})`]: {
              ":root": cssObject
            }
          };
        }
        if (rule) {
          if (theme.defaultColorScheme === colorScheme) {
            return `:root, ${rule.replace("%s", String(colorScheme))}`;
          }
          return rule.replace("%s", String(colorScheme));
        }
      }
      return ":root";
    }
    const generateThemeVars = () => {
      let vars = {
        ...rootVars
      };
      Object.entries(colorSchemesMap).forEach(([, {
        vars: schemeVars
      }]) => {
        vars = deepmerge(vars, schemeVars);
      });
      return vars;
    };
    const generateStyleSheets = () => {
      var _a, _b;
      const stylesheets = [];
      const colorScheme = theme.defaultColorScheme || "light";
      function insertStyleSheet(key2, css2) {
        if (Object.keys(css2).length) {
          stylesheets.push(typeof key2 === "string" ? {
            [key2]: {
              ...css2
            }
          } : key2);
        }
      }
      insertStyleSheet(getSelector(void 0, {
        ...rootCss
      }), rootCss);
      const {
        [colorScheme]: defaultSchemeVal,
        ...other
      } = colorSchemesMap;
      if (defaultSchemeVal) {
        const {
          css: css2
        } = defaultSchemeVal;
        const cssColorSheme = (_b = (_a = colorSchemes[colorScheme]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode;
        const finalCss = !disableCssColorScheme && cssColorSheme ? {
          colorScheme: cssColorSheme,
          ...css2
        } : {
          ...css2
        };
        insertStyleSheet(getSelector(colorScheme, {
          ...finalCss
        }), finalCss);
      }
      Object.entries(other).forEach(([key2, {
        css: css2
      }]) => {
        var _a2, _b2;
        const cssColorSheme = (_b2 = (_a2 = colorSchemes[key2]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode;
        const finalCss = !disableCssColorScheme && cssColorSheme ? {
          colorScheme: cssColorSheme,
          ...css2
        } : {
          ...css2
        };
        insertStyleSheet(getSelector(key2, {
          ...finalCss
        }), finalCss);
      });
      return stylesheets;
    };
    return {
      vars: themeVars,
      generateThemeVars,
      generateStyleSheets
    };
  }
  function createGetColorSchemeSelector(selector) {
    return function getColorSchemeSelector(colorScheme) {
      if (selector === "media") {
        return `@media (prefers-color-scheme: ${colorScheme})`;
      }
      if (selector) {
        if (selector.startsWith("data-") && !selector.includes("%s")) {
          return `[${selector}="${colorScheme}"] &`;
        }
        if (selector === "class") {
          return `.${colorScheme} &`;
        }
        if (selector === "data") {
          return `[data-${colorScheme}] &`;
        }
        return `${selector.replace("%s", colorScheme)} &`;
      }
      return "&";
    };
  }
  const common = {
    black: "#000",
    white: "#fff"
  };
  const grey = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
  };
  const purple = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2"
  };
  const red = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828"
  };
  const orange = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
  };
  const blue = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0"
  };
  const lightBlue = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b"
  };
  const green = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20"
  };
  function getLight() {
    return {
      // The colors used to style the text.
      text: {
        // The most important text.
        primary: "rgba(0, 0, 0, 0.87)",
        // Secondary text.
        secondary: "rgba(0, 0, 0, 0.6)",
        // Disabled text have even lower visual prominence.
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      // The color used to divide different elements.
      divider: "rgba(0, 0, 0, 0.12)",
      // The background colors used to style the surfaces.
      // Consistency between these values is important.
      background: {
        paper: common.white,
        default: common.white
      },
      // The colors used to style the action elements.
      action: {
        // The color of an active action like an icon button.
        active: "rgba(0, 0, 0, 0.54)",
        // The color of an hovered action.
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        // The color of a selected action.
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        // The color of a disabled action.
        disabled: "rgba(0, 0, 0, 0.26)",
        // The background color of a disabled action.
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12
      }
    };
  }
  const light = getLight();
  function getDark() {
    return {
      text: {
        primary: common.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)"
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: {
        paper: "#121212",
        default: "#121212"
      },
      action: {
        active: common.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24
      }
    };
  }
  const dark = getDark();
  function addLightOrDark(intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === "light") {
        intent.light = lighten(intent.main, tonalOffsetLight);
      } else if (direction === "dark") {
        intent.dark = darken(intent.main, tonalOffsetDark);
      }
    }
  }
  function getDefaultPrimary(mode = "light") {
    if (mode === "dark") {
      return {
        main: blue[200],
        light: blue[50],
        dark: blue[400]
      };
    }
    return {
      main: blue[700],
      light: blue[400],
      dark: blue[800]
    };
  }
  function getDefaultSecondary(mode = "light") {
    if (mode === "dark") {
      return {
        main: purple[200],
        light: purple[50],
        dark: purple[400]
      };
    }
    return {
      main: purple[500],
      light: purple[300],
      dark: purple[700]
    };
  }
  function getDefaultError(mode = "light") {
    if (mode === "dark") {
      return {
        main: red[500],
        light: red[300],
        dark: red[700]
      };
    }
    return {
      main: red[700],
      light: red[400],
      dark: red[800]
    };
  }
  function getDefaultInfo(mode = "light") {
    if (mode === "dark") {
      return {
        main: lightBlue[400],
        light: lightBlue[300],
        dark: lightBlue[700]
      };
    }
    return {
      main: lightBlue[700],
      light: lightBlue[500],
      dark: lightBlue[900]
    };
  }
  function getDefaultSuccess(mode = "light") {
    if (mode === "dark") {
      return {
        main: green[400],
        light: green[300],
        dark: green[700]
      };
    }
    return {
      main: green[800],
      light: green[500],
      dark: green[900]
    };
  }
  function getDefaultWarning(mode = "light") {
    if (mode === "dark") {
      return {
        main: orange[400],
        light: orange[300],
        dark: orange[700]
      };
    }
    return {
      main: "#ed6c02",
      // closest to orange[800] that pass 3:1.
      light: orange[500],
      dark: orange[900]
    };
  }
  function createPalette(palette) {
    const {
      mode = "light",
      contrastThreshold = 3,
      tonalOffset = 0.2,
      ...other
    } = palette;
    const primary = palette.primary || getDefaultPrimary(mode);
    const secondary = palette.secondary || getDefaultSecondary(mode);
    const error = palette.error || getDefaultError(mode);
    const info2 = palette.info || getDefaultInfo(mode);
    const success = palette.success || getDefaultSuccess(mode);
    const warning = palette.warning || getDefaultWarning(mode);
    function getContrastText(background) {
      const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
      return contrastText;
    }
    const augmentColor = ({
      color: color2,
      name,
      mainShade = 500,
      lightShade = 300,
      darkShade = 700
    }) => {
      color2 = {
        ...color2
      };
      if (!color2.main && color2[mainShade]) {
        color2.main = color2[mainShade];
      }
      if (!color2.hasOwnProperty("main")) {
        throw new Error(formatMuiErrorMessage(11, name ? ` (${name})` : "", mainShade));
      }
      if (typeof color2.main !== "string") {
        throw new Error(formatMuiErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color2.main)));
      }
      addLightOrDark(color2, "light", lightShade, tonalOffset);
      addLightOrDark(color2, "dark", darkShade, tonalOffset);
      if (!color2.contrastText) {
        color2.contrastText = getContrastText(color2.main);
      }
      return color2;
    };
    let modeHydrated;
    if (mode === "light") {
      modeHydrated = getLight();
    } else if (mode === "dark") {
      modeHydrated = getDark();
    }
    const paletteOutput = deepmerge({
      // A collection of common colors.
      common: {
        ...common
      },
      // prevent mutable object.
      // The palette mode, can be light or dark.
      mode,
      // The colors used to represent primary interface elements for a user.
      primary: augmentColor({
        color: primary,
        name: "primary"
      }),
      // The colors used to represent secondary interface elements for a user.
      secondary: augmentColor({
        color: secondary,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700"
      }),
      // The colors used to represent interface elements that the user should be made aware of.
      error: augmentColor({
        color: error,
        name: "error"
      }),
      // The colors used to represent potentially dangerous actions or important messages.
      warning: augmentColor({
        color: warning,
        name: "warning"
      }),
      // The colors used to present information to the user that is neutral and not necessarily important.
      info: augmentColor({
        color: info2,
        name: "info"
      }),
      // The colors used to indicate the successful completion of an action that user triggered.
      success: augmentColor({
        color: success,
        name: "success"
      }),
      // The grey colors.
      grey,
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold,
      // Takes a background color and returns the text color that maximizes the contrast.
      getContrastText,
      // Generate a rich color object.
      augmentColor,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset,
      // The light and dark mode object.
      ...modeHydrated
    }, other);
    return paletteOutput;
  }
  function prepareTypographyVars(typography) {
    const vars = {};
    const entries = Object.entries(typography);
    entries.forEach((entry) => {
      const [key2, value] = entry;
      if (typeof value === "object") {
        vars[key2] = `${value.fontStyle ? `${value.fontStyle} ` : ""}${value.fontVariant ? `${value.fontVariant} ` : ""}${value.fontWeight ? `${value.fontWeight} ` : ""}${value.fontStretch ? `${value.fontStretch} ` : ""}${value.fontSize || ""}${value.lineHeight ? `/${value.lineHeight} ` : ""}${value.fontFamily || ""}`;
      }
    });
    return vars;
  }
  function createMixins(breakpoints, mixins) {
    return {
      toolbar: {
        minHeight: 56,
        [breakpoints.up("xs")]: {
          "@media (orientation: landscape)": {
            minHeight: 48
          }
        },
        [breakpoints.up("sm")]: {
          minHeight: 64
        }
      },
      ...mixins
    };
  }
  function round$2(value) {
    return Math.round(value * 1e5) / 1e5;
  }
  const caseAllCaps = {
    textTransform: "uppercase"
  };
  const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
  function createTypography(palette, typography) {
    const {
      fontFamily = defaultFontFamily,
      // The default font size of the Material Specification.
      fontSize = 14,
      // px
      fontWeightLight = 300,
      fontWeightRegular = 400,
      fontWeightMedium = 500,
      fontWeightBold = 700,
      // Tell MUI what's the font-size on the html element.
      // 16px is the default font-size used by browsers.
      htmlFontSize = 16,
      // Apply the CSS properties to all the variants.
      allVariants,
      pxToRem: pxToRem2,
      ...other
    } = typeof typography === "function" ? typography(palette) : typography;
    const coef = fontSize / 14;
    const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
    const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => ({
      fontFamily,
      fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight,
      // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
      // across font-families can cause issues with the kerning.
      ...fontFamily === defaultFontFamily ? {
        letterSpacing: `${round$2(letterSpacing / size)}em`
      } : {},
      ...casing,
      ...allVariants
    });
    const variants = {
      h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
      h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
      h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
      h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
      h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
      h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
      subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
      subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
      body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
      body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
      button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
      caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
      overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
      // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
    return deepmerge({
      htmlFontSize,
      pxToRem,
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold,
      ...variants
    }, other, {
      clone: false
      // No need to clone deep
    });
  }
  const shadowKeyUmbraOpacity = 0.2;
  const shadowKeyPenumbraOpacity = 0.14;
  const shadowAmbientShadowOpacity = 0.12;
  function createShadow(...px) {
    return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
  }
  const shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
  const easing = {
    // This is the most common easing curve.
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  };
  const duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
  };
  function formatMs(milliseconds) {
    return `${Math.round(milliseconds)}ms`;
  }
  function getAutoHeightDuration(height2) {
    if (!height2) {
      return 0;
    }
    const constant = height2 / 36;
    return Math.min(Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10), 3e3);
  }
  function createTransitions(inputTransitions) {
    const mergedEasing = {
      ...easing,
      ...inputTransitions.easing
    };
    const mergedDuration = {
      ...duration,
      ...inputTransitions.duration
    };
    const create = (props = ["all"], options = {}) => {
      const {
        duration: durationOption = mergedDuration.standard,
        easing: easingOption = mergedEasing.easeInOut,
        delay = 0,
        ...other
      } = options;
      return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
    };
    return {
      getAutoHeightDuration,
      create,
      ...inputTransitions,
      easing: mergedEasing,
      duration: mergedDuration
    };
  }
  const zIndex = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function isSerializable(val) {
    return isPlainObject$1(val) || typeof val === "undefined" || typeof val === "string" || typeof val === "boolean" || typeof val === "number" || Array.isArray(val);
  }
  function stringifyTheme(baseTheme = {}) {
    const serializableTheme = {
      ...baseTheme
    };
    function serializeTheme(object) {
      const array = Object.entries(object);
      for (let index = 0; index < array.length; index++) {
        const [key2, value] = array[index];
        if (!isSerializable(value) || key2.startsWith("unstable_")) {
          delete object[key2];
        } else if (isPlainObject$1(value)) {
          object[key2] = {
            ...value
          };
          serializeTheme(object[key2]);
        }
      }
    }
    serializeTheme(serializableTheme);
    return `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(serializableTheme, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
  }
  function createThemeNoVars(options = {}, ...args) {
    const {
      breakpoints: breakpointsInput,
      mixins: mixinsInput = {},
      spacing: spacingInput,
      palette: paletteInput = {},
      transitions: transitionsInput = {},
      typography: typographyInput = {},
      shape: shapeInput,
      ...other
    } = options;
    if (options.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
    // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
    options.generateThemeVars === void 0) {
      throw new Error(formatMuiErrorMessage(20));
    }
    const palette = createPalette(paletteInput);
    const systemTheme = createTheme$1(options);
    let muiTheme = deepmerge(systemTheme, {
      mixins: createMixins(systemTheme.breakpoints, mixinsInput),
      palette,
      // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
      shadows: shadows.slice(),
      typography: createTypography(palette, typographyInput),
      transitions: createTransitions(transitionsInput),
      zIndex: {
        ...zIndex
      }
    });
    muiTheme = deepmerge(muiTheme, other);
    muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
    muiTheme.unstable_sxConfig = {
      ...defaultSxConfig,
      ...other == null ? void 0 : other.unstable_sxConfig
    };
    muiTheme.unstable_sx = function sx(props) {
      return styleFunctionSx({
        sx: props,
        theme: this
      });
    };
    muiTheme.toRuntimeSource = stringifyTheme;
    return muiTheme;
  }
  function getOverlayAlpha(elevation) {
    let alphaValue;
    if (elevation < 1) {
      alphaValue = 5.11916 * elevation ** 2;
    } else {
      alphaValue = 4.5 * Math.log(elevation + 1) + 2;
    }
    return Math.round(alphaValue * 10) / 1e3;
  }
  const defaultDarkOverlays = [...Array(25)].map((_, index) => {
    if (index === 0) {
      return "none";
    }
    const overlay = getOverlayAlpha(index);
    return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
  });
  function getOpacity(mode) {
    return {
      inputPlaceholder: mode === "dark" ? 0.5 : 0.42,
      inputUnderline: mode === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: mode === "dark" ? 0.2 : 0.12,
      switchTrack: mode === "dark" ? 0.3 : 0.38
    };
  }
  function getOverlays(mode) {
    return mode === "dark" ? defaultDarkOverlays : [];
  }
  function createColorScheme(options) {
    const {
      palette: paletteInput = {
        mode: "light"
      },
      // need to cast to avoid module augmentation test
      opacity,
      overlays,
      ...rest
    } = options;
    const palette = createPalette(paletteInput);
    return {
      palette,
      opacity: {
        ...getOpacity(palette.mode),
        ...opacity
      },
      overlays: overlays || getOverlays(palette.mode),
      ...rest
    };
  }
  function shouldSkipGeneratingVar(keys) {
    var _a;
    return !!keys[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) || // ends with sxConfig
    keys[0] === "palette" && !!((_a = keys[1]) == null ? void 0 : _a.match(/(mode|contrastThreshold|tonalOffset)/));
  }
  const excludeVariablesFromRoot = (cssVarPrefix) => [...[...Array(25)].map((_, index) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}overlays-${index}`), `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}palette-AppBar-darkBg`, `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}palette-AppBar-darkColor`];
  const defaultGetSelector = (theme) => (colorScheme, css2) => {
    const root = theme.rootSelector || ":root";
    const selector = theme.colorSchemeSelector;
    let rule = selector;
    if (selector === "class") {
      rule = ".%s";
    }
    if (selector === "data") {
      rule = "[data-%s]";
    }
    if ((selector == null ? void 0 : selector.startsWith("data-")) && !selector.includes("%s")) {
      rule = `[${selector}="%s"]`;
    }
    if (theme.defaultColorScheme === colorScheme) {
      if (colorScheme === "dark") {
        const excludedVariables = {};
        excludeVariablesFromRoot(theme.cssVarPrefix).forEach((cssVar) => {
          excludedVariables[cssVar] = css2[cssVar];
          delete css2[cssVar];
        });
        if (rule === "media") {
          return {
            [root]: css2,
            [`@media (prefers-color-scheme: dark)`]: {
              [root]: excludedVariables
            }
          };
        }
        if (rule) {
          return {
            [rule.replace("%s", colorScheme)]: excludedVariables,
            [`${root}, ${rule.replace("%s", colorScheme)}`]: css2
          };
        }
        return {
          [root]: {
            ...css2,
            ...excludedVariables
          }
        };
      }
      if (rule && rule !== "media") {
        return `${root}, ${rule.replace("%s", String(colorScheme))}`;
      }
    } else if (colorScheme) {
      if (rule === "media") {
        return {
          [`@media (prefers-color-scheme: ${String(colorScheme)})`]: {
            [root]: css2
          }
        };
      }
      if (rule) {
        return rule.replace("%s", String(colorScheme));
      }
    }
    return root;
  };
  function assignNode(obj, keys) {
    keys.forEach((k) => {
      if (!obj[k]) {
        obj[k] = {};
      }
    });
  }
  function setColor(obj, key2, defaultValue) {
    if (!obj[key2] && defaultValue) {
      obj[key2] = defaultValue;
    }
  }
  function toRgb(color2) {
    if (typeof color2 !== "string" || !color2.startsWith("hsl")) {
      return color2;
    }
    return hslToRgb(color2);
  }
  function setColorChannel(obj, key2) {
    if (!(`${key2}Channel` in obj)) {
      obj[`${key2}Channel`] = private_safeColorChannel(toRgb(obj[key2]));
    }
  }
  function getSpacingVal(spacingInput) {
    if (typeof spacingInput === "number") {
      return `${spacingInput}px`;
    }
    if (typeof spacingInput === "string" || typeof spacingInput === "function" || Array.isArray(spacingInput)) {
      return spacingInput;
    }
    return "8px";
  }
  const silent = (fn2) => {
    try {
      return fn2();
    } catch (error) {
    }
    return void 0;
  };
  const createGetCssVar = (cssVarPrefix = "mui") => createGetCssVar$1(cssVarPrefix);
  function attachColorScheme$1(colorSchemes, scheme, restTheme, colorScheme) {
    if (!scheme) {
      return void 0;
    }
    scheme = scheme === true ? {} : scheme;
    const mode = colorScheme === "dark" ? "dark" : "light";
    if (!restTheme) {
      colorSchemes[colorScheme] = createColorScheme({
        ...scheme,
        palette: {
          mode,
          ...scheme == null ? void 0 : scheme.palette
        }
      });
      return void 0;
    }
    const {
      palette,
      ...muiTheme
    } = createThemeNoVars({
      ...restTheme,
      palette: {
        mode,
        ...scheme == null ? void 0 : scheme.palette
      }
    });
    colorSchemes[colorScheme] = {
      ...scheme,
      palette,
      opacity: {
        ...getOpacity(mode),
        ...scheme == null ? void 0 : scheme.opacity
      },
      overlays: (scheme == null ? void 0 : scheme.overlays) || getOverlays(mode)
    };
    return muiTheme;
  }
  function createThemeWithVars(options = {}, ...args) {
    const {
      colorSchemes: colorSchemesInput = {
        light: true
      },
      defaultColorScheme: defaultColorSchemeInput,
      disableCssColorScheme = false,
      cssVarPrefix = "mui",
      shouldSkipGeneratingVar: shouldSkipGeneratingVar$1 = shouldSkipGeneratingVar,
      colorSchemeSelector: selector = colorSchemesInput.light && colorSchemesInput.dark ? "media" : void 0,
      rootSelector = ":root",
      ...input
    } = options;
    const firstColorScheme = Object.keys(colorSchemesInput)[0];
    const defaultColorScheme = defaultColorSchemeInput || (colorSchemesInput.light && firstColorScheme !== "light" ? "light" : firstColorScheme);
    const getCssVar = createGetCssVar(cssVarPrefix);
    const {
      [defaultColorScheme]: defaultSchemeInput,
      light: builtInLight,
      dark: builtInDark,
      ...customColorSchemes
    } = colorSchemesInput;
    const colorSchemes = {
      ...customColorSchemes
    };
    let defaultScheme = defaultSchemeInput;
    if (defaultColorScheme === "dark" && !("dark" in colorSchemesInput) || defaultColorScheme === "light" && !("light" in colorSchemesInput)) {
      defaultScheme = true;
    }
    if (!defaultScheme) {
      throw new Error(formatMuiErrorMessage(21, defaultColorScheme));
    }
    const muiTheme = attachColorScheme$1(colorSchemes, defaultScheme, input, defaultColorScheme);
    if (builtInLight && !colorSchemes.light) {
      attachColorScheme$1(colorSchemes, builtInLight, void 0, "light");
    }
    if (builtInDark && !colorSchemes.dark) {
      attachColorScheme$1(colorSchemes, builtInDark, void 0, "dark");
    }
    let theme = {
      defaultColorScheme,
      ...muiTheme,
      cssVarPrefix,
      colorSchemeSelector: selector,
      rootSelector,
      getCssVar,
      colorSchemes,
      font: {
        ...prepareTypographyVars(muiTheme.typography),
        ...muiTheme.font
      },
      spacing: getSpacingVal(input.spacing)
    };
    Object.keys(theme.colorSchemes).forEach((key2) => {
      const palette = theme.colorSchemes[key2].palette;
      const setCssVarColor = (cssVar) => {
        const tokens = cssVar.split("-");
        const color2 = tokens[1];
        const colorToken = tokens[2];
        return getCssVar(cssVar, palette[color2][colorToken]);
      };
      if (palette.mode === "light") {
        setColor(palette.common, "background", "#fff");
        setColor(palette.common, "onBackground", "#000");
      }
      if (palette.mode === "dark") {
        setColor(palette.common, "background", "#000");
        setColor(palette.common, "onBackground", "#fff");
      }
      assignNode(palette, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]);
      if (palette.mode === "light") {
        setColor(palette.Alert, "errorColor", private_safeDarken(palette.error.light, 0.6));
        setColor(palette.Alert, "infoColor", private_safeDarken(palette.info.light, 0.6));
        setColor(palette.Alert, "successColor", private_safeDarken(palette.success.light, 0.6));
        setColor(palette.Alert, "warningColor", private_safeDarken(palette.warning.light, 0.6));
        setColor(palette.Alert, "errorFilledBg", setCssVarColor("palette-error-main"));
        setColor(palette.Alert, "infoFilledBg", setCssVarColor("palette-info-main"));
        setColor(palette.Alert, "successFilledBg", setCssVarColor("palette-success-main"));
        setColor(palette.Alert, "warningFilledBg", setCssVarColor("palette-warning-main"));
        setColor(palette.Alert, "errorFilledColor", silent(() => palette.getContrastText(palette.error.main)));
        setColor(palette.Alert, "infoFilledColor", silent(() => palette.getContrastText(palette.info.main)));
        setColor(palette.Alert, "successFilledColor", silent(() => palette.getContrastText(palette.success.main)));
        setColor(palette.Alert, "warningFilledColor", silent(() => palette.getContrastText(palette.warning.main)));
        setColor(palette.Alert, "errorStandardBg", private_safeLighten(palette.error.light, 0.9));
        setColor(palette.Alert, "infoStandardBg", private_safeLighten(palette.info.light, 0.9));
        setColor(palette.Alert, "successStandardBg", private_safeLighten(palette.success.light, 0.9));
        setColor(palette.Alert, "warningStandardBg", private_safeLighten(palette.warning.light, 0.9));
        setColor(palette.Alert, "errorIconColor", setCssVarColor("palette-error-main"));
        setColor(palette.Alert, "infoIconColor", setCssVarColor("palette-info-main"));
        setColor(palette.Alert, "successIconColor", setCssVarColor("palette-success-main"));
        setColor(palette.Alert, "warningIconColor", setCssVarColor("palette-warning-main"));
        setColor(palette.AppBar, "defaultBg", setCssVarColor("palette-grey-100"));
        setColor(palette.Avatar, "defaultBg", setCssVarColor("palette-grey-400"));
        setColor(palette.Button, "inheritContainedBg", setCssVarColor("palette-grey-300"));
        setColor(palette.Button, "inheritContainedHoverBg", setCssVarColor("palette-grey-A100"));
        setColor(palette.Chip, "defaultBorder", setCssVarColor("palette-grey-400"));
        setColor(palette.Chip, "defaultAvatarColor", setCssVarColor("palette-grey-700"));
        setColor(palette.Chip, "defaultIconColor", setCssVarColor("palette-grey-700"));
        setColor(palette.FilledInput, "bg", "rgba(0, 0, 0, 0.06)");
        setColor(palette.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)");
        setColor(palette.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)");
        setColor(palette.LinearProgress, "primaryBg", private_safeLighten(palette.primary.main, 0.62));
        setColor(palette.LinearProgress, "secondaryBg", private_safeLighten(palette.secondary.main, 0.62));
        setColor(palette.LinearProgress, "errorBg", private_safeLighten(palette.error.main, 0.62));
        setColor(palette.LinearProgress, "infoBg", private_safeLighten(palette.info.main, 0.62));
        setColor(palette.LinearProgress, "successBg", private_safeLighten(palette.success.main, 0.62));
        setColor(palette.LinearProgress, "warningBg", private_safeLighten(palette.warning.main, 0.62));
        setColor(palette.Skeleton, "bg", `rgba(${setCssVarColor("palette-text-primaryChannel")} / 0.11)`);
        setColor(palette.Slider, "primaryTrack", private_safeLighten(palette.primary.main, 0.62));
        setColor(palette.Slider, "secondaryTrack", private_safeLighten(palette.secondary.main, 0.62));
        setColor(palette.Slider, "errorTrack", private_safeLighten(palette.error.main, 0.62));
        setColor(palette.Slider, "infoTrack", private_safeLighten(palette.info.main, 0.62));
        setColor(palette.Slider, "successTrack", private_safeLighten(palette.success.main, 0.62));
        setColor(palette.Slider, "warningTrack", private_safeLighten(palette.warning.main, 0.62));
        const snackbarContentBackground = private_safeEmphasize(palette.background.default, 0.8);
        setColor(palette.SnackbarContent, "bg", snackbarContentBackground);
        setColor(palette.SnackbarContent, "color", silent(() => palette.getContrastText(snackbarContentBackground)));
        setColor(palette.SpeedDialAction, "fabHoverBg", private_safeEmphasize(palette.background.paper, 0.15));
        setColor(palette.StepConnector, "border", setCssVarColor("palette-grey-400"));
        setColor(palette.StepContent, "border", setCssVarColor("palette-grey-400"));
        setColor(palette.Switch, "defaultColor", setCssVarColor("palette-common-white"));
        setColor(palette.Switch, "defaultDisabledColor", setCssVarColor("palette-grey-100"));
        setColor(palette.Switch, "primaryDisabledColor", private_safeLighten(palette.primary.main, 0.62));
        setColor(palette.Switch, "secondaryDisabledColor", private_safeLighten(palette.secondary.main, 0.62));
        setColor(palette.Switch, "errorDisabledColor", private_safeLighten(palette.error.main, 0.62));
        setColor(palette.Switch, "infoDisabledColor", private_safeLighten(palette.info.main, 0.62));
        setColor(palette.Switch, "successDisabledColor", private_safeLighten(palette.success.main, 0.62));
        setColor(palette.Switch, "warningDisabledColor", private_safeLighten(palette.warning.main, 0.62));
        setColor(palette.TableCell, "border", private_safeLighten(private_safeAlpha(palette.divider, 1), 0.88));
        setColor(palette.Tooltip, "bg", private_safeAlpha(palette.grey[700], 0.92));
      }
      if (palette.mode === "dark") {
        setColor(palette.Alert, "errorColor", private_safeLighten(palette.error.light, 0.6));
        setColor(palette.Alert, "infoColor", private_safeLighten(palette.info.light, 0.6));
        setColor(palette.Alert, "successColor", private_safeLighten(palette.success.light, 0.6));
        setColor(palette.Alert, "warningColor", private_safeLighten(palette.warning.light, 0.6));
        setColor(palette.Alert, "errorFilledBg", setCssVarColor("palette-error-dark"));
        setColor(palette.Alert, "infoFilledBg", setCssVarColor("palette-info-dark"));
        setColor(palette.Alert, "successFilledBg", setCssVarColor("palette-success-dark"));
        setColor(palette.Alert, "warningFilledBg", setCssVarColor("palette-warning-dark"));
        setColor(palette.Alert, "errorFilledColor", silent(() => palette.getContrastText(palette.error.dark)));
        setColor(palette.Alert, "infoFilledColor", silent(() => palette.getContrastText(palette.info.dark)));
        setColor(palette.Alert, "successFilledColor", silent(() => palette.getContrastText(palette.success.dark)));
        setColor(palette.Alert, "warningFilledColor", silent(() => palette.getContrastText(palette.warning.dark)));
        setColor(palette.Alert, "errorStandardBg", private_safeDarken(palette.error.light, 0.9));
        setColor(palette.Alert, "infoStandardBg", private_safeDarken(palette.info.light, 0.9));
        setColor(palette.Alert, "successStandardBg", private_safeDarken(palette.success.light, 0.9));
        setColor(palette.Alert, "warningStandardBg", private_safeDarken(palette.warning.light, 0.9));
        setColor(palette.Alert, "errorIconColor", setCssVarColor("palette-error-main"));
        setColor(palette.Alert, "infoIconColor", setCssVarColor("palette-info-main"));
        setColor(palette.Alert, "successIconColor", setCssVarColor("palette-success-main"));
        setColor(palette.Alert, "warningIconColor", setCssVarColor("palette-warning-main"));
        setColor(palette.AppBar, "defaultBg", setCssVarColor("palette-grey-900"));
        setColor(palette.AppBar, "darkBg", setCssVarColor("palette-background-paper"));
        setColor(palette.AppBar, "darkColor", setCssVarColor("palette-text-primary"));
        setColor(palette.Avatar, "defaultBg", setCssVarColor("palette-grey-600"));
        setColor(palette.Button, "inheritContainedBg", setCssVarColor("palette-grey-800"));
        setColor(palette.Button, "inheritContainedHoverBg", setCssVarColor("palette-grey-700"));
        setColor(palette.Chip, "defaultBorder", setCssVarColor("palette-grey-700"));
        setColor(palette.Chip, "defaultAvatarColor", setCssVarColor("palette-grey-300"));
        setColor(palette.Chip, "defaultIconColor", setCssVarColor("palette-grey-300"));
        setColor(palette.FilledInput, "bg", "rgba(255, 255, 255, 0.09)");
        setColor(palette.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)");
        setColor(palette.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)");
        setColor(palette.LinearProgress, "primaryBg", private_safeDarken(palette.primary.main, 0.5));
        setColor(palette.LinearProgress, "secondaryBg", private_safeDarken(palette.secondary.main, 0.5));
        setColor(palette.LinearProgress, "errorBg", private_safeDarken(palette.error.main, 0.5));
        setColor(palette.LinearProgress, "infoBg", private_safeDarken(palette.info.main, 0.5));
        setColor(palette.LinearProgress, "successBg", private_safeDarken(palette.success.main, 0.5));
        setColor(palette.LinearProgress, "warningBg", private_safeDarken(palette.warning.main, 0.5));
        setColor(palette.Skeleton, "bg", `rgba(${setCssVarColor("palette-text-primaryChannel")} / 0.13)`);
        setColor(palette.Slider, "primaryTrack", private_safeDarken(palette.primary.main, 0.5));
        setColor(palette.Slider, "secondaryTrack", private_safeDarken(palette.secondary.main, 0.5));
        setColor(palette.Slider, "errorTrack", private_safeDarken(palette.error.main, 0.5));
        setColor(palette.Slider, "infoTrack", private_safeDarken(palette.info.main, 0.5));
        setColor(palette.Slider, "successTrack", private_safeDarken(palette.success.main, 0.5));
        setColor(palette.Slider, "warningTrack", private_safeDarken(palette.warning.main, 0.5));
        const snackbarContentBackground = private_safeEmphasize(palette.background.default, 0.98);
        setColor(palette.SnackbarContent, "bg", snackbarContentBackground);
        setColor(palette.SnackbarContent, "color", silent(() => palette.getContrastText(snackbarContentBackground)));
        setColor(palette.SpeedDialAction, "fabHoverBg", private_safeEmphasize(palette.background.paper, 0.15));
        setColor(palette.StepConnector, "border", setCssVarColor("palette-grey-600"));
        setColor(palette.StepContent, "border", setCssVarColor("palette-grey-600"));
        setColor(palette.Switch, "defaultColor", setCssVarColor("palette-grey-300"));
        setColor(palette.Switch, "defaultDisabledColor", setCssVarColor("palette-grey-600"));
        setColor(palette.Switch, "primaryDisabledColor", private_safeDarken(palette.primary.main, 0.55));
        setColor(palette.Switch, "secondaryDisabledColor", private_safeDarken(palette.secondary.main, 0.55));
        setColor(palette.Switch, "errorDisabledColor", private_safeDarken(palette.error.main, 0.55));
        setColor(palette.Switch, "infoDisabledColor", private_safeDarken(palette.info.main, 0.55));
        setColor(palette.Switch, "successDisabledColor", private_safeDarken(palette.success.main, 0.55));
        setColor(palette.Switch, "warningDisabledColor", private_safeDarken(palette.warning.main, 0.55));
        setColor(palette.TableCell, "border", private_safeDarken(private_safeAlpha(palette.divider, 1), 0.68));
        setColor(palette.Tooltip, "bg", private_safeAlpha(palette.grey[700], 0.92));
      }
      setColorChannel(palette.background, "default");
      setColorChannel(palette.background, "paper");
      setColorChannel(palette.common, "background");
      setColorChannel(palette.common, "onBackground");
      setColorChannel(palette, "divider");
      Object.keys(palette).forEach((color2) => {
        const colors = palette[color2];
        if (color2 !== "tonalOffset" && colors && typeof colors === "object") {
          if (colors.main) {
            setColor(palette[color2], "mainChannel", private_safeColorChannel(toRgb(colors.main)));
          }
          if (colors.light) {
            setColor(palette[color2], "lightChannel", private_safeColorChannel(toRgb(colors.light)));
          }
          if (colors.dark) {
            setColor(palette[color2], "darkChannel", private_safeColorChannel(toRgb(colors.dark)));
          }
          if (colors.contrastText) {
            setColor(palette[color2], "contrastTextChannel", private_safeColorChannel(toRgb(colors.contrastText)));
          }
          if (color2 === "text") {
            setColorChannel(palette[color2], "primary");
            setColorChannel(palette[color2], "secondary");
          }
          if (color2 === "action") {
            if (colors.active) {
              setColorChannel(palette[color2], "active");
            }
            if (colors.selected) {
              setColorChannel(palette[color2], "selected");
            }
          }
        }
      });
    });
    theme = args.reduce((acc, argument) => deepmerge(acc, argument), theme);
    const parserConfig = {
      prefix: cssVarPrefix,
      disableCssColorScheme,
      shouldSkipGeneratingVar: shouldSkipGeneratingVar$1,
      getSelector: defaultGetSelector(theme)
    };
    const {
      vars,
      generateThemeVars,
      generateStyleSheets
    } = prepareCssVars(theme, parserConfig);
    theme.vars = vars;
    Object.entries(theme.colorSchemes[theme.defaultColorScheme]).forEach(([key2, value]) => {
      theme[key2] = value;
    });
    theme.generateThemeVars = generateThemeVars;
    theme.generateStyleSheets = generateStyleSheets;
    theme.generateSpacing = function generateSpacing() {
      return createSpacing(input.spacing, createUnarySpacing(this));
    };
    theme.getColorSchemeSelector = createGetColorSchemeSelector(selector);
    theme.spacing = theme.generateSpacing();
    theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar$1;
    theme.unstable_sxConfig = {
      ...defaultSxConfig,
      ...input == null ? void 0 : input.unstable_sxConfig
    };
    theme.unstable_sx = function sx(props) {
      return styleFunctionSx({
        sx: props,
        theme: this
      });
    };
    theme.toRuntimeSource = stringifyTheme;
    return theme;
  }
  function attachColorScheme(theme, scheme, colorScheme) {
    if (!theme.colorSchemes) {
      return void 0;
    }
    if (colorScheme) {
      theme.colorSchemes[scheme] = {
        ...colorScheme !== true && colorScheme,
        palette: createPalette({
          ...colorScheme === true ? {} : colorScheme.palette,
          mode: scheme
        })
        // cast type to skip module augmentation test
      };
    }
  }
  function createTheme(options = {}, ...args) {
    const {
      palette,
      cssVariables = false,
      colorSchemes: initialColorSchemes = !palette ? {
        light: true
      } : void 0,
      defaultColorScheme: initialDefaultColorScheme = palette == null ? void 0 : palette.mode,
      ...rest
    } = options;
    const defaultColorSchemeInput = initialDefaultColorScheme || "light";
    const defaultScheme = initialColorSchemes == null ? void 0 : initialColorSchemes[defaultColorSchemeInput];
    const colorSchemesInput = {
      ...initialColorSchemes,
      ...palette ? {
        [defaultColorSchemeInput]: {
          ...typeof defaultScheme !== "boolean" && defaultScheme,
          palette
        }
      } : void 0
    };
    if (cssVariables === false) {
      if (!("colorSchemes" in options)) {
        return createThemeNoVars(options, ...args);
      }
      let paletteOptions = palette;
      if (!("palette" in options)) {
        if (colorSchemesInput[defaultColorSchemeInput]) {
          if (colorSchemesInput[defaultColorSchemeInput] !== true) {
            paletteOptions = colorSchemesInput[defaultColorSchemeInput].palette;
          } else if (defaultColorSchemeInput === "dark") {
            paletteOptions = {
              mode: "dark"
            };
          }
        }
      }
      const theme = createThemeNoVars({
        ...options,
        palette: paletteOptions
      }, ...args);
      theme.defaultColorScheme = defaultColorSchemeInput;
      theme.colorSchemes = colorSchemesInput;
      if (theme.palette.mode === "light") {
        theme.colorSchemes.light = {
          ...colorSchemesInput.light !== true && colorSchemesInput.light,
          palette: theme.palette
        };
        attachColorScheme(theme, "dark", colorSchemesInput.dark);
      }
      if (theme.palette.mode === "dark") {
        theme.colorSchemes.dark = {
          ...colorSchemesInput.dark !== true && colorSchemesInput.dark,
          palette: theme.palette
        };
        attachColorScheme(theme, "light", colorSchemesInput.light);
      }
      return theme;
    }
    if (!palette && !("light" in colorSchemesInput) && defaultColorSchemeInput === "light") {
      colorSchemesInput.light = true;
    }
    return createThemeWithVars({
      ...rest,
      colorSchemes: colorSchemesInput,
      defaultColorScheme: defaultColorSchemeInput,
      ...typeof cssVariables !== "boolean" && cssVariables
    }, ...args);
  }
  const defaultTheme$1 = createTheme();
  const THEME_ID = "$$material";
  function useTheme() {
    const theme = useTheme$2(defaultTheme$1);
    return theme[THEME_ID] || theme;
  }
  function GlobalStyles(props) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles$1, {
      ...props,
      defaultTheme: defaultTheme$1,
      themeId: THEME_ID
    });
  }
  function slotShouldForwardProp(prop) {
    return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
  }
  const rootShouldForwardProp = (prop) => slotShouldForwardProp(prop) && prop !== "classes";
  const styled = createStyled2({
    themeId: THEME_ID,
    defaultTheme: defaultTheme$1,
    rootShouldForwardProp
  });
  function globalCss(styles2) {
    return function GlobalStylesWrapper(props) {
      return (
        // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
        /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles, {
          styles: typeof styles2 === "function" ? (theme) => styles2({
            theme,
            ...props
          }) : styles2
        })
      );
    };
  }
  function internal_createExtendSxProp() {
    return extendSxProp$1;
  }
  const memoTheme = unstable_memoTheme;
  function useDefaultProps(params) {
    return useDefaultProps$1(params);
  }
  function getSvgIconUtilityClass(slot) {
    return generateUtilityClass("MuiSvgIcon", slot);
  }
  generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
  const useUtilityClasses$H = (ownerState) => {
    const {
      color: color2,
      fontSize,
      classes
    } = ownerState;
    const slots = {
      root: ["root", color2 !== "inherit" && `color${capitalize(color2)}`, `fontSize${capitalize(fontSize)}`]
    };
    return composeClasses(slots, getSvgIconUtilityClass, classes);
  };
  const SvgIconRoot = styled("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, ownerState.color !== "inherit" && styles2[`color${capitalize(ownerState.color)}`], styles2[`fontSize${capitalize(ownerState.fontSize)}`]];
    }
  })(memoTheme(({
    theme
  }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      flexShrink: 0,
      transition: (_d = (_a = theme.transitions) == null ? void 0 : _a.create) == null ? void 0 : _d.call(_a, "fill", {
        duration: (_c = (_b = (theme.vars ?? theme).transitions) == null ? void 0 : _b.duration) == null ? void 0 : _c.shorter
      }),
      variants: [
        {
          props: (props) => !props.hasSvgAsChild,
          style: {
            // the <svg> will define the property that has `currentColor`
            // for example heroicons uses fill="none" and stroke="currentColor"
            fill: "currentColor"
          }
        },
        {
          props: {
            fontSize: "inherit"
          },
          style: {
            fontSize: "inherit"
          }
        },
        {
          props: {
            fontSize: "small"
          },
          style: {
            fontSize: ((_f = (_e = theme.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f.call(_e, 20)) || "1.25rem"
          }
        },
        {
          props: {
            fontSize: "medium"
          },
          style: {
            fontSize: ((_h = (_g = theme.typography) == null ? void 0 : _g.pxToRem) == null ? void 0 : _h.call(_g, 24)) || "1.5rem"
          }
        },
        {
          props: {
            fontSize: "large"
          },
          style: {
            fontSize: ((_j = (_i = theme.typography) == null ? void 0 : _i.pxToRem) == null ? void 0 : _j.call(_i, 35)) || "2.1875rem"
          }
        },
        // TODO v5 deprecate color prop, v6 remove for sx
        ...Object.entries((theme.vars ?? theme).palette).filter(([, value]) => value && value.main).map(([color2]) => {
          var _a2, _b2;
          return {
            props: {
              color: color2
            },
            style: {
              color: (_b2 = (_a2 = (theme.vars ?? theme).palette) == null ? void 0 : _a2[color2]) == null ? void 0 : _b2.main
            }
          };
        }),
        {
          props: {
            color: "action"
          },
          style: {
            color: (_l = (_k = (theme.vars ?? theme).palette) == null ? void 0 : _k.action) == null ? void 0 : _l.active
          }
        },
        {
          props: {
            color: "disabled"
          },
          style: {
            color: (_n = (_m = (theme.vars ?? theme).palette) == null ? void 0 : _m.action) == null ? void 0 : _n.disabled
          }
        },
        {
          props: {
            color: "inherit"
          },
          style: {
            color: void 0
          }
        }
      ]
    };
  }));
  const SvgIcon = /* @__PURE__ */ React__namespace.forwardRef(function SvgIcon2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiSvgIcon"
    });
    const {
      children,
      className,
      color: color2 = "inherit",
      component = "svg",
      fontSize = "medium",
      htmlColor,
      inheritViewBox = false,
      titleAccess,
      viewBox = "0 0 24 24",
      ...other
    } = props;
    const hasSvgAsChild = /* @__PURE__ */ React__namespace.isValidElement(children) && children.type === "svg";
    const ownerState = {
      ...props,
      color: color2,
      component,
      fontSize,
      instanceFontSize: inProps.fontSize,
      inheritViewBox,
      viewBox,
      hasSvgAsChild
    };
    const more = {};
    if (!inheritViewBox) {
      more.viewBox = viewBox;
    }
    const classes = useUtilityClasses$H(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SvgIconRoot, {
      as: component,
      className: clsx(classes.root, className),
      focusable: "false",
      color: htmlColor,
      "aria-hidden": titleAccess ? void 0 : true,
      role: titleAccess ? "img" : void 0,
      ref,
      ...more,
      ...other,
      ...hasSvgAsChild && children.props,
      ownerState,
      children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /* @__PURE__ */ jsxRuntimeExports.jsx("title", {
        children: titleAccess
      }) : null]
    });
  });
  SvgIcon.muiName = "SvgIcon";
  function createSvgIcon(path, displayName) {
    function Component(props, ref) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SvgIcon, {
        "data-testid": void 0,
        ref,
        ...props,
        children: path
      });
    }
    Component.muiName = SvgIcon.muiName;
    return /* @__PURE__ */ React__namespace.memo(/* @__PURE__ */ React__namespace.forwardRef(Component));
  }
  function isEventHandler(key2, value) {
    const thirdCharCode = key2.charCodeAt(2);
    return key2[0] === "o" && key2[1] === "n" && thirdCharCode >= 65 && thirdCharCode <= 90 && typeof value === "function";
  }
  function mergeSlotProps(externalSlotProps, defaultSlotProps) {
    if (!externalSlotProps) {
      return defaultSlotProps;
    }
    function extractHandlers(externalSlotPropsValue, defaultSlotPropsValue) {
      const handlers2 = {};
      Object.keys(defaultSlotPropsValue).forEach((key2) => {
        if (isEventHandler(key2, defaultSlotPropsValue[key2]) && typeof externalSlotPropsValue[key2] === "function") {
          handlers2[key2] = (...args) => {
            externalSlotPropsValue[key2](...args);
            defaultSlotPropsValue[key2](...args);
          };
        }
      });
      return handlers2;
    }
    if (typeof externalSlotProps === "function" || typeof defaultSlotProps === "function") {
      return (ownerState) => {
        const defaultSlotPropsValue = typeof defaultSlotProps === "function" ? defaultSlotProps(ownerState) : defaultSlotProps;
        const externalSlotPropsValue = typeof externalSlotProps === "function" ? externalSlotProps({
          ...ownerState,
          ...defaultSlotPropsValue
        }) : externalSlotProps;
        const className2 = clsx(ownerState == null ? void 0 : ownerState.className, defaultSlotPropsValue == null ? void 0 : defaultSlotPropsValue.className, externalSlotPropsValue == null ? void 0 : externalSlotPropsValue.className);
        const handlers2 = extractHandlers(externalSlotPropsValue, defaultSlotPropsValue);
        return {
          ...defaultSlotPropsValue,
          ...externalSlotPropsValue,
          ...handlers2,
          ...!!className2 && {
            className: className2
          },
          ...(defaultSlotPropsValue == null ? void 0 : defaultSlotPropsValue.style) && (externalSlotPropsValue == null ? void 0 : externalSlotPropsValue.style) && {
            style: {
              ...defaultSlotPropsValue.style,
              ...externalSlotPropsValue.style
            }
          },
          ...(defaultSlotPropsValue == null ? void 0 : defaultSlotPropsValue.sx) && (externalSlotPropsValue == null ? void 0 : externalSlotPropsValue.sx) && {
            sx: [...Array.isArray(defaultSlotPropsValue.sx) ? defaultSlotPropsValue.sx : [defaultSlotPropsValue.sx], ...Array.isArray(externalSlotPropsValue.sx) ? externalSlotPropsValue.sx : [externalSlotPropsValue.sx]]
          }
        };
      };
    }
    const typedDefaultSlotProps = defaultSlotProps;
    const handlers = extractHandlers(externalSlotProps, typedDefaultSlotProps);
    const className = clsx(typedDefaultSlotProps == null ? void 0 : typedDefaultSlotProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    return {
      ...defaultSlotProps,
      ...externalSlotProps,
      ...handlers,
      ...!!className && {
        className
      },
      ...(typedDefaultSlotProps == null ? void 0 : typedDefaultSlotProps.style) && (externalSlotProps == null ? void 0 : externalSlotProps.style) && {
        style: {
          ...typedDefaultSlotProps.style,
          ...externalSlotProps.style
        }
      },
      ...(typedDefaultSlotProps == null ? void 0 : typedDefaultSlotProps.sx) && (externalSlotProps == null ? void 0 : externalSlotProps.sx) && {
        sx: [...Array.isArray(typedDefaultSlotProps.sx) ? typedDefaultSlotProps.sx : [typedDefaultSlotProps.sx], ...Array.isArray(externalSlotProps.sx) ? externalSlotProps.sx : [externalSlotProps.sx]]
      }
    };
  }
  class LazyRipple {
    constructor() {
      __publicField(this, "mountEffect", () => {
        if (this.shouldMount && !this.didMount) {
          if (this.ref.current !== null) {
            this.didMount = true;
            this.mounted.resolve();
          }
        }
      });
      this.ref = {
        current: null
      };
      this.mounted = null;
      this.didMount = false;
      this.shouldMount = false;
      this.setShouldMount = null;
    }
    /** React ref to the ripple instance */
    /** If the ripple component should be mounted */
    /** Promise that resolves when the ripple component is mounted */
    /** If the ripple component has been mounted */
    /** React state hook setter */
    static create() {
      return new LazyRipple();
    }
    static use() {
      const ripple = useLazyRef(LazyRipple.create).current;
      const [shouldMount, setShouldMount] = React__namespace.useState(false);
      ripple.shouldMount = shouldMount;
      ripple.setShouldMount = setShouldMount;
      React__namespace.useEffect(ripple.mountEffect, [shouldMount]);
      return ripple;
    }
    mount() {
      if (!this.mounted) {
        this.mounted = createControlledPromise();
        this.shouldMount = true;
        this.setShouldMount(this.shouldMount);
      }
      return this.mounted;
    }
    /* Ripple API */
    start(...args) {
      this.mount().then(() => {
        var _a;
        return (_a = this.ref.current) == null ? void 0 : _a.start(...args);
      });
    }
    stop(...args) {
      this.mount().then(() => {
        var _a;
        return (_a = this.ref.current) == null ? void 0 : _a.stop(...args);
      });
    }
    pulsate(...args) {
      this.mount().then(() => {
        var _a;
        return (_a = this.ref.current) == null ? void 0 : _a.pulsate(...args);
      });
    }
  }
  function useLazyRipple() {
    return LazyRipple.use();
  }
  function createControlledPromise() {
    let resolve;
    let reject;
    const p = new Promise((resolveFn, rejectFn) => {
      resolve = resolveFn;
      reject = rejectFn;
    });
    p.resolve = resolve;
    p.reject = reject;
    return p;
  }
  function _objectWithoutPropertiesLoose(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
      return t2.__proto__ = e2, t2;
    }, _setPrototypeOf(t, e);
  }
  function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
  }
  const config = {
    disabled: false
  };
  const TransitionGroupContext = React.createContext(null);
  var forceReflow = function forceReflow2(node2) {
    return node2.scrollTop;
  };
  var UNMOUNTED = "unmounted";
  var EXITED = "exited";
  var ENTERING = "entering";
  var ENTERED = "entered";
  var EXITING = "exiting";
  var Transition = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose(Transition2, _React$Component);
    function Transition2(props, context) {
      var _this;
      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context;
      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;
      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }
      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }
    Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;
      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }
      return null;
    };
    var _proto = Transition2.prototype;
    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;
      if (prevProps !== this.props) {
        var status = this.state.status;
        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }
      this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
      var timeout2 = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout2;
      if (timeout2 != null && typeof timeout2 !== "number") {
        exit = timeout2.exit;
        enter = timeout2.enter;
        appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
      }
      return {
        exit,
        enter,
        appear
      };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }
      if (nextStatus !== null) {
        this.cancelNextCallback();
        if (nextStatus === ENTERING) {
          if (this.props.unmountOnExit || this.props.mountOnEnter) {
            var node2 = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default.findDOMNode(this);
            if (node2) forceReflow(node2);
          }
          this.performEnter(mounting);
        } else {
          this.performExit();
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };
    _proto.performEnter = function performEnter(mounting) {
      var _this2 = this;
      var enter = this.props.enter;
      var appearing = this.context ? this.context.isMounting : mounting;
      var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM__default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
      var timeouts = this.getTimeouts();
      var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
      if (!mounting && !enter || config.disabled) {
        this.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode);
        });
        return;
      }
      this.props.onEnter(maybeNode, maybeAppearing);
      this.safeSetState({
        status: ENTERING
      }, function() {
        _this2.props.onEntering(maybeNode, maybeAppearing);
        _this2.onTransitionEnd(enterTimeout, function() {
          _this2.safeSetState({
            status: ENTERED
          }, function() {
            _this2.props.onEntered(maybeNode, maybeAppearing);
          });
        });
      });
    };
    _proto.performExit = function performExit() {
      var _this3 = this;
      var exit = this.props.exit;
      var timeouts = this.getTimeouts();
      var maybeNode = this.props.nodeRef ? void 0 : ReactDOM__default.findDOMNode(this);
      if (!exit || config.disabled) {
        this.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
        return;
      }
      this.props.onExit(maybeNode);
      this.safeSetState({
        status: EXITING
      }, function() {
        _this3.props.onExiting(maybeNode);
        _this3.onTransitionEnd(timeouts.exit, function() {
          _this3.safeSetState({
            status: EXITED
          }, function() {
            _this3.props.onExited(maybeNode);
          });
        });
      });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;
      var active = true;
      this.nextCallback = function(event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };
      this.nextCallback.cancel = function() {
        active = false;
      };
      return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
      this.setNextCallback(handler);
      var node2 = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default.findDOMNode(this);
      var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
      if (!node2 || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }
      if (this.props.addEndListener) {
        var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node2, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
        this.props.addEndListener(maybeNode, maybeNextCallback);
      }
      if (timeout2 != null) {
        setTimeout(this.nextCallback, timeout2);
      }
    };
    _proto.render = function render() {
      var status = this.state.status;
      if (status === UNMOUNTED) {
        return null;
      }
      var _this$props = this.props, children = _this$props.children;
      _this$props.in;
      _this$props.mountOnEnter;
      _this$props.unmountOnExit;
      _this$props.appear;
      _this$props.enter;
      _this$props.exit;
      _this$props.timeout;
      _this$props.addEndListener;
      _this$props.onEnter;
      _this$props.onEntering;
      _this$props.onEntered;
      _this$props.onExit;
      _this$props.onExiting;
      _this$props.onExited;
      _this$props.nodeRef;
      var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
      return (
        // allows for nested Transitions
        /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
          value: null
        }, typeof children === "function" ? children(status, childProps) : React.cloneElement(React.Children.only(children), childProps))
      );
    };
    return Transition2;
  }(React.Component);
  Transition.contextType = TransitionGroupContext;
  Transition.propTypes = {};
  function noop$2() {
  }
  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop$2,
    onEntering: noop$2,
    onEntered: noop$2,
    onExit: noop$2,
    onExiting: noop$2,
    onExited: noop$2
  };
  Transition.UNMOUNTED = UNMOUNTED;
  Transition.EXITED = EXITED;
  Transition.ENTERING = ENTERING;
  Transition.ENTERED = ENTERED;
  Transition.EXITING = EXITING;
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function getChildMapping(children, mapFn) {
    var mapper = function mapper2(child) {
      return mapFn && React.isValidElement(child) ? mapFn(child) : child;
    };
    var result = /* @__PURE__ */ Object.create(null);
    if (children) React.Children.map(children, function(c) {
      return c;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
    return result;
  }
  function mergeChildMappings(prev2, next2) {
    prev2 = prev2 || {};
    next2 = next2 || {};
    function getValueForKey(key2) {
      return key2 in next2 ? next2[key2] : prev2[key2];
    }
    var nextKeysPending = /* @__PURE__ */ Object.create(null);
    var pendingKeys = [];
    for (var prevKey in prev2) {
      if (prevKey in next2) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }
    var i;
    var childMapping = {};
    for (var nextKey in next2) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }
      childMapping[nextKey] = getValueForKey(nextKey);
    }
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
  }
  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }
  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function(child) {
      return React.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, "appear", props),
        enter: getProp(child, "enter", props),
        exit: getProp(child, "exit", props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function(key2) {
      var child = children[key2];
      if (!React.isValidElement(child)) return;
      var hasPrev = key2 in prevChildMapping;
      var hasNext = key2 in nextChildMapping;
      var prevChild = prevChildMapping[key2];
      var isLeaving = React.isValidElement(prevChild) && !prevChild.props.in;
      if (hasNext && (!hasPrev || isLeaving)) {
        children[key2] = React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, "exit", nextProps),
          enter: getProp(child, "enter", nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        children[key2] = React.cloneElement(child, {
          in: false
        });
      } else if (hasNext && hasPrev && React.isValidElement(prevChild)) {
        children[key2] = React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, "exit", nextProps),
          enter: getProp(child, "enter", nextProps)
        });
      }
    });
    return children;
  }
  var values = Object.values || function(obj) {
    return Object.keys(obj).map(function(k) {
      return obj[k];
    });
  };
  var defaultProps = {
    component: "div",
    childFactory: function childFactory(child) {
      return child;
    }
  };
  var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose(TransitionGroup2, _React$Component);
    function TransitionGroup2(props, context) {
      var _this;
      _this = _React$Component.call(this, props, context) || this;
      var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
      _this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited,
        firstRender: true
      };
      return _this;
    }
    var _proto = TransitionGroup2.prototype;
    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };
    TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
      return {
        children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    };
    _proto.handleExited = function handleExited(child, node2) {
      var currentChildMapping = getChildMapping(this.props.children);
      if (child.key in currentChildMapping) return;
      if (child.props.onExited) {
        child.props.onExited(node2);
      }
      if (this.mounted) {
        this.setState(function(state) {
          var children = _extends({}, state.children);
          delete children[child.key];
          return {
            children
          };
        });
      }
    };
    _proto.render = function render() {
      var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
      var contextValue = this.state.contextValue;
      var children = values(this.state.children).map(childFactory2);
      delete props.appear;
      delete props.enter;
      delete props.exit;
      if (Component === null) {
        return /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
          value: contextValue
        }, children);
      }
      return /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, /* @__PURE__ */ React.createElement(Component, props, children));
    };
    return TransitionGroup2;
  }(React.Component);
  TransitionGroup.propTypes = {};
  TransitionGroup.defaultProps = defaultProps;
  function Ripple(props) {
    const {
      className,
      classes,
      pulsate = false,
      rippleX,
      rippleY,
      rippleSize,
      in: inProp,
      onExited,
      timeout
    } = props;
    const [leaving, setLeaving] = React__namespace.useState(false);
    const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
    const rippleStyles = {
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX
    };
    const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
    if (!inProp && !leaving) {
      setLeaving(true);
    }
    React__namespace.useEffect(() => {
      if (!inProp && onExited != null) {
        const timeoutId = setTimeout(onExited, timeout);
        return () => {
          clearTimeout(timeoutId);
        };
      }
      return void 0;
    }, [onExited, inProp, timeout]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: rippleClassName,
      style: rippleStyles,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: childClassName
      })
    });
  }
  const touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
  const DURATION = 550;
  const DELAY_RIPPLE = 80;
  const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`;
  const exitKeyframe = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
  const pulsateKeyframe = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
  const TouchRippleRoot = styled("span", {
    name: "MuiTouchRipple",
    slot: "Root"
  })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit"
  });
  const TouchRippleRipple = styled(Ripple, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })`
  opacity: 0;
  position: absolute;

  &.${touchRippleClasses.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${enterKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  &.${touchRippleClasses.ripplePulsate} {
    animation-duration: ${({
  theme
}) => theme.transitions.duration.shorter}ms;
  }

  & .${touchRippleClasses.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${touchRippleClasses.childLeaving} {
    opacity: 0;
    animation-name: ${exitKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  & .${touchRippleClasses.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${pulsateKeyframe};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`;
  const TouchRipple = /* @__PURE__ */ React__namespace.forwardRef(function TouchRipple2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiTouchRipple"
    });
    const {
      center: centerProp = false,
      classes = {},
      className,
      ...other
    } = props;
    const [ripples, setRipples] = React__namespace.useState([]);
    const nextKey = React__namespace.useRef(0);
    const rippleCallback = React__namespace.useRef(null);
    React__namespace.useEffect(() => {
      if (rippleCallback.current) {
        rippleCallback.current();
        rippleCallback.current = null;
      }
    }, [ripples]);
    const ignoringMouseDown = React__namespace.useRef(false);
    const startTimer = useTimeout();
    const startTimerCommit = React__namespace.useRef(null);
    const container = React__namespace.useRef(null);
    const startCommit = React__namespace.useCallback((params) => {
      const {
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      } = params;
      setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRippleRipple, {
        classes: {
          ripple: clsx(classes.ripple, touchRippleClasses.ripple),
          rippleVisible: clsx(classes.rippleVisible, touchRippleClasses.rippleVisible),
          ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
          child: clsx(classes.child, touchRippleClasses.child),
          childLeaving: clsx(classes.childLeaving, touchRippleClasses.childLeaving),
          childPulsate: clsx(classes.childPulsate, touchRippleClasses.childPulsate)
        },
        timeout: DURATION,
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize
      }, nextKey.current)]);
      nextKey.current += 1;
      rippleCallback.current = cb;
    }, [classes]);
    const start2 = React__namespace.useCallback((event = {}, options = {}, cb = () => {
    }) => {
      const {
        pulsate: pulsate2 = false,
        center = centerProp || options.pulsate,
        fakeElement = false
        // For test purposes
      } = options;
      if ((event == null ? void 0 : event.type) === "mousedown" && ignoringMouseDown.current) {
        ignoringMouseDown.current = false;
        return;
      }
      if ((event == null ? void 0 : event.type) === "touchstart") {
        ignoringMouseDown.current = true;
      }
      const element = fakeElement ? null : container.current;
      const rect = element ? element.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let rippleX;
      let rippleY;
      let rippleSize;
      if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        const {
          clientX,
          clientY
        } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }
      if (center) {
        rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
        if (rippleSize % 2 === 0) {
          rippleSize += 1;
        }
      } else {
        const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
      }
      if (event == null ? void 0 : event.touches) {
        if (startTimerCommit.current === null) {
          startTimerCommit.current = () => {
            startCommit({
              pulsate: pulsate2,
              rippleX,
              rippleY,
              rippleSize,
              cb
            });
          };
          startTimer.start(DELAY_RIPPLE, () => {
            if (startTimerCommit.current) {
              startTimerCommit.current();
              startTimerCommit.current = null;
            }
          });
        }
      } else {
        startCommit({
          pulsate: pulsate2,
          rippleX,
          rippleY,
          rippleSize,
          cb
        });
      }
    }, [centerProp, startCommit, startTimer]);
    const pulsate = React__namespace.useCallback(() => {
      start2({}, {
        pulsate: true
      });
    }, [start2]);
    const stop = React__namespace.useCallback((event, cb) => {
      startTimer.clear();
      if ((event == null ? void 0 : event.type) === "touchend" && startTimerCommit.current) {
        startTimerCommit.current();
        startTimerCommit.current = null;
        startTimer.start(0, () => {
          stop(event, cb);
        });
        return;
      }
      startTimerCommit.current = null;
      setRipples((oldRipples) => {
        if (oldRipples.length > 0) {
          return oldRipples.slice(1);
        }
        return oldRipples;
      });
      rippleCallback.current = cb;
    }, [startTimer]);
    React__namespace.useImperativeHandle(ref, () => ({
      pulsate,
      start: start2,
      stop
    }), [pulsate, start2, stop]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRippleRoot, {
      className: clsx(touchRippleClasses.root, classes.root, className),
      ref: container,
      ...other,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionGroup, {
        component: null,
        exit: true,
        children: ripples
      })
    });
  });
  function getButtonBaseUtilityClass(slot) {
    return generateUtilityClass("MuiButtonBase", slot);
  }
  const buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]);
  const useUtilityClasses$G = (ownerState) => {
    const {
      disabled,
      focusVisible,
      focusVisibleClassName,
      classes
    } = ownerState;
    const slots = {
      root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
    };
    const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
    if (focusVisible && focusVisibleClassName) {
      composedClasses.root += ` ${focusVisibleClassName}`;
    }
    return composedClasses;
  };
  const ButtonBaseRoot = styled("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (props, styles2) => styles2.root
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    // Reset
    WebkitAppearance: "none",
    // Reset
    textDecoration: "none",
    // So we take precedent over the style of a native <a /> element.
    color: "inherit",
    "&::-moz-focus-inner": {
      borderStyle: "none"
      // Remove Firefox dotted outline.
    },
    [`&.${buttonBaseClasses.disabled}`]: {
      pointerEvents: "none",
      // Disable link interactions
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  const ButtonBase = /* @__PURE__ */ React__namespace.forwardRef(function ButtonBase2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiButtonBase"
    });
    const {
      action,
      centerRipple = false,
      children,
      className,
      component = "button",
      disabled = false,
      disableRipple = false,
      disableTouchRipple = false,
      focusRipple = false,
      focusVisibleClassName,
      LinkComponent = "a",
      onBlur,
      onClick,
      onContextMenu,
      onDragLeave,
      onFocus,
      onFocusVisible,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      tabIndex = 0,
      TouchRippleProps,
      touchRippleRef,
      type,
      ...other
    } = props;
    const buttonRef = React__namespace.useRef(null);
    const ripple = useLazyRipple();
    const handleRippleRef = useForkRef(ripple.ref, touchRippleRef);
    const [focusVisible, setFocusVisible] = React__namespace.useState(false);
    if (disabled && focusVisible) {
      setFocusVisible(false);
    }
    React__namespace.useImperativeHandle(action, () => ({
      focusVisible: () => {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    }), []);
    const enableTouchRipple = ripple.shouldMount && !disableRipple && !disabled;
    React__namespace.useEffect(() => {
      if (focusVisible && focusRipple && !disableRipple) {
        ripple.pulsate();
      }
    }, [disableRipple, focusRipple, focusVisible, ripple]);
    const handleMouseDown = useRippleHandler(ripple, "start", onMouseDown, disableTouchRipple);
    const handleContextMenu = useRippleHandler(ripple, "stop", onContextMenu, disableTouchRipple);
    const handleDragLeave = useRippleHandler(ripple, "stop", onDragLeave, disableTouchRipple);
    const handleMouseUp = useRippleHandler(ripple, "stop", onMouseUp, disableTouchRipple);
    const handleMouseLeave = useRippleHandler(ripple, "stop", (event) => {
      if (focusVisible) {
        event.preventDefault();
      }
      if (onMouseLeave) {
        onMouseLeave(event);
      }
    }, disableTouchRipple);
    const handleTouchStart = useRippleHandler(ripple, "start", onTouchStart, disableTouchRipple);
    const handleTouchEnd = useRippleHandler(ripple, "stop", onTouchEnd, disableTouchRipple);
    const handleTouchMove = useRippleHandler(ripple, "stop", onTouchMove, disableTouchRipple);
    const handleBlur = useRippleHandler(ripple, "stop", (event) => {
      if (!isFocusVisible(event.target)) {
        setFocusVisible(false);
      }
      if (onBlur) {
        onBlur(event);
      }
    }, false);
    const handleFocus = useEventCallback((event) => {
      if (!buttonRef.current) {
        buttonRef.current = event.currentTarget;
      }
      if (isFocusVisible(event.target)) {
        setFocusVisible(true);
        if (onFocusVisible) {
          onFocusVisible(event);
        }
      }
      if (onFocus) {
        onFocus(event);
      }
    });
    const isNonNativeButton = () => {
      const button = buttonRef.current;
      return component && component !== "button" && !(button.tagName === "A" && button.href);
    };
    const handleKeyDown = useEventCallback((event) => {
      if (focusRipple && !event.repeat && focusVisible && event.key === " ") {
        ripple.stop(event, () => {
          ripple.start(event);
        });
      }
      if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
        event.preventDefault();
      }
      if (onKeyDown) {
        onKeyDown(event);
      }
      if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
        event.preventDefault();
        if (onClick) {
          onClick(event);
        }
      }
    });
    const handleKeyUp = useEventCallback((event) => {
      if (focusRipple && event.key === " " && focusVisible && !event.defaultPrevented) {
        ripple.stop(event, () => {
          ripple.pulsate(event);
        });
      }
      if (onKeyUp) {
        onKeyUp(event);
      }
      if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
        onClick(event);
      }
    });
    let ComponentProp = component;
    if (ComponentProp === "button" && (other.href || other.to)) {
      ComponentProp = LinkComponent;
    }
    const buttonProps = {};
    if (ComponentProp === "button") {
      buttonProps.type = type === void 0 ? "button" : type;
      buttonProps.disabled = disabled;
    } else {
      if (!other.href && !other.to) {
        buttonProps.role = "button";
      }
      if (disabled) {
        buttonProps["aria-disabled"] = disabled;
      }
    }
    const handleRef = useForkRef(ref, buttonRef);
    const ownerState = {
      ...props,
      centerRipple,
      component,
      disabled,
      disableRipple,
      disableTouchRipple,
      focusRipple,
      tabIndex,
      focusVisible
    };
    const classes = useUtilityClasses$G(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonBaseRoot, {
      as: ComponentProp,
      className: clsx(classes.root, className),
      ownerState,
      onBlur: handleBlur,
      onClick,
      onContextMenu: handleContextMenu,
      onFocus: handleFocus,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeave,
      onMouseUp: handleMouseUp,
      onDragLeave: handleDragLeave,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
      onTouchStart: handleTouchStart,
      ref: handleRef,
      tabIndex: disabled ? -1 : tabIndex,
      type,
      ...buttonProps,
      ...other,
      children: [children, enableTouchRipple ? /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRipple, {
        ref: handleRippleRef,
        center: centerRipple,
        ...TouchRippleProps
      }) : null]
    });
  });
  function useRippleHandler(ripple, rippleAction, eventCallback, skipRippleAction = false) {
    return useEventCallback((event) => {
      if (eventCallback) {
        eventCallback(event);
      }
      if (!skipRippleAction) {
        ripple[rippleAction](event);
      }
      return true;
    });
  }
  function hasCorrectMainProperty(obj) {
    return typeof obj.main === "string";
  }
  function checkSimplePaletteColorValues(obj, additionalPropertiesToCheck = []) {
    if (!hasCorrectMainProperty(obj)) {
      return false;
    }
    for (const value of additionalPropertiesToCheck) {
      if (!obj.hasOwnProperty(value) || typeof obj[value] !== "string") {
        return false;
      }
    }
    return true;
  }
  function createSimplePaletteValueFilter(additionalPropertiesToCheck = []) {
    return ([, value]) => value && checkSimplePaletteColorValues(value, additionalPropertiesToCheck);
  }
  function getCircularProgressUtilityClass(slot) {
    return generateUtilityClass("MuiCircularProgress", slot);
  }
  generateUtilityClasses("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
  const SIZE = 44;
  const circularRotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
  const circularDashKeyframe = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`;
  const rotateAnimation = typeof circularRotateKeyframe !== "string" ? css`
        animation: ${circularRotateKeyframe} 1.4s linear infinite;
      ` : null;
  const dashAnimation = typeof circularDashKeyframe !== "string" ? css`
        animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
      ` : null;
  const useUtilityClasses$F = (ownerState) => {
    const {
      classes,
      variant,
      color: color2,
      disableShrink
    } = ownerState;
    const slots = {
      root: ["root", variant, `color${capitalize(color2)}`],
      svg: ["svg"],
      circle: ["circle", `circle${capitalize(variant)}`, disableShrink && "circleDisableShrink"]
    };
    return composeClasses(slots, getCircularProgressUtilityClass, classes);
  };
  const CircularProgressRoot = styled("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, styles2[ownerState.variant], styles2[`color${capitalize(ownerState.color)}`]];
    }
  })(memoTheme(({
    theme
  }) => ({
    display: "inline-block",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        transition: theme.transitions.create("transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: rotateAnimation || {
        animation: `${circularRotateKeyframe} 1.4s linear infinite`
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color2]) => ({
      props: {
        color: color2
      },
      style: {
        color: (theme.vars || theme).palette[color2].main
      }
    }))]
  })));
  const CircularProgressSVG = styled("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (props, styles2) => styles2.svg
  })({
    display: "block"
    // Keeps the progress centered
  });
  const CircularProgressCircle = styled("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.circle, styles2[`circle${capitalize(ownerState.variant)}`], ownerState.disableShrink && styles2.circleDisableShrink];
    }
  })(memoTheme(({
    theme
  }) => ({
    stroke: "currentColor",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        transition: theme.transitions.create("stroke-dashoffset")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: {
        // Some default value that looks fine waiting for the animation to kicks in.
        strokeDasharray: "80px, 200px",
        strokeDashoffset: 0
        // Add the unit to fix a Edge 16 and below bug.
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.variant === "indeterminate" && !ownerState.disableShrink,
      style: dashAnimation || {
        // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
        animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`
      }
    }]
  })));
  const CircularProgress = /* @__PURE__ */ React__namespace.forwardRef(function CircularProgress2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiCircularProgress"
    });
    const {
      className,
      color: color2 = "primary",
      disableShrink = false,
      size = 40,
      style: style2,
      thickness = 3.6,
      value = 0,
      variant = "indeterminate",
      ...other
    } = props;
    const ownerState = {
      ...props,
      color: color2,
      disableShrink,
      size,
      thickness,
      value,
      variant
    };
    const classes = useUtilityClasses$F(ownerState);
    const circleStyle = {};
    const rootStyle = {};
    const rootProps = {};
    if (variant === "determinate") {
      const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
      circleStyle.strokeDasharray = circumference.toFixed(3);
      rootProps["aria-valuenow"] = Math.round(value);
      circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`;
      rootStyle.transform = "rotate(-90deg)";
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgressRoot, {
      className: clsx(classes.root, className),
      style: {
        width: size,
        height: size,
        ...rootStyle,
        ...style2
      },
      ownerState,
      ref,
      role: "progressbar",
      ...rootProps,
      ...other,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgressSVG, {
        className: classes.svg,
        ownerState,
        viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgressCircle, {
          className: classes.circle,
          style: circleStyle,
          ownerState,
          cx: SIZE,
          cy: SIZE,
          r: (SIZE - thickness) / 2,
          fill: "none",
          strokeWidth: thickness
        })
      })
    });
  });
  function getButtonUtilityClass(slot) {
    return generateUtilityClass("MuiButton", slot);
  }
  const buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]);
  const ButtonGroupContext = /* @__PURE__ */ React__namespace.createContext({});
  const ButtonGroupButtonContext = /* @__PURE__ */ React__namespace.createContext(void 0);
  const useUtilityClasses$E = (ownerState) => {
    const {
      color: color2,
      disableElevation,
      fullWidth,
      size,
      variant,
      loading,
      loadingPosition,
      classes
    } = ownerState;
    const slots = {
      root: ["root", loading && "loading", variant, `${variant}${capitalize(color2)}`, `size${capitalize(size)}`, `${variant}Size${capitalize(size)}`, `color${capitalize(color2)}`, disableElevation && "disableElevation", fullWidth && "fullWidth", loading && `loadingPosition${capitalize(loadingPosition)}`],
      startIcon: ["icon", "startIcon", `iconSize${capitalize(size)}`],
      endIcon: ["icon", "endIcon", `iconSize${capitalize(size)}`],
      loadingIndicator: ["loadingIndicator"],
      loadingWrapper: ["loadingWrapper"]
    };
    const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
    return {
      ...classes,
      // forward the focused, disabled, etc. classes to the ButtonBase
      ...composedClasses
    };
  };
  const commonIconStyles = [{
    props: {
      size: "small"
    },
    style: {
      "& > *:nth-of-type(1)": {
        fontSize: 18
      }
    }
  }, {
    props: {
      size: "medium"
    },
    style: {
      "& > *:nth-of-type(1)": {
        fontSize: 20
      }
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      "& > *:nth-of-type(1)": {
        fontSize: 22
      }
    }
  }];
  const ButtonRoot = styled(ButtonBase, {
    shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, styles2[ownerState.variant], styles2[`${ownerState.variant}${capitalize(ownerState.color)}`], styles2[`size${capitalize(ownerState.size)}`], styles2[`${ownerState.variant}Size${capitalize(ownerState.size)}`], ownerState.color === "inherit" && styles2.colorInherit, ownerState.disableElevation && styles2.disableElevation, ownerState.fullWidth && styles2.fullWidth, ownerState.loading && styles2.loading];
    }
  })(memoTheme(({
    theme
  }) => {
    const inheritContainedBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[800];
    const inheritContainedHoverBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey.A100 : theme.palette.grey[700];
    return {
      ...theme.typography.button,
      minWidth: 64,
      padding: "6px 16px",
      border: 0,
      borderRadius: (theme.vars || theme).shape.borderRadius,
      transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
        duration: theme.transitions.duration.short
      }),
      "&:hover": {
        textDecoration: "none"
      },
      [`&.${buttonClasses.disabled}`]: {
        color: (theme.vars || theme).palette.action.disabled
      },
      variants: [{
        props: {
          variant: "contained"
        },
        style: {
          color: `var(--variant-containedColor)`,
          backgroundColor: `var(--variant-containedBg)`,
          boxShadow: (theme.vars || theme).shadows[2],
          "&:hover": {
            boxShadow: (theme.vars || theme).shadows[4],
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
              boxShadow: (theme.vars || theme).shadows[2]
            }
          },
          "&:active": {
            boxShadow: (theme.vars || theme).shadows[8]
          },
          [`&.${buttonClasses.focusVisible}`]: {
            boxShadow: (theme.vars || theme).shadows[6]
          },
          [`&.${buttonClasses.disabled}`]: {
            color: (theme.vars || theme).palette.action.disabled,
            boxShadow: (theme.vars || theme).shadows[0],
            backgroundColor: (theme.vars || theme).palette.action.disabledBackground
          }
        }
      }, {
        props: {
          variant: "outlined"
        },
        style: {
          padding: "5px 15px",
          border: "1px solid currentColor",
          borderColor: `var(--variant-outlinedBorder, currentColor)`,
          backgroundColor: `var(--variant-outlinedBg)`,
          color: `var(--variant-outlinedColor)`,
          [`&.${buttonClasses.disabled}`]: {
            border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
          }
        }
      }, {
        props: {
          variant: "text"
        },
        style: {
          padding: "6px 8px",
          color: `var(--variant-textColor)`,
          backgroundColor: `var(--variant-textBg)`
        }
      }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color2]) => ({
        props: {
          color: color2
        },
        style: {
          "--variant-textColor": (theme.vars || theme).palette[color2].main,
          "--variant-outlinedColor": (theme.vars || theme).palette[color2].main,
          "--variant-outlinedBorder": theme.vars ? `rgba(${theme.vars.palette[color2].mainChannel} / 0.5)` : alpha(theme.palette[color2].main, 0.5),
          "--variant-containedColor": (theme.vars || theme).palette[color2].contrastText,
          "--variant-containedBg": (theme.vars || theme).palette[color2].main,
          "@media (hover: hover)": {
            "&:hover": {
              "--variant-containedBg": (theme.vars || theme).palette[color2].dark,
              "--variant-textBg": theme.vars ? `rgba(${theme.vars.palette[color2].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color2].main, theme.palette.action.hoverOpacity),
              "--variant-outlinedBorder": (theme.vars || theme).palette[color2].main,
              "--variant-outlinedBg": theme.vars ? `rgba(${theme.vars.palette[color2].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color2].main, theme.palette.action.hoverOpacity)
            }
          }
        }
      })), {
        props: {
          color: "inherit"
        },
        style: {
          color: "inherit",
          borderColor: "currentColor",
          "--variant-containedBg": theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
          "@media (hover: hover)": {
            "&:hover": {
              "--variant-containedBg": theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
              "--variant-textBg": theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
              "--variant-outlinedBg": theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity)
            }
          }
        }
      }, {
        props: {
          size: "small",
          variant: "text"
        },
        style: {
          padding: "4px 5px",
          fontSize: theme.typography.pxToRem(13)
        }
      }, {
        props: {
          size: "large",
          variant: "text"
        },
        style: {
          padding: "8px 11px",
          fontSize: theme.typography.pxToRem(15)
        }
      }, {
        props: {
          size: "small",
          variant: "outlined"
        },
        style: {
          padding: "3px 9px",
          fontSize: theme.typography.pxToRem(13)
        }
      }, {
        props: {
          size: "large",
          variant: "outlined"
        },
        style: {
          padding: "7px 21px",
          fontSize: theme.typography.pxToRem(15)
        }
      }, {
        props: {
          size: "small",
          variant: "contained"
        },
        style: {
          padding: "4px 10px",
          fontSize: theme.typography.pxToRem(13)
        }
      }, {
        props: {
          size: "large",
          variant: "contained"
        },
        style: {
          padding: "8px 22px",
          fontSize: theme.typography.pxToRem(15)
        }
      }, {
        props: {
          disableElevation: true
        },
        style: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none"
          },
          [`&.${buttonClasses.focusVisible}`]: {
            boxShadow: "none"
          },
          "&:active": {
            boxShadow: "none"
          },
          [`&.${buttonClasses.disabled}`]: {
            boxShadow: "none"
          }
        }
      }, {
        props: {
          fullWidth: true
        },
        style: {
          width: "100%"
        }
      }, {
        props: {
          loadingPosition: "center"
        },
        style: {
          transition: theme.transitions.create(["background-color", "box-shadow", "border-color"], {
            duration: theme.transitions.duration.short
          }),
          [`&.${buttonClasses.loading}`]: {
            color: "transparent"
          }
        }
      }]
    };
  }));
  const ButtonStartIcon = styled("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.startIcon, ownerState.loading && styles2.startIconLoadingStart, styles2[`iconSize${capitalize(ownerState.size)}`]];
    }
  })(({
    theme
  }) => ({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4,
    variants: [{
      props: {
        size: "small"
      },
      style: {
        marginLeft: -2
      }
    }, {
      props: {
        loadingPosition: "start",
        loading: true
      },
      style: {
        transition: theme.transitions.create(["opacity"], {
          duration: theme.transitions.duration.short
        }),
        opacity: 0
      }
    }, {
      props: {
        loadingPosition: "start",
        loading: true,
        fullWidth: true
      },
      style: {
        marginRight: -8
      }
    }, ...commonIconStyles]
  }));
  const ButtonEndIcon = styled("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.endIcon, ownerState.loading && styles2.endIconLoadingEnd, styles2[`iconSize${capitalize(ownerState.size)}`]];
    }
  })(({
    theme
  }) => ({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8,
    variants: [{
      props: {
        size: "small"
      },
      style: {
        marginRight: -2
      }
    }, {
      props: {
        loadingPosition: "end",
        loading: true
      },
      style: {
        transition: theme.transitions.create(["opacity"], {
          duration: theme.transitions.duration.short
        }),
        opacity: 0
      }
    }, {
      props: {
        loadingPosition: "end",
        loading: true,
        fullWidth: true
      },
      style: {
        marginLeft: -8
      }
    }, ...commonIconStyles]
  }));
  const ButtonLoadingIndicator = styled("span", {
    name: "MuiButton",
    slot: "LoadingIndicator",
    overridesResolver: (props, styles2) => styles2.loadingIndicator
  })(({
    theme
  }) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    variants: [{
      props: {
        loading: true
      },
      style: {
        display: "flex"
      }
    }, {
      props: {
        loadingPosition: "start"
      },
      style: {
        left: 14
      }
    }, {
      props: {
        loadingPosition: "start",
        size: "small"
      },
      style: {
        left: 10
      }
    }, {
      props: {
        variant: "text",
        loadingPosition: "start"
      },
      style: {
        left: 6
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        left: "50%",
        transform: "translate(-50%)",
        color: (theme.vars || theme).palette.action.disabled
      }
    }, {
      props: {
        loadingPosition: "end"
      },
      style: {
        right: 14
      }
    }, {
      props: {
        loadingPosition: "end",
        size: "small"
      },
      style: {
        right: 10
      }
    }, {
      props: {
        variant: "text",
        loadingPosition: "end"
      },
      style: {
        right: 6
      }
    }, {
      props: {
        loadingPosition: "start",
        fullWidth: true
      },
      style: {
        position: "relative",
        left: -10
      }
    }, {
      props: {
        loadingPosition: "end",
        fullWidth: true
      },
      style: {
        position: "relative",
        right: -10
      }
    }]
  }));
  const ButtonLoadingIconPlaceholder = styled("span", {
    name: "MuiButton",
    slot: "LoadingIconPlaceholder",
    overridesResolver: (props, styles2) => styles2.loadingIconPlaceholder
  })({
    display: "inline-block",
    width: "1em",
    height: "1em"
  });
  const Button = /* @__PURE__ */ React__namespace.forwardRef(function Button2(inProps, ref) {
    const contextProps = React__namespace.useContext(ButtonGroupContext);
    const buttonGroupButtonContextPositionClassName = React__namespace.useContext(ButtonGroupButtonContext);
    const resolvedProps = resolveProps(contextProps, inProps);
    const props = useDefaultProps({
      props: resolvedProps,
      name: "MuiButton"
    });
    const {
      children,
      color: color2 = "primary",
      component = "button",
      className,
      disabled = false,
      disableElevation = false,
      disableFocusRipple = false,
      endIcon: endIconProp,
      focusVisibleClassName,
      fullWidth = false,
      id: idProp,
      loading = null,
      loadingIndicator: loadingIndicatorProp,
      loadingPosition = "center",
      size = "medium",
      startIcon: startIconProp,
      type,
      variant = "text",
      ...other
    } = props;
    const loadingId = useId(idProp);
    const loadingIndicator = loadingIndicatorProp ?? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {
      "aria-labelledby": loadingId,
      color: "inherit",
      size: 16
    });
    const ownerState = {
      ...props,
      color: color2,
      component,
      disabled,
      disableElevation,
      disableFocusRipple,
      fullWidth,
      loading,
      loadingIndicator,
      loadingPosition,
      size,
      type,
      variant
    };
    const classes = useUtilityClasses$E(ownerState);
    const startIcon = (startIconProp || loading && loadingPosition === "start") && /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonStartIcon, {
      className: classes.startIcon,
      ownerState,
      children: startIconProp || /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonLoadingIconPlaceholder, {
        className: classes.loadingIconPlaceholder,
        ownerState
      })
    });
    const endIcon = (endIconProp || loading && loadingPosition === "end") && /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonEndIcon, {
      className: classes.endIcon,
      ownerState,
      children: endIconProp || /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonLoadingIconPlaceholder, {
        className: classes.loadingIconPlaceholder,
        ownerState
      })
    });
    const positionClassName = buttonGroupButtonContextPositionClassName || "";
    const loader = typeof loading === "boolean" ? (
      // use plain HTML span to minimize the runtime overhead
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: classes.loadingWrapper,
        style: {
          display: "contents"
        },
        children: loading && /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonLoadingIndicator, {
          className: classes.loadingIndicator,
          ownerState,
          children: loadingIndicator
        })
      })
    ) : null;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonRoot, {
      ownerState,
      className: clsx(contextProps.className, classes.root, className, positionClassName),
      component,
      disabled: disabled || loading,
      focusRipple: !disableFocusRipple,
      focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
      ref,
      type,
      id: loading ? loadingId : idProp,
      ...other,
      classes,
      children: [startIcon, loadingPosition !== "end" && loader, children, loadingPosition === "end" && loader, endIcon]
    });
  });
  const ShareIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92"
  }));
  function ThemeProviderNoVars({
    theme: themeInput,
    ...props
  }) {
    const scopedTheme = THEME_ID in themeInput ? themeInput[THEME_ID] : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider$1, {
      ...props,
      themeId: scopedTheme ? THEME_ID : void 0,
      theme: scopedTheme || themeInput
    });
  }
  const defaultConfig = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode"
  };
  const {
    CssVarsProvider: InternalCssVarsProvider
  } = createCssVarsProvider({
    themeId: THEME_ID,
    // @ts-ignore ignore module augmentation tests
    theme: () => createTheme({
      cssVariables: true
    }),
    colorSchemeStorageKey: defaultConfig.colorSchemeStorageKey,
    modeStorageKey: defaultConfig.modeStorageKey,
    defaultColorScheme: {
      light: defaultConfig.defaultLightColorScheme,
      dark: defaultConfig.defaultDarkColorScheme
    },
    resolveTheme: (theme) => {
      const newTheme = {
        ...theme,
        typography: createTypography(theme.palette, theme.typography)
      };
      newTheme.unstable_sx = function sx(props) {
        return styleFunctionSx({
          sx: props,
          theme: this
        });
      };
      return newTheme;
    }
  });
  const CssVarsProvider = InternalCssVarsProvider;
  function ThemeProvider({
    theme,
    ...props
  }) {
    if (typeof theme === "function") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProviderNoVars, {
        theme,
        ...props
      });
    }
    const muiTheme = THEME_ID in theme ? theme[THEME_ID] : theme;
    if (!("colorSchemes" in muiTheme)) {
      if (!("vars" in muiTheme)) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProviderNoVars, {
          theme: {
            ...theme,
            vars: null
          },
          ...props
        });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProviderNoVars, {
        theme,
        ...props
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CssVarsProvider, {
      theme,
      ...props
    });
  }
  const reflow = (node2) => node2.scrollTop;
  function getTransitionProps(props, options) {
    const {
      timeout,
      easing: easing2,
      style: style2 = {}
    } = props;
    return {
      duration: style2.transitionDuration ?? (typeof timeout === "number" ? timeout : timeout[options.mode] || 0),
      easing: style2.transitionTimingFunction ?? (typeof easing2 === "object" ? easing2[options.mode] : easing2),
      delay: style2.transitionDelay
    };
  }
  function getCollapseUtilityClass(slot) {
    return generateUtilityClass("MuiCollapse", slot);
  }
  generateUtilityClasses("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
  const useUtilityClasses$D = (ownerState) => {
    const {
      orientation,
      classes
    } = ownerState;
    const slots = {
      root: ["root", `${orientation}`],
      entered: ["entered"],
      hidden: ["hidden"],
      wrapper: ["wrapper", `${orientation}`],
      wrapperInner: ["wrapperInner", `${orientation}`]
    };
    return composeClasses(slots, getCollapseUtilityClass, classes);
  };
  const CollapseRoot = styled("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, styles2[ownerState.orientation], ownerState.state === "entered" && styles2.entered, ownerState.state === "exited" && !ownerState.in && ownerState.collapsedSize === "0px" && styles2.hidden];
    }
  })(memoTheme(({
    theme
  }) => ({
    height: 0,
    overflow: "hidden",
    transition: theme.transitions.create("height"),
    variants: [{
      props: {
        orientation: "horizontal"
      },
      style: {
        height: "auto",
        width: 0,
        transition: theme.transitions.create("width")
      }
    }, {
      props: {
        state: "entered"
      },
      style: {
        height: "auto",
        overflow: "visible"
      }
    }, {
      props: {
        state: "entered",
        orientation: "horizontal"
      },
      style: {
        width: "auto"
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.state === "exited" && !ownerState.in && ownerState.collapsedSize === "0px",
      style: {
        visibility: "hidden"
      }
    }]
  })));
  const CollapseWrapper = styled("div", {
    name: "MuiCollapse",
    slot: "Wrapper",
    overridesResolver: (props, styles2) => styles2.wrapper
  })({
    // Hack to get children with a negative margin to not falsify the height computation.
    display: "flex",
    width: "100%",
    variants: [{
      props: {
        orientation: "horizontal"
      },
      style: {
        width: "auto",
        height: "100%"
      }
    }]
  });
  const CollapseWrapperInner = styled("div", {
    name: "MuiCollapse",
    slot: "WrapperInner",
    overridesResolver: (props, styles2) => styles2.wrapperInner
  })({
    width: "100%",
    variants: [{
      props: {
        orientation: "horizontal"
      },
      style: {
        width: "auto",
        height: "100%"
      }
    }]
  });
  const Collapse = /* @__PURE__ */ React__namespace.forwardRef(function Collapse2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiCollapse"
    });
    const {
      addEndListener,
      children,
      className,
      collapsedSize: collapsedSizeProp = "0px",
      component,
      easing: easing2,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      orientation = "vertical",
      style: style2,
      timeout = duration.standard,
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Transition,
      ...other
    } = props;
    const ownerState = {
      ...props,
      orientation,
      collapsedSize: collapsedSizeProp
    };
    const classes = useUtilityClasses$D(ownerState);
    const theme = useTheme();
    const timer2 = useTimeout();
    const wrapperRef = React__namespace.useRef(null);
    const autoTransitionDuration = React__namespace.useRef();
    const collapsedSize = typeof collapsedSizeProp === "number" ? `${collapsedSizeProp}px` : collapsedSizeProp;
    const isHorizontal2 = orientation === "horizontal";
    const size = isHorizontal2 ? "width" : "height";
    const nodeRef = React__namespace.useRef(null);
    const handleRef = useForkRef(ref, nodeRef);
    const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
      if (callback) {
        const node2 = nodeRef.current;
        if (maybeIsAppearing === void 0) {
          callback(node2);
        } else {
          callback(node2, maybeIsAppearing);
        }
      }
    };
    const getWrapperSize = () => wrapperRef.current ? wrapperRef.current[isHorizontal2 ? "clientWidth" : "clientHeight"] : 0;
    const handleEnter = normalizedTransitionCallback((node2, isAppearing) => {
      if (wrapperRef.current && isHorizontal2) {
        wrapperRef.current.style.position = "absolute";
      }
      node2.style[size] = collapsedSize;
      if (onEnter) {
        onEnter(node2, isAppearing);
      }
    });
    const handleEntering = normalizedTransitionCallback((node2, isAppearing) => {
      const wrapperSize = getWrapperSize();
      if (wrapperRef.current && isHorizontal2) {
        wrapperRef.current.style.position = "";
      }
      const {
        duration: transitionDuration,
        easing: transitionTimingFunction
      } = getTransitionProps({
        style: style2,
        timeout,
        easing: easing2
      }, {
        mode: "enter"
      });
      if (timeout === "auto") {
        const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
        node2.style.transitionDuration = `${duration2}ms`;
        autoTransitionDuration.current = duration2;
      } else {
        node2.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : `${transitionDuration}ms`;
      }
      node2.style[size] = `${wrapperSize}px`;
      node2.style.transitionTimingFunction = transitionTimingFunction;
      if (onEntering) {
        onEntering(node2, isAppearing);
      }
    });
    const handleEntered = normalizedTransitionCallback((node2, isAppearing) => {
      node2.style[size] = "auto";
      if (onEntered) {
        onEntered(node2, isAppearing);
      }
    });
    const handleExit = normalizedTransitionCallback((node2) => {
      node2.style[size] = `${getWrapperSize()}px`;
      if (onExit) {
        onExit(node2);
      }
    });
    const handleExited = normalizedTransitionCallback(onExited);
    const handleExiting = normalizedTransitionCallback((node2) => {
      const wrapperSize = getWrapperSize();
      const {
        duration: transitionDuration,
        easing: transitionTimingFunction
      } = getTransitionProps({
        style: style2,
        timeout,
        easing: easing2
      }, {
        mode: "exit"
      });
      if (timeout === "auto") {
        const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
        node2.style.transitionDuration = `${duration2}ms`;
        autoTransitionDuration.current = duration2;
      } else {
        node2.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : `${transitionDuration}ms`;
      }
      node2.style[size] = collapsedSize;
      node2.style.transitionTimingFunction = transitionTimingFunction;
      if (onExiting) {
        onExiting(node2);
      }
    });
    const handleAddEndListener = (next2) => {
      if (timeout === "auto") {
        timer2.start(autoTransitionDuration.current || 0, next2);
      }
      if (addEndListener) {
        addEndListener(nodeRef.current, next2);
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, {
      in: inProp,
      onEnter: handleEnter,
      onEntered: handleEntered,
      onEntering: handleEntering,
      onExit: handleExit,
      onExited: handleExited,
      onExiting: handleExiting,
      addEndListener: handleAddEndListener,
      nodeRef,
      timeout: timeout === "auto" ? null : timeout,
      ...other,
      children: (state, {
        ownerState: incomingOwnerState,
        ...restChildProps
      }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CollapseRoot, {
        as: component,
        className: clsx(classes.root, className, {
          "entered": classes.entered,
          "exited": !inProp && collapsedSize === "0px" && classes.hidden
        }[state]),
        style: {
          [isHorizontal2 ? "minWidth" : "minHeight"]: collapsedSize,
          ...style2
        },
        ref: handleRef,
        ownerState: {
          ...ownerState,
          state
        },
        ...restChildProps,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CollapseWrapper, {
          ownerState: {
            ...ownerState,
            state
          },
          className: classes.wrapper,
          ref: wrapperRef,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CollapseWrapperInner, {
            ownerState: {
              ...ownerState,
              state
            },
            className: classes.wrapperInner,
            children
          })
        })
      })
    });
  });
  if (Collapse) {
    Collapse.muiSupportAuto = true;
  }
  function getPaperUtilityClass(slot) {
    return generateUtilityClass("MuiPaper", slot);
  }
  generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
  const useUtilityClasses$C = (ownerState) => {
    const {
      square,
      elevation,
      variant,
      classes
    } = ownerState;
    const slots = {
      root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
    };
    return composeClasses(slots, getPaperUtilityClass, classes);
  };
  const PaperRoot = styled("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, styles2[ownerState.variant], !ownerState.square && styles2.rounded, ownerState.variant === "elevation" && styles2[`elevation${ownerState.elevation}`]];
    }
  })(memoTheme(({
    theme
  }) => ({
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.primary,
    transition: theme.transitions.create("box-shadow"),
    variants: [{
      props: ({
        ownerState
      }) => !ownerState.square,
      style: {
        borderRadius: theme.shape.borderRadius
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        border: `1px solid ${(theme.vars || theme).palette.divider}`
      }
    }, {
      props: {
        variant: "elevation"
      },
      style: {
        boxShadow: "var(--Paper-shadow)",
        backgroundImage: "var(--Paper-overlay)"
      }
    }]
  })));
  const Paper = /* @__PURE__ */ React__namespace.forwardRef(function Paper2(inProps, ref) {
    var _a;
    const props = useDefaultProps({
      props: inProps,
      name: "MuiPaper"
    });
    const theme = useTheme();
    const {
      className,
      component = "div",
      elevation = 1,
      square = false,
      variant = "elevation",
      ...other
    } = props;
    const ownerState = {
      ...props,
      component,
      elevation,
      square,
      variant
    };
    const classes = useUtilityClasses$C(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PaperRoot, {
      as: component,
      ownerState,
      className: clsx(classes.root, className),
      ref,
      ...other,
      style: {
        ...variant === "elevation" && {
          "--Paper-shadow": (theme.vars || theme).shadows[elevation],
          ...theme.vars && {
            "--Paper-overlay": (_a = theme.vars.overlays) == null ? void 0 : _a[elevation]
          },
          ...!theme.vars && theme.palette.mode === "dark" && {
            "--Paper-overlay": `linear-gradient(${alpha("#fff", getOverlayAlpha(elevation))}, ${alpha("#fff", getOverlayAlpha(elevation))})`
          }
        },
        ...other.style
      }
    });
  });
  function useSlot(name, parameters) {
    const {
      className,
      elementType: initialElementType,
      ownerState,
      externalForwardedProps,
      internalForwardedProps,
      shouldForwardComponentProp = false,
      ...useSlotPropsParams
    } = parameters;
    const {
      component: rootComponent,
      slots = {
        [name]: void 0
      },
      slotProps = {
        [name]: void 0
      },
      ...other
    } = externalForwardedProps;
    const elementType = slots[name] || initialElementType;
    const resolvedComponentsProps = resolveComponentProps(slotProps[name], ownerState);
    const {
      props: {
        component: slotComponent,
        ...mergedProps
      },
      internalRef
    } = mergeSlotProps$1({
      className,
      ...useSlotPropsParams,
      externalForwardedProps: name === "root" ? other : void 0,
      externalSlotProps: resolvedComponentsProps
    });
    const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, parameters.ref);
    const LeafComponent = name === "root" ? slotComponent || rootComponent : slotComponent;
    const props = appendOwnerState(elementType, {
      ...name === "root" && !rootComponent && !slots[name] && internalForwardedProps,
      ...name !== "root" && !slots[name] && internalForwardedProps,
      ...mergedProps,
      ...LeafComponent && !shouldForwardComponentProp && {
        as: LeafComponent
      },
      ...LeafComponent && shouldForwardComponentProp && {
        component: LeafComponent
      },
      ref
    }, ownerState);
    return [elementType, props];
  }
  function getAlertUtilityClass(slot) {
    return generateUtilityClass("MuiAlert", slot);
  }
  const alertClasses = generateUtilityClasses("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
  function getIconButtonUtilityClass(slot) {
    return generateUtilityClass("MuiIconButton", slot);
  }
  const iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]);
  const useUtilityClasses$B = (ownerState) => {
    const {
      classes,
      disabled,
      color: color2,
      edge,
      size,
      loading
    } = ownerState;
    const slots = {
      root: ["root", loading && "loading", disabled && "disabled", color2 !== "default" && `color${capitalize(color2)}`, edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`],
      loadingIndicator: ["loadingIndicator"],
      loadingWrapper: ["loadingWrapper"]
    };
    return composeClasses(slots, getIconButtonUtilityClass, classes);
  };
  const IconButtonRoot = styled(ButtonBase, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, ownerState.loading && styles2.loading, ownerState.color !== "default" && styles2[`color${capitalize(ownerState.color)}`], ownerState.edge && styles2[`edge${capitalize(ownerState.edge)}`], styles2[`size${capitalize(ownerState.size)}`]];
    }
  })(memoTheme(({
    theme
  }) => ({
    textAlign: "center",
    flex: "0 0 auto",
    fontSize: theme.typography.pxToRem(24),
    padding: 8,
    borderRadius: "50%",
    color: (theme.vars || theme).palette.action.active,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shortest
    }),
    variants: [{
      props: (props) => !props.disableRipple,
      style: {
        "--IconButton-hoverBg": theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
        "&:hover": {
          backgroundColor: "var(--IconButton-hoverBg)",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      }
    }, {
      props: {
        edge: "start"
      },
      style: {
        marginLeft: -12
      }
    }, {
      props: {
        edge: "start",
        size: "small"
      },
      style: {
        marginLeft: -3
      }
    }, {
      props: {
        edge: "end"
      },
      style: {
        marginRight: -12
      }
    }, {
      props: {
        edge: "end",
        size: "small"
      },
      style: {
        marginRight: -3
      }
    }]
  })), memoTheme(({
    theme
  }) => ({
    variants: [{
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit"
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color2]) => ({
      props: {
        color: color2
      },
      style: {
        color: (theme.vars || theme).palette[color2].main
      }
    })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color2]) => ({
      props: {
        color: color2
      },
      style: {
        "--IconButton-hoverBg": theme.vars ? `rgba(${(theme.vars || theme).palette[color2].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha((theme.vars || theme).palette[color2].main, theme.palette.action.hoverOpacity)
      }
    })), {
      props: {
        size: "small"
      },
      style: {
        padding: 5,
        fontSize: theme.typography.pxToRem(18)
      }
    }, {
      props: {
        size: "large"
      },
      style: {
        padding: 12,
        fontSize: theme.typography.pxToRem(28)
      }
    }],
    [`&.${iconButtonClasses.disabled}`]: {
      backgroundColor: "transparent",
      color: (theme.vars || theme).palette.action.disabled
    },
    [`&.${iconButtonClasses.loading}`]: {
      color: "transparent"
    }
  })));
  const IconButtonLoadingIndicator = styled("span", {
    name: "MuiIconButton",
    slot: "LoadingIndicator",
    overridesResolver: (props, styles2) => styles2.loadingIndicator
  })(({
    theme
  }) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: (theme.vars || theme).palette.action.disabled,
    variants: [{
      props: {
        loading: true
      },
      style: {
        display: "flex"
      }
    }]
  }));
  const IconButton = /* @__PURE__ */ React__namespace.forwardRef(function IconButton2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiIconButton"
    });
    const {
      edge = false,
      children,
      className,
      color: color2 = "default",
      disabled = false,
      disableFocusRipple = false,
      size = "medium",
      id: idProp,
      loading = null,
      loadingIndicator: loadingIndicatorProp,
      ...other
    } = props;
    const loadingId = useId(idProp);
    const loadingIndicator = loadingIndicatorProp ?? /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {
      "aria-labelledby": loadingId,
      color: "inherit",
      size: 16
    });
    const ownerState = {
      ...props,
      edge,
      color: color2,
      disabled,
      disableFocusRipple,
      loading,
      loadingIndicator,
      size
    };
    const classes = useUtilityClasses$B(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(IconButtonRoot, {
      id: loading ? loadingId : idProp,
      className: clsx(classes.root, className),
      centerRipple: true,
      focusRipple: !disableFocusRipple,
      disabled: disabled || loading,
      ref,
      ...other,
      ownerState,
      children: [typeof loading === "boolean" && // use plain HTML span to minimize the runtime overhead
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: classes.loadingWrapper,
        style: {
          display: "contents"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconButtonLoadingIndicator, {
          className: classes.loadingIndicator,
          ownerState,
          children: loading && loadingIndicator
        })
      }), children]
    });
  });
  const SuccessOutlinedIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }));
  const ReportProblemOutlinedIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }));
  const ErrorOutlineIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }));
  const InfoOutlinedIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }));
  const ClearIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }));
  const useUtilityClasses$A = (ownerState) => {
    const {
      variant,
      color: color2,
      severity,
      classes
    } = ownerState;
    const slots = {
      root: ["root", `color${capitalize(color2 || severity)}`, `${variant}${capitalize(color2 || severity)}`, `${variant}`],
      icon: ["icon"],
      message: ["message"],
      action: ["action"]
    };
    return composeClasses(slots, getAlertUtilityClass, classes);
  };
  const AlertRoot = styled(Paper, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, styles2[ownerState.variant], styles2[`${ownerState.variant}${capitalize(ownerState.color || ownerState.severity)}`]];
    }
  })(memoTheme(({
    theme
  }) => {
    const getColor = theme.palette.mode === "light" ? darken : lighten;
    const getBackgroundColor = theme.palette.mode === "light" ? lighten : darken;
    return {
      ...theme.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["light"])).map(([color2]) => ({
        props: {
          colorSeverity: color2,
          variant: "standard"
        },
        style: {
          color: theme.vars ? theme.vars.palette.Alert[`${color2}Color`] : getColor(theme.palette[color2].light, 0.6),
          backgroundColor: theme.vars ? theme.vars.palette.Alert[`${color2}StandardBg`] : getBackgroundColor(theme.palette[color2].light, 0.9),
          [`& .${alertClasses.icon}`]: theme.vars ? {
            color: theme.vars.palette.Alert[`${color2}IconColor`]
          } : {
            color: theme.palette[color2].main
          }
        }
      })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["light"])).map(([color2]) => ({
        props: {
          colorSeverity: color2,
          variant: "outlined"
        },
        style: {
          color: theme.vars ? theme.vars.palette.Alert[`${color2}Color`] : getColor(theme.palette[color2].light, 0.6),
          border: `1px solid ${(theme.vars || theme).palette[color2].light}`,
          [`& .${alertClasses.icon}`]: theme.vars ? {
            color: theme.vars.palette.Alert[`${color2}IconColor`]
          } : {
            color: theme.palette[color2].main
          }
        }
      })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color2]) => ({
        props: {
          colorSeverity: color2,
          variant: "filled"
        },
        style: {
          fontWeight: theme.typography.fontWeightMedium,
          ...theme.vars ? {
            color: theme.vars.palette.Alert[`${color2}FilledColor`],
            backgroundColor: theme.vars.palette.Alert[`${color2}FilledBg`]
          } : {
            backgroundColor: theme.palette.mode === "dark" ? theme.palette[color2].dark : theme.palette[color2].main,
            color: theme.palette.getContrastText(theme.palette[color2].main)
          }
        }
      }))]
    };
  }));
  const AlertIcon = styled("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (props, styles2) => styles2.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  });
  const AlertMessage = styled("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (props, styles2) => styles2.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  });
  const AlertAction = styled("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (props, styles2) => styles2.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  });
  const defaultIconMapping = {
    success: /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessOutlinedIcon, {
      fontSize: "inherit"
    }),
    warning: /* @__PURE__ */ jsxRuntimeExports.jsx(ReportProblemOutlinedIcon, {
      fontSize: "inherit"
    }),
    error: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorOutlineIcon, {
      fontSize: "inherit"
    }),
    info: /* @__PURE__ */ jsxRuntimeExports.jsx(InfoOutlinedIcon, {
      fontSize: "inherit"
    })
  };
  const Alert = /* @__PURE__ */ React__namespace.forwardRef(function Alert2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiAlert"
    });
    const {
      action,
      children,
      className,
      closeText = "Close",
      color: color2,
      components = {},
      componentsProps = {},
      icon,
      iconMapping = defaultIconMapping,
      onClose,
      role = "alert",
      severity = "success",
      slotProps = {},
      slots = {},
      variant = "standard",
      ...other
    } = props;
    const ownerState = {
      ...props,
      color: color2,
      severity,
      variant,
      colorSeverity: color2 || severity
    };
    const classes = useUtilityClasses$A(ownerState);
    const externalForwardedProps = {
      slots: {
        closeButton: components.CloseButton,
        closeIcon: components.CloseIcon,
        ...slots
      },
      slotProps: {
        ...componentsProps,
        ...slotProps
      }
    };
    const [RootSlot, rootSlotProps] = useSlot("root", {
      ref,
      shouldForwardComponentProp: true,
      className: clsx(classes.root, className),
      elementType: AlertRoot,
      externalForwardedProps: {
        ...externalForwardedProps,
        ...other
      },
      ownerState,
      additionalProps: {
        role,
        elevation: 0
      }
    });
    const [IconSlot, iconSlotProps] = useSlot("icon", {
      className: classes.icon,
      elementType: AlertIcon,
      externalForwardedProps,
      ownerState
    });
    const [MessageSlot, messageSlotProps] = useSlot("message", {
      className: classes.message,
      elementType: AlertMessage,
      externalForwardedProps,
      ownerState
    });
    const [ActionSlot, actionSlotProps] = useSlot("action", {
      className: classes.action,
      elementType: AlertAction,
      externalForwardedProps,
      ownerState
    });
    const [CloseButtonSlot, closeButtonProps] = useSlot("closeButton", {
      elementType: IconButton,
      externalForwardedProps,
      ownerState
    });
    const [CloseIconSlot, closeIconProps] = useSlot("closeIcon", {
      elementType: ClearIcon,
      externalForwardedProps,
      ownerState
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
      ...rootSlotProps,
      children: [icon !== false ? /* @__PURE__ */ jsxRuntimeExports.jsx(IconSlot, {
        ...iconSlotProps,
        children: icon || iconMapping[severity] || defaultIconMapping[severity]
      }) : null, /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSlot, {
        ...messageSlotProps,
        children
      }), action != null ? /* @__PURE__ */ jsxRuntimeExports.jsx(ActionSlot, {
        ...actionSlotProps,
        children: action
      }) : null, action == null && onClose ? /* @__PURE__ */ jsxRuntimeExports.jsx(ActionSlot, {
        ...actionSlotProps,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloseButtonSlot, {
          size: "small",
          "aria-label": closeText,
          title: closeText,
          color: "inherit",
          onClick: onClose,
          ...closeButtonProps,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloseIconSlot, {
            fontSize: "small",
            ...closeIconProps
          })
        })
      }) : null]
    });
  });
  function getTypographyUtilityClass(slot) {
    return generateUtilityClass("MuiTypography", slot);
  }
  generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
  const v6Colors = {
    primary: true,
    secondary: true,
    error: true,
    info: true,
    success: true,
    warning: true,
    textPrimary: true,
    textSecondary: true,
    textDisabled: true
  };
  const extendSxProp = internal_createExtendSxProp();
  const useUtilityClasses$z = (ownerState) => {
    const {
      align,
      gutterBottom,
      noWrap,
      paragraph,
      variant,
      classes
    } = ownerState;
    const slots = {
      root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
    };
    return composeClasses(slots, getTypographyUtilityClass, classes);
  };
  const TypographyRoot = styled("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, ownerState.variant && styles2[ownerState.variant], ownerState.align !== "inherit" && styles2[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles2.noWrap, ownerState.gutterBottom && styles2.gutterBottom, ownerState.paragraph && styles2.paragraph];
    }
  })(memoTheme(({
    theme
  }) => {
    var _a;
    return {
      margin: 0,
      variants: [{
        props: {
          variant: "inherit"
        },
        style: {
          // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
          font: "inherit",
          lineHeight: "inherit",
          letterSpacing: "inherit"
        }
      }, ...Object.entries(theme.typography).filter(([variant, value]) => variant !== "inherit" && value && typeof value === "object").map(([variant, value]) => ({
        props: {
          variant
        },
        style: value
      })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color2]) => ({
        props: {
          color: color2
        },
        style: {
          color: (theme.vars || theme).palette[color2].main
        }
      })), ...Object.entries(((_a = theme.palette) == null ? void 0 : _a.text) || {}).filter(([, value]) => typeof value === "string").map(([color2]) => ({
        props: {
          color: `text${capitalize(color2)}`
        },
        style: {
          color: (theme.vars || theme).palette.text[color2]
        }
      })), {
        props: ({
          ownerState
        }) => ownerState.align !== "inherit",
        style: {
          textAlign: "var(--Typography-textAlign)"
        }
      }, {
        props: ({
          ownerState
        }) => ownerState.noWrap,
        style: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      }, {
        props: ({
          ownerState
        }) => ownerState.gutterBottom,
        style: {
          marginBottom: "0.35em"
        }
      }, {
        props: ({
          ownerState
        }) => ownerState.paragraph,
        style: {
          marginBottom: 16
        }
      }]
    };
  }));
  const defaultVariantMapping = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p"
  };
  const Typography = /* @__PURE__ */ React__namespace.forwardRef(function Typography2(inProps, ref) {
    const {
      color: color2,
      ...themeProps
    } = useDefaultProps({
      props: inProps,
      name: "MuiTypography"
    });
    const isSxColor = !v6Colors[color2];
    const props = extendSxProp({
      ...themeProps,
      ...isSxColor && {
        color: color2
      }
    });
    const {
      align = "inherit",
      className,
      component,
      gutterBottom = false,
      noWrap = false,
      paragraph = false,
      variant = "body1",
      variantMapping = defaultVariantMapping,
      ...other
    } = props;
    const ownerState = {
      ...props,
      align,
      color: color2,
      className,
      component,
      gutterBottom,
      noWrap,
      paragraph,
      variant,
      variantMapping
    };
    const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
    const classes = useUtilityClasses$z(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TypographyRoot, {
      as: Component,
      ref,
      className: clsx(classes.root, className),
      ...other,
      ownerState,
      style: {
        ...align !== "inherit" && {
          "--Typography-textAlign": align
        },
        ...other.style
      }
    });
  });
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }
  function getWindow(node2) {
    if (node2 == null) {
      return window;
    }
    if (node2.toString() !== "[object Window]") {
      var ownerDocument2 = node2.ownerDocument;
      return ownerDocument2 ? ownerDocument2.defaultView || window : window;
    }
    return node2;
  }
  function isElement(node2) {
    var OwnElement = getWindow(node2).Element;
    return node2 instanceof OwnElement || node2 instanceof Element;
  }
  function isHTMLElement$1(node2) {
    var OwnElement = getWindow(node2).HTMLElement;
    return node2 instanceof OwnElement || node2 instanceof HTMLElement;
  }
  function isShadowRoot(node2) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node2).ShadowRoot;
    return node2 instanceof OwnElement || node2 instanceof ShadowRoot;
  }
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style2 = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement$1(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style2);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style2 = styleProperties.reduce(function(style3, property) {
          style3[property] = "";
          return style3;
        }, {});
        if (!isHTMLElement$1(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style2);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  const applyStyles$1 = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect$2,
    requires: ["computeStyles"]
  };
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }
  var max = Math.max;
  var min = Math.min;
  var round$1 = Math.round;
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement$1(element)) {
      scaleX = element.offsetWidth > 0 ? round$1(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round$1(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width2 = clientRect.width / scaleX;
    var height2 = clientRect.height / scaleY;
    return {
      width: width2,
      height: height2,
      top: y,
      right: x + width2,
      bottom: y + height2,
      left: x,
      x,
      y
    };
  }
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width2 = element.offsetWidth;
    var height2 = element.offsetHeight;
    if (Math.abs(clientRect.width - width2) <= 1) {
      width2 = clientRect.width;
    }
    if (Math.abs(clientRect.height - height2) <= 1) {
      height2 = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width2,
      height: height2
    };
  }
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next2 = child;
      do {
        if (next2 && parent.isSameNode(next2)) {
          return true;
        }
        next2 = next2.parentNode || next2.host;
      } while (next2);
    }
    return false;
  }
  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }
  function getTrueOffsetParent(element) {
    if (!isHTMLElement$1(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement$1(element)) {
      var elementCss = getComputedStyle(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement$1(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css2 = getComputedStyle(currentNode);
      if (css2.transform !== "none" || css2.perspective !== "none" || css2.contain === "paint" || ["transform", "perspective"].indexOf(css2.willChange) !== -1 || isFirefox && css2.willChange === "filter" || isFirefox && css2.filter && css2.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }
  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }
  function withinMaxClamp(min2, value, max2) {
    var v = within(min2, value, max2);
    return v > max2 ? max2 : v;
  }
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key2) {
      hashMap[key2] = value;
      return hashMap;
    }, {});
  }
  var toPaddingObject = function toPaddingObject2(padding2, state) {
    padding2 = typeof padding2 === "function" ? padding2(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding2;
    return mergePaddingObject(typeof padding2 !== "number" ? padding2 : expandToHashMap(padding2, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len2 = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len2] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len2];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len2] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len2] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
  function effect$1(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  }
  const arrow$1 = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect$1,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
  function getVariation(placement) {
    return placement.split("-")[1];
  }
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round$1(x * dpr) / dpr || 0,
      y: round$1(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position2 = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle(offsetParent).position !== "static" && position2 === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position: position2
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x,
      y
    }, getWindow(popper2)) : {
      x,
      y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  const computeStyles$1 = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };
  var passive = {
    passive: true
  };
  function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  const eventListeners = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect,
    data: {}
  };
  var hash$1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash$1[matched];
    });
  }
  var hash = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash[matched];
    });
  }
  function getWindowScroll(node2) {
    var win = getWindow(node2);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width2 = html.clientWidth;
    var height2 = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width2 = visualViewport.width;
      height2 = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width: width2,
      height: height2,
      x: x + getWindowScrollBarX(element),
      y
    };
  }
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width2 = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height2 = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle(body || html).direction === "rtl") {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width2;
    }
    return {
      width: width2,
      height: height2,
      x,
      y
    };
  }
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }
  function getScrollParent(node2) {
    if (["html", "body", "#document"].indexOf(getNodeName(node2)) >= 0) {
      return node2.ownerDocument.body;
    }
    if (isHTMLElement$1(node2) && isScrollParent(node2)) {
      return node2;
    }
    return getScrollParent(getParentNode(node2));
  }
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement$1(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len2 = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len2] / 2 - element[len2] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len2] / 2 - element[len2] / 2);
          break;
      }
    }
    return offsets;
  }
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding2 = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding2 !== "number" ? padding2 : expandToHashMap(padding2, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key2) {
        var multiply = [right, bottom].indexOf(key2) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key2) >= 0 ? "y" : "x";
        overflowOffsets[key2] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding2 = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding: padding2
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
      return overflows[a] - overflows[b];
    });
  }
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding2 = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding: padding2,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i = 0; i < placements2.length; i++) {
      var placement = placements2[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len2 = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding: padding2
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len2] > popperRect[len2]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break") break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  const flip$1 = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  const hide$1 = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
  }
  const offset$1 = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      placement: state.placement
    });
  }
  const popperOffsets$1 = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding2 = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding: padding2,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len2 = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min$1 = offset2 + overflow[mainSide];
      var max$1 = offset2 - overflow[altSide];
      var additive = tether ? -popperRect[len2] / 2 : 0;
      var minLen = variation === start ? referenceRect[len2] : popperRect[len2];
      var maxLen = variation === start ? -popperRect[len2] : -referenceRect[len2];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len2], arrowRect[len2]);
      var minOffset = isBasePlacement ? referenceRect[len2] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len2] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset2 + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
  const preventOverflow$1 = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  function getNodeScroll(node2) {
    if (node2 === getWindow(node2) || !isHTMLElement$1(node2)) {
      return getWindowScroll(node2);
    } else {
      return getHTMLElementScroll(node2);
    }
  }
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round$1(rect.width) / element.offsetWidth || 1;
    var scaleY = round$1(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement$1(offsetParent);
    var offsetParentIsScaled = isHTMLElement$1(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement$1(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }
  function debounce(fn2) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn2());
          });
        });
      }
      return pending;
    };
  }
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key2) {
      return merged[key2];
    });
  }
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper2(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn2 === "function") {
              state = fn2({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
          if (typeof effect2 === "function") {
            var cleanupFn = effect2({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn2) {
          return fn2();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }
  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });
  function getContainer$1(container) {
    return typeof container === "function" ? container() : container;
  }
  const Portal = /* @__PURE__ */ React__namespace.forwardRef(function Portal2(props, forwardedRef) {
    const {
      children,
      container,
      disablePortal = false
    } = props;
    const [mountNode, setMountNode] = React__namespace.useState(null);
    const handleRef = useForkRef(/* @__PURE__ */ React__namespace.isValidElement(children) ? getReactElementRef(children) : null, forwardedRef);
    useEnhancedEffect(() => {
      if (!disablePortal) {
        setMountNode(getContainer$1(container) || document.body);
      }
    }, [container, disablePortal]);
    useEnhancedEffect(() => {
      if (mountNode && !disablePortal) {
        setRef(forwardedRef, mountNode);
        return () => {
          setRef(forwardedRef, null);
        };
      }
      return void 0;
    }, [forwardedRef, mountNode, disablePortal]);
    if (disablePortal) {
      if (/* @__PURE__ */ React__namespace.isValidElement(children)) {
        const newProps = {
          ref: handleRef
        };
        return /* @__PURE__ */ React__namespace.cloneElement(children, newProps);
      }
      return children;
    }
    return mountNode ? /* @__PURE__ */ ReactDOM__default__namespace.createPortal(children, mountNode) : mountNode;
  });
  function getPopperUtilityClass(slot) {
    return generateUtilityClass("MuiPopper", slot);
  }
  generateUtilityClasses("MuiPopper", ["root"]);
  function flipPlacement(placement, direction) {
    if (direction === "ltr") {
      return placement;
    }
    switch (placement) {
      case "bottom-end":
        return "bottom-start";
      case "bottom-start":
        return "bottom-end";
      case "top-end":
        return "top-start";
      case "top-start":
        return "top-end";
      default:
        return placement;
    }
  }
  function resolveAnchorEl$1(anchorEl) {
    return typeof anchorEl === "function" ? anchorEl() : anchorEl;
  }
  function isHTMLElement(element) {
    return element.nodeType !== void 0;
  }
  const useUtilityClasses$y = (ownerState) => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, getPopperUtilityClass, classes);
  };
  const defaultPopperOptions = {};
  const PopperTooltip = /* @__PURE__ */ React__namespace.forwardRef(function PopperTooltip2(props, forwardedRef) {
    const {
      anchorEl,
      children,
      direction,
      disablePortal,
      modifiers,
      open: open2,
      placement: initialPlacement,
      popperOptions,
      popperRef: popperRefProp,
      slotProps = {},
      slots = {},
      TransitionProps,
      // @ts-ignore internal logic
      ownerState: ownerStateProp,
      // prevent from spreading to DOM, it can come from the parent component e.g. Select.
      ...other
    } = props;
    const tooltipRef = React__namespace.useRef(null);
    const ownRef = useForkRef(tooltipRef, forwardedRef);
    const popperRef = React__namespace.useRef(null);
    const handlePopperRef = useForkRef(popperRef, popperRefProp);
    const handlePopperRefRef = React__namespace.useRef(handlePopperRef);
    useEnhancedEffect(() => {
      handlePopperRefRef.current = handlePopperRef;
    }, [handlePopperRef]);
    React__namespace.useImperativeHandle(popperRefProp, () => popperRef.current, []);
    const rtlPlacement = flipPlacement(initialPlacement, direction);
    const [placement, setPlacement] = React__namespace.useState(rtlPlacement);
    const [resolvedAnchorElement, setResolvedAnchorElement] = React__namespace.useState(resolveAnchorEl$1(anchorEl));
    React__namespace.useEffect(() => {
      if (popperRef.current) {
        popperRef.current.forceUpdate();
      }
    });
    React__namespace.useEffect(() => {
      if (anchorEl) {
        setResolvedAnchorElement(resolveAnchorEl$1(anchorEl));
      }
    }, [anchorEl]);
    useEnhancedEffect(() => {
      if (!resolvedAnchorElement || !open2) {
        return void 0;
      }
      const handlePopperUpdate = (data) => {
        setPlacement(data.placement);
      };
      let popperModifiers = [{
        name: "preventOverflow",
        options: {
          altBoundary: disablePortal
        }
      }, {
        name: "flip",
        options: {
          altBoundary: disablePortal
        }
      }, {
        name: "onUpdate",
        enabled: true,
        phase: "afterWrite",
        fn: ({
          state
        }) => {
          handlePopperUpdate(state);
        }
      }];
      if (modifiers != null) {
        popperModifiers = popperModifiers.concat(modifiers);
      }
      if (popperOptions && popperOptions.modifiers != null) {
        popperModifiers = popperModifiers.concat(popperOptions.modifiers);
      }
      const popper2 = createPopper(resolvedAnchorElement, tooltipRef.current, {
        placement: rtlPlacement,
        ...popperOptions,
        modifiers: popperModifiers
      });
      handlePopperRefRef.current(popper2);
      return () => {
        popper2.destroy();
        handlePopperRefRef.current(null);
      };
    }, [resolvedAnchorElement, disablePortal, modifiers, open2, popperOptions, rtlPlacement]);
    const childProps = {
      placement
    };
    if (TransitionProps !== null) {
      childProps.TransitionProps = TransitionProps;
    }
    const classes = useUtilityClasses$y(props);
    const Root = slots.root ?? "div";
    const rootProps = useSlotProps({
      elementType: Root,
      externalSlotProps: slotProps.root,
      externalForwardedProps: other,
      additionalProps: {
        role: "tooltip",
        ref: ownRef
      },
      ownerState: props,
      className: classes.root
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, {
      ...rootProps,
      children: typeof children === "function" ? children(childProps) : children
    });
  });
  const Popper$1 = /* @__PURE__ */ React__namespace.forwardRef(function Popper2(props, forwardedRef) {
    const {
      anchorEl,
      children,
      container: containerProp,
      direction = "ltr",
      disablePortal = false,
      keepMounted = false,
      modifiers,
      open: open2,
      placement = "bottom",
      popperOptions = defaultPopperOptions,
      popperRef,
      style: style2,
      transition = false,
      slotProps = {},
      slots = {},
      ...other
    } = props;
    const [exited, setExited] = React__namespace.useState(true);
    const handleEnter = () => {
      setExited(false);
    };
    const handleExited = () => {
      setExited(true);
    };
    if (!keepMounted && !open2 && (!transition || exited)) {
      return null;
    }
    let container;
    if (containerProp) {
      container = containerProp;
    } else if (anchorEl) {
      const resolvedAnchorEl = resolveAnchorEl$1(anchorEl);
      container = resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body;
    }
    const display = !open2 && keepMounted && (!transition || exited) ? "none" : void 0;
    const transitionProps = transition ? {
      in: open2,
      onEnter: handleEnter,
      onExited: handleExited
    } : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, {
      disablePortal,
      container,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PopperTooltip, {
        anchorEl,
        direction,
        disablePortal,
        modifiers,
        ref: forwardedRef,
        open: transition ? !exited : open2,
        placement,
        popperOptions,
        popperRef,
        slotProps,
        slots,
        ...other,
        style: {
          // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
          position: "fixed",
          // Fix Popper.js display issue
          top: 0,
          left: 0,
          display,
          ...style2
        },
        TransitionProps: transitionProps,
        children
      })
    });
  });
  const PopperRoot = styled(Popper$1, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (props, styles2) => styles2.root
  })({});
  const Popper = /* @__PURE__ */ React__namespace.forwardRef(function Popper22(inProps, ref) {
    const isRtl = useRtl();
    const props = useDefaultProps({
      props: inProps,
      name: "MuiPopper"
    });
    const {
      anchorEl,
      component,
      components,
      componentsProps,
      container,
      disablePortal,
      keepMounted,
      modifiers,
      open: open2,
      placement,
      popperOptions,
      popperRef,
      transition,
      slots,
      slotProps,
      ...other
    } = props;
    const RootComponent = (slots == null ? void 0 : slots.root) ?? (components == null ? void 0 : components.Root);
    const otherProps = {
      anchorEl,
      container,
      disablePortal,
      keepMounted,
      modifiers,
      open: open2,
      placement,
      popperOptions,
      popperRef,
      transition,
      ...other
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PopperRoot, {
      as: component,
      direction: isRtl ? "rtl" : "ltr",
      slots: {
        root: RootComponent
      },
      slotProps: slotProps ?? componentsProps,
      ...otherProps,
      ref
    });
  });
  function getStyleValue(value) {
    return parseInt(value, 10) || 0;
  }
  const styles$2 = {
    shadow: {
      // Visibility needed to hide the extra text area on iPads
      visibility: "hidden",
      // Remove from the content flow
      position: "absolute",
      // Ignore the scrollbar width
      overflow: "hidden",
      height: 0,
      top: 0,
      left: 0,
      // Create a new layer, increase the isolation of the computed values
      transform: "translateZ(0)"
    }
  };
  function isObjectEmpty(object) {
    for (const _ in object) {
      return false;
    }
    return true;
  }
  function isEmpty$1(obj) {
    return isObjectEmpty(obj) || obj.outerHeightStyle === 0 && !obj.overflowing;
  }
  const TextareaAutosize = /* @__PURE__ */ React__namespace.forwardRef(function TextareaAutosize2(props, forwardedRef) {
    const {
      onChange,
      maxRows,
      minRows = 1,
      style: style2,
      value,
      ...other
    } = props;
    const {
      current: isControlled
    } = React__namespace.useRef(value != null);
    const textareaRef = React__namespace.useRef(null);
    const handleRef = useForkRef(forwardedRef, textareaRef);
    const heightRef = React__namespace.useRef(null);
    const hiddenTextareaRef = React__namespace.useRef(null);
    const calculateTextareaStyles = React__namespace.useCallback(() => {
      const textarea = textareaRef.current;
      const hiddenTextarea = hiddenTextareaRef.current;
      if (!textarea || !hiddenTextarea) {
        return void 0;
      }
      const containerWindow = ownerWindow(textarea);
      const computedStyle = containerWindow.getComputedStyle(textarea);
      if (computedStyle.width === "0px") {
        return {
          outerHeightStyle: 0,
          overflowing: false
        };
      }
      hiddenTextarea.style.width = computedStyle.width;
      hiddenTextarea.value = textarea.value || props.placeholder || "x";
      if (hiddenTextarea.value.slice(-1) === "\n") {
        hiddenTextarea.value += " ";
      }
      const boxSizing2 = computedStyle.boxSizing;
      const padding2 = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
      const border2 = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
      const innerHeight = hiddenTextarea.scrollHeight;
      hiddenTextarea.value = "x";
      const singleRowHeight = hiddenTextarea.scrollHeight;
      let outerHeight = innerHeight;
      if (minRows) {
        outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
      }
      if (maxRows) {
        outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
      }
      outerHeight = Math.max(outerHeight, singleRowHeight);
      const outerHeightStyle = outerHeight + (boxSizing2 === "border-box" ? padding2 + border2 : 0);
      const overflowing = Math.abs(outerHeight - innerHeight) <= 1;
      return {
        outerHeightStyle,
        overflowing
      };
    }, [maxRows, minRows, props.placeholder]);
    const didHeightChange = useEventCallback(() => {
      const textarea = textareaRef.current;
      const textareaStyles = calculateTextareaStyles();
      if (!textarea || !textareaStyles || isEmpty$1(textareaStyles)) {
        return false;
      }
      const outerHeightStyle = textareaStyles.outerHeightStyle;
      return heightRef.current != null && heightRef.current !== outerHeightStyle;
    });
    const syncHeight = React__namespace.useCallback(() => {
      const textarea = textareaRef.current;
      const textareaStyles = calculateTextareaStyles();
      if (!textarea || !textareaStyles || isEmpty$1(textareaStyles)) {
        return;
      }
      const outerHeightStyle = textareaStyles.outerHeightStyle;
      if (heightRef.current !== outerHeightStyle) {
        heightRef.current = outerHeightStyle;
        textarea.style.height = `${outerHeightStyle}px`;
      }
      textarea.style.overflow = textareaStyles.overflowing ? "hidden" : "";
    }, [calculateTextareaStyles]);
    const frameRef = React__namespace.useRef(-1);
    useEnhancedEffect(() => {
      const debouncedHandleResize = debounce$1(syncHeight);
      const textarea = textareaRef == null ? void 0 : textareaRef.current;
      if (!textarea) {
        return void 0;
      }
      const containerWindow = ownerWindow(textarea);
      containerWindow.addEventListener("resize", debouncedHandleResize);
      let resizeObserver;
      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(() => {
          if (didHeightChange()) {
            resizeObserver.unobserve(textarea);
            cancelAnimationFrame(frameRef.current);
            syncHeight();
            frameRef.current = requestAnimationFrame(() => {
              resizeObserver.observe(textarea);
            });
          }
        });
        resizeObserver.observe(textarea);
      }
      return () => {
        debouncedHandleResize.clear();
        cancelAnimationFrame(frameRef.current);
        containerWindow.removeEventListener("resize", debouncedHandleResize);
        if (resizeObserver) {
          resizeObserver.disconnect();
        }
      };
    }, [calculateTextareaStyles, syncHeight, didHeightChange]);
    useEnhancedEffect(() => {
      syncHeight();
    });
    const handleChange = (event) => {
      if (!isControlled) {
        syncHeight();
      }
      if (onChange) {
        onChange(event);
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(React__namespace.Fragment, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("textarea", {
        value,
        onChange: handleChange,
        ref: handleRef,
        rows: minRows,
        style: style2,
        ...other
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", {
        "aria-hidden": true,
        className: props.className,
        readOnly: true,
        ref: hiddenTextareaRef,
        tabIndex: -1,
        style: {
          ...styles$2.shadow,
          ...style2,
          paddingTop: 0,
          paddingBottom: 0
        }
      })]
    });
  });
  function isHostComponent(element) {
    return typeof element === "string";
  }
  function formControlState({
    props,
    states,
    muiFormControl
  }) {
    return states.reduce((acc, state) => {
      acc[state] = props[state];
      if (muiFormControl) {
        if (typeof props[state] === "undefined") {
          acc[state] = muiFormControl[state];
        }
      }
      return acc;
    }, {});
  }
  const FormControlContext = /* @__PURE__ */ React__namespace.createContext(void 0);
  function useFormControl() {
    return React__namespace.useContext(FormControlContext);
  }
  function hasValue(value) {
    return value != null && !(Array.isArray(value) && value.length === 0);
  }
  function isFilled(obj, SSR = false) {
    return obj && (hasValue(obj.value) && obj.value !== "" || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== "");
  }
  function isAdornedStart(obj) {
    return obj.startAdornment;
  }
  function getInputBaseUtilityClass(slot) {
    return generateUtilityClass("MuiInputBase", slot);
  }
  const inputBaseClasses = generateUtilityClasses("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
  var _InputGlobalStyles;
  const rootOverridesResolver = (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.formControl && styles2.formControl, ownerState.startAdornment && styles2.adornedStart, ownerState.endAdornment && styles2.adornedEnd, ownerState.error && styles2.error, ownerState.size === "small" && styles2.sizeSmall, ownerState.multiline && styles2.multiline, ownerState.color && styles2[`color${capitalize(ownerState.color)}`], ownerState.fullWidth && styles2.fullWidth, ownerState.hiddenLabel && styles2.hiddenLabel];
  };
  const inputOverridesResolver = (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.input, ownerState.size === "small" && styles2.inputSizeSmall, ownerState.multiline && styles2.inputMultiline, ownerState.type === "search" && styles2.inputTypeSearch, ownerState.startAdornment && styles2.inputAdornedStart, ownerState.endAdornment && styles2.inputAdornedEnd, ownerState.hiddenLabel && styles2.inputHiddenLabel];
  };
  const useUtilityClasses$x = (ownerState) => {
    const {
      classes,
      color: color2,
      disabled,
      error,
      endAdornment,
      focused,
      formControl,
      fullWidth,
      hiddenLabel,
      multiline,
      readOnly,
      size,
      startAdornment,
      type
    } = ownerState;
    const slots = {
      root: ["root", `color${capitalize(color2)}`, disabled && "disabled", error && "error", fullWidth && "fullWidth", focused && "focused", formControl && "formControl", size && size !== "medium" && `size${capitalize(size)}`, multiline && "multiline", startAdornment && "adornedStart", endAdornment && "adornedEnd", hiddenLabel && "hiddenLabel", readOnly && "readOnly"],
      input: ["input", disabled && "disabled", type === "search" && "inputTypeSearch", multiline && "inputMultiline", size === "small" && "inputSizeSmall", hiddenLabel && "inputHiddenLabel", startAdornment && "inputAdornedStart", endAdornment && "inputAdornedEnd", readOnly && "readOnly"]
    };
    return composeClasses(slots, getInputBaseUtilityClass, classes);
  };
  const InputBaseRoot = styled("div", {
    name: "MuiInputBase",
    slot: "Root",
    overridesResolver: rootOverridesResolver
  })(memoTheme(({
    theme
  }) => ({
    ...theme.typography.body1,
    color: (theme.vars || theme).palette.text.primary,
    lineHeight: "1.4375em",
    // 23px
    boxSizing: "border-box",
    // Prevent padding issue with fullWidth.
    position: "relative",
    cursor: "text",
    display: "inline-flex",
    alignItems: "center",
    [`&.${inputBaseClasses.disabled}`]: {
      color: (theme.vars || theme).palette.text.disabled,
      cursor: "default"
    },
    variants: [{
      props: ({
        ownerState
      }) => ownerState.multiline,
      style: {
        padding: "4px 0 5px"
      }
    }, {
      props: ({
        ownerState,
        size
      }) => ownerState.multiline && size === "small",
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.fullWidth,
      style: {
        width: "100%"
      }
    }]
  })));
  const InputBaseInput = styled("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: inputOverridesResolver
  })(memoTheme(({
    theme
  }) => {
    const light2 = theme.palette.mode === "light";
    const placeholder = {
      color: "currentColor",
      ...theme.vars ? {
        opacity: theme.vars.opacity.inputPlaceholder
      } : {
        opacity: light2 ? 0.42 : 0.5
      },
      transition: theme.transitions.create("opacity", {
        duration: theme.transitions.duration.shorter
      })
    };
    const placeholderHidden = {
      opacity: "0 !important"
    };
    const placeholderVisible = theme.vars ? {
      opacity: theme.vars.opacity.inputPlaceholder
    } : {
      opacity: light2 ? 0.42 : 0.5
    };
    return {
      font: "inherit",
      letterSpacing: "inherit",
      color: "currentColor",
      padding: "4px 0 5px",
      border: 0,
      boxSizing: "content-box",
      background: "none",
      height: "1.4375em",
      // Reset 23pxthe native input line-height
      margin: 0,
      // Reset for Safari
      WebkitTapHighlightColor: "transparent",
      display: "block",
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: "100%",
      "&::-webkit-input-placeholder": placeholder,
      "&::-moz-placeholder": placeholder,
      // Firefox 19+
      "&::-ms-input-placeholder": placeholder,
      // Edge
      "&:focus": {
        outline: 0
      },
      // Reset Firefox invalid required input style
      "&:invalid": {
        boxShadow: "none"
      },
      "&::-webkit-search-decoration": {
        // Remove the padding when type=search.
        WebkitAppearance: "none"
      },
      // Show and hide the placeholder logic
      [`label[data-shrink=false] + .${inputBaseClasses.formControl} &`]: {
        "&::-webkit-input-placeholder": placeholderHidden,
        "&::-moz-placeholder": placeholderHidden,
        // Firefox 19+
        "&::-ms-input-placeholder": placeholderHidden,
        // Edge
        "&:focus::-webkit-input-placeholder": placeholderVisible,
        "&:focus::-moz-placeholder": placeholderVisible,
        // Firefox 19+
        "&:focus::-ms-input-placeholder": placeholderVisible
        // Edge
      },
      [`&.${inputBaseClasses.disabled}`]: {
        opacity: 1,
        // Reset iOS opacity
        WebkitTextFillColor: (theme.vars || theme).palette.text.disabled
        // Fix opacity Safari bug
      },
      variants: [{
        props: ({
          ownerState
        }) => !ownerState.disableInjectingGlobalStyles,
        style: {
          animationName: "mui-auto-fill-cancel",
          animationDuration: "10ms",
          "&:-webkit-autofill": {
            animationDuration: "5000s",
            animationName: "mui-auto-fill"
          }
        }
      }, {
        props: {
          size: "small"
        },
        style: {
          paddingTop: 1
        }
      }, {
        props: ({
          ownerState
        }) => ownerState.multiline,
        style: {
          height: "auto",
          resize: "none",
          padding: 0,
          paddingTop: 0
        }
      }, {
        props: {
          type: "search"
        },
        style: {
          MozAppearance: "textfield"
          // Improve type search style.
        }
      }]
    };
  }));
  const InputGlobalStyles = globalCss({
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  });
  const InputBase = /* @__PURE__ */ React__namespace.forwardRef(function InputBase2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiInputBase"
    });
    const {
      "aria-describedby": ariaDescribedby,
      autoComplete,
      autoFocus,
      className,
      color: color2,
      components = {},
      componentsProps = {},
      defaultValue,
      disabled,
      disableInjectingGlobalStyles,
      endAdornment,
      error,
      fullWidth = false,
      id,
      inputComponent = "input",
      inputProps: inputPropsProp = {},
      inputRef: inputRefProp,
      margin: margin2,
      maxRows,
      minRows,
      multiline = false,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      onKeyDown,
      onKeyUp,
      placeholder,
      readOnly,
      renderSuffix,
      rows,
      size,
      slotProps = {},
      slots = {},
      startAdornment,
      type = "text",
      value: valueProp,
      ...other
    } = props;
    const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
    const {
      current: isControlled
    } = React__namespace.useRef(value != null);
    const inputRef = React__namespace.useRef();
    const handleInputRefWarning = React__namespace.useCallback((instance) => {
    }, []);
    const handleInputRef = useForkRef(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning);
    const [focused, setFocused] = React__namespace.useState(false);
    const muiFormControl = useFormControl();
    const fcs = formControlState({
      props,
      muiFormControl,
      states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
    });
    fcs.focused = muiFormControl ? muiFormControl.focused : focused;
    React__namespace.useEffect(() => {
      if (!muiFormControl && disabled && focused) {
        setFocused(false);
        if (onBlur) {
          onBlur();
        }
      }
    }, [muiFormControl, disabled, focused, onBlur]);
    const onFilled = muiFormControl && muiFormControl.onFilled;
    const onEmpty = muiFormControl && muiFormControl.onEmpty;
    const checkDirty = React__namespace.useCallback((obj) => {
      if (isFilled(obj)) {
        if (onFilled) {
          onFilled();
        }
      } else if (onEmpty) {
        onEmpty();
      }
    }, [onFilled, onEmpty]);
    useEnhancedEffect(() => {
      if (isControlled) {
        checkDirty({
          value
        });
      }
    }, [value, checkDirty, isControlled]);
    const handleFocus = (event) => {
      if (onFocus) {
        onFocus(event);
      }
      if (inputPropsProp.onFocus) {
        inputPropsProp.onFocus(event);
      }
      if (muiFormControl && muiFormControl.onFocus) {
        muiFormControl.onFocus(event);
      } else {
        setFocused(true);
      }
    };
    const handleBlur = (event) => {
      if (onBlur) {
        onBlur(event);
      }
      if (inputPropsProp.onBlur) {
        inputPropsProp.onBlur(event);
      }
      if (muiFormControl && muiFormControl.onBlur) {
        muiFormControl.onBlur(event);
      } else {
        setFocused(false);
      }
    };
    const handleChange = (event, ...args) => {
      if (!isControlled) {
        const element = event.target || inputRef.current;
        if (element == null) {
          throw new Error(formatMuiErrorMessage(1));
        }
        checkDirty({
          value: element.value
        });
      }
      if (inputPropsProp.onChange) {
        inputPropsProp.onChange(event, ...args);
      }
      if (onChange) {
        onChange(event, ...args);
      }
    };
    React__namespace.useEffect(() => {
      checkDirty(inputRef.current);
    }, []);
    const handleClick = (event) => {
      if (inputRef.current && event.currentTarget === event.target) {
        inputRef.current.focus();
      }
      if (onClick) {
        onClick(event);
      }
    };
    let InputComponent = inputComponent;
    let inputProps = inputPropsProp;
    if (multiline && InputComponent === "input") {
      if (rows) {
        inputProps = {
          type: void 0,
          minRows: rows,
          maxRows: rows,
          ...inputProps
        };
      } else {
        inputProps = {
          type: void 0,
          maxRows,
          minRows,
          ...inputProps
        };
      }
      InputComponent = TextareaAutosize;
    }
    const handleAutoFill = (event) => {
      checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
        value: "x"
      });
    };
    React__namespace.useEffect(() => {
      if (muiFormControl) {
        muiFormControl.setAdornedStart(Boolean(startAdornment));
      }
    }, [muiFormControl, startAdornment]);
    const ownerState = {
      ...props,
      color: fcs.color || "primary",
      disabled: fcs.disabled,
      endAdornment,
      error: fcs.error,
      focused: fcs.focused,
      formControl: muiFormControl,
      fullWidth,
      hiddenLabel: fcs.hiddenLabel,
      multiline,
      size: fcs.size,
      startAdornment,
      type
    };
    const classes = useUtilityClasses$x(ownerState);
    const Root = slots.root || components.Root || InputBaseRoot;
    const rootProps = slotProps.root || componentsProps.root || {};
    const Input3 = slots.input || components.Input || InputBaseInput;
    inputProps = {
      ...inputProps,
      ...slotProps.input ?? componentsProps.input
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(React__namespace.Fragment, {
      children: [!disableInjectingGlobalStyles && typeof InputGlobalStyles === "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
      // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
      (_InputGlobalStyles || (_InputGlobalStyles = /* @__PURE__ */ jsxRuntimeExports.jsx(InputGlobalStyles, {}))), /* @__PURE__ */ jsxRuntimeExports.jsxs(Root, {
        ...rootProps,
        ref,
        onClick: handleClick,
        ...other,
        ...!isHostComponent(Root) && {
          ownerState: {
            ...ownerState,
            ...rootProps.ownerState
          }
        },
        className: clsx(classes.root, rootProps.className, className, readOnly && "MuiInputBase-readOnly"),
        children: [startAdornment, /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlContext.Provider, {
          value: null,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input3, {
            "aria-invalid": fcs.error,
            "aria-describedby": ariaDescribedby,
            autoComplete,
            autoFocus,
            defaultValue,
            disabled: fcs.disabled,
            id,
            onAnimationStart: handleAutoFill,
            name,
            placeholder,
            readOnly,
            required: fcs.required,
            rows,
            value,
            onKeyDown,
            onKeyUp,
            type,
            ...inputProps,
            ...!isHostComponent(Input3) && {
              as: InputComponent,
              ownerState: {
                ...ownerState,
                ...inputProps.ownerState
              }
            },
            ref: handleInputRef,
            className: clsx(classes.input, inputProps.className, readOnly && "MuiInputBase-readOnly"),
            onBlur: handleBlur,
            onChange: handleChange,
            onFocus: handleFocus
          })
        }), endAdornment, renderSuffix ? renderSuffix({
          ...fcs,
          startAdornment
        }) : null]
      })]
    });
  });
  function getInputUtilityClass(slot) {
    return generateUtilityClass("MuiInput", slot);
  }
  const inputClasses = {
    ...inputBaseClasses,
    ...generateUtilityClasses("MuiInput", ["root", "underline", "input"])
  };
  function getOutlinedInputUtilityClass(slot) {
    return generateUtilityClass("MuiOutlinedInput", slot);
  }
  const outlinedInputClasses = {
    ...inputBaseClasses,
    ...generateUtilityClasses("MuiOutlinedInput", ["root", "notchedOutline", "input"])
  };
  function getFilledInputUtilityClass(slot) {
    return generateUtilityClass("MuiFilledInput", slot);
  }
  const filledInputClasses = {
    ...inputBaseClasses,
    ...generateUtilityClasses("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
  };
  const ArrowDropDownIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }));
  const styles$1 = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  const Fade = /* @__PURE__ */ React__namespace.forwardRef(function Fade2(props, ref) {
    const theme = useTheme();
    const defaultTimeout = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen
    };
    const {
      addEndListener,
      appear = true,
      children,
      easing: easing2,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style: style2,
      timeout = defaultTimeout,
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Transition,
      ...other
    } = props;
    const nodeRef = React__namespace.useRef(null);
    const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);
    const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
      if (callback) {
        const node2 = nodeRef.current;
        if (maybeIsAppearing === void 0) {
          callback(node2);
        } else {
          callback(node2, maybeIsAppearing);
        }
      }
    };
    const handleEntering = normalizedTransitionCallback(onEntering);
    const handleEnter = normalizedTransitionCallback((node2, isAppearing) => {
      reflow(node2);
      const transitionProps = getTransitionProps({
        style: style2,
        timeout,
        easing: easing2
      }, {
        mode: "enter"
      });
      node2.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
      node2.style.transition = theme.transitions.create("opacity", transitionProps);
      if (onEnter) {
        onEnter(node2, isAppearing);
      }
    });
    const handleEntered = normalizedTransitionCallback(onEntered);
    const handleExiting = normalizedTransitionCallback(onExiting);
    const handleExit = normalizedTransitionCallback((node2) => {
      const transitionProps = getTransitionProps({
        style: style2,
        timeout,
        easing: easing2
      }, {
        mode: "exit"
      });
      node2.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
      node2.style.transition = theme.transitions.create("opacity", transitionProps);
      if (onExit) {
        onExit(node2);
      }
    });
    const handleExited = normalizedTransitionCallback(onExited);
    const handleAddEndListener = (next2) => {
      if (addEndListener) {
        addEndListener(nodeRef.current, next2);
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, {
      appear,
      in: inProp,
      nodeRef,
      onEnter: handleEnter,
      onEntered: handleEntered,
      onEntering: handleEntering,
      onExit: handleExit,
      onExited: handleExited,
      onExiting: handleExiting,
      addEndListener: handleAddEndListener,
      timeout,
      ...other,
      children: (state, {
        ownerState,
        ...restChildProps
      }) => {
        return /* @__PURE__ */ React__namespace.cloneElement(children, {
          style: {
            opacity: 0,
            visibility: state === "exited" && !inProp ? "hidden" : void 0,
            ...styles$1[state],
            ...style2,
            ...children.props.style
          },
          ref: handleRef,
          ...restChildProps
        });
      }
    });
  });
  function getBackdropUtilityClass(slot) {
    return generateUtilityClass("MuiBackdrop", slot);
  }
  generateUtilityClasses("MuiBackdrop", ["root", "invisible"]);
  const useUtilityClasses$w = (ownerState) => {
    const {
      classes,
      invisible
    } = ownerState;
    const slots = {
      root: ["root", invisible && "invisible"]
    };
    return composeClasses(slots, getBackdropUtilityClass, classes);
  };
  const BackdropRoot = styled("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, ownerState.invisible && styles2.invisible];
    }
  })({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent",
    variants: [{
      props: {
        invisible: true
      },
      style: {
        backgroundColor: "transparent"
      }
    }]
  });
  const Backdrop = /* @__PURE__ */ React__namespace.forwardRef(function Backdrop2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiBackdrop"
    });
    const {
      children,
      className,
      component = "div",
      invisible = false,
      open: open2,
      components = {},
      componentsProps = {},
      slotProps = {},
      slots = {},
      TransitionComponent: TransitionComponentProp,
      transitionDuration,
      ...other
    } = props;
    const ownerState = {
      ...props,
      component,
      invisible
    };
    const classes = useUtilityClasses$w(ownerState);
    const backwardCompatibleSlots = {
      transition: TransitionComponentProp,
      root: components.Root,
      ...slots
    };
    const backwardCompatibleSlotProps = {
      ...componentsProps,
      ...slotProps
    };
    const externalForwardedProps = {
      slots: backwardCompatibleSlots,
      slotProps: backwardCompatibleSlotProps
    };
    const [RootSlot, rootProps] = useSlot("root", {
      elementType: BackdropRoot,
      externalForwardedProps,
      className: clsx(classes.root, className),
      ownerState
    });
    const [TransitionSlot, transitionProps] = useSlot("transition", {
      elementType: Fade,
      externalForwardedProps,
      ownerState
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionSlot, {
      in: open2,
      timeout: transitionDuration,
      ...other,
      ...transitionProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(RootSlot, {
        "aria-hidden": true,
        ...rootProps,
        classes,
        ref,
        children
      })
    });
  });
  function useBadge(parameters) {
    const {
      badgeContent: badgeContentProp,
      invisible: invisibleProp = false,
      max: maxProp = 99,
      showZero = false
    } = parameters;
    const prevProps = usePreviousProps({
      badgeContent: badgeContentProp,
      max: maxProp
    });
    let invisible = invisibleProp;
    if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
      invisible = true;
    }
    const {
      badgeContent,
      max: max2 = maxProp
    } = invisible ? prevProps : parameters;
    const displayValue = badgeContent && Number(badgeContent) > max2 ? `${max2}+` : badgeContent;
    return {
      badgeContent,
      invisible,
      max: max2,
      displayValue
    };
  }
  function getBadgeUtilityClass(slot) {
    return generateUtilityClass("MuiBadge", slot);
  }
  const badgeClasses = generateUtilityClasses("MuiBadge", [
    "root",
    "badge",
    "dot",
    "standard",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft",
    "invisible",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "overlapRectangular",
    "overlapCircular",
    // TODO: v6 remove the overlap value from these class keys
    "anchorOriginTopLeftCircular",
    "anchorOriginTopLeftRectangular",
    "anchorOriginTopRightCircular",
    "anchorOriginTopRightRectangular",
    "anchorOriginBottomLeftCircular",
    "anchorOriginBottomLeftRectangular",
    "anchorOriginBottomRightCircular",
    "anchorOriginBottomRightRectangular"
  ]);
  const RADIUS_STANDARD = 10;
  const RADIUS_DOT = 4;
  const useUtilityClasses$v = (ownerState) => {
    const {
      color: color2,
      anchorOrigin,
      invisible,
      overlap,
      variant,
      classes = {}
    } = ownerState;
    const slots = {
      root: ["root"],
      badge: ["badge", variant, invisible && "invisible", `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}`, `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}${capitalize(overlap)}`, `overlap${capitalize(overlap)}`, color2 !== "default" && `color${capitalize(color2)}`]
    };
    return composeClasses(slots, getBadgeUtilityClass, classes);
  };
  const BadgeRoot = styled("span", {
    name: "MuiBadge",
    slot: "Root",
    overridesResolver: (props, styles2) => styles2.root
  })({
    position: "relative",
    display: "inline-flex",
    // For correct alignment with the text.
    verticalAlign: "middle",
    flexShrink: 0
  });
  const BadgeBadge = styled("span", {
    name: "MuiBadge",
    slot: "Badge",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.badge, styles2[ownerState.variant], styles2[`anchorOrigin${capitalize(ownerState.anchorOrigin.vertical)}${capitalize(ownerState.anchorOrigin.horizontal)}${capitalize(ownerState.overlap)}`], ownerState.color !== "default" && styles2[`color${capitalize(ownerState.color)}`], ownerState.invisible && styles2.invisible];
    }
  })(memoTheme(({
    theme
  }) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    boxSizing: "border-box",
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(12),
    minWidth: RADIUS_STANDARD * 2,
    lineHeight: 1,
    padding: "0 6px",
    height: RADIUS_STANDARD * 2,
    borderRadius: RADIUS_STANDARD,
    zIndex: 1,
    // Render the badge on top of potential ripples.
    transition: theme.transitions.create("transform", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["contrastText"])).map(([color2]) => ({
      props: {
        color: color2
      },
      style: {
        backgroundColor: (theme.vars || theme).palette[color2].main,
        color: (theme.vars || theme).palette[color2].contrastText
      }
    })), {
      props: {
        variant: "dot"
      },
      style: {
        borderRadius: RADIUS_DOT,
        height: RADIUS_DOT * 2,
        minWidth: RADIUS_DOT * 2,
        padding: 0
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "rectangular",
      style: {
        top: 0,
        right: 0,
        transform: "scale(1) translate(50%, -50%)",
        transformOrigin: "100% 0%",
        [`&.${badgeClasses.invisible}`]: {
          transform: "scale(0) translate(50%, -50%)"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "rectangular",
      style: {
        bottom: 0,
        right: 0,
        transform: "scale(1) translate(50%, 50%)",
        transformOrigin: "100% 100%",
        [`&.${badgeClasses.invisible}`]: {
          transform: "scale(0) translate(50%, 50%)"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "rectangular",
      style: {
        top: 0,
        left: 0,
        transform: "scale(1) translate(-50%, -50%)",
        transformOrigin: "0% 0%",
        [`&.${badgeClasses.invisible}`]: {
          transform: "scale(0) translate(-50%, -50%)"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "rectangular",
      style: {
        bottom: 0,
        left: 0,
        transform: "scale(1) translate(-50%, 50%)",
        transformOrigin: "0% 100%",
        [`&.${badgeClasses.invisible}`]: {
          transform: "scale(0) translate(-50%, 50%)"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "circular",
      style: {
        top: "14%",
        right: "14%",
        transform: "scale(1) translate(50%, -50%)",
        transformOrigin: "100% 0%",
        [`&.${badgeClasses.invisible}`]: {
          transform: "scale(0) translate(50%, -50%)"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "circular",
      style: {
        bottom: "14%",
        right: "14%",
        transform: "scale(1) translate(50%, 50%)",
        transformOrigin: "100% 100%",
        [`&.${badgeClasses.invisible}`]: {
          transform: "scale(0) translate(50%, 50%)"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "circular",
      style: {
        top: "14%",
        left: "14%",
        transform: "scale(1) translate(-50%, -50%)",
        transformOrigin: "0% 0%",
        [`&.${badgeClasses.invisible}`]: {
          transform: "scale(0) translate(-50%, -50%)"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "circular",
      style: {
        bottom: "14%",
        left: "14%",
        transform: "scale(1) translate(-50%, 50%)",
        transformOrigin: "0% 100%",
        [`&.${badgeClasses.invisible}`]: {
          transform: "scale(0) translate(-50%, 50%)"
        }
      }
    }, {
      props: {
        invisible: true
      },
      style: {
        transition: theme.transitions.create("transform", {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.leavingScreen
        })
      }
    }]
  })));
  function getAnchorOrigin(anchorOrigin) {
    return {
      vertical: (anchorOrigin == null ? void 0 : anchorOrigin.vertical) ?? "top",
      horizontal: (anchorOrigin == null ? void 0 : anchorOrigin.horizontal) ?? "right"
    };
  }
  const Badge = /* @__PURE__ */ React__namespace.forwardRef(function Badge2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiBadge"
    });
    const {
      anchorOrigin: anchorOriginProp,
      className,
      classes: classesProp,
      component,
      components = {},
      componentsProps = {},
      children,
      overlap: overlapProp = "rectangular",
      color: colorProp = "default",
      invisible: invisibleProp = false,
      max: maxProp = 99,
      badgeContent: badgeContentProp,
      slots,
      slotProps,
      showZero = false,
      variant: variantProp = "standard",
      ...other
    } = props;
    const {
      badgeContent,
      invisible: invisibleFromHook,
      max: max2,
      displayValue: displayValueFromHook
    } = useBadge({
      max: maxProp,
      invisible: invisibleProp,
      badgeContent: badgeContentProp,
      showZero
    });
    const prevProps = usePreviousProps({
      anchorOrigin: getAnchorOrigin(anchorOriginProp),
      color: colorProp,
      overlap: overlapProp,
      variant: variantProp,
      badgeContent: badgeContentProp
    });
    const invisible = invisibleFromHook || badgeContent == null && variantProp !== "dot";
    const {
      color: color2 = colorProp,
      overlap = overlapProp,
      anchorOrigin: anchorOriginPropProp,
      variant = variantProp
    } = invisible ? prevProps : props;
    const anchorOrigin = getAnchorOrigin(anchorOriginPropProp);
    const displayValue = variant !== "dot" ? displayValueFromHook : void 0;
    const ownerState = {
      ...props,
      badgeContent,
      invisible,
      max: max2,
      displayValue,
      showZero,
      anchorOrigin,
      color: color2,
      overlap,
      variant
    };
    const classes = useUtilityClasses$v(ownerState);
    const RootSlot = (slots == null ? void 0 : slots.root) ?? components.Root ?? BadgeRoot;
    const BadgeSlot = (slots == null ? void 0 : slots.badge) ?? components.Badge ?? BadgeBadge;
    const rootSlotProps = (slotProps == null ? void 0 : slotProps.root) ?? componentsProps.root;
    const badgeSlotProps = (slotProps == null ? void 0 : slotProps.badge) ?? componentsProps.badge;
    const rootProps = useSlotProps({
      elementType: RootSlot,
      externalSlotProps: rootSlotProps,
      externalForwardedProps: other,
      additionalProps: {
        ref,
        as: component
      },
      ownerState,
      className: clsx(rootSlotProps == null ? void 0 : rootSlotProps.className, classes.root, className)
    });
    const badgeProps = useSlotProps({
      elementType: BadgeSlot,
      externalSlotProps: badgeSlotProps,
      ownerState,
      className: clsx(classes.badge, badgeSlotProps == null ? void 0 : badgeSlotProps.className)
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
      ...rootProps,
      children: [children, /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeSlot, {
        ...badgeProps,
        children: displayValue
      })]
    });
  });
  const boxClasses = generateUtilityClasses("MuiBox", ["root"]);
  const defaultTheme = createTheme();
  const Box = createBox({
    themeId: THEME_ID,
    defaultTheme,
    defaultClassName: boxClasses.root,
    generateClassName: ClassNameGenerator.generate
  });
  function getSwitchBaseUtilityClass(slot) {
    return generateUtilityClass("PrivateSwitchBase", slot);
  }
  generateUtilityClasses("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
  const useUtilityClasses$u = (ownerState) => {
    const {
      classes,
      checked,
      disabled,
      edge
    } = ownerState;
    const slots = {
      root: ["root", checked && "checked", disabled && "disabled", edge && `edge${capitalize(edge)}`],
      input: ["input"]
    };
    return composeClasses(slots, getSwitchBaseUtilityClass, classes);
  };
  const SwitchBaseRoot = styled(ButtonBase)({
    padding: 9,
    borderRadius: "50%",
    variants: [{
      props: {
        edge: "start",
        size: "small"
      },
      style: {
        marginLeft: -3
      }
    }, {
      props: ({
        edge,
        ownerState
      }) => edge === "start" && ownerState.size !== "small",
      style: {
        marginLeft: -12
      }
    }, {
      props: {
        edge: "end",
        size: "small"
      },
      style: {
        marginRight: -3
      }
    }, {
      props: ({
        edge,
        ownerState
      }) => edge === "end" && ownerState.size !== "small",
      style: {
        marginRight: -12
      }
    }]
  });
  const SwitchBaseInput = styled("input", {
    shouldForwardProp: rootShouldForwardProp
  })({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  });
  const SwitchBase = /* @__PURE__ */ React__namespace.forwardRef(function SwitchBase2(props, ref) {
    const {
      autoFocus,
      checked: checkedProp,
      checkedIcon,
      defaultChecked,
      disabled: disabledProp,
      disableFocusRipple = false,
      edge = false,
      icon,
      id,
      inputProps,
      inputRef,
      name,
      onBlur,
      onChange,
      onFocus,
      readOnly,
      required = false,
      tabIndex,
      type,
      value,
      slots = {},
      slotProps = {},
      ...other
    } = props;
    const [checked, setCheckedState] = useControlled({
      controlled: checkedProp,
      default: Boolean(defaultChecked),
      name: "SwitchBase",
      state: "checked"
    });
    const muiFormControl = useFormControl();
    const handleFocus = (event) => {
      if (onFocus) {
        onFocus(event);
      }
      if (muiFormControl && muiFormControl.onFocus) {
        muiFormControl.onFocus(event);
      }
    };
    const handleBlur = (event) => {
      if (onBlur) {
        onBlur(event);
      }
      if (muiFormControl && muiFormControl.onBlur) {
        muiFormControl.onBlur(event);
      }
    };
    const handleInputChange = (event) => {
      if (event.nativeEvent.defaultPrevented) {
        return;
      }
      const newChecked = event.target.checked;
      setCheckedState(newChecked);
      if (onChange) {
        onChange(event, newChecked);
      }
    };
    let disabled = disabledProp;
    if (muiFormControl) {
      if (typeof disabled === "undefined") {
        disabled = muiFormControl.disabled;
      }
    }
    const hasLabelFor = type === "checkbox" || type === "radio";
    const ownerState = {
      ...props,
      checked,
      disabled,
      disableFocusRipple,
      edge
    };
    const classes = useUtilityClasses$u(ownerState);
    const externalForwardedProps = {
      slots,
      slotProps: {
        input: inputProps,
        ...slotProps
      }
    };
    const [RootSlot, rootSlotProps] = useSlot("root", {
      ref,
      elementType: SwitchBaseRoot,
      className: classes.root,
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        ...externalForwardedProps,
        component: "span",
        ...other
      },
      getSlotProps: (handlers) => ({
        ...handlers,
        onFocus: (event) => {
          var _a;
          (_a = handlers.onFocus) == null ? void 0 : _a.call(handlers, event);
          handleFocus(event);
        },
        onBlur: (event) => {
          var _a;
          (_a = handlers.onBlur) == null ? void 0 : _a.call(handlers, event);
          handleBlur(event);
        }
      }),
      ownerState,
      additionalProps: {
        centerRipple: true,
        focusRipple: !disableFocusRipple,
        disabled,
        role: void 0,
        tabIndex: null
      }
    });
    const [InputSlot, inputSlotProps] = useSlot("input", {
      ref: inputRef,
      elementType: SwitchBaseInput,
      className: classes.input,
      externalForwardedProps,
      getSlotProps: (handlers) => ({
        ...handlers,
        onChange: (event) => {
          var _a;
          (_a = handlers.onChange) == null ? void 0 : _a.call(handlers, event);
          handleInputChange(event);
        }
      }),
      ownerState,
      additionalProps: {
        autoFocus,
        checked: checkedProp,
        defaultChecked,
        disabled,
        id: hasLabelFor ? id : void 0,
        name,
        readOnly,
        required,
        tabIndex,
        type,
        ...type === "checkbox" && value === void 0 ? {} : {
          value
        }
      }
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
      ...rootSlotProps,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(InputSlot, {
        ...inputSlotProps
      }), checked ? checkedIcon : icon]
    });
  });
  const CheckBoxOutlineBlankIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }));
  const CheckBoxIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }));
  const IndeterminateCheckBoxIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
  }));
  function getCheckboxUtilityClass(slot) {
    return generateUtilityClass("MuiCheckbox", slot);
  }
  const checkboxClasses = generateUtilityClasses("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]);
  const useUtilityClasses$t = (ownerState) => {
    const {
      classes,
      indeterminate,
      color: color2,
      size
    } = ownerState;
    const slots = {
      root: ["root", indeterminate && "indeterminate", `color${capitalize(color2)}`, `size${capitalize(size)}`]
    };
    const composedClasses = composeClasses(slots, getCheckboxUtilityClass, classes);
    return {
      ...classes,
      // forward the disabled and checked classes to the SwitchBase
      ...composedClasses
    };
  };
  const CheckboxRoot = styled(SwitchBase, {
    shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
    name: "MuiCheckbox",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, ownerState.indeterminate && styles2.indeterminate, styles2[`size${capitalize(ownerState.size)}`], ownerState.color !== "default" && styles2[`color${capitalize(ownerState.color)}`]];
    }
  })(memoTheme(({
    theme
  }) => ({
    color: (theme.vars || theme).palette.text.secondary,
    variants: [{
      props: {
        color: "default",
        disableRipple: false
      },
      style: {
        "&:hover": {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color2]) => ({
      props: {
        color: color2,
        disableRipple: false
      },
      style: {
        "&:hover": {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color2].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color2].main, theme.palette.action.hoverOpacity)
        }
      }
    })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color2]) => ({
      props: {
        color: color2
      },
      style: {
        [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
          color: (theme.vars || theme).palette[color2].main
        },
        [`&.${checkboxClasses.disabled}`]: {
          color: (theme.vars || theme).palette.action.disabled
        }
      }
    })), {
      // Should be last to override other colors
      props: {
        disableRipple: false
      },
      style: {
        // Reset on touch devices, it doesn't add specificity
        "&:hover": {
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        }
      }
    }]
  })));
  const defaultCheckedIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(CheckBoxIcon, {});
  const defaultIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(CheckBoxOutlineBlankIcon, {});
  const defaultIndeterminateIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(IndeterminateCheckBoxIcon, {});
  const Checkbox = /* @__PURE__ */ React__namespace.forwardRef(function Checkbox2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiCheckbox"
    });
    const {
      checkedIcon = defaultCheckedIcon,
      color: color2 = "primary",
      icon: iconProp = defaultIcon,
      indeterminate = false,
      indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
      inputProps,
      size = "medium",
      disableRipple = false,
      className,
      slots = {},
      slotProps = {},
      ...other
    } = props;
    const icon = indeterminate ? indeterminateIconProp : iconProp;
    const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
    const ownerState = {
      ...props,
      disableRipple,
      color: color2,
      indeterminate,
      size
    };
    const classes = useUtilityClasses$t(ownerState);
    const externalInputProps = slotProps.input ?? inputProps;
    const [RootSlot, rootSlotProps] = useSlot("root", {
      ref,
      elementType: CheckboxRoot,
      className: clsx(classes.root, className),
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        slots,
        slotProps,
        ...other
      },
      ownerState,
      additionalProps: {
        type: "checkbox",
        icon: /* @__PURE__ */ React__namespace.cloneElement(icon, {
          fontSize: icon.props.fontSize ?? size
        }),
        checkedIcon: /* @__PURE__ */ React__namespace.cloneElement(indeterminateIcon, {
          fontSize: indeterminateIcon.props.fontSize ?? size
        }),
        disableRipple,
        slots,
        slotProps: {
          input: mergeSlotProps(typeof externalInputProps === "function" ? externalInputProps(ownerState) : externalInputProps, {
            "data-indeterminate": indeterminate
          })
        }
      }
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RootSlot, {
      ...rootSlotProps,
      classes
    });
  });
  function mapEventPropToEvent(eventProp) {
    return eventProp.substring(2).toLowerCase();
  }
  function clickedRootScrollbar(event, doc) {
    return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
  }
  function ClickAwayListener(props) {
    const {
      children,
      disableReactTree = false,
      mouseEvent = "onClick",
      onClickAway,
      touchEvent = "onTouchEnd"
    } = props;
    const movedRef = React__namespace.useRef(false);
    const nodeRef = React__namespace.useRef(null);
    const activatedRef = React__namespace.useRef(false);
    const syntheticEventRef = React__namespace.useRef(false);
    React__namespace.useEffect(() => {
      setTimeout(() => {
        activatedRef.current = true;
      }, 0);
      return () => {
        activatedRef.current = false;
      };
    }, []);
    const handleRef = useForkRef(getReactElementRef(children), nodeRef);
    const handleClickAway = useEventCallback((event) => {
      const insideReactTree = syntheticEventRef.current;
      syntheticEventRef.current = false;
      const doc = ownerDocument(nodeRef.current);
      if (!activatedRef.current || !nodeRef.current || "clientX" in event && clickedRootScrollbar(event, doc)) {
        return;
      }
      if (movedRef.current) {
        movedRef.current = false;
        return;
      }
      let insideDOM;
      if (event.composedPath) {
        insideDOM = event.composedPath().includes(nodeRef.current);
      } else {
        insideDOM = !doc.documentElement.contains(
          // @ts-expect-error returns `false` as intended when not dispatched from a Node
          event.target
        ) || nodeRef.current.contains(
          // @ts-expect-error returns `false` as intended when not dispatched from a Node
          event.target
        );
      }
      if (!insideDOM && (disableReactTree || !insideReactTree)) {
        onClickAway(event);
      }
    });
    const createHandleSynthetic = (handlerName) => (event) => {
      syntheticEventRef.current = true;
      const childrenPropsHandler = children.props[handlerName];
      if (childrenPropsHandler) {
        childrenPropsHandler(event);
      }
    };
    const childrenProps = {
      ref: handleRef
    };
    if (touchEvent !== false) {
      childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
    }
    React__namespace.useEffect(() => {
      if (touchEvent !== false) {
        const mappedTouchEvent = mapEventPropToEvent(touchEvent);
        const doc = ownerDocument(nodeRef.current);
        const handleTouchMove = () => {
          movedRef.current = true;
        };
        doc.addEventListener(mappedTouchEvent, handleClickAway);
        doc.addEventListener("touchmove", handleTouchMove);
        return () => {
          doc.removeEventListener(mappedTouchEvent, handleClickAway);
          doc.removeEventListener("touchmove", handleTouchMove);
        };
      }
      return void 0;
    }, [handleClickAway, touchEvent]);
    if (mouseEvent !== false) {
      childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
    }
    React__namespace.useEffect(() => {
      if (mouseEvent !== false) {
        const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
        const doc = ownerDocument(nodeRef.current);
        doc.addEventListener(mappedMouseEvent, handleClickAway);
        return () => {
          doc.removeEventListener(mappedMouseEvent, handleClickAway);
        };
      }
      return void 0;
    }, [handleClickAway, mouseEvent]);
    return /* @__PURE__ */ React__namespace.cloneElement(children, childrenProps);
  }
  function isOverflowing(container) {
    const doc = ownerDocument(container);
    if (doc.body === container) {
      return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
    }
    return container.scrollHeight > container.clientHeight;
  }
  function ariaHidden(element, hide2) {
    if (hide2) {
      element.setAttribute("aria-hidden", "true");
    } else {
      element.removeAttribute("aria-hidden");
    }
  }
  function getPaddingRight(element) {
    return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
  }
  function isAriaHiddenForbiddenOnElement(element) {
    const forbiddenTagNames = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"];
    const isForbiddenTagName = forbiddenTagNames.includes(element.tagName);
    const isInputHidden = element.tagName === "INPUT" && element.getAttribute("type") === "hidden";
    return isForbiddenTagName || isInputHidden;
  }
  function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, hide2) {
    const blacklist = [mountElement, currentElement, ...elementsToExclude];
    [].forEach.call(container.children, (element) => {
      const isNotExcludedElement = !blacklist.includes(element);
      const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
      if (isNotExcludedElement && isNotForbiddenElement) {
        ariaHidden(element, hide2);
      }
    });
  }
  function findIndexOf(items, callback) {
    let idx = -1;
    items.some((item, index) => {
      if (callback(item)) {
        idx = index;
        return true;
      }
      return false;
    });
    return idx;
  }
  function handleContainer(containerInfo, props) {
    const restoreStyle = [];
    const container = containerInfo.container;
    if (!props.disableScrollLock) {
      if (isOverflowing(container)) {
        const scrollbarSize = getScrollbarSize(ownerWindow(container));
        restoreStyle.push({
          value: container.style.paddingRight,
          property: "padding-right",
          el: container
        });
        container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;
        const fixedElements2 = ownerDocument(container).querySelectorAll(".mui-fixed");
        [].forEach.call(fixedElements2, (element) => {
          restoreStyle.push({
            value: element.style.paddingRight,
            property: "padding-right",
            el: element
          });
          element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
        });
      }
      let scrollContainer;
      if (container.parentNode instanceof DocumentFragment) {
        scrollContainer = ownerDocument(container).body;
      } else {
        const parent = container.parentElement;
        const containerWindow = ownerWindow(container);
        scrollContainer = (parent == null ? void 0 : parent.nodeName) === "HTML" && containerWindow.getComputedStyle(parent).overflowY === "scroll" ? parent : container;
      }
      restoreStyle.push({
        value: scrollContainer.style.overflow,
        property: "overflow",
        el: scrollContainer
      }, {
        value: scrollContainer.style.overflowX,
        property: "overflow-x",
        el: scrollContainer
      }, {
        value: scrollContainer.style.overflowY,
        property: "overflow-y",
        el: scrollContainer
      });
      scrollContainer.style.overflow = "hidden";
    }
    const restore = () => {
      restoreStyle.forEach(({
        value,
        el,
        property
      }) => {
        if (value) {
          el.style.setProperty(property, value);
        } else {
          el.style.removeProperty(property);
        }
      });
    };
    return restore;
  }
  function getHiddenSiblings(container) {
    const hiddenSiblings = [];
    [].forEach.call(container.children, (element) => {
      if (element.getAttribute("aria-hidden") === "true") {
        hiddenSiblings.push(element);
      }
    });
    return hiddenSiblings;
  }
  class ModalManager {
    constructor() {
      this.modals = [];
      this.containers = [];
    }
    add(modal, container) {
      let modalIndex = this.modals.indexOf(modal);
      if (modalIndex !== -1) {
        return modalIndex;
      }
      modalIndex = this.modals.length;
      this.modals.push(modal);
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, false);
      }
      const hiddenSiblings = getHiddenSiblings(container);
      ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
      const containerIndex = findIndexOf(this.containers, (item) => item.container === container);
      if (containerIndex !== -1) {
        this.containers[containerIndex].modals.push(modal);
        return modalIndex;
      }
      this.containers.push({
        modals: [modal],
        container,
        restore: null,
        hiddenSiblings
      });
      return modalIndex;
    }
    mount(modal, props) {
      const containerIndex = findIndexOf(this.containers, (item) => item.modals.includes(modal));
      const containerInfo = this.containers[containerIndex];
      if (!containerInfo.restore) {
        containerInfo.restore = handleContainer(containerInfo, props);
      }
    }
    remove(modal, ariaHiddenState = true) {
      const modalIndex = this.modals.indexOf(modal);
      if (modalIndex === -1) {
        return modalIndex;
      }
      const containerIndex = findIndexOf(this.containers, (item) => item.modals.includes(modal));
      const containerInfo = this.containers[containerIndex];
      containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
      this.modals.splice(modalIndex, 1);
      if (containerInfo.modals.length === 0) {
        if (containerInfo.restore) {
          containerInfo.restore();
        }
        if (modal.modalRef) {
          ariaHidden(modal.modalRef, ariaHiddenState);
        }
        ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
        this.containers.splice(containerIndex, 1);
      } else {
        const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
        if (nextTop.modalRef) {
          ariaHidden(nextTop.modalRef, false);
        }
      }
      return modalIndex;
    }
    isTopModal(modal) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }
  }
  const candidatesSelector = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
  function getTabIndex(node2) {
    const tabindexAttr = parseInt(node2.getAttribute("tabindex") || "", 10);
    if (!Number.isNaN(tabindexAttr)) {
      return tabindexAttr;
    }
    if (node2.contentEditable === "true" || (node2.nodeName === "AUDIO" || node2.nodeName === "VIDEO" || node2.nodeName === "DETAILS") && node2.getAttribute("tabindex") === null) {
      return 0;
    }
    return node2.tabIndex;
  }
  function isNonTabbableRadio(node2) {
    if (node2.tagName !== "INPUT" || node2.type !== "radio") {
      return false;
    }
    if (!node2.name) {
      return false;
    }
    const getRadio = (selector) => node2.ownerDocument.querySelector(`input[type="radio"]${selector}`);
    let roving = getRadio(`[name="${node2.name}"]:checked`);
    if (!roving) {
      roving = getRadio(`[name="${node2.name}"]`);
    }
    return roving !== node2;
  }
  function isNodeMatchingSelectorFocusable(node2) {
    if (node2.disabled || node2.tagName === "INPUT" && node2.type === "hidden" || isNonTabbableRadio(node2)) {
      return false;
    }
    return true;
  }
  function defaultGetTabbable(root) {
    const regularTabNodes = [];
    const orderedTabNodes = [];
    Array.from(root.querySelectorAll(candidatesSelector)).forEach((node2, i) => {
      const nodeTabIndex = getTabIndex(node2);
      if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node2)) {
        return;
      }
      if (nodeTabIndex === 0) {
        regularTabNodes.push(node2);
      } else {
        orderedTabNodes.push({
          documentOrder: i,
          tabIndex: nodeTabIndex,
          node: node2
        });
      }
    });
    return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map((a) => a.node).concat(regularTabNodes);
  }
  function defaultIsEnabled() {
    return true;
  }
  function FocusTrap(props) {
    const {
      children,
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableRestoreFocus = false,
      getTabbable = defaultGetTabbable,
      isEnabled = defaultIsEnabled,
      open: open2
    } = props;
    const ignoreNextEnforceFocus = React__namespace.useRef(false);
    const sentinelStart = React__namespace.useRef(null);
    const sentinelEnd = React__namespace.useRef(null);
    const nodeToRestore = React__namespace.useRef(null);
    const reactFocusEventTarget = React__namespace.useRef(null);
    const activated = React__namespace.useRef(false);
    const rootRef = React__namespace.useRef(null);
    const handleRef = useForkRef(getReactElementRef(children), rootRef);
    const lastKeydown = React__namespace.useRef(null);
    React__namespace.useEffect(() => {
      if (!open2 || !rootRef.current) {
        return;
      }
      activated.current = !disableAutoFocus;
    }, [disableAutoFocus, open2]);
    React__namespace.useEffect(() => {
      if (!open2 || !rootRef.current) {
        return;
      }
      const doc = ownerDocument(rootRef.current);
      if (!rootRef.current.contains(doc.activeElement)) {
        if (!rootRef.current.hasAttribute("tabIndex")) {
          rootRef.current.setAttribute("tabIndex", "-1");
        }
        if (activated.current) {
          rootRef.current.focus();
        }
      }
      return () => {
        if (!disableRestoreFocus) {
          if (nodeToRestore.current && nodeToRestore.current.focus) {
            ignoreNextEnforceFocus.current = true;
            nodeToRestore.current.focus();
          }
          nodeToRestore.current = null;
        }
      };
    }, [open2]);
    React__namespace.useEffect(() => {
      if (!open2 || !rootRef.current) {
        return;
      }
      const doc = ownerDocument(rootRef.current);
      const loopFocus = (nativeEvent) => {
        lastKeydown.current = nativeEvent;
        if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") {
          return;
        }
        if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
          ignoreNextEnforceFocus.current = true;
          if (sentinelEnd.current) {
            sentinelEnd.current.focus();
          }
        }
      };
      const contain = () => {
        var _a, _b;
        const rootElement = rootRef.current;
        if (rootElement === null) {
          return;
        }
        if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
          ignoreNextEnforceFocus.current = false;
          return;
        }
        if (rootElement.contains(doc.activeElement)) {
          return;
        }
        if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
          return;
        }
        if (doc.activeElement !== reactFocusEventTarget.current) {
          reactFocusEventTarget.current = null;
        } else if (reactFocusEventTarget.current !== null) {
          return;
        }
        if (!activated.current) {
          return;
        }
        let tabbable = [];
        if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
          tabbable = getTabbable(rootRef.current);
        }
        if (tabbable.length > 0) {
          const isShiftTab = Boolean(((_a = lastKeydown.current) == null ? void 0 : _a.shiftKey) && ((_b = lastKeydown.current) == null ? void 0 : _b.key) === "Tab");
          const focusNext = tabbable[0];
          const focusPrevious = tabbable[tabbable.length - 1];
          if (typeof focusNext !== "string" && typeof focusPrevious !== "string") {
            if (isShiftTab) {
              focusPrevious.focus();
            } else {
              focusNext.focus();
            }
          }
        } else {
          rootElement.focus();
        }
      };
      doc.addEventListener("focusin", contain);
      doc.addEventListener("keydown", loopFocus, true);
      const interval = setInterval(() => {
        if (doc.activeElement && doc.activeElement.tagName === "BODY") {
          contain();
        }
      }, 50);
      return () => {
        clearInterval(interval);
        doc.removeEventListener("focusin", contain);
        doc.removeEventListener("keydown", loopFocus, true);
      };
    }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open2, getTabbable]);
    const onFocus = (event) => {
      if (nodeToRestore.current === null) {
        nodeToRestore.current = event.relatedTarget;
      }
      activated.current = true;
      reactFocusEventTarget.current = event.target;
      const childrenPropsHandler = children.props.onFocus;
      if (childrenPropsHandler) {
        childrenPropsHandler(event);
      }
    };
    const handleFocusSentinel = (event) => {
      if (nodeToRestore.current === null) {
        nodeToRestore.current = event.relatedTarget;
      }
      activated.current = true;
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(React__namespace.Fragment, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        tabIndex: open2 ? 0 : -1,
        onFocus: handleFocusSentinel,
        ref: sentinelStart,
        "data-testid": "sentinelStart"
      }), /* @__PURE__ */ React__namespace.cloneElement(children, {
        ref: handleRef,
        onFocus
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        tabIndex: open2 ? 0 : -1,
        onFocus: handleFocusSentinel,
        ref: sentinelEnd,
        "data-testid": "sentinelEnd"
      })]
    });
  }
  function getContainer(container) {
    return typeof container === "function" ? container() : container;
  }
  function getHasTransition(children) {
    return children ? children.props.hasOwnProperty("in") : false;
  }
  const noop$1 = () => {
  };
  const manager = new ModalManager();
  function useModal(parameters) {
    const {
      container,
      disableEscapeKeyDown = false,
      disableScrollLock = false,
      closeAfterTransition = false,
      onTransitionEnter,
      onTransitionExited,
      children,
      onClose,
      open: open2,
      rootRef
    } = parameters;
    const modal = React__namespace.useRef({});
    const mountNodeRef = React__namespace.useRef(null);
    const modalRef = React__namespace.useRef(null);
    const handleRef = useForkRef(modalRef, rootRef);
    const [exited, setExited] = React__namespace.useState(!open2);
    const hasTransition = getHasTransition(children);
    let ariaHiddenProp = true;
    if (parameters["aria-hidden"] === "false" || parameters["aria-hidden"] === false) {
      ariaHiddenProp = false;
    }
    const getDoc = () => ownerDocument(mountNodeRef.current);
    const getModal = () => {
      modal.current.modalRef = modalRef.current;
      modal.current.mount = mountNodeRef.current;
      return modal.current;
    };
    const handleMounted = () => {
      manager.mount(getModal(), {
        disableScrollLock
      });
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
      }
    };
    const handleOpen = useEventCallback(() => {
      const resolvedContainer = getContainer(container) || getDoc().body;
      manager.add(getModal(), resolvedContainer);
      if (modalRef.current) {
        handleMounted();
      }
    });
    const isTopModal = () => manager.isTopModal(getModal());
    const handlePortalRef = useEventCallback((node2) => {
      mountNodeRef.current = node2;
      if (!node2) {
        return;
      }
      if (open2 && isTopModal()) {
        handleMounted();
      } else if (modalRef.current) {
        ariaHidden(modalRef.current, ariaHiddenProp);
      }
    });
    const handleClose = React__namespace.useCallback(() => {
      manager.remove(getModal(), ariaHiddenProp);
    }, [ariaHiddenProp]);
    React__namespace.useEffect(() => {
      return () => {
        handleClose();
      };
    }, [handleClose]);
    React__namespace.useEffect(() => {
      if (open2) {
        handleOpen();
      } else if (!hasTransition || !closeAfterTransition) {
        handleClose();
      }
    }, [open2, handleClose, hasTransition, closeAfterTransition, handleOpen]);
    const createHandleKeyDown = (otherHandlers) => (event) => {
      var _a;
      (_a = otherHandlers.onKeyDown) == null ? void 0 : _a.call(otherHandlers, event);
      if (event.key !== "Escape" || event.which === 229 || // Wait until IME is settled.
      !isTopModal()) {
        return;
      }
      if (!disableEscapeKeyDown) {
        event.stopPropagation();
        if (onClose) {
          onClose(event, "escapeKeyDown");
        }
      }
    };
    const createHandleBackdropClick = (otherHandlers) => (event) => {
      var _a;
      (_a = otherHandlers.onClick) == null ? void 0 : _a.call(otherHandlers, event);
      if (event.target !== event.currentTarget) {
        return;
      }
      if (onClose) {
        onClose(event, "backdropClick");
      }
    };
    const getRootProps = (otherHandlers = {}) => {
      const propsEventHandlers = extractEventHandlers(parameters);
      delete propsEventHandlers.onTransitionEnter;
      delete propsEventHandlers.onTransitionExited;
      const externalEventHandlers = {
        ...propsEventHandlers,
        ...otherHandlers
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...externalEventHandlers,
        onKeyDown: createHandleKeyDown(externalEventHandlers),
        ref: handleRef
      };
    };
    const getBackdropProps = (otherHandlers = {}) => {
      const externalEventHandlers = otherHandlers;
      return {
        "aria-hidden": true,
        ...externalEventHandlers,
        onClick: createHandleBackdropClick(externalEventHandlers),
        open: open2
      };
    };
    const getTransitionProps2 = () => {
      const handleEnter = () => {
        setExited(false);
        if (onTransitionEnter) {
          onTransitionEnter();
        }
      };
      const handleExited = () => {
        setExited(true);
        if (onTransitionExited) {
          onTransitionExited();
        }
        if (closeAfterTransition) {
          handleClose();
        }
      };
      return {
        onEnter: createChainedFunction(handleEnter, (children == null ? void 0 : children.props.onEnter) ?? noop$1),
        onExited: createChainedFunction(handleExited, (children == null ? void 0 : children.props.onExited) ?? noop$1)
      };
    };
    return {
      getRootProps,
      getBackdropProps,
      getTransitionProps: getTransitionProps2,
      rootRef: handleRef,
      portalRef: handlePortalRef,
      isTopModal,
      exited,
      hasTransition
    };
  }
  function getModalUtilityClass(slot) {
    return generateUtilityClass("MuiModal", slot);
  }
  generateUtilityClasses("MuiModal", ["root", "hidden", "backdrop"]);
  const useUtilityClasses$s = (ownerState) => {
    const {
      open: open2,
      exited,
      classes
    } = ownerState;
    const slots = {
      root: ["root", !open2 && exited && "hidden"],
      backdrop: ["backdrop"]
    };
    return composeClasses(slots, getModalUtilityClass, classes);
  };
  const ModalRoot = styled("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, !ownerState.open && ownerState.exited && styles2.hidden];
    }
  })(memoTheme(({
    theme
  }) => ({
    position: "fixed",
    zIndex: (theme.vars || theme).zIndex.modal,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    variants: [{
      props: ({
        ownerState
      }) => !ownerState.open && ownerState.exited,
      style: {
        visibility: "hidden"
      }
    }]
  })));
  const ModalBackdrop = styled(Backdrop, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (props, styles2) => {
      return styles2.backdrop;
    }
  })({
    zIndex: -1
  });
  const Modal = /* @__PURE__ */ React__namespace.forwardRef(function Modal2(inProps, ref) {
    const props = useDefaultProps({
      name: "MuiModal",
      props: inProps
    });
    const {
      BackdropComponent = ModalBackdrop,
      BackdropProps,
      classes: classesProp,
      className,
      closeAfterTransition = false,
      children,
      container,
      component,
      components = {},
      componentsProps = {},
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableEscapeKeyDown = false,
      disablePortal = false,
      disableRestoreFocus = false,
      disableScrollLock = false,
      hideBackdrop = false,
      keepMounted = false,
      onClose,
      onTransitionEnter,
      onTransitionExited,
      open: open2,
      slotProps = {},
      slots = {},
      // eslint-disable-next-line react/prop-types
      theme,
      ...other
    } = props;
    const propsWithDefaults = {
      ...props,
      closeAfterTransition,
      disableAutoFocus,
      disableEnforceFocus,
      disableEscapeKeyDown,
      disablePortal,
      disableRestoreFocus,
      disableScrollLock,
      hideBackdrop,
      keepMounted
    };
    const {
      getRootProps,
      getBackdropProps,
      getTransitionProps: getTransitionProps2,
      portalRef,
      isTopModal,
      exited,
      hasTransition
    } = useModal({
      ...propsWithDefaults,
      rootRef: ref
    });
    const ownerState = {
      ...propsWithDefaults,
      exited
    };
    const classes = useUtilityClasses$s(ownerState);
    const childProps = {};
    if (children.props.tabIndex === void 0) {
      childProps.tabIndex = "-1";
    }
    if (hasTransition) {
      const {
        onEnter,
        onExited
      } = getTransitionProps2();
      childProps.onEnter = onEnter;
      childProps.onExited = onExited;
    }
    const externalForwardedProps = {
      slots: {
        root: components.Root,
        backdrop: components.Backdrop,
        ...slots
      },
      slotProps: {
        ...componentsProps,
        ...slotProps
      }
    };
    const [RootSlot, rootProps] = useSlot("root", {
      ref,
      elementType: ModalRoot,
      externalForwardedProps: {
        ...externalForwardedProps,
        ...other,
        component
      },
      getSlotProps: getRootProps,
      ownerState,
      className: clsx(className, classes == null ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes == null ? void 0 : classes.hidden))
    });
    const [BackdropSlot, backdropProps] = useSlot("backdrop", {
      ref: BackdropProps == null ? void 0 : BackdropProps.ref,
      elementType: BackdropComponent,
      externalForwardedProps,
      shouldForwardComponentProp: true,
      additionalProps: BackdropProps,
      getSlotProps: (otherHandlers) => {
        return getBackdropProps({
          ...otherHandlers,
          onClick: (event) => {
            if (otherHandlers == null ? void 0 : otherHandlers.onClick) {
              otherHandlers.onClick(event);
            }
          }
        });
      },
      className: clsx(BackdropProps == null ? void 0 : BackdropProps.className, classes == null ? void 0 : classes.backdrop),
      ownerState
    });
    if (!keepMounted && !open2 && (!hasTransition || exited)) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, {
      ref: portalRef,
      container,
      disablePortal,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
        ...rootProps,
        children: [!hideBackdrop && BackdropComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(BackdropSlot, {
          ...backdropProps
        }) : null, /* @__PURE__ */ jsxRuntimeExports.jsx(FocusTrap, {
          disableEnforceFocus,
          disableAutoFocus,
          disableRestoreFocus,
          isEnabled: isTopModal,
          open: open2,
          children: /* @__PURE__ */ React__namespace.cloneElement(children, childProps)
        })]
      })
    });
  });
  function getDividerUtilityClass(slot) {
    return generateUtilityClass("MuiDivider", slot);
  }
  const dividerClasses = generateUtilityClasses("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
  const useUtilityClasses$r = (ownerState) => {
    const {
      absolute,
      children,
      classes,
      flexItem,
      light: light2,
      orientation,
      textAlign,
      variant
    } = ownerState;
    const slots = {
      root: ["root", absolute && "absolute", variant, light2 && "light", orientation === "vertical" && "vertical", flexItem && "flexItem", children && "withChildren", children && orientation === "vertical" && "withChildrenVertical", textAlign === "right" && orientation !== "vertical" && "textAlignRight", textAlign === "left" && orientation !== "vertical" && "textAlignLeft"],
      wrapper: ["wrapper", orientation === "vertical" && "wrapperVertical"]
    };
    return composeClasses(slots, getDividerUtilityClass, classes);
  };
  const DividerRoot = styled("div", {
    name: "MuiDivider",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, ownerState.absolute && styles2.absolute, styles2[ownerState.variant], ownerState.light && styles2.light, ownerState.orientation === "vertical" && styles2.vertical, ownerState.flexItem && styles2.flexItem, ownerState.children && styles2.withChildren, ownerState.children && ownerState.orientation === "vertical" && styles2.withChildrenVertical, ownerState.textAlign === "right" && ownerState.orientation !== "vertical" && styles2.textAlignRight, ownerState.textAlign === "left" && ownerState.orientation !== "vertical" && styles2.textAlignLeft];
    }
  })(memoTheme(({
    theme
  }) => ({
    margin: 0,
    // Reset browser default style.
    flexShrink: 0,
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: (theme.vars || theme).palette.divider,
    borderBottomWidth: "thin",
    variants: [{
      props: {
        absolute: true
      },
      style: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%"
      }
    }, {
      props: {
        light: true
      },
      style: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette.dividerChannel} / 0.08)` : alpha(theme.palette.divider, 0.08)
      }
    }, {
      props: {
        variant: "inset"
      },
      style: {
        marginLeft: 72
      }
    }, {
      props: {
        variant: "middle",
        orientation: "horizontal"
      },
      style: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
      }
    }, {
      props: {
        variant: "middle",
        orientation: "vertical"
      },
      style: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
      }
    }, {
      props: {
        orientation: "vertical"
      },
      style: {
        height: "100%",
        borderBottomWidth: 0,
        borderRightWidth: "thin"
      }
    }, {
      props: {
        flexItem: true
      },
      style: {
        alignSelf: "stretch",
        height: "auto"
      }
    }, {
      props: ({
        ownerState
      }) => !!ownerState.children,
      style: {
        display: "flex",
        textAlign: "center",
        border: 0,
        borderTopStyle: "solid",
        borderLeftStyle: "solid",
        "&::before, &::after": {
          content: '""',
          alignSelf: "center"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.children && ownerState.orientation !== "vertical",
      style: {
        "&::before, &::after": {
          width: "100%",
          borderTop: `thin solid ${(theme.vars || theme).palette.divider}`,
          borderTopStyle: "inherit"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.orientation === "vertical" && ownerState.children,
      style: {
        flexDirection: "column",
        "&::before, &::after": {
          height: "100%",
          borderLeft: `thin solid ${(theme.vars || theme).palette.divider}`,
          borderLeftStyle: "inherit"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.textAlign === "right" && ownerState.orientation !== "vertical",
      style: {
        "&::before": {
          width: "90%"
        },
        "&::after": {
          width: "10%"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.textAlign === "left" && ownerState.orientation !== "vertical",
      style: {
        "&::before": {
          width: "10%"
        },
        "&::after": {
          width: "90%"
        }
      }
    }]
  })));
  const DividerWrapper = styled("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.wrapper, ownerState.orientation === "vertical" && styles2.wrapperVertical];
    }
  })(memoTheme(({
    theme
  }) => ({
    display: "inline-block",
    paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
    paddingRight: `calc(${theme.spacing(1)} * 1.2)`,
    whiteSpace: "nowrap",
    variants: [{
      props: {
        orientation: "vertical"
      },
      style: {
        paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
        paddingBottom: `calc(${theme.spacing(1)} * 1.2)`
      }
    }]
  })));
  const Divider = /* @__PURE__ */ React__namespace.forwardRef(function Divider2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiDivider"
    });
    const {
      absolute = false,
      children,
      className,
      orientation = "horizontal",
      component = children || orientation === "vertical" ? "div" : "hr",
      flexItem = false,
      light: light2 = false,
      role = component !== "hr" ? "separator" : void 0,
      textAlign = "center",
      variant = "fullWidth",
      ...other
    } = props;
    const ownerState = {
      ...props,
      absolute,
      component,
      flexItem,
      light: light2,
      orientation,
      role,
      textAlign,
      variant
    };
    const classes = useUtilityClasses$r(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DividerRoot, {
      as: component,
      className: clsx(classes.root, className),
      role,
      ref,
      ownerState,
      "aria-orientation": role === "separator" && (component !== "hr" || orientation === "vertical") ? orientation : void 0,
      ...other,
      children: children ? /* @__PURE__ */ jsxRuntimeExports.jsx(DividerWrapper, {
        className: classes.wrapper,
        ownerState,
        children
      }) : null
    });
  });
  if (Divider) {
    Divider.muiSkipListHighlight = true;
  }
  function getTranslateValue(direction, node2, resolvedContainer) {
    const rect = node2.getBoundingClientRect();
    const containerRect = resolvedContainer && resolvedContainer.getBoundingClientRect();
    const containerWindow = ownerWindow(node2);
    let transform;
    if (node2.fakeTransform) {
      transform = node2.fakeTransform;
    } else {
      const computedStyle = containerWindow.getComputedStyle(node2);
      transform = computedStyle.getPropertyValue("-webkit-transform") || computedStyle.getPropertyValue("transform");
    }
    let offsetX = 0;
    let offsetY = 0;
    if (transform && transform !== "none" && typeof transform === "string") {
      const transformValues = transform.split("(")[1].split(")")[0].split(",");
      offsetX = parseInt(transformValues[4], 10);
      offsetY = parseInt(transformValues[5], 10);
    }
    if (direction === "left") {
      if (containerRect) {
        return `translateX(${containerRect.right + offsetX - rect.left}px)`;
      }
      return `translateX(${containerWindow.innerWidth + offsetX - rect.left}px)`;
    }
    if (direction === "right") {
      if (containerRect) {
        return `translateX(-${rect.right - containerRect.left - offsetX}px)`;
      }
      return `translateX(-${rect.left + rect.width - offsetX}px)`;
    }
    if (direction === "up") {
      if (containerRect) {
        return `translateY(${containerRect.bottom + offsetY - rect.top}px)`;
      }
      return `translateY(${containerWindow.innerHeight + offsetY - rect.top}px)`;
    }
    if (containerRect) {
      return `translateY(-${rect.top - containerRect.top + rect.height - offsetY}px)`;
    }
    return `translateY(-${rect.top + rect.height - offsetY}px)`;
  }
  function resolveContainer(containerPropProp) {
    return typeof containerPropProp === "function" ? containerPropProp() : containerPropProp;
  }
  function setTranslateValue(direction, node2, containerProp) {
    const resolvedContainer = resolveContainer(containerProp);
    const transform = getTranslateValue(direction, node2, resolvedContainer);
    if (transform) {
      node2.style.webkitTransform = transform;
      node2.style.transform = transform;
    }
  }
  const Slide = /* @__PURE__ */ React__namespace.forwardRef(function Slide2(props, ref) {
    const theme = useTheme();
    const defaultEasing = {
      enter: theme.transitions.easing.easeOut,
      exit: theme.transitions.easing.sharp
    };
    const defaultTimeout = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen
    };
    const {
      addEndListener,
      appear = true,
      children,
      container: containerProp,
      direction = "down",
      easing: easingProp = defaultEasing,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style: style2,
      timeout = defaultTimeout,
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Transition,
      ...other
    } = props;
    const childrenRef = React__namespace.useRef(null);
    const handleRef = useForkRef(getReactElementRef(children), childrenRef, ref);
    const normalizedTransitionCallback = (callback) => (isAppearing) => {
      if (callback) {
        if (isAppearing === void 0) {
          callback(childrenRef.current);
        } else {
          callback(childrenRef.current, isAppearing);
        }
      }
    };
    const handleEnter = normalizedTransitionCallback((node2, isAppearing) => {
      setTranslateValue(direction, node2, containerProp);
      reflow(node2);
      if (onEnter) {
        onEnter(node2, isAppearing);
      }
    });
    const handleEntering = normalizedTransitionCallback((node2, isAppearing) => {
      const transitionProps = getTransitionProps({
        timeout,
        style: style2,
        easing: easingProp
      }, {
        mode: "enter"
      });
      node2.style.webkitTransition = theme.transitions.create("-webkit-transform", {
        ...transitionProps
      });
      node2.style.transition = theme.transitions.create("transform", {
        ...transitionProps
      });
      node2.style.webkitTransform = "none";
      node2.style.transform = "none";
      if (onEntering) {
        onEntering(node2, isAppearing);
      }
    });
    const handleEntered = normalizedTransitionCallback(onEntered);
    const handleExiting = normalizedTransitionCallback(onExiting);
    const handleExit = normalizedTransitionCallback((node2) => {
      const transitionProps = getTransitionProps({
        timeout,
        style: style2,
        easing: easingProp
      }, {
        mode: "exit"
      });
      node2.style.webkitTransition = theme.transitions.create("-webkit-transform", transitionProps);
      node2.style.transition = theme.transitions.create("transform", transitionProps);
      setTranslateValue(direction, node2, containerProp);
      if (onExit) {
        onExit(node2);
      }
    });
    const handleExited = normalizedTransitionCallback((node2) => {
      node2.style.webkitTransition = "";
      node2.style.transition = "";
      if (onExited) {
        onExited(node2);
      }
    });
    const handleAddEndListener = (next2) => {
      if (addEndListener) {
        addEndListener(childrenRef.current, next2);
      }
    };
    const updatePosition = React__namespace.useCallback(() => {
      if (childrenRef.current) {
        setTranslateValue(direction, childrenRef.current, containerProp);
      }
    }, [direction, containerProp]);
    React__namespace.useEffect(() => {
      if (inProp || direction === "down" || direction === "right") {
        return void 0;
      }
      const handleResize = debounce$1(() => {
        if (childrenRef.current) {
          setTranslateValue(direction, childrenRef.current, containerProp);
        }
      });
      const containerWindow = ownerWindow(childrenRef.current);
      containerWindow.addEventListener("resize", handleResize);
      return () => {
        handleResize.clear();
        containerWindow.removeEventListener("resize", handleResize);
      };
    }, [direction, inProp, containerProp]);
    React__namespace.useEffect(() => {
      if (!inProp) {
        updatePosition();
      }
    }, [inProp, updatePosition]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, {
      nodeRef: childrenRef,
      onEnter: handleEnter,
      onEntered: handleEntered,
      onEntering: handleEntering,
      onExit: handleExit,
      onExited: handleExited,
      onExiting: handleExiting,
      addEndListener: handleAddEndListener,
      appear,
      in: inProp,
      timeout,
      ...other,
      children: (state, {
        ownerState,
        ...restChildProps
      }) => {
        return /* @__PURE__ */ React__namespace.cloneElement(children, {
          ref: handleRef,
          style: {
            visibility: state === "exited" && !inProp ? "hidden" : void 0,
            ...style2,
            ...children.props.style
          },
          ...restChildProps
        });
      }
    });
  });
  function getDrawerUtilityClass(slot) {
    return generateUtilityClass("MuiDrawer", slot);
  }
  generateUtilityClasses("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
  const overridesResolver$1 = (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, (ownerState.variant === "permanent" || ownerState.variant === "persistent") && styles2.docked, styles2.modal];
  };
  const useUtilityClasses$q = (ownerState) => {
    const {
      classes,
      anchor,
      variant
    } = ownerState;
    const slots = {
      root: ["root", `anchor${capitalize(anchor)}`],
      docked: [(variant === "permanent" || variant === "persistent") && "docked"],
      modal: ["modal"],
      paper: ["paper", `paperAnchor${capitalize(anchor)}`, variant !== "temporary" && `paperAnchorDocked${capitalize(anchor)}`]
    };
    return composeClasses(slots, getDrawerUtilityClass, classes);
  };
  const DrawerRoot = styled(Modal, {
    name: "MuiDrawer",
    slot: "Root",
    overridesResolver: overridesResolver$1
  })(memoTheme(({
    theme
  }) => ({
    zIndex: (theme.vars || theme).zIndex.drawer
  })));
  const DrawerDockedRoot = styled("div", {
    shouldForwardProp: rootShouldForwardProp,
    name: "MuiDrawer",
    slot: "Docked",
    skipVariantsResolver: false,
    overridesResolver: overridesResolver$1
  })({
    flex: "0 0 auto"
  });
  const DrawerPaper = styled(Paper, {
    name: "MuiDrawer",
    slot: "Paper",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.paper, styles2[`paperAnchor${capitalize(ownerState.anchor)}`], ownerState.variant !== "temporary" && styles2[`paperAnchorDocked${capitalize(ownerState.anchor)}`]];
    }
  })(memoTheme(({
    theme
  }) => ({
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    flex: "1 0 auto",
    zIndex: (theme.vars || theme).zIndex.drawer,
    // Add iOS momentum scrolling for iOS < 13.0
    WebkitOverflowScrolling: "touch",
    // temporary style
    position: "fixed",
    top: 0,
    // We disable the focus ring for mouse, touch and keyboard users.
    // At some point, it would be better to keep it for keyboard users.
    // :focus-ring CSS pseudo-class will help.
    outline: 0,
    variants: [{
      props: {
        anchor: "left"
      },
      style: {
        left: 0
      }
    }, {
      props: {
        anchor: "top"
      },
      style: {
        top: 0,
        left: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%"
      }
    }, {
      props: {
        anchor: "right"
      },
      style: {
        right: 0
      }
    }, {
      props: {
        anchor: "bottom"
      },
      style: {
        top: "auto",
        left: 0,
        bottom: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%"
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchor === "left" && ownerState.variant !== "temporary",
      style: {
        borderRight: `1px solid ${(theme.vars || theme).palette.divider}`
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchor === "top" && ownerState.variant !== "temporary",
      style: {
        borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchor === "right" && ownerState.variant !== "temporary",
      style: {
        borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchor === "bottom" && ownerState.variant !== "temporary",
      style: {
        borderTop: `1px solid ${(theme.vars || theme).palette.divider}`
      }
    }]
  })));
  const oppositeDirection = {
    left: "right",
    right: "left",
    top: "down",
    bottom: "up"
  };
  function isHorizontal(anchor) {
    return ["left", "right"].includes(anchor);
  }
  function getAnchor({
    direction
  }, anchor) {
    return direction === "rtl" && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
  }
  const Drawer = /* @__PURE__ */ React__namespace.forwardRef(function Drawer2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiDrawer"
    });
    const theme = useTheme();
    const isRtl = useRtl();
    const defaultTransitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen
    };
    const {
      anchor: anchorProp = "left",
      BackdropProps,
      children,
      className,
      elevation = 16,
      hideBackdrop = false,
      ModalProps: {
        BackdropProps: BackdropPropsProp,
        ...ModalProps
      } = {},
      onClose,
      open: open2 = false,
      PaperProps = {},
      SlideProps,
      // eslint-disable-next-line react/prop-types
      TransitionComponent,
      transitionDuration = defaultTransitionDuration,
      variant = "temporary",
      slots = {},
      slotProps = {},
      ...other
    } = props;
    const mounted = React__namespace.useRef(false);
    React__namespace.useEffect(() => {
      mounted.current = true;
    }, []);
    const anchorInvariant = getAnchor({
      direction: isRtl ? "rtl" : "ltr"
    }, anchorProp);
    const anchor = anchorProp;
    const ownerState = {
      ...props,
      anchor,
      elevation,
      open: open2,
      variant,
      ...other
    };
    const classes = useUtilityClasses$q(ownerState);
    const externalForwardedProps = {
      slots: {
        transition: TransitionComponent,
        ...slots
      },
      slotProps: {
        paper: PaperProps,
        transition: SlideProps,
        ...slotProps,
        backdrop: mergeSlotProps(slotProps.backdrop || {
          ...BackdropProps,
          ...BackdropPropsProp
        }, {
          transitionDuration
        })
      }
    };
    const [RootSlot, rootSlotProps] = useSlot("root", {
      ref,
      elementType: DrawerRoot,
      className: clsx(classes.root, classes.modal, className),
      shouldForwardComponentProp: true,
      ownerState,
      externalForwardedProps: {
        ...externalForwardedProps,
        ...other,
        ...ModalProps
      },
      additionalProps: {
        open: open2,
        onClose,
        hideBackdrop,
        slots: {
          backdrop: externalForwardedProps.slots.backdrop
        },
        slotProps: {
          backdrop: externalForwardedProps.slotProps.backdrop
        }
      }
    });
    const [PaperSlot, paperSlotProps] = useSlot("paper", {
      elementType: DrawerPaper,
      shouldForwardComponentProp: true,
      className: clsx(classes.paper, PaperProps.className),
      ownerState,
      externalForwardedProps,
      additionalProps: {
        elevation: variant === "temporary" ? elevation : 0,
        square: true
      }
    });
    const [DockedSlot, dockedSlotProps] = useSlot("docked", {
      elementType: DrawerDockedRoot,
      ref,
      className: clsx(classes.root, classes.docked, className),
      ownerState,
      externalForwardedProps,
      additionalProps: other
      // pass `other` here because `DockedSlot` is also a root slot for some variants
    });
    const [TransitionSlot, transitionSlotProps] = useSlot("transition", {
      elementType: Slide,
      ownerState,
      externalForwardedProps,
      additionalProps: {
        in: open2,
        direction: oppositeDirection[anchorInvariant],
        timeout: transitionDuration,
        appear: mounted.current
      }
    });
    const drawer = /* @__PURE__ */ jsxRuntimeExports.jsx(PaperSlot, {
      ...paperSlotProps,
      children
    });
    if (variant === "permanent") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(DockedSlot, {
        ...dockedSlotProps,
        children: drawer
      });
    }
    const slidingDrawer = /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionSlot, {
      ...transitionSlotProps,
      children: drawer
    });
    if (variant === "persistent") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(DockedSlot, {
        ...dockedSlotProps,
        children: slidingDrawer
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RootSlot, {
      ...rootSlotProps,
      children: slidingDrawer
    });
  });
  const useUtilityClasses$p = (ownerState) => {
    const {
      classes,
      disableUnderline,
      startAdornment,
      endAdornment,
      size,
      hiddenLabel,
      multiline
    } = ownerState;
    const slots = {
      root: ["root", !disableUnderline && "underline", startAdornment && "adornedStart", endAdornment && "adornedEnd", size === "small" && `size${capitalize(size)}`, hiddenLabel && "hiddenLabel", multiline && "multiline"],
      input: ["input"]
    };
    const composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
    return {
      ...classes,
      // forward classes to the InputBase
      ...composedClasses
    };
  };
  const FilledInputRoot = styled(InputBaseRoot, {
    shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [...rootOverridesResolver(props, styles2), !ownerState.disableUnderline && styles2.underline];
    }
  })(memoTheme(({
    theme
  }) => {
    const light2 = theme.palette.mode === "light";
    const bottomLineColor = light2 ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
    const backgroundColor2 = light2 ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
    const hoverBackground = light2 ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)";
    const disabledBackground = light2 ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return {
      position: "relative",
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor2,
      borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
      borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
      transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      "&:hover": {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor2
        }
      },
      [`&.${filledInputClasses.focused}`]: {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor2
      },
      [`&.${filledInputClasses.disabled}`]: {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
      },
      variants: [{
        props: ({
          ownerState
        }) => !ownerState.disableUnderline,
        style: {
          "&::after": {
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: theme.transitions.create("transform", {
              duration: theme.transitions.duration.shorter,
              easing: theme.transitions.easing.easeOut
            }),
            pointerEvents: "none"
            // Transparent to the hover style.
          },
          [`&.${filledInputClasses.focused}:after`]: {
            // translateX(0) is a workaround for Safari transform scale bug
            // See https://github.com/mui/material-ui/issues/31766
            transform: "scaleX(1) translateX(0)"
          },
          [`&.${filledInputClasses.error}`]: {
            "&::before, &::after": {
              borderBottomColor: (theme.vars || theme).palette.error.main
            }
          },
          "&::before": {
            borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: theme.transitions.create("border-bottom-color", {
              duration: theme.transitions.duration.shorter
            }),
            pointerEvents: "none"
            // Transparent to the hover style.
          },
          [`&:hover:not(.${filledInputClasses.disabled}, .${filledInputClasses.error}):before`]: {
            borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
          },
          [`&.${filledInputClasses.disabled}:before`]: {
            borderBottomStyle: "dotted"
          }
        }
      }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color2]) => {
        var _a;
        return {
          props: {
            disableUnderline: false,
            color: color2
          },
          style: {
            "&::after": {
              borderBottom: `2px solid ${(_a = (theme.vars || theme).palette[color2]) == null ? void 0 : _a.main}`
            }
          }
        };
      }), {
        props: ({
          ownerState
        }) => ownerState.startAdornment,
        style: {
          paddingLeft: 12
        }
      }, {
        props: ({
          ownerState
        }) => ownerState.endAdornment,
        style: {
          paddingRight: 12
        }
      }, {
        props: ({
          ownerState
        }) => ownerState.multiline,
        style: {
          padding: "25px 12px 8px"
        }
      }, {
        props: ({
          ownerState,
          size
        }) => ownerState.multiline && size === "small",
        style: {
          paddingTop: 21,
          paddingBottom: 4
        }
      }, {
        props: ({
          ownerState
        }) => ownerState.multiline && ownerState.hiddenLabel,
        style: {
          paddingTop: 16,
          paddingBottom: 17
        }
      }, {
        props: ({
          ownerState
        }) => ownerState.multiline && ownerState.hiddenLabel && ownerState.size === "small",
        style: {
          paddingTop: 8,
          paddingBottom: 9
        }
      }]
    };
  }));
  const FilledInputInput = styled(InputBaseInput, {
    name: "MuiFilledInput",
    slot: "Input",
    overridesResolver: inputOverridesResolver
  })(memoTheme(({
    theme
  }) => ({
    paddingTop: 25,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    ...!theme.vars && {
      "&:-webkit-autofill": {
        WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
        caretColor: theme.palette.mode === "light" ? null : "#fff",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
      }
    },
    ...theme.vars && {
      "&:-webkit-autofill": {
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
      },
      [theme.getColorSchemeSelector("dark")]: {
        "&:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 100px #266798 inset",
          WebkitTextFillColor: "#fff",
          caretColor: "#fff"
        }
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.startAdornment,
      style: {
        paddingLeft: 0
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.endAdornment,
      style: {
        paddingRight: 0
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.hiddenLabel && ownerState.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline,
      style: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
      }
    }]
  })));
  const FilledInput = /* @__PURE__ */ React__namespace.forwardRef(function FilledInput2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiFilledInput"
    });
    const {
      disableUnderline = false,
      components = {},
      componentsProps: componentsPropsProp,
      fullWidth = false,
      hiddenLabel,
      // declare here to prevent spreading to DOM
      inputComponent = "input",
      multiline = false,
      slotProps,
      slots = {},
      type = "text",
      ...other
    } = props;
    const ownerState = {
      ...props,
      disableUnderline,
      fullWidth,
      inputComponent,
      multiline,
      type
    };
    const classes = useUtilityClasses$p(props);
    const filledInputComponentsProps = {
      root: {
        ownerState
      },
      input: {
        ownerState
      }
    };
    const componentsProps = slotProps ?? componentsPropsProp ? deepmerge(filledInputComponentsProps, slotProps ?? componentsPropsProp) : filledInputComponentsProps;
    const RootSlot = slots.root ?? components.Root ?? FilledInputRoot;
    const InputSlot = slots.input ?? components.Input ?? FilledInputInput;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase, {
      slots: {
        root: RootSlot,
        input: InputSlot
      },
      slotProps: componentsProps,
      fullWidth,
      inputComponent,
      multiline,
      ref,
      type,
      ...other,
      classes
    });
  });
  FilledInput.muiName = "Input";
  function getFormControlUtilityClasses(slot) {
    return generateUtilityClass("MuiFormControl", slot);
  }
  generateUtilityClasses("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
  const useUtilityClasses$o = (ownerState) => {
    const {
      classes,
      margin: margin2,
      fullWidth
    } = ownerState;
    const slots = {
      root: ["root", margin2 !== "none" && `margin${capitalize(margin2)}`, fullWidth && "fullWidth"]
    };
    return composeClasses(slots, getFormControlUtilityClasses, classes);
  };
  const FormControlRoot = styled("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, styles2[`margin${capitalize(ownerState.margin)}`], ownerState.fullWidth && styles2.fullWidth];
    }
  })({
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    // Reset fieldset default style.
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top",
    // Fix alignment issue on Safari.
    variants: [{
      props: {
        margin: "normal"
      },
      style: {
        marginTop: 16,
        marginBottom: 8
      }
    }, {
      props: {
        margin: "dense"
      },
      style: {
        marginTop: 8,
        marginBottom: 4
      }
    }, {
      props: {
        fullWidth: true
      },
      style: {
        width: "100%"
      }
    }]
  });
  const FormControl = /* @__PURE__ */ React__namespace.forwardRef(function FormControl2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiFormControl"
    });
    const {
      children,
      className,
      color: color2 = "primary",
      component = "div",
      disabled = false,
      error = false,
      focused: visuallyFocused,
      fullWidth = false,
      hiddenLabel = false,
      margin: margin2 = "none",
      required = false,
      size = "medium",
      variant = "outlined",
      ...other
    } = props;
    const ownerState = {
      ...props,
      color: color2,
      component,
      disabled,
      error,
      fullWidth,
      hiddenLabel,
      margin: margin2,
      required,
      size,
      variant
    };
    const classes = useUtilityClasses$o(ownerState);
    const [adornedStart, setAdornedStart] = React__namespace.useState(() => {
      let initialAdornedStart = false;
      if (children) {
        React__namespace.Children.forEach(children, (child) => {
          if (!isMuiElement(child, ["Input", "Select"])) {
            return;
          }
          const input = isMuiElement(child, ["Select"]) ? child.props.input : child;
          if (input && isAdornedStart(input.props)) {
            initialAdornedStart = true;
          }
        });
      }
      return initialAdornedStart;
    });
    const [filled, setFilled] = React__namespace.useState(() => {
      let initialFilled = false;
      if (children) {
        React__namespace.Children.forEach(children, (child) => {
          if (!isMuiElement(child, ["Input", "Select"])) {
            return;
          }
          if (isFilled(child.props, true) || isFilled(child.props.inputProps, true)) {
            initialFilled = true;
          }
        });
      }
      return initialFilled;
    });
    const [focusedState, setFocused] = React__namespace.useState(false);
    if (disabled && focusedState) {
      setFocused(false);
    }
    const focused = visuallyFocused !== void 0 && !disabled ? visuallyFocused : focusedState;
    let registerEffect;
    React__namespace.useRef(false);
    const onFilled = React__namespace.useCallback(() => {
      setFilled(true);
    }, []);
    const onEmpty = React__namespace.useCallback(() => {
      setFilled(false);
    }, []);
    const childContext = React__namespace.useMemo(() => {
      return {
        adornedStart,
        setAdornedStart,
        color: color2,
        disabled,
        error,
        filled,
        focused,
        fullWidth,
        hiddenLabel,
        size,
        onBlur: () => {
          setFocused(false);
        },
        onFocus: () => {
          setFocused(true);
        },
        onEmpty,
        onFilled,
        registerEffect,
        required,
        variant
      };
    }, [adornedStart, color2, disabled, error, filled, focused, fullWidth, hiddenLabel, registerEffect, onEmpty, onFilled, required, size, variant]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlContext.Provider, {
      value: childContext,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlRoot, {
        as: component,
        ownerState,
        className: clsx(classes.root, className),
        ref,
        ...other,
        children
      })
    });
  });
  function getFormControlLabelUtilityClasses(slot) {
    return generateUtilityClass("MuiFormControlLabel", slot);
  }
  const formControlLabelClasses = generateUtilityClasses("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
  const useUtilityClasses$n = (ownerState) => {
    const {
      classes,
      disabled,
      labelPlacement,
      error,
      required
    } = ownerState;
    const slots = {
      root: ["root", disabled && "disabled", `labelPlacement${capitalize(labelPlacement)}`, error && "error", required && "required"],
      label: ["label", disabled && "disabled"],
      asterisk: ["asterisk", error && "error"]
    };
    return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
  };
  const FormControlLabelRoot = styled("label", {
    name: "MuiFormControlLabel",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [{
        [`& .${formControlLabelClasses.label}`]: styles2.label
      }, styles2.root, styles2[`labelPlacement${capitalize(ownerState.labelPlacement)}`]];
    }
  })(memoTheme(({
    theme
  }) => ({
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    // For correct alignment with the text.
    verticalAlign: "middle",
    WebkitTapHighlightColor: "transparent",
    marginLeft: -11,
    marginRight: 16,
    // used for row presentation of radio/checkbox
    [`&.${formControlLabelClasses.disabled}`]: {
      cursor: "default"
    },
    [`& .${formControlLabelClasses.label}`]: {
      [`&.${formControlLabelClasses.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      }
    },
    variants: [{
      props: {
        labelPlacement: "start"
      },
      style: {
        flexDirection: "row-reverse",
        marginRight: -11
      }
    }, {
      props: {
        labelPlacement: "top"
      },
      style: {
        flexDirection: "column-reverse"
      }
    }, {
      props: {
        labelPlacement: "bottom"
      },
      style: {
        flexDirection: "column"
      }
    }, {
      props: ({
        labelPlacement
      }) => labelPlacement === "start" || labelPlacement === "top" || labelPlacement === "bottom",
      style: {
        marginLeft: 16
        // used for row presentation of radio/checkbox
      }
    }]
  })));
  const AsteriskComponent$1 = styled("span", {
    name: "MuiFormControlLabel",
    slot: "Asterisk",
    overridesResolver: (props, styles2) => styles2.asterisk
  })(memoTheme(({
    theme
  }) => ({
    [`&.${formControlLabelClasses.error}`]: {
      color: (theme.vars || theme).palette.error.main
    }
  })));
  const FormControlLabel = /* @__PURE__ */ React__namespace.forwardRef(function FormControlLabel2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiFormControlLabel"
    });
    const {
      checked,
      className,
      componentsProps = {},
      control,
      disabled: disabledProp,
      disableTypography,
      inputRef,
      label: labelProp,
      labelPlacement = "end",
      name,
      onChange,
      required: requiredProp,
      slots = {},
      slotProps = {},
      value,
      ...other
    } = props;
    const muiFormControl = useFormControl();
    const disabled = disabledProp ?? control.props.disabled ?? (muiFormControl == null ? void 0 : muiFormControl.disabled);
    const required = requiredProp ?? control.props.required;
    const controlProps = {
      disabled,
      required
    };
    ["checked", "name", "onChange", "value", "inputRef"].forEach((key2) => {
      if (typeof control.props[key2] === "undefined" && typeof props[key2] !== "undefined") {
        controlProps[key2] = props[key2];
      }
    });
    const fcs = formControlState({
      props,
      muiFormControl,
      states: ["error"]
    });
    const ownerState = {
      ...props,
      disabled,
      labelPlacement,
      required,
      error: fcs.error
    };
    const classes = useUtilityClasses$n(ownerState);
    const externalForwardedProps = {
      slots,
      slotProps: {
        ...componentsProps,
        ...slotProps
      }
    };
    const [TypographySlot, typographySlotProps] = useSlot("typography", {
      elementType: Typography,
      externalForwardedProps,
      ownerState
    });
    let label = labelProp;
    if (label != null && label.type !== Typography && !disableTypography) {
      label = /* @__PURE__ */ jsxRuntimeExports.jsx(TypographySlot, {
        component: "span",
        ...typographySlotProps,
        className: clsx(classes.label, typographySlotProps == null ? void 0 : typographySlotProps.className),
        children: label
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControlLabelRoot, {
      className: clsx(classes.root, className),
      ownerState,
      ref,
      ...other,
      children: [/* @__PURE__ */ React__namespace.cloneElement(control, controlProps), required ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        children: [label, /* @__PURE__ */ jsxRuntimeExports.jsxs(AsteriskComponent$1, {
          ownerState,
          "aria-hidden": true,
          className: classes.asterisk,
          children: [" ", "*"]
        })]
      }) : label]
    });
  });
  function getFormHelperTextUtilityClasses(slot) {
    return generateUtilityClass("MuiFormHelperText", slot);
  }
  const formHelperTextClasses = generateUtilityClasses("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
  var _span$2;
  const useUtilityClasses$m = (ownerState) => {
    const {
      classes,
      contained,
      size,
      disabled,
      error,
      filled,
      focused,
      required
    } = ownerState;
    const slots = {
      root: ["root", disabled && "disabled", error && "error", size && `size${capitalize(size)}`, contained && "contained", focused && "focused", filled && "filled", required && "required"]
    };
    return composeClasses(slots, getFormHelperTextUtilityClasses, classes);
  };
  const FormHelperTextRoot = styled("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, ownerState.size && styles2[`size${capitalize(ownerState.size)}`], ownerState.contained && styles2.contained, ownerState.filled && styles2.filled];
    }
  })(memoTheme(({
    theme
  }) => ({
    color: (theme.vars || theme).palette.text.secondary,
    ...theme.typography.caption,
    textAlign: "left",
    marginTop: 3,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    [`&.${formHelperTextClasses.disabled}`]: {
      color: (theme.vars || theme).palette.text.disabled
    },
    [`&.${formHelperTextClasses.error}`]: {
      color: (theme.vars || theme).palette.error.main
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        marginTop: 4
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.contained,
      style: {
        marginLeft: 14,
        marginRight: 14
      }
    }]
  })));
  const FormHelperText = /* @__PURE__ */ React__namespace.forwardRef(function FormHelperText2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiFormHelperText"
    });
    const {
      children,
      className,
      component = "p",
      disabled,
      error,
      filled,
      focused,
      margin: margin2,
      required,
      variant,
      ...other
    } = props;
    const muiFormControl = useFormControl();
    const fcs = formControlState({
      props,
      muiFormControl,
      states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
    });
    const ownerState = {
      ...props,
      component,
      contained: fcs.variant === "filled" || fcs.variant === "outlined",
      variant: fcs.variant,
      size: fcs.size,
      disabled: fcs.disabled,
      error: fcs.error,
      filled: fcs.filled,
      focused: fcs.focused,
      required: fcs.required
    };
    delete ownerState.ownerState;
    const classes = useUtilityClasses$m(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperTextRoot, {
      as: component,
      className: clsx(classes.root, className),
      ref,
      ...other,
      ownerState,
      children: children === " " ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span$2 || (_span$2 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "​"
        }))
      ) : children
    });
  });
  function getFormLabelUtilityClasses(slot) {
    return generateUtilityClass("MuiFormLabel", slot);
  }
  const formLabelClasses = generateUtilityClasses("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
  const useUtilityClasses$l = (ownerState) => {
    const {
      classes,
      color: color2,
      focused,
      disabled,
      error,
      filled,
      required
    } = ownerState;
    const slots = {
      root: ["root", `color${capitalize(color2)}`, disabled && "disabled", error && "error", filled && "filled", focused && "focused", required && "required"],
      asterisk: ["asterisk", error && "error"]
    };
    return composeClasses(slots, getFormLabelUtilityClasses, classes);
  };
  const FormLabelRoot = styled("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, ownerState.color === "secondary" && styles2.colorSecondary, ownerState.filled && styles2.filled];
    }
  })(memoTheme(({
    theme
  }) => ({
    color: (theme.vars || theme).palette.text.secondary,
    ...theme.typography.body1,
    lineHeight: "1.4375em",
    padding: 0,
    position: "relative",
    variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color2]) => ({
      props: {
        color: color2
      },
      style: {
        [`&.${formLabelClasses.focused}`]: {
          color: (theme.vars || theme).palette[color2].main
        }
      }
    })), {
      props: {},
      style: {
        [`&.${formLabelClasses.disabled}`]: {
          color: (theme.vars || theme).palette.text.disabled
        },
        [`&.${formLabelClasses.error}`]: {
          color: (theme.vars || theme).palette.error.main
        }
      }
    }]
  })));
  const AsteriskComponent = styled("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (props, styles2) => styles2.asterisk
  })(memoTheme(({
    theme
  }) => ({
    [`&.${formLabelClasses.error}`]: {
      color: (theme.vars || theme).palette.error.main
    }
  })));
  const FormLabel = /* @__PURE__ */ React__namespace.forwardRef(function FormLabel2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiFormLabel"
    });
    const {
      children,
      className,
      color: color2,
      component = "label",
      disabled,
      error,
      filled,
      focused,
      required,
      ...other
    } = props;
    const muiFormControl = useFormControl();
    const fcs = formControlState({
      props,
      muiFormControl,
      states: ["color", "required", "focused", "disabled", "error", "filled"]
    });
    const ownerState = {
      ...props,
      color: fcs.color || "primary",
      component,
      disabled: fcs.disabled,
      error: fcs.error,
      filled: fcs.filled,
      focused: fcs.focused,
      required: fcs.required
    };
    const classes = useUtilityClasses$l(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabelRoot, {
      as: component,
      ownerState,
      className: clsx(classes.root, className),
      ref,
      ...other,
      children: [children, fcs.required && /* @__PURE__ */ jsxRuntimeExports.jsxs(AsteriskComponent, {
        ownerState,
        "aria-hidden": true,
        className: classes.asterisk,
        children: [" ", "*"]
      })]
    });
  });
  function getScale(value) {
    return `scale(${value}, ${value ** 2})`;
  }
  const styles = {
    entering: {
      opacity: 1,
      transform: getScale(1)
    },
    entered: {
      opacity: 1,
      transform: "none"
    }
  };
  const isWebKit154 = typeof navigator !== "undefined" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
  const Grow = /* @__PURE__ */ React__namespace.forwardRef(function Grow2(props, ref) {
    const {
      addEndListener,
      appear = true,
      children,
      easing: easing2,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style: style2,
      timeout = "auto",
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Transition,
      ...other
    } = props;
    const timer2 = useTimeout();
    const autoTimeout = React__namespace.useRef();
    const theme = useTheme();
    const nodeRef = React__namespace.useRef(null);
    const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);
    const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
      if (callback) {
        const node2 = nodeRef.current;
        if (maybeIsAppearing === void 0) {
          callback(node2);
        } else {
          callback(node2, maybeIsAppearing);
        }
      }
    };
    const handleEntering = normalizedTransitionCallback(onEntering);
    const handleEnter = normalizedTransitionCallback((node2, isAppearing) => {
      reflow(node2);
      const {
        duration: transitionDuration,
        delay,
        easing: transitionTimingFunction
      } = getTransitionProps({
        style: style2,
        timeout,
        easing: easing2
      }, {
        mode: "enter"
      });
      let duration2;
      if (timeout === "auto") {
        duration2 = theme.transitions.getAutoHeightDuration(node2.clientHeight);
        autoTimeout.current = duration2;
      } else {
        duration2 = transitionDuration;
      }
      node2.style.transition = [theme.transitions.create("opacity", {
        duration: duration2,
        delay
      }), theme.transitions.create("transform", {
        duration: isWebKit154 ? duration2 : duration2 * 0.666,
        delay,
        easing: transitionTimingFunction
      })].join(",");
      if (onEnter) {
        onEnter(node2, isAppearing);
      }
    });
    const handleEntered = normalizedTransitionCallback(onEntered);
    const handleExiting = normalizedTransitionCallback(onExiting);
    const handleExit = normalizedTransitionCallback((node2) => {
      const {
        duration: transitionDuration,
        delay,
        easing: transitionTimingFunction
      } = getTransitionProps({
        style: style2,
        timeout,
        easing: easing2
      }, {
        mode: "exit"
      });
      let duration2;
      if (timeout === "auto") {
        duration2 = theme.transitions.getAutoHeightDuration(node2.clientHeight);
        autoTimeout.current = duration2;
      } else {
        duration2 = transitionDuration;
      }
      node2.style.transition = [theme.transitions.create("opacity", {
        duration: duration2,
        delay
      }), theme.transitions.create("transform", {
        duration: isWebKit154 ? duration2 : duration2 * 0.666,
        delay: isWebKit154 ? delay : delay || duration2 * 0.333,
        easing: transitionTimingFunction
      })].join(",");
      node2.style.opacity = 0;
      node2.style.transform = getScale(0.75);
      if (onExit) {
        onExit(node2);
      }
    });
    const handleExited = normalizedTransitionCallback(onExited);
    const handleAddEndListener = (next2) => {
      if (timeout === "auto") {
        timer2.start(autoTimeout.current || 0, next2);
      }
      if (addEndListener) {
        addEndListener(nodeRef.current, next2);
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, {
      appear,
      in: inProp,
      nodeRef,
      onEnter: handleEnter,
      onEntered: handleEntered,
      onEntering: handleEntering,
      onExit: handleExit,
      onExited: handleExited,
      onExiting: handleExiting,
      addEndListener: handleAddEndListener,
      timeout: timeout === "auto" ? null : timeout,
      ...other,
      children: (state, {
        ownerState,
        ...restChildProps
      }) => {
        return /* @__PURE__ */ React__namespace.cloneElement(children, {
          style: {
            opacity: 0,
            transform: getScale(0.75),
            visibility: state === "exited" && !inProp ? "hidden" : void 0,
            ...styles[state],
            ...style2,
            ...children.props.style
          },
          ref: handleRef,
          ...restChildProps
        });
      }
    });
  });
  if (Grow) {
    Grow.muiSupportAuto = true;
  }
  const useUtilityClasses$k = (ownerState) => {
    const {
      classes,
      disableUnderline
    } = ownerState;
    const slots = {
      root: ["root", !disableUnderline && "underline"],
      input: ["input"]
    };
    const composedClasses = composeClasses(slots, getInputUtilityClass, classes);
    return {
      ...classes,
      // forward classes to the InputBase
      ...composedClasses
    };
  };
  const InputRoot = styled(InputBaseRoot, {
    shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [...rootOverridesResolver(props, styles2), !ownerState.disableUnderline && styles2.underline];
    }
  })(memoTheme(({
    theme
  }) => {
    const light2 = theme.palette.mode === "light";
    let bottomLineColor = light2 ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
    if (theme.vars) {
      bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
    }
    return {
      position: "relative",
      variants: [{
        props: ({
          ownerState
        }) => ownerState.formControl,
        style: {
          "label + &": {
            marginTop: 16
          }
        }
      }, {
        props: ({
          ownerState
        }) => !ownerState.disableUnderline,
        style: {
          "&::after": {
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: theme.transitions.create("transform", {
              duration: theme.transitions.duration.shorter,
              easing: theme.transitions.easing.easeOut
            }),
            pointerEvents: "none"
            // Transparent to the hover style.
          },
          [`&.${inputClasses.focused}:after`]: {
            // translateX(0) is a workaround for Safari transform scale bug
            // See https://github.com/mui/material-ui/issues/31766
            transform: "scaleX(1) translateX(0)"
          },
          [`&.${inputClasses.error}`]: {
            "&::before, &::after": {
              borderBottomColor: (theme.vars || theme).palette.error.main
            }
          },
          "&::before": {
            borderBottom: `1px solid ${bottomLineColor}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: theme.transitions.create("border-bottom-color", {
              duration: theme.transitions.duration.shorter
            }),
            pointerEvents: "none"
            // Transparent to the hover style.
          },
          [`&:hover:not(.${inputClasses.disabled}, .${inputClasses.error}):before`]: {
            borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
              borderBottom: `1px solid ${bottomLineColor}`
            }
          },
          [`&.${inputClasses.disabled}:before`]: {
            borderBottomStyle: "dotted"
          }
        }
      }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color2]) => ({
        props: {
          color: color2,
          disableUnderline: false
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(theme.vars || theme).palette[color2].main}`
          }
        }
      }))]
    };
  }));
  const InputInput = styled(InputBaseInput, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: inputOverridesResolver
  })({});
  const Input = /* @__PURE__ */ React__namespace.forwardRef(function Input2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiInput"
    });
    const {
      disableUnderline = false,
      components = {},
      componentsProps: componentsPropsProp,
      fullWidth = false,
      inputComponent = "input",
      multiline = false,
      slotProps,
      slots = {},
      type = "text",
      ...other
    } = props;
    const classes = useUtilityClasses$k(props);
    const ownerState = {
      disableUnderline
    };
    const inputComponentsProps = {
      root: {
        ownerState
      }
    };
    const componentsProps = slotProps ?? componentsPropsProp ? deepmerge(slotProps ?? componentsPropsProp, inputComponentsProps) : inputComponentsProps;
    const RootSlot = slots.root ?? components.Root ?? InputRoot;
    const InputSlot = slots.input ?? components.Input ?? InputInput;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase, {
      slots: {
        root: RootSlot,
        input: InputSlot
      },
      slotProps: componentsProps,
      fullWidth,
      inputComponent,
      multiline,
      ref,
      type,
      ...other,
      classes
    });
  });
  Input.muiName = "Input";
  function getInputLabelUtilityClasses(slot) {
    return generateUtilityClass("MuiInputLabel", slot);
  }
  generateUtilityClasses("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
  const useUtilityClasses$j = (ownerState) => {
    const {
      classes,
      formControl,
      size,
      shrink,
      disableAnimation,
      variant,
      required
    } = ownerState;
    const slots = {
      root: ["root", formControl && "formControl", !disableAnimation && "animated", shrink && "shrink", size && size !== "medium" && `size${capitalize(size)}`, variant],
      asterisk: [required && "asterisk"]
    };
    const composedClasses = composeClasses(slots, getInputLabelUtilityClasses, classes);
    return {
      ...classes,
      // forward the focused, disabled, etc. classes to the FormLabel
      ...composedClasses
    };
  };
  const InputLabelRoot = styled(FormLabel, {
    shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [{
        [`& .${formLabelClasses.asterisk}`]: styles2.asterisk
      }, styles2.root, ownerState.formControl && styles2.formControl, ownerState.size === "small" && styles2.sizeSmall, ownerState.shrink && styles2.shrink, !ownerState.disableAnimation && styles2.animated, ownerState.focused && styles2.focused, styles2[ownerState.variant]];
    }
  })(memoTheme(({
    theme
  }) => ({
    display: "block",
    transformOrigin: "top left",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    variants: [{
      props: ({
        ownerState
      }) => ownerState.formControl,
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        // slight alteration to spec spacing to match visual spec result
        transform: "translate(0, 20px) scale(1)"
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        // Compensation for the `Input.inputSizeSmall` style.
        transform: "translate(0, 17px) scale(1)"
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.shrink,
      style: {
        transform: "translate(0, -1.5px) scale(0.75)",
        transformOrigin: "top left",
        maxWidth: "133%"
      }
    }, {
      props: ({
        ownerState
      }) => !ownerState.disableAnimation,
      style: {
        transition: theme.transitions.create(["color", "transform", "max-width"], {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        })
      }
    }, {
      props: {
        variant: "filled"
      },
      style: {
        // Chrome's autofill feature gives the input field a yellow background.
        // Since the input field is behind the label in the HTML tree,
        // the input field is drawn last and hides the label with an opaque background color.
        // zIndex: 1 will raise the label above opaque background-colors of input.
        zIndex: 1,
        pointerEvents: "none",
        transform: "translate(12px, 16px) scale(1)",
        maxWidth: "calc(100% - 24px)"
      }
    }, {
      props: {
        variant: "filled",
        size: "small"
      },
      style: {
        transform: "translate(12px, 13px) scale(1)"
      }
    }, {
      props: ({
        variant,
        ownerState
      }) => variant === "filled" && ownerState.shrink,
      style: {
        userSelect: "none",
        pointerEvents: "auto",
        transform: "translate(12px, 7px) scale(0.75)",
        maxWidth: "calc(133% - 24px)"
      }
    }, {
      props: ({
        variant,
        ownerState,
        size
      }) => variant === "filled" && ownerState.shrink && size === "small",
      style: {
        transform: "translate(12px, 4px) scale(0.75)"
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        // see comment above on filled.zIndex
        zIndex: 1,
        pointerEvents: "none",
        transform: "translate(14px, 16px) scale(1)",
        maxWidth: "calc(100% - 24px)"
      }
    }, {
      props: {
        variant: "outlined",
        size: "small"
      },
      style: {
        transform: "translate(14px, 9px) scale(1)"
      }
    }, {
      props: ({
        variant,
        ownerState
      }) => variant === "outlined" && ownerState.shrink,
      style: {
        userSelect: "none",
        pointerEvents: "auto",
        // Theoretically, we should have (8+5)*2/0.75 = 34px
        // but it feels a better when it bleeds a bit on the left, so 32px.
        maxWidth: "calc(133% - 32px)",
        transform: "translate(14px, -9px) scale(0.75)"
      }
    }]
  })));
  const InputLabel = /* @__PURE__ */ React__namespace.forwardRef(function InputLabel2(inProps, ref) {
    const props = useDefaultProps({
      name: "MuiInputLabel",
      props: inProps
    });
    const {
      disableAnimation = false,
      margin: margin2,
      shrink: shrinkProp,
      variant,
      className,
      ...other
    } = props;
    const muiFormControl = useFormControl();
    let shrink = shrinkProp;
    if (typeof shrink === "undefined" && muiFormControl) {
      shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
    }
    const fcs = formControlState({
      props,
      muiFormControl,
      states: ["size", "variant", "required", "focused"]
    });
    const ownerState = {
      ...props,
      disableAnimation,
      formControl: muiFormControl,
      shrink,
      size: fcs.size,
      variant: fcs.variant,
      required: fcs.required,
      focused: fcs.focused
    };
    const classes = useUtilityClasses$j(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabelRoot, {
      "data-shrink": shrink,
      ref,
      className: clsx(classes.root, className),
      ...other,
      ownerState,
      classes
    });
  });
  const ListContext = /* @__PURE__ */ React__namespace.createContext({});
  function getListUtilityClass(slot) {
    return generateUtilityClass("MuiList", slot);
  }
  generateUtilityClasses("MuiList", ["root", "padding", "dense", "subheader"]);
  const useUtilityClasses$i = (ownerState) => {
    const {
      classes,
      disablePadding,
      dense,
      subheader
    } = ownerState;
    const slots = {
      root: ["root", !disablePadding && "padding", dense && "dense", subheader && "subheader"]
    };
    return composeClasses(slots, getListUtilityClass, classes);
  };
  const ListRoot = styled("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, !ownerState.disablePadding && styles2.padding, ownerState.dense && styles2.dense, ownerState.subheader && styles2.subheader];
    }
  })({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    variants: [{
      props: ({
        ownerState
      }) => !ownerState.disablePadding,
      style: {
        paddingTop: 8,
        paddingBottom: 8
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.subheader,
      style: {
        paddingTop: 0
      }
    }]
  });
  const List = /* @__PURE__ */ React__namespace.forwardRef(function List2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiList"
    });
    const {
      children,
      className,
      component = "ul",
      dense = false,
      disablePadding = false,
      subheader,
      ...other
    } = props;
    const context = React__namespace.useMemo(() => ({
      dense
    }), [dense]);
    const ownerState = {
      ...props,
      component,
      dense,
      disablePadding
    };
    const classes = useUtilityClasses$i(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ListContext.Provider, {
      value: context,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ListRoot, {
        as: component,
        className: clsx(classes.root, className),
        ref,
        ownerState,
        ...other,
        children: [subheader, children]
      })
    });
  });
  const listItemIconClasses = generateUtilityClasses("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
  const listItemTextClasses = generateUtilityClasses("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
  function nextItem(list, item, disableListWrap) {
    if (list === item) {
      return list.firstChild;
    }
    if (item && item.nextElementSibling) {
      return item.nextElementSibling;
    }
    return disableListWrap ? null : list.firstChild;
  }
  function previousItem(list, item, disableListWrap) {
    if (list === item) {
      return disableListWrap ? list.firstChild : list.lastChild;
    }
    if (item && item.previousElementSibling) {
      return item.previousElementSibling;
    }
    return disableListWrap ? null : list.lastChild;
  }
  function textCriteriaMatches(nextFocus, textCriteria) {
    if (textCriteria === void 0) {
      return true;
    }
    let text = nextFocus.innerText;
    if (text === void 0) {
      text = nextFocus.textContent;
    }
    text = text.trim().toLowerCase();
    if (text.length === 0) {
      return false;
    }
    if (textCriteria.repeating) {
      return text[0] === textCriteria.keys[0];
    }
    return text.startsWith(textCriteria.keys.join(""));
  }
  function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
    let wrappedOnce = false;
    let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
    while (nextFocus) {
      if (nextFocus === list.firstChild) {
        if (wrappedOnce) {
          return false;
        }
        wrappedOnce = true;
      }
      const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
      if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
        nextFocus = traversalFunction(list, nextFocus, disableListWrap);
      } else {
        nextFocus.focus();
        return true;
      }
    }
    return false;
  }
  const MenuList = /* @__PURE__ */ React__namespace.forwardRef(function MenuList2(props, ref) {
    const {
      // private
      // eslint-disable-next-line react/prop-types
      actions,
      autoFocus = false,
      autoFocusItem = false,
      children,
      className,
      disabledItemsFocusable = false,
      disableListWrap = false,
      onKeyDown,
      variant = "selectedMenu",
      ...other
    } = props;
    const listRef = React__namespace.useRef(null);
    const textCriteriaRef = React__namespace.useRef({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null
    });
    useEnhancedEffect(() => {
      if (autoFocus) {
        listRef.current.focus();
      }
    }, [autoFocus]);
    React__namespace.useImperativeHandle(actions, () => ({
      adjustStyleForScrollbar: (containerElement, {
        direction
      }) => {
        const noExplicitWidth = !listRef.current.style.width;
        if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
          const scrollbarSize = `${getScrollbarSize(ownerWindow(containerElement))}px`;
          listRef.current.style[direction === "rtl" ? "paddingLeft" : "paddingRight"] = scrollbarSize;
          listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
        }
        return listRef.current;
      }
    }), []);
    const handleKeyDown = (event) => {
      const list = listRef.current;
      const key2 = event.key;
      const isModifierKeyPressed = event.ctrlKey || event.metaKey || event.altKey;
      if (isModifierKeyPressed) {
        if (onKeyDown) {
          onKeyDown(event);
        }
        return;
      }
      const currentFocus = ownerDocument(list).activeElement;
      if (key2 === "ArrowDown") {
        event.preventDefault();
        moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
      } else if (key2 === "ArrowUp") {
        event.preventDefault();
        moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
      } else if (key2 === "Home") {
        event.preventDefault();
        moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
      } else if (key2 === "End") {
        event.preventDefault();
        moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
      } else if (key2.length === 1) {
        const criteria = textCriteriaRef.current;
        const lowerKey = key2.toLowerCase();
        const currTime = performance.now();
        if (criteria.keys.length > 0) {
          if (currTime - criteria.lastTime > 500) {
            criteria.keys = [];
            criteria.repeating = true;
            criteria.previousKeyMatched = true;
          } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
            criteria.repeating = false;
          }
        }
        criteria.lastTime = currTime;
        criteria.keys.push(lowerKey);
        const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
        if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
          event.preventDefault();
        } else {
          criteria.previousKeyMatched = false;
        }
      }
      if (onKeyDown) {
        onKeyDown(event);
      }
    };
    const handleRef = useForkRef(listRef, ref);
    let activeItemIndex = -1;
    React__namespace.Children.forEach(children, (child, index) => {
      if (!/* @__PURE__ */ React__namespace.isValidElement(child)) {
        if (activeItemIndex === index) {
          activeItemIndex += 1;
          if (activeItemIndex >= children.length) {
            activeItemIndex = -1;
          }
        }
        return;
      }
      if (!child.props.disabled) {
        if (variant === "selectedMenu" && child.props.selected) {
          activeItemIndex = index;
        } else if (activeItemIndex === -1) {
          activeItemIndex = index;
        }
      }
      if (activeItemIndex === index && (child.props.disabled || child.props.muiSkipListHighlight || child.type.muiSkipListHighlight)) {
        activeItemIndex += 1;
        if (activeItemIndex >= children.length) {
          activeItemIndex = -1;
        }
      }
    });
    const items = React__namespace.Children.map(children, (child, index) => {
      if (index === activeItemIndex) {
        const newChildProps = {};
        if (autoFocusItem) {
          newChildProps.autoFocus = true;
        }
        if (child.props.tabIndex === void 0 && variant === "selectedMenu") {
          newChildProps.tabIndex = 0;
        }
        return /* @__PURE__ */ React__namespace.cloneElement(child, newChildProps);
      }
      return child;
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(List, {
      role: "menu",
      ref: handleRef,
      className,
      onKeyDown: handleKeyDown,
      tabIndex: autoFocus ? 0 : -1,
      ...other,
      children: items
    });
  });
  function getPopoverUtilityClass(slot) {
    return generateUtilityClass("MuiPopover", slot);
  }
  generateUtilityClasses("MuiPopover", ["root", "paper"]);
  function getOffsetTop(rect, vertical) {
    let offset2 = 0;
    if (typeof vertical === "number") {
      offset2 = vertical;
    } else if (vertical === "center") {
      offset2 = rect.height / 2;
    } else if (vertical === "bottom") {
      offset2 = rect.height;
    }
    return offset2;
  }
  function getOffsetLeft(rect, horizontal) {
    let offset2 = 0;
    if (typeof horizontal === "number") {
      offset2 = horizontal;
    } else if (horizontal === "center") {
      offset2 = rect.width / 2;
    } else if (horizontal === "right") {
      offset2 = rect.width;
    }
    return offset2;
  }
  function getTransformOriginValue(transformOrigin) {
    return [transformOrigin.horizontal, transformOrigin.vertical].map((n) => typeof n === "number" ? `${n}px` : n).join(" ");
  }
  function resolveAnchorEl(anchorEl) {
    return typeof anchorEl === "function" ? anchorEl() : anchorEl;
  }
  const useUtilityClasses$h = (ownerState) => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ["root"],
      paper: ["paper"]
    };
    return composeClasses(slots, getPopoverUtilityClass, classes);
  };
  const PopoverRoot = styled(Modal, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (props, styles2) => styles2.root
  })({});
  const PopoverPaper = styled(Paper, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (props, styles2) => styles2.paper
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  });
  const Popover = /* @__PURE__ */ React__namespace.forwardRef(function Popover2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiPopover"
    });
    const {
      action,
      anchorEl,
      anchorOrigin = {
        vertical: "top",
        horizontal: "left"
      },
      anchorPosition,
      anchorReference = "anchorEl",
      children,
      className,
      container: containerProp,
      elevation = 8,
      marginThreshold = 16,
      open: open2,
      PaperProps: PaperPropsProp = {},
      // TODO: remove in v7
      slots = {},
      slotProps = {},
      transformOrigin = {
        vertical: "top",
        horizontal: "left"
      },
      TransitionComponent,
      // TODO: remove in v7
      transitionDuration: transitionDurationProp = "auto",
      TransitionProps = {},
      // TODO: remove in v7
      disableScrollLock = false,
      ...other
    } = props;
    const paperRef = React__namespace.useRef();
    const ownerState = {
      ...props,
      anchorOrigin,
      anchorReference,
      elevation,
      marginThreshold,
      transformOrigin,
      TransitionComponent,
      transitionDuration: transitionDurationProp,
      TransitionProps
    };
    const classes = useUtilityClasses$h(ownerState);
    const getAnchorOffset = React__namespace.useCallback(() => {
      if (anchorReference === "anchorPosition") {
        return anchorPosition;
      }
      const resolvedAnchorEl = resolveAnchorEl(anchorEl);
      const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
      const anchorRect = anchorElement.getBoundingClientRect();
      return {
        top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
        left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
      };
    }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);
    const getTransformOrigin = React__namespace.useCallback((elemRect) => {
      return {
        vertical: getOffsetTop(elemRect, transformOrigin.vertical),
        horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
      };
    }, [transformOrigin.horizontal, transformOrigin.vertical]);
    const getPositioningStyle = React__namespace.useCallback((element) => {
      const elemRect = {
        width: element.offsetWidth,
        height: element.offsetHeight
      };
      const elemTransformOrigin = getTransformOrigin(elemRect);
      if (anchorReference === "none") {
        return {
          top: null,
          left: null,
          transformOrigin: getTransformOriginValue(elemTransformOrigin)
        };
      }
      const anchorOffset = getAnchorOffset();
      let top2 = anchorOffset.top - elemTransformOrigin.vertical;
      let left2 = anchorOffset.left - elemTransformOrigin.horizontal;
      const bottom2 = top2 + elemRect.height;
      const right2 = left2 + elemRect.width;
      const containerWindow = ownerWindow(resolveAnchorEl(anchorEl));
      const heightThreshold = containerWindow.innerHeight - marginThreshold;
      const widthThreshold = containerWindow.innerWidth - marginThreshold;
      if (marginThreshold !== null && top2 < marginThreshold) {
        const diff = top2 - marginThreshold;
        top2 -= diff;
        elemTransformOrigin.vertical += diff;
      } else if (marginThreshold !== null && bottom2 > heightThreshold) {
        const diff = bottom2 - heightThreshold;
        top2 -= diff;
        elemTransformOrigin.vertical += diff;
      }
      if (marginThreshold !== null && left2 < marginThreshold) {
        const diff = left2 - marginThreshold;
        left2 -= diff;
        elemTransformOrigin.horizontal += diff;
      } else if (right2 > widthThreshold) {
        const diff = right2 - widthThreshold;
        left2 -= diff;
        elemTransformOrigin.horizontal += diff;
      }
      return {
        top: `${Math.round(top2)}px`,
        left: `${Math.round(left2)}px`,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
    const [isPositioned, setIsPositioned] = React__namespace.useState(open2);
    const setPositioningStyles = React__namespace.useCallback(() => {
      const element = paperRef.current;
      if (!element) {
        return;
      }
      const positioning = getPositioningStyle(element);
      if (positioning.top !== null) {
        element.style.setProperty("top", positioning.top);
      }
      if (positioning.left !== null) {
        element.style.left = positioning.left;
      }
      element.style.transformOrigin = positioning.transformOrigin;
      setIsPositioned(true);
    }, [getPositioningStyle]);
    React__namespace.useEffect(() => {
      if (disableScrollLock) {
        window.addEventListener("scroll", setPositioningStyles);
      }
      return () => window.removeEventListener("scroll", setPositioningStyles);
    }, [anchorEl, disableScrollLock, setPositioningStyles]);
    const handleEntering = () => {
      setPositioningStyles();
    };
    const handleExited = () => {
      setIsPositioned(false);
    };
    React__namespace.useEffect(() => {
      if (open2) {
        setPositioningStyles();
      }
    });
    React__namespace.useImperativeHandle(action, () => open2 ? {
      updatePosition: () => {
        setPositioningStyles();
      }
    } : null, [open2, setPositioningStyles]);
    React__namespace.useEffect(() => {
      if (!open2) {
        return void 0;
      }
      const handleResize = debounce$1(() => {
        setPositioningStyles();
      });
      const containerWindow = ownerWindow(resolveAnchorEl(anchorEl));
      containerWindow.addEventListener("resize", handleResize);
      return () => {
        handleResize.clear();
        containerWindow.removeEventListener("resize", handleResize);
      };
    }, [anchorEl, open2, setPositioningStyles]);
    let transitionDuration = transitionDurationProp;
    const externalForwardedProps = {
      slots: {
        transition: TransitionComponent,
        ...slots
      },
      slotProps: {
        transition: TransitionProps,
        paper: PaperPropsProp,
        ...slotProps
      }
    };
    const [TransitionSlot, transitionSlotProps] = useSlot("transition", {
      elementType: Grow,
      externalForwardedProps,
      ownerState,
      getSlotProps: (handlers) => ({
        ...handlers,
        onEntering: (element, isAppearing) => {
          var _a;
          (_a = handlers.onEntering) == null ? void 0 : _a.call(handlers, element, isAppearing);
          handleEntering();
        },
        onExited: (element) => {
          var _a;
          (_a = handlers.onExited) == null ? void 0 : _a.call(handlers, element);
          handleExited();
        }
      }),
      additionalProps: {
        appear: true,
        in: open2
      }
    });
    if (transitionDurationProp === "auto" && !TransitionSlot.muiSupportAuto) {
      transitionDuration = void 0;
    }
    const container = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl)).body : void 0);
    const [RootSlot, {
      slots: rootSlotsProp,
      slotProps: rootSlotPropsProp,
      ...rootProps
    }] = useSlot("root", {
      ref,
      elementType: PopoverRoot,
      externalForwardedProps: {
        ...externalForwardedProps,
        ...other
      },
      shouldForwardComponentProp: true,
      additionalProps: {
        slots: {
          backdrop: slots.backdrop
        },
        slotProps: {
          backdrop: mergeSlotProps(typeof slotProps.backdrop === "function" ? slotProps.backdrop(ownerState) : slotProps.backdrop, {
            invisible: true
          })
        },
        container,
        open: open2
      },
      ownerState,
      className: clsx(classes.root, className)
    });
    const [PaperSlot, paperProps] = useSlot("paper", {
      ref: paperRef,
      className: classes.paper,
      elementType: PopoverPaper,
      externalForwardedProps,
      shouldForwardComponentProp: true,
      additionalProps: {
        elevation,
        style: isPositioned ? void 0 : {
          opacity: 0
        }
      },
      ownerState
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RootSlot, {
      ...rootProps,
      ...!isHostComponent(RootSlot) && {
        slots: rootSlotsProp,
        slotProps: rootSlotPropsProp,
        disableScrollLock
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionSlot, {
        ...transitionSlotProps,
        timeout: transitionDuration,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaperSlot, {
          ...paperProps,
          children
        })
      })
    });
  });
  function getMenuUtilityClass(slot) {
    return generateUtilityClass("MuiMenu", slot);
  }
  generateUtilityClasses("MuiMenu", ["root", "paper", "list"]);
  const RTL_ORIGIN = {
    vertical: "top",
    horizontal: "right"
  };
  const LTR_ORIGIN = {
    vertical: "top",
    horizontal: "left"
  };
  const useUtilityClasses$g = (ownerState) => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ["root"],
      paper: ["paper"],
      list: ["list"]
    };
    return composeClasses(slots, getMenuUtilityClass, classes);
  };
  const MenuRoot = styled(Popover, {
    shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (props, styles2) => styles2.root
  })({});
  const MenuPaper = styled(PopoverPaper, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (props, styles2) => styles2.paper
  })({
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tappable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: "calc(100% - 96px)",
    // Add iOS momentum scrolling for iOS < 13.0
    WebkitOverflowScrolling: "touch"
  });
  const MenuMenuList = styled(MenuList, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (props, styles2) => styles2.list
  })({
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  });
  const Menu = /* @__PURE__ */ React__namespace.forwardRef(function Menu2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiMenu"
    });
    const {
      autoFocus = true,
      children,
      className,
      disableAutoFocusItem = false,
      MenuListProps = {},
      onClose,
      open: open2,
      PaperProps = {},
      PopoverClasses,
      transitionDuration = "auto",
      TransitionProps: {
        onEntering,
        ...TransitionProps
      } = {},
      variant = "selectedMenu",
      slots = {},
      slotProps = {},
      ...other
    } = props;
    const isRtl = useRtl();
    const ownerState = {
      ...props,
      autoFocus,
      disableAutoFocusItem,
      MenuListProps,
      onEntering,
      PaperProps,
      transitionDuration,
      TransitionProps,
      variant
    };
    const classes = useUtilityClasses$g(ownerState);
    const autoFocusItem = autoFocus && !disableAutoFocusItem && open2;
    const menuListActionsRef = React__namespace.useRef(null);
    const handleEntering = (element, isAppearing) => {
      if (menuListActionsRef.current) {
        menuListActionsRef.current.adjustStyleForScrollbar(element, {
          direction: isRtl ? "rtl" : "ltr"
        });
      }
      if (onEntering) {
        onEntering(element, isAppearing);
      }
    };
    const handleListKeyDown = (event) => {
      if (event.key === "Tab") {
        event.preventDefault();
        if (onClose) {
          onClose(event, "tabKeyDown");
        }
      }
    };
    let activeItemIndex = -1;
    React__namespace.Children.map(children, (child, index) => {
      if (!/* @__PURE__ */ React__namespace.isValidElement(child)) {
        return;
      }
      if (!child.props.disabled) {
        if (variant === "selectedMenu" && child.props.selected) {
          activeItemIndex = index;
        } else if (activeItemIndex === -1) {
          activeItemIndex = index;
        }
      }
    });
    const externalForwardedProps = {
      slots,
      slotProps: {
        list: MenuListProps,
        transition: TransitionProps,
        paper: PaperProps,
        ...slotProps
      }
    };
    const rootSlotProps = useSlotProps({
      elementType: slots.root,
      externalSlotProps: slotProps.root,
      ownerState,
      className: [classes.root, className]
    });
    const [PaperSlot, paperSlotProps] = useSlot("paper", {
      className: classes.paper,
      elementType: MenuPaper,
      externalForwardedProps,
      shouldForwardComponentProp: true,
      ownerState
    });
    const [ListSlot, listSlotProps] = useSlot("list", {
      className: clsx(classes.list, MenuListProps.className),
      elementType: MenuMenuList,
      shouldForwardComponentProp: true,
      externalForwardedProps,
      getSlotProps: (handlers) => ({
        ...handlers,
        onKeyDown: (event) => {
          var _a;
          handleListKeyDown(event);
          (_a = handlers.onKeyDown) == null ? void 0 : _a.call(handlers, event);
        }
      }),
      ownerState
    });
    const resolvedTransitionProps = typeof externalForwardedProps.slotProps.transition === "function" ? externalForwardedProps.slotProps.transition(ownerState) : externalForwardedProps.slotProps.transition;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuRoot, {
      onClose,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: isRtl ? "right" : "left"
      },
      transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
      slots: {
        root: slots.root,
        paper: PaperSlot,
        backdrop: slots.backdrop,
        ...slots.transition && {
          // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
          transition: slots.transition
        }
      },
      slotProps: {
        root: rootSlotProps,
        paper: paperSlotProps,
        backdrop: typeof slotProps.backdrop === "function" ? slotProps.backdrop(ownerState) : slotProps.backdrop,
        transition: {
          ...resolvedTransitionProps,
          onEntering: (...args) => {
            var _a;
            handleEntering(...args);
            (_a = resolvedTransitionProps == null ? void 0 : resolvedTransitionProps.onEntering) == null ? void 0 : _a.call(resolvedTransitionProps, ...args);
          }
        }
      },
      open: open2,
      ref,
      transitionDuration,
      ownerState,
      ...other,
      classes: PopoverClasses,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListSlot, {
        actions: menuListActionsRef,
        autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
        autoFocusItem,
        variant,
        ...listSlotProps,
        children
      })
    });
  });
  function getMenuItemUtilityClass(slot) {
    return generateUtilityClass("MuiMenuItem", slot);
  }
  const menuItemClasses = generateUtilityClasses("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
  const overridesResolver = (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.dense && styles2.dense, ownerState.divider && styles2.divider, !ownerState.disableGutters && styles2.gutters];
  };
  const useUtilityClasses$f = (ownerState) => {
    const {
      disabled,
      dense,
      divider,
      disableGutters,
      selected,
      classes
    } = ownerState;
    const slots = {
      root: ["root", dense && "dense", disabled && "disabled", !disableGutters && "gutters", divider && "divider", selected && "selected"]
    };
    const composedClasses = composeClasses(slots, getMenuItemUtilityClass, classes);
    return {
      ...classes,
      ...composedClasses
    };
  };
  const MenuItemRoot = styled(ButtonBase, {
    shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver
  })(memoTheme(({
    theme
  }) => ({
    ...theme.typography.body1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    minHeight: 48,
    paddingTop: 6,
    paddingBottom: 6,
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: (theme.vars || theme).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${menuItemClasses.selected}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      [`&.${menuItemClasses.focusVisible}`]: {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
      }
    },
    [`&.${menuItemClasses.selected}:hover`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    },
    [`&.${menuItemClasses.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette.action.focus
    },
    [`&.${menuItemClasses.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity
    },
    [`& + .${dividerClasses.root}`]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    [`& + .${dividerClasses.inset}`]: {
      marginLeft: 52
    },
    [`& .${listItemTextClasses.root}`]: {
      marginTop: 0,
      marginBottom: 0
    },
    [`& .${listItemTextClasses.inset}`]: {
      paddingLeft: 36
    },
    [`& .${listItemIconClasses.root}`]: {
      minWidth: 36
    },
    variants: [{
      props: ({
        ownerState
      }) => !ownerState.disableGutters,
      style: {
        paddingLeft: 16,
        paddingRight: 16
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.divider,
      style: {
        borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
        backgroundClip: "padding-box"
      }
    }, {
      props: ({
        ownerState
      }) => !ownerState.dense,
      style: {
        [theme.breakpoints.up("sm")]: {
          minHeight: "auto"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.dense,
      style: {
        minHeight: 32,
        // https://m2.material.io/components/menus#specs > Dense
        paddingTop: 4,
        paddingBottom: 4,
        ...theme.typography.body2,
        [`& .${listItemIconClasses.root} svg`]: {
          fontSize: "1.25rem"
        }
      }
    }]
  })));
  const MenuItem = /* @__PURE__ */ React__namespace.forwardRef(function MenuItem2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiMenuItem"
    });
    const {
      autoFocus = false,
      component = "li",
      dense = false,
      divider = false,
      disableGutters = false,
      focusVisibleClassName,
      role = "menuitem",
      tabIndex: tabIndexProp,
      className,
      ...other
    } = props;
    const context = React__namespace.useContext(ListContext);
    const childContext = React__namespace.useMemo(() => ({
      dense: dense || context.dense || false,
      disableGutters
    }), [context.dense, dense, disableGutters]);
    const menuItemRef = React__namespace.useRef(null);
    useEnhancedEffect(() => {
      if (autoFocus) {
        if (menuItemRef.current) {
          menuItemRef.current.focus();
        }
      }
    }, [autoFocus]);
    const ownerState = {
      ...props,
      dense: childContext.dense,
      divider,
      disableGutters
    };
    const classes = useUtilityClasses$f(props);
    const handleRef = useForkRef(menuItemRef, ref);
    let tabIndex;
    if (!props.disabled) {
      tabIndex = tabIndexProp !== void 0 ? tabIndexProp : -1;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ListContext.Provider, {
      value: childContext,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItemRoot, {
        ref: handleRef,
        role,
        tabIndex,
        component,
        focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
        className: clsx(classes.root, className),
        ...other,
        ownerState,
        classes
      })
    });
  });
  function getNativeSelectUtilityClasses(slot) {
    return generateUtilityClass("MuiNativeSelect", slot);
  }
  const nativeSelectClasses = generateUtilityClasses("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
  const useUtilityClasses$e = (ownerState) => {
    const {
      classes,
      variant,
      disabled,
      multiple,
      open: open2,
      error
    } = ownerState;
    const slots = {
      select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
      icon: ["icon", `icon${capitalize(variant)}`, open2 && "iconOpen", disabled && "disabled"]
    };
    return composeClasses(slots, getNativeSelectUtilityClasses, classes);
  };
  const StyledSelectSelect = styled("select")(({
    theme
  }) => ({
    // Reset
    MozAppearance: "none",
    // Reset
    WebkitAppearance: "none",
    // When interacting quickly, the text can end up selected.
    // Native select can't be selected either.
    userSelect: "none",
    // Reset
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": {
      // Reset Chrome style
      borderRadius: 0
    },
    [`&.${nativeSelectClasses.disabled}`]: {
      cursor: "default"
    },
    "&[multiple]": {
      height: "auto"
    },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
      backgroundColor: (theme.vars || theme).palette.background.paper
    },
    variants: [{
      props: ({
        ownerState
      }) => ownerState.variant !== "filled" && ownerState.variant !== "outlined",
      style: {
        // Bump specificity to allow extending custom inputs
        "&&&": {
          paddingRight: 24,
          minWidth: 16
          // So it doesn't collapse.
        }
      }
    }, {
      props: {
        variant: "filled"
      },
      style: {
        "&&&": {
          paddingRight: 32
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        borderRadius: (theme.vars || theme).shape.borderRadius,
        "&:focus": {
          borderRadius: (theme.vars || theme).shape.borderRadius
          // Reset the reset for Chrome style
        },
        "&&&": {
          paddingRight: 32
        }
      }
    }]
  }));
  const NativeSelectSelect = styled(StyledSelectSelect, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: rootShouldForwardProp,
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.select, styles2[ownerState.variant], ownerState.error && styles2.error, {
        [`&.${nativeSelectClasses.multiple}`]: styles2.multiple
      }];
    }
  })({});
  const StyledSelectIcon = styled("svg")(({
    theme
  }) => ({
    // We use a position absolute over a flexbox in order to forward the pointer events
    // to the input and to support wrapping tags..
    position: "absolute",
    right: 0,
    // Center vertically, height is 1em
    top: "calc(50% - .5em)",
    // Don't block pointer events on the select under the icon.
    pointerEvents: "none",
    color: (theme.vars || theme).palette.action.active,
    [`&.${nativeSelectClasses.disabled}`]: {
      color: (theme.vars || theme).palette.action.disabled
    },
    variants: [{
      props: ({
        ownerState
      }) => ownerState.open,
      style: {
        transform: "rotate(180deg)"
      }
    }, {
      props: {
        variant: "filled"
      },
      style: {
        right: 7
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        right: 7
      }
    }]
  }));
  const NativeSelectIcon = styled(StyledSelectIcon, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.icon, ownerState.variant && styles2[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles2.iconOpen];
    }
  })({});
  const NativeSelectInput = /* @__PURE__ */ React__namespace.forwardRef(function NativeSelectInput2(props, ref) {
    const {
      className,
      disabled,
      error,
      IconComponent,
      inputRef,
      variant = "standard",
      ...other
    } = props;
    const ownerState = {
      ...props,
      disabled,
      variant,
      error
    };
    const classes = useUtilityClasses$e(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(React__namespace.Fragment, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(NativeSelectSelect, {
        ownerState,
        className: clsx(classes.select, className),
        disabled,
        ref: inputRef || ref,
        ...other
      }), props.multiple ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(NativeSelectIcon, {
        as: IconComponent,
        ownerState,
        className: classes.icon
      })]
    });
  });
  var _span$1;
  const NotchedOutlineRoot$1 = styled("fieldset", {
    shouldForwardProp: rootShouldForwardProp
  })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%"
  });
  const NotchedOutlineLegend = styled("legend", {
    shouldForwardProp: rootShouldForwardProp
  })(memoTheme(({
    theme
  }) => ({
    float: "unset",
    // Fix conflict with bootstrap
    width: "auto",
    // Fix conflict with bootstrap
    overflow: "hidden",
    // Fix Horizontal scroll when label too long
    variants: [{
      props: ({
        ownerState
      }) => !ownerState.withLabel,
      style: {
        padding: 0,
        lineHeight: "11px",
        // sync with `height` in `legend` styles
        transition: theme.transitions.create("width", {
          duration: 150,
          easing: theme.transitions.easing.easeOut
        })
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.withLabel,
      style: {
        display: "block",
        // Fix conflict with normalize.css and sanitize.css
        padding: 0,
        height: 11,
        // sync with `lineHeight` in `legend` styles
        fontSize: "0.75em",
        visibility: "hidden",
        maxWidth: 0.01,
        transition: theme.transitions.create("max-width", {
          duration: 50,
          easing: theme.transitions.easing.easeOut
        }),
        whiteSpace: "nowrap",
        "& > span": {
          paddingLeft: 5,
          paddingRight: 5,
          display: "inline-block",
          opacity: 0,
          visibility: "visible"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.withLabel && ownerState.notched,
      style: {
        maxWidth: "100%",
        transition: theme.transitions.create("max-width", {
          duration: 100,
          easing: theme.transitions.easing.easeOut,
          delay: 50
        })
      }
    }]
  })));
  function NotchedOutline(props) {
    const {
      children,
      classes,
      className,
      label,
      notched,
      ...other
    } = props;
    const withLabel = label != null && label !== "";
    const ownerState = {
      ...props,
      notched,
      withLabel
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(NotchedOutlineRoot$1, {
      "aria-hidden": true,
      className,
      ownerState,
      ...other,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotchedOutlineLegend, {
        ownerState,
        children: withLabel ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          children: label
        }) : (
          // notranslate needed while Google Translate will not fix zero-width space issue
          _span$1 || (_span$1 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "​"
          }))
        )
      })
    });
  }
  const useUtilityClasses$d = (ownerState) => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ["root"],
      notchedOutline: ["notchedOutline"],
      input: ["input"]
    };
    const composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
    return {
      ...classes,
      // forward classes to the InputBase
      ...composedClasses
    };
  };
  const OutlinedInputRoot = styled(InputBaseRoot, {
    shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: rootOverridesResolver
  })(memoTheme(({
    theme
  }) => {
    const borderColor2 = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      position: "relative",
      borderRadius: (theme.vars || theme).shape.borderRadius,
      [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: (theme.vars || theme).palette.text.primary
      },
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor2
        }
      },
      [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
        borderWidth: 2
      },
      variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color2]) => ({
        props: {
          color: color2
        },
        style: {
          [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: (theme.vars || theme).palette[color2].main
          }
        }
      })), {
        props: {},
        // to overide the above style
        style: {
          [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: (theme.vars || theme).palette.error.main
          },
          [`&.${outlinedInputClasses.disabled} .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: (theme.vars || theme).palette.action.disabled
          }
        }
      }, {
        props: ({
          ownerState
        }) => ownerState.startAdornment,
        style: {
          paddingLeft: 14
        }
      }, {
        props: ({
          ownerState
        }) => ownerState.endAdornment,
        style: {
          paddingRight: 14
        }
      }, {
        props: ({
          ownerState
        }) => ownerState.multiline,
        style: {
          padding: "16.5px 14px"
        }
      }, {
        props: ({
          ownerState,
          size
        }) => ownerState.multiline && size === "small",
        style: {
          padding: "8.5px 14px"
        }
      }]
    };
  }));
  const NotchedOutlineRoot = styled(NotchedOutline, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (props, styles2) => styles2.notchedOutline
  })(memoTheme(({
    theme
  }) => {
    const borderColor2 = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor2
    };
  }));
  const OutlinedInputInput = styled(InputBaseInput, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: inputOverridesResolver
  })(memoTheme(({
    theme
  }) => ({
    padding: "16.5px 14px",
    ...!theme.vars && {
      "&:-webkit-autofill": {
        WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
        caretColor: theme.palette.mode === "light" ? null : "#fff",
        borderRadius: "inherit"
      }
    },
    ...theme.vars && {
      "&:-webkit-autofill": {
        borderRadius: "inherit"
      },
      [theme.getColorSchemeSelector("dark")]: {
        "&:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 100px #266798 inset",
          WebkitTextFillColor: "#fff",
          caretColor: "#fff"
        }
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        padding: "8.5px 14px"
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline,
      style: {
        padding: 0
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.startAdornment,
      style: {
        paddingLeft: 0
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.endAdornment,
      style: {
        paddingRight: 0
      }
    }]
  })));
  const OutlinedInput = /* @__PURE__ */ React__namespace.forwardRef(function OutlinedInput2(inProps, ref) {
    var _React$Fragment;
    const props = useDefaultProps({
      props: inProps,
      name: "MuiOutlinedInput"
    });
    const {
      components = {},
      fullWidth = false,
      inputComponent = "input",
      label,
      multiline = false,
      notched,
      slots = {},
      type = "text",
      ...other
    } = props;
    const classes = useUtilityClasses$d(props);
    const muiFormControl = useFormControl();
    const fcs = formControlState({
      props,
      muiFormControl,
      states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
    });
    const ownerState = {
      ...props,
      color: fcs.color || "primary",
      disabled: fcs.disabled,
      error: fcs.error,
      focused: fcs.focused,
      formControl: muiFormControl,
      fullWidth,
      hiddenLabel: fcs.hiddenLabel,
      multiline,
      size: fcs.size,
      type
    };
    const RootSlot = slots.root ?? components.Root ?? OutlinedInputRoot;
    const InputSlot = slots.input ?? components.Input ?? OutlinedInputInput;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase, {
      slots: {
        root: RootSlot,
        input: InputSlot
      },
      renderSuffix: (state) => /* @__PURE__ */ jsxRuntimeExports.jsx(NotchedOutlineRoot, {
        ownerState,
        className: classes.notchedOutline,
        label: label != null && label !== "" && fcs.required ? _React$Fragment || (_React$Fragment = /* @__PURE__ */ jsxRuntimeExports.jsxs(React__namespace.Fragment, {
          children: [label, " ", "*"]
        })) : label,
        notched: typeof notched !== "undefined" ? notched : Boolean(state.startAdornment || state.filled || state.focused)
      }),
      fullWidth,
      inputComponent,
      multiline,
      ref,
      type,
      ...other,
      classes: {
        ...classes,
        notchedOutline: null
      }
    });
  });
  OutlinedInput.muiName = "Input";
  function getSelectUtilityClasses(slot) {
    return generateUtilityClass("MuiSelect", slot);
  }
  const selectClasses = generateUtilityClasses("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
  var _span;
  const SelectSelect = styled(StyledSelectSelect, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [
        // Win specificity over the input base
        {
          [`&.${selectClasses.select}`]: styles2.select
        },
        {
          [`&.${selectClasses.select}`]: styles2[ownerState.variant]
        },
        {
          [`&.${selectClasses.error}`]: styles2.error
        },
        {
          [`&.${selectClasses.multiple}`]: styles2.multiple
        }
      ];
    }
  })({
    // Win specificity over the input base
    [`&.${selectClasses.select}`]: {
      height: "auto",
      // Resets for multiple select with chips
      minHeight: "1.4375em",
      // Required for select\text-field height consistency
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  });
  const SelectIcon = styled(StyledSelectIcon, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.icon, ownerState.variant && styles2[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles2.iconOpen];
    }
  })({});
  const SelectNativeInput = styled("input", {
    shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (props, styles2) => styles2.nativeInput
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box"
  });
  function areEqualValues(a, b) {
    if (typeof b === "object" && b !== null) {
      return a === b;
    }
    return String(a) === String(b);
  }
  function isEmpty(display) {
    return display == null || typeof display === "string" && !display.trim();
  }
  const useUtilityClasses$c = (ownerState) => {
    const {
      classes,
      variant,
      disabled,
      multiple,
      open: open2,
      error
    } = ownerState;
    const slots = {
      select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
      icon: ["icon", `icon${capitalize(variant)}`, open2 && "iconOpen", disabled && "disabled"],
      nativeInput: ["nativeInput"]
    };
    return composeClasses(slots, getSelectUtilityClasses, classes);
  };
  const SelectInput = /* @__PURE__ */ React__namespace.forwardRef(function SelectInput2(props, ref) {
    var _a;
    const {
      "aria-describedby": ariaDescribedby,
      "aria-label": ariaLabel,
      autoFocus,
      autoWidth,
      children,
      className,
      defaultOpen,
      defaultValue,
      disabled,
      displayEmpty,
      error = false,
      IconComponent,
      inputRef: inputRefProp,
      labelId,
      MenuProps = {},
      multiple,
      name,
      onBlur,
      onChange,
      onClose,
      onFocus,
      onOpen,
      open: openProp,
      readOnly,
      renderValue,
      required,
      SelectDisplayProps = {},
      tabIndex: tabIndexProp,
      // catching `type` from Input which makes no sense for SelectInput
      type,
      value: valueProp,
      variant = "standard",
      ...other
    } = props;
    const [value, setValueState] = useControlled({
      controlled: valueProp,
      default: defaultValue,
      name: "Select"
    });
    const [openState, setOpenState] = useControlled({
      controlled: openProp,
      default: defaultOpen,
      name: "Select"
    });
    const inputRef = React__namespace.useRef(null);
    const displayRef = React__namespace.useRef(null);
    const [displayNode, setDisplayNode] = React__namespace.useState(null);
    const {
      current: isOpenControlled
    } = React__namespace.useRef(openProp != null);
    const [menuMinWidthState, setMenuMinWidthState] = React__namespace.useState();
    const handleRef = useForkRef(ref, inputRefProp);
    const handleDisplayRef = React__namespace.useCallback((node2) => {
      displayRef.current = node2;
      if (node2) {
        setDisplayNode(node2);
      }
    }, []);
    const anchorElement = displayNode == null ? void 0 : displayNode.parentNode;
    React__namespace.useImperativeHandle(handleRef, () => ({
      focus: () => {
        displayRef.current.focus();
      },
      node: inputRef.current,
      value
    }), [value]);
    React__namespace.useEffect(() => {
      if (defaultOpen && openState && displayNode && !isOpenControlled) {
        setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
        displayRef.current.focus();
      }
    }, [displayNode, autoWidth]);
    React__namespace.useEffect(() => {
      if (autoFocus) {
        displayRef.current.focus();
      }
    }, [autoFocus]);
    React__namespace.useEffect(() => {
      if (!labelId) {
        return void 0;
      }
      const label = ownerDocument(displayRef.current).getElementById(labelId);
      if (label) {
        const handler = () => {
          if (getSelection().isCollapsed) {
            displayRef.current.focus();
          }
        };
        label.addEventListener("click", handler);
        return () => {
          label.removeEventListener("click", handler);
        };
      }
      return void 0;
    }, [labelId]);
    const update = (open22, event) => {
      if (open22) {
        if (onOpen) {
          onOpen(event);
        }
      } else if (onClose) {
        onClose(event);
      }
      if (!isOpenControlled) {
        setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
        setOpenState(open22);
      }
    };
    const handleMouseDown = (event) => {
      if (event.button !== 0) {
        return;
      }
      event.preventDefault();
      displayRef.current.focus();
      update(true, event);
    };
    const handleClose = (event) => {
      update(false, event);
    };
    const childrenArray = React__namespace.Children.toArray(children);
    const handleChange = (event) => {
      const child = childrenArray.find((childItem) => childItem.props.value === event.target.value);
      if (child === void 0) {
        return;
      }
      setValueState(child.props.value);
      if (onChange) {
        onChange(event, child);
      }
    };
    const handleItemClick = (child) => (event) => {
      let newValue;
      if (!event.currentTarget.hasAttribute("tabindex")) {
        return;
      }
      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];
        const itemIndex = value.indexOf(child.props.value);
        if (itemIndex === -1) {
          newValue.push(child.props.value);
        } else {
          newValue.splice(itemIndex, 1);
        }
      } else {
        newValue = child.props.value;
      }
      if (child.props.onClick) {
        child.props.onClick(event);
      }
      if (value !== newValue) {
        setValueState(newValue);
        if (onChange) {
          const nativeEvent = event.nativeEvent || event;
          const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
          Object.defineProperty(clonedEvent, "target", {
            writable: true,
            value: {
              value: newValue,
              name
            }
          });
          onChange(clonedEvent, child);
        }
      }
      if (!multiple) {
        update(false, event);
      }
    };
    const handleKeyDown = (event) => {
      if (!readOnly) {
        const validKeys = [
          " ",
          "ArrowUp",
          "ArrowDown",
          // The native select doesn't respond to enter on macOS, but it's recommended by
          // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
          "Enter"
        ];
        if (validKeys.includes(event.key)) {
          event.preventDefault();
          update(true, event);
        }
      }
    };
    const open2 = displayNode !== null && openState;
    const handleBlur = (event) => {
      if (!open2 && onBlur) {
        Object.defineProperty(event, "target", {
          writable: true,
          value: {
            value,
            name
          }
        });
        onBlur(event);
      }
    };
    delete other["aria-invalid"];
    let display;
    let displaySingle;
    const displayMultiple = [];
    let computeDisplay = false;
    if (isFilled({
      value
    }) || displayEmpty) {
      if (renderValue) {
        display = renderValue(value);
      } else {
        computeDisplay = true;
      }
    }
    const items = childrenArray.map((child) => {
      if (!/* @__PURE__ */ React__namespace.isValidElement(child)) {
        return null;
      }
      let selected;
      if (multiple) {
        if (!Array.isArray(value)) {
          throw new Error(formatMuiErrorMessage(2));
        }
        selected = value.some((v) => areEqualValues(v, child.props.value));
        if (selected && computeDisplay) {
          displayMultiple.push(child.props.children);
        }
      } else {
        selected = areEqualValues(value, child.props.value);
        if (selected && computeDisplay) {
          displaySingle = child.props.children;
        }
      }
      return /* @__PURE__ */ React__namespace.cloneElement(child, {
        "aria-selected": selected ? "true" : "false",
        onClick: handleItemClick(child),
        onKeyUp: (event) => {
          if (event.key === " ") {
            event.preventDefault();
          }
          if (child.props.onKeyUp) {
            child.props.onKeyUp(event);
          }
        },
        role: "option",
        selected,
        value: void 0,
        // The value is most likely not a valid HTML attribute.
        "data-value": child.props.value
        // Instead, we provide it as a data attribute.
      });
    });
    if (computeDisplay) {
      if (multiple) {
        if (displayMultiple.length === 0) {
          display = null;
        } else {
          display = displayMultiple.reduce((output, child, index) => {
            output.push(child);
            if (index < displayMultiple.length - 1) {
              output.push(", ");
            }
            return output;
          }, []);
        }
      } else {
        display = displaySingle;
      }
    }
    let menuMinWidth = menuMinWidthState;
    if (!autoWidth && isOpenControlled && displayNode) {
      menuMinWidth = anchorElement.clientWidth;
    }
    let tabIndex;
    if (typeof tabIndexProp !== "undefined") {
      tabIndex = tabIndexProp;
    } else {
      tabIndex = disabled ? null : 0;
    }
    const buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : void 0);
    const ownerState = {
      ...props,
      variant,
      value,
      open: open2,
      error
    };
    const classes = useUtilityClasses$c(ownerState);
    const paperProps = {
      ...MenuProps.PaperProps,
      ...(_a = MenuProps.slotProps) == null ? void 0 : _a.paper
    };
    const listboxId = useId();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(React__namespace.Fragment, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SelectSelect, {
        as: "div",
        ref: handleDisplayRef,
        tabIndex,
        role: "combobox",
        "aria-controls": open2 ? listboxId : void 0,
        "aria-disabled": disabled ? "true" : void 0,
        "aria-expanded": open2 ? "true" : "false",
        "aria-haspopup": "listbox",
        "aria-label": ariaLabel,
        "aria-labelledby": [labelId, buttonId].filter(Boolean).join(" ") || void 0,
        "aria-describedby": ariaDescribedby,
        "aria-required": required ? "true" : void 0,
        "aria-invalid": error ? "true" : void 0,
        onKeyDown: handleKeyDown,
        onMouseDown: disabled || readOnly ? null : handleMouseDown,
        onBlur: handleBlur,
        onFocus,
        ...SelectDisplayProps,
        ownerState,
        className: clsx(SelectDisplayProps.className, classes.select, className),
        id: buttonId,
        children: isEmpty(display) ? (
          // notranslate needed while Google Translate will not fix zero-width space issue
          _span || (_span = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "​"
          }))
        ) : display
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(SelectNativeInput, {
        "aria-invalid": error,
        value: Array.isArray(value) ? value.join(",") : value,
        name,
        ref: inputRef,
        "aria-hidden": true,
        onChange: handleChange,
        tabIndex: -1,
        disabled,
        className: classes.nativeInput,
        autoFocus,
        required,
        ...other,
        ownerState
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(SelectIcon, {
        as: IconComponent,
        className: classes.icon,
        ownerState
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {
        id: `menu-${name || ""}`,
        anchorEl: anchorElement,
        open: open2,
        onClose: handleClose,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        ...MenuProps,
        slotProps: {
          ...MenuProps.slotProps,
          list: {
            "aria-labelledby": labelId,
            role: "listbox",
            "aria-multiselectable": multiple ? "true" : void 0,
            disableListWrap: true,
            id: listboxId,
            ...MenuProps.MenuListProps
          },
          paper: {
            ...paperProps,
            style: {
              minWidth: menuMinWidth,
              ...paperProps != null ? paperProps.style : null
            }
          }
        },
        children: items
      })]
    });
  });
  const useUtilityClasses$b = (ownerState) => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ["root"]
    };
    const composedClasses = composeClasses(slots, getSelectUtilityClasses, classes);
    return {
      ...classes,
      ...composedClasses
    };
  };
  const styledRootConfig = {
    name: "MuiSelect",
    overridesResolver: (props, styles2) => styles2.root,
    shouldForwardProp: (prop) => rootShouldForwardProp(prop) && prop !== "variant",
    slot: "Root"
  };
  const StyledInput = styled(Input, styledRootConfig)("");
  const StyledOutlinedInput = styled(OutlinedInput, styledRootConfig)("");
  const StyledFilledInput = styled(FilledInput, styledRootConfig)("");
  const Select = /* @__PURE__ */ React__namespace.forwardRef(function Select2(inProps, ref) {
    const props = useDefaultProps({
      name: "MuiSelect",
      props: inProps
    });
    const {
      autoWidth = false,
      children,
      classes: classesProp = {},
      className,
      defaultOpen = false,
      displayEmpty = false,
      IconComponent = ArrowDropDownIcon,
      id,
      input,
      inputProps,
      label,
      labelId,
      MenuProps,
      multiple = false,
      native = false,
      onClose,
      onOpen,
      open: open2,
      renderValue,
      SelectDisplayProps,
      variant: variantProp = "outlined",
      ...other
    } = props;
    const inputComponent = native ? NativeSelectInput : SelectInput;
    const muiFormControl = useFormControl();
    const fcs = formControlState({
      props,
      muiFormControl,
      states: ["variant", "error"]
    });
    const variant = fcs.variant || variantProp;
    const ownerState = {
      ...props,
      variant,
      classes: classesProp
    };
    const classes = useUtilityClasses$b(ownerState);
    const {
      root,
      ...restOfClasses
    } = classes;
    const InputComponent = input || {
      standard: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledInput, {
        ownerState
      }),
      outlined: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledOutlinedInput, {
        label,
        ownerState
      }),
      filled: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledFilledInput, {
        ownerState
      })
    }[variant];
    const inputComponentRef = useForkRef(ref, getReactElementRef(InputComponent));
    return /* @__PURE__ */ jsxRuntimeExports.jsx(React__namespace.Fragment, {
      children: /* @__PURE__ */ React__namespace.cloneElement(InputComponent, {
        // Most of the logic is implemented in `SelectInput`.
        // The `Select` component is a simple API wrapper to expose something better to play with.
        inputComponent,
        inputProps: {
          children,
          error: fcs.error,
          IconComponent,
          variant,
          type: void 0,
          // We render a select. We can ignore the type provided by the `Input`.
          multiple,
          ...native ? {
            id
          } : {
            autoWidth,
            defaultOpen,
            displayEmpty,
            labelId,
            MenuProps,
            onClose,
            onOpen,
            open: open2,
            renderValue,
            SelectDisplayProps: {
              id,
              ...SelectDisplayProps
            }
          },
          ...inputProps,
          classes: inputProps ? deepmerge(restOfClasses, inputProps.classes) : restOfClasses,
          ...input ? input.props.inputProps : {}
        },
        ...(multiple && native || displayEmpty) && variant === "outlined" ? {
          notched: true
        } : {},
        ref: inputComponentRef,
        className: clsx(InputComponent.props.className, className, classes.root),
        // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
        ...!input && {
          variant
        },
        ...other
      })
    });
  });
  Select.muiName = "Select";
  function useSnackbar(parameters = {}) {
    const {
      autoHideDuration = null,
      disableWindowBlurListener = false,
      onClose,
      open: open2,
      resumeHideDuration
    } = parameters;
    const timerAutoHide = useTimeout();
    React__namespace.useEffect(() => {
      if (!open2) {
        return void 0;
      }
      function handleKeyDown(nativeEvent) {
        if (!nativeEvent.defaultPrevented) {
          if (nativeEvent.key === "Escape") {
            onClose == null ? void 0 : onClose(nativeEvent, "escapeKeyDown");
          }
        }
      }
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [open2, onClose]);
    const handleClose = useEventCallback((event, reason) => {
      onClose == null ? void 0 : onClose(event, reason);
    });
    const setAutoHideTimer = useEventCallback((autoHideDurationParam) => {
      if (!onClose || autoHideDurationParam == null) {
        return;
      }
      timerAutoHide.start(autoHideDurationParam, () => {
        handleClose(null, "timeout");
      });
    });
    React__namespace.useEffect(() => {
      if (open2) {
        setAutoHideTimer(autoHideDuration);
      }
      return timerAutoHide.clear;
    }, [open2, autoHideDuration, setAutoHideTimer, timerAutoHide]);
    const handleClickAway = (event) => {
      onClose == null ? void 0 : onClose(event, "clickaway");
    };
    const handlePause = timerAutoHide.clear;
    const handleResume = React__namespace.useCallback(() => {
      if (autoHideDuration != null) {
        setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
      }
    }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);
    const createHandleBlur = (otherHandlers) => (event) => {
      const onBlurCallback = otherHandlers.onBlur;
      onBlurCallback == null ? void 0 : onBlurCallback(event);
      handleResume();
    };
    const createHandleFocus = (otherHandlers) => (event) => {
      const onFocusCallback = otherHandlers.onFocus;
      onFocusCallback == null ? void 0 : onFocusCallback(event);
      handlePause();
    };
    const createMouseEnter = (otherHandlers) => (event) => {
      const onMouseEnterCallback = otherHandlers.onMouseEnter;
      onMouseEnterCallback == null ? void 0 : onMouseEnterCallback(event);
      handlePause();
    };
    const createMouseLeave = (otherHandlers) => (event) => {
      const onMouseLeaveCallback = otherHandlers.onMouseLeave;
      onMouseLeaveCallback == null ? void 0 : onMouseLeaveCallback(event);
      handleResume();
    };
    React__namespace.useEffect(() => {
      if (!disableWindowBlurListener && open2) {
        window.addEventListener("focus", handleResume);
        window.addEventListener("blur", handlePause);
        return () => {
          window.removeEventListener("focus", handleResume);
          window.removeEventListener("blur", handlePause);
        };
      }
      return void 0;
    }, [disableWindowBlurListener, open2, handleResume, handlePause]);
    const getRootProps = (externalProps = {}) => {
      const externalEventHandlers = {
        ...extractEventHandlers(parameters),
        ...extractEventHandlers(externalProps)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...externalProps,
        ...externalEventHandlers,
        onBlur: createHandleBlur(externalEventHandlers),
        onFocus: createHandleFocus(externalEventHandlers),
        onMouseEnter: createMouseEnter(externalEventHandlers),
        onMouseLeave: createMouseLeave(externalEventHandlers)
      };
    };
    return {
      getRootProps,
      onClickAway: handleClickAway
    };
  }
  function getSnackbarContentUtilityClass(slot) {
    return generateUtilityClass("MuiSnackbarContent", slot);
  }
  generateUtilityClasses("MuiSnackbarContent", ["root", "message", "action"]);
  const useUtilityClasses$a = (ownerState) => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ["root"],
      action: ["action"],
      message: ["message"]
    };
    return composeClasses(slots, getSnackbarContentUtilityClass, classes);
  };
  const SnackbarContentRoot = styled(Paper, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (props, styles2) => styles2.root
  })(memoTheme(({
    theme
  }) => {
    const emphasis = theme.palette.mode === "light" ? 0.8 : 0.98;
    const backgroundColor2 = emphasize(theme.palette.background.default, emphasis);
    return {
      ...theme.typography.body2,
      color: theme.vars ? theme.vars.palette.SnackbarContent.color : theme.palette.getContrastText(backgroundColor2),
      backgroundColor: theme.vars ? theme.vars.palette.SnackbarContent.bg : backgroundColor2,
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "6px 16px",
      borderRadius: (theme.vars || theme).shape.borderRadius,
      flexGrow: 1,
      [theme.breakpoints.up("sm")]: {
        flexGrow: "initial",
        minWidth: 288
      }
    };
  }));
  const SnackbarContentMessage = styled("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (props, styles2) => styles2.message
  })({
    padding: "8px 0"
  });
  const SnackbarContentAction = styled("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (props, styles2) => styles2.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  });
  const SnackbarContent = /* @__PURE__ */ React__namespace.forwardRef(function SnackbarContent2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiSnackbarContent"
    });
    const {
      action,
      className,
      message,
      role = "alert",
      ...other
    } = props;
    const ownerState = props;
    const classes = useUtilityClasses$a(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SnackbarContentRoot, {
      role,
      square: true,
      elevation: 6,
      className: clsx(classes.root, className),
      ownerState,
      ref,
      ...other,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarContentMessage, {
        className: classes.message,
        ownerState,
        children: message
      }), action ? /* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarContentAction, {
        className: classes.action,
        ownerState,
        children: action
      }) : null]
    });
  });
  function getSnackbarUtilityClass(slot) {
    return generateUtilityClass("MuiSnackbar", slot);
  }
  generateUtilityClasses("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
  const useUtilityClasses$9 = (ownerState) => {
    const {
      classes,
      anchorOrigin
    } = ownerState;
    const slots = {
      root: ["root", `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}`]
    };
    return composeClasses(slots, getSnackbarUtilityClass, classes);
  };
  const SnackbarRoot = styled("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, styles2[`anchorOrigin${capitalize(ownerState.anchorOrigin.vertical)}${capitalize(ownerState.anchorOrigin.horizontal)}`]];
    }
  })(memoTheme(({
    theme
  }) => ({
    zIndex: (theme.vars || theme).zIndex.snackbar,
    position: "fixed",
    display: "flex",
    left: 8,
    right: 8,
    justifyContent: "center",
    alignItems: "center",
    variants: [{
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical === "top",
      style: {
        top: 8,
        [theme.breakpoints.up("sm")]: {
          top: 24
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.vertical !== "top",
      style: {
        bottom: 8,
        [theme.breakpoints.up("sm")]: {
          bottom: 24
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.horizontal === "left",
      style: {
        justifyContent: "flex-start",
        [theme.breakpoints.up("sm")]: {
          left: 24,
          right: "auto"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.horizontal === "right",
      style: {
        justifyContent: "flex-end",
        [theme.breakpoints.up("sm")]: {
          right: 24,
          left: "auto"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.anchorOrigin.horizontal === "center",
      style: {
        [theme.breakpoints.up("sm")]: {
          left: "50%",
          right: "auto",
          transform: "translateX(-50%)"
        }
      }
    }]
  })));
  const Snackbar = /* @__PURE__ */ React__namespace.forwardRef(function Snackbar2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiSnackbar"
    });
    const theme = useTheme();
    const defaultTransitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen
    };
    const {
      action,
      anchorOrigin: {
        vertical,
        horizontal
      } = {
        vertical: "bottom",
        horizontal: "left"
      },
      autoHideDuration = null,
      children,
      className,
      ClickAwayListenerProps: ClickAwayListenerPropsProp,
      ContentProps: ContentPropsProp,
      disableWindowBlurListener = false,
      message,
      onBlur,
      onClose,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      open: open2,
      resumeHideDuration,
      slots = {},
      slotProps = {},
      TransitionComponent: TransitionComponentProp,
      transitionDuration = defaultTransitionDuration,
      TransitionProps: {
        onEnter,
        onExited,
        ...TransitionPropsProp
      } = {},
      ...other
    } = props;
    const ownerState = {
      ...props,
      anchorOrigin: {
        vertical,
        horizontal
      },
      autoHideDuration,
      disableWindowBlurListener,
      TransitionComponent: TransitionComponentProp,
      transitionDuration
    };
    const classes = useUtilityClasses$9(ownerState);
    const {
      getRootProps,
      onClickAway
    } = useSnackbar({
      ...ownerState
    });
    const [exited, setExited] = React__namespace.useState(true);
    const handleExited = (node2) => {
      setExited(true);
      if (onExited) {
        onExited(node2);
      }
    };
    const handleEnter = (node2, isAppearing) => {
      setExited(false);
      if (onEnter) {
        onEnter(node2, isAppearing);
      }
    };
    const externalForwardedProps = {
      slots: {
        transition: TransitionComponentProp,
        ...slots
      },
      slotProps: {
        content: ContentPropsProp,
        clickAwayListener: ClickAwayListenerPropsProp,
        transition: TransitionPropsProp,
        ...slotProps
      }
    };
    const [Root, rootProps] = useSlot("root", {
      ref,
      className: [classes.root, className],
      elementType: SnackbarRoot,
      getSlotProps: getRootProps,
      externalForwardedProps: {
        ...externalForwardedProps,
        ...other
      },
      ownerState
    });
    const [ClickAwaySlot, {
      ownerState: clickAwayOwnerStateProp,
      ...clickAwayListenerProps
    }] = useSlot("clickAwayListener", {
      elementType: ClickAwayListener,
      externalForwardedProps,
      getSlotProps: (handlers) => ({
        onClickAway: (...params) => {
          var _a;
          (_a = handlers.onClickAway) == null ? void 0 : _a.call(handlers, ...params);
          onClickAway(...params);
        }
      }),
      ownerState
    });
    const [ContentSlot, contentSlotProps] = useSlot("content", {
      elementType: SnackbarContent,
      shouldForwardComponentProp: true,
      externalForwardedProps,
      additionalProps: {
        message,
        action
      },
      ownerState
    });
    const [TransitionSlot, transitionProps] = useSlot("transition", {
      elementType: Grow,
      externalForwardedProps,
      getSlotProps: (handlers) => ({
        onEnter: (...params) => {
          var _a;
          (_a = handlers.onEnter) == null ? void 0 : _a.call(handlers, ...params);
          handleEnter(...params);
        },
        onExited: (...params) => {
          var _a;
          (_a = handlers.onExited) == null ? void 0 : _a.call(handlers, ...params);
          handleExited(...params);
        }
      }),
      additionalProps: {
        appear: true,
        in: open2,
        timeout: transitionDuration,
        direction: vertical === "top" ? "down" : "up"
      },
      ownerState
    });
    if (!open2 && exited) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ClickAwaySlot, {
      ...clickAwayListenerProps,
      ...slots.clickAwayListener && {
        ownerState: clickAwayOwnerStateProp
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Root, {
        ...rootProps,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionSlot, {
          ...transitionProps,
          children: children || /* @__PURE__ */ jsxRuntimeExports.jsx(ContentSlot, {
            ...contentSlotProps
          })
        })
      })
    });
  });
  function getTooltipUtilityClass(slot) {
    return generateUtilityClass("MuiTooltip", slot);
  }
  const tooltipClasses = generateUtilityClasses("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }
  const useUtilityClasses$8 = (ownerState) => {
    const {
      classes,
      disableInteractive,
      arrow: arrow2,
      touch,
      placement
    } = ownerState;
    const slots = {
      popper: ["popper", !disableInteractive && "popperInteractive", arrow2 && "popperArrow"],
      tooltip: ["tooltip", arrow2 && "tooltipArrow", touch && "touch", `tooltipPlacement${capitalize(placement.split("-")[0])}`],
      arrow: ["arrow"]
    };
    return composeClasses(slots, getTooltipUtilityClass, classes);
  };
  const TooltipPopper = styled(Popper, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.popper, !ownerState.disableInteractive && styles2.popperInteractive, ownerState.arrow && styles2.popperArrow, !ownerState.open && styles2.popperClose];
    }
  })(memoTheme(({
    theme
  }) => ({
    zIndex: (theme.vars || theme).zIndex.tooltip,
    pointerEvents: "none",
    variants: [{
      props: ({
        ownerState
      }) => !ownerState.disableInteractive,
      style: {
        pointerEvents: "auto"
      }
    }, {
      props: ({
        open: open2
      }) => !open2,
      style: {
        pointerEvents: "none"
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.arrow,
      style: {
        [`&[data-popper-placement*="bottom"] .${tooltipClasses.arrow}`]: {
          top: 0,
          marginTop: "-0.71em",
          "&::before": {
            transformOrigin: "0 100%"
          }
        },
        [`&[data-popper-placement*="top"] .${tooltipClasses.arrow}`]: {
          bottom: 0,
          marginBottom: "-0.71em",
          "&::before": {
            transformOrigin: "100% 0"
          }
        },
        [`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]: {
          height: "1em",
          width: "0.71em",
          "&::before": {
            transformOrigin: "100% 100%"
          }
        },
        [`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]: {
          height: "1em",
          width: "0.71em",
          "&::before": {
            transformOrigin: "0 0"
          }
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.arrow && !ownerState.isRtl,
      style: {
        [`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]: {
          left: 0,
          marginLeft: "-0.71em"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.arrow && !!ownerState.isRtl,
      style: {
        [`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]: {
          right: 0,
          marginRight: "-0.71em"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.arrow && !ownerState.isRtl,
      style: {
        [`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]: {
          right: 0,
          marginRight: "-0.71em"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.arrow && !!ownerState.isRtl,
      style: {
        [`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]: {
          left: 0,
          marginLeft: "-0.71em"
        }
      }
    }]
  })));
  const TooltipTooltip = styled("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.tooltip, ownerState.touch && styles2.touch, ownerState.arrow && styles2.tooltipArrow, styles2[`tooltipPlacement${capitalize(ownerState.placement.split("-")[0])}`]];
    }
  })(memoTheme(({
    theme
  }) => ({
    backgroundColor: theme.vars ? theme.vars.palette.Tooltip.bg : alpha(theme.palette.grey[700], 0.92),
    borderRadius: (theme.vars || theme).shape.borderRadius,
    color: (theme.vars || theme).palette.common.white,
    fontFamily: theme.typography.fontFamily,
    padding: "4px 8px",
    fontSize: theme.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: theme.typography.fontWeightMedium,
    [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: "right center"
    },
    [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: "left center"
    },
    [`.${tooltipClasses.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: "center bottom",
      marginBottom: "14px"
    },
    [`.${tooltipClasses.popper}[data-popper-placement*="bottom"] &`]: {
      transformOrigin: "center top",
      marginTop: "14px"
    },
    variants: [{
      props: ({
        ownerState
      }) => ownerState.arrow,
      style: {
        position: "relative",
        margin: 0
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.touch,
      style: {
        padding: "8px 16px",
        fontSize: theme.typography.pxToRem(14),
        lineHeight: `${round(16 / 14)}em`,
        fontWeight: theme.typography.fontWeightRegular
      }
    }, {
      props: ({
        ownerState
      }) => !ownerState.isRtl,
      style: {
        [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
          marginRight: "14px"
        },
        [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
          marginLeft: "14px"
        }
      }
    }, {
      props: ({
        ownerState
      }) => !ownerState.isRtl && ownerState.touch,
      style: {
        [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
          marginRight: "24px"
        },
        [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
          marginLeft: "24px"
        }
      }
    }, {
      props: ({
        ownerState
      }) => !!ownerState.isRtl,
      style: {
        [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
          marginLeft: "14px"
        },
        [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
          marginRight: "14px"
        }
      }
    }, {
      props: ({
        ownerState
      }) => !!ownerState.isRtl && ownerState.touch,
      style: {
        [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: {
          marginLeft: "24px"
        },
        [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: {
          marginRight: "24px"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.touch,
      style: {
        [`.${tooltipClasses.popper}[data-popper-placement*="top"] &`]: {
          marginBottom: "24px"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.touch,
      style: {
        [`.${tooltipClasses.popper}[data-popper-placement*="bottom"] &`]: {
          marginTop: "24px"
        }
      }
    }]
  })));
  const TooltipArrow = styled("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (props, styles2) => styles2.arrow
  })(memoTheme(({
    theme
  }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: theme.vars ? theme.vars.palette.Tooltip.bg : alpha(theme.palette.grey[700], 0.9),
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: "100%",
      height: "100%",
      backgroundColor: "currentColor",
      transform: "rotate(45deg)"
    }
  })));
  let hystersisOpen = false;
  const hystersisTimer = new Timeout();
  let cursorPosition = {
    x: 0,
    y: 0
  };
  function composeEventHandler(handler, eventHandler) {
    return (event, ...params) => {
      if (eventHandler) {
        eventHandler(event, ...params);
      }
      handler(event, ...params);
    };
  }
  const Tooltip = /* @__PURE__ */ React__namespace.forwardRef(function Tooltip2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiTooltip"
    });
    const {
      arrow: arrow2 = false,
      children: childrenProp,
      classes: classesProp,
      components = {},
      componentsProps = {},
      describeChild = false,
      disableFocusListener = false,
      disableHoverListener = false,
      disableInteractive: disableInteractiveProp = false,
      disableTouchListener = false,
      enterDelay = 100,
      enterNextDelay = 0,
      enterTouchDelay = 700,
      followCursor = false,
      id: idProp,
      leaveDelay = 0,
      leaveTouchDelay = 1500,
      onClose,
      onOpen,
      open: openProp,
      placement = "bottom",
      PopperComponent: PopperComponentProp,
      PopperProps = {},
      slotProps = {},
      slots = {},
      title,
      TransitionComponent: TransitionComponentProp,
      TransitionProps,
      ...other
    } = props;
    const children = /* @__PURE__ */ React__namespace.isValidElement(childrenProp) ? childrenProp : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      children: childrenProp
    });
    const theme = useTheme();
    const isRtl = useRtl();
    const [childNode, setChildNode] = React__namespace.useState();
    const [arrowRef, setArrowRef] = React__namespace.useState(null);
    const ignoreNonTouchEvents = React__namespace.useRef(false);
    const disableInteractive = disableInteractiveProp || followCursor;
    const closeTimer = useTimeout();
    const enterTimer = useTimeout();
    const leaveTimer = useTimeout();
    const touchTimer = useTimeout();
    const [openState, setOpenState] = useControlled({
      controlled: openProp,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let open2 = openState;
    const id = useId(idProp);
    const prevUserSelect = React__namespace.useRef();
    const stopTouchInteraction = useEventCallback(() => {
      if (prevUserSelect.current !== void 0) {
        document.body.style.WebkitUserSelect = prevUserSelect.current;
        prevUserSelect.current = void 0;
      }
      touchTimer.clear();
    });
    React__namespace.useEffect(() => stopTouchInteraction, [stopTouchInteraction]);
    const handleOpen = (event) => {
      hystersisTimer.clear();
      hystersisOpen = true;
      setOpenState(true);
      if (onOpen && !open2) {
        onOpen(event);
      }
    };
    const handleClose = useEventCallback(
      /**
       * @param {React.SyntheticEvent | Event} event
       */
      (event) => {
        hystersisTimer.start(800 + leaveDelay, () => {
          hystersisOpen = false;
        });
        setOpenState(false);
        if (onClose && open2) {
          onClose(event);
        }
        closeTimer.start(theme.transitions.duration.shortest, () => {
          ignoreNonTouchEvents.current = false;
        });
      }
    );
    const handleMouseOver = (event) => {
      if (ignoreNonTouchEvents.current && event.type !== "touchstart") {
        return;
      }
      if (childNode) {
        childNode.removeAttribute("title");
      }
      enterTimer.clear();
      leaveTimer.clear();
      if (enterDelay || hystersisOpen && enterNextDelay) {
        enterTimer.start(hystersisOpen ? enterNextDelay : enterDelay, () => {
          handleOpen(event);
        });
      } else {
        handleOpen(event);
      }
    };
    const handleMouseLeave = (event) => {
      enterTimer.clear();
      leaveTimer.start(leaveDelay, () => {
        handleClose(event);
      });
    };
    const [, setChildIsFocusVisible] = React__namespace.useState(false);
    const handleBlur = (event) => {
      if (!isFocusVisible(event.target)) {
        setChildIsFocusVisible(false);
        handleMouseLeave(event);
      }
    };
    const handleFocus = (event) => {
      if (!childNode) {
        setChildNode(event.currentTarget);
      }
      if (isFocusVisible(event.target)) {
        setChildIsFocusVisible(true);
        handleMouseOver(event);
      }
    };
    const detectTouchStart = (event) => {
      ignoreNonTouchEvents.current = true;
      const childrenProps2 = children.props;
      if (childrenProps2.onTouchStart) {
        childrenProps2.onTouchStart(event);
      }
    };
    const handleTouchStart = (event) => {
      detectTouchStart(event);
      leaveTimer.clear();
      closeTimer.clear();
      stopTouchInteraction();
      prevUserSelect.current = document.body.style.WebkitUserSelect;
      document.body.style.WebkitUserSelect = "none";
      touchTimer.start(enterTouchDelay, () => {
        document.body.style.WebkitUserSelect = prevUserSelect.current;
        handleMouseOver(event);
      });
    };
    const handleTouchEnd = (event) => {
      if (children.props.onTouchEnd) {
        children.props.onTouchEnd(event);
      }
      stopTouchInteraction();
      leaveTimer.start(leaveTouchDelay, () => {
        handleClose(event);
      });
    };
    React__namespace.useEffect(() => {
      if (!open2) {
        return void 0;
      }
      function handleKeyDown(nativeEvent) {
        if (nativeEvent.key === "Escape") {
          handleClose(nativeEvent);
        }
      }
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [handleClose, open2]);
    const handleRef = useForkRef(getReactElementRef(children), setChildNode, ref);
    if (!title && title !== 0) {
      open2 = false;
    }
    const popperRef = React__namespace.useRef();
    const handleMouseMove = (event) => {
      const childrenProps2 = children.props;
      if (childrenProps2.onMouseMove) {
        childrenProps2.onMouseMove(event);
      }
      cursorPosition = {
        x: event.clientX,
        y: event.clientY
      };
      if (popperRef.current) {
        popperRef.current.update();
      }
    };
    const nameOrDescProps = {};
    const titleIsString = typeof title === "string";
    if (describeChild) {
      nameOrDescProps.title = !open2 && titleIsString && !disableHoverListener ? title : null;
      nameOrDescProps["aria-describedby"] = open2 ? id : null;
    } else {
      nameOrDescProps["aria-label"] = titleIsString ? title : null;
      nameOrDescProps["aria-labelledby"] = open2 && !titleIsString ? id : null;
    }
    const childrenProps = {
      ...nameOrDescProps,
      ...other,
      ...children.props,
      className: clsx(other.className, children.props.className),
      onTouchStart: detectTouchStart,
      ref: handleRef,
      ...followCursor ? {
        onMouseMove: handleMouseMove
      } : {}
    };
    const interactiveWrapperListeners = {};
    if (!disableTouchListener) {
      childrenProps.onTouchStart = handleTouchStart;
      childrenProps.onTouchEnd = handleTouchEnd;
    }
    if (!disableHoverListener) {
      childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver);
      childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave);
      if (!disableInteractive) {
        interactiveWrapperListeners.onMouseOver = handleMouseOver;
        interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
      }
    }
    if (!disableFocusListener) {
      childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus);
      childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur);
      if (!disableInteractive) {
        interactiveWrapperListeners.onFocus = handleFocus;
        interactiveWrapperListeners.onBlur = handleBlur;
      }
    }
    const ownerState = {
      ...props,
      isRtl,
      arrow: arrow2,
      disableInteractive,
      placement,
      PopperComponentProp,
      touch: ignoreNonTouchEvents.current
    };
    const resolvedPopperProps = typeof slotProps.popper === "function" ? slotProps.popper(ownerState) : slotProps.popper;
    const popperOptions = React__namespace.useMemo(() => {
      var _a, _b;
      let tooltipModifiers = [{
        name: "arrow",
        enabled: Boolean(arrowRef),
        options: {
          element: arrowRef,
          padding: 4
        }
      }];
      if ((_a = PopperProps.popperOptions) == null ? void 0 : _a.modifiers) {
        tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers);
      }
      if ((_b = resolvedPopperProps == null ? void 0 : resolvedPopperProps.popperOptions) == null ? void 0 : _b.modifiers) {
        tooltipModifiers = tooltipModifiers.concat(resolvedPopperProps.popperOptions.modifiers);
      }
      return {
        ...PopperProps.popperOptions,
        ...resolvedPopperProps == null ? void 0 : resolvedPopperProps.popperOptions,
        modifiers: tooltipModifiers
      };
    }, [arrowRef, PopperProps.popperOptions, resolvedPopperProps == null ? void 0 : resolvedPopperProps.popperOptions]);
    const classes = useUtilityClasses$8(ownerState);
    const resolvedTransitionProps = typeof slotProps.transition === "function" ? slotProps.transition(ownerState) : slotProps.transition;
    const externalForwardedProps = {
      slots: {
        popper: components.Popper,
        transition: components.Transition ?? TransitionComponentProp,
        tooltip: components.Tooltip,
        arrow: components.Arrow,
        ...slots
      },
      slotProps: {
        arrow: slotProps.arrow ?? componentsProps.arrow,
        popper: {
          ...PopperProps,
          ...resolvedPopperProps ?? componentsProps.popper
        },
        // resolvedPopperProps can be spread because it's already an object
        tooltip: slotProps.tooltip ?? componentsProps.tooltip,
        transition: {
          ...TransitionProps,
          ...resolvedTransitionProps ?? componentsProps.transition
        }
      }
    };
    const [PopperSlot, popperSlotProps] = useSlot("popper", {
      elementType: TooltipPopper,
      externalForwardedProps,
      ownerState,
      className: clsx(classes.popper, PopperProps == null ? void 0 : PopperProps.className)
    });
    const [TransitionSlot, transitionSlotProps] = useSlot("transition", {
      elementType: Grow,
      externalForwardedProps,
      ownerState
    });
    const [TooltipSlot, tooltipSlotProps] = useSlot("tooltip", {
      elementType: TooltipTooltip,
      className: classes.tooltip,
      externalForwardedProps,
      ownerState
    });
    const [ArrowSlot, arrowSlotProps] = useSlot("arrow", {
      elementType: TooltipArrow,
      className: classes.arrow,
      externalForwardedProps,
      ownerState,
      ref: setArrowRef
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(React__namespace.Fragment, {
      children: [/* @__PURE__ */ React__namespace.cloneElement(children, childrenProps), /* @__PURE__ */ jsxRuntimeExports.jsx(PopperSlot, {
        as: PopperComponentProp ?? Popper,
        placement,
        anchorEl: followCursor ? {
          getBoundingClientRect: () => ({
            top: cursorPosition.y,
            left: cursorPosition.x,
            right: cursorPosition.x,
            bottom: cursorPosition.y,
            width: 0,
            height: 0
          })
        } : childNode,
        popperRef,
        open: childNode ? open2 : false,
        id,
        transition: true,
        ...interactiveWrapperListeners,
        ...popperSlotProps,
        popperOptions,
        children: ({
          TransitionProps: TransitionPropsInner
        }) => /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionSlot, {
          timeout: theme.transitions.duration.shorter,
          ...TransitionPropsInner,
          ...transitionSlotProps,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TooltipSlot, {
            ...tooltipSlotProps,
            children: [title, arrow2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowSlot, {
              ...arrowSlotProps
            }) : null]
          })
        })
      })]
    });
  });
  function getSwitchUtilityClass(slot) {
    return generateUtilityClass("MuiSwitch", slot);
  }
  const switchClasses = generateUtilityClasses("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]);
  const useUtilityClasses$7 = (ownerState) => {
    const {
      classes,
      edge,
      size,
      color: color2,
      checked,
      disabled
    } = ownerState;
    const slots = {
      root: ["root", edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`],
      switchBase: ["switchBase", `color${capitalize(color2)}`, checked && "checked", disabled && "disabled"],
      thumb: ["thumb"],
      track: ["track"],
      input: ["input"]
    };
    const composedClasses = composeClasses(slots, getSwitchUtilityClass, classes);
    return {
      ...classes,
      // forward the disabled and checked classes to the SwitchBase
      ...composedClasses
    };
  };
  const SwitchRoot = styled("span", {
    name: "MuiSwitch",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, ownerState.edge && styles2[`edge${capitalize(ownerState.edge)}`], styles2[`size${capitalize(ownerState.size)}`]];
    }
  })({
    display: "inline-flex",
    width: 34 + 12 * 2,
    height: 14 + 12 * 2,
    overflow: "hidden",
    padding: 12,
    boxSizing: "border-box",
    position: "relative",
    flexShrink: 0,
    zIndex: 0,
    // Reset the stacking context.
    verticalAlign: "middle",
    // For correct alignment with the text.
    "@media print": {
      colorAdjust: "exact"
    },
    variants: [{
      props: {
        edge: "start"
      },
      style: {
        marginLeft: -8
      }
    }, {
      props: {
        edge: "end"
      },
      style: {
        marginRight: -8
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        width: 40,
        height: 24,
        padding: 7,
        [`& .${switchClasses.thumb}`]: {
          width: 16,
          height: 16
        },
        [`& .${switchClasses.switchBase}`]: {
          padding: 4,
          [`&.${switchClasses.checked}`]: {
            transform: "translateX(16px)"
          }
        }
      }
    }]
  });
  const SwitchSwitchBase = styled(SwitchBase, {
    name: "MuiSwitch",
    slot: "SwitchBase",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.switchBase, {
        [`& .${switchClasses.input}`]: styles2.input
      }, ownerState.color !== "default" && styles2[`color${capitalize(ownerState.color)}`]];
    }
  })(memoTheme(({
    theme
  }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    // Render above the focus ripple.
    color: theme.vars ? theme.vars.palette.Switch.defaultColor : `${theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.grey[300]}`,
    transition: theme.transitions.create(["left", "transform"], {
      duration: theme.transitions.duration.shortest
    }),
    [`&.${switchClasses.checked}`]: {
      transform: "translateX(20px)"
    },
    [`&.${switchClasses.disabled}`]: {
      color: theme.vars ? theme.vars.palette.Switch.defaultDisabledColor : `${theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600]}`
    },
    [`&.${switchClasses.checked} + .${switchClasses.track}`]: {
      opacity: 0.5
    },
    [`&.${switchClasses.disabled} + .${switchClasses.track}`]: {
      opacity: theme.vars ? theme.vars.opacity.switchTrackDisabled : `${theme.palette.mode === "light" ? 0.12 : 0.2}`
    },
    [`& .${switchClasses.input}`]: {
      left: "-100%",
      width: "300%"
    }
  })), memoTheme(({
    theme
  }) => ({
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["light"])).map(([color2]) => ({
      props: {
        color: color2
      },
      style: {
        [`&.${switchClasses.checked}`]: {
          color: (theme.vars || theme).palette[color2].main,
          "&:hover": {
            backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color2].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color2].main, theme.palette.action.hoverOpacity),
            "@media (hover: none)": {
              backgroundColor: "transparent"
            }
          },
          [`&.${switchClasses.disabled}`]: {
            color: theme.vars ? theme.vars.palette.Switch[`${color2}DisabledColor`] : `${theme.palette.mode === "light" ? lighten(theme.palette[color2].main, 0.62) : darken(theme.palette[color2].main, 0.55)}`
          }
        },
        [`&.${switchClasses.checked} + .${switchClasses.track}`]: {
          backgroundColor: (theme.vars || theme).palette[color2].main
        }
      }
    }))]
  })));
  const SwitchTrack = styled("span", {
    name: "MuiSwitch",
    slot: "Track",
    overridesResolver: (props, styles2) => styles2.track
  })(memoTheme(({
    theme
  }) => ({
    height: "100%",
    width: "100%",
    borderRadius: 14 / 2,
    zIndex: -1,
    transition: theme.transitions.create(["opacity", "background-color"], {
      duration: theme.transitions.duration.shortest
    }),
    backgroundColor: theme.vars ? theme.vars.palette.common.onBackground : `${theme.palette.mode === "light" ? theme.palette.common.black : theme.palette.common.white}`,
    opacity: theme.vars ? theme.vars.opacity.switchTrack : `${theme.palette.mode === "light" ? 0.38 : 0.3}`
  })));
  const SwitchThumb = styled("span", {
    name: "MuiSwitch",
    slot: "Thumb",
    overridesResolver: (props, styles2) => styles2.thumb
  })(memoTheme(({
    theme
  }) => ({
    boxShadow: (theme.vars || theme).shadows[1],
    backgroundColor: "currentColor",
    width: 20,
    height: 20,
    borderRadius: "50%"
  })));
  const Switch = /* @__PURE__ */ React__namespace.forwardRef(function Switch2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiSwitch"
    });
    const {
      className,
      color: color2 = "primary",
      edge = false,
      size = "medium",
      sx,
      slots = {},
      slotProps = {},
      ...other
    } = props;
    const ownerState = {
      ...props,
      color: color2,
      edge,
      size
    };
    const classes = useUtilityClasses$7(ownerState);
    const externalForwardedProps = {
      slots,
      slotProps
    };
    const [RootSlot, rootSlotProps] = useSlot("root", {
      className: clsx(classes.root, className),
      elementType: SwitchRoot,
      externalForwardedProps,
      ownerState,
      additionalProps: {
        sx
      }
    });
    const [ThumbSlot, thumbSlotProps] = useSlot("thumb", {
      className: classes.thumb,
      elementType: SwitchThumb,
      externalForwardedProps,
      ownerState
    });
    const icon = /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbSlot, {
      ...thumbSlotProps
    });
    const [TrackSlot, trackSlotProps] = useSlot("track", {
      className: classes.track,
      elementType: SwitchTrack,
      externalForwardedProps,
      ownerState
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
      ...rootSlotProps,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SwitchSwitchBase, {
        type: "checkbox",
        icon,
        checkedIcon: icon,
        ref,
        ownerState,
        ...other,
        classes: {
          ...classes,
          root: classes.switchBase
        },
        slots: {
          ...slots.switchBase && {
            root: slots.switchBase
          },
          ...slots.input && {
            input: slots.input
          }
        },
        slotProps: {
          ...slotProps.switchBase && {
            root: typeof slotProps.switchBase === "function" ? slotProps.switchBase(ownerState) : slotProps.switchBase
          },
          ...slotProps.input && {
            input: typeof slotProps.input === "function" ? slotProps.input(ownerState) : slotProps.input
          }
        }
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(TrackSlot, {
        ...trackSlotProps
      })]
    });
  });
  const TableContext = /* @__PURE__ */ React__namespace.createContext();
  function getTableUtilityClass(slot) {
    return generateUtilityClass("MuiTable", slot);
  }
  generateUtilityClasses("MuiTable", ["root", "stickyHeader"]);
  const useUtilityClasses$6 = (ownerState) => {
    const {
      classes,
      stickyHeader
    } = ownerState;
    const slots = {
      root: ["root", stickyHeader && "stickyHeader"]
    };
    return composeClasses(slots, getTableUtilityClass, classes);
  };
  const TableRoot = styled("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, ownerState.stickyHeader && styles2.stickyHeader];
    }
  })(memoTheme(({
    theme
  }) => ({
    display: "table",
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
    "& caption": {
      ...theme.typography.body2,
      padding: theme.spacing(2),
      color: (theme.vars || theme).palette.text.secondary,
      textAlign: "left",
      captionSide: "bottom"
    },
    variants: [{
      props: ({
        ownerState
      }) => ownerState.stickyHeader,
      style: {
        borderCollapse: "separate"
      }
    }]
  })));
  const defaultComponent$3 = "table";
  const Table = /* @__PURE__ */ React__namespace.forwardRef(function Table2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiTable"
    });
    const {
      className,
      component = defaultComponent$3,
      padding: padding2 = "normal",
      size = "medium",
      stickyHeader = false,
      ...other
    } = props;
    const ownerState = {
      ...props,
      component,
      padding: padding2,
      size,
      stickyHeader
    };
    const classes = useUtilityClasses$6(ownerState);
    const table = React__namespace.useMemo(() => ({
      padding: padding2,
      size,
      stickyHeader
    }), [padding2, size, stickyHeader]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TableContext.Provider, {
      value: table,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRoot, {
        as: component,
        role: component === defaultComponent$3 ? null : "table",
        ref,
        className: clsx(classes.root, className),
        ownerState,
        ...other
      })
    });
  });
  const Tablelvl2Context = /* @__PURE__ */ React__namespace.createContext();
  function getTableBodyUtilityClass(slot) {
    return generateUtilityClass("MuiTableBody", slot);
  }
  generateUtilityClasses("MuiTableBody", ["root"]);
  const useUtilityClasses$5 = (ownerState) => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, getTableBodyUtilityClass, classes);
  };
  const TableBodyRoot = styled("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (props, styles2) => styles2.root
  })({
    display: "table-row-group"
  });
  const tablelvl2$1 = {
    variant: "body"
  };
  const defaultComponent$2 = "tbody";
  const TableBody = /* @__PURE__ */ React__namespace.forwardRef(function TableBody2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiTableBody"
    });
    const {
      className,
      component = defaultComponent$2,
      ...other
    } = props;
    const ownerState = {
      ...props,
      component
    };
    const classes = useUtilityClasses$5(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Tablelvl2Context.Provider, {
      value: tablelvl2$1,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableBodyRoot, {
        className: clsx(classes.root, className),
        as: component,
        ref,
        role: component === defaultComponent$2 ? null : "rowgroup",
        ownerState,
        ...other
      })
    });
  });
  function getTableCellUtilityClass(slot) {
    return generateUtilityClass("MuiTableCell", slot);
  }
  const tableCellClasses = generateUtilityClasses("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]);
  const useUtilityClasses$4 = (ownerState) => {
    const {
      classes,
      variant,
      align,
      padding: padding2,
      size,
      stickyHeader
    } = ownerState;
    const slots = {
      root: ["root", variant, stickyHeader && "stickyHeader", align !== "inherit" && `align${capitalize(align)}`, padding2 !== "normal" && `padding${capitalize(padding2)}`, `size${capitalize(size)}`]
    };
    return composeClasses(slots, getTableCellUtilityClass, classes);
  };
  const TableCellRoot = styled("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, styles2[ownerState.variant], styles2[`size${capitalize(ownerState.size)}`], ownerState.padding !== "normal" && styles2[`padding${capitalize(ownerState.padding)}`], ownerState.align !== "inherit" && styles2[`align${capitalize(ownerState.align)}`], ownerState.stickyHeader && styles2.stickyHeader];
    }
  })(memoTheme(({
    theme
  }) => ({
    ...theme.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    // Workaround for a rendering bug with spanned columns in Chrome 62.0.
    // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
    borderBottom: theme.vars ? `1px solid ${theme.vars.palette.TableCell.border}` : `1px solid
    ${theme.palette.mode === "light" ? lighten(alpha(theme.palette.divider, 1), 0.88) : darken(alpha(theme.palette.divider, 1), 0.68)}`,
    textAlign: "left",
    padding: 16,
    variants: [{
      props: {
        variant: "head"
      },
      style: {
        color: (theme.vars || theme).palette.text.primary,
        lineHeight: theme.typography.pxToRem(24),
        fontWeight: theme.typography.fontWeightMedium
      }
    }, {
      props: {
        variant: "body"
      },
      style: {
        color: (theme.vars || theme).palette.text.primary
      }
    }, {
      props: {
        variant: "footer"
      },
      style: {
        color: (theme.vars || theme).palette.text.secondary,
        lineHeight: theme.typography.pxToRem(21),
        fontSize: theme.typography.pxToRem(12)
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        padding: "6px 16px",
        [`&.${tableCellClasses.paddingCheckbox}`]: {
          width: 24,
          // prevent the checkbox column from growing
          padding: "0 12px 0 16px",
          "& > *": {
            padding: 0
          }
        }
      }
    }, {
      props: {
        padding: "checkbox"
      },
      style: {
        width: 48,
        // prevent the checkbox column from growing
        padding: "0 0 0 4px"
      }
    }, {
      props: {
        padding: "none"
      },
      style: {
        padding: 0
      }
    }, {
      props: {
        align: "left"
      },
      style: {
        textAlign: "left"
      }
    }, {
      props: {
        align: "center"
      },
      style: {
        textAlign: "center"
      }
    }, {
      props: {
        align: "right"
      },
      style: {
        textAlign: "right",
        flexDirection: "row-reverse"
      }
    }, {
      props: {
        align: "justify"
      },
      style: {
        textAlign: "justify"
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.stickyHeader,
      style: {
        position: "sticky",
        top: 0,
        zIndex: 2,
        backgroundColor: (theme.vars || theme).palette.background.default
      }
    }]
  })));
  const TableCell = /* @__PURE__ */ React__namespace.forwardRef(function TableCell2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiTableCell"
    });
    const {
      align = "inherit",
      className,
      component: componentProp,
      padding: paddingProp,
      scope: scopeProp,
      size: sizeProp,
      sortDirection,
      variant: variantProp,
      ...other
    } = props;
    const table = React__namespace.useContext(TableContext);
    const tablelvl22 = React__namespace.useContext(Tablelvl2Context);
    const isHeadCell = tablelvl22 && tablelvl22.variant === "head";
    let component;
    if (componentProp) {
      component = componentProp;
    } else {
      component = isHeadCell ? "th" : "td";
    }
    let scope = scopeProp;
    if (component === "td") {
      scope = void 0;
    } else if (!scope && isHeadCell) {
      scope = "col";
    }
    const variant = variantProp || tablelvl22 && tablelvl22.variant;
    const ownerState = {
      ...props,
      align,
      component,
      padding: paddingProp || (table && table.padding ? table.padding : "normal"),
      size: sizeProp || (table && table.size ? table.size : "medium"),
      sortDirection,
      stickyHeader: variant === "head" && table && table.stickyHeader,
      variant
    };
    const classes = useUtilityClasses$4(ownerState);
    let ariaSort = null;
    if (sortDirection) {
      ariaSort = sortDirection === "asc" ? "ascending" : "descending";
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TableCellRoot, {
      as: component,
      ref,
      className: clsx(classes.root, className),
      "aria-sort": ariaSort,
      scope,
      ownerState,
      ...other
    });
  });
  function getTableContainerUtilityClass(slot) {
    return generateUtilityClass("MuiTableContainer", slot);
  }
  generateUtilityClasses("MuiTableContainer", ["root"]);
  const useUtilityClasses$3 = (ownerState) => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, getTableContainerUtilityClass, classes);
  };
  const TableContainerRoot = styled("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (props, styles2) => styles2.root
  })({
    width: "100%",
    overflowX: "auto"
  });
  const TableContainer = /* @__PURE__ */ React__namespace.forwardRef(function TableContainer2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiTableContainer"
    });
    const {
      className,
      component = "div",
      ...other
    } = props;
    const ownerState = {
      ...props,
      component
    };
    const classes = useUtilityClasses$3(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainerRoot, {
      ref,
      as: component,
      className: clsx(classes.root, className),
      ownerState,
      ...other
    });
  });
  function getTableHeadUtilityClass(slot) {
    return generateUtilityClass("MuiTableHead", slot);
  }
  generateUtilityClasses("MuiTableHead", ["root"]);
  const useUtilityClasses$2 = (ownerState) => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, getTableHeadUtilityClass, classes);
  };
  const TableHeadRoot = styled("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (props, styles2) => styles2.root
  })({
    display: "table-header-group"
  });
  const tablelvl2 = {
    variant: "head"
  };
  const defaultComponent$1 = "thead";
  const TableHead = /* @__PURE__ */ React__namespace.forwardRef(function TableHead2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiTableHead"
    });
    const {
      className,
      component = defaultComponent$1,
      ...other
    } = props;
    const ownerState = {
      ...props,
      component
    };
    const classes = useUtilityClasses$2(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Tablelvl2Context.Provider, {
      value: tablelvl2,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeadRoot, {
        as: component,
        className: clsx(classes.root, className),
        ref,
        role: component === defaultComponent$1 ? null : "rowgroup",
        ownerState,
        ...other
      })
    });
  });
  function getTableRowUtilityClass(slot) {
    return generateUtilityClass("MuiTableRow", slot);
  }
  const tableRowClasses = generateUtilityClasses("MuiTableRow", ["root", "selected", "hover", "head", "footer"]);
  const useUtilityClasses$1 = (ownerState) => {
    const {
      classes,
      selected,
      hover,
      head,
      footer
    } = ownerState;
    const slots = {
      root: ["root", selected && "selected", hover && "hover", head && "head", footer && "footer"]
    };
    return composeClasses(slots, getTableRowUtilityClass, classes);
  };
  const TableRowRoot = styled("tr", {
    name: "MuiTableRow",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, ownerState.head && styles2.head, ownerState.footer && styles2.footer];
    }
  })(memoTheme(({
    theme
  }) => ({
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    [`&.${tableRowClasses.hover}:hover`]: {
      backgroundColor: (theme.vars || theme).palette.action.hover
    },
    [`&.${tableRowClasses.selected}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
      }
    }
  })));
  const defaultComponent = "tr";
  const TableRow = /* @__PURE__ */ React__namespace.forwardRef(function TableRow2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiTableRow"
    });
    const {
      className,
      component = defaultComponent,
      hover = false,
      selected = false,
      ...other
    } = props;
    const tablelvl22 = React__namespace.useContext(Tablelvl2Context);
    const ownerState = {
      ...props,
      component,
      hover,
      selected,
      head: tablelvl22 && tablelvl22.variant === "head",
      footer: tablelvl22 && tablelvl22.variant === "footer"
    };
    const classes = useUtilityClasses$1(ownerState);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TableRowRoot, {
      as: component,
      ref,
      className: clsx(classes.root, className),
      role: component === defaultComponent ? null : "row",
      ownerState,
      ...other
    });
  });
  function getTextFieldUtilityClass(slot) {
    return generateUtilityClass("MuiTextField", slot);
  }
  generateUtilityClasses("MuiTextField", ["root"]);
  const variantComponent = {
    standard: Input,
    filled: FilledInput,
    outlined: OutlinedInput
  };
  const useUtilityClasses = (ownerState) => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, getTextFieldUtilityClass, classes);
  };
  const TextFieldRoot = styled(FormControl, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (props, styles2) => styles2.root
  })({});
  const TextField = /* @__PURE__ */ React__namespace.forwardRef(function TextField2(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: "MuiTextField"
    });
    const {
      autoComplete,
      autoFocus = false,
      children,
      className,
      color: color2 = "primary",
      defaultValue,
      disabled = false,
      error = false,
      FormHelperTextProps: FormHelperTextPropsProp,
      fullWidth = false,
      helperText,
      id: idOverride,
      InputLabelProps: InputLabelPropsProp,
      inputProps: inputPropsProp,
      InputProps: InputPropsProp,
      inputRef,
      label,
      maxRows,
      minRows,
      multiline = false,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required = false,
      rows,
      select = false,
      SelectProps: SelectPropsProp,
      slots = {},
      slotProps = {},
      type,
      value,
      variant = "outlined",
      ...other
    } = props;
    const ownerState = {
      ...props,
      autoFocus,
      color: color2,
      disabled,
      error,
      fullWidth,
      multiline,
      required,
      select,
      variant
    };
    const classes = useUtilityClasses(ownerState);
    const id = useId(idOverride);
    const helperTextId = helperText && id ? `${id}-helper-text` : void 0;
    const inputLabelId = label && id ? `${id}-label` : void 0;
    const InputComponent = variantComponent[variant];
    const externalForwardedProps = {
      slots,
      slotProps: {
        input: InputPropsProp,
        inputLabel: InputLabelPropsProp,
        htmlInput: inputPropsProp,
        formHelperText: FormHelperTextPropsProp,
        select: SelectPropsProp,
        ...slotProps
      }
    };
    const inputAdditionalProps = {};
    const inputLabelSlotProps = externalForwardedProps.slotProps.inputLabel;
    if (variant === "outlined") {
      if (inputLabelSlotProps && typeof inputLabelSlotProps.shrink !== "undefined") {
        inputAdditionalProps.notched = inputLabelSlotProps.shrink;
      }
      inputAdditionalProps.label = label;
    }
    if (select) {
      if (!SelectPropsProp || !SelectPropsProp.native) {
        inputAdditionalProps.id = void 0;
      }
      inputAdditionalProps["aria-describedby"] = void 0;
    }
    const [RootSlot, rootProps] = useSlot("root", {
      elementType: TextFieldRoot,
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        ...externalForwardedProps,
        ...other
      },
      ownerState,
      className: clsx(classes.root, className),
      ref,
      additionalProps: {
        disabled,
        error,
        fullWidth,
        required,
        color: color2,
        variant
      }
    });
    const [InputSlot, inputProps] = useSlot("input", {
      elementType: InputComponent,
      externalForwardedProps,
      additionalProps: inputAdditionalProps,
      ownerState
    });
    const [InputLabelSlot, inputLabelProps] = useSlot("inputLabel", {
      elementType: InputLabel,
      externalForwardedProps,
      ownerState
    });
    const [HtmlInputSlot, htmlInputProps] = useSlot("htmlInput", {
      elementType: "input",
      externalForwardedProps,
      ownerState
    });
    const [FormHelperTextSlot, formHelperTextProps] = useSlot("formHelperText", {
      elementType: FormHelperText,
      externalForwardedProps,
      ownerState
    });
    const [SelectSlot, selectProps] = useSlot("select", {
      elementType: Select,
      externalForwardedProps,
      ownerState
    });
    const InputElement = /* @__PURE__ */ jsxRuntimeExports.jsx(InputSlot, {
      "aria-describedby": helperTextId,
      autoComplete,
      autoFocus,
      defaultValue,
      fullWidth,
      multiline,
      name,
      rows,
      maxRows,
      minRows,
      type,
      value,
      id,
      inputRef,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      inputProps: htmlInputProps,
      slots: {
        input: slots.htmlInput ? HtmlInputSlot : void 0
      },
      ...inputProps
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, {
      ...rootProps,
      children: [label != null && label !== "" && /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabelSlot, {
        htmlFor: id,
        id: inputLabelId,
        ...inputLabelProps,
        children: label
      }), select ? /* @__PURE__ */ jsxRuntimeExports.jsx(SelectSlot, {
        "aria-describedby": helperTextId,
        id,
        labelId: inputLabelId,
        value,
        input: InputElement,
        ...selectProps,
        children
      }) : InputElement, helperText && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperTextSlot, {
        id: helperTextId,
        ...formHelperTextProps,
        children: helperText
      })]
    });
  });
  const cloudEnum = {
    xunlei: "xunlei",
    // 迅雷网盘
    uc: "uc",
    // UC网盘
    baidu: "baidu",
    // 百度网盘
    baiduSync: "baiduSync",
    // 百度网盘同步
    tianyi: "tianyi",
    // 天翼云盘
    quark: "quark",
    // 天翼云盘
    alipan: "alipan",
    // 阿里云盘
    yidong139: "yidong139",
    // 中国移动网盘
    lanzou: "lanzou",
    // 蓝奏云
    yun115: "yun115"
    // 115网盘
  };
  const cloudInfoAll = {
    [cloudEnum.xunlei]: {
      name: "迅雷网盘",
      // 云盘名称
      type: cloudEnum.xunlei,
      // 云盘类型
      rootElementId: "sharelink-plus-xunlei",
      matchUrl: [new RegExp("pan.xunlei.com/*")],
      // 匹配url
      mountFn: () => {
        const appContainer = document.createElement("li");
        appContainer.style.cssText = `
       display: flex;
       justify-content: center;
      `;
        const mountDOM = document.querySelector(
          ".pan-wrapper-asider > ul"
        );
        if (mountDOM) {
          const tempDOM = document.createElement("div");
          tempDOM.id = cloudInfoAll[cloudEnum.xunlei].rootElementId;
          mountDOM.appendChild(tempDOM);
          const shadowContainer = tempDOM.attachShadow({
            mode: "open"
          });
          shadowContainer.appendChild(appContainer);
          return {
            appContainer,
            shadowContainer
          };
        }
        return {
          appContainer
        };
      }
    },
    [cloudEnum.uc]: {
      name: "UC网盘",
      // 云盘名称
      type: cloudEnum.uc,
      // 云盘类型
      rootElementId: "sharelink-plus-uc",
      //挂载唯一id标识,判断是否挂载成功的用途
      matchUrl: [new RegExp("drive.uc.cn/*")],
      // 匹配url
      mountFn: () => {
        var _a;
        const appContainer = document.createElement("div");
        appContainer.style.cssText = `
       margin-right:16px;
       margin-bottom:4px;
      `;
        const mountDOM = document.querySelector(
          ".file-search-box"
        );
        if (mountDOM) {
          const tempDOM = document.createElement("div");
          tempDOM.id = cloudInfoAll[cloudEnum.uc].rootElementId;
          (_a = mountDOM == null ? void 0 : mountDOM.parentNode) == null ? void 0 : _a.insertBefore(tempDOM, mountDOM.nextSibling);
          const shadowContainer = tempDOM.attachShadow({
            mode: "open"
          });
          shadowContainer.appendChild(appContainer);
          return {
            appContainer,
            shadowContainer
          };
        }
        return {
          appContainer
        };
      }
    },
    [cloudEnum.baidu]: {
      name: "百度网盘",
      // 云盘名称
      type: cloudEnum.baidu,
      // 云盘类型
      rootElementId: "sharelink-plus-baidu",
      //挂载唯一id标识,判断是否挂载成功的用途
      matchUrl: [new RegExp("pan.baidu.com/disk/main*")],
      // 匹配url
      mountFn: () => {
        const appContainer = document.createElement("div");
        appContainer.style.cssText = `
      `;
        const mountDOM = document.querySelector(
          "div.wp-s-header__right"
        );
        if (mountDOM) {
          const tempDOM = document.createElement("div");
          tempDOM.id = cloudInfoAll[cloudEnum.baidu].rootElementId;
          mountDOM == null ? void 0 : mountDOM.insertBefore(tempDOM, mountDOM == null ? void 0 : mountDOM.firstChild);
          const shadowContainer = tempDOM.attachShadow({
            mode: "open"
          });
          shadowContainer.appendChild(appContainer);
          return {
            appContainer,
            shadowContainer
          };
        }
        return {
          appContainer
        };
      }
    },
    [cloudEnum.baiduSync]: {
      name: "百度网盘同步",
      // 云盘名称
      type: cloudEnum.baiduSync,
      // 云盘类型
      rootElementId: "sharelink-plus-baiduSync",
      //挂载唯一id标识,判断是否挂载成功的用途
      matchUrl: [new RegExp("pan.baidu.com/disk/synchronization*")],
      // 匹配url
      mountFn: () => {
        const appContainer = document.createElement("div");
        appContainer.style.cssText = `
          text-align:center;
      `;
        const mountDOM = document.querySelector(
          "div.wp-aside-nav__sub-top"
        );
        if (mountDOM) {
          const tempDOM = document.createElement("div");
          tempDOM.id = cloudInfoAll[cloudEnum.baiduSync].rootElementId;
          mountDOM == null ? void 0 : mountDOM.insertBefore(tempDOM, mountDOM == null ? void 0 : mountDOM.firstChild);
          const shadowContainer = tempDOM.attachShadow({
            mode: "open"
          });
          shadowContainer.appendChild(appContainer);
          return {
            appContainer,
            shadowContainer
          };
        }
        return {
          appContainer
        };
      }
    },
    [cloudEnum.tianyi]: {
      name: "天翼云盘",
      // 云盘名称
      type: cloudEnum.tianyi,
      // 云盘类型
      rootElementId: "sharelink-plus-tianyi",
      //挂载唯一id标识,判断是否挂载成功的用途
      matchUrl: [new RegExp("cloud.189.cn/*")],
      // 匹配url
      mountFn: () => {
        const appContainer = document.createElement("div");
        appContainer.style.cssText = `
      `;
        const mountDOM = document.querySelector("ul.nav-menu");
        if (mountDOM) {
          const tempDOM = document.createElement("div");
          tempDOM.id = cloudInfoAll[cloudEnum.tianyi].rootElementId;
          mountDOM == null ? void 0 : mountDOM.appendChild(tempDOM);
          const shadowContainer = tempDOM.attachShadow({
            mode: "open"
          });
          shadowContainer.appendChild(appContainer);
          return {
            appContainer,
            shadowContainer
          };
        }
        return {
          appContainer
        };
      }
    },
    [cloudEnum.quark]: {
      name: "天翼云盘",
      // 云盘名称
      type: cloudEnum.quark,
      // 云盘类型
      rootElementId: "sharelink-plus-quark",
      //挂载唯一id标识,判断是否挂载成功的用途
      matchUrl: [new RegExp("pan.quark.cn/*")],
      // 匹配url
      mountFn: () => {
        var _a;
        const appContainer = document.createElement("div");
        appContainer.style.cssText = `
      `;
        const mountDOM = document.querySelector(
          ".file-search-box"
        );
        if (mountDOM) {
          const tempDOM = document.createElement("div");
          tempDOM.id = cloudInfoAll[cloudEnum.quark].rootElementId;
          (_a = mountDOM == null ? void 0 : mountDOM.parentNode) == null ? void 0 : _a.insertBefore(tempDOM, mountDOM);
          const shadowContainer = tempDOM.attachShadow({
            mode: "open"
          });
          shadowContainer.appendChild(appContainer);
          return {
            appContainer,
            shadowContainer
          };
        }
        return {
          appContainer
        };
      }
    },
    [cloudEnum.alipan]: {
      name: "阿里云盘",
      // 云盘名称
      type: cloudEnum.alipan,
      // 云盘类型
      rootElementId: "sharelink-plus-alipan",
      //挂载唯一id标识,判断是否挂载成功的用途
      matchUrl: [
        new RegExp("www.alipan.com/*"),
        new RegExp("www.aliyundrive.com/*")
      ],
      // 匹配url
      mountFn: () => {
        const appContainer = document.createElement("div");
        appContainer.style.cssText = ``;
        const navTabItem = document.querySelector("div[class^='nav-tab-item--']");
        if (navTabItem) {
          const navTabClass = Array.from(navTabItem.classList).find(
            (className) => className.startsWith("nav-tab-item--")
          );
          if (navTabClass) {
            const tempDOM2 = document.createElement("div");
            tempDOM2.id = cloudInfoAll[cloudEnum.alipan].rootElementId;
            appContainer.classList.add(navTabClass);
            const navTabContent = document.querySelector(
              "div[class^='nav-tab-content--']"
            );
            if (navTabContent) {
              tempDOM2.style.cssText = `
              margin: 8px 16px;
            `;
              navTabContent.appendChild(tempDOM2);
              const shadowContainer2 = tempDOM2.attachShadow({
                mode: "open"
              });
              shadowContainer2.appendChild(appContainer);
              return {
                appContainer,
                shadowContainer: shadowContainer2
              };
            }
          }
        }
        const tempDOM = document.createElement("div");
        tempDOM.id = cloudInfoAll[cloudEnum.alipan].rootElementId;
        document.body.appendChild(tempDOM);
        const shadowContainer = tempDOM.attachShadow({
          mode: "open"
        });
        shadowContainer.appendChild(appContainer);
        return {
          appContainer,
          shadowContainer
        };
      }
    },
    [cloudEnum.yidong139]: {
      name: "中国移动网盘",
      // 云盘名称
      type: cloudEnum.yidong139,
      // 云盘类型
      rootElementId: "sharelink-plus-yidong139",
      //挂载唯一id标识,判断是否挂载成功的用途
      matchUrl: [new RegExp("yun.139.com/*")],
      // 匹配url
      mountFn: () => {
        var _a;
        const appContainer = document.createElement("div");
        appContainer.style.cssText = `
               display:inline-block;
                margin-top:20px;`;
        const mountDOM = document.querySelector(
          ".document_top_upload_button"
        );
        if (mountDOM) {
          const tempDOM = document.createElement("div");
          tempDOM.id = cloudInfoAll[cloudEnum.yidong139].rootElementId;
          (_a = mountDOM.parentNode) == null ? void 0 : _a.append(appContainer, tempDOM);
          const shadowContainer = tempDOM.attachShadow({
            mode: "open"
          });
          shadowContainer.appendChild(appContainer);
          return {
            appContainer,
            shadowContainer
          };
        }
        return {
          appContainer
        };
      }
    },
    [cloudEnum.lanzou]: {
      name: "蓝奏云",
      // 云盘名称
      type: cloudEnum.lanzou,
      // 云盘类型
      rootElementId: "sharelink-plus-lanzou",
      //挂载唯一id标识,判断是否挂载成功的用途
      matchUrl: [
        new RegExp("lanzou\\.com/.*"),
        new RegExp("www\\.lanzou\\.com/.*"),
        new RegExp("www\\.lanzou\\.com/account\\.php"),
        new RegExp("up\\.woozooo\\.com/.*"),
        new RegExp("up\\.woozooo\\.com/mydisk\\.php"),
        new RegExp("pc\\.woozooo\\.com/.*"),
        new RegExp("pc\\.woozooo\\.com/mydisk\\.php"),
        new RegExp("pan\\.lanzou\\.com/.*")
      ],
      // 匹配url
      mountFn: () => {
        const appContainer = document.createElement("div");
        appContainer.style.cssText = `
          margin-top: -2px;
      `;
        const mountDOM = document.querySelector(".toum");
        console.log(mountDOM, "22222222222222");
        if (mountDOM) {
          const tempDOM = document.createElement("div");
          tempDOM.id = cloudInfoAll[cloudEnum.lanzou].rootElementId;
          mountDOM == null ? void 0 : mountDOM.append(tempDOM);
          const shadowContainer = tempDOM.attachShadow({
            mode: "open"
          });
          shadowContainer.appendChild(appContainer);
          console.log(appContainer, shadowContainer);
          return {
            appContainer,
            shadowContainer
          };
        }
        return {
          appContainer
        };
      }
    },
    [cloudEnum.yun115]: {
      name: "115网盘",
      // 云盘名称
      type: cloudEnum.yun115,
      // 云盘类型
      rootElementId: "sharelink-plus-yun115",
      //挂载唯一id标识,判断是否挂载成功的用途
      matchUrl: [new RegExp("115.com/*")],
      // 匹配url
      mountFn: () => {
        const appContainer = document.createElement("div");
        appContainer.style.cssText = `
              margin-top: 12px;
              margin-left: 10px;
      `;
        const mountDOM = document.querySelector("div.main-top");
        if (mountDOM) {
          const tempDOM = document.createElement("div");
          tempDOM.id = cloudInfoAll[cloudEnum.yun115].rootElementId;
          mountDOM.appendChild(tempDOM);
          const shadowContainer = tempDOM.attachShadow({
            mode: "open"
          });
          shadowContainer.appendChild(appContainer);
          return {
            appContainer,
            shadowContainer
          };
        }
        return {
          appContainer
        };
      }
    }
  };
  const getCloudInfo = (url) => {
    const currentUrl = window.location.href;
    for (const key2 of Object.keys(
      cloudInfoAll
    )) {
      const matchUrl = cloudInfoAll[key2].matchUrl;
      if (matchUrl.some((pattern) => pattern.test(currentUrl))) {
        return cloudInfoAll[key2];
      }
    }
    return null;
  };
  const undefStr = "undefined";
  const PromiseCls = Promise;
  const promiseReject = (value) => PromiseCls.reject(value);
  const ObjectCls = Object;
  const RegExpCls = RegExp;
  const undefinedValue = void 0;
  const nullValue = null;
  const trueValue = true;
  const falseValue = false;
  const promiseThen = (promise, onFulfilled, onrejected) => promise.then(onFulfilled, onrejected);
  const promiseCatch = (promise, onrejected) => promise.catch(onrejected);
  const promiseFinally = (promise, onfinally) => promise.finally(onfinally);
  const JSONStringify = (value, replacer, space) => JSON.stringify(value, replacer, space);
  const JSONParse = (value) => JSON.parse(value);
  const setTimeoutFn = (fn2, delay = 0) => setTimeout(fn2, delay);
  const clearTimeoutTimer = (timer2) => clearTimeout(timer2);
  const objectKeys = (obj) => ObjectCls.keys(obj);
  const forEach = (ary, fn2) => ary.forEach(fn2);
  const pushItem = (ary, ...item) => ary.push(...item);
  const mapItem = (ary, callbackfn) => ary.map(callbackfn);
  const filterItem = (ary, predicate) => ary.filter(predicate);
  const len = (data) => data.length;
  const isArray = (arg2) => Array.isArray(arg2);
  const deleteAttr = (arg2, attr) => delete arg2[attr];
  const typeOf = (arg2) => typeof arg2;
  const isSSR = typeof window === undefStr && (typeof process !== undefStr ? typeof process.cwd === "function" : typeof Deno !== undefStr);
  const MEMORY = "memory";
  const STORAGE_RESTORE = "restore";
  const noop = () => {
  };
  const $self = (arg2) => arg2;
  const isFn = (arg2) => typeOf(arg2) === "function";
  const isNumber = (arg2) => typeOf(arg2) === "number" && !Number.isNaN(arg2);
  const isString = (arg2) => typeOf(arg2) === "string";
  const globalToString = (arg2) => ObjectCls.prototype.toString.call(arg2);
  const isPlainObject = (arg2) => globalToString(arg2) === "[object Object]";
  const instanceOf = (arg2, cls) => arg2 instanceof cls;
  const getTime = (date) => date ? date.getTime() : Date.now();
  const getContext = (methodInstance) => methodInstance.context;
  const getConfig = (methodInstance) => methodInstance.config;
  const getContextOptions = (alovaInstance2) => alovaInstance2.options;
  const getOptions = (methodInstance) => getContextOptions(getContext(methodInstance));
  const key = (methodInstance) => {
    const { params, headers } = getConfig(methodInstance);
    return JSONStringify([methodInstance.type, methodInstance.url, params, methodInstance.data, headers]);
  };
  const getMethodInternalKey = (methodInstance) => methodInstance.key;
  const isSpecialRequestBody = (data) => {
    const dataTypeString = globalToString(data);
    return /^\[object (Blob|FormData|ReadableStream|URLSearchParams)\]$/i.test(dataTypeString) || instanceOf(data, ArrayBuffer);
  };
  const objAssign = (target, ...sources) => ObjectCls.assign(target, ...sources);
  const getLocalCacheConfigParam = (methodInstance) => {
    const { cacheFor } = getConfig(methodInstance);
    const getCacheExpireTs = (cacheExpire) => isNumber(cacheExpire) ? getTime() + cacheExpire : getTime(cacheExpire || undefinedValue);
    let cacheMode = MEMORY;
    let expire = () => 0;
    let store = falseValue;
    let tag = undefinedValue;
    const controlled = isFn(cacheFor);
    if (!controlled) {
      let expireColumn = cacheFor;
      if (isPlainObject(cacheFor)) {
        const { mode = MEMORY, expire: expire2, tag: configTag } = cacheFor || {};
        cacheMode = mode;
        store = mode === STORAGE_RESTORE;
        tag = configTag ? configTag.toString() : undefinedValue;
        expireColumn = expire2;
      }
      expire = (mode) => getCacheExpireTs(isFn(expireColumn) ? expireColumn({ method: methodInstance, mode }) : expireColumn);
    }
    return {
      f: cacheFor,
      c: controlled,
      e: expire,
      m: cacheMode,
      s: store,
      t: tag
    };
  };
  const newInstance = (Cls, ...args) => new Cls(...args);
  const sloughFunction = (arg2, defaultFn) => isFn(arg2) ? arg2 : ![falseValue, nullValue].includes(arg2) ? defaultFn : noop;
  const cacheKeyPrefix = "$a.";
  const buildNamespacedCacheKey = (namespace, key2) => cacheKeyPrefix + namespace + key2;
  const buildCompletedURL = (baseURL, url, params) => {
    baseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
    if (url !== "") {
      url = url.match(/^(\/|https?:\/\/)/) ? url : `/${url}`;
    }
    const completeURL = baseURL + url;
    const paramsStr = mapItem(filterItem(objectKeys(params), (key2) => params[key2] !== undefinedValue), (key2) => `${key2}=${params[key2]}`).join("&");
    return paramsStr ? +completeURL.includes("?") ? `${completeURL}&${paramsStr}` : `${completeURL}?${paramsStr}` : completeURL;
  };
  const deepClone = (obj) => {
    if (isArray(obj)) {
      return mapItem(obj, deepClone);
    }
    if (isPlainObject(obj) && obj.constructor === ObjectCls) {
      const clone = {};
      forEach(objectKeys(obj), (key2) => {
        clone[key2] = deepClone(obj[key2]);
      });
      return clone;
    }
    return obj;
  };
  class AlovaError extends Error {
    constructor(prefix2, message, errorCode) {
      super(message + (errorCode ? `

For detailed: https://alova.js.org/error#${errorCode}` : ""));
      this.name = `[alova${prefix2 ? `/${prefix2}` : ""}]`;
    }
  }
  const createAssert = (prefix2 = "") => (expression, message, errorCode) => {
    if (!expression) {
      throw newInstance(AlovaError, prefix2, message, errorCode);
    }
  };
  const createEventManager = () => {
    const eventMap = {};
    return {
      eventMap,
      on(type, handler) {
        const eventTypeItem = eventMap[type] = eventMap[type] || [];
        pushItem(eventTypeItem, handler);
        return () => {
          eventMap[type] = filterItem(eventTypeItem, (item) => item !== handler);
        };
      },
      off(type, handler) {
        const handlers = eventMap[type];
        if (!handlers) {
          return;
        }
        if (handler) {
          const index = handlers.indexOf(handler);
          index > -1 && handlers.splice(index, 1);
        } else {
          delete eventMap[type];
        }
      },
      emit(type, event) {
        const handlers = eventMap[type] || [];
        return mapItem(handlers, (handler) => handler(event));
      }
    };
  };
  let globalConfigMap = {
    autoHitCache: "global",
    ssr: isSSR
  };
  const titleStyle = "color: black; font-size: 12px; font-weight: bolder";
  var defaultCacheLogger = (response, methodInstance, cacheMode, tag) => {
    const cole = console;
    const log = (...args) => console.log(...args);
    const { url } = methodInstance;
    const isRestoreMode = cacheMode === STORAGE_RESTORE;
    const hdStyle = "\x1B[42m%s\x1B[49m";
    const labelStyle = "\x1B[32m%s\x1B[39m";
    const startSep = ` [HitCache]${url} `;
    const endSepFn = () => Array(len(startSep) + 1).join("^");
    if (globalConfigMap.ssr) {
      log(hdStyle, startSep);
      log(labelStyle, " Cache ", response);
      log(labelStyle, " Mode  ", cacheMode);
      isRestoreMode && log(labelStyle, " Tag   ", tag);
      log(labelStyle, endSepFn());
    } else {
      cole.groupCollapsed ? cole.groupCollapsed("%cHitCache", "padding: 2px 6px; background: #c4fcd3; color: #53b56d;", url) : log(hdStyle, startSep);
      log("%c[Cache]", titleStyle, response);
      log("%c[Mode]", titleStyle, cacheMode);
      isRestoreMode && log("%c[Tag]", titleStyle, tag);
      log("%c[Method]", titleStyle, methodInstance);
      cole.groupEnd ? cole.groupEnd() : log(labelStyle, endSepFn());
    }
  };
  const hitSourceStringCacheKey = (key2) => `hss.${key2}`;
  const hitSourceRegexpPrefix = "hsr.";
  const hitSourceRegexpCacheKey = (regexpStr) => hitSourceRegexpPrefix + regexpStr;
  const unifiedHitSourceRegexpCacheKey = "$$hsrs";
  const regexpSourceFlagSeparator = "__$<>$__";
  const addItem = (obj, item) => {
    obj[item] = 0;
  };
  const setWithCacheAdapter = async (namespace, key2, data, expireTimestamp, cacheAdapter, hitSource, tag) => {
    if (expireTimestamp > getTime() && data) {
      const methodCacheKey = buildNamespacedCacheKey(namespace, key2);
      await cacheAdapter.set(methodCacheKey, filterItem([data, expireTimestamp === Infinity ? undefinedValue : expireTimestamp, tag], Boolean));
      if (hitSource) {
        const hitSourceKeys = {};
        const hitSourceRegexpSources = [];
        forEach(hitSource, (sourceItem) => {
          const isRegexp = instanceOf(sourceItem, RegExpCls);
          const targetHitSourceKey = isRegexp ? sourceItem.source + (sourceItem.flags ? regexpSourceFlagSeparator + sourceItem.flags : "") : sourceItem;
          if (targetHitSourceKey) {
            if (isRegexp && !hitSourceKeys[targetHitSourceKey]) {
              pushItem(hitSourceRegexpSources, targetHitSourceKey);
            }
            addItem(hitSourceKeys, isRegexp ? hitSourceRegexpCacheKey(targetHitSourceKey) : hitSourceStringCacheKey(targetHitSourceKey));
          }
        });
        const promises = mapItem(objectKeys(hitSourceKeys), async (hitSourceKey) => {
          const targetMethodKeys = await cacheAdapter.get(hitSourceKey) || {};
          addItem(targetMethodKeys, methodCacheKey);
          await cacheAdapter.set(hitSourceKey, targetMethodKeys);
        });
        const saveRegexp = async () => {
          if (len(hitSourceRegexpSources)) {
            const regexpList = await cacheAdapter.get(unifiedHitSourceRegexpCacheKey) || [];
            pushItem(regexpList, ...hitSourceRegexpSources);
            await cacheAdapter.set(unifiedHitSourceRegexpCacheKey, regexpList);
          }
        };
        await PromiseCls.all([...promises, saveRegexp()]);
      }
    }
  };
  const removeWithCacheAdapter = async (namespace, key2, cacheAdapter) => {
    const methodStoreKey = buildNamespacedCacheKey(namespace, key2);
    await cacheAdapter.remove(methodStoreKey);
  };
  const getRawWithCacheAdapter = async (namespace, key2, cacheAdapter, tag) => {
    const storagedData = await cacheAdapter.get(buildNamespacedCacheKey(namespace, key2));
    if (storagedData) {
      const [dataUnused, expireTimestamp, storedTag] = storagedData;
      if (storedTag === tag && (!expireTimestamp || expireTimestamp > getTime())) {
        return storagedData;
      }
      await removeWithCacheAdapter(namespace, key2, cacheAdapter);
    }
  };
  const getWithCacheAdapter = async (namespace, key2, cacheAdapter, tag) => {
    const rawData = await getRawWithCacheAdapter(namespace, key2, cacheAdapter, tag);
    return rawData ? rawData[0] : undefinedValue;
  };
  const hitTargetCacheWithCacheAdapter = async (sourceKey, sourceName, cacheAdapter) => {
    const sourceNameStr = `${sourceName}`;
    const sourceTargetKeyMap = {};
    const hitSourceKey = hitSourceStringCacheKey(sourceKey);
    sourceTargetKeyMap[hitSourceKey] = await cacheAdapter.get(hitSourceKey);
    let unifiedHitSourceRegexpChannel;
    if (sourceName) {
      const hitSourceName = hitSourceStringCacheKey(sourceNameStr);
      sourceTargetKeyMap[hitSourceName] = await cacheAdapter.get(hitSourceName);
      unifiedHitSourceRegexpChannel = await cacheAdapter.get(unifiedHitSourceRegexpCacheKey);
      const matchedRegexpStrings = [];
      if (unifiedHitSourceRegexpChannel && len(unifiedHitSourceRegexpChannel)) {
        forEach(unifiedHitSourceRegexpChannel, (regexpStr) => {
          const [source, flag] = regexpStr.split(regexpSourceFlagSeparator);
          if (newInstance(RegExpCls, source, flag).test(sourceNameStr)) {
            pushItem(matchedRegexpStrings, regexpStr);
          }
        });
        await PromiseCls.all(mapItem(matchedRegexpStrings, async (regexpString) => {
          const hitSourceRegexpString = hitSourceRegexpCacheKey(regexpString);
          sourceTargetKeyMap[hitSourceRegexpString] = await cacheAdapter.get(hitSourceRegexpString);
        }));
      }
    }
    const removeWithTargetKey = async (targetKey) => {
      try {
        await cacheAdapter.remove(targetKey);
        for (const sourceKey2 in sourceTargetKeyMap) {
          const targetKeys = sourceTargetKeyMap[sourceKey2];
          if (targetKeys) {
            deleteAttr(targetKeys, targetKey);
          }
        }
      } catch (_a) {
      }
    };
    const accessedKeys = {};
    await PromiseCls.all(mapItem(objectKeys(sourceTargetKeyMap), async (sourceKey2) => {
      const targetKeys = sourceTargetKeyMap[sourceKey2];
      if (targetKeys) {
        const removingPromises = [];
        for (const key2 in targetKeys) {
          if (!accessedKeys[key2]) {
            addItem(accessedKeys, key2);
            pushItem(removingPromises, removeWithTargetKey(key2));
          }
        }
        await PromiseCls.all(removingPromises);
      }
    }));
    const unifiedHitSourceRegexpChannelLen = len(unifiedHitSourceRegexpChannel || []);
    await PromiseCls.all(mapItem(objectKeys(sourceTargetKeyMap), async (sourceKey2) => {
      const targetKeys = sourceTargetKeyMap[sourceKey2];
      if (targetKeys) {
        if (len(objectKeys(targetKeys))) {
          await cacheAdapter.set(sourceKey2, targetKeys);
        } else {
          await cacheAdapter.remove(sourceKey2);
          if (sourceKey2.includes(hitSourceRegexpPrefix) && unifiedHitSourceRegexpChannel) {
            unifiedHitSourceRegexpChannel = filterItem(unifiedHitSourceRegexpChannel, (rawRegexpStr) => hitSourceRegexpCacheKey(rawRegexpStr) !== sourceKey2);
          }
        }
      }
    }));
    if (unifiedHitSourceRegexpChannelLen !== len(unifiedHitSourceRegexpChannel || [])) {
      await cacheAdapter.set(unifiedHitSourceRegexpCacheKey, unifiedHitSourceRegexpChannel);
    }
  };
  var cloneMethod = (methodInstance) => {
    const { data, config: config2 } = methodInstance;
    const newConfig = { ...config2 };
    const { headers = {}, params = {} } = newConfig;
    const ctx = getContext(methodInstance);
    newConfig.headers = { ...headers };
    newConfig.params = { ...params };
    const newMethod = newInstance(Method, methodInstance.type, ctx, methodInstance.url, newConfig, data);
    return objAssign(newMethod, {
      ...methodInstance,
      config: newConfig
    });
  };
  const hitCacheBySource = async (sourceMethod) => {
    const { autoHitCache } = globalConfigMap;
    const { l1Cache, l2Cache } = getContext(sourceMethod);
    const sourceKey = getMethodInternalKey(sourceMethod);
    const { name: sourceName } = getConfig(sourceMethod);
    const cacheAdaptersInvolved = {
      global: [...usingL1CacheAdapters, ...usingL2CacheAdapters],
      self: [l1Cache, l2Cache],
      close: []
    }[autoHitCache];
    if (cacheAdaptersInvolved && len(cacheAdaptersInvolved)) {
      await PromiseCls.all(mapItem(cacheAdaptersInvolved, (involvedCacheAdapter) => hitTargetCacheWithCacheAdapter(sourceKey, sourceName, involvedCacheAdapter)));
    }
  };
  const adapterReturnMap = {};
  function sendRequest(methodInstance, forceRequest) {
    let fromCache = trueValue;
    let requestAdapterCtrlsPromiseResolveFn;
    const requestAdapterCtrlsPromise = newInstance(PromiseCls, (resolve) => {
      requestAdapterCtrlsPromiseResolveFn = resolve;
    });
    const response = async () => {
      const { beforeRequest = noop, responded, requestAdapter, cacheLogger } = getOptions(methodInstance);
      const methodKey = getMethodInternalKey(methodInstance);
      const { s: toStorage, t: tag, m: cacheMode, e: expireMilliseconds } = getLocalCacheConfigParam(methodInstance);
      const { id, l1Cache, l2Cache, snapshots } = getContext(methodInstance);
      const { cacheFor } = getConfig(methodInstance);
      const { hitSource: methodHitSource } = methodInstance;
      let cachedResponse = await (isFn(cacheFor) ? cacheFor() : (
        // If it is a forced request, skip the step of getting it from the cache
        // Otherwise, determine whether to use cached data
        forceRequest ? undefinedValue : getWithCacheAdapter(id, methodKey, l1Cache)
      ));
      if (cacheMode === STORAGE_RESTORE && !cachedResponse && !forceRequest) {
        const rawL2CacheData = await getRawWithCacheAdapter(id, methodKey, l2Cache, tag);
        if (rawL2CacheData) {
          const [l2Response, l2ExpireMilliseconds] = rawL2CacheData;
          await setWithCacheAdapter(id, methodKey, l2Response, l2ExpireMilliseconds, l1Cache, methodHitSource);
          cachedResponse = l2Response;
        }
      }
      const clonedMethod = cloneMethod(methodInstance);
      await beforeRequest(clonedMethod);
      const { baseURL, url: newUrl, type, data } = clonedMethod;
      const { params = {}, headers = {}, transform = $self, shareRequest } = getConfig(clonedMethod);
      const namespacedAdapterReturnMap = adapterReturnMap[id] = adapterReturnMap[id] || {};
      const requestBody = clonedMethod.data;
      const requestBodyIsSpecial = isSpecialRequestBody(requestBody);
      let requestAdapterCtrls = requestBodyIsSpecial ? undefinedValue : namespacedAdapterReturnMap[methodKey];
      let responseSuccessHandler = $self;
      let responseErrorHandler = undefinedValue;
      let responseCompleteHandler = noop;
      if (isFn(responded)) {
        responseSuccessHandler = responded;
      } else if (isPlainObject(responded)) {
        const { onSuccess: successHandler, onError: errorHandler, onComplete: completeHandler } = responded;
        responseSuccessHandler = isFn(successHandler) ? successHandler : responseSuccessHandler;
        responseErrorHandler = isFn(errorHandler) ? errorHandler : responseErrorHandler;
        responseCompleteHandler = isFn(completeHandler) ? completeHandler : responseCompleteHandler;
      }
      if (cachedResponse !== undefinedValue) {
        requestAdapterCtrlsPromiseResolveFn();
        clonedMethod.fromCache = trueValue;
        sloughFunction(cacheLogger, defaultCacheLogger)(cachedResponse, clonedMethod, cacheMode, tag);
        responseCompleteHandler(clonedMethod);
        return cachedResponse;
      }
      fromCache = falseValue;
      if (!shareRequest || !requestAdapterCtrls) {
        const ctrls = requestAdapter({
          url: buildCompletedURL(baseURL, newUrl, params),
          type,
          data,
          headers
        }, clonedMethod);
        requestAdapterCtrls = namespacedAdapterReturnMap[methodKey] = ctrls;
      }
      requestAdapterCtrlsPromiseResolveFn(requestAdapterCtrls);
      const handleResponseTask = async (handlerReturns, responseHeaders, callInSuccess = trueValue) => {
        const responseData = await handlerReturns;
        const transformedData = await transform(responseData, responseHeaders || {});
        snapshots.save(methodInstance);
        try {
          await hitCacheBySource(clonedMethod);
        } catch (_a) {
        }
        const toCache = !requestBody || !requestBodyIsSpecial;
        if (toCache && callInSuccess) {
          try {
            await PromiseCls.all([
              setWithCacheAdapter(id, methodKey, transformedData, expireMilliseconds(MEMORY), l1Cache, methodHitSource),
              toStorage && setWithCacheAdapter(id, methodKey, transformedData, expireMilliseconds(STORAGE_RESTORE), l2Cache, methodHitSource, tag)
            ]);
          } catch (_b) {
          }
        }
        return deepClone(transformedData);
      };
      return promiseFinally(promiseThen(PromiseCls.all([requestAdapterCtrls.response(), requestAdapterCtrls.headers()]), ([rawResponse, rawHeaders]) => {
        deleteAttr(namespacedAdapterReturnMap, methodKey);
        return handleResponseTask(responseSuccessHandler(rawResponse, clonedMethod), rawHeaders);
      }, (error) => {
        deleteAttr(namespacedAdapterReturnMap, methodKey);
        return isFn(responseErrorHandler) ? (
          // When responding to an error, if no error is thrown, the successful response process will be processed, but the data will not be cached.
          handleResponseTask(responseErrorHandler(error, clonedMethod), undefinedValue, falseValue)
        ) : promiseReject(error);
      }), () => {
        responseCompleteHandler(clonedMethod);
      });
    };
    return {
      // request interrupt function
      abort: () => {
        promiseThen(requestAdapterCtrlsPromise, (requestAdapterCtrls) => requestAdapterCtrls && requestAdapterCtrls.abort());
      },
      onDownload: (handler) => {
        promiseThen(requestAdapterCtrlsPromise, (requestAdapterCtrls) => requestAdapterCtrls && requestAdapterCtrls.onDownload && requestAdapterCtrls.onDownload(handler));
      },
      onUpload: (handler) => {
        promiseThen(requestAdapterCtrlsPromise, (requestAdapterCtrls) => requestAdapterCtrls && requestAdapterCtrls.onUpload && requestAdapterCtrls.onUpload(handler));
      },
      response,
      fromCache: () => fromCache
    };
  }
  const offEventCallback = (offHandler, handlers) => () => {
    const index = handlers.indexOf(offHandler);
    index >= 0 && handlers.splice(index, 1);
  };
  class Method {
    constructor(type, context, url, config2, data) {
      this.dhs = [];
      this.uhs = [];
      this.fromCache = undefinedValue;
      const abortRequest = () => {
        abortRequest.a();
      };
      abortRequest.a = noop;
      const instance = this;
      const contextOptions = getContextOptions(context);
      instance.abort = abortRequest;
      instance.baseURL = contextOptions.baseURL || "";
      instance.url = url;
      instance.type = type;
      instance.context = context;
      const contextConcatConfig = {};
      const mergedLocalCacheKey = "cacheFor";
      const globalLocalCache = isPlainObject(contextOptions[mergedLocalCacheKey]) ? contextOptions[mergedLocalCacheKey][type] : undefinedValue;
      const hitSource = config2 && config2.hitSource;
      forEach(["timeout", "shareRequest"], (mergedKey) => {
        if (contextOptions[mergedKey] !== undefinedValue) {
          contextConcatConfig[mergedKey] = contextOptions[mergedKey];
        }
      });
      if (globalLocalCache !== undefinedValue) {
        contextConcatConfig[mergedLocalCacheKey] = globalLocalCache;
      }
      if (hitSource) {
        instance.hitSource = mapItem(isArray(hitSource) ? hitSource : [hitSource], (sourceItem) => instanceOf(sourceItem, Method) ? getMethodInternalKey(sourceItem) : sourceItem);
        deleteAttr(config2, "hitSource");
      }
      instance.config = {
        ...contextConcatConfig,
        headers: {},
        params: {},
        ...config2 || {}
      };
      instance.data = data;
      instance.meta = config2 ? config2.meta : instance.meta;
      instance.key = instance.generateKey();
    }
    /**
     * Bind download progress callback function
     * @param progressHandler Download progress callback function
     * @version 2.17.0
     * @return unbind function
     */
    onDownload(downloadHandler) {
      pushItem(this.dhs, downloadHandler);
      return offEventCallback(downloadHandler, this.dhs);
    }
    /**
     * Bind upload progress callback function
     * @param progressHandler Upload progress callback function
     * @version 2.17.0
     * @return unbind function
     */
    onUpload(uploadHandler) {
      pushItem(this.uhs, uploadHandler);
      return offEventCallback(uploadHandler, this.uhs);
    }
    /**
     * Send a request through a method instance and return a promise object
     */
    send(forceRequest = falseValue) {
      const instance = this;
      const { response, onDownload, onUpload, abort, fromCache } = sendRequest(instance, forceRequest);
      len(instance.dhs) > 0 && onDownload((loaded, total) => forEach(instance.dhs, (handler) => handler({ loaded, total })));
      len(instance.uhs) > 0 && onUpload((loaded, total) => forEach(instance.uhs, (handler) => handler({ loaded, total })));
      instance.abort.a = abort;
      instance.fromCache = undefinedValue;
      instance.promise = promiseThen(response(), (r2) => {
        instance.fromCache = fromCache();
        return r2;
      });
      return instance.promise;
    }
    /**
     * Set the method name, if there is already a name it will be overwritten
     * @param name method name
     */
    setName(name) {
      getConfig(this).name = name;
    }
    generateKey() {
      return key(this);
    }
    /**
     * Bind callbacks for resolve and/or reject Promise
     * @param onfulfilled The callback to be executed when resolving the Promise
     * @param onrejected The callback to be executed when the Promise is rejected
     * @returns Returns a Promise for executing any callbacks
     */
    then(onfulfilled, onrejected) {
      return promiseThen(this.send(), onfulfilled, onrejected);
    }
    /**
     * Bind a callback only for reject Promise
     * @param onrejected The callback to be executed when the Promise is rejected
     * @returns Returns a Promise that completes the callback
     */
    catch(onrejected) {
      return promiseCatch(this.send(), onrejected);
    }
    /**
     * Bind a callback that is called when the Promise is resolved (resolve or reject)
     * @param onfinally Callback executed when Promise is resolved (resolve or reject).
     * @return Returns a Promise that completes the callback.
     */
    finally(onfinally) {
      return promiseFinally(this.send(), onfinally);
    }
  }
  const myAssert = createAssert();
  const EVENT_SUCCESS_KEY = "success";
  const memoryAdapter = () => {
    let l1Cache = {};
    const l1CacheEmitter = createEventManager();
    const adapter = {
      set(key2, value) {
        l1Cache[key2] = value;
        l1CacheEmitter.emit(EVENT_SUCCESS_KEY, { type: "set", key: key2, value, container: l1Cache });
      },
      get: (key2) => {
        const value = l1Cache[key2];
        l1CacheEmitter.emit(EVENT_SUCCESS_KEY, { type: "get", key: key2, value, container: l1Cache });
        return value;
      },
      remove(key2) {
        deleteAttr(l1Cache, key2);
        l1CacheEmitter.emit(EVENT_SUCCESS_KEY, { type: "remove", key: key2, container: l1Cache });
      },
      clear: () => {
        l1Cache = {};
        l1CacheEmitter.emit(EVENT_SUCCESS_KEY, { type: "clear", key: "", container: l1Cache });
      },
      emitter: l1CacheEmitter
    };
    return adapter;
  };
  const localStorageAdapter = () => {
    const l2CacheEmitter = createEventManager();
    const instance = localStorage;
    const adapter = {
      set: (key2, value) => {
        instance.setItem(key2, JSONStringify(value));
        l2CacheEmitter.emit(EVENT_SUCCESS_KEY, { type: "set", key: key2, value, container: instance });
      },
      get: (key2) => {
        const data = instance.getItem(key2);
        const value = data ? JSONParse(data) : data;
        l2CacheEmitter.emit(EVENT_SUCCESS_KEY, { type: "get", key: key2, value, container: instance });
        return value;
      },
      remove: (key2) => {
        instance.removeItem(key2);
        l2CacheEmitter.emit(EVENT_SUCCESS_KEY, { type: "remove", key: key2, container: instance });
      },
      clear: () => {
        instance.clear();
        l2CacheEmitter.emit(EVENT_SUCCESS_KEY, { type: "clear", key: "", container: instance });
      },
      emitter: l2CacheEmitter
    };
    return adapter;
  };
  const placeholderAdapter = () => {
    const l2CacheNotDefinedAssert = () => {
      myAssert(falseValue, "l2Cache is not defined.");
    };
    return {
      set: () => {
        l2CacheNotDefinedAssert();
      },
      get: () => {
        l2CacheNotDefinedAssert();
        return undefinedValue;
      },
      remove: () => {
        l2CacheNotDefinedAssert();
      },
      clear: () => {
      }
    };
  };
  const SetCls = Set;
  class MethodSnapshotContainer {
    constructor(capacity) {
      this.records = {};
      this.occupy = 0;
      myAssert(capacity >= 0, "expected snapshots limit to be >= 0");
      this.capacity = capacity;
    }
    /**
     * Save method instance snapshot
     * @param methodInstance method instance
     */
    save(methodInstance) {
      const { name } = getConfig(methodInstance);
      const { records, occupy, capacity } = this;
      if (name && occupy < capacity) {
        const targetSnapshots = records[name] = records[name] || newInstance(SetCls);
        targetSnapshots.add(methodInstance);
        this.occupy += 1;
      }
    }
    /**
     * Get a Method instance snapshot, which will filter out the corresponding Method instance based on the matcher
     * @param matcher Matching snapshot name, which can be a string or regular expression, or an object with a filter function
     * @returns Array of matched Method instance snapshots
     */
    match(matcher, matchAll = true) {
      let nameString;
      let nameReg;
      let matchHandler;
      let nameMatcher = matcher;
      if (isPlainObject(matcher)) {
        nameMatcher = matcher.name;
        matchHandler = matcher.filter;
      }
      if (instanceOf(nameMatcher, RegExpCls)) {
        nameReg = nameMatcher;
      } else if (isString(nameMatcher)) {
        nameString = nameMatcher;
      }
      const { records } = this;
      let matches = newInstance(SetCls);
      if (nameString) {
        matches = records[nameString] || matches;
      } else if (nameReg) {
        forEach(filterItem(objectKeys(records), (methodName) => nameReg.test(methodName)), (methodName) => {
          records[methodName].forEach((method) => matches.add(method));
        });
      }
      const fromMatchesArray = isFn(matchHandler) ? filterItem([...matches], matchHandler) : [...matches];
      return matchAll ? fromMatchesArray : fromMatchesArray[0];
    }
  }
  const typeGet = "GET";
  const typeHead = "HEAD";
  const typePost = "POST";
  const typePut = "PUT";
  const typePatch = "PATCH";
  const typeDelete = "DELETE";
  const typeOptions = "OPTIONS";
  const defaultAlovaOptions = {
    /**
     * GET requests are cached for 5 minutes (300000 milliseconds) by default, and other requests are not cached by default.
     */
    cacheFor: {
      [typeGet]: 3e5
    },
    /**
     * Share requests default to true
     */
    shareRequest: trueValue,
    /**
     * Number of method snapshots, default is 1000
     */
    snapshots: 1e3
  };
  let idCount = 0;
  class Alova {
    constructor(options) {
      var _a, _b;
      const instance = this;
      instance.id = (options.id || (idCount += 1)).toString();
      instance.l1Cache = options.l1Cache || memoryAdapter();
      instance.l2Cache = options.l2Cache || (typeof localStorage !== "undefined" ? localStorageAdapter() : placeholderAdapter());
      instance.options = {
        ...defaultAlovaOptions,
        ...options
      };
      instance.snapshots = newInstance(MethodSnapshotContainer, (_b = (_a = options.snapshots) !== null && _a !== void 0 ? _a : defaultAlovaOptions.snapshots) !== null && _b !== void 0 ? _b : 0);
    }
    Get(url, config2) {
      return newInstance(Method, typeGet, this, url, config2);
    }
    Post(url, data, config2) {
      return newInstance(Method, typePost, this, url, config2, data);
    }
    Delete(url, data, config2) {
      return newInstance(Method, typeDelete, this, url, config2, data);
    }
    Put(url, data, config2) {
      return newInstance(Method, typePut, this, url, config2, data);
    }
    Head(url, config2) {
      return newInstance(Method, typeHead, this, url, config2);
    }
    Patch(url, data, config2) {
      return newInstance(Method, typePatch, this, url, config2, data);
    }
    Options(url, config2) {
      return newInstance(Method, typeOptions, this, url, config2);
    }
  }
  let boundStatesHook = undefinedValue;
  const usingL1CacheAdapters = [];
  const usingL2CacheAdapters = [];
  const createAlova = (options) => {
    const alovaInstance2 = newInstance(Alova, options);
    const newStatesHook = alovaInstance2.options.statesHook;
    if (boundStatesHook) {
      myAssert(boundStatesHook === newStatesHook, "expected to use the same `statesHook`");
    }
    boundStatesHook = newStatesHook;
    const { l1Cache, l2Cache } = alovaInstance2;
    !usingL1CacheAdapters.includes(l1Cache) && pushItem(usingL1CacheAdapters, l1Cache);
    !usingL2CacheAdapters.includes(l2Cache) && pushItem(usingL2CacheAdapters, l2Cache);
    return alovaInstance2;
  };
  const isBodyData = (data) => isString(data) || isSpecialRequestBody(data);
  function adapterFetch() {
    return (elements, method) => {
      const adapterConfig = method.config;
      const timeout = adapterConfig.timeout || 0;
      const ctrl = new AbortController();
      const { data, headers } = elements;
      const isContentTypeSet = /content-type/i.test(ObjectCls.keys(headers).join());
      const isDataFormData = data && data.toString() === "[object FormData]";
      if (!isContentTypeSet && !isDataFormData) {
        headers["Content-Type"] = "application/json;charset=UTF-8";
      }
      const fetchPromise = fetch(elements.url, {
        ...adapterConfig,
        method: elements.type,
        signal: ctrl.signal,
        body: isBodyData(data) ? data : JSONStringify(data)
      });
      let abortTimer;
      let isTimeout = falseValue;
      if (timeout > 0) {
        abortTimer = setTimeoutFn(() => {
          isTimeout = trueValue;
          ctrl.abort();
        }, timeout);
      }
      return {
        response: () => fetchPromise.then((response) => {
          clearTimeoutTimer(abortTimer);
          return response.clone();
        }, (err) => promiseReject(isTimeout ? newInstance(Error, "fetchError: network timeout") : err)),
        // The then in the Headers function needs to catch exceptions, otherwise the correct error object will not be obtained internally.
        headers: () => fetchPromise.then(({ headers: responseHeaders }) => responseHeaders, () => ({})),
        // Due to limitations of the node fetch library, this code cannot be unit tested, but it has passed the test in the browser.
        /* c8 ignore start */
        onDownload: async (cb) => {
          let isAborted = falseValue;
          const response = await fetchPromise.catch(() => {
            isAborted = trueValue;
          });
          if (!response)
            return;
          const { headers: responseHeaders, body } = response.clone();
          const reader = body ? body.getReader() : undefinedValue;
          const total = Number(responseHeaders.get("Content-Length") || responseHeaders.get("content-length") || 0);
          if (total <= 0) {
            return;
          }
          let loaded = 0;
          if (reader) {
            const pump = () => reader.read().then(({ done, value = new Uint8Array() }) => {
              if (done || isAborted) {
                isAborted && cb(total, 0);
              } else {
                loaded += value.byteLength;
                cb(total, loaded);
                return pump();
              }
            });
            pump();
          }
        },
        onUpload() {
          console.error("fetch API does'nt support uploading progress. please consider to change `@alova/adapter-xhr` or `@alova/adapter-axios`");
        },
        /* c8 ignore stop */
        abort: () => {
          ctrl.abort();
          clearTimeoutTimer(abortTimer);
        }
      };
    };
  }
  const alovaInstance = createAlova({
    baseURL: "",
    timeout: 1e4,
    requestAdapter: adapterFetch(),
    // 响应拦截
    responded: {
      onSuccess: async (response, method) => {
        const json = await response.json();
        return json;
      },
      // 请求失败的拦截器
      // 请求错误时将会进入该拦截器。
      // 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
      onError: (error, method) => {
        return error;
      }
    }
  });
  const xunlei = {
    share: (data, config2) => {
      return alovaInstance.Post("https://api-pan.xunlei.com/drive/v1/share", data, config2);
    }
  };
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  const uc = {
    // 获取任务ID 第一步
    getTaskId: (data) => {
      return new Promise(
        (resolve, reject) => {
          _GM_xmlhttpRequest({
            method: "post",
            url: "https://pc-api.uc.cn/1/clouddrive/share?pr=UCBrowser&fr=pc",
            headers: {
              accept: "application/json, text/plain, */*"
            },
            data: JSON.stringify(data),
            onload: ({ response }) => {
              var _a, _b, _c, _d;
              const { data: data2 = {} } = JSON.parse(response) || {};
              resolve({
                task_id: (data2 == null ? void 0 : data2.task_id) ? data2 == null ? void 0 : data2.task_id : (_b = (_a = data2 == null ? void 0 : data2.task_resp) == null ? void 0 : _a.data) == null ? void 0 : _b.task_id,
                share_id: ((_d = (_c = data2 == null ? void 0 : data2.task_resp) == null ? void 0 : _c.data) == null ? void 0 : _d.share_id) ?? ""
              });
            },
            onerror: (res) => {
              reject(res);
            }
          });
        }
      );
    },
    //获取分享链接 第二步
    getShareId: (taskId, time = 0) => {
      return new Promise((resolve, reject) => {
        _GM_xmlhttpRequest({
          method: "get",
          url: `https://pc-api.uc.cn/1/clouddrive/task?pr=UCBrowser&fr=pc&task_id=${taskId}&retry_index=${time}`,
          headers: {
            accept: "application/json, text/plain, */*"
          },
          onload: ({ response }) => {
            const { data = {} } = JSON.parse(response) || {};
            resolve({
              share_id: (data == null ? void 0 : data.share_id) ?? ""
            });
          },
          onerror: (res) => {
            reject(res);
          }
        });
      });
    },
    // 获取分享信息 第三步
    getShareInfo: (share_id) => {
      return new Promise(
        (resolve, reject) => {
          _GM_xmlhttpRequest({
            method: "post",
            url: "https://pc-api.uc.cn/1/clouddrive/share/password?pr=UCBrowser&fr=pc",
            data: JSON.stringify({
              share_id
            }),
            onload: ({ response }) => {
              const { data } = JSON.parse(response) || {};
              const { share_url = "", passcode = "" } = data || {};
              resolve({
                share_url,
                passcode
              });
            },
            onerror: (res) => {
              reject(res);
            }
          });
        }
      );
    }
  };
  const baidu = {
    //获取分享链接
    share: (url, data, params, config2) => {
      return alovaInstance.Post(url, new URLSearchParams(data), {
        params: {
          channel: "chunlei",
          clienttype: "0",
          app_id: "250528",
          //未知-好像是定值
          web: 1,
          ...params
        },
        ...config2
      });
    }
  };
  const tianyi = {
    //获取分享链接
    share: (paramsData) => {
      return alovaInstance.Get(
        window.location.origin + "/api/open/share/createShareLink.action",
        {
          params: {
            ...paramsData
          },
          headers: {
            accept: "application/json;charset=UTF-8"
          }
        }
      );
    }
  };
  const quark = {
    // 获取任务ID 第一步
    getTaskId: (data) => {
      return new Promise((resolve, reject) => {
        _GM_xmlhttpRequest({
          method: "post",
          url: "https://drive-pc.quark.cn/1/clouddrive/share?pr=ucpro&fr=pc",
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type": "application/json"
          },
          data: JSON.stringify(data),
          onload: ({ response }) => {
            const { data: data2 } = JSON.parse(response) || {};
            const task_id = (data2 == null ? void 0 : data2.task_id) ?? "";
            resolve({
              task_id
            });
          },
          onerror: (res) => {
            reject(res);
          }
        });
      });
    },
    //获取分享链接 第二步
    getShareId: (taskId, retry_index = 0) => {
      return new Promise((resolve, reject) => {
        _GM_xmlhttpRequest({
          method: "get",
          url: `https://drive-pc.quark.cn/1/clouddrive/task?pr=ucpro&fr=pc&task_id=${taskId}&retry_index=${retry_index}`,
          onload: ({ response }) => {
            const { data } = JSON.parse(response) || {};
            const share_id = (data == null ? void 0 : data.share_id) ?? "";
            resolve({
              share_id
            });
          },
          onerror: (res) => {
            reject(res);
          }
        });
      });
    },
    // 获取分享信息 第三步
    getShareInfo: (share_id) => {
      return new Promise(
        (resolve, reject) => {
          _GM_xmlhttpRequest({
            method: "post",
            url: "https://drive-pc.quark.cn/1/clouddrive/share/password?pr=ucpro&fr=pc",
            data: JSON.stringify({
              share_id
            }),
            onload: ({ response }) => {
              const { data } = JSON.parse(response) || {};
              const { share_url = "", passcode = "" } = data || {};
              resolve({
                share_url,
                passcode
              });
            },
            onerror: (res) => {
              reject(res);
            }
          });
        }
      );
    }
  };
  const alipan = {
    //获取分享链接
    share: (data) => {
      const token2 = JSON.parse(
        localStorage.getItem("token") ?? `{}`
      );
      return alovaInstance.Post(
        "https://api.aliyundrive.com/adrive/v2/share_link/create",
        data,
        {
          headers: {
            authorization: `${token2.token_type} ${token2.access_token}`
          }
        }
      );
    }
  };
  const yidong139 = {
    share: (data, auth) => {
      return alovaInstance.Post(
        `${window.location.origin}/orchestration/personalCloud-rebuild/outlink/v1.0/getOutLink`,
        data,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: auth
          }
        }
      );
    }
  };
  const lanzou = {
    //获取分享链接
    share: (data) => {
      return alovaInstance.Post(
        `${window.location.origin}/doupload.php`,
        new URLSearchParams(data),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      );
    }
  };
  const yun115 = {
    //获取文件夹大小
    getFolderSize: (id) => {
      return new Promise((resolve, reject) => {
        _GM_xmlhttpRequest({
          method: "get",
          url: `https://webapi.115.com/category/get?cid=${id}`,
          onload: ({ response }) => {
            const result = JSON.parse(response);
            if (!result.error) {
              resolve((result == null ? void 0 : result.size) ?? "");
            } else {
              reject(result);
            }
          },
          onerror: (err) => {
            reject(err);
          }
        });
      });
    },
    //获取分享链接
    share: (data) => {
      return new Promise((resolve, reject) => {
        _GM_xmlhttpRequest({
          method: "post",
          url: "https://webapi.115.com/share/send",
          data,
          headers: {
            Accept: "application/json, text/javascript, */*; q=0.01"
          },
          onload: ({ response }) => {
            const result = JSON.parse(response);
            if (!result.error) {
              resolve(result);
            } else {
              reject(result);
            }
          },
          onerror: (err) => {
            reject(err);
          }
        });
      });
    },
    //更新设置内容
    updateSetting: (data) => {
      return new Promise((resolve, reject) => {
        _GM_xmlhttpRequest({
          method: "post",
          url: "https://webapi.115.com/share/updateshare",
          headers: {
            Accept: "application/json, text/javascript, */*; q=0.01"
          },
          data,
          onload: ({ response }) => {
            const result = JSON.parse(response);
            if (!result.error) {
              resolve(result);
            } else {
              reject(result);
            }
          },
          onerror: (err) => {
            reject(err);
          }
        });
      });
    },
    //更新免登录下载限制
    updateAnonymousDownloadLimit: (data) => {
      return new Promise((resolve, reject) => {
        _GM_xmlhttpRequest({
          method: "post",
          url: "https://webapi.115.com/share/skip_login_down",
          headers: {
            Accept: "application/json, text/javascript, */*; q=0.01"
          },
          data,
          onload: ({ response }) => {
            const result = JSON.parse(response);
            if (!result.error) {
              resolve(result);
            } else {
              reject(result);
            }
          },
          onerror: (res) => {
            reject(res);
          }
        });
      });
    }
  };
  const shareLogicMap = {
    //参考https://alova.js.org/zh-CN/api/alova#alovapost
    //迅雷分享逻辑
    [cloudEnum.xunlei]: xunlei,
    //UC网盘分享逻辑
    [cloudEnum.uc]: uc,
    //百度网盘分享逻辑
    [cloudEnum.baidu]: baidu,
    //天翼云分享逻辑
    [cloudEnum.tianyi]: tianyi,
    //夸克网盘分享逻辑
    [cloudEnum.quark]: quark,
    //阿里云盘分享逻辑
    [cloudEnum.alipan]: alipan,
    //移动139分享逻辑
    [cloudEnum.yidong139]: yidong139,
    //蓝奏云分享逻辑
    [cloudEnum.lanzou]: lanzou,
    //115网盘分享逻辑
    [cloudEnum.yun115]: yun115
  };
  const ContentCopyIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
  }));
  const HourglassEmptyIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2zm10 14.5V20H8v-3.5l4-4zm-4-5-4-4V4h8v3.5z"
  }));
  const CheckCircleIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
  }));
  const ErrorIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"
  }));
  const StatusIcon = ({ status }) => {
    switch (status) {
      case "ready":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(HourglassEmptyIcon, { fontSize: "small", color: "disabled" });
      case "sharing":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 16 });
      case "success":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircleIcon, { fontSize: "small", color: "success" });
      case "error":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorIcon, { fontSize: "small", color: "error" });
    }
  };
  const StatusText = ({
    status,
    message
  }) => {
    const style2 = {
      maxWidth: "200px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      display: "inline-block"
    };
    switch (status) {
      case "ready":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: style2, children: "准备分享" });
      case "sharing":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: style2, children: "分享中..." });
      case "success":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: style2, children: "分享成功" });
      case "error":
        return message ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: style2, children: message }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: style2, children: "分享失败" });
    }
  };
  const ExpandMoreIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }));
  const ExpandLessIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
  }));
  var ExpireTimeEnum$8 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 1] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["twoDay"] = 2] = "twoDay";
    ExpireTimeEnum2[ExpireTimeEnum2["threeDay"] = 3] = "threeDay";
    ExpireTimeEnum2[ExpireTimeEnum2["fourDay"] = 4] = "fourDay";
    ExpireTimeEnum2[ExpireTimeEnum2["fiveDay"] = 5] = "fiveDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sixDay"] = 6] = "sixDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 7] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = -1] = "forever";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$8 || {});
  var ExtractEnum$1 = /* @__PURE__ */ ((ExtractEnum2) => {
    ExtractEnum2[ExtractEnum2["forever"] = -1] = "forever";
    ExtractEnum2[ExtractEnum2["One"] = 1] = "One";
    ExtractEnum2[ExtractEnum2["Two"] = 2] = "Two";
    ExtractEnum2[ExtractEnum2["Three"] = 3] = "Three";
    ExtractEnum2[ExtractEnum2["Four"] = 4] = "Four";
    ExtractEnum2[ExtractEnum2["Five"] = 5] = "Five";
    ExtractEnum2[ExtractEnum2["Six"] = 6] = "Six";
    ExtractEnum2[ExtractEnum2["Seven"] = 7] = "Seven";
    ExtractEnum2[ExtractEnum2["Eight"] = 8] = "Eight";
    ExtractEnum2[ExtractEnum2["Nine"] = 9] = "Nine";
    ExtractEnum2[ExtractEnum2["Ten"] = 10] = "Ten";
    ExtractEnum2[ExtractEnum2["Eleven"] = 11] = "Eleven";
    ExtractEnum2[ExtractEnum2["Twelve"] = 12] = "Twelve";
    ExtractEnum2[ExtractEnum2["Thirteen"] = 13] = "Thirteen";
    ExtractEnum2[ExtractEnum2["Fourteen"] = 14] = "Fourteen";
    ExtractEnum2[ExtractEnum2["Fifteen"] = 15] = "Fifteen";
    ExtractEnum2[ExtractEnum2["Sixteen"] = 16] = "Sixteen";
    ExtractEnum2[ExtractEnum2["Seventeen"] = 17] = "Seventeen";
    ExtractEnum2[ExtractEnum2["Eighteen"] = 18] = "Eighteen";
    ExtractEnum2[ExtractEnum2["Nineteen"] = 19] = "Nineteen";
    ExtractEnum2[ExtractEnum2["Twenty"] = 20] = "Twenty";
    return ExtractEnum2;
  })(ExtractEnum$1 || {});
  const extractOptions$1 = [
    { label: "不限", value: ExtractEnum$1.forever },
    { label: "1天", value: ExtractEnum$1.One },
    { label: "2天", value: ExtractEnum$1.Two },
    { label: "3天", value: ExtractEnum$1.Three },
    { label: "4天", value: ExtractEnum$1.Four },
    { label: "5天", value: ExtractEnum$1.Five },
    { label: "6天", value: ExtractEnum$1.Six },
    { label: "7天", value: ExtractEnum$1.Seven },
    { label: "8天", value: ExtractEnum$1.Eight },
    { label: "9天", value: ExtractEnum$1.Nine },
    { label: "10天", value: ExtractEnum$1.Ten },
    { label: "11天", value: ExtractEnum$1.Eleven },
    { label: "12天", value: ExtractEnum$1.Twelve },
    { label: "13天", value: ExtractEnum$1.Thirteen },
    { label: "14天", value: ExtractEnum$1.Fourteen },
    { label: "15天", value: ExtractEnum$1.Fifteen },
    { label: "16天", value: ExtractEnum$1.Sixteen },
    { label: "17天", value: ExtractEnum$1.Seventeen },
    { label: "18天", value: ExtractEnum$1.Eighteen },
    { label: "19天", value: ExtractEnum$1.Nineteen },
    { label: "20天", value: ExtractEnum$1.Twenty }
  ];
  const expireTimeOptions$4 = [
    { label: "不限", value: ExpireTimeEnum$8.forever },
    { label: "1天", value: ExpireTimeEnum$8.oneDay },
    { label: "2天", value: ExpireTimeEnum$8.twoDay },
    { label: "3天", value: ExpireTimeEnum$8.threeDay },
    { label: "4天", value: ExpireTimeEnum$8.fourDay },
    { label: "5天", value: ExpireTimeEnum$8.fiveDay },
    { label: "6天", value: ExpireTimeEnum$8.sixDay },
    { label: "7天", value: ExpireTimeEnum$8.sevenDay }
  ];
  const sleep = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  var FileSaver_min$1 = { exports: {} };
  var FileSaver_min = FileSaver_min$1.exports;
  var hasRequiredFileSaver_min;
  function requireFileSaver_min() {
    if (hasRequiredFileSaver_min) return FileSaver_min$1.exports;
    hasRequiredFileSaver_min = 1;
    (function(module, exports) {
      (function(a, b) {
        b();
      })(FileSaver_min, function() {
        function b(a2, b2) {
          return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
        }
        function c(a2, b2, c2) {
          var d2 = new XMLHttpRequest();
          d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
            g(d2.response, b2, c2);
          }, d2.onerror = function() {
            console.error("could not download file");
          }, d2.send();
        }
        function d(a2) {
          var b2 = new XMLHttpRequest();
          b2.open("HEAD", a2, false);
          try {
            b2.send();
          } catch (a3) {
          }
          return 200 <= b2.status && 299 >= b2.status;
        }
        function e(a2) {
          try {
            a2.dispatchEvent(new MouseEvent("click"));
          } catch (c2) {
            var b2 = document.createEvent("MouseEvents");
            b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
          }
        }
        var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
        } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
          var i = f.URL || f.webkitURL, j = document.createElement("a");
          g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
            i.revokeObjectURL(j.href);
          }, 4e4), setTimeout(function() {
            e(j);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
          if (g2 = g2 || f2.name || "download", "string" != typeof f2) navigator.msSaveOrOpenBlob(b(f2, h), g2);
          else if (d(f2)) c(f2, g2, h);
          else {
            var i = document.createElement("a");
            i.href = f2, i.target = "_blank", setTimeout(function() {
              e(i);
            });
          }
        } : function(b2, d2, e2, g2) {
          if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2) return c(b2, d2, e2);
          var h = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
          if ((j || h && i || a) && "undefined" != typeof FileReader) {
            var k = new FileReader();
            k.onloadend = function() {
              var a2 = k.result;
              a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
            }, k.readAsDataURL(b2);
          } else {
            var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
            g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
              l.revokeObjectURL(m);
            }, 4e4);
          }
        });
        f.saveAs = g.saveAs = g, module.exports = g;
      });
    })(FileSaver_min$1);
    return FileSaver_min$1.exports;
  }
  var FileSaver_minExports = requireFileSaver_min();
  const FileSaver = /* @__PURE__ */ getDefaultExportFromCjs(FileSaver_minExports);
  function findLocalStorageKeysWithPrefix(prefix2) {
    let result = {};
    for (const key2 in localStorage) {
      if (localStorage.hasOwnProperty(key2) && key2.startsWith(prefix2)) {
        result = JSON.parse(localStorage[key2]);
      }
    }
    return result;
  }
  function copy(text) {
    return new Promise((resolve, reject) => {
      navigator.clipboard.writeText(text).then(resolve).catch(reject);
    });
  }
  function downloadTxt(text, filename) {
    const a = document.createElement("a");
    a.href = "data:text/plain;charset=utf-8," + encodeURIComponent(text);
    a.download = filename;
    a.click();
  }
  function getTimestamp() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  function exportXlsxFile(filename, data) {
    if (!data || !(data == null ? void 0 : data.length)) {
      throw new Error("数据不能为空");
    }
    const worksheet = XLSX__namespace.utils.json_to_sheet(data);
    const workbook = XLSX__namespace.utils.book_new();
    XLSX__namespace.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const wb_out = XLSX__namespace.write(workbook, { type: "buffer" });
    FileSaver.saveAs(
      new Blob([wb_out], { type: "application/octet-stream" }),
      filename
    );
  }
  function generateRandomString(numDigits = 4) {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    let result = "";
    for (let i = 0; i < numDigits; i++) {
      const randomIndex = Math.floor(
        Math.random() * (numbers.length + letters.length)
      );
      if (randomIndex < numbers.length) {
        result += String(numbers[randomIndex]);
      } else {
        result += letters[randomIndex - numbers.length];
      }
    }
    return result;
  }
  function bytesToSize(bytes) {
    if (bytes === 0) return "0B";
    const units = ["B", "KB", "MB", "GB", "TB"];
    const k = 1024;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const size = bytes / Math.pow(k, i);
    const sizeStr = size.toFixed(2);
    return sizeStr.endsWith(".00") ? `${parseInt(sizeStr)}${units[i]}` : `${sizeStr}${units[i]}`;
  }
  const FileShareStatusEnum = {
    all: "all",
    ready: "ready",
    sharing: "sharing",
    success: "success",
    error: "error"
  };
  const getShareInfo$1 = () => {
    var _a;
    try {
      const tempDOM = document.querySelector(".pan-web");
      const selectedRowKeys = tempDOM.__vue__.$parent.fileSelected ?? [];
      const allInfo = tempDOM.__vue__.$store.state.drive.all ?? {};
      const selectRowInfos = selectedRowKeys.map((id) => allInfo[id]) ?? [];
      const temp1 = findLocalStorageKeysWithPrefix("captcha_") ?? {};
      const temp2 = findLocalStorageKeysWithPrefix("credentials_") ?? {};
      let temp3 = "";
      for (const key2 in localStorage) {
        if (key2.startsWith("captcha_")) {
          temp3 = key2.slice(key2.indexOf("_") + 1);
        }
      }
      return {
        "x-captcha-token": temp1.token,
        authorization: `${temp2.token_type} ` + temp2.access_token,
        "x-device-id": (_a = localStorage.getItem("deviceid")) == null ? void 0 : _a.slice(6, 38),
        "x-client-id": temp3,
        selectedRowKeys,
        //文件id
        selectRowInfos
        //文件信息
      };
    } catch {
      return {};
    }
  };
  const transformFileInfo = (list) => {
    if (!list || !(list == null ? void 0 : list.length)) return [];
    return list == null ? void 0 : list.map((item) => {
      return {
        id: item == null ? void 0 : item.id,
        fileName: item == null ? void 0 : item.name,
        status: FileShareStatusEnum.ready,
        fileSize: bytesToSize(item == null ? void 0 : item.size) ?? "NA"
      };
    });
  };
  const transformShareInfoForXlsx$9 = (list) => {
    if (!list || !(list == null ? void 0 : list.length)) return [];
    return list == null ? void 0 : list.map((item) => {
      var _a, _b;
      const expireTimeLabel = ((_a = expireTimeOptions$4.find((option) => option.value === (item == null ? void 0 : item.expireTime))) == null ? void 0 : _a.label) || (item == null ? void 0 : item.expireTime) || "";
      const restoreLimitLabel = ((_b = extractOptions$1.find((option) => option.value === (item == null ? void 0 : item.restoreLimit))) == null ? void 0 : _b.label) || (item == null ? void 0 : item.restoreLimit) || "";
      return {
        文件名称: (item == null ? void 0 : item.fileName) ?? "",
        分享链接: (item == null ? void 0 : item.shareLink) ?? "",
        提取码: (item == null ? void 0 : item.extractCode) ?? "",
        有效期: expireTimeLabel,
        有效次数: restoreLimitLabel
      };
    });
  };
  const formatStringForCopyAndDownload$9 = (list) => {
    if (!list || !(list == null ? void 0 : list.length)) return "";
    return list == null ? void 0 : list.map((item) => {
      return `${item == null ? void 0 : item.fileName} ${item == null ? void 0 : item.shareLink} ${item == null ? void 0 : item.extractCode}`;
    }).join("\n");
  };
  const DeleteIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
  }));
  const NotificationsContext = /* @__PURE__ */ React__namespace.createContext(null);
  const serverNotifications = {
    show: () => {
      throw new Error("Not supported on server side");
    },
    close: () => {
      throw new Error("Not supported on server side");
    }
  };
  function useNotifications() {
    const context = React__namespace.useContext(NotificationsContext);
    if (context) {
      return context;
    }
    return serverNotifications;
  }
  const CloseIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }));
  function useNonNullableContext(context, name) {
    const maybeContext = React__namespace.useContext(context);
    if (maybeContext === null || maybeContext === void 0) {
      throw new Error(`context "${name}" was used without a Provider`);
    }
    return maybeContext;
  }
  const LocalizationContext = /* @__PURE__ */ React__namespace.createContext({});
  function useLocaleText() {
    return React__namespace.useContext(LocalizationContext);
  }
  var _CloseIcon;
  const RootPropsContext = /* @__PURE__ */ React__namespace.createContext(null);
  const defaultLocaleText = {
    close: "Close"
  };
  function Notification({
    notificationKey,
    open: open2,
    message,
    options,
    badge
  }) {
    var _a, _b;
    const globalLocaleText = useLocaleText();
    const localeText = {
      ...defaultLocaleText,
      ...globalLocaleText
    };
    const {
      close
    } = useNonNullableContext(NotificationsContext);
    const {
      severity,
      actionText,
      onAction,
      autoHideDuration
    } = options;
    const handleClose = React__namespace.useCallback((event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      close(notificationKey);
    }, [notificationKey, close]);
    const action = /* @__PURE__ */ jsxRuntimeExports.jsxs(React__namespace.Fragment, {
      children: [onAction ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
        color: "inherit",
        size: "small",
        onClick: onAction,
        children: actionText ?? "Action"
      }) : null, /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, {
        size: "small",
        "aria-label": localeText == null ? void 0 : localeText.close,
        title: localeText == null ? void 0 : localeText.close,
        color: "inherit",
        onClick: handleClose,
        children: _CloseIcon || (_CloseIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(CloseIcon, {
          fontSize: "small"
        }))
      })]
    });
    const props = React__namespace.useContext(RootPropsContext);
    const SnackbarComponent = ((_a = props == null ? void 0 : props.slots) == null ? void 0 : _a.snackbar) ?? Snackbar;
    const snackbarSlotProps = useSlotProps({
      elementType: SnackbarComponent,
      ownerState: props,
      externalSlotProps: (_b = props == null ? void 0 : props.slotProps) == null ? void 0 : _b.snackbar,
      additionalProps: {
        open: open2,
        autoHideDuration,
        onClose: handleClose,
        action
      }
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarComponent, {
      ...snackbarSlotProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, {
        badgeContent: badge,
        color: "primary",
        sx: {
          width: "100%"
        },
        children: severity ? /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, {
          severity,
          sx: {
            width: "100%"
          },
          action,
          children: message
        }) : /* @__PURE__ */ jsxRuntimeExports.jsx(SnackbarContent, {
          message,
          action
        })
      })
    }, notificationKey);
  }
  function Notifications({
    state
  }) {
    const currentNotification = state.queue[0] ?? null;
    return currentNotification ? /* @__PURE__ */ jsxRuntimeExports.jsx(Notification, {
      ...currentNotification,
      badge: state.queue.length > 1 ? String(state.queue.length) : null
    }) : null;
  }
  let nextId = 0;
  const generateId = () => {
    const id = nextId;
    nextId += 1;
    return id;
  };
  function NotificationsProvider(props) {
    const {
      children
    } = props;
    const [state, setState] = React__namespace.useState({
      queue: []
    });
    const show = React__namespace.useCallback((message, options = {}) => {
      const notificationKey = options.key ?? `::toolpad-internal::notification::${generateId()}`;
      setState((prev2) => {
        if (prev2.queue.some((n) => n.notificationKey === notificationKey)) {
          return prev2;
        }
        return {
          ...prev2,
          queue: [...prev2.queue, {
            message,
            options,
            notificationKey,
            open: true
          }]
        };
      });
      return notificationKey;
    }, []);
    const close = React__namespace.useCallback((key2) => {
      setState((prev2) => ({
        ...prev2,
        queue: prev2.queue.filter((n) => n.notificationKey !== key2)
      }));
    }, []);
    const contextValue = React__namespace.useMemo(() => ({
      show,
      close
    }), [show, close]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RootPropsContext.Provider, {
      value: props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(NotificationsContext.Provider, {
        value: contextValue,
        children: [children, /* @__PURE__ */ jsxRuntimeExports.jsx(Notifications, {
          state
        })]
      })
    });
  }
  function useShare({
    cloudName
  }) {
    const notifications = useNotifications();
    const [open2, setOpen] = React.useState(false);
    const [configExpanded, setConfigExpanded] = React.useState(true);
    const [loadingShareData, setLoadingShareData] = React.useState(false);
    const [isSharing, setIsSharing] = React.useState(false);
    const [isPreparingShare, setIsPreparingShare] = React.useState(true);
    const [isPrepared, setIsPrepared] = React.useState(false);
    const [isCancelling, setIsCancelling] = React.useState(false);
    const [filterStatus, setFilterStatus] = React.useState(
      FileShareStatusEnum.all
    );
    const [shareResults, setShareResults] = React.useState([]);
    const isCancellingRef = React.useRef(false);
    const handleCopy = (text) => {
      copy(text).then(() => {
        notifications.show("复制成功", {
          autoHideDuration: 1500,
          severity: "success"
        });
      }).catch((error) => {
        notifications.show("复制失败" + error, {
          autoHideDuration: 1500,
          severity: "error"
        });
      });
    };
    const handleDownloadLinks = (text) => {
      downloadTxt(text, `${cloudName}-批量分享链接-${getTimestamp()}.txt`);
    };
    const handleDownloadExcel = (text) => {
      exportXlsxFile(`${cloudName}-批量分享链接-${getTimestamp()}.xlsx`, text);
    };
    const copyLink = (link) => {
      copy(link).then(() => {
        notifications.show("已复制", {
          autoHideDuration: 1500,
          severity: "success"
        });
      }).catch((error) => {
        notifications.show("复制失败" + error, {
          autoHideDuration: 1500,
          severity: "error"
        });
      });
    };
    const resetShareStatus = () => {
      setIsPreparingShare(true);
      setIsSharing(false);
      isCancellingRef.current = false;
    };
    const handleDefaultCloseDrawerCallback = () => {
      setOpen(false);
      setIsCancelling(false);
      setIsSharing(false);
      setIsPreparingShare(true);
    };
    return {
      loadingShareData,
      isSharing,
      isPreparingShare,
      isPrepared,
      isCancelling,
      isCancellingRef,
      filterStatus,
      shareResults,
      configExpanded,
      open: open2,
      setLoadingShareData,
      setIsSharing,
      setIsPreparingShare,
      setIsPrepared,
      setIsCancelling,
      setFilterStatus,
      setShareResults,
      setConfigExpanded,
      setOpen,
      handleCopy,
      handleDownloadLinks,
      handleDownloadExcel,
      copyLink,
      resetShareStatus,
      handleDefaultCloseDrawerCallback,
      notifications
    };
  }
  const StatusCount = (props) => {
    const { shareResults, selectedItems } = props;
    const getStatusCount = React.useCallback(
      (status) => {
        return shareResults.filter((r2) => r2.status === status).length;
      },
      [shareResults]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", color: "textSecondary", children: [
      "总计: ",
      shareResults.length,
      " | 准备: ",
      getStatusCount("ready"),
      " | 分享中:",
      " ",
      getStatusCount("sharing"),
      " | 成功: ",
      getStatusCount("success"),
      " | 失败:",
      " ",
      getStatusCount("error"),
      " | 已选: ",
      selectedItems.length
    ] }) });
  };
  const FileDownloadIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"
  }));
  const ArticleIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"
  }));
  const CancelIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"
  }));
  const ShareBtns = (props) => {
    const {
      isPreparingShare,
      isSharing,
      isPrepared,
      isCancelling,
      onPrepareShare,
      onShare,
      onCancelShare
    } = props;
    if (isPreparingShare) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          color: "primary",
          size: "small",
          onClick: onPrepareShare,
          children: "准备分享"
        }
      );
    }
    if (isCancelling) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "warning", size: "small", disabled: true, children: "取消分享中..." });
    }
    if (isSharing) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          color: "error",
          size: "small",
          onClick: onCancelShare,
          children: "取消分享"
        }
      );
    }
    if (isPrepared) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          color: "success",
          size: "small",
          onClick: onShare,
          children: "开始分享"
        }
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "contained",
        color: "primary",
        size: "small",
        onClick: onPrepareShare,
        children: "准备分享111"
      }
    );
  };
  const Footer = (props) => {
    const {
      handleCancelClose,
      // 取消关闭
      isPreparingShare,
      // 准备分享
      isSharing,
      // 分享
      isPrepared,
      // 已准备
      isCancelling,
      // 取消分享
      handlePrepareShare,
      // 准备分享
      handleShare,
      // 分享
      handleCancelShare,
      // 取消分享
      copyToClipboard,
      // 复制到剪贴板
      downloadLinksToTxt,
      // 下载TXT
      downloadLinksToExcel,
      // 导出Excel
      disabledCopy,
      // 复制按钮是否禁用
      disabledDownloadLinks,
      // 下载TXT按钮是否禁用
      disabledDownloadExcel,
      // 导出Excel按钮是否禁用
      extraButtons
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "mt-auto pt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { className: "mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex justify-center items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outlined",
            color: "error",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(CancelIcon, {}),
            onClick: handleCancelClose,
            size: "small",
            children: "取消"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ShareBtns,
          {
            isPreparingShare,
            isSharing,
            isPrepared,
            isCancelling,
            onPrepareShare: handlePrepareShare,
            onShare: handleShare,
            onCancelShare: handleCancelShare
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outlined",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCopyIcon, {}),
            onClick: copyToClipboard,
            disabled: disabledCopy,
            size: "small",
            children: "复制"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outlined",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileDownloadIcon, {}),
            onClick: downloadLinksToTxt,
            disabled: disabledDownloadLinks,
            size: "small",
            children: "下载"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outlined",
            startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleIcon, {}),
            onClick: downloadLinksToExcel,
            disabled: disabledDownloadExcel,
            size: "small",
            children: "导出"
          }
        ),
        extraButtons
      ] })
    ] }) });
  };
  const Header = (props) => {
    const { title, handleCancelClose } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex justify-between items-center mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle1", className: "font-bold", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", onClick: handleCancelClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloseIcon, { fontSize: "small" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, { className: "mb-3" })
    ] });
  };
  const BaseDrawer = React.forwardRef((props, ref) => {
    const {
      open: open2,
      onClose,
      width: width2 = "50vw",
      children,
      footerProps,
      headerProps,
      className,
      extraButtons
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Drawer,
      {
        open: open2,
        onClose,
        anchor: "right",
        className,
        slotProps: {
          paper: {
            sx: {
              width: width2
            }
          }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { ...headerProps ? headerProps : {} }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex-1 overflow-y-auto p-3", children }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Footer,
            {
              ...footerProps ? footerProps : {},
              extraButtons
            }
          )
        ] })
      }
    );
  });
  const defaultGlobalSetting = {
    defaultShareDelay: 300
    // 默认分享延迟
  };
  const ShareDrawer$9 = React.forwardRef((props, ref) => {
    const { name: cloudName } = useBaseCloudInfo();
    const {
      notifications,
      loadingShareData,
      isSharing,
      isPreparingShare,
      isPrepared,
      isCancelling,
      isCancellingRef,
      filterStatus,
      shareResults,
      configExpanded,
      open: open2,
      setLoadingShareData,
      setIsSharing,
      setIsPreparingShare,
      setIsPrepared,
      setIsCancelling,
      setFilterStatus,
      setShareResults,
      setConfigExpanded,
      setOpen,
      handleCopy,
      handleDownloadLinks,
      handleDownloadExcel,
      copyLink,
      resetShareStatus,
      handleDefaultCloseDrawerCallback
    } = useShare({ cloudName });
    const [shareConfig, setShareConfig] = React.useState({
      expireTime: ExpireTimeEnum$8.forever,
      // 提取期限，默认永久
      extractLimit: ExtractEnum$1.forever,
      // 提取次数，默认不限制
      shareDelay: defaultGlobalSetting.defaultShareDelay,
      // 分享间隔延迟，单位毫秒
      allowFastAccess: true
      // 是否允许快速访问（链接中包含提取码）
    });
    const [selectedItems, setSelectedItems] = React.useState([]);
    React.useImperativeHandle(ref, () => {
      return {
        open() {
          setOpen(true);
        }
      };
    });
    const handlePrepareShare = async () => {
      try {
        setLoadingShareData(true);
        const { selectRowInfos } = getShareInfo$1();
        setShareResults(transformFileInfo(selectRowInfos ?? []));
        setIsPreparingShare(false);
        setIsPrepared(true);
      } finally {
        setLoadingShareData(false);
      }
    };
    const handleShare = async () => {
      setIsCancelling(false);
      setIsSharing(true);
      const {
        "x-captcha-token": xCaptchaToken,
        authorization,
        "x-device-id": xDeviceId,
        "x-client-id": xClientId
      } = getShareInfo$1();
      for (let i = 0; i < shareResults.length; i++) {
        if (isCancellingRef.current) {
          setIsSharing(false);
          break;
        }
        try {
          setShareResults((prev2) => {
            const updated = [...prev2];
            updated[i] = { ...updated[i], status: "sharing" };
            return updated;
          });
          let res = await shareLogicMap[cloudEnum.xunlei].share(
            {
              expiration_days: shareConfig.expireTime + "",
              // 过期时间
              file_ids: [shareResults[i].id],
              // 文件id
              params: {
                subscribe_push: "false",
                // 是否订阅推送
                withPassCodeInLink: shareConfig.allowFastAccess ? "true" : "false"
                // 是否在链接中包含提取码
              },
              restore_limit: shareConfig.extractLimit + "",
              // 提取次数
              share_to: "copy",
              // 分享方式
              title: "云盘资源分享"
              // 分享标题
            },
            {
              headers: {
                "x-captcha-token": xCaptchaToken,
                authorization,
                "x-device-id": xDeviceId,
                "x-client-id": xClientId
              }
            }
          );
          res = {
            ...res ?? {},
            restoreLimit: shareConfig.extractLimit,
            expireTime: shareConfig.expireTime
          };
          setShareResults((prev2) => {
            var _a;
            const updated = [...prev2];
            if (((_a = res == null ? void 0 : res.share_error_files) == null ? void 0 : _a.length) > 0) {
              updated[i] = {
                ...updated[i],
                status: FileShareStatusEnum.error,
                message: "分享失败"
              };
            } else {
              updated[i] = {
                ...updated[i],
                restoreLimit: res.restoreLimit,
                expireTime: res.expireTime,
                status: "success",
                shareLink: res.share_url,
                extractCode: res.pass_code
              };
            }
            return updated;
          });
        } catch (error) {
          console.log(error, "分享失败");
          setShareResults((prev2) => {
            const updated = [...prev2];
            updated[i] = {
              ...updated[i],
              status: FileShareStatusEnum.error,
              message: "分享失败"
            };
            return updated;
          });
        } finally {
          await sleep(shareConfig.shareDelay);
        }
      }
      resetShareStatus();
    };
    const filteredResults = shareResults.filter((result) => {
      if (filterStatus === "all") return true;
      return result.status === filterStatus;
    });
    const handleCancelClose = () => {
      handleDefaultCloseDrawerCallback();
    };
    const handleCancelShare = () => {
      setIsCancelling(true);
      isCancellingRef.current = true;
      setShareResults((prev2) => {
        return prev2.map((result) => {
          if (result.status === FileShareStatusEnum.sharing || result.status === FileShareStatusEnum.ready) {
            return { ...result, status: FileShareStatusEnum.ready };
          }
          return result;
        });
      });
    };
    const handleItemSelect = (id) => {
      setSelectedItems((prev2) => {
        if (prev2.includes(id)) {
          return prev2.filter((itemId) => itemId !== id);
        } else {
          return [...prev2, id];
        }
      });
    };
    const handleSelectAll = () => {
      if (selectedItems.length === filteredResults.length) {
        setSelectedItems([]);
      } else {
        setSelectedItems(filteredResults.map((item) => item.id));
      }
    };
    const handleDeleteSelected = () => {
      if (selectedItems.length === 0) return;
      setShareResults((prev2) => {
        return prev2.filter((item) => !selectedItems.includes(item.id));
      });
      setSelectedItems([]);
      notifications.show(`已删除 ${selectedItems.length} 项`, {
        autoHideDuration: 1500,
        severity: "success"
      });
    };
    const isAllSelected = filteredResults.length > 0 && selectedItems.length === filteredResults.length;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      BaseDrawer,
      {
        open: open2,
        onClose: handleCancelClose,
        headerProps: {
          title: `${cloudName} 批量分享`,
          handleCancelClose
        },
        footerProps: {
          handleCancelClose,
          isPreparingShare,
          isSharing,
          isPrepared,
          isCancelling,
          handlePrepareShare,
          handleShare,
          handleCancelShare,
          copyToClipboard: () => handleCopy(formatStringForCopyAndDownload$9(filteredResults)),
          downloadLinksToTxt: () => handleDownloadLinks(formatStringForCopyAndDownload$9(filteredResults)),
          downloadLinksToExcel: () => handleDownloadExcel(transformShareInfoForXlsx$9(filteredResults)),
          disabledCopy: isSharing,
          disabledDownloadLinks: isSharing,
          disabledDownloadExcel: isSharing
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex flex-col h-full p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex-1 flex flex-col overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "border rounded-md bg-gray-50 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                className: "flex justify-between items-center px-3 py-2 cursor-pointer",
                onClick: () => setConfigExpanded(!configExpanded),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base m-0", children: "分享配置" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", children: configExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandLessIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandMoreIcon, {}) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: configExpanded, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "p-3 pt-0 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "提取期限" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Select,
                  {
                    value: shareConfig.expireTime,
                    label: "提取期限",
                    onChange: (e) => setShareConfig((prev2) => ({
                      ...prev2,
                      expireTime: Number(e.target.value)
                    })),
                    children: expireTimeOptions$4.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "提取次数" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Select,
                  {
                    value: shareConfig.extractLimit,
                    label: "提取次数",
                    onChange: (e) => setShareConfig((prev2) => ({
                      ...prev2,
                      extractLimit: Number(e.target.value)
                    })),
                    children: extractOptions$1.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  label: "分享延迟",
                  type: "number",
                  variant: "filled",
                  value: shareConfig.shareDelay,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    shareDelay: Number(e.target.value)
                  })),
                  slotProps: {
                    htmlInput: {
                      min: 1,
                      step: 100
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { className: "flex flex-row items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormControlLabel,
                {
                  control: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: shareConfig.allowFastAccess,
                      onChange: (e) => setShareConfig((prev2) => ({
                        ...prev2,
                        allowFastAccess: e.target.checked
                      }))
                    }
                  ),
                  label: "允许快速访问分享链接"
                }
              ) })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "mt-3 h-0 flex-1", children: [
            loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex justify-center items-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 50 }) }),
            shareResults.length > 0 && !loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base", children: "分享结果" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusCount,
                    {
                      shareResults,
                      selectedItems
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "删除已选项", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      size: "small",
                      onClick: handleDeleteSelected,
                      disabled: selectedItems.length === 0 || isSharing,
                      color: "error",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteIcon, { fontSize: "small" })
                    }
                  ) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: filterStatus,
                      size: "small",
                      onChange: (e) => setFilterStatus(e.target.value),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: "全部" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "ready", children: "准备分享" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "sharing", children: "分享中" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "success", children: "分享成功" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "error", children: "分享失败" })
                      ]
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TableContainer,
                {
                  component: Paper,
                  variant: "outlined",
                  sx: {
                    width: "100%",
                    overflow: "auto",
                    // 启用横向滚动
                    position: "relative"
                    // 为固定列提供定位上下文
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Table,
                    {
                      size: "small",
                      className: "text-sm",
                      stickyHeader: true,
                      sx: { minWidth: 650 },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            TableCell,
                            {
                              padding: "checkbox",
                              sx: {
                                position: "sticky",
                                // 使用粘性定位
                                left: 0,
                                // 固定在左侧
                                zIndex: 3,
                                // 确保在其他表头之上
                                backgroundColor: "#f5f5f5",
                                // 表头背景色
                                minWidth: "50px",
                                width: "50px"
                              },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Checkbox,
                                {
                                  size: "small",
                                  indeterminate: selectedItems.length > 0 && !isAllSelected,
                                  checked: isAllSelected,
                                  onChange: handleSelectAll,
                                  disabled: filteredResults.length === 0 || isSharing
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { style: { minWidth: "100px" }, children: "状态" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件名" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "分享链接" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "提取码" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { style: { minWidth: "100px" }, children: "信息" })
                        ] }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredResults.map((result) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            TableCell,
                            {
                              padding: "checkbox",
                              sx: {
                                position: "sticky",
                                // 使用粘性定位
                                left: 0,
                                // 固定在左侧
                                zIndex: 2,
                                // 确保在其他单元格之上
                                backgroundColor: "white",
                                // 数据行背景色
                                borderRight: "1px solid rgba(224, 224, 224, 1)"
                                // 右侧边框
                              },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Checkbox,
                                {
                                  size: "small",
                                  checked: selectedItems.includes(result.id),
                                  onChange: () => handleItemSelect(result.id),
                                  disabled: isSharing
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, { status: result.status }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            TableCell,
                            {
                              title: result.fileName,
                              children: result.fileName
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                            result.shareLink || "-",
                            result.shareLink && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              IconButton,
                              {
                                size: "small",
                                onClick: () => copyLink(result.shareLink ?? ""),
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCopyIcon, { fontSize: "small" })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.extractCode || "-" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            TableCell,
                            {
                              sx: {
                                maxWidth: "250px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                              },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                StatusText,
                                {
                                  status: result.status,
                                  message: result.message
                                }
                              )
                            }
                          )
                        ] }, result.id)) })
                      ]
                    }
                  )
                }
              )
            ] })
          ] })
        ] }) })
      }
    );
  });
  const Xunlei$1 = () => {
    const shareDOM = React.useRef(null);
    const handleClick = () => {
      var _a;
      (_a = shareDOM.current) == null ? void 0 : _a.open();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outlined",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShareIcon, {}),
          onClick: handleClick,
          children: "批量分享"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShareDrawer$9, { ref: shareDOM })
    ] });
  };
  var ExpireTimeEnum$7 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 3] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["thirty"] = 4] = "thirty";
    ExpireTimeEnum2[ExpireTimeEnum2["sixty"] = 5] = "sixty";
    ExpireTimeEnum2[ExpireTimeEnum2["halfYear"] = 7] = "halfYear";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = 1] = "forever";
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 2] = "oneDay";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$7 || {});
  const ExpireTimeEnumMap$7 = {
    [
      2
      /* oneDay */
    ]: "1天",
    [
      3
      /* sevenDay */
    ]: "7天",
    [
      4
      /* thirty */
    ]: "30天",
    [
      5
      /* sixty */
    ]: "60天",
    [
      7
      /* halfYear */
    ]: "180天",
    [
      1
      /* forever */
    ]: "永久"
  };
  var ExtractEnum = /* @__PURE__ */ ((ExtractEnum2) => {
    ExtractEnum2[ExtractEnum2["forever"] = -1] = "forever";
    ExtractEnum2[ExtractEnum2["one"] = 1] = "one";
    ExtractEnum2[ExtractEnum2["five"] = 5] = "five";
    ExtractEnum2[ExtractEnum2["ten"] = 10] = "ten";
    ExtractEnum2[ExtractEnum2["fifty"] = 50] = "fifty";
    ExtractEnum2[ExtractEnum2["hundred"] = 100] = "hundred";
    return ExtractEnum2;
  })(ExtractEnum || {});
  const ExtractEnumMap = {
    [
      -1
      /* forever */
    ]: "永久",
    [
      1
      /* one */
    ]: "1次",
    [
      5
      /* five */
    ]: "5次",
    [
      10
      /* ten */
    ]: "10次",
    [
      50
      /* fifty */
    ]: "50次"
  };
  var ExtractCodeTypeEnum = /* @__PURE__ */ ((ExtractCodeTypeEnum2) => {
    ExtractCodeTypeEnum2[ExtractCodeTypeEnum2["no"] = 1] = "no";
    ExtractCodeTypeEnum2[ExtractCodeTypeEnum2["yes"] = 2] = "yes";
    return ExtractCodeTypeEnum2;
  })(ExtractCodeTypeEnum || {});
  const extractOptions = [
    { value: ExtractEnum.forever, label: "不限制" },
    { value: ExtractEnum.one, label: "1次" },
    { value: ExtractEnum.five, label: "5次" },
    { value: ExtractEnum.ten, label: "10次" },
    { value: ExtractEnum.fifty, label: "50次" },
    { value: ExtractEnum.hundred, label: "100次" }
  ];
  const expireOptions$2 = [
    { value: ExpireTimeEnum$7.oneDay, label: "1天" },
    { value: ExpireTimeEnum$7.sevenDay, label: "7天" },
    { value: ExpireTimeEnum$7.thirty, label: "30天" },
    { value: ExpireTimeEnum$7.sixty, label: "60天" },
    { value: ExpireTimeEnum$7.halfYear, label: "180天" },
    { value: ExpireTimeEnum$7.forever, label: "永久" }
  ];
  const transformShareInfo$5 = (list) => {
    if (!list || list.length === 0) return [];
    return list.map((item) => ({
      id: item.fid,
      fileName: item.file_name,
      status: FileShareStatusEnum.ready,
      fileSize: bytesToSize(item.file_size)
    })) ?? [];
  };
  const transformShareInfoForXlsx$8 = (list) => {
    if (!list || list.length === 0) return [];
    return list.map((item) => ({
      文件名: item.fileName,
      链接: item.shareLink,
      提取码: item.extractCode,
      有效期: ExpireTimeEnumMap$7[item.expireTime],
      下载次数: ExtractEnumMap[item.restoreLimit],
      分享主题: item.shareTheme
    }));
  };
  const formatStringForCopyAndDownload$8 = (list) => {
    if (!list || list.length === 0) return "";
    return list.map(
      (item) => `${item.fileName} 链接:${item.shareLink} 提取码:${item.extractCode} 有效期:${item.expireTime} 下载次数:${item.restoreLimit}`
    ).join("\n");
  };
  function findNodeReact(selector, findKeys) {
    const node2 = typeof selector === "string" ? document.querySelector(selector) : selector;
    if (!node2) return {};
    const reactKey = Object.keys(node2).find(
      (key2) => key2.startsWith("__reactFiber$") || key2.startsWith("__reactInternalInstance$")
    );
    if (!reactKey) return {};
    const fiberNode = node2[reactKey];
    if (!fiberNode) return {};
    const result = {};
    const foundKeys = /* @__PURE__ */ new Set();
    const findInFiber = (fiber) => {
      console.log(fiber, "fiber");
      if (!fiber || foundKeys.size === findKeys.length) return;
      if (fiber.memoizedProps && typeof fiber.memoizedProps === "object") {
        for (const key2 of findKeys) {
          const typedKey = key2;
          if (result[typedKey] === void 0 && key2 in fiber.memoizedProps) {
            result[typedKey] = fiber.memoizedProps[key2];
            foundKeys.add(key2);
          }
        }
      }
      let state = fiber.memoizedState;
      while (state) {
        if (typeof state === "object" && state !== null && "memoizedState" in state) {
          const val = state.memoizedState;
          if (val && typeof val === "object") {
            for (const key2 of findKeys) {
              const typedKey = key2;
              if (result[typedKey] === void 0 && key2 in val) {
                result[typedKey] = val[key2];
                foundKeys.add(key2);
              }
            }
          }
        }
        state = state.next;
      }
      if (fiber.child) findInFiber(fiber.child);
      if (fiber.sibling) findInFiber(fiber.sibling);
    };
    findInFiber(fiberNode);
    return result;
  }
  const ShareDrawer$8 = React.forwardRef((props, ref) => {
    const { name: cloudName } = useBaseCloudInfo();
    const {
      notifications,
      loadingShareData,
      isSharing,
      isPreparingShare,
      isPrepared,
      isCancelling,
      isCancellingRef,
      filterStatus,
      shareResults,
      configExpanded,
      open: open2,
      setLoadingShareData,
      setIsSharing,
      setIsPreparingShare,
      setIsPrepared,
      setIsCancelling,
      setFilterStatus,
      setShareResults,
      setConfigExpanded,
      setOpen,
      handleCopy,
      handleDownloadLinks,
      handleDownloadExcel,
      copyLink,
      resetShareStatus,
      handleDefaultCloseDrawerCallback
    } = useShare({ cloudName });
    const [shareConfig, setShareConfig] = React.useState({
      shareDelay: defaultGlobalSetting.defaultShareDelay,
      // 分享延迟
      shareTheme: "",
      // 分享主题
      extractLimit: ExtractEnum.forever,
      // 下载次数
      expireTime: ExpireTimeEnum$7.forever,
      // 有效期
      enableCustomCode: false,
      // 是否启用自定义提取码
      customCode: ""
      // 自定义提取码
    });
    const [selectedItems, setSelectedItems] = React.useState([]);
    const filteredResults = shareResults.filter((result) => {
      if (filterStatus === "all") return true;
      return result.status === filterStatus;
    });
    React.useImperativeHandle(ref, () => {
      return {
        open() {
          setOpen(true);
        }
      };
    });
    const handlePrepareShare = async () => {
      var _a, _b;
      try {
        setLoadingShareData(true);
        const result = findNodeReact(".file-list", ["selectedRowKeys", "list"]);
        setShareResults(
          ((_b = (_a = transformShareInfo$5(result.list)) == null ? void 0 : _a.filter((item) => result.selectedRowKeys.includes(item.id))) == null ? void 0 : _b.map((item) => ({
            ...item,
            status: FileShareStatusEnum.ready
          }))) ?? []
        );
        setIsPreparingShare(false);
        setIsPrepared(true);
      } catch (e) {
        notifications.show("获取分享文件列表失败" + e, {
          autoHideDuration: 1500,
          severity: "error"
        });
        console.error(e);
      } finally {
        setLoadingShareData(false);
      }
    };
    const handleShare = async () => {
      setIsCancelling(false);
      setIsSharing(true);
      for (let i = 0; i < shareResults.length; i++) {
        if (isCancellingRef.current) {
          setIsSharing(false);
          break;
        }
        try {
          const sendData = {
            expired_type: shareConfig.expireTime,
            //分享天数
            dl_limit: shareConfig.extractLimit,
            //提取次数
            url_type: shareConfig.enableCustomCode ? ExtractCodeTypeEnum.yes : ExtractCodeTypeEnum.no,
            //提取码type
            title: shareConfig.shareTheme,
            //标题
            fid_list: [shareResults[i].id]
            //文件id
          };
          if (shareConfig.enableCustomCode) {
            sendData["passcode"] = shareConfig.customCode ? shareConfig.customCode : generateRandomString();
          }
          const { task_id } = await shareLogicMap[cloudEnum.uc].getTaskId(sendData);
          let shareIdInfo = await shareLogicMap[cloudEnum.uc].getShareId(task_id);
          if (!shareIdInfo.share_id) {
            shareIdInfo = await shareLogicMap[cloudEnum.uc].getShareId(
              task_id,
              1
            );
          }
          const { share_url, passcode } = await shareLogicMap[cloudEnum.uc].getShareInfo(shareIdInfo.share_id);
          setShareResults((prev2) => {
            const updated = [...prev2];
            if (share_url) {
              updated[i] = {
                ...updated[i],
                expireTime: shareConfig.expireTime,
                status: FileShareStatusEnum.success,
                shareLink: share_url,
                extractCode: passcode,
                restoreLimit: shareConfig.extractLimit,
                shareTheme: shareConfig.shareTheme
              };
            } else {
              updated[i] = {
                ...updated[i],
                status: FileShareStatusEnum.error,
                message: "分享失败"
              };
            }
            return updated;
          });
        } catch (error) {
          console.log(error, "分享失败");
          setShareResults((prev2) => {
            const updated = [...prev2];
            updated[i] = {
              ...updated[i],
              status: "error",
              message: "分享失败"
            };
            return updated;
          });
        } finally {
          setIsPreparingShare(true);
          setIsSharing(false);
          isCancellingRef.current = false;
          await sleep(shareConfig.shareDelay);
        }
      }
      resetShareStatus();
    };
    const handleCancelClose = () => {
      handleDefaultCloseDrawerCallback();
    };
    const handleCancelShare = () => {
      setIsCancelling(true);
      isCancellingRef.current = true;
    };
    const handleItemSelect = (id) => {
      setSelectedItems(
        (prev2) => prev2.includes(id) ? prev2.filter((item) => item !== id) : [...prev2, id]
      );
    };
    const handleSelectAll = () => {
      if (selectedItems.length === filteredResults.length) {
        setSelectedItems([]);
      } else {
        setSelectedItems(filteredResults.map((item) => item.id));
      }
    };
    const handleDeleteSelected = () => {
      setShareResults(
        (prev2) => prev2.filter((item) => !selectedItems.includes(item.id))
      );
      setSelectedItems([]);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      BaseDrawer,
      {
        open: open2,
        onClose: handleCancelClose,
        headerProps: {
          title: `${cloudName} 批量分享`,
          handleCancelClose
        },
        footerProps: {
          handleCancelClose,
          isPreparingShare,
          isSharing,
          isPrepared,
          isCancelling,
          handlePrepareShare,
          handleShare,
          handleCancelShare,
          copyToClipboard: () => {
            handleCopy(formatStringForCopyAndDownload$8(filteredResults));
          },
          downloadLinksToTxt: () => {
            handleDownloadLinks(formatStringForCopyAndDownload$8(filteredResults));
          },
          downloadLinksToExcel: () => {
            handleDownloadExcel(transformShareInfoForXlsx$8(filteredResults));
          },
          disabledCopy: isSharing,
          disabledDownloadLinks: isSharing,
          disabledDownloadExcel: isSharing
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex flex-col h-full p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex-1 flex flex-col overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "border rounded-md bg-gray-50 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                className: "flex justify-between items-center px-3 py-2 cursor-pointer",
                onClick: () => setConfigExpanded(!configExpanded),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base m-0", children: "分享配置" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", children: configExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandLessIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandMoreIcon, {}) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: configExpanded, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "p-3 pt-0 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  label: "分享延迟",
                  size: "small",
                  type: "number",
                  value: shareConfig.shareDelay,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    shareDelay: Number(e.target.value)
                  })),
                  slotProps: {
                    htmlInput: {
                      min: 1,
                      step: 100
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  size: "small",
                  label: "分享主题",
                  value: shareConfig.shareTheme,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    shareTheme: e.target.value
                  })),
                  placeholder: "请输入分享主题",
                  slotProps: {
                    htmlInput: {
                      maxLength: 30
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, size: "small", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "下载次数" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Select,
                  {
                    label: "下载次数",
                    value: shareConfig.extractLimit,
                    onChange: (e) => setShareConfig((prev2) => ({
                      ...prev2,
                      extractLimit: Number(e.target.value)
                    })),
                    size: "small",
                    children: extractOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, size: "small", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "有效期" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Select,
                  {
                    label: "有效期",
                    value: shareConfig.expireTime,
                    onChange: (e) => setShareConfig((prev2) => ({
                      ...prev2,
                      expireTime: Number(e.target.value)
                    })),
                    size: "small",
                    children: expireOptions$2.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormControlLabel,
                {
                  control: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: shareConfig.enableCustomCode,
                      onChange: (e) => setShareConfig((prev2) => ({
                        ...prev2,
                        enableCustomCode: e.target.checked
                      })),
                      size: "small"
                    }
                  ),
                  label: "开启提取码"
                }
              ) }),
              shareConfig.enableCustomCode && /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  size: "small",
                  value: shareConfig.customCode,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    customCode: e.target.value
                  })),
                  placeholder: "(可空)只能包含大小写英文+数字)",
                  slotProps: {
                    htmlInput: {
                      maxLength: 4
                    }
                  }
                }
              ) })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "mt-3 h-0 flex-1", children: [
            loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex justify-center items-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 50 }) }),
            shareResults.length > 0 && !loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base", children: "分享结果" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusCount,
                    {
                      shareResults,
                      selectedItems
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "删除已选项", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      size: "small",
                      onClick: handleDeleteSelected,
                      disabled: selectedItems.length === 0 || isSharing,
                      color: "error",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteIcon, { fontSize: "small" })
                    }
                  ) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: filterStatus,
                      size: "small",
                      onChange: (e) => setFilterStatus(e.target.value),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: "全部" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "ready", children: "准备分享" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "sharing", children: "分享中" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "success", children: "分享成功" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "error", children: "分享失败" })
                      ]
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.length === filteredResults.length && filteredResults.length > 0,
                      indeterminate: selectedItems.length > 0 && selectedItems.length < filteredResults.length,
                      onChange: handleSelectAll,
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "状态" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件名" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件大小" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "分享链接" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "提取码" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "信息" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredResults.map((result) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.includes(result.id),
                      onChange: () => handleItemSelect(result.id),
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, { status: result.status }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableCell,
                    {
                      sx: {
                        maxWidth: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      title: result.fileName,
                      children: result.fileName
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.fileSize }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.shareLink ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[150px]", children: result.shareLink }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        size: "small",
                        onClick: () => copyLink(result.shareLink ?? ""),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCopyIcon, { fontSize: "small" })
                      }
                    )
                  ] }) : "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.extractCode || "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusText,
                    {
                      status: result.status,
                      message: result.message
                    }
                  ) })
                ] }, result.id)) })
              ] }) })
            ] })
          ] })
        ] }) })
      }
    );
  });
  const Uc = () => {
    const shareDOM = React.useRef(null);
    const handleClick = () => {
      var _a;
      (_a = shareDOM.current) == null ? void 0 : _a.open();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outlined",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShareIcon, {}),
          onClick: handleClick,
          children: "批量分享"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShareDrawer$8, { ref: shareDOM })
    ] });
  };
  var ExpireTimeEnum$6 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 1] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 7] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["thirtyDay"] = 30] = "thirtyDay";
    ExpireTimeEnum2[ExpireTimeEnum2["oneYear"] = 365] = "oneYear";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = 0] = "forever";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$6 || {});
  const ExpireTimeEnumMap$6 = {
    [
      1
      /* oneDay */
    ]: "1天",
    [
      7
      /* sevenDay */
    ]: "7天",
    [
      30
      /* thirtyDay */
    ]: "30天",
    [
      365
      /* oneYear */
    ]: "1年",
    [
      0
      /* forever */
    ]: "永久"
  };
  const expireOptions$1 = [
    { value: ExpireTimeEnum$6.oneDay, label: "1天" },
    { value: ExpireTimeEnum$6.sevenDay, label: "7天" },
    { value: ExpireTimeEnum$6.thirtyDay, label: "30天" },
    { value: ExpireTimeEnum$6.oneYear, label: "1年" },
    { value: ExpireTimeEnum$6.forever, label: "永久" }
  ];
  const getBaiduShareListInfo$1 = () => {
    var _a, _b, _c, _d;
    const tempDOM = document.querySelector("tbody");
    const instance = tempDOM == null ? void 0 : tempDOM.__vue__;
    if (!instance)
      return {
        list: []
      };
    return {
      list: ((_d = (_c = (_b = (_a = instance == null ? void 0 : instance.$store) == null ? void 0 : _a.state) == null ? void 0 : _b.detail) == null ? void 0 : _c.view) == null ? void 0 : _d.fileMeta) ?? []
    };
  };
  const transformShareInfo$4 = (list) => {
    if (!list || list.length === 0) return [];
    return list.map((item) => ({
      id: item.fs_id,
      fileName: item.formatName,
      fileSize: bytesToSize(item.size),
      status: "ready"
    }));
  };
  const getBaiduBaseShareParams$1 = () => {
    var _a, _b;
    return {
      //@ts-ignore
      bdstoken: (_b = (_a = _unsafeWindow == null ? void 0 : _unsafeWindow.locals) == null ? void 0 : _a.userInfo) == null ? void 0 : _b.bdstoken,
      version: window.localStorage.getItem("cdp_checkVersionTime")
    };
  };
  const formatStringForCopyAndDownload$7 = (list) => {
    return list.map((item) => `${item.fileName} ${item.shareLink} ${item.extractCode}`).join("\n");
  };
  const transformShareInfoForXlsx$7 = (list) => {
    return list.map((item) => ({
      文件名: item.fileName,
      文件大小: item.fileSize,
      分享链接: item.shareLink,
      提取码: item.extractCode,
      有效期: ExpireTimeEnumMap$6[item.expireTime]
    }));
  };
  const ShareDrawer$7 = React.forwardRef((props, ref) => {
    React.useImperativeHandle(ref, () => {
      return {
        open() {
          setOpen(true);
        }
      };
    });
    const { name: cloudName } = useBaseCloudInfo();
    const [selectedItems, setSelectedItems] = React.useState([]);
    const {
      notifications,
      loadingShareData,
      isSharing,
      isPreparingShare,
      isPrepared,
      isCancelling,
      isCancellingRef,
      filterStatus,
      shareResults,
      configExpanded,
      open: open2,
      setLoadingShareData,
      setIsSharing,
      setIsPreparingShare,
      setIsPrepared,
      setIsCancelling,
      setFilterStatus,
      setShareResults,
      setConfigExpanded,
      setOpen,
      handleCopy,
      handleDownloadLinks,
      handleDownloadExcel,
      copyLink,
      resetShareStatus,
      handleDefaultCloseDrawerCallback
    } = useShare({ cloudName });
    const [shareConfig, setShareConfig] = React.useState({
      shareDelay: defaultGlobalSetting.defaultShareDelay,
      // 分享延迟
      expireTime: ExpireTimeEnum$6.forever,
      // 有效期
      enableCustomCode: false,
      // 是否启用自定义提取码
      customCode: "",
      // 自定义提取码
      autoFillCode: false
      // 是否自动填充提取码
    });
    const filteredResults = shareResults.filter((result) => {
      if (filterStatus === "all") return true;
      return result.status === filterStatus;
    });
    const handleCancelClose = () => {
      handleDefaultCloseDrawerCallback();
    };
    const handlePrepareShare = async () => {
      try {
        setLoadingShareData(true);
        const { list } = getBaiduShareListInfo$1();
        setShareResults(transformShareInfo$4(list));
        setIsPreparingShare(false);
        setIsPrepared(true);
      } catch (e) {
        notifications.show("获取分享文件列表失败" + e, {
          autoHideDuration: 1500,
          severity: "error"
        });
        console.error(e);
      } finally {
        setLoadingShareData(false);
      }
    };
    const handleCancelShare = () => {
      setIsCancelling(true);
      isCancellingRef.current = true;
    };
    const handleShare = async () => {
      setIsCancelling(false);
      setIsSharing(true);
      const { bdstoken, version } = getBaiduBaseShareParams$1();
      for (let i = 0; i < shareResults.length; i++) {
        if (isCancellingRef.current) {
          setIsSharing(false);
          break;
        }
        try {
          const pwd = shareConfig.enableCustomCode ? shareConfig.customCode ? shareConfig.customCode : generateRandomString() : generateRandomString();
          const res = await shareLogicMap[cloudEnum.baidu].share(
            window.location.origin + "/share/set",
            {
              period: shareConfig.expireTime,
              pwd,
              eflag_disable: true,
              //不知道是什么参数,好像是分享类型eflag_disable: "personal" === e.shareType
              channel_list: [],
              //未知
              schannel: 4,
              //未知-貌似是一个定制
              fid_list: `[${shareResults[i].id}]`
              //文件id
            },
            {
              bdstoken,
              version
            },
            {
              headers: {
                accept: "application/json;charset=UTF-8",
                "Content-Type": " application/x-www-form-urlencoded"
              }
            }
          );
          const { link } = res || {};
          setShareResults((prev2) => {
            const updated = [...prev2];
            if (link) {
              updated[i] = {
                ...updated[i],
                expireTime: shareConfig.expireTime,
                status: FileShareStatusEnum.success,
                shareLink: shareConfig.autoFillCode ? `${link}?pwd=${pwd}` : link,
                extractCode: pwd
              };
            } else {
              updated[i] = {
                ...updated[i],
                status: FileShareStatusEnum.error,
                message: "分享失败"
              };
            }
            return updated;
          });
        } catch (error) {
          console.log(error, "分享失败");
          setShareResults((prev2) => {
            const updated = [...prev2];
            updated[i] = {
              ...updated[i],
              status: FileShareStatusEnum.error,
              message: "分享失败"
            };
            return updated;
          });
        } finally {
          setIsPreparingShare(true);
          setIsSharing(false);
          isCancellingRef.current = false;
          await sleep(shareConfig.shareDelay);
        }
      }
      resetShareStatus();
    };
    const handleItemSelect = (id) => {
      setSelectedItems(
        (prev2) => prev2.includes(id) ? prev2.filter((item) => item !== id) : [...prev2, id]
      );
    };
    const handleSelectAll = () => {
      if (selectedItems.length === filteredResults.length) {
        setSelectedItems([]);
      } else {
        setSelectedItems(filteredResults.map((item) => item.id));
      }
    };
    const handleDeleteSelected = () => {
      setShareResults(
        (prev2) => prev2.filter((item) => !selectedItems.includes(item.id))
      );
      setSelectedItems([]);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      BaseDrawer,
      {
        open: open2,
        onClose: handleCancelClose,
        headerProps: {
          title: `${cloudName} 批量分享`,
          handleCancelClose
        },
        footerProps: {
          handleCancelClose,
          isPreparingShare,
          isSharing,
          isPrepared,
          isCancelling,
          handlePrepareShare,
          handleShare,
          handleCancelShare,
          copyToClipboard: () => {
            handleCopy(formatStringForCopyAndDownload$7(filteredResults));
          },
          downloadLinksToTxt: () => {
            handleDownloadLinks(formatStringForCopyAndDownload$7(filteredResults));
          },
          downloadLinksToExcel: () => {
            handleDownloadExcel(transformShareInfoForXlsx$7(filteredResults));
          },
          disabledCopy: isSharing,
          disabledDownloadLinks: isSharing,
          disabledDownloadExcel: isSharing
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex flex-col h-full p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex-1 flex flex-col overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "border rounded-md bg-gray-50 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                className: "flex justify-between items-center px-3 py-2 cursor-pointer",
                onClick: () => setConfigExpanded(!configExpanded),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base m-0", children: "分享配置" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", children: configExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandLessIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandMoreIcon, {}) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: configExpanded, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "p-3 pt-0 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  label: "分享延迟",
                  size: "small",
                  type: "number",
                  value: shareConfig.shareDelay,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    shareDelay: Number(e.target.value)
                  })),
                  slotProps: {
                    htmlInput: {
                      min: 1,
                      step: 100
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, size: "small", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "有效期" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Select,
                  {
                    label: "有效期",
                    value: shareConfig.expireTime,
                    onChange: (e) => setShareConfig((prev2) => ({
                      ...prev2,
                      expireTime: Number(e.target.value)
                    })),
                    size: "small",
                    children: expireOptions$1.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormControlLabel,
                {
                  control: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: shareConfig.autoFillCode,
                      onChange: (e) => setShareConfig((prev2) => ({
                        ...prev2,
                        autoFillCode: e.target.checked
                      })),
                      size: "small"
                    }
                  ),
                  label: "自动填充提取码"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormControlLabel,
                {
                  control: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: shareConfig.enableCustomCode,
                      onChange: (e) => setShareConfig((prev2) => ({
                        ...prev2,
                        enableCustomCode: e.target.checked
                      })),
                      size: "small"
                    }
                  ),
                  label: "自定义提取码"
                }
              ) }),
              shareConfig.enableCustomCode && /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  size: "small",
                  value: shareConfig.customCode,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    customCode: e.target.value
                  })),
                  placeholder: "(可空)只能包含大小写英文+数字)",
                  slotProps: {
                    htmlInput: {
                      maxLength: 4
                    }
                  }
                }
              ) })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "mt-3 h-0 flex-1", children: [
            loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex justify-center items-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 50 }) }),
            shareResults.length > 0 && !loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base", children: "分享结果" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusCount,
                    {
                      shareResults,
                      selectedItems
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "删除已选项", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      size: "small",
                      onClick: handleDeleteSelected,
                      disabled: selectedItems.length === 0 || isSharing,
                      color: "error",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteIcon, { fontSize: "small" })
                    }
                  ) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: filterStatus,
                      size: "small",
                      onChange: (e) => setFilterStatus(e.target.value),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: "全部" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "ready", children: "准备分享" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "sharing", children: "分享中" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "success", children: "分享成功" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "error", children: "分享失败" })
                      ]
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.length === filteredResults.length && filteredResults.length > 0,
                      indeterminate: selectedItems.length > 0 && selectedItems.length < filteredResults.length,
                      onChange: handleSelectAll,
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "状态" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件名" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件大小" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "分享链接" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "提取码" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "信息" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredResults.map((result) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.includes(result.id),
                      onChange: () => handleItemSelect(result.id),
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, { status: result.status }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableCell,
                    {
                      sx: {
                        maxWidth: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      title: result.fileName,
                      children: result.fileName
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.fileSize }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.shareLink ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[150px]", children: result.shareLink }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        size: "small",
                        onClick: () => copyLink(result.shareLink ?? ""),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCopyIcon, { fontSize: "small" })
                      }
                    )
                  ] }) : "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.extractCode || "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusText,
                    {
                      status: result.status,
                      message: result.message
                    }
                  ) })
                ] }, result.id)) })
              ] }) })
            ] })
          ] })
        ] }) })
      }
    );
  });
  const Baidu = () => {
    const shareDOM = React.useRef(null);
    const handleClick = () => {
      var _a;
      (_a = shareDOM.current) == null ? void 0 : _a.open();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outlined",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShareIcon, {}),
          onClick: handleClick,
          children: "批量分享"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShareDrawer$7, { ref: shareDOM })
    ] });
  };
  var ExpireTimeEnum$5 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 1] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 7] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = 2099] = "forever";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$5 || {});
  const ExpireTimeEnumMap$5 = {
    [
      1
      /* oneDay */
    ]: "1天",
    [
      7
      /* sevenDay */
    ]: "7天",
    [
      2099
      /* forever */
    ]: "永久"
  };
  const shareOptions = [
    {
      label: "1天",
      value: ExpireTimeEnum$5.oneDay
    },
    {
      label: "7天",
      value: ExpireTimeEnum$5.sevenDay
    },
    {
      label: "永久",
      value: ExpireTimeEnum$5.forever
    }
  ];
  const getSelectList = () => {
    const dom = document.querySelector(".c-file-list");
    if (!dom) return { list: [] };
    const vueInstance = dom.__vue__;
    if (vueInstance) {
      const { selectedList } = vueInstance;
      return {
        list: selectedList == null ? void 0 : selectedList.map((item) => ({
          id: item.fileId,
          fileName: item.fileName,
          //已经格式化好了的
          fileSize: item.fileSize,
          isFolder: item.isFolder,
          status: FileShareStatusEnum.ready
        }))
      };
    }
    return {
      list: []
    };
  };
  const formatStringForCopyAndDownload$6 = (list) => {
    return list.map((item) => `${item.fileName} ${item.shareLink} ${item.extractCode}`).join("\n");
  };
  const transformShareInfoForXlsx$6 = (list) => {
    return list.map((item) => ({
      文件名: item.fileName,
      文件大小: item.fileSize,
      分享链接: item.shareLink,
      提取码: item.extractCode,
      有效期: ExpireTimeEnumMap$5[item.expireTime]
    }));
  };
  const ShareDrawer$6 = React.forwardRef((props, ref) => {
    React.useImperativeHandle(ref, () => {
      return {
        open() {
          setOpen(true);
        }
      };
    });
    const { name: cloudName } = useBaseCloudInfo();
    const [selectedItems, setSelectedItems] = React.useState([]);
    const {
      notifications,
      loadingShareData,
      isSharing,
      isPreparingShare,
      isPrepared,
      isCancelling,
      isCancellingRef,
      filterStatus,
      shareResults,
      configExpanded,
      open: open2,
      setLoadingShareData,
      setIsSharing,
      setIsPreparingShare,
      setIsPrepared,
      setIsCancelling,
      setFilterStatus,
      setShareResults,
      setConfigExpanded,
      setOpen,
      handleCopy,
      handleDownloadLinks,
      handleDownloadExcel,
      copyLink,
      resetShareStatus,
      handleDefaultCloseDrawerCallback
    } = useShare({ cloudName });
    const [shareConfig, setShareConfig] = React.useState({
      shareDelay: defaultGlobalSetting.defaultShareDelay,
      // 分享延迟
      expireTime: ExpireTimeEnum$5.forever
      // 有效期
    });
    const filteredResults = shareResults.filter((result) => {
      if (filterStatus === "all") return true;
      return result.status === filterStatus;
    });
    const handleCancelClose = () => {
      handleDefaultCloseDrawerCallback();
    };
    const handlePrepareShare = async () => {
      try {
        setLoadingShareData(true);
        const { list } = getSelectList();
        setShareResults(list);
        setIsPreparingShare(false);
        setIsPrepared(true);
      } catch (e) {
        notifications.show("获取分享文件列表失败" + e, {
          autoHideDuration: 1500,
          severity: "error"
        });
        console.error(e);
      } finally {
        setLoadingShareData(false);
      }
    };
    const handleCancelShare = () => {
      setIsCancelling(true);
      isCancellingRef.current = true;
    };
    const handleShare = async () => {
      setIsCancelling(false);
      setIsSharing(true);
      for (let i = 0; i < shareResults.length; i++) {
        if (isCancellingRef.current) {
          setIsSharing(false);
          break;
        }
        try {
          const res = await shareLogicMap[cloudEnum.tianyi].share({
            noCache: Math.random(),
            fileId: shareResults[i].id,
            shareType: 3,
            //固定值
            expireTime: shareConfig.expireTime
          });
          setShareResults((prev2) => {
            const updated = [...prev2];
            if (res.res_code === 0) {
              const { shareLinkList } = res || {};
              const shareInfo = (shareLinkList == null ? void 0 : shareLinkList[0]) || {};
              updated[i] = {
                ...updated[i],
                expireTime: shareConfig.expireTime,
                status: FileShareStatusEnum.success,
                shareLink: shareInfo.accessUrl || shareInfo.url,
                extractCode: shareInfo.accessCode
              };
            } else {
              updated[i] = {
                ...updated[i],
                status: FileShareStatusEnum.error,
                message: "分享失败" + (res.res_message ?? "")
              };
            }
            return updated;
          });
        } catch (error) {
          console.log(error, "分享失败");
          setShareResults((prev2) => {
            const updated = [...prev2];
            updated[i] = {
              ...updated[i],
              status: FileShareStatusEnum.error,
              message: "分享失败"
            };
            return updated;
          });
        } finally {
          setIsPreparingShare(true);
          setIsSharing(false);
          isCancellingRef.current = false;
          await sleep(shareConfig.shareDelay);
        }
      }
      resetShareStatus();
    };
    const handleItemSelect = (id) => {
      setSelectedItems(
        (prev2) => prev2.includes(id) ? prev2.filter((item) => item !== id) : [...prev2, id]
      );
    };
    const handleSelectAll = () => {
      if (selectedItems.length === filteredResults.length) {
        setSelectedItems([]);
      } else {
        setSelectedItems(filteredResults.map((item) => item.id));
      }
    };
    const handleDeleteSelected = () => {
      setShareResults(
        (prev2) => prev2.filter((item) => !selectedItems.includes(item.id))
      );
      setSelectedItems([]);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      BaseDrawer,
      {
        open: open2,
        onClose: handleCancelClose,
        headerProps: {
          title: `${cloudName} 批量分享`,
          handleCancelClose
        },
        footerProps: {
          handleCancelClose,
          isPreparingShare,
          isSharing,
          isPrepared,
          isCancelling,
          handlePrepareShare,
          handleShare,
          handleCancelShare,
          copyToClipboard: () => {
            handleCopy(formatStringForCopyAndDownload$6(filteredResults));
          },
          downloadLinksToTxt: () => {
            handleDownloadLinks(formatStringForCopyAndDownload$6(filteredResults));
          },
          downloadLinksToExcel: () => {
            handleDownloadExcel(transformShareInfoForXlsx$6(filteredResults));
          },
          disabledCopy: isSharing,
          disabledDownloadLinks: isSharing,
          disabledDownloadExcel: isSharing
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex flex-col h-full p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex-1 flex flex-col overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "border rounded-md bg-gray-50 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                className: "flex justify-between items-center px-3 py-2 cursor-pointer",
                onClick: () => setConfigExpanded(!configExpanded),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base m-0", children: "分享配置" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", children: configExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandLessIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandMoreIcon, {}) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: configExpanded, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "p-3 pt-0 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  label: "分享延迟",
                  size: "small",
                  type: "number",
                  value: shareConfig.shareDelay,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    shareDelay: Number(e.target.value)
                  })),
                  slotProps: {
                    htmlInput: {
                      min: 1,
                      step: 100
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, size: "small", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "有效期" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Select,
                  {
                    label: "有效期",
                    value: shareConfig.expireTime,
                    onChange: (e) => setShareConfig((prev2) => ({
                      ...prev2,
                      expireTime: Number(e.target.value)
                    })),
                    size: "small",
                    children: shareOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value))
                  }
                )
              ] })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "mt-3 h-0 flex-1", children: [
            loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex justify-center items-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 50 }) }),
            shareResults.length > 0 && !loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base", children: "分享结果" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusCount,
                    {
                      shareResults,
                      selectedItems
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "删除已选项", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      size: "small",
                      onClick: handleDeleteSelected,
                      disabled: selectedItems.length === 0 || isSharing,
                      color: "error",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteIcon, { fontSize: "small" })
                    }
                  ) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: filterStatus,
                      size: "small",
                      onChange: (e) => setFilterStatus(e.target.value),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: "全部" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "ready", children: "准备分享" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "sharing", children: "分享中" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "success", children: "分享成功" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "error", children: "分享失败" })
                      ]
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.length === filteredResults.length && filteredResults.length > 0,
                      indeterminate: selectedItems.length > 0 && selectedItems.length < filteredResults.length,
                      onChange: handleSelectAll,
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "状态" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件名" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "分享链接" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "提取码" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "信息" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredResults.map((result) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.includes(result.id),
                      onChange: () => handleItemSelect(result.id),
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, { status: result.status }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableCell,
                    {
                      sx: {
                        maxWidth: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      title: result.fileName,
                      children: result.fileName
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.shareLink ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[150px]", children: result.shareLink }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        size: "small",
                        onClick: () => copyLink(result.shareLink ?? ""),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCopyIcon, { fontSize: "small" })
                      }
                    )
                  ] }) : "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.extractCode || "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusText,
                    {
                      status: result.status,
                      message: result.message
                    }
                  ) })
                ] }, result.id)) })
              ] }) })
            ] })
          ] })
        ] }) })
      }
    );
  });
  const Tianyi = () => {
    const shareDOM = React.useRef(null);
    const handleClick = () => {
      var _a;
      (_a = shareDOM.current) == null ? void 0 : _a.open();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outlined",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShareIcon, {}),
          onClick: handleClick,
          children: "批量分享"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShareDrawer$6, { ref: shareDOM })
    ] });
  };
  var ExpireTimeEnum$4 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = 1] = "forever";
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 2] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 3] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["thirtyDay"] = 4] = "thirtyDay";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$4 || {});
  const ExpireTimeEnumMap$4 = {
    [
      2
      /* oneDay */
    ]: "1天",
    [
      3
      /* sevenDay */
    ]: "7天",
    [
      4
      /* thirtyDay */
    ]: "30天",
    [
      1
      /* forever */
    ]: "永久"
  };
  var UrlTypeEnum = /* @__PURE__ */ ((UrlTypeEnum2) => {
    UrlTypeEnum2[UrlTypeEnum2["noPwd"] = 1] = "noPwd";
    UrlTypeEnum2[UrlTypeEnum2["hasPwd"] = 2] = "hasPwd";
    return UrlTypeEnum2;
  })(UrlTypeEnum || {});
  const transformShareInfo$3 = (list) => {
    if (!list || list.length === 0) return [];
    return list.map((item) => ({
      id: item.fid,
      // 文件id
      fileName: item.file_name,
      // 文件名
      fileSize: bytesToSize(item.size),
      // 文件大小
      fileType: item.file_type,
      // 文件类型
      status: FileShareStatusEnum.ready
      // 状态
    }));
  };
  const formatStringForCopyAndDownload$5 = (list) => {
    return list.map((item) => `${item.fileName} ${item.shareLink} ${item.extractCode}`).join("\n");
  };
  const transformShareInfoForXlsx$5 = (list) => {
    return list.map((item) => ({
      文件名: item.fileName,
      文件大小: item.fileSize,
      分享链接: item.shareLink,
      提取码: item.extractCode,
      有效期: ExpireTimeEnumMap$4[item.expireTime]
    }));
  };
  const expireTimeOptions$3 = [
    { value: ExpireTimeEnum$4.oneDay, label: "1天" },
    { value: ExpireTimeEnum$4.sevenDay, label: "7天" },
    { value: ExpireTimeEnum$4.thirtyDay, label: "30天" },
    { value: ExpireTimeEnum$4.forever, label: "永久" }
  ];
  const ShareDrawer$5 = React.forwardRef((props, ref) => {
    React.useImperativeHandle(ref, () => {
      return {
        open() {
          setOpen(true);
        }
      };
    });
    const { name: cloudName } = useBaseCloudInfo();
    const [selectedItems, setSelectedItems] = React.useState([]);
    const {
      notifications,
      loadingShareData,
      isSharing,
      isPreparingShare,
      isPrepared,
      isCancelling,
      isCancellingRef,
      filterStatus,
      shareResults,
      configExpanded,
      open: open2,
      setLoadingShareData,
      setIsSharing,
      setIsPreparingShare,
      setIsPrepared,
      setIsCancelling,
      setFilterStatus,
      setShareResults,
      setConfigExpanded,
      setOpen,
      handleCopy,
      handleDownloadLinks,
      handleDownloadExcel,
      copyLink,
      resetShareStatus,
      handleDefaultCloseDrawerCallback
    } = useShare({ cloudName });
    const [shareConfig, setShareConfig] = React.useState({
      shareDelay: defaultGlobalSetting.defaultShareDelay,
      // 分享延迟
      expireTime: ExpireTimeEnum$4.forever,
      // 有效期
      enablePassword: false,
      // 是否启用提取码
      customCode: ""
      // 提取码
    });
    const filteredResults = shareResults.filter((result) => {
      if (filterStatus === "all") return true;
      return result.status === filterStatus;
    });
    const handleCancelClose = () => {
      handleDefaultCloseDrawerCallback();
    };
    const handlePrepareShare = async () => {
      var _a;
      try {
        setLoadingShareData(true);
        const result = findNodeReact(".section-main", [
          "selectedRowKeys",
          "list"
        ]);
        setShareResults(
          (_a = transformShareInfo$3(result.list)) == null ? void 0 : _a.filter(
            (item) => result.selectedRowKeys.includes(item.id)
          )
        );
        setIsPreparingShare(false);
        setIsPrepared(true);
      } catch (e) {
        notifications.show("获取分享文件列表失败" + e, {
          autoHideDuration: 1500,
          severity: "error"
        });
        console.error(e);
      } finally {
        setLoadingShareData(false);
      }
    };
    const handleCancelShare = () => {
      setIsCancelling(true);
      isCancellingRef.current = true;
    };
    const handleShare = async () => {
      setIsCancelling(false);
      setIsSharing(true);
      for (let i = 0; i < shareResults.length; i++) {
        if (isCancellingRef.current) {
          setIsSharing(false);
          break;
        }
        try {
          let password = "";
          if (shareConfig.enablePassword) {
            password = shareConfig.customCode ? shareConfig.customCode : generateRandomString();
          }
          const sendData = {
            expired_type: shareConfig.expireTime,
            //有效期
            fid_list: [shareResults[i].id],
            //文件id
            title: shareResults[i].fileName,
            //标题
            url_type: shareConfig.enablePassword ? UrlTypeEnum.hasPwd : UrlTypeEnum.noPwd,
            //url类型
            passcode: password
          };
          const { task_id } = await shareLogicMap[cloudEnum.quark].getTaskId(sendData);
          let shareIdInfo = await shareLogicMap[cloudEnum.quark].getShareId(task_id);
          if (!shareIdInfo.share_id) {
            await sleep(shareConfig.shareDelay);
            shareIdInfo = await shareLogicMap[cloudEnum.quark].getShareId(
              task_id,
              1
            );
          }
          const { share_url, passcode } = await shareLogicMap[cloudEnum.quark].getShareInfo(shareIdInfo.share_id);
          console.log(share_url, passcode);
          setShareResults((prev2) => {
            const updated = [...prev2];
            if (share_url) {
              updated[i] = {
                ...updated[i],
                expireTime: shareConfig.expireTime,
                status: FileShareStatusEnum.success,
                shareLink: share_url,
                extractCode: passcode
              };
            } else {
              updated[i] = {
                ...updated[i],
                status: FileShareStatusEnum.error,
                message: "分享失败"
              };
            }
            return updated;
          });
        } catch (error) {
          console.log(error, "分享失败");
          setShareResults((prev2) => {
            const updated = [...prev2];
            updated[i] = {
              ...updated[i],
              status: FileShareStatusEnum.error,
              message: "分享失败"
            };
            return updated;
          });
        } finally {
          setIsPreparingShare(true);
          setIsSharing(false);
          isCancellingRef.current = false;
          await sleep(shareConfig.shareDelay);
        }
      }
      resetShareStatus();
    };
    const handleItemSelect = (id) => {
      setSelectedItems(
        (prev2) => prev2.includes(id) ? prev2.filter((item) => item !== id) : [...prev2, id]
      );
    };
    const handleSelectAll = () => {
      if (selectedItems.length === filteredResults.length) {
        setSelectedItems([]);
      } else {
        setSelectedItems(filteredResults.map((item) => item.id));
      }
    };
    const handleDeleteSelected = () => {
      setShareResults(
        (prev2) => prev2.filter((item) => !selectedItems.includes(item.id))
      );
      setSelectedItems([]);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      BaseDrawer,
      {
        open: open2,
        onClose: handleCancelClose,
        headerProps: {
          title: `${cloudName} 批量分享`,
          handleCancelClose
        },
        footerProps: {
          handleCancelClose,
          isPreparingShare,
          isSharing,
          isPrepared,
          isCancelling,
          handlePrepareShare,
          handleShare,
          handleCancelShare,
          copyToClipboard: () => {
            handleCopy(formatStringForCopyAndDownload$5(filteredResults));
          },
          downloadLinksToTxt: () => {
            handleDownloadLinks(formatStringForCopyAndDownload$5(filteredResults));
          },
          downloadLinksToExcel: () => {
            handleDownloadExcel(transformShareInfoForXlsx$5(filteredResults));
          },
          disabledCopy: isSharing,
          disabledDownloadLinks: isSharing,
          disabledDownloadExcel: isSharing
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex flex-col h-full p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex-1 flex flex-col overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "border rounded-md bg-gray-50 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                className: "flex justify-between items-center px-3 py-2 cursor-pointer",
                onClick: () => setConfigExpanded(!configExpanded),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base m-0", children: "分享配置" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", children: configExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandLessIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandMoreIcon, {}) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: configExpanded, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "p-3 pt-0 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  label: "分享延迟",
                  size: "small",
                  type: "number",
                  value: shareConfig.shareDelay,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    shareDelay: Number(e.target.value)
                  })),
                  slotProps: {
                    htmlInput: {
                      min: 1,
                      step: 100
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, size: "small", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "有效期" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Select,
                  {
                    label: "有效期",
                    value: shareConfig.expireTime,
                    onChange: (e) => setShareConfig((prev2) => ({
                      ...prev2,
                      expireTime: Number(e.target.value)
                    })),
                    size: "small",
                    children: expireTimeOptions$3.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormControlLabel,
                {
                  control: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: shareConfig.enablePassword,
                      onChange: (e) => setShareConfig((prev2) => ({
                        ...prev2,
                        enablePassword: e.target.checked
                      })),
                      size: "small"
                    }
                  ),
                  label: "开启提取码"
                }
              ) }),
              shareConfig.enablePassword && /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  size: "small",
                  value: shareConfig.customCode,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    customCode: e.target.value
                  })),
                  placeholder: "(可空)只能包含大小写英文+数字)",
                  slotProps: {
                    htmlInput: {
                      maxLength: 4
                    }
                  }
                }
              ) })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "mt-3 h-0 flex-1", children: [
            loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex justify-center items-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 50 }) }),
            shareResults.length > 0 && !loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base", children: "分享结果" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusCount,
                    {
                      shareResults,
                      selectedItems
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "删除已选项", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      size: "small",
                      onClick: handleDeleteSelected,
                      disabled: selectedItems.length === 0 || isSharing,
                      color: "error",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteIcon, { fontSize: "small" })
                    }
                  ) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: filterStatus,
                      size: "small",
                      onChange: (e) => setFilterStatus(e.target.value),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: "全部" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "ready", children: "准备分享" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "sharing", children: "分享中" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "success", children: "分享成功" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "error", children: "分享失败" })
                      ]
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.length === filteredResults.length && filteredResults.length > 0,
                      indeterminate: selectedItems.length > 0 && selectedItems.length < filteredResults.length,
                      onChange: handleSelectAll,
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "状态" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件名" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件大小" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "分享链接" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "提取码" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "信息" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredResults.map((result) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.includes(result.id),
                      onChange: () => handleItemSelect(result.id),
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, { status: result.status }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableCell,
                    {
                      sx: {
                        maxWidth: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      title: result.fileName,
                      children: result.fileName
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.fileSize }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.shareLink ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[150px]", children: result.shareLink }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        size: "small",
                        onClick: () => copyLink(result.shareLink ?? ""),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCopyIcon, { fontSize: "small" })
                      }
                    )
                  ] }) : "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.extractCode || "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusText,
                    {
                      status: result.status,
                      message: result.message
                    }
                  ) })
                ] }, result.id)) })
              ] }) })
            ] })
          ] })
        ] }) })
      }
    );
  });
  const Quark = () => {
    const shareDOM = React.useRef(null);
    const handleClick = () => {
      var _a;
      (_a = shareDOM.current) == null ? void 0 : _a.open();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outlined",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShareIcon, {}),
          onClick: handleClick,
          children: "批量分享"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShareDrawer$5, { ref: shareDOM })
    ] });
  };
  var ExpireTimeEnum$3 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = -1] = "forever";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 7] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["thirtyDay"] = 30] = "thirtyDay";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$3 || {});
  const ExpireTimeEnumMap$3 = {
    [
      7
      /* sevenDay */
    ]: "7天",
    [
      30
      /* thirtyDay */
    ]: "30天",
    [
      -1
      /* forever */
    ]: "永久"
  };
  const expireTimeOptions$2 = [
    { value: ExpireTimeEnum$3.sevenDay, label: "7天" },
    { value: ExpireTimeEnum$3.thirtyDay, label: "30天" },
    { value: ExpireTimeEnum$3.forever, label: "永久" }
  ];
  const transformShareInfo$2 = (list) => {
    if (!list || list.length === 0) return [];
    return list.map((item) => ({
      id: item.fileId,
      //文件id
      fileName: item.name,
      //文件名
      fileSize: bytesToSize(item.size),
      //文件大小
      status: FileShareStatusEnum.ready,
      //状态
      driveId: item.driveId
      //网盘id
    }));
  };
  const formatStringForCopyAndDownload$4 = (list) => {
    return list.map((item) => `${item.fileName} ${item.shareLink} ${item.extractCode}`).join("\n");
  };
  const transformShareInfoForXlsx$4 = (list) => {
    return list.map((item) => ({
      文件名: item.fileName,
      文件大小: item.fileSize,
      分享链接: item.shareLink,
      提取码: item.extractCode,
      有效期: ExpireTimeEnumMap$3[item.expireTime]
    }));
  };
  const ShareDrawer$4 = React.forwardRef((props, ref) => {
    React.useImperativeHandle(ref, () => {
      return {
        open() {
          setOpen(true);
        }
      };
    });
    const { name: cloudName } = useBaseCloudInfo();
    const [selectedItems, setSelectedItems] = React.useState([]);
    const {
      notifications,
      loadingShareData,
      isSharing,
      isPreparingShare,
      isPrepared,
      isCancelling,
      isCancellingRef,
      filterStatus,
      shareResults,
      configExpanded,
      open: open2,
      setLoadingShareData,
      setIsSharing,
      setIsPreparingShare,
      setIsPrepared,
      setIsCancelling,
      setFilterStatus,
      setShareResults,
      setConfigExpanded,
      setOpen,
      handleCopy,
      handleDownloadLinks,
      handleDownloadExcel,
      copyLink,
      resetShareStatus,
      handleDefaultCloseDrawerCallback
    } = useShare({ cloudName });
    const [shareConfig, setShareConfig] = React.useState({
      shareDelay: defaultGlobalSetting.defaultShareDelay,
      // 分享延迟
      expireTime: ExpireTimeEnum$3.forever,
      // 有效期
      enablePassword: false,
      // 是否启用提取码
      customCode: ""
      // 自定义提取码
    });
    const filteredResults = shareResults.filter((result) => {
      if (filterStatus === "all") return true;
      return result.status === filterStatus;
    });
    const handleCancelClose = () => {
      handleDefaultCloseDrawerCallback();
    };
    const handlePrepareShare = async () => {
      try {
        setLoadingShareData(true);
        const result = findNodeReact("div[class^='node-list--']", [
          "selectedItems"
        ]);
        setShareResults(transformShareInfo$2(result.selectedItems));
        setIsPreparingShare(false);
        setIsPrepared(true);
      } catch (e) {
        notifications.show("获取分享文件列表失败" + e, {
          autoHideDuration: 1500,
          severity: "error"
        });
        console.error(e);
      } finally {
        setLoadingShareData(false);
      }
    };
    const handleCancelShare = () => {
      setIsCancelling(true);
      isCancellingRef.current = true;
    };
    const handleShare = async () => {
      setIsCancelling(false);
      setIsSharing(true);
      for (let i = 0; i < shareResults.length; i++) {
        if (isCancellingRef.current) {
          setIsSharing(false);
          break;
        }
        try {
          let password = "";
          if (shareConfig.enablePassword) {
            password = shareConfig.customCode ? shareConfig.customCode : generateRandomString();
          }
          const shareData = {
            drive_id: shareResults[i].driveId,
            expiration: shareResults[i].expireTime,
            file_id_list: [shareResults[i].id],
            sync_to_homepage: false,
            share_pwd: password
          };
          const res = await shareLogicMap[cloudEnum.alipan].share(shareData);
          setShareResults((prev2) => {
            const { share_url, share_msg, share_pwd, display_message } = res || {};
            const updated = [...prev2];
            if (share_url) {
              updated[i] = {
                ...updated[i],
                expireTime: shareConfig.expireTime,
                status: FileShareStatusEnum.success,
                shareLink: share_url,
                extractCode: share_pwd
              };
            } else {
              updated[i] = {
                ...updated[i],
                status: FileShareStatusEnum.error,
                message: `分享失败:${share_msg || display_message}`
              };
            }
            return updated;
          });
        } catch (error) {
          console.log(error, "分享失败");
          setShareResults((prev2) => {
            const updated = [...prev2];
            updated[i] = {
              ...updated[i],
              status: FileShareStatusEnum.error,
              message: "分享失败"
            };
            return updated;
          });
        } finally {
          setIsPreparingShare(true);
          setIsSharing(false);
          isCancellingRef.current = false;
          await sleep(shareConfig.shareDelay);
        }
      }
      resetShareStatus();
    };
    const handleItemSelect = (id) => {
      setSelectedItems(
        (prev2) => prev2.includes(id) ? prev2.filter((item) => item !== id) : [...prev2, id]
      );
    };
    const handleSelectAll = () => {
      if (selectedItems.length === filteredResults.length) {
        setSelectedItems([]);
      } else {
        setSelectedItems(filteredResults.map((item) => item.id));
      }
    };
    const handleDeleteSelected = () => {
      setShareResults(
        (prev2) => prev2.filter((item) => !selectedItems.includes(item.id))
      );
      setSelectedItems([]);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      BaseDrawer,
      {
        open: open2,
        onClose: handleCancelClose,
        headerProps: {
          title: `${cloudName} 批量分享`,
          handleCancelClose
        },
        footerProps: {
          handleCancelClose,
          isPreparingShare,
          isSharing,
          isPrepared,
          isCancelling,
          handlePrepareShare,
          handleShare,
          handleCancelShare,
          copyToClipboard: () => {
            handleCopy(formatStringForCopyAndDownload$4(filteredResults));
          },
          downloadLinksToTxt: () => {
            handleDownloadLinks(formatStringForCopyAndDownload$4(filteredResults));
          },
          downloadLinksToExcel: () => {
            handleDownloadExcel(transformShareInfoForXlsx$4(filteredResults));
          },
          disabledCopy: isSharing,
          disabledDownloadLinks: isSharing,
          disabledDownloadExcel: isSharing
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex flex-col h-full p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex-1 flex flex-col overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "border rounded-md bg-gray-50 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                className: "flex justify-between items-center px-3 py-2 cursor-pointer",
                onClick: () => setConfigExpanded(!configExpanded),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base m-0", children: "分享配置" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", children: configExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandLessIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandMoreIcon, {}) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: configExpanded, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "p-3 pt-0 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  label: "分享延迟",
                  size: "small",
                  type: "number",
                  value: shareConfig.shareDelay,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    shareDelay: Number(e.target.value)
                  })),
                  slotProps: {
                    htmlInput: {
                      min: 1,
                      step: 100
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, size: "small", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "有效期" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Select,
                  {
                    label: "有效期",
                    value: shareConfig.expireTime,
                    onChange: (e) => setShareConfig((prev2) => ({
                      ...prev2,
                      expireTime: Number(e.target.value)
                    })),
                    size: "small",
                    children: expireTimeOptions$2.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormControlLabel,
                {
                  control: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: shareConfig.enablePassword,
                      onChange: (e) => setShareConfig((prev2) => ({
                        ...prev2,
                        enablePassword: e.target.checked
                      })),
                      size: "small"
                    }
                  ),
                  label: "开启提取码"
                }
              ) }),
              shareConfig.enablePassword && /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  size: "small",
                  value: shareConfig.customCode,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    customCode: e.target.value
                  })),
                  placeholder: "(可空)只能包含大小写英文+数字)",
                  slotProps: {
                    htmlInput: {
                      maxLength: 4
                    }
                  }
                }
              ) })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "mt-3 h-0 flex-1", children: [
            loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex justify-center items-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 50 }) }),
            shareResults.length > 0 && !loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base", children: "分享结果" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusCount,
                    {
                      shareResults,
                      selectedItems
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "删除已选项", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      size: "small",
                      onClick: handleDeleteSelected,
                      disabled: selectedItems.length === 0 || isSharing,
                      color: "error",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteIcon, { fontSize: "small" })
                    }
                  ) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: filterStatus,
                      size: "small",
                      onChange: (e) => setFilterStatus(e.target.value),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: "全部" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "ready", children: "准备分享" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "sharing", children: "分享中" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "success", children: "分享成功" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "error", children: "分享失败" })
                      ]
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.length === filteredResults.length && filteredResults.length > 0,
                      indeterminate: selectedItems.length > 0 && selectedItems.length < filteredResults.length,
                      onChange: handleSelectAll,
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "状态" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件名" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件大小" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "分享链接" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "提取码" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "信息" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredResults.map((result) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.includes(result.id),
                      onChange: () => handleItemSelect(result.id),
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, { status: result.status }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableCell,
                    {
                      sx: {
                        maxWidth: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      title: result.fileName,
                      children: result.fileName
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.fileSize }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.shareLink ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[150px]", children: result.shareLink }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        size: "small",
                        onClick: () => copyLink(result.shareLink ?? ""),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCopyIcon, { fontSize: "small" })
                      }
                    )
                  ] }) : "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.extractCode || "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusText,
                    {
                      status: result.status,
                      message: result.message
                    }
                  ) })
                ] }, result.id)) })
              ] }) })
            ] })
          ] })
        ] }) })
      }
    );
  });
  const Alipan = () => {
    const shareDOM = React.useRef(null);
    const handleClick = () => {
      var _a;
      (_a = shareDOM.current) == null ? void 0 : _a.open();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onClick: handleClick,
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            padding: "8px",
            color: "#666"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShareIcon, { style: { fontSize: "20px" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  fontSize: "12px",
                  marginTop: "4px"
                },
                children: "分享"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShareDrawer$4, { ref: shareDOM })
    ] });
  };
  var ExpireTimeEnum$2 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 1] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 2] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = 4] = "forever";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$2 || {});
  const ExpireTimeEnumMap$2 = {
    [
      1
      /* oneDay */
    ]: "1天",
    [
      2
      /* sevenDay */
    ]: "7天",
    [
      4
      /* forever */
    ]: "永久"
  };
  const ExpireTimeEnumMapVersion2 = {
    [
      1
      /* oneDay */
    ]: 1,
    [
      2
      /* sevenDay */
    ]: 7,
    [
      4
      /* forever */
    ]: null
  };
  var CatalogTypeEnum = /* @__PURE__ */ ((CatalogTypeEnum2) => {
    CatalogTypeEnum2[CatalogTypeEnum2["file"] = 0] = "file";
    CatalogTypeEnum2[CatalogTypeEnum2["folder"] = 1] = "folder";
    return CatalogTypeEnum2;
  })(CatalogTypeEnum || {});
  const expireTimeOptions$1 = [
    { value: ExpireTimeEnum$2.oneDay, label: "1天" },
    { value: ExpireTimeEnum$2.sevenDay, label: "7天" },
    { value: ExpireTimeEnum$2.forever, label: "永久" }
  ];
  const getShareList = () => {
    const tempDOM = document.querySelector(".main_file_list");
    const instance = tempDOM == null ? void 0 : tempDOM.__vue__;
    if (!instance)
      return {
        list: []
      };
    return {
      list: (instance == null ? void 0 : instance.selectList) ?? []
    };
  };
  const transformShareInfo$1 = (list) => {
    if (!list || list.length === 0) return [];
    return list.map(({ item }) => ({
      id: (item == null ? void 0 : item.contentID) ? item == null ? void 0 : item.contentID : item == null ? void 0 : item.catalogID,
      //文件id (文件夹id)
      fileName: (item == null ? void 0 : item.contentName) ? item == null ? void 0 : item.contentName : item == null ? void 0 : item.catalogName,
      //文件名 (文件夹名称)
      owner: (item == null ? void 0 : item.owner) ?? "",
      //分享用得到
      status: FileShareStatusEnum.ready,
      //状态
      catalogType: (item == null ? void 0 : item.contentID) ? CatalogTypeEnum.file : CatalogTypeEnum.folder
      //0代表文件分享 1代表文件夹分享
    }));
  };
  const formatStringForCopyAndDownload$3 = (list) => {
    return list.map((item) => `${item.fileName} ${item.shareLink} ${item.extractCode}`).join("\n");
  };
  const transformShareInfoForXlsx$3 = (list) => {
    return list.map((item) => ({
      文件名: item.fileName,
      分享链接: item.shareLink,
      提取码: item.extractCode,
      有效期: ExpireTimeEnumMap$2[item.expireTime]
    }));
  };
  const ShareDrawer$3 = React.forwardRef((props, ref) => {
    React.useImperativeHandle(ref, () => {
      return {
        open() {
          setOpen(true);
        }
      };
    });
    const [userInfo, setUserInfo] = React.useState(() => {
      var _a, _b, _c, _d;
      return (_d = (_c = (_b = (_a = document.querySelector(".body_main")) == null ? void 0 : _a.__vue__) == null ? void 0 : _b.$store) == null ? void 0 : _c.state) == null ? void 0 : _d.auth;
    });
    const [authInfo] = React.useState(() => {
      const regex = /authorization=Basic\s([A-Za-z0-9+/=]+)/;
      const match2 = document.cookie.match(regex);
      if (match2) {
        return "Basic " + (match2 == null ? void 0 : match2[1]);
      } else {
        return "";
      }
    });
    const { name: cloudName } = useBaseCloudInfo();
    const [selectedItems, setSelectedItems] = React.useState([]);
    const {
      notifications,
      loadingShareData,
      isSharing,
      isPreparingShare,
      isPrepared,
      isCancelling,
      isCancellingRef,
      filterStatus,
      shareResults,
      configExpanded,
      open: open2,
      setLoadingShareData,
      setIsSharing,
      setIsPreparingShare,
      setIsPrepared,
      setIsCancelling,
      setFilterStatus,
      setShareResults,
      setConfigExpanded,
      setOpen,
      handleCopy,
      handleDownloadLinks,
      handleDownloadExcel,
      copyLink,
      resetShareStatus,
      handleDefaultCloseDrawerCallback
    } = useShare({ cloudName });
    const [shareConfig, setShareConfig] = React.useState({
      shareDelay: defaultGlobalSetting.defaultShareDelay,
      // 分享延迟
      expireTime: ExpireTimeEnum$2.forever
      // 有效期
    });
    const filteredResults = shareResults.filter((result) => {
      if (filterStatus === "all") return true;
      return result.status === filterStatus;
    });
    const handleCancelClose = () => {
      handleDefaultCloseDrawerCallback();
    };
    const handlePrepareShare = async () => {
      try {
        setLoadingShareData(true);
        const { list } = getShareList();
        setShareResults(transformShareInfo$1(list));
        setIsPreparingShare(false);
        setIsPrepared(true);
      } catch (e) {
        notifications.show("获取分享文件列表失败" + e, {
          autoHideDuration: 1500,
          severity: "error"
        });
        console.error(e);
      } finally {
        setLoadingShareData(false);
      }
    };
    const handleCancelShare = () => {
      setIsCancelling(true);
      isCancellingRef.current = true;
    };
    const handleShare = async () => {
      setIsCancelling(false);
      setIsSharing(true);
      for (let i = 0; i < shareResults.length; i++) {
        if (isCancellingRef.current) {
          setIsSharing(false);
          break;
        }
        try {
          const { userPhone, accountPhone } = userInfo;
          const currentShare = shareResults[i];
          const res = await shareLogicMap[cloudEnum.yidong139].share(
            {
              getOutLinkReq: {
                period: ExpireTimeEnumMapVersion2[shareConfig.expireTime],
                caIDLst: currentShare.catalogType === CatalogTypeEnum.folder ? [currentShare.id] : [],
                //分享的文件夹
                coIDLst: currentShare.catalogType === CatalogTypeEnum.file ? [currentShare.id] : [],
                //分享的文件
                commonAccountInfo: {
                  //新建文件夹可能无法获取,就存储了下用户的手机,无法获取再从用户那边读取
                  account: currentShare.owner ? currentShare.owner : accountPhone || userPhone,
                  //账户名,一般是手机号
                  accountType: 1
                },
                dedicatedName: currentShare.fileName,
                //文件或文件夹名称
                encrypt: 1,
                extInfo: {
                  isWatermark: 0,
                  shareChannel: "3001"
                },
                periodUnit: 1,
                pubType: 1,
                subLinkType: 0,
                viewerLst: []
              }
            },
            authInfo
          );
          setShareResults((prev2) => {
            const updated = [...prev2];
            const { code, data } = res;
            if (code === "0") {
              const { getOutLinkRes: { getOutLinkResSet = [] } = {} } = data;
              const resultInfo = (getOutLinkResSet == null ? void 0 : getOutLinkResSet[0]) ?? {};
              updated[i] = {
                ...updated[i],
                expireTime: shareConfig.expireTime,
                status: FileShareStatusEnum.success,
                shareLink: resultInfo == null ? void 0 : resultInfo.linkUrl,
                extractCode: resultInfo == null ? void 0 : resultInfo.passwd
              };
            } else {
              updated[i] = {
                ...updated[i],
                status: FileShareStatusEnum.error,
                message: `分享失败` + ((data == null ? void 0 : data.message) ?? "")
              };
            }
            return updated;
          });
        } catch (error) {
          console.log(error, "分享失败");
          setShareResults((prev2) => {
            const updated = [...prev2];
            updated[i] = {
              ...updated[i],
              status: FileShareStatusEnum.error,
              message: "分享失败"
            };
            return updated;
          });
        } finally {
          setIsPreparingShare(true);
          setIsSharing(false);
          isCancellingRef.current = false;
          await sleep(shareConfig.shareDelay);
        }
      }
      resetShareStatus();
    };
    const handleItemSelect = (id) => {
      setSelectedItems(
        (prev2) => prev2.includes(id) ? prev2.filter((item) => item !== id) : [...prev2, id]
      );
    };
    const handleSelectAll = () => {
      if (selectedItems.length === filteredResults.length) {
        setSelectedItems([]);
      } else {
        setSelectedItems(filteredResults.map((item) => item.id));
      }
    };
    const handleDeleteSelected = () => {
      setShareResults(
        (prev2) => prev2.filter((item) => !selectedItems.includes(item.id))
      );
      setSelectedItems([]);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      BaseDrawer,
      {
        open: open2,
        onClose: handleCancelClose,
        headerProps: {
          title: `${cloudName} 批量分享`,
          handleCancelClose
        },
        footerProps: {
          handleCancelClose,
          isPreparingShare,
          isSharing,
          isPrepared,
          isCancelling,
          handlePrepareShare,
          handleShare,
          handleCancelShare,
          copyToClipboard: () => {
            handleCopy(formatStringForCopyAndDownload$3(filteredResults));
          },
          downloadLinksToTxt: () => {
            handleDownloadLinks(formatStringForCopyAndDownload$3(filteredResults));
          },
          downloadLinksToExcel: () => {
            handleDownloadExcel(transformShareInfoForXlsx$3(filteredResults));
          },
          disabledCopy: isSharing,
          disabledDownloadLinks: isSharing,
          disabledDownloadExcel: isSharing
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex flex-col h-full p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex-1 flex flex-col overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "border rounded-md bg-gray-50 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                className: "flex justify-between items-center px-3 py-2 cursor-pointer",
                onClick: () => setConfigExpanded(!configExpanded),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base m-0", children: "分享配置" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", children: configExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandLessIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandMoreIcon, {}) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: configExpanded, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "p-3 pt-0 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  label: "分享延迟",
                  size: "small",
                  type: "number",
                  value: shareConfig.shareDelay,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    shareDelay: Number(e.target.value)
                  })),
                  slotProps: {
                    htmlInput: {
                      min: 1,
                      step: 100
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, size: "small", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "有效期" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Select,
                  {
                    label: "有效期",
                    value: shareConfig.expireTime,
                    onChange: (e) => setShareConfig((prev2) => ({
                      ...prev2,
                      expireTime: Number(e.target.value)
                    })),
                    size: "small",
                    children: expireTimeOptions$1.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value))
                  }
                )
              ] })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "mt-3 h-0 flex-1", children: [
            loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex justify-center items-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 50 }) }),
            shareResults.length > 0 && !loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base", children: "分享结果" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusCount,
                    {
                      shareResults,
                      selectedItems
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "删除已选项", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      size: "small",
                      onClick: handleDeleteSelected,
                      disabled: selectedItems.length === 0 || isSharing,
                      color: "error",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteIcon, { fontSize: "small" })
                    }
                  ) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: filterStatus,
                      size: "small",
                      onChange: (e) => setFilterStatus(e.target.value),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: "全部" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "ready", children: "准备分享" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "sharing", children: "分享中" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "success", children: "分享成功" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "error", children: "分享失败" })
                      ]
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.length === filteredResults.length && filteredResults.length > 0,
                      indeterminate: selectedItems.length > 0 && selectedItems.length < filteredResults.length,
                      onChange: handleSelectAll,
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "状态" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件名" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "分享链接" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "提取码" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "信息" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredResults.map((result) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.includes(result.id),
                      onChange: () => handleItemSelect(result.id),
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, { status: result.status }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableCell,
                    {
                      sx: {
                        maxWidth: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      title: result.fileName,
                      children: result.fileName
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.shareLink ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[150px]", children: result.shareLink }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        size: "small",
                        onClick: () => copyLink(result.shareLink ?? ""),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCopyIcon, { fontSize: "small" })
                      }
                    )
                  ] }) : "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.extractCode ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[150px]", children: result.extractCode }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        size: "small",
                        onClick: () => copyLink(result.extractCode ?? ""),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCopyIcon, { fontSize: "small" })
                      }
                    )
                  ] }) : "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusText,
                    {
                      status: result.status,
                      message: result.message
                    }
                  ) })
                ] }, result.id)) })
              ] }) })
            ] })
          ] })
        ] }) })
      }
    );
  });
  const Xunlei = () => {
    const shareDOM = React.useRef(null);
    const handleClick = () => {
      var _a;
      (_a = shareDOM.current) == null ? void 0 : _a.open();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outlined",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShareIcon, {}),
          onClick: handleClick,
          children: "批量分享"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShareDrawer$3, { ref: shareDOM })
    ] });
  };
  var FileTypeEnum$1 = /* @__PURE__ */ ((FileTypeEnum2) => {
    FileTypeEnum2["FOLDER"] = "folder";
    FileTypeEnum2["FILE"] = "file";
    return FileTypeEnum2;
  })(FileTypeEnum$1 || {});
  const FileTypeMap = {
    [
      "folder"
      /* FOLDER */
    ]: "文件夹",
    [
      "file"
      /* FILE */
    ]: "文件"
  };
  var TaskEnum = /* @__PURE__ */ ((TaskEnum2) => {
    TaskEnum2[TaskEnum2["file"] = 18] = "file";
    TaskEnum2[TaskEnum2["share"] = 22] = "share";
    TaskEnum2[TaskEnum2["setCodeFile"] = 23] = "setCodeFile";
    TaskEnum2[TaskEnum2["setCodeFolder"] = 16] = "setCodeFolder";
    TaskEnum2[TaskEnum2["reqFolderList"] = 47] = "reqFolderList";
    TaskEnum2[TaskEnum2["reqFileList"] = 5] = "reqFileList";
    return TaskEnum2;
  })(TaskEnum || {});
  const getFileList = () => {
    const temp = document.querySelector("iframe");
    const iframeWindow = temp.contentWindow;
    if (!iframeWindow) {
      return { folderList: [], fileList: [] };
    }
    if (iframeWindow) {
      const folderListDOM = iframeWindow == null ? void 0 : iframeWindow.document.querySelectorAll(
        "#sub_folder_list > .f_tb"
      );
      const fileListDOM = iframeWindow == null ? void 0 : iframeWindow.document.querySelectorAll("#filelist > .f_tb");
      const folderList = Array.from(folderListDOM).map((item) => {
        var _a;
        const id = item.getAttribute("id");
        return {
          id: (id == null ? void 0 : id.startsWith("fol")) ? id.slice(3) : "",
          //文件id
          fileName: (_a = item.querySelector("[class^='f_name'] [id^=folname]")) == null ? void 0 : _a.textContent,
          //文件夹名
          fileType: FileTypeEnum$1.FOLDER,
          status: FileShareStatusEnum.ready
        };
      });
      const fileList = Array.from(fileListDOM).map((item) => {
        var _a, _b, _c;
        const id = item.getAttribute("id");
        return {
          id: (id == null ? void 0 : id.startsWith("f")) ? id.slice(1) : "",
          //文件id
          fileName: (_a = item.querySelector(".f_name .f_name_title")) == null ? void 0 : _a.textContent,
          //文件名
          fileSize: (_b = item.querySelector(".f_size")) == null ? void 0 : _b.textContent,
          //文件大小
          fileTime: (_c = item.querySelector(".f_time")) == null ? void 0 : _c.textContent,
          //文件时间
          status: FileShareStatusEnum.ready,
          fileType: FileTypeEnum$1.FILE
        };
      });
      return {
        folderList,
        fileList
      };
    } else {
      return {
        folderList: [],
        fileList: []
      };
    }
  };
  const formatStringForCopyAndDownload$2 = (list) => {
    return list.map((item) => `${item.fileName} ${item.shareLink} ${item.extractCode}`).join("\n");
  };
  const transformShareInfoForXlsx$2 = (list) => {
    return list.map((item) => ({
      文件类型: FileTypeMap[item.fileType],
      文件名: item.fileName,
      文件大小: item.fileSize,
      文件时间: item.fileTime,
      分享链接: item.shareLink,
      提取码: item.extractCode
    }));
  };
  const FolderIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"
  }));
  const FileIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
    d: "M15 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7zM6 20V4h8v4h4v12zm10-10v5c0 2.21-1.79 4-4 4s-4-1.79-4-4V8.5c0-1.47 1.26-2.64 2.76-2.49 1.3.13 2.24 1.32 2.24 2.63V15h-2V8.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V15c0 1.1.9 2 2 2s2-.9 2-2v-5z"
  }));
  const ShareDrawer$2 = React.forwardRef((props, ref) => {
    React.useImperativeHandle(ref, () => {
      return {
        open() {
          setOpen(true);
        }
      };
    });
    const { name: cloudName } = useBaseCloudInfo();
    const [selectedItems, setSelectedItems] = React.useState([]);
    const {
      notifications,
      loadingShareData,
      isSharing,
      isPreparingShare,
      isPrepared,
      isCancelling,
      isCancellingRef,
      filterStatus,
      shareResults,
      configExpanded,
      open: open2,
      setLoadingShareData,
      setIsSharing,
      setIsPreparingShare,
      setIsPrepared,
      setIsCancelling,
      setFilterStatus,
      setShareResults,
      setConfigExpanded,
      setOpen,
      handleCopy,
      handleDownloadLinks,
      handleDownloadExcel,
      copyLink,
      resetShareStatus,
      handleDefaultCloseDrawerCallback
    } = useShare({ cloudName });
    const [shareConfig, setShareConfig] = React.useState({
      shareDelay: defaultGlobalSetting.defaultShareDelay,
      // 分享延迟
      enableCustomCode: false,
      // 是否启用自定义提取码
      customCode: ""
      // 自定义提取码
    });
    const filteredResults = shareResults.filter((result) => {
      if (filterStatus === "all") return true;
      return result.status === filterStatus;
    });
    const handleCancelClose = () => {
      handleDefaultCloseDrawerCallback();
    };
    const handlePrepareShare = async () => {
      try {
        setLoadingShareData(true);
        const { folderList, fileList } = getFileList();
        setShareResults([...folderList, ...fileList]);
        setIsPreparingShare(false);
        setIsPrepared(true);
      } catch (e) {
        notifications.show("获取分享文件列表失败" + e, {
          autoHideDuration: 1500,
          severity: "error"
        });
        console.error(e);
      } finally {
        setLoadingShareData(false);
      }
    };
    const handleCancelShare = () => {
      setIsCancelling(true);
      isCancellingRef.current = true;
    };
    const handleShare = async () => {
      setIsCancelling(false);
      setIsSharing(true);
      for (let i = 0; i < shareResults.length; i++) {
        if (isCancellingRef.current) {
          setIsSharing(false);
          break;
        }
        try {
          const shareItem = shareResults[i];
          let sendDataOne = {};
          if (shareItem.fileType === FileTypeEnum$1.FILE) {
            sendDataOne = {
              task: TaskEnum.share,
              file_id: shareItem.id
            };
          } else {
            sendDataOne = {
              task: TaskEnum.file,
              folder_id: shareItem.id
            };
          }
          const resOne = await shareLogicMap[cloudEnum.lanzou].share(sendDataOne);
          await sleep(shareConfig.shareDelay);
          let password = "";
          if (shareConfig.enableCustomCode) {
            password = shareConfig.customCode ? shareConfig.customCode : generateRandomString(4);
            sendDataOne.shownames = password;
            if (shareItem.fileType === FileTypeEnum$1.FILE) {
              sendDataOne.task = TaskEnum.setCodeFile;
            } else {
              sendDataOne.task = TaskEnum.setCodeFolder;
            }
            sendDataOne.shows = "1";
          }
          const resTwo = await shareLogicMap[cloudEnum.lanzou].share(sendDataOne);
          setShareResults((prev2) => {
            const updated = [...prev2];
            let share_url = null;
            if (shareItem.fileType === FileTypeEnum$1.FILE) {
              share_url = `${resOne.info.is_newd}/${resOne.info.f_id}`;
            } else {
              share_url = resOne.info.new_url;
            }
            if (share_url) {
              updated[i] = {
                ...updated[i],
                status: FileShareStatusEnum.success,
                shareLink: share_url,
                extractCode: password ? password : resOne.info.pwd
              };
            } else {
              updated[i] = {
                ...updated[i],
                status: FileShareStatusEnum.error,
                message: "分享失败"
              };
            }
            return updated;
          });
        } catch (error) {
          console.log(error, "分享失败");
          setShareResults((prev2) => {
            const updated = [...prev2];
            updated[i] = {
              ...updated[i],
              status: FileShareStatusEnum.error,
              message: "分享失败"
            };
            return updated;
          });
        } finally {
          setIsPreparingShare(true);
          setIsSharing(false);
          isCancellingRef.current = false;
          await sleep(shareConfig.shareDelay);
        }
      }
      resetShareStatus();
    };
    const handleItemSelect = (id) => {
      setSelectedItems(
        (prev2) => prev2.includes(id) ? prev2.filter((item) => item !== id) : [...prev2, id]
      );
    };
    const handleSelectAll = () => {
      if (selectedItems.length === filteredResults.length) {
        setSelectedItems([]);
      } else {
        setSelectedItems(filteredResults.map((item) => item.id));
      }
    };
    const handleDeleteSelected = () => {
      setShareResults(
        (prev2) => prev2.filter((item) => !selectedItems.includes(item.id))
      );
      setSelectedItems([]);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      BaseDrawer,
      {
        open: open2,
        onClose: handleCancelClose,
        width: "60vw",
        headerProps: {
          title: `${cloudName} 批量分享`,
          handleCancelClose
        },
        footerProps: {
          handleCancelClose,
          isPreparingShare,
          isSharing,
          isPrepared,
          isCancelling,
          handlePrepareShare,
          handleShare,
          handleCancelShare,
          copyToClipboard: () => {
            handleCopy(formatStringForCopyAndDownload$2(filteredResults));
          },
          downloadLinksToTxt: () => {
            handleDownloadLinks(formatStringForCopyAndDownload$2(filteredResults));
          },
          downloadLinksToExcel: () => {
            handleDownloadExcel(transformShareInfoForXlsx$2(filteredResults));
          },
          disabledCopy: isSharing,
          disabledDownloadLinks: isSharing,
          disabledDownloadExcel: isSharing
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex flex-col h-full p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex-1 flex flex-col overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "border rounded-md bg-gray-50 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                className: "flex justify-between items-center px-3 py-2 cursor-pointer",
                onClick: () => setConfigExpanded(!configExpanded),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base m-0", children: "分享配置" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", children: configExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandLessIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandMoreIcon, {}) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: configExpanded, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "p-3 pt-0 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  label: "分享延迟",
                  size: "small",
                  type: "number",
                  value: shareConfig.shareDelay,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    shareDelay: Number(e.target.value)
                  })),
                  slotProps: {
                    htmlInput: {
                      min: 1,
                      step: 100
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormControlLabel,
                {
                  control: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: shareConfig.enableCustomCode,
                      onChange: (e) => setShareConfig((prev2) => ({
                        ...prev2,
                        enableCustomCode: e.target.checked
                      })),
                      size: "small"
                    }
                  ),
                  label: "开启提取码"
                }
              ) }),
              shareConfig.enableCustomCode && /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  size: "small",
                  value: shareConfig.customCode,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    customCode: e.target.value
                  })),
                  placeholder: "(可空)只能包含大小写英文+数字)",
                  slotProps: {
                    htmlInput: {
                      maxLength: 4
                    }
                  }
                }
              ) })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "mt-3 h-0 flex-1", children: [
            loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex justify-center items-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 50 }) }),
            shareResults.length > 0 && !loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base", children: "分享结果" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusCount,
                    {
                      shareResults,
                      selectedItems
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "删除已选项", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      size: "small",
                      onClick: handleDeleteSelected,
                      disabled: selectedItems.length === 0 || isSharing,
                      color: "error",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteIcon, { fontSize: "small" })
                    }
                  ) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: filterStatus,
                      size: "small",
                      onChange: (e) => setFilterStatus(e.target.value),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: "全部" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "ready", children: "准备分享" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "sharing", children: "分享中" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "success", children: "分享成功" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "error", children: "分享失败" })
                      ]
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.length === filteredResults.length && filteredResults.length > 0,
                      indeterminate: selectedItems.length > 0 && selectedItems.length < filteredResults.length,
                      onChange: handleSelectAll,
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "状态" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件类型" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件名" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件大小" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件时间" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "分享链接" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "提取码" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "信息" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredResults.map((result) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.includes(result.id),
                      onChange: () => handleItemSelect(result.id),
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, { status: result.status }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.fileType === FileTypeEnum$1.FOLDER ? /* @__PURE__ */ jsxRuntimeExports.jsx(FolderIcon, { fontSize: "small" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileIcon, { fontSize: "small" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableCell,
                    {
                      sx: {
                        maxWidth: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      title: result.fileName,
                      children: result.fileName
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.fileSize }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.fileTime }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.shareLink ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[150px]", children: result.shareLink }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        size: "small",
                        onClick: () => copyLink(result.shareLink ?? ""),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCopyIcon, { fontSize: "small" })
                      }
                    )
                  ] }) : "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.extractCode || "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusText,
                    {
                      status: result.status,
                      message: result.message
                    }
                  ) })
                ] }, result.id)) })
              ] }) })
            ] })
          ] })
        ] }) })
      }
    );
  });
  const Lanzou = () => {
    const shareDOM = React.useRef(null);
    const handleClick = () => {
      var _a;
      (_a = shareDOM.current) == null ? void 0 : _a.open();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outlined",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShareIcon, {}),
          onClick: handleClick,
          children: "批量分享"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShareDrawer$2, { ref: shareDOM })
    ] });
  };
  var ExpireTimeEnum$1 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 1] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["threeDay"] = 3] = "threeDay";
    ExpireTimeEnum2[ExpireTimeEnum2["fiveDay"] = 5] = "fiveDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 7] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["fifteen"] = 15] = "fifteen";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = -1] = "forever";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$1 || {});
  const ExpireTimeEnumMap$1 = {
    [
      1
      /* oneDay */
    ]: "1天",
    [
      3
      /* threeDay */
    ]: "3天",
    [
      5
      /* fiveDay */
    ]: "5天",
    [
      7
      /* sevenDay */
    ]: "7天",
    [
      15
      /* fifteen */
    ]: "15天",
    [
      -1
      /* forever */
    ]: "永久"
  };
  var FileTypeEnum = /* @__PURE__ */ ((FileTypeEnum2) => {
    FileTypeEnum2["folder"] = "folder";
    FileTypeEnum2["file"] = "file";
    return FileTypeEnum2;
  })(FileTypeEnum || {});
  const expireTimeOptions = [
    { value: ExpireTimeEnum$1.oneDay, label: "1天" },
    { value: ExpireTimeEnum$1.threeDay, label: "3天" },
    { value: ExpireTimeEnum$1.fiveDay, label: "5天" },
    { value: ExpireTimeEnum$1.sevenDay, label: "7天" },
    { value: ExpireTimeEnum$1.fifteen, label: "15天" },
    { value: ExpireTimeEnum$1.forever, label: "永久" }
  ];
  const getShareInfo = () => {
    const iframe = document.querySelector("iframe");
    const iframeWindow = iframe.contentWindow ?? _unsafeWindow;
    const selectDOM = iframeWindow.document.querySelectorAll(
      "div.list-contents > ul li.selected"
    );
    if (selectDOM.length === 0) {
      return Promise.resolve([]);
    }
    const result = Array.from(selectDOM).map(async (itemDOM) => {
      const fileType = itemDOM.getAttribute("file_type") === "0" ? FileTypeEnum.folder : FileTypeEnum.file;
      const id = fileType === FileTypeEnum.folder ? itemDOM.getAttribute("cate_id") : itemDOM.getAttribute("file_id");
      let fileSize = "";
      if (fileType === FileTypeEnum.folder) {
        fileSize = await shareLogicMap[cloudEnum.yun115].getFolderSize(
          id
        );
        console.log(fileSize, "文件夹大小");
      } else {
        fileSize = itemDOM.getAttribute("file_size");
        fileSize = fileSize ? bytesToSize(Number(fileSize)) : "";
      }
      return {
        id,
        status: FileShareStatusEnum.ready,
        //分享状态
        fileType,
        //文件类型
        fileSize,
        fileName: itemDOM.getAttribute("title")
      };
    });
    return Promise.all(result);
  };
  const formatStringForCopyAndDownload$1 = (list) => {
    return list.map((item) => `${item.fileName} ${item.shareLink} ${item.extractCode}`).join("\n");
  };
  const formatStringForCopyAndDownload2 = (list) => {
    return list.map(
      (item) => `${item.fileName}[${item.fileSize}]$${item.shareLink}?password=${item.extractCode}`
    ).join("\n");
  };
  const transformShareInfoForXlsx$1 = (list) => {
    return list.map((item) => ({
      文件名: item.fileName,
      文件大小: item.fileSize,
      分享链接: item.shareLink,
      提取码: item.extractCode,
      有效期: ExpireTimeEnumMap$1[item.expireTime],
      接受次数限制: !item.acceptLimit ? "不限制" : item.acceptLimit,
      免登录下载流量限制: !item.anonymousDownloadTraffic ? "不限制" : `${item.anonymousDownloadTraffic}KB`
    }));
  };
  const getShareFirstInfo = (currentShareItem) => {
    const formData = new FormData();
    const { user_id } = _unsafeWindow || {};
    formData.append("user_id", user_id);
    const file_ids = currentShareItem.id + "";
    formData.append("file_ids", file_ids);
    formData.append("ignore_warn", "1");
    formData.append("is_asc", "0");
    formData.append("order", "user_ptime");
    return {
      formData,
      info: {
        user_id,
        file_ids,
        ignore_warn: "1",
        is_asc: "0",
        order: "user_ptime"
      }
    };
  };
  const getShareSecondInfo = (resultOne, shareConfig) => {
    const formDataUpdate = new FormData();
    const info2 = {
      auto_fill_recvcode: shareConfig.autoFillAccessCode,
      //分享链接自动填充访问码-传入0则关闭,1则开启
      receive_user_limit: shareConfig.acceptLimit ? shareConfig.acceptLimit : "",
      //接收次数-不传则不限制,传入数字则限制
      skip_login: shareConfig.allowAnonymousDownload,
      //允许免登录下载 传入0关闭 1开启,
      skip_login_down_flow_limit: shareConfig.allowAnonymousDownload ? shareConfig.anonymousDownloadTraffic * 1024 : "",
      //免登录下载限制 - 大小  * 1024 B 不传则不限制
      share_duration: shareConfig.expireTime
    };
    const share_code = resultOne.data.share_code;
    formDataUpdate.append("share_code", share_code);
    formDataUpdate.append("auto_fill_recvcode", info2.auto_fill_recvcode);
    formDataUpdate.append("receive_user_limit", info2.receive_user_limit);
    formDataUpdate.append("share_duration", info2.share_duration);
    if (shareConfig.customCode && shareConfig.customCode !== "") {
      formDataUpdate.append("receive_code", shareConfig.customCode);
      formDataUpdate.append("is_custom_code", "1");
    }
    return {
      formData: formDataUpdate,
      info: {
        ...info2,
        share_code,
        receive_code: shareConfig.customCode
      }
    };
  };
  const getShareThirdInfo = (info2, resultOne) => {
    const skipLoginForm = new FormData();
    skipLoginForm.append("share_code", resultOne.data.share_code);
    if (info2.skip_login * 1 === 1) {
      skipLoginForm.append("skip_login", "1");
      skipLoginForm.append(
        "skip_login_down_flow_limit",
        info2.skip_login_down_flow_limit
      );
    } else {
      skipLoginForm.append("skip_login", "0");
    }
    return {
      formData: skipLoginForm
    };
  };
  const ShareDrawer$1 = React.forwardRef((props, ref) => {
    React.useImperativeHandle(ref, () => {
      return {
        open() {
          setOpen(true);
        }
      };
    });
    const { name: cloudName } = useBaseCloudInfo();
    const [selectedItems, setSelectedItems] = React.useState([]);
    const {
      notifications,
      loadingShareData,
      isSharing,
      isPreparingShare,
      isPrepared,
      isCancelling,
      isCancellingRef,
      filterStatus,
      shareResults,
      configExpanded,
      open: open2,
      setLoadingShareData,
      setIsSharing,
      setIsPreparingShare,
      setIsPrepared,
      setIsCancelling,
      setFilterStatus,
      setShareResults,
      setConfigExpanded,
      setOpen,
      handleCopy,
      handleDownloadLinks,
      handleDownloadExcel,
      copyLink,
      resetShareStatus,
      handleDefaultCloseDrawerCallback
    } = useShare({ cloudName });
    const [userInfo, setUserInfo] = React.useState(() => {
      const { USER_PERMISSION } = _unsafeWindow;
      return {
        //是否是VIP 为0则不是vip,为1则是vip
        is_vip: USER_PERMISSION.is_vip
      };
    });
    const [shareConfig, setShareConfig] = React.useState({
      shareDelay: defaultGlobalSetting.defaultShareDelay,
      // 分享延迟
      expireTime: ExpireTimeEnum$1.forever,
      // 有效期
      customCode: "",
      // 自定义提取码
      autoFillAccessCode: false,
      // 自动填充访问码
      allowAnonymousDownload: false,
      // 允许免登录下载
      anonymousDownloadTraffic: 0,
      // 免登录下载流量限制(KB)
      acceptLimit: 0
      // 接受次数限制
    });
    React.useEffect(() => {
      if (userInfo.is_vip) {
        setShareConfig((prev2) => ({
          ...prev2,
          expireTime: ExpireTimeEnum$1.forever
        }));
      } else {
        setShareConfig((prev2) => ({
          ...prev2,
          expireTime: ExpireTimeEnum$1.fifteen
        }));
      }
    }, [userInfo.is_vip]);
    const filteredResults = shareResults.filter((result) => {
      if (filterStatus === "all") return true;
      return result.status === filterStatus;
    });
    const handleCancelClose = () => {
      handleDefaultCloseDrawerCallback();
    };
    const handlePrepareShare = async () => {
      try {
        setLoadingShareData(true);
        const result = await getShareInfo();
        setShareResults(result);
        setIsPreparingShare(false);
        setIsPrepared(true);
      } catch (e) {
        notifications.show("获取分享文件列表失败" + e, {
          autoHideDuration: 1500,
          severity: "error"
        });
        console.error(e);
      } finally {
        setLoadingShareData(false);
      }
    };
    const handleCancelShare = () => {
      setIsCancelling(true);
      isCancellingRef.current = true;
    };
    const handleShare = async () => {
      setIsCancelling(false);
      setIsSharing(true);
      for (let i = 0; i < shareResults.length; i++) {
        if (isCancellingRef.current) {
          setIsSharing(false);
          break;
        }
        try {
          const currentShareItem = filteredResults[i];
          const { formData: formDataFirst, info: infoFirst } = getShareFirstInfo(currentShareItem);
          const resultOne = await shareLogicMap[cloudEnum.yun115].share(formDataFirst);
          console.log(resultOne, "resultOne");
          await sleep(shareConfig.shareDelay);
          const { formData: formDataSecond, info: infoSecond } = getShareSecondInfo(resultOne, shareConfig);
          await sleep(shareConfig.shareDelay);
          const resultTwo = await shareLogicMap[cloudEnum.yun115].updateSetting(formDataSecond);
          console.log(resultTwo, "resultTwo");
          await sleep(shareConfig.shareDelay);
          if (userInfo.is_vip) {
            console.log(infoSecond, "infoSecond");
            const { formData: formDataThird } = getShareThirdInfo(
              infoSecond,
              resultOne
            );
            const resultThree = await shareLogicMap[cloudEnum.yun115].updateAnonymousDownloadLimit(
              formDataThird
            );
            console.log(resultThree, "resultThree");
          }
          console.log(resultOne, "resultOne");
          console.log(resultTwo, "resultTwo");
          setShareResults((prev2) => {
            const updated = [...prev2];
            const { data = {} } = resultOne || {};
            if (data.share_url) {
              updated[i] = {
                ...updated[i],
                expireTime: shareConfig.expireTime,
                //有效期
                status: FileShareStatusEnum.success,
                //状态
                shareLink: data.share_url,
                //分享链接
                //如果是VIP设置了提取码则使用VIP的提取码,否则使用分享的提取码
                extractCode: infoSecond.receive_code ? infoSecond.receive_code : data.receive_code,
                //提取码
                acceptLimit: shareConfig.acceptLimit,
                //接受次数限制
                anonymousDownloadTraffic: shareConfig.anonymousDownloadTraffic
                //免登录下载流量限制
              };
            } else {
              updated[i] = {
                ...updated[i],
                status: FileShareStatusEnum.error,
                message: "分享失败" + (data.error || "")
              };
            }
            return updated;
          });
        } catch (error) {
          console.log(error, "分享失败");
          setShareResults((prev2) => {
            const updated = [...prev2];
            updated[i] = {
              ...updated[i],
              status: FileShareStatusEnum.error,
              message: "分享失败-" + ((error == null ? void 0 : error.error) || "")
            };
            return updated;
          });
        } finally {
          setIsPreparingShare(true);
          setIsSharing(false);
          isCancellingRef.current = false;
          await sleep(shareConfig.shareDelay);
        }
      }
      resetShareStatus();
    };
    const handleItemSelect = (id) => {
      setSelectedItems(
        (prev2) => prev2.includes(id) ? prev2.filter((item) => item !== id) : [...prev2, id]
      );
    };
    const handleSelectAll = () => {
      if (selectedItems.length === filteredResults.length) {
        setSelectedItems([]);
      } else {
        setSelectedItems(filteredResults.map((item) => item.id));
      }
    };
    const handleDeleteSelected = () => {
      setShareResults(
        (prev2) => prev2.filter((item) => !selectedItems.includes(item.id))
      );
      setSelectedItems([]);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      BaseDrawer,
      {
        open: open2,
        onClose: handleCancelClose,
        headerProps: {
          title: `${cloudName} 批量分享`,
          handleCancelClose
        },
        footerProps: {
          handleCancelClose,
          isPreparingShare,
          isSharing,
          isPrepared,
          isCancelling,
          handlePrepareShare,
          handleShare,
          handleCancelShare,
          copyToClipboard: () => {
            handleCopy(formatStringForCopyAndDownload$1(filteredResults));
          },
          downloadLinksToTxt: () => {
            handleDownloadLinks(formatStringForCopyAndDownload$1(filteredResults));
          },
          downloadLinksToExcel: () => {
            handleDownloadExcel(transformShareInfoForXlsx$1(filteredResults));
          },
          disabledCopy: isSharing,
          disabledDownloadLinks: isSharing,
          disabledDownloadExcel: isSharing
        },
        extraButtons: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "contained",
            color: "primary",
            size: "small",
            onClick: () => {
              handleDownloadLinks(
                formatStringForCopyAndDownload2(filteredResults)
              );
            },
            children: "下载格式2"
          }
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex flex-col h-full p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex-1 flex flex-col overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "border rounded-md bg-gray-50 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                className: "flex justify-between items-center px-3 py-2 cursor-pointer",
                onClick: () => setConfigExpanded(!configExpanded),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base m-0", children: "分享配置" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", children: configExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandLessIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandMoreIcon, {}) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: configExpanded, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "p-3 pt-0 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  label: "分享延迟",
                  size: "small",
                  type: "number",
                  value: shareConfig.shareDelay,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    shareDelay: Number(e.target.value)
                  })),
                  slotProps: {
                    htmlInput: {
                      min: 1,
                      step: 100
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, size: "small", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "有效期" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Select,
                  {
                    label: `有效期(${userInfo.is_vip ? "VIP用户" : "非VIP用户"})`,
                    value: shareConfig.expireTime,
                    onChange: (e) => setShareConfig((prev2) => ({
                      ...prev2,
                      expireTime: Number(e.target.value)
                    })),
                    size: "small",
                    children: userInfo.is_vip ? expireTimeOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value)) : (
                      //排除永久
                      expireTimeOptions.filter(
                        (option) => option.value !== ExpireTimeEnum$1.forever
                      ).map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value))
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormControlLabel,
                {
                  control: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: shareConfig.autoFillAccessCode,
                      onChange: (e) => setShareConfig((prev2) => ({
                        ...prev2,
                        autoFillAccessCode: e.target.checked
                      })),
                      size: "small"
                    }
                  ),
                  label: "自动填充访问码"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  label: `提取码 (${userInfo.is_vip ? "VIP用户可自定义" : "非VIP用户不可自定义"})`,
                  size: "small",
                  value: shareConfig.customCode,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    customCode: e.target.value
                  })),
                  placeholder: "(可空)只能包含大小写英文+数字)",
                  disabled: shareConfig.autoFillAccessCode || !userInfo.is_vip,
                  slotProps: {
                    htmlInput: {
                      maxLength: 4
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  label: "接受次数限制(为0则表示无限制)",
                  size: "small",
                  type: "number",
                  value: shareConfig.acceptLimit,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    acceptLimit: Number(e.target.value)
                  })),
                  slotProps: {
                    htmlInput: {
                      min: 0,
                      step: 1
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormControlLabel,
                {
                  control: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      disabled: !userInfo.is_vip,
                      checked: shareConfig.allowAnonymousDownload,
                      onChange: (e) => setShareConfig((prev2) => ({
                        ...prev2,
                        allowAnonymousDownload: e.target.checked
                      })),
                      size: "small"
                    }
                  ),
                  label: `允许免登录下载${userInfo.is_vip ? "" : " (VIP用户才可用)"}`
                }
              ) }),
              shareConfig.allowAnonymousDownload && /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  label: "免登录下载流量限制(为0则表示无限制)KB",
                  size: "small",
                  type: "number",
                  value: shareConfig.anonymousDownloadTraffic,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    anonymousDownloadTraffic: Number(e.target.value)
                  })),
                  slotProps: {
                    htmlInput: {
                      min: 0,
                      step: 100
                    }
                  }
                }
              ) })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "mt-3 h-0 flex-1", children: [
            loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex justify-center items-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 50 }) }),
            shareResults.length > 0 && !loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base", children: "分享结果" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusCount,
                    {
                      shareResults,
                      selectedItems
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "删除已选项", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      size: "small",
                      onClick: handleDeleteSelected,
                      disabled: selectedItems.length === 0 || isSharing,
                      color: "error",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteIcon, { fontSize: "small" })
                    }
                  ) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: filterStatus,
                      size: "small",
                      onChange: (e) => setFilterStatus(e.target.value),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: "全部" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "ready", children: "准备分享" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "sharing", children: "分享中" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "success", children: "分享成功" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "error", children: "分享失败" })
                      ]
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.length === filteredResults.length && filteredResults.length > 0,
                      indeterminate: selectedItems.length > 0 && selectedItems.length < filteredResults.length,
                      onChange: handleSelectAll,
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "状态" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件类型" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件名" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件大小" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "分享链接" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "提取码" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "信息" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredResults.map((result) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.includes(result.id),
                      onChange: () => handleItemSelect(result.id),
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, { status: result.status }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.fileType === FileTypeEnum.folder ? /* @__PURE__ */ jsxRuntimeExports.jsx(FolderIcon, { fontSize: "small" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileIcon, { fontSize: "small" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableCell,
                    {
                      sx: {
                        maxWidth: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      title: result.fileName,
                      children: result.fileName
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.fileSize }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.shareLink ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[150px]", children: result.shareLink }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        size: "small",
                        onClick: () => copyLink(result.shareLink ?? ""),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCopyIcon, { fontSize: "small" })
                      }
                    )
                  ] }) : "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.extractCode || "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusText,
                    {
                      status: result.status,
                      message: result.message
                    }
                  ) })
                ] }, result.id)) })
              ] }) })
            ] })
          ] })
        ] }) })
      }
    );
  });
  const Yun115 = () => {
    const shareDOM = React.useRef(null);
    const handleClick = () => {
      var _a;
      (_a = shareDOM.current) == null ? void 0 : _a.open();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "contained",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShareIcon, {}),
          onClick: handleClick,
          children: "批量分享"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShareDrawer$1, { ref: shareDOM })
    ] });
  };
  var ExpireTimeEnum = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 1] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 7] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["thirtyDay"] = 30] = "thirtyDay";
    ExpireTimeEnum2[ExpireTimeEnum2["oneYear"] = 365] = "oneYear";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = 0] = "forever";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum || {});
  const ExpireTimeEnumMap = {
    [
      1
      /* oneDay */
    ]: "1天",
    [
      7
      /* sevenDay */
    ]: "7天",
    [
      30
      /* thirtyDay */
    ]: "30天",
    [
      365
      /* oneYear */
    ]: "1年",
    [
      0
      /* forever */
    ]: "永久"
  };
  const expireOptions = [
    { value: ExpireTimeEnum.oneDay, label: "1天" },
    { value: ExpireTimeEnum.sevenDay, label: "7天" },
    { value: ExpireTimeEnum.thirtyDay, label: "30天" },
    { value: ExpireTimeEnum.oneYear, label: "1年" },
    { value: ExpireTimeEnum.forever, label: "永久" }
  ];
  const getBaiduShareListInfo = () => {
    const tempDOM = document.querySelector(".nd-main-layout__body .nd-main-list");
    const instance = tempDOM == null ? void 0 : tempDOM.__vue__;
    if (!instance)
      return {
        list: []
      };
    return {
      list: (instance == null ? void 0 : instance.selectedList) ?? []
    };
  };
  const transformShareInfo = (list) => {
    if (!list || list.length === 0) return [];
    return list.map((item) => ({
      id: item.fs_id,
      fileName: item.formatName,
      fileSize: bytesToSize(item.size),
      status: "ready"
    }));
  };
  const getBaiduBaseShareParams = () => {
    var _a, _b;
    return {
      //@ts-ignore
      bdstoken: (_b = (_a = _unsafeWindow == null ? void 0 : _unsafeWindow.locals) == null ? void 0 : _a.userInfo) == null ? void 0 : _b.bdstoken,
      version: window.localStorage.getItem("cdp_checkVersionTime")
    };
  };
  const formatStringForCopyAndDownload = (list) => {
    return list.map((item) => `${item.fileName} ${item.shareLink} ${item.extractCode}`).join("\n");
  };
  const transformShareInfoForXlsx = (list) => {
    return list.map((item) => ({
      文件名: item.fileName,
      文件大小: item.fileSize,
      分享链接: item.shareLink,
      提取码: item.extractCode,
      有效期: ExpireTimeEnumMap[item.expireTime]
    }));
  };
  const ShareDrawer = React.forwardRef((props, ref) => {
    React.useImperativeHandle(ref, () => {
      return {
        open() {
          setOpen(true);
        }
      };
    });
    const { name: cloudName } = useBaseCloudInfo();
    const [selectedItems, setSelectedItems] = React.useState([]);
    const {
      notifications,
      loadingShareData,
      isSharing,
      isPreparingShare,
      isPrepared,
      isCancelling,
      isCancellingRef,
      filterStatus,
      shareResults,
      configExpanded,
      open: open2,
      setLoadingShareData,
      setIsSharing,
      setIsPreparingShare,
      setIsPrepared,
      setIsCancelling,
      setFilterStatus,
      setShareResults,
      setConfigExpanded,
      setOpen,
      handleCopy,
      handleDownloadLinks,
      handleDownloadExcel,
      copyLink,
      resetShareStatus,
      handleDefaultCloseDrawerCallback
    } = useShare({ cloudName });
    const [shareConfig, setShareConfig] = React.useState({
      shareDelay: defaultGlobalSetting.defaultShareDelay,
      // 分享延迟
      expireTime: ExpireTimeEnum.forever,
      // 有效期
      enableCustomCode: false,
      // 是否启用自定义提取码
      customCode: "",
      // 自定义提取码
      autoFillCode: false
      // 是否自动填充提取码
    });
    const filteredResults = shareResults.filter((result) => {
      if (filterStatus === "all") return true;
      return result.status === filterStatus;
    });
    const handleCancelClose = () => {
      handleDefaultCloseDrawerCallback();
    };
    const handlePrepareShare = async () => {
      try {
        setLoadingShareData(true);
        const { list } = getBaiduShareListInfo();
        setShareResults(transformShareInfo(list));
        setIsPreparingShare(false);
        setIsPrepared(true);
      } catch (e) {
        notifications.show("获取分享文件列表失败" + e, {
          autoHideDuration: 1500,
          severity: "error"
        });
        console.error(e);
      } finally {
        setLoadingShareData(false);
      }
    };
    const handleCancelShare = () => {
      setIsCancelling(true);
      isCancellingRef.current = true;
    };
    const handleShare = async () => {
      setIsCancelling(false);
      setIsSharing(true);
      const { bdstoken, version } = getBaiduBaseShareParams();
      for (let i = 0; i < shareResults.length; i++) {
        if (isCancellingRef.current) {
          setIsSharing(false);
          break;
        }
        try {
          const pwd = shareConfig.enableCustomCode ? shareConfig.customCode ? shareConfig.customCode : generateRandomString() : generateRandomString();
          const res = await shareLogicMap[cloudEnum.baidu].share(
            window.location.origin + "/share/set",
            {
              period: shareConfig.expireTime,
              pwd,
              eflag_disable: true,
              //不知道是什么参数,好像是分享类型eflag_disable: "personal" === e.shareType
              channel_list: [],
              //未知
              schannel: 4,
              //未知-貌似是一个定制
              fid_list: `[${shareResults[i].id}]`
              //文件id
            },
            {
              bdstoken,
              version
            },
            {
              headers: {
                accept: "application/json;charset=UTF-8",
                "Content-Type": " application/x-www-form-urlencoded"
              }
            }
          );
          const { link } = res || {};
          setShareResults((prev2) => {
            const updated = [...prev2];
            if (link) {
              updated[i] = {
                ...updated[i],
                expireTime: shareConfig.expireTime,
                status: FileShareStatusEnum.success,
                shareLink: shareConfig.autoFillCode ? `${link}?pwd=${pwd}` : link,
                extractCode: pwd
              };
            } else {
              updated[i] = {
                ...updated[i],
                status: FileShareStatusEnum.error,
                message: "分享失败"
              };
            }
            return updated;
          });
        } catch (error) {
          console.log(error, "分享失败");
          setShareResults((prev2) => {
            const updated = [...prev2];
            updated[i] = {
              ...updated[i],
              status: FileShareStatusEnum.error,
              message: "分享失败"
            };
            return updated;
          });
        } finally {
          setIsPreparingShare(true);
          setIsSharing(false);
          isCancellingRef.current = false;
          await sleep(shareConfig.shareDelay);
        }
      }
      resetShareStatus();
    };
    const handleItemSelect = (id) => {
      setSelectedItems(
        (prev2) => prev2.includes(id) ? prev2.filter((item) => item !== id) : [...prev2, id]
      );
    };
    const handleSelectAll = () => {
      if (selectedItems.length === filteredResults.length) {
        setSelectedItems([]);
      } else {
        setSelectedItems(filteredResults.map((item) => item.id));
      }
    };
    const handleDeleteSelected = () => {
      setShareResults(
        (prev2) => prev2.filter((item) => !selectedItems.includes(item.id))
      );
      setSelectedItems([]);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      BaseDrawer,
      {
        open: open2,
        onClose: handleCancelClose,
        headerProps: {
          title: `${cloudName} 批量分享`,
          handleCancelClose
        },
        footerProps: {
          handleCancelClose,
          isPreparingShare,
          isSharing,
          isPrepared,
          isCancelling,
          handlePrepareShare,
          handleShare,
          handleCancelShare,
          copyToClipboard: () => {
            handleCopy(formatStringForCopyAndDownload(filteredResults));
          },
          downloadLinksToTxt: () => {
            handleDownloadLinks(formatStringForCopyAndDownload(filteredResults));
          },
          downloadLinksToExcel: () => {
            handleDownloadExcel(transformShareInfoForXlsx(filteredResults));
          },
          disabledCopy: isSharing,
          disabledDownloadLinks: isSharing,
          disabledDownloadExcel: isSharing
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex flex-col h-full p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex-1 flex flex-col overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "border rounded-md bg-gray-50 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Box,
              {
                className: "flex justify-between items-center px-3 py-2 cursor-pointer",
                onClick: () => setConfigExpanded(!configExpanded),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base m-0", children: "分享配置" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { size: "small", children: configExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandLessIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandMoreIcon, {}) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { in: configExpanded, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "p-3 pt-0 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  label: "分享延迟",
                  size: "small",
                  type: "number",
                  value: shareConfig.shareDelay,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    shareDelay: Number(e.target.value)
                  })),
                  slotProps: {
                    htmlInput: {
                      min: 1,
                      step: 100
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, size: "small", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { children: "有效期" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Select,
                  {
                    label: "有效期",
                    value: shareConfig.expireTime,
                    onChange: (e) => setShareConfig((prev2) => ({
                      ...prev2,
                      expireTime: Number(e.target.value)
                    })),
                    size: "small",
                    children: expireOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: option.value, children: option.label }, option.value))
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormControlLabel,
                {
                  control: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: shareConfig.autoFillCode,
                      onChange: (e) => setShareConfig((prev2) => ({
                        ...prev2,
                        autoFillCode: e.target.checked
                      })),
                      size: "small"
                    }
                  ),
                  label: "自动填充提取码"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormControlLabel,
                {
                  control: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: shareConfig.enableCustomCode,
                      onChange: (e) => setShareConfig((prev2) => ({
                        ...prev2,
                        enableCustomCode: e.target.checked
                      })),
                      size: "small"
                    }
                  ),
                  label: "自定义提取码"
                }
              ) }),
              shareConfig.enableCustomCode && /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { fullWidth: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TextField,
                {
                  size: "small",
                  value: shareConfig.customCode,
                  onChange: (e) => setShareConfig((prev2) => ({
                    ...prev2,
                    customCode: e.target.value
                  })),
                  placeholder: "(可空)只能包含大小写英文+数字)",
                  slotProps: {
                    htmlInput: {
                      maxLength: 4
                    }
                  }
                }
              ) })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "mt-3 h-0 flex-1", children: [
            loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "flex justify-center items-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, { size: 50 }) }),
            shareResults.length > 0 && !loadingShareData && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-base", children: "分享结果" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusCount,
                    {
                      shareResults,
                      selectedItems
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { title: "删除已选项", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      size: "small",
                      onClick: handleDeleteSelected,
                      disabled: selectedItems.length === 0 || isSharing,
                      color: "error",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteIcon, { fontSize: "small" })
                    }
                  ) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormControl, { size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: filterStatus,
                      size: "small",
                      onChange: (e) => setFilterStatus(e.target.value),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "all", children: "全部" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "ready", children: "准备分享" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "sharing", children: "分享中" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "success", children: "分享成功" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "error", children: "分享失败" })
                      ]
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, variant: "outlined", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", className: "text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.length === filteredResults.length && filteredResults.length > 0,
                      indeterminate: selectedItems.length > 0 && selectedItems.length < filteredResults.length,
                      onChange: handleSelectAll,
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "状态" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件名" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "文件大小" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "分享链接" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "提取码" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "信息" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredResults.map((result) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { padding: "checkbox", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      size: "small",
                      checked: selectedItems.includes(result.id),
                      onChange: () => handleItemSelect(result.id),
                      disabled: isSharing
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, { status: result.status }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableCell,
                    {
                      sx: {
                        maxWidth: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      title: result.fileName,
                      children: result.fileName
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.fileSize }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.shareLink ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[150px]", children: result.shareLink }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IconButton,
                      {
                        size: "small",
                        onClick: () => copyLink(result.shareLink ?? ""),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCopyIcon, { fontSize: "small" })
                      }
                    )
                  ] }) : "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: result.extractCode || "-" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    StatusText,
                    {
                      status: result.status,
                      message: result.message
                    }
                  ) })
                ] }, result.id)) })
              ] }) })
            ] })
          ] })
        ] }) })
      }
    );
  });
  const BaiduSync = () => {
    const shareDOM = React.useRef(null);
    const handleClick = () => {
      var _a;
      (_a = shareDOM.current) == null ? void 0 : _a.open();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outlined",
          startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShareIcon, {}),
          onClick: handleClick,
          children: "批量分享"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShareDrawer, { ref: shareDOM })
    ] });
  };
  const cloudsRegister = {
    [cloudEnum.xunlei]: Xunlei$1,
    [cloudEnum.uc]: Uc,
    [cloudEnum.baidu]: Baidu,
    [cloudEnum.tianyi]: Tianyi,
    [cloudEnum.quark]: Quark,
    [cloudEnum.alipan]: Alipan,
    [cloudEnum.yidong139]: Xunlei,
    [cloudEnum.lanzou]: Lanzou,
    [cloudEnum.yun115]: Yun115,
    [cloudEnum.baiduSync]: BaiduSync
  };
  const mountCloudInfo = (url) => {
    const cloudInfo = getCloudInfo();
    if (cloudInfo) {
      return cloudInfo;
    }
    return {
      name: "",
      type: "",
      rootElementId: "",
      mountFn: () => {
        return document.createElement("div");
      }
    };
  };
  function App() {
    const { type } = useBaseCloudInfo();
    const Component = cloudsRegister[type];
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {});
  }
  const tailwindCss = '/*! tailwindcss v4.1.3 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:rotateX(0);--tw-rotate-y:rotateY(0);--tw-rotate-z:rotateZ(0);--tw-skew-x:skewX(0);--tw-skew-y:skewY(0);--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-gray-50:oklch(98.5% .002 247.839);--spacing:2px;--text-sm:14px;--text-sm--line-height:calc(1.25/.875);--text-base:16px;--text-base--line-height: 1.5 ;--font-weight-medium:500;--font-weight-bold:700;--radius-md:.375rem;--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.\\@container{container-type:inline-size}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.isolate{isolation:isolate}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-10{margin-top:calc(var(--spacing)*10)}.mt-auto{margin-top:auto}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.table-cell{display:table-cell}.table-header-group{display:table-header-group}.table-row{display:table-row}.table-row-group{display:table-row-group}.h-0{height:calc(var(--spacing)*0)}.h-full{height:100%}.max-w-\\[150px\\]{max-width:150px}.flex-1{flex:1}.flex-shrink,.shrink{flex-shrink:1}.flex-grow,.grow{flex-grow:1}.transform{transform:var(--tw-rotate-x)var(--tw-rotate-y)var(--tw-rotate-z)var(--tw-skew-x)var(--tw-skew-y)}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.bg-gray-50{background-color:var(--color-gray-50)}.p-3{padding:calc(var(--spacing)*3)}.px-3{padding-inline:calc(var(--spacing)*3)}.py-2{padding-block:calc(var(--spacing)*2)}.pt-0{padding-top:calc(var(--spacing)*0)}.pt-3{padding-top:calc(var(--spacing)*3)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}}@property --tw-rotate-x{syntax:"*";inherits:false;initial-value:rotateX(0)}@property --tw-rotate-y{syntax:"*";inherits:false;initial-value:rotateY(0)}@property --tw-rotate-z{syntax:"*";inherits:false;initial-value:rotateZ(0)}@property --tw-skew-x{syntax:"*";inherits:false;initial-value:skewX(0)}@property --tw-skew-y{syntax:"*";inherits:false;initial-value:skewY(0)}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}';
  const initTheme = (shadowRootElement) => {
    const theme = createTheme({
      typography: {
        //@ts-ignore
        pxToRem: (size) => `${size}px`
        // 永远返回px
      },
      components: {
        MuiPopover: {
          defaultProps: {
            container: shadowRootElement
          }
        },
        MuiPopper: {
          defaultProps: {
            container: shadowRootElement
          }
        },
        MuiModal: {
          defaultProps: {
            container: shadowRootElement
          }
        }
      }
    });
    return theme;
  };
  const mountInfo = mountCloudInfo();
  const info = {
    name: mountInfo.name,
    type: mountInfo.type
  };
  let count = 20;
  let timer = setInterval(() => {
    const rootElementId = document.getElementById(mountInfo.rootElementId);
    if (rootElementId) {
      clearInterval(timer);
    } else {
      count--;
      if (count <= 0) {
        clearInterval(timer);
      }
      const result = mountInfo.mountFn();
      if (!result.shadowContainer) {
        console.error("挂载失败: 没有找到shadowContainer");
        return;
      }
      const styleTailwindCss = document.createElement("style");
      styleTailwindCss.textContent = tailwindCss;
      styleTailwindCss.setAttribute("data-tailwind", "true");
      result.shadowContainer.appendChild(styleTailwindCss);
      const cache = createCache({
        key: "css",
        prepend: true,
        container: result.shadowContainer
      });
      ReactDOM.createRoot(result.appContainer).render(
        /* @__PURE__ */ jsxRuntimeExports.jsx(CacheProvider, { value: cache, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { theme: initTheme(result.appContainer), children: /* @__PURE__ */ jsxRuntimeExports.jsx(BaseCloudInfo.Provider, { value: info, children: /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          NotificationsProvider,
          {
            slotProps: {
              snackbar: {
                anchorOrigin: { vertical: "top", horizontal: "center" }
              }
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {})
          }
        ) }) }) }) })
      );
    }
  }, 500);

})(React, ReactDOM, XLSX);