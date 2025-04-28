import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import monkey, { cdn } from "vite-plugin-monkey";
import tailwindcss from "@tailwindcss/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monkey({
      entry: "src/main.tsx",
      userscript: {
        name: "网盘批量分享工具(支持蓝奏云,115网盘,123网盘,百度网盘,夸克网盘,阿里云盘,天翼网盘,迅雷网盘,中国移动网盘,UC网盘)",
        author: "superBiuBiu",
        version: "3.0.0",
        namespace: "dreamlove",
        match: [
          "https://pan.xunlei.com/**",
          "https://drive.uc.cn/**",
          "https://pan.baidu.com/disk/main*",
          "https://pan.baidu.com/disk/synchronization*",
          "https://cloud.189.cn/**",
          "https://pan.quark.cn/**",
          "https://www.aliyundrive.com/**",
          "https://www.alipan.com/**",
          "https://yun.139.com/**",
          "https://115.com/**",
          //蓝奏云
          "https://lanzou.com/u",
          "https://www.lanzou.com/u",
          "https://www.lanzou.com/account.php",
          "https://up.woozooo.com/u",
          "https://up.woozooo.com/mydisk.php",
          "https://pc.woozooo.com/u",
          "https://pc.woozooo.com/mydisk.php",
          "https://lanzou.com/**",
          "https://www.lanzou.com/**",
          "https://pan.lanzou.com/**",
        ],
        description:
          "网盘文件批量分享,目前支持蓝奏云,115网盘,123网盘,百度网盘,夸克网盘,阿里云盘,天翼网盘,迅雷网盘,中国移动网盘,UC网盘~",
        supportURL: "https://github.com/superBiuBiuMan/sharelink/",
        iconURL: "https://www.google.com/s2/favicons?domain=dreamlove.top",
        connect: [
          "webapi.115.com",
          "drive-pc.quark.cn",
          "api-pan.xunlei.com",
          "api.aliyundrive.com",
          "pc-api.uc.cn",
        ],
        "run-at": "document-body",
      },
      build: {
        externalGlobals: {
          react: cdn.cdnjs("React", "umd/react.production.min.js"),
          "react-dom": cdn.cdnjs("ReactDOM", "umd/react-dom.production.min.js"),
          xlsx: cdn.cdnjs("XLSX", "xlsx.mini.min.js"),
        },
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
