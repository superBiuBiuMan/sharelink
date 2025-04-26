import http from "@/http/index";
export default {
  share: (data: any, auth: string) => {
    return http.Post(
      `${window.location.origin}/orchestration/personalCloud-rebuild/outlink/v1.0/getOutLink`,
      data,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: auth,
        },
      }
    );
  },
} as const;
