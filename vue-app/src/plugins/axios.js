'use strict'

import Vue from 'vue'
import axios from 'axios'
import { MessageBox } from 'element-ui'
import Qs from 'qs'
import router from '../router.js'
import localStorage from 'localStorage'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || ''
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let config = {
  timeout: 5 * 1000 // Timeout
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    // post 传参序列化
    if (config.method === 'post') {
      config.data = Qs.stringify(config.data)
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    if (response.data.code !== 200 && response.data.code) {
      switch (response.data.code) {
        case 401:
          // 登录失效, 重新登录
          MessageBox.confirm('登录过期，是否重新登录?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'error'
          })
            .then(() => {
              // change to login through router
              router.push({ name: 'login' })
            })
            .catch(() => {
              // do somthing cancel
            })
          break
        // 账号或密码错误
        case 4010:
          break
        // 添加重复账号
        case 4011:
          break
        default:
          return Promise.reject(response)
      }
    }
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

Plugin.install = function (Vue, options) {
  function __axiso (type, url, pramas, isOutLink, config) {
    // 放请求体，需对token做相关处理
    // token 先取内存，后取localStorage
    let assignObj = {}
    assignObj.token = Vue._token || localStorage.getItem('jwt-token')
    let temParams = Object.assign(pramas, assignObj)
    console.log(Vue._token, 'temParams', window._token)
    return new Promise((resolve, reject) => {
      url = isOutLink || _axios.defaults.baseURL + url
      _axios[type](url, temParams, config || {})
        .then(response => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  Vue.axios = __axiso
  window.axios = __axiso
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return __axiso
      }
    },
    $axios: {
      get () {
        return __axiso
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
