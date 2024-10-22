<style scoped lang="less">
.cloud123 {
  height: 100%;
  display: flex;
  flex-direction: column;
  &_option{
    margin: 0 0 10px 0;
    &_item{
      display: flex;
      align-items: center;
      margin: 10px 0;
      &_title{
        display: inline-block;
        width: 100px;
      }
    }
  }
  &_result{
    flex: 1;
    overflow: auto;
  }
}
</style>
<template>
  <div class="cloud123">

    <!--进度条-->
    <div class="cloud123_progress">
      <t-progress :percentage="userOptions.shareProgress" :color="{ from:' #84fab0',to: '#00A870' }"/>
    </div>
    <!--配置栏-->
    <div class="cloud123_option">
      <t-collapse  >
        <!--分享配置项-->
        <t-collapse-panel :value="CopyValueEnum.shareLink" header="分享配置(123盘加密算法经常变动,废弃)" >
          <!--操作栏-->
          <div >
            <t-space>
              <t-button @click="handleBatchOperation" :loading="userOptions.isSharing">批量分享</t-button>
              <t-button theme="default" @click="copyValue(CopyValueEnum.shareLink)">复制到剪贴板</t-button>
              <t-button theme="default" @click="download(CopyValueEnum.shareLink)">下载分享链接</t-button>
              <t-button theme="default" @click="downloadExcel(CopyValueEnum.shareLink)">下载信息为Excel</t-button>
            </t-space>
          </div>
          <!--分享延迟-->
          <div class="cloud123_option_item">
            <t-tooltip content="分享一次后等待下一次分享的时间(避免请求频率过高)"><span class="cloud123_option_item_title">延迟(毫秒):</span></t-tooltip>
            <t-input-number v-model="userOptions.shareDelay" step="100"/>
          </div>
          <!--有效期-->
          <div class="cloud123_option_item">
            <span class="cloud123_option_item_title">有效期:</span>
            <t-radio-group  v-model="userOptions.expiration">
              <t-radio-button :value="ExpireTimeEnum.oneDay">1天</t-radio-button>
              <t-radio-button :value="ExpireTimeEnum.sevenDay">7天</t-radio-button>
              <t-radio-button :value="ExpireTimeEnum.thirtyDay">30天</t-radio-button>
              <t-radio-button :value="ExpireTimeEnum.forever">永久</t-radio-button>
            </t-radio-group>
          </div>
          <!--默认展示-->
          <div class="cloud123_option_item">
            <span class="cloud123_option_item_title">默认展示:</span>
            <t-radio-group v-model="userOptions.displayStatus">
              <t-radio-button :value="DefaultShowEnum.tile">平铺</t-radio-button>
              <t-radio-button :value="DefaultShowEnum.list">列表</t-radio-button>
            </t-radio-group>
          </div>
          <!--分享形式-->
          <div class="cloud123_option_item">
            <span class="cloud123_option_item_title">分享形式:</span>
            <t-radio-group v-model="userOptions.pwdType">
              <t-radio-button :value="PwdEnum.no">无提取码</t-radio-button>
              <t-radio-button :value="PwdEnum.yes">随机提取码</t-radio-button>
              <t-radio-button :value="PwdEnum.self">自定义提取码</t-radio-button>
            </t-radio-group>
          </div>
          <!--自定义提取码-->
          <div class="cloud123_option_item" v-if="userOptions.pwdType === PwdEnum.self">
            <span class="cloud123_option_item_title">分享形式:</span>
            <t-input v-model="userOptions.pwd" placeholder="请输入自定义提取码" maxlength="4"/>
          </div>
          <!--分享结果-->
          <div >
            <t-textarea
                readonly
                :autosize="{ minRows: 10,}"
                :value="userOptions.shareInfoUserSee"
                placeholder="分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
            />
          </div>
        </t-collapse-panel>
        <!--获取直链-->
        <t-collapse-panel :value="CopyValueEnum.extraLink" header="获取直链(123云盘VIP才可以用)(123盘加密算法经常变动,废弃)">
          <!--操作栏-->
          <div >
            <t-space>
              <t-button @click="handleBatchExtraLink" :loading="userOptions.isSharing">批量提取直链</t-button>
              <t-button theme="default" @click="copyValue(CopyValueEnum.extraLink)">复制到剪贴板</t-button>
              <t-button theme="default" @click="download(CopyValueEnum.extraLink)">下载直链</t-button>
              <t-button theme="default" @click="downloadExcel(CopyValueEnum.extraLink)">下载信息为Excel</t-button>
            </t-space>
          </div>
          <!--提取结果-->
          <div style="margin-top: 10px">
            <t-textarea
                readonly
                :autosize="{ minRows: 10,}"
                :value="userOptions.extraLinkUserSee"
                placeholder="直链(格式为文件名称: xxxx 直链地址: xxxx)"
            />
          </div>
        </t-collapse-panel>
      </t-collapse>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {CopyValueEnum, DefaultShowEnum, ExpireTimeEnum, PwdEnum} from "./types";
import {use123Cloud} from "./methods";

const {
        userOptions,
        handleBatchOperation,
        handleBatchExtraLink,
        handleEnd,
        copyValue,
        download,
        downloadExcel,
      } = use123Cloud();
defineExpose({
  handleEnd,
})
</script>
