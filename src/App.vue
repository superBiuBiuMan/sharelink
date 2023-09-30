
<style scoped>
</style>
<template>
  <t-button @click="handleOpenDrawerClick">批量分享操作</t-button>
  <!---->
  <t-drawer
      v-model:visible="visible" header="标题名称" size="600px"
            :on-confirm="handleClose" @close="handleClose" placement="right" :closeOnOverlayClick="false">
    <!--天翼云盘-->
    <!--<TianyiCloud ref="tianyiCloudRef"/>-->

    <!--百度云-->
    <!--<BaiduCloud ref="baiduCloudRef"/>-->

    <!--115网盘-->
    <Cloud115/>
  </t-drawer>
</template>


<script setup lang="ts">
//import TianyiCloud from "./components/tianyiCloud/index.vue";
//import BaiduCloud from "./components/baiduCloud/index.vue";
import Cloud115 from "./components/115Cloud/index.vue";
import {ref} from "vue";

const visible = ref<boolean>(false);

//天翼云
//const tianyiCloudRef = ref();

//百度云
//const baiduCloudRef = ref();

//按钮打开
const handleOpenDrawerClick = ():void => {
  visible.value = true;
}
//关闭
const handleClose = ():void => {
  visible.value = false;
  //天翼云
  //tianyiCloudRef.value.handleEnd();

  //百度云
  //baiduCloudRef.value.handleEnd();


}
</script>
