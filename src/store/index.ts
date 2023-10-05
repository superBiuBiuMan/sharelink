import { createPinia } from 'pinia'
import { App } from "vue";
import CloudInfoStore from "./cloudInfo"

const store = createPinia()
export default (app:App) => {
    app.use(store)
}
export const cloudInfoStore = CloudInfoStore(store);
//初始化网盘信息
cloudInfoStore.initCloudInfo();
