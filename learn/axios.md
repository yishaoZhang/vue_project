## basic ##
+ cli3 所建与官方指导一致
+ withCredentials: false // default
  + 请求头无自定字段， 默认即可
+ 一般思路
  + 先设置axios 构造函数
  + 设置config对象
    + 以此做参构建 axios 实例
+ 请求参数
  + 当请求为post时，需用qs序列化参数
  + 此处在请求拦截器里实现
+ response 拦截器（interceptor）
  + 返回状态码处理
  + token验证 // 本案例将token放在请求体中
  + 相关路由跳转
  + etc...

## axios实例是否再封装 ##
+ 实际项目中，很容易存在三方存储
+ 存在可能，某请求需重配
+ 业务代码暴露太多参数项不甚合理
+ 综合以上 封装
  + 实例封装代码 '@/pugins/axios.js'
    + __axiso函数即为封装
  + 接口封装： '@/config/service/*.js'
  + 调用见相关业务请求

## 问题 ##
+ 超时
  + 一般处理方案
  + axios 原理？
    + cros
      + 请求取消原理
    + xhr
+ 拦截器 对于某接口 变频 循环请求? 