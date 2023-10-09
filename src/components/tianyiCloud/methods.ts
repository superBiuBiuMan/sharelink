import {
    UseTianyiCloud,
    ExpireTimeEnum,
    HandleBatchOperation,
    ShareReturnInfoTypes,
    HandleTransformFormat,
    HandleTransformShareParams,
    HandleEnd,
    CopyValue, Download,
    UserOptions,
} from "./types";
import { MessagePlugin } from 'tdesign-vue-next';

import axios from "axios";
import {ref} from "vue";
import {CopyValueToClipBoard, DownloadTxt} from "../../utils";
import {ShareDOMSelect} from "../../infoConfig";
import {cloudInfoStore} from "../../store";
export const useTianyiCloud:UseTianyiCloud = () => {
    const userOptions = ref<UserOptions>({
        shareDelay:500,
        expireTime:ExpireTimeEnum.forever,
        shareInfo:[],
        shareInfoUserSee:'',
        shareProgress:0,
        selectFileInfoList:[],
        isSharing:false,
    })
    const handleTransformFormat:HandleTransformFormat = (info) => {
        let time = '';
        switch (info.expireTime) {
            case ExpireTimeEnum.oneDay: time = '1天';break;
            case ExpireTimeEnum.sevenDay: time = '7天';break;
            case ExpireTimeEnum.forever: time = '永久';break;
            default: time = '未知';
        }
        return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.accessCode} 分享有效时间: ${time}`;
    }
    const handleTransformShareParams:HandleTransformShareParams = (params) => {
        return {
            noCache: Math.random(),
            fileId:params.id,
            expireTime: params.expireTime,
            shareType: '3',//固定值
        }
    }
    const handleBatchOperation:HandleBatchOperation = async () => {
        //获取选中DOM
        const selectDOM = document.querySelectorAll(ShareDOMSelect['cloudTianyi']?.select ?? '');
        if(!selectDOM.length) {
            return MessagePlugin.warning('请选择要分享的文件!')
        }
        //开始分享
        userOptions.value.isSharing = true;
        //遍历填充选中文件信息
        for(let dom of selectDOM){
            userOptions.value.selectFileInfoList.push({
                id:dom.getAttribute(ShareDOMSelect['cloudTianyi']?.idAttribute?.[0] ?? '') ?? '',
                fileName:dom.querySelector(ShareDOMSelect['cloudTianyi']?.fileNameSelect ?? '')?.textContent ?? '(!!$$未知名称!!$$)',
                expireTime: userOptions.value.expireTime,
            })
        }
        //遍历发送
        for(let fileInfo of userOptions.value.selectFileInfoList){
            const { data:{shareLinkList} }: { data:{shareLinkList:Array<ShareReturnInfoTypes>} } = await axios({
                method:'get',
                url:window.location.origin + '/api/open/share/createShareLink.action',
                params:handleTransformShareParams(fileInfo),
                headers:{
                    'accept':'application/json;charset=UTF-8'
                }
            }).catch(() => ({data:{shareLinkList:[]}}))
            //填充返回结果
            let tempData = {
                ...shareLinkList[0],
                ...fileInfo,
            }
            //存储分享信息
            userOptions.value.shareInfo.push(tempData)
            //生成用户观看数据
            userOptions.value.shareInfoUserSee+= (handleTransformFormat(tempData) + '\n')
            //进度条
            userOptions.value.shareProgress = Math.floor((userOptions.value.shareInfo.length / userOptions.value.selectFileInfoList.length) * 100 );
            //等待时间
            await new Promise<void>(resolve => {
                setTimeout(() => {
                    resolve()
                },userOptions.value.shareDelay)
            })
        }
        //分享完成
        userOptions.value.selectFileInfoList = [];
        userOptions.value.shareProgress = 100;//以防万一~
        userOptions.value.isSharing = false;
        await MessagePlugin.success('批量分享成功,请自行查看结果');
    }

    const handleEnd:HandleEnd = () => {
        //关闭窗口执行操作
        userOptions.value.shareInfo = [];
        userOptions.value.shareInfoUserSee = '';
        userOptions.value.shareProgress = 0;
    }

    const copyValue:CopyValue = () => {
        CopyValueToClipBoard(userOptions.value.shareInfoUserSee + "").then(() => {
            MessagePlugin.success('复制成功');
        }).catch(() => {
            MessagePlugin.warning('复制到剪贴板失败,可能是浏览器不支持该操作');
        })
    }
    const download:Download = () => {
        DownloadTxt(`${cloudInfoStore.cloudName}批量分享${Date.now()}` ,userOptions.value.shareInfoUserSee)
    }
    return {
        userOptions,
        handleBatchOperation,
        handleTransformFormat,
        handleTransformShareParams,
        handleEnd,
        copyValue,
        download,
    }
}
