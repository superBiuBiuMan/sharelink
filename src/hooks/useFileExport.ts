import { useNotifications } from "@toolpad/core/useNotifications";
import {
  copy,
  downloadTxt,
  getTimestamp,
  exportXlsxFile,
} from "@/utils/common";

/**
 * 文件导出管理Hook
 * 管理分享结果的复制、下载和导出功能
 */
export function useFileExport(cloudName: string) {
  const notifications = useNotifications();

  /**
   * 复制分享链接到剪贴板
   * 格式：文件名: 分享链接 提取码: 提取码
   */
  const handleCopy = (text: any) => {
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
  const handleDownloadLinks = (text: any) => {
    downloadTxt(text, `${cloudName}-批量分享链接-${getTimestamp()}.txt`);
  };

  /**
   * 导出分享链接为Excel文件
   */
  const handleDownloadExcel = (text: any) => {
    exportXlsxFile(`${cloudName}-批量分享链接-${getTimestamp()}.xlsx`, text);
  };

  /**
   * 复制单个链接到剪贴板
   */
  const copyLink = (link: any) => {
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
    handleCopy,
    handleDownloadLinks,
    handleDownloadExcel,
    copyLink,
  };
}
