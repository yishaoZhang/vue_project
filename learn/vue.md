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
```

```
