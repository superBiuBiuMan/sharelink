# 前言

* 偶尔需要用就心血来潮做了下
* 目前支持
  * UC网盘批量分享(2023年11月25日新增)(必须要实名认证才可以批量分享)
  * 123盘批量分享(2023年10月05日新增)
  * 夸克网盘批量分享(2023年10月06日新增)
  * 蓝奏网盘批量分享(2023年10月06日新增)
  * 百度网盘批量分享
  * 115网盘批量分享
  * 天翼云盘批量分享
  * 中国移动网盘批量分享(新增)
  * 迅雷网盘批量分享(新增)
  * 阿里云盘批量分享(新增)
    * 注意:**阿里云盘规定,普通用户每天只能使用分享功能5次；会员用户和Lv.1及以上的达人用户，每天可使用分享次数1000次。超过上限后，将提示「今日分享次数已达上限」**
  * 进度条展示
  * 复制到剪贴板
  * 下载分享链接
  * 分享信息自定义配置
  * 自定义提取码
  * **等等......**
* 更新日志

```
2025年5月18日:
	  1.修复115网盘非vip无法长期分享问题
2025年4月28日:
	  1.全新react重写版本~
	  2.取消分享暂时有点问题~
2024年12月17日-2025年4月27日:
	  1.bug的日常修复
2024年12月17日:
       1.115网盘更新分享功能
       2.下载链接和下载Excel命名格式更正
2024年10月23日:
       1. 百度网盘添加同步工具批量分享功能
2024年10月22日:
       1. UC网盘添加自定义提取码功能
       2. 123云盘标注废弃(加密经常变动)
       3. 115网盘批量分享按钮位置调整到右上角
       4. 中国移动网盘修复无法分享鉴权问题
       5. 百度网盘添加文件大小信息
       6. Polyfill投毒影响更新cdn(可能导致加载缓慢情况)
2024年4月18日:
       1. 阿里云盘更新提示信息
       2. 夸克云盘修复部分文件夹无法获取到分享链接的问题
2024年1月6日:
        1.123云盘添加批量提取直链的功能
2023年11月25日:
        1.添加UC网盘
        2.修复迅雷网盘挂载失败问题
        3.添加"下载信息为Excel"功能(也就是导出为Excel)
2023年10月09日:
        1.添加迅雷网盘
        2.添加阿里云盘
        3.优化挂载逻辑
2023年10月07日:
        1.中国移动网盘添加
        2.逻辑优化
2023年10月06日: 
        1.添加夸克网盘
        2.添加蓝奏云并修复修复蓝奏云文件夹分享不显示问题
        3.123网盘全新选取文件逻辑
        4.百度网盘全新选取文件逻辑
2023年10月05日: 
        1.添加pinia
        2.优化逻辑代码
        3.优化挂载逻辑
        4.修复天翼云逻辑
        4.添加123网盘
```

* bug可能有,有bug就提就可以,注意分享延迟不要调的太低
* 安装地址
  * https://greasyfork.org/zh-CN/scripts/476388-%E7%BD%91%E7%9B%98%E6%89%B9%E9%87%8F%E5%88%86%E4%BA%AB%E5%B7%A5%E5%85%B7
* github开源地址
  * https://github.com/superBiuBiuMan/shareLink
* 使用`vite-plugin-monkey`开发
  * https://github.com/lisonge/vite-plugin-monkey



# 展示

* 界面都差不多,就只展示一张~
* **注意分享设置延迟!**

![](https://s2.loli.net/2025/04/28/FLBSsePjUWThXyu.png)



# 开发教程

## 第一步:vite添加match

```ts
match: [
  "https://www.google.com/",
  "https://pan.xunlei.com/**",
+ "https://drive.uc.cn/*", 
],
```

## 第二步:src\utils\info.ts

* 添加对应网盘信息

```ts
// 云盘类型
export const cloudEnum = {
  xunlei: "xunlei",
+ uc: "uc",
};
```

* 添加挂载逻辑

```ts
/ 云盘信息
export const cloudInfoAll = {
  [cloudEnum.xunlei]: {
    name: "迅雷网盘", // 云盘名称
    type: cloudEnum.xunlei, // 云盘类型
    rootElementId: "sharelink-plus-xunlei",
    matchUrl: [new RegExp("pan.xunlei.com/*")], // 匹配url
    mountFn: () => {
      const appContainer = document.createElement("li");
      appContainer.style.cssText = `
       display: flex;
       justify-content: center;
      `;
      const mountDOM = document.querySelector(
        ".pan-wrapper-asider > ul"
      ) as HTMLElement;
      if (mountDOM) {
        const tempDOM = document.createElement("div");
        tempDOM.id = cloudInfoAll[cloudEnum.xunlei].rootElementId;
        mountDOM.appendChild(tempDOM);
        const shadowContainer = tempDOM.attachShadow({
          mode: "open",
        });
        shadowContainer.appendChild(appContainer);
        return {
          appContainer,
          shadowContainer,
        };
      }
      return {
        appContainer,
      };
    },
  },
+  [cloudEnum.uc]: {
+    name: "UC网盘", // 云盘名称
+    type: cloudEnum.uc, // 云盘类型
+    rootElementId: "sharelink-plus-uc",//挂载唯一id标识,判断是否挂载成功的用途
+    matchUrl: [new RegExp("drive.uc.cn/*")], // 匹配url
+    mountFn: () => {
+     //挂载逻辑
+    },
+  },
};
```

# 第三步: src\clouds\uc

* src\clouds\uc创建对应目录文件内容

```tsx
import React from "react";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import { useState, useRef } from "react";
import ShareDrawer from "./drawer";
import type { ShareDrawerRef } from "./types";
interface Props {}

const Xunlei: React.FC<Props> = () => {
  const shareDOM = useRef<ShareDrawerRef>(null);
  const handleClick = () => {
    shareDOM.current?.open();
  };
  return (
    <>
      <Button
        variant="outlined"
        startIcon={<ShareIcon />}
        onClick={handleClick}
      >
        批量分享
      </Button>
      <ShareDrawer ref={shareDOM} />
    </>
  );
};

export default Xunlei;

```



## 第四步:src\cloudsRegister.ts

* 引入组件

```ts
import Xunlei from "./clouds/xunlei";
+ import Uc from "./clouds/uc";
import { cloudEnum, getCloudInfo } from "./utils/info";
export const cloudsRegister = {
  [cloudEnum.xunlei]: Xunlei,
+ [cloudEnum.uc]: Uc,
};
```

