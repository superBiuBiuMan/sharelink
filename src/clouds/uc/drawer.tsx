import {
  Box,
  FormControl,
  Select,
  MenuItem,
  IconButton,
  Typography,
  Collapse,
  CircularProgress,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { useState, useImperativeHandle, forwardRef } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ShareDrawerRef, ShareResult } from "../xunlei/types";
import { useBaseCloudInfo } from "@/utils/provider";
import useShare from "@/hooks/useShare/index";
import Drawer from "@/components/Drawer";

const ShareDrawer = forwardRef<ShareDrawerRef>((props, ref) => {
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

    setLoadingShareData,
    setIsSharing,
    setIsPreparingShare,
    setIsPrepared,
    setIsCancelling,
    setFilterStatus,
    setShareResults,
    setConfigExpanded,
  } = useShare<ShareResult>({ cloudName });

  // 抽屉开关状态
  const [open, setOpen] = useState(false);

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

  /**
   * 准备分享功能
   */
  const handlePrepareShare = async () => {
    try {
      setLoadingShareData(true);
      // TODO: 实现获取分享文件列表的逻辑
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsPreparingShare(false);
      setIsPrepared(true);
    } finally {
      setLoadingShareData(false);
    }
  };

  /**
   * 开始分享功能
   */
  const handleShare = async () => {
    setIsCancelling(false);
    setIsSharing(true);

    try {
      // TODO: 实现分享逻辑
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } finally {
      setIsPreparingShare(true);
      setIsSharing(false);
      isCancellingRef.current = false;
    }
  };

  /**
   * 处理取消/关闭抽屉
   */
  const handleCancelClose = () => {
    setOpen(false);
    setIsCancelling(false);
    setIsSharing(false);
    setIsPreparingShare(true);
  };

  /**
   * 取消正在进行的分享操作
   */
  const handleCancelShare = () => {
    setIsCancelling(true);
    isCancellingRef.current = true;
  };

  return (
    <Drawer
      open={open}
      onClose={handleCancelClose}
      headerProps={{
        title: `${cloudName} 批量分享`,
        handleCancelClose,
      }}
      footerProps={{
        handleCancelClose,
        isPreparingShare,
        isSharing,
        isPrepared,
        isCancelling,
        handlePrepareShare,
        handleShare,
        handleCancelShare,
        copyToClipboard: () => {
          /* TODO */
        },
        downloadLinksToTxt: () => {
          /* TODO */
        },
        downloadLinksToExcel: () => {
          /* TODO */
        },
        disabledCopy: isSharing,
        disabledDownloadLinks: isSharing,
        disabledDownloadExcel: isSharing,
      }}
    >
      <Box className="flex flex-col h-full p-3">
        {/* 内容区域 */}
        <Box className="flex-1 flex flex-col overflow-y-auto">
          {/* 分享配置面板 */}
          <Box className="border rounded-md bg-gray-50 mb-3">
            <Box
              className="flex justify-between items-center px-3 py-2 cursor-pointer"
              onClick={() => setConfigExpanded(!configExpanded)}
            >
              <h3 className="font-medium text-base m-0">分享配置</h3>
              <IconButton size="small">
                {configExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>

            <Collapse in={configExpanded}>
              <Box className="p-3 pt-0 border-t">
                <Box className="grid grid-cols-2 gap-3">
                  {/* TODO: 添加分享配置选项 */}
                </Box>
              </Box>
            </Collapse>
          </Box>

          {/* 分享结果区域 */}
          <Box className="mt-3 h-0 flex-1">
            {/* 加载中状态 */}
            {loadingShareData && (
              <Box className="flex justify-center items-center mt-10">
                <CircularProgress size={50} />
              </Box>
            )}

            {/* 分享结果列表 */}
            {shareResults.length > 0 && !loadingShareData && (
              <>
                {/* 结果统计和工具栏 */}
                <Box className="flex justify-between items-center mb-2">
                  <Box>
                    <h3 className="font-medium text-base">分享结果</h3>
                    <Typography variant="caption" color="textSecondary">
                      总计: {shareResults.length}
                    </Typography>
                  </Box>
                  <Box className="flex gap-2">
                    {/* 状态筛选下拉框 */}
                    <FormControl size="small">
                      <Select
                        value={filterStatus}
                        size="small"
                        onChange={(e) =>
                          setFilterStatus(e.target.value as typeof filterStatus)
                        }
                      >
                        <MenuItem value="all">全部</MenuItem>
                        <MenuItem value="ready">准备分享</MenuItem>
                        <MenuItem value="sharing">分享中</MenuItem>
                        <MenuItem value="success">分享成功</MenuItem>
                        <MenuItem value="error">分享失败</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>

                {/* 结果表格 */}
                <TableContainer component={Paper} variant="outlined">
                  <Table size="small" className="text-sm">
                    <TableHead>
                      <TableRow>
                        <TableCell>状态</TableCell>
                        <TableCell>文件名</TableCell>
                        <TableCell>分享链接</TableCell>
                        <TableCell>提取码</TableCell>
                        <TableCell>信息</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>{/* TODO: 添加表格内容 */}</TableBody>
                  </Table>
                </TableContainer>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
});

export default ShareDrawer;
