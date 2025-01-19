<style scoped lang="less">
.cloud115 {
  height: 100%;
  //display: flex;
  //flex-direction: column;
  //&_option{
  //  display: flex;
  //  align-items: center;
  //  margin: 0 0 20px 0;
  //  &_time{
  //    margin-left: 10px;
  //  }
  //}
  //&_result{
  //  flex: 1;
  //  overflow: auto;
  //}
}
</style>
<template>
  <div class="cloud115">
    <t-space>
      <t-button @click="handleBatchOperation" :loading="isSharing">批量分享</t-button>
      <t-button theme="default" @click="copyValue">复制到剪贴板</t-button>
      <t-button theme="default" @click="download">下载分享链接</t-button>
      <t-button theme="default" @click="downloadExcel">下载信息为Excel</t-button>
    </t-space>
    <!--进度条-->
    <div class="cloud115_progress">
      <t-progress :percentage="shareProgress" :color="{ from:' #84fab0',to: '#00A870' }"/>
    </div>
    <t-collapse >
      <t-collapse-panel header="配置项">
        <t-form
            ref="form"
            :data="formDataInput"
            :colon="true"
            scroll-to-first-error="smooth"
            labelAlign="top"
        >
          <t-form-item label="">
            <t-tooltip content="分享一次后等待下一次分享的时间(避免请求频率过高)"><span class="cloud139_option_item_title">延迟(毫秒):</span></t-tooltip>
            <t-input-number v-model="shareDelay" step="100"/>
          </t-form-item>
          <t-form-item label="有效期" name="time">
            <t-radio-group  v-model="formDataInput.time">
              <t-radio-button :value="ExpireTimeEnum.oneDay">1天</t-radio-button>
              <t-radio-button :value="ExpireTimeEnum.threeDay">3天</t-radio-button>
              <t-radio-button :value="ExpireTimeEnum.fiveDay">5天</t-radio-button>
              <t-radio-button :value="ExpireTimeEnum.sevenDay">7天</t-radio-button>
              <t-radio-button :value="ExpireTimeEnum.fifteen">15天</t-radio-button>
              <t-radio-button :value="ExpireTimeEnum.forever">永久</t-radio-button>
            </t-radio-group>
          </t-form-item>

          <t-form-item label="访问码" name="passcode">
            <t-input v-model="formDataInput.passcode" placeholder="请输入自定义提取码(只允许输入字母和数字)" maxlength="4"/>
          </t-form-item>
          <t-form-item label="分享链接自动填充访问码" name="autoFillRecvcode">
            <t-switch v-model="formDataInput.autoFillRecvcode" size="large" :customValue="[1,0]">
              <template #label="slotProps">{{ slotProps.value ? '开' : '关' }}</template>
            </t-switch>
          </t-form-item>
          <t-form-item label="接收次数" name="receiveUserLimit">
            <t-input-number :auto-width="true" v-model="formDataInput.receiveUserLimit" suffix="个" :min="1"  placeholder="默认不限制" />
          </t-form-item>
          <t-form-item label="允许免登录下载(非会员不可开启)" name="skipLogin">
            <t-switch v-model="formDataInput.skipLogin" size="large" :customValue="[1,0]">
              <template #label="slotProps">{{ slotProps.value ? '开' : '关' }}</template>
            </t-switch>
          </t-form-item>
          <template v-if="formDataInput.skipLogin === 1">
            <t-form-item label="允许免登录下载的总流量" name="skipLoginDownFlowLimit">
              <t-input-number :auto-width="true" v-model="formDataInput.skipLoginDownFlowLimit" suffix="KB" :min="1" step="1" placeholder="默认不限制"/>
            </t-form-item>
          </template>

        </t-form>
      </t-collapse-panel>
      <t-collapse-panel header="分享结果">
        <!--分享结果-->
        <div class="cloud115_result">
          <t-textarea
              readonly
              :autosize="{ minRows: 10,}"
              :value="shareInfoUserSee"
              placeholder="分享结果(格式为文件名称: xxxx 分享链接: xxxx 提取码:xxxx 分享有效时间: xxxx)"
          />
        </div>
      </t-collapse-panel>
    </t-collapse>
  </div>
</template>

<script lang="ts" setup>
import { use115Cloud } from "./methods";
import {ref} from "vue";
import {ExpireTimeEnum} from "./types";
const {
        shareDelay,
        isSharing,
        shareInfoUserSee,
        shareProgress,
        formDataInput,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
        downloadExcel,
      } = use115Cloud();
defineExpose({
  handleEnd,
})
</script>
