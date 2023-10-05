import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monkey, { cdn } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name:'网盘批量分享工具',
        author:'superBiuBiu',
        version:'1.0.1',
        namespace: 'dreamlove',
        match:
            [
                'https://cloud.189.cn/*',
                'https://pan.baidu.com/*',
                'https://115.com/*',
                'https://www.123pan.com/',
                'https://www.123pan.com/*',
                'https://www.123pan.com/*/**',
            ],
        description:'网盘文件批量分享,目前支持百度网盘,天翼网盘,115网盘~',
        supportURL:'https://github.com/superBiuBiuMan/sharelink/',
        iconURL:'https://www.google.com/s2/favicons?domain=dreamlove.top',
        connect:[
            'webapi.115.com',
        ]
      },
      build: {
        externalGlobals: {
          vue: cdn.bootcdn('Vue', 'vue.global.prod.js'),
        },
      },
    }),
  ],
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        math: "always",
      },
    },
  },
});
