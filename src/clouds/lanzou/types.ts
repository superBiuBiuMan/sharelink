import type { BaseShareResult, FileShareStatus } from "@/hooks/useShare/types";

export interface ShareDrawerRef {
  open(): void;
}

export enum FileTypeEnum {
  FOLDER = "folder", //文件夹
  FILE = "file", //文件
}
export const FileTypeMap = {
  [FileTypeEnum.FOLDER]: "文件夹",
  [FileTypeEnum.FILE]: "文件",
};
export enum TaskEnum {
  file = 18, //获取分享链接(文件夹)
  share = 22, //获取分享链接(普通文件)
  setCodeFile = 23, //设置(取消)文件提取码
  setCodeFolder = 16, //设置(取消)文件夹提取码
  reqFolderList = 47, //请求获取文件夹列表(蓝奏云没对文件夹分页,一次性就返回了)
  reqFileList = 5, //请求获取文件列表(需要带上pg属性);
}

export interface ShareResult extends BaseShareResult {
  id: string; //文件id
  status: FileShareStatus; //状态
  fileName?: string; //文件名
  shareLink?: string; //分享链接
  extractCode?: string; //提取码
  fileSize?: string; //文件大小
  fileTime?: string; //文件时间
  message?: string; //错误信息
  fileType?: FileTypeEnum; //文件类型
}
