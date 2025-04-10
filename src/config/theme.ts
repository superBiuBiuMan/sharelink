import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    // 默认全局基准字体大小（会被 body1 等覆盖）
    fontSize: 14,

    h1: {
      fontSize: "48px",
    },
    h2: {
      fontSize: "36px",
    },
    h3: {
      fontSize: "28px",
    },
    h4: {
      fontSize: "24px",
    },
    h5: {
      fontSize: "20px",
    },
    h6: {
      fontSize: "18px",
    },
    subtitle1: {
      fontSize: "16px",
    },
    subtitle2: {
      fontSize: "14px",
    },
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "14px",
    },
    caption: {
      fontSize: "12px",
    },
    overline: {
      fontSize: "10px",
    },
    button: {
      fontSize: "14px",
    },
  },
});
