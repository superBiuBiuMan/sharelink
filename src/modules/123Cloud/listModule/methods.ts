import {Init, ListData, TransformListData, UseListModule} from "./types";
import {ref, UnwrapRef} from "vue";
import {TdPrimaryTableProps} from "tdesign-vue-next";
import axios from "axios";


export const useListModule:UseListModule = () => {
    const selectedRowKeys = ref<(number | string)[]>([])//选中id信息
    const selectedRowInfos = ref<ListData[]>([])//选中的文件信息
    const tableProps = ref<UnwrapRef<TdPrimaryTableProps>>({
        rowKey:'FileId',
        columns:[
            {
                colKey: 'row-select',
                type: 'multiple',
                //checkProps: ({ row }) => ({ disabled: row.Status !== 2 }),
                width: 50,
            },
            {
                colKey: 'FileName',
                title: '文件名',
            },
            {
                colKey: 'CreateAt',
                title: '创建时间',
            },
            {
                colKey: 'Status',
                title: '状态',
            },
        ],
        onSelectChange:(value, ctx) => {
            selectedRowKeys.value = value;//存储文件id
            selectedRowInfos.value = ctx.currentRowData as ListData[];//存储文件信息
        }
    })
    const listData = ref<ListData[]>([])

    for (let i = 0; i < 5; i++) {
        listData.value.push({
            FileId:Math.random(),
            FileName:'文件名' + i,
            CreateAt:'2023-09-28T16:52:00+08:00',
            Status:i
        });
    }

    const transformListData:TransformListData = (data:any) => {

        return [];
    }

    const init:Init = () => {
        axios
    }

    return {
        selectedRowKeys,
        selectedRowInfos,
        transformListData,
        init,
        tableProps,
        listData,

    }
}
