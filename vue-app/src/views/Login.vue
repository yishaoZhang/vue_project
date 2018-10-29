<template>
    <div class="login-view-box">
      <el-form :model="loginForm" class="show-login">
        <div class="login-error-message" v-if="isLoginErr">{{showErrorMsg}}</div>
        <div class="title">系统管理</div>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input @focus="hiddenLoginError" class="login-input" v-model.trim="loginForm.name" autocomplete="off" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input @focus="hiddenLoginError" class="login-input" v-model.trim="loginForm.password" autocomplete="off" size="medium"></el-input>
        </el-form-item>
        <el-form-item class="login-button-box">
          <el-button size="medium" type="primary" @click="loginSubmit">登录</el-button>
          <el-button size="medium" @click="registerSubmit">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
import Vue from 'vue'
import localStorage from 'localStorage'
import _axios from '@/config/service/user.js'
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        name: null,
        password: null
      },
      formLabelWidth: '120px',
      isLoginErr: false,
      showErrorMsg: ''
    }
  },
  components: {

  },
  mounted () {
  },
  methods: {
    loginSubmit () {
      console.log(this.loginForm)
      _axios.login(this.loginForm)
        .then((res) => {
          // 不反回token 意味着失败
          if (!res.token) {
            this.isLoginErr = true
            this.showErrorMsg = res.message
          } else {
            // 存贮token 内存或本地(localstorage))
            // 本文采用内存
            // 这里存在一定的问题，一个项目无法完全放在内存中，
            // 内存中值在刷新过程中将消失
            localStorage.setItem('jwt-token', res.token)
            Vue._token = res.token
            window._token = res.token
            // 路由实现跳转
            this.$router.push({ name: 'home' })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    registerSubmit () {
      _axios.register(this.loginForm)
        .then((res) => {
          // 不反回token 意味着失败
          if (!res.token) {
            this.isLoginErr = true
            this.showErrorMsg = res.message
          } else {
            // 存贮token 内存或本地(localstorage))
            // 本文采用内存
            Vue._token = res.token
            window._token = res.token
            this.$alert('请点击跳转', res.message, {
              confirmButtonText: '确定',
              callback: action => {
                // 路由实现跳转
                this.$router.push({ name: 'home' })
              }
            })
          }
        })
        .catch((err) => {
          console.log(err, 'err')
        })
    },
    hiddenLoginError () {
      this.isLoginErr = false
    }
  }
}
</script>

<style scoped lang="scss">
.login-view-box{
  position: relative;
  height: 100%;
  background: #E5F3FC;
  .show-login{
    position: absolute;
    width: 500px;
    min-height: 300px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #eee;
    border-radius: 6px;
    background: #fff;
    .login-input{
      width: 300px;
    }
    .title{
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      margin-top: 40px;
      margin-bottom: 20px;
    }
    .login-button-box{
      text-align: center;
    }
    .login-error-message{
      position: absolute;
      font-size: 12px;
      color: red;
      top: 68px;
      left: 120px;
    }
  }
}
</style>
