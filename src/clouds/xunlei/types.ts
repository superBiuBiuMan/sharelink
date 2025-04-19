import type { FileShareStatusEnumTypes } from "@/enum/index";
//过期时间
export enum ExpireTimeEnum {
  oneDay = 1,
  twoDay = 2,
  threeDay,
  fourDay,
  fiveDay,
  sixDay,
  sevenDay = 7,
  forever = -1,
}
//提取次数
export enum ExtractEnum {
  forever = -1,
  One = 1,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
  Twelve,
  Thirteen,
  Fourteen,
  Fifteen,
  Sixteen,
  Seventeen,
  Eighteen,
  Nineteen,
  Twenty,
}

export interface ShareDrawerRef {
  open: () => void;
}

export interface ShareResult {
  id: string; //文件id
  fileName?: string; //文件名
  shareLink?: string; //分享链接
  extractCode?: string; //提取码
  status: FileShareStatusEnumTypes; //状态
  fileSize?: string; //文件大小
  message?: string; //错误信息
}
export interface ShareConfig {
  expireTime: number; // 提取期限(天)
  extractLimit: number; // 提取次数
  shareDelay: number; // 分享延迟
  allowFastAccess: boolean; // 是否允许快速访问
}
