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
    UseUcCloud,
    DownloadExcel,
    TransformExcelInfoData,
} from "./types";
import {MessagePlugin} from 'tdesign-vue-next';
import {ref} from "vue";
import {CopyValueToClipBoard, DownloadTxt, exportXlsxFile, generateRandomString} from "../../utils";
import {GM_xmlhttpRequest} from "$";
import {cloudInfoStore} from "../../store";

/**
 * 获取task_id
 * @param data
 */
function getTaskId(data:any){
    return new Promise<{task_id:string,share_id:string}>((resolve, reject) => {
        GM_xmlhttpRequest({
            method:'post',
            url:'https://pc-api.uc.cn/1/clouddrive/share?pr=UCBrowser&fr=pc',
            headers:{
                'accept':'application/json, text/plain, */*',
            },
            data:JSON.stringify(data),
            onload: ({response}) => {
                const { data = {} } = JSON.parse(response) || {};
                resolve({
                    task_id:data?.task_id ? data?.task_id : data?.task_resp?.data?.task_id,
                    share_id:data?.task_resp?.data?.share_id ?? "",
                });
            },
            onerror:(res:any) => {
                reject(res)
            }
        })
    })
}

/**
 * 获取share_id
 */
function getShareId(taskId:string,time:number = 0){
    return new Promise<{share_id:string}>((resolve, reject) => {
        GM_xmlhttpRequest({
            method:'get',
            url:`https://pc-api.uc.cn/1/clouddrive/task?pr=UCBrowser&fr=pc&task_id=${taskId}&retry_index=${time}`,
            headers:{
                'accept':'application/json, text/plain, */*',
            },
            onload: ({response}) => {
                const { data = {} } = JSON.parse(response) || {};
                resolve({
                    share_id:data?.share_id ?? "",
                });
            },
            onerror:(res:any) => {
                reject(res)
            }
        })
    })
}


/**
 * 获取分享信息(链接啥的)
 * @param share_id
 */
function getShareInfo(share_id:string){
    return new Promise<{share_url:string, passcode:string}>((resolve, reject) => {
        GM_xmlhttpRequest({
            method:'post',
            url:'https://pc-api.uc.cn/1/clouddrive/share/password?pr=UCBrowser&fr=pc',
            data:JSON.stringify({
                share_id,
            }),
            onload: ({ response }) => {
                const { data } = JSON.parse(response) || {};
                const { share_url = '', passcode = ''} = data || {};
                resolve({
                    share_url,
                    passcode,
                });
            },
            onerror: (res) => {
                reject(res);
            }
        })
    })
}


/**
 * 格式化输出Excel数据
 * @param data
 */
const transformExcelInfoData:TransformExcelInfoData = (data) => {
    return data?.map(item => {
        let time:string;
        switch (item.expireTime) {
            //有效期
            case ExpireTimeEnum.forever: time = '永久';break;
            case ExpireTimeEnum.oneDay: time = '1天';break;
            case ExpireTimeEnum.sevenDay: time = '7天';break;
            case ExpireTimeEnum.thirty: time = '30天';break;
            case ExpireTimeEnum.sixty: time = '60天';break;
            case ExpireTimeEnum.halfYear: time = '180天';break;
            default: time = '未知';
        }
        let codeNumber:string;
        switch (item.extractNumber) {
            //可下载次数
            case ExtractEnum.forever: codeNumber = '无限'; break;
            case null: codeNumber = '无限'; break;
            case ExtractEnum.one: codeNumber = '1次'; break;
            case ExtractEnum.five: codeNumber = '5次'; break;
            case ExtractEnum.ten: codeNumber = '10次'; break;
            case ExtractEnum.fifty: codeNumber = '50次'; break;
            case ExtractEnum.hundred: codeNumber = '100次'; break;
            default: codeNumber = '未知';
        }
        return  {
            "文件名称":item?.fileName ?? "",
            "分享链接":item?.share_url ?? "",
            "提取码":item?.passcode ?? "",
            "有效期":time,
            "可下载次数":codeNumber,
            "分享主题":item?.title ?? "",
        }
    }) ?? []
}
export const useUcCloud:UseUcCloud = () => {
    const userOptions = ref<UserOptions>({
        //自定义提取码
        selfPwd:"",
        //有效期
        expireTimeOptions:[
            { label:'不限',value:ExpireTimeEnum.forever },
            { label:'1天',value:ExpireTimeEnum.oneDay },
            { label:'7天',value:ExpireTimeEnum.sevenDay},
            { label:'30天',value:ExpireTimeEnum.thirty },
            { label:'60天',value:ExpireTimeEnum.sixty },
            { label:'180天',value:ExpireTimeEnum.halfYear },
        ],
        //可下载次数
        extractOptions:[
            { label:'不限', value: ExtractEnum.forever },
            { label:'1次', value: ExtractEnum.one },
            { label:'5次', value: ExtractEnum.five },
            { label:'10次', value: ExtractEnum.ten },
            { label:'50次', value: ExtractEnum.fifty },
            { label:'100次', value: ExtractEnum.hundred },

        ],
        shareDelay:500,
        isPassword:true,
        shareTopic:'',
        expireTime:ExpireTimeEnum.forever,
        extractNumber:ExtractEnum.forever,
        shareInfo:[],
        shareInfoUserSee:'',
        shareProgress:0,
        selectFileInfoList:[],
        isSharing:false,
    })
    const handleTransformFormat:HandleTransformFormat = (info) => {
        let time:string;
        switch (info.expireTime) {
            //有效期
            case ExpireTimeEnum.forever: time = '永久';break;
            case ExpireTimeEnum.oneDay: time = '1天';break;
            case ExpireTimeEnum.sevenDay: time = '7天';break;
            case ExpireTimeEnum.thirty: time = '30天';break;
            case ExpireTimeEnum.sixty: time = '60天';break;
            case ExpireTimeEnum.halfYear: time = '180天';break;
            default: time = '未知';
        }
        let codeNumber:string;
        switch (info.extractNumber) {
            //可下载次数
            case ExtractEnum.forever: codeNumber = '无限'; break;
            case null: codeNumber = '无限'; break;
            case ExtractEnum.one: codeNumber = '1次'; break;
            case ExtractEnum.five: codeNumber = '5次'; break;
            case ExtractEnum.ten: codeNumber = '10次'; break;
            case ExtractEnum.fifty: codeNumber = '50次'; break;
            case ExtractEnum.hundred: codeNumber = '100次'; break;
            default: codeNumber = '未知';
        }
        return info.title
            ? `文件名称: ${info.fileName} 分享链接:${info.share_url} 提取码:${info.passcode ?? "为空"} 有效期: ${time} 可下载次数:${codeNumber} 分享主题:${info.title ?? ''}`
            : `文件名称: ${info.fileName} 分享链接:${info.share_url} 提取码:${info.passcode ?? "为空"} 有效期: ${time} 可下载次数:${codeNumber}`;
    }
    const handleBatchOperation:HandleBatchOperation = async () => {
        const tempDOM = document.querySelector('.file-list');
        if(!tempDOM){
            throw new Error('初始化UC云盘失败,DOM未找到')
        }
        //@ts-ignore;
        const key = Object.keys(tempDOM)?.find(key =>
            key.startsWith("__reactInternalInstance$")
        );
        if(!key){
            console.error("初始化UC云盘失败,key未找到")
            throw new Error('初始化UC云盘失败,key未找到')
        }
        //@ts-ignore;
        const selectedRowKeys:string[] = tempDOM[key]?.memoizedProps?.children?.[1]?.props?.selectedRowKeys ?? [];//选中项目的key
        //@ts-ignore;
        const allRowInfos:any[] =  tempDOM[key]?.memoizedProps?.children?.[1]?.props?.list ?? [];
        if(!selectedRowKeys.length) {
            return MessagePlugin.warning('请选择要分享的文件!')
        }
        //获取选中列表的详细信息(这里只获取文件名和id)
        const selectRowInfos:{name:string,id:string}[] = allRowInfos?.filter(item1 => selectedRowKeys?.some(key => key === item1.fid))?.map(item => ({name:item.file_name,id:item.fid})) ?? [];
        //开始分享
        userOptions.value.isSharing = true;
        const currentShareInfo = [];//本次分享操作分享的文件信息
        //遍历填充选中文件信息
        for(let item of selectRowInfos){
            userOptions.value.selectFileInfoList.push({
                id:item?.id,
                fileName:item?.name ?? '',
                expireTime: userOptions.value.expireTime,
                //UC网盘提取次数为null代表不限制,但是枚举又不能传入null...
                extractNumber:userOptions.value.extractNumber === -1 ?  null : userOptions.value.extractNumber,
                passcode:userOptions.value.isPassword ? (userOptions.value.selfPwd ?  userOptions.value.selfPwd :generateRandomString() ) : "",
                title:userOptions.value.shareTopic ?? '',//分享主题
            })
        }
        //遍历发送
        for(let fileInfo of userOptions.value.selectFileInfoList){
            const sendData = {
                expired_type:fileInfo.expireTime,//分享天数
                dl_limit:fileInfo.extractNumber,//提取次数
                passcode:fileInfo.passcode,//随机提取码
                url_type:2,
                title:fileInfo.title,//标题
                fid_list:[fileInfo.id],//文件id
            }
            const { task_id } = await getTaskId(sendData);
            let tempShareID = await getShareId(task_id);
            if(!tempShareID.share_id){
                tempShareID = await getShareId(task_id,1);
            }
            const { share_url,passcode } = await getShareInfo(tempShareID.share_id).catch(() => ({share_url:"",passcode:""}));

            let tempData:ShareInfoTypes = {
                ...fileInfo,
                share_url:share_url ?? '',
            }
            //存储分享信息
            userOptions.value.shareInfo.push(tempData);//总的分享信息
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
        userOptions.value.shareProgress = 100;//以防万一~
        userOptions.value.selectFileInfoList = [];
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
        downloadExcel,
    }
}
