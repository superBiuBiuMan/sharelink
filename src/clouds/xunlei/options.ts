import { ExtractEnum, ExpireTimeEnum } from "./types";
//提取次数
export const extractOptions = [
  { label: "不限", value: ExtractEnum.forever },
  { label: "1天", value: ExtractEnum.One },
  { label: "2天", value: ExtractEnum.Two },
  { label: "3天", value: ExtractEnum.Three },
  { label: "4天", value: ExtractEnum.Four },
  { label: "5天", value: ExtractEnum.Five },
  { label: "6天", value: ExtractEnum.Six },
  { label: "7天", value: ExtractEnum.Seven },
  { label: "8天", value: ExtractEnum.Eight },
  { label: "9天", value: ExtractEnum.Nine },
  { label: "10天", value: ExtractEnum.Ten },
  { label: "11天", value: ExtractEnum.Eleven },
  { label: "12天", value: ExtractEnum.Twelve },
  { label: "13天", value: ExtractEnum.Thirteen },
  { label: "14天", value: ExtractEnum.Fourteen },
  { label: "15天", value: ExtractEnum.Fifteen },
  { label: "16天", value: ExtractEnum.Sixteen },
  { label: "17天", value: ExtractEnum.Seventeen },
  { label: "18天", value: ExtractEnum.Eighteen },
  { label: "19天", value: ExtractEnum.Nineteen },
  { label: "20天", value: ExtractEnum.Twenty },
];
//过期时间
export const expireTimeOptions = [
  { label: "不限", value: ExpireTimeEnum.forever },
  { label: "1天", value: ExpireTimeEnum.oneDay },
  { label: "2天", value: ExpireTimeEnum.twoDay },
  { label: "3天", value: ExpireTimeEnum.threeDay },
  { label: "4天", value: ExpireTimeEnum.fourDay },
  { label: "5天", value: ExpireTimeEnum.fiveDay },
  { label: "6天", value: ExpireTimeEnum.sixDay },
  { label: "7天", value: ExpireTimeEnum.sevenDay },
];
