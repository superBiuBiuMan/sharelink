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
    <!--操作栏-->
    <div class="cloud123_operation">
      <t-space>
        <t-button @click="handleBatchOperation" :loading="userOptions.isSharing">批量分享</t-button>
        <t-button theme="default" @click="copyValue">复制到剪贴板</t-button>
        <t-button theme="default" @click="download">下载分享链接</t-button>
      </t-space>
    </div>
    <!--进度条-->
    <div class="cloud123_progress">
      <t-progress :percentage="userOptions.shareProgress" :color="{ from:' #84fab0',to: '#00A870' }"/>
    </div>
    <!--配置栏-->
    <div class="cloud123_option">
      <t-collapse  expandMutex>
        <!--配置项-->
        <t-collapse-panel value="0" header="分享配置" >
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
          <template v-if="userOptions.pwdType === PwdEnum.self">
            <t-input v-model="userOptions.pwd" placeholder="请输入自定义提取码" maxlength="4"/>
          </template>
        </t-collapse-panel>
        <!--表格-->
        <t-collapse-panel value="1" header="文件选择">
          <div style="height: 60vh;overflow-y: scroll">
            <ListModule :list="userOptions.listData" v-model:infos="userOptions.selectFileInfoList"/>
          </div>
        </t-collapse-panel>
      </t-collapse>
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
        userOptions,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
      } = use123Cloud();
defineExpose({
  handleEnd,
})
</script>
