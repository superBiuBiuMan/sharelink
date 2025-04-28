export interface FooterProps {
  handleCancelClose: () => void; //关闭抽屉
  isPreparingShare: boolean; //准备分享
  isSharing: boolean; //分享
  isPrepared: boolean; //已准备
  isCancelling: boolean; //取消分享
  handlePrepareShare: () => void; //准备分享
  handleShare: () => void; //分享
  handleCancelShare: () => void; //取消分享
  copyToClipboard: () => void; //复制到剪贴板
  downloadLinksToTxt: () => void; //下载TXT
  downloadLinksToExcel: () => void; //导出Excel
  disabledCopy: boolean; //复制按钮是否禁用
  disabledDownloadLinks: boolean; //下载TXT按钮是否禁用
  disabledDownloadExcel: boolean; //导出Excel按钮是否禁用
  extraButtons?: React.ReactNode; //额外的自定义按钮
}

export interface HeaderProps {
  title: string; //标题
  handleCancelClose: () => void; //关闭抽屉
}
