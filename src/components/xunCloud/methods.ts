import {
    CopyValue,
    Download,
    ExpireTimeEnum,
    ExtractEnum,
    HandleBatchOperation,
    HandleEnd,
    HandleTransformFormat,
    ShareInfoTypes,
    UserOptions,
    UseXunCloud,
    DownloadExcel,
    TransformExcelInfoData,
} from "./types";
import {MessagePlugin} from 'tdesign-vue-next';

import axios from "axios";
import {ref} from "vue";
import {CopyValueToClipBoard, DownloadTxt, exportXlsxFile, findLocalStorageKeysWithPrefix} from "../../utils";
import {cloudInfoStore} from "../../store";

const transformExcelInfoData:TransformExcelInfoData = (data) => {
    return data?.map(item => {
        let time;
        switch (item.expireTime) {
            case ExpireTimeEnum.forever: time = '永久';break;
            case ExpireTimeEnum.oneDay: time = '1天';break;
            case ExpireTimeEnum.twoDay: time = '2天';break;
            case ExpireTimeEnum.threeDay: time = '3天';break;
            case ExpireTimeEnum.fourDay: time = '4天';break;
            case ExpireTimeEnum.fiveDay: time = '5天';break;
            case ExpireTimeEnum.sixDay: time = '6天';break;
            case ExpireTimeEnum.sevenDay: time = '7天';break;
            default: time = '未知';
        }
        let codeNumber;
        switch (item.extractNumber) {
            case ExtractEnum.forever: codeNumber = '无限'; break;
            case ExtractEnum.One: codeNumber = '1次'; break;
            case ExtractEnum.Two: codeNumber = '2次'; break;
            case ExtractEnum.Three: codeNumber = '3次'; break;
            case ExtractEnum.Four: codeNumber = '4次'; break;
            case ExtractEnum.Five: codeNumber = '5次'; break;
            case ExtractEnum.Six: codeNumber = '6次'; break;
            case ExtractEnum.Seven: codeNumber = '7次'; break;
            case ExtractEnum.Eight: codeNumber = '8次'; break;
            case ExtractEnum.Nine: codeNumber = '9次'; break;
            case ExtractEnum.Ten: codeNumber = '10次'; break;
            case ExtractEnum.Eleven: codeNumber = '11次'; break;
            case ExtractEnum.Twelve: codeNumber = '12次'; break;
            case ExtractEnum.Thirteen: codeNumber = '13次'; break;
            case ExtractEnum.Fourteen: codeNumber = '14次'; break;
            case ExtractEnum.Fifteen: codeNumber = '15次'; break;
            case ExtractEnum.Sixteen: codeNumber = '16次'; break;
            case ExtractEnum.Seventeen: codeNumber = '17次'; break;
            case ExtractEnum.Eighteen: codeNumber = '18次'; break;
            case ExtractEnum.Nineteen: codeNumber = '19次'; break;
            case ExtractEnum.Twenty: codeNumber = '20次'; break;
            default: codeNumber = '未知';
        }
        return  {
            "文件名称":item?.fileName ?? "",
            "分享链接":item?.share_url ?? "",
            "提取码":item?.pass_code ?? "",
            "有效期":time,
            "有效次数":codeNumber,
        }
    }) ?? []
}
export const useXunCloud:UseXunCloud = () => {
    const userOptions = ref<UserOptions>({
        expireTimeOptions:[
            { label:'不限',value:ExpireTimeEnum.forever },
            { label:'1天',value:ExpireTimeEnum.oneDay },
            { label:'2天',value:ExpireTimeEnum.twoDay },
            { label:'3天',value:ExpireTimeEnum.threeDay },
            { label:'4天',value:ExpireTimeEnum.fourDay },
            { label:'5天',value:ExpireTimeEnum.fiveDay },
            { label:'6天',value:ExpireTimeEnum.sixDay },
            { label:'7天',value:ExpireTimeEnum.sevenDay },
        ],
        extractOptions:[
            { label:'不限', value: ExtractEnum.forever },
            { label: '1天', value: ExtractEnum.One },
            { label: '2天', value: ExtractEnum.Two },
            { label: '3天', value: ExtractEnum.Three },
            { label: '4天', value: ExtractEnum.Four },
            { label: '5天', value: ExtractEnum.Five },
            { label: '6天', value: ExtractEnum.Six },
            { label: '7天', value: ExtractEnum.Seven },
            { label: '8天', value: ExtractEnum.Eight },
            { label: '9天', value: ExtractEnum.Nine },
            { label: '10天', value: ExtractEnum.Ten },
            { label: '11天', value: ExtractEnum.Eleven },
            { label: '12天', value: ExtractEnum.Twelve },
            { label: '13天', value: ExtractEnum.Thirteen },
            { label: '14天', value: ExtractEnum.Fourteen },
            { label: '15天', value: ExtractEnum.Fifteen },
            { label: '16天', value: ExtractEnum.Sixteen },
            { label: '17天', value: ExtractEnum.Seventeen },
            { label: '18天', value: ExtractEnum.Eighteen },
            { label: '19天', value: ExtractEnum.Nineteen },
            { label: '20天', value: ExtractEnum.Twenty }
        ],
        shareDelay:500,
        allowQuickAccess:true,
        expireTime:ExpireTimeEnum.forever,
        extractNumber:ExtractEnum.forever,
        shareInfo:[],
        shareInfoUserSee:'',
        shareProgress:0,
        selectFileInfoList:[],
        isSharing:false,
    })
    const handleTransformFormat:HandleTransformFormat = (info) => {
        if(!info.error_description){
            let time;
            switch (info.expireTime) {
                case ExpireTimeEnum.forever: time = '永久';break;
                case ExpireTimeEnum.oneDay: time = '1天';break;
                case ExpireTimeEnum.twoDay: time = '2天';break;
                case ExpireTimeEnum.threeDay: time = '3天';break;
                case ExpireTimeEnum.fourDay: time = '4天';break;
                case ExpireTimeEnum.fiveDay: time = '5天';break;
                case ExpireTimeEnum.sixDay: time = '6天';break;
                case ExpireTimeEnum.sevenDay: time = '7天';break;
                default: time = '未知';
            }
            let codeNumber;
            switch (info.extractNumber) {
                case ExtractEnum.forever: codeNumber = '无限'; break;
                case ExtractEnum.One: codeNumber = '1次'; break;
                case ExtractEnum.Two: codeNumber = '2次'; break;
                case ExtractEnum.Three: codeNumber = '3次'; break;
                case ExtractEnum.Four: codeNumber = '4次'; break;
                case ExtractEnum.Five: codeNumber = '5次'; break;
                case ExtractEnum.Six: codeNumber = '6次'; break;
                case ExtractEnum.Seven: codeNumber = '7次'; break;
                case ExtractEnum.Eight: codeNumber = '8次'; break;
                case ExtractEnum.Nine: codeNumber = '9次'; break;
                case ExtractEnum.Ten: codeNumber = '10次'; break;
                case ExtractEnum.Eleven: codeNumber = '11次'; break;
                case ExtractEnum.Twelve: codeNumber = '12次'; break;
                case ExtractEnum.Thirteen: codeNumber = '13次'; break;
                case ExtractEnum.Fourteen: codeNumber = '14次'; break;
                case ExtractEnum.Fifteen: codeNumber = '15次'; break;
                case ExtractEnum.Sixteen: codeNumber = '16次'; break;
                case ExtractEnum.Seventeen: codeNumber = '17次'; break;
                case ExtractEnum.Eighteen: codeNumber = '18次'; break;
                case ExtractEnum.Nineteen: codeNumber = '19次'; break;
                case ExtractEnum.Twenty: codeNumber = '20次'; break;
                default: codeNumber = '未知';
            }
            return `文件名称: ${info.fileName} 分享链接:${info.share_url} 提取码:${info.pass_code} 有效期: ${time} 有效次数:${codeNumber}`;
        }
        else{
            return `文件名称: ${info.fileName} 分享错误信息: ${info.error_description}`;
        }

    }
    const handleBatchOperation:HandleBatchOperation = async () => {
        const tempDOM:any = document.querySelector('.pan-web');
        const selectedRowKeys:string[] = tempDOM.__vue__.$parent.fileSelected ?? [];//只是id
        const allInfo:any  = tempDOM.__vue__.$store.state.drive.all ?? {};
        const selectRowInfos = selectedRowKeys.map(id => allInfo[id]) ?? [];
        const temp1:any = findLocalStorageKeysWithPrefix('captcha_') ?? {};
        const temp2:any = findLocalStorageKeysWithPrefix('credentials_') ?? {};
        //获取选中DOM
        if(!selectedRowKeys.length) {
            return MessagePlugin.warning('请选择要分享的文件!')
        }
        const headers = {
            'x-client-id':'',
            'x-device-id':localStorage.getItem('deviceid')?.slice(6,38),
            'x-captcha-token':temp1.token,
            'authorization':`${temp2.token_type} ` + temp2.access_token,
        }
        //开始分享
        userOptions.value.isSharing = true;
        const currentShareInfo = [];//本次分享操作分享的文件信息

        //遍历填充选中文件信息
        for(let item of selectRowInfos){
            userOptions.value.selectFileInfoList.push({
                id:item?.id,
                fileName:item?.name ?? '',
                expireTime: userOptions.value.expireTime,
                extractNumber:userOptions.value.extractNumber,
            })
        }
        //遍历发送
        for(let fileInfo of userOptions.value.selectFileInfoList){
            const { data } = await axios({
                method:'post',
                url:'https://api-pan.xunlei.com/drive/v1/share',
                data:{
                    expiration_days:fileInfo.expireTime + '',
                    file_ids:[fileInfo.id],
                    params:{
                        subscribe_push:'false',
                    },
                    restore_limit:fileInfo.extractNumber + '',
                    share_to:'copy',
                    title:'云盘资源分享'
                },
                headers,
            }).catch(({response}) => response)
            let tempData:ShareInfoTypes = {
                ...fileInfo,
                share_text:data?.share_text ?? '',
                share_url:data?.share_url ?? '',
                pass_code:data?.pass_code ?? '',
                error_description:data?.error_description ?? '',
            }
            //存储总分享信息
            userOptions.value.shareInfo.push(tempData);
            currentShareInfo.push(tempData);//本次分享操作分享的文件信息
            //生成用户观看数据
            userOptions.value.shareInfoUserSee+= (handleTransformFormat(tempData) + '\n')
            //进度条
            userOptions.value.shareProgress = Math.floor((currentShareInfo.length / userOptions.value.selectFileInfoList.length) * 100 );
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
    const downloadExcel:DownloadExcel = () => {
        exportXlsxFile(`${cloudInfoStore.cloudName}批量分享${Date.now()}.xlsx`,transformExcelInfoData(userOptions.value.shareInfo))
    }
    return {
        userOptions,
        handleBatchOperation,
        handleTransformFormat,
        handleEnd,
        copyValue,
        download,
        downloadExcel
    }
}
