import http from "@/http/index";
import { GM_xmlhttpRequest } from "$";
export default {
  //获取文件夹大小
  getFolderSize: (id: string) => {
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: "get",
        url: `https://webapi.115.com/category/get?cid=${id}`,
        onload: ({ response }) => {
          const result: any = JSON.parse(response);
          if (!result.error) {
            resolve(result?.size ?? "");
          } else {
            reject(result);
          }
        },
        onerror: (err) => {
          reject(err);
        },
      });
    });
  },
  //获取分享链接
  share: (data: any) => {
    return new Promise<any>((resolve, reject) => {
      GM_xmlhttpRequest({
        method: "post",
        url: "https://webapi.115.com/share/send",
        data: data,
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
        },
        onload: ({ response }) => {
          const result: any = JSON.parse(response);
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        },
        onerror: (err) => {
          reject(err);
        },
      });
    });
  },
  //更新设置内容
  updateSetting: (data: any) => {
    return new Promise<any>((resolve, reject) => {
      GM_xmlhttpRequest({
        method: "post",
        url: "https://webapi.115.com/share/updateshare",
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
        },
        data,
        onload: ({ response }) => {
          const result: any = JSON.parse(response);
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        },
        onerror: (err) => {
          reject(err);
        },
      });
    });
  },
  //更新免登录下载限制
  updateAnonymousDownloadLimit: (data: any) => {
    //更新免登录下载限制
    return new Promise<any>((resolve, reject) => {
      GM_xmlhttpRequest({
        method: "post",
        url: "https://webapi.115.com/share/skip_login_down",
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
        },
        data,
        onload: ({ response }) => {
          const result: any = JSON.parse(response);
          if (!result.error) {
            resolve(result);
          } else {
            reject(result);
          }
        },
        onerror: (res) => {
          reject(res);
        },
      });
    });
  },
} as const;
