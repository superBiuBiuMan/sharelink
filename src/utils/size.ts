export function bytesToSize(bytes: number): string {
  if (bytes === 0) return "0B";

  const units = ["B", "KB", "MB", "GB", "TB"];
  const k = 1024;

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const size = bytes / Math.pow(k, i);
  const sizeStr = size.toFixed(2);

  // 去掉小数点后无效的 .00
  return sizeStr.endsWith(".00")
    ? `${parseInt(sizeStr)}${units[i]}`
    : `${sizeStr}${units[i]}`;
}
