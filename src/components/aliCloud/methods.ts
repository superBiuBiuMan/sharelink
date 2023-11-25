import {
    CopyValue,
    Download,
    ExpireTimeEnum,
    HandleBatchOperation,
    HandleEnd,
    HandleTransformFormat,
    PwdEnum,
    ShareInfoTypes,
    UseAliCloud,
    UserOptions,
} from "./types";
import {MessagePlugin} from 'tdesign-vue-next';

import axios from "axios";
import {ref} from "vue";
import {CopyValueToClipBoard, DownloadTxt, generateRandomString} from "../../utils";
import {cloudInfoStore} from "../../store";
import dayjs from "dayjs";

export const useAliCloud:UseAliCloud = () => {
    const userOptions = ref<UserOptions>({
        shareDelay:500,
        expireTime:ExpireTimeEnum.forever,
        shareInfo:[],
        shareInfoUserSee:'',
        shareProgress:0,
        selectFileInfoList:[],
        isSharing:false,
        pwd:'',
        pwdType:PwdEnum.yes,
    })
    const handleTransformFormat:HandleTransformFormat = (info) => {
        if(!info.display_message){
            let time;
            switch (info.expireTimeEnum) {
                case ExpireTimeEnum.forever: time = '永久';break;
                case ExpireTimeEnum.sevenDay: time = '7天';break;
                case ExpireTimeEnum.thirtyDay: time = '30天';break;
                default: time = '未知';
            }
            return `文件名称: ${info.fileName} 链接:${info.share_url} 提取码:${info.pwd ?? '无'} 有效期: ${time} `;
        }else{
            return `文件名称: ${info.fileName} 错误信息${info.display_message}`;
        }
    }
    const handleBatchOperation:HandleBatchOperation = async () => {
        const reactDOM:any = document.querySelector("div[class^='node-list--']")
        if(!reactDOM){
            throw new Error('初始化阿里云盘失败,DOM未找到')
        }
        //@ts-ignore;
        const key = Object.keys(reactDOM)?.find(key =>
            key.startsWith("__reactFiber$")
        );
        if(!key){
            console.error("初始化阿里云盘失败,key未找到")
            throw new Error('初始化阿里云盘失败,key未找到')
        }
        const selectedRowInfos = reactDOM?.[key]?.['return']?.pendingProps?.listModel?.selectedItems ?? []
        //获取选中DOM
        if(!selectedRowInfos.length) {
            return MessagePlugin.warning('请选择要分享的文件!')
        }
        //开始分享
        userOptions.value.isSharing = true;
        //清空之前的
        userOptions.value.selectFileInfoList = [];
        const token:{token_type:string,access_token:string} = JSON.parse(localStorage.getItem('token') ?? `{}`) ?? {}
        //遍历填充选中文件信息
        for(let item of selectedRowInfos){
            userOptions.value.selectFileInfoList.push({
                id:item?.fileId,
                fileName:item?.name ?? '',
                driveId:item?.driveId ?? '',
                expireTime: (() => {
                    let day;
                    switch (userOptions.value.expireTime) {
                        case ExpireTimeEnum.sevenDay:day=7;break;
                        case ExpireTimeEnum.thirtyDay:day=30;break;
                    }
                    if(!day) return '';
                    return dayjs().add(day,'d');
                })(),
                expireTimeEnum:userOptions.value.expireTime,//后期回显用
                pwd:userOptions.value.pwdType === PwdEnum.yes ? generateRandomString(4) : '',
            })
        }
        //遍历发送
        for(let fileInfo of userOptions.value.selectFileInfoList){
            const { data } = await axios({
                method:'post',
                url:'https://api.aliyundrive.com/adrive/v2/share_link/create',
                data:{
                    'drive_id':fileInfo.driveId,
                    'expiration':fileInfo.expireTime,
                    'file_id_list':[fileInfo.id],
                    'sync_to_homepage':false,
                    'share_pwd':fileInfo.pwd,
                },
                headers:{
                    'authorization':`${token.token_type} ${token.access_token}`,
                }
            }).catch(({response}) => response)
            let tempData:ShareInfoTypes = {
                ...fileInfo,
                share_url:data?.share_url ?? '',
                share_name:data?.share_name ?? '',
                display_message:data?.display_message || data?.message,

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
        userOptions.value.shareInfo = [];
        userOptions.value.shareProgress = 100;//以防万一~
        userOptions.value.isSharing = false;
        await MessagePlugin.success('批量分享成功,请自行查看结果');
    }

    const handleEnd:HandleEnd = () => {
        //关闭窗口执行操作
        userOptions.value.selectFileInfoList = [];
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
        handleEnd,
        copyValue,
        download,
    }
}
