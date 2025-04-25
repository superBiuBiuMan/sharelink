import {
  Drawer,
  Box,
  Divider,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
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
  Tabs,
  Tab,
  Collapse,
  CircularProgress,
} from "@mui/material";
import { cloudEnum } from "@/utils/info";
import { shareLogicMap } from "@/utils/shareLogic";
import {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ShareBtn from "@/components/ShareBtn";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ShareIcon from "@mui/icons-material/Share";
import ArticleIcon from "@mui/icons-material/Article";
import ErrorIcon from "@mui/icons-material/Error";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useNotifications } from "@toolpad/core/useNotifications";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { extractOptions, expireTimeOptions } from "./options";
import { ShareDrawerRef, ShareResult, ShareConfig } from "./types";
import sleep from "@/utils/sleep";
import { ExtractEnum, ExpireTimeEnum } from "./types";
import type { ShareResponse } from "./types";
import {
  copy,
  downloadTxt,
  getTimestamp,
  exportXlsxFile,
} from "@/utils/common";
import { useBaseCloudInfo } from "@/utils/provider";
import {
  getShareInfo,
  transformFileInfo,
  transformShareInfoForXlsx,
} from "./tools";
const ShareDrawer = forwardRef<ShareDrawerRef>((props, ref) => {
  const { name: cloudName } = useBaseCloudInfo();
  const [open, setOpen] = useState(false);
  const [shareConfig, setShareConfig] = useState<ShareConfig>({
    expireTime: ExpireTimeEnum.forever,
    extractLimit: ExtractEnum.forever,
    shareDelay: 300,
    allowFastAccess: true,
  });
  const [shareResults, setShareResults] = useState<ShareResult[]>([]); //分享结果
  const [filterStatus, setFilterStatus] = useState<
    "all" | "ready" | "sharing" | "success" | "error"
  >("all");
  const [loadingShareData, setLoadingShareData] = useState(false); // 是否正在加载分享数据
  const [configExpanded, setConfigExpanded] = useState(true); // 分享配置是否展开
  const [isSharing, setIsSharing] = useState(false); //是否正在分享
  const [isPreparingShare, setIsPreparingShare] = useState(true); // 是否准备分享->目的是获取文件列表(默认)
  const [isPrepared, setIsPrepared] = useState(false); // 是否已准备好分享 -> 真正开始分享
  const [isCancelling, setIsCancelling] = useState(false); // 是否取消分享
  const isCancellingRef = useRef(false); // 是否取消分享-同步记录状态
  const notifications = useNotifications();
  useImperativeHandle(ref, () => {
    return {
      open() {
        setOpen(true);
      },
    };
  });
  //准备分享
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
  //开始分享
  const handleShare = async () => {
    setIsCancelling(false);
    setIsSharing(true);
    const {
      "x-captcha-token": xCaptchaToken,
      authorization,
      "x-device-id": xDeviceId,
      "x-client-id": xClientId,
    } = getShareInfo();
    // 模拟文件逐个开始分享
    for (let i = 0; i < shareResults.length; i++) {
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

        let res: ShareResponse = await shareLogicMap[cloudEnum.xunlei].share(
          {
            expiration_days: shareConfig.expireTime + "", //过期时间
            file_ids: [shareResults[i].id], //文件id
            params: {
              subscribe_push: "false", //是否订阅推送
              withPassCodeInLink: shareConfig.allowFastAccess
                ? "true"
                : "false", //是否在链接中包含提取码
            },
            restore_limit: shareConfig.extractLimit + "", //提取次数
            share_to: "copy", //分享方式
            title: "云盘资源分享", //分享标题
          },
          {
            headers: {
              "x-captcha-token": xCaptchaToken,
              authorization,
              "x-device-id": xDeviceId,
              "x-client-id": xClientId,
            },
          }
        );
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
        // 更新为最终状态（成功或失败）
        setShareResults((prev) => {
          const updated = [...prev];
          // 分享失败
          updated[i] = {
            ...updated[i],
            status: "error",
            message: "分享失败",
          };
          return updated;
        });
      } finally {
        await sleep(shareConfig.shareDelay);
      }
    }
    setIsPreparingShare(true); // 设置为准备分享状态
    setIsSharing(false);
    isCancellingRef.current = false;
  };

  // 复制到剪贴板
  const handleCopy = () => {
    const text = filteredResults
      .map(
        (result) =>
          `${result.fileName}: ${result.shareLink} 提取码: ${result.extractCode}`
      )
      .join("\n");

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

  // 下载分享链接
  const handleDownloadLinks = () => {
    const text = filteredResults
      .map(
        (result) =>
          `${result.fileName}, ${result.shareLink}, ${result.extractCode}`
      )
      .join("\n");
    downloadTxt(text, `${cloudName}-批量分享链接-${getTimestamp()}.txt`);
  };

  // 下载为Excel
  const handleDownloadExcel = () => {
    const data = transformShareInfoForXlsx(filteredResults);
    exportXlsxFile(`${cloudName}-批量分享链接-${getTimestamp()}.xlsx`, data);
  };

  // 筛选分享结果
  const filteredResults = shareResults.filter((result) => {
    if (filterStatus === "all") return true;
    return result.status === filterStatus;
  });

  // 获取状态统计
  const getStatusCount = (
    status: "ready" | "sharing" | "success" | "error"
  ) => {
    return shareResults.filter((r) => r.status === status).length;
  };

  // 获取状态对应的图标
  const getStatusIcon = (status: "ready" | "sharing" | "success" | "error") => {
    switch (status) {
      case "ready":
        return <HourglassEmptyIcon fontSize="small" color="disabled" />;
      case "sharing":
        return <CircularProgress size={16} />;
      case "success":
        return <CheckCircleIcon fontSize="small" color="success" />;
      case "error":
        return <ErrorIcon fontSize="small" color="error" />;
    }
  };

  // 获取状态对应的文本
  const getStatusText = (
    status: "ready" | "sharing" | "success" | "error",
    message?: string
  ) => {
    switch (status) {
      case "ready":
        return "准备分享";
      case "sharing":
        return "分享中...";
      case "success":
        return "分享成功";
      case "error":
        return message || "分享失败";
    }
  };
  // 取消关闭按钮
  const handleCancelClose = () => {
    setOpen(false);
    setIsCancelling(false);
    setIsSharing(false);
    setIsPreparingShare(true);
  };
  // 取消分享
  const handleCancelShare = () => {
    setIsCancelling(true); //视图更新
    isCancellingRef.current = true;
    setShareResults((prev) => {
      return prev.map((result) => {
        if (result.status === "sharing" || result.status === "ready") {
          return { ...result, status: "ready" };
        }
        return result;
      });
    });
  };
  return (
    <Drawer open={open} onClose={handleCancelClose} anchor="right">
      <Box className="flex flex-col h-full p-3">
        {/* 标题 */}
        <Box className="flex justify-between items-center mb-2">
          <Typography variant="subtitle1" className="font-bold">
            批量分享
          </Typography>
          <IconButton size="small" onClick={handleCancelClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Divider className="mb-3" />

        {/* 内容区域 */}
        <Box className="flex-1 flex flex-col overflow-y-auto">
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
                  <FormControl fullWidth>
                    <InputLabel>提取期限</InputLabel>
                    <Select
                      value={shareConfig.expireTime}
                      label="提取期限"
                      onChange={(e) =>
                        setShareConfig({
                          ...shareConfig,
                          expireTime: Number(e.target.value),
                        })
                      }
                    >
                      {expireTimeOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel>提取次数</InputLabel>
                    <Select
                      value={shareConfig.extractLimit}
                      label="提取次数"
                      onChange={(e) =>
                        setShareConfig({
                          ...shareConfig,
                          extractLimit: Number(e.target.value),
                        })
                      }
                    >
                      {extractOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <TextField
                      id="filled-number"
                      label="分享延迟"
                      type="number"
                      variant="filled"
                      value={shareConfig.shareDelay}
                      onChange={(e) =>
                        setShareConfig({
                          ...shareConfig,
                          shareDelay: Number(e.target.value),
                        })
                      }
                      slotProps={{
                        htmlInput: {
                          min: 1,
                          step: 100,
                        },
                      }}
                    />
                  </FormControl>

                  <FormControl className="flex flex-row items-center">
                    <FormControlLabel
                      control={
                        <Switch
                          checked={shareConfig.allowFastAccess}
                          onChange={(e) =>
                            setShareConfig({
                              ...shareConfig,
                              allowFastAccess: e.target.checked,
                            })
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

          <Box className="mt-3 h-0 flex-1">
            {/* 加载中 */}
            {loadingShareData && (
              <Box className="flex justify-center items-center mt-10">
                <CircularProgress size={50} />
              </Box>
            )}
            {/* 加载完成 */}
            {shareResults.length > 0 && !loadingShareData && (
              <>
                <Box className="flex justify-between items-center mb-2">
                  <Box>
                    <h3 className="font-medium text-base">分享结果</h3>
                    <Typography variant="caption" color="textSecondary">
                      总计: {shareResults.length} | 准备:{" "}
                      {getStatusCount("ready")} | 分享中:{" "}
                      {getStatusCount("sharing")} | 成功:{" "}
                      {getStatusCount("success")} | 失败:{" "}
                      {getStatusCount("error")}
                    </Typography>
                  </Box>
                  <Box>
                    {/* 筛选 */}
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
                <TableContainer component={Paper} variant="outlined">
                  <Table size="small" className="text-sm">
                    <TableHead>
                      <TableRow>
                        <TableCell width={40}>状态</TableCell>
                        <TableCell>文件名</TableCell>
                        <TableCell>分享链接</TableCell>
                        <TableCell>提取码</TableCell>
                        <TableCell>信息</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredResults.map((result) => (
                        <TableRow key={result.id}>
                          <TableCell>{getStatusIcon(result.status)}</TableCell>
                          <TableCell>{result.fileName}</TableCell>
                          <TableCell>
                            {result.shareLink || "-"}
                            {result.shareLink && (
                              <IconButton
                                size="small"
                                onClick={() => copy(result.shareLink)}
                              >
                                <ContentCopyIcon fontSize="small" />
                              </IconButton>
                            )}
                          </TableCell>
                          <TableCell>{result.extractCode || "-"}</TableCell>
                          <TableCell>
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

        {/* 底部按钮 */}
        <Box className="mt-auto pt-3">
          <Divider className="mb-3" />
          <Box className="flex justify-center items-center gap-2 flex-wrap">
            <Button
              variant="outlined"
              color="error"
              startIcon={<CancelIcon />}
              onClick={handleCancelClose}
              size="small"
            >
              取消
            </Button>
            <ShareBtn
              isPreparingShare={isPreparingShare}
              isSharing={isSharing}
              isPrepared={isPrepared}
              isCancelling={isCancelling}
              onPrepareShare={handlePrepareShare}
              onShare={handleShare}
              onCancelShare={handleCancelShare}
            />
            <Button
              variant="outlined"
              startIcon={<ContentCopyIcon />}
              onClick={handleCopy}
              disabled={filteredResults.length === 0 || isSharing}
              size="small"
            >
              复制
            </Button>
            <Button
              variant="outlined"
              startIcon={<FileDownloadIcon />}
              onClick={handleDownloadLinks}
              disabled={filteredResults.length === 0 || isSharing}
              size="small"
            >
              下载
            </Button>
            <Button
              variant="outlined"
              startIcon={<ArticleIcon />}
              onClick={handleDownloadExcel}
              disabled={filteredResults.length === 0 || isSharing}
              size="small"
            >
              导出
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
});

export default ShareDrawer;

// const handleCancelShare = () => {
//   setIsCancelling(true);
//   setShareResults((prev) => {
//     return prev.map((result) => {
//       if (result.status === "sharing" || result.status === "ready") {
//         return { ...result, status: "ready" };
//       }
//       return result;
//     });
//   });
// };
