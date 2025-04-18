export const cloudEnum = {
  xunlei: "xunlei",
};

// 云盘信息
export const cloudInfoAll = {
  [cloudEnum.xunlei]: {
    name: "迅雷网盘", // 云盘名称
    type: cloudEnum.xunlei, // 云盘类型
    rootElementId: "sharelink-plus-xunlei",
    matchUrl: [new RegExp("pan.xunlei.com/*")], // 匹配url
    mountFn: () => {
      const appContainer = document.createElement("li");
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
