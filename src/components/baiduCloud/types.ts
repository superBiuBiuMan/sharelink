import {Ref} from "vue";
export enum ExpireTimeEnum {
    oneDay=1,//1天
    sevenDay=7,
    thirtyDay=30,
    forever=0,//永久
}
export enum HasPwdEnum {
    random,//随机提取码
    self,//自定义提取码
}

export interface UserOptions {
    expireTime:ExpireTimeEnum,//过期时间
    shareDelay:number,//分享延迟时间
    shareInfo:Array<ShareInfoTypes>,//分享展示信息(存储使用,不展示)
    shareInfoUserSee:string,//用户看得懂的分享信息
    selectFileInfoList:Array<SelectFileInfoList>,//选中的分享文件信息
    isSharing:boolean,//是否正在分享
    shareProgress:number,//分享进度
    pwdType:HasPwdEnum,//是否随机提取码
    pwd:string,//随机提取码或自己提取码
}

//已选文件信息
export interface SelectFileInfoList {
    id:string | number,//文件id
    fileName:string,//文件名称
    pwd:string,//自定义提取码或随机提取码
    expireTime:string | number,//分享有效期
}

//分享链接返回的数据(只取有用的)
export interface ShareReturnInfoTypes {
    link:string,//链接
    errorno?:number,//0成功,2失败
    shareid?:number,//-1失败,成功返回分享id
    shorturl:string,
}


export type ShareInfoTypes  = Partial<ShareReturnInfoTypes> & SelectFileInfoList;



export type HandleBatchOperation = () => void;
export type HandleEnd = () => void;
export type CopyValue = () => void;
export type Download = () => void;
export type DownloadExcel = () => void;
export type HandleTransformFormat = (info:ShareInfoTypes) => string;
export type TransformExcelInfoData = (data:Array<ShareInfoTypes>) => Array<{ [key in string]: any }>;
export type UseBaiduCloud = () => {
    userOptions:Ref<UserOptions>,//用户配置项

    handleBatchOperation:HandleBatchOperation,//批量分享
    handleTransformFormat:HandleTransformFormat,//分享展示信息转换为用户看的懂的信息
    handleEnd:HandleEnd,//终止操作
    copyValue:CopyValue,//复制
    download:Download,//下载
    downloadExcel:DownloadExcel
}
