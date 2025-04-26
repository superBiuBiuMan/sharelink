import { cloudEnum } from "../utils/info";
import xunlei from "./xunlei";
import uc from "./uc";
export const shareLogicMap = {
  //参考https://alova.js.org/zh-CN/api/alova#alovapost
  //迅雷分享逻辑
  [cloudEnum.xunlei]: xunlei,
  //UC网盘分享逻辑
  [cloudEnum.uc]: uc,
} as const;
