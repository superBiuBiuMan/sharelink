import {
  Box,
  TextField,
  FormControl,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Typography,
  Collapse,
  CircularProgress,
  Checkbox,
} from "@mui/material";
import { cloudEnum } from "@/utils/info";
import { shareLogicMap } from "@/api";
import { useState, useImperativeHandle, forwardRef } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import StatusIcon from "@/components/StatucIcon";
import StatusText from "@/components/StatusText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { extractOptions, expireTimeOptions } from "./options";
import { ShareDrawerRef, ShareResult, ShareConfig } from "./types";
import sleep from "@/utils/sleep";
import { ExtractEnum, ExpireTimeEnum } from "./types";
import type { ShareResponse } from "./types";
import {
  transformShareInfoForXlsx,
  formatStringForCopyAndDownload,
} from "./tools";
import { useBaseCloudInfo } from "@/utils/provider";
import { getShareInfo, transformFileInfo } from "./tools";
import DeleteIcon from "@mui/icons-material/Delete";
import useShare from "@/hooks/useShare/index";
import type { FileShareStatus } from "@/hooks/useShare/types";
import Drawer from "@/components/Drawer";
import defaultGlobalSetting from "@/setting";
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
  } = useShare<ShareResult>({ cloudName });
  // 分享配置信息
  const [shareConfig, setShareConfig] = useState<ShareConfig>({
    expireTime: ExpireTimeEnum.forever, // 提取期限，默认永久
    extractLimit: ExtractEnum.forever, // 提取次数，默认不限制
    shareDelay: defaultGlobalSetting.defaultShareDelay, // 分享间隔延迟，单位毫秒
    allowFastAccess: true, // 是否允许快速访问（链接中包含提取码）
  });
  // 已选中项的ID列表
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
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
   * 获取需要分享的文件列表并转换为内部数据结构
   */
  const handlePrepareShare = async () => {
    try {
      setLoadingShareData(true);
      const { selectRowInfos } = getShareInfo();
      // 模拟获取文件信息的过程 todo 删除
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShareResults(transformFileInfo(selectRowInfos ?? []));
      setIsPreparingShare(false);
      setIsPrepared(true);
    } finally {
      setLoadingShareData(false);
    }
  };

  /**
   * 开始分享功能
   * 逐个分享文件并更新分享状态
   */
  const handleShare = async () => {
    setIsCancelling(false);
    setIsSharing(true);
    // 获取API请求所需的认证信息
    const {
      "x-captcha-token": xCaptchaToken,
      authorization,
      "x-device-id": xDeviceId,
      "x-client-id": xClientId,
    } = getShareInfo();

    // 逐个分享文件
    for (let i = 0; i < shareResults.length; i++) {
      // 检查是否取消分享
      if (isCancellingRef.current) {
        setIsSharing(false);
        break;
      }
      try {
        // 更新为"分享中"状态
        setShareResults((prev) => {
          const updated = [...prev];
          updated[i] = { ...updated[i], status: "sharing" };
          return updated;
        });

        // 调用分享API
        let res: ShareResponse = (await shareLogicMap[cloudEnum.xunlei].share(
          {
            expiration_days: shareConfig.expireTime + "", // 过期时间
            file_ids: [shareResults[i].id], // 文件id
            params: {
              subscribe_push: "false", // 是否订阅推送
              withPassCodeInLink: shareConfig.allowFastAccess
                ? "true"
                : "false", // 是否在链接中包含提取码
            },
            restore_limit: shareConfig.extractLimit + "", // 提取次数
            share_to: "copy", // 分享方式
            title: "云盘资源分享", // 分享标题
          },
          {
            headers: {
              "x-captcha-token": xCaptchaToken,
              authorization,
              "x-device-id": xDeviceId,
              "x-client-id": xClientId,
            },
          }
        )) as ShareResponse;

        // 补充响应信息
        res = {
          ...(res ?? {}),
          restoreLimit: shareConfig.extractLimit,
          expireTime: shareConfig.expireTime,
        };

        // 更新为最终状态（成功或失败）
        setShareResults((prev) => {
          const updated = [...prev];
          if (res?.share_error_files?.length > 0) {
            // 分享失败
            updated[i] = {
              ...updated[i],
              status: "error",
              message: "分享失败",
            };
          } else {
            // 分享成功
            updated[i] = {
              ...updated[i],
              restoreLimit: res.restoreLimit,
              expireTime: res.expireTime,
              status: "success",
              shareLink: res.share_url,
              extractCode: res.pass_code,
            };
          }
          return updated;
        });
      } catch (error) {
        console.log(error, "分享失败");
        // 更新为最终状态（分享失败）
        setShareResults((prev) => {
          const updated = [...prev];
          updated[i] = {
            ...updated[i],
            status: "error",
            message: "分享失败",
          };
          return updated;
        });
      } finally {
        // 分享间隔延迟
        await sleep(shareConfig.shareDelay);
      }
    }

    // 重置状态为准备分享状态，允许重新开始分享流程
    setIsPreparingShare(true);
    setIsSharing(false);
    isCancellingRef.current = false;
  };
  /**
   * 根据筛选条件过滤分享结果
   */
  const filteredResults = shareResults.filter((result) => {
    if (filterStatus === "all") return true;
    return result.status === filterStatus;
  });

  /**
   * 获取特定状态的结果数量
   * @param status 状态类型
   * @returns 该状态的结果数量
   */
  const getStatusCount = (
    status: "ready" | "sharing" | "success" | "error"
  ) => {
    return shareResults.filter((r) => r.status === status).length;
  };
  /**
   * 处理取消/关闭抽屉
   * 重置所有状态
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
    setIsCancelling(true); // 更新UI状态
    isCancellingRef.current = true; // 更新引用值，用于同步检查

    // 将所有sharing状态的项重置为ready
    setShareResults((prev) => {
      return prev.map((result) => {
        if (result.status === "sharing" || result.status === "ready") {
          return { ...result, status: "ready" };
        }
        return result;
      });
    });
  };

  /**
   * 处理单行选择
   * @param id 选中/取消选中的项目ID
   */
  const handleItemSelect = (id: string) => {
    setSelectedItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  /**
   * 处理全选/取消全选
   */
  const handleSelectAll = () => {
    if (selectedItems.length === filteredResults.length) {
      // 如果当前所有项目都已选中，则取消全选
      setSelectedItems([]);
    } else {
      // 否则选中所有可见项目
      setSelectedItems(filteredResults.map((item) => item.id));
    }
  };

  /**
   * 删除选中的项目
   */
  const handleDeleteSelected = () => {
    if (selectedItems.length === 0) return;

    setShareResults((prev) => {
      return prev.filter((item) => !selectedItems.includes(item.id));
    });

    // 清空选中状态
    setSelectedItems([]);

    notifications.show(`已删除 ${selectedItems.length} 项`, {
      autoHideDuration: 1500,
      severity: "success",
    });
  };

  /**
   * 判断当前页面是否全选
   */
  const isAllSelected =
    filteredResults.length > 0 &&
    selectedItems.length === filteredResults.length;

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
        copyToClipboard: () =>
          handleCopy(formatStringForCopyAndDownload(filteredResults)),
        downloadLinksToTxt: () =>
          handleDownloadLinks(formatStringForCopyAndDownload(filteredResults)),
        downloadLinksToExcel: () =>
          handleDownloadExcel(transformShareInfoForXlsx(filteredResults)),
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
                  {/* 提取期限选项 */}
                  <FormControl fullWidth>
                    <InputLabel>提取期限</InputLabel>
                    <Select
                      value={shareConfig.expireTime}
                      label="提取期限"
                      onChange={(e) =>
                        setShareConfig((prev: any) => ({
                          ...prev,
                          expireTime: Number(e.target.value),
                        }))
                      }
                    >
                      {expireTimeOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* 提取次数选项 */}
                  <FormControl fullWidth>
                    <InputLabel>提取次数</InputLabel>
                    <Select
                      value={shareConfig.extractLimit}
                      label="提取次数"
                      onChange={(e) =>
                        setShareConfig((prev: any) => ({
                          ...prev,
                          extractLimit: Number(e.target.value),
                        }))
                      }
                    >
                      {extractOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* 分享延迟设置 */}
                  <FormControl fullWidth>
                    <TextField
                      label="分享延迟"
                      type="number"
                      variant="filled"
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

                  {/* 快速访问选项 */}
                  <FormControl className="flex flex-row items-center">
                    <FormControlLabel
                      control={
                        <Switch
                          checked={shareConfig.allowFastAccess}
                          onChange={(e) =>
                            setShareConfig((prev: any) => ({
                              ...prev,
                              allowFastAccess: e.target.checked,
                            }))
                          }
                        />
                      }
                      label="允许快速访问分享链接"
                    />
                  </FormControl>
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
                      总计: {shareResults.length} | 准备:{" "}
                      {getStatusCount("ready")} | 分享中:{" "}
                      {getStatusCount("sharing")} | 成功:{" "}
                      {getStatusCount("success")} | 失败:{" "}
                      {getStatusCount("error")} | 已选: {selectedItems.length}
                    </Typography>
                  </Box>
                  <Box className="flex gap-2">
                    {/* 删除选中项按钮 */}
                    <Tooltip title="删除已选项">
                      <span>
                        <IconButton
                          size="small"
                          onClick={handleDeleteSelected}
                          disabled={selectedItems.length === 0 || isSharing}
                          color="error"
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </span>
                    </Tooltip>
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
                <TableContainer
                  component={Paper}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    overflow: "auto", // 启用横向滚动
                    position: "relative", // 为固定列提供定位上下文
                  }}
                >
                  <Table
                    size="small"
                    className="text-sm"
                    stickyHeader // 固定表头
                    sx={{ minWidth: 650 }} // 表格最小宽度
                  >
                    <TableHead>
                      <TableRow>
                        {/* 固定的多选框列 */}
                        <TableCell
                          padding="checkbox"
                          sx={{
                            position: "sticky", // 使用粘性定位
                            left: 0, // 固定在左侧
                            zIndex: 3, // 确保在其他表头之上
                            backgroundColor: "#f5f5f5", // 表头背景色
                            minWidth: "50px",
                            width: "50px",
                          }}
                        >
                          <Checkbox
                            size="small"
                            indeterminate={
                              selectedItems.length > 0 && !isAllSelected
                            }
                            checked={isAllSelected}
                            onChange={handleSelectAll}
                            disabled={filteredResults.length === 0 || isSharing}
                          />
                        </TableCell>
                        <TableCell style={{ minWidth: "100px" }}>
                          状态
                        </TableCell>
                        <TableCell>文件名</TableCell>
                        <TableCell>分享链接</TableCell>
                        <TableCell>提取码</TableCell>
                        <TableCell style={{ minWidth: "100px" }}>
                          信息
                        </TableCell>
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
                            <StatusIcon status={result.status} />
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
                            <StatusText
                              status={result.status}
                              message={result.message}
                            />
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
