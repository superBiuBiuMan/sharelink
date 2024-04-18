import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monkey, {cdn, util} from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name:'网盘批量分享工具(支持蓝奏云,115网盘,123网盘,百度网盘,夸克网盘,阿里云盘,天翼网盘,迅雷网盘,中国移动网盘,UC网盘)',
        author:'superBiuBiu',
        version:'2.5.5',
        namespace: 'dreamlove',
          //这里的信息是决定油猴在什么网站规则下运行
        match:
            [
                'https://onedrive.live.com/*',
                'https://cloud.189.cn/*',
                'https://pan.baidu.com/disk/main*',
                'https://115.com/*',
                'https://www.123pan.com/*',
                'https://pan.quark.cn/*',
                'https://yun.139.com/*',
                'https://pan.xunlei.com/*',
                'https://www.aliyundrive.com/*',
                'https://drive.uc.cn/*',
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
        description:'网盘文件批量分享,目前支持蓝奏云,115网盘,123网盘,百度网盘,夸克网盘,阿里云盘,天翼网盘,迅雷网盘,中国移动网盘,UC网盘~',
        supportURL:'https://github.com/superBiuBiuMan/sharelink/',
        iconURL:'https://www.google.com/s2/favicons?domain=dreamlove.top',
        connect:[
            'webapi.115.com',
            'drive-pc.quark.cn',
            'api-pan.xunlei.com',
            'api.aliyundrive.com',
            'pc-api.uc.cn'
        ],
       "run-at":'document-body',
      },
      build: {
          externalGlobals: [
              [
                  "vue",
                  cdn
                  .bootcdn('Vue',"vue.global.prod.min.js")
                  .concat('https://cdn.bootcdn.net/ajax/libs/vue-demi/0.14.6/index.iife.min.js')
                  .concat(
                      await util.fn2dataUrl(() => {
                          // @ts-ignore
                          window.Vue = Vue; // work with Tdesign
                      }),
                  ),
              ],
              ["pinia",cdn.baomitu('Pinia', 'pinia.iife.prod.min.js')],
              ["xlsx",cdn.baomitu('XLSX', 'xlsx.mini.min.js'),],
              ['tdesign-vue-next',cdn.unpkg("TDesign",'dist/tdesign.min.js')],
              ['axios',cdn.baomitu('axios','axios.min.js')]
          ],
          externalResource: {
              'tdesign-vue-next/es/style/index.css': "https://unpkg.com/tdesign-vue-next@1.5.7/dist/tdesign.min.css",
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
