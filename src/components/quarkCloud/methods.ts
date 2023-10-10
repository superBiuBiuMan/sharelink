import {
    CopyValue,
    Download,
    ExpireTimeEnum,
    HandleBatchOperation,
    HandleEnd,
    HandleTransformFormat,
    HasPwd,
    ShareInfoTypes,
    UrlTypeEnum,
    UsequarkCloud,
    UserOptions,
} from "./types";
import {MessagePlugin} from 'tdesign-vue-next';
import {ref} from "vue";
import {CopyValueToClipBoard, DownloadTxt, generateRandomString} from "../../utils";
import {ShareDOMSelect} from "../../infoConfig";
import {GM_xmlhttpRequest} from "$";
import {cloudInfoStore} from "../../store";

function getTaskID(data:any){
    return new Promise<string>((resolve, reject) => {
        GM_xmlhttpRequest({
            method:'post',
            url:'https://drive-pc.quark.cn/1/clouddrive/share?pr=ucpro&fr=pc',
            headers:{
                'accept':'application/json, text/plain, */*',
                'content-type': 'application/json',
            },
            data:JSON.stringify(data),
            onload: ({response}) => {
                const { data } = JSON.parse(response) || {};
                const task_id = data?.task_id ?? '';
                resolve(task_id);
            },
            onerror:(res) => {
                reject(res)
            }
        })
    })
}

function getShareID(task_id:string,retry_index = 0){
    return new Promise<string>((resolve, reject) => {
        GM_xmlhttpRequest({
            method:'get',
            url:`https://drive-pc.quark.cn/1/clouddrive/task?pr=ucpro&fr=pc&task_id=${task_id}&retry_index=${retry_index}`,
            onload: ({ response }) => {
                const { data } = JSON.parse(response) || {};
                const share_id = data?.share_id ?? '';
                resolve(share_id);
            },
            onerror: (res) => {
                reject(res);
            }
        })
    })
}

function getShareUrl(share_id:string){
    return new Promise<string>((resolve, reject) => {
        GM_xmlhttpRequest({
            method:'post',
            url:'https://drive-pc.quark.cn/1/clouddrive/share/password?pr=ucpro&fr=pc',
            data:JSON.stringify({
                share_id,
            }),
            onload: ({ response }) => {
                const { data } = JSON.parse(response) || {};
                const { passcode,share_url,title } = data || {};
                resolve(share_url ?? '');
            },
            onerror: (res) => {
                reject(res);
            }
        })
    })
}

export const usequarkCloud:UsequarkCloud = () => {
    const userOptions = ref<UserOptions>({
        shareDelay:1000,
        expireTime:ExpireTimeEnum.forever,
        shareInfo:[],
        shareInfoUserSee:'',
        shareProgress:0,
        selectFileInfoList:[],
        isSharing:false,
        pwdType:HasPwd.yes,
    })
    const handleTransformFormat:HandleTransformFormat = (info) => {
        let time: string;
        switch (info.expireTime) {
            case ExpireTimeEnum.oneDay: time = '1天';break;
            case ExpireTimeEnum.sevenDay: time = '7天';break;
            case ExpireTimeEnum.forever: time = '永久';break;
            default: time = '未知';
        }
        return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.pwd ?? '为空'} 分享有效时间: ${time}`;
    }
    const handleBatchOperation:HandleBatchOperation = async () => {
        //获取选中DOM
        const selectDOM = document.querySelectorAll(ShareDOMSelect['cloudQuark']?.select ?? '');
        if(!selectDOM.length) {
            return MessagePlugin.warning('请选择要分享的文件!')
        }
        //开始分享
        userOptions.value.isSharing = true;
        userOptions.value.selectFileInfoList = [];
        //遍历填充选中文件信息
        for(let dom of selectDOM){
            userOptions.value.selectFileInfoList.push({
                id:dom.getAttribute(ShareDOMSelect['cloudQuark']?.idAttribute?.[0] ?? '') ?? '',
                fileName:dom.querySelector(ShareDOMSelect['cloudQuark']?.fileNameSelect ?? '')?.textContent ?? '(!!$$未知名称!!$$)',
                expireTime: userOptions.value.expireTime,
                pwd:userOptions.value.pwdType === HasPwd.yes ? generateRandomString(4) : '',
            })
        }
        //遍历发送
        for(let fileInfo of userOptions.value.selectFileInfoList){
            const sendData = {
                expired_type:fileInfo.expireTime,
                fid_list:[fileInfo.id],
                title:fileInfo.fileName,
                url_type:fileInfo.pwd ? UrlTypeEnum.hasPwd : UrlTypeEnum.noPwd,
                passcode:fileInfo.pwd,
            }
            //第一次请求,换取task_id
            const task_id = await getTaskID(sendData).catch(() => (''))
            //第二次请求换取share_id //如果是文件,请求一遍即可,否则请求2次
            const share_id = await getShareID(task_id).catch(() => (''))
            let share_url = '';
            if(share_id){
                //获取分享链接
                share_url =  await getShareUrl(share_id).catch(() => (''))
            }else{
                //再次请求一遍,因为是文件夹的原因
                const share_id = await getShareID(task_id,1).catch(() => (''))
                share_url =  await getShareUrl(share_id).catch(() => (''))
            }
            let tempData:ShareInfoTypes = {
                ...fileInfo,
                url:share_url,
            }
            //填充返回结果
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
        userOptions.value.shareInfo = [];
        userOptions.value.shareProgress = 100;//以防万一~
        userOptions.value.isSharing = false;
        await MessagePlugin.success('批量分享成功,请自行查看结果');
    }

    const handleEnd:HandleEnd = () => {
        //关闭窗口执行操作
        userOptions.value.shareInfo = [];
        userOptions.value.selectFileInfoList = [];
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
        handleEnd,
        copyValue,
        download,
    }
}
