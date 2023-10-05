<style scoped lang="less">
.cloud123 {
  height: 100%;
  display: flex;
  flex-direction: column;
  //&_option{
  //  display: flex;
  //  align-items: center;
  //  margin: 0 0 20px 0;
  //  &_time{
  //    margin-left: 10px;
  //  }
  //}
  &_result{
    flex: 1;
    overflow: auto;
  }
}
</style>
<template>
  <div class="cloud123">
    <!--配置项-->
    <div class="cloud123_option">
      <t-collapse defaultExpandAll>
        <t-collapse-panel value="0" header="配置项" >
          <!--分享延迟-->
          <div class="cloud123_option_item">
            <t-tooltip content="分享一次后等待下一次分享的时间(避免请求频率过高)">延迟(毫秒):</t-tooltip>
            <t-input-number v-model="userOptions.shareDelay" step="100"/>
          </div>
          <!--有效期-->
          <div class="cloud123_option_time">
            <span>有效期:</span>
            <!--@change="handleChangeTime" :default-value="ExpireTimeEnum.forever"-->
            <t-radio-group  v-model="userOptions.expiration">
              <t-radio-button :value="ExpireTimeEnum.oneDay">1天</t-radio-button>
              <t-radio-button :value="ExpireTimeEnum.sevenDay">7天</t-radio-button>
              <t-radio-button :value="ExpireTimeEnum.thirtyDay">30天</t-radio-button>
              <t-radio-button :value="ExpireTimeEnum.forever">永久</t-radio-button>
            </t-radio-group>
          </div>
          <!--默认展示-->
          <div class="cloud123_option_item">
            <span>默认展示:</span>
            <t-radio-group v-model="userOptions.displayStatus">
              <t-radio-button :value="DefaultShowEnum.tile">平铺</t-radio-button>
              <t-radio-button :value="DefaultShowEnum.list">列表</t-radio-button>
            </t-radio-group>
          </div>

          <!--分享形式-->
          <div class="cloud123_option_item">
            <span>分享形式:</span>
            <t-radio-group v-model="userOptions.pwdType">
              <t-radio-button :value="PwdEnum.no">无提取码</t-radio-button>
              <t-radio-button :value="PwdEnum.yes">随机提取码</t-radio-button>
              <t-radio-button :value="PwdEnum.self">自定义提取码</t-radio-button>
            </t-radio-group>
            <template v-if="userOptions.pwdType === PwdEnum.self">
              <t-input v-model="userOptions.pwd" placeholder="请输入自定义提取码" maxlength="4"/>
            </template>
          </div>
        </t-collapse-panel>
      </t-collapse>
    </div>


    <ListModule/>



    <!--操作栏-->
    <div class="cloud123_operation">
      <t-space>
        <t-button @click="handleBatchOperation" :loading="isSharing">批量分享</t-button>
        <t-button theme="default" @click="copyValue">复制到剪贴板</t-button>
        <t-button theme="default" @click="download">下载分享链接</t-button>
      </t-space>
    </div>
    <!--进度条-->
    <div class="cloud123_progress">
      <t-progress :percentage="userOptions.shareProgress" :color="{ from:' #84fab0',to: '#00A870' }"/>
    </div>
    <!--分享结果-->
    <div class="cloud123_result">
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
import {DefaultShowEnum, ExpireTimeEnum, PwdEnum} from "./types";
import { use123Cloud } from "./methods";
import ListModule from "../../modules/123Cloud/listModule/index.vue";
const {
        isSharing,
        userOptions,
        shareInfoUserSee,
        shareProgress,
        handleChangeTime,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
      } = use123Cloud();
defineExpose({
  handleEnd,
})
</script>
