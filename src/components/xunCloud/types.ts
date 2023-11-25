import {Ref} from "vue";
export type Options<T> = {label:string,value:T | number}[]
export enum ExpireTimeEnum {
    oneDay=1,
    twoDay=2,
    threeDay,
    fourDay,
    fiveDay,
    sixDay,
    sevenDay=7,
    forever=-1,
}
//提取次数
export enum ExtractEnum {
    forever=-1,
    One=1,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve,
    Thirteen,
    Fourteen,
    Fifteen,
    Sixteen,
    Seventeen,
    Eighteen,
    Nineteen,
    Twenty
}

//用户配置项
export interface UserOptions {
    expireTimeOptions:Options<ExpireTimeEnum>,
    expireTime:ExpireTimeEnum,//过期时间
    extractOptions:Options<ExtractEnum>,
    extractNumber:ExtractEnum,//提取次数
    allowQuickAccess:boolean,//是否允许快速访问分享链接

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
    extractNumber:ExtractEnum,//提取次数
}

//分享链接返回的数据
export interface ShareReturnInfoTypes {
   share_text:string,//链接:xxxx 提取码:xxx
   share_url:string,//分享链接
   pass_code:string,//提取码
   error_description:string,//错误信息描述
}

export type ShareInfoTypes  = Partial<ShareReturnInfoTypes> & SelectFileInfoList;


export type HandleBatchOperation = () => void;
export type HandleEnd = () => void;
export type CopyValue = () => void;
export type Download = () => void;
export type HandleTransformFormat = (info:ShareInfoTypes) => string;
export type TransformExcelInfoData = (data:Array<ShareInfoTypes>) => Array<{ [key in string]: any }>;

export type DownloadExcel = () => void;

export type UseXunCloud = () => {
    userOptions:Ref<UserOptions>
    handleBatchOperation:HandleBatchOperation,//批量分享
    handleTransformFormat:HandleTransformFormat,//分享展示信息转换为用户看的懂的信息
    handleEnd:HandleEnd,//终止操作
    copyValue:CopyValue,//复制
    download:Download,//下载
    downloadExcel:DownloadExcel,
}
