<template>
    <component :is="isComponent" :name="name" class="isComponentSideBar"></component>
</template>

<script>
export default {
  data () {
    return {
      name: 'zhang'
    }
  },
  props: {
    isComponent: String
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
.isComponentSideBar{
    display: inline-block;
    width: 180px;
    min-height: calc(100vh - 60px);
    vertical-align: top;
    overflow: hidden;
}
</style>
