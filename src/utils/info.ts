// 云盘类型
export const cloudEnum = {
  xunlei: "xunlei",
  uc: "uc",
  baidu: "baidu",
  tianyi: "tianyi",
  quark: "quark",
} as const;

// 云盘信息
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
  [cloudEnum.uc]: {
    name: "UC网盘", // 云盘名称
    type: cloudEnum.uc, // 云盘类型
    rootElementId: "sharelink-plus-uc", //挂载唯一id标识,判断是否挂载成功的用途
    matchUrl: [new RegExp("drive.uc.cn/*")], // 匹配url
    mountFn: () => {
      //挂载逻辑
      const appContainer = document.createElement("div");
      appContainer.style.cssText = `
       margin-right:16px;
       margin-bottom:4px;
      `;
      const mountDOM = document.querySelector(
        ".file-search-box"
      ) as HTMLElement;
      if (mountDOM) {
        const tempDOM = document.createElement("div");
        tempDOM.id = cloudInfoAll[cloudEnum.uc].rootElementId;
        mountDOM?.parentNode?.insertBefore(tempDOM, mountDOM.nextSibling);
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
  [cloudEnum.baidu]: {
    name: "百度网盘", // 云盘名称
    type: cloudEnum.baidu, // 云盘类型
    rootElementId: "sharelink-plus-baidu", //挂载唯一id标识,判断是否挂载成功的用途
    matchUrl: [new RegExp("pan.baidu.com/disk/main*")], // 匹配url
    mountFn: () => {
      const appContainer = document.createElement("div");
      appContainer.style.cssText = `
      `;
      const mountDOM = document.querySelector(
        "div.wp-s-header__right"
      ) as HTMLElement;
      if (mountDOM) {
        const tempDOM = document.createElement("div");
        tempDOM.id = cloudInfoAll[cloudEnum.baidu].rootElementId;
        mountDOM?.insertBefore(tempDOM, mountDOM?.firstChild);
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
  [cloudEnum.tianyi]: {
    name: "天翼云盘", // 云盘名称
    type: cloudEnum.tianyi, // 云盘类型
    rootElementId: "sharelink-plus-tianyi", //挂载唯一id标识,判断是否挂载成功的用途
    matchUrl: [new RegExp("cloud.189.cn/*")], // 匹配url
    mountFn: () => {
      // todo 挂载逻辑
      const appContainer = document.createElement("div");
      appContainer.style.cssText = `
      `;
      const mountDOM = document.querySelector("ul.nav-menu") as HTMLElement;
      if (mountDOM) {
        const tempDOM = document.createElement("div");
        tempDOM.id = cloudInfoAll[cloudEnum.tianyi].rootElementId;
        mountDOM?.appendChild(tempDOM);
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
  [cloudEnum.quark]: {
    name: "天翼云盘", // 云盘名称
    type: cloudEnum.quark, // 云盘类型
    rootElementId: "sharelink-plus-quark", //挂载唯一id标识,判断是否挂载成功的用途
    matchUrl: [new RegExp("pan.quark.cn/*")], // 匹配url
    mountFn: () => {
      // todo 挂载逻辑
      const appContainer = document.createElement("div");
      appContainer.style.cssText = `
      `;
      const mountDOM = document.querySelector(
        ".file-search-box"
      ) as HTMLElement;
      if (mountDOM) {
        const tempDOM = document.createElement("div");
        tempDOM.id = cloudInfoAll[cloudEnum.quark].rootElementId;
        // mountDOM?.appendChild(tempDOM);
        mountDOM?.parentNode?.insertBefore(tempDOM, mountDOM);
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
};

/**
 * 获取当前云盘信息
 * @param url 当前url
 * @returns 云盘信息
 */
export const getCloudInfo = (url?: string) => {
  const currentUrl = url || window.location.href;
  for (const key of Object.keys(
    cloudInfoAll
  ) as (keyof typeof cloudInfoAll)[]) {
    const matchUrl = cloudInfoAll[key].matchUrl;
    if (matchUrl.some((pattern) => pattern.test(currentUrl))) {
      return cloudInfoAll[key];
    }
  }
  return null;
};
