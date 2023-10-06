import {Ref} from "vue";
//分享有效期
export enum ExpireTimeEnum {
    oneDay=1,
    sevenDay=2,
    thirtyDay=3,
    forever=4,
}
//默认展示
export enum DefaultShowEnum {
    tile=2,//平铺,
    list=1,//列表
}

//是否有提取码
export enum PwdEnum {
    no,
    yes,//有提取码
    self   ,//自定义提取码
}
//选中分享文件返回的数据
export interface SelectedRows {
    "FileId": number,
    "FileName": string,//文件名
    "Type": number,
    "Size": number,
    "ContentType": string,
    "S3KeyFlag": string,
    "CreateAt": string, //创建时间
    "UpdateAt": string,//更新时间
    "Hidden": boolean,
    "Etag": string,
    "Status": number,
    "ParentFileId": number,
    "Category": number,
    "PunishFlag": number,
    "ParentName": string,
    "DownloadUrl": string,
    "AbnormalAlert": number,
    "Trashed": boolean,
    "TrashedExpire": string
    "TrashedAt": string,
    "StorageNode": string,
    "DirectLink": number,
    "AbsPath": string,
    "EnableAppeal": number,
    "ToolTip": string,
    "RefuseReason": number,
    "isenter": boolean,
    "keys": number,
}

//用户配置分享参数
export interface UserOptions{
    //不同网盘变动的
    expiration:ExpireTimeEnum,//分享有效期
    displayStatus:DefaultShowEnum,//展示模式
    pwdType:PwdEnum,//是否有提取码
    pwd:string,//自定义密码或随机提取码

    //固定的
    shareDelay:number,//分享延迟时间
    shareResultInfoList:ShareResultInfoList[],//分享结果信息
    shareProgress:number,//分享进度
    shareInfoUserSee:string,//用户看得懂的分享信息
    isSharing:boolean,//是否正在分享
}

//用户配置分享参数转换后所需要的形式
export interface TransformUserOptionsObjType{
    displayStatus:DefaultShowEnum,//展示模式
    sharePwd:string,//提取码
    expiration:Date | string,//分享有效期
}
//需要传递给后端参数
export type GiveAfter = TransformUserOptionsObjType & {
    driveId:0,
    event:"shareCreate",
    fileIdList:number | string,//文件id
    fileNum:number,//文件数量,
    operatePlace:1,
    renameVisible:false,
    shareModality:2,
    shareName:string,//分享文件名
}

//分享链接返回的数据
export interface ShareReturnInfoTypes {
    ShareKey:string,//分享链接,不带网站前缀
    message:string,//信息,成功则为'OK',否则是失败信息
    code:number,//0为成功,其他不知道
}

//整合存储所需信息,后端返回的链接或者提取码等
export interface ShareResultInfoList  {
    fileName:string,//文件名
    url:string,//分享链接
    pwd:string,//提取码
    time:string | number | Date,//有效期
    timeCode:ExpireTimeEnum,//有效期代码
}

export type HandleBatchOperation = () => void;
export type HandleEnd = () => void;
export type CopyValue = () => void;
export type Download = () => void;
export type TransformInfoStyle = (info:ShareResultInfoList) => string;
export type TransformOptions = (params:UserOptions) => TransformUserOptionsObjType;
export type TransformResult = (result:any) => ShareReturnInfoTypes;
export type Use123Cloud = () => {
    userOptions:Ref<UserOptions>,//分享相关配置,比如提取码,选中的文件信息
    handleBatchOperation:HandleBatchOperation,//点击批量分享

    transformResult:TransformResult,//转换后端返回的数据
    transformInfoStyle:TransformInfoStyle,//分享展示信息转换为用户看的懂的信息
    transformOptions:TransformOptions,//用户配置转换为网盘对应的配置

    handleEnd:HandleEnd,//结束后操作
    copyValue:CopyValue,//复制
    download:Download,//下载
}
