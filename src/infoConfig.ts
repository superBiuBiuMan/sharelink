export interface ShareDOMSelectTypes {
    [cloudName : String]:{
        select?:string,//选中文件的选择器
        idAttribute?:string[],//存储id的自定义属性
        fileNameSelect?:string,//文件名
    }
}


//分享DOM获取
export const ShareDOMSelect:ShareDOMSelectTypes = {
    '115Cloud':{
        select:'div.list-contents > ul li.selected',
        idAttribute:['file_id','cate_id'],
    },
    'tianyiCloud':{
        select:'li[data-selected=true].c-file-item',
        fileNameSelect:'file-item-name-fileName-span',
    },
    'baiduCloud':{
        select:'tr.wp-s-table-skin-hoc__tr.selected',
        fileNameSelect:'.wp-s-pan-list__file-name-title-text',
    }
}
