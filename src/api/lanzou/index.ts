import http from "@/http/index";
export default {
  //获取分享链接
  share: (data: any) => {
    return http.Post(
      `${window.location.origin}/doupload.php`,
      new URLSearchParams(data),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  },
} as const;
