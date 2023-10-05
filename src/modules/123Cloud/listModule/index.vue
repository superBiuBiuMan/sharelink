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
import {onMounted} from "vue";
interface Props {
  list:any[],//请求过来的原始数据
  ids:(number | string)[],//选中的文件id信息
  infos:any[],//选中的文件信息
}
interface Emits{
  (event: 'update:ids', data: (number | string)[]): void
  (event: 'update:infos', data: any[]): void
}
const props = defineProps<Props>()
const emits = defineEmits<Emits>()
//defineExpose({})
const {
        tableProps,
        listData,
        selectedRowKeys,
        init,
      } = useListModule();
onMounted(() => {
  init();
})
</script>
