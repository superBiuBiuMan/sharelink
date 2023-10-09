import {Ref} from "vue";
import {Dayjs} from "dayjs";
export enum ExpireTimeEnum {
    forever=-1,
    sevenDay=7,
    thirtyDay=30,
}
export enum PwdEnum {
    no,
    yes,
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
    pwd:string,
    pwdType:PwdEnum,//链接是否有提取码
}

//选中文件信息
export interface SelectFileInfoList {
    id:string | number,//文件id
    driveId:string,
    fileName:string,//文件名称
    expireTime:Dayjs | string,//分享过期时间
    pwd:string,
    expireTimeEnum:ExpireTimeEnum,//后面回显使用
}

//分享链接返回的数据
export interface ShareReturnInfoTypes {
    share_url:string,//分享链接,不包括提取码
    share_name:string,//分享文件名
    display_message:string,//错误信息提示
}

export type ShareInfoTypes  = Partial<ShareReturnInfoTypes> & SelectFileInfoList;


export type HandleBatchOperation = () => void;
export type HandleEnd = () => void;
export type CopyValue = () => void;
export type Download = () => void;
export type HandleTransformFormat = (info:ShareInfoTypes) => string;

export type UseAliCloud = () => {
    userOptions:Ref<UserOptions>
    handleBatchOperation:HandleBatchOperation,//批量分享
    handleTransformFormat:HandleTransformFormat,//分享展示信息转换为用户看的懂的信息
    handleEnd:HandleEnd,//终止操作
    copyValue:CopyValue,//复制
    download:Download,//下载
}
