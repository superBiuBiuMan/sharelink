import {
    ExpireTimeEnum,
    ShareInfoTypes,
    HandleBatchOperation,
    ShareReturnInfoTypes,
    HandleTransformFormat,
    SelectFileInfoList,
    HandleEnd,
    CopyValue, Download, UseBaiduCloud,
} from "./types";
import { MessagePlugin } from 'tdesign-vue-next';

import axios from "axios";
import {ref} from "vue";
import {unsafeWindow} from "$";
import {CopyValueToClipBoard, DownloadTxt, generateRandomString} from "../../utils";
import {ShareDOMSelect} from "../../infoConfig";
export const useBaiduCloud:UseBaiduCloud = () => {
    const shareDelay = ref<number>(1000);
    const expireTime = ref<ExpireTimeEnum>(ExpireTimeEnum.forever);
    const shareInfo = ref<Array<ShareInfoTypes>>([]);
    const shareInfoUserSee = ref<string>('');
    const shareProgress = ref<number>(0);
    const selectFileInfoList = ref<Array<SelectFileInfoList>>([]);
    const isSharing = ref<boolean>(false);
    const handleTransformFormat:HandleTransformFormat = (info) => {
        switch (info.expireTime) {
            case ExpireTimeEnum.oneDay: {
                return `文件名称: ${info.fileName} 分享链接:${info.link} 提取码:${info.pwd} 分享有效时间: 1天`;
            }
            case ExpireTimeEnum.sevenDay: {
                return `文件名称: ${info.fileName} 分享链接:${info.link} 提取码:${info.pwd} 分享有效时间: 7天`;
            }
            case ExpireTimeEnum.thirtyDay: {
                return `文件名称: ${info.fileName} 分享链接:${info.link} 提取码:${info.pwd} 分享有效时间: 30天`;
            }
            case ExpireTimeEnum.forever: {
                return `文件名称: ${info.fileName} 分享链接:${info.link} 提取码:${info.pwd} 分享有效时间: 永久`;
            }
            default: {
                return `文件名称: ${info.fileName} 分享链接:${info.link} 提取码:${info.pwd} 分享有效时间: 未知`;
            }
        }
    }
    const handleBatchOperation:HandleBatchOperation = async () => {

        //获取选中DOM
        const selectDOM = document.querySelectorAll(ShareDOMSelect['cloudBaidu']?.select ?? '');
        if(!selectDOM.length) {
            return MessagePlugin.warning('请选择要分享的文件!')
        }
        //开始分享
        isSharing.value = true;
        for(let dom of selectDOM){
            const id = dom.getAttribute(ShareDOMSelect['cloudBaidu']?.idAttribute?.[0] ?? '') ?? '';
            const tempDOM = dom.querySelector(ShareDOMSelect['cloudBaidu']?.select ?? '');
            const title = tempDOM?  tempDOM.getAttribute('title') ?? '(!!$$未知名称!!$$)' : '获取名称失败';
            selectFileInfoList.value.push({
                id,//存储文件id
                fileName:title,//文件名称
            })
        }
        //遍历发送
        for(let fileInfo of selectFileInfoList.value){
            const pwd = generateRandomString(4);//提取码随机生成
            //@ts-ignore
            const { locals } = unsafeWindow ?? {};
            //@ts-ignore
            const { data } : { data: ShareReturnInfoTypes } = await axios({
                method:'post',
                url:'https://pan.baidu.com/share/set',
                params:{
                    channel:'channel',
                    clienttype:'0',
                    bdstoken:locals?.userInfo?.bdstoken,
                    app_id:'250528',//未知-好像是定值
                    web:1,
                    //'dp-logid':'96456600647322280113',//未知
                },
                data:{
                    period:expireTime.value,
                    pwd,
                    'eflag_disable':true,//不知道是什么参数,好像是分享类型eflag_disable: "personal" === e.shareType
                    channel_list:[],//未知
                    schannel:4,//未知-貌似是一个定制
                    fid_list:`[${fileInfo.id}]`,//文件id
                },
                headers:{
                    'accept':'application/json;charset=UTF-8',
                    'Content-Type':' application/x-www-form-urlencoded'
                }
            }).catch(() => ({}))
            //console.warn('返回的数据',data)
            //填充返回结果
            let tempData = {
                ...data,
                expireTime: expireTime.value,
                fileName:fileInfo.fileName,
                pwd,
            }
            shareInfo.value.push(tempData)
            //生成用户观看数据
            shareInfoUserSee.value+= (handleTransformFormat(tempData) + '\n')
            //console.warn('结果',shareInfo.value);
            //进度条
            shareProgress.value = Math.floor((shareInfo.value.length / selectFileInfoList.value.length) * 100 );
            //等待时间
            await new Promise<void>(resolve => {
                setTimeout(() => {
                    resolve()
                },shareDelay.value)
            })
        }
        //分享完成
        selectFileInfoList.value = [];
        shareProgress.value = 100;//以防万一~
        isSharing.value = false;
        await MessagePlugin.success('批量分享成功,请自行查看结果');
    }

    const handleEnd:HandleEnd = () => {
        //关闭窗口执行操作
        shareInfo.value = [];
        shareInfoUserSee.value = '';
        shareProgress.value = 0;
    }

    const copyValue:CopyValue =  () => {
        CopyValueToClipBoard(shareInfoUserSee.value+"").then(() => {
            MessagePlugin.success('复制成功');
        }).catch(() => {
            MessagePlugin.warning('复制到剪贴板失败,可能是浏览器不支持该操作');
        })
    }
    const download:Download = () => {
        DownloadTxt('百度云盘批量分享' + Date.now(),shareInfoUserSee.value)
    }
    return {
        shareDelay,
        expireTime,
        shareInfo,
        selectFileInfoList,
        shareInfoUserSee,

        isSharing,
        shareProgress,

        handleBatchOperation,
        handleTransformFormat,
        handleEnd,
        copyValue,
        download,
    }
}
