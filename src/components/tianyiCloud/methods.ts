import {
    UseTianyiCloud,
    ExpireTimeEnum,
    ShareInfoTypes,
    HandleChangeTime,
    HandleBatchOperation,
    ShareReturnInfoTypes,
    HandleTransformFormat,
    SelectFileInfoList,
    HandleEnd,
    CopyValue, Download,
} from "./types";
import { MessagePlugin } from 'tdesign-vue-next';

import axios from "axios";
import {ref} from "vue";
import {CopyValueToClipBoard, DownloadTxt} from "../../utils";
export const useTianyiCloud:UseTianyiCloud = () => {
    const shareDelay = ref<number>(1000);
    const expireTime = ref<ExpireTimeEnum>(ExpireTimeEnum.forever);
    const shareInfo = ref<Array<ShareInfoTypes>>([]);
    const shareInfoUserSee = ref<string>('');
    const shareProgress = ref<number>(0);
    const selectFileInfoList = ref<Array<SelectFileInfoList>>([]);
    const isSharing = ref<boolean>(false);
    const handleChangeTime:HandleChangeTime = (value) => {
        expireTime.value = value;
    }
    const handleTransformFormat:HandleTransformFormat = (info) => {
        switch (info.expireTime) {
            case ExpireTimeEnum.oneDay: {
                return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.accessCode} 分享有效时间: 1天`;
            }
            case ExpireTimeEnum.sevenDay: {
                return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.accessCode} 分享有效时间: 7天`;
            }
            case ExpireTimeEnum.forever: {
                return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.accessCode} 分享有效时间: 永久`;
            }
            default: {
                return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.accessCode} 分享有效时间: 未知`;
            }
        }
    }
    const handleBatchOperation:HandleBatchOperation = async () => {

        //获取选中DOM
        const selectDOM = document.querySelectorAll("li[data-selected=true].c-file-item");
        if(!selectDOM.length) {
            return MessagePlugin.warning('请选择要分享的文件!')
        }
        //开始分享
        isSharing.value = true;
        for(let dom of selectDOM){
            selectFileInfoList.value.push({
                id:dom.getAttribute('data-fileid') ?? '',
                fileName:dom.querySelector('.file-item-name-fileName-span')?.textContent ?? '(!!$$未知名称!!$$)',
            })
        }
        //遍历发送
        for(let fileInfo of selectFileInfoList.value){
            const { data:{shareLinkList} }: { data:{shareLinkList:Array<ShareReturnInfoTypes>} } = await axios({
                method:'get',
                url:'https://cloud.189.cn/api/open/share/createShareLink.action',
                params:{
                    noCache: Math.random(),
                    fileId:fileInfo.id,
                    expireTime: expireTime.value,
                    shareType: '3',//固定值
                },
                headers:{
                    'accept':'application/json;charset=UTF-8'
                }
            }).catch(() => ({data:{shareLinkList:[]}}))
            //填充返回结果
            let tempData = {
                ...shareLinkList[0],
                expireTime: expireTime.value,
                fileName:fileInfo.fileName,
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

    const copyValue:CopyValue = () => {
        CopyValueToClipBoard(shareInfoUserSee.value+"").then(() => {
            MessagePlugin.success('复制成功');
        }).catch(() => {
            MessagePlugin.warning('复制到剪贴板失败,可能是浏览器不支持该操作');
        })
    }
    const download:Download = () => {
        DownloadTxt('天翼云盘批量分享' + Date.now(),shareInfoUserSee.value)
    }
    return {
        shareDelay,
        expireTime,
        shareInfo,
        selectFileInfoList,
        shareInfoUserSee,

        isSharing,
        shareProgress,

        handleChangeTime,
        handleBatchOperation,
        handleTransformFormat,
        handleEnd,
        copyValue,
        download,
    }
}
