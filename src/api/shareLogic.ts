import { cloudEnum } from "../utils/info";
import http from "@/http/index";
import type { AlovaMethodCreateConfig, AlovaGenerics } from "alova";
export const shareLogicMap = {
  //参考https://alova.js.org/zh-CN/api/alova#alovapost
  [cloudEnum.xunlei]: {
    share: async (
      data: any,
      config: AlovaMethodCreateConfig<AlovaGenerics, any, any>
    ) => {
      return http.Post(
        "https://api-pan.xunlei.com/drive/v1/share",
        data,
        config
      );
    },
  },
};
