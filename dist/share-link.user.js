// ==UserScript==
// @name         网盘批量分享工具
// @namespace    dreamlove
// @version      1.0.0
// @author       superBiuBiu
// @description  网盘文件批量分享,目前支持百度网盘,天翼网盘,115网盘~
// @iconURL      https://www.google.com/s2/favicons?domain=dreamlove.top
// @supportURL   https://github.com/superBiuBiuMan/sharelink/
// @match        https://cloud.189.cn/*
// @match        https://pan.baidu.com/*
// @match        https://115.com/*
// @require      https://cdn.bootcdn.net/ajax/libs/vue/3.3.4/dist/vue.global.prod.js
// @connect      webapi.115.com
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const o=document.createElement("style");o.textContent=t,document.head.append(o)})(' :root{--td-screen-xs: 320px;--td-screen-sm: 768px;--td-screen-md: 992px;--td-screen-lg: 1200px;--td-screen-xl: 1400px;--td-screen-xxl: 1880px}.narrow-scrollbar{scrollbar-color:var(--td-scrollbar-color) transparent;scrollbar-width:thin}.narrow-scrollbar::-webkit-scrollbar{width:8px;height:8px}.narrow-scrollbar::-webkit-scrollbar-thumb{border:2px solid transparent;background-clip:content-box;background-color:var(--td-scrollbar-color);border-radius:15px}.narrow-scrollbar::-webkit-scrollbar-thumb:vertical:hover,.narrow-scrollbar::-webkit-scrollbar-thumb:horizontal:hover{background-color:var(--td-scrollbar-hover-color)}.t-fake-arrow path{transition:d .2s;stroke:currentcolor}.t-fake-arrow--active path{d:path("M3.75 10.2002L7.99274 5.7998L12.2361 10.0425")}.t-slide-down-enter-active,.t-slide-down-leave-active{transition:height .2s cubic-bezier(.38,0,.24,1)}:root,:root[theme-mode=light]{--td-brand-color-1: #f2f3ff;--td-brand-color-2: #d9e1ff;--td-brand-color-3: #b5c7ff;--td-brand-color-4: #8eabff;--td-brand-color-5: #618dff;--td-brand-color-6: #366ef4;--td-brand-color-7: #0052d9;--td-brand-color-8: #003cab;--td-brand-color-9: #002a7c;--td-brand-color-10: #001a57;--td-warning-color-1: #fff1e9;--td-warning-color-2: #ffd9c2;--td-warning-color-3: #ffb98c;--td-warning-color-4: #fa9550;--td-warning-color-5: #e37318;--td-warning-color-6: #be5a00;--td-warning-color-7: #954500;--td-warning-color-8: #713300;--td-warning-color-9: #532300;--td-warning-color-10: #3b1700;--td-error-color-1: #fff0ed;--td-error-color-2: #ffd8d2;--td-error-color-3: #ffb9b0;--td-error-color-4: #ff9285;--td-error-color-5: #f6685d;--td-error-color-6: #d54941;--td-error-color-7: #ad352f;--td-error-color-8: #881f1c;--td-error-color-9: #68070a;--td-error-color-10: #490002;--td-success-color-1: #e3f9e9;--td-success-color-2: #c6f3d7;--td-success-color-3: #92dab2;--td-success-color-4: #56c08d;--td-success-color-5: #2ba471;--td-success-color-6: #008858;--td-success-color-7: #006c45;--td-success-color-8: #005334;--td-success-color-9: #003b23;--td-success-color-10: #002515;--td-gray-color-1: #f3f3f3;--td-gray-color-2: #eee;--td-gray-color-3: #e8e8e8;--td-gray-color-4: #ddd;--td-gray-color-5: #c6c6c6;--td-gray-color-6: #a6a6a6;--td-gray-color-7: #8b8b8b;--td-gray-color-8: #777;--td-gray-color-9: #5e5e5e;--td-gray-color-10: #4b4b4b;--td-gray-color-11: #393939;--td-gray-color-12: #2c2c2c;--td-gray-color-13: #242424;--td-gray-color-14: #181818;--td-font-white-1: #ffffff;--td-font-white-2: rgba(255, 255, 255, .55);--td-font-white-3: rgba(255, 255, 255, .35);--td-font-white-4: rgba(255, 255, 255, .22);--td-font-gray-1: rgba(0, 0, 0, .9);--td-font-gray-2: rgba(0, 0, 0, .6);--td-font-gray-3: rgba(0, 0, 0, .4);--td-font-gray-4: rgba(0, 0, 0, .26);--td-brand-color: var(--td-brand-color-7);--td-warning-color: var(--td-warning-color-5);--td-error-color: var(--td-error-color-6);--td-success-color: var(--td-success-color-5);--td-brand-color-hover: var(--td-brand-color-6);--td-brand-color-focus: var(--td-brand-color-2);--td-brand-color-active: var(--td-brand-color-8);--td-brand-color-disabled: var(--td-brand-color-3);--td-brand-color-light: var(--td-brand-color-1);--td-brand-color-light-hover: var(--td-brand-color-2);--td-warning-color-hover: var(--td-warning-color-4);--td-warning-color-focus: var(--td-warning-color-2);--td-warning-color-active: var(--td-warning-color-6);--td-warning-color-disabled: var(--td-warning-color-3);--td-warning-color-light: var(--td-warning-color-1);--td-warning-color-light-hover: var(--td-warning-color-2);--td-error-color-hover: var(--td-error-color-5);--td-error-color-focus: var(--td-error-color-2);--td-error-color-active: var(--td-error-color-7);--td-error-color-disabled: var(--td-error-color-3);--td-error-color-light: var(--td-error-color-1);--td-error-color-light-hover: var(--td-error-color-2);--td-success-color-hover: var(--td-success-color-4);--td-success-color-focus: var(--td-success-color-2);--td-success-color-active: var(--td-success-color-6);--td-success-color-disabled: var(--td-success-color-3);--td-success-color-light: var(--td-success-color-1);--td-success-color-light-hover: var(--td-success-color-2);--td-mask-active: rgba(0, 0, 0, .6);--td-mask-disabled: rgba(255, 255, 255, .6);--td-bg-color-page: var(--td-gray-color-2);--td-bg-color-container: #fff;--td-bg-color-container-hover: var(--td-gray-color-1);--td-bg-color-container-active: var(--td-gray-color-3);--td-bg-color-container-select: #fff;--td-bg-color-secondarycontainer: var(--td-gray-color-1);--td-bg-color-secondarycontainer-hover: var(--td-gray-color-2);--td-bg-color-secondarycontainer-active: var(--td-gray-color-4);--td-bg-color-component: var(--td-gray-color-3);--td-bg-color-component-hover: var(--td-gray-color-4);--td-bg-color-component-active: var(--td-gray-color-6);--td-bg-color-secondarycomponent: var(--td-gray-color-4);--td-bg-color-secondarycomponent-hover: var(--td-gray-color-5);--td-bg-color-secondarycomponent-active: var(--td-gray-color-6);--td-bg-color-component-disabled: var(--td-gray-color-2);--td-bg-color-specialcomponent: #fff;--td-text-color-primary: var(--td-font-gray-1);--td-text-color-secondary: var(--td-font-gray-2);--td-text-color-placeholder: var(--td-font-gray-3);--td-text-color-disabled: var(--td-font-gray-4);--td-text-color-anti: #fff;--td-text-color-brand: var(--td-brand-color-7);--td-text-color-link: var(--td-brand-color-8);--td-border-level-1-color: var(--td-gray-color-3);--td-component-stroke: var(--td-gray-color-3);--td-border-level-2-color: var(--td-gray-color-4);--td-component-border: var(--td-gray-color-4);--td-shadow-1: 0 1px 10px rgba(0, 0, 0, .05), 0 4px 5px rgba(0, 0, 0, 8%), 0 2px 4px -1px rgba(0, 0, 0, 12%);--td-shadow-2: 0 3px 14px 2px rgba(0, 0, 0, .05), 0 8px 10px 1px rgba(0, 0, 0, 6%), 0 5px 5px -3px rgba(0, 0, 0, 10%);--td-shadow-3: 0 6px 30px 5px rgba(0, 0, 0, .05), 0 16px 24px 2px rgba(0, 0, 0, 4%), 0 8px 10px -5px rgba(0, 0, 0, 8%);--td-shadow-inset-top: inset 0 .5px 0 #dcdcdc;--td-shadow-inset-right: inset .5px 0 0 #dcdcdc;--td-shadow-inset-bottom: inset 0 -.5px 0 #dcdcdc;--td-shadow-inset-left: inset -.5px 0 0 #dcdcdc;--td-table-shadow-color: rgba(0, 0, 0, .08);--td-scrollbar-color: rgba(0, 0, 0, .1);--td-scrollbar-hover-color: rgba(0, 0, 0, .3);--td-scroll-track-color: #fff}:root[theme-mode=dark]{--td-brand-color-1: #1b2f51;--td-brand-color-2: #173463;--td-brand-color-3: #143975;--td-brand-color-4: #103d88;--td-brand-color-5: #0d429a;--td-brand-color-6: #054bbe;--td-brand-color-7: #2667d4;--td-brand-color-8: #4582e6;--td-brand-color-9: #699ef5;--td-brand-color-10: #96bbf8;--td-warning-color-1: #4f2a1d;--td-warning-color-2: #582f21;--td-warning-color-3: #733c23;--td-warning-color-4: #a75d2b;--td-warning-color-5: #cf6e2d;--td-warning-color-6: #dc7633;--td-warning-color-7: #e8935c;--td-warning-color-8: #ecbf91;--td-warning-color-9: #eed7bf;--td-warning-color-10: #f3e9dc;--td-error-color-1: #472324;--td-error-color-2: #5e2a2d;--td-error-color-3: #703439;--td-error-color-4: #83383e;--td-error-color-5: #a03f46;--td-error-color-6: #c64751;--td-error-color-7: #de6670;--td-error-color-8: #ec888e;--td-error-color-9: #edb1b6;--td-error-color-10: #eeced0;--td-success-color-1: #193a2a;--td-success-color-2: #1a4230;--td-success-color-3: #17533d;--td-success-color-4: #0d7a55;--td-success-color-5: #059465;--td-success-color-6: #43af8a;--td-success-color-7: #46bf96;--td-success-color-8: #80d2b6;--td-success-color-9: #b4e1d3;--td-success-color-10: #deede8;--td-gray-color-1: #f3f3f3;--td-gray-color-2: #eee;--td-gray-color-3: #e8e8e8;--td-gray-color-4: #ddd;--td-gray-color-5: #c6c6c6;--td-gray-color-6: #a6a6a6;--td-gray-color-7: #8b8b8b;--td-gray-color-8: #777;--td-gray-color-9: #5e5e5e;--td-gray-color-10: #4b4b4b;--td-gray-color-11: #393939;--td-gray-color-12: #2c2c2c;--td-gray-color-13: #242424;--td-gray-color-14: #181818;--td-font-white-1: rgba(255, 255, 255, .9);--td-font-white-2: rgba(255, 255, 255, .55);--td-font-white-3: rgba(255, 255, 255, .35);--td-font-white-4: rgba(255, 255, 255, .22);--td-font-gray-1: rgba(0, 0, 0, .9);--td-font-gray-2: rgba(0, 0, 0, .6);--td-font-gray-3: rgba(0, 0, 0, .4);--td-font-gray-4: rgba(0, 0, 0, .26);--td-brand-color: var(--td-brand-color-8);--td-warning-color: var(--td-warning-color-5);--td-error-color: var(--td-error-color-6);--td-success-color: var(--td-success-color-5);--td-brand-color-hover: var(--td-brand-color-7);--td-brand-color-focus: var(--td-brand-color-2);--td-brand-color-active: var(--td-brand-color-9);--td-brand-color-disabled: var(--td-brand-color-3);--td-brand-color-light: var(--td-brand-color-1);--td-brand-color-light-hover: var(--td-brand-color-2);--td-warning-color-hover: var(--td-warning-color-4);--td-warning-color-focus: var(--td-warning-color-2);--td-warning-color-active: var(--td-warning-color-6);--td-warning-color-disabled: var(--td-warning-color-3);--td-warning-color-light: var(--td-warning-color-1);--td-warning-color-light-hover: var(--td-warning-color-2);--td-error-color-hover: var(--td-error-color-5);--td-error-color-focus: var(--td-error-color-2);--td-error-color-active: var(--td-error-color-7);--td-error-color-disabled: var(--td-error-color-3);--td-error-color-light: var(--td-error-color-1);--td-error-color-light-hover: var(--td-error-color-2);--td-success-color-hover: var(--td-success-color-4);--td-success-color-focus: var(--td-success-color-2);--td-success-color-active: var(--td-success-color-6);--td-success-color-disabled: var(--td-success-color-3);--td-success-color-light: var(--td-success-color-1);--td-success-color-light-hover: var(--td-success-color-2);--td-mask-active: rgba(0, 0, 0, .4);--td-mask-disabled: rgba(0, 0, 0, .6);--td-bg-color-page: var(--td-gray-color-14);--td-bg-color-container: var(--td-gray-color-13);--td-bg-color-container-hover: var(--td-gray-color-12);--td-bg-color-container-active: var(--td-gray-color-10);--td-bg-color-container-select: var(--td-gray-color-9);--td-bg-color-secondarycontainer: var(--td-gray-color-12);--td-bg-color-secondarycontainer-hover: var(--td-gray-color-11);--td-bg-color-secondarycontainer-active: var(--td-gray-color-9);--td-bg-color-component: var(--td-gray-color-11);--td-bg-color-component-hover: var(--td-gray-color-10);--td-bg-color-component-active: var(--td-gray-color-9);--td-bg-color-secondarycomponent: var(--td-gray-color-10);--td-bg-color-secondarycomponent-hover: var(--td-gray-color-9);--td-bg-color-secondarycomponent-active: var(--td-gray-color-8);--td-bg-color-component-disabled: var(--td-gray-color-12);--td-bg-color-specialcomponent: transparent;--td-text-color-primary: var(--td-font-white-1);--td-text-color-secondary: var(--td-font-white-2);--td-text-color-placeholder: var(--td-font-white-3);--td-text-color-disabled: var(--td-font-white-4);--td-text-color-anti: #fff;--td-text-color-brand: var(--td-brand-color-8);--td-text-color-link: var(--td-brand-color-8);--td-border-level-1-color: var(--td-gray-color-11);--td-component-stroke: var(--td-gray-color-11);--td-border-level-2-color: var(--td-gray-color-9);--td-component-border: var(--td-gray-color-9);--td-shadow-1: 0 4px 6px rgba(0, 0, 0, .06), 0 1px 10px rgba(0, 0, 0, 8%), 0 2px 4px rgba(0, 0, 0, 12%);--td-shadow-2: 0 8px 10px rgba(0, 0, 0, .12), 0 3px 14px rgba(0, 0, 0, 10%), 0 5px 5px rgba(0, 0, 0, 16%);--td-shadow-3: 0 16px 24px rgba(0, 0, 0, .14), 0 6px 30px rgba(0, 0, 0, 12%), 0 8px 10px rgba(0, 0, 0, 20%);--td-shadow-inset-top: inset 0 .5px 0 #5e5e5e;--td-shadow-inset-right: inset .5px 0 0 #5e5e5e;--td-shadow-inset-bottom: inset 0 -.5px 0 #5e5e5e;--td-shadow-inset-left: inset -.5px 0 0 #5e5e5e;--td-table-shadow-color: rgba(0, 0, 0, .55);--td-scrollbar-color: rgba(255, 255, 255, .1);--td-scrollbar-hover-color: rgba(255, 255, 255, .3);--td-scroll-track-color: #333}:root{--td-radius-small: 2px;--td-radius-default: 3px;--td-radius-medium: 6px;--td-radius-large: 9px;--td-radius-extraLarge: 12px;--td-radius-round: 999px;--td-radius-circle: 50%}:root{--td-font-family: PingFang SC, Microsoft YaHei, Arial Regular;--td-font-family-medium: PingFang SC, Microsoft YaHei, Arial Medium;--td-font-size-link-small: 12px;--td-font-size-link-medium: 14px;--td-font-size-link-large: 16px;--td-font-size-mark-small: 12px;--td-font-size-mark-medium: 14px;--td-font-size-body-small: 12px;--td-font-size-body-medium: 14px;--td-font-size-body-large: 16px;--td-font-size-title-small: 14px;--td-font-size-title-medium: 16px;--td-font-size-title-large: 20px;--td-font-size-headline-small: 24px;--td-font-size-headline-medium: 28px;--td-font-size-headline-large: 36px;--td-font-size-display-medium: 48px;--td-font-size-display-large: 64px;--td-line-height-link-small: 20px;--td-line-height-link-medium: 22px;--td-line-height-link-large: 24px;--td-line-height-mark-small: 20px;--td-line-height-mark-medium: 22px;--td-line-height-body-small: 20px;--td-line-height-body-medium: 22px;--td-line-height-body-large: 24px;--td-line-height-title-small: 22px;--td-line-height-title-medium: 24px;--td-line-height-title-large: 28px;--td-line-height-headline-small: 32px;--td-line-height-headline-medium: 36px;--td-line-height-headline-large: 44px;--td-line-height-display-medium: 56px;--td-line-height-display-large: 72px;--td-font-link-small: var(--td-font-size-link-small) / var(--td-line-height-link-small) var(--td-font-family);--td-font-link-medium: var(--td-font-size-link-medium) / var(--td-line-height-link-medium) var(--td-font-family);--td-font-link-large: var(--td-font-size-link-large) / var(--td-line-height-link-large) var(--td-font-family);--td-font-mark-small: 600 var(--td-font-size-mark-small) / var(--td-line-height-mark-small) var(--td-font-family);--td-font-mark-medium: 600 var(--td-font-size-mark-medium) / var(--td-line-height-mark-medium) var(--td-font-family);--td-font-body-small: var(--td-font-size-body-small) / var(--td-line-height-body-small) var(--td-font-family);--td-font-body-medium: var(--td-font-size-body-medium) / var(--td-line-height-body-medium) var(--td-font-family);--td-font-body-large: var(--td-font-size-body-large) / var(--td-line-height-body-large) var(--td-font-family);--td-font-title-small: 600 var(--td-font-size-title-small) / var(--td-line-height-title-small) var(--td-font-family);--td-font-title-medium: 600 var(--td-font-size-title-medium) / var(--td-line-height-title-medium) var(--td-font-family);--td-font-title-large: 600 var(--td-font-size-title-large) / var(--td-line-height-title-large) var(--td-font-family);--td-font-headline-small: 600 var(--td-font-size-headline-small) / var(--td-line-height-headline-small) var(--td-font-family);--td-font-headline-medium: 600 var(--td-font-size-headline-medium) / var(--td-line-height-headline-medium) var(--td-font-family);--td-font-headline-large: 600 var(--td-font-size-headline-large) / var(--td-line-height-headline-large) var(--td-font-family);--td-font-display-medium: 600 var(--td-font-size-display-medium) / var(--td-line-height-display-medium) var(--td-font-family);--td-font-display-large: 600 var(--td-font-size-display-large) / var(--td-line-height-display-large) var(--td-font-family)}:root{--td-size-1: 2px;--td-size-2: 4px;--td-size-3: 6px;--td-size-4: 8px;--td-size-5: 12px;--td-size-6: 16px;--td-size-7: 20px;--td-size-8: 24px;--td-size-9: 28px;--td-size-10: 32px;--td-size-11: 36px;--td-size-12: 40px;--td-size-13: 48px;--td-size-14: 56px;--td-size-15: 64px;--td-size-16: 72px;--td-comp-size-xxxs: var(--td-size-6);--td-comp-size-xxs: var(--td-size-7);--td-comp-size-xs: var(--td-size-8);--td-comp-size-s: var(--td-size-9);--td-comp-size-m: var(--td-size-10);--td-comp-size-l: var(--td-size-11);--td-comp-size-xl: var(--td-size-12);--td-comp-size-xxl: var(--td-size-13);--td-comp-size-xxxl: var(--td-size-14);--td-comp-size-xxxxl: var(--td-size-15);--td-comp-size-xxxxxl: var(--td-size-16);--td-pop-padding-s: var(--td-size-2);--td-pop-padding-m: var(--td-size-3);--td-pop-padding-l: var(--td-size-4);--td-pop-padding-xl: var(--td-size-5);--td-pop-padding-xxl: var(--td-size-6);--td-comp-paddingLR-xxs: var(--td-size-1);--td-comp-paddingLR-xs: var(--td-size-2);--td-comp-paddingLR-s: var(--td-size-4);--td-comp-paddingLR-m: var(--td-size-5);--td-comp-paddingLR-l: var(--td-size-6);--td-comp-paddingLR-xl: var(--td-size-8);--td-comp-paddingLR-xxl: var(--td-size-10);--td-comp-paddingTB-xxs: var(--td-size-1);--td-comp-paddingTB-xs: var(--td-size-2);--td-comp-paddingTB-s: var(--td-size-4);--td-comp-paddingTB-m: var(--td-size-5);--td-comp-paddingTB-l: var(--td-size-6);--td-comp-paddingTB-xl: var(--td-size-8);--td-comp-paddingTB-xxl: var(--td-size-10);--td-comp-margin-xxs: var(--td-size-1);--td-comp-margin-xs: var(--td-size-2);--td-comp-margin-s: var(--td-size-4);--td-comp-margin-m: var(--td-size-5);--td-comp-margin-l: var(--td-size-6);--td-comp-margin-xl: var(--td-size-7);--td-comp-margin-xxl: var(--td-size-8);--td-comp-margin-xxxl: var(--td-size-10);--td-comp-margin-xxxxl: var(--td-size-12)}.t-loading{font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none;position:relative;color:var(--td-brand-color);font-size:var(--td-comp-size-l)}.t-loading--lock{overflow:hidden}.t-loading.t-size-s{font-size:var(--td-comp-size-xxxs)}.t-loading.t-size-l{font-size:var(--td-comp-size-xxxl)}.t-loading__parent--relative{position:relative!important}.t-loading__fullscreen{position:fixed;top:0;left:0;width:100%;height:100%;z-index:3500}.t-loading--center{display:inline-flex;align-items:center;vertical-align:middle;justify-content:center}.t-loading__content{position:absolute;left:48%;top:20%}.t-loading--inherit-color{color:inherit}.t-loading__parent{position:relative}.t-loading__overlay{background-color:var(--td-mask-disabled)}.t-loading--full{position:absolute;top:0;left:0;width:100%;height:100%}.t-loading--hidden{visibility:hidden}.t-loading--visible{visibility:visible}.t-loading__text{width:auto;display:inline-block;vertical-align:middle;font:var(--td-font-body-medium);margin-left:var(--td-comp-margin-xs)}.t-loading__gradient{display:inline-flex;justify-content:center;align-items:center;vertical-align:middle}.t-loading__gradient-conic{width:100%;height:100%;border-radius:var(--td-radius-circle);background:conic-gradient(from 90deg at 50% 50%,#fff 0deg,currentcolor 360deg);-webkit-mask:radial-gradient(transparent calc(50% - .5px),#fff 50%);mask:radial-gradient(transparent calc(50% - .5px),#fff 50%)}.t-button{font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none;position:relative;z-index:0;overflow:hidden;font-size:var(--td-font-body-medium);outline:none;border-width:1px;border-style:solid;border-color:transparent;background-color:transparent;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;white-space:nowrap;border-radius:var(--td-radius-default);transition:all .2s linear;touch-action:manipulation;text-decoration:none}.t-button .t-button__text,.t-button .t-icon{position:relative;z-index:1;display:inline-flex}.t-button .t-icon,.t-button .t-loading{font-size:var(--td-font-size-body-large)}.t-button .t-icon+.t-button__text:not(:empty){margin-left:8px}.t-button .t-loading+.t-button__text:not(:empty){margin-left:8px}.t-button .t-button__suffix:not(:empty){display:inline-flex;margin-left:8px}.t-button--variant-base{color:var(--td-text-color-anti);height:var(--td-comp-size-m);font:var(--td-font-body-medium);padding-left:calc(var(--td-comp-paddingLR-l) - 1px);padding-right:calc(var(--td-comp-paddingLR-l) - 1px);background-color:var(--td-bg-color-component);border-color:var(--td-bg-color-component);color:var(--td-text-color-primary)}.t-button--variant-base .t-icon,.t-button--variant-base .t-loading{font-size:var(--td-font-size-body-large)}.t-button--variant-base:hover,.t-button--variant-base:focus-visible{background-color:var(--td-bg-color-component-hover)}.t-button--variant-base.t-is-loading{background-color:var(--td-bg-color-component)}.t-button--variant-base.t-is-disabled{background-color:var(--td-bg-color-component-disabled)}.t-button--variant-base:hover,.t-button--variant-base:focus-visible{border-color:var(--td-bg-color-component-hover)}.t-button--variant-base.t-is-loading{border-color:var(--td-bg-color-component)}.t-button--variant-base.t-is-disabled{border-color:var(--td-bg-color-component-disabled)}.t-button--variant-base:hover,.t-button--variant-base:focus-visible{color:var(--td-text-color-primary)}.t-button--variant-base.t-is-loading{color:var(--td-text-color-primary)}.t-button--variant-base.t-is-disabled{color:var(--td-text-color-disabled)}.t-button--variant-base.t-button--theme-primary{color:var(--td-text-color-anti);background-color:var(--td-brand-color);border-color:var(--td-brand-color)}.t-button--variant-base.t-button--theme-primary:hover,.t-button--variant-base.t-button--theme-primary:focus-visible{background-color:var(--td-brand-color-hover)}.t-button--variant-base.t-button--theme-primary.t-is-loading{background-color:var(--td-brand-color)}.t-button--variant-base.t-button--theme-primary.t-is-disabled{background-color:var(--td-brand-color-disabled)}.t-button--variant-base.t-button--theme-primary:hover,.t-button--variant-base.t-button--theme-primary:focus-visible{border-color:var(--td-brand-color-hover)}.t-button--variant-base.t-button--theme-primary.t-is-loading{border-color:var(--td-brand-color)}.t-button--variant-base.t-button--theme-primary.t-is-disabled{border-color:var(--td-brand-color-disabled)}.t-button--variant-base.t-button--theme-success{color:var(--td-text-color-anti);background-color:var(--td-success-color);border-color:var(--td-success-color)}.t-button--variant-base.t-button--theme-success:hover,.t-button--variant-base.t-button--theme-success:focus-visible{background-color:var(--td-success-color-hover)}.t-button--variant-base.t-button--theme-success.t-is-loading{background-color:var(--td-success-color)}.t-button--variant-base.t-button--theme-success.t-is-disabled{background-color:var(--td-success-color-disabled)}.t-button--variant-base.t-button--theme-success:hover,.t-button--variant-base.t-button--theme-success:focus-visible{border-color:var(--td-success-color-hover)}.t-button--variant-base.t-button--theme-success.t-is-loading{border-color:var(--td-success-color)}.t-button--variant-base.t-button--theme-success.t-is-disabled{border-color:var(--td-success-color-disabled)}.t-button--variant-base.t-button--theme-warning{color:var(--td-text-color-anti);background-color:var(--td-warning-color);border-color:var(--td-warning-color)}.t-button--variant-base.t-button--theme-warning:hover,.t-button--variant-base.t-button--theme-warning:focus-visible{background-color:var(--td-warning-color-hover)}.t-button--variant-base.t-button--theme-warning.t-is-loading{background-color:var(--td-warning-color)}.t-button--variant-base.t-button--theme-warning.t-is-disabled{background-color:var(--td-warning-color-disabled)}.t-button--variant-base.t-button--theme-warning:hover,.t-button--variant-base.t-button--theme-warning:focus-visible{border-color:var(--td-warning-color-hover)}.t-button--variant-base.t-button--theme-warning.t-is-loading{border-color:var(--td-warning-color)}.t-button--variant-base.t-button--theme-warning.t-is-disabled{border-color:var(--td-warning-color-disabled)}.t-button--variant-base.t-button--theme-danger{color:var(--td-text-color-anti);background-color:var(--td-error-color);border-color:var(--td-error-color)}.t-button--variant-base.t-button--theme-danger:hover,.t-button--variant-base.t-button--theme-danger:focus-visible{background-color:var(--td-error-color-hover)}.t-button--variant-base.t-button--theme-danger.t-is-loading{background-color:var(--td-error-color)}.t-button--variant-base.t-button--theme-danger.t-is-disabled{background-color:var(--td-error-color-disabled)}.t-button--variant-base.t-button--theme-danger:hover,.t-button--variant-base.t-button--theme-danger:focus-visible{border-color:var(--td-error-color-hover)}.t-button--variant-base.t-button--theme-danger.t-is-loading{border-color:var(--td-error-color)}.t-button--variant-base.t-button--theme-danger.t-is-disabled{border-color:var(--td-error-color-disabled)}.t-button--variant-base.t-button--ghost{background-color:transparent;color:var(--td-text-color-anti);border-color:var(--td-text-color-anti)}.t-button--variant-base.t-button--ghost:hover,.t-button--variant-base.t-button--ghost:focus-visible{background-color:transparent}.t-button--variant-base.t-button--ghost:active,.t-button--variant-base.t-button--ghost.t-is-loading{background-color:transparent}.t-button--variant-base.t-button--ghost.t-is-disabled{background-color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost:hover,.t-button--variant-base.t-button--ghost:focus-visible{color:var(--td-brand-color-hover)}.t-button--variant-base.t-button--ghost:active{color:var(--td-brand-color-active)}.t-button--variant-base.t-button--ghost.t-is-loading{color:var(--td-text-color-anti)}.t-button--variant-base.t-button--ghost.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost:hover,.t-button--variant-base.t-button--ghost:focus-visible{border-color:var(--td-brand-color-hover)}.t-button--variant-base.t-button--ghost:active{border-color:var(--td-brand-color-active)}.t-button--variant-base.t-button--ghost.t-is-loading{border-color:var(--td-text-color-anti)}.t-button--variant-base.t-button--ghost.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost.t-button--theme-primary{color:var(--td-brand-color);border-color:var(--td-brand-color)}.t-button--variant-base.t-button--ghost.t-button--theme-primary:hover,.t-button--variant-base.t-button--ghost.t-button--theme-primary:focus-visible{color:var(--td-brand-color-hover)}.t-button--variant-base.t-button--ghost.t-button--theme-primary:active{color:var(--td-brand-color-active)}.t-button--variant-base.t-button--ghost.t-button--theme-primary.t-is-loading{color:var(--td-brand-color)}.t-button--variant-base.t-button--ghost.t-button--theme-primary.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost.t-button--theme-primary:hover,.t-button--variant-base.t-button--ghost.t-button--theme-primary:focus-visible{border-color:var(--td-brand-color-hover)}.t-button--variant-base.t-button--ghost.t-button--theme-primary:active{border-color:var(--td-brand-color-active)}.t-button--variant-base.t-button--ghost.t-button--theme-primary.t-is-loading{border-color:var(--td-brand-color)}.t-button--variant-base.t-button--ghost.t-button--theme-primary.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost.t-button--theme-success{color:var(--td-success-color);border-color:var(--td-success-color)}.t-button--variant-base.t-button--ghost.t-button--theme-success:hover,.t-button--variant-base.t-button--ghost.t-button--theme-success:focus-visible{color:var(--td-success-color-hover)}.t-button--variant-base.t-button--ghost.t-button--theme-success:active{color:var(--td-success-color-active)}.t-button--variant-base.t-button--ghost.t-button--theme-success.t-is-loading{color:var(--td-success-color)}.t-button--variant-base.t-button--ghost.t-button--theme-success.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost.t-button--theme-success:hover,.t-button--variant-base.t-button--ghost.t-button--theme-success:focus-visible{border-color:var(--td-success-color-hover)}.t-button--variant-base.t-button--ghost.t-button--theme-success:active{border-color:var(--td-success-color-active)}.t-button--variant-base.t-button--ghost.t-button--theme-success.t-is-loading{border-color:var(--td-success-color)}.t-button--variant-base.t-button--ghost.t-button--theme-success.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost.t-button--theme-warning{color:var(--td-warning-color);border-color:var(--td-warning-color)}.t-button--variant-base.t-button--ghost.t-button--theme-warning:hover,.t-button--variant-base.t-button--ghost.t-button--theme-warning:focus-visible{color:var(--td-warning-color-hover)}.t-button--variant-base.t-button--ghost.t-button--theme-warning:active{color:var(--td-warning-color-active)}.t-button--variant-base.t-button--ghost.t-button--theme-warning.t-is-loading{color:var(--td-warning-color)}.t-button--variant-base.t-button--ghost.t-button--theme-warning.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost.t-button--theme-warning:hover,.t-button--variant-base.t-button--ghost.t-button--theme-warning:focus-visible{border-color:var(--td-warning-color-hover)}.t-button--variant-base.t-button--ghost.t-button--theme-warning:active{border-color:var(--td-warning-color-active)}.t-button--variant-base.t-button--ghost.t-button--theme-warning.t-is-loading{border-color:var(--td-warning-color)}.t-button--variant-base.t-button--ghost.t-button--theme-warning.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost.t-button--theme-danger{color:var(--td-error-color);border-color:var(--td-error-color)}.t-button--variant-base.t-button--ghost.t-button--theme-danger:hover,.t-button--variant-base.t-button--ghost.t-button--theme-danger:focus-visible{color:var(--td-error-color-hover)}.t-button--variant-base.t-button--ghost.t-button--theme-danger:active{color:var(--td-error-color-active)}.t-button--variant-base.t-button--ghost.t-button--theme-danger.t-is-loading{color:var(--td-error-color)}.t-button--variant-base.t-button--ghost.t-button--theme-danger.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost.t-button--theme-danger:hover,.t-button--variant-base.t-button--ghost.t-button--theme-danger:focus-visible{border-color:var(--td-error-color-hover)}.t-button--variant-base.t-button--ghost.t-button--theme-danger:active{border-color:var(--td-error-color-active)}.t-button--variant-base.t-button--ghost.t-button--theme-danger.t-is-loading{border-color:var(--td-error-color)}.t-button--variant-base.t-button--ghost.t-button--theme-danger.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-outline{height:var(--td-comp-size-m);font:var(--td-font-body-medium);padding-left:calc(var(--td-comp-paddingLR-l) - 1px);padding-right:calc(var(--td-comp-paddingLR-l) - 1px);color:var(--td-text-color-primary);background-color:var(--td-bg-color-specialcomponent);border-color:var(--td-border-level-2-color)}.t-button--variant-outline .t-icon,.t-button--variant-outline .t-loading{font-size:var(--td-font-size-body-large)}.t-button--variant-outline:hover,.t-button--variant-outline:focus-visible{color:var(--td-brand-color-hover)}.t-button--variant-outline.t-is-loading{color:var(--td-text-color-primary)}.t-button--variant-outline.t-is-disabled{color:var(--td-text-color-disabled)}.t-button--variant-outline:hover,.t-button--variant-outline:focus-visible{background-color:var(--td-bg-color-specialcomponent)}.t-button--variant-outline.t-is-loading{background-color:var(--td-bg-color-specialcomponent)}.t-button--variant-outline.t-is-disabled{background-color:var(--td-bg-color-component-disabled)}.t-button--variant-outline:hover,.t-button--variant-outline:focus-visible{border-color:var(--td-brand-color-hover)}.t-button--variant-outline.t-is-loading,.t-button--variant-outline.t-is-disabled{border-color:var(--td-border-level-2-color)}.t-button--variant-outline.t-button--theme-primary{color:var(--td-brand-color);border-color:var(--td-brand-color)}.t-button--variant-outline.t-button--theme-primary:hover,.t-button--variant-outline.t-button--theme-primary:focus-visible{color:var(--td-brand-color-hover)}.t-button--variant-outline.t-button--theme-primary.t-is-loading{color:var(--td-brand-color)}.t-button--variant-outline.t-button--theme-primary.t-is-disabled{color:var(--td-brand-color-disabled)}.t-button--variant-outline.t-button--theme-primary:hover,.t-button--variant-outline.t-button--theme-primary:focus-visible{border-color:var(--td-brand-color-hover)}.t-button--variant-outline.t-button--theme-primary.t-is-loading{border-color:var(--td-brand-color)}.t-button--variant-outline.t-button--theme-primary.t-is-disabled{border-color:var(--td-brand-color-disabled)}.t-button--variant-outline.t-button--theme-success{color:var(--td-success-color);border-color:var(--td-success-color)}.t-button--variant-outline.t-button--theme-success:hover,.t-button--variant-outline.t-button--theme-success:focus-visible{color:var(--td-success-color-hover)}.t-button--variant-outline.t-button--theme-success.t-is-loading{color:var(--td-success-color)}.t-button--variant-outline.t-button--theme-success.t-is-disabled{color:var(--td-success-color-disabled)}.t-button--variant-outline.t-button--theme-success:hover,.t-button--variant-outline.t-button--theme-success:focus-visible{border-color:var(--td-success-color-hover)}.t-button--variant-outline.t-button--theme-success.t-is-loading{border-color:var(--td-success-color)}.t-button--variant-outline.t-button--theme-success.t-is-disabled{border-color:var(--td-success-color-disabled)}.t-button--variant-outline.t-button--theme-warning{color:var(--td-warning-color);border-color:var(--td-warning-color)}.t-button--variant-outline.t-button--theme-warning:hover,.t-button--variant-outline.t-button--theme-warning:focus-visible{color:var(--td-warning-color-hover)}.t-button--variant-outline.t-button--theme-warning.t-is-loading{color:var(--td-warning-color)}.t-button--variant-outline.t-button--theme-warning.t-is-disabled{color:var(--td-warning-color-disabled)}.t-button--variant-outline.t-button--theme-warning:hover,.t-button--variant-outline.t-button--theme-warning:focus-visible{border-color:var(--td-warning-color-hover)}.t-button--variant-outline.t-button--theme-warning.t-is-loading{border-color:var(--td-warning-color)}.t-button--variant-outline.t-button--theme-warning.t-is-disabled{border-color:var(--td-warning-color-disabled)}.t-button--variant-outline.t-button--theme-danger{color:var(--td-error-color);border-color:var(--td-error-color)}.t-button--variant-outline.t-button--theme-danger:hover,.t-button--variant-outline.t-button--theme-danger:focus-visible{color:var(--td-error-color-hover)}.t-button--variant-outline.t-button--theme-danger.t-is-loading{color:var(--td-error-color)}.t-button--variant-outline.t-button--theme-danger.t-is-disabled{color:var(--td-error-color-disabled)}.t-button--variant-outline.t-button--theme-danger:hover,.t-button--variant-outline.t-button--theme-danger:focus-visible{border-color:var(--td-error-color-hover)}.t-button--variant-outline.t-button--theme-danger.t-is-loading{border-color:var(--td-error-color)}.t-button--variant-outline.t-button--theme-danger.t-is-disabled{border-color:var(--td-error-color-disabled)}.t-button--variant-outline.t-button--ghost{background-color:transparent;color:var(--td-text-color-anti);border-color:var(--td-text-color-anti)}.t-button--variant-outline.t-button--ghost:hover,.t-button--variant-outline.t-button--ghost:focus-visible{background-color:transparent}.t-button--variant-outline.t-button--ghost:active,.t-button--variant-outline.t-button--ghost.t-is-loading{background-color:transparent}.t-button--variant-outline.t-button--ghost.t-is-disabled{background-color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost:hover,.t-button--variant-outline.t-button--ghost:focus-visible{color:var(--td-brand-color-hover)}.t-button--variant-outline.t-button--ghost:active{color:var(--td-brand-color-active)}.t-button--variant-outline.t-button--ghost.t-is-loading{color:var(--td-text-color-anti)}.t-button--variant-outline.t-button--ghost.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost:hover,.t-button--variant-outline.t-button--ghost:focus-visible{border-color:var(--td-brand-color-hover)}.t-button--variant-outline.t-button--ghost:active{border-color:var(--td-brand-color-active)}.t-button--variant-outline.t-button--ghost.t-is-loading{border-color:var(--td-text-color-anti)}.t-button--variant-outline.t-button--ghost.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost.t-button--theme-primary{color:var(--td-brand-color);border-color:var(--td-brand-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-primary:hover,.t-button--variant-outline.t-button--ghost.t-button--theme-primary:focus-visible{color:var(--td-brand-color-hover)}.t-button--variant-outline.t-button--ghost.t-button--theme-primary:active{color:var(--td-brand-color-active)}.t-button--variant-outline.t-button--ghost.t-button--theme-primary.t-is-loading{color:var(--td-brand-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-primary.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost.t-button--theme-primary:hover,.t-button--variant-outline.t-button--ghost.t-button--theme-primary:focus-visible{border-color:var(--td-brand-color-hover)}.t-button--variant-outline.t-button--ghost.t-button--theme-primary:active{border-color:var(--td-brand-color-active)}.t-button--variant-outline.t-button--ghost.t-button--theme-primary.t-is-loading{border-color:var(--td-brand-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-primary.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost.t-button--theme-success{color:var(--td-success-color);border-color:var(--td-success-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-success:hover,.t-button--variant-outline.t-button--ghost.t-button--theme-success:focus-visible{color:var(--td-success-color-hover)}.t-button--variant-outline.t-button--ghost.t-button--theme-success:active{color:var(--td-success-color-active)}.t-button--variant-outline.t-button--ghost.t-button--theme-success.t-is-loading{color:var(--td-success-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-success.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost.t-button--theme-success:hover,.t-button--variant-outline.t-button--ghost.t-button--theme-success:focus-visible{border-color:var(--td-success-color-hover)}.t-button--variant-outline.t-button--ghost.t-button--theme-success:active{border-color:var(--td-success-color-active)}.t-button--variant-outline.t-button--ghost.t-button--theme-success.t-is-loading{border-color:var(--td-success-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-success.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost.t-button--theme-warning{color:var(--td-warning-color);border-color:var(--td-warning-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-warning:hover,.t-button--variant-outline.t-button--ghost.t-button--theme-warning:focus-visible{color:var(--td-warning-color-hover)}.t-button--variant-outline.t-button--ghost.t-button--theme-warning:active{color:var(--td-warning-color-active)}.t-button--variant-outline.t-button--ghost.t-button--theme-warning.t-is-loading{color:var(--td-warning-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-warning.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost.t-button--theme-warning:hover,.t-button--variant-outline.t-button--ghost.t-button--theme-warning:focus-visible{border-color:var(--td-warning-color-hover)}.t-button--variant-outline.t-button--ghost.t-button--theme-warning:active{border-color:var(--td-warning-color-active)}.t-button--variant-outline.t-button--ghost.t-button--theme-warning.t-is-loading{border-color:var(--td-warning-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-warning.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost.t-button--theme-danger{color:var(--td-error-color);border-color:var(--td-error-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-danger:hover,.t-button--variant-outline.t-button--ghost.t-button--theme-danger:focus-visible{color:var(--td-error-color-hover)}.t-button--variant-outline.t-button--ghost.t-button--theme-danger:active{color:var(--td-error-color-active)}.t-button--variant-outline.t-button--ghost.t-button--theme-danger.t-is-loading{color:var(--td-error-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-danger.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost.t-button--theme-danger:hover,.t-button--variant-outline.t-button--ghost.t-button--theme-danger:focus-visible{border-color:var(--td-error-color-hover)}.t-button--variant-outline.t-button--ghost.t-button--theme-danger:active{border-color:var(--td-error-color-active)}.t-button--variant-outline.t-button--ghost.t-button--theme-danger.t-is-loading{border-color:var(--td-error-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-danger.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-dashed{height:var(--td-comp-size-m);font:var(--td-font-body-medium);padding-left:calc(var(--td-comp-paddingLR-l) - 1px);padding-right:calc(var(--td-comp-paddingLR-l) - 1px);color:var(--td-text-color-primary);background-color:var(--td-bg-color-specialcomponent);border-color:var(--td-border-level-2-color);border-style:dashed}.t-button--variant-dashed .t-icon,.t-button--variant-dashed .t-loading{font-size:var(--td-font-size-body-large)}.t-button--variant-dashed:hover,.t-button--variant-dashed:focus-visible{color:var(--td-brand-color-hover)}.t-button--variant-dashed.t-is-loading{color:var(--td-text-color-primary)}.t-button--variant-dashed.t-is-disabled{color:var(--td-text-color-disabled)}.t-button--variant-dashed:hover,.t-button--variant-dashed:focus-visible{background-color:var(--td-bg-color-specialcomponent)}.t-button--variant-dashed.t-is-loading{background-color:var(--td-bg-color-specialcomponent)}.t-button--variant-dashed.t-is-disabled{background-color:var(--td-bg-color-component-disabled)}.t-button--variant-dashed:hover,.t-button--variant-dashed:focus-visible{border-color:var(--td-brand-color-hover)}.t-button--variant-dashed.t-is-loading,.t-button--variant-dashed.t-is-disabled{border-color:var(--td-border-level-2-color)}.t-button--variant-dashed.t-button--theme-primary{color:var(--td-brand-color);border-color:var(--td-brand-color)}.t-button--variant-dashed.t-button--theme-primary:hover,.t-button--variant-dashed.t-button--theme-primary:focus-visible{color:var(--td-brand-color-hover)}.t-button--variant-dashed.t-button--theme-primary.t-is-loading{color:var(--td-brand-color)}.t-button--variant-dashed.t-button--theme-primary.t-is-disabled{color:var(--td-brand-color-disabled)}.t-button--variant-dashed.t-button--theme-primary:hover,.t-button--variant-dashed.t-button--theme-primary:focus-visible{border-color:var(--td-brand-color-hover)}.t-button--variant-dashed.t-button--theme-primary.t-is-loading{border-color:var(--td-brand-color)}.t-button--variant-dashed.t-button--theme-primary.t-is-disabled{border-color:var(--td-brand-color-disabled)}.t-button--variant-dashed.t-button--theme-success{color:var(--td-success-color);border-color:var(--td-success-color)}.t-button--variant-dashed.t-button--theme-success:hover,.t-button--variant-dashed.t-button--theme-success:focus-visible{color:var(--td-success-color-hover)}.t-button--variant-dashed.t-button--theme-success.t-is-loading{color:var(--td-success-color)}.t-button--variant-dashed.t-button--theme-success.t-is-disabled{color:var(--td-success-color-disabled)}.t-button--variant-dashed.t-button--theme-success:hover,.t-button--variant-dashed.t-button--theme-success:focus-visible{border-color:var(--td-success-color-hover)}.t-button--variant-dashed.t-button--theme-success.t-is-loading{border-color:var(--td-success-color)}.t-button--variant-dashed.t-button--theme-success.t-is-disabled{border-color:var(--td-success-color-disabled)}.t-button--variant-dashed.t-button--theme-warning{color:var(--td-warning-color);border-color:var(--td-warning-color)}.t-button--variant-dashed.t-button--theme-warning:hover,.t-button--variant-dashed.t-button--theme-warning:focus-visible{color:var(--td-warning-color-hover)}.t-button--variant-dashed.t-button--theme-warning.t-is-loading{color:var(--td-warning-color)}.t-button--variant-dashed.t-button--theme-warning.t-is-disabled{color:var(--td-warning-color-disabled)}.t-button--variant-dashed.t-button--theme-warning:hover,.t-button--variant-dashed.t-button--theme-warning:focus-visible{border-color:var(--td-warning-color-hover)}.t-button--variant-dashed.t-button--theme-warning.t-is-loading{border-color:var(--td-warning-color)}.t-button--variant-dashed.t-button--theme-warning.t-is-disabled{border-color:var(--td-warning-color-disabled)}.t-button--variant-dashed.t-button--theme-danger{color:var(--td-error-color);border-color:var(--td-error-color)}.t-button--variant-dashed.t-button--theme-danger:hover,.t-button--variant-dashed.t-button--theme-danger:focus-visible{color:var(--td-error-color-hover)}.t-button--variant-dashed.t-button--theme-danger.t-is-loading{color:var(--td-error-color)}.t-button--variant-dashed.t-button--theme-danger.t-is-disabled{color:var(--td-error-color-disabled)}.t-button--variant-dashed.t-button--theme-danger:hover,.t-button--variant-dashed.t-button--theme-danger:focus-visible{border-color:var(--td-error-color-hover)}.t-button--variant-dashed.t-button--theme-danger.t-is-loading{border-color:var(--td-error-color)}.t-button--variant-dashed.t-button--theme-danger.t-is-disabled{border-color:var(--td-error-color-disabled)}.t-button--variant-dashed.t-button--ghost{background-color:transparent;color:var(--td-text-color-anti);border-color:var(--td-text-color-anti)}.t-button--variant-dashed.t-button--ghost:hover,.t-button--variant-dashed.t-button--ghost:focus-visible{background-color:transparent}.t-button--variant-dashed.t-button--ghost:active,.t-button--variant-dashed.t-button--ghost.t-is-loading{background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-is-disabled{background-color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost:hover,.t-button--variant-dashed.t-button--ghost:focus-visible{color:var(--td-brand-color-hover)}.t-button--variant-dashed.t-button--ghost:active{color:var(--td-brand-color-active)}.t-button--variant-dashed.t-button--ghost.t-is-loading{color:var(--td-text-color-anti)}.t-button--variant-dashed.t-button--ghost.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost:hover,.t-button--variant-dashed.t-button--ghost:focus-visible{border-color:var(--td-brand-color-hover)}.t-button--variant-dashed.t-button--ghost:active{border-color:var(--td-brand-color-active)}.t-button--variant-dashed.t-button--ghost.t-is-loading{border-color:var(--td-text-color-anti)}.t-button--variant-dashed.t-button--ghost.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary{color:var(--td-brand-color);border-color:var(--td-brand-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary:hover,.t-button--variant-dashed.t-button--ghost.t-button--theme-primary:focus-visible{color:var(--td-brand-color-hover)}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary:active{color:var(--td-brand-color-active)}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary.t-is-loading{color:var(--td-brand-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary:hover,.t-button--variant-dashed.t-button--ghost.t-button--theme-primary:focus-visible{border-color:var(--td-brand-color-hover)}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary:active{border-color:var(--td-brand-color-active)}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary.t-is-loading{border-color:var(--td-brand-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-button--theme-success{color:var(--td-success-color);border-color:var(--td-success-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-success:hover,.t-button--variant-dashed.t-button--ghost.t-button--theme-success:focus-visible{color:var(--td-success-color-hover)}.t-button--variant-dashed.t-button--ghost.t-button--theme-success:active{color:var(--td-success-color-active)}.t-button--variant-dashed.t-button--ghost.t-button--theme-success.t-is-loading{color:var(--td-success-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-success.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-button--theme-success:hover,.t-button--variant-dashed.t-button--ghost.t-button--theme-success:focus-visible{border-color:var(--td-success-color-hover)}.t-button--variant-dashed.t-button--ghost.t-button--theme-success:active{border-color:var(--td-success-color-active)}.t-button--variant-dashed.t-button--ghost.t-button--theme-success.t-is-loading{border-color:var(--td-success-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-success.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning{color:var(--td-warning-color);border-color:var(--td-warning-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning:hover,.t-button--variant-dashed.t-button--ghost.t-button--theme-warning:focus-visible{color:var(--td-warning-color-hover)}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning:active{color:var(--td-warning-color-active)}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning.t-is-loading{color:var(--td-warning-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning:hover,.t-button--variant-dashed.t-button--ghost.t-button--theme-warning:focus-visible{border-color:var(--td-warning-color-hover)}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning:active{border-color:var(--td-warning-color-active)}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning.t-is-loading{border-color:var(--td-warning-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger{color:var(--td-error-color);border-color:var(--td-error-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger:hover,.t-button--variant-dashed.t-button--ghost.t-button--theme-danger:focus-visible{color:var(--td-error-color-hover)}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger:active{color:var(--td-error-color-active)}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger.t-is-loading{color:var(--td-error-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger:hover,.t-button--variant-dashed.t-button--ghost.t-button--theme-danger:focus-visible{border-color:var(--td-error-color-hover)}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger:active{border-color:var(--td-error-color-active)}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger.t-is-loading{border-color:var(--td-error-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-text{height:var(--td-comp-size-m);font:var(--td-font-body-medium);padding-left:calc(var(--td-comp-paddingLR-l) - 1px);padding-right:calc(var(--td-comp-paddingLR-l) - 1px);color:var(--td-text-color-primary);background-color:transparent;border-color:transparent}.t-button--variant-text .t-icon,.t-button--variant-text .t-loading{font-size:var(--td-font-size-body-large)}.t-button--variant-text:hover,.t-button--variant-text:focus-visible{color:var(--td-text-color-primary)}.t-button--variant-text.t-is-loading{color:var(--td-text-color-primary)}.t-button--variant-text.t-is-disabled{color:var(--td-text-color-disabled)}.t-button--variant-text:hover,.t-button--variant-text:focus-visible{background-color:var(--td-bg-color-container-hover)}.t-button--variant-text.t-is-loading,.t-button--variant-text.t-is-disabled{background-color:transparent}.t-button--variant-text:hover,.t-button--variant-text:focus-visible{border-color:var(--td-bg-color-container-hover)}.t-button--variant-text.t-is-loading,.t-button--variant-text.t-is-disabled{border-color:transparent}.t-button--variant-text.t-button--theme-primary{color:var(--td-brand-color)}.t-button--variant-text.t-button--theme-primary:hover,.t-button--variant-text.t-button--theme-primary:focus-visible{color:var(--td-brand-color-hover)}.t-button--variant-text.t-button--theme-primary.t-is-loading{color:var(--td-brand-color)}.t-button--variant-text.t-button--theme-primary.t-is-disabled{color:var(--td-brand-color-disabled)}.t-button--variant-text.t-button--theme-success{color:var(--td-success-color)}.t-button--variant-text.t-button--theme-success:hover,.t-button--variant-text.t-button--theme-success:focus-visible{color:var(--td-success-color-hover)}.t-button--variant-text.t-button--theme-success.t-is-loading{color:var(--td-success-color)}.t-button--variant-text.t-button--theme-success.t-is-disabled{color:var(--td-success-color-disabled)}.t-button--variant-text.t-button--theme-warning{color:var(--td-warning-color)}.t-button--variant-text.t-button--theme-warning:hover,.t-button--variant-text.t-button--theme-warning:focus-visible{color:var(--td-warning-color-hover)}.t-button--variant-text.t-button--theme-warning.t-is-loading{color:var(--td-warning-color)}.t-button--variant-text.t-button--theme-warning.t-is-disabled{color:var(--td-warning-color-disabled)}.t-button--variant-text.t-button--theme-danger{color:var(--td-error-color)}.t-button--variant-text.t-button--theme-danger:hover,.t-button--variant-text.t-button--theme-danger:focus-visible{color:var(--td-error-color-hover)}.t-button--variant-text.t-button--theme-danger.t-is-loading{color:var(--td-error-color)}.t-button--variant-text.t-button--theme-danger.t-is-disabled{color:var(--td-error-color-disabled)}.t-button--variant-text.t-button--ghost{background:none;color:var(--td-text-color-anti)}.t-button--variant-text.t-button--ghost:hover,.t-button--variant-text.t-button--ghost:focus-visible{color:var(--td-brand-color-hover)}.t-button--variant-text.t-button--ghost:active{color:var(--td-brand-color-active)}.t-button--variant-text.t-button--ghost.t-is-loading{color:var(--td-text-color-anti)}.t-button--variant-text.t-button--ghost.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-text.t-button--ghost.t-button--theme-primary{color:var(--td-brand-color)}.t-button--variant-text.t-button--ghost.t-button--theme-primary:hover,.t-button--variant-text.t-button--ghost.t-button--theme-primary:focus-visible{color:var(--td-brand-color-hover)}.t-button--variant-text.t-button--ghost.t-button--theme-primary:active{color:var(--td-brand-color-active)}.t-button--variant-text.t-button--ghost.t-button--theme-primary.t-is-loading{color:var(--td-brand-color)}.t-button--variant-text.t-button--ghost.t-button--theme-primary.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-text.t-button--ghost.t-button--theme-success{color:var(--td-success-color)}.t-button--variant-text.t-button--ghost.t-button--theme-success:hover,.t-button--variant-text.t-button--ghost.t-button--theme-success:focus-visible{color:var(--td-success-color-hover)}.t-button--variant-text.t-button--ghost.t-button--theme-success:active{color:var(--td-success-color-active)}.t-button--variant-text.t-button--ghost.t-button--theme-success.t-is-loading{color:var(--td-success-color)}.t-button--variant-text.t-button--ghost.t-button--theme-success.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-text.t-button--ghost.t-button--theme-warning{color:var(--td-warning-color)}.t-button--variant-text.t-button--ghost.t-button--theme-warning:hover,.t-button--variant-text.t-button--ghost.t-button--theme-warning:focus-visible{color:var(--td-warning-color-hover)}.t-button--variant-text.t-button--ghost.t-button--theme-warning:active{color:var(--td-warning-color-active)}.t-button--variant-text.t-button--ghost.t-button--theme-warning.t-is-loading{color:var(--td-warning-color)}.t-button--variant-text.t-button--ghost.t-button--theme-warning.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-text.t-button--ghost.t-button--theme-danger{color:var(--td-error-color)}.t-button--variant-text.t-button--ghost.t-button--theme-danger:hover,.t-button--variant-text.t-button--ghost.t-button--theme-danger:focus-visible{color:var(--td-error-color-hover)}.t-button--variant-text.t-button--ghost.t-button--theme-danger:active{color:var(--td-error-color-active)}.t-button--variant-text.t-button--ghost.t-button--theme-danger.t-is-loading{color:var(--td-error-color)}.t-button--variant-text.t-button--ghost.t-button--theme-danger.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button.t-is-loading,.t-button.t-is-disabled{cursor:not-allowed}.t-button.t-size-s{height:var(--td-comp-size-xs);font:var(--td-font-body-small);padding-left:calc(var(--td-comp-paddingLR-s) - 1px);padding-right:calc(var(--td-comp-paddingLR-s) - 1px)}.t-button.t-size-s .t-icon,.t-button.t-size-s .t-loading{font-size:var(--td-font-size-body-medium)}.t-button.t-size-l{height:var(--td-comp-size-xl);font:var(--td-font-body-large);padding-left:calc(var(--td-comp-paddingLR-xl) - 1px);padding-right:calc(var(--td-comp-paddingLR-xl) - 1px)}.t-button.t-size-l .t-icon,.t-button.t-size-l .t-loading{font-size:var(--td-font-size-title-large)}.t-button--shape-square{width:var(--td-comp-size-m);padding:0}.t-button--shape-square.t-size-s{width:var(--td-comp-size-xs);padding:0}.t-button--shape-square.t-size-l{width:var(--td-comp-size-xl);padding:0}.t-button--shape-round{border-radius:var(--td-radius-round)}.t-button--shape-round.t-size-s{border-radius:calc(var(--td-comp-size-xs) / 2)}.t-button--shape-round.t-size-l{border-radius:calc(var(--td-comp-size-xl) / 2)}.t-button--shape-circle{width:var(--td-comp-size-m);padding:0;text-align:center;border-radius:calc(var(--td-comp-size-m) / 2)}.t-button--shape-circle .t-icon,.t-button--shape-circle .t-loading{font-size:var(--td-font-size-body-large)}.t-button--shape-circle.t-size-s{width:var(--td-comp-size-xs);border-radius:calc(var(--td-comp-size-xs) / 2)}.t-button--shape-circle.t-size-l{width:var(--td-comp-size-xl);padding:0;border-radius:calc(var(--td-comp-size-xl) / 2)}.t-button.t-size-full-width{display:flex;width:100%}.t-button--ghost{--ripple-color: var(--td-gray-color-10)}.t-button:not(.t-is-disabled):not(.t-button--ghost){--ripple-color: var(--td-bg-color-container-active)}.t-button--variant-base:not(.t-is-disabled):not(.t-button--ghost){--ripple-color: var(--td-bg-color-component-active)}.t-button--variant-base.t-button--theme-primary:not(.t-is-disabled):not(.t-button--ghost){--ripple-color: var(--td-brand-color-active)}.t-button--variant-base.t-button--theme-success:not(.t-is-disabled):not(.t-button--ghost){--ripple-color: var(--td-success-color-active)}.t-button--variant-base.t-button--theme-warning:not(.t-is-disabled):not(.t-button--ghost){--ripple-color: var(--td-warning-color-active)}.t-button--variant-base.t-button--theme-danger:not(.t-is-disabled):not(.t-button--ghost){--ripple-color: var(--td-error-color-active)}.t-icon{display:inline-block;vertical-align:middle;width:1em;height:1em}.t-icon:before{font-family:unset}.t-icon{fill:currentColor}.t-icon.t-size-s,i.t-size-s{font-size:14px}.t-icon.t-size-m,i.t-size-m{font-size:16px}.t-icon.t-size-l,i.t-size-l{font-size:18px}.t-space{display:inline-flex}.t-space .t-space-item{width:inherit}.t-space-align-start{align-items:flex-start}.t-space-align-end{align-items:flex-end}.t-space-align-baseline{align-items:baseline}.t-space-align-center{align-items:center}.t-space-vertical{flex-direction:column}.t-space-vertical .t-space-item-separator{width:100%}.t-message{margin:0;padding:0;list-style:none;width:fit-content;outline:0;border-radius:var(--td-radius-medium);background-color:var(--td-bg-color-container);box-shadow:var(--td-shadow-3),var(--td-shadow-inset-top),var(--td-shadow-inset-right),var(--td-shadow-inset-bottom),var(--td-shadow-inset-left);box-sizing:border-box;display:flex;align-items:center;color:var(--td-text-color-primary);font:var(--td-font-body-medium);padding:var(--td-comp-paddingTB-m) var(--td-comp-paddingLR-l)}.t-message>.t-icon,.t-message>[data-t-icon]>.t-icon,.t-message .t-loading{color:var(--td-brand-color);margin-right:var(--td-comp-margin-s);flex-shrink:0;font-size:calc(var(--td-font-size-body-medium) + 6px)}.t-message.t-is-success>.t-icon,.t-message.t-is-success>[data-t-icon]>.t-icon,.t-message.t-is-success .t-loading{color:var(--td-success-color)}.t-message.t-is-warning>.t-icon,.t-message.t-is-warning>[data-t-icon]>.t-icon,.t-message.t-is-warning .t-loading{color:var(--td-warning-color)}.t-message.t-is-error>.t-icon,.t-message.t-is-error>[data-t-icon]>.t-icon,.t-message.t-is-error .t-loading{color:var(--td-error-color)}.t-message.t-is-closable .t-message__close{display:inline-flex;margin-right:0;margin-left:var(--td-comp-margin-xxl);cursor:pointer;color:var(--td-text-color-secondary)}.t-message.t-is-closable .t-message__close .t-icon-close{font-size:calc(var(--td-font-size-body-medium) + 2px);border-radius:var(--td-radius-default);transition:all .2s linear}.t-message.t-is-closable .t-message__close .t-icon-close:hover{background:var(--td-bg-color-container-hover)}.t-message.t-is-closable .t-message__close .t-icon-close:active{background:var(--td-bg-color-container-active)}.t-message__list{position:fixed;z-index:6000}.t-message__list .t-message{margin-bottom:var(--td-comp-margin-s);word-break:break-all}.content-placement-top .t-popup[data-popper-placement^=top] .t-popup__content{margin-bottom:var(--td-comp-margin-s)}.content-placement-top .t-popup[data-popper-placement^=top] .t-popup__content--arrow{margin-bottom:var(--td-comp-margin-l)}.content-placement-bottom .t-popup[data-popper-placement^=bottom] .t-popup__content{margin-top:var(--td-comp-margin-s)}.content-placement-bottom .t-popup[data-popper-placement^=bottom] .t-popup__content--arrow{margin-top:var(--td-comp-margin-l)}.content-placement-left .t-popup[data-popper-placement^=left] .t-popup__content{margin-right:var(--td-comp-margin-s)}.content-placement-left .t-popup[data-popper-placement^=left] .t-popup__content--arrow{margin-right:var(--td-comp-margin-l)}.content-placement-left .t-popup[data-popper-placement^=left] .t-popup__content--text{max-width:480px}.content-placement-right .t-popup[data-popper-placement^=right] .t-popup__content{margin-left:var(--td-comp-margin-s)}.content-placement-right .t-popup[data-popper-placement^=right] .t-popup__content--arrow{margin-left:var(--td-comp-margin-l)}.content-placement-right .t-popup[data-popper-placement^=right] .t-popup__content--text{max-width:480px}.t-popup{font:var(--td-font-body-medium);box-sizing:border-box;margin:0;padding:0;list-style:none;color:var(--td-text-color-primary);display:inline-block;z-index:5500}.t-popup__content{position:relative;background:var(--td-bg-color-container);box-shadow:var(--td-shadow-2),var(--td-shadow-inset-top),var(--td-shadow-inset-right),var(--td-shadow-inset-bottom),var(--td-shadow-inset-left);border-radius:var(--td-radius-medium);padding:var(--td-comp-paddingTB-xs) var(--td-comp-paddingLR-s);font-size:var(--td-font-size-body-medium);line-height:var(--td-line-height-body-medium);box-sizing:border-box;word-break:break-all}.t-popup__arrow{position:absolute;z-index:1;width:8px;height:8px}.t-popup__arrow:before{position:absolute;content:"";width:8px;height:8px;transform:rotate(45deg);background:var(--td-bg-color-container)}.t-popup[data-popper-placement^=top] .t-popup__content{margin-bottom:var(--td-comp-margin-s)}.t-popup[data-popper-placement^=top] .t-popup__content--arrow{margin-bottom:var(--td-comp-margin-l)}.t-popup[data-popper-placement^=bottom] .t-popup__content{margin-top:var(--td-comp-margin-s)}.t-popup[data-popper-placement^=bottom] .t-popup__content--arrow{margin-top:var(--td-comp-margin-l)}.t-popup[data-popper-placement^=left] .t-popup__content{margin-right:var(--td-comp-margin-s)}.t-popup[data-popper-placement^=left] .t-popup__content--arrow{margin-right:var(--td-comp-margin-l)}.t-popup[data-popper-placement^=left] .t-popup__content--text{max-width:480px}.t-popup[data-popper-placement^=right] .t-popup__content{margin-left:var(--td-comp-margin-s)}.t-popup[data-popper-placement^=right] .t-popup__content--arrow{margin-left:var(--td-comp-margin-l)}.t-popup[data-popper-placement^=right] .t-popup__content--text{max-width:480px}.t-popup[data-popper-placement^=top] .t-popup__arrow:before{border-top-left-radius:100%;box-shadow:var(--td-shadow-inset-left),var(--td-shadow-inset-bottom)}.t-popup[data-popper-placement=top-start] .t-popup__arrow{left:8px}.t-popup[data-popper-placement=top] .t-popup__arrow{left:50%;margin-left:-4px}.t-popup[data-popper-placement=top-end] .t-popup__arrow{left:calc(100% - 16px)}.t-popup[data-popper-placement^=bottom] .t-popup__arrow{top:-4px}.t-popup[data-popper-placement^=bottom] .t-popup__arrow:before{border-bottom-right-radius:100%;box-shadow:var(--td-shadow-inset-top),var(--td-shadow-inset-right)}.t-popup[data-popper-placement=bottom-start] .t-popup__arrow{left:8px}.t-popup[data-popper-placement=bottom] .t-popup__arrow{left:50%;margin-left:-4px}.t-popup[data-popper-placement=bottom-end] .t-popup__arrow{left:calc(100% - 16px)}.t-popup[data-popper-placement^=left] .t-popup__arrow{right:-4px}.t-popup[data-popper-placement^=left] .t-popup__arrow:before{box-shadow:var(--td-shadow-inset-left),var(--td-shadow-inset-top)}.t-popup[data-popper-placement=left-start] .t-popup__arrow{top:8px}.t-popup[data-popper-placement=left] .t-popup__arrow{top:50%;margin-top:-4px}.t-popup[data-popper-placement=left-end] .t-popup__arrow{top:calc(100% - 16px)}.t-popup[data-popper-placement^=right] .t-popup__arrow{left:-4px}.t-popup[data-popper-placement^=right] .t-popup__arrow:before{box-shadow:var(--td-shadow-inset-right),var(--td-shadow-inset-bottom)}.t-popup[data-popper-placement=right-start] .t-popup__arrow{top:8px}.t-popup[data-popper-placement=right] .t-popup__arrow{top:50%;margin-top:-4px}.t-popup[data-popper-placement=right-end] .t-popup__arrow{top:calc(100% - 16px)}.t-popup--animation-enter,.t-popup--animation-enter-from,.t-popup--animation-exiting,.t-popup--animation-leave-to{opacity:0;visibility:hidden}.t-popup--animation-enter-to,.t-popup--animation-entering,.t-popup--animation-leave-from,.t-popup--animation-leave{opacity:1;visibility:visible;transform:none}.t-popup--animation-enter-active{transition:opacity .2s linear}.t-popup--animation-leave-active{transition:opacity .2s cubic-bezier(0,0,.15,1),visibility .2s cubic-bezier(.82,0,1,.9)}.t-popup--animation-expand-enter-active[data-popper-placement^=top]{animation:t-popup-animation-expand-in-top .2s cubic-bezier(.38,0,.24,1),t-fade-in .2s linear}.t-popup--animation-expand-leave-active[data-popper-placement^=top]{animation:t-popup-animation-expand-out-top .2s cubic-bezier(.38,0,.24,1),t-fade-out .2s cubic-bezier(0,0,.15,1)}@keyframes t-popup-animation-expand-in-top{0%{clip-path:polygon(-20% 120%,120% 120%,120% 120%,-20% 120%)}to{clip-path:polygon(-20% 0,120% 0,120% 120%,-20% 120%)}}@keyframes t-popup-animation-expand-out-top{0%{clip-path:polygon(-20% 0,120% 0,120% 120%,-20% 120%)}to{clip-path:polygon(-20% 120%,120% 120%,120% 120%,-20% 120%)}}.t-popup--animation-expand-enter-active[data-popper-placement^=bottom]{animation:t-popup-animation-expand-in-bottom .2s cubic-bezier(.38,0,.24,1),t-fade-in .2s linear}.t-popup--animation-expand-leave-active[data-popper-placement^=bottom]{animation:t-popup-animation-expand-out-bottom .2s cubic-bezier(.38,0,.24,1),t-fade-out .2s cubic-bezier(0,0,.15,1)}@keyframes t-popup-animation-expand-in-bottom{0%{clip-path:polygon(-20% 0,120% 0,120% 0,-20% 0)}to{clip-path:polygon(-20% 0,120% 0,120% 120%,-20% 120%)}}@keyframes t-popup-animation-expand-out-bottom{0%{clip-path:polygon(-20% 0,120% 0,120% 120%,-20% 120%)}to{clip-path:polygon(-20% 0,120% 0,120% 0,-20% 0)}}.t-tooltip .t-popup__content{display:inline-block;border:0;z-index:5600;margin-bottom:1px;max-width:480px;word-break:break-word;box-sizing:border-box;border-radius:var(--td-radius-medium);color:var(--td-text-color-primary)}.t-tooltip--default .t-popup__content{color:var(--td-text-color-anti);background:var(--td-gray-color-13);box-shadow:inset 0 .5px 0 var(--td-gray-color-9),inset .5px 0 0 var(--td-gray-color-9),inset 0 -.5px 0 var(--td-gray-color-9),inset -.5px 0 0 var(--td-gray-color-9)}.t-tooltip--default[data-popper-placement^=left] .t-popup__arrow:before{box-shadow:inset -.5px 0 0 var(--td-gray-color-9),inset 0 .5px 0 var(--td-gray-color-9)}.t-tooltip--default[data-popper-placement^=right] .t-popup__arrow:before{box-shadow:inset .5px 0 0 var(--td-gray-color-9),inset 0 -.5px 0 var(--td-gray-color-9)}.t-tooltip--default[data-popper-placement^=top] .t-popup__arrow:before{box-shadow:inset 0 -.5px 0 var(--td-gray-color-9),inset -.5px 0 0 var(--td-gray-color-9)}.t-tooltip--default[data-popper-placement^=bottom] .t-popup__arrow:before{box-shadow:inset .5px 0 0 var(--td-gray-color-9),inset 0 .5px 0 var(--td-gray-color-9)}.t-tooltip--primary .t-popup__content{color:var(--td-brand-color);background:var(--td-brand-color-light)}.t-tooltip--success .t-popup__content{color:var(--td-success-color);background:var(--td-success-color-light)}.t-tooltip--danger .t-popup__content{color:var(--td-error-color);background:var(--td-error-color-light)}.t-tooltip--warning .t-popup__content{color:var(--td-warning-color);background:var(--td-warning-color-light)}.t-tooltip .t-popup__arrow{background:inherit;height:auto}.t-tooltip .t-popup__arrow:before{background:inherit}.t-tooltip--noshadow .t-popup__content,.t-tooltip--noshadow[data-popper-placement] .t-popup__arrow:before{box-shadow:none}.input-readonly.t-is-readonly{color:var(--td-text-color-primary);background-color:var(--td-bg-color-specialcomponent)}.input-readonly.t-is-readonly .t-input__inner{cursor:pointer}.input-disabled.t-is-disabled{color:var(--td-text-color-disabled);background-color:var(--td-bg-color-component-disabled)}.input-disabled.t-is-disabled:hover{border-color:var(--td-border-level-2-color)}.input-disabled.t-is-disabled .t-input__inner{cursor:not-allowed;color:var(--td-text-color-disabled)}.input-disabled.t-is-disabled .t-input__inner::placeholder{color:var(--td-text-color-disabled)}.input-disabled.t-is-disabled>.t-input__prefix .t-icon,.input-disabled.t-is-disabled>.t-input__suffix .t-icon{color:var(--td-text-color-disabled)}.t-tips{font-size:var(--td-font-size-body-small)}.t-tips.t-is-default{color:var(--td-text-color-placeholder)}.t-tips.t-is-error{color:var(--td-error-color)}.t-tips.t-is-warning{color:var(--td-warning-color)}.t-tips.t-is-success{color:var(--td-success-color)}.t-input{margin:0;padding:0;list-style:none;position:relative;height:var(--td-comp-size-m);border-width:1px;border-style:solid;border-radius:var(--td-radius-default);border-color:var(--td-border-level-2-color);padding:0 var(--td-comp-paddingLR-s);background-color:var(--td-bg-color-specialcomponent);outline:none;color:var(--td-text-color-primary);font:var(--td-font-body-medium);width:100%;box-sizing:border-box;transition:border cubic-bezier(.38,0,.24,1) .2s,box-shadow cubic-bezier(.38,0,.24,1) .2s;display:flex;align-items:center;overflow:hidden}.t-input:hover{border-color:var(--td-brand-color)}.t-input:focus{z-index:1;border-color:var(--td-brand-color);box-shadow:0 0 0 2px var(--td-brand-color-focus)}.t-input--focused{border-color:var(--td-brand-color);box-shadow:0 0 0 2px var(--td-brand-color-focus);z-index:1}.t-input :focus-visible{outline:none}.t-input__inner{flex:1;border:none;outline:none;padding:0;max-width:100%;min-width:0;color:var(--td-text-color-primary);font:inherit;background-color:transparent;box-sizing:border-box;white-space:nowrap;word-wrap:normal;overflow:hidden;text-overflow:ellipsis}.t-input__inner::placeholder{color:var(--td-text-color-placeholder)}.t-input__inner:placeholder-shown{text-overflow:ellipsis;width:100%}.t-input__inner[type=password]::-ms-reveal{display:none}.t-input__inner[type=search]::-webkit-search-decoration,.t-input__inner[type=search]::-webkit-search-cancel-button,.t-input__inner[type=search]::-webkit-search-results-button,.t-input__inner[type=search]::-webkit-search-results-decoration{-webkit-appearance:none;-moz-appearance:none;appearance:none}.t-input__inner.t-input--soft-hidden{width:0}.t-input__extra{font:var(--td-font-body-small);color:var(--td-text-color-placeholder)}.t-input__status{position:absolute;right:-24px;top:0}.t-input.t-input--suffix>span.t-input__clear{opacity:0;visibility:hidden;transition:border cubic-bezier(.38,0,.24,1) .2s,box-shadow cubic-bezier(.38,0,.24,1) .2s}.t-input.t-input--suffix:hover>span.t-input__clear{opacity:1;visibility:visible}.t-input.t-is-success{border-color:var(--td-success-color)}.t-input.t-is-success:focus{box-shadow:0 0 0 2px var(--td-success-color-focus)}.t-input.t-is-success.t-input--focused{box-shadow:0 0 0 2px var(--td-success-color-focus)}.t-input.t-is-success>.t-input__extra{color:var(--td-success-color)}.t-input.t-is-warning{border-color:var(--td-warning-color)}.t-input.t-is-warning:focus{box-shadow:0 0 0 2px var(--td-warning-color-focus)}.t-input.t-is-warning.t-input--focused{box-shadow:0 0 0 2px var(--td-warning-color-focus)}.t-input.t-is-warning>.t-input__extra{color:var(--td-warning-color)}.t-input.t-is-error{border-color:var(--td-error-color)}.t-input.t-is-error:focus{box-shadow:0 0 0 2px var(--td-error-color-focus)}.t-input.t-is-error.t-input--focused{box-shadow:0 0 0 2px var(--td-error-color-focus)}.t-input.t-is-error>.t-input__extra{color:var(--td-error-color)}.t-input.t-is-readonly{color:var(--td-text-color-primary);background-color:var(--td-bg-color-specialcomponent)}.t-input.t-is-readonly .t-input__inner{cursor:pointer}.t-input.t-is-disabled{color:var(--td-text-color-disabled);background-color:var(--td-bg-color-component-disabled)}.t-input.t-is-disabled:hover{border-color:var(--td-border-level-2-color)}.t-input.t-is-disabled .t-input__inner{cursor:not-allowed;color:var(--td-text-color-disabled)}.t-input.t-is-disabled .t-input__inner::placeholder{color:var(--td-text-color-disabled)}.t-input.t-is-disabled>.t-input__prefix .t-icon,.t-input.t-is-disabled>.t-input__suffix .t-icon{color:var(--td-text-color-disabled)}.t-input.t-input--prefix>.t-input__prefix{z-index:2;height:100%;text-align:center;display:flex;align-items:center;font-size:var(--td-font-size-body-medium)}.t-input.t-input--prefix>.t-input__prefix-icon{font-size:var(--td-font-size-body-large)}.t-input.t-input--suffix>.t-input__suffix{z-index:2;height:100%;text-align:center;display:flex;align-items:center;font-size:var(--td-font-size-body-medium)}.t-input.t-input--suffix>.t-input__suffix-icon{font-size:var(--td-font-size-body-large)}.t-input .t-input__suffix-clear{cursor:pointer}.t-input.t-size-l{height:var(--td-comp-size-xl);font:var(--td-font-body-large);padding:var(--td-comp-paddingTB-m) var(--td-comp-paddingLR-m)}.t-input.t-size-s{height:var(--td-comp-size-xs);font:var(--td-font-body-small)}.t-input .t-input__prefix>.t-icon,.t-input .t-input__suffix>.t-icon{font-size:inherit}.t-input .t-input__prefix>.t-icon{font-size:16px;color:var(--td-text-color-placeholder)}.t-input .t-input__prefix:not(:empty){margin-right:var(--td-comp-margin-s)}.t-input .t-input__suffix>.t-icon{color:var(--td-text-color-placeholder);transition:all .2s linear}.t-input .t-input__suffix>.t-icon:hover{color:var(--td-text-color-secondary);transition:all .2s linear}.t-input .t-input__suffix:not(:empty){margin-left:var(--td-comp-margin-s)}.t-input.t-is-focused .t-input__prefix>.t-icon{color:var(--td-brand-color)}.t-input.t-is-focused .t-input__suffix>.t-icon-time,.t-input.t-is-focused .t-input__suffix .t-icon-calendar{color:var(--td-brand-color)}.t-input-group{position:relative;display:inline-flex;align-items:stretch}.t-input-group .t-input__wrap{border-radius:0}.t-input-group .t-input__wrap:first-child{border-radius:var(--td-radius-default) 0 0 var(--td-radius-default)}.t-input-group .t-input__wrap:last-child{border-radius:0 var(--td-radius-default) var(--td-radius-default) 0}.t-input-group .t-button,.t-input-group .t-select{border-radius:0}.t-input-group .t-button:not(:first-child),.t-input-group .t-select:not(:first-child){margin-left:-1px}.t-input-group .t-input__wrap:not(:first-child) .t-input{margin-left:-1px}.t-input-group .t-input__wrap:first-child .t-input{border-radius:var(--td-radius-default) 0 0 var(--td-radius-default)}.t-input-group .t-input__wrap:last-child .t-input{border-radius:0 var(--td-radius-default) var(--td-radius-default) 0}.t-input-group .t-button:first-child,.t-input-group .t-select:first-child{border-radius:var(--td-radius-default) 0 0 var(--td-radius-default)}.t-input-group .t-button:last-child,.t-input-group .t-select:last-child{border-radius:0 var(--td-radius-default) var(--td-radius-default) 0}.t-input-group--separate .t-input__wrap+.t-input__wrap{margin-left:var(--td-comp-margin-xxxl)}.t-input-group--separate .t-button,.t-input-group--separate .t-select{border-radius:var(--td-radius-default)}.t-input-group--separate .t-button:first-child,.t-input-group--separate .t-select:first-child{border-radius:var(--td-radius-default) 0 0 var(--td-radius-default)}.t-input-group--separate .t-button:last-child,.t-input-group--separate .t-select:last-child{border-radius:0 var(--td-radius-default) var(--td-radius-default) 0}.t-input-group--separate .t-input__wrap .t-input,.t-input-group--separate .t-input__wrap .t-input:first-child{border-radius:var(--td-radius-default)}.t-input-group--separate .t-input__wrap .t-input:last-child{border-radius:var(--td-radius-default)}.t-input-group .t-input__inner,.t-input-group .t-button,.t-input-group .t-select{position:relative;z-index:0}.t-input-group .t-input__inner:hover,.t-input-group .t-button:hover,.t-input-group .t-select:hover,.t-input-group .t-input__inner:focus,.t-input-group .t-button:focus,.t-input-group .t-select:focus,.t-input-group .t-input__inner:active,.t-input-group .t-button:active,.t-input-group .t-select:active{z-index:1}.t-input__wrap{width:100%}.t-input__tips{height:auto;min-height:var(--td-line-height-body-small);font:var(--td-font-body-small);position:absolute}.t-input__tips--default{color:var(--td-text-color-placeholder)}.t-input__tips--success{color:var(--td-success-color)}.t-input__tips--warning{color:var(--td-warning-color)}.t-input__tips--error{color:var(--td-error-color)}.t-align-center>.t-input__inner{text-align:center}.t-align-right>.t-input__inner{text-align:right}.t-input__input-pre{position:absolute;visibility:hidden;white-space:pre;display:block}.t-input--auto-width{width:fit-content;min-width:60px}.t-input__limit-number{font:var(--td-font-body-medium);color:var(--td-text-color-placeholder);background:var(--td-bg-color-specialcomponent)}.t-input__limit-number.t-is-disabled{background:var(--td-bg-color-component-disabled)}@keyframes t-fade-in{0%{opacity:0}to{opacity:1}}@keyframes t-fade-out{0%{opacity:1}to{opacity:0}}@keyframes t-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.t-icon-loading{animation:t-spin 1s linear infinite}@keyframes t-zoom-out{0%{transform:scale(.2)}to{transform:scale(1)}}.t-input-number{font:var(--td-font-body-medium);color:var(--td-text-color-primary);margin:0;padding:0;list-style:none;display:inline-block;position:relative;box-sizing:border-box;padding:0 var(--td-comp-size-m);-webkit-user-select:none;user-select:none;width:144px}.t-input-number:not(.t-input-number--column)>.t-input-number__decrease+.t-input__wrap{margin-left:var(--td-comp-margin-xs)}.t-input-number input::-webkit-outer-spin-button,.t-input-number input::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}.t-input-number input[type=number]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.t-input-number>.t-input__tips{position:absolute;left:0}.t-input-number input+.t-input__suffix{margin-left:var(--td-comp-paddingLR-s)}.t-input-number .t-input__prefix{margin-right:var(--td-comp-paddingLR-s)}.t-input-number .t-input{color:var(--td-text-color-primary)}.t-input-number.t-input-number--auto-width{width:auto}.t-input-number.t-input-number--auto-width.t-is-controls-right{min-width:auto;width:auto}.t-input-number.t-input-number--auto-width .t-input__inner{min-width:42px}.t-input-number .t-input-number__decrease,.t-input-number .t-input-number__increase{width:var(--td-comp-size-m);height:var(--td-comp-size-m);position:absolute;top:0;border:1px solid var(--td-border-level-2-color);box-sizing:border-box;border-radius:var(--td-radius-default);background-color:transparent;display:flex;justify-content:center;align-items:center;z-index:1;cursor:pointer;transition:all cubic-bezier(.38,0,.24,1) .2s}.t-input-number .t-input-number__decrease:hover,.t-input-number .t-input-number__increase:hover{color:var(--td-brand-color);border-color:var(--td-brand-color)}.t-input-number .t-input-number__decrease:hover .t-icon,.t-input-number .t-input-number__increase:hover .t-icon{color:var(--td-brand-color)}.t-input-number .t-input-number__decrease:active,.t-input-number .t-input-number__increase:active{color:var(--td-brand-color);background-color:var(--td-bg-color-container-hover)}.t-input-number .t-input-number__decrease .t-icon,.t-input-number .t-input-number__increase .t-icon{position:relative;z-index:1;font-size:var(--td-font-size-body-large);color:var(--td-text-color-secondary)}.t-input-number .t-input-number__decrease.t-is-disabled,.t-input-number .t-input-number__increase.t-is-disabled{color:var(--td-text-color-disabled);cursor:no-drop;background-color:var(--td-bg-color-component-disabled)}.t-input-number .t-input-number__decrease.t-is-disabled .t-icon,.t-input-number .t-input-number__increase.t-is-disabled .t-icon{color:var(--td-text-color-disabled)}.t-input-number .t-input-number__decrease.t-is-disabled:hover,.t-input-number .t-input-number__increase.t-is-disabled:hover{border-color:var(--td-border-level-2-color)}.t-input-number .t-input-number__decrease.t-is-disabled:hover .t-icon,.t-input-number .t-input-number__increase.t-is-disabled:hover .t-icon{color:var(--td-text-color-disabled)}.t-input-number .t-input-number__decrease.t-is-disabled::placeholder,.t-input-number .t-input-number__increase.t-is-disabled::placeholder{color:var(--td-text-color-disabled)}.t-input-number .t-input-number__decrease{left:0}.t-input-number .t-input-number__increase{right:-8px}.t-input-number.t-is-disabled .t-input{cursor:no-drop;background-color:var(--td-bg-color-component-disabled);color:var(--td-text-color-disabled)}.t-input-number.t-is-disabled .t-input:hover,.t-input-number.t-is-disabled .t-input:focus,.t-input-number.t-is-disabled .t-input:active{border-color:var(--td-border-level-2-color)}.t-input-number.t-is-disabled .t-input-number__decrease,.t-input-number.t-is-disabled .t-input-number__increase{color:var(--td-text-color-disabled);cursor:no-drop;background-color:var(--td-bg-color-component-disabled)}.t-input-number.t-is-disabled .t-input-number__decrease .t-icon,.t-input-number.t-is-disabled .t-input-number__increase .t-icon{color:var(--td-text-color-secondary)}.t-input-number.t-size-s{width:120px;padding:0 var(--td-comp-size-xs)}.t-input-number.t-size-s .t-input{font-size:var(--td-font-size-body-small);height:var(--td-comp-size-xs);line-height:var(--td-comp-size-xs)}.t-input-number.t-size-s .t-input-number__decrease,.t-input-number.t-size-s .t-input-number__increase{font-size:var(--td-font-size-body-medium);width:var(--td-comp-size-xs);height:var(--td-comp-size-xs)}.t-input-number.t-size-l{width:168px;padding:0 var(--td-comp-size-xl)}.t-input-number.t-size-l .t-input{height:var(--td-comp-size-xl);line-height:var(--td-comp-size-xl)}.t-input-number.t-size-l .t-input-number__decrease,.t-input-number.t-size-l .t-input-number__increase{font-size:18px;width:var(--td-comp-size-xl);height:var(--td-comp-size-xl)}.t-input-number.t-size-l.t-is-controls-right .t-input{height:var(--td-comp-size-xl);line-height:var(--td-comp-size-xl);padding-right:calc(var(--td-comp-size-xl) + var(--td-comp-paddingLR-s))}.t-input-number.t-size-l.t-is-controls-right .t-input-number__decrease,.t-input-number.t-size-l.t-is-controls-right .t-input-number__increase{width:var(--td-comp-size-xl);font-size:var(--td-font-size-body-large)}.t-input-number.t-size-l .t-input--prefix{font:var(--td-font-body-large);padding:0 var(--td-comp-paddingLR-m)}.t-input-number.t-input-number--normal{padding:0;border-radius:var(--td-radius-default)}.t-input-number.t-input-number--normal.t-is-disabled{cursor:no-drop;color:var(--td-text-color-disabled)}.t-input-number.t-input-number--normal.t-is-disabled:hover .t-input{border-color:var(--td-border-level-2-color)}.t-input-number.t-input-number--normal.t-is-disabled::placeholder{color:var(--td-text-color-disabled)}.t-input-number.t-input-number--normal.t-is-disabled .t-input:focus{box-shadow:none}.t-input-number.t-is-controls-right{width:96px;padding:0}.t-input-number.t-is-controls-right:hover .t-input-number__decrease,.t-input-number.t-is-controls-right:hover .t-input-number__increase{opacity:1;visibility:visible}.t-input-number.t-is-controls-right .t-input{width:100%;box-sizing:border-box;margin:0;padding-right:calc(var(--td-comp-size-m) + var(--td-comp-paddingLR-s));border-radius:var(--td-radius-default)}.t-input-number.t-is-controls-right .t-input-number__decrease,.t-input-number.t-is-controls-right .t-input-number__increase{width:var(--td-comp-size-m);height:calc(calc(var(--td-comp-size-m) / 2) - 2px);border:0;left:initial;top:initial;right:1px;border-radius:0;background:var(--td-bg-color-secondarycontainer);opacity:0;visibility:hidden;z-index:2}.t-input-number.t-is-controls-right .t-input-number__decrease .t-icon,.t-input-number.t-is-controls-right .t-input-number__increase .t-icon{font-size:var(--td-font-size-body-small)}.t-input-number.t-is-controls-right .t-input-number__decrease:hover,.t-input-number.t-is-controls-right .t-input-number__increase:hover{background:var(--td-bg-color-component-hover)}.t-input-number.t-is-controls-right .t-input-number__decrease:hover .t-icon,.t-input-number.t-is-controls-right .t-input-number__increase:hover .t-icon{color:var(--td-text-color-primary)}.t-input-number.t-is-controls-right .t-input-number__decrease.t-is-disabled,.t-input-number.t-is-controls-right .t-input-number__increase.t-is-disabled{color:var(--td-text-color-disabled);cursor:no-drop;background-color:var(--td-bg-color-component-disabled)}.t-input-number.t-is-controls-right .t-input-number__decrease.t-is-disabled .t-icon,.t-input-number.t-is-controls-right .t-input-number__increase.t-is-disabled .t-icon{color:var(--td-text-color-disabled)}.t-input-number.t-is-controls-right .t-input-number__decrease.t-is-disabled:hover,.t-input-number.t-is-controls-right .t-input-number__increase.t-is-disabled:hover{border-color:var(--td-border-level-2-color)}.t-input-number.t-is-controls-right .t-input-number__decrease.t-is-disabled:hover .t-icon,.t-input-number.t-is-controls-right .t-input-number__increase.t-is-disabled:hover .t-icon{color:var(--td-text-color-disabled)}.t-input-number.t-is-controls-right .t-input-number__decrease.t-is-disabled::placeholder,.t-input-number.t-is-controls-right .t-input-number__increase.t-is-disabled::placeholder{color:var(--td-text-color-disabled)}.t-input-number.t-is-controls-right .t-input-number__increase{top:1px;border-top-right-radius:calc(var(--td-radius-default) - 1px)}.t-input-number.t-is-controls-right .t-input-number__decrease{top:calc(calc(calc(var(--td-comp-size-m) / 2) - 2px) + 3px);border-bottom-right-radius:calc(var(--td-radius-default) - 1px)}.t-input-number.t-is-controls-right.t-size-l{width:120px}.t-input-number.t-is-controls-right.t-size-l .t-input-number__increase,.t-input-number.t-is-controls-right.t-size-l .t-input-number__decrease{height:calc(calc(var(--td-comp-size-xl) / 2) - 2px)}.t-input-number.t-is-controls-right.t-size-l .t-input-number__decrease{top:calc(calc(calc(var(--td-comp-size-xl) / 2) - 2px) + 3px)}.t-input-number.t-is-controls-right.t-size-s{width:88px}.t-input-number.t-is-controls-right.t-size-s .t-input-number__increase,.t-input-number.t-is-controls-right.t-size-s .t-input-number__decrease{height:calc(calc(var(--td-comp-size-xs) / 2) - 2px)}.t-input-number.t-is-controls-right.t-size-s .t-input-number__decrease{top:calc(calc(calc(var(--td-comp-size-xs) / 2) - 2px) + 3px)}.t-input-number--row .t-input__wrap{width:initial;margin-right:var(--td-comp-margin-xs)}.t-input-number--row .t-input-number__increase{right:0}.t-checkbox-group{font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none;display:inline-flex;flex-wrap:wrap;gap:16px}.t-checkbox{font:var(--td-font-body-medium);box-sizing:border-box;margin:0;padding:0;list-style:none;display:inline-flex;align-items:center;position:relative;cursor:pointer;color:var(--td-text-color-primary)}.t-checkbox+.t-checkbox{margin-left:inherit}.t-checkbox__former{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.t-checkbox__input{position:relative;display:inline-block;width:16px;height:16px;vertical-align:middle;border:1px solid var(--td-border-level-2-color);border-radius:var(--td-radius-default);background-color:var(--td-bg-color-container);box-sizing:border-box}.t-checkbox__input:after{content:"";position:absolute;opacity:0;box-sizing:border-box}.t-checkbox__label{display:inline-block;margin-left:8px;vertical-align:middle;font:var(--td-font-body-medium)}.t-checkbox:hover .t-checkbox__input{border-color:var(--td-brand-color);transition:border-color .2s linear}.t-checkbox.t-is-checked .t-checkbox__input{border-color:var(--td-brand-color);background-color:var(--td-brand-color);transition:background-color .2s cubic-bezier(.82,0,1,.9)}.t-checkbox.t-is-checked .t-checkbox__input:after{opacity:1;top:6px;left:3px;width:5px;height:9px;border:2px solid var(--td-text-color-anti);border-radius:0 0 1px;border-top:0;border-left:0;transform:rotate(45deg) scale(1) translate(-50%,-50%);background:transparent}.t-checkbox.t-is-indeterminate .t-checkbox__input{border-color:var(--td-brand-color);background-color:var(--td-brand-color);transition:background-color .2s cubic-bezier(.82,0,1,.9)}.t-checkbox.t-is-indeterminate .t-checkbox__input:after{opacity:1;width:16px;height:4px;left:-1px;right:0;top:5px;border:unset;transform:scale(.5);background-color:var(--td-font-white-1)}.t-checkbox.t-is-disabled{cursor:not-allowed}.t-checkbox.t-is-disabled .t-checkbox__label{color:var(--td-text-color-disabled)}.t-checkbox.t-is-disabled .t-checkbox__input{background-color:var(--td-bg-color-component-disabled)}.t-checkbox.t-is-disabled:hover .t-checkbox__input,.t-checkbox.t-is-disabled.t-is-checked .t-checkbox__input{border-color:var(--td-border-level-2-color)}.t-checkbox.t-is-disabled.t-is-checked .t-checkbox__input:after{border-color:var(--td-text-color-disabled)}.t-checkbox.t-is-disabled.t-is-indeterminate .t-checkbox__input{border-color:var(--td-border-level-2-color)}.t-checkbox.t-is-disabled.t-is-indeterminate .t-checkbox__input:after{background-color:var(--td-text-color-disabled)}.t-checkbox:focus-visible:focus-visible{outline:2px solid var(--td-brand-color);outline-offset:var(--td-comp-paddingTB-xs);border-radius:0}.t-radio-group{font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none;display:inline-flex;align-items:center;width:fit-content;max-width:100%;border-radius:var(--td-radius-default);flex-wrap:wrap;scrollbar-color:var(--td-scrollbar-color) transparent;scrollbar-width:thin}.t-radio-group::-webkit-scrollbar{width:4px;height:4px}.t-radio-group::-webkit-scrollbar-thumb{border:0px solid transparent;background-clip:content-box;background-color:var(--td-scrollbar-color);border-radius:7px}.t-radio-group::-webkit-scrollbar-thumb:vertical:hover,.t-radio-group::-webkit-scrollbar-thumb:horizontal:hover{background-color:var(--td-scrollbar-hover-color)}.t-radio-group .t-radio{margin-right:var(--td-comp-margin-xxl)}.t-radio-group.t-radio-group__outline{flex-wrap:wrap;row-gap:var(--td-comp-margin-xs)}.t-radio-group.t-radio-group__outline.t-size-s .t-radio-button{height:var(--td-comp-size-xs)}.t-radio-group.t-radio-group__outline.t-size-m .t-radio-button{height:var(--td-comp-size-m)}.t-radio-group.t-radio-group__outline.t-size-l .t-radio-button{height:var(--td-comp-size-xl)}.t-radio-group.t-radio-group__outline .t-radio-button:first-child{border-radius:var(--td-radius-default) 0 0 var(--td-radius-default)}.t-radio-group.t-radio-group__outline .t-radio-button:last-child{border-radius:0 var(--td-radius-default) var(--td-radius-default) 0}.t-radio-group.t-radio-group__outline .t-radio-button.t-is-checked{color:var(--td-brand-color)}.t-radio-group.t-radio-group__outline .t-radio-button.t-is-disabled.t-is-checked{color:var(--td-brand-color-disabled);border-color:var(--td-brand-color-disabled);background-color:var(--td-bg-color-specialcomponent)}.t-radio-group.t-radio-group--filled{border-color:var(--td-bg-color-component);padding:var(--td-comp-paddingTB-xxs) var(--td-comp-paddingLR-xxs);border-radius:var(--td-radius-default);background-color:var(--td-bg-color-component);position:relative}.t-radio-group.t-radio-group--filled .t-radio-group__bg-block{position:absolute;left:2px;top:2px;width:0;height:calc(100% - 4px);background-color:var(--td-bg-color-container-select);transition:all .2s cubic-bezier(.38,0,.24,1);border-radius:var(--td-radius-small)}.t-radio-group.t-radio-group--filled .t-radio-button{color:var(--td-text-color-secondary);border:0;background-color:transparent}.t-radio-group.t-radio-group--filled .t-radio-button:hover{color:var(--td-text-color-primary)}.t-radio-group.t-radio-group--filled .t-radio-button:before{content:"";position:absolute;left:0;top:50%;transform:translateY(-50%);width:1px;height:calc(100% - 16px);background-color:var(--td-component-border);transition:opacity .2s cubic-bezier(0,0,.15,1)}.t-radio-group.t-radio-group--filled .t-radio-button:first-child:before{opacity:0}.t-radio-group.t-radio-group--filled .t-radio-button.t-is-checked{position:relative;color:var(--td-text-color-primary);z-index:1;border:0;transition:color .2s linear}.t-radio-group.t-radio-group--filled .t-radio-button.t-is-checked:before{opacity:0}.t-radio-group.t-radio-group--filled .t-radio-button.t-is-checked+label:before{opacity:0}.t-radio-group.t-radio-group--filled .t-radio-button.t-is-disabled{background-color:transparent}.t-radio-group.t-radio-group--filled .t-radio-button.t-is-disabled.t-is-checked{color:var(--td-text-color-disabled)}.t-radio-group.t-radio-group--filled .t-radio-button.t-is-disabled.t-is-checked~.t-radio-group__bg-block{background-color:var(--td-bg-color-component-disabled)}.t-radio-group.t-radio-group--primary-filled .t-radio-group__bg-block{background-color:var(--td-brand-color)}.t-radio-group.t-radio-group--primary-filled .t-radio-button.t-is-checked,.t-radio-group.t-radio-group--primary-filled .t-radio-button.t-is-disabled.t-is-checked{color:var(--td-text-color-anti)}.t-radio-group.t-radio-group--primary-filled .t-radio-button.t-is-disabled.t-is-checked~.t-radio-group__bg-block{background-color:var(--td-brand-color-disabled)}.t-radio-group.t-size-s .t-radio-button{height:calc(var(--td-comp-size-xs) - (var(--td-comp-paddingTB-xxs) * 2));padding:0px var(--td-comp-paddingLR-s);font:var(--td-font-body-small)}.t-radio-group.t-size-s .t-radio-button:before{height:calc(100% - 16px)}.t-radio-group.t-size-m .t-radio-button{height:calc(var(--td-comp-size-m) - (var(--td-comp-paddingTB-xxs) * 2));padding:var(--td-comp-paddingTB-xs) var(--td-comp-paddingLR-l);font:var(--td-font-body-medium)}.t-radio-group.t-size-m .t-radio-button:before{height:calc(100% - 20px)}.t-radio-group.t-size-l .t-radio-button{height:calc(var(--td-comp-size-xl) - (var(--td-comp-paddingTB-xxs) * 2));padding:var(--td-comp-paddingTB-s) var(--td-comp-paddingLR-xl);font:var(--td-font-body-large)}.t-radio-group.t-size-l .t-radio-button:before{height:calc(100% - 24px)}.t-radio-group .t-radio-button{cursor:pointer;position:relative;border:1px solid;border-color:var(--td-border-level-2-color);border-right:0;display:inline-flex;align-items:center;transition:color .2s cubic-bezier(0,0,.15,1);color:var(--td-text-color-primary);white-space:nowrap;box-sizing:border-box}.t-radio-group .t-radio-button:first-child{border-radius:var(--td-radius-small) 0 0 var(--td-radius-small)}.t-radio-group .t-radio-button:last-child{border-right:1px solid;border-right-color:var(--td-border-level-2-color);border-radius:0 var(--td-radius-small) var(--td-radius-small) 0}.t-radio-group .t-radio-button__former{opacity:0;height:0;width:0;font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none}.t-radio-group .t-radio-button:hover{color:var(--td-brand-color)}.t-radio-group .t-radio-button.t-is-checked{border-right:1px solid;border-color:var(--td-brand-color);transition:border-color .2s cubic-bezier(0,0,.15,1)}.t-radio-group .t-radio-button.t-is-checked+.t-radio-button{border-left:0}.t-radio-group .t-radio-button.t-is-disabled{cursor:not-allowed;color:var(--td-text-color-disabled);background-color:var(--td-bg-color-component-disabled)}.t-radio-group .t-radio-button.t-is-disabled:hover{border-color:var(--td-border-level-2-color);color:var(--td-text-color-disabled)}.t-radio-group .t-radio-button.t-is-disabled:hover:after{width:0}.t-radio-group .t-radio-button.t-is-disabled.t-is-checked{color:var(--td-text-color-disabled)}.t-radio-group .t-radio-button.t-is-disabled.t-is-checked:after{width:0}.t-radio{font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none;position:relative;cursor:pointer;display:inline-block}.t-radio__former{font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none;opacity:0;position:absolute}.t-radio__input{position:relative;display:inline-block;width:16px;height:16px;vertical-align:middle;border-radius:var(--td-radius-circle);border:1px solid var(--td-border-level-2-color);background-color:var(--td-bg-color-container);transition:border .2s cubic-bezier(0,0,.15,1)}.t-radio__input:after{content:"";position:absolute;top:50%;left:50%;width:16px;height:16px;margin-top:-8px;margin-left:-8px;transform:scale(.5);opacity:0;border-radius:var(--td-radius-circle);background-color:var(--td-brand-color);transition:all .2s cubic-bezier(0,0,.15,1)}.t-radio__label{display:inline-block;margin-left:var(--td-comp-margin-s);color:var(--td-text-color-primary);vertical-align:middle;font:var(--td-font-body-medium);white-space:nowrap}.t-radio:hover .t-radio__input,.t-radio.t-is-checked .t-radio__input{border-color:var(--td-brand-color)}.t-radio.t-is-checked .t-radio__input:after{opacity:1}.t-radio.t-is-disabled{cursor:not-allowed}.t-radio.t-is-disabled .t-radio__label{color:var(--td-text-color-disabled)}.t-radio.t-is-disabled .t-radio__input{background-color:var(--td-bg-color-component-disabled)}.t-radio.t-is-disabled:hover .t-radio__input,.t-radio.t-is-disabled.t-is-checked .t-radio__input{border-color:var(--td-border-level-2-color)}.t-radio.t-is-disabled.t-is-checked .t-radio__input:after{background-color:var(--td-text-color-disabled)}.t-radio:focus-visible:focus-visible{outline:2px solid var(--td-brand-color);outline-offset:var(--td-comp-paddingTB-xs);border-radius:0}.t-textarea{font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none;position:relative;width:100%}.t-textarea__inner{display:flex;width:100%;height:var(--td-comp-size-xxxl);min-height:var(--td-comp-size-xxxl);border:1px solid var(--td-border-level-2-color);border-radius:var(--td-radius-default);padding:calc(calc(var(--td-comp-size-m) - var(--td-line-height-body-medium)) / 2) var(--td-comp-paddingLR-s);background-color:var(--td-bg-color-specialcomponent);font:var(--td-font-body-medium);color:var(--td-text-color-primary);resize:vertical;outline:none;transition:all cubic-bezier(.38,0,.24,1) .2s,height 0s;box-sizing:border-box}.t-textarea__inner:hover{border-color:var(--td-brand-color)}.t-textarea__inner:focus{border-color:var(--td-brand-color);box-shadow:0 0 0 2px var(--td-brand-color-focus)}.t-textarea__inner::placeholder{color:var(--td-text-color-placeholder)}.t-textarea__inner.t-is-success{border-color:var(--td-success-color)}.t-textarea__inner.t-is-success:focus{box-shadow:0 0 0 2px var(--td-success-color-focus)}.t-textarea__inner.t-is-warning{border-color:var(--td-warning-color)}.t-textarea__inner.t-is-warning:focus{box-shadow:0 0 0 2px var(--td-warning-color-focus)}.t-textarea__inner.t-is-error{border-color:var(--td-error-color)}.t-textarea__inner.t-is-error:focus{box-shadow:0 0 0 2px var(--td-error-color-focus)}.t-textarea__info_wrapper{display:flex;column-gap:var(--td-comp-margin-s);justify-content:space-between}.t-textarea__info_wrapper_align{justify-content:end}.t-textarea__limit{font:var(--td-font-body-small);color:var(--td-text-color-placeholder)}.t-textarea .t-is-disabled{color:var(--td-text-color-disabled);background-color:var(--td-bg-color-component-disabled);cursor:not-allowed}.t-textarea .t-is-disabled:hover{border-color:var(--td-border-level-2-color)}.t-textarea .t-is-disabled::placeholder{color:var(--td-text-color-disabled)}.t-textarea .t-resize-none{resize:none}.t-textarea__tips{height:auto;min-height:var(--td-comp-size-xs);font:var(--td-font-body-small);display:inline-block}.t-textarea__tips--normal{color:var(--td-text-color-placeholder)}.t-textarea__tips--success{color:var(--td-success-color)}.t-textarea__tips--warning{color:var(--td-warning-color)}.t-textarea__tips--error{color:var(--td-error-color)}@keyframes tDialogZoomIn{0%{opacity:0;transform:scale(.01)}to{opacity:1}}@keyframes tDialogZoomOut{0%{opacity:1}to{opacity:0;transform:scale(.01)}}@keyframes tDialogMaskIn{0%{opacity:0}to{opacity:1}}@keyframes tDialogMaskOut{0%{opacity:1}to{opacity:0}}.t-dialog-zoom .animation-enter{animation-duration:.2s;animation-fill-mode:both;animation-timing-function:cubic-bezier(0,0,.15,1);animation-play-state:paused}.t-dialog-zoom .animation-exit{animation-duration:.2s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.38,0,.24,1);animation-play-state:paused}.t-dialog-zoom .animation-active{animation-play-state:running;animation-fill-mode:both}.t-dialog-zoom-enter,.t-dialog-zoom-enter-from,.t-dialog-zoom-appear{animation-duration:.2s;animation-fill-mode:both;animation-timing-function:cubic-bezier(0,0,.15,1);animation-play-state:paused}.t-dialog-zoom-exit{animation-duration:.2s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.38,0,.24,1);animation-play-state:paused}.t-dialog-zoom-enter-active,.t-dialog-zoom-appear-active{animation-name:tDialogZoomIn;animation-play-state:running;animation-fill-mode:both}.t-dialog-zoom-exit-active{animation-name:tDialogZoomOut;animation-play-state:running;animation-fill-mode:both}.t-dialog-zoom__vue-enter-active .t-dialog{animation-name:tDialogZoomIn;animation-duration:.2s;animation-fill-mode:both;animation-timing-function:cubic-bezier(0,0,.15,1);animation-play-state:paused}.t-dialog-zoom__vue-enter-active .t-dialog__mask{animation-name:tDialogMaskIn;animation-duration:.2s;animation-timing-function:linear;animation-play-state:running;animation-fill-mode:both}.t-dialog-zoom__vue-leave-active .t-dialog{animation-name:tDialogZoomOut;animation-duration:.2s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.38,0,.24,1);animation-play-state:paused}.t-dialog-zoom__vue-leave-active .t-dialog__mask{animation-name:tDialogMaskOut;animation-duration:.2s;animation-timing-function:linear;animation-play-state:running;animation-fill-mode:both}.t-dialog-zoom__vue-enter-to .t-dialog,.t-dialog-zoom__vue-leave-to .t-dialog{animation-play-state:running;animation-fill-mode:both}.t-dialog-fade-enter,.t-dialog-fade-appear{opacity:0;animation-duration:.2s;animation-fill-mode:both;animation-timing-function:cubic-bezier(0,0,.15,1);animation-play-state:paused}.t-dialog-fade-exit{animation-duration:.2s;animation-fill-mode:both;animation-timing-function:cubic-bezier(0,0,.15,1);animation-play-state:paused}.t-dialog-fade-enter.t-dialog-fade-enter-active,.t-dialog-fade-appear.t-dialog-fade-appear-active{animation-name:tDialogFadeIn;animation-play-state:running}.t-dialog-fade-exit.t-dialog-fade-exit-active{animation-name:tDialogFadeOut;animation-play-state:running}@keyframes tDialogFadeIn{0%{opacity:0}to{opacity:1}}@keyframes tDialogFadeOut{0%{opacity:1}to{opacity:0}}.t-dialog{font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none;width:480px;background-color:var(--td-bg-color-container);position:relative;border:1px solid var(--td-border-level-1-color);border-radius:var(--td-radius-large)}.t-dialog .t-icon.t-is-info{color:var(--td-brand-color)}.t-dialog .t-icon.t-is-success{color:var(--td-success-color)}.t-dialog .t-icon.t-is-warning{color:var(--td-warning-color)}.t-dialog .t-icon.t-is-error{color:var(--td-error-color)}.t-dialog--lock{overflow:hidden}.t-dialog__header{color:var(--td-text-color-primary);font:var(--td-font-title-medium);font-weight:600;display:flex;align-items:center;word-break:break-word;gap:var(--td-comp-margin-s);box-sizing:border-box}.t-dialog__header .t-dialog__header-content{display:flex;align-items:flex-start;width:100%}.t-dialog__header .t-icon:not(.t-icon-close){font-size:calc(var(--td-font-size-body-large) + 8px);display:inline-flex;align-items:center;margin-right:var(--td-comp-margin-s);flex-shrink:0}.t-dialog__header--fullscreen{background-color:var(--td-bg-color-secondarycontainer);min-height:var(--td-comp-size-xxxl);justify-content:flex-end;display:flex;align-items:center;flex-direction:row;padding:0 var(--td-comp-paddingLR-xxl)}.t-dialog__header--fullscreen .t-dialog__header-content{box-sizing:border-box;display:flex;justify-content:center;align-items:center}.t-dialog__body{scrollbar-color:var(--td-scrollbar-color) transparent;scrollbar-width:thin;color:var(--td-text-color-secondary);font:var(--td-font-body-medium);overflow:auto;padding:var(--td-comp-paddingTB-l) 0;word-break:break-word}.t-dialog__body::-webkit-scrollbar{width:6px;height:6px}.t-dialog__body::-webkit-scrollbar-thumb{border:0px solid transparent;background-clip:content-box;background-color:var(--td-scrollbar-color);border-radius:11px}.t-dialog__body::-webkit-scrollbar-thumb:vertical:hover,.t-dialog__body::-webkit-scrollbar-thumb:horizontal:hover{background-color:var(--td-scrollbar-hover-color)}.t-dialog__body__icon,.t-dialog__body--icon{padding:var(--td-comp-paddingTB-l) 0}.t-dialog__body--fullscreen{scrollbar-color:var(--td-scrollbar-color) transparent;scrollbar-width:thin;box-sizing:border-box;padding:var(--td-comp-paddingTB-xl) var(--td-comp-paddingLR-xxl);height:calc(100% - var(--td-comp-size-xxxl) - var(--td-comp-size-xxxxl));overflow:auto}.t-dialog__body--fullscreen::-webkit-scrollbar{width:6px;height:6px}.t-dialog__body--fullscreen::-webkit-scrollbar-thumb{border:0px solid transparent;background-clip:content-box;background-color:var(--td-scrollbar-color);border-radius:11px}.t-dialog__body--fullscreen::-webkit-scrollbar-thumb:vertical:hover,.t-dialog__body--fullscreen::-webkit-scrollbar-thumb:horizontal:hover{background-color:var(--td-scrollbar-hover-color)}.t-dialog__body--fullscreen--without-footer{box-sizing:border-box;padding:var(--td-comp-paddingTB-xl) var(--td-comp-paddingLR-xxl);height:calc(100% - var(--td-comp-size-xxxl));overflow:auto}.t-dialog__footer{width:100%;text-align:right;padding:var(--td-comp-paddingTB-l) 0 0}.t-dialog__footer .t-button+.t-button{margin-left:var(--td-comp-margin-s)}.t-dialog__footer--fullscreen{min-height:var(--td-comp-size-xxxxl);padding:0 var(--td-comp-paddingLR-xxl) var(--td-comp-paddingTB-xxl);box-sizing:border-box}.t-dialog--default{padding:var(--td-comp-paddingTB-xxl) var(--td-comp-paddingLR-xxl)}.t-dialog__close{font-size:calc(var(--td-font-size-body-large) + 4px);color:var(--td-text-color-secondary);display:flex;width:calc(var(--td-font-size-body-large) + 4px);height:calc(var(--td-font-size-body-large) + 4px);align-items:center;border-radius:var(--td-radius-default);transition:all .2s linear;padding:var(--td-comp-paddingTB-xxs) var(--td-comp-paddingLR-xxs)}.t-dialog__close:hover{cursor:pointer;background:var(--td-bg-color-container-hover)}.t-dialog__close:active{background:var(--td-bg-color-container-active)}.t-dialog__close--fullscreen{display:flex;background:transparent}.t-dialog__close--fullscreen:hover{cursor:pointer;background:var(--td-bg-color-secondarycontainer-hover)}.t-dialog__close--fullscreen:active{background:var(--td-bg-color-secondarycontainer-active)}.t-dialog.t-dialog--draggable:hover{cursor:move}.t-dialog.t-dialog--draggable .t-dialog__header:hover,.t-dialog.t-dialog--draggable .t-dialog__body:hover,.t-dialog.t-dialog--draggable .t-dialog__footer:hover{cursor:auto}.t-dialog__fullscreen{width:100%;border-radius:0}.t-dialog__ctx{pointer-events:auto;outline:none;top:0;left:0;width:100%;height:100%}.t-dialog__ctx.t-dialog__ctx--modeless{pointer-events:none}.t-dialog__ctx.t-dialog__ctx--fixed{position:fixed;z-index:2500}.t-dialog__ctx.t-dialog__ctx--absolute,.t-dialog__ctx.t-dialog__ctx--absolute .t-dialog__mask,.t-dialog__ctx.t-dialog__ctx--absolute .t-dialog__wrap{position:absolute}.t-dialog__ctx.t-is-visable{visibility:visible}.t-dialog__ctx.t-is-hidden{visibility:hidden}.t-dialog__ctx.t-is-display{display:block}.t-dialog__ctx.t-not-display{display:none}.t-dialog__ctx .t-dialog__mask{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;background:var(--td-mask-active);pointer-events:auto}.t-dialog__ctx .t-dialog__wrap{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:auto;scrollbar-color:var(--td-scrollbar-color) transparent;scrollbar-width:thin}.t-dialog__ctx .t-dialog__wrap::-webkit-scrollbar{width:8px;height:8px}.t-dialog__ctx .t-dialog__wrap::-webkit-scrollbar-thumb{border:2px solid transparent;background-clip:content-box;background-color:var(--td-scrollbar-color);border-radius:15px}.t-dialog__ctx .t-dialog__wrap::-webkit-scrollbar-thumb:vertical:hover,.t-dialog__ctx .t-dialog__wrap::-webkit-scrollbar-thumb:horizontal:hover{background-color:var(--td-scrollbar-hover-color)}.t-dialog__ctx .t-dialog__position{display:flex;justify-content:center;min-height:100%;width:100%;position:relative;padding:48px 0;box-sizing:border-box}.t-dialog__ctx .t-dialog__position.t-dialog--top{align-items:flex-start;padding-top:20vh}.t-dialog__ctx .t-dialog__position.t-dialog--center{align-items:center}.t-dialog__ctx .t-dialog__position_fullscreen{display:flex;justify-content:center;min-height:100%;width:100%;position:relative;box-sizing:border-box}.t-dialog__ctx .t-is-hidden{background:none}.t-dialog__ctx .t-dialog{pointer-events:auto;z-index:2500}.t-progress{font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none}.t-progress__inner{position:relative;height:100%;background:var(--td-brand-color);border-radius:var(--td-radius-round);transition:all .2s cubic-bezier(.38,0,.24,1)}.t-progress__info{margin-left:var(--td-comp-margin-s);color:var(--td-text-color-primary);white-space:nowrap;display:inline-flex}.t-progress__icon{font-size:calc(var(--td-font-size-body-medium) + 2px)}.t-progress__bar{width:100%;height:var(--td-size-3);overflow:hidden;background:var(--td-bg-color-component);border-radius:var(--td-radius-round)}.t-progress--thin{display:flex;justify-content:space-between;align-items:center}.t-progress--plump{height:var(--td-comp-size-xxs);border-radius:calc(var(--td-comp-size-xxs) / 2);display:flex;align-items:center}.t-progress--plump .t-progress__info{font-size:var(--td-font-size-body-small)}.t-progress--over-ten .t-progress__info{position:absolute;top:50%;z-index:10;right:var(--td-comp-margin-s);color:var(--td-text-color-anti);transform:translateY(-50%)}.t-progress--under-ten .t-progress__info,.t-progress--under-ten .t-progress__inner{display:inline-block}.t-progress--under-ten .t-progress__info{vertical-align:top}.t-progress--circle{position:relative}.t-progress--circle .t-progress__info{position:absolute;display:block;top:50%;left:50%;width:100%;margin:0;font-size:inherit;font-weight:600;line-height:1;text-align:center;transform:translate(-50%,-50%)}.t-progress--circle .t-progress__circle-outer{stroke:var(--td-bg-color-component)}.t-progress--circle .t-progress__circle-inner{stroke:var(--td-brand-color);transition:all .2s cubic-bezier(.38,0,.24,1)}.t-progress--circle .t-progress__icon{font-size:2.4em}.t-progress--status--active .t-progress__inner:before{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:"";animation:progress-active-animation 2s cubic-bezier(.23,.99,.86,.2) infinite;background:var(--td-text-color-anti);opacity:.2}.t-progress--status--success .t-progress__inner{background:var(--td-success-color)}.t-progress--status--success .t-progress__circle-inner{stroke:var(--td-success-color)}.t-progress--status--success .t-progress__icon{color:var(--td-success-color)}.t-progress--status--warning .t-progress__inner{background:var(--td-warning-color)}.t-progress--status--warning .t-progress__circle-inner{stroke:var(--td-warning-color)}.t-progress--status--warning .t-progress__icon{color:var(--td-warning-color)}.t-progress--status--error .t-progress__inner{background:var(--td-error-color)}.t-progress--status--error .t-progress__circle-inner{stroke:var(--td-error-color)}.t-progress--status--error .t-progress__icon{color:var(--td-error-color)}@keyframes progress-active-animation{0%{width:0;opacity:.1}35%{width:50%;opacity:.4}to{width:100%;opacity:0}}.t-drawer-fade-enter,.t-drawer-fade-appear{opacity:0;animation-duration:.2s;animation-fill-mode:both;animation-timing-function:linear;animation-play-state:paused}.t-drawer-fade-exit{animation-duration:.2s;animation-fill-mode:both;animation-timing-function:linear;animation-play-state:paused}.t-drawer-fade-enter.t-drawer-fade-enter-active,.t-drawer-fade-enter.t-drawer-fade-enter-active.t-drawer-fade-enter-to,.t-drawer-fade-appear.t-drawer-fade-appear-active,.t-drawer-fade-appear.t-drawer-fade-appear-active.t-drawer-fade-appear-to{animation-name:tDrawerFadeIn;animation-duration:.2s;animation-play-state:running}.t-drawer-fade-exit.t-drawer-fade-exit-active,.t-drawer-fade-leave-active.t-drawer-fade-leave-to{animation-name:tDrawerFadeOut;animation-duration:.2s;animation-play-state:running}@keyframes tDrawerFadeIn{0%{opacity:0}to{opacity:1}}@keyframes tDrawerFadeOut{0%{opacity:1}to{opacity:0}}.t-drawer{font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none;position:fixed;z-index:1500;width:100%;height:100%;pointer-events:none;overflow:hidden;outline:none}.t-drawer--lock{overflow:hidden}.t-drawer--attach{position:absolute}.t-drawer--left,.t-drawer--right{top:0}.t-drawer--left{left:0}.t-drawer--right{right:0}.t-drawer--top,.t-drawer--bottom{left:0}.t-drawer--top{top:0}.t-drawer--bottom{bottom:0}.t-drawer__mask{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--td-mask-active);transition:opacity .2s cubic-bezier(.38,0,.24,1);opacity:0}.t-drawer__content-wrapper{display:flex;flex-direction:column;background:var(--td-bg-color-container);width:16px;height:16px;font-size:var(--td-font-body-medium);color:var(--td-text-color-secondary);box-shadow:var(--td-shadow-2);overflow:hidden;pointer-events:auto;transition:transform .28s cubic-bezier(.38,0,.24,1),visibility .28s cubic-bezier(.38,0,.24,1);position:relative}.t-drawer .t-drawer__content-wrapper{position:absolute;width:100%;height:100%;visibility:hidden}.t-drawer .t-drawer__content-wrapper--left,.t-drawer .t-drawer__content-wrapper--right{top:0}.t-drawer .t-drawer__content-wrapper--left{left:0;transform:translate(-100%)}.t-drawer .t-drawer__content-wrapper--right{right:0;transform:translate(100%)}.t-drawer .t-drawer__content-wrapper--top,.t-drawer .t-drawer__content-wrapper--bottom{left:0}.t-drawer .t-drawer__content-wrapper--top{top:0;transform:translateY(-100%)}.t-drawer .t-drawer__content-wrapper--bottom{bottom:0;transform:translateY(100%)}.t-drawer__header{display:flex;align-items:center;min-height:var(--td-comp-size-xxxl);padding:0 var(--td-comp-paddingLR-l);font:var(--td-font-title-medium);color:var(--td-text-color-primary);border-bottom:1px solid var(--td-border-level-1-color);border-radius:var(--td-radius-small) var(--td-radius-small) 0 0;box-sizing:border-box}.t-drawer__body{padding:var(--td-comp-paddingTB-l) var(--td-comp-paddingLR-l);overflow:auto;flex:1}.t-drawer__footer{width:100%;padding:var(--td-comp-paddingTB-l) var(--td-comp-paddingLR-l);text-align:left;border-top:1px solid var(--td-border-level-1-color);background-color:var(--td-bg-color-container);box-sizing:border-box}.t-drawer__footer .t-button{margin-left:var(--td-comp-margin-s)}.t-drawer__footer .t-button:first-child{margin-left:0}.t-drawer__close-btn{position:absolute;display:flex;justify-content:center;align-items:center;width:var(--td-comp-size-xs);height:var(--td-comp-size-xs);top:calc((var(--td-comp-size-xxxl) - var(--td-comp-size-xs)) / 2);right:var(--td-comp-margin-s);color:var(--td-text-color-primary);background-color:var(--td-bg-color-container);border-radius:var(--td-radius-default);cursor:pointer;transition:background-color .2s}.t-drawer__close-btn:hover{background-color:var(--td-bg-color-container-hover)}.t-drawer__close-btn:active{background-color:var(--td-bg-color-container-active)}.t-drawer__close-btn .t-icon{font-size:calc(var(--td-font-size-body-medium) + 2px);vertical-align:unset}.t-drawer--open{width:100%;height:100%;pointer-events:auto}.t-drawer--open>.t-drawer__content-wrapper{visibility:visible}.t-drawer--open>.t-drawer__mask{opacity:1;width:100%;height:100%}.t-drawer--without-mask{pointer-events:none}[tabindex="-1"]:focus{outline:none!important}.tianyiCloud[data-v-33cc8085]{height:100%;display:flex;flex-direction:column}.tianyiCloud_option[data-v-33cc8085]{display:flex;align-items:center;margin:0 0 20px}.tianyiCloud_option_time[data-v-33cc8085]{margin-left:10px}.tianyiCloud_result[data-v-33cc8085]{flex:1;overflow:auto}.baiduCloud[data-v-5df95f20]{height:100%;display:flex;flex-direction:column}.baiduCloud_option[data-v-5df95f20]{display:flex;align-items:center;margin:0 0 20px}.baiduCloud_option_time[data-v-5df95f20]{margin-left:10px}.baiduCloud_result[data-v-5df95f20]{flex:1;overflow:auto}.cloud115[data-v-bbac4313]{height:100%;display:flex;flex-direction:column}.cloud115_option[data-v-bbac4313]{display:flex;align-items:center;margin:0 0 20px}.cloud115_option_time[data-v-bbac4313]{margin-left:10px}.cloud115_result[data-v-bbac4313]{flex:1;overflow:auto} ');

(function (vue) {
  'use strict';

  var ExpireTimeEnum$2 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 1] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 7] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = 2099] = "forever";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$2 || {});
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof(o);
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key2 = _toPrimitive(arg, "string");
    return _typeof(key2) === "symbol" ? key2 : String(key2);
  }
  function _defineProperty$2(obj, key2, value) {
    key2 = _toPropertyKey(key2);
    if (key2 in obj) {
      Object.defineProperty(obj, key2, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e, n, i, u, a = [], f = true, o = false;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t)
            return;
          f = false;
        } else
          for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
            ;
      } catch (r2) {
        o = true, n = r2;
      } finally {
        try {
          if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
            return;
        } finally {
          if (o)
            throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function setStyle$1(el, styles) {
    var keys2 = Object.keys(styles);
    keys2.forEach(function(key2) {
      el.style[key2] = styles[key2];
    });
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key2, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key2 = sourceKeys[i];
      if (excluded.indexOf(key2) >= 0)
        continue;
      target[key2] = source[key2];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key2, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key2 = sourceSymbolKeys[i];
        if (excluded.indexOf(key2) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key2))
          continue;
        target[key2] = source[key2];
      }
    }
    return target;
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var freeGlobal$1 = _typeof(commonjsGlobal) == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal$1;
  var freeGlobal = _freeGlobal;
  var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self;
  var root$1$3 = freeGlobal || freeSelf || Function("return this")();
  var _root = root$1$3;
  var root$7 = _root;
  var _Symbol2 = root$7.Symbol;
  var _Symbol$2$1 = _Symbol2;
  var _Symbol$1$1 = _Symbol$2$1;
  var objectProto$1$4 = Object.prototype;
  var hasOwnProperty$a = objectProto$1$4.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$1$4.toString;
  var symToStringTag$1 = _Symbol$1$1 ? _Symbol$1$1.toStringTag : void 0;
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$a.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var _getRawTag = getRawTag$1;
  var objectProto$a = Object.prototype;
  var nativeObjectToString = objectProto$a.toString;
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }
  var _objectToString = objectToString$1;
  var _Symbol$3 = _Symbol$2$1, getRawTag = _getRawTag, objectToString = _objectToString;
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = _Symbol$3 ? _Symbol$3.toStringTag : void 0;
  function baseGetTag$9(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  var _baseGetTag = baseGetTag$9;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var isArray$9 = Array.isArray;
  var isArray_1 = isArray$9;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function isObjectLike$9(value) {
    return value != null && _typeof(value) == "object";
  }
  var isObjectLike_1 = isObjectLike$9;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var baseGetTag$8 = _baseGetTag, isArray$8 = isArray_1, isObjectLike$8 = isObjectLike_1;
  var stringTag$3 = "[object String]";
  function isString$1(value) {
    return typeof value == "string" || !isArray$8(value) && isObjectLike$8(value) && baseGetTag$8(value) == stringTag$3;
  }
  var isString_1 = isString$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function isUndefined$1(value) {
    return value === void 0;
  }
  var isUndefined_1 = isUndefined$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var baseGetTag$7 = _baseGetTag, isObjectLike$7 = isObjectLike_1;
  var numberTag$3 = "[object Number]";
  function isNumber$1(value) {
    return typeof value == "number" || isObjectLike$7(value) && baseGetTag$7(value) == numberTag$3;
  }
  var isNumber_1 = isNumber$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function getIEVersion() {
    if (typeof navigator === "undefined" || !navigator)
      return Number.MAX_SAFE_INTEGER;
    var _navigator = navigator, userAgent = _navigator.userAgent;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
    var isIE11 = userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      var match = userAgent.match(reIE);
      if (!match)
        return -1;
      var fIEVersion = parseFloat(match[1]);
      return fIEVersion < 7 ? 6 : fIEVersion;
    }
    if (isIE11) {
      return 11;
    }
    return Number.MAX_SAFE_INTEGER;
  }
  function getCharacterLength$1(str, maxCharacter) {
    var hasMaxCharacter = isNumber_1(maxCharacter);
    if (!str || str.length === 0) {
      if (hasMaxCharacter) {
        return {
          length: 0,
          characters: str
        };
      }
      return 0;
    }
    var len = 0;
    for (var i = 0; i < str.length; i++) {
      var currentStringLength = 0;
      if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
        currentStringLength = 2;
      } else {
        currentStringLength = 1;
      }
      if (hasMaxCharacter && len + currentStringLength > maxCharacter) {
        return {
          length: len,
          characters: str.slice(0, i)
        };
      }
      len += currentStringLength;
    }
    if (hasMaxCharacter) {
      return {
        length: len,
        characters: str
      };
    }
    return len;
  }
  function getUnicodeLength(str) {
    return _toConsumableArray(str !== null && str !== void 0 ? str : "").length;
  }
  function limitUnicodeMaxLength(str, maxLength, oldStr) {
    if (_toConsumableArray(oldStr !== null && oldStr !== void 0 ? oldStr : "").slice().length === maxLength)
      return oldStr || "";
    return _toConsumableArray(str !== null && str !== void 0 ? str : "").slice(0, maxLength).join("");
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function ownKeys$w(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$w(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$w(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$w(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function circleAdapter(circleElem) {
    var _window, _window$getComputedSt2, _window2;
    var basicStyle = {};
    if (!circleElem || typeof window === "undefined") {
      return;
    }
    var _window$getComputedSt = (_window = window) === null || _window === void 0 || (_window$getComputedSt2 = _window.getComputedStyle) === null || _window$getComputedSt2 === void 0 ? void 0 : _window$getComputedSt2.call(_window, circleElem), color = _window$getComputedSt.color, fontSize = _window$getComputedSt.fontSize;
    var ua = (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.navigator) === null || _window2 === void 0 ? void 0 : _window2.userAgent;
    var isSafari = /Safari/.test(ua) && !/Chrome/.test(ua);
    var isIosWechat = /(?=.*iPhone)[?=.*MicroMessenger]/.test(ua) && !/Chrome/.test(ua);
    if (isSafari || isIosWechat) {
      basicStyle = {
        transformOrigin: "0px 0px",
        transform: "scale(".concat(parseInt(fontSize, 10) / 12, ")")
      };
    }
    if (color && getIEVersion() > 11) {
      var matched = color.match(/[\d.]+/g);
      var endColor = matched ? "rgba(".concat(matched[0], ", ").concat(matched[1], ", ").concat(matched[2], ", 0)") : "";
      setStyle$1(circleElem, _objectSpread$w(_objectSpread$w({}, basicStyle), {}, {
        background: "conic-gradient(from 90deg at 50% 50%,".concat(endColor, " 0deg, ").concat(color, " 360deg)")
      }));
    } else {
      setStyle$1(circleElem, _objectSpread$w(_objectSpread$w({}, basicStyle), {}, {
        background: ""
      }));
    }
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function isObject$a(value) {
    var type = _typeof(value);
    return value != null && (type == "object" || type == "function");
  }
  var isObject_1 = isObject$a;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var baseGetTag$6 = _baseGetTag, isObject$9 = isObject_1;
  var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
  function isFunction$4(value) {
    if (!isObject$9(value)) {
      return false;
    }
    var tag = baseGetTag$6(value);
    return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_1 = isFunction$4;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var root$1$2 = _root;
  var coreJsData$1 = root$1$2["__core-js_shared__"];
  var _coreJsData = coreJsData$1;
  var coreJsData = _coreJsData;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked$1(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var _isMasked = isMasked$1;
  var funcProto$1 = Function.prototype;
  var funcToString$1 = funcProto$1.toString;
  function toSource$1(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  var _toSource = toSource$1;
  var isFunction$3 = isFunction_1, isMasked = _isMasked, isObject$8 = isObject_1, toSource$2 = _toSource;
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto$2 = Function.prototype, objectProto$9 = Object.prototype;
  var funcToString$2 = funcProto$2.toString;
  var hasOwnProperty$9 = objectProto$9.hasOwnProperty;
  var reIsNative = RegExp("^" + funcToString$2.call(hasOwnProperty$9).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function baseIsNative$1(value) {
    if (!isObject$8(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction$3(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource$2(value));
  }
  var _baseIsNative = baseIsNative$1;
  function getValue$1(object, key2) {
    return object == null ? void 0 : object[key2];
  }
  var _getValue = getValue$1;
  var baseIsNative = _baseIsNative, getValue = _getValue;
  function getNative$1$1(object, key2) {
    var value = getValue(object, key2);
    return baseIsNative(value) ? value : void 0;
  }
  var _getNative = getNative$1$1;
  var getNative$6 = _getNative, root$6 = _root;
  var Map$4 = getNative$6(root$6, "Map");
  var _Map = Map$4;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function eq$4(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_1 = eq$4;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function listCacheClear$1() {
    this.__data__ = [];
    this.size = 0;
  }
  var _listCacheClear = listCacheClear$1;
  var eq$3 = eq_1;
  function assocIndexOf$4(array, key2) {
    var length = array.length;
    while (length--) {
      if (eq$3(array[length][0], key2)) {
        return length;
      }
    }
    return -1;
  }
  var _assocIndexOf = assocIndexOf$4;
  var assocIndexOf$3 = _assocIndexOf;
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete$1(key2) {
    var data = this.__data__, index2 = assocIndexOf$3(data, key2);
    if (index2 < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index2 == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index2, 1);
    }
    --this.size;
    return true;
  }
  var _listCacheDelete = listCacheDelete$1;
  var assocIndexOf$2 = _assocIndexOf;
  function listCacheGet$1(key2) {
    var data = this.__data__, index2 = assocIndexOf$2(data, key2);
    return index2 < 0 ? void 0 : data[index2][1];
  }
  var _listCacheGet = listCacheGet$1;
  var assocIndexOf$1 = _assocIndexOf;
  function listCacheHas$1(key2) {
    return assocIndexOf$1(this.__data__, key2) > -1;
  }
  var _listCacheHas = listCacheHas$1;
  var assocIndexOf = _assocIndexOf;
  function listCacheSet$1(key2, value) {
    var data = this.__data__, index2 = assocIndexOf(data, key2);
    if (index2 < 0) {
      ++this.size;
      data.push([key2, value]);
    } else {
      data[index2][1] = value;
    }
    return this;
  }
  var _listCacheSet = listCacheSet$1;
  var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
  function ListCache$1$1(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache$1$1.prototype.clear = listCacheClear;
  ListCache$1$1.prototype["delete"] = listCacheDelete;
  ListCache$1$1.prototype.get = listCacheGet;
  ListCache$1$1.prototype.has = listCacheHas;
  ListCache$1$1.prototype.set = listCacheSet;
  var _ListCache = ListCache$1$1;
  var getNative$5 = _getNative;
  var nativeCreate$4 = getNative$5(Object, "create");
  var _nativeCreate = nativeCreate$4;
  var nativeCreate$3 = _nativeCreate;
  function hashClear$1() {
    this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
    this.size = 0;
  }
  var _hashClear = hashClear$1;
  function hashDelete$1(key2) {
    var result = this.has(key2) && delete this.__data__[key2];
    this.size -= result ? 1 : 0;
    return result;
  }
  var _hashDelete = hashDelete$1;
  var nativeCreate$2 = _nativeCreate;
  var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
  var objectProto$1$3 = Object.prototype;
  var hasOwnProperty$1$2 = objectProto$1$3.hasOwnProperty;
  function hashGet$1(key2) {
    var data = this.__data__;
    if (nativeCreate$2) {
      var result = data[key2];
      return result === HASH_UNDEFINED$1 ? void 0 : result;
    }
    return hasOwnProperty$1$2.call(data, key2) ? data[key2] : void 0;
  }
  var _hashGet = hashGet$1;
  var nativeCreate$1 = _nativeCreate;
  var objectProto$8 = Object.prototype;
  var hasOwnProperty$8 = objectProto$8.hasOwnProperty;
  function hashHas$1(key2) {
    var data = this.__data__;
    return nativeCreate$1 ? data[key2] !== void 0 : hasOwnProperty$8.call(data, key2);
  }
  var _hashHas = hashHas$1;
  var nativeCreate = _nativeCreate;
  var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
  function hashSet$1(key2, value) {
    var data = this.__data__;
    this.size += this.has(key2) ? 0 : 1;
    data[key2] = nativeCreate && value === void 0 ? HASH_UNDEFINED$2 : value;
    return this;
  }
  var _hashSet = hashSet$1;
  var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
  function Hash$1(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  Hash$1.prototype.clear = hashClear;
  Hash$1.prototype["delete"] = hashDelete;
  Hash$1.prototype.get = hashGet;
  Hash$1.prototype.has = hashHas;
  Hash$1.prototype.set = hashSet;
  var _Hash = Hash$1;
  var Hash = _Hash, ListCache$3 = _ListCache, Map$3 = _Map;
  function mapCacheClear$1() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map$3 || ListCache$3)(),
      "string": new Hash()
    };
  }
  var _mapCacheClear = mapCacheClear$1;
  function isKeyable$1(value) {
    var type = _typeof(value);
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  var _isKeyable = isKeyable$1;
  var isKeyable = _isKeyable;
  function getMapData$4(map, key2) {
    var data = map.__data__;
    return isKeyable(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
  }
  var _getMapData = getMapData$4;
  var getMapData$3 = _getMapData;
  function mapCacheDelete$1(key2) {
    var result = getMapData$3(this, key2)["delete"](key2);
    this.size -= result ? 1 : 0;
    return result;
  }
  var _mapCacheDelete = mapCacheDelete$1;
  var getMapData$2 = _getMapData;
  function mapCacheGet$1(key2) {
    return getMapData$2(this, key2).get(key2);
  }
  var _mapCacheGet = mapCacheGet$1;
  var getMapData$1 = _getMapData;
  function mapCacheHas$1(key2) {
    return getMapData$1(this, key2).has(key2);
  }
  var _mapCacheHas = mapCacheHas$1;
  var getMapData = _getMapData;
  function mapCacheSet$1(key2, value) {
    var data = getMapData(this, key2), size = data.size;
    data.set(key2, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  var _mapCacheSet = mapCacheSet$1;
  var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
  function MapCache$3(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache$3.prototype.clear = mapCacheClear;
  MapCache$3.prototype["delete"] = mapCacheDelete;
  MapCache$3.prototype.get = mapCacheGet;
  MapCache$3.prototype.has = mapCacheHas;
  MapCache$3.prototype.set = mapCacheSet;
  var _MapCache = MapCache$3;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var getNative$4 = _getNative;
  var defineProperty$2 = function() {
    try {
      var func = getNative$4(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  }();
  var _defineProperty$1 = defineProperty$2;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var defineProperty$1 = _defineProperty$1;
  function baseAssignValue$1$1(object, key2, value) {
    if (key2 == "__proto__" && defineProperty$1) {
      defineProperty$1(object, key2, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object[key2] = value;
    }
  }
  var _baseAssignValue = baseAssignValue$1$1;
  var baseAssignValue$2 = _baseAssignValue, eq$2 = eq_1;
  var objectProto$7 = Object.prototype;
  var hasOwnProperty$7 = objectProto$7.hasOwnProperty;
  function assignValue$2(object, key2, value) {
    var objValue = object[key2];
    if (!(hasOwnProperty$7.call(object, key2) && eq$2(objValue, value)) || value === void 0 && !(key2 in object)) {
      baseAssignValue$2(object, key2, value);
    }
  }
  var _assignValue = assignValue$2;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var baseGetTag$5 = _baseGetTag, isObjectLike$1$2 = isObjectLike_1;
  var argsTag$2 = "[object Arguments]";
  function baseIsArguments$1(value) {
    return isObjectLike$1$2(value) && baseGetTag$5(value) == argsTag$2;
  }
  var _baseIsArguments = baseIsArguments$1;
  var baseIsArguments = _baseIsArguments, isObjectLike$6 = isObjectLike_1;
  var objectProto$6 = Object.prototype;
  var hasOwnProperty$6 = objectProto$6.hasOwnProperty;
  var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
  var isArguments$4 = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike$6(value) && hasOwnProperty$6.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
  };
  var isArguments_1 = isArguments$4;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  function isLength$2(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
  }
  var isLength_1 = isLength$2;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function baseUnary$4(func) {
    return function(value) {
      return func(value);
    };
  }
  var _baseUnary = baseUnary$4;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var isBuffer$5 = { exports: {} };
  function stubFalse() {
    return false;
  }
  var stubFalse_1 = stubFalse;
  (function(module, exports) {
    var root2 = _root, stubFalse2 = stubFalse_1;
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root2.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer2 = nativeIsBuffer || stubFalse2;
    module.exports = isBuffer2;
  })(isBuffer$5, isBuffer$5.exports);
  isBuffer$5.exports;
  var baseGetTag$4 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$5 = isObjectLike_1;
  var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$2 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
  var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
  function baseIsTypedArray$1(value) {
    return isObjectLike$5(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$4(value)];
  }
  var _baseIsTypedArray = baseIsTypedArray$1;
  var _nodeUtil$1 = { exports: {} };
  (function(module, exports) {
    var freeGlobal2 = _freeGlobal;
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal2.process;
    var nodeUtil2 = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil2;
  })(_nodeUtil$1, _nodeUtil$1.exports);
  _nodeUtil$1.exports;
  var baseIsTypedArray = _baseIsTypedArray, baseUnary$3 = _baseUnary, nodeUtil$2 = _nodeUtil$1.exports;
  var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
  var isTypedArray$4 = nodeIsTypedArray ? baseUnary$3(nodeIsTypedArray) : baseIsTypedArray;
  var isTypedArray_1 = isTypedArray$4;
  var objectProto$5 = Object.prototype;
  function isPrototype$3(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$5;
    return value === proto;
  }
  var _isPrototype = isPrototype$3;
  function overArg$2(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var _overArg = overArg$2;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex$2(value, length) {
    var type = _typeof(value);
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }
  var _isIndex = isIndex$2;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var isFunction$2 = isFunction_1, isLength = isLength_1;
  function isArrayLike$5(value) {
    return value != null && isLength(value.length) && !isFunction$2(value);
  }
  var isArrayLike_1 = isArrayLike$5;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var ListCache$2 = _ListCache;
  function stackClear$1() {
    this.__data__ = new ListCache$2();
    this.size = 0;
  }
  var _stackClear = stackClear$1;
  function stackDelete$1(key2) {
    var data = this.__data__, result = data["delete"](key2);
    this.size = data.size;
    return result;
  }
  var _stackDelete = stackDelete$1;
  function stackGet$1(key2) {
    return this.__data__.get(key2);
  }
  var _stackGet = stackGet$1;
  function stackHas$1(key2) {
    return this.__data__.has(key2);
  }
  var _stackHas = stackHas$1;
  var ListCache$1 = _ListCache, Map$2 = _Map, MapCache$2 = _MapCache;
  var LARGE_ARRAY_SIZE = 200;
  function stackSet$1(key2, value) {
    var data = this.__data__;
    if (data instanceof ListCache$1) {
      var pairs = data.__data__;
      if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key2, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache$2(pairs);
    }
    data.set(key2, value);
    this.size = data.size;
    return this;
  }
  var _stackSet = stackSet$1;
  var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
  function Stack$2(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  Stack$2.prototype.clear = stackClear;
  Stack$2.prototype["delete"] = stackDelete;
  Stack$2.prototype.get = stackGet;
  Stack$2.prototype.has = stackHas;
  Stack$2.prototype.set = stackSet;
  var _Stack = Stack$2;
  var assignValue$1 = _assignValue, baseAssignValue$1 = _baseAssignValue;
  function copyObject$5(source, props2, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index2 = -1, length = props2.length;
    while (++index2 < length) {
      var key2 = props2[index2];
      var newValue = customizer ? customizer(object[key2], source[key2], key2, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key2];
      }
      if (isNew) {
        baseAssignValue$1(object, key2, newValue);
      } else {
        assignValue$1(object, key2, newValue);
      }
    }
    return object;
  }
  var _copyObject = copyObject$5;
  function baseTimes$1(n, iteratee) {
    var index2 = -1, result = Array(n);
    while (++index2 < n) {
      result[index2] = iteratee(index2);
    }
    return result;
  }
  var _baseTimes = baseTimes$1;
  var baseTimes = _baseTimes, isArguments$3 = isArguments_1, isArray$7 = isArray_1, isBuffer$4 = isBuffer$5.exports, isIndex$1 = _isIndex, isTypedArray$3 = isTypedArray_1;
  var objectProto$1$2 = Object.prototype;
  var hasOwnProperty$1$1 = objectProto$1$2.hasOwnProperty;
  function arrayLikeKeys$1(value, inherited) {
    var isArr = isArray$7(value), isArg = !isArr && isArguments$3(value), isBuff = !isArr && !isArg && isBuffer$4(value), isType = !isArr && !isArg && !isBuff && isTypedArray$3(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key2 in value) {
      if ((inherited || hasOwnProperty$1$1.call(value, key2)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key2 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key2 == "offset" || key2 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key2 == "buffer" || key2 == "byteLength" || key2 == "byteOffset") || // Skip index properties.
      isIndex$1(key2, length)))) {
        result.push(key2);
      }
    }
    return result;
  }
  var _arrayLikeKeys = arrayLikeKeys$1;
  function nativeKeysIn$1(object) {
    var result = [];
    if (object != null) {
      for (var key2 in Object(object)) {
        result.push(key2);
      }
    }
    return result;
  }
  var _nativeKeysIn = nativeKeysIn$1;
  var isObject$1$2 = isObject_1, isPrototype$1$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
  var objectProto$4 = Object.prototype;
  var hasOwnProperty$5 = objectProto$4.hasOwnProperty;
  function baseKeysIn$1(object) {
    if (!isObject$1$2(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype$1$1(object), result = [];
    for (var key2 in object) {
      if (!(key2 == "constructor" && (isProto || !hasOwnProperty$5.call(object, key2)))) {
        result.push(key2);
      }
    }
    return result;
  }
  var _baseKeysIn = baseKeysIn$1;
  var arrayLikeKeys$2 = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$4 = isArrayLike_1;
  function keysIn$4(object) {
    return isArrayLike$4(object) ? arrayLikeKeys$2(object, true) : baseKeysIn(object);
  }
  var keysIn_1 = keysIn$4;
  var _cloneBuffer$1 = { exports: {} };
  (function(module, exports) {
    var root2 = _root;
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer2(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module.exports = cloneBuffer2;
  })(_cloneBuffer$1, _cloneBuffer$1.exports);
  _cloneBuffer$1.exports;
  function copyArray$2(source, array) {
    var index2 = -1, length = source.length;
    array || (array = Array(length));
    while (++index2 < length) {
      array[index2] = source[index2];
    }
    return array;
  }
  var _copyArray = copyArray$2;
  var overArg$1 = _overArg;
  var getPrototype$1$1 = overArg$1(Object.getPrototypeOf, Object);
  var _getPrototype = getPrototype$1$1;
  var root$5 = _root;
  var Uint8Array$1 = root$5.Uint8Array;
  var _Uint8Array = Uint8Array$1;
  var Uint8Array$2 = _Uint8Array;
  function cloneArrayBuffer$1$1(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array$2(result).set(new Uint8Array$2(arrayBuffer));
    return result;
  }
  var _cloneArrayBuffer = cloneArrayBuffer$1$1;
  var cloneArrayBuffer$2 = _cloneArrayBuffer;
  function cloneTypedArray$2(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$2(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  var _cloneTypedArray = cloneTypedArray$2;
  var isObject$7 = isObject_1;
  var objectCreate = Object.create;
  var baseCreate$1 = function() {
    function object() {
    }
    return function(proto) {
      if (!isObject$7(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  }();
  var _baseCreate = baseCreate$1;
  var baseCreate = _baseCreate, getPrototype$2 = _getPrototype, isPrototype$2 = _isPrototype;
  function initCloneObject$2(object) {
    return typeof object.constructor == "function" && !isPrototype$2(object) ? baseCreate(getPrototype$2(object)) : {};
  }
  var _initCloneObject = initCloneObject$2;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var getNative$3 = _getNative, root$4 = _root;
  var Set$2 = getNative$3(root$4, "Set");
  var _Set = Set$2;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var overArg = _overArg;
  var nativeKeys$1 = overArg(Object.keys, Object);
  var _nativeKeys = nativeKeys$1;
  var isPrototype$1 = _isPrototype, nativeKeys = _nativeKeys;
  var objectProto$3 = Object.prototype;
  var hasOwnProperty$4 = objectProto$3.hasOwnProperty;
  function baseKeys$2(object) {
    if (!isPrototype$1(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key2 in Object(object)) {
      if (hasOwnProperty$4.call(object, key2) && key2 != "constructor") {
        result.push(key2);
      }
    }
    return result;
  }
  var _baseKeys = baseKeys$2;
  var getNative$2 = _getNative, root$2 = _root;
  var DataView$1 = getNative$2(root$2, "DataView");
  var _DataView = DataView$1;
  var getNative$1 = _getNative, root$1$1 = _root;
  var Promise$2 = getNative$1(root$1$1, "Promise");
  var _Promise = Promise$2;
  var getNative = _getNative, root$3 = _root;
  var WeakMap$1 = getNative(root$3, "WeakMap");
  var _WeakMap = WeakMap$1;
  var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap$2 = _WeakMap, baseGetTag$3 = _baseGetTag, toSource = _toSource;
  var mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
  var dataViewTag$2 = "[object DataView]";
  var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$2);
  var getTag$4 = baseGetTag$3;
  if (DataView && getTag$4(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map$1 && getTag$4(new Map$1()) != mapTag$4 || Promise$1 && getTag$4(Promise$1.resolve()) != promiseTag || Set$1 && getTag$4(new Set$1()) != setTag$4 || WeakMap$2 && getTag$4(new WeakMap$2()) != weakMapTag$1) {
    getTag$4 = function getTag2(value) {
      var result = baseGetTag$3(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag$2;
          case mapCtorString:
            return mapTag$4;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag$4;
          case weakMapCtorString:
            return weakMapTag$1;
        }
      }
      return result;
    };
  }
  var _getTag = getTag$4;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function arrayFilter$1(array, predicate) {
    var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index2 < length) {
      var value = array[index2];
      if (predicate(value, index2, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  var _arrayFilter = arrayFilter$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function arrayPush$3(array, values) {
    var index2 = -1, length = values.length, offset2 = array.length;
    while (++index2 < length) {
      array[offset2 + index2] = values[index2];
    }
    return array;
  }
  var _arrayPush = arrayPush$3;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function arrayEach$1(array, iteratee) {
    var index2 = -1, length = array == null ? 0 : array.length;
    while (++index2 < length) {
      if (iteratee(array[index2], index2, array) === false) {
        break;
      }
    }
    return array;
  }
  var _arrayEach = arrayEach$1;
  var arrayLikeKeys = _arrayLikeKeys, baseKeys$1 = _baseKeys, isArrayLike$3 = isArrayLike_1;
  function keys$3(object) {
    return isArrayLike$3(object) ? arrayLikeKeys(object) : baseKeys$1(object);
  }
  var keys_1 = keys$3;
  var copyObject$3 = _copyObject, keys$2 = keys_1;
  function baseAssign$1(object, source) {
    return object && copyObject$3(source, keys$2(source), object);
  }
  var _baseAssign = baseAssign$1;
  var copyObject$2 = _copyObject, keysIn$2 = keysIn_1;
  function baseAssignIn$1(object, source) {
    return object && copyObject$2(source, keysIn$2(source), object);
  }
  var _baseAssignIn = baseAssignIn$1;
  function stubArray$2() {
    return [];
  }
  var stubArray_1 = stubArray$2;
  var arrayFilter = _arrayFilter, stubArray$1 = stubArray_1;
  var objectProto$1$1 = Object.prototype;
  var propertyIsEnumerable = objectProto$1$1.propertyIsEnumerable;
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
  var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  var _getSymbols = getSymbols$3;
  var copyObject$1$1 = _copyObject, getSymbols$2 = _getSymbols;
  function copySymbols$1(source, object) {
    return copyObject$1$1(source, getSymbols$2(source), object);
  }
  var _copySymbols = copySymbols$1;
  var arrayPush$1 = _arrayPush, getPrototype$1 = _getPrototype, getSymbols$1 = _getSymbols, stubArray = stubArray_1;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while (object) {
      arrayPush$1(result, getSymbols$1(object));
      object = getPrototype$1(object);
    }
    return result;
  };
  var _getSymbolsIn = getSymbolsIn$2;
  var copyObject$4 = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
  function copySymbolsIn$1(source, object) {
    return copyObject$4(source, getSymbolsIn$1(source), object);
  }
  var _copySymbolsIn = copySymbolsIn$1;
  var arrayPush$2 = _arrayPush, isArray$1$2 = isArray_1;
  function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$1$2(object) ? result : arrayPush$2(result, symbolsFunc(object));
  }
  var _baseGetAllKeys = baseGetAllKeys$2;
  var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols = _getSymbols, keys$1 = keys_1;
  function getAllKeys$1(object) {
    return baseGetAllKeys$1(object, keys$1, getSymbols);
  }
  var _getAllKeys = getAllKeys$1;
  var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$1$1 = keysIn_1;
  function getAllKeysIn$1(object) {
    return baseGetAllKeys(object, keysIn$1$1, getSymbolsIn);
  }
  var _getAllKeysIn = getAllKeysIn$1;
  var objectProto$2 = Object.prototype;
  var hasOwnProperty$3 = objectProto$2.hasOwnProperty;
  function initCloneArray$1(array) {
    var length = array.length, result = new array.constructor(length);
    if (length && typeof array[0] == "string" && hasOwnProperty$3.call(array, "index")) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  var _initCloneArray = initCloneArray$1;
  var cloneArrayBuffer$1 = _cloneArrayBuffer;
  function cloneDataView$1(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$1(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  var _cloneDataView = cloneDataView$1;
  var reFlags = /\w*$/;
  function cloneRegExp$1(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  var _cloneRegExp = cloneRegExp$1;
  var _Symbol$2 = _Symbol$2$1;
  var symbolProto$1 = _Symbol$2 ? _Symbol$2.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
  function cloneSymbol$1(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  var _cloneSymbol = cloneSymbol$1;
  var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray$1 = _cloneTypedArray;
  var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
  var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
  function initCloneByTag$1(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$1:
        return cloneArrayBuffer(object);
      case boolTag$1:
      case dateTag$1:
        return new Ctor(+object);
      case dataViewTag$1:
        return cloneDataView(object, isDeep);
      case float32Tag$1:
      case float64Tag$1:
      case int8Tag$1:
      case int16Tag$1:
      case int32Tag$1:
      case uint8Tag$1:
      case uint8ClampedTag$1:
      case uint16Tag$1:
      case uint32Tag$1:
        return cloneTypedArray$1(object, isDeep);
      case mapTag$2:
        return new Ctor();
      case numberTag$1:
      case stringTag$1:
        return new Ctor(object);
      case regexpTag$1:
        return cloneRegExp(object);
      case setTag$2:
        return new Ctor();
      case symbolTag$1:
        return cloneSymbol(object);
    }
  }
  var _initCloneByTag = initCloneByTag$1;
  var getTag$2 = _getTag, isObjectLike$1$1 = isObjectLike_1;
  var mapTag$1 = "[object Map]";
  function baseIsMap$1(value) {
    return isObjectLike$1$1(value) && getTag$2(value) == mapTag$1;
  }
  var _baseIsMap = baseIsMap$1;
  var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtil$1.exports;
  var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
  var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
  var isMap_1 = isMap$1;
  var getTag$1 = _getTag, isObjectLike$4 = isObjectLike_1;
  var setTag$1 = "[object Set]";
  function baseIsSet$1(value) {
    return isObjectLike$4(value) && getTag$1(value) == setTag$1;
  }
  var _baseIsSet = baseIsSet$1;
  var baseIsSet = _baseIsSet, baseUnary$2 = _baseUnary, nodeUtil = _nodeUtil$1.exports;
  var nodeIsSet = nodeUtil && nodeUtil.isSet;
  var isSet$1 = nodeIsSet ? baseUnary$2(nodeIsSet) : baseIsSet;
  var isSet_1 = isSet$1;
  var Stack$1 = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer$1 = _cloneBuffer$1.exports, copyArray$1 = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn$2 = _getAllKeysIn, getTag$3 = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject$1 = _initCloneObject, isArray$6 = isArray_1, isBuffer$3 = isBuffer$5.exports, isMap = isMap_1, isObject$6 = isObject_1, isSet = isSet_1, keys = keys_1, keysIn$3 = keysIn_1;
  var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$1 = 4;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag$2 = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$3 = "[object Map]", numberTag = "[object Number]", objectTag$1 = "[object Object]", regexpTag = "[object RegExp]", setTag$3 = "[object Set]", stringTag = "[object String]", symbolTag$2 = "[object Symbol]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag$2] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$3] = cloneableTags[numberTag] = cloneableTags[objectTag$1] = cloneableTags[regexpTag] = cloneableTags[setTag$3] = cloneableTags[stringTag] = cloneableTags[symbolTag$2] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  function baseClone$1(value, bitmask, customizer, key2, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
    if (customizer) {
      result = object ? customizer(value, key2, object, stack) : customizer(value);
    }
    if (result !== void 0) {
      return result;
    }
    if (!isObject$6(value)) {
      return value;
    }
    var isArr = isArray$6(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray$1(value, result);
      }
    } else {
      var tag = getTag$3(value), isFunc = tag == funcTag || tag == genTag;
      if (isBuffer$3(value)) {
        return cloneBuffer$1(value, isDeep);
      }
      if (tag == objectTag$1 || tag == argsTag || isFunc && !object) {
        result = isFlat || isFunc ? {} : initCloneObject$1(value);
        if (!isDeep) {
          return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    stack || (stack = new Stack$1());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (isSet(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function(subValue, key3) {
        result.set(key3, baseClone$1(subValue, bitmask, customizer, key3, value, stack));
      });
    }
    var keysFunc = isFull ? isFlat ? getAllKeysIn$2 : getAllKeys : isFlat ? keysIn$3 : keys;
    var props2 = isArr ? void 0 : keysFunc(value);
    arrayEach(props2 || value, function(subValue, key3) {
      if (props2) {
        key3 = subValue;
        subValue = value[key3];
      }
      assignValue(result, key3, baseClone$1(subValue, bitmask, customizer, key3, value, stack));
    });
    return result;
  }
  var _baseClone = baseClone$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function identity$1(value) {
    return value;
  }
  var identity_1 = identity$1;
  function apply$1(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  var _apply = apply$1;
  var apply = _apply;
  var nativeMax$1 = Math.max;
  function overRest$2(func, start2, transform) {
    start2 = nativeMax$1(start2 === void 0 ? func.length - 1 : start2, 0);
    return function() {
      var args = arguments, index2 = -1, length = nativeMax$1(args.length - start2, 0), array = Array(length);
      while (++index2 < length) {
        array[index2] = args[start2 + index2];
      }
      index2 = -1;
      var otherArgs = Array(start2 + 1);
      while (++index2 < start2) {
        otherArgs[index2] = args[index2];
      }
      otherArgs[start2] = transform(array);
      return apply(func, this, otherArgs);
    };
  }
  var _overRest = overRest$2;
  function constant$1(value) {
    return function() {
      return value;
    };
  }
  var constant_1 = constant$1;
  var constant = constant_1, defineProperty = _defineProperty$1, identity$2 = identity_1;
  var baseSetToString$1 = !defineProperty ? identity$2 : function(func, string) {
    return defineProperty(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant(string),
      "writable": true
    });
  };
  var _baseSetToString = baseSetToString$1;
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut$1(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  var _shortOut = shortOut$1;
  var baseSetToString = _baseSetToString, shortOut = _shortOut;
  var setToString$2 = shortOut(baseSetToString);
  var _setToString = setToString$2;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var isArrayLike$2 = isArrayLike_1, isObjectLike$3 = isObjectLike_1;
  function isArrayLikeObject$2(value) {
    return isObjectLike$3(value) && isArrayLike$2(value);
  }
  var isArrayLikeObject_1 = isArrayLikeObject$2;
  var identity = identity_1, overRest$1 = _overRest, setToString$1 = _setToString;
  function baseRest$2(func, start2) {
    return setToString$1(overRest$1(func, start2, identity), func + "");
  }
  var _baseRest = baseRest$2;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var baseGetTag$2 = _baseGetTag, getPrototype = _getPrototype, isObjectLike$2 = isObjectLike_1;
  var objectTag = "[object Object]";
  var funcProto = Function.prototype, objectProto$1 = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$2 = objectProto$1.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  function isPlainObject$3(value) {
    if (!isObjectLike$2(value) || baseGetTag$2(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$2.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  var isPlainObject_1 = isPlainObject$3;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var eq$1 = eq_1, isArrayLike$1 = isArrayLike_1, isIndex = _isIndex, isObject$5 = isObject_1;
  function isIterateeCall$1(value, index2, object) {
    if (!isObject$5(object)) {
      return false;
    }
    var type = _typeof(index2);
    if (type == "number" ? isArrayLike$1(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
      return eq$1(object[index2], value);
    }
    return false;
  }
  var _isIterateeCall = isIterateeCall$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var defaultConfig = {
    classPrefix: "t",
    animation: {
      include: ["ripple", "expand", "fade"],
      exclude: []
    },
    calendar: {
      firstDayOfWeek: 1,
      fillWithZero: true,
      controllerConfig: void 0
    },
    icon: {},
    input: {
      autocomplete: ""
    },
    dialog: {
      closeOnEscKeydown: true,
      closeOnOverlayClick: true,
      confirmBtnTheme: {
        "default": "primary",
        info: "primary",
        warning: "primary",
        danger: "primary",
        success: "primary"
      }
    },
    message: {},
    popconfirm: {
      confirmBtnTheme: {
        "default": "primary",
        warning: "primary",
        danger: "primary"
      }
    },
    table: {
      expandIcon: void 0,
      sortIcon: void 0,
      filterIcon: void 0,
      treeExpandAndFoldIcon: void 0,
      hideSortTips: false
    },
    select: {
      clearIcon: void 0,
      filterable: false
    },
    drawer: {
      closeOnEscKeydown: true,
      closeOnOverlayClick: true,
      size: "small"
    },
    tree: {
      folderIcon: void 0
    },
    datePicker: {
      firstDayOfWeek: 1
    },
    steps: {
      checkIcon: void 0,
      errorIcon: void 0
    },
    tag: {
      closeIcon: void 0
    },
    form: {
      requiredMark: void 0
    }
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var dayjs_min = { exports: {} };
  (function(module, exports) {
    !function(t, e) {
      module.exports = e();
    }(commonjsGlobal, function() {
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h2 = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function ordinal(t2) {
          var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
          return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
        }
      }, m = function m2(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = {
        s: m,
        z: function z(t2) {
          var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
          return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
        },
        m: function t2(e2, n2) {
          if (e2.date() < n2.date())
            return -t2(n2, e2);
          var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
          return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
        },
        a: function a2(t2) {
          return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
        },
        p: function p2(t2) {
          return {
            M: c,
            y: h2,
            w: o,
            d: a,
            D: d,
            h: u,
            m: s,
            s: i,
            ms: r,
            Q: f
          }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
        },
        u: function u2(t2) {
          return void 0 === t2;
        }
      }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function S2(t2) {
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
      }, O = function O2(t2, e2) {
        if (S(t2))
          return t2.clone();
        var n2 = "object" == _typeof(e2) ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, {
          locale: e2.$L,
          utc: e2.$u,
          x: e2.$x,
          $offset: e2.$offset
        });
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
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function l3(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function $3(t3, e3) {
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
          var $2 = b.p(f2), y2 = function y3(t2) {
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
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h3 = function h4(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function d3(t3) {
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
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function D3() {
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
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var zhCn$2 = { exports: {} };
  (function(module, exports) {
    !function(e, _) {
      module.exports = _(dayjs_min.exports);
    }(commonjsGlobal, function(e) {
      function _(e2) {
        return e2 && "object" == _typeof(e2) && "default" in e2 ? e2 : {
          "default": e2
        };
      }
      var t = _(e), d = {
        name: "zh-cn",
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        ordinal: function ordinal(e2, _2) {
          return "W" === _2 ? e2 + "周" : e2 + "日";
        },
        weekStart: 1,
        yearStart: 4,
        formats: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日Ah点mm分",
          LLLL: "YYYY年M月D日ddddAh点mm分",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm"
        },
        relativeTime: {
          future: "%s内",
          past: "%s前",
          s: "几秒",
          m: "1 分钟",
          mm: "%d 分钟",
          h: "1 小时",
          hh: "%d 小时",
          d: "1 天",
          dd: "%d 天",
          M: "1 个月",
          MM: "%d 个月",
          y: "1 年",
          yy: "%d 年"
        },
        meridiem: function meridiem(e2, _2) {
          var t2 = 100 * e2 + _2;
          return t2 < 600 ? "凌晨" : t2 < 900 ? "早上" : t2 < 1100 ? "上午" : t2 < 1300 ? "中午" : t2 < 1800 ? "下午" : "晚上";
        }
      };
      return t["default"].locale(d, null, true), d;
    });
  })(zhCn$2);
  var zhCn = {
    pagination: {
      itemsPerPage: "{size} 条/页",
      jumpTo: "跳至",
      page: "页",
      total: "共 {total} 项数据"
    },
    cascader: {
      empty: "暂无数据",
      loadingText: "加载中",
      placeholder: "请选择"
    },
    calendar: {
      yearSelection: "{year} 年",
      monthSelection: "{month} 月",
      yearRadio: "年",
      monthRadio: "月",
      hideWeekend: "隐藏周末",
      showWeekend: "显示周末",
      today: "今天",
      thisMonth: "本月",
      week: "一,二,三,四,五,六,日",
      cellMonth: "1 月,2 月,3 月,4 月,5 月,6 月,7 月,8 月,9 月,10 月,11 月,12 月"
    },
    transfer: {
      title: "{checked} / {total} 项",
      empty: "暂无数据",
      placeholder: "请输入关键词搜索"
    },
    timePicker: {
      dayjsLocale: "zh-cn",
      now: "此刻",
      confirm: "确定",
      anteMeridiem: "上午",
      postMeridiem: "下午",
      placeholder: "选择时间"
    },
    dialog: {
      confirm: "确认",
      cancel: "取消"
    },
    drawer: {
      confirm: "确认",
      cancel: "取消"
    },
    popconfirm: {
      confirm: {
        content: "确定"
      },
      cancel: {
        content: "取消"
      }
    },
    table: {
      empty: "暂无数据",
      loadingText: "正在加载中，请稍后",
      loadingMoreText: "点击加载更多",
      filterInputPlaceholder: "请输入内容（无默认值）",
      sortAscendingOperationText: "点击升序",
      sortCancelOperationText: "点击取消排序",
      sortDescendingOperationText: "点击降序",
      clearFilterResultButtonText: "清空筛选",
      columnConfigButtonText: "列配置",
      columnConfigTitleText: "表格列配置",
      columnConfigDescriptionText: "请选择需要在表格中显示的数据列",
      confirmText: "确认",
      cancelText: "取消",
      resetText: "重置",
      selectAllText: "全选",
      searchResultText: "搜索“{result}”，找到 {count} 条结果"
    },
    select: {
      empty: "暂无数据",
      loadingText: "加载中",
      placeholder: "请选择"
    },
    tree: {
      empty: "暂无数据"
    },
    treeSelect: {
      empty: "暂无数据",
      loadingText: "加载中",
      placeholder: "请选择"
    },
    datePicker: {
      dayjsLocale: "zh-cn",
      placeholder: {
        date: "请选择日期",
        month: "请选择月份",
        year: "请选择年份"
      },
      weekdays: ["一", "二", "三", "四", "五", "六", "日"],
      months: ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月", "8 月", "9 月", "10 月", "11 月", "12 月"],
      quarters: ["一季度", "二季度", "三季度", "四季度"],
      rangeSeparator: " - ",
      direction: "ltr",
      format: "YYYY-MM-DD",
      dayAriaLabel: "日",
      weekAbbreviation: "周",
      yearAriaLabel: "年",
      monthAriaLabel: "月",
      confirm: "确定",
      selectTime: "选择时间",
      selectDate: "选择日期",
      nextYear: "下一年",
      preYear: "上一年",
      nextMonth: "下个月",
      preMonth: "上个月",
      preDecade: "上个十年",
      nextDecade: "下个十年",
      now: "当前"
    },
    upload: {
      sizeLimitMessage: "文件大小不能超过 {sizeLimit}",
      cancelUploadText: "取消上传",
      triggerUploadText: {
        fileInput: "选择文件",
        image: "点击上传图片",
        normal: "点击上传",
        reupload: "重新选择",
        continueUpload: "继续选择",
        "delete": "删除",
        uploading: "上传中"
      },
      dragger: {
        dragDropText: "释放鼠标",
        draggingText: "拖拽到此区域",
        clickAndDragText: "点击上方“选择文件”或将文件拖拽到此区域"
      },
      file: {
        fileNameText: "文件名",
        fileSizeText: "文件大小",
        fileStatusText: "状态",
        fileOperationText: "操作",
        fileOperationDateText: "上传日期"
      },
      progress: {
        uploadingText: "上传中",
        waitingText: "待上传",
        failText: "上传失败",
        successText: "上传成功"
      }
    },
    form: {
      errorMessage: {
        date: "请输入正确的${name}",
        url: "请输入正确的${name}",
        required: "${name}必填",
        max: "${name}字符长度不能超过 ${validate} 个字符，一个中文等于两个字符",
        min: "${name}字符长度不能少于 ${validate} 个字符，一个中文等于两个字符",
        len: "${name}字符长度必须是 ${validate}",
        "enum": "${name}只能是${validate}等",
        idcard: "请输入正确的${name}",
        telnumber: "请输入正确的${name}",
        pattern: "请输入正确的${name}",
        validator: "${name}不符合要求",
        "boolean": "${name}数据类型必须是布尔类型",
        number: "${name}必须是数字"
      }
    },
    input: {
      placeholder: "请输入"
    },
    list: {
      loadingText: "正在加载中，请稍等",
      loadingMoreText: "点击加载更多"
    },
    alert: {
      expandText: "展开更多",
      collapseText: "收起"
    },
    anchor: {
      copySuccessText: "链接复制成功",
      copyText: "复制链接"
    },
    colorPicker: {
      swatchColorTitle: "系统预设颜色",
      recentColorTitle: "最近使用颜色",
      clearConfirmText: "确定清空最近使用的颜色吗？"
    },
    guide: {
      finishButtonProps: {
        content: "完成",
        theme: "primary"
      },
      nextButtonProps: {
        content: "下一步",
        theme: "primary"
      },
      skipButtonProps: {
        content: "跳过",
        theme: "default"
      },
      prevButtonProps: {
        content: "上一步",
        theme: "default"
      }
    },
    image: {
      errorText: "图片无法显示",
      loadingText: "图片加载中"
    },
    imageViewer: {
      errorText: "图片加载失败，可尝试重新加载",
      mirrorTipText: "镜像",
      rotateTipText: "旋转",
      originalSizeTipText: "原始大小"
    }
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var baseAssignValue = _baseAssignValue, eq = eq_1;
  function assignMergeValue$2(object, key2, value) {
    if (value !== void 0 && !eq(object[key2], value) || value === void 0 && !(key2 in object)) {
      baseAssignValue(object, key2, value);
    }
  }
  var _assignMergeValue = assignMergeValue$2;
  function createBaseFor$1(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index2 = -1, iterable = Object(object), props2 = keysFunc(object), length = props2.length;
      while (length--) {
        var key2 = props2[fromRight ? length : ++index2];
        if (iteratee(iterable[key2], key2, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  var _createBaseFor = createBaseFor$1;
  var createBaseFor = _createBaseFor;
  var baseFor$1 = createBaseFor();
  var _baseFor = baseFor$1;
  function safeGet$2(object, key2) {
    if (key2 === "constructor" && typeof object[key2] === "function") {
      return;
    }
    if (key2 == "__proto__") {
      return;
    }
    return object[key2];
  }
  var _safeGet = safeGet$2;
  var copyObject$1 = _copyObject, keysIn$1 = keysIn_1;
  function toPlainObject$1(value) {
    return copyObject$1(value, keysIn$1(value));
  }
  var toPlainObject_1 = toPlainObject$1;
  var assignMergeValue$1 = _assignMergeValue, cloneBuffer = _cloneBuffer$1.exports, cloneTypedArray = _cloneTypedArray, copyArray = _copyArray, initCloneObject = _initCloneObject, isArguments$2 = isArguments_1, isArray$5 = isArray_1, isArrayLikeObject$1 = isArrayLikeObject_1, isBuffer$2 = isBuffer$5.exports, isFunction$1 = isFunction_1, isObject$1$1 = isObject_1, isPlainObject$2 = isPlainObject_1, isTypedArray$2 = isTypedArray_1, safeGet$1 = _safeGet, toPlainObject = toPlainObject_1;
  function baseMergeDeep$1(object, source, key2, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet$1(object, key2), srcValue = safeGet$1(source, key2), stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue$1(object, key2, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key2 + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray$5(srcValue), isBuff = !isArr && isBuffer$2(srcValue), isTyped = !isArr && !isBuff && isTypedArray$2(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray$5(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject$1(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject$2(srcValue) || isArguments$2(srcValue)) {
        newValue = objValue;
        if (isArguments$2(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject$1$1(objValue) || isFunction$1(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue$1(object, key2, newValue);
  }
  var _baseMergeDeep = baseMergeDeep$1;
  var Stack = _Stack, assignMergeValue = _assignMergeValue, baseFor = _baseFor, baseMergeDeep = _baseMergeDeep, isObject$4 = isObject_1, keysIn = keysIn_1, safeGet = _safeGet;
  function baseMerge$2(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(source, function(srcValue, key2) {
      stack || (stack = new Stack());
      if (isObject$4(srcValue)) {
        baseMergeDeep(object, source, key2, srcIndex, baseMerge$2, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet(object, key2), srcValue, key2 + "", object, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue(object, key2, newValue);
      }
    }, keysIn);
  }
  var _baseMerge = baseMerge$2;
  var baseRest$1 = _baseRest, isIterateeCall = _isIterateeCall;
  function createAssigner$2(assigner) {
    return baseRest$1(function(object, sources) {
      var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? void 0 : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index2 < length) {
        var source = sources[index2];
        if (source) {
          assigner(object, source, index2, customizer);
        }
      }
      return object;
    });
  }
  var _createAssigner = createAssigner$2;
  var baseMerge$1 = _baseMerge, createAssigner$1 = _createAssigner;
  createAssigner$1(function(object, source, srcIndex, customizer) {
    baseMerge$1(object, source, srcIndex, customizer);
  });
  var baseMerge = _baseMerge, createAssigner = _createAssigner;
  var merge$1 = createAssigner(function(object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
  });
  var merge_1 = merge$1;
  var EAnimationType = /* @__PURE__ */ function(EAnimationType2) {
    EAnimationType2["ripple"] = "ripple";
    EAnimationType2["expand"] = "expand";
    EAnimationType2["fade"] = "fade";
    return EAnimationType2;
  }(EAnimationType || {});
  var defaultGlobalConfig = merge_1(defaultConfig, zhCn);
  var configProviderInjectKey = Symbol("configProvide");
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var globalConfigCopy = vue.ref();
  function useConfig() {
    var componentName = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
    var componentLocale = arguments.length > 1 ? arguments[1] : void 0;
    var injectGlobalConfig = vue.getCurrentInstance() ? vue.inject(configProviderInjectKey, null) : globalConfigCopy;
    var mergedGlobalConfig = vue.computed(function() {
      return (injectGlobalConfig === null || injectGlobalConfig === void 0 ? void 0 : injectGlobalConfig.value) || defaultGlobalConfig;
    });
    var globalConfig = vue.computed(function() {
      return Object.assign({}, mergedGlobalConfig.value[componentName], componentLocale);
    });
    var classPrefix = vue.computed(function() {
      return mergedGlobalConfig.value.classPrefix;
    });
    var t = function t2(pattern) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var data = args[0];
      if (isString_1(pattern)) {
        if (!data)
          return pattern;
        var regular = /\{\s*([\w-]+)\s*\}/g;
        var translated = pattern.replace(regular, function(match, key2) {
          if (data) {
            return String(data[key2]);
          }
          return "";
        });
        return translated;
      }
      if (isFunction_1(pattern)) {
        if (!args.length)
          return pattern(vue.h);
        return pattern.apply(void 0, args);
      }
      return "";
    };
    return {
      t,
      global: globalConfig,
      globalConfig,
      classPrefix
    };
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function usePrefixClass(componentName) {
    var _useConfig = useConfig("classPrefix"), classPrefix = _useConfig.classPrefix;
    return vue.computed(function() {
      return componentName ? "".concat(classPrefix.value, "-").concat(componentName) : classPrefix.value;
    });
  }
  function useCommonClassName$2() {
    var _useConfig2 = useConfig("classPrefix"), classPrefix = _useConfig2.classPrefix;
    return {
      SIZE: vue.computed(function() {
        return {
          small: "".concat(classPrefix.value, "-size-s"),
          medium: "".concat(classPrefix.value, "-size-m"),
          large: "".concat(classPrefix.value, "-size-l"),
          "default": "",
          xs: "".concat(classPrefix.value, "-size-xs"),
          xl: "".concat(classPrefix.value, "-size-xl"),
          block: "".concat(classPrefix.value, "-size-full-width")
        };
      }),
      STATUS: vue.computed(function() {
        return {
          loading: "".concat(classPrefix.value, "-is-loading"),
          loadMore: "".concat(classPrefix.value, "-is-load-more"),
          disabled: "".concat(classPrefix.value, "-is-disabled"),
          focused: "".concat(classPrefix.value, "-is-focused"),
          success: "".concat(classPrefix.value, "-is-success"),
          error: "".concat(classPrefix.value, "-is-error"),
          warning: "".concat(classPrefix.value, "-is-warning"),
          selected: "".concat(classPrefix.value, "-is-selected"),
          active: "".concat(classPrefix.value, "-is-active"),
          checked: "".concat(classPrefix.value, "-is-checked"),
          current: "".concat(classPrefix.value, "-is-current"),
          hidden: "".concat(classPrefix.value, "-is-hidden"),
          visible: "".concat(classPrefix.value, "-is-visible"),
          expanded: "".concat(classPrefix.value, "-is-expanded"),
          indeterminate: "".concat(classPrefix.value, "-is-indeterminate")
        };
      })
    };
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var GradientIcon = vue.defineComponent({
    name: "TLoadingGradient",
    setup: function setup() {
      var classPrefix = usePrefixClass();
      vue.onMounted(function() {
        var circleElem = vue.getCurrentInstance().refs.circle;
        vue.nextTick(function() {
          circleAdapter(circleElem);
        });
      });
      return {
        classPrefix
      };
    },
    render: function render() {
      var classPrefix = this.classPrefix;
      var name = "".concat(classPrefix, "-loading__gradient");
      var classes = [name, "".concat(classPrefix, "-icon-loading")];
      return vue.createVNode("svg", {
        "class": classes,
        "viewBox": "0 0 12 12",
        "version": "1.1",
        "width": "1em",
        "height": "1em",
        "xmlns": "http://www.w3.org/2000/svg"
      }, [vue.createVNode("foreignObject", {
        "x": "0",
        "y": "0",
        "width": "12",
        "height": "12"
      }, [vue.createVNode("div", {
        "class": "".concat(name, "-conic"),
        "ref": "circle"
      }, null)])]);
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var raf$2 = { exports: {} };
  var performanceNow$1 = { exports: {} };
  (function() {
    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
    if (typeof performance !== "undefined" && performance !== null && performance.now) {
      performanceNow$1.exports = function() {
        return performance.now();
      };
    } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
      performanceNow$1.exports = function() {
        return (getNanoSeconds() - nodeLoadTime) / 1e6;
      };
      hrtime = process.hrtime;
      getNanoSeconds = function getNanoSeconds2() {
        var hr;
        hr = hrtime();
        return hr[0] * 1e9 + hr[1];
      };
      moduleLoadTime = getNanoSeconds();
      upTime = process.uptime() * 1e9;
      nodeLoadTime = moduleLoadTime - upTime;
    } else if (Date.now) {
      performanceNow$1.exports = function() {
        return Date.now() - loadTime;
      };
      loadTime = Date.now();
    } else {
      performanceNow$1.exports = function() {
        return (/* @__PURE__ */ new Date()).getTime() - loadTime;
      };
      loadTime = (/* @__PURE__ */ new Date()).getTime();
    }
  }).call(commonjsGlobal);
  var now$2 = performanceNow$1.exports, root$1 = typeof window === "undefined" ? commonjsGlobal : window, vendors = ["moz", "webkit"], suffix = "AnimationFrame", raf = root$1["request" + suffix], caf = root$1["cancel" + suffix] || root$1["cancelRequest" + suffix];
  for (var i = 0; !raf && i < vendors.length; i++) {
    raf = root$1[vendors[i] + "Request" + suffix];
    caf = root$1[vendors[i] + "Cancel" + suffix] || root$1[vendors[i] + "CancelRequest" + suffix];
  }
  if (!raf || !caf) {
    var last$2 = 0, id = 0, queue = [], frameDuration = 1e3 / 60;
    raf = function raf2(callback) {
      if (queue.length === 0) {
        var _now = now$2(), next = Math.max(0, frameDuration - (_now - last$2));
        last$2 = next + _now;
        setTimeout(function() {
          var cp = queue.slice(0);
          queue.length = 0;
          var _loop = function _loop2() {
            if (!cp[i].cancelled) {
              try {
                cp[i].callback(last$2);
              } catch (e) {
                setTimeout(function() {
                  throw e;
                }, 0);
              }
            }
          };
          for (var i = 0; i < cp.length; i++) {
            _loop();
          }
        }, Math.round(next));
      }
      queue.push({
        handle: ++id,
        callback,
        cancelled: false
      });
      return id;
    };
    caf = function caf2(handle) {
      for (var i = 0; i < queue.length; i++) {
        if (queue[i].handle === handle) {
          queue[i].cancelled = true;
        }
      }
    };
  }
  raf$2.exports = function(fn2) {
    return raf.call(root$1, fn2);
  };
  raf$2.exports.cancel = function() {
    caf.apply(root$1, arguments);
  };
  raf$2.exports.polyfill = function(object) {
    if (!object) {
      object = root$1;
    }
    object.requestAnimationFrame = raf;
    object.cancelAnimationFrame = caf;
  };
  var isServer = typeof window === "undefined";
  var trim$1 = function trim(str) {
    return (str || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
  };
  var on = function() {
    if (!isServer && document.addEventListener) {
      return function(element2, event, handler, options) {
        if (element2 && event && handler) {
          element2.addEventListener(event, handler, options);
        }
      };
    }
    return function(element2, event, handler) {
      if (element2 && event && handler) {
        element2.attachEvent("on".concat(event), handler);
      }
    };
  }();
  var off = function() {
    if (!isServer && document.removeEventListener) {
      return function(element2, event, handler, options) {
        if (element2 && event) {
          element2.removeEventListener(event, handler, options);
        }
      };
    }
    return function(element2, event, handler) {
      if (element2 && event) {
        element2.detachEvent("on".concat(event), handler);
      }
    };
  }();
  function once(element2, event, handler, options) {
    var handlerFn = isFunction_1(handler) ? handler : handler.handleEvent;
    var callback = function callback2(evt) {
      handlerFn(evt);
      off(element2, event, callback2, options);
    };
    on(element2, event, callback, options);
  }
  function hasClass(el, cls) {
    if (!el || !cls)
      return false;
    if (cls.indexOf(" ") !== -1)
      throw new Error("className should not contain space.");
    if (el.classList) {
      return el.classList.contains(cls);
    }
    return " ".concat(el.className, " ").indexOf(" ".concat(cls, " ")) > -1;
  }
  function addClass(el, cls) {
    if (!el)
      return;
    var curClass = el.className;
    var classes = (cls || "").split(" ");
    for (var i = 0, j = classes.length; i < j; i++) {
      var clsName = classes[i];
      if (!clsName)
        continue;
      if (el.classList) {
        el.classList.add(clsName);
      } else if (!hasClass(el, clsName)) {
        curClass += " ".concat(clsName);
      }
    }
    if (!el.classList) {
      el.className = curClass;
    }
  }
  function removeClass(el, cls) {
    if (!el || !cls)
      return;
    var classes = cls.split(" ");
    var curClass = " ".concat(el.className, " ");
    for (var i = 0, j = classes.length; i < j; i++) {
      var clsName = classes[i];
      if (!clsName)
        continue;
      if (el.classList) {
        el.classList.remove(clsName);
      } else if (hasClass(el, clsName)) {
        curClass = curClass.replace(" ".concat(clsName, " "), " ");
      }
    }
    if (!el.classList) {
      el.className = trim$1(curClass);
    }
  }
  var getAttach = function getAttach2(node, triggerNode) {
    var attachNode = isFunction_1(node) ? node(triggerNode) : node;
    if (!attachNode) {
      return document.body;
    }
    if (isString_1(attachNode)) {
      return document.querySelector(attachNode);
    }
    if (attachNode instanceof HTMLElement) {
      return attachNode;
    }
    return document.body;
  };
  var getSSRAttach = function getSSRAttach2() {
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var baseKeys = _baseKeys, getTag = _getTag, isArguments$1 = isArguments_1, isArray$4 = isArray_1, isArrayLike = isArrayLike_1, isBuffer$1 = isBuffer$5.exports, isPrototype = _isPrototype, isTypedArray$1 = isTypedArray_1;
  var mapTag = "[object Map]", setTag = "[object Set]";
  var objectProto = Object.prototype;
  var hasOwnProperty$1 = objectProto.hasOwnProperty;
  function isEmpty(value) {
    if (value == null) {
      return true;
    }
    if (isArrayLike(value) && (isArray$4(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer$1(value) || isTypedArray$1(value) || isArguments$1(value))) {
      return !value.length;
    }
    var tag = getTag(value);
    if (tag == mapTag || tag == setTag) {
      return !value.size;
    }
    if (isPrototype(value)) {
      return !baseKeys(value).length;
    }
    for (var key2 in value) {
      if (hasOwnProperty$1.call(value, key2)) {
        return false;
      }
    }
    return true;
  }
  var isEmpty_1 = isEmpty;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var baseGetTag$1 = _baseGetTag, isObjectLike$1 = isObjectLike_1;
  var symbolTag = "[object Symbol]";
  function isSymbol$4(value) {
    return _typeof(value) == "symbol" || isObjectLike$1(value) && baseGetTag$1(value) == symbolTag;
  }
  var isSymbol_1 = isSymbol$4;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function arrayMap$1$1(array, iteratee) {
    var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index2 < length) {
      result[index2] = iteratee(array[index2], index2, array);
    }
    return result;
  }
  var _arrayMap = arrayMap$1$1;
  var _Symbol$1 = _Symbol$2$1, arrayMap$3 = _arrayMap, isArray$3 = isArray_1, isSymbol$3 = isSymbol_1;
  var INFINITY$1 = 1 / 0;
  var symbolProto = _Symbol$1 ? _Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseToString$1(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray$3(value)) {
      return arrayMap$3(value, baseToString$1) + "";
    }
    if (isSymbol$3(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
  }
  var _baseToString = baseToString$1;
  var baseToString = _baseToString;
  function toString$5(value) {
    return value == null ? "" : baseToString(value);
  }
  var toString_1 = toString$5;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function baseSlice$2(array, start2, end2) {
    var index2 = -1, length = array.length;
    if (start2 < 0) {
      start2 = -start2 > length ? 0 : length + start2;
    }
    end2 = end2 > length ? length : end2;
    if (end2 < 0) {
      end2 += length;
    }
    length = start2 > end2 ? 0 : end2 - start2 >>> 0;
    start2 >>>= 0;
    var result = Array(length);
    while (++index2 < length) {
      result[index2] = array[index2 + start2];
    }
    return result;
  }
  var _baseSlice = baseSlice$2;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var baseSlice$1 = _baseSlice;
  function castSlice$1(array, start2, end2) {
    var length = array.length;
    end2 = end2 === void 0 ? length : end2;
    return !start2 && end2 >= length ? array : baseSlice$1(array, start2, end2);
  }
  var _castSlice = castSlice$1;
  var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$1$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1$1 = "\\u20d0-\\u20ff", rsComboRange$1$1 = rsComboMarksRange$1$1 + reComboHalfMarksRange$1$1 + rsComboSymbolsRange$1$1, rsVarRange$1 = "\\ufe0e\\ufe0f";
  var rsZWJ$1 = "\\u200d";
  var reHasUnicode = RegExp("[" + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1$1 + rsVarRange$1 + "]");
  function hasUnicode$1(string) {
    return reHasUnicode.test(string);
  }
  var _hasUnicode = hasUnicode$1;
  function asciiToArray$1(string) {
    return string.split("");
  }
  var _asciiToArray = asciiToArray$1;
  var rsAstralRange$2 = "\\ud800-\\udfff", rsComboMarksRange$2 = "\\u0300-\\u036f", reComboHalfMarksRange$2 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$2 = "\\u20d0-\\u20ff", rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2, rsVarRange$2 = "\\ufe0e\\ufe0f";
  var rsAstral = "[" + rsAstralRange$2 + "]", rsCombo$2 = "[" + rsComboRange$2 + "]", rsFitz$1 = "\\ud83c[\\udffb-\\udfff]", rsModifier$1 = "(?:" + rsCombo$2 + "|" + rsFitz$1 + ")", rsNonAstral$1 = "[^" + rsAstralRange$2 + "]", rsRegional$1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair$1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ$2 = "\\u200d";
  var reOptMod$1 = rsModifier$1 + "?", rsOptVar$1 = "[" + rsVarRange$2 + "]?", rsOptJoin$1 = "(?:" + rsZWJ$2 + "(?:" + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join("|") + ")" + rsOptVar$1 + reOptMod$1 + ")*", rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1, rsSymbol = "(?:" + [rsNonAstral$1 + rsCombo$2 + "?", rsCombo$2, rsRegional$1, rsSurrPair$1, rsAstral].join("|") + ")";
  var reUnicode = RegExp(rsFitz$1 + "(?=" + rsFitz$1 + ")|" + rsSymbol + rsSeq$1, "g");
  function unicodeToArray$1(string) {
    return string.match(reUnicode) || [];
  }
  var _unicodeToArray = unicodeToArray$1;
  var asciiToArray = _asciiToArray, hasUnicode$2 = _hasUnicode, unicodeToArray = _unicodeToArray;
  function stringToArray$1(string) {
    return hasUnicode$2(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  var _stringToArray = stringToArray$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var castSlice = _castSlice, hasUnicode = _hasUnicode, stringToArray = _stringToArray, toString$4 = toString_1;
  function createCaseFirst$1(methodName) {
    return function(string) {
      string = toString$4(string);
      var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
      var chr = strSymbols ? strSymbols[0] : string.charAt(0);
      var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
      return chr[methodName]() + trailing;
    };
  }
  var _createCaseFirst = createCaseFirst$1;
  var createCaseFirst = _createCaseFirst;
  var upperFirst$1 = createCaseFirst("toUpperCase");
  var upperFirst_1 = upperFirst$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function arrayReduce$1(array, iteratee, accumulator, initAccum) {
    var index2 = -1, length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[++index2];
    }
    while (++index2 < length) {
      accumulator = iteratee(accumulator, array[index2], index2, array);
    }
    return accumulator;
  }
  var _arrayReduce = arrayReduce$1;
  function basePropertyOf$1(object) {
    return function(key2) {
      return object == null ? void 0 : object[key2];
    };
  }
  var _basePropertyOf = basePropertyOf$1;
  var basePropertyOf = _basePropertyOf;
  var deburredLetters = {
    // Latin-1 Supplement block.
    "À": "A",
    "Á": "A",
    "Â": "A",
    "Ã": "A",
    "Ä": "A",
    "Å": "A",
    "à": "a",
    "á": "a",
    "â": "a",
    "ã": "a",
    "ä": "a",
    "å": "a",
    "Ç": "C",
    "ç": "c",
    "Ð": "D",
    "ð": "d",
    "È": "E",
    "É": "E",
    "Ê": "E",
    "Ë": "E",
    "è": "e",
    "é": "e",
    "ê": "e",
    "ë": "e",
    "Ì": "I",
    "Í": "I",
    "Î": "I",
    "Ï": "I",
    "ì": "i",
    "í": "i",
    "î": "i",
    "ï": "i",
    "Ñ": "N",
    "ñ": "n",
    "Ò": "O",
    "Ó": "O",
    "Ô": "O",
    "Õ": "O",
    "Ö": "O",
    "Ø": "O",
    "ò": "o",
    "ó": "o",
    "ô": "o",
    "õ": "o",
    "ö": "o",
    "ø": "o",
    "Ù": "U",
    "Ú": "U",
    "Û": "U",
    "Ü": "U",
    "ù": "u",
    "ú": "u",
    "û": "u",
    "ü": "u",
    "Ý": "Y",
    "ý": "y",
    "ÿ": "y",
    "Æ": "Ae",
    "æ": "ae",
    "Þ": "Th",
    "þ": "th",
    "ß": "ss",
    // Latin Extended-A block.
    "Ā": "A",
    "Ă": "A",
    "Ą": "A",
    "ā": "a",
    "ă": "a",
    "ą": "a",
    "Ć": "C",
    "Ĉ": "C",
    "Ċ": "C",
    "Č": "C",
    "ć": "c",
    "ĉ": "c",
    "ċ": "c",
    "č": "c",
    "Ď": "D",
    "Đ": "D",
    "ď": "d",
    "đ": "d",
    "Ē": "E",
    "Ĕ": "E",
    "Ė": "E",
    "Ę": "E",
    "Ě": "E",
    "ē": "e",
    "ĕ": "e",
    "ė": "e",
    "ę": "e",
    "ě": "e",
    "Ĝ": "G",
    "Ğ": "G",
    "Ġ": "G",
    "Ģ": "G",
    "ĝ": "g",
    "ğ": "g",
    "ġ": "g",
    "ģ": "g",
    "Ĥ": "H",
    "Ħ": "H",
    "ĥ": "h",
    "ħ": "h",
    "Ĩ": "I",
    "Ī": "I",
    "Ĭ": "I",
    "Į": "I",
    "İ": "I",
    "ĩ": "i",
    "ī": "i",
    "ĭ": "i",
    "į": "i",
    "ı": "i",
    "Ĵ": "J",
    "ĵ": "j",
    "Ķ": "K",
    "ķ": "k",
    "ĸ": "k",
    "Ĺ": "L",
    "Ļ": "L",
    "Ľ": "L",
    "Ŀ": "L",
    "Ł": "L",
    "ĺ": "l",
    "ļ": "l",
    "ľ": "l",
    "ŀ": "l",
    "ł": "l",
    "Ń": "N",
    "Ņ": "N",
    "Ň": "N",
    "Ŋ": "N",
    "ń": "n",
    "ņ": "n",
    "ň": "n",
    "ŋ": "n",
    "Ō": "O",
    "Ŏ": "O",
    "Ő": "O",
    "ō": "o",
    "ŏ": "o",
    "ő": "o",
    "Ŕ": "R",
    "Ŗ": "R",
    "Ř": "R",
    "ŕ": "r",
    "ŗ": "r",
    "ř": "r",
    "Ś": "S",
    "Ŝ": "S",
    "Ş": "S",
    "Š": "S",
    "ś": "s",
    "ŝ": "s",
    "ş": "s",
    "š": "s",
    "Ţ": "T",
    "Ť": "T",
    "Ŧ": "T",
    "ţ": "t",
    "ť": "t",
    "ŧ": "t",
    "Ũ": "U",
    "Ū": "U",
    "Ŭ": "U",
    "Ů": "U",
    "Ű": "U",
    "Ų": "U",
    "ũ": "u",
    "ū": "u",
    "ŭ": "u",
    "ů": "u",
    "ű": "u",
    "ų": "u",
    "Ŵ": "W",
    "ŵ": "w",
    "Ŷ": "Y",
    "ŷ": "y",
    "Ÿ": "Y",
    "Ź": "Z",
    "Ż": "Z",
    "Ž": "Z",
    "ź": "z",
    "ż": "z",
    "ž": "z",
    "Ĳ": "IJ",
    "ĳ": "ij",
    "Œ": "Oe",
    "œ": "oe",
    "ŉ": "'n",
    "ſ": "s"
  };
  var deburrLetter$1 = basePropertyOf(deburredLetters);
  var _deburrLetter = deburrLetter$1;
  var deburrLetter = _deburrLetter, toString$1$1 = toString_1;
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
  var rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
  var rsCombo$1 = "[" + rsComboRange$1 + "]";
  var reComboMark = RegExp(rsCombo$1, "g");
  function deburr$1(string) {
    string = toString$1$1(string);
    return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
  }
  var deburr_1 = deburr$1;
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
  function asciiWords$1(string) {
    return string.match(reAsciiWord) || [];
  }
  var _asciiWords = asciiWords$1;
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
  function hasUnicodeWord$1(string) {
    return reHasUnicodeWord.test(string);
  }
  var _hasUnicodeWord = hasUnicodeWord$1;
  var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
  var rsApos$1 = "['’]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
  var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos$1 + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos$1 + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
  var reUnicodeWord = RegExp([rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")", rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")", rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower, rsUpper + "+" + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join("|"), "g");
  function unicodeWords$1(string) {
    return string.match(reUnicodeWord) || [];
  }
  var _unicodeWords = unicodeWords$1;
  var asciiWords = _asciiWords, hasUnicodeWord = _hasUnicodeWord, toString$3 = toString_1, unicodeWords = _unicodeWords;
  function words$1(string, pattern, guard) {
    string = toString$3(string);
    pattern = guard ? void 0 : pattern;
    if (pattern === void 0) {
      return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
    }
    return string.match(pattern) || [];
  }
  var words_1 = words$1;
  var arrayReduce = _arrayReduce, deburr = deburr_1, words = words_1;
  var rsApos = "['’]";
  var reApos = RegExp(rsApos, "g");
  function createCompounder$2(callback) {
    return function(string) {
      return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
    };
  }
  var _createCompounder = createCompounder$2;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var toString$2 = toString_1, upperFirst = upperFirst_1;
  function capitalize$1(string) {
    return upperFirst(toString$2(string).toLowerCase());
  }
  var capitalize_1 = capitalize$1;
  var capitalize = capitalize_1, createCompounder$1 = _createCompounder;
  var camelCase = createCompounder$1(function(result, word, index2) {
    word = word.toLowerCase();
    return result + (index2 ? capitalize(word) : word);
  });
  var camelCase_1 = camelCase;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var createCompounder = _createCompounder;
  var kebabCase = createCompounder(function(result, word, index2) {
    return result + (index2 ? "-" : "") + word.toLowerCase();
  });
  var kebabCase_1 = kebabCase;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function getDefaultNode(options) {
    var defaultNode;
    if (isObject_1(options) && "defaultNode" in options) {
      defaultNode = options.defaultNode;
    } else if (vue.isVNode(options) || isString_1(options)) {
      defaultNode = options;
    }
    return defaultNode;
  }
  function getParams(options) {
    return isObject_1(options) && "params" in options ? options.params : {};
  }
  function getSlotFirst(options) {
    return isObject_1(options) && "slotFirst" in options ? options.slotFirst : {};
  }
  function handleSlots$1(instance, params, name) {
    var _instance$$slots$came, _instance$$slots, _instance$$slots$keba, _instance$$slots2;
    var node = (_instance$$slots$came = (_instance$$slots = instance.$slots)[camelCase_1(name)]) === null || _instance$$slots$came === void 0 ? void 0 : _instance$$slots$came.call(_instance$$slots, params);
    if (node)
      return node;
    node = (_instance$$slots$keba = (_instance$$slots2 = instance.$slots)[kebabCase_1(name)]) === null || _instance$$slots$keba === void 0 ? void 0 : _instance$$slots$keba.call(_instance$$slots2, params);
    if (node)
      return node;
    return null;
  }
  var renderTNodeJSX = function renderTNodeJSX2(instance, name, options) {
    var params = getParams(options);
    var defaultNode = getDefaultNode(options);
    var propsNode;
    if (name in instance) {
      propsNode = instance[name];
    }
    if (propsNode === false)
      return;
    if (propsNode === true && defaultNode) {
      return handleSlots$1(instance, params, name) || defaultNode;
    }
    if (isFunction_1(propsNode))
      return propsNode(vue.h, params);
    var isPropsEmpty = [void 0, params, ""].includes(propsNode);
    if (isPropsEmpty && (instance.$slots[camelCase_1(name)] || instance.$slots[kebabCase_1(name)])) {
      return handleSlots$1(instance, params, name);
    }
    return propsNode;
  };
  var renderContent = function renderContent2(vm, name1, name2, options) {
    var params = getParams(options);
    var defaultNode = getDefaultNode(options);
    var toParams = params ? {
      params
    } : void 0;
    var node1 = renderTNodeJSX(vm, name1, toParams);
    var node2 = renderTNodeJSX(vm, name2, toParams);
    var res = isEmpty_1(node1) ? node2 : node1;
    return isEmpty_1(res) ? defaultNode : res;
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var props$d = {
    attach: {
      type: [String, Function],
      "default": ""
    },
    content: {
      type: [String, Function]
    },
    "default": {
      type: [String, Function]
    },
    delay: {
      type: Number,
      "default": 0
    },
    fullscreen: Boolean,
    indicator: {
      type: [Boolean, Function],
      "default": true
    },
    inheritColor: Boolean,
    loading: {
      type: Boolean,
      "default": true
    },
    preventScrollThrough: {
      type: Boolean,
      "default": true
    },
    showOverlay: {
      type: Boolean,
      "default": true
    },
    size: {
      type: String,
      "default": "medium"
    },
    text: {
      type: [String, Function]
    },
    zIndex: {
      type: Number
    }
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var useTeleport = function useTeleport2(attach, triggerNode) {
    var to = isFunction_1(attach) ? vue.computed(attach) : vue.ref(attach);
    var innerTriggerNode = isFunction_1(triggerNode) ? vue.computed(triggerNode) : vue.ref(triggerNode);
    var element2 = vue.ref();
    var getElement = function getElement2() {
      element2.value = getSSRAttach() || getAttach(to.value, innerTriggerNode.value);
    };
    vue.onMounted(function() {
      return getElement();
    });
    vue.watch([to, innerTriggerNode], function() {
      return getElement();
    });
    return element2;
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var useComponentClassName = function useComponentClassName2() {
    return {
      name: usePrefixClass("loading"),
      centerClass: usePrefixClass("loading--center"),
      fullscreenClass: usePrefixClass("loading__fullscreen"),
      lockClass: usePrefixClass("loading--lock"),
      overlayClass: usePrefixClass("loading__overlay"),
      relativeClass: usePrefixClass("loading__parent"),
      fullClass: usePrefixClass("loading--full"),
      inheritColorClass: usePrefixClass("loading--inherit-color")
    };
  };
  var _Loading = vue.defineComponent({
    name: "TLoading",
    inheritAttrs: false,
    props: props$d,
    setup: function setup2(props2, _ref) {
      var slots = _ref.slots;
      var delayShowLoading = vue.ref(false);
      var _useComponentClassNam = useComponentClassName(), name = _useComponentClassNam.name, centerClass = _useComponentClassNam.centerClass, fullscreenClass = _useComponentClassNam.fullscreenClass, lockClass = _useComponentClassNam.lockClass, overlayClass = _useComponentClassNam.overlayClass, relativeClass = _useComponentClassNam.relativeClass, fullClass = _useComponentClassNam.fullClass, inheritColorClass = _useComponentClassNam.inheritColorClass;
      var classPrefix = usePrefixClass();
      var _useCommonClassName = useCommonClassName$2(), SIZE = _useCommonClassName.SIZE;
      var countDelay = function countDelay2() {
        delayShowLoading.value = false;
        var timer = setTimeout(function() {
          delayShowLoading.value = true;
          clearTimeout(timer);
        }, props2.delay);
      };
      var teleportElement = useTeleport(function() {
        return props2.attach;
      });
      var delayCounted = vue.computed(function() {
        return Boolean(!props2.delay || props2.delay && delayShowLoading.value);
      });
      var styles = vue.computed(function() {
        var styles2 = {};
        if (props2.zIndex !== void 0) {
          styles2.zIndex = props2.zIndex;
        }
        if (!["small", "medium", "large"].includes(props2.size)) {
          styles2["font-size"] = props2.size;
        }
        return styles2;
      });
      var hasContent = vue.computed(function() {
        return Boolean(props2["default"] || slots["default"] || props2.content || slots.content);
      });
      var lockFullscreen = vue.computed(function() {
        return props2.preventScrollThrough && props2.fullscreen;
      });
      var showText = vue.computed(function() {
        return Boolean(props2.text || slots.text);
      });
      var showWrapLoading = vue.computed(function() {
        return hasContent.value && props2.loading && delayCounted.value;
      });
      var showFullScreenLoading = vue.computed(function() {
        return props2.fullscreen && props2.loading && delayCounted.value;
      });
      var showNormalLoading = vue.computed(function() {
        return props2.attach && props2.loading && delayCounted.value;
      });
      var showAttachedLoading = vue.computed(function() {
        return props2.attach && props2.loading && delayCounted.value;
      });
      var classes = vue.computed(function() {
        var baseClasses = [centerClass.value, SIZE.value[props2.size], _defineProperty$2({}, inheritColorClass.value, props2.inheritColor)];
        var fullScreenClasses = [name.value, fullscreenClass.value, centerClass.value, overlayClass.value];
        return {
          baseClasses,
          attachClasses: baseClasses.concat([name.value, fullClass.value, _defineProperty$2({}, overlayClass.value, props2.showOverlay)]),
          withContentClasses: baseClasses.concat([name.value, fullClass.value, _defineProperty$2({}, overlayClass.value, props2.showOverlay)]),
          fullScreenClasses,
          normalClasses: baseClasses.concat([name.value])
        };
      });
      var _toRefs = vue.toRefs(props2), loading2 = _toRefs.loading;
      vue.watch([loading2], function(_ref5) {
        var _ref6 = _slicedToArray(_ref5, 1), isLoading = _ref6[0];
        if (isLoading) {
          countDelay();
          lockFullscreen.value && addClass(document.body, lockClass.value);
        } else {
          lockFullscreen.value && removeClass(document.body, lockClass.value);
        }
      });
      vue.onMounted(function() {
        props2.delay && countDelay();
      });
      return {
        classPrefix,
        relativeClass,
        delayShowLoading,
        styles,
        showText,
        hasContent,
        classes,
        lockFullscreen,
        showWrapLoading,
        showNormalLoading,
        showFullScreenLoading,
        showAttachedLoading,
        teleportElement
      };
    },
    render: function render2() {
      var _this = this;
      var _this$classes = this.classes, fullScreenClasses = _this$classes.fullScreenClasses, baseClasses = _this$classes.baseClasses, withContentClasses = _this$classes.withContentClasses, attachClasses = _this$classes.attachClasses, normalClasses = _this$classes.normalClasses;
      var defaultIndicator = vue.createVNode(GradientIcon, {
        "size": this.size
      }, null);
      var indicator = this.loading && renderTNodeJSX(this, "indicator", defaultIndicator);
      var text = this.showText && vue.createVNode("div", {
        "class": "".concat(this.classPrefix, "-loading__text")
      }, [renderTNodeJSX(this, "text")]);
      if (this.fullscreen) {
        if (!this.showFullScreenLoading || !this.loading)
          return null;
        return vue.createVNode(vue.Teleport, {
          "disabled": !this.attach || !this.teleportElement,
          "to": this.teleportElement
        }, {
          "default": function _default2() {
            return [vue.createVNode("div", vue.mergeProps({
              "class": fullScreenClasses,
              "style": _this.styles
            }, _this.$attrs), [vue.createVNode("div", {
              "class": baseClasses
            }, [indicator, text])])];
          }
        });
      }
      if (this.hasContent) {
        return vue.createVNode("div", vue.mergeProps({
          "class": this.relativeClass
        }, this.$attrs), [renderContent(this, "default", "content"), this.showWrapLoading && vue.createVNode("div", {
          "class": withContentClasses,
          "style": this.styles
        }, [indicator, text])]);
      }
      if (this.attach) {
        if (!this.showAttachedLoading || !this.loading)
          return null;
        return vue.createVNode(vue.Teleport, {
          "disabled": !this.attach || !this.teleportElement,
          "to": this.teleportElement
        }, {
          "default": function _default2() {
            return [vue.createVNode("div", vue.mergeProps({
              "class": attachClasses,
              "style": _this.styles
            }, _this.$attrs), [indicator, text])];
          }
        });
      }
      return this.loading ? vue.createVNode("div", vue.mergeProps({
        "class": normalClasses,
        "style": this.styles
      }, this.$attrs), [indicator, text]) : null;
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function ownKeys$v(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$v(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$v(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$v(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  var fullScreenLoadingInstance = null;
  function createLoading(props2) {
    var component = vue.defineComponent({
      setup: function setup23() {
        var loadingOptions = vue.reactive(props2);
        return {
          loadingOptions
        };
      },
      render: function render3() {
        return vue.h(_Loading, _objectSpread$v({}, this.loadingOptions));
      }
    });
    var attach = getAttach(props2.attach);
    var loading2 = vue.createApp(component).mount(document.createElement("div"));
    var parentRelativeClass = usePrefixClass("loading__parent--relative").value;
    var prefixClass = usePrefixClass("loading");
    if (attach) {
      addClass(attach, parentRelativeClass);
    } else {
      console.error("attach is not exist");
    }
    var loadingInstance = {
      hide: function hide2() {
        var _attach$querySelector;
        loading2.loading = false;
        (_attach$querySelector = attach.querySelectorAll(".".concat(prefixClass.value))) === null || _attach$querySelector === void 0 || _attach$querySelector.forEach(function(item) {
          item.remove();
        });
        removeClass(attach, parentRelativeClass);
      }
    };
    return loadingInstance;
  }
  function produceLoading(props2) {
    var lockClass = usePrefixClass("loading--lock");
    if (props2 === true) {
      fullScreenLoadingInstance = createLoading({
        fullscreen: true,
        loading: true,
        attach: "body"
      });
      return fullScreenLoadingInstance;
    }
    removeClass(document.body, lockClass.value);
    if (props2 === false) {
      removeClass(document.body, lockClass.value);
      fullScreenLoadingInstance.hide();
      fullScreenLoadingInstance = null;
      return;
    }
    return createLoading(props2);
  }
  var LoadingPlugin = produceLoading;
  LoadingPlugin.install = function(app2) {
    app2.config.globalProperties.$loading = produceLoading;
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var INSTANCE_KEY = Symbol("TdLoading");
  var createInstance$1 = function createInstance(el, binding) {
    var _binding$modifiers = binding.modifiers, fullscreen = _binding$modifiers.fullscreen, inheritColor = _binding$modifiers.inheritColor;
    var options = {
      attach: function attach() {
        return el;
      },
      fullscreen: fullscreen !== null && fullscreen !== void 0 ? fullscreen : false,
      inheritColor: inheritColor !== null && inheritColor !== void 0 ? inheritColor : false,
      loading: binding.value
    };
    el[INSTANCE_KEY] = {
      options,
      instance: LoadingPlugin(options)
    };
  };
  var vLoading = {
    mounted: function mounted(el, binding) {
      if (binding.value) {
        createInstance$1(el, binding);
      }
    },
    updated: function updated(el, binding) {
      var instance = el[INSTANCE_KEY];
      var value = binding.value, oldValue = binding.oldValue;
      if (!!oldValue !== !!value) {
        if (value) {
          createInstance$1(el, binding);
        } else {
          instance === null || instance === void 0 || instance.instance.hide();
        }
      }
    },
    unmounted: function unmounted(el) {
      var _el$INSTANCE_KEY;
      (_el$INSTANCE_KEY = el[INSTANCE_KEY]) === null || _el$INSTANCE_KEY === void 0 || _el$INSTANCE_KEY.instance.hide();
    }
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function withInstall(comp, alias, directive) {
    var componentPlugin = comp;
    componentPlugin.install = function(app2, name) {
      app2.component(alias || name || componentPlugin.name, comp);
      directive && app2.directive(directive.name, directive.comp);
    };
    return componentPlugin;
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var Loading = withInstall(_Loading, _Loading.name, {
    name: "loading",
    comp: vLoading
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var props$c = {
    block: Boolean,
    content: {
      type: [String, Function]
    },
    "default": {
      type: [String, Function]
    },
    disabled: {
      type: Boolean,
      "default": void 0
    },
    ghost: Boolean,
    href: {
      type: String,
      "default": ""
    },
    icon: {
      type: Function
    },
    loading: Boolean,
    shape: {
      type: String,
      "default": "rectangle",
      validator: function validator(val) {
        if (!val)
          return true;
        return ["rectangle", "square", "round", "circle"].includes(val);
      }
    },
    size: {
      type: String,
      "default": "medium",
      validator: function validator2(val) {
        if (!val)
          return true;
        return ["extra-small", "small", "medium", "large"].includes(val);
      }
    },
    suffix: {
      type: Function
    },
    tag: {
      type: String,
      validator: function validator3(val) {
        if (!val)
          return true;
        return ["button", "a", "div"].includes(val);
      }
    },
    theme: {
      type: String,
      validator: function validator4(val) {
        if (!val)
          return true;
        return ["default", "primary", "danger", "warning", "success"].includes(val);
      }
    },
    type: {
      type: String,
      "default": "button",
      validator: function validator5(val) {
        if (!val)
          return true;
        return ["submit", "reset", "button"].includes(val);
      }
    },
    variant: {
      type: String,
      "default": "base",
      validator: function validator6(val) {
        if (!val)
          return true;
        return ["base", "outline", "dashed", "text"].includes(val);
      }
    },
    onClick: Function
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var expand = EAnimationType.expand, ripple = EAnimationType.ripple, fade = EAnimationType.fade;
  function useKeepAnimation() {
    var _useConfig = useConfig("animation"), globalConfig = _useConfig.globalConfig;
    var keepAnimation = function keepAnimation2(type) {
      var _animationConfig$excl, _animationConfig$incl;
      var animationConfig = globalConfig.value;
      return animationConfig && !((_animationConfig$excl = animationConfig.exclude) !== null && _animationConfig$excl !== void 0 && _animationConfig$excl.includes(type)) && ((_animationConfig$incl = animationConfig.include) === null || _animationConfig$incl === void 0 ? void 0 : _animationConfig$incl.includes(type));
    };
    return {
      keepExpand: keepAnimation(expand),
      keepRipple: keepAnimation(ripple),
      keepFade: keepAnimation(fade)
    };
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function setStyle(el, styles) {
    var keys2 = Object.keys(styles);
    keys2.forEach(function(key2) {
      el.style[key2] = styles[key2];
    });
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var period = 200;
  var noneRippleBg = "rgba(0, 0, 0, 0)";
  var defaultRippleColor = "rgba(0, 0, 0, 0.35)";
  var getRippleColor = function getRippleColor2(el, fixedRippleColor) {
    var _el$dataset;
    if (fixedRippleColor) {
      return fixedRippleColor;
    }
    if (el !== null && el !== void 0 && (_el$dataset = el.dataset) !== null && _el$dataset !== void 0 && _el$dataset.ripple) {
      var rippleColor = el.dataset.ripple;
      return rippleColor;
    }
    var cssVariable = getComputedStyle(el).getPropertyValue("--ripple-color");
    if (cssVariable) {
      return cssVariable;
    }
    return defaultRippleColor;
  };
  function useRipple(el, fixedRippleColor) {
    var rippleContainer = vue.ref(null);
    var classPrefix = usePrefixClass();
    var _useKeepAnimation = useKeepAnimation(), keepRipple = _useKeepAnimation.keepRipple;
    var handleAddRipple = function handleAddRipple2(e) {
      var dom = el.value;
      var rippleColor = getRippleColor(dom, fixedRippleColor === null || fixedRippleColor === void 0 ? void 0 : fixedRippleColor.value);
      if (e.button !== 0 || !el || !keepRipple)
        return;
      if (dom.classList.contains("".concat(classPrefix.value, "-is-active")) || dom.classList.contains("".concat(classPrefix.value, "-is-disabled")) || dom.classList.contains("".concat(classPrefix.value, "-is-checked")) || dom.classList.contains("".concat(classPrefix.value, "-is-loading")))
        return;
      var elStyle = getComputedStyle(dom);
      var elBorder = parseInt(elStyle.borderWidth, 10);
      var border = elBorder > 0 ? elBorder : 0;
      var width = dom.offsetWidth;
      var height = dom.offsetHeight;
      if (rippleContainer.value.parentNode === null) {
        setStyle(rippleContainer.value, {
          position: "absolute",
          left: "".concat(0 - border, "px"),
          top: "".concat(0 - border, "px"),
          width: "".concat(width, "px"),
          height: "".concat(height, "px"),
          borderRadius: elStyle.borderRadius,
          pointerEvents: "none",
          overflow: "hidden"
        });
        dom.appendChild(rippleContainer.value);
      }
      var ripple2 = document.createElement("div");
      setStyle(ripple2, {
        marginTop: "0",
        marginLeft: "0",
        right: "".concat(width, "px"),
        width: "".concat(width + 20, "px"),
        height: "100%",
        transition: "transform ".concat(period, "ms cubic-bezier(.38, 0, .24, 1), background ").concat(period * 2, "ms linear"),
        transform: "skewX(-8deg)",
        pointerEvents: "none",
        position: "absolute",
        zIndex: 0,
        backgroundColor: rippleColor,
        opacity: "0.9"
      });
      var elMap = /* @__PURE__ */ new WeakMap();
      for (var n = dom.children.length, i = 0; i < n; ++i) {
        var child = dom.children[i];
        if (child.style.zIndex === "" && child !== rippleContainer.value) {
          child.style.zIndex = "1";
          elMap.set(child, true);
        }
      }
      var initPosition = dom.style.position ? dom.style.position : getComputedStyle(dom).position;
      if (initPosition === "" || initPosition === "static") {
        dom.style.position = "relative";
      }
      rippleContainer.value.insertBefore(ripple2, rippleContainer.value.firstChild);
      setTimeout(function() {
        ripple2.style.transform = "translateX(".concat(width, "px)");
      }, 0);
      var handleClearRipple = function handleClearRipple2() {
        ripple2.style.backgroundColor = noneRippleBg;
        if (!el.value)
          return;
        el.value.removeEventListener("pointerup", handleClearRipple2, false);
        el.value.removeEventListener("pointerleave", handleClearRipple2, false);
        setTimeout(function() {
          ripple2.remove();
          if (rippleContainer.value.children.length === 0)
            rippleContainer.value.remove();
        }, period * 2 + 100);
      };
      el.value.addEventListener("pointerup", handleClearRipple, false);
      el.value.addEventListener("pointerleave", handleClearRipple, false);
    };
    vue.onMounted(function() {
      var dom = el === null || el === void 0 ? void 0 : el.value;
      if (!dom)
        return;
      rippleContainer.value = document.createElement("div");
      dom.addEventListener("pointerdown", handleAddRipple, false);
    });
    vue.onUnmounted(function() {
      var _el$value;
      el === null || el === void 0 || (_el$value = el.value) === null || _el$value === void 0 || _el$value.removeEventListener("pointerdown", handleAddRipple, false);
    });
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function handleSlots(instance, name, params) {
    var _instance$slots$camel, _instance$slots, _instance$slots$kebab, _instance$slots2;
    var node = (_instance$slots$camel = (_instance$slots = instance.slots)[camelCase_1(name)]) === null || _instance$slots$camel === void 0 ? void 0 : _instance$slots$camel.call(_instance$slots, params);
    if (node && node.filter(function(t) {
      return t.type.toString() !== "Symbol(v-cmt)";
    }).length)
      return node;
    node = (_instance$slots$kebab = (_instance$slots2 = instance.slots)[kebabCase_1(name)]) === null || _instance$slots$kebab === void 0 ? void 0 : _instance$slots$kebab.call(_instance$slots2, params);
    if (node && node.filter(function(t) {
      return t.type.toString() !== "Symbol(v-cmt)";
    }).length)
      return node;
    return null;
  }
  function isEmptyNode(node) {
    if ([void 0, null, ""].includes(node))
      return true;
    var innerNodes = node instanceof Array ? node : [node];
    var r = innerNodes.filter(function(node2) {
      var _node2$type;
      return (node2 === null || node2 === void 0 || (_node2$type = node2.type) === null || _node2$type === void 0 ? void 0 : _node2$type.toString()) !== "Symbol(Comment)";
    });
    return !r.length;
  }
  var useTNodeJSX = function useTNodeJSX2() {
    var instance = vue.getCurrentInstance();
    return function(name, options) {
      var params = getParams(options);
      var defaultNode = getDefaultNode(options);
      var slotFirst = getSlotFirst(options);
      var propsNode;
      if (Object.keys(instance.props).includes(name)) {
        propsNode = instance.props[name];
      }
      if (propsNode === false)
        return;
      if (propsNode === true) {
        return handleSlots(instance, name, params) || defaultNode;
      }
      if (isFunction_1(propsNode))
        return propsNode(vue.h, params);
      var isPropsEmpty = [void 0, params, ""].includes(propsNode);
      if ((isPropsEmpty || slotFirst) && (instance.slots[camelCase_1(name)] || instance.slots[kebabCase_1(name)])) {
        return handleSlots(instance, name, params);
      }
      return propsNode;
    };
  };
  var useTNodeDefault = function useTNodeDefault2() {
    var renderTNodeJSX3 = useTNodeJSX();
    return function(name, options) {
      var defaultNode = getDefaultNode(options);
      return renderTNodeJSX3(name, options) || defaultNode;
    };
  };
  var useContent = function useContent2() {
    var renderTNodeJSX3 = useTNodeJSX();
    return function(name1, name2, options) {
      var params = getParams(options);
      var defaultNode = getDefaultNode(options);
      var toParams = params ? {
        params
      } : void 0;
      var node1 = renderTNodeJSX3(name1, toParams);
      var node2 = renderTNodeJSX3(name2, toParams);
      var res = isEmptyNode(node1) ? node2 : node1;
      return isEmptyNode(res) ? defaultNode : res;
    };
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1;
  var boolTag = "[object Boolean]";
  function isBoolean$1(value) {
    return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
  }
  var isBoolean_1 = isBoolean$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function useDisabled(context) {
    var currentInstance = vue.getCurrentInstance();
    var componentDisabled = vue.computed(function() {
      return currentInstance.props.disabled;
    });
    var formDisabled = vue.inject("formDisabled", /* @__PURE__ */ Object.create(null));
    return vue.computed(function() {
      var _formDisabled$disable;
      if (isBoolean_1(context === null || context === void 0 ? void 0 : context.beforeDisabled.value))
        return context.beforeDisabled.value;
      if (isBoolean_1(componentDisabled.value))
        return componentDisabled.value;
      if (isBoolean_1(context === null || context === void 0 ? void 0 : context.afterDisabled.value))
        return context.afterDisabled.value;
      if (isBoolean_1((_formDisabled$disable = formDisabled.disabled) === null || _formDisabled$disable === void 0 ? void 0 : _formDisabled$disable.value))
        return formDisabled.disabled.value;
      return false;
    });
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function ownKeys$u(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$u(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$u(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$u(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  var TButton = vue.defineComponent({
    name: "TButton",
    props: props$c,
    setup: function setup3(props2, _ref) {
      var attrs = _ref.attrs, slots = _ref.slots;
      var renderTNodeJSX3 = useTNodeJSX();
      var renderContent3 = useContent();
      var COMPONENT_NAME = usePrefixClass("button");
      var _useCommonClassName = useCommonClassName$2(), STATUS = _useCommonClassName.STATUS, SIZE = _useCommonClassName.SIZE;
      var btnRef = vue.ref();
      useRipple(btnRef);
      var isDisabled = useDisabled();
      var mergeTheme = vue.computed(function() {
        var theme = props2.theme, variant = props2.variant;
        if (theme)
          return theme;
        if (variant === "base")
          return "primary";
        return "default";
      });
      var buttonClass = vue.computed(function() {
        var _ref2;
        return ["".concat(COMPONENT_NAME.value), "".concat(COMPONENT_NAME.value, "--variant-").concat(props2.variant), "".concat(COMPONENT_NAME.value, "--theme-").concat(mergeTheme.value), (_ref2 = {}, _defineProperty$2(_ref2, SIZE.value[props2.size], props2.size !== "medium"), _defineProperty$2(_ref2, STATUS.value.disabled, isDisabled.value), _defineProperty$2(_ref2, STATUS.value.loading, props2.loading), _defineProperty$2(_ref2, "".concat(COMPONENT_NAME.value, "--shape-").concat(props2.shape), props2.shape !== "rectangle"), _defineProperty$2(_ref2, "".concat(COMPONENT_NAME.value, "--ghost"), props2.ghost), _defineProperty$2(_ref2, SIZE.value.block, props2.block), _ref2)];
      });
      return function() {
        var buttonContent = renderContent3("default", "content");
        var icon = props2.loading ? vue.createVNode(Loading, {
          "inheritColor": true
        }, null) : renderTNodeJSX3("icon");
        var iconOnly = icon && !buttonContent;
        var suffix2 = props2.suffix || slots.suffix ? vue.createVNode("span", {
          "className": "".concat(COMPONENT_NAME.value, "__suffix")
        }, [renderTNodeJSX3("suffix")]) : null;
        buttonContent = buttonContent ? vue.createVNode("span", {
          "class": "".concat(COMPONENT_NAME.value, "__text")
        }, [buttonContent]) : "";
        if (icon) {
          buttonContent = [icon, buttonContent];
        }
        if (suffix2) {
          buttonContent = [buttonContent].concat(suffix2);
        }
        var renderTag = function renderTag2() {
          if (!props2.tag && props2.href)
            return "a";
          return props2.tag || "button";
        };
        var buttonAttrs = {
          "class": [].concat(_toConsumableArray(buttonClass.value), [_defineProperty$2({}, "".concat(COMPONENT_NAME.value, "--icon-only"), iconOnly)]),
          type: props2.type,
          disabled: isDisabled.value || props2.loading,
          href: props2.href,
          tabindex: isDisabled.value ? void 0 : "0"
        };
        return vue.h(renderTag(), _objectSpread$u(_objectSpread$u(_objectSpread$u({
          ref: btnRef
        }, attrs), buttonAttrs), {}, {
          onClick: props2.onClick
        }), [buttonContent]);
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var Button = withInstall(TButton);
  function _defineProperty(obj, key2, value) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key2] = value;
    }
    return obj;
  }
  function ownKeys$t(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$t(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$t(Object(source), true).forEach(function(key2) {
        _defineProperty(target, key2, source[key2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$t(Object(source)).forEach(function(key2) {
        Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
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
  function renderFn(node, props2) {
    var kebabAttrs = Object.keys(node.attrs).reduce((result, key2) => {
      result[camel2Kebab(key2)] = node.attrs[key2];
      return result;
    }, {});
    return vue.h(node.tag, _objectSpread$t(_objectSpread$t({}, kebabAttrs), props2), (node.children || []).map((child) => renderFn(child, {})));
  }
  var DEFAULT_CLASS_PREFIX = "t";
  var DEFAULT_LOCALE = "zh-CN";
  var ConfigContext = {
    classPrefix: DEFAULT_CLASS_PREFIX,
    locale: DEFAULT_LOCALE
  };
  const ConfigContext$1 = ConfigContext;
  function useCommonClassName$1() {
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
    var COMMON_SIZE_CLASS_NAMES = useCommonClassName$1().SIZE;
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
  function ownKeys$s(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$s(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$s(Object(source), true).forEach(function(key2) {
        _defineProperty(target, key2, source[key2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$s(Object(source)).forEach(function(key2) {
        Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
      });
    }
    return target;
  }
  var element$d = {
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
        "d": "M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4h2z"
      }
    }]
  };
  var add$1 = vue.defineComponent({
    name: "AddIcon",
    props: {
      size: {
        type: String
      },
      onClick: {
        type: Function
      }
    },
    setup(props2, _ref) {
      var {
        attrs
      } = _ref;
      var propsSize = vue.computed(() => props2.size);
      var {
        className,
        style: style2
      } = useSizeProps(propsSize);
      var finalCls = vue.computed(() => ["t-icon", "t-icon-add", className.value]);
      var finalStyle = vue.computed(() => _objectSpread$s(_objectSpread$s({}, style2.value), attrs.style));
      var finalProps = vue.computed(() => ({
        class: finalCls.value,
        style: finalStyle.value,
        onClick: (e) => {
          var _props$onClick;
          return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
            e
          });
        }
      }));
      return () => renderFn(element$d, finalProps.value);
    }
  });
  const AddIcon = add$1;
  function ownKeys$r(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$r(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$r(Object(source), true).forEach(function(key2) {
        _defineProperty(target, key2, source[key2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$r(Object(source)).forEach(function(key2) {
        Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
      });
    }
    return target;
  }
  var element$c = {
    "tag": "svg",
    "attrs": {
      "fill": "none",
      "viewBox": "0 0 26 24",
      "width": "1em",
      "height": "1em"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "fill": "currentColor",
        "d": "M4 1.59l6.17 6.17 7.07 7.07L23.41 21 22 22.41l-2.97-2.96A12.5 12.5 0 011.08 12.3L1 12l.1-.3c.77-2.4 2.24-4.5 4.18-6.02L2.59 3 4 1.59zM6.7 7.1A10.53 10.53 0 003.1 12a10.5 10.5 0 0014.45 5.97l-1.8-1.8a5 5 0 01-6.93-6.93L6.7 7.11zm3.6 3.6a3 3 0 004 4l-4-4zM13 5c-.58 0-1.14.05-1.7.14l-.98.16L10 3.32l.99-.16A12.5 12.5 0 0124.9 11.7l.1.31-.1.3c-.41 1.3-1.03 2.5-1.82 3.58l-.59.8-1.61-1.18.59-.8c.6-.82 1.08-1.73 1.42-2.7A10.5 10.5 0 0013 5zm.51 1.93l.96.29a5 5 0 013.31 3.31l.3.96-1.92.58-.3-.95a3 3 0 00-1.98-1.99l-.95-.3.58-1.9z"
      }
    }]
  };
  var browseOff = vue.defineComponent({
    name: "BrowseOffIcon",
    props: {
      size: {
        type: String
      },
      onClick: {
        type: Function
      }
    },
    setup(props2, _ref) {
      var {
        attrs
      } = _ref;
      var propsSize = vue.computed(() => props2.size);
      var {
        className,
        style: style2
      } = useSizeProps(propsSize);
      var finalCls = vue.computed(() => ["t-icon", "t-icon-browse-off", className.value]);
      var finalStyle = vue.computed(() => _objectSpread$r(_objectSpread$r({}, style2.value), attrs.style));
      var finalProps = vue.computed(() => ({
        class: finalCls.value,
        style: finalStyle.value,
        onClick: (e) => {
          var _props$onClick;
          return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
            e
          });
        }
      }));
      return () => renderFn(element$c, finalProps.value);
    }
  });
  const BrowseOffIcon = browseOff;
  function ownKeys$q(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$q(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$q(Object(source), true).forEach(function(key2) {
        _defineProperty(target, key2, source[key2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$q(Object(source)).forEach(function(key2) {
        Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
      });
    }
    return target;
  }
  var element$b = {
    "tag": "svg",
    "attrs": {
      "fill": "none",
      "viewBox": "0 0 24 24",
      "width": "1em",
      "height": "1em"
    },
    "children": [{
      "tag": "g",
      "attrs": {
        "clipPath": "url(#clip0_8726_7319)"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "fill": "currentColor",
          "d": "M2.1 12a10.5 10.5 0 0019.8 0 10.5 10.5 0 00-19.8 0zm-2.01-.3a12.5 12.5 0 0123.82 0l.1.3-.1.3a12.5 12.5 0 01-23.82 0l-.1-.3.1-.3zM12 9a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0z"
        }
      }]
    }]
  };
  var browse = vue.defineComponent({
    name: "BrowseIcon",
    props: {
      size: {
        type: String
      },
      onClick: {
        type: Function
      }
    },
    setup(props2, _ref) {
      var {
        attrs
      } = _ref;
      var propsSize = vue.computed(() => props2.size);
      var {
        className,
        style: style2
      } = useSizeProps(propsSize);
      var finalCls = vue.computed(() => ["t-icon", "t-icon-browse", className.value]);
      var finalStyle = vue.computed(() => _objectSpread$q(_objectSpread$q({}, style2.value), attrs.style));
      var finalProps = vue.computed(() => ({
        class: finalCls.value,
        style: finalStyle.value,
        onClick: (e) => {
          var _props$onClick;
          return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
            e
          });
        }
      }));
      return () => renderFn(element$b, finalProps.value);
    }
  });
  const BrowseIcon = browse;
  function ownKeys$p(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$p(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$p(Object(source), true).forEach(function(key2) {
        _defineProperty(target, key2, source[key2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$p(Object(source)).forEach(function(key2) {
        Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
      });
    }
    return target;
  }
  var element$a = {
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
        "d": "M12 23a11 11 0 100-22 11 11 0 000 22zM7.5 10.59l3 3 6-6L17.91 9l-7.41 7.41L6.09 12l1.41-1.41z"
      }
    }]
  };
  var checkCircleFilled = vue.defineComponent({
    name: "CheckCircleFilledIcon",
    props: {
      size: {
        type: String
      },
      onClick: {
        type: Function
      }
    },
    setup(props2, _ref) {
      var {
        attrs
      } = _ref;
      var propsSize = vue.computed(() => props2.size);
      var {
        className,
        style: style2
      } = useSizeProps(propsSize);
      var finalCls = vue.computed(() => ["t-icon", "t-icon-check-circle-filled", className.value]);
      var finalStyle = vue.computed(() => _objectSpread$p(_objectSpread$p({}, style2.value), attrs.style));
      var finalProps = vue.computed(() => ({
        class: finalCls.value,
        style: finalStyle.value,
        onClick: (e) => {
          var _props$onClick;
          return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
            e
          });
        }
      }));
      return () => renderFn(element$a, finalProps.value);
    }
  });
  const CheckCircleFilledIcon = checkCircleFilled;
  function ownKeys$o(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$o(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$o(Object(source), true).forEach(function(key2) {
        _defineProperty(target, key2, source[key2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$o(Object(source)).forEach(function(key2) {
        Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
      });
    }
    return target;
  }
  var element$9 = {
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
        "d": "M20.99 7.38l-10.61 10.6L4 11.63l1.42-1.41 4.95 4.95 9.2-9.2 1.4 1.42z"
      }
    }]
  };
  var check = vue.defineComponent({
    name: "CheckIcon",
    props: {
      size: {
        type: String
      },
      onClick: {
        type: Function
      }
    },
    setup(props2, _ref) {
      var {
        attrs
      } = _ref;
      var propsSize = vue.computed(() => props2.size);
      var {
        className,
        style: style2
      } = useSizeProps(propsSize);
      var finalCls = vue.computed(() => ["t-icon", "t-icon-check", className.value]);
      var finalStyle = vue.computed(() => _objectSpread$o(_objectSpread$o({}, style2.value), attrs.style));
      var finalProps = vue.computed(() => ({
        class: finalCls.value,
        style: finalStyle.value,
        onClick: (e) => {
          var _props$onClick;
          return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
            e
          });
        }
      }));
      return () => renderFn(element$9, finalProps.value);
    }
  });
  const CheckIcon = check;
  function ownKeys$n(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$n(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$n(Object(source), true).forEach(function(key2) {
        _defineProperty(target, key2, source[key2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$n(Object(source)).forEach(function(key2) {
        Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
      });
    }
    return target;
  }
  var element$8 = {
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
        "d": "M17.5 8.09l-5.5 5.5-5.5-5.5L5.09 9.5 12 16.41l6.91-6.91-1.41-1.41z"
      }
    }]
  };
  var chevronDown = vue.defineComponent({
    name: "ChevronDownIcon",
    props: {
      size: {
        type: String
      },
      onClick: {
        type: Function
      }
    },
    setup(props2, _ref) {
      var {
        attrs
      } = _ref;
      var propsSize = vue.computed(() => props2.size);
      var {
        className,
        style: style2
      } = useSizeProps(propsSize);
      var finalCls = vue.computed(() => ["t-icon", "t-icon-chevron-down", className.value]);
      var finalStyle = vue.computed(() => _objectSpread$n(_objectSpread$n({}, style2.value), attrs.style));
      var finalProps = vue.computed(() => ({
        class: finalCls.value,
        style: finalStyle.value,
        onClick: (e) => {
          var _props$onClick;
          return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
            e
          });
        }
      }));
      return () => renderFn(element$8, finalProps.value);
    }
  });
  const ChevronDownIcon = chevronDown;
  function ownKeys$m(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$m(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$m(Object(source), true).forEach(function(key2) {
        _defineProperty(target, key2, source[key2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$m(Object(source)).forEach(function(key2) {
        Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
      });
    }
    return target;
  }
  var element$7 = {
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
        "d": "M17.5 15.91l-5.5-5.5-5.5 5.5-1.41-1.41L12 7.59l6.91 6.91-1.41 1.41z"
      }
    }]
  };
  var chevronUp = vue.defineComponent({
    name: "ChevronUpIcon",
    props: {
      size: {
        type: String
      },
      onClick: {
        type: Function
      }
    },
    setup(props2, _ref) {
      var {
        attrs
      } = _ref;
      var propsSize = vue.computed(() => props2.size);
      var {
        className,
        style: style2
      } = useSizeProps(propsSize);
      var finalCls = vue.computed(() => ["t-icon", "t-icon-chevron-up", className.value]);
      var finalStyle = vue.computed(() => _objectSpread$m(_objectSpread$m({}, style2.value), attrs.style));
      var finalProps = vue.computed(() => ({
        class: finalCls.value,
        style: finalStyle.value,
        onClick: (e) => {
          var _props$onClick;
          return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
            e
          });
        }
      }));
      return () => renderFn(element$7, finalProps.value);
    }
  });
  const ChevronUpIcon = chevronUp;
  function ownKeys$l(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$l(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$l(Object(source), true).forEach(function(key2) {
        _defineProperty(target, key2, source[key2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$l(Object(source)).forEach(function(key2) {
        Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
      });
    }
    return target;
  }
  var element$6 = {
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
        "d": "M12 23a11 11 0 100-22 11 11 0 000 22zM8.82 7.4L12 10.6l3.18-3.19 1.42 1.42L13.4 12l3.19 3.18-1.42 1.42L12 13.4 8.82 16.6 7.4 15.18 10.6 12 7.4 8.82 8.82 7.4z"
      }
    }]
  };
  var closeCircleFilled = vue.defineComponent({
    name: "CloseCircleFilledIcon",
    props: {
      size: {
        type: String
      },
      onClick: {
        type: Function
      }
    },
    setup(props2, _ref) {
      var {
        attrs
      } = _ref;
      var propsSize = vue.computed(() => props2.size);
      var {
        className,
        style: style2
      } = useSizeProps(propsSize);
      var finalCls = vue.computed(() => ["t-icon", "t-icon-close-circle-filled", className.value]);
      var finalStyle = vue.computed(() => _objectSpread$l(_objectSpread$l({}, style2.value), attrs.style));
      var finalProps = vue.computed(() => ({
        class: finalCls.value,
        style: finalStyle.value,
        onClick: (e) => {
          var _props$onClick;
          return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
            e
          });
        }
      }));
      return () => renderFn(element$6, finalProps.value);
    }
  });
  const CloseCircleFilledIcon = closeCircleFilled;
  function ownKeys$k(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$k(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$k(Object(source), true).forEach(function(key2) {
        _defineProperty(target, key2, source[key2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$k(Object(source)).forEach(function(key2) {
        Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
      });
    }
    return target;
  }
  var element$5 = {
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
        "d": "M7.05 5.64L12 10.59l4.95-4.95 1.41 1.41L13.41 12l4.95 4.95-1.41 1.41L12 13.41l-4.95 4.95-1.41-1.41L10.59 12 5.64 7.05l1.41-1.41z"
      }
    }]
  };
  var close = vue.defineComponent({
    name: "CloseIcon",
    props: {
      size: {
        type: String
      },
      onClick: {
        type: Function
      }
    },
    setup(props2, _ref) {
      var {
        attrs
      } = _ref;
      var propsSize = vue.computed(() => props2.size);
      var {
        className,
        style: style2
      } = useSizeProps(propsSize);
      var finalCls = vue.computed(() => ["t-icon", "t-icon-close", className.value]);
      var finalStyle = vue.computed(() => _objectSpread$k(_objectSpread$k({}, style2.value), attrs.style));
      var finalProps = vue.computed(() => ({
        class: finalCls.value,
        style: finalStyle.value,
        onClick: (e) => {
          var _props$onClick;
          return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
            e
          });
        }
      }));
      return () => renderFn(element$5, finalProps.value);
    }
  });
  const CloseIcon = close;
  function ownKeys$j(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$j(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$j(Object(source), true).forEach(function(key2) {
        _defineProperty(target, key2, source[key2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$j(Object(source)).forEach(function(key2) {
        Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
      });
    }
    return target;
  }
  var element$4 = {
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
        "d": "M12 1a11 11 0 110 22 11 11 0 010-22zm-1 13h2V6.5h-2V14zm2 1.5h-2v2h2v-2z"
      }
    }]
  };
  var errorCircleFilled = vue.defineComponent({
    name: "ErrorCircleFilledIcon",
    props: {
      size: {
        type: String
      },
      onClick: {
        type: Function
      }
    },
    setup(props2, _ref) {
      var {
        attrs
      } = _ref;
      var propsSize = vue.computed(() => props2.size);
      var {
        className,
        style: style2
      } = useSizeProps(propsSize);
      var finalCls = vue.computed(() => ["t-icon", "t-icon-error-circle-filled", className.value]);
      var finalStyle = vue.computed(() => _objectSpread$j(_objectSpread$j({}, style2.value), attrs.style));
      var finalProps = vue.computed(() => ({
        class: finalCls.value,
        style: finalStyle.value,
        onClick: (e) => {
          var _props$onClick;
          return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
            e
          });
        }
      }));
      return () => renderFn(element$4, finalProps.value);
    }
  });
  const ErrorCircleFilledIcon = errorCircleFilled;
  function ownKeys$i(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$i(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$i(Object(source), true).forEach(function(key2) {
        _defineProperty(target, key2, source[key2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$i(Object(source)).forEach(function(key2) {
        Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
      });
    }
    return target;
  }
  var element$3 = {
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
        "d": "M13 2v14.5h-2V2h2zm-2 17h2v2h-2v-2z"
      }
    }]
  };
  var error = vue.defineComponent({
    name: "ErrorIcon",
    props: {
      size: {
        type: String
      },
      onClick: {
        type: Function
      }
    },
    setup(props2, _ref) {
      var {
        attrs
      } = _ref;
      var propsSize = vue.computed(() => props2.size);
      var {
        className,
        style: style2
      } = useSizeProps(propsSize);
      var finalCls = vue.computed(() => ["t-icon", "t-icon-error", className.value]);
      var finalStyle = vue.computed(() => _objectSpread$i(_objectSpread$i({}, style2.value), attrs.style));
      var finalProps = vue.computed(() => ({
        class: finalCls.value,
        style: finalStyle.value,
        onClick: (e) => {
          var _props$onClick;
          return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
            e
          });
        }
      }));
      return () => renderFn(element$3, finalProps.value);
    }
  });
  const ErrorIcon = error;
  function ownKeys$h(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$h(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$h(Object(source), true).forEach(function(key2) {
        _defineProperty(target, key2, source[key2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$h(Object(source)).forEach(function(key2) {
        Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
      });
    }
    return target;
  }
  var element$2 = {
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
        "d": "M12 23a11 11 0 100-22 11 11 0 000 22zm-.17-11.11c.43-.53.97-.97 1.4-1.32A2 2 0 0012 7a2 2 0 00-1.89 1.33l-.33.95L7.9 8.6l.34-.94a4 4 0 116.24 4.47 7 7 0 00-1.1 1.01c-.27.34-.37.61-.37.85v1.25h-2V14c0-.87.39-1.57.83-2.11zM11 18.25v-2h2v2h-2z"
      }
    }]
  };
  var helpCircleFilled = vue.defineComponent({
    name: "HelpCircleFilledIcon",
    props: {
      size: {
        type: String
      },
      onClick: {
        type: Function
      }
    },
    setup(props2, _ref) {
      var {
        attrs
      } = _ref;
      var propsSize = vue.computed(() => props2.size);
      var {
        className,
        style: style2
      } = useSizeProps(propsSize);
      var finalCls = vue.computed(() => ["t-icon", "t-icon-help-circle-filled", className.value]);
      var finalStyle = vue.computed(() => _objectSpread$h(_objectSpread$h({}, style2.value), attrs.style));
      var finalProps = vue.computed(() => ({
        class: finalCls.value,
        style: finalStyle.value,
        onClick: (e) => {
          var _props$onClick;
          return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
            e
          });
        }
      }));
      return () => renderFn(element$2, finalProps.value);
    }
  });
  const HelpCircleFilledIcon = helpCircleFilled;
  function ownKeys$g(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$g(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$g(Object(source), true).forEach(function(key2) {
        _defineProperty(target, key2, source[key2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$g(Object(source)).forEach(function(key2) {
        Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
      });
    }
    return target;
  }
  var element$1 = {
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
        "d": "M12 23a11 11 0 100-22 11 11 0 000 22zM11 8.5v-2h2v2h-2zm2 1.5v7.5h-2V10h2z"
      }
    }]
  };
  var infoCircleFilled = vue.defineComponent({
    name: "InfoCircleFilledIcon",
    props: {
      size: {
        type: String
      },
      onClick: {
        type: Function
      }
    },
    setup(props2, _ref) {
      var {
        attrs
      } = _ref;
      var propsSize = vue.computed(() => props2.size);
      var {
        className,
        style: style2
      } = useSizeProps(propsSize);
      var finalCls = vue.computed(() => ["t-icon", "t-icon-info-circle-filled", className.value]);
      var finalStyle = vue.computed(() => _objectSpread$g(_objectSpread$g({}, style2.value), attrs.style));
      var finalProps = vue.computed(() => ({
        class: finalCls.value,
        style: finalStyle.value,
        onClick: (e) => {
          var _props$onClick;
          return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
            e
          });
        }
      }));
      return () => renderFn(element$1, finalProps.value);
    }
  });
  const InfoCircleFilledIcon = infoCircleFilled;
  function ownKeys$f(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$f(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$f(Object(source), true).forEach(function(key2) {
        _defineProperty(target, key2, source[key2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$f(Object(source)).forEach(function(key2) {
        Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
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
        "d": "M4 11h16v2H4v-2z"
      }
    }]
  };
  var remove = vue.defineComponent({
    name: "RemoveIcon",
    props: {
      size: {
        type: String
      },
      onClick: {
        type: Function
      }
    },
    setup(props2, _ref) {
      var {
        attrs
      } = _ref;
      var propsSize = vue.computed(() => props2.size);
      var {
        className,
        style: style2
      } = useSizeProps(propsSize);
      var finalCls = vue.computed(() => ["t-icon", "t-icon-remove", className.value]);
      var finalStyle = vue.computed(() => _objectSpread$f(_objectSpread$f({}, style2.value), attrs.style));
      var finalProps = vue.computed(() => ({
        class: finalCls.value,
        style: finalStyle.value,
        onClick: (e) => {
          var _props$onClick;
          return (_props$onClick = props2.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props2, {
            e
          });
        }
      }));
      return () => renderFn(element, finalProps.value);
    }
  });
  const RemoveIcon = remove;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var props$b = {
    align: {
      type: String,
      validator: function validator7(val) {
        if (!val)
          return true;
        return ["start", "end", "center", "baseline"].includes(val);
      }
    },
    breakLine: Boolean,
    direction: {
      type: String,
      "default": "horizontal",
      validator: function validator8(val) {
        if (!val)
          return true;
        return ["vertical", "horizontal"].includes(val);
      }
    },
    separator: {
      type: [String, Function]
    },
    size: {
      type: [String, Number, Array],
      "default": "medium"
    }
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function useChildComponentSlots() {
    var instance = vue.getCurrentInstance();
    return function(childComponentName, slots) {
      var _slots, _slots$default;
      if (!slots) {
        slots = instance.slots;
      }
      var content = ((_slots = slots) === null || _slots === void 0 || (_slots$default = _slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(_slots)) || [];
      var childList = [];
      var getChildren = function getChildren2(content2) {
        if (!isArray_1(content2))
          return;
        content2.forEach(function(item) {
          if (item.children && isArray_1(item.children)) {
            if (item.type !== vue.Fragment)
              return;
            getChildren2(item.children);
          } else {
            childList.push(item);
          }
        });
        return childList;
      };
      return getChildren(content).filter(function(item) {
        var _item$type$name;
        return (_item$type$name = item.type.name) === null || _item$type$name === void 0 ? void 0 : _item$type$name.endsWith(childComponentName);
      });
    };
  }
  function useChildSlots() {
    var instance = vue.getCurrentInstance();
    return function() {
      var _slots$default2;
      var slots = instance.slots;
      var content = (slots === null || slots === void 0 || (_slots$default2 = slots["default"]) === null || _slots$default2 === void 0 ? void 0 : _slots$default2.call(slots)) || [];
      return content.filter(function(item) {
        if (_typeof(item.type) === "symbol" && !item.children) {
          return false;
        }
        return item.type !== vue.Comment;
      }).map(function(item) {
        if (item.children && isArray_1(item.children) && item.type === vue.Fragment)
          return item.children;
        return item;
      }).flat();
    };
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function ownKeys$e(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$e(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$e(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$e(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  var _Space = vue.defineComponent({
    name: "TSpace",
    props: _objectSpread$e({}, props$b),
    setup: function setup4(props2) {
      var COMPONENT_NAME = usePrefixClass("space");
      var renderTNodeJSX3 = useTNodeJSX();
      var getChildSlots = useChildSlots();
      var renderStyle = vue.computed(function() {
        var sizeMap = {
          small: "8px",
          medium: "16px",
          large: "24px"
        };
        var renderGap = "";
        if (isArray_1(props2.size)) {
          renderGap = props2.size.map(function(s) {
            if (isNumber_1(s))
              return "".concat(s, "px");
            if (isString_1(s))
              return sizeMap[s] || s;
            return s;
          }).join(" ");
        } else if (isString_1(props2.size)) {
          renderGap = sizeMap[props2.size] || props2.size;
        } else if (isNumber_1(props2.size)) {
          renderGap = "".concat(props2.size, "px");
        }
        return _objectSpread$e({
          gap: renderGap
        }, props2.breakLine ? {
          "flex-wrap": "wrap"
        } : {});
      });
      function renderChildren() {
        var children = getChildSlots();
        var separatorContent = renderTNodeJSX3("separator");
        return children.map(function(child, index2) {
          var showSeparator = index2 + 1 !== children.length && separatorContent;
          return vue.createVNode(vue.Fragment, null, [vue.createVNode("div", {
            "class": "".concat(COMPONENT_NAME.value, "-item")
          }, [child]), showSeparator && vue.createVNode("div", {
            "class": "".concat(COMPONENT_NAME.value, "-item-separator")
          }, [separatorContent])]);
        });
      }
      return function() {
        var _ref;
        var spaceClassNames = ["".concat(COMPONENT_NAME.value), (_ref = {}, _defineProperty$2(_ref, "".concat(COMPONENT_NAME.value, "-align-").concat(props2.align), props2.align), _defineProperty$2(_ref, "".concat(COMPONENT_NAME.value, "-").concat(props2.direction), props2.direction), _ref)];
        return vue.createVNode("div", {
          "class": spaceClassNames,
          "style": renderStyle.value
        }, [renderChildren()]);
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var Space = withInstall(_Space);
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key2, arg) {
    try {
      var info3 = gen[key2](arg);
      var value = info3.value;
    } catch (error4) {
      reject(error4);
      return;
    }
    if (info3.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn2) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn2.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var regeneratorRuntime$2 = { exports: {} };
  var _typeof$1 = { exports: {} };
  (function(module) {
    function _typeof2(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(o);
    }
    module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(_typeof$1);
  (function(module) {
    var _typeof2 = _typeof$1.exports["default"];
    function _regeneratorRuntime() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      module.exports = _regeneratorRuntime = function _regeneratorRuntime2() {
        return e;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
        t2[e2] = r2.value;
      }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
      function define(t2, e2, r2) {
        return Object.defineProperty(t2, e2, {
          value: r2,
          enumerable: true,
          configurable: true,
          writable: true
        }), t2[e2];
      }
      try {
        define({}, "");
      } catch (t2) {
        define = function define2(t3, e2, r2) {
          return t3[e2] = r2;
        };
      }
      function wrap(t2, e2, r2, n2) {
        var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
        return o(a2, "_invoke", {
          value: makeInvokeMethod(t2, r2, c2)
        }), a2;
      }
      function tryCatch(t2, e2, r2) {
        try {
          return {
            type: "normal",
            arg: t2.call(e2, r2)
          };
        } catch (t3) {
          return {
            type: "throw",
            arg: t3
          };
        }
      }
      e.wrap = wrap;
      var h2 = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var p = {};
      define(p, a, function() {
        return this;
      });
      var d = Object.getPrototypeOf, v = d && d(d(values([])));
      v && v !== r && n.call(v, a) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
      function defineIteratorMethods(t2) {
        ["next", "throw", "return"].forEach(function(e2) {
          define(t2, e2, function(t3) {
            return this._invoke(e2, t3);
          });
        });
      }
      function AsyncIterator(t2, e2) {
        function invoke(r3, o2, i2, a2) {
          var c2 = tryCatch(t2[r3], t2, o2);
          if ("throw" !== c2.type) {
            var u2 = c2.arg, h3 = u2.value;
            return h3 && "object" == _typeof2(h3) && n.call(h3, "__await") ? e2.resolve(h3.__await).then(function(t3) {
              invoke("next", t3, i2, a2);
            }, function(t3) {
              invoke("throw", t3, i2, a2);
            }) : e2.resolve(h3).then(function(t3) {
              u2.value = t3, i2(u2);
            }, function(t3) {
              return invoke("throw", t3, i2, a2);
            });
          }
          a2(c2.arg);
        }
        var r2;
        o(this, "_invoke", {
          value: function value(t3, n2) {
            function callInvokeWithMethodAndArg() {
              return new e2(function(e3, r3) {
                invoke(t3, n2, e3, r3);
              });
            }
            return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          }
        });
      }
      function makeInvokeMethod(e2, r2, n2) {
        var o2 = h2;
        return function(i2, a2) {
          if (o2 === f)
            throw new Error("Generator is already running");
          if (o2 === s) {
            if ("throw" === i2)
              throw a2;
            return {
              value: t,
              done: true
            };
          }
          for (n2.method = i2, n2.arg = a2; ; ) {
            var c2 = n2.delegate;
            if (c2) {
              var u2 = maybeInvokeDelegate(c2, n2);
              if (u2) {
                if (u2 === y)
                  continue;
                return u2;
              }
            }
            if ("next" === n2.method)
              n2.sent = n2._sent = n2.arg;
            else if ("throw" === n2.method) {
              if (o2 === h2)
                throw o2 = s, n2.arg;
              n2.dispatchException(n2.arg);
            } else
              "return" === n2.method && n2.abrupt("return", n2.arg);
            o2 = f;
            var p2 = tryCatch(e2, r2, n2);
            if ("normal" === p2.type) {
              if (o2 = n2.done ? s : l, p2.arg === y)
                continue;
              return {
                value: p2.arg,
                done: n2.done
              };
            }
            "throw" === p2.type && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
          }
        };
      }
      function maybeInvokeDelegate(e2, r2) {
        var n2 = r2.method, o2 = e2.iterator[n2];
        if (o2 === t)
          return r2.delegate = null, "throw" === n2 && e2.iterator["return"] && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), "throw" === r2.method) || "return" !== n2 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
        var i2 = tryCatch(o2, e2.iterator, r2.arg);
        if ("throw" === i2.type)
          return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
        var a2 = i2.arg;
        return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
      }
      function pushTryEntry(t2) {
        var e2 = {
          tryLoc: t2[0]
        };
        1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
      }
      function resetTryEntry(t2) {
        var e2 = t2.completion || {};
        e2.type = "normal", delete e2.arg, t2.completion = e2;
      }
      function Context(t2) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t2.forEach(pushTryEntry, this), this.reset(true);
      }
      function values(e2) {
        if (e2 || "" === e2) {
          var r2 = e2[a];
          if (r2)
            return r2.call(e2);
          if ("function" == typeof e2.next)
            return e2;
          if (!isNaN(e2.length)) {
            var o2 = -1, i2 = function next() {
              for (; ++o2 < e2.length; )
                if (n.call(e2, o2))
                  return next.value = e2[o2], next.done = false, next;
              return next.value = t, next.done = true, next;
            };
            return i2.next = i2;
          }
        }
        throw new TypeError(_typeof2(e2) + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
      }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
      }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
        var e2 = "function" == typeof t2 && t2.constructor;
        return !!e2 && (e2 === GeneratorFunction || "GeneratorFunction" === (e2.displayName || e2.name));
      }, e.mark = function(t2) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
      }, e.awrap = function(t2) {
        return {
          __await: t2
        };
      }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
        void 0 === i2 && (i2 = Promise);
        var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
        return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
          return t3.done ? t3.value : a2.next();
        });
      }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
      }), define(g, "toString", function() {
        return "[object Generator]";
      }), e.keys = function(t2) {
        var e2 = Object(t2), r2 = [];
        for (var n2 in e2)
          r2.push(n2);
        return r2.reverse(), function next() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return next.value = t3, next.done = false, next;
          }
          return next.done = true, next;
        };
      }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e2) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
            for (var r2 in this)
              "t" === r2.charAt(0) && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
        },
        stop: function stop() {
          this.done = true;
          var t2 = this.tryEntries[0].completion;
          if ("throw" === t2.type)
            throw t2.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(e2) {
          if (this.done)
            throw e2;
          var r2 = this;
          function handle(n2, o3) {
            return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
          }
          for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
            var i2 = this.tryEntries[o2], a2 = i2.completion;
            if ("root" === i2.tryLoc)
              return handle("end");
            if (i2.tryLoc <= this.prev) {
              var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
              if (c2 && u2) {
                if (this.prev < i2.catchLoc)
                  return handle(i2.catchLoc, true);
                if (this.prev < i2.finallyLoc)
                  return handle(i2.finallyLoc);
              } else if (c2) {
                if (this.prev < i2.catchLoc)
                  return handle(i2.catchLoc, true);
              } else {
                if (!u2)
                  throw new Error("try statement without catch or finally");
                if (this.prev < i2.finallyLoc)
                  return handle(i2.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(t2, e2) {
          for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
            var o2 = this.tryEntries[r2];
            if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
              var i2 = o2;
              break;
            }
          }
          i2 && ("break" === t2 || "continue" === t2) && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
          var a2 = i2 ? i2.completion : {};
          return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
        },
        complete: function complete(t2, e2) {
          if ("throw" === t2.type)
            throw t2.arg;
          return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e2 && (this.next = e2), y;
        },
        finish: function finish(t2) {
          for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
            var r2 = this.tryEntries[e2];
            if (r2.finallyLoc === t2)
              return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
          }
        },
        "catch": function _catch(t2) {
          for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
            var r2 = this.tryEntries[e2];
            if (r2.tryLoc === t2) {
              var n2 = r2.completion;
              if ("throw" === n2.type) {
                var o2 = n2.arg;
                resetTryEntry(r2);
              }
              return o2;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e2, r2, n2) {
          return this.delegate = {
            iterator: values(e2),
            resultName: r2,
            nextLoc: n2
          }, "next" === this.method && (this.arg = t), y;
        }
      }, e;
    }
    module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(regeneratorRuntime$2);
  /* @__PURE__ */ getDefaultExportFromCjs(regeneratorRuntime$2.exports);
  var runtime = regeneratorRuntime$2.exports();
  var regenerator = runtime;
  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
      globalThis.regeneratorRuntime = runtime;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var THEME_LIST = ["info", "success", "warning", "error", "question", "loading"];
  var DISTANCE = "32px";
  var PLACEMENT_OFFSET = {
    top: {
      top: DISTANCE,
      left: "50%",
      transform: "translateX(-50%)"
    },
    center: {
      left: "50%",
      top: "50%",
      transform: "translateX(-50%) translateY(-50%)"
    },
    left: {
      left: DISTANCE,
      top: "50%",
      transform: "translateY(-50%)"
    },
    bottom: {
      bottom: DISTANCE,
      left: "50%",
      transform: "translateX(-50%)"
    },
    right: {
      right: DISTANCE,
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end"
    },
    "top-left": {
      left: DISTANCE,
      top: DISTANCE
    },
    "top-right": {
      right: DISTANCE,
      top: DISTANCE,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end"
    },
    "bottom-right": {
      right: DISTANCE,
      bottom: DISTANCE,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end"
    },
    "bottom-left": {
      left: DISTANCE,
      bottom: DISTANCE
    }
  };
  var PLACEMENT_LIST = Object.keys(PLACEMENT_OFFSET);
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var props$a = {
    closeBtn: {
      type: [String, Boolean, Function],
      "default": void 0
    },
    content: {
      type: [String, Function]
    },
    duration: {
      type: Number,
      "default": 3e3
    },
    icon: {
      type: [Boolean, Function],
      "default": true
    },
    theme: {
      type: String,
      "default": "info",
      validator: function validator9(val) {
        if (!val)
          return true;
        return ["info", "success", "warning", "error", "question", "loading"].includes(val);
      }
    },
    onClose: Function,
    onCloseBtnClick: Function,
    onDurationEnd: Function
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function useGlobalIcon(tdIcon) {
    var _useConfig = useConfig("icon"), globalConfig = _useConfig.globalConfig;
    var resultIcon = {};
    Object.keys(tdIcon).forEach(function(key2) {
      var _globalConfig$value;
      resultIcon[key2] = ((_globalConfig$value = globalConfig.value) === null || _globalConfig$value === void 0 ? void 0 : _globalConfig$value[key2]) || tdIcon[key2];
    });
    return resultIcon;
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var ANIMATION_OPTION = {
    duration: 200,
    easing: "linear"
  };
  function fadeIn(dom, placement) {
    if (!dom)
      return;
    var offsetWidth = (dom === null || dom === void 0 ? void 0 : dom.offsetWidth) || 0;
    var offsetHeight = (dom === null || dom === void 0 ? void 0 : dom.offsetHeight) || 0;
    var fadeInKeyframes = getFadeInKeyframes(placement, offsetWidth, offsetHeight);
    if (!fadeInKeyframes)
      return;
    var styleAfterFadeIn = fadeInKeyframes[fadeInKeyframes.length - 1];
    setDomStyleAfterAnimation(dom, styleAfterFadeIn);
    dom.animate && dom.animate(fadeInKeyframes, ANIMATION_OPTION);
  }
  function fadeOut(dom, placement, onFinish) {
    if (!dom)
      return;
    var offsetHeight = (dom === null || dom === void 0 ? void 0 : dom.offsetHeight) || 0;
    var fadeOutKeyframes = getFadeOutKeyframes(placement, offsetHeight);
    if (!fadeOutKeyframes)
      return onFinish();
    var styleAfterFadeOut = fadeOutKeyframes[fadeOutKeyframes.length - 1];
    setDomStyleAfterAnimation(dom, styleAfterFadeOut);
    var animation = dom.animate && dom.animate(fadeOutKeyframes, ANIMATION_OPTION);
    if (animation) {
      animation.onfinish = function() {
        dom.style.display = "none";
        onFinish();
      };
    } else {
      dom.style.display = "none";
      onFinish();
    }
  }
  function setDomStyleAfterAnimation(dom, styleAfterAnimation) {
    var keys2 = Object.keys(styleAfterAnimation);
    for (var i = 0; i < keys2.length; i += 1) {
      var key2 = keys2[i];
      dom.style[key2] = styleAfterAnimation[key2];
    }
  }
  function getFadeInKeyframes(placement, offsetWidth, offsetHeight) {
    if (!PLACEMENT_LIST.includes(placement))
      return null;
    if (["top-left", "left", "bottom-left"].includes(placement)) {
      return [{
        opacity: 0,
        marginLeft: "-".concat(offsetWidth, "px")
      }, {
        opacity: 1,
        marginLeft: "0"
      }];
    }
    if (["top-right", "right", "bottom-right"].includes(placement)) {
      return [{
        opacity: 0,
        marginRight: "-".concat(offsetWidth, "px")
      }, {
        opacity: 1,
        marginRight: "0"
      }];
    }
    if (["top", "center"].includes(placement)) {
      return [{
        opacity: 0,
        marginTop: "-".concat(offsetHeight, "px")
      }, {
        opacity: 1,
        marginTop: "0"
      }];
    }
    if (["bottom"].includes(placement)) {
      return [{
        opacity: 0,
        transform: "translate3d(0, ".concat(offsetHeight, "px, 0)")
      }, {
        opacity: 1,
        transform: "translate3d(0, 0, 0)"
      }];
    }
  }
  function getFadeOutKeyframes(placement, offsetHeight) {
    if (!PLACEMENT_LIST.includes(placement))
      return null;
    if (["bottom-left", "bottom", "bottom-right"].includes(placement)) {
      var marginOffset2 = "".concat(offsetHeight, "px");
      return [{
        opacity: 1,
        marginTop: "0px"
      }, {
        opacity: 0,
        marginTop: marginOffset2
      }];
    }
    var marginOffset = "-".concat(offsetHeight, "px");
    return [{
      opacity: 1,
      marginTop: "0px"
    }, {
      opacity: 0,
      marginTop: marginOffset
    }];
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function ownKeys$d(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$d(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$d(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$d(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  var _Message = vue.defineComponent({
    name: "TMessage",
    props: _objectSpread$d(_objectSpread$d({}, props$a), {}, {
      placement: String
    }),
    setup: function setup5(props2, _ref) {
      var slots = _ref.slots, expose = _ref.expose;
      var COMPONENT_NAME = usePrefixClass("message");
      var _useGlobalIcon = useGlobalIcon({
        InfoCircleFilledIcon,
        CheckCircleFilledIcon,
        ErrorCircleFilledIcon,
        HelpCircleFilledIcon,
        CloseIcon
      }), InfoCircleFilledIcon$1 = _useGlobalIcon.InfoCircleFilledIcon, CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon, ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon, HelpCircleFilledIcon$1 = _useGlobalIcon.HelpCircleFilledIcon, CloseIcon$1 = _useGlobalIcon.CloseIcon;
      var classPrefix = usePrefixClass();
      var renderTNode = useTNodeJSX();
      var renderContent3 = useContent();
      var msgRef = vue.ref(null);
      var timer = vue.ref(null);
      var classes = vue.computed(function() {
        var status = {};
        THEME_LIST.forEach(function(t) {
          return status["".concat(classPrefix.value, "-is-").concat(t)] = props2.theme === t;
        });
        return [COMPONENT_NAME.value, status, _defineProperty$2({}, "".concat(classPrefix.value, "-is-closable"), props2.closeBtn || slots.closeBtn)];
      });
      var close3 = function close4(e) {
        var _props2$onClose, _props2$onCloseBtnCli;
        (_props2$onClose = props2.onClose) === null || _props2$onClose === void 0 || _props2$onClose.call(props2, {
          trigger: "close-click",
          e
        });
        (_props2$onCloseBtnCli = props2.onCloseBtnClick) === null || _props2$onCloseBtnCli === void 0 || _props2$onCloseBtnCli.call(props2, {
          e
        });
      };
      var clearTimer = function clearTimer2() {
        props2.duration && clearTimeout(timer.value);
      };
      var setTimer = function setTimer2() {
        if (!props2.duration) {
          return;
        }
        timer.value = Number(setTimeout(function() {
          clearTimer();
          var msgDom = msgRef.value;
          fadeOut(msgDom, props2.placement, function() {
            var _props2$onClose2, _props2$onDurationEnd;
            (_props2$onClose2 = props2.onClose) === null || _props2$onClose2 === void 0 || _props2$onClose2.call(props2, {
              trigger: "duration-end"
            });
            (_props2$onDurationEnd = props2.onDurationEnd) === null || _props2$onDurationEnd === void 0 || _props2$onDurationEnd.call(props2);
          });
        }, props2.duration));
      };
      var renderClose = function renderClose2() {
        var defaultClose = vue.createVNode(CloseIcon$1, null, null);
        return vue.createVNode("span", {
          "class": "".concat(COMPONENT_NAME.value, "__close"),
          "onClick": close3
        }, [renderTNode("closeBtn", defaultClose)]);
      };
      var renderIcon = function renderIcon2() {
        if (props2.icon === false)
          return;
        if (isFunction_1(props2.icon))
          return props2.icon(vue.h);
        if (slots.icon) {
          return slots.icon(null);
        }
        var Icon = {
          info: InfoCircleFilledIcon$1,
          success: CheckCircleFilledIcon$1,
          warning: ErrorCircleFilledIcon$1,
          error: ErrorCircleFilledIcon$1,
          question: HelpCircleFilledIcon$1,
          loading: Loading
        }[props2.theme];
        return vue.createVNode(Icon, null, null);
      };
      vue.onBeforeMount(function() {
        props2.duration && setTimer();
      });
      vue.onMounted(function() {
        var msgDom = msgRef.value;
        fadeIn(msgDom, props2.placement);
      });
      expose({
        close: close3
      });
      return function() {
        return vue.createVNode("div", {
          "ref": msgRef,
          "class": classes.value,
          "onMouseenter": clearTimer,
          "onMouseleave": setTimer
        }, [renderIcon(), renderContent3("content", "default"), renderClose()]);
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function ownKeys$c(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$c(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$c(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  var DEFAULT_Z_INDEX = 6e3;
  var getUniqueId = function() {
    var id = 0;
    return function() {
      id += 1;
      return id;
    };
  }();
  var MessageList = vue.defineComponent({
    name: "TMessageList",
    props: {
      zIndex: {
        type: Number,
        "default": 0
      },
      placement: {
        type: String,
        "default": ""
      }
    },
    setup: function setup6(props2, _ref) {
      var expose = _ref.expose;
      var COMPONENT_NAME = usePrefixClass("message__list");
      var list = vue.ref([]);
      var messageList = vue.ref([]);
      var styles = vue.computed(function() {
        return _objectSpread$c(_objectSpread$c({}, PLACEMENT_OFFSET[props2.placement]), {}, {
          zIndex: props2.zIndex !== DEFAULT_Z_INDEX ? props2.zIndex : DEFAULT_Z_INDEX
        });
      });
      var add2 = function add3(msg) {
        var mg = _objectSpread$c(_objectSpread$c({}, msg), {}, {
          key: getUniqueId()
        });
        list.value.push(mg);
        return mg.key;
      };
      var remove2 = function remove3(index2) {
        list.value.splice(index2, 1);
      };
      var removeAll = function removeAll2() {
        list.value = [];
      };
      var getOffset = function getOffset2(val) {
        if (!val)
          return;
        return isNaN(Number(val)) ? val : "".concat(val, "px");
      };
      var msgStyles = function msgStyles2(item) {
        return item.offset && {
          position: "relative",
          left: getOffset(item.offset[0]),
          top: getOffset(item.offset[1])
        };
      };
      var getProps = function getProps2(index2, item) {
        return _objectSpread$c(_objectSpread$c({}, item), {}, {
          onCloseBtnClick: function onCloseBtnClick(e) {
            if (item.onCloseBtnClick) {
              item.onCloseBtnClick(e);
            }
            return remove2(index2);
          },
          onDurationEnd: function onDurationEnd() {
            if (item.onDurationEnd) {
              item.onDurationEnd();
            }
            return remove2(index2);
          }
        });
      };
      var addChild = function addChild2(el) {
        if (el) {
          messageList.value.push(el);
        }
      };
      expose({
        add: add2,
        removeAll,
        list,
        messageList
      });
      return function() {
        if (!list.value.length)
          return;
        return vue.createVNode("div", {
          "class": COMPONENT_NAME.value,
          "style": styles.value
        }, [list.value.map(function(item, index2) {
          return vue.createVNode(_Message, vue.mergeProps({
            "key": item.key,
            "style": msgStyles(item),
            "ref": addChild
          }, getProps(index2, item)), null);
        })]);
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function ownKeys$b(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$b(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$b(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  var instanceMap = /* @__PURE__ */ new Map();
  function handleParams(params) {
    var options = _objectSpread$b({
      duration: 3e3,
      attach: "body",
      zIndex: DEFAULT_Z_INDEX,
      placement: "top"
    }, params);
    options.content = params.content;
    return options;
  }
  var MessageFunction = function MessageFunction2(props2) {
    var options = handleParams(props2);
    var attach = options.attach, placement = options.placement;
    var attachDom = getAttach(attach);
    if (!instanceMap.get(attachDom)) {
      instanceMap.set(attachDom, {});
    }
    var p = instanceMap.get(attachDom)[placement];
    var mgKey;
    if (!p) {
      var wrapper = document.createElement("div");
      var instance = vue.createApp(MessageList, {
        zIndex: options.zIndex,
        placement: options.placement
      }).mount(wrapper);
      mgKey = instance.add(options);
      instanceMap.get(attachDom)[placement] = instance;
      attachDom.appendChild(wrapper);
    } else {
      mgKey = p.add(options);
    }
    return new Promise(function(resolve) {
      var ins = instanceMap.get(attachDom)[placement];
      vue.nextTick(function() {
        var msg = ins.messageList;
        resolve(msg === null || msg === void 0 ? void 0 : msg.find(function(mg) {
          var _mg$$;
          return ((_mg$$ = mg.$) === null || _mg$$ === void 0 || (_mg$$ = _mg$$.vnode) === null || _mg$$ === void 0 ? void 0 : _mg$$.key) === mgKey;
        }));
      });
    });
  };
  var showThemeMessage = function showThemeMessage2(theme, params, duration) {
    var options = {
      theme
    };
    if (isString_1(params)) {
      options.content = params;
    } else if (isObject_1(params) && !(params instanceof Array)) {
      options = _objectSpread$b(_objectSpread$b({}, options), params);
    }
    (duration || duration === 0) && (options.duration = duration);
    return MessageFunction(options);
  };
  var extraApi = {
    info: function info(params, duration) {
      return showThemeMessage("info", params, duration);
    },
    success: function success(params, duration) {
      return showThemeMessage("success", params, duration);
    },
    warning: function warning(params, duration) {
      return showThemeMessage("warning", params, duration);
    },
    error: function error2(params, duration) {
      return showThemeMessage("error", params, duration);
    },
    question: function question(params, duration) {
      return showThemeMessage("question", params, duration);
    },
    loading: function loading(params, duration) {
      return showThemeMessage("loading", params, duration);
    },
    close: function close2(promise) {
      promise.then(function(instance) {
        return instance === null || instance === void 0 ? void 0 : instance.close();
      });
    },
    closeAll: function closeAll() {
      if (instanceMap instanceof Map) {
        instanceMap.forEach(function(attach) {
          Object.keys(attach).forEach(function(placement) {
            var instance = attach[placement];
            instance.list = [];
          });
        });
      }
    }
  };
  var MessagePlugin = showThemeMessage;
  MessagePlugin.install = function(app2) {
    app2.config.globalProperties.$message = showThemeMessage;
    Object.keys(extraApi).forEach(function(funcName) {
      app2.config.globalProperties.$message[funcName] = extraApi[funcName];
    });
  };
  Object.keys(extraApi).forEach(function(funcName) {
    MessagePlugin[funcName] = extraApi[funcName];
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
  function getNodeName(element2) {
    return element2 ? (element2.nodeName || "").toLowerCase() : null;
  }
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style2 = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element2 = state.elements[name];
      if (!isHTMLElement(element2) || !getNodeName(element2)) {
        return;
      }
      Object.assign(element2.style, style2);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element2.removeAttribute(name2);
        } else {
          element2.setAttribute(name2, value === true ? "" : value);
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
        var element2 = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style2 = styleProperties.reduce(function(style3, property) {
          style3[property] = "";
          return style3;
        }, {});
        if (!isHTMLElement(element2) || !getNodeName(element2)) {
          return;
        }
        Object.assign(element2.style, style2);
        Object.keys(attributes).forEach(function(attribute) {
          element2.removeAttribute(attribute);
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
  var round = Math.round;
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
  function getBoundingClientRect(element2, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element2.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element2)) {
      scaleX = element2.offsetWidth > 0 ? round(clientRect.width) / element2.offsetWidth || 1 : 1;
      scaleY = element2.offsetHeight > 0 ? round(clientRect.height) / element2.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element2) ? getWindow(element2) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x,
      y
    };
  }
  function getLayoutRect(element2) {
    var clientRect = getBoundingClientRect(element2);
    var width = element2.offsetWidth;
    var height = element2.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element2.offsetLeft,
      y: element2.offsetTop,
      width,
      height
    };
  }
  function contains(parent2, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent2.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent2.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }
  function getComputedStyle$1(element2) {
    return getWindow(element2).getComputedStyle(element2);
  }
  function isTableElement(element2) {
    return ["table", "td", "th"].indexOf(getNodeName(element2)) >= 0;
  }
  function getDocumentElement(element2) {
    return ((isElement(element2) ? element2.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element2.document
    )) || window.document).documentElement;
  }
  function getParentNode(element2) {
    if (getNodeName(element2) === "html") {
      return element2;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element2.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element2.parentNode || // DOM Element detected
      (isShadowRoot(element2) ? element2.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element2)
    );
  }
  function getTrueOffsetParent(element2) {
    if (!isHTMLElement(element2) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle$1(element2).position === "fixed") {
      return null;
    }
    return element2.offsetParent;
  }
  function getContainingBlock(element2) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element2)) {
      var elementCss = getComputedStyle$1(element2);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element2);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle$1(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element2) {
    var window2 = getWindow(element2);
    var offsetParent = getTrueOffsetParent(element2);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element2) || window2;
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
  function expandToHashMap(value, keys2) {
    return keys2.reduce(function(hashMap, key2) {
      hashMap[key2] = value;
      return hashMap;
    }, {});
  }
  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
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
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
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
        if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
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
      position
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
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }
  function getWindowScrollBarX(element2) {
    return getBoundingClientRect(getDocumentElement(element2)).left + getWindowScroll(element2).scrollLeft;
  }
  function getViewportRect(element2, strategy) {
    var win = getWindow(element2);
    var html = getDocumentElement(element2);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x + getWindowScrollBarX(element2),
      y
    };
  }
  function getDocumentRect(element2) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element2);
    var winScroll = getWindowScroll(element2);
    var body = (_element$ownerDocumen = element2.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element2);
    var y = -winScroll.scrollTop;
    if (getComputedStyle$1(body || html).direction === "rtl") {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  function isScrollParent(element2) {
    var _getComputedStyle = getComputedStyle$1(element2), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }
  function listScrollParents(element2, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element2);
    var isBody = scrollParent === ((_element$ownerDocumen = element2.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
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
  function getInnerBoundingClientRect(element2, strategy) {
    var rect = getBoundingClientRect(element2, false, strategy === "fixed");
    rect.top = rect.top + element2.clientTop;
    rect.left = rect.left + element2.clientLeft;
    rect.bottom = rect.top + element2.clientHeight;
    rect.right = rect.left + element2.clientWidth;
    rect.width = element2.clientWidth;
    rect.height = element2.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element2, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element2, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element2)));
  }
  function getClippingParents(element2) {
    var clippingParents2 = listScrollParents(getParentNode(element2));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element2).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element2) ? getOffsetParent(element2) : element2;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element2, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element2) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element2, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element2, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element2 = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element2.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element2.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element2.height
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
          x: reference2.x - element2.width,
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
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element2[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element2[len] / 2);
          break;
      }
    }
    return offsets;
  }
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element2 = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element2) ? element2 : element2.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
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
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
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
        padding
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
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
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
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
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
      if (checks.every(function(check2) {
        return check2;
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
            return checks2.slice(0, _i2).every(function(check2) {
              return check2;
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
        if (_ret === "break")
          break;
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
      strategy: "absolute",
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
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
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
      var len = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min$1 = offset2 + overflow[mainSide];
      var max$1 = offset2 - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
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
  function getHTMLElementScroll(element2) {
    return {
      scrollLeft: element2.scrollLeft,
      scrollTop: element2.scrollTop
    };
  }
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }
  function isElementScaled(element2) {
    var rect = element2.getBoundingClientRect();
    var scaleX = round(rect.width) / element2.offsetWidth || 1;
    var scaleY = round(rect.height) / element2.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
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
      if (isHTMLElement(offsetParent)) {
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
  function debounce$2(fn2) {
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
    return !args.some(function(element2) {
      return !(element2 && typeof element2.getBoundingClientRect === "function");
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
          for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
            if (state.reset === true) {
              state.reset = false;
              index2 = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index2], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
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
        update: debounce$2(function() {
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
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var reWhitespace = /\s/;
  function trimmedEndIndex$1(string) {
    var index2 = string.length;
    while (index2-- && reWhitespace.test(string.charAt(index2))) {
    }
    return index2;
  }
  var _trimmedEndIndex = trimmedEndIndex$1;
  var trimmedEndIndex = _trimmedEndIndex;
  var reTrimStart = /^\s+/;
  function baseTrim$1(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
  }
  var _baseTrim = baseTrim$1;
  var baseTrim = _baseTrim, isObject$3 = isObject_1, isSymbol$2 = isSymbol_1;
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber$1(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol$2(value)) {
      return NAN;
    }
    if (isObject$3(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject$3(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var toNumber_1 = toNumber$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var root = _root;
  var now$1 = function now() {
    return root.Date.now();
  };
  var now_1 = now$1;
  var isObject$2 = isObject_1, now2 = now_1, toNumber = toNumber_1;
  var FUNC_ERROR_TEXT$2 = "Expected a function";
  var nativeMax = Math.max, nativeMin$1 = Math.min;
  function debounce$1(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT$2);
    }
    wait = toNumber(wait) || 0;
    if (isObject$2(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin$1(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now2();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now2());
    }
    function debounced() {
      var time = now2(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  var debounce_1 = debounce$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function useCommonClassName() {
    var _useConfig = useConfig(), classPrefix = _useConfig.classPrefix;
    var sizeClassNames = {
      small: "".concat(classPrefix.value, "-size-s"),
      medium: "".concat(classPrefix.value, "-size-m"),
      large: "".concat(classPrefix.value, "-size-l"),
      "default": "",
      xs: "".concat(classPrefix.value, "-size-xs"),
      xl: "".concat(classPrefix.value, "-size-xl"),
      block: "".concat(classPrefix.value, "-size-full-width")
    };
    var statusClassNames = {
      loading: "".concat(classPrefix.value, "-is-loading"),
      loadMore: "".concat(classPrefix.value, "-is-load-more"),
      disabled: "".concat(classPrefix.value, "-is-disabled"),
      focused: "".concat(classPrefix.value, "-is-focused"),
      success: "".concat(classPrefix.value, "-is-success"),
      error: "".concat(classPrefix.value, "-is-error"),
      warning: "".concat(classPrefix.value, "-is-warning"),
      selected: "".concat(classPrefix.value, "-is-selected"),
      active: "".concat(classPrefix.value, "-is-active"),
      checked: "".concat(classPrefix.value, "-is-checked"),
      current: "".concat(classPrefix.value, "-is-current"),
      hidden: "".concat(classPrefix.value, "-is-hidden"),
      visible: "".concat(classPrefix.value, "-is-visible"),
      expanded: "".concat(classPrefix.value, "-is-expanded"),
      indeterminate: "".concat(classPrefix.value, "-is-indeterminate")
    };
    return {
      classPrefix,
      sizeClassNames,
      statusClassNames,
      classNames: {
        size: sizeClassNames,
        status: statusClassNames
      }
    };
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function useVModel(value, modelValue, defaultValue, onChange) {
    var propName = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "value";
    var _getCurrentInstance = vue.getCurrentInstance(), emit = _getCurrentInstance.emit, vnode = _getCurrentInstance.vnode;
    var internalValue = vue.ref();
    var vProps = vnode.props || {};
    var isVM = Object.prototype.hasOwnProperty.call(vProps, "modelValue") || Object.prototype.hasOwnProperty.call(vProps, "model-value");
    var isVMP = Object.prototype.hasOwnProperty.call(vProps, propName) || Object.prototype.hasOwnProperty.call(vProps, kebabCase_1(propName));
    if (isVM) {
      return [modelValue, function(newValue) {
        emit("update:modelValue", newValue);
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        onChange === null || onChange === void 0 || onChange.apply(void 0, [newValue].concat(args));
      }];
    }
    if (isVMP) {
      return [value, function(newValue) {
        emit("update:".concat(propName), newValue);
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        onChange === null || onChange === void 0 || onChange.apply(void 0, [newValue].concat(args));
      }];
    }
    internalValue.value = defaultValue;
    return [internalValue, function(newValue) {
      internalValue.value = newValue;
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      onChange === null || onChange === void 0 || onChange.apply(void 0, [newValue].concat(args));
    }];
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var logSet = /* @__PURE__ */ new Set();
  var log = {
    warn: function warn(componentName, message) {
      console.warn("TDesign ".concat(componentName, " Warn: ").concat(message));
    },
    warnOnce: function warnOnce(componentName, message) {
      var msgContent = "TDesign ".concat(componentName, " Warn: ").concat(message);
      if (logSet.has(msgContent))
        return;
      logSet.add(msgContent);
      console.warn(msgContent);
    },
    error: function error3(componentName, message) {
      console.error("TDesign ".concat(componentName, " Error: ").concat(message));
    },
    errorOnce: function errorOnce(componentName, message) {
      var msgContent = "TDesign ".concat(componentName, " Error: ").concat(message);
      if (logSet.has(msgContent))
        return;
      logSet.add(msgContent);
      console.error(msgContent);
    },
    info: function info2(componentName, message) {
      console.info("TDesign ".concat(componentName, " Info: ").concat(message));
    }
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var popupProps = {
    attach: {
      type: [String, Function],
      "default": "body"
    },
    content: {
      type: [String, Function]
    },
    "default": {
      type: [String, Function]
    },
    delay: {
      type: [Number, Array]
    },
    destroyOnClose: Boolean,
    disabled: Boolean,
    hideEmptyPopup: Boolean,
    overlayClassName: {
      type: [String, Object, Array]
    },
    overlayInnerClassName: {
      type: [String, Object, Array]
    },
    overlayInnerStyle: {
      type: [Boolean, Object, Function]
    },
    overlayStyle: {
      type: [Boolean, Object, Function]
    },
    placement: {
      type: String,
      "default": "top"
    },
    popperOptions: {
      type: Object
    },
    showArrow: Boolean,
    trigger: {
      type: String,
      "default": "hover",
      validator: function validator10(val) {
        if (!val)
          return true;
        return ["hover", "click", "focus", "mousedown", "context-menu"].includes(val);
      }
    },
    triggerElement: {
      type: [String, Function]
    },
    visible: {
      type: Boolean,
      "default": void 0
    },
    modelValue: {
      type: Boolean,
      "default": void 0
    },
    defaultVisible: Boolean,
    zIndex: {
      type: Number
    },
    onScroll: Function,
    onScrollToBottom: Function,
    onVisibleChange: Function
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function useResizeObserver(container, callback) {
    if (typeof window === "undefined")
      return;
    var isSupport = window && window.ResizeObserver;
    if (!isSupport)
      return;
    var containerObserver = null;
    var cleanupObserver = function cleanupObserver2() {
      if (!containerObserver || !container.value)
        return;
      containerObserver.unobserve(container.value);
      containerObserver.disconnect();
      containerObserver = null;
    };
    var addObserver = function addObserver2(el) {
      containerObserver = new ResizeObserver(callback);
      containerObserver.observe(el);
    };
    if (container !== null && container !== void 0 && container.value) {
      vue.watch(container, function(el) {
        cleanupObserver();
        el && addObserver(el);
      }, {
        immediate: true,
        flush: "post"
      });
    }
    vue.onBeforeUnmount(function() {
      cleanupObserver();
    });
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function _isSlot$2(s) {
    return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !vue.isVNode(s);
  }
  function filterEmpty() {
    var children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var vnodes = [];
    children.forEach(function(child) {
      if (isArray_1(child)) {
        vnodes.push.apply(vnodes, _toConsumableArray(child));
      } else if (child.type === vue.Fragment) {
        vnodes.push.apply(vnodes, _toConsumableArray(filterEmpty(child.children)));
      } else {
        vnodes.push(child);
      }
    });
    return vnodes.filter(function(c) {
      return !(c && (c.type === vue.Comment || c.type === vue.Fragment && c.children.length === 0 || c.type === vue.Text && c.children.trim() === ""));
    });
  }
  function isRectChanged(rect1, rect2) {
    if (!rect1 && !rect2)
      return false;
    if (!rect1 || !rect2)
      return true;
    if (["width", "height", "x", "y"].some(function(k) {
      return rect1[k] !== rect2[k];
    })) {
      return true;
    }
    return false;
  }
  function useElement(getter) {
    var instance = vue.getCurrentInstance();
    var el = vue.ref();
    vue.onMounted(function() {
      el.value = getter(instance);
    });
    vue.onUpdated(function() {
      var newEl = getter(instance);
      if (el.value !== newEl) {
        el.value = newEl;
      }
    });
    return el;
  }
  var Trigger = vue.defineComponent({
    name: "TPopupTrigger",
    props: {
      forwardRef: Function
    },
    emits: ["resize"],
    setup: function setup7(props2, _ref) {
      var emit = _ref.emit, slots = _ref.slots;
      var el = useElement(function(vm) {
        var containerNode = vm.parent.vnode;
        return containerNode.el.nextElementSibling;
      });
      var contentRect = vue.ref();
      vue.watch(el, function() {
        var _props2$forwardRef;
        (_props2$forwardRef = props2.forwardRef) === null || _props2$forwardRef === void 0 || _props2$forwardRef.call(props2, el.value);
      });
      useResizeObserver(el, function(_ref2) {
        var _ref3 = _slicedToArray(_ref2, 1), newContentRect = _ref3[0].contentRect;
        contentRect.value = newContentRect;
      });
      vue.watch(contentRect, function(newRect, oldRect) {
        if (isRectChanged(newRect, oldRect)) {
          emit("resize");
        }
      });
      return function() {
        var _slots$default, _children$;
        var children = filterEmpty((_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
        if (children.length > 1 || ((_children$ = children[0]) === null || _children$ === void 0 ? void 0 : _children$.type) === vue.Text) {
          return vue.createVNode("span", null, [children]);
        }
        return children[0];
      };
    }
  });
  var Content = vue.defineComponent({
    name: "TPopupContent",
    emits: ["resize"],
    setup: function setup8(props2, _ref4) {
      var emit = _ref4.emit, slots = _ref4.slots;
      var contentEl = useElement(function(vm) {
        return vm.vnode.el.children[0];
      });
      useResizeObserver(contentEl, function() {
        emit("resize");
      });
      return function() {
        return vue.createVNode("div", {
          "style": "position: absolute; top: 0px; left: 0px; width: 100%"
        }, [slots["default"]()]);
      };
    }
  });
  var Container = vue.defineComponent({
    name: "TPopupContainer",
    inheritAttrs: false,
    props: {
      parent: Object,
      visible: Boolean,
      attach: popupProps.attach,
      forwardRef: Function
    },
    emits: ["resize", "contentMounted"],
    setup: function setup9(props2, _ref5) {
      var emit = _ref5.emit, attrs = _ref5.attrs, slots = _ref5.slots, expose = _ref5.expose;
      var triggerEl = vue.ref();
      var mountContent = vue.ref(false);
      function emitResize() {
        emit("resize");
      }
      vue.onMounted(function() {
        requestAnimationFrame(function() {
          mountContent.value = props2.visible;
        });
      });
      vue.watch(function() {
        return props2.visible;
      }, function(visible) {
        if (visible) {
          mountContent.value = props2.visible;
        }
      });
      expose({
        unmountContent: function unmountContent() {
          mountContent.value = false;
        }
      });
      return function() {
        var _slot;
        var getElement = function getElement2() {
          return getSSRAttach() || getAttach(props2.attach, triggerEl.value);
        };
        return vue.createVNode(vue.Fragment, null, [vue.createVNode(Trigger, {
          "class": attrs["class"],
          "forwardRef": function forwardRef(el) {
            props2.forwardRef(el);
            triggerEl.value = el;
          },
          "onResize": emitResize
        }, _isSlot$2(_slot = slots["default"]()) ? _slot : {
          "default": function _default2() {
            return [_slot];
          }
        }), mountContent.value && vue.createVNode(vue.Teleport, {
          "disabled": !getElement(),
          "to": getElement()
        }, {
          "default": function _default2() {
            return [vue.createVNode(Content, {
              "onResize": emitResize,
              "onVnodeMounted": function onVnodeMounted() {
                return emit("contentMounted");
              }
            }, {
              "default": function _default3() {
                return [slots.content && slots.content()];
              }
            })];
          }
        })]);
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function ownKeys$a(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$a(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$a(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _isSlot$1(s) {
    return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !vue.isVNode(s);
  }
  var POPUP_ATTR_NAME = "data-td-popup";
  var POPUP_PARENT_ATTR_NAME = "data-td-popup-parent";
  function getPopperTree(id, upwards) {
    var list = [];
    var selectors = [POPUP_PARENT_ATTR_NAME, POPUP_ATTR_NAME];
    if (!id)
      return list;
    if (upwards) {
      selectors.unshift(selectors.pop());
    }
    recurse(id);
    return list;
    function recurse(id2) {
      var children = document.querySelectorAll("[".concat(selectors[0], '="').concat(id2, '"]'));
      children.forEach(function(el) {
        list.push(el);
        var childId = el.getAttribute(selectors[1]);
        if (childId && childId !== id2) {
          recurse(childId);
        }
      });
    }
  }
  var parentKey = Symbol();
  function getPopperPlacement(placement) {
    return placement.replace(/-(left|top)$/, "-start").replace(/-(right|bottom)$/, "-end");
  }
  function attachListeners(elm) {
    var offs = [];
    return {
      add: function add2(type, listener) {
        if (!type)
          return;
        on(elm.value, type, listener);
        offs.push(function() {
          off(elm.value, type, listener);
        });
      },
      clean: function clean() {
        offs.forEach(function(handler) {
          return handler === null || handler === void 0 ? void 0 : handler();
        });
        offs.length = 0;
      }
    };
  }
  var _Popup = vue.defineComponent({
    name: "TPopup",
    props: _objectSpread$a(_objectSpread$a({}, popupProps), {}, {
      expandAnimation: {
        type: Boolean
      }
    }),
    setup: function setup10(props2, _ref) {
      var _process$env;
      var expose = _ref.expose;
      var _toRefs = vue.toRefs(props2), propVisible = _toRefs.visible, modelValue = _toRefs.modelValue;
      var _useVModel = useVModel(propVisible, modelValue, props2.defaultVisible, props2.onVisibleChange, "visible"), _useVModel2 = _slicedToArray(_useVModel, 2), visible = _useVModel2[0], setVisible = _useVModel2[1];
      var renderTNodeJSX3 = useTNodeJSX();
      var renderContent3 = useContent();
      var popper2;
      var showTimeout;
      var hideTimeout;
      var triggerEl = vue.ref(null);
      var overlayEl = vue.ref(null);
      var popperEl = vue.ref(null);
      var containerRef = vue.ref(null);
      var id = typeof process !== "undefined" && (_process$env = process.env) !== null && _process$env !== void 0 && _process$env.TEST ? "" : Date.now().toString(36);
      var parent2 = vue.inject(parentKey, void 0);
      vue.provide(parentKey, {
        id,
        assertMouseLeave: onMouseLeave
      });
      var prefixCls = usePrefixClass("popup");
      var _useCommonClassName = useCommonClassName$2(), commonCls = _useCommonClassName.STATUS;
      var delay = vue.computed(function() {
        var _props2$delay, _delay2$;
        var delay2 = props2.trigger !== "hover" ? [0, 0] : [].concat((_props2$delay = props2.delay) !== null && _props2$delay !== void 0 ? _props2$delay : [250, 150]);
        return {
          show: delay2[0],
          hide: (_delay2$ = delay2[1]) !== null && _delay2$ !== void 0 ? _delay2$ : delay2[0]
        };
      });
      var trigger = attachListeners(triggerEl);
      vue.watch(function() {
        return [props2.trigger, triggerEl.value];
      }, function() {
        if (!triggerEl.value)
          return;
        trigger.clean();
        trigger.add({
          hover: "mouseenter",
          focus: "focusin",
          "context-menu": "contextmenu",
          click: "click"
        }[props2.trigger], function(ev) {
          if (props2.disabled)
            return;
          if (ev.type === "contextmenu") {
            ev.preventDefault();
          }
          if ((ev.type === "click" || ev.type === "contextmenu") && visible.value) {
            hide2(ev);
            return;
          }
          show(ev);
        });
        trigger.add({
          hover: "mouseleave",
          focus: "focusout"
        }[props2.trigger], hide2);
      });
      vue.watch(function() {
        return [props2.overlayStyle, props2.overlayInnerStyle, overlayEl.value];
      }, function() {
        updateOverlayInnerStyle();
        updatePopper();
      });
      vue.watch(function() {
        return props2.placement;
      }, function() {
        destroyPopper();
        updatePopper();
      });
      vue.watch(function() {
        return visible.value;
      }, function(visible2) {
        if (visible2) {
          on(document, "mousedown", onDocumentMouseDown, true);
          if (props2.trigger === "focus") {
            once(triggerEl.value, "keydown", function(ev) {
              var _process$env2;
              var code = typeof process !== "undefined" && (_process$env2 = process.env) !== null && _process$env2 !== void 0 && _process$env2.TEST ? "27" : "Escape";
              if (ev.code === code) {
                hide2(ev);
              }
            });
          }
          return;
        }
        off(document, "mousedown", onDocumentMouseDown, true);
      });
      vue.onUnmounted(function() {
        destroyPopper();
        clearAllTimeout();
        off(document, "mousedown", onDocumentMouseDown, true);
      });
      expose({
        update: updatePopper,
        close: function close3() {
          return hide2();
        },
        getOverlay: function getOverlay() {
          return overlayEl.value;
        }
      });
      function getOverlayStyle() {
        var overlayStyle = props2.overlayStyle;
        if (!triggerEl.value || !overlayEl.value)
          return;
        if (isFunction_1(overlayStyle)) {
          return overlayStyle(triggerEl.value, overlayEl.value);
        }
        if (isObject_1(overlayStyle)) {
          return overlayStyle;
        }
      }
      function updateOverlayInnerStyle() {
        var overlayInnerStyle = props2.overlayInnerStyle;
        if (!triggerEl.value || !overlayEl.value)
          return;
        if (isFunction_1(overlayInnerStyle)) {
          setStyle$1(overlayEl.value, overlayInnerStyle(triggerEl.value, overlayEl.value));
        } else if (isObject_1(overlayInnerStyle)) {
          setStyle$1(overlayEl.value, overlayInnerStyle);
        }
      }
      function updatePopper() {
        if (!popperEl.value || !visible.value)
          return;
        if (popper2) {
          var rect = triggerEl.value.getBoundingClientRect();
          var parent22 = triggerEl.value;
          while (parent22 && parent22 !== document.body) {
            parent22 = parent22.parentElement;
          }
          var isHidden = parent22 !== document.body || rect.width === 0 && rect.height === 0;
          if (!isHidden) {
            popper2.state.elements.reference = triggerEl.value;
            popper2.update();
          } else {
            setVisible(false, {
              trigger: getTriggerType({
                type: "mouseenter"
              })
            });
          }
          return;
        }
        popper2 = createPopper(triggerEl.value, popperEl.value, _objectSpread$a({
          placement: getPopperPlacement(props2.placement),
          onFirstUpdate: function onFirstUpdate() {
            vue.nextTick(updatePopper);
          }
        }, props2.popperOptions));
      }
      function destroyPopper() {
        if (popper2) {
          var _popper;
          (_popper = popper2) === null || _popper === void 0 || _popper.destroy();
          popper2 = null;
        }
        if (props2.destroyOnClose) {
          var _containerRef$value;
          (_containerRef$value = containerRef.value) === null || _containerRef$value === void 0 || _containerRef$value.unmountContent();
        }
      }
      function show(ev) {
        clearAllTimeout();
        showTimeout = setTimeout(function() {
          setVisible(true, {
            trigger: getTriggerType(ev)
          });
        }, delay.value.show);
      }
      function hide2(ev) {
        clearAllTimeout();
        hideTimeout = setTimeout(function() {
          setVisible(false, {
            trigger: getTriggerType(ev)
          });
        }, delay.value.hide);
      }
      function clearAllTimeout() {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
      }
      function getTriggerType(ev) {
        switch (ev === null || ev === void 0 ? void 0 : ev.type) {
          case "mouseenter":
          case "mouseleave":
            return "trigger-element-hover";
          case "focusin":
            return "trigger-element-focus";
          case "focusout":
            return "trigger-element-blur";
          case "click":
            return "trigger-element-click";
          case "context-menu":
          case "keydown":
            return "keydown-esc";
          case "mousedown":
            return "document";
          default:
            return "trigger-element-close";
        }
      }
      function onDocumentMouseDown(ev) {
        if (popperEl.value.contains(ev.target)) {
          return;
        }
        if (triggerEl.value.contains(ev.target)) {
          return;
        }
        var activedPopper = getPopperTree(id).find(function(el) {
          return el.contains(ev.target);
        });
        if (activedPopper && getPopperTree(activedPopper.getAttribute(POPUP_PARENT_ATTR_NAME), true).some(function(el) {
          return el === popperEl.value;
        })) {
          return;
        }
        hide2(ev);
      }
      function onMouseLeave(ev) {
        if (props2.trigger !== "hover" || triggerEl.value.contains(ev.target))
          return;
        var isCursorOverlaps = getPopperTree(id).some(function(el) {
          var rect = el.getBoundingClientRect();
          return ev.x > rect.x && ev.x < rect.x + rect.width && ev.y > rect.y && ev.y < rect.y + rect.height;
        });
        if (!isCursorOverlaps) {
          hide2(ev);
          parent2 === null || parent2 === void 0 || parent2.assertMouseLeave(ev);
        }
      }
      var updateScrollTop = vue.inject("updateScrollTop", void 0);
      function handleOnScroll(e) {
        var _props2$onScroll;
        var _e$target = e.target, scrollTop = _e$target.scrollTop, clientHeight = _e$target.clientHeight, scrollHeight = _e$target.scrollHeight;
        var debounceOnScrollBottom = debounce_1(function(e2) {
          var _props2$onScrollToBot;
          return (_props2$onScrollToBot = props2.onScrollToBottom) === null || _props2$onScrollToBot === void 0 ? void 0 : _props2$onScrollToBot.call(props2, {
            e: e2
          });
        }, 100);
        if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
          debounceOnScrollBottom(e);
        }
        (_props2$onScroll = props2.onScroll) === null || _props2$onScroll === void 0 || _props2$onScroll.call(props2, {
          e
        });
      }
      vue.watch(function() {
        return [visible.value, overlayEl.value];
      }, function() {
        if (visible.value && overlayEl.value && updateScrollTop) {
          updateScrollTop === null || updateScrollTop === void 0 || updateScrollTop(overlayEl.value);
        }
      });
      return function() {
        var _ref2, _ref3;
        var content = renderTNodeJSX3("content");
        var hidePopup = props2.hideEmptyPopup && ["", void 0, null].includes(content);
        var overlay = visible.value || !props2.destroyOnClose ? vue.withDirectives(vue.createVNode("div", vue.mergeProps((_ref2 = {}, _defineProperty$2(_ref2, POPUP_ATTR_NAME, id), _defineProperty$2(_ref2, POPUP_PARENT_ATTR_NAME, parent2 === null || parent2 === void 0 ? void 0 : parent2.id), _ref2), {
          "class": [prefixCls.value, props2.overlayClassName],
          "ref": function ref2(ref22) {
            return popperEl.value = ref22;
          },
          "style": [{
            zIndex: props2.zIndex
          }, getOverlayStyle(), hidePopup && {
            visibility: "hidden"
          }]
        }, props2.trigger === "hover" && {
          onMouseenter: function onMouseenter() {
            if (visible.value) {
              clearAllTimeout();
            }
          },
          onMouseleave: onMouseLeave
        }), [vue.createVNode("div", {
          "class": ["".concat(prefixCls.value, "__content"), (_ref3 = {}, _defineProperty$2(_ref3, "".concat(prefixCls.value, "__content--text"), isString_1(props2.content)), _defineProperty$2(_ref3, "".concat(prefixCls.value, "__content--arrow"), props2.showArrow), _defineProperty$2(_ref3, commonCls.value.disabled, props2.disabled), _ref3), props2.overlayInnerClassName],
          "ref": overlayEl,
          "onScroll": handleOnScroll
        }, [content, props2.showArrow && vue.createVNode("div", {
          "class": "".concat(prefixCls.value, "__arrow")
        }, null)])]), [[vue.vShow, visible.value]]) : null;
        return vue.createVNode(Container, {
          "ref": function ref2(ref22) {
            return containerRef.value = ref22;
          },
          "forwardRef": function forwardRef(ref2) {
            return triggerEl.value = ref2;
          },
          "onContentMounted": function onContentMounted() {
            if (visible.value) {
              updatePopper();
              var timer = setTimeout(function() {
                updateOverlayInnerStyle();
                clearTimeout(timer);
              }, 60);
            }
          },
          "onResize": function onResize() {
            if (visible.value) {
              updatePopper();
            }
          },
          "visible": visible.value,
          "attach": props2.attach
        }, {
          content: function content2() {
            return vue.createVNode(vue.Transition, {
              "name": "".concat(prefixCls.value, "--animation").concat(props2.expandAnimation ? "-expand" : ""),
              "appear": true,
              "onEnter": updatePopper,
              "onAfterLeave": destroyPopper
            }, _isSlot$1(overlay) ? overlay : {
              "default": function _default2() {
                return [overlay];
              }
            });
          },
          "default": function _default2() {
            return renderContent3("default", "triggerElement");
          }
        });
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var Popup = withInstall(_Popup);
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var isArray$1$1 = isArray_1, isSymbol$1 = isSymbol_1;
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
  function isKey$1(value, object) {
    if (isArray$1$1(value)) {
      return false;
    }
    var type = _typeof(value);
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$1(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  var _isKey = isKey$1;
  var MapCache$1 = _MapCache;
  var FUNC_ERROR_TEXT$1 = "Expected a function";
  function memoize$1(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    var memoized = function memoized2() {
      var args = arguments, key2 = resolver ? resolver.apply(this, args) : args[0], cache = memoized2.cache;
      if (cache.has(key2)) {
        return cache.get(key2);
      }
      var result = func.apply(this, args);
      memoized2.cache = cache.set(key2, result) || cache;
      return result;
    };
    memoized.cache = new (memoize$1.Cache || MapCache$1)();
    return memoized;
  }
  memoize$1.Cache = MapCache$1;
  var memoize_1 = memoize$1;
  var memoize = memoize_1;
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped$1(func) {
    var result = memoize(func, function(key2) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key2;
    });
    var cache = result.cache;
    return result;
  }
  var _memoizeCapped = memoizeCapped$1;
  var memoizeCapped = _memoizeCapped;
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath$1 = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46) {
      result.push("");
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
  });
  var _stringToPath = stringToPath$1;
  var isArray$2 = isArray_1, isKey = _isKey, stringToPath = _stringToPath, toString$1 = toString_1;
  function castPath$1$1(value, object) {
    if (isArray$2(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString$1(value));
  }
  var _castPath = castPath$1$1;
  var isSymbol = isSymbol_1;
  var INFINITY = 1 / 0;
  function toKey$1(value) {
    if (typeof value == "string" || isSymbol(value)) {
      return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  var _toKey = toKey$1;
  var castPath$2 = _castPath, toKey$2 = _toKey;
  function baseGet$1(object, path) {
    path = castPath$2(path, object);
    var index2 = 0, length = path.length;
    while (object != null && index2 < length) {
      object = object[toKey$2(path[index2++])];
    }
    return index2 && index2 == length ? object : void 0;
  }
  var _baseGet = baseGet$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function last$1(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : void 0;
  }
  var last_1 = last$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var _Symbol = _Symbol$2$1, isArguments = isArguments_1, isArray$1 = isArray_1;
  var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : void 0;
  function isFlattenable$1(value) {
    return isArray$1(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }
  var _isFlattenable = isFlattenable$1;
  var arrayPush = _arrayPush, isFlattenable = _isFlattenable;
  function baseFlatten$1(array, depth, predicate, isStrict, result) {
    var index2 = -1, length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while (++index2 < length) {
      var value = array[index2];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          baseFlatten$1(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  var _baseFlatten = baseFlatten$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var baseFlatten = _baseFlatten;
  function flatten$1(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
  }
  var flatten_1 = flatten$1;
  var flatten = flatten_1, overRest = _overRest, setToString = _setToString;
  function flatRest$1(func) {
    return setToString(overRest(func, void 0, flatten), func + "");
  }
  var _flatRest = flatRest$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var baseGet = _baseGet, baseSlice = _baseSlice;
  function parent$1(object, path) {
    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
  }
  var _parent = parent$1;
  var castPath$1 = _castPath, last = last_1, parent = _parent, toKey = _toKey;
  function baseUnset$1(object, path) {
    path = castPath$1(path, object);
    object = parent(object, path);
    return object == null || delete object[toKey(last(path))];
  }
  var _baseUnset = baseUnset$1;
  var isPlainObject$1 = isPlainObject_1;
  function customOmitClone$1(value) {
    return isPlainObject$1(value) ? void 0 : value;
  }
  var _customOmitClone = customOmitClone$1;
  var arrayMap$2 = _arrayMap, baseClone = _baseClone, baseUnset = _baseUnset, castPath = _castPath, copyObject = _copyObject, customOmitClone = _customOmitClone, flatRest = _flatRest, getAllKeysIn = _getAllKeysIn;
  var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
  var omit$1 = flatRest(function(object, paths) {
    var result = {};
    if (object == null) {
      return result;
    }
    var isDeep = false;
    paths = arrayMap$2(paths, function(path) {
      path = castPath(path, object);
      isDeep || (isDeep = path.length > 1);
      return path;
    });
    copyObject(object, getAllKeysIn(object), result);
    if (isDeep) {
      result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
    }
    var length = paths.length;
    while (length--) {
      baseUnset(result, paths[length]);
    }
    return result;
  });
  var omit_1 = omit$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var props$9 = {
    delay: {
      type: Number
    },
    destroyOnClose: {
      type: Boolean,
      "default": true
    },
    duration: {
      type: Number
    },
    placement: {
      type: String,
      "default": "top"
    },
    showArrow: {
      type: Boolean,
      "default": true
    },
    theme: {
      type: String,
      "default": "default",
      validator: function validator11(val) {
        if (!val)
          return true;
        return ["default", "primary", "success", "danger", "warning", "light"].includes(val);
      }
    }
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var useMouse = function useMouse2() {
    var x = vue.ref(0);
    var y = vue.ref(0);
    var onMouseMove = function onMouseMove2(e) {
      x.value = e.clientX;
      y.value = e.clientY;
    };
    if (!isServer) {
      vue.onMounted(function() {
        window.addEventListener("mousemove", onMouseMove, {
          passive: true
        });
      });
      vue.onUnmounted(function() {
        window.removeEventListener("mousemove", onMouseMove);
      });
    }
    return {
      x,
      y
    };
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function ownKeys$9(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$9(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$9(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  var _Tooltip = vue.defineComponent({
    name: "TTooltip",
    props: _objectSpread$9(_objectSpread$9({}, popupProps), props$9),
    setup: function setup11(props2, ctx) {
      var timer = vue.ref(null);
      var popupRef = vue.ref(null);
      var _toRefs = vue.toRefs(props2), visible = _toRefs.visible, modelValue = _toRefs.modelValue;
      var _useVModel = useVModel(visible, modelValue, props2.defaultVisible, props2.onVisibleChange, "visible"), _useVModel2 = _slicedToArray(_useVModel, 2), innerVisible = _useVModel2[0], setInnerVisible = _useVModel2[1];
      var vm = vue.getCurrentInstance();
      var innerTooltipVisible = vue.ref(props2.visible || props2.defaultVisible);
      var classPrefix = usePrefixClass();
      var renderTNodeJSX3 = useTNodeJSX();
      var renderContent3 = useContent();
      var _useMouse = useMouse(), x = _useMouse.x;
      var offsetX = vue.ref(x.value);
      vue.onMounted(function() {
        if (props2.duration && innerTooltipVisible.value) {
          timer.value = setTimeout(function() {
            setInnerVisible(false, {});
            clearTimeout(timer.value);
            timer.value = null;
          }, props2.duration);
        }
      });
      var onTipVisibleChange = function onTipVisibleChange2(val, ctx2) {
        if (timer.value && (ctx2 === null || ctx2 === void 0 ? void 0 : ctx2.trigger) !== "document")
          return;
        if (val) {
          offsetX.value = x.value;
        }
        setInnerVisible(val, ctx2);
      };
      var tooltipOverlayClassName = vue.computed(function() {
        return ["".concat(classPrefix.value, "-tooltip"), _defineProperty$2({}, "".concat(classPrefix.value, "-tooltip--").concat(props2.theme), props2.theme), props2.overlayClassName];
      });
      var popupProps2 = vue.computed(function() {
        return _objectSpread$9(_objectSpread$9({}, (vm === null || vm === void 0 ? void 0 : vm.vnode.props) || {}), {}, {
          placement: props2.placement === "mouse" ? "bottom-left" : props2.placement,
          showArrow: props2.placement === "mouse" ? false : props2.showArrow,
          overlayClassName: tooltipOverlayClassName.value,
          onVisibleChange: onTipVisibleChange,
          disabled: props2.disabled
        });
      });
      var overlayInnerStyle = vue.computed(function() {
        if (props2.placement !== "mouse" || offsetX.value === 0) {
          return props2.overlayInnerStyle;
        }
        var offsetStyle = function offsetStyle2(triggerEl) {
          return {
            transform: "translateX(".concat(offsetX.value - triggerEl.getBoundingClientRect().left, "px)")
          };
        };
        if (props2.overlayInnerStyle) {
          return function(triggerEl, popupEl) {
            return _objectSpread$9(_objectSpread$9({}, offsetStyle(triggerEl)), isFunction_1(props2.overlayInnerStyle) ? props2.overlayInnerStyle(triggerEl, popupEl) : props2.overlayInnerStyle);
          };
        }
        return offsetStyle;
      });
      vue.watch(function() {
        return innerTooltipVisible.value;
      }, function() {
        if (timer.value && !innerTooltipVisible.value) {
          clearTimeout(timer.value);
          timer.value = null;
        }
      });
      var onPopupUpdate = function onPopupUpdate2() {
        var _popupRef$value, _popupRef$value$updat;
        (_popupRef$value = popupRef.value) === null || _popupRef$value === void 0 || (_popupRef$value$updat = _popupRef$value.update) === null || _popupRef$value$updat === void 0 || _popupRef$value$updat.call(_popupRef$value);
      };
      ctx.expose({
        updatePopper: onPopupUpdate
      });
      return function() {
        var _content = renderTNodeJSX3("content");
        if (!_content && !props2.content) {
          return renderContent3("default", "triggerElement");
        }
        return vue.createVNode(Popup, vue.mergeProps(omit_1(popupProps2.value, ["content", "default"]), {
          "ref": popupRef,
          "overlayInnerStyle": overlayInnerStyle.value,
          "visible": innerVisible.value
        }), {
          "default": function _default2() {
            return [renderContent3("default", "triggerElement")];
          },
          content: function content() {
            return _content;
          }
        });
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var Tooltip = withInstall(_Tooltip);
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var _excluded$2 = ["from", "to", "direction"];
  function ownKeys$8(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$8(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$8(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function omit(obj, fields) {
    var shallowCopy = _objectSpread$8({}, obj);
    for (var i = 0; i < fields.length; i++) {
      var key2 = fields[i];
      delete shallowCopy[key2];
    }
    return shallowCopy;
  }
  function getBackgroundColor(color) {
    if (isString_1(color)) {
      return color;
    }
    if (isArray_1(color)) {
      if (color[0] && color[0][0] === "#") {
        color.unshift("90deg");
      }
      return "linear-gradient( ".concat(color.join(","), " )");
    }
    var from = color.from, to = color.to, _color$direction = color.direction, direction = _color$direction === void 0 ? "to right" : _color$direction, rest = _objectWithoutProperties(color, _excluded$2);
    var keys2 = Object.keys(rest);
    if (keys2.length) {
      keys2 = keys2.sort(function(a, b) {
        return parseFloat(a.substr(0, a.length - 1)) - parseFloat(b.substr(0, b.length - 1));
      });
      var tempArr = keys2.map(function(key2) {
        return "".concat(rest[key2], " ").concat(key2);
      });
      return "linear-gradient(".concat(direction, ", ").concat(tempArr.join(","), ")");
    }
    return "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")");
  }
  function getCharacterLength(str, maxCharacter) {
    var hasMaxCharacter = isNumber_1(maxCharacter);
    if (!str || str.length === 0) {
      if (hasMaxCharacter) {
        return {
          length: 0,
          characters: str
        };
      }
      return 0;
    }
    var len = 0;
    for (var i = 0; i < str.length; i++) {
      var currentStringLength = 0;
      if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
        currentStringLength = 2;
      } else {
        currentStringLength = 1;
      }
      if (hasMaxCharacter && len + currentStringLength > maxCharacter) {
        return {
          length: len,
          characters: str.slice(0, i)
        };
      }
      len += currentStringLength;
    }
    if (hasMaxCharacter) {
      return {
        length: len,
        characters: str
      };
    }
    return len;
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var props$8 = {
    align: {
      type: String,
      "default": "left",
      validator: function validator12(val) {
        if (!val)
          return true;
        return ["left", "center", "right"].includes(val);
      }
    },
    allowInputOverMax: Boolean,
    autoWidth: Boolean,
    autocomplete: {
      type: String,
      "default": void 0
    },
    autofocus: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    format: {
      type: Function
    },
    inputClass: {
      type: [String, Object, Array]
    },
    label: {
      type: [String, Function]
    },
    maxcharacter: {
      type: Number
    },
    maxlength: {
      type: [Number, String]
    },
    name: {
      type: String,
      "default": ""
    },
    placeholder: {
      type: String,
      "default": void 0
    },
    prefixIcon: {
      type: Function
    },
    readonly: Boolean,
    showClearIconOnEmpty: Boolean,
    showLimitNumber: Boolean,
    size: {
      type: String,
      "default": "medium",
      validator: function validator13(val) {
        if (!val)
          return true;
        return ["small", "medium", "large"].includes(val);
      }
    },
    status: {
      type: String,
      "default": void 0,
      validator: function validator14(val) {
        if (!val)
          return true;
        return ["default", "success", "warning", "error"].includes(val);
      }
    },
    suffix: {
      type: [String, Function]
    },
    suffixIcon: {
      type: Function
    },
    tips: {
      type: [String, Function]
    },
    type: {
      type: String,
      "default": "text",
      validator: function validator15(val) {
        if (!val)
          return true;
        return ["text", "number", "url", "tel", "password", "search", "submit", "hidden"].includes(val);
      }
    },
    value: {
      type: String,
      "default": void 0
    },
    modelValue: {
      type: String,
      "default": void 0
    },
    defaultValue: {
      type: String,
      "default": ""
    },
    onBlur: Function,
    onChange: Function,
    onClear: Function,
    onClick: Function,
    onCompositionend: Function,
    onCompositionstart: Function,
    onEnter: Function,
    onFocus: Function,
    onKeydown: Function,
    onKeypress: Function,
    onKeyup: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onPaste: Function,
    onValidate: Function,
    onWheel: Function
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function useFormDisabled(extend2) {
    var ctx = vue.getCurrentInstance();
    var propsDisabled = vue.computed(function() {
      return ctx.props.disabled;
    });
    var _inject = vue.inject("formDisabled", /* @__PURE__ */ Object.create(null)), disabled = _inject.disabled;
    return vue.computed(function() {
      return propsDisabled.value || (disabled === null || disabled === void 0 ? void 0 : disabled.value) || (extend2 === null || extend2 === void 0 ? void 0 : extend2.value) || false;
    });
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var FormItemInjectionKey = Symbol("FormItemProvide");
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function useLengthLimit(params) {
    var getValueByLimitNumber = function getValueByLimitNumber2(inputValue) {
      var _params$value = params.value, allowInputOverMax = _params$value.allowInputOverMax, maxlength = _params$value.maxlength, maxcharacter = _params$value.maxcharacter;
      if (!(maxlength || maxcharacter) || allowInputOverMax || !inputValue)
        return inputValue;
      if (maxlength) {
        return limitUnicodeMaxLength(inputValue, maxlength);
      }
      if (maxcharacter) {
        var r = getCharacterLength$1(inputValue, maxcharacter);
        if (isObject_1(r)) {
          return r.characters;
        }
      }
    };
    var limitNumber = vue.computed(function() {
      var _params$value2 = params.value, maxlength = _params$value2.maxlength, maxcharacter = _params$value2.maxcharacter, value = _params$value2.value;
      if (isNumber_1(value))
        return String(value);
      if (maxlength && maxcharacter) {
        log.warn("Input", "Pick one of maxlength and maxcharacter please.");
      }
      if (maxlength) {
        var length = value !== null && value !== void 0 && value.length ? getUnicodeLength(value) : 0;
        return "".concat(length, "/").concat(maxlength);
      }
      if (maxcharacter) {
        return "".concat(getCharacterLength$1(value || ""), "/").concat(maxcharacter);
      }
      return "";
    });
    var innerStatus = vue.computed(function() {
      if (limitNumber.value) {
        var _limitNumber$value$sp = limitNumber.value.split("/"), _limitNumber$value$sp2 = _slicedToArray(_limitNumber$value$sp, 2), current = _limitNumber$value$sp2[0], total = _limitNumber$value$sp2[1];
        return Number(current) > Number(total) ? "error" : "";
      }
      return "";
    });
    var tStatus = vue.computed(function() {
      var status = params.value.status;
      return status || innerStatus.value;
    });
    var onValidateChange = function onValidateChange2() {
      var _params$value$onValid, _params$value3;
      (_params$value$onValid = (_params$value3 = params.value).onValidate) === null || _params$value$onValid === void 0 || _params$value$onValid.call(_params$value3, {
        error: innerStatus.value ? "exceed-maximum" : void 0
      });
    };
    vue.watch(innerStatus, onValidateChange);
    vue.onMounted(function() {
      innerStatus.value && onValidateChange();
    });
    return {
      tStatus,
      limitNumber,
      getValueByLimitNumber
    };
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function useInput(props2, expose) {
    var _toRefs = vue.toRefs(props2), value = _toRefs.value, modelValue = _toRefs.modelValue;
    var inputValue = vue.ref();
    var isComposition = vue.ref(false);
    var compositionValue = vue.ref();
    var clearIconRef = vue.ref(null);
    var innerClickElement = vue.ref();
    var disabled = useFormDisabled();
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange), _useVModel2 = _slicedToArray(_useVModel, 2), innerValue = _useVModel2[0], setInnerValue = _useVModel2[1];
    var isHover = vue.ref(false);
    var focused = vue.ref(false);
    var renderType = vue.ref(props2.type);
    var inputRef = vue.ref(null);
    var limitParams = vue.computed(function() {
      return {
        value: [void 0, null].includes(innerValue.value) ? void 0 : String(innerValue.value),
        status: props2.status,
        maxlength: Number(props2.maxlength),
        maxcharacter: props2.maxcharacter,
        allowInputOverMax: props2.allowInputOverMax,
        onValidate: props2.onValidate
      };
    });
    var _useLengthLimit = useLengthLimit(limitParams), limitNumber = _useLengthLimit.limitNumber, getValueByLimitNumber = _useLengthLimit.getValueByLimitNumber, tStatus = _useLengthLimit.tStatus;
    var showClear = vue.computed(function() {
      return (innerValue.value && !disabled.value && props2.clearable && !props2.readonly || props2.showClearIconOnEmpty) && isHover.value;
    });
    var focus = function focus2() {
      var _inputRef$value;
      return (_inputRef$value = inputRef.value) === null || _inputRef$value === void 0 ? void 0 : _inputRef$value.focus();
    };
    var blur = function blur2() {
      var _inputRef$value2;
      return (_inputRef$value2 = inputRef.value) === null || _inputRef$value2 === void 0 ? void 0 : _inputRef$value2.blur();
    };
    var emitFocus = function emitFocus2(e) {
      var _props$onFocus;
      inputValue.value = innerValue.value;
      if (props2.disabled)
        return;
      focused.value = true;
      (_props$onFocus = props2.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props2, innerValue.value, {
        e
      });
    };
    var emitClear = function emitClear2(_ref) {
      var _props$onClear;
      var e = _ref.e;
      setInnerValue("", {
        e,
        trigger: "clear"
      });
      (_props$onClear = props2.onClear) === null || _props$onClear === void 0 || _props$onClear.call(props2, {
        e
      });
    };
    var onClearIconMousedown = function onClearIconMousedown2(e) {
      innerClickElement.value = e.target;
    };
    var emitPassword = function emitPassword2() {
      var toggleType = renderType.value === "password" ? "text" : "password";
      renderType.value = toggleType;
    };
    var setInputElValue = function setInputElValue2() {
      var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var inputEl = inputRef.value;
      if (!inputEl)
        return;
      var sV = String(v);
      if (!inputEl.value) {
        return;
      }
      if (inputEl.value !== sV) {
        inputEl.value = sV;
      }
    };
    var inputValueChangeHandle = function inputValueChangeHandle2(e) {
      var _innerValue$value;
      var target = e.target;
      var val = target.value;
      if (props2.type !== "number" && val.length > ((_innerValue$value = innerValue.value) === null || _innerValue$value === void 0 ? void 0 : _innerValue$value.length)) {
        val = getValueByLimitNumber(val);
      }
      setInnerValue(val, {
        e
      });
      vue.nextTick(function() {
        setInputElValue(innerValue.value);
      });
    };
    var handleInput = function handleInput2(e) {
      var checkInputType = e.inputType && e.inputType === "insertCompositionText";
      var val = e.currentTarget.value;
      if (checkInputType || isComposition.value) {
        compositionValue.value = val;
        return;
      }
      inputValueChangeHandle(e);
    };
    var isClearIcon = function isClearIcon2() {
      var _clearIconRef$value;
      var tmp = innerClickElement.value;
      if (!tmp || !tmp.tagName || !((_clearIconRef$value = clearIconRef.value) !== null && _clearIconRef$value !== void 0 && _clearIconRef$value.$el) || !["path", "svg"].includes(tmp.tagName))
        return false;
      while (tmp) {
        var _clearIconRef$value2;
        if (((_clearIconRef$value2 = clearIconRef.value) === null || _clearIconRef$value2 === void 0 ? void 0 : _clearIconRef$value2.$el) === tmp) {
          return true;
        }
        tmp = tmp.parentNode;
      }
      return false;
    };
    var formItem = vue.inject(FormItemInjectionKey, void 0);
    var formatAndEmitBlur = function formatAndEmitBlur2(e) {
      if (props2.format) {
        inputValue.value = props2.format(innerValue.value);
      }
      focused.value = false;
      if (!isClearIcon() && props2.allowTriggerBlur) {
        var _props$onBlur;
        (_props$onBlur = props2.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props2, innerValue.value, {
          e
        });
        formItem === null || formItem === void 0 || formItem.handleBlur();
      }
    };
    var onHandleCompositionend = function onHandleCompositionend2(e) {
      var _props$onCompositione;
      isComposition.value = false;
      compositionValue.value = "";
      inputValueChangeHandle(e);
      (_props$onCompositione = props2.onCompositionend) === null || _props$onCompositione === void 0 || _props$onCompositione.call(props2, innerValue.value, {
        e
      });
    };
    var onHandleCompositionstart = function onHandleCompositionstart2(e) {
      var _props$onCompositions;
      isComposition.value = true;
      var value2 = e.currentTarget.value;
      compositionValue.value = value2;
      (_props$onCompositions = props2.onCompositionstart) === null || _props$onCompositions === void 0 || _props$onCompositions.call(props2, innerValue.value, {
        e
      });
    };
    var onRootClick = function onRootClick2(e) {
      var _inputRef$value3, _props$onClick;
      (_inputRef$value3 = inputRef.value) === null || _inputRef$value3 === void 0 || _inputRef$value3.focus();
      (_props$onClick = props2.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props2, {
        e
      });
    };
    vue.watch(function() {
      return props2.autofocus;
    }, function(value2) {
      if (value2 === true) {
        vue.nextTick(function() {
          var _inputRef$value4;
          (_inputRef$value4 = inputRef.value) === null || _inputRef$value4 === void 0 || _inputRef$value4.focus();
        });
      }
    }, {
      immediate: true
    });
    vue.watch(innerValue, function(val, oldVal) {
      if (oldVal === void 0 && props2.format) {
        inputValue.value = props2.format(val);
      } else {
        inputValue.value = val;
      }
      var newVal = getValueByLimitNumber(val);
      if (newVal !== val && props2.type !== "number") {
        setInnerValue(newVal, {
          trigger: "initial"
        });
      }
    }, {
      immediate: true
    });
    vue.watch(function() {
      return props2.type;
    }, function(v) {
      renderType.value = v;
    }, {
      immediate: true
    });
    expose({
      inputRef,
      focus,
      blur
    });
    return {
      isHover,
      focused,
      renderType,
      showClear,
      inputRef,
      clearIconRef,
      inputValue,
      isComposition,
      compositionValue,
      limitNumber,
      tStatus,
      emitFocus,
      formatAndEmitBlur,
      onHandleCompositionend,
      onHandleCompositionstart,
      onRootClick,
      emitPassword,
      handleInput,
      emitClear,
      onClearIconMousedown,
      innerValue
    };
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function useInputEventHandler(props2, isHover) {
    var handleKeydown = function handleKeydown2(e) {
      if (props2.disabled)
        return;
      var code = e.code;
      if (/enter/i.test(code) || /enter/i.test(e.key)) {
        var _props$onEnter;
        (_props$onEnter = props2.onEnter) === null || _props$onEnter === void 0 || _props$onEnter.call(props2, e.currentTarget.value, {
          e
        });
      } else {
        var _props$onKeydown;
        (_props$onKeydown = props2.onKeydown) === null || _props$onKeydown === void 0 || _props$onKeydown.call(props2, e.currentTarget.value, {
          e
        });
      }
    };
    var handleKeyUp = function handleKeyUp2(e) {
      var _props$onKeyup;
      if (props2.disabled)
        return;
      (_props$onKeyup = props2.onKeyup) === null || _props$onKeyup === void 0 || _props$onKeyup.call(props2, e.currentTarget.value, {
        e
      });
    };
    var handleKeypress = function handleKeypress2(e) {
      var _props$onKeypress;
      if (props2.disabled)
        return;
      (_props$onKeypress = props2.onKeypress) === null || _props$onKeypress === void 0 || _props$onKeypress.call(props2, e.currentTarget.value, {
        e
      });
    };
    var onHandlePaste = function onHandlePaste2(e) {
      var _props$onPaste;
      if (props2.disabled)
        return;
      var clipData = e.clipboardData || window.clipboardData;
      (_props$onPaste = props2.onPaste) === null || _props$onPaste === void 0 || _props$onPaste.call(props2, {
        e,
        pasteValue: clipData === null || clipData === void 0 ? void 0 : clipData.getData("text/plain")
      });
    };
    var mouseEvent = function mouseEvent2(v) {
      return isHover.value = v;
    };
    var onHandleMousewheel = function onHandleMousewheel2(e) {
      var _props$onWheel;
      return (_props$onWheel = props2.onWheel) === null || _props$onWheel === void 0 ? void 0 : _props$onWheel.call(props2, {
        e
      });
    };
    var onInputMouseenter = function onInputMouseenter2(e) {
      var _props$onMouseenter;
      mouseEvent(true);
      (_props$onMouseenter = props2.onMouseenter) === null || _props$onMouseenter === void 0 || _props$onMouseenter.call(props2, {
        e
      });
    };
    var onInputMouseleave = function onInputMouseleave2(e) {
      var _props$onMouseleave;
      mouseEvent(false);
      (_props$onMouseleave = props2.onMouseleave) === null || _props$onMouseleave === void 0 || _props$onMouseleave.call(props2, {
        e
      });
    };
    return {
      handleKeydown,
      handleKeyUp,
      handleKeypress,
      onHandlePaste,
      onHandleMousewheel,
      onInputMouseenter,
      onInputMouseleave
    };
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var ANIMATION_TIME = 100;
  function useInputWidth(props2, inputRef, innerValue) {
    var _toRefs = vue.toRefs(props2), autoWidth = _toRefs.autoWidth, placeholder = _toRefs.placeholder;
    var inputPreRef = vue.ref(null);
    var observerTimer = vue.ref(null);
    var updateInputWidth = function updateInputWidth2() {
      if (!inputPreRef.value || !inputRef.value)
        return;
      var _inputPreRef$value$ge = inputPreRef.value.getBoundingClientRect(), width = _inputPreRef$value$ge.width;
      inputRef.value.style.width = "".concat(width || 0, "px");
    };
    useResizeObserver(inputRef, function() {
      if (autoWidth.value) {
        observerTimer.value = setTimeout(function() {
          updateInputWidth();
          clearTimeout(observerTimer.value);
        }, ANIMATION_TIME);
      }
    });
    vue.onBeforeUnmount(function() {
      clearTimeout(observerTimer.value);
    });
    var addListeners = function addListeners2() {
      vue.watch([innerValue, placeholder], function() {
        if (!autoWidth.value)
          return;
        vue.nextTick(function() {
          updateInputWidth();
        });
      }, {
        immediate: true
      });
    };
    vue.onMounted(function() {
      if (autoWidth.value) {
        addListeners();
      }
    });
    return {
      inputPreRef
    };
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var _excluded$1 = ["isHover", "tStatus", "inputRef", "renderType", "showClear", "focused", "inputValue", "isComposition", "compositionValue", "innerValue", "limitNumber"];
  function ownKeys$7(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$7(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$7(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function getValidAttrs$2(obj) {
    var newObj = {};
    Object.keys(obj).forEach(function(key2) {
      if (!isUndefined_1(obj[key2])) {
        newObj[key2] = obj[key2];
      }
    });
    return newObj;
  }
  var _Input = vue.defineComponent({
    name: "TInput",
    props: _objectSpread$7(_objectSpread$7({}, props$8), {}, {
      showInput: {
        type: Boolean,
        "default": true
      },
      keepWrapperWidth: {
        type: Boolean,
        "default": false
      },
      allowTriggerBlur: {
        type: Boolean,
        "default": true
      }
    }),
    setup: function setup12(props2, _ref) {
      var expose = _ref.expose;
      var _useConfig = useConfig("input"), globalConfig = _useConfig.globalConfig;
      var _useGlobalIcon = useGlobalIcon({
        BrowseIcon,
        BrowseOffIcon,
        CloseCircleFilledIcon
      }), BrowseIcon$1 = _useGlobalIcon.BrowseIcon, BrowseOffIcon$1 = _useGlobalIcon.BrowseOffIcon, CloseCircleFilledIcon$1 = _useGlobalIcon.CloseCircleFilledIcon;
      var disabled = useFormDisabled();
      var COMPONENT_NAME = usePrefixClass("input");
      var INPUT_WRAP_CLASS = usePrefixClass("input__wrap");
      var INPUT_TIPS_CLASS = usePrefixClass("input__tips");
      var _useCommonClassName = useCommonClassName$2(), STATUS = _useCommonClassName.STATUS, SIZE = _useCommonClassName.SIZE;
      var classPrefix = usePrefixClass();
      var renderTNodeJSX3 = useTNodeJSX();
      var _useInput = useInput(props2, expose), isHover = _useInput.isHover, tStatus = _useInput.tStatus, inputRef = _useInput.inputRef, renderType = _useInput.renderType, showClear = _useInput.showClear, focused = _useInput.focused, inputValue = _useInput.inputValue, isComposition = _useInput.isComposition, compositionValue = _useInput.compositionValue, innerValue = _useInput.innerValue, limitNumber = _useInput.limitNumber, inputHandle = _objectWithoutProperties(_useInput, _excluded$1);
      var _useInputWidth = useInputWidth(props2, inputRef, innerValue), inputPreRef = _useInputWidth.inputPreRef;
      var inputEventHandler = useInputEventHandler(props2, isHover);
      var tPlaceholder = vue.computed(function() {
        var _props2$placeholder;
        return (_props2$placeholder = props2.placeholder) !== null && _props2$placeholder !== void 0 ? _props2$placeholder : globalConfig.value.placeholder;
      });
      var inputAttrs = vue.computed(function() {
        var _props2$autocomplete;
        return getValidAttrs$2({
          autofocus: props2.autofocus,
          disabled: disabled.value,
          readonly: props2.readonly,
          placeholder: tPlaceholder.value,
          maxlength: !props2.allowInputOverMax && props2.maxlength || void 0,
          name: props2.name || void 0,
          type: renderType.value,
          autocomplete: (_props2$autocomplete = props2.autocomplete) !== null && _props2$autocomplete !== void 0 ? _props2$autocomplete : globalConfig.value.autocomplete || void 0,
          unselectable: props2.readonly ? "on" : void 0
        });
      });
      var wrapClasses = vue.computed(function() {
        return [INPUT_WRAP_CLASS.value, _defineProperty$2({}, "".concat(COMPONENT_NAME.value, "--auto-width"), props2.autoWidth && !props2.keepWrapperWidth)];
      });
      var inputEvents = getValidAttrs$2({
        onFocus: function onFocus(e) {
          return inputHandle.emitFocus(e);
        },
        onBlur: inputHandle.formatAndEmitBlur,
        onKeydown: inputEventHandler.handleKeydown,
        onKeyup: inputEventHandler.handleKeyUp,
        onKeypress: inputEventHandler.handleKeypress,
        onPaste: inputEventHandler.onHandlePaste,
        onCompositionend: inputHandle.onHandleCompositionend,
        onCompositionstart: inputHandle.onHandleCompositionstart
      });
      return function() {
        var _ref4, _compositionValue$val, _inputValue$value;
        var prefixIcon = renderTNodeJSX3("prefixIcon");
        var suffixIcon = renderTNodeJSX3("suffixIcon");
        var passwordIcon = renderTNodeJSX3("passwordIcon");
        var label = renderTNodeJSX3("label", {
          silent: true
        });
        var suffix2 = renderTNodeJSX3("suffix");
        var limitNode = limitNumber.value && props2.showLimitNumber ? vue.createVNode("div", {
          "class": ["".concat(classPrefix.value, "-input__limit-number"), _defineProperty$2({}, "".concat(classPrefix.value, "-is-disabled"), disabled.value)]
        }, [limitNumber.value]) : null;
        var labelContent = label ? vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__prefix")
        }, [label]) : null;
        var suffixContent = suffix2 || limitNode ? vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__suffix")
        }, [suffix2, limitNode]) : null;
        if (props2.type === "password") {
          if (renderType.value === "password") {
            suffixIcon = vue.createVNode(BrowseOffIcon$1, {
              "class": "".concat(COMPONENT_NAME.value, "__suffix-clear"),
              "onClick": inputHandle.emitPassword
            }, null);
          } else if (renderType.value === "text") {
            suffixIcon = vue.createVNode(BrowseIcon$1, {
              "class": "".concat(COMPONENT_NAME.value, "__suffix-clear"),
              "onClick": inputHandle.emitPassword
            }, null);
          }
        }
        if (showClear.value) {
          if (props2.type === "password") {
            passwordIcon = vue.createVNode(CloseCircleFilledIcon$1, {
              "ref": inputHandle.clearIconRef,
              "class": "".concat(COMPONENT_NAME.value, "__suffix-clear"),
              "onClick": inputHandle.emitClear,
              "onMousedown": inputHandle.onClearIconMousedown
            }, null);
          } else {
            suffixIcon = vue.createVNode(CloseCircleFilledIcon$1, {
              "ref": inputHandle.clearIconRef,
              "class": "".concat(COMPONENT_NAME.value, "__suffix-clear"),
              "onClick": inputHandle.emitClear,
              "onMousedown": inputHandle.onClearIconMousedown
            }, null);
          }
        }
        var classes = [COMPONENT_NAME.value, props2.inputClass, (_ref4 = {}, _defineProperty$2(_ref4, SIZE.value[props2.size], props2.size !== "medium"), _defineProperty$2(_ref4, STATUS.value.disabled, disabled.value), _defineProperty$2(_ref4, STATUS.value.focused, focused.value), _defineProperty$2(_ref4, "".concat(classPrefix.value, "-is-").concat(tStatus.value), tStatus.value && tStatus.value !== "default"), _defineProperty$2(_ref4, "".concat(classPrefix.value, "-align-").concat(props2.align), props2.align !== "left"), _defineProperty$2(_ref4, "".concat(classPrefix.value, "-is-readonly"), props2.readonly), _defineProperty$2(_ref4, "".concat(COMPONENT_NAME.value, "--prefix"), prefixIcon || labelContent), _defineProperty$2(_ref4, "".concat(COMPONENT_NAME.value, "--suffix"), suffixIcon || suffixContent), _defineProperty$2(_ref4, "".concat(COMPONENT_NAME.value, "--focused"), focused.value), _ref4)];
        var tips = renderTNodeJSX3("tips");
        var tipsClasses = [INPUT_TIPS_CLASS.value, "".concat(classPrefix.value, "-tips"), "".concat(classPrefix.value, "-is-").concat(tStatus.value || "default")];
        return vue.withDirectives(vue.createVNode("div", {
          "class": wrapClasses.value
        }, [vue.createVNode("div", {
          "class": classes,
          "onClick": inputHandle.onRootClick,
          "onMouseenter": inputEventHandler.onInputMouseenter,
          "onMouseleave": inputEventHandler.onInputMouseleave,
          "onWheel": inputEventHandler.onHandleMousewheel
        }, [prefixIcon ? vue.createVNode("span", {
          "class": ["".concat(COMPONENT_NAME.value, "__prefix"), "".concat(COMPONENT_NAME.value, "__prefix-icon")]
        }, [prefixIcon]) : null, labelContent, props2.showInput && vue.createVNode("input", vue.mergeProps({
          "class": "".concat(COMPONENT_NAME.value, "__inner")
        }, inputAttrs.value, inputEvents, {
          "ref": inputRef,
          "value": isComposition.value ? (_compositionValue$val = compositionValue.value) !== null && _compositionValue$val !== void 0 ? _compositionValue$val : "" : (_inputValue$value = inputValue.value) !== null && _inputValue$value !== void 0 ? _inputValue$value : "",
          "onInput": function onInput(e) {
            return inputHandle.handleInput(e);
          }
        }), null), props2.autoWidth && vue.createVNode("span", {
          "ref": inputPreRef,
          "class": "".concat(classPrefix.value, "-input__input-pre")
        }, [innerValue.value || tPlaceholder.value]), suffixContent, passwordIcon ? vue.createVNode("span", {
          "class": ["".concat(COMPONENT_NAME.value, "__suffix"), "".concat(COMPONENT_NAME.value, "__suffix-icon"), "".concat(COMPONENT_NAME.value, "__clear")]
        }, [passwordIcon]) : null, suffixIcon ? vue.createVNode("span", {
          "class": ["".concat(COMPONENT_NAME.value, "__suffix"), "".concat(COMPONENT_NAME.value, "__suffix-icon"), _defineProperty$2({}, "".concat(COMPONENT_NAME.value, "__clear"), showClear.value)]
        }, [suffixIcon]) : null]), tips && vue.createVNode("div", {
          "class": tipsClasses
        }, [tips])]), [[vue.vShow, props2.type !== "hidden"]]);
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var inputGroupProps = {
    separate: Boolean
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var _InputGroup = vue.defineComponent({
    name: "TInputGroup",
    props: inputGroupProps,
    setup: function setup13(props2) {
      var COMPONENT_NAME = usePrefixClass("input-group");
      var renderTNodeJSX3 = useTNodeJSX();
      var CLASS = vue.computed(function() {
        return [COMPONENT_NAME.value, _defineProperty$2({}, "".concat(COMPONENT_NAME.value, "--separate"), props2.separate)];
      });
      return function() {
        return vue.createVNode("div", {
          "class": CLASS.value
        }, [renderTNodeJSX3("default")]);
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var Input = withInstall(_Input);
  withInstall(_InputGroup);
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var props$7 = {
    align: {
      type: String,
      validator: function validator16(val) {
        if (!val)
          return true;
        return ["left", "center", "right"].includes(val);
      }
    },
    allowInputOverLimit: {
      type: Boolean,
      "default": true
    },
    autoWidth: Boolean,
    decimalPlaces: {
      type: Number,
      "default": void 0
    },
    disabled: Boolean,
    format: {
      type: Function
    },
    inputProps: {
      type: Object
    },
    label: {
      type: [String, Function]
    },
    largeNumber: Boolean,
    max: {
      type: [String, Number],
      "default": Infinity
    },
    min: {
      type: [String, Number],
      "default": -Infinity
    },
    placeholder: {
      type: String,
      "default": void 0
    },
    readonly: Boolean,
    size: {
      type: String,
      "default": "medium",
      validator: function validator17(val) {
        if (!val)
          return true;
        return ["small", "medium", "large"].includes(val);
      }
    },
    status: {
      type: String,
      "default": "default",
      validator: function validator18(val) {
        if (!val)
          return true;
        return ["default", "success", "warning", "error"].includes(val);
      }
    },
    step: {
      type: [String, Number],
      "default": 1
    },
    suffix: {
      type: [String, Function]
    },
    theme: {
      type: String,
      "default": "row",
      validator: function validator19(val) {
        if (!val)
          return true;
        return ["column", "row", "normal"].includes(val);
      }
    },
    tips: {
      type: [String, Function]
    },
    value: {
      type: [String, Number],
      "default": void 0
    },
    modelValue: {
      type: [String, Number],
      "default": void 0
    },
    defaultValue: {
      type: [String, Number]
    },
    onBlur: Function,
    onChange: Function,
    onEnter: Function,
    onFocus: Function,
    onKeydown: Function,
    onKeypress: Function,
    onKeyup: Function,
    onValidate: Function
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function fillZero(length) {
    return new Array(length).fill(0).join("");
  }
  function isInputNumber(num) {
    if (!num)
      return true;
    if (isNumber_1(num))
      return !Number.isNaN(num);
    var r = /^[0-9|e|E|-]+\.*[0-9|e|E|-]*$/.test(num);
    if (!r)
      return false;
    var eCount = 0;
    var negativeCount = 0;
    var dotCount = 0;
    for (var i = 0, len = num.length; i < len; i++) {
      if (num[i] === ".") {
        dotCount += 1;
        if (dotCount > 1)
          return false;
      }
      if (/(e|E)+/.test(num[i])) {
        eCount += 1;
        if (eCount > 1)
          return false;
      }
      if (num[i] === "-") {
        negativeCount += 1;
        if (negativeCount > 2)
          return false;
      }
    }
    return true;
  }
  function removeInvalidZero(num) {
    var decimal = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (num.indexOf(".") !== -1) {
      log.error("InputNumber", "num is not a integer number.");
      return num;
    }
    if (!num || num === "0" && decimal)
      return "";
    if (num === "0")
      return num;
    return (decimal ? num.replace(/0+$/, "") : num.replace(/^0+/, "")) || "0";
  }
  function largeIntNumberAdd(num1, num2) {
    var decimal = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var number1 = removeInvalidZero(num1, decimal);
    var number2 = removeInvalidZero(num2, decimal);
    var isFirstLarger = number1.length > number2.length;
    var maxNumber = isFirstLarger ? number1 : number2;
    var minNumber = isFirstLarger ? number2 : number1;
    var newNumber = [];
    var step = [];
    var diff = decimal ? 0 : maxNumber.length - minNumber.length;
    var len = decimal ? minNumber.length : maxNumber.length;
    for (var i = len - 1; i >= 0; i--) {
      var minIndex = i - diff;
      var count = Number(maxNumber[i]) + (Number(minNumber[minIndex]) || 0) + (step[i] || 0);
      if (count >= 10) {
        step[i - 1] = 1;
      }
      newNumber.unshift(String(count % 10));
    }
    if (step[-1]) {
      newNumber.unshift("1");
    }
    if (decimal) {
      return newNumber.concat(maxNumber.slice(len, maxNumber.length)).join("");
    }
    return newNumber.join("");
  }
  function largePositiveNumberAdd(num1, num2) {
    var _num1$split = num1.split("."), _num1$split2 = _slicedToArray(_num1$split, 2), _num1$split2$ = _num1$split2[0], intNumber1 = _num1$split2$ === void 0 ? "0" : _num1$split2$, _num1$split2$2 = _num1$split2[1], decimalNumber1 = _num1$split2$2 === void 0 ? "0" : _num1$split2$2;
    var _num2$split = num2.split("."), _num2$split2 = _slicedToArray(_num2$split, 2), _num2$split2$ = _num2$split2[0], intNumber2 = _num2$split2$ === void 0 ? "0" : _num2$split2$, _num2$split2$2 = _num2$split2[1], decimalNumber2 = _num2$split2$2 === void 0 ? "0" : _num2$split2$2;
    var integerSum = largeIntNumberAdd(intNumber1, intNumber2);
    if (decimalNumber1 === "0" && decimalNumber2 === "0")
      return integerSum;
    var newDecimalNumber1 = removeInvalidZero(decimalNumber1, true);
    var newDecimalNumber2 = removeInvalidZero(decimalNumber2, true);
    var decimalNumberSum = largeIntNumberAdd(newDecimalNumber1, newDecimalNumber2, true);
    var decimalLength = decimalNumberSum.length;
    if (decimalLength > newDecimalNumber1.length && decimalLength > newDecimalNumber2.length) {
      return [removeInvalidZero(largeIntNumberAdd(integerSum, "1")), removeInvalidZero(decimalNumberSum.slice(1), true)].filter(function(v) {
        return v;
      }).join(".");
    }
    return [removeInvalidZero(integerSum), removeInvalidZero(decimalNumberSum, true)].filter(function(v) {
      return v;
    }).join(".");
  }
  function compareLargeIntegerNumber(num1, num2) {
    var number1 = removeInvalidZero(num1);
    var number2 = removeInvalidZero(num2);
    if (number1.length === number2.length) {
      for (var i = 0, len = number1.length; i < len; i++) {
        if (number1[i] > number2[i])
          return 1;
        if (number1[i] < number2[i])
          return -1;
      }
      return 0;
    }
    return number1.length > number2.length ? 1 : -1;
  }
  function compareLargeDecimalNumber(num1, num2) {
    var number1 = num1 && num1 !== "0" ? num1.replace(/0+$/, "") : "0";
    var number2 = num2 && num2 !== "0" ? num2.replace(/0+$/, "") : "0";
    var maxLength = Math.max(number1.length, number2.length);
    for (var i = 0, len = maxLength; i < len; i++) {
      if ((number1[i] || 0) > (number2[i] || 0))
        return 1;
      if ((number1[i] || 0) < (number2[i] || 0))
        return -1;
    }
    return 0;
  }
  function formatENumber(num) {
    var _num$split = num.split("e"), _num$split2 = _slicedToArray(_num$split, 2), num1 = _num$split2[0], num2 = _num$split2[1];
    if (!num2)
      return num;
    var _num$split3 = num.split("."), _num$split4 = _slicedToArray(_num$split3, 2), integer = _num$split4[0], _num$split4$ = _num$split4[1], initDecimal = _num$split4$ === void 0 ? "" : _num$split4$;
    var zeroCount = Number(num2);
    var _initDecimal$split = initDecimal.split("e"), _initDecimal$split2 = _slicedToArray(_initDecimal$split, 1), decimal = _initDecimal$split2[0];
    if (zeroCount > decimal.length) {
      var multipleZero = fillZero(zeroCount - decimal.length);
      return num1.replace(/(^0+|\.)/g, "") + multipleZero;
    }
    var n1 = integer.replace(/^0+/, "") + decimal.slice(0, zeroCount);
    var d2 = decimal.slice(zeroCount);
    return d2 ? [n1, d2].join(".") : n1;
  }
  function compareLargeNumber(num1, num2) {
    var _formatENumber$split = formatENumber(num1).split("."), _formatENumber$split2 = _slicedToArray(_formatENumber$split, 2), integer1 = _formatENumber$split2[0], decimal1 = _formatENumber$split2[1];
    var _formatENumber$split3 = formatENumber(num2).split("."), _formatENumber$split4 = _slicedToArray(_formatENumber$split3, 2), integer2 = _formatENumber$split4[0], decimal2 = _formatENumber$split4[1];
    var result = compareLargeIntegerNumber(integer1.replace("-", ""), integer2.replace("-", ""));
    var integer1IsNegative = integer1.includes("-");
    var integer2IsNegative = integer2.includes("-");
    if (integer1IsNegative && !integer2IsNegative)
      return -1;
    if (!integer1IsNegative && integer2IsNegative)
      return 1;
    if (integer1IsNegative && integer2IsNegative) {
      if (result === 0)
        return 0;
      return result > 0 ? -1 : 1;
    }
    if (result === 0) {
      return compareLargeDecimalNumber(decimal1, decimal2);
    }
    return result;
  }
  function isInfinity(num) {
    return [-Infinity, Infinity].includes(Number(num));
  }
  function isSafeNumber(num) {
    return Number(num) < Number.MAX_SAFE_INTEGER && Number(num) > Number.MIN_SAFE_INTEGER;
  }
  function compareNumber(num1, num2, largeNumber) {
    var isSafeNumberCompare = isSafeNumber(num1) && isSafeNumber(num2) && !largeNumber;
    var isInfinityCompare = isInfinity(num1) || isInfinity(num2);
    if (isSafeNumberCompare || isInfinityCompare) {
      if (Number(num1) === Number(num2))
        return 0;
      return Number(num1) > Number(num2) ? 1 : -1;
    }
    return compareLargeNumber(String(num1), String(num2));
  }
  function largeIntegerNumberSubtract(num1, num2, p) {
    if (num1 === num2)
      return "0";
    var _ref = p || {}, decimal = _ref.decimal, stayZero = _ref.stayZero;
    var number1 = removeInvalidZero(num1);
    var number2 = removeInvalidZero(num2);
    var isFirstLarger = compareLargeIntegerNumber(number1, number2) > 0;
    var maxNumber = isFirstLarger ? number1 : number2;
    var minNumber = isFirstLarger ? number2 : number1;
    var newNumber = [];
    var step = [];
    var diff = decimal ? 0 : maxNumber.length - minNumber.length;
    var len = decimal ? minNumber.length : maxNumber.length;
    for (var i = len - 1; i >= 0; i--) {
      var minIndex = i - diff;
      var count = Number(maxNumber[i]) - (Number(minNumber[minIndex]) || 0) - (step[i] || 0);
      if (count < 0) {
        step[i - 1] = 1;
        count += 10;
      }
      newNumber.unshift(String(count));
    }
    if (decimal) {
      return newNumber.concat(maxNumber.slice(len, maxNumber.length)).join("");
    }
    var finalNumber = newNumber.join("");
    if (!stayZero) {
      finalNumber = finalNumber.replace(/^0+/, "");
    }
    return removeInvalidZero(isFirstLarger ? finalNumber : "-".concat(finalNumber));
  }
  function largePositiveNumberSubtract(num1, num2) {
    if (num1 === num2)
      return "0";
    var isFirstLarger = compareNumber(num1, num2, true) > 0;
    var maxNumber = isFirstLarger ? num1 : num2;
    var minNumber = isFirstLarger ? num2 : num1;
    var _maxNumber$split = maxNumber.split("."), _maxNumber$split2 = _slicedToArray(_maxNumber$split, 2), intNumber1 = _maxNumber$split2[0], _maxNumber$split2$ = _maxNumber$split2[1], decimalNumber1 = _maxNumber$split2$ === void 0 ? "0" : _maxNumber$split2$;
    var _minNumber$split = minNumber.split("."), _minNumber$split2 = _slicedToArray(_minNumber$split, 2), intNumber2 = _minNumber$split2[0], _minNumber$split2$ = _minNumber$split2[1], decimalNumber2 = _minNumber$split2$ === void 0 ? "0" : _minNumber$split2$;
    var integerNumber = largeIntegerNumberSubtract(intNumber1, intNumber2);
    if (decimalNumber1 === "0" && decimalNumber2 === "0") {
      return isFirstLarger ? integerNumber : "-".concat(integerNumber);
    }
    var decimalNumber = "";
    var addOneNumber = decimalNumber1;
    if (decimalNumber1.length < decimalNumber2.length) {
      addOneNumber = "".concat(decimalNumber1).concat(fillZero(decimalNumber2.length - decimalNumber1.length));
    }
    if (compareLargeDecimalNumber(addOneNumber, decimalNumber2) >= 0) {
      decimalNumber = largeIntegerNumberSubtract(addOneNumber, decimalNumber2, {
        decimal: true
      });
    } else {
      if (decimalNumber1.length < decimalNumber2.length || decimalNumber1 === "0") {
        decimalNumber = largeIntegerNumberSubtract("1".concat(addOneNumber), decimalNumber2, {
          stayZero: true
        });
        decimalNumber = fillZero(decimalNumber2.length - decimalNumber.length) + decimalNumber;
      } else {
        decimalNumber = largeIntegerNumberSubtract(decimalNumber1, decimalNumber2, {
          decimal: true
        });
      }
      integerNumber = largeIntegerNumberSubtract(integerNumber, "1");
    }
    var finalNumber = decimalNumber ? [integerNumber, decimalNumber].join(".") : integerNumber;
    return isFirstLarger ? finalNumber : "-".concat(finalNumber);
  }
  function largeNumberSubtract(num1, num2) {
    var isFirstNegative = num1[0] === "-";
    var isSecondNegative = num2[0] === "-";
    if (isFirstNegative && !isSecondNegative) {
      var r = largePositiveNumberAdd(num1.slice(1), num2);
      return "-".concat(r);
    }
    if (isFirstNegative && isSecondNegative) {
      return largePositiveNumberSubtract(num2.slice(1), num1.slice(1));
    }
    if (!isFirstNegative && isSecondNegative) {
      return largePositiveNumberAdd(num1, num2.slice(1));
    }
    return largePositiveNumberSubtract(num1, num2);
  }
  function largeNumberAdd(num1, num2) {
    var isFirstNegative = num1[0] === "-";
    var isSecondNegative = num2[0] === "-";
    if (isFirstNegative && !isSecondNegative) {
      return largePositiveNumberSubtract(num2, num1.slice(1));
    }
    if (isFirstNegative && isSecondNegative) {
      var r = largePositiveNumberAdd(num2.slice(1), num1.slice(1));
      return "-".concat(r);
    }
    if (!isFirstNegative && isSecondNegative) {
      return largePositiveNumberSubtract(num1, num2.slice(1));
    }
    return largePositiveNumberAdd(num1, num2);
  }
  function largeNumberToFixed(number) {
    var decimalPlaces = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var largeNumber = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    if (!largeNumber)
      return Number(number).toFixed(decimalPlaces);
    if (!isString_1(number))
      return String(number);
    var _number$split = number.split("."), _number$split2 = _slicedToArray(_number$split, 2), num1 = _number$split2[0], num2 = _number$split2[1];
    if (!num2) {
      return decimalPlaces ? [number, fillZero(decimalPlaces)].join(".") : number;
    }
    if (decimalPlaces === 0) {
      return Number(num2[0]) >= 5 ? largePositiveNumberAdd(num1, "1") : num1;
    }
    var decimalNumber = num2.slice(0, decimalPlaces);
    if (num2.length < decimalPlaces) {
      decimalNumber += fillZero(decimalPlaces - num2.length);
    } else {
      decimalNumber = Number(num2[decimalPlaces]) >= 5 ? largePositiveNumberAdd(decimalNumber, "1") : decimalNumber;
    }
    return [num1, decimalNumber].join(".");
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function canAddNumber(num, max2) {
    var largeNumber = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!num && num !== 0)
      return true;
    if (largeNumber && isString_1(num)) {
      return compareNumber(num, max2, largeNumber) < 0;
    }
    return num < max2;
  }
  function canReduceNumber(num, min2) {
    var largeNumber = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!num && num !== 0)
      return true;
    if (largeNumber && isString_1(num)) {
      return compareNumber(num, min2, largeNumber) > 0;
    }
    return num > min2;
  }
  function putInRangeNumber(val, params) {
    if (val === "")
      return void 0;
    var max2 = params.max, min2 = params.min, lastValue = params.lastValue, largeNumber = params.largeNumber;
    if (!isInputNumber(val))
      return lastValue;
    if (largeNumber && (isString_1(max2) || max2 === Infinity) && (isString_1(min2) || min2 === -Infinity)) {
      if (compareNumber(max2, val, largeNumber) < 0)
        return max2;
      if (compareNumber(min2, val, largeNumber) > 0)
        return min2;
      return val;
    }
    return Math.max(Number(min2), Math.min(Number(max2), Number(val)));
  }
  function positiveAdd(num1, num2) {
    var _num1$toString$split$, _num2$toString$split$;
    if (!num1 || !num2)
      return (num1 || 0) + (num2 || 0);
    var r1 = ((_num1$toString$split$ = num1.toString().split(".")[1]) === null || _num1$toString$split$ === void 0 ? void 0 : _num1$toString$split$.length) || 0;
    var r2 = ((_num2$toString$split$ = num2.toString().split(".")[1]) === null || _num2$toString$split$ === void 0 ? void 0 : _num2$toString$split$.length) || 0;
    if (!r1 && !r2)
      return num1 + num2;
    var newNumber1 = num1;
    var newNumber2 = num2;
    var diff = Math.abs(r1 - r2);
    var digit = Math.pow(10, Math.max(r1, r2));
    if (diff > 0) {
      var cm = Math.pow(10, diff);
      if (r1 > r2) {
        newNumber1 = Number(num1.toString().replace(".", ""));
        newNumber2 = Number(num2.toString().replace(".", "")) * cm;
      } else {
        newNumber1 = Number(num1.toString().replace(".", "")) * cm;
        newNumber2 = Number(num2.toString().replace(".", ""));
      }
    } else {
      newNumber1 = Number(num1.toString().replace(".", ""));
      newNumber2 = Number(num2.toString().replace(".", ""));
    }
    return (newNumber1 + newNumber2) / digit;
  }
  function positiveSubtract(num1, num2) {
    var _num1$toString$split$2, _num2$toString$split$2;
    if (!num1 || !num2)
      return (num1 || 0) - (num2 || 0);
    var r1 = ((_num1$toString$split$2 = num1.toString().split(".")[1]) === null || _num1$toString$split$2 === void 0 ? void 0 : _num1$toString$split$2.length) || 0;
    var r2 = ((_num2$toString$split$2 = num2.toString().split(".")[1]) === null || _num2$toString$split$2 === void 0 ? void 0 : _num2$toString$split$2.length) || 0;
    var digit = Math.pow(10, Math.max(r1, r2));
    var n = r1 >= r2 ? r1 : r2;
    return Number(((num1 * digit - num2 * digit) / digit).toFixed(n));
  }
  function add(num1, num2) {
    if (num1 < 0 && num2 > 0)
      return positiveSubtract(num2, Math.abs(num1));
    if (num1 < 0 && num2 < 0)
      return positiveAdd(Math.abs(num1), Math.abs(num2)) * -1;
    if (num1 > 0 && num2 < 0)
      return positiveSubtract(num1, Math.abs(num2));
    return positiveAdd(num1, num2);
  }
  function subtract(num1, num2) {
    if (num1 < 0 && num2 > 0)
      return positiveAdd(Math.abs(num1), num2) * -1;
    if (num1 < 0 && num2 < 0)
      return positiveSubtract(Math.abs(num2), Math.abs(num1));
    if (num1 > 0 && num2 < 0)
      return positiveAdd(num1, Math.abs(num2));
    return positiveSubtract(num1, num2);
  }
  function getStepValue(p) {
    var op = p.op, step = p.step, lastValue = p.lastValue, max2 = p.max, min2 = p.min, largeNumber = p.largeNumber;
    if (step <= 0) {
      log.error("InputNumber", "step must be larger than 0.");
      return lastValue;
    }
    var tStep = isNumber_1(step) ? String(step) : step;
    var newVal;
    if (op === "add") {
      if (largeNumber && isString_1(lastValue)) {
        newVal = largeNumberAdd(String(lastValue), String(tStep));
      } else {
        newVal = add(Number(lastValue || 0), Number(step));
      }
    } else if (op === "reduce") {
      if (largeNumber && isString_1(lastValue)) {
        newVal = largeNumberSubtract(String(lastValue), String(tStep));
      } else {
        newVal = subtract(Number(lastValue || 0), Number(step));
      }
    }
    if (isUndefined_1(lastValue)) {
      newVal = putInRangeNumber(newVal, {
        max: max2,
        min: min2,
        lastValue,
        largeNumber
      });
    }
    return largeNumber ? newVal : Number(newVal);
  }
  function getMaxOrMinValidateResult(p) {
    var largeNumber = p.largeNumber, value = p.value, max2 = p.max, min2 = p.min;
    if (isUndefined_1(largeNumber))
      return void 0;
    if (largeNumber && isNumber_1(value)) {
      log.warn("InputNumber", "largeNumber value must be a string.");
    }
    var error4;
    if (compareNumber(value, max2, largeNumber) > 0) {
      error4 = "exceed-maximum";
    } else if (compareNumber(value, min2, largeNumber) < 0) {
      error4 = "below-minimum";
    } else {
      error4 = void 0;
    }
    return error4;
  }
  var specialCode = ["-", ".", "e", "E", "+"];
  function canInputNumber(number, largeNumber) {
    var _number$match;
    if (["", null, void 0].includes(number))
      return true;
    if (number.slice(0, 2) === "00")
      return false;
    if (((_number$match = number.match(/\./g)) === null || _number$match === void 0 ? void 0 : _number$match.length) > 1)
      return false;
    var tmpNumber = number.slice(1);
    if (/(\+|-)/.test(tmpNumber) && !/e+/i.test(tmpNumber))
      return false;
    var isNumber2 = largeNumber && isInputNumber(number) || !Number.isNaN(Number(number));
    if (!isNumber2 && !specialCode.includes(number.slice(-1)))
      return false;
    if (/e/i.test(number) && !/\de/i.test(number))
      return false;
    return true;
  }
  function canSetValue(number, lastNumber) {
    return parseFloat(number) !== lastNumber && !Number.isNaN(Number(number));
  }
  function formatUnCompleteNumber(number) {
    var extra = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (["", null, void 0].includes(number) || !/\d+/.test(number))
      return void 0;
    var decimalPlaces = extra.decimalPlaces, largeNumber = extra.largeNumber, isToFixed = extra.isToFixed;
    var newNumber = number.replace(/[.|+|\-|e]$/, "");
    if (largeNumber) {
      newNumber = formatENumber(newNumber);
    }
    if (decimalPlaces !== void 0) {
      newNumber = largeNumberToFixed(newNumber, decimalPlaces, largeNumber);
    }
    if (largeNumber)
      return newNumber;
    return isToFixed ? newNumber : parseFloat(newNumber);
  }
  function formatThousandths(number) {
    var thousandthsRegExp = /^[-+]?\d{1,3}(,\d{3})*(\.(\d*))?$/;
    if (thousandthsRegExp.test(number))
      return number.replace(/,/g, "");
    return number;
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function useInputNumber(props2) {
    var _useCommonClassName = useCommonClassName(), classPrefix = _useCommonClassName.classPrefix, sizeClassNames = _useCommonClassName.sizeClassNames, statusClassNames = _useCommonClassName.statusClassNames;
    var _toRefs = vue.toRefs(props2), value = _toRefs.value, modelValue = _toRefs.modelValue, max2 = _toRefs.max, min2 = _toRefs.min;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange), _useVModel2 = _slicedToArray(_useVModel, 2), tValue = _useVModel2[0], setTValue = _useVModel2[1];
    var inputRef = vue.ref();
    var userInput = vue.ref("");
    var tDisabled = useFormDisabled();
    var isError = vue.ref();
    var disabledReduce = vue.computed(function() {
      return tDisabled.value || !canReduceNumber(tValue.value, props2.min, props2.largeNumber);
    });
    var disabledAdd = vue.computed(function() {
      return tDisabled.value || !canAddNumber(tValue.value, props2.max, props2.largeNumber);
    });
    var wrapClasses = vue.computed(function() {
      var _ref;
      return ["".concat(classPrefix.value, "-input-number"), sizeClassNames[props2.size], (_ref = {}, _defineProperty$2(_ref, statusClassNames.disabled, tDisabled.value), _defineProperty$2(_ref, "".concat(classPrefix.value, "-is-controls-right"), props2.theme === "column"), _defineProperty$2(_ref, "".concat(classPrefix.value, "-input-number--").concat(props2.theme), props2.theme), _defineProperty$2(_ref, "".concat(classPrefix.value, "-input-number--auto-width"), props2.autoWidth), _ref)];
    });
    var reduceClasses = vue.computed(function() {
      return ["".concat(classPrefix.value, "-input-number__decrease"), _defineProperty$2({}, statusClassNames.disabled, disabledReduce.value)];
    });
    var addClasses = vue.computed(function() {
      return ["".concat(classPrefix.value, "-input-number__increase"), _defineProperty$2({}, statusClassNames.disabled, disabledAdd.value)];
    });
    var getUserInput = function getUserInput2(value2) {
      var _inputRef$value;
      if (!value2 && value2 !== 0)
        return "";
      var inputStr = value2 || value2 === 0 ? String(value2) : "";
      if (!((_inputRef$value = inputRef.value) !== null && _inputRef$value !== void 0 && (_inputRef$value = _inputRef$value.inputRef) !== null && _inputRef$value !== void 0 && _inputRef$value.contains(document.activeElement))) {
        var num = formatUnCompleteNumber(inputStr, {
          decimalPlaces: props2.decimalPlaces,
          largeNumber: props2.largeNumber,
          isToFixed: true
        });
        inputStr = num || num === 0 ? String(num) : "";
        if (props2.format) {
          inputStr = String(props2.format(value2, {
            fixedNumber: inputStr
          }));
        }
      }
      return inputStr;
    };
    vue.watch(tValue, function(val) {
      var largeNumber = props2.largeNumber, decimalPlaces = props2.decimalPlaces;
      var inputValue = [void 0, null].includes(val) ? "" : String(val);
      if (!largeNumber && !Number.isNaN(userInput.value)) {
        if (parseFloat(userInput.value) !== val) {
          userInput.value = getUserInput(inputValue);
        }
        var fixedNumber = Number(largeNumberToFixed(inputValue, decimalPlaces, largeNumber));
        if (decimalPlaces !== void 0 && ![void 0, null].includes(val) && Number(fixedNumber) !== Number(tValue.value)) {
          setTValue(fixedNumber, {
            type: "props",
            e: void 0
          });
        }
      }
      if (largeNumber) {
        userInput.value = getUserInput(inputValue);
        if (decimalPlaces !== void 0 && largeNumberToFixed(inputValue, decimalPlaces, largeNumber) !== val) {
          setTValue(userInput.value, {
            type: "props",
            e: void 0
          });
        }
      }
    }, {
      immediate: true
    });
    vue.watch([tValue, max2, min2], function() {
      var _props$onValidate;
      if ([void 0, "", null].includes(tValue.value))
        return;
      var max22 = props2.max, min22 = props2.min, largeNumber = props2.largeNumber;
      var error4 = getMaxOrMinValidateResult({
        value: tValue.value,
        largeNumber,
        max: max22,
        min: min22
      });
      isError.value = error4;
      (_props$onValidate = props2.onValidate) === null || _props$onValidate === void 0 || _props$onValidate.call(props2, {
        error: error4
      });
    }, {
      immediate: true
    });
    var handleStepValue = function handleStepValue2(op) {
      var newValue = getStepValue({
        op,
        step: props2.step,
        max: props2.max,
        min: props2.min,
        lastValue: tValue.value,
        largeNumber: props2.largeNumber
      });
      var largeNumber = props2.largeNumber, max22 = props2.max, min22 = props2.min;
      var overLimit = getMaxOrMinValidateResult({
        value: newValue,
        largeNumber,
        max: max22,
        min: min22
      });
      return {
        overLimit,
        newValue
      };
    };
    var handleReduce = function handleReduce2(e) {
      if (disabledReduce.value || props2.readonly)
        return;
      var r = handleStepValue("reduce");
      if (r.overLimit && !props2.allowInputOverLimit)
        return;
      setTValue(r.newValue, {
        type: "reduce",
        e
      });
    };
    var handleAdd = function handleAdd2(e) {
      if (disabledAdd.value || props2.readonly)
        return;
      var r = handleStepValue("add");
      if (r.overLimit && !props2.allowInputOverLimit)
        return;
      setTValue(r.newValue, {
        type: "add",
        e
      });
    };
    var onInnerInputChange = function onInnerInputChange2(inputValue, _ref4) {
      var e = _ref4.e;
      var val = formatThousandths(inputValue);
      if (!canInputNumber(val, props2.largeNumber))
        return;
      userInput.value = val;
      if (props2.largeNumber) {
        setTValue(val, {
          type: "input",
          e
        });
        return;
      }
      if (canSetValue(String(val), Number(tValue.value))) {
        var newVal = val === "" ? void 0 : Number(val);
        setTValue(newVal, {
          type: "input",
          e
        });
      }
    };
    var handleBlur = function handleBlur2(value2, ctx) {
      var _props$onBlur;
      var largeNumber = props2.largeNumber, max22 = props2.max, min22 = props2.min, decimalPlaces = props2.decimalPlaces;
      if (!props2.allowInputOverLimit && tValue.value !== void 0) {
        var r = getMaxOrMinValidateResult({
          value: tValue.value,
          largeNumber,
          max: max22,
          min: min22
        });
        if (r === "below-minimum") {
          setTValue(min22, {
            type: "blur",
            e: ctx.e
          });
          return;
        }
        if (r === "exceed-maximum") {
          setTValue(max22, {
            type: "blur",
            e: ctx.e
          });
          return;
        }
      }
      var newValue = formatUnCompleteNumber(value2, {
        decimalPlaces,
        largeNumber
      });
      userInput.value = getUserInput(newValue);
      if (newValue !== tValue.value) {
        setTValue(newValue, {
          type: "blur",
          e: ctx.e
        });
      }
      (_props$onBlur = props2.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props2, newValue, ctx);
    };
    var handleFocus = function handleFocus2(value2, ctx) {
      var _props$onFocus;
      userInput.value = tValue.value || tValue.value === 0 ? String(tValue.value) : "";
      (_props$onFocus = props2.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props2, value2, ctx);
    };
    var handleKeydown = function handleKeydown2(value2, ctx) {
      var _props$onKeydown;
      if (tDisabled.value)
        return;
      var e = ctx.e;
      var keyEvent = {
        ArrowUp: handleAdd,
        ArrowDown: handleReduce
      };
      var code = e.code || e.key;
      if (keyEvent[code] !== void 0) {
        keyEvent[code](e);
      }
      (_props$onKeydown = props2.onKeydown) === null || _props$onKeydown === void 0 || _props$onKeydown.call(props2, value2, ctx);
    };
    var handleKeyup = function handleKeyup2(value2, ctx) {
      var _props$onKeyup;
      (_props$onKeyup = props2.onKeyup) === null || _props$onKeyup === void 0 || _props$onKeyup.call(props2, value2, ctx);
    };
    var handleKeypress = function handleKeypress2(value2, ctx) {
      var _props$onKeypress;
      (_props$onKeypress = props2.onKeypress) === null || _props$onKeypress === void 0 || _props$onKeypress.call(props2, value2, ctx);
    };
    var handleEnter = function handleEnter2(value2, ctx) {
      var _props$onEnter;
      userInput.value = getUserInput(value2);
      var newValue = formatUnCompleteNumber(value2, {
        decimalPlaces: props2.decimalPlaces,
        largeNumber: props2.largeNumber
      });
      if (newValue !== value2 && String(newValue) !== value2) {
        setTValue(newValue, {
          type: "enter",
          e: ctx.e
        });
      }
      (_props$onEnter = props2.onEnter) === null || _props$onEnter === void 0 || _props$onEnter.call(props2, newValue, ctx);
    };
    var focus = function focus2() {
      inputRef.value.focus();
    };
    var blur = function blur2() {
      inputRef.value.blur();
    };
    var listeners = {
      onBlur: handleBlur,
      onFocus: handleFocus,
      onKeydown: handleKeydown,
      onKeyup: handleKeyup,
      onKeypress: handleKeypress,
      onEnter: handleEnter,
      onClick: focus
    };
    return {
      classPrefix,
      wrapClasses,
      reduceClasses,
      addClasses,
      tDisabled,
      isError,
      listeners,
      userInput,
      tValue,
      inputRef,
      focus,
      blur,
      handleReduce,
      handleAdd,
      onInnerInputChange
    };
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function ownKeys$6(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$6(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$6(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  var _InputNumber = vue.defineComponent({
    name: "TInputNumber",
    props: props$7,
    setup: function setup14(props2, context) {
      var renderTNodeJSX3 = useTNodeJSX();
      var _useGlobalIcon = useGlobalIcon({
        AddIcon,
        RemoveIcon,
        ChevronDownIcon,
        ChevronUpIcon
      }), AddIcon$1 = _useGlobalIcon.AddIcon, RemoveIcon$1 = _useGlobalIcon.RemoveIcon, ChevronDownIcon$1 = _useGlobalIcon.ChevronDownIcon, ChevronUpIcon$1 = _useGlobalIcon.ChevronUpIcon;
      var p = useInputNumber(props2);
      var inputRef = p.inputRef;
      context.expose(_objectSpread$6({}, p));
      return function() {
        var reduceIcon = props2.theme === "column" ? vue.createVNode(ChevronDownIcon$1, {
          "size": props2.size
        }, null) : vue.createVNode(RemoveIcon$1, {
          "size": props2.size
        }, null);
        var addIcon = props2.theme === "column" ? vue.createVNode(ChevronUpIcon$1, {
          "size": props2.size
        }, null) : vue.createVNode(AddIcon$1, {
          "size": props2.size
        }, null);
        var status = p.isError.value ? "error" : props2.status;
        var classPrefix = p.classPrefix.value;
        var tipsNode = renderTNodeJSX3("tips");
        return vue.createVNode("div", {
          "class": p.wrapClasses.value
        }, [props2.theme !== "normal" && vue.createVNode(Button, {
          "class": p.reduceClasses.value,
          "disabled": p.tDisabled.value,
          "onClick": p.handleReduce,
          "variant": "outline",
          "shape": "square",
          "icon": function icon() {
            return reduceIcon;
          }
        }, null), vue.createVNode(Input, vue.mergeProps({
          "ref": inputRef,
          "disabled": p.tDisabled.value,
          "readonly": props2.readonly,
          "autocomplete": "off",
          "placeholder": props2.placeholder,
          "unselectable": props2.readonly ? "on" : "off",
          "autoWidth": props2.autoWidth,
          "align": props2.align || (props2.theme === "row" ? "center" : void 0),
          "status": status,
          "label": props2.label,
          "suffix": props2.suffix
        }, p.listeners, props2.inputProps, {
          "value": p.userInput.value,
          "onChange": p.onInnerInputChange
        }), context.slots), props2.theme !== "normal" && vue.createVNode(Button, {
          "class": p.addClasses.value,
          "disabled": p.tDisabled.value,
          "onClick": p.handleAdd,
          "variant": "outline",
          "shape": "square",
          "icon": function icon() {
            return addIcon;
          }
        }, null), tipsNode && vue.createVNode("div", {
          "class": "".concat(classPrefix, "-input__tips ").concat(classPrefix, "-tips ").concat(classPrefix, "-is-").concat(status)
        }, [tipsNode])]);
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var InputNumber = withInstall(_InputNumber);
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function setCacheAdd$1(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  var _setCacheAdd = setCacheAdd$1;
  function setCacheHas$1(value) {
    return this.__data__.has(value);
  }
  var _setCacheHas = setCacheHas$1;
  var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
  function SetCache$1(values) {
    var index2 = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while (++index2 < length) {
      this.add(values[index2]);
    }
  }
  SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
  SetCache$1.prototype.has = setCacheHas;
  var _SetCache = SetCache$1;
  function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
    var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
    while (fromRight ? index2-- : ++index2 < length) {
      if (predicate(array[index2], index2, array)) {
        return index2;
      }
    }
    return -1;
  }
  var _baseFindIndex = baseFindIndex$1;
  function baseIsNaN$1(value) {
    return value !== value;
  }
  var _baseIsNaN = baseIsNaN$1;
  function strictIndexOf$1(array, value, fromIndex) {
    var index2 = fromIndex - 1, length = array.length;
    while (++index2 < length) {
      if (array[index2] === value) {
        return index2;
      }
    }
    return -1;
  }
  var _strictIndexOf = strictIndexOf$1;
  var baseFindIndex = _baseFindIndex, baseIsNaN = _baseIsNaN, strictIndexOf = _strictIndexOf;
  function baseIndexOf$1(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var _baseIndexOf = baseIndexOf$1;
  var baseIndexOf = _baseIndexOf;
  function arrayIncludes$1(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }
  var _arrayIncludes = arrayIncludes$1;
  function arrayIncludesWith$1(array, value, comparator) {
    var index2 = -1, length = array == null ? 0 : array.length;
    while (++index2 < length) {
      if (comparator(value, array[index2])) {
        return true;
      }
    }
    return false;
  }
  var _arrayIncludesWith = arrayIncludesWith$1;
  function cacheHas$1(cache, key2) {
    return cache.has(key2);
  }
  var _cacheHas = cacheHas$1;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var SetCache = _SetCache, arrayIncludes = _arrayIncludes, arrayIncludesWith = _arrayIncludesWith, arrayMap$1 = _arrayMap, baseUnary = _baseUnary, cacheHas = _cacheHas;
  var nativeMin = Math.min;
  function baseIntersection$1(arrays, iteratee, comparator) {
    var includes = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = Infinity, result = [];
    while (othIndex--) {
      var array = arrays[othIndex];
      if (othIndex && iteratee) {
        array = arrayMap$1(array, baseUnary(iteratee));
      }
      maxLength = nativeMin(array.length, maxLength);
      caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : void 0;
    }
    array = arrays[0];
    var index2 = -1, seen = caches[0];
    outer:
      while (++index2 < length && result.length < maxLength) {
        var value = array[index2], computed2 = iteratee ? iteratee(value) : value;
        value = comparator || value !== 0 ? value : 0;
        if (!(seen ? cacheHas(seen, computed2) : includes(result, computed2, comparator))) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache ? cacheHas(cache, computed2) : includes(arrays[othIndex], computed2, comparator))) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed2);
          }
          result.push(value);
        }
      }
    return result;
  }
  var _baseIntersection = baseIntersection$1;
  var isArrayLikeObject = isArrayLikeObject_1;
  function castArrayLikeObject$1(value) {
    return isArrayLikeObject(value) ? value : [];
  }
  var _castArrayLikeObject = castArrayLikeObject$1;
  var arrayMap = _arrayMap, baseIntersection = _baseIntersection, baseRest = _baseRest, castArrayLikeObject = _castArrayLikeObject;
  var intersection = baseRest(function(arrays) {
    var mapped = arrayMap(arrays, castArrayLikeObject);
    return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
  });
  var intersection_1 = intersection;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var props$6 = {
    checkAll: Boolean,
    checked: {
      type: Boolean,
      "default": void 0
    },
    modelValue: {
      type: Boolean,
      "default": void 0
    },
    defaultChecked: Boolean,
    "default": {
      type: [String, Function]
    },
    disabled: {
      type: Boolean,
      "default": void 0
    },
    indeterminate: Boolean,
    label: {
      type: [String, Function]
    },
    lazyLoad: Boolean,
    name: {
      type: String,
      "default": ""
    },
    readonly: Boolean,
    value: {
      type: [String, Number, Boolean]
    },
    onChange: Function
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var CheckboxGroupInjectionKey = Symbol("CheckboxGroupProvide");
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function observe(element2, root2, callback, marginBottom) {
    if (typeof window === "undefined")
      return null;
    if (!window || !window.IntersectionObserver) {
      callback();
      return null;
    }
    var io = null;
    try {
      io = new window.IntersectionObserver(function(entries) {
        var entry = entries[0];
        if (entry.isIntersecting) {
          callback();
          io.unobserve(element2);
        }
      }, {
        rootMargin: "0px 0px ".concat(marginBottom, "px 0px"),
        root: root2
      });
      io.observe(element2);
    } catch (e) {
      console.error(e);
      callback();
    }
    return io;
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function useCheckboxLazyLoad(labelRef, lazyLoad) {
    var ioObserver = vue.ref();
    var showCheckbox = vue.ref(true);
    var handleLazyLoad = function handleLazyLoad2() {
      if (!lazyLoad.value)
        return;
      showCheckbox.value = false;
      var io = observe(labelRef.value, null, function() {
        showCheckbox.value = true;
      }, 0);
      ioObserver.value = io;
    };
    vue.onMounted(handleLazyLoad);
    vue.watch([lazyLoad, labelRef], handleLazyLoad);
    vue.onBeforeUnmount(function() {
      if (!lazyLoad.value)
        return;
      ioObserver.value.unobserve(labelRef.value);
    });
    return {
      showCheckbox
    };
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var CHECKED_CODE_REG = /(enter|space)/i;
  function useKeyboardEvent(handleChange) {
    var keyboardEventListener = function keyboardEventListener2(e) {
      var isCheckedCode = CHECKED_CODE_REG.test(e.key) || CHECKED_CODE_REG.test(e.code);
      if (isCheckedCode) {
        e.preventDefault();
        var _e$currentTarget$quer = e.currentTarget.querySelector("input"), disabled = _e$currentTarget$quer.disabled;
        !disabled && handleChange(e);
      }
    };
    var onCheckboxFocus = function onCheckboxFocus2(e) {
      e.currentTarget.addEventListener("keydown", keyboardEventListener);
    };
    var onCheckboxBlur = function onCheckboxBlur2(e) {
      e.currentTarget.removeEventListener("keydown", keyboardEventListener);
    };
    return {
      onCheckboxFocus,
      onCheckboxBlur
    };
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function ownKeys$5(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$5(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$5(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  var _Checkbox = vue.defineComponent({
    name: "TCheckbox",
    props: _objectSpread$5(_objectSpread$5({}, props$6), {}, {
      needRipple: Boolean,
      stopLabelTrigger: Boolean,
      index: Number,
      data: Object
    }),
    setup: function setup15(props2) {
      var labelRef = vue.ref();
      if (props2.needRipple) {
        useRipple(labelRef);
      }
      var _useCommonClassName = useCommonClassName$2(), STATUS = _useCommonClassName.STATUS;
      var _toRefs = vue.toRefs(props2), checked = _toRefs.checked, modelValue = _toRefs.modelValue, lazyLoad = _toRefs.lazyLoad;
      var _useVModel = useVModel(checked, modelValue, props2.defaultChecked, props2.onChange, "checked"), _useVModel2 = _slicedToArray(_useVModel, 2), innerChecked = _useVModel2[0], setInnerChecked = _useVModel2[1];
      var checkboxGroupData = vue.inject(CheckboxGroupInjectionKey, void 0);
      var tName = vue.ref();
      vue.watch(function() {
        return [props2.name, checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.name].join("_");
      }, function() {
        var name = props2.name || (checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.name);
        if (name) {
          tName.value = name;
        }
      }, {
        immediate: true
      });
      var tChecked = vue.ref(false);
      var getChecked = function getChecked2() {
        var value = props2.value, checkAll = props2.checkAll;
        if (checkAll)
          return checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.isCheckAll;
        return checkboxGroupData !== null && checkboxGroupData !== void 0 && checkboxGroupData.value ? checkboxGroupData.value.checkedValues.includes(value) : innerChecked.value;
      };
      vue.watch(function() {
        var _checkboxGroupData$va;
        return [innerChecked.value, checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.isCheckAll, checkboxGroupData === null || checkboxGroupData === void 0 || (_checkboxGroupData$va = checkboxGroupData.value.checkedValues) === null || _checkboxGroupData$va === void 0 ? void 0 : _checkboxGroupData$va.join(",")];
      }, function() {
        tChecked.value = getChecked();
      }, {
        immediate: true
      });
      var beforeDisabled = vue.computed(function() {
        if (!props2.checkAll && !tChecked.value && checkboxGroupData !== null && checkboxGroupData !== void 0 && checkboxGroupData.value.maxExceeded) {
          return true;
        }
        return null;
      });
      var afterDisabled = vue.computed(function() {
        return checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.disabled;
      });
      var isDisabled = useDisabled({
        beforeDisabled,
        afterDisabled
      });
      var tIndeterminate = vue.ref(false);
      vue.watch(function() {
        return [props2.checkAll, props2.indeterminate, checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.indeterminate];
      }, function() {
        tIndeterminate.value = props2.checkAll ? checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.indeterminate : props2.indeterminate;
      }, {
        immediate: true
      });
      var COMPONENT_NAME = usePrefixClass("checkbox");
      var labelClasses = vue.ref({});
      vue.watch([tChecked, isDisabled, tIndeterminate], function() {
        var _ref;
        labelClasses.value = ["".concat(COMPONENT_NAME.value), (_ref = {}, _defineProperty$2(_ref, STATUS.value.checked, tChecked.value), _defineProperty$2(_ref, STATUS.value.disabled, isDisabled.value), _defineProperty$2(_ref, STATUS.value.indeterminate, tIndeterminate.value), _ref)];
      }, {
        immediate: true
      });
      var handleChange = function handleChange2(e) {
        if (props2.readonly)
          return;
        var checked2 = !tChecked.value;
        setInnerChecked(checked2, {
          e
        });
        if (checkboxGroupData !== null && checkboxGroupData !== void 0 && checkboxGroupData.value.handleCheckboxChange) {
          checkboxGroupData.value.onCheckedChange({
            checked: checked2,
            checkAll: props2.checkAll,
            e,
            option: props2
          });
        }
      };
      var renderContent3 = useContent();
      var handleLabelClick = function handleLabelClick2(e) {
        if (props2.stopLabelTrigger)
          e.preventDefault();
      };
      var _useCheckboxLazyLoad = useCheckboxLazyLoad(labelRef, lazyLoad), showCheckbox = _useCheckboxLazyLoad.showCheckbox;
      var _useKeyboard = useKeyboardEvent(handleChange), onCheckboxFocus = _useKeyboard.onCheckboxFocus, onCheckboxBlur = _useKeyboard.onCheckboxBlur;
      return function() {
        return vue.createVNode("label", {
          "ref": labelRef,
          "class": labelClasses.value,
          "tabindex": isDisabled.value ? void 0 : "0",
          "onFocus": onCheckboxFocus,
          "onBlur": onCheckboxBlur
        }, [!showCheckbox.value ? null : [vue.createVNode("input", {
          "type": "checkbox",
          "tabindex": "-1",
          "class": "".concat(COMPONENT_NAME.value, "__former"),
          "disabled": isDisabled.value,
          "readonly": props2.readonly,
          "indeterminate": tIndeterminate.value,
          "name": tName.value,
          "value": props2.value ? props2.value : void 0,
          "checked": tChecked.value,
          "onChange": handleChange,
          "key": "input"
        }, null), vue.createVNode("span", {
          "class": "".concat(COMPONENT_NAME.value, "__input"),
          "key": "input-span"
        }, null), vue.createVNode("span", {
          "class": "".concat(COMPONENT_NAME.value, "__label"),
          "key": "label",
          "onClick": handleLabelClick
        }, [renderContent3("default", "label")])]]);
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var props$5 = {
    disabled: {
      type: Boolean,
      "default": void 0
    },
    lazyLoad: Boolean,
    max: {
      type: Number,
      "default": void 0
    },
    name: {
      type: String,
      "default": ""
    },
    options: {
      type: Array
    },
    value: {
      type: Array,
      "default": void 0
    },
    modelValue: {
      type: Array,
      "default": void 0
    },
    defaultValue: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    onChange: Function
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var _Group$1 = vue.defineComponent({
    name: "TCheckboxGroup",
    props: props$5,
    setup: function setup16(props2) {
      var COMPONENT_NAME = usePrefixClass("checkbox-group");
      var renderTNodeJSX3 = useTNodeJSX();
      var isArray2 = Array.isArray;
      var _toRefs = vue.toRefs(props2), value = _toRefs.value, modelValue = _toRefs.modelValue;
      var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange), _useVModel2 = _slicedToArray(_useVModel, 2), innerValue = _useVModel2[0], setInnerValue = _useVModel2[1];
      var optionList = vue.ref([]);
      var intersectionLen = vue.computed(function() {
        if (!isArray2(innerValue.value))
          return 0;
        var values = optionList.value.map(function(item) {
          return item.value;
        });
        var n = intersection_1(innerValue.value, values);
        return n.length;
      });
      var isCheckAll = vue.computed(function() {
        var optionItems = optionList.value.filter(function(item) {
          return !item.disabled && !item.checkAll;
        }).map(function(t) {
          return t.value;
        });
        var intersectionValues = intersection_1(optionItems, innerValue.value);
        return intersectionValues.length === optionItems.length;
      });
      var indeterminate = vue.computed(function() {
        return !isCheckAll.value && intersectionLen.value < optionList.value.length && intersectionLen.value !== 0;
      });
      var maxExceeded = vue.computed(function() {
        return !isUndefined_1(props2.max) && innerValue.value.length === props2.max;
      });
      vue.watchEffect(function() {
        if (!props2.options)
          return [];
        optionList.value = props2.options.map(function(item) {
          return isObject_1(item) ? item : {
            label: String(item),
            value: item
          };
        });
      });
      var getAllCheckboxValue = function getAllCheckboxValue2() {
        var val = /* @__PURE__ */ new Set();
        for (var i = 0, len = optionList.value.length; i < len; i++) {
          var item = optionList.value[i];
          if (item.checkAll)
            continue;
          if (item.disabled)
            continue;
          val.add(item.value);
          if (maxExceeded.value)
            break;
        }
        return _toConsumableArray(val);
      };
      var onCheckAllChange = function onCheckAllChange2(checked, context) {
        var value2 = checked ? getAllCheckboxValue() : [];
        setInnerValue(value2, {
          e: context.e,
          type: checked ? "check" : "uncheck",
          current: void 0,
          option: void 0
        });
      };
      var handleCheckboxChange = function handleCheckboxChange2(data) {
        var currentValue = data.option.value;
        if (!isArray2(innerValue.value)) {
          console.warn("TDesign CheckboxGroup Warn: `value` must be an array, instead of ".concat(_typeof(innerValue.value)));
          return;
        }
        var val = _toConsumableArray(innerValue.value);
        if (data.checked) {
          val.push(currentValue);
        } else {
          var i = val.indexOf(currentValue);
          val.splice(i, 1);
        }
        setInnerValue(val, {
          e: data.e,
          current: data.option.value,
          option: data.option,
          type: data.checked ? "check" : "uncheck"
        });
      };
      var onCheckedChange = function onCheckedChange2(p) {
        var checked = p.checked, checkAll = p.checkAll, e = p.e;
        if (checkAll) {
          onCheckAllChange(checked, {
            e
          });
        } else {
          handleCheckboxChange(p);
        }
      };
      var getChildComponentSlots = useChildComponentSlots();
      var getOptionListBySlots = function getOptionListBySlots2() {
        var nodes = getChildComponentSlots("Checkbox");
        var arr = [];
        nodes === null || nodes === void 0 || nodes.forEach(function(node) {
          var option = node.props;
          if (!option)
            return;
          if (option["check-all"] === "" || option["check-all"] === true) {
            option.checkAll = true;
          }
          arr.push(option);
        });
        return arr;
      };
      vue.provide(CheckboxGroupInjectionKey, vue.computed(function() {
        return {
          name: props2.name,
          isCheckAll: isCheckAll.value,
          checkedValues: innerValue.value || [],
          maxExceeded: maxExceeded.value,
          disabled: props2.disabled,
          indeterminate: indeterminate.value,
          handleCheckboxChange,
          onCheckedChange
        };
      }));
      return function() {
        var _props2$options;
        var children = null;
        if ((_props2$options = props2.options) !== null && _props2$options !== void 0 && _props2$options.length) {
          var _optionList$value;
          children = (_optionList$value = optionList.value) === null || _optionList$value === void 0 ? void 0 : _optionList$value.map(function(option, index2) {
            var _innerValue$value;
            return vue.createVNode(_Checkbox, vue.mergeProps({
              "key": "".concat(option.value || "").concat(index2),
              "lazyLoad": props2.lazyLoad
            }, option, {
              "index": index2,
              "checked": (_innerValue$value = innerValue.value) === null || _innerValue$value === void 0 ? void 0 : _innerValue$value.includes(option.value),
              "data": option
            }), null);
          });
        } else {
          var nodes = renderTNodeJSX3("default");
          optionList.value = getOptionListBySlots();
          children = nodes;
        }
        return vue.createVNode("div", {
          "class": COMPONENT_NAME.value,
          "role": "group",
          "aria-label": "checkbox-group"
        }, [children]);
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var Checkbox = withInstall(_Checkbox);
  withInstall(_Group$1);
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function isNil(value) {
    return value == null;
  }
  var isNil_1 = isNil;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var props$4 = {
    allowUncheck: Boolean,
    checked: {
      type: Boolean,
      "default": void 0
    },
    modelValue: {
      type: Boolean,
      "default": void 0
    },
    defaultChecked: Boolean,
    "default": {
      type: [String, Function]
    },
    disabled: {
      type: Boolean,
      "default": void 0
    },
    label: {
      type: [String, Function]
    },
    name: {
      type: String,
      "default": ""
    },
    value: {
      type: [String, Number, Boolean],
      "default": void 0
    },
    onChange: Function,
    onClick: Function
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var RadioGroupInjectionKey = Symbol("RadioGroupProvide");
  var RadioButtonInjectionKey = Symbol("RadioButtonProvide");
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function ownKeys$4(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$4(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$4(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function getValidAttrs$1(obj) {
    var newObj = {};
    Object.keys(obj).forEach(function(key2) {
      if (!isUndefined_1(obj[key2])) {
        newObj[key2] = obj[key2];
      }
    });
    return newObj;
  }
  var _Radio = vue.defineComponent({
    name: "TRadio",
    inheritAttrs: false,
    props: _objectSpread$4({}, props$4),
    setup: function setup17(props2, _ref) {
      var attrs = _ref.attrs;
      var inputRef = vue.ref();
      var _toRefs = vue.toRefs(props2), checked = _toRefs.checked, modelValue = _toRefs.modelValue;
      var _useVModel = useVModel(checked, modelValue, props2.defaultChecked, props2.onChange, "checked"), _useVModel2 = _slicedToArray(_useVModel, 2), innerChecked = _useVModel2[0], setInnerChecked = _useVModel2[1];
      var radioChecked = vue.computed(function() {
        return radioGroup ? props2.value === radioGroup.value : innerChecked.value;
      });
      var radioGroup = vue.inject(RadioGroupInjectionKey, void 0);
      var allowUncheck = vue.computed(function() {
        return Boolean(props2.allowUncheck || (radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.allowUncheck));
      });
      var handleClick = function handleClick2(e) {
        e.stopPropagation();
      };
      var onLabelClick = function onLabelClick2(e) {
        var _props2$onClick;
        if (disabled.value)
          return;
        (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, {
          e
        });
        if (radioGroup) {
          var value = radioChecked.value && allowUncheck.value ? void 0 : props2.value;
          radioGroup.setValue(value, {
            e
          });
        } else {
          var _value = allowUncheck.value ? !radioChecked.value : true;
          setInnerChecked(_value, {
            e
          });
        }
      };
      var inputEvents = vue.computed(function() {
        return getValidAttrs$1({
          focus: attrs.onFocus,
          blur: attrs.onBlur,
          keydown: attrs.onKeydown,
          keyup: attrs.onKeyup,
          keypresss: attrs.onKeypresss
        });
      });
      var wrapperAttrs = vue.computed(function() {
        var events = [].concat(_toConsumableArray(Object.keys(inputEvents.value)), ["input", "change"]).map(function(str) {
          return "on".concat(str[0].toUpperCase()).concat(str.slice(1));
        });
        return omit(attrs, events);
      });
      var groupDisabled = vue.computed(function() {
        return radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.disabled;
      });
      var disabled = useFormDisabled(groupDisabled);
      var inputProps = vue.computed(function() {
        return {
          name: radioGroup ? radioGroup.name : props2.name,
          checked: radioChecked.value,
          disabled: disabled.value,
          value: props2.value
        };
      });
      var _useCommonClassName = useCommonClassName$2(), STATUS = _useCommonClassName.STATUS;
      var radioButton = vue.inject(RadioButtonInjectionKey, void 0);
      var radioBtnName = usePrefixClass("radio-button");
      var COMPONENT_NAME = usePrefixClass("radio");
      var prefixCls = vue.computed(function() {
        return radioButton ? radioBtnName.value : COMPONENT_NAME.value;
      });
      var inputClass = vue.computed(function() {
        var _ref2;
        return ["".concat(prefixCls.value), (_ref2 = {}, _defineProperty$2(_ref2, STATUS.value.checked, inputProps.value.checked), _defineProperty$2(_ref2, STATUS.value.disabled, inputProps.value.disabled), _ref2)];
      });
      var renderContent3 = useContent();
      return function() {
        return vue.createVNode("label", vue.mergeProps({
          "ref": inputRef,
          "class": inputClass.value
        }, wrapperAttrs.value, {
          "tabindex": disabled.value ? void 0 : "0",
          "onClick": onLabelClick
        }), [vue.createVNode("input", vue.mergeProps({
          "type": "radio",
          "class": "".concat(prefixCls.value, "__former")
        }, inputEvents.value, inputProps.value, {
          "onClick": handleClick,
          "tabindex": "-1",
          "data-value": isString_1(props2.value) ? "'".concat(props2.value, "'") : props2.value,
          "data-allow-uncheck": allowUncheck.value || void 0
        }), null), vue.createVNode("span", {
          "class": "".concat(prefixCls.value, "__input")
        }, null), vue.createVNode("span", {
          "class": "".concat(prefixCls.value, "__label")
        }, [renderContent3("default", "label")])]);
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var debounce = debounce_1, isObject$1 = isObject_1;
  var FUNC_ERROR_TEXT = "Expected a function";
  function throttle(func, wait, options) {
    var leading = true, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject$1(options)) {
      leading = "leading" in options ? !!options.leading : leading;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      "leading": leading,
      "maxWait": wait,
      "trailing": trailing
    });
  }
  var throttle_1 = throttle;
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var props$3 = {
    allowUncheck: Boolean,
    disabled: Boolean,
    name: {
      type: String,
      "default": ""
    },
    options: {
      type: Array
    },
    size: {
      type: String,
      "default": "medium",
      validator: function validator20(val) {
        if (!val)
          return true;
        return ["small", "medium", "large"].includes(val);
      }
    },
    value: {
      type: [String, Number, Boolean],
      "default": void 0
    },
    modelValue: {
      type: [String, Number, Boolean],
      "default": void 0
    },
    defaultValue: {
      type: [String, Number, Boolean]
    },
    variant: {
      type: String,
      "default": "outline",
      validator: function validator21(val) {
        if (!val)
          return true;
        return ["outline", "primary-filled", "default-filled"].includes(val);
      }
    },
    onChange: Function
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function useKeyboard(radioGroupRef, setInnerValue) {
    var checkRadioInGroup = function checkRadioInGroup2(e) {
      var isCheckedCode = CHECKED_CODE_REG.test(e.key) || CHECKED_CODE_REG.test(e.code);
      if (isCheckedCode) {
        e.preventDefault();
        var inputNode = e.target.querySelector("input");
        var data = inputNode.dataset;
        if (inputNode.checked && data.allowUncheck) {
          setInnerValue(void 0, {
            e
          });
        } else {
          var value = !isNaN(Number(data.value)) ? Number(data.value) : data.value;
          value = isString_1(value) && {
            "true": true,
            "false": false
          }[value] || value;
          value = isString_1(value) && value[0] === "'" ? value.replace(/'/g, "") : value;
          setInnerValue(value, {
            e
          });
        }
      }
    };
    vue.onMounted(function() {
      on(radioGroupRef.value, "keydown", checkRadioInGroup);
    });
    vue.onBeforeMount(function() {
      off(radioGroupRef.value, "keydown", checkRadioInGroup);
    });
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var _excluded = ["window"];
  var defaultWindow = typeof window !== "undefined" ? window : void 0;
  function unrefElement(elRef) {
    var _plain$$el;
    var plain = vue.unref(elRef);
    return (_plain$$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _plain$$el !== void 0 ? _plain$$el : plain;
  }
  function tryOnScopeDispose(fn2) {
    if (vue.getCurrentScope()) {
      vue.onScopeDispose(fn2);
      return true;
    }
    return false;
  }
  function useMutationObserver(target, callback) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _options$window = options.window, window2 = _options$window === void 0 ? defaultWindow : _options$window, mutationOptions = _objectWithoutProperties(options, _excluded);
    var observer;
    var isSupported = window2 && "MutationObserver" in window2;
    var cleanup = function cleanup2() {
      if (observer) {
        observer.disconnect();
        observer = void 0;
      }
    };
    var stopWatch = vue.watch(function() {
      return unrefElement(target);
    }, function(el) {
      cleanup();
      if (isSupported && window2 && el) {
        observer = new MutationObserver(callback);
        observer.observe(el, mutationOptions);
      }
    }, {
      immediate: true
    });
    var stop = function stop2() {
      cleanup();
      stopWatch();
    };
    tryOnScopeDispose(stop);
    return {
      isSupported,
      stop
    };
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function ownKeys$3(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$3(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$3(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  var _Group = vue.defineComponent({
    name: "TRadioGroup",
    props: _objectSpread$3({}, props$3),
    setup: function setup18(props2) {
      var _toRefs = vue.toRefs(props2), value = _toRefs.value, modelValue = _toRefs.modelValue;
      var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange), _useVModel2 = _slicedToArray(_useVModel, 2), innerValue = _useVModel2[0], setInnerValue = _useVModel2[1];
      var radioGroupRef = vue.ref();
      var radioBtnName = usePrefixClass("radio-button");
      var _useCommonClassName = useCommonClassName$2(), STATUS = _useCommonClassName.STATUS, SIZE = _useCommonClassName.SIZE;
      useKeyboard(radioGroupRef, setInnerValue);
      var checkedClassName = vue.computed(function() {
        return ".".concat(radioBtnName.value, ".").concat(STATUS.value.checked);
      });
      var barStyle = vue.ref({
        width: "0px",
        height: "0px",
        left: "0px",
        top: "0px"
      });
      var calcDefaultBarStyle = function calcDefaultBarStyle2() {
        var div = document.createElement("div");
        div.setAttribute("style", "position: absolute; visibility: hidden;");
        div.appendChild(radioGroupRef.value.cloneNode(true));
        document.body.appendChild(div);
        var defaultCheckedRadio = div.querySelector(checkedClassName.value);
        var offsetWidth = defaultCheckedRadio.offsetWidth, offsetHeight = defaultCheckedRadio.offsetHeight, offsetLeft = defaultCheckedRadio.offsetLeft, offsetTop = defaultCheckedRadio.offsetTop;
        barStyle.value = {
          width: "".concat(offsetWidth, "px"),
          height: "".concat(offsetHeight, "px"),
          left: "".concat(offsetLeft, "px"),
          top: "".concat(offsetTop, "px")
        };
        document.body.removeChild(div);
      };
      var calcBarStyle = function calcBarStyle2() {
        if (props2.variant === "outline")
          return;
        var checkedRadio = radioGroupRef.value.querySelector(checkedClassName.value);
        if (!checkedRadio) {
          barStyle.value = {
            width: "0px",
            height: "9px",
            left: "0px",
            top: "0px"
          };
          return;
        }
        var offsetWidth = checkedRadio.offsetWidth, offsetHeight = checkedRadio.offsetHeight, offsetLeft = checkedRadio.offsetLeft, offsetTop = checkedRadio.offsetTop;
        if (!offsetWidth) {
          calcDefaultBarStyle();
        } else {
          barStyle.value = {
            width: "".concat(offsetWidth, "px"),
            height: "".concat(offsetHeight, "px"),
            left: "".concat(offsetLeft, "px"),
            top: "".concat(offsetTop, "px")
          };
        }
      };
      var observerReturn;
      vue.watch(innerValue, /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee() {
        return regenerator.wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return vue.nextTick();
              case 2:
                calcBarStyle();
              case 3:
              case "end":
                return _context.stop();
            }
        }, _callee);
      })));
      vue.onMounted(function() {
        calcBarStyle();
        useResizeObserver(radioGroupRef, throttle_1(/* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee2() {
          return regenerator.wrap(function _callee2$(_context2) {
            while (1)
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return vue.nextTick();
                case 2:
                  calcBarStyle();
                case 3:
                case "end":
                  return _context2.stop();
              }
          }, _callee2);
        })), 300));
        var checkedRadioLabel = radioGroupRef.value.querySelector("".concat(checkedClassName.value, " .").concat(radioBtnName.value, "__label"));
        if (checkedRadioLabel) {
          observerReturn = useMutationObserver(checkedRadioLabel, function(mutations) {
            mutations.forEach(function(mutation) {
              if (mutation.type === "characterData") {
                calcBarStyle();
              }
            });
          }, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        }
      });
      vue.onUnmounted(function() {
        var _observerReturn;
        (_observerReturn = observerReturn) === null || _observerReturn === void 0 || _observerReturn.stop();
      });
      var _toRefs2 = vue.toRefs(props2), name = _toRefs2.name, disabled = _toRefs2.disabled;
      vue.provide(RadioGroupInjectionKey, vue.reactive({
        name,
        disabled,
        value: innerValue,
        allowUncheck: props2.allowUncheck,
        setValue: setInnerValue
      }));
      var radioGroupName = usePrefixClass("radio-group");
      var renderSlot = useTNodeDefault();
      var renderBlock = function renderBlock2() {
        if (props2.variant.includes("filled") && !isNil_1(innerValue.value))
          return vue.createVNode("div", {
            "style": barStyle.value,
            "class": "".concat(radioGroupName.value, "__bg-block")
          }, null);
      };
      var renderOptions = function renderOptions2() {
        var _props2$options;
        return (_props2$options = props2.options) === null || _props2$options === void 0 ? void 0 : _props2$options.map(function(option) {
          var opt = option;
          if (isNumber_1(option) || isString_1(option)) {
            opt = {
              value: option,
              label: option.toString()
            };
          }
          return vue.createVNode(_Radio, {
            "key": "radio-group-options-".concat(opt.value, "-").concat(Math.random()),
            "name": props2.name,
            "checked": innerValue.value === opt.value,
            "disabled": "disabled" in opt ? opt.disabled : props2.disabled,
            "value": opt.value
          }, {
            "default": function _default2() {
              return [isFunction_1(opt.label) ? opt.label(vue.h) : opt.label];
            }
          });
        });
      };
      var groupClass = vue.computed(function() {
        var _ref3;
        return ["".concat(radioGroupName.value), SIZE.value[props2.size], (_ref3 = {}, _defineProperty$2(_ref3, "".concat(radioGroupName.value, "__outline"), props2.variant === "outline"), _defineProperty$2(_ref3, "".concat(radioGroupName.value, "--filled"), props2.variant.includes("filled")), _defineProperty$2(_ref3, "".concat(radioGroupName.value, "--primary-filled"), props2.variant === "primary-filled"), _ref3)];
      });
      return function() {
        return vue.createVNode("div", {
          "ref": radioGroupRef,
          "class": groupClass.value
        }, [renderSlot("default") || renderOptions(), renderBlock()]);
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function ownKeys$2(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _isSlot(s) {
    return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !vue.isVNode(s);
  }
  var _RadioButton = vue.defineComponent({
    name: "TRadioButton",
    inheritAttrs: false,
    props: _objectSpread$2({}, props$4),
    setup: function setup19(props2, _ref) {
      var attrs = _ref.attrs;
      vue.provide(RadioButtonInjectionKey, vue.reactive({}));
      var radioProps = vue.computed(function() {
        var res = _objectSpread$2(_objectSpread$2({}, props2), omit(attrs, Object.keys(attrs).filter(function(key2) {
          return key2.startsWith("on");
        })));
        return res;
      });
      var renderContent3 = useContent();
      return function() {
        var _slot;
        return vue.createVNode(_Radio, radioProps.value, _isSlot(_slot = renderContent3("default", "label")) ? _slot : {
          "default": function _default2() {
            return [_slot];
          }
        });
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var Radio = withInstall(_Radio);
  var RadioGroup = withInstall(_Group);
  var RadioButton = withInstall(_RadioButton);
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var hiddenTextarea;
  var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n";
  var SIZING_PROPS = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"];
  function calculateNodeStyling(targetElement) {
    if (typeof window === "undefined")
      return;
    var style2 = window.getComputedStyle(targetElement);
    var boxSizing = style2.getPropertyValue("box-sizing") || style2.getPropertyValue("-moz-box-sizing") || style2.getPropertyValue("-webkit-box-sizing");
    var paddingSize = parseFloat(style2.getPropertyValue("padding-bottom")) + parseFloat(style2.getPropertyValue("padding-top"));
    var borderSize = parseFloat(style2.getPropertyValue("border-bottom-width")) + parseFloat(style2.getPropertyValue("border-top-width"));
    var sizingStyle = SIZING_PROPS.map(function(name) {
      return "".concat(name, ":").concat(style2.getPropertyValue(name));
    }).join(";");
    return {
      sizingStyle,
      paddingSize,
      borderSize,
      boxSizing
    };
  }
  function calcTextareaHeight(targetElement) {
    var minRows = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    var maxRows = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    if (!hiddenTextarea) {
      hiddenTextarea = document.createElement("textarea");
      document.body.appendChild(hiddenTextarea);
    }
    var _calculateNodeStyling = calculateNodeStyling(targetElement), paddingSize = _calculateNodeStyling.paddingSize, borderSize = _calculateNodeStyling.borderSize, boxSizing = _calculateNodeStyling.boxSizing, sizingStyle = _calculateNodeStyling.sizingStyle;
    hiddenTextarea.setAttribute("style", "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
    hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
    var height = hiddenTextarea.scrollHeight;
    var result = {};
    if (boxSizing === "border-box") {
      height += borderSize;
    } else if (boxSizing === "content-box") {
      height -= paddingSize;
    }
    hiddenTextarea.value = "";
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      var minHeight = singleRowHeight * minRows;
      if (boxSizing === "border-box") {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
      result.minHeight = "".concat(minHeight, "px");
    }
    if (maxRows !== null) {
      var maxHeight = singleRowHeight * maxRows;
      if (boxSizing === "border-box") {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      height = Math.min(maxHeight, height);
    }
    result.height = "".concat(height, "px");
    hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
    hiddenTextarea = null;
    return result;
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var props$2 = {
    autofocus: Boolean,
    autosize: {
      type: [Boolean, Object],
      "default": false
    },
    disabled: Boolean,
    maxcharacter: {
      type: Number
    },
    maxlength: {
      type: [Number, String]
    },
    name: {
      type: String,
      "default": ""
    },
    placeholder: {
      type: String,
      "default": void 0
    },
    readonly: Boolean,
    status: {
      type: String,
      validator: function validator22(val) {
        return ["default", "success", "warning", "error"].includes(val);
      }
    },
    tips: {
      type: [String, Function]
    },
    value: {
      type: [String, Number]
    },
    modelValue: {
      type: [String, Number]
    },
    defaultValue: {
      type: [String, Number]
    },
    onBlur: Function,
    onChange: Function,
    onFocus: Function,
    onKeydown: Function,
    onKeypress: Function,
    onKeyup: Function
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function ownKeys$1(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread$1(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function getValidAttrs(obj) {
    var newObj = {};
    Object.keys(obj).forEach(function(key2) {
      if (!isUndefined_1(obj[key2])) {
        newObj[key2] = obj[key2];
      }
    });
    return newObj;
  }
  var _Textarea = vue.defineComponent({
    name: "TTextarea",
    inheritAttrs: false,
    props: _objectSpread$1({}, props$2),
    setup: function setup20(props2, _ref) {
      var attrs = _ref.attrs, expose = _ref.expose;
      var prefix = usePrefixClass();
      var name = usePrefixClass("textarea");
      var TEXTAREA_TIPS_CLASS = vue.computed(function() {
        return "".concat(name.value, "__tips");
      });
      var TEXTAREA_LIMIT = vue.computed(function() {
        return "".concat(name.value, "__limit");
      });
      var _toRefs = vue.toRefs(props2), value = _toRefs.value, modelValue = _toRefs.modelValue;
      var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange), _useVModel2 = _slicedToArray(_useVModel, 2), innerValue = _useVModel2[0], setInnerValue = _useVModel2[1];
      var disabled = useFormDisabled();
      var textareaStyle = vue.ref({});
      var refTextareaElem = vue.ref();
      var focused = vue.ref(false);
      var isComposing = vue.ref(false);
      var focus = function focus2() {
        var _refTextareaElem$valu;
        return (_refTextareaElem$valu = refTextareaElem.value) === null || _refTextareaElem$valu === void 0 ? void 0 : _refTextareaElem$valu.focus();
      };
      var blur = function blur2() {
        var _refTextareaElem$valu2;
        return (_refTextareaElem$valu2 = refTextareaElem.value) === null || _refTextareaElem$valu2 === void 0 ? void 0 : _refTextareaElem$valu2.blur();
      };
      var adjustTextareaHeight = function adjustTextareaHeight2() {
        var _refTextareaElem$valu3;
        if (props2.autosize === true) {
          textareaStyle.value = calcTextareaHeight(refTextareaElem.value);
        } else if (props2.autosize && _typeof(props2.autosize) === "object") {
          var _props2$autosize = props2.autosize, minRows = _props2$autosize.minRows, maxRows = _props2$autosize.maxRows;
          textareaStyle.value = calcTextareaHeight(refTextareaElem.value, minRows, maxRows);
        } else if (attrs.rows) {
          textareaStyle.value = {
            height: "auto",
            minHeight: "auto"
          };
        } else if (attrs.style && (_refTextareaElem$valu3 = refTextareaElem.value) !== null && _refTextareaElem$valu3 !== void 0 && (_refTextareaElem$valu3 = _refTextareaElem$valu3.style) !== null && _refTextareaElem$valu3 !== void 0 && _refTextareaElem$valu3.height) {
          textareaStyle.value = {
            height: refTextareaElem.value.style.height
          };
        }
      };
      var setInputValue = function setInputValue2() {
        var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        var textareaElem = refTextareaElem.value;
        var sV = String(v);
        if (!textareaElem) {
          return;
        }
        if (textareaElem.value !== sV) {
          textareaElem.value = sV;
          innerValue.value = sV;
        }
      };
      var inputValueChangeHandle = function inputValueChangeHandle2(e) {
        var target = e.target;
        var val = target.value;
        if (props2.maxcharacter && props2.maxcharacter >= 0) {
          var stringInfo = getCharacterLength(val, props2.maxcharacter);
          val = _typeof(stringInfo) === "object" && stringInfo.characters;
        }
        !isComposing.value && setInnerValue(val, {
          e
        });
        vue.nextTick(function() {
          return setInputValue(val);
        });
        adjustTextareaHeight();
      };
      var handleInput = function handleInput2(e) {
        inputValueChangeHandle(e);
      };
      var onCompositionstart = function onCompositionstart2() {
        isComposing.value = true;
      };
      var onCompositionend = function onCompositionend2(e) {
        isComposing.value = false;
        inputValueChangeHandle(e);
      };
      var eventDeal = function eventDeal2(name2, e) {
        var _props2$_name;
        if (disabled.value)
          return;
        var _name = "on".concat(name2[0].toUpperCase()).concat(name2.slice(1));
        (_props2$_name = props2[_name]) === null || _props2$_name === void 0 || _props2$_name.call(props2, innerValue.value, {
          e
        });
      };
      var emitKeyDown = function emitKeyDown2(e) {
        eventDeal("keydown", e);
      };
      var emitKeyUp = function emitKeyUp2(e) {
        eventDeal("keyup", e);
      };
      var emitKeypress = function emitKeypress2(e) {
        eventDeal("keypress", e);
      };
      var emitFocus = function emitFocus2(e) {
        var _props2$onFocus;
        adjustTextareaHeight();
        if (disabled.value)
          return;
        focused.value = true;
        (_props2$onFocus = props2.onFocus) === null || _props2$onFocus === void 0 || _props2$onFocus.call(props2, innerValue.value, {
          e
        });
      };
      var formItem = vue.inject(FormItemInjectionKey, void 0);
      var emitBlur = function emitBlur2(e) {
        var _props2$onBlur;
        adjustTextareaHeight();
        focused.value = false;
        (_props2$onBlur = props2.onBlur) === null || _props2$onBlur === void 0 || _props2$onBlur.call(props2, innerValue.value, {
          e
        });
        formItem === null || formItem === void 0 || formItem.handleBlur();
      };
      var textareaClasses = vue.computed(function() {
        var _ref2;
        return [name.value, (_ref2 = {}, _defineProperty$2(_ref2, "".concat(prefix.value, "-is-disabled"), disabled.value), _defineProperty$2(_ref2, "".concat(prefix.value, "-is-readonly"), props2.readonly), _ref2)];
      });
      var inputAttrs = vue.computed(function() {
        return getValidAttrs({
          autofocus: props2.autofocus,
          disabled: disabled.value,
          readonly: props2.readonly,
          placeholder: props2.placeholder,
          maxlength: props2.maxlength || void 0,
          name: props2.name || void 0
        });
      });
      var characterNumber = vue.computed(function() {
        var characterInfo = getCharacterLength(String(innerValue.value || ""));
        if (_typeof(characterInfo) === "object") {
          return characterInfo.length;
        }
        return characterInfo;
      });
      vue.watch(function() {
        return innerValue.value;
      }, function() {
        return adjustTextareaHeight();
      });
      vue.watch(refTextareaElem, function(el) {
        if (!el)
          return;
        adjustTextareaHeight();
      });
      vue.watch(function() {
        return props2.autofocus;
      }, function(val) {
        if (val) {
          refTextareaElem.value.focus();
        }
      });
      vue.watch(textareaStyle, function(val) {
        var style2 = attrs.style;
        setStyle$1(refTextareaElem.value, merge_1(style2, val));
      });
      vue.watch(innerValue, function() {
        vue.nextTick(function() {
          return adjustTextareaHeight();
        });
      });
      vue.watch(function() {
        return props2.autosize;
      }, adjustTextareaHeight, {
        deep: true
      });
      expose({
        focus,
        blur
      });
      vue.onMounted(function() {
        adjustTextareaHeight();
      });
      var renderTNodeJSX3 = useTNodeJSX();
      return function() {
        var _String;
        var inputEvents = getValidAttrs({
          onFocus: emitFocus,
          onBlur: emitBlur,
          onKeydown: emitKeyDown,
          onKeyup: emitKeyUp,
          onKeypress: emitKeypress
        });
        var _useCommonClassName = useCommonClassName$2(), STATUS = _useCommonClassName.STATUS;
        var classes = vue.computed(function() {
          var _ref3;
          return ["".concat(name.value, "__inner"), (_ref3 = {}, _defineProperty$2(_ref3, "".concat(prefix.value, "-is-").concat(props2.status), props2.status), _defineProperty$2(_ref3, STATUS.value.disabled, disabled.value), _defineProperty$2(_ref3, STATUS.value.focused, focused.value), _defineProperty$2(_ref3, "".concat(prefix.value, "-resize-none"), _typeof(props2.autosize) === "object"), _ref3), "narrow-scrollbar"];
        });
        var tips = renderTNodeJSX3("tips");
        var textTips = tips && vue.createVNode("div", {
          "class": "".concat(TEXTAREA_TIPS_CLASS.value, " ").concat(name.value, "__tips--").concat(props2.status || "normal")
        }, [tips]);
        var limitText = props2.maxcharacter && vue.createVNode("span", {
          "class": TEXTAREA_LIMIT.value
        }, ["".concat(characterNumber.value, "/").concat(props2.maxcharacter)]) || !props2.maxcharacter && props2.maxlength && vue.createVNode("span", {
          "class": TEXTAREA_LIMIT.value
        }, ["".concat(innerValue.value ? (_String = String(innerValue.value)) === null || _String === void 0 ? void 0 : _String.length : 0, "/").concat(props2.maxlength)]);
        return vue.createVNode("div", vue.mergeProps({
          "class": textareaClasses.value
        }, omit(attrs, ["style"])), [vue.createVNode("textarea", vue.mergeProps({
          "onInput": handleInput,
          "onCompositionstart": onCompositionstart,
          "onCompositionend": onCompositionend,
          "ref": refTextareaElem,
          "value": innerValue.value,
          "class": classes.value
        }, inputEvents, inputAttrs.value), null), textTips || limitText ? vue.createVNode("div", {
          "class": ["".concat(name.value, "__info_wrapper"), _defineProperty$2({}, "".concat(name.value, "__info_wrapper_align"), !textTips)]
        }, [textTips, limitText]) : null]);
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var Textarea = withInstall(_Textarea);
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
        _defineProperty$2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function useAction(action) {
    var instance = vue.getCurrentInstance();
    var renderTNodeJSX3 = useTNodeJSX();
    var getDefaultConfirmBtnProps = function getDefaultConfirmBtnProps2(options) {
      var _omit;
      var globalConfirm = options.globalConfirm, theme = options.theme, globalConfirmBtnTheme = options.globalConfirmBtnTheme;
      var defaultTheme = ((_omit = omit_1(globalConfirmBtnTheme, ["info"])) === null || _omit === void 0 ? void 0 : _omit[theme]) || "primary";
      var props2 = {
        theme: defaultTheme,
        size: options.size,
        onClick: function onClick(e) {
          action.confirmBtnAction(e);
        }
      };
      if (isString_1(globalConfirm)) {
        props2.content = globalConfirm;
      } else if (isObject_1(globalConfirm)) {
        props2 = _objectSpread(_objectSpread({}, props2), globalConfirm);
      }
      return props2;
    };
    var getDefaultCancelBtnProps = function getDefaultCancelBtnProps2(options) {
      var globalCancel = options.globalCancel;
      var props2 = {
        theme: "default",
        size: options.size,
        onClick: function onClick(e) {
          action.cancelBtnAction(e);
        }
      };
      if (isString_1(globalCancel)) {
        props2.content = globalCancel;
      } else if (isObject_1(globalCancel)) {
        props2 = _objectSpread(_objectSpread({}, props2), globalCancel);
      }
      return props2;
    };
    var getButtonByProps = function getButtonByProps2(button, params) {
      var defaultButtonProps = params.defaultButtonProps, className = params.className, confirmLoading = params.confirmLoading;
      var newOptions = defaultButtonProps;
      if (isString_1(button)) {
        newOptions.content = button;
      } else if (isObject_1(button)) {
        newOptions = _objectSpread(_objectSpread({}, newOptions), button);
      }
      if (confirmLoading !== void 0) {
        newOptions.loading = confirmLoading;
      }
      return vue.createVNode(Button, vue.mergeProps({
        "class": className
      }, newOptions), null);
    };
    var getConfirmBtn = function getConfirmBtn2(options) {
      var confirmBtn = options.confirmBtn, className = options.className, confirmLoading = options.confirmLoading;
      if (confirmBtn === null)
        return null;
      if (confirmBtn && instance.slots.confirmBtn) {
        console.warn("Both $props.confirmBtn and $scopedSlots.confirmBtn exist, $props.confirmBtn is preferred.");
      }
      var defaultButtonProps = getDefaultConfirmBtnProps(options);
      if (!confirmBtn && !instance.slots.confirmBtn) {
        return vue.createVNode(Button, vue.mergeProps({
          "class": className,
          "loading": confirmLoading
        }, defaultButtonProps), null);
      }
      if (confirmBtn && ["string", "object"].includes(_typeof(confirmBtn))) {
        return getButtonByProps(confirmBtn, {
          defaultButtonProps,
          className,
          confirmLoading
        });
      }
      return renderTNodeJSX3("confirmBtn");
    };
    var getCancelBtn = function getCancelBtn2(options) {
      var cancelBtn = options.cancelBtn, className = options.className;
      if (cancelBtn === null)
        return null;
      if (cancelBtn && instance.slots.cancelBtn) {
        console.warn("Both $props.cancelBtn and $scopedSlots.cancelBtn exist, $props.cancelBtn is preferred.");
      }
      var defaultButtonProps = getDefaultCancelBtnProps(options);
      if (!cancelBtn && !instance.slots.cancelBtn) {
        return vue.createVNode(Button, vue.mergeProps({
          "class": className
        }, defaultButtonProps), null);
      }
      if (cancelBtn && ["string", "object"].includes(_typeof(cancelBtn))) {
        return getButtonByProps(cancelBtn, {
          defaultButtonProps
        });
      }
      return renderTNodeJSX3("cancelBtn");
    };
    return {
      getConfirmBtn,
      getCancelBtn
    };
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  function getScrollbarWidth() {
    var scrollDiv = document.createElement("div");
    scrollDiv.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var PRO_THEME = {
    LINE: "line",
    PLUMP: "plump",
    CIRCLE: "circle"
  };
  var CIRCLE_SIZE = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large"
  };
  var CIRCLE_SIZE_PX = {
    SMALL: 72,
    MEDIUM: 112,
    LARGE: 160
  };
  var CIRCLE_FONT_SIZE_RATIO = {
    SMALL: 14 / CIRCLE_SIZE_PX.SMALL,
    MEDIUM: 20 / CIRCLE_SIZE_PX.MEDIUM,
    LARGE: 36 / CIRCLE_SIZE_PX.LARGE
  };
  var STATUS_ICON = ["success", "error", "warning"];
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var props$1 = {
    color: {
      type: [String, Object, Array],
      "default": ""
    },
    label: {
      type: [String, Boolean, Function],
      "default": true
    },
    percentage: {
      type: Number,
      "default": 0
    },
    size: {
      type: [String, Number],
      "default": "medium"
    },
    status: {
      type: String,
      validator: function validator23(val) {
        return ["success", "error", "warning", "active"].includes(val);
      }
    },
    strokeWidth: {
      type: [String, Number]
    },
    theme: {
      type: String,
      "default": "line",
      validator: function validator24(val) {
        return ["line", "plump", "circle"].includes(val);
      }
    },
    trackColor: {
      type: String,
      "default": ""
    }
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var _Progress = vue.defineComponent({
    name: "TProgress",
    props: props$1,
    setup: function setup21(props2) {
      var renderTNodeJSX3 = useTNodeJSX();
      var COMPONENT_NAME = usePrefixClass("progress");
      var _useGlobalIcon = useGlobalIcon({
        CloseCircleFilledIcon,
        CheckCircleFilledIcon,
        ErrorCircleFilledIcon,
        CloseIcon,
        CheckIcon,
        ErrorIcon
      }), CloseCircleFilledIcon$1 = _useGlobalIcon.CloseCircleFilledIcon, CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon, ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon, CloseIcon$1 = _useGlobalIcon.CloseIcon, CheckIcon$1 = _useGlobalIcon.CheckIcon, ErrorIcon$1 = _useGlobalIcon.ErrorIcon;
      var statusStyle = vue.computed(function() {
        if (props2.percentage >= 100) {
          return "success";
        }
        return props2.status || "default";
      });
      var trackBgStyle = vue.computed(function() {
        var style2 = {};
        if (props2.strokeWidth) {
          var height = isString_1(props2.strokeWidth) ? props2.strokeWidth : "".concat(props2.strokeWidth, "px");
          style2.height = height;
          style2.borderRadius = height;
        }
        if (props2.trackColor) {
          style2.backgroundColor = props2.trackColor;
        }
        return style2;
      });
      var barStyle = vue.computed(function() {
        return {
          width: "".concat(props2.percentage, "%"),
          background: props2.color && getBackgroundColor(props2.color)
        };
      });
      var circlePathStyle = vue.computed(function() {
        var strokeColor = isObject_1(props2.color) ? "" : props2.color;
        return {
          stroke: strokeColor
        };
      });
      var circleOuterStyle = vue.computed(function() {
        var strokeColor = isObject_1(props2.trackColor) ? "" : props2.trackColor;
        return {
          stroke: strokeColor
        };
      });
      var diameter = vue.computed(function() {
        var diameter2 = CIRCLE_SIZE_PX.MEDIUM;
        if (!props2.size) {
          return diameter2;
        }
        var SMALL = CIRCLE_SIZE.SMALL, LARGE = CIRCLE_SIZE.LARGE, MEDIUM = CIRCLE_SIZE.MEDIUM;
        switch (props2.size) {
          case SMALL:
            diameter2 = CIRCLE_SIZE_PX.SMALL;
            break;
          case MEDIUM:
            diameter2 = CIRCLE_SIZE_PX.MEDIUM;
            break;
          case LARGE:
            diameter2 = CIRCLE_SIZE_PX.LARGE;
            break;
          default:
            diameter2 = Number(props2.size);
            break;
        }
        return diameter2;
      });
      var rPoints = vue.computed(function() {
        return diameter.value / 2;
      });
      var radius = vue.computed(function() {
        return rPoints.value - circleStrokeWidth.value / 2;
      });
      var circleStyle = vue.computed(function() {
        if (props2.theme !== PRO_THEME.CIRCLE) {
          return {};
        }
        var fontSize = diameter.value * CIRCLE_FONT_SIZE_RATIO.MEDIUM;
        if (diameter.value <= CIRCLE_SIZE_PX.SMALL) {
          fontSize = diameter.value * CIRCLE_FONT_SIZE_RATIO.SMALL;
        } else if (diameter.value >= CIRCLE_SIZE_PX.LARGE) {
          fontSize = diameter.value * CIRCLE_FONT_SIZE_RATIO.LARGE;
        }
        return {
          width: "".concat(diameter.value, "px"),
          height: "".concat(diameter.value, "px"),
          fontSize: "".concat(fontSize, "px")
        };
      });
      var circleStrokeWidth = vue.computed(function() {
        var defaultWidth = props2.size === CIRCLE_SIZE.SMALL ? 4 : 6;
        return props2.strokeWidth ? Number(props2.strokeWidth) : defaultWidth;
      });
      var strokeDashArr = vue.computed(function() {
        var radius2 = (diameter.value - circleStrokeWidth.value) / 2;
        var perimeter = Math.PI * 2 * radius2;
        var percent = props2.percentage / 100;
        return "".concat(perimeter * percent, "  ").concat(perimeter * (1 - percent));
      });
      var getIconMap = function getIconMap2() {
        var CIRCLE_ICONS = {
          success: CheckIcon$1,
          warning: ErrorIcon$1,
          error: CloseIcon$1
        };
        var NORMAL_ICONS = {
          success: CheckCircleFilledIcon$1,
          warning: ErrorCircleFilledIcon$1,
          error: CloseCircleFilledIcon$1
        };
        return props2.theme === PRO_THEME.CIRCLE ? CIRCLE_ICONS : NORMAL_ICONS;
      };
      var getLabelContent = function getLabelContent2() {
        var labelContent = "".concat(props2.percentage, "%");
        var status = props2.status || "";
        if (STATUS_ICON.includes(status) && props2.theme !== PRO_THEME.PLUMP) {
          var components = getIconMap();
          var component = components[status];
          if (component) {
            labelContent = vue.createVNode(component, {
              "class": ["".concat(COMPONENT_NAME.value, "__icon")]
            }, null);
          }
        }
        return labelContent;
      };
      return function() {
        var labelContent = vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__info")
        }, [renderTNodeJSX3("label", getLabelContent())]);
        var PLUMP_SEPARATE = 10;
        var separateClasses = props2.percentage > PLUMP_SEPARATE ? "".concat(COMPONENT_NAME.value, "--over-ten") : "".concat(COMPONENT_NAME.value, "--under-ten");
        return vue.createVNode("div", {
          "class": COMPONENT_NAME.value
        }, [props2.theme === PRO_THEME.LINE && vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "--thin ").concat(COMPONENT_NAME.value, "--status--").concat(statusStyle.value)
        }, [vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__bar"),
          "style": trackBgStyle.value
        }, [vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__inner"),
          "style": barStyle.value
        }, null)]), labelContent]), props2.theme === PRO_THEME.PLUMP && vue.createVNode("div", {
          "class": ["".concat(COMPONENT_NAME.value, "__bar ").concat(COMPONENT_NAME.value, "--plump ").concat(separateClasses), _defineProperty$2({}, "".concat(COMPONENT_NAME.value, "--status--").concat(statusStyle.value), statusStyle.value)],
          "style": trackBgStyle.value
        }, [vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__inner"),
          "style": barStyle.value
        }, [props2.percentage > PLUMP_SEPARATE && labelContent]), props2.percentage <= PLUMP_SEPARATE && labelContent]), props2.theme === PRO_THEME.CIRCLE && vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "--circle ").concat(COMPONENT_NAME.value, "--status--").concat(statusStyle.value),
          "style": circleStyle.value
        }, [labelContent, vue.createVNode("svg", {
          "width": diameter.value,
          "height": diameter.value,
          "viewBox": "0 0 ".concat(diameter.value, " ").concat(diameter.value)
        }, [vue.createVNode("circle", {
          "cx": rPoints.value,
          "cy": rPoints.value,
          "r": radius.value,
          "stroke-width": circleStrokeWidth.value,
          "fill": "none",
          "class": ["".concat(COMPONENT_NAME.value, "__circle-outer")],
          "style": circleOuterStyle.value
        }, null), props2.percentage > 0 && vue.createVNode("circle", {
          "cx": rPoints.value,
          "cy": rPoints.value,
          "r": radius.value,
          "stroke-width": circleStrokeWidth.value,
          "fill": "none",
          "stroke-linecap": "round",
          "class": ["".concat(COMPONENT_NAME.value, "__circle-inner")],
          "transform": "matrix(0,-1,1,0,0,".concat(diameter.value, ")"),
          "stroke-dasharray": strokeDashArr.value,
          "style": circlePathStyle.value
        }, null)])])]);
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var Progress = withInstall(_Progress);
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var props = {
    attach: {
      type: [String, Function],
      "default": ""
    },
    body: {
      type: [String, Function]
    },
    cancelBtn: {
      type: [String, Object, Function],
      "default": ""
    },
    closeBtn: {
      type: [String, Boolean, Function]
    },
    closeOnEscKeydown: {
      type: Boolean,
      "default": void 0
    },
    closeOnOverlayClick: {
      type: Boolean,
      "default": void 0
    },
    confirmBtn: {
      type: [String, Object, Function],
      "default": ""
    },
    "default": {
      type: [String, Function]
    },
    destroyOnClose: Boolean,
    footer: {
      type: [Boolean, Function],
      "default": true
    },
    header: {
      type: [String, Boolean, Function],
      "default": true
    },
    mode: {
      type: String,
      "default": "overlay",
      validator: function validator25(val) {
        if (!val)
          return true;
        return ["overlay", "push"].includes(val);
      }
    },
    placement: {
      type: String,
      "default": "right",
      validator: function validator26(val) {
        if (!val)
          return true;
        return ["left", "right", "top", "bottom"].includes(val);
      }
    },
    preventScrollThrough: {
      type: Boolean,
      "default": true
    },
    showInAttachedElement: Boolean,
    showOverlay: {
      type: Boolean,
      "default": true
    },
    size: {
      type: String,
      "default": void 0
    },
    sizeDraggable: Boolean,
    visible: Boolean,
    zIndex: {
      type: Number
    },
    onCancel: Function,
    onClose: Function,
    onCloseBtnClick: Function,
    onConfirm: Function,
    onEscKeydown: Function,
    onOverlayClick: Function
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var useDrag = function useDrag2(props2) {
    var isSizeDragging = vue.ref(false);
    var draggedSizeValue = vue.ref(null);
    var enableDrag = function enableDrag2() {
      document.addEventListener("mouseup", handleMouseup, true);
      document.addEventListener("mousemove", handleMousemove, true);
      isSizeDragging.value = true;
    };
    var handleMouseup = function handleMouseup2() {
      document.removeEventListener("mouseup", handleMouseup2, true);
      document.removeEventListener("mousemove", handleMousemove, true);
      isSizeDragging.value = false;
    };
    var handleMousemove = function handleMousemove2(e) {
      var x = e.x, y = e.y;
      var maxHeight = document.documentElement.clientHeight;
      var maxWidth = document.documentElement.clientWidth;
      var offsetHeight = 8;
      var offsetWidth = 8;
      if (isSizeDragging.value && props2.sizeDraggable) {
        if (props2.placement === "right") {
          var moveLeft = Math.min(Math.max(maxWidth - x + offsetWidth, offsetWidth), maxWidth);
          draggedSizeValue.value = "".concat(moveLeft, "px");
        }
        if (props2.placement === "left") {
          var moveRight = Math.min(Math.max(x + offsetWidth, offsetWidth), maxWidth);
          draggedSizeValue.value = "".concat(moveRight, "px");
        }
        if (props2.placement === "top") {
          var moveBottom = Math.min(Math.max(y + offsetHeight, offsetHeight), maxHeight);
          draggedSizeValue.value = "".concat(moveBottom, "px");
        }
        if (props2.placement === "bottom") {
          var moveTop = Math.min(Math.max(maxHeight - y + offsetHeight, offsetHeight), maxHeight);
          draggedSizeValue.value = "".concat(moveTop, "px");
        }
      }
    };
    var draggableLineStyles = vue.computed(function() {
      var _ref;
      var isHorizontal = ["right", "left"].includes(props2.placement);
      var oppositeMap = {
        left: "right",
        right: "left",
        top: "bottom",
        bottom: "top"
      };
      return _ref = {
        zIndex: 1,
        position: "absolute",
        background: "transparent"
      }, _defineProperty$2(_ref, oppositeMap[props2.placement], 0), _defineProperty$2(_ref, "width", isHorizontal ? "16px" : "100%"), _defineProperty$2(_ref, "height", isHorizontal ? "100%" : "16px"), _defineProperty$2(_ref, "cursor", isHorizontal ? "col-resize" : "row-resize"), _ref;
    });
    return {
      draggedSizeValue,
      enableDrag,
      draggableLineStyles
    };
  };
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var key = 1;
  var _Drawer = vue.defineComponent({
    name: "TDrawer",
    inheritAttrs: false,
    props,
    emits: ["update:visible"],
    setup: function setup22(props2, context) {
      var destroyOnCloseVisible = vue.ref(false);
      var isVisible = vue.ref(false);
      var styleEl = vue.ref();
      var styleTimer = vue.ref();
      var _useConfig = useConfig("drawer"), globalConfig = _useConfig.globalConfig;
      var _useGlobalIcon = useGlobalIcon({
        CloseIcon
      }), CloseIcon$1 = _useGlobalIcon.CloseIcon;
      var renderTNodeJSX3 = useTNodeJSX();
      var renderContent3 = useContent();
      var COMPONENT_NAME = usePrefixClass("drawer");
      var _useDrag = useDrag(props2), draggedSizeValue = _useDrag.draggedSizeValue, enableDrag = _useDrag.enableDrag, draggableLineStyles = _useDrag.draggableLineStyles;
      var teleportElement = useTeleport(function() {
        return props2.attach;
      });
      var confirmBtnAction = function confirmBtnAction2(e) {
        var _props2$onConfirm;
        (_props2$onConfirm = props2.onConfirm) === null || _props2$onConfirm === void 0 || _props2$onConfirm.call(props2, {
          e
        });
      };
      var cancelBtnAction = function cancelBtnAction2(e) {
        var _props2$onCancel;
        (_props2$onCancel = props2.onCancel) === null || _props2$onCancel === void 0 || _props2$onCancel.call(props2, {
          e
        });
        closeDrawer({
          trigger: "cancel",
          e
        });
      };
      var _useAction = useAction({
        confirmBtnAction,
        cancelBtnAction
      }), getConfirmBtn = _useAction.getConfirmBtn, getCancelBtn = _useAction.getCancelBtn;
      var drawerEle = vue.ref(null);
      var drawerClasses = vue.computed(function() {
        var _ref;
        return [COMPONENT_NAME.value, "".concat(COMPONENT_NAME.value, "--").concat(props2.placement), (_ref = {}, _defineProperty$2(_ref, "".concat(COMPONENT_NAME.value, "--open"), isVisible.value), _defineProperty$2(_ref, "".concat(COMPONENT_NAME.value, "--attach"), props2.showInAttachedElement), _defineProperty$2(_ref, "".concat(COMPONENT_NAME.value, "--without-mask"), !props2.showOverlay), _ref)];
      });
      var sizeValue = vue.computed(function() {
        var _props2$size;
        if (draggedSizeValue.value)
          return draggedSizeValue.value;
        var size = (_props2$size = props2.size) !== null && _props2$size !== void 0 ? _props2$size : globalConfig.value.size;
        var defaultSize = isNaN(Number(size)) ? size : "".concat(size, "px");
        return {
          small: "300px",
          medium: "500px",
          large: "760px"
        }[size] || defaultSize;
      });
      var wrapperStyles = vue.computed(function() {
        return {
          transform: isVisible.value ? "translateX(0)" : void 0,
          width: ["left", "right"].includes(props2.placement) ? sizeValue.value : "",
          height: ["top", "bottom"].includes(props2.placement) ? sizeValue.value : ""
        };
      });
      var wrapperClasses = vue.computed(function() {
        return ["".concat(COMPONENT_NAME.value, "__content-wrapper"), "".concat(COMPONENT_NAME.value, "__content-wrapper--").concat(props2.placement)];
      });
      var parentNode = vue.computed(function() {
        return drawerEle.value && drawerEle.value.parentNode;
      });
      var modeAndPlacement = vue.computed(function() {
        return [props2.mode, props2.placement].join();
      });
      var footerStyle = vue.computed(function() {
        return {
          display: "flex",
          justifyContent: props2.placement === "right" ? "flex-start" : "flex-end"
        };
      });
      var handleEscKeydown = function handleEscKeydown2(e) {
        var _props2$closeOnEscKey;
        if ((_props2$closeOnEscKey = props2.closeOnEscKeydown) !== null && _props2$closeOnEscKey !== void 0 ? _props2$closeOnEscKey : globalConfig.value.closeOnEscKeydown && e.key === "Escape") {
          var _props2$onEscKeydown;
          (_props2$onEscKeydown = props2.onEscKeydown) === null || _props2$onEscKeydown === void 0 || _props2$onEscKeydown.call(props2, {
            e
          });
          closeDrawer({
            trigger: "esc",
            e
          });
        }
      };
      var clearStyleFunc = function clearStyleFunc2() {
        clearTimeout(styleTimer.value);
        styleTimer.value = setTimeout(function() {
          var _styleEl$value, _styleEl$value$remove;
          (_styleEl$value = styleEl.value) === null || _styleEl$value === void 0 || (_styleEl$value = _styleEl$value.parentNode) === null || _styleEl$value === void 0 || (_styleEl$value$remove = _styleEl$value.removeChild) === null || _styleEl$value$remove === void 0 || _styleEl$value$remove.call(_styleEl$value, styleEl.value);
        }, 150);
      };
      var handlePushMode = function handlePushMode2() {
        if (props2.mode !== "push")
          return;
        vue.nextTick(function() {
          if (!parentNode.value)
            return;
          parentNode.value.style.cssText = "transition: margin 300ms cubic-bezier(0.7, 0.3, 0.1, 1) 0s;";
        });
      };
      var updatePushMode = function updatePushMode2() {
        if (!parentNode.value)
          return;
        if (props2.mode !== "push" || !parentNode.value)
          return;
        var marginStr = {
          left: "margin: 0 0 0 ".concat(sizeValue.value),
          right: "margin: 0 0 0 -".concat(sizeValue.value),
          top: "margin: ".concat(sizeValue.value, " 0 0 0"),
          bottom: "margin: -".concat(sizeValue.value, " 0 0 0")
        }[props2.placement];
        if (isVisible.value) {
          parentNode.value.style.cssText += marginStr;
        } else {
          parentNode.value.style.cssText = parentNode.value.style.cssText.replace(/margin:.+;/, "");
        }
      };
      var getDefaultFooter = function getDefaultFooter2() {
        var confirmBtn = getConfirmBtn({
          confirmBtn: props2.confirmBtn,
          globalConfirm: globalConfig.value.confirm,
          className: "".concat(COMPONENT_NAME.value, "__confirm")
        });
        var cancelBtn = getCancelBtn({
          cancelBtn: props2.cancelBtn,
          globalCancel: globalConfig.value.cancel,
          className: "".concat(COMPONENT_NAME.value, "__cancel")
        });
        return vue.createVNode("div", {
          "style": footerStyle.value
        }, [props2.placement === "right" ? confirmBtn : null, cancelBtn, props2.placement !== "right" ? confirmBtn : null]);
      };
      vue.watch(modeAndPlacement, function() {
        handlePushMode();
      }, {
        immediate: true
      });
      vue.watch(function() {
        return props2.visible;
      }, function(value) {
        if (isServer)
          return;
        if (value) {
          if (!props2.showInAttachedElement && props2.preventScrollThrough) {
            styleEl.value && document.head.appendChild(styleEl.value);
          }
        } else {
          clearStyleFunc();
        }
        if (props2.destroyOnClose) {
          if (value) {
            destroyOnCloseVisible.value = false;
            setTimeout(function() {
              isVisible.value = true;
            });
          } else {
            isVisible.value = false;
            setTimeout(function() {
              destroyOnCloseVisible.value = true;
            }, 200);
          }
        } else if (destroyOnCloseVisible.value === true && value) {
          destroyOnCloseVisible.value = false;
          setTimeout(function() {
            isVisible.value = true;
          });
        } else {
          isVisible.value = value;
        }
      }, {
        immediate: true
      });
      var handleCloseBtnClick = function handleCloseBtnClick2(e) {
        var _props2$onCloseBtnCli;
        (_props2$onCloseBtnCli = props2.onCloseBtnClick) === null || _props2$onCloseBtnCli === void 0 || _props2$onCloseBtnCli.call(props2, {
          e
        });
        closeDrawer({
          trigger: "close-btn",
          e
        });
      };
      var handleWrapperClick = function handleWrapperClick2(e) {
        var _props2$onOverlayClic, _props2$closeOnOverla;
        (_props2$onOverlayClic = props2.onOverlayClick) === null || _props2$onOverlayClic === void 0 || _props2$onOverlayClic.call(props2, {
          e
        });
        if ((_props2$closeOnOverla = props2.closeOnOverlayClick) !== null && _props2$closeOnOverla !== void 0 ? _props2$closeOnOverla : globalConfig.value.closeOnOverlayClick) {
          closeDrawer({
            trigger: "overlay",
            e
          });
        }
      };
      var onKeyDown = function onKeyDown2(e) {
        var _props2$closeOnEscKey2;
        if (((_props2$closeOnEscKey2 = props2.closeOnEscKeydown) !== null && _props2$closeOnEscKey2 !== void 0 ? _props2$closeOnEscKey2 : globalConfig.value.closeOnEscKeydown) && e.key === "Escape") {
          var _props2$onEscKeydown2;
          (_props2$onEscKeydown2 = props2.onEscKeydown) === null || _props2$onEscKeydown2 === void 0 || _props2$onEscKeydown2.call(props2, {
            e
          });
          closeDrawer({
            trigger: "esc",
            e
          });
        }
      };
      var closeDrawer = function closeDrawer2(params) {
        var _props2$onClose;
        (_props2$onClose = props2.onClose) === null || _props2$onClose === void 0 || _props2$onClose.call(props2, params);
        context.emit("update:visible", false);
      };
      vue.onUpdated(function() {
        updatePushMode();
      });
      vue.onMounted(function() {
        var hasScrollBar = document.documentElement.scrollHeight > document.documentElement.clientHeight;
        var scrollWidth = hasScrollBar ? getScrollbarWidth() : 0;
        styleEl.value = document.createElement("style");
        styleEl.value.dataset.id = "td_drawer_".concat(+/* @__PURE__ */ new Date(), "_").concat(key += 1);
        styleEl.value.innerHTML = "\n        html body {\n          overflow-y: hidden;\n          transition: margin 300ms cubic-bezier(0.7, 0.3, 0.1, 1) 0s;\n          ".concat(props2.mode === "push" ? "" : "width: calc(100% - ".concat(scrollWidth, "px);"), "\n        }\n      ");
        if (isVisible.value && !props2.showInAttachedElement && props2.preventScrollThrough) {
          document.head.appendChild(styleEl.value);
        }
        window.addEventListener("keydown", handleEscKeydown);
      });
      vue.onBeforeUnmount(function() {
        clearStyleFunc();
        window.removeEventListener("keydown", handleEscKeydown);
      });
      return function() {
        if (destroyOnCloseVisible.value)
          return;
        var body = renderContent3("body", "default");
        var headerContent = renderTNodeJSX3("header");
        var defaultFooter = getDefaultFooter();
        return vue.createVNode(vue.Teleport, {
          "disabled": !props2.attach || !teleportElement.value,
          "to": teleportElement.value
        }, {
          "default": function _default2() {
            return [vue.createVNode("div", vue.mergeProps({
              "ref": drawerEle,
              "class": drawerClasses.value,
              "style": {
                zIndex: props2.zIndex
              },
              "onKeydown": onKeyDown,
              "tabindex": 0
            }, context.attrs), [props2.showOverlay && vue.createVNode("div", {
              "class": "".concat(COMPONENT_NAME.value, "__mask"),
              "onClick": handleWrapperClick
            }, null), vue.createVNode("div", {
              "class": wrapperClasses.value,
              "style": wrapperStyles.value
            }, [headerContent && vue.createVNode("div", {
              "class": "".concat(COMPONENT_NAME.value, "__header")
            }, [headerContent]), props2.closeBtn && vue.createVNode("div", {
              "class": "".concat(COMPONENT_NAME.value, "__close-btn"),
              "onClick": handleCloseBtnClick
            }, [renderTNodeJSX3("closeBtn", vue.createVNode(CloseIcon$1, null, null))]), vue.createVNode("div", {
              "class": ["".concat(COMPONENT_NAME.value, "__body"), "narrow-scrollbar"]
            }, [body]), props2.footer && vue.createVNode("div", {
              "class": "".concat(COMPONENT_NAME.value, "__footer")
            }, [renderTNodeJSX3("footer", defaultFooter)]), props2.sizeDraggable && vue.createVNode("div", {
              "style": draggableLineStyles.value,
              "onMousedown": enableDrag
            }, null)])])];
          }
        });
      };
    }
  });
  /**
   * tdesign v1.5.7
   * (c) 2023 tdesign
   * @license MIT
   */
  var Drawer = withInstall(_Drawer);
  function bind(fn2, thisArg) {
    return function wrap() {
      return fn2.apply(thisArg, arguments);
    };
  }
  const { toString } = Object.prototype;
  const { getPrototypeOf } = Object;
  const kindOf = ((cache) => (thing) => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  const kindOfTest = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf(thing) === type;
  };
  const typeOfTest = (type) => (thing) => typeof thing === type;
  const { isArray } = Array;
  const isUndefined = typeOfTest("undefined");
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  const isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  const isString = typeOfTest("string");
  const isFunction = typeOfTest("function");
  const isNumber = typeOfTest("number");
  const isObject = (thing) => thing !== null && typeof thing === "object";
  const isBoolean = (thing) => thing === true || thing === false;
  const isPlainObject = (val) => {
    if (kindOf(val) !== "object") {
      return false;
    }
    const prototype2 = getPrototypeOf(val);
    return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };
  const isDate = kindOfTest("Date");
  const isFile = kindOfTest("File");
  const isBlob = kindOfTest("Blob");
  const isFileList = kindOfTest("FileList");
  const isStream = (val) => isObject(val) && isFunction(val.pipe);
  const isFormData = (thing) => {
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
  };
  const isURLSearchParams = kindOfTest("URLSearchParams");
  const trim2 = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach(obj, fn2, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn2.call(null, obj[i], i, obj);
      }
    } else {
      const keys2 = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys2.length;
      let key2;
      for (i = 0; i < len; i++) {
        key2 = keys2[i];
        fn2.call(null, obj[key2], key2, obj);
      }
    }
  }
  function findKey(obj, key2) {
    key2 = key2.toLowerCase();
    const keys2 = Object.keys(obj);
    let i = keys2.length;
    let _key;
    while (i-- > 0) {
      _key = keys2[i];
      if (key2 === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  const _global = (() => {
    if (typeof globalThis !== "undefined")
      return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  const isContextDefined = (context) => !isUndefined(context) && context !== _global;
  function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue2 = (val, key2) => {
      const targetKey = caseless && findKey(result, key2) || key2;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue2);
    }
    return result;
  }
  const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
    forEach(b, (val, key2) => {
      if (thisArg && isFunction(val)) {
        a[key2] = bind(val, thisArg);
      } else {
        a[key2] = val;
      }
    }, { allOwnKeys });
    return a;
  };
  const stripBOM = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  const inherits = (constructor, superConstructor, props2, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props2 && Object.assign(constructor.prototype, props2);
  };
  const toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
    let props2;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null)
      return destObj;
    do {
      props2 = Object.getOwnPropertyNames(sourceObj);
      i = props2.length;
      while (i-- > 0) {
        prop = props2[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  const endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  const toArray = (thing) => {
    if (!thing)
      return null;
    if (isArray(thing))
      return thing;
    let i = thing.length;
    if (!isNumber(i))
      return null;
    const arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };
  const isTypedArray = ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  const forEachEntry = (obj, fn2) => {
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while ((result = iterator.next()) && !result.done) {
      const pair = result.value;
      fn2.call(obj, pair[0], pair[1]);
    }
  };
  const matchAll = (regExp, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  const isHTMLForm = kindOfTest("HTMLFormElement");
  const toCamelCase = (str) => {
    return str.toLowerCase().replace(
      /[-_\s]([a-z\d])(\w*)/g,
      function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };
  const hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  const isRegExp = kindOfTest("RegExp");
  const reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors2, (descriptor, name) => {
      let ret;
      if ((ret = reducer(descriptor, name, obj)) !== false) {
        reducedDescriptors[name] = ret || descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  const freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
        return false;
      }
      const value = obj[name];
      if (!isFunction(value))
        return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name + "'");
        };
      }
    });
  };
  const toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  const noop = () => {
  };
  const toFiniteNumber = (value, defaultValue) => {
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
  };
  const ALPHA = "abcdefghijklmnopqrstuvwxyz";
  const DIGIT = "0123456789";
  const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  };
  const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
    let str = "";
    const { length } = alphabet;
    while (size--) {
      str += alphabet[Math.random() * length | 0];
    }
    return str;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  const toJSONObject = (obj) => {
    const stack = new Array(10);
    const visit = (source, i) => {
      if (isObject(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!("toJSON" in source)) {
          stack[i] = source;
          const target = isArray(source) ? [] : {};
          forEach(source, (value, key2) => {
            const reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key2] = reducedValue);
          });
          stack[i] = void 0;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  const isAsyncFn = kindOfTest("AsyncFunction");
  const isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
  const utils = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim: trim2,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
  };
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  const prototype$1 = AxiosError.prototype;
  const descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((code) => {
    descriptors[code] = { value: code };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype$1, "isAxiosError", { value: true });
  AxiosError.from = (error4, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype$1);
    utils.toFlatObject(error4, axiosError, function filter2(obj) {
      return obj !== Error.prototype;
    }, (prop) => {
      return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error4.message, code, config, request, response);
    axiosError.cause = error4;
    axiosError.name = error4.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  const httpAdapter = null;
  function isVisitable(thing) {
    return utils.isPlainObject(thing) || utils.isArray(thing);
  }
  function removeBrackets(key2) {
    return utils.endsWith(key2, "[]") ? key2.slice(0, -2) : key2;
  }
  function renderKey(path, key2, dots) {
    if (!path)
      return key2;
    return path.concat(key2).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils.isArray(arr) && !arr.some(isVisitable);
  }
  const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function toFormData(obj, formData, options) {
    if (!utils.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new FormData();
    options = utils.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils.isSpecCompliantForm(formData);
    if (!utils.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null)
        return "";
      if (utils.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils.isBlob(value)) {
        throw new AxiosError("Blob is not supported. Use a Buffer instead.");
      }
      if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key2, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils.endsWith(key2, "{}")) {
          key2 = metaTokens ? key2 : key2.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils.isArray(value) && isFlatArray(value) || (utils.isFileList(value) || utils.endsWith(key2, "[]")) && (arr = utils.toArray(value))) {
          key2 = removeBrackets(key2);
          arr.forEach(function each(el, index2) {
            !(utils.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key2], index2, dots) : indexes === null ? key2 : key2 + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key2, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils.isUndefined(value))
        return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils.forEach(value, function each(el, key2) {
        const result = !(utils.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils.isString(key2) ? key2.trim() : key2,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key2) : [key2]);
        }
      });
      stack.pop();
    }
    if (!utils.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  function encode$1(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData(params, this, options);
  }
  const prototype = AxiosURLSearchParams.prototype;
  prototype.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype.toString = function toString2(encoder) {
    const _encode = encoder ? function(value) {
      return encoder.call(this, value, encode$1);
    } : encode$1;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const _encode = options && options.encode || encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }
  class InterceptorManager {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn2) {
      utils.forEach(this.handlers, function forEachHandler(h2) {
        if (h2 !== null) {
          fn2(h2);
        }
      });
    }
  }
  const InterceptorManager$1 = InterceptorManager;
  const transitionalDefaults = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };
  const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
  const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
  const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
  const isStandardBrowserEnv = (() => {
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  })();
  const isStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();
  const platform = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams$1,
      FormData: FormData$1,
      Blob: Blob$1
    },
    isStandardBrowserEnv,
    isStandardBrowserWebWorkerEnv,
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
  function toURLEncodedForm(data, options) {
    return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key2, path, helpers) {
        if (platform.isNode && utils.isBuffer(value)) {
          this.append(key2, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }
  function parsePropPath(name) {
    return utils.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys2 = Object.keys(arr);
    let i;
    const len = keys2.length;
    let key2;
    for (i = 0; i < len; i++) {
      key2 = keys2[i];
      obj[key2] = arr[key2];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index2) {
      let name = path[index2++];
      const isNumericKey = Number.isFinite(+name);
      const isLast = index2 >= path.length;
      name = !name && utils.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index2);
      if (result && utils.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
      const obj = {};
      utils.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  const defaults = {
    transitional: transitionalDefaults,
    adapter: ["xhr", "http"],
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils.isObject(data);
      if (isObjectPayload && utils.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils.isFormData(data);
      if (isFormData2) {
        if (!hasJSONContentType) {
          return data;
        }
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
      }
      if (utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
        return data;
      }
      if (utils.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional2 = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (data && utils.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform.classes.FormData,
      Blob: platform.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  utils.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
    defaults.headers[method] = {};
  });
  const defaults$1 = defaults;
  const ignoreDuplicateOf = utils.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  const parseHeaders = (rawHeaders) => {
    const parsed = {};
    let key2;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i = line.indexOf(":");
      key2 = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key2 || parsed[key2] && ignoreDuplicateOf[key2]) {
        return;
      }
      if (key2 === "set-cookie") {
        if (parsed[key2]) {
          parsed[key2].push(val);
        } else {
          parsed[key2] = [val];
        }
      } else {
        parsed[key2] = parsed[key2] ? parsed[key2] + ", " + val : val;
      }
    });
    return parsed;
  };
  const $internals = Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
    if (utils.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils.isString(value))
      return;
    if (utils.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  class AxiosHeaders {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key2 = utils.findKey(self2, lHeader);
        if (!key2 || self2[key2] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key2] !== false) {
          self2[key2 || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders(header), valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key2 = utils.findKey(this, header);
        if (key2) {
          const value = this[key2];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils.isFunction(parser)) {
            return parser.call(this, value, key2);
          }
          if (utils.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key2 = utils.findKey(this, header);
        return !!(key2 && this[key2] !== void 0 && (!matcher || matchHeaderValue(this, this[key2], key2, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key2 = utils.findKey(self2, _header);
          if (key2 && (!matcher || matchHeaderValue(self2, self2[key2], key2, matcher))) {
            delete self2[key2];
            deleted = true;
          }
        }
      }
      if (utils.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys2 = Object.keys(this);
      let i = keys2.length;
      let deleted = false;
      while (i--) {
        const key2 = keys2[i];
        if (!matcher || matchHeaderValue(this, this[key2], key2, matcher, true)) {
          delete this[key2];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format) {
      const self2 = this;
      const headers = {};
      utils.forEach(this, (value, header) => {
        const key2 = utils.findKey(headers, header);
        if (key2) {
          self2[key2] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(", ") : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
      const computed2 = new this(first);
      targets.forEach((target) => computed2.set(target));
      return computed2;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype2 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype2, _header);
          accessors[lHeader] = true;
        }
      }
      utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  }
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  utils.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key2) => {
    let mapped = key2[0].toUpperCase() + key2.slice(1);
    return {
      get: () => value,
      set(headerValue) {
        this[mapped] = headerValue;
      }
    };
  });
  utils.freezeMethods(AxiosHeaders);
  const AxiosHeaders$1 = AxiosHeaders;
  function transformData(fns, response) {
    const config = this || defaults$1;
    const context = response || config;
    const headers = AxiosHeaders$1.from(context.headers);
    let data = context.data;
    utils.forEach(fns, function transform(fn2) {
      data = fn2.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }
  function CanceledError(message, config, request) {
    AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  utils.inherits(CanceledError, AxiosError, {
    __CANCEL__: true
  });
  function settle(resolve, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError(
        "Request failed with status code " + response.status,
        [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }
  const cookies = platform.isStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    function standardBrowserEnv() {
      return {
        write: function write2(name, value, expires, path, domain, secure) {
          const cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read2(name) {
          const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove2(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    function nonStandardBrowserEnv() {
      return {
        write: function write2() {
        },
        read: function read2() {
          return null;
        },
        remove: function remove2() {
        }
      };
    }()
  );
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  const isURLSameOrigin = platform.isStandardBrowserEnv ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function standardBrowserEnv2() {
      const msie = /(msie|trident)/i.test(navigator.userAgent);
      const urlParsingNode = document.createElement("a");
      let originURL;
      function resolveURL(url) {
        let href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin2(requestURL) {
        const parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function nonStandardBrowserEnv2() {
      return function isURLSameOrigin2() {
        return true;
      };
    }()
  );
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }
  function speedometer(samplesCount, min2) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min2 = min2 !== void 0 ? min2 : 1e3;
    return function push(chunkLength) {
      const now3 = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now3;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now3;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now3 - firstSampleTS < min2) {
        return;
      }
      const passed = startedAt && now3 - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = speedometer(50, 250);
    return (e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e
      };
      data[isDownloadStream ? "download" : "upload"] = true;
      listener(data);
    };
  }
  const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  const xhrAdapter = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      let requestData = config.data;
      const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
      const responseType = config.responseType;
      let onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener("abort", onCanceled);
        }
      }
      let contentType;
      if (utils.isFormData(requestData)) {
        if (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv) {
          requestHeaders.setContentType(false);
        } else if (!requestHeaders.getContentType(/^\s*multipart\/form-data/)) {
          requestHeaders.setContentType("multipart/form-data");
        } else if (utils.isString(contentType = requestHeaders.getContentType())) {
          requestHeaders.setContentType(contentType.replace(/^\s*(multipart\/form-data);+/, "$1"));
        }
      }
      let request = new XMLHttpRequest();
      if (config.auth) {
        const username = config.auth.username || "";
        const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
        requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
      }
      const fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders$1.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional2 = config.transitional || transitionalDefaults;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
          config,
          request
        ));
        request = null;
      };
      if (platform.isStandardBrowserEnv) {
        const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key2) {
          request.setRequestHeader(key2, val);
        });
      }
      if (!utils.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = config.responseType;
      }
      if (typeof config.onDownloadProgress === "function") {
        request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
      }
      if (typeof config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
      }
      if (config.cancelToken || config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(fullPath);
      if (protocol && platform.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData || null);
    });
  };
  const knownAdapters = {
    http: httpAdapter,
    xhr: xhrAdapter
  };
  utils.forEach(knownAdapters, (fn2, value) => {
    if (fn2) {
      try {
        Object.defineProperty(fn2, "name", { value });
      } catch (e) {
      }
      Object.defineProperty(fn2, "adapterName", { value });
    }
  });
  const renderReason = (reason) => `- ${reason}`;
  const isResolvedHandle = (adapter) => utils.isFunction(adapter) || adapter === null || adapter === false;
  const adapters = {
    getAdapter: (adapters2) => {
      adapters2 = utils.isArray(adapters2) ? adapters2 : [adapters2];
      const { length } = adapters2;
      let nameOrAdapter;
      let adapter;
      const rejectedReasons = {};
      for (let i = 0; i < length; i++) {
        nameOrAdapter = adapters2[i];
        let id;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
          adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
          if (adapter === void 0) {
            throw new AxiosError(`Unknown adapter '${id}'`);
          }
        }
        if (adapter) {
          break;
        }
        rejectedReasons[id || "#" + i] = adapter;
      }
      if (!adapter) {
        const reasons = Object.entries(rejectedReasons).map(
          ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
        );
        let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
        throw new AxiosError(
          `There is no suitable adapter to dispatch the request ` + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return adapter;
    },
    adapters: knownAdapters
  };
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders$1.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders$1.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }
  const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
      if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
        return utils.merge.call({ caseless }, target, source);
      } else if (utils.isPlainObject(source)) {
        return utils.merge({}, source);
      } else if (utils.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, caseless) {
      if (!utils.isUndefined(b)) {
        return getMergedValue(a, b, caseless);
      } else if (!utils.isUndefined(a)) {
        return getMergedValue(void 0, a, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }
  const VERSION = "1.5.1";
  const validators$1 = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
    validators$1[type] = function validator28(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  const deprecatedWarnings = {};
  validators$1.transitional = function transitional(validator28, version, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator28 === false) {
        throw new AxiosError(
          formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
          AxiosError.ERR_DEPRECATED
        );
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version + " and will be removed in the near future"
          )
        );
      }
      return validator28 ? validator28(value, opt, opts) : true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
    }
    const keys2 = Object.keys(options);
    let i = keys2.length;
    while (i-- > 0) {
      const opt = keys2[i];
      const validator28 = schema[opt];
      if (validator28) {
        const value = options[opt];
        const result = value === void 0 || validator28(value, opt, options);
        if (result !== true) {
          throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
      }
    }
  }
  const validator27 = {
    assertOptions,
    validators: validators$1
  };
  const validators = validator27.validators;
  class Axios {
    constructor(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager$1(),
        response: new InterceptorManager$1()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      const { transitional: transitional2, paramsSerializer, headers } = config;
      if (transitional2 !== void 0) {
        validator27.assertOptions(transitional2, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator27.assertOptions(paramsSerializer, {
            encode: validators.function,
            serialize: validators.function
          }, true);
        }
      }
      config.method = (config.method || this.defaults.method || "get").toLowerCase();
      let contextHeaders = headers && utils.merge(
        headers.common,
        headers[config.method]
      );
      headers && utils.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (method) => {
          delete headers[method];
        }
      );
      config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), void 0];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config;
      i = 0;
      while (i < len) {
        const onFulfilled = requestInterceptorChain[i++];
        const onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error4) {
          onRejected.call(this, error4);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error4) {
        return Promise.reject(error4);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
    getUri(config) {
      config = mergeConfig(this.defaults, config);
      const fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  }
  utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  const Axios$1 = Axios;
  class CancelToken {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners)
          return;
        let i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve) => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError(message, config, request);
        resolvePromise(token.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index2 = this._listeners.indexOf(listener);
      if (index2 !== -1) {
        this._listeners.splice(index2, 1);
      }
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    }
  }
  const CancelToken$1 = CancelToken;
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }
  function isAxiosError(payload) {
    return utils.isObject(payload) && payload.isAxiosError === true;
  }
  const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(([key2, value]) => {
    HttpStatusCode[value] = key2;
  });
  const HttpStatusCode$1 = HttpStatusCode;
  function createInstance2(defaultConfig2) {
    const context = new Axios$1(defaultConfig2);
    const instance = bind(Axios$1.prototype.request, context);
    utils.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
    utils.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance2(mergeConfig(defaultConfig2, instanceConfig));
    };
    return instance;
  }
  const axios = createInstance2(defaults$1);
  axios.Axios = Axios$1;
  axios.CanceledError = CanceledError;
  axios.CancelToken = CancelToken$1;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData;
  axios.AxiosError = AxiosError;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders$1;
  axios.formToJSON = (thing) => formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.getAdapter = adapters.getAdapter;
  axios.HttpStatusCode = HttpStatusCode$1;
  axios.default = axios;
  const axios$1 = axios;
  function generateRandomString(numDigits) {
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
    return new Promise((resolve, reject) => {
      if (window.isSecureContext) {
        navigator.clipboard.writeText(content).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      } else {
        reject("很抱歉，暂时不支持在此网站上复制");
      }
    });
  }
  const useTianyiCloud = () => {
    const shareDelay = vue.ref(1e3);
    const expireTime = vue.ref(ExpireTimeEnum$2.forever);
    const shareInfo = vue.ref([]);
    const shareInfoUserSee = vue.ref("");
    const shareProgress = vue.ref(0);
    const selectFileInfoList = vue.ref([]);
    const isSharing = vue.ref(false);
    const handleChangeTime = (value) => {
      expireTime.value = value;
    };
    const handleTransformFormat = (info3) => {
      switch (info3.expireTime) {
        case ExpireTimeEnum$2.oneDay: {
          return `文件名称: ${info3.fileName} 分享链接:${info3.url} 提取码:${info3.accessCode} 分享有效时间: 1天`;
        }
        case ExpireTimeEnum$2.sevenDay: {
          return `文件名称: ${info3.fileName} 分享链接:${info3.url} 提取码:${info3.accessCode} 分享有效时间: 7天`;
        }
        case ExpireTimeEnum$2.forever: {
          return `文件名称: ${info3.fileName} 分享链接:${info3.url} 提取码:${info3.accessCode} 分享有效时间: 永久`;
        }
        default: {
          return `文件名称: ${info3.fileName} 分享链接:${info3.url} 提取码:${info3.accessCode} 分享有效时间: 未知`;
        }
      }
    };
    const handleBatchOperation = async () => {
      var _a;
      const selectDOM = document.querySelectorAll("li[data-selected=true].c-file-item");
      if (!selectDOM.length) {
        return MessagePlugin.warning("请选择要分享的文件!");
      }
      isSharing.value = true;
      for (let dom of selectDOM) {
        selectFileInfoList.value.push({
          id: dom.getAttribute("data-fileid") ?? "",
          fileName: ((_a = dom.querySelector(".file-item-name-fileName-span")) == null ? void 0 : _a.textContent) ?? "(!!$$未知名称!!$$)"
        });
      }
      for (let fileInfo of selectFileInfoList.value) {
        const { data: { shareLinkList } } = await axios$1({
          method: "get",
          url: "https://cloud.189.cn/api/open/share/createShareLink.action",
          params: {
            noCache: Math.random(),
            fileId: fileInfo.id,
            expireTime: expireTime.value,
            shareType: "3"
            //固定值
          },
          headers: {
            "accept": "application/json;charset=UTF-8"
          }
        }).catch(() => ({ data: { shareLinkList: [] } }));
        let tempData = {
          ...shareLinkList[0],
          expireTime: expireTime.value,
          fileName: fileInfo.fileName
        };
        shareInfo.value.push(tempData);
        shareInfoUserSee.value += handleTransformFormat(tempData) + "\n";
        shareProgress.value = Math.floor(shareInfo.value.length / selectFileInfoList.value.length * 100);
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, shareDelay.value);
        });
      }
      selectFileInfoList.value = [];
      shareProgress.value = 100;
      isSharing.value = false;
      await MessagePlugin.success("批量分享成功,请自行查看结果");
    };
    const handleEnd = () => {
      shareInfo.value = [];
      shareInfoUserSee.value = "";
      shareProgress.value = 0;
    };
    const copyValue = () => {
      CopyValueToClipBoard(shareInfoUserSee.value + "").then(() => {
        MessagePlugin.success("复制成功");
      }).catch(() => {
        MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
      });
    };
    const download = () => {
      DownloadTxt("天翼云盘批量分享" + Date.now(), shareInfoUserSee.value);
    };
    return {
      shareDelay,
      expireTime,
      shareInfo,
      selectFileInfoList,
      shareInfoUserSee,
      isSharing,
      shareProgress,
      handleChangeTime,
      handleBatchOperation,
      handleTransformFormat,
      handleEnd,
      copyValue,
      download
    };
  };
  const _withScopeId$2 = (n) => (vue.pushScopeId("data-v-33cc8085"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$2 = { class: "tianyiCloud" };
  const _hoisted_2$2 = { class: "tianyiCloud_option" };
  const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("span", null, "有效期:", -1));
  const _hoisted_4$2 = { class: "tianyiCloud_option_time" };
  const _hoisted_5$2 = { class: "tianyiCloud_operation" };
  const _hoisted_6$2 = { class: "tianyiCloud_progress" };
  const _hoisted_7$2 = { class: "tianyiCloud_result" };
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props, { expose: __expose }) {
      const {
        shareDelay,
        isSharing,
        shareInfoUserSee,
        shareProgress,
        handleChangeTime,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download
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
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
          vue.createElementVNode("div", _hoisted_2$2, [
            _hoisted_3$2,
            vue.createVNode(_component_t_radio_group, {
              "default-value": vue.unref(ExpireTimeEnum$2).forever,
              onChange: vue.unref(handleChangeTime)
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_radio_button, {
                  value: vue.unref(ExpireTimeEnum$2).oneDay
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("1天")
                  ]),
                  _: 1
                }, 8, ["value"]),
                vue.createVNode(_component_t_radio_button, {
                  value: vue.unref(ExpireTimeEnum$2).sevenDay
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("7天")
                  ]),
                  _: 1
                }, 8, ["value"]),
                vue.createVNode(_component_t_radio_button, {
                  value: vue.unref(ExpireTimeEnum$2).forever
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("永久")
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }, 8, ["default-value", "onChange"]),
            vue.createElementVNode("div", _hoisted_4$2, [
              vue.createVNode(_component_t_tooltip, { content: "分享一次后等待下一次分享的时间(避免请求频率过高)" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("延迟(毫秒):")
                ]),
                _: 1
              }),
              vue.createVNode(_component_t_input_number, {
                modelValue: vue.unref(shareDelay),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(shareDelay) ? shareDelay.value = $event : null),
                step: "100"
              }, null, 8, ["modelValue"])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_5$2, [
            vue.createVNode(_component_t_space, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_button, {
                  onClick: vue.unref(handleBatchOperation),
                  loading: vue.unref(isSharing)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("批量分享")
                  ]),
                  _: 1
                }, 8, ["onClick", "loading"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(copyValue)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("复制到剪贴板")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(download)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("下载分享链接")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", _hoisted_6$2, [
            vue.createVNode(_component_t_progress, {
              percentage: vue.unref(shareProgress),
              color: { from: " #84fab0", to: "#00A870" }
            }, null, 8, ["percentage"])
          ]),
          vue.createElementVNode("div", _hoisted_7$2, [
            vue.createVNode(_component_t_textarea, {
              readonly: "",
              autosize: { minRows: 10 },
              value: vue.unref(shareInfoUserSee),
              placeholder: "分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
            }, null, 8, ["value"])
          ])
        ]);
      };
    }
  });
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key2, val] of props2) {
      target[key2] = val;
    }
    return target;
  };
  const TianyiCloud = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-33cc8085"]]);
  var ExpireTimeEnum$1 = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 1] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 7] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["thirtyDay"] = 30] = "thirtyDay";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = 0] = "forever";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum$1 || {});
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  const useBaiduCloud = () => {
    const shareDelay = vue.ref(1e3);
    const expireTime = vue.ref(ExpireTimeEnum$1.forever);
    const shareInfo = vue.ref([]);
    const shareInfoUserSee = vue.ref("");
    const shareProgress = vue.ref(0);
    const selectFileInfoList = vue.ref([]);
    const isSharing = vue.ref(false);
    const handleTransformFormat = (info3) => {
      switch (info3.expireTime) {
        case ExpireTimeEnum$1.oneDay: {
          return `文件名称: ${info3.fileName} 分享链接:${info3.link} 提取码:${info3.pwd} 分享有效时间: 1天`;
        }
        case ExpireTimeEnum$1.sevenDay: {
          return `文件名称: ${info3.fileName} 分享链接:${info3.link} 提取码:${info3.pwd} 分享有效时间: 7天`;
        }
        case ExpireTimeEnum$1.thirtyDay: {
          return `文件名称: ${info3.fileName} 分享链接:${info3.link} 提取码:${info3.pwd} 分享有效时间: 30天`;
        }
        case ExpireTimeEnum$1.forever: {
          return `文件名称: ${info3.fileName} 分享链接:${info3.link} 提取码:${info3.pwd} 分享有效时间: 永久`;
        }
        default: {
          return `文件名称: ${info3.fileName} 分享链接:${info3.link} 提取码:${info3.pwd} 分享有效时间: 未知`;
        }
      }
    };
    const handleBatchOperation = async () => {
      var _a;
      const selectDOM = document.querySelectorAll("tr.wp-s-table-skin-hoc__tr.selected");
      if (!selectDOM.length) {
        return MessagePlugin.warning("请选择要分享的文件!");
      }
      isSharing.value = true;
      for (let dom of selectDOM) {
        const id = dom.getAttribute("data-id") ?? "";
        const tempDOM = dom.querySelector(".wp-s-pan-list__file-name-title-text");
        const title = tempDOM ? tempDOM.getAttribute("title") ?? "(!!$$未知名称!!$$)" : "获取名称失败";
        selectFileInfoList.value.push({
          id,
          //存储文件id
          fileName: title
          //文件名称
        });
      }
      for (let fileInfo of selectFileInfoList.value) {
        const pwd = generateRandomString(4);
        const { locals } = _unsafeWindow ?? {};
        const { data } = await axios$1({
          method: "post",
          url: "https://pan.baidu.com/share/set",
          params: {
            channel: "channel",
            clienttype: "0",
            bdstoken: (_a = locals == null ? void 0 : locals.userInfo) == null ? void 0 : _a.bdstoken,
            app_id: "250528",
            //未知-好像是定值
            web: 1
            //'dp-logid':'96456600647322280113',//未知
          },
          data: {
            period: expireTime.value,
            pwd,
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
          expireTime: expireTime.value,
          fileName: fileInfo.fileName,
          pwd
        };
        shareInfo.value.push(tempData);
        shareInfoUserSee.value += handleTransformFormat(tempData) + "\n";
        shareProgress.value = Math.floor(shareInfo.value.length / selectFileInfoList.value.length * 100);
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, shareDelay.value);
        });
      }
      selectFileInfoList.value = [];
      shareProgress.value = 100;
      isSharing.value = false;
      await MessagePlugin.success("批量分享成功,请自行查看结果");
    };
    const handleEnd = () => {
      shareInfo.value = [];
      shareInfoUserSee.value = "";
      shareProgress.value = 0;
    };
    const copyValue = () => {
      CopyValueToClipBoard(shareInfoUserSee.value + "").then(() => {
        MessagePlugin.success("复制成功");
      }).catch(() => {
        MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
      });
    };
    const download = () => {
      DownloadTxt("百度云盘批量分享" + Date.now(), shareInfoUserSee.value);
    };
    return {
      shareDelay,
      expireTime,
      shareInfo,
      selectFileInfoList,
      shareInfoUserSee,
      isSharing,
      shareProgress,
      handleBatchOperation,
      handleTransformFormat,
      handleEnd,
      copyValue,
      download
    };
  };
  const _withScopeId$1 = (n) => (vue.pushScopeId("data-v-5df95f20"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$1 = { class: "baiduCloud" };
  const _hoisted_2$1 = { class: "baiduCloud_option" };
  const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("span", null, "有效期:", -1));
  const _hoisted_4$1 = { class: "baiduCloud_option_time" };
  const _hoisted_5$1 = { class: "baiduCloud_operation" };
  const _hoisted_6$1 = { class: "baiduCloud_progress" };
  const _hoisted_7$1 = { class: "baiduCloud_result" };
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props, { expose: __expose }) {
      const {
        expireTime,
        shareDelay,
        isSharing,
        shareInfoUserSee,
        shareProgress,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download
      } = useBaiduCloud();
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
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          vue.createElementVNode("div", _hoisted_2$1, [
            _hoisted_3$1,
            vue.createVNode(_component_t_radio_group, {
              modelValue: vue.unref(expireTime),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(expireTime) ? expireTime.value = $event : null)
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_radio_button, {
                  value: vue.unref(ExpireTimeEnum$1).oneDay
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("1天")
                  ]),
                  _: 1
                }, 8, ["value"]),
                vue.createVNode(_component_t_radio_button, {
                  value: vue.unref(ExpireTimeEnum$1).sevenDay
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("7天")
                  ]),
                  _: 1
                }, 8, ["value"]),
                vue.createVNode(_component_t_radio_button, {
                  value: vue.unref(ExpireTimeEnum$1).thirtyDay
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("30天")
                  ]),
                  _: 1
                }, 8, ["value"]),
                vue.createVNode(_component_t_radio_button, {
                  value: vue.unref(ExpireTimeEnum$1).forever
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("永久")
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }, 8, ["modelValue"]),
            vue.createElementVNode("div", _hoisted_4$1, [
              vue.createVNode(_component_t_tooltip, { content: "分享一次后等待下一次分享的时间(避免请求频率过高)" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("延迟(毫秒):")
                ]),
                _: 1
              }),
              vue.createVNode(_component_t_input_number, {
                modelValue: vue.unref(shareDelay),
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(shareDelay) ? shareDelay.value = $event : null),
                step: "100"
              }, null, 8, ["modelValue"])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_5$1, [
            vue.createVNode(_component_t_space, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_button, {
                  onClick: vue.unref(handleBatchOperation),
                  loading: vue.unref(isSharing)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("批量分享")
                  ]),
                  _: 1
                }, 8, ["onClick", "loading"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(copyValue)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("复制到剪贴板")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(download)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("下载分享链接")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", _hoisted_6$1, [
            vue.createVNode(_component_t_progress, {
              percentage: vue.unref(shareProgress),
              color: { from: " #84fab0", to: "#00A870" }
            }, null, 8, ["percentage"])
          ]),
          vue.createElementVNode("div", _hoisted_7$1, [
            vue.createVNode(_component_t_textarea, {
              readonly: "",
              autosize: { minRows: 10 },
              value: vue.unref(shareInfoUserSee),
              placeholder: "分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
            }, null, 8, ["value"])
          ])
        ]);
      };
    }
  });
  const BaiduCloud = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5df95f20"]]);
  var ExpireTimeEnum = /* @__PURE__ */ ((ExpireTimeEnum2) => {
    ExpireTimeEnum2[ExpireTimeEnum2["oneDay"] = 1] = "oneDay";
    ExpireTimeEnum2[ExpireTimeEnum2["sevenDay"] = 7] = "sevenDay";
    ExpireTimeEnum2[ExpireTimeEnum2["forever"] = -1] = "forever";
    return ExpireTimeEnum2;
  })(ExpireTimeEnum || {});
  const ShareDOMSelect = {
    "115Cloud": {
      select: "div.list-contents > ul li.selected",
      //选中文件li
      idAttribute: ["file_id", "cate_id"]
      //存储id的自定义属性
    }
  };
  const use115Cloud = () => {
    const shareDelay = vue.ref(1e3);
    const expireTime = vue.ref(ExpireTimeEnum.forever);
    const shareInfo = vue.ref([]);
    const shareInfoUserSee = vue.ref("");
    const shareProgress = vue.ref(0);
    const selectFileInfoList = vue.ref([]);
    const isSharing = vue.ref(false);
    const handleTransformFormat = (info3) => {
      return `文件名称: ${info3.fileName} 分享链接:${info3.share_url} 提取码:${info3.receive_code} 分享有效时间: ${info3.share_ex_duration}`;
    };
    const handleBatchOperation = async () => {
      const iframe = document.querySelector("iframe");
      const iframeWindow = iframe.contentWindow ?? _unsafeWindow;
      const selectDOM = iframeWindow.document.querySelectorAll(ShareDOMSelect["115Cloud"].select);
      if (!selectDOM.length) {
        return MessagePlugin.warning("请选择要分享的文件!");
      }
      isSharing.value = true;
      for (let dom of selectDOM) {
        const id = (dom.getAttribute(ShareDOMSelect["115Cloud"].idAttribute[0]) || dom.getAttribute(ShareDOMSelect["115Cloud"].idAttribute[1])) ?? "";
        const title = dom.getAttribute("title");
        selectFileInfoList.value.push({
          id,
          //存储文件id
          fileName: title ?? "(!!$$未知名称!!$$)"
          //文件名称
        });
      }
      for (let fileInfo of selectFileInfoList.value) {
        const formData = new FormData();
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
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
            "Cookie": document.cookie,
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Referer": "https://115.com/"
          },
          data: formData,
          onload: ({ response }) => {
            const result = JSON.parse(response);
            let tempData = {
              ...result.data || {},
              fileName: fileInfo.fileName
            };
            shareInfo.value.push(tempData);
            shareInfoUserSee.value += handleTransformFormat(tempData) + "\n";
            shareProgress.value = Math.floor(shareInfo.value.length / selectFileInfoList.value.length * 100);
          },
          onerror: (res) => {
            console.error("失败", res);
          }
        });
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, shareDelay.value);
        });
      }
      selectFileInfoList.value = [];
      shareProgress.value = 100;
      isSharing.value = false;
      await MessagePlugin.success("批量分享成功,请自行查看结果");
    };
    const handleEnd = () => {
      shareInfo.value = [];
      shareInfoUserSee.value = "";
      shareProgress.value = 0;
    };
    const copyValue = () => {
      CopyValueToClipBoard(shareInfoUserSee.value + "").then(() => {
        MessagePlugin.success("复制成功");
      }).catch(() => {
        MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
      });
    };
    const download = () => {
      DownloadTxt("百度云盘批量分享" + Date.now(), shareInfoUserSee.value);
    };
    return {
      shareDelay,
      expireTime,
      shareInfo,
      selectFileInfoList,
      shareInfoUserSee,
      isSharing,
      shareProgress,
      handleBatchOperation,
      handleTransformFormat,
      handleEnd,
      copyValue,
      download
    };
  };
  const _withScopeId = (n) => (vue.pushScopeId("data-v-bbac4313"), n = n(), vue.popScopeId(), n);
  const _hoisted_1 = { class: "cloud115" };
  const _hoisted_2 = { class: "cloud115_option" };
  const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", null, "有效期:", -1));
  const _hoisted_4 = { class: "cloud115_option_time" };
  const _hoisted_5 = { class: "cloud115_operation" };
  const _hoisted_6 = { class: "cloud115_progress" };
  const _hoisted_7 = { class: "cloud115_result" };
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props, { expose: __expose }) {
      const {
        expireTime,
        shareDelay,
        isSharing,
        shareInfoUserSee,
        shareProgress,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download
      } = use115Cloud();
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
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("div", _hoisted_2, [
            _hoisted_3,
            vue.createVNode(_component_t_radio_group, {
              modelValue: vue.unref(expireTime),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(expireTime) ? expireTime.value = $event : null)
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_radio_button, {
                  value: vue.unref(ExpireTimeEnum).forever
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("永久")
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }, 8, ["modelValue"]),
            vue.createElementVNode("div", _hoisted_4, [
              vue.createVNode(_component_t_tooltip, { content: "分享一次后等待下一次分享的时间(避免请求频率过高)" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("延迟(毫秒):")
                ]),
                _: 1
              }),
              vue.createVNode(_component_t_input_number, {
                modelValue: vue.unref(shareDelay),
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(shareDelay) ? shareDelay.value = $event : null),
                step: "100"
              }, null, 8, ["modelValue"])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_5, [
            vue.createVNode(_component_t_space, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_t_button, {
                  onClick: vue.unref(handleBatchOperation),
                  loading: vue.unref(isSharing)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("批量分享")
                  ]),
                  _: 1
                }, 8, ["onClick", "loading"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(copyValue)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("复制到剪贴板")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                vue.createVNode(_component_t_button, {
                  theme: "default",
                  onClick: vue.unref(download)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("下载分享链接")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          vue.createElementVNode("div", _hoisted_6, [
            vue.createVNode(_component_t_progress, {
              percentage: vue.unref(shareProgress),
              color: { from: " #84fab0", to: "#00A870" }
            }, null, 8, ["percentage"])
          ]),
          vue.createElementVNode("div", _hoisted_7, [
            vue.createVNode(_component_t_textarea, {
              readonly: "",
              autosize: { minRows: 10 },
              value: vue.unref(shareInfoUserSee),
              placeholder: "分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
            }, null, 8, ["value"])
          ])
        ]);
      };
    }
  });
  const Cloud115 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bbac4313"]]);
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const visible = vue.ref(false);
      const name = vue.ref("未知网盘");
      const operationRef = vue.ref();
      const ShowComponent = vue.computed(() => {
        const url = window.location.href;
        if (url.startsWith("https://pan.baidu.com/disk/main")) {
          name.value = "百度网盘";
          return BaiduCloud;
        } else if (url.startsWith("https://cloud.189.cn/web/main/")) {
          name.value = "天翼云盘";
          return TianyiCloud;
        } else if (url.startsWith("https://115.com")) {
          name.value = "115网盘";
          return Cloud115;
        }
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
          vue.createVNode(_component_t_button, { onClick: handleOpenDrawerClick }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("批量分享操作")
            ]),
            _: 1
          }),
          vue.createVNode(_component_t_drawer, {
            visible: visible.value,
            "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => visible.value = $event),
            header: name.value + "批量分享工具",
            size: "600px",
            "on-confirm": handleClose,
            onClose: handleClose,
            placement: "right",
            closeOnOverlayClick: false
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(ShowComponent.value), {
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
  const app = vue.createApp(_sfc_main);
  app.use(Button).use(Drawer).use(Radio).use(Space).use(RadioGroup).use(RadioButton).use(Textarea).use(InputNumber).use(Progress).use(Checkbox).use(Tooltip);
  app.mount(
    (() => {
      var _a, _b;
      const app2 = document.createElement("div");
      const url = window.location.href;
      if (url.startsWith("https://pan.baidu.com/disk/main")) {
        const tempDOM = document.querySelector("div.wp-s-header__right");
        if (tempDOM) {
          tempDOM.insertBefore(app2, tempDOM == null ? void 0 : tempDOM.firstChild);
        } else {
          MessagePlugin.error("初始化出错,请刷新重试");
        }
      } else if (url.startsWith("https://cloud.189.cn/web/main/")) {
        (_a = document.querySelector("ul.nav-menu")) == null ? void 0 : _a.append(app2);
      } else if (url.startsWith("https://115.com")) {
        const temp = document.createElement("li");
        temp.append(app2);
        (_b = document.querySelector("div.navigation-ceiling ul")) == null ? void 0 : _b.append(temp);
      }
      return app2;
    })()
  );

})(Vue);