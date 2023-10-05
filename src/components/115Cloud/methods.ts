import {
    ExpireTimeEnum,
    ShareInfoTypes,
    HandleBatchOperation,
    ShareReturnInfoTypes,
    HandleTransformFormat,
    SelectFileInfoList,
    HandleEnd,
    CopyValue, Download, Use115Cloud,
} from "./types";
import { MessagePlugin } from 'tdesign-vue-next';

import axios from "axios";
import {ref} from "vue";
import {GM_xmlhttpRequest, unsafeWindow} from "$";
import {CopyValueToClipBoard, DownloadTxt, generateRandomString} from "../../utils";
import {ShareDOMSelect} from "../../infoConfig";
export const use115Cloud:Use115Cloud = () => {
    const shareDelay = ref<number>(1000);
    const expireTime = ref<ExpireTimeEnum>(ExpireTimeEnum.forever);
    const shareInfo = ref<Array<ShareInfoTypes>>([]);
    const shareInfoUserSee = ref<string>('');
    const shareProgress = ref<number>(0);
    const selectFileInfoList = ref<Array<SelectFileInfoList>>([]);
    const isSharing = ref<boolean>(false);
    const handleTransformFormat:HandleTransformFormat = (info) => {
      return `文件名称: ${info.fileName} 分享链接:${info.share_url} 提取码:${info.receive_code} 分享有效时间: ${info.share_ex_duration}`;
    }
    const handleBatchOperation:HandleBatchOperation = async () => {
        const iframe= document.querySelector('iframe');//获取iframe
        const iframeWindow = (<HTMLIFrameElement>iframe).contentWindow ?? unsafeWindow;
        //获取选中DOM
        const selectDOM = iframeWindow.document.querySelectorAll(ShareDOMSelect["cloud115"].select);
        if(!selectDOM.length) {
            return MessagePlugin.warning('请选择要分享的文件!')
        }
        //开始分享
        isSharing.value = true;
        for(let dom of selectDOM){
            const id =( dom.getAttribute(ShareDOMSelect["cloud115"].idAttribute[0]) || dom.getAttribute(ShareDOMSelect["cloud115"].idAttribute[1]) ) ?? '';
            const title = dom.getAttribute('title');
            selectFileInfoList.value.push({
                id,//存储文件id
                fileName:title ?? '(!!$$未知名称!!$$)',//文件名称
            })
        }
        //遍历发送
        for(let fileInfo of selectFileInfoList.value){
            const formData = new FormData();
            //@ts-ignore
            const { user_id } = unsafeWindow || {};
            formData.append('user_id',user_id);//用户id
            formData.append('file_ids',fileInfo.id + '');//文件id
            formData.append('ignore_warn','1');
            formData.append('is_asc','0');
            formData.append('order','user_ptime');
            GM_xmlhttpRequest({
                method:'post',
                url:'https://webapi.115.com/share/send',
                headers:{
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
                    'Cookie':document.cookie,
                    'Accept':'application/json, text/javascript, */*; q=0.01',
                    'Referer':'https://115.com/',
                },
                data:formData,
                onload:({response}) => {
                    const result:ShareReturnInfoTypes = JSON.parse(response);
                    let tempData:ShareInfoTypes = {
                        ...(result.data || {}),
                        fileName:fileInfo.fileName,
                    }
                    //填充返回结果
                    shareInfo.value.push(tempData)
                    //生成用户观看数据
                    shareInfoUserSee.value+= (handleTransformFormat(tempData) + '\n')
                    //进度条
                    shareProgress.value = Math.floor((shareInfo.value.length / selectFileInfoList.value.length) * 100 );
                },
                onerror:(res) => {
                    console.error('失败',res)
                }
            })
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
