import {
    CopyValue,
    DefaultShowEnum,
    Download,
    ExpireTimeEnum,
    GiveAfter,
    HandleBatchOperation,
    HandleEnd,
    ShareResultInfoList,
    TransformInfoStyle,
    TransformOptions,
    TransformResult,
    Use139Cloud,
    UserOptions,
    Init,
} from "./types";
import {MessagePlugin} from 'tdesign-vue-next';
import {ref} from "vue";
import {CopyValueToClipBoard, DownloadTxt, get123CloudSecret} from "../../utils";
import axios from "axios";
import {cloudInfoStore} from "../../store";

export const use139Cloud:Use139Cloud = () => {
    const userOptions = ref<UserOptions>({
        expiration:ExpireTimeEnum.forever,
        displayStatus:DefaultShowEnum.list,
        pwd:'',//自定义提取码或随机提取码
        shareDelay:500,
        shareProgress:0,
        shareResultInfoList:[],
        shareInfoUserSee:'',
        isSharing:false,
        auth:'',//分享的Authorization
    })
    const init:Init = () => {
        let t = "authorization";
        let e = t + "=", a = document.cookie.split(";"), n = 0;
        for (; n < a.length; n++) {
            let o = a[n].trim();
            if (0 == o.indexOf(e))
                userOptions.value.auth = o.substring(e.length, o.length);
        }
    }
    init();
    const transformOptions:TransformOptions = (params:UserOptions) => {
        let period;
        switch (params.expiration) {
            case ExpireTimeEnum.oneDay:period = 1;break;
            case ExpireTimeEnum.sevenDay:period = 7;break;
            case ExpireTimeEnum.forever:period = null;break;
        }
        return {
            period,
        }
    }
    const transformInfoStyle:TransformInfoStyle = (info) => {
        let time;
        switch (info.timeCode){
            case ExpireTimeEnum.oneDay: time = '1天';break;
            case ExpireTimeEnum.sevenDay: time = '7天';break;
            case ExpireTimeEnum.forever: time = '永久';break;
            default: time = '未知';
        }
        return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.pwd ?? '为空'} 分享有效时间: ${time}`;
    }
    const transformResult:TransformResult = (result:any) => {
       const list:any[] = result?.data?.getOutLinkRes?.getOutLinkResSet ?? [];
       return {
           linkUrl:list?.[0]?.linkUrl ?? '',
           passwd:list?.[0]?.passwd ?? '',
       }
    }
    const handleBatchOperation:HandleBatchOperation = async () => {
        //@ts-ignore
        const selectList:any[] = document.querySelector('.main_file_list')?.__vue__?.selectList ?? [];
        const selectFileInfoList = selectList?.map(({ item }:{ item:any }) => ({
            fileName:item?.contentName ? item?.contentName : item?.catalogName,
            id:item?.contentID ? item?.contentID : item?.catalogID,
            owner:item?.owner ?? '',//分享用得到
            catalogType:item?.contentID ? 0 : 1,//0代表文件分享 1代表文件夹分享
        })) ?? [];
        //选中数据
        if(!selectFileInfoList.length){
            return MessagePlugin.warning('请选择要分享的文件!')
        }
        //开始分享
        userOptions.value.isSharing = true;
        //遍历发送
        for(let fileInfo of selectFileInfoList){
            const data:GiveAfter = {
                ...transformOptions(userOptions.value),
                caIDLst:fileInfo.catalogType === 0 ? [] : [fileInfo.id],//分享的文件夹
                coIDLst:fileInfo.catalogType === 0 ? [fileInfo.id] : [],//分享的文件
                commonAccountInfo:{
                    account:fileInfo.owner,//账户名,一般是手机号
                    accountType:1,
                },
                dedicatedName:fileInfo.fileName,//文件或文件夹名称
                encrypt:1,
                extInfo:{
                    isWatermark:0,
                    shareChannel:'3001',
                },
                periodUnit:1,
                pubType:1,
                subLinkType:0,
                viewerLst:[],
            }
            const { data:backData } = await axios({
                method:'post',
                url:`${window.location.origin}/orchestration/personalCloud-rebuild/outlink/v1.0/getOutLink`,
                data:{
                    getOutLinkReq:data,
                },
                headers:{
                    'Content-Type':'application/json;charset=UTF-8',
                    'Authorization': userOptions.value.auth,
                }
            }).catch(() => ({data:{}}))
            const backResult = transformResult(backData);
            let tempData:ShareResultInfoList = {
                fileName:fileInfo.fileName,
                url:backResult.linkUrl,
                pwd:backResult.passwd,
                timeCode:userOptions.value.expiration,
            }
            //存储分享信息以便计算进度条
            userOptions.value.shareResultInfoList.push(tempData)
            //生成用户观看数据
            userOptions.value.shareInfoUserSee+= (transformInfoStyle(tempData) + '\n')
            //进度条
            userOptions.value.shareProgress = Math.floor((userOptions.value.shareResultInfoList.length / selectFileInfoList.length) * 100 );
            //等待时间
            await new Promise<void>(resolve => {
                setTimeout(() => {
                    resolve()
                },userOptions.value.shareDelay)
            })
        }
        //分享完成
        userOptions.value.shareResultInfoList = [];
        userOptions.value.shareProgress = 100;//以防万一~
        userOptions.value.isSharing = false;
        await MessagePlugin.success('批量分享成功,请自行查看结果');
    }

    const handleEnd:HandleEnd = () => {
        //关闭窗口执行操作
        userOptions.value.shareResultInfoList = [];
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
        DownloadTxt(`${cloudInfoStore.cloudName}批量分享${Date.now()}` ,userOptions.value.shareInfoUserSee)
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
