import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/reset.scss";
import "./style/tailwindcss.css";
import { BaseCloudInfo } from "./utils/provider";
import { mountCloudInfo } from "./cloudsRegister";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./config/theme";
// 获取挂载点并添加容器
const mountInfo = mountCloudInfo();
const info = {
  name: mountInfo.name,
  type: mountInfo.type,
};
let count = 20; // 产生挂载次数
let timer = setInterval(() => {
  const rootElementId = document.getElementById(mountInfo.rootElementId);
  debugger;
  if (rootElementId) {
    clearInterval(timer);
  } else {
    count--;
    if (count <= 0) {
      clearInterval(timer);
    }
    // 在新创建的容器中渲染React应用
    ReactDOM.createRoot(mountInfo.mountFn()).render(
      <ThemeProvider theme={theme}>
        <BaseCloudInfo.Provider value={info}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BaseCloudInfo.Provider>
      </ThemeProvider>
    );
  }
}, 500);
