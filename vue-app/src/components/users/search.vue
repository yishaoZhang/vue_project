<template>
  <div class="user-search">
    <el-form class="user-search-box clear" :inline="true" :model="userSearch">
      <!-- <el-form-item label="用户ID" class="user-item-show">
        <el-input
          v-model.trim="userSearch.id"
          placeholder="请输入用户id"
          size="medium">
        </el-input>
      </el-form-item> -->
      <el-form-item label="用户名" class="user-item-show">
        <el-input
          v-model.trim="userSearch.name"
          placeholder="请输入用户名"
          size="medium">
        </el-input>
      </el-form-item>
      <el-form-item class="user-search-box fr">
        <el-button size="medium" type="primary" @click="userSearchQery">查询</el-button>
        <el-button size="medium" type="primary" @click="addNewUser">新增用户</el-button>
      </el-form-item>
    </el-form>
    <el-dialog title="新增用户" :visible.sync="dialogFormVisible" width="426px">
      <el-form :model="addUserForm">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input class="add-user-name" v-model="addUserForm.name" autocomplete="off" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select v-model="addUserForm.roleId" placeholder="请选择用户角色" size="medium">
            <el-option label="管理员" value="10"></el-option>
            <el-option label="普通用户" value="20"></el-option>
            <el-option label="访客" value="30"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addNewUserSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import _axios from '@/config/service/user'
export default {
  data () {
    return {
      userSearch: {
        id: null,
        name: null
      },
      addUserForm: {
        name: null,
        roleId: null
      },
      dialogFormVisible: false,
      formLabelWidth: '100px'
    }
  },
  components: {

  },
  mounted () {

  },
  methods: {
    userSearchQery () {
      console.log('button click!')
    },
    addNewUserSubmit () {
      this.dialogFormVisible = false
      _axios.addUser(this.addUserForm)
        .then(re => {
          if (re.code === 200) {
            this.$message(re.message)
            this.$emit('insertSuccess')
          } else if (re.code === 4011) {
            this.$message({
              message: re.message,
              type: 'error'
            })
          }
        })
    },
    addNewUser () {
      this.dialogFormVisible = true
    }
  }
}
</script>

<style scoped lang="scss">
.user-search{
  .user-search-box{
    .user-item-show{
      margin-right: 15px;
    }
    &:last-child{
      margin-right: 0;
    }
  }
  .add-user-name{
    width: 194px;
  }
}

</style>
