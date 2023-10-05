import {Ref, UnwrapRef} from "vue";
import {TdPrimaryTableProps} from "tdesign-vue-next";


//列表数据
export interface ListData {
    FileId:string | number,//文件id
    FileName:string,//文件名
    CreateAt:string,//文件创建时间
    Status:string | number,//文件状态 todo 弄一个枚举,1代表没有警告,好像0也是没有警告....,反正 2代表有警告
}

export type TransformListData = (data:any[]) => ListData[];

export type UseListModule = (props:any,emits:any) => {
    selectedRowKeys:Ref<(number | string)[]>,//选中id信息
    selectedRowInfos:Ref<ListData[]>,//选中的文件信息
    tableProps:Ref<UnwrapRef<TdPrimaryTableProps>>,//表格数据
    listData:Ref<ListData[]>,//列表数据
    transformListData:TransformListData,//转换请求传递过来的列表数据
}
