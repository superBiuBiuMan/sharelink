import {Ref} from "vue";
export enum ExpireTimeEnum {
    oneDay=1,//1天
    sevenDay=7,
    thirtyDay=30,
    forever=0,//永久
}



//分享链接返回的数据(只取有用的)
export interface ShareReturnInfoTypes {
    link:string,//链接
    errorno?:number,//0成功,2失败
    shareid?:number,//-1失败,成功返回分享id
    shorturl:string,

}


export type ShareInfoTypes  = Partial<ShareReturnInfoTypes> & {
        expireTime:string | number,//分享有效时间
        fileName:string,//文件名
        pwd:string,//四位提取码
}

export interface SelectFileInfoList {
    id:string | number,//文件id
    fileName:string,//文件名称
}

export type HandleBatchOperation = () => void;
export type HandleEnd = () => void;
export type CopyValue = () => void;
export type Download = () => void;
export type HandleTransformFormat = (info:ShareInfoTypes) => string;

export type Use115Cloud = () => {
    expireTime:Ref<ExpireTimeEnum>,//过期时间
    shareDelay:Ref<number>,//分享延迟时间
    shareInfo:Ref<Array<ShareInfoTypes>>,//分享展示信息(存储使用,不展示)
    shareInfoUserSee:Ref<string>,//用户看得懂的分享信息
    selectFileInfoList:Ref<Array<SelectFileInfoList>>,//选中的分享文件信息
    isSharing:Ref<boolean>,//是否正在分享
    shareProgress:Ref<number>,//分享进度


    handleBatchOperation:HandleBatchOperation,//批量分享
    handleTransformFormat:HandleTransformFormat,//分享展示信息转换为用户看的懂的信息
    handleEnd:HandleEnd,//终止操作
    copyValue:CopyValue,//复制
    download:Download,//下载
}
