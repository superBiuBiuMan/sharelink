import {createApp} from 'vue';
import './style.css';
import 'tdesign-vue-next/es/style/index.css';
import App from './App.vue';
import TDesign from "./utils/TDesign";
import Pinia from "./store";
import Mount from "./utils/Mount";
const bootstrap = () => {
    const app = createApp(App);
    //注册pinia
    app.use(Pinia)
    //注册TDsign
    app.use(TDesign)
    //挂载
    app.mount(Mount());
}


void bootstrap();


