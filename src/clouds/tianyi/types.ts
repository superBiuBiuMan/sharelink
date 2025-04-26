import type { BaseShareResult, FileShareStatus } from "@/hooks/useShare/types";

export interface ShareDrawerRef {
  open(): void;
}
export enum ExpireTimeEnum {
  oneDay = 1,
  sevenDay = 7,
  forever = 2099,
}
export const ExpireTimeEnumMap = {
  [ExpireTimeEnum.oneDay]: "1天",
  [ExpireTimeEnum.sevenDay]: "7天",
  [ExpireTimeEnum.forever]: "永久",
};
export interface ShareResult extends BaseShareResult {
  id: string; //文件id
  status: FileShareStatus; //状态
  fileName?: string; //文件名
  shareLink?: string; //分享链接
  extractCode?: string; //提取码
  fileSize?: string; //文件大小
  message?: string; //错误信息
  expireTime?: any; //有效期
  isFolder?: boolean; //是否是文件夹
}
