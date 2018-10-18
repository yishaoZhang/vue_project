'use strict'

import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'

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
      return Promise.reject(response)
    }
    // token 是否失效验证， 失效需跳转路由
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

Plugin.install = function (Vue, options) {
  function __axiso (type, url, pramas, isOutLink, config) {
    // type: get or post
    // 放请求体，需对token做相关处理
    return new Promise((resolve, reject) => {
      url = isOutLink || _axios.defaults.baseURL + url
      _axios[type](url, pramas, config || {})
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
