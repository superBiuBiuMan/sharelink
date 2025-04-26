import { ExpireTimeEnum } from "./types";

export const expireTimeOptions = [
  { value: ExpireTimeEnum.sevenDay, label: "7天" },
  { value: ExpireTimeEnum.thirtyDay, label: "30天" },
  { value: ExpireTimeEnum.forever, label: "永久" },
];
