import { FC } from "react";
import { FileShareStatus } from "@/hooks/useShare/types";

const StatusText: FC<{ status: FileShareStatus; message?: string }> = ({
  status,
  message,
}) => {
  const style = {
    maxWidth: "200px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap" as const,
    display: "inline-block",
  };

  switch (status) {
    case "ready":
      return <span style={style}>准备分享</span>;
    case "sharing":
      return <span style={style}>分享中...</span>;
    case "success":
      return <span style={style}>分享成功</span>;
    case "error":
      return message ? (
        <span style={style}>{message}</span>
      ) : (
        <span style={style}>分享失败</span>
      );
  }
};

export default StatusText;
