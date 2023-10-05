//网盘枚举
export enum CloudInfoEnum {
    cloud115,//115网盘
    cloud123,//123网盘
    cloudBaidu,//百度网盘
    cloudLanZou,//蓝奏网盘
    cloudTianyi,//天翼网盘
}
export type ShareDOMSelectTypes =  {
    [cloudName in keyof typeof CloudInfoEnum]?:{
        select?:string,//选中文件的选择器
        idAttribute?:string[],//存储id的自定义属性
        fileNameSelect?:string,//文件名
    }
}
export type CloudUrlInfoTypes  = {
    [cloudName in keyof typeof CloudInfoEnum] : string[]
}
//分享DOM获取
export const ShareDOMSelect:ShareDOMSelectTypes = {
    'cloud115':{
        select:'div.list-contents > ul li.selected',
        idAttribute:['file_id','cate_id'],
    },
    'cloudTianyi':{
        select:'li[data-selected=true].c-file-item',
        fileNameSelect:'file-item-name-fileName-span',
    },
    'cloudBaidu':{
        select:'tr.wp-s-table-skin-hoc__tr.selected',
        idAttribute:['data-id'],
        fileNameSelect:'.wp-s-pan-list__file-name-title-text',
    },
}



//所属网盘链接
export const cloudUrlInfo:CloudUrlInfoTypes = {
    cloud123: ['https://www.123pan.com/'],
    cloudBaidu: ['https://pan.baidu.com/disk/main'],
    cloudLanZou: ['https://pc.woozooo.com/'],
    cloudTianyi: ['https://cloud.189.cn/web/main/'],
    cloud115:['https://115.com']
}
