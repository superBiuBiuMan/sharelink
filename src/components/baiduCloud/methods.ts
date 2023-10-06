import {
    CopyValue,
    Download,
    ExpireTimeEnum,
    HandleBatchOperation,
    HandleEnd,
    HandleTransformFormat,
    HasPwdEnum,
    ShareReturnInfoTypes,
    UseBaiduCloud,
    UserOptions,
} from "./types";
import {MessagePlugin} from 'tdesign-vue-next';

import axios from "axios";
import {ref} from "vue";
import {unsafeWindow} from "$";
import {CopyValueToClipBoard, DownloadTxt, generateRandomString} from "../../utils";
import {ShareDOMSelect} from "../../infoConfig";

export const useBaiduCloud:UseBaiduCloud = () => {
    const userOptions = ref<UserOptions>({
        shareDelay:(300),
        expireTime:ExpireTimeEnum.forever,
        shareInfo:[],
        shareInfoUserSee:'',
        shareProgress:0,
        selectFileInfoList:[],
        isSharing:false,
        pwdType:HasPwdEnum.random,
        pwd:'',
    })
    const handleTransformFormat:HandleTransformFormat = (info) => {
        let time = '';
        switch (info.expireTime) {
            case ExpireTimeEnum.oneDay: time = '1天';break;
            case ExpireTimeEnum.sevenDay: time = '7天';break;
            case ExpireTimeEnum.thirtyDay: time = '30天';break;
            case ExpireTimeEnum.forever: time= '永久';break;
            default: time = '未知';
        }
        return `文件名称: ${info.fileName} 分享链接:${info.link} 提取码:${info.pwd} 分享有效时间: ${time}`;
    }
    const handleBatchOperation:HandleBatchOperation = async () => {
        //获取选中DOM
        const selectDOM = document.querySelectorAll(ShareDOMSelect['cloudBaidu']?.select ?? '');
        if(!selectDOM.length) {
            return MessagePlugin.warning('请选择要分享的文件!')
        }
        console.warn('获取选中DOM',selectDOM)
        //开始分享
        userOptions.value.isSharing = true;
        //遍历存储所选文件信息
        for(let dom of selectDOM){
            const id = dom.getAttribute(ShareDOMSelect['cloudBaidu']?.idAttribute?.[0] ?? '') ?? '';
            const tempDOM = dom.querySelector(ShareDOMSelect['cloudBaidu']?.fileNameSelect ?? '');
            const title = tempDOM ?  tempDOM.getAttribute('title') ?? '(!!$$未知名称!!$$)' : '获取名称失败';
            userOptions.value.selectFileInfoList.push({
                id,//存储文件id
                fileName:title,//文件名称
            })
        }
        //遍历发送
        for(let fileInfo of userOptions.value.selectFileInfoList){
            const pwd = generateRandomString(4);//提取码随机生成
            //@ts-ignore
            const { locals } = unsafeWindow ?? {};
            //@ts-ignore
            const { data } : { data: ShareReturnInfoTypes } = await axios({
                method:'post',
                url:window.location.origin + '/share/set',
                params:{
                    channel:'channel',
                    clienttype:'0',
                    bdstoken:locals?.userInfo?.bdstoken,
                    app_id:'250528',//未知-好像是定值
                    web:1,
                    //'dp-logid':'96456600647322280113',//未知
                },
                data:{
                    period:userOptions.value.expireTime,
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
                expireTime: userOptions.value.expireTime,
                fileName:fileInfo.fileName,
                pwd,
            }
            userOptions.value.shareInfo.push(tempData)
            //生成用户观看数据
            userOptions.value.shareInfoUserSee+= (handleTransformFormat(tempData) + '\n')
            //console.warn('结果',shareInfo.value);
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

    const copyValue:CopyValue =  () => {
        CopyValueToClipBoard(userOptions.value.shareInfoUserSee+"").then(() => {
            MessagePlugin.success('复制成功');
        }).catch(() => {
            MessagePlugin.warning('复制到剪贴板失败,可能是浏览器不支持该操作');
        })
    }
    const download:Download = () => {
        DownloadTxt('百度云盘批量分享' + Date.now(),userOptions.value.shareInfoUserSee)
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
