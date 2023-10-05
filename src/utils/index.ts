//@ts-nocheck
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

/**
 * @description 获取123盘加密参数
 * @return 加密参数,格式[xxxx,xxx-xxx-xxx]
 */
export function get123CloudSecret(){
    function v(t) {
        return (v = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol["prototype"] ? "symbol" : typeof t
                }
        )(t)
    }
    function A(t, e) {
        e = 1 < arguments.length && void 0 !== e ? e : 10;
        for (var n = function() {
            for (var t = [], e = 0; e < 256; e++) {
                for (var n = e, r = 0; r < 8; r++)
                    n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
                t[e] = n
            }
            return t
        }(), r = function(t) {
            t = t.replace(/\\r\\n/g, "\\n");
            for (var e = "", n = 0; n < t.length; n++) {
                var r = t.charCodeAt(n);
                r < 128 ? e += String.fromCharCode(r) : e = 127 < r && r < 2048 ? (e += String.fromCharCode(r >> 6 | 192)) + String.fromCharCode(63 & r | 128) : (e = (e += String.fromCharCode(r >> 12 | 224)) + String.fromCharCode(r >> 6 & 63 | 128)) + String.fromCharCode(63 & r | 128)
            }
            return e
        }(t), a = -1, i = 0; i < r.length; i++)
            a = a >>> 8 ^ n[255 & (a ^ r.charCodeAt(i))];
        return (a = (-1 ^ a) >>> 0).toString(e)
    }
    var a, i, o, s, l, c, u, d, f, p, h, g;
    // var e = "/a/api/file/upload_request";
    var e = "/a/api/share/share/create";
    var n = "web";
    var r = 3;
    function getRandom(t){
        for (; ; )
            switch (t.prev = t.next) {
                case 0:
                    for (p in a = Math.round(1e7 * Math.random()),
                        o = Math.round(((new Date).getTime() + 60 * (new Date).getTimezoneOffset() * 1e3 + 288e5) / 1e3).toString(),
                    sessionStorage.getItem("serverTimestamp") && (i = sessionStorage.getItem("serverTimestamp")),
                        o = i && (m = i,
                        20 <= Math.abs(1e3 * o - 1e3 * m) / 1e3 / 60) ? i : o,
                        s = atob((m = void 0,
                            m = ["a", "d", "e", "f", "g", "h", "l", "m", "y", "i", "j", "n", "o", "p", "k", "q", "r", "s", "t", "u", "b", "c", "v", "w", "s", "z"].join(","),
                            btoa(m))).split(","),
                        u = function(t, e, n) {
                            var r;
                            n = 2 < arguments.length && void 0 !== n ? n : 8;
                            return 0 === arguments.length ? null : (r = "object" === v(t) ? t : (10 === "".concat(t).length && (t = 1e3 * Number.parseInt(t)),
                                new Date(t)),
                                t += 6e4 * new Date(t).getTimezoneOffset(),
                                {
                                    y: (r = new Date(t + 36e5 * n)).getFullYear(),
                                    m: r.getMonth() + 1 < 10 ? "0".concat(String(r.getMonth() + 1)) : r.getMonth() + 1,
                                    d: r.getDate() < 10 ? "0".concat(r.getDate()) : r.getDate(),
                                    h: r.getHours() < 10 ? "0".concat(r.getHours()) : r.getHours(),
                                    f: r.getMinutes() < 10 ? "0".concat(r.getMinutes()) : r.getMinutes()
                                })
                        }(o),
                        h = u.y,
                        g = u.m,
                        l = u.d,
                        c = u.h,
                        u = u.f,
                        d = [h, g, l, c, u].join(""),
                        f = [],
                        d)
                        f.push(s[Number(d[p])]);
                    return h = A(f.join("")),
                        g = A("".concat(o, "|").concat(a, "|").concat(e, "|").concat(n, "|").concat(String(r), "|").concat(h)),
                        t.abrupt("return", [h, "".concat(o, "-").concat(a, "-").concat(g)]);
                case 12:
                case "end":
                    return t.stop()
            }
        var m
    }
    const object = {
        next:0,
        prev:0,
        arg:undefined,
        abrupt:(str,result) => {
            return result;
        }
    }
    return getRandom(object);
}

/**
 * @description 123盘获取日期
 */
export function getDate123Cloud(day){
    function M(t) {
        function e(t) {
            return ((t = Math.floor(Math.abs(t))) < 10 ? "0" : "") + t;
        }
        var n = -t.getTimezoneOffset(),
            r = 0 <= n ? "+" : "-";
        return ""
        .concat(t.getFullYear(), "-")
        .concat(e(t.getMonth() + 1), "-")
        .concat(e(t.getDate()), "T")
        .concat(e(t.getHours()), ":")
        .concat(e(t.getMinutes()), ":")
        .concat(e(t.getSeconds()))
        .concat(r)
        .concat(e(n / 60), ":")
        .concat(e(n % 60));
    }
    day = day * 1;
    switch (day){
        case 1: return Object(M)(new Date(+new Date + 864e5));
        case 7: return Object(M)(new Date(+new Date + 6048e5));
        case 30:return Object(M)(new Date(+new Date + 2592e6));
        case 99:return Object(M)(new Date("2099/12/12 08:00:00"));//永久
    }
}

/**
 * @description body解析 task=5&folder_id=8788641 => {tak:5,folder_id:8788641}
 * @param body 要解析的body
 * @return 对象
 */
export function bodyParse(body:string){
    const result = body?.split('&') ?? [];
    let obj:any = {};
    for(let item of result){
        const temp = item?.split('=') ?? [];
        if(temp.length > 1){
            obj[temp[0]] = temp[1]
        }
    }
    return obj;
}

/**
 * 我有一段js代码如下
 * const url = window.location.href;
 * const cloudUrlInfos = {
 *     cloud123: ['https://www.123pan.com/'],
 *     cloudBaidu: ['https://pan.baidu.com/disk/main'],
 *     cloudLanZou: ['https://pc.woozooo.com/'],
 *     cloudTianyi: ['https://cloud.189.cn/web/main/'],
 *     cloud115:['https://115.com']
 * }
 * js实现根据url来遍历cloudUrlInfos,如果找到对应的链接,则返回所属的键值
 *  findCloudProvider('https://www.123pan.com/',cloudUrlInfo); //返回cloud123
 */
export function findCloudProvider(url:any, cloudUrlInfos:any) {
    for (const provider in cloudUrlInfos) {
        const urls = cloudUrlInfos[provider];
        for (const cloudUrl of urls) {
            if (url.startsWith(cloudUrl)) {
                return provider;
            }
        }
    }
    return null; // 如果没有找到匹配的链接，则返回null
}
