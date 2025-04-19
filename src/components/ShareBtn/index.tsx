import { FC } from "react";
import { Button } from "@mui/material";

interface ShareBtnsProps {
  isSharing: boolean; // 是否正在分享过程中
  isPreparingShare: boolean; // 是否准备分享->目的是获取文件列表(默认)
  isPrepared: boolean; // 是否已准备好分享 -> 真正开始分享
  isCancelling: boolean; // 是否取消分享
  onPrepareShare: () => void; // 准备分享
  onShare: () => void; // 分享
  onCancelShare: () => void; // 取消分享
}

const ShareBtns: FC<ShareBtnsProps> = (props) => {
  const {
    isPreparingShare,
    isSharing,
    isPrepared,
    isCancelling,
    onPrepareShare,
    onShare,
    onCancelShare,
  } = props;

  if (isPreparingShare) {
    return (
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={onPrepareShare}
      >
        准备分享
      </Button>
    );
  }

  if (isCancelling) {
    return (
      <Button variant="contained" color="warning" size="small" disabled>
        取消分享中...
      </Button>
    );
  }

  if (isSharing) {
    return (
      <Button
        variant="contained"
        color="error"
        size="small"
        onClick={onCancelShare}
      >
        取消分享
      </Button>
    );
  }

  if (isPrepared) {
    return (
      <Button
        variant="contained"
        color="success"
        size="small"
        onClick={onShare}
      >
        开始分享
      </Button>
    );
  }

  return (
    <Button
      variant="contained"
      color="primary"
      size="small"
      onClick={onPrepareShare}
    >
      准备分享111
    </Button>
  );
};

export default ShareBtns;
