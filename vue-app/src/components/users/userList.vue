<template>
    <el-table
      class="home-user-list"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="levelName"
        label="角色"
        width="200">
      </el-table-column>
      <el-table-column
        prop="time"
        width="220"
        label="注册日期">
      </el-table-column>
      <el-table-column
        prop="origin"
        width="200"
        label="来源">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleEditClick(scope.row.username)" type="text" size="small">编辑</el-button>
          <el-button @click="handleResetClick(scope.row.username)" type="text" size="small">重置密码</el-button>
          <el-button @click="handleDelClick(scope.row.username)" type="text" size="small" class="delTextButton">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
import _axios from '@/config/service/user'
export default {
  data () {
    return {
    }
  },
  components: {

  },
  props: {
    tableData: Array
  },
  mounted () {

  },
  methods: {
    handleEditClick (id) {

    },
    handleResetClick (id) {

    },
    handleDelClick (name) {
      this.$confirm('此操作将永久删除该用户，是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(() => {
          _axios.delUser({ username: name })
            .then((res) => {
              this.$message({
                message: res.message,
                type: 'success'
              })
              this.$emit('delSuccess')
            })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.home-user-list{
  margin-top: 20px;
  .delTextButton{
    color: red;
  }
}
</style>
