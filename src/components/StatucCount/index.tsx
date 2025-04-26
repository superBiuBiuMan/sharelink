import { FC } from "react";
import { Typography } from "@mui/material";
import { FileShareStatus } from "@/hooks/useShare/types";
import { useCallback } from "react";
const StatusCount: FC<{
  shareResults: any[];
  selectedItems: any[];
}> = (props) => {
  const { shareResults, selectedItems } = props;
  // 获取特定状态的结果数量
  const getStatusCount = useCallback(
    (status: FileShareStatus) => {
      return shareResults.filter((r) => r.status === status).length;
    },
    [shareResults]
  );
  return (
    <>
      <Typography variant="caption" color="textSecondary">
        总计: {shareResults.length} | 准备: {getStatusCount("ready")} | 分享中:{" "}
        {getStatusCount("sharing")} | 成功: {getStatusCount("success")} | 失败:{" "}
        {getStatusCount("error")} | 已选: {selectedItems.length}
      </Typography>
    </>
  );
};

export default StatusCount;
