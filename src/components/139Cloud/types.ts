import {Ref} from "vue";
//分享有效期
export enum ExpireTimeEnum {
    oneDay=1,
    sevenDay=2,
    forever=4,
}
//默认展示
export enum DefaultShowEnum {
    tile=2,//平铺,
    list=1,//列表
}
//用户配置分享参数
export interface UserOptions{
    //不同网盘变动的
    expiration:ExpireTimeEnum,//分享有效期
    displayStatus:DefaultShowEnum,//展示模式
    pwd:string,//随机提取码

    //固定的
    shareDelay:number,//分享延迟时间
    shareResultInfoList:ShareResultInfoList[],//分享结果信息
    shareProgress:number,//分享进度
    shareInfoUserSee:string,//用户看得懂的分享信息
    isSharing:boolean,//是否正在分享

    //存储计算的Basic值
    auth:string,
}

//用户配置分享参数转换后所需要的形式
export interface TransformUserOptionsObjType{
    period:number,//分享有效期
}
//需要传递给后端参数
export type GiveAfter = TransformUserOptionsObjType & {
    caIDLst:string[],//分享的文件夹
    coIDLst:string[],//分享的文件
    commonAccountInfo:{
        account:string,//账户名,一般是手机号
        accountType?:number,//账户类型?未知,可能普通用户是1
    },
    dedicatedName:string,//文件或文件夹名称
    encrypt:1,
    extInfo:{
        isWatermark:0,
        shareChannel?:'3001',
    },
    period:number,//分享有效期 1为1天 7为7天 不传则永久
    periodUnit:1,
    pubType:1,
    subLinkType:0,
    viewerLst:[],
}

//分享链接返回的数据
export interface ShareReturnInfoTypes {
    linkUrl:string,//分享链接
    passwd:string,//提取码
}

//整合存储所需信息,后端返回的链接或者提取码等
export interface ShareResultInfoList  {
    fileName:string,//文件名
    url:string,//分享链接
    pwd:string,//提取码
    timeCode:ExpireTimeEnum,//有效期代码
}

export type HandleBatchOperation = () => void;
export type HandleEnd = () => void;
export type CopyValue = () => void;
export type Download = () => void;
export type TransformInfoStyle = (info:ShareResultInfoList) => string;
export type TransformOptions = (params:UserOptions) => TransformUserOptionsObjType;
export type TransformResult = (result:any) => ShareReturnInfoTypes;
export type Init = () => void;
export type Use139Cloud = () => {
    init:Init,
    userOptions:Ref<UserOptions>,//分享相关配置,比如提取码,选中的文件信息
    handleBatchOperation:HandleBatchOperation,//点击批量分享

    transformResult:TransformResult,//转换后端返回的数据
    transformInfoStyle:TransformInfoStyle,//分享展示信息转换为用户看的懂的信息
    transformOptions:TransformOptions,//用户配置转换为网盘对应的配置

    handleEnd:HandleEnd,//结束后操作
    copyValue:CopyValue,//复制
    download:Download,//下载
}
