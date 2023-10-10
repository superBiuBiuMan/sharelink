//网盘枚举
export enum CloudInfoEnum {
    cloud115,//115网盘
    cloud123,//123网盘
    cloudBaidu,//百度网盘
    cloudLanZou,//蓝奏网盘
    cloudTianyi,//天翼网盘
    cloudQuark,//夸克网盘
    cloud139,//移动网盘
    cloudXun,//迅雷网盘
    cloudAli,//阿里云盘
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
        idAttribute:['data-fileid'],
        select:'li[data-selected=true].c-file-item',
        fileNameSelect:'.file-item-name-fileName-span',
    },
    'cloudQuark':{
        idAttribute:['data-row-key'],
        select:'.ant-table-row-selected',
        fileNameSelect:'.filename-text',
    },
}



//所属网盘链接(根据提供的链接判断所属的网盘,并存储所属网盘和网盘名称在pinia,以此来决定应该挂载哪一个网盘组件)
export const cloudUrlInfo:CloudUrlInfoTypes = {
    cloud123: ['https://www.123pan.com/'],
    cloudBaidu: ['https://pan.baidu.com/disk/main'],
    cloudLanZou: [
        'https://pc.woozooo.com/',
        'https:\\/\\/..*?\\.woozooo\\.com',
        'https:\\/\\/.*?\\.lanzou.*?\\.com'
    ],
    cloudTianyi: ['https://cloud.189.cn/web/main/'],
    cloud115:['https://115.com'],
    cloudQuark:['https://pan.quark.cn/'],
    cloud139:['https://yun.139.com/'],
    cloudXun:['https://pan.xunlei.com/'],
    cloudAli:['https://www.aliyundrive.com/']
}
