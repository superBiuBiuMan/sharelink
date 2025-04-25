export interface ShareDrawerRef {
  open(): void;
}
//分享天数
export enum ExpireTimeEnum {
  sevenDay = 3, //七天
  thirty = 4, //30天
  sixty = 5, //60天
  halfYear = 7, //180天
  forever = 1, //永久
  oneDay = 2, //1天
}
//提取次数
export enum ExtractEnum {
  //UC网盘提取次数为null代表不限制,但是枚举又不能传入null...
  // forever=null,
  forever = -1,
  one = 1,
  five = 5,
  ten = 10,
  fifty = 50,
  hundred = 100,
}
