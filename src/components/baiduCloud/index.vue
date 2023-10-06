<style scoped lang="less">
.baiduCloud {
  height: 100%;
  display: flex;
  flex-direction: column;
  &_option{
    &_item:nth-of-type(2){
      margin: 14px 0;
    }
  }
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
  <div class="baiduCloud">
    <!--配置项-->
    <div class="baiduCloud_option">
      <div class="baiduCloud_option_item">
        <span>有效期:</span>
        <!--分享时间-->
        <t-radio-group v-model="userOptions.expireTime" >
          <t-radio-button :value="ExpireTimeEnum.oneDay">1天</t-radio-button>
          <t-radio-button :value="ExpireTimeEnum.sevenDay">7天</t-radio-button>
          <t-radio-button :value="ExpireTimeEnum.thirtyDay">30天</t-radio-button>
          <t-radio-button :value="ExpireTimeEnum.forever">永久</t-radio-button>
        </t-radio-group>
        <!--延迟-->
        <t-tooltip content="分享一次后等待下一次分享的时间(避免请求频率过高)">&nbsp;延迟(毫秒):</t-tooltip>
        <t-input-number v-model="userOptions.shareDelay" step="100"/>
      </div>
      <div class="baiduCloud_option_item">
        <span>提取码:</span>
        <t-radio-group v-model="userOptions.pwdType" >
          <t-radio-button :value="HasPwdEnum.random">随机提取码</t-radio-button>
          <t-radio-button :value="HasPwdEnum.self">自定义提取码</t-radio-button>
        </t-radio-group>
        <template v-if="userOptions.pwdType === HasPwdEnum.self">
          <div style="margin-top: 4px">
            <t-input v-model="userOptions.pwd" placeholder="请输入自定义提取码(只支持数字和英文,最长4位)" maxlength="4"/>
          </div>
        </template>
      </div>
    </div>
    <!--操作栏-->
    <div class="baiduCloud_operation">
      <t-space>
        <t-button @click="handleBatchOperation" :loading="userOptions.isSharing">批量分享</t-button>
        <t-button theme="default" @click="copyValue">复制到剪贴板</t-button>
        <t-button theme="default" @click="download">下载分享链接</t-button>
      </t-space>
    </div>
    <!--进度条-->
    <div class="baiduCloud_progress">
      <t-progress :percentage="userOptions.shareProgress" :color="{ from:' #84fab0',to: '#00A870' }"/>
    </div>
    <!--分享结果-->
    <div class="baiduCloud_result">
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
import {ExpireTimeEnum, HasPwdEnum} from "./types";
import { useBaiduCloud } from "./methods";
const {
        userOptions,
        handleBatchOperation,
        handleEnd,
        copyValue,
        download,
      } = useBaiduCloud();
defineExpose({
  handleEnd,
})
</script>
