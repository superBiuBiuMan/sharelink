import { createTheme } from "@mui/material/styles";

export const initTheme = (shadowRootElement: HTMLElement) => {
  // 创建一个完全独立的主题
  const theme = createTheme({
    typography: {
      //@ts-ignore
      pxToRem: (size) => `${size}px`, // 永远返回px
    },
    components: {
      MuiPopover: {
        defaultProps: {
          container: shadowRootElement,
        },
      },
      MuiPopper: {
        defaultProps: {
          container: shadowRootElement,
        },
      },
      MuiModal: {
        defaultProps: {
          container: shadowRootElement,
        },
      },
    },
  });

  return theme;
};
