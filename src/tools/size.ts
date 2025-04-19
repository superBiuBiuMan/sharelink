/**
 * 字节转换为大小
 * @param size 字节
 * @returns 大小
 */
export function bytesToSize(size: any) {
  if (size < 0.1 * 1024) {
    //小于0.1KB，则转化成B
    size = size.toFixed(2) + "B";
  } else if (size < 0.1 * 1024 * 1024) {
    // 小于0.1MB，则转化成KB
    size = (size / 1024).toFixed(2) + "KB";
  } else if (size < 1 * 1024 * 1024 * 1024) {
    // 小于1GB，则转化成MB
    size = (size / (1024 * 1024)).toFixed(2) + "MB";
  } else {
    // 其他转化成GB
    size = (size / (1024 * 1024 * 1024)).toFixed(2) + "GB";
  }

  // 转成字符串
  let sizeStr = size + "",
    // 获取小数点处的索引
    index = sizeStr.indexOf("."),
    // 获取小数点后两位的值
    dou = sizeStr.substr(index + 1, 2);

  // 判断后两位是否为00，如果是则删除00
  if (dou == "00")
    return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2);

  return size;
}
