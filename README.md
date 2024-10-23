# 前言

* 偶尔需要用就心血来潮做了下
* 目前支持
  * UC网盘批量分享(2023年11月25日新增)(必须要实名认证才可以批量分享)
  * 123盘批量分享(2023年10月05日新增)
  * 夸克网盘批量分享(2023年10月06日新增)
  * 蓝奏网盘批量分享(2023年10月06日新增)
  * 百度网盘批量分享
  * 115网盘批量分享
  * 天翼云盘批量分享
  * 中国移动网盘批量分享(新增)
  * 迅雷网盘批量分享(新增)
  * 阿里云盘批量分享(新增)
    * 注意:**阿里云盘规定,普通用户每天只能使用分享功能5次；会员用户和Lv.1及以上的达人用户，每天可使用分享次数1000次。超过上限后，将提示「今日分享次数已达上限」**
  * 进度条展示
  * 复制到剪贴板
  * 下载分享链接
  * 分享信息自定义配置
  * 自定义提取码
  * **等等......**
* 更新日志

```
2024年10月23日:
       1. 百度网盘添加同步工具批量分享功能
2024年10月22日:
       1. UC网盘添加自定义提取码功能
       2. 123云盘标注废弃(加密经常变动)
       3. 115网盘批量分享按钮位置调整到右上角
       4. 中国移动网盘修复无法分享鉴权问题
       5. 百度网盘添加文件大小信息
       6. Polyfill投毒影响更新cdn(可能导致加载缓慢情况)
2024年4月18日:
       1. 阿里云盘更新提示信息
       2. 夸克云盘修复部分文件夹无法获取到分享链接的问题
2024年1月6日:
        1.123云盘添加批量提取直链的功能
2023年11月25日:
        1.添加UC网盘
        2.修复迅雷网盘挂载失败问题
        3.添加"下载信息为Excel"功能(也就是导出为Excel)
2023年10月09日:
        1.添加迅雷网盘
        2.添加阿里云盘
        3.优化挂载逻辑
2023年10月07日:
        1.中国移动网盘添加
        2.逻辑优化
2023年10月06日: 
        1.添加夸克网盘
        2.添加蓝奏云并修复修复蓝奏云文件夹分享不显示问题
        3.123网盘全新选取文件逻辑
        4.百度网盘全新选取文件逻辑
2023年10月05日: 
        1.添加pinia
        2.优化逻辑代码
        3.优化挂载逻辑
        4.修复天翼云逻辑
        4.添加123网盘
```

* bug可能有,有bug就提就可以,注意分享延迟不要调的太低
* 安装地址
  * https://greasyfork.org/zh-CN/scripts/476388-%E7%BD%91%E7%9B%98%E6%89%B9%E9%87%8F%E5%88%86%E4%BA%AB%E5%B7%A5%E5%85%B7
* github开源地址
  * https://github.com/superBiuBiuMan/shareLink
* 使用`vite-plugin-monkey`开发
  * https://github.com/lisonge/vite-plugin-monkey


# 部分展示(如果想参与,可以拉到最底下查看开发过程)

* 当然,界面大同小异

## 百度网盘

![](https://s2.loli.net/2023/12/10/j64rA9vhDwCipky.gif)

![](https://s2.loli.net/2023/12/10/HQ1KtY4obycLOVa.png)

## 阿里云盘

* 特别提醒,**阿里云盘在这里哦**,废了老大劲呢

![](https://s2.loli.net/2023/12/10/oxhYR78azN3wHZQ.png)

* 还有**阿里云盘规定,普通用户每天只能使用分享功能5次；会员用户和Lv.1及以上的达人用户，每天可使用分享次数1000次。超过上限后，将提示「今日分享次数已达上限」**

![](https://s2.loli.net/2023/12/10/TkPgUNzbBaXOIc1.png)

## 天翼云盘

![](https://s2.loli.net/2023/12/10/OAIiMtWQxc2S4YG.png)

![](https://s2.loli.net/2023/12/10/RPOM6W9DZcf4XTx.png)

## 115网盘

* 样式就将就着吧~

![](https://s2.loli.net/2023/12/10/PxJ5czymWDE9ljr.png)

![](https://s2.loli.net/2023/12/10/HQ9RCgUq4zmSyO2.png)

* 如这个页面,全部允许就好

![](https://s2.loli.net/2023/12/10/NabQhgtKIo4EZFz.png)

## 123网盘

![](https://s2.loli.net/2023/12/10/tqJIAsnN37eS4uZ.png)

## 夸克网盘

* 注意分享延迟,快了会出bug

![](https://s2.loli.net/2023/12/10/GrO7lBhEWPNy4uC.png)



## 蓝奏云

![](https://s2.loli.net/2023/12/10/qhtzU4wQmRWJYrb.png)

![](https://s2.loli.net/2023/12/10/Z8HJpS59OgYIczN.png)

## 迅雷网盘

![](https://s2.loli.net/2023/12/10/OQhYUAPKziLJVC2.png)

![](https://s2.loli.net/2023/12/10/vyDIdQVTmUgMunO.png)

## 中国移动网盘

![](https://s2.loli.net/2023/12/10/KIOcdYCSpZQuXyH.png)

![](https://s2.loli.net/2023/12/10/qambuEHvdytZKDc.png)
# 开发过程

## 1.infoConfig.ts当中的CloudInfoEnum添加网盘的枚举属性,默认格式如下,以添加UC网盘为例

![](https://s2.loli.net/2023/11/25/mxZMPlAjeiLGFKS.png)

### 1.1在次文件变量cloudUrlInfo下添加匹配的url,名称和枚举字段保持一致

![](https://s2.loli.net/2023/11/25/SneGP1WsEfw2AhT.png)

## 2.在vite.config.ts添加对应的网站,比如uc网盘的网站为`https://drive.uc.cn/*`,注意带`*`号,上面作用为xxx  这里为xxxx

![](https://s2.loli.net/2023/11/25/EJe8qxovQaDdAnI.png)

## 3.App.vue引入建立好的网盘目录,并在对应当中添加

![](https://s2.loli.net/2023/11/25/pCZEbfdDM36hlAJ.png)

## 4.store/cloudInfo.ts添加新增加的网盘信息

![](https://s2.loli.net/2023/11/25/Q1deRwTtnzXPuWr.png)

## 5.utils/Mount/index.ts添加网盘挂载逻辑

![](https://s2.loli.net/2023/11/25/D2gavBwXLr8mRNu.png)
