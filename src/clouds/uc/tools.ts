import { FileShareStatusEnum } from "@/hooks/useShare/types";
import { bytesToSize } from "@/utils/size";
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
