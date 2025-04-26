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
  Tooltip,
} from "@mui/material";
import { useState, useImperativeHandle, forwardRef } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import StatusIcon from "@/components/StatucIcon";
import StatusText from "@/components/StatusText";
import type { ShareDrawerRef, ShareResult } from "./types";
import { useBaseCloudInfo } from "@/utils/provider";
import useShare from "@/hooks/useShare/index";
import Drawer from "@/components/Drawer";
import { extractOptions, expireOptions } from "./options";
import { ExtractEnum, ExpireTimeEnum, ExtractCodeTypeEnum } from "./types";
import defaultGlobalSetting from "@/setting";
import StatusCount from "@/components/StatucCount";
import {
  transformShareInfo,
  formatStringForCopyAndDownload,
  transformShareInfoForXlsx,
} from "./tools";
import { findNodeReact } from "@/utils/nodeFind";
import { generateRandomString } from "@/utils/common";
import { shareLogicMap } from "@/api";
import { cloudEnum } from "@/utils/info";
import { sleep } from "@/utils/sleep";
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
    resetShareStatus,
    handleDefaultCloseDrawerCallback,
  } = useShare<ShareResult>({ cloudName });

  // 分享配置状态
  const [shareConfig, setShareConfig] = useState<any>({
    shareDelay: defaultGlobalSetting.defaultShareDelay, // 分享延迟
    shareTheme: "", // 分享主题
    extractLimit: ExtractEnum.forever, // 下载次数
    expireTime: ExpireTimeEnum.forever, // 有效期
    enableCustomCode: false, // 是否启用自定义提取码
    customCode: "", // 自定义提取码
  });

  // 添加选中项状态
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

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
      setShareResults(
        transformShareInfo(result.list)
          ?.filter((item) => result.selectedRowKeys.includes(item.id))
          ?.map((item) => ({
            ...item,
            status: "ready",
          })) ?? []
      );
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
    for (let i = 0; i < shareResults.length; i++) {
      // 检查是否取消分享
      if (isCancellingRef.current) {
        setIsSharing(false);
        break;
      }
      try {
        //获取
        const sendData = {
          expired_type: shareConfig.expireTime, //分享天数
          dl_limit: shareConfig.extractLimit, //提取次数
          url_type: shareConfig.enableCustomCode
            ? ExtractCodeTypeEnum.yes
            : ExtractCodeTypeEnum.no, //提取码type
          title: shareConfig.shareTheme, //标题
          fid_list: [shareResults[i].id], //文件id
        };
        // 如果开启提取码，则设置提取码
        if (shareConfig.enableCustomCode) {
          //@ts-ignore
          sendData["passcode"] = shareConfig.customCode
            ? shareConfig.customCode
            : generateRandomString();
        }
        //开始调用接口
        const { task_id } =
          await shareLogicMap[cloudEnum.uc].getTaskId(sendData);
        let shareIdInfo = await shareLogicMap[cloudEnum.uc].getShareId(task_id);
        if (!shareIdInfo.share_id) {
          shareIdInfo = await shareLogicMap[cloudEnum.uc].getShareId(
            task_id,
            1
          );
        }
        //获取分享链接 passcode如果存在则说明有提取码
        const { share_url, passcode } = await shareLogicMap[
          cloudEnum.uc
        ].getShareInfo(shareIdInfo.share_id);
        setShareResults((prev) => {
          const updated = [...prev];
          if (share_url) {
            // 分享成功
            updated[i] = {
              ...updated[i],
              expireTime: shareConfig.expireTime,
              status: "success",
              shareLink: share_url,
              extractCode: passcode,
              restoreLimit: shareConfig.extractLimit,
              shareTheme: shareConfig.shareTheme,
            };
          } else {
            //分享失败
            updated[i] = {
              ...updated[i],
              status: "error",
              message: "分享失败",
            };
          }
          return updated;
        });

        console.log("share_url", share_url, passcode);
      } catch (error) {
        console.log(error, "分享失败");
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
        setIsPreparingShare(true);
        setIsSharing(false);
        isCancellingRef.current = false;
        // 分享间隔延迟
        await sleep(shareConfig.shareDelay);
      }
    }
    resetShareStatus();
  };

  /**
   * 处理取消/关闭抽屉
   */
  const handleCancelClose = () => {
    handleDefaultCloseDrawerCallback();
  };

  /**
   * 取消正在进行的分享操作
   */
  const handleCancelShare = () => {
    setIsCancelling(true);
    isCancellingRef.current = true;
  };

  // 处理单个项目选择
  const handleItemSelect = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // 处理全选
  const handleSelectAll = () => {
    if (selectedItems.length === filteredResults.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredResults.map((item) => item.id));
    }
  };

  // 处理删除选中项
  const handleDeleteSelected = () => {
    setShareResults((prev) =>
      prev.filter((item) => !selectedItems.includes(item.id))
    );
    setSelectedItems([]);
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
          handleCopy(formatStringForCopyAndDownload(filteredResults));
        },
        downloadLinksToTxt: () => {
          handleDownloadLinks(formatStringForCopyAndDownload(filteredResults));
        },
        downloadLinksToExcel: () => {
          handleDownloadExcel(transformShareInfoForXlsx(filteredResults));
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
                        placeholder="(可空)只能包含大小写英文+数字)"
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
                    <StatusCount
                      shareResults={shareResults}
                      selectedItems={selectedItems}
                    />
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
                        <TableCell padding="checkbox">
                          <Checkbox
                            size="small"
                            checked={
                              selectedItems.length === filteredResults.length &&
                              filteredResults.length > 0
                            }
                            indeterminate={
                              selectedItems.length > 0 &&
                              selectedItems.length < filteredResults.length
                            }
                            onChange={handleSelectAll}
                            disabled={isSharing}
                          />
                        </TableCell>
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
                          <TableCell padding="checkbox">
                            <Checkbox
                              size="small"
                              checked={selectedItems.includes(result.id)}
                              onChange={() => handleItemSelect(result.id)}
                              disabled={isSharing}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <StatusIcon status={result.status} />
                          </TableCell>
                          <TableCell
                            sx={{
                              maxWidth: "200px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                            title={result.fileName}
                          >
                            {result.fileName}
                          </TableCell>
                          <TableCell>
                            {result.shareLink ? (
                              <Box className="flex items-center gap-1">
                                <span className="truncate max-w-[150px]">
                                  {result.shareLink}
                                </span>
                                <IconButton
                                  size="small"
                                  onClick={() =>
                                    copyLink(result.shareLink ?? "")
                                  }
                                >
                                  <ContentCopyIcon fontSize="small" />
                                </IconButton>
                              </Box>
                            ) : (
                              "-"
                            )}
                          </TableCell>
                          <TableCell>{result.extractCode || "-"}</TableCell>
                          <TableCell>
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
