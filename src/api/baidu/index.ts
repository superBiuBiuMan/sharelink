import http from "@/http/index";
import type { AlovaMethodCreateConfig, AlovaGenerics } from "alova";
import { GM_xmlhttpRequest } from "$";
export default {
  //获取分享链接
  share: (
    url: string,
    data: any,
    params: {
      bdstoken: string;
      version: string | null;
    },
    config: AlovaMethodCreateConfig<AlovaGenerics, any, any>
  ) => {
    return http.Post(url, new URLSearchParams(data), {
      params: {
        channel: "chunlei",
        clienttype: "0",
        app_id: "250528", //未知-好像是定值
        web: 1,
        ...params,
      },
      ...config,
    });
  },
} as const;
