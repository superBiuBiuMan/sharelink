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
    //天翼云
    //document.querySelector('ul.nav-menu')?.append(app);

    //微云
    //document.querySelector('div.mod-nav')?.append(app);

    //百度云
    const tempDOM = document.querySelector('div.wp-s-header__right');
    tempDOM.insertBefore(app,tempDOM.firstChild)
    //document.body.append(app);
    return app;
  })(),
);
