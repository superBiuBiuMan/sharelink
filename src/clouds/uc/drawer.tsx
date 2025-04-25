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
  TextField,
  Switch,
  InputLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useState, useImperativeHandle, forwardRef } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import type { ShareDrawerRef, ShareResult } from "./types";
import { useBaseCloudInfo } from "@/utils/provider";
import useShare from "@/hooks/useShare/index";
import Drawer from "@/components/Drawer";
import { extractOptions, expireOptions } from "./options";
import { ExtractEnum, ExpireTimeEnum } from "./types";
import defaultGlobalSetting from "@/setting";
import { transformShareInfo } from "./tools";
import { findNodeReact } from "@/utils/nodeFind";
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

  // 分享配置状态
  const [shareConfig, setShareConfig] = useState<any>({
    shareDelay: defaultGlobalSetting.defaultShareDelay, // 分享延迟
    shareTheme: "", // 分享主题
    extractLimit: ExtractEnum.forever, // 下载次数
    expireTime: ExpireTimeEnum.forever, // 有效期
    enableCustomCode: false, // 是否启用自定义提取码
    customCode: "", // 自定义提取码
  });
  /**
   * 根据筛选条件过滤分享结果
   */
  const filteredResults = shareResults.filter((result) => {
    if (filterStatus === "all") return true;
    return result.status === filterStatus;
  });
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
      const result = findNodeReact(".file-list", ["selectedRowKeys", "list"]);
      setShareResults(transformShareInfo(result.list));
      setIsPreparingShare(false);
      setIsPrepared(true);
    } catch (e) {
      notifications.show("获取分享文件列表失败" + e, {
        autoHideDuration: 1500,
        severity: "error",
      });
      console.error(e);
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
                  {/* 分享延迟 */}
                  <FormControl fullWidth size="small">
                    <TextField
                      label="分享延迟"
                      size="small"
                      type="number"
                      value={shareConfig.shareDelay}
                      onChange={(e) =>
                        setShareConfig((prev: any) => ({
                          ...prev,
                          shareDelay: Number(e.target.value),
                        }))
                      }
                      slotProps={{
                        htmlInput: {
                          min: 1,
                          step: 100,
                        },
                      }}
                    />
                  </FormControl>

                  {/* 分享主题 */}
                  <FormControl fullWidth size="small">
                    <TextField
                      size="small"
                      label="分享主题"
                      value={shareConfig.shareTheme}
                      onChange={(e) =>
                        setShareConfig((prev: any) => ({
                          ...prev,
                          shareTheme: e.target.value,
                        }))
                      }
                      placeholder="请输入分享主题"
                      slotProps={{
                        htmlInput: {
                          maxLength: 30,
                        },
                      }}
                    />
                  </FormControl>

                  {/* 下载次数 */}
                  <FormControl fullWidth size="small">
                    <InputLabel>下载次数</InputLabel>
                    <Select
                      label="下载次数"
                      value={shareConfig.extractLimit}
                      onChange={(e) =>
                        setShareConfig((prev: any) => ({
                          ...prev,
                          extractLimit: Number(e.target.value),
                        }))
                      }
                      size="small"
                    >
                      {extractOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* 有效期 */}
                  <FormControl fullWidth size="small">
                    <InputLabel>有效期</InputLabel>
                    <Select
                      label="有效期"
                      value={shareConfig.expireTime}
                      onChange={(e) =>
                        setShareConfig((prev: any) => ({
                          ...prev,
                          expireTime: Number(e.target.value),
                        }))
                      }
                      size="small"
                    >
                      {expireOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* 开启提取码开关 */}
                  <FormControl fullWidth>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={shareConfig.enableCustomCode}
                          onChange={(e) =>
                            setShareConfig((prev: any) => ({
                              ...prev,
                              enableCustomCode: e.target.checked,
                            }))
                          }
                          size="small"
                        />
                      }
                      label="开启提取码"
                    />
                  </FormControl>

                  {/* 开启提取码输入框 */}
                  {shareConfig.enableCustomCode && (
                    <FormControl fullWidth>
                      <TextField
                        size="small"
                        value={shareConfig.customCode}
                        onChange={(e) =>
                          setShareConfig((prev: any) => ({
                            ...prev,
                            customCode: e.target.value,
                          }))
                        }
                        placeholder="请输入4位提取码(只能包含大小写英文+数字)"
                        slotProps={{
                          htmlInput: {
                            maxLength: 4,
                          },
                        }}
                      />
                    </FormControl>
                  )}
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
                    <TableBody>
                      {filteredResults.map((result) => (
                        <TableRow key={result.id}>
                          {/* 固定的多选框单元格 */}
                          <TableCell
                            padding="checkbox"
                            sx={{
                              position: "sticky", // 使用粘性定位
                              left: 0, // 固定在左侧
                              zIndex: 2, // 确保在其他单元格之上
                              backgroundColor: "white", // 数据行背景色
                              borderRight: "1px solid rgba(224, 224, 224, 1)", // 右侧边框
                            }}
                          >
                            <Checkbox
                              size="small"
                              checked={selectedItems.includes(result.id)}
                              onChange={() => handleItemSelect(result.id)}
                              disabled={isSharing}
                            />
                          </TableCell>
                          {/* 状态图标 */}
                          <TableCell align="center">
                            {getStatusIcon(result.status)}
                          </TableCell>
                          {/* 文件名（处理溢出） */}
                          <TableCell
                            title={result.fileName} // 悬停提示完整名称
                          >
                            {result.fileName}
                          </TableCell>
                          {/* 分享链接（处理溢出） */}
                          <TableCell>
                            {result.shareLink || "-"}
                            {result.shareLink && (
                              <IconButton
                                size="small"
                                onClick={() => copyLink(result.shareLink ?? "")}
                              >
                                <ContentCopyIcon fontSize="small" />
                              </IconButton>
                            )}
                          </TableCell>
                          {/* 提取码 */}
                          <TableCell>{result.extractCode || "-"}</TableCell>
                          {/* 状态信息 */}
                          <TableCell
                            sx={{
                              maxWidth: "250px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {getStatusText(result.status, result.message)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
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
