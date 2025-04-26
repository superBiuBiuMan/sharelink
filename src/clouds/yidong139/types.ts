import type { BaseShareResult, FileShareStatus } from "@/hooks/useShare/types";

export interface ShareDrawerRef {
  open(): void;
}
export enum ExpireTimeEnum {
  oneDay = 1, //1天
  sevenDay = 2, //7天
  forever = 4, //永久
}
export const ExpireTimeEnumMap = {
  [ExpireTimeEnum.oneDay]: "1天",
  [ExpireTimeEnum.sevenDay]: "7天",
  [ExpireTimeEnum.forever]: "永久",
} as const;
export const ExpireTimeEnumMapVersion2 = {
  [ExpireTimeEnum.oneDay]: 1,
  [ExpireTimeEnum.sevenDay]: 7,
  [ExpireTimeEnum.forever]: null,
} as const;
export enum CatalogTypeEnum {
  file = 0, //文件
  folder = 1, //文件夹
}
export const CatalogTypeEnumMap = {
  [CatalogTypeEnum.file]: "文件",
  [CatalogTypeEnum.folder]: "文件夹",
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
  owner?: string; //分享者?
  catalogType?: CatalogTypeEnum; //文件类型
}
