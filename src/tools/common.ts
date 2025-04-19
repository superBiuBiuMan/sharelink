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
