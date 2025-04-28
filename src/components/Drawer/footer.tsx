import React from "react";
import { Box, Divider, Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArticleIcon from "@mui/icons-material/Article";
import CancelIcon from "@mui/icons-material/Cancel";
import ShareBtn from "../ShareBtn";
import type { FooterProps } from "./types";
const Footer: React.FC<FooterProps> = (props) => {
  const {
    handleCancelClose, // 取消关闭
    isPreparingShare, // 准备分享
    isSharing, // 分享
    isPrepared, // 已准备
    isCancelling, // 取消分享
    handlePrepareShare, // 准备分享
    handleShare, // 分享
    handleCancelShare, // 取消分享
    copyToClipboard, // 复制到剪贴板
    downloadLinksToTxt, // 下载TXT
    downloadLinksToExcel, // 导出Excel
    disabledCopy, // 复制按钮是否禁用
    disabledDownloadLinks, // 下载TXT按钮是否禁用
    disabledDownloadExcel, // 导出Excel按钮是否禁用
    extraButtons,
  } = props;
  return (
    <>
      {/* 底部按钮区域 */}
      <Box className="mt-auto pt-3">
        <Divider className="mb-3" />
        <Box className="flex justify-center items-center gap-2 flex-wrap">
          {/* 取消按钮 */}
          <Button
            variant="outlined"
            color="error"
            startIcon={<CancelIcon />}
            onClick={handleCancelClose}
            size="small"
          >
            取消
          </Button>
          {/* 分享控制按钮（准备/开始/取消分享） */}
          <ShareBtn
            isPreparingShare={isPreparingShare}
            isSharing={isSharing}
            isPrepared={isPrepared}
            isCancelling={isCancelling}
            onPrepareShare={handlePrepareShare}
            onShare={handleShare}
            onCancelShare={handleCancelShare}
          />
          {/* 复制到剪贴板按钮 */}
          <Button
            variant="outlined"
            startIcon={<ContentCopyIcon />}
            onClick={copyToClipboard}
            disabled={disabledCopy}
            size="small"
          >
            复制
          </Button>
          {/* 下载TXT按钮 */}
          <Button
            variant="outlined"
            startIcon={<FileDownloadIcon />}
            onClick={downloadLinksToTxt}
            disabled={disabledDownloadLinks}
            size="small"
          >
            下载
          </Button>
          {/* 导出Excel按钮 */}
          <Button
            variant="outlined"
            startIcon={<ArticleIcon />}
            onClick={downloadLinksToExcel}
            disabled={disabledDownloadExcel}
            size="small"
          >
            导出
          </Button>
          {/* 额外的自定义按钮 */}
          {extraButtons}
        </Box>
      </Box>
    </>
  );
};

export default Footer;
