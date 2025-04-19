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
import { extractOptions, expireTimeOptions } from "./options";
import { ShareDrawerRef, ShareResult, ShareConfig } from "./types";
import { ExtractEnum, ExpireTimeEnum } from "./types";
import { getShareInfo } from "./tools";
const ShareDrawer = forwardRef<ShareDrawerRef>((props, ref) => {
  const [open, setOpen] = useState(false);
  const [shareConfig, setShareConfig] = useState<ShareConfig>({
    expireTime: ExpireTimeEnum.forever,
    extractLimit: ExtractEnum.forever,
    shareDelay: 300,
    allowFastAccess: true,
  });
  const [shareResults, setShareResults] = useState<ShareResult[]>([]);
  const [isSharing, setIsSharing] = useState(false);
  const [filterStatus, setFilterStatus] = useState<"all" | "success" | "error">(
    "all"
  );
  const [configExpanded, setConfigExpanded] = useState(true);

  useImperativeHandle(ref, () => {
    return {
      open() {
        setOpen(true);
      },
    };
  });

  // 模拟分享操作
  const handleShare = async () => {
    const {
      selectedRowKeys,
      selectRowInfos,
      authorization,
      "x-captcha-token": captchaToken,
      "x-device-id": deviceId,
      "x-client-id": clientId,
    } = getShareInfo();
    setIsSharing(true);

    // 模拟异步分享过程
    setTimeout(() => {
      // 模拟分享结果
      const mockResults: ShareResult[] = [
        {
          id: "1",
          fileName: "文档1.pdf",
          shareLink: "https://share.example.com/abc123",
          extractCode: "1234",
          status: "success",
        },
        {
          id: "2",
          fileName: "图片集.zip",
          shareLink: "https://share.example.com/def456",
          extractCode: "5678",
          status: "success",
        },
        {
          id: "3",
          fileName: "视频.mp4",
          shareLink: "",
          extractCode: "",
          status: "error",
          message: "文件过大，分享失败",
        },
        {
          id: "4",
          fileName: "演示文稿.pptx",
          shareLink: "https://share.example.com/ghi789",
          extractCode: "9012",
          status: "success",
        },
        {
          id: "5",
          fileName: "源代码.zip",
          shareLink: "",
          extractCode: "",
          status: "error",
          message: "文件包含敏感内容，分享失败",
        },
        {
          id: "6",
          fileName: "大型视频.mkv",
          shareLink: "",
          extractCode: "",
          status: "error",
          message: "文件超过分享限制大小",
        },
      ];

      setShareResults(mockResults);
      setIsSharing(false);
    }, 1500);
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
      .map(
        (result) =>
          `${result.fileName},${result.shareLink},${result.extractCode},${
            result.status === "success" ? "成功" : "失败"
          },${
            result.status === "success"
              ? "分享成功"
              : result.message || "分享失败"
          }`
      )
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
                    总计: {shareResults.length} | 成功:{" "}
                    {shareResults.filter((r) => r.status === "success").length}{" "}
                    | 失败:{" "}
                    {shareResults.filter((r) => r.status === "error").length}
                  </Typography>
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
                        <TableCell>
                          {result.status === "success" ? (
                            <CheckCircleIcon fontSize="small" color="success" />
                          ) : (
                            <ErrorIcon fontSize="small" color="error" />
                          )}
                        </TableCell>
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
                          {result.status === "success"
                            ? "分享成功"
                            : result.message || "分享失败"}
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
              onClick={handleShare}
              disabled={isSharing}
              size="small"
            >
              {isSharing ? "分享中..." : "批量分享"}
            </Button>
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
