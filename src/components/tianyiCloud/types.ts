import {Ref} from "vue";
export enum ExpireTimeEnum {
    oneDay=1,
    sevenDay=7,
    forever=2099,
}



//分享链接返回的数据
export interface ShareReturnInfoTypes {
    accessCode:string,//提取码
    accessUrl:string,//分享链接
    fileId:string,//文件id
    shareId:string,//分享人id
    url:string,//又一个链接,不知道干嘛的~
}

export type ShareInfoTypes  = Partial<ShareReturnInfoTypes> & {
        expireTime:string | number,//分享有效时间
        fileName:string,
}

export interface SelectFileInfoList {
    id:string | number,//文件id
    fileName:string,//文件名称
}

export type HandleChangeTime = (value:any) => void;
export type HandleBatchOperation = () => void;
export type HandleEnd = () => void;
export type CopyValue = () => void;
export type Download = () => void;
export type HandleTransformFormat = (info:ShareInfoTypes) => string;

export type UseTianyiCloud = () => {
    expireTime:Ref<ExpireTimeEnum>,//过期时间
    shareDelay:Ref<number>,//分享延迟时间
    shareInfo:Ref<Array<ShareInfoTypes>>,//分享展示信息(存储使用,不展示)
    shareInfoUserSee:Ref<string>,//用户看得懂的分享信息
    selectFileInfoList:Ref<Array<SelectFileInfoList>>,//选中的分享文件信息
    isSharing:Ref<boolean>,//是否正在分享
    shareProgress:Ref<number>,//分享进度


    handleChangeTime:HandleChangeTime,//变更时间
    handleBatchOperation:HandleBatchOperation,//批量分享
    handleTransformFormat:HandleTransformFormat,//分享展示信息转换为用户看的懂的信息
    handleEnd:HandleEnd,//终止操作
    copyValue:CopyValue,//复制
    download:Download,//下载
}
