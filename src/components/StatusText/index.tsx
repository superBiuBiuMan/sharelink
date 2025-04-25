import { FC } from "react";
import { FileShareStatus } from "@/hooks/useShare/types";

const StatusText: FC<{ status: FileShareStatus; message?: string }> = ({
  status,
  message,
}) => {
  switch (status) {
    case "ready":
      return <span>准备分享</span>;
    case "sharing":
      return <span>分享中...</span>;
    case "success":
      return <span>分享成功</span>;
    case "error":
      return message || <span>分享失败</span>;
  }
};

export default StatusText;
