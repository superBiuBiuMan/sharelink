import Xunlei from "./clouds/xunlei";
import { cloudEnum, getCloudInfo } from "./utils/info";
export const cloudsRegister = {
  [cloudEnum.xunlei]: Xunlei,
};

/**
 * 挂载云盘DOM
 * @param url 当前url
 * @returns 挂载函数
 */
export const mountCloudDOM = (url?: string) => {
  const cloudInfo = getCloudInfo(url);
  if (cloudInfo) {
    return cloudInfo.mountFn();
  }
  return document.createElement("div");
};
