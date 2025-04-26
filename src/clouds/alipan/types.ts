import type { BaseShareResult, FileShareStatus } from "@/hooks/useShare/types";

export interface ShareDrawerRef {
  open(): void;
}
export enum ExpireTimeEnum {
  forever = -1,
  sevenDay = 7,
  thirtyDay = 30,
}
export const ExpireTimeEnumMap = {
  [ExpireTimeEnum.sevenDay]: "7天",
  [ExpireTimeEnum.thirtyDay]: "30天",
  [ExpireTimeEnum.forever]: "永久",
} as const;
//url类型
// export enum UrlTypeEnum {
//   noPwd = 1, //有提取码
//   hasPwd = 2, //无提取码
// }
// export const UrlTypeEnumMap = {
//   [UrlTypeEnum.noPwd]: "有提取码",
//   [UrlTypeEnum.hasPwd]: "无提取码",
// } as const;
export interface ShareResult extends BaseShareResult {
  id: string; //文件id
  status: FileShareStatus; //状态
  fileName?: string; //文件名
  shareLink?: string; //分享链接
  extractCode?: string; //提取码
  fileSize?: string; //文件大小
  message?: string; //错误信息
  expireTime?: any; //有效期
  driveId?: string; //网盘id?
}
