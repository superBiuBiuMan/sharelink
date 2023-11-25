<style scoped lang="less">
.quarkCloud {
  height: 100%;
  display: flex;
  flex-direction: column;
  &_option{
    &_item{
      display: flex;
      align-items: center;
    }
  }
  &_result{
    flex: 1;
    overflow: auto;
  }
}
</style>
<template>
  <div class="quarkCloud">
    <!--配置项-->
    <div class="quarkCloud_option">
        <!--有效期-->
        <div class="quarkCloud_option_item">
          <span>有效期:</span>
          <t-radio-group v-model="userOptions.expireTime">
            <t-radio-button :value="ExpireTimeEnum.oneDay">1天</t-radio-button>
            <t-radio-button :value="ExpireTimeEnum.sevenDay">7天</t-radio-button>
            <t-radio-button :value="ExpireTimeEnum.thirtyDay">30天</t-radio-button>
            <t-radio-button :value="ExpireTimeEnum.forever">永久</t-radio-button>
          </t-radio-group>
            <t-tooltip content="分享一次后等待下一次分享的时间(避免请求频率过高)">延迟(毫秒):</t-tooltip>
            <t-input-number v-model="userOptions.shareDelay" step="100" min="1000"/>
        </div>
        <!--提取码-->
        <div class="quarkCloud_option_item" style="margin: 6px 0">
          <span>提取码:</span>
          <t-radio-group v-model="userOptions.pwdType" >
            <t-radio-button :value="HasPwd.no">无提取码</t-radio-button>
            <t-radio-button :value="HasPwd.yes">有提取码</t-radio-button>
          </t-radio-group>
        </div>
    </div>
    <!--操作栏-->
    <div class="quarkCloud_operation">
      <t-space>
        <t-button @click="handleBatchOperation" :loading="userOptions.isSharing">批量分享</t-button>
        <t-button theme="default" @click="copyValue">复制到剪贴板</t-button>
        <t-button theme="default" @click="download">下载分享链接</t-button>
        <t-button theme="default" @click="downloadExcel">下载信息为Excel</t-button>
      </t-space>
    </div>
    <!--进度条-->
    <div class="quarkCloud_progress">
      <t-progress :percentage="userOptions.shareProgress" :color="{ from:' #84fab0',to: '#00A870' }"/>
    </div>
    <!--分享结果-->
    <div class="quarkCloud_result">
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
import {ExpireTimeEnum, HasPwd} from "./types";
import { usequarkCloud } from "./methods";
const {
        userOptions,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
        downloadExcel
      } = usequarkCloud();
defineExpose({
  handleEnd,
})
</script>
