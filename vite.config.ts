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
        name:'网盘批量分享工具(支持蓝奏云,115网盘,123网盘,百度网盘,夸克网盘,阿里云盘,天翼网盘,迅雷网盘,中国移动网盘)',
        author:'superBiuBiu',
        version:'2.3.0',
        namespace: 'dreamlove',
        match:
            [
                'https://cloud.189.cn/*',
                'https://pan.baidu.com/*',
                'https://115.com/*',
                'https://www.123pan.com/*',
                'https://pan.quark.cn/*',
                'https://yun.139.com/*',
                'https://pan.xunlei.com/*',
                'https://www.aliyundrive.com/*',
                //蓝奏云
                'https://lanzou.com/*',
                'https://www.lanzou.com/*',
                'https://pan.lanzou.com/*',
                'https://*.woozooo.com/*',
                'https://*.lanzoub.com/*',
                'https://*.lanzoue.com/*',
                'https://*.lanzouf.com/*',
                'https://*.lanzouh.com/*',
                'https://*.lanzoui.com/*',
                'https://*.lanzouj.com/*',
                'https://*.lanzoul.com/*',
                'https://*.lanzoum.com/*',
                'https://*.lanzouo.com/*',
                'https://*.lanzoup.com/*',
                'https://*.lanzouq.com/*',
                'https://*.lanzout.com/*',
                'https://*.lanzouu.com/*',
                'https://*.lanzouv.com/*',
                'https://*.lanzouw.com/*',
                'https://*.lanzoux.com/*',
                'https://*.lanzouy.com/*',
            ],
        description:'网盘文件批量分享,目前支持蓝奏云,115网盘,123网盘,百度网盘,夸克网盘,阿里云盘,天翼网盘,迅雷网盘,中国移动网盘~',
        supportURL:'https://github.com/superBiuBiuMan/sharelink/',
        iconURL:'https://www.google.com/s2/favicons?domain=dreamlove.top',
        connect:[
            'webapi.115.com',
            'drive-pc.quark.cn',
            'api-pan.xunlei.com',
            'api.aliyundrive.com',
        ],
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
