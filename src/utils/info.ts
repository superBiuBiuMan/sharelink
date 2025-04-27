// 云盘类型
export const cloudEnum = {
  xunlei: "xunlei",
  uc: "uc",
  baidu: "baidu",
  tianyi: "tianyi",
  quark: "quark",
  alipan: "alipan",
  yidong139: "yidong139",
  lanzou: "lanzou",
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
  [cloudEnum.alipan]: {
    name: "阿里云盘", // 云盘名称
    type: cloudEnum.alipan, // 云盘类型
    rootElementId: "sharelink-plus-alipan", //挂载唯一id标识,判断是否挂载成功的用途
    matchUrl: [new RegExp("www.alipan.com/*")], // 匹配url
    mountFn: () => {
      const appContainer = document.createElement("div");
      appContainer.style.cssText = ``;

      // 查找导航标签元素
      const navTabItem = document.querySelector("div[class^='nav-tab-item--']");
      if (navTabItem) {
        // 获取nav-tab-item的具体class名
        const navTabClass = Array.from(navTabItem.classList).find((className) =>
          className.startsWith("nav-tab-item--")
        );

        if (navTabClass) {
          // 创建挂载节点
          const tempDOM = document.createElement("div");
          tempDOM.id = cloudInfoAll[cloudEnum.alipan].rootElementId;

          // 添加相同的class
          appContainer.classList.add(navTabClass);

          // 查找并挂载到nav-tab-content
          const navTabContent = document.querySelector(
            "div[class^='nav-tab-content--']"
          );
          if (navTabContent) {
            tempDOM.style.cssText = `
              margin: 8px 16px;
            `;
            navTabContent.appendChild(tempDOM);
            const shadowContainer = tempDOM.attachShadow({
              mode: "open",
            });
            shadowContainer.appendChild(appContainer);
            return {
              appContainer,
              shadowContainer,
            };
          }
        }
      }

      // 如果上述挂载点都没找到，则挂载到body
      const tempDOM = document.createElement("div");
      tempDOM.id = cloudInfoAll[cloudEnum.alipan].rootElementId;
      document.body.appendChild(tempDOM);
      const shadowContainer = tempDOM.attachShadow({
        mode: "open",
      });
      shadowContainer.appendChild(appContainer);
      return {
        appContainer,
        shadowContainer,
      };
    },
  },
  [cloudEnum.yidong139]: {
    name: "中国移动网盘", // 云盘名称
    type: cloudEnum.yidong139, // 云盘类型
    rootElementId: "sharelink-plus-yidong139", //挂载唯一id标识,判断是否挂载成功的用途
    matchUrl: [new RegExp("yun.139.com/*")], // 匹配url
    mountFn: () => {
      // todo 挂载逻辑
      const appContainer = document.createElement("div");
      appContainer.style.cssText = `
               display:inline-block;
                margin-top:20px;`;
      const mountDOM = document.querySelector(
        ".document_top_upload_button"
      ) as HTMLElement;
      if (mountDOM) {
        const tempDOM = document.createElement("div");
        tempDOM.id = cloudInfoAll[cloudEnum.yidong139].rootElementId;
        mountDOM.parentNode?.append(appContainer, tempDOM);
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
  [cloudEnum.lanzou]: {
    name: "蓝奏云", // 云盘名称
    type: cloudEnum.lanzou, // 云盘类型
    rootElementId: "sharelink-plus-lanzou", //挂载唯一id标识,判断是否挂载成功的用途
    matchUrl: [
      new RegExp("lanzou\\.com/.*"),
      new RegExp("www\\.lanzou\\.com/.*"),
      new RegExp("www\\.lanzou\\.com/account\\.php"),
      new RegExp("up\\.woozooo\\.com/.*"),
      new RegExp("up\\.woozooo\\.com/mydisk\\.php"),
      new RegExp("pc\\.woozooo\\.com/.*"),
      new RegExp("pc\\.woozooo\\.com/mydisk\\.php"),
      new RegExp("pan\\.lanzou\\.com/.*"),
    ], // 匹配url
    mountFn: () => {
      //挂载逻辑
      const appContainer = document.createElement("div");
      appContainer.style.cssText = `
          margin-top: -2px;
      `;
      const mountDOM = document.querySelector(".toum") as HTMLElement;
      console.log(mountDOM, "22222222222222");
      if (mountDOM) {
        const tempDOM = document.createElement("div");
        tempDOM.id = cloudInfoAll[cloudEnum.lanzou].rootElementId;
        mountDOM?.append(tempDOM);
        const shadowContainer = tempDOM.attachShadow({
          mode: "open",
        });
        shadowContainer.appendChild(appContainer);
        console.log(appContainer, shadowContainer);
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
