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
    <t-collapse :default-value="[0]" >
      <t-collapse-panel header="配置项">
        <t-form
            ref="form"
            :data="formData"
            :colon="true"
            scroll-to-first-error="smooth"
            labelAlign="top"
        >
          <t-form-item label="有效期" name="time">
            <t-radio-group  v-model="formData.time">
              <t-radio-button :value="ExpireTimeEnum.oneDay">1天</t-radio-button>
              <t-radio-button :value="ExpireTimeEnum.threeDay">3天</t-radio-button>
              <t-radio-button :value="ExpireTimeEnum.fiveDay">5天</t-radio-button>
              <t-radio-button :value="ExpireTimeEnum.sevenDay">7天</t-radio-button>
              <t-radio-button :value="ExpireTimeEnum.fifteen">15天</t-radio-button>
              <t-radio-button :value="ExpireTimeEnum.forever">永久</t-radio-button>
            </t-radio-group>
          </t-form-item>

          <t-form-item label="访问码" name="passcode">
            <t-input v-model="formData.passcode" placeholder="请输入自定义提取码(只允许输入字母和数字)" maxlength="4"/>
          </t-form-item>
          <t-form-item label="分享链接自动填充访问码" name="autoFillRecvcode">
            <t-switch v-model="formData.autoFillRecvcode" size="large" :customValue="[1,0]">
              <template #label="slotProps">{{ slotProps.value ? '开' : '关' }}</template>
            </t-switch>
          </t-form-item>
          <t-form-item label="接收次数" name="receiveUserLimit">
            <t-input-number :auto-width="true" v-model="formData.receiveUserLimit" suffix="个" :min="1"  placeholder="默认不限制" min="1"/>
          </t-form-item>
          <t-form-item label="允许免登录下载" name="skipLogin">
            <t-switch v-model="formData.skipLogin" size="large" :customValue="[1,0]">
              <template #label="slotProps">{{ slotProps.value ? '开' : '关' }}</template>
            </t-switch>
          </t-form-item>
          <template v-if="formData.skipLogin === 1">
            <t-form-item label="允许免登录下载的总流量" name="skipLoginDownFlowLimit">
              <t-input-number :auto-width="true" v-model="formData.skipLoginDownFlowLimit" suffix="KB" :min="1" step="1" placeholder="默认不限制" min="1"/>
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
    <!--@reset="onReset"-->
    <!--:layout="formData.layout"-->
    <!--@submit="onSubmit"-->

    <!--配置项-->
    <!--<div class="cloud115_option">-->
    <!--    <span>有效期:</span>-->
    <!--    &lt;!&ndash;分享时间&ndash;&gt;-->
    <!--    <t-radio-group  v-model="expireTime">-->
    <!--      <t-radio-button :value="ExpireTimeEnum.oneDay">1天</t-radio-button>-->
    <!--      <t-radio-button :value="ExpireTimeEnum.threeDay">3天</t-radio-button>-->
    <!--      <t-radio-button :value="ExpireTimeEnum.fiveDay">5天</t-radio-button>-->
    <!--      <t-radio-button :value="ExpireTimeEnum.sevenDay">7天</t-radio-button>-->
    <!--      <t-radio-button :value="ExpireTimeEnum.fifteen">15天</t-radio-button>-->
    <!--      <t-radio-button :value="ExpireTimeEnum.forever">永久</t-radio-button>-->
    <!--    </t-radio-group>-->
    <!--  <div class="cloud115_option_time">-->
    <!--    <t-tooltip content="分享一次后等待下一次分享的时间(避免请求频率过高)">延迟(毫秒):</t-tooltip>-->
    <!--    <t-input-number v-model="shareDelay" step="100"/>-->
    <!--  </div>-->
    <!--</div>-->
    <!--&lt;!&ndash;操作栏&ndash;&gt;-->
    <!--<div class="cloud115_operation">-->

    <!--</div>-->
    <!--&lt;!&ndash;进度条&ndash;&gt;-->
    <!--<div class="cloud115_progress">-->
    <!--  <t-progress :percentage="shareProgress" :color="{ from:' #84fab0',to: '#00A870' }"/>-->
    <!--</div>-->

  </div>
</template>

<script lang="ts" setup>
import { use115Cloud } from "./methods";
import {ref} from "vue";
import {ExpireTimeEnum} from "./types";
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
        downloadExcel,
      } = use115Cloud();
const formData = ref<any>({
  time:ExpireTimeEnum.forever,
  passcode:"",
  autoFillRecvcode:1,//是否自动填充访问码
  receiveUserLimit:null,//接收次数
  skipLogin:1,//是否允许免登录下载
  skipLoginDownFlowLimit:null,//允许免登录下载的总流量
})

defineExpose({
  handleEnd,
})
</script>
