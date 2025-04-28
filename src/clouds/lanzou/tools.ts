import type { ShareResult } from "./types";
import { FileShareStatusEnum } from "@/hooks/useShare/types";
import { FileTypeEnum, FileTypeMap } from "./types";

/**
 * 获取文件列表
 * @returns 文件列表
 */
export const getFileList = (): {
  folderList: ShareResult[];
  fileList: ShareResult[];
} => {
  const temp = document.querySelector("iframe");
  const iframeWindow = (<HTMLIFrameElement>temp).contentWindow;
  if (!iframeWindow) {
    return { folderList: [], fileList: [] };
  }
  if (iframeWindow) {
    //获取文件夹
    const folderListDOM = iframeWindow?.document.querySelectorAll(
      "#sub_folder_list > .f_tb"
    );
    //获取文件
    const fileListDOM =
      iframeWindow?.document.querySelectorAll("#filelist > .f_tb");
    //文件夹列表数据
    const folderList = Array.from(folderListDOM).map((item) => {
      const id = item.getAttribute("id");
      return {
        id: id?.startsWith("fol") ? id.slice(3) : "", //文件id
        fileName: item.querySelector("[class^='f_name'] [id^=folname]")
          ?.textContent, //文件夹名
        fileType: FileTypeEnum.FOLDER,
        status: FileShareStatusEnum.ready,
      };
    });
    //文件列表数据
    const fileList = Array.from(fileListDOM).map((item) => {
      const id = item.getAttribute("id");
      return {
        id: id?.startsWith("f") ? id.slice(1) : "", //文件id
        fileName: item.querySelector(".f_name .f_name_title")?.textContent, //文件名
        fileSize: item.querySelector(".f_size")?.textContent, //文件大小
        fileTime: item.querySelector(".f_time")?.textContent, //文件时间
        status: FileShareStatusEnum.ready,
        fileType: FileTypeEnum.FILE,
      };
    });

    return {
      folderList: folderList as ShareResult[],
      fileList: fileList as ShareResult[],
    };
  } else {
    return {
      folderList: [],
      fileList: [],
    };
  }
};

/**
 * 格式化分享信息
 * @param list 分享信息列表
 * @returns 分享信息列表
 */
export const formatStringForCopyAndDownload = (list: ShareResult[]) => {
  return list
    .map((item) => `${item.fileName} ${item.shareLink} ${item.extractCode}`)
    .join("\n");
};

/**
 * 转换分享信息为xlsx格式
 * @param list 分享信息列表
 * @returns 分享信息列表
 */
export const transformShareInfoForXlsx = (list: ShareResult[]) => {
  return list.map((item) => ({
    文件类型: FileTypeMap[item.fileType as FileTypeEnum],
    文件名: item.fileName,
    文件大小: item.fileSize,
    文件时间: item.fileTime,
    分享链接: item.shareLink,
    提取码: item.extractCode,
  }));
};
