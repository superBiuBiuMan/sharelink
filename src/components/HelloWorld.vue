
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button @click="handleClick">点击我看看</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import axios from "axios";

defineProps<{ msg: string }>();

const count = ref(0);
const selectFieldList = ref<Array<string>>([]);
const result = ref<any[]>([]);//结果
const handleClick = async () => {
  const selectDOM = document.querySelectorAll("li[data-selected=true].c-file-item");
  console.log('11',selectDOM)
  if(!selectDOM.length) alert('请选择元素');
  for(let dom of selectDOM){
    selectFieldList.value.push(dom.getAttribute('data-fileid'))
  }
  console.warn(selectFieldList.value)
    const { data:{shareLinkList} }: { data:{shareLinkList:Array<string>} } = await axios({
        method:'get',
        url:'https://cloud.189.cn/api/open/share/createShareLink.action',
        params:{
          noCache: Math.random(),
          fileId: selectFieldList.value.shift(),
          expireTime: '2099',
          shareType: '3',
        },
        headers:{
          'accept':'application/json;charset=UTF-8'
        }
    }).catch(() => ({data:{}}))
    console.warn('结果',shareLinkList)
}
</script>

