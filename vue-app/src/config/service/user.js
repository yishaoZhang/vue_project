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
  }
}
