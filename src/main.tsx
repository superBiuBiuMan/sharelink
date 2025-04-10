import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/reset.scss";
import "./style/tailwindcss.css";
import { BaseCloudInfo } from "./utils/provider";
import { mountCloudInfo } from "./cloudsRegister";

// 获取挂载点并添加容器
const mountInfo = mountCloudInfo();
const info = {
  name: mountInfo.name,
  type: mountInfo.type,
};
// 在新创建的容器中渲染React应用
ReactDOM.createRoot(mountInfo.mountFn()).render(
  <BaseCloudInfo.Provider value={info}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BaseCloudInfo.Provider>
);
