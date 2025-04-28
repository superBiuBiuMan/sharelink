/**
 * 获取选中的文件列表
 */
import { FileShareStatusEnum } from "@/hooks/useShare/types";
import { ExpireTimeEnumMap } from "./types";
import { bytesToSize } from "@/utils/size";
import type { ShareResult } from "./types";
export const getSelectList = (): {
  list: ShareResult[];
} => {
  const dom = document.querySelector(".c-file-list");
  if (!dom) return { list: [] };

  const vueInstance = (dom as any).__vue__;
  if (vueInstance) {
    const { selectedList } = vueInstance;
    return {
      list: selectedList?.map((item: any) => ({
        id: item.fileId,
        fileName: item.fileName,
        //已经格式化好了的
        fileSize: item.fileSize,
        isFolder: item.isFolder,
        status: FileShareStatusEnum.ready,
      })),
    };
  }
  return {
    list: [],
  };
};
/**
 * 格式化分享信息
 * @param list 分享信息列表
 * @returns 分享信息列表
 */
export const formatStringForCopyAndDownload = (list: ShareResult[]) => {
  return list
    .map((item) => `${item.fileName} ${item.shareLink} ${item.extractCode}`)
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
