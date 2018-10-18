<template>
    <div class="view-container-box">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.view-container-box{
  display: inline-block;
  width: calc(100vw - 182px);
  min-height: calc(100vh - 60px);
  padding: 15px;
  overflow-x: hidden;
  font-size: 16px;
}
</style>
