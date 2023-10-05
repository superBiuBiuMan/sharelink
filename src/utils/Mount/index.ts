//挂载方式
import {cloudInfoStore} from "../../store";
import {CloudInfoEnum} from "../../infoConfig";
import {MessagePlugin} from "tdesign-vue-next";

export default () => {
    const app = document.createElement('div');
    //app.style.textAlign = 'center';
    //判断所属网盘
    switch (cloudInfoStore.currentCloud) {
        case CloudInfoEnum.cloudBaidu: {
            //百度云
            const tempDOM = document.querySelector('div.wp-s-header__right');
            if (tempDOM) {
                tempDOM.insertBefore(app, tempDOM?.firstChild)
            } else {
                MessagePlugin.error('初始化出错,请刷新重试')
            }
        }break;
        case CloudInfoEnum.cloud115 : {
            //115云盘
            const temp = document.createElement('li')
            temp.append(app);
            document.querySelector('div.navigation-ceiling ul')?.append(temp);
        }break;
        case CloudInfoEnum.cloud123: {
            //123云盘
            document.querySelector('.ant-menu-light')?.append(app)
        }break;
        case CloudInfoEnum.cloudLanZou: {
            //蓝奏云
            document.querySelector('.mydisk_file_bar')?.append(app)
        }break;
        case CloudInfoEnum.cloudTianyi: {
            //天翼云
            document.querySelector('ul.nav-menu')?.append(app);
        }break;
    }
    return app;
}
