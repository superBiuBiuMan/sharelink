<style scoped lang="less">
.weiyunCloud {
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
  <div class="weiyunCloud">
    <!--配置项-->
    <div class="weiyunCloud_option">
       <t-checkbox  v-model="isAddSecret"> 添加提取码 </t-checkbox>
        <div class="weiyunCloud_option_time">延迟时间(毫秒):<t-input-number v-model="shareDelay" step="100"/></div>
    </div>
    <!--操作栏-->
    <div class="weiyunCloud_operation">
      <t-space>
        <t-button @click="handleBatchOperation" :loading="isSharing">批量分享</t-button>
        <t-button theme="default" @click="copyValue">复制到剪贴板</t-button>
        <t-button theme="default" @click="download">下载文件</t-button>
      </t-space>
    </div>
    <!--进度条-->
    <div class="weiyunCloud_progress">
      <t-progress :percentage="shareProgress" :color="{ from:' #84fab0',to: '#00A870' }"/>
    </div>
    <!--分享结果-->
    <div class="weiyunCloud_result">
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
import { useWeiYunCloud } from "./methods";
//interface Props {
//  modelValue: any
//}
//
//interface Emits {
//  (event: 'update:modelValue', data: any): void
//}
//
//const props = defineProps<Props>()
//const emits = defineEmits<Emits>()

const {
        shareDelay,
        isSharing,
        shareInfoUserSee,
        shareProgress,
        isAddSecret,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
      } = useWeiYunCloud();
defineExpose({
  handleEnd,
})
</script>
