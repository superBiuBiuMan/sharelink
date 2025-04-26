import type { ShareResult } from "./types";
import { ExpireTimeEnumMap } from "./types";
import { FileShareStatusEnum } from "@/hooks/useShare/types";
import { CatalogTypeEnum } from "./types";

/**
 * 获取分享列表
 * @returns 分享列表
 */
export const getShareList = () => {
  const tempDOM = document.querySelector(".main_file_list");
  //@ts-ignore
  const instance = tempDOM?.__vue__;
  if (!instance)
    return {
      list: [],
    };
  return {
    list: instance?.selectList ?? [],
  } as const;
};

/**
 * 转换分享信息
 * @param list 分享信息列表
 * @returns 分享信息列表
 */
export const transformShareInfo = (list: any[]): ShareResult[] => {
  if (!list || list.length === 0) return [];
  return list.map(({ item }) => ({
    id: item?.contentID ? item?.contentID : item?.catalogID, //文件id (文件夹id)
    fileName: item?.contentName ? item?.contentName : item?.catalogName, //文件名 (文件夹名称)
    owner: item?.owner ?? "", //分享用得到
    status: FileShareStatusEnum.ready, //状态
    catalogType: item?.contentID
      ? CatalogTypeEnum.file
      : CatalogTypeEnum.folder, //0代表文件分享 1代表文件夹分享
  }));
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
    分享链接: item.shareLink,
    提取码: item.extractCode,
    有效期:
      ExpireTimeEnumMap[item.expireTime as keyof typeof ExpireTimeEnumMap],
  }));
};
