import { cloudEnum } from "../utils/info";
import xunlei from "./xunlei";
import uc from "./uc";
import baidu from "./baidu";
import tianyi from "./tianyi";
import quark from "./quark";
export const shareLogicMap = {
  //参考https://alova.js.org/zh-CN/api/alova#alovapost
  //迅雷分享逻辑
  [cloudEnum.xunlei]: xunlei,
  //UC网盘分享逻辑
  [cloudEnum.uc]: uc,
  //百度网盘分享逻辑
  [cloudEnum.baidu]: baidu,
  //天翼云分享逻辑
  [cloudEnum.tianyi]: tianyi,
  //夸克网盘分享逻辑
  [cloudEnum.quark]: quark,
} as const;
