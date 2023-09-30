<style scoped lang="less">
.cloud115 {
  height: 100%;
  display: flex;
  flex-direction: column;
  &_option{
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    &_time{
      margin-left: 10px;
    }
  }
  &_result{
    flex: 1;
    overflow: auto;
  }
}
</style>
<template>
  <div class="cloud115">
    <!--配置项-->
    <div class="cloud115_option">
        <span>有效期:</span>
        <!--分享时间-->
        <t-radio-group  v-model="expireTime" >
          <!--<t-radio-button :value="ExpireTimeEnum.oneDay">1天</t-radio-button>-->
          <!--<t-radio-button :value="ExpireTimeEnum.sevenDay">7天</t-radio-button>-->
          <t-radio-button :value="ExpireTimeEnum.forever">永久</t-radio-button>
        </t-radio-group>
      <div class="cloud115_option_time">
        <t-tooltip content="分享一次后等待下一次分享的时间(避免请求频率过高)">延迟(毫秒):</t-tooltip>
        <t-input-number v-model="shareDelay" step="100"/>
      </div>
    </div>
    <!--操作栏-->
    <div class="cloud115_operation">
      <t-space>
        <t-button @click="handleBatchOperation" :loading="isSharing">批量分享</t-button>
        <t-button theme="default" @click="copyValue">复制到剪贴板</t-button>
        <t-button theme="default" @click="download">下载分享链接</t-button>
      </t-space>
    </div>
    <!--进度条-->
    <div class="cloud115_progress">
      <t-progress :percentage="shareProgress" :color="{ from:' #84fab0',to: '#00A870' }"/>
    </div>
    <!--分享结果-->
    <div class="cloud115_result">
      <t-textarea
          readonly
          :autosize="{ minRows: 10,}"
          :value="shareInfoUserSee"
          placeholder="分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ExpireTimeEnum} from "./types";
import { use115Cloud } from "./methods";
const {
        expireTime,
        shareDelay,
        isSharing,
        shareInfoUserSee,
        shareProgress,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
      } = use115Cloud();
defineExpose({
  handleEnd,
})
</script>
