import Xunlei from "./clouds/xunlei";
import Uc from "./clouds/uc";
import Baidu from "./clouds/baidu";
import Tianyi from "./clouds/tianyi";
import Quark from "./clouds/quark";
import Alipan from "./clouds/alipan";
import Yidong139 from "./clouds/yidong139";
import Lanzou from "./clouds/lanzou";
import Yun115 from "./clouds/yun115";
import BaiduSync from "./clouds/baiduSync";
import { cloudEnum, getCloudInfo } from "./utils/info";
//todo 异步引入
export const cloudsRegister = {
  [cloudEnum.xunlei]: Xunlei,
  [cloudEnum.uc]: Uc,
  [cloudEnum.baidu]: Baidu,
  [cloudEnum.tianyi]: Tianyi,
  [cloudEnum.quark]: Quark,
  [cloudEnum.alipan]: Alipan,
  [cloudEnum.yidong139]: Yidong139,
  [cloudEnum.lanzou]: Lanzou,
  [cloudEnum.yun115]: Yun115,
  [cloudEnum.baiduSync]: BaiduSync,
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
