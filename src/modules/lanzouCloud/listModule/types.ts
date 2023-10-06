import {Ref, UnwrapRef} from "vue";
import {TdPrimaryTableProps} from "tdesign-vue-next";

//文件类型
export enum FileTypeEnum {
    file,
    folder
}

//列表数据
export interface ListData {
    type:FileTypeEnum,//文件类型
    id:string | number,//文件id
    name_all:string,//文件名
    name:string,//文件名
    size:string,//大小
    time:string,//时间
}

export type TransformListData = (data:any[]) => ListData[];

export type UseListModule = (props:any,emits:any) => {
    selectedRowKeys:Ref<(number | string)[]>,//选中id信息
    selectedRowInfos:Ref<ListData[]>,//选中的文件信息
    tableProps:Ref<UnwrapRef<TdPrimaryTableProps>>,//表格数据
    listData:Ref<ListData[]>,//列表数据
    transformListData:TransformListData,//转换请求传递过来的列表数据
}
