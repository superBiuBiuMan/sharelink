/**
 * 随机生成指定位数提取码从数字和字母中
 * @param numDigits 生成的位数
 * @return 生成的提取码
 */
export function generateRandomString(numDigits: number): string {
    const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result: string = '';

    for(let i = 0; i < numDigits; i++) {
        const randomIndex: number = Math.floor(Math.random() * (numbers.length + letters.length));
        if(randomIndex < numbers.length) {
            result += String(numbers[randomIndex]);
        } else {
            result += letters[randomIndex - numbers.length];
        }
    }

    return result;
}

/**
 * 下载txt文件
 * @param fileName 文件名
 * @param content 文件内容
 */
export function DownloadTxt(fileName:string,content:string):void{
    const element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download',fileName)
    element.style.display = 'none';
    document.body.append(element);
    element.click();
    document.body.removeChild(element);
}

/**
 * 复制内容到剪贴板
 * @param content 要复制的内容
 */
export function CopyValueToClipBoard(content:string){
    return new Promise((resolve, reject) => {
        if(window.isSecureContext){
            navigator.clipboard.writeText(content).then(res=>{
                resolve(res);
            }).catch(err=>{
                reject(err)
            });
        }else{
            reject('很抱歉，暂时不支持在此网站上复制')
        }
    })
}
