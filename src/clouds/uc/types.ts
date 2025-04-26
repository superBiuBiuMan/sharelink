import type { BaseShareResult, FileShareStatus } from "@/hooks/useShare/types";

export interface ShareDrawerRef {
  open(): void;
}
//分享天数
export enum ExpireTimeEnum {
  sevenDay = 3, //七天
  thirty = 4, //30天
  sixty = 5, //60天
  halfYear = 7, //180天
  forever = 1, //永久
  oneDay = 2, //1天
}
//提取次数
export enum ExtractEnum {
  //UC网盘提取次数为null代表不限制,但是枚举又不能传入null...
  // forever=null,
  forever = -1,
  one = 1,
  five = 5,
  ten = 10,
  fifty = 50,
  hundred = 100,
}

//提取码type
export enum ExtractCodeTypeEnum {
  no = 1, //无提取码
  yes = 2, //有提取码
}

export interface ShareResult extends BaseShareResult {
  id: string; //文件id
  status: FileShareStatus; //状态
  fileName?: string; //文件名
  shareLink?: string; //分享链接
  extractCode?: string; //提取码
  fileSize?: string; //文件大小
  message?: string; //错误信息
  restoreLimit?: any; //提取次数
  expireTime?: any; //有效期
  shareTheme?: string; //分享主题
}
