import http from "@/http/index";
import type { AlovaMethodCreateConfig, AlovaGenerics } from "alova";
import { GM_xmlhttpRequest } from "$";
export default {
  //获取分享链接
  share: (data: any) => {
    const token: { token_type: string; access_token: string } = JSON.parse(
      localStorage.getItem("token") ?? `{}`
    );
    return http.Post(
      "https://api.aliyundrive.com/adrive/v2/share_link/create",
      data,
      {
        headers: {
          authorization: `${token.token_type} ${token.access_token}`,
        },
      }
    );
  },
} as const;
