import {Ref} from "vue";
export type Options<T> = {label:string,value:T | number}[]
//分享天数
export enum ExpireTimeEnum {
    sevenDay=3,//七天
    thirty=4,//30天
    sixty=5,//60天
    halfYear=7,//180天
    forever=1,//永久
    oneDay=2,//1天
}
//提取次数
export enum ExtractEnum {
    //UC网盘提取次数为null代表不限制,但是枚举又不能传入null...
    // forever=null,
    forever=-1,
    one = 1,
    five=5,
    ten=10,
    fifty=50,
    hundred=100,
}

//用户配置项
export interface UserOptions {
    expireTimeOptions:Options<ExpireTimeEnum>,
    expireTime:ExpireTimeEnum,//过期时间
    extractOptions:Options<ExtractEnum>,
    extractNumber:ExtractEnum,//提取次数
    isPassword:boolean,//是否有密码 true为有, false为没有
    selfPwd:string,//自定义密码

    shareTopic:string,//分享主题(最多30个字)

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
    extractNumber:ExtractEnum | null,//提取次数
    passcode:string,//提取码
    title:string,//分享主题
}

//分享链接返回的数据
export interface ShareReturnInfoTypes {
   share_url:string,//分享链接
}

export type ShareInfoTypes  = ShareReturnInfoTypes & SelectFileInfoList;


export type HandleBatchOperation = () => void;
export type HandleEnd = () => void;
export type CopyValue = () => void;
export type Download = () => void;
export type DownloadExcel = () => void;
export type HandleTransformFormat = (info:ShareInfoTypes) => string;
export type TransformExcelInfoData = (data:Array<ShareInfoTypes>) => Array<{ [key in string]: any }>;
export type UseUcCloud = () => {
    userOptions:Ref<UserOptions>
    handleBatchOperation:HandleBatchOperation,//批量分享
    handleTransformFormat:HandleTransformFormat,//分享展示信息转换为用户看的懂的信息
    handleEnd:HandleEnd,//终止操作
    copyValue:CopyValue,//复制
    download:Download,//下载
    downloadExcel:DownloadExcel,//下载为Excel
}
