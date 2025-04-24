/**
 * 指定前缀字符在localStorage中查找
 */

export function findLocalStorageKeysWithPrefix(prefix: string) {
  let result = {};

  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key) && key.startsWith(prefix)) {
      result = JSON.parse(localStorage[key]);
    }
  }

  return result;
}

//复制
export function copy(text: string) {
  return new Promise((resolve, reject) => {
    navigator.clipboard.writeText(text).then(resolve).catch(reject);
  });
}

//下载字符串为txt
export function downloadTxt(text: string, filename: string) {
  const a = document.createElement("a");
  a.href = "data:text/plain;charset=utf-8," + encodeURIComponent(text);
  a.download = filename;
  a.click();
}

//获取时间戳
export function getTimestamp() {
  return new Date().getTime();
}
