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
        version:'2.3.2',
        namespace: 'dreamlove',
          //这里的信息是决定油猴在什么网站规则下运行
        match:
            [
                'https://cloud.189.cn/*',
                'https://pan.baidu.com/disk/main*',
                'https://115.com/*',
                'https://www.123pan.com/*',
                'https://pan.quark.cn/*',
                'https://yun.139.com/*',
                'https://pan.xunlei.com/*',
                'https://www.aliyundrive.com/*',
                //蓝奏云
                'https://lanzou.com/u',
                'https://www.lanzou.com/u',
                'https://www.lanzou.com/account.php',
                'https://up.woozooo.com/u',
                'https://up.woozooo.com/mydisk.php',
                'https://pc.woozooo.com/u',
                'https://pc.woozooo.com/mydisk.php',
                'https://lanzou.com/*',
                'https://www.lanzou.com/*',
                'https://pan.lanzou.com/*',
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
       "run-at":'document-body',
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
