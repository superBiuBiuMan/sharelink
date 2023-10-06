import {FileTypeEnum, ListData, TransformListData, UseListModule} from "./types";
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
                colKey: 'type',
                title: '类型',
                cell:(h,{row}) => {
                    return h('img',{
                        src:row['type'] === FileTypeEnum.file ? 'https://pc.woozooo.com/images/filetype/txt.gif' : 'https://pc.woozooo.com/images/folder_open.gif'
                    })
                },
                width: 60,
            },
            {
                colKey: 'name',
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
            id:item?.id ? item?.id : item?.fol_id ,
            name_all:item?.name_all ?? '',//文件才有这个属性
            name:item?.name ?? '',
            size:item?.size ?? '-',//文件才有
            time:item?.time ?? '-',//文件才有
            type:item?.id ? FileTypeEnum.file : FileTypeEnum.folder,
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
