import {
    CopyValue,
    CopyValueEnum,
    DefaultShowEnum,
    Download,
    DownloadExcel,
    ExpireTimeEnum,
    GiveAfter,
    HandleBatchOperation,
    HandleEnd,
    PwdEnum,
    SelectedRows,
    ShareResultInfoList, TransformExcelExtraLinkData,
    TransformExcelInfoData,
    TransformInfoStyle,
    TransformLinkResult,
    TransformOptions,
    TransformResult,
    Use123Cloud,
    UserOptions,
} from "./types";
import {MessagePlugin} from 'tdesign-vue-next';
import {ref} from "vue";
import {
    CopyValueToClipBoard,
    DownloadTxt,
    exportXlsxFile,
    generateRandomString,
    get123CloudSecret,
    getDate123Cloud
} from "../../utils";
import axios from "axios";
import {cloudInfoStore} from "../../store";
import dayjs from "dayjs";

const transformExcelInfoData:TransformExcelInfoData = (data) => {
    return data?.map(item => {
        let time;
        switch (item.timeCode){
            case ExpireTimeEnum.oneDay: time = '1天';break;
            case ExpireTimeEnum.sevenDay: time = '7天';break;
            case ExpireTimeEnum.thirtyDay: time = '30天';break;
            case ExpireTimeEnum.forever: time = '永久';break;
            default: time = '未知';
        }
        return  {
            "文件名称":item?.fileName ?? "",
            "分享链接":item?.url ?? "",
            "提取码":item?.pwd ?? "",
            "有效期":time,
        }
    }) ?? []
}
const transformExcelExtraLinkData:TransformExcelExtraLinkData = (data) => {
    return data?.map(item => ({
        "文件名称":item?.fileName ?? "",
        "直链地址": item?.link ?? "",
    })) ?? [];
}
const getSelectInfoList = () => {
    const reactDOM:Element = document.querySelector('.hombody')!;
    const key = Object.keys(reactDOM)?.find(key =>
      key.startsWith("__reactInternalInstance$")
    )!;
    //@ts-ignore;
    const tempList = [reactDOM[key]]
    let tempItem;
    while(tempList.length){
        const item = tempList.pop();
        if(item?.memoizedProps?.rowSelection){
            tempItem = item.memoizedProps;
            break ;
        }else{
            tempList.push(item?.child)
        }
    }
    const { dataSource,rowSelection } = tempItem ?? {};
    if(dataSource && rowSelection){
        const keys = rowSelection?.selectedRowKeys ?? [];
        const temp = dataSource.filter((item:any) => keys.includes(item.FileId));
        return temp
    }else {
        return [];
    }
}
export const use123Cloud:Use123Cloud = () => {
    const userOptions = ref<UserOptions>({
        expiration:ExpireTimeEnum.forever,
        displayStatus:DefaultShowEnum.list,
        pwdType:PwdEnum.yes,
        pwd:'',//自定义提取码或随机提取码
        shareDelay:500,
        shareProgress:0,
        shareResultInfoList:[],
        shareInfoUserSee:'',
        isSharing:false,
        extraLinkInfoList:[],
        extraLinkUserSee:"",
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
            shareModality:params.expiration,
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
    const transformLinkResult:TransformLinkResult = (info) => {
        return `文件名称:${info.fileName} 直链地址:${info.link}`;
    }
    const handleBatchOperation:HandleBatchOperation = async () => {
        //选中数据
        const selectedRows:SelectedRows[] = getSelectInfoList() ?? [];
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
        const currentShareInfo = [];//本次分享操作分享的文件信息
        //遍历发送
        for(let fileInfo of selectedRows){
            //@ts-ignore
            const data:GiveAfter = {
                ...transformOptions(userOptions.value),
                driveId:0,
                event:"shareCreate",
                fileIdList:fileInfo.FileId,//文件id
                fileNum:1,//文件数量,
                operatePlace:1,
                renameVisible:false,
                shareName:fileInfo.FileName,//分享文件名
                isReward:0,
            }
            //123加密
            function generateRandomParams() {
                const randomValue1 = Math.floor(Math.random() * 10000000000);
                const randomValue2 = Math.floor(Math.random() * 10000000);
                const randomValue3 = Math.floor(Math.random() * 10000000000);
                return `${randomValue1}-${randomValue2}-${randomValue3}`;
            }

            const params: Record<number, string> = {};
            params[Math.floor(Math.random() * 10000000000)] = generateRandomParams();
            const { data:backData } = await axios({
                method:'post',
                url:`${window.location.origin}/a/api/share/create`,
                params,
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
            //存储总分享信息
            userOptions.value.shareResultInfoList.push(tempData);
            currentShareInfo.push(tempData);//本次分享操作分享的文件信息
            //生成用户观看数据
            userOptions.value.shareInfoUserSee+= (transformInfoStyle(tempData) + '\n')
            //进度条
            userOptions.value.shareProgress = Math.floor((currentShareInfo.length / selectedRows.length) * 100 );
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
    const handleBatchExtraLink = async() => {
        //选中数据
        const selectedRows:SelectedRows[] = getSelectInfoList();
        if(!selectedRows.length){
            return MessagePlugin.warning('请选择要提取直链的文件!')
        }
        //开始分享
        userOptions.value.isSharing = true;
        const currentShareInfo = [];//本次分享操作分享的文件信息
        for(let fileInfo of selectedRows){
            const randomParams = get123CloudSecret();
            const { data } : any= await axios({
                method:'get',
                url:`${window.location.origin}/a/api/cdn-link/url`,
                params:{
                    [randomParams[0]]:randomParams[1],
                    fileID: fileInfo.FileId,
                },
                headers:{
                    'Content-Type':'application/json;charset=UTF-8',
                    'Authorization': 'Bearer ' + localStorage.getItem('authorToken')?.slice(1,-1),
                    'LoginUuid':localStorage.getItem('LoginUuid')?.slice(1,-1),
                    'platform':'web',
                }
            }).catch(() => ({ data:{ } }))
            const tempData = {
                fileName:fileInfo.FileName,//文件名
                link:data?.data?.url ?? '',
            }
            //存储总分享信息
            userOptions.value.extraLinkInfoList.push(tempData);
            currentShareInfo.push(tempData);//本次分享操作分享的文件信息
            //生成用户观看数据
            userOptions.value.extraLinkUserSee+= (transformLinkResult(tempData) + '\n')
            //进度条
            userOptions.value.shareProgress = Math.floor((currentShareInfo.length / selectedRows.length) * 100 );
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
        await MessagePlugin.success('批量获取直链成功,请自行查看结果');
    }
    const handleEnd:HandleEnd = () => {
        //关闭窗口执行操作
        userOptions.value.shareResultInfoList = [];
        userOptions.value.extraLinkInfoList = [];
        userOptions.value.shareInfoUserSee = '';
        userOptions.value.extraLinkUserSee = '';
        userOptions.value.shareProgress = 0;
    }
    const copyValue:CopyValue = (type= CopyValueEnum.shareLink) => {
        if(type === CopyValueEnum.shareLink) {
            CopyValueToClipBoard(userOptions.value.shareInfoUserSee + "").then(() => {
                MessagePlugin.success('复制成功');
            }).catch(() => {
                MessagePlugin.warning('复制到剪贴板失败,可能是浏览器不支持该操作');
            })
        }else if(type === CopyValueEnum.extraLink){
            CopyValueToClipBoard(userOptions.value.extraLinkUserSee + "").then(() => {
                MessagePlugin.success('复制成功');
            }).catch(() => {
                MessagePlugin.warning('复制到剪贴板失败,可能是浏览器不支持该操作');
            })
        }
    }
    const download:Download = (type= CopyValueEnum.shareLink) => {
        if(type === CopyValueEnum.shareLink) {
            DownloadTxt(`${cloudInfoStore.cloudName}批量分享-${dayjs().format('YYYY-MM-DD HH:mm:ss')}` ,userOptions.value.shareInfoUserSee);
        }
        else if(type === CopyValueEnum.extraLink){
            DownloadTxt(`${cloudInfoStore.cloudName}直链地址-${dayjs().format('YYYY-MM-DD HH:mm:ss')}` ,userOptions.value.extraLinkUserSee);
        }

    }
    const downloadExcel:DownloadExcel = (type = CopyValueEnum.shareLink) => {
        if(type === CopyValueEnum.shareLink) {
            exportXlsxFile(`${cloudInfoStore.cloudName}批量分享${Date.now()}.xlsx`,transformExcelInfoData(userOptions.value.shareResultInfoList));
        }
        else if(type === CopyValueEnum.extraLink){
            exportXlsxFile(`${cloudInfoStore.cloudName}直链${Date.now()}.xlsx`,transformExcelExtraLinkData(userOptions.value.extraLinkInfoList));
        }
    }
    return {
        userOptions,
        transformOptions,
        transformInfoStyle,
        transformResult,
        transformLinkResult,
        handleBatchOperation,
        handleBatchExtraLink,
        handleEnd,
        copyValue,
        download,
        downloadExcel,
    }
}
