import { useState, useRef } from "react";
import { useNotifications } from "@toolpad/core/useNotifications";
import {
  copy,
  downloadTxt,
  getTimestamp,
  exportXlsxFile,
} from "@/utils/common";
import type { FileShareStatus, BaseShareResult } from "./types";
import { FileShareStatusEnum } from "./types";
function useShare<T extends BaseShareResult>({
  cloudName,
}: {
  cloudName: string;
}) {
  const notifications = useNotifications();
  // 分享配置面板是否展开
  const [configExpanded, setConfigExpanded] = useState(true);
  // 是否正在加载分享数据
  const [loadingShareData, setLoadingShareData] = useState(false);
  // 是否正在分享过程中
  const [isSharing, setIsSharing] = useState(false);
  // 是否准备分享（获取文件列表阶段）
  const [isPreparingShare, setIsPreparingShare] = useState(true);
  // 是否已准备好分享（文件列表已获取完成）
  const [isPrepared, setIsPrepared] = useState(false);
  // 是否正在取消分享（用于UI状态更新）
  const [isCancelling, setIsCancelling] = useState(false);
  // 状态筛选器，用于筛选显示特定状态的分享结果
  const [filterStatus, setFilterStatus] = useState<FileShareStatus>(
    FileShareStatusEnum.all
  );
  // 分享结果列表
  const [shareResults, setShareResults] = useState<T[]>([]);
  // 是否正在取消分享的引用值（避免状态更新异步问题）
  const isCancellingRef = useRef(false);
  /**
   * 复制分享链接到剪贴板
   * 格式：文件名: 分享链接 提取码: 提取码
   */
  const handleCopy = (text: string) => {
    copy(text)
      .then(() => {
        notifications.show("复制成功", {
          autoHideDuration: 1500,
          severity: "success",
        });
      })
      .catch((error: any) => {
        notifications.show("复制失败" + error, {
          autoHideDuration: 1500,
          severity: "error",
        });
      });
  };

  /**
   * 下载分享链接为txt文件
   * 格式：文件名, 分享链接, 提取码
   */
  const handleDownloadLinks = (text: string) => {
    downloadTxt(text, `${cloudName}-批量分享链接-${getTimestamp()}.txt`);
  };

  /**
   * 导出分享链接为Excel文件
   */
  const handleDownloadExcel = (text: string) => {
    exportXlsxFile(`${cloudName}-批量分享链接-${getTimestamp()}.xlsx`, text);
  };

  /**
   * 复制单个链接到剪贴板
   */
  const copyLink = (link: string) => {
    copy(link)
      .then(() => {
        notifications.show("链接已复制", {
          autoHideDuration: 1500,
          severity: "success",
        });
      })
      .catch((error: any) => {
        notifications.show("复制失败" + error, {
          autoHideDuration: 1500,
          severity: "error",
        });
      });
  };

  return {
    loadingShareData,
    isSharing,
    isPreparingShare,
    isPrepared,
    isCancelling,
    isCancellingRef,
    filterStatus,
    shareResults,
    configExpanded,

    setLoadingShareData,
    setIsSharing,
    setIsPreparingShare,
    setIsPrepared,
    setIsCancelling,
    setFilterStatus,
    setShareResults,
    setConfigExpanded,

    handleCopy,
    handleDownloadLinks,
    handleDownloadExcel,
    copyLink,

    notifications,
  };
}

export default useShare;
