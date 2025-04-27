import type { BaseShareResult, FileShareStatus } from "@/hooks/useShare/types";

export interface ShareDrawerRef {
  open(): void;
}
export enum ExpireTimeEnum {
  oneDay = 1, //1天
  threeDay = 3,
  fiveDay = 5,
  sevenDay = 7,
  fifteen = 15,
  forever = -1, //永久
}
export const ExpireTimeEnumMap = {
  [ExpireTimeEnum.oneDay]: "1天",
  [ExpireTimeEnum.threeDay]: "3天",
  [ExpireTimeEnum.fiveDay]: "5天",
  [ExpireTimeEnum.sevenDay]: "7天",
  [ExpireTimeEnum.fifteen]: "15天",
  [ExpireTimeEnum.forever]: "永久",
} as const;
export interface ShareResult extends BaseShareResult {
  id: string; //文件id
  status: FileShareStatus; //状态
  fileName?: string; //文件名
  shareLink?: string; //分享链接
  extractCode?: string; //提取码
  fileSize?: string; //文件大小
  message?: string; //错误信息
  expireTime?: any; //有效期
}
