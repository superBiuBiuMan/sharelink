import {
    CopyValue,
    Download,
    HandleBatchOperation,
    HandleEnd,
    Init,
    PwdEnum,
    ShareResultInfoList,
    TaskEnum,
    TransformInfoStyle,
    TransformResult,
    UselanzouCloud,
    UserOptions,
} from "./types";
import {MessagePlugin} from 'tdesign-vue-next';
import {ref} from "vue";
import {bodyParse, CopyValueToClipBoard, DownloadTxt} from "../../utils";
import {proxy} from "ajax-hook";
import axios from "axios";

export const uselanzouCloud:UselanzouCloud = () => {
    const userOptions = ref<UserOptions>({
        pwdType:PwdEnum.yes,
        pwd:'',//自定义提取码或随机提取码
        shareDelay:1000,
        shareProgress:0,
        selectFileInfoList:[],
        shareResultInfoList:[],
        listData:[],
        shareInfoUserSee:'',
        isSharing:false,
    })
    const init:Init = () => {
        proxy({
            //请求成功后进入
            onResponse: (response, handler) => {
                //@ts-ignore
                if(handler.xhr.config.url.startsWith('/doupload.php')){
                    //@ts-ignore
                    const bodyParams = bodyParse(handler.xhr.config.body ?? '');
                    const data = response.response ? JSON.parse(response.response)?.text ?? [] : [];
                    //@ts-ignore
                    if((bodyParams.pg * 1) === 1){
                        //清空原有listData
                        userOptions.value.listData = data;
                    }else{
                        //否者滚动加载数据
                        userOptions.value.listData = [...userOptions.value.listData,...data]
                    }
                }
                handler.next(response)
            }
        })
    }
    init();
    const transformInfoStyle:TransformInfoStyle = (info) => {
        return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.pwd ?? '空'} 分享有效时间: 永久`;
    }
    const transformResult:TransformResult = (result:any) => {
        return {
            f_id:result?.f_id ?? '',
            is_newd:result?.is_newd ?? '',
            pwd:userOptions.value.pwdType === PwdEnum.self ? userOptions.value.pwd : result?.pwd,
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
            const formData = new FormData();
            formData.append('task',TaskEnum.share + '');
            formData.append('file_id',fileInfo.id + '');
            //提取链接
            const { data:shareData } = await axios({
                method:'post',
                url:`${window.location.origin}/doupload.php`,
                data:formData,
            }).catch(() => ({data:{}}))
            const backResult = transformResult(shareData?.info ?? {});//转换数据

            if(userOptions.value.pwdType !== PwdEnum.no){
                //等待
                await new Promise<void>(resolve => {
                    setTimeout(() => {
                        resolve()
                    },userOptions.value.shareDelay)
                })
                //设置密码
                formData.set('task',TaskEnum.code + '');
                formData.append('shows','1');
                formData.append('shownames',backResult.pwd);
                const { data:codeData } = await axios({
                    method:'post',
                    url:`${window.location.origin}/doupload.php`,
                    data:formData,
                }).catch(() => ({data:{}}))
            }

            let tempData:ShareResultInfoList = {
                fileName:fileInfo.name_all || fileInfo.name,
                url:backResult.is_newd + '/' + backResult.f_id,
                pwd:userOptions.value.pwdType !== PwdEnum.no ? backResult.pwd : '空',
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
        transformInfoStyle,
        transformResult,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
    }
}
