import { forwardRef } from "react";
import type { ShareDrawerRef, ShareResult } from "./types";
import { useBaseCloudInfo } from "@/utils/provider";
import useShare from "@/hooks/useShare/index";
import defaultGlobalSetting from "@/setting";
import { useState, useImperativeHandle } from "react";
import { ExpireTimeEnum } from "./types";
import Drawer from "@/components/Drawer";
const ShareDrawer = forwardRef<ShareDrawerRef>((props, ref) => {
  /**
   * 向父组件暴露打开抽屉的方法
   */
  useImperativeHandle(ref, () => {
    return {
      open() {
        setOpen(true);
      },
    };
  });
  // 获取云盘名称
  const { name: cloudName } = useBaseCloudInfo();
  const {
    notifications,
    loadingShareData,
    isSharing,
    isPreparingShare,
    isPrepared,
    isCancelling,
    isCancellingRef,
    filterStatus,
    shareResults,
    configExpanded,
    open,

    setLoadingShareData,
    setIsSharing,
    setIsPreparingShare,
    setIsPrepared,
    setIsCancelling,
    setFilterStatus,
    setShareResults,
    setConfigExpanded,
    setOpen,
    handleCopy,
    handleDownloadLinks,
    handleDownloadExcel,
    copyLink,
    resetShareStatus,
    handleDefaultCloseDrawerCallback,
  } = useShare<ShareResult>({ cloudName });
  // 分享配置状态
  const [shareConfig, setShareConfig] = useState<any>({
    shareDelay: defaultGlobalSetting.defaultShareDelay, // 分享延迟
    shareTheme: "", // 分享主题
    expireTime: ExpireTimeEnum.forever, // 有效期
    enableCustomCode: false, // 是否启用自定义提取码
    customCode: "", // 自定义提取码
  });
  return <Drawer open={open}>您好</Drawer>;
});

export default ShareDrawer;
