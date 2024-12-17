import {
    CopyValue,
    CopyValueEnum,
    Download,
    DownloadExcel,
    HandleBatchOperation,
    HandleEnd,
    UseOnedriveCloud,
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

const getSelectInfoList = () => {
    const reactDOM = document.querySelector('#appRoot > div > div:nth-of-type(2)')
    //@ts-ignore;
    const key = Object.keys(reactDOM)?.find(key =>
      key.startsWith("__reactFiber$")
    );
    //@ts-ignore;
    return reactDOM[key].firstEffect.pendingProps.selection._selectedItems ?? [];
}
export const useOnedriveCloud:UseOnedriveCloud = () => {
    const userOptions = ref<UserOptions>({
        shareDelay:500,
        shareProgress:0,
        shareResultInfoList:[],
        shareInfoUserSee:'',
        isSharing:false,
    })


    const handleBatchOperation:HandleBatchOperation = async () => {
        const selectedRows = getSelectInfoList();
        console.log('选择的文件',selectedRows);
        //选中数据
        if(!selectedRows.length){
            return MessagePlugin.warning('请选择要分享的文件!')
        }
        //选中id数据
        //const selectedRowKeys:number[] = reactDOM[key].memoizedProps.children[0].props.children._owner.memoizedState.selectedRowKeys
        //开始分享
        userOptions.value.isSharing = true;
        const currentShareInfo = [];//本次分享操作分享的文件信息
        //遍历发送
        for(let fileInfo of selectedRows){

            //存储总分享信息
            // userOptions.value.shareResultInfoList.push(tempData);
            // currentShareInfo.push(tempData);//本次分享操作分享的文件信息
            // //生成用户观看数据
            // userOptions.value.shareInfoUserSee+= (transformInfoStyle(tempData) + '\n')
            // //进度条
            // userOptions.value.shareProgress = Math.floor((currentShareInfo.length / selectedRows.length) * 100 );
            // //等待时间
            // await new Promise<void>(resolve => {
            //     setTimeout(() => {
            //         resolve()
            //     },userOptions.value.shareDelay)
            // })
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
    const copyValue:CopyValue = (type= CopyValueEnum.shareLink) => {
        if(type === CopyValueEnum.shareLink) {
            CopyValueToClipBoard(userOptions.value.shareInfoUserSee + "").then(() => {
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

    }
    const downloadExcel:DownloadExcel = (type = CopyValueEnum.shareLink) => {
        if(type === CopyValueEnum.shareLink) {
            // exportXlsxFile(`${cloudInfoStore.cloudName}批量分享${Date.now()}.xlsx`,transformExcelInfoData(userOptions.value.shareResultInfoList));
        }
    }
    return {
        userOptions,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
        downloadExcel,
    }
}
