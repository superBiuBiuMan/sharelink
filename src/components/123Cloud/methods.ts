import {
    CopyValue,
    DefaultShowEnum,
    Download,
    ExpireTimeEnum,
    GiveAfter,
    HandleBatchOperation,
    HandleEnd,
    PwdEnum,
    SelectedRows,
    ShareResultInfoList,
    TransformInfoStyle,
    TransformOptions,
    TransformResult,
    Use123Cloud,
    UserOptions,
} from "./types";
import {MessagePlugin} from 'tdesign-vue-next';
import {ref} from "vue";
import {CopyValueToClipBoard, DownloadTxt, generateRandomString, get123CloudSecret, getDate123Cloud} from "../../utils";
import axios from "axios";

export const use123Cloud:Use123Cloud = () => {
    const userOptions = ref<UserOptions>({
        expiration:ExpireTimeEnum.forever,
        displayStatus:DefaultShowEnum.list,
        pwdType:PwdEnum.yes,
        pwd:'',//自定义提取码或随机提取码
        shareDelay:1000,
        shareProgress:0,
        shareResultInfoList:[],
        shareInfoUserSee:'',
        isSharing:false,
    })
    const transformOptions:TransformOptions = (params:UserOptions) => {
        let sharePwd = '';
        if(params.pwdType === PwdEnum.yes){
            sharePwd =  generateRandomString(4)
        }else if(params.pwdType === PwdEnum.self){
            sharePwd = params.pwd;
        }
        let expiration;
        switch (params.expiration) {
            case ExpireTimeEnum.oneDay: expiration = getDate123Cloud(1);break;
            case ExpireTimeEnum.sevenDay: expiration = getDate123Cloud(7);break;
            case ExpireTimeEnum.thirtyDay: expiration = getDate123Cloud(30);break;
            case ExpireTimeEnum.forever: expiration = getDate123Cloud(99);break;
        }
        return {
            displayStatus:params.displayStatus,
            sharePwd,
            expiration,
        }
    }
    const transformInfoStyle:TransformInfoStyle = (info) => {
        let time;
        switch (info.timeCode){
            case ExpireTimeEnum.oneDay: time = '1天';break;
            case ExpireTimeEnum.sevenDay: time = '7天';break;
            case ExpireTimeEnum.thirtyDay: time = '30天';break;
            case ExpireTimeEnum.forever: time = '永久';break;
            default: time = '未知';
        }
        return `文件名称: ${info.fileName} 分享链接:${info.url} 提取码:${info.pwd ?? '为空'} 分享有效时间: ${time}`;
    }
    const transformResult:TransformResult = (result:any) => {
        const { data } = result || {};
        return {
            ShareKey:data?.ShareKey ?? '分享失败',
            message:result.message ?? '',
            code:result.code,
        }
    }
    const handleBatchOperation:HandleBatchOperation = async () => {
        const reactDOM = document.querySelector('.hombody');
        const key = Object.keys(reactDOM).find(key =>
            key.startsWith("__reactInternalInstance$")
        );
        //选中数据
        const selectedRows:SelectedRows[] = reactDOM[key].memoizedProps.children[0].props.children._owner.memoizedState.selectedRows ?? [];

        if(!selectedRows.length){
            return MessagePlugin.warning('请选择要分享的文件!')
        }
        if(userOptions.value.pwdType === PwdEnum.self && !userOptions.value.pwd){
            return MessagePlugin.warning('设置提取码为自定义提取码,请填写自定义提取码')
        }
        //选中id数据
        //const selectedRowKeys:number[] = reactDOM[key].memoizedProps.children[0].props.children._owner.memoizedState.selectedRowKeys
        //开始分享
        userOptions.value.isSharing = true;
        //遍历发送
        for(let fileInfo of selectedRows){
            const data:GiveAfter = {
                ...transformOptions(userOptions.value),
                driveId:0,
                event:"shareCreate",
                fileIdList:fileInfo.FileId,//文件id
                fileNum:1,//文件数量,
                operatePlace:1,
                renameVisible:false,
                shareModality:2,
                shareName:fileInfo.FileName,//分享文件名
            }
            //123加密
            const randomParams = get123CloudSecret();
            const { data:backData } = await axios({
                method:'post',
                url:`${window.location.origin}/a/api/share/create`,
                params:{
                    [randomParams[0]]:randomParams[1],
                },
                data,
                headers:{
                    'Content-Type':'application/json;charset=UTF-8',
                    'Authorization': 'Bearer ' + localStorage.getItem('authorToken')?.slice(1,-1),
                    'LoginUuid':localStorage.getItem('LoginUuid')?.slice(1,-1),
                    'platform':'web',
                }
            }).catch(() => ({data:{}}))
            const backResult = transformResult(backData);
            let tempData:ShareResultInfoList = {
                fileName:fileInfo.FileName,
                url:`${window.location.origin}/s/` + backResult.ShareKey,
                pwd:data.sharePwd,
                time:data.expiration,
                timeCode:userOptions.value.expiration,
            }
            //存储分享信息以便计算进度条
            userOptions.value.shareResultInfoList.push(tempData)
            //生成用户观看数据
            userOptions.value.shareInfoUserSee+= (transformInfoStyle(tempData) + '\n')
            //进度条
            userOptions.value.shareProgress = Math.floor((userOptions.value.shareResultInfoList.length / selectedRows.length) * 100 );
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
        userOptions,
        transformOptions,
        transformInfoStyle,
        transformResult,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
    }
}
