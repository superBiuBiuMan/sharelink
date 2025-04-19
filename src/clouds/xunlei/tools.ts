import { findLocalStorageKeysWithPrefix } from "@/tools/common";
export const getShareInfo = () => {
  const tempDOM: any = document.querySelector(".pan-web");
  const selectedRowKeys: string[] = tempDOM.__vue__.$parent.fileSelected ?? []; //只是id
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
};
