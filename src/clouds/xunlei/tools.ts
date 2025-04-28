import { findLocalStorageKeysWithPrefix } from "@/utils/common";
import type { ShareResult } from "./types";
import { bytesToSize } from "@/utils/size";
import { FileShareStatusEnum } from "@/hooks/useShare/types";

import { extractOptions, expireTimeOptions } from "./options";
/**
 * 获取用户分享信息
 * @returns
 */
export const getShareInfo = () => {
  try {
    const tempDOM: any = document.querySelector(".pan-web");
    const selectedRowKeys: string[] =
      tempDOM.__vue__.$parent.fileSelected ?? []; //只是id
    const allInfo: any = tempDOM.__vue__.$store.state.drive.all ?? {};
    const selectRowInfos = selectedRowKeys.map((id) => allInfo[id]) ?? [];
    const temp1: any = findLocalStorageKeysWithPrefix("captcha_") ?? {};
    const temp2: any = findLocalStorageKeysWithPrefix("credentials_") ?? {};
    let temp3 = "";
    for (const key in localStorage) {
      if (key.startsWith("captcha_")) {
        temp3 = key.slice(key.indexOf("_") + 1);
      }
    }
    return {
      "x-captcha-token": temp1.token,
      authorization: `${temp2.token_type} ` + temp2.access_token,
      "x-device-id": localStorage.getItem("deviceid")?.slice(6, 38),
      "x-client-id": temp3,
      selectedRowKeys, //文件id
      selectRowInfos, //文件信息
    };
  } catch {
    return {};
  }
};
/**
 * 转换文件信息
 * @param list 文件信息
 * @returns 文件信息
 */
export const transformFileInfo = (list: any[]): ShareResult[] => {
  if (!list || !list?.length) return [];
  return list?.map((item) => {
    return {
      id: item?.id,
      fileName: item?.name,
      status: FileShareStatusEnum.ready,
      fileSize: bytesToSize(item?.size) ?? "NA",
    };
  });
};
/**
 * 转换分享信息给xlsx下载
 * @param list 分享信息
 * @returns 分享信息
 */
export const transformShareInfoForXlsx = (list: ShareResult[]) => {
  if (!list || !list?.length) return [];
  return list?.map((item) => {
    // 查找对应的有效期标签
    const expireTimeLabel =
      expireTimeOptions.find((option) => option.value === item?.expireTime)
        ?.label ||
      item?.expireTime ||
      "";

    // 查找对应的提取次数标签
    const restoreLimitLabel =
      extractOptions.find((option) => option.value === item?.restoreLimit)
        ?.label ||
      item?.restoreLimit ||
      "";

    return {
      文件名称: item?.fileName ?? "",
      分享链接: item?.shareLink ?? "",
      提取码: item?.extractCode ?? "",
      有效期: expireTimeLabel,
      有效次数: restoreLimitLabel,
    };
  });
};

//格式化字符串提供给复制和下载
export const formatStringForCopyAndDownload = (list: ShareResult[]) => {
  if (!list || !list?.length) return "";
  return list
    ?.map((item) => {
      return `${item?.fileName} ${item?.shareLink} ${item?.extractCode}`;
    })
    .join("\n");
};
