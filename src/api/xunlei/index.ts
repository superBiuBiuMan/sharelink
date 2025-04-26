import http from "@/http/index";
import type { AlovaMethodCreateConfig, AlovaGenerics } from "alova";
export default {
  share: (
    data: any,
    config: AlovaMethodCreateConfig<AlovaGenerics, any, any>
  ) => {
    return http.Post("https://api-pan.xunlei.com/drive/v1/share", data, config);
  },
} as const;
