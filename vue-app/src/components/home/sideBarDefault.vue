<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      @open="handleOpen"
      @select="handleMenu"
      @close="handleClose">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>D3</span>
        </template>
        <el-menu-item-group title="图表展示">
          <el-menu-item index="basic">basic</el-menu-item>
          <el-menu-item index="chart">chart</el-menu-item>
          <el-menu-item index="draw">draw</el-menu-item>
          <el-menu-item index="dshap">dShap</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    name: String
  },
  components: {

  },
  mounted () {
  },
  methods: {
    handleOpen () {
      console.log('handleOpen')
    },
    handleClose () {
      console.log('handleClose')
    },
    handleMenu (index) {
      this.$router.push({ path: index })
    }
  }
}
</script>
<style scoped lang="scss">
</style>
