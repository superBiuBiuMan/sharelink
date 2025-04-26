import type { ShareResult } from "./types";
import { ExpireTimeEnumMap } from "./types";
import { bytesToSize } from "@/utils/size";
import { FileShareStatusEnum } from "@/hooks/useShare/types";

/**
 * 转换分享信息
 * @param list 分享信息列表
 * @returns 分享信息列表
 */
export const transformShareInfo = (list: any[]): ShareResult[] => {
  if (!list || list.length === 0) return [];
  return list.map((item) => ({
    id: item.fileId, //文件id
    fileName: item.name, //文件名
    fileSize: bytesToSize(item.size), //文件大小
    status: FileShareStatusEnum.ready, //状态
    driveId: item.driveId, //网盘id
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
    文件大小: item.fileSize,
    分享链接: item.shareLink,
    提取码: item.extractCode,
    有效期:
      ExpireTimeEnumMap[item.expireTime as keyof typeof ExpireTimeEnumMap],
  }));
};
