import {defineStore} from "pinia";
import {CloudInfoEnum, cloudUrlInfo} from "../infoConfig";
import {findCloudProvider} from "../utils";

export interface CloudInfoStateTypes {
    currentCloud:CloudInfoEnum | string
    cloudName:string,
    cloudKey:keyof typeof CloudInfoEnum | string,
}


export default defineStore({
    id:'cloudinfo',
    state: ():CloudInfoStateTypes => ({
        currentCloud:'',//当前的网盘对应索引值
        cloudName:'',//网盘名字
        cloudKey:''//网盘key
    }),
    actions:{
        //初始化网盘信息
        initCloudInfo(){
            const url = window.location.href;
            //判断所属网盘
            const cloudKey = findCloudProvider(url,cloudUrlInfo) ?? '';
            if(!cloudKey){
                throw new Error('初始化网盘信息出错')
            }
            this.cloudKey = cloudKey; //eg:cloudBaidu

            this.currentCloud = CloudInfoEnum[cloudKey as keyof typeof CloudInfoEnum];
            switch (this.currentCloud) {
                case CloudInfoEnum.cloudLanZou: {
                    this.cloudName = '蓝奏云';
                }break;
                case CloudInfoEnum.cloudTianyi: {
                    this.cloudName = '天翼云';
                }break;
                case CloudInfoEnum.cloudBaidu: {
                    this.cloudName = '百度云';
                }break;
                case CloudInfoEnum.cloud115: {
                    this.cloudName = '115云';
                }break;
                case CloudInfoEnum.cloud123: {
                    this.cloudName = '123云';
                }break;
                case CloudInfoEnum.cloudQuark:{
                    this.cloudName = '夸克网盘';
                }break;
                case CloudInfoEnum.cloud139:{
                    this.cloudName = '中国移动(139)网盘'
                }break;
                case CloudInfoEnum.cloudXun:{
                    this.cloudName = '迅雷网盘'
                }break;
                case CloudInfoEnum.cloudAli:{
                    this.cloudName = '阿里云盘'
                }break;
                default: this.cloudName = '未知网盘';
            }
        }
    }
})
