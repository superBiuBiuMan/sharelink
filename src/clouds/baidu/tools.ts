import { ShareResult, ExpireTimeEnumMap } from "./types";
import { bytesToSize } from "@/utils/size";
import { unsafeWindow } from "$";
/**
 * 获取百度网盘分享列表信息
 */
export const getBaiduShareListInfo = (): any => {
  const tempDOM = document.querySelector("tbody");
  //@ts-ignore
  const instance = tempDOM?.__vue__;
  if (!instance) return [];
  return {
    list: instance?.$store?.state?.detail?.view?.fileMeta ?? [],
  } as const;
};

/**
 * 转换分享信息
 * @param list 分享信息列表
 * @returns 分享信息列表
 */
export const transformShareInfo = (list: any[]): ShareResult[] => {
  if (!list || list.length === 0) return [];
  return list.map((item) => ({
    id: item.fs_id,
    fileName: item.formatName,
    fileSize: bytesToSize(item.size),
    status: "ready",
  }));
};

/**
 * 获取百度网盘分享基础参数
 * @returns 百度网盘分享基础参数
 */
export const getBaiduBaseShareParams = () => {
  return {
    //@ts-ignore
    bdstoken: unsafeWindow?.locals?.userInfo?.bdstoken,
    version: window.localStorage.getItem("cdp_checkVersionTime"),
  } as const;
};

/**
 * 格式化分享信息
 * @param list 分享信息列表
 * @returns 分享信息列表
 */
export const formatStringForCopyAndDownload = (list: ShareResult[]) => {
  return list
    .map((item) => `${item.fileName} - ${item.shareLink} ${item.extractCode}`)
    .join("\n");
};
/**
 * 转换分享信息为xlsx格式
 * @param list 分享信息列表
 * @returns 分享信息列表
 */
export const transformShareInfoForXlsx = (list: ShareResult[]) => {
  return list.map((item) => ({
    文件名: item.fileName,
    文件大小: item.fileSize,
    分享链接: item.shareLink,
    提取码: item.extractCode,
    有效期:
      ExpireTimeEnumMap[item.expireTime as keyof typeof ExpireTimeEnumMap],
  }));
};
