## add global reset and common css ##
+ directory
    + src/assets/css
+ add
    + src/app.vue
```
<style>
  @import './assets/css/reset.css';
  @import './assets/css/common.css';
</style>
```

## global component ##
+ created in ./src/plugins
+ named components.js
+ general code
```
import Vue from 'vue'

const components = {
  'sideBarDefault': resolve => require(['@/components/home/sideBarDefault.vue'], resolve)
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
```
## 动态组件 ##
+ 组件需全局安装
+ isComponent 为当前单文件组件 data 内一变量
  + 类型为字符串
```
<component :is="isComponent" :name="name" class="isComponentSideBar"></component>
```
## 拦截器 ##
+ 使用UI组件
  + 主要为信息提示
    + 如 element-ui 单独引入即可
+ 使用router
  + 引入外部的公有实引即可
+ 超时怎么处理？？？

## Vue-Quill-Editor ##
+ 将其套入form toolbar 无法水平居中？
+ 需在外层加一层div?? 否则编辑器高度设定无法产生效果
