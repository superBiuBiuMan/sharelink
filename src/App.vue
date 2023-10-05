
<style scoped>
</style>
<template>
  <t-button @click="handleOpenDrawerClick">批量分享操作</t-button>
  <t-drawer
      v-model:visible="visible" :header="name + '批量分享'" size="600px"
            :on-confirm="handleClose" @close="handleClose" placement="right" :closeOnOverlayClick="false">
      <component :is="ShowComponent" ref="operationRef"></component>
  </t-drawer>
</template>


<script setup lang="ts">

import {computed, ComputedRef, ref} from "vue";
import {cloudInfoStore} from "./store";
import {CloudInfoEnum} from "./infoConfig";

import TianyiCloud from "./components/tianyiCloud/index.vue";
import BaiduCloud from "./components/baiduCloud/index.vue";
import Cloud115 from "./components/115Cloud/index.vue";
import Cloud123 from "./components/123Cloud/index.vue";
import LanzouCloud from "./components/lanzouCloud/index.vue";

const visible = ref<boolean>(false);
const name = ref<string>('未知网盘');

const operationRef = ref();

const ShowComponent:ComputedRef = computed(() => {
  switch (cloudInfoStore.currentCloud) {
    case CloudInfoEnum.cloudLanZou: {
      name.value = '蓝奏云';
      return LanzouCloud;
    }
    case CloudInfoEnum.cloudTianyi: {
      name.value = '天翼云';
      return TianyiCloud;
    }
    case CloudInfoEnum.cloudBaidu: {
      name.value = '百度云';
      return BaiduCloud;
    }
    case CloudInfoEnum.cloud115: {
      name.value = '115云';
      return Cloud115;
    }
    case CloudInfoEnum.cloud123: {
      name.value = '123云';
      return Cloud123;
    }
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
