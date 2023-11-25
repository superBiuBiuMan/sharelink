<style scoped lang="less">
.ucCloud {
  :deep(.t-input--auto-width){
    min-width: 120px;
  }
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
  <div class="ucCloud">
    <!--配置项-->
    <div class="ucCloud_option">
      <div class="ucCloud_option_item">
        <t-tooltip content="分享一次后等待下一次分享的时间(避免请求频率过高)"><span class="ucCloud_option_item_title">延迟毫秒:</span></t-tooltip>
        <t-input-number v-model="userOptions.shareDelay" step="100"/>
      </div>
      <div class="ucCloud_option_item">
        <span class="ucCloud_option_item_title">分享主题:</span>
        <t-input
            v-model="userOptions.shareTopic"
            :maxlength="30"
            show-limit-number
            clearable
            placeholder="分享主题(可为空)"
        />
      </div>
      <div class="ucCloud_option_item">
        <span class="ucCloud_option_item_title">可下载(次):</span>
        <t-select v-model="userOptions.extractNumber" placeholder="请选择提取次数" auto-width :options="userOptions.extractOptions"/>
      </div>
      <div class="ucCloud_option_item">
        <span class="ucCloud_option_item_title">有效期(天):</span>
        <t-select v-model="userOptions.expireTime" placeholder="请选择提取期限" auto-width :options="userOptions.expireTimeOptions"/>
      </div>
      <t-checkbox v-model="userOptions.isPassword">是否有收件密码</t-checkbox>
    </div>
    <!--操作栏-->
    <div class="ucCloud_operation">
      <t-space>
        <t-button @click="handleBatchOperation" :loading="userOptions.isSharing">批量分享</t-button>
        <t-button theme="default" @click="copyValue">复制到剪贴板</t-button>
        <t-button theme="default" @click="download">下载分享链接</t-button>
      </t-space>
    </div>
    <!--进度条-->
    <div class="ucCloud_progress">
      <t-progress :percentage="userOptions.shareProgress" :color="{ from:' #84fab0',to: '#00A870' }"/>
    </div>
    <!--分享结果-->
    <div class="ucCloud_result">
      <t-textarea
          readonly
          :autosize="{ minRows: 10,}"
          :value="userOptions.shareInfoUserSee"
          placeholder="分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUcCloud } from "./methods";
const {
        userOptions,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
      } = useUcCloud();
defineExpose({
  handleEnd,
})
</script>
