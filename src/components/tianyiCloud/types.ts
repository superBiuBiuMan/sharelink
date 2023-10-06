import {Ref} from "vue";
export enum ExpireTimeEnum {
    oneDay=1,
    sevenDay=7,
    forever=2099,
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

}

//选中文件信息
export interface SelectFileInfoList {
    id:string | number,//文件id
    fileName:string,//文件名称
    expireTime:ExpireTimeEnum,//分享过期时间
}

//后端所需参数
export interface BackNeedParamsTypes {
    noCache: number,
    fileId:number | string,
    expireTime: ExpireTimeEnum,
    shareType: '3',//固定值
}

//分享链接返回的数据
export interface ShareReturnInfoTypes {
    accessCode:string,//提取码
    accessUrl:string,//分享链接
    fileId:string,//文件id
    shareId:string,//分享人id
    url:string,//又一个链接,不知道干嘛的~
}

export type ShareInfoTypes  = Partial<ShareReturnInfoTypes> & SelectFileInfoList;


export type HandleBatchOperation = () => void;
export type HandleEnd = () => void;
export type CopyValue = () => void;
export type Download = () => void;
export type HandleTransformFormat = (info:ShareInfoTypes) => string;
export type HandleTransformShareParams = (params:SelectFileInfoList) => BackNeedParamsTypes;

export type UseTianyiCloud = () => {
    userOptions:Ref<UserOptions>
    handleBatchOperation:HandleBatchOperation,//批量分享
    handleTransformFormat:HandleTransformFormat,//分享展示信息转换为用户看的懂的信息
    handleTransformShareParams:HandleTransformShareParams,//用户参数转化为后端所需的分享参数
    handleEnd:HandleEnd,//终止操作
    copyValue:CopyValue,//复制
    download:Download,//下载
}
