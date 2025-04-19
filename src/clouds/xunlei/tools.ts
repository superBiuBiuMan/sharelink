import { findLocalStorageKeysWithPrefix } from "@/tools/common";
import type { ShareResult } from "./types";
import { bytesToSize } from "@/tools/size";
import { FileShareStatusEnum } from "@/enum/index";
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
