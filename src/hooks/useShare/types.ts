export type FileShareStatus = "all" | "ready" | "sharing" | "success" | "error";
//分享文件状态
export const FileShareStatusEnum = {
  all: "all",
  ready: "ready",
  sharing: "sharing",
  success: "success",
  error: "error",
} as const;
export interface BaseShareResult {
  status: FileShareStatus;
}
