//挂载方式
import {cloudInfoStore} from "../../store";
import {CloudInfoEnum} from "../../infoConfig";
import {observeDOMChanges} from "../index";

export default () => {
    const app = document.createElement('div');
    //判断所属网盘
    switch (cloudInfoStore.currentCloud) {
        case CloudInfoEnum.cloudBaidu: {
            observeDOMChanges('body',() => {
                //百度云
                const tempDOM = document.querySelector('div.wp-s-header__right');
                tempDOM?.insertBefore(app, tempDOM?.firstChild)
            })
        }break;
        case CloudInfoEnum.cloud115 : {
            //115云盘 iframe框架
            setTimeout(() => {
                const temp = document.createElement('li')
                app.style.cssText = `
                    margin-top: 12px;
                    margin-left: 10px;
                `
                temp.append(app);
                document.querySelector('div.navigation-ceiling ul')?.append(temp);
            },1000)
        }break;
        case CloudInfoEnum.cloud123: {
            //123云盘
            observeDOMChanges('body',() => {
                app.style.textAlign = 'center';
                document.querySelector('.ant-menu-light')?.append(app)
            })
        }break;
        case CloudInfoEnum.cloudLanZou: {
            //蓝奏云 iframe框架
            setTimeout(() => {
                app.style.cssText = `
            margin-top: -2px;
        `
                document.querySelector('.toum')?.append(app)
            },2000)
        }break;
        case CloudInfoEnum.cloudTianyi: {
            //天翼云
            observeDOMChanges('body',() => {
                document.querySelector('ul.nav-menu')?.append(app);
            })
        }break;
        case CloudInfoEnum.cloudQuark: {
            //夸克网盘
            observeDOMChanges('body',() => {
                setTimeout(() => {
                    const tempDOM = document.querySelector('.file-search-box');
                    app.style.cssText = `
                margin-right:200px;
            `
                    tempDOM?.parentNode?.insertBefore(app,tempDOM);
                },1000)
            })
        }break;
        case CloudInfoEnum.cloud139: {
            //中国移动网盘
            observeDOMChanges('.document_main_warp',() => {
                const tempDOM = document.querySelector('.document_top_upload_button');
                app.style.cssText = `
                display:inline-block;
                margin-top:20px;
            `
                tempDOM?.parentNode?.append(app,tempDOM);
            })
        }break;
        case CloudInfoEnum.cloudXun:{
            //迅雷网盘
            setTimeout(() => {
                //迅雷网盘
                const tempDOM = document.querySelector('.pan-list-menu');
                app.style.cssText = `
                    margin-left: 10px;  
                    margin-top: -2px;
                 `
                tempDOM?.append(app);
            },1000)
        }break;
        case CloudInfoEnum.cloudAli: {
            //阿里云盘
            observeDOMChanges('body',() => {
                const tempDOM = document.querySelector("div[class^='nav-tab-item--']");
                const iterator = tempDOM?.classList;
                let name;
                //@ts-ignore;
                for (const value of iterator) {
                    if(value.startsWith('nav-tab-item')) name = value;
                }
                if(name){
                    app.classList.add(name)
                    document.querySelector("div[class^='nav-tab-content--']")?.append(app)
                }else{
                    document.body.append(app);
                }
            })
        }break;
    }
    return app;
}
