import Vue from 'vue'

const components = {
  'sideBarDefault': resolve => require(['@/components/home/sideBarDefault.vue'], resolve),
  'viewTitle': resolve => require(['@/components/title.vue'], resolve)
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
