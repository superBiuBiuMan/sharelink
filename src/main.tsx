import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/default.css";
import "./style/reset.scss";
import tailwindCss from "./style/tailwindcss.css?inline";
import { BaseCloudInfo } from "./utils/provider";
import { mountCloudInfo } from "./cloudsRegister";
import { ThemeProvider } from "@mui/material/styles";
import { initTheme } from "./config/theme";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { NotificationsProvider } from "@toolpad/core/useNotifications";

// 定义挂载返回类型接口
interface MountResult {
  appContainer: HTMLElement;
  shadowContainer?: ShadowRoot;
}

// 获取挂载点并添加容器
const mountInfo = mountCloudInfo();
const info = {
  name: mountInfo.name,
  type: mountInfo.type,
};
let count = 20; // 产生挂载次数
let timer = setInterval(() => {
  const rootElementId = document.getElementById(mountInfo.rootElementId);
  if (rootElementId) {
    clearInterval(timer);
  } else {
    count--;
    if (count <= 0) {
      clearInterval(timer);
    }

    // 使用类型断言确保返回对象具有正确的属性
    const result = mountInfo.mountFn() as unknown as MountResult;

    // 检查是否有shadowContainer
    if (!result.shadowContainer) {
      console.error("挂载失败: 没有找到shadowContainer");
      return;
    }

    // 添加tailwindcss
    const styleTailwindCss = document.createElement("style");
    styleTailwindCss.textContent = tailwindCss;
    styleTailwindCss.setAttribute("data-tailwind", "true");
    result.shadowContainer.appendChild(styleTailwindCss);

    const cache = createCache({
      key: "css",
      prepend: true,
      container: result.shadowContainer,
    });

    // 在新创建的容器中渲染React应用
    ReactDOM.createRoot(result.appContainer).render(
      <CacheProvider value={cache}>
        <ThemeProvider theme={initTheme(result.appContainer)}>
          <BaseCloudInfo.Provider value={info}>
            <React.StrictMode>
              <NotificationsProvider
                slotProps={{
                  snackbar: {
                    anchorOrigin: { vertical: "top", horizontal: "center" },
                  },
                }}
              >
                <App />
              </NotificationsProvider>
            </React.StrictMode>
          </BaseCloudInfo.Provider>
        </ThemeProvider>
      </CacheProvider>
    );
  }
}, 500);
