import type { ShareResult } from "./types";
import { ExpireTimeEnumMap } from "./types";
import { FileShareStatusEnum } from "@/hooks/useShare/types";

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
