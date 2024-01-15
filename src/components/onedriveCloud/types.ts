import {Ref} from "vue";
//用户配置分享参数
export interface UserOptions{
    //固定的
    shareDelay:number,//分享延迟时间
    shareResultInfoList:ShareResultInfoList[],//分享结果信息
    shareProgress:number,//分享进度
    shareInfoUserSee:string,//用户看得懂的分享信息
    isSharing:boolean,//是否正在分享
}

export interface ShareResultInfoList  {
    fileName:string,//文件名
    url:string,//分享链接
}

export enum CopyValueEnum {
    shareLink,//分享链接
    extraLink,//直链
}

export type HandleBatchOperation = () => void;
export type HandleBatchExtraLink = () => void;
export type HandleEnd = () => void;
export type CopyValue = (type:CopyValueEnum) => void;
export type Download = (type:CopyValueEnum) => void;
export type DownloadExcel = (type:CopyValueEnum) => void;
export type UseOnedriveCloud = () => {
    userOptions:Ref<UserOptions>,//分享相关配置,比如提取码,选中的文件信息
    handleBatchOperation:HandleBatchOperation,//点击批量分享



    handleEnd:HandleEnd,//结束后操作
    copyValue:CopyValue,//复制
    download:Download,//下载
    downloadExcel:DownloadExcel,
}
