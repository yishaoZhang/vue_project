<template>
  <div class="home">
    <top-nav></top-nav>
    <side-bar :is-component="isComponent"></side-bar>
    <view-container></view-container>
  </div>
</template>

<script>
// @ is an alias to /src
import topNav from '@/components/home/topNav.vue'
import sideBar from '@/components/home/sideBar.vue'
import viewContainer from '@/components/home/viewContainer.vue'
export default {
  name: 'home',
  data () {
    return {
      isComponent: 'sideBarDefault'
    }
  },
  components: {
    topNav,
    sideBar,
    viewContainer
  }
}
</script>
<style scoped lang="scss">
.home{
    font-size: 0;
}
</style>
