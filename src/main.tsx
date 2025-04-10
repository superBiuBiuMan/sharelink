import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./style/reset.scss";
import "./style/tailwindcss.css";
import { mountCloudDOM } from "./cloudsRegister";

// 获取挂载点并添加容器
const mountPoint = mountCloudDOM();
// 在新创建的容器中渲染React应用
ReactDOM.createRoot(mountPoint).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
