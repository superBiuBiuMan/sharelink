import {Ref} from "vue";
export enum ExpireTimeEnum {
    oneDay=1,//1天
    sevenDay=7,
    forever=-1,//永久
}



//分享链接返回的数据(只取有用的)
export interface ShareReturnInfoTypes {
    data?:{
        share_title?:string,//分享文件名,
        share_url?:string,//分享链接,
        share_ex_duration?:string,//分享有效期
        receive_code?:string,//提取码
    }
    error:string,//错误信息,为空则成功,否则返回失败信息
    state:boolean,// 成功返回true 失败返回false
}

export type ShareInfoTypes  = ShareReturnInfoTypes['data'] & {
        fileName:string,//文件名
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
export type DownloadExcel = () => void;
export type TransformExcelInfoData = (data:Array<ShareInfoTypes>) => Array<{ [key in string]: any }>;
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
    downloadExcel:DownloadExcel
}
