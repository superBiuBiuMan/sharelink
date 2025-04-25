import type { BaseShareResult, FileShareStatus } from "@/hooks/useShare/types";

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

export interface CommonResult extends BaseShareResult {
  restoreLimit?: any; //提取次数
  expireTime?: any; //有效期
}
export interface ShareResult extends CommonResult {
  id: string; //文件id
  fileName?: string; //文件名
  shareLink?: string; //分享链接
  extractCode?: string; //提取码
  status: FileShareStatus; //状态
  fileSize?: string; //文件大小
  message?: string; //错误信息
  restoreLimit?: any; //提取次数
  expireTime?: any; //有效期
}
export interface ShareConfig {
  expireTime: number; // 提取期限(天)
  extractLimit: number; // 提取次数
  shareDelay: number; // 分享延迟
  allowFastAccess: boolean; // 是否允许快速访问
}

export interface ShareResponse extends CommonResult {
  pass_code: string; //提取码
  share_error_files: any[]; //分享失败文件
  share_id: string; //分享id
  share_list: any[]; //分享列表
  share_text: string; //分享文本
  share_text_ext: string | null; //分享文本扩展
  share_url: string; //分享链接
}
