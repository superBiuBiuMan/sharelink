import { ExpireTimeEnum } from "./types";

export const expireOptions = [
  { value: ExpireTimeEnum.oneDay, label: "1天" },
  { value: ExpireTimeEnum.sevenDay, label: "7天" },
  { value: ExpireTimeEnum.thirtyDay, label: "30天" },
  { value: ExpireTimeEnum.oneYear, label: "1年" },
  { value: ExpireTimeEnum.forever, label: "永久" },
];
