import {
    ShareInfoTypes,
    HandleBatchOperation,
    ShareReturnInfoTypes,
    HandleTransformFormat,
    SelectFileInfoList,
    HandleEnd,
    CopyValue, Download, UseWeiYunCloud,
} from "./types";
import { MessagePlugin } from 'tdesign-vue-next';

import axios from "axios";
import {ref} from "vue";
export const useWeiYunCloud:UseWeiYunCloud = () => {
    const shareDelay = ref<number>(1000);
    const isAddSecret = ref<boolean>(true);
    const shareInfo = ref<Array<ShareInfoTypes>>([]);
    const shareInfoUserSee = ref<string>('');
    const shareProgress = ref<number>(0);
    const selectFileInfoList = ref<Array<SelectFileInfoList>>([]);
    const isSharing = ref<boolean>(false);

    const handleTransformFormat:HandleTransformFormat = (info) => {
        return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.accessCode} 分享有效时间: 1天`;
    }
    const handleBatchOperation:HandleBatchOperation = async () => {
        //获取选中DOM
        const selectDOM = document.querySelectorAll("li[data-selected=true].c-file-item");
        if(!selectDOM.length) return alert('请选择要分享的文件');
        //开始分享
        isSharing.value = true;
        for(let dom of selectDOM){
            selectFileInfoList.value.push({
                id:dom.getAttribute('data-fileid'),
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
                    shareType: '3',//固定值
                },
                headers:{
                    'accept':'application/json;charset=UTF-8'
                }
            }).catch(() => ({data:{shareLinkList:[]}}))
            //填充返回结果
            let tempData = {
                ...shareLinkList[0],
                fileName:fileInfo.fileName,
            }
            shareInfo.value.push(tempData)
            //生成用户观看数据
            shareInfoUserSee.value+= (handleTransformFormat(tempData) + '\n')

            console.warn('结果',shareInfo.value);
            //进度条
            shareProgress.value = Math.floor((shareInfo.value.length / selectFileInfoList.value.length) * 100 );
            //等待时间
            await new Promise(resolve => {
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

    //复制
    const copyValue:CopyValue = () => {
        if(window.isSecureContext){
            navigator.clipboard.writeText(shareInfoUserSee.value+"").then(res=>{
                MessagePlugin.success('复制成功');
            }).catch(err=>{
                MessagePlugin.warning('复制到剪贴板失败,可能是浏览器不支持该操作');
            });
        }else{
            MessagePlugin.warning('很抱歉，暂时不支持在此网站上复制');
        }
    }
    //下载txt
    const download:Download = () => {
        const element = document.createElement('a');
        element.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(shareInfoUserSee.value));
        element.setAttribute('download','天翼云盘批量分享' + Date.now())
        element.style.display = 'none';
        document.body.append(element);
        element.click();
        document.body.removeChild(element);
    }
    return {
        isAddSecret,
        shareDelay,
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
