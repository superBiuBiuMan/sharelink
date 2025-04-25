import Xunlei from "./clouds/xunlei";
import Uc from "./clouds/uc";
import { cloudEnum, getCloudInfo } from "./utils/info";
export const cloudsRegister = {
  [cloudEnum.xunlei]: Xunlei,
  [cloudEnum.uc]: Uc,
};

/**
 * 挂载云盘DOM
 * @param url 当前url
 * @returns 挂载信息
 */
export const mountCloudInfo = (url?: string) => {
  const cloudInfo = getCloudInfo(url);
  if (cloudInfo) {
    return cloudInfo;
  }
  return {
    name: "",
    type: "",
    rootElementId: "",
    mountFn: () => {
      return document.createElement("div");
    },
  };
};
