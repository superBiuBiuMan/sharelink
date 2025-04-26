import http from "@/http/index";
export default {
  //获取分享链接
  share: (paramsData: any) => {
    return http.Get(
      window.location.origin + "/api/open/share/createShareLink.action",
      {
        params: {
          ...paramsData,
        },
        headers: {
          accept: "application/json;charset=UTF-8",
        },
      }
    );
  },
} as const;
