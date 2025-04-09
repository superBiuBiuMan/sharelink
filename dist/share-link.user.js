// ==UserScript==
// @name         网盘批量分享工具(支持蓝奏云,115网盘,123网盘,百度网盘,夸克网盘,阿里云盘,天翼网盘,迅雷网盘,中国移动网盘,UC网盘)
// @namespace    dreamlove
// @version      2.9.1
// @author       superBiuBiu
// @description  网盘文件批量分享,目前支持蓝奏云,115网盘,123网盘,百度网盘,夸克网盘,阿里云盘,天翼网盘,迅雷网盘,中国移动网盘,UC网盘~
// @iconURL      https://www.google.com/s2/favicons?domain=dreamlove.top
// @supportURL   https://github.com/superBiuBiuMan/sharelink/
// @match        https://onedrive.live.com/*
// @match        https://cloud.189.cn/*
// @match        https://pan.baidu.com/disk/main*
// @match        https://pan.baidu.com/disk/synchronization*
// @match        https://115.com/*
// @match        https://www.123pan.com/*
// @match        https://pan.quark.cn/*
// @match        https://yun.139.com/*
// @match        https://pan.xunlei.com/*
// @match        https://www.aliyundrive.com/*
// @match        https://www.alipan.com/*
// @match        https://drive.uc.cn/*
// @match        https://lanzou.com/u
// @match        https://www.lanzou.com/u
// @match        https://www.lanzou.com/account.php
// @match        https://up.woozooo.com/u
// @match        https://up.woozooo.com/mydisk.php
// @match        https://pc.woozooo.com/u
// @match        https://pc.woozooo.com/mydisk.php
// @match        https://lanzou.com/*
// @match        https://www.lanzou.com/*
// @match        https://pan.lanzou.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/vue/3.5.12/vue.global.prod.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/vue-demi/0.14.6/index.iife.min.js
// @require      data:application/javascript,window.Vue%3DVue%3B
// @require      https://cdnjs.cloudflare.com/ajax/libs/pinia/2.2.4/pinia.iife.prod.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.mini.min.js
// @require      https://unpkg.com/tdesign-vue-next@1.10.2/dist/tdesign.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.0/axios.min.js
// @resource     tdesign-vue-next/es/style/index.css  https://unpkg.com/tdesign-vue-next@1.5.7/dist/tdesign.min.css
// @connect      webapi.115.com
// @connect      drive-pc.quark.cn
// @connect      api-pan.xunlei.com
// @connect      api.aliyundrive.com
// @connect      pc-api.uc.cn
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-body
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const i=document.createElement("style");i.textContent=t,document.head.append(i)})(" @keyframes t-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.t-icon{display:inline-block;vertical-align:middle;width:1em;height:1em}.t-icon:before{font-family:unset}.t-icon-loading{animation:t-spin 1s linear infinite}.t-icon{fill:currentColor}.t-icon.t-size-s,i.t-size-s{font-size:14px}.t-icon.t-size-m,i.t-size-m{font-size:16px}.t-icon.t-size-l,i.t-size-l{font-size:18px}.tianyiCloud[data-v-ce767d83]{height:100%;display:flex;flex-direction:column}.tianyiCloud_option[data-v-ce767d83]{display:flex;align-items:center;margin:0 0 20px}.tianyiCloud_option_time[data-v-ce767d83]{margin-left:10px}.tianyiCloud_result[data-v-ce767d83]{flex:1;overflow:auto}.baiduCloud[data-v-cb3cc612]{height:100%;display:flex;flex-direction:column}.baiduCloud_option_item[data-v-cb3cc612]:nth-of-type(2){margin:14px 0}.baiduCloud_result[data-v-cb3cc612]{flex:1;overflow:auto}.baiduCloud[data-v-1c3aed36]{height:100%;display:flex;flex-direction:column}.baiduCloud_option_item[data-v-1c3aed36]:nth-of-type(2){margin:14px 0}.baiduCloud_result[data-v-1c3aed36]{flex:1;overflow:auto}.cloud115[data-v-54beefe3]{height:100%}.cloud123[data-v-f782858b]{height:100%;display:flex;flex-direction:column}.cloud123_option[data-v-f782858b]{margin:0 0 10px}.cloud123_option_item[data-v-f782858b]{display:flex;align-items:center;margin:10px 0}.cloud123_option_item_title[data-v-f782858b]{display:inline-block;width:100px}.cloud123_result[data-v-f782858b]{flex:1;overflow:auto}.lanzouCloud[data-v-98dce44d]{height:100%;display:flex;flex-direction:column}.lanzouCloud_option[data-v-98dce44d]{margin:0 0 10px}.lanzouCloud_option_item[data-v-98dce44d]{display:flex;align-items:center}.lanzouCloud_option_item_title[data-v-98dce44d]{display:inline-block;width:100px}.lanzouCloud_result[data-v-98dce44d]{flex:1;overflow:auto}.quarkCloud[data-v-7ddcaef9]{height:100%;display:flex;flex-direction:column}.quarkCloud_option_item[data-v-7ddcaef9]{display:flex;align-items:center}.quarkCloud_result[data-v-7ddcaef9]{flex:1;overflow:auto}.cloud139[data-v-f1489390]{height:100%;display:flex;flex-direction:column}.cloud139_option[data-v-f1489390]{margin:0 0 10px}.cloud139_option_item[data-v-f1489390]{display:flex;align-items:center}.cloud139_option_item_title[data-v-f1489390]{display:inline-block;width:100px}.cloud139_result[data-v-f1489390]{flex:1;overflow:auto}.xunCloud[data-v-3dbd7c07]{height:100%;display:flex;flex-direction:column}.xunCloud[data-v-3dbd7c07] .t-input--auto-width{min-width:120px}.xunCloud_option_item[data-v-3dbd7c07]{display:flex;align-items:center}.xunCloud_option_item_title[data-v-3dbd7c07]{min-width:70px}.xunCloud_result[data-v-3dbd7c07]{flex:1;overflow:auto}.aliCloud[data-v-3ab6544a]{height:100%;display:flex;flex-direction:column}.aliCloud_option_item[data-v-3ab6544a]{display:flex;align-items:center}.aliCloud_option_item_title[data-v-3ab6544a]{min-width:70px}.aliCloud_result[data-v-3ab6544a]{flex:1;overflow:auto}.ucCloud[data-v-56726208]{height:100%;display:flex;flex-direction:column}.ucCloud[data-v-56726208] .t-input--auto-width{min-width:120px}.ucCloud_option_item[data-v-56726208]{display:flex;align-items:center}.ucCloud_option_item_title[data-v-56726208]{min-width:70px}.ucCloud_result[data-v-56726208]{flex:1;overflow:auto}.cloud123[data-v-3551589d]{height:100%;display:flex;flex-direction:column}.cloud123_option[data-v-3551589d]{margin:0 0 10px}.cloud123_option_item[data-v-3551589d]{display:flex;align-items:center;margin:10px 0}.cloud123_option_item_title[data-v-3551589d]{display:inline-block;width:100px}.cloud123_result[data-v-3551589d]{flex:1;overflow:auto} ");

(function (vue, pinia, XLSX, tdesignVueNext, axios) {
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

  const XLSX__namespace = /*#__PURE__*/_interopNamespaceDefault(XLSX);

  const cssLoader = (e) => {
    const t = GM_getResourceText(e);
    return GM_addStyle(t), t;
  };
  cssLoader("tdesign-vue-next/es/style/index.css");
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function camel2Kebab(camelString) {
    var covertArr = ["fillOpacity", "fillRule", "clipRule"];
    if (covertArr.includes(camelString)) {
      return camelString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
    }
    return camelString;
  }
  function renderFn(node, props) {
    var kebabAttrs = Object.keys(node.attrs).reduce((result, key) => {
      result[camel2Kebab(key)] = node.attrs[key];
      return result;
    }, {});
    return vue.h(node.tag, _objectSpread$1(_objectSpread$1({}, kebabAttrs), props), (node.children || []).map((child) => renderFn(child, {})));
  }
  var DEFAULT_CLASS_PREFIX = "t";
  var DEFAULT_LOCALE = "zh-CN";
  var ConfigContext = {
    classPrefix: DEFAULT_CLASS_PREFIX,
    locale: DEFAULT_LOCALE
  };
  const ConfigContext$1 = ConfigContext;
  function useCommonClassName() {
    var {
      classPrefix
    } = ConfigContext$1;
    return {
      SIZE: {
        default: "",
        xs: "".concat(classPrefix, "-size-xs"),
        small: "".concat(classPrefix, "-size-s"),
        medium: "".concat(classPrefix, "-size-m"),
        large: "".concat(classPrefix, "-size-l"),
        xl: "".concat(classPrefix, "-size-xl"),
        block: "".concat(classPrefix, "-size-full-width")
      },
      STATUS: {
        loading: "".concat(classPrefix, "-is-loading"),
        disabled: "".concat(classPrefix, "-is-disabled"),
        focused: "".concat(classPrefix, "-is-focused"),
        success: "".concat(classPrefix, "-is-success"),
        error: "".concat(classPrefix, "-is-error"),
        warning: "".concat(classPrefix, "-is-warning"),
        selected: "".concat(classPrefix, "-is-selected"),
        active: "".concat(classPrefix, "-is-active"),
        checked: "".concat(classPrefix, "-is-checked"),
        current: "".concat(classPrefix, "-is-current"),
        hidden: "".concat(classPrefix, "-is-hidden"),
        visible: "".concat(classPrefix, "-is-visible"),
        expanded: "".concat(classPrefix, "-is-expanded"),
        indeterminate: "".concat(classPrefix, "-is-indeterminate")
      }
    };
  }
  function useSizeProps(size) {
    var COMMON_SIZE_CLASS_NAMES = useCommonClassName().SIZE;
    var className = vue.computed(() => {
      if (size.value in COMMON_SIZE_CLASS_NAMES) {
        return COMMON_SIZE_CLASS_NAMES[size.value];
      }
      return "";
    });
    var style2 = vue.computed(() => {
      if (size.value === void 0 || size.value in COMMON_SIZE_CLASS_NAMES) {
        return {};
      }
      return {
        fontSize: size.value
      };
    });
    return {
      style: style2,
      className
    };
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  var element = {
    "tag": "svg",
    "attrs": {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "width": "1em",
      "height": "1em"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "fill": "currentColor",
        "d": "M6 4V1.5h2V4h8V1.5h2V4h4v18H2V4h4zM4 6v3h16V6H4zm16 5H4v9h16v-9z"
      }
    }]
  };
  var calendar = vue.defineComponent({
    name: "CalendarIcon",
    props: {
      size: {
        type: String
      },
      onClick: {
        type: Function
      }
    },
    setup(props, _ref) {
      var {
        attrs
      } = _ref;
      var propsSize = vue.computed(() => props.size);
      var {
        className,
        style: style2
      } = useSizeProps(propsSize);
      var finalCls = vue.computed(() => ["t-icon", "t-icon-calendar", className.value]);
      var finalStyle = vue.computed(() => _objectSpread(_objectSpread({}, style2.value), attrs.style));
      var finalProps = vue.computed(() => ({
        class: finalCls.value,
        style: finalStyle.value,
        onClick: (e) => {
          var _props$onClick;
          return (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props, {
            e
          });
        }
      }));
      return () => renderFn(element, finalProps.value);
    }
  });
  const CalendarIcon = calendar;
  var CloudInfoEnum = /* @__PURE__ */ ((CloudInfoEnum2) => {
    CloudInfoEnum2[CloudInfoEnum2["cloud115"] = 0] = "cloud115";
    CloudInfoEnum2[CloudInfoEnum2["cloud123"] = 1] = "cloud123";
    CloudInfoEnum2[CloudInfoEnum2["cloudBaidu"] = 2] = "cloudBaidu";
    CloudInfoEnum2[CloudInfoEnum2["cloudLanZou"] = 3] = "cloudLanZou";
    CloudInfoEnum2[CloudInfoEnum2["cloudTianyi"] = 4] = "cloudTianyi";
    CloudInfoEnum2[CloudInfoEnum2["cloudQuark"] = 5] = "cloudQuark";
    CloudInfoEnum2[CloudInfoEnum2["cloud139"] = 6] = "cloud139";
    CloudInfoEnum2[CloudInfoEnum2["cloudXun"] = 7] = "cloudXun";
    CloudInfoEnum2[CloudInfoEnum2["cloudAli"] = 8] = "cloudAli";
    CloudInfoEnum2[CloudInfoEnum2["cloudUC"] = 9] = "cloudUC";
    CloudInfoEnum2[CloudInfoEnum2["cloudOnedrive"] = 10] = "cloudOnedrive";
    CloudInfoEnum2[CloudInfoEnum2["cloudBaiduSync"] = 11] = "cloudBaiduSync";
    return CloudInfoEnum2;
  })(CloudInfoEnum || {});
  const ShareDOMSelect = {
    "cloud115": {
      select: "div.list-contents > ul li.selected",
      idAttribute: ["file_id", "cate_id"]
    },
    "cloudTianyi": {
      idAttribute: ["data-fileid"],
      select: "li[data-selected=true].c-file-item",
      fileNameSelect: ".file-item-name-fileName-span"
    },
    "cloudQuark": {
      idAttribute: ["data-row-key"],
      select: ".ant-table-row-selected",
      fileNameSelect: ".filename-text"
    }
  };
  const cloudUrlInfo = {
    cloud123: ["https://www.123pan.com/"],
    cloudBaidu: ["https://pan.baidu.com/disk/main"],
    cloudBaiduSync: ["https://pan.baidu.com/disk/synchronization"],
    cloudLanZou: [
      "https://pc.woozooo.com/",
      "https:\\/\\/..*?\\.woozooo\\.com",
      "https:\\/\\/.*?\\.lanzou.*?\\.com"
    ],
    cloudTianyi: ["https://cloud.189.cn/web/main/"],
    cloud115: ["https://115.com"],
    cloudQuark: ["https://pan.quark.cn/"],
    cloud139: ["https://yun.139.com/"],
    cloudXun: ["https://pan.xunlei.com/"],
    cloudAli: ["https://www.aliyundrive.com/", "https://www.alipan.com/"],
    cloudUC: ["https://drive.uc.cn/"],
    cloudOnedrive: ["https://onedrive.live.com/"]
  };
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var FileSaver_min = { exports: {} };
  (function(module, exports) {
    (function(a, b) {
      b();
    })(commonjsGlobal, function() {
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
      } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h2) {
        var i = f.URL || f.webkitURL, j = document.createElement("a");
        g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h2) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
          i.revokeObjectURL(j.href);
        }, 4e4), setTimeout(function() {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h2) {
        if (g2 = g2 || f2.name || "download", "string" != typeof f2)
          navigator.msSaveOrOpenBlob(b(f2, h2), g2);
        else if (d(f2))
          c(f2, g2, h2);
        else {
          var i = document.createElement("a");
          i.href = f2, i.target = "_blank", setTimeout(function() {
            e(i);
          });
        }
      } : function(b2, d2, e2, g2) {
        if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2)
          return c(b2, d2, e2);
        var h2 = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h2 && i || a) && "undefined" != typeof FileReader) {
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
  })(FileSaver_min);
  var FileSaver_minExports = FileSaver_min.exports;
  const FileSaver = /* @__PURE__ */ getDefaultExportFromCjs(FileSaver_minExports);
  function generateRandomString(numDigits = 4) {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let result = "";
    for (let i = 0; i < numDigits; i++) {
      const randomIndex = Math.floor(Math.random() * (numbers.length + letters.length));
      if (randomIndex < numbers.length) {
        result += String(numbers[randomIndex]);
      } else {
        result += letters[randomIndex - numbers.length];
      }
    }
    return result;
  }
  function DownloadTxt(fileName, content) {
    const element2 = document.createElement("a");
    element2.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
    element2.setAttribute("download", fileName);
    element2.style.display = "none";
    document.body.append(element2);
    element2.click();
    document.body.removeChild(element2);
  }
  function CopyValueToClipBoard(content) {
    return new Promise((resolve2, reject2) => {
      if (window.isSecureContext) {
        navigator.clipboard.writeText(content).then((res) => {
          resolve2(res);
        }).catch((err) => {
          reject2(err);
        });
      } else {
        reject2("很抱歉，暂时不支持在此网站上复制");
      }
    });
  }
  function get123CloudSecret() {
    function v(t) {
      return (v = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function(t2) {
        return typeof t2;
      } : function(t2) {
        return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol["prototype"] ? "symbol" : typeof t2;
      })(t);
    }
    function A(t, e2) {
      e2 = 1 < arguments.length && void 0 !== e2 ? e2 : 10;
      for (var n2 = function() {
        for (var t2 = [], e3 = 0; e3 < 256; e3++) {
          for (var n3 = e3, r3 = 0; r3 < 8; r3++)
            n3 = 1 & n3 ? 3988292384 ^ n3 >>> 1 : n3 >>> 1;
          t2[e3] = n3;
        }
        return t2;
      }(), r2 = function(t2) {
        t2 = t2.replace(/\\r\\n/g, "\\n");
        for (var e3 = "", n3 = 0; n3 < t2.length; n3++) {
          var r3 = t2.charCodeAt(n3);
          r3 < 128 ? e3 += String.fromCharCode(r3) : e3 = 127 < r3 && r3 < 2048 ? (e3 += String.fromCharCode(r3 >> 6 | 192)) + String.fromCharCode(63 & r3 | 128) : (e3 = (e3 += String.fromCharCode(r3 >> 12 | 224)) + String.fromCharCode(r3 >> 6 & 63 | 128)) + String.fromCharCode(63 & r3 | 128);
        }
        return e3;
      }(t), a2 = -1, i2 = 0; i2 < r2.length; i2++)
        a2 = a2 >>> 8 ^ n2[255 & (a2 ^ r2.charCodeAt(i2))];
      return (a2 = (-1 ^ a2) >>> 0).toString(e2);
    }
    var a, i, o, s, l, c, u, d, f, p, h2, g;
    var e = "/a/api/share/share/create";
    var n = "web";
    var r = 3;
    function getRandom(t) {
      for (; ; )
        switch (t.prev = t.next) {
          case 0:
            for (p in a = Math.round(1e7 * Math.random()), o = Math.round(((/* @__PURE__ */ new Date()).getTime() + 60 * (/* @__PURE__ */ new Date()).getTimezoneOffset() * 1e3 + 288e5) / 1e3).toString(), sessionStorage.getItem("serverTimestamp") && (i = sessionStorage.getItem("serverTimestamp")), o = i && (m = i, 20 <= Math.abs(1e3 * o - 1e3 * m) / 1e3 / 60) ? i : o, s = atob((m = void 0, m = ["a", "d", "e", "f", "g", "h", "l", "m", "y", "i", "j", "n", "o", "p", "k", "q", "r", "s", "t", "u", "b", "c", "v", "w", "s", "z"].join(","), btoa(m))).split(","), u = function(t2, e2, n2) {
              var r2;
              n2 = 2 < arguments.length && void 0 !== n2 ? n2 : 8;
              return 0 === arguments.length ? null : (r2 = "object" === v(t2) ? t2 : (10 === "".concat(t2).length && (t2 = 1e3 * Number.parseInt(t2)), new Date(t2)), t2 += 6e4 * new Date(t2).getTimezoneOffset(), {
                y: (r2 = new Date(t2 + 36e5 * n2)).getFullYear(),
                m: r2.getMonth() + 1 < 10 ? "0".concat(String(r2.getMonth() + 1)) : r2.getMonth() + 1,
                d: r2.getDate() < 10 ? "0".concat(r2.getDate()) : r2.getDate(),
                h: r2.getHours() < 10 ? "0".concat(r2.getHours()) : r2.getHours(),
                f: r2.getMinutes() < 10 ? "0".concat(r2.getMinutes()) : r2.getMinutes()
              });
            }(o), h2 = u.y, g = u.m, l = u.d, c = u.h, u = u.f, d = [h2, g, l, c, u].join(""), f = [], d)
              f.push(s[Number(d[p])]);
            return h2 = A(f.join("")), g = A("".concat(o, "|").concat(a, "|").concat(e, "|").concat(n, "|").concat(String(r), "|").concat(h2)), t.abrupt("return", [h2, "".concat(o, "-").concat(a, "-").concat(g)]);
          case 12:
          case "end":
            return t.stop();
        }
      var m;
    }
    const object = {
      next: 0,
      prev: 0,
      arg: void 0,
      abrupt: (str, result) => {
        return result;
      }
    };
    return getRandom(object);
  }
  function getDate123Cloud(day) {
    function M(t) {
      function e(t2) {
        return ((t2 = Math.floor(Math.abs(t2))) < 10 ? "0" : "") + t2;
      }
      var n = -t.getTimezoneOffset(), r = 0 <= n ? "+" : "-";
      return "".concat(t.getFullYear(), "-").concat(e(t.getMonth() + 1), "-").concat(e(t.getDate()), "T").concat(e(t.getHours()), ":").concat(e(t.getMinutes()), ":").concat(e(t.getSeconds())).concat(r).concat(e(n / 60), ":").concat(e(n % 60));
    }
    day = day * 1;
    switch (day) {
      case 1:
        return Object(M)(/* @__PURE__ */ new Date(+/* @__PURE__ */ new Date() + 864e5));
      case 7:
        return Object(M)(/* @__PURE__ */ new Date(+/* @__PURE__ */ new Date() + 6048e5));
      case 30:
        return Object(M)(/* @__PURE__ */ new Date(+/* @__PURE__ */ new Date() + 2592e6));
      case 99:
        return Object(M)(/* @__PURE__ */ new Date("2099/12/12 08:00:00"));
    }
  }
  function bodyParse(body) {
    const result = (body == null ? void 0 : body.split("&")) ?? [];
    let obj = {};
    for (let item of result) {
      const temp = (item == null ? void 0 : item.split("=")) ?? [];
      if (temp.length > 1) {
        obj[temp[0]] = temp[1];
      }
    }
    return obj;
  }
  function findCloudProvider(url, cloudUrlInfos) {
    for (const provider in cloudUrlInfos) {
      const urls = cloudUrlInfos[provider];
      for (const cloudUrl of urls) {
        if (isMatchingUrl(url, cloudUrl)) {
          return provider;
        }
      }
    }
    return null;
  }
  function isMatchingUrl(url, pattern) {
    if (pattern.includes("*")) {
      return new RegExp(pattern, "g").test(url);
    } else {
      return url.startsWith(pattern);
    }
  }
  function observeDOMChanges(selector, callback, options = { interval: 300, observerOptions: { childList: true, subtree: true, attributes: true } }) {
    if (!selector) {
      console.error("请传入选择器");
      throw new Error("请传入选择器");
    }
    let timer;
    const startObserver = () => {
      const targetDOM = document.querySelector(selector);
      if (!targetDOM)
        return;
      clearInterval(timer);
      const observer = new MutationObserver(() => {
        console.log("执行回调");
        callback(targetDOM);
        observer.disconnect();
      });
      observer.observe(targetDOM, options.observerOptions);
    };
    timer = setInterval(startObserver, options.interval ?? 300);
  }
  function findLocalStorageKeysWithPrefix(prefix) {
    let result = {};
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key) && key.startsWith(prefix)) {
        result = JSON.parse(localStorage[key]);
      }
    }
    return result;
  }
  function exportXlsxFile(filename, data) {
    const worksheet = XLSX__namespace.utils.json_to_sheet(data);
    const workbook = XLSX__namespace.utils.book_new();
    XLSX__namespace.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const wb_out = XLSX__namespace.write(workbook, { type: "buffer" });
    FileSaver.saveAs(new Blob([wb_out], { type: "application/octet-stream" }), filename);
  }
  function bytesToSize(size) {
    if (size < 0.1 * 1024) {
      size = size.toFixed(2) + "B";
    } else if (size < 0.1 * 1024 * 1024) {
      size = (size / 1024).toFixed(2) + "KB";
    } else if (size < 1 * 1024 * 1024 * 1024) {
      size = (size / (1024 * 1024)).toFixed(2) + "MB";
    } else {
      size = (size / (1024 * 1024 * 1024)).toFixed(2) + "GB";
    }
    let sizeStr = size + "", index2 = sizeStr.indexOf("."), dou = sizeStr.substr(index2 + 1, 2);
    if (dou == "00")
      return sizeStr.substring(0, index2) + sizeStr.substr(index2 + 3, 2);
    return size;
  }
  const CloudInfoStore = pinia.defineStore({
    id: "cloudinfo",
    state: () => ({
      currentCloud: "",
      //当前的网盘对应索引值
      cloudName: "",
      //网盘名字
      cloudKey: ""
      //网盘key
    }),
    actions: {
      //初始化网盘信息
      initCloudInfo() {
        const url = window.location.href;
        console.log("当前网址", url);
        const cloudKey = findCloudProvider(url, cloudUrlInfo) ?? "";
        console.log("所属网盘", cloudKey);
        if (!cloudKey) {
          console.error("初始化网盘信息出错");
          throw new Error("初始化网盘信息出错");
        }
        this.cloudKey = cloudKey;
        this.currentCloud = CloudInfoEnum[cloudKey];
        switch (this.currentCloud) {
          case CloudInfoEnum.cloudLanZou:
            {
              this.cloudName = "蓝奏云";
            }
            break;
          case CloudInfoEnum.cloudTianyi:
            {
              this.cloudName = "天翼云";
            }
            break;
          case CloudInfoEnum.cloudBaidu:
            {
              this.cloudName = "百度云";
            }
            break;
          case CloudInfoEnum.cloudBaiduSync:
            {
              this.cloudName = "百度云同步空间";
            }
            break;
          case CloudInfoEnum.cloud115:
            {
              this.cloudName = "115云";
            }
            break;
          case CloudInfoEnum.cloud123:
            {
              this.cloudName = "123云";
            }
            break;
          case CloudInfoEnum.cloudQuark:
            {
              this.cloudName = "夸克网盘";
            }
            break;
          case CloudInfoEnum.cloud139:
            {
              this.cloudName = "中国移动(139)网盘";
            }
            break;
          case CloudInfoEnum.cloudXun:
            {
              this.cloudName = "迅雷网盘";
            }
            break;
          case CloudInfoEnum.cloudAli:
            {
              this.cloudName = "阿里云盘";
            }
            break;
          case CloudInfoEnum.cloudUC:
            {
              this.cloudName = "UC网盘";
            }
            break;
          case CloudInfoEnum.cloudOnedrive:
            {
              this.cloudName = "Onedrive云盘";
            }
            break;
          default:
            this.cloudName = "未知网盘";
        }
      }
    }
  });
  const store = pinia.createPinia();
  const Pinia = (app) => {
    app.use(store);
  };
  const cloudInfoStore = CloudInfoStore(store);
  cloudInfoStore.initCloudInfo();
  var ExpireTimeEnum$9 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 1] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 7] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = 2099] = "forever";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$9 || {});
  var dayjs_min = { exports: {} };
  (function(module, exports) {
    !function(t, e) {
      module.exports = e();
    }(commonjsGlobal, function() {
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h2 = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date())
          return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h2, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2)
          return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1)
            return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2))
          return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2)
              return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2))
              return /* @__PURE__ */ new Date();
            if (e2 instanceof Date)
              return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h2:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h2] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h2) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else
            l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c)
            return this.set(c, this.$M + r2);
          if ($2 === h2)
            return this.set(h2, this.$y + r2);
          if ($2 === a)
            return y2(1);
          if ($2 === o)
            return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid())
            return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h3 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t3, r3) {
            return r3 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h3(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h3(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h3(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h3(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h2:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2)
            return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h2], ["$D", d]].forEach(function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    });
  })(dayjs_min);
  var dayjs_minExports = dayjs_min.exports;
  const dayjs = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
  const transformExcelInfoData$a = (data) => {
    return (data == null ? void 0 : data.map((item) => {
      let time = "";
      switch (item.expireTime) {
        case ExpireTimeEnum$9.oneDay:
          time = "1天";
          break;
        case ExpireTimeEnum$9.sevenDay:
          time = "7天";
          break;
        case ExpireTimeEnum$9.forever:
          time = "永久";
          break;
        default:
          time = "未知";
      }
      return {
        "文件名称": (item == null ? void 0 : item.fileName) ?? "",
        "分享链接": (item == null ? void 0 : item.url) ?? "",
        "提取码": (item == null ? void 0 : item.accessCode) ?? "",
        "有效期": time
      };
    })) ?? [];
  };
  const useTianyiCloud = () => {
    const userOptions = vue.ref({
      shareDelay: 500,
      expireTime: ExpireTimeEnum$9.forever,
      shareInfo: [],
      shareInfoUserSee: "",
      shareProgress: 0,
      selectFileInfoList: [],
      isSharing: false
    });
    const handleTransformFormat = (info) => {
      let time = "";
      switch (info.expireTime) {
        case ExpireTimeEnum$9.oneDay:
          time = "1天";
          break;
        case ExpireTimeEnum$9.sevenDay:
          time = "7天";
          break;
        case ExpireTimeEnum$9.forever:
          time = "永久";
          break;
        default:
          time = "未知";
      }
      return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.accessCode} 分享有效时间: ${time}`;
    };
    const handleTransformShareParams = (params) => {
      return {
        noCache: Math.random(),
        fileId: params.id,
        expireTime: params.expireTime,
        shareType: "3"
        //固定值
      };
    };
    const handleBatchOperation = async () => {
      var _a, _b, _c, _d, _e;
      const selectDOM = document.querySelectorAll((_a = ShareDOMSelect["cloudTianyi"]) == null ? void 0 : _a.select);
      if (!selectDOM.length) {
        return tdesignVueNext.MessagePlugin.warning("请选择要分享的文件!");
      }
      userOptions.value.isSharing = true;
      const currentShareInfo = [];
      for (let dom of selectDOM) {
        userOptions.value.selectFileInfoList.push({
          id: dom.getAttribute((_c = (_b = ShareDOMSelect["cloudTianyi"]) == null ? void 0 : _b.idAttribute) == null ? void 0 : _c[0]) ?? "",
          fileName: ((_e = dom.querySelector((_d = ShareDOMSelect["cloudTianyi"]) == null ? void 0 : _d.fileNameSelect)) == null ? void 0 : _e.textContent) ?? "(!!$$未知名称!!$$)",
          expireTime: userOptions.value.expireTime
        });
      }
      for (let fileInfo of userOptions.value.selectFileInfoList) {
        const { data: { shareLinkList } } = await axios({
          method: "get",
          url: window.location.origin + "/api/open/share/createShareLink.action",
          params: handleTransformShareParams(fileInfo),
          headers: {
            "accept": "application/json;charset=UTF-8"
          }
        }).catch(() => ({ data: { shareLinkList: [] } }));
        let tempData = {
          ...shareLinkList[0],
          ...fileInfo
        };
        userOptions.value.shareInfo.push(tempData);
        currentShareInfo.push(tempData);
        userOptions.value.shareInfoUserSee += handleTransformFormat(tempData) + "\n";
        userOptions.value.shareProgress = Math.floor(currentShareInfo.length / userOptions.value.selectFileInfoList.length * 100);
        await new Promise((resolve2) => {
          setTimeout(() => {
            resolve2();
          }, userOptions.value.shareDelay);
        });
      }
      userOptions.value.selectFileInfoList = [];
      userOptions.value.shareProgress = 100;
      userOptions.value.isSharing = false;
      await tdesignVueNext.MessagePlugin.success("批量分享成功,请自行查看结果");
    };
    const handleEnd = () => {
      userOptions.value.shareInfo = [];
      userOptions.value.selectFileInfoList = [];
      userOptions.value.shareInfoUserSee = "";
      userOptions.value.shareProgress = 0;
    };
    const copyValue = () => {
      CopyValueToClipBoard(userOptions.value.shareInfoUserSee + "").then(() => {
        tdesignVueNext.MessagePlugin.success("复制成功");
      }).catch(() => {
        tdesignVueNext.MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
      });
    };
    const download = () => {
      DownloadTxt(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}`, userOptions.value.shareInfoUserSee);
    };
    const downloadExcel = () => {
      exportXlsxFile(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}.xlsx`, transformExcelInfoData$a(userOptions.value.shareInfo));
    };
    return {
      userOptions,
      handleBatchOperation,
      handleTransformFormat,
      handleTransformShareParams,
      handleEnd,
      copyValue,
      download,
      downloadExcel
    };
  };
  const _hoisted_1$c = { class: "tianyiCloud" };
  const _hoisted_2$b = { class: "tianyiCloud_option" };
  const _hoisted_3$b = { class: "tianyiCloud_option_time" };
  const _hoisted_4$a = { class: "tianyiCloud_operation" };
  const _hoisted_5$9 = { class: "tianyiCloud_progress" };
  const _hoisted_6$9 = { class: "tianyiCloud_result" };
  const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props, { expose: __expose }) {
      const {
        userOptions,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
        downloadExcel
      } = useTianyiCloud();
      __expose({
        handleEnd
      });
      return (_ctx, _cache) => {
        const _component_t_radio_button = vue.resolveComponent("t-radio-button");
        const _component_t_radio_group = vue.resolveComponent("t-radio-group");
        const _component_t_tooltip = vue.resolveComponent("t-tooltip");
        const _component_t_input_number = vue.resolveComponent("t-input-number");
        const _component_t_button = vue.resolveComponent("t-button");
        const _component_t_space = vue.resolveComponent("t-space");
        const _component_t_progress = vue.resolveComponent("t-progress");
        const _component_t_textarea = vue.resolveComponent("t-textarea");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$c, [
          vue.createElementVNode("div", _hoisted_2$b, [
            _cache[6] || (_cache[6] = vue.createElementVNode("span", null, "有效期:", -1)),
            vue.createVNode(_component_t_radio_group, {
              modelValue: vue.unref(userOptions).expireTime,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(userOptions).expireTime = $event)
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_radio_button, {
                  value: vue.unref(ExpireTimeEnum$9).oneDay
                }, {
                  default: vue.withCtx(() => _cache[2] || (_cache[2] = [
                    vue.createTextVNode("1天")
                  ])),
                  _: 1
                }, 8, ["value"]),
                vue.createVNode(_component_t_radio_button, {
                  value: vue.unref(ExpireTimeEnum$9).sevenDay
                }, {
                  default: vue.withCtx(() => _cache[3] || (_cache[3] = [
                    vue.createTextVNode("7天")
                  ])),
                  _: 1
                }, 8, ["value"]),
                vue.createVNode(_component_t_radio_button, {
                  value: vue.unref(ExpireTimeEnum$9).forever
                }, {
                  default: vue.withCtx(() => _cache[4] || (_cache[4] = [
                    vue.createTextVNode("永久")
                  ])),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }, 8, ["modelValue"]),
            vue.createElementVNode("div", _hoisted_3$b, [
              vue.createVNode(_component_t_tooltip, { content: "分享一次后等待下一次分享的时间(避免请求频率过高)" }, {
                default: vue.withCtx(() => _cache[5] || (_cache[5] = [
                  vue.createTextVNode("延迟(毫秒):")
                ])),
                _: 1
              }),
              vue.createVNode(_component_t_input_number, {
                modelValue: vue.unref(userOptions).shareDelay,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(userOptions).shareDelay = $event),
                step: "100"
              }, null, 8, ["modelValue"])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_4$a, [
            vue.createVNode(_component_t_space, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_button, {
                  onClick: vue.unref(handleBatchOperation),
                  loading: vue.unref(userOptions).isSharing
                }, {
                  default: vue.withCtx(() => _cache[7] || (_cache[7] = [
                    vue.createTextVNode("批量分享")
                  ])),
                  _: 1
                }, 8, ["onClick", "loading"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(copyValue)
                }, {
                  default: vue.withCtx(() => _cache[8] || (_cache[8] = [
                    vue.createTextVNode("复制到剪贴板")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(download)
                }, {
                  default: vue.withCtx(() => _cache[9] || (_cache[9] = [
                    vue.createTextVNode("下载分享链接")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(downloadExcel)
                }, {
                  default: vue.withCtx(() => _cache[10] || (_cache[10] = [
                    vue.createTextVNode("下载信息为Excel")
                  ])),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", _hoisted_5$9, [
            vue.createVNode(_component_t_progress, {
              percentage: vue.unref(userOptions).shareProgress,
              color: { from: " #84fab0", to: "#00A870" }
            }, null, 8, ["percentage"])
          ]),
          vue.createElementVNode("div", _hoisted_6$9, [
            vue.createVNode(_component_t_textarea, {
              readonly: "",
              autosize: { minRows: 10 },
              value: vue.unref(userOptions).shareInfoUserSee,
              placeholder: "分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
            }, null, 8, ["value"])
          ])
        ]);
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const cloudTianyi = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-ce767d83"]]);
  var ExpireTimeEnum$8 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 1] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 7] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["thirtyDay"] = 30] = "thirtyDay";
    ExpireTimeEnum2[ExpireTimeEnum2["oneYear"] = 365] = "oneYear";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = 0] = "forever";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$8 || {});
  var HasPwdEnum$1 = /* @__PURE__ */ ((HasPwdEnum2) => {
    HasPwdEnum2[HasPwdEnum2["random"] = 0] = "random";
    HasPwdEnum2[HasPwdEnum2["self"] = 1] = "self";
    return HasPwdEnum2;
  })(HasPwdEnum$1 || {});
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  const transformExcelInfoData$9 = (data) => {
    return (data == null ? void 0 : data.map((item) => {
      let time = "";
      switch (item.expireTime) {
        case ExpireTimeEnum$8.oneDay:
          time = "1天";
          break;
        case ExpireTimeEnum$8.sevenDay:
          time = "7天";
          break;
        case ExpireTimeEnum$8.thirtyDay:
          time = "30天";
          break;
        case ExpireTimeEnum$8.forever:
          time = "永久";
          break;
        default:
          time = "未知";
      }
      return {
        "文件名称": (item == null ? void 0 : item.fileName) ?? "",
        "大小": (item == null ? void 0 : item.__size) ?? "",
        "分享链接": (item == null ? void 0 : item.link) ?? "",
        "提取码": (item == null ? void 0 : item.pwd) ?? "",
        "有效期": time
      };
    })) ?? [];
  };
  const useBaiduCloud$1 = () => {
    const userOptions = vue.ref({
      shareDelay: 300,
      expireTime: ExpireTimeEnum$8.forever,
      shareInfo: [],
      shareInfoUserSee: "",
      shareProgress: 0,
      selectFileInfoList: [],
      isSharing: false,
      pwdType: HasPwdEnum$1.random,
      pwd: ""
    });
    const handleTransformFormat = (info) => {
      let time = "";
      switch (info.expireTime) {
        case ExpireTimeEnum$8.oneDay:
          time = "1天";
          break;
        case ExpireTimeEnum$8.sevenDay:
          time = "7天";
          break;
        case ExpireTimeEnum$8.thirtyDay:
          time = "30天";
          break;
        case ExpireTimeEnum$8.forever:
          time = "永久";
          break;
        default:
          time = "未知";
      }
      return (info == null ? void 0 : info.__size) ? `文件名称: ${info.fileName} 文件大小: ${info.__size} 分享链接:${info.link} 提取码:${info.pwd} 分享有效时间: ${time}` : `文件名称: ${info.fileName}  分享链接:${info.link} 提取码:${info.pwd} 分享有效时间: ${time}`;
    };
    const handleBatchOperation = async () => {
      var _a, _b, _c, _d, _e, _f;
      let selectDOM = document.querySelector("tbody");
      selectDOM = ((_e = (_d = (_c = (_b = (_a = selectDOM == null ? void 0 : selectDOM.__vue__) == null ? void 0 : _a.$store) == null ? void 0 : _b.state) == null ? void 0 : _c.detail) == null ? void 0 : _d.view) == null ? void 0 : _e.fileMeta) ?? [];
      if (!(selectDOM == null ? void 0 : selectDOM.length)) {
        return tdesignVueNext.MessagePlugin.warning("请选择要分享的文件!");
      }
      if (userOptions.value.pwdType === HasPwdEnum$1.self && !userOptions.value.pwd) {
        return tdesignVueNext.MessagePlugin.warning("选择自定义提取码,请设置提取码!");
      }
      userOptions.value.isSharing = true;
      const currentShareInfo = [];
      for (let item of selectDOM) {
        userOptions.value.selectFileInfoList.push({
          id: item.fs_id,
          //存储文件id
          fileName: item.formatName,
          //文件名称
          pwd: userOptions.value.pwdType === HasPwdEnum$1.random ? generateRandomString(4) : userOptions.value.pwd,
          expireTime: userOptions.value.expireTime,
          __size: item.size
        });
      }
      for (let fileInfo of userOptions.value.selectFileInfoList) {
        const { locals } = _unsafeWindow ?? {};
        const { data } = await axios({
          method: "post",
          url: window.location.origin + "/share/set",
          params: {
            channel: "chunlei",
            clienttype: "0",
            bdstoken: (_f = locals == null ? void 0 : locals.userInfo) == null ? void 0 : _f.bdstoken,
            app_id: "250528",
            //未知-好像是定值
            web: 1
            //'dp-logid':'96456600647322280113',//未知
          },
          data: {
            period: fileInfo.expireTime,
            pwd: fileInfo.pwd,
            "eflag_disable": true,
            //不知道是什么参数,好像是分享类型eflag_disable: "personal" === e.shareType
            channel_list: [],
            //未知
            schannel: 4,
            //未知-貌似是一个定制
            fid_list: `[${fileInfo.id}]`
            //文件id
          },
          headers: {
            "accept": "application/json;charset=UTF-8",
            "Content-Type": " application/x-www-form-urlencoded"
          }
        }).catch(() => ({}));
        let tempData = {
          ...data,
          ...fileInfo,
          __size: bytesToSize(fileInfo.__size)
        };
        userOptions.value.shareInfo.push(tempData);
        currentShareInfo.push(tempData);
        userOptions.value.shareInfoUserSee += handleTransformFormat(tempData) + "\n";
        userOptions.value.shareProgress = Math.floor(currentShareInfo.length / userOptions.value.selectFileInfoList.length * 100);
        await new Promise((resolve2) => {
          setTimeout(() => {
            resolve2();
          }, userOptions.value.shareDelay);
        });
      }
      userOptions.value.shareProgress = 100;
      userOptions.value.selectFileInfoList = [];
      userOptions.value.isSharing = false;
      await tdesignVueNext.MessagePlugin.success("批量分享成功,请自行查看结果");
    };
    const handleEnd = () => {
      userOptions.value.shareInfo = [];
      userOptions.value.selectFileInfoList = [];
      userOptions.value.shareInfoUserSee = "";
      userOptions.value.shareProgress = 0;
    };
    const copyValue = () => {
      CopyValueToClipBoard(userOptions.value.shareInfoUserSee + "").then(() => {
        tdesignVueNext.MessagePlugin.success("复制成功");
      }).catch(() => {
        tdesignVueNext.MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
      });
    };
    const download = () => {
      DownloadTxt(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}`, userOptions.value.shareInfoUserSee);
    };
    const downloadExcel = () => {
      exportXlsxFile(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}.xlsx`, transformExcelInfoData$9(userOptions.value.shareInfo));
    };
    return {
      userOptions,
      handleBatchOperation,
      handleTransformFormat,
      handleEnd,
      copyValue,
      download,
      downloadExcel
    };
  };
  const _hoisted_1$b = { class: "baiduCloud" };
  const _hoisted_2$a = { class: "baiduCloud_option" };
  const _hoisted_3$a = { class: "baiduCloud_option_item" };
  const _hoisted_4$9 = { class: "baiduCloud_option_item" };
  const _hoisted_5$8 = {
    key: 0,
    style: { "margin-top": "4px" }
  };
  const _hoisted_6$8 = { class: "baiduCloud_operation" };
  const _hoisted_7$8 = { class: "baiduCloud_progress" };
  const _hoisted_8$6 = { class: "baiduCloud_result" };
  const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props, { expose: __expose }) {
      const {
        userOptions,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
        downloadExcel
      } = useBaiduCloud$1();
      __expose({
        handleEnd
      });
      return (_ctx, _cache) => {
        const _component_t_radio_button = vue.resolveComponent("t-radio-button");
        const _component_t_radio_group = vue.resolveComponent("t-radio-group");
        const _component_t_tooltip = vue.resolveComponent("t-tooltip");
        const _component_t_input_number = vue.resolveComponent("t-input-number");
        const _component_t_input = vue.resolveComponent("t-input");
        const _component_t_button = vue.resolveComponent("t-button");
        const _component_t_space = vue.resolveComponent("t-space");
        const _component_t_progress = vue.resolveComponent("t-progress");
        const _component_t_textarea = vue.resolveComponent("t-textarea");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$b, [
          vue.createElementVNode("div", _hoisted_2$a, [
            vue.createElementVNode("div", _hoisted_3$a, [
              _cache[10] || (_cache[10] = vue.createElementVNode("span", null, "有效期:", -1)),
              vue.createVNode(_component_t_radio_group, {
                modelValue: vue.unref(userOptions).expireTime,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(userOptions).expireTime = $event)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$8).oneDay
                  }, {
                    default: vue.withCtx(() => _cache[4] || (_cache[4] = [
                      vue.createTextVNode("1天")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$8).sevenDay
                  }, {
                    default: vue.withCtx(() => _cache[5] || (_cache[5] = [
                      vue.createTextVNode("7天")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$8).thirtyDay
                  }, {
                    default: vue.withCtx(() => _cache[6] || (_cache[6] = [
                      vue.createTextVNode("30天")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$8).oneYear
                  }, {
                    default: vue.withCtx(() => _cache[7] || (_cache[7] = [
                      vue.createTextVNode("365天")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$8).forever
                  }, {
                    default: vue.withCtx(() => _cache[8] || (_cache[8] = [
                      vue.createTextVNode("永久")
                    ])),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              }, 8, ["modelValue"]),
              vue.createElementVNode("div", null, [
                vue.createVNode(_component_t_tooltip, { content: "分享一次后等待下一次分享的时间(避免请求频率过高)" }, {
                  default: vue.withCtx(() => _cache[9] || (_cache[9] = [
                    vue.createTextVNode(" 延迟(毫秒):")
                  ])),
                  _: 1
                }),
                vue.createVNode(_component_t_input_number, {
                  modelValue: vue.unref(userOptions).shareDelay,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(userOptions).shareDelay = $event),
                  step: "100"
                }, null, 8, ["modelValue"])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_4$9, [
              _cache[13] || (_cache[13] = vue.createElementVNode("span", null, "提取码:", -1)),
              vue.createVNode(_component_t_radio_group, {
                modelValue: vue.unref(userOptions).pwdType,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(userOptions).pwdType = $event)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(HasPwdEnum$1).random
                  }, {
                    default: vue.withCtx(() => _cache[11] || (_cache[11] = [
                      vue.createTextVNode("随机提取码")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(HasPwdEnum$1).self
                  }, {
                    default: vue.withCtx(() => _cache[12] || (_cache[12] = [
                      vue.createTextVNode("自定义提取码")
                    ])),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              }, 8, ["modelValue"]),
              vue.unref(userOptions).pwdType === vue.unref(HasPwdEnum$1).self ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$8, [
                vue.createVNode(_component_t_input, {
                  modelValue: vue.unref(userOptions).pwd,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.unref(userOptions).pwd = $event),
                  placeholder: "请输入自定义提取码(只支持数字和英文,最长4位)",
                  maxlength: "4"
                }, null, 8, ["modelValue"])
              ])) : vue.createCommentVNode("", true)
            ])
          ]),
          vue.createElementVNode("div", _hoisted_6$8, [
            vue.createVNode(_component_t_space, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_button, {
                  onClick: vue.unref(handleBatchOperation),
                  loading: vue.unref(userOptions).isSharing
                }, {
                  default: vue.withCtx(() => _cache[14] || (_cache[14] = [
                    vue.createTextVNode("批量分享")
                  ])),
                  _: 1
                }, 8, ["onClick", "loading"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(copyValue)
                }, {
                  default: vue.withCtx(() => _cache[15] || (_cache[15] = [
                    vue.createTextVNode("复制到剪贴板")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(download)
                }, {
                  default: vue.withCtx(() => _cache[16] || (_cache[16] = [
                    vue.createTextVNode("下载分享链接")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(downloadExcel)
                }, {
                  default: vue.withCtx(() => _cache[17] || (_cache[17] = [
                    vue.createTextVNode("下载信息为Excel")
                  ])),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", _hoisted_7$8, [
            vue.createVNode(_component_t_progress, {
              percentage: vue.unref(userOptions).shareProgress,
              color: { from: " #84fab0", to: "#00A870" }
            }, null, 8, ["percentage"])
          ]),
          vue.createElementVNode("div", _hoisted_8$6, [
            vue.createVNode(_component_t_textarea, {
              readonly: "",
              autosize: { minRows: 10 },
              value: vue.unref(userOptions).shareInfoUserSee,
              placeholder: "分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
            }, null, 8, ["value"])
          ])
        ]);
      };
    }
  });
  const cloudBaidu = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-cb3cc612"]]);
  var ExpireTimeEnum$7 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 1] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 7] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["thirtyDay"] = 30] = "thirtyDay";
    ExpireTimeEnum2[ExpireTimeEnum2["oneYear"] = 365] = "oneYear";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = 0] = "forever";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$7 || {});
  var HasPwdEnum = /* @__PURE__ */ ((HasPwdEnum2) => {
    HasPwdEnum2[HasPwdEnum2["random"] = 0] = "random";
    HasPwdEnum2[HasPwdEnum2["self"] = 1] = "self";
    return HasPwdEnum2;
  })(HasPwdEnum || {});
  const transformExcelInfoData$8 = (data) => {
    return (data == null ? void 0 : data.map((item) => {
      let time = "";
      switch (item.expireTime) {
        case ExpireTimeEnum$7.oneDay:
          time = "1天";
          break;
        case ExpireTimeEnum$7.sevenDay:
          time = "7天";
          break;
        case ExpireTimeEnum$7.thirtyDay:
          time = "30天";
          break;
        case ExpireTimeEnum$7.forever:
          time = "永久";
          break;
        default:
          time = "未知";
      }
      return {
        "文件名称": (item == null ? void 0 : item.fileName) ?? "",
        "大小": (item == null ? void 0 : item.__size) ?? "",
        "分享链接": (item == null ? void 0 : item.link) ?? "",
        "提取码": (item == null ? void 0 : item.pwd) ?? "",
        "有效期": time
      };
    })) ?? [];
  };
  const useBaiduCloud = () => {
    const userOptions = vue.ref({
      shareDelay: 300,
      expireTime: ExpireTimeEnum$7.forever,
      shareInfo: [],
      shareInfoUserSee: "",
      shareProgress: 0,
      selectFileInfoList: [],
      isSharing: false,
      pwdType: HasPwdEnum.random,
      pwd: ""
    });
    const handleTransformFormat = (info) => {
      let time = "";
      switch (info.expireTime) {
        case ExpireTimeEnum$7.oneDay:
          time = "1天";
          break;
        case ExpireTimeEnum$7.sevenDay:
          time = "7天";
          break;
        case ExpireTimeEnum$7.thirtyDay:
          time = "30天";
          break;
        case ExpireTimeEnum$7.forever:
          time = "永久";
          break;
        default:
          time = "未知";
      }
      return (info == null ? void 0 : info.__size) ? `文件名称: ${info.fileName} 文件大小: ${info.__size} 分享链接:${info.link} 提取码:${info.pwd} 分享有效时间: ${time}` : `文件名称: ${info.fileName}  分享链接:${info.link} 提取码:${info.pwd} 分享有效时间: ${time}`;
    };
    const handleBatchOperation = async () => {
      var _a, _b;
      let selectDOM = document.querySelector(".nd-main-layout__body .nd-main-list");
      selectDOM = ((_a = selectDOM == null ? void 0 : selectDOM.__vue__) == null ? void 0 : _a.selectedList) ?? [];
      if (!(selectDOM == null ? void 0 : selectDOM.length)) {
        return tdesignVueNext.MessagePlugin.warning("请选择要分享的文件!");
      }
      if (userOptions.value.pwdType === HasPwdEnum.self && !userOptions.value.pwd) {
        return tdesignVueNext.MessagePlugin.warning("选择自定义提取码,请设置提取码!");
      }
      userOptions.value.isSharing = true;
      const currentShareInfo = [];
      for (let item of selectDOM) {
        userOptions.value.selectFileInfoList.push({
          id: item.fs_id,
          //存储文件id
          fileName: item.formatName,
          //文件名称
          pwd: userOptions.value.pwdType === HasPwdEnum.random ? generateRandomString(4) : userOptions.value.pwd,
          expireTime: userOptions.value.expireTime,
          __size: item.size
        });
      }
      for (let fileInfo of userOptions.value.selectFileInfoList) {
        const { locals } = _unsafeWindow ?? {};
        const { data } = await axios({
          method: "post",
          url: window.location.origin + "/share/set",
          params: {
            channel: "chunlei",
            clienttype: "0",
            bdstoken: (_b = locals == null ? void 0 : locals.userInfo) == null ? void 0 : _b.bdstoken,
            app_id: "250528",
            //未知-好像是定值
            web: 1
            //'dp-logid':'96456600647322280113',//未知
          },
          data: {
            period: fileInfo.expireTime,
            pwd: fileInfo.pwd,
            channel_list: [],
            //未知
            schannel: 4,
            //未知-貌似是一个定制
            fid_list: `[${fileInfo.id}]`
            //文件id
          },
          headers: {
            "accept": "application/json;charset=UTF-8",
            "Content-Type": " application/x-www-form-urlencoded"
          }
        }).catch(() => ({}));
        let tempData = {
          ...data,
          ...fileInfo,
          __size: bytesToSize(fileInfo.__size)
        };
        userOptions.value.shareInfo.push(tempData);
        currentShareInfo.push(tempData);
        userOptions.value.shareInfoUserSee += handleTransformFormat(tempData) + "\n";
        userOptions.value.shareProgress = Math.floor(currentShareInfo.length / userOptions.value.selectFileInfoList.length * 100);
        await new Promise((resolve2) => {
          setTimeout(() => {
            resolve2();
          }, userOptions.value.shareDelay);
        });
      }
      userOptions.value.shareProgress = 100;
      userOptions.value.selectFileInfoList = [];
      userOptions.value.isSharing = false;
      await tdesignVueNext.MessagePlugin.success("批量分享成功,请自行查看结果");
    };
    const handleEnd = () => {
      userOptions.value.shareInfo = [];
      userOptions.value.selectFileInfoList = [];
      userOptions.value.shareInfoUserSee = "";
      userOptions.value.shareProgress = 0;
    };
    const copyValue = () => {
      CopyValueToClipBoard(userOptions.value.shareInfoUserSee + "").then(() => {
        tdesignVueNext.MessagePlugin.success("复制成功");
      }).catch(() => {
        tdesignVueNext.MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
      });
    };
    const download = () => {
      DownloadTxt(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}`, userOptions.value.shareInfoUserSee);
    };
    const downloadExcel = () => {
      exportXlsxFile(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}.xlsx`, transformExcelInfoData$8(userOptions.value.shareInfo));
    };
    return {
      userOptions,
      handleBatchOperation,
      handleTransformFormat,
      handleEnd,
      copyValue,
      download,
      downloadExcel
    };
  };
  const _hoisted_1$a = { class: "baiduCloud" };
  const _hoisted_2$9 = { class: "baiduCloud_option" };
  const _hoisted_3$9 = { class: "baiduCloud_option_item" };
  const _hoisted_4$8 = { class: "baiduCloud_option_item" };
  const _hoisted_5$7 = {
    key: 0,
    style: { "margin-top": "4px" }
  };
  const _hoisted_6$7 = { class: "baiduCloud_operation" };
  const _hoisted_7$7 = { class: "baiduCloud_progress" };
  const _hoisted_8$5 = { class: "baiduCloud_result" };
  const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props, { expose: __expose }) {
      const {
        userOptions,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
        downloadExcel
      } = useBaiduCloud();
      __expose({
        handleEnd
      });
      return (_ctx, _cache) => {
        const _component_t_radio_button = vue.resolveComponent("t-radio-button");
        const _component_t_radio_group = vue.resolveComponent("t-radio-group");
        const _component_t_tooltip = vue.resolveComponent("t-tooltip");
        const _component_t_input_number = vue.resolveComponent("t-input-number");
        const _component_t_input = vue.resolveComponent("t-input");
        const _component_t_button = vue.resolveComponent("t-button");
        const _component_t_space = vue.resolveComponent("t-space");
        const _component_t_progress = vue.resolveComponent("t-progress");
        const _component_t_textarea = vue.resolveComponent("t-textarea");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$a, [
          vue.createElementVNode("div", _hoisted_2$9, [
            vue.createElementVNode("div", _hoisted_3$9, [
              _cache[10] || (_cache[10] = vue.createElementVNode("span", null, "有效期:", -1)),
              vue.createVNode(_component_t_radio_group, {
                modelValue: vue.unref(userOptions).expireTime,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(userOptions).expireTime = $event)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$7).oneDay
                  }, {
                    default: vue.withCtx(() => _cache[4] || (_cache[4] = [
                      vue.createTextVNode("1天")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$7).sevenDay
                  }, {
                    default: vue.withCtx(() => _cache[5] || (_cache[5] = [
                      vue.createTextVNode("7天")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$7).thirtyDay
                  }, {
                    default: vue.withCtx(() => _cache[6] || (_cache[6] = [
                      vue.createTextVNode("30天")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$7).oneYear
                  }, {
                    default: vue.withCtx(() => _cache[7] || (_cache[7] = [
                      vue.createTextVNode("365天")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$7).forever
                  }, {
                    default: vue.withCtx(() => _cache[8] || (_cache[8] = [
                      vue.createTextVNode("永久")
                    ])),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              }, 8, ["modelValue"]),
              vue.createElementVNode("div", null, [
                vue.createVNode(_component_t_tooltip, { content: "分享一次后等待下一次分享的时间(避免请求频率过高)" }, {
                  default: vue.withCtx(() => _cache[9] || (_cache[9] = [
                    vue.createTextVNode(" 延迟(毫秒):")
                  ])),
                  _: 1
                }),
                vue.createVNode(_component_t_input_number, {
                  modelValue: vue.unref(userOptions).shareDelay,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(userOptions).shareDelay = $event),
                  step: "100"
                }, null, 8, ["modelValue"])
              ])
            ]),
            vue.createElementVNode("div", _hoisted_4$8, [
              _cache[13] || (_cache[13] = vue.createElementVNode("span", null, "提取码:", -1)),
              vue.createVNode(_component_t_radio_group, {
                modelValue: vue.unref(userOptions).pwdType,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(userOptions).pwdType = $event)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(HasPwdEnum).random
                  }, {
                    default: vue.withCtx(() => _cache[11] || (_cache[11] = [
                      vue.createTextVNode("随机提取码")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(HasPwdEnum).self
                  }, {
                    default: vue.withCtx(() => _cache[12] || (_cache[12] = [
                      vue.createTextVNode("自定义提取码")
                    ])),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              }, 8, ["modelValue"]),
              vue.unref(userOptions).pwdType === vue.unref(HasPwdEnum).self ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$7, [
                vue.createVNode(_component_t_input, {
                  modelValue: vue.unref(userOptions).pwd,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.unref(userOptions).pwd = $event),
                  placeholder: "请输入自定义提取码(只支持数字和英文,最长4位)",
                  maxlength: "4"
                }, null, 8, ["modelValue"])
              ])) : vue.createCommentVNode("", true)
            ])
          ]),
          vue.createElementVNode("div", _hoisted_6$7, [
            vue.createVNode(_component_t_space, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_button, {
                  onClick: vue.unref(handleBatchOperation),
                  loading: vue.unref(userOptions).isSharing
                }, {
                  default: vue.withCtx(() => _cache[14] || (_cache[14] = [
                    vue.createTextVNode("批量分享")
                  ])),
                  _: 1
                }, 8, ["onClick", "loading"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(copyValue)
                }, {
                  default: vue.withCtx(() => _cache[15] || (_cache[15] = [
                    vue.createTextVNode("复制到剪贴板")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(download)
                }, {
                  default: vue.withCtx(() => _cache[16] || (_cache[16] = [
                    vue.createTextVNode("下载分享链接")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(downloadExcel)
                }, {
                  default: vue.withCtx(() => _cache[17] || (_cache[17] = [
                    vue.createTextVNode("下载信息为Excel")
                  ])),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", _hoisted_7$7, [
            vue.createVNode(_component_t_progress, {
              percentage: vue.unref(userOptions).shareProgress,
              color: { from: " #84fab0", to: "#00A870" }
            }, null, 8, ["percentage"])
          ]),
          vue.createElementVNode("div", _hoisted_8$5, [
            vue.createVNode(_component_t_textarea, {
              readonly: "",
              autosize: { minRows: 10 },
              value: vue.unref(userOptions).shareInfoUserSee,
              placeholder: "分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
            }, null, 8, ["value"])
          ])
        ]);
      };
    }
  });
  const cloudBaiduSync = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-1c3aed36"]]);
  var ExpireTimeEnum$6 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 1] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["threeDay"] = 3] = "threeDay";
    ExpireTimeEnum2[ExpireTimeEnum2["fiveDay"] = 5] = "fiveDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 7] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["fifteen"] = 15] = "fifteen";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = -1] = "forever";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$6 || {});
  const transformExcelInfoData$7 = (data) => {
    const timeText = {
      [ExpireTimeEnum$6.oneDay]: "1天",
      [ExpireTimeEnum$6.threeDay]: "3天",
      [ExpireTimeEnum$6.fiveDay]: "5天",
      [ExpireTimeEnum$6.sevenDay]: "7天",
      [ExpireTimeEnum$6.fifteen]: "15",
      [ExpireTimeEnum$6.forever]: "永久"
    };
    return (data == null ? void 0 : data.map((item) => {
      return {
        文件名称: item.fileName ?? "",
        文件大小: item.fileSize ?? "",
        分享链接: item.share_url ?? "",
        提取码: item.receive_code ?? "",
        有效期: timeText[item.share_duration],
        分享链接自动填充访问码: Number(item.auto_fill_recvcode) === 1 ? "开启" : "关闭",
        接收次数: item.receive_user_limit ? item.receive_user_limit : "不限制",
        允许免登录下载: Number(item.skip_login) === 1 ? "开启" : "关闭",
        免登录下载的总流量: Number(item.skip_login_down_flow_limit) ? Math.round(Number(item.skip_login_down_flow_limit) / 1024) + "KB" : "不限制"
      };
    })) ?? [];
  };
  const use115Cloud = () => {
    const shareDelay = vue.ref(500);
    const formDataInput = vue.ref({
      time: ExpireTimeEnum$6.forever,
      passcode: "",
      autoFillRecvcode: 1,
      //是否自动填充访问码
      receiveUserLimit: null,
      //接收次数
      skipLogin: 0,
      //是否允许免登录下载
      skipLoginDownFlowLimit: null
      //允许免登录下载的总流量
    });
    const shareInfo = vue.ref([]);
    const shareInfoUserSee = vue.ref("");
    const shareProgress = vue.ref(0);
    const selectFileInfoList = vue.ref([]);
    const isSharing = vue.ref(false);
    const handleTransformFormat = (info) => {
      const timeText = {
        [ExpireTimeEnum$6.oneDay]: "1天",
        [ExpireTimeEnum$6.threeDay]: "3天",
        [ExpireTimeEnum$6.fiveDay]: "5天",
        [ExpireTimeEnum$6.sevenDay]: "7天",
        [ExpireTimeEnum$6.fifteen]: "15",
        [ExpireTimeEnum$6.forever]: "永久"
      };
      return `文件名称: ${info.fileName} 分享链接:${info.share_url} 提取码:${info.receive_code}分享链接自动填充访问码:${Number(info.auto_fill_recvcode) === 1 ? "开启" : "关闭"} 接收次数:${info.receive_user_limit ? info.receive_user_limit : "不限制"} 允许免登录下载:${Number(info.skip_login) === 1 ? "开启" : "关闭"} 免登录下载的总流量:${Number(info.skip_login_down_flow_limit) ? Math.round(Number(info.skip_login_down_flow_limit) / 1024) + "KB" : "不限制"} 分享有效时间: ${timeText[info.share_duration]}`;
    };
    const handleGetFolderSize = (id) => {
      return new Promise((resolve2, reject2) => {
        _GM_xmlhttpRequest({
          method: "get",
          url: `https://webapi.115.com/category/get?cid=${id}`,
          onload: ({ response }) => {
            const result = JSON.parse(response);
            resolve2((result == null ? void 0 : result.size) ?? "NA");
          }
        });
      });
    };
    const handleTransformFormatVersion2 = (info) => {
      if (info.receive_code && formDataInput.value.autoFillRecvcode === 1) {
        return `${info.fileName}[${info.fileSize}]$${info.share_url}?password=${info.receive_code}&#`;
      } else if (info.receive_code) {
        return `${info.fileName}[${info.fileSize}]$${info.receive_code}$${info.share_url}`;
      } else {
        return `${info.fileName}[${info.fileSize}]$${info.share_url}`;
      }
    };
    const handleBatchOperation = async () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const iframe = document.querySelector("iframe");
      const iframeWindow = iframe.contentWindow ?? _unsafeWindow;
      const selectDOM = iframeWindow.document.querySelectorAll(
        (_a = ShareDOMSelect["cloud115"]) == null ? void 0 : _a.select
      );
      if (!selectDOM.length) {
        return tdesignVueNext.MessagePlugin.warning("请选择要分享的文件!");
      }
      isSharing.value = true;
      shareProgress.value = 0;
      selectFileInfoList.value = [];
      for (let dom of selectDOM) {
        let id = "";
        let type = "";
        if (dom.getAttribute((_c = (_b = ShareDOMSelect["cloud115"]) == null ? void 0 : _b.idAttribute) == null ? void 0 : _c[0])) {
          id = dom.getAttribute(
            (_e = (_d = ShareDOMSelect["cloud115"]) == null ? void 0 : _d.idAttribute) == null ? void 0 : _e[0]
          ) ?? "";
          type = "file";
        } else if (dom.getAttribute((_g = (_f = ShareDOMSelect["cloud115"]) == null ? void 0 : _f.idAttribute) == null ? void 0 : _g[1])) {
          id = dom.getAttribute(
            (_i = (_h = ShareDOMSelect["cloud115"]) == null ? void 0 : _h.idAttribute) == null ? void 0 : _i[1]
          ) ?? "";
          type = "folder";
        }
        const title = dom.getAttribute("title");
        selectFileInfoList.value.push({
          id,
          //存储文件id
          fileSize: dom.getAttribute("file_size") ? bytesToSize(Number(dom.getAttribute("file_size"))) : "NA",
          fileName: title ?? "(!!$$未知名称!!$$)",
          //文件名称
          fileType: type
          //文件类型
        });
      }
      for (let fileInfo of selectFileInfoList.value) {
        const formData = new FormData();
        let fileSize = "";
        if (fileInfo.fileType === "file") {
          fileSize = fileInfo.fileSize;
        } else if (fileInfo.fileType === "folder") {
          fileSize = await handleGetFolderSize(fileInfo.id);
        }
        const { user_id } = _unsafeWindow || {};
        formData.append("user_id", user_id);
        formData.append("file_ids", fileInfo.id + "");
        formData.append("ignore_warn", "1");
        formData.append("is_asc", "0");
        formData.append("order", "user_ptime");
        _GM_xmlhttpRequest({
          method: "post",
          url: "https://webapi.115.com/share/send",
          headers: {
            Accept: "application/json, text/javascript, */*; q=0.01"
          },
          data: formData,
          onload: ({ response }) => {
            const result = JSON.parse(response);
            let tempData = {
              ...result.data || {},
              fileName: fileInfo.fileName,
              // fileSize: fileInfo.fileSize,
              fileSize
            };
            const formDataUpdate = new FormData();
            const info = {
              auto_fill_recvcode: formDataInput.value.autoFillRecvcode,
              //分享链接自动填充访问码-传入0则关闭,1则开启
              receive_user_limit: formDataInput.value.receiveUserLimit ? formDataInput.value.receiveUserLimit : "",
              //接收次数-不传则不限制,传入数字则限制
              skip_login: formDataInput.value.skipLogin,
              //允许免登录下载 传入0关闭 1开启,
              skip_login_down_flow_limit: formDataInput.value.skipLoginDownFlowLimit ? formDataInput.value.skipLoginDownFlowLimit * 1024 : "",
              //免登录下载限制 - 大小  * 1024 B 不传则不限制
              share_duration: formDataInput.value.time
            };
            formDataUpdate.append("share_code", tempData.share_code);
            formDataUpdate.append("auto_fill_recvcode", info.auto_fill_recvcode);
            formDataUpdate.append("receive_user_limit", info.receive_user_limit);
            formDataUpdate.append("share_duration", info.share_duration);
            const skipLoginForm = new FormData();
            skipLoginForm.append("share_code", tempData.share_code);
            if (info.skip_login * 1 === 1) {
              skipLoginForm.append("skip_login", info.skip_login);
              skipLoginForm.append(
                "skip_login_down_flow_limit",
                info.skip_login_down_flow_limit
              );
            } else {
              skipLoginForm.append("skip_login", info.skip_login);
            }
            if (formDataInput.value.passcode) {
              formDataUpdate.append("receive_code", formDataInput.value.passcode);
              formDataUpdate.append("is_custom_code", "1");
              tempData.receive_code = formDataInput.value.passcode;
            }
            _GM_xmlhttpRequest({
              method: "post",
              url: "https://webapi.115.com/share/updateshare",
              headers: {
                Accept: "application/json, text/javascript, */*; q=0.01"
              },
              data: formDataUpdate,
              onload: ({ response: responseTwice }) => {
                tempData = {
                  ...tempData,
                  ...info
                };
                shareInfo.value.push(tempData);
                _GM_xmlhttpRequest({
                  method: "post",
                  url: "https://webapi.115.com/share/skip_login_down",
                  headers: {
                    Accept: "application/json, text/javascript, */*; q=0.01"
                  },
                  data: skipLoginForm,
                  onload: ({ response: responseThree }) => {
                    shareInfoUserSee.value += handleTransformFormat(tempData) + "\n";
                    shareProgress.value = Math.floor(
                      shareInfo.value.length / selectFileInfoList.value.length * 100
                    );
                  },
                  onerror: (res) => {
                    console.error("二次更新失败", res);
                  }
                });
              },
              onerror: (res) => {
                console.error("二次更新失败", res);
              }
            });
          },
          onerror: (res) => {
            console.error("失败", res);
          }
        });
        await new Promise((resolve2) => {
          setTimeout(() => {
            resolve2();
          }, shareDelay.value);
        });
      }
      shareProgress.value = 100;
      isSharing.value = false;
      tdesignVueNext.MessagePlugin.success("批量分享成功,请自行查看结果");
    };
    const handleEnd = () => {
      shareInfo.value = [];
      shareInfoUserSee.value = "";
      shareProgress.value = 0;
      selectFileInfoList.value = [];
    };
    const copyValue = () => {
      CopyValueToClipBoard(shareInfoUserSee.value + "").then(() => {
        tdesignVueNext.MessagePlugin.success("复制成功");
      }).catch(() => {
        tdesignVueNext.MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
      });
    };
    const download = () => {
      DownloadTxt(
        `${cloudInfoStore.cloudName}批量分享-${dayjs().format(
        "YYYY-MM-DD HH:mm:ss"
      )}`,
        shareInfoUserSee.value
      );
    };
    const downloadVersion2 = () => {
      let tempData = "";
      for (const temp of shareInfo.value) {
        tempData += handleTransformFormatVersion2(temp) + "\n";
      }
      DownloadTxt(
        `${cloudInfoStore.cloudName}批量分享-${dayjs().format(
        "YYYY-MM-DD HH:mm:ss"
      )}`,
        tempData
      );
    };
    const downloadExcel = () => {
      exportXlsxFile(
        `${cloudInfoStore.cloudName}批量分享-${dayjs().format(
        "YYYY-MM-DD HH:mm:ss"
      )}.xlsx`,
        transformExcelInfoData$7(shareInfo.value)
      );
    };
    return {
      shareDelay,
      formDataInput,
      shareInfo,
      selectFileInfoList,
      shareInfoUserSee,
      isSharing,
      shareProgress,
      handleBatchOperation,
      downloadVersion2,
      handleTransformFormat,
      downloadExcel,
      handleEnd,
      copyValue,
      download
    };
  };
  const _hoisted_1$9 = { class: "cloud115" };
  const _hoisted_2$8 = { class: "cloud115_progress" };
  const _hoisted_3$8 = { class: "cloud115_result" };
  const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props, { expose: __expose }) {
      const {
        shareDelay,
        isSharing,
        shareInfoUserSee,
        shareProgress,
        formDataInput,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
        downloadVersion2,
        downloadExcel
      } = use115Cloud();
      __expose({
        handleEnd
      });
      return (_ctx, _cache) => {
        const _component_t_button = vue.resolveComponent("t-button");
        const _component_t_space = vue.resolveComponent("t-space");
        const _component_t_progress = vue.resolveComponent("t-progress");
        const _component_t_tooltip = vue.resolveComponent("t-tooltip");
        const _component_t_input_number = vue.resolveComponent("t-input-number");
        const _component_t_form_item = vue.resolveComponent("t-form-item");
        const _component_t_radio_button = vue.resolveComponent("t-radio-button");
        const _component_t_radio_group = vue.resolveComponent("t-radio-group");
        const _component_t_input = vue.resolveComponent("t-input");
        const _component_t_switch = vue.resolveComponent("t-switch");
        const _component_t_form = vue.resolveComponent("t-form");
        const _component_t_collapse_panel = vue.resolveComponent("t-collapse-panel");
        const _component_t_textarea = vue.resolveComponent("t-textarea");
        const _component_t_collapse = vue.resolveComponent("t-collapse");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$9, [
          vue.createVNode(_component_t_space, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_t_button, {
                onClick: vue.unref(handleBatchOperation),
                loading: vue.unref(isSharing)
              }, {
                default: vue.withCtx(() => _cache[7] || (_cache[7] = [
                  vue.createTextVNode("批量分享")
                ])),
                _: 1
              }, 8, ["onClick", "loading"]),
              vue.createVNode(_component_t_button, {
                theme: "default",
                onClick: vue.unref(copyValue)
              }, {
                default: vue.withCtx(() => _cache[8] || (_cache[8] = [
                  vue.createTextVNode("复制到剪贴板")
                ])),
                _: 1
              }, 8, ["onClick"]),
              vue.createVNode(_component_t_button, {
                theme: "default",
                onClick: vue.unref(download)
              }, {
                default: vue.withCtx(() => _cache[9] || (_cache[9] = [
                  vue.createTextVNode("下载分享链接")
                ])),
                _: 1
              }, 8, ["onClick"]),
              vue.createVNode(_component_t_button, {
                theme: "default",
                onClick: vue.unref(downloadExcel)
              }, {
                default: vue.withCtx(() => _cache[10] || (_cache[10] = [
                  vue.createTextVNode("下载信息为Excel")
                ])),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_t_space, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_t_button, {
                theme: "default",
                onClick: vue.unref(downloadVersion2)
              }, {
                default: vue.withCtx(() => _cache[11] || (_cache[11] = [
                  vue.createTextVNode("下载分享链接(文件名+文件大小+分享链接格式)")
                ])),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          }),
          vue.createElementVNode("div", _hoisted_2$8, [
            vue.createVNode(_component_t_progress, {
              percentage: vue.unref(shareProgress),
              color: { from: " #84fab0", to: "#00A870" }
            }, null, 8, ["percentage"])
          ]),
          vue.createVNode(_component_t_collapse, null, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_t_collapse_panel, { header: "配置项" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_t_form, {
                    ref: "form",
                    data: vue.unref(formDataInput),
                    colon: true,
                    "scroll-to-first-error": "smooth",
                    labelAlign: "top"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_t_form_item, { label: "" }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_t_tooltip, { content: "分享一次后等待下一次分享的时间(避免请求频率过高)" }, {
                            default: vue.withCtx(() => _cache[12] || (_cache[12] = [
                              vue.createElementVNode("span", { class: "cloud139_option_item_title" }, "延迟(毫秒):", -1)
                            ])),
                            _: 1
                          }),
                          vue.createVNode(_component_t_input_number, {
                            modelValue: vue.unref(shareDelay),
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(shareDelay) ? shareDelay.value = $event : null),
                            step: "100"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      vue.createVNode(_component_t_form_item, {
                        label: "有效期",
                        name: "time"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_t_radio_group, {
                            modelValue: vue.unref(formDataInput).time,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(formDataInput).time = $event)
                          }, {
                            default: vue.withCtx(() => [
                              vue.createVNode(_component_t_radio_button, {
                                value: vue.unref(ExpireTimeEnum$6).oneDay
                              }, {
                                default: vue.withCtx(() => _cache[13] || (_cache[13] = [
                                  vue.createTextVNode("1天")
                                ])),
                                _: 1
                              }, 8, ["value"]),
                              vue.createVNode(_component_t_radio_button, {
                                value: vue.unref(ExpireTimeEnum$6).threeDay
                              }, {
                                default: vue.withCtx(() => _cache[14] || (_cache[14] = [
                                  vue.createTextVNode("3天")
                                ])),
                                _: 1
                              }, 8, ["value"]),
                              vue.createVNode(_component_t_radio_button, {
                                value: vue.unref(ExpireTimeEnum$6).fiveDay
                              }, {
                                default: vue.withCtx(() => _cache[15] || (_cache[15] = [
                                  vue.createTextVNode("5天")
                                ])),
                                _: 1
                              }, 8, ["value"]),
                              vue.createVNode(_component_t_radio_button, {
                                value: vue.unref(ExpireTimeEnum$6).sevenDay
                              }, {
                                default: vue.withCtx(() => _cache[16] || (_cache[16] = [
                                  vue.createTextVNode("7天")
                                ])),
                                _: 1
                              }, 8, ["value"]),
                              vue.createVNode(_component_t_radio_button, {
                                value: vue.unref(ExpireTimeEnum$6).fifteen
                              }, {
                                default: vue.withCtx(() => _cache[17] || (_cache[17] = [
                                  vue.createTextVNode("15天")
                                ])),
                                _: 1
                              }, 8, ["value"]),
                              vue.createVNode(_component_t_radio_button, {
                                value: vue.unref(ExpireTimeEnum$6).forever
                              }, {
                                default: vue.withCtx(() => _cache[18] || (_cache[18] = [
                                  vue.createTextVNode("永久")
                                ])),
                                _: 1
                              }, 8, ["value"])
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      vue.createVNode(_component_t_form_item, {
                        label: "访问码",
                        name: "passcode"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_t_input, {
                            modelValue: vue.unref(formDataInput).passcode,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(formDataInput).passcode = $event),
                            placeholder: "请输入自定义提取码(只允许输入字母和数字)",
                            maxlength: "4"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      vue.createVNode(_component_t_form_item, {
                        label: "分享链接自动填充访问码",
                        name: "autoFillRecvcode"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_t_switch, {
                            modelValue: vue.unref(formDataInput).autoFillRecvcode,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.unref(formDataInput).autoFillRecvcode = $event),
                            size: "large",
                            customValue: [1, 0]
                          }, {
                            label: vue.withCtx((slotProps) => [
                              vue.createTextVNode(vue.toDisplayString(slotProps.value ? "开" : "关"), 1)
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      vue.createVNode(_component_t_form_item, {
                        label: "接收次数",
                        name: "receiveUserLimit"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_t_input_number, {
                            "auto-width": true,
                            modelValue: vue.unref(formDataInput).receiveUserLimit,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.unref(formDataInput).receiveUserLimit = $event),
                            suffix: "个",
                            min: 1,
                            placeholder: "默认不限制"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      vue.createVNode(_component_t_form_item, {
                        label: "允许免登录下载(非会员不可开启)",
                        name: "skipLogin"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_t_switch, {
                            modelValue: vue.unref(formDataInput).skipLogin,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.unref(formDataInput).skipLogin = $event),
                            size: "large",
                            customValue: [1, 0]
                          }, {
                            label: vue.withCtx((slotProps) => [
                              vue.createTextVNode(vue.toDisplayString(slotProps.value ? "开" : "关"), 1)
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      vue.unref(formDataInput).skipLogin === 1 ? (vue.openBlock(), vue.createBlock(_component_t_form_item, {
                        key: 0,
                        label: "允许免登录下载的总流量",
                        name: "skipLoginDownFlowLimit"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_t_input_number, {
                            "auto-width": true,
                            modelValue: vue.unref(formDataInput).skipLoginDownFlowLimit,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => vue.unref(formDataInput).skipLoginDownFlowLimit = $event),
                            suffix: "KB",
                            min: 1,
                            step: "1",
                            placeholder: "默认不限制"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })) : vue.createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["data"])
                ]),
                _: 1
              }),
              vue.createVNode(_component_t_collapse_panel, { header: "分享结果" }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", _hoisted_3$8, [
                    vue.createVNode(_component_t_textarea, {
                      readonly: "",
                      autosize: { minRows: 10 },
                      value: vue.unref(shareInfoUserSee),
                      placeholder: "分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
                    }, null, 8, ["value"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  const cloud115 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-54beefe3"]]);
  var ExpireTimeEnum$5 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 1] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 2] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["thirtyDay"] = 3] = "thirtyDay";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = 4] = "forever";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$5 || {});
  var DefaultShowEnum$1 = /* @__PURE__ */ ((DefaultShowEnum2) => {
    DefaultShowEnum2[DefaultShowEnum2["tile"] = 2] = "tile";
    DefaultShowEnum2[DefaultShowEnum2["list"] = 1] = "list";
    return DefaultShowEnum2;
  })(DefaultShowEnum$1 || {});
  var PwdEnum$2 = /* @__PURE__ */ ((PwdEnum2) => {
    PwdEnum2[PwdEnum2["no"] = 0] = "no";
    PwdEnum2[PwdEnum2["yes"] = 1] = "yes";
    PwdEnum2[PwdEnum2["self"] = 2] = "self";
    return PwdEnum2;
  })(PwdEnum$2 || {});
  var CopyValueEnum$1 = /* @__PURE__ */ ((CopyValueEnum2) => {
    CopyValueEnum2[CopyValueEnum2["shareLink"] = 0] = "shareLink";
    CopyValueEnum2[CopyValueEnum2["extraLink"] = 1] = "extraLink";
    return CopyValueEnum2;
  })(CopyValueEnum$1 || {});
  const transformExcelInfoData$6 = (data) => {
    return (data == null ? void 0 : data.map((item) => {
      let time;
      switch (item.timeCode) {
        case ExpireTimeEnum$5.oneDay:
          time = "1天";
          break;
        case ExpireTimeEnum$5.sevenDay:
          time = "7天";
          break;
        case ExpireTimeEnum$5.thirtyDay:
          time = "30天";
          break;
        case ExpireTimeEnum$5.forever:
          time = "永久";
          break;
        default:
          time = "未知";
      }
      return {
        "文件名称": (item == null ? void 0 : item.fileName) ?? "",
        "分享链接": (item == null ? void 0 : item.url) ?? "",
        "提取码": (item == null ? void 0 : item.pwd) ?? "",
        "有效期": time
      };
    })) ?? [];
  };
  const transformExcelExtraLinkData = (data) => {
    return (data == null ? void 0 : data.map((item) => ({
      "文件名称": (item == null ? void 0 : item.fileName) ?? "",
      "直链地址": (item == null ? void 0 : item.link) ?? ""
    }))) ?? [];
  };
  const getSelectInfoList$1 = () => {
    var _a, _b;
    const reactDOM = document.querySelector(".hombody");
    const key = (_a = Object.keys(reactDOM)) == null ? void 0 : _a.find(
      (key2) => key2.startsWith("__reactInternalInstance$")
    );
    const tempList = [reactDOM[key]];
    let tempItem;
    while (tempList.length) {
      const item = tempList.pop();
      if ((_b = item == null ? void 0 : item.memoizedProps) == null ? void 0 : _b.rowSelection) {
        tempItem = item.memoizedProps;
        break;
      } else {
        tempList.push(item == null ? void 0 : item.child);
      }
    }
    const { dataSource, rowSelection } = tempItem ?? {};
    if (dataSource && rowSelection) {
      const keys = (rowSelection == null ? void 0 : rowSelection.selectedRowKeys) ?? [];
      const temp = dataSource.filter((item) => keys.includes(item.FileId));
      return temp;
    } else {
      return [];
    }
  };
  const use123Cloud = () => {
    const userOptions = vue.ref({
      expiration: ExpireTimeEnum$5.forever,
      displayStatus: DefaultShowEnum$1.list,
      pwdType: PwdEnum$2.yes,
      pwd: "",
      //自定义提取码或随机提取码
      shareDelay: 500,
      shareProgress: 0,
      shareResultInfoList: [],
      shareInfoUserSee: "",
      isSharing: false,
      extraLinkInfoList: [],
      extraLinkUserSee: ""
    });
    const transformOptions = (params) => {
      let sharePwd = "";
      if (params.pwdType === PwdEnum$2.yes) {
        sharePwd = generateRandomString(4);
      } else if (params.pwdType === PwdEnum$2.self) {
        sharePwd = params.pwd;
      }
      let expiration;
      switch (params.expiration) {
        case ExpireTimeEnum$5.oneDay:
          expiration = getDate123Cloud(1);
          break;
        case ExpireTimeEnum$5.sevenDay:
          expiration = getDate123Cloud(7);
          break;
        case ExpireTimeEnum$5.thirtyDay:
          expiration = getDate123Cloud(30);
          break;
        case ExpireTimeEnum$5.forever:
          expiration = getDate123Cloud(99);
          break;
      }
      return {
        displayStatus: params.displayStatus,
        sharePwd,
        expiration,
        shareModality: params.expiration
      };
    };
    const transformInfoStyle = (info) => {
      let time;
      switch (info.timeCode) {
        case ExpireTimeEnum$5.oneDay:
          time = "1天";
          break;
        case ExpireTimeEnum$5.sevenDay:
          time = "7天";
          break;
        case ExpireTimeEnum$5.thirtyDay:
          time = "30天";
          break;
        case ExpireTimeEnum$5.forever:
          time = "永久";
          break;
        default:
          time = "未知";
      }
      return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.pwd ?? "为空"} 分享有效时间: ${time}`;
    };
    const transformResult = (result) => {
      const { data } = result || {};
      return {
        ShareKey: (data == null ? void 0 : data.ShareKey) ?? "分享失败",
        message: result.message ?? "",
        code: result.code
      };
    };
    const transformLinkResult = (info) => {
      return `文件名称:${info.fileName} 直链地址:${info.link}`;
    };
    const handleBatchOperation = async () => {
      var _a, _b;
      const selectedRows = getSelectInfoList$1() ?? [];
      if (!selectedRows.length) {
        return tdesignVueNext.MessagePlugin.warning("请选择要分享的文件!");
      }
      if (userOptions.value.pwdType === PwdEnum$2.self && !userOptions.value.pwd) {
        return tdesignVueNext.MessagePlugin.warning("设置提取码为自定义提取码,请填写自定义提取码");
      }
      userOptions.value.isSharing = true;
      const currentShareInfo = [];
      for (let fileInfo of selectedRows) {
        let generateRandomParams = function() {
          const randomValue1 = Math.floor(Math.random() * 1e10);
          const randomValue2 = Math.floor(Math.random() * 1e7);
          const randomValue3 = Math.floor(Math.random() * 1e10);
          return `${randomValue1}-${randomValue2}-${randomValue3}`;
        };
        const data = {
          ...transformOptions(userOptions.value),
          driveId: 0,
          event: "shareCreate",
          fileIdList: fileInfo.FileId,
          //文件id
          fileNum: 1,
          //文件数量,
          operatePlace: 1,
          renameVisible: false,
          shareName: fileInfo.FileName,
          //分享文件名
          isReward: 0
        };
        const params = {};
        params[Math.floor(Math.random() * 1e10)] = generateRandomParams();
        const { data: backData } = await axios({
          method: "post",
          url: `${window.location.origin}/a/api/share/create`,
          params,
          data,
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": "Bearer " + ((_a = localStorage.getItem("authorToken")) == null ? void 0 : _a.slice(1, -1)),
            "LoginUuid": (_b = localStorage.getItem("LoginUuid")) == null ? void 0 : _b.slice(1, -1),
            "platform": "web"
          }
        }).catch(() => ({ data: {} }));
        const backResult = transformResult(backData);
        let tempData = {
          fileName: fileInfo.FileName,
          url: `${window.location.origin}/s/` + backResult.ShareKey,
          pwd: data.sharePwd,
          time: data.expiration,
          timeCode: userOptions.value.expiration
        };
        userOptions.value.shareResultInfoList.push(tempData);
        currentShareInfo.push(tempData);
        userOptions.value.shareInfoUserSee += transformInfoStyle(tempData) + "\n";
        userOptions.value.shareProgress = Math.floor(currentShareInfo.length / selectedRows.length * 100);
        await new Promise((resolve2) => {
          setTimeout(() => {
            resolve2();
          }, userOptions.value.shareDelay);
        });
      }
      userOptions.value.shareProgress = 100;
      userOptions.value.isSharing = false;
      await tdesignVueNext.MessagePlugin.success("批量分享成功,请自行查看结果");
    };
    const handleBatchExtraLink = async () => {
      var _a, _b, _c;
      const selectedRows = getSelectInfoList$1();
      if (!selectedRows.length) {
        return tdesignVueNext.MessagePlugin.warning("请选择要提取直链的文件!");
      }
      userOptions.value.isSharing = true;
      const currentShareInfo = [];
      for (let fileInfo of selectedRows) {
        const randomParams = get123CloudSecret();
        const { data } = await axios({
          method: "get",
          url: `${window.location.origin}/a/api/cdn-link/url`,
          params: {
            [randomParams[0]]: randomParams[1],
            fileID: fileInfo.FileId
          },
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": "Bearer " + ((_a = localStorage.getItem("authorToken")) == null ? void 0 : _a.slice(1, -1)),
            "LoginUuid": (_b = localStorage.getItem("LoginUuid")) == null ? void 0 : _b.slice(1, -1),
            "platform": "web"
          }
        }).catch(() => ({ data: {} }));
        const tempData = {
          fileName: fileInfo.FileName,
          //文件名
          link: ((_c = data == null ? void 0 : data.data) == null ? void 0 : _c.url) ?? ""
        };
        userOptions.value.extraLinkInfoList.push(tempData);
        currentShareInfo.push(tempData);
        userOptions.value.extraLinkUserSee += transformLinkResult(tempData) + "\n";
        userOptions.value.shareProgress = Math.floor(currentShareInfo.length / selectedRows.length * 100);
        await new Promise((resolve2) => {
          setTimeout(() => {
            resolve2();
          }, userOptions.value.shareDelay);
        });
      }
      userOptions.value.shareProgress = 100;
      userOptions.value.isSharing = false;
      await tdesignVueNext.MessagePlugin.success("批量获取直链成功,请自行查看结果");
    };
    const handleEnd = () => {
      userOptions.value.shareResultInfoList = [];
      userOptions.value.extraLinkInfoList = [];
      userOptions.value.shareInfoUserSee = "";
      userOptions.value.extraLinkUserSee = "";
      userOptions.value.shareProgress = 0;
    };
    const copyValue = (type = CopyValueEnum$1.shareLink) => {
      if (type === CopyValueEnum$1.shareLink) {
        CopyValueToClipBoard(userOptions.value.shareInfoUserSee + "").then(() => {
          tdesignVueNext.MessagePlugin.success("复制成功");
        }).catch(() => {
          tdesignVueNext.MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
        });
      } else if (type === CopyValueEnum$1.extraLink) {
        CopyValueToClipBoard(userOptions.value.extraLinkUserSee + "").then(() => {
          tdesignVueNext.MessagePlugin.success("复制成功");
        }).catch(() => {
          tdesignVueNext.MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
        });
      }
    };
    const download = (type = CopyValueEnum$1.shareLink) => {
      if (type === CopyValueEnum$1.shareLink) {
        DownloadTxt(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}`, userOptions.value.shareInfoUserSee);
      } else if (type === CopyValueEnum$1.extraLink) {
        DownloadTxt(`${cloudInfoStore.cloudName}直链地址-${dayjs().format("YYYY-MM-DD HH:mm:ss")}`, userOptions.value.extraLinkUserSee);
      }
    };
    const downloadExcel = (type = CopyValueEnum$1.shareLink) => {
      if (type === CopyValueEnum$1.shareLink) {
        exportXlsxFile(`${cloudInfoStore.cloudName}批量分享${Date.now()}.xlsx`, transformExcelInfoData$6(userOptions.value.shareResultInfoList));
      } else if (type === CopyValueEnum$1.extraLink) {
        exportXlsxFile(`${cloudInfoStore.cloudName}直链${Date.now()}.xlsx`, transformExcelExtraLinkData(userOptions.value.extraLinkInfoList));
      }
    };
    return {
      userOptions,
      transformOptions,
      transformInfoStyle,
      transformResult,
      transformLinkResult,
      handleBatchOperation,
      handleBatchExtraLink,
      handleEnd,
      copyValue,
      download,
      downloadExcel
    };
  };
  const _hoisted_1$8 = { class: "cloud123" };
  const _hoisted_2$7 = { class: "cloud123_progress" };
  const _hoisted_3$7 = { class: "cloud123_option" };
  const _hoisted_4$7 = { class: "cloud123_option_item" };
  const _hoisted_5$6 = { class: "cloud123_option_item" };
  const _hoisted_6$6 = { class: "cloud123_option_item" };
  const _hoisted_7$6 = { class: "cloud123_option_item" };
  const _hoisted_8$4 = {
    key: 0,
    class: "cloud123_option_item"
  };
  const _hoisted_9$2 = { style: { "margin-top": "10px" } };
  const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props, { expose: __expose }) {
      const {
        userOptions,
        handleBatchOperation,
        handleBatchExtraLink,
        handleEnd,
        copyValue,
        download,
        downloadExcel
      } = use123Cloud();
      __expose({
        handleEnd
      });
      return (_ctx, _cache) => {
        const _component_t_progress = vue.resolveComponent("t-progress");
        const _component_t_button = vue.resolveComponent("t-button");
        const _component_t_space = vue.resolveComponent("t-space");
        const _component_t_tooltip = vue.resolveComponent("t-tooltip");
        const _component_t_input_number = vue.resolveComponent("t-input-number");
        const _component_t_radio_button = vue.resolveComponent("t-radio-button");
        const _component_t_radio_group = vue.resolveComponent("t-radio-group");
        const _component_t_input = vue.resolveComponent("t-input");
        const _component_t_textarea = vue.resolveComponent("t-textarea");
        const _component_t_collapse_panel = vue.resolveComponent("t-collapse-panel");
        const _component_t_collapse = vue.resolveComponent("t-collapse");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$8, [
          vue.createElementVNode("div", _hoisted_2$7, [
            vue.createVNode(_component_t_progress, {
              percentage: vue.unref(userOptions).shareProgress,
              color: { from: " #84fab0", to: "#00A870" }
            }, null, 8, ["percentage"])
          ]),
          vue.createElementVNode("div", _hoisted_3$7, [
            vue.createVNode(_component_t_collapse, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_collapse_panel, {
                  value: vue.unref(CopyValueEnum$1).shareLink,
                  header: "分享配置(123盘加密算法经常变动,废弃)"
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("div", null, [
                      vue.createVNode(_component_t_space, null, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_t_button, {
                            onClick: vue.unref(handleBatchOperation),
                            loading: vue.unref(userOptions).isSharing
                          }, {
                            default: vue.withCtx(() => _cache[11] || (_cache[11] = [
                              vue.createTextVNode("批量分享")
                            ])),
                            _: 1
                          }, 8, ["onClick", "loading"]),
                          vue.createVNode(_component_t_button, {
                            theme: "default",
                            onClick: _cache[0] || (_cache[0] = ($event) => vue.unref(copyValue)(vue.unref(CopyValueEnum$1).shareLink))
                          }, {
                            default: vue.withCtx(() => _cache[12] || (_cache[12] = [
                              vue.createTextVNode("复制到剪贴板")
                            ])),
                            _: 1
                          }),
                          vue.createVNode(_component_t_button, {
                            theme: "default",
                            onClick: _cache[1] || (_cache[1] = ($event) => vue.unref(download)(vue.unref(CopyValueEnum$1).shareLink))
                          }, {
                            default: vue.withCtx(() => _cache[13] || (_cache[13] = [
                              vue.createTextVNode("下载分享链接")
                            ])),
                            _: 1
                          }),
                          vue.createVNode(_component_t_button, {
                            theme: "default",
                            onClick: _cache[2] || (_cache[2] = ($event) => vue.unref(downloadExcel)(vue.unref(CopyValueEnum$1).shareLink))
                          }, {
                            default: vue.withCtx(() => _cache[14] || (_cache[14] = [
                              vue.createTextVNode("下载信息为Excel")
                            ])),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    vue.createElementVNode("div", _hoisted_4$7, [
                      vue.createVNode(_component_t_tooltip, { content: "分享一次后等待下一次分享的时间(避免请求频率过高)" }, {
                        default: vue.withCtx(() => _cache[15] || (_cache[15] = [
                          vue.createElementVNode("span", { class: "cloud123_option_item_title" }, "延迟(毫秒):", -1)
                        ])),
                        _: 1
                      }),
                      vue.createVNode(_component_t_input_number, {
                        modelValue: vue.unref(userOptions).shareDelay,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.unref(userOptions).shareDelay = $event),
                        step: "100"
                      }, null, 8, ["modelValue"])
                    ]),
                    vue.createElementVNode("div", _hoisted_5$6, [
                      _cache[20] || (_cache[20] = vue.createElementVNode("span", { class: "cloud123_option_item_title" }, "有效期:", -1)),
                      vue.createVNode(_component_t_radio_group, {
                        modelValue: vue.unref(userOptions).expiration,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.unref(userOptions).expiration = $event)
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_t_radio_button, {
                            value: vue.unref(ExpireTimeEnum$5).oneDay
                          }, {
                            default: vue.withCtx(() => _cache[16] || (_cache[16] = [
                              vue.createTextVNode("1天")
                            ])),
                            _: 1
                          }, 8, ["value"]),
                          vue.createVNode(_component_t_radio_button, {
                            value: vue.unref(ExpireTimeEnum$5).sevenDay
                          }, {
                            default: vue.withCtx(() => _cache[17] || (_cache[17] = [
                              vue.createTextVNode("7天")
                            ])),
                            _: 1
                          }, 8, ["value"]),
                          vue.createVNode(_component_t_radio_button, {
                            value: vue.unref(ExpireTimeEnum$5).thirtyDay
                          }, {
                            default: vue.withCtx(() => _cache[18] || (_cache[18] = [
                              vue.createTextVNode("30天")
                            ])),
                            _: 1
                          }, 8, ["value"]),
                          vue.createVNode(_component_t_radio_button, {
                            value: vue.unref(ExpireTimeEnum$5).forever
                          }, {
                            default: vue.withCtx(() => _cache[19] || (_cache[19] = [
                              vue.createTextVNode("永久")
                            ])),
                            _: 1
                          }, 8, ["value"])
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    vue.createElementVNode("div", _hoisted_6$6, [
                      _cache[23] || (_cache[23] = vue.createElementVNode("span", { class: "cloud123_option_item_title" }, "默认展示:", -1)),
                      vue.createVNode(_component_t_radio_group, {
                        modelValue: vue.unref(userOptions).displayStatus,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.unref(userOptions).displayStatus = $event)
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_t_radio_button, {
                            value: vue.unref(DefaultShowEnum$1).tile
                          }, {
                            default: vue.withCtx(() => _cache[21] || (_cache[21] = [
                              vue.createTextVNode("平铺")
                            ])),
                            _: 1
                          }, 8, ["value"]),
                          vue.createVNode(_component_t_radio_button, {
                            value: vue.unref(DefaultShowEnum$1).list
                          }, {
                            default: vue.withCtx(() => _cache[22] || (_cache[22] = [
                              vue.createTextVNode("列表")
                            ])),
                            _: 1
                          }, 8, ["value"])
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    vue.createElementVNode("div", _hoisted_7$6, [
                      _cache[27] || (_cache[27] = vue.createElementVNode("span", { class: "cloud123_option_item_title" }, "分享形式:", -1)),
                      vue.createVNode(_component_t_radio_group, {
                        modelValue: vue.unref(userOptions).pwdType,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => vue.unref(userOptions).pwdType = $event)
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_t_radio_button, {
                            value: vue.unref(PwdEnum$2).no
                          }, {
                            default: vue.withCtx(() => _cache[24] || (_cache[24] = [
                              vue.createTextVNode("无提取码")
                            ])),
                            _: 1
                          }, 8, ["value"]),
                          vue.createVNode(_component_t_radio_button, {
                            value: vue.unref(PwdEnum$2).yes
                          }, {
                            default: vue.withCtx(() => _cache[25] || (_cache[25] = [
                              vue.createTextVNode("随机提取码")
                            ])),
                            _: 1
                          }, 8, ["value"]),
                          vue.createVNode(_component_t_radio_button, {
                            value: vue.unref(PwdEnum$2).self
                          }, {
                            default: vue.withCtx(() => _cache[26] || (_cache[26] = [
                              vue.createTextVNode("自定义提取码")
                            ])),
                            _: 1
                          }, 8, ["value"])
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    vue.unref(userOptions).pwdType === vue.unref(PwdEnum$2).self ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8$4, [
                      _cache[28] || (_cache[28] = vue.createElementVNode("span", { class: "cloud123_option_item_title" }, "分享形式:", -1)),
                      vue.createVNode(_component_t_input, {
                        modelValue: vue.unref(userOptions).pwd,
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => vue.unref(userOptions).pwd = $event),
                        placeholder: "请输入自定义提取码",
                        maxlength: "4"
                      }, null, 8, ["modelValue"])
                    ])) : vue.createCommentVNode("", true),
                    vue.createElementVNode("div", null, [
                      vue.createVNode(_component_t_textarea, {
                        readonly: "",
                        autosize: { minRows: 10 },
                        value: vue.unref(userOptions).shareInfoUserSee,
                        placeholder: "分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
                      }, null, 8, ["value"])
                    ])
                  ]),
                  _: 1
                }, 8, ["value"]),
                vue.createVNode(_component_t_collapse_panel, {
                  value: vue.unref(CopyValueEnum$1).extraLink,
                  header: "获取直链(123云盘VIP才可以用)(123盘加密算法经常变动,废弃)"
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("div", null, [
                      vue.createVNode(_component_t_space, null, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_t_button, {
                            onClick: vue.unref(handleBatchExtraLink),
                            loading: vue.unref(userOptions).isSharing
                          }, {
                            default: vue.withCtx(() => _cache[29] || (_cache[29] = [
                              vue.createTextVNode("批量提取直链")
                            ])),
                            _: 1
                          }, 8, ["onClick", "loading"]),
                          vue.createVNode(_component_t_button, {
                            theme: "default",
                            onClick: _cache[8] || (_cache[8] = ($event) => vue.unref(copyValue)(vue.unref(CopyValueEnum$1).extraLink))
                          }, {
                            default: vue.withCtx(() => _cache[30] || (_cache[30] = [
                              vue.createTextVNode("复制到剪贴板")
                            ])),
                            _: 1
                          }),
                          vue.createVNode(_component_t_button, {
                            theme: "default",
                            onClick: _cache[9] || (_cache[9] = ($event) => vue.unref(download)(vue.unref(CopyValueEnum$1).extraLink))
                          }, {
                            default: vue.withCtx(() => _cache[31] || (_cache[31] = [
                              vue.createTextVNode("下载直链")
                            ])),
                            _: 1
                          }),
                          vue.createVNode(_component_t_button, {
                            theme: "default",
                            onClick: _cache[10] || (_cache[10] = ($event) => vue.unref(downloadExcel)(vue.unref(CopyValueEnum$1).extraLink))
                          }, {
                            default: vue.withCtx(() => _cache[32] || (_cache[32] = [
                              vue.createTextVNode("下载信息为Excel")
                            ])),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    vue.createElementVNode("div", _hoisted_9$2, [
                      vue.createVNode(_component_t_textarea, {
                        readonly: "",
                        autosize: { minRows: 10 },
                        value: vue.unref(userOptions).extraLinkUserSee,
                        placeholder: "直链(格式为文件名称: xxxx 直链地址: xxxx)"
                      }, null, 8, ["value"])
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            })
          ])
        ]);
      };
    }
  });
  const cloud123 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-f782858b"]]);
  var PwdEnum$1 = /* @__PURE__ */ ((PwdEnum2) => {
    PwdEnum2[PwdEnum2["no"] = 0] = "no";
    PwdEnum2[PwdEnum2["yes"] = 1] = "yes";
    PwdEnum2[PwdEnum2["self"] = 2] = "self";
    return PwdEnum2;
  })(PwdEnum$1 || {});
  var TaskEnum = /* @__PURE__ */ ((TaskEnum2) => {
    TaskEnum2[TaskEnum2["file"] = 18] = "file";
    TaskEnum2[TaskEnum2["share"] = 22] = "share";
    TaskEnum2[TaskEnum2["setCodeFile"] = 23] = "setCodeFile";
    TaskEnum2[TaskEnum2["setCodeFolder"] = 16] = "setCodeFolder";
    TaskEnum2[TaskEnum2["reqFolderList"] = 47] = "reqFolderList";
    TaskEnum2[TaskEnum2["reqFileList"] = 5] = "reqFileList";
    return TaskEnum2;
  })(TaskEnum || {});
  var events = ["load", "loadend", "timeout", "error", "readystatechange", "abort"];
  var OriginXhr = "__origin_xhr";
  function configEvent(event, xhrProxy) {
    var e = {};
    for (var attr in event)
      e[attr] = event[attr];
    e.target = e.currentTarget = xhrProxy;
    return e;
  }
  function hook(proxy2, win) {
    win = win || window;
    var originXhr = win.XMLHttpRequest;
    var hooking = true;
    var HookXMLHttpRequest = function() {
      var xhr = new originXhr();
      for (var i = 0; i < events.length; ++i) {
        var key = "on" + events[i];
        if (xhr[key] === void 0)
          xhr[key] = null;
      }
      for (var attr in xhr) {
        var type = "";
        try {
          type = typeof xhr[attr];
        } catch (e) {
        }
        if (type === "function") {
          this[attr] = hookFunction(attr);
        } else if (attr !== OriginXhr) {
          Object.defineProperty(this, attr, {
            get: getterFactory(attr),
            set: setterFactory(attr),
            enumerable: true
          });
        }
      }
      var that = this;
      xhr.getProxy = function() {
        return that;
      };
      this[OriginXhr] = xhr;
    };
    HookXMLHttpRequest.prototype = originXhr.prototype;
    HookXMLHttpRequest.prototype.constructor = HookXMLHttpRequest;
    win.XMLHttpRequest = HookXMLHttpRequest;
    Object.assign(win.XMLHttpRequest, { UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4 });
    function getterFactory(attr) {
      return function() {
        var originValue = this[OriginXhr][attr];
        if (hooking) {
          var v = this.hasOwnProperty(attr + "_") ? this[attr + "_"] : originValue;
          var attrGetterHook = (proxy2[attr] || {})["getter"];
          return attrGetterHook && attrGetterHook(v, this) || v;
        } else {
          return originValue;
        }
      };
    }
    function setterFactory(attr) {
      return function(v) {
        var xhr = this[OriginXhr];
        if (hooking) {
          var that = this;
          var hook2 = proxy2[attr];
          if (attr.substring(0, 2) === "on") {
            that[attr + "_"] = v;
            xhr[attr] = function(e) {
              e = configEvent(e, that);
              var ret = proxy2[attr] && proxy2[attr].call(that, xhr, e);
              ret || v.call(that, e);
            };
          } else {
            var attrSetterHook = (hook2 || {})["setter"];
            v = attrSetterHook && attrSetterHook(v, that) || v;
            this[attr + "_"] = v;
            try {
              xhr[attr] = v;
            } catch (e) {
            }
          }
        } else {
          xhr[attr] = v;
        }
      };
    }
    function hookFunction(fun) {
      return function() {
        var args = [].slice.call(arguments);
        if (proxy2[fun] && hooking) {
          var ret = proxy2[fun].call(this, args, this[OriginXhr]);
          if (ret)
            return ret;
        }
        return this[OriginXhr][fun].apply(this[OriginXhr], args);
      };
    }
    function unHook() {
      hooking = false;
      if (win.XMLHttpRequest === HookXMLHttpRequest) {
        win.XMLHttpRequest = originXhr;
        HookXMLHttpRequest.prototype.constructor = originXhr;
        originXhr = void 0;
      }
    }
    return { originXhr, unHook };
  }
  var eventLoad = events[0], eventLoadEnd = events[1], eventTimeout = events[2], eventError = events[3], eventReadyStateChange = events[4], eventAbort = events[5];
  var prototype = "prototype";
  function proxy(proxy2, win) {
    win = win || window;
    return proxyAjax(proxy2, win);
  }
  function trim(str) {
    return str.replace(/^\s+|\s+$/g, "");
  }
  function getEventTarget(xhr) {
    return xhr.watcher || (xhr.watcher = document.createElement("a"));
  }
  function triggerListener(xhr, name) {
    var xhrProxy = xhr.getProxy();
    var callback = "on" + name + "_";
    var event = configEvent({ type: name }, xhrProxy);
    xhrProxy[callback] && xhrProxy[callback](event);
    var evt;
    if (typeof Event === "function") {
      evt = new Event(name, { bubbles: false });
    } else {
      evt = document.createEvent("Event");
      evt.initEvent(name, false, true);
    }
    getEventTarget(xhr).dispatchEvent(evt);
  }
  function Handler(xhr) {
    this.xhr = xhr;
    this.xhrProxy = xhr.getProxy();
  }
  Handler[prototype] = /* @__PURE__ */ Object.create({
    resolve: function resolve(response) {
      var xhrProxy = this.xhrProxy;
      var xhr = this.xhr;
      xhrProxy.readyState = 4;
      xhr.resHeader = response.headers;
      xhrProxy.response = xhrProxy.responseText = response.response;
      xhrProxy.statusText = response.statusText;
      xhrProxy.status = response.status;
      triggerListener(xhr, eventReadyStateChange);
      triggerListener(xhr, eventLoad);
      triggerListener(xhr, eventLoadEnd);
    },
    reject: function reject(error) {
      this.xhrProxy.status = 0;
      triggerListener(this.xhr, error.type);
      triggerListener(this.xhr, eventLoadEnd);
    }
  });
  function makeHandler(next) {
    function sub(xhr) {
      Handler.call(this, xhr);
    }
    sub[prototype] = Object.create(Handler[prototype]);
    sub[prototype].next = next;
    return sub;
  }
  var RequestHandler = makeHandler(function(rq) {
    var xhr = this.xhr;
    rq = rq || xhr.config;
    xhr.withCredentials = rq.withCredentials;
    xhr.open(rq.method, rq.url, rq.async !== false, rq.user, rq.password);
    for (var key in rq.headers) {
      xhr.setRequestHeader(key, rq.headers[key]);
    }
    xhr.send(rq.body);
  });
  var ResponseHandler = makeHandler(function(response) {
    this.resolve(response);
  });
  var ErrorHandler = makeHandler(function(error) {
    this.reject(error);
  });
  function proxyAjax(proxy2, win) {
    var onRequest = proxy2.onRequest, onResponse = proxy2.onResponse, onError = proxy2.onError;
    function getResponseData(xhrProxy) {
      var responseType = xhrProxy.responseType;
      if (!responseType || responseType === "text") {
        return xhrProxy.responseText;
      }
      var response = xhrProxy.response;
      if (responseType === "json" && !response) {
        try {
          return JSON.parse(xhrProxy.responseText);
        } catch (e) {
          console.warn(e);
        }
      }
      return response;
    }
    function handleResponse(xhr, xhrProxy) {
      var handler = new ResponseHandler(xhr);
      var ret = {
        response: getResponseData(xhrProxy),
        status: xhrProxy.status,
        statusText: xhrProxy.statusText,
        config: xhr.config,
        headers: xhr.resHeader || xhr.getAllResponseHeaders().split("\r\n").reduce(function(ob, str) {
          if (str === "")
            return ob;
          var m = str.split(":");
          ob[m.shift()] = trim(m.join(":"));
          return ob;
        }, {})
      };
      if (!onResponse)
        return handler.resolve(ret);
      onResponse(ret, handler);
    }
    function onerror(xhr, xhrProxy, error, errorType) {
      var handler = new ErrorHandler(xhr);
      error = { config: xhr.config, error, type: errorType };
      if (onError) {
        onError(error, handler);
      } else {
        handler.next(error);
      }
    }
    function preventXhrProxyCallback() {
      return true;
    }
    function errorCallback(errorType) {
      return function(xhr, e) {
        onerror(xhr, this, e, errorType);
        return true;
      };
    }
    function stateChangeCallback(xhr, xhrProxy) {
      if (xhr.readyState === 4 && xhr.status !== 0) {
        handleResponse(xhr, xhrProxy);
      } else if (xhr.readyState !== 4) {
        triggerListener(xhr, eventReadyStateChange);
      }
      return true;
    }
    var { originXhr, unHook } = hook({
      onload: preventXhrProxyCallback,
      onloadend: preventXhrProxyCallback,
      onerror: errorCallback(eventError),
      ontimeout: errorCallback(eventTimeout),
      onabort: errorCallback(eventAbort),
      onreadystatechange: function(xhr) {
        return stateChangeCallback(xhr, this);
      },
      open: function open2(args, xhr) {
        var _this = this;
        var config = xhr.config = { headers: {} };
        config.method = args[0];
        config.url = args[1];
        config.async = args[2];
        config.user = args[3];
        config.password = args[4];
        config.xhr = xhr;
        var evName = "on" + eventReadyStateChange;
        if (!xhr[evName]) {
          xhr[evName] = function() {
            return stateChangeCallback(xhr, _this);
          };
        }
        if (onRequest)
          return true;
      },
      send: function(args, xhr) {
        var config = xhr.config;
        config.withCredentials = xhr.withCredentials;
        config.body = args[0];
        if (onRequest) {
          var req = function() {
            onRequest(config, new RequestHandler(xhr));
          };
          config.async === false ? req() : setTimeout(req);
          return true;
        }
      },
      setRequestHeader: function(args, xhr) {
        xhr.config.headers[args[0].toLowerCase()] = args[1];
        if (onRequest)
          return true;
      },
      addEventListener: function(args, xhr) {
        var _this = this;
        if (events.indexOf(args[0]) !== -1) {
          var handler = args[1];
          getEventTarget(xhr).addEventListener(args[0], function(e) {
            var event = configEvent(e, _this);
            event.type = args[0];
            event.isTrusted = true;
            handler.call(_this, event);
          });
          return true;
        }
      },
      getAllResponseHeaders: function(_, xhr) {
        var headers = xhr.resHeader;
        if (headers) {
          var header = "";
          for (var key in headers) {
            header += key + ": " + headers[key] + "\r\n";
          }
          return header;
        }
      },
      getResponseHeader: function(args, xhr) {
        var headers = xhr.resHeader;
        if (headers) {
          return headers[(args[0] || "").toLowerCase()];
        }
      }
    }, win);
    return {
      originXhr,
      unProxy: unHook
    };
  }
  var FileTypeEnum = /* @__PURE__ */ ((FileTypeEnum2) => {
    FileTypeEnum2[FileTypeEnum2["file"] = 0] = "file";
    FileTypeEnum2[FileTypeEnum2["folder"] = 1] = "folder";
    return FileTypeEnum2;
  })(FileTypeEnum || {});
  const transformExcelInfoData$5 = (data) => {
    return (data == null ? void 0 : data.map((item) => {
      return {
        "文件名称": (item == null ? void 0 : item.fileName) ?? "",
        "分享链接": (item == null ? void 0 : item.url) ?? "",
        "提取码": (item == null ? void 0 : item.pwd) ?? "",
        "有效期": (item == null ? void 0 : item.time) ?? ""
      };
    })) ?? [];
  };
  const uselanzouCloud = () => {
    const userOptions = vue.ref({
      pwdType: PwdEnum$1.yes,
      pwd: "",
      //自定义提取码或随机提取码
      shareDelay: 500,
      shareProgress: 0,
      selectFileInfoList: [],
      shareResultInfoList: [],
      listData: [],
      lastFolderData: [],
      shareInfoUserSee: "",
      isSharing: false
    });
    const init = () => {
      setTimeout(() => {
        const abc = document.querySelector("iframe");
        const iframeWindow = abc.contentWindow;
        proxy({
          //请求成功后进入0.
          onResponse: (response, handler) => {
            var _a, _b;
            if (handler.xhr.config.url.startsWith("/doupload.php")) {
              const bodyParams = bodyParse(handler.xhr.config.body ?? "");
              const { task, pg } = bodyParams;
              let data = [];
              if (task * 1 === TaskEnum.reqFolderList) {
                data = response.response ? ((_a = JSON.parse(response.response)) == null ? void 0 : _a.text) ?? [] : [];
                userOptions.value.lastFolderData = data;
                userOptions.value.listData = [...vue.markRaw(userOptions.value.listData), ...data];
              } else if (task * 1 === TaskEnum.reqFileList) {
                data = response.response ? ((_b = JSON.parse(response.response)) == null ? void 0 : _b.text) ?? [] : [];
                if (pg * 1 === 1) {
                  userOptions.value.listData = [...vue.markRaw(userOptions.value.lastFolderData), ...data];
                } else {
                  userOptions.value.listData = [...vue.markRaw(userOptions.value.listData), ...data];
                }
              }
            }
            handler.next(response);
          }
          //@ts-ignore
        }, iframeWindow);
      }, 1e3);
    };
    init();
    const transformInfoStyle = (info) => {
      return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.pwd ?? "空"} 分享有效时间: 永久`;
    };
    const transformResult = (result) => {
      return {
        is_newd: (result == null ? void 0 : result.is_newd) ?? "",
        pwd: userOptions.value.pwdType === PwdEnum$1.self ? userOptions.value.pwd : result == null ? void 0 : result.pwd,
        f_id: (result == null ? void 0 : result.f_id) ?? "",
        new_url: (result == null ? void 0 : result.new_url) ?? "",
        name: (result == null ? void 0 : result.name) ?? ""
      };
    };
    const handleBatchOperation = async () => {
      const { selectFileInfoList } = userOptions.value;
      if (!selectFileInfoList.length) {
        return tdesignVueNext.MessagePlugin.warning("请选择要分享的文件!");
      }
      userOptions.value.isSharing = true;
      const currentShareInfo = [];
      for (let fileInfo of selectFileInfoList) {
        const formData = new FormData();
        formData.append("task", fileInfo.type === FileTypeEnum.file ? TaskEnum.share + "" : TaskEnum.file + "");
        formData.append(fileInfo.type === FileTypeEnum.file ? "file_id" : "folder_id", fileInfo.id + "");
        const { data: shareData } = await axios({
          method: "post",
          url: `${window.location.origin}/doupload.php`,
          data: formData
        }).catch(() => ({ data: {} }));
        const backResult = transformResult((shareData == null ? void 0 : shareData.info) ?? {});
        if (userOptions.value.pwdType !== PwdEnum$1.no) {
          await new Promise((resolve2) => {
            setTimeout(() => {
              resolve2();
            }, userOptions.value.shareDelay);
          });
          formData.set("task", fileInfo.type === FileTypeEnum.file ? TaskEnum.setCodeFile + "" : TaskEnum.setCodeFolder + "");
          formData.append("shows", "1");
          formData.append("shownames", backResult.pwd);
          await axios({
            method: "post",
            url: `${window.location.origin}/doupload.php`,
            data: formData
          }).catch(() => ({ data: {} }));
        }
        let tempData = {
          fileName: fileInfo.name_all || fileInfo.name,
          url: fileInfo.type === FileTypeEnum.file ? backResult.is_newd + "/" + backResult.f_id : backResult.new_url,
          pwd: userOptions.value.pwdType !== PwdEnum$1.no ? backResult.pwd : "空"
        };
        userOptions.value.shareResultInfoList.push(tempData);
        currentShareInfo.push(tempData);
        userOptions.value.shareInfoUserSee += transformInfoStyle(tempData) + "\n";
        userOptions.value.shareProgress = Math.floor(currentShareInfo.length / userOptions.value.selectFileInfoList.length * 100);
        await new Promise((resolve2) => {
          setTimeout(() => {
            resolve2();
          }, userOptions.value.shareDelay);
        });
      }
      userOptions.value.shareProgress = 100;
      userOptions.value.isSharing = false;
      await tdesignVueNext.MessagePlugin.success("批量分享成功,请自行查看结果");
    };
    const handleEnd = () => {
      userOptions.value.shareResultInfoList = [];
      userOptions.value.selectFileInfoList = [];
      userOptions.value.shareInfoUserSee = "";
      userOptions.value.shareProgress = 0;
    };
    const copyValue = () => {
      CopyValueToClipBoard(userOptions.value.shareInfoUserSee + "").then(() => {
        tdesignVueNext.MessagePlugin.success("复制成功");
      }).catch(() => {
        tdesignVueNext.MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
      });
    };
    const download = () => {
      DownloadTxt(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}`, userOptions.value.shareInfoUserSee);
    };
    const downloadExcel = () => {
      exportXlsxFile(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}.xlsx`, transformExcelInfoData$5(userOptions.value.shareResultInfoList));
    };
    return {
      init,
      userOptions,
      transformInfoStyle,
      transformResult,
      handleBatchOperation,
      handleEnd,
      copyValue,
      download,
      downloadExcel
    };
  };
  const useListModule = (props, emits) => {
    const selectedRowKeys = vue.ref([]);
    const selectedRowInfos = vue.ref([]);
    const tableProps = vue.ref({
      rowKey: "id",
      columns: [
        {
          colKey: "row-select",
          type: "multiple",
          checkProps: ({ row }) => ({ disabled: row.Status === 2 }),
          width: 50
        },
        {
          colKey: "type",
          title: "类型",
          cell: (h2, { row }) => {
            return h2("img", {
              src: row["type"] === FileTypeEnum.file ? "https://pc.woozooo.com/images/filetype/txt.gif" : "https://pc.woozooo.com/images/folder_open.gif"
            });
          },
          width: 60
        },
        {
          colKey: "name",
          title: "文件名"
        },
        {
          colKey: "size",
          title: "大小"
        },
        {
          colKey: "time",
          title: "时间"
        }
      ],
      empty: "暂无数据,请重新进入任意文件夹目录以拦截获取文件数据",
      onSelectChange: (value, ctx) => {
        selectedRowKeys.value = value;
        selectedRowInfos.value = ctx.selectedRowData;
        emits("update:ids", value);
        emits("update:infos", ctx.selectedRowData);
      }
    });
    const listData = vue.ref([]);
    const transformListData = (data) => {
      if (!data || data && !(data == null ? void 0 : data.length))
        return [];
      return (data == null ? void 0 : data.map((item) => ({
        id: (item == null ? void 0 : item.id) ? item == null ? void 0 : item.id : item == null ? void 0 : item.fol_id,
        name_all: (item == null ? void 0 : item.name_all) ?? "",
        //文件才有这个属性
        name: (item == null ? void 0 : item.name) ?? "",
        size: (item == null ? void 0 : item.size) ?? "-",
        //文件才有
        time: (item == null ? void 0 : item.time) ?? "-",
        //文件才有
        type: (item == null ? void 0 : item.id) ? FileTypeEnum.file : FileTypeEnum.folder
      }))) ?? [];
    };
    return {
      selectedRowKeys,
      selectedRowInfos,
      transformListData,
      tableProps,
      listData
    };
  };
  const _hoisted_1$7 = { class: "list" };
  const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    props: {
      list: {},
      ids: {},
      infos: {}
    },
    emits: ["update:ids", "update:infos"],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const {
        tableProps,
        listData,
        selectedRowKeys,
        transformListData
      } = useListModule(props, emits);
      vue.watchEffect(() => {
        listData.value = transformListData(props.list);
      });
      return (_ctx, _cache) => {
        const _component_t_table = vue.resolveComponent("t-table");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$7, [
          vue.createVNode(_component_t_table, vue.mergeProps(vue.unref(tableProps), {
            data: vue.unref(listData),
            "selected-row-keys": vue.unref(selectedRowKeys),
            "select-on-row-click": ""
          }), null, 16, ["data", "selected-row-keys"])
        ]);
      };
    }
  });
  const ListModule = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-1b910cfc"]]);
  const _hoisted_1$6 = { class: "lanzouCloud" };
  const _hoisted_2$6 = { class: "lanzouCloud_operation" };
  const _hoisted_3$6 = { class: "lanzouCloud_progress" };
  const _hoisted_4$6 = { class: "lanzouCloud_option" };
  const _hoisted_5$5 = { class: "lanzouCloud_option_item" };
  const _hoisted_6$5 = { class: "lanzouCloud_option_item" };
  const _hoisted_7$5 = {
    key: 0,
    style: { "margin-top": "4px" }
  };
  const _hoisted_8$3 = { style: { "height": "60vh", "overflow-y": "scroll" } };
  const _hoisted_9$1 = { class: "lanzouCloud_result" };
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props, { expose: __expose }) {
      const {
        userOptions,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
        downloadExcel
      } = uselanzouCloud();
      __expose({
        handleEnd
      });
      return (_ctx, _cache) => {
        const _component_t_button = vue.resolveComponent("t-button");
        const _component_t_space = vue.resolveComponent("t-space");
        const _component_t_progress = vue.resolveComponent("t-progress");
        const _component_t_tooltip = vue.resolveComponent("t-tooltip");
        const _component_t_input_number = vue.resolveComponent("t-input-number");
        const _component_t_radio_button = vue.resolveComponent("t-radio-button");
        const _component_t_radio_group = vue.resolveComponent("t-radio-group");
        const _component_t_input = vue.resolveComponent("t-input");
        const _component_t_collapse_panel = vue.resolveComponent("t-collapse-panel");
        const _component_t_collapse = vue.resolveComponent("t-collapse");
        const _component_t_textarea = vue.resolveComponent("t-textarea");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, [
          vue.createElementVNode("div", _hoisted_2$6, [
            vue.createVNode(_component_t_space, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_button, {
                  onClick: vue.unref(handleBatchOperation),
                  loading: vue.unref(userOptions).isSharing
                }, {
                  default: vue.withCtx(() => _cache[4] || (_cache[4] = [
                    vue.createTextVNode("批量分享")
                  ])),
                  _: 1
                }, 8, ["onClick", "loading"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(copyValue)
                }, {
                  default: vue.withCtx(() => _cache[5] || (_cache[5] = [
                    vue.createTextVNode("复制到剪贴板")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(download)
                }, {
                  default: vue.withCtx(() => _cache[6] || (_cache[6] = [
                    vue.createTextVNode("下载分享链接")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(downloadExcel)
                }, {
                  default: vue.withCtx(() => _cache[7] || (_cache[7] = [
                    vue.createTextVNode("下载信息为Excel")
                  ])),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", _hoisted_3$6, [
            vue.createVNode(_component_t_progress, {
              percentage: vue.unref(userOptions).shareProgress,
              color: { from: " #84fab0", to: "#00A870" }
            }, null, 8, ["percentage"])
          ]),
          vue.createElementVNode("div", _hoisted_4$6, [
            vue.createVNode(_component_t_collapse, { expandMutex: "" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_collapse_panel, {
                  value: "0",
                  header: "分享配置"
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("div", _hoisted_5$5, [
                      vue.createVNode(_component_t_tooltip, { content: "分享一次后等待下一次分享的时间(避免请求频率过高)" }, {
                        default: vue.withCtx(() => _cache[8] || (_cache[8] = [
                          vue.createElementVNode("span", { class: "lanzouCloud_option_item_title" }, "延迟(毫秒):", -1)
                        ])),
                        _: 1
                      }),
                      vue.createVNode(_component_t_input_number, {
                        modelValue: vue.unref(userOptions).shareDelay,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(userOptions).shareDelay = $event),
                        step: "100"
                      }, null, 8, ["modelValue"])
                    ]),
                    vue.createElementVNode("div", _hoisted_6$5, [
                      _cache[12] || (_cache[12] = vue.createElementVNode("span", { class: "lanzouCloud_option_item_title" }, "分享形式:", -1)),
                      vue.createVNode(_component_t_radio_group, {
                        modelValue: vue.unref(userOptions).pwdType,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(userOptions).pwdType = $event)
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_t_radio_button, {
                            value: vue.unref(PwdEnum$1).no
                          }, {
                            default: vue.withCtx(() => _cache[9] || (_cache[9] = [
                              vue.createTextVNode("无提取码")
                            ])),
                            _: 1
                          }, 8, ["value"]),
                          vue.createVNode(_component_t_radio_button, {
                            value: vue.unref(PwdEnum$1).yes
                          }, {
                            default: vue.withCtx(() => _cache[10] || (_cache[10] = [
                              vue.createTextVNode("随机提取码")
                            ])),
                            _: 1
                          }, 8, ["value"]),
                          vue.createVNode(_component_t_radio_button, {
                            value: vue.unref(PwdEnum$1).self
                          }, {
                            default: vue.withCtx(() => _cache[11] || (_cache[11] = [
                              vue.createTextVNode("自定义提取码")
                            ])),
                            _: 1
                          }, 8, ["value"])
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    vue.unref(userOptions).pwdType === vue.unref(PwdEnum$1).self ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_7$5, [
                      vue.createVNode(_component_t_input, {
                        modelValue: vue.unref(userOptions).pwd,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(userOptions).pwd = $event),
                        placeholder: "请输入自定义提取码(只支持数字和英文,最少2位最长6位)",
                        maxlength: "6"
                      }, null, 8, ["modelValue"])
                    ])) : vue.createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_t_collapse_panel, {
                  value: "1",
                  header: "文件选择"
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("div", _hoisted_8$3, [
                      vue.createVNode(ListModule, {
                        list: vue.unref(userOptions).listData,
                        infos: vue.unref(userOptions).selectFileInfoList,
                        "onUpdate:infos": _cache[3] || (_cache[3] = ($event) => vue.unref(userOptions).selectFileInfoList = $event)
                      }, null, 8, ["list", "infos"])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", _hoisted_9$1, [
            vue.createVNode(_component_t_textarea, {
              readonly: "",
              autosize: { minRows: 10 },
              value: vue.unref(userOptions).shareInfoUserSee,
              placeholder: "分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
            }, null, 8, ["value"])
          ])
        ]);
      };
    }
  });
  const cloudLanZou = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-98dce44d"]]);
  var ExpireTimeEnum$4 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = 1] = "forever";
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 2] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 3] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["thirtyDay"] = 4] = "thirtyDay";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$4 || {});
  var HasPwd = /* @__PURE__ */ ((HasPwd2) => {
    HasPwd2[HasPwd2["no"] = 0] = "no";
    HasPwd2[HasPwd2["yes"] = 1] = "yes";
    return HasPwd2;
  })(HasPwd || {});
  var UrlTypeEnum = /* @__PURE__ */ ((UrlTypeEnum2) => {
    UrlTypeEnum2[UrlTypeEnum2["noPwd"] = 1] = "noPwd";
    UrlTypeEnum2[UrlTypeEnum2["hasPwd"] = 2] = "hasPwd";
    return UrlTypeEnum2;
  })(UrlTypeEnum || {});
  function getTaskID(data) {
    return new Promise((resolve2, reject2) => {
      _GM_xmlhttpRequest({
        method: "post",
        url: "https://drive-pc.quark.cn/1/clouddrive/share?pr=ucpro&fr=pc",
        headers: {
          "accept": "application/json, text/plain, */*",
          "content-type": "application/json"
        },
        data: JSON.stringify(data),
        onload: ({ response }) => {
          const { data: data2 } = JSON.parse(response) || {};
          const task_id = (data2 == null ? void 0 : data2.task_id) ?? "";
          resolve2(task_id);
        },
        onerror: (res) => {
          reject2(res);
        }
      });
    });
  }
  function getShareID(task_id, retry_index = 0) {
    return new Promise((resolve2, reject2) => {
      _GM_xmlhttpRequest({
        method: "get",
        url: `https://drive-pc.quark.cn/1/clouddrive/task?pr=ucpro&fr=pc&task_id=${task_id}&retry_index=${retry_index}`,
        onload: ({ response }) => {
          const { data } = JSON.parse(response) || {};
          const share_id = (data == null ? void 0 : data.share_id) ?? "";
          resolve2(share_id);
        },
        onerror: (res) => {
          reject2(res);
        }
      });
    });
  }
  function getShareUrl(share_id) {
    return new Promise((resolve2, reject2) => {
      _GM_xmlhttpRequest({
        method: "post",
        url: "https://drive-pc.quark.cn/1/clouddrive/share/password?pr=ucpro&fr=pc",
        data: JSON.stringify({
          share_id
        }),
        onload: ({ response }) => {
          const { data } = JSON.parse(response) || {};
          const { passcode, share_url, title } = data || {};
          resolve2(share_url ?? "");
        },
        onerror: (res) => {
          reject2(res);
        }
      });
    });
  }
  const transformExcelInfoData$4 = (data) => {
    return (data == null ? void 0 : data.map((item) => {
      let time;
      switch (item.expireTime) {
        case ExpireTimeEnum$4.oneDay:
          time = "1天";
          break;
        case ExpireTimeEnum$4.sevenDay:
          time = "7天";
          break;
        case ExpireTimeEnum$4.forever:
          time = "永久";
          break;
        default:
          time = "未知";
      }
      return {
        "文件名称": (item == null ? void 0 : item.fileName) ?? "",
        "分享链接": (item == null ? void 0 : item.url) ?? "",
        "提取码": (item == null ? void 0 : item.pwd) ?? "",
        "有效期": time
      };
    })) ?? [];
  };
  const usequarkCloud = () => {
    const userOptions = vue.ref({
      shareDelay: 1e3,
      expireTime: ExpireTimeEnum$4.forever,
      shareInfo: [],
      shareInfoUserSee: "",
      shareProgress: 0,
      selectFileInfoList: [],
      isSharing: false,
      pwdType: HasPwd.yes
    });
    const handleTransformFormat = (info) => {
      let time;
      switch (info.expireTime) {
        case ExpireTimeEnum$4.oneDay:
          time = "1天";
          break;
        case ExpireTimeEnum$4.sevenDay:
          time = "7天";
          break;
        case ExpireTimeEnum$4.forever:
          time = "永久";
          break;
        default:
          time = "未知";
      }
      return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.pwd ?? "为空"} 分享有效时间: ${time}`;
    };
    const handleBatchOperation = async () => {
      var _a, _b, _c, _d, _e;
      const selectDOM = document.querySelectorAll((_a = ShareDOMSelect["cloudQuark"]) == null ? void 0 : _a.select);
      if (!selectDOM.length) {
        return tdesignVueNext.MessagePlugin.warning("请选择要分享的文件!");
      }
      userOptions.value.isSharing = true;
      const currentShareInfo = [];
      for (let dom of selectDOM) {
        userOptions.value.selectFileInfoList.push({
          id: dom.getAttribute((_c = (_b = ShareDOMSelect["cloudQuark"]) == null ? void 0 : _b.idAttribute) == null ? void 0 : _c[0]) ?? "",
          fileName: ((_e = dom.querySelector((_d = ShareDOMSelect["cloudQuark"]) == null ? void 0 : _d.fileNameSelect)) == null ? void 0 : _e.textContent) ?? "(!!$$未知名称!!$$)",
          expireTime: userOptions.value.expireTime,
          pwd: userOptions.value.pwdType === HasPwd.yes ? generateRandomString(4) : ""
        });
      }
      for (let fileInfo of userOptions.value.selectFileInfoList) {
        const sendData = {
          expired_type: fileInfo.expireTime,
          fid_list: [fileInfo.id],
          title: fileInfo.fileName,
          url_type: fileInfo.pwd ? UrlTypeEnum.hasPwd : UrlTypeEnum.noPwd,
          passcode: fileInfo.pwd
        };
        const task_id = await getTaskID(sendData).catch(() => "");
        const share_id = await getShareID(task_id).catch(() => "");
        let share_url = "";
        if (share_id) {
          share_url = await getShareUrl(share_id).catch(() => "");
        } else {
          await new Promise((r) => setTimeout(r, 500));
          let share_id2 = await getShareID(task_id, 1).catch(() => "");
          let i = 2;
          while (i < 4) {
            await new Promise((r) => setTimeout(r, 500));
            share_id2 = await getShareID(task_id, i++).catch(() => "");
            if (share_id2)
              break;
          }
          share_url = await getShareUrl(share_id2).catch(() => "");
        }
        let tempData = {
          ...fileInfo,
          url: share_url
        };
        userOptions.value.shareInfo.push(tempData);
        currentShareInfo.push(tempData);
        userOptions.value.shareInfoUserSee += handleTransformFormat(tempData) + "\n";
        userOptions.value.shareProgress = Math.floor(currentShareInfo.length / userOptions.value.selectFileInfoList.length * 100);
        await new Promise((resolve2) => {
          setTimeout(() => {
            resolve2();
          }, userOptions.value.shareDelay);
        });
      }
      userOptions.value.selectFileInfoList = [];
      userOptions.value.shareProgress = 100;
      userOptions.value.isSharing = false;
      await tdesignVueNext.MessagePlugin.success("批量分享成功,请自行查看结果");
    };
    const handleEnd = () => {
      userOptions.value.shareInfo = [];
      userOptions.value.selectFileInfoList = [];
      userOptions.value.shareInfoUserSee = "";
      userOptions.value.shareProgress = 0;
    };
    const copyValue = () => {
      CopyValueToClipBoard(userOptions.value.shareInfoUserSee + "").then(() => {
        tdesignVueNext.MessagePlugin.success("复制成功");
      }).catch(() => {
        tdesignVueNext.MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
      });
    };
    const download = () => {
      DownloadTxt(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}`, userOptions.value.shareInfoUserSee);
    };
    const downloadExcel = () => {
      exportXlsxFile(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}.xlsx`, transformExcelInfoData$4(userOptions.value.shareInfo));
    };
    return {
      userOptions,
      handleBatchOperation,
      handleTransformFormat,
      handleEnd,
      copyValue,
      downloadExcel,
      download
    };
  };
  const _hoisted_1$5 = { class: "quarkCloud" };
  const _hoisted_2$5 = { class: "quarkCloud_option" };
  const _hoisted_3$5 = { class: "quarkCloud_option_item" };
  const _hoisted_4$5 = {
    class: "quarkCloud_option_item",
    style: { "margin": "6px 0" }
  };
  const _hoisted_5$4 = { class: "quarkCloud_operation" };
  const _hoisted_6$4 = { class: "quarkCloud_progress" };
  const _hoisted_7$4 = { class: "quarkCloud_result" };
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props, { expose: __expose }) {
      const {
        userOptions,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
        downloadExcel
      } = usequarkCloud();
      __expose({
        handleEnd
      });
      return (_ctx, _cache) => {
        const _component_t_radio_button = vue.resolveComponent("t-radio-button");
        const _component_t_radio_group = vue.resolveComponent("t-radio-group");
        const _component_t_tooltip = vue.resolveComponent("t-tooltip");
        const _component_t_input_number = vue.resolveComponent("t-input-number");
        const _component_t_button = vue.resolveComponent("t-button");
        const _component_t_space = vue.resolveComponent("t-space");
        const _component_t_progress = vue.resolveComponent("t-progress");
        const _component_t_textarea = vue.resolveComponent("t-textarea");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
          vue.createElementVNode("div", _hoisted_2$5, [
            vue.createElementVNode("div", _hoisted_3$5, [
              _cache[8] || (_cache[8] = vue.createElementVNode("span", null, "有效期:", -1)),
              vue.createVNode(_component_t_radio_group, {
                modelValue: vue.unref(userOptions).expireTime,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(userOptions).expireTime = $event)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$4).oneDay
                  }, {
                    default: vue.withCtx(() => _cache[3] || (_cache[3] = [
                      vue.createTextVNode("1天")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$4).sevenDay
                  }, {
                    default: vue.withCtx(() => _cache[4] || (_cache[4] = [
                      vue.createTextVNode("7天")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$4).thirtyDay
                  }, {
                    default: vue.withCtx(() => _cache[5] || (_cache[5] = [
                      vue.createTextVNode("30天")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$4).forever
                  }, {
                    default: vue.withCtx(() => _cache[6] || (_cache[6] = [
                      vue.createTextVNode("永久")
                    ])),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              }, 8, ["modelValue"]),
              vue.createVNode(_component_t_tooltip, { content: "分享一次后等待下一次分享的时间(避免请求频率过高)" }, {
                default: vue.withCtx(() => _cache[7] || (_cache[7] = [
                  vue.createTextVNode("延迟(毫秒):")
                ])),
                _: 1
              }),
              vue.createVNode(_component_t_input_number, {
                modelValue: vue.unref(userOptions).shareDelay,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(userOptions).shareDelay = $event),
                step: "100",
                min: "1000"
              }, null, 8, ["modelValue"])
            ]),
            vue.createElementVNode("div", _hoisted_4$5, [
              _cache[11] || (_cache[11] = vue.createElementVNode("span", null, "提取码:", -1)),
              vue.createVNode(_component_t_radio_group, {
                modelValue: vue.unref(userOptions).pwdType,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(userOptions).pwdType = $event)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(HasPwd).no
                  }, {
                    default: vue.withCtx(() => _cache[9] || (_cache[9] = [
                      vue.createTextVNode("无提取码")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(HasPwd).yes
                  }, {
                    default: vue.withCtx(() => _cache[10] || (_cache[10] = [
                      vue.createTextVNode("有提取码")
                    ])),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_5$4, [
            vue.createVNode(_component_t_space, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_button, {
                  onClick: vue.unref(handleBatchOperation),
                  loading: vue.unref(userOptions).isSharing
                }, {
                  default: vue.withCtx(() => _cache[12] || (_cache[12] = [
                    vue.createTextVNode("批量分享")
                  ])),
                  _: 1
                }, 8, ["onClick", "loading"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(copyValue)
                }, {
                  default: vue.withCtx(() => _cache[13] || (_cache[13] = [
                    vue.createTextVNode("复制到剪贴板")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(download)
                }, {
                  default: vue.withCtx(() => _cache[14] || (_cache[14] = [
                    vue.createTextVNode("下载分享链接")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(downloadExcel)
                }, {
                  default: vue.withCtx(() => _cache[15] || (_cache[15] = [
                    vue.createTextVNode("下载信息为Excel")
                  ])),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", _hoisted_6$4, [
            vue.createVNode(_component_t_progress, {
              percentage: vue.unref(userOptions).shareProgress,
              color: { from: " #84fab0", to: "#00A870" }
            }, null, 8, ["percentage"])
          ]),
          vue.createElementVNode("div", _hoisted_7$4, [
            vue.createVNode(_component_t_textarea, {
              readonly: "",
              autosize: { minRows: 10 },
              value: vue.unref(userOptions).shareInfoUserSee,
              placeholder: "分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
            }, null, 8, ["value"])
          ])
        ]);
      };
    }
  });
  const cloudQuark = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-7ddcaef9"]]);
  var ExpireTimeEnum$3 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 1] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 2] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = 4] = "forever";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$3 || {});
  var DefaultShowEnum = /* @__PURE__ */ ((DefaultShowEnum2) => {
    DefaultShowEnum2[DefaultShowEnum2["tile"] = 2] = "tile";
    DefaultShowEnum2[DefaultShowEnum2["list"] = 1] = "list";
    return DefaultShowEnum2;
  })(DefaultShowEnum || {});
  const transformExcelInfoData$3 = (data) => {
    return (data == null ? void 0 : data.map((item) => {
      let time;
      switch (item.timeCode) {
        case ExpireTimeEnum$3.oneDay:
          time = "1天";
          break;
        case ExpireTimeEnum$3.sevenDay:
          time = "7天";
          break;
        case ExpireTimeEnum$3.forever:
          time = "永久";
          break;
        default:
          time = "未知";
      }
      return {
        "文件名称": (item == null ? void 0 : item.fileName) ?? "",
        "分享链接": (item == null ? void 0 : item.url) ?? "",
        "提取码": (item == null ? void 0 : item.pwd) ?? "",
        "有效期": time
      };
    })) ?? [];
  };
  const use139Cloud = () => {
    const userOptions = vue.ref({
      expiration: ExpireTimeEnum$3.forever,
      displayStatus: DefaultShowEnum.list,
      pwd: "",
      //自定义提取码或随机提取码
      shareDelay: 500,
      shareProgress: 0,
      shareResultInfoList: [],
      shareInfoUserSee: "",
      isSharing: false,
      auth: "",
      //分享的Authorization
      userPhone: ""
    });
    const init = () => {
      const regex = /authorization=Basic\s([A-Za-z0-9+/=]+)/;
      const match = document.cookie.match(regex);
      if (match) {
        userOptions.value.auth = "Basic " + (match == null ? void 0 : match[1]);
        console.log("userOptions.value.auth", userOptions.value.auth);
      } else {
        console.log("No match found");
      }
    };
    init();
    const transformOptions = (params) => {
      let period;
      switch (params.expiration) {
        case ExpireTimeEnum$3.oneDay:
          period = 1;
          break;
        case ExpireTimeEnum$3.sevenDay:
          period = 7;
          break;
        case ExpireTimeEnum$3.forever:
          period = null;
          break;
      }
      return {
        period
      };
    };
    const transformInfoStyle = (info) => {
      let time;
      switch (info.timeCode) {
        case ExpireTimeEnum$3.oneDay:
          time = "1天";
          break;
        case ExpireTimeEnum$3.sevenDay:
          time = "7天";
          break;
        case ExpireTimeEnum$3.forever:
          time = "永久";
          break;
        default:
          time = "未知";
      }
      return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.pwd ?? "为空"} 分享有效时间: ${time}`;
    };
    const transformResult = (result) => {
      var _a, _b, _c, _d;
      const list = ((_b = (_a = result == null ? void 0 : result.data) == null ? void 0 : _a.getOutLinkRes) == null ? void 0 : _b.getOutLinkResSet) ?? [];
      return {
        linkUrl: ((_c = list == null ? void 0 : list[0]) == null ? void 0 : _c.linkUrl) ?? "",
        passwd: ((_d = list == null ? void 0 : list[0]) == null ? void 0 : _d.passwd) ?? ""
      };
    };
    const handleBatchOperation = async () => {
      var _a, _b;
      const selectList = ((_b = (_a = document.querySelector(".main_file_list")) == null ? void 0 : _a.__vue__) == null ? void 0 : _b.selectList) ?? [];
      const selectFileInfoList = (selectList == null ? void 0 : selectList.map(({ item }) => ({
        fileName: (item == null ? void 0 : item.contentName) ? item == null ? void 0 : item.contentName : item == null ? void 0 : item.catalogName,
        id: (item == null ? void 0 : item.contentID) ? item == null ? void 0 : item.contentID : item == null ? void 0 : item.catalogID,
        owner: (item == null ? void 0 : item.owner) ?? "",
        //分享用得到
        catalogType: (item == null ? void 0 : item.contentID) ? 0 : 1
        //0代表文件分享 1代表文件夹分享
      }))) ?? [];
      if (!selectFileInfoList.length) {
        return tdesignVueNext.MessagePlugin.warning("请选择要分享的文件!");
      }
      userOptions.value.isSharing = true;
      const currentShareInfo = [];
      for (let fileInfo of selectFileInfoList) {
        console.log(fileInfo);
        const data = {
          ...transformOptions(userOptions.value),
          caIDLst: fileInfo.catalogType === 1 ? [fileInfo.id] : [],
          //分享的文件夹
          coIDLst: fileInfo.catalogType === 0 ? [fileInfo.id] : [],
          //分享的文件
          commonAccountInfo: {
            //新建文件夹可能无法获取,就存储了下用户的手机,无法获取再从用户那边读取
            account: fileInfo.owner ? fileInfo.owner : userOptions.value.userPhone,
            //账户名,一般是手机号
            accountType: 1
          },
          dedicatedName: fileInfo.fileName,
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
        };
        const { data: backData } = await axios({
          method: "post",
          url: `${window.location.origin}/orchestration/personalCloud-rebuild/outlink/v1.0/getOutLink`,
          data: {
            getOutLinkReq: data
          },
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": userOptions.value.auth
          }
        }).catch(() => ({ data: {} }));
        const backResult = transformResult(backData);
        let tempData = {
          fileName: fileInfo.fileName,
          url: backResult.linkUrl,
          pwd: backResult.passwd,
          timeCode: userOptions.value.expiration
        };
        userOptions.value.shareResultInfoList.push(tempData);
        currentShareInfo.push(tempData);
        userOptions.value.shareInfoUserSee += transformInfoStyle(tempData) + "\n";
        userOptions.value.shareProgress = Math.floor(currentShareInfo.length / selectFileInfoList.length * 100);
        await new Promise((resolve2) => {
          setTimeout(() => {
            resolve2();
          }, userOptions.value.shareDelay);
        });
      }
      userOptions.value.shareProgress = 100;
      userOptions.value.isSharing = false;
      await tdesignVueNext.MessagePlugin.success("批量分享成功,请自行查看结果");
    };
    const handleEnd = () => {
      userOptions.value.shareResultInfoList = [];
      userOptions.value.shareInfoUserSee = "";
      userOptions.value.shareProgress = 0;
    };
    const copyValue = () => {
      CopyValueToClipBoard(userOptions.value.shareInfoUserSee + "").then(() => {
        tdesignVueNext.MessagePlugin.success("复制成功");
      }).catch(() => {
        tdesignVueNext.MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
      });
    };
    const download = () => {
      DownloadTxt(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}`, userOptions.value.shareInfoUserSee);
    };
    const downloadExcel = () => {
      exportXlsxFile(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}.xlsx`, transformExcelInfoData$3(userOptions.value.shareResultInfoList));
    };
    return {
      init,
      userOptions,
      transformOptions,
      transformInfoStyle,
      transformResult,
      handleBatchOperation,
      handleEnd,
      copyValue,
      download,
      downloadExcel
    };
  };
  const _hoisted_1$4 = { class: "cloud139" };
  const _hoisted_2$4 = { class: "cloud139_operation" };
  const _hoisted_3$4 = { class: "cloud139_progress" };
  const _hoisted_4$4 = { class: "cloud139_option" };
  const _hoisted_5$3 = { class: "cloud139_option_item" };
  const _hoisted_6$3 = { class: "cloud139_option_item" };
  const _hoisted_7$3 = { class: "cloud139_result" };
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props, { expose: __expose }) {
      const {
        userOptions,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
        downloadExcel
      } = use139Cloud();
      __expose({
        handleEnd
      });
      vue.onMounted(() => {
        var _a, _b, _c, _d, _e;
        userOptions.value.userPhone = ((_e = (_d = (_c = (_b = (_a = document.querySelector(".body_main")) == null ? void 0 : _a.__vue__) == null ? void 0 : _b.$store) == null ? void 0 : _c.state) == null ? void 0 : _d.auth) == null ? void 0 : _e.accountPhone) ?? "";
      });
      return (_ctx, _cache) => {
        const _component_t_button = vue.resolveComponent("t-button");
        const _component_t_space = vue.resolveComponent("t-space");
        const _component_t_progress = vue.resolveComponent("t-progress");
        const _component_t_tooltip = vue.resolveComponent("t-tooltip");
        const _component_t_input_number = vue.resolveComponent("t-input-number");
        const _component_t_radio_button = vue.resolveComponent("t-radio-button");
        const _component_t_radio_group = vue.resolveComponent("t-radio-group");
        const _component_t_collapse_panel = vue.resolveComponent("t-collapse-panel");
        const _component_t_collapse = vue.resolveComponent("t-collapse");
        const _component_t_textarea = vue.resolveComponent("t-textarea");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
          vue.createElementVNode("div", _hoisted_2$4, [
            vue.createVNode(_component_t_space, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_button, {
                  onClick: vue.unref(handleBatchOperation),
                  loading: vue.unref(userOptions).isSharing
                }, {
                  default: vue.withCtx(() => _cache[2] || (_cache[2] = [
                    vue.createTextVNode("批量分享")
                  ])),
                  _: 1
                }, 8, ["onClick", "loading"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(copyValue)
                }, {
                  default: vue.withCtx(() => _cache[3] || (_cache[3] = [
                    vue.createTextVNode("复制到剪贴板")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(download)
                }, {
                  default: vue.withCtx(() => _cache[4] || (_cache[4] = [
                    vue.createTextVNode("下载分享链接")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(downloadExcel)
                }, {
                  default: vue.withCtx(() => _cache[5] || (_cache[5] = [
                    vue.createTextVNode("下载信息为Excel")
                  ])),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", _hoisted_3$4, [
            vue.createVNode(_component_t_progress, {
              percentage: vue.unref(userOptions).shareProgress,
              color: { from: " #84fab0", to: "#00A870" }
            }, null, 8, ["percentage"])
          ]),
          vue.createElementVNode("div", _hoisted_4$4, [
            vue.createVNode(_component_t_collapse, {
              expandMutex: "",
              "default-expand-all": ""
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_collapse_panel, {
                  value: "0",
                  header: "分享配置"
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("div", _hoisted_5$3, [
                      vue.createVNode(_component_t_tooltip, { content: "分享一次后等待下一次分享的时间(避免请求频率过高)" }, {
                        default: vue.withCtx(() => _cache[6] || (_cache[6] = [
                          vue.createElementVNode("span", { class: "cloud139_option_item_title" }, "延迟(毫秒):", -1)
                        ])),
                        _: 1
                      }),
                      vue.createVNode(_component_t_input_number, {
                        modelValue: vue.unref(userOptions).shareDelay,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(userOptions).shareDelay = $event),
                        step: "100"
                      }, null, 8, ["modelValue"])
                    ]),
                    vue.createElementVNode("div", _hoisted_6$3, [
                      _cache[10] || (_cache[10] = vue.createElementVNode("span", { class: "cloud139_option_item_title" }, "有效期:", -1)),
                      vue.createVNode(_component_t_radio_group, {
                        modelValue: vue.unref(userOptions).expiration,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(userOptions).expiration = $event)
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_t_radio_button, {
                            value: vue.unref(ExpireTimeEnum$3).oneDay
                          }, {
                            default: vue.withCtx(() => _cache[7] || (_cache[7] = [
                              vue.createTextVNode("1天")
                            ])),
                            _: 1
                          }, 8, ["value"]),
                          vue.createVNode(_component_t_radio_button, {
                            value: vue.unref(ExpireTimeEnum$3).sevenDay
                          }, {
                            default: vue.withCtx(() => _cache[8] || (_cache[8] = [
                              vue.createTextVNode("7天")
                            ])),
                            _: 1
                          }, 8, ["value"]),
                          vue.createVNode(_component_t_radio_button, {
                            value: vue.unref(ExpireTimeEnum$3).forever
                          }, {
                            default: vue.withCtx(() => _cache[9] || (_cache[9] = [
                              vue.createTextVNode("永久")
                            ])),
                            _: 1
                          }, 8, ["value"])
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", _hoisted_7$3, [
            vue.createVNode(_component_t_textarea, {
              readonly: "",
              autosize: { minRows: 10 },
              value: vue.unref(userOptions).shareInfoUserSee,
              placeholder: "分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
            }, null, 8, ["value"])
          ])
        ]);
      };
    }
  });
  const cloud139 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-f1489390"]]);
  var ExpireTimeEnum$2 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 1] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["twoDay"] = 2] = "twoDay";
    ExpireTimeEnum2[ExpireTimeEnum2["threeDay"] = 3] = "threeDay";
    ExpireTimeEnum2[ExpireTimeEnum2["fourDay"] = 4] = "fourDay";
    ExpireTimeEnum2[ExpireTimeEnum2["fiveDay"] = 5] = "fiveDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sixDay"] = 6] = "sixDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 7] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = -1] = "forever";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$2 || {});
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
  const transformExcelInfoData$2 = (data) => {
    return (data == null ? void 0 : data.map((item) => {
      let time;
      switch (item.expireTime) {
        case ExpireTimeEnum$2.forever:
          time = "永久";
          break;
        case ExpireTimeEnum$2.oneDay:
          time = "1天";
          break;
        case ExpireTimeEnum$2.twoDay:
          time = "2天";
          break;
        case ExpireTimeEnum$2.threeDay:
          time = "3天";
          break;
        case ExpireTimeEnum$2.fourDay:
          time = "4天";
          break;
        case ExpireTimeEnum$2.fiveDay:
          time = "5天";
          break;
        case ExpireTimeEnum$2.sixDay:
          time = "6天";
          break;
        case ExpireTimeEnum$2.sevenDay:
          time = "7天";
          break;
        default:
          time = "未知";
      }
      let codeNumber;
      switch (item.extractNumber) {
        case ExtractEnum$1.forever:
          codeNumber = "无限";
          break;
        case ExtractEnum$1.One:
          codeNumber = "1次";
          break;
        case ExtractEnum$1.Two:
          codeNumber = "2次";
          break;
        case ExtractEnum$1.Three:
          codeNumber = "3次";
          break;
        case ExtractEnum$1.Four:
          codeNumber = "4次";
          break;
        case ExtractEnum$1.Five:
          codeNumber = "5次";
          break;
        case ExtractEnum$1.Six:
          codeNumber = "6次";
          break;
        case ExtractEnum$1.Seven:
          codeNumber = "7次";
          break;
        case ExtractEnum$1.Eight:
          codeNumber = "8次";
          break;
        case ExtractEnum$1.Nine:
          codeNumber = "9次";
          break;
        case ExtractEnum$1.Ten:
          codeNumber = "10次";
          break;
        case ExtractEnum$1.Eleven:
          codeNumber = "11次";
          break;
        case ExtractEnum$1.Twelve:
          codeNumber = "12次";
          break;
        case ExtractEnum$1.Thirteen:
          codeNumber = "13次";
          break;
        case ExtractEnum$1.Fourteen:
          codeNumber = "14次";
          break;
        case ExtractEnum$1.Fifteen:
          codeNumber = "15次";
          break;
        case ExtractEnum$1.Sixteen:
          codeNumber = "16次";
          break;
        case ExtractEnum$1.Seventeen:
          codeNumber = "17次";
          break;
        case ExtractEnum$1.Eighteen:
          codeNumber = "18次";
          break;
        case ExtractEnum$1.Nineteen:
          codeNumber = "19次";
          break;
        case ExtractEnum$1.Twenty:
          codeNumber = "20次";
          break;
        default:
          codeNumber = "未知";
      }
      return {
        "文件名称": (item == null ? void 0 : item.fileName) ?? "",
        "分享链接": (item == null ? void 0 : item.share_url) ?? "",
        "提取码": (item == null ? void 0 : item.pass_code) ?? "",
        "有效期": time,
        "有效次数": codeNumber
      };
    })) ?? [];
  };
  const useXunCloud = () => {
    const userOptions = vue.ref({
      expireTimeOptions: [
        { label: "不限", value: ExpireTimeEnum$2.forever },
        { label: "1天", value: ExpireTimeEnum$2.oneDay },
        { label: "2天", value: ExpireTimeEnum$2.twoDay },
        { label: "3天", value: ExpireTimeEnum$2.threeDay },
        { label: "4天", value: ExpireTimeEnum$2.fourDay },
        { label: "5天", value: ExpireTimeEnum$2.fiveDay },
        { label: "6天", value: ExpireTimeEnum$2.sixDay },
        { label: "7天", value: ExpireTimeEnum$2.sevenDay }
      ],
      extractOptions: [
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
      ],
      shareDelay: 500,
      allowQuickAccess: true,
      expireTime: ExpireTimeEnum$2.forever,
      extractNumber: ExtractEnum$1.forever,
      shareInfo: [],
      shareInfoUserSee: "",
      shareProgress: 0,
      selectFileInfoList: [],
      isSharing: false
    });
    const handleTransformFormat = (info) => {
      if (!info.error_description) {
        let time;
        switch (info.expireTime) {
          case ExpireTimeEnum$2.forever:
            time = "永久";
            break;
          case ExpireTimeEnum$2.oneDay:
            time = "1天";
            break;
          case ExpireTimeEnum$2.twoDay:
            time = "2天";
            break;
          case ExpireTimeEnum$2.threeDay:
            time = "3天";
            break;
          case ExpireTimeEnum$2.fourDay:
            time = "4天";
            break;
          case ExpireTimeEnum$2.fiveDay:
            time = "5天";
            break;
          case ExpireTimeEnum$2.sixDay:
            time = "6天";
            break;
          case ExpireTimeEnum$2.sevenDay:
            time = "7天";
            break;
          default:
            time = "未知";
        }
        let codeNumber;
        switch (info.extractNumber) {
          case ExtractEnum$1.forever:
            codeNumber = "无限";
            break;
          case ExtractEnum$1.One:
            codeNumber = "1次";
            break;
          case ExtractEnum$1.Two:
            codeNumber = "2次";
            break;
          case ExtractEnum$1.Three:
            codeNumber = "3次";
            break;
          case ExtractEnum$1.Four:
            codeNumber = "4次";
            break;
          case ExtractEnum$1.Five:
            codeNumber = "5次";
            break;
          case ExtractEnum$1.Six:
            codeNumber = "6次";
            break;
          case ExtractEnum$1.Seven:
            codeNumber = "7次";
            break;
          case ExtractEnum$1.Eight:
            codeNumber = "8次";
            break;
          case ExtractEnum$1.Nine:
            codeNumber = "9次";
            break;
          case ExtractEnum$1.Ten:
            codeNumber = "10次";
            break;
          case ExtractEnum$1.Eleven:
            codeNumber = "11次";
            break;
          case ExtractEnum$1.Twelve:
            codeNumber = "12次";
            break;
          case ExtractEnum$1.Thirteen:
            codeNumber = "13次";
            break;
          case ExtractEnum$1.Fourteen:
            codeNumber = "14次";
            break;
          case ExtractEnum$1.Fifteen:
            codeNumber = "15次";
            break;
          case ExtractEnum$1.Sixteen:
            codeNumber = "16次";
            break;
          case ExtractEnum$1.Seventeen:
            codeNumber = "17次";
            break;
          case ExtractEnum$1.Eighteen:
            codeNumber = "18次";
            break;
          case ExtractEnum$1.Nineteen:
            codeNumber = "19次";
            break;
          case ExtractEnum$1.Twenty:
            codeNumber = "20次";
            break;
          default:
            codeNumber = "未知";
        }
        return `文件名称: ${info.fileName} 分享链接:${info.share_url} 提取码:${info.pass_code} 有效期: ${time} 有效次数:${codeNumber}`;
      } else {
        return `文件名称: ${info.fileName} 分享错误信息: ${info.error_description}`;
      }
    };
    const handleBatchOperation = async () => {
      var _a;
      const tempDOM = document.querySelector(".pan-web");
      const selectedRowKeys = tempDOM.__vue__.$parent.fileSelected ?? [];
      const allInfo = tempDOM.__vue__.$store.state.drive.all ?? {};
      const selectRowInfos = selectedRowKeys.map((id) => allInfo[id]) ?? [];
      const temp1 = findLocalStorageKeysWithPrefix("captcha_") ?? {};
      const temp2 = findLocalStorageKeysWithPrefix("credentials_") ?? {};
      if (!selectedRowKeys.length) {
        return tdesignVueNext.MessagePlugin.warning("请选择要分享的文件!");
      }
      const headers = {
        "x-client-id": "",
        "x-device-id": (_a = localStorage.getItem("deviceid")) == null ? void 0 : _a.slice(6, 38),
        "x-captcha-token": temp1.token,
        "authorization": `${temp2.token_type} ` + temp2.access_token
      };
      userOptions.value.isSharing = true;
      const currentShareInfo = [];
      for (let item of selectRowInfos) {
        userOptions.value.selectFileInfoList.push({
          id: item == null ? void 0 : item.id,
          fileName: (item == null ? void 0 : item.name) ?? "",
          expireTime: userOptions.value.expireTime,
          extractNumber: userOptions.value.extractNumber
        });
      }
      for (let fileInfo of userOptions.value.selectFileInfoList) {
        const { data } = await axios({
          method: "post",
          url: "https://api-pan.xunlei.com/drive/v1/share",
          data: {
            expiration_days: fileInfo.expireTime + "",
            file_ids: [fileInfo.id],
            params: {
              subscribe_push: "false"
            },
            restore_limit: fileInfo.extractNumber + "",
            share_to: "copy",
            title: "云盘资源分享"
          },
          headers
        }).catch(({ response }) => response);
        let tempData = {
          ...fileInfo,
          share_text: (data == null ? void 0 : data.share_text) ?? "",
          share_url: (data == null ? void 0 : data.share_url) ?? "",
          pass_code: (data == null ? void 0 : data.pass_code) ?? "",
          error_description: (data == null ? void 0 : data.error_description) ?? ""
        };
        userOptions.value.shareInfo.push(tempData);
        currentShareInfo.push(tempData);
        userOptions.value.shareInfoUserSee += handleTransformFormat(tempData) + "\n";
        userOptions.value.shareProgress = Math.floor(currentShareInfo.length / userOptions.value.selectFileInfoList.length * 100);
        await new Promise((resolve2) => {
          setTimeout(() => {
            resolve2();
          }, userOptions.value.shareDelay);
        });
      }
      userOptions.value.selectFileInfoList = [];
      userOptions.value.shareProgress = 100;
      userOptions.value.isSharing = false;
      await tdesignVueNext.MessagePlugin.success("批量分享成功,请自行查看结果");
    };
    const handleEnd = () => {
      userOptions.value.shareInfo = [];
      userOptions.value.selectFileInfoList = [];
      userOptions.value.shareInfoUserSee = "";
      userOptions.value.shareProgress = 0;
    };
    const copyValue = () => {
      CopyValueToClipBoard(userOptions.value.shareInfoUserSee + "").then(() => {
        tdesignVueNext.MessagePlugin.success("复制成功");
      }).catch(() => {
        tdesignVueNext.MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
      });
    };
    const download = () => {
      DownloadTxt(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}`, userOptions.value.shareInfoUserSee);
    };
    const downloadExcel = () => {
      exportXlsxFile(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}.xlsx`, transformExcelInfoData$2(userOptions.value.shareInfo));
    };
    return {
      userOptions,
      handleBatchOperation,
      handleTransformFormat,
      handleEnd,
      copyValue,
      download,
      downloadExcel
    };
  };
  const _hoisted_1$3 = { class: "xunCloud" };
  const _hoisted_2$3 = { class: "xunCloud_option" };
  const _hoisted_3$3 = { class: "xunCloud_option_item" };
  const _hoisted_4$3 = { class: "xunCloud_option_item" };
  const _hoisted_5$2 = { class: "xunCloud_option_item" };
  const _hoisted_6$2 = { class: "xunCloud_operation" };
  const _hoisted_7$2 = { class: "xunCloud_progress" };
  const _hoisted_8$2 = { class: "xunCloud_result" };
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props, { expose: __expose }) {
      const {
        userOptions,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
        downloadExcel
      } = useXunCloud();
      __expose({
        handleEnd
      });
      return (_ctx, _cache) => {
        const _component_t_tooltip = vue.resolveComponent("t-tooltip");
        const _component_t_input_number = vue.resolveComponent("t-input-number");
        const _component_t_select = vue.resolveComponent("t-select");
        const _component_t_checkbox = vue.resolveComponent("t-checkbox");
        const _component_t_button = vue.resolveComponent("t-button");
        const _component_t_space = vue.resolveComponent("t-space");
        const _component_t_progress = vue.resolveComponent("t-progress");
        const _component_t_textarea = vue.resolveComponent("t-textarea");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [
          vue.createElementVNode("div", _hoisted_2$3, [
            vue.createElementVNode("div", _hoisted_3$3, [
              vue.createVNode(_component_t_tooltip, { content: "分享一次后等待下一次分享的时间(避免请求频率过高)" }, {
                default: vue.withCtx(() => _cache[4] || (_cache[4] = [
                  vue.createElementVNode("span", { class: "xunCloud_option_item_title" }, "延迟毫秒:", -1)
                ])),
                _: 1
              }),
              vue.createVNode(_component_t_input_number, {
                modelValue: vue.unref(userOptions).shareDelay,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(userOptions).shareDelay = $event),
                step: "100"
              }, null, 8, ["modelValue"])
            ]),
            vue.createElementVNode("div", _hoisted_4$3, [
              _cache[5] || (_cache[5] = vue.createElementVNode("span", { class: "xunCloud_option_item_title" }, "提取次数:", -1)),
              vue.createVNode(_component_t_select, {
                modelValue: vue.unref(userOptions).extractNumber,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(userOptions).extractNumber = $event),
                placeholder: "请选择提取次数",
                "auto-width": "",
                options: vue.unref(userOptions).extractOptions
              }, null, 8, ["modelValue", "options"])
            ]),
            vue.createElementVNode("div", _hoisted_5$2, [
              _cache[6] || (_cache[6] = vue.createElementVNode("span", { class: "xunCloud_option_item_title" }, "提取期限:", -1)),
              vue.createVNode(_component_t_select, {
                modelValue: vue.unref(userOptions).expireTime,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(userOptions).expireTime = $event),
                placeholder: "请选择提取期限",
                "auto-width": "",
                options: vue.unref(userOptions).expireTimeOptions
              }, null, 8, ["modelValue", "options"])
            ]),
            vue.createVNode(_component_t_checkbox, {
              modelValue: vue.unref(userOptions).allowQuickAccess,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.unref(userOptions).allowQuickAccess = $event)
            }, {
              default: vue.withCtx(() => _cache[7] || (_cache[7] = [
                vue.createTextVNode("允许快速访问分享链接(无用功能)")
              ])),
              _: 1
            }, 8, ["modelValue"])
          ]),
          vue.createElementVNode("div", _hoisted_6$2, [
            vue.createVNode(_component_t_space, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_button, {
                  onClick: vue.unref(handleBatchOperation),
                  loading: vue.unref(userOptions).isSharing
                }, {
                  default: vue.withCtx(() => _cache[8] || (_cache[8] = [
                    vue.createTextVNode("批量分享")
                  ])),
                  _: 1
                }, 8, ["onClick", "loading"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(copyValue)
                }, {
                  default: vue.withCtx(() => _cache[9] || (_cache[9] = [
                    vue.createTextVNode("复制到剪贴板")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(download)
                }, {
                  default: vue.withCtx(() => _cache[10] || (_cache[10] = [
                    vue.createTextVNode("下载分享链接")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(downloadExcel)
                }, {
                  default: vue.withCtx(() => _cache[11] || (_cache[11] = [
                    vue.createTextVNode("下载信息为Excel")
                  ])),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", _hoisted_7$2, [
            vue.createVNode(_component_t_progress, {
              percentage: vue.unref(userOptions).shareProgress,
              color: { from: " #84fab0", to: "#00A870" }
            }, null, 8, ["percentage"])
          ]),
          vue.createElementVNode("div", _hoisted_8$2, [
            vue.createVNode(_component_t_textarea, {
              readonly: "",
              autosize: { minRows: 10 },
              value: vue.unref(userOptions).shareInfoUserSee,
              placeholder: "分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
            }, null, 8, ["value"])
          ])
        ]);
      };
    }
  });
  const cloudXun = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3dbd7c07"]]);
  var ExpireTimeEnum$1 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = -1] = "forever";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 7] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["thirtyDay"] = 30] = "thirtyDay";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$1 || {});
  var PwdEnum = /* @__PURE__ */ ((PwdEnum2) => {
    PwdEnum2[PwdEnum2["no"] = 0] = "no";
    PwdEnum2[PwdEnum2["yes"] = 1] = "yes";
    return PwdEnum2;
  })(PwdEnum || {});
  const transformExcelInfoData$1 = (data) => {
    return (data == null ? void 0 : data.map((item) => {
      let time;
      switch (item.expireTimeEnum) {
        case ExpireTimeEnum$1.forever:
          time = "永久";
          break;
        case ExpireTimeEnum$1.sevenDay:
          time = "7天";
          break;
        case ExpireTimeEnum$1.thirtyDay:
          time = "30天";
          break;
        default:
          time = "未知";
      }
      return {
        "文件名称": (item == null ? void 0 : item.fileName) ?? "",
        "分享链接": (item == null ? void 0 : item.share_url) ?? "",
        "提取码": (item == null ? void 0 : item.pwd) ?? "",
        "有效期": time
      };
    })) ?? [];
  };
  const useAliCloud = () => {
    const userOptions = vue.ref({
      shareDelay: 500,
      expireTime: ExpireTimeEnum$1.forever,
      shareInfo: [],
      shareInfoUserSee: "",
      shareProgress: 0,
      selectFileInfoList: [],
      isSharing: false,
      pwd: "",
      pwdType: PwdEnum.yes
    });
    const handleTransformFormat = (info) => {
      if (!info.display_message) {
        let time;
        switch (info.expireTimeEnum) {
          case ExpireTimeEnum$1.forever:
            time = "永久";
            break;
          case ExpireTimeEnum$1.sevenDay:
            time = "7天";
            break;
          case ExpireTimeEnum$1.thirtyDay:
            time = "30天";
            break;
          default:
            time = "未知";
        }
        return `文件名称: ${info.fileName} 链接:${info.share_url} 提取码:${info.pwd ?? "无"} 有效期: ${time} `;
      } else {
        return `文件名称: ${info.fileName} 错误信息${info.display_message}`;
      }
    };
    const handleBatchOperation = async () => {
      var _a, _b, _c, _d, _e;
      const reactDOM = document.querySelector("div[class^='node-list--']");
      if (!reactDOM) {
        throw new Error("初始化阿里云盘失败,DOM未找到");
      }
      const key = (_a = Object.keys(reactDOM)) == null ? void 0 : _a.find(
        (key2) => key2.startsWith("__reactFiber$")
      );
      if (!key) {
        console.error("初始化阿里云盘失败,key未找到");
        throw new Error("初始化阿里云盘失败,key未找到");
      }
      const selectedRowInfos = ((_e = (_d = (_c = (_b = reactDOM == null ? void 0 : reactDOM[key]) == null ? void 0 : _b["return"]) == null ? void 0 : _c.pendingProps) == null ? void 0 : _d.listModel) == null ? void 0 : _e.selectedItems) ?? [];
      if (!selectedRowInfos.length) {
        return tdesignVueNext.MessagePlugin.warning("请选择要分享的文件!");
      }
      userOptions.value.isSharing = true;
      const currentShareInfo = [];
      const token = JSON.parse(localStorage.getItem("token") ?? `{}`) ?? {};
      for (let item of selectedRowInfos) {
        userOptions.value.selectFileInfoList.push({
          id: item == null ? void 0 : item.fileId,
          fileName: (item == null ? void 0 : item.name) ?? "",
          driveId: (item == null ? void 0 : item.driveId) ?? "",
          expireTime: (() => {
            let day;
            switch (userOptions.value.expireTime) {
              case ExpireTimeEnum$1.sevenDay:
                day = 7;
                break;
              case ExpireTimeEnum$1.thirtyDay:
                day = 30;
                break;
            }
            if (!day)
              return "";
            return dayjs().add(day, "d");
          })(),
          expireTimeEnum: userOptions.value.expireTime,
          //后期回显用
          pwd: userOptions.value.pwdType === PwdEnum.yes ? generateRandomString(4) : ""
        });
      }
      for (let fileInfo of userOptions.value.selectFileInfoList) {
        const { data } = await axios({
          method: "post",
          url: "https://api.aliyundrive.com/adrive/v2/share_link/create",
          data: {
            "drive_id": fileInfo.driveId,
            "expiration": fileInfo.expireTime,
            "file_id_list": [fileInfo.id],
            "sync_to_homepage": false,
            "share_pwd": fileInfo.pwd
          },
          headers: {
            "authorization": `${token.token_type} ${token.access_token}`
          }
        }).catch(({ response }) => response);
        let tempData = {
          ...fileInfo,
          share_url: (data == null ? void 0 : data.share_url) ?? "",
          share_name: (data == null ? void 0 : data.share_name) ?? "",
          display_message: (data == null ? void 0 : data.display_message) || (data == null ? void 0 : data.message)
        };
        userOptions.value.shareInfo.push(tempData);
        currentShareInfo.push(tempData);
        userOptions.value.shareInfoUserSee += handleTransformFormat(tempData) + "\n";
        userOptions.value.shareProgress = Math.floor(currentShareInfo.length / userOptions.value.selectFileInfoList.length * 100);
        await new Promise((resolve2) => {
          setTimeout(() => {
            resolve2();
          }, userOptions.value.shareDelay);
        });
      }
      userOptions.value.selectFileInfoList = [];
      userOptions.value.shareProgress = 100;
      userOptions.value.isSharing = false;
      await tdesignVueNext.MessagePlugin.success("批量分享成功,请自行查看结果");
    };
    const handleEnd = () => {
      userOptions.value.selectFileInfoList = [];
      userOptions.value.shareInfo = [];
      userOptions.value.shareInfoUserSee = "";
      userOptions.value.shareProgress = 0;
    };
    const copyValue = () => {
      CopyValueToClipBoard(userOptions.value.shareInfoUserSee + "").then(() => {
        tdesignVueNext.MessagePlugin.success("复制成功");
      }).catch(() => {
        tdesignVueNext.MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
      });
    };
    const download = () => {
      DownloadTxt(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}`, userOptions.value.shareInfoUserSee);
    };
    const downloadExcel = () => {
      exportXlsxFile(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}.xlsx`, transformExcelInfoData$1(userOptions.value.shareInfo));
    };
    return {
      userOptions,
      handleBatchOperation,
      handleTransformFormat,
      handleEnd,
      copyValue,
      download,
      downloadExcel
    };
  };
  const _hoisted_1$2 = { class: "aliCloud" };
  const _hoisted_2$2 = { class: "aliCloud_option" };
  const _hoisted_3$2 = { class: "aliCloud_option_item" };
  const _hoisted_4$2 = { class: "aliCloud_option_item" };
  const _hoisted_5$1 = { class: "aliCloud_option_item" };
  const _hoisted_6$1 = { class: "aliCloud_operation" };
  const _hoisted_7$1 = { class: "aliCloud_progress" };
  const _hoisted_8$1 = { class: "aliCloud_result" };
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props, { expose: __expose }) {
      const {
        userOptions,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
        downloadExcel
      } = useAliCloud();
      __expose({
        handleEnd
      });
      return (_ctx, _cache) => {
        const _component_t_tooltip = vue.resolveComponent("t-tooltip");
        const _component_t_input_number = vue.resolveComponent("t-input-number");
        const _component_t_radio_button = vue.resolveComponent("t-radio-button");
        const _component_t_radio_group = vue.resolveComponent("t-radio-group");
        const _component_t_button = vue.resolveComponent("t-button");
        const _component_t_space = vue.resolveComponent("t-space");
        const _component_t_progress = vue.resolveComponent("t-progress");
        const _component_t_textarea = vue.resolveComponent("t-textarea");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
          vue.createElementVNode("div", _hoisted_2$2, [
            vue.createElementVNode("div", _hoisted_3$2, [
              vue.createVNode(_component_t_tooltip, { content: "分享一次后等待下一次分享的时间(避免请求频率过高)" }, {
                default: vue.withCtx(() => _cache[3] || (_cache[3] = [
                  vue.createElementVNode("span", { class: "aliCloud_option_item_title" }, "延迟毫秒:", -1)
                ])),
                _: 1
              }),
              vue.createVNode(_component_t_input_number, {
                modelValue: vue.unref(userOptions).shareDelay,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(userOptions).shareDelay = $event),
                step: "100"
              }, null, 8, ["modelValue"])
            ]),
            vue.createElementVNode("div", _hoisted_4$2, [
              _cache[7] || (_cache[7] = vue.createElementVNode("span", { class: "aliCloud_option_item_title" }, "有效期:", -1)),
              vue.createVNode(_component_t_radio_group, {
                modelValue: vue.unref(userOptions).expireTime,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(userOptions).expireTime = $event)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$1).sevenDay
                  }, {
                    default: vue.withCtx(() => _cache[4] || (_cache[4] = [
                      vue.createTextVNode("7天")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$1).thirtyDay
                  }, {
                    default: vue.withCtx(() => _cache[5] || (_cache[5] = [
                      vue.createTextVNode("30天")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(ExpireTimeEnum$1).forever
                  }, {
                    default: vue.withCtx(() => _cache[6] || (_cache[6] = [
                      vue.createTextVNode("永久")
                    ])),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            vue.createElementVNode("div", _hoisted_5$1, [
              _cache[10] || (_cache[10] = vue.createElementVNode("span", { class: "aliCloud_option_item_title" }, "分享形式:", -1)),
              vue.createVNode(_component_t_radio_group, {
                modelValue: vue.unref(userOptions).pwdType,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(userOptions).pwdType = $event)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(PwdEnum).no
                  }, {
                    default: vue.withCtx(() => _cache[8] || (_cache[8] = [
                      vue.createTextVNode("无提取码")
                    ])),
                    _: 1
                  }, 8, ["value"]),
                  vue.createVNode(_component_t_radio_button, {
                    value: vue.unref(PwdEnum).yes
                  }, {
                    default: vue.withCtx(() => _cache[9] || (_cache[9] = [
                      vue.createTextVNode("随机提取码")
                    ])),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_6$1, [
            vue.createVNode(_component_t_space, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_button, {
                  onClick: vue.unref(handleBatchOperation),
                  loading: vue.unref(userOptions).isSharing
                }, {
                  default: vue.withCtx(() => _cache[11] || (_cache[11] = [
                    vue.createTextVNode("批量分享")
                  ])),
                  _: 1
                }, 8, ["onClick", "loading"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(copyValue)
                }, {
                  default: vue.withCtx(() => _cache[12] || (_cache[12] = [
                    vue.createTextVNode("复制到剪贴板")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(download)
                }, {
                  default: vue.withCtx(() => _cache[13] || (_cache[13] = [
                    vue.createTextVNode("下载分享链接")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(downloadExcel)
                }, {
                  default: vue.withCtx(() => _cache[14] || (_cache[14] = [
                    vue.createTextVNode("下载信息为Excel")
                  ])),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", _hoisted_7$1, [
            vue.createVNode(_component_t_progress, {
              percentage: vue.unref(userOptions).shareProgress,
              color: { from: " #84fab0", to: "#00A870" }
            }, null, 8, ["percentage"])
          ]),
          vue.createElementVNode("div", _hoisted_8$1, [
            vue.createVNode(_component_t_textarea, {
              readonly: "",
              autosize: { minRows: 10 },
              value: vue.unref(userOptions).shareInfoUserSee,
              placeholder: "(仅限在'资源库'分享资源!)-分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx) 普通用户每天只能使用分享功能5次；会员用户和Lv.1及以上的达人用户，每天可使用分享次数1000次。超过上限后，将提示「今日分享次数已达上限」\r\n        "
            }, null, 8, ["value"])
          ])
        ]);
      };
    }
  });
  const cloudAli = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3ab6544a"]]);
  var ExpireTimeEnum = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 3] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["thirty"] = 4] = "thirty";
    ExpireTimeEnum2[ExpireTimeEnum2["sixty"] = 5] = "sixty";
    ExpireTimeEnum2[ExpireTimeEnum2["halfYear"] = 7] = "halfYear";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = 1] = "forever";
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 2] = "oneDay";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum || {});
  var ExtractEnum = /* @__PURE__ */ ((ExtractEnum2) => {
    ExtractEnum2[ExtractEnum2["forever"] = -1] = "forever";
    ExtractEnum2[ExtractEnum2["one"] = 1] = "one";
    ExtractEnum2[ExtractEnum2["five"] = 5] = "five";
    ExtractEnum2[ExtractEnum2["ten"] = 10] = "ten";
    ExtractEnum2[ExtractEnum2["fifty"] = 50] = "fifty";
    ExtractEnum2[ExtractEnum2["hundred"] = 100] = "hundred";
    return ExtractEnum2;
  })(ExtractEnum || {});
  function getTaskId(data) {
    return new Promise((resolve2, reject2) => {
      _GM_xmlhttpRequest({
        method: "post",
        url: "https://pc-api.uc.cn/1/clouddrive/share?pr=UCBrowser&fr=pc",
        headers: {
          "accept": "application/json, text/plain, */*"
        },
        data: JSON.stringify(data),
        onload: ({ response }) => {
          var _a, _b, _c, _d;
          const { data: data2 = {} } = JSON.parse(response) || {};
          resolve2({
            task_id: (data2 == null ? void 0 : data2.task_id) ? data2 == null ? void 0 : data2.task_id : (_b = (_a = data2 == null ? void 0 : data2.task_resp) == null ? void 0 : _a.data) == null ? void 0 : _b.task_id,
            share_id: ((_d = (_c = data2 == null ? void 0 : data2.task_resp) == null ? void 0 : _c.data) == null ? void 0 : _d.share_id) ?? ""
          });
        },
        onerror: (res) => {
          reject2(res);
        }
      });
    });
  }
  function getShareId(taskId, time = 0) {
    return new Promise((resolve2, reject2) => {
      _GM_xmlhttpRequest({
        method: "get",
        url: `https://pc-api.uc.cn/1/clouddrive/task?pr=UCBrowser&fr=pc&task_id=${taskId}&retry_index=${time}`,
        headers: {
          "accept": "application/json, text/plain, */*"
        },
        onload: ({ response }) => {
          const { data = {} } = JSON.parse(response) || {};
          resolve2({
            share_id: (data == null ? void 0 : data.share_id) ?? ""
          });
        },
        onerror: (res) => {
          reject2(res);
        }
      });
    });
  }
  function getShareInfo(share_id) {
    return new Promise((resolve2, reject2) => {
      _GM_xmlhttpRequest({
        method: "post",
        url: "https://pc-api.uc.cn/1/clouddrive/share/password?pr=UCBrowser&fr=pc",
        data: JSON.stringify({
          share_id
        }),
        onload: ({ response }) => {
          const { data } = JSON.parse(response) || {};
          const { share_url = "", passcode = "" } = data || {};
          resolve2({
            share_url,
            passcode
          });
        },
        onerror: (res) => {
          reject2(res);
        }
      });
    });
  }
  const transformExcelInfoData = (data) => {
    return (data == null ? void 0 : data.map((item) => {
      let time;
      switch (item.expireTime) {
        case ExpireTimeEnum.forever:
          time = "永久";
          break;
        case ExpireTimeEnum.oneDay:
          time = "1天";
          break;
        case ExpireTimeEnum.sevenDay:
          time = "7天";
          break;
        case ExpireTimeEnum.thirty:
          time = "30天";
          break;
        case ExpireTimeEnum.sixty:
          time = "60天";
          break;
        case ExpireTimeEnum.halfYear:
          time = "180天";
          break;
        default:
          time = "未知";
      }
      let codeNumber;
      switch (item.extractNumber) {
        case ExtractEnum.forever:
          codeNumber = "无限";
          break;
        case null:
          codeNumber = "无限";
          break;
        case ExtractEnum.one:
          codeNumber = "1次";
          break;
        case ExtractEnum.five:
          codeNumber = "5次";
          break;
        case ExtractEnum.ten:
          codeNumber = "10次";
          break;
        case ExtractEnum.fifty:
          codeNumber = "50次";
          break;
        case ExtractEnum.hundred:
          codeNumber = "100次";
          break;
        default:
          codeNumber = "未知";
      }
      return {
        "文件名称": (item == null ? void 0 : item.fileName) ?? "",
        "分享链接": (item == null ? void 0 : item.share_url) ?? "",
        "提取码": (item == null ? void 0 : item.passcode) ? item == null ? void 0 : item.passcode : "无提取码",
        "有效期": time,
        "可下载次数": codeNumber,
        "分享主题": (item == null ? void 0 : item.title) ?? ""
      };
    })) ?? [];
  };
  const useUcCloud = () => {
    const userOptions = vue.ref({
      //自定义提取码
      selfPwd: "",
      //有效期
      expireTimeOptions: [
        { label: "不限", value: ExpireTimeEnum.forever },
        { label: "1天", value: ExpireTimeEnum.oneDay },
        { label: "7天", value: ExpireTimeEnum.sevenDay },
        { label: "30天", value: ExpireTimeEnum.thirty },
        { label: "60天", value: ExpireTimeEnum.sixty },
        { label: "180天", value: ExpireTimeEnum.halfYear }
      ],
      //可下载次数
      extractOptions: [
        { label: "不限", value: ExtractEnum.forever },
        { label: "1次", value: ExtractEnum.one },
        { label: "5次", value: ExtractEnum.five },
        { label: "10次", value: ExtractEnum.ten },
        { label: "50次", value: ExtractEnum.fifty },
        { label: "100次", value: ExtractEnum.hundred }
      ],
      shareDelay: 500,
      isPassword: true,
      shareTopic: "",
      expireTime: ExpireTimeEnum.forever,
      extractNumber: ExtractEnum.forever,
      shareInfo: [],
      shareInfoUserSee: "",
      shareProgress: 0,
      selectFileInfoList: [],
      isSharing: false
    });
    const handleTransformFormat = (info) => {
      let time;
      switch (info.expireTime) {
        case ExpireTimeEnum.forever:
          time = "永久";
          break;
        case ExpireTimeEnum.oneDay:
          time = "1天";
          break;
        case ExpireTimeEnum.sevenDay:
          time = "7天";
          break;
        case ExpireTimeEnum.thirty:
          time = "30天";
          break;
        case ExpireTimeEnum.sixty:
          time = "60天";
          break;
        case ExpireTimeEnum.halfYear:
          time = "180天";
          break;
        default:
          time = "未知";
      }
      let codeNumber;
      switch (info.extractNumber) {
        case ExtractEnum.forever:
          codeNumber = "无限";
          break;
        case null:
          codeNumber = "无限";
          break;
        case ExtractEnum.one:
          codeNumber = "1次";
          break;
        case ExtractEnum.five:
          codeNumber = "5次";
          break;
        case ExtractEnum.ten:
          codeNumber = "10次";
          break;
        case ExtractEnum.fifty:
          codeNumber = "50次";
          break;
        case ExtractEnum.hundred:
          codeNumber = "100次";
          break;
        default:
          codeNumber = "未知";
      }
      return info.title ? `文件名称: ${info.fileName} 分享链接:${info.share_url} 提取码:${info.passcode ? info.passcode : "无提取码"} 有效期: ${time} 可下载次数:${codeNumber} 分享主题:${info.title ?? ""}` : `文件名称: ${info.fileName} 分享链接:${info.share_url} 提取码:${info.passcode ? info.passcode : "无提取码"} 有效期: ${time} 可下载次数:${codeNumber}`;
    };
    const handleBatchOperation = async () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const tempDOM = document.querySelector(".file-list");
      if (!tempDOM) {
        throw new Error("初始化UC云盘失败,DOM未找到");
      }
      const key = (_a = Object.keys(tempDOM)) == null ? void 0 : _a.find(
        (key2) => key2.startsWith("__reactInternalInstance$")
      );
      if (!key) {
        console.error("初始化UC云盘失败,key未找到");
        throw new Error("初始化UC云盘失败,key未找到");
      }
      const selectedRowKeys = ((_f = (_e = (_d = (_c = (_b = tempDOM[key]) == null ? void 0 : _b.memoizedProps) == null ? void 0 : _c.children) == null ? void 0 : _d[1]) == null ? void 0 : _e.props) == null ? void 0 : _f.selectedRowKeys) ?? [];
      const allRowInfos = ((_k = (_j = (_i = (_h = (_g = tempDOM[key]) == null ? void 0 : _g.memoizedProps) == null ? void 0 : _h.children) == null ? void 0 : _i[1]) == null ? void 0 : _j.props) == null ? void 0 : _k.list) ?? [];
      if (!selectedRowKeys.length) {
        return tdesignVueNext.MessagePlugin.warning("请选择要分享的文件!");
      }
      const selectRowInfos = ((_l = allRowInfos == null ? void 0 : allRowInfos.filter((item1) => selectedRowKeys == null ? void 0 : selectedRowKeys.some((key2) => key2 === item1.fid))) == null ? void 0 : _l.map((item) => ({ name: item.file_name, id: item.fid }))) ?? [];
      userOptions.value.isSharing = true;
      const currentShareInfo = [];
      for (let item of selectRowInfos) {
        userOptions.value.selectFileInfoList.push({
          id: item == null ? void 0 : item.id,
          fileName: (item == null ? void 0 : item.name) ?? "",
          expireTime: userOptions.value.expireTime,
          //UC网盘提取次数为null代表不限制,但是枚举又不能传入null...
          extractNumber: userOptions.value.extractNumber === -1 ? null : userOptions.value.extractNumber,
          passcode: userOptions.value.isPassword ? userOptions.value.selfPwd ? userOptions.value.selfPwd : generateRandomString() : "",
          title: userOptions.value.shareTopic ?? ""
          //分享主题
        });
      }
      for (let fileInfo of userOptions.value.selectFileInfoList) {
        const tempPassCode = fileInfo.passcode;
        const sendData = {
          expired_type: fileInfo.expireTime,
          //分享天数
          dl_limit: fileInfo.extractNumber,
          //提取次数
          // passcode:fileInfo.passcode,//随机提取码
          // url_type:2,
          url_type: 1,
          //无提取码的type
          title: fileInfo.title,
          //标题
          fid_list: [fileInfo.id]
          //文件id
        };
        if (tempPassCode) {
          sendData["passcode"] = tempPassCode;
          sendData["url_type"] = 2;
        }
        const { task_id } = await getTaskId(sendData);
        let tempShareID = await getShareId(task_id);
        if (!tempShareID.share_id) {
          tempShareID = await getShareId(task_id, 1);
        }
        const { share_url, passcode } = await getShareInfo(tempShareID.share_id).catch(() => ({ share_url: "", passcode: "" }));
        let tempData = {
          ...fileInfo,
          share_url: share_url ?? ""
        };
        userOptions.value.shareInfo.push(tempData);
        currentShareInfo.push(tempData);
        userOptions.value.shareInfoUserSee += handleTransformFormat(tempData) + "\n";
        userOptions.value.shareProgress = Math.floor(currentShareInfo.length / userOptions.value.selectFileInfoList.length * 100);
        await new Promise((resolve2) => {
          setTimeout(() => {
            resolve2();
          }, userOptions.value.shareDelay);
        });
      }
      userOptions.value.shareProgress = 100;
      userOptions.value.selectFileInfoList = [];
      userOptions.value.isSharing = false;
      await tdesignVueNext.MessagePlugin.success("批量分享成功,请自行查看结果");
    };
    const handleEnd = () => {
      userOptions.value.shareInfo = [];
      userOptions.value.selectFileInfoList = [];
      userOptions.value.shareInfoUserSee = "";
      userOptions.value.shareProgress = 0;
    };
    const copyValue = () => {
      CopyValueToClipBoard(userOptions.value.shareInfoUserSee + "").then(() => {
        tdesignVueNext.MessagePlugin.success("复制成功");
      }).catch(() => {
        tdesignVueNext.MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
      });
    };
    const download = () => {
      DownloadTxt(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}`, userOptions.value.shareInfoUserSee);
    };
    const downloadExcel = () => {
      exportXlsxFile(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}.xlsx`, transformExcelInfoData(userOptions.value.shareInfo));
    };
    return {
      userOptions,
      handleBatchOperation,
      handleTransformFormat,
      handleEnd,
      copyValue,
      download,
      downloadExcel
    };
  };
  const _hoisted_1$1 = { class: "ucCloud" };
  const _hoisted_2$1 = { class: "ucCloud_option" };
  const _hoisted_3$1 = { class: "ucCloud_option_item" };
  const _hoisted_4$1 = { class: "ucCloud_option_item" };
  const _hoisted_5 = { class: "ucCloud_option_item" };
  const _hoisted_6 = { class: "ucCloud_option_item" };
  const _hoisted_7 = { class: "ucCloud_operation" };
  const _hoisted_8 = { class: "ucCloud_progress" };
  const _hoisted_9 = { class: "ucCloud_result" };
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props, { expose: __expose }) {
      const {
        userOptions,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
        downloadExcel
      } = useUcCloud();
      __expose({
        handleEnd
      });
      return (_ctx, _cache) => {
        const _component_t_tooltip = vue.resolveComponent("t-tooltip");
        const _component_t_input_number = vue.resolveComponent("t-input-number");
        const _component_t_input = vue.resolveComponent("t-input");
        const _component_t_select = vue.resolveComponent("t-select");
        const _component_t_checkbox = vue.resolveComponent("t-checkbox");
        const _component_t_button = vue.resolveComponent("t-button");
        const _component_t_space = vue.resolveComponent("t-space");
        const _component_t_progress = vue.resolveComponent("t-progress");
        const _component_t_textarea = vue.resolveComponent("t-textarea");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          vue.createElementVNode("div", _hoisted_2$1, [
            vue.createElementVNode("div", _hoisted_3$1, [
              vue.createVNode(_component_t_tooltip, { content: "分享一次后等待下一次分享的时间(避免请求频率过高)" }, {
                default: vue.withCtx(() => _cache[6] || (_cache[6] = [
                  vue.createElementVNode("span", { class: "ucCloud_option_item_title" }, "延迟毫秒:", -1)
                ])),
                _: 1
              }),
              vue.createVNode(_component_t_input_number, {
                modelValue: vue.unref(userOptions).shareDelay,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(userOptions).shareDelay = $event),
                step: "100"
              }, null, 8, ["modelValue"])
            ]),
            vue.createElementVNode("div", _hoisted_4$1, [
              _cache[7] || (_cache[7] = vue.createElementVNode("span", { class: "ucCloud_option_item_title" }, "分享主题:", -1)),
              vue.createVNode(_component_t_input, {
                modelValue: vue.unref(userOptions).shareTopic,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(userOptions).shareTopic = $event),
                maxlength: 30,
                "show-limit-number": "",
                clearable: "",
                placeholder: "分享主题(可为空)"
              }, null, 8, ["modelValue"])
            ]),
            vue.createElementVNode("div", _hoisted_5, [
              _cache[8] || (_cache[8] = vue.createElementVNode("span", { class: "ucCloud_option_item_title" }, "可下载(次):", -1)),
              vue.createVNode(_component_t_select, {
                modelValue: vue.unref(userOptions).extractNumber,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(userOptions).extractNumber = $event),
                placeholder: "请选择提取次数",
                "auto-width": "",
                options: vue.unref(userOptions).extractOptions
              }, null, 8, ["modelValue", "options"])
            ]),
            vue.createElementVNode("div", _hoisted_6, [
              _cache[9] || (_cache[9] = vue.createElementVNode("span", { class: "ucCloud_option_item_title" }, "有效期(天):", -1)),
              vue.createVNode(_component_t_select, {
                modelValue: vue.unref(userOptions).expireTime,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.unref(userOptions).expireTime = $event),
                placeholder: "请选择提取期限",
                "auto-width": "",
                options: vue.unref(userOptions).expireTimeOptions
              }, null, 8, ["modelValue", "options"])
            ]),
            vue.createVNode(_component_t_checkbox, {
              modelValue: vue.unref(userOptions).isPassword,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.unref(userOptions).isPassword = $event)
            }, {
              default: vue.withCtx(() => _cache[10] || (_cache[10] = [
                vue.createTextVNode("是否有收件密码")
              ])),
              _: 1
            }, 8, ["modelValue"]),
            vue.unref(userOptions).isPassword ? (vue.openBlock(), vue.createBlock(_component_t_input, {
              key: 0,
              modelValue: vue.unref(userOptions).selfPwd,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.unref(userOptions).selfPwd = $event),
              maxcharacter: 4,
              "show-limit-number": "",
              placeholder: "只能4字符,估计只能大小写英文数字组合,不填则随机4位提取码,否则分享会失败"
            }, null, 8, ["modelValue"])) : vue.createCommentVNode("", true)
          ]),
          vue.createElementVNode("div", _hoisted_7, [
            vue.createVNode(_component_t_space, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_button, {
                  onClick: vue.unref(handleBatchOperation),
                  loading: vue.unref(userOptions).isSharing
                }, {
                  default: vue.withCtx(() => _cache[11] || (_cache[11] = [
                    vue.createTextVNode("批量分享")
                  ])),
                  _: 1
                }, 8, ["onClick", "loading"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(copyValue)
                }, {
                  default: vue.withCtx(() => _cache[12] || (_cache[12] = [
                    vue.createTextVNode("复制到剪贴板")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(download)
                }, {
                  default: vue.withCtx(() => _cache[13] || (_cache[13] = [
                    vue.createTextVNode("下载分享链接")
                  ])),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(downloadExcel)
                }, {
                  default: vue.withCtx(() => _cache[14] || (_cache[14] = [
                    vue.createTextVNode("下载信息为Excel")
                  ])),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", _hoisted_8, [
            vue.createVNode(_component_t_progress, {
              percentage: vue.unref(userOptions).shareProgress,
              color: { from: " #84fab0", to: "#00A870" }
            }, null, 8, ["percentage"])
          ]),
          vue.createElementVNode("div", _hoisted_9, [
            vue.createVNode(_component_t_textarea, {
              readonly: "",
              autosize: { minRows: 10 },
              value: vue.unref(userOptions).shareInfoUserSee,
              placeholder: "分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
            }, null, 8, ["value"])
          ])
        ]);
      };
    }
  });
  const cloudUC = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-56726208"]]);
  var CopyValueEnum = /* @__PURE__ */ ((CopyValueEnum2) => {
    CopyValueEnum2[CopyValueEnum2["shareLink"] = 0] = "shareLink";
    CopyValueEnum2[CopyValueEnum2["extraLink"] = 1] = "extraLink";
    return CopyValueEnum2;
  })(CopyValueEnum || {});
  const getSelectInfoList = () => {
    var _a;
    const reactDOM = document.querySelector("#appRoot > div > div:nth-of-type(2)");
    const key = (_a = Object.keys(reactDOM)) == null ? void 0 : _a.find(
      (key2) => key2.startsWith("__reactFiber$")
    );
    return reactDOM[key].firstEffect.pendingProps.selection._selectedItems ?? [];
  };
  const useOnedriveCloud = () => {
    const userOptions = vue.ref({
      shareDelay: 500,
      shareProgress: 0,
      shareResultInfoList: [],
      shareInfoUserSee: "",
      isSharing: false
    });
    const handleBatchOperation = async () => {
      const selectedRows = getSelectInfoList();
      console.log("选择的文件", selectedRows);
      if (!selectedRows.length) {
        return tdesignVueNext.MessagePlugin.warning("请选择要分享的文件!");
      }
      userOptions.value.isSharing = true;
      for (let fileInfo of selectedRows) {
      }
      userOptions.value.shareProgress = 100;
      userOptions.value.isSharing = false;
      await tdesignVueNext.MessagePlugin.success("批量分享成功,请自行查看结果");
    };
    const handleEnd = () => {
      userOptions.value.shareResultInfoList = [];
      userOptions.value.shareInfoUserSee = "";
      userOptions.value.shareProgress = 0;
    };
    const copyValue = (type = CopyValueEnum.shareLink) => {
      if (type === CopyValueEnum.shareLink) {
        CopyValueToClipBoard(userOptions.value.shareInfoUserSee + "").then(() => {
          tdesignVueNext.MessagePlugin.success("复制成功");
        }).catch(() => {
          tdesignVueNext.MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
        });
      }
    };
    const download = (type = CopyValueEnum.shareLink) => {
      if (type === CopyValueEnum.shareLink) {
        DownloadTxt(`${cloudInfoStore.cloudName}批量分享-${dayjs().format("YYYY-MM-DD HH:mm:ss")}`, userOptions.value.shareInfoUserSee);
      }
    };
    const downloadExcel = (type = CopyValueEnum.shareLink) => {
      if (type === CopyValueEnum.shareLink)
        ;
    };
    return {
      userOptions,
      handleBatchOperation,
      handleEnd,
      copyValue,
      download,
      downloadExcel
    };
  };
  const _hoisted_1 = { class: "cloud123" };
  const _hoisted_2 = { class: "cloud123_progress" };
  const _hoisted_3 = { class: "cloud123_option" };
  const _hoisted_4 = { class: "cloud123_option_item" };
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props, { expose: __expose }) {
      const {
        userOptions,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
        downloadExcel
      } = useOnedriveCloud();
      __expose({
        handleEnd
      });
      return (_ctx, _cache) => {
        const _component_t_progress = vue.resolveComponent("t-progress");
        const _component_t_button = vue.resolveComponent("t-button");
        const _component_t_space = vue.resolveComponent("t-space");
        const _component_t_tooltip = vue.resolveComponent("t-tooltip");
        const _component_t_input_number = vue.resolveComponent("t-input-number");
        const _component_t_textarea = vue.resolveComponent("t-textarea");
        const _component_t_collapse_panel = vue.resolveComponent("t-collapse-panel");
        const _component_t_collapse = vue.resolveComponent("t-collapse");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("div", _hoisted_2, [
            vue.createVNode(_component_t_progress, {
              percentage: vue.unref(userOptions).shareProgress,
              color: { from: " #84fab0", to: "#00A870" }
            }, null, 8, ["percentage"])
          ]),
          vue.createElementVNode("div", _hoisted_3, [
            vue.createVNode(_component_t_collapse, { "default-expand-all": "" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_collapse_panel, {
                  value: vue.unref(CopyValueEnum).shareLink,
                  header: "分享配置"
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("div", null, [
                      vue.createVNode(_component_t_space, null, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_t_button, {
                            onClick: vue.unref(handleBatchOperation),
                            loading: vue.unref(userOptions).isSharing
                          }, {
                            default: vue.withCtx(() => _cache[1] || (_cache[1] = [
                              vue.createTextVNode("批量分享")
                            ])),
                            _: 1
                          }, 8, ["onClick", "loading"]),
                          vue.createVNode(_component_t_button, {
                            theme: "default",
                            onClick: vue.unref(copyValue)
                          }, {
                            default: vue.withCtx(() => _cache[2] || (_cache[2] = [
                              vue.createTextVNode("复制到剪贴板")
                            ])),
                            _: 1
                          }, 8, ["onClick"]),
                          vue.createVNode(_component_t_button, {
                            theme: "default",
                            onClick: vue.unref(download)
                          }, {
                            default: vue.withCtx(() => _cache[3] || (_cache[3] = [
                              vue.createTextVNode("下载分享链接")
                            ])),
                            _: 1
                          }, 8, ["onClick"]),
                          vue.createVNode(_component_t_button, {
                            theme: "default",
                            onClick: vue.unref(downloadExcel)
                          }, {
                            default: vue.withCtx(() => _cache[4] || (_cache[4] = [
                              vue.createTextVNode("下载信息为Excel")
                            ])),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ]),
                    vue.createElementVNode("div", _hoisted_4, [
                      vue.createVNode(_component_t_tooltip, { content: "分享一次后等待下一次分享的时间(避免请求频率过高)" }, {
                        default: vue.withCtx(() => _cache[5] || (_cache[5] = [
                          vue.createElementVNode("span", { class: "cloud123_option_item_title" }, "延迟(毫秒):", -1)
                        ])),
                        _: 1
                      }),
                      vue.createVNode(_component_t_input_number, {
                        modelValue: vue.unref(userOptions).shareDelay,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(userOptions).shareDelay = $event),
                        step: "100"
                      }, null, 8, ["modelValue"])
                    ]),
                    _cache[6] || (_cache[6] = vue.createElementVNode("div", { class: "cloud123_option_item" }, [
                      vue.createElementVNode("span", { class: "cloud123_option_item_title" }, "有效期:")
                    ], -1)),
                    vue.createElementVNode("div", null, [
                      vue.createVNode(_component_t_textarea, {
                        readonly: "",
                        autosize: { minRows: 10 },
                        value: vue.unref(userOptions).shareInfoUserSee,
                        placeholder: "分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
                      }, null, 8, ["value"])
                    ])
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            })
          ])
        ]);
      };
    }
  });
  const cloudOnedrive = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3551589d"]]);
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const visible = vue.ref(false);
      const operationRef = vue.ref();
      const cloudComponent = vue.shallowRef({
        cloudTianyi,
        cloudBaidu,
        cloud115,
        cloud123,
        cloudLanZou,
        cloudQuark,
        cloud139,
        cloudXun,
        cloudAli,
        cloudUC,
        cloudOnedrive,
        cloudBaiduSync
      });
      const handleOpenDrawerClick = () => {
        visible.value = true;
      };
      const handleClose = () => {
        visible.value = false;
        operationRef.value.handleEnd();
      };
      return (_ctx, _cache) => {
        const _component_t_button = vue.resolveComponent("t-button");
        const _component_t_drawer = vue.resolveComponent("t-drawer");
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.unref(cloudInfoStore).currentCloud === vue.unref(CloudInfoEnum).cloudAli ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            onClick: handleOpenDrawerClick,
            style: { "display": "flex", "flex-direction": "column", "align-items": "center" }
          }, [
            vue.createVNode(vue.unref(CalendarIcon), { slot: "icon" }),
            vue.createElementVNode("span", { onClick: handleOpenDrawerClick }, "分享")
          ])) : (vue.openBlock(), vue.createBlock(_component_t_button, {
            key: 1,
            onClick: handleOpenDrawerClick
          }, {
            default: vue.withCtx(() => _cache[1] || (_cache[1] = [
              vue.createTextVNode("批量分享操作")
            ])),
            _: 1
          })),
          vue.createVNode(_component_t_drawer, {
            visible: visible.value,
            "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => visible.value = $event),
            header: vue.unref(cloudInfoStore).cloudName,
            size: "600px",
            "z-index": 9999,
            "on-confirm": handleClose,
            onClose: handleClose,
            placement: "right",
            closeOnOverlayClick: false
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(cloudComponent.value[vue.unref(cloudInfoStore).cloudKey]), {
                ref_key: "operationRef",
                ref: operationRef
              }, null, 512))
            ]),
            _: 1
          }, 8, ["visible", "header"])
        ], 64);
      };
    }
  });
  const TDesign = (app) => {
    app.use(tdesignVueNext.Button).use(tdesignVueNext.Drawer).use(tdesignVueNext.Radio).use(tdesignVueNext.Space).use(tdesignVueNext.RadioGroup).use(tdesignVueNext.RadioButton).use(tdesignVueNext.Textarea).use(tdesignVueNext.InputNumber).use(tdesignVueNext.Progress).use(tdesignVueNext.Checkbox).use(tdesignVueNext.Tooltip).use(tdesignVueNext.Collapse).use(tdesignVueNext.CollapsePanel).use(tdesignVueNext.Input).use(tdesignVueNext.Table).use(tdesignVueNext.Select).use(tdesignVueNext.Option).use(tdesignVueNext.Form).use(tdesignVueNext.FormItem).use(tdesignVueNext.Switch);
  };
  const Mount = () => {
    const app = document.createElement("div");
    switch (cloudInfoStore.currentCloud) {
      case CloudInfoEnum.cloudBaidu:
        {
          observeDOMChanges("body", () => {
            const tempDOM = document.querySelector("div.wp-s-header__right");
            tempDOM == null ? void 0 : tempDOM.insertBefore(app, tempDOM == null ? void 0 : tempDOM.firstChild);
          });
        }
        break;
      case CloudInfoEnum.cloudBaiduSync:
        {
          setTimeout(() => {
            const tempDOM = document.querySelector("div.wp-aside-nav__sub-top");
            app.style.cssText = `
                    text-align:center;
                `;
            tempDOM == null ? void 0 : tempDOM.insertBefore(app, tempDOM == null ? void 0 : tempDOM.firstChild);
          }, 1e3);
        }
        break;
      case CloudInfoEnum.cloud115:
        {
          setTimeout(() => {
            var _a;
            const temp = document.createElement("li");
            app.style.cssText = `
                    margin-top: 12px;
                    margin-left: 10px;
                `;
            temp.append(app);
            (_a = document.querySelector("div.main-top")) == null ? void 0 : _a.append(temp);
          }, 1e3);
        }
        break;
      case CloudInfoEnum.cloud123:
        {
          observeDOMChanges("body", () => {
            var _a;
            app.style.textAlign = "center";
            (_a = document.querySelector(".ant-menu-light")) == null ? void 0 : _a.append(app);
          });
        }
        break;
      case CloudInfoEnum.cloudLanZou:
        {
          setTimeout(() => {
            var _a;
            app.style.cssText = `
            margin-top: -2px;
        `;
            (_a = document.querySelector(".toum")) == null ? void 0 : _a.append(app);
          }, 2e3);
        }
        break;
      case CloudInfoEnum.cloudTianyi:
        {
          observeDOMChanges("body", () => {
            var _a;
            (_a = document.querySelector("ul.nav-menu")) == null ? void 0 : _a.append(app);
          });
        }
        break;
      case CloudInfoEnum.cloudQuark:
        {
          observeDOMChanges("body", () => {
            setTimeout(() => {
              var _a;
              const tempDOM = document.querySelector(".file-search-box");
              app.style.cssText = `
                margin-right:200px;
            `;
              (_a = tempDOM == null ? void 0 : tempDOM.parentNode) == null ? void 0 : _a.insertBefore(app, tempDOM);
            }, 1e3);
          });
        }
        break;
      case CloudInfoEnum.cloud139:
        {
          observeDOMChanges(".document_main_warp", () => {
            var _a;
            const tempDOM = document.querySelector(".document_top_upload_button");
            app.style.cssText = `
                display:inline-block;
                margin-top:20px;
            `;
            (_a = tempDOM == null ? void 0 : tempDOM.parentNode) == null ? void 0 : _a.append(app, tempDOM);
          });
        }
        break;
      case CloudInfoEnum.cloudXun:
        {
          setTimeout(() => {
            const tempDOM = document.querySelector(".pan-wrapper-asider");
            app.style.cssText = `
                    text-align:center;
                 `;
            tempDOM == null ? void 0 : tempDOM.append(app);
          }, 1e3);
        }
        break;
      case CloudInfoEnum.cloudAli:
        {
          observeDOMChanges("body", () => {
            var _a;
            const tempDOM = document.querySelector("div[class^='nav-tab-item--']");
            const iterator = tempDOM == null ? void 0 : tempDOM.classList;
            let name;
            for (const value of iterator) {
              if (value.startsWith("nav-tab-item"))
                name = value;
            }
            if (name) {
              app.classList.add(name);
              (_a = document.querySelector("div[class^='nav-tab-content--']")) == null ? void 0 : _a.append(app);
            } else {
              document.body.append(app);
            }
          });
        }
        break;
      case CloudInfoEnum.cloudUC:
        {
          observeDOMChanges("body", () => {
            var _a;
            const tempDOM = document.querySelector(".file-search-box");
            app.style.cssText = `
                margin-right:16px;
                margin-bottom:4px;
               `;
            (_a = tempDOM == null ? void 0 : tempDOM.parentNode) == null ? void 0 : _a.insertBefore(app, tempDOM);
          });
        }
        break;
      case CloudInfoEnum.cloudOnedrive:
        break;
    }
    return app;
  };
  const bootstrap = () => {
    const app = vue.createApp(_sfc_main);
    app.use(Pinia);
    app.use(TDesign);
    app.mount(Mount());
  };
  void bootstrap();

})(Vue, Pinia, XLSX, TDesign, axios);