import {Ref} from "vue";
export enum ExpireTimeEnum {
    forever=1,
    oneDay,
    sevenDay,
    thirtyDay,
}
export enum HasPwd {
    no,
    yes,
}

export enum UrlTypeEnum {
    noPwd=1,//有提取码
    hasPwd=2//无提取码
}

//用户配置项
export interface UserOptions {
    expireTime:ExpireTimeEnum,//过期时间
    shareDelay:number,//分享延迟时间
    isSharing:boolean,//是否正在分享
    shareProgress:number,//分享进度
    selectFileInfoList:Array<SelectFileInfoList>,//选中的分享文件信息
    shareInfo:Array<ShareInfoTypes>,//分享展示信息(存储使用,不展示)
    shareInfoUserSee:string,//用户看得懂的分享信息
    pwdType:HasPwd,
}

//选中文件信息
export interface SelectFileInfoList {
    id:string | number,//文件id
    fileName:string,//文件名称
    expireTime:ExpireTimeEnum,//分享过期时间
    pwd:string,//随机提取码
}


export type ShareInfoTypes  = SelectFileInfoList & {
    url:string,//分享链接
}


export type HandleBatchOperation = () => void;
export type HandleEnd = () => void;
export type CopyValue = () => void;
export type Download = () => void;
export type HandleTransformFormat = (info:ShareInfoTypes) => string;

export type UsequarkCloud = () => {
    userOptions:Ref<UserOptions>
    handleBatchOperation:HandleBatchOperation,//批量分享
    handleTransformFormat:HandleTransformFormat,//分享展示信息转换为用户看的懂的信息
    handleEnd:HandleEnd,//终止操作
    copyValue:CopyValue,//复制
    download:Download,//下载
}
