import { createApp } from 'vue';
import './style.css';
import 'tdesign-vue-next/es/style/index.css';
import App from './App.vue';
import {
    Button,
    Checkbox,
    Drawer,
    InputNumber,
    Progress,
    Radio,
    RadioButton,
    RadioGroup,
    Space,
    Textarea, Tooltip
} from 'tdesign-vue-next';


const app = createApp(App);
app.use(Button)
    .use(Drawer)
    .use(Radio)
    .use(Space)
    .use(RadioGroup)
    .use(RadioButton)
    .use(Textarea)
    .use(InputNumber)
    .use(Progress)
    .use(Checkbox)
    .use(Tooltip)
app.mount(
  (() => {
    const app = document.createElement('div');
    const url = window.location.href;
    if(url.startsWith('https://pan.baidu.com/disk/main')){
        //百度云
        const tempDOM = document.querySelector('div.wp-s-header__right');
        tempDOM.insertBefore(app,tempDOM.firstChild)
    }
    else if(url.startsWith('https://cloud.189.cn/web/main/')){
        //天翼云
        document.querySelector('ul.nav-menu')?.append(app);
    }
    else if(url.startsWith('https://115.com')){
        //115云盘
        const temp = document.createElement('li')
        temp.append(app);
        document.querySelector('div.navigation-ceiling ul')?.append(temp);
    }
    return app;
  })(),
);
