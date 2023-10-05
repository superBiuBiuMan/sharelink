import {ListData, TransformListData, UseListModule} from "./types";
import {ref, UnwrapRef} from "vue";
import {TdPrimaryTableProps} from "tdesign-vue-next";
import dayjs from "dayjs";

export const useListModule:UseListModule = (props, emits) => {
    const selectedRowKeys = ref<(number | string)[]>([])//选中id信息
    const selectedRowInfos = ref<ListData[]>([])//选中的文件信息
    const tableProps = ref<UnwrapRef<TdPrimaryTableProps>>({
        rowKey:'FileId',
        columns:[
            {
                colKey: 'row-select',
                type: 'multiple',
                checkProps: ({ row }) => ({ disabled: row.Status === 2 }),
                width: 50,
            },
            {
                colKey: 'FileName',
                title: '文件名',
            },
            {
                colKey: 'CreateAt',
                title: '创建时间',
                cell:(h,{ row }) => {
                    return h('span',{
                        textContent: dayjs(row.CreateAt)?.format('YYYY/MM/DD HH:mm:ss')
                    })
                }
            },
            {
                colKey: 'Status',
                title: '状态',
                cell:(h,{row}) => {
                    return h('span',{
                        textContent: row.Status !== 2 ? '正常' : '违规'
                    })
                }
            },
        ],
        empty:'暂无数据,请重新进入目录',
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
            FileId:item?.FileId ?? '',
            FileName:item?.FileName ?? '',
            CreateAt:item?.CreateAt,
            Status:item?.AbnormalAlert ?? '',
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
