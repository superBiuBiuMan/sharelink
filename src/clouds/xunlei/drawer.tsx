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
import { useState, useImperativeHandle, forwardRef, useEffect } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ShareIcon from "@mui/icons-material/Share";
import ArticleIcon from "@mui/icons-material/Article";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import PendingIcon from "@mui/icons-material/Pending";
import { extractOptions, expireTimeOptions } from "./options";
import { ShareDrawerRef, ShareResult, ShareConfig } from "./types";
import { ExtractEnum, ExpireTimeEnum } from "./types";
import { getShareInfo, transformFileInfo } from "./tools";
const ShareDrawer = forwardRef<ShareDrawerRef>((props, ref) => {
  const [open, setOpen] = useState(false);
  const [shareConfig, setShareConfig] = useState<ShareConfig>({
    expireTime: ExpireTimeEnum.forever,
    extractLimit: ExtractEnum.forever,
    shareDelay: 300,
    allowFastAccess: true,
  });
  const [shareResults, setShareResults] = useState<ShareResult[]>([]); //分享结果
  const [isSharing, setIsSharing] = useState(false); //是否正在分享
  const [filterStatus, setFilterStatus] = useState<
    "all" | "ready" | "sharing" | "success" | "error"
  >("all");
  const [configExpanded, setConfigExpanded] = useState(true);
  const [isPreparingShare, setIsPreparingShare] = useState(false); // 是否正在准备分享
  const [isPrepared, setIsPrepared] = useState(false); // 是否已准备好分享
  const [isCancelling, setIsCancelling] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open() {
        setOpen(true);
      },
    };
  });

  // 模拟分享操作
  const handlePrepareShare = async () => {
    setIsPreparingShare(true);
    try {
      const shareInfo = getShareInfo();
      const { selectRowInfos } = shareInfo;

      // 模拟获取文件信息的过程
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // // 初始化文件列表
      // const initialResults: ShareResult[] = [
      //   {
      //     id: "1",
      //     fileName: "文档1.pdf",
      //     shareLink: "",
      //     extractCode: "",
      //     status: "ready",
      //     fileSize: "2.5MB",
      //   },
      //   {
      //     id: "2",
      //     fileName: "图片集.zip",
      //     shareLink: "",
      //     extractCode: "",
      //     status: "ready",
      //     fileSize: "15MB",
      //   },
      //   {
      //     id: "3",
      //     fileName: "视频.mp4",
      //     shareLink: "",
      //     extractCode: "",
      //     status: "ready",
      //     fileSize: "1.2GB",
      //   },
      //   {
      //     id: "4",
      //     fileName: "演示文稿.pptx",
      //     shareLink: "",
      //     extractCode: "",
      //     status: "ready",
      //     fileSize: "5MB",
      //   },
      //   {
      //     id: "5",
      //     fileName: "源代码.zip",
      //     shareLink: "",
      //     extractCode: "",
      //     status: "ready",
      //     fileSize: "500KB",
      //   },
      //   {
      //     id: "6",
      //     fileName: "大型视频.mkv",
      //     shareLink: "",
      //     extractCode: "",
      //     status: "ready",
      //     fileSize: "4.5GB",
      //   },
      // ];

      setShareResults(transformFileInfo(selectRowInfos ?? []));
      setIsPrepared(true);
    } catch (error) {
      console.error("准备分享失败:", error);
    } finally {
      setIsPreparingShare(false);
    }
  };

  const handleShare = async () => {
    setIsCancelling(false);
    const shareInfo = getShareInfo();
    const { selectRowInfos } = shareInfo;

    // 实际项目中，应该使用selectedRowKeys来获取选中的文件信息
    // 这里为了简化，使用预定义的文件列表

    setIsSharing(true);

    // 初始化文件为"准备分享"状态
    const initialResults: ShareResult[] = [
      {
        id: "1",
        fileName: "文档1.pdf",
        shareLink: "",
        extractCode: "",
        status: "ready",
      },
      {
        id: "2",
        fileName: "图片集.zip",
        shareLink: "",
        extractCode: "",
        status: "ready",
      },
      {
        id: "3",
        fileName: "视频.mp4",
        shareLink: "",
        extractCode: "",
        status: "ready",
      },
      {
        id: "4",
        fileName: "演示文稿.pptx",
        shareLink: "",
        extractCode: "",
        status: "ready",
      },
      {
        id: "5",
        fileName: "源代码.zip",
        shareLink: "",
        extractCode: "",
        status: "ready",
      },
      {
        id: "6",
        fileName: "大型视频.mkv",
        shareLink: "",
        extractCode: "",
        status: "ready",
      },
    ];

    setShareResults(initialResults);

    // 模拟文件逐个开始分享
    for (let i = 0; i < initialResults.length; i++) {
      if (isCancelling) {
        setIsSharing(false);
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 500));

      // 更新为"分享中"状态
      setShareResults((prev) => {
        const updated = [...prev];
        updated[i] = { ...updated[i], status: "sharing" };
        return updated;
      });

      // 模拟分享过程
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 更新为最终状态（成功或失败）
      setShareResults((prev) => {
        const updated = [...prev];
        if (i === 2 || i === 4 || i === 5) {
          // 这些文件模拟分享失败
          updated[i] = {
            ...updated[i],
            status: "error",
            message:
              i === 2
                ? "文件过大，分享失败"
                : i === 4
                ? "文件包含敏感内容，分享失败"
                : "文件超过分享限制大小",
          };
        } else {
          // 其他文件模拟分享成功
          updated[i] = {
            ...updated[i],
            status: "success",
            shareLink: `https://share.example.com/${
              updated[i].id
            }${Math.random().toString(36).substring(2, 6)}`,
            extractCode: Math.floor(1000 + Math.random() * 9000).toString(),
          };
        }
        return updated;
      });
    }

    setIsSharing(false);
  };

  // 复制到剪贴板
  const handleCopy = () => {
    const text = shareResults
      .filter((result) => result.status === "success")
      .map(
        (result) =>
          `${result.fileName}: ${result.shareLink} 提取码: ${result.extractCode}`
      )
      .join("\n");

    navigator.clipboard.writeText(text);
    // 这里可以添加一个提示
  };

  // 下载分享链接
  const handleDownloadLinks = () => {
    const text = shareResults
      .filter((result) => result.status === "success")
      .map(
        (result) =>
          `${result.fileName}, ${result.shareLink}, ${result.extractCode}`
      )
      .join("\n");

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "分享链接.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  // 下载为Excel
  const handleDownloadExcel = () => {
    // 实际项目中应使用excel库实现，这里简化处理
    const header = "文件名,分享链接,提取码,状态,信息\n";
    const content = shareResults
      .map((result) => {
        const statusText =
          result.status === "ready"
            ? "准备分享"
            : result.status === "sharing"
            ? "分享中"
            : result.status === "success"
            ? "分享成功"
            : "分享失败";

        const message =
          result.status === "success"
            ? "分享成功"
            : result.status === "error"
            ? result.message || "分享失败"
            : result.status === "sharing"
            ? "正在分享中"
            : "等待分享";

        return `${result.fileName},${result.shareLink || ""},${
          result.extractCode || ""
        },${statusText},${message}`;
      })
      .join("\n");

    const blob = new Blob([header + content], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "分享信息.csv";
    a.click();
    URL.revokeObjectURL(url);
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

  return (
    <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
      <Box className="flex flex-col h-full p-3">
        {/* 标题 */}
        <Box className="flex justify-between items-center mb-2">
          <Typography variant="subtitle1" className="font-bold">
            批量分享
          </Typography>
          <IconButton size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Divider className="mb-3" />

        {/* 内容区域 */}
        <Box className="flex-1 overflow-y-auto">
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

          {shareResults.length > 0 && (
            <Box className="mt-3">
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
                              onClick={() =>
                                navigator.clipboard.writeText(result.shareLink)
                              }
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
            </Box>
          )}
        </Box>

        {/* 底部按钮 */}
        <Box className="mt-auto pt-3">
          <Divider className="mb-3" />
          <Box className="flex justify-center items-center gap-2 flex-wrap">
            <Button
              variant="outlined"
              color="error"
              startIcon={<CancelIcon />}
              onClick={() => setOpen(false)}
              size="small"
            >
              取消
            </Button>
            <Button
              variant="contained"
              startIcon={<ShareIcon />}
              onClick={isPrepared ? handleShare : handlePrepareShare}
              disabled={isPreparingShare || isSharing}
              size="small"
            >
              {isPreparingShare
                ? "准备中..."
                : isSharing
                ? "分享中..."
                : isPrepared
                ? "开始分享"
                : "准备分享"}
            </Button>
            {isSharing && (
              <Button
                variant="outlined"
                size="small"
                color="error"
                startIcon={<CancelIcon />}
                onClick={handleCancelShare}
                disabled={!isSharing}
                className="hover:bg-red-50"
              >
                取消
              </Button>
            )}
            <Button
              variant="outlined"
              startIcon={<ContentCopyIcon />}
              onClick={handleCopy}
              disabled={shareResults.length === 0 || isSharing}
              size="small"
            >
              复制
            </Button>
            <Button
              variant="outlined"
              startIcon={<FileDownloadIcon />}
              onClick={handleDownloadLinks}
              disabled={shareResults.length === 0 || isSharing}
              size="small"
            >
              下载
            </Button>
            <Button
              variant="outlined"
              startIcon={<ArticleIcon />}
              onClick={handleDownloadExcel}
              disabled={shareResults.length === 0 || isSharing}
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

const handleCancelShare = () => {
  setIsCancelling(true);
  setShareResults((prev) => {
    return prev.map((result) => {
      if (result.status === "sharing" || result.status === "ready") {
        return { ...result, status: "ready" };
      }
      return result;
    });
  });
};
