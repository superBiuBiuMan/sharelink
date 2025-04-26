import { FileShareStatusEnum } from "@/hooks/useShare/types";
import { bytesToSize } from "@/utils/size";
import { ExtractEnumMap, ExpireTimeEnumMap } from "./types";
import type { ShareResult } from "./types";

/**
 * 转换分享信息
 * @param list 分享信息列表(DOM获取的)
 * @returns 分享信息列表
 */
export const transformShareInfo = (list: any[]): ShareResult[] => {
  if (!list || list.length === 0) return [];
  return (
    list.map((item) => ({
      id: item.fid,
      fileName: item.file_name,
      status: FileShareStatusEnum.all,
      fileSize: bytesToSize(item.file_size),
    })) ?? []
  );
};

/**
 * 转换分享信息为xlsx
 * @param list 分享信息列表
 * @returns 分享信息列表
 */
export const transformShareInfoForXlsx = (list: ShareResult[]): any[] => {
  if (!list || list.length === 0) return [];
  return list.map((item) => ({
    文件名: item.fileName,
    链接: item.shareLink,
    提取码: item.extractCode,
    有效期:
      ExpireTimeEnumMap[item.expireTime as keyof typeof ExpireTimeEnumMap],
    下载次数: ExtractEnumMap[item.restoreLimit as keyof typeof ExtractEnumMap],
    分享主题: item.shareTheme,
  }));
};

/**
 * 转换分享信息为txt
 * @param list 分享信息列表
 * @returns 分享信息列表
 */
export const formatStringForCopyAndDownload = (list: ShareResult[]): string => {
  if (!list || list.length === 0) return "";
  return list
    .map(
      (item) =>
        `${item.fileName} 链接:${item.shareLink} 提取码:${item.extractCode} 有效期:${item.expireTime} 下载次数:${item.restoreLimit}`
    )
    .join("\n");
};
