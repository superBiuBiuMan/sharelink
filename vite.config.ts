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
        icon: "https://vitejs.dev/logo.svg",
        namespace: "npm/vite-plugin-monkey",
        match: [
          "https://pan.xunlei.com/**",
          "https://drive.uc.cn/**",
          "https://pan.baidu.com/disk/main*",
          "https://cloud.189.cn/**",
          "https://pan.quark.cn/**",
          "https://www.aliyundrive.com/**",
          "https://www.alipan.com/**",
          "https://yun.139.com/**",
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
      },
      build: {
        externalGlobals: {
          react: cdn.jsdelivr("React", "umd/react.production.min.js"),
          "react-dom": cdn.jsdelivr(
            "ReactDOM",
            "umd/react-dom.production.min.js"
          ),
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
