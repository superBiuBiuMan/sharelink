import { ExtractEnum, ExpireTimeEnum } from "./types";

// 下载次数选项
export const extractOptions = [
  { value: ExtractEnum.forever, label: "不限制" },
  { value: ExtractEnum.one, label: "1次" },
  { value: ExtractEnum.five, label: "5次" },
  { value: ExtractEnum.ten, label: "10次" },
  { value: ExtractEnum.fifty, label: "50次" },
  { value: ExtractEnum.hundred, label: "100次" },
];

// 有效期选项
export const expireOptions = [
  { value: ExpireTimeEnum.oneDay, label: "1天" },
  { value: ExpireTimeEnum.sevenDay, label: "7天" },
  { value: ExpireTimeEnum.thirty, label: "30天" },
  { value: ExpireTimeEnum.sixty, label: "60天" },
  { value: ExpireTimeEnum.halfYear, label: "180天" },
  { value: ExpireTimeEnum.forever, label: "永久" },
];
