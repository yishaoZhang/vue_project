<template>
    <div class="home-article-box">
      <view-title>用户管理</view-title>
      <user-search @insertSuccess="updateList"></user-search>
      <user-list :table-data="tableData" @delSuccess="updateList"></user-list>
    </div>
</template>

<script>
import userSearch from '@/components/users/search.vue'
import userList from '@/components/users/userList.vue'
import _axios from '@/config/service/user'
export default {
  data () {
    return {
      tableData: []
    }
  },
  components: {
    userSearch,
    userList
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      _axios.getUsers()
        .then(res => {
          this.tableData = res.data
        })
    },
    updateList () {
      this.init()
    }
  }
}
</script>

<style scoped lang="scss">
</style>
