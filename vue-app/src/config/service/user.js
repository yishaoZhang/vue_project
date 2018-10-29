/*
* @method
* @url
* params
*/

import Vue from 'vue'

export default {
  // add new user
  addUser (params) {
    return Vue.axios('post', '/api/users/add', params)
  },
  // login
  login (params) {
    return Vue.axios('post', '/api/users/login', params)
  },
  // registe
  register (params) {
    return Vue.axios('post', '/api/users/register', params)
  },
  // find users' list
  getUsers (params = {}) {
    return Vue.axios('post', '/api/users/getUserList', params)
  },
  // delete
  delUser (params) {
    return Vue.axios('post', '/api/users/delUser', params)
  }
}
