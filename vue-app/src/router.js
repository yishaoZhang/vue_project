import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: '/home/basic',
      children: [
        {
          path: 'users',
          component: () => import('./views/Users.vue')
        },
        {
          path: 'basic',
          component: () => import('./views/Basic.vue')
        },
        {
          path: 'chart',
          component: () => import('./views/Chart.vue')
        },
        {
          path: 'draw',
          component: () => import('./views/Draw.vue')
        },
        {
          path: 'dshap',
          component: () => import('./views/Dshap.vue')
        }
      ]
    }
  ]
})
