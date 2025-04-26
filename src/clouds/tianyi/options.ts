import { ExpireTimeEnum } from "./types";

export const shareOptions = [
  {
    label: "1天",
    value: ExpireTimeEnum.oneDay,
  },
  {
    label: "7天",
    value: ExpireTimeEnum.sevenDay,
  },
  {
    label: "永久",
    value: ExpireTimeEnum.forever,
  },
];
