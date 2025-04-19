//分享文件状态
export const FileShareStatusEnum = {
  ready: "ready",
  sharing: "sharing",
  success: "success",
  error: "error",
} as const;
export type FileShareStatusEnumTypes =
  (typeof FileShareStatusEnum)[keyof typeof FileShareStatusEnum];
