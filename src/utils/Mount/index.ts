//挂载方式
import {cloudInfoStore} from "../../store";
import {CloudInfoEnum} from "../../infoConfig";
import {MessagePlugin} from "tdesign-vue-next";

export default () => {
    const app = document.createElement('div');
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
            app.style.textAlign = 'center';
            //123云盘
            document.querySelector('.ant-menu-light')?.append(app)
        }break;
        case CloudInfoEnum.cloudLanZou: {
            app.style.cssText = `
                padding-top: 2px;
            `
            //蓝奏云
            document.querySelector('.mydisk_file_bar')?.append(app)
        }break;
        case CloudInfoEnum.cloudTianyi: {
            //天翼云
            document.querySelector('ul.nav-menu')?.append(app);
        }break;
        case CloudInfoEnum.cloudQuark: {
            //夸克网盘
                const tempDOM = document.querySelector('.file-search-box');
                if(tempDOM){
                    app.style.cssText = `
                    margin-right:200px;
                `
                    tempDOM?.parentNode?.insertBefore(app,tempDOM);
                }else{
                    MessagePlugin.error('初始化出错,请刷新重试')
                }
        }break;
    }
    return app;
}
