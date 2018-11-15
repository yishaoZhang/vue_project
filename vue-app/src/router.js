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
      redirect: '/login'
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
      redirect: '/home/users',
      children: [
        {
          path: 'users',
          component: () => import('./views/Users.vue')
        },
        {
          path: 'basic',
          component: () => import('./views/Basic.vue')
        }
      ]
    }
  ]
})
