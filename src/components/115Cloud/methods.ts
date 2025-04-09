import {
  ExpireTimeEnum,
  ShareInfoTypes,
  HandleBatchOperation,
  ShareReturnInfoTypes,
  HandleTransformFormat,
  SelectFileInfoList,
  HandleEnd,
  CopyValue,
  Download,
  Use115Cloud,
  TransformExcelInfoData,
} from "./types";
import { MessagePlugin } from "tdesign-vue-next";
import dayjs from "dayjs";
import { ref } from "vue";
import { GM_xmlhttpRequest, unsafeWindow } from "$";
import {
  CopyValueToClipBoard,
  bytesToSize,
  DownloadTxt,
  exportXlsxFile,
  generateRandomString,
} from "../../utils";
import { ShareDOMSelect } from "../../infoConfig";
import { cloudInfoStore } from "../../store";
import { DownloadExcel } from "../ucCloud/types";

const transformExcelInfoData: TransformExcelInfoData = (data) => {
  const timeText = {
    [ExpireTimeEnum.oneDay]: "1天",
    [ExpireTimeEnum.threeDay]: "3天",
    [ExpireTimeEnum.fiveDay]: "5天",
    [ExpireTimeEnum.sevenDay]: "7天",
    [ExpireTimeEnum.fifteen]: "15",
    [ExpireTimeEnum.forever]: "永久",
  };
  return (
    data?.map((item) => {
      return {
        文件名称: item.fileName ?? "",
        文件大小: item.fileSize ?? "",
        分享链接: item.share_url ?? "",
        提取码: item.receive_code ?? "",
        有效期: timeText[item.share_duration],
        分享链接自动填充访问码:
          Number(item.auto_fill_recvcode) === 1 ? "开启" : "关闭",
        接收次数: item.receive_user_limit ? item.receive_user_limit : "不限制",
        允许免登录下载: Number(item.skip_login) === 1 ? "开启" : "关闭",
        免登录下载的总流量: Number(item.skip_login_down_flow_limit)
          ? Math.round(Number(item.skip_login_down_flow_limit) / 1024) + "KB"
          : "不限制",
      };
    }) ?? []
  );
};
export const use115Cloud: Use115Cloud = () => {
  const shareDelay = ref<number>(500);
  const formDataInput = ref({
    time: ExpireTimeEnum.forever,
    passcode: "",
    autoFillRecvcode: 1, //是否自动填充访问码
    receiveUserLimit: null, //接收次数
    skipLogin: 0, //是否允许免登录下载
    skipLoginDownFlowLimit: null, //允许免登录下载的总流量
  });
  const shareInfo = ref<Array<ShareInfoTypes>>([]);
  const shareInfoUserSee = ref<string>("");
  const shareProgress = ref<number>(0);
  const selectFileInfoList = ref<Array<SelectFileInfoList>>([]);
  const isSharing = ref<boolean>(false);
  const handleTransformFormat: HandleTransformFormat = (info) => {
    const timeText = {
      [ExpireTimeEnum.oneDay]: "1天",
      [ExpireTimeEnum.threeDay]: "3天",
      [ExpireTimeEnum.fiveDay]: "5天",
      [ExpireTimeEnum.sevenDay]: "7天",
      [ExpireTimeEnum.fifteen]: "15",
      [ExpireTimeEnum.forever]: "永久",
    };
    return `文件名称: ${info.fileName} 分享链接:${info.share_url} 提取码:${
      info.receive_code
    }分享链接自动填充访问码:${
      Number(info.auto_fill_recvcode) === 1 ? "开启" : "关闭"
    } 接收次数:${
      info.receive_user_limit ? info.receive_user_limit : "不限制"
    } 允许免登录下载:${
      Number(info.skip_login) === 1 ? "开启" : "关闭"
    } 免登录下载的总流量:${
      Number(info.skip_login_down_flow_limit)
        ? Math.round(Number(info.skip_login_down_flow_limit) / 1024) + "KB"
        : "不限制"
    } 分享有效时间: ${timeText[info.share_duration]}`;
  };
  const handleGetFolderSize = (id: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: "get",
        url: `https://webapi.115.com/category/get?cid=${id}`,
        onload: ({ response }) => {
          const result: any = JSON.parse(response);
          resolve(result?.size ?? "NA");
        },
      });
    });
  };
  const handleTransformFormatVersion2: HandleTransformFormat = (info) => {
    if (info.receive_code && formDataInput.value.autoFillRecvcode === 1) {
      return `${info.fileName}[${info.fileSize}]$${info.share_url}?password=${info.receive_code}&#`;
    } else if (info.receive_code) {
      return `${info.fileName}[${info.fileSize}]$${info.receive_code}$${info.share_url}`;
    } else {
      return `${info.fileName}[${info.fileSize}]$${info.share_url}`;
    }
  };
  const handleBatchOperation: HandleBatchOperation = async () => {
    const iframe = document.querySelector("iframe"); //获取iframe
    const iframeWindow =
      (<HTMLIFrameElement>iframe).contentWindow ?? unsafeWindow;
    //获取选中DOM
    const selectDOM = iframeWindow.document.querySelectorAll(
      ShareDOMSelect["cloud115"]?.select ?? ""
    );
    if (!selectDOM.length) {
      return MessagePlugin.warning("请选择要分享的文件!");
    }
    //开始分享
    isSharing.value = true;
    shareProgress.value = 0;
    selectFileInfoList.value = [];
    for (let dom of selectDOM) {
      let id = "";
      let type = "";
      if (
        dom.getAttribute(ShareDOMSelect["cloud115"]?.idAttribute?.[0] ?? "")
      ) {
        id =
          dom.getAttribute(
            ShareDOMSelect["cloud115"]?.idAttribute?.[0] ?? ""
          ) ?? "";
        type = "file"; //文件
      } else if (
        dom.getAttribute(ShareDOMSelect["cloud115"]?.idAttribute?.[1] ?? "")
      ) {
        id =
          dom.getAttribute(
            ShareDOMSelect["cloud115"]?.idAttribute?.[1] ?? ""
          ) ?? "";
        type = "folder"; //文件夹
      }
      const title = dom.getAttribute("title");
      selectFileInfoList.value.push({
        id, //存储文件id
        fileSize: dom.getAttribute("file_size")
          ? bytesToSize(Number(dom.getAttribute("file_size")))
          : "NA",
        fileName: title ?? "(!!$$未知名称!!$$)", //文件名称
        fileType: type, //文件类型
      });
    }
    //遍历发送
    for (let fileInfo of selectFileInfoList.value) {
      const formData = new FormData();
      let fileSize = "";
      if (fileInfo.fileType === "file") {
        fileSize = fileInfo.fileSize;
      } else if (fileInfo.fileType === "folder") {
        //接口请求文件夹大小
        fileSize = await handleGetFolderSize(fileInfo.id as string);
      }
      //@ts-ignore
      const { user_id } = unsafeWindow || {};
      formData.append("user_id", user_id); //用户id
      formData.append("file_ids", fileInfo.id + ""); //文件id
      formData.append("ignore_warn", "1");
      formData.append("is_asc", "0");
      formData.append("order", "user_ptime");
      GM_xmlhttpRequest({
        method: "post",
        url: "https://webapi.115.com/share/send",
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
        },
        data: formData,
        onload: ({ response }) => {
          const result: ShareReturnInfoTypes = JSON.parse(response);
          //@ts-ignore
          let tempData: ShareInfoTypes = {
            ...(result.data || {}),
            fileName: fileInfo.fileName,
            // fileSize: fileInfo.fileSize,
            fileSize,
          };
          const formDataUpdate = new FormData();
          const info: any = {
            auto_fill_recvcode: formDataInput.value.autoFillRecvcode, //分享链接自动填充访问码-传入0则关闭,1则开启
            receive_user_limit: formDataInput.value.receiveUserLimit
              ? formDataInput.value.receiveUserLimit
              : "", //接收次数-不传则不限制,传入数字则限制
            skip_login: formDataInput.value.skipLogin, //允许免登录下载 传入0关闭 1开启,
            skip_login_down_flow_limit: formDataInput.value
              .skipLoginDownFlowLimit
              ? formDataInput.value.skipLoginDownFlowLimit * 1024
              : "", //免登录下载限制 - 大小  * 1024 B 不传则不限制
            share_duration: formDataInput.value.time,
          };
          formDataUpdate.append("share_code", tempData.share_code as string);
          formDataUpdate.append("auto_fill_recvcode", info.auto_fill_recvcode);
          formDataUpdate.append("receive_user_limit", info.receive_user_limit);
          formDataUpdate.append("share_duration", info.share_duration);

          //免登录设置
          const skipLoginForm = new FormData();
          skipLoginForm.append("share_code", tempData.share_code as string);
          if (info.skip_login * 1 === 1) {
            //开启免登录下载
            skipLoginForm.append("skip_login", info.skip_login);
            skipLoginForm.append(
              "skip_login_down_flow_limit",
              info.skip_login_down_flow_limit
            );
          } else {
            //关闭免登录下载
            skipLoginForm.append("skip_login", info.skip_login);
          }

          if (formDataInput.value.passcode) {
            formDataUpdate.append("receive_code", formDataInput.value.passcode);
            formDataUpdate.append("is_custom_code", "1");
            tempData.receive_code = formDataInput.value.passcode;
          }
          //开始更新结果
          GM_xmlhttpRequest({
            method: "post",
            url: "https://webapi.115.com/share/updateshare",
            headers: {
              Accept: "application/json, text/javascript, */*; q=0.01",
            },
            data: formDataUpdate,
            onload: ({ response: responseTwice }) => {
              tempData = {
                ...tempData,
                ...info,
              };
              //填充返回结果
              shareInfo.value.push(tempData);

              //更新免登录下载限制
              GM_xmlhttpRequest({
                method: "post",
                url: "https://webapi.115.com/share/skip_login_down",
                headers: {
                  Accept: "application/json, text/javascript, */*; q=0.01",
                },
                data: skipLoginForm,
                onload: ({ response: responseThree }) => {
                  //生成用户观看数据
                  shareInfoUserSee.value +=
                    handleTransformFormat(tempData) + "\n";
                  //进度条
                  shareProgress.value = Math.floor(
                    (shareInfo.value.length / selectFileInfoList.value.length) *
                      100
                  );
                },
                onerror: (res) => {
                  console.error("二次更新失败", res);
                },
              });
            },
            onerror: (res) => {
              console.error("二次更新失败", res);
            },
          });
        },
        onerror: (res) => {
          console.error("失败", res);
        },
      });
      //等待时间
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, shareDelay.value);
      });
    }
    //分享完成
    shareProgress.value = 100; //以防万一~
    isSharing.value = false;
    MessagePlugin.success("批量分享成功,请自行查看结果");
  };

  const handleEnd: HandleEnd = () => {
    //关闭窗口执行操作
    shareInfo.value = [];
    shareInfoUserSee.value = "";
    shareProgress.value = 0;
    selectFileInfoList.value = [];
  };

  const copyValue: CopyValue = () => {
    CopyValueToClipBoard(shareInfoUserSee.value + "")
      .then(() => {
        MessagePlugin.success("复制成功");
      })
      .catch(() => {
        MessagePlugin.warning("复制到剪贴板失败,可能是浏览器不支持该操作");
      });
  };
  const download: Download = () => {
    DownloadTxt(
      `${cloudInfoStore.cloudName}批量分享-${dayjs().format(
        "YYYY-MM-DD HH:mm:ss"
      )}`,
      shareInfoUserSee.value
    );
  };
  const downloadVersion2: Download = () => {
    let tempData = "";
    for (const temp of shareInfo.value) {
      tempData += handleTransformFormatVersion2(temp as any) + "\n";
    }
    DownloadTxt(
      `${cloudInfoStore.cloudName}批量分享-${dayjs().format(
        "YYYY-MM-DD HH:mm:ss"
      )}`,
      tempData
    );
  };
  const downloadExcel: DownloadExcel = () => {
    exportXlsxFile(
      `${cloudInfoStore.cloudName}批量分享-${dayjs().format(
        "YYYY-MM-DD HH:mm:ss"
      )}.xlsx`,
      transformExcelInfoData(shareInfo.value)
    );
  };
  return {
    shareDelay,
    formDataInput,
    shareInfo,
    selectFileInfoList,
    shareInfoUserSee,

    isSharing,
    shareProgress,

    handleBatchOperation,
    downloadVersion2,
    handleTransformFormat,
    downloadExcel,
    handleEnd,
    copyValue,
    download,
  };
};
