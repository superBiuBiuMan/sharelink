
<style scoped>
</style>
<template>
  <t-button @click="handleOpenDrawerClick">批量分享操作</t-button>
  <!---->
  <t-drawer
      v-model:visible="visible" :header="name + '批量分享工具'" size="600px"
            :on-confirm="handleClose" @close="handleClose" placement="right" :closeOnOverlayClick="false">
    <component :is="ShowComponent" ref="operationRef"></component>
  </t-drawer>
</template>


<script setup lang="ts">
import TianyiCloud from "./components/tianyiCloud/index.vue";
import BaiduCloud from "./components/baiduCloud/index.vue";
import Cloud115 from "./components/115Cloud/index.vue";
import {computed, ref} from "vue";
import {ComputedRef} from "vue";

const visible = ref<boolean>(false);
const name = ref<string>('未知网盘');

const operationRef = ref();

const ShowComponent:ComputedRef = computed(() => {
  const url = window.location.href;
  if(url.startsWith('https://pan.baidu.com/disk/main')) {
    name.value = '百度网盘'
    return BaiduCloud
  }
  else if(url.startsWith('https://cloud.189.cn/web/main/')) {
    name.value = '天翼云盘'
    return TianyiCloud;
  }
  else if(url.startsWith('https://115.com')) {
    name.value = '115网盘'
    return Cloud115;
  }
})

//按钮打开
const handleOpenDrawerClick = ():void => {
  visible.value = true;
}
//关闭
const handleClose = ():void => {
  visible.value = false;
  operationRef.value.handleEnd();
}
</script>
