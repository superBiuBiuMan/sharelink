import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        },
      },
    },
    // 所有Paper基础组件的样式（包括Dialog, Card等）
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          backgroundImage: "none",
          boxShadow: "none",
          borderRadius: 0,
        },
      },
    },
    // 按钮基础样式
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          fontSize: "14px",
          fontWeight: 400,
          padding: "6px 16px",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    // 输入框基础样式
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          backgroundColor: "#ffffff",
        },
      },
    },
    // Dialog基础样式
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        },
      },
    },
    // Drawer基础样式
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#ffffff",
          border: "none",
        },
        root: {
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.45)",
          },
        },
      },
    },
    // Typography基础样式
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#333333",
        },
      },
    },
    // Icon基础样式
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "20px",
        },
      },
    },
    // 表单控件基础样式
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
  },
  // 调色板
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
      disabled: "#999999",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: 14,
    h1: {
      fontSize: "24px",
      fontWeight: 500,
    },
    h2: {
      fontSize: "20px",
      fontWeight: 500,
    },
    h3: {
      fontSize: "16px",
      fontWeight: 500,
    },
    body1: {
      fontSize: "14px",
    },
    body2: {
      fontSize: "12px",
    },
  },
  shape: {
    borderRadius: 2,
  },
});
