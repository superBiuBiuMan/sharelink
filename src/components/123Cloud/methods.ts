import {
    CopyValue,
    DefaultShowEnum,
    Download,
    ExpireTimeEnum,
    GiveAfter,
    HandleBatchOperation,
    HandleEnd, Init,
    PwdEnum,
    ShareResultInfoList,
    TransformInfoStyle,
    TransformOptions,
    TransformResult,
    Use123Cloud,
    UserOptions,
} from "./types";
import {MessagePlugin} from 'tdesign-vue-next';
import {nextTick, ref} from "vue";
import {CopyValueToClipBoard, DownloadTxt, generateRandomString, get123CloudSecret, getDate123Cloud} from "../../utils";
import {ShareDOMSelect} from "../../infoConfig";
import axios from "axios";
import { proxy } from "ajax-hook";

export const use123Cloud:Use123Cloud = () => {
    const userOptions = ref<UserOptions>({
        expiration:ExpireTimeEnum.forever,
        displayStatus:DefaultShowEnum.list,
        pwdType:PwdEnum.yes,
        pwd:'',//自定义提取码或随机提取码
        shareDelay:1000,
        shareProgress:0,
        selectFileInfoList:[],
        shareResultInfoList:[],
        listData:[],
        shareInfoUserSee:'',
        isSharing:false,
        lastUrl:'',//上一次数据请求的网站,做缓存使用,发现不一致则清空listData
    })
    const init:Init = () => {
        proxy({
            //请求成功后进入
            onResponse: (response, handler) => {
                //@ts-ignore
                if(handler.xhr.config.url.startsWith('/a/api/file/list/new')){
                    const data = response.response ? JSON.parse(response.response)?.data?.InfoList ?? [] : [];
                    if(userOptions.value.lastUrl !== window.location.href){
                        //清空原有listData
                        userOptions.value.listData = data;
                    }else{
                        //否者滚动加载数据
                        userOptions.value.listData = [...userOptions.value.listData,...data]
                    }
                    userOptions.value.lastUrl = window.location.href;

                }
                handler.next(response)
            }
        })
    }
    init();
    const transformOptions:TransformOptions = (params:UserOptions) => {
        let sharePwd = '';
        if(params.pwdType === PwdEnum.yes){
            sharePwd =  generateRandomString(4)
        }else if(params.pwdType === PwdEnum.self){
            sharePwd = params.pwd;
        }
        let expiration;
        switch (params.expiration) {
            case ExpireTimeEnum.oneDay: expiration = getDate123Cloud(1);break;
            case ExpireTimeEnum.sevenDay: expiration = getDate123Cloud(7);break;
            case ExpireTimeEnum.thirtyDay: expiration = getDate123Cloud(30);break;
            case ExpireTimeEnum.forever: expiration = getDate123Cloud(99);break;
        }
        return {
            displayStatus:params.displayStatus,
            sharePwd,
            expiration,
        }
    }
    const transformInfoStyle:TransformInfoStyle = (info) => {
        switch (info.timeCode) {
            case ExpireTimeEnum.oneDay: {
                return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.pwd ?? '为空'} 分享有效时间: 1天`;
            }
            case ExpireTimeEnum.sevenDay: {
                return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.pwd ?? '为空'} 分享有效时间: 7天`;
            }
            case ExpireTimeEnum.thirtyDay: {
                return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.pwd ?? '为空'} 分享有效时间: 30天`;
            }
            case ExpireTimeEnum.forever: {
                return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.pwd ?? '为空'} 分享有效时间: 永久`;
            }
            default: {
                return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.pwd ?? '为空'} 分享有效时间: 未知`;
            }
        }
    }
    const transformResult:TransformResult = (result:any) => {
        const { data } = result || {};
        return {
            ShareKey:data?.ShareKey ?? '分享失败',
            message:result.message ?? '',
            code:result.code,
        }
    }
    const handleBatchOperation:HandleBatchOperation = async () => {
        const { selectFileInfoList } = userOptions.value;
        if(!selectFileInfoList.length) {
            return MessagePlugin.warning('请选择要分享的文件!')
        }
        //开始分享
        userOptions.value.isSharing = true;
        //遍历发送
        for(let fileInfo of selectFileInfoList){
            const data:GiveAfter = {
                ...transformOptions(userOptions.value),
                driveId:0,
                event:"shareCreate",
                fileIdList:<number>fileInfo.FileId,//文件id
                fileNum:1,//文件数量,
                operatePlace:1,
                renameVisible:false,
                shareModality:2,
                shareName:fileInfo.FileName,//分享文件名
            }
            const randomParams = get123CloudSecret();
            const { data:backData } = await axios({
                method:'post',
                url:'https://www.123pan.com/a/api/share/create',
                params:{
                    [randomParams[0]]:randomParams[1],
                },
                data,
                headers:{
                    'Content-Type':'application/json;charset=UTF-8',
                    'Authorization': 'Bearer ' + localStorage.getItem('authorToken')?.slice(1,-1),
                    'LoginUuid':localStorage.getItem('LoginUuid')?.slice(1,-1),
                    'platform':'web',
                }
            }).catch(() => ({data:{}}))
            const backResult = transformResult(backData);
            let tempData:ShareResultInfoList = {
                fileName:fileInfo.FileName,
                url:'https://www.123pan.com/s/' + backResult.ShareKey,
                pwd:data.sharePwd,
                time:data.expiration,
                timeCode:userOptions.value.expiration,
            }
            //存储分享信息以便计算进度条
            userOptions.value.shareResultInfoList.push(tempData)
            //生成用户观看数据
            userOptions.value.shareInfoUserSee+= (transformInfoStyle(tempData) + '\n')
            //进度条
            userOptions.value.shareProgress = Math.floor((userOptions.value.shareResultInfoList.length / userOptions.value.selectFileInfoList.length) * 100 );
            //等待时间
            await new Promise<void>(resolve => {
                setTimeout(() => {
                    resolve()
                },userOptions.value.shareDelay)
            })
        }
        //分享完成
        userOptions.value.shareProgress = 100;//以防万一~
        userOptions.value.isSharing = false;
        await MessagePlugin.success('批量分享成功,请自行查看结果');
    }

    const handleEnd:HandleEnd = () => {
        //关闭窗口执行操作
        userOptions.value.shareResultInfoList = [];
        userOptions.value.selectFileInfoList = [];
        userOptions.value.shareInfoUserSee = '';
        userOptions.value.shareProgress = 0;
    }
    const copyValue:CopyValue = () => {
        CopyValueToClipBoard(userOptions.value.shareInfoUserSee+"").then(() => {
            MessagePlugin.success('复制成功');
        }).catch(() => {
            MessagePlugin.warning('复制到剪贴板失败,可能是浏览器不支持该操作');
        })
    }
    const download:Download = () => {
        DownloadTxt('123盘批量分享' + Date.now(),userOptions.value.shareInfoUserSee)
    }
    return {
        init,
        userOptions,
        transformOptions,
        transformInfoStyle,
        transformResult,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
    }
}
