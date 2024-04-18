<style scoped lang="less">
.aliCloud {
  height: 100%;
  display: flex;
  flex-direction: column;
  &_option{
    &_item{
      display: flex;
      align-items: center;
      &_title{
        min-width: 70px;
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
  <div class="aliCloud">
    <!--配置项-->
    <div class="aliCloud_option">
      <div class="aliCloud_option_item">
        <t-tooltip content="分享一次后等待下一次分享的时间(避免请求频率过高)"><span class="aliCloud_option_item_title">延迟毫秒:</span></t-tooltip>
        <t-input-number v-model="userOptions.shareDelay" step="100"/>
      </div>
      <div class="aliCloud_option_item">
        <span class="aliCloud_option_item_title">有效期:</span>
        <t-radio-group  v-model="userOptions.expireTime">
          <t-radio-button :value="ExpireTimeEnum.sevenDay">7天</t-radio-button>
          <t-radio-button :value="ExpireTimeEnum.thirtyDay">30天</t-radio-button>
          <t-radio-button :value="ExpireTimeEnum.forever">永久</t-radio-button>
        </t-radio-group>
      </div>
      <div class="aliCloud_option_item">
        <span class="aliCloud_option_item_title">分享形式:</span>
        <t-radio-group v-model="userOptions.pwdType">
          <t-radio-button :value="PwdEnum.no">无提取码</t-radio-button>
          <t-radio-button :value="PwdEnum.yes">随机提取码</t-radio-button>
        </t-radio-group>
      </div>
    </div>
    <!--操作栏-->
    <div class="aliCloud_operation">
      <t-space>
        <t-button @click="handleBatchOperation" :loading="userOptions.isSharing">批量分享</t-button>
        <t-button theme="default" @click="copyValue">复制到剪贴板</t-button>
        <t-button theme="default" @click="download">下载分享链接</t-button>
        <t-button theme="default" @click="downloadExcel">下载信息为Excel</t-button>
      </t-space>
    </div>
    <!--进度条-->
    <div class="aliCloud_progress">
      <t-progress :percentage="userOptions.shareProgress" :color="{ from:' #84fab0',to: '#00A870' }"/>
    </div>
    <!--分享结果-->
    <div class="aliCloud_result">
      <t-textarea
          readonly
          :autosize="{ minRows: 10,}"
          :value="userOptions.shareInfoUserSee"
          placeholder="(仅限在'资源库'分享资源!)-分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx) 普通用户每天只能使用分享功能5次；会员用户和Lv.1及以上的达人用户，每天可使用分享次数1000次。超过上限后，将提示「今日分享次数已达上限」
        "
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAliCloud } from "./methods";
import {ExpireTimeEnum, PwdEnum} from "./types";
const {
        userOptions,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
        downloadExcel
      } = useAliCloud();
defineExpose({
  handleEnd,
})
</script>
