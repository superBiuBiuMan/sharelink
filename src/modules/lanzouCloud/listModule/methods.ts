import {ListData, TransformListData, UseListModule} from "./types";
import {ref, UnwrapRef} from "vue";
import {TdPrimaryTableProps} from "tdesign-vue-next";

export const useListModule:UseListModule = (props:any, emits:any) => {
    const selectedRowKeys = ref<(number | string)[]>([])//选中id信息
    const selectedRowInfos = ref<ListData[]>([])//选中的文件信息
    const tableProps = ref<UnwrapRef<TdPrimaryTableProps>>({
        rowKey:'id',
        columns:[
            {
                colKey: 'row-select',
                type: 'multiple',
                checkProps: ({ row }) => ({ disabled: row.Status === 2 }),
                width: 50,
            },
            {
                colKey: 'name_all',
                title: '文件名',
            },
            {
                colKey: 'size',
                title: '大小',
            },
            {
                colKey: 'time',
                title: '时间',
            },

        ],
        empty:'暂无数据,请重新进入任意文件夹目录以拦截获取文件数据',
        onSelectChange:(value, ctx) => {
            selectedRowKeys.value = value;//存储文件id
            selectedRowInfos.value = ctx.selectedRowData as ListData[];//存储已选中文件信息
            emits('update:ids',value)
            emits('update:infos',ctx.selectedRowData)
        }
    })
    const listData = ref<ListData[]>([])
    const transformListData:TransformListData = (data:any[]) => {
        if(!data || data && !data?.length) return [];
        return data?.map(item => ({
            id:item?.id ?? '',
            name_all:item?.name_all ?? '',
            name:item?.name ?? '',
            size:item?.size ?? '',
            time:item?.time ?? '',
        })) ?? [];
    }

    return {
        selectedRowKeys,
        selectedRowInfos,
        transformListData,
        tableProps,
        listData,
    }
}
