import {defineStore} from "pinia";
import {CloudInfoEnum, cloudUrlInfo} from "../infoConfig";
import {findCloudProvider} from "../utils";

export interface CloudInfoStateTypes {
    currentCloud:CloudInfoEnum | string
}


export default defineStore({
    id:'cloudinfo',
    state: ():CloudInfoStateTypes => ({
        currentCloud:'',//当前的网盘
    }),
    actions:{
        //初始化网盘信息
        initCloudInfo(){
            const url = window.location.href;
            //判断所属网盘
            //@ts-ignore
            this.currentCloud = CloudInfoEnum[findCloudProvider(url,cloudUrlInfo) ?? ''];
        }
    }
})
