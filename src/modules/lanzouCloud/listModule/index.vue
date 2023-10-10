<style scoped lang="less">
.list {

}
</style>
<template>
  <div class="list">
    <t-table
        v-bind="tableProps"
        :data="listData"
        :selected-row-keys="selectedRowKeys"
        select-on-row-click
    />
  </div>
</template>

<script lang="ts" setup>
import {useListModule} from "./methods";
import { watchEffect } from "vue";
import {ListData} from "./types";
interface Props {
  list:any[],//请求过来的文件原始数据
  ids?:(number | string)[],//选中的文件id信息
  infos:ListData[],//选中的文件信息
}
interface Emits{
  (event: 'update:ids', data: (number | string)[]): void
  (event: 'update:infos', data: ListData[]): void
}
const props = defineProps<Props>()
const emits = defineEmits<Emits>()
//defineExpose({})
const {
        tableProps,
        listData,
        selectedRowKeys,
        transformListData,
      } = useListModule(props,emits);
watchEffect(() => {
  const temp = transformListData(props.list);
  console.log('数据响应',temp)
  listData.value = temp;
})
</script>
