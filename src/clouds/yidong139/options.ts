import { ExpireTimeEnum } from "./types";

export const expireTimeOptions = [
  { value: ExpireTimeEnum.oneDay, label: "1天" },
  { value: ExpireTimeEnum.sevenDay, label: "7天" },
  { value: ExpireTimeEnum.forever, label: "永久" },
];
