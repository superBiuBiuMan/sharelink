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

