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
  id: string;
  fileName: string;
  shareLink: string;
  extractCode: string;
  status: "success" | "error";
  message?: string;
}
export interface ShareConfig {
  expireTime: number; // 提取期限(天)
  extractLimit: number; // 提取次数
  shareDelay: number; // 分享延迟(小时)
  allowFastAccess: boolean; // 是否允许快速访问
}
