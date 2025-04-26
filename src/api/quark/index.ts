import http from "@/http/index";
import { GM_xmlhttpRequest } from "$";
export default {
  // 获取任务ID 第一步
  getTaskId: (data: any) => {
    return new Promise<{ task_id: string }>((resolve, reject) => {
      GM_xmlhttpRequest({
        method: "post",
        url: "https://drive-pc.quark.cn/1/clouddrive/share?pr=ucpro&fr=pc",
        headers: {
          accept: "application/json, text/plain, */*",
          "content-type": "application/json",
        },
        data: JSON.stringify(data),
        onload: ({ response }) => {
          const { data } = JSON.parse(response) || {};
          const task_id = data?.task_id ?? "";
          resolve({
            task_id,
          });
        },
        onerror: (res: any) => {
          reject(res);
        },
      });
    });
  },
  //获取分享链接 第二步
  getShareId: (taskId: string, retry_index: number = 0) => {
    return new Promise<{ share_id: string }>((resolve, reject) => {
      GM_xmlhttpRequest({
        method: "get",
        url: `https://drive-pc.quark.cn/1/clouddrive/task?pr=ucpro&fr=pc&task_id=${taskId}&retry_index=${retry_index}`,
        onload: ({ response }) => {
          const { data } = JSON.parse(response) || {};
          const share_id = data?.share_id ?? "";
          resolve({
            share_id,
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
          url: "https://drive-pc.quark.cn/1/clouddrive/share/password?pr=ucpro&fr=pc",
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
