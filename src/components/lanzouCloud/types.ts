import {Ref} from "vue";
import {ListData} from "../../modules/lanzouCloud/listModule/types";

//是否有提取码
export enum PwdEnum {
    no,
    yes,//有提取码
    self   ,//自定义提取码
}

export enum TaskEnum {
    file=18,//获取分享链接(文件夹)
    share=22,//获取分享链接(普通文件)
    setCodeFile=23,//设置(取消)文件提取码
    setCodeFolder=16,//设置(取消)文件夹提取码
    reqFolderList=47,//请求获取文件夹列表(蓝奏云没对文件夹分页,一次性就返回了)
    reqFileList=5,//请求获取文件列表(需要带上pg属性);
}

//用户配置分享参数
export interface UserOptions{
    //不同网盘变动的
    pwdType:PwdEnum,//是否有提取码
    pwd:string,//自定义密码或随机提取码
    listData:any[],//请求过来的文件数据
    lastFolderData:any[],//上一次的文件夹信息

    //固定的
    shareDelay:number,//分享延迟时间
    selectFileInfoList:ListData[],//选中的分享文件信息
    shareResultInfoList:ShareResultInfoList[],//分享结果信息
    shareProgress:number,//分享进度
    shareInfoUserSee:string,//用户看得懂的分享信息
    isSharing:boolean,//是否正在分享
}

//分享链接返回的数据
export interface ShareReturnInfoTypes {
    //通用
    is_newd:string,//分享前缀
    pwd:string,//后端默认填充的随机提取码

    //文件分享后返回数据
    f_id:string,//分享后缀

    //文件夹分享后返回的数据
    new_url:string,//完整链接
    name:string,//文件夹名
}

//整合存储所需信息,后端返回的链接或者提取码等
export interface ShareResultInfoList  {
    fileName:string,//文件名
    url:string,//分享链接
    pwd:string,//提取码
    time?:string | number | Date,//有效期
}

export type HandleBatchOperation = () => void;
export type HandleEnd = () => void;
export type CopyValue = () => void;
export type Download = () => void;
export type TransformInfoStyle = (info:ShareResultInfoList) => string;
export type TransformResult = (result:any) => ShareReturnInfoTypes;
export type TransformExcelInfoData = (data:Array<ShareResultInfoList>) => Array<{ [key in string]: any }>;

export type DownloadExcel = () => void;
export type Init = () => void;
export type UselanzouCloud = () => {
    userOptions:Ref<UserOptions>,//分享相关配置,比如提取码,选中的文件信息
    handleBatchOperation:HandleBatchOperation,//点击批量分享

    init:Init,//初始化列表数据

    transformResult:TransformResult,//转换后端返回的数据
    transformInfoStyle:TransformInfoStyle,//分享展示信息转换为用户看的懂的信息

    handleEnd:HandleEnd,//结束后操作
    copyValue:CopyValue,//复制
    download:Download,//下载
    downloadExcel:DownloadExcel,
}
