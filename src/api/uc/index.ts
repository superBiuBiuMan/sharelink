import http from "@/http/index";
import type { AlovaMethodCreateConfig, AlovaGenerics } from "alova";
import { GM_xmlhttpRequest } from "$";
export default {
  // 获取任务ID 第一步
  getTaskId: (data: any) => {
    return new Promise<{ task_id: string; share_id: string }>(
      (resolve, reject) => {
        GM_xmlhttpRequest({
          method: "post",
          url: "https://pc-api.uc.cn/1/clouddrive/share?pr=UCBrowser&fr=pc",
          headers: {
            accept: "application/json, text/plain, */*",
          },
          data: JSON.stringify(data),
          onload: ({ response }) => {
            const { data = {} } = JSON.parse(response) || {};
            resolve({
              task_id: data?.task_id
                ? data?.task_id
                : data?.task_resp?.data?.task_id,
              share_id: data?.task_resp?.data?.share_id ?? "",
            });
          },
          onerror: (res: any) => {
            reject(res);
          },
        });
      }
    );
  },
  //获取分享链接 第二步
  getShareId: (taskId: string, time: number = 0) => {
    return new Promise<{ share_id: string }>((resolve, reject) => {
      GM_xmlhttpRequest({
        method: "get",
        url: `https://pc-api.uc.cn/1/clouddrive/task?pr=UCBrowser&fr=pc&task_id=${taskId}&retry_index=${time}`,
        headers: {
          accept: "application/json, text/plain, */*",
        },
        onload: ({ response }) => {
          const { data = {} } = JSON.parse(response) || {};
          resolve({
            share_id: data?.share_id ?? "",
          });
        },
        onerror: (res: any) => {
          reject(res);
        },
      });
    });
  },
  // 获取分享信息 第三步
  getShareInfo: (share_id: string) => {
    return new Promise<{ share_url: string; passcode: string }>(
      (resolve, reject) => {
        GM_xmlhttpRequest({
          method: "post",
          url: "https://pc-api.uc.cn/1/clouddrive/share/password?pr=UCBrowser&fr=pc",
          data: JSON.stringify({
            share_id,
          }),
          onload: ({ response }) => {
            const { data } = JSON.parse(response) || {};
            const { share_url = "", passcode = "" } = data || {};
            resolve({
              share_url,
              passcode,
            });
          },
          onerror: (res) => {
            reject(res);
          },
        });
      }
    );
  },
} as const;
