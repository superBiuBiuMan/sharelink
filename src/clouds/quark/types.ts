import type { BaseShareResult, FileShareStatus } from "@/hooks/useShare/types";

export interface ShareDrawerRef {
  open(): void;
}
//有效期
export enum ExpireTimeEnum {
  forever = 1, //永久
  oneDay, //1天
  sevenDay, //7天
  thirtyDay, //30天
}
export const ExpireTimeEnumMap = {
  [ExpireTimeEnum.oneDay]: "1天",
  [ExpireTimeEnum.sevenDay]: "7天",
  [ExpireTimeEnum.thirtyDay]: "30天",
  [ExpireTimeEnum.forever]: "永久",
} as const;
//文件类型
export enum FileType {
  folder = 0, //文件夹
  file = 1, //文件
}
export const FileTypeMap = {
  [FileType.folder]: "文件夹",
  [FileType.file]: "文件",
} as const;
//url类型
export enum UrlTypeEnum {
  noPwd = 1, //有提取码
  hasPwd = 2, //无提取码
}
export const UrlTypeEnumMap = {
  [UrlTypeEnum.noPwd]: "有提取码",
  [UrlTypeEnum.hasPwd]: "无提取码",
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
  fileType?: FileType; //文件类型
}
