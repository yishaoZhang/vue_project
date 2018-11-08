## css居中 ##
+ margin-top: 15%
  + 此百分比是宽度的百分比
+ left: 50%; top: 50%; transform: translate(-50%, -50%);
  + 父需有足够高度支撑

## mongodb remove 与delete区别 ##
+ remove 删document 不删 collection 及index
+ 数据库一般不做物理删除
  + 单独设定一个字段，做逻辑删除即可

## 用户系统 ##
+ jwt 虽然可以通用，但是环境存在太多
+ 显示用户不存在，需要考虑，环境
+ api 环境

## 日常工作 ##
+ 流程还是比较重要
+ 该谁解决谁解决
+ 态度很重要
  + 测试感谢你解决BUG
  + 做为程序员也得感谢人家发现BUG
+ 绝对不可以不是自己的问题就不关注，要推动要一个结果
+ 直接百度浏览器提示问题，可能是最直接有效的解决问题办法

## https证书 ##
+ 某https网站，点击浏览器输入栏左侧，可以完整展现证书相关信息

## 后端如何触发前端error? ##
+ res.status(400).send(obj)
+ 接上，上述的err 如何取到obj
  + err.message
    + 注意obj传到前端被JSON化
      + JSON.parse(err.message)

## Object.keys() ##
+ 对于个一个连续字符串
  + 其将被分割为依次含每个字符元素的数组

## ？？window.URL ##
+ window.URL.createObjectURL(file.raw)
  + 其中file 对象需完整考查

## 对于node path模块 ##
+ path.join(str, str);
  + 将多个str 合并 并计算
+ path.relative(str1, str2);
  + str1 至 str2的相对路径
