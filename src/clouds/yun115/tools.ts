import type { ShareResult } from "./types";
import { ExpireTimeEnumMap } from "./types";
import { FileShareStatusEnum } from "@/hooks/useShare/types";
import { GM_xmlhttpRequest, unsafeWindow } from "$";
import { bytesToSize } from "@/utils/size";
import { FileTypeEnum } from "./types";
import { shareLogicMap } from "@/api";
import { cloudEnum } from "@/utils/info";
/**
 * 获取分享信息
 * @returns 分享信息列表
 */
export const getShareInfo = (): Promise<ShareResult[]> => {
  const iframe = document.querySelector("iframe"); //获取iframe
  const iframeWindow =
    (<HTMLIFrameElement>iframe).contentWindow ?? unsafeWindow;
  //获取选中DOM
  const selectDOM = iframeWindow.document.querySelectorAll(
    "div.list-contents > ul li.selected"
  );
  if (selectDOM.length === 0) {
    return Promise.resolve([]);
  }
  const result = Array.from(selectDOM).map(async (itemDOM) => {
    //获取文件类型
    const fileType =
      itemDOM.getAttribute("file_type") === "0"
        ? FileTypeEnum.folder
        : FileTypeEnum.file;
    //获取文件id
    const id =
      fileType === FileTypeEnum.folder
        ? itemDOM.getAttribute("cate_id")
        : itemDOM.getAttribute("file_id"); //文件id
    let fileSize: any = "";
    if (fileType === FileTypeEnum.folder) {
      //获取文件夹大小
      fileSize = await shareLogicMap[cloudEnum.yun115].getFolderSize(
        id as string
      );
      console.log(fileSize, "文件夹大小");
    } else {
      //获取文件大小
      fileSize = itemDOM.getAttribute("file_size") as string;
      fileSize = fileSize ? bytesToSize(Number(fileSize)) : "";
    }
    return {
      id,
      status: FileShareStatusEnum.ready, //分享状态
      fileType, //文件类型
      fileSize,
      fileName: itemDOM.getAttribute("title"),
    } as ShareResult;
  });
  return Promise.all(result);
};

/**
 * 格式化分享信息
 * @param list 分享信息列表
 * @returns 分享信息列表
 */
export const formatStringForCopyAndDownload = (list: ShareResult[]) => {
  return list
    .map((item) => `${item.fileName} - ${item.shareLink} ${item.extractCode}`)
    .join("\n");
};

/**
 * 转换分享信息为xlsx格式
 * @param list 分享信息列表
 * @returns 分享信息列表
 */
export const transformShareInfoForXlsx = (list: ShareResult[]) => {
  return list.map((item) => ({
    文件名: item.fileName,
    文件大小: item.fileSize,
    分享链接: item.shareLink,
    提取码: item.extractCode,
    有效期:
      ExpireTimeEnumMap[item.expireTime as keyof typeof ExpireTimeEnumMap],
  }));
};
//获取分享第一次信息
export const getShareFirstInfo = (currentShareItem: ShareResult) => {
  const formData = new FormData();
  //@ts-ignore
  const { user_id } = unsafeWindow || {};
  formData.append("user_id", user_id); //用户id
  const file_ids = currentShareItem.id + "";
  formData.append("file_ids", file_ids); //文件id
  formData.append("ignore_warn", "1");
  formData.append("is_asc", "0");
  formData.append("order", "user_ptime");
  return {
    formData,
    info: {
      user_id,
      file_ids,
      ignore_warn: "1",
      is_asc: "0",
      order: "user_ptime",
    },
  };
};
//获取分享第二次信息
export const getShareSecondInfo = (resultOne: any, shareConfig: any) => {
  const formDataUpdate = new FormData();
  const info: any = {
    auto_fill_recvcode: shareConfig.autoFillAccessCode, //分享链接自动填充访问码-传入0则关闭,1则开启
    receive_user_limit: shareConfig.acceptLimit ? shareConfig.acceptLimit : "", //接收次数-不传则不限制,传入数字则限制
    skip_login: shareConfig.allowAnonymousDownload, //允许免登录下载 传入0关闭 1开启,
    skip_login_down_flow_limit: shareConfig.anonymousDownloadTraffic
      ? shareConfig.anonymousDownloadTraffic * 1024
      : "", //免登录下载限制 - 大小  * 1024 B 不传则不限制
    share_duration: shareConfig.expireTime,
  };
  const share_code = resultOne.data.share_code as string;
  formDataUpdate.append("share_code", share_code);
  formDataUpdate.append("auto_fill_recvcode", info.auto_fill_recvcode);
  formDataUpdate.append("receive_user_limit", info.receive_user_limit);
  formDataUpdate.append("share_duration", info.share_duration);
  //密码存在
  if (shareConfig.customCode && shareConfig.customCode !== "") {
    formDataUpdate.append("receive_code", shareConfig.customCode);
    formDataUpdate.append("is_custom_code", "1");
  }
  return {
    formData: formDataUpdate,
    info: {
      ...info,
      share_code,
      receive_code: shareConfig.customCode,
    },
  };
};

//获取分享第三次信息(更新免登录下载限制)
export const getShareThirdInfo = (info: any, resultOne: any) => {
  //免登录设置
  const skipLoginForm = new FormData();
  skipLoginForm.append("share_code", resultOne.data.share_code as string);
  if (info.skip_login * 1 === 1) {
    //开启免登录下载
    skipLoginForm.append("skip_login", info.skip_login);
    skipLoginForm.append(
      "skip_login_down_flow_limit",
      info.skip_login_down_flow_limit
    );
  } else {
    //关闭免登录下载
    skipLoginForm.append("skip_login", info.skip_login);
  }
  return {
    formData: skipLoginForm,
  };
};
