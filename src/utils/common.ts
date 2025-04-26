import * as XLSX from "xlsx";
import FileSaver from "file-saver";
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
/**
 * 导出xlsx文件
 * @param filename 文件名
 * @param data 数据 比如 [{name: "张三", age: 18}, {name: "李四", age: 20}]
 */
export function exportXlsxFile(filename: string, data: any) {
  if (!data || !data?.length) {
    throw new Error("数据不能为空");
  }
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  // 写入文件
  const wb_out = XLSX.write(workbook, { type: "buffer" });
  FileSaver.saveAs(
    new Blob([wb_out], { type: "application/octet-stream" }),
    filename
  );
}

/**
 * 随机生成指定位数提取码从数字和字母中
 * @param numDigits 生成的位数
 * @return 生成的提取码
 */
export function generateRandomString(numDigits: number = 4): string {
  const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letters: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let result: string = "";

  for (let i = 0; i < numDigits; i++) {
    const randomIndex: number = Math.floor(
      Math.random() * (numbers.length + letters.length)
    );
    if (randomIndex < numbers.length) {
      result += String(numbers[randomIndex]);
    } else {
      result += letters[randomIndex - numbers.length];
    }
  }

  return result;
}
